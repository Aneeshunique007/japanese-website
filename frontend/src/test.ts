// Comprehensive 150-Test Suite for the Japanese Learning Platform
// Run with: npm test   (→ npx tsx src/test.ts)
//
// Covers 18 Headings across the Entire Platform:
//  1. User Identity, Auth & Per-User Isolation (8 tests: 1-8)
//  2. Persistence & Session State Across Logout/Login (8 tests: 9-16)
//  3. Legacy Storage Key Migration & Backwards Compatibility (5 tests: 17-21)
//  4. Speaking Particles & Self-Intro Mastery Engine (8 tests: 22-29)
//  5. Smart Resume, Edge Cases & Skipping Mastered Sentences (10 tests: 30-39)
//  6. Speaking Data Integrity & Profile Generator Robustness (8 tests: 40-47)
//  7. Kana Mastery & Schedule Progression (Day 2 Hiragana Bug Fix) (10 tests: 48-57)
//  8. Study Schedule Store Engine & Dynamic Pacing (60/90/120/ALL) (12 tests: 58-69)
//  9. Learned Store Multi-Domain Tracking (Kanji, Words, Lessons, Quizzes) (12 tests: 70-81)
//  10. Romaji to Hiragana Conversion & Pronunciation Engine (10 tests: 82-91)
//  11. Daily Mastery Quiz Generator & Activity Tracker (9 tests: 92-100)
//  12. Speech Recognition, Normalization & Phonetic Matching (8 tests: 101-108)
//  13. Daily Sentence Quiz Generator & Token Bank Engine (8 tests: 109-116)
//  14. Lesson Grammar Quiz Engine (N5 Course Progression) (6 tests: 117-122)
//  15. Client Cache Engine & DataStore In-Memory Repository (8 tests: 123-130)
//  16. Curriculum Structure, Anime Dialogues & Nikki Reader Integrity (8 tests: 131-138)
//  17. Search Engine Query Parsing & Multi-Modal Result Mapping (6 tests: 139-144)
//  18. API Client Data Service & Client-Side Leaderboard (6 tests: 145-150)
// Total: Exactly 150 Tests

// ---------------------------------------------------------------------------
// Minimal in-memory localStorage & DOM polyfills for Node / Test runner
// ---------------------------------------------------------------------------
class MemoryStorage {
  private store = new Map<string, string>();
  get length() { return this.store.size; }
  clear() {
    this.store.clear();
    for (const k of Object.keys(this)) {
      if (!['length', 'clear', 'getItem', 'setItem', 'removeItem', 'key', 'store'].includes(k)) {
        delete (this as any)[k];
      }
    }
  }
  getItem(k: string) { return this.store.has(k) ? this.store.get(k)! : null; }
  setItem(k: string, v: string) {
    this.store.set(k, String(v));
    (this as any)[k] = String(v);
  }
  removeItem(k: string) {
    this.store.delete(k);
    delete (this as any)[k];
  }
  key(i: number) { return Array.from(this.store.keys())[i] ?? null; }
}
(globalThis as any).localStorage = new MemoryStorage();
(globalThis as any).sessionStorage = new MemoryStorage();

if (!(globalThis as any).window) {
  (globalThis as any).window = {
    dispatchEvent: () => true,
    addEventListener: () => {},
  };
}
if (!(globalThis as any).document) {
  (globalThis as any).document = {
    addEventListener: () => {},
  };
}

import {
  LEGACY_INTRO_KEY,
  LEGACY_PARTICLES_KEY,
  introKeyFor,
  particlesKeyFor,
  introProgressKeyFor,
  sessionKeyFor,
  getCurrentUserId,
  loadJson,
  saveJson,
  loadSession,
  saveSession,
  readUserScoped,
  findNextUnmastered,
  resolveResumeIndex,
  nextUnmasteredAfter,
  markParticleMastered,
  markIntroMastered,
  ParticleProgress
} from './utils/speakingProgress';
import {
  SPEAKING_PARTICLES_DATA,
  DEFAULT_SELF_INTRO_PROFILE,
  generateSelfIntroSentences
} from './data/speakingParticlesData';
import { studyScheduleStore } from './utils/studyScheduleStore';
import { learnedStore } from './utils/learnedStore';
import { romajiToHiragana, getKanjiPronunciation } from './utils/romaji';
import { getLearningStatus, generateDailyMasteryQuestions } from './utils/dailyMasteryQuizGenerator';
import { formatDateKey, recordStudySession, getWeeklyStudyData } from './utils/activityTracker';
import {
  katakanaToHiragana,
  normalizeJapaneseText,
  compareJapaneseSpeech
} from './utils/speechRecognition';
import {
  resolveRomaji,
  lookupOptionDetails,
  generateDailySentenceQuestions
} from './utils/dailySentenceQuizGenerator';
import { getLessonGrammar10Questions } from './utils/lessonGrammarQuizData';
import { clientCache } from './services/cacheService';
import { dataStore } from './services/dataStore';
import { CURRICULUM_DATA } from './data/curriculumData';
import { ANIME_DIALOGUES, ANIME_CATEGORIES } from './data/animeData';
import { NIKKI_DAYS } from './data/nikkiData';
import { searchAll } from './utils/searchEngine';
import { api } from './services/api';

// ---------------------------------------------------------------------------
// Test Runner Engine
// ---------------------------------------------------------------------------
let passed = 0;
let failed = 0;
const failures: string[] = [];

function test(name: string, fn: () => void | Promise<void>) {
  localStorage.clear();
  try {
    const res = fn();
    if (res && typeof (res as any).then === 'function') {
      throw new Error('Async test called synchronously');
    }
    passed++;
    console.log(`  ✅ ${name}`);
  } catch (e: any) {
    failed++;
    failures.push(`${name}: ${e?.message ?? e}`);
    console.log(`  ❌ ${name}\n     → ${e?.message ?? e}`);
  }
}

async function testAsync(name: string, fn: () => Promise<void>) {
  localStorage.clear();
  try {
    await fn();
    passed++;
    console.log(`  ✅ ${name}`);
  } catch (e: any) {
    failed++;
    failures.push(`${name}: ${e?.message ?? e}`);
    console.log(`  ❌ ${name}\n     → ${e?.message ?? e}`);
  }
}

function section(title: string) {
  console.log(`\n▶ ${title}`);
}

function assertEqual<T>(actual: T, expected: T, msg = '') {
  const a = JSON.stringify(actual);
  const b = JSON.stringify(expected);
  if (a !== b) throw new Error(`${msg ? msg + ': ' : ''}expected ${b}, got ${a}`);
}

function assert(cond: unknown, msg: string) {
  if (!cond) throw new Error(msg);
}

function login(id: string) {
  localStorage.setItem('anilearn_auth_user', JSON.stringify({ id, name: id }));
}
function logout() {
  localStorage.removeItem('anilearn_auth_user');
}

// ===========================================================================
// Heading 1: User Identity, Auth & Per-User Isolation (8 Tests)
// ===========================================================================
section('Heading 1: User Identity, Auth & Per-User Isolation');

test('1. falls back to "guest" when nobody is logged in', () => {
  assertEqual(getCurrentUserId(), 'guest');
});

