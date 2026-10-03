// Curated N5 Grammar data for Practice Drills
// Covers: Particles (は、が、を、に、で、へ、も、の、か),
// Tenses (present/past/negative), Verb forms, Sentence patterns

export interface GrammarPoint {
  id: string;
  title: string;
  category: 'particle' | 'tense' | 'verb-form' | 'sentence-pattern' | 'demonstrative';
  particle?: string;
  meaning: string;
  structure: string;
  explanation: string;
  examples: { japanese: string; furigana: string; english: string }[];
  fillBlankSentences?: {
    japanese: string;
    furigana: string;
    english: string;
    answer: string;
    wrongOptions: string[];
  }[];
}

export const GRAMMAR_POINTS: GrammarPoint[] = [
  // ─── PARTICLES ────────────────────────────────────────────────
  {
    id: 'g-wa', title: 'Particle は (wa)', category: 'particle', particle: 'は',
    meaning: 'Topic marker', structure: 'Noun + は + ...',
    explanation: 'は marks the topic of the sentence. It does not always mean "subject" — it highlights what the sentence is about.',
    examples: [
      { japanese: '私は学生です。', furigana: 'わたし は がくせい です。', english: 'I am a student.' },
      { japanese: 'これは本です。', furigana: 'これ は ほん です。', english: 'This is a book.' },
    ],
    fillBlankSentences: [
      { japanese: '私 ___ 学生です。', furigana: 'わたし ___ がくせい です。', english: 'I am a student.', answer: 'は', wrongOptions: ['が', 'を', 'に'] },
      { japanese: 'これ ___ 本です。', furigana: 'これ ___ ほん です。', english: 'This is a book.', answer: 'は', wrongOptions: ['も', 'で', 'へ'] },
    ]
  },
  {
    id: 'g-ga', title: 'Particle が (ga)', category: 'particle', particle: 'が',
    meaning: 'Subject marker / emphasis', structure: 'Noun + が + ...',
    explanation: 'が marks the grammatical subject, especially for new info, questions like "who did X?", and feelings/preferences.',
    examples: [
      { japanese: '猫が好きです。', furigana: 'ねこ が すき です。', english: 'I like cats.' },
      { japanese: '誰が来ましたか。', furigana: 'だれ が きました か。', english: 'Who came?' },
    ],
    fillBlankSentences: [
      { japanese: '猫 ___ 好きです。', furigana: 'ねこ ___ すき です。', english: 'I like cats.', answer: 'が', wrongOptions: ['は', 'を', 'に'] },
      { japanese: '誰 ___ 来ましたか。', furigana: 'だれ ___ きました か。', english: 'Who came?', answer: 'が', wrongOptions: ['は', 'も', 'で'] },
    ]
  },
  {
    id: 'g-wo', title: 'Particle を (o)', category: 'particle', particle: 'を',
    meaning: 'Direct object marker', structure: 'Noun + を + Verb',
    explanation: 'を marks the direct object — the thing receiving the action of a transitive verb.',
    examples: [
      { japanese: 'ご飯を食べます。', furigana: 'ごはん を たべます。', english: 'I eat rice.' },
      { japanese: '日本語を勉強します。', furigana: 'にほんご を べんきょう します。', english: 'I study Japanese.' },
    ],
    fillBlankSentences: [
      { japanese: 'ご飯 ___ 食べます。', furigana: 'ごはん ___ たべます。', english: 'I eat rice.', answer: 'を', wrongOptions: ['は', 'が', 'に'] },
      { japanese: 'テレビ ___ 見ます。', furigana: 'テレビ ___ みます。', english: 'I watch TV.', answer: 'を', wrongOptions: ['が', 'で', 'へ'] },
    ]
  },
  {
    id: 'g-ni', title: 'Particle に (ni)', category: 'particle', particle: 'に',
    meaning: 'Time / Destination / Recipient / Location', structure: 'Time/Place/Person + に',
    explanation: 'に indicates: exact time ("at 7"), destination ("go to"), recipient ("give to"), or where things exist (with あります/います).',
    examples: [
      { japanese: '七時に起きます。', furigana: 'しちじ に おきます。', english: 'I wake up at 7.' },
      { japanese: '学校に行きます。', furigana: 'がっこう に いきます。', english: 'I go to school.' },
    ],
    fillBlankSentences: [
      { japanese: '七時 ___ 起きます。', furigana: 'しちじ ___ おきます。', english: 'I wake up at 7.', answer: 'に', wrongOptions: ['は', 'で', 'を'] },
      { japanese: '机の上 ___ 本があります。', furigana: 'つくえ の うえ ___ ほん が あります。', english: 'There is a book on the desk.', answer: 'に', wrongOptions: ['は', 'が', 'へ'] },
    ]
  },
  {
    id: 'g-de', title: 'Particle で (de)', category: 'particle', particle: 'で',
    meaning: 'Location of action / Means / Tool', structure: 'Place/Tool + で + Verb',
    explanation: 'で shows: where an action takes place ("study at school") or the tool/means used ("by train", "in Japanese").',
    examples: [
      { japanese: '学校で勉強します。', furigana: 'がっこう で べんきょう します。', english: 'I study at school.' },
      { japanese: '電車で行きます。', furigana: 'でんしゃ で いきます。', english: 'I go by train.' },
    ],
    fillBlankSentences: [
      { japanese: '学校 ___ 勉強します。', furigana: 'がっこう ___ べんきょう します。', english: 'I study at school.', answer: 'で', wrongOptions: ['に', 'が', 'を'] },
      { japanese: '電車 ___ 行きます。', furigana: 'でんしゃ ___ いきます。', english: 'I go by train.', answer: 'で', wrongOptions: ['に', 'へ', 'は'] },
    ]
  },
  {
    id: 'g-e', title: 'Particle へ (e)', category: 'particle', particle: 'へ',
    meaning: 'Direction / Heading toward', structure: 'Place + へ + Movement Verb',
    explanation: 'へ focuses on the direction of travel toward a place. Often interchangeable with に for destinations.',
    examples: [
      { japanese: '東京へ行きます。', furigana: 'とうきょう へ いきます。', english: 'I head to Tokyo.' },
      { japanese: '家へ帰ります。', furigana: 'うち へ かえります。', english: 'I return home.' },
    ],
    fillBlankSentences: [
      { japanese: '東京 ___ 行きます。', furigana: 'とうきょう ___ いきます。', english: 'I go to Tokyo.', answer: 'へ', wrongOptions: ['は', 'を', 'が'] },
    ]
  },
  {
    id: 'g-mo', title: 'Particle も (mo)', category: 'particle', particle: 'も',
    meaning: 'Also / Too / As well', structure: 'Noun + も',
    explanation: 'も replaces は、が or を to indicate "also/too". Shows the same applies to another person or thing.',
    examples: [
      { japanese: '私もアメリカ人です。', furigana: 'わたし も アメリカじん です。', english: 'I am also American.' },
      { japanese: 'コーヒーも飲みます。', furigana: 'コーヒー も のみます。', english: 'I also drink coffee.' },
    ],
    fillBlankSentences: [
      { japanese: '私 ___ 学生です。(also)', furigana: 'わたし ___ がくせい です。', english: 'I am also a student.', answer: 'も', wrongOptions: ['は', 'が', 'を'] },
    ]
  },
  {
    id: 'g-no', title: 'Particle の (no)', category: 'particle', particle: 'の',
    meaning: "Possessive / Noun modifier ('s / of)", structure: 'Noun 1 + の + Noun 2',
    explanation: 'の connects two nouns: possession (my book = 私の本), origin (Japanese car = 日本の車), or category.',
    examples: [
      { japanese: '私の本です。', furigana: 'わたし の ほん です。', english: 'It is my book.' },
      { japanese: '日本の車が好きです。', furigana: 'にほん の くるま が すき です。', english: 'I like Japanese cars.' },
    ],
    fillBlankSentences: [
      { japanese: '私 ___ 本です。', furigana: 'わたし ___ ほん です。', english: 'It is my book.', answer: 'の', wrongOptions: ['は', 'が', 'に'] },
    ]
  },
  {
    id: 'g-ka', title: 'Particle か (ka)', category: 'particle', particle: 'か',
    meaning: 'Question marker (?)', structure: 'Sentence + か',
    explanation: 'か at the end turns a statement into a question. Word order does NOT change, unlike English.',
    examples: [
      { japanese: '学生ですか。', furigana: 'がくせい です か。', english: 'Are you a student?' },
      { japanese: '日本語が分かりますか。', furigana: 'にほんご が わかります か。', english: 'Do you understand Japanese?' },
    ],
    fillBlankSentences: [
      { japanese: '学生です ___。', furigana: 'がくせい です ___。', english: 'Are you a student?', answer: 'か', wrongOptions: ['ね', 'よ', 'も'] },
    ]
  },
  // ─── TENSES ───────────────────────────────────────────────────
  {
    id: 'g-masu', title: 'Present/Future: 〜ます (masu)', category: 'tense',
    meaning: 'I do / will do [polite]', structure: 'Verb stem + ます',
    explanation: 'ます is the polite present/future form. Describes habitual actions, facts, or future plans.',
    examples: [
      { japanese: '毎日勉強します。', furigana: 'まいにち べんきょう します。', english: 'I study every day.' },
      { japanese: '明日、映画を見ます。', furigana: 'あした、えいが を みます。', english: 'I will watch a movie tomorrow.' },
    ],
    fillBlankSentences: [
      { japanese: '毎日、本を読み___。', furigana: 'まいにち、ほん を よみ___。', english: 'I read a book every day.', answer: 'ます', wrongOptions: ['ました', 'ません', 'ませんでした'] },
      { japanese: '明日、学校に行き___。', furigana: 'あした、がっこう に いき___。', english: 'I will go to school tomorrow.', answer: 'ます', wrongOptions: ['ました', 'ません', 'たい'] },
    ]
  },
  {
    id: 'g-mashita', title: 'Past Tense: 〜ました (mashita)', category: 'tense',
    meaning: 'I did [polite past]', structure: 'Verb stem + ました',
    explanation: 'ました is the polite past tense. Describes actions that have already happened.',
    examples: [
      { japanese: '昨日、日本語を勉強しました。', furigana: 'きのう、にほんご を べんきょう しました。', english: 'I studied Japanese yesterday.' },
      { japanese: '朝ごはんを食べました。', furigana: 'あさごはん を たべました。', english: 'I ate breakfast.' },
    ],
    fillBlankSentences: [
      { japanese: '昨日、映画を見___。', furigana: 'きのう、えいが を み___。', english: 'I watched a movie yesterday.', answer: 'ました', wrongOptions: ['ます', 'ません', 'ませんでした'] },
      { japanese: '朝ごはんを食べ___。', furigana: 'あさごはん を たべ___。', english: 'I ate breakfast.', answer: 'ました', wrongOptions: ['ます', 'ません', 'たい'] },
    ]
  },
  {
    id: 'g-masen', title: 'Negative: 〜ません (masen)', category: 'tense',
    meaning: 'I do not / will not do [polite]', structure: 'Verb stem + ません',
    explanation: 'ません is the polite present/future negative.',
    examples: [
      { japanese: 'お酒を飲みません。', furigana: 'おさけ を のみません。', english: 'I do not drink alcohol.' },
      { japanese: '明日は行きません。', furigana: 'あした は いきません。', english: "I won't go tomorrow." },
    ],
    fillBlankSentences: [
      { japanese: 'お酒を飲み___。', furigana: 'おさけ を のみ___。', english: 'I do not drink alcohol.', answer: 'ません', wrongOptions: ['ます', 'ました', 'ませんでした'] },
    ]
  },
  {
    id: 'g-masendeshita', title: 'Past Negative: 〜ませんでした', category: 'tense',
    meaning: 'I did not do [polite past negative]', structure: 'Verb stem + ませんでした',
    explanation: 'ませんでした is the polite past negative — something did not happen.',
    examples: [
      { japanese: '昨日は来ませんでした。', furigana: 'きのう は きませんでした。', english: 'I did not come yesterday.' },
      { japanese: '朝ごはんを食べませんでした。', furigana: 'あさごはん を たべませんでした。', english: 'I did not eat breakfast.' },
    ],
    fillBlankSentences: [
      { japanese: '昨日は来___。', furigana: 'きのう は き___。', english: 'I did not come yesterday.', answer: 'ませんでした', wrongOptions: ['ます', 'ました', 'ません'] },
    ]
  },
  // ─── VERB FORMS ───────────────────────────────────────────────
  {
    id: 'g-te-kudasai', title: '〜てください (Please do...)', category: 'verb-form',
    meaning: 'Please do [polite request]', structure: 'Verb て-form + ください',
    explanation: 'て-form + ください makes a polite request: "please do ___". Very common in daily life.',
    examples: [
      { japanese: 'ゆっくり話してください。', furigana: 'ゆっくり はなして ください。', english: 'Please speak slowly.' },
      { japanese: 'ここに座ってください。', furigana: 'ここ に すわって ください。', english: 'Please sit here.' },
    ],
    fillBlankSentences: [
      { japanese: 'ゆっくり話して___。', furigana: 'ゆっくり はなして___。', english: 'Please speak slowly.', answer: 'ください', wrongOptions: ['います', 'みます', 'あります'] },
    ]
  },
  {
    id: 'g-tai', title: '〜たい (Want to do)', category: 'verb-form',
    meaning: "I want to do...", structure: 'Verb stem + たい',
    explanation: "〜たい expresses the speaker's desire to do something. Conjugates like an い-adjective.",
    examples: [
      { japanese: '日本に行きたいです。', furigana: 'にほん に いきたい です。', english: 'I want to go to Japan.' },
      { japanese: 'ラーメンを食べたいです。', furigana: 'ラーメン を たべたい です。', english: 'I want to eat ramen.' },
    ],
    fillBlankSentences: [
      { japanese: '日本に行き___です。', furigana: 'にほん に いき___です。', english: 'I want to go to Japan.', answer: 'たい', wrongOptions: ['ます', 'ました', 'ません'] },
    ]
  },
  // ─── SENTENCE PATTERNS ────────────────────────────────────────
  {
    id: 'g-arimasu', title: 'あります (Existence — inanimate)', category: 'sentence-pattern',
    meaning: 'There is/are [inanimate object]', structure: 'Place + に + Object + が + あります',
    explanation: 'あります expresses existence of non-living things: objects, buildings, plants, scheduled events.',
    examples: [
      { japanese: '机の上に本があります。', furigana: 'つくえ の うえ に ほん が あります。', english: 'There is a book on the desk.' },
      { japanese: '駅の近くにコンビニがあります。', furigana: 'えき の ちかく に コンビニ が あります。', english: 'There is a convenience store near the station.' },
    ],
    fillBlankSentences: [
      { japanese: '机の上に本が___。', furigana: 'つくえ の うえ に ほん が___。', english: 'There is a book on the desk.', answer: 'あります', wrongOptions: ['います', 'です', 'きます'] },
    ]
  },
  {
    id: 'g-imasu', title: 'います (Existence — animate)', category: 'sentence-pattern',
    meaning: 'There is/are [person/animal]', structure: 'Place + に + Person/Animal + が + います',
    explanation: 'います expresses existence of living beings: people, animals, and insects.',
    examples: [
      { japanese: '庭に猫がいます。', furigana: 'にわ に ねこ が います。', english: 'There is a cat in the garden.' },
      { japanese: '教室に先生がいます。', furigana: 'きょうしつ に せんせい が います。', english: 'There is a teacher in the classroom.' },
    ],
    fillBlankSentences: [
      { japanese: '庭に猫が___。', furigana: 'にわ に ねこ が___。', english: 'There is a cat in the garden.', answer: 'います', wrongOptions: ['あります', 'です', 'きます'] },
    ]
  },
  {
    id: 'g-desu', title: 'です (Copula — is/am/are)', category: 'sentence-pattern',
    meaning: 'Is / Am / Are [polite]', structure: 'Noun / な-Adj + です',
    explanation: 'です is the polite copula. Links subject to noun or な-adjective.',
    examples: [
      { japanese: '私は日本人です。', furigana: 'わたし は にほんじん です。', english: 'I am Japanese.' },
      { japanese: '今日は月曜日です。', furigana: 'きょう は げつようび です。', english: 'Today is Monday.' },
    ],
    fillBlankSentences: [
      { japanese: '私は日本人___。', furigana: 'わたし は にほんじん___。', english: 'I am Japanese.', answer: 'です', wrongOptions: ['ます', 'います', 'あります'] },
    ]
  },
  {
    id: 'g-ja-arimasen', title: 'じゃありません (Is not)', category: 'sentence-pattern',
    meaning: 'Is not / Am not [polite negative]', structure: 'Noun / な-Adj + じゃありません',
    explanation: 'じゃありません is the polite negative of です. ではありません is more formal.',
    examples: [
      { japanese: '私は先生じゃありません。', furigana: 'わたし は せんせい じゃありません。', english: 'I am not a teacher.' },
      { japanese: 'これは私のじゃありません。', furigana: 'これ は わたし の じゃありません。', english: 'This is not mine.' },
    ],
    fillBlankSentences: [
      { japanese: '私は先生___。(not)', furigana: 'わたし は せんせい___。', english: 'I am not a teacher.', answer: 'じゃありません', wrongOptions: ['です', 'でした', 'ません'] },
    ]
  },
  {
    id: 'g-deshita', title: 'でした / じゃありませんでした (Was / Was not)', category: 'tense',
    meaning: 'Was / Were [polite past]', structure: 'Noun / な-Adj + でした',
    explanation: 'でした is the past tense of です. じゃありませんでした is the past negative.',
    examples: [
      { japanese: '昨日は日曜日でした。', furigana: 'きのう は にちようび でした。', english: 'Yesterday was Sunday.' },
      { japanese: '昨日は雨じゃありませんでした。', furigana: 'きのう は あめ じゃありませんでした。', english: "It wasn't rainy yesterday." },
    ],
    fillBlankSentences: [
      { japanese: '昨日は日曜日___。', furigana: 'きのう は にちようび___。', english: 'Yesterday was Sunday.', answer: 'でした', wrongOptions: ['です', 'ます', 'ました'] },
    ]
  },
  // ─── DEMONSTRATIVES ───────────────────────────────────────────
  {
    id: 'g-kore-sore', title: 'これ / それ / あれ / どれ', category: 'demonstrative',
    meaning: 'This / That / That far / Which one', structure: 'これ/それ/あれ/どれ + は + ...',
    explanation: 'Pronouns based on distance: これ (near speaker), それ (near listener), あれ (far from both), どれ (which one?).',
    examples: [
      { japanese: 'これは何ですか。', furigana: 'これ は なん です か。', english: 'What is this?' },
      { japanese: 'あれは富士山です。', furigana: 'あれ は ふじさん です。', english: 'That over there is Mt. Fuji.' },
    ],
    fillBlankSentences: [
      { japanese: '___ は何ですか。（near you）', furigana: '___ は なん です か。', english: 'What is that? (near listener)', answer: 'それ', wrongOptions: ['これ', 'あれ', 'どれ'] },
      { japanese: '___ は私のペンです。（near me）', furigana: '___ は わたし の ペン です。', english: 'This is my pen.', answer: 'これ', wrongOptions: ['それ', 'あれ', 'どれ'] },
    ]
  },
];

export function getGrammarByCategory(category: GrammarPoint['category']): GrammarPoint[] {
  return GRAMMAR_POINTS.filter(g => g.category === category);
}
