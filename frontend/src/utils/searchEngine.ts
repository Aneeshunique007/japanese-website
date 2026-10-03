import { api } from '../services/api';

export interface SearchResultItem {
  id: string;
  type: 'word' | 'kanji' | 'kana' | 'grammar';
  title: string;
  japanese: string;
  reading?: string;
  romaji?: string;
  meaning: string;
  badge: string;
  targetTab: 'words' | 'kanji' | 'kana' | 'courses' | 'hiragana' | 'katakana';
  rawData?: any;
}

/**
 * Searches all content by delegating to the backend /api/search endpoint.
 * Results are mapped to SearchResultItem for consistent UI rendering.
 */
export async function searchAll(rawQuery: string, limit: number = 25): Promise<SearchResultItem[]> {
  const query = rawQuery.trim();
  if (!query) return [];

  try {
    const data = await api.search(query);
    const results: SearchResultItem[] = [];

    // Backend returns { words, kanji, kana, grammar } arrays
    const words: any[] = data.words || [];
    const kanji: any[] = data.kanji || [];
    const kana: any[] = data.kana || [];
    const grammar: any[] = data.grammar || [];

    for (const w of words) {
      if (results.length >= limit) break;
      results.push({
        id: `word-${w.id || w._id || w.word}`,
        type: 'word',
        title: w.reading && w.reading !== w.word ? `${w.reading} (${w.word})` : w.word,
        japanese: w.word,
        reading: w.reading,
        romaji: w.romaji,
        meaning: w.meaning,
        badge: `Word ${w.jlpt}`,
        targetTab: 'words',
        rawData: w,
      });
    }

    for (const k of kanji) {
      if (results.length >= limit) break;
      results.push({
        id: `kanji-${k.id || k._id || k.char}`,
        type: 'kanji',
        title: `${k.char} - ${k.meaning}`,
        japanese: k.char,
        reading: `On: ${(k.onyomi || []).join(', ')} • Kun: ${(k.kunyomi || []).join(', ')}`,
        meaning: k.meaning,
        badge: `Kanji ${k.jlpt}`,
        targetTab: 'kanji',
        rawData: k,
      });
    }

    for (const kn of kana) {
      if (results.length >= limit) break;
      const isKata = /[\u30a0-\u30ff]/.test(kn.char);
      results.push({
        id: `kana-${kn.char}`,
        type: 'kana',
        title: `${kn.char} (${kn.romaji})`,
        japanese: kn.char,
        romaji: kn.romaji,
        meaning: kn.example || `${kn.romaji} sound`,
        badge: isKata ? 'Katakana' : 'Hiragana',
        targetTab: isKata ? 'katakana' : 'hiragana',
        rawData: kn,
      });
    }

    for (const g of grammar) {
      if (results.length >= limit) break;
      results.push({
        id: `grammar-${g.id || g._id}`,
        type: 'grammar',
        title: g.title,
        japanese: g.title,
        meaning: g.meaning,
        badge: `Grammar ${g.jlpt}`,
        targetTab: 'courses',
        rawData: g,
      });
    }

    return results;
  } catch (err) {
    console.error('[searchAll] Backend search failed:', err);
    return [];
  }
}