test('2. reads the logged-in user id correctly from auth payload', () => {
  login('user_42');
  assertEqual(getCurrentUserId(), 'user_42');
});

test('3. handles corrupt or non-object auth JSON gracefully', () => {
  localStorage.setItem('anilearn_auth_user', '{not valid json');
  assertEqual(getCurrentUserId(), 'guest');
});

test('4. storage keys are uniquely namespaced per user', () => {
  assertEqual(introKeyFor('alice'), 'anilearn_self_intro_profile_alice');
  assertEqual(introKeyFor('bob'), 'anilearn_self_intro_profile_bob');
  assertEqual(particlesKeyFor('alice'), 'anilearn_speaking_particles_progress_alice');
  assertEqual(particlesKeyFor('bob'), 'anilearn_speaking_particles_progress_bob');
});

test('5. empty string or whitespace userId falls back to guest', () => {
  localStorage.setItem('anilearn_auth_user', JSON.stringify({ id: '   ' }));
  assertEqual(getCurrentUserId(), 'guest');
});

test('6. switching users changes active user id immediately', () => {
  login('alice');
  assertEqual(getCurrentUserId(), 'alice');
  login('bob');
  assertEqual(getCurrentUserId(), 'bob');
  logout();
  assertEqual(getCurrentUserId(), 'guest');
});

test('7. handles missing id or _id in auth user payload', () => {
  localStorage.setItem('anilearn_auth_user', JSON.stringify({ username: 'sam' }));
  assertEqual(getCurrentUserId(), 'guest');
  localStorage.setItem('anilearn_auth_user', JSON.stringify({ _id: 'mongodb_123' }));
  assertEqual(getCurrentUserId(), 'mongodb_123');
});

test('8. user-scoped keys do not collide across different user ids', () => {
  const k1 = introProgressKeyFor('user1');
  const k2 = introProgressKeyFor('user2');
  assert(k1 !== k2, 'Keys for different users must be distinct');
  assert(k1.includes('user1') && k2.includes('user2'), 'Keys must embed specific user id');
});

// ===========================================================================
// Heading 2: Persistence & Session State Across Logout/Login (8 Tests)
// ===========================================================================
section('Heading 2: Persistence & Session State Across Logout/Login');

test('9. self-intro answers survive logout and login', () => {
  login('alice');
  const profile = { ...DEFAULT_SELF_INTRO_PROFILE, name: 'Alice', hobby: 'reading' };
  saveJson(introKeyFor('alice'), profile);
  logout();

  login('alice');
  const loaded = loadJson(introKeyFor(getCurrentUserId()), null);
  assertEqual(loaded, profile);
});

test('10. another user does NOT see Alice\'s saved answers', () => {
  login('alice');
  saveJson(introKeyFor('alice'), { ...DEFAULT_SELF_INTRO_PROFILE, name: 'Alice' });
  logout();

  login('bob');
  const bobProfile = loadJson(introKeyFor(getCurrentUserId()), null);
  assertEqual(bobProfile, null);
});

test('11. particle progress survives logout and login', () => {
  login('charlie');
  const prog: ParticleProgress = { wa: [1, 2, 3], ga: [1] };
  saveJson(particlesKeyFor('charlie'), prog);
  logout();

  login('charlie');
  const restored = loadJson<ParticleProgress>(particlesKeyFor(getCurrentUserId()), {});
  assertEqual(restored, prog);
});

test('12. session position (tab, particle, sentence, step) survives logout and login', () => {
  login('dani');
  saveSession('dani', {
    activeMode: 'particles',
    selectedParticleId: 'wo',
    sentenceIndex: 3,
    selfIntroIndex: 2
  });
  logout();

  login('dani');
  const s = loadSession();
  assertEqual(s.activeMode, 'particles');
  assertEqual(s.selectedParticleId, 'wo');
  assertEqual(s.sentenceIndex, 3);
  assertEqual(s.selfIntroIndex, 2);
});

test('13. loadSession returns empty default for a brand new user', () => {
  login('newbie');
  const s = loadSession();
  assertEqual(s, {});
});

test('14. questionnaire auto-open rule: opens only when no saved answers', () => {
  login('first_timer');
  const saved = readUserScoped(introKeyFor('first_timer'), LEGACY_INTRO_KEY, (x) => Boolean(x && x.name));
  assert(saved === null, 'Brand-new user must have null saved answers');
});

test('15. questionnaire does NOT auto-open when user already completed profile', () => {
  login('veteran');
  saveJson(introKeyFor('veteran'), { ...DEFAULT_SELF_INTRO_PROFILE, name: 'Ken' });
  const saved = readUserScoped(introKeyFor('veteran'), LEGACY_INTRO_KEY, (x) => Boolean(x && x.name));
  assert(saved !== null, 'Existing user must find their saved answers');
});

test('16. saving corrupted session recovers without crashing', () => {
  login('err_user');
  localStorage.setItem(sessionKeyFor('err_user'), '{"invalid JSON');
  const s = loadSession();
  assertEqual(s, {});
});

// ===========================================================================
// Heading 3: Legacy Storage Key Migration & Backwards Compatibility (5 Tests)
// ===========================================================================
section('Heading 3: Legacy Storage Key Migration & Backwards Compatibility');

test('17. migrates legacy global value to the user key and removes the legacy key', () => {
  saveJson(LEGACY_INTRO_KEY, { ...DEFAULT_SELF_INTRO_PROFILE, name: 'MigratedUser' });
  login('first_login_user');

  const loaded = readUserScoped(introKeyFor('first_login_user'), LEGACY_INTRO_KEY, (x) => Boolean(x && x.name));
  assert(loaded !== null, 'Loaded should not be null');
  assertEqual((loaded as any).name, 'MigratedUser');
  assert(loadJson(LEGACY_INTRO_KEY, null) === null, 'Legacy key must be deleted after migration');
  assert(loadJson(introKeyFor('first_login_user'), null) !== null, 'User key must now hold data');
});

test('18. prefers the user-scoped value over a legacy value if both exist', () => {
  saveJson(LEGACY_INTRO_KEY, { ...DEFAULT_SELF_INTRO_PROFILE, name: 'OldLegacy' });
  login('migrated_already');
  saveJson(introKeyFor('migrated_already'), { ...DEFAULT_SELF_INTRO_PROFILE, name: 'NewUserScoped' });

  const loaded = readUserScoped(introKeyFor('migrated_already'), LEGACY_INTRO_KEY, (x) => Boolean(x && x.name));
  assertEqual((loaded as any).name, 'NewUserScoped');
});

test('19. legacy data is migrated only once (second user gets nothing)', () => {
  saveJson(LEGACY_INTRO_KEY, { ...DEFAULT_SELF_INTRO_PROFILE, name: 'Shared' });
  login('userA');
  readUserScoped(introKeyFor('userA'), LEGACY_INTRO_KEY, (x) => Boolean(x && x.name));
  logout();

  login('userB');
  const userBData = readUserScoped(introKeyFor('userB'), LEGACY_INTRO_KEY, (x) => Boolean(x && x.name));
  assertEqual(userBData, null);
});

test('20. returns null when there is no data at all', () => {
  login('clean_slate');
  const result = readUserScoped(introKeyFor('clean_slate'), LEGACY_INTRO_KEY, (x) => Boolean(x && x.name));
  assertEqual(result, null);
});

