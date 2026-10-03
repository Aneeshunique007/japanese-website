import { Router, Request, Response } from 'express';
import { 
  COURSES, 
  KANJI_DICTIONARY, 
  GRAMMAR_LIBRARY, 
  JLPT_MOCK_EXAM 
} from '../data/japaneseData.js';
import { 
  ANIME_DIALOGUES, 
  ANIME_CATEGORIES,
  DIALOGUES 
} from '../data/animeData.js';

import { authRouter } from './auth.js';
import { CURRICULUM_DATA } from '../data/curriculumData.js';
import { User } from '../models/User.js';
import { Word } from '../models/Word.js';
import { Kanji } from '../models/Kanji.js';
import { DailySentence } from '../models/DailySentence.js';
import { Kana } from '../models/Kana.js';
import { StudySchedule } from '../models/StudySchedule.js';
import { NIKKI_DAYS, NIKKI_HOMEWORK_CATEGORIES, NIKKI_CLASS_424_QNA } from '../data/nikkiData.js';

export const apiRouter = Router();

// Auth router mounting
apiRouter.use('/auth', authRouter);

// Curriculum (Units & Lessons)
apiRouter.get('/curriculum', (_req: Request, res: Response) => {
  const unitsWithQuestions = CURRICULUM_DATA.map(unit => {
    const lessons = unit.lessons.map(lesson => {
      if (lesson.questions && lesson.questions.length > 0) {
        return lesson;
      }
      // Synthesize review questions from other lessons in the same unit
      const otherQuestions = unit.lessons
        .filter(l => l.id !== lesson.id && l.questions && l.questions.length > 0)
        .flatMap(l => l.questions || []);

      const synthesized = otherQuestions.length > 0
        ? [...otherQuestions].sort(() => 0.5 - Math.random()).slice(0, 5)
        : [];

      return {
        ...lesson,
        title: lesson.title.includes('Review') ? lesson.title : `${unit.title} Review Drill`,
        subtitle: lesson.subtitle || `Unit ${unit.unitNumber} Comprehensive Review`,
        icon: lesson.icon || 'Trophy',
        questions: synthesized
      };
    });

    return {
      ...unit,
      lessons
    };
  });

  res.json({ success: true, units: unitsWithQuestions });
});

// 1. Courses Endpoints
apiRouter.get('/courses', (_req: Request, res: Response) => {
  const summary = COURSES.map(c => ({
    id: c.id,
    level: c.level,
    title: c.title,
    japaneseTitle: c.japaneseTitle,
    description: c.description,
    badge: c.badge,
    lessonsCount: c.lessonsCount,
    estimatedHours: c.estimatedHours,
    kanjiCount: c.kanjiCount,
    vocabCount: c.vocabCount,
    grammarCount: c.grammarCount,
    passingScore: c.passingScore,
    examSections: c.examSections,
    modulesCount: c.modules.length
  }));
  res.json({ success: true, courses: summary });
});

apiRouter.get('/courses/:id', (req: Request, res: Response) => {
  const course = COURSES.find(c => c.id === req.params.id);
  if (!course) {
    return res.status(404).json({ success: false, error: 'Course not found' });
  }
  res.json({ success: true, course });
});

apiRouter.get('/lessons/:id', (req: Request, res: Response) => {
  let foundLesson = null;
  let parentCourse = null;
  let allCourseLessons: { id: string; title: string }[] = [];

  for (const course of COURSES) {
    const courseLessons: { id: string; title: string }[] = [];
    let isThisCourse = false;
    for (const mod of course.modules) {
      for (const l of mod.lessons) {
        courseLessons.push({ id: l.id, title: l.title });
        if (l.id === req.params.id) {
          foundLesson = l;
          isThisCourse = true;
        }
      }
    }
    if (isThisCourse) {
      parentCourse = { id: course.id, title: course.title, level: course.level };
      allCourseLessons = courseLessons;
      break;
    }
  }

  if (!foundLesson) {
    return res.status(404).json({ success: false, error: 'Lesson not found' });
  }

  const currentIdx = allCourseLessons.findIndex(l => l.id === req.params.id);
  const nextLesson = currentIdx >= 0 && currentIdx < allCourseLessons.length - 1 ? allCourseLessons[currentIdx + 1] : null;
  const prevLesson = currentIdx > 0 ? allCourseLessons[currentIdx - 1] : null;

  res.json({ 
    success: true, 
    lesson: foundLesson, 
    course: parentCourse,
    nextLesson,
    prevLesson 
  });
});

