// Daily Mastery Quiz Generator - Covers 100% of the Kana, Kanji, Words, and Sentences for a specific day

import { studyScheduleStore } from './studyScheduleStore';
import { learnedStore } from './learnedStore';
import { dataStore } from '../services/dataStore';
import { api } from '../services/api';
import { WordItem, KanjiDetailsData, KanaChar } from '../types';

import { GRAMMAR_POINTS } from './grammarData';

export type MasteryQuestionType = 
  | 'sentence-drill'
  | 'kana-drill'
  | 'kanji-drill'
  | 'word-drill'
  | 'grammar-drill';

export interface WordBankTile {
  id: string;
  text: string;
  romaji?: string;
  furigana?: string;
}

export interface DailyMasteryQuestion {
  id: string;
  type: MasteryQuestionType;
  category: 'kana' | 'kanji' | 'word' | 'sentence' | 'grammar';
  prompt: string;
  speakerCharacter?: 'falstaff' | 'vikram' | 'lily';
  
  // Display text
  japaneseText?: string;
  furigana?: string;
  romaji?: string;
  english?: string;

  // Audio for TTS
  audioText?: string;

  // Speech verification
  targetSpokenJapanese?: string;
  alternateReadings?: string[];

  // Word Bank (Sentence building & Tap what you hear)
  targetTokens?: WordBankTile[];
  distractorTokens?: WordBankTile[];
  allTiles?: WordBankTile[];

  // Multiple Choice (for Kana/Kanji checks)
  options?: string[];
  correctOptionIndex?: number;
  optionsWithDetails?: { text: string; subtext?: string }[];

  explanation?: string;
}

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export interface LearningStatus {
  hasLearnedKana: boolean;
  hasLearnedKanji: boolean;
  hasLearnedWords: boolean;
  totalLearned: number;
  missingCategories: string[];
}

/** Returns which categories the user has studied for the given day */
export function getLearningStatus(day: number): LearningStatus {
  const targets = studyScheduleStore.getDayTargets(day);
  const learnedKanaSet = new Set(learnedStore.getLearnedKanaList());
  const learnedKanjiSet = new Set(learnedStore.getLearnedKanjiList());
  const learnedWordSet = new Set(learnedStore.getLearnedWordsList());

  const kanaAssigned = (targets.kana || []).map((k: any) => k.char);
  const kanjiAssigned = (targets.kanji || []).map((kj: any) => kj.character || kj.kanji || '');
  const wordsAssigned = (targets.words || []).map((w: any) => String(w.id || w.word || ''));

  const hasLearnedKana = kanaAssigned.some((c: string) => learnedKanaSet.has(c));
  const hasLearnedKanji = kanjiAssigned.some((c: string) => learnedKanjiSet.has(c));
  const hasLearnedWords = wordsAssigned.some((c: string) => learnedWordSet.has(c));

  const learnedKanaCount = kanaAssigned.filter((c: string) => learnedKanaSet.has(c)).length;
  const learnedKanjiCount = kanjiAssigned.filter((c: string) => learnedKanjiSet.has(c)).length;
  const learnedWordsCount = wordsAssigned.filter((c: string) => learnedWordSet.has(c)).length;
  const totalLearned = learnedKanaCount + learnedKanjiCount + learnedWordsCount;

  const missingCategories: string[] = [];
  if (kanaAssigned.length > 0 && !hasLearnedKana) missingCategories.push('Kana');
  if (kanjiAssigned.length > 0 && !hasLearnedKanji) missingCategories.push('Kanji');
  if (wordsAssigned.length > 0 && !hasLearnedWords) missingCategories.push('Words');

  return { hasLearnedKana, hasLearnedKanji, hasLearnedWords, totalLearned, missingCategories };
}

