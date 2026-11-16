// Supabase Cloud Client with Resilient Offline-First Additive Sync & Downgrade Protection
// Modeled directly on the Kerala PSC Exam Practice Portal Architecture

import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { learnedStore } from './learnedStore';

export interface CloudStudyProgress {
  user_id: string;
  learned_kana: string[];
  learned_kanji: string[];
  learned_words: string[];
  completed_lessons: string[];
  bookmarks: string[];
  xp: number;
  streak: number;
  updated_at: string;
}

export interface LocalStudySnapshot {
  learnedKana: string[];
  learnedKanji: string[];
  learnedWords: string[];
  completedLessons: string[];
  bookmarks: string[];
  xp: number;
  streak: number;
}

// ---------------------------------------------------------------------------
// Supabase Configuration
// Supports import.meta.env, localStorage overrides, and offline mock fallback
// ---------------------------------------------------------------------------
const getEnvVar = (key: string): string => {
  if (typeof import.meta !== 'undefined' && (import.meta as any).env) {
    return (import.meta as any).env[key] || '';
  }
  const proc = (globalThis as any)?.process;
  if (proc && proc.env) {
    return proc.env[key] || '';
  }
  return '';
};

const DEFAULT_URL = getEnvVar('VITE_SUPABASE_URL') || '';
const DEFAULT_ANON_KEY = getEnvVar('VITE_SUPABASE_ANON_KEY') || '';

class SupabaseService {
  private client: SupabaseClient | null = null;
  private url: string = DEFAULT_URL;
  private anonKey: string = DEFAULT_ANON_KEY;
  private isConfigured: boolean = false;

  constructor() {
    this.init();
    if (typeof window !== 'undefined') {
      window.addEventListener('online', () => {
        this.triggerAutoSync();
      });
    }
  }

