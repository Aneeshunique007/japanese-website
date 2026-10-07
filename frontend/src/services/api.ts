// Client-Side API & Data Service (100% Frontend / Serverless / Vercel-Ready)
// All data is bundled or persisted in browser localStorage with zero external server dependencies.

import { 
  COURSES, 
  JLPT_MOCK_EXAM 
} from '../data/japaneseData';
import { 
  ANIME_DIALOGUES, 
  ANIME_CATEGORIES, 
  DIALOGUES 
} from '../data/animeData';
import { CURRICULUM_DATA } from '../data/curriculumData';
import { ALL_JLPT_WORDS_DATABASE } from '../data/wordsDatabase';
import { ALL_JLPT_KANJI_DATABASE } from '../data/kanjiDatabase';
import { HIRAGANA_DATA, KATAKANA_DATA } from '../data/kanaData';
import { GRAMMAR_LIBRARY } from '../data/grammarData';
import { NIKKI_DAYS, NIKKI_HOMEWORK_CATEGORIES, NIKKI_CLASS_424_QNA } from '../data/nikkiData';

export async function checkServerHealth(): Promise<boolean> {
  // Always online in client-side / Vercel mode
  return true;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  targetLevel: string;
  title: string;
  xp: number;
  streak: number;
  completedLessons: string[];
  studyTimeMinutes: number;
  goalsInMonth: number;
  createdAt: string;
}

const AUTH_USER_KEY = 'anilearn_auth_user';
const USERS_LIST_KEY = 'anilearn_users_db';
const SCHEDULE_KEY_PREFIX = 'anilearn_schedule_';
const PROGRESS_KEY_PREFIX = 'anilearn_progress_';

const memoryStore: Record<string, string> = {};

function safeGetItem(key: string): string | null {
  try {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(key);
    }
  } catch {}
  return memoryStore[key] ?? null;
}

function safeSetItem(key: string, value: string): void {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, value);
      return;
    }
  } catch {}
  memoryStore[key] = value;
}

const DEFAULT_USER: UserProfile = {
  id: 'user_default',
  name: 'Kenji Sato',
  email: 'learner@example.com',
  avatar: '⛩️',
  targetLevel: 'N5',
  title: 'Novice Samurai',
  xp: 1450,
  streak: 5,
  completedLessons: ['lesson-n5-1-1'],
  studyTimeMinutes: 45,
  goalsInMonth: 12,
  createdAt: new Date().toISOString(),
};

function getLocalUser(id?: string): UserProfile {
  try {
    const raw = safeGetItem(AUTH_USER_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (!id || parsed.id === id) return parsed;
    }
    const allUsersRaw = safeGetItem(USERS_LIST_KEY);
    if (allUsersRaw) {
      const users: UserProfile[] = JSON.parse(allUsersRaw);
      const found = users.find(u => u.id === id);
      if (found) return found;
    }
  } catch (e) {
    console.error('Error reading local user:', e);
  }
  return DEFAULT_USER;
}

function saveLocalUser(user: UserProfile): void {
  try {
    safeSetItem(AUTH_USER_KEY, JSON.stringify(user));
    const allUsersRaw = safeGetItem(USERS_LIST_KEY);
    let users: UserProfile[] = allUsersRaw ? JSON.parse(allUsersRaw) : [];
    const idx = users.findIndex(u => u.id === user.id);
    if (idx >= 0) {
      users[idx] = user;
    } else {
      users.push(user);
    }
    safeSetItem(USERS_LIST_KEY, JSON.stringify(users));
  } catch (e) {
    console.error('Error saving local user:', e);
  }
}

// In-memory cache for daily sentence batches loaded on-demand
const batchCache: Record<number, any[]> = {};

async function fetchSentenceBatch(batchNum: number): Promise<any[]> {
  if (batchCache[batchNum]) return batchCache[batchNum];
  try {
    const res = await fetch(`/data/dailySentenceBatches/batch_${batchNum}.json`);
    if (res.ok) {
      const data = await res.json();
      batchCache[batchNum] = data;
      return data;
    }
  } catch {
    // Return empty if fetch fails
  }
  return [];
}

export interface AuthResponse {
  success: boolean;
  user?: UserProfile;
  token?: string;
  error?: string;
}