export async function generateDailyMasteryQuestions(day: number): Promise<DailyMasteryQuestion[]> {
  const targets = studyScheduleStore.getDayTargets(day);
  const questions: DailyMasteryQuestion[] = [];

  // User's learned sets
  const learnedKanaSet = new Set(learnedStore.getLearnedKanaList());
  const learnedKanjiSet = new Set(learnedStore.getLearnedKanjiList());
  const learnedWordSet = new Set(learnedStore.getLearnedWordsList ? learnedStore.getLearnedWordsList() : []);

  // Use learned items, or fallback to all assigned targets for the day so 100% of today's curriculum is tested
  const kanaTargets = targets.kana || [];
  const learnedKanaInDay = kanaTargets.filter((k: any) => learnedKanaSet.has(k.char));
  const effectiveKana = learnedKanaInDay.length > 0 ? learnedKanaInDay : kanaTargets;

  const kanaList = effectiveKana.map((k: any) => ({
    char: k.char,
    romaji: k.romaji,
    script: (k.script === 'hiragana' ? 'Hiragana' : 'Katakana') as 'Hiragana' | 'Katakana',
    example: k.example,
    strokeCount: k.strokeCount,
    meaning: k.meaning,
    words: k.words
  })) as KanaChar[];

  const kanjiTargets = targets.kanji || [];
  const learnedKanjiInDay = kanjiTargets.filter((kj: any) => learnedKanjiSet.has(kj.character || kj.kanji || ''));
  const kanjiList: KanjiDetailsData[] = (learnedKanjiInDay.length > 0 ? learnedKanjiInDay : kanjiTargets) as KanjiDetailsData[];

  const wordTargets = targets.words || [];
  const learnedWordsInDay = wordTargets.filter((w: any) => learnedWordSet.has(String(w.id || w.word || '')));
  const wordList: WordItem[] = (learnedWordsInDay.length > 0 ? learnedWordsInDay : wordTargets) as WordItem[];


  // 1. ALL KANA of the day (Sound recognition & Reading drills)
  kanaList.forEach((k, idx) => {
    if (idx % 2 === 0) {
      // Multiple choice listening: audio plays k.char, pick correct kana
      const distractorPool = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も']
        .filter(c => c !== k.char);
      const shuffledDistractors = shuffleArray(distractorPool).slice(0, 3);
      const options = shuffleArray([k.char, ...shuffledDistractors]);
      const correctIdx = options.indexOf(k.char);

      questions.push({
        id: `day-${day}-kana-listen-${idx}`,
        type: 'kana-drill',
        category: 'kana',
        prompt: `Listen and select the matching Kana:`,
        audioText: k.char,
        japaneseText: k.char,
        romaji: k.romaji,
        options,
        correctOptionIndex: correctIdx,
        optionsWithDetails: options.map(opt => ({ text: opt, subtext: opt === k.char ? k.romaji : undefined })),
        explanation: `"${k.char}" represents the sound "${k.romaji}".`
      });
    } else {
      // Multiple choice reading: look at kana, pick sound (romaji)
      const distractorRomaji = ['a', 'i', 'u', 'e', 'o', 'ka', 'ki', 'ku', 'ke', 'ko', 'sa', 'shi', 'su', 'se', 'so', 'ta', 'chi', 'tsu', 'te', 'to']
        .filter(r => r !== k.romaji);
      const shuffledDistractors = shuffleArray(distractorRomaji).slice(0, 3);
      const options = shuffleArray([k.romaji, ...shuffledDistractors]);
      const correctIdx = options.indexOf(k.romaji);

      questions.push({
        id: `day-${day}-kana-read-${idx}`,
        type: 'kana-drill',
        category: 'kana',
        prompt: `What sound does "${k.char}" make?`,
        japaneseText: k.char,
        romaji: k.romaji,
        audioText: k.char,
        options,
        correctOptionIndex: correctIdx,
        optionsWithDetails: options.map(opt => ({ text: opt })),
        explanation: `The kana "${k.char}" is read as "${k.romaji}".`
      });
    }
  });

  // 2. ALL KANJI of the day (Readings & Meaning)
  kanjiList.forEach((kj, idx) => {
    const primaryReading = (kj.onyomi && kj.onyomi[0]) || (kj.kunyomi && kj.kunyomi[0]) || '';
    const cleanReading = primaryReading.replace(/[.-]/g, '');

    // Kanji Question: Meaning & Reading test
    const allKanjiPool: any[] = dataStore.kanjiN5 || [];
    const distractorMeanings = shuffleArray(
      allKanjiPool.filter((k: any) => k.char !== kj.char).map((k: any) => String(k.meaning || ''))
    ).slice(0, 3);

    const options: string[] = shuffleArray([String(kj.meaning || ''), ...distractorMeanings]);
    const correctIdx = options.indexOf(String(kj.meaning || ''));

    questions.push({
      id: `day-${day}-kanji-${idx}`,
      type: 'kanji-drill',
      category: 'kanji',
      prompt: `What does this Kanji mean?`,
      japaneseText: kj.char,
      furigana: cleanReading,
      romaji: primaryReading,
      english: kj.meaning,
      audioText: cleanReading || kj.char,
      targetSpokenJapanese: cleanReading || kj.char,
      options,
      correctOptionIndex: correctIdx,
      optionsWithDetails: options.map(opt => ({ text: opt })),
      explanation: `Kanji ${kj.char} means "${kj.meaning}". Onyomi: ${kj.onyomi?.join(', ') || 'N/A'}, Kunyomi: ${kj.kunyomi?.join(', ') || 'N/A'}.`
    });
  });

  // 3. ALL VOCABULARY WORDS of the day (Meaning & Audio Drills)
  wordList.forEach((w, idx) => {
    const allWordsPool: WordItem[] = dataStore.wordsN5 || [];
    const distractorMeanings = shuffleArray(
      allWordsPool
        .filter(item => item.word !== w.word && item.meaning !== w.meaning)
        .map(item => item.meaning)
    ).slice(0, 3);

    const options = shuffleArray([w.meaning, ...distractorMeanings]);
    const correctIdx = options.indexOf(w.meaning);

    questions.push({
      id: `day-${day}-word-${idx}`,
      type: 'word-drill',
      category: 'word',
      prompt: `What does this word mean?`,
      japaneseText: w.word,
      furigana: w.reading || w.word,
      romaji: w.romaji,
      english: w.meaning,
      audioText: w.reading || w.word,
      options,
      correctOptionIndex: correctIdx,
      optionsWithDetails: options.map(opt => ({ text: opt })),
      explanation: `"${w.word}" (${w.reading || w.romaji}) means "${w.meaning}".`
    });
  });

  // 4A. VOCABULARY & KANJI CONTEXT SENTENCES (Comprehension)
  const dailySentences: { sentence: string; english: string; romaji?: string; furigana?: string; targetWord: string }[] = [];

  wordList.forEach(w => {
    if (w.sentences && w.sentences.length > 0) {
      w.sentences.forEach(s => {
        if (s.sentence && s.english) {
          dailySentences.push({
            sentence: s.sentence,
            english: s.english,
            romaji: s.romaji,
            furigana: s.furigana,
            targetWord: w.word
          });
        }
      });
    }
  });

  kanjiList.forEach(k => {
    if (k.sentences && k.sentences.length > 0) {
      k.sentences.forEach(s => {
        if (s.sentence && s.english) {
          dailySentences.push({
            sentence: s.sentence,
            english: s.english,
            romaji: s.romaji,
            furigana: s.furigana,
            targetWord: k.char
          });
        }
      });
    }
  });

  if (dailySentences.length === 0 && wordList.length > 0) {
    const firstWord = wordList[0];
    dailySentences.push({
      sentence: `これは${firstWord.word}です。`,
      english: `This is ${firstWord.meaning}.`,
      romaji: `Kore wa ${firstWord.romaji} desu.`,
      targetWord: firstWord.word
    });
  }

  // Deduplicate sentences
  const uniqueSentencesMap = new Map<string, typeof dailySentences[0]>();
  dailySentences.forEach(s => {
    if (!uniqueSentencesMap.has(s.sentence)) {
      uniqueSentencesMap.set(s.sentence, s);
    }
  });
  const uniqueSentences = Array.from(uniqueSentencesMap.values());

  // 4A. ALL VOCABULARY & KANJI CONTEXT SENTENCES of the day (Comprehension)
  uniqueSentences.forEach((s, idx) => {
    const otherSentenceEnglish = uniqueSentences
      .filter(other => other.english !== s.english)
      .map(other => other.english);
    const fallbackEnglish = [
      'I drink water every morning.',
      'This is a Japanese book.',
      'The weather is very nice today.',
      'I study Japanese at the library.',
      'Excuse me, where is the station?',
      'Thank you very much.'
    ];
    const distractorMeanings = shuffleArray([
      ...otherSentenceEnglish,
      ...fallbackEnglish.filter(f => f !== s.english)
    ]).slice(0, 3);

    const options = shuffleArray([s.english, ...distractorMeanings]);
    const correctIdx = options.indexOf(s.english);

    questions.push({
      id: `day-${day}-vocab-sentence-${idx}`,
      type: 'sentence-drill',
      category: 'sentence',
      prompt: `What does this sentence mean?`,
      japaneseText: s.sentence,
      furigana: s.furigana,
      romaji: s.romaji,
      english: s.english,
      audioText: s.sentence,
      options,
      correctOptionIndex: correctIdx,
      optionsWithDetails: options.map(opt => ({ text: opt })),
      explanation: `"${s.sentence}" translates to: "${s.english}".`
    });
  });

  // 5. GRAMMAR, PARTICLES & TENSES (Day-relevant grammar points)
  if (GRAMMAR_POINTS && GRAMMAR_POINTS.length > 0) {
    const particlePoints = GRAMMAR_POINTS.filter(g => g.category === 'particle');
    const tensePoints = GRAMMAR_POINTS.filter(g => g.category === 'tense' || g.category === 'sentence-pattern');

    const selectedPoints: typeof GRAMMAR_POINTS = [];

    if (day === 1) {
      // Day 1: particles 'wa' and 'ka', plus 'masu' (present/future) and 'mashita' (past)
      const wa = GRAMMAR_POINTS.find(g => g.id === 'g-wa');
      const ka = GRAMMAR_POINTS.find(g => g.id === 'g-ka');
      const masu = GRAMMAR_POINTS.find(g => g.id === 'g-masu');
      const mashita = GRAMMAR_POINTS.find(g => g.id === 'g-mashita');
      if (wa) selectedPoints.push(wa);
      if (ka) selectedPoints.push(ka);
      if (masu) selectedPoints.push(masu);
      if (mashita) selectedPoints.push(mashita);
    } else {
      // Rotate through particles and tenses evenly across days
      const pIdx = (day - 1) % particlePoints.length;
      const tIdx = (day - 1) % tensePoints.length;
      if (particlePoints[pIdx]) selectedPoints.push(particlePoints[pIdx]);
      if (tensePoints[tIdx]) selectedPoints.push(tensePoints[tIdx]);
    }

    selectedPoints.forEach((pt, pIdx) => {
      const fillSentences = pt.fillBlankSentences || [];
      fillSentences.slice(0, day === 1 ? 1 : 2).forEach((f, fIdx) => {
        const options = shuffleArray([f.answer, ...(f.wrongOptions || [])]);
        const correctIdx = options.indexOf(f.answer);

        questions.push({
          id: `day-${day}-grammar-${pIdx}-${fIdx}`,
          type: 'grammar-drill',
          category: 'grammar',
          prompt: `Select the correct particle or tense: ${pt.title}`,
          speakerCharacter: (pIdx + fIdx) % 2 === 0 ? 'vikram' : 'lily',
          japaneseText: f.japanese,
          furigana: f.furigana,
          english: f.english,
          audioText: f.japanese.replace(/_{3,}/g, f.answer),
          options,
          correctOptionIndex: correctIdx,
          optionsWithDetails: options.map(o => ({ text: o })),
          explanation: `${pt.title}: ${pt.explanation}`
        });
      });
    });
  }

  // 6. LESSON CHECKPOINT & PRACTICE QUIZ of the day
  if (targets.lessonId) {
    try {
      const res = await api.getLessonById(targets.lessonId);
      const lesson = res?.lesson;
      if (lesson && lesson.quiz && Array.isArray(lesson.quiz)) {
        lesson.quiz.forEach((q: any, qIdx: number) => {
          if (q.options && q.options.length > 0 && q.correctIndex !== undefined) {
            questions.push({
              id: `day-${day}-lesson-quiz-${qIdx}`,
              type: 'grammar-drill',
              category: 'grammar',
              prompt: q.prompt || `Lesson Quiz: ${lesson.title}`,
              japaneseText: q.kanji || q.audioText || lesson.title,
              furigana: q.furigana,
              romaji: q.romaji,
              audioText: q.audioText || q.kanji,
              options: q.options,
              correctOptionIndex: q.correctIndex,
              optionsWithDetails: q.options.map((opt: string) => ({ text: opt })),
              explanation: q.explanation || `From lesson: ${lesson.title}`
            });
          }
        });
      }
    } catch (e) {
      console.warn('Could not fetch lesson quiz questions for daily drill:', e);
    }
  }

  // Shuffle questions thoroughly so questions from all categories are dynamically randomized
  return shuffleArray(questions);
}
