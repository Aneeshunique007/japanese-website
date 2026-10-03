import { WordItem } from '../types.js';

export const WORDS_N5_LIST: WordItem[] = [
  // --- N5 VERBS ---
  {
    id: 'w-n5-1',
    word: '食べる',
    reading: 'たべる',
    romaji: 'taberu',
    meaning: 'To eat',
    pos: 'verb',
    posLabel: 'Ichidan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{ char: '食', meaning: 'Eat / Food' }],
    sentences: [
      { id: 'ws-n5-1-1', sentence: '毎日、パンを食べます。', furigana: 'まいにち、パン を たべます。', romaji: 'Mainichi, pan o tabemasu.', english: 'I eat bread every day.' },
      { id: 'ws-n5-1-2', sentence: '昼ごはんに魚を食べました。', furigana: 'ひるごはん に さかな を たべました。', romaji: 'Hirugohan ni sakana o tabemashita.', english: 'I ate fish for lunch.' }
    ]
  },
  {
    id: 'w-n5-2',
    word: '飲む',
    reading: 'のむ',
    romaji: 'nomu',
    meaning: 'To drink',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{ char: '飲', meaning: 'Drink' }],
    sentences: [
      { id: 'ws-n5-2-1', sentence: '毎日、水をたくさん飲みます。', furigana: 'まいにち、みず を たくさん のみます。', romaji: 'Mainichi, mizu o takusan nomimasu.', english: 'I drink a lot of water every day.' },
      { id: 'ws-n5-2-2', sentence: '朝、温かいお茶を飲みました。', furigana: 'あさ、あたたかい おちゃ を のみました。', romaji: 'Asa, atatakai ocha o nomimashita.', english: 'In the morning, I drank warm green tea.' }
    ]
  },
  {
    id: 'w-n5-3',
    word: '行く',
    reading: 'いく',
    romaji: 'iku',
    meaning: 'To go',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{ char: '行', meaning: 'Go / Conduct' }],
    sentences: [
      { id: 'ws-n5-3-1', sentence: '明日、学校へ行きます。', furigana: 'あした、がっこう へ いきます。', romaji: 'Ashita, gakkou e ikimasu.', english: 'Tomorrow I will go to school.' },
      { id: 'ws-n5-3-2', sentence: '昨日、スーパーへ行きました。', furigana: 'きのう、スーパー へ いきました。', romaji: 'Kinou, suupaa e ikimashita.', english: 'Yesterday I went to the supermarket.' }
    ]
  },
  {
    id: 'w-n5-4',
    word: '来る',
    reading: 'くる',
    romaji: 'kuru',
    meaning: 'To come',
    pos: 'verb',
    posLabel: 'Irregular Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{ char: '来', meaning: 'Come / Next' }],
    sentences: [
      { id: 'ws-n5-4-1', sentence: '友達が私の家に来ます。', furigana: 'ともだち が わたし の いえ に きます。', romaji: 'Tomodachi ga watashi no ie ni kimasu.', english: 'A friend is coming to my house.' },
      { id: 'ws-n5-4-2', sentence: '先生が教室に来ました。', furigana: 'せんせい が きょうしつ に きました。', romaji: 'Sensei ga kyoushitsu ni kimashita.', english: 'The teacher came to the classroom.' }
    ]
  },
  {
    id: 'w-n5-5',
    word: '帰る',
    reading: 'かえる',
    romaji: 'kaeru',
    meaning: 'To return / Go home',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{ char: '帰', meaning: 'Return' }],
    sentences: [
      { id: 'ws-n5-5-1', sentence: '午後五時に家に帰ります。', furigana: 'ごご ごじ に いえ に かえります。', romaji: 'Gogo goji ni ie ni kaerimasu.', english: 'I will go home at 5 PM.' },
      { id: 'ws-n5-5-2', sentence: '一緒にうちへ帰りましょう。', furigana: 'いっしょ に うち へ かえりましょう。', romaji: 'Issho ni uchi e kaerimashou.', english: 'Let us go home together.' }
    ]
  },
  {
    id: 'w-n5-6',
    word: '見る',
    reading: 'みる',
    romaji: 'miru',
    meaning: 'To see / To watch',
    pos: 'verb',
    posLabel: 'Ichidan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{ char: '見', meaning: 'See / Look' }],
    sentences: [
      { id: 'ws-n5-6-1', sentence: '部屋でテレビを見ます。', furigana: 'へや で テレビ を みます。', romaji: 'Heya de terebi o mimasu.', english: 'I watch TV in my room.' },
      { id: 'ws-n5-6-2', sentence: '昨日、面白い映画を見ました。', furigana: 'きのう、おもしろい えいが を みました。', romaji: 'Kinou, omoshiroi eiga o mimashita.', english: 'Yesterday I watched an interesting movie.' }
    ]
  },
  {
    id: 'w-n5-7',
    word: '聞く',
    reading: 'きく',
    romaji: 'kiku',
    meaning: 'To listen / To hear / To ask',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{ char: '聞', meaning: 'Hear / Listen' }],
    sentences: [
      { id: 'ws-n5-7-1', sentence: '毎日、日本の音楽を聞きます。', furigana: 'まいにち、にほん の おんがく を ききます。', romaji: 'Mainichi, Nihon no ongaku o kikimasu.', english: 'I listen to Japanese music every day.' },
      { id: 'ws-n5-7-2', sentence: '先生に質問を聞きました。', furigana: 'せんせい に しつもん を ききました。', romaji: 'Sensei ni shitsumon o kikimashita.', english: 'I asked the teacher a question.' }
    ]
  },
  {
    id: 'w-n5-8',
    word: '読む',
    reading: 'よむ',
    romaji: 'yomu',
    meaning: 'To read',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{ char: '読', meaning: 'Read' }],
    sentences: [
      { id: 'ws-n5-8-1', sentence: '図書館で本を読みます。', furigana: 'としょかん で ほん を よみます。', romaji: 'Toshokan de hon o yomimasu.', english: 'I read books at the library.' },
      { id: 'ws-n5-8-2', sentence: '今朝、新聞を読みました。', furigana: 'けさ、しんぶん を よみました。', romaji: 'Kesa, shinbun o yomimashita.', english: 'I read the newspaper this morning.' }
    ]
  },
  {
    id: 'w-n5-9',
    word: '書く',
    reading: 'かく',
    romaji: 'kaku',
    meaning: 'To write',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{ char: '書', meaning: 'Write' }],
    sentences: [
      { id: 'ws-n5-9-1', sentence: 'ノートに名前を書きます。', furigana: 'ノート に なまえ を かきます。', romaji: 'Nooto ni namae o kakimasu.', english: 'I write my name in the notebook.' },
      { id: 'ws-n5-9-2', sentence: '友達に手紙を書きました。', furigana: 'ともだち に てがみ を かきました。', romaji: 'Tomodachi ni tegami o kakimashita.', english: 'I wrote a letter to a friend.' }
    ]
  },
  {
    id: 'w-n5-10',
    word: '話す',
    reading: 'はなす',
    romaji: 'hanasu',
    meaning: 'To speak / To talk',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{ char: '話', meaning: 'Talk / Speak' }],
    sentences: [
      { id: 'ws-n5-10-1', sentence: '先生と日本語で話します。', furigana: 'せんせい と にほんご で はなします。', romaji: 'Sensei to nihongo de hanashimasu.', english: 'I speak in Japanese with the teacher.' },
      { id: 'ws-n5-10-2', sentence: '友達と楽しく話しました。', furigana: 'ともだち と たのしく はなしました。', romaji: 'Tomodachi to tanoshiku hanashimashita.', english: 'I talked happily with my friend.' }
    ]
  },
  {
    id: 'w-n5-11',
    word: '買う',
    reading: 'かう',
    romaji: 'kau',
    meaning: 'To buy',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{ char: '買', meaning: 'Buy' }],
    sentences: [
      { id: 'ws-n5-11-1', sentence: 'コンビニでお茶とパンを買いました。', furigana: 'コンビニ で おちゃ と パン を かいました。', romaji: 'Konbini de ocha to pan o kaimashita.', english: 'I bought tea and bread at the convenience store.' },
      { id: 'ws-n5-11-2', sentence: '明日、新しいノートを買います。', furigana: 'あした、あたらしい ノート を かいます。', romaji: 'Ashita, atarashii nooto o kaimasu.', english: 'Tomorrow I will buy a new notebook.' }
    ]
  },
  {
    id: 'w-n5-12',
    word: '会う',
    reading: 'あう',
    romaji: 'au',
    meaning: 'To meet',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{ char: '会', meaning: 'Meet / Society' }],
    sentences: [
      { id: 'ws-n5-12-1', sentence: '駅の前で友達と会います。', furigana: 'えき の まえ で ともだち と あいます。', romaji: 'Eki no mae de tomodachi to aimasu.', english: 'I will meet my friend in front of the station.' },
      { id: 'ws-n5-12-2', sentence: '昨日、田中先生と会いました。', furigana: 'きのう、たなか せんせい と あいました。', romaji: 'Kinou, Tanaka-sensei to aimashita.', english: 'Yesterday I met with Teacher Tanaka.' }
    ]
  },
  {
    id: 'w-n5-13',
    word: '待つ',
    reading: 'まつ',
    romaji: 'matsu',
    meaning: 'To wait',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{ char: '待', meaning: 'Wait' }],
    sentences: [
      { id: 'ws-n5-13-1', sentence: '駅で友達を待ちます。', furigana: 'えき で ともだち を まちます。', romaji: 'Eki de tomodachi o machimasu.', english: 'I wait for my friend at the station.' },
      { id: 'ws-n5-13-2', sentence: 'ここで少し待ってください。', furigana: 'ここ で すこし まって ください。', romaji: 'Koko de sukoshi matte kudasai.', english: 'Please wait here for a little while.' }
    ]
  },
  {
    id: 'w-n5-14',
    word: '起きる',
    reading: 'おきる',
    romaji: 'okiru',
    meaning: 'To wake up / To get up',
    pos: 'verb',
    posLabel: 'Ichidan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{ char: '起', meaning: 'Rouse / Wake' }],
    sentences: [
      { id: 'ws-n5-14-1', sentence: '毎朝、七時に起きます。', furigana: 'まいあさ、しちじ に おきます。', romaji: 'Maiasa, shichiji ni okimasu.', english: 'I wake up at 7:00 every morning.' },
      { id: 'ws-n5-14-2', sentence: '今日は朝早く起きました。', furigana: 'きょう は あさ はやく おきました。', romaji: 'Kyou wa asa hayaku okimashita.', english: 'Today I woke up early in the morning.' }
    ]
  },
  {
    id: 'w-n5-15',
    word: '寝る',
    reading: 'ねる',
    romaji: 'neru',
    meaning: 'To sleep / To go to bed',
    pos: 'verb',
    posLabel: 'Ichidan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{ char: '寝', meaning: 'Sleep' }],
    sentences: [
      { id: 'ws-n5-15-1', sentence: '毎晩、十一時に寝ます。', furigana: 'まいばん、じゅういちじ に ねます。', romaji: 'Maiban, juuichiji ni nemasu.', english: 'I go to sleep at 11:00 every night.' },
      { id: 'ws-n5-15-2', sentence: '昨日は十時に寝ました。', furigana: 'きのう は じゅうじ に ねました。', romaji: 'Kinou wa juuji ni nemashita.', english: 'Yesterday I went to bed at 10:00.' }
    ]
  },

  // --- N5 NOUNS ---
  {
    id: 'w-n5-16',
    word: '学生',
    reading: 'がくせい',
    romaji: 'gakusei',
    meaning: 'Student',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [
      { char: '学', meaning: 'Study / Learn' },
      { char: '生', meaning: 'Life / Birth' }
    ],
    sentences: [
      { id: 'ws-n5-16-1', sentence: '私は日本語学校の学生です。', furigana: 'わたし は にほんご がっこう の がくせい です。', romaji: 'Watashi wa nihongo gakkou no gakusei desu.', english: 'I am a student at a Japanese language school.' },
      { id: 'ws-n5-16-2', sentence: 'あの人は大学の学生ですか。', furigana: 'あの ひと は だいがく の がくせい です か。', romaji: 'Ano hito wa daigaku no gakusei desu ka.', english: 'Is that person a university student?' }
    ]
  },
  {
    id: 'w-n5-17',
    word: '先生',
    reading: 'せんせい',
    romaji: 'sensei',
    meaning: 'Teacher / Instructor',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [
      { char: '先', meaning: 'Previous / Ahead' },
      { char: '生', meaning: 'Life / Birth' }
    ],
    sentences: [
      { id: 'ws-n5-17-1', sentence: '田中先生はとても優しいです。', furigana: 'たなか せんせい は とても やさしい です。', romaji: 'Tanaka-sensei wa totemo yasashii desu.', english: 'Teacher Tanaka is very kind.' },
      { id: 'ws-n5-17-2', sentence: '先生、質問があります。', furigana: 'せんせい、しつもん が あります。', romaji: 'Sensei, shitsumon ga arimasu.', english: 'Teacher, I have a question.' }
    ]
  },
  {
    id: 'w-n5-18',
    word: '友達',
    reading: 'ともだち',
    romaji: 'tomodachi',
    meaning: 'Friend',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [
      { char: '友', meaning: 'Friend' },
      { char: '達', meaning: 'Plural / Reach' }
    ],
    sentences: [
      { id: 'ws-n5-18-1', sentence: '公園で友達と遊びます。', furigana: 'こうえん で ともだち と あそびます。', romaji: 'Kouen de tomodachi to asobimasu.', english: 'I play with my friend in the park.' },
      { id: 'ws-n5-18-2', sentence: '私には優しい友達がいます。', furigana: 'わたし に は やさしい ともだち が います。', romaji: 'Watashi ni wa yasashii tomodachi ga imasu.', english: 'I have kind friends.' }
    ]
  },
  {
    id: 'w-n5-19',
    word: '学校',
    reading: 'がっこう',
    romaji: 'gakkou',
    meaning: 'School',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [
      { char: '学', meaning: 'Study' },
      { char: '校', meaning: 'School' }
    ],
    sentences: [
      { id: 'ws-n5-19-1', sentence: '私は歩いて学校へ行きます。', furigana: 'わたし は あるいて がっこう へ いきます。', romaji: 'Watashi wa aruite gakkou e ikimasu.', english: 'I walk to school.' },
      { id: 'ws-n5-19-2', sentence: '学校は駅の近くにあります。', furigana: 'がっこう は えき の ちかく に あります。', romaji: 'Gakkou wa eki no chikaku ni arimasu.', english: 'The school is near the station.' }
    ]
  },
  {
    id: 'w-n5-20',
    word: '時間',
    reading: 'じかん',
    romaji: 'jikan',
    meaning: 'Time / Hours',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [
      { char: '時', meaning: 'Time / Hour' },
      { char: '間', meaning: 'Interval / Space' }
    ],
    sentences: [
      { id: 'ws-n5-20-1', sentence: '今、時間を教えてください。', furigana: 'いま、じかん を おしえて ください。', romaji: 'Ima, jikan o oshiete kudasai.', english: 'Please tell me the time now.' },
      { id: 'ws-n5-20-2', sentence: '日本語を勉強する時間があります。', furigana: 'にほんご を べんきょう する じかん が あります。', romaji: 'Nihongo o benkyou suru jikan ga arimasu.', english: 'I have time to study Japanese.' }
    ]
  },
  {
    id: 'w-n5-21',
    word: '電車',
    reading: 'でんしゃ',
    romaji: 'densha',
    meaning: 'Electric Train',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [
      { char: '電', meaning: 'Electricity' },
      { char: '車', meaning: 'Car / Vehicle' }
    ],
    sentences: [
      { id: 'ws-n5-21-1', sentence: '毎朝、電車で学校へ行きます。', furigana: 'まいあさ、でんしゃ で がっこう へ いきます。', romaji: 'Maiasa, densha de gakkou e ikimasu.', english: 'Every morning I go to school by train.' },
      { id: 'ws-n5-21-2', sentence: '駅に新しい電車が来ました。', furigana: 'えき に あたらしい でんしゃ が きました。', romaji: 'Eki ni atarashii densha ga kimashita.', english: 'A new train came to the station.' }
    ]
  },
  {
    id: 'w-n5-22',
    word: '部屋',
    reading: 'へや',
    romaji: 'heya',
    meaning: 'Room',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [
      { char: '部', meaning: 'Part / Section' },
      { char: '屋', meaning: 'Roof / Room / Shop' }
    ],
    sentences: [
      { id: 'ws-n5-22-1', sentence: '私の部屋はとてもきれいです。', furigana: 'わたし の へや は とても きれい です。', romaji: 'Watashi no heya wa totemo kirei desu.', english: 'My room is very clean.' },
      { id: 'ws-n5-22-2', sentence: '部屋に机とベッドがあります。', furigana: 'へや に つくえ と ベッド が あります。', romaji: 'Heya ni tsukue to beddo ga arimasu.', english: 'There is a desk and a bed in the room.' }
    ]
  },

  // --- N5 ADJECTIVES ---
  {
    id: 'w-n5-23',
    word: '大きい',
    reading: 'おおきい',
    romaji: 'ookii',
    meaning: 'Big / Large',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{ char: '大', meaning: 'Big' }],
    sentences: [
      { id: 'ws-n5-23-1', sentence: 'この犬はとても大きいです。', furigana: 'この いぬ は とても おおきい です。', romaji: 'Kono inu wa totemo ookii desu.', english: 'This dog is very big.' },
      { id: 'ws-n5-23-2', sentence: '駅の前に大きいスーパーがあります。', furigana: 'えき の まえ に おおきい スーパー が あります。', romaji: 'Eki no mae ni ookii suupaa ga arimasu.', english: 'There is a big supermarket in front of the station.' }
    ]
  },
  {
    id: 'w-n5-24',
    word: '小さい',
    reading: 'ちいさい',
    romaji: 'chiisai',
    meaning: 'Small / Little',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{ char: '小', meaning: 'Small' }],
    sentences: [
      { id: 'ws-n5-24-1', sentence: 'この猫はとても小さいです。', furigana: 'この ねこ は とても ちいさい です。', romaji: 'Kono neko wa totemo chiisai desu.', english: 'This cat is very small.' },
      { id: 'ws-n5-24-2', sentence: '小さいカバンを買いました。', furigana: 'ちいさい カバン を かいました。', romaji: 'Chiisai kaban o kaimashita.', english: 'I bought a small bag.' }
    ]
  },
  {
    id: 'w-n5-25',
    word: '新しい',
    reading: 'あたらしい',
    romaji: 'atarashii',
    meaning: 'New / Fresh',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{ char: '新', meaning: 'New' }],
    sentences: [
      { id: 'ws-n5-25-1', sentence: 'これは新しい車です。', furigana: 'これ は あたらしい くるま です。', romaji: 'Kore wa atarashii kuruma desu.', english: 'This is a new car.' },
      { id: 'ws-n5-25-2', sentence: '昨日、新しい靴を買いました。', furigana: 'きのう、あたらしい くつ を かいました。', romaji: 'Kinou, atarashii kutsu o kaimashita.', english: 'Yesterday I bought new shoes.' }
    ]
  },
  {
    id: 'w-n5-26',
    word: '古い',
    reading: 'ふるい',
    romaji: 'furui',
    meaning: 'Old (things)',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{ char: '古', meaning: 'Old' }],
    sentences: [
      { id: 'ws-n5-26-1', sentence: 'この本はとても古いです。', furigana: 'この ほん は とても ふるい です。', romaji: 'Kono hon wa totemo furui desu.', english: 'This book is very old.' },
      { id: 'ws-n5-26-2', sentence: '古い写真を見ました。', furigana: 'ふるい しゃしん を みました。', romaji: 'Furui shashin o mimashita.', english: 'I looked at old photos.' }
    ]
  },
  {
    id: 'w-n5-27',
    word: '高い',
    reading: 'たかい',
    romaji: 'takai',
    meaning: 'Expensive / High / Tall',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{ char: '高', meaning: 'High / Expensive' }],
    sentences: [
      { id: 'ws-n5-27-1', sentence: 'この本は少し高いです。', furigana: 'この ほん は すこし たかい です。', romaji: 'Kono hon wa sukoshi takai desu.', english: 'This book is a little expensive.' },
      { id: 'ws-n5-27-2', sentence: 'あの山はとても高いです。', furigana: 'あの やま は とても たかい です。', romaji: 'Ano yama wa totemo takai desu.', english: 'That mountain is very high.' }
    ]
  },
  {
    id: 'w-n5-28',
    word: '安い',
    reading: 'やすい',
    romaji: 'yasui',
    meaning: 'Cheap / Inexpensive',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{ char: '安', meaning: 'Cheap / Peaceful' }],
    sentences: [
      { id: 'ws-n5-28-1', sentence: 'このりんごはとても安いです。', furigana: 'この りんご は とても やすい です。', romaji: 'Kono ringo wa totemo yasui desu.', english: 'This apple is very cheap.' },
      { id: 'ws-n5-28-2', sentence: 'あの店で安い服を買いました。', furigana: 'あの みせ で やすい ふく を かいました。', romaji: 'Ano mise de yasui fuku o kaimashita.', english: 'I bought cheap clothes at that store.' }
    ]
  },
  {
    id: 'w-n5-29',
    word: '静か',
    reading: 'しずか',
    romaji: 'shizuka',
    meaning: 'Quiet / Peaceful',
    pos: 'adjective',
    posLabel: 'na-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{ char: '静', meaning: 'Quiet' }],
    sentences: [
      { id: 'ws-n5-29-1', sentence: '図書館はとても静かです。', furigana: 'としょかん は とても しずか です。', romaji: 'Toshokan wa totemo shizuka desu.', english: 'The library is very quiet.' },
      { id: 'ws-n5-29-2', sentence: '夜、部屋は静かになります。', furigana: 'よる、へや は しずか に なります。', romaji: 'Yoru, heya wa shizuka ni narimasu.', english: 'At night, the room becomes quiet.' }
    ]
  },
  {
    id: 'w-n5-30',
    word: '有名',
    reading: 'ゆうめい',
    romaji: 'yuumei',
    meaning: 'Famous',
    pos: 'adjective',
    posLabel: 'na-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [
      { char: '有', meaning: 'Have / Exist' },
      { char: '名', meaning: 'Name' }
    ],
    sentences: [
      { id: 'ws-n5-30-1', sentence: '富士山はとても有名な山です。', furigana: 'ふじさん は とても ゆうめい な やま です。', romaji: 'Fujisan wa totemo yuumei na yama desu.', english: 'Mount Fuji is a very famous mountain.' },
      { id: 'ws-n5-30-2', sentence: '京都は有名な町です。', furigana: 'きょうと は ゆうめい な まち です。', romaji: 'Kyouto wa yuumei na machi desu.', english: 'Kyoto is a famous town.' }
    ]
  },

  // --- N5 ADVERBS & EXPRESSIONS ---
  {
    id: 'w-n5-31',
    word: 'とても',
    reading: 'とても',
    romaji: 'totemo',
    meaning: 'Very / Extremely',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-31-1', sentence: '日本語の勉強はとても楽しいです。', furigana: 'にほんご の べんきょう は とても たのしい です。', romaji: 'Nihongo no benkyou wa totemo tanoshii desu.', english: 'Studying Japanese is very fun.' },
      { id: 'ws-n5-31-2', sentence: '今日はとてもいい天気ですね。', furigana: 'きょう は とても いい てんき です ね。', romaji: 'Kyou wa totemo ii tenki desu ne.', english: 'The weather is very nice today, is it not?' }
    ]
  },
  {
    id: 'w-n5-32',
    word: 'いつも',
    reading: 'いつも',
    romaji: 'itsumo',
    meaning: 'Always / Usually',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-32-1', sentence: '朝はいつもパンを食べます。', furigana: 'あさ は いつも パン を たべます。', romaji: 'Asa wa itsumo pan o tabemasu.', english: 'In the morning I always eat bread.' },
      { id: 'ws-n5-32-2', sentence: '友達はいつも元気です。', furigana: 'ともだち は いつも げんき です。', romaji: 'Tomodachi wa itsumo genki desu.', english: 'My friend is always cheerful.' }
    ]
  },
  {
    id: 'w-n5-33',
    word: 'ありがとう',
    reading: 'ありがとう',
    romaji: 'arigatou',
    meaning: 'Thank you',
    pos: 'expression',
    posLabel: 'Expression',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-33-1', sentence: '手伝ってくれて、ありがとう。', furigana: 'てつだって くれて、ありがとう。', romaji: 'Tetsudatte kurete, arigatou.', english: 'Thank you for helping me.' },
      { id: 'ws-n5-33-2', sentence: '「ありがとうございます。」と先生に言いました。', furigana: '「ありがとう ございます。」 と せんせい に いいました。', romaji: '"Arigatou gozaimasu." to sensei ni iimashita.', english: 'I said "Thank you very much" to the teacher.' }
    ]
  },
  {
    id: 'w-n5-34',
    word: 'すみません',
    reading: 'すみません',
    romaji: 'sumimasen',
    meaning: 'Excuse me / I am sorry',
    pos: 'expression',
    posLabel: 'Expression',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-34-1', sentence: 'すみません、駅はどこですか。', furigana: 'すみません、えき は どこ です か。', romaji: 'Sumimasen, eki wa doko desu ka.', english: 'Excuse me, where is the station?' },
      { id: 'ws-n5-34-2', sentence: '遅れてすみませんでした。', furigana: 'おくれて すみませんでした。', romaji: 'Okurete sumimasendeshita.', english: 'I am sorry for being late.' }
    ]
  },

  // ==========================================
  // === BATCH 1: 100 NEW WORDS (w-n5-35 to w-n5-134) ===
  // ==========================================
  {
    id: 'w-n5-35',
    word: '歩く',
    reading: 'あるく',
    romaji: 'aruku',
    meaning: 'To walk',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"歩","meaning":"Walk"}],
    sentences: [
      { id: 'ws-n5-35-1', sentence: '駅から学校まで歩きます。', furigana: 'えき から がっこう まで あるきます。', romaji: 'Eki kara gakkou made arukimasu.', english: 'I walk from the station to school.' },
      { id: 'ws-n5-35-2', sentence: '天気がいいので公園を歩きました。', furigana: 'てんき が いい ので こうえん を あるきました。', romaji: 'Tenki ga ii node kouen o arukimashita.', english: 'Because the weather was nice, I walked in the park.' }
    ]
  },
  {
    id: 'w-n5-36',
    word: '走る',
    reading: 'はしる',
    romaji: 'hashiru',
    meaning: 'To run',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"走","meaning":"Run"}],
    sentences: [
      { id: 'ws-n5-36-1', sentence: '公園で犬と一緒に走ります。', furigana: 'こうえん で いぬ と いっしょ に はしります。', romaji: 'Kouen de inu to issho ni hashirimasu.', english: 'I run with my dog in the park.' },
      { id: 'ws-n5-36-2', sentence: '急いで駅まで走りました。', furigana: 'いそいで えき まで はしりました。', romaji: 'Isoide eki made hashirimashita.', english: 'I ran to the station in a hurry.' }
    ]
  },
  {
    id: 'w-n5-37',
    word: '泳ぐ',
    reading: 'およぐ',
    romaji: 'oyogu',
    meaning: 'To swim',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"泳","meaning":"Swim"}],
    sentences: [
      { id: 'ws-n5-37-1', sentence: '夏休みに海で泳ぎました。', furigana: 'なつやすみ に うみ で およぎました。', romaji: 'Natsuyasumi ni umi de oyogimashita.', english: 'I swam in the sea during summer vacation.' },
      { id: 'ws-n5-37-2', sentence: '学校のプールで泳ぎます。', furigana: 'がっこう の プール で およぎます。', romaji: 'Gakkou no puuru de oyogimasu.', english: 'I swim in the school pool.' }
    ]
  },
  {
    id: 'w-n5-38',
    word: '座る',
    reading: 'すわる',
    romaji: 'suwaru',
    meaning: 'To sit',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"座","meaning":"Sit / Seat"}],
    sentences: [
      { id: 'ws-n5-38-1', sentence: 'どうぞ、この椅子に座ってください。', furigana: 'どうぞ、この いす に すわって ください。', romaji: 'Douzo, kono isu ni suwatte kudasai.', english: 'Please sit on this chair.' },
      { id: 'ws-n5-38-2', sentence: 'ベンチに座って休みました。', furigana: 'ベンチ に すわって やすみました。', romaji: 'Benchi ni suwatte yasumimashita.', english: 'I sat on the bench and rested.' }
    ]
  },
  {
    id: 'w-n5-39',
    word: '立つ',
    reading: 'たつ',
    romaji: 'tatsu',
    meaning: 'To stand',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"立","meaning":"Stand"}],
    sentences: [
      { id: 'ws-n5-39-1', sentence: '先生が来たので立ちました。', furigana: 'せんせい が きた ので たちました。', romaji: 'Sensei ga kita node tachimashita.', english: 'The teacher came, so I stood up.' },
      { id: 'ws-n5-39-2', sentence: '電車のドアの前に立っています。', furigana: 'でんしゃ の ドア の まえ に たって います。', romaji: 'Densha no doa no mae ni tatte imasu.', english: 'I am standing in front of the train door.' }
    ]
  },
  {
    id: 'w-n5-40',
    word: '入る',
    reading: 'はいる',
    romaji: 'hairu',
    meaning: 'To enter / Go in',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"入","meaning":"Enter"}],
    sentences: [
      { id: 'ws-n5-40-1', sentence: 'どうぞ、部屋に入ってください。', furigana: 'どうぞ、へや に はいって ください。', romaji: 'Douzo, heya ni haitte kudasai.', english: 'Please come into the room.' },
      { id: 'ws-n5-40-2', sentence: '寒いのでカフェに入りましょう。', furigana: 'さむい ので カフェ に はいりましょう。', romaji: 'Samui node kafe ni hairimashou.', english: 'It is cold, so let us go into a cafe.' }
    ]
  },
  {
    id: 'w-n5-41',
    word: '出る',
    reading: 'でる',
    romaji: 'deru',
    meaning: 'To leave / Go out / Exit',
    pos: 'verb',
    posLabel: 'Ichidan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"出","meaning":"Exit / Leave"}],
    sentences: [
      { id: 'ws-n5-41-1', sentence: '毎朝、八時に家を出ます。', furigana: 'まいあさ、はちじ に いえ を でます。', romaji: 'Maiasa, hachiji ni ie o demasu.', english: 'Every morning, I leave home at 8 o\'clock.' },
      { id: 'ws-n5-41-2', sentence: '教室から出てください。', furigana: 'きょうしつ から でて ください。', romaji: 'Kyoushitsu kara dete kudasai.', english: 'Please leave the classroom.' }
    ]
  },
  {
    id: 'w-n5-42',
    word: '開ける',
    reading: 'あける',
    romaji: 'akeru',
    meaning: 'To open (something)',
    pos: 'verb',
    posLabel: 'Ichidan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"開","meaning":"Open"}],
    sentences: [
      { id: 'ws-n5-42-1', sentence: 'ドアを開けてください。', furigana: 'ドア を あけて ください。', romaji: 'Doa o akete kudasai.', english: 'Please open the door.' },
      { id: 'ws-n5-42-2', sentence: '部屋の窓を開けました。', furigana: 'へや の まど を あけました。', romaji: 'Heya no mado o akemashita.', english: 'I opened the window of the room.' }
    ]
  },
  {
    id: 'w-n5-43',
    word: '閉める',
    reading: 'しめる',
    romaji: 'shimeru',
    meaning: 'To close (something)',
    pos: 'verb',
    posLabel: 'Ichidan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"閉","meaning":"Close"}],
    sentences: [
      { id: 'ws-n5-43-1', sentence: '窓を閉めてください。', furigana: 'まど を しめて ください。', romaji: 'Mado o shimete kudasai.', english: 'Please close the window.' },
      { id: 'ws-n5-43-2', sentence: '出かける前にドアを閉めました。', furigana: 'でかける まえ に ドア を しめました。', romaji: 'Dekakeru mae ni doa o shimemashita.', english: 'I closed the door before going out.' }
    ]
  },
  {
    id: 'w-n5-44',
    word: 'つける',
    reading: 'つける',
    romaji: 'tsukeru',
    meaning: 'To turn on / Switch on',
    pos: 'verb',
    posLabel: 'Ichidan Verb',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-44-1', sentence: '電気をつけてください。', furigana: 'でんき を つけて ください。', romaji: 'Denki o tsukete kudasai.', english: 'Please turn on the light.' },
      { id: 'ws-n5-44-2', sentence: '部屋のテレビをつけました。', furigana: 'へや の テレビ を つけました。', romaji: 'Heya no terebi o tsukemashita.', english: 'I turned on the TV in the room.' }
    ]
  },
  {
    id: 'w-n5-45',
    word: '消す',
    reading: 'けす',
    romaji: 'kesu',
    meaning: 'To turn off / Erase',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"消","meaning":"Extinguish"}],
    sentences: [
      { id: 'ws-n5-45-1', sentence: '寝る前に電気を消します。', furigana: 'ねる まえ に でんき を けします。', romaji: 'Neru mae ni denki o keshimasu.', english: 'I turn off the lights before going to sleep.' },
      { id: 'ws-n5-45-2', sentence: '消しゴムで字を消しました。', furigana: 'けしゴム で じ を けしました。', romaji: 'Keshigomu de ji o keshimashita.', english: 'I erased the letters with an eraser.' }
    ]
  },
  {
    id: 'w-n5-46',
    word: '教える',
    reading: 'おしえる',
    romaji: 'oshieru',
    meaning: 'To teach / To tell',
    pos: 'verb',
    posLabel: 'Ichidan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"教","meaning":"Teach"}],
    sentences: [
      { id: 'ws-n5-46-1', sentence: '田中先生が日本語を教えます。', furigana: 'たなかせんせい が にほんご を おしえます。', romaji: 'Tanaka sensei ga nihongo o oshiemasu.', english: 'Teacher Tanaka teaches Japanese.' },
      { id: 'ws-n5-46-2', sentence: 'あなたの電話番号を教えてください。', furigana: 'あなた の でんわばんごう を おしえて ください。', romaji: 'Anata no denwa bangou o oshiete kudasai.', english: 'Please tell me your phone number.' }
    ]
  },
  {
    id: 'w-n5-47',
    word: '習う',
    reading: 'ならう',
    romaji: 'narau',
    meaning: 'To learn',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"習","meaning":"Learn"}],
    sentences: [
      { id: 'ws-n5-47-1', sentence: '学校で日本語を習います。', furigana: 'がっこう で にほんご を ならいます。', romaji: 'Gakkou de nihongo o naraimasu.', english: 'I learn Japanese at school.' },
      { id: 'ws-n5-47-2', sentence: '友達から漢字を習いました。', furigana: 'ともだち から かんじ を ならい ました。', romaji: 'Tomodachi kara kanji o naraimashita.', english: 'I learned kanji from my friend.' }
    ]
  },
  {
    id: 'w-n5-48',
    word: '働く',
    reading: 'はたらく',
    romaji: 'hataraku',
    meaning: 'To work',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"働","meaning":"Work"}],
    sentences: [
      { id: 'ws-n5-48-1', sentence: '父は病院で働いています。', furigana: 'ちち は びょういん で はたらいて います。', romaji: 'Chichi wa byouin de hataraite imasu.', english: 'My father works at a hospital.' },
      { id: 'ws-n5-48-2', sentence: 'どこで働いていますか。', furigana: 'どこ で はたらいて います か。', romaji: 'Doko de hataraite imasu ka.', english: 'Where do you work?' }
    ]
  },
  {
    id: 'w-n5-49',
    word: '休む',
    reading: 'やすむ',
    romaji: 'yasumu',
    meaning: 'To rest / Take a day off',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"休","meaning":"Rest"}],
    sentences: [
      { id: 'ws-n5-49-1', sentence: '今日は学校を休みます。', furigana: 'きょう は がっこう を やすみます。', romaji: 'Kyou wa gakkou o yasumimasu.', english: 'Today I will take a day off from school.' },
      { id: 'ws-n5-49-2', sentence: '少しここで休みましょう。', furigana: 'すこし ここ で やすみましょう。', romaji: 'Sukoshi koko de yasumimashou.', english: 'Let\'s rest here a little.' }
    ]
  },
  {
    id: 'w-n5-50',
    word: '遊ぶ',
    reading: 'あそぶ',
    romaji: 'asobu',
    meaning: 'To play / Hang out',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"遊","meaning":"Play"}],
    sentences: [
      { id: 'ws-n5-50-1', sentence: '公園で子供と遊びます。', furigana: 'こうえん で こども と あそびます。', romaji: 'Kouen de kodomo to asobimasu.', english: 'I play with the children at the park.' },
      { id: 'ws-n5-50-2', sentence: '日曜日に友達と遊びました。', furigana: 'にちようび に ともだち と あそびました。', romaji: 'Nichiyoubi ni tomodachi to asobimashita.', english: 'I hung out with my friend on Sunday.' }
    ]
  },
  {
    id: 'w-n5-51',
    word: '歌う',
    reading: 'うたう',
    romaji: 'utau',
    meaning: 'To sing',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"歌","meaning":"Song"}],
    sentences: [
      { id: 'ws-n5-51-1', sentence: '部屋で日本の歌を歌います。', furigana: 'へや で にほん の うた を うたいます。', romaji: 'Heya de nihon no uta o utaimasu.', english: 'I sing Japanese songs in my room.' },
      { id: 'ws-n5-51-2', sentence: '田中さんは上手に歌いました。', furigana: 'たなかさん は じょうず に うたいました。', romaji: 'Tanaka-san wa jouzu ni utaimashita.', english: 'Mr. Tanaka sang skillfully.' }
    ]
  },
  {
    id: 'w-n5-52',
    word: '浴びる',
    reading: 'あびる',
    romaji: 'abiru',
    meaning: 'To bathe / Take a shower',
    pos: 'verb',
    posLabel: 'Ichidan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"浴","meaning":"Bathe"}],
    sentences: [
      { id: 'ws-n5-52-1', sentence: '毎朝、シャワーを浴びます。', furigana: 'まいあさ、シャワー を あびます。', romaji: 'Maiasa, shawaa o abimasu.', english: 'Every morning, I take a shower.' },
      { id: 'ws-n5-52-2', sentence: '夜にお風呂でシャワーを浴びました。', furigana: 'よる に おふろ で シャワー を あびました。', romaji: 'Yoru ni ofuro de shawaa o abimashita.', english: 'At night, I took a shower in the bathroom.' }
    ]
  },
  {
    id: 'w-n5-53',
    word: '洗う',
    reading: 'あらう',
    romaji: 'arau',
    meaning: 'To wash',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"洗","meaning":"Wash"}],
    sentences: [
      { id: 'ws-n5-53-1', sentence: 'ごはんの前に手を洗います。', furigana: 'ごはん の まえ に て を あらいます。', romaji: 'Gohan no mae ni te o araimasu.', english: 'I wash my hands before meals.' },
      { id: 'ws-n5-53-2', sentence: 'お皿をきれいに洗いました。', furigana: 'おさら を きれい に あらいました。', romaji: 'Osara o kirei ni araimashita.', english: 'I washed the dishes cleanly.' }
    ]
  },
  {
    id: 'w-n5-54',
    word: '作る',
    reading: 'つくる',
    romaji: 'tsukuru',
    meaning: 'To make / Produce',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"作","meaning":"Make"}],
    sentences: [
      { id: 'ws-n5-54-1', sentence: '今日の夜、カレーを作ります。', furigana: 'きょう の よる、カレー を つくります。', romaji: 'Kyou no yoru, karee o tsukurimasu.', english: 'Tonight, I will make curry.' },
      { id: 'ws-n5-54-2', sentence: '母が美味しいケーキを作りました。', furigana: 'はは が おいしい ケーキ を つくりました。', romaji: 'Haha ga oishii keeki o tsukurimashita.', english: 'My mother made a delicious cake.' }
    ]
  },
  {
    id: 'w-n5-55',
    word: '使う',
    reading: 'つかう',
    romaji: 'tsukau',
    meaning: 'To use',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"使","meaning":"Use"}],
    sentences: [
      { id: 'ws-n5-55-1', sentence: 'このペンを使ってもいいですか。', furigana: 'この ペン を つかっても いい です か。', romaji: 'Kono pen o tsukatte mo ii desu ka.', english: 'May I use this pen?' },
      { id: 'ws-n5-55-2', sentence: '授業で辞書を使いました。', furigana: 'じゅぎょう で じしょ を つかいました。', romaji: 'Jugyou de jisho o tsukaimashita.', english: 'I used a dictionary in class.' }
    ]
  },
  {
    id: 'w-n5-56',
    word: '置く',
    reading: 'おく',
    romaji: 'oku',
    meaning: 'To put / Place',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"置","meaning":"Place / Put"}],
    sentences: [
      { id: 'ws-n5-56-1', sentence: '机の上に本を置きます。', furigana: 'つくえ の うえ に ほん を おきます。', romaji: 'Tsukue no ue ni hon o okimasu.', english: 'I put the book on the desk.' },
      { id: 'ws-n5-56-2', sentence: 'ここに荷物を置いてください。', furigana: 'ここ に にもつ を おいて ください。', romaji: 'Koko ni nimotsu o oite kudasai.', english: 'Please put your luggage here.' }
    ]
  },
  {
    id: 'w-n5-57',
    word: '持つ',
    reading: 'もつ',
    romaji: 'motsu',
    meaning: 'To hold / Possess',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"持","meaning":"Hold / Have"}],
    sentences: [
      { id: 'ws-n5-57-1', sentence: '重い荷物を持ちます。', furigana: 'おもい にもつ を もちます。', romaji: 'Omoi nimotsu o mochimasu.', english: 'I will hold the heavy luggage.' },
      { id: 'ws-n5-57-2', sentence: '私は黒い傘を持っています。', furigana: 'わたし は くろい かさ を もって います。', romaji: 'Watashi wa kuroi kasa o motte imasu.', english: 'I have a black umbrella.' }
    ]
  },
  {
    id: 'w-n5-58',
    word: '取る',
    reading: 'とる',
    romaji: 'toru',
    meaning: 'To take / Pick up',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"取","meaning":"Take"}],
    sentences: [
      { id: 'ws-n5-58-1', sentence: 'そこの塩を取ってください。', furigana: 'そこ の しお を とって ください。', romaji: 'Soko no shio o totte kudasai.', english: 'Please pass that salt.' },
      { id: 'ws-n5-58-2', sentence: '旅行で写真をたくさん取りました。', furigana: 'りょこう で しゃしん を たくさん とりました。', romaji: 'Ryokou de shashin o takusan torimashita.', english: 'I took a lot of photos on the trip.' }
    ]
  },
  {
    id: 'w-n5-59',
    word: '売る',
    reading: 'うる',
    romaji: 'uru',
    meaning: 'To sell',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"売","meaning":"Sell"}],
    sentences: [
      { id: 'ws-n5-59-1', sentence: 'あの店で果物を売っています。', furigana: 'あの みせ で くだもの を うって います。', romaji: 'Ano mise de kudamono o utte imasu.', english: 'That store sells fruits.' },
      { id: 'ws-n5-59-2', sentence: '古い車を売りました。', furigana: 'ふるい くるま を うりました。', romaji: 'Furui kuruma o urimashita.', english: 'I sold my old car.' }
    ]
  },
  {
    id: 'w-n5-60',
    word: '払う',
    reading: 'はらう',
    romaji: 'harau',
    meaning: 'To pay',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"払","meaning":"Pay"}],
    sentences: [
      { id: 'ws-n5-60-1', sentence: 'レジでお金を払います。', furigana: 'レジ で おかね を はらいます。', romaji: 'Reji de okane o haraimasu.', english: 'I will pay money at the cash register.' },
      { id: 'ws-n5-60-2', sentence: 'カードでお金を払いました。', furigana: 'カード で おかね を はらい ました。', romaji: 'Kaado de okane o haraimashita.', english: 'I paid money with a card.' }
    ]
  },
  {
    id: 'w-n5-61',
    word: '頼む',
    reading: 'たのむ',
    romaji: 'tanomu',
    meaning: 'To ask / Order / Request',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"頼","meaning":"Rely / Request"}],
    sentences: [
      { id: 'ws-n5-61-1', sentence: 'レストランで水を頼みました。', furigana: 'レストラン で みず を たのみました。', romaji: 'Resutoran de mizu o tanomimashita.', english: 'I ordered water at the restaurant.' },
      { id: 'ws-n5-61-2', sentence: '友達に買い物を頼みます。', furigana: 'ともだち に かいもの を たのみます。', romaji: 'Tomodachi ni kaimono o tanomimasu.', english: 'I ask a friend to do some shopping for me.' }
    ]
  },
  {
    id: 'w-n5-62',
    word: '呼ぶ',
    reading: 'よぶ',
    romaji: 'yobu',
    meaning: 'To call / Invite',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"呼","meaning":"Call"}],
    sentences: [
      { id: 'ws-n5-62-1', sentence: '駅の前でタクシーを呼びます。', furigana: 'えき の まえ で タクシー を よびます。', romaji: 'Eki no mae de takushii o yobimasu.', english: 'I call a taxi in front of the station.' },
      { id: 'ws-n5-62-2', sentence: '友達を家に呼びました。', furigana: 'ともだち を いえ に よびました。', romaji: 'Tomodachi o ie ni yobimashita.', english: 'I invited my friend to my house.' }
    ]
  },
  {
    id: 'w-n5-63',
    word: '泣く',
    reading: 'なく',
    romaji: 'naku',
    meaning: 'To cry',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"泣","meaning":"Cry"}],
    sentences: [
      { id: 'ws-n5-63-1', sentence: '赤ちゃんがベッドで泣いています。', furigana: 'あかちゃん が ベッド で ないて います。', romaji: 'Akachan ga beddo de naite imasu.', english: 'The baby is crying in bed.' },
      { id: 'ws-n5-63-2', sentence: '悲しい映画を見て泣きました。', furigana: 'かなしい えいが を みて なきました。', romaji: 'Kanashii eiga o mite nakimashita.', english: 'I cried watching a sad movie.' }
    ]
  },
  {
    id: 'w-n5-64',
    word: '笑う',
    reading: 'わらう',
    romaji: 'warau',
    meaning: 'To laugh / Smile',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"笑","meaning":"Laugh / Smile"}],
    sentences: [
      { id: 'ws-n5-64-1', sentence: '田中さんはいつも明るく笑います。', furigana: 'たなかさん は いつも あかるく わらいます。', romaji: 'Tanaka-san wa itsumo akaruku waraimasu.', english: 'Mr. Tanaka always smiles cheerfully.' },
      { id: 'ws-n5-64-2', sentence: '面白い話を聞いて笑いました。', furigana: 'おもしろい はなし を きいて わらい ました。', romaji: 'Omoshiroi hanashi o kiite waraimashita.', english: 'I laughed when I heard a funny story.' }
    ]
  },
  {
    id: 'w-n5-65',
    word: '困る',
    reading: 'こまる',
    romaji: 'komaru',
    meaning: 'To be troubled / In trouble',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"困","meaning":"Quandary"}],
    sentences: [
      { id: 'ws-n5-65-1', sentence: '道が分からなくて困りました。', furigana: 'みち が わからなくて こまりました。', romaji: 'Michi ga wakaranakute komarimashita.', english: 'I was in trouble because I didn\'t know the way.' },
      { id: 'ws-n5-65-2', sentence: 'お金がなくて困っています。', furigana: 'おかね が なくて こまって います。', romaji: 'Okane ga nakute komatte imasu.', english: 'I am in trouble because I have no money.' }
    ]
  },
  {
    id: 'w-n5-66',
    word: '疲れる',
    reading: 'つかれる',
    romaji: 'tsukareru',
    meaning: 'To get tired',
    pos: 'verb',
    posLabel: 'Ichidan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"疲","meaning":"Exhausted"}],
    sentences: [
      { id: 'ws-n5-66-1', sentence: 'たくさん歩いて疲れました。', furigana: 'たくさん あるいて つかれました。', romaji: 'Takusan aruite tsukaremashita.', english: 'I walked a lot and got tired.' },
      { id: 'ws-n5-66-2', sentence: '仕事で少し疲れています。', furigana: 'しごと で すこし つかれて います。', romaji: 'Shigoto de sukoshi tsukarete imasu.', english: 'I am a little tired from work.' }
    ]
  },
  {
    id: 'w-n5-67',
    word: '住む',
    reading: 'すむ',
    romaji: 'sumu',
    meaning: 'To live / Reside',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"住","meaning":"Dwell"}],
    sentences: [
      { id: 'ws-n5-67-1', sentence: '私は東京に住んでいます。', furigana: 'わたし は とうきょう に すんで います。', romaji: 'Watashi wa Toukyou ni sunde imasu.', english: 'I live in Tokyo.' },
      { id: 'ws-n5-67-2', sentence: 'あなたはどこに住んでいますか。', furigana: 'あなた は どこ に すんで います か。', romaji: 'Anata wa doko ni sunde imasu ka.', english: 'Where do you live?' }
    ]
  },
  {
    id: 'w-n5-68',
    word: '知る',
    reading: 'しる',
    romaji: 'shiru',
    meaning: 'To know',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"知","meaning":"Know"}],
    sentences: [
      { id: 'ws-n5-68-1', sentence: 'あの人の名前を知っていますか。', furigana: 'あの ひと の なまえ を しって います か。', romaji: 'Ano hito no namae o shitte imasu ka.', english: 'Do you know that person\'s name?' },
      { id: 'ws-n5-68-2', sentence: 'はい、その歌を知っています。', furigana: 'はい、その うた を しって います。', romaji: 'Hai, sono uta o shitte imasu.', english: 'Yes, I know that song.' }
    ]
  },
  {
    id: 'w-n5-69',
    word: '分かる',
    reading: 'わかる',
    romaji: 'wakaru',
    meaning: 'To understand',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"分","meaning":"Part / Understand"}],
    sentences: [
      { id: 'ws-n5-69-1', sentence: '日本語がよく分かります。', furigana: 'にほんご が よく わかります。', romaji: 'Nihongo ga yoku wakarimasu.', english: 'I understand Japanese well.' },
      { id: 'ws-n5-69-2', sentence: 'この質問の意味が分かりました。', furigana: 'この しつもん の いみ が わかりました。', romaji: 'Kono shitsumon no imi ga wakarimashita.', english: 'I understood the meaning of this question.' }
    ]
  },
  {
    id: 'w-n5-70',
    word: '乗る',
    reading: 'のる',
    romaji: 'noru',
    meaning: 'To ride / Get on',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"乗","meaning":"Ride"}],
    sentences: [
      { id: 'ws-n5-70-1', sentence: '駅で電車に乗ります。', furigana: 'えき で でんしゃ に のります。', romaji: 'Eki de densha ni norimasu.', english: 'I get on the train at the station.' },
      { id: 'ws-n5-70-2', sentence: '毎朝、バスに乗って学校へ行きます。', furigana: 'まいあさ、バス に のって がっこう へ いきます。', romaji: 'Maiasa, basu ni notte gakkou e ikimasu.', english: 'Every morning, I ride the bus to school.' }
    ]
  },
  {
    id: 'w-n5-71',
    word: '降りる',
    reading: 'おりる',
    romaji: 'oriru',
    meaning: 'To get off / Descend',
    pos: 'verb',
    posLabel: 'Ichidan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"降","meaning":"Descend / Fall"}],
    sentences: [
      { id: 'ws-n5-71-1', sentence: '次の駅で電車を降ります。', furigana: 'つぎ の えき で でんしゃ を おります。', romaji: 'Tsugi no eki de densha o orimasu.', english: 'I get off the train at the next station.' },
      { id: 'ws-n5-71-2', sentence: 'ここでバスを降りてください。', furigana: 'ここ で バス を おりて ください。', romaji: 'Koko de basu o orite kudasai.', english: 'Please get off the bus here.' }
    ]
  },
  {
    id: 'w-n5-72',
    word: '渡る',
    reading: 'わたる',
    romaji: 'wataru',
    meaning: 'To cross over',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"渡","meaning":"Transit / Ferry"}],
    sentences: [
      { id: 'ws-n5-72-1', sentence: '青信号で道を渡ります。', furigana: 'あおしんごう で みち を わたり ます。', romaji: 'Aoshingou de michi o watarimasu.', english: 'I cross the street at the green light.' },
      { id: 'ws-n5-72-2', sentence: '気をつけて橋を渡ってください。', furigana: 'き を つけて はし を わたって ください。', romaji: 'Ki o tsukete hashi o watatte kudasai.', english: 'Please cross the bridge carefully.' }
    ]
  },
  {
    id: 'w-n5-73',
    word: '曲がる',
    reading: 'まがる',
    romaji: 'magaru',
    meaning: 'To turn / Bend',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"曲","meaning":"Bend / Music"}],
    sentences: [
      { id: 'ws-n5-73-1', sentence: '次の角を右へ曲がってください。', furigana: 'つぎ の かど を みぎ へ まがって ください。', romaji: 'Tsugi no kado o migi e magatte kudasai.', english: 'Please turn right at the next corner.' },
      { id: 'ws-n5-73-2', sentence: '交差点を左に曲がりました。', furigana: 'こうさてん を ひだり に まがりました。', romaji: 'Kousaten o hidari ni magarimashita.', english: 'I turned left at the intersection.' }
    ]
  },
  {
    id: 'w-n5-74',
    word: '止まる',
    reading: 'とまる',
    romaji: 'tomaru',
    meaning: 'To stop / Halt',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"止","meaning":"Stop"}],
    sentences: [
      { id: 'ws-n5-74-1', sentence: '赤信号で車が止まりました。', furigana: 'あかしんごう で くるま が とまりました。', romaji: 'Akashingou de kuruma ga tomarimashita.', english: 'The car stopped at the red light.' },
      { id: 'ws-n5-74-2', sentence: 'ここで車を止めてください。', furigana: 'ここ で くるま を とめて ください。', romaji: 'Koko de kuruma o tomete kudasai.', english: 'Please stop the car here.' }
    ]
  },
  {
    id: 'w-n5-75',
    word: '始まる',
    reading: 'はじまる',
    romaji: 'hajimaru',
    meaning: 'To begin / Start',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"始","meaning":"Begin"}],
    sentences: [
      { id: 'ws-n5-75-1', sentence: '朝九時に授業が始まります。', furigana: 'あさ くじ に じゅぎょう が はじまります。', romaji: 'Asa kuji ni jugyou ga hajimarimasu.', english: 'The class begins at 9:00 AM.' },
      { id: 'ws-n5-75-2', sentence: 'もう映画が始まりました。', furigana: 'もう えいが が はじまりました。', romaji: 'Mou eiga ga hajimarimashita.', english: 'The movie has already started.' }
    ]
  },
  {
    id: 'w-n5-76',
    word: '終わる',
    reading: 'おわる',
    romaji: 'owaru',
    meaning: 'To end / Finish',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"終","meaning":"End"}],
    sentences: [
      { id: 'ws-n5-76-1', sentence: '午後五時に仕事が終わります。', furigana: 'ごご ごじ に しごと が おわります。', romaji: 'Gogo goji ni shigoto ga owarimasu.', english: 'Work ends at 5:00 PM.' },
      { id: 'ws-n5-76-2', sentence: '今日のテストが全部終わりました。', furigana: 'きょう の テスト が ぜんぶ おわりました。', romaji: 'Kyou no tesuto ga zenbu owarimashita.', english: 'Today\'s tests have all finished.' }
    ]
  },
  {
    id: 'w-n5-77',
    word: '届く',
    reading: 'とどく',
    romaji: 'todoku',
    meaning: 'To reach / Be delivered',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"届","meaning":"Deliver"}],
    sentences: [
      { id: 'ws-n5-77-1', sentence: '今日、荷物が届きました。', furigana: 'きょう、にもつ が とどきました。', romaji: 'Kyou, nimotsu ga todokimashita.', english: 'Today, a package arrived.' },
      { id: 'ws-n5-77-2', sentence: '友達から手紙が届きました。', furigana: 'ともだち から てがみ が とどきました。', romaji: 'Tomodachi kara tegami ga todokimashita.', english: 'A letter arrived from my friend.' }
    ]
  },
  {
    id: 'w-n5-78',
    word: '押す',
    reading: 'おす',
    romaji: 'osu',
    meaning: 'To push / Press',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"押","meaning":"Push"}],
    sentences: [
      { id: 'ws-n5-78-1', sentence: 'このボタンを押してください。', furigana: 'この ボタン を おして ください。', romaji: 'Kono botan o oshite kudasai.', english: 'Please push this button.' },
      { id: 'ws-n5-78-2', sentence: 'ドアを押して部屋に入りました。', furigana: 'ドア を おして へや に はいりました。', romaji: 'Doa o oshite heya ni hairimashita.', english: 'I pushed the door and entered the room.' }
    ]
  },
  {
    id: 'w-n5-79',
    word: '引く',
    reading: 'ひく',
    romaji: 'hiku',
    meaning: 'To pull / Catch (a cold)',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"引","meaning":"Pull"}],
    sentences: [
      { id: 'ws-n5-79-1', sentence: 'ドアを引いて開けてください。', furigana: 'ドア を ひいて あけて ください。', romaji: 'Doa o hiite akete kudasai.', english: 'Please pull the door to open it.' },
      { id: 'ws-n5-79-2', sentence: '寒いので風邪を引きました。', furigana: 'さむい ので かぜ を ひきました。', romaji: 'Samui node kaze o hikimashita.', english: 'Because it was cold, I caught a cold.' }
    ]
  },
  {
    id: 'w-n5-80',
    word: '出す',
    reading: 'だす',
    romaji: 'dasu',
    meaning: 'To take out / Hand in',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"出","meaning":"Exit / Produce"}],
    sentences: [
      { id: 'ws-n5-80-1', sentence: 'カバンからノートを出します。', furigana: 'カバン から ノート を だします。', romaji: 'Kaban kara nooto o dashimasu.', english: 'I take a notebook out of the bag.' },
      { id: 'ws-n5-80-2', sentence: '先生に宿題を出しました。', furigana: 'せんせい に しゅくだい を だしました。', romaji: 'Sensei ni shukudai o dashimashita.', english: 'I handed in my homework to the teacher.' }
    ]
  },
  {
    id: 'w-n5-81',
    word: '入れる',
    reading: 'いれる',
    romaji: 'ireru',
    meaning: 'To put in / Insert',
    pos: 'verb',
    posLabel: 'Ichidan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"入","meaning":"Enter / Insert"}],
    sentences: [
      { id: 'ws-n5-81-1', sentence: 'お茶に砂糖を入れます。', furigana: 'おちゃ に さとう を いれます。', romaji: 'Ocha ni satou o iremasu.', english: 'I put sugar into the tea.' },
      { id: 'ws-n5-81-2', sentence: '財布にお金を入れました。', furigana: 'さいふ に おかね を いれました。', romaji: 'Saifu ni okane o iremashita.', english: 'I put money into my wallet.' }
    ]
  },
  {
    id: 'w-n5-82',
    word: '咲く',
    reading: 'さく',
    romaji: 'saku',
    meaning: 'To bloom',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"咲","meaning":"Bloom"}],
    sentences: [
      { id: 'ws-n5-82-1', sentence: '春にきれいな桜が咲きます。', furigana: 'はる に きれい な さくら が さきます。', romaji: 'Haru ni kirei na sakura ga sakimasu.', english: 'Pretty cherry blossoms bloom in spring.' },
      { id: 'ws-n5-82-2', sentence: '庭に赤い花が咲きました。', furigana: 'にわ に あかい はな が さきました。', romaji: 'Niwa ni akai hana ga sakimashita.', english: 'Red flowers bloomed in the garden.' }
    ]
  },
  {
    id: 'w-n5-83',
    word: '晴れる',
    reading: 'はれる',
    romaji: 'hareru',
    meaning: 'To clear up / Be sunny',
    pos: 'verb',
    posLabel: 'Ichidan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"晴","meaning":"Clear up"}],
    sentences: [
      { id: 'ws-n5-83-1', sentence: '今日は天気が良くて晴れました。', furigana: 'きょう は てんき が よくて はれました。', romaji: 'Kyou wa tenki ga yokute haremashita.', english: 'The weather is good and it cleared up today.' },
      { id: 'ws-n5-83-2', sentence: '明日はきっと晴れます。', furigana: 'あした は きっと はれます。', romaji: 'Ashita wa kitto haremasu.', english: 'Tomorrow it will surely be sunny.' }
    ]
  },
  {
    id: 'w-n5-84',
    word: '曇る',
    reading: 'くもる',
    romaji: 'kumoru',
    meaning: 'To become cloudy',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"曇","meaning":"Cloudy"}],
    sentences: [
      { id: 'ws-n5-84-1', sentence: '午後から空が曇りました。', furigana: 'ごご から そら が くもり ました。', romaji: 'Gogo kara sora ga kumorimashita.', english: 'The sky became cloudy in the afternoon.' },
      { id: 'ws-n5-84-2', sentence: '今日は一日中曇っています。', furigana: 'きょう は いちにちじゅう くもって います。', romaji: 'Kyou wa ichinichijuu kumotte imasu.', english: 'It is cloudy all day today.' }
    ]
  },
  {
    id: 'w-n5-85',
    word: '吹く',
    reading: 'ふく',
    romaji: 'fuku',
    meaning: 'To blow (wind)',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"吹","meaning":"Blow"}],
    sentences: [
      { id: 'ws-n5-85-1', sentence: '今日は冷たい風が吹きます。', furigana: 'きょう は つめたい かぜ が ふきます。', romaji: 'Kyou wa tsumetai kaze ga fukimasu.', english: 'A cold wind blows today.' },
      { id: 'ws-n5-85-2', sentence: '外で強い風が吹きました。', furigana: 'そと で つよい かぜ が ふきました。', romaji: 'Soto de tsuyoi kaze ga fukimashita.', english: 'A strong wind blew outside.' }
    ]
  },
  {
    id: 'w-n5-86',
    word: '降る',
    reading: 'ふる',
    romaji: 'furu',
    meaning: 'To fall (rain/snow)',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"降","meaning":"Fall / Descend"}],
    sentences: [
      { id: 'ws-n5-86-1', sentence: '外で雨がたくさん降っています。', furigana: 'そと で あめ が たくさん ふって います。', romaji: 'Soto de ame ga takusan futte imasu.', english: 'A lot of rain is falling outside.' },
      { id: 'ws-n5-86-2', sentence: '昨日、白い雪が降りました。', furigana: 'きのう、しろい ゆき が ふりました。', romaji: 'Kinou, shiroi yuki ga furimashita.', english: 'Yesterday, white snow fell.' }
    ]
  },
  {
    id: 'w-n5-87',
    word: '鳴く',
    reading: 'なく',
    romaji: 'naku',
    meaning: 'To bark / Meow / Chirp (animals)',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"鳴","meaning":"Chirp / Cry"}],
    sentences: [
      { id: 'ws-n5-87-1', sentence: '庭で犬が元気に鳴いています。', furigana: 'にわ で いぬ が げんき に ないて います。', romaji: 'Niwa de inu ga genki ni naite imasu.', english: 'The dog is barking energetically in the yard.' },
      { id: 'ws-n5-87-2', sentence: 'かわいい猫がニャーと鳴きました。', furigana: 'かわいい ねこ が ニャー と なきました。', romaji: 'Kawaii neko ga nyaa to nakimashita.', english: 'The cute cat meowed.' }
    ]
  },
  {
    id: 'w-n5-88',
    word: '磨く',
    reading: 'みがく',
    romaji: 'migaku',
    meaning: 'To brush / Polish',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"磨","meaning":"Polish / Grind"}],
    sentences: [
      { id: 'ws-n5-88-1', sentence: '毎朝、歯をきれいに磨きます。', furigana: 'まいあさ、は を きれい に みがきます。', romaji: 'Maiasa, ha o kirei ni migakimasu.', english: 'Every morning, I brush my teeth cleanly.' },
      { id: 'ws-n5-88-2', sentence: '出かける前に靴を磨きました。', furigana: 'でかける まえ に くつ を みがき ました。', romaji: 'Dekakeru mae ni kutsu o migakimashita.', english: 'I polished my shoes before going out.' }
    ]
  },
  {
    id: 'w-n5-89',
    word: '履く',
    reading: 'はく',
    romaji: 'haku',
    meaning: 'To put on / Wear (shoes/pants)',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"履","meaning":"Footwear / Put on"}],
    sentences: [
      { id: 'ws-n5-89-1', sentence: '新しい靴を履きます。', furigana: 'あたらしい くつ を はきます。', romaji: 'Atarashii kutsu o hakimasu.', english: 'I put on new shoes.' },
      { id: 'ws-n5-89-2', sentence: '黒いズボンを履きました。', furigana: 'くろい ズボン を はきました。', romaji: 'Kuroi zubon o hakimashita.', english: 'I wore black pants.' }
    ]
  },
  {
    id: 'w-n5-90',
    word: '着る',
    reading: 'きる',
    romaji: 'kiru',
    meaning: 'To wear / Put on (upper body)',
    pos: 'verb',
    posLabel: 'Ichidan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"着","meaning":"Don / Wear"}],
    sentences: [
      { id: 'ws-n5-90-1', sentence: '寒いのでセーターを着ます。', furigana: 'さむい ので セーター を きます。', romaji: 'Samui node seetaa o kimasu.', english: 'Because it is cold, I wear a sweater.' },
      { id: 'ws-n5-90-2', sentence: '白いシャツを着ました。', furigana: 'しろい シャツ を きました。', romaji: 'Shiroi shatsu o kimashita.', english: 'I wore a white shirt.' }
    ]
  },
  {
    id: 'w-n5-91',
    word: '脱ぐ',
    reading: 'ぬぐ',
    romaji: 'nugu',
    meaning: 'To take off (clothes/shoes)',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"脱","meaning":"Undress / Doff"}],
    sentences: [
      { id: 'ws-n5-91-1', sentence: '部屋で靴を脱いでください。', furigana: 'へや で くつ を ぬいで ください。', romaji: 'Heya de kutsu o nuide kudasai.', english: 'Please take off your shoes in the room.' },
      { id: 'ws-n5-91-2', sentence: '家に入ってコートを脱ぎました。', furigana: 'いえ に はいって コート を ぬぎました。', romaji: 'Ie ni haitte kooto o nugimashita.', english: 'I entered the house and took off my coat.' }
    ]
  },
  {
    id: 'w-n5-92',
    word: '被る',
    reading: 'かぶる',
    romaji: 'kaburu',
    meaning: 'To wear / Put on (hat)',
    pos: 'verb',
    posLabel: 'Godan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"被","meaning":"Cover / Wear"}],
    sentences: [
      { id: 'ws-n5-92-1', sentence: '帽子を被って出かけます。', furigana: 'ぼうし を かぶって でかけます。', romaji: 'Boushi o kabutte dekakemasu.', english: 'I put on a hat and go out.' },
      { id: 'ws-n5-92-2', sentence: '田中さんは赤い帽子を被りました。', furigana: 'たなかさん は あかい ぼうし を かぶりました。', romaji: 'Tanaka-san wa akai boushi o kaburimashita.', english: 'Mr. Tanaka put on a red hat.' }
    ]
  },
  {
    id: 'w-n5-93',
    word: 'かける',
    reading: 'かける',
    romaji: 'kakeru',
    meaning: 'To wear (glasses) / Make (a call)',
    pos: 'verb',
    posLabel: 'Ichidan Verb',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-93-1', sentence: '本を読むとき、眼鏡をかけます。', furigana: 'ほん を よむ とき、めがね を かけます。', romaji: 'Hon o yomu toki, megane o kakemasu.', english: 'When reading books, I put on glasses.' },
      { id: 'ws-n5-93-2', sentence: '昨日の夜、母に電話をかけました。', furigana: 'きのう の よる、はは に でんわ を かけました。', romaji: 'Kinou no yoru, haha ni denwa o kakemashita.', english: 'Last night, I made a phone call to my mother.' }
    ]
  },
  {
    id: 'w-n5-94',
    word: '答える',
    reading: 'こたえる',
    romaji: 'kotaeru',
    meaning: 'To answer / Reply',
    pos: 'verb',
    posLabel: 'Ichidan Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"答","meaning":"Answer"}],
    sentences: [
      { id: 'ws-n5-94-1', sentence: '先生の質問に答えてください。', furigana: 'せんせい の しつもん に こたえて ください。', romaji: 'Sensei no shitsumon ni kotaete kudasai.', english: 'Please answer the teacher\'s question.' },
      { id: 'ws-n5-94-2', sentence: '日本語で大きな声で答えました。', furigana: 'にほんご で おおきな こえ で こたえました。', romaji: 'Nihongo de ookina koe de kotaemashita.', english: 'I answered in a loud voice in Japanese.' }
    ]
  },
  {
    id: 'w-n5-95',
    word: '人',
    reading: 'ひと',
    romaji: 'hito',
    meaning: 'Person / People',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"人","meaning":"Person"}],
    sentences: [
      { id: 'ws-n5-95-1', sentence: 'あの人は田中さんです。', furigana: 'あの ひと は たなかさん です。', romaji: 'Ano hito wa Tanaka-san desu.', english: 'That person is Mr. Tanaka.' },
      { id: 'ws-n5-95-2', sentence: '公園にたくさんの人がいます。', furigana: 'こうえん に たくさん の ひと が います。', romaji: 'Kouen ni takusan no hito ga imasu.', english: 'There are many people in the park.' }
    ]
  },
  {
    id: 'w-n5-96',
    word: '男',
    reading: 'おとこ',
    romaji: 'otoko',
    meaning: 'Man / Male',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"男","meaning":"Male"}],
    sentences: [
      { id: 'ws-n5-96-1', sentence: 'あの男の人は英語の先生です。', furigana: 'あの おとこ の ひと は えいご の せんせい です。', romaji: 'Ano otoko no hito wa eigo no sensei desu.', english: 'That man is an English teacher.' },
      { id: 'ws-n5-96-2', sentence: '車に男の人が乗っています。', furigana: 'くるま に おとこ の ひと が のって います。', romaji: 'Kuruma ni otoko no hito ga notte imasu.', english: 'A man is in the car.' }
    ]
  },
  {
    id: 'w-n5-97',
    word: '女',
    reading: 'おんな',
    romaji: 'onna',
    meaning: 'Woman / Female',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"女","meaning":"Female"}],
    sentences: [
      { id: 'ws-n5-97-1', sentence: 'あの女の人は誰ですか。', furigana: 'あの おんな の ひと は だれ です か。', romaji: 'Ano onna no hito wa dare desu ka.', english: 'Who is that woman?' },
      { id: 'ws-n5-97-2', sentence: '親切な女の人が道を教えてくれました。', furigana: 'しんせつ な おんな の ひと が みち を おしえて くれました。', romaji: 'Shinsetsu na onna no hito ga michi o oshiete kuremashita.', english: 'A kind woman told me the way.' }
    ]
  },
  {
    id: 'w-n5-98',
    word: '男の子',
    reading: 'おとこのこ',
    romaji: 'otokonoko',
    meaning: 'Boy',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"男","meaning":"Male"},{"char":"子","meaning":"Child"}],
    sentences: [
      { id: 'ws-n5-98-1', sentence: '男の子が公園で走っています。', furigana: 'おとこのこ が こうえん で はしって います。', romaji: 'Otokonoko ga kouen de hashitte imasu.', english: 'A boy is running in the park.' },
      { id: 'ws-n5-98-2', sentence: 'あの男の子は小学生です。', furigana: 'あの おとこのこ は しょうがくせい です。', romaji: 'Ano otokonoko wa shougakusei desu.', english: 'That boy is an elementary school student.' }
    ]
  },
  {
    id: 'w-n5-99',
    word: '女の子',
    reading: 'おんなのこ',
    romaji: 'onnanoko',
    meaning: 'Girl',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"女","meaning":"Female"},{"char":"子","meaning":"Child"}],
    sentences: [
      { id: 'ws-n5-99-1', sentence: '女の子がきれいな歌を歌っています。', furigana: 'おんなのこ が きれい な うた を うたって います。', romaji: 'Onnanoko ga kirei na uta o utatte imasu.', english: 'A girl is singing a lovely song.' },
      { id: 'ws-n5-99-2', sentence: 'あの女の子はとても元気です。', furigana: 'あの おんなのこ は とても げんき です。', romaji: 'Ano onnanoko wa totemo genki desu.', english: 'That girl is very cheerful.' }
    ]
  },
  {
    id: 'w-n5-100',
    word: '家族',
    reading: 'かぞく',
    romaji: 'kazoku',
    meaning: 'Family',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"家","meaning":"House"},{"char":"族","meaning":"Tribe / Family"}],
    sentences: [
      { id: 'ws-n5-100-1', sentence: '私の家族は四人です。', furigana: 'わたし の かぞく は よにん です。', romaji: 'Watashi no kazoku wa yonin desu.', english: 'My family has four members.' },
      { id: 'ws-n5-100-2', sentence: '毎晩、家族と一緒にご飯を食べます。', furigana: 'まいばん、かぞく と いっしょ に ごはん を たべます。', romaji: 'Maiban, kazoku to issho ni gohan o tabemasu.', english: 'Every evening, I eat dinner together with my family.' }
    ]
  },
  {
    id: 'w-n5-101',
    word: '父',
    reading: 'ちち',
    romaji: 'chichi',
    meaning: 'My father',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"父","meaning":"Father"}],
    sentences: [
      { id: 'ws-n5-101-1', sentence: '私の父は会社員です。', furigana: 'わたし の ちち は かいしゃいん です。', romaji: 'Watashi no chichi wa kaishain desu.', english: 'My father is a company employee.' },
      { id: 'ws-n5-101-2', sentence: '父は毎朝コーヒーを飲みます。', furigana: 'ちち は まいあさ コーヒー を のみます。', romaji: 'Chichi wa maiasa koohii o nomimasu.', english: 'My father drinks coffee every morning.' }
    ]
  },
  {
    id: 'w-n5-102',
    word: '母',
    reading: 'はは',
    romaji: 'haha',
    meaning: 'My mother',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"母","meaning":"Mother"}],
    sentences: [
      { id: 'ws-n5-102-1', sentence: '母の料理はとても美味しいです。', furigana: 'はは の りょうり は とても おいしい です。', romaji: 'Haha no ryouri wa totemo oishii desu.', english: 'My mother\'s cooking is very delicious.' },
      { id: 'ws-n5-102-2', sentence: '母にきれいな花をあげました。', furigana: 'はは に きれい な はな を あげました。', romaji: 'Haha ni kirei na hana o agemashita.', english: 'I gave pretty flowers to my mother.' }
    ]
  },
  {
    id: 'w-n5-103',
    word: 'お父さん',
    reading: 'おとうさん',
    romaji: 'otousan',
    meaning: 'Father (polite / someone else\'s)',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"父","meaning":"Father"}],
    sentences: [
      { id: 'ws-n5-103-1', sentence: '田中さんのお父さんは先生です。', furigana: 'たなかさん の おとうさん は せんせい です。', romaji: 'Tanaka-san no otousan wa sensei desu.', english: 'Mr. Tanaka\'s father is a teacher.' },
      { id: 'ws-n5-103-2', sentence: 'お父さん、おはようございます。', furigana: 'おとうさん、おはよう ございます。', romaji: 'Otousan, ohayou gozaimasu.', english: 'Good morning, Father.' }
    ]
  },
  {
    id: 'w-n5-104',
    word: 'お母さん',
    reading: 'おかあさん',
    romaji: 'okaasan',
    meaning: 'Mother (polite / someone else\'s)',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"母","meaning":"Mother"}],
    sentences: [
      { id: 'ws-n5-104-1', sentence: 'あなたのお母さんはお元気ですか。', furigana: 'あなた の おかあさん は おげんき です か。', romaji: 'Anata no okaasan wa ogenki desu ka.', english: 'Is your mother doing well?' },
      { id: 'ws-n5-104-2', sentence: 'お母さん、ありがとうございます。', furigana: 'おかあさん、ありがとう ございます。', romaji: 'Okaasan, arigatou gozaimasu.', english: 'Thank you, Mother.' }
    ]
  },
  {
    id: 'w-n5-105',
    word: '兄',
    reading: 'あに',
    romaji: 'ani',
    meaning: 'My older brother',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"兄","meaning":"Older brother"}],
    sentences: [
      { id: 'ws-n5-105-1', sentence: '私の兄は大学生です。', furigana: 'わたし の あに は だいがくせい です。', romaji: 'Watashi no ani wa daigakusei desu.', english: 'My older brother is a university student.' },
      { id: 'ws-n5-105-2', sentence: '兄と一緒にテニスをしました。', furigana: 'あに と いっしょ に テニス を しました。', romaji: 'Ani to issho ni tenisu o shimashita.', english: 'I played tennis with my older brother.' }
    ]
  },
  {
    id: 'w-n5-106',
    word: '姉',
    reading: 'あね',
    romaji: 'ane',
    meaning: 'My older sister',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"姉","meaning":"Older sister"}],
    sentences: [
      { id: 'ws-n5-106-1', sentence: '私の姉は銀行で働いています。', furigana: 'わたし の あね は ぎんこう で はたらいて います。', romaji: 'Watashi no ane wa ginkou de hataraite imasu.', english: 'My older sister works at a bank.' },
      { id: 'ws-n5-106-2', sentence: '姉から面白い本をもらいました。', furigana: 'あね から おもしろい ほん を もらいました。', romaji: 'Ane kara omoshiroi hon o moraimashita.', english: 'I received an interesting book from my older sister.' }
    ]
  },
  {
    id: 'w-n5-107',
    word: '弟',
    reading: 'おとうと',
    romaji: 'otouto',
    meaning: 'Younger brother',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"弟","meaning":"Younger brother"}],
    sentences: [
      { id: 'ws-n5-107-1', sentence: '私の弟は中学生です。', furigana: 'わたし の おとうと は ちゅうがくせい です。', romaji: 'Watashi no otouto wa chuugakusei desu.', english: 'My younger brother is a junior high school student.' },
      { id: 'ws-n5-107-2', sentence: '日曜日、弟とゲームをしました。', furigana: 'にちようび、おとうと と ゲーム を しました。', romaji: 'Nichiyoubi, otouto to geemu o shimashita.', english: 'On Sunday, I played a game with my younger brother.' }
    ]
  },
  {
    id: 'w-n5-108',
    word: '妹',
    reading: 'いもうと',
    romaji: 'imouto',
    meaning: 'Younger sister',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"妹","meaning":"Younger sister"}],
    sentences: [
      { id: 'ws-n5-108-1', sentence: '私の妹はピアノを習っています。', furigana: 'わたし の いもうと は ピアノ を ならって います。', romaji: 'Watashi no imouto wa piano o naratte imasu.', english: 'My younger sister is learning piano.' },
      { id: 'ws-n5-108-2', sentence: '妹と一緒に買い物に行きました。', furigana: 'いもうと と いっしょ に かいもの に いきました。', romaji: 'Imouto to issho ni kaimono ni ikimashita.', english: 'I went shopping together with my younger sister.' }
    ]
  },
  {
    id: 'w-n5-109',
    word: '子供',
    reading: 'こども',
    romaji: 'kodomo',
    meaning: 'Child / Children',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"子","meaning":"Child"},{"char":"供","meaning":"Companion"}],
    sentences: [
      { id: 'ws-n5-109-1', sentence: '公園で子供たちが遊んでいます。', furigana: 'こうえん で こどもたち が あそんで います。', romaji: 'Kouen de kodomotachi ga asonde imasu.', english: 'Children are playing in the park.' },
      { id: 'ws-n5-109-2', sentence: '私は子供が二人います。', furigana: 'わたし は こども が ふたり います。', romaji: 'Watashi wa kodomo ga futari imasu.', english: 'I have two children.' }
    ]
  },
  {
    id: 'w-n5-110',
    word: '医者',
    reading: 'いしゃ',
    romaji: 'isha',
    meaning: 'Doctor / Physician',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"医","meaning":"Doctor"},{"char":"者","meaning":"Person"}],
    sentences: [
      { id: 'ws-n5-110-1', sentence: '私は将来、医者になりたいです。', furigana: 'わたし は しょうらい、いしゃ に なりたい です。', romaji: 'Watashi wa shourai, isha ni naritai desu.', english: 'In the future, I want to become a doctor.' },
      { id: 'ws-n5-110-2', sentence: '風邪を引いたので医者に行きました。', furigana: 'かぜ を ひいた ので いしゃ に いきました。', romaji: 'Kaze o hiita node isha ni ikimashita.', english: 'Because I caught a cold, I went to the doctor.' }
    ]
  },
  {
    id: 'w-n5-111',
    word: '会社員',
    reading: 'かいしゃいん',
    romaji: 'kaishain',
    meaning: 'Company employee / Office worker',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"会","meaning":"Meet"},{"char":"社","meaning":"Company"},{"char":"員","meaning":"Member"}],
    sentences: [
      { id: 'ws-n5-111-1', sentence: '田中さんは会社員です。', furigana: 'たなかさん は かいしゃいん です。', romaji: 'Tanaka-san wa kaishain desu.', english: 'Mr. Tanaka is a company employee.' },
      { id: 'ws-n5-111-2', sentence: '私の父は会社員です。', furigana: 'わたし の ちち は かいしゃいん です。', romaji: 'Watashi no chichi wa kaishain desu.', english: 'My father is a company employee.' }
    ]
  },
  {
    id: 'w-n5-112',
    word: '国',
    reading: 'くに',
    romaji: 'kuni',
    meaning: 'Country / Nation',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"国","meaning":"Country"}],
    sentences: [
      { id: 'ws-n5-112-1', sentence: 'あなたの国はどちらですか。', furigana: 'あなた の くに は どちら です か。', romaji: 'Anata no kuni wa dochira desu ka.', english: 'Where are you from?' },
      { id: 'ws-n5-112-2', sentence: '私の国はとても広いです。', furigana: 'わたし の くに は とても ひろい です。', romaji: 'Watashi no kuni wa totemo hiroi desu.', english: 'My country is very large.' }
    ]
  },
  {
    id: 'w-n5-113',
    word: '日本',
    reading: 'にほん',
    romaji: 'Nihon',
    meaning: 'Japan',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"日","meaning":"Sun"},{"char":"本","meaning":"Origin"}],
    sentences: [
      { id: 'ws-n5-113-1', sentence: '私は日本が好きです。', furigana: 'わたし は にほん が すき です。', romaji: 'Watashi wa nihon ga suki desu.', english: 'I like Japan.' },
      { id: 'ws-n5-113-2', sentence: '来月、日本へ行きます。', furigana: 'らいげつ、にほん へ いきます。', romaji: 'Raigetsu, nihon e ikimasu.', english: 'Next month, I will go to Japan.' }
    ]
  },
  {
    id: 'w-n5-114',
    word: '日本語',
    reading: 'にほんご',
    romaji: 'Nihongo',
    meaning: 'Japanese language',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"日","meaning":"Sun"},{"char":"本","meaning":"Origin"},{"char":"語","meaning":"Language"}],
    sentences: [
      { id: 'ws-n5-114-1', sentence: '毎日、日本語を勉強します。', furigana: 'まいにち、にほんご を べんきょう します。', romaji: 'Mainichi, nihongo o benkyou shimasu.', english: 'I study Japanese every day.' },
      { id: 'ws-n5-114-2', sentence: '日本語はとても面白いです。', furigana: 'にほんご は とても おもしろい です。', romaji: 'Nihongo wa totemo omoshiroi desu.', english: 'Japanese is very interesting.' }
    ]
  },
  {
    id: 'w-n5-115',
    word: '英語',
    reading: 'えいご',
    romaji: 'Eigo',
    meaning: 'English language',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"英","meaning":"Heroic / English"},{"char":"語","meaning":"Language"}],
    sentences: [
      { id: 'ws-n5-115-1', sentence: '私は英語を話すことができます。', furigana: 'わたし は えいご を はなす こと が できます。', romaji: 'Watashi wa eigo o hanasu koto ga dekimasu.', english: 'I can speak English.' },
      { id: 'ws-n5-115-2', sentence: '田中先生は英語を教えます。', furigana: 'たなかせんせい は えいご を おしえます。', romaji: 'Tanaka sensei wa eigo o oshiemasu.', english: 'Teacher Tanaka teaches English.' }
    ]
  },
  {
    id: 'w-n5-116',
    word: '本',
    reading: 'ほん',
    romaji: 'hon',
    meaning: 'Book',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"本","meaning":"Book / Origin"}],
    sentences: [
      { id: 'ws-n5-116-1', sentence: '図書館で本を読みます。', furigana: 'としょかん で ほん を よみます。', romaji: 'Toshokan de hon o yomimasu.', english: 'I read books at the library.' },
      { id: 'ws-n5-116-2', sentence: '本屋で面白い本を買いました。', furigana: 'ほんや で おもしろい ほん を かいました。', romaji: 'Hon\'ya de omoshiroi hon o kaimashita.', english: 'I bought an interesting book at the bookstore.' }
    ]
  },
  {
    id: 'w-n5-117',
    word: '辞書',
    reading: 'じしょ',
    romaji: 'jisho',
    meaning: 'Dictionary',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"辞","meaning":"Word / Resign"},{"char":"書","meaning":"Book / Write"}],
    sentences: [
      { id: 'ws-n5-117-1', sentence: '机の上に辞書があります。', furigana: 'つくえ の うえ に じしょ が あります。', romaji: 'Tsukue no ue ni jisho ga arimasu.', english: 'There is a dictionary on the desk.' },
      { id: 'ws-n5-117-2', sentence: '辞書で言葉を調べます。', furigana: 'じしょ で ことば を しらべます。', romaji: 'Jisho de kotoba o shirabemasu.', english: 'I look up words in the dictionary.' }
    ]
  },
  {
    id: 'w-n5-118',
    word: '雑誌',
    reading: 'ざっし',
    romaji: 'zasshi',
    meaning: 'Magazine',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"雑","meaning":"Mixed"},{"char":"誌","meaning":"Document / Magazine"}],
    sentences: [
      { id: 'ws-n5-118-1', sentence: '本屋で日本の雑誌を買いました。', furigana: 'ほんや で にほん の ざっし を かいました。', romaji: 'Hon\'ya de nihon no zasshi o kaimashita.', english: 'I bought a Japanese magazine at the bookstore.' },
      { id: 'ws-n5-118-2', sentence: '部屋で雑誌を読みます。', furigana: 'へや で ざっし を よみます。', romaji: 'Heya de zasshi o yomimasu.', english: 'I read magazines in my room.' }
    ]
  },
  {
    id: 'w-n5-119',
    word: '新聞',
    reading: 'しんぶん',
    romaji: 'shinbun',
    meaning: 'Newspaper',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"新","meaning":"New"},{"char":"聞","meaning":"Hear"}],
    sentences: [
      { id: 'ws-n5-119-1', sentence: '父は毎朝、新聞を読みます。', furigana: 'ちち は まいあさ、しんぶん を よみます。', romaji: 'Chichi wa maiasa, shinbun o yomimasu.', english: 'My father reads the newspaper every morning.' },
      { id: 'ws-n5-119-2', sentence: '今日の新聞は机の上にあります。', furigana: 'きょう の しんぶん は つくえ の うえ に あります。', romaji: 'Kyou no shinbun wa tsukue no ue ni arimasu.', english: 'Today\'s newspaper is on the desk.' }
    ]
  },
  {
    id: 'w-n5-120',
    word: '手紙',
    reading: 'てがみ',
    romaji: 'tegami',
    meaning: 'Letter',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"手","meaning":"Hand"},{"char":"紙","meaning":"Paper"}],
    sentences: [
      { id: 'ws-n5-120-1', sentence: '友達に手紙を書きます。', furigana: 'ともだち に てがみ を かきます。', romaji: 'Tomodachi ni tegami o kakimasu.', english: 'I write a letter to my friend.' },
      { id: 'ws-n5-120-2', sentence: '母から手紙が届きました。', furigana: 'はは から てがみ が とどきました。', romaji: 'Haha kara tegami ga todokimashita.', english: 'A letter arrived from my mother.' }
    ]
  },
  {
    id: 'w-n5-121',
    word: '切手',
    reading: 'きって',
    romaji: 'kitte',
    meaning: 'Postage stamp',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"切","meaning":"Cut"},{"char":"手","meaning":"Hand"}],
    sentences: [
      { id: 'ws-n5-121-1', sentence: '郵便局で切手を買います。', furigana: 'ゆうびんきょく で きって を かいます。', romaji: 'Yuubinkyoku de kitte o kaimasu.', english: 'I buy stamps at the post office.' },
      { id: 'ws-n5-121-2', sentence: '手紙に切手を貼りました。', furigana: 'てがみ に きって を はりました。', romaji: 'Tegami ni kitte o harimashita.', english: 'I pasted a stamp on the letter.' }
    ]
  },
  {
    id: 'w-n5-122',
    word: '紙',
    reading: 'かみ',
    romaji: 'kami',
    meaning: 'Paper',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"紙","meaning":"Paper"}],
    sentences: [
      { id: 'ws-n5-122-1', sentence: '白い紙に名前を書きます。', furigana: 'しろい かみ に なまえ を かきます。', romaji: 'Shiroi kami ni namae o kakimasu.', english: 'I write my name on the white paper.' },
      { id: 'ws-n5-122-2', sentence: '紙を一枚ください。', furigana: 'かみ を いちまい ください。', romaji: 'Kami o ichimai kudasai.', english: 'Please give me one sheet of paper.' }
    ]
  },
  {
    id: 'w-n5-123',
    word: '机',
    reading: 'つくえ',
    romaji: 'tsukue',
    meaning: 'Desk',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"机","meaning":"Desk"}],
    sentences: [
      { id: 'ws-n5-123-1', sentence: '机の上に本を置きます。', furigana: 'つくえ の うえ に ほん を おきます。', romaji: 'Tsukue no ue ni hon o okimasu.', english: 'I put the book on the desk.' },
      { id: 'ws-n5-123-2', sentence: '部屋に新しい机を買いました。', furigana: 'へや に あたらしい つくえ を かいました。', romaji: 'Heya ni atarashii tsukue o kaimashita.', english: 'I bought a new desk for the room.' }
    ]
  },
  {
    id: 'w-n5-124',
    word: '椅子',
    reading: 'いす',
    romaji: 'isu',
    meaning: 'Chair',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"椅","meaning":"Chair"},{"char":"子","meaning":"Object suffix"}],
    sentences: [
      { id: 'ws-n5-124-1', sentence: 'どうぞ、椅子に座ってください。', furigana: 'どうぞ、いす に すわって ください。', romaji: 'Douzo, isu ni suwatte kudasai.', english: 'Please sit on the chair.' },
      { id: 'ws-n5-124-2', sentence: 'この椅子はとても座りやすいです。', furigana: 'この いす は とても すわりやすい です。', romaji: 'Kono isu wa totemo suwariyasui desu.', english: 'This chair is very comfortable to sit on.' }
    ]
  },
  {
    id: 'w-n5-125',
    word: '鞄',
    reading: 'かばん',
    romaji: 'kaban',
    meaning: 'Bag / Briefcase',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-125-1', sentence: '新しい鞄を買いました。', furigana: 'あたらしい かばん を かいました。', romaji: 'Atarashii kaban o kaimashita.', english: 'I bought a new bag.' },
      { id: 'ws-n5-125-2', sentence: '鞄の中に財布があります。', furigana: 'かばん の なか に さいふ が あります。', romaji: 'Kaban no naka ni saifu ga arimasu.', english: 'There is a wallet inside the bag.' }
    ]
  },
  {
    id: 'w-n5-126',
    word: '傘',
    reading: 'かさ',
    romaji: 'kasa',
    meaning: 'Umbrella',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"傘","meaning":"Umbrella"}],
    sentences: [
      { id: 'ws-n5-126-1', sentence: '雨が降っているので傘をさします。', furigana: 'あめ が ふって いる ので かさ を さします。', romaji: 'Ame ga futte iru node kasa o sashimasu.', english: 'Because it is raining, I hold an umbrella.' },
      { id: 'ws-n5-126-2', sentence: '電車に傘を忘れました。', furigana: 'でんしゃ に かさ を わすれました。', romaji: 'Densha ni kasa o wasuremashita.', english: 'I forgot my umbrella on the train.' }
    ]
  },
  {
    id: 'w-n5-127',
    word: '鍵',
    reading: 'かぎ',
    romaji: 'kagi',
    meaning: 'Key',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-127-1', sentence: '部屋の鍵を閉めます。', furigana: 'へや の かぎ を しめます。', romaji: 'Heya no kagi o shimemasu.', english: 'I lock the room key.' },
      { id: 'ws-n5-127-2', sentence: '車の鍵はポケットの中にあります。', furigana: 'くるま の かぎ は ポケット の なか に あります。', romaji: 'Kuruma no kagi wa poketto no naka ni arimasu.', english: 'The car key is inside the pocket.' }
    ]
  },
  {
    id: 'w-n5-128',
    word: '時計',
    reading: 'とけい',
    romaji: 'tokei',
    meaning: 'Clock / Watch',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"時","meaning":"Time"},{"char":"計","meaning":"Measure"}],
    sentences: [
      { id: 'ws-n5-128-1', sentence: '部屋の壁に時計があります。', furigana: 'へや の かべ に とけい が あります。', romaji: 'Heya no kabe ni tokei ga arimasu.', english: 'There is a clock on the room wall.' },
      { id: 'ws-n5-128-2', sentence: '新しい時計を買いました。', furigana: 'あたらしい とけい を かいました。', romaji: 'Atarashii tokei o kaimashita.', english: 'I bought a new watch.' }
    ]
  },
  {
    id: 'w-n5-129',
    word: '眼鏡',
    reading: 'めがね',
    romaji: 'megane',
    meaning: 'Eyeglasses / Glasses',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"眼","meaning":"Eye"},{"char":"鏡","meaning":"Mirror"}],
    sentences: [
      { id: 'ws-n5-129-1', sentence: '本を読むとき、眼鏡をかけます。', furigana: 'ほん を よむ とき、めがね を かけます。', romaji: 'Hon o yomu toki, megane o kakemasu.', english: 'When reading books, I put on glasses.' },
      { id: 'ws-n5-129-2', sentence: '眼鏡は机の上にあります。', furigana: 'めがね は つくえ の うえ に あります。', romaji: 'Megane wa tsukue no ue ni arimasu.', english: 'The glasses are on the desk.' }
    ]
  },
  {
    id: 'w-n5-130',
    word: '鉛筆',
    reading: 'えんぴつ',
    romaji: 'enpitsu',
    meaning: 'Pencil',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"鉛","meaning":"Lead"},{"char":"筆","meaning":"Brush"}],
    sentences: [
      { id: 'ws-n5-130-1', sentence: '鉛筆で名前を書きます。', furigana: 'えんぴつ で なまえ を かきます。', romaji: 'Enpitsu de namae o kakimasu.', english: 'I write my name with a pencil.' },
      { id: 'ws-n5-130-2', sentence: '鉛筆を一本ください。', furigana: 'えんぴつ を いっぽん ください。', romaji: 'Enpitsu o ippon kudasai.', english: 'Please give me one pencil.' }
    ]
  },
  {
    id: 'w-n5-131',
    word: 'ボールペン',
    reading: 'ボールペン',
    romaji: 'boorupen',
    meaning: 'Ballpoint pen',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-131-1', sentence: '黒いボールペンを使います。', furigana: 'くろい ボールペン を つかいます。', romaji: 'Kuroi boorupen o tsukaimasu.', english: 'I use a black ballpoint pen.' },
      { id: 'ws-n5-131-2', sentence: 'ここにボールペンで名前を書いてください。', furigana: 'ここ に ボールペン で なまえ を かいて ください。', romaji: 'Koko ni boorupen de namae o kaite kudasai.', english: 'Please write your name here with a ballpoint pen.' }
    ]
  },
  {
    id: 'w-n5-132',
    word: 'ノート',
    reading: 'ノート',
    romaji: 'nooto',
    meaning: 'Notebook',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-132-1', sentence: '授業でノートを取ります。', furigana: 'じゅぎょう で ノート を とります。', romaji: 'Jugyou de nooto o torimasu.', english: 'I take notes in class.' },
      { id: 'ws-n5-132-2', sentence: '新しいノートを買いました。', furigana: 'あたらしい ノート を かいました。', romaji: 'Atarashii nooto o kaimashita.', english: 'I bought a new notebook.' }
    ]
  },
  {
    id: 'w-n5-133',
    word: '窓',
    reading: 'まど',
    romaji: 'mado',
    meaning: 'Window',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"窓","meaning":"Window"}],
    sentences: [
      { id: 'ws-n5-133-1', sentence: '部屋の窓を開けてください。', furigana: 'へや の まど を あけて ください。', romaji: 'Heya no mado o akete kudasai.', english: 'Please open the room window.' },
      { id: 'ws-n5-133-2', sentence: '窓から富士山が見えます。', furigana: 'まど から ふじさん が みえます。', romaji: 'Mado kara Fujisan ga miemasu.', english: 'Mt. Fuji can be seen from the window.' }
    ]
  },
  {
    id: 'w-n5-134',
    word: 'ドア',
    reading: 'ドア',
    romaji: 'doa',
    meaning: 'Door',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-134-1', sentence: '静かにドアを閉めてください。', furigana: 'しずかに ドア を しめて ください。', romaji: 'Shizukani doa o shimete kudasai.', english: 'Please close the door quietly.' },
      { id: 'ws-n5-134-2', sentence: '誰かがドアをノックしました。', furigana: 'だれか が ドア を ノック しました。', romaji: 'Dareka ga doa o nokku shimashita.', english: 'Someone knocked on the door.' }
    ]
  }
,

  // ==========================================
  // === BATCH 2: 100 NEW WORDS (w-n5-135 to w-n5-234) ===
  // ==========================================
  {
    id: 'w-n5-135',
    word: 'ご飯',
    reading: 'ごはん',
    romaji: 'gohan',
    meaning: 'Cooked rice / Meal',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"飯","meaning":"Meal / Boiled rice"}],
    sentences: [
      { id: 'ws-n5-135-1', sentence: '七時に朝ご飯を食べました。', furigana: 'しちじ に あさごはん を たべました。', romaji: 'Shichiji ni asagohan o tabemashita.', english: 'I ate breakfast at 7 o\'clock.' },
      { id: 'ws-n5-135-2', sentence: '白いご飯が大好きです。', furigana: 'しろい ごはん が だいすき です。', romaji: 'Shiroi gohan ga daisuki desu.', english: 'I love white rice.' }
    ]
  },
  {
    id: 'w-n5-136',
    word: 'パン',
    reading: 'パン',
    romaji: 'pan',
    meaning: 'Bread',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-136-1', sentence: '毎朝、パンを食べます。', furigana: 'まいあさ、パン を たべます。', romaji: 'Maiasa, pan o tabemasu.', english: 'I eat bread every morning.' },
      { id: 'ws-n5-136-2', sentence: 'パン屋で美味しいパンを買いました。', furigana: 'パンや で おいしい パン を かいました。', romaji: 'Pan\'ya de oishii pan o kaimashita.', english: 'I bought delicious bread at the bakery.' }
    ]
  },
  {
    id: 'w-n5-137',
    word: '水',
    reading: 'みず',
    romaji: 'mizu',
    meaning: 'Water (cold / room temp)',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"水","meaning":"Water"}],
    sentences: [
      { id: 'ws-n5-137-1', sentence: '冷たい水を一杯ください。', furigana: 'つめたい みず を いっぱい ください。', romaji: 'Tsumetai mizu o ippai kudasai.', english: 'Please give me a glass of cold water.' },
      { id: 'ws-n5-137-2', sentence: '毎日、水をたくさん飲みます。', furigana: 'まいにち、みず を たくさん のみます。', romaji: 'Mainichi, mizu o takusan nomimasu.', english: 'I drink a lot of water every day.' }
    ]
  },
  {
    id: 'w-n5-138',
    word: 'お茶',
    reading: 'おちゃ',
    romaji: 'ocha',
    meaning: 'Green tea / Tea',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"茶","meaning":"Tea"}],
    sentences: [
      { id: 'ws-n5-138-1', sentence: 'ごはんの後でお茶を飲みます。', furigana: 'ごはん の あと で おちゃ を のみます。', romaji: 'Gohan no ato de ocha o nomimasu.', english: 'I drink green tea after meals.' },
      { id: 'ws-n5-138-2', sentence: '温かいお茶をどうぞ。', furigana: 'あたたかい おちゃ を どうぞ。', romaji: 'Atatakai ocha o douzo.', english: 'Please have some warm tea.' }
    ]
  },
  {
    id: 'w-n5-139',
    word: '紅茶',
    reading: 'こうちゃ',
    romaji: 'koucha',
    meaning: 'Black tea',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"紅","meaning":"Crimson"},{"char":"茶","meaning":"Tea"}],
    sentences: [
      { id: 'ws-n5-139-1', sentence: '午後に美味しい紅茶を飲みました。', furigana: 'ごご に おいしい こうちゃ を のみました。', romaji: 'Gogo ni oishii koucha o nomimashita.', english: 'I drank delicious black tea in the afternoon.' },
      { id: 'ws-n5-139-2', sentence: 'カフェで紅茶を注文しました。', furigana: 'カフェ で こうちゃ を ちゅうもん しました。', romaji: 'Kafe de koucha o chuumon shimashita.', english: 'I ordered black tea at the cafe.' }
    ]
  },
  {
    id: 'w-n5-140',
    word: '牛乳',
    reading: 'ぎゅうにゅう',
    romaji: 'gyuunyuu',
    meaning: 'Milk',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"牛","meaning":"Cow"},{"char":"乳","meaning":"Milk"}],
    sentences: [
      { id: 'ws-n5-140-1', sentence: '毎朝、牛乳を飲みます。', furigana: 'まいあさ、ぎゅうにゅう を のみます。', romaji: 'Maiasa, gyuunyuu o nomimasu.', english: 'I drink milk every morning.' },
      { id: 'ws-n5-140-2', sentence: '冷蔵庫に冷たい牛乳があります。', furigana: 'れいぞうこ に つめたい ぎゅうにゅう が あります。', romaji: 'Reizouko ni tsumetai gyuunyuu ga arimasu.', english: 'There is cold milk in the refrigerator.' }
    ]
  },
  {
    id: 'w-n5-141',
    word: 'コーヒー',
    reading: 'コーヒー',
    romaji: 'koohii',
    meaning: 'Coffee',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-141-1', sentence: '朝、熱いコーヒーを飲みます。', furigana: 'あさ、あつい コーヒー を のみます。', romaji: 'Asa, atsui koohii o nomimasu.', english: 'I drink hot coffee in the morning.' },
      { id: 'ws-n5-141-2', sentence: 'コーヒーに砂糖を入れます。', furigana: 'コーヒー に さとう を いれます。', romaji: 'Koohii ni satou o iremasu.', english: 'I put sugar into the coffee.' }
    ]
  },
  {
    id: 'w-n5-142',
    word: 'ジュース',
    reading: 'ジュース',
    romaji: 'juusu',
    meaning: 'Juice',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-142-1', sentence: '朝にオレンジジュースを飲みます。', furigana: 'あさ に オレンジ ジュース を のみます。', romaji: 'Asa ni orenji juusu o nomimasu.', english: 'I drink orange juice in the morning.' },
      { id: 'ws-n5-142-2', sentence: '子供にリンゴジュースを買いました。', furigana: 'こども に リンゴ ジュース を かいました。', romaji: 'Kodomo ni ringo juusu o kaimashita.', english: 'I bought apple juice for the children.' }
    ]
  },
  {
    id: 'w-n5-143',
    word: 'お酒',
    reading: 'おさけ',
    romaji: 'osake',
    meaning: 'Sake / Alcoholic drink',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"酒","meaning":"Sake / Liquor"}],
    sentences: [
      { id: 'ws-n5-143-1', sentence: '父はお酒が好きです。', furigana: 'ちち は おさけ が すき です。', romaji: 'Chichi wa osake ga suki desu.', english: 'My father likes alcohol / sake.' },
      { id: 'ws-n5-143-2', sentence: '日本では二十歳からお酒を飲むことができます。', furigana: 'にほん で は はたち から おさけ を のむ こと が できます。', romaji: 'Nihon de wa hatachi kara osake o nomu koto ga dekimasu.', english: 'In Japan, you can drink alcohol from age 20.' }
    ]
  },
  {
    id: 'w-n5-144',
    word: 'ビール',
    reading: 'ビール',
    romaji: 'biiru',
    meaning: 'Beer',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-144-1', sentence: '冷たいビールを飲みましょう。', furigana: 'つめたい ビール を のみましょう。', romaji: 'Tsumetai biiru o nomimashou.', english: 'Let\'s drink cold beer.' },
      { id: 'ws-n5-144-2', sentence: 'レストランでビールを一杯飲みました。', furigana: 'レストラン で ビール を いっぱい のみました。', romaji: 'Resutoran de biiru o ippai nomimashita.', english: 'I drank a glass of beer at the restaurant.' }
    ]
  },
  {
    id: 'w-n5-145',
    word: '魚',
    reading: 'さかな',
    romaji: 'sakana',
    meaning: 'Fish',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"魚","meaning":"Fish"}],
    sentences: [
      { id: 'ws-n5-145-1', sentence: '晩ご飯に魚を食べました。', furigana: 'ばんごはん に さかな を たべました。', romaji: 'Bangohan ni sakana o tabemashita.', english: 'I ate fish for dinner.' },
      { id: 'ws-n5-145-2', sentence: '川に小さな魚がたくさんいます。', furigana: 'かわ に ちいさな さかな が たくさん います。', romaji: 'Kawa ni chiisana sakana ga takusan imasu.', english: 'There are many small fish in the river.' }
    ]
  },
  {
    id: 'w-n5-146',
    word: '肉',
    reading: 'にく',
    romaji: 'niku',
    meaning: 'Meat',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"肉","meaning":"Meat"}],
    sentences: [
      { id: 'ws-n5-146-1', sentence: '私は肉料理が好きです。', furigana: 'わたし は にくりょうり が すき です。', romaji: 'Watashi wa nikuryouri ga suki desu.', english: 'I like meat dishes.' },
      { id: 'ws-n5-146-2', sentence: 'スーパーで新鮮な肉を買いました。', furigana: 'スーパー で しんせん な にく を かいました。', romaji: 'Suupaa de shinsen na niku o kaimashita.', english: 'I bought fresh meat at the supermarket.' }
    ]
  },
  {
    id: 'w-n5-147',
    word: '牛肉',
    reading: 'ぎゅうにく',
    romaji: 'gyuuniku',
    meaning: 'Beef',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"牛","meaning":"Cow"},{"char":"肉","meaning":"Meat"}],
    sentences: [
      { id: 'ws-n5-147-1', sentence: '今日のすき焼きに牛肉を使います。', furigana: 'きょう の すきやき に ぎゅうにく を つかいます。', romaji: 'Kyou no sukiyaki ni gyuuniku o tsukaimasu.', english: 'I use beef in today\'s sukiyaki.' },
      { id: 'ws-n5-147-2', sentence: '牛肉はとても美味しいです。', furigana: 'ぎゅうにく は とても おいしい です。', romaji: 'Gyuuniku wa totemo oishii desu.', english: 'Beef is very delicious.' }
    ]
  },
  {
    id: 'w-n5-148',
    word: '豚肉',
    reading: 'ぶたにく',
    romaji: 'butaniku',
    meaning: 'Pork',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"豚","meaning":"Pig"},{"char":"肉","meaning":"Meat"}],
    sentences: [
      { id: 'ws-n5-148-1', sentence: '豚肉でカレーを作ります。', furigana: 'ぶたにく で カレー を つくります。', romaji: 'Butaniku de karee o tsukurimasu.', english: 'I make curry with pork.' },
      { id: 'ws-n5-148-2', sentence: '私は豚肉が好きです。', furigana: 'わたし は ぶたにく が すき です。', romaji: 'Watashi wa butaniku ga suki desu.', english: 'I like pork.' }
    ]
  },
  {
    id: 'w-n5-149',
    word: '鶏肉',
    reading: 'とりにく',
    romaji: 'toriniku',
    meaning: 'Chicken meat',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"鶏","meaning":"Chicken"},{"char":"肉","meaning":"Meat"}],
    sentences: [
      { id: 'ws-n5-149-1', sentence: '今夜は鶏肉を食べます。', furigana: 'こんや は とりにく を たべます。', romaji: 'Kon\'ya wa toriniku o tabemasu.', english: 'Tonight I will eat chicken.' },
      { id: 'ws-n5-149-2', sentence: '鶏肉は安くて美味しいです。', furigana: 'とりにく は やすくて おいしい です。', romaji: 'Toriniku wa yasukute oishii desu.', english: 'Chicken is cheap and delicious.' }
    ]
  },
  {
    id: 'w-n5-150',
    word: '卵',
    reading: 'たまご',
    romaji: 'tamago',
    meaning: 'Egg',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"卵","meaning":"Egg"}],
    sentences: [
      { id: 'ws-n5-150-1', sentence: '朝ご飯に卵を食べました。', furigana: 'あさごはん に たまご を たべました。', romaji: 'Asagohan ni tamago o tabemashita.', english: 'I ate eggs for breakfast.' },
      { id: 'ws-n5-150-2', sentence: '冷蔵庫に卵が三つあります。', furigana: 'れいぞうこ に たまご が みっつ あります。', romaji: 'Reizouko ni tamago ga mittsu arimasu.', english: 'There are three eggs in the refrigerator.' }
    ]
  },
  {
    id: 'w-n5-151',
    word: '野菜',
    reading: 'やさい',
    romaji: 'yasai',
    meaning: 'Vegetable',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"野","meaning":"Field"},{"char":"菜","meaning":"Vegetable"}],
    sentences: [
      { id: 'ws-n5-151-1', sentence: '毎日、野菜をたくさん食べます。', furigana: 'まいにち、やさい を たくさん たべます。', romaji: 'Mainichi, yasai o takusan tabemasu.', english: 'I eat lots of vegetables every day.' },
      { id: 'ws-n5-151-2', sentence: 'スーパーで新鮮な野菜を買いました。', furigana: 'スーパー で しんせん な やさい を かいました。', romaji: 'Suupaa de shinsen na yasai o kaimashita.', english: 'I bought fresh vegetables at the supermarket.' }
    ]
  },
  {
    id: 'w-n5-152',
    word: '果物',
    reading: 'くだもの',
    romaji: 'kudamono',
    meaning: 'Fruit',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"果","meaning":"Fruit"},{"char":"物","meaning":"Thing"}],
    sentences: [
      { id: 'ws-n5-152-1', sentence: '果物の中でリンゴが一番好きです。', furigana: 'くだもの の なか で リンゴ が いちばん すき です。', romaji: 'Kudamono no naka de ringo ga ichiban suki desu.', english: 'Among fruits, I like apples the best.' },
      { id: 'ws-n5-152-2', sentence: 'テーブルの上に果物があります。', furigana: 'テーブル の うえ に くだもの が あります。', romaji: 'Teeburu no ue ni kudamono ga arimasu.', english: 'There is fruit on the table.' }
    ]
  },
  {
    id: 'w-n5-153',
    word: 'リンゴ',
    reading: 'リンゴ',
    romaji: 'ringo',
    meaning: 'Apple',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-153-1', sentence: '赤いリンゴを食べました。', furigana: 'あかい リンゴ を たべました。', romaji: 'Akai ringo o tabemashita.', english: 'I ate a red apple.' },
      { id: 'ws-n5-153-2', sentence: 'このリンゴは甘くて美味しいです。', furigana: 'この リンゴ は あまくて おいしい です。', romaji: 'Kono ringo wa amakute oishii desu.', english: 'This apple is sweet and delicious.' }
    ]
  },
  {
    id: 'w-n5-154',
    word: 'みかん',
    reading: 'みかん',
    romaji: 'mikan',
    meaning: 'Mandarin orange / Tangerine',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-154-1', sentence: '冬にみかんをたくさん食べます。', furigana: 'ふゆ に みかん を たくさん たべます。', romaji: 'Fuyu ni mikan o takusan tabemasu.', english: 'I eat a lot of tangerines in winter.' },
      { id: 'ws-n5-154-2', sentence: 'みかんを二つ買いました。', furigana: 'みかん を ふたつ かいました。', romaji: 'Mikan o futatsu kaimashita.', english: 'I bought two tangerines.' }
    ]
  },
  {
    id: 'w-n5-155',
    word: 'バナナ',
    reading: 'バナナ',
    romaji: 'banana',
    meaning: 'Banana',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-155-1', sentence: '朝に黄色いバナナを食べました。', furigana: 'あさ に きいろい バナナ を たべました。', romaji: 'Asa ni kiiroi banana o tabemashita.', english: 'In the morning, I ate a yellow banana.' },
      { id: 'ws-n5-155-2', sentence: 'バナナは甘くて美味しいです。', furigana: 'バナナ は あまくて おいしい です。', romaji: 'Banana wa amakute oishii desu.', english: 'Bananas are sweet and delicious.' }
    ]
  },
  {
    id: 'w-n5-156',
    word: 'トマト',
    reading: 'トマト',
    romaji: 'tomato',
    meaning: 'Tomato',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-156-1', sentence: 'サラダに赤いトマトを入れます。', furigana: 'サラダ に あかい トマト を いれます。', romaji: 'Sarada ni akai tomato o iremasu.', english: 'I put red tomatoes in the salad.' },
      { id: 'ws-n5-156-2', sentence: 'このトマトはとても新鮮です。', furigana: 'この トマト は とても しんせん です。', romaji: 'Kono tomato wa totemo shinsen desu.', english: 'This tomato is very fresh.' }
    ]
  },
  {
    id: 'w-n5-157',
    word: '砂糖',
    reading: 'さとう',
    romaji: 'satou',
    meaning: 'Sugar',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"砂","meaning":"Sand"},{"char":"糖","meaning":"Sugar"}],
    sentences: [
      { id: 'ws-n5-157-1', sentence: 'コーヒーに砂糖を入れますか。', furigana: 'コーヒー に さとう を いれます か。', romaji: 'Koohii ni satou o iremasu ka.', english: 'Do you put sugar in your coffee?' },
      { id: 'ws-n5-157-2', sentence: '砂糖は甘いです。', furigana: 'さとう は あまい です。', romaji: 'Satou wa amai desu.', english: 'Sugar is sweet.' }
    ]
  },
  {
    id: 'w-n5-158',
    word: '塩',
    reading: 'しお',
    romaji: 'shio',
    meaning: 'Salt',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"塩","meaning":"Salt"}],
    sentences: [
      { id: 'ws-n5-158-1', sentence: 'そこの塩を取ってください。', furigana: 'そこ の しお を とって ください。', romaji: 'Soko no shio o totte kudasai.', english: 'Please pass the salt there.' },
      { id: 'ws-n5-158-2', sentence: 'スープに少し塩を入れました。', furigana: 'スープ に すこし しお を いれました。', romaji: 'Suupu ni sukoshi shio o iremashita.', english: 'I put a little salt into the soup.' }
    ]
  },
  {
    id: 'w-n5-159',
    word: 'しょうゆ',
    reading: 'しょうゆ',
    romaji: 'shouyu',
    meaning: 'Soy sauce',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-159-1', sentence: 'お寿司にしょうゆをつけます。', furigana: 'おすし に しょうゆ を つけます。', romaji: 'Osushi ni shouyu o tsukemasu.', english: 'I dip sushi in soy sauce.' },
      { id: 'ws-n5-159-2', sentence: 'しょうゆを取ってください。', furigana: 'しょうゆ を とって ください。', romaji: 'Shouyu o totte kudasai.', english: 'Please pass the soy sauce.' }
    ]
  },
  {
    id: 'w-n5-160',
    word: '料理',
    reading: 'りょうり',
    romaji: 'ryouri',
    meaning: 'Cuisine / Cooking',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"料","meaning":"Fee / Material"},{"char":"理","meaning":"Logic / Reason"}],
    sentences: [
      { id: 'ws-n5-160-1', sentence: '母の手料理はとても美味しいです。', furigana: 'はは の てりょうり は とても おいしい です。', romaji: 'Haha no teryouri wa totemo oishii desu.', english: 'My mother\'s home cooking is very delicious.' },
      { id: 'ws-n5-160-2', sentence: '週末に日本料理を作ります。', furigana: 'しゅうまつ に にほんりょうり を つくります。', romaji: 'Shuumatsu ni nihonryouri o tsukurimasu.', english: 'I will make Japanese dishes on the weekend.' }
    ]
  },
  {
    id: 'w-n5-161',
    word: '朝ご飯',
    reading: 'あさごはん',
    romaji: 'asagohan',
    meaning: 'Breakfast',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"朝","meaning":"Morning"},{"char":"飯","meaning":"Meal"}],
    sentences: [
      { id: 'ws-n5-161-1', sentence: '七時に朝ご飯を食べます。', furigana: 'しちじ に あさごはん を たべます。', romaji: 'Shichiji ni asagohan o tabemasu.', english: 'I eat breakfast at 7 o\'clock.' },
      { id: 'ws-n5-161-2', sentence: '今日の朝ご飯はパンと卵でした。', furigana: 'きょう の あさごはん は パン と たまご でした。', romaji: 'Kyou no asagohan wa pan to tamago deshita.', english: 'Today\'s breakfast was bread and eggs.' }
    ]
  },
  {
    id: 'w-n5-162',
    word: '昼ご飯',
    reading: 'ひるごはん',
    romaji: 'hirugohan',
    meaning: 'Lunch',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"昼","meaning":"Noon / Daytime"},{"char":"飯","meaning":"Meal"}],
    sentences: [
      { id: 'ws-n5-162-1', sentence: '十二時に昼ご飯を食べましょう。', furigana: 'じゅうにじ に ひるごはん を たべましょう。', romaji: 'Juuniji ni hirugohan o tabemashou.', english: 'Let\'s eat lunch at 12 o\'clock.' },
      { id: 'ws-n5-162-2', sentence: '友達と一緒に昼ご飯を食べました。', furigana: 'ともだち と いっしょ に ひるごはん を たべました。', romaji: 'Tomodachi to issho ni hirugohan o tabemashita.', english: 'I ate lunch together with a friend.' }
    ]
  },
  {
    id: 'w-n5-163',
    word: '晩ご飯',
    reading: 'ばんごはん',
    romaji: 'bangohan',
    meaning: 'Dinner / Supper',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"晩","meaning":"Night"},{"char":"飯","meaning":"Meal"}],
    sentences: [
      { id: 'ws-n5-163-1', sentence: '今日の晩ご飯は何ですか。', furigana: 'きょう の ばんごはん は なん です か。', romaji: 'Kyou no bangohan wa nan desu ka.', english: 'What is for dinner today?' },
      { id: 'ws-n5-163-2', sentence: '家族と一緒に晩ご飯を食べました。', furigana: 'かぞく と いっしょ に ばんごはん を たべました。', romaji: 'Kazoku to issho ni bangohan o tabemashita.', english: 'I ate dinner together with my family.' }
    ]
  },
  {
    id: 'w-n5-164',
    word: 'お弁当',
    reading: 'おべんとう',
    romaji: 'obentou',
    meaning: 'Boxed lunch (bento)',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"弁","meaning":"Discriminate"},{"char":"当","meaning":"Hit"}],
    sentences: [
      { id: 'ws-n5-164-1', sentence: '毎日、学校にお弁当を持って行きます。', furigana: 'まいにち、がっこう に おべんとう を もって いきます。', romaji: 'Mainichi, gakkou ni obentou o motte ikimasu.', english: 'Every day, I take a boxed lunch to school.' },
      { id: 'ws-n5-164-2', sentence: '母が美味しいお弁当を作ってくれました。', furigana: 'はは が おいしい おべんとう を つくって くれました。', romaji: 'Haha ga oishii obentou o tsukutte kuremashita.', english: 'My mother made a delicious boxed lunch for me.' }
    ]
  },
  {
    id: 'w-n5-165',
    word: 'お菓子',
    reading: 'おかし',
    romaji: 'okashi',
    meaning: 'Sweets / Candy / Snacks',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"菓","meaning":"Candy"},{"char":"子","meaning":"Child / Object"}],
    sentences: [
      { id: 'ws-n5-165-1', sentence: '子供たちにお菓子をあげました。', furigana: 'こどもたち に おかし を あげました。', romaji: 'Kodomotachi ni okashi o agemashita.', english: 'I gave snacks to the children.' },
      { id: 'ws-n5-165-2', sentence: 'お茶と一緒にお菓子を食べます。', furigana: 'おちゃ と いっしょ に おかし を たべます。', romaji: 'Ocha to issho ni okashi o tabemasu.', english: 'I eat snacks together with green tea.' }
    ]
  },
  {
    id: 'w-n5-166',
    word: 'ケーキ',
    reading: 'ケーキ',
    romaji: 'keeki',
    meaning: 'Cake',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-166-1', sentence: '誕生日にケーキを食べました。', furigana: 'たんじょうび に ケーキ を たべました。', romaji: 'Tanjoubi ni keeki o tabemashita.', english: 'I ate cake on my birthday.' },
      { id: 'ws-n5-166-2', sentence: 'このケーキは甘くて美味しいです。', furigana: 'この ケーキ は あまくて おいしい です。', romaji: 'Kono keeki wa amakute oishii desu.', english: 'This cake is sweet and delicious.' }
    ]
  },
  {
    id: 'w-n5-167',
    word: 'ラーメン',
    reading: 'ラーメン',
    romaji: 'raamen',
    meaning: 'Ramen noodles',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-167-1', sentence: '昼に美味しいラーメンを食べました。', furigana: 'ひる に おいしい ラーメン を たべました。', romaji: 'Hiru ni oishii raamen o tabemashita.', english: 'I ate delicious ramen for lunch.' },
      { id: 'ws-n5-167-2', sentence: '私は日本のラーメンが大好きです。', furigana: 'わたし は にほん の ラーメン が だいすき です。', romaji: 'Watashi wa nihon no raamen ga daisuki desu.', english: 'I love Japanese ramen.' }
    ]
  },
  {
    id: 'w-n5-168',
    word: 'うどん',
    reading: 'うどん',
    romaji: 'udon',
    meaning: 'Udon noodles',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-168-1', sentence: '寒い日は温かいうどんを食べます。', furigana: 'さむい ひ は あたたかい うどん を たべます。', romaji: 'Samui hi wa atatakai udon o tabemasu.', english: 'On cold days, I eat warm udon.' },
      { id: 'ws-n5-168-2', sentence: '駅の前でうどんを食べました。', furigana: 'えき の まえ で うどん を たべました。', romaji: 'Eki no mae de udon o tabemashita.', english: 'I ate udon in front of the station.' }
    ]
  },
  {
    id: 'w-n5-169',
    word: 'そば',
    reading: 'そば',
    romaji: 'soba',
    meaning: 'Soba (buckwheat) noodles',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-169-1', sentence: 'お昼に冷たいそばを食べました。', furigana: 'おひる に つめたい そば を たべました。', romaji: 'Ohiru ni tsumetai soba o tabemashita.', english: 'I ate cold soba for lunch.' },
      { id: 'ws-n5-169-2', sentence: '日本のそばはとても美味しいです。', furigana: 'にほん の そば は とても おいしい です。', romaji: 'Nihon no soba wa totemo oishii desu.', english: 'Japanese soba is very delicious.' }
    ]
  },
  {
    id: 'w-n5-170',
    word: 'カレー',
    reading: 'カレー',
    romaji: 'karee',
    meaning: 'Curry rice',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-170-1', sentence: '今夜はカレーを作ります。', furigana: 'こんや は カレー を つくります。', romaji: 'Kon\'ya wa karee o tsukurimasu.', english: 'Tonight I will make curry.' },
      { id: 'ws-n5-170-2', sentence: 'このカレーは少し辛いです。', furigana: 'この カレー は すこし からい です。', romaji: 'Kono karee wa sukoshi karai desu.', english: 'This curry is a little spicy.' }
    ]
  },
  {
    id: 'w-n5-171',
    word: 'お皿',
    reading: 'おさら',
    romaji: 'osara',
    meaning: 'Plate / Dish',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"皿","meaning":"Dish"}],
    sentences: [
      { id: 'ws-n5-171-1', sentence: 'お皿をきれいに洗ってください。', furigana: 'おさら を きれい に あらって ください。', romaji: 'Osara o kirei ni aratte kudasai.', english: 'Please wash the dishes cleanly.' },
      { id: 'ws-n5-171-2', sentence: 'テーブルにお皿を並べました。', furigana: 'テーブル に おさら を ならべました。', romaji: 'Teeburu ni osara o narabemashita.', english: 'I arranged dishes on the table.' }
    ]
  },
  {
    id: 'w-n5-172',
    word: 'コップ',
    reading: 'コップ',
    romaji: 'koppu',
    meaning: 'Glass / Cup',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-172-1', sentence: 'コップに水を入れます。', furigana: 'コップ に みず を いれます。', romaji: 'Koppu ni mizu o iremasu.', english: 'I pour water into the glass.' },
      { id: 'ws-n5-172-2', sentence: 'コップを一つください。', furigana: 'コップ を ひとつ ください。', romaji: 'Koppu o hitotsu kudasai.', english: 'Please give me one glass.' }
    ]
  },
  {
    id: 'w-n5-173',
    word: '茶碗',
    reading: 'ちゃわん',
    romaji: 'chawan',
    meaning: 'Rice bowl / Tea cup',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"茶","meaning":"Tea"},{"char":"碗","meaning":"Bowl"}],
    sentences: [
      { id: 'ws-n5-173-1', sentence: '茶碗にご飯を盛ります。', furigana: 'ちゃわん に ごはん を もります。', romaji: 'Chawan ni gohan o morimasu.', english: 'I serve rice into the rice bowl.' },
      { id: 'ws-n5-173-2', sentence: 'きれいな茶碗を買いました。', furigana: 'きれい な ちゃわん を かいました。', romaji: 'Kirei na chawan o kaimashita.', english: 'I bought a pretty rice bowl.' }
    ]
  },
  {
    id: 'w-n5-174',
    word: 'お箸',
    reading: 'おはし',
    romaji: 'ohashi',
    meaning: 'Chopsticks',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-174-1', sentence: 'お箸でご飯を食べます。', furigana: 'おはし で ごはん を たべます。', romaji: 'Ohashi de gohan o tabemasu.', english: 'I eat meals with chopsticks.' },
      { id: 'ws-n5-174-2', sentence: 'お箸の使い方を教えてください。', furigana: 'おはし の つかいかた を おしえて ください。', romaji: 'Ohashi no tsukaikata o oshiete kudasai.', english: 'Please teach me how to use chopsticks.' }
    ]
  },
  {
    id: 'w-n5-175',
    word: 'スプーン',
    reading: 'スプーン',
    romaji: 'supuun',
    meaning: 'Spoon',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-175-1', sentence: 'スプーンでカレーを食べます。', furigana: 'スプーン で カレー を たべます。', romaji: 'Supuun de karee o tabemasu.', english: 'I eat curry with a spoon.' },
      { id: 'ws-n5-175-2', sentence: '小さなスプーンをください。', furigana: 'ちいさな スプーン を ください。', romaji: 'Chiisana supuun o kudasai.', english: 'Please give me a small spoon.' }
    ]
  },
  {
    id: 'w-n5-176',
    word: 'ナイフ',
    reading: 'ナイフ',
    romaji: 'naifu',
    meaning: 'Knife',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-176-1', sentence: 'ナイフでリンゴを切ります。', furigana: 'ナイフ で リンゴ を きります。', romaji: 'Naifu de ringo o kirimasu.', english: 'I cut the apple with a knife.' },
      { id: 'ws-n5-176-2', sentence: 'ナイフとフォークを使って食べます。', furigana: 'ナイフ と フォーク を つかって たべます。', romaji: 'Naifu to fooku o tsukatte tabemasu.', english: 'I eat using a knife and fork.' }
    ]
  },
  {
    id: 'w-n5-177',
    word: 'フォーク',
    reading: 'フォーク',
    romaji: 'fooku',
    meaning: 'Fork',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-177-1', sentence: 'フォークでパスタを食べます。', furigana: 'フォーク で パスタ を たべます。', romaji: 'Fooku de pasuta o tabemasu.', english: 'I eat pasta with a fork.' },
      { id: 'ws-n5-177-2', sentence: 'テーブルにフォークを置きました。', furigana: 'テーブル に フォーク を おきました。', romaji: 'Teeburu ni fooku o okimashita.', english: 'I put a fork on the table.' }
    ]
  },
  {
    id: 'w-n5-178',
    word: '店',
    reading: 'みせ',
    romaji: 'mise',
    meaning: 'Shop / Store',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"店","meaning":"Shop"}],
    sentences: [
      { id: 'ws-n5-178-1', sentence: 'あの店で買い物をします。', furigana: 'あの みせ で かいもの を します。', romaji: 'Ano mise de kaimono o shimasu.', english: 'I do shopping at that store.' },
      { id: 'ws-n5-178-2', sentence: 'この店はとても人気があります。', furigana: 'この みせ は とても にんき が あります。', romaji: 'Kono mise wa totemo ninki ga arimasu.', english: 'This store is very popular.' }
    ]
  },
  {
    id: 'w-n5-179',
    word: 'レストラン',
    reading: 'レストラン',
    romaji: 'resutoran',
    meaning: 'Restaurant',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-179-1', sentence: '家族とレストランで食事をしました。', furigana: 'かぞく と レストラン で しょくじ を しました。', romaji: 'Kazoku to resutoran de shokuji o shimashita.', english: 'I had a meal with my family at a restaurant.' },
      { id: 'ws-n5-179-2', sentence: '駅の近くに新しいレストランができました。', furigana: 'えき の ちかく に あたらしい レストラン が できました。', romaji: 'Eki no chikaku ni atarashii resutoran ga dekimashita.', english: 'A new restaurant opened near the station.' }
    ]
  },
  {
    id: 'w-n5-180',
    word: 'カフェ',
    reading: 'カフェ',
    romaji: 'kafe',
    meaning: 'Cafe',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-180-1', sentence: 'カフェでコーヒーを飲みます。', furigana: 'カフェ で コーヒー を のみます。', romaji: 'Kafe de koohii o nomimasu.', english: 'I drink coffee at a cafe.' },
      { id: 'ws-n5-180-2', sentence: '友達と静かなカフェに入りました。', furigana: 'ともだち と しずか な カフェ に はいりました。', romaji: 'Tomodachi to shizuka na kafe ni hairimashita.', english: 'I went into a quiet cafe with a friend.' }
    ]
  },
  {
    id: 'w-n5-181',
    word: '喫茶店',
    reading: 'きっさてん',
    romaji: 'kissaten',
    meaning: 'Traditional coffee shop',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"喫","meaning":"Inhale / Drink"},{"char":"茶","meaning":"Tea"},{"char":"店","meaning":"Shop"}],
    sentences: [
      { id: 'ws-n5-181-1', sentence: '喫茶店でコーヒーを飲みます。', furigana: 'きっさてん で コーヒー を のみます。', romaji: 'Kissaten de koohii o nomimasu.', english: 'I drink coffee at a coffee shop.' },
      { id: 'ws-n5-181-2', sentence: '静かな喫茶店に入りました。', furigana: 'しずか な きっさてん に はいりました。', romaji: 'Shizuka na kissaten ni hairimashita.', english: 'I entered a quiet coffee shop.' }
    ]
  },
  {
    id: 'w-n5-182',
    word: '食堂',
    reading: 'しょくどう',
    romaji: 'shokudou',
    meaning: 'Dining hall / Cafeteria',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"食","meaning":"Eat"},{"char":"堂","meaning":"Hall"}],
    sentences: [
      { id: 'ws-n5-182-1', sentence: '大学の食堂でお昼ご飯を食べます。', furigana: 'だいがく の しょくどう で おひるごはん を たべます。', romaji: 'Daigaku no shokudou de ohirugohan o tabemasu.', english: 'I eat lunch at the university cafeteria.' },
      { id: 'ws-n5-182-2', sentence: 'この食堂はいつも賑やかです。', furigana: 'この しょくどう は いつも にぎやか です。', romaji: 'Kono shokudou wa itsumo nigiyaka desu.', english: 'This cafeteria is always lively.' }
    ]
  },
  {
    id: 'w-n5-183',
    word: 'スーパー',
    reading: 'スーパー',
    romaji: 'suupaa',
    meaning: 'Supermarket',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-183-1', sentence: 'スーパーで買い物をします。', furigana: 'スーパー で かいもの を します。', romaji: 'Suupaa de kaimono o shimasu.', english: 'I shop at the supermarket.' },
      { id: 'ws-n5-183-2', sentence: '駅の前に大きなスーパーがあります。', furigana: 'えき の まえ に おおきな スーパー が あります。', romaji: 'Eki no mae ni ookina suupaa ga arimasu.', english: 'There is a big supermarket in front of the station.' }
    ]
  },
  {
    id: 'w-n5-184',
    word: '八百屋',
    reading: 'やおや',
    romaji: 'yaoya',
    meaning: 'Greengrocer / Vegetable store',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"八","meaning":"Eight"},{"char":"百","meaning":"Hundred"},{"char":"屋","meaning":"Shop"}],
    sentences: [
      { id: 'ws-n5-184-1', sentence: '八百屋で新鮮な野菜を買いました。', furigana: 'やおや で しんせん な やさい を かいました。', romaji: 'Yaoya de shinsen na yasai o kaimashita.', english: 'I bought fresh vegetables at the greengrocer.' },
      { id: 'ws-n5-184-2', sentence: 'あの八百屋の果物は安いです。', furigana: 'あの やおや の くだもの は やすい です。', romaji: 'Ano yaoya no kudamono wa yasui desu.', english: 'That greengrocer\'s fruit is cheap.' }
    ]
  },
  {
    id: 'w-n5-185',
    word: '肉屋',
    reading: 'にくや',
    romaji: 'nikuya',
    meaning: 'Butcher shop',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"肉","meaning":"Meat"},{"char":"屋","meaning":"Shop"}],
    sentences: [
      { id: 'ws-n5-185-1', sentence: '肉屋で牛肉を買いました。', furigana: 'にくや で ぎゅうにく を かいました。', romaji: 'Nikuya de gyuuniku o kaimashita.', english: 'I bought beef at the butcher shop.' },
      { id: 'ws-n5-185-2', sentence: 'この肉屋のお肉はとても美味しいです。', furigana: 'この にくや の おにく は とても おいしい です。', romaji: 'Kono nikuya no oniku wa totemo oishii desu.', english: 'This butcher shop\'s meat is very delicious.' }
    ]
  },
  {
    id: 'w-n5-186',
    word: '魚屋',
    reading: 'さかなや',
    romaji: 'sakanaya',
    meaning: 'Fishmonger / Fish market',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"魚","meaning":"Fish"},{"char":"屋","meaning":"Shop"}],
    sentences: [
      { id: 'ws-n5-186-1', sentence: '魚屋で新鮮な魚を買いました。', furigana: 'さかなや で しんせん な さかな を かいました。', romaji: 'Sakanaya de shinsen na sakana o kaimashita.', english: 'I bought fresh fish at the fishmonger.' },
      { id: 'ws-n5-186-2', sentence: '近所に魚屋があります。', furigana: 'きんじょ に さかなや が あります。', romaji: 'Kinjo ni sakanaya ga arimasu.', english: 'There is a fishmonger in the neighborhood.' }
    ]
  },
  {
    id: 'w-n5-187',
    word: '本屋',
    reading: 'ほんや',
    romaji: 'hon-ya',
    meaning: 'Bookstore',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"本","meaning":"Book"},{"char":"屋","meaning":"Shop"}],
    sentences: [
      { id: 'ws-n5-187-1', sentence: '本屋で日本語の教科書を買いました。', furigana: 'ほんや で にほんご の きょうかしょ を かいました。', romaji: 'Hon\'ya de nihongo no kyoukasho o kaimashita.', english: 'I bought a Japanese textbook at the bookstore.' },
      { id: 'ws-n5-187-2', sentence: '駅の中に小さな本屋があります。', furigana: 'えき の なか に ちいさな ほんや が あります。', romaji: 'Eki no naka ni chiisana hon\'ya ga arimasu.', english: 'There is a small bookstore inside the station.' }
    ]
  },
  {
    id: 'w-n5-188',
    word: '花屋',
    reading: 'はなや',
    romaji: 'hanaya',
    meaning: 'Florist / Flower shop',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"花","meaning":"Flower"},{"char":"屋","meaning":"Shop"}],
    sentences: [
      { id: 'ws-n5-188-1', sentence: '花屋できれいな花を買いました。', furigana: 'はなや で きれい な はな を かいました。', romaji: 'Hanaya de kirei na hana o kaimashita.', english: 'I bought pretty flowers at the flower shop.' },
      { id: 'ws-n5-188-2', sentence: '母の日に花屋へ行きました。', furigana: 'はは の ひ に はなや へ いきました。', romaji: 'Haha no hi ni hanaya e ikimashita.', english: 'I went to the florist on Mother\'s Day.' }
    ]
  },
  {
    id: 'w-n5-189',
    word: 'パン屋',
    reading: 'パンや',
    romaji: 'panya',
    meaning: 'Bakery',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"屋","meaning":"Shop"}],
    sentences: [
      { id: 'ws-n5-189-1', sentence: '毎朝、パン屋で焼きたてのパンを買います。', furigana: 'まいあさ、パンや で やきたて の パン を かいます。', romaji: 'Maiasa, pan\'ya de yakitate no pan o kaimasu.', english: 'Every morning, I buy freshly baked bread at the bakery.' },
      { id: 'ws-n5-189-2', sentence: 'あのパン屋はとても人気があります。', furigana: 'あの パンや は とても にんき が あります。', romaji: 'Ano pan\'ya wa totemo ninki ga arimasu.', english: 'That bakery is very popular.' }
    ]
  },
  {
    id: 'w-n5-190',
    word: '薬屋',
    reading: 'くすりや',
    romaji: 'kusuriya',
    meaning: 'Pharmacy / Drugstore',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"薬","meaning":"Medicine"},{"char":"屋","meaning":"Shop"}],
    sentences: [
      { id: 'ws-n5-190-1', sentence: '風邪薬を買いに薬屋へ行きました。', furigana: 'かぜぐすり を かい に くすりや へ いきました。', romaji: 'Kazegusuri o kai ni kusuriya e ikimashita.', english: 'I went to the drugstore to buy cold medicine.' },
      { id: 'ws-n5-190-2', sentence: '駅の近くに薬屋があります。', furigana: 'えき の ちかく に くすりや が あります。', romaji: 'Eki no chikaku ni kusuriya ga arimasu.', english: 'There is a pharmacy near the station.' }
    ]
  },
  {
    id: 'w-n5-191',
    word: '買い物',
    reading: 'かいもの',
    romaji: 'kaimono',
    meaning: 'Shopping',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"買","meaning":"Buy"},{"char":"物","meaning":"Thing"}],
    sentences: [
      { id: 'ws-n5-191-1', sentence: '週末にデパートで買い物をします。', furigana: 'しゅうまつ に デパート で かいもの を します。', romaji: 'Shuumatsu ni depaato de kaimono o shimasu.', english: 'I do shopping at the department store on weekends.' },
      { id: 'ws-n5-191-2', sentence: '友達と一緒に買い物に行きました。', furigana: 'ともだち と いっしょ に かいもの に いきました。', romaji: 'Tomodachi to issho ni kaimono ni ikimashita.', english: 'I went shopping together with my friend.' }
    ]
  },
  {
    id: 'w-n5-192',
    word: 'お金',
    reading: 'おかね',
    romaji: 'okane',
    meaning: 'Money',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"金","meaning":"Gold / Money"}],
    sentences: [
      { id: 'ws-n5-192-1', sentence: '財布にお金が入っています。', furigana: 'さいふ に おかね が はいって います。', romaji: 'Saifu ni okane ga haitte imasu.', english: 'There is money in the wallet.' },
      { id: 'ws-n5-192-2', sentence: 'お金を大切に使います。', furigana: 'おかね を たいせつ に つかいます。', romaji: 'Okane o taisetsu ni tsukaimasu.', english: 'I spend money carefully.' }
    ]
  },
  {
    id: 'w-n5-193',
    word: '円',
    reading: 'えん',
    romaji: 'en',
    meaning: 'Yen (Japanese currency)',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"円","meaning":"Yen / Circle"}],
    sentences: [
      { id: 'ws-n5-193-1', sentence: 'このリンゴは百円です。', furigana: 'この リンゴ は ひゃくえん です。', romaji: 'Kono ringo wa hyakuen desu.', english: 'This apple is 100 yen.' },
      { id: 'ws-n5-193-2', sentence: '千円札を一枚出しました。', furigana: 'せんえんさつ を いちまい だしました。', romaji: 'Sen\'ensatsu o ichimai dashimashita.', english: 'I took out a 1,000 yen bill.' }
    ]
  },
  {
    id: 'w-n5-194',
    word: '財布',
    reading: 'さいふ',
    romaji: 'saifu',
    meaning: 'Wallet / Purse',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"財","meaning":"Wealth"},{"char":"布","meaning":"Cloth"}],
    sentences: [
      { id: 'ws-n5-194-1', sentence: '鞄から財布を出しました。', furigana: 'かばん から さいふ を だしました。', romaji: 'Kaban kara saifu o dashimashita.', english: 'I took my wallet out of the bag.' },
      { id: 'ws-n5-194-2', sentence: '新しい財布を買いました。', furigana: 'あたらしい さいふ を かいました。', romaji: 'Atarashii saifu o kaimashita.', english: 'I bought a new wallet.' }
    ]
  },
  {
    id: 'w-n5-195',
    word: 'レシート',
    reading: 'レシート',
    romaji: 'reshiito',
    meaning: 'Receipt',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-195-1', sentence: 'お店でレシートをもらいました。', furigana: 'おみせ で レシート を もらいました。', romaji: 'Omise de reshiito o moraimashita.', english: 'I received a receipt at the shop.' },
      { id: 'ws-n5-195-2', sentence: 'レシートはいりません。', furigana: 'レシート は いりません。', romaji: 'Reshiito wa irimasen.', english: 'I don\'t need a receipt.' }
    ]
  },
  {
    id: 'w-n5-196',
    word: '値段',
    reading: 'ねだん',
    romaji: 'nedan',
    meaning: 'Price / Cost',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"値","meaning":"Value / Price"},{"char":"段","meaning":"Step / Grade"}],
    sentences: [
      { id: 'ws-n5-196-1', sentence: 'この時計の値段はいくらですか。', furigana: 'この とけい の ねだん は いくら です か。', romaji: 'Kono tokei no nedan wa ikura desu ka.', english: 'What is the price of this watch?' },
      { id: 'ws-n5-196-2', sentence: 'その本の値段は安いです。', furigana: 'その ほん の ねだん は やすい です。', romaji: 'Sono hon no nedan wa yasui desu.', english: 'The price of that book is cheap.' }
    ]
  },
  {
    id: 'w-n5-197',
    word: '注文',
    reading: 'ちゅうもん',
    romaji: 'chuumon',
    meaning: 'Order / Request',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"注","meaning":"Pour / Concentrate"},{"char":"文","meaning":"Sentence / Literature"}],
    sentences: [
      { id: 'ws-n5-197-1', sentence: 'レストランで料理を注文します。', furigana: 'レストラン で りょうり を ちゅうもん します。', romaji: 'Resutoran de ryouri o chuumon shimasu.', english: 'I order food at the restaurant.' },
      { id: 'ws-n5-197-2', sentence: '注文をお願いします。', furigana: 'ちゅうもん を おねがい します。', romaji: 'Chuumon o onegai shimasu.', english: 'We are ready to order, please.' }
    ]
  },
  {
    id: 'w-n5-198',
    word: 'メニュー',
    reading: 'メニュー',
    romaji: 'menyuu',
    meaning: 'Menu',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-198-1', sentence: 'メニューを見せてください。', furigana: 'メニュー を みせて ください。', romaji: 'Menyuu o misete kudasai.', english: 'Please show me the menu.' },
      { id: 'ws-n5-198-2', sentence: 'メニューに美味しそうな料理がたくさんあります。', furigana: 'メニュー に おいしそう な りょうり が たくさん あります。', romaji: 'Menyuu ni oishisou na ryouri ga takusan arimasu.', english: 'There are many delicious dishes on the menu.' }
    ]
  },
  {
    id: 'w-n5-199',
    word: '味',
    reading: 'あじ',
    romaji: 'aji',
    meaning: 'Flavor / Taste',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"味","meaning":"Flavor / Taste"}],
    sentences: [
      { id: 'ws-n5-199-1', sentence: 'このスープはとてもいい味です。', furigana: 'この スープ は とても いい あじ です。', romaji: 'Kono suupu wa totemo ii aji desu.', english: 'This soup has a very good flavor.' },
      { id: 'ws-n5-199-2', sentence: '日本料理の味を覚えました。', furigana: 'にほんりょうり の あじ を おぼえました。', romaji: 'Nihonryouri no aji o oboemashita.', english: 'I learned the taste of Japanese food.' }
    ]
  },
  {
    id: 'w-n5-200',
    word: '美味しい',
    reading: 'おいしい',
    romaji: 'oishii',
    meaning: 'Delicious / Tasty',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"美","meaning":"Beauty"},{"char":"味","meaning":"Taste"}],
    sentences: [
      { id: 'ws-n5-200-1', sentence: 'このラーメンはとても美味しいです。', furigana: 'この ラーメン は とても おいしい です。', romaji: 'Kono raamen wa totemo oishii desu.', english: 'This ramen is very delicious.' },
      { id: 'ws-n5-200-2', sentence: '美味しいケーキを食べました。', furigana: 'おいしい ケーキ を たべました。', romaji: 'Oishii keeki o tabemashita.', english: 'I ate a delicious cake.' }
    ]
  },
  {
    id: 'w-n5-201',
    word: 'まずい',
    reading: 'まずい',
    romaji: 'mazui',
    meaning: 'Bad-tasting / Unpalatable',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-201-1', sentence: 'この薬は少しまずいです。', furigana: 'この くすり は すこし まずい です。', romaji: 'Kono kusuri wa sukoshi mazui desu.', english: 'This medicine tastes a bit bad.' },
      { id: 'ws-n5-201-2', sentence: 'まずい料理は食べたくないです。', furigana: 'まずい りょうり は たべたくない です。', romaji: 'Mazui ryouri wa tabetakunai desu.', english: 'I do not want to eat bad food.' }
    ]
  },
  {
    id: 'w-n5-202',
    word: '甘い',
    reading: 'あまい',
    romaji: 'amai',
    meaning: 'Sweet',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"甘","meaning":"Sweet"}],
    sentences: [
      { id: 'ws-n5-202-1', sentence: 'このケーキは甘くて美味しいです。', furigana: 'この ケーキ は あまくて おいしい です。', romaji: 'Kono keeki wa amakute oishii desu.', english: 'This cake is sweet and delicious.' },
      { id: 'ws-n5-202-2', sentence: '甘いお菓子が好きです。', furigana: 'あまい おかし が すき です。', romaji: 'Amai okashi ga suki desu.', english: 'I like sweet snacks.' }
    ]
  },
  {
    id: 'w-n5-203',
    word: '辛い',
    reading: 'からい',
    romaji: 'karai',
    meaning: 'Spicy / Hot',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"辛","meaning":"Spicy / Bitter"}],
    sentences: [
      { id: 'ws-n5-203-1', sentence: 'このカレーはとても辛いです。', furigana: 'この カレー は とても からい です。', romaji: 'Kono karee wa totemo karai desu.', english: 'This curry is very spicy.' },
      { id: 'ws-n5-203-2', sentence: '辛い料理を食べると汗が出ます。', furigana: 'からい りょうり を たべる と あせ が でます。', romaji: 'Karai ryouri o taberu to ase ga demasu.', english: 'When I eat spicy food, I sweat.' }
    ]
  },
  {
    id: 'w-n5-204',
    word: '苦い',
    reading: 'にがい',
    romaji: 'nigai',
    meaning: 'Bitter',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"苦","meaning":"Bitter / Hardship"}],
    sentences: [
      { id: 'ws-n5-204-1', sentence: 'このコーヒーは少し苦いです。', furigana: 'この コーヒー は すこし にがい です。', romaji: 'Kono koohii wa sukoshi nigai desu.', english: 'This coffee is a little bitter.' },
      { id: 'ws-n5-204-2', sentence: '苦いお茶を飲みました。', furigana: 'にがい おちゃ を のみました。', romaji: 'Nigai ocha o nomimashita.', english: 'I drank bitter tea.' }
    ]
  },
  {
    id: 'w-n5-205',
    word: '酸っぱい',
    reading: 'すっぱい',
    romaji: 'suppai',
    meaning: 'Sour',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-205-1', sentence: 'このレモンはとても酸っぱいです。', furigana: 'この レモン は とても すっぱい です。', romaji: 'Kono remon wa totemo suppai desu.', english: 'This lemon is very sour.' },
      { id: 'ws-n5-205-2', sentence: '酸っぱいリンゴを食べました。', furigana: 'すっぱい リンゴ を たべました。', romaji: 'Suppai ringo o tabemashita.', english: 'I ate a sour apple.' }
    ]
  },
  {
    id: 'w-n5-206',
    word: '塩辛い',
    reading: 'しおからい',
    romaji: 'shiokarai',
    meaning: 'Salty',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"塩","meaning":"Salt"},{"char":"辛","meaning":"Spicy"}],
    sentences: [
      { id: 'ws-n5-206-1', sentence: 'このスープは少し塩辛いです。', furigana: 'この スープ は すこし しおからい です。', romaji: 'Kono suupu wa sukoshi shiokarai desu.', english: 'This soup is a little salty.' },
      { id: 'ws-n5-206-2', sentence: '塩辛い食べ物を食べ過ぎないでください。', furigana: 'しおからい たべもの を たべすぎないで ください。', romaji: 'Shiokarai tabemono o tabesuginaide kudasai.', english: 'Please do not eat too much salty food.' }
    ]
  },
  {
    id: 'w-n5-207',
    word: 'お腹',
    reading: 'おなか',
    romaji: 'onaka',
    meaning: 'Stomach / Belly',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-207-1', sentence: 'お腹がすきました。', furigana: 'おなか が すきました。', romaji: 'Onaka ga sukimashita.', english: 'I am hungry.' },
      { id: 'ws-n5-207-2', sentence: 'ご飯をたくさん食べてお腹がいっぱいです。', furigana: 'ごはん を たくさん たべて おなか が いっぱい です。', romaji: 'Gohan o takusan tabete onaka ga ippai desu.', english: 'I ate a lot and my stomach is full.' }
    ]
  },
  {
    id: 'w-n5-208',
    word: '喉',
    reading: 'のど',
    romaji: 'nodo',
    meaning: 'Throat',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-208-1', sentence: '走ったので喉が渇きました。', furigana: 'はしった ので のど が かわきました。', romaji: 'Hashitta node nodo ga kawakimashita.', english: 'Because I ran, I am thirsty.' },
      { id: 'ws-n5-208-2', sentence: '冷たい水を飲んで喉を潤しました。', furigana: 'つめたい みず を のんで のど を うるおしました。', romaji: 'Tsumetai mizu o nonde nodo o uruoshimashita.', english: 'I drank cold water to refresh my throat.' }
    ]
  },
  {
    id: 'w-n5-209',
    word: '家',
    reading: 'いえ',
    romaji: 'ie',
    meaning: 'House / Home',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"家","meaning":"House"}],
    sentences: [
      { id: 'ws-n5-209-1', sentence: '私は新しい家に住んでいます。', furigana: 'わたし は あたらしい いえ に すんで います。', romaji: 'Watashi wa atarashii ie ni sunde imasu.', english: 'I live in a new house.' },
      { id: 'ws-n5-209-2', sentence: '五時に家に帰ります。', furigana: 'ごじ に いえ に かえります。', romaji: 'Goji ni ie ni kaerimasu.', english: 'I go home at 5 o\'clock.' }
    ]
  },
  {
    id: 'w-n5-210',
    word: 'うち',
    reading: 'うち',
    romaji: 'uchi',
    meaning: 'My home / Household',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-210-1', sentence: '今日の夜、うちに遊びに来てください。', furigana: 'きょう の よる、うち に あそび に きて ください。', romaji: 'Kyou no yoru, uchi ni asobi ni kite kudasai.', english: 'Please come over to my home tonight.' },
      { id: 'ws-n5-210-2', sentence: '私のうちは駅から近いです。', furigana: 'わたし の うち は えき から ちかい です。', romaji: 'Watashi no uchi wa eki kara chikai desu.', english: 'My home is near the station.' }
    ]
  },
  {
    id: 'w-n5-211',
    word: 'アパート',
    reading: 'アパート',
    romaji: 'apaato',
    meaning: 'Apartment',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-211-1', sentence: '私は静かなアパートに住んでいます。', furigana: 'わたし は しずか な アパート に すんで います。', romaji: 'Watashi wa shizuka na apaato ni sunde imasu.', english: 'I live in a quiet apartment.' },
      { id: 'ws-n5-211-2', sentence: '駅の近くに新しいアパートがあります。', furigana: 'えき の ちかく に あたらしい アパート が あります。', romaji: 'Eki no chikaku ni atarashii apaato ga arimasu.', english: 'There is a new apartment near the station.' }
    ]
  },
  {
    id: 'w-n5-212',
    word: '玄関',
    reading: 'げんかん',
    romaji: 'genkan',
    meaning: 'Entrance hall / Foyer',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"玄","meaning":"Mysterious / Deep"},{"char":"関","meaning":"Barrier / Gateway"}],
    sentences: [
      { id: 'ws-n5-212-1', sentence: '玄関で靴を脱ぎます。', furigana: 'げんかん で くつ を ぬぎます。', romaji: 'Genkan de kutsu o nugimasu.', english: 'I take off shoes at the entrance.' },
      { id: 'ws-n5-212-2', sentence: '玄関のドアを開けました。', furigana: 'げんかん の ドア を あけました。', romaji: 'Genkan no doa o akemashita.', english: 'I opened the front door.' }
    ]
  },
  {
    id: 'w-n5-213',
    word: '台所',
    reading: 'だいどころ',
    romaji: 'daidokoro',
    meaning: 'Kitchen',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"台","meaning":"Platform"},{"char":"所","meaning":"Place"}],
    sentences: [
      { id: 'ws-n5-213-1', sentence: '母は台所で料理を作っています。', furigana: 'はは は だいどころ で りょうり を つくって います。', romaji: 'Haha wa daidokoro de ryouri o tsukutte imasu.', english: 'My mother is cooking in the kitchen.' },
      { id: 'ws-n5-213-2', sentence: '台所をきれいに掃除しました。', furigana: 'だいどころ を きれい に そうじ しました。', romaji: 'Daidokoro o kirei ni souji shimashita.', english: 'I cleaned the kitchen neatly.' }
    ]
  },
  {
    id: 'w-n5-214',
    word: '風呂',
    reading: 'ふろ',
    romaji: 'furo',
    meaning: 'Bath',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"風","meaning":"Wind"},{"char":"呂","meaning":"Spine"}],
    sentences: [
      { id: 'ws-n5-214-1', sentence: '毎晩、お風呂に入ります。', furigana: 'まいばん、おふろ に はいります。', romaji: 'Maiban, ofuro ni hairimasu.', english: 'Every night, I take a bath.' },
      { id: 'ws-n5-214-2', sentence: 'お風呂をきれいに洗いました。', furigana: 'おふろ を きれい に あらいました。', romaji: 'Ofuro o kirei ni araimashita.', english: 'I cleaned the bath neatly.' }
    ]
  },
  {
    id: 'w-n5-215',
    word: 'お風呂',
    reading: 'おふろ',
    romaji: 'ofuro',
    meaning: 'Bath (polite)',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"風","meaning":"Wind"},{"char":"呂","meaning":"Spine"}],
    sentences: [
      { id: 'ws-n5-215-1', sentence: '温かいお風呂に入りましょう。', furigana: 'あたたかい おふろ に はいりましょう。', romaji: 'Atatakai ofuro ni hairimashou.', english: 'Let\'s take a warm bath.' },
      { id: 'ws-n5-215-2', sentence: 'お風呂から出ました。', furigana: 'おふろ から でました。', romaji: 'Ofuro kara demashita.', english: 'I got out of the bath.' }
    ]
  },
  {
    id: 'w-n5-216',
    word: 'トイレ',
    reading: 'トイレ',
    romaji: 'toire',
    meaning: 'Toilet / Restroom',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-216-1', sentence: 'トイレはどこですか。', furigana: 'トイレ は どこ です か。', romaji: 'Toire wa doko desu ka.', english: 'Where is the restroom?' },
      { id: 'ws-n5-216-2', sentence: 'ちょっとトイレに行ってきます。', furigana: 'ちょっと トイレ に いって きます。', romaji: 'Chotto toire ni itte kimasu.', english: 'I am going to the restroom for a moment.' }
    ]
  },
  {
    id: 'w-n5-217',
    word: 'お手洗い',
    reading: 'おてあらい',
    romaji: 'otearai',
    meaning: 'Restroom / Washroom (polite)',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"手","meaning":"Hand"},{"char":"洗","meaning":"Wash"}],
    sentences: [
      { id: 'ws-n5-217-1', sentence: 'お手洗いはあちらにあります。', furigana: 'おてあらい は あちら に あります。', romaji: 'Otearai wa achira ni arimasu.', english: 'The washroom is over there.' },
      { id: 'ws-n5-217-2', sentence: 'お手洗いを貸してください。', furigana: 'おてあらい を かして ください。', romaji: 'Otearai o kashite kudasai.', english: 'May I use the washroom?' }
    ]
  },
  {
    id: 'w-n5-218',
    word: '階段',
    reading: 'かいだん',
    romaji: 'kaidan',
    meaning: 'Stairs / Staircase',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"階","meaning":"Storey"},{"char":"段","meaning":"Step"}],
    sentences: [
      { id: 'ws-n5-218-1', sentence: '階段を上って二階へ行きます。', furigana: 'かいだん を のぼって にかい へ いきます。', romaji: 'Kaidan o nobotte nikai e ikimasu.', english: 'I go up the stairs to the second floor.' },
      { id: 'ws-n5-218-2', sentence: '気をつけて階段を降りてください。', furigana: 'き を つけて かいだん を おりて ください。', romaji: 'Ki o tsukete kaidan o orite kudasai.', english: 'Please go down the stairs carefully.' }
    ]
  },
  {
    id: 'w-n5-219',
    word: '廊下',
    reading: 'ろうか',
    romaji: 'rouka',
    meaning: 'Corridor / Hallway',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"廊","meaning":"Corridor"},{"char":"下","meaning":"Below"}],
    sentences: [
      { id: 'ws-n5-219-1', sentence: '廊下を静かに歩いてください。', furigana: 'ろうか を しずかに あるいて ください。', romaji: 'Rouka o shizukani aruite kudasai.', english: 'Please walk quietly in the hallway.' },
      { id: 'ws-n5-219-2', sentence: '廊下にきれいな絵があります。', furigana: 'ろうか に きれい な え が あります。', romaji: 'Rouka ni kirei na e ga arimasu.', english: 'There is a pretty picture in the hallway.' }
    ]
  },
  {
    id: 'w-n5-220',
    word: '庭',
    reading: 'にわ',
    romaji: 'niwa',
    meaning: 'Garden / Yard',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"庭","meaning":"Garden"}],
    sentences: [
      { id: 'ws-n5-220-1', sentence: '家の庭に花がたくさん咲いています。', furigana: 'いえ の にわ に はな が たくさん さいて います。', romaji: 'Ie no niwa ni hana ga takusan saite imasu.', english: 'Many flowers are blooming in the yard of the house.' },
      { id: 'ws-n5-220-2', sentence: '犬が庭で元気に遊んでいます。', furigana: 'いぬ が にわ で げんき に あそんで います。', romaji: 'Inu ga niwa de genki ni asonde imasu.', english: 'The dog is playing energetically in the yard.' }
    ]
  },
  {
    id: 'w-n5-221',
    word: '門',
    reading: 'もん',
    romaji: 'mon',
    meaning: 'Gate',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"門","meaning":"Gate"}],
    sentences: [
      { id: 'ws-n5-221-1', sentence: '家の門を閉めました。', furigana: 'いえ の もん を しめました。', romaji: 'Ie no mon o shimemashita.', english: 'I closed the gate of the house.' },
      { id: 'ws-n5-221-2', sentence: '学校の門の前に集まりました。', furigana: 'がっこう の もん の まえ に あつまりました。', romaji: 'Gakkou no mon no mae ni atsumarimashita.', english: 'We gathered in front of the school gate.' }
    ]
  },
  {
    id: 'w-n5-222',
    word: '壁',
    reading: 'かべ',
    romaji: 'kabe',
    meaning: 'Wall',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"壁","meaning":"Wall"}],
    sentences: [
      { id: 'ws-n5-222-1', sentence: '壁にきれいなポスターを貼りました。', furigana: 'かべ に きれい な ポスター を はりました。', romaji: 'Kabe ni kirei na posutaa o harimashita.', english: 'I put a nice poster on the wall.' },
      { id: 'ws-n5-222-2', sentence: '部屋の壁は白いです。', furigana: 'へや の かべ は しろい です。', romaji: 'Heya no kabe wa shiroi desu.', english: 'The wall of the room is white.' }
    ]
  },
  {
    id: 'w-n5-223',
    word: '天井',
    reading: 'てんじょう',
    romaji: 'tenjou',
    meaning: 'Ceiling',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"天","meaning":"Heaven"},{"char":"井","meaning":"Well"}],
    sentences: [
      { id: 'ws-n5-223-1', sentence: '天井に明るい電灯があります。', furigana: 'てんじょう に あかるい でんとう が あります。', romaji: 'Tenjou ni akarui dentou ga arimasu.', english: 'There is a bright light on the ceiling.' },
      { id: 'ws-n5-223-2', sentence: 'この部屋は天井が高いです。', furigana: 'この へや は てんじょう が たかい です。', romaji: 'Kono heya wa tenjou ga takai desu.', english: 'This room has a high ceiling.' }
    ]
  },
  {
    id: 'w-n5-224',
    word: '床',
    reading: 'ゆか',
    romaji: 'yuka',
    meaning: 'Floor',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"床","meaning":"Bed / Floor"}],
    sentences: [
      { id: 'ws-n5-224-1', sentence: '床をきれいに拭きました。', furigana: 'ゆか を きれい に ふきました。', romaji: 'Yuka o kirei ni fukimashita.', english: 'I wiped the floor cleanly.' },
      { id: 'ws-n5-224-2', sentence: '床に本を置かないでください。', furigana: 'ゆか に ほん を おかないで ください。', romaji: 'Yuka ni hon o okanaide kudasai.', english: 'Please don\'t put books on the floor.' }
    ]
  },
  {
    id: 'w-n5-225',
    word: 'ベッド',
    reading: 'ベッド',
    romaji: 'beddo',
    meaning: 'Bed',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-225-1', sentence: '毎晩十時にベッドに入ります。', furigana: 'まいばん じゅうじ に ベッド に はいります。', romaji: 'Maiban juuji ni beddo ni hairimasu.', english: 'Every night, I get into bed at 10.' },
      { id: 'ws-n5-225-2', sentence: 'このベッドはとても柔らかいです。', furigana: 'この ベッド は とても やわらかい です。', romaji: 'Kono beddo wa totemo yawarakai desu.', english: 'This bed is very soft.' }
    ]
  },
  {
    id: 'w-n5-226',
    word: '布団',
    reading: 'ふとん',
    romaji: 'futon',
    meaning: 'Futon / Japanese bedding',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"布","meaning":"Cloth"},{"char":"団","meaning":"Group / Round"}],
    sentences: [
      { id: 'ws-n5-226-1', sentence: '畳の上に布団を敷きます。', furigana: 'たたみ の うえ に ふとん を しきます。', romaji: 'Tatami no ue ni futon o shikimasu.', english: 'I lay out the futon on the tatami.' },
      { id: 'ws-n5-226-2', sentence: '朝起きて布団を畳みました。', furigana: 'あさ おきて ふとん を たたみました。', romaji: 'Asa okite futon o tatamimashita.', english: 'I woke up and folded the futon.' }
    ]
  },
  {
    id: 'w-n5-227',
    word: '枕',
    reading: 'まくら',
    romaji: 'makura',
    meaning: 'Pillow',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-227-1', sentence: '柔らかい枕を使って寝ます。', furigana: 'やわらかい まくら を つかって ねます。', romaji: 'Yawarakai makura o tsukatte nemasu.', english: 'I sleep using a soft pillow.' },
      { id: 'ws-n5-227-2', sentence: '新しい枕を買いました。', furigana: 'あたらしい まくら を かいました。', romaji: 'Atarashii makura o kaimashita.', english: 'I bought a new pillow.' }
    ]
  },
  {
    id: 'w-n5-228',
    word: 'テーブル',
    reading: 'テーブル',
    romaji: 'teeburu',
    meaning: 'Table',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-228-1', sentence: 'テーブルの上に料理を並べます。', furigana: 'テーブル の うえ に りょうり を ならべます。', romaji: 'Teeburu no ue ni ryouri o narabemasu.', english: 'I arrange dishes on the table.' },
      { id: 'ws-n5-228-2', sentence: '家族と一緒にテーブルに座りました。', furigana: 'かぞく と いっしょ に テーブル に すわりました。', romaji: 'Kazoku to issho ni teeburu ni suwarimashita.', english: 'I sat at the table with my family.' }
    ]
  },
  {
    id: 'w-n5-229',
    word: 'ソファ',
    reading: 'ソファ',
    romaji: 'sofa',
    meaning: 'Sofa / Couch',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-229-1', sentence: 'ソファに座ってテレビを見ます。', furigana: 'ソファ に すわって テレビ を みます。', romaji: 'Sofa ni suwatte terebi o mimasu.', english: 'I sit on the sofa and watch TV.' },
      { id: 'ws-n5-229-2', sentence: 'このソファはとても座りやすいです。', furigana: 'この ソファ は とても すわりやすい です。', romaji: 'Kono sofa wa totemo suwariyasui desu.', english: 'This sofa is very comfortable to sit on.' }
    ]
  },
  {
    id: 'w-n5-230',
    word: 'テレビ',
    reading: 'テレビ',
    romaji: 'terebi',
    meaning: 'Television / TV',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-230-1', sentence: '晩ご飯の後にテレビを見ます。', furigana: 'ばんごはん の あと に テレビ を みます。', romaji: 'Bangohan no ato ni terebi o mimasu.', english: 'I watch TV after dinner.' },
      { id: 'ws-n5-230-2', sentence: '部屋のテレビを消してください。', furigana: 'へや の テレビ を けして ください。', romaji: 'Heya no terebi o keshite kudasai.', english: 'Please turn off the TV in the room.' }
    ]
  },
  {
    id: 'w-n5-231',
    word: 'ラジオ',
    reading: 'ラジオ',
    romaji: 'rajio',
    meaning: 'Radio',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    sentences: [
      { id: 'ws-n5-231-1', sentence: '毎朝、ラジオでニュースを聞きます。', furigana: 'まいあさ、ラジオ で ニュース を ききます。', romaji: 'Maiasa, rajio de nyuusu o kikimasu.', english: 'Every morning, I listen to the news on the radio.' },
      { id: 'ws-n5-231-2', sentence: 'ラジオの音楽が好きです。', furigana: 'ラジオ の おんがく が すき です。', romaji: 'Rajio no ongaku ga suki desu.', english: 'I like radio music.' }
    ]
  },
  {
    id: 'w-n5-232',
    word: '冷蔵庫',
    reading: 'れいぞうこ',
    romaji: 'reizouko',
    meaning: 'Refrigerator / Fridge',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"冷","meaning":"Cold"},{"char":"蔵","meaning":"Storehouse"},{"char":"庫","meaning":"Warehouse"}],
    sentences: [
      { id: 'ws-n5-232-1', sentence: '牛乳を冷蔵庫に入れます。', furigana: 'ぎゅうにゅう を れいぞうこ に いれます。', romaji: 'Gyuunyuu o reizouko ni iremasu.', english: 'I put milk into the refrigerator.' },
      { id: 'ws-n5-232-2', sentence: '冷蔵庫の中に冷たい水があります。', furigana: 'れいぞうこ の なか に つめたい みず が あります。', romaji: 'Reizouko no naka ni tsumetai mizu ga arimasu.', english: 'There is cold water in the refrigerator.' }
    ]
  },
  {
    id: 'w-n5-233',
    word: '洗濯機',
    reading: 'せんたくき',
    romaji: 'sentakuki',
    meaning: 'Washing machine',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"洗","meaning":"Wash"},{"char":"濯","meaning":"Rinse"},{"char":"機","meaning":"Machine"}],
    sentences: [
      { id: 'ws-n5-233-1', sentence: '洗濯機で服を洗います。', furigana: 'せんたくき で ふく を あらいます。', romaji: 'Sentakuki de fuku o araimasu.', english: 'I wash clothes in the washing machine.' },
      { id: 'ws-n5-233-2', sentence: '新しい洗濯機を買いました。', furigana: 'あたらしい せんたくき を かいました。', romaji: 'Atarashii sentakuki o kaimashita.', english: 'I bought a new washing machine.' }
    ]
  },
  {
    id: 'w-n5-234',
    word: '掃除機',
    reading: 'そうじき',
    romaji: 'soujiki',
    meaning: 'Vacuum cleaner',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"掃","meaning":"Sweep"},{"char":"除","meaning":"Remove"},{"char":"機","meaning":"Machine"}],
    sentences: [
      { id: 'ws-n5-234-1', sentence: '掃除機で部屋をきれいにします。', furigana: 'そうじき で へや を きれい に します。', romaji: 'Soujiki de heya o kirei ni shimasu.', english: 'I clean the room with a vacuum cleaner.' },
      { id: 'ws-n5-234-2', sentence: '日曜日に掃除機をかけました。', furigana: 'にちようび に そうじき を かけました。', romaji: 'Nichiyoubi ni soujiki o kakemashita.', english: 'I vacuumed on Sunday.' }
    ]
  }
,

  // ==========================================
  // === BATCH 3: TIME, DAYS, WEATHER, NATURE (w-n5-235 to w-n5-334) ===
  // ==========================================
  {
    id: 'w-n5-235',
    word: '朝',
    reading: 'あさ',
    romaji: 'asa',
    meaning: 'morning',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"朝","meaning":"Morning"}],
    sentences: [
      { id: 'ws-n5-235-1', sentence: '朝、六時に起きます。', furigana: 'あさ、ろくじ に おきます。', romaji: 'Asa, rokuji ni okimasu.', english: 'I wake up at 6 in the morning.' },
      { id: 'ws-n5-235-2', sentence: '朝の空気はとても気持ちがいいです。', furigana: 'あさ の くうき は とても きもち が いい です。', romaji: 'Asa no kuuki wa totemo kimochi ga ii desu.', english: 'The morning air feels very pleasant.' }
    ]
  },
  {
    id: 'w-n5-236',
    word: '昼',
    reading: 'ひる',
    romaji: 'hiru',
    meaning: 'noon, daytime',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"昼","meaning":"Noon / Daytime"}],
    sentences: [
      { id: 'ws-n5-236-1', sentence: '昼に友達とご飯を食べます。', furigana: 'ひる に ともだち と ごはん を たべます。', romaji: 'Hiru ni tomodachi to gohan o tabemasu.', english: 'I eat lunch with a friend at noon.' },
      { id: 'ws-n5-236-2', sentence: '昼の十二時に会いましょう。', furigana: 'ひる の じゅうにじ に あいましょう。', romaji: 'Hiru no juuniji ni aimashou.', english: 'Let\'s meet at 12 noon.' }
    ]
  },
  {
    id: 'w-n5-237',
    word: '晩',
    reading: 'ばん',
    romaji: 'ban',
    meaning: 'evening, night',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"晩","meaning":"Night / Evening"}],
    sentences: [
      { id: 'ws-n5-237-1', sentence: '今日の晩、何をしますか。', furigana: 'きょう の ばん、なに を します か。', romaji: 'Kyou no ban, nani o shimasu ka.', english: 'What will you do this evening?' },
      { id: 'ws-n5-237-2', sentence: '晩ご飯を食べました。', furigana: 'ばんごはん を たべました。', romaji: 'Bangohan o tabemashita.', english: 'I ate dinner.' }
    ]
  },
  {
    id: 'w-n5-238',
    word: '夜',
    reading: 'よる',
    romaji: 'yoru',
    meaning: 'night',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"夜","meaning":"Night"}],
    sentences: [
      { id: 'ws-n5-238-1', sentence: '夜十一時に寝ます。', furigana: 'よる じゅういちじ に ねます。', romaji: 'Yoru juuichiji ni nemasu.', english: 'I sleep at 11 at night.' },
      { id: 'ws-n5-238-2', sentence: '夜の街はとてもきれいです。', furigana: 'よる の まち は とても きれい です。', romaji: 'Yoru no machi wa totemo kirei desu.', english: 'The town at night is very pretty.' }
    ]
  },
  {
    id: 'w-n5-239',
    word: '今日',
    reading: 'きょう',
    romaji: 'kyou',
    meaning: 'today',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"今","meaning":"Now"},{"char":"日","meaning":"Day"}],
    sentences: [
      { id: 'ws-n5-239-1', sentence: '今日は天気がとてもいいです。', furigana: 'きょう は てんき が とても いい です。', romaji: 'Kyou wa tenki ga totemo ii desu.', english: 'The weather is very good today.' },
      { id: 'ws-n5-239-2', sentence: '今日、スーパーへ行きます。', furigana: 'きょう、スーパー へ いきます。', romaji: 'Kyou, suupaa e ikimasu.', english: 'Today I go to the supermarket.' }
    ]
  },
  {
    id: 'w-n5-240',
    word: '明日',
    reading: 'あした',
    romaji: 'ashita',
    meaning: 'tomorrow',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"明","meaning":"Bright"},{"char":"日","meaning":"Day"}],
    sentences: [
      { id: 'ws-n5-240-1', sentence: '明日、学校へ行きます。', furigana: 'あした、がっこう へ いきます。', romaji: 'Ashita, gakkou e ikimasu.', english: 'Tomorrow I will go to school.' },
      { id: 'ws-n5-240-2', sentence: '明日の午後、友達と会います。', furigana: 'あした の ごご、ともだち と あいます。', romaji: 'Ashita no gogo, tomodachi to aimasu.', english: 'Tomorrow afternoon, I will meet a friend.' }
    ]
  },
  {
    id: 'w-n5-241',
    word: '明後日',
    reading: 'あさって',
    romaji: 'asatte',
    meaning: 'day after tomorrow',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"明","meaning":"Bright"},{"char":"後","meaning":"After"},{"char":"日","meaning":"Day"}],
    sentences: [
      { id: 'ws-n5-241-1', sentence: '明後日、テストがあります。', furigana: 'あさって、テスト が あります。', romaji: 'Asatte, tesuto ga arimasu.', english: 'There is a test the day after tomorrow.' },
      { id: 'ws-n5-241-2', sentence: '明後日から旅行に行きます。', furigana: 'あさって から りょこう に いきます。', romaji: 'Asatte kara ryokou ni ikimasu.', english: 'I am going on a trip starting the day after tomorrow.' }
    ]
  },
  {
    id: 'w-n5-242',
    word: '昨日',
    reading: 'きのう',
    romaji: 'kinou',
    meaning: 'yesterday',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"昨","meaning":"Yesterday"},{"char":"日","meaning":"Day"}],
    sentences: [
      { id: 'ws-n5-242-1', sentence: '昨日、図書館で本を読みました。', furigana: 'きのう、としょかん で ほん を よみました。', romaji: 'Kinou, toshokan de hon o yomimashita.', english: 'Yesterday I read a book at the library.' },
      { id: 'ws-n5-242-2', sentence: '昨日は雨が降りました。', furigana: 'きのう は あめ が ふりました。', romaji: 'Kinou wa ame ga furimashita.', english: 'It rained yesterday.' }
    ]
  },
  {
    id: 'w-n5-243',
    word: '一昨日',
    reading: 'おととい',
    romaji: 'ototoi',
    meaning: 'day before yesterday',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"一","meaning":"One"},{"char":"昨","meaning":"Yesterday"},{"char":"日","meaning":"Day"}],
    sentences: [
      { id: 'ws-n5-243-1', sentence: '一昨日、デパートで服を買いました。', furigana: 'おととい、デパート で ふく を かいました。', romaji: 'Ototoi, depaato de fuku o kaimashita.', english: 'The day before yesterday, I bought clothes at the department store.' },
      { id: 'ws-n5-243-2', sentence: '一昨日はとても寒かったです。', furigana: 'おととい は とても さむかった です。', romaji: 'Ototoi wa totemo samukatta desu.', english: 'The day before yesterday was very cold.' }
    ]
  },
  {
    id: 'w-n5-244',
    word: '今朝',
    reading: 'けさ',
    romaji: 'kesa',
    meaning: 'this morning',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"今","meaning":"Now"},{"char":"朝","meaning":"Morning"}],
    sentences: [
      { id: 'ws-n5-244-1', sentence: '今朝、七時に起きました。', furigana: 'けさ、しちじ に おきました。', romaji: 'Kesa, shichiji ni okimashita.', english: 'This morning, I woke up at 7 o\'clock.' },
      { id: 'ws-n5-244-2', sentence: '今朝はコーヒーを飲みました。', furigana: 'けさ は コーヒー を のみました。', romaji: 'Kesa wa koohii o nomimashita.', english: 'This morning, I drank coffee.' }
    ]
  },
  {
    id: 'w-n5-245',
    word: '今晩',
    reading: 'こんばん',
    romaji: 'konban',
    meaning: 'tonight, this evening',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"今","meaning":"Now"},{"char":"晩","meaning":"Night"}],
    sentences: [
      { id: 'ws-n5-245-1', sentence: '今晩、カレーを食べましょう。', furigana: 'こんばん、カレー を たべましょう。', romaji: 'Konban, karee o tabemashou.', english: 'Let\'s eat curry tonight.' },
      { id: 'ws-n5-245-2', sentence: '今晩は早く寝ます。', furigana: 'こんばん は はやく ねます。', romaji: 'Konban wa hayaku nemasu.', english: 'Tonight I will sleep early.' }
    ]
  },
  {
    id: 'w-n5-246',
    word: '毎朝',
    reading: 'まいあさ',
    romaji: 'maiasa',
    meaning: 'every morning',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"毎","meaning":"Every"},{"char":"朝","meaning":"Morning"}],
    sentences: [
      { id: 'ws-n5-246-1', sentence: '毎朝、散歩をします。', furigana: 'まいあさ、さんぽ を します。', romaji: 'Maiasa, sanpo o shimasu.', english: 'Every morning, I take a walk.' },
      { id: 'ws-n5-246-2', sentence: '毎朝、パンと卵を食べます。', furigana: 'まいあさ、パン と たまご を たべます。', romaji: 'Maiasa, pan to tamago o tabemasu.', english: 'Every morning, I eat bread and eggs.' }
    ]
  },
  {
    id: 'w-n5-247',
    word: '毎晩',
    reading: 'まいばん',
    romaji: 'maiban',
    meaning: 'every night',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"毎","meaning":"Every"},{"char":"晩","meaning":"Night"}],
    sentences: [
      { id: 'ws-n5-247-1', sentence: '毎晩、十一時に寝ます。', furigana: 'まいばん、じゅういちじ に ねます。', romaji: 'Maiban, juuichiji ni nemasu.', english: 'Every night, I sleep at 11.' },
      { id: 'ws-n5-247-2', sentence: '毎晩、本を少し読みます。', furigana: 'まいばん、ほん を すこし よみます。', romaji: 'Maiban, hon o sukoshi yomimasu.', english: 'Every night, I read books for a little while.' }
    ]
  },
  {
    id: 'w-n5-248',
    word: '毎日',
    reading: 'まいにち',
    romaji: 'mainichi',
    meaning: 'every day',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"毎","meaning":"Every"},{"char":"日","meaning":"Day"}],
    sentences: [
      { id: 'ws-n5-248-1', sentence: '毎日、日本語を勉強します。', furigana: 'まいにち、にほんご を べんきょう します。', romaji: 'Mainichi, nihongo o benkyou shimasu.', english: 'Every day, I study Japanese.' },
      { id: 'ws-n5-248-2', sentence: '毎日、水をたくさん飲みます。', furigana: 'まいにち、みず を たくさん のみます。', romaji: 'Mainichi, mizu o takusan nomimasu.', english: 'Every day, I drink a lot of water.' }
    ]
  },
  {
    id: 'w-n5-249',
    word: '毎週',
    reading: 'まいしゅう',
    romaji: 'maishuu',
    meaning: 'every week',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"毎","meaning":"Every"},{"char":"週","meaning":"Week"}],
    sentences: [
      { id: 'ws-n5-249-1', sentence: '毎週日曜日に部屋を掃除します。', furigana: 'まいしゅう にちようび に へや を そうじ します。', romaji: 'Maishuu nichiyoubi ni heya o souji shimasu.', english: 'Every Sunday, I clean my room.' },
      { id: 'ws-n5-249-2', sentence: '毎週、テニスを練習します。', furigana: 'まいしゅう、テニス を れんしゅう します。', romaji: 'Maishuu, tenisu o renshuu shimasu.', english: 'Every week, I practice tennis.' }
    ]
  },
  {
    id: 'w-n5-250',
    word: '毎月',
    reading: 'まいつき',
    romaji: 'maitsuki',
    meaning: 'every month',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"毎","meaning":"Every"},{"char":"月","meaning":"Month"}],
    sentences: [
      { id: 'ws-n5-250-1', sentence: '毎月、新しい本を一冊買います。', furigana: 'まいつき、あたらしい ほん を いっさつ かいます。', romaji: 'Maitsuki, atarashii hon o issatsu kaimasu.', english: 'Every month, I buy one new book.' },
      { id: 'ws-n5-250-2', sentence: '毎月一日に友達と食事をします。', furigana: 'まいつき ついたち に ともだち と しょくじ を します。', romaji: 'Maitsuki tsuitachi ni tomodachi to shokuji o shimasu.', english: 'On the first of every month, I have a meal with friends.' }
    ]
  },
  {
    id: 'w-n5-251',
    word: '毎年',
    reading: 'まいとし',
    romaji: 'maitoshi',
    meaning: 'every year',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"毎","meaning":"Every"},{"char":"年","meaning":"Year"}],
    sentences: [
      { id: 'ws-n5-251-1', sentence: '毎年、家族と旅行に行きます。', furigana: 'まいとし、かぞく と りょこう に いきます。', romaji: 'Maitoshi, kazoku to ryokou ni ikimasu.', english: 'Every year, I go on a trip with my family.' },
      { id: 'ws-n5-251-2', sentence: '毎年、春に桜を見ます。', furigana: 'まいとし、はる に さくら を みます。', romaji: 'Maitoshi, haru ni sakura o mimasu.', english: 'Every year, I see cherry blossoms in spring.' }
    ]
  },
  {
    id: 'w-n5-252',
    word: '今週',
    reading: 'こんしゅう',
    romaji: 'konshuu',
    meaning: 'this week',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"今","meaning":"Now"},{"char":"週","meaning":"Week"}],
    sentences: [
      { id: 'ws-n5-252-1', sentence: '今週はとても忙しいです。', furigana: 'こんしゅう は とても いそがしい です。', romaji: 'Konshuu wa totemo isogashii desu.', english: 'I am very busy this week.' },
      { id: 'ws-n5-252-2', sentence: '今週の土曜日に友達と会います。', furigana: 'こんしゅう の どようび に ともだち と あいます。', romaji: 'Konshuu no doyoubi ni tomodachi to aimasu.', english: 'I will meet a friend this Saturday.' }
    ]
  },
  {
    id: 'w-n5-253',
    word: '先週',
    reading: 'せんしゅう',
    romaji: 'senshuu',
    meaning: 'last week',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"先","meaning":"Previous"},{"char":"週","meaning":"Week"}],
    sentences: [
      { id: 'ws-n5-253-1', sentence: '先週、京都へ行きました。', furigana: 'せんしゅう、きょうと へ いきました。', romaji: 'Senshuu, Kyouto e ikimashita.', english: 'Last week, I went to Kyoto.' },
      { id: 'ws-n5-253-2', sentence: '先週、新しい靴を買いました。', furigana: 'せんしゅう、あたらしい くつ を かいました。', romaji: 'Senshuu, atarashii kutsu o kaimashita.', english: 'Last week, I bought new shoes.' }
    ]
  },
  {
    id: 'w-n5-254',
    word: '来週',
    reading: 'らいしゅう',
    romaji: 'raishuu',
    meaning: 'next week',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"来","meaning":"Next"},{"char":"週","meaning":"Week"}],
    sentences: [
      { id: 'ws-n5-254-1', sentence: '来週、日本語のテストがあります。', furigana: 'らいしゅう、にほんご の テスト が あります。', romaji: 'Raishuu, nihongo no tesuto ga arimasu.', english: 'Next week, there is a Japanese test.' },
      { id: 'ws-n5-254-2', sentence: '来週、また来てください。', furigana: 'らいしゅう、また きて ください。', romaji: 'Raishuu, mata kite kudasai.', english: 'Please come again next week.' }
    ]
  },
  {
    id: 'w-n5-255',
    word: '今月',
    reading: 'こんげつ',
    romaji: 'kongetsu',
    meaning: 'this month',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"今","meaning":"Now"},{"char":"月","meaning":"Month"}],
    sentences: [
      { id: 'ws-n5-255-1', sentence: '今月は休みがたくさんあります。', furigana: 'こんげつ は やすみ が たくさん あります。', romaji: 'Kongetsu wa yasumi ga takusan arimasu.', english: 'There are many days off this month.' },
      { id: 'ws-n5-255-2', sentence: '今月、新しい仕事を始めました。', furigana: 'こんげつ、あたらしい しごと を はじめました。', romaji: 'Kongetsu, atarashii shigoto o hajimemashita.', english: 'This month, I started a new job.' }
    ]
  },
  {
    id: 'w-n5-256',
    word: '先月',
    reading: 'せんげつ',
    romaji: 'sengetsu',
    meaning: 'last month',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"先","meaning":"Previous"},{"char":"月","meaning":"Month"}],
    sentences: [
      { id: 'ws-n5-256-1', sentence: '先月、日本に来ました。', furigana: 'せんげつ、にほん に きました。', romaji: 'Sengetsu, nihon ni kimashita.', english: 'Last month, I came to Japan.' },
      { id: 'ws-n5-256-2', sentence: '先月、友達の結婚式がありました。', furigana: 'せんげつ、ともだち の けっこんしき が ありました。', romaji: 'Sengetsu, tomodachi no kekkonshiki ga arimashita.', english: 'Last month, there was a friend\'s wedding.' }
    ]
  },
  {
    id: 'w-n5-257',
    word: '来月',
    reading: 'らいげつ',
    romaji: 'raigetsu',
    meaning: 'next month',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"来","meaning":"Next"},{"char":"月","meaning":"Month"}],
    sentences: [
      { id: 'ws-n5-257-1', sentence: '来月、国へ帰ります。', furigana: 'らいげつ、くに へ かえります。', romaji: 'Raigetsu, kuni e kaerimasu.', english: 'Next month, I will return to my home country.' },
      { id: 'ws-n5-257-2', sentence: '来月、東京へ行きます。', furigana: 'らいげつ、とうきょう へ いきます。', romaji: 'Raigetsu, Toukyou e ikimasu.', english: 'Next month, I will go to Tokyo.' }
    ]
  },
  {
    id: 'w-n5-258',
    word: '今年',
    reading: 'ことし',
    romaji: 'kotoshi',
    meaning: 'this year',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"今","meaning":"Now"},{"char":"年","meaning":"Year"}],
    sentences: [
      { id: 'ws-n5-258-1', sentence: '今年、日本語の試験を受けます。', furigana: 'ことし、にほんご の しけん を うけます。', romaji: 'Kotoshi, nihongo no shiken o ukemasu.', english: 'This year, I will take a Japanese exam.' },
      { id: 'ws-n5-258-2', sentence: '今年は二十歳になります。', furigana: 'ことし は はたち に なります。', romaji: 'Kotoshi wa hatachi ni narimasu.', english: 'I will turn twenty years old this year.' }
    ]
  },
  {
    id: 'w-n5-259',
    word: '去年',
    reading: 'きょねん',
    romaji: 'kyonen',
    meaning: 'last year',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"去","meaning":"Past"},{"char":"年","meaning":"Year"}],
    sentences: [
      { id: 'ws-n5-259-1', sentence: '去年、高校を卒業しました。', furigana: 'きょねん、こうこう を そつぎょう しました。', romaji: 'Kyonen, koukou o sotsugyou shimashita.', english: 'Last year, I graduated from high school.' },
      { id: 'ws-n5-259-2', sentence: '去年の冬はとても寒かったです。', furigana: 'きょねん の ふゆ は とても さむかった です。', romaji: 'Kyonen no fuyu wa totemo samukatta desu.', english: 'Last year\'s winter was very cold.' }
    ]
  },
  {
    id: 'w-n5-260',
    word: '来年',
    reading: 'らいねん',
    romaji: 'rainen',
    meaning: 'next year',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"来","meaning":"Next"},{"char":"年","meaning":"Year"}],
    sentences: [
      { id: 'ws-n5-260-1', sentence: '来年、大学に入ります。', furigana: 'らいねん、だいがく に はいります。', romaji: 'Rainen, daigaku ni hairimasu.', english: 'Next year, I will enter university.' },
      { id: 'ws-n5-260-2', sentence: '来年、日本に旅行に行きたいです。', furigana: 'らいねん、にほん に りょこう に いきたい です。', romaji: 'Rainen, nihon ni ryokou ni ikitai desu.', english: 'Next year, I want to travel to Japan.' }
    ]
  },
  {
    id: 'w-n5-261',
    word: '月曜日',
    reading: 'げつようび',
    romaji: 'getsuyoubi',
    meaning: 'Monday',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"月","meaning":"Moon / Monday"},{"char":"曜","meaning":"Day of week"},{"char":"日","meaning":"Day"}],
    sentences: [
      { id: 'ws-n5-261-1', sentence: '月曜日に学校へ行きます。', furigana: 'げつようび に がっこう へ いきます。', romaji: 'Getsuyoubi ni gakkou e ikimasu.', english: 'I go to school on Monday.' },
      { id: 'ws-n5-261-2', sentence: '月曜日の朝は忙しいです。', furigana: 'げつようび の あさ は いそがしい です。', romaji: 'Getsuyoubi no asa wa isogashii desu.', english: 'Monday morning is busy.' }
    ]
  },
  {
    id: 'w-n5-262',
    word: '火曜日',
    reading: 'かようび',
    romaji: 'kayoubi',
    meaning: 'Tuesday',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"火","meaning":"Fire / Tuesday"},{"char":"曜","meaning":"Day of week"},{"char":"日","meaning":"Day"}],
    sentences: [
      { id: 'ws-n5-262-1', sentence: '火曜日に日本語のクラスがあります。', furigana: 'かようび に にほんご の クラス が あります。', romaji: 'Kayoubi ni nihongo no kurasu ga arimasu.', english: 'There is a Japanese class on Tuesday.' },
      { id: 'ws-n5-262-2', sentence: '火曜日の午後に友達と会います。', furigana: 'かようび の ごご に ともだち と あいます。', romaji: 'Kayoubi no gogo ni tomodachi to aimasu.', english: 'I will meet a friend on Tuesday afternoon.' }
    ]
  },
  {
    id: 'w-n5-263',
    word: '水曜日',
    reading: 'すいようび',
    romaji: 'suiyoubi',
    meaning: 'Wednesday',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"水","meaning":"Water / Wednesday"},{"char":"曜","meaning":"Day of week"},{"char":"日","meaning":"Day"}],
    sentences: [
      { id: 'ws-n5-263-1', sentence: '水曜日は図書館が休みです。', furigana: 'すいようび は としょかん が やすみ です。', romaji: 'Suiyoubi wa toshokan ga yasumi desu.', english: 'The library is closed on Wednesday.' },
      { id: 'ws-n5-263-2', sentence: '水曜日にプールで泳ぎます。', furigana: 'すいようび に プール で およぎます。', romaji: 'Suiyoubi ni puuru de oyogimasu.', english: 'I swim at the pool on Wednesday.' }
    ]
  },
  {
    id: 'w-n5-264',
    word: '木曜日',
    reading: 'もくようび',
    romaji: 'mokuyoubi',
    meaning: 'Thursday',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"木","meaning":"Tree / Thursday"},{"char":"曜","meaning":"Day of week"},{"char":"日","meaning":"Day"}],
    sentences: [
      { id: 'ws-n5-264-1', sentence: '木曜日にテストがあります。', furigana: 'もくようび に テスト が あります。', romaji: 'Mokuyoubi ni tesuto ga arimasu.', english: 'There is a test on Thursday.' },
      { id: 'ws-n5-264-2', sentence: '木曜日の夜、映画を見ました。', furigana: 'もくようび の よる、えいが を みました。', romaji: 'Mokuyoubi no yoru, eiga o mimashita.', english: 'On Thursday night, I watched a movie.' }
    ]
  },
  {
    id: 'w-n5-265',
    word: '金曜日',
    reading: 'きんようび',
    romaji: 'kinyoubi',
    meaning: 'Friday',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"金","meaning":"Gold / Friday"},{"char":"曜","meaning":"Day of week"},{"char":"日","meaning":"Day"}],
    sentences: [
      { id: 'ws-n5-265-1', sentence: '金曜日の夜は友達とご飯を食べます。', furigana: 'きんようび の よる は ともだち と ごはん を たべます。', romaji: 'Kin\'youbi no yoru wa tomodachi to gohan o tabemasu.', english: 'On Friday night, I eat dinner with friends.' },
      { id: 'ws-n5-265-2', sentence: '明日は金曜日ですね。', furigana: 'あした は きんようび です ね。', romaji: 'Ashita wa kin\'youbi desu ne.', english: 'Tomorrow is Friday, isn\'t it?' }
    ]
  },
  {
    id: 'w-n5-266',
    word: '土曜日',
    reading: 'どようび',
    romaji: 'doyoubi',
    meaning: 'Saturday',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"土","meaning":"Earth / Saturday"},{"char":"曜","meaning":"Day of week"},{"char":"日","meaning":"Day"}],
    sentences: [
      { id: 'ws-n5-266-1', sentence: '土曜日にデパートで買い物をします。', furigana: 'どようび に デパート で かいもの を します。', romaji: 'Doyoubi ni depaato de kaimono o shimasu.', english: 'I go shopping at the department store on Saturday.' },
      { id: 'ws-n5-266-2', sentence: '土曜日は仕事が休みです。', furigana: 'どようび は しごと が やすみ です。', romaji: 'Doyoubi wa shigoto ga yasumi desu.', english: 'I have the day off work on Saturday.' }
    ]
  },
  {
    id: 'w-n5-267',
    word: '日曜日',
    reading: 'にちようび',
    romaji: 'nichiyoubi',
    meaning: 'Sunday',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"日","meaning":"Sun / Sunday"},{"char":"曜","meaning":"Day of week"},{"char":"日","meaning":"Day"}],
    sentences: [
      { id: 'ws-n5-267-1', sentence: '日曜日に家でゆっくり休みます。', furigana: 'にちようび に いえ で ゆっくり やすみます。', romaji: 'Nichiyoubi ni ie de yukkuri yasumimasu.', english: 'I rest comfortably at home on Sunday.' },
      { id: 'ws-n5-267-2', sentence: '日曜日は家族と一緒に公園に行きます。', furigana: 'にちようび は かぞく と いっしょ に こうえん に いきます。', romaji: 'Nichiyoubi wa kazoku to issho ni kouen ni ikimasu.', english: 'On Sunday, I go to the park with my family.' }
    ]
  },
  {
    id: 'w-n5-268',
    word: '一日',
    reading: 'ついたち',
    romaji: 'tsuitachi',
    meaning: 'first day of the month',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"一","meaning":"One"},{"char":"日","meaning":"Day"}],
    sentences: [
      { id: 'ws-n5-268-1', sentence: '四月一日は学校の入学式です。', furigana: 'しがつ ついたち は がっこう の にゅうがくしき です。', romaji: 'Shigatsu tsuitachi wa gakkou no nyuugakushiki desu.', english: 'April 1st is the school entrance ceremony.' },
      { id: 'ws-n5-268-2', sentence: '毎月一日に映画を見ます。', furigana: 'まいつき ついたち に えいが を みます。', romaji: 'Maitsuki tsuitachi ni eiga o mimasu.', english: 'I watch a movie on the first of every month.' }
    ]
  },
  {
    id: 'w-n5-269',
    word: '二日',
    reading: 'ふつか',
    romaji: 'futsuka',
    meaning: 'second day of the month, two days',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"二","meaning":"Two"},{"char":"日","meaning":"Day"}],
    sentences: [
      { id: 'ws-n5-269-1', sentence: '五月二日に友達が来ます。', furigana: 'ごがつ ふつか に ともだち が きます。', romaji: 'Gogatsu futsuka ni tomodachi ga kimasu.', english: 'A friend is coming on May 2nd.' },
      { id: 'ws-n5-269-2', sentence: '二日間、旅行に行きました。', furigana: 'ふつかかん、りょこう に いきました。', romaji: 'Futsukakan, ryokou ni ikimashita.', english: 'I went on a trip for two days.' }
    ]
  },
  {
    id: 'w-n5-270',
    word: '三日',
    reading: 'みっか',
    romaji: 'mikka',
    meaning: 'third day of the month, three days',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"三","meaning":"Three"},{"char":"日","meaning":"Day"}],
    sentences: [
      { id: 'ws-n5-270-1', sentence: '三月三日はひな祭りです。', furigana: 'さんがつ みっか は ひなまつり です。', romaji: 'Sangatsu mikka wa hinamatsuri desu.', english: 'March 3rd is the Doll Festival.' },
      { id: 'ws-n5-270-2', sentence: '風邪で三日間休みました。', furigana: 'かぜ で みっかかん やすみました。', romaji: 'Kaze de mikkakan yasumimashita.', english: 'I rested for three days with a cold.' }
    ]
  },
  {
    id: 'w-n5-271',
    word: '四日',
    reading: 'よっか',
    romaji: 'yokka',
    meaning: 'fourth day of the month, four days',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"四","meaning":"Four"},{"char":"日","meaning":"Day"}],
    sentences: [
      { id: 'ws-n5-271-1', sentence: '七月四日にテストがあります。', furigana: 'しちがつ よっか に テスト が あります。', romaji: 'Shichigatsu yokka ni tesuto ga arimasu.', english: 'There is a test on July 4th.' },
      { id: 'ws-n5-271-2', sentence: '四日間、京都に滞在しました。', furigana: 'よっかかん、きょうと に たいざい しました。', romaji: 'Yokkakan, Kyouto ni taizai shimashita.', english: 'I stayed in Kyoto for four days.' }
    ]
  },
  {
    id: 'w-n5-272',
    word: '五日',
    reading: 'いつか',
    romaji: 'itsuka',
    meaning: 'fifth day of the month, five days',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"五","meaning":"Five"},{"char":"日","meaning":"Day"}],
    sentences: [
      { id: 'ws-n5-272-1', sentence: '五月五日は子供の日です。', furigana: 'ごがつ いつか は こども の ひ です。', romaji: 'Gogatsu itsuka wa kodomo no hi desu.', english: 'May 5th is Children\'s Day.' },
      { id: 'ws-n5-272-2', sentence: 'あと五日で夏休みです。', furigana: 'あと いつか で なつやすみ です。', romaji: 'Ato itsuka de natsuyasumi desu.', english: 'In five days it will be summer vacation.' }
    ]
  },
  {
    id: 'w-n5-273',
    word: '六日',
    reading: 'むいか',
    romaji: 'muika',
    meaning: 'sixth day of the month, six days',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"六","meaning":"Six"},{"char":"日","meaning":"Day"}],
    sentences: [
      { id: 'ws-n5-273-1', sentence: '六月六日は私の誕生日です。', furigana: 'ろくがつ むいか は わたし の たんじょうび です。', romaji: 'Rokugatsu muika wa watashi no tanjoubi desu.', english: 'June 6th is my birthday.' },
      { id: 'ws-n5-273-2', sentence: '六日間、仕事を頑張りました。', furigana: 'むいかかん、しごと を がんばりました。', romaji: 'Muikakan, shigoto o ganbarimashita.', english: 'I worked hard for six days.' }
    ]
  },
  {
    id: 'w-n5-274',
    word: '七日',
    reading: 'なのか',
    romaji: 'nanoka',
    meaning: 'seventh day of the month, seven days',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"七","meaning":"Seven"},{"char":"日","meaning":"Day"}],
    sentences: [
      { id: 'ws-n5-274-1', sentence: '七月七日は七夕です。', furigana: 'しちがつ なのか は たなばた です。', romaji: 'Shichigatsu nanoka wa tanabata desu.', english: 'July 7th is Tanabata.' },
      { id: 'ws-n5-274-2', sentence: '七日間、東京にいました。', furigana: 'なのかかん、とうきょう に いました。', romaji: 'Nanokakan, Toukyou ni imashita.', english: 'I stayed in Tokyo for seven days.' }
    ]
  },
  {
    id: 'w-n5-275',
    word: '八日',
    reading: 'ようか',
    romaji: 'youka',
    meaning: 'eighth day of the month, eight days',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"八","meaning":"Eight"},{"char":"日","meaning":"Day"}],
    sentences: [
      { id: 'ws-n5-275-1', sentence: '八月八日に海へ行きます。', furigana: 'はちがつ ようか に うみ へ いきます。', romaji: 'Hachigatsu youka ni umi e ikimasu.', english: 'I will go to the sea on August 8th.' },
      { id: 'ws-n5-275-2', sentence: 'テストまであと八日です。', furigana: 'テスト まで あと ようか です。', romaji: 'Tesuto made ato youka desu.', english: 'It is eight days until the test.' }
    ]
  },
  {
    id: 'w-n5-276',
    word: '九日',
    reading: 'ここのか',
    romaji: 'kokonoka',
    meaning: 'ninth day of the month, nine days',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"九","meaning":"Nine"},{"char":"日","meaning":"Day"}],
    sentences: [
      { id: 'ws-n5-276-1', sentence: '九月九日に新しい本が出ます。', furigana: 'くがつ ここのか に あたらしい ほん が でます。', romaji: 'Kugatsu kokonoka ni atarashii hon ga demasu.', english: 'A new book comes out on September 9th.' },
      { id: 'ws-n5-276-2', sentence: '九日間、日本を旅行しました。', furigana: 'ここのかかん、にほん を りょこう しました。', romaji: 'Kokonokakan, nihon o ryokou shimashita.', english: 'I traveled in Japan for nine days.' }
    ]
  },
  {
    id: 'w-n5-277',
    word: '十日',
    reading: 'とおか',
    romaji: 'tooka',
    meaning: 'tenth day of the month, ten days',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"十","meaning":"Ten"},{"char":"日","meaning":"Day"}],
    sentences: [
      { id: 'ws-n5-277-1', sentence: '十月十日は晴れの日が多いです。', furigana: 'じゅうがつ とおか は はれ の ひ が おおい です。', romaji: 'Juugatsu tooka wa hare no hi ga ooi desu.', english: 'October 10th often has sunny days.' },
      { id: 'ws-n5-277-2', sentence: '十日間、ホテルに泊まりました。', furigana: 'とおかかん、ホテル に とまりました。', romaji: 'Tookakan, hoteru ni tomarimashita.', english: 'I stayed at a hotel for ten days.' }
    ]
  },
  {
    id: 'w-n5-278',
    word: '二十日',
    reading: 'はつか',
    romaji: 'hatsuka',
    meaning: 'twentieth day of the month, 20 days',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"二","meaning":"Two"},{"char":"十","meaning":"Ten"},{"char":"日","meaning":"Day"}],
    sentences: [
      { id: 'ws-n5-278-1', sentence: '今月の二十日に給料をもらいます。', furigana: 'こんげつ の はつか に きゅうりょう を もらいます。', romaji: 'Kongetsu no hatsuka ni kyuuryou o moraimasu.', english: 'I receive my salary on the 20th of this month.' },
      { id: 'ws-n5-278-2', sentence: '二十日までに宿題を出してください。', furigana: 'はつか まで に しゅくだい を だして ください。', romaji: 'Hatsuka made ni shukudai o dashite kudasai.', english: 'Please submit your homework by the 20th.' }
    ]
  },
  {
    id: 'w-n5-279',
    word: '一月',
    reading: 'いちがつ',
    romaji: 'ichigatsu',
    meaning: 'January',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"一","meaning":"One"},{"char":"月","meaning":"Month"}],
    sentences: [
      { id: 'ws-n5-279-1', sentence: '一月一日はお正月です。', furigana: 'いちがつ ついたち は おしょうがつ です。', romaji: 'Ichigatsu tsuitachi wa oshougatsu desu.', english: 'January 1st is New Year\'s Day.' },
      { id: 'ws-n5-279-2', sentence: '一月は雪がたくさん降ります。', furigana: 'いちがつ は ゆき が たくさん ふります。', romaji: 'Ichigatsu wa yuki ga takusan furimasu.', english: 'A lot of snow falls in January.' }
    ]
  },
  {
    id: 'w-n5-280',
    word: '二月',
    reading: 'にがつ',
    romaji: 'nigatsu',
    meaning: 'February',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"二","meaning":"Two"},{"char":"月","meaning":"Month"}],
    sentences: [
      { id: 'ws-n5-280-1', sentence: '二月は一年で一番寒いです。', furigana: 'にがつ は いちねん で いちばん さむい です。', romaji: 'Nigatsu wa ichinen de ichiban samui desu.', english: 'February is the coldest month of the year.' },
      { id: 'ws-n5-280-2', sentence: '二月十四日はバレンタインデーです。', furigana: 'にがつ じゅうよっか は バレンタインデー です。', romaji: 'Nigatsu juuyokka wa barentaindee desu.', english: 'February 14th is Valentine\'s Day.' }
    ]
  },
  {
    id: 'w-n5-281',
    word: '三月',
    reading: 'さんがつ',
    romaji: 'sangatsu',
    meaning: 'March',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"三","meaning":"Three"},{"char":"月","meaning":"Month"}],
    sentences: [
      { id: 'ws-n5-281-1', sentence: '三月に桜が咲き始めます。', furigana: 'さんがつ に さくら が さきはじめます。', romaji: 'Sangatsu ni sakura ga sakihajimemasu.', english: 'Cherry blossoms begin to bloom in March.' },
      { id: 'ws-n5-281-2', sentence: '三月は卒業の季節です。', furigana: 'さんがつ は そつぎょう の きせつ です。', romaji: 'Sangatsu wa sotsugyou no kisetsu desu.', english: 'March is the season of graduations.' }
    ]
  },
  {
    id: 'w-n5-282',
    word: '四月',
    reading: 'しがつ',
    romaji: 'shigatsu',
    meaning: 'April',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"四","meaning":"Four"},{"char":"月","meaning":"Month"}],
    sentences: [
      { id: 'ws-n5-282-1', sentence: '日本の新学期は四月に始まります。', furigana: 'にほん の しんがっき は しがつ に はじまります。', romaji: 'Nihon no shingakki wa shigatsu ni hajimarimasu.', english: 'The Japanese school term starts in April.' },
      { id: 'ws-n5-282-2', sentence: '四月は春の暖かい季節です。', furigana: 'しがつ は はる の あたたかい きせつ です。', romaji: 'Shigatsu wa haru no atatakai kisetsu desu.', english: 'April is a warm spring season.' }
    ]
  },
  {
    id: 'w-n5-283',
    word: '五月',
    reading: 'ごがつ',
    romaji: 'gogatsu',
    meaning: 'May',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"五","meaning":"Five"},{"char":"月","meaning":"Month"}],
    sentences: [
      { id: 'ws-n5-283-1', sentence: '五月は天気がとてもいいです。', furigana: 'ごがつ は てんき が とても いい です。', romaji: 'Gogatsu wa tenki ga totemo ii desu.', english: 'In May, the weather is very pleasant.' },
      { id: 'ws-n5-283-2', sentence: '五月にゴールデンウィークがあります。', furigana: 'ごがつ に ゴールデンウィーク が あります。', romaji: 'Gogatsu ni goorudenwiiku ga arimasu.', english: 'Golden Week is in May.' }
    ]
  },
  {
    id: 'w-n5-284',
    word: '六月',
    reading: 'ろくがつ',
    romaji: 'rokugatsu',
    meaning: 'June',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"六","meaning":"Six"},{"char":"月","meaning":"Month"}],
    sentences: [
      { id: 'ws-n5-284-1', sentence: '六月は雨がたくさん降ります。', furigana: 'ろくがつ は あめ が たくさん ふります。', romaji: 'Rokugatsu wa ame ga takusan furimasu.', english: 'It rains a lot in June.' },
      { id: 'ws-n5-284-2', sentence: '六月は梅雨の季節です。', furigana: 'ろくがつ は つゆ の きせつ です。', romaji: 'Rokugatsu wa tsuyu no kisetsu desu.', english: 'June is the rainy season.' }
    ]
  },
  {
    id: 'w-n5-285',
    word: '七月',
    reading: 'しちがつ',
    romaji: 'shichigatsu',
    meaning: 'July',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"七","meaning":"Seven"},{"char":"月","meaning":"Month"}],
    sentences: [
      { id: 'ws-n5-285-1', sentence: '七月に夏休みが始まります。', furigana: 'しちがつ に なつやすみ が はじまります。', romaji: 'Shichigatsu ni natsuyasumi ga hajimarimasu.', english: 'Summer vacation begins in July.' },
      { id: 'ws-n5-285-2', sentence: '七月はとても暑いです。', furigana: 'しちがつ は とても あつい です。', romaji: 'Shichigatsu wa totemo atsui desu.', english: 'It is very hot in July.' }
    ]
  },
  {
    id: 'w-n5-286',
    word: '八月',
    reading: 'はちがつ',
    romaji: 'hachigatsu',
    meaning: 'August',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"八","meaning":"Eight"},{"char":"月","meaning":"Month"}],
    sentences: [
      { id: 'ws-n5-286-1', sentence: '八月に海へ泳ぎに行きます。', furigana: 'はちがつ に うみ へ およぎ に いきます。', romaji: 'Hachigatsu ni umi e oyogi ni ikimasu.', english: 'I go to the sea to swim in August.' },
      { id: 'ws-n5-286-2', sentence: '八月は毎日暑い日が続きます。', furigana: 'はちがつ は まいにち あつい ひ が つづきます。', romaji: 'Hachigatsu wa mainichi atsui hi ga tsuzukimasu.', english: 'Hot days continue every day in August.' }
    ]
  },
  {
    id: 'w-n5-287',
    word: '九月',
    reading: 'くがつ',
    romaji: 'kugatsu',
    meaning: 'September',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"九","meaning":"Nine"},{"char":"月","meaning":"Month"}],
    sentences: [
      { id: 'ws-n5-287-1', sentence: '九月に新学期が始まります。', furigana: 'くがつ に しんがっき が はじまります。', romaji: 'Kugatsu ni shingakki ga hajimarimasu.', english: 'The new school term begins in September.' },
      { id: 'ws-n5-287-2', sentence: '九月になると涼しくなります。', furigana: 'くがつ に なる と すずしく なります。', romaji: 'Kugatsu ni naru to suzushiku narimasu.', english: 'It becomes cool when September comes.' }
    ]
  },
  {
    id: 'w-n5-288',
    word: '十月',
    reading: 'じゅうがつ',
    romaji: 'juugatsu',
    meaning: 'October',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"十","meaning":"Ten"},{"char":"月","meaning":"Month"}],
    sentences: [
      { id: 'ws-n5-288-1', sentence: '十月は秋の涼しい季節です。', furigana: 'じゅうがつ は あき の すずしい きせつ です。', romaji: 'Juugatsu wa aki no suzushii kisetsu desu.', english: 'October is a cool autumn season.' },
      { id: 'ws-n5-288-2', sentence: '十月に京都へ紅葉を見に行きます。', furigana: 'じゅうがつ に きょうと へ もみじ を み に いきます。', romaji: 'Juugatsu ni Kyouto e momiji o mi ni ikimasu.', english: 'In October, I go to Kyoto to see autumn foliage.' }
    ]
  },
  {
    id: 'w-n5-289',
    word: '十一月',
    reading: 'じゅういちがつ',
    romaji: 'juuichigatsu',
    meaning: 'November',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"十","meaning":"Ten"},{"char":"一","meaning":"One"},{"char":"月","meaning":"Month"}],
    sentences: [
      { id: 'ws-n5-289-1', sentence: '十一月は少し寒くなってきます。', furigana: 'じゅういちがつ は すこし さむく なって きます。', romaji: 'Juuichigatsu wa sukoshi samuku natte kimasu.', english: 'It gets a bit cold in November.' },
      { id: 'ws-n5-289-2', sentence: '十一月に家族と旅行に行きました。', furigana: 'じゅういちがつ に かぞく と りょこう に いきました。', romaji: 'Juuichigatsu ni kazoku to ryokou ni ikimashita.', english: 'I went on a trip with my family in November.' }
    ]
  },
  {
    id: 'w-n5-290',
    word: '十二月',
    reading: 'じゅうにがつ',
    romaji: 'juunigatsu',
    meaning: 'December',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"十","meaning":"Ten"},{"char":"二","meaning":"Two"},{"char":"月","meaning":"Month"}],
    sentences: [
      { id: 'ws-n5-290-1', sentence: '十二月二十五日はクリスマスです。', furigana: 'じゅうにがつ にじゅうごにち は クリスマス です。', romaji: 'Juunigatsu nijuugonichi wa kurisumasu desu.', english: 'December 25th is Christmas.' },
      { id: 'ws-n5-290-2', sentence: '十二月は一年の最後の月です。', furigana: 'じゅうにがつ は いちねん の さいご の つき です。', romaji: 'Juunigatsu wa ichinen no saigo no tsuki desu.', english: 'December is the last month of the year.' }
    ]
  },
  {
    id: 'w-n5-291',
    word: '春',
    reading: 'はる',
    romaji: 'haru',
    meaning: 'spring',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"春","meaning":"Spring"}],
    sentences: [
      { id: 'ws-n5-291-1', sentence: '春にきれいな桜が咲きます。', furigana: 'はる に きれい な さくら が さきます。', romaji: 'Haru ni kirei na sakura ga sakimasu.', english: 'Pretty cherry blossoms bloom in spring.' },
      { id: 'ws-n5-291-2', sentence: '私は春が一番好きです。', furigana: 'わたし は はる が いちばん すき です。', romaji: 'Watashi wa haru ga ichiban suki desu.', english: 'I like spring the best.' }
    ]
  },
  {
    id: 'w-n5-292',
    word: '夏',
    reading: 'なつ',
    romaji: 'natsu',
    meaning: 'summer',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"夏","meaning":"Summer"}],
    sentences: [
      { id: 'ws-n5-292-1', sentence: '夏に海へ泳ぎに行きます。', furigana: 'なつ に うみ へ およぎ に いきます。', romaji: 'Natsu ni umi e oyogi ni ikimasu.', english: 'I go to the sea to swim in summer.' },
      { id: 'ws-n5-292-2', sentence: '日本の夏はとても暑いです。', furigana: 'にほん の なつ は とても あつい です。', romaji: 'Nihon no natsu wa totemo atsui desu.', english: 'Summer in Japan is very hot.' }
    ]
  },
  {
    id: 'w-n5-293',
    word: '秋',
    reading: 'あき',
    romaji: 'aki',
    meaning: 'autumn, fall',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"秋","meaning":"Autumn"}],
    sentences: [
      { id: 'ws-n5-293-1', sentence: '秋は果物が美味しいです。', furigana: 'あき は くだもの が おいしい です。', romaji: 'Aki wa kudamono ga oishii desu.', english: 'Fruit is delicious in autumn.' },
      { id: 'ws-n5-293-2', sentence: '秋の風はとても気持ちがいいです。', furigana: 'あき の かぜ は とても きもち が いい です。', romaji: 'Aki no kaze wa totemo kimochi ga ii desu.', english: 'The autumn breeze feels very pleasant.' }
    ]
  },
  {
    id: 'w-n5-294',
    word: '冬',
    reading: 'ふゆ',
    romaji: 'fuyu',
    meaning: 'winter',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"冬","meaning":"Winter"}],
    sentences: [
      { id: 'ws-n5-294-1', sentence: '冬に白い雪が降ります。', furigana: 'ふゆ に しろい ゆき が ふります。', romaji: 'Fuyu ni shiroi yuki ga furimasu.', english: 'White snow falls in winter.' },
      { id: 'ws-n5-294-2', sentence: '冬はとても寒いのでコートを着ます。', furigana: 'ふゆ は とても さむい ので コート を きます。', romaji: 'Fuyu wa totemo samui node kooto o kimasu.', english: 'Because winter is very cold, I wear a coat.' }
    ]
  },
  {
    id: 'w-n5-295',
    word: '天気',
    reading: 'てんき',
    romaji: 'tenki',
    meaning: 'weather',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"天","meaning":"Heaven"},{"char":"気","meaning":"Spirit / Atmosphere"}],
    sentences: [
      { id: 'ws-n5-295-1', sentence: '今日の天気はどうですか。', furigana: 'きょう の てんき は どう です か。', romaji: 'Kyou no tenki wa dou desu ka.', english: 'How is the weather today?' },
      { id: 'ws-n5-295-2', sentence: '今日は天気が良くて暖かいです。', furigana: 'きょう は てんき が よくて あたたかい です。', romaji: 'Kyou wa tenki ga yokute atatakai desu.', english: 'Today the weather is nice and warm.' }
    ]
  },
  {
    id: 'w-n5-296',
    word: '雨',
    reading: 'あめ',
    romaji: 'ame',
    meaning: 'rain',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"雨","meaning":"Rain"}],
    sentences: [
      { id: 'ws-n5-296-1', sentence: '外で雨がたくさん降っています。', furigana: 'そと で あめ が たくさん ふって います。', romaji: 'Soto de ame ga takusan futte imasu.', english: 'A lot of rain is falling outside.' },
      { id: 'ws-n5-296-2', sentence: '雨の日は傘を持って出かけます。', furigana: 'あめ の ひ は かさ を もって でかけます。', romaji: 'Ame no hi wa kasa o motte dekakemasu.', english: 'On rainy days, I bring an umbrella when going out.' }
    ]
  },
  {
    id: 'w-n5-297',
    word: '雪',
    reading: 'ゆき',
    romaji: 'yuki',
    meaning: 'snow',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"雪","meaning":"Snow"}],
    sentences: [
      { id: 'ws-n5-297-1', sentence: '外に白い雪が降っています。', furigana: 'そと に しろい ゆき が ふって います。', romaji: 'Soto ni shiroi yuki ga futte imasu.', english: 'White snow is falling outside.' },
      { id: 'ws-n5-297-2', sentence: '子供たちが雪で元気に遊んでいます。', furigana: 'こどもたち が ゆき で げんき に あそんで います。', romaji: 'Kodomotachi ga yuki de genki ni asonde imasu.', english: 'Children are playing cheerfully in the snow.' }
    ]
  },
  {
    id: 'w-n5-298',
    word: '曇り',
    reading: 'くもり',
    romaji: 'kumori',
    meaning: 'cloudy weather',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"曇","meaning":"Cloudy"}],
    sentences: [
      { id: 'ws-n5-298-1', sentence: '今日は一日中曇りです。', furigana: 'きょう は いちにちじゅう くもり です。', romaji: 'Kyou wa ichinichijuu kumori desu.', english: 'Today is cloudy all day.' },
      { id: 'ws-n5-298-2', sentence: '空が曇りになってきました。', furigana: 'そら が くもり に なって きました。', romaji: 'Sora ga kumori ni natte kimashita.', english: 'The sky has become cloudy.' }
    ]
  },
  {
    id: 'w-n5-299',
    word: '晴れ',
    reading: 'はれ',
    romaji: 'hare',
    meaning: 'clear weather, sunny',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"晴","meaning":"Clear up"}],
    sentences: [
      { id: 'ws-n5-299-1', sentence: '明日はきっと晴れでしょう。', furigana: 'あした は きっと はれ でしょう。', romaji: 'Ashita wa kitto hare deshou.', english: 'Tomorrow will surely be sunny.' },
      { id: 'ws-n5-299-2', sentence: '晴れの日は公園で散歩をします。', furigana: 'はれ の ひ は こうえん で さんぽ を します。', romaji: 'Hare no hi wa kouen de sanpo o shimasu.', english: 'On sunny days, I take a walk in the park.' }
    ]
  },
  {
    id: 'w-n5-300',
    word: '風',
    reading: 'かぜ',
    romaji: 'kaze',
    meaning: 'wind, breeze',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"風","meaning":"Wind"}],
    sentences: [
      { id: 'ws-n5-300-1', sentence: '今日は冷たい風が吹いています。', furigana: 'きょう は つめたい かぜ が ふいて います。', romaji: 'Kyou wa tsumetai kaze ga fuite imasu.', english: 'A cold wind is blowing today.' },
      { id: 'ws-n5-300-2', sentence: '外で強い風が吹きました。', furigana: 'そと で つよい かぜ が ふきました。', romaji: 'Soto de tsuyoi kaze ga fukimashita.', english: 'A strong wind blew outside.' }
    ]
  },
  {
    id: 'w-n5-301',
    word: '空',
    reading: 'そら',
    romaji: 'sora',
    meaning: 'sky',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"空","meaning":"Sky"}],
    sentences: [
      { id: 'ws-n5-301-1', sentence: '青い空がとてもきれいです。', furigana: 'あおい そら が とても きれい です。', romaji: 'Aoi sora ga totemo kirei desu.', english: 'The blue sky is very pretty.' },
      { id: 'ws-n5-301-2', sentence: '鳥が空を飛んでいます。', furigana: 'とり が そら を とんで います。', romaji: 'Tori ga sora o tonde imasu.', english: 'Birds are flying in the sky.' }
    ]
  },
  {
    id: 'w-n5-302',
    word: '太陽',
    reading: 'たいよう',
    romaji: 'taiyou',
    meaning: 'sun',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"太","meaning":"Thick / Great"},{"char":"陽","meaning":"Sun"}],
    sentences: [
      { id: 'ws-n5-302-1', sentence: '朝、太陽が昇ります。', furigana: 'あさ、たいよう が のぼります。', romaji: 'Asa, taiyou ga noborimasu.', english: 'In the morning, the sun rises.' },
      { id: 'ws-n5-302-2', sentence: '太陽の光が暖かいです。', furigana: 'たいよう の ひかり が あたたかい です。', romaji: 'Taiyou no hikari ga atatakai desu.', english: 'The sunlight is warm.' }
    ]
  },
  {
    id: 'w-n5-303',
    word: '月',
    reading: 'つき',
    romaji: 'tsuki',
    meaning: 'moon',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"月","meaning":"Moon"}],
    sentences: [
      { id: 'ws-n5-303-1', sentence: '今夜はきれいな月が出ています。', furigana: 'こんや は きれい な つき が でて います。', romaji: 'Kon\'ya wa kirei na tsuki ga dete imasu.', english: 'A pretty moon is out tonight.' },
      { id: 'ws-n5-303-2', sentence: '窓から丸い月が見えます。', furigana: 'まど から まるい つき が みえます。', romaji: 'Mado kara marui tsuki ga miemasu.', english: 'You can see the round moon from the window.' }
    ]
  },
  {
    id: 'w-n5-304',
    word: '星',
    reading: 'ほし',
    romaji: 'hoshi',
    meaning: 'star',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"星","meaning":"Star"}],
    sentences: [
      { id: 'ws-n5-304-1', sentence: '夜空に星がたくさん光っています。', furigana: 'よぞら に ほし が たくさん ひかって います。', romaji: 'Yozora ni hoshi ga takusan hikatte imasu.', english: 'Many stars are shining in the night sky.' },
      { id: 'ws-n5-304-2', sentence: '部屋の窓からきれいな星を見ました。', furigana: 'へや の まど から きれい な ほし を みました。', romaji: 'Heya no mado kara kirei na hoshi o mimashita.', english: 'I saw pretty stars from my room window.' }
    ]
  },
  {
    id: 'w-n5-305',
    word: '海',
    reading: 'うみ',
    romaji: 'umi',
    meaning: 'sea, ocean',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"海","meaning":"Sea"}],
    sentences: [
      { id: 'ws-n5-305-1', sentence: '夏休みに海へ泳ぎに行きます。', furigana: 'なつやすみ に うみ へ およぎ に いきます。', romaji: 'Natsuyasumi ni umi e oyogi ni ikimasu.', english: 'I go to the sea to swim during summer vacation.' },
      { id: 'ws-n5-305-2', sentence: '海の水は青くて広いです。', furigana: 'うみ の みず は あおくて ひろい です。', romaji: 'Umi no mizu wa aokute hiroi desu.', english: 'The ocean water is blue and wide.' }
    ]
  },
  {
    id: 'w-n5-306',
    word: '山',
    reading: 'やま',
    romaji: 'yama',
    meaning: 'mountain',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"山","meaning":"Mountain"}],
    sentences: [
      { id: 'ws-n5-306-1', sentence: '週末に友達と山に登ります。', furigana: 'しゅうまつ に ともだち と やま に のぼります。', romaji: 'Shuumatsu ni tomodachi to yama ni noborimasu.', english: 'I climb the mountain with friends on the weekend.' },
      { id: 'ws-n5-306-2', sentence: '部屋の窓から富士山が見えます。', furigana: 'へや の まど から ふじさん が みえます。', romaji: 'Heya no mado kara Fujisan ga miemasu.', english: 'You can see Mt. Fuji from my room window.' }
    ]
  },
  {
    id: 'w-n5-307',
    word: '川',
    reading: 'かわ',
    romaji: 'kawa',
    meaning: 'river',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"川","meaning":"River"}],
    sentences: [
      { id: 'ws-n5-307-1', sentence: 'この川で魚が泳いでいます。', furigana: 'この かわ で さかな が およいで います。', romaji: 'Kono kawa de sakana ga oyoide imasu.', english: 'Fish are swimming in this river.' },
      { id: 'ws-n5-307-2', sentence: '川の近くを散歩しました。', furigana: 'かわ の ちかく を さんぽ しました。', romaji: 'Kawa no chikaku o sanpo shimashita.', english: 'I took a walk near the river.' }
    ]
  },
  {
    id: 'w-n5-308',
    word: '池',
    reading: 'いけ',
    romaji: 'ike',
    meaning: 'pond',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"池","meaning":"Pond"}],
    sentences: [
      { id: 'ws-n5-308-1', sentence: '公園の池にきれいな魚がいます。', furigana: 'こうえん の いけ に きれい な さかな が います。', romaji: 'Kouen no ike ni kirei na sakana ga imasu.', english: 'There are pretty fish in the park pond.' },
      { id: 'ws-n5-308-2', sentence: '池の周りを静かに歩きました。', furigana: 'いけ の まわり を しずかに あるきました。', romaji: 'Ike no mawari o shizukani arukimashita.', english: 'I walked quietly around the pond.' }
    ]
  },
  {
    id: 'w-n5-309',
    word: '花',
    reading: 'はな',
    romaji: 'hana',
    meaning: 'flower',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"花","meaning":"Flower"}],
    sentences: [
      { id: 'ws-n5-309-1', sentence: '庭に赤い花が咲きました。', furigana: 'にわ に あかい はな が さきました。', romaji: 'Niwa ni akai hana ga sakimashita.', english: 'Red flowers bloomed in the garden.' },
      { id: 'ws-n5-309-2', sentence: '母にきれいな花をプレゼントしました。', furigana: 'はは に きれい な はな を プレゼント しました。', romaji: 'Haha ni kirei na hana o purezento shimashita.', english: 'I gave pretty flowers to my mother.' }
    ]
  },
  {
    id: 'w-n5-310',
    word: '木',
    reading: 'き',
    romaji: 'ki',
    meaning: 'tree, wood',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"木","meaning":"Tree"}],
    sentences: [
      { id: 'ws-n5-310-1', sentence: '大きな木の下で休みましょう。', furigana: 'おおきな き の した で やすみましょう。', romaji: 'Ookina ki no shita de yasumimashou.', english: 'Let\'s rest under the big tree.' },
      { id: 'ws-n5-310-2', sentence: '庭に柿の木があります。', furigana: 'にわ に かき の き が あります。', romaji: 'Niwa ni kaki no ki ga arimasu.', english: 'There is a persimmon tree in the garden.' }
    ]
  },
  {
    id: 'w-n5-311',
    word: '林',
    reading: 'はやし',
    romaji: 'hayashi',
    meaning: 'woods, grove',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"林","meaning":"Woods"}],
    sentences: [
      { id: 'ws-n5-311-1', sentence: '学校の近くに小さな林があります。', furigana: 'がっこう の ちかく に ちいさな はやし が あります。', romaji: 'Gakkou no chikaku ni chiisana hayashi ga arimasu.', english: 'There is a small grove near the school.' },
      { id: 'ws-n5-311-2', sentence: '林の中で鳥の鳴き声を聞きました。', furigana: 'はやし の なか で とり の なきごえ を ききました。', romaji: 'Hayashi no naka de tori no nakigoe o kikimashita.', english: 'I heard birds chirping inside the woods.' }
    ]
  },
  {
    id: 'w-n5-312',
    word: '森',
    reading: 'もり',
    romaji: 'mori',
    meaning: 'forest',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"森","meaning":"Forest"}],
    sentences: [
      { id: 'ws-n5-312-1', sentence: '森の中にたくさんの動物がいます。', furigana: 'もり の なか に たくさん の どうぶつ が います。', romaji: 'Mori no naka ni takusan no doubutsu ga imasu.', english: 'There are many animals inside the forest.' },
      { id: 'ws-n5-312-2', sentence: '静かな森を散歩しました。', furigana: 'しずか な もり を さんぽ しました。', romaji: 'Shizuka na mori o sanpo shimashita.', english: 'I took a walk in the quiet forest.' }
    ]
  },
  {
    id: 'w-n5-313',
    word: '島',
    reading: 'しま',
    romaji: 'shima',
    meaning: 'island',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"島","meaning":"Island"}],
    sentences: [
      { id: 'ws-n5-313-1', sentence: '船で小さな島に行きました。', furigana: 'ふね で ちいさな しま に いきました。', romaji: 'Fune de chiisana shima ni ikimashita.', english: 'I went to a small island by boat.' },
      { id: 'ws-n5-313-2', sentence: '日本はたくさんの島がある国です。', furigana: 'にほん は たくさん の しま が ある くに です。', romaji: 'Nihon wa takusan no shima ga aru kuni desu.', english: 'Japan is a country with many islands.' }
    ]
  },
  {
    id: 'w-n5-314',
    word: '道',
    reading: 'みち',
    romaji: 'michi',
    meaning: 'road, street, path',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"道","meaning":"Road / Way"}],
    sentences: [
      { id: 'ws-n5-314-1', sentence: 'この道をまっすぐ行ってください。', furigana: 'この みち を まっすぐ いって ください。', romaji: 'Kono michi o massugu itte kudasai.', english: 'Please go straight along this road.' },
      { id: 'ws-n5-314-2', sentence: '駅への道を教えてもらいました。', furigana: 'えき への みち を おしえて もらいました。', romaji: 'Eki e no michi o oshiete moraimashita.', english: 'Someone showed me the way to the station.' }
    ]
  },
  {
    id: 'w-n5-315',
    word: '北',
    reading: 'きた',
    romaji: 'kita',
    meaning: 'north',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"北","meaning":"North"}],
    sentences: [
      { id: 'ws-n5-315-1', sentence: '北海道は日本の北にあります。', furigana: 'ほっかいどう は にほん の きた に あります。', romaji: 'Hokkaidou wa nihon no kita ni arimasu.', english: 'Hokkaido is in northern Japan.' },
      { id: 'ws-n5-315-2', sentence: '北の風はとても冷たいです。', furigana: 'きた の かぜ は とても つめたい です。', romaji: 'Kita no kaze wa totemo tsumetai desu.', english: 'The north wind is very cold.' }
    ]
  },
  {
    id: 'w-n5-316',
    word: '南',
    reading: 'みなみ',
    romaji: 'minami',
    meaning: 'south',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"南","meaning":"South"}],
    sentences: [
      { id: 'ws-n5-316-1', sentence: '沖縄は日本の南にあります。', furigana: 'おきなわ は にほん の みなみ に あります。', romaji: 'Okinawa wa nihon no minami ni arimasu.', english: 'Okinawa is in southern Japan.' },
      { id: 'ws-n5-316-2', sentence: '南の窓を開けてください。', furigana: 'みなみ の まど を あけて ください。', romaji: 'Minami no mado o akete kudasai.', english: 'Please open the south window.' }
    ]
  },
  {
    id: 'w-n5-317',
    word: '東',
    reading: 'ひがし',
    romaji: 'higashi',
    meaning: 'east',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"東","meaning":"East"}],
    sentences: [
      { id: 'ws-n5-317-1', sentence: '東京は日本の東にあります。', furigana: 'とうきょう は にほん の ひがし に あります。', romaji: 'Toukyou wa nihon no higashi ni arimasu.', english: 'Tokyo is in eastern Japan.' },
      { id: 'ws-n5-317-2', sentence: '東の空が明るくなってきました。', furigana: 'ひがし の そら が あかるく なって きました。', romaji: 'Higashi no sora ga akaruku natte kimashita.', english: 'The eastern sky has become bright.' }
    ]
  },
  {
    id: 'w-n5-318',
    word: '西',
    reading: 'にし',
    romaji: 'nishi',
    meaning: 'west',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"西","meaning":"West"}],
    sentences: [
      { id: 'ws-n5-318-1', sentence: '京都は日本の西にあります。', furigana: 'きょうと は にほん の にし に あります。', romaji: 'Kyouto wa nihon no nishi ni arimasu.', english: 'Kyoto is in western Japan.' },
      { id: 'ws-n5-318-2', sentence: '駅の西口で待ち合わせをしましょう。', furigana: 'えき の にしぐち で まちあわせ を しましょう。', romaji: 'Eki no nishiguchi de machiawase o shimashou.', english: 'Let\'s meet at the west exit of the station.' }
    ]
  },
  {
    id: 'w-n5-319',
    word: '右',
    reading: 'みぎ',
    romaji: 'migi',
    meaning: 'right',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"右","meaning":"Right"}],
    sentences: [
      { id: 'ws-n5-319-1', sentence: '次の角を右に曲がってください。', furigana: 'つぎ の かど を みぎ に まがって ください。', romaji: 'Tsugi no kado o migi ni magatte kudasai.', english: 'Please turn right at the next corner.' },
      { id: 'ws-n5-319-2', sentence: '右手でお箸を持ちます。', furigana: 'みぎて で おはし を もちます。', romaji: 'Migite de ohashi o mochimasu.', english: 'I hold chopsticks with my right hand.' }
    ]
  },
  {
    id: 'w-n5-320',
    word: '左',
    reading: 'ひだり',
    romaji: 'hidari',
    meaning: 'left',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"左","meaning":"Left"}],
    sentences: [
      { id: 'ws-n5-320-1', sentence: '郵便局は銀行の左にあります。', furigana: 'ゆうびんきょく は ぎんこう の ひだり に あります。', romaji: 'Yuubinkyoku wa ginkou no hidari ni arimasu.', english: 'The post office is to the left of the bank.' },
      { id: 'ws-n5-320-2', sentence: '交差点を左に曲がりました。', furigana: 'こうさてん を ひだり に まがりました。', romaji: 'Kousaten o hidari ni magarimashita.', english: 'I turned left at the intersection.' }
    ]
  },
  {
    id: 'w-n5-321',
    word: '上',
    reading: 'うえ',
    romaji: 'ue',
    meaning: 'up, above, on top',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"上","meaning":"Up / Above"}],
    sentences: [
      { id: 'ws-n5-321-1', sentence: '机の上に本があります。', furigana: 'つくえ の うえ に ほん が あります。', romaji: 'Tsukue no ue ni hon ga arimasu.', english: 'There is a book on the desk.' },
      { id: 'ws-n5-321-2', sentence: 'テーブルの上にリンゴを置きました。', furigana: 'テーブル の うえ に リンゴ を おきました。', romaji: 'Teeburu no ue ni ringo o okimashita.', english: 'I put an apple on the table.' }
    ]
  },
  {
    id: 'w-n5-322',
    word: '下',
    reading: 'した',
    romaji: 'shita',
    meaning: 'down, below, under',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"下","meaning":"Down / Below"}],
    sentences: [
      { id: 'ws-n5-322-1', sentence: '机の下に猫がいます。', furigana: 'つくえ の した に ねこ が います。', romaji: 'Tsukue no shita ni neko ga imasu.', english: 'There is a cat under the desk.' },
      { id: 'ws-n5-322-2', sentence: '木の下で少し休みましょう。', furigana: 'き の した で すこし やすみましょう。', romaji: 'Ki no shita de sukoshi yasumimashou.', english: 'Let\'s rest a little under the tree.' }
    ]
  },
  {
    id: 'w-n5-323',
    word: '前',
    reading: 'まえ',
    romaji: 'mae',
    meaning: 'front, before',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"前","meaning":"Front / Before"}],
    sentences: [
      { id: 'ws-n5-323-1', sentence: '駅の前で友達を待ちます。', furigana: 'えき の まえ で ともだち を まちます。', romaji: 'Eki no mae de tomodachi o machimasu.', english: 'I wait for a friend in front of the station.' },
      { id: 'ws-n5-323-2', sentence: 'ご飯の前に手を洗ってください。', furigana: 'ごはん の まえ に て を あらって ください。', romaji: 'Gohan no mae ni te o aratte kudasai.', english: 'Please wash your hands before eating.' }
    ]
  },
  {
    id: 'w-n5-324',
    word: '後ろ',
    reading: 'うしろ',
    romaji: 'ushiro',
    meaning: 'back, behind',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"後","meaning":"Behind / After"}],
    sentences: [
      { id: 'ws-n5-324-1', sentence: '私の後ろに田中さんが座っています。', furigana: 'わたし の うしろ に たなかさん が すわって います。', romaji: 'Watashi no ushiro ni Tanaka-san ga suwatte imasu.', english: 'Mr. Tanaka is sitting behind me.' },
      { id: 'ws-n5-324-2', sentence: '車の後ろに荷物を乗せました。', furigana: 'くるま の うしろ に にもつ を のせました。', romaji: 'Kuruma no ushiro ni nimotsu o nosemashita.', english: 'I put luggage in the back of the car.' }
    ]
  },
  {
    id: 'w-n5-325',
    word: '中',
    reading: 'なか',
    romaji: 'naka',
    meaning: 'inside, middle',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"中","meaning":"Inside / Middle"}],
    sentences: [
      { id: 'ws-n5-325-1', sentence: '鞄の中に財布と鍵があります。', furigana: 'かばん の なか に さいふ と かぎ が あります。', romaji: 'Kaban no naka ni saifu to kagi ga arimasu.', english: 'Inside the bag, there are a wallet and keys.' },
      { id: 'ws-n5-325-2', sentence: '部屋の中に入ってください。', furigana: 'へや の なか に はいって ください。', romaji: 'Heya no naka ni haitte kudasai.', english: 'Please come inside the room.' }
    ]
  },
  {
    id: 'w-n5-326',
    word: '外',
    reading: 'そと',
    romaji: 'soto',
    meaning: 'outside',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"外","meaning":"Outside"}],
    sentences: [
      { id: 'ws-n5-326-1', sentence: '外は雨がたくさん降っています。', furigana: 'そと は あめ が たくさん ふって います。', romaji: 'Soto wa ame ga takusan futte imasu.', english: 'It is raining a lot outside.' },
      { id: 'ws-n5-326-2', sentence: '外で元気に遊びましょう。', furigana: 'そと で げんき に あそびましょう。', romaji: 'Soto de genki ni asobimashou.', english: 'Let\'s play energetically outside.' }
    ]
  },
  {
    id: 'w-n5-327',
    word: '隣',
    reading: 'となり',
    romaji: 'tonari',
    meaning: 'next to, neighboring',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"隣","meaning":"Neighboring"}],
    sentences: [
      { id: 'ws-n5-327-1', sentence: '郵便局の隣に銀行があります。', furigana: 'ゆうびんきょく の となり に ぎんこう が あります。', romaji: 'Yuubinkyoku no tonari ni ginkou ga arimasu.', english: 'There is a bank next to the post office.' },
      { id: 'ws-n5-327-2', sentence: '田中さんの隣に座りました。', furigana: 'たなかさん の となり に すわりました。', romaji: 'Tanaka-san no tonari ni suwarimashita.', english: 'I sat next to Mr. Tanaka.' }
    ]
  },
  {
    id: 'w-n5-328',
    word: '近く',
    reading: 'ちかく',
    romaji: 'chikaku',
    meaning: 'nearby, vicinity',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"近","meaning":"Near"}],
    sentences: [
      { id: 'ws-n5-328-1', sentence: '駅の近くにスーパーがあります。', furigana: 'えき の ちかく に スーパー が あります。', romaji: 'Eki no chikaku ni suupaa ga arimasu.', english: 'There is a supermarket near the station.' },
      { id: 'ws-n5-328-2', sentence: '私の家は学校の近くです。', furigana: 'わたし の いえ は がっこう の ちかく です。', romaji: 'Watashi no ie wa gakkou no chikaku desu.', english: 'My house is near the school.' }
    ]
  },
  {
    id: 'w-n5-329',
    word: '間',
    reading: 'あいだ',
    romaji: 'aida',
    meaning: 'between, interval',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"間","meaning":"Interval / Between"}],
    sentences: [
      { id: 'ws-n5-329-1', sentence: '銀行と郵便局の間に本屋があります。', furigana: 'ぎんこう と ゆうびんきょく の あいだ に ほんや が あります。', romaji: 'Ginkou to yuubinkyoku no aida ni hon\'ya ga arimasu.', english: 'There is a bookstore between the bank and the post office.' },
      { id: 'ws-n5-329-2', sentence: '二時と三時の間に来てください。', furigana: 'にじ と さんじ の あいだ に きて ください。', romaji: 'Niji to sanji no aida ni kite kudasai.', english: 'Please come between 2:00 and 3:00.' }
    ]
  },
  {
    id: 'w-n5-330',
    word: '横',
    reading: 'よこ',
    romaji: 'yoko',
    meaning: 'side, beside, horizontal',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"横","meaning":"Side"}],
    sentences: [
      { id: 'ws-n5-330-1', sentence: '机の横に鞄を置きました。', furigana: 'つくえ の よこ に かばん を おきました。', romaji: 'Tsukue no yoko ni kaban o okimashita.', english: 'I put the bag beside the desk.' },
      { id: 'ws-n5-330-2', sentence: '本棚の横にゴミ箱があります。', furigana: 'ほんだな の よこ に ゴミばこ が あります。', romaji: 'Hondana no yoko ni gomibako ga arimasu.', english: 'There is a trash can beside the bookshelf.' }
    ]
  },
  {
    id: 'w-n5-331',
    word: '向こう',
    reading: 'むこう',
    romaji: 'mukou',
    meaning: 'opposite side, over there',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"向","meaning":"Yonder / Face"}],
    sentences: [
      { id: 'ws-n5-331-1', sentence: '川の向こうに山が見えます。', furigana: 'かわ の むこう に やま が みえます。', romaji: 'Kawa no mukou ni yama ga miemasu.', english: 'You can see mountains across the river.' },
      { id: 'ws-n5-331-2', sentence: '向こうの店で買い物をしましょう。', furigana: 'むこう の みせ で かいもの を しましょう。', romaji: 'Mukou no mise de kaimono o shimashou.', english: 'Let\'s shop at that store over there.' }
    ]
  },
  {
    id: 'w-n5-332',
    word: 'ここ',
    reading: 'ここ',
    romaji: 'koko',
    meaning: 'here, this place',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-332-1', sentence: 'ここに名前を書いてください。', furigana: 'ここ に なまえ を かいて ください。', romaji: 'Koko ni namae o kaite kudasai.', english: 'Please write your name here.' },
      { id: 'ws-n5-332-2', sentence: 'ここは私の部屋です。', furigana: 'ここ は わたし の へや です。', romaji: 'Koko wa watashi no heya desu.', english: 'This is my room.' }
    ]
  },
  {
    id: 'w-n5-333',
    word: 'そこ',
    reading: 'そこ',
    romaji: 'soko',
    meaning: 'there, that place near you',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-333-1', sentence: 'そこに本を置いてください。', furigana: 'そこ に ほん を おいて ください。', romaji: 'Soko ni hon o oite kudasai.', english: 'Please put the book there.' },
      { id: 'ws-n5-333-2', sentence: 'そこから駅までどのくらいですか。', furigana: 'そこ から えき まで どのくらい です か。', romaji: 'Soko kara eki made donokurai desu ka.', english: 'How far is it from there to the station?' }
    ]
  },
  {
    id: 'w-n5-334',
    word: 'あそこ',
    reading: 'あそこ',
    romaji: 'asoko',
    meaning: 'over there, that distant place',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-334-1', sentence: 'あそこに高いビルがあります。', furigana: 'あそこ に たかい ビル が あります。', romaji: 'Asoko ni takai biru ga arimasu.', english: 'There is a tall building over there.' },
      { id: 'ws-n5-334-2', sentence: 'あそこで友達を待ちます。', furigana: 'あそこ で ともだち を まちます。', romaji: 'Asoko de tomodachi o machimasu.', english: 'I will wait for my friend over there.' }
    ]
  },
  // ==========================================
  // === BATCH 4: CLOTHING, BODY, HEALTH, OBJECTS (w-n5-335 to w-n5-434) ===
  // ==========================================
  {
    id: 'w-n5-335',
    word: '服',
    reading: 'ふく',
    romaji: 'fuku',
    meaning: 'clothes, clothing',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"服","meaning":"Clothing"}],
    sentences: [
      { id: 'ws-n5-335-1', sentence: 'デパートで新しい服を買いました。', furigana: 'デパート で あたらしい ふく を かいました。', romaji: 'Depaato de atarashii fuku o kaimashita.', english: 'I bought new clothes at the department store.' },
      { id: 'ws-n5-335-2', sentence: '明日着る服を準備します。', furigana: 'あした きる ふく を じゅんび します。', romaji: 'Ashita kiru fuku o junbi shimasu.', english: 'I prepare the clothes I will wear tomorrow.' }
    ]
  },
  {
    id: 'w-n5-336',
    word: '洋服',
    reading: 'ようふく',
    romaji: 'youfuku',
    meaning: 'Western clothes',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"洋","meaning":"Western"},{"char":"服","meaning":"Clothing"}],
    sentences: [
      { id: 'ws-n5-336-1', sentence: '毎朝、お気に入りの洋服を着ます。', furigana: 'まいあさ、おきにいり の ようふく を きます。', romaji: 'Maiasa, okiniiri no youfuku o kimasu.', english: 'Every morning, I wear my favorite clothes.' },
      { id: 'ws-n5-336-2', sentence: '洋服の店でズボンを買いました。', furigana: 'ようふく の みせ で ズボン を かいました。', romaji: 'Youfuku no mise de zubon o kaimashita.', english: 'I bought trousers at the clothing store.' }
    ]
  },
  {
    id: 'w-n5-337',
    word: '和服',
    reading: 'わふく',
    romaji: 'wafuku',
    meaning: 'Japanese clothes, kimono',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"和","meaning":"Japanese"},{"char":"服","meaning":"Clothing"}],
    sentences: [
      { id: 'ws-n5-337-1', sentence: 'お正月にきれいな和服を着ました。', furigana: 'おしょうがつ に きれい な わふく を きました。', romaji: 'Oshougatsu ni kirei na wafuku o kimashita.', english: 'I wore nice Japanese clothes on New Year\'s Day.' },
      { id: 'ws-n5-337-2', sentence: '京都で和服を着て歩きました。', furigana: 'きょうと で わふく を きて あるきました。', romaji: 'Kyouto de wafuku o kite arukimashita.', english: 'I walked around Kyoto wearing Japanese clothes.' }
    ]
  },
  {
    id: 'w-n5-338',
    word: '着物',
    reading: 'きもの',
    romaji: 'kimono',
    meaning: 'kimono',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"着","meaning":"Wear"},{"char":"物","meaning":"Thing"}],
    sentences: [
      { id: 'ws-n5-338-1', sentence: '姉はきれいな着物を着ています。', furigana: 'あね は きれい な きもの を きて います。', romaji: 'Ane wa kirei na kimono o kite imasu.', english: 'My older sister is wearing a pretty kimono.' },
      { id: 'ws-n5-338-2', sentence: '着物を着て写真を撮りました。', furigana: 'きもの を きて しゃしん を とりました。', romaji: 'Kimono o kite shashin o torimashita.', english: 'I took photos wearing a kimono.' }
    ]
  },
  {
    id: 'w-n5-339',
    word: 'シャツ',
    reading: 'しゃつ',
    romaji: 'shatsu',
    meaning: 'shirt',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-339-1', sentence: '白いシャツを着ています。', furigana: 'しろい シャツ を きて います。', romaji: 'Shiroi shatsu o kite imasu.', english: 'I am wearing a white shirt.' },
      { id: 'ws-n5-339-2', sentence: 'シャツをきれいに洗濯しました。', furigana: 'シャツ を きれい に せんたく しました。', romaji: 'Shatsu o kirei ni sentaku shimashita.', english: 'I washed the shirt cleanly.' }
    ]
  },
  {
    id: 'w-n5-340',
    word: 'Tシャツ',
    reading: 'てぃーしゃつ',
    romaji: 'tiishatsu',
    meaning: 'T-shirt',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-340-1', sentence: '夏に涼しいTシャツを着ます。', furigana: 'なつ に すずしい Tシャツ を きます。', romaji: 'Natsu ni suzushii tiishatsu o kimasu.', english: 'I wear a cool T-shirt in summer.' },
      { id: 'ws-n5-340-2', sentence: '青いTシャツを二枚買いました。', furigana: 'あおい Tシャツ を にまい かいました。', romaji: 'Aoi tiishatsu o nimai kaimashita.', english: 'I bought two blue T-shirts.' }
    ]
  },
  {
    id: 'w-n5-341',
    word: 'セーター',
    reading: 'せーたー',
    romaji: 'seetaa',
    meaning: 'sweater',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-341-1', sentence: '寒い日は暖かいセーターを着ます。', furigana: 'さむい ひ は あたたかい セーター を きます。', romaji: 'Samui hi wa atatakai seetaa o kimasu.', english: 'On cold days, I wear a warm sweater.' },
      { id: 'ws-n5-341-2', sentence: '母がセーターを編んでくれました。', furigana: 'はは が セーター を あんで くれました。', romaji: 'Haha ga seetaa o ande kuremashita.', english: 'My mother knitted a sweater for me.' }
    ]
  },
  {
    id: 'w-n5-342',
    word: '上着',
    reading: 'うわぎ',
    romaji: 'uwagi',
    meaning: 'jacket, outerwear',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"上","meaning":"Upper"},{"char":"着","meaning":"Wear"}],
    sentences: [
      { id: 'ws-n5-342-1', sentence: '寒いので上着を着てください。', furigana: 'さむい ので うわぎ を きて ください。', romaji: 'Samui node uwagi o kite kudasai.', english: 'Because it is cold, please put on a jacket.' },
      { id: 'ws-n5-342-2', sentence: '部屋に入って上着を脱ぎました。', furigana: 'へや に はいって うわぎ を ぬぎました。', romaji: 'Heya ni haitte uwagi o nugimashita.', english: 'I entered the room and took off my jacket.' }
    ]
  },
  {
    id: 'w-n5-343',
    word: 'コート',
    reading: 'こーと',
    romaji: 'kooto',
    meaning: 'coat, overcoat',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-343-1', sentence: '冬は暖かいコートを着ます。', furigana: 'ふゆ は あたたかい コート を きます。', romaji: 'Fuyu wa atatakai kooto o kimasu.', english: 'In winter, I wear a warm coat.' },
      { id: 'ws-n5-343-2', sentence: '玄関にコートを掛けました。', furigana: 'げんかん に コート を かけました。', romaji: 'Genkan ni kooto o kakemashita.', english: 'I hung the coat in the entrance hall.' }
    ]
  },
  {
    id: 'w-n5-344',
    word: 'ズボン',
    reading: 'ずぼん',
    romaji: 'zubon',
    meaning: 'trousers, pants',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-344-1', sentence: '黒いズボンを履いています。', furigana: 'くろい ズボン を はいて います。', romaji: 'Kuroi zubon o haite imasu.', english: 'I am wearing black trousers.' },
      { id: 'ws-n5-344-2', sentence: '新しいズボンを一本買いました。', furigana: 'あたらしい ズボン を いっぽん かいました。', romaji: 'Atarashii zubon o ippon kaimashita.', english: 'I bought a pair of new trousers.' }
    ]
  },
  {
    id: 'w-n5-345',
    word: 'スカート',
    reading: 'すかーと',
    romaji: 'sukaato',
    meaning: 'skirt',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-345-1', sentence: 'かわいいスカートを履いています。', furigana: 'かわいい スカート を はいて います。', romaji: 'Kawaii sukaato o haite imasu.', english: 'She is wearing a cute skirt.' },
      { id: 'ws-n5-345-2', sentence: 'デパートで赤いスカートを買いました。', furigana: 'デパート で あかい スカート を かいました。', romaji: 'Depaato de akai sukaato o kaimashita.', english: 'I bought a red skirt at the department store.' }
    ]
  },
  {
    id: 'w-n5-346',
    word: '靴',
    reading: 'くつ',
    romaji: 'kutsu',
    meaning: 'shoes',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"靴","meaning":"Shoe"}],
    sentences: [
      { id: 'ws-n5-346-1', sentence: '新しい靴を履いて出かけます。', furigana: 'あたらしい くつ を はいて でかけます。', romaji: 'Atarashii kutsu o haite dekakemasu.', english: 'I put on new shoes and go out.' },
      { id: 'ws-n5-346-2', sentence: '玄関で靴を脱ぎます。', furigana: 'げんかん で くつ を ぬぎます。', romaji: 'Genkan de kutsu o nugimasu.', english: 'I take off my shoes at the entrance.' }
    ]
  },
  {
    id: 'w-n5-347',
    word: '靴下',
    reading: 'くつした',
    romaji: 'kutsushita',
    meaning: 'socks',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"靴","meaning":"Shoe"},{"char":"下","meaning":"Under / Below"}],
    sentences: [
      { id: 'ws-n5-347-1', sentence: '毎朝、白い靴下を履きます。', furigana: 'まいあさ、しろい くつした を はきます。', romaji: 'Maiasa, shiroi kutsushita o hakimasu.', english: 'Every morning, I put on white socks.' },
      { id: 'ws-n5-347-2', sentence: '靴下に穴が開いていました。', furigana: 'くつした に あな が あいて いました。', romaji: 'Kutsushita ni ana ga aite imashita.', english: 'There was a hole in my sock.' }
    ]
  },
  {
    id: 'w-n5-348',
    word: '帽子',
    reading: 'ぼうし',
    romaji: 'boushi',
    meaning: 'hat, cap',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"帽","meaning":"Cap"},{"char":"子","meaning":"Child / Noun suffix"}],
    sentences: [
      { id: 'ws-n5-348-1', sentence: '晴れた日は帽子を被って出かけます。', furigana: 'はれた ひ は ぼうし を かぶって でかけます。', romaji: 'Hareta hi wa boushi o kabutte dekakemasu.', english: 'On sunny days, I wear a hat and go out.' },
      { id: 'ws-n5-348-2', sentence: '田中さんは黒い帽子を被っています。', furigana: 'たなかさん は くろい ぼうし を かぶって います。', romaji: 'Tanaka-san wa kuroi boushi o kabutte imasu.', english: 'Mr. Tanaka is wearing a black hat.' }
    ]
  },
  {
    id: 'w-n5-349',
    word: 'ポケット',
    reading: 'ぽけっと',
    romaji: 'poketto',
    meaning: 'pocket',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-349-1', sentence: 'ポケットに鍵を入れました。', furigana: 'ポケット に かぎ を いれました。', romaji: 'Poketto ni kagi o iremashita.', english: 'I put the keys in my pocket.' },
      { id: 'ws-n5-349-2', sentence: 'コートのポケットはとても広いです。', furigana: 'コート の ポケット は とても ひろい です。', romaji: 'Kooto no poketto wa totemo hiroi desu.', english: 'The coat pocket is very roomy.' }
    ]
  },
  {
    id: 'w-n5-350',
    word: 'ボタン',
    reading: 'ぼたん',
    romaji: 'botan',
    meaning: 'button',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-350-1', sentence: 'シャツのボタンを留めます。', furigana: 'シャツ の ボタン を とめます。', romaji: 'Shatsu no botan o tomemasu.', english: 'I fasten the buttons of the shirt.' },
      { id: 'ws-n5-350-2', sentence: 'このボタンを押すとドアが開きます。', furigana: 'この ボタン を おす と ドア が あきます。', romaji: 'Kono botan o osu to doa ga akimasu.', english: 'When you press this button, the door opens.' }
    ]
  },
  {
    id: 'w-n5-351',
    word: 'ネクタイ',
    reading: 'ねくたい',
    romaji: 'nekutai',
    meaning: 'necktie',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-351-1', sentence: '父は毎朝、ネクタイを締めます。', furigana: 'ちち は まいあさ、ネクタイ を しめます。', romaji: 'Chichi wa maiasa, nekutai o shimemasu.', english: 'My father wears a tie every morning.' },
      { id: 'ws-n5-351-2', sentence: '青いネクタイを買いました。', furigana: 'あおい ネクタイ を かいました。', romaji: 'Aoi nekutai o kaimashita.', english: 'I bought a blue necktie.' }
    ]
  },
  {
    id: 'w-n5-352',
    word: 'ハンカチ',
    reading: 'はんかち',
    romaji: 'hankachi',
    meaning: 'handkerchief',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-352-1', sentence: 'ポケットにきれいなハンカチを入れます。', furigana: 'ポケット に きれい な ハンカチ を いれます。', romaji: 'Poketto ni kirei na hankachi o iremasu.', english: 'I put a clean handkerchief in my pocket.' },
      { id: 'ws-n5-352-2', sentence: '手を洗ってハンカチで拭きました。', furigana: 'て を あらって ハンカチ で ふきました。', romaji: 'Te o aratte hankachi de fukimashita.', english: 'I washed my hands and dried them with a handkerchief.' }
    ]
  },
  {
    id: 'w-n5-353',
    word: '手袋',
    reading: 'てぶくろ',
    romaji: 'tebukuro',
    meaning: 'gloves, mittens',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"手","meaning":"Hand"},{"char":"袋","meaning":"Bag / Sack"}],
    sentences: [
      { id: 'ws-n5-353-1', sentence: '冬は暖かい手袋をはめます。', furigana: 'ふゆ は あたたかい てぶくろ を はめます。', romaji: 'Fuyu wa atatakai tebukuro o hamemasu.', english: 'In winter, I wear warm gloves.' },
      { id: 'ws-n5-353-2', sentence: '手袋を落としてしまいました。', furigana: 'てぶくろ を おとして しまいました。', romaji: 'Tebukuro o otoshite shimaimashita.', english: 'I accidentally dropped my gloves.' }
    ]
  },
  {
    id: 'w-n5-354',
    word: '指輪',
    reading: 'ゆびわ',
    romaji: 'yubiwa',
    meaning: 'ring (jewelry)',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"指","meaning":"Finger"},{"char":"輪","meaning":"Ring / Circle"}],
    sentences: [
      { id: 'ws-n5-354-1', sentence: '母にきれいな指輪をプレゼントしました。', furigana: 'はは に きれい な ゆびわ を プレゼント しました。', romaji: 'Haha ni kirei na yubiwa o purezento shimashita.', english: 'I presented a pretty ring to my mother.' },
      { id: 'ws-n5-354-2', sentence: '彼女は銀の指輪をしています。', furigana: 'かのじょ は ぎん の ゆびわ を して います。', romaji: 'Kanojo wa gin no yubiwa o shite imasu.', english: 'She is wearing a silver ring.' }
    ]
  },
  {
    id: 'w-n5-355',
    word: 'スリッパ',
    reading: 'すりっぱ',
    romaji: 'surippa',
    meaning: 'slippers',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-355-1', sentence: '部屋でスリッパを履いてください。', furigana: 'へや で スリッパ を はいて ください。', romaji: 'Heya de surippa o haite kudasai.', english: 'Please wear slippers in the room.' },
      { id: 'ws-n5-355-2', sentence: '玄関にスリッパを並べました。', furigana: 'げんかん に スリッパ を ならべました。', romaji: 'Genkan ni surippa o narabemashita.', english: 'I arranged slippers at the entrance.' }
    ]
  },
  {
    id: 'w-n5-356',
    word: 'サンダル',
    reading: 'さんだる',
    romaji: 'sandaru',
    meaning: 'sandals',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-356-1', sentence: '夏にサンダルを履いて海へ行きます。', furigana: 'なつ に サンダル を はいて うみ へ いきます。', romaji: 'Natsu ni sandaru o haite umi e ikimasu.', english: 'In summer, I wear sandals to the beach.' },
      { id: 'ws-n5-356-2', sentence: '庭に出るときサンダルを履きます。', furigana: 'にわ に でる とき サンダル を はきます。', romaji: 'Niwa ni deru toki sandaru o hakimasu.', english: 'I wear sandals when stepping out into the garden.' }
    ]
  },
  {
    id: 'w-n5-357',
    word: 'パジャマ',
    reading: 'ぱじゃま',
    romaji: 'pajama',
    meaning: 'pajamas',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-357-1', sentence: '寝る前にパジャマに着替えます。', furigana: 'ねる まえ に パジャマ に きがえます。', romaji: 'Neru mae ni pajama ni kigaemasu.', english: 'I change into pajamas before sleeping.' },
      { id: 'ws-n5-357-2', sentence: '柔らかいパジャマを買いました。', furigana: 'やわらかい パジャマ を かいました。', romaji: 'Yawarakai pajama o kaimashita.', english: 'I bought soft pajamas.' }
    ]
  },
  {
    id: 'w-n5-358',
    word: 'パンツ',
    reading: 'ぱんつ',
    romaji: 'pantsu',
    meaning: 'underpants, underwear',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-358-1', sentence: 'お風呂の後に新しいパンツを履きます。', furigana: 'おふろ の あと に あたらしい パンツ を はきます。', romaji: 'Ofuro no ato ni atarashii pantsu o hakimasu.', english: 'I put on clean underwear after the bath.' },
      { id: 'ws-n5-358-2', sentence: '旅行のためにパンツを準備しました。', furigana: 'りょこう の ため に パンツ を じゅんび しました。', romaji: 'Ryokou no tame ni pantsu o junbi shimashita.', english: 'I prepared underwear for the trip.' }
    ]
  },
  {
    id: 'w-n5-359',
    word: 'ベルト',
    reading: 'べると',
    romaji: 'beruto',
    meaning: 'belt',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-359-1', sentence: 'ズボンに黒いベルトを締めます。', furigana: 'ズボン に くろい ベルト を しめます。', romaji: 'Zubon ni kuroi beruto o shimemasu.', english: 'I fasten a black belt on my trousers.' },
      { id: 'ws-n5-359-2', sentence: '革のベルトを買いました。', furigana: 'かわ の ベルト を かいました。', romaji: 'Kawa no beruto o kaimashita.', english: 'I bought a leather belt.' }
    ]
  },
  {
    id: 'w-n5-360',
    word: '荷物',
    reading: 'にもつ',
    romaji: 'nimotsu',
    meaning: 'luggage, baggage, parcel',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"荷","meaning":"Load / Luggage"},{"char":"物","meaning":"Thing"}],
    sentences: [
      { id: 'ws-n5-360-1', sentence: '重い荷物を持ちます。', furigana: 'おもい にもつ を もちます。', romaji: 'Omoi nimotsu o mochimasu.', english: 'I carry heavy luggage.' },
      { id: 'ws-n5-360-2', sentence: '今日、家に荷物が届きました。', furigana: 'きょう、いえ に にもつ が とどきました。', romaji: 'Kyou, ie ni nimotsu ga todokimashita.', english: 'A package arrived at home today.' }
    ]
  },
  {
    id: 'w-n5-361',
    word: 'かばん',
    reading: 'かばん',
    romaji: 'kaban',
    meaning: 'bag, briefcase',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-361-1', sentence: '机の上にかばんを置きました。', furigana: 'つくえ の うえ に かばん を おきました。', romaji: 'Tsukue no ue ni kaban o okimashita.', english: 'I put the bag on the desk.' },
      { id: 'ws-n5-361-2', sentence: '新しい黒いかばんを買いました。', furigana: 'あたらしい くろい かばん を かいました。', romaji: 'Atarashii kuroi kaban o kaimashita.', english: 'I bought a new black bag.' }
    ]
  },
  {
    id: 'w-n5-362',
    word: '箱',
    reading: 'はこ',
    romaji: 'hako',
    meaning: 'box, case',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"箱","meaning":"Box"}],
    sentences: [
      { id: 'ws-n5-362-1', sentence: 'プレゼントをきれいな箱に入れました。', furigana: 'プレゼント を きれい な はこ に いれました。', romaji: 'Purezento o kirei na hako ni iremashita.', english: 'I put the gift in a pretty box.' },
      { id: 'ws-n5-362-2', sentence: '箱の中に何が入っていますか。', furigana: 'はこ の なか に なに が はいって います か。', romaji: 'Hako no naka ni nani ga haitte imasu ka.', english: 'What is inside the box?' }
    ]
  },
  {
    id: 'w-n5-363',
    word: '体',
    reading: 'からだ',
    romaji: 'karada',
    meaning: 'body, health',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"体","meaning":"Body"}],
    sentences: [
      { id: 'ws-n5-363-1', sentence: '体に気をつけてください。', furigana: 'からだ に き を つけて ください。', romaji: 'Karada ni ki o tsukete kudasai.', english: 'Please take good care of your health.' },
      { id: 'ws-n5-363-2', sentence: '毎日運動して体を動かします。', furigana: 'まいにち うんどう して からだ を うごかします。', romaji: 'Mainichi undou shite karada o ugokashimasu.', english: 'I exercise and move my body every day.' }
    ]
  },
  {
    id: 'w-n5-364',
    word: '頭',
    reading: 'あたま',
    romaji: 'atama',
    meaning: 'head, brain',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"頭","meaning":"Head"}],
    sentences: [
      { id: 'ws-n5-364-1', sentence: '風邪で頭が痛いです。', furigana: 'かぜ で あたま が いたい です。', romaji: 'Kaze de atama ga itai desu.', english: 'My head hurts from a cold.' },
      { id: 'ws-n5-364-2', sentence: '田中さんはとても頭がいいです。', furigana: 'たなかさん は とても あたま が いい です。', romaji: 'Tanaka-san wa totemo atama ga ii desu.', english: 'Mr. Tanaka is very smart.' }
    ]
  },
  {
    id: 'w-n5-365',
    word: '顔',
    reading: 'かお',
    romaji: 'kao',
    meaning: 'face',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"顔","meaning":"Face"}],
    sentences: [
      { id: 'ws-n5-365-1', sentence: '朝起きて冷たい水で顔を洗います。', furigana: 'あさ おきて つめたい みず で かお を あらいます。', romaji: 'Asa okite tsumetai mizu de kao o araimasu.', english: 'I wake up in the morning and wash my face with cold water.' },
      { id: 'ws-n5-365-2', sentence: '田中さんはいつも明るい顔をしています。', furigana: 'たなかさん は いつも あかるい かお を して います。', romaji: 'Tanaka-san wa itsumo akarui kao o shite imasu.', english: 'Mr. Tanaka always has a cheerful face.' }
    ]
  },
  {
    id: 'w-n5-366',
    word: '目',
    reading: 'め',
    romaji: 'me',
    meaning: 'eye',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"目","meaning":"Eye"}],
    sentences: [
      { id: 'ws-n5-366-1', sentence: '本の読みすぎで目が疲れました。', furigana: 'ほん の よみすぎ で め が つかれました。', romaji: 'Hon no yomisugi de me ga tsukaremashita.', english: 'My eyes got tired from reading too much.' },
      { id: 'ws-n5-366-2', sentence: 'あの女の子は目が大きいです。', furigana: 'あの おんなのこ は め が おおきい です。', romaji: 'Ano onnanoko wa me ga ookii desu.', english: 'That girl has big eyes.' }
    ]
  },
  {
    id: 'w-n5-367',
    word: '鼻',
    reading: 'はな',
    romaji: 'hana',
    meaning: 'nose',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"鼻","meaning":"Nose"}],
    sentences: [
      { id: 'ws-n5-367-1', sentence: '風邪を引いて鼻が出ます。', furigana: 'かぜ を ひいて はな が でます。', romaji: 'Kaze o hiite hana ga demasu.', english: 'I have a runny nose from a cold.' },
      { id: 'ws-n5-367-2', sentence: 'ぞうは鼻がとても長いです。', furigana: 'ぞう は はな が とても ながい です。', romaji: 'Zou wa hana ga totemo nagai desu.', english: 'The elephant has a very long nose/trunk.' }
    ]
  },
  {
    id: 'w-n5-368',
    word: '口',
    reading: 'くち',
    romaji: 'kuchi',
    meaning: 'mouth',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"口","meaning":"Mouth"}],
    sentences: [
      { id: 'ws-n5-368-1', sentence: '大きな口を開けてください。', furigana: 'おおきな くち を あけて ください。', romaji: 'Ookina kuchi o akete kudasai.', english: 'Please open your mouth wide.' },
      { id: 'ws-n5-368-2', sentence: 'ご飯を食べるときは口を閉じます。', furigana: 'ごはん を たべる とき は くち を とじます。', romaji: 'Gohan o taberu toki wa kuchi o tojimasu.', english: 'Close your mouth when eating.' }
    ]
  },
  {
    id: 'w-n5-369',
    word: '歯',
    reading: 'は',
    romaji: 'ha',
    meaning: 'tooth, teeth',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"歯","meaning":"Tooth"}],
    sentences: [
      { id: 'ws-n5-369-1', sentence: '毎食の後で歯を磨きます。', furigana: 'まいしょく の あと で は を みがきます。', romaji: 'Maishoku no ato de ha o migakimasu.', english: 'I brush my teeth after every meal.' },
      { id: 'ws-n5-369-2', sentence: '歯が痛いので歯医者に行きます。', furigana: 'は が いたい ので はいしゃ に いきます。', romaji: 'Ha ga itai node haisha ni ikimasu.', english: 'Because my tooth hurts, I will go to the dentist.' }
    ]
  },
  {
    id: 'w-n5-370',
    word: '耳',
    reading: 'みみ',
    romaji: 'mimi',
    meaning: 'ear',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"耳","meaning":"Ear"}],
    sentences: [
      { id: 'ws-n5-370-1', sentence: 'うさぎの耳は長いです。', furigana: 'うさぎ の みみ は ながい です。', romaji: 'Usagi no mimi wa nagai desu.', english: 'Rabbit ears are long.' },
      { id: 'ws-n5-370-2', sentence: '静かに耳を澄ませて聞きました。', furigana: 'しずかに みみ を すませて ききました。', romaji: 'Shizukani mimi o sumasete kikimashita.', english: 'I listened carefully with my ears.' }
    ]
  },
  {
    id: 'w-n5-371',
    word: '首',
    reading: 'くび',
    romaji: 'kubi',
    meaning: 'neck',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"首","meaning":"Neck"}],
    sentences: [
      { id: 'ws-n5-371-1', sentence: '首に暖かいマフラーを巻きます。', furigana: 'くび に あたたかい マフラー を まきます。', romaji: 'Kubi ni atatakai mafuraa o makimasu.', english: 'I wrap a warm scarf around my neck.' },
      { id: 'ws-n5-371-2', sentence: 'パソコンの見すぎで首が痛いです。', furigana: 'パソコン の みすぎ で くび が いたい です。', romaji: 'Pasokon no misugi de kubi ga itai desu.', english: 'My neck hurts from looking at the PC too much.' }
    ]
  },
  {
    id: 'w-n5-372',
    word: '手',
    reading: 'て',
    romaji: 'te',
    meaning: 'hand, arm',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"手","meaning":"Hand"}],
    sentences: [
      { id: 'ws-n5-372-1', sentence: 'ご飯の前に手をよく洗います。', furigana: 'ごはん の まえ に て を よく あらいます。', romaji: 'Gohan no mae ni te o yoku araimasu.', english: 'I wash my hands well before meals.' },
      { id: 'ws-n5-372-2', sentence: '質問がある人は手を挙げてください。', furigana: 'しつもん が ある ひと は て を あげて ください。', romaji: 'Shitsumon ga aru hito wa te o agete kudasai.', english: 'If you have a question, please raise your hand.' }
    ]
  },
  {
    id: 'w-n5-373',
    word: '指',
    reading: 'ゆび',
    romaji: 'yubi',
    meaning: 'finger, toe',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"指","meaning":"Finger"}],
    sentences: [
      { id: 'ws-n5-373-1', sentence: '薬指にきれいな指輪をはめました。', furigana: 'くすりゆび に きれい な ゆびわ を はめました。', romaji: 'Kusuriyubi ni kirei na yubiwa o hamemashita.', english: 'I put a pretty ring on my ring finger.' },
      { id: 'ws-n5-373-2', sentence: '紙で指を切ってしまいました。', furigana: 'かみ で ゆび を きって しまいました。', romaji: 'Kami de yubi o kitte shimaimashita.', english: 'I cut my finger on the paper.' }
    ]
  },
  {
    id: 'w-n5-374',
    word: '腕',
    reading: 'うで',
    romaji: 'ude',
    meaning: 'arm, skill',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"腕","meaning":"Arm"}],
    sentences: [
      { id: 'ws-n5-374-1', sentence: '重い物を持って腕が疲れました。', furigana: 'おもい もの を もって うで が つかれました。', romaji: 'Omoi mono o motte ude ga tsukaremashita.', english: 'My arms got tired from carrying heavy things.' },
      { id: 'ws-n5-374-2', sentence: '腕を組んで考えました。', furigana: 'うで を くんで かんがえました。', romaji: 'Ude o kunde kangaemashita.', english: 'I folded my arms and thought.' }
    ]
  },
  {
    id: 'w-n5-375',
    word: '肩',
    reading: 'かた',
    romaji: 'kata',
    meaning: 'shoulder',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"肩","meaning":"Shoulder"}],
    sentences: [
      { id: 'ws-n5-375-1', sentence: 'パソコンで仕事をして肩が凝りました。', furigana: 'パソコン で しごと を して かた が こりました。', romaji: 'Pasokon de shigoto o shite kata ga korimashita.', english: 'My shoulders became stiff from working on the PC.' },
      { id: 'ws-n5-375-2', sentence: '重い鞄を肩に掛けました。', furigana: 'おもい かばん を かた に かけました。', romaji: 'Omoi kaban o kata ni kakemashita.', english: 'I hung the heavy bag on my shoulder.' }
    ]
  },
  {
    id: 'w-n5-376',
    word: '膝',
    reading: 'ひざ',
    romaji: 'hiza',
    meaning: 'knee, lap',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"膝","meaning":"Knee"}],
    sentences: [
      { id: 'ws-n5-376-1', sentence: '走って転んで膝を痛めました。', furigana: 'はしって ころんで ひざ を いためました。', romaji: 'Hashitte koronde hiza o itamemashita.', english: 'I ran, fell, and hurt my knee.' },
      { id: 'ws-n5-376-2', sentence: '猫が私の膝の上に乗ってきました。', furigana: 'ねこ が わたし の ひざ の うえ に のって きました。', romaji: 'Neko ga watashi no hiza no ue ni notte kimashita.', english: 'The cat came and sat on my lap.' }
    ]
  },
  {
    id: 'w-n5-377',
    word: '足',
    reading: 'あし',
    romaji: 'ashi',
    meaning: 'foot, leg',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"足","meaning":"Foot / Leg"}],
    sentences: [
      { id: 'ws-n5-377-1', sentence: 'たくさん歩いて足が痛くなりました。', furigana: 'たくさん あるいて あし が いたく なりました。', romaji: 'Takusan aruite ashi ga itaku narimashita.', english: 'My legs became sore from walking a lot.' },
      { id: 'ws-n5-377-2', sentence: '電車で足を踏まれてしまいました。', furigana: 'でんしゃ で あし を ふまれて しまいました。', romaji: 'Densha de ashi o fumarete shimaimashita.', english: 'My foot was stepped on in the train.' }
    ]
  },
  {
    id: 'w-n5-378',
    word: '背中',
    reading: 'せなか',
    romaji: 'senaka',
    meaning: 'back (body)',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"背","meaning":"Back"},{"char":"中","meaning":"Middle"}],
    sentences: [
      { id: 'ws-n5-378-1', sentence: '背中が痛いので少し休みます。', furigana: 'せなか が いたい ので すこし やすみます。', romaji: 'Senaka ga itai node sukoshi yasumimasu.', english: 'My back hurts, so I will rest a little.' },
      { id: 'ws-n5-378-2', sentence: '猫が私の背中に乗りました。', furigana: 'ねこ が わたし の せなか に のりました。', romaji: 'Neko ga watashi no senaka ni norimashita.', english: 'The cat climbed onto my back.' }
    ]
  },
  {
    id: 'w-n5-379',
    word: '爪',
    reading: 'つめ',
    romaji: 'tsume',
    meaning: 'fingernail, toenail, claw',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"爪","meaning":"Nail / Claw"}],
    sentences: [
      { id: 'ws-n5-379-1', sentence: 'お風呂の後に爪を切ります。', furigana: 'おふろ の あと に つめ を きります。', romaji: 'Ofuro no ato ni tsume o kirimasu.', english: 'I clip my nails after the bath.' },
      { id: 'ws-n5-379-2', sentence: '爪をきれいに洗いました。', furigana: 'つめ を きれい に あらいました。', romaji: 'Tsume o kirei ni araimashita.', english: 'I washed my nails cleanly.' }
    ]
  },
  {
    id: 'w-n5-380',
    word: '髭',
    reading: 'ひげ',
    romaji: 'hige',
    meaning: 'beard, mustache',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"髭","meaning":"Beard"}],
    sentences: [
      { id: 'ws-n5-380-1', sentence: '父は毎朝、髭を剃ります。', furigana: 'ちち は まいあさ、ひげ を そります。', romaji: 'Chichi wa maiasa, hige o sorimasu.', english: 'My father shaves his beard every morning.' },
      { id: 'ws-n5-380-2', sentence: 'あの男の人は白い髭を生やしています。', furigana: 'あの おとこ の ひと は しろい ひげ を はやして います。', romaji: 'Ano otoko no hito wa shiroi hige o hayashite imasu.', english: 'That man has a white beard.' }
    ]
  },
  {
    id: 'w-n5-381',
    word: '声',
    reading: 'こえ',
    romaji: 'koe',
    meaning: 'voice',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"声","meaning":"Voice"}],
    sentences: [
      { id: 'ws-n5-381-1', sentence: '大きな声で挨拶をしましょう。', furigana: 'おおきな こえ で あいさつ を しましょう。', romaji: 'Ookina koe de aisatsu o shimashou.', english: 'Let\'s greet in a loud voice.' },
      { id: 'ws-n5-381-2', sentence: '友達の明るい声が聞こえました。', furigana: 'ともだち の あかるい こえ が きこえました。', romaji: 'Tomodachi no akarui koe ga kikoemashita.', english: 'I heard my friend\'s cheerful voice.' }
    ]
  },
  {
    id: 'w-n5-382',
    word: '髪',
    reading: 'かみ',
    romaji: 'kami',
    meaning: 'hair',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"髪","meaning":"Hair"}],
    sentences: [
      { id: 'ws-n5-382-1', sentence: '毎朝、ブラシで髪をとかします。', furigana: 'まいあさ、ブラシ で かみ を とかします。', romaji: 'Maiasa, burashi de kami o tokashimasu.', english: 'Every morning, I comb my hair with a brush.' },
      { id: 'ws-n5-382-2', sentence: '彼女は長い黒い髪をしています。', furigana: 'かのじょ は ながい くろい かみ を して います。', romaji: 'Kanojo wa nagai kuroi kami o shite imasu.', english: 'She has long black hair.' }
    ]
  },
  {
    id: 'w-n5-383',
    word: '骨',
    reading: 'ほね',
    romaji: 'hone',
    meaning: 'bone',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"骨","meaning":"Bone"}],
    sentences: [
      { id: 'ws-n5-383-1', sentence: '転んで足の骨を折りました。', furigana: 'ころんで あし の ほね を おりまし た。', romaji: 'Koronde ashi no hone o orimashita.', english: 'I fell and broke a leg bone.' },
      { id: 'ws-n5-383-2', sentence: '犬が庭で骨をかじっています。', furigana: 'いぬ が にわ で ほね を かじって います。', romaji: 'Inu ga niwa de hone o kajitte imasu.', english: 'The dog is chewing a bone in the yard.' }
    ]
  },
  {
    id: 'w-n5-384',
    word: '血',
    reading: 'ち',
    romaji: 'chi',
    meaning: 'blood',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"血","meaning":"Blood"}],
    sentences: [
      { id: 'ws-n5-384-1', sentence: '指を切って血が出ました。', furigana: 'ゆび を きって ち が でました。', romaji: 'Yubi o kitte chi ga demashita.', english: 'I cut my finger and it bled.' },
      { id: 'ws-n5-384-2', sentence: 'ハンカチで血を拭きました。', furigana: 'ハンカチ で ち を ふきました。', romaji: 'Hankachi de chi o fukimashita.', english: 'I wiped the blood with a handkerchief.' }
    ]
  },
  {
    id: 'w-n5-385',
    word: '心',
    reading: 'こころ',
    romaji: 'kokoro',
    meaning: 'heart, mind, spirit',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"心","meaning":"Heart / Mind"}],
    sentences: [
      { id: 'ws-n5-385-1', sentence: '田中さんは心がとても優しい人です。', furigana: 'たなかさん は こころ が とても やさしい ひと です。', romaji: 'Tanaka-san wa kokoro ga totemo yasashii hito desu.', english: 'Mr. Tanaka is a very kind-hearted person.' },
      { id: 'ws-n5-385-2', sentence: '美しい音楽を聞いて心が落ち着きました。', furigana: 'うつくしい おんがく を きいて こころ が おちつきました。', romaji: 'Utsukushii ongaku o kiite kokoro ga ochitsukimashita.', english: 'Listening to beautiful music calmed my heart.' }
    ]
  },
  {
    id: 'w-n5-386',
    word: '病気',
    reading: 'びょうき',
    romaji: 'byouki',
    meaning: 'illness, sickness',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"病","meaning":"Illness"},{"char":"気","meaning":"Spirit / Energy"}],
    sentences: [
      { id: 'ws-n5-386-1', sentence: '病気で学校を休みました。', furigana: 'びょうき で がっこう を やすみました。', romaji: 'Byouki de gakkou o yasumimashita.', english: 'I took a day off school due to illness.' },
      { id: 'ws-n5-386-2', sentence: '早く病気が治るといいですね。', furigana: 'はやく びょうき が なおる と いい です ね。', romaji: 'Hayaku byouki ga naoru to ii desu ne.', english: 'I hope you recover from your illness soon.' }
    ]
  },
  {
    id: 'w-n5-387',
    word: '風邪',
    reading: 'かぜ',
    romaji: 'kaze',
    meaning: 'a cold (illness)',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"風","meaning":"Wind"},{"char":"邪","meaning":"Wicked / Evil"}],
    sentences: [
      { id: 'ws-n5-387-1', sentence: '寒いので風邪を引きました。', furigana: 'さむい ので かぜ を ひきました。', romaji: 'Samui node kaze o hikimashita.', english: 'Because it was cold, I caught a cold.' },
      { id: 'ws-n5-387-2', sentence: '風邪薬を飲んで早く寝ます。', furigana: 'かぜぐすり を のんで はやく ねます。', romaji: 'Kazegusuri o nonde hayaku nemasu.', english: 'I will take cold medicine and sleep early.' }
    ]
  },
  {
    id: 'w-n5-388',
    word: '熱',
    reading: 'ねつ',
    romaji: 'netsu',
    meaning: 'fever, temperature, heat',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"熱","meaning":"Heat / Fever"}],
    sentences: [
      { id: 'ws-n5-388-1', sentence: '熱が三十八度あります。', furigana: 'ねつ が さんじゅうはちど あります。', romaji: 'Netsu ga sanjuuhachido arimasu.', english: 'I have a fever of 38 degrees.' },
      { id: 'ws-n5-388-2', sentence: '高い熱が出たので病院へ行きました。', furigana: 'たかい ねつ が でた ので びょういん へ いきました。', romaji: 'Takai netsu ga deta node byouin e ikimashita.', english: 'I went to the hospital because I had a high fever.' }
    ]
  },
  {
    id: 'w-n5-389',
    word: '咳',
    reading: 'せき',
    romaji: 'seki',
    meaning: 'cough',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"咳","meaning":"Cough"}],
    sentences: [
      { id: 'ws-n5-389-1', sentence: '朝からひどい咳が出ます。', furigana: 'あさ から ひどい せき が でます。', romaji: 'Asa kara hidoi seki ga demasu.', english: 'I have a bad cough since morning.' },
      { id: 'ws-n5-389-2', sentence: '咳が出るときはマスクをしてください。', furigana: 'せき が でる とき は マスク を して ください。', romaji: 'Seki ga deru toki wa masuku o shite kudasai.', english: 'Please wear a mask when coughing.' }
    ]
  },
  {
    id: 'w-n5-390',
    word: '怪我',
    reading: 'けが',
    romaji: 'kega',
    meaning: 'injury, wound',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"怪","meaning":"Suspicious / Mystery"},{"char":"我","meaning":"Self"}],
    sentences: [
      { id: 'ws-n5-390-1', sentence: 'サッカーをして足に怪我をしました。', furigana: 'サッカー を して あし に けが を しました。', romaji: 'Sakkaa o shite ashi ni kega o shimashita.', english: 'I injured my leg playing soccer.' },
      { id: 'ws-n5-390-2', sentence: '大した怪我ではなくて良かったです。', furigana: 'たいした けが で は なくて よかった です。', romaji: 'Taishita kega de wa nakute yokatta desu.', english: 'I am glad it was not a serious injury.' }
    ]
  },
  {
    id: 'w-n5-391',
    word: '薬',
    reading: 'くすり',
    romaji: 'kusuri',
    meaning: 'medicine',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"薬","meaning":"Medicine"}],
    sentences: [
      { id: 'ws-n5-391-1', sentence: 'ご飯の後に薬を飲みます。', furigana: 'ごはん の あと に くすり を のみます。', romaji: 'Gohan no ato ni kusuri o nomimasu.', english: 'I take medicine after meals.' },
      { id: 'ws-n5-391-2', sentence: '薬局で風邪の薬を買いました。', furigana: 'やっきょく で かぜ の くすり を かいました。', romaji: 'Yakkyoku de kaze no kusuri o kaimashita.', english: 'I bought cold medicine at the pharmacy.' }
    ]
  },
  {
    id: 'w-n5-392',
    word: '病院',
    reading: 'びょういん',
    romaji: 'byouin',
    meaning: 'hospital, clinic',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"病","meaning":"Illness"},{"char":"院","meaning":"Institution"}],
    sentences: [
      { id: 'ws-n5-392-1', sentence: '体の具合が悪いので病院へ行きます。', furigana: 'からだ の ぐあい が わるい ので びょういん へ いきます。', romaji: 'Karada no guai ga warui node byouin e ikimasu.', english: 'Because I feel unwell, I will go to the hospital.' },
      { id: 'ws-n5-392-2', sentence: '駅の近くに大きな病院があります。', furigana: 'えき の ちかく に おおきな びょういん が あります。', romaji: 'Eki no chikaku ni ookina byouin ga arimasu.', english: 'There is a big hospital near the station.' }
    ]
  },
  {
    id: 'w-n5-393',
    word: '薬局',
    reading: 'やっきょく',
    romaji: 'yakkyoku',
    meaning: 'pharmacy, drugstore',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"薬","meaning":"Medicine"},{"char":"局","meaning":"Bureau / Department"}],
    sentences: [
      { id: 'ws-n5-393-1', sentence: '薬局で目薬を買いました。', furigana: 'やっきょく で めぐすり を かいました。', romaji: 'Yakkyoku de megusuri o kaimashita.', english: 'I bought eye drops at the pharmacy.' },
      { id: 'ws-n5-393-2', sentence: '病院の前に薬局があります。', furigana: 'びょういん の まえ に やっきょく が あります。', romaji: 'Byouin no mae ni yakkyoku ga arimasu.', english: 'There is a pharmacy in front of the hospital.' }
    ]
  },
  {
    id: 'w-n5-394',
    word: '歯医者',
    reading: 'はいしゃ',
    romaji: 'haisha',
    meaning: 'dentist',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"歯","meaning":"Tooth"},{"char":"医","meaning":"Doctor"},{"char":"者","meaning":"Person"}],
    sentences: [
      { id: 'ws-n5-394-1', sentence: '歯が痛いので歯医者を予約しました。', furigana: 'は が いたい ので はいしゃ を よやく しました。', romaji: 'Ha ga itai node haisha o yoyaku shimashita.', english: 'Because my tooth hurts, I made an appointment with the dentist.' },
      { id: 'ws-n5-394-2', sentence: '明日の午後、歯医者へ行きます。', furigana: 'あした の ごご、はいしゃ へ いきます。', romaji: 'Ashita no gogo, haisha e ikimasu.', english: 'Tomorrow afternoon, I will go to the dentist.' }
    ]
  },
  {
    id: 'w-n5-395',
    word: '看護師',
    reading: 'かんごし',
    romaji: 'kangoshi',
    meaning: 'nurse',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"看","meaning":"Watch / Care"},{"char":"護","meaning":"Protect"},{"char":"師","meaning":"Master / Expert"}],
    sentences: [
      { id: 'ws-n5-395-1', sentence: 'あの看護師さんはとても親切です。', furigana: 'あの かんごしさん は とても しんせつ です。', romaji: 'Ano kangoshisan wa totemo shinsetsu desu.', english: 'That nurse is very kind.' },
      { id: 'ws-n5-395-2', sentence: '私の姉は病院で看護師をしています。', furigana: 'わたし の あね は びょういん で かんごし を して います。', romaji: 'Watashi no ane wa byouin de kangoshi o shite imasu.', english: 'My older sister is a nurse at a hospital.' }
    ]
  },
  {
    id: 'w-n5-396',
    word: '体温計',
    reading: 'たいおんけい',
    romaji: 'taionkei',
    meaning: 'thermometer (medical)',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"体","meaning":"Body"},{"char":"温","meaning":"Warmth"},{"char":"計","meaning":"Measure"}],
    sentences: [
      { id: 'ws-n5-396-1', sentence: '体温計で熱を測りました。', furigana: 'たいおんけい で ねつ を はかりました。', romaji: 'Taionkei de netsu o hakarimashita.', english: 'I measured my fever with a thermometer.' },
      { id: 'ws-n5-396-2', sentence: '体温計は引き出しの中にあります。', furigana: 'たいおんけい は ひきだし の なか に あります。', romaji: 'Taionkei wa hikidashi no naka ni arimasu.', english: 'The thermometer is inside the drawer.' }
    ]
  },
  {
    id: 'w-n5-397',
    word: '注射',
    reading: 'ちゅうしゃ',
    romaji: 'chuusha',
    meaning: 'injection, shot',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"注","meaning":"Pour"},{"char":"射","meaning":"Shoot"}],
    sentences: [
      { id: 'ws-n5-397-1', sentence: '病院で注射をしてもらいました。', furigana: 'びょういん で ちゅうしゃ を して もらいました。', romaji: 'Byouin de chuusha o shite moraimashita.', english: 'I received an injection at the hospital.' },
      { id: 'ws-n5-397-2', sentence: '子供は注射が嫌いです。', furigana: 'こども は ちゅうしゃ が きらい です。', romaji: 'Kodomo wa chuusha ga kirai desu.', english: 'Children dislike injections.' }
    ]
  },
  {
    id: 'w-n5-398',
    word: '痛い',
    reading: 'いたい',
    romaji: 'itai',
    meaning: 'painful, sore, hurts',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"痛","meaning":"Pain"}],
    sentences: [
      { id: 'ws-n5-398-1', sentence: '頭がとても痛いです。', furigana: 'あたま が とても いたい です。', romaji: 'Atama ga totemo itai desu.', english: 'My head hurts very much.' },
      { id: 'ws-n5-398-2', sentence: '転んで足が痛くなりました。', furigana: 'ころんで あし が いたく なりました。', romaji: 'Koronde ashi ga itaku narimashita.', english: 'I fell and my leg became painful.' }
    ]
  },
  {
    id: 'w-n5-399',
    word: '元気',
    reading: 'げんき',
    romaji: 'genki',
    meaning: 'healthy, energetic, fine',
    pos: 'adjective',
    posLabel: 'na-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"元","meaning":"Origin"},{"char":"気","meaning":"Energy"}],
    sentences: [
      { id: 'ws-n5-399-1', sentence: 'お元気ですか。', furigana: 'おげんき です か。', romaji: 'Ogenki desu ka.', english: 'How are you?' },
      { id: 'ws-n5-399-2', sentence: 'はい、とても元気です。', furigana: 'はい、とても げんき です。', romaji: 'Hai, totemo genki desu.', english: 'Yes, I am very well.' }
    ]
  },
  {
    id: 'w-n5-400',
    word: '丈夫',
    reading: 'じょうぶ',
    romaji: 'joubu',
    meaning: 'healthy, sturdy, durable',
    pos: 'adjective',
    posLabel: 'na-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"丈","meaning":"Length / Stature"},{"char":"夫","meaning":"Man / Husband"}],
    sentences: [
      { id: 'ws-n5-400-1', sentence: '彼は体がとても丈夫です。', furigana: 'かれ は からだ が とても じょうぶ です。', romaji: 'Kare wa karada ga totemo joubu desu.', english: 'He has a very sturdy body.' },
      { id: 'ws-n5-400-2', sentence: 'この机は丈夫で長持ちします。', furigana: 'この つくえ は じょうぶ で ながもち します。', romaji: 'Kono tsukue wa joubu de nagamochi shimasu.', english: 'This desk is sturdy and durable.' }
    ]
  },
  {
    id: 'w-n5-401',
    word: '大丈夫',
    reading: 'だいじょうぶ',
    romaji: 'daijoubu',
    meaning: 'all right, okay, safe',
    pos: 'adjective',
    posLabel: 'na-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"大","meaning":"Big"},{"char":"丈","meaning":"Stature"},{"char":"夫","meaning":"Man"}],
    sentences: [
      { id: 'ws-n5-401-1', sentence: '怪我はありませんか、大丈夫ですか。', furigana: 'けが は ありません か、だいじょうぶ です か。', romaji: 'Kega wa arimasen ka, daijoubu desu ka.', english: 'Are you not hurt? Are you okay?' },
      { id: 'ws-n5-401-2', sentence: '心配しないでください、大丈夫です。', furigana: 'しんぱい しないで ください、だいじょうぶ です。', romaji: 'Shinpai shinaide kudasai, daijoubu desu.', english: 'Please don\'t worry, I am all right.' }
    ]
  },
  {
    id: 'w-n5-402',
    word: 'シャワー',
    reading: 'しゃわー',
    romaji: 'shawaa',
    meaning: 'shower',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-402-1', sentence: '毎朝、シャワーを浴びます。', furigana: 'まいあさ、シャワー を あびます。', romaji: 'Maiasa, shawaa o abimasu.', english: 'Every morning, I take a shower.' },
      { id: 'ws-n5-402-2', sentence: '暑いのでシャワーを浴びてきました。', furigana: 'あつい ので シャワー を あびて きました。', romaji: 'Atsui node shawaa o abite kimashita.', english: 'Because it was hot, I took a shower.' }
    ]
  },
  {
    id: 'w-n5-403',
    word: '石鹸',
    reading: 'せっけん',
    romaji: 'sekken',
    meaning: 'soap',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"石","meaning":"Stone"},{"char":"鹸","meaning":"Soap / Salt"}],
    sentences: [
      { id: 'ws-n5-403-1', sentence: '石鹸で手をきれいに洗います。', furigana: 'せっけん で て を きれい に あらいます。', romaji: 'Sekken de te o kirei ni araimasu.', english: 'I wash my hands cleanly with soap.' },
      { id: 'ws-n5-403-2', sentence: 'いい匂いの石鹸を買いました。', furigana: 'いい におい の せっけん を かいました。', romaji: 'Ii nioi no sekken o kaimashita.', english: 'I bought a nice-smelling soap.' }
    ]
  },
  {
    id: 'w-n5-404',
    word: 'シャンプー',
    reading: 'しゃんぷう',
    romaji: 'shanpuu',
    meaning: 'shampoo',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-404-1', sentence: 'お風呂でシャンプーを使って髪を洗います。', furigana: 'おふろ で シャンプー を つかって かみ を あらいます。', romaji: 'Ofuro de shanpuu o tsukatte kami o araimasu.', english: 'In the bath, I wash my hair with shampoo.' },
      { id: 'ws-n5-404-2', sentence: '新しいシャンプーを買いました。', furigana: 'あたらしい シャンプー を かいました。', romaji: 'Atarashii shanpuu o kaimashita.', english: 'I bought new shampoo.' }
    ]
  },
  {
    id: 'w-n5-405',
    word: 'タオル',
    reading: 'たおる',
    romaji: 'taoru',
    meaning: 'towel',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-405-1', sentence: '柔らかいタオルで顔を拭きました。', furigana: 'やわらかい タオル で かお を ふきました。', romaji: 'Yawarakai taoru de kao o fukimashita.', english: 'I wiped my face with a soft towel.' },
      { id: 'ws-n5-405-2', sentence: '清潔なタオルを一枚ください。', furigana: 'せいけつ な タオル を いちまい ください。', romaji: 'Seiketsu na taoru o ichimai kudasai.', english: 'Please give me one clean towel.' }
    ]
  },
  {
    id: 'w-n5-406',
    word: '歯ブラシ',
    reading: 'はぶらし',
    romaji: 'haburashi',
    meaning: 'toothbrush',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"歯","meaning":"Tooth"}],
    sentences: [
      { id: 'ws-n5-406-1', sentence: '新しい歯ブラシを買いました。', furigana: 'あたらしい はぶらし を かいました。', romaji: 'Atarashii haburashi o kaimashita.', english: 'I bought a new toothbrush.' },
      { id: 'ws-n5-406-2', sentence: '歯ブラシに歯磨き粉をつけます。', furigana: 'はぶらし に はみがきこ を つけます。', romaji: 'Haburashi ni hamigakiko o tsukemasu.', english: 'I put toothpaste on the toothbrush.' }
    ]
  },
  {
    id: 'w-n5-407',
    word: '鏡',
    reading: 'かがみ',
    romaji: 'kagami',
    meaning: 'mirror',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"鏡","meaning":"Mirror"}],
    sentences: [
      { id: 'ws-n5-407-1', sentence: '鏡を見て髪を整えます。', furigana: 'かがみ を みて かみ を ととのえます。', romaji: 'Kagami o mite kami o totonoemasu.', english: 'I look in the mirror and tidy my hair.' },
      { id: 'ws-n5-407-2', sentence: '洗面所に大きな鏡があります。', furigana: 'せんめんじょ に おおきな かがみ が あります。', romaji: 'Senmenjo ni ookina kagami ga arimasu.', english: 'There is a big mirror in the washroom.' }
    ]
  },
  {
    id: 'w-n5-408',
    word: '洗濯',
    reading: 'せんたく',
    romaji: 'sentaku',
    meaning: 'laundry, washing clothes',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"洗","meaning":"Wash"},{"char":"濯","meaning":"Rinse"}],
    sentences: [
      { id: 'ws-n5-408-1', sentence: '晴れた日に洗濯をします。', furigana: 'はれた ひ に せんたく を します。', romaji: 'Hareta hi ni sentaku o shimasu.', english: 'I do laundry on sunny days.' },
      { id: 'ws-n5-408-2', sentence: '日曜日にたくさん洗濯をしました。', furigana: 'にちようび に たくさん せんたく を しました。', romaji: 'Nichiyoubi ni takusan sentaku o shimashita.', english: 'I did a lot of laundry on Sunday.' }
    ]
  },
  {
    id: 'w-n5-409',
    word: '掃除',
    reading: 'そうじ',
    romaji: 'souji',
    meaning: 'cleaning, sweeping',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"掃","meaning":"Sweep"},{"char":"除","meaning":"Remove"}],
    sentences: [
      { id: 'ws-n5-409-1', sentence: '週末に自分の部屋を掃除します。', furigana: 'しゅうまつ に じぶん の へや を そうじ します。', romaji: 'Shuumatsu ni jibun no heya o souji shimasu.', english: 'I clean my room on weekends.' },
      { id: 'ws-n5-409-2', sentence: '教室の掃除が終わりました。', furigana: 'きょうしつ の そうじ が おわりました。', romaji: 'Kyoushitsu no souji ga owarimashita.', english: 'Classroom cleaning has finished.' }
    ]
  },
  {
    id: 'w-n5-410',
    word: '洗剤',
    reading: 'せんざい',
    romaji: 'senzai',
    meaning: 'detergent, cleanser',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"洗","meaning":"Wash"},{"char":"剤","meaning":"Dose / Agent"}],
    sentences: [
      { id: 'ws-n5-410-1', sentence: '洗濯機に洗剤を入れます。', furigana: 'せんたくき に せんざい を いれます。', romaji: 'Sentakuki ni senzai o iremasu.', english: 'I put detergent into the washing machine.' },
      { id: 'ws-n5-410-2', sentence: 'スーパーで食器用洗剤を買いました。', furigana: 'スーパー で しょっきよう せんざい を かいました。', romaji: 'Suupaa de shokkiyou senzai o kaimashita.', english: 'I bought dish detergent at the supermarket.' }
    ]
  },
  {
    id: 'w-n5-411',
    word: 'ごみ',
    reading: 'ごみ',
    romaji: 'gomi',
    meaning: 'garbage, trash',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-411-1', sentence: '部屋のごみを集めました。', furigana: 'へや の ごみ を あつめました。', romaji: 'Heya no gomi o atsumemashita.', english: 'I collected the trash in the room.' },
      { id: 'ws-n5-411-2', sentence: '火曜日にごみを出します。', furigana: 'かようび に ごみ を だします。', romaji: 'Kayoubi ni gomi o dashimasu.', english: 'I take out the trash on Tuesday.' }
    ]
  },
  {
    id: 'w-n5-412',
    word: 'ごみ箱',
    reading: 'ごみばこ',
    romaji: 'gomibako',
    meaning: 'trash can, rubbish bin',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"箱","meaning":"Box"}],
    sentences: [
      { id: 'ws-n5-412-1', sentence: 'ごみはごみ箱に捨ててください。', furigana: 'ごみ は ごみばこ に すてて ください。', romaji: 'Gomi wa gomibako ni sutete kudasai.', english: 'Please throw trash into the trash can.' },
      { id: 'ws-n5-412-2', sentence: '机の横にごみ箱があります。', furigana: 'つくえ の よこ に ごみばこ が あります。', romaji: 'Tsukue no yoko ni gomibako ga arimasu.', english: 'There is a trash can beside the desk.' }
    ]
  },
  {
    id: 'w-n5-413',
    word: '灰皿',
    reading: 'はいざら',
    romaji: 'haizara',
    meaning: 'ashtray',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"灰","meaning":"Ash"},{"char":"皿","meaning":"Plate / Dish"}],
    sentences: [
      { id: 'ws-n5-413-1', sentence: '灰皿はテーブルの上にあります。', furigana: 'はいざら は テーブル の うえ に あります。', romaji: 'Haizara wa teeburu no ue ni arimasu.', english: 'The ashtray is on the table.' },
      { id: 'ws-n5-413-2', sentence: '灰皿をきれいに洗いました。', furigana: 'はいざら を きれい に あらいました。', romaji: 'Haizara o kirei ni araimashita.', english: 'I washed the ashtray cleanly.' }
    ]
  },
  {
    id: 'w-n5-414',
    word: 'マッチ',
    reading: 'まっち',
    romaji: 'macchi',
    meaning: 'match (for fire)',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-414-1', sentence: 'マッチでろうそくに火をつけました。', furigana: 'マッチ で ろうそく に ひ を つけました。', romaji: 'Macchi de rousoku ni hi o tsukemashita.', english: 'I lit the candle with a match.' },
      { id: 'ws-n5-414-2', sentence: 'マッチ箱を一つ買いました。', furigana: 'マッチばこ を ひとつ かいました。', romaji: 'Macchibako o hitotsu kaimashita.', english: 'I bought a box of matches.' }
    ]
  },
  {
    id: 'w-n5-415',
    word: 'エレベーター',
    reading: 'えれべーたー',
    romaji: 'erebeetaa',
    meaning: 'elevator, lift',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-415-1', sentence: 'エレベーターで五階へ行きます。', furigana: 'エレベーター で ごかい へ いきます。', romaji: 'Erebeetaa de gokai e ikimasu.', english: 'I go to the fifth floor by elevator.' },
      { id: 'ws-n5-415-2', sentence: 'エレベーターのボタンを押してください。', furigana: 'エレベーター の ボタン を おして ください。', romaji: 'Erebeetaa no botan o oshite kudasai.', english: 'Please press the elevator button.' }
    ]
  },
  {
    id: 'w-n5-416',
    word: 'エスカレーター',
    reading: 'えすかれーたー',
    romaji: 'esukareetaa',
    meaning: 'escalator',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-416-1', sentence: 'エスカレーターに乗って二階へ上がります。', furigana: 'エスカレーター に のって にかい へ あがります。', romaji: 'Esukareetaa ni notte nikai e agarimasu.', english: 'I ride the escalator up to the second floor.' },
      { id: 'ws-n5-416-2', sentence: '駅のエスカレーターを使いました。', furigana: 'えき の エスカレーター を つかいまし た。', romaji: 'Eki no esukareetaa o tsukaimashita.', english: 'I used the escalator at the station.' }
    ]
  },
  {
    id: 'w-n5-417',
    word: '電気',
    reading: 'でんき',
    romaji: 'denki',
    meaning: 'electricity, electric light',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"電","meaning":"Electricity"},{"char":"気","meaning":"Spirit / Energy"}],
    sentences: [
      { id: 'ws-n5-417-1', sentence: '部屋の電気をつけてください。', furigana: 'へや の でんき を つけて ください。', romaji: 'Heya no denki o tsukete kudasai.', english: 'Please turn on the room light.' },
      { id: 'ws-n5-417-2', sentence: '寝る前に電気を消します。', furigana: 'ねる まえ に でんき を けします。', romaji: 'Neru mae ni denki o keshimasu.', english: 'I turn off the lights before sleeping.' }
    ]
  },
  {
    id: 'w-n5-418',
    word: '電灯',
    reading: 'でんとう',
    romaji: 'dentou',
    meaning: 'electric lamp, light',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"電","meaning":"Electricity"},{"char":"灯","meaning":"Lamp / Light"}],
    sentences: [
      { id: 'ws-n5-418-1', sentence: '天井の電灯がとても明るいです。', furigana: 'てんじょう の でんとう が とても あかるい です。', romaji: 'Tenjou no dentou ga totemo akarui desu.', english: 'The ceiling lamp is very bright.' },
      { id: 'ws-n5-418-2', sentence: '部屋の電灯を取り替えました。', furigana: 'へや の でんとう を とりかえました。', romaji: 'Heya no dentou o torikaemashita.', english: 'I replaced the lamp in the room.' }
    ]
  },
  {
    id: 'w-n5-419',
    word: 'スイッチ',
    reading: 'すいっち',
    romaji: 'suicchi',
    meaning: 'switch',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-419-1', sentence: '電気のスイッチを押しました。', furigana: 'でんき の スイッチ を おしました。', romaji: 'Denki no suicchi o oshimashita.', english: 'I pressed the light switch.' },
      { id: 'ws-n5-419-2', sentence: 'スイッチはドアの横にあります。', furigana: 'スイッチ は ドア の よこ に あります。', romaji: 'Suicchi wa doa no yoko ni arimasu.', english: 'The switch is beside the door.' }
    ]
  },
  {
    id: 'w-n5-420',
    word: 'エアコン',
    reading: 'えあこん',
    romaji: 'eakon',
    meaning: 'air conditioner',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-420-1', sentence: '暑いのでエアコンをつけました。', furigana: 'あつい ので エアコン を つけました。', romaji: 'Atsui node eakon o tsukemashita.', english: 'Because it was hot, I turned on the air conditioner.' },
      { id: 'ws-n5-420-2', sentence: '出かける前にエアコンを消してください。', furigana: 'でかける まえ に エアコン を けして ください。', romaji: 'Dekakeru mae ni eakon o keshite kudasai.', english: 'Please turn off the air conditioner before going out.' }
    ]
  },
  {
    id: 'w-n5-421',
    word: 'ストーブ',
    reading: 'すとーぶ',
    romaji: 'sutoobu',
    meaning: 'heater, stove',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-421-1', sentence: '寒い日は部屋でストーブをつけます。', furigana: 'さむい ひ は へや で ストーブ を つけます。', romaji: 'Samui hi wa heya de sutoobu o tsukemasu.', english: 'On cold days, I turn on the heater in the room.' },
      { id: 'ws-n5-421-2', sentence: 'ストーブのそばはとても暖かいです。', furigana: 'ストーブ の そば は とても あたたかい です。', romaji: 'Sutoobu no soba wa totemo atatakai desu.', english: 'It is very warm near the heater.' }
    ]
  },
  {
    id: 'w-n5-422',
    word: '電話',
    reading: 'でんわ',
    romaji: 'denwa',
    meaning: 'telephone, phone call',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"電","meaning":"Electricity"},{"char":"話","meaning":"Talk / Speech"}],
    sentences: [
      { id: 'ws-n5-422-1', sentence: '友達に電話をかけました。', furigana: 'ともだち に でんわ を かけました。', romaji: 'Tomodachi ni denwa o kakemashita.', english: 'I made a phone call to my friend.' },
      { id: 'ws-n5-422-2', sentence: '部屋の電話が鳴っています。', furigana: 'へや の でんわ が なって います。', romaji: 'Heya no denwa ga natte imasu.', english: 'The phone in the room is ringing.' }
    ]
  },
  {
    id: 'w-n5-423',
    word: '携帯',
    reading: 'けいたい',
    romaji: 'keitai',
    meaning: 'mobile phone, cellphone',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"携","meaning":"Carry in hand"},{"char":"帯","meaning":"Belt / Carry"}],
    sentences: [
      { id: 'ws-n5-423-1', sentence: '新しい携帯電話を買いました。', furigana: 'あたらしい けいたいでんわ を かいました。', romaji: 'Atarashii keitaidenwa o kaimashita.', english: 'I bought a new mobile phone.' },
      { id: 'ws-n5-423-2', sentence: '電車の中で携帯を見ます。', furigana: 'でんしゃ の なか で けいたい を みます。', romaji: 'Densha no naka de keitai o mimasu.', english: 'I look at my cell phone in the train.' }
    ]
  },
  {
    id: 'w-n5-424',
    word: 'カメラ',
    reading: 'かめら',
    romaji: 'kamera',
    meaning: 'camera',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-424-1', sentence: '旅行にカメラを持って行きます。', furigana: 'りょこう に カメラ を もって いきます。', romaji: 'Ryokou ni kamera o motte ikimasu.', english: 'I will take a camera on the trip.' },
      { id: 'ws-n5-424-2', sentence: '新しいカメラで写真を撮りました。', furigana: 'あたらしい カメラ で しゃしん を とりました。', romaji: 'Atarashii kamera de shashin o torimashita.', english: 'I took photos with a new camera.' }
    ]
  },
  {
    id: 'w-n5-425',
    word: '写真',
    reading: 'しゃしん',
    romaji: 'shashin',
    meaning: 'photograph, photo',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"写","meaning":"Copy / Photograph"},{"char":"真","meaning":"True"}],
    sentences: [
      { id: 'ws-n5-425-1', sentence: '公園できれいな写真を撮りました。', furigana: 'こうえん で きれい な しゃしん を とりました。', romaji: 'Kouen de kirei na shashin o torimashita.', english: 'I took pretty photos in the park.' },
      { id: 'ws-n5-425-2', sentence: '家族の写真を見せてください。', furigana: 'かぞく の しゃしん を みせて ください。', romaji: 'Kazoku no shashin o misete kudasai.', english: 'Please show me your family photo.' }
    ]
  },
  {
    id: 'w-n5-426',
    word: 'カレンダー',
    reading: 'かれんだー',
    romaji: 'karendaa',
    meaning: 'calendar',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-426-1', sentence: '壁に新しいカレンダーを掛けました。', furigana: 'かべ に あたらしい カレンダー を かけました。', romaji: 'Kabe ni atarashii karendaa o kakemashita.', english: 'I hung a new calendar on the wall.' },
      { id: 'ws-n5-426-2', sentence: 'カレンダーに予定を書き込みます。', furigana: 'カレンダー に よてい を かきこみます。', romaji: 'Karendaa ni yotei o kakikomimasu.', english: 'I write plans on the calendar.' }
    ]
  },
  {
    id: 'w-n5-427',
    word: '葉書',
    reading: 'はがき',
    romaji: 'hagaki',
    meaning: 'postcard',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"葉","meaning":"Leaf"},{"char":"書","meaning":"Write"}],
    sentences: [
      { id: 'ws-n5-427-1', sentence: '友達にきれいな葉書を送りました。', furigana: 'ともだち に きれい な はがき を おくりました。', romaji: 'Tomodachi ni kirei na hagaki o okurimashita.', english: 'I sent a nice postcard to my friend.' },
      { id: 'ws-n5-427-2', sentence: '郵便局で葉書を買いました。', furigana: 'ゆうびんきょく で はがき を かいました。', romaji: 'Yuubinkyoku de hagaki o kaimashita.', english: 'I bought postcards at the post office.' }
    ]
  },
  {
    id: 'w-n5-428',
    word: '封筒',
    reading: 'ふうとう',
    romaji: 'fuutou',
    meaning: 'envelope',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"封","meaning":"Seal"},{"char":"筒","meaning":"Cylinder / Pipe"}],
    sentences: [
      { id: 'ws-n5-428-1', sentence: '手紙を白い封筒に入れました。', furigana: 'てがみ を しろい ふうとう に いれました。', romaji: 'Tegami o shiroi fuutou ni iremashita.', english: 'I put the letter into a white envelope.' },
      { id: 'ws-n5-428-2', sentence: '封筒に切手を貼ってください。', furigana: 'ふうとう に きって を はって ください。', romaji: 'Fuutou ni kitte o hatte kudasai.', english: 'Please paste a stamp on the envelope.' }
    ]
  },
  {
    id: 'w-n5-429',
    word: '万年筆',
    reading: 'まんねんひつ',
    romaji: 'mannenhitsu',
    meaning: 'fountain pen',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"万","meaning":"Ten thousand"},{"char":"年","meaning":"Year"},{"char":"筆","meaning":"Brush / Writing tool"}],
    sentences: [
      { id: 'ws-n5-429-1', sentence: '父の日に万年筆をプレゼントしました。', furigana: 'ちち の ひ に まんねんひつ を プレゼント しました。', romaji: 'Chichi no hi ni mannenhitsu o purezento shimashita.', english: 'I gave a fountain pen for Father\'s Day.' },
      { id: 'ws-n5-429-2', sentence: '万年筆で丁寧に手紙を書きました。', furigana: 'まんねんひつ で ていねい に てがみ を かきました。', romaji: 'Mannenhitsu de teinei ni tegami o kakimashita.', english: 'I wrote a letter carefully with a fountain pen.' }
    ]
  },
  {
    id: 'w-n5-430',
    word: '消しゴム',
    reading: 'けしごむ',
    romaji: 'keshigomu',
    meaning: 'eraser, rubber',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"消","meaning":"Erase"}],
    sentences: [
      { id: 'ws-n5-430-1', sentence: '間違えた字を消しゴムで消しました。', furigana: 'まちがえた じ を けしゴム で けしました。', romaji: 'Machigaeta ji o keshigomu de keshimashita.', english: 'I erased the mistaken character with an eraser.' },
      { id: 'ws-n5-430-2', sentence: '消しゴムを貸してください。', furigana: 'けしゴム を かして ください。', romaji: 'Keshigomu o kashite kudasai.', english: 'Please lend me an eraser.' }
    ]
  },
  {
    id: 'w-n5-431',
    word: '定規',
    reading: 'じょうぎ',
    romaji: 'jougi',
    meaning: 'ruler (measuring)',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"定","meaning":"Fix / Determine"},{"char":"規","meaning":"Rule / Measure"}],
    sentences: [
      { id: 'ws-n5-431-1', sentence: '定規を使って真っ直ぐな線を引きます。', furigana: 'じょうぎ を つかって まっすぐ な せん を ひきます。', romaji: 'Jougi o tsukatte massugu na sen o hikimasu.', english: 'I draw a straight line using a ruler.' },
      { id: 'ws-n5-431-2', sentence: '筆箱の中に定規が入っています。', furigana: 'ふでばこ の なか に じょうぎ が はいって います。', romaji: 'Fudebako no naka ni jougi ga haitte imasu.', english: 'There is a ruler inside the pencil case.' }
    ]
  },
  {
    id: 'w-n5-432',
    word: 'はさみ',
    reading: 'はさみ',
    romaji: 'hasami',
    meaning: 'scissors',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-432-1', sentence: 'はさみで紙を切ります。', furigana: 'はさみ で かみ を きります。', romaji: 'Hasami de kami o kirimasu.', english: 'I cut the paper with scissors.' },
      { id: 'ws-n5-432-2', sentence: 'はさみを一つ貸してください。', furigana: 'はさみ を ひとつ かして ください。', romaji: 'Hasami o hitotsu kashite kudasai.', english: 'Please lend me a pair of scissors.' }
    ]
  },
  {
    id: 'w-n5-433',
    word: '筆箱',
    reading: 'ふでばこ',
    romaji: 'fudebako',
    meaning: 'pencil case',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"筆","meaning":"Brush / Writing brush"},{"char":"箱","meaning":"Box"}],
    sentences: [
      { id: 'ws-n5-433-1', sentence: '筆箱の中にペンと鉛筆があります。', furigana: 'ふでばこ の なか に ペン と えんぴつ が あります。', romaji: 'Fudebako no naka ni pen to enpitsu ga arimasu.', english: 'There are pens and pencils in the pencil case.' },
      { id: 'ws-n5-433-2', sentence: '新しい筆箱を買いました。', furigana: 'あたらしい ふでばこ を かいました。', romaji: 'Atarashii fudebako o kaimashita.', english: 'I bought a new pencil case.' }
    ]
  },
  {
    id: 'w-n5-434',
    word: '本棚',
    reading: 'ほんだな',
    romaji: 'hondana',
    meaning: 'bookshelf, bookcase',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char":"本","meaning":"Book"},{"char":"棚","meaning":"Shelf"}],
    sentences: [
      { id: 'ws-n5-434-1', sentence: '本棚から面白い本を取り出しました。', furigana: 'ほんだな から おもしろい ほん を とりだしました。', romaji: 'Hondana kara omoshiroi hon o toridashimashita.', english: 'I took an interesting book from the bookshelf.' },
      { id: 'ws-n5-434-2', sentence: '本棚に教科書を並べました。', furigana: 'ほんだな に きょうかしょ を ならべました。', romaji: 'Hondana ni kyoukasho o narabemashita.', english: 'I arranged textbooks on the bookshelf.' }
    ]
  },
  // ==========================================
  // === BATCH 5: CITY, TRANSPORT, BUILDINGS, TRAVEL (w-n5-435 to w-n5-534) ===
  // ==========================================
  {
    id: 'w-n5-435',
    word: '町',
    reading: 'まち',
    romaji: 'machi',
    meaning: 'town, city block',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "町", "meaning": "Town"}],
    sentences: [
      { id: 'ws-n5-435-1', sentence: '私の町は静かで住みやすいです。', furigana: 'わたし の まち は しずか で すみやすい です。', romaji: 'Watashi no machi wa shizuka de sumiyasui desu.', english: 'My town is quiet and comfortable to live in.' },
      { id: 'ws-n5-435-2', sentence: '週末に隣の町へ買い物に行きました。', furigana: 'しゅうまつ に となり の まち へ かいもの に いきました。', romaji: 'Shuumatsu ni tonari no machi e kaimono ni ikimashita.', english: 'I went shopping in the neighboring town on the weekend.' }
    ]
  },
  {
    id: 'w-n5-436',
    word: '村',
    reading: 'むら',
    romaji: 'mura',
    meaning: 'village',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "村", "meaning": "Village"}],
    sentences: [
      { id: 'ws-n5-436-1', sentence: '祖父母は小さな村に住んでいます。', furigana: 'そふぼ は ちいさな むら に すんで います。', romaji: 'Sofubo wa chiisana mura ni sunde imasu.', english: 'My grandparents live in a small village.' },
      { id: 'ws-n5-436-2', sentence: 'その村は自然がとても豊かです。', furigana: 'その むら は しぜん が とても ゆたか です。', romaji: 'Sono mura wa shizen ga totemo yutaka desu.', english: 'That village is very rich in nature.' }
    ]
  },
  {
    id: 'w-n5-437',
    word: '都会',
    reading: 'とかい',
    romaji: 'tokai',
    meaning: 'city, metropolis',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "都", "meaning": "Metropolis"}, {"char": "会", "meaning": "City / Meeting"}],
    sentences: [
      { id: 'ws-n5-437-1', sentence: '東京はとても賑やかな都会です。', furigana: 'とうきょう は とても にぎやか な とかい です。', romaji: 'Toukyou wa totemo nigiyaka na tokai desu.', english: 'Tokyo is a very bustling metropolis.' },
      { id: 'ws-n5-437-2', sentence: '都会には高いビルがたくさんあります。', furigana: 'とかい に は たかい ビル が たくさん あります。', romaji: 'Tokai ni wa takai biru ga takusan arimasu.', english: 'There are many tall buildings in the city.' }
    ]
  },
  {
    id: 'w-n5-438',
    word: '田舎',
    reading: 'いなか',
    romaji: 'inaka',
    meaning: 'countryside, rural area',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "田", "meaning": "Rice field"}, {"char": "舎", "meaning": "Cottage"}],
    sentences: [
      { id: 'ws-n5-438-1', sentence: '夏休みに田舎の祖母の家に行きました。', furigana: 'なつやすみ に いなか の そぼ の いえ に いきました。', romaji: 'Natsuyasumi ni inaka no sobo no ie ni ikimashita.', english: 'I went to my grandmother\'s house in the countryside during summer vacation.' },
      { id: 'ws-n5-438-2', sentence: '田舎の空気はとてもきれいです。', furigana: 'いなか の くうき は とても きれい です。', romaji: 'Inaka no kuuki wa totemo kirei desu.', english: 'The countryside air is very clean.' }
    ]
  },
  {
    id: 'w-n5-439',
    word: '故郷',
    reading: 'ふるさと',
    romaji: 'furusato',
    meaning: 'hometown, birthplace',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "故", "meaning": "Old / Origin"}, {"char": "郷", "meaning": "Hometown"}],
    sentences: [
      { id: 'ws-n5-439-1', sentence: '私の故郷は海の近くにあります。', furigana: 'わたし の ふるさと は うみ の ちかく に あります。', romaji: 'Watashi no furusato wa umi no chikaku ni arimasu.', english: 'My hometown is near the sea.' },
      { id: 'ws-n5-439-2', sentence: 'お正月に故郷へ帰りました。', furigana: 'おしょうがつ に ふるさと へ かえりました。', romaji: 'Oshougatsu ni furusato e kaerimashita.', english: 'I returned to my hometown for New Year\'s.' }
    ]
  },
  {
    id: 'w-n5-440',
    word: '郊外',
    reading: 'こうがい',
    romaji: 'kougai',
    meaning: 'suburbs, outskirts',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "郊", "meaning": "Suburbs"}, {"char": "外", "meaning": "Outside"}],
    sentences: [
      { id: 'ws-n5-440-1', sentence: '私は町の郊外に住んでいます。', furigana: 'わたし は まち の こうがい に すんで います。', romaji: 'Watashi wa machi no kougai ni sunde imasu.', english: 'I live in the suburbs of the town.' },
      { id: 'ws-n5-440-2', sentence: '郊外には静かな住宅街があります。', furigana: 'こうがい に は しずか な じゅうたくがい が あります。', romaji: 'Kougai ni wa shizuka na juutakugai ga arimasu.', english: 'There are quiet neighborhoods in the suburbs.' }
    ]
  },
  {
    id: 'w-n5-441',
    word: '外国',
    reading: 'がいこく',
    romaji: 'gaikoku',
    meaning: 'foreign country',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "外", "meaning": "Outside"}, {"char": "国", "meaning": "Country"}],
    sentences: [
      { id: 'ws-n5-441-1', sentence: '外国に旅行へ行きたいです。', furigana: 'がいこく に りょこう へ いきたい です。', romaji: 'Gaikoku ni ryokou e ikitai desu.', english: 'I want to travel to a foreign country.' },
      { id: 'ws-n5-441-2', sentence: '外国からたくさんの観光客が来ました。', furigana: 'がいこく から たくさん の かんこうきゃく が きました。', romaji: 'Gaikoku kara takusan no kankoukyaku ga kimashita.', english: 'Many tourists came from abroad.' }
    ]
  },
  {
    id: 'w-n5-442',
    word: '外国語',
    reading: 'がいこくご',
    romaji: 'gaikokugo',
    meaning: 'foreign language',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "外", "meaning": "Outside"}, {"char": "国", "meaning": "Country"}, {"char": "語", "meaning": "Language"}],
    sentences: [
      { id: 'ws-n5-442-1', sentence: '私は外国語を勉強するのが好きです。', furigana: 'わたし は がいこくご を べんきょう する の が すき です。', romaji: 'Watashi wa gaikokugo o benkyou suru no ga suki desu.', english: 'I like studying foreign languages.' },
      { id: 'ws-n5-442-2', sentence: '学校で外国語の授業を受けます。', furigana: 'がっこう で がいこくご の じゅぎょう を うけます。', romaji: 'Gakkou de gaikokugo no jugyou o ukemasu.', english: 'I take foreign language classes at school.' }
    ]
  },
  {
    id: 'w-n5-443',
    word: '世界',
    reading: 'せかい',
    romaji: 'sekai',
    meaning: 'the world, society',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "世", "meaning": "World"}, {"char": "界", "meaning": "Boundary"}],
    sentences: [
      { id: 'ws-n5-443-1', sentence: '世界中を旅行してみたいです。', furigana: 'せかいじゅう を りょこう して みたい です。', romaji: 'Sekaijuu o ryokou shite mitai desu.', english: 'I want to try traveling all around the world.' },
      { id: 'ws-n5-443-2', sentence: '世界にはたくさんの国があります。', furigana: 'せかい に は たくさん の くに が あります。', romaji: 'Sekai ni wa takusan no kuni ga arimasu.', english: 'There are many countries in the world.' }
    ]
  },
  {
    id: 'w-n5-444',
    word: '駅',
    reading: 'えき',
    romaji: 'eki',
    meaning: 'train station',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "駅", "meaning": "Station"}],
    sentences: [
      { id: 'ws-n5-444-1', sentence: '毎朝、歩いて駅へ行きます。', furigana: 'まいあさ、あるいて えき へ いきます。', romaji: 'Maiasa, aruite eki e ikimasu.', english: 'Every morning, I walk to the station.' },
      { id: 'ws-n5-444-2', sentence: '駅の前で友達と待ち合わせをしました。', furigana: 'えき の まえ で ともだち と まちあわせ を しました。', romaji: 'Eki no mae de tomodachi to machiawase o shimashita.', english: 'I met up with a friend in front of the station.' }
    ]
  },
  {
    id: 'w-n5-445',
    word: '駅前',
    reading: 'えきまえ',
    romaji: 'ekimae',
    meaning: 'in front of the station',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "駅", "meaning": "Station"}, {"char": "前", "meaning": "Front"}],
    sentences: [
      { id: 'ws-n5-445-1', sentence: '駅前のカフェでコーヒーを飲みます。', furigana: 'えきまえ の カフェ で コーヒー を のみます。', romaji: 'Ekimae no kafe de koohii o nomimasu.', english: 'I drink coffee at a cafe in front of the station.' },
      { id: 'ws-n5-445-2', sentence: '駅前はいつも人で賑わっています。', furigana: 'えきまえ は いつも ひと で にぎわって います。', romaji: 'Ekimae wa itsumo hito de nigiwatte imasu.', english: 'The station front is always bustling with people.' }
    ]
  },
  {
    id: 'w-n5-446',
    word: '空港',
    reading: 'くうこう',
    romaji: 'kuukou',
    meaning: 'airport',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "空", "meaning": "Sky"}, {"char": "港", "meaning": "Port"}],
    sentences: [
      { id: 'ws-n5-446-1', sentence: '電車で空港へ向かいました。', furigana: 'でんしゃ で くうこう へ むかいました。', romaji: 'Densha de kuukou e mukaimashita.', english: 'I headed to the airport by train.' },
      { id: 'ws-n5-446-2', sentence: '空港で飛行機に乗ります。', furigana: 'くうこう で ひこうき に のります。', romaji: 'Kuukou de hikouki ni norimasu.', english: 'I board the airplane at the airport.' }
    ]
  },
  {
    id: 'w-n5-447',
    word: '港',
    reading: 'みなと',
    romaji: 'minato',
    meaning: 'port, harbor',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "港", "meaning": "Port"}],
    sentences: [
      { id: 'ws-n5-447-1', sentence: '港に大きな船が泊まっています。', furigana: 'みなと に おおきな ふね が とまって います。', romaji: 'Minato ni ookina fune ga tomatte imasu.', english: 'A big ship is docked at the harbor.' },
      { id: 'ws-n5-447-2', sentence: '港の近くを散歩しました。', furigana: 'みなと の ちかく を さんぽ しました。', romaji: 'Minato no chikaku o sanpo shimashita.', english: 'I walked near the port.' }
    ]
  },
  {
    id: 'w-n5-448',
    word: 'バス停',
    reading: 'ばすてい',
    romaji: 'basutei',
    meaning: 'bus stop',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "停", "meaning": "Halt / Stop"}],
    sentences: [
      { id: 'ws-n5-448-1', sentence: 'バス停でバスを待ちます。', furigana: 'バスてい で バス を まちます。', romaji: 'Basutei de basu o machimasu.', english: 'I wait for the bus at the bus stop.' },
      { id: 'ws-n5-448-2', sentence: '家の近くにバス停があります。', furigana: 'いえ の ちかく に バスてい が あります。', romaji: 'Ie no chikaku ni basutei ga arimasu.', english: 'There is a bus stop near my house.' }
    ]
  },
  {
    id: 'w-n5-449',
    word: '停留所',
    reading: 'ていりゅうじょ',
    romaji: 'teiryuujo',
    meaning: 'stop, station (bus/tram)',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "停", "meaning": "Halt"}, {"char": "留", "meaning": "Stay"}, {"char": "所", "meaning": "Place"}],
    sentences: [
      { id: 'ws-n5-449-1', sentence: '次の停留所でバスを降ります。', furigana: 'つぎ の ていりゅうじょ で バス を おります。', romaji: 'Tsugi no teiryuujo de basu o orimasu.', english: 'I will get off at the next bus stop.' },
      { id: 'ws-n5-449-2', sentence: '停留所に並んで待ちました。', furigana: 'ていりゅうじょ に ならんで まちました。', romaji: 'Teiryuujo ni narande machimashita.', english: 'I lined up and waited at the stop.' }
    ]
  },
  {
    id: 'w-n5-450',
    word: '地下鉄',
    reading: 'ちかてつ',
    romaji: 'chikatetsu',
    meaning: 'subway, underground train',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "地", "meaning": "Earth"}, {"char": "下", "meaning": "Below"}, {"char": "鉄", "meaning": "Iron"}],
    sentences: [
      { id: 'ws-n5-450-1', sentence: '地下鉄に乗って会社へ行きます。', furigana: 'ちかてつ に のって かいしゃ へ いきます。', romaji: 'Chikatetsu ni notte kaisha e ikimasu.', english: 'I take the subway to work.' },
      { id: 'ws-n5-450-2', sentence: '東京の地下鉄はとても便利です。', furigana: 'とうきょう の ちかてつ は とても べんり です。', romaji: 'Toukyou no chikatetsu wa totemo benri desu.', english: 'The Tokyo subway is very convenient.' }
    ]
  },
  {
    id: 'w-n5-451',
    word: '新幹線',
    reading: 'しんかんせん',
    romaji: 'shinkansen',
    meaning: 'bullet train, Shinkansen',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "新", "meaning": "New"}, {"char": "幹", "meaning": "Main"}, {"char": "線", "meaning": "Line"}],
    sentences: [
      { id: 'ws-n5-451-1', sentence: '新幹線で東京から京都へ行きました。', furigana: 'しんかんせん で とうきょう から きょうと へ いきました。', romaji: 'Shinkansen de Toukyou kara Kyouto e ikimashita.', english: 'I went from Tokyo to Kyoto by Shinkansen.' },
      { id: 'ws-n5-451-2', sentence: '新幹線はとても速くて快適です。', furigana: 'しんかんせん は とても はやくて かいてき です。', romaji: 'Shinkansen wa totemo hayakute kaiteki desu.', english: 'The bullet train is very fast and comfortable.' }
    ]
  },
  {
    id: 'w-n5-452',
    word: 'バス',
    reading: 'ばす',
    romaji: 'basu',
    meaning: 'bus',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-452-1', sentence: '毎朝、バスに乗って学校へ通います。', furigana: 'まいあさ、バス に のって がっこう へ かよいます。', romaji: 'Maiasa, basu ni notte gakkou e kayoimasu.', english: 'Every morning, I commute to school by bus.' },
      { id: 'ws-n5-452-2', sentence: 'バスが来ました。', furigana: 'バス が きました。', romaji: 'Basu ga kimashita.', english: 'The bus has arrived.' }
    ]
  },
  {
    id: 'w-n5-453',
    word: 'タクシー',
    reading: 'たくしー',
    romaji: 'takushii',
    meaning: 'taxi, cab',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-453-1', sentence: '荷物が多いのでタクシーを呼びました。', furigana: 'にもつ が おおい ので タクシー を よびました。', romaji: 'Nimotsu ga ooi node takushii o yobimashita.', english: 'Because I had a lot of luggage, I called a taxi.' },
      { id: 'ws-n5-453-2', sentence: 'タクシーで病院へ行きました。', furigana: 'タクシー で びょういん へ いきました。', romaji: 'Takushii de byouin e ikimashita.', english: 'I went to the hospital by taxi.' }
    ]
  },
  {
    id: 'w-n5-454',
    word: '自転車',
    reading: 'じてんしゃ',
    romaji: 'jitensha',
    meaning: 'bicycle, bike',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "自", "meaning": "Self"}, {"char": "転", "meaning": "Roll"}, {"char": "車", "meaning": "Vehicle"}],
    sentences: [
      { id: 'ws-n5-454-1', sentence: '天気がいいので自転車で出かけます。', furigana: 'てんき が いい ので じてんしゃ で でかけます。', romaji: 'Tenki ga ii node jitensha de dekakemasu.', english: 'Because the weather is good, I go out by bike.' },
      { id: 'ws-n5-454-2', sentence: '新しい青い自転車を買いました。', furigana: 'あたらしい あおい じてんしゃ を かいました。', romaji: 'Atarashii aoi jitensha o kaimashita.', english: 'I bought a new blue bicycle.' }
    ]
  },
  {
    id: 'w-n5-455',
    word: '自動車',
    reading: 'じどうしゃ',
    romaji: 'jidousha',
    meaning: 'automobile, car',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "自", "meaning": "Self"}, {"char": "動", "meaning": "Move"}, {"char": "車", "meaning": "Vehicle"}],
    sentences: [
      { id: 'ws-n5-455-1', sentence: '父は自動車を運転します。', furigana: 'ちち は じどうしゃ を うんてん します。', romaji: 'Chichi wa jidousha o unten shimasu.', english: 'My father drives an automobile.' },
      { id: 'ws-n5-455-2', sentence: '道路にたくさんの自動車が走っています。', furigana: 'どうろ に たくさん の じどうしゃ が はしって います。', romaji: 'Douro ni takusan no jidousha ga hashitte imasu.', english: 'Many automobiles are running on the road.' }
    ]
  },
  {
    id: 'w-n5-456',
    word: 'オートバイ',
    reading: 'おーとばい',
    romaji: 'ootobai',
    meaning: 'motorbike, motorcycle',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-456-1', sentence: '兄はかっこいいオートバイに乗っています。', furigana: 'あに は かっこいい オートバイ に のって います。', romaji: 'Ani wa kakkoii ootobai ni notte imasu.', english: 'My older brother rides a cool motorbike.' },
      { id: 'ws-n5-456-2', sentence: 'オートバイで海へドライブに行きました。', furigana: 'オートバイ で うみ へ ドライブ に いきました。', romaji: 'Ootobai de umi e doraibu ni ikimashita.', english: 'I went for a drive to the sea by motorcycle.' }
    ]
  },
  {
    id: 'w-n5-457',
    word: '飛行機',
    reading: 'ひこうき',
    romaji: 'hikouki',
    meaning: 'airplane',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "飛", "meaning": "Fly"}, {"char": "行", "meaning": "Go"}, {"char": "機", "meaning": "Machine"}],
    sentences: [
      { id: 'ws-n5-457-1', sentence: '飛行機に乗って日本へ来ました。', furigana: 'ひこうき に のって にほん へ きました。', romaji: 'Hikouki ni notte nihon e kimashita.', english: 'I came to Japan by airplane.' },
      { id: 'ws-n5-457-2', sentence: '空に大きな飛行機が飛んでいます。', furigana: 'そら に おおきな ひこうき が とんで います。', romaji: 'Sora ni ookina hikouki ga tonde imasu.', english: 'A big airplane is flying in the sky.' }
    ]
  },
  {
    id: 'w-n5-458',
    word: '船',
    reading: 'ふね',
    romaji: 'fune',
    meaning: 'boat, ship',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "船", "meaning": "Boat"}],
    sentences: [
      { id: 'ws-n5-458-1', sentence: '船に乗って島へ渡りました。', furigana: 'ふね に のって しま へ わたりました。', romaji: 'Fune ni notte shima e watarimashita.', english: 'I crossed to the island by boat.' },
      { id: 'ws-n5-458-2', sentence: '海の上に白い船が見えます。', furigana: 'うみ の うえ に しろい ふね が みえます。', romaji: 'Umi no ue ni shiroi fune ga miemasu.', english: 'You can see a white ship on the sea.' }
    ]
  },
  {
    id: 'w-n5-459',
    word: '切符',
    reading: 'きっぷ',
    romaji: 'kippu',
    meaning: 'ticket',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "切", "meaning": "Cut"}, {"char": "符", "meaning": "Ticket"}],
    sentences: [
      { id: 'ws-n5-459-1', sentence: '駅の券売機で切符を買いました。', furigana: 'えき の けんばいき で きっぷ を かいました。', romaji: 'Eki no kenbaiki de kippu o kaimashita.', english: 'I bought a ticket at the ticket machine.' },
      { id: 'ws-n5-459-2', sentence: '改札口で切符を見せます。', furigana: 'かいさつぐち で きっぷ を みせます。', romaji: 'Kaisatsuguchi de kippu o misemasu.', english: 'I show the ticket at the gate.' }
    ]
  },
  {
    id: 'w-n5-460',
    word: '定期券',
    reading: 'ていきけん',
    romaji: 'teikiken',
    meaning: 'commuter pass',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "定", "meaning": "Fix"}, {"char": "期", "meaning": "Period"}, {"char": "券", "meaning": "Ticket"}],
    sentences: [
      { id: 'ws-n5-460-1', sentence: '電車の定期券を買いました。', furigana: 'でんしゃ の ていきけん を かいました。', romaji: 'Densha no teikiken o kaimashita.', english: 'I bought a train commuter pass.' },
      { id: 'ws-n5-460-2', sentence: '定期券を鞄から出しました。', furigana: 'ていきけん を かばん から だしました。', romaji: 'Teikiken o kaban kara dashimashita.', english: 'I took the commuter pass out of my bag.' }
    ]
  },
  {
    id: 'w-n5-461',
    word: 'パスポート',
    reading: 'ぱすぽーと',
    romaji: 'pasupooto',
    meaning: 'passport',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-461-1', sentence: '空港でパスポートを見せました。', furigana: 'くうこう で パスポート を みせました。', romaji: 'Kuukou de pasupooto o misemashita.', english: 'I showed my passport at the airport.' },
      { id: 'ws-n5-461-2', sentence: 'パスポートを鞄にしまいます。', furigana: 'パスポート を かばん に しまいます。', romaji: 'Pasupooto o kaban ni shimaimasu.', english: 'I put my passport away in my bag.' }
    ]
  },
  {
    id: 'w-n5-462',
    word: '席',
    reading: 'せき',
    romaji: 'seki',
    meaning: 'seat',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "席", "meaning": "Seat"}],
    sentences: [
      { id: 'ws-n5-462-1', sentence: 'どうぞ、席に座ってください。', furigana: 'どうぞ、せき に すわって ください。', romaji: 'Douzo, seki ni suwatte kudasai.', english: 'Please sit in the seat.' },
      { id: 'ws-n5-462-2', sentence: '電車の席が空いていました。', furigana: 'でんしゃ の せき が あいて いました。', romaji: 'Densha no seki ga aite imashita.', english: 'The train seats were open.' }
    ]
  },
  {
    id: 'w-n5-463',
    word: '自由席',
    reading: 'じゆうせき',
    romaji: 'jiyuuseki',
    meaning: 'unreserved seat',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "自", "meaning": "Self"}, {"char": "由", "meaning": "Freedom"}, {"char": "席", "meaning": "Seat"}],
    sentences: [
      { id: 'ws-n5-463-1', sentence: '新幹線の自由席に乗りました。', furigana: 'しんかんせん の じゆうせき に のりました。', romaji: 'Shinkansen no jiyuuseki ni norimashita.', english: 'I took an unreserved seat on the Shinkansen.' },
      { id: 'ws-n5-463-2', sentence: '自由席の切符を買いました。', furigana: 'じゆうせき の きっぷ を かいました。', romaji: 'Jiyuuseki no kippu o kaimashita.', english: 'I bought an unreserved seat ticket.' }
    ]
  },
  {
    id: 'w-n5-464',
    word: '指定席',
    reading: 'していせき',
    romaji: 'shiteiseki',
    meaning: 'reserved seat',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "指", "meaning": "Point"}, {"char": "定", "meaning": "Fix"}, {"char": "席", "meaning": "Seat"}],
    sentences: [
      { id: 'ws-n5-464-1', sentence: '指定席の切符を予約しました。', furigana: 'していせき の きっぷ を よやく しました。', romaji: 'Shiteiseki no kippu o yoyaku shimashita.', english: 'I reserved a ticket for a reserved seat.' },
      { id: 'ws-n5-464-2', sentence: '指定席に座ってゆっくり休みます。', furigana: 'していせき に すわって ゆっくり やすみます。', romaji: 'Shiteiseki ni suwatte yukkuri yasumimasu.', english: 'I sit in the reserved seat and rest comfortably.' }
    ]
  },
  {
    id: 'w-n5-465',
    word: '片道',
    reading: 'かたみち',
    romaji: 'katamichi',
    meaning: 'one way (trip/ticket)',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "片", "meaning": "One-sided"}, {"char": "道", "meaning": "Way"}],
    sentences: [
      { id: 'ws-n5-465-1', sentence: '東京までの片道切符を買いました。', furigana: 'とうきょう まで の かたみち きっぷ を かいました。', romaji: 'Toukyou made no katamichi kippu o kaimashita.', english: 'I bought a one-way ticket to Tokyo.' },
      { id: 'ws-n5-465-2', sentence: '片道の運賃はいくらですか。', furigana: 'かたみち の うんちん は いくら です か。', romaji: 'Katamichi no unchin wa ikura desu ka.', english: 'How much is the one-way fare?' }
    ]
  },
  {
    id: 'w-n5-466',
    word: '往復',
    reading: 'おうふく',
    romaji: 'oufuku',
    meaning: 'round trip',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "往", "meaning": "Depart"}, {"char": "復", "meaning": "Return"}],
    sentences: [
      { id: 'ws-n5-466-1', sentence: '新幹線の往復切符を買いました。', furigana: 'しんかんせん の おうふく きっぷ を かいました。', romaji: 'Shinkansen no oufuku kippu o kaimashita.', english: 'I bought a round-trip ticket for the bullet train.' },
      { id: 'ws-n5-466-2', sentence: '京都まで往復で旅行します。', furigana: 'きょうと まで おうふく で りょこう します。', romaji: 'Kyouto made oufuku de ryokou shimasu.', english: 'I will travel round-trip to Kyoto.' }
    ]
  },
  {
    id: 'w-n5-467',
    word: '運賃',
    reading: 'うんちん',
    romaji: 'unchin',
    meaning: 'passenger fare',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "運", "meaning": "Carry"}, {"char": "賃", "meaning": "Fare"}],
    sentences: [
      { id: 'ws-n5-467-1', sentence: '電車の運賃を払いました。', furigana: 'でんしゃ の うんちん を はらいました。', romaji: 'Densha no unchin o haraimashita.', english: 'I paid the train fare.' },
      { id: 'ws-n5-467-2', sentence: 'バス運賃は二百円です。', furigana: 'バス うんちん は にひゃくえん です。', romaji: 'Basu unchin wa nihyakuen desu.', english: 'The bus fare is 200 yen.' }
    ]
  },
  {
    id: 'w-n5-468',
    word: '乗り換え',
    reading: 'のりかえ',
    romaji: 'norikae',
    meaning: 'transfer (train/bus)',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "乗", "meaning": "Ride"}, {"char": "換", "meaning": "Change"}],
    sentences: [
      { id: 'ws-n5-468-1', sentence: '次の駅で乗り換えをします。', furigana: 'つぎ の えき で のりかえ を します。', romaji: 'Tsugi no eki de norikae o shimasu.', english: 'I will transfer at the next station.' },
      { id: 'ws-n5-468-2', sentence: '地下鉄への乗り換えはどこですか。', furigana: 'ちかてつ への のりかえ は どこ です か。', romaji: 'Chikatetsu e no norikae wa doko desu ka.', english: 'Where is the transfer to the subway?' }
    ]
  },
  {
    id: 'w-n5-469',
    word: '出発',
    reading: 'しゅっぱつ',
    romaji: 'shuppatsu',
    meaning: 'departure',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "出", "meaning": "Exit"}, {"char": "発", "meaning": "Depart"}],
    sentences: [
      { id: 'ws-n5-469-1', sentence: '朝八時に電車が出発します。', furigana: 'あさ はちじ に でんしゃ が しゅっぱつ します。', romaji: 'Asa hachiji ni densha ga shuppatsu shimasu.', english: 'The train departs at 8:00 AM.' },
      { id: 'ws-n5-469-2', sentence: 'みんなで元気に出発しましょう。', furigana: 'みんな で げんき に しゅっぱつ しましょう。', romaji: 'Minna de genki ni shuppatsu shimashou.', english: 'Let\'s all set off cheerfully.' }
    ]
  },
  {
    id: 'w-n5-470',
    word: '到着',
    reading: 'とうちゃく',
    romaji: 'touchaku',
    meaning: 'arrival',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "到", "meaning": "Arrive"}, {"char": "着", "meaning": "Reach"}],
    sentences: [
      { id: 'ws-n5-470-1', sentence: '午後三時に東京駅に到着しました。', furigana: 'ごご さんじ に とうきょうえき に とうちゃく しました。', romaji: 'Gogo sanji ni Toukyou eki ni touchaku shimashita.', english: 'I arrived at Tokyo Station at 3:00 PM.' },
      { id: 'ws-n5-470-2', sentence: '飛行機の到着が少し遅れました。', furigana: 'ひこうき の とうちゃく が すこし おくれました。', romaji: 'Hikouki no touchaku ga sukoshi okuremashita.', english: 'The airplane\'s arrival was slightly delayed.' }
    ]
  },
  {
    id: 'w-n5-471',
    word: '予定',
    reading: 'よてい',
    romaji: 'yotei',
    meaning: 'plan, schedule',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "予", "meaning": "Advance"}, {"char": "定", "meaning": "Fix"}],
    sentences: [
      { id: 'ws-n5-471-1', sentence: '明日の予定は何ですか。', furigana: 'あした の よてい は なん です か。', romaji: 'Ashita no yotei wa nan desu ka.', english: 'What is your plan for tomorrow?' },
      { id: 'ws-n5-471-2', sentence: 'カレンダーに予定を書きました。', furigana: 'カレンダー に よてい を かきました。', romaji: 'Karendaa ni yotei o kakimashita.', english: 'I wrote my plans on the calendar.' }
    ]
  },
  {
    id: 'w-n5-472',
    word: '準備',
    reading: 'じゅんび',
    romaji: 'junbi',
    meaning: 'preparation, arrangements',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "準", "meaning": "Level"}, {"char": "備", "meaning": "Equip"}],
    sentences: [
      { id: 'ws-n5-472-1', sentence: '旅行の準備をしています。', furigana: 'りょこう の じゅんび を して います。', romaji: 'Ryokou no junbi o shite imasu.', english: 'I am preparing for the trip.' },
      { id: 'ws-n5-472-2', sentence: '明日の授業の準備をしました。', furigana: 'あした の じゅぎょう の じゅんび を しました。', romaji: 'Ashita no jugyou no junbi o shimashita.', english: 'I prepared for tomorrow\'s class.' }
    ]
  },
  {
    id: 'w-n5-473',
    word: '予約',
    reading: 'よやく',
    romaji: 'yoyaku',
    meaning: 'reservation, booking',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "予", "meaning": "Advance"}, {"char": "約", "meaning": "Promise"}],
    sentences: [
      { id: 'ws-n5-473-1', sentence: 'レストランの席を予約しました。', furigana: 'レストラン の せき を よやく しました。', romaji: 'Resutoran no seki o yoyaku shimashita.', english: 'I reserved a seat at the restaurant.' },
      { id: 'ws-n5-473-2', sentence: 'ホテルの予約をお願いします。', furigana: 'ホテル の よやく を おねがい します。', romaji: 'Hoteru no yoyaku o onegai shimasu.', english: 'Please make a hotel reservation.' }
    ]
  },
  {
    id: 'w-n5-474',
    word: '旅行',
    reading: 'りょこう',
    romaji: 'ryokou',
    meaning: 'travel, trip',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "旅", "meaning": "Travel"}, {"char": "行", "meaning": "Go"}],
    sentences: [
      { id: 'ws-n5-474-1', sentence: '家族と一緒に日本を旅行します。', furigana: 'かぞく と いっしょ に にほん を りょこう します。', romaji: 'Kazoku to issho ni nihon o ryokou shimasu.', english: 'I travel in Japan together with my family.' },
      { id: 'ws-n5-474-2', sentence: '夏休みに楽しい旅行に行きました。', furigana: 'なつやすみ に たのしい りょこう に いきました。', romaji: 'Natsuyasumi ni tanoshii ryokou ni ikimashita.', english: 'I went on a fun trip during summer vacation.' }
    ]
  },
  {
    id: 'w-n5-475',
    word: '観光',
    reading: 'かんこう',
    romaji: 'kankou',
    meaning: 'sightseeing, tourism',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "観", "meaning": "Look"}, {"char": "光", "meaning": "Light"}],
    sentences: [
      { id: 'ws-n5-475-1', sentence: '京都で有名なお寺を観光しました。', furigana: 'きょうと で ゆうめい な おてら を かんこう しました。', romaji: 'Kyouto de yuumei na otera o kankou shimashita.', english: 'I visited famous temples in Kyoto.' },
      { id: 'ws-n5-475-2', sentence: '東京を一日観光します。', furigana: 'とうきょう を いちにち かんこう します。', romaji: 'Toukyou o ichinichi kankou shimasu.', english: 'I will sightsee Tokyo for a day.' }
    ]
  },
  {
    id: 'w-n5-476',
    word: 'お土産',
    reading: 'おみやげ',
    romaji: 'omiyage',
    meaning: 'souvenir, local gift',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "産", "meaning": "Product"}],
    sentences: [
      { id: 'ws-n5-476-1', sentence: '友達に美味しいお土産を買いました。', furigana: 'ともだち に おいしい おみやげ を かいました。', romaji: 'Tomodachi ni oishii omiyage o kaimashita.', english: 'I bought delicious souvenirs for my friends.' },
      { id: 'ws-n5-476-2', sentence: '旅行のお土産をもらいました。', furigana: 'りょこう の おみやげ を もらいました。', romaji: 'Ryokou no omiyage o moraimashita.', english: 'I received a travel souvenir.' }
    ]
  },
  {
    id: 'w-n5-477',
    word: '景色',
    reading: 'けしき',
    romaji: 'keshiki',
    meaning: 'scenery, landscape',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "景", "meaning": "Scenery"}, {"char": "色", "meaning": "Color"}],
    sentences: [
      { id: 'ws-n5-477-1', sentence: '山の上からの景色はとても綺麗です。', furigana: 'やま の うえ から の けしき は とても きれい です。', romaji: 'Yama no ue kara no keshiki wa totemo kirei desu.', english: 'The scenery from atop the mountain is very pretty.' },
      { id: 'ws-n5-477-2', sentence: '窓から素晴らしい景色が見えました。', furigana: 'まど から すばらしい けしき が みえました。', romaji: 'Mado kara subarashii keshiki ga miemashita.', english: 'I could see wonderful scenery from the window.' }
    ]
  },
  {
    id: 'w-n5-478',
    word: '地図',
    reading: 'ちず',
    romaji: 'chizu',
    meaning: 'map',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "地", "meaning": "Earth"}, {"char": "図", "meaning": "Drawing"}],
    sentences: [
      { id: 'ws-n5-478-1', sentence: '地図を見て道を確認します。', furigana: 'ちず を みて みち を かくにん します。', romaji: 'Chizu o mite michi o kakunin shimasu.', english: 'I look at the map and check the road.' },
      { id: 'ws-n5-478-2', sentence: '駅で町の地図をもらいました。', furigana: 'えき で まち の ちず を もらいました。', romaji: 'Eki de machi no chizu o moraimashita.', english: 'I got a map of the town at the station.' }
    ]
  },
  {
    id: 'w-n5-479',
    word: '案内',
    reading: 'あんない',
    romaji: 'annai',
    meaning: 'guide, guidance, information',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "案", "meaning": "Proposal"}, {"char": "内", "meaning": "Inside"}],
    sentences: [
      { id: 'ws-n5-479-1', sentence: '友達に町を案内しました。', furigana: 'ともだち に まち を あんない しました。', romaji: 'Tomodachi ni machi o annai shimashita.', english: 'I guided my friend around the town.' },
      { id: 'ws-n5-479-2', sentence: '先生が学校を案内してくれました。', furigana: 'せんせい が がっこう を あんない して くれました。', romaji: 'Sensei ga gakkou o annai shite kuremashita.', english: 'The teacher guided us around the school.' }
    ]
  },
  {
    id: 'w-n5-480',
    word: 'ホテル',
    reading: 'ほてる',
    romaji: 'hoteru',
    meaning: 'hotel',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-480-1', sentence: '駅の近くのホテルに泊まります。', furigana: 'えき の ちかく の ホテル に とまります。', romaji: 'Eki no chikaku no hoteru ni tomarimasu.', english: 'I stay at a hotel near the station.' },
      { id: 'ws-n5-480-2', sentence: 'きれいなホテルを予約しました。', furigana: 'きれい な ホテル を よやく しました。', romaji: 'Kirei na hoteru o yoyaku shimashita.', english: 'I booked a nice hotel.' }
    ]
  },
  {
    id: 'w-n5-481',
    word: '旅館',
    reading: 'りょかん',
    romaji: 'ryokan',
    meaning: 'traditional Japanese inn',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "旅", "meaning": "Travel"}, {"char": "館", "meaning": "Building"}],
    sentences: [
      { id: 'ws-n5-481-1', sentence: '温泉の近くの旅館に泊まりました。', furigana: 'おんせん の ちかく の りょかん に とまりました。', romaji: 'Onsen no chikaku no ryokan ni tomarimashita.', english: 'I stayed at a Japanese inn near the hot spring.' },
      { id: 'ws-n5-481-2', sentence: '旅館で美味しい和食を食べました。', furigana: 'りょかん で おいしい わしょく を たべました。', romaji: 'Ryokan de oishii washoku o tabemashita.', english: 'I ate delicious Japanese food at the inn.' }
    ]
  },
  {
    id: 'w-n5-482',
    word: '温泉',
    reading: 'おんせん',
    romaji: 'onsen',
    meaning: 'hot spring',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "温", "meaning": "Warm"}, {"char": "泉", "meaning": "Spring"}],
    sentences: [
      { id: 'ws-n5-482-1', sentence: '寒い日に温かい温泉に入ります。', furigana: 'さむい ひ に あたたかい おんせん に はいります。', romaji: 'Samui hi ni atatakai onsen ni hairimasu.', english: 'On cold days, I soak in a warm hot spring.' },
      { id: 'ws-n5-482-2', sentence: '日本の温泉はとても気持ちがいいです。', furigana: 'にほん の おんせん は とても きもち が いい です。', romaji: 'Nihon no onsen wa totemo kimochi ga ii desu.', english: 'Japanese hot springs feel very pleasant.' }
    ]
  },
  {
    id: 'w-n5-483',
    word: '銀行',
    reading: 'ぎんこう',
    romaji: 'ginkou',
    meaning: 'bank',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "銀", "meaning": "Silver"}, {"char": "行", "meaning": "Go / Shop"}],
    sentences: [
      { id: 'ws-n5-483-1', sentence: '銀行でお金を下ろします。', furigana: 'ぎんこう で おかね を おろします。', romaji: 'Ginkou de okane o oroshimasu.', english: 'I withdraw money at the bank.' },
      { id: 'ws-n5-483-2', sentence: '銀行は郵便局の隣にあります。', furigana: 'ぎんこう は ゆうびんきょく の となり に あります。', romaji: 'Ginkou wa yuubinkyoku no tonari ni arimasu.', english: 'The bank is next to the post office.' }
    ]
  },
  {
    id: 'w-n5-484',
    word: '郵便局',
    reading: 'ゆうびんきょく',
    romaji: 'yuubinkyoku',
    meaning: 'post office',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "郵", "meaning": "Mail"}, {"char": "便", "meaning": "Service"}, {"char": "局", "meaning": "Bureau"}],
    sentences: [
      { id: 'ws-n5-484-1', sentence: '郵便局で手紙を出しました。', furigana: 'ゆうびんきょく で てがみ を だしました。', romaji: 'Yuubinkyoku de tegami o dashimashita.', english: 'I sent a letter at the post office.' },
      { id: 'ws-n5-484-2', sentence: '郵便局で切手を買います。', furigana: 'ゆうびんきょく で きって を かいます。', romaji: 'Yuubinkyoku de kitte o kaimasu.', english: 'I buy stamps at the post office.' }
    ]
  },
  {
    id: 'w-n5-485',
    word: '交番',
    reading: 'こうばん',
    romaji: 'kouban',
    meaning: 'police box',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "交", "meaning": "Mix / Cross"}, {"char": "番", "meaning": "Turn / Guard"}],
    sentences: [
      { id: 'ws-n5-485-1', sentence: '交番で駅への道を聞きました。', furigana: 'こうばん で えき への みち を ききました。', romaji: 'Kouban de eki e no michi o kikimashita.', english: 'I asked for directions at the police box.' },
      { id: 'ws-n5-485-2', sentence: '駅前に交番があります。', furigana: 'えきまえ に こうばん が あります。', romaji: 'Ekimae ni kouban ga arimasu.', english: 'There is a police box in front of the station.' }
    ]
  },
  {
    id: 'w-n5-486',
    word: '警察署',
    reading: 'けいさつしょ',
    romaji: 'keisatsusho',
    meaning: 'police station',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "警", "meaning": "Guard"}, {"char": "察", "meaning": "Judge"}, {"char": "署", "meaning": "Office"}],
    sentences: [
      { id: 'ws-n5-486-1', sentence: '落とし物を警察署に届けました。', furigana: 'おとしもの を けいさつしょ に とどけました。', romaji: 'Otoshimono o keisatsusho ni todokemashita.', english: 'I reported the lost item to the police station.' },
      { id: 'ws-n5-486-2', sentence: '大きな警察署が町にあります。', furigana: 'おおきな けいさつしょ が まち に あります。', romaji: 'Ookina keisatsusho ga machi ni arimasu.', english: 'There is a big police station in town.' }
    ]
  },
  {
    id: 'w-n5-487',
    word: '消防署',
    reading: 'しょうぼうしょ',
    romaji: 'shoubousho',
    meaning: 'fire station',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "消", "meaning": "Extinguish"}, {"char": "防", "meaning": "Prevent"}, {"char": "署", "meaning": "Office"}],
    sentences: [
      { id: 'ws-n5-487-1', sentence: '消防署の前に赤い消防車があります。', furigana: 'しょうぼうしょ の まえ に あかい しょうぼうしゃ が あります。', romaji: 'Shoubousho no mae ni akai shoubousha ga arimasu.', english: 'There is a red fire truck in front of the fire station.' },
      { id: 'ws-n5-487-2', sentence: '近所に消防署があります。', furigana: 'きんじょ に しょうぼうしょ が あります。', romaji: 'Kinjo ni shoubousho ga arimasu.', english: 'There is a fire station in the neighborhood.' }
    ]
  },
  {
    id: 'w-n5-488',
    word: '公園',
    reading: 'こうえん',
    romaji: 'kouen',
    meaning: 'park',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "公", "meaning": "Public"}, {"char": "園", "meaning": "Garden"}],
    sentences: [
      { id: 'ws-n5-488-1', sentence: '天気がいいので公園を散歩します。', furigana: 'てんき が いい ので こうえん を さんぽ します。', romaji: 'Tenki ga ii node kouen o sanpo shimasu.', english: 'Because the weather is nice, I walk in the park.' },
      { id: 'ws-n5-488-2', sentence: '公園で子供たちが遊んでいます。', furigana: 'こうえん で こどもたち が あそんで います。', romaji: 'Kouen de kodomotachi ga asonde imasu.', english: 'Children are playing in the park.' }
    ]
  },
  {
    id: 'w-n5-489',
    word: '図書館',
    reading: 'としょかん',
    romaji: 'toshokan',
    meaning: 'library',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "図", "meaning": "Map"}, {"char": "書", "meaning": "Book"}, {"char": "館", "meaning": "Building"}],
    sentences: [
      { id: 'ws-n5-489-1', sentence: '図書館で本を三冊借りました。', furigana: 'としょかん で ほん を さんさつ かりました。', romaji: 'Toshokan de hon o sansatsu karimashita.', english: 'I borrowed three books from the library.' },
      { id: 'ws-n5-489-2', sentence: '静かな図書館で勉強します。', furigana: 'しずか な としょかん で べんきょう します。', romaji: 'Shizuka na toshokan de benkyou shimasu.', english: 'I study in the quiet library.' }
    ]
  },
  {
    id: 'w-n5-490',
    word: '大使館',
    reading: 'たいしかん',
    romaji: 'taishikan',
    meaning: 'embassy',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "大", "meaning": "Big"}, {"char": "使", "meaning": "Envoy"}, {"char": "館", "meaning": "Building"}],
    sentences: [
      { id: 'ws-n5-490-1', sentence: 'ビザの申請で大使館へ行きました。', furigana: 'ビザ の しんせい で たいしかん へ いきました。', romaji: 'Biza no shinsei de taishikan e ikimashita.', english: 'I went to the embassy for a visa application.' },
      { id: 'ws-n5-490-2', sentence: 'アメリカ大使館は東京にあります。', furigana: 'アメリカ たいしかん は とうきょう に あります。', romaji: 'Amerika taishikan wa Toukyou ni arimasu.', english: 'The American embassy is in Tokyo.' }
    ]
  },
  {
    id: 'w-n5-491',
    word: '映画館',
    reading: 'えいがかん',
    romaji: 'eigakan',
    meaning: 'movie theater, cinema',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "映", "meaning": "Reflect"}, {"char": "画", "meaning": "Picture"}, {"char": "館", "meaning": "Building"}],
    sentences: [
      { id: 'ws-n5-491-1', sentence: '週末に映画館で映画を見ました。', furigana: 'しゅうまつ に えいがかん で えいが を みました。', romaji: 'Shuumatsu ni eigakan de eiga o mimashita.', english: 'I watched a movie at the cinema on the weekend.' },
      { id: 'ws-n5-491-2', sentence: '駅の近くに新しい映画館ができました。', furigana: 'えき の ちかく に あたらしい えいがかん が できました。', romaji: 'Eki no chikaku ni atarashii eigakan ga dekimashita.', english: 'A new movie theater opened near the station.' }
    ]
  },
  {
    id: 'w-n5-492',
    word: '博物館',
    reading: 'はくぶつかん',
    romaji: 'hakubutsukan',
    meaning: 'museum',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "博", "meaning": "Wide"}, {"char": "物", "meaning": "Thing"}, {"char": "館", "meaning": "Building"}],
    sentences: [
      { id: 'ws-n5-492-1', sentence: '博物館で昔の歴史を学びました。', furigana: 'はくぶつかん で むかし の れきし を まなびました。', romaji: 'Hakubutsukan de mukashi no rekishi o manabimashita.', english: 'I learned ancient history at the museum.' },
      { id: 'ws-n5-492-2', sentence: '日曜日に国立博物館へ行きました。', furigana: 'にちようび に こくりつ はくぶつかん へ いきました。', romaji: 'Nichiyoubi ni kokuritsu hakubutsukan e ikimashita.', english: 'I went to the national museum on Sunday.' }
    ]
  },
  {
    id: 'w-n5-493',
    word: '美術館',
    reading: 'びじゅつかん',
    romaji: 'bijutsukan',
    meaning: 'art museum, gallery',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "美", "meaning": "Beauty"}, {"char": "術", "meaning": "Art"}, {"char": "館", "meaning": "Building"}],
    sentences: [
      { id: 'ws-n5-493-1', sentence: '美術館で美しい絵を見ました。', furigana: 'びじゅつかん で うつくしい え を みました。', romaji: 'Bijutsukan de utsukushii e o mimashita.', english: 'I saw beautiful paintings at the art museum.' },
      { id: 'ws-n5-493-2', sentence: '友達と一緒に美術館へ行きます。', furigana: 'ともだち と いっしょ に びじゅつかん へ いきます。', romaji: 'Tomodachi to issho ni bijutsukan e ikimasu.', english: 'I will go to the art museum with a friend.' }
    ]
  },
  {
    id: 'w-n5-494',
    word: '動物園',
    reading: 'どうぶつえん',
    romaji: 'doubutsuen',
    meaning: 'zoo',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "動", "meaning": "Move"}, {"char": "物", "meaning": "Thing"}, {"char": "園", "meaning": "Garden"}],
    sentences: [
      { id: 'ws-n5-494-1', sentence: '動物園でパンダを見ました。', furigana: 'どうぶつえん で パンダ を みました。', romaji: 'Doubutsuen de panda o mimashita.', english: 'I saw a panda at the zoo.' },
      { id: 'ws-n5-494-2', sentence: '子供たちと動物園へ遊びに行きました。', furigana: 'こどもたち と どうぶつえん へ あそび に いきました。', romaji: 'Kodomotachi to doubutsuen e asobi ni ikimashita.', english: 'I went to the zoo with the children.' }
    ]
  },
  {
    id: 'w-n5-495',
    word: '植物園',
    reading: 'しょくぶつえん',
    romaji: 'shokubutsuen',
    meaning: 'botanical garden',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "植", "meaning": "Plant"}, {"char": "物", "meaning": "Thing"}, {"char": "園", "meaning": "Garden"}],
    sentences: [
      { id: 'ws-n5-495-1', sentence: '植物園で珍しい花を見ました。', furigana: 'しょくぶつえん で めずらしい はな を みました。', romaji: 'Shokubutsuen de mezurashii hana o mimashita.', english: 'I saw rare flowers at the botanical garden.' },
      { id: 'ws-n5-495-2', sentence: '春に植物園を散歩しました。', furigana: 'はる に しょくぶつえん を さんぽ しました。', romaji: 'Haru ni shokubutsuen o sanpo shimashita.', english: 'I took a walk in the botanical garden in spring.' }
    ]
  },
  {
    id: 'w-n5-496',
    word: '遊園地',
    reading: 'ゆうえんち',
    romaji: 'yuuenchi',
    meaning: 'amusement park',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "遊", "meaning": "Play"}, {"char": "園", "meaning": "Garden"}, {"char": "地", "meaning": "Ground"}],
    sentences: [
      { id: 'ws-n5-496-1', sentence: '家族と一緒に遊園地に行きました。', furigana: 'かぞく と いっしょ に ゆうえんち に いきました。', romaji: 'Kazoku to issho ni yuuenchi ni ikimashita.', english: 'I went to the amusement park with my family.' },
      { id: 'ws-n5-496-2', sentence: '遊園地で乗り物に乗って楽しかったです。', furigana: 'ゆうえんち で のりもの に のって たのしかった です。', romaji: 'Yuuenchi de norimono ni notte tanoshikatta desu.', english: 'It was fun riding attractions at the amusement park.' }
    ]
  },
  {
    id: 'w-n5-497',
    word: 'プール',
    reading: 'ぷーる',
    romaji: 'puuru',
    meaning: 'swimming pool',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-497-1', sentence: '夏休みにプールで泳ぎます。', furigana: 'なつやすみ に プール で およぎます。', romaji: 'Natsuyasumi ni puuru de oyogimasu.', english: 'I swim in the pool during summer vacation.' },
      { id: 'ws-n5-497-2', sentence: '学校に大きなプールがあります。', furigana: 'がっこう に おおきな プール が あります。', romaji: 'Gakkou ni ookina puuru ga arimasu.', english: 'The school has a large swimming pool.' }
    ]
  },
  {
    id: 'w-n5-498',
    word: '体育館',
    reading: 'たいいくかん',
    romaji: 'taiikukan',
    meaning: 'gymnasium, gym',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "体", "meaning": "Body"}, {"char": "育", "meaning": "Educate"}, {"char": "館", "meaning": "Building"}],
    sentences: [
      { id: 'ws-n5-498-1', sentence: '体育館でバスケットボールをしました。', furigana: 'たいいくかん で バスケットボール を しました。', romaji: 'Taiikukan de basukettobooru o shimashita.', english: 'I played basketball in the gymnasium.' },
      { id: 'ws-n5-498-2', sentence: '雨の日は体育館で運動します。', furigana: 'あめ の ひ は たいいくかん で うんどう します。', romaji: 'Ame no hi wa taiikukan de undou shimasu.', english: 'On rainy days, we exercise in the gym.' }
    ]
  },
  {
    id: 'w-n5-499',
    word: '教室',
    reading: 'きょうしつ',
    romaji: 'kyoushitsu',
    meaning: 'classroom',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "教", "meaning": "Teach"}, {"char": "室", "meaning": "Room"}],
    sentences: [
      { id: 'ws-n5-499-1', sentence: '教室に先生が入ってきました。', furigana: 'きょうしつ に せんせい が はいって きました。', romaji: 'Kyoushitsu ni sensei ga haitte kimashita.', english: 'The teacher entered the classroom.' },
      { id: 'ws-n5-499-2', sentence: '授業の後で教室を掃除します。', furigana: 'じゅぎょう の あと で きょうしつ を そうじ します。', romaji: 'Jugyou no ato de kyoushitsu o souji shimasu.', english: 'We clean the classroom after class.' }
    ]
  },
  {
    id: 'w-n5-500',
    word: '寮',
    reading: 'りょう',
    romaji: 'ryou',
    meaning: 'dormitory, hostel',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "寮", "meaning": "Dormitory"}],
    sentences: [
      { id: 'ws-n5-500-1', sentence: '私は大学の寮に住んでいます。', furigana: 'わたし は だいがく の りょう に すんで います。', romaji: 'Watashi wa daigaku no ryou ni sunde imasu.', english: 'I live in the college dormitory.' },
      { id: 'ws-n5-500-2', sentence: '寮の部屋は静かで快適です。', furigana: 'りょう の へや は しずか で かいてき です。', romaji: 'Ryou no heya wa shizuka de kaiteki desu.', english: 'The dorm room is quiet and comfortable.' }
    ]
  },
  {
    id: 'w-n5-501',
    word: 'マンション',
    reading: 'まんしょん',
    romaji: 'manshon',
    meaning: 'apartment complex, condominium',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-501-1', sentence: '駅の近くのマンションに住んでいます。', furigana: 'えき の ちかく の マンション に すんで います。', romaji: 'Eki no chikaku no manshon ni sunde imasu.', english: 'I live in an apartment near the station.' },
      { id: 'ws-n5-501-2', sentence: '新しい高いマンションが建ちました。', furigana: 'あたらしい たかい マンション が たちました。', romaji: 'Atarashii takai manshon ga tachimashita.', english: 'A new tall apartment building was built.' }
    ]
  },
  {
    id: 'w-n5-502',
    word: 'デパート',
    reading: 'でぱーと',
    romaji: 'depaato',
    meaning: 'department store',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-502-1', sentence: 'デパートで服と靴を買いました。', furigana: 'デパート で ふく と くつ を かいました。', romaji: 'Depaato de fuku to kutsu o kaimashita.', english: 'I bought clothes and shoes at the department store.' },
      { id: 'ws-n5-502-2', sentence: '日曜日にデパートへ買い物に行きます。', furigana: 'にちようび に デパート へ かいもの に いきます。', romaji: 'Nichiyoubi ni depaato e kaimono ni ikimasu.', english: 'I go shopping at the department store on Sunday.' }
    ]
  },
  {
    id: 'w-n5-503',
    word: 'コンビニ',
    reading: 'こんびに',
    romaji: 'konbini',
    meaning: 'convenience store',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-503-1', sentence: 'コンビニでお弁当を買いました。', furigana: 'コンビニ で おべんとう を かいました。', romaji: 'Konbini de obentou o kaimashita.', english: 'I bought a boxed lunch at the convenience store.' },
      { id: 'ws-n5-503-2', sentence: '家の前に二十四時間のコンビニがあります。', furigana: 'いえ の まえ に にじゅうよじかん の コンビニ が あります。', romaji: 'Ie no mae ni nijuuyojikan no konbini ga arimasu.', english: 'There is a 24-hour convenience store in front of my house.' }
    ]
  },
  {
    id: 'w-n5-504',
    word: '会社',
    reading: 'かいしゃ',
    romaji: 'kaisha',
    meaning: 'company, corporation',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "会", "meaning": "Meet"}, {"char": "社", "meaning": "Company / Shrine"}],
    sentences: [
      { id: 'ws-n5-504-1', sentence: '父は毎朝八時に会社へ行きます。', furigana: 'ちち は まいあさ はちじ に かいしゃ へ いきます。', romaji: 'Chichi wa maiasa hachiji ni kaisha e ikimasu.', english: 'My father goes to the company at 8:00 AM.' },
      { id: 'ws-n5-504-2', sentence: '兄は大きな会社で働いています。', furigana: 'あに は おおきな かいしゃ で はたらいて います。', romaji: 'Ani wa ookina kaisha de hataraite imasu.', english: 'My older brother works at a large company.' }
    ]
  },
  {
    id: 'w-n5-505',
    word: '工場',
    reading: 'こうじょう',
    romaji: 'koujou',
    meaning: 'factory, plant, mill',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "工", "meaning": "Craft"}, {"char": "場", "meaning": "Place"}],
    sentences: [
      { id: 'ws-n5-505-1', sentence: '車の工場を見学しました。', furigana: 'くるま の こうじょう を けんがく しました。', romaji: 'Kuruma no koujou o kengaku shimashita.', english: 'I toured the car factory.' },
      { id: 'ws-n5-505-2', sentence: '父はその工場で働いています。', furigana: 'ちち は その こうじょう で はたらいて います。', romaji: 'Chichi wa sono koujou de hataraite imasu.', english: 'My father works at that factory.' }
    ]
  },
  {
    id: 'w-n5-506',
    word: '寺',
    reading: 'てら',
    romaji: 'tera',
    meaning: 'Buddhist temple',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "寺", "meaning": "Temple"}],
    sentences: [
      { id: 'ws-n5-506-1', sentence: '京都で有名なお寺に行きました。', furigana: 'きょうと で ゆうめい な おてら に いきました。', romaji: 'Kyouto de yuumei na otera ni ikimashita.', english: 'I went to a famous temple in Kyoto.' },
      { id: 'ws-n5-506-2', sentence: 'お寺で静かにお祈りをしました。', furigana: 'おてら で しずかに おいのり を しました。', romaji: 'Otera de shizukani oinori o shimashita.', english: 'I prayed quietly at the temple.' }
    ]
  },
  {
    id: 'w-n5-507',
    word: '神社',
    reading: 'じんじゃ',
    romaji: 'jinja',
    meaning: 'Shinto shrine',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "神", "meaning": "God / Spirit"}, {"char": "社", "meaning": "Shrine"}],
    sentences: [
      { id: 'ws-n5-507-1', sentence: 'お正月に家族と神社へ行きました。', furigana: 'おしょうがつ に かぞく と じんじゃ へ いきました。', romaji: 'Oshougatsu ni kazoku to jinja e ikimashita.', english: 'I went to a shrine with my family on New Year\'s.' },
      { id: 'ws-n5-507-2', sentence: '神社に赤い鳥居があります。', furigana: 'じんじゃ に あかい とりい が あります。', romaji: 'Jinja ni akai torii ga arimasu.', english: 'There is a red torii gate at the shrine.' }
    ]
  },
  {
    id: 'w-n5-508',
    word: '教会',
    reading: 'きょうかい',
    romaji: 'kyoukai',
    meaning: 'Christian church',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "教", "meaning": "Teach"}, {"char": "会", "meaning": "Meeting / Assembly"}],
    sentences: [
      { id: 'ws-n5-508-1', sentence: '日曜日の朝に教会へ行きます。', furigana: 'にちようび の あさ に きょうかい へ いきます。', romaji: 'Nichiyoubi no asa ni kyoukai e ikimasu.', english: 'I go to church on Sunday mornings.' },
      { id: 'ws-n5-508-2', sentence: '白いきれいな教会を見ました。', furigana: 'しろい きれい な きょうかい を みました。', romaji: 'Shiroi kirei na kyoukai o mimashita.', english: 'I saw a pretty white church.' }
    ]
  },
  {
    id: 'w-n5-509',
    word: '橋',
    reading: 'はし',
    romaji: 'hashi',
    meaning: 'bridge',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "橋", "meaning": "Bridge"}],
    sentences: [
      { id: 'ws-n5-509-1', sentence: '川にかかる長い橋を渡ります。', furigana: 'かわ に かかる ながい はし を わたり ます。', romaji: 'Kawa ni kakaru nagai hashi o watarimasu.', english: 'I cross the long bridge over the river.' },
      { id: 'ws-n5-509-2', sentence: '橋の上から船が見えます。', furigana: 'はし の うえ から ふね が みえます。', romaji: 'Hashi no ue kara fune ga miemasu.', english: 'You can see boats from the bridge.' }
    ]
  },
  {
    id: 'w-n5-510',
    word: '交差点',
    reading: 'こうさてん',
    romaji: 'kousaten',
    meaning: 'intersection, crossroads',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "交", "meaning": "Cross"}, {"char": "差", "meaning": "Difference / Branch"}, {"char": "点", "meaning": "Point"}],
    sentences: [
      { id: 'ws-n5-510-1', sentence: '交差点を左に曲がってください。', furigana: 'こうさてん を ひだり に まがって ください。', romaji: 'Kousaten o hidari ni magatte kudasai.', english: 'Please turn left at the intersection.' },
      { id: 'ws-n5-510-2', sentence: '交差点で車が止まりました。', furigana: 'こうさてん で くるま が とまりました。', romaji: 'Kousaten de kuruma ga tomarimashita.', english: 'The car stopped at the intersection.' }
    ]
  },
  {
    id: 'w-n5-511',
    word: '角',
    reading: 'かど',
    romaji: 'kado',
    meaning: 'corner (street/room)',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "角", "meaning": "Corner / Horn"}],
    sentences: [
      { id: 'ws-n5-511-1', sentence: '次の角を右に曲がります。', furigana: 'つぎ の かど を みぎ に まがります。', romaji: 'Tsugi no kado o migi ni magarimasu.', english: 'Turn right at the next corner.' },
      { id: 'ws-n5-511-2', sentence: '角の店でパンを買いました。', furigana: 'かど の みせ で パン を かいました。', romaji: 'Kado no mise de pan o kaimashita.', english: 'I bought bread at the corner shop.' }
    ]
  },
  {
    id: 'w-n5-512',
    word: '信号',
    reading: 'しんごう',
    romaji: 'shingou',
    meaning: 'traffic light, signal',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "信", "meaning": "Trust / Message"}, {"char": "号", "meaning": "Number / Signal"}],
    sentences: [
      { id: 'ws-n5-512-1', sentence: '赤信号で止まってください。', furigana: 'あかしんごう で とまって ください。', romaji: 'Akashingou de tomatte kudasai.', english: 'Please stop at the red light.' },
      { id: 'ws-n5-512-2', sentence: '青信号になったら道を渡ります。', furigana: 'あおしんごう に なったら みち を わたり ます。', romaji: 'Aoshingou ni nattara michi o watarimasu.', english: 'Cross the street when the light turns green.' }
    ]
  },
  {
    id: 'w-n5-513',
    word: '踏切',
    reading: 'ふみきり',
    romaji: 'fumikiri',
    meaning: 'railroad crossing',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "踏", "meaning": "Step"}, {"char": "切", "meaning": "Cut"}],
    sentences: [
      { id: 'ws-n5-513-1', sentence: '踏切の前で電車を待ちます。', furigana: 'ふみきり の まえ で でんしゃ を まちます。', romaji: 'Fumikiri no mae de densha o machimasu.', english: 'I wait for the train in front of the crossing.' },
      { id: 'ws-n5-513-2', sentence: '電車が通ったので踏切を渡りました。', furigana: 'でんしゃ が とおった ので ふみきり を わたりました。', romaji: 'Densha ga tootta node fumikiri o watarimashita.', english: 'The train passed, so I crossed the railroad crossing.' }
    ]
  },
  {
    id: 'w-n5-514',
    word: '横断歩道',
    reading: 'おうだんほどう',
    romaji: 'oudanhodou',
    meaning: 'pedestrian crosswalk',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "横", "meaning": "Side / Across"}, {"char": "断", "meaning": "Sever"}, {"char": "歩", "meaning": "Walk"}, {"char": "道", "meaning": "Road"}],
    sentences: [
      { id: 'ws-n5-514-1', sentence: '横断歩道を渡りましょう。', furigana: 'おうだんほどう を わたりましょう。', romaji: 'Oudanhodou o watarimashou.', english: 'Let\'s cross at the pedestrian crosswalk.' },
      { id: 'ws-n5-514-2', sentence: '横断歩道の前で車が止まりました。', furigana: 'おうだんほどう の まえ で くるま が とまりました。', romaji: 'Oudanhodou no mae de kuruma ga tomarimashita.', english: 'The car stopped in front of the crosswalk.' }
    ]
  },
  {
    id: 'w-n5-515',
    word: '歩道',
    reading: 'ほどう',
    romaji: 'hodou',
    meaning: 'sidewalk, pavement',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "歩", "meaning": "Walk"}, {"char": "道", "meaning": "Road"}],
    sentences: [
      { id: 'ws-n5-515-1', sentence: '歩道を安全に歩いてください。', furigana: 'ほどう を あんぜん に あるいて ください。', romaji: 'Hodou o anzen ni aruite kudasai.', english: 'Please walk safely on the sidewalk.' },
      { id: 'ws-n5-515-2', sentence: '広い歩道が駅まで続いています。', furigana: 'ひろい ほどう が えき まで つづいて います。', romaji: 'Hiroi hodou ga eki made tsuzuite imasu.', english: 'A wide sidewalk leads to the station.' }
    ]
  },
  {
    id: 'w-n5-516',
    word: '建物',
    reading: 'たてもの',
    romaji: 'tatemono',
    meaning: 'building, structure',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "建", "meaning": "Build"}, {"char": "物", "meaning": "Thing"}],
    sentences: [
      { id: 'ws-n5-516-1', sentence: 'あの白い建物は図書館です。', furigana: 'あの しろい たてもの は としょかん です。', romaji: 'Ano shiroi tatemono wa toshokan desu.', english: 'That white building is the library.' },
      { id: 'ws-n5-516-2', sentence: '駅の周辺に新しい建物が増えました。', furigana: 'えき の しゅうへん に あたらしい たてもの が ふえました。', romaji: 'Eki no shuuhen ni atarashii tatemono ga fuemashita.', english: 'New buildings increased around the station.' }
    ]
  },
  {
    id: 'w-n5-517',
    word: 'ビル',
    reading: 'びる',
    romaji: 'biru',
    meaning: 'commercial building',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-517-1', sentence: '駅の前に高いビルがたくさんあります。', furigana: 'えき の まえ に たかい ビル が たくさん あります。', romaji: 'Eki no mae ni takai biru ga takusan arimasu.', english: 'There are many tall buildings in front of the station.' },
      { id: 'ws-n5-517-2', sentence: 'あのビルの十階で働いています。', furigana: 'あの ビル の じゅっかい で はたらいて います。', romaji: 'Ano biru no jukkai de hataraite imasu.', english: 'I work on the tenth floor of that building.' }
    ]
  },
  {
    id: 'w-n5-518',
    word: '屋上',
    reading: 'おくじょう',
    romaji: 'okujou',
    meaning: 'rooftop',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "屋", "meaning": "Roof / House"}, {"char": "上", "meaning": "Top"}],
    sentences: [
      { id: 'ws-n5-518-1', sentence: 'デパートの屋上から富士山が見えました。', furigana: 'デパート の おくじょう から ふじさん が みえました。', romaji: 'Depaato no okujou kara Fujisan ga miemashita.', english: 'I could see Mt. Fuji from the department store roof.' },
      { id: 'ws-n5-518-2', sentence: '天気がいいので屋上で休みました。', furigana: 'てんき が いい ので おくじょう で やすみました。', romaji: 'Tenki ga ii node okujou de yasumimashita.', english: 'Because the weather was good, I rested on the rooftop.' }
    ]
  },
  {
    id: 'w-n5-519',
    word: '地下',
    reading: 'ちか',
    romaji: 'chika',
    meaning: 'basement, underground',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "地", "meaning": "Earth"}, {"char": "下", "meaning": "Under"}],
    sentences: [
      { id: 'ws-n5-519-1', sentence: 'デパートの地下でお弁当を買いました。', furigana: 'デパート の ちか で おべんとう を かいました。', romaji: 'Depaato no chika de obentou o kaimashita.', english: 'I bought lunch in the department store basement.' },
      { id: 'ws-n5-519-2', sentence: 'エスカレーターで地下へ降ります。', furigana: 'エスカレーター で ちか へ おります。', romaji: 'Esukareetaa de chika e orimasu.', english: 'I go down to the basement on the escalator.' }
    ]
  },
  {
    id: 'w-n5-520',
    word: '受付',
    reading: 'うけつけ',
    romaji: 'uketsuke',
    meaning: 'reception desk, front counter',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "受", "meaning": "Receive"}, {"char": "付", "meaning": "Attach"}],
    sentences: [
      { id: 'ws-n5-520-1', sentence: '会社の受付で名前を書きました。', furigana: 'かいしゃ の うけつけ で なまえ を かきました。', romaji: 'Kaisha no uketsuke de namae o kakimashita.', english: 'I wrote my name at the company reception.' },
      { id: 'ws-n5-520-2', sentence: '受付であの人に聞いてみてください。', furigana: 'うけつけ で あの ひと に きいて みて ください。', romaji: 'Uketsuke de ano hito ni kiite mite kudasai.', english: 'Please try asking that person at reception.' }
    ]
  },
  {
    id: 'w-n5-521',
    word: '事務所',
    reading: 'じむしょ',
    romaji: 'jimusho',
    meaning: 'office, workplace',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "事", "meaning": "Matter"}, {"char": "務", "meaning": "Task"}, {"char": "所", "meaning": "Place"}],
    sentences: [
      { id: 'ws-n5-521-1', sentence: '先生の事務所へ書類を持って行きました。', furigana: 'せんせい の じむしょ へ しょるい を もって いきました。', romaji: 'Sensei no jimusho e shorui o motte ikimashita.', english: 'I took the papers to the teacher\'s office.' },
      { id: 'ws-n5-521-2', sentence: '事務所で静かに仕事をします。', furigana: 'じむしょ で しずかに しごと を します。', romaji: 'Jimusho de shizukani shigoto o shimasu.', english: 'I work quietly in the office.' }
    ]
  },
  {
    id: 'w-n5-522',
    word: '会議室',
    reading: 'かいぎしつ',
    romaji: 'kaigishitsu',
    meaning: 'meeting room, conference room',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "会", "meaning": "Meet"}, {"char": "議", "meaning": "Deliberate"}, {"char": "室", "meaning": "Room"}],
    sentences: [
      { id: 'ws-n5-522-1', sentence: '二階の会議室で会議を行います。', furigana: 'にかい の かいぎしつ で かいぎ を おこないます。', romaji: 'Nikai no kaigishitsu de kaigi o okonaimasu.', english: 'We will hold the meeting in the conference room on the 2nd floor.' },
      { id: 'ws-n5-522-2', sentence: '会議室に入ってください。', furigana: 'かいぎしつ に はいって ください。', romaji: 'Kaigishitsu ni haitte kudasai.', english: 'Please enter the conference room.' }
    ]
  },
  {
    id: 'w-n5-523',
    word: '切符売り場',
    reading: 'きっぷうりば',
    romaji: 'kippuuriba',
    meaning: 'ticket counter, ticket office',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "切", "meaning": "Cut"}, {"char": "符", "meaning": "Ticket"}, {"char": "売", "meaning": "Sell"}, {"char": "場", "meaning": "Place"}],
    sentences: [
      { id: 'ws-n5-523-1', sentence: '切符売り場で電車の切符を買いました。', furigana: 'きっぷうりば で でんしゃ の きっぷ を かいました。', romaji: 'Kippuuriba de densha no kippu o kaimashita.', english: 'I bought a train ticket at the ticket office.' },
      { id: 'ws-n5-523-2', sentence: '切符売り場は改札口の横にあります。', furigana: 'きっぷうりば は かいさつぐち の よこ に あります。', romaji: 'Kippuuriba wa kaisatsuguchi no yoko ni arimasu.', english: 'The ticket office is beside the ticket gate.' }
    ]
  },
  {
    id: 'w-n5-524',
    word: '改札口',
    reading: 'かいさつぐち',
    romaji: 'kaisatsuguchi',
    meaning: 'ticket gate, turnstile',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "改", "meaning": "Examine"}, {"char": "札", "meaning": "Ticket / Bill"}, {"char": "口", "meaning": "Mouth / Gate"}],
    sentences: [
      { id: 'ws-n5-524-1', sentence: '改札口で切符をタッチします。', furigana: 'かいさつぐち で きっぷ を タッチ します。', romaji: 'Kaisatsuguchi de kippu o tacchi shimasu.', english: 'I touch my card at the ticket gate.' },
      { id: 'ws-n5-524-2', sentence: '改札口の前で待ち合わせをしましょう。', furigana: 'かいさつぐち の まえ で まちあわせ を しましょう。', romaji: 'Kaisatsuguchi no mae de machiawase o shimashou.', english: 'Let\'s meet up in front of the ticket gates.' }
    ]
  },
  {
    id: 'w-n5-525',
    word: 'ホーム',
    reading: 'ほーむ',
    romaji: 'hoomu',
    meaning: 'railway platform',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-525-1', sentence: '一番線のホームで電車を待ちます。', furigana: 'いちばんせん の ホーム で でんしゃ を まちます。', romaji: 'Ichibansen no hoomu de densha o machimasu.', english: 'I wait for the train on platform 1.' },
      { id: 'ws-n5-525-2', sentence: '電車がホームに入ってきました。', furigana: 'でんしゃ が ホーム に はいって きました。', romaji: 'Densha ga hoomu ni haitte kimashita.', english: 'The train entered the platform.' }
    ]
  },
  {
    id: 'w-n5-526',
    word: '乗り場',
    reading: 'のりば',
    romaji: 'noriba',
    meaning: 'boarding point, taxi/bus stop',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "乗", "meaning": "Ride"}, {"char": "場", "meaning": "Place"}],
    sentences: [
      { id: 'ws-n5-526-1', sentence: 'タクシー乗り場はどこですか。', furigana: 'タクシー のりば は どこ です か。', romaji: 'Takushii noriba wa doko desu ka.', english: 'Where is the taxi stand?' },
      { id: 'ws-n5-526-2', sentence: '二番のバス乗り場から乗ります。', furigana: 'にばん の バス のりば から のります。', romaji: 'Niban no basu noriba kara norimasu.', english: 'I will board at bus stop number 2.' }
    ]
  },
  {
    id: 'w-n5-527',
    word: '入口',
    reading: 'いりぐち',
    romaji: 'iriguchi',
    meaning: 'entrance, doorway',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "入", "meaning": "Enter"}, {"char": "口", "meaning": "Opening"}],
    sentences: [
      { id: 'ws-n5-527-1', sentence: '建物の入口はあちらです。', furigana: 'たてもの の いりぐち は あちら です。', romaji: 'Tatemono no iriguchi wa achira desu.', english: 'The entrance of the building is over that way.' },
      { id: 'ws-n5-527-2', sentence: '入口で靴を脱いでください。', furigana: 'いりぐち で くつ を ぬいで ください。', romaji: 'Iriguchi de kutsu o nuide kudasai.', english: 'Please take off your shoes at the entrance.' }
    ]
  },
  {
    id: 'w-n5-528',
    word: '出口',
    reading: 'でぐち',
    romaji: 'deguchi',
    meaning: 'exit, way out',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "出", "meaning": "Exit"}, {"char": "口", "meaning": "Opening"}],
    sentences: [
      { id: 'ws-n5-528-1', sentence: '駅の西口の出口から出ました。', furigana: 'えき の にしぐち の でぐち から でました。', romaji: 'Eki no nishiguchi no deguchi kara demashita.', english: 'I came out from the west exit.' },
      { id: 'ws-n5-528-2', sentence: '出口はどこにありますか。', furigana: 'でぐち は どこ に あります か。', romaji: 'Deguchi wa doko ni arimasu ka.', english: 'Where is the exit?' }
    ]
  },
  {
    id: 'w-n5-529',
    word: '非常口',
    reading: 'ひじょうぐち',
    romaji: 'hijouguchi',
    meaning: 'emergency exit',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "非", "meaning": "Non"}, {"char": "常", "meaning": "Normal"}, {"char": "口", "meaning": "Exit"}],
    sentences: [
      { id: 'ws-n5-529-1', sentence: '廊下の突き当たりに非常口があります。', furigana: 'ろうか の つきあたり に ひじょうぐち が あります。', romaji: 'Rouka no tsukiatari ni hijouguchi ga arimasu.', english: 'There is an emergency exit at the end of the hall.' },
      { id: 'ws-n5-529-2', sentence: '緑の非常口のマークを確認しました。', furigana: 'みどり の ひじょうぐち の マーク を かくにん しました。', romaji: 'Midori no hijouguchi no maaku o kakunin shimashita.', english: 'I checked the green emergency exit mark.' }
    ]
  },
  {
    id: 'w-n5-530',
    word: '案内所',
    reading: 'あんないしょ',
    romaji: 'annaisho',
    meaning: 'information desk, information office',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "案", "meaning": "Guide"}, {"char": "内", "meaning": "Inside"}, {"char": "所", "meaning": "Place"}],
    sentences: [
      { id: 'ws-n5-530-1', sentence: '駅の案内所で道を聞きました。', furigana: 'えき の あんないしょ で みち を ききました。', romaji: 'Eki no annaisho de michi o kikimashita.', english: 'I asked for directions at the station information office.' },
      { id: 'ws-n5-530-2', sentence: '観光案内所でパンフレットをもらいました。', furigana: 'かんこう あんないしょ で パンフレット を もらいました。', romaji: 'Kankou annaisho de panfuretto o moraimashita.', english: 'I received a brochure at the tourist information center.' }
    ]
  },
  {
    id: 'w-n5-531',
    word: '駐車場',
    reading: 'ちゅうしゃじょう',
    romaji: 'chuushajou',
    meaning: 'parking lot, car park',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "駐", "meaning": "Station"}, {"char": "車", "meaning": "Car"}, {"char": "場", "meaning": "Place"}],
    sentences: [
      { id: 'ws-n5-531-1', sentence: 'スーパーの駐車場に車を止めました。', furigana: 'スーパー の ちゅうしゃじょう に くるま を とめました。', romaji: 'Suupaa no chuushajou ni kuruma o tomemashita.', english: 'I parked the car in the supermarket parking lot.' },
      { id: 'ws-n5-531-2', sentence: '駐車場はあちらにあります。', furigana: 'ちゅうしゃじょう は あちら に あります。', romaji: 'Chuushajou wa achira ni arimasu.', english: 'The parking lot is over that way.' }
    ]
  },
  {
    id: 'w-n5-532',
    word: '駐輪場',
    reading: 'ちゅうりんじょう',
    romaji: 'chuurinjou',
    meaning: 'bicycle parking area',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "駐", "meaning": "Station"}, {"char": "輪", "meaning": "Wheel"}, {"char": "場", "meaning": "Place"}],
    sentences: [
      { id: 'ws-n5-532-1', sentence: '駅の駐輪場に自転車を止めます。', furigana: 'えき の ちゅうりんじょう に じてんしゃ を とめます。', romaji: 'Eki no chuurinjou ni jitensha o tomemasu.', english: 'I park my bicycle at the station bicycle parking.' },
      { id: 'ws-n5-532-2', sentence: '駐輪場は無料ですか。', furigana: 'ちゅうりんじょう は むりょう です か。', romaji: 'Chuurinjou wa muryou desu ka.', english: 'Is the bicycle parking free?' }
    ]
  },
  {
    id: 'w-n5-533',
    word: '港町',
    reading: 'みなとまち',
    romaji: 'minatomachi',
    meaning: 'port town, harbor city',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "港", "meaning": "Port"}, {"char": "町", "meaning": "Town"}],
    sentences: [
      { id: 'ws-n5-533-1', sentence: '神戸はきれいな港町です。', furigana: 'こうべ は きれい な みなとまち です。', romaji: 'Koube wa kirei na minatomachi desu.', english: 'Kobe is a pretty port town.' },
      { id: 'ws-n5-533-2', sentence: '港町で新鮮な魚を食べました。', furigana: 'みなとまち で しんせん な さかな を たべました。', romaji: 'Minatomachi de shinsen na sakana o tabemashita.', english: 'I ate fresh fish in the port town.' }
    ]
  },
  {
    id: 'w-n5-534',
    word: '映画',
    reading: 'えいが',
    romaji: 'eiga',
    meaning: 'movie, film',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "映", "meaning": "Project / Reflect"}, {"char": "画", "meaning": "Picture"}],
    sentences: [
      { id: 'ws-n5-534-1', sentence: '週末に面白い映画を見ました。', furigana: 'しゅうまつ に おもしろい えいが を みました。', romaji: 'Shuumatsu ni omoshiroi eiga o mimashita.', english: 'I watched an interesting movie on the weekend.' },
      { id: 'ws-n5-534-2', sentence: '日本の映画が好きです。', furigana: 'にほん の えいが が すき です。', romaji: 'Nihon no eiga ga suki desu.', english: 'I like Japanese movies.' }
    ]
  },
  // ==========================================
  // === BATCH 6: ADJECTIVES, ADVERBS, NUMBERS, COUNTERS (w-n5-535 to w-n5-634) ===
  // ==========================================
  {
    id: 'w-n5-535',
    word: '良い',
    reading: 'よい',
    romaji: 'yoi',
    meaning: 'good, nice',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "良", "meaning": "Good"}],
    sentences: [
      { id: 'ws-n5-535-1', sentence: '今日は天気がとても良いです。', furigana: 'きょう は てんき が とても よい です。', romaji: 'Kyou wa tenki ga totemo yoi desu.', english: 'The weather is very good today.' },
      { id: 'ws-n5-535-2', sentence: 'これはとても良い辞書ですね。', furigana: 'これ は とても よい じしょ です ね。', romaji: 'Kore wa totemo yoi jisho desu ne.', english: 'This is a very good dictionary, isn\'t it?' }
    ]
  },
  {
    id: 'w-n5-536',
    word: '悪い',
    reading: 'わるい',
    romaji: 'warui',
    meaning: 'bad, inferior',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "悪", "meaning": "Bad"}],
    sentences: [
      { id: 'ws-n5-536-1', sentence: '今日は天気が悪いです。', furigana: 'きょう は てんき が わるい です。', romaji: 'Kyou wa tenki ga warui desu.', english: 'The weather is bad today.' },
      { id: 'ws-n5-536-2', sentence: '体の具合が悪いです。', furigana: 'からだ の ぐあい が わるい です。', romaji: 'Karada no guai ga warui desu.', english: 'I feel unwell.' }
    ]
  },
  {
    id: 'w-n5-537',
    word: '暑い',
    reading: 'あつい',
    romaji: 'atsui',
    meaning: 'hot (weather/climate)',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "暑", "meaning": "Hot / Summer"}],
    sentences: [
      { id: 'ws-n5-537-1', sentence: '夏の京都はとても暑いです。', furigana: 'なつ の きょうと は とても あつい です。', romaji: 'Natsu no Kyouto wa totemo atsui desu.', english: 'Kyoto in summer is very hot.' },
      { id: 'ws-n5-537-2', sentence: '今日は暑いのでアイスクリームを食べました。', furigana: 'きょう は あつい ので アイスクリーム を たべました。', romaji: 'Kyou wa atsui node aisukuriimu o tabemashita.', english: 'Because it is hot today, I ate ice cream.' }
    ]
  },
  {
    id: 'w-n5-538',
    word: '寒い',
    reading: 'さむい',
    romaji: 'samui',
    meaning: 'cold (weather/climate)',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "寒", "meaning": "Cold / Winter"}],
    sentences: [
      { id: 'ws-n5-538-1', sentence: '今日の朝はとても寒いです。', furigana: 'きょう の あさ は とても さむい です。', romaji: 'Kyou no asa wa totemo samui desu.', english: 'It is very cold this morning.' },
      { id: 'ws-n5-538-2', sentence: '寒いのでコートを着てください。', furigana: 'さむい ので コート を きて ください。', romaji: 'Samui node kooto o kite kudasai.', english: 'Because it is cold, please wear a coat.' }
    ]
  },
  {
    id: 'w-n5-539',
    word: '熱い',
    reading: 'あつい',
    romaji: 'atsui',
    meaning: 'hot (object/liquid)',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "熱", "meaning": "Heat / Fever"}],
    sentences: [
      { id: 'ws-n5-539-1', sentence: '熱いお茶を一杯どうぞ。', furigana: 'あつい おちゃ を いっぱい どうぞ。', romaji: 'Atsui ocha o ippai douzo.', english: 'Please have a cup of hot tea.' },
      { id: 'ws-n5-539-2', sentence: 'スープがとても熱いので気をつけてください。', furigana: 'スープ が とても あつい ので き を つけて ください。', romaji: 'Suupu ga totemo atsui node ki o tsukete kudasai.', english: 'The soup is very hot, so please be careful.' }
    ]
  },
  {
    id: 'w-n5-540',
    word: '冷たい',
    reading: 'つめたい',
    romaji: 'tsumetai',
    meaning: 'cold (to touch/liquid)',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "冷", "meaning": "Cool / Cold"}],
    sentences: [
      { id: 'ws-n5-540-1', sentence: '冷たい水を一杯ください。', furigana: 'つめたい みず を いっぱい ください。', romaji: 'Tsumetai mizu o ippai kudasai.', english: 'Please give me a glass of cold water.' },
      { id: 'ws-n5-540-2', sentence: '手が冷たくなりました。', furigana: 'て が つめたく なりました。', romaji: 'Te ga tsumetaku narimashita.', english: 'My hands became cold.' }
    ]
  },
  {
    id: 'w-n5-541',
    word: '暖かい',
    reading: 'あたたかい',
    romaji: 'atatakai',
    meaning: 'warm (weather/climate)',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "暖", "meaning": "Warmth"}],
    sentences: [
      { id: 'ws-n5-541-1', sentence: '春は暖かくて気持ちがいいです。', furigana: 'はる は あたたかくて きもち が いい です。', romaji: 'Haru wa atatakakute kimochi ga ii desu.', english: 'Spring is warm and feels pleasant.' },
      { id: 'ws-n5-541-2', sentence: '今日は暖かい日ですね。', furigana: 'きょう は あたたかい ひ です ね。', romaji: 'Kyou wa atatakai hi desu ne.', english: 'Today is a warm day, isn\'t it?' }
    ]
  },
  {
    id: 'w-n5-542',
    word: '温かい',
    reading: 'あたたかい',
    romaji: 'atatakai',
    meaning: 'warm (food/drink/heart)',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "温", "meaning": "Warm"}],
    sentences: [
      { id: 'ws-n5-542-1', sentence: '温かいスープを飲みました。', furigana: 'あたたかい スープ を のみました。', romaji: 'Atatakai suupu o nomimashita.', english: 'I drank warm soup.' },
      { id: 'ws-n5-542-2', sentence: '温かいお風呂に入りましょう。', furigana: 'あたたかい おふろ に はいりましょう。', romaji: 'Atatakai ofuro ni hairimashou.', english: 'Let\'s soak in a warm bath.' }
    ]
  },
  {
    id: 'w-n5-543',
    word: '涼しい',
    reading: 'すずしい',
    romaji: 'suzushii',
    meaning: 'cool, refreshing (breeze)',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "涼", "meaning": "Cool / Refreshing"}],
    sentences: [
      { id: 'ws-n5-543-1', sentence: '秋になると涼しくなります。', furigana: 'あき に なる と すずしく なります。', romaji: 'Aki ni naru to suzushiku narimasu.', english: 'It becomes cool when autumn comes.' },
      { id: 'ws-n5-543-2', sentence: 'エアコンの部屋は涼しいです。', furigana: 'エアコン の へや は すずしい です。', romaji: 'Eakon no heya wa suzushii desu.', english: 'The air-conditioned room is cool.' }
    ]
  },
  {
    id: 'w-n5-544',
    word: '早い',
    reading: 'はやい',
    romaji: 'hayai',
    meaning: 'early (in time)',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "早", "meaning": "Early"}],
    sentences: [
      { id: 'ws-n5-544-1', sentence: '毎朝、早い時間に起きます。', furigana: 'まいあさ、はやい じかん に おきます。', romaji: 'Maiasa, hayai jikan ni okimasu.', english: 'Every morning, I wake up at an early hour.' },
      { id: 'ws-n5-544-2', sentence: '今夜は早く寝ます。', furigana: 'こんや は はやく ねます。', romaji: 'Kon\'ya wa hayaku nemasu.', english: 'Tonight I will sleep early.' }
    ]
  },
  {
    id: 'w-n5-545',
    word: '速い',
    reading: 'はやい',
    romaji: 'hayai',
    meaning: 'fast, quick (speed)',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "速", "meaning": "Fast"}],
    sentences: [
      { id: 'ws-n5-545-1', sentence: '新幹線はとても速いです。', furigana: 'しんかんせん は とても はやい です。', romaji: 'Shinkansen wa totemo hayai desu.', english: 'The bullet train is very fast.' },
      { id: 'ws-n5-545-2', sentence: '彼は走るのが速いです。', furigana: 'かれ は はしる の が はやい です。', romaji: 'Kare wa hashiru no ga hayai desu.', english: 'He is fast at running.' }
    ]
  },
  {
    id: 'w-n5-546',
    word: '遅い',
    reading: 'おそい',
    romaji: 'osoi',
    meaning: 'late, slow',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "遅", "meaning": "Slow / Late"}],
    sentences: [
      { id: 'ws-n5-546-1', sentence: '電車の到着が遅いです。', furigana: 'でんしゃ の とうちゃく が おそい です。', romaji: 'Densha no touchaku ga osoi desu.', english: 'The train arrival is late.' },
      { id: 'ws-n5-546-2', sentence: '昨日の夜、遅くに寝ました。', furigana: 'きのう の よる、おそく に ねました。', romaji: 'Kinou no yoru, osoku ni nemashita.', english: 'Last night, I went to sleep late.' }
    ]
  },
  {
    id: 'w-n5-547',
    word: '長い',
    reading: 'ながい',
    romaji: 'nagai',
    meaning: 'long (length/time)',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "長", "meaning": "Long"}],
    sentences: [
      { id: 'ws-n5-547-1', sentence: '川にかかる長い橋を渡ります。', furigana: 'かわ に かかる ながい はし を わたり ます。', romaji: 'Kawa ni kakaru nagai hashi o watarimasu.', english: 'I cross the long bridge over the river.' },
      { id: 'ws-n5-547-2', sentence: '彼女は長い髪をしています。', furigana: 'かのじょ は ながい かみ を して います。', romaji: 'Kanojo wa nagai kami o shite imasu.', english: 'She has long hair.' }
    ]
  },
  {
    id: 'w-n5-548',
    word: '短い',
    reading: 'みじかい',
    romaji: 'mijikai',
    meaning: 'short (length/time)',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "短", "meaning": "Short"}],
    sentences: [
      { id: 'ws-n5-548-1', sentence: '夏休みは短いです。', furigana: 'なつやすみ は みじかい です。', romaji: 'Natsuyasumi wa mijikai desu.', english: 'Summer vacation is short.' },
      { id: 'ws-n5-548-2', sentence: '短い鉛筆を使っています。', furigana: 'みじかい えんぴつ を つかって います。', romaji: 'Mijikai enpitsu o tsukatte imasu.', english: 'I am using a short pencil.' }
    ]
  },
  {
    id: 'w-n5-549',
    word: '重い',
    reading: 'おもい',
    romaji: 'omoi',
    meaning: 'heavy, serious',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "重", "meaning": "Heavy"}],
    sentences: [
      { id: 'ws-n5-549-1', sentence: 'このスーツケースはとても重いです。', furigana: 'この スーツケース は とても おもい です。', romaji: 'Kono suutsukeesu wa totemo omoi desu.', english: 'This suitcase is very heavy.' },
      { id: 'ws-n5-549-2', sentence: '重い荷物を持ちました。', furigana: 'おもい にもつ を もちました。', romaji: 'Omoi nimotsu o mochimashita.', english: 'I carried heavy luggage.' }
    ]
  },
  {
    id: 'w-n5-550',
    word: '軽い',
    reading: 'かるい',
    romaji: 'karui',
    meaning: 'light (weight/feeling)',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "軽", "meaning": "Light"}],
    sentences: [
      { id: 'ws-n5-550-1', sentence: 'この鞄はとても軽くて持ちやすいです。', furigana: 'この かばん は とても かるくて もちやすい です。', romaji: 'Kono kaban wa totemo karukute mochiyasui desu.', english: 'This bag is very light and easy to carry.' },
      { id: 'ws-n5-550-2', sentence: '軽い靴を買いました。', furigana: 'かるい くつ を かいました。', romaji: 'Karui kutsu o kaimashita.', english: 'I bought lightweight shoes.' }
    ]
  },
  {
    id: 'w-n5-551',
    word: '明るい',
    reading: 'あかるい',
    romaji: 'akarui',
    meaning: 'bright, cheerful',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "明", "meaning": "Bright"}],
    sentences: [
      { id: 'ws-n5-551-1', sentence: 'この部屋は窓が大きくて明るいです。', furigana: 'この へや は まど が おおきくて あかるい です。', romaji: 'Kono heya wa mado ga ookikute akarui desu.', english: 'This room is bright with big windows.' },
      { id: 'ws-n5-551-2', sentence: '田中さんはいつも明るい人です。', furigana: 'たなかさん は いつも あかるい ひと です。', romaji: 'Tanaka-san wa itsumo akarui hito desu.', english: 'Mr. Tanaka is always a cheerful person.' }
    ]
  },
  {
    id: 'w-n5-552',
    word: '暗い',
    reading: 'くらい',
    romaji: 'kurai',
    meaning: 'dark, gloomy',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "暗", "meaning": "Dark"}],
    sentences: [
      { id: 'ws-n5-552-1', sentence: '外が暗くなってきました。', furigana: 'そと が くらく なって きました。', romaji: 'Soto ga kuraku natte kimashita.', english: 'It has become dark outside.' },
      { id: 'ws-n5-552-2', sentence: '部屋が暗いので電気をつけてください。', furigana: 'へや が くらい ので でんき を つけて ください。', romaji: 'Heya ga kurai node denki o tsukete kudasai.', english: 'Because the room is dark, please turn on the light.' }
    ]
  },
  {
    id: 'w-n5-553',
    word: '広い',
    reading: 'ひろい',
    romaji: 'hiroi',
    meaning: 'spacious, wide',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "広", "meaning": "Wide / Broad"}],
    sentences: [
      { id: 'ws-n5-553-1', sentence: '私の部屋はとても広いです。', furigana: 'わたし の へや は とても ひろい です。', romaji: 'Watashi no heya wa totemo hiroi desu.', english: 'My room is very spacious.' },
      { id: 'ws-n5-553-2', sentence: '広い公園で散歩をしました。', furigana: 'ひろい こうえん で さんぽ を しました。', romaji: 'Hiroi kouen de sanpo o shimashita.', english: 'I walked in a wide park.' }
    ]
  },
  {
    id: 'w-n5-554',
    word: '狭い',
    reading: 'せまい',
    romaji: 'semai',
    meaning: 'narrow, cramped',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "狭", "meaning": "Narrow"}],
    sentences: [
      { id: 'ws-n5-554-1', sentence: '私の部屋は少し狭いです。', furigana: 'わたし の へや は すこし せまい です。', romaji: 'Watashi no heya wa sukoshi semai desu.', english: 'My room is a little cramped.' },
      { id: 'ws-n5-554-2', sentence: '狭い道を通りました。', furigana: 'せまい みち を とおりました。', romaji: 'Semai michi o toorimashita.', english: 'I went through a narrow path.' }
    ]
  },
  {
    id: 'w-n5-555',
    word: '近い',
    reading: 'ちかい',
    romaji: 'chikai',
    meaning: 'near, close',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "近", "meaning": "Near"}],
    sentences: [
      { id: 'ws-n5-555-1', sentence: '私の家は駅からとても近いです。', furigana: 'わたし の いえ は えき から とても ちかい です。', romaji: 'Watashi no ie wa eki kara totemo chikai desu.', english: 'My house is very near the station.' },
      { id: 'ws-n5-555-2', sentence: '近くのスーパーで買い物をします。', furigana: 'ちかく の スーパー で かいもの を します。', romaji: 'Chikaku no suupaa de kaimono o shimasu.', english: 'I shop at a nearby supermarket.' }
    ]
  },
  {
    id: 'w-n5-556',
    word: '遠い',
    reading: 'とおい',
    romaji: 'tooi',
    meaning: 'far, distant',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "遠", "meaning": "Far"}],
    sentences: [
      { id: 'ws-n5-556-1', sentence: '学校は家から少し遠いです。', furigana: 'がっこう は いえ から すこし とおい です。', romaji: 'Gakkou wa ie kara sukoshi tooi desu.', english: 'School is a bit far from home.' },
      { id: 'ws-n5-556-2', sentence: '遠い国へ旅行に行きたいです。', furigana: 'とおい くに へ りょこう に いきたい です。', romaji: 'Tooi kuni e ryokou ni ikitai desu.', english: 'I want to travel to a distant country.' }
    ]
  },
  {
    id: 'w-n5-557',
    word: '多い',
    reading: 'おおい',
    romaji: 'ooi',
    meaning: 'many, numerous',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "多", "meaning": "Many"}],
    sentences: [
      { id: 'ws-n5-557-1', sentence: '電車の中に人が多いです。', furigana: 'でんしゃ の なか に ひと が おおい です。', romaji: 'Densha no naka ni hito ga ooi desu.', english: 'There are many people in the train.' },
      { id: 'ws-n5-557-2', sentence: 'この町は外国人が多いです。', furigana: 'この まち は がいこくじん が おおい です。', romaji: 'Kono machi wa gaikokujin ga ooi desu.', english: 'There are many foreigners in this town.' }
    ]
  },
  {
    id: 'w-n5-558',
    word: '少ない',
    reading: 'すくない',
    romaji: 'sukunai',
    meaning: 'few, scarce, little',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "少", "meaning": "Few / Little"}],
    sentences: [
      { id: 'ws-n5-558-1', sentence: '今日の電車は人が少ないです。', furigana: 'きょう の でんしゃ は ひと が すくない です。', romaji: 'Kyou no densha wa hito ga sukunai desu.', english: 'There are few people on today\'s train.' },
      { id: 'ws-n5-558-2', sentence: '時間が少ないので急ぎましょう。', furigana: 'じかん が すくない ので いそぎましょう。', romaji: 'Jikan ga sukunai node isogimashou.', english: 'We have little time, so let\'s hurry.' }
    ]
  },
  {
    id: 'w-n5-559',
    word: '楽しい',
    reading: 'たのしい',
    romaji: 'tanoshii',
    meaning: 'fun, enjoyable',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "楽", "meaning": "Enjoy / Pleasure"}],
    sentences: [
      { id: 'ws-n5-559-1', sentence: '旅行はとても楽しかったです。', furigana: 'りょこう は とても たのしかった です。', romaji: 'Ryokou wa totemo tanoshikatta desu.', english: 'The trip was very fun.' },
      { id: 'ws-n5-559-2', sentence: '友達と日本語を勉強するのは楽しいです。', furigana: 'ともだち と にほんご を べんきょう する の は たのしい です。', romaji: 'Tomodachi to nihongo o benkyou suru no wa tanoshii desu.', english: 'Studying Japanese with friends is fun.' }
    ]
  },
  {
    id: 'w-n5-560',
    word: '面白い',
    reading: 'おもしろい',
    romaji: 'omoshiroi',
    meaning: 'interesting, funny',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "面", "meaning": "Face"}, {"char": "白", "meaning": "White / Clear"}],
    sentences: [
      { id: 'ws-n5-560-1', sentence: 'この本はとても面白いです。', furigana: 'この ほん は とても おもしろい です。', romaji: 'Kono hon wa totemo omoshiroi desu.', english: 'This book is very interesting.' },
      { id: 'ws-n5-560-2', sentence: '面白い話を聞いて笑いました。', furigana: 'おもしろい はなし を きいて わらい ました。', romaji: 'Omoshiroi hanashi o kiite waraimashita.', english: 'I heard a funny story and laughed.' }
    ]
  },
  {
    id: 'w-n5-561',
    word: '忙しい',
    reading: 'いそがしい',
    romaji: 'isogashii',
    meaning: 'busy',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "忙", "meaning": "Busy"}],
    sentences: [
      { id: 'ws-n5-561-1', sentence: '今週は仕事でとても忙しいです。', furigana: 'こんしゅう は しごと で とても いそがしい です。', romaji: 'Konshuu wa shigoto de totemo isogashii desu.', english: 'I am very busy with work this week.' },
      { id: 'ws-n5-562-2', sentence: '忙しいので後で電話します。', furigana: 'いそがしい ので あと で でんわ します。', romaji: 'Isogashii node ato de denwa shimasu.', english: 'Because I am busy, I will call later.' }
    ]
  },
  {
    id: 'w-n5-562',
    word: 'つまらない',
    reading: 'つまらない',
    romaji: 'tsumaranai',
    meaning: 'boring, dull',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-562-1', sentence: 'この映画は少しつまらないです。', furigana: 'この えいが は すこし つまらない です。', romaji: 'Kono eiga wa sukoshi tsumaranai desu.', english: 'This movie is a little boring.' },
      { id: 'ws-n5-562-2', sentence: 'つまらないことで喧嘩をしないでください。', furigana: 'つまらない こと で けんか を しないで ください。', romaji: 'Tsumaranai koto de kenka o shinai de kudasai.', english: 'Please do not fight over trivial things.' }
    ]
  },
  {
    id: 'w-n5-563',
    word: '優しい',
    reading: 'やさしい',
    romaji: 'yasashii',
    meaning: 'kind, gentle',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "優", "meaning": "Gentle / Superior"}],
    sentences: [
      { id: 'ws-n5-563-1', sentence: '田中先生はとても優しいです。', furigana: 'たなかせんせい は とても やさしい です。', romaji: 'Tanaka sensei wa totemo yasashii desu.', english: 'Teacher Tanaka is very kind.' },
      { id: 'ws-n5-563-2', sentence: '母はいつも優しく話してくれます。', furigana: 'はは は いつも やさしく はなして くれます。', romaji: 'Haha wa itsumo yasashiku hanashite kuremasu.', english: 'My mother always speaks kindly to me.' }
    ]
  },
  {
    id: 'w-n5-564',
    word: '難しい',
    reading: 'むずかしい',
    romaji: 'muzukashii',
    meaning: 'difficult, hard',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "難", "meaning": "Difficult"}],
    sentences: [
      { id: 'ws-n5-564-1', sentence: 'この漢字はとても難しいです。', furigana: 'この かんじ は とても むずかしい です。', romaji: 'Kono kanji wa totemo muzukashii desu.', english: 'This kanji is very difficult.' },
      { id: 'ws-n5-564-2', sentence: '日本語の文法は少し難しいです。', furigana: 'にほんご の ぶんぽう は すこし むずかしい です。', romaji: 'Nihongo no bunpou wa sukoshi muzukashii desu.', english: 'Japanese grammar is a little difficult.' }
    ]
  },
  {
    id: 'w-n5-565',
    word: '易しい',
    reading: 'やさしい',
    romaji: 'yasashii',
    meaning: 'easy, simple',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "易", "meaning": "Easy"}],
    sentences: [
      { id: 'ws-n5-565-1', sentence: 'この問題はとても易しいです。', furigana: 'この もんだい は とても やさしい です。', romaji: 'Kono mondai wa totemo yasashii desu.', english: 'This question is very easy.' },
      { id: 'ws-n5-565-2', sentence: '易しい日本語で書いてください。', furigana: 'やさしい にほんご で かいて ください。', romaji: 'Yasashii nihongo de kaite kudasai.', english: 'Please write in simple Japanese.' }
    ]
  },
  {
    id: 'w-n5-566',
    word: '可愛い',
    reading: 'かわいい',
    romaji: 'kawaii',
    meaning: 'cute, lovely, sweet',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "愛", "meaning": "Love"}],
    sentences: [
      { id: 'ws-n5-566-1', sentence: 'この子猫はとても可愛いです。', furigana: 'この こねこ は とても かわいい です。', romaji: 'Kono koneko wa totemo kawaii desu.', english: 'This kitten is very cute.' },
      { id: 'ws-n5-566-2', sentence: '可愛い服を買いました。', furigana: 'かわいい ふく を かいました。', romaji: 'Kawaii fuku o kaimashita.', english: 'I bought cute clothes.' }
    ]
  },
  {
    id: 'w-n5-567',
    word: '危ない',
    reading: 'あぶない',
    romaji: 'abunai',
    meaning: 'dangerous, risky',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "危", "meaning": "Dangerous"}],
    sentences: [
      { id: 'ws-n5-567-1', sentence: '道の真ん中は危ないですよ。', furigana: 'みち の まんなか は あぶない です よ。', romaji: 'Michi no mannaka wa abunai desu yo.', english: 'The middle of the road is dangerous.' },
      { id: 'ws-n5-567-2', sentence: '危ないですから走らないでください。', furigana: 'あぶない です から はしらないで ください。', romaji: 'Abunai desu kara hashiranaide kudasai.', english: 'It is dangerous, so please do not run.' }
    ]
  },
  {
    id: 'w-n5-568',
    word: '汚い',
    reading: 'きたない',
    romaji: 'kitanai',
    meaning: 'dirty, messy',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "汚", "meaning": "Dirty"}],
    sentences: [
      { id: 'ws-n5-568-1', sentence: '手が汚れたのできれいに洗いました。', furigana: 'て が よごれた ので きれい に あらいました。', romaji: 'Te ga yogoreta node kirei ni araimashita.', english: 'Because my hands were dirty, I washed them cleanly.' },
      { id: 'ws-n5-568-2', sentence: '汚い靴を磨いてきれいにします。', furigana: 'きたない くつ を みがいて きれい に します。', romaji: 'Kitanai kutsu o migaite kirei ni shimasu.', english: 'I polish my dirty shoes to make them clean.' }
    ]
  },
  {
    id: 'w-n5-569',
    word: '欲しい',
    reading: 'ほしい',
    romaji: 'hoshii',
    meaning: 'want, desired',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "欲", "meaning": "Desire"}],
    sentences: [
      { id: 'ws-n5-569-1', sentence: '新しいパソコンが欲しいです。', furigana: 'あたらしい パソコン が ほしい です。', romaji: 'Atarashii pasokon ga hoshii desu.', english: 'I want a new PC.' },
      { id: 'ws-n5-569-2', sentence: '誕生日に何が欲しいですか。', furigana: 'たんじょうび に なに が ほしい です か。', romaji: 'Tanjoubi ni nani ga hoshii desu ka.', english: 'What do you want for your birthday?' }
    ]
  },
  {
    id: 'w-n5-570',
    word: '寂しい',
    reading: 'さびしい',
    romaji: 'sabishii',
    meaning: 'lonely, solitary',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "寂", "meaning": "Lonely"}],
    sentences: [
      { id: 'ws-n5-570-1', sentence: '一人でいると少し寂しいです。', furigana: 'ひとり で いる と すこし さびしい です。', romaji: 'Hitori de iru to sukoshi sabishii desu.', english: 'Being alone feels a little lonely.' },
      { id: 'ws-n5-570-2', sentence: '友達が帰って寂しくなりました。', furigana: 'ともだち が かえって さびしく なりました。', romaji: 'Tomodachi ga kaette sabishiku narimashita.', english: 'I became lonely after my friend went home.' }
    ]
  },
  {
    id: 'w-n5-571',
    word: '嬉しい',
    reading: 'うれしい',
    romaji: 'ureshii',
    meaning: 'happy, glad, joyful',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "嬉", "meaning": "Glad / Joy"}],
    sentences: [
      { id: 'ws-n5-571-1', sentence: 'プレゼントをもらってとても嬉しいです。', furigana: 'プレゼント を もらって とても うれしい です。', romaji: 'Purezento o moratte totemo ureshii desu.', english: 'I am very happy to receive a gift.' },
      { id: 'ws-n5-571-2', sentence: 'テストに合格して嬉しかったです。', furigana: 'テスト に ごうかく して うれしかった です。', romaji: 'Tesuto ni goukaku shite ureshikatta desu.', english: 'I was happy to pass the test.' }
    ]
  },
  {
    id: 'w-n5-572',
    word: '悲しい',
    reading: 'かなしい',
    romaji: 'kanashii',
    meaning: 'sad, sorrowful',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "悲", "meaning": "Sad"}],
    sentences: [
      { id: 'ws-n5-572-1', sentence: '悲しい映画を見て泣きました。', furigana: 'かなしい えいが を みて なきました。', romaji: 'Kanashii eiga o mite nakimashita.', english: 'I watched a sad movie and cried.' },
      { id: 'ws-n5-572-2', sentence: '友達と別れて悲しいです。', furigana: 'ともだち と わかれて かなしい です。', romaji: 'Tomodachi to wakarete kanashii desu.', english: 'I am sad to part with my friend.' }
    ]
  },
  {
    id: 'w-n5-573',
    word: '細い',
    reading: 'ほそい',
    romaji: 'hosoi',
    meaning: 'thin, slender',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "細", "meaning": "Thin / Slender"}],
    sentences: [
      { id: 'ws-n5-573-1', sentence: '細いペンで字を書きます。', furigana: 'ほそい ペン で じ を かきます。', romaji: 'Hosoi pen de ji o kakimasu.', english: 'I write letters with a fine pen.' },
      { id: 'ws-n5-573-2', sentence: 'あの猫は体が細いです。', furigana: 'あの ねこ は からだ が ほそい です。', romaji: 'Ano neko wa karada ga hosoi desu.', english: 'That cat has a slender body.' }
    ]
  },
  {
    id: 'w-n5-574',
    word: '太い',
    reading: 'ふとい',
    romaji: 'futoi',
    meaning: 'thick, fat',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "太", "meaning": "Thick / Great"}],
    sentences: [
      { id: 'ws-n5-574-1', sentence: '太いペンで大きく名前を書きました。', furigana: 'ふとい ペン で おおきく なまえ を かきました。', romaji: 'Futoi pen de ookiku namae o kakimashita.', english: 'I wrote my name big with a thick pen.' },
      { id: 'ws-n5-574-2', sentence: 'この木は幹がとても太いです。', furigana: 'この き は みき が とても ふとい です。', romaji: 'Kono ki wa miki ga totemo futoi desu.', english: 'This tree has a very thick trunk.' }
    ]
  },
  {
    id: 'w-n5-575',
    word: '不味い',
    reading: 'まずい',
    romaji: 'mazui',
    meaning: 'bad-tasting, clumsy',
    pos: 'adjective',
    posLabel: 'i-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "味", "meaning": "Taste"}],
    sentences: [
      { id: 'ws-n5-575-1', sentence: 'このスープは少し不味いです。', furigana: 'この スープ は すこし まずい です。', romaji: 'Kono suupu wa sukoshi mazui desu.', english: 'This soup tastes a bit bad.' },
      { id: 'ws-n5-575-2', sentence: '不味い料理は残してしまいました。', furigana: 'まずい りょうり は のこして しまいました。', romaji: 'Mazui ryouri wa nokoshite shimaimashita.', english: 'I left the bad food uneaten.' }
    ]
  },
  {
    id: 'w-n5-576',
    word: '好き',
    reading: 'すき',
    romaji: 'suki',
    meaning: 'liked, favorite',
    pos: 'adjective',
    posLabel: 'na-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "好", "meaning": "Like"}],
    sentences: [
      { id: 'ws-n5-576-1', sentence: '私は日本のアニメが好きです。', furigana: 'わたし は にほん の アニメ が すき です。', romaji: 'Watashi wa nihon no anime ga suki desu.', english: 'I like Japanese anime.' },
      { id: 'ws-n5-576-2', sentence: 'どんな食べ物が好きですか。', furigana: 'どんな たべもの が すき です か。', romaji: 'Donna tabemono ga suki desu ka.', english: 'What kind of food do you like?' }
    ]
  },
  {
    id: 'w-n5-577',
    word: '嫌い',
    reading: 'きらい',
    romaji: 'kirai',
    meaning: 'disliked, hateful',
    pos: 'adjective',
    posLabel: 'na-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "嫌", "meaning": "Dislike"}],
    sentences: [
      { id: 'ws-n5-577-1', sentence: '私は辛い食べ物が嫌いです。', furigana: 'わたし は からい たべもの が きらい です。', romaji: 'Watashi wa karai tabemono ga kirai desu.', english: 'I dislike spicy food.' },
      { id: 'ws-n5-577-2', sentence: '野菜を嫌いにならないでください。', furigana: 'やさい を きらい に ならないで ください。', romaji: 'Yasai o kirai ni naranaide kudasai.', english: 'Please do not dislike vegetables.' }
    ]
  },
  {
    id: 'w-n5-578',
    word: '上手',
    reading: 'じょうず',
    romaji: 'jouzu',
    meaning: 'skillful, good at',
    pos: 'adjective',
    posLabel: 'na-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "上", "meaning": "Upper"}, {"char": "手", "meaning": "Hand"}],
    sentences: [
      { id: 'ws-n5-578-1', sentence: '田中さんは日本語がとても上手です。', furigana: 'たなかさん は にほんご が とても じょうず です。', romaji: 'Tanaka-san wa nihongo ga totemo jouzu desu.', english: 'Mr. Tanaka is very good at Japanese.' },
      { id: 'ws-n5-578-2', sentence: '姉は歌を上手に歌います。', furigana: 'あね は うた を じょうず に うたい ます。', romaji: 'Ane wa uta o jouzu ni utaimasu.', english: 'My older sister sings skillfully.' }
    ]
  },
  {
    id: 'w-n5-579',
    word: '下手',
    reading: 'へた',
    romaji: 'heta',
    meaning: 'unskillful, poor at',
    pos: 'adjective',
    posLabel: 'na-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "下", "meaning": "Lower"}, {"char": "手", "meaning": "Hand"}],
    sentences: [
      { id: 'ws-n5-579-1', sentence: '私は絵を描くのが下手です。', furigana: 'わたし は え を かく の が へた です。', romaji: 'Watashi wa e o kaku no ga heta desu.', english: 'I am poor at drawing pictures.' },
      { id: 'ws-n5-579-2', sentence: 'まだテニスが下手ですが頑張ります。', furigana: 'まだ テニス が へた です が がんばります。', romaji: 'Mada tenisu ga heta desu ga ganbarimasu.', english: 'I am still poor at tennis, but I will do my best.' }
    ]
  },
  {
    id: 'w-n5-580',
    word: '賑やか',
    reading: 'にぎやか',
    romaji: 'nigiyaka',
    meaning: 'lively, bustling',
    pos: 'adjective',
    posLabel: 'na-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-580-1', sentence: '駅の前はいつも賑やかです。', furigana: 'えき の まえ は いつも にぎやか です。', romaji: 'Eki no mae wa itsumo nigiyaka desu.', english: 'The station front is always bustling.' },
      { id: 'ws-n5-580-2', sentence: '友達と賑やかなレストランに行きました。', furigana: 'ともだち と にぎやか な レストラン に いきました。', romaji: 'Tomodachi to nigiyaka na resutoran ni ikimashita.', english: 'I went to a lively restaurant with friends.' }
    ]
  },
  {
    id: 'w-n5-581',
    word: '綺麗',
    reading: 'きれい',
    romaji: 'kirei',
    meaning: 'pretty, beautiful, clean',
    pos: 'adjective',
    posLabel: 'na-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "麗", "meaning": "Lovely"}],
    sentences: [
      { id: 'ws-n5-581-1', sentence: '富士山はとても綺麗です。', furigana: 'ふじさん は とても きれい です。', romaji: 'Fujisan wa totemo kirei desu.', english: 'Mt. Fuji is very beautiful.' },
      { id: 'ws-n5-581-2', sentence: '部屋を綺麗に掃除しました。', furigana: 'へや を きれい に そうじ しました。', romaji: 'Heya o kirei ni souji shimashita.', english: 'I cleaned the room neatly.' }
    ]
  },
  {
    id: 'w-n5-582',
    word: '便利',
    reading: 'べんり',
    romaji: 'benri',
    meaning: 'convenient, useful',
    pos: 'adjective',
    posLabel: 'na-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "便", "meaning": "Convenience"}, {"char": "利", "meaning": "Advantage"}],
    sentences: [
      { id: 'ws-n5-582-1', sentence: '地下鉄はとても便利です。', furigana: 'ちかてつ は とても べんり です。', romaji: 'Chikatetsu wa totemo benri desu.', english: 'The subway is very convenient.' },
      { id: 'ws-n5-582-2', sentence: 'スマートフォンは本当に便利ですね。', furigana: 'スマートフォン は ほんとう に べんり です ね。', romaji: 'Sumaatofon wa hontou ni benri desu ne.', english: 'Smartphones are really convenient, aren\'t they?' }
    ]
  },
  {
    id: 'w-n5-583',
    word: '不便',
    reading: 'ふべん',
    romaji: 'fuben',
    meaning: 'inconvenient',
    pos: 'adjective',
    posLabel: 'na-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "不", "meaning": "Non"}, {"char": "便", "meaning": "Convenience"}],
    sentences: [
      { id: 'ws-n5-583-1', sentence: '駅が遠いので少し不便です。', furigana: 'えき が とおい ので すこし ふべん です。', romaji: 'Eki ga tooi node sukoshi fuben desu.', english: 'Because the station is far, it is a bit inconvenient.' },
      { id: 'ws-n5-583-2', sentence: 'バスが少ない町は不便です。', furigana: 'バス が すくない まち は ふべん です。', romaji: 'Basu ga sukunai machi wa fuben desu.', english: 'A town with few buses is inconvenient.' }
    ]
  },
  {
    id: 'w-n5-584',
    word: '親切',
    reading: 'しんせつ',
    romaji: 'shinsetsu',
    meaning: 'kind, helpful',
    pos: 'adjective',
    posLabel: 'na-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "親", "meaning": "Parent / Intimate"}, {"char": "切", "meaning": "Cut / Earnest"}],
    sentences: [
      { id: 'ws-n5-584-1', sentence: '田中さんはとても親切な人です。', furigana: 'たなかさん は とても しんせつ な ひと です。', romaji: 'Tanaka-san wa totemo shinsetsu na hito desu.', english: 'Mr. Tanaka is a very kind person.' },
      { id: 'ws-n5-584-2', sentence: '親切に道を教えてくれました。', furigana: 'しんせつ に みち を おしえて くれました。', romaji: 'Shinsetsu ni michi o oshiete kuremashita.', english: 'Someone kindly told me the way.' }
    ]
  },
  {
    id: 'w-n5-585',
    word: '暇',
    reading: 'ひま',
    romaji: 'hima',
    meaning: 'free time, leisure',
    pos: 'adjective',
    posLabel: 'na-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "暇", "meaning": "Leisure"}],
    sentences: [
      { id: 'ws-n5-585-1', sentence: '日曜日は暇ですから映画を見ます。', furigana: 'にちようび は ひま です から えいが を みます。', romaji: 'Nichiyoubi wa hima desu kara eiga o mimasu.', english: 'Because I have free time on Sunday, I watch movies.' },
      { id: 'ws-n5-585-2', sentence: '明日の午後、お暇ですか。', furigana: 'あした の ごご、おひま です か。', romaji: 'Ashita no gogo, ohima desu ka.', english: 'Are you free tomorrow afternoon?' }
    ]
  },
  {
    id: 'w-n5-586',
    word: '大変',
    reading: 'たいへん',
    romaji: 'taihen',
    meaning: 'tough, hard, serious',
    pos: 'adjective',
    posLabel: 'na-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "大", "meaning": "Big"}, {"char": "変", "meaning": "Change"}],
    sentences: [
      { id: 'ws-n5-586-1', sentence: '毎日の仕事は大変ですが楽しいです。', furigana: 'まいにち の しごと は たいへん です が たのしい です。', romaji: 'Mainichi no shigoto wa taihen desu ga tanoshii desu.', english: 'Daily work is tough, but enjoyable.' },
      { id: 'ws-n5-586-2', sentence: '宿題がたくさんあって大変です。', furigana: 'しゅくだい が たくさん あって たいへん です。', romaji: 'Shukudai ga takusan atte taihen desu.', english: 'It\'s tough having so much homework.' }
    ]
  },
  {
    id: 'w-n5-587',
    word: '簡単',
    reading: 'かんたん',
    romaji: 'kantan',
    meaning: 'simple, easy',
    pos: 'adjective',
    posLabel: 'na-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "簡", "meaning": "Simplicity"}, {"char": "単", "meaning": "Single"}],
    sentences: [
      { id: 'ws-n5-587-1', sentence: 'この問題はとても簡単です。', furigana: 'この もんだい は とても かんたん です。', romaji: 'Kono mondai wa totemo kantan desu.', english: 'This problem is very simple.' },
      { id: 'ws-n5-587-2', sentence: '簡単な料理を作りました。', furigana: 'かんたん な りょうり を つくりました。', romaji: 'Kantan na ryouri o tsukurimashita.', english: 'I made a simple dish.' }
    ]
  },
  {
    id: 'w-n5-588',
    word: '大切',
    reading: 'たいせつ',
    romaji: 'taisetsu',
    meaning: 'important, precious',
    pos: 'adjective',
    posLabel: 'na-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "大", "meaning": "Big"}, {"char": "切", "meaning": "Cut / Earnest"}],
    sentences: [
      { id: 'ws-n5-588-1', sentence: '時間を大切にしてください。', furigana: 'じかん を たいせつ に して ください。', romaji: 'Jikan o taisetsu ni shite kudasai.', english: 'Please value your time.' },
      { id: 'ws-n5-588-2', sentence: '家族は私にとって一番大切です。', furigana: 'かぞく は わたし に とって いちばん たいせつ です。', romaji: 'Kazoku wa watashi ni totte ichiban taisetsu desu.', english: 'Family is most important to me.' }
    ]
  },
  {
    id: 'w-n5-589',
    word: '色々',
    reading: 'いろいろ',
    romaji: 'iroiro',
    meaning: 'various, all sorts',
    pos: 'adjective',
    posLabel: 'na-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "色", "meaning": "Color"}],
    sentences: [
      { id: 'ws-n5-589-1', sentence: 'デパートで色々な物を買いました。', furigana: 'デパート で いろいろ な もの を かいました。', romaji: 'Depaato de iroiro na mono o kaimashita.', english: 'I bought various things at the department store.' },
      { id: 'ws-n5-589-2', sentence: '日本で色々な場所へ行きました。', furigana: 'にほん で いろいろ な ばしょ へ いきました。', romaji: 'Nihon de iroiro na basho e ikimashita.', english: 'I went to various places in Japan.' }
    ]
  },
  {
    id: 'w-n5-590',
    word: '立派',
    reading: 'りっぱ',
    romaji: 'rippa',
    meaning: 'splendid, respectable, fine',
    pos: 'adjective',
    posLabel: 'na-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "立", "meaning": "Stand"}, {"char": "派", "meaning": "School / Faction"}],
    sentences: [
      { id: 'ws-n5-590-1', sentence: '駅前に立派なホテルが建ちました。', furigana: 'えきまえ に りっぱ な ホテル が たちました。', romaji: 'Ekimae ni rippa na hoteru ga tachimashita.', english: 'A splendid hotel was built in front of the station.' },
      { id: 'ws-n5-590-2', sentence: '田中さんは立派な先生になりました。', furigana: 'たなかさん は りっぱ な せんせい に なりました。', romaji: 'Tanaka-san wa rippa na sensei ni narimashita.', english: 'Mr. Tanaka became a fine teacher.' }
    ]
  },
  {
    id: 'w-n5-591',
    word: '安全',
    reading: 'あんぜん',
    romaji: 'anzen',
    meaning: 'safe, secure',
    pos: 'adjective',
    posLabel: 'na-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "安", "meaning": "Cheap / Peaceful"}, {"char": "全", "meaning": "Whole / Complete"}],
    sentences: [
      { id: 'ws-n5-591-1', sentence: '日本はとても安全な国です。', furigana: 'にほん は とても あんぜん な くに です。', romaji: 'Nihon wa totemo anzen na kuni desu.', english: 'Japan is a very safe country.' },
      { id: 'ws-n5-591-2', sentence: 'シートベルトを締めて安全に運転します。', furigana: 'シートベルト を しめて あんぜん に うんてん します。', romaji: 'Shiitoberuto o shimete anzen ni unten shimasu.', english: 'Fasten your seatbelt and drive safely.' }
    ]
  },
  {
    id: 'w-n5-592',
    word: '危険',
    reading: 'きけん',
    romaji: 'kiken',
    meaning: 'dangerous, peril',
    pos: 'adjective',
    posLabel: 'na-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "危", "meaning": "Danger"}, {"char": "険", "meaning": "Steep / Incline"}],
    sentences: [
      { id: 'ws-n5-592-1', sentence: '夜の一人歩きは危険です。', furigana: 'よる の ひとりあるき は きけん です。', romaji: 'Yoru no hitoriaruki wa kiken desu.', english: 'Walking alone at night is dangerous.' },
      { id: 'ws-n5-592-2', sentence: '危険ですから入らないでください。', furigana: 'きけん です から はいらないで ください。', romaji: 'Kiken desu kara hairanaide kudasai.', english: 'Because it is dangerous, please do not enter.' }
    ]
  },
  {
    id: 'w-n5-593',
    word: '必要',
    reading: 'ひつよう',
    romaji: 'hitsuyou',
    meaning: 'necessary, essential',
    pos: 'adjective',
    posLabel: 'na-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "必", "meaning": "Certain"}, {"char": "要", "meaning": "Need / Pivot"}],
    sentences: [
      { id: 'ws-n5-593-1', sentence: 'パスポートの申請に写真が必要です。', furigana: 'パスポート の しんせい に しゃしん が ひつよう です。', romaji: 'Pasupooto no shinsei ni shashin ga hitsuyou desu.', english: 'A photograph is necessary for the passport application.' },
      { id: 'ws-n5-593-2', sentence: '毎日水を飲むことが必要です。', furigana: 'まいにち みず を のむ こと が ひつよう です。', romaji: 'Mainichi mizu o nomu koto ga hitsuyou desu.', english: 'Drinking water every day is necessary.' }
    ]
  },
  {
    id: 'w-n5-594',
    word: '嫌',
    reading: 'いや',
    romaji: 'iya',
    meaning: 'unpleasant, reluctant, disagreeable',
    pos: 'adjective',
    posLabel: 'na-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "嫌", "meaning": "Dislike"}],
    sentences: [
      { id: 'ws-n5-594-1', sentence: '雨の日に出かけるのは嫌です。', furigana: 'あめ の ひ に でかける の は いや です。', romaji: 'Ame no hi ni dekakeru no wa iya desu.', english: 'Going out on rainy days is disagreeable.' },
      { id: 'ws-n5-594-2', sentence: '嫌なことは早く忘れましょう。', furigana: 'いや な こと は はやく わすれましょう。', romaji: 'Iya na koto wa hayaku wasuremashou.', english: 'Let\'s quickly forget unpleasant things.' }
    ]
  },
  {
    id: 'w-n5-595',
    word: '少し',
    reading: 'すこし',
    romaji: 'sukoshi',
    meaning: 'a little, small amount',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "少", "meaning": "Few / Little"}],
    sentences: [
      { id: 'ws-n5-595-1', sentence: '日本語が少し分かります。', furigana: 'にほんご が すこし わかります。', romaji: 'Nihongo ga sukoshi wakarimasu.', english: 'I understand Japanese a little.' },
      { id: 'ws-n5-595-2', sentence: '少しここで休みましょう。', furigana: 'すこし ここ で やすみましょう。', romaji: 'Sukoshi koko de yasumimashou.', english: 'Let\'s rest here a little.' }
    ]
  },
  {
    id: 'w-n5-596',
    word: 'ちょっと',
    reading: 'ちょっと',
    romaji: 'chotto',
    meaning: 'a bit, just a moment',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-596-1', sentence: 'ちょっと待ってください。', furigana: 'ちょっと まって ください。', romaji: 'Chotto matte kudasai.', english: 'Please wait a moment.' },
      { id: 'ws-n5-596-2', sentence: '今日はちょっと寒いです。', furigana: 'きょう は ちょっと さむい です。', romaji: 'Kyou wa chotto samui desu.', english: 'Today is a little cold.' }
    ]
  },
  {
    id: 'w-n5-597',
    word: 'もっと',
    reading: 'もっと',
    romaji: 'motto',
    meaning: 'more, even more',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-597-1', sentence: 'もっとゆっくり話してください。', furigana: 'もっと ゆっくり はなして ください。', romaji: 'Motto yukkuri hanashite kudasai.', english: 'Please speak more slowly.' },
      { id: 'ws-n5-597-2', sentence: 'もっと日本語を勉強したいです。', furigana: 'もっと にほんご を べんきょう したい です。', romaji: 'Motto nihongo o benkyou shitai desu.', english: 'I want to study Japanese more.' }
    ]
  },
  {
    id: 'w-n5-598',
    word: 'ずっと',
    reading: 'ずっと',
    romaji: 'zutto',
    meaning: 'all along, by far',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-598-1', sentence: '今日はずっと家で本を読んでいました。', furigana: 'きょう は ずっと いえ で ほん を よんで いました。', romaji: 'Kyou wa zutto ie de hon o yonde imashita.', english: 'I read books at home all day today.' },
      { id: 'ws-n5-598-2', sentence: '新幹線はバスよりずっと速いです。', furigana: 'しんかんせん は バス より ずっと はやい です。', romaji: 'Shinkansen wa basu yori zutto hayai desu.', english: 'The bullet train is much faster than the bus.' }
    ]
  },
  {
    id: 'w-n5-599',
    word: '一番',
    reading: 'いちばん',
    romaji: 'ichiban',
    meaning: 'most, number one, best',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "一", "meaning": "One"}, {"char": "番", "meaning": "Number"}],
    sentences: [
      { id: 'ws-n5-599-1', sentence: '果物の中でリンゴが一番好きです。', furigana: 'くだもの の なか で リンゴ が いちばん すき です。', romaji: 'Kudamono no naka de ringo ga ichiban suki desu.', english: 'Among fruits, I like apples the best.' },
      { id: 'ws-n5-599-2', sentence: '一番前の席に座りました。', furigana: 'いちばん まえ の せき に すわりました。', romaji: 'Ichiban mae no seki ni suwarimashita.', english: 'I sat in the very front seat.' }
    ]
  },
  {
    id: 'w-n5-600',
    word: 'たくさん',
    reading: 'たくさん',
    romaji: 'takusan',
    meaning: 'a lot, many, plenty',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-600-1', sentence: '公園にたくさんの人がいます。', furigana: 'こうえん に たくさん の ひと が います。', romaji: 'Kouen ni takusan no hito ga imasu.', english: 'There are many people in the park.' },
      { id: 'ws-n5-600-2', sentence: 'ご飯をたくさん食べました。', furigana: 'ごはん を たくさん たべました。', romaji: 'Gohan o takusan tabemashita.', english: 'I ate a lot of food.' }
    ]
  },
  {
    id: 'w-n5-601',
    word: '全然',
    reading: 'ぜんぜん',
    romaji: 'zenzen',
    meaning: 'not at all (with neg.)',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "全", "meaning": "All"}, {"char": "然", "meaning": "So"}],
    sentences: [
      { id: 'ws-n5-601-1', sentence: '質問の意味が全然わかりません。', furigana: 'しつもん の いみ が ぜんぜん わかりません。', romaji: 'Shitsumon no imi ga zenzen wakarimasen.', english: 'I do not understand the meaning of the question at all.' },
      { id: 'ws-n5-601-2', sentence: '今日は全然寒くないです。', furigana: 'きょう は ぜんぜん さむくない です。', romaji: 'Kyou wa zenzen samukunai desu.', english: 'It is not cold at all today.' }
    ]
  },
  {
    id: 'w-n5-602',
    word: 'あまり',
    reading: 'あまり',
    romaji: 'amari',
    meaning: 'not very much (with neg.)',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-602-1', sentence: 'この本はあまり面白くないです。', furigana: 'この ほん は あまり おもしろくない です。', romaji: 'Kono hon wa amari omoshirokunai desu.', english: 'This book is not very interesting.' },
      { id: 'ws-n5-602-2', sentence: '私は肉をあまり食べません。', furigana: 'わたし は にく を あまり たべません。', romaji: 'Watashi wa niku o amari tabemasen.', english: 'I do not eat meat very much.' }
    ]
  },
  {
    id: 'w-n5-603',
    word: 'よく',
    reading: 'よく',
    romaji: 'yoku',
    meaning: 'often, well, skillfully',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-603-1', sentence: 'よく図書館へ行って勉強します。', furigana: 'よく としょかん へ いって べんきょう します。', romaji: 'Yoku toshokan e itte benkyou shimasu.', english: 'I often go to the library and study.' },
      { id: 'ws-n5-603-2', sentence: '日本語をよく勉強しましたね。', furigana: 'にほんご を よく べんきょう しました ね。', romaji: 'Nihongo o yoku benkyou shimashita ne.', english: 'You studied Japanese well, didn\'t you?' }
    ]
  },
  {
    id: 'w-n5-604',
    word: '時々',
    reading: 'ときどき',
    romaji: 'tokidoki',
    meaning: 'sometimes, occasionally',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "時", "meaning": "Time"}],
    sentences: [
      { id: 'ws-n5-604-1', sentence: '時々映画館で映画を見ます。', furigana: 'ときどき えいがかん で えいが を みます。', romaji: 'Tokidoki eigakan de eiga o mimasu.', english: 'I sometimes watch movies at the movie theater.' },
      { id: 'ws-n5-604-2', sentence: '週末は時々公園を散歩します。', furigana: 'しゅうまつ は ときどき こうえん を さんぽ します。', romaji: 'Shuumatsu wa tokidoki kouen o sanpo shimasu.', english: 'On weekends I sometimes take a walk in the park.' }
    ]
  },
  {
    id: 'w-n5-605',
    word: 'たまに',
    reading: 'たまに',
    romaji: 'tamani',
    meaning: 'occasionally, once in a while',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-605-1', sentence: 'たまにレストランでご飯を食べます。', furigana: 'たまに レストラン で ごはん を たべます。', romaji: 'Tamani resutoran de gohan o tabemasu.', english: 'I occasionally eat at a restaurant.' },
      { id: 'ws-n5-605-2', sentence: 'たまに友達に手紙を書きます。', furigana: 'たまに ともだち に てがみ を かきます。', romaji: 'Tamani tomodachi ni tegami o kakimasu.', english: 'I occasionally write letters to my friend.' }
    ]
  },
  {
    id: 'w-n5-606',
    word: 'もう',
    reading: 'もう',
    romaji: 'mou',
    meaning: 'already, yet, anymore',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-606-1', sentence: 'もう今日の宿題をしました。', furigana: 'もう きょう の しゅくだい を しました。', romaji: 'Kyou no shukudai o mou shimashita.', english: 'I have already done today\'s homework.' },
      { id: 'ws-n5-606-2', sentence: 'もう夜の十二時ですね。', furigana: 'もう よる の じゅうにじ です ね。', romaji: 'Mou yoru no juuniji desu ne.', english: 'It is already 12 midnight, isn\'t it?' }
    ]
  },
  {
    id: 'w-n5-607',
    word: 'まだ',
    reading: 'まだ',
    romaji: 'mada',
    meaning: 'still, not yet',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-607-1', sentence: 'まだ朝ご飯を食べていません。', furigana: 'まだ あさごはん を たべて いません。', romaji: 'Mada asagohan o tabete imasen.', english: 'I have not eaten breakfast yet.' },
      { id: 'ws-n5-607-2', sentence: '兄はまだ部屋で寝ています。', furigana: 'あに は まだ へや で ねて います。', romaji: 'Ani wa mada heya de nete imasu.', english: 'My older brother is still sleeping in his room.' }
    ]
  },
  {
    id: 'w-n5-608',
    word: 'ちょうど',
    reading: 'ちょうど',
    romaji: 'choudo',
    meaning: 'just, exactly',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-608-1', sentence: 'ちょうど三時にお茶を飲みます。', furigana: 'ちょうど さんじ に おちゃ を のみます。', romaji: 'Choudo sanji ni ocha o nomimasu.', english: 'I drink tea at exactly three o\'clock.' },
      { id: 'ws-n5-608-2', sentence: 'この靴はちょうどいい大きさです。', furigana: 'この くつ は ちょうど いい おおきさ です。', romaji: 'Kono kutsu wa choudo ii ookisa desu.', english: 'These shoes are just the right size.' }
    ]
  },
  {
    id: 'w-n5-609',
    word: 'すぐ',
    reading: 'すぐ',
    romaji: 'sugu',
    meaning: 'immediately, right away',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-609-1', sentence: '用事があるので、すぐ来てください。', furigana: 'ようじ が ある ので、すぐ きて ください。', romaji: 'Youji ga aru node, sugu kite kudasai.', english: 'Since there is an errand, please come immediately.' },
      { id: 'ws-n5-609-2', sentence: '宿題をすぐ終わらせます。', furigana: 'しゅくだい を すぐ おわらせます。', romaji: 'Shukudai o sugu owarasemasu.', english: 'I will finish my homework right away.' }
    ]
  },
  {
    id: 'w-n5-610',
    word: 'ゆっくり',
    reading: 'ゆっくり',
    romaji: 'yukkuri',
    meaning: 'slowly, leisurely, unhurriedly',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-610-1', sentence: 'もう少しゆっくり話してください。', furigana: 'もう すこし ゆっくり はなして ください。', romaji: 'Mou sukoshi yukkuri hanashite kudasai.', english: 'Please speak a little more slowly.' },
      { id: 'ws-n5-610-2', sentence: '休日は家でゆっくり休みます。', furigana: 'きゅうじつ は いえ で ゆっくり やすみます。', romaji: 'Kyuujitsu wa ie de yukkuri yasumimasu.', english: 'On holidays I rest leisurely at home.' }
    ]
  },
  {
    id: 'w-n5-611',
    word: 'だんだん',
    reading: 'だんだん',
    romaji: 'dandan',
    meaning: 'gradually, step by step',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-611-1', sentence: '春になってだんだん暖かくなりました。', furigana: 'はる に なって だんだん あたたかく なりました。', romaji: 'Haru ni natte dandan atatakaku narimashita.', english: 'Spring has come and it gradually became warm.' },
      { id: 'ws-n5-611-2', sentence: '日本語がだんだん上手になりました。', furigana: 'にほんご が だんだん じょうず に なりました。', romaji: 'Nihongo ga dandan jouzu ni narimashita.', english: 'My Japanese gradually got better.' }
    ]
  },
  {
    id: 'w-n5-612',
    word: '初めて',
    reading: 'はじめて',
    romaji: 'hajimete',
    meaning: 'for the first time',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "初", "meaning": "First"}],
    sentences: [
      { id: 'ws-n5-612-1', sentence: '去年、初めて日本へ行きました。', furigana: 'きょねん、はじめて にほん へ いきました。', romaji: 'Kyonen, hajimete Nihon e ikimashita.', english: 'Last year, I went to Japan for the first time.' },
      { id: 'ws-n5-612-2', sentence: '美味しい寿司を初めて食べました。', furigana: 'おいしい すし を はじめて たべました。', romaji: 'Oishii sushi o hajimete tabemashita.', english: 'I ate delicious sushi for the first time.' }
    ]
  },
  {
    id: 'w-n5-613',
    word: 'もうすぐ',
    reading: 'もうすぐ',
    romaji: 'mousugu',
    meaning: 'very soon, before long',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-613-1', sentence: 'もうすぐ春休みが始まります。', furigana: 'もうすぐ はるやすみ が はじまります。', romaji: 'Mousugu haruyasumi ga hajimarimasu.', english: 'Spring vacation will start soon.' },
      { id: 'ws-n5-613-2', sentence: '電車がもうすぐ駅に来ます。', furigana: 'でんしゃ が もうすぐ えき に きます。', romaji: 'Densha ga mousugu eki ni kimasu.', english: 'The train will come to the station soon.' }
    ]
  },
  {
    id: 'w-n5-614',
    word: '一緒に',
    reading: 'いっしょに',
    romaji: 'isshoni',
    meaning: 'together (with)',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "一", "meaning": "One"}, {"char": "緒", "meaning": "Together"}],
    sentences: [
      { id: 'ws-n5-614-1', sentence: '一緒に食堂で昼ご飯を食べましょう。', furigana: 'いっしょ に しょくどう で ひるごはん を たべましょう。', romaji: 'Issho ni shokudou de hirugohan o tabemashou.', english: 'Let\'s eat lunch together in the cafeteria.' },
      { id: 'ws-n5-614-2', sentence: '友達と一緒に日本語を勉強します。', furigana: 'ともだち と いっしょ に にほんご を べんきょう します。', romaji: 'Tomodachi to issho ni Nihongo o benkyou shimasu.', english: 'I study Japanese together with my friend.' }
    ]
  },
  {
    id: 'w-n5-615',
    word: '一人で',
    reading: 'ひとりで',
    romaji: 'hitoride',
    meaning: 'alone, by oneself',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "一", "meaning": "One"}, {"char": "人", "meaning": "Person"}],
    sentences: [
      { id: 'ws-n5-615-1', sentence: '一人で映画を見に行きました。', furigana: 'ひとり で えいが を み に いきました。', romaji: 'Hitori de eiga o mi ni ikimashita.', english: 'I went to see a movie by myself.' },
      { id: 'ws-n5-615-2', sentence: '一人で美味しい晩ご飯を作ります。', furigana: 'ひとり で おいしい ばんごはん を つくります。', romaji: 'Hitori de oishii bangohan o tsukurimasu.', english: 'I make a delicious dinner by myself.' }
    ]
  },
  {
    id: 'w-n5-616',
    word: '皆で',
    reading: 'みんなで',
    romaji: 'minnade',
    meaning: 'all together, everyone',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "皆", "meaning": "All"}],
    sentences: [
      { id: 'ws-n5-616-1', sentence: '皆で記念写真を撮りましょう。', furigana: 'みんな で きねんしゃしん を とりましょう。', romaji: 'Minna de kinenshashin o torimashou.', english: 'Let\'s take a commemorative photo all together.' },
      { id: 'ws-n5-616-2', sentence: 'クラスの皆で歌を歌いました。', furigana: 'クラス の みんな で うた を うたいました。', romaji: 'Kurasu no minna de uta o utaimashita.', english: 'We sang songs together with everyone in class.' }
    ]
  },
  {
    id: 'w-n5-617',
    word: 'たぶん',
    reading: 'たぶん',
    romaji: 'tabun',
    meaning: 'probably, perhaps',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-617-1', sentence: '明日はたぶん雨が降るでしょう。', furigana: 'あした は たぶん あめ が ふる でしょう。', romaji: 'Ashita wa tabun ame ga furu deshou.', english: 'It will probably rain tomorrow.' },
      { id: 'ws-n5-617-2', sentence: '田中さんはたぶんパーティーに来ます。', furigana: 'たなかさん は たぶん パーティー に きます。', romaji: 'Tanaka-san wa tabun paatii ni kimasu.', english: 'Tanaka-san will probably come to the party.' }
    ]
  },
  {
    id: 'w-n5-618',
    word: 'きっと',
    reading: 'きっと',
    romaji: 'kitto',
    meaning: 'surely, definitely',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-618-1', sentence: '明日はきっといい天気になります。', furigana: 'あした は きっと いい てんき に なります。', romaji: 'Ashita wa kitto ii tenki ni narimasu.', english: 'Tomorrow will surely become good weather.' },
      { id: 'ws-n5-618-2', sentence: '明日のテストはきっと大丈夫です。', furigana: 'あした の てすと は きっと だいじょうぶ です。', romaji: 'Ashita no tesuto wa kitto daijoubu desu.', english: 'Tomorrow\'s test will surely be fine.' }
    ]
  },
  {
    id: 'w-n5-619',
    word: '本当に',
    reading: 'ほんとうに',
    romaji: 'hontouni',
    meaning: 'really, truly',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "本", "meaning": "True"}, {"char": "当", "meaning": "Hit"}],
    sentences: [
      { id: 'ws-n5-619-1', sentence: 'この日本料理は本当に美味しいです。', furigana: 'この にほんりょうり は ほんとう に おいしい です。', romaji: 'Kono Nihonryouri wa hontou ni oishii desu.', english: 'This Japanese food is really delicious.' },
      { id: 'ws-n5-619-2', sentence: '手伝ってくれて本当にありがとうございました。', furigana: 'てつだって くれて ほんとう に ありがとう ございました。', romaji: 'Tetsudatte kurete hontou ni arigatou gozaimashita.', english: 'Thank you very much indeed for helping me.' }
    ]
  },
  {
    id: 'w-n5-620',
    word: '特に',
    reading: 'とくに',
    romaji: 'tokuni',
    meaning: 'especially, particularly',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "特", "meaning": "Special"}],
    sentences: [
      { id: 'ws-n5-620-1', sentence: '特に質問や問題はありません。', furigana: 'とくに しつもん や もんだい は ありません。', romaji: 'Toku ni shitsumon ya mondai wa arimasen.', english: 'I have no questions or problems in particular.' },
      { id: 'ws-n5-620-2', sentence: '日本の果物では特にりんごが好きです。', furigana: 'にほん の くだもの では とくに りんご が すき です。', romaji: 'Nihon no kudamono dewa toku ni ringo ga suki desu.', english: 'Among Japanese fruits, I especially like apples.' }
    ]
  },
  {
    id: 'w-n5-621',
    word: '別に',
    reading: 'べつに',
    romaji: 'betsuni',
    meaning: 'not particularly (with neg.)',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "別", "meaning": "Separate"}],
    sentences: [
      { id: 'ws-n5-621-1', sentence: '別に体調に問題はありません。', furigana: 'べつに たいちょう に もんだい は ありません。', romaji: 'Betsu ni taichou ni mondai wa arimasen.', english: 'There is no particular problem with my health.' },
      { id: 'ws-n5-621-2', sentence: '今日は別に用事はありません。', furigana: 'きょう は べつに ようじ は ありません。', romaji: 'Kyou wa betsu ni youji wa arimasen.', english: 'I don\'t have any particular errands today.' }
    ]
  },
  {
    id: 'w-n5-622',
    word: '大体',
    reading: 'だいたい',
    romaji: 'daitai',
    meaning: 'mostly, roughly, approximately',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "大", "meaning": "Big"}, {"char": "体", "meaning": "Body"}],
    sentences: [
      { id: 'ws-n5-622-1', sentence: '先生の説明が大体わかりました。', furigana: 'せんせい の せつめい が だいたい わかりました。', romaji: 'Sensei no setsumei ga daitai wakarimashita.', english: 'I mostly understood the teacher\'s explanation.' },
      { id: 'ws-n5-622-2', sentence: '今日の宿題は大体終わりました。', furigana: 'きょう の しゅくだい は だいたい おわりました。', romaji: 'Kyou no shukudai wa daitai owarimashita.', english: 'Today\'s homework is mostly finished.' }
    ]
  },
  {
    id: 'w-n5-623',
    word: 'まっすぐ',
    reading: 'まっすぐ',
    romaji: 'massugu',
    meaning: 'straight ahead, direct',
    pos: 'adverb',
    posLabel: 'Adverb',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-623-1', sentence: 'この道をまっすぐ行ってください。', furigana: 'この みち を まっすぐ いって ください。', romaji: 'Kono michi o massugu itte kudasai.', english: 'Please go straight down this street.' },
      { id: 'ws-n5-623-2', sentence: 'まっすぐ歩くと右側に駅があります。', furigana: 'まっすぐ あるく と みぎがわ に えき が あります。', romaji: 'Massugu aruku to migigawa ni eki ga arimasu.', english: 'If you walk straight, there is a station on the right side.' }
    ]
  },
  {
    id: 'w-n5-624',
    word: '一つ',
    reading: 'ひとつ',
    romaji: 'hitotsu',
    meaning: 'one (generic thing counter)',
    pos: 'noun',
    posLabel: 'Counter',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "一", "meaning": "One"}],
    sentences: [
      { id: 'ws-n5-624-1', sentence: '美味しいりんごを一つください。', furigana: 'おいしい りんご を ひとつ ください。', romaji: 'Oishii ringo o hitotsu kudasai.', english: 'Please give me one delicious apple.' },
      { id: 'ws-n5-624-2', sentence: '先生に質問が一つあります。', furigana: 'せんせい に しつもん が ひとつ あります。', romaji: 'Sensei ni shitsumon ga hitotsu arimasu.', english: 'I have one question for the teacher.' }
    ]
  },
  {
    id: 'w-n5-625',
    word: '二つ',
    reading: 'ふたつ',
    romaji: 'futatsu',
    meaning: 'two (things)',
    pos: 'noun',
    posLabel: 'Counter',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "二", "meaning": "Two"}],
    sentences: [
      { id: 'ws-n5-625-1', sentence: 'パン屋でパンを二つ買いました。', furigana: 'パンや で パン を ふたつ かいました。', romaji: 'Pan\'ya de pan o futatsu kaimashita.', english: 'I bought two pieces of bread at the bakery.' },
      { id: 'ws-n5-625-2', sentence: '部屋に新しい椅子を二つ並べます。', furigana: 'へや に あたらしい いす を ふたつ ならべます。', romaji: 'Heya ni atarashii isu o futatsu narabemasu.', english: 'I arrange two new chairs in the room.' }
    ]
  },
  {
    id: 'w-n5-626',
    word: '三つ',
    reading: 'みっつ',
    romaji: 'mittsu',
    meaning: 'three (things)',
    pos: 'noun',
    posLabel: 'Counter',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "三", "meaning": "Three"}],
    sentences: [
      { id: 'ws-n5-626-1', sentence: '甘いみかんを三つ食べました。', furigana: 'あまい みかん を みっつ たべました。', romaji: 'Amai mikan o mittsu tabemashita.', english: 'I ate three sweet mandarins.' },
      { id: 'ws-n5-626-2', sentence: '冷蔵庫の中に卵が三つあります。', furigana: 'れいぞうこ の なか に たまご が みっつ あります。', romaji: 'Reizouko no naka ni tamago ga mittsu arimasu.', english: 'There are three eggs in the refrigerator.' }
    ]
  },
  {
    id: 'w-n5-627',
    word: '四つ',
    reading: 'よっつ',
    romaji: 'yottsu',
    meaning: 'four (things)',
    pos: 'noun',
    posLabel: 'Counter',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "四", "meaning": "Four"}],
    sentences: [
      { id: 'ws-n5-627-1', sentence: '部屋に机が四つあります。', furigana: 'へや に つくえ が よっつ あります。', romaji: 'Heya ni tsukue ga yottsu arimasu.', english: 'There are four desks in the room.' },
      { id: 'ws-n5-627-2', sentence: '家族のためにケーキを四つ買いました。', furigana: 'かぞく の ため に ケーキ を よっつ かいました。', romaji: 'Kazoku no tame ni keeki o yottsu kaimashita.', english: 'I bought four cakes for my family.' }
    ]
  },
  {
    id: 'w-n5-628',
    word: '五つ',
    reading: 'いつつ',
    romaji: 'itsutsu',
    meaning: 'five (things)',
    pos: 'noun',
    posLabel: 'Counter',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "五", "meaning": "Five"}],
    sentences: [
      { id: 'ws-n5-628-1', sentence: 'この教室には窓が五つあります。', furigana: 'この きょうしつ に は まど が いつつ あります。', romaji: 'Kono kyoushitsu ni wa mado ga itsutsu arimasu.', english: 'There are five windows in this classroom.' },
      { id: 'ws-n5-628-2', sentence: '友達から甘い飴を五つもらいました。', furigana: 'ともだち から あまい あめ を いつつ もらいました。', romaji: 'Tomodachi kara amai ame o itsutsu moraimashita.', english: 'I received five sweet candies from my friend.' }
    ]
  },
  {
    id: 'w-n5-629',
    word: '六つ',
    reading: 'むっつ',
    romaji: 'muttsu',
    meaning: 'six (things)',
    pos: 'noun',
    posLabel: 'Counter',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "六", "meaning": "Six"}],
    sentences: [
      { id: 'ws-n5-629-1', sentence: 'テーブルの上にコップが六つあります。', furigana: 'テーブル の うえ に コップ が むっつ あります。', romaji: 'Teeburu no ue ni koppu ga muttsu arimasu.', english: 'There are six cups on the table.' },
      { id: 'ws-n5-629-2', sentence: '重い荷物の箱を六つ運びました。', furigana: 'おもい にもつ の はこ を むっつ はこびました。', romaji: 'Omoi nimotsu no hako o muttsu hakobimashita.', english: 'I carried six boxes of heavy luggage.' }
    ]
  },
  {
    id: 'w-n5-630',
    word: '七つ',
    reading: 'ななつ',
    romaji: 'nanatsu',
    meaning: 'seven (things)',
    pos: 'noun',
    posLabel: 'Counter',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "七", "meaning": "Seven"}],
    sentences: [
      { id: 'ws-n5-630-1', sentence: 'テーブルにお皿が七つ並んでいます。', furigana: 'テーブル に おさら が ななつ ならんで います。', romaji: 'Teeburu ni osara ga nanatsu narande imasu.', english: 'Seven plates are lined up on the table.' },
      { id: 'ws-n5-630-2', sentence: '子供のおもちゃが七つあります。', furigana: 'こども の おもちゃ が ななつ あります。', romaji: 'Kodomo no omocha ga nanatsu arimasu.', english: 'There are seven children\'s toys.' }
    ]
  },
  {
    id: 'w-n5-631',
    word: '八つ',
    reading: 'やっつ',
    romaji: 'yattsu',
    meaning: 'eight (things)',
    pos: 'noun',
    posLabel: 'Counter',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "八", "meaning": "Eight"}],
    sentences: [
      { id: 'ws-n5-631-1', sentence: '会議室に椅子が八つあります。', furigana: 'かいぎしつ に いす が やっつ あります。', romaji: 'Kaigishitsu ni isu ga yattsu arimasu.', english: 'There are eight chairs in the meeting room.' },
      { id: 'ws-n5-631-2', sentence: 'スーパーでトマトを八つ買いました。', furigana: 'スーパー で トマト を やっつ かいました。', romaji: 'Suupaa de tomato o yattsu kaimashita.', english: 'I bought eight tomatoes at the supermarket.' }
    ]
  },
  {
    id: 'w-n5-632',
    word: '九つ',
    reading: 'ここのつ',
    romaji: 'kokonotsu',
    meaning: 'nine (things)',
    pos: 'noun',
    posLabel: 'Counter',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "九", "meaning": "Nine"}],
    sentences: [
      { id: 'ws-n5-632-1', sentence: '引き出しの中に封筒が九つあります。', furigana: 'ひきだし の なか に ふうとう が ここのつ あります。', romaji: 'Hikidashi no naka ni fuutou ga kokonotsu arimasu.', english: 'There are nine envelopes inside the drawer.' },
      { id: 'ws-n5-632-2', sentence: '美味しいみかんを九つ食べました。', furigana: 'おいしい みかん を ここのつ たべました。', romaji: 'Oishii mikan o kokonotsu tabemashita.', english: 'I ate nine delicious mandarins.' }
    ]
  },
  {
    id: 'w-n5-633',
    word: '十',
    reading: 'とお',
    romaji: 'too',
    meaning: 'ten (things)',
    pos: 'noun',
    posLabel: 'Counter',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "十", "meaning": "Ten"}],
    sentences: [
      { id: 'ws-n5-633-1', sentence: '手には指が十あります。', furigana: 'て に は ゆび が とお あります。', romaji: 'Te ni wa yubi ga too arimasu.', english: 'There are ten fingers on hands.' },
      { id: 'ws-n5-633-2', sentence: 'お店で美味しいお菓子を十買いました。', furigana: 'おみせ で おいしい おかし を とお かいました。', romaji: 'Omise de oishii okashi o too kaimashita.', english: 'I bought ten delicious sweets at the shop.' }
    ]
  },
  {
    id: 'w-n5-634',
    word: '一人',
    reading: 'ひとり',
    romaji: 'hitori',
    meaning: 'one person, alone',
    pos: 'noun',
    posLabel: 'Counter',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "一", "meaning": "One"}, {"char": "人", "meaning": "Person"}],
    sentences: [
      { id: 'ws-n5-634-1', sentence: '教室に学生が一人います。', furigana: 'きょうしつ に がくせい が ひとり います。', romaji: 'Kyoushitsu ni gakusei ga hitori imasu.', english: 'There is one student in the classroom.' },
      { id: 'ws-n5-634-2', sentence: '一人で京都へ旅行に行きました。', furigana: 'ひとり で きょうと へ りょこう に いきました。', romaji: 'Hitori de Kyouto e ryokou ni ikimashita.', english: 'I went on a trip to Kyoto alone.' }
    ]
  },
  // ==========================================
  // === BATCH 7: GREETINGS, EXPRESSIONS, CONJUNCTIONS, HOBBIES (w-n5-635 to w-n5-718) ===
  // ==========================================
  {
    id: 'w-n5-635',
    word: '二人',
    reading: 'ふたり',
    romaji: 'futari',
    meaning: 'two people, pair',
    pos: 'counter',
    posLabel: 'Counter',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "二", "meaning": "Two"}, {"char": "人", "meaning": "Person"}],
    sentences: [
      { id: 'ws-n5-635-1', sentence: 'ベンチに学生が二人座っています。', furigana: 'ベンチ に がくせい が ふたり すわって います。', romaji: 'Benchi ni gakusei ga futari suwatte imasu.', english: 'Two students are sitting on the bench.' },
      { id: 'ws-n5-635-2', sentence: '二人で仲良く映画を見ました。', furigana: 'ふたり で なかよく えいが を みました。', romaji: 'Futari de nakayoku eiga o mimashita.', english: 'The two of us watched a movie happily together.' }
    ]
  },
  {
    id: 'w-n5-636',
    word: '三人',
    reading: 'さんにん',
    romaji: 'sannin',
    meaning: 'three people',
    pos: 'counter',
    posLabel: 'Counter',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "三", "meaning": "Three"}, {"char": "人", "meaning": "Person"}],
    sentences: [
      { id: 'ws-n5-636-1', sentence: '庭で子供が三人遊んでいます。', furigana: 'にわ で こども が さんにん あそんで います。', romaji: 'Niwa de kodomo ga sannin asonde imasu.', english: 'Three children are playing in the garden.' },
      { id: 'ws-n5-636-2', sentence: '私の家族は全部で三人です。', furigana: 'わたし の かぞく は ぜんぶ で さんにん です。', romaji: 'Watashi no kazoku wa zenbu de sannin desu.', english: 'My family is three people in all.' }
    ]
  },
  {
    id: 'w-n5-637',
    word: '四人',
    reading: 'よにん',
    romaji: 'yonin',
    meaning: 'four people',
    pos: 'counter',
    posLabel: 'Counter',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "四", "meaning": "Four"}, {"char": "人", "meaning": "Person"}],
    sentences: [
      { id: 'ws-n5-637-1', sentence: '友達四人でレストランへ行きました。', furigana: 'ともだち よにん で レストラン へ いきました。', romaji: 'Tomodachi yonin de resutoran e ikimashita.', english: 'Four of us friends went to a restaurant.' },
      { id: 'ws-n5-637-2', sentence: '車の中に四人乗っています。', furigana: 'くるま の なか に よにん のって います。', romaji: 'Kuruma no naka ni yonin notte imasu.', english: 'Four people are riding in the car.' }
    ]
  },
  {
    id: 'w-n5-638',
    word: '何人',
    reading: 'なんにん',
    romaji: 'nannin',
    meaning: 'how many people',
    pos: 'counter',
    posLabel: 'Question Word',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "何", "meaning": "What"}, {"char": "人", "meaning": "Person"}],
    sentences: [
      { id: 'ws-n5-638-1', sentence: '教室に学生は何人いますか。', furigana: 'きょうしつ に がくせい は なんにん います か。', romaji: 'Kyoushitsu ni gakusei wa nannin imasu ka.', english: 'How many students are in the classroom?' },
      { id: 'ws-n5-638-2', sentence: 'あなたのご家族は何人ですか。', furigana: 'あなた の ごかぞく は なんにん です か。', romaji: 'Anata no gokazoku wa nannin desu ka.', english: 'How many people are there in your family?' }
    ]
  },
  {
    id: 'w-n5-639',
    word: '何時',
    reading: 'なんじ',
    romaji: 'nanji',
    meaning: 'what time',
    pos: 'noun',
    posLabel: 'Question Word',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "何", "meaning": "What"}, {"char": "時", "meaning": "Time / Hour"}],
    sentences: [
      { id: 'ws-n5-639-1', sentence: 'すみません、今何時ですか。', furigana: 'すみません、いま なんじ です か。', romaji: 'Sumimasen, ima nanji desu ka.', english: 'Excuse me, what time is it now?' },
      { id: 'ws-n5-639-2', sentence: '明日の朝は何時に起きますか。', furigana: 'あした の あさ は なんじ に おきます か。', romaji: 'Ashita no asa wa nanji ni okimasu ka.', english: 'What time will you wake up tomorrow morning?' }
    ]
  },
  {
    id: 'w-n5-640',
    word: '何分',
    reading: 'なんぷん',
    romaji: 'nanpun',
    meaning: 'what minute, how many minutes',
    pos: 'noun',
    posLabel: 'Question Word',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "何", "meaning": "What"}, {"char": "分", "meaning": "Minute / Part"}],
    sentences: [
      { id: 'ws-n5-640-1', sentence: 'ここから駅まで何分かかりますか。', furigana: 'ここ から えき まで なんぷん かかります か。', romaji: 'Koko kara eki made nanpun kakarimasu ka.', english: 'How many minutes does it take from here to the station?' },
      { id: 'ws-n5-640-2', sentence: '時計を見ると、今は何時何分ですか。', furigana: 'とけい を みる と、いま は なんじ なんぷん です か。', romaji: 'Looking at the clock, what hour and what minute is it now?', english: 'Looking at the clock, what hour and what minute is it now?' }
    ]
  },
  {
    id: 'w-n5-641',
    word: '何日',
    reading: 'なんにち',
    romaji: 'nannichi',
    meaning: 'what day of the month, how many days',
    pos: 'noun',
    posLabel: 'Question Word',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "何", "meaning": "What"}, {"char": "日", "meaning": "Day"}],
    sentences: [
      { id: 'ws-n5-641-1', sentence: '今日は何日ですか。', furigana: 'きょう は なんにち です か。', romaji: 'Kyou wa nannichi desu ka.', english: 'What day of the month is it today?' },
      { id: 'ws-n5-641-2', sentence: '日本にあと何日滞在しますか。', furigana: 'にほん に あと なんにち たいざい します か。', romaji: 'Nihon ni ato nannichi taizai shimasu ka.', english: 'How many more days will you stay in Japan?' }
    ]
  },
  {
    id: 'w-n5-642',
    word: '何月',
    reading: 'なんがつ',
    romaji: 'nangatsu',
    meaning: 'what month',
    pos: 'noun',
    posLabel: 'Question Word',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "何", "meaning": "What"}, {"char": "月", "meaning": "Month"}],
    sentences: [
      { id: 'ws-n5-642-1', sentence: 'あなたの誕生日は何月ですか。', furigana: 'あなた の たんじょうび は なんがつ です か。', romaji: 'Anata no tanjoubi wa nangatsu desu ka.', english: 'What month is your birthday?' },
      { id: 'ws-n5-642-2', sentence: '桜は何月に咲きますか。', furigana: 'さくら は なんがつ に さきます か。', romaji: 'Sakura wa nangatsu ni sakimasu ka.', english: 'In what month do cherry blossoms bloom?' }
    ]
  },
  {
    id: 'w-n5-643',
    word: '何年',
    reading: 'なんねん',
    romaji: 'nannen',
    meaning: 'what year, how many years',
    pos: 'noun',
    posLabel: 'Question Word',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "何", "meaning": "What"}, {"char": "年", "meaning": "Year"}],
    sentences: [
      { id: 'ws-n5-643-1', sentence: '今年は何年ですか。', furigana: 'ことし は なんねん です か。', romaji: 'Kotoshi wa nannen desu ka.', english: 'What year is this year?' },
      { id: 'ws-n5-643-2', sentence: '大学で何年間勉強しますか。', furigana: 'だいがく で なんねんかん べんきょう します か。', romaji: 'Daigaku de nannenkan benkyou shimasu ka.', english: 'For how many years do you study at university?' }
    ]
  },
  {
    id: 'w-n5-644',
    word: 'いくら',
    reading: 'いくら',
    romaji: 'ikura',
    meaning: 'how much (price)',
    pos: 'noun',
    posLabel: 'Question Word',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-644-1', sentence: 'この黒いペンはいくらですか。', furigana: 'この くろい ペン は いくら です か。', romaji: 'Kono kuroi pen wa ikura desu ka.', english: 'How much is this black pen?' },
      { id: 'ws-n5-644-2', sentence: '全部でいくらになりますか。', furigana: 'ぜんぶ で いくら に なります か。', romaji: 'Zenbu de ikura ni narimasu ka.', english: 'How much does it come to altogether?' }
    ]
  },
  {
    id: 'w-n5-645',
    word: 'いくつ',
    reading: 'いくつ',
    romaji: 'ikutsu',
    meaning: 'how many, how old',
    pos: 'noun',
    posLabel: 'Question Word',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-645-1', sentence: 'りんごをいくつ買いましたか。', furigana: 'りんご を いくつ かいました か。', romaji: 'Ringo o ikutsu kaimashita ka.', english: 'How many apples did you buy?' },
      { id: 'ws-n5-645-2', sentence: '失礼ですが、おいくつですか。', furigana: 'しつれい です が、おいくつ です か。', romaji: 'Shitsurei desu ga, oikutsu desu ka.', english: 'Excuse me, but how old are you?' }
    ]
  },
  {
    id: 'w-n5-646',
    word: '誰',
    reading: 'だれ',
    romaji: 'dare',
    meaning: 'who',
    pos: 'noun',
    posLabel: 'Pronoun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "誰", "meaning": "Who"}],
    sentences: [
      { id: 'ws-n5-646-1', sentence: 'あそこに立っている人は誰ですか。', furigana: 'あそこ に たって いる ひと は だれ です か。', romaji: 'Asoko ni tatte iru hito wa dare desu ka.', english: 'Who is the person standing over there?' },
      { id: 'ws-n5-646-2', sentence: '誰と一緒に日本へ来ましたか。', furigana: 'だれ と いっしょ に にほん へ きました か。', romaji: 'Dare to issho ni Nihon e kimashita ka.', english: 'Who did you come to Japan with?' }
    ]
  },
  {
    id: 'w-n5-647',
    word: 'どなた',
    reading: 'どなた',
    romaji: 'donata',
    meaning: 'who (polite)',
    pos: 'noun',
    posLabel: 'Pronoun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-647-1', sentence: 'あちらの方はどなたですか。', furigana: 'あちら の かた は どなた です か。', romaji: 'Achira no kata wa donata desu ka.', english: 'Who is that person over there?' },
      { id: 'ws-n5-647-2', sentence: '先ほどのお電話はどなたからでしたか。', furigana: 'さきほど の おでんわ は どなた から でした か。', romaji: 'Who was that earlier telephone call from?', english: 'Who was that earlier telephone call from?' }
    ]
  },
  {
    id: 'w-n5-648',
    word: 'どこ',
    reading: 'どこ',
    romaji: 'doko',
    meaning: 'where, which place',
    pos: 'noun',
    posLabel: 'Pronoun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-648-1', sentence: 'すみません、お手洗いはどこですか。', furigana: 'すみません、おてあらい は どこ です か。', romaji: 'Sumimasen, otearai wa doko desu ka.', english: 'Excuse me, where is the restroom?' },
      { id: 'ws-n5-648-2', sentence: '週末はどこへ行きましたか。', furigana: 'しゅうまつ は どこ へ いきました か。', romaji: 'Shuumatsu wa doko e ikimashita ka.', english: 'Where did you go on the weekend?' }
    ]
  },
  {
    id: 'w-n5-649',
    word: 'どちら',
    reading: 'どちら',
    romaji: 'dochira',
    meaning: 'which way, which one (polite)',
    pos: 'noun',
    posLabel: 'Pronoun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-649-1', sentence: 'どちらの道を行けばいいですか。', furigana: 'どちら の みち を いけば いい です か。', romaji: 'Dochira no michi o ikeba ii desu ka.', english: 'Which way should I go?' },
      { id: 'ws-n5-649-2', sentence: 'お茶とコーヒー、どちらがいいですか。', furigana: 'おちゃ と コーヒー、どちら が いい です か。', romaji: 'Ocha to koohii, dochira ga ii desu ka.', english: 'Tea or coffee, which one would you like?' }
    ]
  },
  {
    id: 'w-n5-650',
    word: 'いつ',
    reading: 'いつ',
    romaji: 'itsu',
    meaning: 'when',
    pos: 'noun',
    posLabel: 'Question Word',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-650-1', sentence: '日本へいつ来ましたか。', furigana: 'にほん へ いつ きました か。', romaji: 'Nihon e itsu kimashita ka.', english: 'When did you come to Japan?' },
      { id: 'ws-n5-650-2', sentence: '次の日本語のテストはいつですか。', furigana: 'つぎ の にほんご の テスト は いつ です か。', romaji: 'Tsugi no Nihongo no tesuto wa itsu desu ka.', english: 'When is the next Japanese test?' }
    ]
  },
  {
    id: 'w-n5-651',
    word: 'どうして',
    reading: 'どうして',
    romaji: 'doushite',
    meaning: 'why, for what reason',
    pos: 'adverb',
    posLabel: 'Question Word',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-651-1', sentence: 'どうして昨日学校を休みましたか。', furigana: 'どうして きのう がっこう を やすみました か。', romaji: 'Doushite kinou gakkou o yasumimashita ka.', english: 'Why were you absent from school yesterday?' },
      { id: 'ws-n5-651-2', sentence: 'どうして日本語を勉強しているのですか。', furigana: 'どうして にほんご を べんきょう している の です か。', romaji: 'Doushite Nihongo o benkyou shite iru no desu ka.', english: 'Why are you studying Japanese?' }
    ]
  },
  {
    id: 'w-n5-652',
    word: 'なぜ',
    reading: 'なぜ',
    romaji: 'naze',
    meaning: 'why (formal)',
    pos: 'adverb',
    posLabel: 'Question Word',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-652-1', sentence: '今朝はなぜ遅れましたか。', furigana: 'けさ は なぜ おくれました か。', romaji: 'Kesa wa naze okuremashita ka.', english: 'Why were you late this morning?' },
      { id: 'ws-n5-652-2', sentence: 'なぜこの本を選びましたか。', furigana: 'なぜ この ほん を えらびました か。', romaji: 'Naze kono hon o erabimashita ka.', english: 'Why did you choose this book?' }
    ]
  },
  {
    id: 'w-n5-653',
    word: 'どう',
    reading: 'どう',
    romaji: 'dou',
    meaning: 'how, in what way',
    pos: 'adverb',
    posLabel: 'Question Word',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-653-1', sentence: '日本での生活はどうですか。', furigana: 'にほん での せいかつ は どう です か。', romaji: 'Nihon deno seikatsu wa dou desu ka.', english: 'How is life in Japan?' },
      { id: 'ws-n5-653-2', sentence: 'このケーキの味はどうですか。', furigana: 'この ケーキ の あじ は どう です か。', romaji: 'Kono keeki no aji wa dou desu ka.', english: 'How is the taste of this cake?' }
    ]
  },
  {
    id: 'w-n5-654',
    word: 'どんな',
    reading: 'どんな',
    romaji: 'donna',
    meaning: 'what kind of',
    pos: 'adverb',
    posLabel: 'Question Word',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-654-1', sentence: 'どんな音楽をよく聞きますか。', furigana: 'どんな おんがく を よく ききます か。', romaji: 'Donna ongaku o yoku kikimasu ka.', english: 'What kind of music do you often listen to?' },
      { id: 'ws-n5-654-2', sentence: '昨日はどんな映画を見ましたか。', furigana: 'きのう は どんな えいが を みました か。', romaji: 'Kinou wa donna eiga o mimashita ka.', english: 'What kind of movie did you watch yesterday?' }
    ]
  },
  {
    id: 'w-n5-655',
    word: 'どの',
    reading: 'どの',
    romaji: 'dono',
    meaning: 'which (+ noun)',
    pos: 'adverb',
    posLabel: 'Question Word',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-655-1', sentence: 'どの傘があなたの傘ですか。', furigana: 'どの かさ が あなた の かさ です か。', romaji: 'Dono kasa ga anata no kasa desu ka.', english: 'Which umbrella is your umbrella?' },
      { id: 'ws-n5-655-2', sentence: '東京駅へ行くには、どの電車に乗りますか。', furigana: 'とうきょうえき へ いく に は、どの でんしゃ に のります か。', romaji: 'Toukyou eki e iku ni wa, dono densha ni norimasu ka.', english: 'To go to Tokyo Station, which train should I take?' }
    ]
  },
  {
    id: 'w-n5-656',
    word: 'どれ',
    reading: 'どれ',
    romaji: 'dore',
    meaning: 'which one (of 3 or more)',
    pos: 'noun',
    posLabel: 'Question Word',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-656-1', sentence: 'あなたの鞄はどれですか。', furigana: 'あなた の かばん は どれ です か。', romaji: 'Anata no kaban wa dore desu ka.', english: 'Which one is your bag?' },
      { id: 'ws-n5-656-2', sentence: 'この中でどれが一番美味しいですか。', furigana: 'この なか で どれ が いちばん おいしい です か。', romaji: 'Kono naka de dore ga ichiban oishii desu ka.', english: 'Among these, which one is the most delicious?' }
    ]
  },
  {
    id: 'w-n5-657',
    word: '私たち',
    reading: 'わたしたち',
    romaji: 'watashitachi',
    meaning: 'we, us',
    pos: 'noun',
    posLabel: 'Pronoun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "私", "meaning": "I / Private"}],
    sentences: [
      { id: 'ws-n5-657-1', sentence: '私たちは日本語学校の学生です。', furigana: 'わたしたち は にほんごがっこう の がくせい です。', romaji: 'Watashitachi wa Nihongo gakkou no gakusei desu.', english: 'We are students at a Japanese language school.' },
      { id: 'ws-n5-657-2', sentence: '私たちと一緒に昼ご飯を食べましょう。', furigana: 'わたしたち と いっしょ に ひるごはん を たべましょう。', romaji: 'Watashitachi to issho ni hirugohan o tabemashou.', english: 'Let\'s eat lunch together with us.' }
    ]
  },
  {
    id: 'w-n5-658',
    word: 'あなた',
    reading: 'あなた',
    romaji: 'anata',
    meaning: 'you',
    pos: 'noun',
    posLabel: 'Pronoun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-658-1', sentence: 'あなたのお名前は何ですか。', furigana: 'あなた の おなまえ は なん です か。', romaji: 'Anata no onamae wa nan desu ka.', english: 'What is your name?' },
      { id: 'ws-n5-658-2', sentence: 'あなたの出身の国はどこですか。', furigana: 'あなた の しゅっしん の くに は どこ です か。', romaji: 'Anata no shusshin no kuni wa doko desu ka.', english: 'Where is your home country?' }
    ]
  },
  {
    id: 'w-n5-659',
    word: '彼',
    reading: 'かれ',
    romaji: 'kare',
    meaning: 'he, boyfriend',
    pos: 'noun',
    posLabel: 'Pronoun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "彼", "meaning": "He"}],
    sentences: [
      { id: 'ws-n5-659-1', sentence: '彼は私の親切な友達です。', furigana: 'かれ は わたし の しんせつ な ともだち です。', romaji: 'Kare wa watashi no shinsetsu na tomodachi desu.', english: 'He is my kind friend.' },
      { id: 'ws-n5-659-2', sentence: '彼と図書館で一緒に勉強しました。', furigana: 'かれ と としょかん で いっしょ に べんきょう しました。', romaji: 'Kare to toshokan de issho ni benkyou shimashita.', english: 'I studied together with him at the library.' }
    ]
  },
  {
    id: 'w-n5-660',
    word: '彼女',
    reading: 'かのじょ',
    romaji: 'kanojo',
    meaning: 'she, girlfriend',
    pos: 'noun',
    posLabel: 'Pronoun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "彼", "meaning": "He"}, {"char": "女", "meaning": "Woman"}],
    sentences: [
      { id: 'ws-n5-660-1', sentence: '彼女は明るい英語の先生です。', furigana: 'かのじょ は あかるい えいご の せんせい です。', romaji: 'Kanojo wa akarui eigo no sensei desu.', english: 'She is a cheerful English teacher.' },
      { id: 'ws-n5-660-2', sentence: '彼女の誕生日に花をプレゼントしました。', furigana: 'かのじょ の たんじょうび に はな を プレゼント しました。', romaji: 'Kanojo no tanjoubi ni hana o purezento shimashita.', english: 'I gave flowers as a present for her birthday.' }
    ]
  },
  {
    id: 'w-n5-661',
    word: '彼ら',
    reading: 'かれら',
    romaji: 'karera',
    meaning: 'they, them',
    pos: 'noun',
    posLabel: 'Pronoun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "彼", "meaning": "He"}],
    sentences: [
      { id: 'ws-n5-661-1', sentence: '彼らは公園で元気に走っています。', furigana: 'かれら は こうえん で げんき に はしって います。', romaji: 'Karera wa kouen de genki ni hashitte imasu.', english: 'They are running cheerfully in the park.' },
      { id: 'ws-n5-661-2', sentence: '彼らは日本の大学から来ました。', furigana: 'かれら は にほん の だいがく から きました。', romaji: 'Karera wa Nihon no daigaku kara kimashita.', english: 'They came from a Japanese university.' }
    ]
  },
  {
    id: 'w-n5-662',
    word: '皆さん',
    reading: 'みなさん',
    romaji: 'minasan',
    meaning: 'everyone, all of you',
    pos: 'noun',
    posLabel: 'Pronoun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "皆", "meaning": "All"}],
    sentences: [
      { id: 'ws-n5-662-1', sentence: '皆さん、おはようございます。', furigana: 'みなさん、おはよう ございます。', romaji: 'Minasan, ohayou gozaimasu.', english: 'Good morning, everyone.' },
      { id: 'ws-n5-662-2', sentence: '皆さん、こちらの黒板を見てください。', furigana: 'みなさん、こちら の こくばん を みて ください。', romaji: 'Minasan, kochira no kokuban o mite kudasai.', english: 'Everyone, please look at this blackboard.' }
    ]
  },
  {
    id: 'w-n5-663',
    word: 'そして',
    reading: 'そして',
    romaji: 'soshite',
    meaning: 'and, and then',
    pos: 'adverb',
    posLabel: 'Conjunction',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-663-1', sentence: '朝ご飯を食べました。そして、学校へ行きました。', furigana: 'あさごはん を たべました。そして、がっこう へ いきました。', romaji: 'Asagohan o tabemashita. Soshite, gakkou e ikimashita.', english: 'I ate breakfast. And then I went to school.' },
      { id: 'ws-n5-663-2', sentence: '彼は優しくて、そしてとても頭がいいです。', furigana: 'かれ は やさしくて、そして とても あたま が いい です。', romaji: 'Kare wa yasashikute, soshite totemo atama ga ii desu.', english: 'He is kind, and also very smart.' }
    ]
  },
  {
    id: 'w-n5-664',
    word: 'それから',
    reading: 'それから',
    romaji: 'sorekara',
    meaning: 'and then, after that',
    pos: 'adverb',
    posLabel: 'Conjunction',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-664-1', sentence: '宿題をしました。それから、テレビを見ました。', furigana: 'しゅくだい を しました。それから、テレビ を みました。', romaji: 'Shukudai o shimashita. Sorekara, terebi o mimashita.', english: 'I did homework. After that, I watched TV.' },
      { id: 'ws-n5-664-2', sentence: 'パンと牛乳、それから卵を買いました。', furigana: 'パン と ぎゅうにゅう、それから たまご を かいました。', romaji: 'Pan to gyuunyuu, sorekara tamago o kaimashita.', english: 'I bought bread and milk, and then eggs.' }
    ]
  },
  {
    id: 'w-n5-665',
    word: 'それでは',
    reading: 'それでは',
    romaji: 'soredewa',
    meaning: 'well then, in that case',
    pos: 'adverb',
    posLabel: 'Conjunction',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-665-1', sentence: 'それでは、今日の授業を始めましょう。', furigana: 'それでは、きょう の じゅぎょう を はじめましょう。', romaji: 'Soredewa, kyou no jugyou o hajimemashou.', english: 'Well then, let\'s begin today\'s class.' },
      { id: 'ws-n5-665-2', sentence: 'それでは、お先に失礼します。', furigana: 'それでは、おさき に しつれい します。', romaji: 'Soredewa, osaki ni shitsurei shimasu.', english: 'Well then, excuse me for leaving first.' }
    ]
  },
  {
    id: 'w-n5-666',
    word: 'だから',
    reading: 'だから',
    romaji: 'dakara',
    meaning: 'so, therefore',
    pos: 'adverb',
    posLabel: 'Conjunction',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-666-1', sentence: '雨が降っています。だから、傘を持っていきます。', furigana: 'あめ が ふって います。だから、かさ を もって いきます。', romaji: 'Ame ga futte imasu. Dakara, kasa o motte ikimasu.', english: 'It is raining. Therefore, I will take an umbrella.' },
      { id: 'ws-n5-666-2', sentence: '今日は日曜日です。だから、学校はありません。', furigana: 'きょう は にちようび です。だから、がっこう は ありません。', romaji: 'Kyou wa nichiyoubi desu. Dakara, gakkou wa arimasen.', english: 'Today is Sunday. So there is no school.' }
    ]
  },
  {
    id: 'w-n5-667',
    word: 'でも',
    reading: 'でも',
    romaji: 'demo',
    meaning: 'but, however',
    pos: 'adverb',
    posLabel: 'Conjunction',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-667-1', sentence: '日本語は難しいです。でも、とても楽しいです。', furigana: 'にほんご は むずかしい です。でも、とても たのしい です。', romaji: 'Nihongo wa muzukashii desu. Demo, totemo tanoshii desu.', english: 'Japanese is difficult. But it is very fun.' },
      { id: 'ws-n5-667-2', sentence: '買い物に行きたいです。でも、時間があまりありません。', furigana: 'かいもの に いきたい です。でも、じかん が あまり ありません。', romaji: 'Kaimono ni ikitai desu. Demo, jikan ga amari arimasen.', english: 'I want to go shopping. But I do not have much time.' }
    ]
  },
  {
    id: 'w-n5-668',
    word: 'しかし',
    reading: 'しかし',
    romaji: 'shikashi',
    meaning: 'however, but (formal)',
    pos: 'adverb',
    posLabel: 'Conjunction',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-668-1', sentence: '部屋中を探しました。しかし、鍵が見つかりませんでした。', furigana: 'へやじゅう を さがしました。しかし、かぎ が みつかりませんでした。', romaji: 'Heyajuu o sagashimashita. Shikashi, kagi ga mitsukarimasen deshita.', english: 'I searched the whole room. However, I could not find the key.' },
      { id: 'ws-n5-668-2', sentence: '薬を飲みました。しかし、まだ頭が少し痛いです。', furigana: 'くすり を のみました。しかし、まだ あたま が すこし いたい です。', romaji: 'Kusuri o nomimashita. Shikashi, mada atama ga sukoshi itai desu.', english: 'I took medicine. However, I still have a slight headache.' }
    ]
  },
  {
    id: 'w-n5-669',
    word: 'おはようございます',
    reading: 'おはようございます',
    romaji: 'ohayou gozaimasu',
    meaning: 'good morning (polite)',
    pos: 'expression',
    posLabel: 'Greeting',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-669-1', sentence: '先生、おはようございます。', furigana: 'せんせい、おはよう ございます。', romaji: 'Sensei, ohayou gozaimasu.', english: 'Good morning, teacher.' },
      { id: 'ws-n5-669-2', sentence: '毎朝起きて家族に「おはようございます」と言います。', furigana: 'まいあさ おきて かぞく に「おはよう ございます」と いいます。', romaji: 'Maiasa okite kazoku ni "ohayou gozaimasu" to iimasu.', english: 'Every morning I wake up and say "good morning" to my family.' }
    ]
  },
  {
    id: 'w-n5-670',
    word: 'こんにちは',
    reading: 'こんにちは',
    romaji: 'konnichiwa',
    meaning: 'hello, good afternoon',
    pos: 'expression',
    posLabel: 'Greeting',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-670-1', sentence: '田中さん、こんにちは。いい天気ですね。', furigana: 'たなかさん、こんにちは。いい てんき です ね。', romaji: 'Tanaka-san, konnichiwa. Ii tenki desu ne.', english: 'Good afternoon, Tanaka-san. Nice weather, isn\'t it?' },
      { id: 'ws-n5-670-2', sentence: '友達に会って「こんにちは」と挨拶しました。', furigana: 'ともだち に あって「こんにちは」と あいさつ しました。', romaji: 'Tomodachi ni atte "konnichiwa" to aisatsu shimashita.', english: 'I met my friend and greeted them with "hello".' }
    ]
  },
  {
    id: 'w-n5-671',
    word: 'こんばんは',
    reading: 'こんばんは',
    romaji: 'konbanwa',
    meaning: 'good evening',
    pos: 'expression',
    posLabel: 'Greeting',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-671-1', sentence: '皆さん、こんばんは。', furigana: 'みなさん、こんばんは。', romaji: 'Minasan, konbanwa.', english: 'Good evening, everyone.' },
      { id: 'ws-n5-671-2', sentence: '夜、近所の人に「こんばんは」と挨拶しました。', furigana: 'よる、きんじょ の ひと に「こんばんは」と あいさつ しました。', romaji: 'Yoru, kinjo no hito ni "konbanwa" to aisatsu shimashita.', english: 'At night, I greeted the neighbor with "good evening".' }
    ]
  },
  {
    id: 'w-n5-672',
    word: 'おやすみなさい',
    reading: 'おやすみなさい',
    romaji: 'oyasuminasai',
    meaning: 'good night (polite)',
    pos: 'expression',
    posLabel: 'Greeting',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-672-1', sentence: 'もう寝ます。おやすみなさい。', furigana: 'もう ねます。おやすみなさい。', romaji: 'Mou nemasu. Oyasuminasai.', english: 'I am going to sleep now. Good night.' },
      { id: 'ws-n5-672-2', sentence: '子供に「おやすみなさい」と言いました。', furigana: 'こども に「おやすみなさい」と いいました。', romaji: 'Kodomo ni "oyasuminasai" to iimashita.', english: 'I said "good night" to my child.' }
    ]
  },
  {
    id: 'w-n5-673',
    word: 'さようなら',
    reading: 'さようなら',
    romaji: 'sayounara',
    meaning: 'goodbye, farewell',
    pos: 'expression',
    posLabel: 'Greeting',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-673-1', sentence: '先生、さようなら。また明日。', furigana: 'せんせい、さようなら。また あした。', romaji: 'Sensei, sayounara. Mata ashita.', english: 'Goodbye, teacher. See you tomorrow.' },
      { id: 'ws-n5-673-2', sentence: '学校が終わって「さようなら」と言いました。', furigana: 'がっこう が おわって「さようなら」と いいました。', romaji: 'Gakkou ga owatte "sayounara" to iimashita.', english: 'School ended and I said "goodbye".' }
    ]
  },
  {
    id: 'w-n5-674',
    word: 'じゃあ、また',
    reading: 'じゃあ、また',
    romaji: 'jaa, mata',
    meaning: 'see you later (casual)',
    pos: 'expression',
    posLabel: 'Greeting',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-674-1', sentence: '今日は楽しかったです。じゃあ、また。', furigana: 'きょう は たのしかった です。じゃあ、また。', romaji: 'Kyou wa tanoshikatta desu. Jaa, mata.', english: 'Today was fun. See you later.' },
      { id: 'ws-n5-674-2', sentence: '友達と別れるときに「じゃあ、また」と言います。', furigana: 'ともだち と わかれる とき に「じゃあ、また」と いいます。', romaji: 'Tomodachi to wakareru toki ni "jaa, mata" to iimasu.', english: 'When parting with friends, I say "see you later".' }
    ]
  },
  {
    id: 'w-n5-675',
    word: 'ありがとうございます',
    reading: 'ありがとうございます',
    romaji: 'arigatou gozaimasu',
    meaning: 'thank you very much',
    pos: 'expression',
    posLabel: 'Expression',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-675-1', sentence: '親切に教えてくれて、ありがとうございます。', furigana: 'しんせつ に おしえて くれて、ありがとう ございます。', romaji: 'Shinsetsu ni oshiete kurete, arigatou gozaimasu.', english: 'Thank you very much for kindly teaching me.' },
      { id: 'ws-n5-675-2', sentence: 'プレゼントをありがとうございます。', furigana: 'プレゼント を ありがとう ございます。', romaji: 'Purezento o arigatou gozaimasu.', english: 'Thank you very much for the present.' }
    ]
  },
  {
    id: 'w-n5-676',
    word: 'どういたしまして',
    reading: 'どういたしまして',
    romaji: 'douitashimashite',
    meaning: 'you are welcome',
    pos: 'expression',
    posLabel: 'Expression',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-676-1', sentence: 'お礼を言われて、「どういたしまして」と答えました。', furigana: 'おれい を いわれて、「どういたしまして」と こたえました。', romaji: 'Orei o iwarete, "douitashimashite" to kotaemashita.', english: 'Being thanked, I replied "you are welcome".' },
      { id: 'ws-n5-676-2', sentence: 'いいえ、どういたしまして。', furigana: 'いいえ、どういたしまして。', romaji: 'Iie, douitashimashite.', english: 'No, you are quite welcome.' }
    ]
  },
  {
    id: 'w-n5-677',
    word: 'ごめんなさい',
    reading: 'ごめんなさい',
    romaji: 'gomennasai',
    meaning: 'I am sorry, pardon me',
    pos: 'expression',
    posLabel: 'Expression',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-677-1', sentence: '遅れてしまって、ごめんなさい。', furigana: 'おくれて しまって、ごめんなさい。', romaji: 'Okurete shimatte, gomennasai.', english: 'I am sorry for being late.' },
      { id: 'ws-n5-677-2', sentence: '約束を忘れてごめんなさい。', furigana: 'やくそく を わすれて ごめんなさい。', romaji: 'Gomennasai for forgetting our promise.', english: 'I am sorry for forgetting our promise.' }
    ]
  },
  {
    id: 'w-n5-678',
    word: 'お願いします',
    reading: 'おねがいします',
    romaji: 'onegaishimasu',
    meaning: 'please (request)',
    pos: 'expression',
    posLabel: 'Expression',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "願", "meaning": "Request"}],
    sentences: [
      { id: 'ws-n5-678-1', sentence: 'コーヒーを一つお願いします。', furigana: 'コーヒー を ひとつ おねがい します。', romaji: 'Koohii o hitotsu onegai shimasu.', english: 'One coffee, please.' },
      { id: 'ws-n5-678-2', sentence: 'この荷物の配達をお願いします。', furigana: 'この にもつ の はいたつ を おねがい します。', romaji: 'Please deliver this parcel.', english: 'Please deliver this parcel.' }
    ]
  },
  {
    id: 'w-n5-679',
    word: 'どうぞ',
    reading: 'どうぞ',
    romaji: 'douzo',
    meaning: 'please, go ahead, here you are',
    pos: 'expression',
    posLabel: 'Expression',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-679-1', sentence: 'どうぞ、こちらの席にお座りください。', furigana: 'どうぞ、こちら の せき に おすわり ください。', romaji: 'Douzo, kochira no seki ni osuwari kudasai.', english: 'Please have a seat here.' },
      { id: 'ws-n5-679-2', sentence: 'お茶をどうぞ。', furigana: 'おちゃ を どうぞ。', romaji: 'Ocha o douzo.', english: 'Here is some tea, please enjoy.' }
    ]
  },
  {
    id: 'w-n5-680',
    word: 'どうも',
    reading: 'どうも',
    romaji: 'doumo',
    meaning: 'thanks, quite, somehow',
    pos: 'expression',
    posLabel: 'Expression',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-680-1', sentence: 'どうもありがとうございます。', furigana: 'どうも ありがとう ございます。', romaji: 'Doumo arigatou gozaimasu.', english: 'Thank you very much indeed.' },
      { id: 'ws-n5-680-2', sentence: '本日はどうもお世話になりました。', furigana: 'ほんじつ は どうも おせわ に なりました。', romaji: 'Honjitsu wa doumo osewa ni narimashita.', english: 'Thank you very much for your care today.' }
    ]
  },
  {
    id: 'w-n5-681',
    word: 'いただきます',
    reading: 'いただきます',
    romaji: 'itadakimasu',
    meaning: 'thank you for the food (before meal)',
    pos: 'expression',
    posLabel: 'Expression',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-681-1', sentence: '食べる前に「いただきます」と言います。', furigana: 'たべる まえ に「いただきます」と いいます。', romaji: 'Taberu mae ni "itadakimasu" to iimasu.', english: 'Before eating, I say "itadakimasu".' },
      { id: 'ws-n5-681-2', sentence: '温かいご飯をいただきます。', furigana: 'あたたかい ごはん を いただきます。', romaji: 'Warm meal o itadakimasu.', english: 'Thank you for the warm meal.' }
    ]
  },
  {
    id: 'w-n5-682',
    word: 'ごちそうさまでした',
    reading: 'ごちそうさまでした',
    romaji: 'gochisousama deshita',
    meaning: 'thank you for the meal (after eating)',
    pos: 'expression',
    posLabel: 'Expression',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-682-1', sentence: 'ご飯を食べた後、「ごちそうさまでした」と言いました。', furigana: 'ごはん を たべた あと、「ごちそうさまでした」と いいました。', romaji: 'Gohan o tabeta ato, "gochisousamadeshita" to iimashita.', english: 'After eating the meal, I said "thank you for the meal".' },
      { id: 'ws-n5-682-2', sentence: '美味しい料理をごちそうさまでした。', furigana: 'おいしい りょうり を ごちそうさまでした。', romaji: 'Oishii ryouri o gochisousamadeshita.', english: 'Thank you very much for the delicious food.' }
    ]
  },
  {
    id: 'w-n5-683',
    word: '行ってきます',
    reading: 'いってきます',
    romaji: 'ittekimasu',
    meaning: 'I am leaving / See you (leaving home)',
    pos: 'expression',
    posLabel: 'Expression',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "行", "meaning": "Go"}],
    sentences: [
      { id: 'ws-n5-683-1', sentence: '朝、学校へ行くとき「行ってきます」と言います。', furigana: 'あさ、がっこう へ いく とき「いってきます」と いいます。', romaji: 'Asa, gakkou e iku toki "ittekimasu" to iimasu.', english: 'In the morning when going to school, I say "I am leaving".' },
      { id: 'ws-n5-683-2', sentence: '仕事に行ってきます。', furigana: 'しごと に いってきます。', romaji: 'Shigoto ni ittekimasu.', english: 'I am off to work.' }
    ]
  },
  {
    id: 'w-n5-684',
    word: '行ってらっしゃい',
    reading: 'いってらっしゃい',
    romaji: 'itterasshai',
    meaning: 'take care, see you (sending off)',
    pos: 'expression',
    posLabel: 'Expression',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "行", "meaning": "Go"}],
    sentences: [
      { id: 'ws-n5-684-1', sentence: '家族を「行ってらっしゃい」と見送りました。', furigana: 'かぞく を「いってらっしゃい」と みおくりました。', romaji: 'Kazoku o "itterasshai" to miokurimashita.', english: 'I saw my family off saying "take care and see you".' },
      { id: 'ws-n5-684-2', sentence: '気をつけて行ってらっしゃい。', furigana: 'き を つけて いってらっしゃい。', romaji: 'Ki o tsukete itterasshai.', english: 'Be careful and have a safe day.' }
    ]
  },
  {
    id: 'w-n5-685',
    word: 'ただいま',
    reading: 'ただいま',
    romaji: 'tadaima',
    meaning: "I'm home, back now",
    pos: 'expression',
    posLabel: 'Expression',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-685-1', sentence: '家に帰って「ただいま」と言いました。', furigana: 'いえ に かえって「ただいま」と いいました。', romaji: 'Ie ni kaette "tadaima" to iimashita.', english: 'I returned home and said "I am home".' },
      { id: 'ws-n5-685-2', sentence: 'ただいま、学校から帰りました。', furigana: 'ただいま、がっこう から かえりました。', romaji: 'Tadaima, gakkou kara kaerimashita.', english: 'I am home, back from school.' }
    ]
  },
  {
    id: 'w-n5-686',
    word: 'お帰りなさい',
    reading: 'おかえりなさい',
    romaji: 'okaerinasai',
    meaning: 'welcome home',
    pos: 'expression',
    posLabel: 'Expression',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "帰", "meaning": "Return"}],
    sentences: [
      { id: 'ws-n5-686-1', sentence: '父が帰ってきて「お帰りなさい」と言いました。', furigana: 'ちち が かえって きて「おかえりなさい」と いいました。', romaji: 'Chichi ga kaette kite "okaerinasai" to iimashita.', english: 'My father returned and I said "welcome home".' },
      { id: 'ws-n5-686-2', sentence: 'お帰りなさい、寒かったでしょう。', furigana: 'おかえりなさい、さむかった でしょう。', romaji: 'Okaerinasai, samukatta deshou.', english: 'Welcome home, it must have been cold.' }
    ]
  },
  {
    id: 'w-n5-687',
    word: '初めまして',
    reading: 'はじめまして',
    romaji: 'hajimemashite',
    meaning: 'nice to meet you',
    pos: 'expression',
    posLabel: 'Greeting',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "初", "meaning": "First"}],
    sentences: [
      { id: 'ws-n5-687-1', sentence: '初めまして、田中と申します。', furigana: 'はじめまして、たなか と もうします。', romaji: 'Hajimemashite, Tanaka to moushimasu.', english: 'Nice to meet you, I am Tanaka.' },
      { id: 'ws-n5-687-2', sentence: '初めまして、アメリカから来ました。', furigana: 'はじめまして、アメリカ から きました。', romaji: 'Hajimemashite, Amerika kara kimashita.', english: 'Nice to meet you, I came from America.' }
    ]
  },
  {
    id: 'w-n5-688',
    word: 'よろしくお願いします',
    reading: 'よろしくおねがいします',
    romaji: 'yoroshiku onegaishimasu',
    meaning: 'pleased to meet you, please treat me well',
    pos: 'expression',
    posLabel: 'Expression',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "願", "meaning": "Request"}],
    sentences: [
      { id: 'ws-n5-688-1', sentence: 'どうぞよろしくお願いします。', furigana: 'どうぞ よろしく おねがい します。', romaji: 'Douzo yoroshiku onegai shimasu.', english: 'Pleasure to meet you, pleased to work with you.' },
      { id: 'ws-n5-688-2', sentence: 'これからもよろしくお願いします。', furigana: 'これから も よろしく おねがい します。', romaji: 'Korekara mo yoroshiku onegai shimasu.', english: 'I look forward to your continued support.' }
    ]
  },
  {
    id: 'w-n5-689',
    word: 'おめでとうございます',
    reading: 'おめでとうございます',
    romaji: 'omedetou gozaimasu',
    meaning: 'congratulations (polite)',
    pos: 'expression',
    posLabel: 'Expression',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-689-1', sentence: 'お誕生日おめでとうございます。', furigana: 'おたんじょうび おめでとう ございます。', romaji: 'Otanjoubi omedetou gozaimasu.', english: 'Happy birthday to you.' },
      { id: 'ws-n5-689-2', sentence: '大学の合格、おめでとうございます。', furigana: 'だいがく の ごうかく、おめでとう ございます。', romaji: 'Daigaku no goukaku, omedetou gozaimasu.', english: 'Congratulations on passing university exams.' }
    ]
  },
  {
    id: 'w-n5-690',
    word: 'いらっしゃいませ',
    reading: 'いらっしゃいませ',
    romaji: 'irasshaimase',
    meaning: 'welcome (to shop/store)',
    pos: 'expression',
    posLabel: 'Expression',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-690-1', sentence: '店員が「いらっしゃいませ」と元気に言いました。', furigana: 'てんいん が「いらっしゃいませ」と げんき に いいました。', romaji: 'Ten\'in ga "irasshaimase" to genki ni iimashita.', english: 'The clerk cheerfully said "welcome".' },
      { id: 'ws-n5-690-2', sentence: 'いらっしゃいませ、何名様ですか。', furigana: 'いらっしゃいませ、なんめいさま です か。', romaji: 'Irasshaimase, nanmeisama desu ka.', english: 'Welcome, how many people in your party?' }
    ]
  },
  {
    id: 'w-n5-691',
    word: 'お大事に',
    reading: 'おだいじに',
    romaji: 'odaiji ni',
    meaning: 'take care of yourself (to ill person)',
    pos: 'expression',
    posLabel: 'Expression',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "大", "meaning": "Big"}, {"char": "事", "meaning": "Matter"}],
    sentences: [
      { id: 'ws-n5-691-1', sentence: '風邪をひいた友達に「お大事に」と言いました。', furigana: 'かぜ を ひいた ともだち に「おだいじに」と いいました。', romaji: 'Kaze o hiita tomodachi ni "odaijini" to iimashita.', english: 'I said "take care of yourself" to my friend who caught a cold.' },
      { id: 'ws-n5-691-2', sentence: '病院で薬をもらって「お大事に」と言われました。', furigana: 'びょういん で くすり を もらって「おだいじに」と いわれました。', romaji: 'Byouin de kusuri o moratte "odaijini" to iwaremashita.', english: 'I received medicine at the hospital and was told "take care".' }
    ]
  },
  {
    id: 'w-n5-692',
    word: '失礼します',
    reading: 'しつれいします',
    romaji: 'shitsurei shimasu',
    meaning: 'excuse me, pardon me (entering/leaving)',
    pos: 'expression',
    posLabel: 'Expression',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "失", "meaning": "Lose"}, {"char": "礼", "meaning": "Manners"}],
    sentences: [
      { id: 'ws-n5-692-1', sentence: '部屋に入るとき「失礼します」と言います。', furigana: 'へや に はいる とき「しつれい します」と いいます。', romaji: 'Heya ni hairu toki "shitsurei shimasu" to iimasu.', english: 'When entering the room, I say "excuse me".' },
      { id: 'ws-n5-692-2', sentence: 'それでは、お先に失礼します。', furigana: 'それでは、おさき に しつれい します。', romaji: 'Soredewa, osaki ni shitsurei shimasu.', english: 'Well then, excuse me for leaving earlier.' }
    ]
  },
  {
    id: 'w-n5-693',
    word: 'お疲れ様でした',
    reading: 'おつかれさまでした',
    romaji: 'otsukaresama deshita',
    meaning: 'thank you for your hard work, good job',
    pos: 'expression',
    posLabel: 'Expression',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "疲", "meaning": "Tired"}, {"char": "様", "meaning": "Polite honorific"}],
    sentences: [
      { id: 'ws-n5-693-1', sentence: '仕事が終わって「お疲れ様でした」と言いました。', furigana: 'しごと が おわって「おつかれさまでした」と いいました。', romaji: 'Shigoto ga owatte "otsukaresamadeshita" to iimashita.', english: 'Work ended and I said "thank you for your hard work".' },
      { id: 'ws-n5-693-2', sentence: '皆さん、今日の練習はお疲れ様でした。', furigana: 'みなさん、きょう の れんしゅう は おつかれさまでした。', romaji: 'Minasan, kyou no renshuu wa otsukaresamadeshita.', english: 'Everyone, thank you for your hard work in today\'s practice.' }
    ]
  },
  {
    id: 'w-n5-694',
    word: '乾杯',
    reading: 'かんぱい',
    romaji: 'kanpai',
    meaning: 'cheers, toast',
    pos: 'expression',
    posLabel: 'Expression',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "乾", "meaning": "Dry"}, {"char": "杯", "meaning": "Cup"}],
    sentences: [
      { id: 'ws-n5-694-1', sentence: 'みんなでグラスを持って乾杯しました。', furigana: 'みんな で グラス を もって かんぱい しました。', romaji: 'Minna de gurasu o motte kanpai shimashita.', english: 'Everyone held their glasses and toasted.' },
      { id: 'ws-n5-694-2', sentence: 'パーティーで元気に「乾杯！」と言いました。', furigana: 'パーティー で げんき に「かんぱい！」と いいました。', romaji: 'Paatii de genki ni "kanpai!" to iimashita.', english: 'At the party, we cheerfully shouted "Cheers!".' }
    ]
  },
  {
    id: 'w-n5-695',
    word: 'はい',
    reading: 'はい',
    romaji: 'hai',
    meaning: 'yes, alright',
    pos: 'expression',
    posLabel: 'Response',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-695-1', sentence: '先生に名前を呼ばれて「はい」と返事しました。', furigana: 'せんせい に なまえ を よばれて「はい」と へんじ しました。', romaji: 'Sensei ni namae o yobarete "hai" to henji shimashita.', english: 'My name was called by the teacher and I replied "yes".' },
      { id: 'ws-n5-695-2', sentence: 'はい、わかりました。', furigana: 'はい、わかりました。', romaji: 'Hai, wakarimashita.', english: 'Yes, I understood.' }
    ]
  },
  {
    id: 'w-n5-696',
    word: 'いいえ',
    reading: 'いいえ',
    romaji: 'iie',
    meaning: 'no, not at all',
    pos: 'expression',
    posLabel: 'Response',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-696-1', sentence: '「いいえ、違います」と答えました。', furigana: '「いいえ、ちがいます」と こたえました。', romaji: '"Iie, chigaimasu" to kotaemashita.', english: 'I replied, "No, that is incorrect".' },
      { id: 'ws-n5-696-2', sentence: 'いいえ、まだ食べていません。', furigana: 'いいえ、まだ たべて いません。', romaji: 'Iie, mada tabete imasen.', english: 'No, I have not eaten yet.' }
    ]
  },
  {
    id: 'w-n5-697',
    word: 'そうですね',
    reading: 'そうですね',
    romaji: 'sou desu ne',
    meaning: 'that is right, let me see',
    pos: 'expression',
    posLabel: 'Response',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-697-1', sentence: '「そうですね、私もそう思います。」', furigana: '「そう です ね、わたし も そう おもいます。」', romaji: '"Sou desu ne, watashi mo sou omoimasu."', english: '"That is right, I think so too."' },
      { id: 'ws-n5-697-2', sentence: '明日の予定は、そうですね、買い物に行きます。', furigana: 'あした の よてい は、そう です ね、かいもの に いきます。', romaji: 'Ashita no yotei wa, sou desu ne, kaimono ni ikimasu.', english: 'Tomorrow\'s schedule, well let me see, I will go shopping.' }
    ]
  },
  {
    id: 'w-n5-698',
    word: 'そうですか',
    reading: 'そうですか',
    romaji: 'sou desu ka',
    meaning: 'is that so?, I see',
    pos: 'expression',
    posLabel: 'Response',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-698-1', sentence: '「来週日本へ行きます。」「そうですか、いいですね。」', furigana: '「らいしゅう にほん へ いきます。」「そう です か、いい です ね。」', romaji: '"Raishuu Nihon e ikimasu." "Sou desu ka, ii desu ne."', english: '"I am going to Japan next week." "Is that so? That sounds great."' },
      { id: 'ws-n5-698-2', sentence: 'そうですか、知りませんでした。', furigana: 'そう です か、しりませんでした。', romaji: 'Sou desu ka, shirimasen deshita.', english: 'Is that so? I did not know that.' }
    ]
  },
  {
    id: 'w-n5-699',
    word: '意味',
    reading: 'いみ',
    romaji: 'imi',
    meaning: 'meaning, significance',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "意", "meaning": "Idea"}, {"char": "味", "meaning": "Taste / Meaning"}],
    sentences: [
      { id: 'ws-n5-699-1', sentence: 'この漢字の意味を辞書で調べました。', furigana: 'この かんじ の いみ を じしょ で しらべました。', romaji: 'Kono kanji no imi o jisho de shirabemashita.', english: 'I looked up the meaning of this kanji in the dictionary.' },
      { id: 'ws-n5-699-2', sentence: 'その言葉の意味がよくわかりません。', furigana: 'その ことば の いみ が よく わかりません。', romaji: 'Sono kotoba no imi ga yoku wakarimasen.', english: 'I do not understand the meaning of that word well.' }
    ]
  },
  {
    id: 'w-n5-700',
    word: '理由',
    reading: 'りゆう',
    romaji: 'riyuu',
    meaning: 'reason, cause',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "理", "meaning": "Logic"}, {"char": "由", "meaning": "Reason"}],
    sentences: [
      { id: 'ws-n5-700-1', sentence: '学校を休んだ理由を先生に話しました。', furigana: 'がっこう を やすんだ りゆう を せんせい に はなしました。', romaji: 'Gakkou o yasunda riyuu o sensei ni hanashimashita.', english: 'I told the teacher the reason why I was absent from school.' },
      { id: 'ws-n5-700-2', sentence: '日本へ来た特別な理由がありますか。', furigana: 'にほん へ きた とくべつ な りゆう が あります か。', romaji: 'Nihon e kita tokubetsu na riyuu ga arimasu ka.', english: 'Do you have a special reason for coming to Japan?' }
    ]
  },
  {
    id: 'w-n5-701',
    word: '番号',
    reading: 'ばんごう',
    romaji: 'bangou',
    meaning: 'number (telephone, room, ID)',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "番", "meaning": "Number"}, {"char": "号", "meaning": "Number / Issue"}],
    sentences: [
      { id: 'ws-n5-701-1', sentence: '紙に電話番号を書いてください。', furigana: 'かみ に でんわばんごう を かいて ください。', romaji: 'Kami ni denwabangou o kaite kudasai.', english: 'Please write your telephone number on paper.' },
      { id: 'ws-n5-701-2', sentence: '部屋の番号は三〇二号室です。', furigana: 'へや の ばんごう は さんまるにごうしつ です。', romaji: 'Heya no bangou wa san-maru-ni goushitsu desu.', english: 'The room number is room 302.' }
    ]
  },
  {
    id: 'w-n5-702',
    word: '質問',
    reading: 'しつもん',
    romaji: 'shitsumon',
    meaning: 'question, inquiry',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "質", "meaning": "Quality / Matter"}, {"char": "問", "meaning": "Question"}],
    sentences: [
      { id: 'ws-n5-702-1', sentence: '先生に日本語で質問をしました。', furigana: 'せんせい に にほんご で しつもん を しました。', romaji: 'Sensei ni Nihongo de shitsumon o shimashita.', english: 'I asked the teacher a question in Japanese.' },
      { id: 'ws-n5-702-2', sentence: '何か質問はありますか。', furigana: 'なに か しつもん は あります か。', romaji: 'Nanika shitsumon wa arimasu ka.', english: 'Do you have any questions?' }
    ]
  },
  {
    id: 'w-n5-703',
    word: '答え',
    reading: 'こたえ',
    romaji: 'kotae',
    meaning: 'answer, reply, solution',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "答", "meaning": "Answer"}],
    sentences: [
      { id: 'ws-n5-703-1', sentence: 'ノートに正しい答えを書きました。', furigana: 'ノート に ただしい こたえ を かきました。', romaji: 'Nooto ni tadashii kotae o kakimashita.', english: 'I wrote the correct answer in my notebook.' },
      { id: 'ws-n5-703-2', sentence: 'この問題の答えがわかりません。', furigana: 'この もんだい の こたえ が わかりません。', romaji: 'Kono mondai no kotae ga wakarimasen.', english: 'I don\'t know the answer to this problem.' }
    ]
  },
  {
    id: 'w-n5-704',
    word: 'テスト',
    reading: 'てすと',
    romaji: 'tesuto',
    meaning: 'test, exam',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-704-1', sentence: '来週の月曜日に日本語のテストがあります。', furigana: 'らいしゅう の げつようび に にほんご の テスト が あります。', romaji: 'Raishuu no getsuyoubi ni Nihongo no tesuto ga arimasu.', english: 'There is a Japanese test next Monday.' },
      { id: 'ws-n5-704-2', sentence: 'テストのために一生懸命勉強しました。', furigana: 'テスト の ため に いっしょうけんめい べんきょう しました。', romaji: 'Tesuto no tame ni isshoukenmei benkyou shimashita.', english: 'I studied hard for the test.' }
    ]
  },
  {
    id: 'w-n5-705',
    word: '宿題',
    reading: 'しゅくだい',
    romaji: 'shukudai',
    meaning: 'homework, assignment',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "宿", "meaning": "Lodge"}, {"char": "題", "meaning": "Topic / Title"}],
    sentences: [
      { id: 'ws-n5-705-1', sentence: '毎日学校の宿題がたくさんあります。', furigana: 'まいにち がっこう の しゅくだい が たくさん あります。', romaji: 'Mainichi gakkou no shukudai ga takusan arimasu.', english: 'I have a lot of school homework every day.' },
      { id: 'ws-n5-705-2', sentence: '晩ご飯を食べる前に宿題を終わらせます。', furigana: 'ばんごはん を たべる まえ に しゅくだい を おわらせます。', romaji: 'Bangohan o taberu mae ni shukudai o owarasemasu.', english: 'I finish my homework before eating dinner.' }
    ]
  },
  {
    id: 'w-n5-706',
    word: '作文',
    reading: 'さくぶん',
    romaji: 'sakubun',
    meaning: 'essay, composition',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "作", "meaning": "Make"}, {"char": "文", "meaning": "Sentence / Writing"}],
    sentences: [
      { id: 'ws-n5-706-1', sentence: '日本語で家族についての作文を書きました。', furigana: 'にほんご で かぞく について の さくぶん を かきました。', romaji: 'Nihongo de kazoku ni tsuite no sakubun o kakimashita.', english: 'I wrote an essay about my family in Japanese.' },
      { id: 'ws-n5-706-2', sentence: '授業で作文を発表しました。', furigana: 'じゅぎょう で さくぶん を はっぴょう しました。', romaji: 'Jugyou de sakubun o happyou shimashita.', english: 'I presented my essay in class.' }
    ]
  },
  {
    id: 'w-n5-707',
    word: '授業',
    reading: 'じゅぎょう',
    romaji: 'jugyou',
    meaning: 'class, lesson, lecture',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "授", "meaning": "Instruct / Give"}, {"char": "業", "meaning": "Work / Task"}],
    sentences: [
      { id: 'ws-n5-707-1', sentence: '毎朝九時から日本語の授業が始まります。', furigana: 'まいあさ くじ から にほんご の じゅぎょう が はじまります。', romaji: 'Maiasa kuji kara Nihongo no jugyou ga hajimarimasu.', english: 'Japanese classes start at 9:00 every morning.' },
      { id: 'ws-n5-707-2', sentence: '授業中にたくさんメモを取りました。', furigana: 'じゅぎょうちゅう に たくさん メモ を とりました。', romaji: 'Jugyouchuu ni takusan memo o torimashita.', english: 'I took many notes during the class.' }
    ]
  },
  {
    id: 'w-n5-708',
    word: '勉強',
    reading: 'べんきょう',
    romaji: 'benkyou',
    meaning: 'study, diligence',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "勉", "meaning": "Exertion"}, {"char": "強", "meaning": "Strong"}],
    sentences: [
      { id: 'ws-n5-708-1', sentence: '毎晩図書館で二時間勉強します。', furigana: 'まいばん としょかん で にじかん べんきょう します。', romaji: 'Maiban toshokan de nijikan benkyou shimasu.', english: 'I study for two hours at the library every night.' },
      { id: 'ws-n5-708-2', sentence: '漢字の勉強はとても面白いです。', furigana: 'かんじ の べんきょう は とても おもしろい です。', romaji: 'Kanji no benkyou wa totemo omoshiroi desu.', english: 'Studying kanji is very interesting.' }
    ]
  },
  {
    id: 'w-n5-709',
    word: '練習',
    reading: 'れんしゅう',
    romaji: 'renshuu',
    meaning: 'practice, drill, training',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "練", "meaning": "Practice / Polish"}, {"char": "習", "meaning": "Learn"}],
    sentences: [
      { id: 'ws-n5-709-1', sentence: '毎日発音の練習をしています。', furigana: 'まいにち はつおん の れんしゅう を して います。', romaji: 'Mainichi hatsuon no renshuu o shite imasu.', english: 'I practice pronunciation every day.' },
      { id: 'ws-n5-709-2', sentence: 'たくさん練習して上手になりました。', furigana: 'たくさん れんしゅう して じょうず に なりました。', romaji: 'Takusan renshuu shite jouzu ni narimashita.', english: 'I practiced a lot and became skillful.' }
    ]
  },
  {
    id: 'w-n5-710',
    word: '音楽',
    reading: 'おんがく',
    romaji: 'ongaku',
    meaning: 'music',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "音", "meaning": "Sound"}, {"char": "楽", "meaning": "Music / Pleasure"}],
    sentences: [
      { id: 'ws-n5-710-1', sentence: '部屋で静かな音楽を聞きます。', furigana: 'へや で しずか な おんがく を ききます。', romaji: 'Heya de shizuka na ongaku o kikimasu.', english: 'I listen to quiet music in my room.' },
      { id: 'ws-n5-710-2', sentence: '日本の音楽が大好きです。', furigana: 'にほん の おんがく が だいすき です。', romaji: 'Nihon no ongaku ga daisuki desu.', english: 'I love Japanese music.' }
    ]
  },
  {
    id: 'w-n5-711',
    word: '歌',
    reading: 'うた',
    romaji: 'uta',
    meaning: 'song',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "歌", "meaning": "Song"}],
    sentences: [
      { id: 'ws-n5-711-1', sentence: '友達とカラオケで歌を歌いました。', furigana: 'ともだち と カラオケ で うた を うたいました。', romaji: 'Tomodachi to karaoke de uta o utaimashita.', english: 'I sang songs at karaoke with my friends.' },
      { id: 'ws-n5-711-2', sentence: 'この歌はとても有名ですね。', furigana: 'この うた は とても ゆうめい です ね。', romaji: 'Kono uta wa totemo yuumei desu ne.', english: 'This song is very famous, isn\'t it?' }
    ]
  },
  {
    id: 'w-n5-712',
    word: 'ギター',
    reading: 'ぎたー',
    romaji: 'gitaa',
    meaning: 'guitar',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-712-1', sentence: '兄はギターを上手に弾きます。', furigana: 'あに は ギター を じょうず に ひきます。', romaji: 'Ani wa gitaa o jouzu ni hikimasu.', english: 'My older brother plays the guitar skillfully.' },
      { id: 'ws-n5-712-2', sentence: '新しいギターを買いました。', furigana: 'あたらしい ギター を かいました。', romaji: 'Atarashii gitaa o kaimashita.', english: 'I bought a new guitar.' }
    ]
  },
  {
    id: 'w-n5-713',
    word: 'ピアノ',
    reading: 'ぴあの',
    romaji: 'piano',
    meaning: 'piano',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-713-1', sentence: '妹は子供のころからピアノを習っています。', furigana: 'いもうと は こどものころ から ピアノ を ならって います。', romaji: 'Imouto wa kodomonokoro kara piano o naratte imasu.', english: 'My younger sister has been learning piano since childhood.' },
      { id: 'ws-n5-713-2', sentence: '部屋でピアノの練習をします。', furigana: 'へや で ピアノ の れんしゅう を します。', romaji: 'Heya de piano no renshuu o shimasu.', english: 'I practice the piano in my room.' }
    ]
  },
  {
    id: 'w-n5-714',
    word: 'スポーツ',
    reading: 'すぽーつ',
    romaji: 'supootsu',
    meaning: 'sports, athletics',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-714-1', sentence: '週末によく色々なスポーツをします。', furigana: 'しゅうまつ に よく いろいろ な スポーツ を します。', romaji: 'Shuumatsu ni yoku iroiro na supootsu o shimasu.', english: 'I often play various sports on weekends.' },
      { id: 'ws-n5-714-2', sentence: 'どんなスポーツが好きですか。', furigana: 'どんな スポーツ が すき です か。', romaji: 'Donna supootsu ga suki desu ka.', english: 'What kind of sports do you like?' }
    ]
  },
  {
    id: 'w-n5-715',
    word: 'サッカー',
    reading: 'さっかー',
    romaji: 'sakkaa',
    meaning: 'soccer, football',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-715-1', sentence: '放課後に公園でサッカーをしました。', furigana: 'ほうかご に こうえん で サッカー を しました。', romaji: 'Houkago ni kouen de sakkaa o shimashita.', english: 'After school I played soccer in the park.' },
      { id: 'ws-n5-715-2', sentence: 'テレビでサッカーの試合を見ます。', furigana: 'テレビ で サッカー の しあい を みます。', romaji: 'Terebi de sakkaa no shiai o mimasu.', english: 'I watch the soccer match on television.' }
    ]
  },
  {
    id: 'w-n5-716',
    word: '野球',
    reading: 'やきゅう',
    romaji: 'yakyuu',
    meaning: 'baseball',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "野", "meaning": "Field"}, {"char": "球", "meaning": "Ball"}],
    sentences: [
      { id: 'ws-n5-716-1', sentence: '日本では野球がとても人気があります。', furigana: 'にほん で は やきゅう が とても にんき が あります。', romaji: 'Nihon de wa yakyuu ga totemo ninki ga arimasu.', english: 'Baseball is very popular in Japan.' },
      { id: 'ws-n5-716-2', sentence: '日曜日に友達と野球をします。', furigana: 'にちようび に ともだち と やきゅう を します。', romaji: 'Nichiyoubi ni tomodachi to yakyuu o shimasu.', english: 'I play baseball with friends on Sunday.' }
    ]
  },
  {
    id: 'w-n5-717',
    word: 'テニス',
    reading: 'てにす',
    romaji: 'tenisu',
    meaning: 'tennis',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-717-1', sentence: 'テニスコートでテニスを練習しました。', furigana: 'テニスコート で テニス を れんしゅう しました。', romaji: 'Tenisukooto de tenisu o renshuu shimashita.', english: 'I practiced tennis on the tennis court.' },
      { id: 'ws-n5-717-2', sentence: '一緒にテニスをしませんか。', furigana: 'いっしょ に テニス を しません か。', romaji: 'Issho ni tenisu o shimasen ka.', english: 'Won\'t you play tennis together with me?' }
    ]
  },
  {
    id: 'w-n5-718',
    word: 'スキー',
    reading: 'すきー',
    romaji: 'sukii',
    meaning: 'skiing, skis',
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-718-1', sentence: '冬に北海道へスキーに行きました。', furigana: 'ふゆ に ほっかいどう へ スキー に いきました。', romaji: 'Fuyu ni Hokkaidou e sukii ni ikimashita.', english: 'In winter I went skiing in Hokkaido.' },
      { id: 'ws-n5-718-2', sentence: 'スキーはとても面白いスポーツです。', furigana: 'スキー は とても おもしろい スポーツ です。', romaji: 'Sukii wa totemo omoshiroi supootsu desu.', english: 'Skiing is a very interesting sport.' }
    ]
  },
  {
    id: 'w-n5-719',
    word: '青い',
    reading: 'あおい',
    romaji: 'aoi',
    meaning: "blue",
    pos: 'adjective',
    posLabel: 'I-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "青", "meaning": "Blue"}],
    sentences: [
      { id: 'ws-n5-719-1', sentence: '今日の空はとても青いです。', furigana: 'きょう の そら は とても あおい です。', romaji: 'Kyou no sora wa totemo aoi desu.', english: 'Today\'s sky is very blue.' },
      { id: 'ws-n5-719-2', sentence: 'デパートで青いシャツを買いました。', furigana: 'デパート で あおい シャツ を かいました。', romaji: 'Depaato de aoi shatsu o kaimashita.', english: 'I bought a blue shirt at the department store.' }
    ]
  },
  {
    id: 'w-n5-720',
    word: '犬',
    reading: 'いぬ',
    romaji: 'inu',
    meaning: "dog",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "犬", "meaning": "Dog"}],
    sentences: [
      { id: 'ws-n5-720-1', sentence: '公園でかわいい犬を散歩させました。', furigana: 'こうえん で かわいい いぬ を さんぽ させました。', romaji: 'Kouen de kawaii inu o sanpo sasemashita.', english: 'I walked a cute dog in the park.' },
      { id: 'ws-n5-720-2', sentence: '私の家には白い犬が一匹います。', furigana: 'わたし の いえ に は しろい いぬ が いっぴき います。', romaji: 'Watashi no ie ni wa shiroi inu ga ippiki imasu.', english: 'There is one white dog at my house.' }
    ]
  },
  {
    id: 'w-n5-721',
    word: '今',
    reading: 'いま',
    romaji: 'ima',
    meaning: "now",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "今", "meaning": "Now"}],
    sentences: [
      { id: 'ws-n5-721-1', sentence: '今何時何分ですか。', furigana: 'いま なんじ なんぷん です か。', romaji: 'Ima nanji nanpun desu ka.', english: 'What time is it now?' },
      { id: 'ws-n5-721-2', sentence: '私は今、日本語を勉強しています。', furigana: 'わたし は いま、にほんご を べんきょう して います。', romaji: 'Watashi wa ima, Nihongo o benkyou shite imasu.', english: 'I am studying Japanese right now.' }
    ]
  },
  {
    id: 'w-n5-722',
    word: 'いい',
    reading: 'いい',
    romaji: 'ii',
    meaning: "good / nice",
    pos: 'adjective',
    posLabel: 'I-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "良", "meaning": "Good / Nice"}],
    sentences: [
      { id: 'ws-n5-722-1', sentence: '今日はとてもいい天気ですね。', furigana: 'きょう は とても いい てんき です ね。', romaji: 'Kyou wa totemo ii tenki desu ne.', english: 'It is very nice weather today, isn\'t it?' },
      { id: 'ws-n5-722-2', sentence: 'これはとてもいいアイデアだと思います。', furigana: 'これ は とても いい アイデア だ と おもいます。', romaji: 'Kore wa totemo ii aidea da to omoimasu.', english: 'I think this is a very good idea.' }
    ]
  },
  {
    id: 'w-n5-723',
    word: '言う',
    reading: 'いう',
    romaji: 'iu',
    meaning: "to say / speak",
    pos: 'verb',
    posLabel: 'Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "言", "meaning": "To say / speak"}],
    sentences: [
      { id: 'ws-n5-723-1', sentence: '先生に「おはようございます」と言いました。', furigana: 'せんせい に「おはよう ございます」と いいました。', romaji: 'Sensei ni "ohayou gozaimasu" to iimashita.', english: 'I said "good morning" to the teacher.' },
      { id: 'ws-n5-723-2', sentence: '日本語で何と言いますか。', furigana: 'にほんご で なん と いいます か。', romaji: 'Nihongo de nan to iimasu ka.', english: 'What do you say in Japanese?' }
    ]
  },
  {
    id: 'w-n5-724',
    word: '一',
    reading: 'いち',
    romaji: 'ichi',
    meaning: "one",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "一", "meaning": "One"}],
    sentences: [
      { id: 'ws-n5-724-1', sentence: '一から十まで日本語で数えました。', furigana: 'いち から じゅう まで にほんご で かぞえました。', romaji: 'Ichi kara juu made Nihongo de kazoemashita.', english: 'I counted from one to ten in Japanese.' },
      { id: 'ws-n5-724-2', sentence: '一時半に駅の前で会いましょう。', furigana: 'いちじはん に えき の まえ で あいましょう。', romaji: 'Ichijihan ni eki no mae de aimashou.', english: 'Let\'s meet in front of the station at 1:30.' }
    ]
  },
  {
    id: 'w-n5-725',
    word: '居る',
    reading: 'いる',
    romaji: 'iru',
    meaning: "to exist (living thing)",
    pos: 'verb',
    posLabel: 'Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "居", "meaning": "To exist (living thing)"}],
    sentences: [
      { id: 'ws-n5-725-1', sentence: '教室に田中さんが居ます。', furigana: 'きょうしつ に たなかさん が います。', romaji: 'Kyoushitsu ni Tanaka-san ga imasu.', english: 'Tanaka-san is in the classroom.' },
      { id: 'ws-n5-725-2', sentence: '庭にかわいい猫が居ます。', furigana: 'にわ に かわいい ねこ が います。', romaji: 'Niwa ni kawaii neko ga imasu.', english: 'There is a cute cat in the garden.' }
    ]
  },
  {
    id: 'w-n5-726',
    word: '要る',
    reading: 'いる',
    romaji: 'iru',
    meaning: "to need",
    pos: 'verb',
    posLabel: 'Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "要", "meaning": "To need"}],
    sentences: [
      { id: 'ws-n5-726-1', sentence: 'パスポートの申請に写真が要ります。', furigana: 'パスポート の しんせい に しゃしん が いります。', romaji: 'Pasupooto no shinsei ni shashin ga irimasu.', english: 'A photograph is needed for passport application.' },
      { id: 'ws-n5-726-2', sentence: 'この書類にサインが要りますか。', furigana: 'この しょるい に サイン が いります か。', romaji: 'Kono shorui ni sain ga irimasu ka.', english: 'Is a signature needed on this document?' }
    ]
  },
  {
    id: 'w-n5-727',
    word: '急ぐ',
    reading: 'いそぐ',
    romaji: 'isogu',
    meaning: "to hurry",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "急", "meaning": "To hurry"}],
    sentences: [
      { id: 'ws-n5-727-1', sentence: '時間に遅れるので、急いで駅へ行きます。', furigana: 'じかん に おくれる ので、いそいで えき へ いきます。', romaji: 'Jikan ni okureru node, isoide eki e ikimasu.', english: 'Because I will be late, I hurry to the station.' },
      { id: 'ws-n5-727-2', sentence: '急いで宿題を終わらせましょう。', furigana: 'いそいで しゅくだい を おわらせましょう。', romaji: 'Isoide shukudai o owarasemashou.', english: 'Let\'s hurry and finish our homework.' }
    ]
  },
  {
    id: 'w-n5-728',
    word: '一緒',
    reading: 'いっしょ',
    romaji: 'issho',
    meaning: "together",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "一", "meaning": "Together"}, {"char": "緒", "meaning": "Together"}],
    sentences: [
      { id: 'ws-n5-728-1', sentence: '友達と一緒にデパートへ行きました。', furigana: 'ともだち と いっしょ に デパート へ いきました。', romaji: 'Tomodachi to issho ni depaato e ikimashita.', english: 'I went to the department store together with my friend.' },
      { id: 'ws-n5-728-2', sentence: 'みんなで一緒にお弁当を食べましょう。', furigana: 'みんな で いっしょ に おべんとう を たべましょう。', romaji: 'Minna de issho ni obentou o tabemashou.', english: 'Let\'s eat lunchboxes together with everyone.' }
    ]
  },
  {
    id: 'w-n5-729',
    word: '色',
    reading: 'いろ',
    romaji: 'iro',
    meaning: "color",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "色", "meaning": "Color"}],
    sentences: [
      { id: 'ws-n5-729-1', sentence: '何の色が一番好きですか。', furigana: 'なに の いろ が いちばん すき です か。', romaji: 'Nani no iro ga ichiban suki desu ka.', english: 'What color do you like the best?' },
      { id: 'ws-n5-729-2', sentence: 'この服はとてもきれいな色をしています。', furigana: 'この ふく は とても きれい な いろ を して います。', romaji: 'Kono fuku wa totemo kirei na iro o shite imasu.', english: 'These clothes have a very pretty color.' }
    ]
  },
  {
    id: 'w-n5-730',
    word: '牛',
    reading: 'うし',
    romaji: 'ushi',
    meaning: "cow",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "牛", "meaning": "Cow"}],
    sentences: [
      { id: 'ws-n5-730-1', sentence: '牧場でたくさんの牛を見ました。', furigana: 'ぼくじょう で たくさん の うし を みました。', romaji: 'Bokujou de takusan no ushi o mimashita.', english: 'I saw many cows on the farm.' },
      { id: 'ws-n5-730-2', sentence: '牛のミルクから美味しいチーズを作ります。', furigana: 'うし の ミルク から おいしい チーズ を つくります。', romaji: 'Ushi no miruku kara oishii chiizu o tsukurimasu.', english: 'We make delicious cheese from cow\'s milk.' }
    ]
  },
  {
    id: 'w-n5-731',
    word: '生まれる',
    reading: 'うまれる',
    romaji: 'umareru',
    meaning: "to be born",
    pos: 'verb',
    posLabel: 'Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "生", "meaning": "To be born"}],
    sentences: [
      { id: 'ws-n5-731-1', sentence: '私は日本で生まれました。', furigana: 'わたし は にほん で うまれました。', romaji: 'Watashi wa Nihon de umaremashita.', english: 'I was born in Japan.' },
      { id: 'ws-n5-731-2', sentence: '先月、妹の赤ちゃんが生まれました。', furigana: 'せんげつ、いもうと の あかちゃん が うまれました。', romaji: 'Sengetsu, imouto no akachan ga umaremashita.', english: 'Last month, my younger sister\'s baby was born.' }
    ]
  },
  {
    id: 'w-n5-732',
    word: '美しい',
    reading: 'うつくしい',
    romaji: 'utsukushii',
    meaning: "beautiful",
    pos: 'adjective',
    posLabel: 'I-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "美", "meaning": "Beautiful"}],
    sentences: [
      { id: 'ws-n5-732-1', sentence: '公園に美しい花がたくさん咲いています。', furigana: 'こうえん に うつくしい はな が たくさん さいて います。', romaji: 'Kouen ni utsukushii hana ga takusan saite imasu.', english: 'Many beautiful flowers are blooming in the park.' },
      { id: 'ws-n5-732-2', sentence: '富士山はとても美しい山です。', furigana: 'ふじさん は とても うつくしい やま です。', romaji: 'Fujisan wa totemo utsukushii yama desu.', english: 'Mount Fuji is a very beautiful mountain.' }
    ]
  },
  {
    id: 'w-n5-733',
    word: '動く',
    reading: 'うごく',
    romaji: 'ugoku',
    meaning: "to move",
    pos: 'verb',
    posLabel: 'Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "動", "meaning": "To move"}],
    sentences: [
      { id: 'ws-n5-733-1', sentence: '電車がゆっくり動き始めました。', furigana: 'でんしゃ が ゆっくり うごき はじめました。', romaji: 'Densha ga yukkuri ugoki hajimemashita.', english: 'The train slowly began to move.' },
      { id: 'ws-n5-733-2', sentence: '機械が正常に動いています。', furigana: 'きかい が せいじょう に うごいて います。', romaji: 'Kikai ga seijou ni ugoite imasu.', english: 'The machine is running normally.' }
    ]
  },
  {
    id: 'w-n5-734',
    word: '雨天',
    reading: 'うてん',
    romaji: 'uten',
    meaning: "rainy weather",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "雨", "meaning": "Rainy weather"}, {"char": "天", "meaning": "Rainy weather"}],
    sentences: [
      { id: 'ws-n5-734-1', sentence: '雨天のため、サッカーの試合は中止になりました。', furigana: 'うてん の ため、サッカー の しあい は ちゅうし に なりました。', romaji: 'Uten no tame, sakkaa no shiai wa chuushi ni narimashita.', english: 'Due to rainy weather, the soccer match was canceled.' },
      { id: 'ws-n5-734-2', sentence: '雨天の日は家でゆっくり読書をします。', furigana: 'うてん の ひ は いえ で ゆっくり どくしょ を します。', romaji: 'Uten no hi wa ie de yukkuri dokusho o shimasu.', english: 'On rainy days I read books leisurely at home.' }
    ]
  },
  {
    id: 'w-n5-735',
    word: '馬',
    reading: 'うま',
    romaji: 'uma',
    meaning: "horse",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "馬", "meaning": "Horse"}],
    sentences: [
      { id: 'ws-n5-735-1', sentence: '牧場で大きな馬に乗りました。', furigana: 'ぼくじょう で おおきな うま に のりました。', romaji: 'Bokujou de ookina uma ni norimashita.', english: 'I rode a big horse at the farm.' },
      { id: 'ws-n5-735-2', sentence: '馬が草を美味しそうに食べています。', furigana: 'うま が くさ を おいしそう に たべて います。', romaji: 'Uma ga kusa o oishisou ni tabete imasu.', english: 'The horse is eating grass with relish.' }
    ]
  },
  {
    id: 'w-n5-736',
    word: '上手い',
    reading: 'うまい',
    romaji: 'umai',
    meaning: "skillful / delicious",
    pos: 'adjective',
    posLabel: 'I-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "上", "meaning": "Skillful / Delicious"}, {"char": "手", "meaning": "Skillful / Delicious"}],
    sentences: [
      { id: 'ws-n5-736-1', sentence: '母の手料理はとても上手いです。', furigana: 'はは の てりょうり は とても うまい です。', romaji: 'Haha no teryouri wa totemo umai desu.', english: 'My mother\'s home cooking is very delicious.' },
      { id: 'ws-n5-736-2', sentence: '彼はギターがとても上手いです。', furigana: 'かれ は ギター が とても うまい です。', romaji: 'Kare wa gitaa ga totemo umai desu.', english: 'He is very skillful at the guitar.' }
    ]
  },
  {
    id: 'w-n5-737',
    word: '運',
    reading: 'うん',
    romaji: 'un',
    meaning: "luck / fortune",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "運", "meaning": "Luck / Fortune"}],
    sentences: [
      { id: 'ws-n5-737-1', sentence: '今日は運がいい一日でした。', furigana: 'きょう は うん が いい ついたち でした。', romaji: 'Kyou wa un ga ii ichinichi deshita.', english: 'Today was a lucky day.' },
      { id: 'ws-n5-737-2', sentence: '運よく雨が止みました。', furigana: 'うん よく あめ が やみました。', romaji: 'Unyoku ame ga yamimashita.', english: 'Luckily the rain stopped.' }
    ]
  },
  {
    id: 'w-n5-738',
    word: '運転',
    reading: 'うんてん',
    romaji: 'unten',
    meaning: "driving",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "運", "meaning": "Driving"}, {"char": "転", "meaning": "Driving"}],
    sentences: [
      { id: 'ws-n5-738-1', sentence: '父は毎日安全に車を運転します。', furigana: 'ちち は まいにち あんぜん に くるま を うんてん します。', romaji: 'Chichi wa mainichi anzen ni kuruma o unten shimasu.', english: 'My father drives the car safely every day.' },
      { id: 'ws-n5-738-2', sentence: '運転免許を取るために練習しています。', furigana: 'うんてんめんきょ を とる ため に れんしゅう して います。', romaji: 'Unten menkyo o toru tame ni renshuu shite imasu.', english: 'I am practicing to get a driver\'s license.' }
    ]
  },
  {
    id: 'w-n5-739',
    word: '運動',
    reading: 'うんどう',
    romaji: 'undou',
    meaning: "exercise / sports",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "運", "meaning": "Exercise / Sports"}, {"char": "動", "meaning": "Exercise / Sports"}],
    sentences: [
      { id: 'ws-n5-739-1', sentence: '健康のために毎朝運動をしています。', furigana: 'けんこう の ため に まいあさ うんどう を して います。', romaji: 'Kenkou no tame ni maiasa undou o shite imasu.', english: 'For my health, I exercise every morning.' },
      { id: 'ws-n5-739-2', sentence: '軽い運動をして気分が良くなりました。', furigana: 'かるい うんどう を して きぶん が よく なりました。', romaji: 'Karui undou o shite kibun ga yoku narimashita.', english: 'I did some light exercise and felt better.' }
    ]
  },
  {
    id: 'w-n5-740',
    word: '受ける',
    reading: 'うける',
    romaji: 'ukeru',
    meaning: "to take / receive",
    pos: 'verb',
    posLabel: 'Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "受", "meaning": "To take / receive"}],
    sentences: [
      { id: 'ws-n5-740-1', sentence: '来週日本語能力試験を受けます。', furigana: 'らいしゅう にほんご のうりょく しけん を うけます。', romaji: 'Raishuu Nihongo nouryoku shiken o ukemasu.', english: 'I will take the Japanese Language Proficiency Test next week.' },
      { id: 'ws-n5-740-2', sentence: '先生からアドバイスを受けました。', furigana: 'せんせい から アドバイス を うけました。', romaji: 'Sensei kara adobaisu o ukemashita.', english: 'I received advice from my teacher.' }
    ]
  },
  {
    id: 'w-n5-741',
    word: '嘘',
    reading: 'うそ',
    romaji: 'uso',
    meaning: "lie",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "嘘", "meaning": "Lie"}],
    sentences: [
      { id: 'ws-n5-741-1', sentence: '嘘をついてはいけません。', furigana: 'うそ を ついて は いけません。', romaji: 'Uso o tsuite wa ikemasen.', english: 'You must not tell lies.' },
      { id: 'ws-n5-741-2', sentence: 'それは嘘ではありません、本当です。', furigana: 'それ は うそ で は ありません、ほんとう です。', romaji: 'Sore wa uso de wa arimasen, hontou desu.', english: 'That is not a lie, it is true.' }
    ]
  },
  {
    id: 'w-n5-742',
    word: '宇宙',
    reading: 'うちゅう',
    romaji: 'uchuu',
    meaning: "universe / space",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "宇", "meaning": "Universe / Space"}, {"char": "宙", "meaning": "Universe / Space"}],
    sentences: [
      { id: 'ws-n5-742-1', sentence: 'テレビで宇宙の写真を見ました。', furigana: 'テレビ で うちゅう の しゃしん を みました。', romaji: 'Terebi de uchuu no shashin o mimashita.', english: 'I saw photos of space on television.' },
      { id: 'ws-n5-742-2', sentence: '将来は宇宙飛行士になりたいです。', furigana: 'しょうらい は うちゅうひこうし に なりたい です。', romaji: 'Shourai wa uchuuhikoushi ni naritai desu.', english: 'In the future I want to become an astronaut.' }
    ]
  },
  {
    id: 'w-n5-743',
    word: '絵',
    reading: 'え',
    romaji: 'e',
    meaning: "picture / painting",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "絵", "meaning": "Picture / Painting"}],
    sentences: [
      { id: 'ws-n5-743-1', sentence: '週末にきれいな風景の絵を描きました。', furigana: 'しゅうまつ に きれい な ふうけい の え を かきました。', romaji: 'Shuumatsu ni kirei na fuukei no e o kakimashita.', english: 'On the weekend I drew a picture of beautiful scenery.' },
      { id: 'ws-n5-743-2', sentence: '部屋の壁に花の絵が飾ってあります。', furigana: 'へや の かべ に はな の え が かざって あります。', romaji: 'Heya no kabe ni hana no e ga kazatte arimasu.', english: 'A painting of flowers is displayed on the room wall.' }
    ]
  },
  {
    id: 'w-n5-744',
    word: '選ぶ',
    reading: 'えらぶ',
    romaji: 'erabu',
    meaning: "to choose / select",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "選", "meaning": "To choose / select"}],
    sentences: [
      { id: 'ws-n5-744-1', sentence: '好きな色を選んでください。', furigana: 'すき な いろ を えらんで ください。', romaji: 'Suki na iro o erande kudasai.', english: 'Please choose your favorite color.' },
      { id: 'ws-n5-744-2', sentence: '本屋で面白い小説を一冊選びました。', furigana: 'ほんや で おもしろい しょうせつ を いっさつ えらびました。', romaji: 'Hon\'ya de omoshiroi shousetsu o issatsu erabimashita.', english: 'I chose one interesting novel at the bookstore.' }
    ]
  },
  {
    id: 'w-n5-745',
    word: '絵の具',
    reading: 'えのぐ',
    romaji: 'enogu',
    meaning: "colors / paints",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "絵", "meaning": "Colors / Paints"}, {"char": "具", "meaning": "Colors / Paints"}],
    sentences: [
      { id: 'ws-n5-745-1', sentence: '赤と青の絵の具を使って絵を描きます。', furigana: 'あか と あお の えのぐ を つかって え を かきます。', romaji: 'Aka to ao no enogu o tsukatte e o kakimasu.', english: 'I use red and blue paints to paint a picture.' },
      { id: 'ws-n5-745-2', sentence: '文房具屋で新しい絵の具を買いました。', furigana: 'ぶんぼうぐや で あたらしい えのぐ を かいました。', romaji: 'Bunbouguya de atarashii enogu o kaimashita.', english: 'I bought new paints at the stationery store.' }
    ]
  },
  {
    id: 'w-n5-746',
    word: '影響',
    reading: 'えいきょう',
    romaji: 'eikyou',
    meaning: "influence",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "影", "meaning": "Influence"}, {"char": "響", "meaning": "Influence"}],
    sentences: [
      { id: 'ws-n5-746-1', sentence: '大雨の影響で電車が遅れました。', furigana: 'おおあめ の えいきょう で でんしゃ が おくれました。', romaji: 'Ooame no eikyou de densha ga okuremashita.', english: 'Due to the influence of heavy rain, the train was delayed.' },
      { id: 'ws-n5-746-2', sentence: '兄の影響で日本の漫画が好きになりました。', furigana: 'あに の えいきょう で にほん の まんが が すき に なりました。', romaji: 'Ani no eikyou de Nihon no manga ga suki ni narimashita.', english: 'Under my brother\'s influence, I grew fond of Japanese manga.' }
    ]
  },
  {
    id: 'w-n5-747',
    word: '永遠',
    reading: 'えいえん',
    romaji: 'eien',
    meaning: "eternity / forever",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "永", "meaning": "Eternity / Forever"}, {"char": "遠", "meaning": "Eternity / Forever"}],
    sentences: [
      { id: 'ws-n5-747-1', sentence: '私たちの友情は永遠です。', furigana: 'わたしたち の ゆうじょう は えいえん です。', romaji: 'Watashitachi no yuujou wa eien desu.', english: 'Our friendship is forever.' },
      { id: 'ws-n5-747-2', sentence: '日本での楽しい思い出を永遠に忘れません。', furigana: 'にほん での たのしい おもいで を えいえん に わすれません。', romaji: 'Nihon deno tanoshii omoide o eien ni wasuremasen.', english: 'I will never forget the pleasant memories in Japan.' }
    ]
  },
  {
    id: 'w-n5-748',
    word: '栄養',
    reading: 'えいよう',
    romaji: 'eiyou',
    meaning: "nutrition",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "栄", "meaning": "Nutrition"}, {"char": "養", "meaning": "Nutrition"}],
    sentences: [
      { id: 'ws-n5-748-1', sentence: '新鮮な野菜には栄養がたくさんあります。', furigana: 'しんせん な やさい に は えいよう が たくさん あります。', romaji: 'Shinsen na yasai ni wa eiyou ga takusan arimasu.', english: 'Fresh vegetables have a lot of nutrition.' },
      { id: 'ws-n5-748-2', sentence: '健康のために栄養がある料理を食べましょう。', furigana: 'けんこう の ため に えいよう が ある りょうり を たべましょう。', romaji: 'Kenkou no tame ni eiyou ga aru ryouri o tabemashou.', english: 'Let\'s eat nutritious food for good health.' }
    ]
  },
  {
    id: 'w-n5-749',
    word: '営業',
    reading: 'えいぎょう',
    romaji: 'eigyou',
    meaning: "business hours / sales",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "営", "meaning": "Business hours / Sales"}, {"char": "業", "meaning": "Business hours / Sales"}],
    sentences: [
      { id: 'ws-n5-749-1', sentence: 'このデパートは夜八時まで営業しています。', furigana: 'この デパート は よる はちじ まで えいぎょう して います。', romaji: 'Kono depaato wa yoru hachiji made eigyou shite imasu.', english: 'This department store is open until 8:00 PM.' },
      { id: 'ws-n5-749-2', sentence: '日曜日は営業していません。', furigana: 'にちようび は えいぎょう して いません。', romaji: 'Nichiyoubi wa eigyou shite imasen.', english: 'It is not open on Sundays.' }
    ]
  },
  {
    id: 'w-n5-750',
    word: '衛生',
    reading: 'えいせい',
    romaji: 'eisei',
    meaning: "hygiene / sanitation",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "衛", "meaning": "Hygiene / Sanitation"}, {"char": "生", "meaning": "Hygiene / Sanitation"}],
    sentences: [
      { id: 'ws-n5-750-1', sentence: '食事の前に手を洗って衛生に気をつけます。', furigana: 'しょくじ の まえ に て を あらって えいせい に き を つけます。', romaji: 'Shokuji no mae ni te o aratte eisei ni ki o tsukemasu.', english: 'Before meals I wash my hands and pay attention to hygiene.' },
      { id: 'ws-n5-750-2', sentence: 'このレストランは衛生管理がとても良いです。', furigana: 'この レストラン は えいせいかんり が とても よい です。', romaji: 'Kono resutoran wa eiseikanri ga totemo yoi desu.', english: 'This restaurant\'s sanitation management is very good.' }
    ]
  },
  {
    id: 'w-n5-751',
    word: '笑顔',
    reading: 'えがお',
    romaji: 'egao',
    meaning: "smiling face",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "笑", "meaning": "Smiling face"}, {"char": "顔", "meaning": "Smiling face"}],
    sentences: [
      { id: 'ws-n5-751-1', sentence: '彼女はいつも明るい笑顔で挨拶してくれます。', furigana: 'かのじょ は いつも あかるい えがお で あいさつ して くれます。', romaji: 'Kanojo wa itsumo akarui egao de aisatsu shite kuremasu.', english: 'She always greets me with a bright smiling face.' },
      { id: 'ws-n5-751-2', sentence: '赤ちゃんの笑顔を見てとても嬉しくなりました。', furigana: 'あかちゃん の えがお を みて とても うれしく なりました。', romaji: 'Akachan no egao o mite totemo ureshiku narimashita.', english: 'Seeing the baby\'s smile made me very happy.' }
    ]
  },
  {
    id: 'w-n5-752',
    word: '枝',
    reading: 'えだ',
    romaji: 'eda',
    meaning: "branch / twig",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "枝", "meaning": "Branch / Twig"}],
    sentences: [
      { id: 'ws-n5-752-1', sentence: '木の枝に小さな鳥がとまっています。', furigana: 'き の えだ に ちいさな とり が とまって います。', romaji: 'Ki no eda ni chiisana tori ga tomatte imasu.', english: 'A small bird is perched on the tree branch.' },
      { id: 'ws-n5-752-2', sentence: '庭の木の長い枝をハサミで切りました。', furigana: 'にわ の き の ながい えだ を ハサミ で きりました。', romaji: 'Niwa no ki no nagai eda o hasami de kirimashita.', english: 'I cut the long tree branches in the garden with scissors.' }
    ]
  },
  {
    id: 'w-n5-753',
    word: '枝豆',
    reading: 'えだまめ',
    romaji: 'edamame',
    meaning: "green soybeans",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "枝", "meaning": "Green soybeans"}, {"char": "豆", "meaning": "Green soybeans"}],
    sentences: [
      { id: 'ws-n5-753-1', sentence: '居酒屋で美味しい枝豆を食べました。', furigana: 'いざかや で おいしい えだまめ を たべました。', romaji: 'Izakaya de oishii edamame o tabemashita.', english: 'I ate delicious edamame at the izakaya.' },
      { id: 'ws-n5-753-2', sentence: '夏にはビールと塩茹での枝豆が合います。', furigana: 'なつ に は ビール と しおゆで の えだまめ が あいます。', romaji: 'Natsu ni wa biiru to shioyude no edamame ga aimasu.', english: 'In summer, beer and salted edamame go well together.' }
    ]
  },
  {
    id: 'w-n5-754',
    word: '偉い',
    reading: 'えらい',
    romaji: 'erai',
    meaning: "great / admirable",
    pos: 'adjective',
    posLabel: 'I-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "偉", "meaning": "Great / Admirable"}],
    sentences: [
      { id: 'ws-n5-754-1', sentence: '毎日朝早く起きて勉強して偉いですね。', furigana: 'まいにち あさはやく おきて べんきょう して えらい です ね。', romaji: 'Mainichi asahayaku okite benkyou shite erai desu ne.', english: 'You wake up early every day to study, how admirable!' },
      { id: 'ws-n5-754-2', sentence: '彼は国のために働く偉い人になりました。', furigana: 'かれ は くに の ため に はたらく えらい ひと に なりました。', romaji: 'Kare wa kuni no tame ni hataraku erai hito ni narimashita.', english: 'He became a great person who works for his country.' }
    ]
  },
  {
    id: 'w-n5-755',
    word: '得る',
    reading: 'える',
    romaji: 'eru',
    meaning: "to obtain / gain",
    pos: 'verb',
    posLabel: 'Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "得", "meaning": "To obtain / gain"}],
    sentences: [
      { id: 'ws-n5-755-1', sentence: '本をたくさん読んで新しい知識を得ました。', furigana: 'ほん を たくさん よんで あたらしい ちしき を えました。', romaji: 'Hon o takusan yonde atarashii chishiki o emashita.', english: 'I read many books and gained new knowledge.' },
      { id: 'ws-n5-755-2', sentence: '先輩から役に立つアドバイスを得ました。', furigana: 'せんぱい から やくにたつ アドバイス を えました。', romaji: 'Senpai kara yakunitatsu adobaisu o emashita.', english: 'I obtained helpful advice from my senior.' }
    ]
  },
  {
    id: 'w-n5-756',
    word: '援助',
    reading: 'えんじょ',
    romaji: 'enjo',
    meaning: "assistance / aid",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "援", "meaning": "Assistance / Aid"}, {"char": "助", "meaning": "Assistance / Aid"}],
    sentences: [
      { id: 'ws-n5-756-1', sentence: '地震で困っている人々に援助をします。', furigana: 'じしん で こまって いる ひとびと に えんじょ を します。', romaji: 'Jishin de komatte iru hitobito ni enjo o shimasu.', english: 'We provide assistance to people troubled by the earthquake.' },
      { id: 'ws-n5-756-2', sentence: '政府からの生活援助を受けました。', furigana: 'せいふ から の せいかつ えんじょ を うけました。', romaji: 'Seifu kara no seikatsu enjo o ukemashita.', english: 'We received livelihood assistance from the government.' }
    ]
  },
  {
    id: 'w-n5-757',
    word: '遠慮',
    reading: 'えんりょ',
    romaji: 'enryo',
    meaning: "hesitation / restraint",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "遠", "meaning": "Hesitation / Restraint"}, {"char": "慮", "meaning": "Hesitation / Restraint"}],
    sentences: [
      { id: 'ws-n5-757-1', sentence: 'どうぞ遠慮しないでたくさん食べてください。', furigana: 'どうぞ えんりょ しないで たくさん たべて ください。', romaji: 'Douzo enryo shinaide takusan tabete kudasai.', english: 'Please eat plenty without hesitating.' },
      { id: 'ws-n5-757-2', sentence: '車内での通話はご遠慮ください。', furigana: 'しゃない での つうわ は ごえんりょ ください。', romaji: 'Shanai deno tsuuwa wa go-enryo kudasai.', english: 'Please refrain from phone calls inside the train.' }
    ]
  },
  {
    id: 'w-n5-758',
    word: '送る',
    reading: 'おくる',
    romaji: 'okuru',
    meaning: "to send",
    pos: 'verb',
    posLabel: 'Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "送", "meaning": "To send"}],
    sentences: [
      { id: 'ws-n5-758-1', sentence: '郵便局から友達に手紙を送りました。', furigana: 'ゆうびんきょく から ともだち に てがみ を おくりました。', romaji: 'Yuubinkyoku kara tomodachi ni tegami o okurimashita.', english: 'I sent a letter to my friend from the post office.' },
      { id: 'ws-n5-758-2', sentence: '国にいる家族に荷物を送ります。', furigana: 'くに に いる かぞく に にもつ を おくります。', romaji: 'Kuni ni iru kazoku ni nimotsu o okurimasu.', english: 'I will send a package to my family back home.' }
    ]
  },
  {
    id: 'w-n5-759',
    word: '落ちる',
    reading: 'おちる',
    romaji: 'ochiru',
    meaning: "to fall / drop",
    pos: 'verb',
    posLabel: 'Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "落", "meaning": "To fall / drop"}],
    sentences: [
      { id: 'ws-n5-759-1', sentence: '秋になって木から葉が落ちました。', furigana: 'あき に なって き から は が おちました。', romaji: 'Aki ni natte ki kara ha ga ochimashita.', english: 'Autumn came and leaves fell from the trees.' },
      { id: 'ws-n5-759-2', sentence: 'ポケットから大切な鍵が落ちました。', furigana: 'ポケット から たいせつ な かぎ が おちました。', romaji: 'Poketto kara taisetsu na kagi ga ochimashita.', english: 'My important key dropped from my pocket.' }
    ]
  },
  {
    id: 'w-n5-760',
    word: '夫',
    reading: 'おっと',
    romaji: 'otto',
    meaning: "husband",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "夫", "meaning": "Husband"}],
    sentences: [
      { id: 'ws-n5-760-1', sentence: '私の夫は毎朝七時に出勤します。', furigana: 'わたし の おっと は まいあさ しちじ に しゅっきん します。', romaji: 'Watashi no otto wa maiasa shichiji ni shukkin shimasu.', english: 'My husband goes to work at 7:00 every morning.' },
      { id: 'ws-n5-760-2', sentence: '週末は夫と一緒にスーパーへ買い物に行きます。', furigana: 'しゅうまつ は おっと と いっしょ に スーパー へ かいもの に いきます。', romaji: 'Shuumatsu wa otto to issho ni suupaa e kaimono ni ikimasu.', english: 'On weekends I go shopping at the supermarket with my husband.' }
    ]
  },
  {
    id: 'w-n5-761',
    word: '音',
    reading: 'おと',
    romaji: 'oto',
    meaning: "sound",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "音", "meaning": "Sound"}],
    sentences: [
      { id: 'ws-n5-761-1', sentence: '外から静かな雨の音が聞こえます。', furigana: 'そと から しずか な あめ の おと が きこえます。', romaji: 'Soto kara shizuka na ame no oto ga kikoemasu.', english: 'I can hear the quiet sound of rain from outside.' },
      { id: 'ws-n5-761-2', sentence: 'テレビの音が少し大きいです。', furigana: 'テレビ の おと が すこし おおきい です。', romaji: 'Terebi no oto ga sukoshi ookii desu.', english: 'The TV sound is a little too loud.' }
    ]
  },
  {
    id: 'w-n5-762',
    word: '四',
    reading: 'よん',
    romaji: 'yon',
    meaning: "four",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "四", "meaning": "Four"}],
    sentences: [
      { id: 'ws-n5-762-1', sentence: '机の上に本が四冊あります。', furigana: 'つくえ の うえ に ほん が よんさつ あります。', romaji: 'Tsukue no ue ni hon ga yonsatsu arimasu.', english: 'There are four books on the desk.' },
      { id: 'ws-n5-762-2', sentence: '今日の気温は四度で、とても寒いです。', furigana: 'きょう の きおん は よんど で、とても さむい です。', romaji: 'Kyou no kion wa yondo de, totemo samui desu.', english: 'Today\'s temperature is four degrees, so it is very cold.' }
    ]
  },
  {
    id: 'w-n5-763',
    word: '用意',
    reading: 'ようい',
    romaji: 'youi',
    meaning: "preparation / readiness",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "用", "meaning": "Preparation / Readiness"}, {"char": "意", "meaning": "Preparation / Readiness"}],
    sentences: [
      { id: 'ws-n5-763-1', sentence: '明日の旅行の用意を全部終わらせました。', furigana: 'あした の りょこう の ようい を ぜんぶ おわらせました。', romaji: 'Ashita no ryokou no youi o zenbu owarasemashita.', english: 'I completely finished preparations for tomorrow\'s trip.' },
      { id: 'ws-n5-763-2', sentence: '晩ご飯の用意がもうできました。', furigana: 'ばんごはん の ようい が もう できました。', romaji: 'Bangohan no youi ga mou dekimashita.', english: 'Dinner preparations are already done.' }
    ]
  },
  {
    id: 'w-n5-764',
    word: '用事',
    reading: 'ようじ',
    romaji: 'youji',
    meaning: "errand / business to do",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "用", "meaning": "Errand / Business to do"}, {"char": "事", "meaning": "Errand / Business to do"}],
    sentences: [
      { id: 'ws-n5-764-1', sentence: '今日は銀行へ行く用事があります。', furigana: 'きょう は ぎんこう へ いく ようじ が あります。', romaji: 'Kyou wa ginkou e iku youji ga arimasu.', english: 'I have an errand to go to the bank today.' },
      { id: 'ws-n5-764-2', sentence: '用事が終わったら、映画を見に行きましょう。', furigana: 'ようじ が おわったら、えいが を み に いきましょう。', romaji: 'Youji ga owattara, eiga o mi ni ikimashou.', english: 'When our errands are over, let\'s go see a movie.' }
    ]
  },
  {
    id: 'w-n5-765',
    word: '曜日',
    reading: 'ようび',
    romaji: 'youbi',
    meaning: "day of the week",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "曜", "meaning": "Day of the week"}, {"char": "日", "meaning": "Day of the week"}],
    sentences: [
      { id: 'ws-n5-765-1', sentence: '今日は何曜日ですか。', furigana: 'きょう は なんようび です か。', romaji: 'Kyou wa nanyoubi desu ka.', english: 'What day of the week is it today?' },
      { id: 'ws-n5-765-2', sentence: '私は月曜日から金曜日まで大学へ行きます。', furigana: 'わたし は げつようび から きんようび まで だいがく へ いきます。', romaji: 'Watashi wa getsuyoubi kara kinyoubi made daigaku e ikimasu.', english: 'I go to university from Monday to Friday.' }
    ]
  },
  {
    id: 'w-n5-766',
    word: '喜ぶ',
    reading: 'よろこぶ',
    romaji: 'yorokobu',
    meaning: "to be delighted",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "喜", "meaning": "To be delighted"}],
    sentences: [
      { id: 'ws-n5-766-1', sentence: '誕生日プレゼントをもらって子供が喜びました。', furigana: 'たんじょうび プレゼント を もらって こども が よろこびました。', romaji: 'Tanjoubi purezento o moratte kodomo ga yorokobimashita.', english: 'The child was delighted to receive a birthday present.' },
      { id: 'ws-n5-766-2', sentence: '合格の知らせを聞いて家族みんなで喜びました。', furigana: 'ごうかく の しらせ を きいて かぞく みんな で よろこびました。', romaji: 'Goukaku no shirase o kiite kazoku minna de yorokobimashita.', english: 'Hearing the passing result, the whole family rejoiced together.' }
    ]
  },
  {
    id: 'w-n5-767',
    word: 'よろしく',
    reading: 'よろしく',
    romaji: 'yoroshiku',
    meaning: "best regards / nice to meet you",
    pos: 'verb',
    posLabel: 'Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "宜", "meaning": "Best regards / Nice to meet you"}],
    sentences: [
      { id: 'ws-n5-767-1', sentence: '新しいクラスでもよろしくね。', furigana: 'あたらしい クラス でも よろしく ね。', romaji: 'Atarashii kurasu demo yoroshiku ne.', english: 'Best regards in our new class too!' },
      { id: 'ws-n5-767-2', sentence: '田中さんによろしくお伝えください。', furigana: 'たなかさん に よろしく おつたえ ください。', romaji: 'Tanaka-san ni yoroshiku otsutae kudasai.', english: 'Please give my best regards to Tanaka-san.' }
    ]
  },
  {
    id: 'w-n5-768',
    word: '弱気',
    reading: 'よわき',
    romaji: 'yowaki',
    meaning: "timid / weak-spirited",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "弱", "meaning": "Timid / Weak-spirited"}, {"char": "気", "meaning": "Timid / Weak-spirited"}],
    sentences: [
      { id: 'ws-n5-768-1', sentence: '試合の前でも弱気になってはいけません。', furigana: 'しあい の まえ でも よわき に なって は いけません。', romaji: 'Shiai no mae demo yowaki ni natte wa ikemasen.', english: 'You must not be timid even before the match.' },
      { id: 'ws-n5-768-2', sentence: '彼は少し弱気なことを言いました。', furigana: 'かれ は すこし よわき な こと を いいました。', romaji: 'Kare wa sukoshi yowaki na koto o iimashita.', english: 'He said something slightly timid.' }
    ]
  },
  {
    id: 'w-n5-769',
    word: '弱い',
    reading: 'よわい',
    romaji: 'yowai',
    meaning: "weak / fragile",
    pos: 'adjective',
    posLabel: 'I-Adjective',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "弱", "meaning": "Weak / Fragile"}],
    sentences: [
      { id: 'ws-n5-769-1', sentence: '病気の後で、体がまだ少し弱いです。', furigana: 'びょうき の あと で、からだ が まだ すこし よわい です。', romaji: 'Byouki no ato de, karada ga mada sukoshi yowai desu.', english: 'After illness, my body is still slightly weak.' },
      { id: 'ws-n5-769-2', sentence: '強い風の後に弱い雨が降ってきました。', furigana: 'つよい かぜ の あと に よわい あめ が ふって きました。', romaji: 'Tsuyoi kaze no ato ni yowai ame ga futte kimashita.', english: 'After strong winds, weak rain started falling.' }
    ]
  },
  {
    id: 'w-n5-770',
    word: '夜中',
    reading: 'よなか',
    romaji: 'yonaka',
    meaning: "midnight",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "夜", "meaning": "Midnight"}, {"char": "中", "meaning": "Midnight"}],
    sentences: [
      { id: 'ws-n5-770-1', sentence: '昨日は夜中の一時まで本を読んでいました。', furigana: 'きのう は よなか の いちじ まで ほん を よんで いました。', romaji: 'Kinou wa yonaka no ichiji made hon o yonde imashita.', english: 'Yesterday I was reading books until 1:00 AM at midnight.' },
      { id: 'ws-n5-770-2', sentence: '夜中に外で犬が吠えました。', furigana: 'よなか に そと で いぬ が ほえました。', romaji: 'Yonaka ni soto de inu ga hoemashita.', english: 'A dog barked outside in the middle of the night.' }
    ]
  },
  {
    id: 'w-n5-771',
    word: '汚れる',
    reading: 'よごれる',
    romaji: 'yogoreru',
    meaning: "to get dirty",
    pos: 'verb',
    posLabel: 'Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "汚", "meaning": "To get dirty"}],
    sentences: [
      { id: 'ws-n5-771-1', sentence: '雨の泥で白いズボンが汚れました。', furigana: 'あめ の どろ で しろい ズボン が よごれました。', romaji: 'Ame no doro de shiroi zubon ga yogoremashita.', english: 'My white trousers got dirty from rain mud.' },
      { id: 'ws-n5-771-2', sentence: '手が汚れたので、石鹸できれいに洗います。', furigana: 'て が よごれた ので、せっけん で きれい に あらいます。', romaji: 'Te ga yogoreta node, sekken de kirei ni araimasu.', english: 'Because my hands got dirty, I wash them clean with soap.' }
    ]
  },
  {
    id: 'w-n5-772',
    word: '予算',
    reading: 'よさん',
    romaji: 'yosan',
    meaning: "budget",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "予", "meaning": "Budget"}, {"char": "算", "meaning": "Budget"}],
    sentences: [
      { id: 'ws-n5-772-1', sentence: '今月の旅行の予算を五万円に決めました。', furigana: 'こんげつ の りょこう の よさん を ごまんえん に きめました。', romaji: 'Kongetsu no ryokou no yosan o goman\'en ni kimemashita.', english: 'I decided the budget for this month\'s trip to be 50,000 yen.' },
      { id: 'ws-n5-772-2', sentence: '予算に合わせて安いホテルを予約しました。', furigana: 'よさん に あわせて やすい ホテル を よやく しました。', romaji: 'Yosan ni awasete yasui hoteru o yoyaku shimashita.', english: 'I booked a cheap hotel according to the budget.' }
    ]
  },
  {
    id: 'w-n5-773',
    word: '寄り道',
    reading: 'よりみち',
    romaji: 'yorimichi',
    meaning: "side trip / detour",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "寄", "meaning": "Side trip / Detour"}, {"char": "道", "meaning": "Side trip / Detour"}],
    sentences: [
      { id: 'ws-n5-773-1', sentence: '学校の帰りに友達と本屋へ寄り道しました。', furigana: 'がっこう の かえり に ともだち と ほんや へ よりみち しました。', romaji: 'Gakkou no kaeri ni tomodachi to hon\'ya e yorimichi shimashita.', english: 'On the way home from school, I stopped by the bookstore with a friend.' },
      { id: 'ws-n5-773-2', sentence: '寄り道をしないで、まっすぐ家に帰ります。', furigana: 'よりみち を しないで、まっすぐ いえ に かえります。', romaji: 'Yorimichi o shinaide, massugu ie ni kaerimasu.', english: 'Without taking detours, I go straight home.' }
    ]
  },
  {
    id: 'w-n5-774',
    word: '休み',
    reading: 'やすみ',
    romaji: 'yasumi',
    meaning: "holiday / rest",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "休", "meaning": "Holiday / Rest"}],
    sentences: [
      { id: 'ws-n5-774-1', sentence: '明日は会社が休みなので、家でゆっくりします。', furigana: 'あした は かいしゃ が やすみ なので、いえ で ゆっくり します。', romaji: 'Ashita wa kaisha ga yasumi nanode, ie de yukkuri shimasu.', english: 'Tomorrow work is off, so I will relax at home.' },
      { id: 'ws-n5-774-2', sentence: 'ベンチに座って少し休みを取りましょう。', furigana: 'ベンチ に すわって すこし やすみ を とりましょう。', romaji: 'Benchi ni suwatte sukoshi yasumi o torimashou.', english: 'Let\'s sit on the bench and take a short rest.' }
    ]
  },
  {
    id: 'w-n5-775',
    word: '約束',
    reading: 'やくそく',
    romaji: 'yakusoku',
    meaning: "promise / appointment",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "約", "meaning": "Promise / Appointment"}, {"char": "束", "meaning": "Promise / Appointment"}],
    sentences: [
      { id: 'ws-n5-775-1', sentence: '明日の午後二時に友達と会う約束をしました。', furigana: 'あした の ごご にじ に ともだち と あう やくそく を しました。', romaji: 'Ashita no gogo niji ni tomodachi to au yakusoku o shimashita.', english: 'I made a promise to meet my friend at 2:00 PM tomorrow.' },
      { id: 'ws-n5-775-2', sentence: '約束の時間をしっかり守ってください。', furigana: 'やくそく の じかん を しっかり まもって ください。', romaji: 'Yakusoku no jikan o shikkari mamotte kudasai.', english: 'Please properly keep the appointed time.' }
    ]
  },
  {
    id: 'w-n5-776',
    word: '役所',
    reading: 'やくしょ',
    romaji: 'yakusho',
    meaning: "public office / city hall",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "役", "meaning": "Public office / City hall"}, {"char": "所", "meaning": "Public office / City hall"}],
    sentences: [
      { id: 'ws-n5-776-1', sentence: '住所の変更手続きのために役所へ行きました。', furigana: 'じゅうしょ の へんこう てつづき の ため に やくしょ へ いきました。', romaji: 'Juusho no henkou tetsuzuki no tame ni yakusho e ikimashita.', english: 'I went to city hall for address change procedures.' },
      { id: 'ws-n5-776-2', sentence: '役所の窓口は何時から開いていますか。', furigana: 'やくしょ の まどぐち は なんじ から あいて います か。', romaji: 'Yakusho no madoguchi wa nanji kara aite imasu ka.', english: 'From what time is the city hall counter open?' }
    ]
  },
  {
    id: 'w-n5-777',
    word: '焼く',
    reading: 'やく',
    romaji: 'yaku',
    meaning: "to bake / grill",
    pos: 'verb',
    posLabel: 'Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "焼", "meaning": "To bake / grill"}],
    sentences: [
      { id: 'ws-n5-777-1', sentence: '朝ご飯のためにトースターでパンを焼きました。', furigana: 'あさごはん の ため に トースター で パン を やきました。', romaji: 'Asagohan no tame ni toosutaa de pan o yakimashita.', english: 'I toasted bread in the toaster for breakfast.' },
      { id: 'ws-n5-777-2', sentence: 'フライパンで新鮮な魚を焼きます。', furigana: 'フライパン で しんせん な さかな を やきます。', romaji: 'Furaipan de shinsen na sakana o yakimasu.', english: 'I cook fresh fish in a frying pan.' }
    ]
  },
  {
    id: 'w-n5-778',
    word: '焼肉',
    reading: 'やきにく',
    romaji: 'yakiniku',
    meaning: "grilled meat / bbq",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "焼", "meaning": "Grilled meat / BBQ"}, {"char": "肉", "meaning": "Grilled meat / BBQ"}],
    sentences: [
      { id: 'ws-n5-778-1', sentence: '家族みんなで美味しい焼肉を食べに行きました。', furigana: 'かぞく みんな で おいしい やきにく を たべ に いきました。', romaji: 'Kazoku minna de oishii yakiniku o tabe ni ikimashita.', english: 'The whole family went to eat delicious yakiniku.' },
      { id: 'ws-n5-778-2', sentence: '日本の焼肉はたれがとても美味しいです。', furigana: 'にほん の やきにく は たれ が とても おいしい です。', romaji: 'Nihon no yakiniku wa tare ga totemo oishii desu.', english: 'The sauce of Japanese yakiniku is very delicious.' }
    ]
  },
  {
    id: 'w-n5-779',
    word: 'やっぱり',
    reading: 'やっぱり',
    romaji: 'yappari',
    meaning: "as expected / after all",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "矢", "meaning": "As expected / After all"}, {"char": "張", "meaning": "As expected / After all"}],
    sentences: [
      { id: 'ws-n5-779-1', sentence: 'やっぱり家で飲むお茶が一番落ち着きます。', furigana: 'やっぱり いえ で のむ おちゃ が いちばん おちつきます。', romaji: 'Yappari ie de nomu ocha ga ichiban ochitsukimasu.', english: 'After all, drinking tea at home is the most calming.' },
      { id: 'ws-n5-779-2', sentence: 'やっぱり田中さんは時間通りに来ましたね。', furigana: 'やっぱり たなかさん は じかんどおり に きました ね。', romaji: 'Yappari Tanaka-san wa jikandoori ni kimashita ne.', english: 'Tanaka-san came right on time as expected, didn\'t he?' }
    ]
  },
  {
    id: 'w-n5-780',
    word: '辞める',
    reading: 'やめる',
    romaji: 'yameru',
    meaning: "to quit / stop",
    pos: 'verb',
    posLabel: 'Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "辞", "meaning": "To quit / stop"}],
    sentences: [
      { id: 'ws-n5-780-1', sentence: '来月で今のアルバイトを辞める予定です。', furigana: 'らいげつ で いま の アルバイト を やめる よてい です。', romaji: 'Raigetsu de ima no arubaito o yameru yotei desu.', english: 'I plan to quit my current part-time job next month.' },
      { id: 'ws-n5-780-2', sentence: '健康のためにタバコを完全に辞めました。', furigana: 'けんこう の ため に タバコ を かんぜん に やめました。', romaji: 'Kenkou no tame ni tabako o kanzen ni yamemashita.', english: 'I completely quit smoking for my health.' }
    ]
  },
  {
    id: 'w-n5-781',
    word: 'やる',
    reading: 'やる',
    romaji: 'yaru',
    meaning: "to do / perform",
    pos: 'verb',
    posLabel: 'Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "遣", "meaning": "To do / perform"}],
    sentences: [
      { id: 'ws-n5-781-1', sentence: '晩ご飯の前に今日の宿題をやります。', furigana: 'ばんごはん の まえ に きょう の しゅくだい を やります。', romaji: 'Bangohan no mae ni kyou no shukudai o yarimasu.', english: 'I will do today\'s homework before dinner.' },
      { id: 'ws-n5-781-2', sentence: 'みんなで一緒に庭の掃除をやりましょう。', furigana: 'みんな で いっしょ に にわ の そうじ を やりましょう。', romaji: 'Minna de issho ni niwa no souji o yarimashou.', english: 'Let\'s clean the garden together with everyone.' }
    ]
  },
  {
    id: 'w-n5-782',
    word: '夜景',
    reading: 'やけい',
    romaji: 'yakei',
    meaning: "night view",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "夜", "meaning": "Night view"}, {"char": "景", "meaning": "Night view"}],
    sentences: [
      { id: 'ws-n5-782-1', sentence: '山の上から神戸の美しい夜景を見ました。', furigana: 'やま の うえ から こうべ の うつくしい やけい を みました。', romaji: 'Yama no ue kara Koube no utsukushii yakei o mimashita.', english: 'I saw the beautiful night view of Kobe from the top of the mountain.' },
      { id: 'ws-n5-782-2', sentence: '東京タワーからの夜景はとても素晴らしいです。', furigana: 'とうきょうタワー から の やけい は とても すばらしい です。', romaji: 'Toukyou tawaa kara no yakei wa totemo subarashii desu.', english: 'The night view from Tokyo Tower is truly wonderful.' }
    ]
  },
  {
    id: 'w-n5-783',
    word: '厄介',
    reading: 'やっかい',
    romaji: 'yakkai',
    meaning: "trouble / burden",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "厄", "meaning": "Trouble / Burden"}, {"char": "介", "meaning": "Trouble / Burden"}],
    sentences: [
      { id: 'ws-n5-783-1', sentence: '仕事で少し厄介な問題が起きました。', furigana: 'しごと で すこし やっかい な もんだい が おきました。', romaji: 'Shigoto de sukoshi yakkai na mondai ga okimashita.', english: 'A slightly troublesome problem occurred at work.' },
      { id: 'ws-n5-783-2', sentence: '三日間大変お厄介になりました。', furigana: 'みっかかん たいへん おやっかい に なりました。', romaji: 'Mikkakan taihen oyakkai ni narimashita.', english: 'Thank you very much for taking care of me for three days.' }
    ]
  },
  {
    id: 'w-n5-784',
    word: '宿',
    reading: 'やど',
    romaji: 'yado',
    meaning: "inn / lodging",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "宿", "meaning": "Inn / Lodging"}],
    sentences: [
      { id: 'ws-n5-784-1', sentence: '京都の温泉街で静かな宿に泊まりました。', furigana: 'きょうと の おんせんがい で しずか な やど に とまりました。', romaji: 'Kyouto no onsengai de shizuka na yado ni tomarimashita.', english: 'I stayed at a quiet inn in a Kyoto hot spring district.' },
      { id: 'ws-n5-784-2', sentence: '旅行の前にインターネットで宿を予約します。', furigana: 'りょこう の まえ に インターネット で やど を よやく します。', romaji: 'Ryokou no mae ni intaanetto de yado o yoyaku shimasu.', english: 'Before traveling, I reserve lodging on the Internet.' }
    ]
  },
  {
    id: 'w-n5-785',
    word: '家賃',
    reading: 'やちん',
    romaji: 'yachin',
    meaning: "rent (apartment)",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "家", "meaning": "Rent (apartment)"}, {"char": "賃", "meaning": "Rent (apartment)"}],
    sentences: [
      { id: 'ws-n5-785-1', sentence: '毎月末にアパートの家賃を振り込みます。', furigana: 'まいげつまつ に アパート の やちん を ふりこみます。', romaji: 'Maigetsumatsu ni apaato no yachin o furikomimasu.', english: 'I transfer my apartment rent at the end of every month.' },
      { id: 'ws-n5-785-2', sentence: '駅に近い部屋は家賃が少し高いです。', furigana: 'えき に ちかい へや は やちん が すこし たかい です。', romaji: 'Eki ni chikai heya wa yachin ga sukoshi takai desu.', english: 'Rooms close to the station have slightly expensive rent.' }
    ]
  },
  {
    id: 'w-n5-786',
    word: '夢',
    reading: 'ゆめ',
    romaji: 'yume',
    meaning: "dream",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "夢", "meaning": "Dream"}],
    sentences: [
      { id: 'ws-n5-786-1', sentence: '昨夜、海で泳ぐ不思議な夢を見ました。', furigana: 'ゆうべ、うみ で およぐ ふしぎ な ゆめ を みました。', romaji: 'Yuube, umi de oyogu fushigi na yume o mimashita.', english: 'Last night, I had a mysterious dream of swimming in the sea.' },
      { id: 'ws-n5-786-2', sentence: '私の将来の夢は日本語の先生になることです。', furigana: 'わたし の しょうらい の ゆめ は にほんご の せんせい に なる こと です。', romaji: 'Watashi no shourai no yume wa Nihongo no sensei ni naru koto desu.', english: 'My future dream is to become a Japanese language teacher.' }
    ]
  },
  {
    id: 'w-n5-787',
    word: 'お湯',
    reading: 'おゆ',
    romaji: 'oyu',
    meaning: "hot water",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-787-1', sentence: 'ポットでお湯を沸かしてお茶を入れます。', furigana: 'ポット で おゆ を わかして おちゃ を いれます。', romaji: 'Potto de oyu o wakashite ocha o iremasu.', english: 'I boil water in the kettle and make tea.' },
      { id: 'ws-n5-787-2', sentence: '寒い日には温かいお湯のお風呂に入ります。', furigana: 'さむい ひ に は あたたかい おゆ の おふろ に はいります。', romaji: 'Samui hi ni wa atatakai oyu no ofuro ni hairimasu.', english: 'On cold days I get into a warm water bath.' }
    ]
  },
  {
    id: 'w-n5-788',
    word: '夕方',
    reading: 'ゆうがた',
    romaji: 'yuugata',
    meaning: "evening",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "夕", "meaning": "Evening"}, {"char": "方", "meaning": "Evening"}],
    sentences: [
      { id: 'ws-n5-788-1', sentence: '夕方に近所のスーパーへ買い物に出かけました。', furigana: 'ゆうがた に きんじょ の スーパー へ かいもの に でかけました。', romaji: 'Yuugata ni kinjo no suupaa e kaimono ni dekakemashita.', english: 'In the evening I went out shopping at the local supermarket.' },
      { id: 'ws-n5-788-2', sentence: '夕方の空がオレンジ色でとてもきれいです。', furigana: 'ゆうがた の そら が オレンジいろ で とても きれい です。', romaji: 'Yuugata no sora ga orenjiiro de totemo kirei desu.', english: 'The evening sky is orange and very pretty.' }
    ]
  },
  {
    id: 'w-n5-789',
    word: '夕飯',
    reading: 'ゆうはん',
    romaji: 'yuuhan',
    meaning: "dinner",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "夕", "meaning": "Dinner"}, {"char": "飯", "meaning": "Dinner"}],
    sentences: [
      { id: 'ws-n5-789-1', sentence: '今日の夕飯は美味しいカレーライスです。', furigana: 'きょう の ゆうはん は おいしい カレーライス です。', romaji: 'Kyou no yuuhan wa oishii kareeraisu desu.', english: 'Today\'s dinner is delicious curry rice.' },
      { id: 'ws-n5-789-2', sentence: '家族みんなで揃って夕飯を食べました。', furigana: 'かぞく みんな で そろって ゆうはん を たべました。', romaji: 'Kazoku minna de sorotte yuuhan o tabemashita.', english: 'The whole family gathered and ate dinner together.' }
    ]
  },
  {
    id: 'w-n5-790',
    word: '愉快',
    reading: 'ゆかい',
    romaji: 'yukai',
    meaning: "delightful / pleasant",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "愉", "meaning": "Delightful / Pleasant"}, {"char": "快", "meaning": "Delightful / Pleasant"}],
    sentences: [
      { id: 'ws-n5-790-1', sentence: '友達と愉快な冗談を言って笑いました。', furigana: 'ともだち と ゆかい な じょうだん を いって わらいました。', romaji: 'Tomodachi to yukai na joudan o itte waraimashita.', english: 'I laughed and shared pleasant jokes with my friend.' },
      { id: 'ws-n5-790-2', sentence: '今日はとても愉快な一日を過ごしました。', furigana: 'きょう は とても ゆかい な ついたち を すごしました。', romaji: 'Kyou wa totemo yukai na ichinichi o sugoshimashita.', english: 'I spent a very delightful day today.' }
    ]
  },
  {
    id: 'w-n5-791',
    word: '浴衣',
    reading: 'ゆかた',
    romaji: 'yukata',
    meaning: "summer kimono (yukata)",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "浴", "meaning": "Summer kimono (Yukata)"}, {"char": "衣", "meaning": "Summer kimono (Yukata)"}],
    sentences: [
      { id: 'ws-n5-791-1', sentence: '夏祭りで青い浴衣を着て花火を見ました。', furigana: 'なつまつり で あおい ゆかた を きて はなび を みました。', romaji: 'Natsumatsuri de aoi yukata o kite hanabi o mimashita.', english: 'I wore a blue yukata at the summer festival and watched fireworks.' },
      { id: 'ws-n5-791-2', sentence: '温泉旅館に着いて浴衣に着替えました。', furigana: 'おんせんりょかん に ついて ゆかた に きがえました。', romaji: 'Onsenryokan ni tsuite yukata ni kigaemashita.', english: 'Arriving at the hot spring inn, I changed into a yukata.' }
    ]
  },
  {
    id: 'w-n5-792',
    word: '許す',
    reading: 'ゆるす',
    romaji: 'yurusu',
    meaning: "to forgive / permit",
    pos: 'verb',
    posLabel: 'Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "許", "meaning": "To forgive / permit"}],
    sentences: [
      { id: 'ws-n5-792-1', sentence: '友達が謝ったので、優しく許しました。', furigana: 'ともだち が あやまった ので、やさしく ゆるしました。', romaji: 'Tomodachi ga ayamatta node, yasashiku yurushimashita.', english: 'Because my friend apologized, I kindly forgave them.' },
      { id: 'ws-n5-792-2', sentence: 'ここに車を止めることは許されていません。', furigana: 'ここ に くるま を とめる こと は ゆるされて いません。', romaji: 'Koko ni kuruma o tomeru koto wa yurusarete imasen.', english: 'Parking cars here is not permitted.' }
    ]
  },
  {
    id: 'w-n5-793',
    word: '揺れる',
    reading: 'ゆれる',
    romaji: 'yureru',
    meaning: "to shake / sway",
    pos: 'verb',
    posLabel: 'Verb',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "揺", "meaning": "To shake / sway"}],
    sentences: [
      { id: 'ws-n5-793-1', sentence: '地震で部屋の電気が大きく揺れました。', furigana: 'じしん で へや の でんき が おおきく ゆれました。', romaji: 'Jishin de heya no denki ga ookiku yuremashita.', english: 'Due to the earthquake, the room light swayed greatly.' },
      { id: 'ws-n5-793-2', sentence: '強い風で庭の木の枝が揺れています。', furigana: 'つよい かぜ で にわ の き の えだ が ゆれて います。', romaji: 'Tsuyoi kaze de niwa no ki no eda ga yurete imasu.', english: 'The garden tree branches are swaying in strong wind.' }
    ]
  },
  {
    id: 'w-n5-794',
    word: '優勝',
    reading: 'ゆうしょう',
    romaji: 'yuushou',
    meaning: "victory / championship",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "優", "meaning": "Victory / Championship"}, {"char": "勝", "meaning": "Victory / Championship"}],
    sentences: [
      { id: 'ws-n5-794-1', sentence: '私たちのサッカー部が大会で優勝しました。', furigana: 'わたしたち の サッカーぶ が たいかい で ゆうしょう しました。', romaji: 'Watashitachi no sakkaabu ga taikai de yuushou shimashita.', english: 'Our soccer club won championship at the tournament.' },
      { id: 'ws-n5-794-2', sentence: '優勝おめでとうございます！', furigana: 'ゆうしょう おめでとう ございます！', romaji: 'Yuushou omedetou gozaimasu!', english: 'Congratulations on your championship victory!' }
    ]
  },
  {
    id: 'w-n5-795',
    word: '友人',
    reading: 'ゆうじん',
    romaji: 'yuujin',
    meaning: "friend (formal)",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "友", "meaning": "Friend (formal)"}, {"char": "人", "meaning": "Friend (formal)"}],
    sentences: [
      { id: 'ws-n5-795-1', sentence: '日本に住んでいる友人に近況の手紙を書きました。', furigana: 'にほん に すんで いる ゆうじん に きんきょう の てがみ を かきました。', romaji: 'Nihon ni sunde iru yuujin ni kinkyou no tegami o kakimashita.', english: 'I wrote an update letter to a friend living in Japan.' },
      { id: 'ws-n5-795-2', sentence: '昔からの親しい友人と久しぶりに会いました。', furigana: 'むかし から の したしい ゆうじん と ひさしぶり に あいました。', romaji: 'Mukashi kara no shitashii yuujin to hisashiburi ni aimashita.', english: 'I met an old close friend for the first time in a long while.' }
    ]
  },
  {
    id: 'w-n5-796',
    word: '輸出',
    reading: 'ゆしゅつ',
    romaji: 'yushutsu',
    meaning: "export",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "輸", "meaning": "Export"}, {"char": "出", "meaning": "Export"}],
    sentences: [
      { id: 'ws-n5-796-1', sentence: '日本は世界中へ自動車を輸出しています。', furigana: 'にほん は せかいじゅう へ じどうしゃ を ゆしゅつ して います。', romaji: 'Nihon wa sekaijuu e jidousha o yushutsu shite imasu.', english: 'Japan exports automobiles all around the world.' },
      { id: 'ws-n5-796-2', sentence: 'この工場で作った機械を海外へ輸出します。', furigana: 'この こうじょう で つくった きかい を かいがい へ ゆしゅつ します。', romaji: 'Kono koujou de tsukutta kikai o kaigai e yushutsu shimasu.', english: 'We export machines made in this factory overseas.' }
    ]
  },
  {
    id: 'w-n5-797',
    word: '輸入',
    reading: 'ゆにゅう',
    romaji: 'yunyuu',
    meaning: "import",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [{"char": "輸", "meaning": "Import"}, {"char": "入", "meaning": "Import"}],
    sentences: [
      { id: 'ws-n5-797-1', sentence: '日本は外国から多くの天然ガスを輸入しています。', furigana: 'にほん は がいこく から おおく の てんねんガス を ゆにゅう して います。', romaji: 'Nihon wa gaikoku kara ooku no tennengasu o yunyuu shite imasu.', english: 'Japan imports a lot of natural gas from overseas.' },
      { id: 'ws-n5-797-2', sentence: 'スーパーで輸入の美味しいバナナを買いました。', furigana: 'スーパー で ゆにゅう の おいしい バナナ を かいました。', romaji: 'Suupaa de yunyuu no oishii banana o kaimashita.', english: 'I bought delicious imported bananas at the supermarket.' }
    ]
  },
  {
    id: 'w-n5-798',
    word: 'クラス',
    reading: 'クラス',
    romaji: 'kurasu',
    meaning: "class",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-798-1', sentence: '私の日本語のクラスには二十人の学生がいます。', furigana: 'わたし の にほんご の クラス に は にじゅうにん の がくせい が います。', romaji: 'Watashi no Nihongo no kurasu ni wa nijuunin no gakusei ga imasu.', english: 'There are twenty students in my Japanese class.' },
      { id: 'ws-n5-798-2', sentence: 'クラスのみんなと一緒に旅行へ行きました。', furigana: 'クラス の みんな と いっしょ に りょこう へ いきました。', romaji: 'Kurasu no minna to issho ni ryokou e ikimashita.', english: 'I went on a trip together with everyone in the class.' }
    ]
  },
  {
    id: 'w-n5-799',
    word: 'クリスマス',
    reading: 'クリスマス',
    romaji: 'kurisumasu',
    meaning: "christmas",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-799-1', sentence: '家族みんなで楽しくクリスマスを祝いました。', furigana: 'かぞく みんな で たのしく クリスマス を いわいました。', romaji: 'Kazoku minna de tanoshiku kurisumasu o iwaimashita.', english: 'The whole family celebrated Christmas happily together.' },
      { id: 'ws-n5-799-2', sentence: '部屋にきれいなクリスマスツリーを飾りました。', furigana: 'へや に きれい な クリスマスツリー を かざりました。', romaji: 'Heya ni kirei na kurisumasutsurii o kazarimashita.', english: 'I decorated a pretty Christmas tree in the room.' }
    ]
  },
  {
    id: 'w-n5-800',
    word: 'クレジットカード',
    reading: 'クレジットカード',
    romaji: 'kurejitto kaado',
    meaning: "credit card",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-800-1', sentence: 'デパートでクレジットカードを使って買い物をしました。', furigana: 'デパート で クレジットカード を つかって かいもの を しました。', romaji: 'Depaato de kurejitto kaado o tsukatte kaimono o shimashita.', english: 'I shopped using a credit card at the department store.' },
      { id: 'ws-n5-800-2', sentence: 'すみません、クレジットカードでの支払いはできますか。', furigana: 'すみません、クレジットカード での しはらい は できます か。', romaji: 'Sumimasen, kurejitto kaado deno shiharai wa dekimasu ka.', english: 'Excuse me, can I pay with a credit card?' }
    ]
  },
  {
    id: 'w-n5-801',
    word: 'クラブ',
    reading: 'クラブ',
    romaji: 'kurabu',
    meaning: "club / activity",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-801-1', sentence: '放課後にテニスクラブで熱心に練習します。', furigana: 'ほうかご に テニスクラブ で ねっしん に れんしゅう します。', romaji: 'Houkago ni tenisukurabu de nesshin ni renshuu shimasu.', english: 'I practice enthusiastically at the tennis club after school.' },
      { id: 'ws-n5-801-2', sentence: '大学の写真クラブに入部しました。', furigana: 'だいがく の しゃしんクラブ に にゅうぶ しました。', romaji: 'Daigaku no shashinkurabu ni nyuubu shimashita.', english: 'I joined the university photography club.' }
    ]
  },
  {
    id: 'w-n5-802',
    word: 'クリーム',
    reading: 'クリーム',
    romaji: 'kuriimu',
    meaning: "cream",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-802-1', sentence: 'ケーキの上に甘いホイップクリームをのせました。', furigana: 'ケーキ の うえ に あまい ホイップクリーム を のせました。', romaji: 'Keeki no ue ni amai hoippukuriimu o nosemashita.', english: 'I put sweet whipped cream on top of the cake.' },
      { id: 'ws-n5-802-2', sentence: 'コーヒーにクリームを入れて飲みます。', furigana: 'コーヒー に クリーム を いれて のみます。', romaji: 'Koohii ni kuriimu o irete nomimasu.', english: 'I put cream into coffee and drink it.' }
    ]
  },
  {
    id: 'w-n5-803',
    word: 'クッキー',
    reading: 'クッキー',
    romaji: 'kukkii',
    meaning: "cookie",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-803-1', sentence: '休日に母と美味しいチョコチップクッキーを焼きました。', furigana: 'きゅうじつ に はは と おいしい チョコチップクッキー を やきました。', romaji: 'Kyuujitsu ni haha to oishii chokochippukukkii o yakimashita.', english: 'On holidays I baked delicious chocolate chip cookies with my mother.' },
      { id: 'ws-n5-803-2', sentence: '紅茶を飲みながらクッキーを食べました。', furigana: 'こうちゃ を のみ ながら クッキー を たべました。', romaji: 'Koucha o nomi nagara kukkii o tabemashita.', english: 'I ate cookies while drinking black tea.' }
    ]
  },
  {
    id: 'w-n5-804',
    word: 'クリア',
    reading: 'クリア',
    romaji: 'kuria',
    meaning: "clear / cleared",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-804-1', sentence: 'ゲームの難しい最終ステージをクリアしました。', furigana: 'ゲーム の むずかしい さいしゅう ステージ を クリア しました。', romaji: 'Geemu no muzukashii saishuu suteeji o kuria shimashita.', english: 'I cleared the difficult final stage of the game.' },
      { id: 'ws-n5-804-2', sentence: 'テストの合格基準を無事にクリアしました。', furigana: 'テスト の ごうかく きじゅん を ぶじ に クリア しました。', romaji: 'Tesuto no goukaku kijun o buji ni kuria shimashita.', english: 'I cleared the passing criteria of the test successfully.' }
    ]
  },
  {
    id: 'w-n5-805',
    word: 'クイズ',
    reading: 'クイズ',
    romaji: 'kuizu',
    meaning: "quiz",
    pos: 'noun',
    posLabel: 'Noun',
    jlpt: 'N5',
    kanjiBreakdown: [],
    sentences: [
      { id: 'ws-n5-805-1', sentence: '日本語の授業で楽しい漢字クイズをしました。', furigana: 'にほんご の じゅぎょう で たのしい かんじ クイズ を しました。', romaji: 'Nihongo no jugyou de tanoshii kanji kuizu o shimashita.', english: 'We had a fun kanji quiz in the Japanese class.' },
      { id: 'ws-n5-805-2', sentence: 'テレビのクイズ番組を家族で見て楽しみました。', furigana: 'テレビ の クイズ ばんぐみ を かぞく で みて たのしみました。', romaji: 'Terebi no kuizu bangumi o kazoku de mite tanoshimashita.', english: 'I enjoyed watching a quiz show on TV with my family.' }
    ]
  },
];

export function getWordN5(idOrWord: string): WordItem | undefined {
  return WORDS_N5_LIST.find(w => w.id === idOrWord || w.word === idOrWord);
}