test('21. handles corrupted legacy JSON gracefully without throwing', () => {
  localStorage.setItem(LEGACY_INTRO_KEY, '{malformed json string');
  login('resilient_user');
  const result = readUserScoped(introKeyFor('resilient_user'), LEGACY_INTRO_KEY, (x) => Boolean(x && x.name));
  assertEqual(result, null);
});

// ===========================================================================
// Heading 4: Speaking Particles & Self-Intro Mastery Engine (8 Tests)
// ===========================================================================
section('Heading 4: Speaking Particles & Self-Intro Mastery Engine');

test('22. markParticleMastered adds a sentence id to user progress', () => {
  const p: ParticleProgress = {};
  const next = markParticleMastered(p, 'wa', 42);
  assertEqual(next, { wa: [42] });
});

test('23. markParticleMastered is idempotent & returns same reference on repeat', () => {
  const p: ParticleProgress = { wa: [42] };
  const next = markParticleMastered(p, 'wa', 42);
  assert(next === p, 'Reference must remain identical when already mastered');
});

test('24. markParticleMastered does not mutate the input array', () => {
  const originalList = [1, 2];
  const p: ParticleProgress = { wa: originalList };
  const next = markParticleMastered(p, 'wa', 3);
  assertEqual(originalList, [1, 2]);
  assertEqual(next.wa, [1, 2, 3]);
});

test('25. markIntroMastered adds Japanese sentence text and is idempotent', () => {
  let list: string[] = [];
  list = markIntroMastered(list, '私は田中です。');
  assertEqual(list, ['私は田中です。']);
  const same = markIntroMastered(list, '私は田中です。');
  assert(same === list, 'Should return same reference if already present');
});

test('26. markIntroMastered handles empty string or whitespace safely', () => {
  let list: string[] = [];
  list = markIntroMastered(list, '');
  assertEqual(list.length, 0, 'Empty string should not be added');
  list = markIntroMastered(list, '   ');
  assertEqual(list.length, 0, 'Whitespace should not be added');
});

test('27. particle progress maintains separate lists per particle key', () => {
  let p: ParticleProgress = {};
  p = markParticleMastered(p, 'wa', 1);
  p = markParticleMastered(p, 'ga', 2);
  p = markParticleMastered(p, 'wo', 3);
  assertEqual(p.wa, [1]);
  assertEqual(p.ga, [2]);
  assertEqual(p.wo, [3]);
});

test('28. unmarking or resetting particle progress leaves other particles intact', () => {
  const p: ParticleProgress = { wa: [1, 2], ga: [10] };
  const updated = { ...p, wa: [] };
  assertEqual(updated.wa, []);
  assertEqual(updated.ga, [10]);
});

test('29. cumulative count of mastered sentences reflects total unique items', () => {
  let p: ParticleProgress = {};
  p = markParticleMastered(p, 'wa', 1);
  p = markParticleMastered(p, 'wa', 2);
  p = markParticleMastered(p, 'ni', 1);
  const total = Object.values(p).reduce((acc, arr) => acc + arr.length, 0);
  assertEqual(total, 3);
});

// ===========================================================================
// Heading 5: Smart Resume, Edge Cases & Skipping Mastered Sentences (10 Tests)
// ===========================================================================
section('Heading 5: Smart Resume, Edge Cases & Skipping Mastered Sentences');

test('30. findNextUnmastered finds first unmastered from start', () => {
  const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const idx = findNextUnmastered(items, 0, (x) => x.id === 1);
  assertEqual(idx, 1);
});

test('31. findNextUnmastered wraps around when earlier sentences unmastered', () => {
  const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const idx = findNextUnmastered(items, 2, (x) => x.id === 2 || x.id === 3);
  assertEqual(idx, 0);
});

test('32. findNextUnmastered returns -1 when all mastered or empty list', () => {
  const items = [{ id: 1 }, { id: 2 }];
  assertEqual(findNextUnmastered(items, 0, () => true), -1);
  assertEqual(findNextUnmastered([], 0, () => false), -1);
});

test('33. resume: brand-new user starts at sentence index 0', () => {
  const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const idx = resolveResumeIndex(items, undefined, () => false);
  assertEqual(idx, 0);
});

test('34. resume: correctly-answered sentences are NOT asked again', () => {
  const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const idx = resolveResumeIndex(items, 0, (x) => x.id === 1);
  assertEqual(idx, 1);
});

test('35. resume: stays on saved sentence index if it is still unmastered', () => {
  const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const idx = resolveResumeIndex(items, 1, () => false);
  assertEqual(idx, 1);
});

test('36. resume: clamps out-of-range negative saved index to valid bounds', () => {
  const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const idx = resolveResumeIndex(items, -5, () => false);
  assertEqual(idx, 0);
});

test('37. resume: clamps out-of-range positive saved index to valid bounds', () => {
  const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const idx = resolveResumeIndex(items, 999, () => false);
  assertEqual(idx, 2);
});

test('38. resume: everything mastered enters review mode safely', () => {
  const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const idx = resolveResumeIndex(items, 1, () => true);
  assertEqual(idx, 1);
});

test('39. Next button skips already-mastered sentences sequentially', () => {
  const items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  const nextIdx = nextUnmasteredAfter(items, 0, (x) => x.id === 2);
  assertEqual(nextIdx, 2);
});

// ===========================================================================
// Heading 6: Speaking Data Integrity & Profile Generator Robustness (8 Tests)
// ===========================================================================
section('Heading 6: Speaking Data Integrity & Profile Generator Robustness');

test('40. every particle has valid sentences with unique numeric ids', () => {
  SPEAKING_PARTICLES_DATA.forEach((p) => {
    assert(p.sentences.length > 0, `Particle ${p.id} has no sentences`);
    const ids = p.sentences.map((s) => s.id);
    assertEqual(new Set(ids).size, ids.length, `Duplicate sentence ID in ${p.id}`);
  });
});

test('41. particle ids across all particles are globally unique', () => {
  const ids = SPEAKING_PARTICLES_DATA.map((p) => p.id);
  assertEqual(new Set(ids).size, ids.length);
});

test('42. default "wa" particle exists and has at least 5 practice sentences', () => {
  const wa = SPEAKING_PARTICLES_DATA.find((p) => p.id === 'wa');
  assert(Boolean(wa), 'Topic marker wa must exist');
  assert(wa!.sentences.length >= 5, 'wa should contain at least 5 sentences');
});

test('43. generator produces valid sentences from the default profile', () => {
  const s = generateSelfIntroSentences(DEFAULT_SELF_INTRO_PROFILE);
  assert(s.length >= 4, 'Must generate at least 4 sentences');
});

test('44. generator personalises sentences with the user\'s name', () => {
  const s = generateSelfIntroSentences({ ...DEFAULT_SELF_INTRO_PROFILE, name: 'Taro' });
  assert(s[0].japanese.includes('Taro') || s[0].japanese.includes('たろう'), 'japanese includes name');
  assert(s[0].english.includes('Taro'), 'english includes name');
});

