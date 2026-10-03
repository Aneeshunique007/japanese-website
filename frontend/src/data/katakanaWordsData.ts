import { KanaWord } from '../types';

export interface KatakanaEntry {
  char: string;
  romaji: string;
  script: 'Katakana';
  strokeCount: number;
  mnemonic: string;
  similarChars?: string[];
  words: KanaWord[];
}

export const KATAKANA_COMPLETE_MAP: Record<string, KatakanaEntry> = {
  // A-row
  "ア": {
    char: "ア",
    romaji: "a",
    script: "Katakana",
    strokeCount: 2,
    mnemonic: "Looks like an Axe chopping downward.",
    words: [
      { word: "アイス", furigana: "アイス", romaji: "aisu", english: "Ice cream" },
      { word: "アメリカ", furigana: "アメリカ", romaji: "amerika", english: "America / USA" }
    ]
  },
  "イ": {
    char: "イ",
    romaji: "i",
    script: "Katakana",
    strokeCount: 2,
    mnemonic: "Looks like an Iron stand.",
    words: [
      { word: "イギリス", furigana: "イギリス", romaji: "igirisu", english: "United Kingdom" },
      { word: "インク", furigana: "インク", romaji: "inku", english: "Ink" }
    ]
  },
  "ウ": {
    char: "ウ",
    romaji: "u",
    script: "Katakana",
    strokeCount: 3,
    mnemonic: "Looks like a person wearing an Umbrella.",
    words: [
      { word: "ウイスキー", furigana: "ウイスキー", romaji: "uisukii", english: "Whisky" },
      { word: "ウール", furigana: "ウール", romaji: "uuru", english: "Wool" }
    ]
  },
  "エ": {
    char: "エ",
    romaji: "e",
    script: "Katakana",
    strokeCount: 3,
    mnemonic: "Looks like an Elevator girder.",
    words: [
      { word: "エレベーター", furigana: "エレベーター", romaji: "erebeetaa", english: "Elevator" },
      { word: "エアコン", furigana: "エアコン", romaji: "eakon", english: "Air conditioner" }
    ]
  },
  "オ": {
    char: "オ",
    romaji: "o",
    script: "Katakana",
    strokeCount: 3,
    mnemonic: "Looks like an Opera singer bowing.",
    words: [
      { word: "オレンジ", furigana: "オレンジ", romaji: "orenji", english: "Orange" },
      { word: "オリーブ", furigana: "オリーブ", romaji: "oriibu", english: "Olive" }
    ]
  },

  // Ka-row
  "カ": {
    char: "カ",
    romaji: "ka",
    script: "Katakana",
    strokeCount: 2,
    mnemonic: "Sharp Katana blade like ka in hiragana without droplet.",
    words: [
      { word: "カメラ", furigana: "カメラ", romaji: "kamera", english: "Camera" },
      { word: "カフェ", furigana: "カフェ", romaji: "kafe", english: "Cafe" }
    ]
  },
  "キ": {
    char: "キ",
    romaji: "ki",
    script: "Katakana",
    strokeCount: 3,
    mnemonic: "Looks like a Key.",
    words: [
      { word: "キッチン", furigana: "キッチン", romaji: "kicchin", english: "Kitchen" },
      { word: "キャンプ", furigana: "キャンプ", romaji: "kyanpu", english: "Camp / Camping" }
    ]
  },
  "ク": {
    char: "ク",
    romaji: "ku",
    script: "Katakana",
    strokeCount: 2,
    mnemonic: "Looks like a Chef's hat or a Cook.",
    words: [
      { word: "クラス", furigana: "クラス", romaji: "kurasu", english: "Class" },
      { word: "クッキー", furigana: "クッキー", romaji: "kukkii", english: "Cookie" }
    ]
  },
  "ケ": {
    char: "ケ",
    romaji: "ke",
    script: "Katakana",
    strokeCount: 3,
    mnemonic: "Looks like a K for kettle.",
    words: [
      { word: "ケーキ", furigana: "ケーキ", romaji: "keeki", english: "Cake" },
      { word: "ケチャップ", furigana: "ケチャップ", romaji: "kechappu", english: "Ketchup" }
    ]
  },
  "コ": {
    char: "コ",
    romaji: "ko",
    script: "Katakana",
    strokeCount: 2,
    mnemonic: "Two corners of a square.",
    words: [
      { word: "コーヒー", furigana: "コーヒー", romaji: "koohii", english: "Coffee" },
      { word: "コップ", furigana: "コップ", romaji: "koppu", english: "Cup / Glass" }
    ]
  },

  // Sa-row
  "サ": {
    char: "サ",
    romaji: "sa",
    script: "Katakana",
    strokeCount: 3,
    mnemonic: "Three fishbones for a Sardine.",
    words: [
      { word: "サラダ", furigana: "サラダ", romaji: "sarada", english: "Salad" },
      { word: "サッカー", furigana: "サッカー", romaji: "sakkaa", english: "Soccer" }
    ]
  },
  "シ": {
    char: "シ",
    romaji: "shi",
    script: "Katakana",
    strokeCount: 3,
    mnemonic: "A smiling face looking upward.",
    words: [
      { word: "シャツ", furigana: "シャツ", romaji: "shatsu", english: "Shirt" },
      { word: "シャワー", furigana: "シャワー", romaji: "shawaa", english: "Shower" }
    ]
  },
  "ス": {
    char: "ス",
    romaji: "su",
    script: "Katakana",
    strokeCount: 2,
    mnemonic: "A skier zooming on Snow.",
    words: [
      { word: "スポーツ", furigana: "スポーツ", romaji: "supootsu", english: "Sports" },
      { word: "スープ", furigana: "スープ", romaji: "suupu", english: "Soup" }
    ]
  },
  "セ": {
    char: "セ",
    romaji: "se",
    script: "Katakana",
    strokeCount: 2,
    mnemonic: "Looks like the number seven on top of a base.",
    words: [
      { word: "セーター", furigana: "セーター", romaji: "seetaa", english: "Sweater" },
      { word: "センター", furigana: "センター", romaji: "sentaa", english: "Center" }
    ]
  },
  "ソ": {
    char: "ソ",
    romaji: "so",
    script: "Katakana",
    strokeCount: 2,
    mnemonic: "One sewing needle and stitch pointing down.",
    words: [
      { word: "ソファ", furigana: "ソファ", romaji: "sofa", english: "Sofa / Couch" },
      { word: "ソース", furigana: "ソース", romaji: "soosu", english: "Sauce" }
    ]
  },

  // Ta-row
  "タ": {
    char: "タ",
    romaji: "ta",
    script: "Katakana",
    strokeCount: 3,
    mnemonic: "A kite with a Tail flying high.",
    words: [
      { word: "タクシー", furigana: "タクシー", romaji: "takushii", english: "Taxi" },
      { word: "タオル", furigana: "タオル", romaji: "taoru", english: "Towel" }
    ]
  },
  "チ": {
    char: "チ",
    romaji: "chi",
    script: "Katakana",
    strokeCount: 3,
    mnemonic: "Cheerleader with pom-poms.",
    words: [
      { word: "チーズ", furigana: "チーズ", romaji: "chiizu", english: "Cheese" },
      { word: "チケット", furigana: "チケット", romaji: "chiketto", english: "Ticket" }
    ]
  },
  "ツ": {
    char: "ツ",
    romaji: "tsu",
    script: "Katakana",
    strokeCount: 3,
    mnemonic: "Tsunami wave falling downward.",
    words: [
      { word: "ツアー", furigana: "ツアー", romaji: "tsuaa", english: "Tour" },
      { word: "ツリー", furigana: "ツリー", romaji: "tsurii", english: "Tree" }
    ]
  },
  "テ": {
    char: "テ",
    romaji: "te",
    script: "Katakana",
    strokeCount: 3,
    mnemonic: "A Telephone pole.",
    words: [
      { word: "テレビ", furigana: "テレビ", romaji: "terebi", english: "Television / TV" },
      { word: "テニス", furigana: "テニス", romaji: "tenisu", english: "Tennis" }
    ]
  },
  "ト": {
    char: "ト",
    romaji: "to",
    script: "Katakana",
    strokeCount: 2,
    mnemonic: "Totem pole with a branch.",
    words: [
      { word: "トマト", furigana: "トマト", romaji: "tomato", english: "Tomato" },
      { word: "トイレ", furigana: "トイレ", romaji: "toire", english: "Toilet / Restroom" }
    ]
  },

  // Na-row
  "ナ": {
    char: "ナ",
    romaji: "na",
    script: "Katakana",
    strokeCount: 2,
    mnemonic: "A cross like a Nun wearing a habit.",
    words: [
      { word: "ナイフ", furigana: "ナイフ", romaji: "naifu", english: "Knife" },
      { word: "ナプキン", furigana: "ナプキン", romaji: "napukin", english: "Napkin" }
    ]
  },
  "ニ": {
    char: "ニ",
    romaji: "ni",
    script: "Katakana",
    strokeCount: 2,
    mnemonic: "Two needles lying horizontal (like kanji for 2).",
    words: [
      { word: "ニュース", furigana: "ニュース", romaji: "nyuusu", english: "News" },
      { word: "ニーズ", furigana: "ニーズ", romaji: "niizu", english: "Needs" }
    ]
  },
  "ヌ": {
    char: "ヌ",
    romaji: "nu",
    script: "Katakana",
    strokeCount: 2,
    mnemonic: "Noodles picked up by chopsticks.",
    words: [
      { word: "ヌードル", furigana: "ヌードル", romaji: "nuudoru", english: "Noodle" },
      { word: "カヌー", furigana: "カヌー", romaji: "kanuu", english: "Canoe" }
    ]
  },
  "ネ": {
    char: "ネ",
    romaji: "ne",
    script: "Katakana",
    strokeCount: 4,
    mnemonic: "A Necktie neatly folded.",
    words: [
      { word: "ネクタイ", furigana: "ネクタイ", romaji: "nekutai", english: "Necktie" },
      { word: "ネット", furigana: "ネット", romaji: "netto", english: "Internet / Net" }
    ]
  },
  "ノ": {
    char: "ノ",
    romaji: "no",
    script: "Katakana",
    strokeCount: 1,
    mnemonic: "A long sloping Nose.",
    words: [
      { word: "ノート", furigana: "ノート", romaji: "nooto", english: "Notebook" },
      { word: "ノック", furigana: "ノック", romaji: "nokku", english: "Knock" }
    ]
  },

  // Ha-row
  "ハ": {
    char: "ハ",
    romaji: "ha",
    script: "Katakana",
    strokeCount: 2,
    mnemonic: "Two sides of a thatched Hut.",
    words: [
      { word: "ハンバーガー", furigana: "ハンバーガー", romaji: "hanbaagaa", english: "Hamburger" },
      { word: "ハワイ", furigana: "ハワイ", romaji: "hawai", english: "Hawaii" }
    ]
  },
  "ヒ": {
    char: "ヒ",
    romaji: "hi",
    script: "Katakana",
    strokeCount: 2,
    mnemonic: "Heel of a foot.",
    words: [
      { word: "ヒーロー", furigana: "ヒーロー", romaji: "hiiroo", english: "Hero" },
      { word: "ヒーター", furigana: "ヒーター", romaji: "hiitaa", english: "Heater" }
    ]
  },
  "フ": {
    char: "フ",
    romaji: "fu",
    script: "Katakana",
    strokeCount: 1,
    mnemonic: "A flag fluttering in the wind.",
    words: [
      { word: "フォーク", furigana: "フォーク", romaji: "fooku", english: "Fork" },
      { word: "フルーツ", furigana: "フルーツ", romaji: "furuutsu", english: "Fruit" }
    ]
  },
  "ヘ": {
    char: "ヘ",
    romaji: "he",
    script: "Katakana",
    strokeCount: 1,
    mnemonic: "Peak of Mount Saint Helens.",
    words: [
      { word: "ヘルメット", furigana: "ヘルメット", romaji: "herumetto", english: "Helmet" },
      { word: "ヘッドホン", furigana: "ヘッドホン", romaji: "heddohon", english: "Headphones" }
    ]
  },
  "ホ": {
    char: "ホ",
    romaji: "ho",
    script: "Katakana",
    strokeCount: 4,
    mnemonic: "Holy cross with arms spread.",
    words: [
      { word: "ホテル", furigana: "ホテル", romaji: "hoteru", english: "Hotel" },
      { word: "ホーム", furigana: "ホーム", romaji: "hoomu", english: "Train platform / Home" }
    ]
  },

  // Ma-row
  "マ": {
    char: "マ",
    romaji: "ma",
    script: "Katakana",
    strokeCount: 2,
    mnemonic: "Corner of a Martini glass.",
    words: [
      { word: "マスク", furigana: "マスク", romaji: "masuku", english: "Mask" },
      { word: "マンゴー", furigana: "マンゴー", romaji: "mangoo", english: "Mango" }
    ]
  },
  "ミ": {
    char: "ミ",
    romaji: "mi",
    script: "Katakana",
    strokeCount: 3,
    mnemonic: "Three missiles launching.",
    words: [
      { word: "ミルク", furigana: "ミルク", romaji: "miruku", english: "Milk" },
      { word: "ミーティング", furigana: "ミーティング", romaji: "miitingu", english: "Meeting" }
    ]
  },
  "ム": {
    char: "ム",
    romaji: "mu",
    script: "Katakana",
    strokeCount: 2,
    mnemonic: "Moose horns.",
    words: [
      { word: "ムービー", furigana: "ムービー", romaji: "muubii", english: "Movie" },
      { word: "ムード", furigana: "ムード", romaji: "muudo", english: "Mood" }
    ]
  },
  "メ": {
    char: "メ",
    romaji: "me",
    script: "Katakana",
    strokeCount: 2,
    mnemonic: "Crossed swords of a duel.",
    words: [
      { word: "メニュー", furigana: "メニュー", romaji: "menyuu", english: "Menu" },
      { word: "メッセージ", furigana: "メッセージ", romaji: "messeji", english: "Message" }
    ]
  },
  "モ": {
    char: "モ",
    romaji: "mo",
    script: "Katakana",
    strokeCount: 3,
    mnemonic: "More lines than ko.",
    words: [
      { word: "モデル", furigana: "モデル", romaji: "moderu", english: "Model" },
      { word: "モニター", furigana: "モニター", romaji: "monitaa", english: "Monitor" }
    ]
  },

  // Ya-row
  "ヤ": {
    char: "ヤ",
    romaji: "ya",
    script: "Katakana",
    strokeCount: 2,
    mnemonic: "A Yak horn.",
    words: [
      { word: "ヤシ", furigana: "ヤシ", romaji: "yashi", english: "Palm tree" },
      { word: "ダイヤ", furigana: "ダイヤ", romaji: "daiya", english: "Diamond / Timetable" }
    ]
  },
  "ユ": {
    char: "ユ",
    romaji: "yu",
    script: "Katakana",
    strokeCount: 2,
    mnemonic: "You have a right angle.",
    words: [
      { word: "ユニフォーム", furigana: "ユニフォーム", romaji: "yunifoomu", english: "Uniform" },
      { word: "ユーザー", furigana: "ユーザー", romaji: "yuuzaa", english: "User" }
    ]
  },
  "ヨ": {
    char: "ヨ",
    romaji: "yo",
    script: "Katakana",
    strokeCount: 3,
    mnemonic: "Toy shelf for a Yo-yo.",
    words: [
      { word: "ヨーグルト", furigana: "ヨーグルト", romaji: "yooguruto", english: "Yogurt" },
      { word: "ヨーロッパ", furigana: "ヨーロッパ", romaji: "yooroppa", english: "Europe" }
    ]
  },

  // Ra-row
  "ラ": {
    char: "ラ",
    romaji: "ra",
    script: "Katakana",
    strokeCount: 2,
    mnemonic: "A cheering Raptor with arms out.",
    words: [
      { word: "ラジオ", furigana: "ラジオ", romaji: "rajio", english: "Radio" },
      { word: "ライオン", furigana: "ライオン", romaji: "raion", english: "Lion" }
    ]
  },
  "リ": {
    char: "リ",
    romaji: "ri",
    script: "Katakana",
    strokeCount: 2,
    mnemonic: "Two reeds swaying by a River.",
    words: [
      { word: "リモコン", furigana: "リモコン", romaji: "rimokon", english: "Remote control" },
      { word: "リーダー", furigana: "リーダー", romaji: "riidaa", english: "Leader" }
    ]
  },
  "ル": {
    char: "ル",
    romaji: "ru",
    script: "Katakana",
    strokeCount: 2,
    mnemonic: "Two roots going down into the soil.",
    words: [
      { word: "ルール", furigana: "ルール", romaji: "ruuru", english: "Rule" },
      { word: "ルビー", furigana: "ルビー", romaji: "rubii", english: "Ruby" }
    ]
  },
  "レ": {
    char: "レ",
    romaji: "re",
    script: "Katakana",
    strokeCount: 1,
    mnemonic: "A sharp Record needle.",
    words: [
      { word: "レストラン", furigana: "レストラン", romaji: "resutoran", english: "Restaurant" },
      { word: "レモン", furigana: "レモン", romaji: "remon", english: "Lemon" }
    ]
  },
  "ロ": {
    char: "ロ",
    romaji: "ro",
    script: "Katakana",
    strokeCount: 3,
    mnemonic: "A Road block square box.",
    words: [
      { word: "ロボット", furigana: "ロボット", romaji: "robotto", english: "Robot" },
      { word: "ロッカー", furigana: "ロッカー", romaji: "rokkaa", english: "Locker" }
    ]
  },

  // Wa-row & N
  "ワ": {
    char: "ワ",
    romaji: "wa",
    script: "Katakana",
    strokeCount: 2,
    mnemonic: "A wine glass shaped roof.",
    words: [
      { word: "ワイン", furigana: "ワイン", romaji: "wain", english: "Wine" },
      { word: "ワッフル", furigana: "ワッフル", romaji: "waffuru", english: "Waffle" }
    ]
  },
  "ヲ": {
    char: "ヲ",
    romaji: "wo",
    script: "Katakana",
    strokeCount: 3,
    mnemonic: "An ancient dog barking woof.",
    words: [
      { word: "ヲタク", furigana: "ヲタク", romaji: "wotaku", english: "Otaku / Dedicated fan" },
      { word: "ハワイ", furigana: "ハワイ", romaji: "hawai", english: "Hawaii" }
    ]
  },
  "ン": {
    char: "ン",
    romaji: "n",
    script: "Katakana",
    strokeCount: 2,
    mnemonic: "One stroke looking up saying 'n'.",
    words: [
      { word: "パン", furigana: "パン", romaji: "pan", english: "Bread" },
      { word: "サンドイッチ", furigana: "サンドイッチ", romaji: "sandoicchi", english: "Sandwich" }
    ]
  },

  // Dakuten (Ga, Za, Da, Ba) & Handakuten (Pa)
  "ガ": {
    char: "ガ",
    romaji: "ga",
    script: "Katakana",
    strokeCount: 4,
    mnemonic: "Ka with dakuten.",
    words: [
      { word: "ガム", furigana: "ガム", romaji: "gamu", english: "Chewing gum" },
      { word: "ガラス", furigana: "ガラス", romaji: "garasu", english: "Glass" }
    ]
  },
  "ギ": {
    char: "ギ",
    romaji: "gi",
    script: "Katakana",
    strokeCount: 5,
    mnemonic: "Ki with dakuten.",
    words: [
      { word: "ギター", furigana: "ギター", romaji: "gitaa", english: "Guitar" },
      { word: "ギャラリー", furigana: "ギャラリー", romaji: "gyararii", english: "Gallery" }
    ]
  },
  "グ": {
    char: "グ",
    romaji: "gu",
    script: "Katakana",
    strokeCount: 4,
    mnemonic: "Ku with dakuten.",
    words: [
      { word: "グラス", furigana: "グラス", romaji: "gurasu", english: "Drinking glass" },
      { word: "グループ", furigana: "グループ", romaji: "guruupu", english: "Group" }
    ]
  },
  "ゲ": {
    char: "ゲ",
    romaji: "ge",
    script: "Katakana",
    strokeCount: 5,
    mnemonic: "Ke with dakuten.",
    words: [
      { word: "ゲーム", furigana: "ゲーム", romaji: "geemu", english: "Game" },
      { word: "ゲスト", furigana: "ゲスト", romaji: "gesuto", english: "Guest" }
    ]
  },
  "ゴ": {
    char: "ゴ",
    romaji: "go",
    script: "Katakana",
    strokeCount: 4,
    mnemonic: "Ko with dakuten.",
    words: [
      { word: "ゴルフ", furigana: "ゴルフ", romaji: "gorufu", english: "Golf" },
      { word: "ゴール", furigana: "ゴール", romaji: "gooru", english: "Goal" }
    ]
  },
  "ザ": {
    char: "ザ",
    romaji: "za",
    script: "Katakana",
    strokeCount: 5,
    mnemonic: "Sa with dakuten.",
    words: [
      { word: "ピザ", furigana: "ピザ", romaji: "piza", english: "Pizza" },
      { word: "デザート", furigana: "デザート", romaji: "dezaato", english: "Dessert" }
    ]
  },
  "ジ": {
    char: "ジ",
    romaji: "ji",
    script: "Katakana",
    strokeCount: 5,
    mnemonic: "Shi with dakuten.",
    words: [
      { word: "ジュース", furigana: "ジュース", romaji: "juusu", english: "Juice" },
      { word: "ジーンズ", furigana: "ジーンズ", romaji: "jiinzu", english: "Jeans" }
    ]
  },
  "ズ": {
    char: "ズ",
    romaji: "zu",
    script: "Katakana",
    strokeCount: 4,
    mnemonic: "Su with dakuten.",
    words: [
      { word: "ズボン", furigana: "ズボン", romaji: "zubon", english: "Pants / Trousers" },
      { word: "チーズ", furigana: "チーズ", romaji: "chiizu", english: "Cheese" }
    ]
  },
  "ゼ": {
    char: "ゼ",
    romaji: "ze",
    script: "Katakana",
    strokeCount: 4,
    mnemonic: "Se with dakuten.",
    words: [
      { word: "ゼリー", furigana: "ゼリー", romaji: "zerii", english: "Jelly" },
      { word: "ゼロ", furigana: "ゼロ", romaji: "zero", english: "Zero" }
    ]
  },
  "ゾ": {
    char: "ゾ",
    romaji: "zo",
    script: "Katakana",
    strokeCount: 4,
    mnemonic: "So with dakuten.",
    words: [
      { word: "ゾーン", furigana: "ゾーン", romaji: "zoon", english: "Zone" },
      { word: "アマゾン", furigana: "アマゾン", romaji: "amazon", english: "Amazon" }
    ]
  },
  "ダ": {
    char: "ダ",
    romaji: "da",
    script: "Katakana",
    strokeCount: 5,
    mnemonic: "Ta with dakuten.",
    words: [
      { word: "ダンス", furigana: "ダンス", romaji: "dansu", english: "Dance" },
      { word: "サラダ", furigana: "サラダ", romaji: "sarada", english: "Salad" }
    ]
  },
  "デ": {
    char: "デ",
    romaji: "de",
    script: "Katakana",
    strokeCount: 5,
    mnemonic: "Te with dakuten.",
    words: [
      { word: "デパート", furigana: "デパート", romaji: "depaato", english: "Department store" },
      { word: "デザート", furigana: "デザート", romaji: "dezaato", english: "Dessert" }
    ]
  },
  "ド": {
    char: "ド",
    romaji: "do",
    script: "Katakana",
    strokeCount: 4,
    mnemonic: "To with dakuten.",
    words: [
      { word: "ドア", furigana: "ドア", romaji: "doa", english: "Door" },
      { word: "ドーナツ", furigana: "ドーナツ", romaji: "doonatsu", english: "Donut" }
    ]
  },
  "バ": {
    char: "バ",
    romaji: "ba",
    script: "Katakana",
    strokeCount: 4,
    mnemonic: "Ha with dakuten.",
    words: [
      { word: "バス", furigana: "バス", romaji: "basu", english: "Bus" },
      { word: "バナナ", furigana: "バナナ", romaji: "banana", english: "Banana" }
    ]
  },
  "ビ": {
    char: "ビ",
    romaji: "bi",
    script: "Katakana",
    strokeCount: 4,
    mnemonic: "Hi with dakuten.",
    words: [
      { word: "ビール", furigana: "ビール", romaji: "biiru", english: "Beer" },
      { word: "ビル", furigana: "ビル", romaji: "biru", english: "Building" }
    ]
  },
  "ブ": {
    char: "ブ",
    romaji: "bu",
    script: "Katakana",
    strokeCount: 3,
    mnemonic: "Fu with dakuten.",
    words: [
      { word: "ブーツ", furigana: "ブーツ", romaji: "buutsu", english: "Boots" },
      { word: "ブログ", furigana: "ブログ", romaji: "burogu", english: "Blog" }
    ]
  },
  "ベ": {
    char: "ベ",
    romaji: "be",
    script: "Katakana",
    strokeCount: 3,
    mnemonic: "He with dakuten.",
    words: [
      { word: "ベッド", furigana: "ベッド", romaji: "beddo", english: "Bed" },
      { word: "ベンチ", furigana: "ベンチ", romaji: "benchi", english: "Bench" }
    ]
  },
  "ボ": {
    char: "ボ",
    romaji: "bo",
    script: "Katakana",
    strokeCount: 6,
    mnemonic: "Ho with dakuten.",
    words: [
      { word: "ボール", furigana: "ボール", romaji: "booru", english: "Ball" },
      { word: "ボタン", furigana: "ボタン", romaji: "botan", english: "Button" }
    ]
  },
  "パ": {
    char: "パ",
    romaji: "pa",
    script: "Katakana",
    strokeCount: 3,
    mnemonic: "Ha with handakuten.",
    words: [
      { word: "パン", furigana: "パン", romaji: "pan", english: "Bread" },
      { word: "パスポート", furigana: "パスポート", romaji: "pasupooto", english: "Passport" }
    ]
  },
  "ピ": {
    char: "ピ",
    romaji: "pi",
    script: "Katakana",
    strokeCount: 3,
    mnemonic: "Hi with handakuten.",
    words: [
      { word: "ピアノ", furigana: "ピアノ", romaji: "piano", english: "Piano" },
      { word: "ピザ", furigana: "ピザ", romaji: "piza", english: "Pizza" }
    ]
  },
  "プ": {
    char: "プ",
    romaji: "pu",
    script: "Katakana",
    strokeCount: 2,
    mnemonic: "Fu with handakuten.",
    words: [
      { word: "プール", furigana: "プール", romaji: "puuru", english: "Swimming pool" },
      { word: "プレゼント", furigana: "プレゼント", romaji: "purezento", english: "Present / Gift" }
    ]
  },
  "ペ": {
    char: "ペ",
    romaji: "pe",
    script: "Katakana",
    strokeCount: 2,
    mnemonic: "He with handakuten.",
    words: [
      { word: "ペン", furigana: "ペン", romaji: "pen", english: "Pen" },
      { word: "ペット", furigana: "ペット", romaji: "petto", english: "Pet" }
    ]
  },
  "ポ": {
    char: "ポ",
    romaji: "po",
    script: "Katakana",
    strokeCount: 5,
    mnemonic: "Ho with handakuten.",
    words: [
      { word: "ポスト", furigana: "ポスト", romaji: "posuto", english: "Postbox" },
      { word: "ポテト", furigana: "ポテト", romaji: "poteto", english: "Potato / Fries" }
    ]
  }
};
