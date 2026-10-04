// Test suite for the Speaking practice features.
// Run with: npm test   (→ npx tsx src/test.ts)
//
// Covers:
//  - Per-user persistence of self-intro answers, particle progress, intro progress & session position
//  - Migration of legacy (global) keys to the first user who opens the page
//  - Resume logic: land on the first unmastered sentence after logging back in
//  - "Next" skips sentences already spoken correctly
//  - Self-intro sentence generation & completion keying

// ---------------------------------------------------------------------------
// Minimal in-memory localStorage polyfill for Node
// ---------------------------------------------------------------------------
class MemoryStorage {
  private store = new Map<string, string>();
  get length() { return this.store.size; }
  clear() { this.store.clear(); }
  getItem(k: string) { return this.store.has(k) ? this.store.get(k)! : null; }
  setItem(k: string, v: string) { this.store.set(k, String(v)); }
  removeItem(k: string) { this.store.delete(k); }
  key(i: number) { return Array.from(this.store.keys())[i] ?? null; }
}
(globalThis as any).localStorage = new MemoryStorage();

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

// ---------------------------------------------------------------------------
// Tiny test runner
// ---------------------------------------------------------------------------
let passed = 0;
let failed = 0;
const failures: string[] = [];

function test(name: string, fn: () => void) {
  localStorage.clear();
  try {
    fn();
    passed++;
    console.log(`  \u2705 ${name}`);
  } catch (e: any) {
    failed++;
    failures.push(`${name}: ${e?.message ?? e}`);
    console.log(`  \u274C ${name}\n     \u2192 ${e?.message ?? e}`);
  }
}

function section(title: string) {
  console.log(`\n\u25B6 ${title}`);
}

function assertEqual<T>(actual: T, expected: T, msg = '') {
  const a = JSON.stringify(actual);
  const b = JSON.stringify(expected);
  if (a !== b) throw new Error(`${msg} expected ${b}, got ${a}`);
}

function assert(cond: unknown, msg: string) {
  if (!cond) throw new Error(msg);
}

function login(id: string) {
  localStorage.setItem('anilearn_auth_user', JSON.stringify({ id, name: id }));
}
function logout() {
  // Mirrors App.handleLogout — only the auth user is removed
  localStorage.removeItem('anilearn_auth_user');
}

// ---------------------------------------------------------------------------
// 1. User identity & key scoping
// ---------------------------------------------------------------------------
section('User identity & per-user keys');

test('falls back to "guest" when nobody is logged in', () => {
  assertEqual(getCurrentUserId(), 'guest');
});

test('reads the logged-in user id', () => {
  login('user_42');
  assertEqual(getCurrentUserId(), 'user_42');
});

test('handles corrupt auth JSON gracefully', () => {
  localStorage.setItem('anilearn_auth_user', '{not json');
  assertEqual(getCurrentUserId(), 'guest');
});

test('keys are unique per user', () => {
  assert(introKeyFor('a') !== introKeyFor('b'), 'intro keys collide');
  assert(particlesKeyFor('a') !== particlesKeyFor('b'), 'particle keys collide');
  assert(introProgressKeyFor('a') !== introProgressKeyFor('b'), 'intro progress keys collide');
  assert(sessionKeyFor('a') !== sessionKeyFor('b'), 'session keys collide');
});

// ---------------------------------------------------------------------------
// 2. Persistence survives logout → login
// ---------------------------------------------------------------------------
section('Persistence across logout / login');

test('self-intro answers survive logout and login', () => {
  login('alice');
  const profile = { ...DEFAULT_SELF_INTRO_PROFILE, name: 'Alice', nameKatakana: 'アリス' };
  saveJson(introKeyFor(getCurrentUserId()), profile);
  logout();
  login('alice');
  const restored = loadJson<any>(introKeyFor(getCurrentUserId()), null);
  assertEqual(restored?.name, 'Alice');
  assertEqual(restored?.nameKatakana, 'アリス');
});

