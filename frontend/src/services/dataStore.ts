/**
 * dataStore.ts — Global in-memory data store for learning content.
 * Pre-populated with complete N5 & N4 words, Kanji, and Kana for zero-latency access.
 */

import { HIRAGANA_DATA, KATAKANA_DATA } from '../data/kanaData';
import { WORDS_N5_LIST } from '../data/wordsN5';
import { WORDS_N4_LIST } from '../data/wordsN4';
import { KANJI_N5_LIST } from '../data/kanjiN5';
import { KANJI_N4_LIST } from '../data/kanjiN4';

export interface KanaChar {
  char: string;
  romaji: string;
  example?: string;
  strokeCount?: number;
  script?: 'Hiragana' | 'Katakana';
  category?: 'basic' | 'dakuten' | 'yoon';
}

export interface KanaGroup {
  basic: KanaChar[];
  dakuten: KanaChar[];
  yoon: KanaChar[];
}

class DataStore {
  // --- Public data directly available synchronously ---
  wordsN5: any[] = WORDS_N5_LIST;
  wordsN4: any[] = WORDS_N4_LIST;
  kanjiN5: any[] = KANJI_N5_LIST;
  kanjiN4: any[] = KANJI_N4_LIST;
  hiraganaData: KanaGroup = HIRAGANA_DATA;
  katakanaData: KanaGroup = KATAKANA_DATA;

  /** Returns a promise that resolves immediately since data is preloaded. */
  async ready(): Promise<void> {
    return Promise.resolve();
  }

  // --- Convenience helpers ---
  get allWords(): any[] {
    return [...this.wordsN5, ...this.wordsN4];
  }

  get allKanji(): any[] {
    return [...this.kanjiN5, ...this.kanjiN4];
  }

  get allKana(): KanaChar[] {
    return [
      ...this.hiraganaData.basic,
      ...this.hiraganaData.dakuten,
      ...this.hiraganaData.yoon,
      ...this.katakanaData.basic,
      ...this.katakanaData.dakuten,
      ...this.katakanaData.yoon,
    ];
  }
}

export const dataStore = new DataStore();