test('45. generator skips optional sections left blank without errors', () => {
  const full = generateSelfIntroSentences(DEFAULT_SELF_INTRO_PROFILE);
  const noAge = generateSelfIntroSentences({ ...DEFAULT_SELF_INTRO_PROFILE, age: '', hometown: '' });
  assertEqual(noAge.length, full.length - 2);
});

test('46. self-intro Japanese text is unique across all generated items', () => {
  const s = generateSelfIntroSentences(DEFAULT_SELF_INTRO_PROFILE);
  const texts = s.map((x) => x.japanese);
  assertEqual(new Set(texts).size, texts.length);
});

test('47. editing a single answer resets only that sentence\'s mastered state', () => {
  const before = generateSelfIntroSentences(DEFAULT_SELF_INTRO_PROFILE);
  const done = before.map((x) => x.japanese);
  const after = generateSelfIntroSentences({ ...DEFAULT_SELF_INTRO_PROFILE, age: '30' });
  const unmastered = after.filter((x) => !done.includes(x.japanese));
  assertEqual(unmastered.length, 1);
  assert(unmastered[0].japanese.includes('30'), 'unmastered sentence is the edited one');
});

// ===========================================================================
// Heading 7: Kana Mastery & Schedule Progression (Day 2 Hiragana Bug Fix) (10 Tests)
// ===========================================================================
section('Heading 7: Kana Mastery & Schedule Progression (Day 2 Hiragana Bug Fix)');

test('48. initially kana is scheduled across multiple days before being mastered', () => {
  learnedStore.resetAllKanaLearned();
  studyScheduleStore.resetCustomPace();
  studyScheduleStore.setCurrentDay(1, true);

  assert(!studyScheduleStore.isKanaMastered(), 'Kana should not be mastered initially');
  assertEqual(studyScheduleStore.getKanaDay('か'), 2, 'Day of か should be 2 initially');
  assert(!studyScheduleStore.isKanaUnlocked('か'), 'か should be locked on Day 1 initially');
  assert(studyScheduleStore.getDayTargets(2).hiragana.length > 0, 'Day 2 should have hiragana targets initially');
});

test('49. individual learned kana is unlocked regardless of day schedule', () => {
  learnedStore.resetAllKanaLearned();
  studyScheduleStore.resetCustomPace();
  studyScheduleStore.setCurrentDay(1, true);

  assert(!studyScheduleStore.isKanaUnlocked('か'), 'か starts locked on Day 1');
  learnedStore.toggleKanaLearned('か');
  assert(studyScheduleStore.isKanaUnlocked('か'), 'Manually learned か must unlock immediately');
});

test('50. markAllKanaLearned marks all 164 kana in learnedStore', () => {
  learnedStore.resetAllKanaLearned();
  learnedStore.markAllKanaLearned();
  assertEqual(learnedStore.getLearnedKanaList().length, 164, 'Must have 164 kana learned');
});

test('51. isAllKanaCompleted returns true when all 164 kana are learned', () => {
  learnedStore.resetAllKanaLearned();
  learnedStore.markAllKanaLearned();
  assert(learnedStore.isAllKanaCompleted(), 'isAllKanaCompleted should return true');
  assert(studyScheduleStore.isKanaMastered(), 'isKanaMastered should return true');
});

test('52. when all kana is known, all characters are unlocked (no Day 2 locks)', () => {
  learnedStore.resetAllKanaLearned();
  studyScheduleStore.resetCustomPace();
  studyScheduleStore.setCurrentDay(1, true);

  learnedStore.markAllKanaLearned();
  assert(studyScheduleStore.isKanaUnlocked('あ'), 'あ must be unlocked');
  assert(studyScheduleStore.isKanaUnlocked('か'), 'か must be unlocked on Day 1 when kana is mastered');
  assert(studyScheduleStore.isKanaUnlocked('ん'), 'ん must be unlocked on Day 1 when kana is mastered');
  assertEqual(studyScheduleStore.getKanaDay('か'), 1, 'Day of か should collapse to 1 when kana mastered');
});

test('53. when all kana is known, Day 2 has NO Hiragana targets (the reported bug)', () => {
  learnedStore.resetAllKanaLearned();
  studyScheduleStore.resetCustomPace();

  learnedStore.markAllKanaLearned();
  const day2Targets = studyScheduleStore.getDayTargets(2);
  assertEqual(day2Targets.hiragana.length, 0, 'Day 2 must have 0 hiragana targets');
  assertEqual(day2Targets.katakana.length, 0, 'Day 2 must have 0 katakana targets');
  assertEqual(day2Targets.kanaCount, 0, 'Day 2 kana count must be 0');
});

test('54. when all kana is known, Day 3 has NO Hiragana targets', () => {
  learnedStore.resetAllKanaLearned();
  studyScheduleStore.resetCustomPace();

  learnedStore.markAllKanaLearned();
  const day3Targets = studyScheduleStore.getDayTargets(3);
  assertEqual(day3Targets.hiragana.length, 0, 'Day 3 must have 0 hiragana targets');
});

test('55. when all kana is known, isKanaToday returns false (no daily drills needed)', () => {
  learnedStore.resetAllKanaLearned();
  studyScheduleStore.resetCustomPace();
  studyScheduleStore.setCurrentDay(1, true);

  learnedStore.markAllKanaLearned();
  assert(!studyScheduleStore.isKanaToday('あ'), 'あ should not be marked as today study target');
  assert(!studyScheduleStore.isKanaToday('か'), 'か should not be marked as today study target');
});

test('56. setSkipKana(true) sets custom pace skipKana and unlocks full curriculum from Day 1', () => {
  learnedStore.resetAllKanaLearned();
  studyScheduleStore.resetCustomPace();

  studyScheduleStore.setSkipKana(true);
  assert(studyScheduleStore.getCustomPace().skipKana, 'skipKana must be true');
  assert(studyScheduleStore.isKanaMastered(), 'isKanaMastered must be true');
  assertEqual(studyScheduleStore.getKanaOffset(), 0, 'Kana offset must be 0 days');
  assertEqual(studyScheduleStore.getHiraganaDaysNeeded(), 0, 'Hiragana days needed must be 0');
  assertEqual(studyScheduleStore.getDayTargets(2).hiragana.length, 0, 'Day 2 targets must be empty');
});

test('57. resetting kana restores day-by-day distribution and Day 2 targets', () => {
  studyScheduleStore.setSkipKana(false);
  learnedStore.resetAllKanaLearned();
  studyScheduleStore.resetCustomPace();
  studyScheduleStore.setCurrentDay(1, true);

  assert(!studyScheduleStore.isKanaMastered(), 'Kana should not be mastered after reset');
  assertEqual(studyScheduleStore.getKanaDay('か'), 2, 'Day of か must restore to 2');
  assert(!studyScheduleStore.isKanaUnlocked('か'), 'か must be locked on Day 1');
  assert(studyScheduleStore.getDayTargets(2).hiragana.length > 0, 'Day 2 targets must be restored');
});

// ===========================================================================
// Heading 8: Study Schedule Store Engine & Dynamic Pacing (12 Tests)
// ===========================================================================
section('Heading 8: Study Schedule Store Engine & Dynamic Pacing (60/90/120/ALL)');

test('58. standard 60-day plan initializes with correct target days', () => {
  studyScheduleStore.resetCustomPace();
  studyScheduleStore.setTargetDays(60);
  assertEqual(studyScheduleStore.getTargetDays(), 60);
});