test('another user does NOT see Alice\'s answers', () => {
  login('alice');
  saveJson(introKeyFor('alice'), { ...DEFAULT_SELF_INTRO_PROFILE, name: 'Alice' });
  logout();
  login('bob');
  assertEqual(loadJson(introKeyFor(getCurrentUserId()), null), null);
});

test('particle progress survives logout and login', () => {
  login('alice');
  let progress: ParticleProgress = {};
  progress = markParticleMastered(progress, 'wa', 1);
  progress = markParticleMastered(progress, 'wa', 2);
  saveJson(particlesKeyFor('alice'), progress);
  logout();
  login('alice');
  assertEqual(loadJson<ParticleProgress>(particlesKeyFor(getCurrentUserId()), {}), { wa: [1, 2] });
});

test('session position (tab, particle, sentence, step) survives logout and login', () => {
  login('alice');
  saveSession('alice', { activeMode: 'self-intro', selectedParticleId: 'ga', sentenceIndex: 7, selfIntroIndex: 3 });
  logout();
  login('alice');
  assertEqual(loadSession(), { activeMode: 'self-intro', selectedParticleId: 'ga', sentenceIndex: 7, selfIntroIndex: 3 });
});

test('loadSession returns {} for a brand new user', () => {
  login('newbie');
  assertEqual(loadSession(), {});
});

test('questionnaire auto-open rule: open only when no saved answers', () => {
  login('carol');
  const shouldOpenFirstTime = !localStorage.getItem(introKeyFor(getCurrentUserId()));
  saveJson(introKeyFor('carol'), DEFAULT_SELF_INTRO_PROFILE);
  const shouldOpenAfterSave = !localStorage.getItem(introKeyFor(getCurrentUserId()));
  assertEqual(shouldOpenFirstTime, true, 'first visit:');
  assertEqual(shouldOpenAfterSave, false, 'after save:');
});

// ---------------------------------------------------------------------------
// 3. Legacy key migration
// ---------------------------------------------------------------------------
section('Legacy global-key migration');

test('migrates legacy global value to the user key and removes the legacy key', () => {
  localStorage.setItem(LEGACY_PARTICLES_KEY, JSON.stringify({ wa: [1] }));
  const v = readUserScoped(particlesKeyFor('dave'), LEGACY_PARTICLES_KEY);
  assertEqual(JSON.parse(v!), { wa: [1] });
  assertEqual(localStorage.getItem(LEGACY_PARTICLES_KEY), null, 'legacy key not removed:');
  assertEqual(JSON.parse(localStorage.getItem(particlesKeyFor('dave'))!), { wa: [1] });
});

test('prefers the user-scoped value over a legacy value', () => {
  localStorage.setItem(LEGACY_INTRO_KEY, JSON.stringify({ name: 'Old' }));
  localStorage.setItem(introKeyFor('erin'), JSON.stringify({ name: 'Erin' }));
  const v = readUserScoped(introKeyFor('erin'), LEGACY_INTRO_KEY);
  assertEqual(JSON.parse(v!).name, 'Erin');
});

test('legacy data is migrated only once (second user gets nothing)', () => {
  localStorage.setItem(LEGACY_INTRO_KEY, JSON.stringify({ name: 'Old' }));
  readUserScoped(introKeyFor('first'), LEGACY_INTRO_KEY);
  assertEqual(readUserScoped(introKeyFor('second'), LEGACY_INTRO_KEY), null);
});

test('returns null when there is no data at all', () => {
  assertEqual(readUserScoped(introKeyFor('x'), LEGACY_INTRO_KEY), null);
});

// ---------------------------------------------------------------------------
// 4. Mark-mastered helpers
// ---------------------------------------------------------------------------
section('Mark mastered');

test('markParticleMastered adds a sentence id', () => {
  assertEqual(markParticleMastered({}, 'wa', 5), { wa: [5] });
});

test('markParticleMastered is idempotent & returns same reference', () => {
  const p = { wa: [5] };
  assert(markParticleMastered(p, 'wa', 5) === p, 'expected same reference for duplicate');
});

