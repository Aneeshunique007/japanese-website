// Master JLPT Grammar Reference Database (Full 95 Official N5 Patterns + N4 Patterns)
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

export const GRAMMAR_LIBRARY: GrammarEntry[] = [
  {
    id: "g-n5-1",
    title: "〜は〜です (~wa ~desu)",
    japaneseTitle: "A は B です",
    jlpt: 'N5',
    structure: "Noun 1 + は + Noun 2 + です",
    meaning: "A is B",
    explanation: "The foundational topic-marking sentence pattern in Japanese. は marks the topic, while です adds polite affirmation.",
    examples: [
      {
        japanese: "私は学生です。",
        furigana: "わたし は がくせい です。",
        english: "I am a student."
      },
      {
        japanese: "田中さんは日本人です。",
        furigana: "たなかさん は にほんじん です。",
        english: "Mr. Tanaka is Japanese."
      },
    ]
  },
  {
    id: "g-n5-2",
    title: "〜は〜ではありません / じゃありません (~wa ~dewa arimasen)",
    japaneseTitle: "A は B ではありません",
    jlpt: 'N5',
    structure: "Noun 1 + は + Noun 2 + ではありません / じゃありません",
    meaning: "A is not B",
    explanation: "The polite negative form of です. では indicates formal writing/speech, while じゃ is standard polite conversational Japanese.",
    examples: [
      {
        japanese: "私は先生ではありません。",
        furigana: "わたし は せんせい で は ありません。",
        english: "I am not a teacher."
      },
      {
        japanese: "これは私の本じゃありません。",
        furigana: "これ は わたし の ほん じゃ ありません。",
        english: "This is not my book."
      },
    ]
  },
  {
    id: "g-n5-3",
    title: "〜でした / 〜ではありませんでした (~deshita / ~dewa arimasen deshita)",
    japaneseTitle: "〜でした / 〜ではありませんでした",
    jlpt: 'N5',
    structure: "Noun / な-adj + でした / ではありませんでした",
    meaning: "Was / Was not",
    explanation: "Past tense and past negative forms of the polite copula です.",
    examples: [
      {
        japanese: "昨日は日曜日でした。",
        furigana: "きのう は にちようび でした。",
        english: "Yesterday was Sunday."
      },
      {
        japanese: "昨日は雨ではありませんでした。",
        furigana: "きのう は あめ で は ありませんでした。",
        english: "It was not rainy yesterday."
      },
    ]
  },
  {
    id: "g-n5-4",
    title: "助詞「も」 (Particle mo)",
    japaneseTitle: "Noun + も",
    jlpt: 'N5',
    structure: "Noun + も",
    meaning: "Also / Too / As well",
    explanation: "Replaces は, が, or を to indicate that the same condition applies to another subject or object.",
    examples: [
      {
        japanese: "私もアメリカ人です。",
        furigana: "わたし も アメリカじん です。",
        english: "I am also American."
      },
      {
        japanese: "林檎も買いました。",
        furigana: "りんご も かいました。",
        english: "I also bought an apple."
      },
    ]
  },
  {
    id: "g-n5-5",
    title: "助詞「の」 (Particle no)",
    japaneseTitle: "Noun 1 + の + Noun 2",
    jlpt: 'N5',
    structure: "Noun 1 + の + Noun 2",
    meaning: "Possessive / Modifier ('s / of)",
    explanation: "Connects two nouns, showing possession, origin, or category explanation.",
    examples: [
      {
        japanese: "これは私の鍵です。",
        furigana: "これ は わたし の かぎ です。",
        english: "This is my key."
      },
      {
        japanese: "日本の車が好きです。",
        furigana: "にほん の くるま が すき です。",
        english: "I like Japanese cars."
      },
    ]
  },
  {
    id: "g-n5-6",
    title: "終助詞「か」 (Question Particle ka)",
    japaneseTitle: "Sentence + か",
    jlpt: 'N5',
    structure: "Sentence + か",
    meaning: "Question marker (?)",
    explanation: "Placed at the end of a sentence to turn statements into questions without changing word order.",
    examples: [
      {
        japanese: "お元気ですか。",
        furigana: "おげんき です か。",
        english: "How are you?"
      },
      {
        japanese: "日本語が分かりますか。",
        furigana: "にほんご が わかります か。",
        english: "Do you understand Japanese?"
      },
    ]
  },
  {
    id: "g-n5-7",
    title: "終助詞「ね」と「よ」 (Particles ne and yo)",
    japaneseTitle: "Sentence + ね / よ",
    jlpt: 'N5',
    structure: "Sentence + ね / よ",
    meaning: "Agreement (ne) / New info assertion (yo)",
    explanation: "ね seeks agreement or empathy ('isn't it?'). よ shares new information or emphasizes certainty ('I assure you!').",
    examples: [
      {
        japanese: "今日は暑いですね。",
        furigana: "きょう は あつい です ね。",
        english: "It's hot today, isn't it?"
      },
      {
        japanese: "この映画は面白いですよ。",
        furigana: "この えいが は おもしろい です よ。",
        english: "This movie is really interesting, you know!"
      },
    ]
  },
  {
    id: "g-n5-8",
    title: "これ・それ・あれ・どれ (kore / sore / are / dore)",
    japaneseTitle: "これ / それ / あれ / どれ",
    jlpt: 'N5',
    structure: "これ / それ / あれ / どれ",
    meaning: "This / That / That over there / Which one",
    explanation: "Pronouns referring to things based on proximity to the speaker (ko-), listener (so-), or distance from both (a-).",
    examples: [
      {
        japanese: "これは何ですか。",
        furigana: "これ は なん です か。",
        english: "What is this?"
      },
      {
        japanese: "あれは富士山です。",
        furigana: "あれ は ふじさん です。",
        english: "That over there is Mount Fuji."
      },
    ]
  },
  {
    id: "g-n5-9",
    title: "この・その・あの・どの + 名詞 (kono / sono / ano / dono)",
    japaneseTitle: "この / その / あの / どの + 名詞",
    jlpt: 'N5',
    structure: "この / その / あの / どの + Noun",
    meaning: "This [noun] / That [noun] / Which [noun]",
    explanation: "Demonstrative adjectives that MUST directly precede and modify a noun.",
    examples: [
      {
        japanese: "このペンはいくらですか。",
        furigana: "この ペン は いくら です か。",
        english: "How much is this pen?"
      },
      {
        japanese: "あの人は誰ですか。",
        furigana: "あの ひと は だれ です か。",
        english: "Who is that person over there?"
      },
    ]
  },
  {
    id: "g-n5-10",
    title: "ここ・そこ・あそこ・どこ (koko / soko / asoko / doko)",
    japaneseTitle: "ここ / そこ / あそこ / どこ",
    jlpt: 'N5',
    structure: "ここ / そこ / あそこ / どこ",
    meaning: "Here / There / Over there / Where",
    explanation: "Demonstrative pronouns referring to locations and physical places.",
    examples: [
      {
        japanese: "トイレはどこですか。",
        furigana: "トイレ は どこ です か。",
        english: "Where is the restroom?"
      },
      {
        japanese: "ここは私の部屋です。",
        furigana: "ここ は わたし の へや です。",
        english: "Here is my room."
      },
    ]
  },
  {
    id: "g-n5-11",
    title: "こちら・そちら・あちら・どちら (kochira / sochira / achira / dochira)",
    japaneseTitle: "こちら / そちら / あちら / どちら",
    jlpt: 'N5',
    structure: "こちら / そちら / あちら / どちら",
    meaning: "This direction / polite this/who/where",
    explanation: "Polite directional demonstratives, also used formally to refer to persons, places, and company affiliations.",
    examples: [
      {
        japanese: "エレベーターはあちらです。",
        furigana: "エレベーター は あちら です。",
        english: "The elevator is in that direction over there."
      },
      {
        japanese: "お国はどちらですか。",
        furigana: "おくに は どちら です か。",
        english: "Which country are you from?"
      },
    ]
  },
  {
    id: "g-n5-12",
    title: "〜に〜があります (Existence of Inanimate: arimasu)",
    japaneseTitle: "場所 に 物 が あります",
    jlpt: 'N5',
    structure: "Place + に + Thing + が あります",
    meaning: "There is / are [inanimate object] in [place]",
    explanation: "Used for non-living objects, plants, buildings, and abstract events.",
    examples: [
      {
        japanese: "机の上に本があります。",
        furigana: "つくえ の うえ に ほん が あります。",
        english: "There is a book on the desk."
      },
      {
        japanese: "公園に池があります。",
        furigana: "こうえん に いけ が あります。",
        english: "There is a pond in the park."
      },
    ]
  },
  {
    id: "g-n5-13",
    title: "〜に〜がいます (Existence of Animate: imasu)",
    japaneseTitle: "場所 に 生き物 が います",
    jlpt: 'N5',
    structure: "Place + に + Person/Animal + が います",
    meaning: "There is / are [living person/animal] in [place]",
    explanation: "Used for sentient beings (people, animals, insects, mythical creatures).",
    examples: [
      {
        japanese: "庭に犬がいます。",
        furigana: "にわ に いぬ が います。",
        english: "There is a dog in the garden."
      },
      {
        japanese: "教室に先生がいます。",
        furigana: "きょうしつ に せんせい が います。",
        english: "There is a teacher in the classroom."
      },
    ]
  },
  {
    id: "g-n5-14",
    title: "位置関係の表現 (Spatial Position Words: ue, shita, mae, ushiro, naka, tonari)",
    japaneseTitle: "名詞 の 上・下・前・後ろ・中・隣・近く",
    jlpt: 'N5',
    structure: "Noun + の + [Position]",
    meaning: "On, Under, In front, Behind, Inside, Next to, Near",
    explanation: "Specifies physical orientation relative to an object before adding the existence particle に.",
    examples: [
      {
        japanese: "箱の中に猫がいます。",
        furigana: "はこ の なか に ねこ が います。",
        english: "There is a cat inside the box."
      },
      {
        japanese: "駅の近くに銀行があります。",
        furigana: "えき の ちかく に ぎんこう が あります。",
        english: "There is a bank near the station."
      },
    ]
  },
  {
    id: "g-n5-15",
    title: "助詞「を」 (Direct Object: o)",
    japaneseTitle: "Noun + を + 他動詞",
    jlpt: 'N5',
    structure: "Noun + を + Transitive Verb",
    meaning: "Direct object marker",
    explanation: "Marks the direct recipient of an action performed by a transitive verb.",
    examples: [
      {
        japanese: "朝ごはんを食べます。",
        furigana: "あさごはん を たべます。",
        english: "I eat breakfast."
      },
      {
        japanese: "日本語を勉強します。",
        furigana: "にほんご を べんきょう します。",
        english: "I study Japanese."
      },
    ]
  },
  {
    id: "g-n5-16",
    title: "助詞「に」: 時間・到着点・相手 (Time, Destination, Recipient)",
    japaneseTitle: "Time / Target + に",
    jlpt: 'N5',
    structure: "Specific Time / Target Person / Destination + に",
    meaning: "At [time], To [recipient/place]",
    explanation: "Indicates exact clock time, the person on the receiving end of an action, or a destination arrived at.",
    examples: [
      {
        japanese: "毎朝七時に起きます。",
        furigana: "まいあさ しちじ に おきます。",
        english: "I wake up at 7 o'clock every morning."
      },
      {
        japanese: "友達に手紙を送りました。",
        furigana: "ともだち に てがみ を おくりました。",
        english: "I sent a letter to my friend."
      },
    ]
  },
  {
    id: "g-n5-17",
    title: "助詞「へ」 (Direction / Journey Heading: e)",
    japaneseTitle: "Place + へ + 行く/来る/帰る",
    jlpt: 'N5',
    structure: "Place + へ + Movement Verb",
    meaning: "Toward / Heading to [direction]",
    explanation: "Focuses on the movement path or direction toward a destination, pronounced as 'e'.",
    examples: [
      {
        japanese: "明日、京都へ行きます。",
        furigana: "あした、きょうと へ いきます。",
        english: "Tomorrow, I am heading to Kyoto."
      },
      {
        japanese: "早く家へ帰りましょう。",
        furigana: "はやく うち へ かえりましょう。",
        english: "Let's head back home early."
      },
    ]
  },
  {
    id: "g-n5-18",
    title: "助詞「で」: 手段・道具・言語 (Means, Tool, Language: de)",
    japaneseTitle: "Tool / Vehicle / Language + で",
    jlpt: 'N5',
    structure: "Noun [Means/Tool/Transport/Language] + で",
    meaning: "By / With / Using [tool/means]",
    explanation: "Indicates the instrument, transport method, or language medium used to complete an action.",
    examples: [
      {
        japanese: "電車で学校へ通います。",
        furigana: "でんしゃ で がっこう へ かよいます。",
        english: "I commute to school by train."
      },
      {
        japanese: "日本語で話してください。",
        furigana: "にほんご で はなして ください。",
        english: "Please speak in Japanese."
      },
    ]
  },
  {
    id: "g-n5-19",
    title: "助詞「で」: 動作の場所 (Location of Action: de)",
    japaneseTitle: "Place + で + Action Verb",
    jlpt: 'N5',
    structure: "Place + で + Verb",
    meaning: "At / In [location where action happens]",
    explanation: "Marks the venue where a dynamic active event or task occurs (unlike に which marks static existence).",
    examples: [
      {
        japanese: "図書館で本を読みます。",
        furigana: "としょかん で ほん を よみます。",
        english: "I read books at the library."
      },
      {
        japanese: "レストランで晩御飯を食べました。",
        furigana: "レストラン で ばんごはん を たべました。",
        english: "I ate dinner at a restaurant."
      },
    ]
  },
  {
    id: "g-n5-20",
    title: "助詞「と」: 共同動作・完全列挙 (With / And: to)",
    japaneseTitle: "Noun 1 + と + Noun 2",
    jlpt: 'N5',
    structure: "Noun 1 + と + Noun 2 (+ と 一緒に)",
    meaning: "And (exhaustive) / Together with [companion]",
    explanation: "Connects all items in a complete list, or marks the partner performing an activity together.",
    examples: [
      {
        japanese: "家族と一緒に住んでいます。",
        furigana: "かぞく と いっしょ に すんでいます。",
        english: "I live together with my family."
      },
      {
        japanese: "机の上にペンとノートがあります。",
        furigana: "つくえ の うえ に ペン と ノート が あります。",
        english: "There is a pen and a notebook on the desk."
      },
    ]
  },
  {
    id: "g-n5-21",
    title: "助詞「や〜など」 (Non-Exhaustive Listing: ya ~ nado)",
    japaneseTitle: "Noun 1 + や + Noun 2 (+ など)",
    jlpt: 'N5',
    structure: "Noun 1 + や + Noun 2 (+ など)",
    meaning: "Things like A and B, etc.",
    explanation: "Lists representative examples from a larger set, showing that other unspecified items also exist.",
    examples: [
      {
        japanese: "店でパンやりんごなどを買いました。",
        furigana: "みせ で パン や りんご など を かいました。",
        english: "I bought things like bread and apples at the store."
      },
      {
        japanese: "かばんの中に財布や携帯があります。",
        furigana: "かばん の なか に さいふ や けいたい が あります。",
        english: "Inside the bag there are things like a wallet and a phone."
      },
    ]
  },
  {
    id: "g-n5-22",
    title: "助詞「から〜まで」 (From ~ To: kara ~ made)",
    japaneseTitle: "Time/Place + から + Time/Place + まで",
    jlpt: 'N5',
    structure: "Start + から + End + まで",
    meaning: "From [start] to / until [end]",
    explanation: "Denotes starting and ending points for both physical journeys and temporal spans.",
    examples: [
      {
        japanese: "九時から五時まで働きます。",
        furigana: "くじ から ごじ まで はたらきます。",
        english: "I work from 9:00 until 5:00."
      },
      {
        japanese: "東京から大阪まで新幹線で行きます。",
        furigana: "とうきょう から おおさか まで しんかんせん で いきます。",
        english: "I travel from Tokyo to Osaka by Shinkansen."
      },
    ]
  },
  {
    id: "g-n5-23",
    title: "助詞「だけ」と「しか〜ない」 (Only / Nothing but)",
    japaneseTitle: "Noun + だけ / Noun + しか + Negative",
    jlpt: 'N5',
    structure: "Noun + だけ / Noun + しか + Verb[Neg]",
    meaning: "Only (dake) / Nothing but (shika...nai)",
    explanation: "だけ states a limit positively. しか emphasizes scarcity and must always pair with a negative verb.",
    examples: [
      {
        japanese: "千円だけ持っています。",
        furigana: "せんえん だけ もっています。",
        english: "I only have 1,000 yen."
      },
      {
        japanese: "水しか飲みませんでした。",
        furigana: "みず しか のみませんでした。",
        english: "I drank nothing but water."
      },
    ]
  },
  {
    id: "g-n5-24",
    title: "い形容詞の現在肯定と否定 (I-Adjectives Present: ~i / ~kunai)",
    japaneseTitle: "〜い / 〜くない",
    jlpt: 'N5',
    structure: "Stem + い / Stem + くないです",
    meaning: "Is [adjective] / Is not [adjective]",
    explanation: "I-adjectives end in い. Negate by dropping い and attaching くない (or くありません).",
    examples: [
      {
        japanese: "このお茶はとても熱いです。",
        furigana: "この おちゃ は とても あつい です。",
        english: "This green tea is very hot."
      },
      {
        japanese: "今日の天気は寒くないです。",
        furigana: "きょう の てんき は さむくない です。",
        english: "Today's weather is not cold."
      },
    ]
  },
  {
    id: "g-n5-25",
    title: "い形容詞の過去肯定と否定 (I-Adjectives Past: ~katta / ~kunakatta)",
    japaneseTitle: "〜かった / 〜くなかった",
    jlpt: 'N5',
    structure: "Stem + かった / Stem + くなかったです",
    meaning: "Was [adjective] / Was not [adjective]",
    explanation: "Expresses past states for I-adjectives by replacing final い with かった or くなかった.",
    examples: [
      {
        japanese: "昨日のテストは難しかったです。",
        furigana: "きのう の テスト は むずかしかった です。",
        english: "Yesterday's test was difficult."
      },
      {
        japanese: "旅行はあまり高くなかったです。",
        furigana: "りょこう は あまり たかくなかった です。",
        english: "The trip was not very expensive."
      },
    ]
  },
  {
    id: "g-n5-26",
    title: "な形容詞の活用 (Na-Adjectives Conjugations)",
    japaneseTitle: "〜な + 名詞 / 〜です / 〜じゃありません",
    jlpt: 'N5',
    structure: "Noun + な + Noun / Noun + です/でした",
    meaning: "Adjective states with Na-nouns",
    explanation: "Na-adjectives need な when modifying nouns directly, and conjugate with です/でした like nouns in predicates.",
    examples: [
      {
        japanese: "ここは静かな町です。",
        furigana: "ここ は しずかな まち です。",
        english: "This is a quiet town."
      },
      {
        japanese: "昨日は暇じゃありませんでした。",
        furigana: "きのう は ひま じゃ ありませんでした。",
        english: "I was not free yesterday."
      },
    ]
  },
  {
    id: "g-n5-27",
    title: "形容詞の並列接続 (Connecting Adjectives: ~kute / ~de)",
    japaneseTitle: "〜くて / 〜で",
    jlpt: 'N5',
    structure: "I-adj [drop い] + くて / Na-adj + で",
    meaning: "Is [adj] and [adj]",
    explanation: "Combines multiple adjectives together in a single sentence.",
    examples: [
      {
        japanese: "この部屋は広くて明るいです。",
        furigana: "この へや は ひろくて あかるい です。",
        english: "This room is spacious and bright."
      },
      {
        japanese: "彼女は親切で綺麗です。",
        furigana: "かのじょ は しんせつ で きれい です。",
        english: "She is kind and beautiful."
      },
    ]
  },
  {
    id: "g-n5-28",
    title: "〜になる / 〜くなる (To Become: ni naru / ku naru)",
    japaneseTitle: "名詞/な形 + になる / い形 + くなる",
    jlpt: 'N5',
    structure: "Noun/Na-adj + になる / I-adj [drop い] + くなる",
    meaning: "To become / get [state]",
    explanation: "Indicates a natural transition, change, or evolution into a new condition.",
    examples: [
      {
        japanese: "暖かくなりました。",
        furigana: "あたたかく なりました。",
        english: "It has gotten warm."
      },
      {
        japanese: "将来、医者になりたいです。",
        furigana: "しょうらい、いしゃ に なりたい です。",
        english: "I want to become a doctor in the future."
      },
    ]
  },
  {
    id: "g-n5-29",
    title: "動詞ます形 (Present/Future Polite: ~masu)",
    japaneseTitle: "動詞連用形 + ます",
    jlpt: 'N5',
    structure: "Verb Stem + ます",
    meaning: "Do / Will do (polite)",
    explanation: "Expresses habitual everyday activities or future intentional actions in polite speech.",
    examples: [
      {
        japanese: "毎晩本を読みます。",
        furigana: "まいばん ほん を よみます。",
        english: "I read books every night."
      },
      {
        japanese: "明日デパートで買い物をします。",
        furigana: "あした デパート で かいもの を します。",
        english: "Tomorrow I will do shopping at the department store."
      },
    ]
  },
  {
    id: "g-n5-30",
    title: "動詞ません形 (Polite Present Negative: ~masen)",
    japaneseTitle: "動詞連用形 + ません",
    jlpt: 'N5',
    structure: "Verb Stem + ません",
    meaning: "Do not / Will not do (polite)",
    explanation: "Polite negative present/future assertion.",
    examples: [
      {
        japanese: "お酒は飲みません。",
        furigana: "おさけ は のみません。",
        english: "I do not drink alcohol."
      },
      {
        japanese: "今日はどこへも行きません。",
        furigana: "きょう は どこ へ も いきません。",
        english: "Today I am not going anywhere."
      },
    ]
  },
  {
    id: "g-n5-31",
    title: "動詞ました形 (Polite Past: ~mashita)",
    japaneseTitle: "動詞連用形 + ました",
    jlpt: 'N5',
    structure: "Verb Stem + ました",
    meaning: "Did (polite past)",
    explanation: "Expresses completed past actions politely.",
    examples: [
      {
        japanese: "昨日たくさん勉強しました。",
        furigana: "きのう たくさん べんきょう しました。",
        english: "I studied a lot yesterday."
      },
      {
        japanese: "新しい靴を買いました。",
        furigana: "あたらしい くつ を かいました。",
        english: "I bought new shoes."
      },
    ]
  },
  {
    id: "g-n5-32",
    title: "動詞ませんでした形 (Polite Past Negative: ~masendeshita)",
    japaneseTitle: "動詞連用形 + ませんでした",
    jlpt: 'N5',
    structure: "Verb Stem + ませんでした",
    meaning: "Did not do (polite)",
    explanation: "Polite past negative assertion.",
    examples: [
      {
        japanese: "昨夜はあまり眠れませんでした。",
        furigana: "さくや は あまり ねむれませんでした。",
        english: "I couldn't sleep much last night."
      },
      {
        japanese: "朝ごはんを食べませんでした。",
        furigana: "あさごはん を たべませんでした。",
        english: "I did not eat breakfast."
      },
    ]
  },
  {
    id: "g-n5-33",
    title: "〜てください (Please do: ~te kudasai)",
    japaneseTitle: "動詞て形 + ください",
    jlpt: 'N5',
    structure: "Verb [Te-form] + ください",
    meaning: "Please do [action]",
    explanation: "Politely requests or instructs someone to carry out an action.",
    examples: [
      {
        japanese: "窓を開けてください。",
        furigana: "まど を あけて ください。",
        english: "Please open the window."
      },
      {
        japanese: "ここに住所を書いてください。",
        furigana: "ここ に じゅうしょ を かいて ください。",
        english: "Please write your address here."
      },
    ]
  },
  {
    id: "g-n5-34",
    title: "〜ないでください (Please don't do: ~naide kudasai)",
    japaneseTitle: "動詞ない形 + でください",
    jlpt: 'N5',
    structure: "Verb [Nai-form] + でください",
    meaning: "Please do not do [action]",
    explanation: "Politely asks someone to refrain from doing something.",
    examples: [
      {
        japanese: "ここで写真を撮らないでください。",
        furigana: "ここ で しゃしん を とらないで ください。",
        english: "Please do not take pictures here."
      },
      {
        japanese: "無理をしないでください。",
        furigana: "むり を しないで ください。",
        english: "Please do not push yourself too hard."
      },
    ]
  },
  {
    id: "g-n5-35",
    title: "〜てもいいです (Asking / Granting Permission: ~te mo ii desu)",
    japaneseTitle: "動詞て形 + もいいです",
    jlpt: 'N5',
    structure: "Verb [Te-form] + もいいです (か)",
    meaning: "May I / You may do [action]",
    explanation: "Used to ask for permission (with か) or grant permission to do an action.",
    examples: [
      {
        japanese: "入ってもいいですか。",
        furigana: "はいっても いい です か。",
        english: "May I come in?"
      },
      {
        japanese: "ここでタバコを吸ってもいいです。",
        furigana: "ここ で タバコ を すっても いい です。",
        english: "It is okay to smoke here."
      },
    ]
  },
  {
    id: "g-n5-36",
    title: "〜てはいけません (Prohibition: ~te wa ikemasen)",
    japaneseTitle: "動詞て形 + はいけません",
    jlpt: 'N5',
    structure: "Verb [Te-form] + はいけません",
    meaning: "Must not do / You cannot do",
    explanation: "States a strict rule, social prohibition, or safety warning against an action.",
    examples: [
      {
        japanese: "教室で大声を出してはいけません。",
        furigana: "きょうしつ で おおごえ を だして は いけません。",
        english: "You must not make loud noises in the classroom."
      },
      {
        japanese: "ここに車を止めてはいけません。",
        furigana: "ここ に くるま を とめて は いけません。",
        english: "You must not park your car here."
      },
    ]
  },
  {
    id: "g-n5-37",
    title: "〜ています: 動作の進行 (Continuous Action: ~te imasu)",
    japaneseTitle: "動詞て形 + います",
    jlpt: 'N5',
    structure: "Verb [Te-form] + います",
    meaning: "Is currently doing / -ing",
    explanation: "Expresses an action currently underway at the exact moment of speaking.",
    examples: [
      {
        japanese: "弟は今テレビを見ています。",
        furigana: "おとうと は いま テレビ を みています。",
        english: "My younger brother is watching TV right now."
      },
      {
        japanese: "雨が降っています。",
        furigana: "あめ が ふっています。",
        english: "It is raining right now."
      },
    ]
  },
  {
    id: "g-n5-38",
    title: "〜ています: 状態の継続 (Resulting State: ~te imasu)",
    japaneseTitle: "動詞て形 + います",
    jlpt: 'N5',
    structure: "Verb [Te-form] + います",
    meaning: "Is in a state of [marriage, knowing, living]",
    explanation: "Describes an ongoing sustained condition resulting from an action already completed in the past.",
    examples: [
      {
        japanese: "東京に住んでいます。",
        furigana: "とうきょう に すんでいます。",
        english: "I live in Tokyo."
      },
      {
        japanese: "あの人の名前を知っていますか。",
        furigana: "あの ひと の なまえ を しっています か。",
        english: "Do you know that person's name?"
      },
    ]
  },
  {
    id: "g-n5-39",
    title: "〜てから (After doing: ~te kara)",
    japaneseTitle: "動詞て形 + から",
    jlpt: 'N5',
    structure: "Verb 1 [Te-form] + から + Verb 2",
    meaning: "After doing [Action 1], do [Action 2]",
    explanation: "Highlights that Action 2 cannot or does not take place until Action 1 is fully completed.",
    examples: [
      {
        japanese: "手を洗ってからご飯を食べます。",
        furigana: "て を あらって から ごはん を たべます。",
        english: "I eat a meal after washing my hands."
      },
      {
        japanese: "宿題をしてから遊びに行きます。",
        furigana: "しゅくだい を して から あそび に いきます。",
        english: "I will go play after doing my homework."
      },
    ]
  },
  {
    id: "g-n5-40",
    title: "〜て、〜て (Sequence of Actions: ~te, ~te)",
    japaneseTitle: "動詞て形、動詞て形",
    jlpt: 'N5',
    structure: "Verb 1 [Te-form]、Verb 2 [Te-form]、Verb 3",
    meaning: "Do A, then B, and C",
    explanation: "Chains chronological events or actions together smoothly in one sentence.",
    examples: [
      {
        japanese: "朝起きて、シャワーを浴びて、朝食を食べました。",
        furigana: "あさ おきて、シャワー を あびて、ちょうしょく を たべました。",
        english: "I woke up in the morning, took a shower, and ate breakfast."
      },
      {
        japanese: "駅へ行って、切符を買いました。",
        furigana: "えき へ いって、きっぷ を かいました。",
        english: "I went to the station and bought a ticket."
      },
    ]
  },
  {
    id: "g-n5-41",
    title: "〜に行きます / 来ます (Purpose of Movement: Stem + ni iku)",
    japaneseTitle: "動詞連用形 / 動作名詞 + に行く・来る",
    jlpt: 'N5',
    structure: "Verb Stem / Action Noun + に + 行く/来る/帰る",
    meaning: "Go / Come in order to do [action]",
    explanation: "States the objective or purpose of traveling somewhere.",
    examples: [
      {
        japanese: "図書館へ本を借りに行きます。",
        furigana: "としょかん へ ほん を かり に いきます。",
        english: "I am going to the library to borrow books."
      },
      {
        japanese: "日本へ旅行に来ました。",
        furigana: "にほん へ りょこう に きました。",
        english: "I came to Japan for travel."
      },
    ]
  },
  {
    id: "g-n5-42",
    title: "〜たいです (Desire: ~tai desu)",
    japaneseTitle: "動詞連用形 + たいです",
    jlpt: 'N5',
    structure: "Verb Stem + たいです",
    meaning: "Want to do [action]",
    explanation: "Expresses the speaker's personal desire or intent to perform an action.",
    examples: [
      {
        japanese: "日本へ行きたいです。",
        furigana: "にほん へ いきたい です。",
        english: "I want to go to Japan."
      },
      {
        japanese: "ラーメンが食べたいです。",
        furigana: "ラーメン が たべたい です。",
        english: "I want to eat ramen."
      },
    ]
  },
  {
    id: "g-n5-43",
    title: "〜たくないです (Negative Desire: ~takunai desu)",
    japaneseTitle: "動詞連用形 + たくないです",
    jlpt: 'N5',
    structure: "Verb Stem + たくないです",
    meaning: "Do not want to do [action]",
    explanation: "Expresses that the speaker does not wish to perform an action.",
    examples: [
      {
        japanese: "今日はどこにも出かけたくないです。",
        furigana: "きょう は どこ に も でかけたくない です。",
        english: "I don't want to go out anywhere today."
      },
      {
        japanese: "その薬は飲みたくありません。",
        furigana: "その くすり は のみたく ありません。",
        english: "I don't want to take that medicine."
      },
    ]
  },
  {
    id: "g-n5-44",
    title: "〜たがっています (Third Person Desire: ~tagatte imasu)",
    japaneseTitle: "動詞連用形 + たがっています",
    jlpt: 'N5',
    structure: "Verb Stem + たがっています",
    meaning: "Someone else wants to do",
    explanation: "Used because in Japanese culture you cannot directly state another person's internal feelings as absolute fact.",
    examples: [
      {
        japanese: "妹が日本のアニメを見たがっています。",
        furigana: "いもうと が にほん の アニメ を みたがっています。",
        english: "My younger sister wants to watch Japanese anime."
      },
      {
        japanese: "猫が外に出たがっています。",
        furigana: "ねこ が そと に でたがっています。",
        english: "The cat wants to go outside."
      },
    ]
  },
  {
    id: "g-n5-45",
    title: "〜つもりです (Intention / Plan: ~tsumori desu)",
    japaneseTitle: "動詞辞書形 / ない形 + つもりです",
    jlpt: 'N5',
    structure: "Verb [Plain Present / Nai] + つもりです",
    meaning: "Plan to / Intend to do",
    explanation: "Declares a solid premeditated intention or resolution.",
    examples: [
      {
        japanese: "来年日本に留学するつもりです。",
        furigana: "らいねん にほん に りゅうがく する つもり です。",
        english: "I intend to study abroad in Japan next year."
      },
      {
        japanese: "タバコはやめるつもりです。",
        furigana: "タバコ は やめる つもり です。",
        english: "I plan to quit smoking."
      },
    ]
  },
  {
    id: "g-n5-46",
    title: "〜予定です (Scheduled Event: ~yotei desu)",
    japaneseTitle: "動詞辞書形 / 名詞の + 予定です",
    jlpt: 'N5',
    structure: "Verb [Dict form] / Noun + の + 予定です",
    meaning: "Scheduled / Planned to",
    explanation: "Describes an objective external schedule or itinerary.",
    examples: [
      {
        japanese: "来週京都へ出張する予定です。",
        furigana: "らいしゅう きょうと へ しゅっちょう する よてい です。",
        english: "I am scheduled to go on a business trip to Kyoto next week."
      },
      {
        japanese: "会議は三時からの予定です。",
        furigana: "かいぎ は さんじ から の よてい です。",
        english: "The meeting is scheduled from 3:00."
      },
    ]
  },
  {
    id: "g-n5-47",
    title: "〜たことがあります (Experience: ~ta koto ga arimasu)",
    japaneseTitle: "動詞た形 + ことがあります",
    jlpt: 'N5',
    structure: "Verb [Ta-form] + ことがあります (か)",
    meaning: "Have the experience of doing",
    explanation: "Asks or answers whether an activity has ever been experienced in one's lifetime.",
    examples: [
      {
        japanese: "富士山に登ったことがありますか。",
        furigana: "ふじさん に のぼった こと が あります か。",
        english: "Have you ever climbed Mount Fuji?"
      },
      {
        japanese: "一度だけ寿司を食べたことがあります。",
        furigana: "いちど だけ すし を たべた こと が あります。",
        english: "I have eaten sushi only once before."
      },
    ]
  },
  {
    id: "g-n5-48",
    title: "〜たり〜たりする (Representative Actions: ~tari ~tari suru)",
    japaneseTitle: "動詞た形 + り + 動詞た形 + りする",
    jlpt: 'N5',
    structure: "Verb 1 [Ta] + り、Verb 2 [Ta] + りする",
    meaning: "Do things like A and B",
    explanation: "Lists non-exhaustive activities carried out without implying a strict sequence.",
    examples: [
      {
        japanese: "休日は本を読んだり音楽を聴いたりします。",
        furigana: "きゅうじつ は ほん を よんだり おんがく を きいたり します。",
        english: "On days off I do things like reading books and listening to music."
      },
      {
        japanese: "昨日は買い物したり散歩したりしました。",
        furigana: "きのう は かいもの したり さんぽ したり しました。",
        english: "Yesterday I did things like shopping and taking a walk."
      },
    ]
  },
  {
    id: "g-n5-49",
    title: "〜前に (Before doing: ~mae ni)",
    japaneseTitle: "動詞辞書形 / 名詞の + 前に",
    jlpt: 'N5',
    structure: "Verb [Dict form] / Noun + の + 前に",
    meaning: "Before doing [action]",
    explanation: "Indicates that the secondary clause occurs prior to the reference action.",
    examples: [
      {
        japanese: "寝る前に歯を磨きます。",
        furigana: "ねる まえ に は を みがきます。",
        english: "I brush my teeth before going to sleep."
      },
      {
        japanese: "食事の前に手を洗いましょう。",
        furigana: "しょくじ の まえ に て を あらいましょう。",
        english: "Let's wash our hands before the meal."
      },
    ]
  },
  {
    id: "g-n5-50",
    title: "〜後で (After doing: ~ato de)",
    japaneseTitle: "動詞た形 / 名詞の + 後で",
    jlpt: 'N5',
    structure: "Verb [Ta-form] / Noun + の + 後で",
    meaning: "After doing [action]",
    explanation: "Indicates that the secondary clause occurs subsequent to the reference action.",
    examples: [
      {
        japanese: "仕事が終わった後で飲みに行きましょう。",
        furigana: "しごと が おわった あと で のみ に いきましょう。",
        english: "Let's go for a drink after work finishes."
      },
      {
        japanese: "映画のあとでカフェに入りました。",
        furigana: "えいが の あと で カフェ に はいりました。",
        english: "We went into a cafe after the movie."
      },
    ]
  },
  {
    id: "g-n5-51",
    title: "〜時に (When: ~toki ni)",
    japaneseTitle: "動詞普通形 / い形 / な形な / 名詞の + 時に",
    jlpt: 'N5',
    structure: "Plain form / Noun + の + 時に",
    meaning: "When / At the time of...",
    explanation: "Sets the temporal backdrop or circumstance when an event takes place.",
    examples: [
      {
        japanese: "子供の時、よく川で泳ぎました。",
        furigana: "こども の とき、よく かわ で およぎました。",
        english: "When I was a child, I often swam in the river."
      },
      {
        japanese: "暇な時にゲームをします。",
        furigana: "ひまな とき に ゲーム を します。",
        english: "When I have free time, I play games."
      },
    ]
  },
  {
    id: "g-n5-52",
    title: "〜ことができる (Can do / Able to: ~koto ga dekiru)",
    japaneseTitle: "動詞辞書形 + ことができる",
    jlpt: 'N5',
    structure: "Verb [Dict form] + ことができる (か)",
    meaning: "Can do / Be able to do",
    explanation: "Nominalizes a verb with こと so that it can be modified by できる to express potential ability or situational possibility.",
    examples: [
      {
        japanese: "漢字を三百字読むことができます。",
        furigana: "かんじ を さんびゃくじ よむ こと が できます。",
        english: "I can read 300 kanji characters."
      },
      {
        japanese: "このホテルではカードを使うことができます。",
        furigana: "この ホテル で は カード を つかう こと が できます。",
        english: "You can use credit cards at this hotel."
      },
    ]
  },
  {
    id: "g-n5-53",
    title: "〜ができる (Can do noun / Skill: ~ga dekiru)",
    japaneseTitle: "名詞 + ができる",
    jlpt: 'N5',
    structure: "Noun [Skill/Activity] + ができる",
    meaning: "Can do [skill] / Be capable in",
    explanation: "Direct potential applied to noun activities such as sports, languages, or cooking.",
    examples: [
      {
        japanese: "日本語が少しできます。",
        furigana: "にほんご が すこし できます。",
        english: "I can speak a little Japanese."
      },
      {
        japanese: "スキーが上手にできます。",
        furigana: "スキー が じょうず に できます。",
        english: "I can ski skillfully."
      },
    ]
  },
  {
    id: "g-n5-54",
    title: "〜が好き / 嫌い (Like / Dislike: ~ga suki / kirai)",
    japaneseTitle: "名詞 + が好き・嫌いです",
    jlpt: 'N5',
    structure: "Noun + が 好き / 嫌い です",
    meaning: "Like / Dislike [noun]",
    explanation: "Likes and dislikes take the target particle が in Japanese because 好き/嫌い are adjectives.",
    examples: [
      {
        japanese: "私は猫が大好きです。",
        furigana: "わたし は ねこ が だいすき です。",
        english: "I like cats very much."
      },
      {
        japanese: "辛い料理はあまり好きじゃありません。",
        furigana: "からい りょうり は あまり すき じゃ ありません。",
        english: "I don't like spicy food very much."
      },
    ]
  },
  {
    id: "g-n5-55",
    title: "〜のが好き (Like doing: ~no ga suki)",
    japaneseTitle: "動詞辞書形 + のが好きです",
    jlpt: 'N5',
    structure: "Verb [Dict form] + のが 好き / 嫌い です",
    meaning: "Like / Dislike doing [action]",
    explanation: "Uses the nominalizer の to turn a verb phrase into an activity that can be liked or disliked.",
    examples: [
      {
        japanese: "音楽を聴くのが好きです。",
        furigana: "おんがく を きく の が すき です。",
        english: "I like listening to music."
      },
      {
        japanese: "朝早く起きるのが苦手です。",
        furigana: "あさ はやく おきる の が にがて です。",
        english: "I am bad at waking up early in the morning."
      },
    ]
  },
  {
    id: "g-n5-56",
    title: "〜が上手 / 下手 (Skillful / Poor at: ~ga jouzu / heta)",
    japaneseTitle: "名詞 / 動詞辞書形の + が上手・下手です",
    jlpt: 'N5',
    structure: "Noun / Verb[Dict] + のが 上手 / 下手 です",
    meaning: "Good at / Bad at doing",
    explanation: "Evaluates skill level. Note: Native speakers avoid calling themselves 上手 (arrogant); use 得意 instead for yourself.",
    examples: [
      {
        japanese: "田中さんは歌がとても上手ですね。",
        furigana: "たなかさん は うた が とても じょうず です ね。",
        english: "Mr. Tanaka is very good at singing, isn't he?"
      },
      {
        japanese: "私は絵を描くのが下手です。",
        furigana: "わたし は え を かく の が へた です。",
        english: "I am poor at drawing pictures."
      },
    ]
  },
  {
    id: "g-n5-57",
    title: "〜なければなりません (Must do / Obligation: ~nakereba narimasen)",
    japaneseTitle: "動詞ない形 [drop い] + なければなりません",
    jlpt: 'N5',
    structure: "Verb [Nai - い] + なければなりません",
    meaning: "Must do / Have to do",
    explanation: "Expresses absolute necessity or social obligation ('if one does not do, it won't do').",
    examples: [
      {
        japanese: "毎日薬を飲まなければなりません。",
        furigana: "まいにち くすり を のまなければ なりません。",
        english: "I must take medicine every day."
      },
      {
        japanese: "明日までにレポートを出さなければなりません。",
        furigana: "あした まで に レポート を ださなければ なりません。",
        english: "I have to submit the report by tomorrow."
      },
    ]
  },
  {
    id: "g-n5-58",
    title: "〜なくてもいいです (No need to do: ~nakutemo ii desu)",
    japaneseTitle: "動詞ない形 [drop い] + なくてもいいです",
    jlpt: 'N5',
    structure: "Verb [Nai - い] + なくてもいいです",
    meaning: "Do not have to do / Need not",
    explanation: "Reassures someone that an action is optional and not mandatory.",
    examples: [
      {
        japanese: "靴を脱がなくてもいいですよ。",
        furigana: "くつ を ぬがなくても いい です よ。",
        english: "You do not have to take off your shoes."
      },
      {
        japanese: "明日は来なくても構いません。",
        furigana: "あした は こなくても かまいません。",
        english: "You don't need to come tomorrow."
      },
    ]
  },
  {
    id: "g-n5-59",
    title: "〜ませんか (Invitation: ~masen ka)",
    japaneseTitle: "動詞連用形 + ませんか",
    jlpt: 'N5',
    structure: "Verb Stem + ませんか",
    meaning: "Won't you / Would you like to...?",
    explanation: "Polite invitation asking someone to join in an activity while leaving room for polite refusal.",
    examples: [
      {
        japanese: "一緒にコーヒーを飲みませんか。",
        furigana: "いっしょ に コーヒー を のみません か。",
        english: "Won't you have a coffee with me?"
      },
      {
        japanese: "今週末、映画を見に行きませんか。",
        furigana: "こんしゅうまつ、えいが を み に いきません か。",
        english: "Would you like to go watch a movie this weekend?"
      },
    ]
  },
  {
    id: "g-n5-60",
    title: "〜ましょう (Let's do: ~mashou)",
    japaneseTitle: "動詞連用形 + ましょう",
    jlpt: 'N5',
    structure: "Verb Stem + ましょう",
    meaning: "Let's do [action]",
    explanation: "Direct and enthusiastic proposal to do something together.",
    examples: [
      {
        japanese: "少し休みましょう。",
        furigana: "すこし やすみましょう。",
        english: "Let's take a short break."
      },
      {
        japanese: "日本語で練習しましょう。",
        furigana: "にほんご で れんしゅう しましょう。",
        english: "Let's practice in Japanese."
      },
    ]
  },
  {
    id: "g-n5-61",
    title: "〜ましょうか (Shall I / Shall we: ~mashou ka)",
    japaneseTitle: "動詞連用形 + ましょうか",
    jlpt: 'N5',
    structure: "Verb Stem + ましょうか",
    meaning: "Shall I help? / Shall we...?",
    explanation: "Offers personal assistance ('Shall I carry this?') or asks for confirmation before initiating a joint task.",
    examples: [
      {
        japanese: "荷物を持ちましょうか。",
        furigana: "にもつ を もちましょう か。",
        english: "Shall I carry your luggage for you?"
      },
      {
        japanese: "窓を閉めましょうか。",
        furigana: "まど を しめましょう か。",
        english: "Shall I close the window?"
      },
    ]
  },
  {
    id: "g-n5-62",
    title: "〜と思います (Opinion: ~to omoimasu)",
    japaneseTitle: "普通形 + と思います",
    jlpt: 'N5',
    structure: "Plain form sentence + と思います",
    meaning: "I think that...",
    explanation: "States the speaker's viewpoint, conjecture, or personal assessment softly.",
    examples: [
      {
        japanese: "明日は雨が降ると思います。",
        furigana: "あした は あめ が ふる と おもいます。",
        english: "I think it will rain tomorrow."
      },
      {
        japanese: "この料理はとても美味しいと思います。",
        furigana: "この りょうり は とても おいしい と おもいます。",
        english: "I think this dish is very delicious."
      },
    ]
  },
  {
    id: "g-n5-63",
    title: "〜と言いました (Quotation: ~to iimashita)",
    japaneseTitle: "普通形 / セリフ + と言いました",
    jlpt: 'N5',
    structure: "Quote + と 言いました",
    meaning: "Said that... / Quoted",
    explanation: "Reports direct speech or indirect statements made by another individual.",
    examples: [
      {
        japanese: "先生は明日テストがあると言いました。",
        furigana: "せんせい は あした テスト が ある と いいました。",
        english: "The teacher said that there is a test tomorrow."
      },
      {
        japanese: "彼は「ありがとう」と言って笑いました。",
        furigana: "かれ は 「ありがとう」 と いって わらいました。",
        english: "He said 'Thank you' and smiled."
      },
    ]
  },
  {
    id: "g-n5-64",
    title: "〜でしょう / 〜だろう (Conjecture: ~deshou / ~darou)",
    japaneseTitle: "普通形 (な形・名詞だナシ) + でしょう",
    jlpt: 'N5',
    structure: "Plain form + でしょう / だろう",
    meaning: "Probably / Right? / Isn't it?",
    explanation: "Expresses polite likelihood or invites confirmation on something likely true.",
    examples: [
      {
        japanese: "明日はいい天気になるでしょう。",
        furigana: "あした は いい てんき に なる でしょう。",
        english: "It will probably be nice weather tomorrow."
      },
      {
        japanese: "試験は難しかったでしょう。",
        furigana: "しけん は むずかしかった でしょう。",
        english: "The exam was difficult, wasn't it?"
      },
    ]
  },
  {
    id: "g-n5-65",
    title: "〜方（かた） (Way of doing / How to: ~kata)",
    japaneseTitle: "動詞連用形 + 方",
    jlpt: 'N5',
    structure: "Verb Stem + 方 [かた]",
    meaning: "Way of doing / How to [verb]",
    explanation: "Compounds a verb stem with 方 to produce a noun meaning the methodology or manner of execution.",
    examples: [
      {
        japanese: "この漢字の読み方を教えてください。",
        furigana: "この かんじ の よみかた を おしえて ください。",
        english: "Please teach me how to read this kanji."
      },
      {
        japanese: "お箸の使い方を知っていますか。",
        furigana: "おはし の つかいかた を しっています か。",
        english: "Do you know how to use chopsticks?"
      },
    ]
  },
  {
    id: "g-n5-66",
    title: "〜すぎます (Excessive Degree: ~sugimasu)",
    japaneseTitle: "動詞連用形 / い形・な形語幹 + すぎます",
    jlpt: 'N5',
    structure: "Verb Stem / Adj Stem + すぎます",
    meaning: "Too much / Excessively [verb/adj]",
    explanation: "Indicates exceeding a healthy, reasonable, or comfortable limit.",
    examples: [
      {
        japanese: "晩御飯を食べすぎました。",
        furigana: "ばんごはん を たべすぎました。",
        english: "I ate too much dinner."
      },
      {
        japanese: "この問題は難しすぎます。",
        furigana: "この もんだい は むずかしすぎます。",
        english: "This problem is too difficult."
      },
    ]
  },
  {
    id: "g-n5-67",
    title: "〜やすい / 〜にくい (Easy to / Hard to do: ~yasui / ~nikui)",
    japaneseTitle: "動詞連用形 + やすい・にくい",
    jlpt: 'N5',
    structure: "Verb Stem + やすい / にくい",
    meaning: "Easy to do / Hard to do",
    explanation: "Attaches to verb stems and functions as an I-adjective describing ease or difficulty of execution.",
    examples: [
      {
        japanese: "この薬は甘くて飲みやすいです。",
        furigana: "この くすり は あまくて のみやすい です。",
        english: "This medicine is sweet and easy to drink."
      },
      {
        japanese: "このペンは字が書きにくいです。",
        furigana: "この ペン は じ が かきにくい です。",
        english: "This pen is hard to write with."
      },
    ]
  },
  {
    id: "g-n5-68",
    title: "〜そうです [様態] (Looks like / Appears: ~sou desu)",
    japaneseTitle: "動詞連用形 / 形容詞語幹 + そうです",
    jlpt: 'N5',
    structure: "Verb Stem / Adj Stem + そうです",
    meaning: "Looks like / Appears to be",
    explanation: "Conveys visual conjecture based on immediate appearances ('looks delicious', 'looks like it will rain').",
    examples: [
      {
        japanese: "このケーキはとても美味しそうです。",
        furigana: "この ケーキ は とても おいしそう です。",
        english: "This cake looks very delicious."
      },
      {
        japanese: "今にも雨が降りそうです。",
        furigana: "いま に も あめ が ふりそう です。",
        english: "It looks like it could rain at any moment."
      },
    ]
  },
  {
    id: "g-n5-69",
    title: "〜より〜のほうが (Comparison: A yori B no hou ga)",
    japaneseTitle: "A より B のほうが + 形容詞",
    jlpt: 'N5',
    structure: "A より B のほうが + Adjective",
    meaning: "B is more [adj] than A",
    explanation: "Compares two entities, stating that entity B exceeds entity A in the given quality.",
    examples: [
      {
        japanese: "飛行機は新幹線より速いです。",
        furigana: "ひこうき は しんかんせん より はやい です。",
        english: "Airplanes are faster than bullet trains."
      },
      {
        japanese: "日本より私の国のほうが広いです。",
        furigana: "にほん より わたし の くに の ほうが ひろい です。",
        english: "My home country is larger than Japan."
      },
    ]
  },
  {
    id: "g-n5-70",
    title: "〜の中で〜が一番 (Superlative: no naka de ~ ga ichiban)",
    japaneseTitle: "[Group] の中で [Item] が一番 + 形容詞",
    jlpt: 'N5',
    structure: "Category + の中で + Entity + が 一番 [adj]",
    meaning: "Among [group], [entity] is the most...",
    explanation: "Singles out the highest degree within a defined set or classification.",
    examples: [
      {
        japanese: "スポーツの中でサッカーが一番好きです。",
        furigana: "スポーツ の なか で サッカー が いちばん すき です。",
        english: "Among all sports, I like soccer the most."
      },
      {
        japanese: "一年の中で八月が一番暑いです。",
        furigana: "いちねん の なか で はちがつ が いちばん あつい です。",
        english: "August is the hottest month of the year."
      },
    ]
  },
  {
    id: "g-n5-71",
    title: "どちらが〜ですか (Which of the Two: dochira ga)",
    japaneseTitle: "A と B と どちらが + 形容詞 ですか",
    jlpt: 'N5',
    structure: "A と B と どちらが + Adjective ですか",
    meaning: "Between A and B, which one is more...?",
    explanation: "Presents an A/B choice between exactly two alternatives.",
    examples: [
      {
        japanese: "肉と魚と、どちらが好きですか。",
        furigana: "にく と さかな と、どちら が すき です か。",
        english: "Between meat and fish, which do you like better?"
      },
      {
        japanese: "京都と奈良と、どちらが近いですか。",
        furigana: "きょうと と なら と、どちら が ちかい です か。",
        english: "Between Kyoto and Nara, which is closer?"
      },
    ]
  },
  {
    id: "g-n5-72",
    title: "〜から (Reason / Because: ~kara)",
    japaneseTitle: "原因・理由 + から、結果",
    jlpt: 'N5',
    structure: "Reason [Plain / Polite] + から",
    meaning: "Because / Since [reason]",
    explanation: "States a subjective reason or personal justification leading to a conclusion.",
    examples: [
      {
        japanese: "時間がありませんから、タクシーで行きましょう。",
        furigana: "じかん が ありません から、タクシー で いきましょう。",
        english: "Because we don't have time, let's go by taxi."
      },
      {
        japanese: "風邪をひきましたから、学校を休みます。",
        furigana: "かぜ を ひきました から、がっこう を やすみます。",
        english: "Because I caught a cold, I will be absent from school."
      },
    ]
  },
  {
    id: "g-n5-73",
    title: "〜ので (Objective Reason: ~node)",
    japaneseTitle: "普通形 (な形・名詞な) + ので",
    jlpt: 'N5',
    structure: "Reason [Plain form / Na-noun な] + ので",
    meaning: "Since / Because (polite / natural cause)",
    explanation: "States a natural or objective cause politely without sounding pushy or excuse-driven.",
    examples: [
      {
        japanese: "雨が降っているので、傘を持っていきます。",
        furigana: "あめ が ふっている ので、かさ を もっていきます。",
        english: "Since it is raining, I will take an umbrella."
      },
      {
        japanese: "気分が悪いので、少し休ませてください。",
        furigana: "きぶん が わるい ので、すこし やすませて ください。",
        english: "Since I feel sick, please let me rest for a bit."
      },
    ]
  },
  {
    id: "g-n5-74",
    title: "〜が / けど (Conjunction: But / Although)",
    japaneseTitle: "Clause 1 + が / けど + Clause 2",
    jlpt: 'N5',
    structure: "Clause 1 + が / けど + Clause 2",
    meaning: "..., but / although...",
    explanation: "Connects contrasting statements. が is polite/formal; けど is friendly/conversational.",
    examples: [
      {
        japanese: "日本の食べ物は美味しいですが、少し高いです。",
        furigana: "にほん の たべもの は おいしい です が、すこし たかい です。",
        english: "Japanese food is delicious, but it is a bit expensive."
      },
      {
        japanese: "薬を飲みましたけど、まだ頭が痛いです。",
        furigana: "くすり を のみました けど、まだ あたま が いたい です。",
        english: "I took medicine, but my head still hurts."
      },
    ]
  },
  {
    id: "g-n5-75",
    title: "疑問詞 + か (Indefinite Pronouns: dareka, nanika, dokoka)",
    japaneseTitle: "誰か・何か・どこか・いつか",
    jlpt: 'N5',
    structure: "Interrogative + か",
    meaning: "Someone, Something, Somewhere, Sometime",
    explanation: "Transforms question words into positive indefinite pronouns without needing question particles.",
    examples: [
      {
        japanese: "部屋に誰かいますか。",
        furigana: "へや に だれか います か。",
        english: "Is there someone in the room?"
      },
      {
        japanese: "喉が渇いたので、何か飲みたいです。",
        furigana: "のど が かわいた ので、なにか のみたい です。",
        english: "My throat is dry, so I want to drink something."
      },
    ]
  },
  {
    id: "g-n5-76",
    title: "疑問詞 + も + 否定 (Total Negation: daremo, nanimo, dokomo)",
    japaneseTitle: "誰も・何も・どこも + 否定動詞",
    jlpt: 'N5',
    structure: "Interrogative + も + Negative Verb",
    meaning: "Nobody, Nothing, Nowhere (not at all)",
    explanation: "Expresses complete exhaustive negation.",
    examples: [
      {
        japanese: "冷蔵庫の中には何もありません。",
        furigana: "れいぞうこ の なか に は なにも ありません。",
        english: "There is nothing in the refrigerator."
      },
      {
        japanese: "休日はどこへも行きませんでした。",
        furigana: "きゅうじつ は どこ へ も いきませんでした。",
        english: "I went nowhere on my day off."
      },
    ]
  },
  {
    id: "g-n5-77",
    title: "もう〜ました / まだ〜ていません (Already / Not Yet)",
    japaneseTitle: "もう + 過去形 / まだ + て形いません",
    jlpt: 'N5',
    structure: "もう + Verb[Past] / まだ + Verb[Te-form] ません",
    meaning: "Already did / Have not done yet",
    explanation: "Contrasts completed milestones (mou) with actions still pending (mada).",
    examples: [
      {
        japanese: "もう昼ごはんを食べましたか。",
        furigana: "もう ひるごはん を たべました か。",
        english: "Did you already eat lunch?"
      },
      {
        japanese: "いいえ、まだ食べていません。",
        furigana: "いいえ、まだ たべて いません。",
        english: "No, I have not eaten yet."
      },
    ]
  },
  {
    id: "g-n5-78",
    title: "とても・あまり・全然 (Degree Adverbs: totemo, amari, zenzen)",
    japaneseTitle: "とても / あまり + 否定 / 全然 + 否定",
    jlpt: 'N5',
    structure: "Adverb of degree + Adjective/Verb",
    meaning: "Very / Not very / Not at all",
    explanation: "とても pairs with affirmative statements. あまり and 全然 pair strictly with negative predicates in standard N5 grammar.",
    examples: [
      {
        japanese: "日本語はとても面白いです。",
        furigana: "にほんご は とても おもしろい です。",
        english: "Japanese is very interesting."
      },
      {
        japanese: "昨日は全然勉強しませんでした。",
        furigana: "きのう は ぜんぜん べんきょう しませんでした。",
        english: "I did not study at all yesterday."
      },
    ]
  },
  {
    id: "g-n5-79",
    title: "たくさん・すこし (Quantifier Adverbs: takusan, sukoshi)",
    japaneseTitle: "たくさん / 少し + 動詞・名詞",
    jlpt: 'N5',
    structure: "Quantifier Adverb + Action",
    meaning: "A lot / A little",
    explanation: "Directly modifies verbs or quantities without requiring additional particles.",
    examples: [
      {
        japanese: "本をたくさん読みました。",
        furigana: "ほん を たくさん よみました。",
        english: "I read a lot of books."
      },
      {
        japanese: "日本語が少し話せます。",
        furigana: "にほんご が すこし はなせます。",
        english: "I can speak a little Japanese."
      },
    ]
  },
  {
    id: "g-n5-80",
    title: "だんだん (Gradual Progression: dan dan)",
    japaneseTitle: "だんだん + 変化の動詞/形容詞",
    jlpt: 'N5',
    structure: "だんだん + Verb/Adj [Transition]",
    meaning: "Gradually / Step by step",
    explanation: "Depicts continuous incremental development over time.",
    examples: [
      {
        japanese: "だんだん寒くなってきましたね。",
        furigana: "だんだん さむく なって きました ね。",
        english: "It has gradually become colder, hasn't it?"
      },
      {
        japanese: "日本語の会話がだんだん上手になりました。",
        furigana: "にほんご の かいわ が だんだん じょうず に なりました。",
        english: "My Japanese conversation gradually became better."
      },
    ]
  },
  {
    id: "g-n5-81",
    title: "初めて (For the First Time: hajimete)",
    japaneseTitle: "初めて + 動詞",
    jlpt: 'N5',
    structure: "初めて + Action",
    meaning: "For the first time",
    explanation: "Highlights that an experience is happening for the very first instance.",
    examples: [
      {
        japanese: "日本へ初めて来ました。",
        furigana: "にほん へ はじめて きました。",
        english: "I came to Japan for the first time."
      },
      {
        japanese: "初めて刺身を食べました。",
        furigana: "はじめて さしみ を たべました。",
        english: "I ate sashimi for the first time."
      },
    ]
  },
  {
    id: "g-n5-82",
    title: "また (Again / Also: mata)",
    japaneseTitle: "また + 動詞",
    jlpt: 'N5',
    structure: "また + Action / Sentence",
    meaning: "Again / Once more",
    explanation: "Signals repetition of an action or continuation of communication.",
    examples: [
      {
        japanese: "また会いましょう。",
        furigana: "また あいましょう。",
        english: "Let's meet again."
      },
      {
        japanese: "また明日電話します。",
        furigana: "また あした でんわ します。",
        english: "I will call again tomorrow."
      },
    ]
  },
  {
    id: "g-n5-83",
    title: "すぐ (Immediately / Right away: sugu)",
    japaneseTitle: "すぐ + 動詞",
    jlpt: 'N5',
    structure: "すぐ (+ に) + Action",
    meaning: "Immediately / Right away / Soon",
    explanation: "Shows promptness without delay.",
    examples: [
      {
        japanese: "すぐに戻ります。",
        furigana: "すぐ に もどります。",
        english: "I will be back right away."
      },
      {
        japanese: "宿題が終わったら、すぐ寝ます。",
        furigana: "しゅくだい が おわったら、すぐ ねます。",
        english: "When homework is finished, I will go to sleep immediately."
      },
    ]
  },
  {
    id: "g-n5-84",
    title: "ゆっくり (Slowly / Leisurely: yukkuri)",
    japaneseTitle: "ゆっくり + 動詞",
    jlpt: 'N5',
    structure: "ゆっくり + Action",
    meaning: "Slowly / Take one's time",
    explanation: "Depicts a relaxed pace or deliberate unhurried action.",
    examples: [
      {
        japanese: "お風呂に入って、ゆっくり休んでください。",
        furigana: "おふろ に はいって、ゆっくり やすんで ください。",
        english: "Please take a bath and rest leisurely."
      },
      {
        japanese: "先生、もう少しゆっくり話してください。",
        furigana: "せんせい、もう すこし ゆっくり はなして ください。",
        english: "Teacher, please speak a little more slowly."
      },
    ]
  },
  {
    id: "g-n5-85",
    title: "一番 (The Most / Number One: ichiban)",
    japaneseTitle: "一番 + 形容詞",
    jlpt: 'N5',
    structure: "一番 + Adjective",
    meaning: "The most / -est / Number one",
    explanation: "Creates absolute superlatives with adjectives.",
    examples: [
      {
        japanese: "これが一番美味しいケーキです。",
        furigana: "これ が いちばん おいしい ケーキ です。",
        english: "This is the most delicious cake."
      },
      {
        japanese: "クラスで誰が一番背が高いですか。",
        furigana: "クラス で だれ が いちばん せ が たかい です か。",
        english: "Who is the tallest in the class?"
      },
    ]
  },
  {
    id: "g-n5-86",
    title: "助数詞の基本 (Basic Japanese Counters: tsu, nin, hon, mai, dai, satsu)",
    japaneseTitle: "数詞 + 助数詞",
    jlpt: 'N5',
    structure: "Number + Counter (つ, 人, 本, 枚, 台, 冊)",
    meaning: "Counting objects accurately",
    explanation: "Japanese requires specific category counters for counting items (flat things = mai, long things = hon, people = nin).",
    examples: [
      {
        japanese: "林檎を三つ買いました。",
        furigana: "りんご を みっつ かいました。",
        english: "I bought three apples."
      },
      {
        japanese: "切符を二枚ください。",
        furigana: "きっぷ を にまい ください。",
        english: "Please give me two tickets."
      },
    ]
  },
  {
    id: "g-n5-87",
    title: "どのくらい / どれくらい (How Long / How Much: dono kurai)",
    japaneseTitle: "期間 / 距離 + どのくらい",
    jlpt: 'N5',
    structure: "Time / Distance + どのくらい",
    meaning: "How long / How much (duration/distance)",
    explanation: "Inquires about time durations, distances, or financial cost spans.",
    examples: [
      {
        japanese: "家から駅まで歩いてどのくらいかかりますか。",
        furigana: "うち から えき まで あるいて どのくらい かかります か。",
        english: "How long does it take to walk from home to the station?"
      },
      {
        japanese: "日本にどのくらい滞在しますか。",
        furigana: "にほん に どのくらい たいざい します か。",
        english: "How long will you stay in Japan?"
      },
    ]
  },
  {
    id: "g-n5-88",
    title: "〜回・〜時間 (Frequency & Duration Counters: kai, jikan)",
    japaneseTitle: "Period に Frequency 回",
    jlpt: 'N5',
    structure: "[Period] に [Frequency] 回",
    meaning: "[X] times per [period]",
    explanation: "States habit frequency or repeating event occurrences.",
    examples: [
      {
        japanese: "一日に三回歯を磨きます。",
        furigana: "いちにち に さんかい は を みがきます。",
        english: "I brush my teeth three times a day."
      },
      {
        japanese: "一週間に二回ジムへ行きます。",
        furigana: "いっしゅうかん に にかい ジム へ いきます。",
        english: "I go to the gym twice a week."
      },
    ]
  },
  {
    id: "g-n5-89",
    title: "〜にあげる (Giving: Noun o ageru)",
    japaneseTitle: "人 に 物 を あげる",
    jlpt: 'N5',
    structure: "Giver + は + Receiver [に] + 物 [を] あげる",
    meaning: "Give [object] to [someone]",
    explanation: "Expresses giving a gift or item from the speaker to another person, or between third parties.",
    examples: [
      {
        japanese: "妹の誕生日にプレゼントをあげました。",
        furigana: "いもうと の たんじょうび に プレゼント を あげました。",
        english: "I gave a present to my younger sister for her birthday."
      },
      {
        japanese: "犬に餌をあげます。",
        furigana: "いぬ に えさ を あげます。",
        english: "I feed the dog."
      },
    ]
  },
  {
    id: "g-n5-90",
    title: "〜にもらう (Receiving: Noun o morau)",
    japaneseTitle: "人 に/から 物 を もらう",
    jlpt: 'N5',
    structure: "Receiver + は + Giver [に/から] + 物 [を] もらう",
    meaning: "Receive [object] from [someone]",
    explanation: "Expresses receiving an item or gift from another person.",
    examples: [
      {
        japanese: "父に時計をもらいました。",
        furigana: "ちち に とけい を もらいました。",
        english: "I received a watch from my father."
      },
      {
        japanese: "友達から手紙をもらいました。",
        furigana: "ともだち から てがみ を もらいました。",
        english: "I received a letter from my friend."
      },
    ]
  },
  {
    id: "g-n5-91",
    title: "〜をくれる (Giving to Me: Noun o kureru)",
    japaneseTitle: "人 が 私に 物 を くれる",
    jlpt: 'N5',
    structure: "Giver [が] + Me [に] + 物 [を] くれる",
    meaning: "Give [object] to me / my family",
    explanation: "Used specifically when someone bestows a favor or physical gift upon the speaker or their in-group.",
    examples: [
      {
        japanese: "田中さんが私にお土産をくれました。",
        furigana: "たなかさん が わたし に おみやげ を くれました。",
        english: "Mr. Tanaka gave me a souvenir."
      },
      {
        japanese: "友達が綺麗な花をくれました。",
        furigana: "ともだち が きれいな はな を くれました。",
        english: "My friend gave me beautiful flowers."
      },
    ]
  },
  {
    id: "g-n5-92",
    title: "それから (And then / After that: sorekara)",
    japaneseTitle: "Sentence 1。それから、Sentence 2。",
    jlpt: 'N5',
    structure: "Sentence 1。それから、Sentence 2。",
    meaning: "And then / After that",
    explanation: "Connects sequential thoughts or lists additional upcoming activities.",
    examples: [
      {
        japanese: "晩御飯を食べました。それから、テレビを見ました。",
        furigana: "ばんごはん を たべました。それから、テレビ を みました。",
        english: "I ate dinner. And then, I watched TV."
      },
      {
        japanese: "買い物へ行きます。それから、友達と会います。",
        furigana: "かいもの へ いきます。それから、ともだち と あいます。",
        english: "I am going shopping. After that, I will meet a friend."
      },
    ]
  },
  {
    id: "g-n5-93",
    title: "そして (And / And also: soshite)",
    japaneseTitle: "Sentence 1。そして、Sentence 2。",
    jlpt: 'N5',
    structure: "Sentence 1。そして、Sentence 2。",
    meaning: "And / In addition",
    explanation: "Smooth sentence starter that connects coordinating facts or harmonious statements.",
    examples: [
      {
        japanese: "彼女は優しくて親切です。そして、とても頭がいいです。",
        furigana: "かのじょ は やさしくて しんせつ です。そして、とても あたま が いい です。",
        english: "She is gentle and kind. And, she is also very smart."
      },
      {
        japanese: "雨がやみました。そして、虹が出ました。",
        furigana: "あめ が やみました。そして、にじ が でました。",
        english: "The rain stopped. And then, a rainbow appeared."
      },
    ]
  },
  {
    id: "g-n5-94",
    title: "でも・しかし (However / But: demo, shikashi)",
    japaneseTitle: "Sentence 1。でも、Sentence 2。",
    jlpt: 'N5',
    structure: "Sentence 1。でも / しかし、Sentence 2。",
    meaning: "However / But nevertheless",
    explanation: "Introduces a contrasting counterpoint at the beginning of a new sentence.",
    examples: [
      {
        japanese: "毎日勉強しました。でも、試験は難しかったです。",
        furigana: "まいにち べんきょう しました。でも、しけん は むずかしかった です。",
        english: "I studied every day. However, the exam was still difficult."
      },
      {
        japanese: "日本料理は美味しいです。でも、納豆は食べられません。",
        furigana: "にほんりょうり は おいしい です。でも、なっとう は たべられません。",
        english: "Japanese food is delicious. But, I cannot eat natto."
      },
    ]
  },
  {
    id: "g-n5-95",
    title: "だから / ですから (Therefore / So: dakara / desukara)",
    japaneseTitle: "理由。だから、結果。",
    jlpt: 'N5',
    structure: "Reason。だから / ですから、Result。",
    meaning: "Therefore / So / Because of that",
    explanation: "Presents a logical consequence or natural outcome stemming from the previous statement.",
    examples: [
      {
        japanese: "明日はテストがあります。だから、今夜は早く寝ます。",
        furigana: "あした は テスト が あります。だから、こんや は はやく ねます。",
        english: "There is a test tomorrow. Therefore, I will sleep early tonight."
      },
      {
        japanese: "雨が降っています。ですから、傘を持っていきましょう。",
        furigana: "あめ が ふっています。ですから、かさ を もっていきましょう。",
        english: "It is raining. So, let's take an umbrella."
      },
    ]
  },
  // --- N4 PATTERNS ---
  {
    id: 'g-n4-1',
    title: '〜なければならない (~nakereba naranai)',
    japaneseTitle: '〜なければならない',
    jlpt: 'N4',
    structure: 'Verb [Nai-form without い] + なければならない',
    meaning: 'Must do / Have to do (Formal obligation)',
    explanation: 'Expresses an objective obligation or necessity.',
    examples: [
      {
        japanese: '明日、早く起きなければなりません。',
        furigana: 'あした、はやく おきなければ なりません。',
        english: 'I have to wake up early tomorrow.'
      }
    ]
  },
  {
    id: 'g-n4-2',
    title: '〜ても (~te mo)',
    japaneseTitle: '〜ても / 〜でも',
    jlpt: 'N4',
    structure: 'Verb [Te-form] + も / い-adj [drop い] + くても',
    meaning: 'Even if / Even though',
    explanation: 'Expresses concession where the result happens regardless of the condition.',
    examples: [
      {
        japanese: '雨が降っても、試合は続きます。',
        furigana: 'あめ が ふっても、しあい は つづきます。',
        english: 'Even if it rains, the match will continue.'
      }
    ]
  },
  {
    id: 'g-n4-3',
    title: '〜たら (~tara)',
    japaneseTitle: '〜たら',
    jlpt: 'N4',
    structure: 'Verb [Ta-form] + ら',
    meaning: 'If / When (Conditional)',
    explanation: 'General conditional used for both hypothetical conditions and sequential time.',
    examples: [
      {
        japanese: '日本へ行ったら、着物を着てみたいです。',
        furigana: 'にほん へ いったら、きもの を きて みたい です。',
        english: 'If I go to Japan, I want to try wearing a kimono.'
      }
    ]
  },
  {
    id: 'g-n4-4',
    title: '〜ようにする (~you ni suru)',
    japaneseTitle: '〜ようにする',
    jlpt: 'N4',
    structure: 'Verb [Dict / Nai] + ようにする',
    meaning: 'Make an effort to / Try to do',
    explanation: 'Expresses a conscious habit or continuous effort to achieve a certain action.',
    examples: [
      {
        japanese: '毎日野菜をたくさん食べるようにしています。',
        furigana: 'まいにち やさい を たくさん たべる ように しています。',
        english: 'I make an effort to eat plenty of vegetables every day.'
      }
    ]
  },
  {
    id: 'g-n4-5',
    title: '〜すぎる (~sugiru)',
    japaneseTitle: '〜すぎる',
    jlpt: 'N4',
    structure: 'Verb stem / Adj stem + すぎる',
    meaning: 'To overdo / Too much',
    explanation: 'Expresses that an action or quality goes beyond an appropriate degree.',
    examples: [
      {
        japanese: '食べすぎて、お腹が痛くなりました。',
        furigana: 'たべすぎて、おなか が いたく なりました。',
        english: 'I ate too much and my stomach started hurting.'
      }
    ]
  },

  // --- EXPANDED N4 GRAMMAR PATTERNS (g-n4-6 to g-n4-120) ---
  {
    id: 'g-n4-6',
    title: "〜(ら)れる (Passive Voice)",
    japaneseTitle: "受身形 (うけみけい)",
    jlpt: 'N4',
    structure: "Group 1: [a]-stem + れる (書かれる) / Group 2: stem + られる (食べられる) / Group 3: される, 来られる",
    meaning: "Be done / Passive voice / Suffering passive",
    explanation: "Used when the subject receives an action. Also used for \"suffering passive\" (迷惑の受身) when an action inconveniences the speaker.",
    examples: [
      {
        japanese: "私は先生に褒められました。",
        furigana: "わたし は せんせい に ほめられました。",
        english: "I was praised by the teacher."
      },
      {
        japanese: "雨に降られて、服が濡れてしまいました。",
        furigana: "あめ に ふられて、ふく が ぬれて しまいました。",
        english: "I got rained on, and my clothes got soaking wet."
      }
    ]
  },
  {
    id: 'g-n4-7',
    title: "〜(さ)せる (Causative Form)",
    japaneseTitle: "使役形 (しえきけい)",
    jlpt: 'N4',
    structure: "Group 1: [a]-stem + せる (行かせる) / Group 2: stem + させる (食べさせる) / Group 3: させる, 来させる",
    meaning: "Make someone do / Let someone do",
    explanation: "Expresses forcing someone to do an action, or granting permission to let them do an action.",
    examples: [
      {
        japanese: "母は弟に野菜を食べさせました。",
        furigana: "はは は おとうと に やさい を たべさせました。",
        english: "Mother made my younger brother eat his vegetables."
      },
      {
        japanese: "子供に好きな本を読ませます。",
        furigana: "こども に すきな ほん を よませます。",
        english: "I let my children read books that they like."
      }
    ]
  },
  {
    id: 'g-n4-8',
    title: "〜(さ)せられる (Causative-Passive Form)",
    japaneseTitle: "使役受身形 (しえきうけみけい)",
    jlpt: 'N4',
    structure: "Group 1: [a]-stem + せられる / される (待たされる) / Group 2: stem + させられる (食べさせられる) / Group 3: させられる",
    meaning: "Be made to do / Be forced to do against one's will",
    explanation: "Combines causative and passive to express being compelled or coerced by someone else to perform an action reluctantly.",
    examples: [
      {
        japanese: "病院で二時間も待たされました。",
        furigana: "びょういん で にじかん も またされました。",
        english: "I was made to wait for as long as two hours at the hospital."
      },
      {
        japanese: "嫌いなピーマンを食べさせられました。",
        furigana: "きらいな ピーマン を たべさせられました。",
        english: "I was forced to eat bell peppers, which I dislike."
      }
    ]
  },
  {
    id: 'g-n4-9',
    title: "お〜になる (Sonkeigo - Respectful Form)",
    japaneseTitle: "お + 動詞マス形 + になる",
    jlpt: 'N4',
    structure: "お + Verb [Masu-stem] + になる",
    meaning: "Respectfully does (honorific for superiors)",
    explanation: "Used to elevate the action of someone of higher social standing, customer, or teacher.",
    examples: [
      {
        japanese: "社長はもうお帰りになりました。",
        furigana: "しゃちょう は もう おかえり に なりました。",
        english: "The company president has already returned home."
      },
      {
        japanese: "先生はその本をお読みになりましたか。",
        furigana: "せんせい は その ほん を およみ に なりました か。",
        english: "Did you read that book, Professor?"
      }
    ]
  },
  {
    id: 'g-n4-10',
    title: "お〜する / いたす (Kenjougo - Humble Form)",
    japaneseTitle: "お + 動詞マス形 + する / いたす",
    jlpt: 'N4',
    structure: "お + Verb [Masu-stem] + する / いたします",
    meaning: "Humbly do (lowering one's own action)",
    explanation: "Used when the speaker performs an action that relates to or benefits a person of higher status or customer.",
    examples: [
      {
        japanese: "重いお荷物をお持ちします。",
        furigana: "おもい おにもつ を おもち します。",
        english: "Allow me to carry your heavy luggage."
      },
      {
        japanese: "後ほどお電話いたします。",
        furigana: "のちほど おでんわ いたします。",
        english: "I will humbly telephone you later."
      }
    ]
  },
  {
    id: 'g-n4-11',
    title: "いらっしゃる (Sonkeigo for 行く, 来る, いる)",
    japaneseTitle: "いらっしゃる / いらっしゃいます",
    jlpt: 'N4',
    structure: "Subject (superior) + は / が + いらっしゃる",
    meaning: "To go / To come / To be (Honorific)",
    explanation: "Honorific equivalent for 行く (go), 来る (come), and いる (exist/be).",
    examples: [
      {
        japanese: "先生は研究室にいらっしゃいます。",
        furigana: "せんせい は けんきゅうしつ に いらっしゃいます。",
        english: "The professor is in his laboratory."
      },
      {
        japanese: "明日はどちらへいらっしゃいますか。",
        furigana: "あした は どちら へ いらっしゃいます か。",
        english: "Where will you be going tomorrow, Sir?"
      }
    ]
  },
  {
    id: 'g-n4-12',
    title: "おっしゃる (Sonkeigo for 言う)",
    japaneseTitle: "おっしゃる / おっしゃいます",
    jlpt: 'N4',
    structure: "Subject (superior) + が + おっしゃる",
    meaning: "To say / To speak (Honorific)",
    explanation: "Honorific equivalent for 言う (to say).",
    examples: [
      {
        japanese: "先生がそうおっしゃいました。",
        furigana: "せんせい が そう おっしゃいました。",
        english: "The professor said so."
      },
      {
        japanese: "お名前は何とおっしゃいますか。",
        furigana: "おなまえ は なん と おっしゃいます か。",
        english: "May I ask what your honorable name is?"
      }
    ]
  },
  {
    id: 'g-n4-13',
    title: "ご覧になる (Sonkeigo for 見る)",
    japaneseTitle: "ご覧になる (ごらんになる)",
    jlpt: 'N4',
    structure: "Subject (superior) + を + ご覧になる",
    meaning: "To look / To see / To watch (Honorific)",
    explanation: "Honorific equivalent for 見る (to see).",
    examples: [
      {
        japanese: "昨日のニュースをご覧になりましたか。",
        furigana: "きのう の ニュース を ごらん に なりました か。",
        english: "Did you see yesterday's news?"
      },
      {
        japanese: "どうぞこの資料をご覧になってください。",
        furigana: "どうぞ この しりょう を ごらん に なって ください。",
        english: "Please take a look at these materials."
      }
    ]
  },
  {
    id: 'g-n4-14',
    title: "召し上がる (Sonkeigo for 食べる, 飲む)",
    japaneseTitle: "召し上がる (めしあがる)",
    jlpt: 'N4',
    structure: "Subject (superior) + を + 召し上がる",
    meaning: "To eat / To drink (Honorific)",
    explanation: "Honorific equivalent for 食べる (eat) and 飲む (drink).",
    examples: [
      {
        japanese: "温かいうちにどうぞ召し上がってください。",
        furigana: "あたたかい うち に どうぞ めしあがって ください。",
        english: "Please enjoy eating it while it is still warm."
      },
      {
        japanese: "お茶を召し上がりますか。",
        furigana: "おちゃ を めしあがります か。",
        english: "Would you care for some tea?"
      }
    ]
  },
  {
    id: 'g-n4-15',
    title: "参る (Kenjougo for 行く, 来る)",
    japaneseTitle: "参る (まいる) / 参ります",
    jlpt: 'N4',
    structure: "Speaker + は + 参る",
    meaning: "Humbly go / Humbly come",
    explanation: "Humble equivalent for 行く and 来る, lowering one's own actions before others.",
    examples: [
      {
        japanese: "明日十時に東京駅へ参ります。",
        furigana: "あした じゅうじ に とうきょうえき へ まいります。",
        english: "I will humbly arrive at Tokyo Station tomorrow at 10:00."
      },
      {
        japanese: "アメリカから参りましたスミスです。",
        furigana: "アメリカ から まいりました スミス です。",
        english: "I am Smith, and I have humbly come from America."
      }
    ]
  },
  {
    id: 'g-n4-16',
    title: "申す / 申し上げる (Kenjougo for 言う)",
    japaneseTitle: "申す (もうす) / 申し上げる",
    jlpt: 'N4',
    structure: "Speaker + と / を + 申す",
    meaning: "To say / To be called (Humble)",
    explanation: "Humble equivalent for 言う, commonly used in business self-introductions and polite phone calls.",
    examples: [
      {
        japanese: "田中と申します。どうぞよろしくお願いします。",
        furigana: "たなか と もうします。どうぞ よろしく おねがいします。",
        english: "I am called Tanaka. Pleased to make your acquaintance."
      },
      {
        japanese: "一言お礼を申し上げます。",
        furigana: "ひとこと おれい を もうしあげます。",
        english: "Allow me to express a brief word of gratitude."
      }
    ]
  },
  {
    id: 'g-n4-17',
    title: "拝見する (Kenjougo for 見る)",
    japaneseTitle: "拝見する (はいけんする)",
    jlpt: 'N4',
    structure: "Speaker + を + 拝見する",
    meaning: "Humbly look at / Humbly read",
    explanation: "Humble equivalent for 見る, used when looking at something belonging to someone of higher status.",
    examples: [
      {
        japanese: "先生のご本を拝見しました。",
        furigana: "せんせい の ごほん を はいけん しました。",
        english: "I humbly read your book, Professor."
      },
      {
        japanese: "メールを拝見いたしました。",
        furigana: "メール を はいけん いたしました。",
        english: "I have humbly viewed your email."
      }
    ]
  },
  {
    id: 'g-n4-18',
    title: "いただく (Kenjougo for もらう, 食べる, 飲む)",
    japaneseTitle: "いただく / いただきます",
    jlpt: 'N4',
    structure: "Speaker + を / から + いただく",
    meaning: "Humbly receive / Humbly eat / Humbly drink",
    explanation: "Humble equivalent for receiving something from someone of higher status, or consuming food/drink politely.",
    examples: [
      {
        japanese: "社長から素晴らしいプレゼントをいただきました。",
        furigana: "しゃちょう から すばらしい プレゼント を いただきました。",
        english: "I humbly received a wonderful present from the president."
      },
      {
        japanese: "美味しいお菓子をいただきます。",
        furigana: "おいしい おかし を いただきます。",
        english: "I will gladly partake in the delicious sweets."
      }
    ]
  },
  {
    id: 'g-n4-19',
    title: "くださる (Sonkeigo for くれる)",
    japaneseTitle: "くださる / くださいます",
    jlpt: 'N4',
    structure: "Superior + が + くださる",
    meaning: "To bestow upon me / Give to me (Honorific)",
    explanation: "Honorific equivalent for くれる, used when a superior gives something to the speaker.",
    examples: [
      {
        japanese: "先生が辞書をくださいました。",
        furigana: "せんせい が じしょ を くださいました。",
        english: "The teacher kindly gave me a dictionary."
      },
      {
        japanese: "先輩が良いアドバイスをくださいました。",
        furigana: "せんぱい が よい アドバイス を くださいました。",
        english: "My senior gave me great advice."
      }
    ]
  },
  {
    id: 'g-n4-20',
    title: "〜ば (Ba Conditional)",
    japaneseTitle: "仮定形 〜ば",
    jlpt: 'N4',
    structure: "Verb: [e]-stem + ば (行けば) / い-adj: drop い + ければ (安ければ) / Noun・な-adj: ならば",
    meaning: "If / As long as (General logical conditional)",
    explanation: "States that if condition A is fulfilled, condition B naturally or logically follows.",
    examples: [
      {
        japanese: "安ければ、たくさん買いたいです。",
        furigana: "やすければ、たくさん かいたい です。",
        english: "If it is cheap, I want to buy a lot."
      },
      {
        japanese: "毎日練習すれば、必ず上手になります。",
        furigana: "まいにち れんしゅう すれば、かならず じょうず に なります。",
        english: "If you practice every day, you will surely become skilled."
      }
    ]
  },
  {
    id: 'g-n4-21',
    title: "〜なら (~nara)",
    japaneseTitle: "〜なら",
    jlpt: 'N4',
    structure: "Noun / Plain form + なら",
    meaning: "If it is the case that / As for...",
    explanation: "Used to provide advice, suggestions, or conditions based on context or topic raised by the other person.",
    examples: [
      {
        japanese: "京都へ行くなら、秋が一番おすすめです。",
        furigana: "きょうと へ いく なら、あき が いちばん おすすめ です。",
        english: "If you are going to Kyoto, autumn is the most recommended season."
      },
      {
        japanese: "日本語の辞書なら、これが便利ですよ。",
        furigana: "にほんご の じしょ なら、これ が べんり です よ。",
        english: "If it's a Japanese dictionary you need, this one is very handy."
      }
    ]
  },
  {
    id: 'g-n4-22',
    title: "〜と (~to Conditional)",
    japaneseTitle: "動詞辞書形 + と",
    jlpt: 'N4',
    structure: "Verb [Dict] + と",
    meaning: "Whenever / When (Natural consequence / Fixed result)",
    explanation: "Expresses that whenever condition A happens, consequence B inevitably happens (automatic machines, natural phenomena, directions).",
    examples: [
      {
        japanese: "春になると、桜の花が咲きます。",
        furigana: "はる に なる と、さくら の はな が さきます。",
        english: "When spring arrives, cherry blossoms bloom."
      },
      {
        japanese: "このボタンを押すと、お釣りが出ます。",
        furigana: "この ボタン を おす と、おつり が でます。",
        english: "When you press this button, change comes out."
      }
    ]
  },
  {
    id: 'g-n4-23',
    title: "〜そうだ (Visual Appearance)",
    japaneseTitle: "様態のそうだ (〜そう)",
    jlpt: 'N4',
    structure: "Verb [Masu-stem] / い-adj [drop い] / な-adj [stem] + そうだ",
    meaning: "Looks like / Appears to be / About to happen",
    explanation: "Used when making a judgment based on visual observation or immediate impression.",
    examples: [
      {
        japanese: "今にも雨が降りそうですね。",
        furigana: "いま に も あめ が ふりそう です ね。",
        english: "It looks like it could rain at any moment."
      },
      {
        japanese: "このケーキはとても美味しそうです。",
        furigana: "この ケーキ は とても おいしそう です。",
        english: "This cake looks very delicious."
      }
    ]
  },
  {
    id: 'g-n4-24',
    title: "〜そうだ (Hearsay / Report)",
    japaneseTitle: "伝聞のそうだ",
    jlpt: 'N4',
    structure: "Plain form (Verb / Adj / Noun + だ) + そうだ",
    meaning: "I heard that... / Reportedly / According to...",
    explanation: "Transmits information heard from other sources without personal evaluation.",
    examples: [
      {
        japanese: "天気予報によると、明日は晴れるそうです。",
        furigana: "てんきよほう に よると、あした は はれる そう です。",
        english: "According to the weather forecast, tomorrow will be sunny."
      },
      {
        japanese: "田中さんは来月結婚するそうです。",
        furigana: "たなかさん は らいげつ けっこん する そう です。",
        english: "I heard that Mr. Tanaka is getting married next month."
      }
    ]
  },
  {
    id: 'g-n4-25',
    title: "〜ようだ / 〜ように (~you da / ~you ni)",
    japaneseTitle: "〜ようだ / 〜ように",
    jlpt: 'N4',
    structure: "Plain form / Noun + の + ようだ",
    meaning: "Appears to be / Looks like / As if",
    explanation: "Expresses reasoned conjecture based on evidence, or figurative comparison (\"like / as if\").",
    examples: [
      {
        japanese: "外は風が強いようです。",
        furigana: "そと は かぜ が つよい よう です。",
        english: "It appears that the wind is strong outside."
      },
      {
        japanese: "彼はまるで日本人のように日本語を話します。",
        furigana: "かれ は まるで にほんじん の ように にほんご を はなします。",
        english: "He speaks Japanese just like a native Japanese person."
      }
    ]
  },
  {
    id: 'g-n4-26',
    title: "〜らしい (~rashii)",
    japaneseTitle: "〜らしい",
    jlpt: 'N4',
    structure: "Plain form / Noun + らしい",
    meaning: "It seems that / Rumored to be / Behaving like",
    explanation: "Expresses conjecture based on external reliable information, or that something embodies its quintessential characteristics.",
    examples: [
      {
        japanese: "あの店はとても人気があるらしいです。",
        furigana: "あの みせ は とても にんき が ある らしい です。",
        english: "It seems that that shop is very popular."
      },
      {
        japanese: "今日は春らしい暖かい一日ですね。",
        furigana: "きょう は はるらしい あたたかい いちにち です ね。",
        english: "Today is a warm day, truly typical of springtime."
      }
    ]
  },
  {
    id: 'g-n4-27',
    title: "〜かもしれない (~kamoshirenai)",
    japaneseTitle: "〜かもしれない",
    jlpt: 'N4',
    structure: "Plain form (Noun / な-adj drop だ) + かもしれない",
    meaning: "Might / Maybe / Perhaps",
    explanation: "Expresses about a 50% probability that something might happen or be true.",
    examples: [
      {
        japanese: "明日は雪が降るかもしれません。",
        furigana: "あした は ゆき が ふる かもしれません。",
        english: "It might snow tomorrow."
      },
      {
        japanese: "彼はまだ道に迷っているのかもしれません。",
        furigana: "かれ は まだ みち に まよっている の かもしれません。",
        english: "He might still be lost on the way."
      }
    ]
  },
  {
    id: 'g-n4-28',
    title: "〜はずだ (~hazu da)",
    japaneseTitle: "〜はずだ",
    jlpt: 'N4',
    structure: "Plain form (Noun + の / な-adj + な) + はずだ",
    meaning: "Should be / Supposed to / Ought to be",
    explanation: "Expresses a confident expectation based on logical deduction or existing schedule.",
    examples: [
      {
        japanese: "彼は今日来るはずです。",
        furigana: "かれ は きょう くる はず です。",
        english: "He should be coming today."
      },
      {
        japanese: "鍵はカバンの中にあるはずです。",
        furigana: "かぎ は カバン の なか に ある はず です。",
        english: "The key ought to be inside the bag."
      }
    ]
  },
  {
    id: 'g-n4-29',
    title: "〜はずがない (~hazu ga nai)",
    japaneseTitle: "〜はずがない",
    jlpt: 'N4',
    structure: "Plain form (Noun + の / な-adj + な) + はずがない",
    meaning: "Cannot be / Impossible that...",
    explanation: "Strong conviction that something is impossible or cannot be true.",
    examples: [
      {
        japanese: "そんな嘘をつくはずがありません。",
        furigana: "そんな うそ を つく はず が ありません。",
        english: "It is impossible that he would tell such a lie."
      },
      {
        japanese: "彼が約束を忘れるはずがありません。",
        furigana: "かれ が やくそく を わすれる はず が ありません。",
        english: "There is no way he would forget the promise."
      }
    ]
  },
  {
    id: 'g-n4-30',
    title: "〜ために (Purpose / In order to)",
    japaneseTitle: "目的の 〜ために",
    jlpt: 'N4',
    structure: "Verb [Dict] / Noun + の + ために",
    meaning: "In order to / For the purpose of / For the sake of",
    explanation: "Expresses intentional action taken toward a purposeful objective.",
    examples: [
      {
        japanese: "大学に入るために、一生懸命勉強しています。",
        furigana: "だいがく に はいる ために、いっしょうけんめい べんきょう しています。",
        english: "I am studying with all my might in order to enter university."
      },
      {
        japanese: "健康のために、毎朝野菜ジュースを飲んでいます。",
        furigana: "けんこう の ために、まいあさ やさい ジュース を のんでいます。",
        english: "For the sake of health, I drink vegetable juice every morning."
      }
    ]
  },
  {
    id: 'g-n4-31',
    title: "〜ために (Reason / Because of)",
    japaneseTitle: "原因・理由の 〜ために",
    jlpt: 'N4',
    structure: "Plain form (Noun + の / な-adj + な) + ために",
    meaning: "Because of / Due to (Formal cause)",
    explanation: "Expresses cause or objective reason resulting in an involuntary outcome.",
    examples: [
      {
        japanese: "台風のために、電車が止まってしまいました。",
        furigana: "たいふう の ために、でんしゃ が とまって しまいました。",
        english: "Due to the typhoon, the trains stopped running."
      },
      {
        japanese: "事故のために、道路が渋滞しています。",
        furigana: "じこ の ために、どうろ が じゅうたい しています。",
        english: "Because of an accident, the road is congested."
      }
    ]
  },
  {
    id: 'g-n4-32',
    title: "〜ように (So that / In order that)",
    japaneseTitle: "〜ように",
    jlpt: 'N4',
    structure: "Verb [Potential / Nai / Non-volitional] + ように",
    meaning: "So that / In order that (Uncontrollable state)",
    explanation: "Used when doing something so that an uncontrollable condition or ability becomes realized.",
    examples: [
      {
        japanese: "風邪を引かないように、温かくしてください。",
        furigana: "かぜ を ひかない ように、あたたかく して ください。",
        english: "Please stay warm so that you don't catch a cold."
      },
      {
        japanese: "後ろの人にも聞こえるように、大きな声で話しました。",
        furigana: "うしろ の ひと に も きこえる ように、おおきな こえ で はなしました。",
        english: "I spoke in a loud voice so that people in the back could hear."
      }
    ]
  },
  {
    id: 'g-n4-33',
    title: "〜ようになる (~you ni naru)",
    japaneseTitle: "〜ようになる",
    jlpt: 'N4',
    structure: "Verb [Dict / Potential] + ようになる",
    meaning: "Come to be able to / Reach the point where",
    explanation: "Expresses a gradual transition from not being able to do something to being able to do it.",
    examples: [
      {
        japanese: "毎日練習して、漢字が読めるようになりました。",
        furigana: "まいにち れんしゅう して、かんじ が よめる ように なりました。",
        english: "Practicing every day, I have come to be able to read kanji."
      },
      {
        japanese: "最近、朝早く起きられるようになりました。",
        furigana: "さいきん、あさ はやく おきられる ように なりました。",
        english: "Recently, I have become able to wake up early in the morning."
      }
    ]
  },
  {
    id: 'g-n4-34',
    title: "〜(よ)うと思う (~you to omou)",
    japaneseTitle: "意向形 + と思う",
    jlpt: 'N4',
    structure: "Verb [Volitional form] + と思う / 思っている",
    meaning: "I think I will / I intend to do",
    explanation: "Expresses personal intent or consideration to perform an action.",
    examples: [
      {
        japanese: "今週末は家でゆっくり休もうと思います。",
        furigana: "こんしゅうまつ は いえ で ゆっくり やすもう と おもいます。",
        english: "I think I will take a good rest at home this weekend."
      },
      {
        japanese: "将来、日本で働こうと思っています。",
        furigana: "しょうらい、にほん で はたらこう と おもっています。",
        english: "I am planning to work in Japan in the future."
      }
    ]
  },
  {
    id: 'g-n4-35',
    title: "〜つもりだ (~tsumori da)",
    japaneseTitle: "〜つもりだ",
    jlpt: 'N4',
    structure: "Verb [Dict / Nai] + つもりだ",
    meaning: "Plan to / Intend to do (Firm intention)",
    explanation: "Expresses a concrete decision or strong conviction regarding future actions.",
    examples: [
      {
        japanese: "来年、JLPT N3を受けるつもりです。",
        furigana: "らいねん、JLPT N3 を うける つもり です。",
        english: "I intend to take JLPT N3 next year."
      },
      {
        japanese: "タバコは二度と吸わないつもりです。",
        furigana: "タバコ は にどと すわない つもり です。",
        english: "I intend to never smoke cigarettes again."
      }
    ]
  },
  {
    id: 'g-n4-36',
    title: "〜予定だ (~yotei da)",
    japaneseTitle: "〜予定だ",
    jlpt: 'N4',
    structure: "Verb [Dict] / Noun + の + 予定だ",
    meaning: "Is scheduled to / Planned to",
    explanation: "Refers to official, objective, or externally established schedules.",
    examples: [
      {
        japanese: "会議は午後二時に始まる予定です。",
        furigana: "かいぎ は ごご にじ に はじまる よてい です。",
        english: "The meeting is scheduled to start at 2:00 PM."
      },
      {
        japanese: "出張は一週間の予定です。",
        furigana: "しゅっちょう は いっしゅうかん の よてい です。",
        english: "The business trip is scheduled for one week."
      }
    ]
  },
  {
    id: 'g-n4-37',
    title: "〜たばかり (~ta bakari)",
    japaneseTitle: "動詞タ形 + ばかり",
    jlpt: 'N4',
    structure: "Verb [Ta-form] + ばかり",
    meaning: "Have just done (Psychological immediacy)",
    explanation: "Expresses that the speaker feels an action took place very recently, even if some time has passed.",
    examples: [
      {
        japanese: "さっき昼ご飯を食べたばかりです。",
        furigana: "さっき ひるごはん を たべた ばかり です。",
        english: "I have just finished eating lunch a moment ago."
      },
      {
        japanese: "このパソコンは先月買ったばかりなのに壊れました。",
        furigana: "この パソコン は せんげつ かった ばかり なのに こわれました。",
        english: "Even though I just bought this computer last month, it broke down."
      }
    ]
  },
  {
    id: 'g-n4-38',
    title: "〜ところだ (Time Phases)",
    japaneseTitle: "〜ところだ",
    jlpt: 'N4',
    structure: "Dict + ところ (about to) / Te-iru + ところ (in middle of) / Ta + ところ (just finished)",
    meaning: "About to do / In the middle of doing / Just finished doing",
    explanation: "Pinpoints the exact micro-phase of an action.",
    examples: [
      {
        japanese: "今から出かけるところです。",
        furigana: "いま から でかける ところ です。",
        english: "I am just about to head out right now."
      },
      {
        japanese: "ちょうどレポートを書いているところです。",
        furigana: "ちょうど レポート を かいている ところ です。",
        english: "I am right in the middle of writing the report."
      }
    ]
  },
  {
    id: 'g-n4-39',
    title: "〜ていく / 〜てくる (Spatiotemporal Flow)",
    japaneseTitle: "動詞テ形 + いく / くる",
    jlpt: 'N4',
    structure: "Verb [Te-form] + いく / くる",
    meaning: "Go on doing / Come to do / Move away or toward",
    explanation: "Expresses physical movement away from/toward speaker, or temporal continuation from past to future.",
    examples: [
      {
        japanese: "これからも日本語を勉強し続けていきます。",
        furigana: "これから も にほんご を べんきょう しつづけて いきます。",
        english: "I will continue studying Japanese into the future."
      },
      {
        japanese: "だんだん寒くなってきましたね。",
        furigana: "だんだん さむく なって きました ね。",
        english: "It has gradually grown colder up to now."
      }
    ]
  },
  {
    id: 'g-n4-40',
    title: "〜てみる (~te miru)",
    japaneseTitle: "動詞テ形 + みる",
    jlpt: 'N4',
    structure: "Verb [Te-form] + みる",
    meaning: "Try doing / Give doing a try",
    explanation: "Indicates trying an action to see what the outcome will be.",
    examples: [
      {
        japanese: "日本料理を自分で作ってみました。",
        furigana: "にほんりょうり を じぶん で つくって みました。",
        english: "I tried making Japanese cuisine by myself."
      },
      {
        japanese: "この靴を履いてみてもいいですか。",
        furigana: "この くつ を はいて みても いい です か。",
        english: "May I try on these shoes?"
      }
    ]
  },
  {
    id: 'g-n4-41',
    title: "〜ておく (~te oku)",
    japaneseTitle: "動詞テ形 + おく (〜とく)",
    jlpt: 'N4',
    structure: "Verb [Te-form] + おく",
    meaning: "Do in advance / Do for future convenience",
    explanation: "Indicates completing an action beforehand in preparation for a future event.",
    examples: [
      {
        japanese: "旅行の前にホテルを予約しておきました。",
        furigana: "りょこう の まえ に ホテル を よやく して おきました。",
        english: "I booked a hotel in advance before the trip."
      },
      {
        japanese: "使い終わったら元の場所に戻しておいてください。",
        furigana: "つかいおわったら もと の ばしょ に もどして おいて ください。",
        english: "When you finish using it, please return it to its original place."
      }
    ]
  },
  {
    id: 'g-n4-42',
    title: "〜てしまう (~te shimau)",
    japaneseTitle: "動詞テ形 + しまう (〜ちゃう)",
    jlpt: 'N4',
    structure: "Verb [Te-form] + しまう",
    meaning: "Completely finish / Inadvertently do (with regret)",
    explanation: "Signifies either completing an action entirely or an unintended mistake with regret.",
    examples: [
      {
        japanese: "宿題を全部やってしまいました。",
        furigana: "しゅくだい を ぜんぶ やって しまいました。",
        english: "I finished doing all my homework completely."
      },
      {
        japanese: "電車の中に傘を忘れてしまいました。",
        furigana: "でんしゃ の なか に かさ を わすれて しまいました。",
        english: "I unfortunately forgot my umbrella in the train."
      }
    ]
  },
  {
    id: 'g-n4-43',
    title: "〜てある (~te aru)",
    japaneseTitle: "他動詞テ形 + ある",
    jlpt: 'N4',
    structure: "Transitive Verb [Te-form] + ある",
    meaning: "Has been done (intentionally and remains in that state)",
    explanation: "Focuses on the current visible state resulting from an action intentionally done by someone.",
    examples: [
      {
        japanese: "壁にきれいな絵が掛けてあります。",
        furigana: "かべ に きれいな え が かけて あります。",
        english: "A pretty picture is hung on the wall."
      },
      {
        japanese: "机の上にメモが置いてあります。",
        furigana: "つくえ の うえ に メモ が おいて あります。",
        english: "A memo is placed on the desk."
      }
    ]
  },
  {
    id: 'g-n4-44',
    title: "〜てあげる (~te ageru)",
    japaneseTitle: "動詞テ形 + あげる",
    jlpt: 'N4',
    structure: "Verb [Te-form] + あげる",
    meaning: "Do a favor for someone",
    explanation: "The speaker performs a helpful action for someone of equal or lower status.",
    examples: [
      {
        japanese: "道に迷った人に道を教えてあげました。",
        furigana: "みち に まよった ひと に みち を おしえて あげました。",
        english: "I showed the way to someone who was lost."
      },
      {
        japanese: "妹の宿題を手伝ってあげました。",
        furigana: "いもうと の しゅくだい を てつだって あげました。",
        english: "I helped my younger sister with her homework."
      }
    ]
  },
  {
    id: 'g-n4-45',
    title: "〜てもらう (~te morau)",
    japaneseTitle: "動詞テ形 + もらう",
    jlpt: 'N4',
    structure: "Verb [Te-form] + もらう",
    meaning: "Have someone do something for you",
    explanation: "Used when the speaker receives a favor from someone, having asked them or benefited from their deed.",
    examples: [
      {
        japanese: "友達に写真を撮ってもらいました。",
        furigana: "ともだち に しゃしん を とって もらいました。",
        english: "I had my friend take a picture for me."
      },
      {
        japanese: "先生に作文を直してもらいました。",
        furigana: "せんせい に さくぶん を なおして もらいました。",
        english: "I had the teacher correct my essay."
      }
    ]
  },
  {
    id: 'g-n4-46',
    title: "〜てくれる (~te kureru)",
    japaneseTitle: "動詞テ形 + くれる",
    jlpt: 'N4',
    structure: "Giver + が + Verb [Te-form] + くれる",
    meaning: "Someone kindly does something for me",
    explanation: "Used when someone kindly performs an action for the speaker's benefit.",
    examples: [
      {
        japanese: "母がお弁当を作ってくれました。",
        furigana: "はは が おべんとう を つくって くれました。",
        english: "My mother kindly made a bento for me."
      },
      {
        japanese: "同僚が駅まで車で送ってくれました。",
        furigana: "どうりょう が えき まで くるま で おくって くれました。",
        english: "My coworker kindly gave me a ride to the station."
      }
    ]
  },
  {
    id: 'g-n4-47',
    title: "〜てくださる (~te kudasaru)",
    japaneseTitle: "動詞テ形 + くださる",
    jlpt: 'N4',
    structure: "Superior + が + Verb [Te-form] + くださる",
    meaning: "Someone of higher status kindly does something for me",
    explanation: "Honorific version of 〜てくれる, used when a teacher, boss, or elder does a favor.",
    examples: [
      {
        japanese: "先生が詳しく説明してくださいました。",
        furigana: "せんせい が くわしく せつめい して くださいました。",
        english: "The teacher kindly explained it in detail."
      },
      {
        japanese: "親切な方が席を譲ってくださいました。",
        furigana: "しんせつな かた が せき を ゆずって くださいました。",
        english: "A kind person kindly yielded their seat to me."
      }
    ]
  },
  {
    id: 'g-n4-48',
    title: "〜ていただく (~te itadaku)",
    japaneseTitle: "動詞テ形 + いただく",
    jlpt: 'N4',
    structure: "Speaker + は + Superior に + Verb [Te-form] + いただく",
    meaning: "Humbly receive the favor of someone doing something",
    explanation: "Humble version of 〜てもらう, elevating the person who performed the favor.",
    examples: [
      {
        japanese: "社長に推薦状を書いていただきました。",
        furigana: "しゃちょう に すいせんじょう を かいて いただきました。",
        english: "I was honored to have the president write a recommendation letter for me."
      },
      {
        japanese: "先生に発音を教えていただきました。",
        furigana: "せんせい に はつおん を おしえて いただきました。",
        english: "I had the teacher kindly teach me pronunciation."
      }
    ]
  },
  {
    id: 'g-n4-49',
    title: "〜たほうがいい / 〜ないほうがいい (Advice)",
    japaneseTitle: "〜たほうがいい / 〜ないほうがいい",
    jlpt: 'N4',
    structure: "Verb [Ta-form] / Verb [Nai-form] + ほうがいい",
    meaning: "Had better do / Had better not do (Advice)",
    explanation: "Used to provide direct advice or recommendation on the best course of action.",
    examples: [
      {
        japanese: "熱があるなら、早く寝たほうがいいですよ。",
        furigana: "ねつ が ある なら、はやく ねた ほう が いい です よ。",
        english: "If you have a fever, you had better go to sleep early."
      },
      {
        japanese: "夜遅くにはあまり食べないほうがいいです。",
        furigana: "よる おそく に は あまり たべない ほう が いい です。",
        english: "It is better not to eat much late at night."
      }
    ]
  },
  {
    id: 'g-n4-50',
    title: "〜たらどうですか (~tara dou desu ka)",
    japaneseTitle: "動詞タ形 + らどうですか",
    jlpt: 'N4',
    structure: "Verb [Ta-form] + らどうですか",
    meaning: "How about doing...? / Why don't you...?",
    explanation: "Gentle, friendly suggestion prompting someone to try an action.",
    examples: [
      {
        japanese: "疲れているなら、少し休んだらどうですか。",
        furigana: "つかれている なら、すこし やすんだら どう です か。",
        english: "If you are tired, how about resting for a little bit?"
      },
      {
        japanese: "先生に相談してみたらどうですか。",
        furigana: "せんせい に そうだん して みたら どう です か。",
        english: "Why don't you try consulting the teacher?"
      }
    ]
  },
  {
    id: 'g-n4-51',
    title: "AよりBのほうが〜 (Comparison)",
    japaneseTitle: "A より B のほうが",
    jlpt: 'N4',
    structure: "Noun A + より + Noun B + のほうが + Adj",
    meaning: "B is more [adjective] than A",
    explanation: "Standard comparative pattern contrasting two entities.",
    examples: [
      {
        japanese: "電車より新幹線のほうが速いです。",
        furigana: "でんしゃ より しんかんせん の ほう が はやい です。",
        english: "The bullet train is faster than the local train."
      },
      {
        japanese: "都会より田舎のほうが静かで好きです。",
        furigana: "とかい より いなか の ほう が しずか で すき です。",
        english: "I like the countryside more because it is quieter than the big city."
      }
    ]
  },
  {
    id: 'g-n4-52',
    title: "AはBほど〜ない (~hodo ~nai)",
    japaneseTitle: "A は B ほど 〜ない",
    jlpt: 'N4',
    structure: "Noun A + は + Noun B + ほど + Negative Adj/Verb",
    meaning: "A is not as [adjective] as B",
    explanation: "Expresses that entity A does not reach the extent or degree of entity B.",
    examples: [
      {
        japanese: "今年の冬は去年ほど寒くありません。",
        furigana: "ことし の ふゆ は きょねん ほど さむく ありません。",
        english: "This winter is not as cold as last year."
      },
      {
        japanese: "私は彼ほど上手に歌えません。",
        furigana: "わたし は かれ ほど じょうず に うたえません。",
        english: "I cannot sing as skillfully as him."
      }
    ]
  },
  {
    id: 'g-n4-53',
    title: "〜し、〜し (Listing Multiple Reasons)",
    japaneseTitle: "〜し、〜し",
    jlpt: 'N4',
    structure: "Plain form + し、Plain form + し",
    meaning: "And also / Because... and because...",
    explanation: "Lists two or more compounding reasons or qualities leading to an overall conclusion.",
    examples: [
      {
        japanese: "この部屋は広いし、家賃も安いし、気に入っています。",
        furigana: "この へや は ひろい し、やちん も やすい し、きにいっています。",
        english: "This room is spacious and the rent is cheap, so I really like it."
      },
      {
        japanese: "頭も痛いし熱もあるので、学校を休みます。",
        furigana: "あたま も いたい し ねつ も ある ので、がっこう を やすみます。",
        english: "My head hurts and I also have a fever, so I will take off from school."
      }
    ]
  },
  {
    id: 'g-n4-54',
    title: "〜ので (~node)",
    japaneseTitle: "〜ので",
    jlpt: 'N4',
    structure: "Plain form (Noun / な-adj + な) + ので",
    meaning: "Because / Since (Polite and objective reason)",
    explanation: "Soft, polite, objective causal conjunction preferred in business and formal contexts.",
    examples: [
      {
        japanese: "雨が降っているので、傘を持っていきます。",
        furigana: "あめ が ふっている ので、かさ を もっていきます。",
        english: "Because it is raining, I will take an umbrella."
      },
      {
        japanese: "用事がありますので、お先に失礼します。",
        furigana: "ようじ が あります ので、おさき に しつれい します。",
        english: "Since I have an errand, excuse me for leaving first."
      }
    ]
  },
  {
    id: 'g-n4-55',
    title: "〜のに (~noni)",
    japaneseTitle: "〜のに",
    jlpt: 'N4',
    structure: "Plain form (Noun / な-adj + な) + のに",
    meaning: "Even though / Despite / Although (Expressing surprise/frustration)",
    explanation: "Connects two clauses where the second clause strongly contradicts what is expected from the first.",
    examples: [
      {
        japanese: "一生懸命勉強したのに、試験に合格できませんでした。",
        furigana: "いっしょうけんめい べんきょう した のに、しけん に ごうかく できませんでした。",
        english: "Even though I studied with all my might, I could not pass the exam."
      },
      {
        japanese: "日曜日なのに、仕事に行かなければなりません。",
        furigana: "にちようび なのに、しごと に いかなければ なりません。",
        english: "Even though it is Sunday, I have to go to work."
      }
    ]
  },
  {
    id: 'g-n4-56',
    title: "〜しか〜ない (~shika ~nai)",
    japaneseTitle: "〜しか + 否定",
    jlpt: 'N4',
    structure: "Noun + しか + Negative verb",
    meaning: "Only / Nothing but (Expressing insufficiency)",
    explanation: "Always paired with a negative verb to emphasize that the quantity is disappointingly small.",
    examples: [
      {
        japanese: "財布の中に百円しかありません。",
        furigana: "さいふ の なか に ひゃくえん しか ありません。",
        english: "There is only 100 yen in my wallet."
      },
      {
        japanese: "ひらがなしか読めません。",
        furigana: "ひらがな しか よめません。",
        english: "I can only read hiragana (and nothing else)."
      }
    ]
  },
  {
    id: 'g-n4-57',
    title: "〜ばかり (~bakari)",
    japaneseTitle: "〜ばかり",
    jlpt: 'N4',
    structure: "Noun + ばかり / Verb [Te-form] + ばかりいる",
    meaning: "Nothing but / Only / Constantly doing",
    explanation: "Criticizes doing an action repeatedly or excessive presence of a certain thing.",
    examples: [
      {
        japanese: "弟はゲームばかりしています。",
        furigana: "おとうと は ゲーム ばかり しています。",
        english: "My younger brother is doing nothing but playing games."
      },
      {
        japanese: "油っこいものばかり食べると体に悪いです。",
        furigana: "あぶらっこい もの ばかり たべる と からだ に わるい です。",
        english: "Eating only greasy food is bad for your health."
      }
    ]
  },
  {
    id: 'g-n4-58',
    title: "〜までに (~made ni)",
    japaneseTitle: "〜までに",
    jlpt: 'N4',
    structure: "Noun (Time) / Verb [Dict] + までに",
    meaning: "By / Before (Deadline for action)",
    explanation: "Designates the latest deadline by which a single action must be completed.",
    examples: [
      {
        japanese: "明日までに宿題を出してください。",
        furigana: "あした までに しゅくだい を だして ください。",
        english: "Please submit the homework by tomorrow."
      },
      {
        japanese: "五時までに事務所へ戻ります。",
        furigana: "ごじ までに じむしょ へ もどります。",
        english: "I will return to the office by 5:00."
      }
    ]
  },
  {
    id: 'g-n4-59',
    title: "〜あいだ / 〜あいだに (While / During)",
    japaneseTitle: "〜間に (〜あいだに)",
    jlpt: 'N4',
    structure: "Verb [Te-iru] / Noun + の + あいだ / あいだに",
    meaning: "While / During the time that...",
    explanation: "あいだ describes an action continuing throughout the entire period; あいだに describes an instantaneous event inside the period.",
    examples: [
      {
        japanese: "夏休みの間に日本へ旅行しました。",
        furigana: "なつやすみ の あいだに にほん へ りょこう しました。",
        english: "During summer vacation, I took a trip to Japan."
      },
      {
        japanese: "子供が寝ている間、本を読みました。",
        furigana: "こども が ねている あいだ、ほん を よみました。",
        english: "While the children were sleeping, I read a book."
      }
    ]
  },
  {
    id: 'g-n4-60',
    title: "〜やすい (~yasui)",
    japaneseTitle: "動詞マス形 + やすい",
    jlpt: 'N4',
    structure: "Verb [Masu-stem] + やすい",
    meaning: "Easy to do / Prone to",
    explanation: "Attached to a verb stem to indicate that an action is easy to execute or something easily occurs.",
    examples: [
      {
        japanese: "このペンはとても書きやすいです。",
        furigana: "この ペン は とても かきやすい です。",
        english: "This pen is very easy to write with."
      },
      {
        japanese: "冬は風邪を引きやすい季節です。",
        furigana: "ふゆ は かぜ を ひきやすい きせつ です。",
        english: "Winter is a season where it is easy to catch a cold."
      }
    ]
  },
  {
    id: 'g-n4-61',
    title: "〜にくい (~nikui)",
    japaneseTitle: "動詞マス形 + にくい",
    jlpt: 'N4',
    structure: "Verb [Masu-stem] + にくい",
    meaning: "Hard to do / Difficult to",
    explanation: "Attached to a verb stem to denote physical or mechanical difficulty in performing an action.",
    examples: [
      {
        japanese: "この漢字は読みにくいですね。",
        furigana: "この かんじ は よみにくい です ね。",
        english: "This kanji is difficult to read, isn't it?"
      },
      {
        japanese: "雨の日は靴が滑りやすいので歩きにくいです。",
        furigana: "あめ の ひ は くつ が すべりやすい ので あるきにくい です。",
        english: "On rainy days shoes slip easily, so it is difficult to walk."
      }
    ]
  },
  {
    id: 'g-n4-62',
    title: "〜始める (~hajimeru)",
    japaneseTitle: "動詞マス形 + はじめる",
    jlpt: 'N4',
    structure: "Verb [Masu-stem] + はじめる",
    meaning: "Start to do / Begin doing",
    explanation: "Indicates the onset or beginning of a continuing action.",
    examples: [
      {
        japanese: "急に雨が降り始めました。",
        furigana: "きゅうに あめ が ふりはじめました。",
        english: "It suddenly began to rain."
      },
      {
        japanese: "去年から日本語を勉強し始めました。",
        furigana: "きょねん から にほんご を べんきょう しはじめました。",
        english: "I started studying Japanese last year."
      }
    ]
  },
  {
    id: 'g-n4-63',
    title: "〜終わる (~owaru)",
    japaneseTitle: "動詞マス形 + おわる",
    jlpt: 'N4',
    structure: "Verb [Masu-stem] + おわる",
    meaning: "Finish doing / Complete doing",
    explanation: "Expresses bringing an action or process to its complete conclusion.",
    examples: [
      {
        japanese: "本を全部読み終わりました。",
        furigana: "ほん を ぜんぶ よみおわりました。",
        english: "I finished reading the entire book."
      },
      {
        japanese: "ご飯を食べ終わったら、お皿を洗ってください。",
        furigana: "ごはん を たべおわったら、おさら を あらって ください。",
        english: "When you finish eating your meal, please wash the plates."
      }
    ]
  },
  {
    id: 'g-n4-64',
    title: "〜続ける (~tsuzukeru)",
    japaneseTitle: "動詞マス形 + つづける",
    jlpt: 'N4',
    structure: "Verb [Masu-stem] + つづける",
    meaning: "Continue doing / Keep on doing",
    explanation: "Expresses sustaining an action or state without interruption.",
    examples: [
      {
        japanese: "三時間走り続けました。",
        furigana: "さんじかん はしりつづけました。",
        english: "I kept on running continuously for three hours."
      },
      {
        japanese: "雨が一日中降り続いています。",
        furigana: "あめ が いちにちじゅう ふりつづけて います。",
        english: "The rain has been continuing to fall all day long."
      }
    ]
  },
  {
    id: 'g-n4-65',
    title: "〜方 (~kata - Way of doing)",
    japaneseTitle: "動詞マス形 + かた",
    jlpt: 'N4',
    structure: "Verb [Masu-stem] + かた (Noun + の + Verb-kata)",
    meaning: "Way of doing / How to do",
    explanation: "Turns a verb into a noun designating the method or manner of execution.",
    examples: [
      {
        japanese: "この漢字の読み方を教えてください。",
        furigana: "この かんじ の よみかた を おしえて ください。",
        english: "Please teach me how to read this kanji."
      },
      {
        japanese: "お箸の使い方に慣れました。",
        furigana: "おはし の つかいかた に なれました。",
        english: "I have become accustomed to the way of using chopsticks."
      }
    ]
  },
  {
    id: 'g-n4-66',
    title: "〜出す (~dasu - Suddenly burst out doing)",
    japaneseTitle: "動詞マス形 + だす",
    jlpt: 'N4',
    structure: "Verb [Masu-stem] + だす",
    meaning: "Suddenly start doing / Burst into",
    explanation: "Expresses an abrupt, unexpected inception of an action or natural phenomenon.",
    examples: [
      {
        japanese: "赤ちゃんが急に泣き出しました。",
        furigana: "あかちゃん が きゅうに なきだしました。",
        english: "The baby suddenly burst into tears."
      },
      {
        japanese: "空が暗くなって雨が降り出しました。",
        furigana: "そら が くらくなって あめ が ふりだしました。",
        english: "The sky darkened and rain burst forth."
      }
    ]
  },
  {
    id: 'g-n4-67',
    title: "〜がる (~garu - Shows signs of)",
    japaneseTitle: "〜がる",
    jlpt: 'N4',
    structure: "い-adj [drop い] / な-adj [stem] + がる / たい [drop い] + がる",
    meaning: "Shows signs of / Seems to feel (Third person)",
    explanation: "Used to describe feelings, desires, or physical sensations of a third party observable by their outward behavior.",
    examples: [
      {
        japanese: "妹は新しいおもちゃを欲しがっています。",
        furigana: "いもうと は あたらしい おもちゃ を ほしがっています。",
        english: "My little sister visibly wants a new toy."
      },
      {
        japanese: "彼は寒がって上着を着ました。",
        furigana: "かれ は さむがって うわぎ を きました。",
        english: "Showing signs of feeling cold, he put on a jacket."
      }
    ]
  },
  {
    id: 'g-n4-68',
    title: "〜ように言う (~you ni iu - Tell someone to)",
    japaneseTitle: "〜ように言う / 伝える",
    jlpt: 'N4',
    structure: "Verb [Dict / Nai] + ように言う / 頼む / 伝える",
    meaning: "Tell / Ask someone to do (Indirect quotation)",
    explanation: "Used to indirectly relay a command, request, or instruction.",
    examples: [
      {
        japanese: "先生に宿題を忘れないように言われました。",
        furigana: "せんせい に しゅくだい を わすれない ように いわれました。",
        english: "I was told by the teacher not to forget the homework."
      },
      {
        japanese: "田中さんに電話するように伝えてください。",
        furigana: "たなかさん に でんわ する ように つたえて ください。",
        english: "Please tell Mr. Tanaka to give a phone call."
      }
    ]
  },
  {
    id: 'g-n4-69',
    title: "〜前に (~mae ni)",
    japaneseTitle: "動詞辞書形 + まえに",
    jlpt: 'N4',
    structure: "Verb [Dict] / Noun + の + まえに",
    meaning: "Before doing / In front of",
    explanation: "Indicates the time prior to an action.",
    examples: [
      {
        japanese: "食事の前に手を洗いましょう。",
        furigana: "しょくじ の まえ に て を あらいましょう。",
        english: "Let's wash our hands before meals."
      },
      {
        japanese: "日本へ来る前に平仮名を覚えました。",
        furigana: "にほん へ くる まえ に ひらがな を おぼえました。",
        english: "I memorized hiragana before coming to Japan."
      }
    ]
  },
  {
    id: 'g-n4-70',
    title: "〜た後で (~ta ato de)",
    japaneseTitle: "動詞タ形 + あとで",
    jlpt: 'N4',
    structure: "Verb [Ta-form] / Noun + の + あとで",
    meaning: "After doing...",
    explanation: "Explicitly specifies chronological order where event B takes place after event A has completed.",
    examples: [
      {
        japanese: "仕事が終わった後で、飲みに行きましょう。",
        furigana: "しごと が おわった あと で、のみ に いきましょう。",
        english: "After work is finished, let's go for a drink."
      },
      {
        japanese: "説明を聞いた後で質問してください。",
        furigana: "せつめい を きいた あと で しつもん して ください。",
        english: "Please ask questions after listening to the explanation."
      }
    ]
  },
  {
    id: 'g-n4-71',
    title: "〜ながら (~nagara - While doing)",
    japaneseTitle: "動詞マス形 + ながら",
    jlpt: 'N4',
    structure: "Verb [Masu-stem] + ながら",
    meaning: "While doing (Simultaneous action by same subject)",
    explanation: "Describes performing secondary action A while doing the main action B.",
    examples: [
      {
        japanese: "音楽を聞きながら勉強するのが好きです。",
        furigana: "おんがく を ききながら べんきょう する の が すき です。",
        english: "I like studying while listening to music."
      },
      {
        japanese: "お茶を飲みながら友達とおしゃべりしました。",
        furigana: "おちゃ を のみながら ともだち と おしゃべり しました。",
        english: "I chatted with my friend while sipping tea."
      }
    ]
  },
  {
    id: 'g-n4-72',
    title: "〜の / 〜こと (Nominalization)",
    japaneseTitle: "動詞辞書形 + の / こと",
    jlpt: 'N4',
    structure: "Verb [Plain] + の / こと",
    meaning: "Doing... / The act of doing",
    explanation: "Converts a verb phrase into a noun clause acting as subject or object.",
    examples: [
      {
        japanese: "外国語を勉強するのは楽しいです。",
        furigana: "がいこくご を べんきょう する の は たのしい です。",
        english: "Studying foreign languages is fun."
      },
      {
        japanese: "私の夢は世界一周旅行をすることです。",
        furigana: "わたし の ゆめ は せかいいっしゅう りょこう を する こと です。",
        english: "My dream is to travel around the world."
      }
    ]
  },
  {
    id: 'g-n4-73',
    title: "〜くする / 〜にする (To make something ...)",
    japaneseTitle: "形容詞 + する",
    jlpt: 'N4',
    structure: "い-adj [drop い] + くする / な-adj + にする / Noun + にする",
    meaning: "To make something [adjective] (Volitional change)",
    explanation: "Expresses intentionally changing the state, appearance, or quality of an object.",
    examples: [
      {
        japanese: "テレビの音を小さくしてください。",
        furigana: "テレビ の おと を ちいさく して ください。",
        english: "Please make the TV sound quieter (turn down the volume)."
      },
      {
        japanese: "部屋をきれいに掃除しました。",
        furigana: "へや を きれいに そうじ しました。",
        english: "I cleaned the room and made it tidy."
      }
    ]
  },
  {
    id: 'g-n4-74',
    title: "〜にする (~ni suru - Decide on)",
    japaneseTitle: "名詞 + にする",
    jlpt: 'N4',
    structure: "Noun + にする",
    meaning: "Decide on / Choose",
    explanation: "Used when making a selection from options, such as ordering at restaurants.",
    examples: [
      {
        japanese: "私はコーヒーにします。",
        furigana: "わたし は コーヒー に します。",
        english: "I will decide on coffee (I'll have coffee)."
      },
      {
        japanese: "次の休日は温泉旅行にしよう。",
        furigana: "つぎ の きゅうじつ は おんせん りょこう に しよう。",
        english: "Let's decide on a hot spring trip for our next holiday."
      }
    ]
  },
  {
    id: 'g-n4-75',
    title: "〜ないで (~nai de - Without doing)",
    japaneseTitle: "動詞ナイ形 + で",
    jlpt: 'N4',
    structure: "Verb [Nai-form] + で",
    meaning: "Without doing / Instead of doing",
    explanation: "Describes carrying out an action without having performed another expected action.",
    examples: [
      {
        japanese: "朝ご飯を食べないで学校へ行きました。",
        furigana: "あさごはん を たべないで がっこう へ いきました。",
        english: "I went to school without eating breakfast."
      },
      {
        japanese: "辞書を見ないで新聞を読みました。",
        furigana: "じしょ を みないで しんぶん を よみました。",
        english: "I read the newspaper without consulting a dictionary."
      }
    ]
  },
  {
    id: 'g-n4-76',
    title: "〜ずに (~zu ni - Without doing [Formal])",
    japaneseTitle: "動詞ナイ形 + ずに (せず -> せずに)",
    jlpt: 'N4',
    structure: "Verb [Nai stem] + ずに (する -> せずに)",
    meaning: "Without doing (Written/formal form of ないで)",
    explanation: "More formal/literary equivalent of 〜ないで.",
    examples: [
      {
        japanese: "昨夜は一睡もせずに勉強しました。",
        furigana: "ゆうべ は いっすい も せずに べんきょう しました。",
        english: "Last night I studied without sleeping a single wink."
      },
      {
        japanese: "諦めずに最後まで走り抜きました。",
        furigana: "あきらめずに さいご まで はしりぬきました。",
        english: "Without giving up, I ran all the way to the finish line."
      }
    ]
  },
  {
    id: 'g-n4-77',
    title: "〜という (~to iu - Called / Named)",
    japaneseTitle: "名詞 + という + 名詞",
    jlpt: 'N4',
    structure: "Noun 1 + という + Noun 2",
    meaning: "Called / Named / Known as",
    explanation: "Identifies a specific name or concept unfamiliar to the listener.",
    examples: [
      {
        japanese: "「君の名は」という映画を見ましたか。",
        furigana: "「きみのなは」という えいが を みました か。",
        english: "Did you watch the movie called \"Your Name\"?"
      },
      {
        japanese: "サクラという犬を飼っています。",
        furigana: "サクラ という いぬ を かっています。",
        english: "I keep a dog named Sakura."
      }
    ]
  },
  {
    id: 'g-n4-78',
    title: "〜ということ (~to iu koto - That ...)",
    japaneseTitle: "〜ということ",
    jlpt: 'N4',
    structure: "Plain sentence + ということ / というのは",
    meaning: "The fact that... / That...",
    explanation: "Turns an entire clause into an abstract fact or summary of content.",
    examples: [
      {
        japanese: "彼が合格したということを聞きました。",
        furigana: "かれ が ごうかく した という こと を ききました。",
        english: "I heard the fact that he passed."
      },
      {
        japanese: "健康が一番大切だということです。",
        furigana: "けんこう が いちばん たいせつ だ という こと です。",
        english: "It means that health is the most important thing."
      }
    ]
  },
  {
    id: 'g-n4-79',
    title: "〜かどうか (~ka dou ka - Whether or not)",
    japaneseTitle: "〜かどうか",
    jlpt: 'N4',
    structure: "Plain form (Noun / な-adj drop だ) + かどうか",
    meaning: "Whether or not...",
    explanation: "Embeds a yes/no question clause inside a larger sentence.",
    examples: [
      {
        japanese: "明日雨が降るかどうか分かりません。",
        furigana: "あした あめ が ふる か どうか わかりません。",
        english: "I don't know whether or not it will rain tomorrow."
      },
      {
        japanese: "彼が来るかどうか電話で確かめましょう。",
        furigana: "かれ が くる か どうか でんわ で たしかめましょう。",
        english: "Let's check by phone whether or not he is coming."
      }
    ]
  },
  {
    id: 'g-n4-80',
    title: "疑問詞 + 〜か (Embedded Wh-Question)",
    japaneseTitle: "疑問詞 + 〜か",
    jlpt: 'N4',
    structure: "Question word + Plain form + か",
    meaning: "Who/what/where/when... (Embedded clause)",
    explanation: "Embeds a wh-question clause as the object or subject of another verb.",
    examples: [
      {
        japanese: "鍵をどこに置いたか忘れました。",
        furigana: "かぎ を どこ に おいた か わすれました。",
        english: "I forgot where I put the key."
      },
      {
        japanese: "誰が来るか教えてください。",
        furigana: "だれ が くる か おしえて ください。",
        english: "Please tell me who will come."
      }
    ]
  },
  {
    id: 'g-n4-81',
    title: "〜ていただけませんか (Polite Request)",
    japaneseTitle: "〜ていただけませんか / くださいませんか",
    jlpt: 'N4',
    structure: "Verb [Te-form] + いただけませんか / くださいませんか",
    meaning: "Could you please...? / Would you be so kind as to...?",
    explanation: "Highly polite request asking a favor from a superior, customer, or stranger.",
    examples: [
      {
        japanese: "もう一度説明していただけませんか。",
        furigana: "もういちど せつめい して いただけませんか。",
        english: "Could you please explain it one more time?"
      },
      {
        japanese: "写真を撮っていただけませんか。",
        furigana: "しゃしん を とって いただけませんか。",
        english: "Could you please take a photo for us?"
      }
    ]
  },
  {
    id: 'g-n4-82',
    title: "〜てはいけない (~te wa ikenai)",
    japaneseTitle: "動詞テ形 + はいけない",
    jlpt: 'N4',
    structure: "Verb [Te-form] + はいけない / はだめだ",
    meaning: "Must not do / Not allowed to do",
    explanation: "States a clear prohibition or rule forbidding an action.",
    examples: [
      {
        japanese: "ここでタバコを吸ってはいけません。",
        furigana: "ここ で タバコ を すって は いけません。",
        english: "You must not smoke cigarettes here."
      },
      {
        japanese: "テスト中に友達と話してはいけません。",
        furigana: "テスト ちゅう に ともだち と はなして は いけません。",
        english: "You must not speak with friends during the test."
      }
    ]
  },
  {
    id: 'g-n4-83',
    title: "〜なくてはいけない (~nakute wa ikenai)",
    japaneseTitle: "〜なくてはいけない",
    jlpt: 'N4',
    structure: "Verb [Nai stem] + なくてはいけない",
    meaning: "Must do / Have to do",
    explanation: "Similar to 〜なければならない; expresses an everyday personal obligation.",
    examples: [
      {
        japanese: "今日は早く帰らなくてはいけません。",
        furigana: "きょう は はやく かえらなくて は いけません。",
        english: "I have to go home early today."
      },
      {
        japanese: "毎日薬を飲まなくてはいけません。",
        furigana: "まいにち くすり を のまなくて は いけません。",
        english: "I must take my medicine every day."
      }
    ]
  },
  {
    id: 'g-n4-84',
    title: "〜なくてもいい (~nakute mo ii)",
    japaneseTitle: "〜なくてもいい",
    jlpt: 'N4',
    structure: "Verb [Nai stem] + なくてもいい",
    meaning: "Do not need to / It is okay not to do",
    explanation: "Releases the listener from necessity or obligation.",
    examples: [
      {
        japanese: "明日は休みだから、早く起きなくてもいいです。",
        furigana: "あした は やすみ だから、はやく おきなくても いい です。",
        english: "Tomorrow is a holiday, so you don't have to wake up early."
      },
      {
        japanese: "無理に全部食べなくてもいいですよ。",
        furigana: "むりに ぜんぶ たべなくても いい です よ。",
        english: "You don't have to force yourself to eat everything."
      }
    ]
  },
  {
    id: 'g-n4-85',
    title: "〜てもいい (~te mo ii)",
    japaneseTitle: "動詞テ形 + もいい",
    jlpt: 'N4',
    structure: "Verb [Te-form] + もいい / もかまわない",
    meaning: "May I...? / It is permissible to...",
    explanation: "Asks for or grants permission to do an action.",
    examples: [
      {
        japanese: "ここに座ってもいいですか。",
        furigana: "ここ に すわっても いい です か。",
        english: "May I sit here?"
      },
      {
        japanese: "辞書を使ってもかまいません。",
        furigana: "じしょ を つかっても かまいません。",
        english: "It does not matter if you use a dictionary (You may use it)."
      }
    ]
  },
  {
    id: 'g-n4-86',
    title: "〜がち (~gachi - Tendency to)",
    japaneseTitle: "動詞マス形 / 名詞 + がち",
    jlpt: 'N4',
    structure: "Verb [Masu-stem] / Noun + がち",
    meaning: "Tend to / Prone to (Undesirable tendency)",
    explanation: "Describes a frequent, usually negative recurrence of a state or habit.",
    examples: [
      {
        japanese: "冬は風邪を引きがちになります。",
        furigana: "ふゆ は かぜ を ひきがち に なります。",
        english: "In winter, one tends to catch colds."
      },
      {
        japanese: "最近、運動不足になりがちです。",
        furigana: "さいきん、うんどうぶそく に なりがち です。",
        english: "Recently, I tend to lack exercise."
      }
    ]
  },
  {
    id: 'g-n4-87',
    title: "〜べきだ (~beki da - Should / Ought to)",
    japaneseTitle: "動詞辞書形 + べきだ",
    jlpt: 'N4',
    structure: "Verb [Dict] + べきだ (する -> すべきだ)",
    meaning: "Should do / Ought to do (Moral duty)",
    explanation: "Expresses that doing something is morally right, common sense, or a social obligation.",
    examples: [
      {
        japanese: "約束は守るべきです。",
        furigana: "やくそく は まもる べき です。",
        english: "One ought to keep promises."
      },
      {
        japanese: "若いうちにたくさん本を読むべきだと思います。",
        furigana: "わかい うち に たくさん ほん を よむ べき だ と おもいます。",
        english: "I believe one should read many books while young."
      }
    ]
  },
  {
    id: 'g-n4-88',
    title: "〜くらい / 〜ぐらい (Approximate extent / At least)",
    japaneseTitle: "〜くらい / 〜ぐらい",
    jlpt: 'N4',
    structure: "Noun / Plain form + くらい / ぐらい",
    meaning: "About / Approximately / To the extent that",
    explanation: "Indicates approximation, comparative extent, or minimal standard (\"at least\").",
    examples: [
      {
        japanese: "一時間ぐらい散歩しました。",
        furigana: "いちじかん ぐらい さんぽ しました。",
        english: "I walked for about an hour."
      },
      {
        japanese: "自分の名前くらい漢字で書けます。",
        furigana: "じぶん の なまえ くらい かんじ で かけます。",
        english: "I can at least write my own name in kanji."
      }
    ]
  },
  {
    id: 'g-n4-89',
    title: "〜てくる (Physical emergence / Inception)",
    japaneseTitle: "変化の 〜てくる",
    jlpt: 'N4',
    structure: "Verb [Te-form] + くる",
    meaning: "Begins to... / Starts coming into being",
    explanation: "Focuses on a sensation, natural phenomenon, or urge surfacing to awareness.",
    examples: [
      {
        japanese: "お腹が空いてきました。",
        furigana: "おなか が すいて きました。",
        english: "I have started getting hungry."
      },
      {
        japanese: "西の空から雨雲が広がってきました。",
        furigana: "にし の そら から あまぐも が ひろがって きました。",
        english: "Rain clouds have begun spreading from the western sky."
      }
    ]
  },
  {
    id: 'g-n4-90',
    title: "〜と思う (~to omou - I think that...)",
    japaneseTitle: "普通形 + と思う",
    jlpt: 'N4',
    structure: "Plain form + と思う",
    meaning: "I think that... / In my opinion",
    explanation: "States a personal belief, conjecture, or opinion.",
    examples: [
      {
        japanese: "明日の試験は難しくないと思います。",
        furigana: "あした の しけん は むずかしくない と おもいます。",
        english: "I think tomorrow's exam will not be difficult."
      },
      {
        japanese: "日本はとても安全な国だと思います。",
        furigana: "にほん は とても あんぜんな くに だ と おもいます。",
        english: "I think Japan is a very safe country."
      }
    ]
  },
  {
    id: 'g-n4-91',
    title: "〜んだって / んですって (Casual Hearsay)",
    japaneseTitle: "〜んだって / 〜んですって",
    jlpt: 'N4',
    structure: "Plain form + んだって / んですって",
    meaning: "I heard that... / They say that...",
    explanation: "Conversational hearsay marker used among friends and family.",
    examples: [
      {
        japanese: "佐藤さん、来月引っ越すんだって。",
        furigana: "さとうさん、らいげつ ひっこす ん だって。",
        english: "I heard that Mr. Sato is moving next month."
      },
      {
        japanese: "あの店、明日からセールなんだって！",
        furigana: "あの みせ、あした から セール なんだって！",
        english: "They say that store has a big sale starting tomorrow!"
      }
    ]
  },
  {
    id: 'g-n4-92',
    title: "〜のだ / 〜んです (Explanatory Nuance)",
    japaneseTitle: "〜のだ / 〜んです",
    jlpt: 'N4',
    structure: "Plain form (Noun / な-adj + な) + のだ / んです",
    meaning: "It is that... / Explaining a reason or situation",
    explanation: "Provides shared background, emphasizes an explanation, or clarifies an unspoken reason.",
    examples: [
      {
        japanese: "バスが遅れたんです。だから遅刻しました。",
        furigana: "バス が おくれた ん です。だから ちこく しました。",
        english: "It was that the bus was late. That is why I was late."
      },
      {
        japanese: "どこへ行くんですか。",
        furigana: "どこ へ いく ん です か。",
        english: "Where is it that you are going?"
      }
    ]
  },
  {
    id: 'g-n4-93',
    title: "〜たら (Discovery / Unexpected outcome)",
    japaneseTitle: "発見の 〜たら",
    jlpt: 'N4',
    structure: "Verb [Ta-form] + ら、〜た",
    meaning: "When I did..., I found that...",
    explanation: "When action A was performed, surprise or discovery B occurred unexpectedly.",
    examples: [
      {
        japanese: "窓を開けたら、雪が積もっていました。",
        furigana: "まど を あけたら、ゆき が つもっていました。",
        english: "When I opened the window, snow had piled up."
      },
      {
        japanese: "デパートへ行ったら、偶然先生に会いました。",
        furigana: "デパート へ いったら、ぐうぜん せんせい に あいました。",
        english: "When I went to the department store, I ran into the teacher by chance."
      }
    ]
  },
  {
    id: 'g-n4-94',
    title: "〜ている (Habitual action / Continuing state)",
    japaneseTitle: "習慣・状態の 〜ている",
    jlpt: 'N4',
    structure: "Verb [Te-form] + いる",
    meaning: "Is doing (habitually) / Is in the state of",
    explanation: "Expresses ongoing occupational routine, current marital/residency status, or persistent state.",
    examples: [
      {
        japanese: "私は銀行で働いています。",
        furigana: "わたし は ぎんこう で はたらいて います。",
        english: "I work at a bank."
      },
      {
        japanese: "田中さんは結婚しています。",
        furigana: "たなかさん は けっこん して います。",
        english: "Mr. Tanaka is married."
      }
    ]
  },
  {
    id: 'g-n4-95',
    title: "〜ことができる (Ability / Capability)",
    japaneseTitle: "動詞辞書形 + ことができる",
    jlpt: 'N4',
    structure: "Verb [Dict] + ことができる",
    meaning: "Can do / Be able to do",
    explanation: "Formal equivalent to the potential form, stating objective or circumstantial ability.",
    examples: [
      {
        japanese: "ピアノを弾くことができます。",
        furigana: "ピアノ を ひく こと が できます。",
        english: "I can play the piano."
      },
      {
        japanese: "この部屋ではインターネットを使うことができます。",
        furigana: "この へや で は インターネット を つかう こと が できます。",
        english: "You can use the internet in this room."
      }
    ]
  },
  {
    id: 'g-n4-96',
    title: "〜が好き / 〜が得意 (State of liking / Proficiency)",
    japaneseTitle: "〜が好きだ / 〜が得意だ",
    jlpt: 'N4',
    structure: "Noun + が + 好き / 嫌い / 得意 / 下手",
    meaning: "Like / Dislike / Be good at / Be poor at",
    explanation: "Evaluative adjectives take が to mark the target of affection or proficiency.",
    examples: [
      {
        japanese: "私はスポーツをするのが好きです。",
        furigana: "わたし は スポーツ を する の が すき です。",
        english: "I like playing sports."
      },
      {
        japanese: "彼は料理を作るのが得意です。",
        furigana: "かれ は りょうり を つくる の が とくい です。",
        english: "He is good at cooking food."
      }
    ]
  },
  {
    id: 'g-n4-97',
    title: "〜で (Means, Material, Cause)",
    japaneseTitle: "手段・原因の 〜で",
    jlpt: 'N4',
    structure: "Noun + で",
    meaning: "By means of / Made of / Due to",
    explanation: "Indicates the tool, vehicle, raw material, or non-volitional cause.",
    examples: [
      {
        japanese: "日本語で手紙を書きました。",
        furigana: "にほんご で てがみ を かきました。",
        english: "I wrote a letter in Japanese."
      },
      {
        japanese: "地震でビルが揺れました。",
        furigana: "じしん で ビル が ゆれました。",
        english: "The building shook due to the earthquake."
      }
    ]
  },
  {
    id: 'g-n4-98',
    title: "〜と一緒に (~to issho ni)",
    japaneseTitle: "〜といっしょに",
    jlpt: 'N4',
    structure: "Noun + と一緒に",
    meaning: "Together with...",
    explanation: "Expresses joint action carried out alongside a companion.",
    examples: [
      {
        japanese: "家族と一緒に晩ご飯を食べました。",
        furigana: "かぞく と いっしょに ばんごはん を たべました。",
        english: "I ate dinner together with my family."
      },
      {
        japanese: "友達と一緒に図書館へ行きます。",
        furigana: "ともだち と いっしょに としょかん へ いきます。",
        english: "I go to the library together with my friend."
      }
    ]
  },
  {
    id: 'g-n4-99',
    title: "〜から〜まで (From ... to ...)",
    japaneseTitle: "〜から〜まで",
    jlpt: 'N4',
    structure: "Point A + から + Point B + まで",
    meaning: "From A to B (Time or Space)",
    explanation: "Defines the starting and ending points of a spatial span or time period.",
    examples: [
      {
        japanese: "銀行は午前九時から午後三時までです。",
        furigana: "ぎんこう は ごぜん くじ から ごご さんじ まで です。",
        english: "The bank is open from 9:00 AM to 3:00 PM."
      },
      {
        japanese: "東京から京都まで新幹線で行きました。",
        furigana: "とうきょう から きょうと まで しんかんせん で いきました。",
        english: "I went from Tokyo to Kyoto by bullet train."
      }
    ]
  },
  {
    id: 'g-n4-100',
    title: "〜について (~ni tsuite - About / Regarding)",
    japaneseTitle: "〜について",
    jlpt: 'N4',
    structure: "Noun + について",
    meaning: "About / Concerning / Regarding",
    explanation: "Marks the topic of research, study, speech, or thought.",
    examples: [
      {
        japanese: "日本の伝統文化について調べています。",
        furigana: "にほん の でんとうぶんか について しらべて います。",
        english: "I am researching about traditional Japanese culture."
      },
      {
        japanese: "環境問題について話し合いました。",
        furigana: "かんきょう もんだい について はなしあいました。",
        english: "We discussed about environmental problems."
      }
    ]
  },
  {
    id: 'g-n4-101',
    title: "〜によると (~ni yoru to - According to)",
    japaneseTitle: "〜によると / 〜によれば",
    jlpt: 'N4',
    structure: "Noun + によると / によれば",
    meaning: "According to... (Information source)",
    explanation: "Specifies the source of hearsay information, typically paired with 〜そうだ or 〜らしい.",
    examples: [
      {
        japanese: "新聞によると、物価がまた上がるそうです。",
        furigana: "しんぶん に よると、ぶっか が また あがる そう です。",
        english: "According to the newspaper, prices will rise again."
      },
      {
        japanese: "噂によると、彼は来月引っ越すらしい。",
        furigana: "うわさ に よると、かれ は らいげつ ひっこす らしい。",
        english: "According to rumors, it seems he is moving next month."
      }
    ]
  },
  {
    id: 'g-n4-102',
    title: "〜とか〜とか (~toka ~toka - And / Such as)",
    japaneseTitle: "〜とか〜とか",
    jlpt: 'N4',
    structure: "Noun / Plain form + とか + Noun / Plain form + とか",
    meaning: "Things like ... and ..., among others",
    explanation: "Lists representative examples in an informal, conversational tone.",
    examples: [
      {
        japanese: "休日は映画を見に行くとか、買い物をするとかして過ごします。",
        furigana: "きゅうじつ は えいが を み に いく とか、かいもの を する とか して すごします。",
        english: "On holidays I spend time doing things like watching movies and going shopping."
      },
      {
        japanese: "寿司とか天ぷらとか、日本食が好きです。",
        furigana: "すし とか てんぷら とか、にほんしょく が すき です。",
        english: "I like Japanese food like sushi and tempura."
      }
    ]
  },
  {
    id: 'g-n4-103',
    title: "は (Contrastive Topic)",
    japaneseTitle: "対比の「は」",
    jlpt: 'N4',
    structure: "Noun + は + ..., but Noun + は + ...",
    meaning: "As for X (in contrast to Y)...",
    explanation: "Uses は to contrast two subjects or states, often highlighting a difference in outcome.",
    examples: [
      {
        japanese: "ひらがなは書けますが、漢字はまだ書けません。",
        furigana: "ひらがな は かけます が、かんじ は まだ かけません。",
        english: "As for hiragana I can write it, but as for kanji I cannot write it yet."
      },
      {
        japanese: "ビールは飲みますが、ワインは飲みません。",
        furigana: "ビール は のみます が、ワイン は のみません。",
        english: "I drink beer, but I don't drink wine."
      }
    ]
  },
  {
    id: 'g-n4-104',
    title: "〜ていく (Progressing into future)",
    japaneseTitle: "未来への継続 〜ていく",
    jlpt: 'N4',
    structure: "Verb [Te-form] + いく",
    meaning: "Will continue to... / Go on becoming",
    explanation: "Focuses on a process continuing to develop from the present moment forward.",
    examples: [
      {
        japanese: "人口はますます減っていくでしょう。",
        furigana: "じんこう は ますます へっていく でしょう。",
        english: "The population will likely continue to decrease more and more."
      },
      {
        japanese: "世界は急速に変わっていきます。",
        furigana: "せかい は きゅうそく に かわって いきます。",
        english: "The world is continuing to change rapidly."
      }
    ]
  },
  {
    id: 'g-n4-105',
    title: "〜なさい (~nasai - Polite Command)",
    japaneseTitle: "動詞マス形 + なさい",
    jlpt: 'N4',
    structure: "Verb [Masu-stem] + なさい",
    meaning: "Do! (Firm but affectionate command)",
    explanation: "Used by parents to children, teachers to students, or in instructions/exam prompts.",
    examples: [
      {
        japanese: "もう遅いから早く寝なさい。",
        furigana: "もう おそい から はやく ねなさい。",
        english: "It is late already, so go to sleep quickly!"
      },
      {
        japanese: "質問をよく読んで答えなさい。",
        furigana: "しつもん を よく よんで こたえなさい。",
        english: "Read the question carefully and answer!"
      }
    ]
  },
  {
    id: 'g-n4-106',
    title: "命令形 (Imperative Command Form)",
    japaneseTitle: "動詞の命令形",
    jlpt: 'N4',
    structure: "Group 1: [e]-stem (行け) / Group 2: [ro]-stem (食べろ) / Group 3: しろ, 来い",
    meaning: "Do it! (Direct strong imperative)",
    explanation: "Used in urgent emergencies, traffic signs, sports cheering, or military commands.",
    examples: [
      {
        japanese: "危ない！止まれ！",
        furigana: "あぶない！とまれ！",
        english: "Watch out! Stop!"
      },
      {
        japanese: "頑張れ！最後まで諦めるな！",
        furigana: "がんばれ！さいご まで あきらめる な！",
        english: "Hang in there! Don't give up until the end!"
      }
    ]
  },
  {
    id: 'g-n4-107',
    title: "動詞辞書形 + な (Prohibitive Command)",
    japaneseTitle: "動詞辞書形 + な",
    jlpt: 'N4',
    structure: "Verb [Dict] + な",
    meaning: "Don't do it! (Strong prohibition)",
    explanation: "Strong direct prohibition used in commands, warnings, or urgent caution.",
    examples: [
      {
        japanese: "ここに車を止めるな。",
        furigana: "ここ に くるま を とめる な。",
        english: "Do not park cars here."
      },
      {
        japanese: "嘘をつくな。",
        furigana: "うそ を つく な。",
        english: "Do not tell lies."
      }
    ]
  },
  {
    id: 'g-n4-108',
    title: "〜てもかまわない (~te mo kamawanai)",
    japaneseTitle: "〜てもかまわない",
    jlpt: 'N4',
    structure: "Verb [Te-form] + もかまわない",
    meaning: "It doesn't matter if... / It is okay to...",
    explanation: "Indicates that the action is not objectionable and allowed.",
    examples: [
      {
        japanese: "鉛筆で書いてもかまいませんか。",
        furigana: "えんぴつ で かいても かまいません か。",
        english: "Is it okay if I write in pencil?"
      },
      {
        japanese: "いつでも連絡してかまいませんよ。",
        furigana: "いつでも れんらく して かまいません よ。",
        english: "You may contact me at any time (it doesn't matter)."
      }
    ]
  },
  {
    id: 'g-n4-109',
    title: "〜によって (~ni yotte - By / Depending on)",
    japaneseTitle: "〜によって / 〜により",
    jlpt: 'N4',
    structure: "Noun + によって",
    meaning: "By (agent in passive) / Depending on / Due to",
    explanation: "Indicates the creator of an invention/work, or conditions that vary depending on something.",
    examples: [
      {
        japanese: "この小説は夏目漱石によって書かれました。",
        furigana: "この しょうせつ は なつめそうせき によって かかれました。",
        english: "This novel was written by Natsume Soseki."
      },
      {
        japanese: "人によって考え方が違います。",
        furigana: "ひと によって かんがえかた が ちがいます。",
        english: "Ways of thinking differ depending on the person."
      }
    ]
  },
  {
    id: 'g-n4-110',
    title: "〜わりに(は) (~wari ni - Considering / For a...)",
    japaneseTitle: "〜わりに(は)",
    jlpt: 'N4',
    structure: "Plain form / Noun + の + わりに(は)",
    meaning: "Considering that... / For a... (Unexpected proportion)",
    explanation: "Expresses that the outcome is surprising given the benchmark or standard.",
    examples: [
      {
        japanese: "このレストランは値段のわりに美味しいです。",
        furigana: "この レストラン は ねだん の わりに おいしい です。",
        english: "Considering the price, this restaurant is delicious."
      },
      {
        japanese: "彼はたくさん食べたわりに太りません。",
        furigana: "かれ は たくさん たべた わりに ふとりません。",
        english: "Considering how much he ate, he does not gain weight."
      }
    ]
  },
  {
    id: 'g-n4-111',
    title: "〜とおりに (~toori ni - Just as / In accordance with)",
    japaneseTitle: "〜とおりに / 〜どおりに",
    jlpt: 'N4',
    structure: "Verb [Dict / Ta] + とおりに / Noun + どおりに",
    meaning: "Just as / Exactly according to...",
    explanation: "Indicates doing something exactly as guided, instructed, or planned.",
    examples: [
      {
        japanese: "説明書に書いてあるとおりに組み立てました。",
        furigana: "せつめいしょ に かいてある とおりに くみたてました。",
        english: "I assembled it exactly as written in the instruction manual."
      },
      {
        japanese: "予定どおりに計画が進んでいます。",
        furigana: "よてい どおりに けいかく が すすんで います。",
        english: "The plan is proceeding just according to schedule."
      }
    ]
  },
  {
    id: 'g-n4-112',
    title: "〜た結果 (~ta kekka - As a result of)",
    japaneseTitle: "〜た結果 / 名詞 + の結果",
    jlpt: 'N4',
    structure: "Verb [Ta-form] / Noun + の + 結果",
    meaning: "As a result of doing...",
    explanation: "Reports the definite consequence that arose after taking an action or process.",
    examples: [
      {
        japanese: "よく話し合った結果、新しい方針を決めました。",
        furigana: "よく はなしあった けっか、あたらしい ほうしん を きめました。",
        english: "As a result of thorough discussion, we decided on a new policy."
      },
      {
        japanese: "努力した結果、合格することができました。",
        furigana: "どりょく した けっか、ごうかく する こと が できました。",
        english: "As a result of my hard work, I was able to pass."
      }
    ]
  },
  {
    id: 'g-n4-113',
    title: "〜おかげで (~okage de - Thanks to)",
    japaneseTitle: "〜おかげで",
    jlpt: 'N4',
    structure: "Plain form (Noun + の / な-adj + な) + おかげで",
    meaning: "Thanks to / Owing to (Favorable result)",
    explanation: "Expresses gratitude for a positive outcome brought about by someone or something.",
    examples: [
      {
        japanese: "先生のおかげで、試験に合格できました。",
        furigana: "せんせい の おかげ で、しけん に ごうかく できました。",
        english: "Thanks to the teacher, I was able to pass the exam."
      },
      {
        japanese: "薬を飲んだおかげで、熱が下がりました。",
        furigana: "くすり を のんだ おかげ で、ねつ が さがりました。",
        english: "Thanks to taking the medicine, my fever went down."
      }
    ]
  },
  {
    id: 'g-n4-114',
    title: "〜せいで (~sei de - Because of / Fault of)",
    japaneseTitle: "〜せいで",
    jlpt: 'N4',
    structure: "Plain form (Noun + の / な-adj + な) + せいで",
    meaning: "Because of / Due to the fault of (Negative result)",
    explanation: "Assigns blame or fault to a cause that resulted in an undesirable outcome.",
    examples: [
      {
        japanese: "台風のせいで、旅行が中止になりました。",
        furigana: "たいふう の せい で、りょこう が ちゅうし に なりました。",
        english: "Because of the typhoon, the trip got cancelled."
      },
      {
        japanese: "夜更かしをしたせいで、朝起きられませんでした。",
        furigana: "よふかし を した せい で、あさ おきられませんでした。",
        english: "Because I stayed up late, I couldn't wake up in the morning."
      }
    ]
  },
  {
    id: 'g-n4-115',
    title: "〜たまま (~ta mama - While remaining in state of)",
    japaneseTitle: "動詞タ形 + まま",
    jlpt: 'N4',
    structure: "Verb [Ta-form] / Verb [Nai-form] / Noun + の + まま",
    meaning: "Remaining in the state of / Leaving as it is",
    explanation: "Describes performing an action while leaving a previous state unchanged unexpectedly.",
    examples: [
      {
        japanese: "電気をつけたまま寝てしまいました。",
        furigana: "でんき を つけた まま ねて しまいました。",
        english: "I fell asleep with the lights left on."
      },
      {
        japanese: "靴を履いたまま部屋に入ってはいけません。",
        furigana: "くつ を はいた まま へや に はいって は いけません。",
        english: "You must not enter the room with your shoes left on."
      }
    ]
  },
  {
    id: 'g-n4-116',
    title: "〜ほど (~hodo - To the extent that / So much that)",
    japaneseTitle: "〜ほど",
    jlpt: 'N4',
    structure: "Plain form / Noun + ほど",
    meaning: "To the extent that / So ... that",
    explanation: "Illustrates the extreme degree of an emotional or physical sensation through vivid comparison.",
    examples: [
      {
        japanese: "涙が出るほど感動しました。",
        furigana: "なみだ が でる ほど かんどう しました。",
        english: "I was moved so deeply that tears came to my eyes."
      },
      {
        japanese: "声が出ないほど驚きました。",
        furigana: "こえ が でない ほど おどろきました。",
        english: "I was so startled that I couldn't make a sound."
      }
    ]
  },
  {
    id: 'g-n4-117',
    title: "〜ば〜ほど (The more ... the more ...)",
    japaneseTitle: "〜ば〜ほど",
    jlpt: 'N4',
    structure: "Verb [Ba-form] + Verb [Dict] + ほど / Adj [ければ] + Adj + ほど",
    meaning: "The more... the more...",
    explanation: "Expresses that as condition A increases, consequence B increases proportionately.",
    examples: [
      {
        japanese: "日本語は勉強すればするほど面白くなります。",
        furigana: "にほんご は べんきょう すれば する ほど おもしろく なります。",
        english: "The more you study Japanese, the more interesting it becomes."
      },
      {
        japanese: "早ければ早いほどいいです。",
        furigana: "はやければ はやい ほど いい です。",
        english: "The sooner, the better."
      }
    ]
  },
  {
    id: 'g-n4-118',
    title: "〜際に / 〜際は (~sai ni - On the occasion of / When)",
    japaneseTitle: "〜際に / 〜際は",
    jlpt: 'N4',
    structure: "Verb [Dict / Ta] / Noun + の + 際に",
    meaning: "When / On the occasion of (Formal)",
    explanation: "Formal equivalent of 〜とき, commonly found in formal announcements and guides.",
    examples: [
      {
        japanese: "非常の際には、このベルを鳴らしてください。",
        furigana: "ひじょう の さい に は、この ベル を ならして ください。",
        english: "In case of an emergency, please ring this bell."
      },
      {
        japanese: "お申し込みの際には、身分証明書が必要です。",
        furigana: "おもうしこみ の さい に は、みぶんしょうめいしょ が ひつよう です。",
        english: "When applying, identification is required."
      }
    ]
  },
  {
    id: 'g-n4-119',
    title: "〜に対して (~ni taishite - In contrast to / Toward)",
    japaneseTitle: "〜に対して",
    jlpt: 'N4',
    structure: "Noun + に対して / Plain form + のに対して",
    meaning: "In contrast to / Towards / In response to",
    explanation: "Draws a clear contrast between two opposite entities, or marks the target of attitude.",
    examples: [
      {
        japanese: "兄は活発な性格なのに対して、弟はおとなしいです。",
        furigana: "あに は かっぱつな せいかく な の にたいして、おとうと は おとなしい です。",
        english: "In contrast to the older brother being energetic, the younger brother is quiet."
      },
      {
        japanese: "お客様に対して丁寧に接客します。",
        furigana: "おきゃくさま に たいして ていねいに せっきゃく します。",
        english: "We attend to customers politely."
      }
    ]
  },
  {
    id: 'g-n4-120',
    title: "〜として (~to shite - As / In the capacity of)",
    japaneseTitle: "名詞 + として",
    jlpt: 'N4',
    structure: "Noun + として",
    meaning: "As / In the role of / In the capacity of",
    explanation: "States the official capacity, role, title, or status under which an action is performed.",
    examples: [
      {
        japanese: "留学生として日本へ来ました。",
        furigana: "りゅうがくせい として にほん へ きました。",
        english: "I came to Japan as an international student."
      },
      {
        japanese: "富士山は日本の象徴として世界中に知られています。",
        furigana: "ふじさん は にほん の しょうちょう として せかいじゅう に しられています。",
        english: "Mount Fuji is known all over the world as a symbol of Japan."
      }
    ]
  }
];