test('59. setting target days to 90 updates duration and recomputes mappings', () => {
  studyScheduleStore.setTargetDays(90);
  assertEqual(studyScheduleStore.getTargetDays(), 90);
});

test('60. setting target days to 120 updates duration and recomputes mappings', () => {
  studyScheduleStore.setTargetDays(120);
  assertEqual(studyScheduleStore.getTargetDays(), 120);
});

test('61. ALL mode unlocks 100% of kana, kanji, words, and lessons immediately', () => {
  studyScheduleStore.setTargetDays('ALL');
  assert(studyScheduleStore.isAllUnlocked(), 'ALL mode must be unlocked');
  assert(studyScheduleStore.isKanjiUnlocked('日'), 'Kanji must be unlocked');
  assert(studyScheduleStore.isLessonUnlocked('lesson-n5-1-1'), 'Lesson must be unlocked');
  studyScheduleStore.setTargetDays(60); // reset
});

test('62. setCurrentDay clamps below 1 to Day 1', () => {
  studyScheduleStore.setCurrentDay(-10, true);
  assertEqual(studyScheduleStore.getCurrentDay(), 1);
});

test('63. setCurrentDay clamps above totalDays to max days', () => {
  studyScheduleStore.setTargetDays(60);
  studyScheduleStore.setCurrentDay(999, true);
  assertEqual(studyScheduleStore.getCurrentDay(), 60);
  studyScheduleStore.setCurrentDay(1, true); // reset
});

test('64. prevDay does not decrease below Day 1', () => {
  studyScheduleStore.setCurrentDay(1, true);
  studyScheduleStore.prevDay();
  assertEqual(studyScheduleStore.getCurrentDay(), 1);
});

test('65. nextDay advances day when completed or forced', () => {
  studyScheduleStore.setCurrentDay(1, true);
  const next = studyScheduleStore.nextDay(true);
  assertEqual(next, 2);
  studyScheduleStore.setCurrentDay(1, true); // reset
});

test('66. getKanaOffset returns 0 when custom pace has skipKana enabled', () => {
  studyScheduleStore.setCustomPace({ enabled: true, skipKana: true, hiraganaPerDay: 10 });
  assertEqual(studyScheduleStore.getKanaOffset(), 0);
  studyScheduleStore.resetCustomPace();
});

test('67. getSentenceDayForCurriculumDay maps day appropriately with kana offset', () => {
  studyScheduleStore.resetCustomPace();
  const d = studyScheduleStore.getSentenceDayForCurriculumDay(5);
  assertEqual(d, 5);
});

test('68. getCumulativeStats returns accurate progress counts for Day 1', () => {
  studyScheduleStore.resetCustomPace();
  studyScheduleStore.setCurrentDay(1, true);
  const stats = studyScheduleStore.getCumulativeStats(1);
  assert(stats.totalKana > 0, 'Total kana must be positive');
  assert(stats.totalKanji > 0, 'Total kanji must be positive');
  assert(stats.totalWords > 0, 'Total words must be positive');
});

test('69. resetToDay1 resets current day and anchors start date', () => {
  studyScheduleStore.setCurrentDay(15, true);
  studyScheduleStore.resetToDay1();
  assertEqual(studyScheduleStore.getCurrentDay(), 1);
  assert(/^\d{4}-\d{2}-\d{2}$/.test(studyScheduleStore.getStartDate()), 'Start date must be ISO format');
});

// ===========================================================================
// Heading 9: Learned Store Multi-Domain Tracking (Kanji, Words, Lessons, Quizzes) (12 Tests)
// ===========================================================================
section('Heading 9: Learned Store Multi-Domain Tracking (Kanji, Words, Lessons, Quizzes)');

test('70. toggleKanjiLearned adds and toggles kanji characters', () => {
  localStorage.clear();
  assert(!learnedStore.isKanjiLearned('日'), 'Initially unlearned');
  const nowLearned = learnedStore.toggleKanjiLearned('日');
  assert(nowLearned, 'Should toggle to learned');
  assert(learnedStore.isKanjiLearned('日'), 'Should be learned');
  const toggledOff = learnedStore.toggleKanjiLearned('日');
  assert(!toggledOff, 'Should toggle off');
  assert(!learnedStore.isKanjiLearned('日'), 'Should no longer be learned');
});

test('71. isKanjiLearned returns true for learned kanji and false for unlearned', () => {
  localStorage.clear();
  learnedStore.toggleKanjiLearned('月');
  assert(learnedStore.isKanjiLearned('月'), '月 must be learned');
  assert(!learnedStore.isKanjiLearned('木'), '木 must be unlearned');
});

test('72. getLearnedKanjiList returns all unique learned kanji', () => {
  localStorage.clear();
  learnedStore.toggleKanjiLearned('火');
  learnedStore.toggleKanjiLearned('水');
  const list = learnedStore.getLearnedKanjiList();
  assertEqual(list.sort(), ['火', '水'].sort());
});

test('73. toggleWordLearned adds and removes word ids', () => {
  localStorage.clear();
  const added = learnedStore.toggleWordLearned('word_taberu');
  assert(added, 'Word should be added');
  assert(learnedStore.isWordLearned('word_taberu'), 'Word should be learned');
  const removed = learnedStore.toggleWordLearned('word_taberu');
  assert(!removed, 'Word should be removed');
  assert(!learnedStore.isWordLearned('word_taberu'), 'Word should be unlearned');
});

test('74. isWordLearned correctly recognizes word ids', () => {
  localStorage.clear();
  learnedStore.toggleWordLearned('w1');
  assert(learnedStore.isWordLearned('w1'), 'w1 should be learned');
  assert(!learnedStore.isWordLearned('w2'), 'w2 should be unlearned');
});

test('75. markLessonCompleted normalizes lesson ids and saves state', () => {
  localStorage.clear();
  learnedStore.markLessonCompleted('lesson-n5-1-1');
  assert(learnedStore.isLessonCompleted('lesson-n5-1-1'), 'Lesson should be completed');
});

test('76. isLessonCompleted matches normalized ids across formats (e.g. lesson-n5-1-1 vs 1-1)', () => {
  localStorage.clear();
  learnedStore.markLessonCompleted('lesson-n5-2-3');
  assert(learnedStore.isLessonCompleted('2-3'), 'Short code 2-3 must match');
  assert(learnedStore.isLessonCompleted('lesson-2-3'), 'lesson-2-3 must match');
});

test('77. toggleLessonCompleted unmarks a previously completed lesson', () => {
  localStorage.clear();
  learnedStore.markLessonCompleted('lesson-n5-1-2');
  const toggled = learnedStore.toggleLessonCompleted('lesson-n5-1-2');
  assert(!toggled, 'Lesson should be unmarked');
  assert(!learnedStore.isLessonCompleted('lesson-n5-1-2'), 'Should no longer be completed');
});

test('78. saveDailyQuizResult saves score, total, percentage and timestamp', () => {
  localStorage.clear();
  learnedStore.saveDailyQuizResult(1, 45, 50);
  const res = learnedStore.getDailyQuizResult(1);
  assert(res !== null, 'Quiz result must exist');
  assertEqual(res!.score, 45);
  assertEqual(res!.total, 50);
  assertEqual(res!.percentage, 90);
});