test('markParticleMastered does not mutate the input', () => {
  const p: ParticleProgress = { wa: [1] };
  markParticleMastered(p, 'wa', 2);
  assertEqual(p, { wa: [1] });
});

test('markIntroMastered adds and is idempotent', () => {
  const a = markIntroMastered([], '初めまして。');
  assertEqual(a, ['初めまして。']);
  assert(markIntroMastered(a, '初めまして。') === a, 'expected same reference for duplicate');
});

// ---------------------------------------------------------------------------
// 5. Resume & "Next" navigation
// ---------------------------------------------------------------------------
section('Resume after login & Next skips mastered');

const items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
const doneBy = (ids: number[]) => (s: { id: number }) => ids.includes(s.id);

test('findNextUnmastered finds first unmastered from start', () => {
  assertEqual(findNextUnmastered(items, 0, doneBy([1, 2])), 2);
});

test('findNextUnmastered wraps around', () => {
  assertEqual(findNextUnmastered(items, 3, doneBy([4, 5])), 0);
});

test('findNextUnmastered returns -1 when all mastered / empty list', () => {
  assertEqual(findNextUnmastered(items, 0, doneBy([1, 2, 3, 4, 5])), -1);
  assertEqual(findNextUnmastered([], 0, () => false), -1);
});

test('resume: brand-new user starts at sentence 1', () => {
  assertEqual(resolveResumeIndex(items, undefined, doneBy([])), 0);
});

test('resume: correctly-answered sentences are NOT asked again (the reported bug)', () => {
  // User mastered 1,2,3 and logged out while on sentence index 0
  assertEqual(resolveResumeIndex(items, 0, doneBy([1, 2, 3])), 3);
});

test('resume: stays on saved sentence if it is still unmastered', () => {
  assertEqual(resolveResumeIndex(items, 2, doneBy([1])), 2);
});

test('resume: clamps out-of-range saved index', () => {
  assertEqual(resolveResumeIndex(items, 99, doneBy([])), 4);
  assertEqual(resolveResumeIndex(items, -5, doneBy([])), 0);
});

test('resume: everything mastered → stays on saved index (review mode)', () => {
  assertEqual(resolveResumeIndex(items, 2, doneBy([1, 2, 3, 4, 5])), 2);
});

test('Next skips mastered sentences', () => {
  // On index 0, sentences 2 & 3 mastered → jump to index 3 (id 4)
  assertEqual(nextUnmasteredAfter(items, 0, doneBy([2, 3])), 3);
});

test('Next wraps to earlier unmastered sentence', () => {
  assertEqual(nextUnmasteredAfter(items, 4, doneBy([1, 3, 4, 5])), 1);
});

test('Next returns -1 when every sentence is mastered (celebration)', () => {
  assertEqual(nextUnmasteredAfter(items, 2, doneBy([1, 2, 3, 4, 5])), -1);
});

test('end-to-end: answer correctly, logout, login → resume past mastered', () => {
  login('frank');
  const particle = SPEAKING_PARTICLES_DATA[0];
  let progress: ParticleProgress = {};
  // Answer first 3 sentences correctly
  for (const s of particle.sentences.slice(0, 3)) {
    progress = markParticleMastered(progress, particle.id, s.id);
  }
  saveJson(particlesKeyFor('frank'), progress);
  saveSession('frank', { activeMode: 'particles', selectedParticleId: particle.id, sentenceIndex: 2, selfIntroIndex: 0 });
  logout();

  login('frank');
  const session = loadSession();
  const done = loadJson<ParticleProgress>(particlesKeyFor(getCurrentUserId()), {})[particle.id] || [];
  const idx = resolveResumeIndex(particle.sentences, session.sentenceIndex, (s) => done.includes(s.id));
  assertEqual(idx, 3, 'should resume at 4th sentence:');
});

// ---------------------------------------------------------------------------
// 6. Data integrity & self-intro generation
// ---------------------------------------------------------------------------
section('Speaking data & self-intro generator');

