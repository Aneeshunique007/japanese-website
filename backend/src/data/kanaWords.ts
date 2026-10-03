// Comprehensive Dictionary of 100% Authentic, Beginner-Friendly Words for Kana
import { KanaWord } from '../types.js';

export interface KanaDetailsData {
  char: string;
  romaji: string;
  script: 'Hiragana' | 'Katakana';
  strokeCount: number;
  mnemonic: string;
  similarChars?: string[];
  words: KanaWord[];
}

export const KANA_WORDS_MAP: Record<string, KanaDetailsData> = {
  "あ": {
    "char": "あ",
    "romaji": "a",
    "script": "Hiragana",
    "strokeCount": 3,
    "mnemonic": "Looks like an Apple with a stem and cross.",
    "similarChars": [
      "お",
      "め",
      "ぬ"
    ],
    "words": [
      {
        "word": "朝",
        "furigana": "あさ",
        "romaji": "asa",
        "english": "Morning",
        "kanji": "朝",
        "exampleSentence": "毎朝、コーヒーを飲みます。",
        "exampleEnglish": "I drink coffee every morning."
      },
      {
        "word": "雨",
        "furigana": "あめ",
        "romaji": "ame",
        "english": "Rain",
        "kanji": "雨",
        "exampleSentence": "今日は雨が降っています。",
        "exampleEnglish": "It is raining today."
      },
      {
        "word": "青い",
        "furigana": "あおい",
        "romaji": "aoi",
        "english": "Blue",
        "kanji": "青い",
        "exampleSentence": "空がとても青くて綺麗です。",
        "exampleEnglish": "The sky is very blue and pretty."
      },
      {
        "word": "秋",
        "furigana": "あき",
        "romaji": "aki",
        "english": "Autumn / Fall",
        "kanji": "秋",
        "exampleSentence": "秋の紅葉を見に行きます。",
        "exampleEnglish": "I go to see autumn leaves."
      },
      {
        "word": "足",
        "furigana": "あし",
        "romaji": "ashi",
        "english": "Foot / Leg",
        "kanji": "足",
        "exampleSentence": "たくさん歩いて足が疲れました。",
        "exampleEnglish": "My legs got tired from walking a lot."
      },
      {
        "word": "新しい",
        "furigana": "あたらしい",
        "romaji": "atarashii",
        "english": "New / Fresh",
        "kanji": "新しい",
        "exampleSentence": "新しい靴を買いました。",
        "exampleEnglish": "I bought new shoes."
      },
      {
        "word": "あなた",
        "furigana": "あなた",
        "romaji": "anata",
        "english": "You",
        "kanji": "貴方",
        "exampleSentence": "あなたの名前は何ですか。",
        "exampleEnglish": "What is your name?"
      },
      {
        "word": "ありがとう",
        "furigana": "ありがとう",
        "romaji": "arigatou",
        "english": "Thank you",
        "kanji": "有難う",
        "exampleSentence": "手伝ってくれてありがとう。",
        "exampleEnglish": "Thank you for helping me."
      },
      {
        "word": "明日",
        "furigana": "あした",
        "romaji": "ashita",
        "english": "Tomorrow",
        "kanji": "明日",
        "exampleSentence": "明日は友達と会います。",
        "exampleEnglish": "I will meet a friend tomorrow."
      },
      {
        "word": "頭",
        "furigana": "あたま",
        "romaji": "atama",
        "english": "Head",
        "kanji": "頭",
        "exampleSentence": "頭が少し痛いです。",
        "exampleEnglish": "I have a slight headache."
      }
    ]
  },
  "い": {
    "char": "い",
    "romaji": "i",
    "script": "Hiragana",
    "strokeCount": 2,
    "mnemonic": "Looks like two Eels standing upright.",
    "similarChars": [
      "り",
      "こ"
    ],
    "words": [
      {
        "word": "犬",
        "furigana": "いぬ",
        "romaji": "inu",
        "english": "Dog",
        "kanji": "犬",
        "exampleSentence": "公園で犬と散歩します。",
        "exampleEnglish": "I walk with the dog in the park."
      },
      {
        "word": "家",
        "furigana": "いえ",
        "romaji": "ie",
        "english": "House / Home",
        "kanji": "家",
        "exampleSentence": "私の家は東京にあります。",
        "exampleEnglish": "My home is in Tokyo."
      },
      {
        "word": "今",
        "furigana": "いま",
        "romaji": "ima",
        "english": "Now",
        "kanji": "今",
        "exampleSentence": "今は何時ですか。",
        "exampleEnglish": "What time is it now?"
      },
      {
        "word": "行く",
        "furigana": "いく",
        "romaji": "iku",
        "english": "To go",
        "kanji": "行く",
        "exampleSentence": "明日、学校へ行きます。",
        "exampleEnglish": "I will go to school tomorrow."
      },
      {
        "word": "椅子",
        "furigana": "いす",
        "romaji": "isu",
        "english": "Chair",
        "kanji": "椅子",
        "exampleSentence": "椅子に座ってください。",
        "exampleEnglish": "Please sit in the chair."
      },
      {
        "word": "医者",
        "furigana": "いしゃ",
        "romaji": "isha",
        "english": "Doctor",
        "kanji": "医者",
        "exampleSentence": "医者に診てもらいます。",
        "exampleEnglish": "I will see a doctor."
      },
      {
        "word": "いい",
        "furigana": "いい",
        "romaji": "ii",
        "english": "Good / Nice",
        "kanji": "良い",
        "exampleSentence": "とてもいい天気ですね。",
        "exampleEnglish": "It is very nice weather, isn’t it?"
      },
      {
        "word": "言う",
        "furigana": "いう",
        "romaji": "iu",
        "english": "To say / speak",
        "kanji": "言う",
        "exampleSentence": "日本語で何と言いますか。",
        "exampleEnglish": "How do you say it in Japanese?"
      },
      {
        "word": "一",
        "furigana": "いち",
        "romaji": "ichi",
        "english": "One (1)",
        "kanji": "一",
        "exampleSentence": "一つください。",
        "exampleEnglish": "Please give me one."
      },
      {
        "word": "妹",
        "furigana": "いもうと",
        "romaji": "imouto",
        "english": "Younger sister",
        "kanji": "妹",
        "exampleSentence": "妹は高校生です。",
        "exampleEnglish": "My younger sister is a high school student."
      }
    ]
  },
  "う": {
    "char": "う",
    "romaji": "u",
    "script": "Hiragana",
    "strokeCount": 2,
    "mnemonic": "Looks like a man doubling over shouting Uuuugh!",
    "similarChars": [
      "ら",
      "つ"
    ],
    "words": [
      {
        "word": "海",
        "furigana": "うみ",
        "romaji": "umi",
        "english": "Sea / Ocean",
        "kanji": "海",
        "exampleSentence": "夏に海へ泳ぎに行きます。",
        "exampleEnglish": "I go to swim in the ocean in summer."
      },
      {
        "word": "歌",
        "furigana": "うた",
        "romaji": "uta",
        "english": "Song",
        "kanji": "歌",
        "exampleSentence": "日本の歌が好きです。",
        "exampleEnglish": "I like Japanese songs."
      },
      {
        "word": "上",
        "furigana": "うえ",
        "romaji": "ue",
        "english": "Above / Top",
        "kanji": "上",
        "exampleSentence": "机の上に本があります。",
        "exampleEnglish": "There is a book on the desk."
      },
      {
        "word": "後ろ",
        "furigana": "うしろ",
        "romaji": "ushiro",
        "english": "Behind",
        "kanji": "後ろ",
        "exampleSentence": "私の後ろに立ってください。",
        "exampleEnglish": "Please stand behind me."
      },
      {
        "word": "牛",
        "furigana": "うし",
        "romaji": "ushi",
        "english": "Cow",
        "kanji": "牛",
        "exampleSentence": "牧場に牛がいます。",
        "exampleEnglish": "There are cows on the ranch."
      },
      {
        "word": "生まれる",
        "furigana": "うまれる",
        "romaji": "umareru",
        "english": "To be born",
        "kanji": "生まれる",
        "exampleSentence": "私は東京で生まれました。",
        "exampleEnglish": "I was born in Tokyo."
      },
      {
        "word": "売る",
        "furigana": "うる",
        "romaji": "uru",
        "english": "To sell",
        "kanji": "売る",
        "exampleSentence": "店でパンを売っています。",
        "exampleEnglish": "They sell bread in the store."
      },
      {
        "word": "嬉しい",
        "furigana": "うれしい",
        "romaji": "ureshii",
        "english": "Happy / Glad",
        "kanji": "嬉しい",
        "exampleSentence": "プレゼントをもらって嬉しいです。",
        "exampleEnglish": "I am glad to receive a gift."
      },
      {
        "word": "美しい",
        "furigana": "うつくしい",
        "romaji": "utsukushii",
        "english": "Beautiful",
        "kanji": "美しい",
        "exampleSentence": "富士山はとても美しいです。",
        "exampleEnglish": "Mt. Fuji is very beautiful."
      },
      {
        "word": "馬",
        "furigana": "うま",
        "romaji": "uma",
        "english": "Horse",
        "kanji": "馬",
        "exampleSentence": "馬に乗ったことがありますか。",
        "exampleEnglish": "Have you ever ridden a horse?"
      }
    ]
  },
  "え": {
    "char": "え",
    "romaji": "e",
    "script": "Hiragana",
    "strokeCount": 2,
    "mnemonic": "Looks like an Energetic exotic runner.",
    "similarChars": [
      "ん",
      "そ"
    ],
    "words": [
      {
        "word": "駅",
        "furigana": "えき",
        "romaji": "eki",
        "english": "Train Station",
        "kanji": "駅",
        "exampleSentence": "新宿駅で待ち合わせましょう。",
        "exampleEnglish": "Let us meet at Shinjuku Station."
      },
      {
        "word": "絵",
        "furigana": "え",
        "romaji": "e",
        "english": "Picture / Painting",
        "kanji": "絵",
        "exampleSentence": "美術館で絵を見ました。",
        "exampleEnglish": "I looked at paintings at the art museum."
      },
      {
        "word": "映画",
        "furigana": "えいが",
        "romaji": "eiga",
        "english": "Movie",
        "kanji": "映画",
        "exampleSentence": "週末に映画を見ます。",
        "exampleEnglish": "I will watch a movie on the weekend."
      },
      {
        "word": "英語",
        "furigana": "えいご",
        "romaji": "eigo",
        "english": "English Language",
        "kanji": "英語",
        "exampleSentence": "英語を勉強しています。",
        "exampleEnglish": "I am studying English."
      },
      {
        "word": "鉛筆",
        "furigana": "えんぴつ",
        "romaji": "enpitsu",
        "english": "Pencil",
        "kanji": "鉛筆",
        "exampleSentence": "鉛筆でノートに書きます。",
        "exampleEnglish": "I write in the notebook with a pencil."
      },
      {
        "word": "選ぶ",
        "furigana": "えらぶ",
        "romaji": "erabu",
        "english": "To choose / select",
        "kanji": "選ぶ",
        "exampleSentence": "好きなものを選んでください。",
        "exampleEnglish": "Please choose what you like."
      },
      {
        "word": "円",
        "furigana": "えん",
        "romaji": "en",
        "english": "Yen / Circle",
        "kanji": "円",
        "exampleSentence": "これは千円です。",
        "exampleEnglish": "This is 1,000 yen."
      },
      {
        "word": "笑顔",
        "furigana": "えがお",
        "romaji": "egao",
        "english": "Smiling face",
        "kanji": "笑顔",
        "exampleSentence": "いつも笑顔で接客します。",
        "exampleEnglish": "Always serving customers with a smile."
      },
      {
        "word": "枝",
        "furigana": "えだ",
        "romaji": "eda",
        "english": "Branch / Twig",
        "kanji": "枝",
        "exampleSentence": "木の枝に鳥が止まっています。",
        "exampleEnglish": "A bird is resting on the tree branch."
      },
      {
        "word": "偉い",
        "furigana": "えらい",
        "romaji": "erai",
        "english": "Great / Admirable",
        "kanji": "偉い",
        "exampleSentence": "毎日勉強して偉いですね。",
        "exampleEnglish": "You are admirable for studying every day."
      }
    ]
  },
  "お": {
    "char": "お",
    "romaji": "o",
    "script": "Hiragana",
    "strokeCount": 3,
    "mnemonic": "Looks like a golf ball On the tee.",
    "similarChars": [
      "あ",
      "む"
    ],
    "words": [
      {
        "word": "お金",
        "furigana": "おかね",
        "romaji": "okane",
        "english": "Money",
        "kanji": "お金",
        "exampleSentence": "お金を大切にします。",
        "exampleEnglish": "I cherish money."
      },
      {
        "word": "お茶",
        "furigana": "おちゃ",
        "romaji": "ocha",
        "english": "Tea / Green Tea",
        "kanji": "お茶",
        "exampleSentence": "温かいお茶を飲みます。",
        "exampleEnglish": "I drink warm green tea."
      },
      {
        "word": "女",
        "furigana": "おんな",
        "romaji": "onna",
        "english": "Woman",
        "kanji": "女",
        "exampleSentence": "彼女は優しい女の人です。",
        "exampleEnglish": "She is a kind woman."
      },
      {
        "word": "男",
        "furigana": "おとこ",
        "romaji": "otoko",
        "english": "Man",
        "kanji": "男",
        "exampleSentence": "勇敢な男の人です。",
        "exampleEnglish": "He is a brave man."
      },
      {
        "word": "大きい",
        "furigana": "おおきい",
        "romaji": "ookii",
        "english": "Big / Large",
        "kanji": "大きい",
        "exampleSentence": "大きい家に住みたいです。",
        "exampleEnglish": "I want to live in a big house."
      },
      {
        "word": "音楽",
        "furigana": "おんがく",
        "romaji": "ongaku",
        "english": "Music",
        "kanji": "音楽",
        "exampleSentence": "毎日音楽を聴きます。",
        "exampleEnglish": "I listen to music everyday."
      },
      {
        "word": "美味しい",
        "furigana": "おいしい",
        "romaji": "oishii",
        "english": "Delicious / Tasty",
        "kanji": "美味しい",
        "exampleSentence": "このラーメンは美味しいです。",
        "exampleEnglish": "This ramen is delicious."
      },
      {
        "word": "起きる",
        "furigana": "おきる",
        "romaji": "okiru",
        "english": "To wake up",
        "kanji": "起きる",
        "exampleSentence": "毎朝六時に起きます。",
        "exampleEnglish": "I wake up at 6 every morning."
      },
      {
        "word": "お父さん",
        "furigana": "おとうさん",
        "romaji": "otousan",
        "english": "Father",
        "kanji": "お父さん",
        "exampleSentence": "お父さんは優しいです。",
        "exampleEnglish": "My father is kind."
      },
      {
        "word": "お母さん",
        "furigana": "おかあさん",
        "romaji": "okaasan",
        "english": "Mother",
        "kanji": "お母さん",
        "exampleSentence": "お母さんの料理が好きです。",
        "exampleEnglish": "I love my mother’s cooking."
      }
    ]
  },
  "か": {
    "char": "か",
    "romaji": "ka",
    "script": "Hiragana",
    "strokeCount": 3,
    "mnemonic": "Looks like someone Ka-yak paddling with force.",
    "similarChars": [
      "や",
      "せ"
    ],
    "words": [
      {
        "word": "傘",
        "furigana": "かさ",
        "romaji": "kasa",
        "english": "Umbrella",
        "kanji": "傘",
        "exampleSentence": "雨が降るので傘を持って行きます。",
        "exampleEnglish": "I will take an umbrella because it is raining."
      },
      {
        "word": "川",
        "furigana": "かわ",
        "romaji": "kawa",
        "english": "River",
        "kanji": "川",
        "exampleSentence": "川で魚が泳いでいます。",
        "exampleEnglish": "Fish are swimming in the river."
      },
      {
        "word": "買う",
        "furigana": "かう",
        "romaji": "kau",
        "english": "To buy",
        "kanji": "買う",
        "exampleSentence": "スーパーで野菜を買います。",
        "exampleEnglish": "I buy vegetables at the supermarket."
      },
      {
        "word": "家族",
        "furigana": "かぞく",
        "romaji": "kazoku",
        "english": "Family",
        "kanji": "家族",
        "exampleSentence": "私の家族は四人です。",
        "exampleEnglish": "There are four people in my family."
      },
      {
        "word": "風",
        "furigana": "かぜ",
        "romaji": "kaze",
        "english": "Wind",
        "kanji": "風",
        "exampleSentence": "今日は冷たい風が吹きます。",
        "exampleEnglish": "A cold wind is blowing today."
      },
      {
        "word": "鍵",
        "furigana": "かぎ",
        "romaji": "kagi",
        "english": "Key",
        "kanji": "鍵",
        "exampleSentence": "部屋の鍵を閉めました。",
        "exampleEnglish": "I locked the room key."
      },
      {
        "word": "会社",
        "furigana": "かいしゃ",
        "romaji": "kaisha",
        "english": "Company",
        "kanji": "会社",
        "exampleSentence": "電車で会社へ通います。",
        "exampleEnglish": "I commute to the company by train."
      },
      {
        "word": "階段",
        "furigana": "かいだん",
        "romaji": "kaidan",
        "english": "Stairs",
        "kanji": "階段",
        "exampleSentence": "階段をゆっくり上がります。",
        "exampleEnglish": "Walk up the stairs slowly."
      },
      {
        "word": "描く",
        "furigana": "かく",
        "romaji": "kaku",
        "english": "To draw / write",
        "kanji": "描く",
        "exampleSentence": "ノートに絵を描きます。",
        "exampleEnglish": "I draw a picture in the notebook."
      },
      {
        "word": "体",
        "furigana": "からだ",
        "romaji": "karada",
        "english": "Body / Health",
        "kanji": "体",
        "exampleSentence": "体を大切にしてください。",
        "exampleEnglish": "Please take good care of your body."
      }
    ]
  },
  "き": {
    "char": "き",
    "romaji": "ki",
    "script": "Hiragana",
    "strokeCount": 4,
    "mnemonic": "Looks like a Key turning in a keyhole.",
    "similarChars": [
      "さ",
      "ち"
    ],
    "words": [
      {
        "word": "木",
        "furigana": "き",
        "romaji": "ki",
        "english": "Tree",
        "kanji": "木",
        "exampleSentence": "庭に大きな木があります。",
        "exampleEnglish": "There is a big tree in the garden."
      },
      {
        "word": "切符",
        "furigana": "きっぷ",
        "romaji": "kippu",
        "english": "Ticket",
        "kanji": "切符",
        "exampleSentence": "駅で電車の切符を買います。",
        "exampleEnglish": "I buy a train ticket at the station."
      },
      {
        "word": "昨日",
        "furigana": "きのう",
        "romaji": "kinou",
        "english": "Yesterday",
        "kanji": "昨日",
        "exampleSentence": "昨日は家で映画を見ました。",
        "exampleEnglish": "Yesterday I watched a movie at home."
      },
      {
        "word": "聞く",
        "furigana": "きく",
        "romaji": "kiku",
        "english": "To listen / hear",
        "kanji": "聞く",
        "exampleSentence": "毎朝ニュースを聞きます。",
        "exampleEnglish": "I listen to the news every morning."
      },
      {
        "word": "綺麗",
        "furigana": "きれい",
        "romaji": "kirei",
        "english": "Pretty / Clean",
        "kanji": "綺麗",
        "exampleSentence": "この公園は花が綺麗です。",
        "exampleEnglish": "The flowers in this park are pretty."
      },
      {
        "word": "教室",
        "furigana": "きょうしつ",
        "romaji": "kyoushitsu",
        "english": "Classroom",
        "kanji": "教室",
        "exampleSentence": "教室で日本語を学びます。",
        "exampleEnglish": "We learn Japanese in the classroom."
      },
      {
        "word": "今日",
        "furigana": "きょう",
        "romaji": "kyou",
        "english": "Today",
        "kanji": "今日",
        "exampleSentence": "今日はとても天気がいいです。",
        "exampleEnglish": "The weather is very nice today."
      },
      {
        "word": "着る",
        "furigana": "きる",
        "romaji": "kiru",
        "english": "To wear (upper body)",
        "kanji": "着る",
        "exampleSentence": "暖かいコートを着ます。",
        "exampleEnglish": "I wear a warm coat."
      },
      {
        "word": "切る",
        "furigana": "きる",
        "romaji": "kiru",
        "english": "To cut",
        "kanji": "切る",
        "exampleSentence": "包丁でパンを切ります。",
        "exampleEnglish": "I cut the bread with a knife."
      },
      {
        "word": "喫茶店",
        "furigana": "きっさてん",
        "romaji": "kissaten",
        "english": "Coffee shop / Cafe",
        "kanji": "喫茶店",
        "exampleSentence": "喫茶店でお茶を飲みます。",
        "exampleEnglish": "I drink tea at the cafe."
      }
    ]
  },
  "く": {
    "char": "く",
    "romaji": "ku",
    "script": "Hiragana",
    "strokeCount": 1,
    "mnemonic": "Looks like a Cuckoo bird’s open beak.",
    "similarChars": [
      "へ",
      "つ"
    ],
    "words": [
      {
        "word": "車",
        "furigana": "くるま",
        "romaji": "kuruma",
        "english": "Car",
        "kanji": "車",
        "exampleSentence": "父は新しい車を運転します。",
        "exampleEnglish": "My father drives a new car."
      },
      {
        "word": "靴",
        "furigana": "くつ",
        "romaji": "kutsu",
        "english": "Shoes",
        "kanji": "靴",
        "exampleSentence": "玄関で靴を脱ぎます。",
        "exampleEnglish": "Take off your shoes at the entrance."
      },
      {
        "word": "口",
        "furigana": "くち",
        "romaji": "kuchi",
        "english": "Mouth",
        "kanji": "口",
        "exampleSentence": "大きく口を開けてください。",
        "exampleEnglish": "Please open your mouth wide."
      },
      {
        "word": "黒い",
        "furigana": "くろい",
        "romaji": "kuroi",
        "english": "Black",
        "kanji": "黒い",
        "exampleSentence": "可愛い黒い猫を飼っています。",
        "exampleEnglish": "I keep a cute black cat."
      },
      {
        "word": "薬",
        "furigana": "くすり",
        "romaji": "kusuri",
        "english": "Medicine",
        "kanji": "薬",
        "exampleSentence": "食後に風邪薬を飲みます。",
        "exampleEnglish": "I take cold medicine after meals."
      },
      {
        "word": "果物",
        "furigana": "くだもの",
        "romaji": "kudamono",
        "english": "Fruit",
        "kanji": "果物",
        "exampleSentence": "甘い果物が大好きです。",
        "exampleEnglish": "I love sweet fruit."
      },
      {
        "word": "暗い",
        "furigana": "くらい",
        "romaji": "kurai",
        "english": "Dark",
        "kanji": "暗い",
        "exampleSentence": "部屋が暗いので電気をつけます。",
        "exampleEnglish": "The room is dark so I turn on the light."
      },
      {
        "word": "空気",
        "furigana": "くうき",
        "romaji": "kuuki",
        "english": "Air",
        "kanji": "空気",
        "exampleSentence": "山の上は空気が澄んでいます。",
        "exampleEnglish": "The air is clear on the mountain."
      },
      {
        "word": "首",
        "furigana": "くび",
        "romaji": "kubi",
        "english": "Neck",
        "kanji": "首",
        "exampleSentence": "首に温かいマフラーを巻きます。",
        "exampleEnglish": "Wrap a warm scarf around the neck."
      },
      {
        "word": "来る",
        "furigana": "くる",
        "romaji": "kuru",
        "english": "To come",
        "kanji": "来る",
        "exampleSentence": "明日友達が家に遊びに来ます。",
        "exampleEnglish": "A friend will come to my house tomorrow."
      }
    ]
  },
  "け": {
    "char": "け",
    "romaji": "ke",
    "script": "Hiragana",
    "strokeCount": 3,
    "mnemonic": "Looks like a martial artist kicking a Keg.",
    "similarChars": [
      "は",
      "に"
    ],
    "words": [
      {
        "word": "今朝",
        "furigana": "けさ",
        "romaji": "kesa",
        "english": "This morning",
        "kanji": "今朝",
        "exampleSentence": "今朝はパンを食べました。",
        "exampleEnglish": "I ate bread this morning."
      },
      {
        "word": "警察",
        "furigana": "けいさつ",
        "romaji": "keisatsu",
        "english": "Police",
        "kanji": "警察",
        "exampleSentence": "道に迷ったので警察に聞きます。",
        "exampleEnglish": "I got lost so I ask the police."
      },
      {
        "word": "携帯",
        "furigana": "けいたい",
        "romaji": "keitai",
        "english": "Cell phone",
        "kanji": "携帯",
        "exampleSentence": "携帯電話でメッセージを送ります。",
        "exampleEnglish": "I send a message on my mobile phone."
      },
      {
        "word": "結構",
        "furigana": "けっこう",
        "romaji": "kekkou",
        "english": "Fine / Splendid",
        "kanji": "結構",
        "exampleSentence": "いいえ、もう結構です。",
        "exampleEnglish": "No thank you, that is fine."
      },
      {
        "word": "結婚",
        "furigana": "けっこん",
        "romaji": "kekkon",
        "english": "Marriage",
        "kanji": "結婚",
        "exampleSentence": "来年結婚式を挙げます。",
        "exampleEnglish": "We will hold a wedding next year."
      },
      {
        "word": "景色",
        "furigana": "けしき",
        "romaji": "keshiki",
        "english": "Scenery / View",
        "kanji": "景色",
        "exampleSentence": "山からの景色が素晴らしいです。",
        "exampleEnglish": "The scenery from the mountain is wonderful."
      },
      {
        "word": "消しゴム",
        "furigana": "けしごむ",
        "romaji": "keshigomu",
        "english": "Eraser",
        "kanji": "消しゴム",
        "exampleSentence": "消しゴムで文字を消します。",
        "exampleEnglish": "Erase characters with an eraser."
      },
      {
        "word": "毛",
        "furigana": "け",
        "romaji": "ke",
        "english": "Hair / Fur",
        "kanji": "毛",
        "exampleSentence": "猫の毛はとても柔らかいです。",
        "exampleEnglish": "The cat’s fur is very soft."
      },
      {
        "word": "計画",
        "furigana": "けいかく",
        "romaji": "keikaku",
        "english": "Plan",
        "kanji": "計画",
        "exampleSentence": "旅行の計画を立てます。",
        "exampleEnglish": "Make plans for the trip."
      },
      {
        "word": "経験",
        "furigana": "けいけん",
        "romaji": "keiken",
        "english": "Experience",
        "kanji": "経験",
        "exampleSentence": "日本で良い経験をしました。",
        "exampleEnglish": "I had a good experience in Japan."
      }
    ]
  },
  "こ": {
    "char": "こ",
    "romaji": "ko",
    "script": "Hiragana",
    "strokeCount": 2,
    "mnemonic": "Looks like two Co-existing parallel lines.",
    "similarChars": [
      "い",
      "り"
    ],
    "words": [
      {
        "word": "子供",
        "furigana": "こども",
        "romaji": "kodomo",
        "english": "Child / Children",
        "kanji": "子供",
        "exampleSentence": "公園で子供たちが遊んでいます。",
        "exampleEnglish": "Children are playing in the park."
      },
      {
        "word": "声",
        "furigana": "こえ",
        "romaji": "koe",
        "english": "Voice",
        "kanji": "声",
        "exampleSentence": "明るい声で挨拶します。",
        "exampleEnglish": "Greet with a cheerful voice."
      },
      {
        "word": "ここ",
        "furigana": "ここ",
        "romaji": "koko",
        "english": "Here",
        "kanji": "此処",
        "exampleSentence": "ここに名前を書いてください。",
        "exampleEnglish": "Please write your name here."
      },
      {
        "word": "言葉",
        "furigana": "ことば",
        "romaji": "kotoba",
        "english": "Word / Language",
        "kanji": "言葉",
        "exampleSentence": "毎日新しい言葉を覚えます。",
        "exampleEnglish": "I memorize new words every day."
      },
      {
        "word": "今年",
        "furigana": "ことし",
        "romaji": "kotoshi",
        "english": "This year",
        "kanji": "今年",
        "exampleSentence": "今年は日本へ旅行したいです。",
        "exampleEnglish": "I want to travel to Japan this year."
      },
      {
        "word": "今晩",
        "furigana": "こんばん",
        "romaji": "konban",
        "english": "Tonight",
        "kanji": "今晩",
        "exampleSentence": "今晩、一緒に夕飯を食べましょう。",
        "exampleEnglish": "Let us eat dinner together tonight."
      },
      {
        "word": "答える",
        "furigana": "こたえる",
        "romaji": "kotaeru",
        "english": "To answer",
        "kanji": "答える",
        "exampleSentence": "先生の質問に答えます。",
        "exampleEnglish": "I answer the teacher’s question."
      },
      {
        "word": "公園",
        "furigana": "こうえん",
        "romaji": "kouen",
        "english": "Park",
        "kanji": "公園",
        "exampleSentence": "週末に公園を散歩します。",
        "exampleEnglish": "Take a walk in the park on weekends."
      },
      {
        "word": "交番",
        "furigana": "こうばん",
        "romaji": "kouban",
        "english": "Police box",
        "kanji": "交番",
        "exampleSentence": "交番でお巡りさんに道を尋ねます。",
        "exampleEnglish": "Ask the officer for directions at the police box."
      },
      {
        "word": "紅茶",
        "furigana": "こうちゃ",
        "romaji": "koucha",
        "english": "Black tea",
        "kanji": "紅茶",
        "exampleSentence": "温かい紅茶にミルクを入れます。",
        "exampleEnglish": "Put milk in hot black tea."
      }
    ]
  },
  "さ": {
    "char": "さ",
    "romaji": "sa",
    "script": "Hiragana",
    "strokeCount": 3,
    "mnemonic": "Looks like a Samurai sword slashing down.",
    "similarChars": [
      "き",
      "ち"
    ],
    "words": [
      {
        "word": "桜",
        "furigana": "さくら",
        "romaji": "sakura",
        "english": "Cherry Blossom",
        "kanji": "桜",
        "exampleSentence": "春に桜の花が咲きます。",
        "exampleEnglish": "Cherry blossoms bloom in spring."
      },
      {
        "word": "魚",
        "furigana": "さかな",
        "romaji": "sakana",
        "english": "Fish",
        "kanji": "魚",
        "exampleSentence": "新鮮な魚を食べます。",
        "exampleEnglish": "I eat fresh fish."
      },
      {
        "word": "財布",
        "furigana": "さいふ",
        "romaji": "saifu",
        "english": "Wallet",
        "kanji": "財布",
        "exampleSentence": "財布をカバンに入れます。",
        "exampleEnglish": "I put my wallet in the bag."
      },
      {
        "word": "砂糖",
        "furigana": "さとう",
        "romaji": "satou",
        "english": "Sugar",
        "kanji": "砂糖",
        "exampleSentence": "コーヒーに砂糖を入れます。",
        "exampleEnglish": "I put sugar in coffee."
      },
      {
        "word": "寒い",
        "furigana": "さむい",
        "romaji": "samui",
        "english": "Cold (weather)",
        "kanji": "寒い",
        "exampleSentence": "冬はとても寒いです。",
        "exampleEnglish": "Winter is very cold."
      },
      {
        "word": "咲く",
        "furigana": "さく",
        "romaji": "saku",
        "english": "To bloom",
        "kanji": "咲く",
        "exampleSentence": "庭に綺麗な花が咲きました。",
        "exampleEnglish": "Pretty flowers bloomed in the garden."
      },
      {
        "word": "散歩",
        "furigana": "さんぽ",
        "romaji": "sanpo",
        "english": "Stroll / Walk",
        "kanji": "散歩",
        "exampleSentence": "毎朝犬と散歩します。",
        "exampleEnglish": "I take a walk with my dog every morning."
      },
      {
        "word": "さようなら",
        "furigana": "さようなら",
        "romaji": "sayounara",
        "english": "Goodbye",
        "kanji": "左様なら",
        "exampleSentence": "先生、さようなら。",
        "exampleEnglish": "Goodbye, teacher."
      },
      {
        "word": "皿",
        "furigana": "さら",
        "romaji": "sara",
        "english": "Plate / Dish",
        "kanji": "皿",
        "exampleSentence": "お皿を綺麗に洗います。",
        "exampleEnglish": "Wash the plates cleanly."
      },
      {
        "word": "先",
        "furigana": "さき",
        "romaji": "saki",
        "english": "Ahead / First",
        "kanji": "先",
        "exampleSentence": "お先に失礼します。",
        "exampleEnglish": "See you, excuse me for leaving first."
      }
    ]
  },
  "し": {
    "char": "し",
    "romaji": "shi",
    "script": "Hiragana",
    "strokeCount": 1,
    "mnemonic": "Looks like a giant Ship’s hook.",
    "similarChars": [
      "つ",
      "ん"
    ],
    "words": [
      {
        "word": "白い",
        "furigana": "しろい",
        "romaji": "shiroi",
        "english": "White",
        "kanji": "白い",
        "exampleSentence": "白いシャツを着ています。",
        "exampleEnglish": "I am wearing a white shirt."
      },
      {
        "word": "写真",
        "furigana": "しゃしん",
        "romaji": "shashin",
        "english": "Photograph",
        "kanji": "写真",
        "exampleSentence": "旅行でたくさん写真を撮りました。",
        "exampleEnglish": "I took many photos on the trip."
      },
      {
        "word": "新聞",
        "furigana": "しんぶん",
        "romaji": "shinbun",
        "english": "Newspaper",
        "kanji": "新聞",
        "exampleSentence": "毎朝新聞を読みます。",
        "exampleEnglish": "I read the newspaper every morning."
      },
      {
        "word": "塩",
        "furigana": "しお",
        "romaji": "shio",
        "english": "Salt",
        "kanji": "塩",
        "exampleSentence": "料理に少し塩を加えます。",
        "exampleEnglish": "Add a little salt to the dish."
      },
      {
        "word": "仕事",
        "furigana": "しごと",
        "romaji": "shigoto",
        "english": "Work / Job",
        "kanji": "仕事",
        "exampleSentence": "今日も仕事を頑張ります。",
        "exampleEnglish": "I will do my best at work today."
      },
      {
        "word": "静か",
        "furigana": "しずか",
        "romaji": "shizuka",
        "english": "Quiet / Peaceful",
        "kanji": "静か",
        "exampleSentence": "図書館はとても静かです。",
        "exampleEnglish": "The library is very quiet."
      },
      {
        "word": "知る",
        "furigana": "しる",
        "romaji": "shiru",
        "english": "To know",
        "kanji": "知る",
        "exampleSentence": "そのニュースを知っていますか。",
        "exampleEnglish": "Do you know that news?"
      },
      {
        "word": "質問",
        "furigana": "しつもん",
        "romaji": "shitsumon",
        "english": "Question",
        "kanji": "質問",
        "exampleSentence": "何か質問はありますか。",
        "exampleEnglish": "Do you have any questions?"
      },
      {
        "word": "閉める",
        "furigana": "しめる",
        "romaji": "shimeru",
        "english": "To close",
        "kanji": "閉める",
        "exampleSentence": "寒いので窓を閉めてください。",
        "exampleEnglish": "Please close the window because it is cold."
      },
      {
        "word": "週末",
        "furigana": "しゅうまつ",
        "romaji": "shuumatsu",
        "english": "Weekend",
        "kanji": "週末",
        "exampleSentence": "週末に友達と遊びます。",
        "exampleEnglish": "I hang out with friends on weekends."
      }
    ]
  },
  "す": {
    "char": "す",
    "romaji": "su",
    "script": "Hiragana",
    "strokeCount": 2,
    "mnemonic": "Looks like a curled straw drinking Sushi soup.",
    "similarChars": [
      "む",
      "ぬ"
    ],
    "words": [
      {
        "word": "寿司",
        "furigana": "すし",
        "romaji": "sushi",
        "english": "Sushi",
        "kanji": "寿司",
        "exampleSentence": "日本の寿司はとても美味しいです。",
        "exampleEnglish": "Japanese sushi is very delicious."
      },
      {
        "word": "好き",
        "furigana": "すき",
        "romaji": "suki",
        "english": "Like / Fond of",
        "kanji": "好き",
        "exampleSentence": "日本のアニメが大好きです。",
        "exampleEnglish": "I love Japanese anime."
      },
      {
        "word": "少し",
        "furigana": "すこし",
        "romaji": "sukoshi",
        "english": "A little / Few",
        "kanji": "少し",
        "exampleSentence": "日本語が少し話せます。",
        "exampleEnglish": "I can speak a little Japanese."
      },
      {
        "word": "涼しい",
        "furigana": "すずしい",
        "romaji": "suzushii",
        "english": "Cool (weather)",
        "kanji": "涼しい",
        "exampleSentence": "秋の風は涼しくて気持ちいい。",
        "exampleEnglish": "The autumn breeze is cool and pleasant."
      },
      {
        "word": "すみません",
        "furigana": "すみません",
        "romaji": "sumimasen",
        "english": "Excuse me / Sorry",
        "kanji": "済みません",
        "exampleSentence": "すみません、駅はどこですか。",
        "exampleEnglish": "Excuse me, where is the station?"
      },
      {
        "word": "住む",
        "furigana": "すむ",
        "romaji": "sumu",
        "english": "To live / reside",
        "kanji": "住む",
        "exampleSentence": "私は東京に住んでいます。",
        "exampleEnglish": "I live in Tokyo."
      },
      {
        "word": "座る",
        "furigana": "すわる",
        "romaji": "suwaru",
        "english": "To sit",
        "kanji": "座る",
        "exampleSentence": "どうぞ椅子に座ってください。",
        "exampleEnglish": "Please sit on the chair."
      },
      {
        "word": "水曜日",
        "furigana": "すいようび",
        "romaji": "suiyoubi",
        "english": "Wednesday",
        "kanji": "水曜日",
        "exampleSentence": "水曜日にテストがあります。",
        "exampleEnglish": "There is a test on Wednesday."
      },
      {
        "word": "吸う",
        "furigana": "すう",
        "romaji": "suu",
        "english": "To inhale / breathe",
        "kanji": "吸う",
        "exampleSentence": "新鮮な空気を深く吸います。",
        "exampleEnglish": "Inhale fresh air deeply."
      },
      {
        "word": "素晴らしい",
        "furigana": "すばらしい",
        "romaji": "subarashii",
        "english": "Wonderful",
        "kanji": "素晴らしい",
        "exampleSentence": "とても素晴らしい映画でした。",
        "exampleEnglish": "It was a very wonderful movie."
      }
    ]
  },
  "せ": {
    "char": "せ",
    "romaji": "se",
    "script": "Hiragana",
    "strokeCount": 3,
    "mnemonic": "Looks like someone Saying a speech at a podium.",
    "similarChars": [
      "や",
      "か"
    ],
    "words": [
      {
        "word": "先生",
        "furigana": "せんせい",
        "romaji": "sensei",
        "english": "Teacher",
        "kanji": "先生",
        "exampleSentence": "田中先生はとても優しいです。",
        "exampleEnglish": "Teacher Tanaka is very kind."
      },
      {
        "word": "先週",
        "furigana": "せんしゅう",
        "romaji": "senshuu",
        "english": "Last week",
        "kanji": "先週",
        "exampleSentence": "先週、京都へ旅行に行きました。",
        "exampleEnglish": "Last week I traveled to Kyoto."
      },
      {
        "word": "先月",
        "furigana": "せんげつ",
        "romaji": "sengetsu",
        "english": "Last month",
        "kanji": "先月",
        "exampleSentence": "先月新しいパソコンを買いました。",
        "exampleEnglish": "I bought a new PC last month."
      },
      {
        "word": "背",
        "furigana": "せ",
        "romaji": "se",
        "english": "Height / Back",
        "kanji": "背",
        "exampleSentence": "兄はとても背が高いです。",
        "exampleEnglish": "My older brother is very tall."
      },
      {
        "word": "世界",
        "furigana": "せかい",
        "romaji": "sekai",
        "english": "World",
        "kanji": "世界",
        "exampleSentence": "世界中を旅行してみたいです。",
        "exampleEnglish": "I want to travel all over the world."
      },
      {
        "word": "説明",
        "furigana": "せつめい",
        "romaji": "setsumei",
        "english": "Explanation",
        "kanji": "説明",
        "exampleSentence": "先生の説明を聞きます。",
        "exampleEnglish": "Listen to the teacher’s explanation."
      },
      {
        "word": "洗濯",
        "furigana": "せんたく",
        "romaji": "sentaku",
        "english": "Laundry",
        "kanji": "洗濯",
        "exampleSentence": "天気がいいので服を洗濯します。",
        "exampleEnglish": "The weather is good so I do laundry."
      },
      {
        "word": "狭い",
        "furigana": "せまい",
        "romaji": "semai",
        "english": "Narrow / Cramped",
        "kanji": "狭い",
        "exampleSentence": "私の部屋は少し狭いです。",
        "exampleEnglish": "My room is a little narrow."
      },
      {
        "word": "千",
        "furigana": "せん",
        "romaji": "sen",
        "english": "Thousand",
        "kanji": "千",
        "exampleSentence": "この本は千円でした。",
        "exampleEnglish": "This book was 1,000 yen."
      },
      {
        "word": "全部",
        "furigana": "ぜんぶ",
        "romaji": "zenbu",
        "english": "All / Everything",
        "kanji": "全部",
        "exampleSentence": "宿題を全部終わらせました。",
        "exampleEnglish": "I finished all the homework."
      }
    ]
  },
  "そ": {
    "char": "そ",
    "romaji": "so",
    "script": "Hiragana",
    "strokeCount": 1,
    "mnemonic": "Looks like a zig-zag Sewing stitch.",
    "similarChars": [
      "え",
      "ろ"
    ],
    "words": [
      {
        "word": "空",
        "furigana": "そら",
        "romaji": "sora",
        "english": "Sky",
        "kanji": "空",
        "exampleSentence": "青い空に白い雲が浮かんでいます。",
        "exampleEnglish": "White clouds float in the blue sky."
      },
      {
        "word": "外",
        "furigana": "そと",
        "romaji": "soto",
        "english": "Outside",
        "kanji": "外",
        "exampleSentence": "外は少し寒いです。",
        "exampleEnglish": "It is a little cold outside."
      },
      {
        "word": "そこ",
        "furigana": "そこ",
        "romaji": "soko",
        "english": "There (near listener)",
        "kanji": "其処",
        "exampleSentence": "そこにカバンを置いてください。",
        "exampleEnglish": "Please place your bag there."
      },
      {
        "word": "そして",
        "furigana": "そして",
        "romaji": "soshite",
        "english": "And / And then",
        "kanji": "そして",
        "exampleSentence": "朝ご飯を食べて、そして学校へ行きます。",
        "exampleEnglish": "I eat breakfast, and then go to school."
      },
      {
        "word": "掃除",
        "furigana": "そうじ",
        "romaji": "souji",
        "english": "Cleaning",
        "kanji": "掃除",
        "exampleSentence": "土曜日に部屋を掃除します。",
        "exampleEnglish": "I clean my room on Saturday."
      },
      {
        "word": "側",
        "furigana": "そば",
        "romaji": "soba",
        "english": "Beside / Near",
        "kanji": "側",
        "exampleSentence": "私のそばに来てください。",
        "exampleEnglish": "Please come near me."
      },
      {
        "word": "祖父",
        "furigana": "そふ",
        "romaji": "sofu",
        "english": "Grandfather",
        "kanji": "祖父",
        "exampleSentence": "祖父は元気に散歩しています。",
        "exampleEnglish": "My grandfather is taking a walk energetically."
      },
      {
        "word": "祖母",
        "furigana": "そぼ",
        "romaji": "sobo",
        "english": "Grandmother",
        "kanji": "祖母",
        "exampleSentence": "祖母はお茶を淹れるのが上手です。",
        "exampleEnglish": "My grandmother is good at brewing tea."
      },
      {
        "word": "相談",
        "furigana": "そうだん",
        "romaji": "soudan",
        "english": "Consultation",
        "kanji": "相談",
        "exampleSentence": "先生に進路を相談します。",
        "exampleEnglish": "I consult the teacher about future plans."
      },
      {
        "word": "育てる",
        "furigana": "そだてる",
        "romaji": "sodateru",
        "english": "To raise / grow",
        "kanji": "育てる",
        "exampleSentence": "ベランダでトマトを育てています。",
        "exampleEnglish": "I am growing tomatoes on the balcony."
      }
    ]
  },
  "た": {
    "char": "た",
    "romaji": "ta",
    "script": "Hiragana",
    "strokeCount": 4,
    "mnemonic": "Literally spells out the letters t-a.",
    "similarChars": [
      "な",
      "に"
    ],
    "words": [
      {
        "word": "食べる",
        "furigana": "たべる",
        "romaji": "taberu",
        "english": "To eat",
        "kanji": "食べる",
        "exampleSentence": "お昼ご飯にラーメンを食べます。",
        "exampleEnglish": "I eat ramen for lunch."
      },
      {
        "word": "高い",
        "furigana": "たかい",
        "romaji": "takai",
        "english": "High / Expensive",
        "kanji": "高い",
        "exampleSentence": "富士山は日本で一番高い山です。",
        "exampleEnglish": "Mt. Fuji is the highest mountain in Japan."
      },
      {
        "word": "卵",
        "furigana": "たまご",
        "romaji": "tamago",
        "english": "Egg",
        "kanji": "卵",
        "exampleSentence": "朝ご飯に卵焼きを作ります。",
        "exampleEnglish": "I make rolled omelet for breakfast."
      },
      {
        "word": "楽しい",
        "furigana": "たのしい",
        "romaji": "tanoshii",
        "english": "Fun / Enjoyable",
        "kanji": "楽しい",
        "exampleSentence": "友達と遊ぶのはとても楽しいです。",
        "exampleEnglish": "Hanging out with friends is very fun."
      },
      {
        "word": "たくさん",
        "furigana": "たくさん",
        "romaji": "takusan",
        "english": "A lot / Many",
        "kanji": "沢山",
        "exampleSentence": "本をたくさん読みました。",
        "exampleEnglish": "I read a lot of books."
      },
      {
        "word": "立つ",
        "furigana": "たつ",
        "romaji": "tatsu",
        "english": "To stand",
        "kanji": "立つ",
        "exampleSentence": "電車の席から立ちます。",
        "exampleEnglish": "I stand up from the train seat."
      },
      {
        "word": "建物",
        "furigana": "たてもの",
        "romaji": "tatemono",
        "english": "Building",
        "kanji": "建物",
        "exampleSentence": "あの高い建物はデパートです。",
        "exampleEnglish": "That tall building is a department store."
      },
      {
        "word": "大切",
        "furigana": "たいせつ",
        "romaji": "taisetsu",
        "english": "Important",
        "kanji": "大切",
        "exampleSentence": "時間はとても大切です。",
        "exampleEnglish": "Time is very important."
      },
      {
        "word": "大変",
        "furigana": "たいへん",
        "romaji": "taihen",
        "english": "Tough / Great deal",
        "kanji": "大変",
        "exampleSentence": "毎日の勉強は大変ですが楽しいです。",
        "exampleEnglish": "Daily study is tough but fun."
      },
      {
        "word": "助ける",
        "furigana": "たすける",
        "romaji": "tasukeru",
        "english": "To help / save",
        "kanji": "助ける",
        "exampleSentence": "困っている人を助けます。",
        "exampleEnglish": "Help someone in trouble."
      }
    ]
  },
  "ち": {
    "char": "ち",
    "romaji": "chi",
    "script": "Hiragana",
    "strokeCount": 2,
    "mnemonic": "Looks like a Cheerleader swinging arms.",
    "similarChars": [
      "さ",
      "き"
    ],
    "words": [
      {
        "word": "地図",
        "furigana": "ちず",
        "romaji": "chizu",
        "english": "Map",
        "kanji": "地図",
        "exampleSentence": "スマホで地図を確認します。",
        "exampleEnglish": "I check the map on my smartphone."
      },
      {
        "word": "近い",
        "furigana": "ちかい",
        "romaji": "chikai",
        "english": "Near / Close",
        "kanji": "近い",
        "exampleSentence": "私の家は駅から近いです。",
        "exampleEnglish": "My house is close to the station."
      },
      {
        "word": "父",
        "furigana": "ちち",
        "romaji": "chichi",
        "english": "Father (my)",
        "kanji": "父",
        "exampleSentence": "父は毎朝早く起きます。",
        "exampleEnglish": "My father wakes up early every morning."
      },
      {
        "word": "地下鉄",
        "furigana": "ちかてつ",
        "romaji": "chikatetsu",
        "english": "Subway",
        "kanji": "地下鉄",
        "exampleSentence": "地下鉄で銀座へ行きます。",
        "exampleEnglish": "I go to Ginza by subway."
      },
      {
        "word": "小さい",
        "furigana": "ちいさい",
        "romaji": "chiisai",
        "english": "Small / Little",
        "kanji": "小さい",
        "exampleSentence": "小さい可愛い子犬がいます。",
        "exampleEnglish": "There is a small, cute puppy."
      },
      {
        "word": "違う",
        "furigana": "ちがう",
        "romaji": "chigau",
        "english": "Different / Wrong",
        "kanji": "違う",
        "exampleSentence": "いいえ、それは違います。",
        "exampleEnglish": "No, that is different."
      },
      {
        "word": "力",
        "furigana": "ちから",
        "romaji": "chikara",
        "english": "Power / Strength",
        "kanji": "力",
        "exampleSentence": "力を合わせて頑張りましょう。",
        "exampleEnglish": "Let us combine our strength and do our best."
      },
      {
        "word": "注意",
        "furigana": "ちゅうい",
        "romaji": "chuui",
        "english": "Caution / Attention",
        "kanji": "注意",
        "exampleSentence": "車に注意して道を渡ります。",
        "exampleEnglish": "Cross the street watching out for cars."
      },
      {
        "word": "ちょうど",
        "furigana": "ちょうど",
        "romaji": "choudo",
        "english": "Exactly / Just right",
        "kanji": "丁度",
        "exampleSentence": "ちょうど今、駅に着きました。",
        "exampleEnglish": "I arrived at the station just now."
      },
      {
        "word": "朝食",
        "furigana": "ちょうしょく",
        "romaji": "choushoku",
        "english": "Breakfast (formal)",
        "kanji": "朝食",
        "exampleSentence": "朝食に和食を食べます。",
        "exampleEnglish": "I eat Japanese food for breakfast."
      }
    ]
  },
  "つ": {
    "char": "つ",
    "romaji": "tsu",
    "script": "Hiragana",
    "strokeCount": 1,
    "mnemonic": "Looks like a giant Tsunami wave curling.",
    "similarChars": [
      "し",
      "う"
    ],
    "words": [
      {
        "word": "月",
        "furigana": "つき",
        "romaji": "tsuki",
        "english": "Moon / Month",
        "kanji": "月",
        "exampleSentence": "今夜は月がとても綺麗です。",
        "exampleEnglish": "The moon is very beautiful tonight."
      },
      {
        "word": "机",
        "furigana": "つくえ",
        "romaji": "tsukue",
        "english": "Desk",
        "kanji": "机",
        "exampleSentence": "机の上で勉強します。",
        "exampleEnglish": "I study on the desk."
      },
      {
        "word": "作る",
        "furigana": "つくる",
        "romaji": "tsukuru",
        "english": "To make / build",
        "kanji": "作る",
        "exampleSentence": "晩ご飯にカレーを作ります。",
        "exampleEnglish": "I make curry for dinner."
      },
      {
        "word": "使う",
        "furigana": "つかう",
        "romaji": "tsukau",
        "english": "To use",
        "kanji": "使う",
        "exampleSentence": "辞書を使って言葉を調べます。",
        "exampleEnglish": "Look up words using a dictionary."
      },
      {
        "word": "着く",
        "furigana": "つく",
        "romaji": "tsuku",
        "english": "To arrive",
        "kanji": "着く",
        "exampleSentence": "午後三時に東京に着きます。",
        "exampleEnglish": "I arrive in Tokyo at 3 PM."
      },
      {
        "word": "次",
        "furigana": "つぎ",
        "romaji": "tsugi",
        "english": "Next",
        "kanji": "次",
        "exampleSentence": "次の駅で電車を降ります。",
        "exampleEnglish": "Get off the train at the next station."
      },
      {
        "word": "強い",
        "furigana": "つよい",
        "romaji": "tsuyoi",
        "english": "Strong",
        "kanji": "強い",
        "exampleSentence": "彼はとても力が強いです。",
        "exampleEnglish": "He is very strong."
      },
      {
        "word": "疲れる",
        "furigana": "つかれる",
        "romaji": "tsukareru",
        "english": "To get tired",
        "kanji": "疲れる",
        "exampleSentence": "たくさん歩いて疲れました。",
        "exampleEnglish": "I got tired from walking a lot."
      },
      {
        "word": "連れて行く",
        "furigana": "つれていく",
        "romaji": "tsureteiku",
        "english": "To take someone along",
        "kanji": "連れて行く",
        "exampleSentence": "子供を動物園へ連れて行きます。",
        "exampleEnglish": "Take children to the zoo."
      },
      {
        "word": "伝える",
        "furigana": "つたえる",
        "romaji": "tsutaeru",
        "english": "To convey / tell",
        "kanji": "伝える",
        "exampleSentence": "彼にメッセージを伝えます。",
        "exampleEnglish": "I will convey the message to him."
      }
    ]
  },
  "て": {
    "char": "て",
    "romaji": "te",
    "script": "Hiragana",
    "strokeCount": 1,
    "mnemonic": "Looks like a wagging dog’s Tail.",
    "similarChars": [
      "で",
      "と"
    ],
    "words": [
      {
        "word": "手",
        "furigana": "て",
        "romaji": "te",
        "english": "Hand",
        "kanji": "手",
        "exampleSentence": "ご飯を食べる前に手を洗います。",
        "exampleEnglish": "I wash my hands before eating."
      },
      {
        "word": "手紙",
        "furigana": "てがみ",
        "romaji": "tegami",
        "english": "Letter",
        "kanji": "手紙",
        "exampleSentence": "友達に手紙を書きました。",
        "exampleEnglish": "I wrote a letter to my friend."
      },
      {
        "word": "天気",
        "furigana": "てんき",
        "romaji": "tenki",
        "english": "Weather",
        "kanji": "天気",
        "exampleSentence": "明日はいい天気になるといいですね。",
        "exampleEnglish": "Hope the weather will be nice tomorrow."
      },
      {
        "word": "店員",
        "furigana": "てんいん",
        "romaji": "ten'in",
        "english": "Store clerk",
        "kanji": "店員",
        "exampleSentence": "店員さんに商品の場所を聞きます。",
        "exampleEnglish": "Ask the clerk for the item location."
      },
      {
        "word": "テーブル",
        "furigana": "てーぶる",
        "romaji": "teeburu",
        "english": "Table",
        "kanji": "テーブル",
        "exampleSentence": "テーブルにお皿を並べます。",
        "exampleEnglish": "Arrange dishes on the table."
      },
      {
        "word": "手伝う",
        "furigana": "てつだう",
        "romaji": "tetsudau",
        "english": "To help / assist",
        "kanji": "手伝う",
        "exampleSentence": "母の料理を手伝います。",
        "exampleEnglish": "I help with my mother’s cooking."
      },
      {
        "word": "天ぷら",
        "furigana": "てんぷら",
        "romaji": "tenpura",
        "english": "Tempura",
        "kanji": "天ぷら",
        "exampleSentence": "サクサクの天ぷらが美味しいです。",
        "exampleEnglish": "Crispy tempura is delicious."
      },
      {
        "word": "手帳",
        "furigana": "てちょう",
        "romaji": "techou",
        "english": "Pocket notebook",
        "kanji": "手帳",
        "exampleSentence": "手帳に予定をメモします。",
        "exampleEnglish": "Jot down schedules in the notebook."
      },
      {
        "word": "定期券",
        "furigana": "ていきけん",
        "romaji": "teikiken",
        "english": "Commuter pass",
        "kanji": "定期券",
        "exampleSentence": "改札で定期券をタッチします。",
        "exampleEnglish": "Touch commuter pass at the ticket gate."
      },
      {
        "word": "丁寧",
        "furigana": "ていねい",
        "romaji": "teinei",
        "english": "Polite / Courteous",
        "kanji": "丁寧",
        "exampleSentence": "丁寧な言葉遣いで話します。",
        "exampleEnglish": "Speak using polite wording."
      }
    ]
  },
  "と": {
    "char": "と",
    "romaji": "to",
    "script": "Hiragana",
    "strokeCount": 2,
    "mnemonic": "Looks like a thorn sticking in a Toe.",
    "similarChars": [
      "て",
      "ど"
    ],
    "words": [
      {
        "word": "友達",
        "furigana": "ともだち",
        "romaji": "tomodachi",
        "english": "Friend",
        "kanji": "友達",
        "exampleSentence": "週末に友達と映画を見ます。",
        "exampleEnglish": "I watch movies with friends on weekends."
      },
      {
        "word": "時計",
        "furigana": "とけい",
        "romaji": "tokei",
        "english": "Clock / Watch",
        "kanji": "時計",
        "exampleSentence": "時計を見て時間を確かめます。",
        "exampleEnglish": "Check the time by looking at the watch."
      },
      {
        "word": "どこ",
        "furigana": "どこ",
        "romaji": "doko",
        "english": "Where",
        "kanji": "何処",
        "exampleSentence": "駅はどこにありますか。",
        "exampleEnglish": "Where is the station located?"
      },
      {
        "word": "鳥",
        "furigana": "とり",
        "romaji": "tori",
        "english": "Bird",
        "kanji": "鳥",
        "exampleSentence": "空を鳥が飛んでいます。",
        "exampleEnglish": "Birds are flying in the sky."
      },
      {
        "word": "図書館",
        "furigana": "としょかん",
        "romaji": "toshokan",
        "english": "Library",
        "kanji": "図書館",
        "exampleSentence": "図書館で本を借ります。",
        "exampleEnglish": "Borrow books at the library."
      },
      {
        "word": "遠い",
        "furigana": "とおい",
        "romaji": "tooi",
        "english": "Far / Distant",
        "kanji": "遠い",
        "exampleSentence": "私の学校は家から遠いです。",
        "exampleEnglish": "My school is far from home."
      },
      {
        "word": "泊まる",
        "furigana": "とまる",
        "romaji": "tomaru",
        "english": "To stay overnight",
        "kanji": "泊まる",
        "exampleSentence": "京都のホテルに泊まります。",
        "exampleEnglish": "Stay overnight at a hotel in Kyoto."
      },
      {
        "word": "止まる",
        "furigana": "とまる",
        "romaji": "tomaru",
        "english": "To stop",
        "kanji": "止まる",
        "exampleSentence": "信号が赤なので止まります。",
        "exampleEnglish": "Stop because the signal is red."
      },
      {
        "word": "隣",
        "furigana": "となり",
        "romaji": "tonari",
        "english": "Next door / Beside",
        "kanji": "隣",
        "exampleSentence": "隣の部屋から声が聞こえます。",
        "exampleEnglish": "Voices can be heard from next door."
      },
      {
        "word": "撮る",
        "furigana": "とる",
        "romaji": "toru",
        "english": "To take (photo)",
        "kanji": "撮る",
        "exampleSentence": "桜の前で写真を撮りましょう。",
        "exampleEnglish": "Let us take a photo in front of the sakura."
      }
    ]
  },
  "な": {
    "char": "な",
    "romaji": "na",
    "script": "Hiragana",
    "strokeCount": 4,
    "mnemonic": "Looks like a Nun kneeling before a cross.",
    "similarChars": [
      "た",
      "に"
    ],
    "words": [
      {
        "word": "名前",
        "furigana": "なまえ",
        "romaji": "namae",
        "english": "Name",
        "kanji": "名前",
        "exampleSentence": "お名前を教えてください。",
        "exampleEnglish": "Please tell me your name."
      },
      {
        "word": "夏",
        "furigana": "なつ",
        "romaji": "natsu",
        "english": "Summer",
        "kanji": "夏",
        "exampleSentence": "日本の夏はとても暑いです。",
        "exampleEnglish": "Japanese summer is very hot."
      },
      {
        "word": "何",
        "furigana": "なに",
        "romaji": "nani",
        "english": "What",
        "kanji": "何",
        "exampleSentence": "朝ご飯は何を食べましたか。",
        "exampleEnglish": "What did you eat for breakfast?"
      },
      {
        "word": "長い",
        "furigana": "ながい",
        "romaji": "nagai",
        "english": "Long",
        "kanji": "長い",
        "exampleSentence": "長い休みが待ち遠しいです。",
        "exampleEnglish": "I look forward to the long holiday."
      },
      {
        "word": "習う",
        "furigana": "ならう",
        "romaji": "narau",
        "english": "To learn",
        "kanji": "習う",
        "exampleSentence": "毎週ピアノを習っています。",
        "exampleEnglish": "I learn piano every week."
      },
      {
        "word": "中",
        "furigana": "なか",
        "romaji": "naka",
        "english": "Inside / Middle",
        "kanji": "中",
        "exampleSentence": "カバンの中に財布があります。",
        "exampleEnglish": "There is a wallet inside the bag."
      },
      {
        "word": "なくす",
        "furigana": "なくす",
        "romaji": "nakusu",
        "english": "To lose something",
        "kanji": "無くす",
        "exampleSentence": "鍵をなくさないように注意します。",
        "exampleEnglish": "Be careful not to lose the keys."
      },
      {
        "word": "なぜ",
        "furigana": "なぜ",
        "romaji": "naze",
        "english": "Why",
        "kanji": "何故",
        "exampleSentence": "なぜ日本語を勉強していますか。",
        "exampleEnglish": "Why are you studying Japanese?"
      },
      {
        "word": "七つ",
        "furigana": "ななつ",
        "romaji": "nanatsu",
        "english": "Seven things",
        "kanji": "七つ",
        "exampleSentence": "りんごを七つ買いました。",
        "exampleEnglish": "I bought seven apples."
      },
      {
        "word": "並ぶ",
        "furigana": "ならぶ",
        "romaji": "narabu",
        "english": "To line up",
        "kanji": "並ぶ",
        "exampleSentence": "店の前に人が並んでいます。",
        "exampleEnglish": "People are lining up in front of the store."
      }
    ]
  },
  "に": {
    "char": "に",
    "romaji": "ni",
    "script": "Hiragana",
    "strokeCount": 3,
    "mnemonic": "Looks like a Needle threading cloth.",
    "similarChars": [
      "こ",
      "た"
    ],
    "words": [
      {
        "word": "日本",
        "furigana": "にほん",
        "romaji": "nihon",
        "english": "Japan",
        "kanji": "日本",
        "exampleSentence": "日本のアニメと文化が好きです。",
        "exampleEnglish": "I like Japanese anime and culture."
      },
      {
        "word": "肉",
        "furigana": "にく",
        "romaji": "niku",
        "english": "Meat",
        "kanji": "肉",
        "exampleSentence": "今夜は美味しいお肉を食べます。",
        "exampleEnglish": "Eat delicious meat tonight."
      },
      {
        "word": "日曜日",
        "furigana": "にちようび",
        "romaji": "nichiyoubi",
        "english": "Sunday",
        "kanji": "日曜日",
        "exampleSentence": "日曜日はゆっくり休みます。",
        "exampleEnglish": "Rest leisurely on Sunday."
      },
      {
        "word": "二",
        "furigana": "に",
        "romaji": "ni",
        "english": "Two (2)",
        "kanji": "二",
        "exampleSentence": "二人で旅行に行きます。",
        "exampleEnglish": "Two of us go on a trip."
      },
      {
        "word": "荷物",
        "furigana": "にもつ",
        "romaji": "nimotsu",
        "english": "Luggage / Baggage",
        "kanji": "荷物",
        "exampleSentence": "重い荷物を運びます。",
        "exampleEnglish": "Carry heavy luggage."
      },
      {
        "word": "庭",
        "furigana": "にわ",
        "romaji": "niwa",
        "english": "Garden / Yard",
        "kanji": "庭",
        "exampleSentence": "庭に綺麗な花が咲いています。",
        "exampleEnglish": "Beautiful flowers are blooming in the yard."
      },
      {
        "word": "人形",
        "furigana": "にんぎょう",
        "romaji": "ningyou",
        "english": "Doll",
        "kanji": "人形",
        "exampleSentence": "可愛い日本の人形を飾ります。",
        "exampleEnglish": "Display a cute Japanese doll."
      },
      {
        "word": "似ている",
        "furigana": "にている",
        "romaji": "niteiru",
        "english": "To resemble",
        "kanji": "似ている",
        "exampleSentence": "妹は母によく似ています。",
        "exampleEnglish": "My younger sister resembles our mother well."
      },
      {
        "word": "人気",
        "furigana": "にんき",
        "romaji": "ninki",
        "english": "Popularity",
        "kanji": "人気",
        "exampleSentence": "このラーメン屋はとても人気があります。",
        "exampleEnglish": "This ramen shop is very popular."
      },
      {
        "word": "人参",
        "furigana": "にんじん",
        "romaji": "ninjin",
        "english": "Carrot",
        "kanji": "人参",
        "exampleSentence": "カレーに人参をたくさん入れます。",
        "exampleEnglish": "Put lots of carrots in the curry."
      }
    ]
  },
  "ぬ": {
    "char": "ぬ",
    "romaji": "nu",
    "script": "Hiragana",
    "strokeCount": 2,
    "mnemonic": "Looks like Noodles picked up with chopsticks.",
    "similarChars": [
      "め",
      "ね"
    ],
    "words": [
      {
        "word": "ぬいぐるみ",
        "furigana": "ぬいぐるみ",
        "romaji": "nuigurumi",
        "english": "Stuffed plush toy",
        "kanji": "ぬいぐるみ",
        "exampleSentence": "ベッドの上にぬいぐるみを置きます。",
        "exampleEnglish": "Place a stuffed plushie on the bed."
      },
      {
        "word": "脱ぐ",
        "furigana": "ぬぐ",
        "romaji": "nugu",
        "english": "To take off (shoes/clothes)",
        "kanji": "脱ぐ",
        "exampleSentence": "部屋に入る前に靴を脱ぎます。",
        "exampleEnglish": "Take off shoes before entering the room."
      },
      {
        "word": "塗る",
        "furigana": "ぬる",
        "romaji": "nuru",
        "english": "To paint / spread",
        "kanji": "塗る",
        "exampleSentence": "パンにバターを塗ります。",
        "exampleEnglish": "Spread butter on the bread."
      },
      {
        "word": "濡れる",
        "furigana": "ぬれる",
        "romaji": "nureru",
        "english": "To get wet",
        "kanji": "濡れる",
        "exampleSentence": "雨で服が濡れてしまいました。",
        "exampleEnglish": "My clothes got wet in the rain."
      },
      {
        "word": "温い",
        "furigana": "ぬるい",
        "romaji": "nurui",
        "english": "Lukewarm",
        "kanji": "温い",
        "exampleSentence": "お風呂のお湯が少しぬるいです。",
        "exampleEnglish": "The bath water is a little lukewarm."
      },
      {
        "word": "布",
        "furigana": "ぬの",
        "romaji": "nuno",
        "english": "Cloth / Fabric",
        "kanji": "布",
        "exampleSentence": "柔らかい布で机を拭きます。",
        "exampleEnglish": "Wipe the desk with soft cloth."
      },
      {
        "word": "沼",
        "furigana": "ぬま",
        "romaji": "numa",
        "english": "Swamp / Marsh",
        "kanji": "沼",
        "exampleSentence": "静かな沼の周りを散歩します。",
        "exampleEnglish": "Walk around the quiet marsh."
      },
      {
        "word": "盗む",
        "furigana": "ぬすむ",
        "romaji": "nusumu",
        "english": "To steal",
        "kanji": "盗む",
        "exampleSentence": "自転車を盗まれないように鍵をかけます。",
        "exampleEnglish": "Lock the bike so it won’t be stolen."
      },
      {
        "word": "抜く",
        "furigana": "ぬく",
        "romaji": "nuku",
        "english": "To extract / pull out",
        "kanji": "抜く",
        "exampleSentence": "庭の雑草を抜きます。",
        "exampleEnglish": "Pull out weeds in the garden."
      },
      {
        "word": "ぬくもり",
        "furigana": "ぬくもり",
        "romaji": "nukumori",
        "english": "Warmth",
        "kanji": "温もり",
        "exampleSentence": "家族の温もりを感じます。",
        "exampleEnglish": "Feel the warmth of family."
      }
    ]
  },
  "ね": {
    "char": "ね",
    "romaji": "ne",
    "script": "Hiragana",
    "strokeCount": 2,
    "mnemonic": "Looks like a Cat (Neko) sitting with a tail.",
    "similarChars": [
      "わ",
      "れ",
      "ぬ"
    ],
    "words": [
      {
        "word": "猫",
        "furigana": "ねこ",
        "romaji": "neko",
        "english": "Cat",
        "kanji": "猫",
        "exampleSentence": "白い猫が日なたで寝ています。",
        "exampleEnglish": "A white cat is sleeping in the sun."
      },
      {
        "word": "寝る",
        "furigana": "ねる",
        "romaji": "neru",
        "english": "To sleep / go to bed",
        "kanji": "寝る",
        "exampleSentence": "夜十一時にベッドで寝ます。",
        "exampleEnglish": "I go to sleep at 11 PM."
      },
      {
        "word": "熱",
        "furigana": "ねつ",
        "romaji": "netsu",
        "english": "Fever / Heat",
        "kanji": "熱",
        "exampleSentence": "風邪をひいて熱があります。",
        "exampleEnglish": "I caught a cold and have a fever."
      },
      {
        "word": "値段",
        "furigana": "ねだん",
        "romaji": "nedan",
        "english": "Price / Cost",
        "kanji": "値段",
        "exampleSentence": "このシャツの値段はいくらですか。",
        "exampleEnglish": "How much is the price of this shirt?"
      },
      {
        "word": "ネクタイ",
        "furigana": "ねくたい",
        "romaji": "nekutai",
        "english": "Necktie",
        "kanji": "ネクタイ",
        "exampleSentence": "スーツに青いネクタイを締めます。",
        "exampleEnglish": "Wear a blue necktie with the suit."
      },
      {
        "word": "願い",
        "furigana": "ねがい",
        "romaji": "negai",
        "english": "Wish / Desire",
        "kanji": "願い",
        "exampleSentence": "星に願いをかけます。",
        "exampleEnglish": "Make a wish upon a star."
      },
      {
        "word": "眠い",
        "furigana": "ねむい",
        "romaji": "nemui",
        "english": "Sleepy",
        "kanji": "眠い",
        "exampleSentence": "今日は朝からとても眠いです。",
        "exampleEnglish": "I am very sleepy from the morning today."
      },
      {
        "word": "年齢",
        "furigana": "ねんれい",
        "romaji": "nenrei",
        "english": "Age / Years",
        "kanji": "年齢",
        "exampleSentence": "書類に年齢を記入します。",
        "exampleEnglish": "Fill in your age on the form."
      },
      {
        "word": "熱心",
        "furigana": "ねっしん",
        "romaji": "nesshin",
        "english": "Enthusiastic",
        "kanji": "熱心",
        "exampleSentence": "彼は熱心に日本語を勉強しています。",
        "exampleEnglish": "He studies Japanese enthusiastically."
      },
      {
        "word": "年末",
        "furigana": "ねんまつ",
        "romaji": "nenmatsu",
        "english": "Year-end",
        "kanji": "年末",
        "exampleSentence": "年末に大掃除をします。",
        "exampleEnglish": "Do a big cleaning at the year-end."
      }
    ]
  },
  "の": {
    "char": "の",
    "romaji": "no",
    "script": "Hiragana",
    "strokeCount": 1,
    "mnemonic": "Looks like a classic No-smoking sign circle.",
    "similarChars": [
      "め"
    ],
    "words": [
      {
        "word": "飲み物",
        "furigana": "のみもの",
        "romaji": "nomimono",
        "english": "Drink / Beverage",
        "kanji": "飲み物",
        "exampleSentence": "冷たい飲み物をください。",
        "exampleEnglish": "Please give me a cold drink."
      },
      {
        "word": "飲む",
        "furigana": "のむ",
        "romaji": "nomu",
        "english": "To drink",
        "kanji": "飲む",
        "exampleSentence": "毎朝温かいお茶を飲みます。",
        "exampleEnglish": "I drink warm green tea every morning."
      },
      {
        "word": "乗る",
        "furigana": "のる",
        "romaji": "noru",
        "english": "To ride / board",
        "kanji": "乗る",
        "exampleSentence": "八時の電車に乗ります。",
        "exampleEnglish": "I board the 8 o'clock train."
      },
      {
        "word": "ノート",
        "furigana": "のーと",
        "romaji": "nooto",
        "english": "Notebook",
        "kanji": "ノート",
        "exampleSentence": "新しいノートに漢字を練習します。",
        "exampleEnglish": "Practice kanji in a new notebook."
      },
      {
        "word": "喉",
        "furigana": "のど",
        "romaji": "nodo",
        "english": "Throat",
        "kanji": "喉",
        "exampleSentence": "喉が渇いたので水を飲みます。",
        "exampleEnglish": "My throat is dry so I drink water."
      },
      {
        "word": "残る",
        "furigana": "のこる",
        "romaji": "nokoru",
        "english": "To remain",
        "kanji": "残る",
        "exampleSentence": "料理が少し残っています。",
        "exampleEnglish": "A little food remains."
      },
      {
        "word": "登る",
        "furigana": "のぼる",
        "romaji": "noboru",
        "english": "To climb",
        "kanji": "登る",
        "exampleSentence": "夏休みに山へ登ります。",
        "exampleEnglish": "Climb a mountain during summer vacation."
      },
      {
        "word": "のんびり",
        "furigana": "のんびり",
        "romaji": "nonbiri",
        "english": "Carefree / Relaxed",
        "kanji": "のんびり",
        "exampleSentence": "週末は家でのんびり過ごします。",
        "exampleEnglish": "Spend weekends relaxing at home."
      },
      {
        "word": "野原",
        "furigana": "のはら",
        "romaji": "nohara",
        "english": "Field / Meadow",
        "kanji": "野原",
        "exampleSentence": "緑の野原を風が吹き抜けます。",
        "exampleEnglish": "The wind blows through the green meadow."
      },
      {
        "word": "乗り換える",
        "furigana": "のりかえる",
        "romaji": "norikaeru",
        "english": "To transfer trains",
        "kanji": "乗り換える",
        "exampleSentence": "次の駅で地下鉄に乗り換えます。",
        "exampleEnglish": "Transfer to the subway at the next station."
      }
    ]
  },
  "は": {
    "char": "は",
    "romaji": "ha",
    "script": "Hiragana",
    "strokeCount": 3,
    "mnemonic": "Looks like a person standing by a fence laughing Ha-ha.",
    "similarChars": [
      "ほ",
      "け",
      "ま"
    ],
    "words": [
      {
        "word": "花",
        "furigana": "はな",
        "romaji": "hana",
        "english": "Flower",
        "kanji": "花",
        "exampleSentence": "庭に綺麗な花が咲いています。",
        "exampleEnglish": "Beautiful flowers are blooming in the garden."
      },
      {
        "word": "鼻",
        "furigana": "はな",
        "romaji": "hana",
        "english": "Nose",
        "kanji": "鼻",
        "exampleSentence": "象は鼻が長いです。",
        "exampleEnglish": "Elephants have long trunks (noses)."
      },
      {
        "word": "春",
        "furigana": "はる",
        "romaji": "haru",
        "english": "Spring season",
        "kanji": "春",
        "exampleSentence": "春になると桜が咲きます。",
        "exampleEnglish": "Sakura blooms when spring arrives."
      },
      {
        "word": "話す",
        "furigana": "はなす",
        "romaji": "hanasu",
        "english": "To speak / talk",
        "kanji": "話す",
        "exampleSentence": "先生と日本語で話します。",
        "exampleEnglish": "I speak with the teacher in Japanese."
      },
      {
        "word": "母",
        "furigana": "はは",
        "romaji": "haha",
        "english": "Mother (my)",
        "kanji": "母",
        "exampleSentence": "母は料理がとても上手です。",
        "exampleEnglish": "My mother is very good at cooking."
      },
      {
        "word": "箸",
        "furigana": "はし",
        "romaji": "hashi",
        "english": "Chopsticks",
        "kanji": "箸",
        "exampleSentence": "箸でご飯を食べます。",
        "exampleEnglish": "Eat meals with chopsticks."
      },
      {
        "word": "橋",
        "furigana": "はし",
        "romaji": "hashi",
        "english": "Bridge",
        "kanji": "橋",
        "exampleSentence": "大きな川にかかる橋を渡ります。",
        "exampleEnglish": "Cross the bridge over the big river."
      },
      {
        "word": "早い",
        "furigana": "はやい",
        "romaji": "hayai",
        "english": "Early / Fast",
        "kanji": "早い",
        "exampleSentence": "明日は朝早く起きます。",
        "exampleEnglish": "I will wake up early tomorrow morning."
      },
      {
        "word": "走る",
        "furigana": "はしる",
        "romaji": "hashiru",
        "english": "To run",
        "kanji": "走る",
        "exampleSentence": "公園で毎朝走っています。",
        "exampleEnglish": "I run in the park every morning."
      },
      {
        "word": "働く",
        "furigana": "はたらく",
        "romaji": "hataraku",
        "english": "To work",
        "kanji": "働く",
        "exampleSentence": "父は会社で一生懸命働きます。",
        "exampleEnglish": "My father works hard at the company."
      }
    ]
  },
  "ひ": {
    "char": "ひ",
    "romaji": "hi",
    "script": "Hiragana",
    "strokeCount": 1,
    "mnemonic": "Looks like someone smiling Hee-hee.",
    "similarChars": [
      "と"
    ],
    "words": [
      {
        "word": "人",
        "furigana": "ひと",
        "romaji": "hito",
        "english": "Person / People",
        "kanji": "人",
        "exampleSentence": "あの人はとても親切です。",
        "exampleEnglish": "That person is very kind."
      },
      {
        "word": "光",
        "furigana": "ひかり",
        "romaji": "hikari",
        "english": "Light / Beam",
        "kanji": "光",
        "exampleSentence": "太陽の光が差し込みます。",
        "exampleEnglish": "Sunlight shines in."
      },
      {
        "word": "昼",
        "furigana": "ひる",
        "romaji": "hiru",
        "english": "Noon / Daytime",
        "kanji": "昼",
        "exampleSentence": "お昼に友達とランチを食べます。",
        "exampleEnglish": "I eat lunch with friends at noon."
      },
      {
        "word": "昼ご飯",
        "furigana": "ひるごはん",
        "romaji": "hirugohan",
        "english": "Lunch",
        "kanji": "昼ご飯",
        "exampleSentence": "今日のお昼ご飯はお弁当です。",
        "exampleEnglish": "Today's lunch is a bento box."
      },
      {
        "word": "広い",
        "furigana": "ひろい",
        "romaji": "hiroi",
        "english": "Wide / Spacious",
        "kanji": "広い",
        "exampleSentence": "この公園はとても広いです。",
        "exampleEnglish": "This park is very spacious."
      },
      {
        "word": "左",
        "furigana": "ひだり",
        "romaji": "hidari",
        "english": "Left direction",
        "kanji": "左",
        "exampleSentence": "交差点を左に曲がります。",
        "exampleEnglish": "Turn left at the intersection."
      },
      {
        "word": "飛行機",
        "furigana": "ひこうき",
        "romaji": "hikouki",
        "english": "Airplane",
        "kanji": "飛行機",
        "exampleSentence": "飛行機で日本へ行きます。",
        "exampleEnglish": "I go to Japan by airplane."
      },
      {
        "word": "暇",
        "furigana": "ひま",
        "romaji": "hima",
        "english": "Free time",
        "kanji": "暇",
        "exampleSentence": "週末は暇なので読書します。",
        "exampleEnglish": "I have free time on the weekend so I read."
      },
      {
        "word": "引き出し",
        "furigana": "ひきだし",
        "romaji": "hikidashi",
        "english": "Drawer",
        "kanji": "引き出し",
        "exampleSentence": "机の引き出しにペンがあります。",
        "exampleEnglish": "There is a pen in the desk drawer."
      },
      {
        "word": "低い",
        "furigana": "ひくい",
        "romaji": "hikui",
        "english": "Low",
        "kanji": "低い",
        "exampleSentence": "この机は少し低いです。",
        "exampleEnglish": "This desk is a little low."
      }
    ]
  },
  "ふ": {
    "char": "ふ",
    "romaji": "fu",
    "script": "Hiragana",
    "strokeCount": 4,
    "mnemonic": "Looks like Mt. Fuji with birds flying around.",
    "similarChars": [
      "う"
    ],
    "words": [
      {
        "word": "富士山",
        "furigana": "ふじさん",
        "romaji": "fujisan",
        "english": "Mt. Fuji",
        "kanji": "富士山",
        "exampleSentence": "富士山は日本で一番有名な山です。",
        "exampleEnglish": "Mt. Fuji is the most famous mountain in Japan."
      },
      {
        "word": "冬",
        "furigana": "ふゆ",
        "romaji": "fuyu",
        "english": "Winter",
        "kanji": "冬",
        "exampleSentence": "冬に白い雪が降ります。",
        "exampleEnglish": "White snow falls in winter."
      },
      {
        "word": "服",
        "furigana": "ふく",
        "romaji": "fuku",
        "english": "Clothes",
        "kanji": "服",
        "exampleSentence": "デパートで新しい服を買いました。",
        "exampleEnglish": "I bought new clothes at the department store."
      },
      {
        "word": "降る",
        "furigana": "ふる",
        "romaji": "furu",
        "english": "To fall (rain/snow)",
        "kanji": "降る",
        "exampleSentence": "外で雨が静かに降っています。",
        "exampleEnglish": "Rain is falling quietly outside."
      },
      {
        "word": "封筒",
        "furigana": "ふうとう",
        "romaji": "fuutou",
        "english": "Envelope",
        "kanji": "封筒",
        "exampleSentence": "手紙を封筒に入れます。",
        "exampleEnglish": "Put the letter into an envelope."
      },
      {
        "word": "古い",
        "furigana": "ふるい",
        "romaji": "furui",
        "english": "Old (thing)",
        "kanji": "古い",
        "exampleSentence": "この寺はとても古いです。",
        "exampleEnglish": "This temple is very old."
      },
      {
        "word": "増える",
        "furigana": "ふえる",
        "romaji": "fueru",
        "english": "To increase",
        "kanji": "増える",
        "exampleSentence": "日本語の語彙が増えました。",
        "exampleEnglish": "My Japanese vocabulary increased."
      },
      {
        "word": "太い",
        "furigana": "ふとい",
        "romaji": "futoi",
        "english": "Thick / Fat",
        "kanji": "太い",
        "exampleSentence": "太いペンで大きく書きます。",
        "exampleEnglish": "Write largely with a thick pen."
      },
      {
        "word": "普通",
        "furigana": "ふつう",
        "romaji": "futsuu",
        "english": "Normal / Ordinary",
        "kanji": "普通",
        "exampleSentence": "普通の電車に乗ります。",
        "exampleEnglish": "Ride the local ordinary train."
      },
      {
        "word": "吹く",
        "furigana": "ふく",
        "romaji": "fuku",
        "english": "To blow (wind)",
        "kanji": "吹く",
        "exampleSentence": "涼しい風が吹いています。",
        "exampleEnglish": "A cool breeze is blowing."
      }
    ]
  },
  "へ": {
    "char": "へ",
    "romaji": "he",
    "script": "Hiragana",
    "strokeCount": 1,
    "mnemonic": "Looks like the summit slope of a mountain.",
    "similarChars": [
      "く"
    ],
    "words": [
      {
        "word": "部屋",
        "furigana": "へや",
        "romaji": "heya",
        "english": "Room",
        "kanji": "部屋",
        "exampleSentence": "私の部屋は二階にあります。",
        "exampleEnglish": "My room is on the second floor."
      },
      {
        "word": "下手",
        "furigana": "へた",
        "romaji": "heta",
        "english": "Unskilled / Poor at",
        "kanji": "下手",
        "exampleSentence": "まだ料理が下手ですが練習します。",
        "exampleEnglish": "I am still poor at cooking but will practice."
      },
      {
        "word": "平和",
        "furigana": "へいわ",
        "romaji": "heiwa",
        "english": "Peace",
        "kanji": "平和",
        "exampleSentence": "世界がいつも平和でありますように。",
        "exampleEnglish": "May the world always be peaceful."
      },
      {
        "word": "変",
        "furigana": "へん",
        "romaji": "hen",
        "english": "Strange / Weird",
        "kanji": "変",
        "exampleSentence": "変な音が聞こえました。",
        "exampleEnglish": "I heard a strange sound."
      },
      {
        "word": "返事",
        "furigana": "へんじ",
        "romaji": "henji",
        "english": "Reply / Answer",
        "kanji": "返事",
        "exampleSentence": "先生に明るく返事をします。",
        "exampleEnglish": "Reply cheerfully to the teacher."
      },
      {
        "word": "減る",
        "furigana": "へる",
        "romaji": "heru",
        "english": "To decrease",
        "kanji": "減る",
        "exampleSentence": "お腹が減りました。",
        "exampleEnglish": "I got hungry (stomach emptied)."
      },
      {
        "word": "平気",
        "furigana": "へいき",
        "romaji": "heiki",
        "english": "Calm / Okay",
        "kanji": "平気",
        "exampleSentence": "少し痛いですが平気です。",
        "exampleEnglish": "It hurts a little, but I am okay."
      },
      {
        "word": "蛇",
        "furigana": "へび",
        "romaji": "hebi",
        "english": "Snake",
        "kanji": "蛇",
        "exampleSentence": "森で蛇を見かけました。",
        "exampleEnglish": "I spotted a snake in the forest."
      },
      {
        "word": "変化",
        "furigana": "へんか",
        "romaji": "henka",
        "english": "Change",
        "kanji": "変化",
        "exampleSentence": "季節の変化を感じます。",
        "exampleEnglish": "Feel the change of seasons."
      },
      {
        "word": "便利",
        "furigana": "べんり",
        "romaji": "benri (hen)",
        "english": "Convenient",
        "kanji": "便利",
        "exampleSentence": "地下鉄はとても便利です。",
        "exampleEnglish": "The subway is very convenient."
      }
    ]
  },
  "ほ": {
    "char": "ほ",
    "romaji": "ho",
    "script": "Hiragana",
    "strokeCount": 4,
    "mnemonic": "Looks like Santa wearing a Hat shouting Ho-ho-ho.",
    "similarChars": [
      "は",
      "ま"
    ],
    "words": [
      {
        "word": "本",
        "furigana": "ほん",
        "romaji": "hon",
        "english": "Book",
        "kanji": "本",
        "exampleSentence": "毎晩寝る前に本を読みます。",
        "exampleEnglish": "I read books every night before sleeping."
      },
      {
        "word": "星",
        "furigana": "ほし",
        "romaji": "hoshi",
        "english": "Star",
        "kanji": "星",
        "exampleSentence": "夜空に星が綺麗に輝いています。",
        "exampleEnglish": "Stars are shining brightly in the night sky."
      },
      {
        "word": "欲しい",
        "furigana": "ほしい",
        "romaji": "hoshii",
        "english": "Wanted / Desired",
        "kanji": "欲しい",
        "exampleSentence": "新しいカメラが欲しいです。",
        "exampleEnglish": "I want a new camera."
      },
      {
        "word": "本当",
        "furigana": "ほんとう",
        "romaji": "hontou",
        "english": "Really / True",
        "kanji": "本当",
        "exampleSentence": "それは本当の話ですか。",
        "exampleEnglish": "Is that a true story?"
      },
      {
        "word": "本棚",
        "furigana": "ほんだな",
        "romaji": "hondana",
        "english": "Bookshelf",
        "kanji": "本棚",
        "exampleSentence": "本棚に教科書を並べます。",
        "exampleEnglish": "Arrange textbooks on the bookshelf."
      },
      {
        "word": "他",
        "furigana": "ほか",
        "romaji": "hoka",
        "english": "Other / Else",
        "kanji": "他",
        "exampleSentence": "他に質問はありますか。",
        "exampleEnglish": "Are there any other questions?"
      },
      {
        "word": "褒める",
        "furigana": "ほめる",
        "romaji": "homeru",
        "english": "To praise",
        "kanji": "褒める",
        "exampleSentence": "先生にテストの結果を褒められました。",
        "exampleEnglish": "Praised by teacher for test result."
      },
      {
        "word": "細い",
        "furigana": "ほそい",
        "romaji": "hosoi",
        "english": "Thin / Slender",
        "kanji": "細い",
        "exampleSentence": "細い路地を歩いて駅へ行きます。",
        "exampleEnglish": "Walk down a narrow alley to the station."
      },
      {
        "word": "保存",
        "furigana": "ほぞん",
        "romaji": "hozon",
        "english": "Save / Storage",
        "kanji": "保存",
        "exampleSentence": "データをパソコンに保存します。",
        "exampleEnglish": "Save data to the computer."
      },
      {
        "word": "保証",
        "furigana": "ほしょう",
        "romaji": "hoshou",
        "english": "Guarantee / Warranty",
        "kanji": "保証",
        "exampleSentence": "この家電には一年の保証がついています。",
        "exampleEnglish": "This appliance has a 1-year warranty."
      }
    ]
  },
  "ま": {
    "char": "ま",
    "romaji": "ma",
    "script": "Hiragana",
    "strokeCount": 3,
    "mnemonic": "Looks like a Mast on a sailboat.",
    "similarChars": [
      "ほ",
      "は",
      "よ"
    ],
    "words": [
      {
        "word": "街",
        "furigana": "まち",
        "romaji": "machi",
        "english": "Town / City",
        "kanji": "街",
        "exampleSentence": "東京の街を散策します。",
        "exampleEnglish": "Stroll around the town of Tokyo."
      },
      {
        "word": "待つ",
        "furigana": "まつ",
        "romaji": "matsu",
        "english": "To wait",
        "kanji": "待つ",
        "exampleSentence": "駅の前で友達を待ちます。",
        "exampleEnglish": "I wait for my friend in front of the station."
      },
      {
        "word": "窓",
        "furigana": "まど",
        "romaji": "mado",
        "english": "Window",
        "kanji": "窓",
        "exampleSentence": "窓を開けて新鮮な空気を入れます。",
        "exampleEnglish": "Open the window and let in fresh air."
      },
      {
        "word": "毎日",
        "furigana": "まいにち",
        "romaji": "mainichi",
        "english": "Every day",
        "kanji": "毎日",
        "exampleSentence": "毎日日本語を勉強します。",
        "exampleEnglish": "I study Japanese every day."
      },
      {
        "word": "毎朝",
        "furigana": "まいあさ",
        "romaji": "maiasa",
        "english": "Every morning",
        "kanji": "毎朝",
        "exampleSentence": "毎朝七時に起きます。",
        "exampleEnglish": "I wake up at 7 every morning."
      },
      {
        "word": "前",
        "furigana": "まえ",
        "romaji": "mae",
        "english": "Front / Before",
        "kanji": "前",
        "exampleSentence": "駅の前で待ち合わせましょう。",
        "exampleEnglish": "Let us meet in front of the station."
      },
      {
        "word": "真っ直ぐ",
        "furigana": "まっすぐ",
        "romaji": "massugu",
        "english": "Straight ahead",
        "kanji": "真っ直ぐ",
        "exampleSentence": "この道を真っ直ぐ進んでください。",
        "exampleEnglish": "Please go straight ahead along this street."
      },
      {
        "word": "また",
        "furigana": "また",
        "romaji": "mata",
        "english": "Again / See you",
        "kanji": "又",
        "exampleSentence": "また明日会いましょう。",
        "exampleEnglish": "Let us meet again tomorrow."
      },
      {
        "word": "まだ",
        "furigana": "まだ",
        "romaji": "mada",
        "english": "Not yet / Still",
        "kanji": "未だ",
        "exampleSentence": "宿題はまだ終わっていません。",
        "exampleEnglish": "The homework is not finished yet."
      },
      {
        "word": "万",
        "furigana": "まん",
        "romaji": "man",
        "english": "Ten thousand (10,000)",
        "kanji": "万",
        "exampleSentence": "一万円札をくずします。",
        "exampleEnglish": "Break a 10,000 yen bill."
      }
    ]
  },
  "み": {
    "char": "み",
    "romaji": "mi",
    "script": "Hiragana",
    "strokeCount": 2,
    "mnemonic": "Looks like lucky number 21 drawn together.",
    "similarChars": [
      "ゆ"
    ],
    "words": [
      {
        "word": "水",
        "furigana": "みず",
        "romaji": "mizu",
        "english": "Water",
        "kanji": "水",
        "exampleSentence": "冷たい水を一杯飲みます。",
        "exampleEnglish": "I drink a glass of cold water."
      },
      {
        "word": "道",
        "furigana": "みち",
        "romaji": "michi",
        "english": "Road / Street",
        "kanji": "道",
        "exampleSentence": "この道を真っ直ぐ行くと駅です。",
        "exampleEnglish": "If you go straight on this street, it is the station."
      },
      {
        "word": "見る",
        "furigana": "みる",
        "romaji": "miru",
        "english": "To see / watch",
        "kanji": "見る",
        "exampleSentence": "テレビで日本の映画を見ます。",
        "exampleEnglish": "I watch Japanese movies on TV."
      },
      {
        "word": "店",
        "furigana": "みせ",
        "romaji": "mise",
        "english": "Shop / Store",
        "kanji": "店",
        "exampleSentence": "あの店は美味しいパンを売っています。",
        "exampleEnglish": "That store sells delicious bread."
      },
      {
        "word": "右",
        "furigana": "みぎ",
        "romaji": "migi",
        "english": "Right direction",
        "kanji": "右",
        "exampleSentence": "次の角を右に曲がります。",
        "exampleEnglish": "Turn right at the next corner."
      },
      {
        "word": "耳",
        "furigana": "みみ",
        "romaji": "mimi",
        "english": "Ear",
        "kanji": "耳",
        "exampleSentence": "耳をすまして音楽を聴きます。",
        "exampleEnglish": "Listen to music carefully with ears."
      },
      {
        "word": "緑",
        "furigana": "みどり",
        "romaji": "midori",
        "english": "Green color",
        "kanji": "緑",
        "exampleSentence": "公園の木々が綺麗な緑色です。",
        "exampleEnglish": "The park trees are a pretty green."
      },
      {
        "word": "皆",
        "furigana": "みんな",
        "romaji": "minna",
        "english": "Everyone",
        "kanji": "皆",
        "exampleSentence": "皆さん、おはようございます。",
        "exampleEnglish": "Good morning, everyone."
      },
      {
        "word": "南",
        "furigana": "みなみ",
        "romaji": "minami",
        "english": "South",
        "kanji": "南",
        "exampleSentence": "駅の南口で待ち合わせます。",
        "exampleEnglish": "Meet at the south exit of the station."
      },
      {
        "word": "短い",
        "furigana": "みじかい",
        "romaji": "mijikai",
        "english": "Short (length)",
        "kanji": "短い",
        "exampleSentence": "夏休みは短かったです。",
        "exampleEnglish": "Summer vacation was short."
      }
    ]
  },
  "む": {
    "char": "む",
    "romaji": "mu",
    "script": "Hiragana",
    "strokeCount": 3,
    "mnemonic": "Looks like a Cow saying Moo with its horns.",
    "similarChars": [
      "す"
    ],
    "words": [
      {
        "word": "虫",
        "furigana": "むし",
        "romaji": "mushi",
        "english": "Insect / Bug",
        "kanji": "虫",
        "exampleSentence": "庭で可愛い虫を見つけました。",
        "exampleEnglish": "I found a cute insect in the garden."
      },
      {
        "word": "難しい",
        "furigana": "むずかしい",
        "romaji": "muzukashii",
        "english": "Difficult / Hard",
        "kanji": "難しい",
        "exampleSentence": "この漢字は少し難しいです。",
        "exampleEnglish": "This kanji is a little difficult."
      },
      {
        "word": "昔",
        "furigana": "むかし",
        "romaji": "mukashi",
        "english": "Old times / Long ago",
        "kanji": "昔",
        "exampleSentence": "昔の日本の話を聞きます。",
        "exampleEnglish": "Listen to old Japanese stories."
      },
      {
        "word": "息子",
        "furigana": "むすこ",
        "romaji": "musuko",
        "english": "Son",
        "kanji": "息子",
        "exampleSentence": "息子は元気に学校へ行きました。",
        "exampleEnglish": "My son went to school energetically."
      },
      {
        "word": "娘",
        "furigana": "むすめ",
        "romaji": "musume",
        "english": "Daughter",
        "kanji": "娘",
        "exampleSentence": "娘は絵を描くのが好きです。",
        "exampleEnglish": "My daughter likes drawing pictures."
      },
      {
        "word": "向こう",
        "furigana": "むこう",
        "romaji": "mukou",
        "english": "Over there / Opposite",
        "kanji": "向こう",
        "exampleSentence": "川の向こうに山が見えます。",
        "exampleEnglish": "You can see mountains across the river."
      },
      {
        "word": "胸",
        "furigana": "むね",
        "romaji": "mune",
        "english": "Chest",
        "kanji": "胸",
        "exampleSentence": "深呼吸して胸を張ります。",
        "exampleEnglish": "Take a deep breath and puff chest."
      },
      {
        "word": "六日",
        "furigana": "むいか",
        "romaji": "muika",
        "english": "6th day of month",
        "kanji": "六日",
        "exampleSentence": "来月の六日に友達と会います。",
        "exampleEnglish": "I will meet a friend on the 6th next month."
      },
      {
        "word": "無料",
        "furigana": "むりょう",
        "romaji": "muryou",
        "english": "Free of charge",
        "kanji": "無料",
        "exampleSentence": "この博物館は入場無料です。",
        "exampleEnglish": "This museum has free admission."
      },
      {
        "word": "迎える",
        "furigana": "むかえる",
        "romaji": "mukaeru",
        "english": "To welcome / meet",
        "kanji": "迎える",
        "exampleSentence": "空港で友達を迎えます。",
        "exampleEnglish": "Meet my friend at the airport."
      }
    ]
  },
  "め": {
    "char": "め",
    "romaji": "me",
    "script": "Hiragana",
    "strokeCount": 2,
    "mnemonic": "Looks like an Eye (Me) with a curled eyelash.",
    "similarChars": [
      "ぬ",
      "あ"
    ],
    "words": [
      {
        "word": "目",
        "furigana": "め",
        "romaji": "me",
        "english": "Eye",
        "kanji": "目",
        "exampleSentence": "目を閉じて音楽を聴きます。",
        "exampleEnglish": "Close your eyes and listen to music."
      },
      {
        "word": "メガネ",
        "furigana": "めがね",
        "romaji": "megane",
        "english": "Glasses",
        "kanji": "眼鏡",
        "exampleSentence": "本を読むときにメガネをかけます。",
        "exampleEnglish": "I wear glasses when reading books."
      },
      {
        "word": "珍しい",
        "furigana": "めずらしい",
        "romaji": "mezurashii",
        "english": "Rare / Unusual",
        "kanji": "珍しい",
        "exampleSentence": "珍しい鳥を見つけました。",
        "exampleEnglish": "I found a rare bird."
      },
      {
        "word": "召し上がる",
        "furigana": "めしあがる",
        "romaji": "meshiagaru",
        "english": "To eat / drink (polite)",
        "kanji": "召し上がる",
        "exampleSentence": "温かいうちにどうぞお召し上がりください。",
        "exampleEnglish": "Please enjoy while it is hot."
      },
      {
        "word": "迷惑",
        "furigana": "めいわく",
        "romaji": "meiwaku",
        "english": "Trouble / Nuisance",
        "kanji": "迷惑",
        "exampleSentence": "人に迷惑をかけないようにします。",
        "exampleEnglish": "Be sure not to trouble others."
      },
      {
        "word": "名刺",
        "furigana": "めいし",
        "romaji": "meishi",
        "english": "Business card",
        "kanji": "名刺",
        "exampleSentence": "挨拶の時に名刺を渡します。",
        "exampleEnglish": "Hand over business cards when greeting."
      },
      {
        "word": "明確",
        "furigana": "めいかく",
        "romaji": "meikaku",
        "english": "Clear / Definite",
        "kanji": "明確",
        "exampleSentence": "目標を明確に決めます。",
        "exampleEnglish": "Set goals clearly."
      },
      {
        "word": "命",
        "furigana": "いのち / めい",
        "romaji": "inochi",
        "english": "Life",
        "kanji": "命",
        "exampleSentence": "命を大切にしましょう。",
        "exampleEnglish": "Let us cherish life."
      },
      {
        "word": "目指す",
        "furigana": "めざす",
        "romaji": "mezasu",
        "english": "To aim for",
        "kanji": "目指す",
        "exampleSentence": "JLPT合格を目指して勉強します。",
        "exampleEnglish": "Study aiming to pass JLPT."
      },
      {
        "word": "恵み",
        "furigana": "めぐみ",
        "romaji": "megumi",
        "english": "Blessing",
        "kanji": "恵み",
        "exampleSentence": "大自然の恵みに感謝します。",
        "exampleEnglish": "Grateful for blessings of nature."
      }
    ]
  },
  "も": {
    "char": "も",
    "romaji": "mo",
    "script": "Hiragana",
    "strokeCount": 3,
    "mnemonic": "Looks like a fish hook catching More fish.",
    "similarChars": [
      "ま"
    ],
    "words": [
      {
        "word": "森",
        "furigana": "もり",
        "romaji": "mori",
        "english": "Forest",
        "kanji": "森",
        "exampleSentence": "静かな森を散歩します。",
        "exampleEnglish": "Take a walk in the quiet forest."
      },
      {
        "word": "物",
        "furigana": "もの",
        "romaji": "mono",
        "english": "Thing / Object",
        "kanji": "物",
        "exampleSentence": "机の上に色々な物があります。",
        "exampleEnglish": "There are various things on the desk."
      },
      {
        "word": "門",
        "furigana": "もん",
        "romaji": "mon",
        "english": "Gate",
        "kanji": "門",
        "exampleSentence": "学校の正門で待ち合わせます。",
        "exampleEnglish": "Meet at the main gate of the school."
      },
      {
        "word": "問題",
        "furigana": "もんだい",
        "romaji": "mondai",
        "english": "Problem / Question",
        "kanji": "問題",
        "exampleSentence": "テストの問題を解きます。",
        "exampleEnglish": "Solve questions on the test."
      },
      {
        "word": "もう一度",
        "furigana": "もういちど",
        "romaji": "mou ichido",
        "english": "Once more",
        "kanji": "もう一度",
        "exampleSentence": "すみません、もう一度言ってください。",
        "exampleEnglish": "Excuse me, please say it once more."
      },
      {
        "word": "木曜日",
        "furigana": "もくようび",
        "romaji": "mokuyoubi",
        "english": "Thursday",
        "kanji": "木曜日",
        "exampleSentence": "木曜日に日本語の授業があります。",
        "exampleEnglish": "There is Japanese class on Thursday."
      },
      {
        "word": "持つ",
        "furigana": "もつ",
        "romaji": "motsu",
        "english": "To hold / carry",
        "kanji": "持つ",
        "exampleSentence": "重い荷物を手で持ちます。",
        "exampleEnglish": "Carry heavy luggage by hand."
      },
      {
        "word": "もちろん",
        "furigana": "もちろん",
        "romaji": "mochiron",
        "english": "Of course",
        "kanji": "勿論",
        "exampleSentence": "はい、もちろん手伝いますよ。",
        "exampleEnglish": "Yes, of course I will help."
      },
      {
        "word": "戻る",
        "furigana": "もどる",
        "romaji": "modoru",
        "english": "To return / go back",
        "kanji": "戻る",
        "exampleSentence": "五分後に席へ戻ります。",
        "exampleEnglish": "I will return to my seat in 5 minutes."
      },
      {
        "word": "燃える",
        "furigana": "もえる",
        "romaji": "moeru",
        "english": "To burn",
        "kanji": "燃える",
        "exampleSentence": "キャンプファイヤーが赤く燃えています。",
        "exampleEnglish": "The campfire is burning red."
      }
    ]
  },
  "や": {
    "char": "や",
    "romaji": "ya",
    "script": "Hiragana",
    "strokeCount": 3,
    "mnemonic": "Looks like a Yak with horns.",
    "similarChars": [
      "か",
      "せ"
    ],
    "words": [
      {
        "word": "山",
        "furigana": "やま",
        "romaji": "yama",
        "english": "Mountain",
        "kanji": "山",
        "exampleSentence": "富士山は日本で一番高い山です。",
        "exampleEnglish": "Mt. Fuji is the highest mountain in Japan."
      },
      {
        "word": "野菜",
        "furigana": "やさい",
        "romaji": "yasai",
        "english": "Vegetable",
        "kanji": "野菜",
        "exampleSentence": "野菜をたくさん食べましょう。",
        "exampleEnglish": "Let us eat a lot of vegetables."
      },
      {
        "word": "休み",
        "furigana": "やすみ",
        "romaji": "yasumi",
        "english": "Holiday / Rest",
        "kanji": "休み",
        "exampleSentence": "明日は学校の休みです。",
        "exampleEnglish": "Tomorrow is school holiday."
      },
      {
        "word": "優しい",
        "furigana": "やさしい",
        "romaji": "yasashii",
        "english": "Kind / Gentle",
        "kanji": "優しい",
        "exampleSentence": "先生はとても優しいです。",
        "exampleEnglish": "The teacher is very kind."
      },
      {
        "word": "安い",
        "furigana": "やすい",
        "romaji": "yasui",
        "english": "Cheap / Inexpensive",
        "kanji": "安い",
        "exampleSentence": "この店は安くて美味しい。",
        "exampleEnglish": "This shop is cheap and delicious."
      },
      {
        "word": "約束",
        "furigana": "やくそく",
        "romaji": "yakusoku",
        "english": "Promise / Appointment",
        "kanji": "約束",
        "exampleSentence": "友達と約束をしました。",
        "exampleEnglish": "I made a promise with my friend."
      },
      {
        "word": "薬",
        "furigana": "くすり",
        "romaji": "kusuri",
        "english": "Medicine",
        "kanji": "薬",
        "exampleSentence": "食後に薬を飲みます。",
        "exampleEnglish": "Take medicine after meals."
      },
      {
        "word": "焼く",
        "furigana": "やく",
        "romaji": "yaku",
        "english": "To bake / grill",
        "kanji": "焼く",
        "exampleSentence": "魚を焼いて食べます。",
        "exampleEnglish": "Grill and eat fish."
      },
      {
        "word": "やっぱり",
        "furigana": "やっぱり",
        "romaji": "yappari",
        "english": "As expected / After all",
        "kanji": "矢張り",
        "exampleSentence": "やっぱり日本料理が好きです。",
        "exampleEnglish": "After all, I love Japanese cuisine."
      },
      {
        "word": "辞める",
        "furigana": "やめる",
        "romaji": "yameru",
        "english": "To quit / stop",
        "kanji": "辞める",
        "exampleSentence": "タバコを辞めました。",
        "exampleEnglish": "I quit smoking."
      }
    ]
  },
  "ゆ": {
    "char": "ゆ",
    "romaji": "yu",
    "script": "Hiragana",
    "strokeCount": 2,
    "mnemonic": "Looks like a big unique Fish swimming.",
    "similarChars": [
      "ぬ",
      "み"
    ],
    "words": [
      {
        "word": "雪",
        "furigana": "ゆき",
        "romaji": "yuki",
        "english": "Snow",
        "kanji": "雪",
        "exampleSentence": "冬に白い雪が降ります。",
        "exampleEnglish": "White snow falls in winter."
      },
      {
        "word": "夢",
        "furigana": "ゆめ",
        "romaji": "yume",
        "english": "Dream",
        "kanji": "夢",
        "exampleSentence": "私の夢は日本へ行くことです。",
        "exampleEnglish": "My dream is to go to Japan."
      },
      {
        "word": "お湯",
        "furigana": "おゆ",
        "romaji": "oyu",
        "english": "Hot water",
        "kanji": "お湯",
        "exampleSentence": "お湯を沸かします。",
        "exampleEnglish": "I boil hot water."
      },
      {
        "word": "有名",
        "furigana": "ゆうめい",
        "romaji": "yuumei",
        "english": "Famous",
        "kanji": "有名",
        "exampleSentence": "京都は有名な観光地です。",
        "exampleEnglish": "Kyoto is a famous sightseeing spot."
      },
      {
        "word": "指",
        "furigana": "ゆび",
        "romaji": "yubi",
        "english": "Finger",
        "kanji": "指",
        "exampleSentence": "指を怪我しました。",
        "exampleEnglish": "I injured my finger."
      },
      {
        "word": "指輪",
        "furigana": "ゆびわ",
        "romaji": "yubiwa",
        "english": "Ring (jewelry)",
        "kanji": "指輪",
        "exampleSentence": "綺麗な指輪をつけます。",
        "exampleEnglish": "Wear a beautiful ring."
      },
      {
        "word": "夕方",
        "furigana": "ゆうがた",
        "romaji": "yuugata",
        "english": "Evening",
        "kanji": "夕方",
        "exampleSentence": "夕方に散歩をします。",
        "exampleEnglish": "Take a walk in the evening."
      },
      {
        "word": "夕飯",
        "furigana": "ゆうはん",
        "romaji": "yuuhan",
        "english": "Dinner",
        "kanji": "夕飯",
        "exampleSentence": "夕飯はカレーライスです。",
        "exampleEnglish": "Dinner is curry rice."
      },
      {
        "word": "郵便局",
        "furigana": "ゆうびんきょく",
        "romaji": "yuubinkyoku",
        "english": "Post Office",
        "kanji": "郵便局",
        "exampleSentence": "郵便局で手紙を出します。",
        "exampleEnglish": "Mail a letter at the post office."
      },
      {
        "word": "ゆっくり",
        "furigana": "ゆっくり",
        "romaji": "yukkuri",
        "english": "Slowly / Leisurely",
        "kanji": "ゆっくり",
        "exampleSentence": "ゆっくり話してください。",
        "exampleEnglish": "Please speak slowly."
      }
    ]
  },
  "よ": {
    "char": "よ",
    "romaji": "yo",
    "script": "Hiragana",
    "strokeCount": 2,
    "mnemonic": "Looks like a Yo-Yo hanging from a string with a loop.",
    "similarChars": [
      "ま",
      "は",
      "ほ",
      "ね"
    ],
    "words": [
      {
        "word": "夜",
        "furigana": "よる",
        "romaji": "yoru",
        "english": "Night / Evening",
        "kanji": "夜",
        "exampleSentence": "夜、星が綺麗に見えます。",
        "exampleEnglish": "At night, stars can be seen beautifully."
      },
      {
        "word": "良い",
        "furigana": "よい",
        "romaji": "yoi",
        "english": "Good / Nice",
        "kanji": "良い",
        "exampleSentence": "今日はとても良い天気ですね。",
        "exampleEnglish": "It is very nice weather today, isn’t it?"
      },
      {
        "word": "読む",
        "furigana": "よむ",
        "romaji": "yomu",
        "english": "To read",
        "kanji": "読む",
        "exampleSentence": "図書館で本を読みます。",
        "exampleEnglish": "I read books in the library."
      },
      {
        "word": "予約",
        "furigana": "よやく",
        "romaji": "yoyaku",
        "english": "Reservation / Booking",
        "kanji": "予約",
        "exampleSentence": "レストランを予約しました。",
        "exampleEnglish": "I made a reservation at the restaurant."
      },
      {
        "word": "呼ぶ",
        "furigana": "よぶ",
        "romaji": "yobu",
        "english": "To call / summon",
        "kanji": "呼ぶ",
        "exampleSentence": "タクシーを呼びましょう。",
        "exampleEnglish": "Let us call a taxi."
      },
      {
        "word": "洋服",
        "furigana": "ようふく",
        "romaji": "youfuku",
        "english": "Western clothes",
        "kanji": "洋服",
        "exampleSentence": "新しい洋服を買いました。",
        "exampleEnglish": "I bought new clothes."
      },
      {
        "word": "四",
        "furigana": "よん",
        "romaji": "yon",
        "english": "Four (4)",
        "kanji": "四",
        "exampleSentence": "四時にお会いしましょう。",
        "exampleEnglish": "Let us meet at four o’clock."
      },
      {
        "word": "横",
        "furigana": "よこ",
        "romaji": "yoko",
        "english": "Side / Beside",
        "kanji": "横",
        "exampleSentence": "駅の横にパン屋があります。",
        "exampleEnglish": "There is a bakery next to the station."
      },
      {
        "word": "曜日",
        "furigana": "ようび",
        "romaji": "youbi",
        "english": "Day of the week",
        "kanji": "曜日",
        "exampleSentence": "今日は何曜日ですか。",
        "exampleEnglish": "What day of the week is it today?"
      },
      {
        "word": "よろしく",
        "furigana": "よろしく",
        "romaji": "yoroshiku",
        "english": "Best regards / Nice to meet you",
        "kanji": "宜しく",
        "exampleSentence": "どうぞよろしくお願いします。",
        "exampleEnglish": "Pleased to make your acquaintance."
      }
    ]
  },
  "ら": {
    "char": "ら",
    "romaji": "ra",
    "script": "Hiragana",
    "strokeCount": 2,
    "mnemonic": "Looks like a baby Rabbit sitting up.",
    "similarChars": [
      "ち",
      "う"
    ],
    "words": [
      {
        "word": "らいおん",
        "furigana": "らいおん",
        "romaji": "raion",
        "english": "Lion",
        "kanji": "獅子",
        "exampleSentence": "動物園でライオンを見ました。",
        "exampleEnglish": "I saw a lion at the zoo."
      },
      {
        "word": "来週",
        "furigana": "らいしゅう",
        "romaji": "raishuu",
        "english": "Next week",
        "kanji": "来週",
        "exampleSentence": "来週からテストが始まります。",
        "exampleEnglish": "Tests begin next week."
      },
      {
        "word": "来月",
        "furigana": "らいげつ",
        "romaji": "raigetsu",
        "english": "Next month",
        "kanji": "来月",
        "exampleSentence": "来月京都へ旅行します。",
        "exampleEnglish": "I travel to Kyoto next month."
      },
      {
        "word": "来年",
        "furigana": "らいねん",
        "romaji": "rainen",
        "english": "Next year",
        "kanji": "来年",
        "exampleSentence": "来年は大学に入学します。",
        "exampleEnglish": "I will enter university next year."
      },
      {
        "word": "ラジオ",
        "furigana": "らじお",
        "romaji": "rajio",
        "english": "Radio",
        "kanji": "ラジオ",
        "exampleSentence": "朝、ラジオ体操をします。",
        "exampleEnglish": "Do radio calisthenics in the morning."
      },
      {
        "word": "楽",
        "furigana": "らく",
        "romaji": "raku",
        "english": "Comfortable / Easy",
        "kanji": "楽",
        "exampleSentence": "新幹線はとても楽です。",
        "exampleEnglish": "The bullet train is very comfortable."
      },
      {
        "word": "ラーメン",
        "furigana": "らーめん",
        "romaji": "raamen",
        "english": "Ramen noodles",
        "kanji": "ラーメン",
        "exampleSentence": "温かい醤油ラーメンを食べます。",
        "exampleEnglish": "Eat hot soy sauce ramen."
      },
      {
        "word": "ランチ",
        "furigana": "らんち",
        "romaji": "ranchi",
        "english": "Lunch",
        "kanji": "ランチ",
        "exampleSentence": "友達とカフェでランチをします。",
        "exampleEnglish": "Have lunch with friends at a cafe."
      },
      {
        "word": "落第",
        "furigana": "らくだい",
        "romaji": "rakudai",
        "english": "Failing exam",
        "kanji": "落第",
        "exampleSentence": "落第しないようにしっかり勉強します。",
        "exampleEnglish": "Study well so as not to fail exams."
      },
      {
        "word": "乱暴",
        "furigana": "らんぼう",
        "romaji": "ranbou",
        "english": "Rude / Rough",
        "kanji": "乱暴",
        "exampleSentence": "乱暴な言葉を使ってはいけません。",
        "exampleEnglish": "You must not use rough words."
      }
    ]
  },
  "り": {
    "char": "り",
    "romaji": "ri",
    "script": "Hiragana",
    "strokeCount": 2,
    "mnemonic": "Looks like two Reeds swaying in the river.",
    "similarChars": [
      "い"
    ],
    "words": [
      {
        "word": "りんご",
        "furigana": "りんご",
        "romaji": "ringo",
        "english": "Apple",
        "kanji": "林檎",
        "exampleSentence": "赤いりんごを美味しく食べます。",
        "exampleEnglish": "Eat delicious red apples."
      },
      {
        "word": "旅行",
        "furigana": "りょこう",
        "romaji": "ryokou",
        "english": "Travel / Trip",
        "kanji": "旅行",
        "exampleSentence": "夏休みに北海道へ旅行します。",
        "exampleEnglish": "Travel to Hokkaido during summer vacation."
      },
      {
        "word": "料理",
        "furigana": "りょうり",
        "romaji": "ryouri",
        "english": "Cooking / Cuisine",
        "kanji": "料理",
        "exampleSentence": "日本料理を作るのが好きです。",
        "exampleEnglish": "I like making Japanese cuisine."
      },
      {
        "word": "留学生",
        "furigana": "りゅうがくせい",
        "romaji": "ryuugakusei",
        "english": "International student",
        "kanji": "留学生",
        "exampleSentence": "大学で多くの留学生と友達になりました。",
        "exampleEnglish": "Became friends with many international students."
      },
      {
        "word": "理由",
        "furigana": "りゆう",
        "romaji": "riyuu",
        "english": "Reason",
        "kanji": "理由",
        "exampleSentence": "遅れた理由を説明します。",
        "exampleEnglish": "Explain the reason for being late."
      },
      {
        "word": "両親",
        "furigana": "りょうしん",
        "romaji": "ryoushin",
        "english": "Parents",
        "kanji": "両親",
        "exampleSentence": "両親に感謝の手紙を書きます。",
        "exampleEnglish": "Write a thank-you letter to parents."
      },
      {
        "word": "立派",
        "furigana": "りっぱ",
        "romaji": "rippa",
        "english": "Splendid / Fine",
        "kanji": "立派",
        "exampleSentence": "立派な建物を見学しました。",
        "exampleEnglish": "Toured a splendid building."
      },
      {
        "word": "旅館",
        "furigana": "りょかん",
        "romaji": "ryokan",
        "english": "Traditional Japanese inn",
        "kanji": "旅館",
        "exampleSentence": "温泉旅館で畳の部屋に泊まります。",
        "exampleEnglish": "Stay in a tatami room at a hot spring inn."
      },
      {
        "word": "利用",
        "furigana": "りよう",
        "romaji": "riyou",
        "english": "Use / Utilization",
        "kanji": "利用",
        "exampleSentence": "図書館を毎日利用しています。",
        "exampleEnglish": "Use the library every day."
      },
      {
        "word": "理解",
        "furigana": "りかい",
        "romaji": "rikai",
        "english": "Understanding",
        "kanji": "理解",
        "exampleSentence": "文法の意味を深く理解します。",
        "exampleEnglish": "Deeply understand the grammar meaning."
      }
    ]
  },
  "る": {
    "char": "る",
    "romaji": "ru",
    "script": "Hiragana",
    "strokeCount": 1,
    "mnemonic": "Looks like a Route with a loop at the end.",
    "similarChars": [
      "ろ"
    ],
    "words": [
      {
        "word": "留守",
        "furigana": "るす",
        "romaji": "rusu",
        "english": "Away from home",
        "kanji": "留守",
        "exampleSentence": "昼間は家族全員留守です。",
        "exampleEnglish": "The whole family is away during the day."
      },
      {
        "word": "ルール",
        "furigana": "るーる",
        "romaji": "ruuru",
        "english": "Rule",
        "kanji": "ルール",
        "exampleSentence": "交通ルールを守って道を渡ります。",
        "exampleEnglish": "Cross street obeying traffic rules."
      },
      {
        "word": "留守番電話",
        "furigana": "るすばんでんわ",
        "romaji": "rusuban denwa",
        "english": "Answering machine",
        "kanji": "留守番電話",
        "exampleSentence": "留守番電話にメッセージを残します。",
        "exampleEnglish": "Leave a message on the answering machine."
      },
      {
        "word": "類似",
        "furigana": "るいじ",
        "romaji": "ruiji",
        "english": "Similarity",
        "kanji": "類似",
        "exampleSentence": "類似の言葉を比較して学びます。",
        "exampleEnglish": "Learn by comparing similar words."
      },
      {
        "word": "累計",
        "furigana": "るいけい",
        "romaji": "ruikei",
        "english": "Cumulative total",
        "kanji": "累計",
        "exampleSentence": "学習時間の累計が百時間に達しました。",
        "exampleEnglish": "Cumulative study time reached 100 hours."
      },
      {
        "word": "ルビー",
        "furigana": "るびー",
        "romaji": "rubii",
        "english": "Ruby gemstone",
        "kanji": "紅玉",
        "exampleSentence": "赤いルビーの指輪が輝いています。",
        "exampleEnglish": "The red ruby ring is sparkling."
      },
      {
        "word": "ルート",
        "furigana": "るーと",
        "romaji": "ruuto",
        "english": "Route / Path",
        "kanji": "ルート",
        "exampleSentence": "観光の最適なルートを調べます。",
        "exampleEnglish": "Look up the optimal sightseeing route."
      },
      {
        "word": "ルーペ",
        "furigana": "るーぺ",
        "romaji": "ruupe",
        "english": "Magnifying glass",
        "kanji": "拡大鏡",
        "exampleSentence": "ルーペで小さな文字を読みます。",
        "exampleEnglish": "Read small letters with a magnifying glass."
      },
      {
        "word": "流布",
        "furigana": "るふ",
        "romaji": "rufu",
        "english": "Circulation / Spread",
        "kanji": "流布",
        "exampleSentence": "情報が世間に流布します。",
        "exampleEnglish": "Information circulates to the public."
      },
      {
        "word": "るす番",
        "furigana": "るそばん",
        "romaji": "rusoban",
        "english": "House sitting",
        "kanji": "留守番",
        "exampleSentence": "子供一人で留守番をします。",
        "exampleEnglish": "The child stays home alone."
      }
    ]
  },
  "れ": {
    "char": "れ",
    "romaji": "re",
    "script": "Hiragana",
    "strokeCount": 2,
    "mnemonic": "Looks like someone Resting their back against a tree.",
    "similarChars": [
      "ね",
      "わ"
    ],
    "words": [
      {
        "word": "冷蔵庫",
        "furigana": "れいぞうこ",
        "romaji": "reizouko",
        "english": "Refrigerator",
        "kanji": "冷蔵庫",
        "exampleSentence": "冷蔵庫に牛乳を入れます。",
        "exampleEnglish": "Put milk in the refrigerator."
      },
      {
        "word": "練習",
        "furigana": "れんしゅう",
        "romaji": "renshuu",
        "english": "Practice",
        "kanji": "練習",
        "exampleSentence": "毎日会話の練習をします。",
        "exampleEnglish": "Practice conversation every day."
      },
      {
        "word": "レストラン",
        "furigana": "れすとらん",
        "romaji": "resutoran",
        "english": "Restaurant",
        "kanji": "レストラン",
        "exampleSentence": "家族と美味しいレストランで夕食をとります。",
        "exampleEnglish": "Have dinner with family at a good restaurant."
      },
      {
        "word": "歴史",
        "furigana": "れきし",
        "romaji": "rekishi",
        "english": "History",
        "kanji": "歴史",
        "exampleSentence": "日本の歴史を学ぶのが面白いです。",
        "exampleEnglish": "Learning Japanese history is interesting."
      },
      {
        "word": "連絡",
        "furigana": "れんらく",
        "romaji": "renraku",
        "english": "Contact / In touch",
        "kanji": "連絡",
        "exampleSentence": "後で電話で連絡します。",
        "exampleEnglish": "I will contact you by phone later."
      },
      {
        "word": "レモン",
        "furigana": "れもん",
        "romaji": "remon",
        "english": "Lemon",
        "kanji": "檸檬",
        "exampleSentence": "紅茶にレモンを浮かべます。",
        "exampleEnglish": "Float lemon slice in black tea."
      },
      {
        "word": "礼",
        "furigana": "れい",
        "romaji": "rei",
        "english": "Bow / Courtesy / Thanks",
        "kanji": "礼",
        "exampleSentence": "丁寧に頭を下げてお礼を言います。",
        "exampleEnglish": "Bow politely and say thanks."
      },
      {
        "word": "列車",
        "furigana": "れっしゃ",
        "romaji": "ressha",
        "english": "Train",
        "kanji": "列車",
        "exampleSentence": "特急列車に乗って旅行します。",
        "exampleEnglish": "Ride the limited express train on a trip."
      },
      {
        "word": "レシート",
        "furigana": "れしーと",
        "romaji": "reshiito",
        "english": "Receipt",
        "kanji": "領収書",
        "exampleSentence": "買い物でレシートを受け取ります。",
        "exampleEnglish": "Receive a receipt when shopping."
      },
      {
        "word": "連休",
        "furigana": "れんきゅう",
        "romaji": "renkyuu",
        "english": "Consecutive holidays",
        "kanji": "連休",
        "exampleSentence": "五月の連休に帰省します。",
        "exampleEnglish": "Go home during the consecutive holidays in May."
      }
    ]
  },
  "ろ": {
    "char": "ろ",
    "romaji": "ro",
    "script": "Hiragana",
    "strokeCount": 1,
    "mnemonic": "Looks like a open Road without a loop.",
    "similarChars": [
      "る",
      "そ"
    ],
    "words": [
      {
        "word": "ろうそく",
        "furigana": "ろうそく",
        "romaji": "rousoku",
        "english": "Candle",
        "kanji": "蝋燭",
        "exampleSentence": "ケーキにろうそくを立てます。",
        "exampleEnglish": "Set candles on the cake."
      },
      {
        "word": "六",
        "furigana": "ろく",
        "romaji": "roku",
        "english": "Six (6)",
        "kanji": "六",
        "exampleSentence": "六時に起きて朝ご飯を食べます。",
        "exampleEnglish": "Wake up at 6 and eat breakfast."
      },
      {
        "word": "廊下",
        "furigana": "ろうか",
        "romaji": "rouka",
        "english": "Corridor / Hallway",
        "kanji": "廊下",
        "exampleSentence": "学校の廊下を静かに歩きます。",
        "exampleEnglish": "Walk quietly in the school hallway."
      },
      {
        "word": "ロボット",
        "furigana": "ろぼっと",
        "romaji": "robotto",
        "english": "Robot",
        "kanji": "ロボット",
        "exampleSentence": "未来のロボットが働きます。",
        "exampleEnglish": "Future robots will work."
      },
      {
        "word": "ロッカー",
        "furigana": "ろっかー",
        "romaji": "rokkaa",
        "english": "Locker",
        "kanji": "コインロッカー",
        "exampleSentence": "駅のロッカーに荷物を預けます。",
        "exampleEnglish": "Store luggage in the station locker."
      },
      {
        "word": "論理",
        "furigana": "ろんり",
        "romaji": "ronri",
        "english": "Logic",
        "kanji": "論理",
        "exampleSentence": "論理的に物事を考えます。",
        "exampleEnglish": "Think about things logically."
      },
      {
        "word": "論文",
        "furigana": "ろんぶん",
        "romaji": "ronbun",
        "english": "Thesis / Paper",
        "kanji": "論文",
        "exampleSentence": "大学で研究論文を書きます。",
        "exampleEnglish": "Write a research paper at university."
      },
      {
        "word": "老人",
        "furigana": "ろうじん",
        "romaji": "roujin",
        "english": "Elderly person",
        "kanji": "老人",
        "exampleSentence": "お年寄りに席を譲ります。",
        "exampleEnglish": "Yield seat to elderly people."
      },
      {
        "word": "ロビー",
        "furigana": "ろびー",
        "romaji": "robii",
        "english": "Lobby",
        "kanji": "ロビー",
        "exampleSentence": "ホテルのロビーで待ち合わせます。",
        "exampleEnglish": "Meet in the hotel lobby."
      },
      {
        "word": "録音",
        "furigana": "ろくおん",
        "romaji": "rokuon",
        "english": "Audio recording",
        "kanji": "録音",
        "exampleSentence": "発音をスマホに録音して確認します。",
        "exampleEnglish": "Record pronunciation on phone to check."
      }
    ]
  },
  "わ": {
    "char": "わ",
    "romaji": "wa",
    "script": "Hiragana",
    "strokeCount": 2,
    "mnemonic": "Looks like a White swan swimming on Water.",
    "similarChars": [
      "ね",
      "れ"
    ],
    "words": [
      {
        "word": "私",
        "furigana": "わたし",
        "romaji": "watashi",
        "english": "I / Me",
        "kanji": "私",
        "exampleSentence": "私は学生です。",
        "exampleEnglish": "I am a student."
      },
      {
        "word": "分かる",
        "furigana": "わかる",
        "romaji": "wakaru",
        "english": "To understand",
        "kanji": "分かる",
        "exampleSentence": "先生の説明がよく分かりました。",
        "exampleEnglish": "I understood the teacher's explanation well."
      },
      {
        "word": "忘れる",
        "furigana": "わすれる",
        "romaji": "wasureru",
        "english": "To forget",
        "kanji": "忘れる",
        "exampleSentence": "宿題を忘れないでください。",
        "exampleEnglish": "Please do not forget your homework."
      },
      {
        "word": "若い",
        "furigana": "わかい",
        "romaji": "wakai",
        "english": "Young",
        "kanji": "若い",
        "exampleSentence": "祖父は気持ちがとても若いです。",
        "exampleEnglish": "My grandfather is very young at heart."
      },
      {
        "word": "笑う",
        "furigana": "わらう",
        "romaji": "warau",
        "english": "To laugh / smile",
        "kanji": "笑う",
        "exampleSentence": "友達と一緒に楽しく笑います。",
        "exampleEnglish": "Laugh merrily together with friends."
      },
      {
        "word": "悪い",
        "furigana": "わるい",
        "romaji": "warui",
        "english": "Bad",
        "kanji": "悪い",
        "exampleSentence": "今日は体調が少し悪いです。",
        "exampleEnglish": "My health condition is a little bad today."
      },
      {
        "word": "渡す",
        "furigana": "わたす",
        "romaji": "watasu",
        "english": "To hand over",
        "kanji": "渡す",
        "exampleSentence": "先生に宿題のノートを渡します。",
        "exampleEnglish": "Hand over homework notebook to teacher."
      },
      {
        "word": "渡る",
        "furigana": "わたる",
        "romaji": "wataru",
        "english": "To cross (street/bridge)",
        "kanji": "渡る",
        "exampleSentence": "青信号で横断歩道を渡ります。",
        "exampleEnglish": "Cross pedestrian crossing on green light."
      },
      {
        "word": "ワイン",
        "furigana": "わいん",
        "romaji": "wain",
        "english": "Wine",
        "kanji": "葡萄酒",
        "exampleSentence": "夕食に赤ワインを少し飲みます。",
        "exampleEnglish": "Drink a little red wine with dinner."
      },
      {
        "word": "和食",
        "furigana": "わしょく",
        "romaji": "washoku",
        "english": "Japanese cuisine",
        "kanji": "和食",
        "exampleSentence": "健康的な和食が大好きです。",
        "exampleEnglish": "I love healthy Japanese cuisine."
      }
    ]
  },
  "を": {
    "char": "を",
    "romaji": "wo (o)",
    "script": "Hiragana",
    "strokeCount": 3,
    "mnemonic": "Object marker pronounced \"O\" - cheerleader holding a hoop.",
    "similarChars": [
      "と"
    ],
    "words": [
      {
        "word": "本を読む",
        "furigana": "ほんをよむ",
        "romaji": "hon o yomu",
        "english": "Read a book",
        "kanji": "本を読む",
        "exampleSentence": "夜、図書館で本を読みます。",
        "exampleEnglish": "I read books in the library at night."
      },
      {
        "word": "水を飲む",
        "furigana": "みずをのむ",
        "romaji": "mizu o nomu",
        "english": "Drink water",
        "kanji": "水を飲む",
        "exampleSentence": "朝起きてすぐに水を飲みます。",
        "exampleEnglish": "I drink water right after waking up in the morning."
      },
      {
        "word": "ご飯を食べる",
        "furigana": "ごはんをたべる",
        "romaji": "gohan o taberu",
        "english": "Eat a meal",
        "kanji": "ご飯を食べる",
        "exampleSentence": "家族と一緒にご飯を食べます。",
        "exampleEnglish": "Eat meals together with family."
      },
      {
        "word": "歌を歌う",
        "furigana": "うたをうたう",
        "romaji": "uta o utau",
        "english": "Sing a song",
        "kanji": "歌を歌う",
        "exampleSentence": "カラオケで日本の歌を歌います。",
        "exampleEnglish": "Sing Japanese songs at karaoke."
      },
      {
        "word": "写真を撮る",
        "furigana": "しゃしんをとる",
        "romaji": "shashin o toru",
        "english": "Take a photo",
        "kanji": "写真を撮る",
        "exampleSentence": "桜の前で綺麗な写真を撮ります。",
        "exampleEnglish": "Take a pretty photo in front of sakura."
      },
      {
        "word": "映画を見る",
        "furigana": "えいがをみる",
        "romaji": "eiga o miru",
        "english": "Watch a movie",
        "kanji": "映画を見る",
        "exampleSentence": "週末に映画館で映画を見ます。",
        "exampleEnglish": "Watch a movie at the cinema on weekends."
      },
      {
        "word": "手を洗う",
        "furigana": "てをあらう",
        "romaji": "te o arau",
        "english": "Wash hands",
        "kanji": "手を洗う",
        "exampleSentence": "ご飯を食べる前に石鹸で手を洗います。",
        "exampleEnglish": "Wash hands with soap before eating."
      },
      {
        "word": "音楽を聴く",
        "furigana": "おんがくをきく",
        "romaji": "ongaku o kiku",
        "english": "Listen to music",
        "kanji": "音楽を聴く",
        "exampleSentence": "電車の中で好きな音楽を聴きます。",
        "exampleEnglish": "Listen to favorite music in the train."
      },
      {
        "word": "日本語を話す",
        "furigana": "にほんごをはなす",
        "romaji": "nihongo o hanasu",
        "english": "Speak Japanese",
        "kanji": "日本語を話す",
        "exampleSentence": "毎日少しずつ日本語を話します。",
        "exampleEnglish": "Speak Japanese little by little every day."
      },
      {
        "word": "ドアを開ける",
        "furigana": "どあをあける",
        "romaji": "doa o akeru",
        "english": "Open the door",
        "kanji": "ドアを開ける",
        "exampleSentence": "部屋のドアを開けて換気します。",
        "exampleEnglish": "Open the room door to ventilate."
      }
    ]
  },
  "ん": {
    "char": "ん",
    "romaji": "n",
    "script": "Hiragana",
    "strokeCount": 1,
    "mnemonic": "Looks like a lowercase cursive letter \"n\".",
    "similarChars": [
      "そ",
      "え"
    ],
    "words": [
      {
        "word": "本",
        "furigana": "ほん",
        "romaji": "hon",
        "english": "Book",
        "kanji": "本",
        "exampleSentence": "日本語の教科書を読みます。",
        "exampleEnglish": "I read the Japanese textbook."
      },
      {
        "word": "日本",
        "furigana": "にほん",
        "romaji": "nihon",
        "english": "Japan",
        "kanji": "日本",
        "exampleSentence": "日本へ旅行に行きたいです。",
        "exampleEnglish": "I want to go on a trip to Japan."
      },
      {
        "word": "新幹線",
        "furigana": "しんかんせん",
        "romaji": "shinkansen",
        "english": "Bullet Train",
        "kanji": "新幹線",
        "exampleSentence": "新幹線に乗って京都へ行きます。",
        "exampleEnglish": "I go to Kyoto on the Shinkansen."
      },
      {
        "word": "新聞",
        "furigana": "しんぶん",
        "romaji": "shinbun",
        "english": "Newspaper",
        "kanji": "新聞",
        "exampleSentence": "父は毎朝新聞を読みます。",
        "exampleEnglish": "My father reads the newspaper every morning."
      },
      {
        "word": "みかん",
        "furigana": "みかん",
        "romaji": "mikan",
        "english": "Mandarin orange",
        "kanji": "蜜柑",
        "exampleSentence": "甘くて美味しいみかんを食べます。",
        "exampleEnglish": "Eat sweet and delicious mandarins."
      },
      {
        "word": "晩ご飯",
        "furigana": "ばんごはん",
        "romaji": "bangohan",
        "english": "Dinner",
        "kanji": "晩ご飯",
        "exampleSentence": "今夜の晩ご飯はカレーです。",
        "exampleEnglish": "Tonight's dinner is curry."
      },
      {
        "word": "鉛筆",
        "furigana": "えんぴつ",
        "romaji": "enpitsu",
        "english": "Pencil",
        "kanji": "鉛筆",
        "exampleSentence": "鉛筆でノートに綺麗に書きます。",
        "exampleEnglish": "Write neatly in the notebook with a pencil."
      },
      {
        "word": "先生",
        "furigana": "せんせい",
        "romaji": "sensei",
        "english": "Teacher",
        "kanji": "先生",
        "exampleSentence": "優しい先生に質問をします。",
        "exampleEnglish": "Ask questions to the kind teacher."
      },
      {
        "word": "店員",
        "furigana": "てんいん",
        "romaji": "ten'in",
        "english": "Store clerk",
        "kanji": "店員",
        "exampleSentence": "親切な店員さんが案内してくれました。",
        "exampleEnglish": "The kind clerk guided me."
      },
      {
        "word": "簡単",
        "furigana": "かんたん",
        "romaji": "kantan",
        "english": "Simple / Easy",
        "kanji": "簡単",
        "exampleSentence": "この問題はとても簡単です。",
        "exampleEnglish": "This problem is very simple."
      }
    ]
  },
  "ア": {
    "char": "ア",
    "romaji": "a",
    "script": "Katakana",
    "strokeCount": 2,
    "mnemonic": "Looks like an Axe chopping downward.",
    "similarChars": [
      "マ",
      "ヤ"
    ],
    "words": [
      {
        "word": "アイス",
        "furigana": "アイス",
        "romaji": "aisu",
        "english": "Ice cream",
        "kanji": "アイス",
        "exampleSentence": "暑い日に冷たいアイスを食べます。",
        "exampleEnglish": "Eat cold ice cream on a hot day."
      },
      {
        "word": "アメリカ",
        "furigana": "アメリカ",
        "romaji": "amerika",
        "english": "America / USA",
        "kanji": "アメリカ",
        "exampleSentence": "アメリカから友達が来ました。",
        "exampleEnglish": "A friend came from America."
      },
      {
        "word": "アニメ",
        "furigana": "アニメ",
        "romaji": "anime",
        "english": "Anime",
        "kanji": "アニメ",
        "exampleSentence": "日本のアニメが世界中で人気です。",
        "exampleEnglish": "Japanese anime is popular worldwide."
      },
      {
        "word": "アルバイト",
        "furigana": "アルバイト",
        "romaji": "arubaito",
        "english": "Part-time job",
        "kanji": "アルバイト",
        "exampleSentence": "カフェでアルバイトをしています。",
        "exampleEnglish": "I work a part-time job at a cafe."
      },
      {
        "word": "アパート",
        "furigana": "アパート",
        "romaji": "apaato",
        "english": "Apartment",
        "kanji": "アパート",
        "exampleSentence": "駅の近くのアパートに住んでいます。",
        "exampleEnglish": "I live in an apartment near the station."
      }
    ]
  },
  "イ": {
    "char": "イ",
    "romaji": "i",
    "script": "Katakana",
    "strokeCount": 2,
    "mnemonic": "Looks like an Italic 'I' leaning.",
    "similarChars": [
      "ト"
    ],
    "words": [
      {
        "word": "イギリス",
        "furigana": "イギリス",
        "romaji": "igirisu",
        "english": "United Kingdom / UK",
        "kanji": "イギリス",
        "exampleSentence": "イギリスのロンドンへ行きたいです。",
        "exampleEnglish": "I want to go to London in the UK."
      },
      {
        "word": "イラスト",
        "furigana": "イラスト",
        "romaji": "irasuto",
        "english": "Illustration",
        "kanji": "イラスト",
        "exampleSentence": "可愛いイラストを描きました。",
        "exampleEnglish": "I drew a cute illustration."
      },
      {
        "word": "イベント",
        "furigana": "イベント",
        "romaji": "ibento",
        "english": "Event",
        "kanji": "イベント",
        "exampleSentence": "週末に楽しいイベントに参加します。",
        "exampleEnglish": "Join a fun event on the weekend."
      },
      {
        "word": "インターネット",
        "furigana": "インターネット",
        "romaji": "intaanetto",
        "english": "Internet",
        "kanji": "インターネット",
        "exampleSentence": "インターネットで情報を調べます。",
        "exampleEnglish": "Look up info on the internet."
      }
    ]
  },
  "ク": {
    "char": "ク",
    "romaji": "ku",
    "script": "Katakana",
    "strokeCount": 2,
    "mnemonic": "Looks like a Cook’s sharp chopping knife.",
    "similarChars": [
      "ワ",
      "タ",
      "ケ",
      "フ"
    ],
    "words": [
      {
        "word": "クラス",
        "furigana": "クラス",
        "romaji": "kurasu",
        "english": "Class",
        "kanji": "クラス",
        "exampleSentence": "クラスメイトと楽しく勉強します。",
        "exampleEnglish": "I study with my classmates happily."
      },
      {
        "word": "クリスマス",
        "furigana": "クリスマス",
        "romaji": "kurisumasu",
        "english": "Christmas",
        "kanji": "クリスマス",
        "exampleSentence": "クリスマスにプレゼントを贈ります。",
        "exampleEnglish": "I give presents on Christmas."
      },
      {
        "word": "クッキー",
        "furigana": "クッキー",
        "romaji": "kukkii",
        "english": "Cookie",
        "kanji": "クッキー",
        "exampleSentence": "手作りクッキーを焼きました。",
        "exampleEnglish": "I baked homemade cookies."
      },
      {
        "word": "クイズ",
        "furigana": "クイズ",
        "romaji": "kuizu",
        "english": "Quiz",
        "kanji": "クイズ",
        "exampleSentence": "日本語クイズに挑戦しましょう。",
        "exampleEnglish": "Let us challenge the Japanese quiz."
      },
      {
        "word": "クレジットカード",
        "furigana": "クレジットカード",
        "romaji": "kurejitto kaado",
        "english": "Credit Card",
        "kanji": "クレジットカード",
        "exampleSentence": "クレジットカードで支払います。",
        "exampleEnglish": "I pay by credit card."
      }
    ]
  }
};

// Fallback provider ensuring clean, beginner-friendly words
export function getKanaDetails(char: string, romaji: string, script: 'Hiragana' | 'Katakana'): KanaDetailsData {
  if (KANA_WORDS_MAP[char]) {
    return KANA_WORDS_MAP[char];
  }

  // Beginner-friendly dynamic fallback
  return {
    char,
    romaji,
    script,
    strokeCount: script === 'Hiragana' ? 2 : 2,
    mnemonic: `Pronounced "${romaji}" in standard Japanese.`,
    words: [
      {
        word: char,
        furigana: char,
        romaji: romaji,
        english: `Sound of [${romaji}]`,
        exampleSentence: `「${char}」の発音を声に出して練習しましょう。`,
        exampleEnglish: `Let us practice pronouncing "${char}" out loud.`
      }
    ]
  };
}
