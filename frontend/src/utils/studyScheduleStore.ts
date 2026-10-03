import { dataStore } from '../services/dataStore';
import { api } from '../services/api';
import { learnedStore } from './learnedStore';

export type ScheduleDuration = 60 | 90 | 120 | 'ALL' | number;

export interface CustomDailyPace {
  enabled: boolean;
  hiraganaPerDay?: number;    // e.g. 5 to 30 (default 10)
  katakanaPerDay?: number;    // e.g. 5 to 30 (default 10)
  kanaPerDay: number;         // fallback / legacy
  kanjiPerDay: number;        // e.g. 1 to 10 (default 2)
  wordsPerDay: number;        // e.g. 5 to 50 (default 14)
  lessonIntervalDays: number; // e.g. 1 to 7 (1 lesson every N days, default 3)
  sentencesPerDay: number;    // e.g. 5 to 100 (default 50)
  quizzesPerDay: number;      // e.g. 1 to 10 (default 2)
  skipKana?: boolean;         // user already knows Kana and starts Phase 2 immediately
}

export const DEFAULT_CUSTOM_PACE: CustomDailyPace = {
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

const SCHEDULE_DURATION_KEY = 'anilearn_study_target_days';
const CURRENT_DAY_KEY = 'anilearn_study_current_day';
const START_DATE_KEY = 'anilearn_study_start_date';
const LAST_ACTIVE_DATE_KEY = 'anilearn_study_last_active_date';
const AUTO_ADVANCE_KEY = 'anilearn_auto_advance_daily';
const CUSTOM_PACE_KEY = 'anilearn_custom_study_pace';
const SCHEDULE_EVENT = 'anilearn_schedule_update';

// Ordered Hiragana: each base row is immediately followed by its Dakuten row so learning is intuitive
export function getOrderedHiragana(): { char: string; romaji: string; script: 'hiragana'; group: string }[] {
  const basic = dataStore.hiraganaData.basic;
  const dakuten = dataStore.hiraganaData.dakuten;
  const yoon = dataStore.hiraganaData.yoon;

  const aRow = basic.slice(0, 5);      // あ い う え お
  const kaRow = basic.slice(5, 10);    // か き く け こ
  const gaRow = dakuten.slice(0, 5);   // が ぎ ぐ げ ご (Dakuten)
  const saRow = basic.slice(10, 15);   // さ し す せ そ
  const zaRow = dakuten.slice(5, 10);  // ざ じ ず ぜ ぞ (Dakuten)
  const taRow = basic.slice(15, 20);   // た ち つ て と
  const daRow = dakuten.slice(10, 15); // だ ぢ づ で ど (Dakuten)
  const naRow = basic.slice(20, 25);   // な に ぬ ね の
  const haRow = basic.slice(25, 30);   // は ひ ふ へ ほ
  const baRow = dakuten.slice(15, 20); // ば び ぶ べ ぼ (Dakuten)
  const paRow = dakuten.slice(20, 25); // ぱ ぴ ぷ ぺ ぽ (Handakuten)
  const maRow = basic.slice(30, 35);   // ま み む め も
  const yaRow = basic.slice(35, 38);   // や ゆ よ
  const raRow = basic.slice(38, 43);   // ら り る れ ろ
  const waRow = basic.slice(43, 46);   // わ を ん

  return [
    ...aRow.map(k => ({ ...k, script: 'hiragana' as const, group: 'basic' })),
    ...kaRow.map(k => ({ ...k, script: 'hiragana' as const, group: 'basic' })),
    ...gaRow.map(k => ({ ...k, script: 'hiragana' as const, group: 'dakuten' })),
    ...saRow.map(k => ({ ...k, script: 'hiragana' as const, group: 'basic' })),
    ...zaRow.map(k => ({ ...k, script: 'hiragana' as const, group: 'dakuten' })),
    ...taRow.map(k => ({ ...k, script: 'hiragana' as const, group: 'basic' })),
    ...daRow.map(k => ({ ...k, script: 'hiragana' as const, group: 'dakuten' })),
    ...naRow.map(k => ({ ...k, script: 'hiragana' as const, group: 'basic' })),
    ...haRow.map(k => ({ ...k, script: 'hiragana' as const, group: 'basic' })),
    ...baRow.map(k => ({ ...k, script: 'hiragana' as const, group: 'dakuten' })),
    ...paRow.map(k => ({ ...k, script: 'hiragana' as const, group: 'dakuten' })),
    ...maRow.map(k => ({ ...k, script: 'hiragana' as const, group: 'basic' })),
    ...yaRow.map(k => ({ ...k, script: 'hiragana' as const, group: 'basic' })),
    ...raRow.map(k => ({ ...k, script: 'hiragana' as const, group: 'basic' })),
    ...waRow.map(k => ({ ...k, script: 'hiragana' as const, group: 'basic' })),
    ...yoon.map(k => ({ ...k, script: 'hiragana' as const, group: 'yoon' })),
  ];
}

// Ordered Katakana: each base row is immediately followed by its Dakuten row
export function getOrderedKatakana(): { char: string; romaji: string; script: 'katakana'; group: string }[] {
  const basic = dataStore.katakanaData.basic;
  const dakuten = dataStore.katakanaData.dakuten;
  const yoon = dataStore.katakanaData.yoon;

  const aRow = basic.slice(0, 5);      // ア イ ウ エ オ
  const kaRow = basic.slice(5, 10);    // カ キ ク ケ コ
  const gaRow = dakuten.slice(0, 5);   // ガ ギ グ ゲ ゴ (Dakuten)
  const saRow = basic.slice(10, 15);   // サ シ ス セ ソ
  const zaRow = dakuten.slice(5, 10);  // ザ ジ ズ ゼ ゾ (Dakuten)
  const taRow = basic.slice(15, 20);   // タ チ ツ テ ト
  const daRow = dakuten.slice(10, 15); // ダ ヂ ヅ デ ド (Dakuten)
  const naRow = basic.slice(20, 25);   // ナ ニ ヌ ネ ノ
  const haRow = basic.slice(25, 30);   // ハ ヒ フ ヘ ホ
  const baRow = dakuten.slice(15, 20); // バ ビ ブ ベ ボ (Dakuten)
  const paRow = dakuten.slice(20, 25); // パ ピ プ ペ ポ (Handakuten)
  const maRow = basic.slice(30, 35);   // マ ミ ム メ モ
  const yaRow = basic.slice(35, 38);   // ヤ ユ ヨ
  const raRow = basic.slice(38, 43);   // ラ リ ル レ ロ
  const waRow = basic.slice(43, 46);   // ワ ヲ ン

  return [
    ...aRow.map(k => ({ ...k, script: 'katakana' as const, group: 'basic' })),
    ...kaRow.map(k => ({ ...k, script: 'katakana' as const, group: 'basic' })),
    ...gaRow.map(k => ({ ...k, script: 'katakana' as const, group: 'dakuten' })),
    ...saRow.map(k => ({ ...k, script: 'katakana' as const, group: 'basic' })),
    ...zaRow.map(k => ({ ...k, script: 'katakana' as const, group: 'dakuten' })),
    ...taRow.map(k => ({ ...k, script: 'katakana' as const, group: 'basic' })),
    ...daRow.map(k => ({ ...k, script: 'katakana' as const, group: 'dakuten' })),
    ...naRow.map(k => ({ ...k, script: 'katakana' as const, group: 'basic' })),
    ...haRow.map(k => ({ ...k, script: 'katakana' as const, group: 'basic' })),
    ...baRow.map(k => ({ ...k, script: 'katakana' as const, group: 'dakuten' })),
    ...paRow.map(k => ({ ...k, script: 'katakana' as const, group: 'dakuten' })),
    ...maRow.map(k => ({ ...k, script: 'katakana' as const, group: 'basic' })),
    ...yaRow.map(k => ({ ...k, script: 'katakana' as const, group: 'basic' })),
    ...raRow.map(k => ({ ...k, script: 'katakana' as const, group: 'basic' })),
    ...waRow.map(k => ({ ...k, script: 'katakana' as const, group: 'basic' })),
    ...yoon.map(k => ({ ...k, script: 'katakana' as const, group: 'yoon' })),
  ];
}

export function getAllKanaOrdered() {
  return [...getOrderedHiragana(), ...getOrderedKatakana()];
}

// 16 lessons in JLPT N5
export const N5_LESSON_IDS = [
  'lesson-n5-1-1', 'lesson-n5-1-2', 'lesson-n5-1-3', 'lesson-n5-1-4',
  'lesson-n5-2-1', 'lesson-n5-2-2', 'lesson-n5-2-3', 'lesson-n5-2-4',
  'lesson-n5-3-1', 'lesson-n5-3-2', 'lesson-n5-3-3', 'lesson-n5-3-4',
  'lesson-n5-4-1', 'lesson-n5-4-2', 'lesson-n5-4-3', 'lesson-n5-4-4'
];

class StudyScheduleStore {
  private targetDays: ScheduleDuration = 60;
  private currentDay: number = 1;
  private startDate: string = new Date().toISOString().slice(0, 10);
  private lastActiveDate: string = new Date().toISOString().slice(0, 10);
  private autoAdvance: boolean = true;
  private customPace: CustomDailyPace = { ...DEFAULT_CUSTOM_PACE };

  // Cached Day Maps
  private kanaDayMap = new Map<string, number>();
  private kanjiDayMap = new Map<string, number>();
  private wordDayMap = new Map<string, number>();
  private lessonDayMap = new Map<string, number>();


  constructor() {
    this.loadFromStorage();
    this.recomputeMappings();
    this.syncFromMongoDB();

    // Recompute once async dataStore finishes loading
    dataStore.ready().then(() => {
      this.recomputeMappings();
      if (this.targetDays !== 'ALL' && this.currentDay > 1 && !this.isDayCompleted(1)) {
        this.currentDay = 1;
        this.saveToStorage();
        this.syncToMongoDB();
      } else {
        this.checkDailyRollover();
      }
      this.notify();
    }).catch(e => {
      console.warn('[StudyScheduleStore] dataStore ready failed:', e);
    });

    // Auto-rollover listeners on window focus or visibility change
    if (typeof window !== 'undefined') {
      window.addEventListener('focus', () => this.checkDailyRollover());
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          this.checkDailyRollover();
        }
      });
      // Check every 10 minutes to auto-unlock at midnight
      setInterval(() => {
        this.checkDailyRollover();
      }, 10 * 60 * 1000);
    }
  }

  private loadFromStorage() {
    try {
      const storedDays = localStorage.getItem(SCHEDULE_DURATION_KEY);
      if (storedDays === 'ALL') {
        this.targetDays = 'ALL';
      } else if (storedDays) {
        const parsed = parseInt(storedDays, 10);
        if (!isNaN(parsed) && parsed > 0) {
          this.targetDays = parsed as ScheduleDuration;
        } else {
          this.targetDays = 60;
        }
      } else {
        this.targetDays = 60;
      }

      const todayStr = new Date().toISOString().slice(0, 10);
      const storedStartDate = localStorage.getItem(START_DATE_KEY);
      if (storedStartDate && /^\d{4}-\d{2}-\d{2}$/.test(storedStartDate)) {
        this.startDate = storedStartDate;
      } else {
        this.startDate = todayStr;
        localStorage.setItem(START_DATE_KEY, this.startDate);
      }

      const storedLastActive = localStorage.getItem(LAST_ACTIVE_DATE_KEY);
      this.lastActiveDate = storedLastActive || todayStr;
      localStorage.setItem(LAST_ACTIVE_DATE_KEY, this.lastActiveDate);

      const storedAuto = localStorage.getItem(AUTO_ADVANCE_KEY);
      this.autoAdvance = storedAuto === null ? true : storedAuto === 'true';

      const storedPace = localStorage.getItem(CUSTOM_PACE_KEY);
      if (storedPace) {
        const parsed = JSON.parse(storedPace);
        this.customPace = { ...DEFAULT_CUSTOM_PACE, ...parsed };
        if (this.customPace.enabled) {
          this.targetDays = this.getPaceEstimates(this.customPace).totalDaysNeeded;
        }
      }

      const storedDay = localStorage.getItem(CURRENT_DAY_KEY);
      if (storedDay) {
        const d = parseInt(storedDay, 10);
        const maxDays = this.targetDays === 'ALL' ? 60 : (typeof this.targetDays === 'number' ? this.targetDays : 60);
        if (!isNaN(d) && d >= 1) {
          this.currentDay = Math.min(d, maxDays);
        }
      }

      // Update lastActiveDate tracking without advancing prematurely before dataStore is ready
      if (storedLastActive && storedLastActive !== todayStr) {
        this.lastActiveDate = todayStr;
        localStorage.setItem(LAST_ACTIVE_DATE_KEY, todayStr);
      }
    } catch {
      this.targetDays = 60;
      this.currentDay = 1;
      this.startDate = new Date().toISOString().slice(0, 10);
      this.lastActiveDate = this.startDate;
      this.autoAdvance = true;
      this.customPace = { ...DEFAULT_CUSTOM_PACE };
    }
  }

  ensureMappings() {
    const hasKanaData = dataStore.hiraganaData.basic.length > 0;
    const hasKanjiData = dataStore.kanjiN5.length > 0;
    const hasWordsData = dataStore.wordsN5.length > 0;

    const needsKana = hasKanaData && this.kanaDayMap.size === 0;
    const needsKanji = hasKanjiData && this.kanjiDayMap.size === 0;
    const needsWords = hasWordsData && this.wordDayMap.size === 0;

    if (needsKana || needsKanji || needsWords || this.lessonDayMap.size === 0) {
      this.recomputeMappings();
    }
  }

  private recomputeMappings() {
    const days = this.targetDays === 'ALL' ? 60 : this.targetDays;

    // CUSTOM DAILY PACE MODE
    if (this.customPace.enabled) {
      // 1. Hiragana & Katakana scheduled with separate daily paces
      this.kanaDayMap.clear();
      const hiraganaList = getOrderedHiragana();
      const katakanaList = getOrderedKatakana();
      const hPace = Math.max(1, this.customPace.hiraganaPerDay || this.customPace.kanaPerDay || 10);
      const kPace = Math.max(1, this.customPace.katakanaPerDay || this.customPace.kanaPerDay || 10);

      hiraganaList.forEach((item, index) => {
        const day = Math.floor(index / hPace) + 1;
        this.kanaDayMap.set(item.char, day);
      });
      katakanaList.forEach((item, index) => {
        const day = Math.floor(index / kPace) + 1;
        this.kanaDayMap.set(item.char, day);
      });

      // Option A: 2-Phase Sequential Curriculum
      // Phase 1 (Days 1 to kanaOffset): Focused Kana Boot Camp
      // Phase 2 (Days kanaOffset + 1 onwards): 60-Day JLPT N5 Core Curriculum (Kanji, Words, Lessons, Sentences, Quizzes)
      const kanaOffset = this.getKanaOffset();

      // 2. Kanji by daily pace (starts from Day 1)
      const kanjiList = dataStore.kanjiN5;
      if (kanjiList.length > 0) {
        this.kanjiDayMap.clear();
        const paceKanji = Math.max(1, this.customPace.kanjiPerDay);
        kanjiList.forEach((item, index) => {
          const day = Math.floor(index / paceKanji) + 1;
          this.kanjiDayMap.set(item.char, day);
        });
      }

      // 3. Words by daily pace (starts after Kana Boot Camp)
      const wordList = dataStore.wordsN5;
      if (wordList.length > 0) {
        this.wordDayMap.clear();
        const paceWords = Math.max(1, this.customPace.wordsPerDay);
        wordList.forEach((item, index) => {
          const day = kanaOffset + Math.floor(index / paceWords) + 1;
          if (item.id) this.wordDayMap.set(item.id, day);
          if (item._id) this.wordDayMap.set(item._id, day);
          this.wordDayMap.set(item.word, day);
        });
      }

      // 4. Lessons by interval (starts after Kana Boot Camp)
      this.lessonDayMap.clear();
      const interval = Math.max(1, this.customPace.lessonIntervalDays);
      N5_LESSON_IDS.forEach((id, index) => {
        const day = kanaOffset + index * interval + 1;
        this.lessonDayMap.set(id, day);
      });
      return;
    }

    // DEFAULT PROPORTIONAL SCHEDULE
    // 1. Hiragana & Katakana: 82 items each scheduled in parallel
    this.kanaDayMap.clear();
    const hiraganaList = getOrderedHiragana();
    const katakanaList = getOrderedKatakana();
    const kanaSpan = Math.min(days, days === 60 ? 20 : days === 90 ? 25 : 30);
    hiraganaList.forEach((item, index) => {
      const day = Math.min(kanaSpan, Math.floor((index / hiraganaList.length) * kanaSpan) + 1);
      this.kanaDayMap.set(item.char, day);
    });
    katakanaList.forEach((item, index) => {
      const day = Math.min(kanaSpan, Math.floor((index / katakanaList.length) * kanaSpan) + 1);
      this.kanaDayMap.set(item.char, day);
    });

    // 2. Kanji: 110 items distributed across schedule
    const kanjiList = dataStore.kanjiN5;
    if (kanjiList.length > 0) {
      this.kanjiDayMap.clear();
      const kanjiSpan = Math.min(days, days === 60 ? 52 : days === 90 ? 70 : 103);
      kanjiList.forEach((item, index) => {
        const day = Math.min(days, Math.floor((index / kanjiList.length) * kanjiSpan) + 1);
        this.kanjiDayMap.set(item.char, day);
      });
    }

    // 3. Words: 805 items across all days
    const wordList = dataStore.wordsN5;
    if (wordList.length > 0) {
      this.wordDayMap.clear();
      wordList.forEach((item, index) => {
        const day = Math.min(days, Math.floor((index / wordList.length) * days) + 1);
        if (item.id) this.wordDayMap.set(item.id, day);
        if (item._id) this.wordDayMap.set(item._id, day);
        this.wordDayMap.set(item.word, day);
      });
    }

    // 4. Lessons: 16 lessons across all days
    this.lessonDayMap.clear();
    N5_LESSON_IDS.forEach((id, index) => {
      const day = Math.min(days, Math.floor((index / N5_LESSON_IDS.length) * (days - 5)) + 1);
      this.lessonDayMap.set(id, day);
    });
  }

  private saveToStorage() {
    try {
      const activeDays = this.getTargetDays();
      localStorage.setItem(SCHEDULE_DURATION_KEY, String(activeDays));
      localStorage.setItem(CURRENT_DAY_KEY, String(this.currentDay));
      localStorage.setItem(START_DATE_KEY, this.startDate);
      localStorage.setItem(LAST_ACTIVE_DATE_KEY, this.lastActiveDate);
      localStorage.setItem(AUTO_ADVANCE_KEY, String(this.autoAdvance));
      localStorage.setItem(CUSTOM_PACE_KEY, JSON.stringify(this.customPace));
    } catch {}
  }

  async syncFromMongoDB() {
    try {
      const userStr = localStorage.getItem('anilearn_auth_user');
      const userId = userStr ? (JSON.parse(userStr).id || JSON.parse(userStr)._id) : 'default_user';
      const res = await api.getSchedule(userId);
      if (res && res.success && res.schedule) {
        const s = res.schedule;

        // If remote has custom pace enabled, adopt it
        if (s.customPace && s.customPace.enabled) {
          this.customPace = { ...DEFAULT_CUSTOM_PACE, ...s.customPace };
          this.targetDays = this.getPaceEstimates(this.customPace).totalDaysNeeded;
        } else if (!this.customPace.enabled) {
          // If neither remote nor local has custom pace, adopt standard duration
          if (s.targetDays === 'ALL') {
            this.targetDays = 'ALL';
          } else if (s.targetDays) {
            const parsed = parseInt(String(s.targetDays), 10);
            this.targetDays = !isNaN(parsed) && parsed > 0 ? (parsed as ScheduleDuration) : 60;
          } else {
            this.targetDays = 60;
          }
          if (s.customPace) {
            this.customPace = { ...DEFAULT_CUSTOM_PACE, ...s.customPace };
          }
        } else {
          // Local has custom pace enabled, but remote is not yet synced. Sync local up to MongoDB!
          this.syncToMongoDB();
        }

        this.currentDay = s.currentDay ?? this.currentDay;
        this.startDate = s.startDate || this.startDate;
        this.lastActiveDate = s.lastActiveDate || this.lastActiveDate;
        this.autoAdvance = s.autoAdvance !== undefined ? s.autoAdvance : this.autoAdvance;
        this.saveToStorage();
        this.recomputeMappings();
        window.dispatchEvent(new CustomEvent(SCHEDULE_EVENT, {
          detail: {
            targetDays: this.getTargetDays(),
            currentDay: this.currentDay,
            customPace: this.customPace,
            isCustom: this.customPace.enabled,
            startDate: this.startDate,
            autoAdvance: this.autoAdvance
          }
        }));
      }
    } catch (err) {
      console.warn('Could not sync study schedule from MongoDB:', err);
    }
  }

  private syncToMongoDB() {
    try {
      const userStr = localStorage.getItem('anilearn_auth_user');
      const userId = userStr ? (JSON.parse(userStr).id || JSON.parse(userStr)._id) : 'default_user';
      const activeDays = this.getTargetDays();
      api.saveSchedule({
        userId,
        targetDays: activeDays,
        currentDay: this.currentDay,
        customPace: this.customPace,
        autoAdvance: this.autoAdvance,
        startDate: this.startDate
      }).catch(() => {});
    } catch {}
  }

  private notify() {
    try {
      const activeTargetDays = this.getTargetDays();
      this.saveToStorage();
      this.syncToMongoDB();
      window.dispatchEvent(new CustomEvent(SCHEDULE_EVENT, {
        detail: {
          targetDays: activeTargetDays,
          currentDay: this.currentDay,
          customPace: this.customPace,
          isCustom: this.customPace.enabled,
          startDate: this.startDate,
          autoAdvance: this.autoAdvance
        }
      }));
    } catch (e) {
      console.error('Failed to notify schedule store:', e);
    }
  }

  // --- Getters & Setters ---
  getTargetDays(): ScheduleDuration {
    if (this.targetDays === 'ALL') return 'ALL';
    if (this.customPace.enabled) {
      return this.getPaceEstimates().totalDaysNeeded;
    }
    return this.targetDays;
  }

  getStandardTargetDays(): ScheduleDuration {
    return this.targetDays;
  }

  getKanaDaysNeeded(customKanaPace?: number): number {
    const hPace = customKanaPace || (this.customPace.enabled ? (this.customPace.hiraganaPerDay || this.customPace.kanaPerDay || 10) : 10);
    const kPace = customKanaPace || (this.customPace.enabled ? (this.customPace.katakanaPerDay || this.customPace.kanaPerDay || 10) : 10);
    const hDays = Math.ceil(82 / Math.max(1, hPace));
    const kDays = Math.ceil(82 / Math.max(1, kPace));
    return Math.max(hDays, kDays);
  }

  getKanaOffset(): number {
    if (!this.customPace.enabled) return 0;
    if (this.customPace.skipKana) return 0;
    const hPace = Math.max(1, this.customPace.hiraganaPerDay || this.customPace.kanaPerDay || 10);
    const kPace = Math.max(1, this.customPace.katakanaPerDay || this.customPace.kanaPerDay || 10);
    const hDays = Math.ceil(82 / hPace);
    const kDays = Math.ceil(82 / kPace);
    return Math.max(hDays, kDays);
  }

  getSentenceDayForCurriculumDay(day: number = this.currentDay): number {
    if (!this.customPace.enabled) return Math.max(1, Math.min(60, day));
    const kanaOffset = this.getKanaOffset();
    const effectiveDay = Math.max(1, Math.min(60, day - kanaOffset));
    return effectiveDay;
  }

  getHiraganaDaysNeeded(pace?: number): number {
    const p = pace || (this.customPace.enabled ? (this.customPace.hiraganaPerDay || this.customPace.kanaPerDay || 10) : 10);
    return Math.ceil(82 / Math.max(1, p));
  }

  getKatakanaDaysNeeded(pace?: number): number {
    const p = pace || (this.customPace.enabled ? (this.customPace.katakanaPerDay || this.customPace.kanaPerDay || 10) : 10);
    return Math.ceil(82 / Math.max(1, p));
  }

  isAllUnlocked(): boolean {
    return this.targetDays === 'ALL';
  }

  setTargetDays(days: ScheduleDuration) {
    if (this.customPace.enabled && (days === 60 || days === 90 || days === 120 || days === 'ALL')) {
      this.customPace.enabled = false;
      try {
        localStorage.setItem(CUSTOM_PACE_KEY, JSON.stringify(this.customPace));
      } catch {}
    }

    // When starting or selecting a plan on Day 1, anchor today as Day 1 start date
    if (this.currentDay === 1) {
      this.startDate = new Date().toISOString().slice(0, 10);
      try {
        localStorage.setItem(START_DATE_KEY, this.startDate);
      } catch {}
    }

    if (this.targetDays === days) {
      this.recomputeMappings();
      this.notify();
      return;
    }
    this.targetDays = days;
    const maxDays = days === 'ALL' ? 60 : (typeof days === 'number' ? days : 60);
    if (this.currentDay > maxDays) {
      this.currentDay = maxDays;
    }
    this.recomputeMappings();
    this.notify();
  }

  getCurrentDay(): number {
    return this.currentDay;
  }

  setCurrentDay(day: number, force: boolean = false) {
    const maxDays = this.targetDays === 'ALL' ? 60 : (typeof this.targetDays === 'number' ? this.targetDays : 60);
    const clamped = Math.max(1, Math.min(maxDays, day));
    if (this.currentDay === clamped) return;

    // Strict lock: cannot jump forward to future days unless currently completed, ALL mode, or forced
    if (!force && this.targetDays !== 'ALL' && clamped > this.currentDay && !this.isDayCompleted(this.currentDay)) {
      return;
    }

    this.currentDay = clamped;
    this.notify();
  }

  nextDay(force: boolean = false): number {
    const maxDays = this.targetDays === 'ALL' ? 60 : (typeof this.targetDays === 'number' ? this.targetDays : 60);
    if (this.currentDay < maxDays) {
      if (!force && this.targetDays !== 'ALL' && !this.isDayCompleted(this.currentDay)) {
        return this.currentDay;
      }
      this.currentDay += 1;
      this.notify();
    }
    return this.currentDay;
  }

  prevDay(): number {
    if (this.currentDay > 1) {
      this.currentDay -= 1;
      this.notify();
    }
    return this.currentDay;
  }

  // --- Calendar Date & Daily Auto-Advance ---
  getCalendarElapsedDay(): number {
    try {
      const [sYear, sMonth, sDay] = this.startDate.split('-').map(Number);
      const startDateObj = new Date(sYear, sMonth - 1, sDay);
      const now = new Date();
      const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const diffMs = todayMidnight.getTime() - startDateObj.getTime();
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      return Math.max(1, diffDays + 1);
    } catch {
      return 1;
    }
  }

  isDayCompleted(day: number = this.currentDay): boolean {
    this.ensureMappings();
    const targets = this.getDayTargets(day);
    // If dictionary data hasn't loaded into dataStore, NEVER declare the day complete
    if (targets.totalKana === 0 || targets.totalKanji === 0 || targets.totalWords === 0) {
      return false;
    }
    // Must have at least one active target on this day
    const hasAnyTarget = targets.kana.length > 0 || targets.kanji.length > 0 || targets.words.length > 0 || Boolean(targets.lessonId);
    if (!hasAnyTarget) {
      return false;
    }

    const kanaDone = targets.kana.length === 0 || targets.kana.every(k => learnedStore.isKanaLearned(k.char));
    const kanjiDone = targets.kanji.length === 0 || targets.kanji.every(k => learnedStore.isKanjiLearned(k.char));
    const wordsDone = targets.words.length === 0 || targets.words.every(w => learnedStore.isWordLearned(w.id || (w as any)._id || w.word));
    const lessonDone = targets.lessonId ? learnedStore.isLessonCompleted(targets.lessonId) : true;
    const drillDone = learnedStore.isDailyQuizCompleted(day) || learnedStore.isSentenceDrillCompleted(day);
    const masteryDone = learnedStore.isQuizOfTheDayCompleted(day);

    return kanaDone && kanjiDone && wordsDone && lessonDone && drillDone && masteryDone;
  }

  checkDailyRollover(): boolean {
    const todayStr = new Date().toISOString().slice(0, 10);
    if (this.lastActiveDate && this.lastActiveDate !== todayStr) {
      // ONLY advance if current day is 100% completed! If not completed, it stays on current day!
      if (this.isDayCompleted(this.currentDay)) {
        const maxDays = this.targetDays === 'ALL' ? 60 : (typeof this.targetDays === 'number' ? this.targetDays : 60);
        if (this.currentDay < maxDays) {
          this.currentDay += 1;
        }
      }
      this.lastActiveDate = todayStr;
      try {
        localStorage.setItem(LAST_ACTIVE_DATE_KEY, todayStr);
      } catch {}
      this.notify();
      return true;
    }
    return false;
  }

  isAutoAdvanceEnabled(): boolean {
    return this.autoAdvance;
  }

  setAutoAdvance(enabled: boolean) {
    this.autoAdvance = enabled;
    try {
      localStorage.setItem(AUTO_ADVANCE_KEY, String(enabled));
    } catch {}
    if (enabled) {
      this.checkDailyRollover();
    }
    this.notify();
  }

  getStartDate(): string {
    return this.startDate;
  }

  setStartDate(dateStr: string) {
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
      this.startDate = dateStr;
      try {
        localStorage.setItem(START_DATE_KEY, dateStr);
      } catch {}
      this.checkDailyRollover();
      this.notify();
    }
  }

  resetToDay1() {
    const todayStr = new Date().toISOString().slice(0, 10);
    this.startDate = todayStr;
    this.lastActiveDate = todayStr;
    this.currentDay = 1;
    this.saveToStorage();
    try {
      const userStr = localStorage.getItem('anilearn_auth_user');
      const userId = userStr ? (JSON.parse(userStr).id || JSON.parse(userStr)._id) : 'default_user';
      api.resetSchedule(userId).catch(() => {});
    } catch {}
    this.notify();
  }

  resetStartDateToToday() {
    this.resetToDay1();
  }

  // --- Custom Daily Pace Control ---
  getCustomPace(): CustomDailyPace {
    return { ...this.customPace };
  }

  isCustomPaceEnabled(): boolean {
    return this.customPace.enabled;
  }

  isCustomEnabled(): boolean {
    return this.customPace.enabled;
  }

  getSentencesPerDay(): number {
    if (!this.customPace.enabled) return 50;
    return Math.max(5, Math.min(100, this.customPace.sentencesPerDay || 50));
  }

  getQuizzesPerDay(): number {
    return Math.max(1, Math.min(10, this.customPace.quizzesPerDay || 2));
  }

  getPaceEstimates(pace: CustomDailyPace = this.customPace) {
    const hPace = Math.max(1, pace.hiraganaPerDay || pace.kanaPerDay || 10);
    const kPace = Math.max(1, pace.katakanaPerDay || pace.kanaPerDay || 10);
    const hiraganaDays = Math.ceil(82 / hPace);
    const katakanaDays = Math.ceil(82 / kPace);
    const kanaDays = Math.max(hiraganaDays, katakanaDays);
    const kanaOffset = pace.skipKana ? 0 : kanaDays;

    const kanjiDays = Math.ceil(110 / Math.max(1, pace.kanjiPerDay));
    const wordsDays = kanaOffset + Math.ceil(805 / Math.max(1, pace.wordsPerDay));
    const lessonDays = kanaOffset + (16 - 1) * Math.max(1, pace.lessonIntervalDays) + 1;
    const sentencesDays = kanaOffset + Math.ceil(3000 / Math.max(1, pace.sentencesPerDay || 50));
    const quizzesDays = kanaOffset + Math.ceil(100 / Math.max(1, pace.quizzesPerDay || 2));
    const totalDaysNeeded = Math.max(kanaDays, kanjiDays, wordsDays, lessonDays, sentencesDays, quizzesDays);
    return {
      hiraganaDays,
      katakanaDays,
      kanaDays,
      kanjiDays,
      wordsDays,
      lessonDays,
      sentencesDays,
      quizzesDays,
      totalDaysNeeded,
      kanaOffset
    };
  }

  setCustomPace(newPace: Partial<CustomDailyPace>) {
    this.customPace = {
      ...this.customPace,
      ...newPace,
      enabled: newPace.enabled ?? true
    };
    if (this.customPace.enabled) {
      this.targetDays = this.getPaceEstimates(this.customPace).totalDaysNeeded;
    }
    try {
      localStorage.setItem(CUSTOM_PACE_KEY, JSON.stringify(this.customPace));
    } catch (e) {
      console.error('Failed to save custom pace:', e);
    }
    this.resetToDay1();
    this.recomputeMappings();
    this.notify();
  }

  resetCustomPace() {
    this.customPace = { ...DEFAULT_CUSTOM_PACE, enabled: false };
    this.targetDays = 60;
    try {
      localStorage.removeItem(CUSTOM_PACE_KEY);
    } catch {}
    this.recomputeMappings();
    this.notify();
  }

  resetCustomTargets() {
    this.resetCustomPace();
  }

  getCustomTargets() {
    return this.getCustomPace();
  }

  // --- Query Item Day & Unlock Status ---

  // Kana
  getKanaDay(char: string): number {
    this.ensureMappings();
    return this.kanaDayMap.get(char) || 1;
  }
  isKanaUnlocked(char: string): boolean {
    if (this.targetDays === 'ALL') return true;
    return this.getKanaDay(char) <= this.currentDay;
  }
  isKanaToday(char: string): boolean {
    return this.getKanaDay(char) === this.currentDay;
  }

  // Kanji
  getKanjiDay(char: string): number {
    this.ensureMappings();
    return this.kanjiDayMap.get(char) || 1;
  }
  isKanjiUnlocked(char: string): boolean {
    if (this.targetDays === 'ALL') return true;
    return this.getKanjiDay(char) <= this.currentDay;
  }
  isKanjiToday(char: string): boolean {
    return this.getKanjiDay(char) === this.currentDay;
  }

  // Words
  getWordDay(idOrWord: string): number {
    this.ensureMappings();
    return this.wordDayMap.get(idOrWord) || 1;
  }
  isWordUnlocked(idOrWord: string): boolean {
    if (this.targetDays === 'ALL') return true;
    return this.getWordDay(idOrWord) <= this.currentDay;
  }
  isWordToday(idOrWord: string): boolean {
    return this.getWordDay(idOrWord) === this.currentDay;
  }

  // Lessons
  getLessonDay(lessonId: string): number {
    this.ensureMappings();
    return this.lessonDayMap.get(lessonId) || 1;
  }
  isLessonUnlocked(lessonId: string): boolean {
    if (this.targetDays === 'ALL') return true;
    return this.getLessonDay(lessonId) <= this.currentDay;
  }
  isLessonToday(lessonId: string): boolean {
    return this.getLessonDay(lessonId) === this.currentDay;
  }
  getUnlockedLessonIds(day: number = this.currentDay): string[] {
    this.ensureMappings();
    return N5_LESSON_IDS.filter(id => this.getLessonDay(id) <= day);
  }
  getNextLesson(day: number = this.currentDay): { lessonId: string; day: number } | null {
    this.ensureMappings();
    const nextId = N5_LESSON_IDS.find(id => this.getLessonDay(id) > day);
    if (!nextId) return null;
    return { lessonId: nextId, day: this.getLessonDay(nextId) };
  }
  getUnlockedKana(day: number = this.currentDay) {
    this.ensureMappings();
    return getAllKanaOrdered().filter(k => this.getKanaDay(k.char) <= day);
  }
  getUnlockedKanji(day: number = this.currentDay) {
    this.ensureMappings();
    return dataStore.kanjiN5.filter((k: any) => this.getKanjiDay(k.char) <= day);
  }
  getUnlockedWords(day: number = this.currentDay) {
    this.ensureMappings();
    return dataStore.wordsN5.filter((w: any) => this.getWordDay(w.id || w._id || w.word) <= day);
  }

  // --- Unit Practice Drills (Granular Drill-Level Pacing) ---
  getDrillDay(drillId: string, allUnits?: any[]): number {
    if (this.targetDays === 'ALL') return 1;

    let globalIndex = -1;
    if (allUnits && allUnits.length > 0) {
      let idx = 0;
      for (const u of allUnits) {
        for (const l of u.lessons) {
          if (l.id === drillId) {
            globalIndex = idx;
            break;
          }
          idx++;
        }
        if (globalIndex !== -1) break;
      }
    }

    if (globalIndex === -1) {
      const match = drillId.match(/(\d+)-(\d+)/);
      if (match) {
        const uNum = parseInt(match[1], 10);
        const lNum = parseInt(match[2], 10);
        globalIndex = (uNum - 1) * 4 + (lNum - 1);
      } else {
        globalIndex = 0;
      }
    }

    const drillsPerDay = Math.max(1, this.getQuizzesPerDay());
    return Math.floor(globalIndex / drillsPerDay) + 1;
  }

  isDrillUnlocked(drillId: string, allUnits?: any[]): boolean {
    if (this.targetDays === 'ALL') return true;
    return this.getDrillDay(drillId, allUnits) <= this.currentDay;
  }

  isDrillToday(drillId: string, allUnits?: any[]): boolean {
    if (this.targetDays === 'ALL') return true;
    return this.getDrillDay(drillId, allUnits) === this.currentDay;
  }

  // --- Daily Targets Summary ---
  getDayTargets(day: number = this.currentDay) {
    this.ensureMappings();
    const hiraganaList = getOrderedHiragana();
    const katakanaList = getOrderedKatakana();
    const kanjiList = dataStore.kanjiN5;
    const wordList = dataStore.wordsN5;

    const targetHiragana = hiraganaList.filter(k => this.getKanaDay(k.char) === day);
    const targetKatakana = katakanaList.filter(k => this.getKanaDay(k.char) === day);
    const targetKanji = kanjiList.filter((k: any) => this.getKanjiDay(k.char) === day);
    const targetWords = wordList.filter((w: any) => this.getWordDay(w.id || w._id || w.word) === day);
    const targetLessonId = N5_LESSON_IDS.find(id => this.getLessonDay(id) === day);

    return {
      day,
      totalDays: this.getTargetDays(),
      hiragana: targetHiragana,
      katakana: targetKatakana,
      kana: [...targetHiragana, ...targetKatakana],
      hiraganaCount: targetHiragana.length,
      katakanaCount: targetKatakana.length,
      kanaCount: targetHiragana.length + targetKatakana.length,
      kanji: targetKanji,
      words: targetWords,
      lessonId: targetLessonId,
      kanjiCount: targetKanji.length,
      wordsCount: targetWords.length,
      sentencesCount: this.getSentencesPerDay(),
      quizzesCount: this.getQuizzesPerDay(),
      totalHiragana: hiraganaList.length,
      totalKatakana: katakanaList.length,
      totalKana: hiraganaList.length + katakanaList.length,
      totalKanji: kanjiList.length,
      totalWords: wordList.length,
      totalSessions: N5_LESSON_IDS.length,
      totalSentences: 3000,
      totalQuizzes: 100,
      isCustom: this.customPace.enabled,
    };
  }

  // Cumulative Unlocked Totals up to current day
  getCumulativeStats(day: number = this.currentDay) {
    this.ensureMappings();
    const allKanaOrdered = getAllKanaOrdered();
    const kanjiList = dataStore.kanjiN5;
    const wordList = dataStore.wordsN5;

    if (this.targetDays === 'ALL') {
      return {
        day: this.currentDay,
        totalDays: 'ALL' as const,
        unlockedKanaCount: allKanaOrdered.length,
        totalKana: allKanaOrdered.length,
        unlockedKanjiCount: kanjiList.length,
        totalKanji: kanjiList.length,
        unlockedWordsCount: wordList.length,
        totalWords: wordList.length,
        unlockedLessonsCount: N5_LESSON_IDS.length,
        totalSessions: N5_LESSON_IDS.length,
        unlockedDrillsCount: 100,
        totalDrills: 100,
        sentencesCount: this.getSentencesPerDay(),
        totalSentences: 3000,
        isCustom: this.customPace.enabled
      };
    }

    const unlockedKanaCount = allKanaOrdered.filter(k => this.getKanaDay(k.char) <= day).length;
    const unlockedKanjiCount = kanjiList.filter((k: any) => this.getKanjiDay(k.char) <= day).length;
    const unlockedWordsCount = wordList.filter((w: any) => this.getWordDay(w.id || w._id || w.word) <= day).length;
    const unlockedLessonsCount = N5_LESSON_IDS.filter(id => this.getLessonDay(id) <= day).length;
    const drillsPerDay = Math.max(1, this.getQuizzesPerDay());
    const unlockedDrillsCount = Math.min(100, day * drillsPerDay);

    return {
      day,
      totalDays: this.getTargetDays(),
      unlockedKanaCount,
      totalKana: allKanaOrdered.length,
      unlockedKanjiCount,
      totalKanji: kanjiList.length,
      unlockedWordsCount,
      totalWords: wordList.length,
      unlockedLessonsCount,
      totalSessions: N5_LESSON_IDS.length,
      unlockedDrillsCount,
      totalDrills: 100,
      sentencesCount: this.getSentencesPerDay(),
      totalSentences: 3000,
      isCustom: this.customPace.enabled
    };
  }
}

export const studyScheduleStore = new StudyScheduleStore();
export { SCHEDULE_EVENT };
