// survivalPhrasesData.ts — Essential Japanese Survival Phrases for complete beginners

export interface SurvivalPhrase {
  id: string;
  japanese: string;
  furigana: string;
  romaji: string;
  english: string;
  context: string;
  category: 'Greeting' | 'Polite' | 'Travel' | 'Dining' | 'Daily';
  culturalTip?: string;
  audioSlowText?: string;
}

export const SURVIVAL_PHRASES: SurvivalPhrase[] = [
  {
    id: 'sp-1',
    japanese: 'こんにちは',
    furigana: 'こんにちは',
    romaji: 'Konnichiwa',
    english: 'Hello / Good afternoon',
    context: 'Standard daytime greeting used from late morning until dusk.',
    category: 'Greeting',
    culturalTip: 'The final character は is written "ha" in Hiragana but pronounced "wa" because it historically acted as a topic particle.'
  },
  {
    id: 'sp-2',
    japanese: 'ありがとうございます',
    furigana: 'ありがとう ございます',
    romaji: 'Arigatou gozaimasu',
    english: 'Thank you very much (Polite)',
    context: 'The polite standard form of gratitude in Japan. Use with clerks, teachers, and strangers.',
    category: 'Polite',
    culturalTip: 'Pair this with a slight, respectful bow (eshaku) when expressing sincere thanks.'
  },
  {
    id: 'sp-3',
    japanese: 'すみません',
    furigana: 'すみません',
    romaji: 'Sumimasen',
    english: 'Excuse me / Sorry / Pardon me',
    context: 'The #1 versatile phrase in Japan: call a waiter in a restaurant, apologize for bumping into someone, or thank someone for a favor.',
    category: 'Polite',
    culturalTip: 'Raise your hand slightly and say "Sumimasen!" to summon staff at Japanese restaurants.'
  },
  {
    id: 'sp-4',
    japanese: 'おはようございます',
    furigana: 'おはよう ございます',
    romaji: 'Ohayou gozaimasu',
    english: 'Good morning (Polite)',
    context: 'Used until around 10:30 AM with teachers, coworkers, and elders. Friends simply say "Ohayou".',
    category: 'Greeting'
  },
  {
    id: 'sp-5',
    japanese: 'こんばんは',
    furigana: 'こんばんは',
    romaji: 'Konbanwa',
    english: 'Good evening',
    context: 'Evening greeting used after sunset or upon meeting someone after dark.',
    category: 'Greeting'
  },
  {
    id: 'sp-6',
    japanese: 'おねがいします',
    furigana: 'おねがい します',
    romaji: 'Onegaishimasu',
    english: 'Please / I request this',
    context: 'Essential when ordering items, requesting assistance, or handing payment to a cashier.',
    category: 'Polite',
    culturalTip: 'Say this while pointing at a menu item: "Kore, onegaishimasu" (This one please).'
  },
  {
    id: 'sp-7',
    japanese: 'これはいくらですか？',
    furigana: 'これ は いくら です か？',
    romaji: 'Kore wa ikura desu ka?',
    english: 'How much is this?',
    context: 'Everyday shopping phrase for convenience stores, souvenir shops, and markets.',
    category: 'Travel'
  },
  {
    id: 'sp-8',
    japanese: 'トイレはどこですか？',
    furigana: 'トイレ は どこ です か？',
    romaji: 'Toire wa doko desu ka?',
    english: 'Where is the restroom?',
    context: 'Must-know phrase for stations, malls, department stores, and izakayas.',
    category: 'Travel'
  },
  {
    id: 'sp-9',
    japanese: 'いただきます',
    furigana: 'いただきます',
    romaji: 'Itadakimasu',
    english: 'Thank you for the food (Let\'s eat)',
    context: 'Spoken with hands pressed together right before your first bite of food.',
    category: 'Dining',
    culturalTip: 'Expresses humble gratitude to nature, the ingredients, and the people who prepared your meal.'
  },
  {
    id: 'sp-10',
    japanese: 'ごちそうさまでした',
    furigana: 'ごちそうさま でした',
    romaji: 'Gochisousama deshita',
    english: 'Thank you for the delicious meal',
    context: 'Spoken immediately after finishing your meal, and to the restaurant staff as you leave.',
    category: 'Dining'
  },
  {
    id: 'sp-11',
    japanese: 'だいじょうぶです',
    furigana: 'だいじょうぶ です',
    romaji: 'Daijoubu desu',
    english: 'I\'m okay / No thank you / It\'s fine',
    context: 'Great when declining a plastic bag at 7-Eleven or assuring someone you are unhurt.',
    category: 'Daily'
  },
  {
    id: 'sp-12',
    japanese: 'はじめまして、よろしくお願いします',
    furigana: 'はじめまして、よろしく おねがいします',
    romaji: 'Hajimemashite, yoroshiku onegaishimasu',
    english: 'Nice to meet you, please treat me favorably',
    context: 'The golden opening and closing combination for any Japanese self-introduction.',
    category: 'Greeting'
  }
];