// 2. Kanji Dictionary Endpoints (from MongoDB with fallback)
apiRouter.get('/kanji', async (req: Request, res: Response) => {
  try {
    const { jlpt, search, limit } = req.query;
    const query: any = {};
    if (jlpt && jlpt !== 'ALL') {
      query.jlpt = (jlpt as string).toUpperCase();
    }
    if (search && typeof search === 'string') {
      const q = search.trim();
      query.$or = [
        { char: { $regex: q, $options: 'i' } },
        { meaning: { $regex: q, $options: 'i' } },
        { onyomi: { $regex: q, $options: 'i' } },
        { kunyomi: { $regex: q, $options: 'i' } },
      ];
    }
    let mongoQuery = Kanji.find(query);
    if (limit) {
      mongoQuery = mongoQuery.limit(parseInt(limit as string, 10));
    }
    const kanji = await mongoQuery;
    if (kanji && kanji.length > 0) {
      return res.json({ success: true, total: kanji.length, kanji });
    }

    // Fallback to static if MongoDB empty
    let results = [...KANJI_DICTIONARY];
    if (jlpt && typeof jlpt === 'string' && jlpt !== 'ALL') {
      results = results.filter(k => k.jlpt.toLowerCase() === jlpt.toLowerCase());
    }
    if (search && typeof search === 'string') {
      const q = (search as string).toLowerCase();
      results = results.filter(k => 
        k.char.includes(q) ||
        k.meaning.toLowerCase().includes(q) ||
        k.onyomi.some(o => o.toLowerCase().includes(q)) ||
        k.kunyomi.some(kun => kun.toLowerCase().includes(q))
      );
    }
    res.json({ success: true, total: results.length, kanji: results });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 3. Vocabulary Endpoints (from MongoDB)
apiRouter.get('/words', async (req: Request, res: Response) => {
  try {
    const { jlpt, search, pos, limit, page } = req.query;
    const query: any = {};
    if (jlpt && jlpt !== 'ALL') {
      query.jlpt = (jlpt as string).toUpperCase();
    }
    if (pos && pos !== 'ALL') {
      query.pos = pos;
    }
    if (search && typeof search === 'string') {
      const q = search.trim();
      query.$or = [
        { word: { $regex: q, $options: 'i' } },
        { reading: { $regex: q, $options: 'i' } },
        { romaji: { $regex: q, $options: 'i' } },
        { meaning: { $regex: q, $options: 'i' } },
      ];
    }
    const maxLimit = limit ? parseInt(limit as string, 10) : 0;
    const pageNum = page ? parseInt(page as string, 10) : 1;
    const skip = maxLimit > 0 ? (pageNum - 1) * maxLimit : 0;

    const total = await Word.countDocuments(query);
    let mongoQuery = Word.find(query);
    if (maxLimit > 0) {
      mongoQuery = mongoQuery.skip(skip).limit(maxLimit);
    }
    const words = await mongoQuery;
    res.json({ success: true, total, words });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 4. Daily Sentences Quiz Endpoints (from MongoDB)
apiRouter.get('/daily-sentences', async (req: Request, res: Response) => {
  try {
    const { day, limit, category } = req.query;
    const query: any = {};
    if (day) {
      query.day = parseInt(day as string, 10);
    }
    if (category) {
      query.category = category;
    }
    let mongoQuery = DailySentence.find(query).sort({ day: 1, questionNumber: 1 });
    if (limit) {
      mongoQuery = mongoQuery.limit(parseInt(limit as string, 10));
    }
    const questions = await mongoQuery;
    res.json({ 
      success: true, 
      total: questions.length, 
      day: day ? parseInt(day as string, 10) : undefined, 
      questions 
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

apiRouter.get('/daily-sentences/all-days', async (_req: Request, res: Response) => {
  try {
    const distinctDays = await DailySentence.distinct('day');
    res.json({ success: true, days: distinctDays.sort((a, b) => a - b) });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5. Kana Character & Word Details (from MongoDB)
apiRouter.get('/kana', async (req: Request, res: Response) => {
  try {
    const { script, category } = req.query;
    const query: any = {};
    if (script) {
      query.script = script;
    }
    if (category) {
      query.category = category;
    }
    const kana = await Kana.find(query);
    res.json({ success: true, total: kana.length, kana });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});


// 3. Grammar Library Endpoints
apiRouter.get('/grammar', (req: Request, res: Response) => {
  const { jlpt, search } = req.query;
  let results = [...GRAMMAR_LIBRARY];

  if (jlpt && typeof jlpt === 'string' && jlpt !== 'ALL') {
    results = results.filter(g => g.jlpt.toLowerCase() === jlpt.toLowerCase());
  }

  if (search && typeof search === 'string') {
    const q = search.toLowerCase();
    results = results.filter(g => 
      g.title.toLowerCase().includes(q) ||
      g.japaneseTitle.includes(q) ||
      g.meaning.toLowerCase().includes(q) ||
      g.explanation.toLowerCase().includes(q)
    );
  }

  res.json({ success: true, total: results.length, grammar: results });
});

// 4. Conversational Anime Dialogues
apiRouter.get('/dialogues', (req: Request, res: Response) => {
  const anime = req.query.anime as string;
  let list = ANIME_DIALOGUES;
  if (anime && anime !== 'all') {
    list = list.filter(d => d.anime.toLowerCase() === anime.toLowerCase());
  }
  res.json({ success: true, dialogues: list, categories: ANIME_CATEGORIES });
});

apiRouter.get('/dialogues/:id', (req: Request, res: Response) => {
  const item = ANIME_DIALOGUES.find(d => d.id === req.params.id);
  if (!item) {
    return res.status(404).json({ success: false, error: 'Dialogue not found' });
  }
  res.json({ success: true, dialogue: item });
});

// 5. JLPT Mock Practice Exam
apiRouter.get('/exam', (req: Request, res: Response) => {
  const { level } = req.query;
  let questions = [...JLPT_MOCK_EXAM];
  if (level && typeof level === 'string') {
    questions = questions.filter(q => q.level.toLowerCase() === level.toLowerCase());
  }
  res.json({ success: true, total: questions.length, questions });
});

// 6. Global Search
apiRouter.get('/search', (req: Request, res: Response) => {
  const query = (req.query.q as string || '').toLowerCase().trim();
  if (!query) {
    return res.json({ success: true, results: [] });
  }

  const kanjiMatches = KANJI_DICTIONARY.filter(k => 
    k.char.includes(query) || k.meaning.toLowerCase().includes(query)
  ).map(k => ({ type: 'kanji', title: `${k.char} (${k.meaning})`, url: `/kanji?search=${k.char}` }));

  const grammarMatches = GRAMMAR_LIBRARY.filter(g => 
    g.title.toLowerCase().includes(query) || g.meaning.toLowerCase().includes(query)
  ).map(g => ({ type: 'grammar', title: `${g.title} - ${g.meaning}`, url: `/grammar` }));

  const dialogueMatches = DIALOGUES.filter(d => 
    d.title.toLowerCase().includes(query)
  ).map(d => ({ type: 'dialogue', title: d.title, url: `/dialogues` }));

  res.json({
    success: true,
    results: [...kanjiMatches, ...grammarMatches, ...dialogueMatches]
  });
});

// 7. Dynamic Leaderboard Endpoint (Direct from MongoDB Registered Users)
apiRouter.get('/leaderboard', async (req: Request, res: Response) => {
  try {
    const currentUserId = req.query.userId as string;
    const users = await User.find().select('name avatar xp streak targetLevel title').sort({ xp: -1 }).limit(20);

    const leaderboard = users.map((user, idx) => ({
      id: user._id.toString(),
      name: user.name,
      avatar: user.avatar,
      xp: user.xp,
      streak: user.streak,
      rank: idx + 1,
      badge: idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `${idx + 1}th`,
      isCurrent: currentUserId ? user._id.toString() === currentUserId : false,
    }));

    res.json({
      success: true,
      league: 'Diamond League',
      leaderboard
    });
  } catch (err: any) {
    res.json({ success: true, league: 'Diamond League', leaderboard: [] });
  }
});

// 8. Study Schedule Endpoints (Backed by MongoDB)
apiRouter.get('/schedule/:userId?', async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId || (req.query.userId as string) || 'default_user';
    const todayStr = new Date().toISOString().slice(0, 10);

    const schedule = await StudySchedule.findOneAndUpdate(
      { userId },
      {
        $set: { lastActiveDate: todayStr },
        $setOnInsert: {
          userId,
          targetDays: 60,
          currentDay: 1,
          startDate: todayStr,
          autoAdvance: true,
          customPace: {
            enabled: false,
            hiraganaPerDay: 10,
            katakanaPerDay: 10,
            kanaPerDay: 10,
            kanjiPerDay: 2,
            wordsPerDay: 14,
            lessonIntervalDays: 3,
            sentencesPerDay: 50,
            quizzesPerDay: 2,
            skipKana: false,
          },
          learnedKana: [],
          learnedKanji: [],
          learnedWords: [],
        },
      },
      { upsert: true, returnDocument: 'after', setDefaultsOnInsert: true }
    );

    res.json({ success: true, schedule: schedule.toJSON() });
  } catch (err: any) {
    if (err.code === 11000) {
      try {
        const userId = req.params.userId || (req.query.userId as string) || 'default_user';
        const fallback = await StudySchedule.findOne({ userId });
        if (fallback) {
          return res.json({ success: true, schedule: fallback.toJSON() });
        }
      } catch {}
    }
    console.error('Error fetching study schedule from MongoDB:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

apiRouter.post('/schedule', async (req: Request, res: Response) => {
  try {
    const { userId = 'default_user', targetDays, currentDay, customPace, autoAdvance, startDate } = req.body;
    const todayStr = new Date().toISOString().slice(0, 10);

    const updateFields: any = {
      lastActiveDate: todayStr,
    };
    if (targetDays !== undefined) updateFields.targetDays = targetDays;
    if (currentDay !== undefined) updateFields.currentDay = currentDay;
    if (customPace !== undefined) updateFields.customPace = customPace;
    if (autoAdvance !== undefined) updateFields.autoAdvance = autoAdvance;
    if (startDate !== undefined) updateFields.startDate = startDate;

    const setOnInsert: any = {
      userId,
      learnedKana: [],
      learnedKanji: [],
      learnedWords: [],
    };
    if (targetDays === undefined) setOnInsert.targetDays = 60;
    if (currentDay === undefined) setOnInsert.currentDay = 1;
    if (startDate === undefined) setOnInsert.startDate = todayStr;
    if (autoAdvance === undefined) setOnInsert.autoAdvance = true;
    if (customPace === undefined) {
      setOnInsert.customPace = {
        enabled: false,
        hiraganaPerDay: 10,
        katakanaPerDay: 10,
        kanaPerDay: 10,
        kanjiPerDay: 2,
        wordsPerDay: 14,
        lessonIntervalDays: 3,
        sentencesPerDay: 50,
        quizzesPerDay: 2,
        skipKana: false,
      };
    }

    const schedule = await StudySchedule.findOneAndUpdate(
      { userId },
      {
        $set: updateFields,
        $setOnInsert: setOnInsert,
      },
      { upsert: true, returnDocument: 'after', setDefaultsOnInsert: true }
    );

    res.json({ success: true, schedule: schedule.toJSON() });
  } catch (err: any) {
    if (err.code === 11000) {
      try {
        const fallback = await StudySchedule.findOne({ userId: req.body.userId || 'default_user' });
        if (fallback) {
          return res.json({ success: true, schedule: fallback.toJSON() });
        }
      } catch {}
    }
    console.error('Error saving study schedule to MongoDB:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

apiRouter.post('/schedule/reset', async (req: Request, res: Response) => {
  try {
    const { userId = 'default_user' } = req.body;
    const todayStr = new Date().toISOString().slice(0, 10);

    const schedule = await StudySchedule.findOneAndUpdate(
      { userId },
      {
        $set: {
          currentDay: 1,
          startDate: todayStr,
          lastActiveDate: todayStr,
        },
        $setOnInsert: {
          userId,
          targetDays: 60,
          autoAdvance: true,
          customPace: {
            enabled: false,
            kanaPerDay: 8,
            kanjiPerDay: 2,
            wordsPerDay: 14,
            lessonIntervalDays: 3,
            sentencesPerDay: 50,
          },
          learnedKana: [],
          learnedKanji: [],
          learnedWords: [],
        },
      },
      { upsert: true, returnDocument: 'after', setDefaultsOnInsert: true }
    );

    res.json({ success: true, schedule: schedule.toJSON(), message: 'Schedule reset to Day 1 today in MongoDB' });
  } catch (err: any) {
    if (err.code === 11000) {
      try {
        const fallback = await StudySchedule.findOne({ userId: req.body.userId || 'default_user' });
        if (fallback) {
          return res.json({ success: true, schedule: fallback.toJSON(), message: 'Schedule reset to Day 1 today in MongoDB' });
        }
      } catch {}
    }
    console.error('Error resetting schedule in MongoDB:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// 9. Learned items in MongoDB
apiRouter.get('/progress/:userId?', async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId || (req.query.userId as string) || 'default_user';
    const schedule = await StudySchedule.findOne({ userId });
    res.json({
      success: true,
      learnedKana: schedule?.learnedKana || [],
      learnedKanji: schedule?.learnedKanji || [],
      learnedWords: schedule?.learnedWords || [],
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

apiRouter.post('/progress', async (req: Request, res: Response) => {
  try {
    const { userId = 'default_user', learnedKana, learnedKanji, learnedWords } = req.body;
    const updateFields: any = {};
    if (learnedKana) updateFields.learnedKana = learnedKana;
    if (learnedKanji) updateFields.learnedKanji = learnedKanji;
    if (learnedWords) updateFields.learnedWords = learnedWords;

    await StudySchedule.findOneAndUpdate(
      { userId },
      {
        $set: updateFields,
        $setOnInsert: {
          userId,
          targetDays: 60,
          currentDay: 1,
          autoAdvance: true,
        },
      },
      { upsert: true, returnDocument: 'after', setDefaultsOnInsert: true }
    );

    res.json({ success: true, message: 'Progress saved to MongoDB' });
  } catch (err: any) {
    if (err.code === 11000) {
      return res.json({ success: true, message: 'Progress saved to MongoDB' });
    }
    res.status(500).json({ success: false, error: err.message });
  }
});

// 10. Nikki Learnings Endpoints (Classes 404–464, QnA & Complete Homework)
apiRouter.get('/nikki', (_req: Request, res: Response) => {
  res.json({
    success: true,
    days: NIKKI_DAYS,
    homework: NIKKI_HOMEWORK_CATEGORIES,
    qna424: NIKKI_CLASS_424_QNA
  });
});

apiRouter.get('/nikki/days/:id', (req: Request, res: Response) => {
  const day = NIKKI_DAYS.find(d => d.id === req.params.id || d.classCode.toLowerCase().includes(req.params.id.toLowerCase()));
  if (!day) {
    return res.status(404).json({ success: false, error: 'Nikki day lesson not found' });
  }
  res.json({ success: true, day });
});

apiRouter.get('/nikki/homework', (_req: Request, res: Response) => {
  res.json({
    success: true,
    categories: NIKKI_HOMEWORK_CATEGORIES
  });
});


