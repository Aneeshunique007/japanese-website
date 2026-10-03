// Master JLPT Kanji Database (Complete for N5 & N4)
import { KANJI_N5_LIST, KanjiDetailItem } from './kanjiN5.js';
import { KANJI_N4_LIST, KanjiDetailItemN4 } from './kanjiN4.js';

export { KANJI_N5_LIST, getKanjiN5 } from './kanjiN5.js';
export { KANJI_N4_LIST, getKanjiN4 } from './kanjiN4.js';

export type MasterKanjiItem = KanjiDetailItem | KanjiDetailItemN4;

// Unified Master List of all available complete Kanji (N5 & N4)
export const ALL_JLPT_KANJI_DATABASE: MasterKanjiItem[] = [
  ...KANJI_N5_LIST,
  ...KANJI_N4_LIST
];
