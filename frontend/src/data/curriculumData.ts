import { Unit } from '../types';

export const CURRICULUM_DATA: Unit[] = [
  {
    id: 'unit-1',
    unitNumber: 1,
    title: 'Greetings & Introductions',
    japaneseTitle: 'あいさつと自己紹介',
    description: 'Master everyday Japanese greetings, polite phrases, and introduce yourself.',
    color: '#3B82F6',
    bgGradient: 'from-blue-500 to-indigo-600',
    lessons: [
      {
        id: 'lesson-1-1',
        title: 'Essential Greetings',
        subtitle: 'Konnichiwa & Daily greetings',
        icon: 'Sparkles',
        xpReward: 20,
        questions: [
          {
            type: 'multiple-choice',
            prompt: 'How do you say "Hello / Good afternoon" in Japanese?',
            audioText: 'こんにちは',
            kanji: 'こんにちは',
            furigana: 'こんにちは',
            romaji: 'Konnichiwa',
            options: ['こんにちは (Konnichiwa)', 'さようなら (Sayounara)', 'ありがとう (Arigatou)', 'おはよう (Ohayou)'],
            correctIndex: 0,
            explanation: '「こんにちは」(Konnichiwa) is the standard daytime greeting used from late morning until late afternoon.'
          },
          {
            type: 'audio-listening',
            prompt: 'Listen to the audio and choose the correct meaning:',
            audioText: 'ありがとう ございます',
            kanji: 'ありがとうございます',
            furigana: 'ありがとうございます',
            romaji: 'Arigatou gozaimasu',
            options: ['Good morning', 'Thank you very much', 'Excuse me', 'Good night'],
            correctIndex: 1,
            explanation: '「ありがとうございます」(Arigatou gozaimasu) is the polite way to express gratitude.'
          },
          {
            type: 'sentence-builder',
            prompt: 'Build the sentence: "Good morning (Polite)"',
            audioText: 'おはよう ございます',
            targetSentence: ['おはよう', 'ございます'],
            tokens: ['ございます', 'こんばんは', 'おはよう', 'さようなら', 'です'],
            furigana: 'おはよう ございます',
            romaji: 'Ohayou gozaimasu',
            explanation: '「おはようございます」is polite morning greeting used before 10-11 AM.'
          },
          {
            type: 'matching-pairs',
            prompt: 'Match the Japanese greetings to their English meanings:',
            pairs: [
              { ja: 'さようなら', en: 'Goodbye' },
              { ja: 'おやすみ', en: 'Good night' },
              { ja: 'こんにちは', en: 'Hello' },
              { ja: 'じゃあまた', en: 'See you later' }
            ]
          },
          {
            type: 'reverse-choice',
            prompt: 'Which of these means "Good evening"?',
            targetEn: 'Good evening',
            options: ['こんばんは (Konbanwa)', 'おはよう (Ohayou)', 'いただきます (Itadakimasu)', 'はい (Hai)'],
            correctIndex: 0,
            audioText: 'こんばんは',
            explanation: '「こんばんは」(Konbanwa) is used when greeting people in the evening or night.'
          }
        ]
      },
      {
        id: 'lesson-1-2',
        title: 'Introducing Yourself',
        subtitle: 'Names, "Desu" & Politeness',
        icon: 'User',
        xpReward: 25,
        questions: [
          {
            type: 'multiple-choice',
            prompt: 'What does 「はじめまして」(Hajimemashite) mean?',
            audioText: 'はじめまして',
            kanji: '初めまして',
            furigana: 'はじめまして',
            romaji: 'Hajimemashite',
            options: ['Nice to meet you (for the first time)', 'How are you?', 'Goodbye', 'My name is...'],
            correctIndex: 0,
            explanation: '「はじめまして」is derived from "hajimete" (first time) and is said when meeting someone new.'
          },
          {
            type: 'sentence-builder',
            prompt: 'Build: "I am Ken."',
            audioText: 'わたし は ケン です',
            targetSentence: ['わたし', 'は', 'ケン', 'です'],
            tokens: ['です', 'は', 'ケン', 'わたし', 'さん', 'あなた'],
            furigana: 'わたし は ケン です',
            romaji: 'Watashi wa Ken desu',
            explanation: '「わたし」(I) + 「は」(topic marker) + Name + 「です」(am/is).'
          },
          {
            type: 'audio-listening',
            prompt: 'Listen and select what is being said:',
            audioText: 'どうぞよろしく おねがいします',
            kanji: 'どうぞよろしくお願いします',
            furigana: 'どうぞ よろしく おねがいします',
            romaji: 'Douzo yoroshiku onegaishimasu',
            options: ['Please treat me well / Pleased to meet you', 'Excuse me, where is the station?', 'Thank you for the meal', 'I am very hungry'],
            correctIndex: 0,
            explanation: 'A crucial polite closing phrase used at the end of a self-introduction.'
          },
          {
            type: 'matching-pairs',
            prompt: 'Match the self-introduction words:',
            pairs: [
              { ja: 'わたし', en: 'I / Me' },
              { ja: 'なまえ', en: 'Name' },
              { ja: 'どうぞ', en: 'Please / Go ahead' },
              { ja: 'です', en: 'Am / Is / Are' }
            ]
          }
        ]
      },
      {
        id: 'lesson-1-3',
        title: 'Yes, No & Courtesies',
        subtitle: 'Hai, Iie & Sumimasen',
        icon: 'MessageSquare',
        xpReward: 20,
        questions: [
          {
            type: 'multiple-choice',
            prompt: 'How do you say "Excuse me / I am sorry" in Japanese?',
            audioText: 'すみません',
            kanji: 'すみません',
            furigana: 'すみません',
            romaji: 'Sumimasen',
            options: ['すみません (Sumimasen)', 'ごちそうさま (Gochisousama)', 'いいえ (Iie)', 'おいしい (Oishii)'],
            correctIndex: 0,
            explanation: '「すみません」(Sumimasen) is one of the most versatile Japanese words for excuse me, sorry, and thank you.'
          },
          {
            type: 'sentence-builder',
            prompt: 'Assemble: "Yes, that is right."',
            audioText: 'はい そう です',
            targetSentence: ['はい', 'そう', 'です'],
            tokens: ['はい', 'いいえ', 'そう', 'です', 'ちがいます'],
            furigana: 'はい、そう です',
            romaji: 'Hai, sou desu',
            explanation: '「はい」(Yes) + 「そう です」(that is so).'
          },
          {
            type: 'matching-pairs',
            prompt: 'Match the polite particles and affirmations:',
            pairs: [
              { ja: 'はい', en: 'Yes' },
              { ja: 'いいえ', en: 'No' },
              { ja: 'ごめんなさい', en: 'I am sorry' },
              { ja: 'おねがいします', en: 'Please (requesting)' }
            ]
          }
        ]
      },
      {
        id: 'lesson-1-chest',
        title: 'Unit 1 Mastery & Milestone Review',
        subtitle: 'Comprehensive Greetings, Introductions & Courtesies Quiz',
        icon: 'Trophy',
        isChest: true,
        gemReward: 50,
        xpReward: 30,
        questions: [
          {
            type: 'multiple-choice',
            prompt: 'Which phrase is the standard polite daytime greeting used from late morning through afternoon?',
            audioText: 'こんにちは',
            kanji: 'こんにちは',
            furigana: 'こんにちは',
            romaji: 'Konnichiwa',
            options: ['こんにちは (Konnichiwa)', 'こんばんは (Konbanwa)', 'おはようございます (Ohayou gozaimasu)', 'おやすみなさい (Oyasuminasai)'],
            correctIndex: 0,
            explanation: '「こんにちは」(Konnichiwa) is the standard polite daytime greeting.'
          },
          {
            type: 'audio-listening',
            prompt: 'Listen to the audio and choose what is being said:',
            audioText: 'はじめまして、どうぞよろしくおねがいします',
            kanji: '初めまして、どうぞよろしくお願いします',
            furigana: 'はじめまして、どうぞ よろしく おねがいします',
            romaji: 'Hajimemashite, douzo yoroshiku onegaishimasu',
            options: [
              'Nice to meet you, pleased to make your acquaintance',
              'Thank you very much for your help today',
              'Excuse me, where is the subway station?',
              'Good evening, see you again next week'
            ],
            correctIndex: 0,
            explanation: 'A formal Japanese self-introduction opening and closing.'
          },
          {
            type: 'sentence-builder',
            prompt: 'Build the sentence: "I am a student."',
            audioText: 'わたし は がくせい です',
            targetSentence: ['わたし', 'は', 'がくせい', 'です'],
            tokens: ['がくせい', 'わたし', 'は', 'です', 'せんせい', 'あなた'],
            furigana: '私 は 学生 です',
            romaji: 'Watashi wa gakusei desu',
            explanation: '「わたし」(I) + 「は」(topic) + 「がくせい」(student) + 「です」(am).'
          },
          {
            type: 'matching-pairs',
            prompt: 'Match the essential greetings and courtesy phrases:',
            pairs: [
              { ja: 'すみません', en: 'Excuse me / I am sorry' },
              { ja: 'ありがとう ございます', en: 'Thank you very much' },
              { ja: 'いただきます', en: 'Thank you for the meal (before)' },
              { ja: 'ごちそうさま', en: 'Thank you for the meal (after)' }
            ]
          },
          {
            type: 'reverse-choice',
            prompt: 'Which Japanese phrase means "Goodbye (Formal)"?',
            targetEn: 'Goodbye',
            options: ['さようなら (Sayounara)', 'じゃあまた (Jaa mata)', 'またね (Mata ne)', 'バイバイ (Baibai)'],
            correctIndex: 0,
            audioText: 'さようなら',
            explanation: '「さようなら」(Sayounara) is the formal expression for goodbye.'
          },
          {
            type: 'multiple-choice',
            prompt: 'What does 「いいえ、そう ではありません」(Iie, sou dewa arimasen) mean?',
            audioText: 'いいえ、そうではありません',
            kanji: 'いいえ、そうではありません',
            furigana: 'いいえ、そう ではありません',
            romaji: 'Iie, sou dewa arimasen',
            options: [
              'No, that is not the case / No, that is incorrect',
              'Yes, that is exactly right',
              'Excuse me, please go ahead',
              'Good night, have sweet dreams'
            ],
            correctIndex: 0,
            explanation: '「いいえ」(No) + 「そう ではありません」(is not so/incorrect).'
          }
        ]
      }
    ]
  },
  {
    id: 'unit-2',
    unitNumber: 2,
    title: 'People & Nationalities',
    japaneseTitle: '人と国籍',
    description: 'Learn country names, nationality suffixes (-jin), student/teacher roles, and professions.',
    color: '#10B981',
    bgGradient: 'from-emerald-500 to-teal-600',
    lessons: [
      {
        id: 'lesson-2-1',
        title: 'Countries & Origins',
        subtitle: 'Nihon, Amerika & Where are you from?',
        icon: 'Globe',
        xpReward: 25,
        questions: [
          {
            type: 'multiple-choice',
            prompt: 'Which country is 「日本」(にほん - Nihon)?',
            audioText: 'にほん',
            kanji: '日本',
            furigana: 'にほん',
            romaji: 'Nihon',
            options: ['Japan', 'China', 'United Kingdom', 'Canada'],
            correctIndex: 0,
            explanation: '「日本」(Nihon / Nippon) literally translates to "Origin of the Sun".'
          },
          {
            type: 'sentence-builder',
            prompt: 'Build: "Where are you from?" (Literally: Origin is where?)',
            audioText: 'しゅっしん は どこ ですか',
            targetSentence: ['しゅっしん', 'は', 'どこ', 'ですか'],
            tokens: ['しゅっしん', 'は', 'どこ', 'ですか', 'だれ', '日本'],
            furigana: '出身 は どこ ですか',
            romaji: 'Shusshin wa doko desu ka',
            explanation: '「しゅっしん」(Origin) + 「は」(topic) + 「どこ」(where) + 「ですか」(question marker).'
          },
          {
            type: 'matching-pairs',
            prompt: 'Match the countries:',
            pairs: [
              { ja: 'アメリカ', en: 'USA' },
              { ja: 'イギリス', en: 'United Kingdom' },
              { ja: 'フランス', en: 'France' },
              { ja: 'かんこく', en: 'South Korea' }
            ]
          }
        ]
      },
      {
        id: 'lesson-2-2',
        title: 'Nationalities & People',
        subtitle: 'The -jin suffix & Roles',
        icon: 'Users',
        xpReward: 25,
        questions: [
          {
            type: 'multiple-choice',
            prompt: 'Adding 「人」(じん - jin) after a country creates what meaning?',
            audioText: 'にほんじん',
            kanji: '日本人',
            furigana: 'にほんじん',
            romaji: 'Nihon-jin',
            options: ['Nationality / Person of that country', 'Language of that country', 'Capital city', 'Food from that country'],
            correctIndex: 0,
            explanation: 'Country + 「人 (jin)」= person of that nationality. Example: アメリカ人 (American).'
          },
          {
            type: 'sentence-builder',
            prompt: 'Translate: "I am a student."',
            audioText: 'わたし は がくせい です',
            targetSentence: ['わたし', 'は', 'がくせい', 'です'],
            tokens: ['がくせい', 'せんせい', 'わたし', 'は', 'です', 'いしゃ'],
            furigana: '私 は 学生 です',
            romaji: 'Watashi wa gakusei desu',
            explanation: '「学生」(gakusei) means student.'
          },
          {
            type: 'audio-listening',
            prompt: 'Listen and select the meaning of the profession:',
            audioText: 'せんせい',
            kanji: '先生',
            furigana: 'せんせい',
            romaji: 'Sensei',
            options: ['Teacher / Master / Doctor', 'Engineer', 'Company Employee', 'Driver'],
            correctIndex: 0,
            explanation: '「先生」(Sensei) is used for teachers, mentors, doctors, and respected specialists.'
          },
          {
            type: 'matching-pairs',
            prompt: 'Match people and roles:',
            pairs: [
              { ja: 'せんせい', en: 'Teacher' },
              { ja: 'がくせい', en: 'Student' },
              { ja: 'ともだち', en: 'Friend' },
              { ja: 'かいしゃいん', en: 'Office Worker' }
            ]
          }
        ]
      },
            {
        id: 'lesson-2-3',
        title: 'Professions, Workplaces & Age',
        subtitle: 'Kaishain, Isha & How old are you?',
        icon: 'Briefcase',
        xpReward: 25,
        questions: [
          {
            type: 'multiple-choice',
            prompt: 'How do you ask "How old are you?" in polite Japanese?',
            audioText: 'なんさい ですか',
            kanji: '何歳ですか',
            furigana: 'なんさい ですか',
            romaji: 'Nan-sai desu ka',
            options: [
              'なんさい ですか (Nan-sai desu ka)',
              'いくら ですか (Ikura desu ka)',
              'どこ ですか (Doko desu ka)',
              'だれ ですか (Dare desu ka)'
            ],
            correctIndex: 0,
            explanation: '「何歳」(nan-sai) asks for age. The ultra-polite form is 「おいくつですか」(o-ikutsu desu ka).'
          },
          {
            type: 'sentence-builder',
            prompt: 'Translate: "I am 20 years old."',
            audioText: 'わたし は はたち です',
            targetSentence: ['わたし', 'は', 'はたち', 'です'],
            tokens: ['わたし', 'は', 'はたち', 'です', 'じゅっさい', 'にじゅう'],
            furigana: '私 は 二十歳 です',
            romaji: 'Watashi wa hatachi desu',
            explanation: '20 years old has the special Japanese reading 「はたち」(hatachi).'
          },
          {
            type: 'audio-listening',
            prompt: 'Listen and identify the occupation mentioned:',
            audioText: 'ちち は ぎんこういん です',
            kanji: '父は銀行員です',
            furigana: 'ちち は ぎんこういん です',
            romaji: 'Chichi wa ginkouin desu',
            options: [
              'Father is a bank employee',
              'Father is a doctor',
              'Father is a company worker',
              'Father is a teacher'
            ],
            correctIndex: 0,
            explanation: '「銀行員」(ginkouin) means bank employee / teller.'
          },
          {
            type: 'matching-pairs',
            prompt: 'Match professions to their English meanings:',
            pairs: [
              { ja: 'かいしゃいん', en: 'Company Employee' },
              { ja: 'いしゃ', en: 'Doctor / Physician' },
              { ja: 'ぎんこういん', en: 'Bank Employee' },
              { ja: 'けんきゅうしゃ', en: 'Researcher' }
            ]
          },
          {
            type: 'reverse-choice',
            prompt: 'Which word means "Engineer"?',
            targetEn: 'Engineer',
            options: [
              'エンジニア (Enjinia)',
              'いしゃ (Isha)',
              'がくせい (Gakusei)',
              'せんせい (Sensei)'
            ],
            correctIndex: 0,
            audioText: 'エンジニア',
            explanation: '「エンジニア」(enjinia) is the katakana loanword for engineer.'
          }
        ]
      },
{
        id: 'lesson-2-chest',
        title: 'Unit 2 Mastery Chest',
        subtitle: 'Claim your Unit 2 Bonus!',
        isChest: true,
        gemReward: 60,
        xpReward: 35
      }
    ]
  },
  {
    id: 'unit-3',
    unitNumber: 3,
    title: 'Numbers & Counting',
    japaneseTitle: '数字と数え方',
    description: 'Learn numbers 1-100, asking prices (Ikura desu ka), and age counters.',
    color: '#8B5CF6',
    bgGradient: 'from-purple-500 to-violet-600',
    lessons: [
      {
        id: 'lesson-3-1',
        title: 'Numbers 1 to 10',
        subtitle: 'Ichi, Ni, San to Juu',
        icon: 'Hash',
        xpReward: 25,
        questions: [
          {
            type: 'multiple-choice',
            prompt: 'What number is 「七 / なな」(Nana / Shichi)?',
            audioText: 'なな',
            kanji: '七',
            furigana: 'なな',
            romaji: 'Nana',
            options: ['7 (Seven)', '4 (Four)', '9 (Nine)', '3 (Three)'],
            correctIndex: 0,
            explanation: '7 is pronounced 「なな」(nana) or 「しち」(shichi).'
          },
          {
            type: 'sentence-builder',
            prompt: 'Build: "Count 1, 2, 3!"',
            audioText: 'いち に さん',
            targetSentence: ['いち', 'に', 'さん'],
            tokens: ['いち', 'よん', 'に', 'さん', 'ご', 'ろく'],
            furigana: '一、二、三',
            romaji: 'Ichi, Ni, San',
            explanation: '1 (Ichi), 2 (Ni), 3 (San).'
          },
          {
            type: 'matching-pairs',
            prompt: 'Match the Japanese numbers:',
            pairs: [
              { ja: '一 (いち)', en: '1 (One)' },
              { ja: '五 (ご)', en: '5 (Five)' },
              { ja: '八 (はち)', en: '8 (Eight)' },
              { ja: '十 (じゅう)', en: '10 (Ten)' }
            ]
          }
        ]
      },
      {
        id: 'lesson-3-2',
        title: 'Prices & Shopping',
        subtitle: 'Ikura desu ka & Yen (円)',
        icon: 'ShoppingBag',
        xpReward: 30,
        questions: [
          {
            type: 'multiple-choice',
            prompt: 'How do you ask "How much is this?" in Japanese?',
            audioText: 'これ は いくら ですか',
            kanji: 'これはいくらですか',
            furigana: 'これ は いくら ですか',
            romaji: 'Kore wa ikura desu ka',
            options: ['これ は いくら ですか (Kore wa ikura desu ka)', 'これ は なん ですか (Kore wa nan desu ka)', 'どこ ですか (Doko desu ka)', 'だれ ですか (Dare desu ka)'],
            correctIndex: 0,
            explanation: '「いくら」(ikura) means "how much (price)".'
          },
          {
            type: 'sentence-builder',
            prompt: 'Translate: "It is 500 yen."',
            audioText: 'ごひゃく えん です',
            targetSentence: ['ごひゃく', 'えん', 'です'],
            tokens: ['ごひゃく', 'えん', 'です', 'せん', 'これ'],
            furigana: '五百 円 です',
            romaji: 'Gohyaku en desu',
            explanation: '500 (Gohyaku) + 円 (En - Yen) + です (is).'
          }
        ]
      },
            {
        id: 'lesson-3-3',
        title: 'Large Numbers & Native Counters',
        subtitle: 'Hyaku, Sen, Man & Hitotsu, Futatsu',
        icon: 'Calculator',
        xpReward: 30,
        questions: [
          {
            type: 'multiple-choice',
            prompt: 'What are the native Japanese general counters for "1, 2, 3 objects"?',
            audioText: 'ひとつ ふたつ みっつ',
            kanji: '一つ、二つ、三つ',
            furigana: 'ひとつ ふたつ みっつ',
            romaji: 'Hitotsu, futatsu, mittsu',
            options: [
              'ひとつ、ふたつ、みっつ (Hitotsu, futatsu, mittsu)',
              'いち、に、さん (Ichi, ni, san)',
              'ひとり、ふたり、さんにん (Hitori, futari, sannin)',
              'いちまい、にまい、さんまい (Ichimai, nimai, sanmai)'
            ],
            correctIndex: 0,
            explanation: 'The native Japanese counting system (ひとつ, ふたつ, みっつ...) is used for general objects up to 10.'
          },
          {
            type: 'sentence-builder',
            prompt: 'Build: "Two apples, please."',
            audioText: 'りんご を ふたつ ください',
            targetSentence: ['りんご', 'を', 'ふたつ', 'ください'],
            tokens: ['りんご', 'を', 'ふたつ', 'ください', 'ひとつ', 'みかん'],
            furigana: '林檎 を 二つ ください',
            romaji: 'Ringo o futatsu kudasai',
            explanation: 'Item (りんご を) + Native counter (ふたつ) + ください.'
          },
          {
            type: 'audio-listening',
            prompt: 'Listen and select the price:',
            audioText: 'さんぜん えん です',
            kanji: '三千円です',
            furigana: 'さんぜん えん です',
            romaji: 'Sanzen en desu',
            options: [
              '3,000 Yen',
              '300 Yen',
              '30,000 Yen',
              '1,300 Yen'
            ],
            correctIndex: 0,
            explanation: '「三千」(sanzen) = 3,000 (notice sound shift from sen to zen).'
          },
          {
            type: 'matching-pairs',
            prompt: 'Match native general counters:',
            pairs: [
              { ja: 'ひとつ', en: '1 thing' },
              { ja: 'ふたつ', en: '2 things' },
              { ja: 'みっつ', en: '3 things' },
              { ja: 'よっつ', en: '4 things' }
            ]
          },
          {
            type: 'reverse-choice',
            prompt: 'Which counter suffix is used for flat objects like paper, shirts, or plates?',
            targetEn: 'Counter for flat, thin objects (Paper/Tickets)',
            options: [
              '〜まい (〜枚 / -mai)',
              '〜ほん (〜本 / -hon)',
              '〜さつ (〜冊 / -satsu)',
              '〜だい (〜台 / -dai)'
            ],
            correctIndex: 0,
            audioText: 'まい',
            explanation: '「枚」(mai) counts flat and thin objects (paper, tickets, shirts, dishes).'
          }
        ]
      },
{
        id: 'lesson-3-chest',
        title: 'Unit 3 Golden Chest',
        subtitle: 'Numbers Mastery Unlocked!',
        isChest: true,
        gemReward: 75,
        xpReward: 40
      }
    ]
  },
  {
    id: 'unit-4',
    unitNumber: 4,
    title: 'Food & Izakaya Dining',
    japaneseTitle: '食べ物とレストラン',
    description: 'Order ramen, sushi, and drinks with confidence. Learn dining etiquette.',
    color: '#F59E0B',
    bgGradient: 'from-amber-500 to-orange-600',
    lessons: [
      {
        id: 'lesson-4-1',
        title: 'Food & Drinks',
        subtitle: 'Ramen, Sushi, Ocha & Mizu',
        icon: 'Utensils',
        xpReward: 25,
        questions: [
          {
            type: 'multiple-choice',
            prompt: 'What does 「お水」(おみず - Omizu) mean?',
            audioText: 'おみず',
            kanji: 'お水',
            furigana: 'おみず',
            romaji: 'Omizu',
            options: ['Water', 'Green Tea', 'Beer', 'Soup'],
            correctIndex: 0,
            explanation: '「水」(mizu) is water, made polite with the prefix 「お」(o-).'
          },
          {
            type: 'sentence-builder',
            prompt: 'Order: "Ramen, please!"',
            audioText: 'ラーメン を ください',
            targetSentence: ['ラーメン', 'を', 'ください'],
            tokens: ['ラーメン', 'を', 'ください', 'お茶', 'たべます'],
            furigana: 'ラーメン を ください',
            romaji: 'Raamen o kudasai',
            explanation: 'Item + 「を」(object marker) + 「ください」(please give me).'
          },
          {
            type: 'matching-pairs',
            prompt: 'Match the Japanese culinary terms:',
            pairs: [
              { ja: 'おいしい', en: 'Delicious' },
              { ja: 'いただきます', en: 'Thanks for the food (before eating)' },
              { ja: 'ごちそうさま', en: 'Thank you for the meal (after eating)' },
              { ja: 'おちゃ', en: 'Green tea' }
            ]
          }
        ]
      },
            {
        id: 'lesson-4-2',
        title: 'Izakaya Ordering & Etiquette',
        subtitle: 'Kanpai! Osusume & Dining out customs',
        icon: 'Beer',
        xpReward: 25,
        questions: [
          {
            type: 'multiple-choice',
            prompt: 'What do Japanese diners say when raising glasses for a celebratory toast?',
            audioText: 'かんぱい',
            kanji: '乾杯',
            furigana: 'かんぱい',
            romaji: 'Kanpai',
            options: [
              'かんぱい (Kanpai - Cheers!)',
              'いただきます (Itadakimasu)',
              'ごちそうさま (Gochisousama)',
              'こんにちは (Konnichiwa)'
            ],
            correctIndex: 0,
            explanation: '「乾杯」(kanpai) literally means "dry the glass" and is the universal Japanese toast.'
          },
          {
            type: 'sentence-builder',
            prompt: 'Build: "What do you recommend?" (To the chef or server)',
            audioText: 'おすすめ は なん ですか',
            targetSentence: ['おすすめ', 'は', 'なん', 'ですか'],
            tokens: ['おすすめ', 'は', 'なん', 'ですか', 'いくら', 'これ'],
            furigana: 'おすすめ は 何 ですか',
            romaji: 'Osusume wa nan desu ka',
            explanation: '「おすすめ」(recommendation) + 「は何ですか」(what is it?).'
          },
          {
            type: 'audio-listening',
            prompt: 'Listen and select what the diner is asking for:',
            audioText: 'おかいけい を おねがいします',
            kanji: 'お会計をお願いします',
            furigana: 'おかいけい を おねがいします',
            romaji: 'Okaikei o onegaishimasu',
            options: [
              'The bill / check, please',
              'More water, please',
              'The menu, please',
              'A table for two, please'
            ],
            correctIndex: 0,
            explanation: '「お会計」(okaikei) or 「お勘定」(okanjou) means the bill / check.'
          },
          {
            type: 'matching-pairs',
            prompt: 'Match Izakaya dining terms:',
            pairs: [
              { ja: 'かんぱい', en: 'Cheers! (Toast)' },
              { ja: 'おかいけい', en: 'The check / Bill' },
              { ja: 'おすすめ', en: 'Chef recommendation' },
              { ja: 'とりざら', en: 'Small sharing plate' }
            ]
          },
          {
            type: 'reverse-choice',
            prompt: 'What famous phrase do Japanese patrons often say when ordering their first drink?',
            targetEn: 'A beer for now, please',
            options: [
              'とりあえず ビール (Toriaezu biiru)',
              'おみず を ください (Omizu o kudasai)',
              'ラーメン を ください (Raamen o kudasai)',
              'おちゃ を ください (Ocha o kudasai)'
            ],
            correctIndex: 0,
            audioText: 'とりあえず ビール',
            explanation: '「とりあえずビール」(Toriaezu biiru) means "Let\\\'s start with beer for now".'
          }
        ]
      },
      {
        id: 'lesson-4-3',
        title: 'Flavors, Tastes & Sensations',
        subtitle: 'Karai, Amai, Suppai & Describing Food',
        icon: 'Flame',
        xpReward: 30,
        questions: [
          {
            type: 'multiple-choice',
            prompt: 'What does 「辛い」(からい - Karai) mean?',
            audioText: 'からい',
            kanji: '辛い',
            furigana: 'からい',
            romaji: 'Karai',
            options: [
              'Spicy / Hot (Flavor)',
              'Sweet',
              'Salty',
              'Sour'
            ],
            correctIndex: 0,
            explanation: '「辛い」(karai) means spicy / hot in taste. 「甘い」(amai) means sweet.'
          },
          {
            type: 'sentence-builder',
            prompt: 'Translate: "This soup is very hot (temperature)."',
            audioText: 'この スープ は とても あつい です',
            targetSentence: ['この', 'スープ', 'は', 'とても', 'あつい', 'です'],
            tokens: ['この', 'スープ', 'は', 'とても', 'あつい', 'です', 'つめたい', 'その'],
            furigana: 'この スープ は とても 熱い です',
            romaji: 'Kono suupu wa totemo atsui desu',
            explanation: '「熱い」(atsui - hot to touch/temperature) + 「とても」(very).'
          },
          {
            type: 'audio-listening',
            prompt: 'Listen and select what taste the speaker describes:',
            audioText: 'この ケーキ は とても あまい です',
            kanji: 'このケーキはとても甘いです',
            furigana: 'この ケーキ は とても あまい です',
            romaji: 'Kono keeki wa totemo amai desu',
            options: [
              'This cake is very sweet',
              'This cake is spicy',
              'This cake is sour',
              'This cake is salty'
            ],
            correctIndex: 0,
            explanation: '「甘い」(amai) means sweet.'
          },
          {
            type: 'matching-pairs',
            prompt: 'Match flavors and tastes:',
            pairs: [
              { ja: 'あまい', en: 'Sweet' },
              { ja: 'からい', en: 'Spicy' },
              { ja: 'すっぱい', en: 'Sour' },
              { ja: 'にがい', en: 'Bitter' }
            ]
          },
          {
            type: 'reverse-choice',
            prompt: 'How do you say "I am hungry!" (Literally: My stomach became empty)?',
            targetEn: 'I am hungry (Stomach is empty)',
            options: [
              'おなか が すきました (Onaka ga sukimashita)',
              'のど が かわきました (Nodo ga kawakimashita)',
              'おなか が いっぱい です (Onaka ga ippai desu)',
              'おいしい です (Oishii desu)'
            ],
            correctIndex: 0,
            audioText: 'おなか が すきました',
            explanation: '「お腹が空きました」(onaka ga sukimashita) is the standard Japanese phrase for "I am hungry".'
          }
        ]
      },
{
        id: 'lesson-4-chest',
        title: 'Unit 4 Gourmet Chest',
        subtitle: 'Izakaya Master!',
        isChest: true,
        gemReward: 100,
        xpReward: 50
      }
    ]
  },
  {
    id: "unit-5",
    unitNumber: 5,
    title: "Time, Schedule & Routine",
    japaneseTitle: "時間と毎日の日課",
    description: "Learn telling time, hours, minutes, am/pm, and scheduling your day with routine verbs.",
    color: "#EC4899",
    bgGradient: "from-pink-500 to-rose-600",
    lessons: [
      {
        id: "lesson-5-1",
        title: "Telling Time & Hours",
        subtitle: "Ima nan-ji desu ka? Hours & AM/PM",
        icon: "Clock",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you ask \"What time is it now?\" in Japanese?",
            audioText: "いま なんじ ですか",
            kanji: "今何時ですか",
            furigana: "いま なんじ ですか",
            romaji: "Ima nan-ji desu ka",
            options: ["いま なんじ ですか (Ima nan-ji desu ka)", "いま なん ですか (Ima nan desu ka)", "どこ ですか (Doko desu ka)", "いくら ですか (Ikura desu ka)"],
            correctIndex: 0,
            explanation: "「今」(ima - now) + 「何時」(nan-ji - what hour/time) + 「ですか」(question)."
          },
          {
            type: "sentence-builder",
            prompt: "Build: \"It is 3 o'clock.\"",
            audioText: "さんじ です",
            targetSentence: ["さんじ", "です"],
            tokens: ["さんじ", "です", "よじ", "いま", "ごじ"],
            furigana: "三時 です",
            romaji: "San-ji desu",
            explanation: "Number + 「時」(ji - hour counter) + 「です」(is)."
          },
          {
            type: "audio-listening",
            prompt: "Listen to the audio and select the correct time:",
            audioText: "ごぜん くじ です",
            kanji: "午前九時です",
            furigana: "ごぜん くじ です",
            romaji: "Gozen ku-ji desu",
            options: ["9:00 AM", "9:00 PM", "7:00 AM", "6:00 PM"],
            correctIndex: 0,
            explanation: "「午前」(gozen) means AM / morning, and 「九時」(ku-ji) is 9 o'clock."
          },
          {
            type: "matching-pairs",
            prompt: "Match the time expressions:",
            pairs: [
              {
                ja: "いま",
                en: "Now"
              },
              {
                ja: "ごぜん",
                en: "A.M. (Morning)"
              },
              {
                ja: "ごご",
                en: "P.M. (Afternoon)"
              },
              {
                ja: "なんじ",
                en: "What time?"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "Which word means \"P.M. / Afternoon\"?",
            targetEn: "P.M. / Afternoon",
            options: ["ごご (Gogo)", "ごぜん (Gozen)", "あさ (Asa)", "よる (Yoru)"],
            correctIndex: 0,
            audioText: "ごご",
            explanation: "「午後」(gogo) denotes the afternoon / P.M."
          }
        ]
      },
      {
        id: "lesson-5-2",
        title: "Minutes, Half Past & Particle に",
        subtitle: "Fun/Pun, Han & Action at a Time",
        icon: "Watch",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "What does 「半」(はん - han) mean when telling time?",
            audioText: "はん",
            kanji: "半",
            furigana: "はん",
            romaji: "Han",
            options: ["Half past (:30)", "Quarter past (:15)", "O'clock sharp (:00)", "Ten minutes to (:50)"],
            correctIndex: 0,
            explanation: "「半」(han) means half past. For instance, 「七時半」(shichi-ji han) means 7:30."
          },
          {
            type: "sentence-builder",
            prompt: "Translate: \"I wake up at 7:00.\"",
            audioText: "しちじ に おきます",
            targetSentence: ["しちじ", "に", "おきます"],
            tokens: ["しちじ", "に", "おきます", "ねます", "を", "八時"],
            furigana: "七時 に 起きます",
            romaji: "Shichi-ji ni okimasu",
            explanation: "Particle 「に」(ni) marks the specific point in time an action occurs."
          },
          {
            type: "audio-listening",
            prompt: "Listen to the sentence and select the bedtime:",
            audioText: "じゅういちじ に ねます",
            kanji: "十一時に寝ます",
            furigana: "じゅういちじ に ねます",
            romaji: "Juuichi-ji ni nemasu",
            options: ["Go to sleep at 11:00", "Go to sleep at 10:00", "Wake up at 11:00", "Wake up at 7:00"],
            correctIndex: 0,
            explanation: "「十一時」(juuichi-ji - 11 o'clock) + 「寝ます」(nemasu - go to sleep)."
          },
          {
            type: "matching-pairs",
            prompt: "Match the routine verbs:",
            pairs: [
              {
                ja: "おきます",
                en: "Wake up"
              },
              {
                ja: "ねます",
                en: "Sleep / Go to bed"
              },
              {
                ja: "はん",
                en: "Half past (:30)"
              },
              {
                ja: "ぷん / ふん",
                en: "Minute counter"
              }
            ]
          }
        ]
      },
      {
        id: "lesson-5-3",
        title: "Daily Routine & Activities",
        subtitle: "From morning to night with everyday verbs",
        icon: "Calendar",
        xpReward: 30,
        questions: [
          {
            type: "multiple-choice",
            prompt: "Which verb means \"to study\"?",
            audioText: "べんきょうします",
            kanji: "勉強します",
            furigana: "べんきょうします",
            romaji: "Benkyou shimasu",
            options: ["べんきょうします (Study)", "はたらきます (Work)", "やすみます (Rest / Take a day off)", "たべます (Eat)"],
            correctIndex: 0,
            explanation: "「勉強します」(benkyou shimasu) is the polite verb for \"to study\"."
          },
          {
            type: "sentence-builder",
            prompt: "Assemble: \"I study every day.\"",
            audioText: "まいにち べんきょうします",
            targetSentence: ["まいにち", "べんきょうします"],
            tokens: ["まいにち", "べんきょうします", "はたらきます", "ときどき", "に"],
            furigana: "毎日 勉強します",
            romaji: "Mainichi benkyou shimasu",
            explanation: "「毎日」(mainichi - every day) is a relative time adverb, so no particle 「に」 is needed."
          },
          {
            type: "matching-pairs",
            prompt: "Match the times of day:",
            pairs: [
              {
                ja: "あさ",
                en: "Morning"
              },
              {
                ja: "ひる",
                en: "Noon / Daytime"
              },
              {
                ja: "ばん / よる",
                en: "Evening / Night"
              },
              {
                ja: "まいあさ",
                en: "Every morning"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "Which phrase means \"From 9:00 to 5:00\"?",
            targetEn: "From 9:00 to 5:00",
            options: ["くじ から ごじ まで (Ku-ji kara go-ji made)", "くじ に ごじ で (Ku-ji ni go-ji de)", "くじ と ごじ (Ku-ji to go-ji)", "くじ は ごじ です (Ku-ji wa go-ji desu)"],
            correctIndex: 0,
            audioText: "くじ から ごじ まで",
            explanation: "「から」(from) marks the starting time, and 「まで」(until/to) marks the end."
          }
        ]
      },
      {
        id: "lesson-5-chest",
        title: "Unit 5 Timekeeper Chest",
        subtitle: "Daily Routine Master!",
        isChest: true,
        gemReward: 80,
        xpReward: 45
      }
    ]
  },
  {
    id: "unit-6",
    unitNumber: 6,
    title: "Days, Weeks & Calendar Events",
    japaneseTitle: "曜日とカレンダー",
    description: "Master all 7 days of the week, months 1-12, days of the month, and special dates.",
    color: "#06B6D4",
    bgGradient: "from-cyan-500 to-blue-600",
    lessons: [
      {
        id: "lesson-6-1",
        title: "Days of the Week",
        subtitle: "Getsuyoubi to Nichiyoubi",
        icon: "Sun",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "What day is 「月曜日」(げつようび - Getsuyoubi)?",
            audioText: "げつようび",
            kanji: "月曜日",
            furigana: "げつようび",
            romaji: "Getsuyoubi",
            options: ["Monday", "Tuesday", "Friday", "Sunday"],
            correctIndex: 0,
            explanation: "「月」(moon) + 「曜日」(day of week) = Monday (Moon Day)."
          },
          {
            type: "sentence-builder",
            prompt: "Build: \"Today is Sunday.\"",
            audioText: "きょう は にちようび です",
            targetSentence: ["きょう", "は", "にちようび", "です"],
            tokens: ["きょう", "は", "にちようび", "です", "あした", "きんようび"],
            furigana: "今日 は 日曜日 です",
            romaji: "Kyou wa nichiyoubi desu",
            explanation: "「今日」(kyou - today) + 「は」+ 「日曜日」(nichiyoubi - Sunday) + 「です」."
          },
          {
            type: "audio-listening",
            prompt: "Listen to the audio and choose the correct day:",
            audioText: "きんようび",
            kanji: "金曜日",
            furigana: "きんようび",
            romaji: "Kinyoubi",
            options: ["Friday", "Thursday", "Wednesday", "Saturday"],
            correctIndex: 0,
            explanation: "「金曜日」(kin'youbi - gold/metal day) is Friday."
          },
          {
            type: "matching-pairs",
            prompt: "Match the days of the week:",
            pairs: [
              {
                ja: "かようび",
                en: "Tuesday (Fire)"
              },
              {
                ja: "すいようび",
                en: "Wednesday (Water)"
              },
              {
                ja: "もくようび",
                en: "Thursday (Wood)"
              },
              {
                ja: "どようび",
                en: "Saturday (Earth)"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "Which word means \"Tomorrow\"?",
            targetEn: "Tomorrow",
            options: ["あした (Ashita)", "きのう (Kinou)", "きょう (Kyou)", "あさって (Asatte)"],
            correctIndex: 0,
            audioText: "あした",
            explanation: "「明日」(ashita) is tomorrow. 「昨日」(kinou) is yesterday."
          }
        ]
      },
      {
        id: "lesson-6-2",
        title: "Months & Calendar Days",
        subtitle: "Gatsu, Tsuitachi & Special Days",
        icon: "CalendarDays",
        xpReward: 30,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you say \"April\" in Japanese?",
            audioText: "しがつ",
            kanji: "四月",
            furigana: "しがつ",
            romaji: "Shi-gatsu",
            options: ["しがつ (Shi-gatsu)", "よんがつ (Yon-gatsu)", "しちがつ (Shichi-gatsu)", "はちがつ (Hachi-gatsu)"],
            correctIndex: 0,
            explanation: "April is uniquely pronounced 「しがつ」(Shi-gatsu), never \"yon-gatsu\"."
          },
          {
            type: "sentence-builder",
            prompt: "Translate: \"The first day of the month (1st)\"",
            audioText: "ついたち",
            targetSentence: ["ついたち"],
            tokens: ["ついたち", "ふつか", "みっか", "いちにち"],
            furigana: "一日 (ついたち)",
            romaji: "Tsuitachi",
            explanation: "The 1st day of the month has the irregular reading 「ついたち」(tsuitachi)."
          },
          {
            type: "audio-listening",
            prompt: "Listen and identify the date:",
            audioText: "ごがつ いつか",
            kanji: "五月五日",
            furigana: "ごがつ いつか",
            romaji: "Go-gatsu itsuka",
            options: ["May 5th", "May 1st", "April 5th", "May 15th"],
            correctIndex: 0,
            explanation: "「五月」(Go-gatsu - May) + 「五日」(itsuka - 5th day)."
          },
          {
            type: "matching-pairs",
            prompt: "Match the irregular calendar days:",
            pairs: [
              {
                ja: "ふつか",
                en: "2nd day"
              },
              {
                ja: "みっか",
                en: "3rd day"
              },
              {
                ja: "よっか",
                en: "4th day"
              },
              {
                ja: "とおか",
                en: "10th day"
              }
            ]
          }
        ]
      },
      {
        id: "lesson-6-3",
        title: "Birthdays & Time Expressions",
        subtitle: "Tanjoubi wa itsu desu ka? When is your birthday?",
        icon: "Gift",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you ask \"When is your birthday?\"",
            audioText: "たんじょうび は いつ ですか",
            kanji: "誕生日はいつですか",
            furigana: "たんじょうび は いつ ですか",
            romaji: "Tanjoubi wa itsu desu ka",
            options: ["たんじょうび は いつ ですか (Tanjoubi wa itsu desu ka)", "たんじょうび は どこ ですか (Tanjoubi wa doko desu ka)", "たんじょうび は だれ ですか (Tanjoubi wa dare desu ka)", "たんじょうび は なん ですか (Tanjoubi wa nan desu ka)"],
            correctIndex: 0,
            explanation: "「いつ」(itsu) means \"when\". 「誕生日」(tanjoubi) means birthday."
          },
          {
            type: "sentence-builder",
            prompt: "Assemble: \"Next week is a holiday.\"",
            audioText: "らいしゅう は やすみ です",
            targetSentence: ["らいしゅう", "は", "やすみ", "です"],
            tokens: ["らいしゅう", "は", "やすみ", "です", "こんしゅう", "せんしゅう"],
            furigana: "来週 は 休み です",
            romaji: "Raishuu wa yasumi desu",
            explanation: "「来週」(raishuu - next week) + 「休み」(yasumi - holiday/break)."
          },
          {
            type: "matching-pairs",
            prompt: "Match past, present, and future time words:",
            pairs: [
              {
                ja: "きょねん",
                en: "Last year"
              },
              {
                ja: "ことし",
                en: "This year"
              },
              {
                ja: "らいねん",
                en: "Next year"
              },
              {
                ja: "こんしゅう",
                en: "This week"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "Which word means \"Last week\"?",
            targetEn: "Last week",
            options: ["せんしゅう (Senshuu)", "こんしゅう (Konshuu)", "らいしゅう (Raishuu)", "まいしゅう (Maishuu)"],
            correctIndex: 0,
            audioText: "せんしゅう",
            explanation: "「先週」(senshuu) = last week. 「今週」(konshuu) = this week. 「来週」(raishuu) = next week."
          }
        ]
      },
      {
        id: "lesson-6-chest",
        title: "Unit 6 Calendar Chest",
        subtitle: "Calendar Master Unlocked!",
        isChest: true,
        gemReward: 90,
        xpReward: 50
      }
    ]
  },
  {
    id: "unit-7",
    unitNumber: 7,
    title: "Objects, Demonstratives & Shopping",
    japaneseTitle: "物とこれ・それ・あれ・どれ",
    description: "Master Kore, Sore, Are, Dore, Kono, Sono, Ano, and asking how much things cost.",
    color: "#F97316",
    bgGradient: "from-orange-500 to-amber-600",
    lessons: [
      {
        id: "lesson-7-1",
        title: "Kore, Sore, Are & Dore",
        subtitle: "This, That, That over there, Which",
        icon: "Package",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "Which demonstrative is used for something near the listener?",
            audioText: "それ",
            kanji: "それ",
            furigana: "それ",
            romaji: "Sore",
            options: ["それ (Sore - That near you)", "これ (Kore - This near me)", "あれ (Are - That over there)", "どれ (Dore - Which one)"],
            correctIndex: 0,
            explanation: "「これ」is near speaker, 「それ」is near listener, 「あれ」is far from both."
          },
          {
            type: "sentence-builder",
            prompt: "Build: \"What is that over there?\"",
            audioText: "あれ は なん ですか",
            targetSentence: ["あれ", "は", "なん", "ですか"],
            tokens: ["あれ", "は", "なん", "ですか", "これ", "だれ"],
            furigana: "あれ は 何 ですか",
            romaji: "Are wa nan desu ka",
            explanation: "「あれ」(that over there) + 「何ですか」(what is it?)."
          },
          {
            type: "audio-listening",
            prompt: "Listen and identify the object:",
            audioText: "これ は ほん です",
            kanji: "これは本です",
            furigana: "これ は ほん です",
            romaji: "Kore wa hon desu",
            options: ["This is a book", "This is a pen", "That is an umbrella", "This is a clock"],
            correctIndex: 0,
            explanation: "「本」(hon) means book. 「これは本です」(This is a book)."
          },
          {
            type: "matching-pairs",
            prompt: "Match the demonstrative pronouns:",
            pairs: [
              {
                ja: "これ",
                en: "This (near speaker)"
              },
              {
                ja: "それ",
                en: "That (near listener)"
              },
              {
                ja: "あれ",
                en: "That (far from both)"
              },
              {
                ja: "どれ",
                en: "Which one?"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "Which word means \"Umbrella\"?",
            targetEn: "Umbrella",
            options: ["かさ (Kasa)", "かばん (Kaban)", "さいふ (Saifu)", "とけい (Tokei)"],
            correctIndex: 0,
            audioText: "かさ",
            explanation: "「傘 / かさ」(kasa) means umbrella."
          }
        ]
      },
      {
        id: "lesson-7-2",
        title: "Kono, Sono, Ano + Noun",
        subtitle: "Specifying exact objects: This book, That bag",
        icon: "Bookmark",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "What is the grammatical difference between 「これ」 and 「この」?",
            audioText: "この ほん",
            kanji: "この本",
            furigana: "この ほん",
            romaji: "Kono hon",
            options: ["「この」must be followed directly by a noun (e.g. この本)", "「これ」can only be used for people", "There is no difference, they are identical", "「この」is only for questions"],
            correctIndex: 0,
            explanation: "「この」(kono) is a pre-noun modifier and MUST be attached to a noun (e.g., この本 - this book)."
          },
          {
            type: "sentence-builder",
            prompt: "Translate: \"Whose watch is this watch?\"",
            audioText: "この とけい は だれ の ですか",
            targetSentence: ["この", "とけい", "は", "だれ", "の", "ですか"],
            tokens: ["この", "とけい", "は", "だれ", "の", "ですか", "その", "本"],
            furigana: "この 時計 は 誰 の ですか",
            romaji: "Kono tokei wa dare no desu ka",
            explanation: "「だれ の」(whose) + 「ですか」(question)."
          },
          {
            type: "audio-listening",
            prompt: "Listen and select the translation:",
            audioText: "その かばん は わたし の です",
            kanji: "その鞄は私のものです",
            furigana: "その かばん は わたし の です",
            romaji: "Sono kaban wa watashi no desu",
            options: ["That bag is mine", "This watch is yours", "That umbrella is Ken's", "Where is my bag?"],
            correctIndex: 0,
            explanation: "「鞄」(kaban - bag) + 「私のです」(is mine)."
          },
          {
            type: "matching-pairs",
            prompt: "Match the daily belongings:",
            pairs: [
              {
                ja: "かばん",
                en: "Bag / Backpack"
              },
              {
                ja: "さいふ",
                en: "Wallet"
              },
              {
                ja: "とけい",
                en: "Watch / Clock"
              },
              {
                ja: "じしょ",
                en: "Dictionary"
              }
            ]
          }
        ]
      },
      {
        id: "lesson-7-3",
        title: "Prices & Shopping Transactions",
        subtitle: "Kore o kudasai & Asking prices with Ikura",
        icon: "ShoppingBag",
        xpReward: 30,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you say \"Please give me this one\" in a shop?",
            audioText: "これ を ください",
            kanji: "これをください",
            furigana: "これ を ください",
            romaji: "Kore o kudasai",
            options: ["これ を ください (Kore o kudasai)", "これ は なん ですか (Kore wa nan desu ka)", "それ は いくら ですか (Sore wa ikura desu ka)", "ありがとう ございます (Arigatou gozaimasu)"],
            correctIndex: 0,
            explanation: "Item + 「を ください」(please give me)."
          },
          {
            type: "sentence-builder",
            prompt: "Translate: \"That camera is 20,000 yen.\"",
            audioText: "その カメラ は にまん えん です",
            targetSentence: ["その", "カメラ", "は", "にまん", "えん", "です"],
            tokens: ["その", "カメラ", "は", "にまん", "えん", "です", "この", "せん"],
            furigana: "その カメラ は 二万 円 です",
            romaji: "Sono kamera wa niman en desu",
            explanation: "「万」(man) is the unit of 10,000. 二万 (ni-man) = 20,000."
          },
          {
            type: "matching-pairs",
            prompt: "Match large numerical currency units:",
            pairs: [
              {
                ja: "ひゃく",
                en: "100 (Hundred)"
              },
              {
                ja: "せん",
                en: "1,000 (Thousand)"
              },
              {
                ja: "いちまん",
                en: "10,000 (Ten thousand)"
              },
              {
                ja: "えん",
                en: "Yen (¥)"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "Which phrase means \"Welcome to our shop!\"?",
            targetEn: "Welcome (Shop greeting)",
            options: ["いらっしゃいませ (Irasshaimase)", "ごちそうさまでした (Gochisousama deshita)", "失礼します (Shitsurei shimasu)", "おじゃまします (Ojamashimasu)"],
            correctIndex: 0,
            audioText: "いらっしゃいませ",
            explanation: "Staff greet customers upon entering with 「いらっしゃいませ！」."
          }
        ]
      },
      {
        id: "lesson-7-chest",
        title: "Unit 7 Merchant Chest",
        subtitle: "Shopping Savvy Unlocked!",
        isChest: true,
        gemReward: 100,
        xpReward: 50
      }
    ]
  },
  {
    id: "unit-8",
    unitNumber: 8,
    title: "Locations, Positions & Existence",
    japaneseTitle: "場所と位置・いますとあります",
    description: "Express where things and people are located using います, あります, 上, 下, 前, 後ろ, and 隣.",
    color: "#14B8A6",
    bgGradient: "from-teal-500 to-emerald-600",
    lessons: [
      {
        id: "lesson-8-1",
        title: "Existence: あります vs います",
        subtitle: "Inanimate vs Animate items and people",
        icon: "HelpCircle",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "When describing the existence of people and animals, which verb is used?",
            audioText: "います",
            kanji: "居ます",
            furigana: "います",
            romaji: "Imasu",
            options: ["います (Imasu - Living beings)", "あります (Arimasu - Inanimate objects)", "いきます (Ikimasu - Go)", "きます (Kimasu - Come)"],
            correctIndex: 0,
            explanation: "「います」(imasu) is strictly for living, animate entities (people, dogs, cats). 「あります」(arimasu) is for non-living objects and plants."
          },
          {
            type: "sentence-builder",
            prompt: "Assemble: \"There is a cat in the room.\"",
            audioText: "へや に ねこ が います",
            targetSentence: ["へや", "に", "ねこ", "が", "います"],
            tokens: ["へや", "に", "ねこ", "が", "います", "あります", "を"],
            furigana: "部屋 に 猫 が 居ます",
            romaji: "Heya ni neko ga imasu",
            explanation: "Place + 「に」(location marker) + Subject + 「が」(subject marker) + 「います」."
          },
          {
            type: "audio-listening",
            prompt: "Listen and select the meaning:",
            audioText: "つくえ の うえ に ほん が あります",
            kanji: "机の上に本があります",
            furigana: "つくえ の うえ に ほん が あります",
            romaji: "Tsukue no ue ni hon ga arimasu",
            options: ["There is a book on top of the desk", "There is a cat under the chair", "The desk is next to the bed", "Where is the book?"],
            correctIndex: 0,
            explanation: "「机」(tsukue - desk) + 「の上」(on top) + 「本があります」(there is a book)."
          },
          {
            type: "matching-pairs",
            prompt: "Match animate and inanimate verbs:",
            pairs: [
              {
                ja: "いぬ が います",
                en: "There is a dog (living)"
              },
              {
                ja: "くるま が あります",
                en: "There is a car (inanimate)"
              },
              {
                ja: "ひと が います",
                en: "There is a person (living)"
              },
              {
                ja: "ほん が あります",
                en: "There is a book (inanimate)"
              }
            ]
          }
        ]
      },
      {
        id: "lesson-8-2",
        title: "Spatial Positions & Directions",
        subtitle: "Ue, Shita, Mae, Ushiro & Tonari",
        icon: "Compass",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "What does 「下」(した - shita) mean?",
            audioText: "した",
            kanji: "下",
            furigana: "した",
            romaji: "Shita",
            options: ["Under / Below", "On / Above", "In front", "Behind"],
            correctIndex: 0,
            explanation: "「下」(shita) means below or under. 「上」(ue) means above or on top."
          },
          {
            type: "sentence-builder",
            prompt: "Translate: \"In front of the station\"",
            audioText: "えき の まえ",
            targetSentence: ["えき", "の", "まえ"],
            tokens: ["えき", "の", "まえ", "うしろ", "なか", "うえ"],
            furigana: "駅 の 前",
            romaji: "Eki no mae",
            explanation: "Reference noun + 「の」+ Spatial noun (前 - mae)."
          },
          {
            type: "audio-listening",
            prompt: "Listen and choose the location described:",
            audioText: "ぎんこう の となり",
            kanji: "銀行の隣",
            furigana: "ぎんこう の となり",
            romaji: "Ginkou no tonari",
            options: ["Next to the bank", "Inside the bank", "Behind the hospital", "In front of the post office"],
            correctIndex: 0,
            explanation: "「銀行」(ginkou - bank) + 「隣」(tonari - next to)."
          },
          {
            type: "matching-pairs",
            prompt: "Match spatial location words:",
            pairs: [
              {
                ja: "うえ",
                en: "Above / On top"
              },
              {
                ja: "した",
                en: "Below / Under"
              },
              {
                ja: "うしろ",
                en: "Behind / Back"
              },
              {
                ja: "なか",
                en: "Inside"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "Which word means \"Between\"?",
            targetEn: "Between",
            options: ["あいだ (Aida)", "となり (Tonari)", "ちかく (Chikaku)", "まえ (Mae)"],
            correctIndex: 0,
            audioText: "あいだ",
            explanation: "「間」(aida) means between (e.g. A と B の間)."
          }
        ]
      },
      {
        id: "lesson-8-3",
        title: "Asking Directions & Public Facilities",
        subtitle: "Doko desu ka? Finding bathrooms, stations & stores",
        icon: "MapPin",
        xpReward: 30,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you ask \"Excuse me, where is the restroom?\"",
            audioText: "すみません おてあらい は どこ ですか",
            kanji: "すみません、お手洗いはどこですか",
            furigana: "すみません おてあらい は どこ ですか",
            romaji: "Sumimasen, otearai wa doko desu ka",
            options: ["すみません おてあらい は どこ ですか (Where is the restroom?)", "おてあらい は いくら ですか (How much is the restroom?)", "おてあらい は なん ですか (What is the restroom?)", "おてあらい は だれ ですか (Who is the restroom?)"],
            correctIndex: 0,
            explanation: "「お手洗い」(otearai) is the polite term for restroom / bathroom + 「どこですか」(where is it?)."
          },
          {
            type: "sentence-builder",
            prompt: "Build: \"The convenience store is over there.\"",
            audioText: "コンビニ は あそこ です",
            targetSentence: ["コンビニ", "は", "あそこ", "です"],
            tokens: ["コンビニ", "は", "あそこ", "です", "ここ", "そこ"],
            furigana: "コンビニ は あそこ です",
            romaji: "Konbini wa asoko desu",
            explanation: "「あそこ」(asoko) refers to a location far from both the speaker and listener."
          },
          {
            type: "matching-pairs",
            prompt: "Match the essential city locations:",
            pairs: [
              {
                ja: "えき",
                en: "Train Station"
              },
              {
                ja: "びょういん",
                en: "Hospital"
              },
              {
                ja: "ゆうびんきょく",
                en: "Post Office"
              },
              {
                ja: "こうばん",
                en: "Police Box"
              }
            ]
          }
        ]
      },
      {
        id: "lesson-8-chest",
        title: "Unit 8 Explorer Chest",
        subtitle: "Spatial Navigator Unlocked!",
        isChest: true,
        gemReward: 100,
        xpReward: 50
      }
    ]
  },
  {
    id: "unit-9",
    unitNumber: 9,
    title: "City Navigation & Transportation",
    japaneseTitle: "街の移動と乗り物",
    description: "Learn modes of transport (train, bus, bike, walk) and movement verbs 行きます, 来ます, 帰ります with particles で and へ.",
    color: "#6366F1",
    bgGradient: "from-indigo-500 to-violet-600",
    lessons: [
      {
        id: "lesson-9-1",
        title: "Means of Transport & Particle で",
        subtitle: "Densha, Basu, Kuruma de Ikimasu",
        icon: "Navigation",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "Which particle is used to mark the method or means of transportation?",
            audioText: "で",
            kanji: "で",
            furigana: "で",
            romaji: "De",
            options: ["で (De - By means of)", "へ (He/E - Direction)", "を (O - Direct Object)", "に (Ni - Target/Time)"],
            correctIndex: 0,
            explanation: "The particle 「で」(de) indicates the instrument or means by which an action is performed. Example: 電車で行きます (Go by train)."
          },
          {
            type: "sentence-builder",
            prompt: "Assemble: \"I go by train.\"",
            audioText: "でんしゃ で いきます",
            targetSentence: ["でんしゃ", "で", "いきます"],
            tokens: ["でんしゃ", "で", "いきます", "バス", "へ", "きます"],
            furigana: "電車 で 行きます",
            romaji: "Densha de ikimasu",
            explanation: "「電車」(densha - train) + 「で」(by) + 「行きます」(go)."
          },
          {
            type: "audio-listening",
            prompt: "Listen and select the means of transportation:",
            audioText: "ひこうき",
            kanji: "飛行機",
            furigana: "ひこうき",
            romaji: "Hikouki",
            options: ["Airplane", "Subway / Train", "Bicycle", "Taxi"],
            correctIndex: 0,
            explanation: "「飛行機」(hikouki) means airplane."
          },
          {
            type: "matching-pairs",
            prompt: "Match the vehicles:",
            pairs: [
              {
                ja: "でんしゃ",
                en: "Train"
              },
              {
                ja: "バス",
                en: "Bus"
              },
              {
                ja: "じてんしゃ",
                en: "Bicycle"
              },
              {
                ja: "ちかてつ",
                en: "Subway"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "How do you say \"On foot / Walking\"?",
            targetEn: "On foot / Walking",
            options: ["あるいて (Aruite)", "はしって (Hashitte)", "くるまで (Kuruma de)", "タクシーで (Takushii de)"],
            correctIndex: 0,
            audioText: "あるいて",
            explanation: "「歩いて」(aruite) means \"on foot\". Notice it does NOT take particle 「で」."
          }
        ]
      },
      {
        id: "lesson-9-2",
        title: "Movement Verbs & Particle へ",
        subtitle: "Ikimasu, Kimasu & Kaerimasu",
        icon: "Compass",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "What does the verb 「帰ります」(かえります - kaerimasu) specifically mean?",
            audioText: "かえります",
            kanji: "帰ります",
            furigana: "かえります",
            romaji: "Kaerimasu",
            options: ["Return / Go home to one's place of origin", "Go forward to a new place", "Come toward the speaker", "Travel for sightseeing"],
            correctIndex: 0,
            explanation: "「帰ります」(kaerimasu) means to return home, to one's country, or home base."
          },
          {
            type: "sentence-builder",
            prompt: "Translate: \"I will go to Japan.\"",
            audioText: "にほん へ いきます",
            targetSentence: ["にほん", "へ", "いきます"],
            tokens: ["にほん", "へ", "いきます", "から", "で", "きます"],
            furigana: "日本 へ 行きます",
            romaji: "Nihon e ikimasu",
            explanation: "Destination + particle 「へ」(pronounced \"e\") + movement verb 「行きます」."
          },
          {
            type: "audio-listening",
            prompt: "Listen and select where the person is returning:",
            audioText: "うち へ かえります",
            kanji: "家へ帰ります",
            furigana: "うち へ かえります",
            romaji: "Uchi e kaerimasu",
            options: ["Returning home", "Going to school", "Going to the office", "Coming to the party"],
            correctIndex: 0,
            explanation: "「うち」(uchi) means home / house. 「うちへ帰ります」(I am going home)."
          },
          {
            type: "matching-pairs",
            prompt: "Match the destinations:",
            pairs: [
              {
                ja: "がっこう",
                en: "School"
              },
              {
                ja: "かいしゃ",
                en: "Company / Workplace"
              },
              {
                ja: "うち",
                en: "Home"
              },
              {
                ja: "くに",
                en: "Home country"
              }
            ]
          }
        ]
      },
      {
        id: "lesson-9-3",
        title: "Travel Time & Commute Duration",
        subtitle: "Dono kurai kakarimasu ka? How long does it take?",
        icon: "Timer",
        xpReward: 30,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you ask \"How long does it take?\" in Japanese?",
            audioText: "どのくらい かかりますか",
            kanji: "どのくらい掛かりますか",
            furigana: "どのくらい かかりますか",
            romaji: "Dono kurai kakarimasu ka",
            options: ["どのくらい かかりますか (Dono kurai kakarimasu ka)", "いくら ですか (Ikura desu ka)", "どこ ですか (Doko desu ka)", "なんじ ですか (Nan-ji desu ka)"],
            correctIndex: 0,
            explanation: "「どのくらい」(about how long/much) + 「かかりますか」(does it take time/money)."
          },
          {
            type: "sentence-builder",
            prompt: "Assemble: \"It takes 1 hour by train.\"",
            audioText: "でんしゃ で いちじかん かかります",
            targetSentence: ["でんしゃ", "で", "いちじかん", "かかります"],
            tokens: ["でんしゃ", "で", "いちじかん", "かかります", "分", "へ"],
            furigana: "電車 で 一時間 掛かります",
            romaji: "Densha de ichi-jikan kakarimasu",
            explanation: "「一時間」(ichi-jikan - one hour) + 「かかります」(takes)."
          },
          {
            type: "matching-pairs",
            prompt: "Match duration counters:",
            pairs: [
              {
                ja: "いちじかん",
                en: "1 hour"
              },
              {
                ja: "にじかん",
                en: "2 hours"
              },
              {
                ja: "じゅっぷん",
                en: "10 minutes"
              },
              {
                ja: "さんじゅっぷん",
                en: "30 minutes (Half hour)"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "Which word means \"Together with a friend\"?",
            targetEn: "Together with a friend",
            options: ["ともだち と いっしょ に (Tomodachi to issho ni)", "ひとりで (Hitori de)", "だれと (Dare to)", "どこへ (Doko e)"],
            correctIndex: 0,
            audioText: "ともだち と いっしょ に",
            explanation: "「友達 と」(with a friend) + 「一緒に」(issho ni - together)."
          }
        ]
      },
      {
        id: "lesson-9-chest",
        title: "Unit 9 Voyager Chest",
        subtitle: "Transit Prodigy Unlocked!",
        isChest: true,
        gemReward: 120,
        xpReward: 60
      }
    ]
  },
  {
    id: "unit-10",
    unitNumber: 10,
    title: "Family & Relatives",
    japaneseTitle: "家族と親戚",
    description: "Learn how to talk about your own family versus someone else's family with humility and respect.",
    color: "#E11D48",
    bgGradient: "from-rose-500 to-red-600",
    lessons: [
      {
        id: "lesson-10-1",
        title: "My Family vs Other People's Family",
        subtitle: "Chichi/Haha vs Otousan/Okaasan",
        icon: "Heart",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "When speaking humbly to an outsider about your own mother, which word do you use?",
            audioText: "はは",
            kanji: "母",
            furigana: "はは",
            romaji: "Haha",
            options: ["はは (Haha - My mother)", "おかあさん (Okaasan - Mother/Someone else's mother)", "ちち (Chichi - My father)", "おばあさん (Obaasan - Grandmother)"],
            correctIndex: 0,
            explanation: "In Japanese polite culture, you use 「母」(haha) for your own mother when talking to outsiders, and 「お母さん」(okaasan) when addressing or referring to someone else's mother."
          },
          {
            type: "sentence-builder",
            prompt: "Build: \"My father is an office worker.\"",
            audioText: "ちち は かいしゃいん です",
            targetSentence: ["ちち", "は", "かいしゃいん", "です"],
            tokens: ["ちち", "は", "かいしゃいん", "です", "おとうさん", "いしゃ"],
            furigana: "父 は 会社員 です",
            romaji: "Chichi wa kaishain desu",
            explanation: "「父」(chichi - my father) + 「会社員」(kaishain - office worker)."
          },
          {
            type: "audio-listening",
            prompt: "Listen and identify whose family member is being asked about:",
            audioText: "おとうさん は おげんき ですか",
            kanji: "お父さんはお元気ですか",
            furigana: "おとうさん は おげんき ですか",
            romaji: "Otousan wa ogenki desu ka",
            options: ["How is your father doing?", "Where is my father?", "Is your mother well?", "How is your grandfather?"],
            correctIndex: 0,
            explanation: "「お父さん」(otousan) politely refers to the other person's father."
          },
          {
            type: "matching-pairs",
            prompt: "Match own family words to polite other-family words:",
            pairs: [
              {
                ja: "ちち (Chichi)",
                en: "おとうさん (Otousan)"
              },
              {
                ja: "はは (Haha)",
                en: "おかあさん (Okaasan)"
              },
              {
                ja: "あに (Ani)",
                en: "おにいさん (Oniisan)"
              },
              {
                ja: "あね (Ane)",
                en: "おねえさん (Oneesan)"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "Which word means \"Little sister (humble / own)\"?",
            targetEn: "Little sister (own)",
            options: ["いもうと (Imouto)", "おとうと (Otouto)", "あね (Ane)", "いもうとさん (Imouto-san)"],
            correctIndex: 0,
            audioText: "いもうと",
            explanation: "「妹」(imouto) is one's own younger sister. 「妹さん」(imouto-san) is someone else's."
          }
        ]
      },
      {
        id: "lesson-10-2",
        title: "Siblings & People Counters (〜人)",
        subtitle: "Hitori, Futari, Sannin & Kazoku",
        icon: "Users",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you say \"Two people\" in Japanese?",
            audioText: "ふたり",
            kanji: "二人",
            furigana: "ふたり",
            romaji: "Futari",
            options: ["ふたり (Futari)", "ひとり (Hitori)", "ににん (Ni-nin)", "さんにん (Sannin)"],
            correctIndex: 0,
            explanation: "One person is 「一人」(hitori) and two people is 「二人」(futari). From 3 onwards, add -nin (三人: sannin)."
          },
          {
            type: "sentence-builder",
            prompt: "Assemble: \"I have a family of 4 people.\"",
            audioText: "かぞく は よにん です",
            targetSentence: ["かぞく", "は", "よにん", "です"],
            tokens: ["かぞく", "は", "よにん", "です", "ごにん", "きょうだい"],
            furigana: "家族 は 四人 です",
            romaji: "Kazoku wa yonin desu",
            explanation: "「家族」(kazoku - family) + 「四人」(yonin - 4 people)."
          },
          {
            type: "audio-listening",
            prompt: "Listen and select how many siblings:",
            audioText: "きょうだい が さんにん います",
            kanji: "兄弟が三人います",
            furigana: "きょうだい が さんにん います",
            romaji: "Kyoudai ga sannin imasu",
            options: ["3 siblings", "4 siblings", "2 siblings", "Only child"],
            correctIndex: 0,
            explanation: "「兄弟」(kyoudai - siblings) + 「三人」(sannin - 3 people)."
          },
          {
            type: "matching-pairs",
            prompt: "Match people counters:",
            pairs: [
              {
                ja: "ひとり",
                en: "1 person (Alone)"
              },
              {
                ja: "ふたり",
                en: "2 people"
              },
              {
                ja: "さんにん",
                en: "3 people"
              },
              {
                ja: "よにん",
                en: "4 people"
              }
            ]
          }
        ]
      },
      {
        id: "lesson-10-3",
        title: "Family Descriptions & Personality",
        subtitle: "Yasashii, Shinsetsu & Family Traits",
        icon: "Smile",
        xpReward: 30,
        questions: [
          {
            type: "multiple-choice",
            prompt: "What does 「やさしい」(Yasashii) mean when describing a parent or person?",
            audioText: "やさしい",
            kanji: "優しい",
            furigana: "やさしい",
            romaji: "Yasashii",
            options: ["Kind / Gentle", "Strict", "Busy", "Quiet"],
            correctIndex: 0,
            explanation: "「優しい」(yasashii) means kind, gentle, and caring."
          },
          {
            type: "sentence-builder",
            prompt: "Translate: \"My mother is very kind.\"",
            audioText: "はは は とても やさしい です",
            targetSentence: ["はは", "は", "とても", "やさしい", "です"],
            tokens: ["はは", "は", "とても", "やさしい", "です", "ちち", "しずか"],
            furigana: "母 は とても 優しい です",
            romaji: "Haha wa totemo yasashii desu",
            explanation: "「とても」(totemo - very) + 「優しい」(kind) + 「です」."
          },
          {
            type: "matching-pairs",
            prompt: "Match family members to English:",
            pairs: [
              {
                ja: "おとうと",
                en: "Younger brother"
              },
              {
                ja: "いもうと",
                en: "Younger sister"
              },
              {
                ja: "おじいさん",
                en: "Grandfather"
              },
              {
                ja: "おばあさん",
                en: "Grandmother"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "Which word means \"Child / Children\"?",
            targetEn: "Child / Children",
            options: ["こども (Kodomo)", "おとな (Otona)", "ともだち (Tomodachi)", "ひと (Hito)"],
            correctIndex: 0,
            audioText: "こども",
            explanation: "「子供 / こども」(kodomo) means child or children."
          }
        ]
      },
      {
        id: "lesson-10-chest",
        title: "Unit 10 Family Hearth Chest",
        subtitle: "Family Master Unlocked!",
        isChest: true,
        gemReward: 100,
        xpReward: 50
      }
    ]
  },
  {
    id: "unit-11",
    unitNumber: 11,
    title: "Daily Activities & Transitive Verbs",
    japaneseTitle: "日々の行動と目的語を",
    description: "Master the direct object marker を with essential action verbs (eat, drink, read, write, see).",
    color: "#2563EB",
    bgGradient: "from-blue-600 to-indigo-700",
    lessons: [
      {
        id: "lesson-11-1",
        title: "Action Verbs & Particle を",
        subtitle: "Tabemasu, Nomimasu & Food/Drink Objects",
        icon: "Coffee",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "Which particle directly marks the object receiving the action (e.g. eating bread)?",
            audioText: "を",
            kanji: "を",
            furigana: "を",
            romaji: "O (Wo)",
            options: ["を (O - Direct object marker)", "は (Wa - Topic marker)", "に (Ni - Target/Time)", "で (De - Location of action)"],
            correctIndex: 0,
            explanation: "The particle 「を」(written wo, pronounced o) marks the direct grammatical object of transitive verbs."
          },
          {
            type: "sentence-builder",
            prompt: "Build: \"I drink coffee in the morning.\"",
            audioText: "あさ コーヒー を のみます",
            targetSentence: ["あさ", "コーヒー", "を", "のみます"],
            tokens: ["あさ", "コーヒー", "を", "のみます", "たべます", "お茶"],
            furigana: "朝 コーヒー を 飲みます",
            romaji: "Asa koohii o nomimasu",
            explanation: "Time (朝) + Object (コーヒー) + を + Verb (飲みます)."
          },
          {
            type: "audio-listening",
            prompt: "Listen to the audio and select what the speaker eats:",
            audioText: "あさごはん に パン を たべます",
            kanji: "朝ご飯にパンを食べます",
            furigana: "あさごはん に パン を たべます",
            romaji: "Asagohan ni pan o tabemasu",
            options: ["Eats bread for breakfast", "Eats rice for dinner", "Drinks milk at breakfast", "Skips breakfast"],
            correctIndex: 0,
            explanation: "「パン」(pan - bread) + 「を食べます」(tabemasu - eat)."
          },
          {
            type: "matching-pairs",
            prompt: "Match daily action verbs:",
            pairs: [
              {
                ja: "たべます",
                en: "Eat"
              },
              {
                ja: "のみます",
                en: "Drink"
              },
              {
                ja: "かいます",
                en: "Buy"
              },
              {
                ja: "みます",
                en: "See / Watch"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "Which verb means \"To buy\"?",
            targetEn: "To buy",
            options: ["かいます (Kaimasu)", "うります (Urimasu)", "みます (Mimasu)", "ききます (Kikimasu)"],
            correctIndex: 0,
            audioText: "かいます",
            explanation: "「買います」(kaimasu) means to buy."
          }
        ]
      },
      {
        id: "lesson-11-2",
        title: "Reading, Writing & Listening",
        subtitle: "Yomimasu, Kakimasu & Kikimasu",
        icon: "BookOpen",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "What does 「しんぶん を よみます」 mean?",
            audioText: "しんぶん を よみます",
            kanji: "新聞を読みます",
            furigana: "しんぶん を よみます",
            romaji: "Shinbun o yomimasu",
            options: ["Read the newspaper", "Write a letter", "Listen to music", "Watch television"],
            correctIndex: 0,
            explanation: "「新聞」(shinbun - newspaper) + 「を読みます」(yomimasu - read)."
          },
          {
            type: "sentence-builder",
            prompt: "Translate: \"I write a letter to a friend.\"",
            audioText: "ともだち に てがみ を かきます",
            targetSentence: ["ともだち", "に", "てがみ", "を", "かきます"],
            tokens: ["ともだち", "に", "てがみ", "を", "かきます", "ほん", "よみます"],
            furigana: "友達 に 手紙 を 書きます",
            romaji: "Tomodachi ni tegami o kakimasu",
            explanation: "Recipient + 「に」 + Object + 「を」 + 「書きます」(kakimasu - write)."
          },
          {
            type: "audio-listening",
            prompt: "Listen and select what the person listens to:",
            audioText: "おんがく を ききます",
            kanji: "音楽を聞きます",
            furigana: "おんがく を ききます",
            romaji: "Ongaku o kikimasu",
            options: ["Listens to music", "Listens to the news", "Plays the guitar", "Reads a book"],
            correctIndex: 0,
            explanation: "「音楽」(ongaku - music) + 「を聞きます」(kikimasu - listen/hear)."
          },
          {
            type: "matching-pairs",
            prompt: "Match media objects to English:",
            pairs: [
              {
                ja: "ほん",
                en: "Book"
              },
              {
                ja: "ざっし",
                en: "Magazine"
              },
              {
                ja: "てがみ",
                en: "Letter"
              },
              {
                ja: "えいが",
                en: "Movie / Film"
              }
            ]
          }
        ]
      },
      {
        id: "lesson-11-3",
        title: "Action Locations & Particle で",
        subtitle: "Where actions take place (De vs Ni)",
        icon: "MapPin",
        xpReward: 30,
        questions: [
          {
            type: "multiple-choice",
            prompt: "When describing WHERE an active event occurs (e.g. studying in the library), which particle is used?",
            audioText: "で",
            kanji: "で",
            furigana: "で",
            romaji: "De",
            options: ["で (De - Location of action)", "に (Ni - Static existence/Time)", "へ (He - Direction)", "を (O - Direct object)"],
            correctIndex: 0,
            explanation: "「で」(de) marks the physical location where an active event or action happens."
          },
          {
            type: "sentence-builder",
            prompt: "Assemble: \"I study in the library.\"",
            audioText: "としょかん で べんきょうします",
            targetSentence: ["としょかん", "で", "べんきょうします"],
            tokens: ["としょかん", "で", "べんきょうします", "に", "へ", "学校"],
            furigana: "図書館 で 勉強します",
            romaji: "Toshokan de benkyou shimasu",
            explanation: "「図書館」(toshokan - library) + 「で」(at/in) + 「勉強します」(benkyou shimasu - study)."
          },
          {
            type: "matching-pairs",
            prompt: "Match places of activity:",
            pairs: [
              {
                ja: "としょかん",
                en: "Library"
              },
              {
                ja: "レストラン",
                en: "Restaurant"
              },
              {
                ja: "きょうしつ",
                en: "Classroom"
              },
              {
                ja: "へや",
                en: "Room"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "Which sentence means \"Where do you eat lunch?\"?",
            targetEn: "Where do you eat lunch?",
            options: ["どこ で ひるごはん を たべますか (Doko de hirugohan o tabemasu ka)", "どこ へ いきますか (Doko e ikimasu ka)", "だれ と たべますか (Dare to tabemasu ka)", "なん を たべますか (Nan o tabemasu ka)"],
            correctIndex: 0,
            audioText: "どこ で ひるごはん を たべますか",
            explanation: "「どこ で」(where at) + 「昼ご飯 を」(lunch) + 「食べますか」(eat?)."
          }
        ]
      },
      {
        id: "lesson-11-chest",
        title: "Unit 11 Action Chest",
        subtitle: "Transitive Verbs Mastered!",
        isChest: true,
        gemReward: 100,
        xpReward: 50
      }
    ]
  },
  {
    id: "unit-12",
    unitNumber: 12,
    title: "Giving, Receiving & Tools",
    japaneseTitle: "授受表現と道具の「で」",
    description: "Learn giving (あげます), receiving (もらいます), and using tools or languages with particle で.",
    color: "#84CC16",
    bgGradient: "from-lime-500 to-green-600",
    lessons: [
      {
        id: "lesson-12-1",
        title: "Giving & Receiving Gifts",
        subtitle: "Agemasu & Moraimasu with Particle に",
        icon: "Gift",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "What does 「あげます」(Agemasu) mean?",
            audioText: "あげます",
            kanji: "あげます",
            furigana: "あげます",
            romaji: "Agemasu",
            options: ["To give (to someone else)", "To receive (from someone)", "To borrow", "To return"],
            correctIndex: 0,
            explanation: "「あげます」(agemasu) means to give. The recipient is marked with 「に」."
          },
          {
            type: "sentence-builder",
            prompt: "Build: \"I give flowers to my mother.\"",
            audioText: "はは に はな を あげます",
            targetSentence: ["はは", "に", "はな", "を", "あげます"],
            tokens: ["はは", "に", "はな", "を", "あげます", "もらいました", "父"],
            furigana: "母 に 花 を あげます",
            romaji: "Haha ni hana o agemasu",
            explanation: "Recipient (母 に) + Item (花 を) + あげます."
          },
          {
            type: "audio-listening",
            prompt: "Listen and select what the person received:",
            audioText: "ともだち に プレゼント を もらいました",
            kanji: "友達にプレゼントをもらいました",
            furigana: "ともだち に プレゼント を もらいました",
            romaji: "Tomodachi ni purezento o moraimashita",
            options: ["Received a present from a friend", "Gave a present to a friend", "Bought a present for a friend", "Forgot the present"],
            correctIndex: 0,
            explanation: "「もらいました」(moraimashita) is the past tense of receive (received from friend)."
          },
          {
            type: "matching-pairs",
            prompt: "Match giving and receiving terms:",
            pairs: [
              {
                ja: "あげます",
                en: "To give"
              },
              {
                ja: "もらいます",
                en: "To receive"
              },
              {
                ja: "プレゼント",
                en: "Gift / Present"
              },
              {
                ja: "はな",
                en: "Flower"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "Which verb means \"To lend / let someone borrow\"?",
            targetEn: "To lend",
            options: ["かします (Kashimasu)", "かります (Karimasu)", "あげます (Agemasu)", "おしえます (Oshiemasu)"],
            correctIndex: 0,
            audioText: "かします",
            explanation: "「貸します」(kashimasu) = lend. 「借ります」(karimasu) = borrow."
          }
        ]
      },
      {
        id: "lesson-12-2",
        title: "Tools, Utensils & Languages (Particle で)",
        subtitle: "Hashi de, Nihongo de, Hasami de",
        icon: "Scissors",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you say \"I eat with chopsticks\"?",
            audioText: "はし で たべます",
            kanji: "箸で食べます",
            furigana: "はし で たべます",
            romaji: "Hashi de tabemasu",
            options: ["はし で たべます (Hashi de tabemasu)", "はし を たべます (Hashi o tabemasu)", "はし に たべます (Hashi ni tabemasu)", "はし と たべます (Hashi to tabemasu)"],
            correctIndex: 0,
            explanation: "「箸」(hashi - chopsticks) + 「で」(tool marker: with/by means of) + 「食べます」."
          },
          {
            type: "sentence-builder",
            prompt: "Translate: \"Please say it in Japanese.\"",
            audioText: "にほんご で いって ください",
            targetSentence: ["にほんご", "で", "いって", "ください"],
            tokens: ["にほんご", "で", "いって", "ください", "えいご", "を"],
            furigana: "日本語 で 言って ください",
            romaji: "Nihongo de itte kudasai",
            explanation: "Language + 「で」(in that language) + 「言ってください」(please say)."
          },
          {
            type: "audio-listening",
            prompt: "Listen and identify the tool used:",
            audioText: "はさみ で かみ を きります",
            kanji: "鋏で紙を切ります",
            furigana: "はさみ で かみ を きります",
            romaji: "Hasami de kami o kirimasu",
            options: ["Cut paper with scissors", "Write on paper with a pen", "Fold paper with hands", "Buy scissors and paper"],
            correctIndex: 0,
            explanation: "「はさみ」(hasami - scissors) + 「紙を切ります」(cut paper)."
          },
          {
            type: "matching-pairs",
            prompt: "Match tools and stationery:",
            pairs: [
              {
                ja: "はさみ",
                en: "Scissors"
              },
              {
                ja: "はし",
                en: "Chopsticks"
              },
              {
                ja: "スプーン",
                en: "Spoon"
              },
              {
                ja: "ナイフ",
                en: "Knife"
              }
            ]
          }
        ]
      },
      {
        id: "lesson-12-3",
        title: "Already & Not Yet: もう vs まだ",
        subtitle: "Mou shimashita & Mada desu",
        icon: "CheckCircle",
        xpReward: 30,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you reply \"No, not yet\" to a question asking if you finished something?",
            audioText: "いいえ まだ です",
            kanji: "いいえ、まだです",
            furigana: "いいえ まだ です",
            romaji: "Iie, mada desu",
            options: ["いいえ まだ です (Iie, mada desu)", "はい もう です (Hai, mou desu)", "いいえ もう しました (Iie, mou shimashita)", "はい まだ です (Hai, mada desu)"],
            correctIndex: 0,
            explanation: "「まだ」(mada) means \"not yet / still\". 「いいえ、まだです」is the standard response."
          },
          {
            type: "sentence-builder",
            prompt: "Assemble: \"I have already eaten lunch.\"",
            audioText: "もう ひるごはん を たべました",
            targetSentence: ["もう", "ひるごはん", "を", "たべました"],
            tokens: ["もう", "ひるごはん", "を", "たべました", "まだ", "たべます"],
            furigana: "もう 昼ご飯 を 食べました",
            romaji: "Mou hirugohan o tabemashita",
            explanation: "「もう」(mou - already) + past tense verb 「食べました」(ate)."
          },
          {
            type: "matching-pairs",
            prompt: "Match progress adverbs:",
            pairs: [
              {
                ja: "もう",
                en: "Already"
              },
              {
                ja: "まだ",
                en: "Not yet / Still"
              },
              {
                ja: "これから",
                en: "From now on"
              },
              {
                ja: "そろそろ",
                en: "Soon / It is time to..."
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "Which word means \"Already / Yet\"?",
            targetEn: "Already",
            options: ["もう (Mou)", "まだ (Mada)", "もっと (Motto)", "いつも (Itsumo)"],
            correctIndex: 0,
            audioText: "もう",
            explanation: "「もう」(mou) indicates an action has already occurred."
          }
        ]
      },
      {
        id: "lesson-12-chest",
        title: "Unit 12 Generosity Chest",
        subtitle: "Giving & Tools Mastery Unlocked!",
        isChest: true,
        gemReward: 110,
        xpReward: 55
      }
    ]
  },
  {
    id: "unit-13",
    unitNumber: 13,
    title: "Describing Things: い-Adjectives",
    japaneseTitle: "い形容詞の世界",
    description: "Master true Japanese adjectives ending in い: conjugations (past, negative), colors, and weather.",
    color: "#EAB308",
    bgGradient: "from-yellow-500 to-amber-600",
    lessons: [
      {
        id: "lesson-13-1",
        title: "Basic い-Adjectives & Opposites",
        subtitle: "Ookii, Chiisai, Atarashii & Furui",
        icon: "Layers",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "What is the opposite of 「大きい」(おおきい - Ookii: Big)?",
            audioText: "ちいさい",
            kanji: "小さい",
            furigana: "ちいさい",
            romaji: "Chiisai",
            options: ["ちいさい (Chiisai - Small)", "たかい (Takai - High/Expensive)", "ひくい (Hikui - Low)", "ながい (Nagai - Long)"],
            correctIndex: 0,
            explanation: "「大きい」(ookii - big) is the direct antonym of 「小さい」(chiisai - small)."
          },
          {
            type: "sentence-builder",
            prompt: "Build: \"Mount Fuji is high (tall).\"",
            audioText: "ふじさん は たかい です",
            targetSentence: ["ふじさん", "は", "たかい", "です"],
            tokens: ["ふじさん", "は", "たかい", "です", "ひくい", "おおきい"],
            furigana: "富士山 は 高い です",
            romaji: "Fujisan wa takai desu",
            explanation: "「富士山」(Fujisan - Mt Fuji) + 「高い」(takai - tall/high) + 「です」."
          },
          {
            type: "audio-listening",
            prompt: "Listen and select what is delicious:",
            audioText: "この ラーメン は おいしい です",
            kanji: "このラーメンは美味しいです",
            furigana: "この ラーメン は おいしい です",
            romaji: "Kono raamen wa oishii desu",
            options: ["This ramen is delicious", "That ramen is spicy", "This ramen is expensive", "The tea is hot"],
            correctIndex: 0,
            explanation: "「おいしい」(oishii - delicious)."
          },
          {
            type: "matching-pairs",
            prompt: "Match opposite い-adjectives:",
            pairs: [
              {
                ja: "あたらしい",
                en: "New"
              },
              {
                ja: "ふるい",
                en: "Old (Inanimate)"
              },
              {
                ja: "たかい",
                en: "Expensive / Tall"
              },
              {
                ja: "やすい",
                en: "Cheap / Inexpensive"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "Which word means \"Interesting / Fun\"?",
            targetEn: "Interesting / Fun",
            options: ["おもしろい (Omoshiroi)", "つまらない (Tsumaranai)", "たのしい (Tanoshii)", "むずかしい (Muzukashii)"],
            correctIndex: 0,
            audioText: "おもしろい",
            explanation: "「面白い / おもしろい」(omoshiroi) means interesting or funny."
          }
        ]
      },
      {
        id: "lesson-13-2",
        title: "Conjugating い-Adjectives",
        subtitle: "Negative (-kunai) & Past (-katta)",
        icon: "Activity",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you make an い-adjective negative (e.g. \"not cold\")?",
            audioText: "さむくない",
            kanji: "寒くない",
            furigana: "さむくない",
            romaji: "Samukunai",
            options: ["Drop the final 「い」 and add 「くない」 (さむくない)", "Add 「じゃありません」 at the end", "Put 「ない」 in front of the adjective", "Drop the final 「い」 and add 「かった」"],
            correctIndex: 0,
            explanation: "To conjugate い-adjectives to negative: drop the final [い] and attach [くない] (さむい → さむくない)."
          },
          {
            type: "sentence-builder",
            prompt: "Assemble: \"Yesterday was not hot.\"",
            audioText: "きのう は あつくなかった です",
            targetSentence: ["きのう", "は", "あつくなかった", "です"],
            tokens: ["きのう", "は", "あつくなかった", "です", "あつい", "あつくない"],
            furigana: "昨日 は 暑くなかった です",
            romaji: "Kinou wa atsukunakatta desu",
            explanation: "Past negative: drop [い] and add [くなかった] (暑い → 暑くなかった)."
          },
          {
            type: "audio-listening",
            prompt: "Listen and select how the test was:",
            audioText: "テスト は むずかしくなかった です",
            kanji: "テストは難しくなかったです",
            furigana: "テスト は むずかしくなかった です",
            romaji: "Tesuto wa muzukashikunakatta desu",
            options: ["The test was not difficult", "The test was very difficult", "The test was interesting", "The test was tomorrow"],
            correctIndex: 0,
            explanation: "「難しくなかった」(muzukashikunakatta) = was not difficult."
          },
          {
            type: "matching-pairs",
            prompt: "Match adjective forms for 「暑い」(Hot):",
            pairs: [
              {
                ja: "あつい (Atsui)",
                en: "Hot (Present Affirmative)"
              },
              {
                ja: "あつくない (Atsukunai)",
                en: "Not hot (Present Negative)"
              },
              {
                ja: "あつかった (Atsukatta)",
                en: "Was hot (Past Affirmative)"
              },
              {
                ja: "あつくなかった (Atsukunakatta)",
                en: "Was not hot (Past Negative)"
              }
            ]
          }
        ]
      },
      {
        id: "lesson-13-3",
        title: "Weather & Temperature Expressions",
        subtitle: "Samui, Atsui, Suzushii & Atatakai",
        icon: "SunMedium",
        xpReward: 30,
        questions: [
          {
            type: "multiple-choice",
            prompt: "Which word means \"Pleasantly cool (autumn weather)\"?",
            audioText: "すずしい",
            kanji: "涼しい",
            furigana: "すずしい",
            romaji: "Suzushii",
            options: ["すずしい (Suzushii - Cool)", "あたたかい (Atatakai - Warm)", "さむい (Samui - Cold)", "つめたい (Tsumetai - Cold to touch)"],
            correctIndex: 0,
            explanation: "「涼しい」(suzushii) is pleasantly cool weather. 「暖かい」(atatakai) is pleasantly warm."
          },
          {
            type: "sentence-builder",
            prompt: "Translate: \"Today is very cold.\"",
            audioText: "きょう は とても さむい です",
            targetSentence: ["きょう", "は", "とても", "さむい", "です"],
            tokens: ["きょう", "は", "とても", "さむい", "です", "すずしい", "きのう"],
            furigana: "今日 は とても 寒い です",
            romaji: "Kyou wa totemo samui desu",
            explanation: "「今日」(kyou - today) + 「寒い」(samui - cold climate) + 「です」."
          },
          {
            type: "matching-pairs",
            prompt: "Match climate and temperature words:",
            pairs: [
              {
                ja: "あつい",
                en: "Hot (Climate)"
              },
              {
                ja: "さむい",
                en: "Cold (Climate)"
              },
              {
                ja: "あたたかい",
                en: "Warm"
              },
              {
                ja: "つめたい",
                en: "Cold (To the touch/Drink)"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "Which word means \"Good / Fine\" (Irregular: いい / よい)?",
            targetEn: "Good / Fine",
            options: ["いい / よい (Ii / Yoi)", "わるい (Warui)", "おおい (Ooi)", "すくない (Sukunai)"],
            correctIndex: 0,
            audioText: "いい",
            explanation: "「いい」(ii) means good. Conjugations use its root 「よい」(よかったです / よくない)."
          }
        ]
      },
      {
        id: "lesson-13-chest",
        title: "Unit 13 Descriptive Chest",
        subtitle: "Adjective Master Unlocked!",
        isChest: true,
        gemReward: 120,
        xpReward: 60
      }
    ]
  },
  {
    id: "unit-14",
    unitNumber: 14,
    title: "Qualities & Preferences: な-Adjectives",
    japaneseTitle: "な形容詞と好き・嫌い",
    description: "Learn な-adjectives (quiet, famous, kind, energetic) and expressing preferences with 好き (like) and 上手 (skillful).",
    color: "#A855F7",
    bgGradient: "from-purple-500 to-pink-600",
    lessons: [
      {
        id: "lesson-14-1",
        title: "Qualities & な-Adjectives",
        subtitle: "Kirei, Shizuka, Yuumei & Shinsetsu",
        icon: "Sparkles",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "Despite ending with the sound \"i\", which of these is actually a な-adjective?",
            audioText: "きれい",
            kanji: "綺麗",
            furigana: "きれい",
            romaji: "Kirei",
            options: ["きれい (Kirei - Beautiful/Clean)", "おいしい (Oishii - Delicious)", "たかい (Takai - Tall/Expensive)", "あつい (Atsui - Hot)"],
            correctIndex: 0,
            explanation: "「きれい」(kirei - clean/pretty) and 「有名」(yuumei - famous) are famous exception な-adjectives."
          },
          {
            type: "sentence-builder",
            prompt: "Build: \"Kyoto is a quiet town.\"",
            audioText: "きょうと は しずかな まち です",
            targetSentence: ["きょうと", "は", "しずかな", "まち", "です"],
            tokens: ["きょうと", "は", "しずかな", "まち", "です", "しずか", "にぎやか"],
            furigana: "京都 は 静かな 町 です",
            romaji: "Kyouto wa shizuka na machi desu",
            explanation: "When modifying a noun directly, attach 「な」: 「静かな町」(quiet town)."
          },
          {
            type: "audio-listening",
            prompt: "Listen and select what is being described:",
            audioText: "この まち は ゆうめい です",
            kanji: "この町は有名です",
            furigana: "この まち は ゆうめい です",
            romaji: "Kono machi wa yuumei desu",
            options: ["This town is famous", "This town is quiet", "This room is clean", "That teacher is kind"],
            correctIndex: 0,
            explanation: "「町」(machi - town) + 「有名」(yuumei - famous)."
          },
          {
            type: "matching-pairs",
            prompt: "Match な-adjectives to English:",
            pairs: [
              {
                ja: "しずか (な)",
                en: "Quiet"
              },
              {
                ja: "にぎやか (な)",
                en: "Lively / Bustling"
              },
              {
                ja: "しんせつ (な)",
                en: "Kind / Helpful"
              },
              {
                ja: "げんき (な)",
                en: "Energetic / Healthy"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "Which word means \"Free time / Not busy\"?",
            targetEn: "Free time / Not busy",
            options: ["ひま (Hima)", "いそがしい (Isogashii)", "べんり (Benri)", "たいへん (Taihen)"],
            correctIndex: 0,
            audioText: "ひま",
            explanation: "「暇 / ひま」(hima) means having free time, opposite of 「忙しい」(isogashii - busy)."
          }
        ]
      },
      {
        id: "lesson-14-2",
        title: "Likes & Dislikes: 好き & 嫌い",
        subtitle: "Suki, Kirai & Particle が",
        icon: "ThumbsUp",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "Which particle marks the item you like or dislike with 「好き」(suki)?",
            audioText: "が",
            kanji: "が",
            furigana: "が",
            romaji: "Ga",
            options: ["が (Ga - Subject/Target of preference)", "を (O - Direct object)", "に (Ni - Location)", "で (De - Means)"],
            correctIndex: 0,
            explanation: "Because 「好き」(suki) is a な-adjective and not a verb, the thing you like takes particle 「が」(e.g. 猫が好きです)."
          },
          {
            type: "sentence-builder",
            prompt: "Assemble: \"I like Japanese food very much.\"",
            audioText: "にほんりょうり が だいすき です",
            targetSentence: ["にほんりょうり", "が", "だいすき", "です"],
            tokens: ["にほんりょうり", "が", "だいすき", "です", "を", "きらい"],
            furigana: "日本料理 が 大好き です",
            romaji: "Nihonryouri ga daisuki desu",
            explanation: "「日本料理」(Japanese cuisine) + 「が大好きです」(love / like very much)."
          },
          {
            type: "audio-listening",
            prompt: "Listen and select what the speaker does not like:",
            audioText: "さかな が すき じゃありません",
            kanji: "魚が好きじゃありません",
            furigana: "さかな が すき じゃありません",
            romaji: "Sakana ga suki ja arimasen",
            options: ["Does not like fish", "Likes meat very much", "Does not like vegetables", "Eats fish every day"],
            correctIndex: 0,
            explanation: "「魚」(sakana - fish) + 「好きじゃありません」(suki ja arimasen - do not like)."
          },
          {
            type: "matching-pairs",
            prompt: "Match degrees of preference:",
            pairs: [
              {
                ja: "だいすき",
                en: "Love / Like very much"
              },
              {
                ja: "すき",
                en: "Like"
              },
              {
                ja: "きらい",
                en: "Dislike"
              },
              {
                ja: "だいきらい",
                en: "Hate / Dislike very much"
              }
            ]
          }
        ]
      },
      {
        id: "lesson-14-3",
        title: "Skills & Talents: 上手 & 下手",
        subtitle: "Jouzu, Heta & Expressing Competence",
        icon: "Award",
        xpReward: 30,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you compliment someone: \"Your Japanese is very good!\"?",
            audioText: "にほんご が じょうず ですね",
            kanji: "日本語が上手ですね",
            furigana: "にほんご が じょうず ですね",
            romaji: "Nihongo ga jouzu desu ne",
            options: ["にほんご が じょうず ですね (Your Japanese is good!)", "にほんご が へた ですね (Your Japanese is poor!)", "にほんご が すき ですね (You like Japanese!)", "にほんご が わかりません (I don't understand Japanese)"],
            correctIndex: 0,
            explanation: "「上手」(jouzu) means skillful / good at. Adding 「ね」(ne) seeks mutual agreement."
          },
          {
            type: "sentence-builder",
            prompt: "Translate: \"I am not good at cooking.\"",
            audioText: "りょうり が へた です",
            targetSentence: ["りょうり", "が", "へた", "です"],
            tokens: ["りょうり", "が", "へた", "です", "じょうず", "スポーツ"],
            furigana: "料理 が 下手 です",
            romaji: "Ryouri ga heta desu",
            explanation: "「料理」(ryouri - cooking) + 「下手」(heta - unskillful) + 「です」."
          },
          {
            type: "matching-pairs",
            prompt: "Match skill and ability terms:",
            pairs: [
              {
                ja: "じょうず",
                en: "Skillful / Good at (Used for others)"
              },
              {
                ja: "へた",
                en: "Unskillful / Poor at"
              },
              {
                ja: "とくい",
                en: "Strong point (One's own skill)"
              },
              {
                ja: "にがて",
                en: "Weak point / Not good with"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "When someone compliments your Japanese with 「日本語が上手ですね」, what is the polite humble reply?",
            targetEn: "No, not at all (humble reply to praise)",
            options: ["いいえ、まだまだ です (No, I still have a long way to go)", "はい、とても じょうず です (Yes, I am very skillful)", "どういたしまして (You are welcome)", "さようなら (Goodbye)"],
            correctIndex: 0,
            audioText: "いいえ まだまだ です",
            explanation: "Japanese etiquette praises modesty: 「いいえ、まだまだです」(Iie, mada mada desu - No, not yet / I still have much to learn)."
          }
        ]
      },
      {
        id: "lesson-14-chest",
        title: "Unit 14 Harmony Chest",
        subtitle: "Adjectives & Preferences Mastered!",
        isChest: true,
        gemReward: 125,
        xpReward: 65
      }
    ]
  },
  {
    id: "unit-15",
    unitNumber: 15,
    title: "Invitations & Suggestions",
    japaneseTitle: "誘いと提案：〜ませんか・〜ましょう",
    description: "Learn how to invite friends out politely, suggest activities, and offer helpful assistance.",
    color: "#0EA5E9",
    bgGradient: "from-sky-500 to-indigo-600",
    lessons: [
      {
        id: "lesson-15-1",
        title: "Invitations: 〜ませんか",
        subtitle: "Issho ni ocha o nomimasen ka? Won't you drink tea with me?",
        icon: "Coffee",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you politely invite someone to eat lunch together?",
            audioText: "いっしょ に ひるごはん を たべませんか",
            kanji: "一緒に昼ご飯を食べませんか",
            furigana: "いっしょ に ひるごはん を たべませんか",
            romaji: "Issho ni hirugohan o tabemasen ka",
            options: ["いっしょ に ひるごはん を たべませんか (Won't you eat lunch together?)", "ひるごはん を たべました (I ate lunch)", "ひるごはん を たべたい です (I want to eat lunch)", "ひるごはん は なん ですか (What is lunch?)"],
            correctIndex: 0,
            explanation: "Negative question form [Verb-masen ka] is the standard, polite way to make an invitation without presuming."
          },
          {
            type: "sentence-builder",
            prompt: "Build: \"Won't you go to Kyoto together?\"",
            audioText: "いっしょ に きょうと へ いきませんか",
            targetSentence: ["いっしょ", "に", "きょうと", "へ", "いきませんか"],
            tokens: ["いっしょ", "に", "きょうと", "へ", "いきませんか", "いきます", "から"],
            furigana: "一緒 に 京都 へ 行きませんか",
            romaji: "Issho ni Kyouto e ikimasen ka",
            explanation: "「一緒に」(together) + Destination + 「へ」 + 「行きませんか」(won't you go?)."
          },
          {
            type: "audio-listening",
            prompt: "Listen and identify what activity is proposed:",
            audioText: "えいが を みませんか",
            kanji: "映画を見ませんか",
            furigana: "えいが を みませんか",
            romaji: "Eiga o mimasen ka",
            options: ["Won't you watch a movie?", "Did you watch a movie?", "Do you like movies?", "Where is the movie theater?"],
            correctIndex: 0,
            explanation: "「映画」(eiga - movie) + 「見ませんか」(mimasen ka - won't you watch?)."
          },
          {
            type: "matching-pairs",
            prompt: "Match invitation phrases:",
            pairs: [
              {
                ja: "いっしょ に",
                en: "Together"
              },
              {
                ja: "のみませんか",
                en: "Won't you drink?"
              },
              {
                ja: "いきませんか",
                en: "Won't you go?"
              },
              {
                ja: "いいですね",
                en: "Sounds great!"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "How do you enthusiastically accept an invitation (\"Yes, let's do that!\")?",
            targetEn: "Yes, let's! (Enthusiastic agreement)",
            options: ["ええ、そう しましょう (Ee, sou shimashou)", "いいえ、けっこう です (No, thank you)", "ちょっと... (Polite decline)", "わかりました (I understand)"],
            correctIndex: 0,
            audioText: "ええ そう しましょう",
            explanation: "「ええ、そうしましょう」(Ee, sou shimashou) means \"Yes, let's do that!\"."
          }
        ]
      },
      {
        id: "lesson-15-2",
        title: "Suggesting Actions: 〜ましょう",
        subtitle: "Ikimashou! Let's go! Taking the initiative",
        icon: "Sparkles",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "What does the ending 「〜ましょう」(mashou) express?",
            audioText: "いきましょう",
            kanji: "行きましょう",
            furigana: "いきましょう",
            romaji: "Ikimashou",
            options: ["Let's do [action]! (Proposal / Suggestion)", "I must do [action]", "I did not do [action]", "Please do [action]"],
            correctIndex: 0,
            explanation: "Replacing 「〜ます」 with 「〜ましょう」 turns the verb into \"Let's do...\"."
          },
          {
            type: "sentence-builder",
            prompt: "Assemble: \"Let's take a short break.\"",
            audioText: "ちょっと やすみましょう",
            targetSentence: ["ちょっと", "やすみましょう"],
            tokens: ["ちょっと", "やすみましょう", "たべましょう", "やすみました", "いま"],
            furigana: "ちょっと 休みましょう",
            romaji: "Chotto yasumimashou",
            explanation: "「ちょっと」(chotto - a little) + 「休みましょう」(yasumimashou - let's rest)."
          },
          {
            type: "audio-listening",
            prompt: "Listen and select what the group will start doing:",
            audioText: "べんきょう を はじめましょう",
            kanji: "勉強を始めましょう",
            furigana: "べんきょう を はじめましょう",
            romaji: "Benkyou o hajimemashou",
            options: ["Let's begin studying", "Let's finish studying", "Let's go to school", "Let's eat lunch"],
            correctIndex: 0,
            explanation: "「始めましょう」(hajimemashou) means \"let's start / begin\"."
          },
          {
            type: "matching-pairs",
            prompt: "Match suggestion verbs:",
            pairs: [
              {
                ja: "いきましょう",
                en: "Let's go!"
              },
              {
                ja: "たべましょう",
                en: "Let's eat!"
              },
              {
                ja: "のみましょう",
                en: "Let's drink!"
              },
              {
                ja: "かえりましょう",
                en: "Let's head home!"
              }
            ]
          }
        ]
      },
      {
        id: "lesson-15-3",
        title: "Offering Help & Declining Politely",
        subtitle: "Tetsudaimashou ka? & Chotto...",
        icon: "HandHeart",
        xpReward: 30,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you offer help: \"Shall I carry your luggage / bag?\"?",
            audioText: "にもつ を もちましょうか",
            kanji: "荷物を持ちましょうか",
            furigana: "にもつ を もちましょうか",
            romaji: "Nimotsu o mochimashou ka",
            options: ["にもつ を もちましょうか (Shall I carry your luggage?)", "にもつ を もってください (Please carry my luggage)", "にもつ が ありますか (Do you have luggage?)", "にもつ は どこ ですか (Where is the luggage?)"],
            correctIndex: 0,
            explanation: "「Verb-mashou ka」 offers help: \"Shall I do... for you?\"."
          },
          {
            type: "sentence-builder",
            prompt: "Translate: \"Shall I open the window?\"",
            audioText: "まど を あけましょうか",
            targetSentence: ["まど", "を", "あけましょうか"],
            tokens: ["まど", "を", "あけましょうか", "しめましょうか", "ドア", "て"],
            furigana: "窓 を 開けましょうか",
            romaji: "Mado o akemashou ka",
            explanation: "「窓」(mado - window) + 「を開けましょうか」(shall I open?)."
          },
          {
            type: "matching-pairs",
            prompt: "Match helpful offer phrases:",
            pairs: [
              {
                ja: "てつだいましょうか",
                en: "Shall I help you?"
              },
              {
                ja: "しゃしん を とりましょうか",
                en: "Shall I take a photo for you?"
              },
              {
                ja: "おねがいします",
                en: "Yes, please!"
              },
              {
                ja: "いいえ、けっこうです",
                en: "No, I am fine / No thank you"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "In Japanese culture, how do you gently decline an invitation without bluntly saying \"No\"?",
            targetEn: "That is a bit... (Polite refusal)",
            options: ["日曜日 は ちょっと... (Nichiyoubi wa chotto...)", "いや です (Iya desu)", "いきません (I will not go)", "きらい です (I hate it)"],
            correctIndex: 0,
            audioText: "にちようび は ちょっと",
            explanation: "Trailing off with 「〜はちょっと...」(wa chotto...) softens the refusal gracefully."
          }
        ]
      },
      {
        id: "lesson-15-chest",
        title: "Unit 15 Fellowship Chest",
        subtitle: "Invitations & Suggestions Mastered!",
        isChest: true,
        gemReward: 130,
        xpReward: 65
      }
    ]
  },
  {
    id: "unit-16",
    unitNumber: 16,
    title: "Desires & Purposes of Movement",
    japaneseTitle: "願望と目的：〜たい・〜に行きます",
    description: "Express what you want (欲しい), what you want to do (〜たい), and travel destinations with a purpose.",
    color: "#F43F5E",
    bgGradient: "from-rose-500 to-pink-600",
    lessons: [
      {
        id: "lesson-16-1",
        title: "Wanting Objects: 〜が欲しい",
        subtitle: "Atarashii kuruma ga hoshii desu. I want a new car",
        icon: "Heart",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "Which word is used when you want a physical thing or object?",
            audioText: "ほしい",
            kanji: "欲しい",
            furigana: "ほしい",
            romaji: "Hoshii",
            options: ["ほしい (Hoshii - Want an object)", "たい (Tai - Want to do an action)", "すき (Suki - Like)", "いい (Ii - Good)"],
            correctIndex: 0,
            explanation: "「欲しい」(hoshii) is an い-adjective used for wanting tangible things (marked with particle が)."
          },
          {
            type: "sentence-builder",
            prompt: "Build: \"I want a new computer.\"",
            audioText: "あたらしい パソコン が ほしい です",
            targetSentence: ["あたらしい", "パソコン", "が", "ほしい", "です"],
            tokens: ["あたらしい", "パソコン", "が", "ほしい", "です", "を", "古い"],
            furigana: "新しい パソコン が 欲しい です",
            romaji: "Atarashii pasokon ga hoshii desu",
            explanation: "Noun + 「が欲しいです」(ga hoshii desu)."
          },
          {
            type: "audio-listening",
            prompt: "Listen and select what the speaker does NOT want:",
            audioText: "いま なにも ほしくない です",
            kanji: "今何も欲しくないです",
            furigana: "いま なにも ほしくない です",
            romaji: "Ima nanimo hoshikunai desu",
            options: ["I don't want anything right now", "I want everything right now", "I want a new watch", "I want to sleep"],
            correctIndex: 0,
            explanation: "「何も」(nanimo - anything) + 「欲しくない」(hoshikunai - do not want)."
          },
          {
            type: "matching-pairs",
            prompt: "Match desire expressions:",
            pairs: [
              {
                ja: "ほしい",
                en: "Want (Present)"
              },
              {
                ja: "ほしくない",
                en: "Don't want (Negative)"
              },
              {
                ja: "ほしかった",
                en: "Wanted (Past)"
              },
              {
                ja: "なに が ほしい ですか",
                en: "What do you want?"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "Which word means \"Car\"?",
            targetEn: "Car / Automobile",
            options: ["くるま (Kuruma)", "じてんしゃ (Jitensha)", "でんしゃ (Densha)", "ひこうき (Hikouki)"],
            correctIndex: 0,
            audioText: "くるま",
            explanation: "「車 / くるま」(kuruma) means car."
          }
        ]
      },
      {
        id: "lesson-16-2",
        title: "Wanting to Do: Verb Stem + 〜たい",
        subtitle: "Tabetai, Ikitai & Desired Actions",
        icon: "Flame",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you say \"I want to eat ramen\"?",
            audioText: "ラーメン が たべたい です",
            kanji: "ラーメンが食べたいです",
            furigana: "ラーメン が たべたい です",
            romaji: "Raamen ga tabetai desu",
            options: ["ラーメン が たべたい です (Raamen ga tabetai desu)", "ラーメン を たべます (Raamen o tabemasu)", "ラーメン が ほしい です (Raamen ga hoshii desu)", "ラーメン を たべませんか (Raamen o tabemasen ka)"],
            correctIndex: 0,
            explanation: "Drop 「〜ます」 and add 「〜たい」: 食べます → 食べたい."
          },
          {
            type: "sentence-builder",
            prompt: "Assemble: \"I want to go to Japan.\"",
            audioText: "にほん へ いきたい です",
            targetSentence: ["にほん", "へ", "いきたい", "です"],
            tokens: ["にほん", "へ", "いきたい", "です", "いきました", "から"],
            furigana: "日本 へ 行きたい です",
            romaji: "Nihon e ikitai desu",
            explanation: "「行きます」 stem 「行き」 + 「たい」(ikitai - want to go)."
          },
          {
            type: "audio-listening",
            prompt: "Listen and select what the speaker does NOT want to drink:",
            audioText: "おさけ は のみたくない です",
            kanji: "お酒は飲みたくないです",
            furigana: "おさけ は のみたくない です",
            romaji: "Osake wa nomitakunai desu",
            options: ["Does not want to drink alcohol", "Wants to drink beer", "Wants to drink green tea", "Does not want to drink water"],
            correctIndex: 0,
            explanation: "「飲みたくない」(nomitakunai) = do not want to drink."
          },
          {
            type: "matching-pairs",
            prompt: "Match desire conjugations:",
            pairs: [
              {
                ja: "いきたい",
                en: "Want to go"
              },
              {
                ja: "いきたくない",
                en: "Don't want to go"
              },
              {
                ja: "かいたい",
                en: "Want to buy"
              },
              {
                ja: "あいたい",
                en: "Want to meet"
              }
            ]
          }
        ]
      },
      {
        id: "lesson-16-3",
        title: "Purpose of Movement: Stem + に行く",
        subtitle: "Going somewhere IN ORDER TO do something",
        icon: "Footprints",
        xpReward: 30,
        questions: [
          {
            type: "multiple-choice",
            prompt: "In 「デパート へ かいもの に いきます」, what does the particle 「に」 indicate?",
            audioText: "かいもの に",
            kanji: "買い物に",
            furigana: "かいもの に",
            romaji: "Kaimono ni",
            options: ["Purpose of movement (In order to shop)", "Time of action", "Location of existence", "Direct object"],
            correctIndex: 0,
            explanation: "Place + へ + [Verb stem / Action noun] + 「に」 + 行きます/来ます indicates the purpose of coming or going."
          },
          {
            type: "sentence-builder",
            prompt: "Translate: \"I go to the library to study.\"",
            audioText: "としょかん へ べんきょう に いきます",
            targetSentence: ["としょかん", "へ", "べんきょう", "に", "いきます"],
            tokens: ["としょかん", "へ", "べんきょう", "に", "いきます", "で", "勉強しました"],
            furigana: "図書館 へ 勉強 に 行きます",
            romaji: "Toshokan e benkyou ni ikimasu",
            explanation: "Destination (図書館 へ) + Purpose (勉強 に) + Movement (行きます)."
          },
          {
            type: "matching-pairs",
            prompt: "Match movement purpose phrases:",
            pairs: [
              {
                ja: "えいが を みに いきます",
                en: "Go to watch a movie"
              },
              {
                ja: "ごはん を たべに いきます",
                en: "Go to eat a meal"
              },
              {
                ja: "ともだち に あいに いきます",
                en: "Go to meet a friend"
              },
              {
                ja: "およぎ に いきます",
                en: "Go for a swim"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "Which phrase means \"Where are you going to eat?\"?",
            targetEn: "Where are you going to eat?",
            options: ["どこ へ たべに いきますか (Doko e tabeni ikimasu ka)", "なに を たべますか (Nani o tabemasu ka)", "だれ と たべますか (Dare to tabemasu ka)", "いつ たべますか (Itsu tabemasu ka)"],
            correctIndex: 0,
            audioText: "どこ へ たべに いきますか",
            explanation: "「どこへ」(where to) + 「食べに行きますか」(go to eat?)."
          }
        ]
      },
      {
        id: "lesson-16-chest",
        title: "Unit 16 Ambition Chest",
        subtitle: "Desires & Purposes Mastered!",
        isChest: true,
        gemReward: 135,
        xpReward: 70
      }
    ]
  },
  {
    id: "unit-17",
    unitNumber: 17,
    title: "The Te-Form: Requests & Chains",
    japaneseTitle: "て形と指示：〜てください",
    description: "Master the most crucial verb form in Japanese: conjugating the Te-Form, making requests, and linking actions.",
    color: "#10B981",
    bgGradient: "from-emerald-500 to-teal-700",
    lessons: [
      {
        id: "lesson-17-1",
        title: "Mastering the Te-Form Conjugations",
        subtitle: "Group 1, 2 & 3 Verb Te-Form Rules",
        icon: "GitBranch",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "What is the Te-Form of 「書きます」(かきます - kakimasu: to write)?",
            audioText: "かいて",
            kanji: "書いて",
            furigana: "かいて",
            romaji: "Kaite",
            options: ["かいて (Kaite)", "かきて (Kakite)", "かいって (Kaitte)", "かかて (Kakate)"],
            correctIndex: 0,
            explanation: "Group 1 verbs ending in -ki change to -ite (書きます → 書いて). Exception: 行きます → 行って."
          },
          {
            type: "sentence-builder",
            prompt: "Assemble the Te-form chain: \"Read and listen.\"",
            audioText: "よんで きいて",
            targetSentence: ["よんで", "きいて"],
            tokens: ["よんで", "きいて", "よみて", "ききて", "ほん"],
            furigana: "読んで 聞いて",
            romaji: "Yonde kiite",
            explanation: "「読みます」 becomes 「読んで」 (-mi becomes -nde), and 「聞きます」 becomes 「聞いて」."
          },
          {
            type: "audio-listening",
            prompt: "Listen and identify the Te-form of 「食べます」(Group 2):",
            audioText: "たべて",
            kanji: "食べて",
            furigana: "たべて",
            romaji: "Tabete",
            options: ["たべて (Tabete)", "たべって (Tabette)", "たべんで (Tabende)", "たべして (Tabeshite)"],
            correctIndex: 0,
            explanation: "Group 2 (Ichidan) verbs simply replace 「ます」 with 「て」 (食べます → 食べて)."
          },
          {
            type: "matching-pairs",
            prompt: "Match dictionary stems to Te-forms:",
            pairs: [
              {
                ja: "のみます (Drink)",
                en: "のんで (Nonde)"
              },
              {
                ja: "かいます (Buy)",
                en: "かって (Katte)"
              },
              {
                ja: "はなします (Speak)",
                en: "はなして (Hanashite)"
              },
              {
                ja: "きます (Come)",
                en: "きて (Kite)"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "What is the Te-form of the irregular verb 「します」(To do)?",
            targetEn: "Doing (Te-form of shimasu)",
            options: ["して (Shite)", "しって (Shitte)", "しんで (Shinde)", "した (Shita)"],
            correctIndex: 0,
            audioText: "して",
            explanation: "「します」 conjugates irregularly to 「して」(shite)."
          }
        ]
      },
      {
        id: "lesson-17-2",
        title: "Polite Requests: 〜てください",
        subtitle: "Chotto matte kudasai! Please wait a moment",
        icon: "MessageSquare",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you say \"Please wait a moment\" in Japanese?",
            audioText: "ちょっと まって ください",
            kanji: "ちょっと待ってください",
            furigana: "ちょっと まって ください",
            romaji: "Chotto matte kudasai",
            options: ["ちょっと まって ください (Chotto matte kudasai)", "ちょっと まちます (Chotto machimasu)", "ちょっと まちたい です (Chotto machitai desu)", "ちょっと まちましょう (Chotto machimashou)"],
            correctIndex: 0,
            explanation: "「待ちます」 Te-form is 「待って」 + 「ください」 = \"Please wait\"."
          },
          {
            type: "sentence-builder",
            prompt: "Build: \"Please look at this book.\"",
            audioText: "この ほん を みて ください",
            targetSentence: ["この", "ほん", "を", "みて", "ください"],
            tokens: ["この", "ほん", "を", "みて", "ください", "その", "見ます"],
            furigana: "この 本 を 見て ください",
            romaji: "Kono hon o mite kudasai",
            explanation: "「見て」(mite - see/look) + 「ください」(please)."
          },
          {
            type: "audio-listening",
            prompt: "Listen and identify the instruction given by the teacher:",
            audioText: "なまえ を かいて ください",
            kanji: "名前を書いてください",
            furigana: "なまえ を かいて ください",
            romaji: "Namae o kaite kudasai",
            options: ["Please write your name", "Please read your name", "Please tell me your name", "Please show your ID"],
            correctIndex: 0,
            explanation: "「名前」(namae - name) + 「を書いてください」(please write)."
          },
          {
            type: "matching-pairs",
            prompt: "Match common classroom instructions:",
            pairs: [
              {
                ja: "きいて ください",
                en: "Please listen"
              },
              {
                ja: "よんで ください",
                en: "Please read"
              },
              {
                ja: "いって ください",
                en: "Please say it"
              },
              {
                ja: "みせて ください",
                en: "Please show me"
              }
            ]
          }
        ]
      },
      {
        id: "lesson-17-3",
        title: "Sequencing Actions: 〜て、〜て",
        subtitle: "Chronological events: First X, then Y, then Z",
        icon: "ListOrdered",
        xpReward: 30,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you connect multiple actions sequentially in Japanese (e.g. \"I wake up, eat breakfast, and go to school\")?",
            audioText: "て",
            kanji: "て",
            furigana: "て",
            romaji: "Te-form chaining",
            options: ["Connect them using the Te-form (〜て、〜て、最後 ます)", "Repeat the word 「そして」 10 times", "Put all verbs in the past tense", "Add 「と」 between all the verbs"],
            correctIndex: 0,
            explanation: "Verbs in a chronological sequence are put into their Te-form, with only the final verb carrying tense and politeness."
          },
          {
            type: "sentence-builder",
            prompt: "Assemble: \"I eat breakfast and go to school.\"",
            audioText: "あさごはん を たべて がっこう へ いきます",
            targetSentence: ["あさごはん", "を", "たべて", "がっこう", "へ", "いきます"],
            tokens: ["あさごはん", "を", "たべて", "がっこう", "へ", "いきます", "たべます", "で"],
            furigana: "朝ご飯 を 食べて 学校 へ 行きます",
            romaji: "Asagohan o tabete gakkou e ikimasu",
            explanation: "Action 1 (食べて) + Action 2 (学校へ行きます)."
          },
          {
            type: "matching-pairs",
            prompt: "Match sequential routine chains:",
            pairs: [
              {
                ja: "おきて (Okite)",
                en: "Waking up, and then..."
              },
              {
                ja: "シャワー を あびて",
                en: "Taking a shower, and then..."
              },
              {
                ja: "かえって (Kaette)",
                en: "Going home, and then..."
              },
              {
                ja: "ねます (Nemasu)",
                en: "Goes to sleep (Final verb)"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "Which phrase means \"After drinking coffee\"?",
            targetEn: "After drinking coffee (Te-form + kara)",
            options: ["コーヒー を のんで から (Koohii o nonde kara)", "コーヒー を のみます から (Koohii o nomimasu kara)", "コーヒー を のんだ (Koohii o nonda)", "コーヒー を のむ 前 (Koohii o nomu mae)"],
            correctIndex: 0,
            audioText: "コーヒー を のんで から",
            explanation: "[Te-form + から] means \"after doing [action]\"."
          }
        ]
      },
      {
        id: "lesson-17-chest",
        title: "Unit 17 Artisan Chest",
        subtitle: "Te-Form Mastery Unlocked!",
        isChest: true,
        gemReward: 140,
        xpReward: 75
      }
    ]
  },
  {
    id: "unit-18",
    unitNumber: 18,
    title: "Continuous Actions & States: 〜ています",
    japaneseTitle: "現在進行形と状態：〜ています",
    description: "Learn continuous actions (doing now), states of existence (living in Tokyo), and marital/employment status.",
    color: "#8B5CF6",
    bgGradient: "from-purple-500 to-indigo-600",
    lessons: [
      {
        id: "lesson-18-1",
        title: "Continuous Actions (Right Now)",
        subtitle: "Ima hon o yonde imasu. I am reading now",
        icon: "Play",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "What grammatical nuance does [Te-form + います] convey when combined with action verbs?",
            audioText: "ています",
            kanji: "〜ています",
            furigana: "〜ています",
            romaji: "-te imasu",
            options: ["Present progressive: Currently in the middle of doing (-ing)", "Past tense completed action", "Obligation / Must do", "Negative potential"],
            correctIndex: 0,
            explanation: "[Te-form + います] denotes an action in progress right now (like English \"-ing\")."
          },
          {
            type: "sentence-builder",
            prompt: "Build: \"It is raining right now.\"",
            audioText: "いま あめ が ふっています",
            targetSentence: ["いま", "あめ", "が", "ふっています"],
            tokens: ["いま", "あめ", "が", "ふっています", "ふります", "ゆき"],
            furigana: "今 雨 が 降っています",
            romaji: "Ima ame ga futte imasu",
            explanation: "「今」(ima - now) + 「雨が降っています」(rain is falling)."
          },
          {
            type: "audio-listening",
            prompt: "Listen and select what Tanaka-san is doing:",
            audioText: "たなかさん は でんわ を かけています",
            kanji: "田中さんは電話をかけています",
            furigana: "たなかさん は でんわ を かけています",
            romaji: "Tanaka-san wa denwa o kakete imasu",
            options: ["Tanaka is making a phone call", "Tanaka is writing an email", "Tanaka is driving a car", "Tanaka is watching TV"],
            correctIndex: 0,
            explanation: "「電話をかけています」(denwa o kakete imasu) = making a phone call."
          },
          {
            type: "matching-pairs",
            prompt: "Match present progressive actions:",
            pairs: [
              {
                ja: "たべています",
                en: "Is eating"
              },
              {
                ja: "よんでいます",
                en: "Is reading"
              },
              {
                ja: "べんきょうしています",
                en: "Is studying"
              },
              {
                ja: "ねています",
                en: "Is sleeping"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "How do you ask \"What are you doing right now?\"?",
            targetEn: "What are you doing now?",
            options: ["いま なに を していますか (Ima nani o shite imasu ka)", "なに を しましたか (Nani o shimashita ka)", "どこ へ いきますか (Doko e ikimasu ka)", "だれ と いますか (Dare to imasu ka)"],
            correctIndex: 0,
            audioText: "いま なに を していますか",
            explanation: "「何をしていますか」(nani o shite imasu ka) asks what one is currently doing."
          }
        ]
      },
      {
        id: "lesson-18-2",
        title: "State of Being & Residence",
        subtitle: "Living in Tokyo & Knowing facts",
        icon: "Home",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you say \"I live in Tokyo\"?",
            audioText: "とうきょう に すんでいます",
            kanji: "東京に住んでいます",
            furigana: "とうきょう に すんでいます",
            romaji: "Toukyou ni sunde imasu",
            options: ["とうきょう に すんでいます (Toukyou ni sunde imasu)", "とうきょう で すみます (Toukyou de sumimasu)", "とうきょう へ いきます (Toukyou e ikimasu)", "とうきょう が あります (Toukyou ga arimasu)"],
            correctIndex: 0,
            explanation: "Residence is an ongoing state: Place + 「に」 + 「住んでいます」(sunde imasu)."
          },
          {
            type: "sentence-builder",
            prompt: "Translate: \"I know Tanaka-san.\"",
            audioText: "たなかさん を しっています",
            targetSentence: ["たなかさん", "を", "しっています"],
            tokens: ["たなかさん", "を", "しっています", "しりません", "に", "は"],
            furigana: "田中さん を 知っています",
            romaji: "Tanaka-san o shitte imasu",
            explanation: "Knowing is an enduring state resulting from finding out: 「知っています」(shitte imasu)."
          },
          {
            type: "audio-listening",
            prompt: "Listen to the answer for \"Do you know?\":",
            audioText: "いいえ しりません",
            kanji: "いいえ、知りません",
            furigana: "いいえ しりません",
            romaji: "Iie, shirimasen",
            options: ["No, I don't know", "Yes, I know", "I knew it yesterday", "I will find out"],
            correctIndex: 0,
            explanation: "Note the asymmetry: affirmative is 「知っています」, but negative is 「知りません」(not shitte imasen)."
          },
          {
            type: "matching-pairs",
            prompt: "Match enduring states:",
            pairs: [
              {
                ja: "すんでいます",
                en: "Living in / Residing"
              },
              {
                ja: "しっています",
                en: "Know / Am aware of"
              },
              {
                ja: "しりません",
                en: "Don't know"
              },
              {
                ja: "もっています",
                en: "Have / Possess"
              }
            ]
          }
        ]
      },
      {
        id: "lesson-18-3",
        title: "Status & Wearing Items",
        subtitle: "Megane o kakete imasu & Kekkon shite imasu",
        icon: "Glasses",
        xpReward: 30,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you say \"wearing glasses\" in Japanese?",
            audioText: "めがね を かけています",
            kanji: "眼鏡をかけています",
            furigana: "めがね を かけています",
            romaji: "Megane o kakete imasu",
            options: ["めがね を かけています (Megane o kakete imasu)", "めがね を きています (Megane o kite imasu)", "めがね を はいています (Megane o haite imasu)", "めがね を かぶっています (Megane o kabutte imasu)"],
            correctIndex: 0,
            explanation: "Glasses use the verb 「かけます」(かけています). Clothes on torso use 着ます, footwear 履きます, hats 被ります."
          },
          {
            type: "sentence-builder",
            prompt: "Assemble: \"My older brother is married.\"",
            audioText: "あに は けっこんしています",
            targetSentence: ["あに", "は", "けっこんしています"],
            tokens: ["あに", "は", "けっこんしています", "おとうと", "します", "独身"],
            furigana: "兄 は 結婚しています",
            romaji: "Ani wa kekkon shite imasu",
            explanation: "Marital status is an enduring state: 「結婚しています」(kekkon shite imasu)."
          },
          {
            type: "matching-pairs",
            prompt: "Match clothing and wearing verbs:",
            pairs: [
              {
                ja: "シャツ を きています",
                en: "Wearing a shirt (Torso)"
              },
              {
                ja: "ぼうし を かぶっています",
                en: "Wearing a hat (Head)"
              },
              {
                ja: "くつ を はいています",
                en: "Wearing shoes (Feet)"
              },
              {
                ja: "めがね を かけています",
                en: "Wearing glasses (Face)"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "Which phrase means \"Is working at a company\"?",
            targetEn: "Working at a company",
            options: ["かいしゃ で はたらいています (Kaisha de hataraite imasu)", "かいしゃ へ いきます (Kaisha e ikimasu)", "かいしゃ を やすみます (Kaisha o yasumimasu)", "かいしゃ に あります (Kaisha ni arimasu)"],
            correctIndex: 0,
            audioText: "かいしゃ で はたらいています",
            explanation: "「働いています」(hataraite imasu) indicates one's current ongoing employment."
          }
        ]
      },
      {
        id: "lesson-18-chest",
        title: "Unit 18 Continuity Chest",
        subtitle: "Te-Imasu States Mastered!",
        isChest: true,
        gemReward: 145,
        xpReward: 80
      }
    ]
  },
  {
    id: "unit-19",
    unitNumber: 19,
    title: "Permission & Prohibition",
    japaneseTitle: "許可と禁止：〜てもいい・〜てはいけません",
    description: "Learn how to ask for and give permission (May I...?) and understand rules and prohibitions (You must not...).",
    color: "#F59E0B",
    bgGradient: "from-amber-500 to-orange-600",
    lessons: [
      {
        id: "lesson-19-1",
        title: "Asking Permission: 〜てもいいですか",
        subtitle: "Shashin o totte mo ii desu ka? May I take photos?",
        icon: "Camera",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you politely ask \"May I take a photo here?\" in Japanese?",
            audioText: "ここで しゃしん を とっても いいですか",
            kanji: "ここで写真を撮ってもいいですか",
            furigana: "ここで しゃしん を とっても いいですか",
            romaji: "Koko de shashin o totte mo ii desu ka",
            options: ["ここで しゃしん を とっても いいですか (May I take a photo here?)", "ここで しゃしん を とって ください (Please take a photo here)", "ここで しゃしん を とりません (I don't take photos here)", "ここで しゃしん を とりましょう (Let's take photos here)"],
            correctIndex: 0,
            explanation: "[Te-form + もいいですか] asks: \"Is it okay if I do [action]? / May I...?\""
          },
          {
            type: "sentence-builder",
            prompt: "Build: \"May I sit here?\"",
            audioText: "ここ に すわっても いいですか",
            targetSentence: ["ここ", "に", "すわっても", "いいですか"],
            tokens: ["ここ", "に", "すわっても", "いいですか", "で", "すわります"],
            furigana: "ここ に 座っても いいですか",
            romaji: "Koko ni suwatte mo ii desu ka",
            explanation: "「ここに」(here) + 「座ってもいいですか」(may I sit?)."
          },
          {
            type: "audio-listening",
            prompt: "Listen and select how permission is granted:",
            audioText: "ええ いいですよ どうぞ",
            kanji: "ええ、いいですよ。どうぞ。",
            furigana: "ええ いいですよ どうぞ",
            romaji: "Ee, ii desu yo. Douzo.",
            options: ["Yes, that is fine! Please go ahead.", "No, you cannot do that here.", "Please wait five minutes.", "I am not sure."],
            correctIndex: 0,
            explanation: "「ええ、いいですよ。どうぞ」(Yes, of course, go ahead)."
          },
          {
            type: "matching-pairs",
            prompt: "Match permission requests:",
            pairs: [
              {
                ja: "はいっても いいですか",
                en: "May I enter?"
              },
              {
                ja: "つかっても いいですか",
                en: "May I use this?"
              },
              {
                ja: "みても いいですか",
                en: "May I look?"
              },
              {
                ja: "のんでも いいですか",
                en: "May I drink this?"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "Which phrase means \"Yes, of course / certainly\"?",
            targetEn: "Yes, of course / certainly",
            options: ["もちろん です (Mochiron desu)", "だめ です (Dame desu)", "わかりません (Wakarimasen)", "いいえ (Iie)"],
            correctIndex: 0,
            audioText: "もちろん です",
            explanation: "「もちろん」(mochiron) means \"of course / certainly\"."
          }
        ]
      },
      {
        id: "lesson-19-2",
        title: "Prohibition & Rules: 〜てはいけません",
        subtitle: "You must not do... Rules and warnings",
        icon: "AlertTriangle",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "What does 「ここで タバコ を すっては いけません」 mean?",
            audioText: "ここで タバコ を すっては いけません",
            kanji: "ここで煙草を吸ってはいけません",
            furigana: "ここで タバコ を すっては いけません",
            romaji: "Koko de tabako o sutte wa ikemasen",
            options: ["You must not smoke cigarettes here", "Please smoke cigarettes here", "You may smoke cigarettes here", "Where do people smoke cigarettes?"],
            correctIndex: 0,
            explanation: "[Te-form + はいけません] expresses strong prohibition: \"You must not...\"."
          },
          {
            type: "sentence-builder",
            prompt: "Translate: \"You must not park your car here.\"",
            audioText: "ここ に くるま を とめては いけません",
            targetSentence: ["ここ", "に", "くるま", "を", "とめては", "いけません"],
            tokens: ["ここ", "に", "くるま", "を", "とめては", "いけません", "で", "いいです"],
            furigana: "ここ に 車 を 止めては いけません",
            romaji: "Koko ni kuruma o tomete wa ikemasen",
            explanation: "「止めては いけません」(tomete wa ikemasen - must not stop/park)."
          },
          {
            type: "audio-listening",
            prompt: "Listen and select what museum rule is stated:",
            audioText: "びじゅつかん で え を さわっては いけません",
            kanji: "美術館で絵を触ってはいけません",
            furigana: "びじゅつかん で え を さわっては いけません",
            romaji: "Bijutsukan de e o sawatte wa ikemasen",
            options: ["You must not touch the paintings in the museum", "You must not take photos in the museum", "You must not speak loudly in the museum", "You must not eat in the museum"],
            correctIndex: 0,
            explanation: "「絵を触ってはいけません」(e o sawatte wa ikemasen) = must not touch the paintings."
          },
          {
            type: "matching-pairs",
            prompt: "Match public prohibition signs:",
            pairs: [
              {
                ja: "はいっては いけません",
                en: "Do not enter"
              },
              {
                ja: "しゃしん を とっては いけません",
                en: "No photography allowed"
              },
              {
                ja: "たべては いけません",
                en: "No eating allowed"
              },
              {
                ja: "すてては いけません",
                en: "Do not litter / throw away"
              }
            ]
          }
        ]
      },
      {
        id: "lesson-19-3",
        title: "Rules, Etiquette & Signboards",
        subtitle: "Kin'en, Tachiiri Kinshi & Daily Manners",
        icon: "Shield",
        xpReward: 30,
        questions: [
          {
            type: "multiple-choice",
            prompt: "What does the common signboard Kanji 「立入禁止」(たちいりきんし - Tachiiri Kinshi) mean?",
            audioText: "たちいり きんし",
            kanji: "立入禁止",
            furigana: "たちいり きんし",
            romaji: "Tachiiri kinshi",
            options: ["Do Not Enter / Authorized Personnel Only", "No Smoking", "Emergency Exit", "Information Desk"],
            correctIndex: 0,
            explanation: "「立入禁止」(tachiiri kinshi) = Entry Prohibited."
          },
          {
            type: "sentence-builder",
            prompt: "Assemble: \"Please take off your shoes here.\"",
            audioText: "ここ で くつ を ぬいで ください",
            targetSentence: ["ここ", "で", "くつ", "を", "ぬいで", "ください"],
            tokens: ["ここ", "で", "くつ", "を", "ぬいで", "ください", "はいて", "に"],
            furigana: "ここ で 靴 を 脱いで ください",
            romaji: "Koko de kutsu o nuide kudasai",
            explanation: "「靴を脱ぎます」(take off shoes) Te-form is 「脱いで」 + 「ください」."
          },
          {
            type: "matching-pairs",
            prompt: "Match Japanese cultural rules:",
            pairs: [
              {
                ja: "きんえん",
                en: "No smoking (禁煙)"
              },
              {
                ja: "ちゅうしゃ きんし",
                en: "No parking (駐車禁止)"
              },
              {
                ja: "ひじょうぐち",
                en: "Emergency exit (非常口)"
              },
              {
                ja: "しずかに して ください",
                en: "Please be quiet"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "What is the informal Japanese word for \"No good / Not allowed\"?",
            targetEn: "No good / Not allowed (Informal)",
            options: ["だめ (Dame)", "いい (Ii)", "だいじょうぶ (Daijoubu)", "すごい (Sugoi)"],
            correctIndex: 0,
            audioText: "だめ",
            explanation: "「だめ」(dame) means no good, useless, or prohibited."
          }
        ]
      },
      {
        id: "lesson-19-chest",
        title: "Unit 19 Guardian Chest",
        subtitle: "Rules & Etiquette Mastered!",
        isChest: true,
        gemReward: 150,
        xpReward: 85
      }
    ]
  },
  {
    id: "unit-20",
    unitNumber: 20,
    title: "The Nai-Form: Negative Requests & Must-Do",
    japaneseTitle: "ない形と否定指示：〜ないでください",
    description: "Learn verb Nai-forms, asking others not to do something (〜ないでください), and expressing obligations (〜なければなりません).",
    color: "#DC2626",
    bgGradient: "from-red-600 to-rose-700",
    lessons: [
      {
        id: "lesson-20-1",
        title: "Conjugating the Nai-Form",
        subtitle: "Ikanai, Nomawanai, Tabenai & Shinai",
        icon: "XCircle",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "What is the Nai-form (plain negative) of 「行きます」(ikimasu: to go)?",
            audioText: "いかない",
            kanji: "行かない",
            furigana: "いかない",
            romaji: "Ikanai",
            options: ["いかない (Ikanai)", "いきない (Ikinai)", "いかなかった (Ikanakatta)", "いかないで (Ikanaide)"],
            correctIndex: 0,
            explanation: "Group 1 verbs change the \"-i\" sound before ます to an \"-a\" sound + ない (行きます → 行かない)."
          },
          {
            type: "sentence-builder",
            prompt: "Assemble the negative forms: \"I do not drink and do not eat.\"",
            audioText: "のまない たべない",
            targetSentence: ["のまない", "たべない"],
            tokens: ["のまない", "たべない", "のみない", "たべらない", "お茶"],
            furigana: "飲まない 食べない",
            romaji: "Nomanai tabenai",
            explanation: "「飲みます」 becomes 「飲まない」 (-i becomes -a). 「食べます」(Group 2) simply drops ます + ない (食べない)."
          },
          {
            type: "audio-listening",
            prompt: "Listen and identify the Nai-form of 「します」(To do):",
            audioText: "しない",
            kanji: "しない",
            furigana: "しない",
            romaji: "Shinai",
            options: ["しない (Shinai - Irregular)", "さない (Sanai)", "しらない (Shiranai)", "しなかった (Shinakatta)"],
            correctIndex: 0,
            explanation: "「します」 conjugates irregularly to 「しない」(shinai). 「来ます」 conjugates to 「こない」(konai)."
          },
          {
            type: "matching-pairs",
            prompt: "Match dictionary stems to their Nai-forms:",
            pairs: [
              {
                ja: "かきます (Write)",
                en: "かかない (Kakanai)"
              },
              {
                ja: "はなします (Speak)",
                en: "はなさない (Hanasanai)"
              },
              {
                ja: "みます (See)",
                en: "みない (Minai)"
              },
              {
                ja: "きます (Come)",
                en: "こない (Konai)"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "What is the Nai-form of the verb 「買います」(kaimasu: to buy)?",
            targetEn: "Do not buy (Nai-form)",
            options: ["かわない (Kawanai)", "かあない (Kaanai)", "かいらない (Kairanai)", "かわなかった (Kawanakatta)"],
            correctIndex: 0,
            audioText: "かわない",
            explanation: "Verbs with a vowel before ます like 「買います」 become 「かわない」(kawanai) with a \"wa\"."
          }
        ]
      },
      {
        id: "lesson-20-2",
        title: "Negative Requests: 〜ないでください",
        subtitle: "Shinpai shinaide kudasai! Please do not worry",
        icon: "HeartHandshake",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you say \"Please do not worry\" in Japanese?",
            audioText: "しんぱい しないで ください",
            kanji: "心配しないでください",
            furigana: "しんぱい しないで ください",
            romaji: "Shinpai shinaide kudasai",
            options: ["しんぱい しないで ください (Shinpai shinaide kudasai)", "しんぱい してください (Shinpai shite kudasai)", "しんぱい します (Shinpai shimasu)", "しんぱい ありません (Shinpai arimasen)"],
            correctIndex: 0,
            explanation: "[Nai-form + でください] politely requests someone NOT to do something: \"Please do not...\"."
          },
          {
            type: "sentence-builder",
            prompt: "Build: \"Please do not forget your passport.\"",
            audioText: "パスポート を わすれないで ください",
            targetSentence: ["パスポート", "を", "わすれないで", "ください"],
            tokens: ["パスポート", "を", "わすれないで", "ください", "わすれて", "見ないで"],
            furigana: "パスポート を 忘れないで ください",
            romaji: "Pasupooto o wasurenaide kudasai",
            explanation: "「忘れます」 Nai-form is 「忘れない」 + 「でください」 = \"Please do not forget\"."
          },
          {
            type: "audio-listening",
            prompt: "Listen and select what the speaker asks NOT to do:",
            audioText: "ここで しゃしん を とらないで ください",
            kanji: "ここで写真を撮らないでください",
            furigana: "ここで しゃしん を とらないで ください",
            romaji: "Koko de shashin o toranaide kudasai",
            options: ["Please do not take photos here", "Please do not smoke here", "Please take photos here", "Please do not enter here"],
            correctIndex: 0,
            explanation: "「撮らないでください」(toranaide kudasai) = please do not take photos."
          },
          {
            type: "matching-pairs",
            prompt: "Match negative requests:",
            pairs: [
              {
                ja: "いかないで ください",
                en: "Please do not go"
              },
              {
                ja: "すてないで ください",
                en: "Please do not throw away / litter"
              },
              {
                ja: "たべないで ください",
                en: "Please do not eat"
              },
              {
                ja: "みないで ください",
                en: "Please do not look"
              }
            ]
          }
        ]
      },
      {
        id: "lesson-20-3",
        title: "Obligation & Necessity: 〜なければなりません",
        subtitle: "Must do (Nakereba narimasen) vs Don't have to (Nakutemo ii)",
        icon: "CheckSquare",
        xpReward: 30,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you say \"I must take medicine\" in Japanese?",
            audioText: "くすり を のまなければ なりません",
            kanji: "薬を飲まなければなりません",
            furigana: "くすり を のまなければ なりません",
            romaji: "Kusuri o nomanakereba narimasen",
            options: ["くすり を のまなければ なりません (Must take medicine)", "くすり を のまなくても いいです (Don't have to take medicine)", "くすり を のまないで ください (Please don't take medicine)", "くすり を のみたい です (Want to take medicine)"],
            correctIndex: 0,
            explanation: "[Nai-stem + なければなりません] expresses obligation or necessity: \"Must / Have to do\"."
          },
          {
            type: "sentence-builder",
            prompt: "Assemble: \"Tomorrow is Sunday, so I don't have to wake up early.\"",
            audioText: "はやく おきなくても いいです",
            targetSentence: ["はやく", "おきなくても", "いいです"],
            tokens: ["はやく", "おきなくても", "いいです", "おきなければ", "おきます", "あした"],
            furigana: "早く 起きなくても いいです",
            romaji: "Hayaku okinakutemo ii desu",
            explanation: "[Nai-stem + なくてもいいです] expresses lack of obligation: \"Do not have to / Need not\"."
          },
          {
            type: "matching-pairs",
            prompt: "Match obligation forms:",
            pairs: [
              {
                ja: "いかなければ なりません",
                en: "Must go"
              },
              {
                ja: "いかなくても いいです",
                en: "Do not have to go"
              },
              {
                ja: "べんきょうしなければ なりません",
                en: "Must study"
              },
              {
                ja: "はらわなくても いいです",
                en: "Do not have to pay"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "Which phrase means \"Medicine\"?",
            targetEn: "Medicine",
            options: ["くすり (Kusuri)", "びょういん (Byouin)", "びょうき (Byouki)", "ねつ (Netsu)"],
            correctIndex: 0,
            audioText: "くすり",
            explanation: "「薬 / くすり」(kusuri) means medicine."
          }
        ]
      },
      {
        id: "lesson-20-chest",
        title: "Unit 20 Discipline Chest",
        subtitle: "Nai-Form & Obligations Mastered!",
        isChest: true,
        gemReward: 160,
        xpReward: 90
      }
    ]
  },
  {
    id: "unit-21",
    unitNumber: 21,
    title: "Potential & Ability: 〜ことができる",
    japaneseTitle: "可能表現と趣味：〜ことができる",
    description: "Express what you can do (abilities & skills) with the dictionary form and share your personal hobbies.",
    color: "#2563EB",
    bgGradient: "from-blue-600 to-cyan-700",
    lessons: [
      {
        id: "lesson-21-1",
        title: "Dictionary Form (辞書形) of Verbs",
        subtitle: "The plain root form found in dictionaries",
        icon: "Book",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "What is the dictionary form of the verb 「行きます」(ikimasu: to go)?",
            audioText: "いく",
            kanji: "行く",
            furigana: "いく",
            romaji: "Iku",
            options: ["いく (Iku)", "いかない (Ikanai)", "いって (Itte)", "いった (Itta)"],
            correctIndex: 0,
            explanation: "In dictionary form, Group 1 verbs end in an \"-u\" vowel (行きます → 行く)."
          },
          {
            type: "sentence-builder",
            prompt: "Assemble the basic dictionary forms: \"To eat and to drink\"",
            audioText: "たべる のむ",
            targetSentence: ["たべる", "のむ"],
            tokens: ["たべる", "のむ", "たべます", "のみます", "パン"],
            furigana: "食べる 飲む",
            romaji: "Taberu nomu",
            explanation: "「食べる」(taberu - Group 2) and 「飲む」(nomu - Group 1)."
          },
          {
            type: "audio-listening",
            prompt: "Listen to the dictionary form of 「話します」(To speak):",
            audioText: "はなす",
            kanji: "話す",
            furigana: "はなす",
            romaji: "Hanasu",
            options: ["はなす (Hanasu)", "はなつ (Hanatsu)", "はなせる (Hanaseru)", "はなして (Hanashite)"],
            correctIndex: 0,
            explanation: "「話します」 dictionary form is 「話す」(hanasu)."
          },
          {
            type: "matching-pairs",
            prompt: "Match polite Masu-forms to dictionary forms:",
            pairs: [
              {
                ja: "かきます (Write)",
                en: "かく (Kaku)"
              },
              {
                ja: "よみます (Read)",
                en: "よむ (Yomu)"
              },
              {
                ja: "します (Do)",
                en: "する (Suru)"
              },
              {
                ja: "きます (Come)",
                en: "くる (Kuru)"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "What is the dictionary form of 「寝ます」(nemasu: to sleep)?",
            targetEn: "To sleep (Dictionary form)",
            options: ["ねる (Neru)", "ねむ (Nemu)", "ねす (Nesu)", "ねつ (Netsu)"],
            correctIndex: 0,
            audioText: "ねる",
            explanation: "「寝ます」 is Group 2, so its dictionary form is 「寝る」(neru)."
          }
        ]
      },
      {
        id: "lesson-21-2",
        title: "Expressing Ability: 〜ことができる",
        subtitle: "Nihongo o hanasu koto ga dekimasu. I can speak Japanese",
        icon: "Award",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you say \"I can speak Japanese\" using the ability pattern?",
            audioText: "にほんご を はなす こと が できます",
            kanji: "日本語を話すことができます",
            furigana: "にほんご を はなす こと が できます",
            romaji: "Nihongo o hanasu koto ga dekimasu",
            options: ["にほんご を はなす こと が できます (I can speak Japanese)", "にほんご を はなしたい です (I want to speak Japanese)", "にほんご を はなしてください (Please speak Japanese)", "にほんご を はなしましょう (Let's speak Japanese)"],
            correctIndex: 0,
            explanation: "[Verb Dictionary Form + ことができます] is the standard JLPT N5 expression for ability: \"Can do...\"."
          },
          {
            type: "sentence-builder",
            prompt: "Build: \"Can you swim 100 meters?\"",
            audioText: "ひゃくメートル およぐ こと が できますか",
            targetSentence: ["ひゃくメートル", "およぐ", "こと", "が", "できますか"],
            tokens: ["ひゃくメートル", "およぐ", "こと", "が", "できますか", "およぎます", "を"],
            furigana: "百メートル 泳ぐ こと が できますか",
            romaji: "Hyaku meetoru oyogu koto ga dekimasu ka",
            explanation: "「泳ぐ」(oyogu - swim) + 「ことができますか」(can you?)."
          },
          {
            type: "audio-listening",
            prompt: "Listen and identify what skill Tanaka-san can do:",
            audioText: "ピアノ を ひく こと が できます",
            kanji: "ピアノを弾くことができます",
            furigana: "ピアノ を ひく こと が できます",
            romaji: "Piano o hiku koto ga dekimasu",
            options: ["Can play the piano", "Can play the guitar", "Can drive a car", "Can cook Italian food"],
            correctIndex: 0,
            explanation: "「ピアノを弾く」(piano o hiku - play piano) + 「ことができます」."
          },
          {
            type: "matching-pairs",
            prompt: "Match ability phrases:",
            pairs: [
              {
                ja: "うんてん が できます",
                en: "Can drive a car"
              },
              {
                ja: "りょうり が できます",
                en: "Can cook"
              },
              {
                ja: "かんじ を かく ことが できます",
                en: "Can write Kanji"
              },
              {
                ja: "スキー が できます",
                en: "Can ski"
              }
            ]
          }
        ]
      },
      {
        id: "lesson-21-3",
        title: "Hobbies & Interests: 趣味は〜こと",
        subtitle: "Shumi wa ongaku o kiku koto desu. My hobby is listening to music",
        icon: "Music",
        xpReward: 30,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you state: \"My hobby is reading books\"?",
            audioText: "しゅみ は ほん を よむ こと です",
            kanji: "趣味は本を読むことです",
            furigana: "しゅみ は ほん を よむ こと です",
            romaji: "Shumi wa hon o yomu koto desu",
            options: ["しゅみ は ほん を よむ こと です (My hobby is reading books)", "しゅみ は ほん を よみます (My hobby reads books)", "しゅみ は ほん が ほしい です (My hobby wants books)", "しゅみ は どこ ですか (Where is your hobby?)"],
            correctIndex: 0,
            explanation: "「趣味は [Verb Dictionary Form + こと] です」 nominalizes the action into \"the act of reading\"."
          },
          {
            type: "sentence-builder",
            prompt: "Assemble: \"Before going to bed, I read a book.\"",
            audioText: "ねる まえに ほん を よみます",
            targetSentence: ["ねる", "まえに", "ほん", "を", "よみます"],
            tokens: ["ねる", "まえに", "ほん", "を", "よみます", "ねます", "あとで"],
            furigana: "寝る 前に 本 を 読みます",
            romaji: "Neru mae ni hon o yomimasu",
            explanation: "[Verb Dictionary Form + 前に (mae ni)] means \"before doing [action]\"."
          },
          {
            type: "matching-pairs",
            prompt: "Match common Japanese hobbies:",
            pairs: [
              {
                ja: "どくしょ",
                en: "Reading (読書)"
              },
              {
                ja: "りょこう",
                en: "Traveling (旅行)"
              },
              {
                ja: "しゃしん を とる こと",
                en: "Taking photos"
              },
              {
                ja: "えいが を みる こと",
                en: "Watching movies"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "Which phrase means \"Hobby / Pastime\"?",
            targetEn: "Hobby",
            options: ["しゅみ (Shumi)", "しごと (Shigoto)", "やすみ (Yasumi)", "べんきょう (Benkyou)"],
            correctIndex: 0,
            audioText: "しゅみ",
            explanation: "「趣味 / しゅみ」(shumi) means hobby."
          }
        ]
      },
      {
        id: "lesson-21-chest",
        title: "Unit 21 Capability Chest",
        subtitle: "Abilities & Hobbies Mastered!",
        isChest: true,
        gemReward: 170,
        xpReward: 95
      }
    ]
  },
  {
    id: "unit-22",
    unitNumber: 22,
    title: "Past Experience & Actions: 〜たことがある",
    japaneseTitle: "経験表現とた形：〜たことがある",
    description: "Learn the plain past Ta-form, talk about past experiences (Have you ever...?), and list non-exhaustive activities (〜たり〜たり).",
    color: "#7C3AED",
    bgGradient: "from-violet-600 to-purple-700",
    lessons: [
      {
        id: "lesson-22-1",
        title: "Mastering the Ta-Form (た形)",
        subtitle: "Plain past tense: Itta, Nonda, Tabeta & Shita",
        icon: "Check",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How is the plain past Ta-form conjugated?",
            audioText: "たけい",
            kanji: "た形",
            furigana: "たけい",
            romaji: "Ta-kei",
            options: ["It follows the exact same sound changes as the Te-form, replacing \"te/de\" with \"ta/da\"", "Add \"ta\" to any verb without changing anything", "Drop the first syllable and add \"ta\"", "It is identical to the dictionary form"],
            correctIndex: 0,
            explanation: "The Ta-form follows the Te-form rule identically: 書いて → 書いた, 飲んで → 飲んだ, 食べて → 食べた."
          },
          {
            type: "sentence-builder",
            prompt: "Assemble: \"I went and saw.\"",
            audioText: "いった みた",
            targetSentence: ["いった", "みた"],
            tokens: ["いった", "みた", "いきます", "みます", "きのう"],
            furigana: "行った 見た",
            romaji: "Itta mita",
            explanation: "「行った」(itta - past of 行く) and 「見た」(mita - past of 見る)."
          },
          {
            type: "audio-listening",
            prompt: "Listen and identify the Ta-form of 「食べました」:",
            audioText: "たべた",
            kanji: "食べた",
            furigana: "たべた",
            romaji: "Tabeta",
            options: ["たべた (Tabeta)", "たべった (Tabetta)", "たべんだ (Tabenda)", "たべした (Tabeshita)"],
            correctIndex: 0,
            explanation: "Group 2 replaces ます with た: 食べました → 食べた."
          },
          {
            type: "matching-pairs",
            prompt: "Match plain present to plain past (Ta-form):",
            pairs: [
              {
                ja: "のむ (Drink)",
                en: "のんだ (Nonda)"
              },
              {
                ja: "かう (Buy)",
                en: "かった (Katta)"
              },
              {
                ja: "する (Do)",
                en: "した (Shita)"
              },
              {
                ja: "くる (Come)",
                en: "きた (Kita)"
              }
            ]
          }
        ]
      },
      {
        id: "lesson-22-2",
        title: "Past Experiences: 〜たことがある",
        subtitle: "Fuji-san ni nobotta koto ga arimasu. I have climbed Mt. Fuji",
        icon: "Mountain",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you ask someone: \"Have you ever eaten sashimi?\" in Japanese?",
            audioText: "さしみ を たべた こと が ありますか",
            kanji: "刺身を食べたことがありますか",
            furigana: "さしみ を たべた こと が ありますか",
            romaji: "Sashimi o tabeta koto ga arimasu ka",
            options: ["さしみ を たべた こと が ありますか (Have you ever eaten sashimi?)", "さしみ を たべますか (Do you eat sashimi?)", "さしみ を たべたい ですか (Do you want to eat sashimi?)", "さしみ は おいしい ですか (Is sashimi delicious?)"],
            correctIndex: 0,
            explanation: "[Verb Ta-form + ことがあります] specifically asks or states whether one has ever had that experience in their lifetime."
          },
          {
            type: "sentence-builder",
            prompt: "Build: \"I have been to Kyoto before.\"",
            audioText: "きょうと へ いった こと が あります",
            targetSentence: ["きょうと", "へ", "いった", "こと", "が", "あります"],
            tokens: ["きょうと", "へ", "いった", "こと", "が", "あります", "いきました", "で"],
            furigana: "京都 へ 行った こと が あります",
            romaji: "Kyouto e itta koto ga arimasu",
            explanation: "「行った」(itta - past of 行く) + 「ことがあります」(have had the experience)."
          },
          {
            type: "audio-listening",
            prompt: "Listen to the answer regarding experience:",
            audioText: "いちども いった こと が ありません",
            kanji: "一度も行ったことがありません",
            furigana: "いちども いった こと が ありません",
            romaji: "Ichido mo itta koto ga arimasen",
            options: ["I have never been there even once", "I have been there once", "I go there every year", "I want to go there tomorrow"],
            correctIndex: 0,
            explanation: "「一度も」(ichido mo - not even once) + 「ありません」(negative)."
          },
          {
            type: "matching-pairs",
            prompt: "Match experience replies:",
            pairs: [
              {
                ja: "はい、あります",
                en: "Yes, I have"
              },
              {
                ja: "いいえ、ありません",
                en: "No, I have not"
              },
              {
                ja: "なんかいも あります",
                en: "I have many times"
              },
              {
                ja: "いちど あります",
                en: "I have once"
              }
            ]
          }
        ]
      },
      {
        id: "lesson-22-3",
        title: "Listing Actions: 〜たり〜たりします",
        subtitle: "Doing things like A, B, and so on",
        icon: "ListFilter",
        xpReward: 30,
        questions: [
          {
            type: "multiple-choice",
            prompt: "What is the purpose of the [〜たり〜たりします] pattern?",
            audioText: "たり たり します",
            kanji: "〜たり〜たりします",
            furigana: "〜たり〜たりします",
            romaji: "-tari -tari shimasu",
            options: ["To list non-exhaustive examples of activities done (\"Doing things like A and B\")", "To express strict chronological order of events", "To show that two actions must happen simultaneously", "To forbid someone from doing things"],
            correctIndex: 0,
            explanation: "Unlike Te-form chaining (which is sequential), [〜たり〜たり] gives non-exhaustive representative examples of activities."
          },
          {
            type: "sentence-builder",
            prompt: "Translate: \"On Sundays, I do things like clean and do laundry.\"",
            audioText: "にちようび は そうじしたり せんたくしたり します",
            targetSentence: ["にちようび", "は", "そうじしたり", "せんたくしたり", "します"],
            tokens: ["にちようび", "は", "そうじしたり", "せんたくしたり", "します", "して", "そうじ"],
            furigana: "日曜日 は 掃除したり 洗濯したり します",
            romaji: "Nichiyoubi wa souji shitari sentaku shitari shimasu",
            explanation: "掃除する → 掃除したり, 洗濯する → 洗濯したり + します."
          },
          {
            type: "matching-pairs",
            prompt: "Match common weekend activity verbs:",
            pairs: [
              {
                ja: "そうじ します",
                en: "Clean up (掃除)"
              },
              {
                ja: "せんたく します",
                en: "Do laundry (洗濯)"
              },
              {
                ja: "かいもの します",
                en: "Go shopping (買い物)"
              },
              {
                ja: "さんぽ します",
                en: "Take a walk (散歩)"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "Which phrase means \"On weekends\"?",
            targetEn: "Weekend",
            options: ["しゅうまつ (Shuumatsu)", "へいじつ (Heijitsu)", "きょう (Kyou)", "まいにち (Mainichi)"],
            correctIndex: 0,
            audioText: "しゅうまつ",
            explanation: "「週末 / しゅうまつ」(shuumatsu) means weekend."
          }
        ]
      },
      {
        id: "lesson-22-chest",
        title: "Unit 22 Voyager Chest",
        subtitle: "Past Experiences & Tari-Form Mastered!",
        isChest: true,
        gemReward: 180,
        xpReward: 100
      }
    ]
  },
  {
    id: "unit-23",
    unitNumber: 23,
    title: "Plain Form & Thoughts: 〜と思う・〜と言う",
    japaneseTitle: "普通形と引用：〜と思う・〜と言う",
    description: "Learn casual speech (Plain Form), state your personal opinions (〜と思います), and report speech (〜と言いました).",
    color: "#059669",
    bgGradient: "from-emerald-600 to-teal-700",
    lessons: [
      {
        id: "lesson-23-1",
        title: "The Casual Plain Form (普通形)",
        subtitle: "Conversing naturally with friends and family",
        icon: "MessageCircle",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "What is the casual plain past affirmative of 「行きます」(went)?",
            audioText: "いった",
            kanji: "行った",
            furigana: "いった",
            romaji: "Itta",
            options: ["いった (Itta)", "いく (Iku)", "いかない (Ikanai)", "いかなかった (Ikanakatta)"],
            correctIndex: 0,
            explanation: "The 4 plain verb forms are: Dictionary (行く), Negative (行かない), Past (行った), and Past Negative (行かなかった)."
          },
          {
            type: "sentence-builder",
            prompt: "Assemble casual conversation: \"Did you eat? - Yeah, I ate.\"",
            audioText: "たべた うん たべた",
            targetSentence: ["たべた", "うん", "たべた"],
            tokens: ["たべた", "うん", "たべた", "はい", "食べました", "いいえ"],
            furigana: "食べた？ うん、食べた。",
            romaji: "Tabeta? Un, tabeta.",
            explanation: "In casual conversation, questions drop か with rising intonation, and 「うん」 replaces 「はい」."
          },
          {
            type: "audio-listening",
            prompt: "Listen to the casual agreement:",
            audioText: "うん そうだね",
            kanji: "うん、そうだね",
            furigana: "うん そうだね",
            romaji: "Un, sou da ne",
            options: ["Yeah, that's right!", "No, that is wrong", "I don't know", "Where are you going?"],
            correctIndex: 0,
            explanation: "「うん、そうだね」(Un, sou da ne) is the casual equivalent of 「はい、そうですね」."
          },
          {
            type: "matching-pairs",
            prompt: "Match polite forms to casual plain forms:",
            pairs: [
              {
                ja: "はい (Hai)",
                en: "うん (Un)"
              },
              {
                ja: "いいえ (Iie)",
                en: "ううん (Uun)"
              },
              {
                ja: "いきます (Ikimasu)",
                en: "いく (Iku)"
              },
              {
                ja: "わかりません (Wakarimasen)",
                en: "わからない (Wakaranai)"
              }
            ]
          }
        ]
      },
      {
        id: "lesson-23-2",
        title: "Expressing Opinions: 〜と思います",
        subtitle: "Nihon wa benri da to omoimasu. I think Japan is convenient",
        icon: "Lightbulb",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you say \"I think tomorrow will be sunny\"?",
            audioText: "あした は はれる と おもいます",
            kanji: "明日は晴れると思います",
            furigana: "あした は はれる と おもいます",
            romaji: "Ashita wa hareru to omoimasu",
            options: ["あした は はれる と おもいます (I think tomorrow will be sunny)", "あした は はれます (Tomorrow will be sunny)", "あした は はれました (Tomorrow was sunny)", "あした は はれたい です (Tomorrow wants to be sunny)"],
            correctIndex: 0,
            explanation: "[Plain form sentence + と思います] expresses personal belief or opinion: \"I think that...\"."
          },
          {
            type: "sentence-builder",
            prompt: "Build: \"I think that book is interesting.\"",
            audioText: "その ほん は おもしろい と おもいます",
            targetSentence: ["その", "ほん", "は", "おもしろい", "と", "おもいます"],
            tokens: ["その", "ほん", "は", "おもしろい", "と", "おもいます", "この", "です"],
            furigana: "その 本 は 面白い と 思います",
            romaji: "Sono hon wa omoshiroi to omoimasu",
            explanation: "Plain い-adjective (面白い) + 「と思います」(I think)."
          },
          {
            type: "audio-listening",
            prompt: "Listen and select the speaker's opinion on prices in Tokyo:",
            audioText: "とうきょう は ぶっか が たかい と おもいます",
            kanji: "東京は物価が高いと思います",
            furigana: "とうきょう は ぶっか が たかい と おもいます",
            romaji: "Toukyou wa bukka ga takai to omoimasu",
            options: ["I think prices in Tokyo are expensive", "I think Tokyo is very crowded", "I think Tokyo is cheap", "I think Tokyo is quiet"],
            correctIndex: 0,
            explanation: "「物価が高い」(bukka ga takai - cost of living is high) + 「と思います」."
          },
          {
            type: "matching-pairs",
            prompt: "Match opinion phrases:",
            pairs: [
              {
                ja: "そう おもいます",
                en: "I think so too"
              },
              {
                ja: "そう おもいません",
                en: "I do not think so"
              },
              {
                ja: "どう おもいますか",
                en: "What do you think?"
              },
              {
                ja: "たぶん (Tabun)",
                en: "Probably / Maybe"
              }
            ]
          }
        ]
      },
      {
        id: "lesson-23-3",
        title: "Reporting Speech: 〜と言いました",
        subtitle: "Quoting what others said (To iimashita)",
        icon: "Quote",
        xpReward: 30,
        questions: [
          {
            type: "multiple-choice",
            prompt: "In 「たなかさん は あした やすむ と いいました」, what does 「と言いました」 do?",
            audioText: "と いいました",
            kanji: "と言いました",
            furigana: "と いいました",
            romaji: "To iimashita",
            options: ["Quotes speech or reports: \"Tanaka said that he will take a day off tomorrow\"", "Asks for permission", "Expresses desire", "Indicates location of an event"],
            correctIndex: 0,
            explanation: "Particle 「と」(quotation marker) + 「言いました」(said) reports what someone said."
          },
          {
            type: "sentence-builder",
            prompt: "Translate: \"The teacher said, 'See you tomorrow.'\"",
            audioText: "せんせい は また あした と いいました",
            targetSentence: ["せんせい", "は", "また", "あした", "と", "いいました"],
            tokens: ["せんせい", "は", "また", "あした", "と", "いいました", "いいます", "から"],
            furigana: "先生 は 「また明日」 と 言いました",
            romaji: "Sensei wa mata ashita to iimashita",
            explanation: "Quote + 「と言いました」."
          },
          {
            type: "matching-pairs",
            prompt: "Match speech quotation verbs:",
            pairs: [
              {
                ja: "いいました",
                en: "Said"
              },
              {
                ja: "ききました",
                en: "Heard / Asked"
              },
              {
                ja: "はなしました",
                en: "Spoke / Talked"
              },
              {
                ja: "つたえました",
                en: "Conveyed a message"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "Which word means \"News\"?",
            targetEn: "News",
            options: ["ニュース (Nyuusu)", "てがみ (Tegami)", "でんわ (Denwa)", "じしょ (Jisho)"],
            correctIndex: 0,
            audioText: "ニュース",
            explanation: "「ニュース」(nyuusu) means news."
          }
        ]
      },
      {
        id: "lesson-23-chest",
        title: "Unit 23 Reflection Chest",
        subtitle: "Plain Form & Quotations Mastered!",
        isChest: true,
        gemReward: 190,
        xpReward: 105
      }
    ]
  },
  {
    id: "unit-24",
    unitNumber: 24,
    title: "Modifying Nouns with Clauses",
    japaneseTitle: "連体修飾節：名詞を修飾する文",
    description: "Learn how to form relative clauses in Japanese to describe people, objects, and appointments directly with verbs.",
    color: "#EA580C",
    bgGradient: "from-orange-600 to-amber-700",
    lessons: [
      {
        id: "lesson-24-1",
        title: "Basic Relative Clauses (連体修飾節)",
        subtitle: "Kinou katta hon. The book that I bought yesterday",
        icon: "Link2",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you say \"The book that I bought yesterday\" in Japanese?",
            audioText: "きのう かった ほん",
            kanji: "昨日買った本",
            furigana: "きのう かった ほん",
            romaji: "Kinou katta hon",
            options: ["きのう かった ほん (Kinou katta hon)", "ほん は きのう かいました (The book I bought yesterday)", "きのう かいました ほん (Kinou kaimashita hon)", "ほん が かいました (The book bought)"],
            correctIndex: 0,
            explanation: "In Japanese, modifying clauses always come BEFORE the noun they modify, and the verb MUST be in its plain form (買った本)."
          },
          {
            type: "sentence-builder",
            prompt: "Build: \"The town where I live.\"",
            audioText: "わたし が すんでいる まち",
            targetSentence: ["わたし", "が", "すんでいる", "まち"],
            tokens: ["わたし", "が", "すんでいる", "まち", "すんでいます", "は"],
            furigana: "私 が 住んでいる 町",
            romaji: "Watashi ga sunde iru machi",
            explanation: "Inside a modifying relative clause, the subject marker changes from 「は」 to 「が」(私が住んでいる町)."
          },
          {
            type: "audio-listening",
            prompt: "Listen and select what dish is being described:",
            audioText: "はは が つくった りょうり",
            kanji: "母が作った料理",
            furigana: "はは が つくった りょうり",
            romaji: "Haha ga tsukutta ryouri",
            options: ["The dish that my mother made", "The restaurant my mother went to", "The food that I ate with my mother", "The cake my mother bought"],
            correctIndex: 0,
            explanation: "「母が作った」(haha ga tsukutta - mother made) + 「料理」(ryouri - dish/cuisine)."
          },
          {
            type: "matching-pairs",
            prompt: "Match relative clause descriptions:",
            pairs: [
              {
                ja: "わたし が かいた え",
                en: "The picture that I drew"
              },
              {
                ja: "きのう みた えいが",
                en: "The movie that I saw yesterday"
              },
              {
                ja: "にほん で つくった くるま",
                en: "The car made in Japan"
              },
              {
                ja: "あした いく ところ",
                en: "The place I will go tomorrow"
              }
            ]
          }
        ]
      },
      {
        id: "lesson-24-2",
        title: "Describing People by Their Actions",
        subtitle: "Ano asoko de hon o yonde iru hito",
        icon: "UserCheck",
        xpReward: 25,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you identify: \"The person reading a book over there is Tanaka-san\"?",
            audioText: "あそこで ほん を よんでいる ひと は たなかさん です",
            kanji: "あそこで本を読んでいる人は田中さんです",
            furigana: "あそこで ほん を よんでいる ひと は たなかさん です",
            romaji: "Asoko de hon o yonde iru hito wa Tanaka-san desu",
            options: ["あそこで ほん を よんでいる ひと は たなかさん です (The person reading a book over there is Tanaka)", "たなかさん は ほん を よみます (Tanaka reads books)", "たなかさん は どこ ですか (Where is Tanaka?)", "ほん を よんで ください (Please read the book)"],
            correctIndex: 0,
            explanation: "[本を読んでいる] modifies [人] directly: \"The book-reading person is Tanaka-san\"."
          },
          {
            type: "sentence-builder",
            prompt: "Translate: \"The person wearing glasses is my teacher.\"",
            audioText: "めがね を かけている ひと は せんせい です",
            targetSentence: ["めがね", "を", "かけている", "ひと", "は", "せんせい", "です"],
            tokens: ["めがね", "を", "かけている", "ひと", "は", "せんせい", "です", "かけています", "が"],
            furigana: "眼鏡 を かけている 人 は 先生 です",
            romaji: "Megane o kakete iru hito wa sensei desu",
            explanation: "Modifying clause 「眼鏡をかけている」 + Noun 「人」 + 「は先生です」."
          },
          {
            type: "audio-listening",
            prompt: "Listen and select which person is being pointed out:",
            audioText: "あかい シャツ を きている ひと",
            kanji: "赤いシャツを着ている人",
            furigana: "あかい シャツ を きている ひと",
            romaji: "Akai shatsu o kite iru hito",
            options: ["The person wearing a red shirt", "The person wearing a blue hat", "The person eating ice cream", "The person carrying a black bag"],
            correctIndex: 0,
            explanation: "「赤いシャツを着ている人」(akai shatsu o kite iru hito)."
          },
          {
            type: "matching-pairs",
            prompt: "Match people-modifying clauses:",
            pairs: [
              {
                ja: "うたって いる ひと",
                en: "The person who is singing"
              },
              {
                ja: "はしって いる ひと",
                en: "The person who is running"
              },
              {
                ja: "ねて いる ひと",
                en: "The person who is sleeping"
              },
              {
                ja: "わらって いる ひと",
                en: "The person who is laughing"
              }
            ]
          }
        ]
      },
      {
        id: "lesson-24-3",
        title: "Time, Appointments & Promises",
        subtitle: "Jikan, Yakusoku & Youji with Clauses",
        icon: "CalendarClock",
        xpReward: 30,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you say \"I have no time to eat breakfast\"?",
            audioText: "あさごはん を たべる じかん が ありません",
            kanji: "朝ご飯を食べる時間がありません",
            furigana: "あさごはん を たべる じかん が ありません",
            romaji: "Asagohan o taberu jikan ga arimasen",
            options: ["あさごはん を たべる じかん が ありません (No time to eat breakfast)", "あさごはん を たべませんでした (Did not eat breakfast)", "あさごはん を たべたくない です (Don't want to eat breakfast)", "あさごはん は なんじ ですか (What time is breakfast?)"],
            correctIndex: 0,
            explanation: "[朝ご飯を食べる] modifies [時間] (time): \"eating-breakfast time does not exist\"."
          },
          {
            type: "sentence-builder",
            prompt: "Assemble: \"I have a promise (appointment) to meet a friend today.\"",
            audioText: "きょう ともだち に あう やくそく が あります",
            targetSentence: ["きょう", "ともだち", "に", "あう", "やくそく", "が", "あります"],
            tokens: ["きょう", "ともだち", "に", "あう", "やくそく", "が", "あります", "あいました", "で"],
            furigana: "今日 友達 に 会う 約束 が あります",
            romaji: "Kyou tomodachi ni au yakusoku ga arimasu",
            explanation: "「会う」(dictionary form) + 「約束」(yakusoku - promise/appointment) + 「があります」."
          },
          {
            type: "matching-pairs",
            prompt: "Match commitment nouns:",
            pairs: [
              {
                ja: "じかん (Jikan)",
                en: "Time"
              },
              {
                ja: "やくそく (Yakusoku)",
                en: "Promise / Appointment"
              },
              {
                ja: "ようじ (Youji)",
                en: "Business to take care of / Errand"
              },
              {
                ja: "よてい (Yotei)",
                en: "Plan / Schedule"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "Which word means \"Promise / Appointment\"?",
            targetEn: "Promise / Appointment",
            options: ["やくそく (Yakusoku)", "じかん (Jikan)", "ようじ (Youji)", "きっぷ (Kippu)"],
            correctIndex: 0,
            audioText: "やくそく",
            explanation: "「約束 / やくそく」(yakusoku) means promise or appointment."
          }
        ]
      },
      {
        id: "lesson-24-chest",
        title: "Unit 24 Architect Chest",
        subtitle: "Relative Clauses Mastered!",
        isChest: true,
        gemReward: 200,
        xpReward: 110
      }
    ]
  },
  {
    id: "unit-25",
    unitNumber: 25,
    title: "JLPT N5 Capstone & Grand Mastery",
    japaneseTitle: "JLPT N5 総復習とマスター",
    description: "Complete synthesis of JLPT N5: reasons with 〜から, conditionals with 〜たら, transitions, and full exam master drill.",
    color: "#FF5E3A",
    bgGradient: "from-[#FF5E3A] to-pink-600",
    lessons: [
      {
        id: "lesson-25-1",
        title: "Giving Reasons: 〜から (Because / So)",
        subtitle: "Jikan ga nai kara, isogimasu. Because I have no time, I will hurry",
        icon: "HelpCircle",
        xpReward: 30,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you say \"Because I have a headache, I will go to the hospital\"?",
            audioText: "あたま が いたい から びょういん へ いきます",
            kanji: "頭が痛いから、病院へ行きます",
            furigana: "あたま が いたい から びょういん へ いきます",
            romaji: "Atama ga itai kara, byouin e ikimasu",
            options: ["あたま が いたい から びょういん へ いきます (Because my head hurts, I'll go to the hospital)", "あたま が いたい です が びょういん へ いきます (My head hurts but I'll go)", "あたま が いたい とき びょういん へ いきました (When head hurt I went)", "あたま が いたかった です (Head was hurting)"],
            correctIndex: 0,
            explanation: "Reason clause + 「から」(kara - because / therefore) + Result clause."
          },
          {
            type: "sentence-builder",
            prompt: "Build: \"Because it is dangerous, please do not touch.\"",
            audioText: "あぶない から さわらないで ください",
            targetSentence: ["あぶない", "から", "さわらないで", "ください"],
            tokens: ["あぶない", "から", "さわらないで", "ください", "さわって", "安全"],
            furigana: "危ない から 触らないで ください",
            romaji: "Abunai kara sawaranaide kudasai",
            explanation: "「危ない」(abunai - dangerous) + 「から」 + 「触らないでください」(please don't touch)."
          },
          {
            type: "audio-listening",
            prompt: "Listen and select why the person did not buy the bag:",
            audioText: "たかかった から かいませんでした",
            kanji: "高かったから買いませんでした",
            furigana: "たかかった から かいませんでした",
            romaji: "Takakatta kara kaimasen deshita",
            options: ["Did not buy it because it was expensive", "Did not buy it because it was old", "Bought it because it was cheap", "Did not have time to buy it"],
            correctIndex: 0,
            explanation: "「高かったから」(because it was expensive) + 「買いませんでした」(did not buy)."
          },
          {
            type: "matching-pairs",
            prompt: "Match conjunctions and transitions:",
            pairs: [
              {
                ja: "から (Kara)",
                en: "Because / Since"
              },
              {
                ja: "でも (Demo)",
                en: "However / But"
              },
              {
                ja: "そして (Soshite)",
                en: "And then / In addition"
              },
              {
                ja: "だから (Dakara)",
                en: "Therefore / So"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "Which word means \"Dangerous\"?",
            targetEn: "Dangerous",
            options: ["あぶない (Abunai)", "あんぜん (Anzen)", "たいせつ (Taisetsu)", "たいへん (Taihen)"],
            correctIndex: 0,
            audioText: "あぶない",
            explanation: "「危ない / あぶない」(abunai) means dangerous / hazardous."
          }
        ]
      },
      {
        id: "lesson-25-2",
        title: "Conditionals & If: 〜たら",
        subtitle: "Nihon e ittara... If/When I go to Japan...",
        icon: "Sparkles",
        xpReward: 30,
        questions: [
          {
            type: "multiple-choice",
            prompt: "How do you form the \"if/when\" conditional [〜たら] in Japanese?",
            audioText: "たら",
            kanji: "〜たら",
            furigana: "〜たら",
            romaji: "-tara",
            options: ["Take the verb Ta-form and simply attach 「ら」(e.g. 行った → 行ったら)", "Add たら directly to the dictionary form", "Drop the first syllable and add たら", "Replace ます with たら"],
            correctIndex: 0,
            explanation: "[Ta-form + ら] forms the Tara-conditional: \"If / When [action happens]\"."
          },
          {
            type: "sentence-builder",
            prompt: "Assemble: \"If it rains tomorrow, I will not go.\"",
            audioText: "あした あめ が ふったら いきません",
            targetSentence: ["あした", "あめ", "が", "ふったら", "いきません"],
            tokens: ["あした", "あめ", "が", "ふったら", "いきません", "ふります", "へ"],
            furigana: "明日 雨 が 降ったら 行きません",
            romaji: "Ashita ame ga futtara ikimasen",
            explanation: "降る → 降った → 「降ったら」(if it falls/rains)."
          },
          {
            type: "audio-listening",
            prompt: "Listen and identify what the speaker wants to do when they arrive in Japan:",
            audioText: "にほん へ いったら すし を たべたい です",
            kanji: "日本へ行ったら寿司を食べたいです",
            furigana: "にほん へ いったら すし を たべたい です",
            romaji: "Nihon e ittara sushi o tabetai desu",
            options: ["If/When I go to Japan, I want to eat sushi", "If I have money, I will buy a car", "When I meet my friend, I will go to Kyoto", "If it is sunny, I will take photos"],
            correctIndex: 0,
            explanation: "「行ったら」(if/when I go) + 「寿司を食べたいです」(want to eat sushi)."
          },
          {
            type: "matching-pairs",
            prompt: "Match conditional Tara-forms:",
            pairs: [
              {
                ja: "たべたら (Tabetara)",
                en: "If/When I eat"
              },
              {
                ja: "やすかったら (Yasukattara)",
                en: "If it is cheap"
              },
              {
                ja: "ひま だったら (Hima dattara)",
                en: "If I have free time"
              },
              {
                ja: "おわったら (Owattara)",
                en: "When it finishes"
              }
            ]
          }
        ]
      },
      {
        id: "lesson-25-3",
        title: "Official JLPT N5 Grand Capstone Drill",
        subtitle: "Comprehensive synthesis: Kanji, Grammar & Reading",
        icon: "Trophy",
        xpReward: 50,
        questions: [
          {
            type: "multiple-choice",
            prompt: "【JLPT N5 Official Question】 Select the correct particle: 「毎朝 7時 ( ___ ) 起きます。」",
            audioText: "まいあさ しちじ に おきます",
            kanji: "毎朝七時に起きます",
            furigana: "まいあさ しちじ に おきます",
            romaji: "Maiasa shichi-ji ni okimasu",
            options: ["に (Ni - Specific point in time)", "で (De - Location of action)", "を (O - Direct object)", "へ (He - Direction)"],
            correctIndex: 0,
            explanation: "Specific clock times take the time particle 「に」 (7時に起きます)."
          },
          {
            type: "sentence-builder",
            prompt: "Assemble the complex sentence: \"The book that I bought yesterday was very interesting.\"",
            audioText: "きのう かった ほん は とても おもしろかった です",
            targetSentence: ["きのう", "かった", "ほん", "は", "とても", "おもしろかった", "です"],
            tokens: ["きのう", "かった", "ほん", "は", "とても", "おもしろかった", "です", "おもしろい", "買いました"],
            furigana: "昨日 買った 本 は とても 面白かった です",
            romaji: "Kinou katta hon wa totemo omoshirokatta desu",
            explanation: "Relative clause (昨日買った本) + Past adjective (面白かった) + です."
          },
          {
            type: "audio-listening",
            prompt: "Listen to the full JLPT N5 dialogue and select the meeting time:",
            audioText: "あした えき の まえ で じゅうじ に あいましょう",
            kanji: "明日駅の前で十時に会いましょう",
            furigana: "あした えき の まえ で じゅうじ に あいましょう",
            romaji: "Ashita eki no mae de juu-ji ni aimashou",
            options: ["Tomorrow at 10:00 AM in front of the station", "Tomorrow at 9:00 AM inside the station", "Today at 10:00 PM behind the school", "Next week at 11:00 AM at the restaurant"],
            correctIndex: 0,
            explanation: "「明日」(tomorrow) + 「駅の前で」(in front of station) + 「十時に会いましょう」(let's meet at 10:00)."
          },
          {
            type: "matching-pairs",
            prompt: "Match key JLPT N5 grammatical particles to their primary roles:",
            pairs: [
              {
                ja: "は (Wa)",
                en: "Topic Marker"
              },
              {
                ja: "が (Ga)",
                en: "Subject / Preference / Existence"
              },
              {
                ja: "を (O)",
                en: "Direct Object of Transitive Verbs"
              },
              {
                ja: "で (De)",
                en: "Location of Action / Tool / Means"
              }
            ]
          },
          {
            type: "reverse-choice",
            prompt: "What Japanese congratulations phrase is said when passing the JLPT exam or reaching a major milestone?",
            targetEn: "Congratulations!",
            options: ["おめでとう ございます (Omedetou gozaimasu)", "ありがとうございます (Arigatou gozaimasu)", "ごちそうさまでした (Gochisousama deshita)", "失礼します (Shitsurei shimasu)"],
            correctIndex: 0,
            audioText: "おめでとう ございます",
            explanation: "「おめでとうございます」(Omedetou gozaimasu) means \"Congratulations!\"."
          }
        ]
      },
      {
        id: "lesson-25-chest",
        title: "Unit 25 JLPT N5 Grand Champion Chest",
        subtitle: "All 25 Units Mastered! JLPT N5 Ready!",
        isChest: true,
        gemReward: 500,
        xpReward: 300
      }
    ]
  }
];
