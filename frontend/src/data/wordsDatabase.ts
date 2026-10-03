import { WordItem } from '../types';
import { WORDS_N5_LIST } from './wordsN5';
import { WORDS_N4_LIST } from './wordsN4';

export { WORDS_N5_LIST } from './wordsN5';
export { WORDS_N4_LIST } from './wordsN4';

export const ALL_JLPT_WORDS_DATABASE: WordItem[] = [
  ...WORDS_N5_LIST,
  ...WORDS_N4_LIST
];

export function getWordDetails(idOrWord: string): WordItem | undefined {
  return ALL_JLPT_WORDS_DATABASE.find(w => w.id === idOrWord || w.word === idOrWord);
}

export function getWordsByLevel(level: string): WordItem[] {
  if (level === 'N5') return WORDS_N5_LIST;
  if (level === 'N4') return WORDS_N4_LIST;
  return ALL_JLPT_WORDS_DATABASE;
}
