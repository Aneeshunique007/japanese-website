// Utility to manage learned/completed cards for Kana, Kanji, and Words
// Persisted in localStorage with event dispatch for reactive updates across components

import { HIRAGANA_DATA, KATAKANA_DATA } from '../data/kanaData';

const KANA_KEY = 'anilearn_learned_kana';
const KANJI_KEY = 'anilearn_learned_kanji';
const WORDS_KEY = 'anilearn_learned_words';
const LESSON_KEY = 'anilearn_completed_lessons';

function getStoredSet(key: string): Set<string> {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch {
    return new Set();
  }
}

function saveSet(key: string, set: Set<string>): void {
  try {
    localStorage.setItem(key, JSON.stringify(Array.from(set)));
    window.dispatchEvent(new CustomEvent('anilearn_learned_update', { detail: { key } }));
  } catch (e) {
    console.error('Failed to save to localStorage:', e);
  }
}

export const learnedStore = {
  // --- KANA ---
  isKanaLearned(char: string): boolean {
    return getStoredSet(KANA_KEY).has(char);
  },
  toggleKanaLearned(char: string): boolean {
    const set = getStoredSet(KANA_KEY);
    const nowLearned = !set.has(char);
    if (nowLearned) {
      set.add(char);
    } else {
      set.delete(char);
    }
    saveSet(KANA_KEY, set);
    return nowLearned;
  },
  getLearnedKanaList(): string[] {
    return Array.from(getStoredSet(KANA_KEY));
  },
  isAllKanaCompleted(): boolean {
    return getStoredSet(KANA_KEY).size >= 164;
  },
  markAllKanaLearned(): void {
    const set = getStoredSet(KANA_KEY);
    const allKana = [
      ...HIRAGANA_DATA.basic,
      ...HIRAGANA_DATA.dakuten,
      ...HIRAGANA_DATA.yoon,
      ...KATAKANA_DATA.basic,
      ...KATAKANA_DATA.dakuten,
      ...KATAKANA_DATA.yoon,
    ];
    allKana.forEach(k => set.add(k.char));
    saveSet(KANA_KEY, set);
  },
  resetAllKanaLearned(): void {
    saveSet(KANA_KEY, new Set());
  },

  // --- KANJI ---
  isKanjiLearned(char: string): boolean {
    return getStoredSet(KANJI_KEY).has(char);
  },
  toggleKanjiLearned(char: string): boolean {
    const set = getStoredSet(KANJI_KEY);
    const nowLearned = !set.has(char);
    if (nowLearned) {
      set.add(char);
    } else {
      set.delete(char);
    }
    saveSet(KANJI_KEY, set);
    return nowLearned;
  },
  getLearnedKanjiList(): string[] {
    return Array.from(getStoredSet(KANJI_KEY));
  },

  // --- WORDS ---
  isWordLearned(idOrWord: string): boolean {
    return getStoredSet(WORDS_KEY).has(idOrWord);
  },
  toggleWordLearned(idOrWord: string): boolean {
    const set = getStoredSet(WORDS_KEY);
    const nowLearned = !set.has(idOrWord);
    if (nowLearned) {
      set.add(idOrWord);
    } else {
      set.delete(idOrWord);
    }
    saveSet(WORDS_KEY, set);
    return nowLearned;
  },
  getLearnedWordsList(): string[] {
    return Array.from(getStoredSet(WORDS_KEY));
  },

  // --- LESSONS ---
  isLessonCompleted(lessonId: string): boolean {
    if (!lessonId) return false;
    const norm = lessonId.replace(/^lesson-n5-/, '').replace(/^lesson-/, '');
    
    // Check direct set
    const set = getStoredSet(LESSON_KEY);
    if (set.has(lessonId) || set.has(norm) || set.has(`lesson-${norm}`) || set.has(`lesson-n5-${norm}`)) return true;

    // Check direct localStorage flags
    if (
      localStorage.getItem(`lesson_quiz_done_${lessonId}`) === 'true' ||
      localStorage.getItem(`lesson_completed_${lessonId}`) === 'true' ||
      localStorage.getItem(`lesson_quiz_done_${norm}`) === 'true' ||
      localStorage.getItem(`lesson_completed_${norm}`) === 'true' ||
      localStorage.getItem(`lesson_quiz_done_lesson-n5-${norm}`) === 'true' ||
      localStorage.getItem(`lesson_completed_lesson-n5-${norm}`) === 'true'
    ) return true;

    // Check anilearn_auth_user
    try {
      const rawUser = localStorage.getItem('anilearn_auth_user');
      if (rawUser) {
        const u = JSON.parse(rawUser);
        const list: string[] = u.completedLessons || [];
        if (list.some(id => id === lessonId || id.replace(/^lesson-n5-/, '').replace(/^lesson-/, '') === norm)) {
          return true;
        }
      }
    } catch {}

    return false;
  },

  markLessonCompleted(lessonId: string): boolean {
    if (!lessonId) return false;
    const norm = lessonId.replace(/^lesson-n5-/, '').replace(/^lesson-/, '');
    const set = getStoredSet(LESSON_KEY);
    set.add(lessonId);
    set.add(`lesson-n5-${norm}`);
    set.add(`lesson-${norm}`);
    set.add(norm);
    saveSet(LESSON_KEY, set);

    localStorage.setItem(`lesson_quiz_done_${lessonId}`, 'true');
    localStorage.setItem(`lesson_completed_${lessonId}`, 'true');
    localStorage.setItem(`lesson_quiz_done_${norm}`, 'true');
    localStorage.setItem(`lesson_completed_${norm}`, 'true');
    localStorage.setItem(`lesson_quiz_done_lesson-n5-${norm}`, 'true');
    localStorage.setItem(`lesson_completed_lesson-n5-${norm}`, 'true');

    try {
      const rawUser = localStorage.getItem('anilearn_auth_user');
      if (rawUser) {
        const u = JSON.parse(rawUser);
        if (!u.completedLessons) u.completedLessons = [];
        if (!u.completedLessons.includes(lessonId)) u.completedLessons.push(lessonId);
        if (!u.completedLessons.includes(`lesson-n5-${norm}`)) u.completedLessons.push(`lesson-n5-${norm}`);
        localStorage.setItem('anilearn_auth_user', JSON.stringify(u));
      }
    } catch {}

    window.dispatchEvent(new CustomEvent('anilearn_learned_update', { detail: { key: 'lesson', lessonId } }));
    window.dispatchEvent(new CustomEvent('anilearn_user_update'));
    return true;
  },

  toggleLessonCompleted(lessonId: string): boolean {
    if (this.isLessonCompleted(lessonId)) {
      const norm = lessonId.replace(/^lesson-n5-/, '').replace(/^lesson-/, '');
      const set = getStoredSet(LESSON_KEY);
      set.delete(lessonId);
      set.delete(`lesson-n5-${norm}`);
      set.delete(`lesson-${norm}`);
      set.delete(norm);
      saveSet(LESSON_KEY, set);
      localStorage.removeItem(`lesson_quiz_done_${lessonId}`);
      localStorage.removeItem(`lesson_completed_${lessonId}`);
      localStorage.removeItem(`lesson_quiz_done_${norm}`);
      localStorage.removeItem(`lesson_completed_${norm}`);
      localStorage.removeItem(`lesson_quiz_done_lesson-n5-${norm}`);
      localStorage.removeItem(`lesson_completed_lesson-n5-${norm}`);
      try {
        const rawUser = localStorage.getItem('anilearn_auth_user');
        if (rawUser) {
          const u = JSON.parse(rawUser);
          if (u.completedLessons) {
            u.completedLessons = u.completedLessons.filter((id: string) => 
              id !== lessonId && id.replace(/^lesson-n5-/, '').replace(/^lesson-/, '') !== norm
            );
            localStorage.setItem('anilearn_auth_user', JSON.stringify(u));
          }
        }
      } catch {}
      window.dispatchEvent(new CustomEvent('anilearn_learned_update', { detail: { key: 'lesson', lessonId } }));
      window.dispatchEvent(new CustomEvent('anilearn_user_update'));
      return false;
    } else {
      return this.markLessonCompleted(lessonId);
    }
  },

  getCompletedLessonsList(): string[] {
    return Array.from(getStoredSet(LESSON_KEY));
  },

  // --- STATS ---
  getCounts() {
    return {
      kana: getStoredSet(KANA_KEY).size,
      kanji: getStoredSet(KANJI_KEY).size,
      words: getStoredSet(WORDS_KEY).size
    };
  },

  // --- DAILY SENTENCE QUIZ ---
  getDailyQuizResult(day: number): { score: number; total: number; percentage: number } | null {
    try {
      const raw = localStorage.getItem('anilearn_daily_quiz_results');
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      return parsed[day] || null;
    } catch {
      return null;
    }
  },

  saveDailyQuizResult(day: number, score: number, total: number): void {
    try {
      const raw = localStorage.getItem('anilearn_daily_quiz_results');
      const parsed = raw ? JSON.parse(raw) : {};
      const percentage = Math.round((score / Math.max(1, total)) * 100);
      parsed[day] = { score, total, percentage, completedAt: new Date().toISOString() };
      localStorage.setItem('anilearn_daily_quiz_results', JSON.stringify(parsed));
      window.dispatchEvent(new CustomEvent('anilearn_learned_update', { detail: { key: 'daily_quiz', day } }));
    } catch (e) {
      console.error('Failed to save daily quiz result:', e);
    }
  },

  getDailyQuizProgress(day: number): { attended: number; total: number; score: number; isCompleted: boolean } {
    const finished = this.getSentenceDrillResult(day) || this.getDailyQuizResult(day);
    if (finished && finished.total > 0) {
      return {
        attended: finished.total,
        total: finished.total,
        score: finished.score,
        isCompleted: true
      };
    }
    try {
      const raw = localStorage.getItem(`anilearn_drill_progress_day${day}`);
      if (!raw) return { attended: 0, total: 50, score: 0, isCompleted: false };
      const parsed = JSON.parse(raw);
      const attended = typeof parsed.attendedCount === 'number' 
        ? parsed.attendedCount 
        : (typeof parsed.currentIndex === 'number' ? parsed.currentIndex : 0);
      const total = parsed.total || (parsed.questions?.length ?? 50);
      const isCompleted = attended >= total && total > 0;
      return {
        attended: Math.min(attended, total),
        total,
        score: parsed.score || 0,
        isCompleted
      };
    } catch {
      return { attended: 0, total: 50, score: 0, isCompleted: false };
    }
  },

  isDailyQuizCompleted(day: number): boolean {
    const result = this.getSentenceDrillResult(day) || this.getDailyQuizResult(day);
    if (result !== null && (result.total > 0 || result.score > 0)) return true;
    const progress = this.getDailyQuizProgress(day);
    return progress.isCompleted;
  },

  // --- SENTENCE DRILL (Daily Sentence Drill) ---
  getSentenceDrillResult(day: number): { score: number; total: number; percentage: number } | null {
    try {
      const raw = localStorage.getItem('anilearn_sentence_drill_results');
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      return parsed[day] || null;
    } catch {
      return null;
    }
  },
  saveSentenceDrillResult(day: number, score: number, total: number): void {
    try {
      const raw = localStorage.getItem('anilearn_sentence_drill_results');
      const parsed = raw ? JSON.parse(raw) : {};
      const percentage = Math.round((score / Math.max(1, total)) * 100);
      parsed[day] = { score, total, percentage, completedAt: new Date().toISOString() };
      localStorage.setItem('anilearn_sentence_drill_results', JSON.stringify(parsed));
      window.dispatchEvent(new CustomEvent('anilearn_learned_update', { detail: { key: 'sentence_drill', day } }));
    } catch (e) {
      console.error('Failed to save sentence drill result:', e);
    }
  },
  isSentenceDrillCompleted(day: number): boolean {
    const res = this.getSentenceDrillResult(day) || this.getDailyQuizResult(day);
    return res !== null && (res.total > 0 || res.score > 0);
  },

  // --- QUIZ OF THE DAY (Daily Mastery Drill) ---
  getQuizOfTheDayResult(day: number): { score: number; total: number; percentage: number } | null {
    try {
      const raw = localStorage.getItem('anilearn_quiz_of_day_results');
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      return parsed[day] || null;
    } catch {
      return null;
    }
  },
  saveQuizOfTheDayResult(day: number, score: number, total: number): void {
    try {
      const raw = localStorage.getItem('anilearn_quiz_of_day_results');
      const parsed = raw ? JSON.parse(raw) : {};
      const percentage = Math.round((score / Math.max(1, total)) * 100);
      parsed[day] = { score, total, percentage, completedAt: new Date().toISOString() };
      localStorage.setItem('anilearn_quiz_of_day_results', JSON.stringify(parsed));
      window.dispatchEvent(new CustomEvent('anilearn_learned_update', { detail: { key: 'quiz_of_the_day', day } }));
    } catch (e) {
      console.error('Failed to save quiz of the day result:', e);
    }
  },
  isQuizOfTheDayCompleted(day: number): boolean {
    const res = this.getQuizOfTheDayResult(day);
    return res !== null && (res.total > 0 || res.score > 0);
  },

  // --- RESET METHODS ---
  resetSentenceDrill(day: number): void {
    try {
      const raw = localStorage.getItem('anilearn_sentence_drill_results');
      if (raw) {
        const parsed = JSON.parse(raw);
        delete parsed[day];
        localStorage.setItem('anilearn_sentence_drill_results', JSON.stringify(parsed));
      }
      const rawQuiz = localStorage.getItem('anilearn_daily_quiz_results');
      if (rawQuiz) {
        const parsed = JSON.parse(rawQuiz);
        delete parsed[day];
        localStorage.setItem('anilearn_daily_quiz_results', JSON.stringify(parsed));
      }
      localStorage.removeItem(`anilearn_drill_progress_day${day}`);
      window.dispatchEvent(new CustomEvent('anilearn_learned_update', { detail: { key: 'sentence_drill', day } }));
      window.dispatchEvent(new CustomEvent('anilearn_user_update'));
    } catch (e) {
      console.error('Failed to reset sentence drill:', e);
    }
  },

  resetWordsForDay(words: any[]): void {
    try {
      const set = getStoredSet(WORDS_KEY);
      words.forEach(w => {
        if (w.id) set.delete(String(w.id));
        if (w._id) set.delete(String(w._id));
        if (w.word) set.delete(String(w.word));
      });
      saveSet(WORDS_KEY, set);
      window.dispatchEvent(new CustomEvent('anilearn_learned_update', { detail: { key: WORDS_KEY } }));
      window.dispatchEvent(new CustomEvent('anilearn_user_update'));
    } catch (e) {
      console.error('Failed to reset words for day:', e);
    }
  },

  resetDailyMastery(day: number): void {
    try {
      const raw = localStorage.getItem('anilearn_quiz_of_day_results');
      if (raw) {
        const parsed = JSON.parse(raw);
        delete parsed[day];
        localStorage.setItem('anilearn_quiz_of_day_results', JSON.stringify(parsed));
      }
      const keysToRemove: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && (k.includes('mastery_progress') || k.includes('quiz_of_day')) && k.includes(`day_${day}`)) {
          keysToRemove.push(k);
        }
      }
      keysToRemove.forEach(k => localStorage.removeItem(k));
      window.dispatchEvent(new CustomEvent('anilearn_learned_update', { detail: { key: 'quiz_of_the_day', day } }));
      window.dispatchEvent(new CustomEvent('anilearn_user_update'));
    } catch (e) {
      console.error('Failed to reset daily mastery:', e);
    }
  },

  resetKanaForDay(kanaList: any[]): void {
    try {
      const set = getStoredSet(KANA_KEY);
      kanaList.forEach(k => {
        if (k.char) set.delete(k.char);
      });
      saveSet(KANA_KEY, set);
      window.dispatchEvent(new CustomEvent('anilearn_learned_update', { detail: { key: KANA_KEY } }));
      window.dispatchEvent(new CustomEvent('anilearn_user_update'));
    } catch (e) {
      console.error('Failed to reset kana for day:', e);
    }
  },

  resetKanjiForDay(kanjiList: any[]): void {
    try {
      const set = getStoredSet(KANJI_KEY);
      kanjiList.forEach(k => {
        const char = k.char || k.character || k.kanji;
        if (char) set.delete(char);
      });
      saveSet(KANJI_KEY, set);
      window.dispatchEvent(new CustomEvent('anilearn_learned_update', { detail: { key: KANJI_KEY } }));
      window.dispatchEvent(new CustomEvent('anilearn_user_update'));
    } catch (e) {
      console.error('Failed to reset kanji for day:', e);
    }
  },

  resetLessonForDay(lessonId: string): void {
    if (!lessonId) return;
    try {
      const norm = lessonId.replace(/^lesson-n5-/, '').replace(/^lesson-/, '');
      const set = getStoredSet(LESSON_KEY);
      set.delete(lessonId);
      set.delete(`lesson-n5-${norm}`);
      set.delete(`lesson-${norm}`);
      set.delete(norm);
      saveSet(LESSON_KEY, set);
      localStorage.removeItem(`lesson_quiz_done_${lessonId}`);
      localStorage.removeItem(`lesson_completed_${lessonId}`);
      localStorage.removeItem(`lesson_quiz_done_${norm}`);
      localStorage.removeItem(`lesson_completed_${norm}`);
      localStorage.removeItem(`lesson_quiz_done_lesson-n5-${norm}`);
      localStorage.removeItem(`lesson_completed_lesson-n5-${norm}`);
      const rawUser = localStorage.getItem('anilearn_auth_user');
      if (rawUser) {
        const u = JSON.parse(rawUser);
        if (u.completedLessons) {
          u.completedLessons = u.completedLessons.filter((id: string) => 
            id !== lessonId && id.replace(/^lesson-n5-/, '').replace(/^lesson-/, '') !== norm
          );
          localStorage.setItem('anilearn_auth_user', JSON.stringify(u));
        }
      }
      window.dispatchEvent(new CustomEvent('anilearn_learned_update', { detail: { key: 'lesson', lessonId } }));
      window.dispatchEvent(new CustomEvent('anilearn_user_update'));
    } catch (e) {
      console.error('Failed to reset lesson for day:', e);
    }
  },

  resetUnitDrills(lessonIds: string[]): void {
    try {
      const raw = localStorage.getItem('anilearn_completed_quiz_drills');
      if (raw) {
        const list: string[] = JSON.parse(raw);
        const filtered = list.filter(id => !lessonIds.includes(id));
        localStorage.setItem('anilearn_completed_quiz_drills', JSON.stringify(filtered));
        window.dispatchEvent(new CustomEvent('anilearn_learned_update', { detail: { key: 'unit_drills' } }));
        window.dispatchEvent(new CustomEvent('anilearn_user_update'));
      }
    } catch (e) {
      console.error('Failed to reset unit drills:', e);
    }
  }
};
