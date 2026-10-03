// Client-Side Cache Service for 0ms latency after fetching from backend

class CacheService {
  private memoryCache: Map<string, { data: any; expiry: number }> = new Map();

  get<T>(key: string): T | null {
    // 1. Check in-memory cache first
    const item = this.memoryCache.get(key);
    if (item && item.expiry > Date.now()) {
      return item.data as T;
    }

    // 2. Check sessionStorage
    try {
      const raw = sessionStorage.getItem(`anilearn_cache_${key}`);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.expiry > Date.now()) {
          this.memoryCache.set(key, parsed);
          return parsed.data as T;
        } else {
          sessionStorage.removeItem(`anilearn_cache_${key}`);
        }
      }
    } catch {
      // Ignore storage errors
    }

    return null;
  }

  set<T>(key: string, data: T, ttlMinutes = 60): void {
    const expiry = Date.now() + ttlMinutes * 60 * 1000;
    const cacheObject = { data, expiry };

    // Set memory cache
    this.memoryCache.set(key, cacheObject);

    // Set session storage (gracefully handle quota exceeded)
    try {
      sessionStorage.setItem(`anilearn_cache_${key}`, JSON.stringify(cacheObject));
    } catch {
      // Session storage full or disabled
    }
  }

  clear(): void {
    this.memoryCache.clear();
    try {
      Object.keys(sessionStorage)
        .filter((k) => k.startsWith('anilearn_cache_'))
        .forEach((k) => sessionStorage.removeItem(k));
    } catch {
      // Ignore
    }
  }
}

export const clientCache = new CacheService();
