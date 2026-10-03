// Comprehensive Japanese Learning Dataset

export interface Course {
  id: string;
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  title: string;
  japaneseTitle: string;
  description: string;
  badge: string;
  lessonsCount: number;
  estimatedHours: number;
  kanjiCount: number;
  vocabCount: number;
  grammarCount: number;
  passingScore: string;
  examSections: {
    sectionName: string;
    sectionNameJp: string;
    durationMinutes: number;
    maxScore: number;
    description: string;
  }[];
  modules: CourseModule[];
}

export interface CourseModule {
  id: string;
  moduleNumber: number;
  title: string;
  japaneseTitle: string;
  description: string;
  lessons: DetailedLesson[];
}

export interface LetterSection {
  letter: string;
  romaji: string;
  meaning?: string;
  strokeCount: number;
  words: {
    word: string;
    furigana: string;
    romaji: string;
    english: string;
    kanji?: string;
  }[];
}

export interface BlankFillExercise {
  id: string;
  sentencePrefix: string;
  sentenceSuffix: string;
  sentenceRomaji?: string;
  correctWord: string;
  correctWordRomaji?: string;
  options: string[];
  optionsRomaji?: string[];
  hint: string;
  english: string;
}

export interface DetailedLesson {
  id: string;
  title: string;
  japaneseTitle: string;
  summary: string;
  readTimeMinutes: number;
  letterSections?: LetterSection[];
  blankFillExercises?: BlankFillExercise[];
  memoryTip?: {
    title: string;
    explanation: string;
    rhyme?: string;
    bulletPoints?: string[];
  };
  grammarPoints: {
    title: string;
    structure: string;
    explanation: string;
    examples: {
      japanese: string;
      furigana: string;
      romaji: string;
      english: string;
    }[];
  }[];
  vocabulary: {
    kanji: string;
    furigana: string;
    romaji: string;
    english: string;
    pos: string; // part of speech
  }[];
  dialogue?: {
    title: string;
    situation: string;
    lines: {
      speaker: string;
      speakerJp: string;
      japanese: string;
      furigana: string;
      romaji: string;
      english: string;
    }[];
  };
  quiz: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

export interface KanjiEntry {
  id: string;
  char: string;
  meaning: string;
  onyomi: string[];
  kunyomi: string[];
  strokes: number;
  jlpt: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  radical: string;
  examples: {
    word: string;
    reading: string;
    meaning: string;
  }[];
}

export interface GrammarEntry {
  id: string;
  title: string;
  japaneseTitle: string;
  jlpt: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  structure: string;
  meaning: string;
  explanation: string;
  examples: {
    japanese: string;
    furigana: string;
    english: string;
  }[];
}
export type { DialogueEntry, AnimeDialogueEntry, AnimeDialogueLine } from './animeData';

// 1. JLPT COURSES & EXAM BREAKDOWNS
export const COURSES: Course[] = [
  {
    id: 'course-n5',
    level: 'N5',
    title: 'JLPT N5: Beginner Foundations',
    japaneseTitle: '日本語能力試験 N5 入門',
    description: 'Master essential Japanese sentence structure, basic particles (は, が, を, に, で), core 100 Kanji, and everyday survival conversation.',
    badge: 'Beginner',
    lessonsCount: 16,
    estimatedHours: 50,
    kanjiCount: 103,
    vocabCount: 800,
    grammarCount: 95,
    passingScore: '80 / 180 Points (Overall 44% + sectional benchmarks)',
    examSections: [
      {
        sectionName: 'Language Knowledge (Vocabulary)',
        sectionNameJp: '言語知識（文字・語彙）',
        durationMinutes: 20,
        maxScore: 60,
        description: 'Hiragana/Katakana orthography, Kanji readings, and basic context vocabulary.'
      },
      {
        sectionName: 'Language Knowledge (Grammar) & Reading',
        sectionNameJp: '言語知識（文法）・読解',
        durationMinutes: 40,
        maxScore: 60,
        description: 'Particle accuracy, sentence ordering, short passages, and notice comprehension.'
      },
      {
        sectionName: 'Listening Comprehension',
        sectionNameJp: '聴解',
        durationMinutes: 30,
        maxScore: 60,
        description: 'Task-based everyday dialog comprehension and quick response questions.'
      }
    ],
    modules: [
      {
        id: 'mod-n5-1',
        moduleNumber: 1,
        title: 'Kana Vowel Words & Sentence Foundations',
        japaneseTitle: '母音五十音と基本構文',
        description: 'Master words starting with あ・い・う・え・お, foundational grammar A は B です, and blank filling exercises.',
        lessons: [
          {
            id: 'lesson-n5-1-1',
            title: 'Lesson 1: Hiragana Vowel Words (あ・い・う・え・お) & "A is B"',
            japaneseTitle: '第１課：母音語彙（あ行）と自己紹介「AはBです」',
            summary: 'Learn core vocabulary starting with あ, い, う, え, お, sentence topic marker は, and blank filling mastery.',
            readTimeMinutes: 15,
            memoryTip: {
              title: 'The Wa-Hat & Polite Stamp',
              explanation: 'In Japanese, the topic particle は is written with the hiragana letter "ha" but pronounced "wa". Think of it as a spotlight operator pointing out who or what we are discussing. Then, end with です (desu) as a polite rubber stamp on your statement!',
              rhyme: 'Topic in sight? Tip your hat and say WA! Stamp it polite with DESU!',
              bulletPoints: [
                'は is written は (ha) but spoken WA when marking the sentence topic.',
                'です (desu) works like is / am / are and makes your statement courteous and natural.',
                'Negative: 学生じゃありません (I am not a student).'
              ]
            },
            letterSections: [
              {
                letter: 'あ',
                romaji: 'a',
                strokeCount: 3,
                words: [
                  { word: 'ありがとう', furigana: 'ありがとう', romaji: 'arigatou', english: 'Thank you' },
                  { word: 'あさ', furigana: 'あさ', romaji: 'asa', english: 'Morning', kanji: '朝' },
                  { word: 'あめ', furigana: 'あめ', romaji: 'ame', english: 'Rain / Candy', kanji: '雨' },
                  { word: 'あたま', furigana: 'あたま', romaji: 'atama', english: 'Head', kanji: '頭' },
                  { word: 'あかい', furigana: 'あかい', romaji: 'akai', english: 'Red', kanji: '赤い' },
                  { word: 'あさごはん', furigana: 'あさごはん', romaji: 'asagohan', english: 'Breakfast', kanji: '朝ご飯' }
                ]
              },
              {
                letter: 'い',
                romaji: 'i',
                strokeCount: 2,
                words: [
                  { word: 'いいえ', furigana: 'いいえ', romaji: 'iie', english: 'No / You are welcome' },
                  { word: 'いぬ', furigana: 'いぬ', romaji: 'inu', english: 'Dog', kanji: '犬' },
                  { word: 'いえ', furigana: 'いえ', romaji: 'ie', english: 'House / Home', kanji: '家' },
                  { word: 'いち', furigana: 'いち', romaji: 'ichi', english: 'One (1)', kanji: '一' },
                  { word: 'いま', furigana: 'いま', romaji: 'ima', english: 'Now', kanji: '今' },
                  { word: 'いしゃ', furigana: 'いしゃ', romaji: 'isha', english: 'Doctor', kanji: '医者' }
                ]
              },
              {
                letter: 'う',
                romaji: 'u',
                strokeCount: 2,
                words: [
                  { word: 'うみ', furigana: 'うみ', romaji: 'umi', english: 'Sea / Ocean', kanji: '海' },
                  { word: 'うた', furigana: 'うた', romaji: 'uta', english: 'Song', kanji: '歌' },
                  { word: 'うし', furigana: 'うし', romaji: 'ushi', english: 'Cow / Cattle', kanji: '牛' },
                  { word: 'うえ', furigana: 'うえ', romaji: 'ue', english: 'Above / Up / Top', kanji: '上' },
                  { word: 'うしろ', furigana: 'うしろ', romaji: 'ushiro', english: 'Behind / Back', kanji: '後ろ' }
                ]
              },
              {
                letter: 'え',
                romaji: 'e',
                strokeCount: 2,
                words: [
                  { word: 'えき', furigana: 'えき', romaji: 'eki', english: 'Train Station', kanji: '駅' },
                  { word: 'えん', furigana: 'えん', romaji: 'en', english: 'Yen (Japanese Currency)', kanji: '円' },
                  { word: 'えんぴつ', furigana: 'えんぴつ', romaji: 'enpitsu', english: 'Pencil', kanji: '鉛筆' },
                  { word: 'えいが', furigana: 'えいが', romaji: 'eiga', english: 'Movie / Film', kanji: '映画' }
                ]
              },
              {
                letter: 'お',
                romaji: 'o',
                strokeCount: 3,
                words: [
                  { word: 'おちゃ', furigana: 'おちゃ', romaji: 'ocha', english: 'Green Tea', kanji: 'お茶' },
                  { word: 'おんな', furigana: 'おんな', romaji: 'onna', english: 'Woman / Female', kanji: '女' },
                  { word: 'おとこ', furigana: 'おとこ', romaji: 'otoko', english: 'Man / Male', kanji: '男' },
                  { word: 'おおきい', furigana: 'おおきい', romaji: 'ookii', english: 'Big / Large', kanji: '大きい' },
                  { word: 'おんがく', furigana: 'おんがく', romaji: 'ongaku', english: 'Music', kanji: '音楽' }
                ]
              }
            ],
            blankFillExercises: [
              {
                id: 'bf-1',
                sentencePrefix: '私',
                sentenceSuffix: '学生です。',
                sentenceRomaji: 'Watashi [ ___ ] gakusei desu.',
                correctWord: 'は',
                correctWordRomaji: 'wa',
                options: ['は', 'を', 'に', 'で'],
                optionsRomaji: ['wa', 'o', 'ni', 'de'],
                hint: 'Topic marker particle (pronounced wa).',
                english: 'I am a student.'
              },
              {
                id: 'bf-2',
                sentencePrefix: '朝、',
                sentenceSuffix: 'を食べます。',
                sentenceRomaji: 'Asa, [ ___ ] o tabemasu.',
                correctWord: 'あさごはん',
                correctWordRomaji: 'asagohan',
                options: ['あさごはん', 'おちゃ', 'えき', 'いぬ'],
                optionsRomaji: ['asagohan', 'ocha', 'eki', 'inu'],
                hint: 'Morning meal starting with letter あ.',
                english: 'In the morning, I eat breakfast.'
              },
              {
                id: 'bf-3',
                sentencePrefix: 'あの建物は',
                sentenceSuffix: 'です。電車に乗ります。',
                sentenceRomaji: 'Ano tatemono wa [ ___ ] desu. Densha ni norimasu.',
                correctWord: 'えき',
                correctWordRomaji: 'eki',
                options: ['えき', 'うみ', 'いぬ', 'あめ'],
                optionsRomaji: ['eki', 'umi', 'inu', 'ame'],
                hint: 'Train station starting with letter え.',
                english: 'That building is the station. I take the train.'
              },
              {
                id: 'bf-4',
                sentencePrefix: 'おいしい',
                sentenceSuffix: 'を飲みます。',
                sentenceRomaji: 'Oishii [ ___ ] o nomimasu.',
                correctWord: 'おちゃ',
                correctWordRomaji: 'ocha',
                options: ['おちゃ', 'あたま', 'えんぴつ', 'うた'],
                optionsRomaji: ['ocha', 'atama', 'enpitsu', 'uta'],
                hint: 'Japanese green tea starting with letter お.',
                english: 'I drink delicious green tea.'
              }
            ],
            grammarPoints: [
              {
                title: 'Noun 1 は Noun 2 です (Noun 1 is Noun 2)',
                structure: '[Noun 1] は [Noun 2] です',
                explanation: 'The particle は (pronounced "wa" when used as a particle) marks the topic of the sentence. です (desu) functions similarly to "is/am/are" and makes the statement polite.',
                examples: [
                  {
                    japanese: '私は学生です。',
                    furigana: 'わたし は がくせい です。',
                    romaji: 'Watashi wa gakusei desu.',
                    english: 'I am a student.'
                  },
                  {
                    japanese: '田中さんは日本人です。',
                    furigana: 'たなかさん は にほんじん です。',
                    romaji: 'Tanaka-san wa nihonjin desu.',
                    english: 'Mr. Tanaka is Japanese.'
                  }
                ]
              },
              {
                title: 'Question Particle か (ka)',
                structure: '[Sentence] + か',
                explanation: 'Adding か to the end of a polite sentence turns it into a question. No question mark is strictly required in traditional Japanese.',
                examples: [
                  {
                    japanese: 'あなたは先生ですか。',
                    furigana: 'あなた は せんせい ですか。',
                    romaji: 'Anata wa sensei desu ka.',
                    english: 'Are you a teacher?'
                  },
                  {
                    japanese: 'はい、そうです。',
                    furigana: 'はい、そう です。',
                    romaji: 'Hai, sou desu.',
                    english: 'Yes, that is correct.'
                  }
                ]
              }
            ],
            vocabulary: [
              { kanji: '私', furigana: 'わたし', romaji: 'watashi', english: 'I / Me', pos: 'Pronoun' },
              { kanji: '学生', furigana: 'がくせい', romaji: 'gakusei', english: 'Student', pos: 'Noun' },
              { kanji: '先生', furigana: 'せんせい', romaji: 'sensei', english: 'Teacher', pos: 'Noun' },
              { kanji: '日本人', furigana: 'にほんじん', romaji: 'nihonjin', english: 'Japanese person', pos: 'Noun' },
              { kanji: '初めまして', furigana: 'はじめまして', romaji: 'hajimemashite', english: 'Nice to meet you', pos: 'Expression' }
            ],
            dialogue: {
              title: 'Self-Introduction at University',
              situation: 'Ken meets Sakura for the first time in Tokyo.',
              lines: [
                {
                  speaker: 'Ken',
                  speakerJp: 'ケン',
                  japanese: '初めまして。私はケンです。アメリカ人です。',
                  furigana: 'はじめまして。わたし は ケン です。アメリカじん です。',
                  romaji: 'Hajimemashite. Watashi wa Ken desu. Amerikajin desu.',
                  english: 'Nice to meet you. I am Ken. I am American.'
                },
                {
                  speaker: 'Sakura',
                  speakerJp: 'さくら',
                  japanese: '初めまして、さくらです。学生ですか。',
                  furigana: 'はじめまして、さくら です。がくせい ですか。',
                  romaji: 'Hajimemashite, Sakura desu. Gakusei desu ka.',
                  english: 'Nice to meet you, I am Sakura. Are you a student?'
                },
                {
                  speaker: 'Ken',
                  speakerJp: 'ケン',
                  japanese: 'はい、学生です。どうぞよろしくお願いします。',
                  furigana: 'はい、がくせい です。どうぞ よろしく おねがいします。',
                  romaji: 'Hai, gakusei desu. Douzo yoroshiku onegaishimasu.',
                  english: 'Yes, I am a student. Pleased to meet you.'
                }
              ]
            },
            quiz: [
              {
                question: 'Which particle is used to mark the topic of a Japanese sentence?',
                options: ['は (wa)', 'を (o)', 'が (ga)', 'で (de)'],
                correctIndex: 0,
                explanation: 'は (written as ha, pronounced wa) is the primary topic marker in Japanese.'
              },
              {
                question: 'How do you turn "田中さんは会社員です" into a question?',
                options: ['Add か at the end', 'Change です to でした', 'Place は at the front', 'Add ね at the beginning'],
                correctIndex: 0,
                explanation: 'Attaching the sentence-ending particle か creates a polite question.'
              }
            ]
          },
          {
            id: 'lesson-n5-1-2',
            title: 'Lesson 2: Demonstratives (これ, それ, あれ, どれ)',
            japaneseTitle: '第２課：指示詞（これ・それ・あれ・どれ）',
            summary: 'Identify objects and ask questions using proximity demonstratives.',
            readTimeMinutes: 18,
            memoryTip: {
              title: 'The Ko-So-A-Do Compass',
              explanation: 'Japanese proximity words always follow the famous Ko-So-A-Do pattern! Keep this compass in mind: Ko is near ME, So is near YOU, A is AWAY from both of us, and Do is DOUBT (which one?).',
              rhyme: 'KO = Close to me | SO = Side of you | A = Away from both | DO = Don\'t know (Which?)',
              bulletPoints: [
                'これ / それ / あれ stand alone: 「これは本です」(This is a book).',
                'この / その / あの must hug a noun: 「この本」(this book), 「その車」(that car).',
                'どれ asks "Which one?" among three or more items.'
              ]
            },
            blankFillExercises: [
          {
                    "id": "bf-2-1",
                    "sentencePrefix": "私",
                    "sentenceSuffix": "ペンです。私の手元にあります。",
                    "sentenceRomaji": "[ ___ ] wa watashi no pen desu. Watashi no temoto ni arimasu.",
                    "correctWord": "これ",
                    "correctWordRomaji": "kore",
                    "options": [
                              "これ",
                              "それ",
                              "あれ",
                              "どれ"
                    ],
                    "optionsRomaji": [
                              "kore",
                              "sore",
                              "are",
                              "dore"
                    ],
                    "hint": "Object is right next to the speaker (near me).",
                    "english": "This is my pen. It is right in my hands."
          },
          {
                    "id": "bf-2-2",
                    "sentencePrefix": "あなた",
                    "sentenceSuffix": "傘ですか。",
                    "sentenceRomaji": "[ ___ ] wa anata no kasa desu ka.",
                    "correctWord": "それ",
                    "correctWordRomaji": "sore",
                    "options": [
                              "それ",
                              "これ",
                              "あれ",
                              "どれ"
                    ],
                    "optionsRomaji": [
                              "sore",
                              "kore",
                              "are",
                              "dore"
                    ],
                    "hint": "Object is close to the listener (near you).",
                    "english": "Is that your umbrella?"
          },
          {
                    "id": "bf-2-3",
                    "sentencePrefix": "遠くにある",
                    "sentenceSuffix": "建物は何ですか。",
                    "sentenceRomaji": "Tooku ni aru [ ___ ] tatemono wa nan desu ka.",
                    "correctWord": "あの",
                    "correctWordRomaji": "ano",
                    "options": [
                              "あの",
                              "この",
                              "その",
                              "どの"
                    ],
                    "optionsRomaji": [
                              "ano",
                              "kono",
                              "sono",
                              "dono"
                    ],
                    "hint": "Directly modifies the noun \"building\" far away from both of us.",
                    "english": "What is that building far over there?"
          },
          {
                    "id": "bf-2-4",
                    "sentencePrefix": "あなたの鍵は",
                    "sentenceSuffix": "ですか。",
                    "sentenceRomaji": "Anata no kagi wa [ ___ ] desu ka.",
                    "correctWord": "どれ",
                    "correctWordRomaji": "dore",
                    "options": [
                              "どれ",
                              "これ",
                              "それ",
                              "あれ"
                    ],
                    "optionsRomaji": [
                              "dore",
                              "kore",
                              "sore",
                              "are"
                    ],
                    "hint": "Question word asking \"which one\" among many.",
                    "english": "Which one is your key?"
          }
],
            grammarPoints: [
              {
                title: 'Ko-So-A-Do System for Objects',
                structure: 'これ (Near speaker) / それ (Near listener) / あれ (Far from both) / どれ (Which?)',
                explanation: 'Japanese has a precise 3-way distance system for referring to objects.',
                examples: [
                  {
                    japanese: 'これは私の本です。',
                    furigana: 'これ は わたし の ほん です。',
                    romaji: 'Kore wa watashi no hon desu.',
                    english: 'This is my book.'
                  },
                  {
                    japanese: 'あれは何ですか。',
                    furigana: 'あれ は なん ですか。',
                    romaji: 'Are wa nan desu ka.',
                    english: 'What is that over there?'
                  }
                ]
              }
            ],
            vocabulary: [
              { kanji: '本', furigana: 'ほん', romaji: 'hon', english: 'Book', pos: 'Noun' },
              { kanji: '車', furigana: 'くるま', romaji: 'kuruma', english: 'Car', pos: 'Noun' },
              { kanji: '辞書', furigana: 'じしょ', romaji: 'jisho', english: 'Dictionary', pos: 'Noun' },
              { kanji: '傘', furigana: 'かさ', romaji: 'kasa', english: 'Umbrella', pos: 'Noun' }
            ],
            dialogue: {
          "title": "Shopping at a Stationery Store",
          "situation": "Ken asks the store clerk about items on the counter and on the shelf.",
          "lines": [
                    {
                              "speaker": "Ken",
                              "speakerJp": "ケン",
                              "japanese": "すみません、これは何ですか。",
                              "furigana": "すみません、これ は なん です か。",
                              "romaji": "Sumimasen, kore wa nan desu ka.",
                              "english": "Excuse me, what is this?"
                    },
                    {
                              "speaker": "Clerk",
                              "speakerJp": "てんいん",
                              "japanese": "それは日本の伝統的な扇子です。",
                              "furigana": "それ は にほん の でんとうてき な せんす です。",
                              "romaji": "Sore wa Nihon no dentouteki na sensu desu.",
                              "english": "That is a traditional Japanese folding fan."
                    },
                    {
                              "speaker": "Ken",
                              "speakerJp": "ケン",
                              "japanese": "そうですか。では、あれは何ですか。",
                              "furigana": "そう です か。では、あれ は なん です か。",
                              "romaji": "Sou desu ka. Dewa, are wa nan desu ka.",
                              "english": "I see. Well then, what is that over there?"
                    },
                    {
                              "speaker": "Clerk",
                              "speakerJp": "てんいん",
                              "japanese": "あれは和紙のノートです。とても人気がありますよ。",
                              "furigana": "あれ は わし の ノート です。とても にんき が あります よ。",
                              "romaji": "Are wa washi no nooto desu. Totemo ninki ga arimasu yo.",
                              "english": "That over there is a Japanese paper notebook. It is very popular!"
                    }
          ]
},
            quiz: [
              {
                question: 'Which word refers to an object located far from both the speaker and listener?',
                options: ['あれ (Are)', 'これ (Kore)', 'それ (Sore)', 'どれ (Dore)'],
                correctIndex: 0,
                explanation: 'あれ is used for distant objects far from both participants.'
              }
            ]
          },
          {
            id: 'lesson-n5-1-3',
            title: 'Lesson 3: Question Particle か & Inquiries',
            japaneseTitle: '第３課：疑問終助詞「か」と質問表現',
            summary: 'Form questions effortlessly using the sentence-ending question marker か and question words like 何 (what) and 誰 (who).',
            readTimeMinutes: 18,
            memoryTip: {
              title: 'The Audio Question Mark (か)',
              explanation: 'Traditional Japanese does not require a question mark "?" because attaching か (ka) at the end instantly converts any statement into a polite inquiry!',
              rhyme: 'Don\'t change word order, don\'t flip a thing—just add KA at the end to make it a question!',
              bulletPoints: [
                'Statement: 田中さんは学生です (Tanaka is a student).',
                'Question: 田中さんは学生ですか (Is Tanaka a student?).',
                'Answer "Yes" with はい (Hai) or "No" with いいえ (Iie).'
              ]
            },
            blankFillExercises: [
          {
                    "id": "bf-3-1",
                    "sentencePrefix": "田中さんは先生です",
                    "sentenceSuffix": "。",
                    "sentenceRomaji": "Tanaka-san wa sensei desu [ ___ ].",
                    "correctWord": "か",
                    "correctWordRomaji": "ka",
                    "options": [
                              "か",
                              "ね",
                              "よ",
                              "は"
                    ],
                    "optionsRomaji": [
                              "ka",
                              "ne",
                              "yo",
                              "wa"
                    ],
                    "hint": "Sentence-ending question particle.",
                    "english": "Is Mr. Tanaka a teacher?"
          },
          {
                    "id": "bf-3-2",
                    "sentencePrefix": "あそこにいる人は",
                    "sentenceSuffix": "ですか。",
                    "sentenceRomaji": "Asoko ni iru hito wa [ ___ ] desu ka.",
                    "correctWord": "誰",
                    "correctWordRomaji": "dare",
                    "options": [
                              "誰",
                              "何",
                              "どこ",
                              "いつ"
                    ],
                    "optionsRomaji": [
                              "dare",
                              "nani",
                              "doko",
                              "itsu"
                    ],
                    "hint": "Question word for asking \"who\" a person is.",
                    "english": "Who is that person over there?"
          },
          {
                    "id": "bf-3-3",
                    "sentencePrefix": "すみません、駅は",
                    "sentenceSuffix": "ですか。",
                    "sentenceRomaji": "Sumimasen, eki wa [ ___ ] desu ka.",
                    "correctWord": "どこ",
                    "correctWordRomaji": "doko",
                    "options": [
                              "どこ",
                              "だれ",
                              "どれ",
                              "なに"
                    ],
                    "optionsRomaji": [
                              "doko",
                              "dare",
                              "dore",
                              "nani"
                    ],
                    "hint": "Question word for asking \"where\" a location is.",
                    "english": "Excuse me, where is the station?"
          }
],
            grammarPoints: [
              {
                title: 'Sentence + か (Question Marker)',
                structure: '[Sentence] + か',
                explanation: 'Attaching か to the end of any polite sentence turns it into a question. No question mark is strictly required in traditional Japanese.',
                examples: [
                  {
                    japanese: 'これは何ですか。',
                    furigana: 'これ は なん ですか。',
                    romaji: 'Kore wa nan desu ka.',
                    english: 'What is this?'
                  },
                  {
                    japanese: '田中さんは学生ですか。',
                    furigana: 'たなかさん は がくせい ですか。',
                    romaji: 'Tanaka-san wa gakusei desu ka.',
                    english: 'Is Mr./Ms. Tanaka a student?'
                  }
                ]
              }
            ],
            vocabulary: [
              { kanji: '何', furigana: 'なに / なん', romaji: 'nani / nan', english: 'What', pos: 'Noun' },
              { kanji: '誰', furigana: 'だれ', romaji: 'dare', english: 'Who', pos: 'Noun' },
              { kanji: '先生', furigana: 'せんせい', romaji: 'sensei', english: 'Teacher', pos: 'Noun' },
              { kanji: '学生', furigana: 'がくせい', romaji: 'gakusei', english: 'Student', pos: 'Noun' }
            ],
            dialogue: {
          "title": "Asking for Directions at the Station",
          "situation": "Ken asks a friendly passerby where the ticket office is.",
          "lines": [
                    {
                              "speaker": "Ken",
                              "speakerJp": "ケン",
                              "japanese": "すみません、切符売り場はどこですか。",
                              "furigana": "すみません、きっぷうりば は どこ です か。",
                              "romaji": "Sumimasen, kippu uriba wa doko desu ka.",
                              "english": "Excuse me, where is the ticket counter?"
                    },
                    {
                              "speaker": "Passerby",
                              "speakerJp": "つうこうにん",
                              "japanese": "切符売り場はあそこです。階段の隣ですよ。",
                              "furigana": "きっぷうりば は あそこ です。かいだん の となり です よ。",
                              "romaji": "Kippu uriba wa asoko desu. Kaidan no tonari desu yo.",
                              "english": "The ticket counter is over there. It is next to the stairs."
                    },
                    {
                              "speaker": "Ken",
                              "speakerJp": "ケン",
                              "japanese": "ありがとうございます！",
                              "furigana": "ありがとう ございます！",
                              "romaji": "Arigatou gozaimasu!",
                              "english": "Thank you very much!"
                    }
          ]
},
            quiz: [
              {
                question: 'How do you turn "これは本です" into "Is this a book?"',
                options: ['これは本ですか (Kore wa hon desu ka)', 'これは本でした (Kore wa hon deshita)', 'これは本じゃない (Kore wa hon janai)', '本はこれです (Hon wa kore desu)'],
                correctIndex: 0,
                explanation: 'Appending 「か」 to the end of the sentence forms a question.'
              }
            ]
          }
        ]
      },
      {
        id: 'mod-n5-2',
        moduleNumber: 2,
        title: 'Verbs, Action Particles & Movement (を, で, へ, に)',
        japaneseTitle: '動詞と格助詞（を・で・へ・に）',
        description: 'Master polite verb conjugation (-masu / -masen), direct objects with を, action locations with で, and transit verbs.',
        lessons: [
          {
            id: 'lesson-n5-2-1',
            title: 'Lesson 4: Daily Routines & Polite Verbs (~ます / ~ません)',
            japaneseTitle: '第４課：毎日の行動と動詞の基本',
            summary: 'Conjugate verbs into the polite present/future form (-ます) and negative (-ません).',
            readTimeMinutes: 20,
            memoryTip: {
              title: 'The MASU & MASEN Switch',
              explanation: 'All polite daily verbs end in 〜ます (masu) for positive actions and habits. When you want to say you don\'t do something, simply swap the ending to 〜ません (masen) — the "N" at the end stands for NO!',
              rhyme: 'MASU means YES, I do it! MASEN ends in N, meaning NO, I don\'t!',
              bulletPoints: [
                '食べます (tabemasu = I eat) → 食べません (tabemasen = I don\'t eat).',
                'Past tense: 〜ました (did) and 〜ませんでした (didn\'t).',
                'Daily routines: 毎朝コーヒーを飲みます (I drink coffee every morning).'
              ]
            },
            blankFillExercises: [
          {
                    "id": "bf-4-1",
                    "sentencePrefix": "私は毎朝七時に",
                    "sentenceSuffix": "。",
                    "sentenceRomaji": "Watashi wa maiasa shichiji ni [ ___ ].",
                    "correctWord": "起きます",
                    "correctWordRomaji": "okimasu",
                    "options": [
                              "起きます",
                              "寝ます",
                              "食べます",
                              "行きます"
                    ],
                    "optionsRomaji": [
                              "okimasu",
                              "nemasu",
                              "tabemasu",
                              "ikimasu"
                    ],
                    "hint": "Polite verb meaning \"to wake up / get up\".",
                    "english": "I wake up at seven o'clock every morning."
          },
          {
                    "id": "bf-4-2",
                    "sentencePrefix": "朝ご飯にパンを",
                    "sentenceSuffix": "。",
                    "sentenceRomaji": "Asagohan ni pan o [ ___ ].",
                    "correctWord": "食べます",
                    "correctWordRomaji": "tabemasu",
                    "options": [
                              "食べます",
                              "飲みます",
                              "見ます",
                              "聞きます"
                    ],
                    "optionsRomaji": [
                              "tabemasu",
                              "nomimasu",
                              "mimasu",
                              "kikimasu"
                    ],
                    "hint": "Polite verb meaning \"to eat\".",
                    "english": "I eat bread for breakfast."
          },
          {
                    "id": "bf-4-3",
                    "sentencePrefix": "夜はお酒を",
                    "sentenceSuffix": "。健康のためです。",
                    "sentenceRomaji": "Yoru wa osake o [ ___ ]. Kenkou no tame desu.",
                    "correctWord": "飲みません",
                    "correctWordRomaji": "nomimasen",
                    "options": [
                              "飲みません",
                              "飲みます",
                              "食べません",
                              "寝ません"
                    ],
                    "optionsRomaji": [
                              "nomimasen",
                              "nomimasu",
                              "tabemasen",
                              "nemasen"
                    ],
                    "hint": "Negative polite form meaning \"do not drink\".",
                    "english": "I do not drink alcohol at night. It is for my health."
          }
],
            grammarPoints: [
              {
                title: 'Polite Verb Suffix ~ます (~masu)',
                structure: '[Verb Stem] + ます (Affirmative) / ません (Negative)',
                explanation: 'Used to express daily habits, routines, and future actions in polite Japanese.',
                examples: [
                  {
                    japanese: '毎朝、コーヒーを飲みます。',
                    furigana: 'まいあさ、コーヒー を のみます。',
                    romaji: 'Maiasa, koohii o nomimasu.',
                    english: 'I drink coffee every morning.'
                  }
                ]
              }
            ],
            vocabulary: [
              { kanji: '食べる', furigana: 'たべる', romaji: 'taberu', english: 'To eat', pos: 'Verb' },
              { kanji: '飲む', furigana: 'のむ', romaji: 'nomu', english: 'To drink', pos: 'Verb' },
              { kanji: '行く', furigana: 'いく', romaji: 'iku', english: 'To go', pos: 'Verb' },
              { kanji: '水', furigana: 'みず', romaji: 'mizu', english: 'Water', pos: 'Noun' }
            ],
            dialogue: {
          "title": "Discussing Daily Routines",
          "situation": "Ken and Yui discuss what time they get up and study.",
          "lines": [
                    {
                              "speaker": "Ken",
                              "speakerJp": "ケン",
                              "japanese": "ゆいさんは毎朝何時に起きますか。",
                              "furigana": "ゆいさん は まいあさ なんじ に おきます か。",
                              "romaji": "Yui-san wa maiasa nanji ni okimasu ka.",
                              "english": "Yui-san, what time do you wake up every morning?"
                    },
                    {
                              "speaker": "Yui",
                              "speakerJp": "ゆい",
                              "japanese": "私は六時半に起きます。そして、日本語を勉強します。",
                              "furigana": "わたし は ろくじはん に おきます。そして、にほんご を べんきょう します。",
                              "romaji": "Watashi wa rokujihan ni okimasu. Soshite, Nihongo o benkyou shimasu.",
                              "english": "I wake up at 6:30. And then, I study Japanese."
                    },
                    {
                              "speaker": "Ken",
                              "speakerJp": "ケン",
                              "japanese": "すごいですね！朝ご飯は何を食べますか。",
                              "furigana": "すごい です ね！あさごはん は なに を たべます か。",
                              "romaji": "Sugoi desu ne! Asagohan wa nani o tabemasu ka.",
                              "english": "That is impressive! What do you eat for breakfast?"
                    },
                    {
                              "speaker": "Yui",
                              "speakerJp": "ゆい",
                              "japanese": "ご飯と味噌汁を食べます。パンはあまり食べません。",
                              "furigana": "ごはん と みそしる を たべます。パン は あまり たべません。",
                              "romaji": "Gohan to misoshiru o tabemasu. Pan wa amari tabemasen.",
                              "english": "I eat rice and miso soup. I don't really eat bread."
                    }
          ]
},
            quiz: [
              {
                question: 'What is the negative polite form of 食べます (tabemasu)?',
                options: ['食べません (tabemasen)', '食べました (tabemashita)', '食べない (tabenai)', '食べる (taberu)'],
                correctIndex: 0,
                explanation: 'Replacing ~ます with ~ません forms the polite negative.'
              }
            ]
          },
          {
            id: 'lesson-n5-2-2',
            title: 'Lesson 5: Movement Verbs & Destinations (へ・に 行きます / 来ます / 帰ります)',
            japaneseTitle: '第５課：移動動詞と助詞「へ・に」',
            summary: 'Express going, coming, and returning to places using directional particles へ and に, plus transportation means with で.',
            readTimeMinutes: 20,
            memoryTip: {
              title: 'The Destination Arrow (へ) & Pinpoint Target (に)',
              explanation: 'When heading towards a destination, use へ (written he, pronounced "e") as an arrow pointing your general direction. Use に (ni) as a pinpoint needle landing directly on your destination spot!',
              rhyme: 'HE (pronounced E) points the way; NI pins the exact place where you arrive!',
              bulletPoints: [
                '駅へ行きます (I go towards the station).',
                '日本に来ました (I came to Japan).',
                'うちへ帰ります (I return back home).'
              ]
            },
            blankFillExercises: [
          {
                    "id": "bf-5-1",
                    "sentencePrefix": "明日、電車で東京",
                    "sentenceSuffix": "行きます。",
                    "sentenceRomaji": "Ashita, densha de Toukyou [ ___ ] ikimasu.",
                    "correctWord": "へ",
                    "correctWordRomaji": "e",
                    "options": [
                              "へ",
                              "を",
                              "で",
                              "から"
                    ],
                    "optionsRomaji": [
                              "e",
                              "o",
                              "de",
                              "kara"
                    ],
                    "hint": "Directional destination particle (pronounced e).",
                    "english": "Tomorrow, I will go to Tokyo by train."
          },
          {
                    "id": "bf-5-2",
                    "sentencePrefix": "友達が私の家",
                    "sentenceSuffix": "来ました。",
                    "sentenceRomaji": "Tomodachi ga watashi no ie [ ___ ] kimashita.",
                    "correctWord": "に",
                    "correctWordRomaji": "ni",
                    "options": [
                              "に",
                              "を",
                              "で",
                              "と"
                    ],
                    "optionsRomaji": [
                              "ni",
                              "o",
                              "de",
                              "to"
                    ],
                    "hint": "Destination particle \"ni\" indicating arrival at home.",
                    "english": "My friend came to my house."
          },
          {
                    "id": "bf-5-3",
                    "sentencePrefix": "夜九時にうちへ",
                    "sentenceSuffix": "。",
                    "sentenceRomaji": "Yoru kuji ni uchi e [ ___ ].",
                    "correctWord": "帰ります",
                    "correctWordRomaji": "kaerimasu",
                    "options": [
                              "帰ります",
                              "行きます",
                              "来ます",
                              "起きます"
                    ],
                    "optionsRomaji": [
                              "kaerimasu",
                              "ikimasu",
                              "kimasu",
                              "okimasu"
                    ],
                    "hint": "Movement verb specifically meaning \"to return / go back home\".",
                    "english": "I return home at 9:00 PM."
          }
],
            grammarPoints: [
              {
                title: 'Direction & Destination: [Place] + へ / に + 行きます',
                structure: '[Place] + へ (read "e") / に + 行きます (go) / 来ます (come) / 帰ります (return)',
                explanation: 'へ indicates direction of motion towards a destination; に indicates the destination arrival point.',
                examples: [
                  {
                    japanese: '明日、東京へ行きます。',
                    furigana: 'あした、とうきょう へ いきます。',
                    romaji: 'Ashita, Toukyou e ikimasu.',
                    english: 'Tomorrow, I am going to Tokyo.'
                  },
                  {
                    japanese: '電車で会社へ行きます。',
                    furigana: 'でんしゃ で かいしゃ へ いきます。',
                    romaji: 'Densha de kaisha e ikimasu.',
                    english: 'I go to the company by train.'
                  }
                ]
              }
            ],
            vocabulary: [
              { kanji: '東京', furigana: 'とうきょう', romaji: 'Toukyou', english: 'Tokyo', pos: 'Noun' },
              { kanji: '学校', furigana: 'がっこう', romaji: 'gakkou', english: 'School', pos: 'Noun' },
              { kanji: '電車', furigana: 'でんしゃ', romaji: 'densha', english: 'Train', pos: 'Noun' },
              { kanji: '帰る', furigana: 'かえる', romaji: 'kaeru', english: 'To return / go home', pos: 'Verb' }
            ],
            dialogue: {
          "title": "Weekend Travel Plans",
          "situation": "Ken and Tanaka talk about visiting Kyoto for the weekend.",
          "lines": [
                    {
                              "speaker": "Tanaka",
                              "speakerJp": "たなか",
                              "japanese": "ケンさん、今週末はどこへ行きますか。",
                              "furigana": "ケンさん、こんしゅうまつ は どこ へ いきます か。",
                              "romaji": "Ken-san, konshuumatsu wa doko e ikimasu ka.",
                              "english": "Ken-san, where are you going this weekend?"
                    },
                    {
                              "speaker": "Ken",
                              "speakerJp": "ケン",
                              "japanese": "新幹線で京都へ行きます。お寺を見ます。",
                              "furigana": "しんかんせん で きょうと へ いきます。おてら を みます。",
                              "romaji": "Shinkansen de Kyouto e ikimasu. Otera o mimasu.",
                              "english": "I will go to Kyoto by bullet train. I will see temples."
                    },
                    {
                              "speaker": "Tanaka",
                              "speakerJp": "たなか",
                              "japanese": "いいですね！何時に帰りますか。",
                              "furigana": "いい です ね！なんじ に かえります か。",
                              "romaji": "Ii desu ne! Nanji ni kaerimasu ka.",
                              "english": "That sounds great! What time will you return?"
                    },
                    {
                              "speaker": "Ken",
                              "speakerJp": "ケン",
                              "japanese": "日曜日の夜八時に東京へ帰ります。",
                              "furigana": "にちようび の よる はちじ に とうきょう へ かえります。",
                              "romaji": "Nichiyoubi no yoru hachiji ni Toukyou e kaerimasu.",
                              "english": "I will return to Tokyo at 8:00 PM on Sunday."
                    }
          ]
},
            quiz: [
              {
                question: 'When used as a directional particle (Tokyo e), how is 「へ」 pronounced?',
                options: ['e (え)', 'he (へ)', 'ha (は)', 'ni (に)'],
                correctIndex: 0,
                explanation: 'The particle へ is pronounced "e", just as the topic particle は is pronounced "wa".'
              }
            ]
          },
          {
            id: 'lesson-n5-2-3',
            title: 'Lesson 6: Direct Objects (を) & Locations of Action (で)',
            japaneseTitle: '第６課：目的語「を」と動作の場所「で」',
            summary: 'Distinguish between the direct object marker を and the action location marker で.',
            readTimeMinutes: 20,
            memoryTip: {
              title: 'The Action Target (を) vs Action Stage (で)',
              explanation: 'Use を (written "wo", pronounced "o") right after whatever food, drink, or item you are acting upon. Use で (de) to set the physical stage/place where the action is actively taking place!',
              rhyme: 'WO points to WHAT you act on; DE is WHERE you do it!',
              bulletPoints: [
                '本を読みます (Read a book — book is the target object marked by を).',
                '図書館で本を読みます (At the library — library is the place of action marked by で).',
                'レストランでご飯を食べます (Eat a meal at a restaurant).'
              ]
            },
            blankFillExercises: [
          {
                    "id": "bf-6-1",
                    "sentencePrefix": "図書館",
                    "sentenceSuffix": "本を読みます。",
                    "sentenceRomaji": "Toshokan [ ___ ] hon o yomimasu.",
                    "correctWord": "で",
                    "correctWordRomaji": "de",
                    "options": [
                              "で",
                              "に",
                              "へ",
                              "を"
                    ],
                    "optionsRomaji": [
                              "de",
                              "ni",
                              "e",
                              "o"
                    ],
                    "hint": "Particle indicating the location where an action takes place.",
                    "english": "I read books at the library."
          },
          {
                    "id": "bf-6-2",
                    "sentencePrefix": "昼ご飯",
                    "sentenceSuffix": "食べました。",
                    "sentenceRomaji": "Hirugohan [ ___ ] tabemashita.",
                    "correctWord": "を",
                    "correctWordRomaji": "o",
                    "options": [
                              "を",
                              "で",
                              "に",
                              "は"
                    ],
                    "optionsRomaji": [
                              "o",
                              "de",
                              "ni",
                              "wa"
                    ],
                    "hint": "Direct object marker particle (pronounced o).",
                    "english": "I ate lunch."
          },
          {
                    "id": "bf-6-3",
                    "sentencePrefix": "箸",
                    "sentenceSuffix": "ラーメンを食べます。",
                    "sentenceRomaji": "Hashi [ ___ ] raamen o tabemasu.",
                    "correctWord": "で",
                    "correctWordRomaji": "de",
                    "options": [
                              "で",
                              "を",
                              "に",
                              "と"
                    ],
                    "optionsRomaji": [
                              "de",
                              "o",
                              "ni",
                              "to"
                    ],
                    "hint": "Particle indicating the tool/means used (\"with chopsticks\").",
                    "english": "I eat ramen with chopsticks."
          }
],
            grammarPoints: [
              {
                title: '[Noun] を [Verb] & [Location] で [Verb]',
                structure: '[Item] + を + [Transitive Verb] / [Location] + で + [Action Verb]',
                explanation: 'を marks the receiver of an action. で indicates where an active event takes place.',
                examples: [
                  {
                    japanese: '図書館で日本語を勉強します。',
                    furigana: 'としょかん で にほんご を べんきょう します。',
                    romaji: 'Toshokan de nihongo o benkyou shimasu.',
                    english: 'I study Japanese at the library.'
                  }
                ]
              }
            ],
            vocabulary: [
              { kanji: '図書館', furigana: 'としょかん', romaji: 'toshokan', english: 'Library', pos: 'Noun' },
              { kanji: '日本語', furigana: 'にほんご', romaji: 'nihongo', english: 'Japanese language', pos: 'Noun' },
              { kanji: '勉強する', furigana: 'べんきょうする', romaji: 'benkyou suru', english: 'To study', pos: 'Verb' },
              { kanji: '朝ご飯', furigana: 'あさごはん', romaji: 'asagohan', english: 'Breakfast', pos: 'Noun' }
            ],
            dialogue: {
          "title": "Having Lunch at the University Cafeteria",
          "situation": "Ken and Ren meet at noon in the student cafeteria.",
          "lines": [
                    {
                              "speaker": "Ren",
                              "speakerJp": "れん",
                              "japanese": "ケンさん、どこで昼ご飯を食べますか。",
                              "furigana": "ケンさん、どこ で ひるごはん を たべます か。",
                              "romaji": "Ken-san, doko de hirugohan o tabemasu ka.",
                              "english": "Ken-san, where do you eat lunch?"
                    },
                    {
                              "speaker": "Ken",
                              "speakerJp": "ケン",
                              "japanese": "食堂でカレーライスを食べます。一緒に行きましょう。",
                              "furigana": "しょくどう で カレーライス を たべます。いっしょ に いきましょう。",
                              "romaji": "Shokudou de kareeraisu o tabemasu. Issho ni ikimashou.",
                              "english": "I eat curry rice in the cafeteria. Let's go together."
                    },
                    {
                              "speaker": "Ren",
                              "speakerJp": "れん",
                              "japanese": "いいですね！スプーンで食べますか。",
                              "furigana": "いい です ね！スプーン で たべます か。",
                              "romaji": "Ii desu ne! Supuun de tabemasu ka.",
                              "english": "Sounds good! Do you eat with a spoon?"
                    },
                    {
                              "speaker": "Ken",
                              "speakerJp": "ケン",
                              "japanese": "はい、スプーンで食べますよ。",
                              "furigana": "はい、スプーン で たべます よ。",
                              "romaji": "Hai, supuun de tabemasu yo.",
                              "english": "Yes, I eat it with a spoon."
                    }
          ]
},
            quiz: [
              {
                question: 'Complete: レストラン ( ___ ) 昼ご飯を食べます。',
                options: ['で (de)', 'を (o)', 'に (ni)', 'へ (e)'],
                correctIndex: 0,
                explanation: 'で indicates the physical location where an active event (eating) occurs.'
              }
            ]
          }
        ]
      },
      {
        id: 'mod-n5-3',
        moduleNumber: 3,
        title: 'Adjectives, Descriptions & Existence (い-形容詞・な-形容詞・ある・いる)',
        japaneseTitle: '形容詞と存在表現（ある・いる）',
        description: 'Describe objects, feelings, and preferences with I-adjectives and Na-adjectives, plus existence for living and inanimate objects.',
        lessons: [
          {
            id: 'lesson-n5-3-1',
            title: 'Lesson 7: I-Adjectives & Tense Conjugation (〜い / 〜くない / 〜かったです)',
            japaneseTitle: '第７課：い形容詞とその活用',
            summary: 'Master true Japanese adjectives ending in い and learn their negative and past tense forms.',
            readTimeMinutes: 22,
            memoryTip: {
              title: 'The Drop-I Transformation Rule',
              explanation: 'True Japanese adjectives end in 〜い (i) and conjugate directly like verbs! Drop the final 〜い and attach the magic endings: 〜くない (not), 〜かった (was), or 〜くなかった (was not)!',
              rhyme: 'Drop the I! KUNAI for Not, KATTA for Was, and KUNAKATTA for Was Not!',
              bulletPoints: [
                '暑い (hot) → 暑くないです (not hot) → 暑かったです (was hot).',
                '高い (expensive) → 高くないです (not expensive) → 高かったです (was expensive).',
                'Irregular alert: いい (good) changes to よくない (not good) and よかった (was good)!'
              ]
            },
            blankFillExercises: [
          {
                    "id": "bf-7-1",
                    "sentencePrefix": "富士山はとても",
                    "sentenceSuffix": "山です。",
                    "sentenceRomaji": "Fujisan wa totemo [ ___ ] yama desu.",
                    "correctWord": "高い",
                    "correctWordRomaji": "takai",
                    "options": [
                              "高い",
                              "高くない",
                              "高かった",
                              "高くて"
                    ],
                    "optionsRomaji": [
                              "takai",
                              "takakunai",
                              "takakatta",
                              "takakute"
                    ],
                    "hint": "Present affirmative adjective meaning \"tall / high\".",
                    "english": "Mount Fuji is a very tall mountain."
          },
          {
                    "id": "bf-7-2",
                    "sentencePrefix": "昨日のテストはあまり",
                    "sentenceSuffix": "。簡単でした。",
                    "sentenceRomaji": "Kinou no tesuto wa amari [ ___ ]. Kantan deshita.",
                    "correctWord": "難しくなかったです",
                    "correctWordRomaji": "muzukashikunakatta desu",
                    "options": [
                              "難しくなかったです",
                              "難しかったです",
                              "難しいです",
                              "難しくないです"
                    ],
                    "optionsRomaji": [
                              "muzukashikunakatta desu",
                              "muzukashikatta desu",
                              "muzukashii desu",
                              "muzukashikunai desu"
                    ],
                    "hint": "Past negative form of \"difficult\": drop い + くなかったです.",
                    "english": "Yesterday's test was not very difficult. It was easy."
          },
          {
                    "id": "bf-7-3",
                    "sentencePrefix": "今日は全然",
                    "sentenceSuffix": "。暖かいです。",
                    "sentenceRomaji": "Kyou wa zenzen [ ___ ]. Atatakai desu.",
                    "correctWord": "寒くないです",
                    "correctWordRomaji": "samukunai desu",
                    "options": [
                              "寒くないです",
                              "寒いでした",
                              "寒かったです",
                              "寒いです"
                    ],
                    "optionsRomaji": [
                              "samukunai desu",
                              "samui deshita",
                              "samukatta desu",
                              "samui desu"
                    ],
                    "hint": "Present negative form: drop い + くないです (\"not cold\").",
                    "english": "It is not cold at all today. It is warm."
          }
],
            grammarPoints: [
              {
                title: 'I-Adjective Conjugation Rules',
                structure: 'Negative: [drop い] + くないです / Past: [drop い] + かったです / Past Neg: + くなかったです',
                explanation: 'I-adjectives conjugate directly like mini-verbs, changing their final ~い ending.',
                examples: [
                  {
                    japanese: '昨日のテストは難しかったです。',
                    furigana: 'きのう の テスト は むずかしかった です。',
                    romaji: 'Kinou no tesuto wa muzukashikatta desu.',
                    english: 'Yesterday\'s test was difficult.'
                  },
                  {
                    japanese: 'このお茶は熱くないです。',
                    furigana: 'この おちゃ は あつくない です。',
                    romaji: 'Kono ocha wa atsukunai desu.',
                    english: 'This green tea is not hot.'
                  }
                ]
              }
            ],
            vocabulary: [
              { kanji: '美味しい', furigana: 'おいしい', romaji: 'oishii', english: 'Delicious', pos: 'I-Adj' },
              { kanji: '高い', furigana: 'たかい', romaji: 'takai', english: 'Expensive / Tall', pos: 'I-Adj' },
              { kanji: '安い', furigana: 'やすい', romaji: 'yasui', english: 'Inexpensive / Cheap', pos: 'I-Adj' },
              { kanji: '難しい', furigana: 'むずかしい', romaji: 'muzukashii', english: 'Difficult', pos: 'I-Adj' }
            ],
            dialogue: {
          "title": "Reviewing Yesterday's Japanese Exam",
          "situation": "Ken and Hana discuss their test results over hot tea.",
          "lines": [
                    {
                              "speaker": "Hana",
                              "speakerJp": "はな",
                              "japanese": "ケンさん、昨日の漢字テストはどうでしたか。",
                              "furigana": "ケンさん、きのう の かんじ テスト は どう でした か。",
                              "romaji": "Ken-san, kinou no kanji tesuto wa dou deshita ka.",
                              "english": "Ken-san, how was yesterday's kanji test?"
                    },
                    {
                              "speaker": "Ken",
                              "speakerJp": "ケン",
                              "japanese": "少し難しかったです。でも、とても面白かったです。",
                              "furigana": "すこし むずかしかった です。でも、とても おもしろかった です。",
                              "romaji": "Sukoshi muzukashikatta desu. Demo, totemo omoshirokatta desu.",
                              "english": "It was a little difficult. But it was very interesting."
                    },
                    {
                              "speaker": "Hana",
                              "speakerJp": "はな",
                              "japanese": "このお茶は熱くないですから、どうぞ飲んでください。",
                              "furigana": "この おちゃ は あつくない です から、どうぞ のんで ください。",
                              "romaji": "Kono ocha wa atsukunai desu kara, douzo nonde kudasai.",
                              "english": "This green tea is not hot, so please drink."
                    }
          ]
},
            quiz: [
              {
                question: 'What is the past tense of 高い (takai - expensive)?',
                options: ['高かったです (takakatta desu)', '高くないでした (takakunai deshita)', '高いました (takaimashita)', '高いでした (takai deshita)'],
                correctIndex: 0,
                explanation: 'Drop the final い and add かったです: 高い → 高かったです.'
              }
            ]
          },
          {
            id: 'lesson-n5-3-2',
            title: 'Lesson 8: Na-Adjectives & Preferences (静か・親切・好き・嫌い)',
            japaneseTitle: '第８課：な形容詞と好みの表現',
            summary: 'Learn nominal adjectives that connect to nouns with な and express likes and dislikes using が 好きです.',
            readTimeMinutes: 20,
            memoryTip: {
              title: 'The "NA" Bridge Before Nouns',
              explanation: 'Na-adjectives (like 静か shizuka, 親切 shinsetsu, 好き suki) behave like nouns. When placed directly in front of a noun, they MUST use な as a bridge (静かな部屋). At the end of a sentence, the な disappears and becomes です (部屋は静かです)!',
              rhyme: 'Bridge with NA before a noun; end with DESU when standing alone!',
              bulletPoints: [
                '静かな町 (Quiet town — NA bridge modifying town).',
                'この町は静かです (This town is quiet — sentence ending).',
                '好き (suki = liked) and 嫌い (kirai = disliked) take が: 「日本料理が好きです」.'
              ]
            },
            blankFillExercises: [
          {
                    "id": "bf-8-1",
                    "sentencePrefix": "この町はとても",
                    "sentenceSuffix": "町です。",
                    "sentenceRomaji": "Kono machi wa totemo [ ___ ] machi desu.",
                    "correctWord": "静かな",
                    "correctWordRomaji": "shizuka na",
                    "options": [
                              "静かな",
                              "静か",
                              "静かに",
                              "静かだ"
                    ],
                    "optionsRomaji": [
                              "shizuka na",
                              "shizuka",
                              "shizuka ni",
                              "shizuka da"
                    ],
                    "hint": "Na-adjectives need な when directly modifying a noun.",
                    "english": "This town is a very quiet town."
          },
          {
                    "id": "bf-8-2",
                    "sentencePrefix": "私は日本の食べ物が",
                    "sentenceSuffix": "です。",
                    "sentenceRomaji": "Watashi wa Nihon no tabemono ga [ ___ ] desu.",
                    "correctWord": "好き",
                    "correctWordRomaji": "suki",
                    "options": [
                              "好き",
                              "好きな",
                              "好きに",
                              "好きだ"
                    ],
                    "optionsRomaji": [
                              "suki",
                              "suki na",
                              "suki ni",
                              "suki da"
                    ],
                    "hint": "Predicate form before です: \"[Noun] が 好きです\".",
                    "english": "I like Japanese food."
          },
          {
                    "id": "bf-8-3",
                    "sentencePrefix": "先生はいつもとても",
                    "sentenceSuffix": "です。",
                    "sentenceRomaji": "Sensei wa itsumo totemo [ ___ ] desu.",
                    "correctWord": "親切",
                    "correctWordRomaji": "shinsetsu",
                    "options": [
                              "親切",
                              "親切な",
                              "親切に",
                              "親切だ"
                    ],
                    "optionsRomaji": [
                              "shinsetsu",
                              "shinsetsu na",
                              "shinsetsu ni",
                              "shinsetsu da"
                    ],
                    "hint": "Predicate form meaning \"is kind\".",
                    "english": "The teacher is always very kind."
          }
],
            grammarPoints: [
              {
                title: 'Na-Adjectives & [Noun] が 好きです',
                structure: '[Na-Adj] + な + [Noun] / [Noun] が 好きです (I like [Noun])',
                explanation: 'When modifying nouns directly, attach な. For likes and dislikes, the liked item takes particle が.',
                examples: [
                  {
                    japanese: '京都は静かな町です。',
                    furigana: 'きょうと は しずかな まち です。',
                    romaji: 'Kyouto wa shizuka na machi desu.',
                    english: 'Kyoto is a quiet town.'
                  },
                  {
                    japanese: '私は日本料理が好きです。',
                    furigana: 'わたし は にほんりょうり が すき です。',
                    romaji: 'Watashi wa nihon ryouri ga suki desu.',
                    english: 'I like Japanese cuisine.'
                  }
                ]
              }
            ],
            vocabulary: [
              { kanji: '静か', furigana: 'しずか', romaji: 'shizuka', english: 'Quiet', pos: 'Na-Adj' },
              { kanji: '親切', furigana: 'しんせつ', romaji: 'shinsetsu', english: 'Kind / Helpful', pos: 'Na-Adj' },
              { kanji: '有名', furigana: 'ゆうめい', romaji: 'yuumei', english: 'Famous', pos: 'Na-Adj' },
              { kanji: '好き', furigana: 'すき', romaji: 'suki', english: 'Liked / Favorite', pos: 'Na-Adj' }
            ],
            dialogue: {
          "title": "Visiting a New Neighborhood",
          "situation": "Ken and Sora walk through a peaceful suburb of Tokyo.",
          "lines": [
                    {
                              "speaker": "Ken",
                              "speakerJp": "ケン",
                              "japanese": "ここはとても静かで綺麗な町ですね。",
                              "furigana": "ここ は とても しずか で きれい な まち です ね。",
                              "romaji": "Koko wa totemo shizuka de kirei na machi desu ne.",
                              "english": "This is a very quiet and pretty town, isn't it?"
                    },
                    {
                              "speaker": "Sora",
                              "speakerJp": "そら",
                              "japanese": "はい、近所の人もとても親切ですよ。",
                              "furigana": "はい、きんじょ の ひと も とても しんせつ です よ。",
                              "romaji": "Hai, kinjo no hito mo totemo shinsetsu desu yo.",
                              "english": "Yes, the neighbors are very kind too!"
                    },
                    {
                              "speaker": "Ken",
                              "speakerJp": "ケン",
                              "japanese": "私はこの公園がとても好きです。",
                              "furigana": "わたし は この こうえん が とても すき です。",
                              "romaji": "Watashi wa kono kouen ga totemo suki desu.",
                              "english": "I like this park very much."
                    }
          ]
},
            quiz: [
              {
                question: 'How do you modify "町" (town) with "静か" (quiet)?',
                options: ['静かな町 (Shizuka na machi)', '静か町 (Shizuka machi)', '静かい町 (Shizukai machi)', '静かの町 (Shizuka no machi)'],
                correctIndex: 0,
                explanation: 'Na-adjectives require 「な」 when placed directly before a noun.'
              }
            ]
          },
          {
            id: 'lesson-n5-3-3',
            title: 'Lesson 9: Existence of Living vs Inanimate (あります vs います)',
            japaneseTitle: '第９課：存在の表現「ある」と「いる」',
            summary: 'Master the fundamental distinction between inanimate objects (あります) and living creatures (います).',
            readTimeMinutes: 20,
            memoryTip: {
              title: 'Heartbeat Check: Aru vs Iru',
              explanation: 'Does it have a heartbeat or independent will? If it\'s a person, animal, or living creature, use います (iru). If it\'s an inanimate object, plant, building, or concept, use あります (aru)!',
              rhyme: 'Pulse and Breath? Use IMASU! Inanimate object on a shelf? Use ARIMASU!',
              bulletPoints: [
                '猫がいます / 犬がいます / 先生がいます (Cat / Dog / Teacher exists — living).',
                '机があります / 本があります / 車があります (Desk / Book / Car exists — inanimate).',
                'Location: 部屋に机があります (There is a desk in the room).'
              ]
            },
            blankFillExercises: [
          {
                    "id": "bf-9-1",
                    "sentencePrefix": "机の上に本が",
                    "sentenceSuffix": "。",
                    "sentenceRomaji": "Tsukue no ue ni hon ga [ ___ ].",
                    "correctWord": "あります",
                    "correctWordRomaji": "arimasu",
                    "options": [
                              "あります",
                              "います",
                              "です",
                              "します"
                    ],
                    "optionsRomaji": [
                              "arimasu",
                              "imasu",
                              "desu",
                              "shimasu"
                    ],
                    "hint": "Use あります for inanimate non-living objects (books, pens).",
                    "english": "There is a book on the desk."
          },
          {
                    "id": "bf-9-2",
                    "sentencePrefix": "庭にかわいい犬が",
                    "sentenceSuffix": "。",
                    "sentenceRomaji": "Niwa ni kawaii inu ga [ ___ ].",
                    "correctWord": "います",
                    "correctWordRomaji": "imasu",
                    "options": [
                              "います",
                              "あります",
                              "です",
                              "なります"
                    ],
                    "optionsRomaji": [
                              "imasu",
                              "arimasu",
                              "desu",
                              "narimasu"
                    ],
                    "hint": "Use います for living animate things (dogs, cats, people).",
                    "english": "There is a cute dog in the garden."
          },
          {
                    "id": "bf-9-3",
                    "sentencePrefix": "教室に先生が",
                    "sentenceSuffix": "。",
                    "sentenceRomaji": "Kyoushitsu ni sensei ga [ ___ ].",
                    "correctWord": "います",
                    "correctWordRomaji": "imasu",
                    "options": [
                              "います",
                              "あります",
                              "寝ます",
                              "食べます"
                    ],
                    "optionsRomaji": [
                              "imasu",
                              "arimasu",
                              "nemasu",
                              "tabemasu"
                    ],
                    "hint": "Teacher is a person (living), so use います.",
                    "english": "There is a teacher in the classroom."
          }
],
            grammarPoints: [
              {
                title: '[Place] に [Item] が あります / います',
                structure: 'Inanimate: [Place] に [Thing] が あります / Living: [Place] に [Person/Animal] が います',
                explanation: 'Use あります for plants, items, buildings, and events; use います for people, pets, and animals.',
                examples: [
                  {
                    japanese: '机の上に本があります。',
                    furigana: 'つくえ の うえ に ほん が あります。',
                    romaji: 'Tsukue no ue ni hon ga arimasu.',
                    english: 'There is a book on the desk.'
                  },
                  {
                    japanese: '庭に猫がいます。',
                    furigana: 'にわ に ねこ が います。',
                    romaji: 'Niwa ni neko ga imasu.',
                    english: 'There is a cat in the garden.'
                  }
                ]
              }
            ],
            vocabulary: [
              { kanji: '机', furigana: 'つくえ', romaji: 'tsukue', english: 'Desk', pos: 'Noun' },
              { kanji: '猫', furigana: 'ねこ', romaji: 'neko', english: 'Cat', pos: 'Noun' },
              { kanji: '犬', furigana: 'いぬ', romaji: 'inu', english: 'Dog', pos: 'Noun' },
              { kanji: '部屋', furigana: 'へや', romaji: 'heya', english: 'Room', pos: 'Noun' }
            ],
            dialogue: {
          "title": "Looking for Items and Friends in the Classroom",
          "situation": "Ken asks where his textbook and teacher are.",
          "lines": [
                    {
                              "speaker": "Ken",
                              "speakerJp": "ケン",
                              "japanese": "すみません、私の教科書はどこにありますか。",
                              "furigana": "すみません、わたし の きょうかしょ は どこ に あります か。",
                              "romaji": "Sumimasen, watashi no kyoukasho wa doko ni arimasu ka.",
                              "english": "Excuse me, where is my textbook?"
                    },
                    {
                              "speaker": "Aoi",
                              "speakerJp": "あおい",
                              "japanese": "あそこの机の上にありますよ。",
                              "furigana": "あそこ の つくえ の うえ に あります よ。",
                              "romaji": "Asoko no tsukue no ue ni arimasu yo.",
                              "english": "It is on top of that desk over there."
                    },
                    {
                              "speaker": "Ken",
                              "speakerJp": "ケン",
                              "japanese": "先生はどこにいますか。",
                              "furigana": "せんせい は どこ に います か。",
                              "romaji": "Sensei wa doko ni imasu ka.",
                              "english": "Where is the teacher?"
                    },
                    {
                              "speaker": "Aoi",
                              "speakerJp": "あおい",
                              "japanese": "先生は職員室にいます。",
                              "furigana": "せんせい は しょくいんしつ に います。",
                              "romaji": "Sensei wa shokuinshitsu ni imasu.",
                              "english": "The teacher is in the staff room."
                    }
          ]
},
            quiz: [
              {
                question: 'Which sentence correctly states "There is a dog in the park"?',
                options: ['公園に犬がいます (Kouen ni inu ga imasu)', '公園に犬があります (Kouen ni inu ga arimasu)', '公園で犬があります (Kouen de inu ga arimasu)', '犬は公園があります (Inu wa kouen ga arimasu)'],
                correctIndex: 0,
                explanation: 'Animals are living beings, so います is strictly used with location particle に.'
              }
            ]
          }
        ]
      },
      {
        id: 'mod-n5-4',
        moduleNumber: 4,
        title: 'Te-Form Conjugation, Progressive Actions & Desires',
        japaneseTitle: 'て形の応用と願望・勧誘表現',
        description: 'Learn the cornerstone of Japanese grammar: the Te-form for requests, ongoing actions with 〜ています, and desires with 〜たい.',
        lessons: [
          {
            id: 'lesson-n5-4-1',
            title: 'Lesson 10: The Essential Te-Form & Polite Requests (〜てください)',
            japaneseTitle: '第１０課：て形の基礎と依頼「〜てください」',
            summary: 'Conjugate Group 1, Group 2, and irregular verbs into the Te-form and make polite everyday requests.',
            readTimeMinutes: 25,
            memoryTip: {
              title: 'The Famous Te-Form Rhyme (〜て)',
              explanation: 'The Te-form (〜て) is the Swiss Army knife of Japanese! It connects actions, makes requests with 〜てください, and forms progressive continuous actions. Use this classic rhythmic mnemonic for Group 1 verbs:',
              rhyme: 'う・つ・る → って | む・ぶ・ぬ → んで | く → いて | ぐ → いで | す → して | 行く → 行って!',
              bulletPoints: [
                'Group 1: 買う → 買って, 待つ → 待って, 読む → 読んで, 書く → 書いて, 話す → 話して.',
                'Group 2 (Ichidan): Just drop る and add て! (食べる → 食べて, 見る → 見て).',
                'Irregulars: する → して, 来る → 来て.',
                'Polite request: ちょっと待ってください (Please wait a moment).'
              ]
            },
            blankFillExercises: [
          {
                    "id": "bf-10-1",
                    "sentencePrefix": "ここに名前を",
                    "sentenceSuffix": "ください。",
                    "sentenceRomaji": "Koko ni namae o [ ___ ] kudasai.",
                    "correctWord": "書いて",
                    "correctWordRomaji": "kaite",
                    "options": [
                              "書いて",
                              "書きて",
                              "書いで",
                              "書って"
                    ],
                    "optionsRomaji": [
                              "kaite",
                              "kakite",
                              "kaide",
                              "katte"
                    ],
                    "hint": "Verb 書く (kaku) ends in く → changes to いて.",
                    "english": "Please write your name here."
          },
          {
                    "id": "bf-10-2",
                    "sentencePrefix": "ちょっと",
                    "sentenceSuffix": "ください。",
                    "sentenceRomaji": "Chotto [ ___ ] kudasai.",
                    "correctWord": "待って",
                    "correctWordRomaji": "matte",
                    "options": [
                              "待って",
                              "待ちて",
                              "待いで",
                              "待て"
                    ],
                    "optionsRomaji": [
                              "matte",
                              "machite",
                              "maide",
                              "mate"
                    ],
                    "hint": "Verb 待つ (matsu) ends in つ → changes to って.",
                    "english": "Please wait a moment."
          },
          {
                    "id": "bf-10-3",
                    "sentencePrefix": "温かいお茶を",
                    "sentenceSuffix": "ください。",
                    "sentenceRomaji": "Atatakai ocha o [ ___ ] kudasai.",
                    "correctWord": "飲んで",
                    "correctWordRomaji": "nonde",
                    "options": [
                              "飲んで",
                              "飲みて",
                              "飲って",
                              "飲いで"
                    ],
                    "optionsRomaji": [
                              "nonde",
                              "nomite",
                              "notte",
                              "noide"
                    ],
                    "hint": "Verb 飲む (nomu) ends in む → changes to んで.",
                    "english": "Please drink the warm green tea."
          },
          {
                    "id": "bf-10-4",
                    "sentencePrefix": "黒板をよく",
                    "sentenceSuffix": "ください。",
                    "sentenceRomaji": "Kokuban o yoku [ ___ ] kudasai.",
                    "correctWord": "見て",
                    "correctWordRomaji": "mite",
                    "options": [
                              "見て",
                              "見って",
                              "見いで",
                              "見んで"
                    ],
                    "optionsRomaji": [
                              "mite",
                              "mitte",
                              "miide",
                              "minde"
                    ],
                    "hint": "Group 2 verb 見る (miru) simply drops る and adds て.",
                    "english": "Please look at the blackboard carefully."
          }
],
            grammarPoints: [
                {
          "title": "⭐ The Te-Form Conjugation Cheat Sheet & Song",
          "structure": "Group 1 (Godan) Rhyme: う・つ・る → って / む・ぶ・ぬ → んで / く → いて / ぐ → いで / す → して",
          "explanation": "The Te-Form is easy when you remember the 3 verb groups:\n• Group 1 (Godan):\n  - Verbs ending in う, つ, る → って (買う→買って, 待つ→待って, 帰る→帰って)\n  - Verbs ending in む, ぶ, ぬ → んで (飲む→飲んで, 遊ぶ→遊んで, 死ぬ→死んで)\n  - Verbs ending in く → いて (書く→書いて) *Exception: 行く→行って\n  - Verbs ending in ぐ → いで (泳ぐ→泳いで)\n  - Verbs ending in す → して (話す→話して)\n• Group 2 (Ichidan - ending in -iru/-eru):\n  - Just drop る and add て! (食べる→食べて, 見る→見て, 寝る→寝て)\n• Group 3 (Irregulars - only 2!):\n  - する → して\n  - くる → きて",
          "examples": [
                    {
                              "japanese": "う・つ・る は「って」、む・ぶ・ぬ は「んで」。",
                              "furigana": "う・つ・る は「って」、む・ぶ・ぬ は「んで」。",
                              "romaji": "U-tsu-ru wa \"tte\", mu-bu-nu wa \"nde\".",
                              "english": "Memory Rhyme: U, tsu, ru become -tte; mu, bu, nu become -nde."
                    },
                    {
                              "japanese": "く は「いて」、ぐ は「いで」、す は「して」。",
                              "furigana": "く は「いて」、ぐ は「いで」、す は「して」。",
                              "romaji": "Ku wa \"ite\", gu wa \"ide\", su wa \"shite\".",
                              "english": "Ku becomes -ite, gu becomes -ide, su becomes -shite."
                    }
          ]
},

              {
                title: 'Verb [Te-form] + ください (Please do...)',
                structure: '[Verb in Te-form] + ください',
                explanation: 'The polite standard way to ask someone to do something in Japanese.',
                examples: [
                  {
                    japanese: 'ここに名前を書いてください。',
                    furigana: 'ここ に なまえ を かいて ください。',
                    romaji: 'Koko ni namae o kaite kudasai.',
                    english: 'Please write your name here.'
                  },
                  {
                    japanese: 'ちょっと待ってください。',
                    furigana: 'ちょっと まって ください。',
                    romaji: 'Chotto matte kudasai.',
                    english: 'Please wait a moment.'
                  }
                ]
              }
            ],
            vocabulary: [
              { kanji: '書く', furigana: 'かく', romaji: 'kaku', english: 'To write', pos: 'Verb' },
              { kanji: '待つ', furigana: 'まつ', romaji: 'matsu', english: 'To wait', pos: 'Verb' },
              { kanji: '言う', furigana: 'いう', romaji: 'iu', english: 'To say', pos: 'Verb' },
              { kanji: '名前', furigana: 'なまえ', romaji: 'namae', english: 'Name', pos: 'Noun' }
            ],
            dialogue: {
          "title": "Polite Requests in the Classroom",
          "situation": "The teacher asks students to open their books and listen carefully.",
          "lines": [
                    {
                              "speaker": "Teacher",
                              "speakerJp": "せんせい",
                              "japanese": "皆さん、教科書の二十ページを開けてください。",
                              "furigana": "みなさん、きょうかしょ の にじゅっページ を あけて ください。",
                              "romaji": "Minasan, kyoukasho no nijuppeeji o akete kudasai.",
                              "english": "Everyone, please open your textbooks to page 20."
                    },
                    {
                              "speaker": "Ken",
                              "speakerJp": "ケン",
                              "japanese": "はい、開けました。先生、もう一度言ってください。",
                              "furigana": "はい、あけました。せんせい、もう いちど いって ください。",
                              "romaji": "Hai, akemashita. Sensei, mou ichido itte kudasai.",
                              "english": "Yes, opened! Teacher, please say it one more time."
                    },
                    {
                              "speaker": "Teacher",
                              "speakerJp": "せんせい",
                              "japanese": "はい。ゆっくり話しますから、よく聞いてくださいね。",
                              "furigana": "はい。ゆっくり はなします から、よく きいて ください ね。",
                              "romaji": "Hai. Yukkuri hanashimasu kara, yoku kiite kudasai ne.",
                              "english": "Sure. I will speak slowly, so please listen carefully."
                    }
          ]
},
            quiz: [
              {
                question: 'What is the Te-form of 待ちます (machimasu - to wait)?',
                options: ['待って (matte)', '待ちて (machite)', '待いで (maide)', '待ってて (mattete)'],
                correctIndex: 0,
                explanation: 'Verbs ending in ち/つ conjugate to って in Te-form (待つ → 待って).'
              }
            ]
          },
          {
            id: 'lesson-n5-4-2',
            title: 'Lesson 11: Ongoing Actions & Current States (〜ています)',
            japaneseTitle: '第１１課：進行形と状態「〜ています」',
            summary: 'Express what you or others are doing right now, as well as habitual states like living or working.',
            readTimeMinutes: 20,
            memoryTip: {
              title: 'The Japanese "-ING" Camera (〜ています)',
              explanation: 'Attach います (imasu) to any verb\'s Te-form to describe an action in motion right this second (like English "-ing"), or a sustained state (like where you live or marital status)!',
              rhyme: 'Te-form + IMASU = Action happening right now or continuing state!',
              bulletPoints: [
                '今、昼ご飯を食べています (I am eating lunch right now).',
                '図書館で日本語を勉強しています (I am studying Japanese at the library).',
                '東京に住んでいます (I am living in Tokyo — continuous living state).'
              ]
            },
            blankFillExercises: [
          {
                    "id": "bf-11-1",
                    "sentencePrefix": "今、日本語を",
                    "sentenceSuffix": "います。",
                    "sentenceRomaji": "Ima, Nihongo o [ ___ ] imasu.",
                    "correctWord": "勉強して",
                    "correctWordRomaji": "benkyou shite",
                    "options": [
                              "勉強して",
                              "勉強する",
                              "勉強します",
                              "勉強した"
                    ],
                    "optionsRomaji": [
                              "benkyou shite",
                              "benkyou suru",
                              "benkyou shimasu",
                              "benkyou shita"
                    ],
                    "hint": "Use Te-form + います to express actions happening right now.",
                    "english": "I am studying Japanese right now."
          },
          {
                    "id": "bf-11-2",
                    "sentencePrefix": "私は東京に",
                    "sentenceSuffix": "います。",
                    "sentenceRomaji": "Watashi wa Toukyou ni [ ___ ] imasu.",
                    "correctWord": "住んで",
                    "correctWordRomaji": "sunde",
                    "options": [
                              "住んで",
                              "住みて",
                              "住って",
                              "住む"
                    ],
                    "optionsRomaji": [
                              "sunde",
                              "sumite",
                              "sutte",
                              "sumu"
                    ],
                    "hint": "Verb 住む (to live) in Te-form: む → んで (\"living in Tokyo\").",
                    "english": "I am living in Tokyo."
          },
          {
                    "id": "bf-11-3",
                    "sentencePrefix": "雨がまだ",
                    "sentenceSuffix": "います。",
                    "sentenceRomaji": "Ame ga mada [ ___ ] imasu.",
                    "correctWord": "降って",
                    "correctWordRomaji": "futte",
                    "options": [
                              "降って",
                              "降りて",
                              "降いで",
                              "降る"
                    ],
                    "optionsRomaji": [
                              "futte",
                              "orite",
                              "fuide",
                              "furu"
                    ],
                    "hint": "Verb 降る (furu - rain falls): る → って (\"rain is still falling\").",
                    "english": "Rain is still falling."
          }
],
            grammarPoints: [
              {
                title: 'Verb [Te-form] + います (Present Progressive / State)',
                structure: '[Verb Te-form] + います / いません',
                explanation: 'Expresses an action currently in progress or a continuous resulting state (e.g. living, knowing).',
                examples: [
                  {
                    japanese: '今、日本語を勉強しています。',
                    furigana: 'いま、にほんご を べんきょう して います。',
                    romaji: 'Ima, nihongo o benkyou shite imasu.',
                    english: 'I am studying Japanese right now.'
                  },
                  {
                    japanese: '東京に住んでいます。',
                    furigana: 'とうきょう に すんで います。',
                    romaji: 'Toukyou ni sunde imasu.',
                    english: 'I live in Tokyo.'
                  }
                ]
              }
            ],
            vocabulary: [
              { kanji: '今', furigana: 'いま', romaji: 'ima', english: 'Now', pos: 'Noun' },
              { kanji: '住む', furigana: 'すむ', romaji: 'sumu', english: 'To live / reside', pos: 'Verb' },
              { kanji: '知る', furigana: 'しる', romaji: 'shiru', english: 'To know', pos: 'Verb' },
              { kanji: '働く', furigana: 'はたらく', romaji: 'hataraku', english: 'To work', pos: 'Verb' }
            ],
            dialogue: {
          "title": "Phone Call Between Friends",
          "situation": "Ken calls Daiki to ask what he is doing this afternoon.",
          "lines": [
                    {
                              "speaker": "Ken",
                              "speakerJp": "ケン",
                              "japanese": "もしもし、大輝さん。今何をしていますか。",
                              "furigana": "もしもし、だいきさん。いま なに を して います か。",
                              "romaji": "Moshimoshi, Daiki-san. Ima nani o shite imasu ka.",
                              "english": "Hello, Daiki-san. What are you doing right now?"
                    },
                    {
                              "speaker": "Daiki",
                              "speakerJp": "だいき",
                              "japanese": "部屋でテレビを見ています。ケンさんは？",
                              "furigana": "へや で テレビ を みて います。ケンさん は？",
                              "romaji": "Heya de terebi o mite imasu. Ken-san wa?",
                              "english": "I am watching TV in my room. What about you, Ken?"
                    },
                    {
                              "speaker": "Ken",
                              "speakerJp": "ケン",
                              "japanese": "私は図書館で宿題をしています。",
                              "furigana": "わたし は としょかん で しゅくだい を して います。",
                              "romaji": "Watashi wa toshokan de shukudai o shite imasu.",
                              "english": "I am doing homework at the library."
                    }
          ]
},
            quiz: [
              {
                question: 'How do you say "I am eating right now"?',
                options: ['今食べています (Ima tabete imasu)', '今食べます (Ima tabemasu)', '今食べました (Ima tabemashita)', '今食べたい (Ima tabetai)'],
                correctIndex: 0,
                explanation: 'Te-form + います indicates an ongoing progressive action.'
              }
            ]
          },
          {
            id: 'lesson-n5-4-3',
            title: 'Lesson 12: Desires, Invitations & Suggestions (〜たい / 〜ませんか / 〜ましょう)',
            japaneseTitle: '第１２課：願望「〜たい」と勧誘「〜ませんか」',
            summary: 'Express personal wishes with 〜たいです and invite friends to join you using 〜ませんか and 〜ましょう.',
            readTimeMinutes: 22,
            memoryTip: {
              title: 'The "Wanna" & "Shall We?" Toolkit',
              explanation: 'To express personal wishes, drop ます and add 〜たい (tai) — it conjugates just like an I-adjective! To invite someone politely, use 〜ませんか (won\'t you?), and to enthusiastically suggest doing it together, say 〜ましょう (let\'s)!',
              rhyme: 'TAI = I want! MASEN KA? = Won\'t you? MASHOU = Let\'s do it!',
              bulletPoints: [
                '日本へ行きたいです (I want to go to Japan).',
                'お寿司を食べたいです (I want to eat sushi).',
                '一緒に映画を見ませんか (Won\'t you watch a movie with me? — polite invitation).',
                '一緒に行きましょう (Let\'s go together! — enthusiastic agreement).'
              ]
            },
            blankFillExercises: [
          {
                    "id": "bf-12-1",
                    "sentencePrefix": "日本へ旅行に",
                    "sentenceSuffix": "です。",
                    "sentenceRomaji": "Nihon e ryokou ni [ ___ ] desu.",
                    "correctWord": "行きたい",
                    "correctWordRomaji": "ikitai",
                    "options": [
                              "行きたい",
                              "行くたい",
                              "行きて",
                              "行きます"
                    ],
                    "optionsRomaji": [
                              "ikitai",
                              "ikutai",
                              "ikite",
                              "ikimasu"
                    ],
                    "hint": "Expressing personal wish: Verb stem 行き + たいです (\"want to go\").",
                    "english": "I want to go on a trip to Japan."
          },
          {
                    "id": "bf-12-2",
                    "sentencePrefix": "一緒にお茶を",
                    "sentenceSuffix": "か。",
                    "sentenceRomaji": "Issho ni ocha o [ ___ ] ka.",
                    "correctWord": "飲みません",
                    "correctWordRomaji": "nomimasen",
                    "options": [
                              "飲みません",
                              "飲みます",
                              "飲みたい",
                              "飲んで"
                    ],
                    "optionsRomaji": [
                              "nomimasen",
                              "nomimasu",
                              "nomitai",
                              "nonde"
                    ],
                    "hint": "Polite invitation asking \"Won't you drink...?\": ませんか.",
                    "english": "Won't you drink tea together with me?"
          },
          {
                    "id": "bf-12-3",
                    "sentencePrefix": "少しベンチで",
                    "sentenceSuffix": "。",
                    "sentenceRomaji": "Sukoshi benchi de [ ___ ].",
                    "correctWord": "休みましょう",
                    "correctWordRomaji": "yasumimashou",
                    "options": [
                              "休みましょう",
                              "休みません",
                              "休みたい",
                              "休んで"
                    ],
                    "optionsRomaji": [
                              "yasumimashou",
                              "yasumimasen",
                              "yasumitai",
                              "yasunde"
                    ],
                    "hint": "Suggestion meaning \"Let's rest!\": 〜ましょう.",
                    "english": "Let's rest a little on the bench."
          }
],
            grammarPoints: [
              {
                title: 'Expressing Desires: [Verb Stem] + たいです & Invitations: 〜ませんか',
                structure: 'Desire: [Verb Stem] + たいです / Invitation: [Verb Stem] + ませんか',
                explanation: 'たいです states what the speaker wants to do. ませんか is a polite invitation asking "Won\'t you...?"',
                examples: [
                  {
                    japanese: '日本へ行きたいです。',
                    furigana: 'にほん へ いきたい です。',
                    romaji: 'Nihon e ikitai desu.',
                    english: 'I want to go to Japan.'
                  },
                  {
                    japanese: '一緒にお昼ご飯を食べませんか。',
                    furigana: 'いっしょ に おひるごはん を たべませんか。',
                    romaji: 'Issho ni ohirugohan o tabemasen ka.',
                    english: 'Won\'t you have lunch together with me?'
                  }
                ]
              }
            ],
            vocabulary: [
              { kanji: '一緒', furigana: 'いっしょ', romaji: 'issho', english: 'Together', pos: 'Noun' },
              { kanji: '映画', furigana: 'えいが', romaji: 'eiga', english: 'Movie', pos: 'Noun' },
              { kanji: '見る', furigana: 'みる', romaji: 'miru', english: 'To see / watch', pos: 'Verb' },
              { kanji: 'お昼ご飯', furigana: 'おひるごはん', romaji: 'ohirugohan', english: 'Lunch', pos: 'Noun' }
            ],
            dialogue: {
          "title": "Planning a Weekend Outing",
          "situation": "Ken invites Sakura to watch a movie and have dinner together.",
          "lines": [
                    {
                              "speaker": "Ken",
                              "speakerJp": "ケン",
                              "japanese": "さくらさん、今週の土曜日に一緒に映画を見ませんか。",
                              "furigana": "さくらさん、こんしゅう の どようび に いっしょ に えいが を みませんか。",
                              "romaji": "Sakura-san, konshuu no doyoubi ni issho ni eiga o mimasen ka.",
                              "english": "Sakura-san, won't you see a movie with me this Saturday?"
                    },
                    {
                              "speaker": "Sakura",
                              "speakerJp": "さくら",
                              "japanese": "いいですね！ぜひ行きましょう。",
                              "furigana": "いい です ね！ぜひ いきましょう。",
                              "romaji": "Ii desu ne! Zehi ikimashou.",
                              "english": "Sounds great! Let's definitely go."
                    },
                    {
                              "speaker": "Ken",
                              "speakerJp": "ケン",
                              "japanese": "映画の後で、美味しいラーメンを食べたいですね。",
                              "furigana": "えいが の あと で、おいしい ラーメン を たべたい です ね。",
                              "romaji": "Eiga no ato de, oishii raamen o tabetai desu ne.",
                              "english": "After the movie, I want to eat delicious ramen, don't you?"
                    },
                    {
                              "speaker": "Sakura",
                              "speakerJp": "さくら",
                              "japanese": "賛成です！美味しい店を知っていますよ。",
                              "furigana": "さんせい です！おいしい みせ を しって います よ。",
                              "romaji": "Sansei desu! Oishii mise o shitte imasu yo.",
                              "english": "Agreed! I know a delicious shop."
                    }
          ]
},
            quiz: [
              {
                question: 'How do you say "I want to drink tea"?',
                options: ['お茶を飲みたいです (Ocha o nomitai desu)', 'お茶を飲みます (Ocha o nomimasu)', 'お茶を飲んでください (Ocha o nonde kudasai)', 'お茶を飲みました (Ocha o nomimashita)'],
                correctIndex: 0,
                explanation: 'Verb stem 飲み + たいです expresses the desire "want to drink".'
              }
            ]
          }
        ]
      },
      {
        id: 'mod-n5-5',
        moduleNumber: 5,
        title: 'Advanced Conjugations, Potential, Experiences & Counters',
        japaneseTitle: '応用文法：可能・経験・禁止・助数詞',
        description: 'Complete the JLPT N5 syllabus with permissions, prohibitions, plain forms, past experiences, and essential counting systems.',
        lessons: [
          {
            id: 'lesson-n5-5-1',
            title: 'Lesson 13: Permission, Prohibition & Sequence (〜てもいい / 〜てはいけない)',
            japaneseTitle: '第１３課：許可「〜てもいい」・禁止「〜てはいけない」',
            summary: 'Learn how to ask for permission (May I...?), state strict prohibitions (You must not...), and connect actions in chronological sequence.',
            readTimeMinutes: 20,
            memoryTip: {
              title: 'Green Light (〜てもいい) & Red Light (〜てはいけない)',
              explanation: 'Need permission? Ask with Te-form + もいいですか ("Is it OK even if I do this?"). Giving a strict prohibition or classroom rule? Use Te-form + ははいけません ("You must not!")!',
              rhyme: 'TE MO II = Green light (OK to do!) | TE WA IKENAI = Red light (Forbidden!)',
              bulletPoints: [
                '写真を撮ってもいいですか (May I take photos? — asking permission).',
                'ここでタバコを吸ってはいけません (You must not smoke here — strict prohibition).',
                '入ってもいいですよ (It\'s totally fine to come in).'
              ]
            },
            blankFillExercises: [
          {
                    "id": "bf-13-1",
                    "sentencePrefix": "ここで写真を撮って",
                    "sentenceSuffix": "ですか。",
                    "sentenceRomaji": "Koko de shashin o totte [ ___ ] desu ka.",
                    "correctWord": "もいい",
                    "correctWordRomaji": "mo ii",
                    "options": [
                              "もいい",
                              "はいけない",
                              "ください",
                              "から"
                    ],
                    "optionsRomaji": [
                              "mo ii",
                              "wa ikenai",
                              "kudasai",
                              "kara"
                    ],
                    "hint": "Asking permission: Te-form + もいいですか (\"May I...?\").",
                    "english": "May I take a photo here?"
          },
          {
                    "id": "bf-13-2",
                    "sentencePrefix": "図書館で大声で話して",
                    "sentenceSuffix": "。",
                    "sentenceRomaji": "Toshokan de oogoe de hanashite [ ___ ].",
                    "correctWord": "はいけません",
                    "correctWordRomaji": "wa ikemasen",
                    "options": [
                              "はいけません",
                              "もいいです",
                              "ください",
                              "たいです"
                    ],
                    "optionsRomaji": [
                              "wa ikemasen",
                              "mo ii desu",
                              "kudasai",
                              "tai desu"
                    ],
                    "hint": "Strict prohibition: Te-form + はいけません (\"Must not\").",
                    "english": "You must not speak loudly in the library."
          }
],
            grammarPoints: [
              {
                title: 'Permission: [Verb Te-form] + もいいですか',
                structure: '[Verb Te-form] + もいいです (You may...) / もいいですか (May I...?)',
                explanation: 'Used to politely grant or ask for permission to perform an action.',
                examples: [
                  {
                    japanese: 'ここで写真を撮ってもいいですか。',
                    furigana: 'ここ で しゃしん を とって も いい ですか。',
                    romaji: 'Koko de shashin o totte mo ii desu ka.',
                    english: 'May I take a photo here?'
                  },
                  {
                    japanese: 'はい、入ってもいいですよ。',
                    furigana: 'はい、はいって も いい です よ。',
                    romaji: 'Hai, haitte mo ii desu yo.',
                    english: 'Yes, you may enter.'
                  }
                ]
              },
              {
                title: 'Prohibition: [Verb Te-form] + はいけません',
                structure: '[Verb Te-form] + は (pronounced wa) + いけません',
                explanation: 'States a firm rule, regulation, or instruction that an action is forbidden.',
                examples: [
                  {
                    japanese: 'ここでタバコを吸ってはいけません。',
                    furigana: 'ここ で タバコ を すって は いけません。',
                    romaji: 'Koko de tabako o sutte wa ikemasen.',
                    english: 'You must not smoke cigarettes here.'
                  }
                ]
              }
            ],
            vocabulary: [
              { kanji: '写真', furigana: 'しゃしん', romaji: 'shashin', english: 'Photograph', pos: 'Noun' },
              { kanji: '撮る', furigana: 'とる', romaji: 'toru', english: 'To take (a photo)', pos: 'Verb' },
              { kanji: '入る', furigana: 'はいる', romaji: 'hairu', english: 'To enter', pos: 'Verb' },
              { kanji: '使う', furigana: 'つかう', romaji: 'tsukau', english: 'To use', pos: 'Verb' }
            ],
            dialogue: {
              title: 'At the Art Museum',
              situation: 'Ken asks the museum attendant about photography rules.',
              lines: [
                {
                  speaker: 'Ken',
                  speakerJp: 'ケン',
                  japanese: 'すみません、ここで写真を撮ってもいいですか。',
                  furigana: 'すみません、ここ で しゃしん を とって も いい ですか。',
                  romaji: 'Sumimasen, koko de shashin o totte mo ii desu ka.',
                  english: 'Excuse me, may I take photos here?'
                },
                {
                  speaker: 'Staff',
                  speakerJp: 'かかりいん',
                  japanese: 'いいえ、ここでは写真を撮ってはいけません。',
                  furigana: 'いいえ、ここ で は しゃしん を とって は いけません。',
                  romaji: 'Iie, koko de wa shashin o totte wa ikemasen.',
                  english: 'No, you must not take photographs here.'
                }
              ]
            },
            quiz: [
              {
                question: 'How do you ask "May I sit here?" (座る suwaru → 座って suwatte)?',
                options: ['ここに座ってもいいですか (Koko ni suwatte mo ii desu ka)', 'ここに座ってはいけません (Koko ni suwatte wa ikemasen)', 'ここに座ってください (Koko ni suwatte kudasai)', 'ここに座りますか (Koko ni suwarimasu ka)'],
                correctIndex: 0,
                explanation: 'Te-form + もいいですか is the standard polite pattern for asking permission.'
              }
            ]
          },
          {
            id: 'lesson-n5-5-2',
            title: 'Lesson 14: Nai-Form & Negative Requests (〜ないでください)',
            japaneseTitle: '第１４課：ない形・否定依頼「〜ないでください」',
            summary: 'Conjugate verbs into the plain negative (ない形) to express negative requests ("Please do not...") and essential obligations ("Must do").',
            readTimeMinutes: 22,
            memoryTip: {
              title: 'The "NAI = NO" Negative Shield (〜ないでください)',
              explanation: 'The Nai-form (〜ない) is the plain negative form of verbs. When you attach でください to it, you get the polite way to ask someone "Please do not do that!"',
              rhyme: 'NAI means NOT; NAIDE KUDASAI means PLEASE DON\'T DO THAT!',
              bulletPoints: [
                'Group 1: change the "u" sound to "a" + ない (書く → 書かない, 飲む → 飲まない).',
                'Group 2: drop る and add ない (食べる → 食べない, 見る → 見ない).',
                '心配しないでください (Please do not worry!).',
                '忘れないでください (Please do not forget!).'
              ]
            },
            blankFillExercises: [
          {
                    "id": "bf-14-1",
                    "sentencePrefix": "教室の中で",
                    "sentenceSuffix": "でください。",
                    "sentenceRomaji": "Kyoushitsu no naka de [ ___ ] de kudasai.",
                    "correctWord": "走らない",
                    "correctWordRomaji": "hashiranai",
                    "options": [
                              "走らない",
                              "走って",
                              "走る",
                              "走りない"
                    ],
                    "optionsRomaji": [
                              "hashiranai",
                              "hashitte",
                              "hashiru",
                              "hashirinai"
                    ],
                    "hint": "Negative request: [Nai-form] + でください (\"Please do not run\").",
                    "english": "Please do not run inside the classroom."
          },
          {
                    "id": "bf-14-2",
                    "sentencePrefix": "パスポートを",
                    "sentenceSuffix": "でくださいね。",
                    "sentenceRomaji": "Pasupooto o [ ___ ] de kudasai ne.",
                    "correctWord": "忘れない",
                    "correctWordRomaji": "wasurenai",
                    "options": [
                              "忘れない",
                              "忘れて",
                              "忘れる",
                              "忘れな"
                    ],
                    "optionsRomaji": [
                              "wasurenai",
                              "wasurete",
                              "wasureru",
                              "wasurena"
                    ],
                    "hint": "Group 2 verb 忘れる: drop る + ない → 忘れないでください.",
                    "english": "Please do not forget your passport."
          }
],
            grammarPoints: [
              {
                title: 'Nai-Form Conjugation Rules',
                structure: 'Group 1: -u → -anai / Group 2: -ru → -nai / Group 3: する → しない, くる → こない',
                explanation: 'The plain negative form of verbs, fundamental for forming negative sentence patterns.',
                examples: [
                  {
                    japanese: '本を読まない。',
                    furigana: 'ほん を よまない。',
                    romaji: 'Hon o yomanai.',
                    english: 'I do not read books (plain).'
                  }
                ]
              },
              {
                title: 'Negative Request: [Verb Nai-form] + でください',
                structure: '[Verb Nai-form] + でください',
                explanation: 'Politely requests someone to refrain from an action ("Please do not...").',
                examples: [
                  {
                    japanese: 'ここで走らないでください。',
                    furigana: 'ここ で はしらない で ください。',
                    romaji: 'Koko de hashiranai de kudasai.',
                    english: 'Please do not run here.'
                  },
                  {
                    japanese: 'パスポートを忘れないでください。',
                    furigana: 'パスポート を わすれない で ください。',
                    romaji: 'Pasupooto o wasurenai de kudasai.',
                    english: 'Please do not forget your passport.'
                  }
                ]
              }
            ],
            vocabulary: [
              { kanji: '走る', furigana: 'はしる', romaji: 'hashiru', english: 'To run', pos: 'Verb' },
              { kanji: '忘れる', furigana: 'わすれる', romaji: 'wasureru', english: 'To forget', pos: 'Verb' },
              { kanji: '心配する', furigana: 'しんぱいする', romaji: 'shinpai suru', english: 'To worry', pos: 'Verb' },
              { kanji: '薬', furigana: 'くすり', romaji: 'kusuri', english: 'Medicine', pos: 'Noun' }
            ],
            dialogue: {
              title: 'Doctor and Patient',
              situation: 'The doctor gives instructions to Ken.',
              lines: [
                {
                  speaker: 'Doctor',
                  speakerJp: 'いしゃ',
                  japanese: '今日はお風呂に入らないでください。薬を飲んでください。',
                  furigana: 'きょう は おふろ に はいらない で ください。くすり を のんで ください。',
                  romaji: 'Kyou wa ofuro ni hairanai de kudasai. Kusuri o nonde kudasai.',
                  english: 'Please do not take a bath today. Please take this medicine.'
                },
                {
                  speaker: 'Ken',
                  speakerJp: 'ケン',
                  japanese: 'はい、わかりました。ありがとうございます。',
                  furigana: 'はい、わかりました。ありがとう ございます。',
                  romaji: 'Hai, wakarimashita. Arigatou gozaimasu.',
                  english: 'Yes, understood. Thank you very much.'
                }
              ]
            },
            quiz: [
              {
                question: 'How do you say "Please do not worry" (心配する → 心配しない)?',
                options: ['心配しないでください (Shinpai shinai de kudasai)', '心配してください (Shinpai shite kudasai)', '心配してはいけません (Shinpai shite wa ikemasen)', '心配しません (Shinpai shimasen)'],
                correctIndex: 0,
                explanation: 'Nai-form (心配しない) + でください forms the polite negative request.'
              }
            ]
          },
          {
            id: 'lesson-n5-5-3',
            title: 'Lesson 15: Dictionary Form, Potential & Hobbies (〜ことができる)',
            japaneseTitle: '第１５課：辞書形・可能表現「〜ことができる」',
            summary: 'Learn the plain dictionary form (辞書形) of verbs to state abilities ("can do"), describe hobbies, and express sequences ("before doing...").',
            readTimeMinutes: 20,
            memoryTip: {
              title: 'The Superpower Formula: Koto ga Dekiru',
              explanation: 'To talk about your superpowers, skills, or hobbies, take any plain dictionary verb and wrap it with こと (koto = the fact/act of) + ができます (can do)!',
              rhyme: 'Dictionary Verb + KOTO GA DEKIRU = I have the superpower/ability to do it!',
              bulletPoints: [
                '日本語を話すことができます (I can speak Japanese).',
                'ピアノを弾くことができます (I can play the piano).',
                '私の趣味は音楽を聞くことです (My hobby is listening to music).'
              ]
            },
            blankFillExercises: [
          {
                    "id": "bf-15-1",
                    "sentencePrefix": "私は日本語を少し",
                    "sentenceSuffix": "ことができます。",
                    "sentenceRomaji": "Watashi wa Nihongo o sukoshi [ ___ ] koto ga dekimasu.",
                    "correctWord": "話す",
                    "correctWordRomaji": "hanasu",
                    "options": [
                              "話す",
                              "話して",
                              "話した",
                              "話します"
                    ],
                    "optionsRomaji": [
                              "hanasu",
                              "hanashite",
                              "hanashita",
                              "hanashimasu"
                    ],
                    "hint": "Potential pattern requires Dictionary form + ことができます.",
                    "english": "I can speak Japanese a little."
          },
          {
                    "id": "bf-15-2",
                    "sentencePrefix": "私の趣味は音楽を",
                    "sentenceSuffix": "ことです。",
                    "sentenceRomaji": "Watashi no shuumi wa ongaku o [ ___ ] koto desu.",
                    "correctWord": "聴く",
                    "correctWordRomaji": "kiku",
                    "options": [
                              "聴く",
                              "聴いて",
                              "聴きます",
                              "聴きたい"
                    ],
                    "optionsRomaji": [
                              "kiku",
                              "kiite",
                              "kikimasu",
                              "kikitai"
                    ],
                    "hint": "Stating hobbies: [Dictionary form] + ことです (\"listening to music\").",
                    "english": "My hobby is listening to music."
          }
],
            grammarPoints: [
              {
                title: 'Ability / Potential: [Verb Dict-form] + ことができます',
                structure: '[Verb Dictionary Form] + ことができます (can do / able to)',
                explanation: 'Turns any verb into a nominalized noun clause with こと and adds できます (can) to state capability.',
                examples: [
                  {
                    japanese: '漢字を読むことができます。',
                    furigana: 'かんじ を よむ こと が できます。',
                    romaji: 'Kanji o yomu koto ga dekimasu.',
                    english: 'I can read Kanji.'
                  },
                  {
                    japanese: 'ピアノを弾くことができますか。',
                    furigana: 'ピアノ を ひく こと が できます か。',
                    romaji: 'Piano o hiku koto ga dekimasu ka.',
                    english: 'Can you play the piano?'
                  }
                ]
              },
              {
                title: 'Describing Hobbies: 私の趣味は [Verb Dict-form] + ことです',
                structure: '私の趣味は [Verb Dict-form] + ことです',
                explanation: 'Expresses your personal hobbies and leisure interests.',
                examples: [
                  {
                    japanese: '私の趣味は音楽を聴くことです。',
                    furigana: 'わたし の しゅみ は おんがく を きく こと です。',
                    romaji: 'Watashi no shumi wa ongaku o kiku koto desu.',
                    english: 'My hobby is listening to music.'
                  }
                ]
              }
            ],
            vocabulary: [
              { kanji: '趣味', furigana: 'しゅみ', romaji: 'shumi', english: 'Hobby', pos: 'Noun' },
              { kanji: '弾く', furigana: 'ひく', romaji: 'hiku', english: 'To play (string/piano)', pos: 'Verb' },
              { kanji: '泳ぐ', furigana: 'およぐ', romaji: 'oyogu', english: 'To swim', pos: 'Verb' },
              { kanji: '歌う', furigana: 'うたう', romaji: 'utau', english: 'To sing', pos: 'Verb' }
            ],
            dialogue: {
              title: 'Talking about Hobbies',
              situation: 'Ken and Sakura share their hobbies.',
              lines: [
                {
                  speaker: 'Sakura',
                  speakerJp: 'さくら',
                  japanese: 'ケンさんの趣味は何ですか。',
                  furigana: 'ケンさん の しゅみ は なん ですか。',
                  romaji: 'Ken-san no shumi wa nan desu ka.',
                  english: 'Ken, what is your hobby?'
                },
                {
                  speaker: 'Ken',
                  speakerJp: 'ケン',
                  japanese: '私の趣味は写真を撮ることです。',
                  furigana: 'わたし の しゅみ は しゃしん を とる こと です。',
                  romaji: 'Watashi no shumi wa shashin o toru koto desu.',
                  english: 'My hobby is taking photographs.'
                }
              ]
            },
            quiz: [
              {
                question: 'How do you say "Can you swim?" (泳ぐ oyogu)?',
                options: ['泳ぐことができますか (Oyogu koto ga dekimasu ka)', '泳ぎますか (Oyogimasu ka)', '泳いでください (Oyoide kudasai)', '泳ぐたいですか (Oyogutai desu ka)'],
                correctIndex: 0,
                explanation: 'Verb dictionary form 泳ぐ + ことができますか asks if someone has the ability to swim.'
              }
            ]
          },
          {
            id: 'lesson-n5-5-4',
            title: 'Lesson 16: Past Experience & Japanese Counters (〜たことがある / 助数詞)',
            japaneseTitle: '第１６課：経験「〜たことがある」と助数詞',
            summary: 'Express lifetime past experiences ("have done before"), list non-exhaustive actions with 〜たり〜たり, and master everyday Japanese counters.',
            readTimeMinutes: 22,
            memoryTip: {
              title: 'The "Been There, Done That" Ta-Form (〜たことがある)',
              explanation: 'To talk about life experiences you have had, turn the verb into the past Ta-form (which conjugates identically to the Te-form!) and add ことがあります ("There is the past experience of doing...")!',
              rhyme: 'Ta-form conjugates just like Te-form! TA KOTO GA ARU = I have experienced it!',
              bulletPoints: [
                '日本へ行ったことがあります (I have been to Japan before).',
                '富士山に登ったことがあります (I have climbed Mount Fuji).',
                'Counters mnemonic: 1=ひとつ, 2=ふたつ, 3=みっつ, 4=よっつ, 5=いつつ, 10=とお.'
              ]
            },
            blankFillExercises: [
          {
                    "id": "bf-16-1",
                    "sentencePrefix": "日本へ",
                    "sentenceSuffix": "ことがありますか。",
                    "sentenceRomaji": "Nihon e [ ___ ] koto ga arimasu ka.",
                    "correctWord": "行った",
                    "correctWordRomaji": "itta",
                    "options": [
                              "行った",
                              "行きます",
                              "行って",
                              "行く"
                    ],
                    "optionsRomaji": [
                              "itta",
                              "ikimasu",
                              "itte",
                              "iku"
                    ],
                    "hint": "Past experience pattern requires Ta-form (past plain) + ことがありますか.",
                    "english": "Have you ever been to Japan?"
          },
          {
                    "id": "bf-16-2",
                    "sentencePrefix": "りんごを",
                    "sentenceSuffix": "買いました。",
                    "sentenceRomaji": "Ringo o [ ___ ] kaimashita.",
                    "correctWord": "二つ",
                    "correctWordRomaji": "futatsu",
                    "options": [
                              "二つ",
                              "二人",
                              "二日",
                              "二本"
                    ],
                    "optionsRomaji": [
                              "futatsu",
                              "futari",
                              "futsuka",
                              "nihon"
                    ],
                    "hint": "General counter for rounded objects/things: 一つ, 二つ (futatsu).",
                    "english": "I bought two apples."
          }
],
            grammarPoints: [
              {
                title: 'Past Experience: [Verb Ta-form] + ことがあります',
                structure: '[Verb Ta-form] + ことがあります (have done) / ありません (never done)',
                explanation: 'Used to talk about whether you have ever had a specific life experience in the past.',
                examples: [
                  {
                    japanese: '富士山に登ったことがあります。',
                    furigana: 'ふじさん に のぼった こと が あります。',
                    romaji: 'Fujisan ni nobotta koto ga arimasu.',
                    english: 'I have climbed Mt. Fuji before.'
                  },
                  {
                    japanese: '寿司を食べたことがありますか。',
                    furigana: 'すし を たべた こと が あります か。',
                    romaji: 'Sushi o tabeta koto ga arimasu ka.',
                    english: 'Have you ever eaten sushi?'
                  }
                ]
              },
              {
                title: 'Essential Counters: 〜人(nin), 〜枚(mai), 〜本(hon), 〜つ(tsu)',
                structure: '[Item] を [Number + Counter] [Verb]',
                explanation: 'Japanese counts objects using specific suffixes depending on shape, people, or nature.',
                examples: [
                  {
                    japanese: 'りんごを二つ買いました。',
                    furigana: 'りんご を ふたつ かいました。',
                    romaji: 'Ringo o futatsu kaimashita.',
                    english: 'I bought two apples.'
                  },
                  {
                    japanese: 'ビールを三本飲みました。',
                    furigana: 'ビール を さんぼん のみました。',
                    romaji: 'Biiru o sanbon nomimashita.',
                    english: 'I drank three bottles/cans of beer.'
                  }
                ]
              }
            ],
            vocabulary: [
              { kanji: '登る', furigana: 'のぼる', romaji: 'noboru', english: 'To climb', pos: 'Verb' },
              { kanji: '一つ', furigana: 'ひとつ', romaji: 'hitotsu', english: 'One (general item)', pos: 'Counter' },
              { kanji: '二つ', furigana: 'ふたつ', romaji: 'futatsu', english: 'Two (general item)', pos: 'Counter' },
              { kanji: '三人', furigana: 'さんにん', romaji: 'sannin', english: 'Three people', pos: 'Counter' }
            ],
            dialogue: {
              title: 'Sharing Travel Experiences',
              situation: 'Ken and Mei talk about foods and places they have experienced in Japan.',
              lines: [
                {
                  speaker: 'Mei',
                  speakerJp: 'めい',
                  japanese: 'ケンさんは日本の納豆を食べたことがありますか。',
                  furigana: 'ケンさん は にほん の なっとう を たべた こと が あります か。',
                  romaji: 'Ken-san wa Nihon no nattou o tabeta koto ga arimasu ka.',
                  english: 'Ken-san, have you ever eaten Japanese natto?'
                },
                {
                  speaker: 'Ken',
                  speakerJp: 'ケン',
                  japanese: 'はい、一度食べたことがあります。美味しかったです！',
                  furigana: 'はい、いちど たべた こと が あります。おいしかった です！',
                  romaji: 'Hai, ichido tabeta koto ga arimasu. Oishikatta desu!',
                  english: 'Yes, I have eaten it once. It was delicious!'
                },
                {
                  speaker: 'Mei',
                  speakerJp: 'めい',
                  japanese: 'すごいですね！京都へ行ったこともありますか。',
                  furigana: 'すごい です ね！きょうと へ いった こと も あります か。',
                  romaji: 'Sugoi desu ne! Kyouto e itta koto mo arimasu ka.',
                  english: 'Impressive! Have you also been to Kyoto?'
                },
                {
                  speaker: 'Ken',
                  speakerJp: 'ケン',
                  japanese: 'はい、先月行きました。お寺を三つ見ましたよ。',
                  furigana: 'はい、せんげつ いきました。おてら を みっつ みました よ。',
                  romaji: 'Hai, sengetsu ikimashita. Otera o mittsu mimashita yo.',
                  english: 'Yes, I went last month. I visited three temples!'
                }
              ]
            },
            quiz: [
              {
                question: 'How do you say "I have been to Kyoto before" (行く iku → 行った itta)?',
                options: ['京都へ行ったことがあります (Kyouto e itta koto ga arimasu)', '京都へ行きました (Kyouto e ikimashita)', '京都へ行きたいです (Kyouto e ikitai desu)', '京都へ行っています (Kyouto e itte imasu)'],
                correctIndex: 0,
                explanation: 'Ta-form (行った) + ことがあります expresses past life experience.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'course-n4',
    level: 'N4',
    title: 'JLPT N4: Elementary Fluency',
    japaneseTitle: '日本語能力試験 N4 初級',
    description: 'Master Te-form (〜て), conditional statements (〜たら, 〜ば), potential verbs (〜られる), and complex multi-clause sentences.',
    badge: 'Elementary',
    lessonsCount: 15,
    estimatedHours: 60,
    kanjiCount: 300,
    vocabCount: 1500,
    grammarCount: 130,
    passingScore: '90 / 180 Points (Overall 50% + sectional benchmarks)',
    examSections: [
      {
        sectionName: 'Language Knowledge (Vocabulary)',
        sectionNameJp: '言語知識（文字・語彙）',
        durationMinutes: 25,
        maxScore: 60,
        description: 'Everyday vocabulary, Kanji orthography and context usage.'
      },
      {
        sectionName: 'Language Knowledge (Grammar) & Reading',
        sectionNameJp: '言語知識（文法）・読解',
        durationMinutes: 55,
        maxScore: 60,
        description: 'Intermediate sentence patterns, passage coherence, and information retrieval.'
      },
      {
        sectionName: 'Listening Comprehension',
        sectionNameJp: '聴解',
        durationMinutes: 35,
        maxScore: 60,
        description: 'Conversational comprehension in classroom, store, and home environments.'
      }
    ],
    modules: [
      {
        id: 'mod-n4-1',
        moduleNumber: 1,
        title: 'Te-Form Conjugation & Applications',
        japaneseTitle: 'て形の活用と表現',
        description: 'Connecting actions, requesting with ~てください, and ongoing state with ~ています.',
        lessons: [
          {
            id: 'lesson-n4-1-1',
            title: 'The Essential Te-Form (〜て)',
            japaneseTitle: 'て形のマスター',
            summary: 'Learn the universal connector in Japanese grammar.',
            readTimeMinutes: 22,
            grammarPoints: [
              {
                title: 'Action Sequence and Requests (〜てください)',
                structure: '[Verb Te-form] + ください',
                explanation: 'Used to politely request someone to perform an action.',
                examples: [
                  {
                    japanese: '日本語で話してください。',
                    furigana: 'にほんご で はなして ください。',
                    romaji: 'Nihongo de hanashite kudasai.',
                    english: 'Please speak in Japanese.'
                  }
                ]
              }
            ],
            vocabulary: [
              { kanji: '話す', furigana: 'はなす', romaji: 'hanasu', english: 'To speak', pos: 'Verb' },
              { kanji: '待つ', furigana: 'まつ', romaji: 'matsu', english: 'To wait', pos: 'Verb' },
              { kanji: '教える', furigana: 'おしえる', romaji: 'oshieru', english: 'To teach', pos: 'Verb' }
            ],
            quiz: [
              {
                question: 'How do you say "Please wait a moment"?',
                options: ['ちょっと待ってください (Chotto matte kudasai)', 'ちょっと待ちます (Chotto machimasu)', 'ちょっと待った (Chotto matta)', '待つください (Matsu kudasai)'],
                correctIndex: 0,
                explanation: '待つ becomes 待って in Te-form, followed by ください.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'course-n3',
    level: 'N3',
    title: 'JLPT N3: Intermediate Bridge',
    japaneseTitle: '日本語能力試験 N3 中級',
    description: 'Bridge the gap from textbook basics to native natural Japanese. Learn passive, causative-passive, nuanced conjunctions, and conversational keigo.',
    badge: 'Intermediate',
    lessonsCount: 18,
    estimatedHours: 90,
    kanjiCount: 650,
    vocabCount: 3750,
    grammarCount: 180,
    passingScore: '95 / 180 Points (Overall 53% + sectional benchmarks)',
    examSections: [
      {
        sectionName: 'Language Knowledge (Vocabulary)',
        sectionNameJp: '言語知識（文字・語彙）',
        durationMinutes: 30,
        maxScore: 60,
        description: 'Nuanced synonyms, orthography, and contextual phrasing.'
      },
      {
        sectionName: 'Language Knowledge (Grammar) & Reading',
        sectionNameJp: '言語知識（文法）・読解',
        durationMinutes: 70,
        maxScore: 60,
        description: 'Complex grammar combinations, thematic essays, and intermediate articles.'
      },
      {
        sectionName: 'Listening Comprehension',
        sectionNameJp: '聴解',
        durationMinutes: 40,
        maxScore: 60,
        description: 'Natural pace conversations with multiple speakers and situational reasoning.'
      }
    ],
    modules: [
      /*
      {
        id: 'mod-n3-1',
        moduleNumber: 1,
        title: 'Nuanced Conjunctions & Modifiers',
        japaneseTitle: '複文とニュアンス表現',
        description: 'Expressions like 〜わけではない, 〜うちに, and 〜ようにする.',
        lessons: [
          {
            id: 'lesson-n3-1-1',
            title: 'Expressing Efforts & Habits (〜ようにする)',
            japaneseTitle: '〜ようにする（努力・習慣）',
            summary: 'How to describe making a conscious effort to do or avoid something.',
            readTimeMinutes: 20,
            grammarPoints: [
              {
                title: 'Verb (Dictionary / Nai Form) + ようにする',
                structure: '[Verb Dict/Nai] + ようにする',
                explanation: 'Expresses making an ongoing conscious effort to maintain a habit.',
                examples: [
                  {
                    japanese: '毎日日本語のニュースを読むようにしています。',
                    furigana: 'まいにち にほんご の ニュース を よむ ように しています。',
                    romaji: 'Mainichi nihongo no nyuusu o yomu you ni shite imasu.',
                    english: 'I make an effort to read Japanese news every day.'
                  }
                ]
              }
            ],
            vocabulary: [
              { kanji: '習慣', furigana: 'しゅうかん', romaji: 'shuukan', english: 'Habit / Custom', pos: 'Noun' },
              { kanji: '努力', furigana: 'どりょく', romaji: 'doryoku', english: 'Effort', pos: 'Noun' }
            ],
            quiz: [
              {
                question: 'What does "甘いものを食べないようにしています" mean?',
                options: ['I make an effort not to eat sweet things', 'I cannot eat sweets', 'I like sweets', 'I must eat sweets'],
                correctIndex: 0,
                explanation: '〜ないようにする indicates a conscious effort to avoid an action.'
              }
            ]
          }
        ]
      }
      */
    ]
  },
  {
    id: 'course-n2',
    level: 'N2',
    title: 'JLPT N2: Advanced Pre-Fluency',
    japaneseTitle: '日本語能力試験 N2 上級',
    description: 'Master advanced professional Japanese, nuanced business idioms, complex written structures, and formal speech patterns used in Japanese workplaces and higher education.',
    badge: 'Advanced',
    lessonsCount: 22,
    estimatedHours: 120,
    kanjiCount: 1000,
    vocabCount: 6000,
    grammarCount: 200,
    passingScore: '90 / 180 Points (Overall 50% + sectional benchmarks)',
    examSections: [
      {
        sectionName: 'Language Knowledge & Reading',
        sectionNameJp: '言語知識（文字・語彙・文法）・読解',
        durationMinutes: 105,
        maxScore: 120,
        description: 'Advanced business articles, editorials, nuanced discourse markers, and academic texts.'
      },
      {
        sectionName: 'Listening Comprehension',
        sectionNameJp: '聴解',
        durationMinutes: 50,
        maxScore: 60,
        description: 'Fast-paced discussions, workplace presentations, and integrated comprehension.'
      }
    ],
    modules: [
      /*
      {
        id: 'mod-n2-1',
        moduleNumber: 1,
        title: 'Formal Expressions & Discourse Markers',
        japaneseTitle: '公的表現と論理展開',
        description: 'Advanced logical expressions such as 〜にすぎない, 〜ざるを得ない, and 〜をめぐって.',
        lessons: [
          {
            id: 'lesson-n2-1-1',
            title: 'Expressing Inevitability (〜ざるを得ない)',
            japaneseTitle: '〜ざるを得ない（不可避・義務）',
            summary: 'Learn how to express having no choice but to do something due to unavoidable circumstances.',
            readTimeMinutes: 22,
            grammarPoints: [
              {
                title: 'Verb (Nai Stem) + ざるを得ない',
                structure: '[Verb Nai-stem] + ざるを得ない (する -> せざるを得ない)',
                explanation: 'Used to state that although one might not want to, given the circumstances, one is compelled or has no choice but to perform an action.',
                examples: [
                  {
                    japanese: '台風の影響で、イベントは中止せざるを得ない。',
                    furigana: 'たいふう の えいきょう で、イベント は ちゅうし せざる を えない。',
                    romaji: 'Taifuu no eikyou de, ibento wa chuushi sezaru o enai.',
                    english: 'Due to the typhoon, we have no choice but to cancel the event.'
                  }
                ]
              }
            ],
            vocabulary: [
              { kanji: '影響', furigana: 'えいきょう', romaji: 'eikyou', english: 'Influence / Effect', pos: 'Noun' },
              { kanji: '中止', furigana: 'ちゅうし', romaji: 'chuushi', english: 'Cancellation / Suspension', pos: 'Noun' },
              { kanji: '判断', furigana: 'はんだん', romaji: 'handan', english: 'Judgment / Decision', pos: 'Noun' }
            ],
            quiz: [
              {
                question: 'What is the correct form of する with 〜ざるを得ない?',
                options: ['せざるを得ない (sezaru o enai)', 'しざるを得ない (shizaru o enai)', 'するざるを得ない (suruzaru o enai)', 'さざるを得ない (sazaru o enai)'],
                correctIndex: 0,
                explanation: 'The irregular verb する changes specifically to せざるを得ない.'
              }
            ]
          }
        ]
      }
      */
    ]
  },
  {
    id: 'course-n1',
    level: 'N1',
    title: 'JLPT N1: Master Fluency & Native Nuance',
    japaneseTitle: '日本語能力試験 N1 最上級',
    description: 'Achieve total mastery of literary Japanese, academic writing, sophisticated nuances, and rare proverbs for complete native-level comprehension and expression.',
    badge: 'Mastery',
    lessonsCount: 26,
    estimatedHours: 160,
    kanjiCount: 2000,
    vocabCount: 10000,
    grammarCount: 250,
    passingScore: '100 / 180 Points (Overall 55% + sectional benchmarks)',
    examSections: [
      {
        sectionName: 'Language Knowledge & Reading',
        sectionNameJp: '言語知識（文字・語彙・文法）・読解',
        durationMinutes: 110,
        maxScore: 120,
        description: 'Profound literary, philosophical, editorial texts, and high-register idiomatic Japanese.'
      },
      {
        sectionName: 'Listening Comprehension',
        sectionNameJp: '聴解',
        durationMinutes: 55,
        maxScore: 60,
        description: 'Complex discussions, lecture presentations, news broadcasts, and rapid dialogue analysis.'
      }
    ],
    modules: [
      /*
      {
        id: 'mod-n1-1',
        moduleNumber: 1,
        title: 'Literary Japanese & Extreme Nuances',
        japaneseTitle: '文語的表現と極致表現',
        description: 'High-register literary grammar like 〜極まりない, 〜を皮切りに, and 〜たるもの.',
        lessons: [
          {
            id: 'lesson-n1-1-1',
            title: 'Expressing Extreme Degrees (〜極まりない / 〜極まる)',
            japaneseTitle: '〜極まりない（極度の感情・状態）',
            summary: 'Learn how to express that a situation or feeling has reached the absolute extreme degree.',
            readTimeMinutes: 25,
            grammarPoints: [
              {
                title: 'Na-Adj / I-Adj Stem + 極まりない',
                structure: '[Na-Adj stem / I-Adj dictionary] + 極まりない / 極まる',
                explanation: 'A formal and literary expression indicating that a state or feeling is utterly extreme, often used for emotional states or strong criticisms.',
                examples: [
                  {
                    japanese: '彼の無責任な態度は、失礼極まりない。',
                    furigana: 'かれ の むせきにん な たいど は、しつれい きわまりない。',
                    romaji: 'Kare no musekinin na taido wa, shitsurei kiwamarinai.',
                    english: 'His irresponsible attitude is extremely impolite and rude.'
                  }
                ]
              }
            ],
            vocabulary: [
              { kanji: '無責任', furigana: 'むせきにん', romaji: 'musekinin', english: 'Irresponsible', pos: 'Na-Adj' },
              { kanji: '態度', furigana: 'たいど', romaji: 'taido', english: 'Attitude / Manner', pos: 'Noun' },
              { kanji: '失礼', furigana: 'しつれい', romaji: 'shitsurei', english: 'Disrespect / Impoliteness', pos: 'Noun' }
            ],
            quiz: [
              {
                question: 'What tone does 〜極まりない carry?',
                options: ['Formal and literary expressing extreme degree', 'Casual slang for everyday chat', 'Childish and informal', 'A soft suggestion'],
                correctIndex: 0,
                explanation: '〜極まりない is a high-register N1 grammar point conveying an extreme emotional or qualitative state.'
              }
            ]
          }
        ]
      }
      */
    ]
  }
];

// 2. KANJI DICTIONARY
export const KANJI_DICTIONARY: KanjiEntry[] = [
  // --- JLPT N5 ---
  {
    id: 'k-n5-1',
    char: '日',
    meaning: 'Sun, Day, Japan',
    onyomi: ['NICHI', 'JITSU'],
    kunyomi: ['hi', '-bi', '-ka'],
    strokes: 4,
    jlpt: 'N5',
    radical: '日 (sun)',
    examples: [
      { word: '日本', reading: 'にほん (nihon)', meaning: 'Japan' },
      { word: '今日', reading: 'きょう (kyou)', meaning: 'Today' },
      { word: '日曜日', reading: 'にちようび (nichiyoubi)', meaning: 'Sunday' }
    ]
  },
  {
    id: 'k-n5-2',
    char: '本',
    meaning: 'Book, Origin, Real',
    onyomi: ['HON'],
    kunyomi: ['moto'],
    strokes: 5,
    jlpt: 'N5',
    radical: '木 (tree)',
    examples: [
      { word: '本', reading: 'ほん (hon)', meaning: 'Book' },
      { word: '本当に', reading: 'ほんとうに (hontouni)', meaning: 'Really / Truly' },
      { word: '本屋', reading: 'ほんや (honya)', meaning: 'Bookstore' }
    ]
  },
  {
    id: 'k-n5-3',
    char: '学',
    meaning: 'Study, Learning, Science',
    onyomi: ['GAKU'],
    kunyomi: ['mana-bu'],
    strokes: 8,
    jlpt: 'N5',
    radical: '子 (child)',
    examples: [
      { word: '学生', reading: 'がくせい (gakusei)', meaning: 'Student' },
      { word: '大学', reading: 'だいがく (daigaku)', meaning: 'University' },
      { word: '学校', reading: 'がっこう (gakkou)', meaning: 'School' }
    ]
  },
  {
    id: 'k-n5-4',
    char: '生',
    meaning: 'Life, Birth, Genuine, Raw',
    onyomi: ['SEI', 'SHOU'],
    kunyomi: ['i-kiru', 'u-mareru', 'nama'],
    strokes: 5,
    jlpt: 'N5',
    radical: '生 (life)',
    examples: [
      { word: '先生', reading: 'せんせい (sensei)', meaning: 'Teacher' },
      { word: '生活', reading: 'せいかつ (seikatsu)', meaning: 'Daily Life' },
      { word: '生ビール', reading: 'なまビール (namabiiru)', meaning: 'Draft beer' }
    ]
  },
  {
    id: 'k-n5-5',
    char: '食',
    meaning: 'Eat, Food, Meal',
    onyomi: ['SHOKU', 'JIKI'],
    kunyomi: ['ta-beru', 'ku-u'],
    strokes: 9,
    jlpt: 'N5',
    radical: '食 (food)',
    examples: [
      { word: '食べる', reading: 'たべる (taberu)', meaning: 'To eat' },
      { word: '食事', reading: 'しょくじ (shokuji)', meaning: 'Meal' },
      { word: '食堂', reading: 'しょくどう (shokudou)', meaning: 'Cafeteria' }
    ]
  },
  {
    id: 'k-n5-6',
    char: '車',
    meaning: 'Car, Vehicle, Wheel',
    onyomi: ['SHA'],
    kunyomi: ['kuruma'],
    strokes: 7,
    jlpt: 'N5',
    radical: '車 (cart)',
    examples: [
      { word: '車', reading: 'くるま (kuruma)', meaning: 'Car' },
      { word: '電車', reading: 'でんしゃ (densha)', meaning: 'Electric train' },
      { word: '自転車', reading: 'じてんしゃ (jitensha)', meaning: 'Bicycle' }
    ]
  },
  {
    id: 'k-n5-7',
    char: '水',
    meaning: 'Water',
    onyomi: ['SUI'],
    kunyomi: ['mizu'],
    strokes: 4,
    jlpt: 'N5',
    radical: '水 (water)',
    examples: [
      { word: '水', reading: 'みず (mizu)', meaning: 'Water' },
      { word: '水曜日', reading: 'すいようび (suiyoubi)', meaning: 'Wednesday' },
      { word: '水泳', reading: 'すいえい (suiei)', meaning: 'Swimming' }
    ]
  },
  {
    id: 'k-n5-8',
    char: '人',
    meaning: 'Person, Human',
    onyomi: ['JIN', 'NIN'],
    kunyomi: ['hito'],
    strokes: 2,
    jlpt: 'N5',
    radical: '人 (person)',
    examples: [
      { word: '日本人', reading: 'にほんじん (nihonjin)', meaning: 'Japanese person' },
      { word: '一人', reading: 'ひとり (hitori)', meaning: 'One person / Alone' },
      { word: '人々', reading: 'ひとびと (hitobito)', meaning: 'People' }
    ]
  },
  {
    id: 'k-n5-9',
    char: '年',
    meaning: 'Year, Age',
    onyomi: ['NEN'],
    kunyomi: ['toshi'],
    strokes: 6,
    jlpt: 'N5',
    radical: '干 (dry)',
    examples: [
      { word: '今年', reading: 'ことし (kotoshi)', meaning: 'This year' },
      { word: '来年', reading: 'らいねん (rainen)', meaning: 'Next year' },
      { word: '毎年', reading: 'まいとし (maitoshi)', meaning: 'Every year' }
    ]
  },
  {
    id: 'k-n5-10',
    char: '大',
    meaning: 'Large, Big, Great',
    onyomi: ['DAI', 'TAI'],
    kunyomi: ['oo-kii'],
    strokes: 3,
    jlpt: 'N5',
    radical: '大 (big)',
    examples: [
      { word: '大きい', reading: 'おおきい (ookii)', meaning: 'Big / Large' },
      { word: '大人', reading: 'おとな (otona)', meaning: 'Adult' },
      { word: '大切', reading: 'たいせつ (taisetsu)', meaning: 'Important' }
    ]
  },
  {
    id: 'k-n5-11',
    char: '中',
    meaning: 'In, Inside, Middle',
    onyomi: ['CHUU'],
    kunyomi: ['naka'],
    strokes: 4,
    jlpt: 'N5',
    radical: '丨 (line)',
    examples: [
      { word: '中', reading: 'なか (naka)', meaning: 'Inside / Middle' },
      { word: '一日中', reading: 'いちにちじゅう (ichinichijuu)', meaning: 'All day long' },
      { word: '中学校', reading: 'ちゅうがっこう (chuugakkou)', meaning: 'Middle school' }
    ]
  },
  {
    id: 'k-n5-12',
    char: '小',
    meaning: 'Small, Little',
    onyomi: ['SHOU'],
    kunyomi: ['chii-sai', 'ko-'],
    strokes: 3,
    jlpt: 'N5',
    radical: '小 (small)',
    examples: [
      { word: '小さい', reading: 'ちいさい (chiisai)', meaning: 'Small / Little' },
      { word: '小学校', reading: 'しょうがっこう (shougakkou)', meaning: 'Elementary school' },
      { word: '小川', reading: 'おがわ (ogawa)', meaning: 'Brook / Stream' }
    ]
  },
  {
    id: 'k-n5-13',
    char: '月',
    meaning: 'Moon, Month',
    onyomi: ['GETSU', 'GATSU'],
    kunyomi: ['tsuki'],
    strokes: 4,
    jlpt: 'N5',
    radical: '月 (moon)',
    examples: [
      { word: '月曜日', reading: 'げつようび (getsuyoubi)', meaning: 'Monday' },
      { word: '今月', reading: 'こんげつ (kongetsu)', meaning: 'This month' },
      { word: '毎月', reading: 'まいつき (maitsuki)', meaning: 'Every month' }
    ]
  },
  {
    id: 'k-n5-14',
    char: '火',
    meaning: 'Fire, Tuesday',
    onyomi: ['KA'],
    kunyomi: ['hi'],
    strokes: 4,
    jlpt: 'N5',
    radical: '火 (fire)',
    examples: [
      { word: '火曜日', reading: 'かようび (kayoubi)', meaning: 'Tuesday' },
      { word: '火山', reading: 'かざん (kazan)', meaning: 'Volcano' },
      { word: '花火', reading: 'はなび (hanabi)', meaning: 'Fireworks' }
    ]
  },
  {
    id: 'k-n5-15',
    char: '木',
    meaning: 'Tree, Wood',
    onyomi: ['MOKU', 'BOKU'],
    kunyomi: ['ki'],
    strokes: 4,
    jlpt: 'N5',
    radical: '木 (tree)',
    examples: [
      { word: '木曜日', reading: 'もくようび (mokuyoubi)', meaning: 'Thursday' },
      { word: '木々', reading: 'きぎ (kigi)', meaning: 'Trees' },
      { word: '大木', reading: 'たいぼく (taiboku)', meaning: 'Large tree' }
    ]
  },
  {
    id: 'k-n5-16',
    char: '金',
    meaning: 'Gold, Money, Friday',
    onyomi: ['KIN', 'KON'],
    kunyomi: ['kane'],
    strokes: 8,
    jlpt: 'N5',
    radical: '金 (gold)',
    examples: [
      { word: 'お金', reading: 'おかね (okane)', meaning: 'Money' },
      { word: '金曜日', reading: 'きんようび (kinyoubi)', meaning: 'Friday' },
      { word: '料金', reading: 'りょうきん (ryoukin)', meaning: 'Fee / Charge' }
    ]
  },
  {
    id: 'k-n5-17',
    char: '土',
    meaning: 'Soil, Earth, Ground, Saturday',
    onyomi: ['DO', 'TO'],
    kunyomi: ['tsuchi'],
    strokes: 3,
    jlpt: 'N5',
    radical: '土 (earth)',
    examples: [
      { word: '土曜日', reading: 'どようび (doyoubi)', meaning: 'Saturday' },
      { word: '土地', reading: 'とち (tochi)', meaning: 'Land / Soil' },
      { word: 'お土産', reading: 'おみやげ (omiyage)', meaning: 'Souvenir' }
    ]
  },
  {
    id: 'k-n5-18',
    char: '円',
    meaning: 'Circle, Yen, Round',
    onyomi: ['EN'],
    kunyomi: ['maru-i'],
    strokes: 4,
    jlpt: 'N5',
    radical: '冂 (enclosure)',
    examples: [
      { word: '千円', reading: 'せんえん (sen\'en)', meaning: '1,000 Yen' },
      { word: '円高', reading: 'えんだか (endaka)', meaning: 'Strong yen' },
      { word: '円形', reading: 'えんけい (enkei)', meaning: 'Circular form' }
    ]
  },

  // --- JLPT N4 ---
  {
    id: 'k-n4-1',
    char: '使',
    meaning: 'Use, Employ, Messenger',
    onyomi: ['SHI'],
    kunyomi: ['tsuka-u'],
    strokes: 8,
    jlpt: 'N4',
    radical: '人 (person)',
    examples: [
      { word: '使う', reading: 'つかう (tsukau)', meaning: 'To use' },
      { word: '使用', reading: 'しよう (shiyou)', meaning: 'Usage' },
      { word: '大使館', reading: 'たいしかん (taishikan)', meaning: 'Embassy' }
    ]
  },
  {
    id: 'k-n4-2',
    char: '始',
    meaning: 'Begin, Start',
    onyomi: ['SHI'],
    kunyomi: ['haji-meru', 'haji-maru'],
    strokes: 8,
    jlpt: 'N4',
    radical: '女 (woman)',
    examples: [
      { word: '始まる', reading: 'はじまる (hajimaru)', meaning: 'To begin' },
      { word: '開始', reading: 'かいし (kaishi)', meaning: 'Commencement' },
      { word: '年始', reading: 'ねんし (nenshi)', meaning: 'Beginning of year' }
    ]
  },
  {
    id: 'k-n4-3',
    char: '帰',
    meaning: 'Return, Go home',
    onyomi: ['KI'],
    kunyomi: ['kae-ru'],
    strokes: 10,
    jlpt: 'N4',
    radical: '巾 (towel)',
    examples: [
      { word: '帰る', reading: 'かえる (kaeru)', meaning: 'To go home' },
      { word: '帰国', reading: 'きこく (kikoku)', meaning: 'Return to one’s country' },
      { word: '日帰り', reading: 'ひがえり (higaeri)', meaning: 'Day trip' }
    ]
  },
  {
    id: 'k-n4-4',
    char: '会',
    meaning: 'Meet, Society, Association',
    onyomi: ['KAI', 'E'],
    kunyomi: ['a-u'],
    strokes: 6,
    jlpt: 'N4',
    radical: '人 (person)',
    examples: [
      { word: '会う', reading: 'あう (au)', meaning: 'To meet' },
      { word: '会社', reading: 'かいしゃ (kaisha)', meaning: 'Company' },
      { word: '会話', reading: 'かいわ (kaiwa)', meaning: 'Conversation' }
    ]
  },
  {
    id: 'k-n4-5',
    char: '社',
    meaning: 'Company, Shrine, Society',
    onyomi: ['SHA'],
    kunyomi: ['yashiro'],
    strokes: 7,
    jlpt: 'N4',
    radical: '示 (altar)',
    examples: [
      { word: '社会', reading: 'しゃかい (shakai)', meaning: 'Society' },
      { word: '社長', reading: 'しゃちょう (shachou)', meaning: 'Company president' },
      { word: '神社', reading: 'じんじゃ (jinja)', meaning: 'Shinto shrine' }
    ]
  },
  {
    id: 'k-n4-6',
    char: '店',
    meaning: 'Shop, Store',
    onyomi: ['TEN'],
    kunyomi: ['mise'],
    strokes: 8,
    jlpt: 'N4',
    radical: '广 (cliff)',
    examples: [
      { word: '店', reading: 'みせ (mise)', meaning: 'Shop / Store' },
      { word: '店員', reading: 'てんいん (ten\'in)', meaning: 'Store clerk' },
      { word: '喫茶店', reading: 'きっさてん (kissaten)', meaning: 'Coffee shop' }
    ]
  },
  {
    id: 'k-n4-7',
    char: '駅',
    meaning: 'Station',
    onyomi: ['EKI'],
    kunyomi: [],
    strokes: 14,
    jlpt: 'N4',
    radical: '馬 (horse)',
    examples: [
      { word: '駅', reading: 'えき (eki)', meaning: 'Station' },
      { word: '駅前', reading: 'えきまえ (ekimae)', meaning: 'In front of station' },
      { word: '駅員', reading: 'えきいん (ekiin)', meaning: 'Station attendant' }
    ]
  },
  {
    id: 'k-n4-8',
    char: '道',
    meaning: 'Road, Path, Way, Street',
    onyomi: ['DOU', 'TOU'],
    kunyomi: ['michi'],
    strokes: 12,
    jlpt: 'N4',
    radical: '辵 (walk)',
    examples: [
      { word: '道', reading: 'みち (michi)', meaning: 'Road / Street' },
      { word: '歩道', reading: 'ほどう (hodou)', meaning: 'Sidewalk' },
      { word: '柔道', reading: 'じゅうどう (juudou)', meaning: 'Judo' }
    ]
  },
  {
    id: 'k-n4-9',
    char: '花',
    meaning: 'Flower, Blossom',
    onyomi: ['KA'],
    kunyomi: ['hana'],
    strokes: 7,
    jlpt: 'N4',
    radical: '艸 (grass)',
    examples: [
      { word: '花', reading: 'はな (hana)', meaning: 'Flower' },
      { word: '花見', reading: 'はなみ (hanami)', meaning: 'Flower viewing' },
      { word: '花屋', reading: 'はなや (hanaya)', meaning: 'Florist' }
    ]
  },
  {
    id: 'k-n4-10',
    char: '空',
    meaning: 'Sky, Empty, Void',
    onyomi: ['KUU'],
    kunyomi: ['sora', 'a-ku', 'kara'],
    strokes: 8,
    jlpt: 'N4',
    radical: '穴 (hole)',
    examples: [
      { word: '空', reading: 'そら (sora)', meaning: 'Sky' },
      { word: '空港', reading: 'くうこう (kuukou)', meaning: 'Airport' },
      { word: '空気', reading: 'くうき (kuuki)', meaning: 'Air / Atmosphere' }
    ]
  },

  /*
  // --- JLPT N3, N2, N1 (Coming Soon) ---
  {
    id: 'k-n3-1',
    char: '受',
    meaning: 'Receive, Accept, Undergo',
    onyomi: ['JU'],
    kunyomi: ['u-keru', 'u-karu'],
    strokes: 8,
    jlpt: 'N3',
    radical: '又 (again)',
    examples: [
      { word: '受ける', reading: 'うける (ukeru)', meaning: 'To receive / take test' },
      { word: '受験', reading: 'じゅけん (juken)', meaning: 'Taking an exam' },
      { word: '受付', reading: 'うけつけ (uketsuke)', meaning: 'Reception desk' }
    ]
  },
  {
    id: 'k-n3-2',
    char: '予',
    meaning: 'In advance, Previous',
    onyomi: ['YO'],
    kunyomi: ['arakaji-me'],
    strokes: 4,
    jlpt: 'N3',
    radical: '亅 (hook)',
    examples: [
      { word: '予定', reading: 'よてい (yotei)', meaning: 'Plan / Schedule' },
      { word: '予約', reading: 'よやく (yoyaku)', meaning: 'Reservation' },
      { word: '予報', reading: 'よほう (yohou)', meaning: 'Forecast' }
    ]
  },
  {
    id: 'k-n3-3',
    char: '宿',
    meaning: 'Lodge, Inn, Dwell',
    onyomi: ['SHUKU'],
    kunyomi: ['yado', 'yado-ru'],
    strokes: 11,
    jlpt: 'N3',
    radical: '宀 (roof)',
    examples: [
      { word: '宿題', reading: 'しゅくだい (shukudai)', meaning: 'Homework' },
      { word: '宿泊', reading: 'しゅくはく (shukuhaku)', meaning: 'Lodging / Accommodation' },
      { word: '新宿', reading: 'しんじゅく (shinjuku)', meaning: 'Shinjuku' }
    ]
  },
  {
    id: 'k-n3-4',
    char: '定',
    meaning: 'Fix, Decide, Establish',
    onyomi: ['TEI', 'JOU'],
    kunyomi: ['sada-meru', 'sada-maru'],
    strokes: 8,
    jlpt: 'N3',
    radical: '宀 (roof)',
    examples: [
      { word: '予定', reading: 'よてい (yotei)', meaning: 'Plan / Schedule' },
      { word: '定食', reading: 'ていしょく (teishoku)', meaning: 'Set meal' },
      { word: '決定', reading: 'けってい (kettei)', meaning: 'Decision' }
    ]
  },
  {
    id: 'k-n3-5',
    char: '経',
    meaning: 'Pass through, Manage, Sutra',
    onyomi: ['KEI', 'KYOU'],
    kunyomi: ['he-ru'],
    strokes: 11,
    jlpt: 'N3',
    radical: '糸 (silk)',
    examples: [
      { word: '経済', reading: 'けいざい (keizai)', meaning: 'Economics' },
      { word: '経験', reading: 'けいけん (keiken)', meaning: 'Experience' },
      { word: '経営', reading: 'けいえい (keiei)', meaning: 'Management' }
    ]
  },
  {
    id: 'k-n3-6',
    char: '済',
    meaning: 'Finish, Settle, Relieve',
    onyomi: ['SAI', 'SEI'],
    kunyomi: ['su-mu', 'su-masu'],
    strokes: 11,
    jlpt: 'N3',
    radical: '水 (water)',
    examples: [
      { word: '経済', reading: 'けいざい (keizai)', meaning: 'Economics' },
      { word: '済む', reading: 'すむ (sumu)', meaning: 'To finish / settle' },
      { word: '返済', reading: 'へんさい (hensai)', meaning: 'Repayment' }
    ]
  },
  {
    id: 'k-n3-7',
    char: '連',
    meaning: 'Connect, Take along, Join',
    onyomi: ['REN'],
    kunyomi: ['tsura-naru', 'tsu-reru'],
    strokes: 10,
    jlpt: 'N3',
    radical: '辵 (walk)',
    examples: [
      { word: '連絡', reading: 'れんらく (renraku)', meaning: 'Contact / Communication' },
      { word: '連休', reading: 'れんきゅう (renkyuu)', meaning: 'Consecutive holidays' },
      { word: '関連', reading: 'かんれん (kanren)', meaning: 'Relation / Relevance' }
    ]
  },
  {
    id: 'k-n3-8',
    char: '絡',
    meaning: 'Entangle, Coil, Connect',
    onyomi: ['RAKU'],
    kunyomi: ['kara-mu'],
    strokes: 12,
    jlpt: 'N3',
    radical: '糸 (silk)',
    examples: [
      { word: '連絡', reading: 'れんらく (renraku)', meaning: 'Contact' },
      { word: '絡む', reading: 'からむ (karamu)', meaning: 'To get entangled' },
      { word: '脈絡', reading: 'みゃくらく (myakuraku)', meaning: 'Coherence / Context' }
    ]
  },

  // --- JLPT N2 ---
  {
    id: 'k-n2-1',
    char: '企',
    meaning: 'Plan, Undertake, Scheme',
    onyomi: ['KI'],
    kunyomi: ['kuwadate-ru'],
    strokes: 6,
    jlpt: 'N2',
    radical: '人 (person)',
    examples: [
      { word: '企業', reading: 'きぎょう (kigyou)', meaning: 'Enterprise / Corporation' },
      { word: '企画', reading: 'きかく (kikaku)', meaning: 'Planning / Project' },
      { word: '企てる', reading: 'くわだてる (kuwadateru)', meaning: 'To scheme / undertake' }
    ]
  },
  {
    id: 'k-n2-2',
    char: '雇',
    meaning: 'Employ, Hire',
    onyomi: ['KO'],
    kunyomi: ['yato-u'],
    strokes: 12,
    jlpt: 'N2',
    radical: '隹 (small bird)',
    examples: [
      { word: '雇用', reading: 'こよう (koyou)', meaning: 'Employment / Hiring' },
      { word: '雇う', reading: 'やとう (yatou)', meaning: 'To employ / hire' },
      { word: '解雇', reading: 'かいこ (kaiko)', meaning: 'Dismissal / Layoff' }
    ]
  },
  {
    id: 'k-n2-3',
    char: '境',
    meaning: 'Boundary, Border, Environment',
    onyomi: ['KYOU', 'KEI'],
    kunyomi: ['sakai'],
    strokes: 14,
    jlpt: 'N2',
    radical: '土 (earth)',
    examples: [
      { word: '環境', reading: 'かんきょう (kankyou)', meaning: 'Environment' },
      { word: '国境', reading: 'こっきょう (kokkyou)', meaning: 'National border' },
      { word: '境遇', reading: 'きょうぐう (kyouguu)', meaning: 'Circumstances' }
    ]
  },
  {
    id: 'k-n2-4',
    char: '績',
    meaning: 'Achievements, Merits, Exploits',
    onyomi: ['SEKI'],
    kunyomi: [],
    strokes: 17,
    jlpt: 'N2',
    radical: '糸 (silk)',
    examples: [
      { word: '業績', reading: 'ぎょうせき (gyouseki)', meaning: 'Business performance' },
      { word: '成績', reading: 'せいせき (seiseki)', meaning: 'Grades / Results' },
      { word: '実績', reading: 'じっせき (jisseki)', meaning: 'Track record' }
    ]
  },
  {
    id: 'k-n2-5',
    char: '測',
    meaning: 'Measure, Gauge, Fathom',
    onyomi: ['SOKU'],
    kunyomi: ['haka-ru'],
    strokes: 12,
    jlpt: 'N2',
    radical: '水 (water)',
    examples: [
      { word: '測定', reading: 'そくてい (sokutei)', meaning: 'Measurement' },
      { word: '予測', reading: 'よそく (yosoku)', meaning: 'Prediction' },
      { word: '推測', reading: 'すいそく (suisoku)', meaning: 'Guess / Conjecture' }
    ]
  },
  {
    id: 'k-n2-6',
    char: '導',
    meaning: 'Guide, Lead, Conduct',
    onyomi: ['DOU'],
    kunyomi: ['michibi-ku'],
    strokes: 15,
    jlpt: 'N2',
    radical: '寸 (inch)',
    examples: [
      { word: '指導', reading: 'しどう (shidou)', meaning: 'Guidance / Coaching' },
      { word: '導入', reading: 'どうにゅう (dounyuu)', meaning: 'Introduction / Installation' },
      { word: '導く', reading: 'みちびく (michibiku)', meaning: 'To guide / lead' }
    ]
  },
  {
    id: 'k-n2-7',
    char: '略',
    meaning: 'Abbreviation, Omission, Strategy',
    onyomi: ['RYAKU'],
    kunyomi: ['hobo', 'oka-su'],
    strokes: 11,
    jlpt: 'N2',
    radical: '田 (rice field)',
    examples: [
      { word: '戦略', reading: 'せんりゃく (senryaku)', meaning: 'Strategy' },
      { word: '省略', reading: 'しょうりゃく (shouryaku)', meaning: 'Omission / Abbreviation' },
      { word: '略語', reading: 'りゃくご (ryakugo)', meaning: 'Abbreviation' }
    ]
  },
  {
    id: 'k-n2-8',
    char: '範',
    meaning: 'Pattern, Example, Scope',
    onyomi: ['HAN'],
    kunyomi: [],
    strokes: 15,
    jlpt: 'N2',
    radical: '竹 (bamboo)',
    examples: [
      { word: '範囲', reading: 'はんい (han\'i)', meaning: 'Scope / Range' },
      { word: '模範', reading: 'もはん (mohan)', meaning: 'Model / Exemplar' },
      { word: '師範', reading: 'しはん (shihan)', meaning: 'Instructor / Master' }
    ]
  },

  // --- JLPT N1 ---
  {
    id: 'k-n1-1',
    char: '極',
    meaning: 'Climax, Extreme, Pole',
    onyomi: ['KYOKU', 'GOKU'],
    kunyomi: ['kiwa-meru', 'kiwa-maru'],
    strokes: 12,
    jlpt: 'N1',
    radical: '木 (tree)',
    examples: [
      { word: '極めて', reading: 'きわめて (kiwamete)', meaning: 'Exceedingly / Extremely' },
      { word: '極端', reading: 'きょくたん (kyokutan)', meaning: 'Extreme' },
      { word: '北極', reading: 'ほっきょく (hokkyoku)', meaning: 'North Pole' }
    ]
  },
  {
    id: 'k-n1-2',
    char: '緻',
    meaning: 'Fine, Minute, Detailed',
    onyomi: ['CHI'],
    kunyomi: ['koma-kayaka'],
    strokes: 15,
    jlpt: 'N1',
    radical: '糸 (silk)',
    examples: [
      { word: '緻密', reading: 'ちみつ (chimitsu)', meaning: 'Precise / Meticulous' },
      { word: '精緻', reading: 'せいち (seichi)', meaning: 'Exquisite / Elaborate' }
    ]
  },
  {
    id: 'k-n1-3',
    char: '凝',
    meaning: 'Congeal, Freeze, Stiff, Concentrate',
    onyomi: ['GYOU'],
    kunyomi: ['ko-ru', 'ko-rasu'],
    strokes: 16,
    jlpt: 'N1',
    radical: '冫 (ice)',
    examples: [
      { word: '凝縮', reading: 'ぎょうしゅく (gyoushuku)', meaning: 'Condensation / Concentration' },
      { word: '凝る', reading: 'こる (koru)', meaning: 'To be stiff / passionate about' },
      { word: '凝固', reading: 'ぎょうこ (gyouko)', meaning: 'Coagulation / Solidification' }
    ]
  },
  {
    id: 'k-n1-4',
    char: '鑑',
    meaning: 'Specimen, Take warning, Learn from',
    onyomi: ['KAN'],
    kunyomi: ['kanga-miru', 'kagami'],
    strokes: 23,
    jlpt: 'N1',
    radical: '金 (gold)',
    examples: [
      { word: '鑑賞', reading: 'かんしょう (kanshou)', meaning: 'Appreciation of art' },
      { word: '鑑定', reading: 'かんてい (kantei)', meaning: 'Appraisal / Judgment' },
      { word: '図鑑', reading: 'ずかん (zukan)', meaning: 'Illustrated book / Field guide' }
    ]
  },
  {
    id: 'k-n1-5',
    char: '曖',
    meaning: 'Obscure, Ambiguous',
    onyomi: ['AI'],
    kunyomi: ['kura-i'],
    strokes: 17,
    jlpt: 'N1',
    radical: '日 (sun)',
    examples: [
      { word: '曖昧', reading: 'あいまい (aimai)', meaning: 'Vague / Ambiguous' },
      { word: '曖昧模糊', reading: 'あいまいもこ (aimaimoko)', meaning: 'Obscure and murky' }
    ]
  },
  {
    id: 'k-n1-6',
    char: '昧',
    meaning: 'Foolish, Dark, Obscure',
    onyomi: ['MAI'],
    kunyomi: ['kura-i'],
    strokes: 9,
    jlpt: 'N1',
    radical: '日 (sun)',
    examples: [
      { word: '曖昧', reading: 'あいまい (aimai)', meaning: 'Vague / Ambiguous' },
      { word: '三昧', reading: 'ざんまい (zanmai)', meaning: 'Absorption in / Indulgence' }
    ]
  },
  {
    id: 'k-n1-7',
    char: '葛',
    meaning: 'Arrowroot, Kudzu vine, Complication',
    onyomi: ['KATSU'],
    kunyomi: ['kuzu', 'tsuzura'],
    strokes: 12,
    jlpt: 'N1',
    radical: '艸 (grass)',
    examples: [
      { word: '葛藤', reading: 'かっとう (kattou)', meaning: 'Internal conflict / Dilemma' },
      { word: '葛餅', reading: 'くずもち (kuzumochi)', meaning: 'Kudzu starch cake' }
    ]
  },
  {
    id: 'k-n1-8',
    char: '憂',
    meaning: 'Grief, Sorrow, Melancholy, Distress',
    onyomi: ['YUU'],
    kunyomi: ['ure-eru', 'u-i'],
    strokes: 15,
    jlpt: 'N1',
    radical: '心 (heart)',
    examples: [
      { word: '憂鬱', reading: 'ゆううつ (yuuutsu)', meaning: 'Melancholy / Depression' },
      { word: '憂慮', reading: 'ゆうりょ (yuuryo)', meaning: 'Deep concern / Anxiety' },
      { word: '一喜一憂', reading: 'いっきいちゆう (ikkiichiyuu)', meaning: 'Swinging between joy and sorrow' }
    ]
  }
  */
];

// 3. GRAMMAR LIBRARY (Comprehensive 95 JLPT N5 patterns + N4 patterns)
export { GRAMMAR_LIBRARY } from './grammarData';

// 4. SITUATIONAL & ANIME DIALOGUES (Extracted to dedicated animeData.ts)
export { DIALOGUES, ANIME_DIALOGUES, ANIME_CATEGORIES } from './animeData';

// 5. JLPT MOCK PRACTICE TEST QUESTIONS
export const JLPT_MOCK_EXAM = [
  {
    "id": "q-n5-1",
    "section": "Vocabulary (文字・語彙)",
    "level": "N5",
    "question": "次の下線の言葉の読み方として最もよいものを一つ選びなさい。\n「私の【先生】は日本人です。」",
    "options": [
      "せんせい (sensei)",
      "がくせい (gakusei)",
      "いしゃ (isha)",
      "かいしゃいん (kaishain)"
    ],
    "correctIndex": 0,
    "explanation": "【先生】is read as「せんせい」(sensei), meaning teacher or instructor."
  },
  {
    "id": "q-n5-2",
    "section": "Vocabulary (文字・語彙)",
    "level": "N5",
    "question": "次の下線の言葉の読み方として最もよいものを一つ選びなさい。\n「毎朝冷たい【水】を一杯飲みます。」",
    "options": [
      "みず (mizu)",
      "おちゃ (ocha)",
      "さけ (sake)",
      "ゆ (yu)"
    ],
    "correctIndex": 0,
    "explanation": "【水】is read as「みず」(mizu), meaning water."
  },
  {
    "id": "q-n5-3",
    "section": "Vocabulary (文字・語彙)",
    "level": "N5",
    "question": "次の下線の言葉の読み方として最もよいものを一つ選びなさい。\n「図書館で新しい【本】を借りました。」",
    "options": [
      "ほん (hon)",
      "き (ki)",
      "ノート (nooto)",
      "かみ (kami)"
    ],
    "correctIndex": 0,
    "explanation": "【本】is read as「ほん」(hon), meaning book."
  },
  {
    "id": "q-n5-4",
    "section": "Vocabulary (文字・語彙)",
    "level": "N5",
    "question": "次のひらがなの言葉の漢字として正しいものを一つ選びなさい。\n「父は青い【くるま】を買いました。」",
    "options": [
      "車",
      "東",
      "電",
      "校"
    ],
    "correctIndex": 0,
    "explanation": "「くるま」(car / vehicle) is written with the kanji「車」."
  },
  {
    "id": "q-n5-5",
    "section": "Vocabulary (文字・語彙)",
    "level": "N5",
    "question": "次のひらがなの言葉の漢字として正しいものを一つ選びなさい。\n「昨日は【あめ】がたくさん降りました。」",
    "options": [
      "雨",
      "雪",
      "雲",
      "電"
    ],
    "correctIndex": 0,
    "explanation": "「あめ」(rain) is written with the kanji「雨」."
  },
  {
    "id": "q-n5-6",
    "section": "Vocabulary (文字・語彙)",
    "level": "N5",
    "question": "（＿＿＿）に入れるのに最もよいものを一つ選びなさい。\n「雨が降っていますから、（＿＿＿）を差して行きましょう。」",
    "options": [
      "かさ",
      "くつ",
      "めがね",
      "ぼうし"
    ],
    "correctIndex": 0,
    "explanation": "You open/hold an umbrella「かさ」(kasa) when it rains:「かさをさす」(to hold an umbrella)."
  },
  {
    "id": "q-n5-7",
    "section": "Vocabulary (文字・語彙)",
    "level": "N5",
    "question": "（＿＿＿）に入れるのに最もよいものを一つ選びなさい。\n「駅の窓口で電車の（＿＿＿）を二枚買いました。」",
    "options": [
      "きっぷ",
      "きって",
      "はがき",
      "ふうとう"
    ],
    "correctIndex": 0,
    "explanation": "A train ticket is「きっぷ」(kippu). (きって is a postage stamp)."
  },
  {
    "id": "q-n5-8",
    "section": "Vocabulary (文字・語彙)",
    "level": "N5",
    "question": "下線の文とだいたい同じ意味の文を一つ選びなさい。\n「昨日は学校が【休みでした】。」",
    "options": [
      "昨日は学校がありませんでした。",
      "昨日は学校へ行きました。",
      "昨日は学校が忙しかったです。",
      "昨日は学校で勉強しました。"
    ],
    "correctIndex": 0,
    "explanation": "「学校が休みでした」(school was on break/closed) has the same meaning as「学校がありませんでした」(there was no school)."
  },
  {
    "id": "q-n5-9",
    "section": "Grammar (文法)",
    "level": "N5",
    "question": "（＿＿＿）に入れるのに最もよいものを一つ選びなさい。\n「田中さんは明日東京（＿＿＿）行きます。」",
    "options": [
      "へ",
      "を",
      "が",
      "で"
    ],
    "correctIndex": 0,
    "explanation": "The particle「へ」(pronounced 'e') indicates destination or direction of travel:「東京へ行きます」(I am going to Tokyo)."
  },
  {
    "id": "q-n5-10",
    "section": "Grammar (文法)",
    "level": "N5",
    "question": "（＿＿＿）に入れるのに最もよいものを一つ選びなさい。\n「公園に犬が二匹（＿＿＿）。」",
    "options": [
      "います",
      "あります",
      "します",
      "きます"
    ],
    "correctIndex": 0,
    "explanation": "For living creatures (animals, people), the existence verb「います」(imasu) is used. (あります is for inanimate objects)."
  },
  {
    "id": "q-n5-11",
    "section": "Grammar (文法)",
    "level": "N5",
    "question": "（＿＿＿）に入れるのに最もよいものを一つ選びなさい。\n「私は箸（＿＿＿）ご飯を食べます。」",
    "options": [
      "で",
      "に",
      "を",
      "と"
    ],
    "correctIndex": 0,
    "explanation": "The particle「で」indicates the tool or means:「箸で」(with chopsticks)."
  },
  {
    "id": "q-n5-12",
    "section": "Grammar (文法)",
    "level": "N5",
    "question": "（＿＿＿）に入れるのに最もよいものを一つ選びなさい。\n「昨日の映画はあまり（＿＿＿）。」",
    "options": [
      "面白くなかったです",
      "面白いでした",
      "面白くないでした",
      "面白いかったです"
    ],
    "correctIndex": 0,
    "explanation": "Past negative of i-adjectives: drop い and add くなかったです ->「面白くなかったです」(was not interesting)."
  },
  {
    "id": "q-n5-13",
    "section": "Grammar (文法)",
    "level": "N5",
    "question": "（＿＿＿）に入れるのに最もよいものを一つ選びなさい。\n「すみません、この漢字の読み方を（＿＿＿）ください。」",
    "options": [
      "教えて",
      "教えって",
      "教える",
      "教えた"
    ],
    "correctIndex": 0,
    "explanation": "Polite request: Verb [Te-form] + ください. Group 2 verb 教える ->「教えてください」(please teach me)."
  },
  {
    "id": "q-n5-14",
    "section": "Grammar (文法)",
    "level": "N5",
    "question": "（＿＿＿）に入れるのに最もよいものを一つ選びなさい。\n「部屋が暗いですから、電気を（＿＿＿）もいいですか。」",
    "options": [
      "つけて",
      "つく",
      "つきます",
      "つけない"
    ],
    "correctIndex": 0,
    "explanation": "Asking for permission: Verb [Te-form] + もいいですか ->「つけてもいいですか」(May I turn on the light?)."
  },
  {
    "id": "q-n5-15",
    "section": "Grammar (文法)",
    "level": "N5",
    "question": "（＿＿＿）に入れるのに最もよいものを一つ選びなさい。\n「日曜日、友達（＿＿＿）デパートへ買い物に行きました。」",
    "options": [
      "と",
      "に",
      "を",
      "へ"
    ],
    "correctIndex": 0,
    "explanation": "Particle「と」indicates accompaniment (\"together with\"):「友達と」(with a friend)."
  },
  {
    "id": "q-n5-16",
    "section": "Grammar (文法)",
    "level": "N5",
    "question": "（＿＿＿）に入れるのに最もよいものを一つ選びなさい。\n「喉が渇きましたから、冷たいジュースが（＿＿＿）です。」",
    "options": [
      "飲みたい",
      "飲むたい",
      "飲みたく",
      "飲むたいな"
    ],
    "correctIndex": 0,
    "explanation": "Desire to perform an action: Verb [Masu-stem] + たい -> 飲みます ->「飲みたいです」(I want to drink)."
  },
  {
    "id": "q-n5-17",
    "section": "Grammar (文法)",
    "level": "N5",
    "question": "（＿＿＿）に入れるのに最もよいものを一つ選びなさい。\n「図書館では大きな声で（＿＿＿）はいけません。」",
    "options": [
      "話して",
      "話す",
      "話し",
      "話した"
    ],
    "correctIndex": 0,
    "explanation": "Prohibition: Verb [Te-form] + はいけません ->「話してはいけません」(You must not speak)."
  },
  {
    "id": "q-n5-18",
    "section": "Grammar (文法)",
    "level": "N5",
    "question": "次の文の ★ に入る最もよいものを一つ選びなさい。\n「机の ＿＿ ＿＿ ★ ＿＿ あります。」\n1: ペンが  2: の  3: 上  4: に",
    "options": [
      "4 (に)",
      "3 (上)",
      "2 (の)",
      "1 (ペンが)"
    ],
    "correctIndex": 0,
    "explanation": "Correct order:「机の [3: 上] [2: の] ... wait:「机の [3: 上] [4: に] ★[1: ペンが] あります」or「机の [3: 上] [4: に] ★[1: ペンが] あります。」-> Let's arrange: 机の [3: 上] [4: に] ★[1: ペンが] あります -> Position 3 is 1 (ペンが)."
  },
  {
    "id": "q-n5-19",
    "section": "Reading (読解)",
    "level": "N5",
    "question": "【メモ】\n木村さんへ\n今日の午後、山田さんから電話がありました。「明日の映画の時間は午後3時ではなく、午後4時に変わりました」と言っていました。映画館の前で3時45分に待っているそうです。\n田中より\n\n問：木村さんは明日何時にどこへ行きますか。",
    "options": [
      "午後3時45分に映画館の前へ行く。",
      "午後3時に映画館の前へ行く。",
      "午後4時に山田さんの家へ行く。",
      "今日の午後に田中さんの部屋へ行く。"
    ],
    "correctIndex": 0,
    "explanation": "The note explicitly states that Yamada said he will be waiting in front of the movie theater at 3:45 PM (3時45分に待っているそうです)."
  },
  {
    "id": "q-n5-20",
    "section": "Reading (読解)",
    "level": "N5",
    "question": "【看板】\n「さくらパン屋」\n営業時間：あさ 8:00 〜 よる 7:00\n定休日：まいしゅう 水曜日\n※ 焼きたてパンは毎日11:30と15:30に出ます。\n\n問：このパン屋さんが休みの日はいつですか。",
    "options": [
      "水曜日",
      "月曜日",
      "土曜日",
      "日曜日"
    ],
    "correctIndex": 0,
    "explanation": "The sign explicitly says:「定休日：まいしゅう 水曜日」(Regular holiday: Every Wednesday)."
  },
  {
    "id": "q-n5-21",
    "section": "Reading (読解)",
    "level": "N5",
    "question": "【短い手紙】\nお母さんへ\n東京は毎日とても暑いです。私は元気に日本語学校へ通っています。クラスにはアメリカやベトナムの友達がたくさんいます。来週の日曜日に手紙と一緒に東京の写真を送ります。\nケンより\n\n問：ケンさんは来週の日曜日に何をしますか。",
    "options": [
      "お母さんに写真と手紙を送る。",
      "アメリカへ旅行に行く。",
      "日本語学校を休む。",
      "東京から実家へ帰る。"
    ],
    "correctIndex": 0,
    "explanation": "Ken wrote:「来週の日曜日に手紙と一緒に東京の写真を送ります」(Next Sunday I will send Tokyo photos along with a letter)."
  },
  {
    "id": "q-n5-22",
    "section": "Reading (読解)",
    "level": "N5",
    "question": "【教室の注意】\n授業が終わったら、黒板をきれいに消してください。エアコンと教室の電気を消して、窓を閉めてから帰ってください。ゴミは教室に置かないで、廊下のごみ箱へ捨ててください。\n\n問：学生は帰る前に何をしなければなりませんか。",
    "options": [
      "電気やエアコンを消して、窓を閉める。",
      "ゴミを教室の机の上に置いて帰る。",
      "黒板に明日の予定を書く。",
      "廊下の窓を開けておく。"
    ],
    "correctIndex": 0,
    "explanation": "The notice specifies:「エアコンと教室の電気を消して、窓を閉めてから帰ってください」(Turn off air conditioning and lights, close the windows before leaving)."
  },
  {
    "id": "q-n5-23",
    "section": "Reading (読解)",
    "level": "N5",
    "question": "【私の部屋】\n私の部屋は狭いですが、明るくて静かです。窓の近くに机と椅子があります。机の上にはパソコンと辞書が置いてあります。壁には大好きな日本の電車のポスターが貼ってあります。\n\n問：筆者の机の上には何がありますか。",
    "options": [
      "パソコンと辞書",
      "電車のポスター",
      "テレビと時計",
      "本とノートだけ"
    ],
    "correctIndex": 0,
    "explanation": "The text states:「机の上にはパソコンと辞書が置いてあります」(On top of the desk are placed a computer and a dictionary)."
  },
  {
    "id": "q-n5-24",
    "section": "Reading (読解)",
    "level": "N5",
    "question": "【日記】\n8月10日（土曜日）晴れ\n今日は朝早く起きて、友達の李さんと海へ行きました。海の水は冷たくて気持ちがよかったです。お昼に海岸の近くの店で魚の天ぷらを食べました。とても楽しかったです。\n\n問：筆者は今日のお昼に何を食べましたか。",
    "options": [
      "魚の天ぷら",
      "肉うどん",
      "野菜サラダ",
      "おにぎり"
    ],
    "correctIndex": 0,
    "explanation": "The diary says:「お昼に海岸の近くの店で魚の天ぷらを食べました」(For lunch I ate fish tempura at a restaurant near the coast)."
  },
  {
    "id": "q-n5-25",
    "section": "Listening (聴解)",
    "level": "N5",
    "question": "【毎日の挨拶】\n朝、学校で先生に会いました。何と言いますか。",
    "options": [
      "おはようございます (Ohayou gozaimasu)",
      "こんばんは (Konbanwa)",
      "さようなら (Sayounara)",
      "おやすみなさい (Oyasuminasai)"
    ],
    "correctIndex": 0,
    "explanation": "「おはようございます」is the polite greeting used in the morning."
  },
  {
    "id": "q-n5-26",
    "section": "Listening (聴解)",
    "level": "N5",
    "question": "【食事の挨拶】\nご飯を食べる前に、手を合わせて何と言いますか。",
    "options": [
      "いただきます (Itadakimasu)",
      "ごちそうさまでした (Gochisousama deshita)",
      "いってきます (Ittekimasu)",
      "ただいま (Tadaima)"
    ],
    "correctIndex": 0,
    "explanation": "「いただきます」(Itadakimasu) is the customary phrase spoken before eating."
  },
  {
    "id": "q-n5-27",
    "section": "Listening (聴解)",
    "level": "N5",
    "question": "【外出の挨拶】\n家を出て出かけるとき、家に残る家族に何と言いますか。",
    "options": [
      "行ってきます (Ittekimasu)",
      "行ってらっしゃい (Itterasshai)",
      "お帰りなさい (Okaerinasai)",
      "はじめまして (Hajimemashite)"
    ],
    "correctIndex": 0,
    "explanation": "The person leaving says「行ってきます」(Ittekimasu - I'm leaving and will return)."
  },
  {
    "id": "q-n5-28",
    "section": "Listening (聴解)",
    "level": "N5",
    "question": "【感謝への返答】\n友達に「ありがとう」とお礼を言われました。何と答えますか。",
    "options": [
      "どういたしまして (Dou itashimashite)",
      "ごめんなさい (Gomennasai)",
      "失礼します (Shitsurei shimasu)",
      "お邪魔します (Ojama shimasu)"
    ],
    "correctIndex": 0,
    "explanation": "「どういたしまして」(You are welcome) is the natural reply to「ありがとう」(Thank you)."
  },
  {
    "id": "q-n5-29",
    "section": "Listening (聴解)",
    "level": "N5",
    "question": "【お別れの挨拶】\n授業が終わって先生の部屋を出るとき、何と言いますか。",
    "options": [
      "失礼します (Shitsurei shimasu)",
      "いただきます (Itadakimasu)",
      "お大事に (Odaiji ni)",
      "お邪魔しました (Ojama shimashita)"
    ],
    "correctIndex": 0,
    "explanation": "「失礼します / 失礼しました」(Excuse me / Pardon my leaving) is the polite phrase when entering or leaving a teacher's or superior's room."
  },
  {
    "id": "q-n5-30",
    "section": "Listening (聴解)",
    "level": "N5",
    "question": "【電話の応答】\n電話に出たとき、最初に何と言いますか。",
    "options": [
      "もしもし (Moshimoshi)",
      "こんにちは (Konnichiwa)",
      "はい、そうです (Hai, sou desu)",
      "どうも (Doumo)"
    ],
    "correctIndex": 0,
    "explanation": "「もしもし」(Moshimoshi) is the standard Japanese greeting when answering the telephone."
  },
  {
    "id": "q-n4-1",
    "section": "Vocabulary (文字・語彙)",
    "level": "N4",
    "question": "次の下線の言葉の読み方として最もよいものを一つ選びなさい。\n「あの店を【案内】してもらいました。」",
    "options": [
      "あんない (annai)",
      "あんないち (annaichi)",
      "おくない (okunai)",
      "あんり (anri)"
    ],
    "correctIndex": 0,
    "explanation": "【案内】is read as「あんない」(annai), meaning to guide or show around."
  },
  {
    "id": "q-n4-2",
    "section": "Vocabulary (文字・語彙)",
    "level": "N4",
    "question": "次の下線の言葉の読み方として最もよいものを一つ選びなさい。\n「日本で様々な【経験】を積みました。」",
    "options": [
      "けいけん (keiken)",
      "けいげん (keigen)",
      "きょうけん (kyouken)",
      "きけん (kiken)"
    ],
    "correctIndex": 0,
    "explanation": "【経験】is read as「けいけん」(keiken), meaning experience."
  },
  {
    "id": "q-n4-3",
    "section": "Vocabulary (文字・語彙)",
    "level": "N4",
    "question": "次の下線の言葉の読み方として最もよいものを一つ選びなさい。\n「この機械の操作はとても【複雑】です。」",
    "options": [
      "ふくざつ (fukuzatsu)",
      "ふくざっ (fukuzatsu)",
      "ふくさつ (fukusatsu)",
      "ほうざつ (houzatsu)"
    ],
    "correctIndex": 0,
    "explanation": "【複雑】is read as「ふくざつ」(fukuzatsu), meaning complicated or complex."
  },
  {
    "id": "q-n4-4",
    "section": "Vocabulary (文字・語彙)",
    "level": "N4",
    "question": "次のひらがなの言葉の漢字として正しいものを一つ選びなさい。\n「壊れた時計を【なおしました】。」",
    "options": [
      "直しました",
      "治しました",
      "消しました",
      "直れました"
    ],
    "correctIndex": 0,
    "explanation": "For fixing/repairing inanimate objects or machines,「直す」(なおす) is used. (「治す」is used for illnesses)."
  },
  {
    "id": "q-n4-5",
    "section": "Vocabulary (文字・語彙)",
    "level": "N4",
    "question": "次のひらがなの言葉の漢字として正しいものを一つ選びなさい。\n「駅前にたくさんの人が【あつまりました】。」",
    "options": [
      "集まりました",
      "進まりました",
      "住まりました",
      "焦まりました"
    ],
    "correctIndex": 0,
    "explanation": "To gather or congregate is「集まる」(あつまる)."
  },
  {
    "id": "q-n4-6",
    "section": "Vocabulary (文字・語彙)",
    "level": "N4",
    "question": "（＿＿＿）に入れるのに最もよいものを一つ選びなさい。\n「どうぞ（＿＿＿）しないで、好きなものを召し上がってください。」",
    "options": [
      "遠慮",
      "案内",
      "相談",
      "賛成"
    ],
    "correctIndex": 0,
    "explanation": "「遠慮しないで」(enryo shinai de) means \"without hesitating / please don't hold back\"."
  },
  {
    "id": "q-n4-7",
    "section": "Vocabulary (文字・語彙)",
    "level": "N4",
    "question": "（＿＿＿）に入れるのに最もよいものを一つ選びなさい。\n「この靴は私の足の大きさに（＿＿＿）合っています。」",
    "options": [
      "ぴったり",
      "すっかり",
      "がっかり",
      "うっかり"
    ],
    "correctIndex": 0,
    "explanation": "「ぴったり」(pittari) means a perfect fit or exactly right."
  },
  {
    "id": "q-n4-8",
    "section": "Vocabulary (文字・語彙)",
    "level": "N4",
    "question": "下線の文とだいたい同じ意味の文を一つ選びなさい。\n「彼は【具合が悪そう】です。」",
    "options": [
      "気分が悪そうです。",
      "機嫌がよさそうです。",
      "忙しそうです。",
      "暇そうです。"
    ],
    "correctIndex": 0,
    "explanation": "「具合が悪い」(guai ga warui) and「気分が悪い」(kibun ga warui) both mean feeling unwell physically."
  },
  {
    "id": "q-n4-9",
    "section": "Grammar (文法)",
    "level": "N4",
    "question": "（＿＿＿）に入れるのに最もよいものを一つ選びなさい。\n「雨が降って（＿＿＿）、サッカーの試合は中止になりませんでした。」",
    "options": [
      "いても",
      "いたら",
      "いれば",
      "いくと"
    ],
    "correctIndex": 0,
    "explanation": "〜ても expresses concession (\"Even though / Although\").「降っていても」(Even though it was raining)."
  },
  {
    "id": "q-n4-10",
    "section": "Grammar (文法)",
    "level": "N4",
    "question": "（＿＿＿）に入れるのに最もよいものを一つ選びなさい。\n「私は電車の中で足（＿＿＿）踏まれて痛かったです。」",
    "options": [
      "を",
      "に",
      "が",
      "で"
    ],
    "correctIndex": 0,
    "explanation": "In the suffering passive (迷惑の受身), the victim takes は, the perpetrator takes に, and the body part takes を (足をふまれた)."
  },
  {
    "id": "q-n4-11",
    "section": "Grammar (文法)",
    "level": "N4",
    "question": "（＿＿＿）に入れるのに最もよいものを一つ選びなさい。\n「母は弟に部屋を（＿＿＿）。」",
    "options": [
      "掃除させました",
      "掃除されました",
      "掃除してもらいました",
      "掃除しました"
    ],
    "correctIndex": 0,
    "explanation": "Causative form: Mother made/let her son clean the room -> [Person に] + [Verb 使役形] (掃除させました)."
  },
  {
    "id": "q-n4-12",
    "section": "Grammar (文法)",
    "level": "N4",
    "question": "（＿＿＿）に入れるのに最もよいものを一つ選びなさい。\n「先生、その本をお読み（＿＿＿）か。」",
    "options": [
      "になりました",
      "にしました",
      "にいただきました",
      "にいらっしゃいました"
    ],
    "correctIndex": 0,
    "explanation": "Respectful honorific form (尊敬語): お + Masu-stem + になる -> お読みになりました."
  },
  {
    "id": "q-n4-13",
    "section": "Grammar (文法)",
    "level": "N4",
    "question": "（＿＿＿）に入れるのに最もよいものを一つ選びなさい。\n「春（＿＿＿）、桜の花が一斉に咲き始めます。」",
    "options": [
      "になると",
      "になれば",
      "になったら",
      "にするなら"
    ],
    "correctIndex": 0,
    "explanation": "「〜と」is used for natural phenomena and inevitable seasonal transitions: 春になると (when spring comes)."
  },
  {
    "id": "q-n4-14",
    "section": "Grammar (文法)",
    "level": "N4",
    "question": "（＿＿＿）に入れるのに最もよいものを一つ選びなさい。\n「風邪を引かない（＿＿＿）、暖かい服を着て出かけました。」",
    "options": [
      "ように",
      "ために",
      "ようにして",
      "ことによって"
    ],
    "correctIndex": 0,
    "explanation": "「Verb[Negative] + ように」expresses acting so that an undesirable situation does not happen (\"so that I wouldn't catch a cold\")."
  },
  {
    "id": "q-n4-15",
    "section": "Grammar (文法)",
    "level": "N4",
    "question": "（＿＿＿）に入れるのに最もよいものを一つ選びなさい。\n「日本語で手紙が書ける（＿＿＿）なりたいです。」",
    "options": [
      "ように",
      "ために",
      "ことに",
      "そうに"
    ],
    "correctIndex": 0,
    "explanation": "「Potential Verb + ようになる」expresses acquiring the ability to do something."
  },
  {
    "id": "q-n4-16",
    "section": "Grammar (文法)",
    "level": "N4",
    "question": "（＿＿＿）に入れるのに最もよいものを一つ選びなさい。\n「田中さんは今会議中ですから、電話に出られない（＿＿＿）です。」",
    "options": [
      "はず",
      "つもり",
      "予定",
      "とおり"
    ],
    "correctIndex": 0,
    "explanation": "「〜はずです」(hazu desu) expresses logical deduction/expectation based on facts (\"he should be unable to answer the phone\")."
  },
  {
    "id": "q-n4-17",
    "section": "Grammar (文法)",
    "level": "N4",
    "question": "（＿＿＿）に入れるのに最もよいものを一つ選びなさい。\n「このケーキは今焼けた（＿＿＿）だから、まだ温かいです。」",
    "options": [
      "ばかり",
      "ところ",
      "はず",
      "わけ"
    ],
    "correctIndex": 0,
    "explanation": "「Verb[Ta-form] + ばかり」means \"has just finished doing\" (psychological freshness)."
  },
  {
    "id": "q-n4-18",
    "section": "Grammar (文法)",
    "level": "N4",
    "question": "次の文の ★ に入る最もよいものを一つ選びなさい。\n「毎日 ＿＿ ＿＿ ★ ＿＿ 上手になりません。」\n1: 練習しても  2: ほど  3: 思っている  4: なかなか",
    "options": [
      "2 (ほど)",
      "1 (練習しても)",
      "4 (なかなか)",
      "3 (思っている)"
    ],
    "correctIndex": 0,
    "explanation": "Correct order:「毎日 [1: 練習しても] [3: 思っている] ★[2: ほど] [4: なかなか] 上手になりません。」-> Star is position 3 (2: ほど)."
  },
  {
    "id": "q-n4-19",
    "section": "Reading (読解)",
    "level": "N4",
    "question": "【お知らせ】\n図書館は館内清掃のため、来週月曜日は終日休館となります。本の返却は正面入り口横の「返却ポスト」をご利用ください。ただし、DVDやCDは破損の恐れがあるためポストに入れず、火曜日以降にカウンターへ直接お持ちください。\n\n問：DVDを返却したい人はどうすればよいですか。",
    "options": [
      "火曜日以降にカウンターへ直接持参する。",
      "月曜日に返却ポストに入れる。",
      "月曜日に正面入り口の受付へ渡す。",
      "郵送で図書館へ送る。"
    ],
    "correctIndex": 0,
    "explanation": "The passage clearly states:「DVDやCDは破損の恐れがあるためポストに入れず、火曜日以降にカウンターへ直接お持ちください」(Do not put in post box; bring directly to counter from Tuesday onward)."
  },
  {
    "id": "q-n4-20",
    "section": "Reading (読解)",
    "level": "N4",
    "question": "【メール】\n佐藤さんへ\nお疲れ様です。明日のミーティングの場所が変更になりました。会議室Aではなく、3階の第2会議室で行います。開始時間は予定どおり午後2時からです。資料は事前に印刷してお持ちいただくようお願いいたします。\n鈴木\n\n問：佐藤さんが明日しなければならないことは何ですか。",
    "options": [
      "資料を自分で印刷して、午後2時に第2会議室へ行く。",
      "午後2時に会議室Aへ資料を取りに行く。",
      "会議の時間を変更するために鈴木さんに連絡する。",
      "3階で資料を鈴木さんからもらう。"
    ],
    "correctIndex": 0,
    "explanation": "The room was changed to 3rd floor Meeting Room 2, at 2 PM, and attendees must print and bring materials beforehand."
  },
  {
    "id": "q-n4-21",
    "section": "Reading (読解)",
    "level": "N4",
    "question": "【短文読解】\n日本へ来て半年が経ちました。最初はスーパーでの買い物も緊張しましたが、店員さんの親切な対応のおかげで、今では一人で何でも買えるようになりました。特に季節ごとの果物を選ぶのが日々の楽しみになっています。\n\n問：筆者の現在の様子として正しいものはどれですか。",
    "options": [
      "スーパーでの買い物に慣れて、果物を選ぶのを楽しんでいる。",
      "まだ店員と話すのが怖くて買い物ができない。",
      "日本の果物が高すぎて何も買えない。",
      "一人で買い物に行くのが嫌いである。"
    ],
    "correctIndex": 0,
    "explanation": "The author states they can now buy anything alone thanks to kind clerks and enjoys picking seasonal fruits."
  },
  {
    "id": "q-n4-22",
    "section": "Reading (読解)",
    "level": "N4",
    "question": "【ごみの分別ルール】\n燃えるごみは火曜日と金曜日の朝8時までに出してください。必ず指定の透明な袋に入れて出してください。袋に入らない大型の家具などは粗大ごみとなりますので、事前に市役所の受付センターへ電話で回収を申し込んでください。\n\n問：大きなタンスをごみとして捨てたいときはどうしますか。",
    "options": [
      "市役所の受付センターに電話で申し込む。",
      "指定の透明な袋に入れて火曜日に出す。",
      "小さく壊して金曜日の朝に出す。",
      "夜のうちにごみ捨て場に置いておく。"
    ],
    "correctIndex": 0,
    "explanation": "The text states that large furniture is oversized trash (粗大ごみ) and requires telephoning the municipal center in advance."
  },
  {
    "id": "q-n4-23",
    "section": "Reading (読解)",
    "level": "N4",
    "question": "【短い文章】\n健康のために毎朝30分ジョギングをしています。雨が降った日は走る代わりに、室内でストレッチや軽い筋トレをするようにしています。続けることで、疲れにくい体になってきたと実感しています。\n\n問：筆者は雨の日に何をしていますか。",
    "options": [
      "室内でストレッチや軽い筋トレをする。",
      "傘を差して外を走る。",
      "何もしないで一日中寝ている。",
      "ジムに行って水泳をする。"
    ],
    "correctIndex": 0,
    "explanation": "The text says:「雨が降った日は走る代わりに、室内でストレッチや軽い筋トレをするようにしています」(Instead of running on rainy days, I stretch and do light muscle training indoors)."
  },
  {
    "id": "q-n4-24",
    "section": "Reading (読解)",
    "level": "N4",
    "question": "【掲示板】\n留学生センターからのお知らせ：\n来月15日に日帰りバスツアーを開催します。行先は箱根の温泉と美術館です。定員は先着30名で、参加費は一人2,000円です。参加希望者は今月25日までに事務室で申し込んでください。\n\n問：バスツアーに参加したい人はどうすればよいですか。",
    "options": [
      "今月25日までに事務室へ行って申し込む。",
      "来月15日に直接箱根へ行く。",
      "参加費を払わずに当日バスに乗る。",
      "電話で美術館に申し込む。"
    ],
    "correctIndex": 0,
    "explanation": "The announcement instructs:「参加希望者は今月25日までに事務室で申し込んでください」(Must apply at the office by the 25th of this month)."
  },
  {
    "id": "q-n4-25",
    "section": "Listening (聴解)",
    "level": "N4",
    "question": "【状況応答】\n会社で上司に「この書類のコピーを頼んでもいいですか」と言われました。部下として最も適切な返事はどれですか。",
    "options": [
      "かしこまりました。すぐにご用意いたします。",
      "いいえ、結構です。",
      "どういたしまして。",
      "こちらこそよろしくお願いします。"
    ],
    "correctIndex": 0,
    "explanation": "When a superior requests a business task, the humble/polite affirmative response is「かしこまりました」(Certainly / Right away)."
  },
  {
    "id": "q-n4-26",
    "section": "Listening (聴解)",
    "level": "N4",
    "question": "【状況応答】\n友達の家にお邪魔するとき、玄関を入る際に言う言葉として最も適切なものはどれですか。",
    "options": [
      "お邪魔します (Ojama shimasu)",
      "いってきます (Ittekimasu)",
      "お大事に (Odaiji ni)",
      "おかげさまで (Okagesama de)"
    ],
    "correctIndex": 0,
    "explanation": "「お邪魔します」(Ojama shimasu) is the standard polite greeting when entering someone else's home or room."
  },
  {
    "id": "q-n4-27",
    "section": "Listening (聴解)",
    "level": "N4",
    "question": "【状況応答】\n同僚から「週末、一緒に映画を見に行きませんか」と誘われましたが、用事があって断りたいです。最も丁寧な断り方はどれですか。",
    "options": [
      "あいにくその日は予定があって行けないんです。すみません。",
      "映画は嫌いですから行きません。",
      "無理です、やめてください。",
      "行きたくないので断ります。"
    ],
    "correctIndex": 0,
    "explanation": "「あいにくその日は予定があって行けないんです。すみません。」softens the decline politely with「あいにく」(unfortunately)."
  },
  {
    "id": "q-n4-28",
    "section": "Listening (聴解)",
    "level": "N4",
    "question": "【状況応答】\n体調を崩して会社を休む同僚に電話をかけました。電話を切る直前にかける言葉として最もふさわしいものはどれですか。",
    "options": [
      "どうぞお大事になさってください。",
      "ごちそうさまでした。",
      "遠慮しないでください。",
      "お邪魔しました。"
    ],
    "correctIndex": 0,
    "explanation": "「お大事に / お大事になさってください」(Take care of yourself) is the standard Japanese phrase spoken to someone ill."
  },
  {
    "id": "q-n4-29",
    "section": "Listening (聴解)",
    "level": "N4",
    "question": "【発話表現】\n道を歩いていて、前を歩いている人がハンカチを落としました。呼び止めるときに何と言いますか。",
    "options": [
      "すみません、ハンカチを落としましたよ！",
      "ごめんなさい、ハンカチはいりません。",
      "失礼ですが、お元気ですか。",
      "はじめまして、ハンカチです。"
    ],
    "correctIndex": 0,
    "explanation": "Calling out politely with「すみません、〜落としましたよ」(Excuse me, you dropped...!) is the natural Japanese expression."
  },
  {
    "id": "q-n4-30",
    "section": "Listening (聴解)",
    "level": "N4",
    "question": "【発話表現】\nレストランで食事を終えて、店を出るときに店員に言う言葉として最もふさわしいものはどれですか。",
    "options": [
      "ごちそうさまでした、とても美味しかったです。",
      "いただきます、失礼します。",
      "お待たせしました。",
      "かしこまりました。"
    ],
    "correctIndex": 0,
    "explanation": "「ごちそうさまでした」(Gochisousama deshita) is the customary expression of gratitude after finishing a meal."
  }
];
