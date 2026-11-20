// Master JLPT Kanji Database (Complete for N5, N4 & N3)
import { KANJI_N5_LIST, KanjiDetailItem } from './kanjiN5';
import { KANJI_N4_LIST, KanjiDetailItemN4 } from './kanjiN4';
import { KANJI_N3_LIST, KanjiDetailItemN3 } from './kanjiN3';

export { KANJI_N5_LIST, getKanjiN5 } from './kanjiN5';
export { KANJI_N4_LIST, getKanjiN4 } from './kanjiN4';
export { KANJI_N3_LIST, getKanjiN3 } from './kanjiN3';

export type MasterKanjiItem = KanjiDetailItem | KanjiDetailItemN4 | KanjiDetailItemN3;

// Unified Master List of all available complete Kanji (N5, N4, N3)
export const ALL_JLPT_KANJI_DATABASE: MasterKanjiItem[] = [
  ...KANJI_N5_LIST,
  ...KANJI_N4_LIST,
  ...KANJI_N3_LIST
];