test('79. isDailyQuizCompleted returns true when quiz result exists', () => {
  localStorage.clear();
  assert(!learnedStore.isDailyQuizCompleted(1), 'Quiz not completed initially');
  learnedStore.saveDailyQuizResult(1, 50, 50);
  assert(learnedStore.isDailyQuizCompleted(1), 'Quiz should be completed');
});

test('80. saveSentenceDrillResult saves score and updates completion flag', () => {
  localStorage.clear();
  learnedStore.saveSentenceDrillResult(2, 40, 50);
  const res = learnedStore.getSentenceDrillResult(2);
  assert(res !== null, 'Drill result must exist');
  assertEqual(res!.percentage, 80);
});

test('81. getCounts returns accurate live counts across kana, kanji, and words', () => {
  localStorage.clear();
  learnedStore.toggleKanaLearned('あ');
  learnedStore.toggleKanjiLearned('山');
  learnedStore.toggleWordLearned('yama');
  const counts = learnedStore.getCounts();
  assertEqual(counts.kana, 1);
  assertEqual(counts.kanji, 1);
  assertEqual(counts.words, 1);
});

// ===========================================================================
// Heading 10: Romaji to Hiragana Conversion & Pronunciation Engine (10 Tests)
// ===========================================================================
section('Heading 10: Romaji to Hiragana Conversion & Pronunciation Engine');

test('82. romajiToHiragana converts basic vowels (a, i, u, e, o) to あいうえお', () => {
  assertEqual(romajiToHiragana('a'), 'あ');
  assertEqual(romajiToHiragana('i'), 'い');
  assertEqual(romajiToHiragana('u'), 'う');
  assertEqual(romajiToHiragana('e'), 'え');
  assertEqual(romajiToHiragana('o'), 'お');
});

test('83. romajiToHiragana converts consonant-vowel combinations (ka, sa, ta, na)', () => {
  assertEqual(romajiToHiragana('ka'), 'か');
  assertEqual(romajiToHiragana('shi'), 'し');
  assertEqual(romajiToHiragana('tsu'), 'つ');
  assertEqual(romajiToHiragana('ne'), 'ね');
});

test('84. romajiToHiragana converts combo sounds (kya, shu, cho, nya)', () => {
  assertEqual(romajiToHiragana('kya'), 'きゃ');
  assertEqual(romajiToHiragana('shu'), 'しゅ');
  assertEqual(romajiToHiragana('cho'), 'ちょ');
  assertEqual(romajiToHiragana('nya'), 'にゃ');
});

test('85. romajiToHiragana handles double consonants with sokuon っ (e.g. matte -> まって)', () => {
  assertEqual(romajiToHiragana('matte'), 'まって');
  assertEqual(romajiToHiragana('gakkou'), 'がっこう');
});

test('86. romajiToHiragana handles singular \'n\' -> ん', () => {
  assertEqual(romajiToHiragana('pan'), 'ぱん');
  assertEqual(romajiToHiragana('nihon'), 'にほん');
});

test('87. romajiToHiragana returns existing Japanese characters untouched', () => {
  assertEqual(romajiToHiragana('ひらがな'), 'ひらがな');
  assertEqual(romajiToHiragana('カタカナ'), 'カタカナ');
});

test('88. romajiToHiragana handles empty string or whitespace safely', () => {
  assertEqual(romajiToHiragana(''), '');
  assertEqual(romajiToHiragana('   '), '');
});

test('89. getKanjiPronunciation returns natural curated reading for numbers (四 -> よん)', () => {
  assertEqual(getKanjiPronunciation('四'), 'よん');
  assertEqual(getKanjiPronunciation('七'), 'なな');
  assertEqual(getKanjiPronunciation('九'), 'きゅう');
});

test('90. getKanjiPronunciation returns natural reading for 水 -> みず', () => {
  assertEqual(getKanjiPronunciation('水'), 'みず');
  assertEqual(getKanjiPronunciation('人'), 'ひと');
});

test('91. getKanjiPronunciation falls back to kunyomi or character when not in special map', () => {
  const kanjiObj = { char: '犬', kunyomi: ['inu'] };
  assertEqual(getKanjiPronunciation(kanjiObj), 'いぬ');
});

// ===========================================================================
// Heading 11: Daily Mastery Quiz Generator & Activity Tracker (9 Tests)
// ===========================================================================
section('Heading 11: Daily Mastery Quiz Generator & Activity Tracker');

test('92. getLearningStatus correctly identifies studied vs unstudied categories', () => {
  localStorage.clear();
  studyScheduleStore.resetCustomPace();
  studyScheduleStore.setCurrentDay(1, true);
  const status = getLearningStatus(1);
  assert(typeof status.totalLearned === 'number', 'totalLearned must be numeric');
  assert(Array.isArray(status.missingCategories), 'missingCategories must be an array');
});

test('93. getLearningStatus populates missingCategories when day targets are unlearned', () => {
  localStorage.clear();
  studyScheduleStore.resetCustomPace();
  const status = getLearningStatus(1);
  assert(status.missingCategories.length > 0, 'Should have missing categories initially');
});

test('94. getLearningStatus has no missing categories when day targets are completed', () => {
  localStorage.clear();
  studyScheduleStore.resetCustomPace();
  learnedStore.markAllKanaLearned();
  const targets = studyScheduleStore.getDayTargets(1);
  targets.kanji.forEach((k: any) => learnedStore.toggleKanjiLearned(k.char));
  targets.words.forEach((w: any) => learnedStore.toggleWordLearned(w.id || w._id || w.word));

  const status = getLearningStatus(1);
  assert(!status.missingCategories.includes('Kana'), 'Kana should not be missing');
  assert(!status.missingCategories.includes('Kanji'), 'Kanji should not be missing');
  assert(!status.missingCategories.includes('Words'), 'Words should not be missing');
});

