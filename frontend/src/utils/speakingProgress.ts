// Speaking practice progress persistence (per logged-in user, browser localStorage).
// Kept free of React so it can be unit-tested with `npm test` (src/test.ts).

export const LEGACY_INTRO_KEY = 'anilearn_self_intro_profile';
export const LEGACY_PARTICLES_KEY = 'anilearn_speaking_particles_progress';
export const introKeyFor = (uid: string) => `${LEGACY_INTRO_KEY}_${uid}`;
export const particlesKeyFor = (uid: string) => `${LEGACY_PARTICLES_KEY}_${uid}`;
export const introProgressKeyFor = (uid: string) => `anilearn_self_intro_progress_${uid}`;
export const sessionKeyFor = (uid: string) => `anilearn_speaking_session_${uid}`;

export interface SpeakingSession {
  activeMode: 'particles' | 'self-intro';
  selectedParticleId: string;
  sentenceIndex: number;
  selfIntroIndex: number;
}

export type ParticleProgress = Record<string, number[]>;

// Resolve the currently logged-in user's id so speaking data is stored per profile
export function getCurrentUserId(): string {
  try {
    const raw = localStorage.getItem('anilearn_auth_user');
    if (raw) {
      const u = JSON.parse(raw);
      if (u && u.id) return String(u.id);
    }
  } catch {}
  return 'guest';
}

export function loadJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function saveJson(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

export function loadSession(uid: string = getCurrentUserId()): Partial<SpeakingSession> {
  return loadJson<Partial<SpeakingSession>>(sessionKeyFor(uid), {});
}

export function saveSession(uid: string, session: SpeakingSession): void {
  saveJson(sessionKeyFor(uid), session);
}

// Read per-user value, migrating the old global key once if present
export function readUserScoped(userKey: string, legacyKey: string): string | null {
  try {
    const scoped = localStorage.getItem(userKey);
    if (scoped) return scoped;
    const legacy = localStorage.getItem(legacyKey);
    if (legacy) {
      localStorage.setItem(userKey, legacy);
      localStorage.removeItem(legacyKey);
      return legacy;
    }
  } catch {}
  return null;
}

// Find the first index (searching forward from `start`, wrapping) whose item is not completed
export function findNextUnmastered<T>(items: T[], start: number, isDone: (item: T) => boolean): number {
  if (!items.length) return -1;
  const begin = ((start % items.length) + items.length) % items.length;
  for (let step = 0; step < items.length; step++) {
    const idx = (begin + step) % items.length;
    if (!isDone(items[idx])) return idx;
  }
  return -1;
}

// Where to resume: the saved index if still unmastered, otherwise the next unmastered one.
// If everything is mastered, stay on the (clamped) saved index.
export function resolveResumeIndex<T>(
  items: T[],
  savedIndex: number | undefined,
  isDone: (item: T) => boolean
): number {
  if (!items.length) return 0;
  const clamped = Math.min(Math.max(savedIndex ?? 0, 0), items.length - 1);
  const next = findNextUnmastered(items, clamped, isDone);
  return next === -1 ? clamped : next;
}

// Index of the next unmastered item strictly after `current`, or -1 if all are mastered
export function nextUnmasteredAfter<T>(items: T[], current: number, isDone: (item: T) => boolean): number {
  if (!items.length) return -1;
  return findNextUnmastered(items, current + 1, isDone);
}

// Immutable "mark mastered" helpers — return the same reference when nothing changes
export function markParticleMastered(progress: ParticleProgress, particleId: string, sentenceId: number): ParticleProgress {
  const existing = progress[particleId] || [];
  if (existing.includes(sentenceId)) return progress;
  return { ...progress, [particleId]: [...existing, sentenceId] };
}

export function markIntroMastered(done: string[], japanese: string): string[] {
  return done.includes(japanese) ? done : [...done, japanese];
}
