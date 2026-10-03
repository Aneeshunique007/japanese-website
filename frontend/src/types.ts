// Global TypeScript interfaces for the Japanese Learning Platform

export type QuestionType = 
  | 'multiple-choice' 
  | 'audio-listening' 
  | 'sentence-builder' 
  | 'matching-pairs' 
  | 'reverse-choice';

export interface MatchingPair {
  ja: string;
  en: string;
}

export interface Question {
  type: QuestionType;
  prompt: string;
  audioText?: string;
  kanji?: string;
  furigana?: string;
  romaji?: string;
  options?: string[];
  correctIndex?: number;
  explanation?: string;
  targetEn?: string;
  targetSentence?: string[];
  tokens?: string[];
  pairs?: MatchingPair[];
}

export interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  icon?: string;
  xpReward: number;
  gemReward?: number;
  isChest?: boolean;
  questions?: Question[];
}

export interface Unit {
  id: string;
  unitNumber: number;
  title: string;
  japaneseTitle: string;
  description: string;
  color: string;
  bgGradient: string;
  lessons: Lesson[];
}

export interface KanaWord {
  word: string;
  furigana: string;
  romaji: string;
  english: string;
  kanji?: string;
  exampleSentence?: string;
  exampleEnglish?: string;
}

export interface KanjiSentence {
  id?: string;
  sentence: string;
  furigana: string;
  romaji: string;
  english: string;
  targetWord?: string;
  targetWordEnglish?: string;
}

export interface KanaChar {
  char: string;
  romaji: string;
  example?: string;
  strokeCount?: number;
  script?: 'Hiragana' | 'Katakana';
  meaning?: string;
  words?: KanaWord[];
}

export interface KanaGroup {
  basic: KanaChar[];
  dakuten: KanaChar[];
  yoon: KanaChar[];
}

export interface VocabCard {
  ja: string;
  furigana: string;
  romaji: string;
  en: string;
  context: string;
}

export interface Badge {
  id: string;
  title: string;
  desc: string;
  unlocked: boolean;
  icon: string;
}

export interface WordSentence {
  id?: string;
  sentence: string;
  furigana?: string;
  romaji?: string;
  english?: string;
  context?: string;
}

export interface WordItem {
  id: string;
  word: string;
  reading: string;
  romaji: string;
  meaning: string;
  pos: string;
  posLabel: string;
  jlpt: 'N5' | 'N4' | 'N3' | 'N2' | 'N1' | string;
  kanjiBreakdown?: { char?: string; kanji?: string; meaning: string; onyomi?: string | string[]; kunyomi?: string | string[] }[];
  sentences: WordSentence[];
}

export interface KanjiDetailsData {
  id: string;
  char: string;
  meaning: string;
  onyomi: string[];
  kunyomi: string[];
  strokes: number;
  radical?: string;
  mnemonic?: string;
  jlpt?: string;
  sentences: KanjiSentence[];
  words?: KanaWord[];
}

export interface KanaDetailsData {
  char: string;
  romaji: string;
  script: 'Hiragana' | 'Katakana';
  strokeCount: number;
  mnemonic: string;
  similarChars?: string[];
  words: KanaWord[];
}

export interface GrammarItem {
  id: string;
  title: string;
  japaneseTitle: string;
  jlpt: string;
  meaning: string;
  explanation: string;
  formation: string[];
  examples: {
    japanese: string;
    english: string;
    furigana?: string;
    romaji?: string;
  }[];
}

export interface ExamQuestion {
  id: string;
  section: string;
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