  private init() {
    // Check localStorage for runtime user configuration override
    if (typeof localStorage !== 'undefined') {
      try {
        const storedConfig = localStorage.getItem('anilearn_supabase_config');
        if (storedConfig) {
          const { url, anonKey } = JSON.parse(storedConfig);
          if (url && anonKey) {
            this.url = url;
            this.anonKey = anonKey;
          }
        }
      } catch {}
    }

    if (this.url && this.anonKey) {
      try {
        this.client = createClient(this.url, this.anonKey, {
          auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true,
            storageKey: 'anilearn_sb_auth_token'
          }
        });
        this.isConfigured = true;
      } catch (err) {
        console.warn('[Supabase] Failed to initialize client:', err);
        this.client = null;
        this.isConfigured = false;
      }
    } else {
      this.isConfigured = false;
    }
  }

  public configure(url: string, anonKey: string): boolean {
    this.url = url.trim();
    this.anonKey = anonKey.trim();
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem('anilearn_supabase_config', JSON.stringify({ url: this.url, anonKey: this.anonKey }));
      } catch {}
    }
    this.init();
    return this.isConfigured;
  }

  public isReady(): boolean {
    return this.isConfigured && this.client !== null;
  }

  public getRawClient(): SupabaseClient | null {
    return this.client;
  }

  // -------------------------------------------------------------------------
  // Additive Merge Engine with Downgrade Protection (Kerala PSC Paradigm)
  // Ensures local and cloud data union merge, and numbers never downgrade.
  // -------------------------------------------------------------------------
  public mergeProgress(
    local: LocalStudySnapshot,
    cloud: Partial<CloudStudyProgress> | null | undefined
  ): LocalStudySnapshot {
    if (!cloud) return local;

    // 1. Sets of learned items: Union merge (additive, never deletes what was learned offline)
    const mergedKana = Array.from(new Set([...(local.learnedKana || []), ...(cloud.learned_kana || [])]));
    const mergedKanji = Array.from(new Set([...(local.learnedKanji || []), ...(cloud.learned_kanji || [])]));
    const mergedWords = Array.from(new Set([...(local.learnedWords || []), ...(cloud.learned_words || [])]));
    const mergedLessons = Array.from(new Set([...(local.completedLessons || []), ...(cloud.completed_lessons || [])]));
    const mergedBookmarks = Array.from(new Set([...(local.bookmarks || []), ...(cloud.bookmarks || [])]));

    // 2. Numeric metrics: Downgrade protection via Math.max
    const mergedXp = Math.max(local.xp || 0, cloud.xp || 0);
    const mergedStreak = Math.max(local.streak || 1, cloud.streak || 1);

    return {
      learnedKana: mergedKana,
      learnedKanji: mergedKanji,
      learnedWords: mergedWords,
      completedLessons: mergedLessons,
      bookmarks: mergedBookmarks,
      xp: mergedXp,
      streak: mergedStreak
    };
  }

  // Read current device state from localStorage
  public getLocalSnapshot(): LocalStudySnapshot {
    let xp = 0;
    let streak = 1;
    let bookmarks: string[] = [];

    if (typeof localStorage !== 'undefined') {
      try {
        const rawAuth = localStorage.getItem('anilearn_auth_user');
        if (rawAuth) {
          const u = JSON.parse(rawAuth);
          xp = u.xp || 0;
          streak = u.streak || 1;
        }
        const rawBookmarks = localStorage.getItem('anilearn_bookmarks');
        if (rawBookmarks) {
          bookmarks = JSON.parse(rawBookmarks);
        }
      } catch {}
    }

    return {
      learnedKana: learnedStore.getLearnedKanaList(),
      learnedKanji: learnedStore.getLearnedKanjiList(),
      learnedWords: learnedStore.getLearnedWordsList(),
      completedLessons: learnedStore.getCompletedLessonsList(),
      bookmarks,
      xp,
      streak
    };
  }

  // Apply merged snapshot back into local stores and trigger reactive UI events
  public applyMergedSnapshot(snapshot: LocalStudySnapshot): void {
    if (typeof localStorage === 'undefined') return;

    try {
      // 1. Save sets
      localStorage.setItem('anilearn_learned_kana', JSON.stringify(snapshot.learnedKana));
      localStorage.setItem('anilearn_learned_kanji', JSON.stringify(snapshot.learnedKanji));
      localStorage.setItem('anilearn_learned_words', JSON.stringify(snapshot.learnedWords));
      localStorage.setItem('anilearn_completed_lessons', JSON.stringify(snapshot.completedLessons));
      localStorage.setItem('anilearn_bookmarks', JSON.stringify(snapshot.bookmarks));

      // 2. Update user profile XP and streak (create guest profile if none exists)
      const rawAuth = localStorage.getItem('anilearn_auth_user');
      const u = rawAuth ? JSON.parse(rawAuth) : { id: 'guest', name: 'Student', xp: 0, streak: 1 };
      u.xp = Math.max(u.xp || 0, snapshot.xp);
      u.streak = Math.max(u.streak || 1, snapshot.streak);
      u.completedLessons = snapshot.completedLessons;
      localStorage.setItem('anilearn_auth_user', JSON.stringify(u));

      // 3. Dispatch global events for real-time reactivity across components
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('anilearn_learned_update'));
        window.dispatchEvent(new CustomEvent('anilearn_user_update'));
      }
    } catch (e) {
      console.error('[Supabase] Failed to apply merged snapshot locally:', e);
    }
  }

  // -------------------------------------------------------------------------
  // Cloud Synchronization Methods
  // -------------------------------------------------------------------------
  public async pullCloudProgress(userId: string): Promise<CloudStudyProgress | null> {
    if (!this.client || !userId) return null;

    try {
      const { data, error } = await this.client
        .from('user_study_progress')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();

      if (error) {
        console.warn('[Supabase] Pull progress error:', error.message);
        return null;
      }
      return data as CloudStudyProgress | null;
    } catch (err) {
      console.warn('[Supabase] Network pull failed:', err);
      return null;
    }
  }

  public getCurrentUserId(): string | null {
    if (typeof localStorage === 'undefined') return null;
    try {
      const raw = localStorage.getItem('anilearn_auth_user');
      if (raw) {
        const u = JSON.parse(raw);
        return u.id || u._id || null;
      }
    } catch {}
    return null;
  }

  public async pushCloudProgress(userId?: string, data?: LocalStudySnapshot): Promise<boolean> {
    const targetUserId = userId || this.getCurrentUserId();
    if (!this.client || !targetUserId) return false;
    const snapshot = data || this.getLocalSnapshot();

    const payload: CloudStudyProgress = {
      user_id: targetUserId,
      learned_kana: snapshot.learnedKana,
      learned_kanji: snapshot.learnedKanji,
      learned_words: snapshot.learnedWords,
      completed_lessons: snapshot.completedLessons,
      bookmarks: snapshot.bookmarks,
      xp: snapshot.xp,
      streak: snapshot.streak,
      updated_at: new Date().toISOString()
    };

    try {
      const { error } = await this.client
        .from('user_study_progress')
        .upsert(payload, { onConflict: 'user_id' });

      if (error) {
        console.warn('[Supabase] Push progress error:', error.message);
        return false;
      }
      return true;
    } catch (err) {
      console.warn('[Supabase] Network push failed:', err);
      return false;
    }
  }

  // Full Two-Way Additive Sync (Call upon login, tab focus, or online event)
  public async syncAll(userId?: string): Promise<LocalStudySnapshot> {
    const local = this.getLocalSnapshot();
    const targetUserId = userId || this.getCurrentUserId();
    if (!this.isReady() || !targetUserId) {
      return local;
    }

    try {
      // 1. Pull latest cloud snapshot
      const cloud = await this.pullCloudProgress(targetUserId);

      // 2. Additively merge with downgrade protection
      const merged = this.mergeProgress(local, cloud);

      // 3. Save merged data locally
      this.applyMergedSnapshot(merged);

      // 4. Push merged data back to Supabase
      await this.pushCloudProgress(targetUserId, merged);

      return merged;
    } catch (err) {
      console.warn('[Supabase] syncAll error:', err);
      return local;
    }
  }

  private triggerAutoSync() {
    if (typeof localStorage === 'undefined') return;
    try {
      const raw = localStorage.getItem('anilearn_auth_user');
      if (raw) {
        const user = JSON.parse(raw);
        if (user && (user.id || user._id)) {
          this.syncAll(user.id || user._id);
        }
      }
    } catch {}
  }

  // -------------------------------------------------------------------------
  // Authentication Wrappers
  // -------------------------------------------------------------------------
  public async signUp(email: string, password: string, metadata: { name?: string; targetLevel?: string }) {
    if (!this.client) {
      return { success: false, error: 'Supabase client is not configured' };
    }
    try {
      const { data, error } = await this.client.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: metadata.name || email.split('@')[0],
            target_level: metadata.targetLevel || 'N5'
          }
        }
      });
      if (error) throw error;
      return { success: true, user: data.user, session: data.session };
    } catch (err: any) {
      return { success: false, error: err.message || 'Sign up failed' };
    }
  }

  public async signIn(email: string, password: string) {
    if (!this.client) {
      return { success: false, error: 'Supabase client is not configured' };
    }
    try {
      const { data, error } = await this.client.auth.signInWithPassword({
        email,
        password
      });
      if (error) throw error;
      if (data.user) {
        // Auto trigger sync on sign in
        this.syncAll(data.user.id);
      }
      return { success: true, user: data.user, session: data.session };
    } catch (err: any) {
      return { success: false, error: err.message || 'Sign in failed' };
    }
  }

  public async signOut() {
    if (!this.client) return { success: true };
    try {
      await this.client.auth.signOut();
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message };
    }
  }

  public async getCurrentUser() {
    if (!this.client) return null;
    try {
      const { data } = await this.client.auth.getUser();
      return data?.user || null;
    } catch {
      return null;
    }
  }
}

export const supabaseService = new SupabaseService();
export default supabaseService;