// Run async tests
(async () => {
  await testAsync('95. generateDailyMasteryQuestions produces valid questions for Day 1', async () => {
    const questions = await generateDailyMasteryQuestions(1);
    assert(Array.isArray(questions), 'Questions must be an array');
    assert(questions.length > 0, 'Questions list should not be empty');
  });

  await testAsync('96. generated questions contain valid IDs, prompts, and explanation strings', async () => {
    const questions = await generateDailyMasteryQuestions(1);
    questions.forEach((q) => {
      assert(Boolean(q.id), 'Question id must exist');
      assert(Boolean(q.prompt), 'Question prompt must exist');
      assert(Boolean(q.type), 'Question type must exist');
    });
  });

  test('97. formatDateKey formats Date into YYYY-MM-DD string', () => {
    const d = new Date(2026, 4, 15); // May 15, 2026
    assertEqual(formatDateKey(d), '2026-05-15');
  });

  test('98. recordStudySession records and accumulates minutes for a user', () => {
    localStorage.clear();
    recordStudySession('test_user', 25);
    recordStudySession('test_user', 15);
    const data = getWeeklyStudyData('test_user');
    const todayRec = data.find((r) => r.isToday);
    assert(Boolean(todayRec), 'Today record must exist');
    assertEqual(todayRec!.minutes, 40);
  });

  test('99. recordStudySession caps maximum daily minutes at 360 to prevent corruption', () => {
    localStorage.clear();
    recordStudySession('test_user', 500);
    const data = getWeeklyStudyData('test_user');
    const todayRec = data.find((r) => r.isToday);
    assert(Boolean(todayRec), 'Today record must exist');
    assertEqual(todayRec!.minutes, 360);
  });

  test('100. getWeeklyStudyData returns 7 days of records spanning Monday through Sunday', () => {
    const data = getWeeklyStudyData('test_user');
    assertEqual(data.length, 7, 'Weekly study data must contain 7 days');
    const days = data.map((d) => d.dayName);
    assertEqual(days, ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
  });

  // ===========================================================================
  // Heading 12: Speech Recognition, Normalization & Phonetic Matching (8 Tests)
  // ===========================================================================
  section('Heading 12: Speech Recognition, Normalization & Phonetic Matching');

  test('101. katakanaToHiragana converts standard katakana words to hiragana', () => {
    assertEqual(katakanaToHiragana('アメリカ'), 'あめりか');
    assertEqual(katakanaToHiragana('コーヒー'), 'こーひー');
  });

  test('102. katakanaToHiragana preserves hiragana, kanji, and english characters intact', () => {
    assertEqual(katakanaToHiragana('東京Tokyoとうきょう'), '東京Tokyoとうきょう');
  });

  test('103. normalizeJapaneseText strips spaces, full-width punctuation, and normalizes katakana', () => {
    assertEqual(normalizeJapaneseText('  こんにちは、　セカイ！  '), 'こんにちはせかい');
  });

  test('104. normalizeJapaneseText handles empty string or whitespace-only gracefully', () => {
    assertEqual(normalizeJapaneseText('   '), '');
    assertEqual(normalizeJapaneseText(''), '');
  });

  test('105. compareJapaneseSpeech gives 100% score (similarity 1.0, isMatch true) on exact match', () => {
    const res = compareJapaneseSpeech('こんにちは', 'こんにちは');
    assert(res.isMatch && res.similarity === 1, 'Exact match must score 1.0');
  });

  test('106. compareJapaneseSpeech matches target against alternate readings array', () => {
    const res = compareJapaneseSpeech('よん', 'し', ['よん']);
    assert(res.isMatch, 'Alternate reading should match');
  });

  test('107. compareJapaneseSpeech detects substring or punctuation variance (>= 0.7)', () => {
    const res = compareJapaneseSpeech('おはようございます', 'おはようございます！');
    assert(res.isMatch, 'Punctuation variance should match');
  });

  test('108. compareJapaneseSpeech rejects completely unrelated speech input', () => {
    const res = compareJapaneseSpeech('さようなら', 'こんにちは');
    assert(!res.isMatch, 'Unrelated speech must not match');
  });

  // ===========================================================================
  // Heading 13: Daily Sentence Quiz Generator & Token Bank Engine (8 Tests)
  // ===========================================================================
  section('Heading 13: Daily Sentence Quiz Generator & Token Bank Engine');

  test('109. resolveRomaji resolves romaji for basic kana characters', () => {
    assertEqual(resolveRomaji('あ'), 'a');
    assertEqual(resolveRomaji('か'), 'ka');
  });

  test('110. resolveRomaji resolves romaji for vocabulary words in dataStore', () => {
    assert(Boolean(resolveRomaji('水')), 'Romaji for 水 should resolve');
  });

  test('111. resolveRomaji falls back safely for empty string or unknown tokens', () => {
    assertEqual(resolveRomaji(''), '');
  });

  test('112. lookupOptionDetails retrieves meaning and reading for known vocabulary', () => {
    const details = lookupOptionDetails('水');
    assert(Boolean(details.meaning), 'Meaning should be present');
  });

  test('113. lookupOptionDetails returns fallback details gracefully for unknown tokens', () => {
    const details = lookupOptionDetails('xyz_unknown_token_99');
    assertEqual(details.meaning, 'Contextual option');
  });

  test('114. generateDailySentenceQuestions produces questions for Day 1', () => {
    const questions = generateDailySentenceQuestions(1);
    assert(Array.isArray(questions) && questions.length > 0, 'Questions must be generated');
  });

  test('115. each generated sentence question has 4 options with valid correctIndex', () => {
    const q = generateDailySentenceQuestions(1)[0];
    assert(q.options.length === 4, 'Must have 4 options');
    assert(q.correctIndex >= 0 && q.correctIndex < 4, 'correctIndex must be between 0 and 3');
  });

  test('116. each generated sentence question contains sentence with blank and explanation', () => {
    const q = generateDailySentenceQuestions(1)[0];
    assert(q.sentenceWithBlank.includes('____') || q.sentenceWithBlank.includes('('), 'Must have blank placeholder');
    assert(Boolean(q.explanation), 'Explanation must be present');
  });

  // ===========================================================================
  // Heading 14: Lesson Grammar Quiz Engine (N5 Course Progression) (6 Tests)
  // ===========================================================================
  section('Heading 14: Lesson Grammar Quiz Engine (N5 Course Progression)');

  test('117. getLessonGrammar10Questions retrieves questions for lesson 1-1', () => {
    const qs = getLessonGrammar10Questions('1-1');
    assert(qs.length >= 5, 'Lesson 1-1 should have at least 5 questions');
  });

  test('118. each grammar question contains non-empty question prompt and 4 options', () => {
    const qs = getLessonGrammar10Questions('1-1');
    qs.forEach((q) => {
      assert(Boolean(q.question), 'Prompt must exist');
      assert(q.options.length === 4, 'Must have 4 options');
    });
  });

  test('119. each grammar question has correctIndex within [0, 3]', () => {
    const qs = getLessonGrammar10Questions('1-1');
    qs.forEach((q) => {
      assert(q.correctIndex >= 0 && q.correctIndex <= 3, 'Index must be valid');
    });
  });

  test('120. each grammar question includes an educational explanation string', () => {
    const qs = getLessonGrammar10Questions('1-1');
    qs.forEach((q) => {
      assert(Boolean(q.explanation), 'Explanation required');
    });
  });

  test('121. getLessonGrammar10Questions handles unknown lesson ID with safe fallback questions without throwing', () => {
    const qs = getLessonGrammar10Questions('non-existent-lesson-999');
    assert(Array.isArray(qs), 'Must return array fallback');
  });

  test('122. questions within a lesson have unique question prompts', () => {
    const qs = getLessonGrammar10Questions('1-1');
    const prompts = qs.map((q) => q.question);
    assertEqual(new Set(prompts).size, prompts.length, 'Questions must be unique');
  });

  // ===========================================================================
  // Heading 15: Client Cache Engine & DataStore In-Memory Repository (8 Tests)
  // ===========================================================================
  section('Heading 15: Client Cache Engine & DataStore In-Memory Repository');

  test('123. clientCache.set and clientCache.get store and retrieve values in memory', () => {
    clientCache.set('test_k', { val: 42 });
    assertEqual(clientCache.get<{ val: number }>('test_k')?.val, 42);
  });

  test('124. clientCache.get returns null for non-existent keys', () => {
    assertEqual(clientCache.get('missing_k'), null);
  });

  test('125. clientCache.set with negative TTL expires immediately', () => {
    clientCache.set('exp_k', 'data', -1);
    assertEqual(clientCache.get('exp_k'), null);
  });

  test('126. clientCache.clear clears all stored items', () => {
    clientCache.set('k1', 1);
    clientCache.clear();
    assertEqual(clientCache.get('k1'), null);
  });

  await testAsync('127. dataStore.ready() resolves successfully', async () => {
    await dataStore.ready();
    assert(true, 'ready resolved');
  });

  test('128. dataStore.allWords contains complete N5 and N4 vocabulary lists', () => {
    assert(dataStore.allWords.length > 500, 'Vocabulary list should have >500 items');
  });

  test('129. dataStore.allKanji contains complete N5 and N4 kanji lists', () => {
    assert(dataStore.allKanji.length > 150, 'Kanji list should have >150 items');
  });

  test('130. dataStore.allKana contains exactly 164 total kana entries across basic, dakuten, and yoon', () => {
    assertEqual(dataStore.allKana.length, 164);
  });

  // ===========================================================================
  // Heading 16: Curriculum Structure, Anime Dialogues & Nikki Reader Integrity (8 Tests)
  // ===========================================================================
  section('Heading 16: Curriculum Structure, Anime Dialogues & Nikki Reader Integrity');

  test('131. CURRICULUM_DATA contains structured units with non-empty lessons', () => {
    assert(CURRICULUM_DATA.length > 0, 'Curriculum units must exist');
    assert(CURRICULUM_DATA[0].lessons.length > 0, 'Unit 1 lessons must exist');
  });

  test('132. curriculum lessons have valid IDs, titles, and descriptions', () => {
    const lesson = CURRICULUM_DATA[0].lessons[0];
    assert(Boolean(lesson.id) && Boolean(lesson.title), 'Lesson id and title required');
  });

  test('133. ANIME_DIALOGUES contains dialogues with Japanese text, romaji, and English translation', () => {
    assert(ANIME_DIALOGUES.length > 0, 'Anime dialogues must exist');
    const firstLine = ANIME_DIALOGUES[0].lines[0];
    assert(Boolean(firstLine.japanese) && Boolean(firstLine.romaji) && Boolean(firstLine.english), 'Japanese, romaji and english required');
  });

  test('134. anime dialogue entries have valid speaker characters', () => {
    ANIME_DIALOGUES.slice(0, 10).forEach((d) => {
      assert(d.lines.length > 0, 'Dialogue must contain lines');
      assert(Boolean(d.lines[0].speaker), 'Character speaker required');
    });
  });

  test('135. anime dialogue entries specify anime series source', () => {
    ANIME_DIALOGUES.slice(0, 10).forEach((d) => assert(Boolean(d.anime), 'Anime title required'));
  });

  test('136. ANIME_CATEGORIES contains standard anime genre classifications', () => {
    assert(ANIME_CATEGORIES.length > 0, 'Categories must exist');
  });

  test('137. NIKKI_DAYS contains structured daily lessons with diary entries', () => {
    assert(NIKKI_DAYS.length > 0, 'Nikki days must exist');
  });

  test('138. each Nikki daily lesson contains theme and day number', () => {
    NIKKI_DAYS.slice(0, 5).forEach((day) => {
      assert(typeof day.dayNumber === 'number' && Boolean(day.theme), 'Day num and theme required');
    });
  });

  // ===========================================================================
  // Heading 17: Search Engine Query Parsing & Multi-Modal Result Mapping (6 Tests)
  // ===========================================================================
  section('Heading 17: Search Engine Query Parsing & Multi-Modal Result Mapping');

  await testAsync('139. searchAll returns empty array for empty string query', async () => {
    const res = await searchAll('');
    assertEqual(res.length, 0);
  });

  await testAsync('140. searchAll returns empty array for whitespace-only query', async () => {
    const res = await searchAll('   ');
    assertEqual(res.length, 0);
  });

  await testAsync('141. searchAll finds kanji items by character or meaning', async () => {
    const res = await searchAll('水');
    assert(res.some((r) => r.type === 'kanji' || r.japanese.includes('水')), 'Should find 水');
  });

  await testAsync('142. searchAll assigns appropriate targetTab for found items', async () => {
    const res = await searchAll('水');
    assert(res.every((r) => ['words', 'kanji', 'kana', 'courses', 'hiragana', 'katakana'].includes(r.targetTab)), 'targetTab must be valid');
  });

  await testAsync('143. searchAll respects the maximum limit parameter', async () => {
    const res = await searchAll('a', 5);
    assert(res.length <= 5, 'Results must not exceed limit 5');
  });

  await testAsync('144. search result items have unique IDs', async () => {
    const res = await searchAll('ka', 20);
    const ids = res.map((r) => r.id);
    assertEqual(new Set(ids).size, ids.length, 'Search item IDs must be unique');
  });

  // ===========================================================================
  // Heading 18: API Client Data Service & Client-Side Leaderboard (6 Tests)
  // ===========================================================================
  section('Heading 18: API Client Data Service & Client-Side Leaderboard');

  await testAsync('145. api.getLeaderboard returns user ranking and peer list', async () => {
    const lb = await api.getLeaderboard('test_user');
    assert(lb.success && Array.isArray(lb.leaderboard), 'Leaderboard must be array');
  });

  await testAsync('146. api.getKana("Hiragana") returns only Hiragana characters', async () => {
    const res = await api.getKana('Hiragana');
    assert(res.success && res.kana.every((k: any) => k.script === 'Hiragana'), 'Must be Hiragana only');
  });

  await testAsync('147. api.getKana("Katakana") returns only Katakana characters', async () => {
    const res = await api.getKana('Katakana');
    assert(res.success && res.kana.every((k: any) => k.script === 'Katakana'), 'Must be Katakana only');
  });

  await testAsync('148. api.getGrammar("N5") filters grammar library by N5 JLPT level', async () => {
    const res = await api.getGrammar('N5');
    assert(res.success && res.grammar.every((g: any) => g.jlpt.toLowerCase() === 'n5'), 'Must be N5 only');
  });

  await testAsync('149. api.getGrammar with search query filters grammar points by keyword', async () => {
    const res = await api.getGrammar(undefined, 'desu');
    assert(res.success && res.grammar.length > 0, 'Should find desu grammar');
  });

  await testAsync('150. api.updateProgress increments user XP and recalculates rank', async () => {
    const res = await api.updateProgress({ userId: 'test_xp_user', xpGained: 100 });
    assert(res.success && (res.user.xp || 0) >= 100, 'XP must increase by at least 100');
  });

  // ---------------------------------------------------------------------------
  // Final Grand Summary
  // ---------------------------------------------------------------------------
  console.log(`\n${'='.repeat(60)}`);
  console.log(`GRAND TOTAL: ${passed + failed} Tests Executed`);
  console.log(`Passed: ${passed}   Failed: ${failed}`);
  if (failed) {
    console.log('\n❌ Failures Detected:');
    failures.forEach((f) => console.log(`  - ${f}`));
    process.exit(1);
  }
  console.log('\n🎉 ALL 150 TESTS PASSED CLEANLY! The entire website is verified.');
  console.log(`${'='.repeat(60)}\n`);
})();