test('every particle has sentences with unique numeric ids', () => {
  for (const p of SPEAKING_PARTICLES_DATA) {
    assert(p.sentences.length > 0, `${p.id} has no sentences`);
    const ids = p.sentences.map((s) => s.id);
    assertEqual(new Set(ids).size, ids.length, `${p.id} duplicate ids:`);
  }
});

test('particle ids are unique', () => {
  const ids = SPEAKING_PARTICLES_DATA.map((p) => p.id);
  assertEqual(new Set(ids).size, ids.length);
});

test('default "wa" particle exists (initial selection)', () => {
  assert(SPEAKING_PARTICLES_DATA.some((p) => p.id === 'wa'), '"wa" particle missing');
});

test('generator produces sentences from the default profile', () => {
  const s = generateSelfIntroSentences(DEFAULT_SELF_INTRO_PROFILE);
  assert(s.length >= 10, `expected many sentences, got ${s.length}`);
  for (const x of s) {
    assert(x.japanese && x.romaji && x.english, `sentence ${x.id} missing fields`);
  }
});

test('generator personalises with the user name', () => {
  const s = generateSelfIntroSentences({ ...DEFAULT_SELF_INTRO_PROFILE, name: 'Taro', nameKatakana: 'タロウ' });
  assert(s[0].japanese.includes('タロウ'), 'greeting does not include katakana name');
  assert(s[0].english.includes('Taro'), 'english does not include name');
});

test('generator skips optional sections left blank', () => {
  const full = generateSelfIntroSentences(DEFAULT_SELF_INTRO_PROFILE);
  const noAge = generateSelfIntroSentences({ ...DEFAULT_SELF_INTRO_PROFILE, age: '', hometown: '' });
  assertEqual(noAge.length, full.length - 2, 'blank age+hometown should drop 2 sentences:');
  assert(!noAge.some((x) => x.topic.includes('Age')), 'age sentence still present');
});

test('self-intro Japanese text is unique (used as completion key)', () => {
  const s = generateSelfIntroSentences(DEFAULT_SELF_INTRO_PROFILE);
  const texts = s.map((x) => x.japanese);
  assertEqual(new Set(texts).size, texts.length);
});

test('editing an answer resets only that sentence\'s mastered state', () => {
  const before = generateSelfIntroSentences(DEFAULT_SELF_INTRO_PROFILE);
  const done = before.map((x) => x.japanese); // all mastered
  const after = generateSelfIntroSentences({ ...DEFAULT_SELF_INTRO_PROFILE, age: '30' });
  const unmastered = after.filter((x) => !done.includes(x.japanese));
  assertEqual(unmastered.length, 1, 'only the age sentence should be unmastered:');
  assert(unmastered[0].japanese.includes('30'), 'unmastered sentence is not the edited one');
});

test('self-intro resume skips mastered steps after login', () => {
  login('gina');
  const sentences = generateSelfIntroSentences(DEFAULT_SELF_INTRO_PROFILE);
  let done: string[] = [];
  done = markIntroMastered(done, sentences[0].japanese);
  done = markIntroMastered(done, sentences[1].japanese);
  saveJson(introProgressKeyFor('gina'), done);
  saveSession('gina', { activeMode: 'self-intro', selectedParticleId: 'wa', sentenceIndex: 0, selfIntroIndex: 0 });
  logout();

  login('gina');
  const restored = loadJson<string[]>(introProgressKeyFor(getCurrentUserId()), []);
  const idx = resolveResumeIndex(sentences, loadSession().selfIntroIndex, (s) => restored.includes(s.japanese));
  assertEqual(idx, 2);
});

// ---------------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------------
console.log(`\n${'-'.repeat(50)}`);
console.log(`Passed: ${passed}   Failed: ${failed}`);
if (failed) {
  console.log('\nFailures:');
  failures.forEach((f) => console.log(`  - ${f}`));
  process.exit(1);
}
console.log('All speaking feature tests passed \u2728');