export const api = {
  // 1. Authentication & User Profile (Client-Side LocalStorage)
  async register(data: { name: string; email: string; password?: string; targetLevel?: string; avatar?: string }): Promise<AuthResponse> {
    const id = 'user_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    const newUser: UserProfile = {
      id,
      name: data.name || 'Learner',
      email: data.email || 'learner@example.com',
      avatar: data.avatar || '⛩️',
      targetLevel: data.targetLevel || 'N5',
      title: 'Novice Samurai',
      xp: 100,
      streak: 1,
      completedLessons: [],
      studyTimeMinutes: 10,
      goalsInMonth: 10,
      createdAt: new Date().toISOString(),
    };
    saveLocalUser(newUser);
    return { success: true, user: newUser, token: 'local_jwt_' + id };
  },

  async login(data: { email: string; password?: string }): Promise<AuthResponse> {
    let user = getLocalUser();
    if (user.email !== data.email) {
      // Check stored users list
      try {
        const allUsersRaw = safeGetItem(USERS_LIST_KEY);
        if (allUsersRaw) {
          const list: UserProfile[] = JSON.parse(allUsersRaw);
          const matched = list.find(u => u.email.toLowerCase() === data.email.toLowerCase());
          if (matched) {
            user = matched;
          }
        }
      } catch {}
    }
    // Update active user
    saveLocalUser(user);
    return { success: true, user, token: 'local_jwt_' + user.id };
  },

  async getUser(id: string) {
    const user = getLocalUser(id);
    return { success: true, user };
  },

  async updateProgress(data: { userId: string; xpGained?: number; lessonId?: string; studyMinutesGained?: number }) {
    const user = getLocalUser(data.userId);
    if (data.xpGained) {
      user.xp = (user.xp || 0) + data.xpGained;
    }
    if (data.lessonId && !user.completedLessons.includes(data.lessonId)) {
      user.completedLessons.push(data.lessonId);
    }
    if (data.studyMinutesGained) {
      user.studyTimeMinutes = (user.studyTimeMinutes || 0) + data.studyMinutesGained;
    }
    saveLocalUser(user);
    return { success: true, user };
  },

  async updateProfile(data: { userId: string; name?: string; targetLevel?: string; avatar?: string; title?: string }) {
    const user = getLocalUser(data.userId);
    if (data.name !== undefined) user.name = data.name;
    if (data.targetLevel !== undefined) user.targetLevel = data.targetLevel;
    if (data.avatar !== undefined) user.avatar = data.avatar;
    if (data.title !== undefined) user.title = data.title;
    saveLocalUser(user);
    return { success: true, user };
  },

  // 2. Courses Endpoints
  async getCourses() {
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
    return { success: true, courses: summary };
  },

  async getCourseById(id: string) {
    const course = COURSES.find(c => c.id === id);
    if (!course) {
      return { success: false, error: 'Course not found' };
    }
    return { success: true, course };
  },

  async getLessonById(id: string) {
    let foundLesson = null;
    let parentCourse = null;
    const allCourseLessons: { id: string; title: string }[] = [];

    for (const course of COURSES) {
      const courseLessons: { id: string; title: string }[] = [];
      let isThisCourse = false;
      for (const mod of course.modules) {
        for (const l of mod.lessons) {
          courseLessons.push({ id: l.id, title: l.title });
          if (l.id === id) {
            foundLesson = l;
            isThisCourse = true;
          }
        }
      }
      if (isThisCourse) {
        parentCourse = { id: course.id, title: course.title, level: course.level };
        allCourseLessons.push(...courseLessons);
        break;
      }
    }

    if (!foundLesson) {
      return { success: false, error: 'Lesson not found' };
    }

    const currentIdx = allCourseLessons.findIndex(l => l.id === id);
    const nextLesson = currentIdx >= 0 && currentIdx < allCourseLessons.length - 1 ? allCourseLessons[currentIdx + 1] : null;
    const prevLesson = currentIdx > 0 ? allCourseLessons[currentIdx - 1] : null;

    return { 
      success: true, 
      lesson: foundLesson, 
      course: parentCourse,
      nextLesson,
      prevLesson 
    };
  },

  async getCurriculum() {
    const unitsWithQuestions = CURRICULUM_DATA.map(unit => {
      const lessons = unit.lessons.map(lesson => {
        if (lesson.questions && lesson.questions.length > 0) {
          return lesson;
        }
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

    return { success: true, units: unitsWithQuestions };
  },

  // 3. Kanji Dictionary
  async getKanji(jlpt?: string, search?: string, limit?: number) {
    let results = [...ALL_JLPT_KANJI_DATABASE];
    if (jlpt && jlpt !== 'ALL') {
      results = results.filter(k => (k.jlpt || '').toUpperCase() === jlpt.toUpperCase());
    }
    if (search && search.trim()) {
      const q = search.trim().toLowerCase();
      results = results.filter(k => 
        k.char.includes(q) ||
        (k.meaning && k.meaning.toLowerCase().includes(q)) ||
        (k.onyomi && k.onyomi.some(o => o.toLowerCase().includes(q))) ||
        (k.kunyomi && k.kunyomi.some(kun => kun.toLowerCase().includes(q)))
      );
    }
    if (limit && limit > 0) {
      results = results.slice(0, limit);
    }
    return { success: true, total: results.length, kanji: results };
  },

  // 4. Vocabulary (Words)
  async getWords(params?: { jlpt?: string; search?: string; pos?: string; limit?: number; page?: number }) {
    let list = [...ALL_JLPT_WORDS_DATABASE];
    if (params?.jlpt && params.jlpt !== 'ALL') {
      const target = params.jlpt.toUpperCase();
      list = list.filter(w => (w.jlpt || '').toUpperCase() === target);
    }
    if (params?.pos && params.pos !== 'ALL') {
      list = list.filter(w => w.pos === params.pos);
    }
    if (params?.search && params.search.trim()) {
      const q = params.search.trim().toLowerCase();
      list = list.filter(w =>
        w.word.toLowerCase().includes(q) ||
        (w.reading && w.reading.toLowerCase().includes(q)) ||
        (w.romaji && w.romaji.toLowerCase().includes(q)) ||
        (w.meaning && w.meaning.toLowerCase().includes(q))
      );
    }
    const total = list.length;
    if (params?.limit && params.limit > 0) {
      const page = params.page && params.page > 0 ? params.page : 1;
      const start = (page - 1) * params.limit;
      list = list.slice(start, start + params.limit);
    }
    return { success: true, total, words: list };
  },

  // 5. Daily Sentences
  async getDailySentences(day?: number, limit?: number, category?: string) {
    const targetDay = day || 1;
    const batchNum = Math.min(15, Math.max(1, Math.ceil(targetDay / 4)));
    const batchData = await fetchSentenceBatch(batchNum);

    let filtered = batchData.length > 0
      ? batchData.filter((q: any) => q.day === targetDay)
      : [];

    if (category && category !== 'ALL') {
      filtered = filtered.filter((q: any) => q.category === category);
    }

    const total = filtered.length;
    const resultList = limit && limit > 0 ? filtered.slice(0, limit) : filtered;

    return {
      success: true,
      total,
      day: targetDay,
      questions: resultList
    };
  },

  async getAllDailySentenceDays() {
    return {
      success: true,
      days: Array.from({ length: 60 }, (_, i) => i + 1)
    };
  },

  // 6. Kana (Hiragana & Katakana)
  async getKana(script?: 'Hiragana' | 'Katakana', category?: 'basic' | 'dakuten' | 'yoon') {
    const allKana: any[] = [];
    if (!script || script === 'Hiragana') {
      if (!category || category === 'basic') allKana.push(...HIRAGANA_DATA.basic.map(k => ({ ...k, script: 'Hiragana', category: 'basic' })));
      if (!category || category === 'dakuten') allKana.push(...HIRAGANA_DATA.dakuten.map(k => ({ ...k, script: 'Hiragana', category: 'dakuten' })));
      if (!category || category === 'yoon') allKana.push(...HIRAGANA_DATA.yoon.map(k => ({ ...k, script: 'Hiragana', category: 'yoon' })));
    }
    if (!script || script === 'Katakana') {
      if (!category || category === 'basic') allKana.push(...KATAKANA_DATA.basic.map(k => ({ ...k, script: 'Katakana', category: 'basic' })));
      if (!category || category === 'dakuten') allKana.push(...KATAKANA_DATA.dakuten.map(k => ({ ...k, script: 'Katakana', category: 'dakuten' })));
      if (!category || category === 'yoon') allKana.push(...KATAKANA_DATA.yoon.map(k => ({ ...k, script: 'Katakana', category: 'yoon' })));
    }
    return { success: true, total: allKana.length, kana: allKana };
  },

  // 7. Grammar
  async getGrammar(jlpt?: string, search?: string) {
    let results = [...GRAMMAR_LIBRARY];
    if (jlpt && jlpt !== 'ALL') {
      results = results.filter(g => g.jlpt.toLowerCase() === jlpt.toLowerCase());
    }
    if (search && search.trim()) {
      const q = search.trim().toLowerCase();
      results = results.filter(g =>
        g.title.toLowerCase().includes(q) ||
        (g.japaneseTitle && g.japaneseTitle.includes(q)) ||
        (g.meaning && g.meaning.toLowerCase().includes(q)) ||
        (g.explanation && g.explanation.toLowerCase().includes(q))
      );
    }
    return { success: true, total: results.length, grammar: results };
  },

  // 8. Anime Dialogues
  async getDialogues(anime?: string) {
    let list = ANIME_DIALOGUES;
    if (anime && anime !== 'all') {
      list = list.filter(d => d.anime.toLowerCase() === anime.toLowerCase());
    }
    return { success: true, dialogues: list, categories: ANIME_CATEGORIES };
  },

  async getDialogueById(id: string) {
    const item = ANIME_DIALOGUES.find(d => d.id === id);
    if (!item) return { success: false, error: 'Dialogue not found' };
    return { success: true, dialogue: item };
  },

  // 9. Exam
  async getExam(level?: string) {
    let questions = [...JLPT_MOCK_EXAM];
    if (level) {
      questions = questions.filter(q => q.level.toLowerCase() === level.toLowerCase());
    }
    return { success: true, total: questions.length, questions };
  },

  // 10. Global Search
  async search(query: string) {
    const q = (query || '').toLowerCase().trim();
    if (!q) return { success: true, results: [], words: [], kanji: [], kana: [], grammar: [] };

    const matchedWords = ALL_JLPT_WORDS_DATABASE.filter(w =>
      (w.word && w.word.toLowerCase().includes(q)) ||
      (w.reading && w.reading.toLowerCase().includes(q)) ||
      (w.romaji && w.romaji.toLowerCase().includes(q)) ||
      (w.meaning && w.meaning.toLowerCase().includes(q))
    );

    const matchedKanji = ALL_JLPT_KANJI_DATABASE.filter(k =>
      k.char.includes(q) || (k.meaning && k.meaning.toLowerCase().includes(q))
    );

    const allKanaList = [
      ...HIRAGANA_DATA.basic, ...HIRAGANA_DATA.dakuten, ...HIRAGANA_DATA.yoon,
      ...KATAKANA_DATA.basic, ...KATAKANA_DATA.dakuten, ...KATAKANA_DATA.yoon
    ];
    const matchedKana = allKanaList.filter(kn =>
      kn.char.includes(q) || (kn.romaji && kn.romaji.toLowerCase().includes(q))
    );

    const matchedGrammar = GRAMMAR_LIBRARY.filter(g =>
      g.title.toLowerCase().includes(q) || (g.meaning && g.meaning.toLowerCase().includes(q))
    );

    const dialogueMatches = DIALOGUES.filter(d =>
      d.title.toLowerCase().includes(q)
    ).map(d => ({ type: 'dialogue', title: d.title, url: `/dialogues` }));

    const kanjiMatches = matchedKanji.map(k => ({
      type: 'kanji',
      title: `${k.char} (${k.meaning})`,
      url: `/kanji?search=${k.char}`
    }));

    const grammarMatches = matchedGrammar.map(g => ({
      type: 'grammar',
      title: `${g.title} - ${g.meaning}`,
      url: `/grammar`
    }));

    return {
      success: true,
      results: [...kanjiMatches, ...grammarMatches, ...dialogueMatches],
      words: matchedWords,
      kanji: matchedKanji,
      kana: matchedKana,
      grammar: matchedGrammar
    };
  },

  // 11. Dynamic Client-Side Leaderboard (Ranks current user in real-time)
  async getLeaderboard(userId?: string) {
    const current = getLocalUser(userId);
    const mockPeers = [
      { id: 'p1', name: 'Aoi Tanaka', avatar: '🌸', xp: 4200, streak: 18, targetLevel: 'N4', title: 'Kanji Master' },
      { id: 'p2', name: 'Ren Takahashi', avatar: '⚡', xp: 3850, streak: 14, targetLevel: 'N5', title: 'Grammar Sage' },
      { id: 'p3', name: 'Yuki Watanabe', avatar: '🦊', xp: 3100, streak: 12, targetLevel: 'N5', title: 'Vocab Ninja' },
      { id: 'p4', name: 'Daiki Ito', avatar: '🐉', xp: 2600, streak: 9, targetLevel: 'N5', title: 'Kana Champion' },
      { id: 'p5', name: 'Mei Nakamura', avatar: '🍵', xp: 1900, streak: 7, targetLevel: 'N5', title: 'Dialect Explorer' },
      { id: 'p6', name: 'Sora Kobayashi', avatar: '🎏', xp: 1200, streak: 4, targetLevel: 'N5', title: 'Rookie Samurai' },
      { id: 'p7', name: 'Hana Kato', avatar: '🍙', xp: 850, streak: 3, targetLevel: 'N5', title: 'Apprentice' },
    ];

    // Combine current user with peers
    const allUsers = [...mockPeers.filter(p => p.id !== current.id), current];
    allUsers.sort((a, b) => (b.xp || 0) - (a.xp || 0));

    const leaderboard = allUsers.map((u, idx) => ({
      id: u.id,
      name: u.name,
      avatar: u.avatar,
      xp: u.xp,
      streak: u.streak,
      rank: idx + 1,
      badge: idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `${idx + 1}th`,
      isCurrent: u.id === current.id || (userId ? u.id === userId : false),
    }));

    return {
      success: true,
      league: 'Diamond League',
      leaderboard
    };
  },

  // 12. Study Schedule (Stored persistently in browser localStorage)
  async getSchedule(userId?: string) {
    const key = SCHEDULE_KEY_PREFIX + (userId || 'default_user');
    try {
      const stored = safeGetItem(key);
      if (stored) {
        return { success: true, schedule: JSON.parse(stored) };
      }
    } catch {}

    const todayStr = new Date().toISOString().slice(0, 10);
    const defaultSchedule = {
      userId: userId || 'default_user',
      targetDays: 60,
      currentDay: 1,
      startDate: todayStr,
      lastActiveDate: todayStr,
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
    };
    try {
      safeSetItem(key, JSON.stringify(defaultSchedule));
    } catch {}
    return { success: true, schedule: defaultSchedule };
  },

  async saveSchedule(data: {
    userId?: string;
    targetDays?: number | string;
    currentDay?: number;
    customPace?: any;
    autoAdvance?: boolean;
    startDate?: string;
  }) {
    const key = SCHEDULE_KEY_PREFIX + (data.userId || 'default_user');
    let schedule: any = {};
    try {
      const stored = safeGetItem(key);
      if (stored) schedule = JSON.parse(stored);
    } catch {}

    const updated = {
      ...schedule,
      ...data,
      lastActiveDate: new Date().toISOString().slice(0, 10),
    };

    try {
      safeSetItem(key, JSON.stringify(updated));
    } catch {}
    return { success: true, schedule: updated };
  },

  async resetSchedule(userId?: string) {
    const key = SCHEDULE_KEY_PREFIX + (userId || 'default_user');
    const todayStr = new Date().toISOString().slice(0, 10);
    let schedule: any = {};
    try {
      const stored = safeGetItem(key);
      if (stored) schedule = JSON.parse(stored);
    } catch {}

    schedule.currentDay = 1;
    schedule.startDate = todayStr;
    schedule.lastActiveDate = todayStr;

    try {
      safeSetItem(key, JSON.stringify(schedule));
    } catch {}
    return { success: true, schedule, message: 'Schedule reset to Day 1' };
  },

  // 13. Progress (Stored persistently in browser localStorage)
  async getProgress(userId?: string) {
    const key = PROGRESS_KEY_PREFIX + (userId || 'default_user');
    try {
      const stored = safeGetItem(key);
      if (stored) {
        return { success: true, ...JSON.parse(stored) };
      }
    } catch {}
    return { success: true, learnedKana: [], learnedKanji: [], learnedWords: [] };
  },

  async saveProgress(data: { userId?: string; learnedKana?: string[]; learnedKanji?: string[]; learnedWords?: string[] }) {
    const key = PROGRESS_KEY_PREFIX + (data.userId || 'default_user');
    let existing: any = { learnedKana: [], learnedKanji: [], learnedWords: [] };
    try {
      const stored = safeGetItem(key);
      if (stored) existing = JSON.parse(stored);
    } catch {}

    if (data.learnedKana) existing.learnedKana = data.learnedKana;
    if (data.learnedKanji) existing.learnedKanji = data.learnedKanji;
    if (data.learnedWords) existing.learnedWords = data.learnedWords;

    try {
      safeSetItem(key, JSON.stringify(existing));
    } catch {}
    return { success: true, message: 'Progress saved locally' };
  },

  // 14. Nikki Learnings Endpoints
  async getNikkiData() {
    return {
      success: true,
      days: NIKKI_DAYS,
      homework: NIKKI_HOMEWORK_CATEGORIES,
      qna424: NIKKI_CLASS_424_QNA
    };
  },

  async getNikkiDay(id: string) {
    const day = NIKKI_DAYS.find(d => d.id === id || d.classCode.toLowerCase().includes(id.toLowerCase()));
    if (!day) return { success: false, error: 'Nikki day lesson not found' };
    return { success: true, day };
  },

  async getNikkiHomework() {
    return {
      success: true,
      categories: NIKKI_HOMEWORK_CATEGORIES
    };
  }
};
