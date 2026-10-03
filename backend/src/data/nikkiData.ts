// AUTO-GENERATED NIKKI DATA TYPES AND EXPORTS (100% STRICT PPTX FIDELITY)

export interface NikkiSlide {
  slideNumber: number;
  title: string;
  jpTitle?: string;
  category?: string;
  subtitle?: string;
  summary?: string;
  bullets?: string[];
  highlight?: string;
  blocks?: string[][];
}

export interface NikkiKanjiExample {
  word: string;
  reading: string;
  meaning: string;
  romaji?: string;
}

export interface NikkiKanjiItem {
  kanji: string;
  meaning: string;
  onyomi: string;
  kunyomi: string;
  strokes: number;
  radical: string;
  radicalClue: string;
  examples: NikkiKanjiExample[];
}

export interface NikkiVocabularyItem {
  japanese: string;
  reading: string;
  romaji?: string;
  english: string;
  category: string;
  notes?: string;
}

export interface NikkiGrammarExample {
  japanese: string;
  reading: string;
  romaji?: string;
  english: string;
}

export interface NikkiGrammarPoint {
  title: string;
  structure?: string;
  explanation: string;
  examples: NikkiGrammarExample[];
}

export interface NikkiReadingPassageQuestion {
  q?: string;
  a?: string;
  question?: string;
  options?: string[];
  correct?: string;
  explanation?: string;
}

export interface NikkiReadingPassage {
  title: string;
  text: string;
  romaji?: string;
  translation: string;
  questions?: NikkiReadingPassageQuestion[];
}

export interface NikkiQuizQuestion {
  question: string;
  options: string[];
  correct: string;
  explanation: string;
}

export interface NikkiDayLesson {
  id: string;
  dayNumber: number;
  classCode: string;
  theme: string;
  japaneseTheme: string;
  subtitle: string;
  description: string;
  badge: string;
  goals: string[];
  keyHighlights: string[];
  kanjiList: NikkiKanjiItem[];
  vocabularyList: NikkiVocabularyItem[];
  grammarNotes?: NikkiGrammarPoint[];
  grammarPoints?: NikkiGrammarPoint[];
  readingPassages: NikkiReadingPassage[];
  practiceQuiz: NikkiQuizQuestion[];
  slides: NikkiSlide[];
}

export interface NikkiHomeworkOption {
  label: string;
  text: string;
}

export interface NikkiHomeworkQuestion {
  id: string;
  num: number;
  question: string;
  options: NikkiHomeworkOption[];
  correct: string;
  explanation: string;
  teacherFocus?: string;
  example?: string;
}

export interface NikkiHomeworkCategory {
  category: string;
  description: string;
  passages?: Record<string, string>;
  questions: NikkiHomeworkQuestion[];
}

export interface NikkiClass424Question {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
}

export const NIKKI_MASTER_DATA = {
  "title": "Nikki Complete Japanese Master Learning System",
  "totalDays": 7,
  "totalSlides": 149,
  "totalKanji": 93,
  "totalVocab": 220,
  "days": [
    {
    "id": "day-1",
    "dayNumber": 1,
    "classCode": "Class 404",
    "theme": "Kana Fundamentals, Pronunciation Secrets & Numbers 1–10",
    "japaneseTheme": "日本語の文字体系と発音 (Nihongo no moji taikei to hatsuon)",
    "subtitle": "Foundations of Japanese phonetics, stroke order laws, loanwords, and counting basics",
    "description": "Master essential pronunciation mechanics including the flick R/L, nasal NG/N/M distinctions, stroke order rules, katakana nuances with dakuten, and foundational kanji counting from 1 to 10.",
    "badge": "Class 404 · Foundations",
    "goals": [
        "Master Hiragana (ひらがな / hiragana), Katakana (カタカナ / katakana), and the purpose of Furigana (フリガナ / furigana)",
        "Understand Japanese pronunciation: N (ん / n) vs M vs NG, and the roof-of-mouth R/L flick (ら, り, る, れ, ろ / ra, ri, ru, re, ro)",
        "Memorize the 5 Universal Stroke Order Laws (筆順 / hitsujun) for kanji and kana",
        "Recognize Katakana loanwords (コーヒー / kōhī, ホテル / hoteru, テレビ / terebi, エアコン / eakon)",
        "Count from 1 to 10 with Kanji: 一 (ichi), 二 (ni), 三 (san), 四 (yon/shi), 五 (go), 六 (roku), 七 (nana/shichi), 八 (hachi), 九 (kyū/ku), 十 (jū)"
    ],
    "keyHighlights": [
        "Pronunciation secret: Japanese \"r\" (ら, り, る, れ, ろ / ra, ri, ru, re, ro) is made by flicking the tip of the tongue against the alveolar ridge (roof of mouth)—neither a true English R nor L!",
        "Dakuten 「゛」(dakuten) transforms sounds (k→g, s→z, t→d, h→b) and enables modern foreign loanwords like ウイルス (uirusu - virus) and バイオリン (baiorin - violin)",
        "Katakana shares visual stroke DNA with Hiragana and Kanji (か / カ / 力 [chikara], た / タ / 夕 [yū], に / ニ / 二 [ni])"
    ],
    "kanjiList": [
        {
            "kanji": "一",
            "meaning": "one",
            "onyomi": "イチ (ichi)",
            "kunyomi": "ひと(つ) (hito(tsu))",
            "strokes": 1,
            "radical": "一",
            "radicalClue": "Core element: 一",
            "examples": [
                {
                    "word": "一つ",
                    "reading": "ひとつ (hitotsu)",
                    "meaning": "one thing",
                    "romaji": "hitotsu"
                },
                {
                    "word": "一日",
                    "reading": "ついたち / いちにち (tsuitachi / ichinichi)",
                    "meaning": "1st of month / one day",
                    "romaji": "tsuitachi / ichinichi"
                }
            ]
        },
        {
            "kanji": "二",
            "meaning": "two",
            "onyomi": "ニ (ni)",
            "kunyomi": "ふた(つ) (futa(tsu))",
            "strokes": 2,
            "radical": "二",
            "radicalClue": "Core element: 二",
            "examples": [
                {
                    "word": "二つ",
                    "reading": "ふたつ (futatsu)",
                    "meaning": "two things",
                    "romaji": "futatsu"
                },
                {
                    "word": "二日",
                    "reading": "ふつか (futsuka)",
                    "meaning": "2nd of month / two days",
                    "romaji": "futsuka"
                }
            ]
        },
        {
            "kanji": "三",
            "meaning": "three",
            "onyomi": "サン (san)",
            "kunyomi": "みっ(つ) (mi(tsu))",
            "strokes": 3,
            "radical": "三",
            "radicalClue": "Core element: 三",
            "examples": [
                {
                    "word": "三つ",
                    "reading": "みっつ (mittsu)",
                    "meaning": "three things",
                    "romaji": "mittsu"
                },
                {
                    "word": "三日",
                    "reading": "みっか (mikka)",
                    "meaning": "3rd of month / three days",
                    "romaji": "mikka"
                }
            ]
        },
        {
            "kanji": "四",
            "meaning": "four",
            "onyomi": "シ (shi)",
            "kunyomi": "よん・よっ(つ) (yon / yo(tsu))",
            "strokes": 5,
            "radical": "四",
            "radicalClue": "Core element: 四",
            "examples": [
                {
                    "word": "四つ",
                    "reading": "よっつ (yottsu)",
                    "meaning": "four things",
                    "romaji": "yottsu"
                },
                {
                    "word": "四日",
                    "reading": "よっか (yokka)",
                    "meaning": "4th of month / four days",
                    "romaji": "yokka"
                }
            ]
        },
        {
            "kanji": "五",
            "meaning": "five",
            "onyomi": "ゴ (go)",
            "kunyomi": "いつ(つ) (itsu(tsu))",
            "strokes": 4,
            "radical": "五",
            "radicalClue": "Core element: 五",
            "examples": [
                {
                    "word": "五つ",
                    "reading": "いつつ (itsutsu)",
                    "meaning": "five things",
                    "romaji": "itsutsu"
                },
                {
                    "word": "五日",
                    "reading": "いつか (itsuka)",
                    "meaning": "5th of month / five days",
                    "romaji": "itsuka"
                }
            ]
        },
        {
            "kanji": "六",
            "meaning": "six",
            "onyomi": "ロク (roku)",
            "kunyomi": "むっ(つ) (mu(tsu))",
            "strokes": 4,
            "radical": "六",
            "radicalClue": "Core element: 六",
            "examples": [
                {
                    "word": "六つ",
                    "reading": "むっつ (muttsu)",
                    "meaning": "six things",
                    "romaji": "muttsu"
                },
                {
                    "word": "六日",
                    "reading": "むいか (muika)",
                    "meaning": "6th of month / six days",
                    "romaji": "muika"
                }
            ]
        },
        {
            "kanji": "七",
            "meaning": "seven",
            "onyomi": "シチ (shichi)",
            "kunyomi": "なな(つ) (nana(tsu))",
            "strokes": 2,
            "radical": "七",
            "radicalClue": "Core element: 七",
            "examples": [
                {
                    "word": "七つ",
                    "reading": "ななつ (nanatsu)",
                    "meaning": "seven things",
                    "romaji": "nanatsu"
                },
                {
                    "word": "七日",
                    "reading": "なのか (nanoka)",
                    "meaning": "7th of month / seven days",
                    "romaji": "nanoka"
                }
            ]
        },
        {
            "kanji": "八",
            "meaning": "eight",
            "onyomi": "ハチ (hachi)",
            "kunyomi": "やっ(つ) (ya(tsu))",
            "strokes": 2,
            "radical": "八",
            "radicalClue": "Core element: 八",
            "examples": [
                {
                    "word": "八つ",
                    "reading": "やっつ (yattsu)",
                    "meaning": "eight things",
                    "romaji": "yattsu"
                },
                {
                    "word": "八日",
                    "reading": "ようか (youka)",
                    "meaning": "8th of month / eight days",
                    "romaji": "youka"
                }
            ]
        },
        {
            "kanji": "九",
            "meaning": "nine",
            "onyomi": "キュウ・ク (kyuu / ku)",
            "kunyomi": "ここの(つ) (kokono(tsu))",
            "strokes": 2,
            "radical": "九",
            "radicalClue": "Core element: 九",
            "examples": [
                {
                    "word": "九つ",
                    "reading": "ここのつ (kokonotsu)",
                    "meaning": "nine things",
                    "romaji": "kokonotsu"
                },
                {
                    "word": "九日",
                    "reading": "ここのか (kokonoka)",
                    "meaning": "9th of month / nine days",
                    "romaji": "kokonoka"
                }
            ]
        },
        {
            "kanji": "十",
            "meaning": "ten",
            "onyomi": "ジュウ (juu)",
            "kunyomi": "とお (too)",
            "strokes": 2,
            "radical": "十",
            "radicalClue": "Core element: 十",
            "examples": [
                {
                    "word": "十",
                    "reading": "じゅう (juu)",
                    "meaning": "ten",
                    "romaji": "juu"
                },
                {
                    "word": "十日",
                    "reading": "とおか (tooka)",
                    "meaning": "10th of month / ten days",
                    "romaji": "tooka"
                }
            ]
        },
        {
            "kanji": "百",
            "meaning": "hundred",
            "onyomi": "ヒャク (hyaku)",
            "kunyomi": "もも (momo)",
            "strokes": 6,
            "radical": "百",
            "radicalClue": "Core element: 百",
            "examples": [
                {
                    "word": "百",
                    "reading": "ひゃく (hyaku)",
                    "meaning": "hundred",
                    "romaji": "hyaku"
                },
                {
                    "word": "三百",
                    "reading": "さんびゃく (sanbyaku)",
                    "meaning": "three hundred",
                    "romaji": "sanbyaku"
                },
                {
                    "word": "六百",
                    "reading": "ろっぴゃく (roppyaku)",
                    "meaning": "six hundred",
                    "romaji": "roppyaku"
                },
                {
                    "word": "八百",
                    "reading": "はっぴゃく (happyaku)",
                    "meaning": "eight hundred",
                    "romaji": "happyaku"
                }
            ]
        },
        {
            "kanji": "力",
            "meaning": "power, strength",
            "onyomi": "リョク・リキ (ryoku / riki)",
            "kunyomi": "ちから (chikara)",
            "strokes": 2,
            "radical": "力",
            "radicalClue": "Core element: 力",
            "examples": [
                {
                    "word": "力",
                    "reading": "ちから (chikara)",
                    "meaning": "power / strength",
                    "romaji": "chikara"
                }
            ]
        },
        {
            "kanji": "夕",
            "meaning": "evening",
            "onyomi": "セキ (seki)",
            "kunyomi": "ゆう (yuu)",
            "strokes": 3,
            "radical": "夕",
            "radicalClue": "Core element: 夕",
            "examples": [
                {
                    "word": "夕方",
                    "reading": "ゆうがた (yuugata)",
                    "meaning": "evening",
                    "romaji": "yuugata"
                }
            ]
        }
    ],
    "vocabularyList": [
        {
            "japanese": "コーヒー",
            "reading": "こーひー (koohii)",
            "english": "coffee",
            "category": "Katakana",
            "notes": "コーヒーを飲みます。",
            "romaji": "koohii"
        },
        {
            "japanese": "ホテル",
            "reading": "ほてる (hoteru)",
            "english": "hotel",
            "category": "Katakana",
            "notes": "東京のホテル。",
            "romaji": "hoteru"
        },
        {
            "japanese": "バス",
            "reading": "ばす (basu)",
            "english": "bus",
            "category": "Katakana",
            "notes": "バスに乗ります。",
            "romaji": "basu"
        },
        {
            "japanese": "タクシー",
            "reading": "たくしー (takushii)",
            "english": "taxi",
            "category": "Katakana",
            "notes": "タクシーを呼びます。",
            "romaji": "takushii"
        },
        {
            "japanese": "カメラ",
            "reading": "かめら (kamera)",
            "english": "camera",
            "category": "Katakana",
            "notes": "新しいカメラ。",
            "romaji": "kamera"
        },
        {
            "japanese": "コンピューター",
            "reading": "こんぴゅーたー (konpyuutaa)",
            "english": "computer",
            "category": "Katakana",
            "notes": "コンピューターを使います。",
            "romaji": "konpyuutaa"
        },
        {
            "japanese": "レストラン",
            "reading": "れすとらん (resutoran)",
            "english": "restaurant",
            "category": "Katakana",
            "notes": "おいしいレストラン。",
            "romaji": "resutoran"
        },
        {
            "japanese": "バナナ",
            "reading": "ばなな (banana)",
            "english": "banana",
            "category": "Katakana",
            "notes": "黄色いバナナ。",
            "romaji": "banana"
        },
        {
            "japanese": "トマト",
            "reading": "とまと (tomato)",
            "english": "tomato",
            "category": "Katakana",
            "notes": "赤いトマト。",
            "romaji": "tomato"
        },
        {
            "japanese": "ピザ",
            "reading": "ぴざ (piza)",
            "english": "pizza",
            "category": "Katakana",
            "notes": "ピザを食べます。",
            "romaji": "piza"
        },
        {
            "japanese": "ケーキ",
            "reading": "けーき (keeki)",
            "english": "cake",
            "category": "Katakana",
            "notes": "甘いケーキ。",
            "romaji": "keeki"
        },
        {
            "japanese": "ミルク",
            "reading": "みるく (miruku)",
            "english": "milk",
            "category": "Katakana",
            "notes": "冷たいミルク。",
            "romaji": "miruku"
        },
        {
            "japanese": "テレビ",
            "reading": "てれび (terebi)",
            "english": "television",
            "category": "Katakana",
            "notes": "テレビを見ます。",
            "romaji": "terebi"
        },
        {
            "japanese": "エアコン",
            "reading": "えあこん (eakon)",
            "english": "air conditioner",
            "category": "Katakana",
            "notes": "エアコンをつけます。",
            "romaji": "eakon"
        },
        {
            "japanese": "ウイルス",
            "reading": "ういるす (uirusu)",
            "english": "virus",
            "category": "Katakana",
            "notes": "コンピューターウイルス。",
            "romaji": "uirusu"
        },
        {
            "japanese": "バイオリン",
            "reading": "ばいおりん (baiorin)",
            "english": "violin",
            "category": "Katakana",
            "notes": "バイオリンを弾きます。",
            "romaji": "baiorin"
        },
        {
            "japanese": "バージョン",
            "reading": "ばーじょん (baajon)",
            "english": "version",
            "category": "Katakana",
            "notes": "新しいバージョン。",
            "romaji": "baajon"
        },
        {
            "japanese": "ねこ",
            "reading": "ねこ (neko)",
            "english": "cat",
            "category": "Noun",
            "notes": "ねこはかわいい。",
            "romaji": "neko"
        },
        {
            "japanese": "かわいい",
            "reading": "かわいい (kawaii)",
            "english": "cute",
            "category": "Adjective",
            "notes": "ねこはかわいい。",
            "romaji": "kawaii"
        },
        {
            "japanese": "ぞう",
            "reading": "ぞう (zou)",
            "english": "elephant",
            "category": "Noun",
            "notes": "ぞうはおおきい。",
            "romaji": "zou"
        },
        {
            "japanese": "おおきい",
            "reading": "おおきい (ookii)",
            "english": "big",
            "category": "Adjective",
            "notes": "ぞうはおおきい。",
            "romaji": "ookii"
        },
        {
            "japanese": "いぬ",
            "reading": "いぬ (inu)",
            "english": "dog",
            "category": "Noun",
            "notes": "いぬはちいさい。",
            "romaji": "inu"
        },
        {
            "japanese": "ちいさい",
            "reading": "ちいさい (chiisai)",
            "english": "small",
            "category": "Adjective",
            "notes": "いぬはちいさい。",
            "romaji": "chiisai"
        },
        {
            "japanese": "あたま",
            "reading": "あたま (atama)",
            "english": "head",
            "category": "Noun",
            "notes": "あたまがいいね。",
            "romaji": "atama"
        },
        {
            "japanese": "りんご",
            "reading": "りんご (ringo)",
            "english": "apple",
            "category": "Noun",
            "notes": "りんごはあかい。",
            "romaji": "ringo"
        },
        {
            "japanese": "あかい",
            "reading": "あかい (akai)",
            "english": "red",
            "category": "Adjective",
            "notes": "りんごはあかい。",
            "romaji": "akai"
        },
        {
            "japanese": "そら",
            "reading": "そら (sora)",
            "english": "sky",
            "category": "Noun",
            "notes": "そらはあおい。",
            "romaji": "sora"
        },
        {
            "japanese": "あおい",
            "reading": "あおい (aoi)",
            "english": "blue",
            "category": "Adjective",
            "notes": "そらはあおい。",
            "romaji": "aoi"
        },
        {
            "japanese": "きょう",
            "reading": "きょう (kyou)",
            "english": "today",
            "category": "Noun",
            "notes": "きょうはあつい。",
            "romaji": "kyou"
        },
        {
            "japanese": "あつい",
            "reading": "あつい (atsui)",
            "english": "hot",
            "category": "Adjective",
            "notes": "きょうはあつい。",
            "romaji": "atsui"
        },
        {
            "japanese": "みず",
            "reading": "みず (mizu)",
            "english": "water",
            "category": "Noun",
            "notes": "みずはつめたい。",
            "romaji": "mizu"
        },
        {
            "japanese": "つめたい",
            "reading": "つめたい (tsumetai)",
            "english": "cold (to touch)",
            "category": "Adjective",
            "notes": "みずはつめたい。",
            "romaji": "tsumetai"
        },
        {
            "japanese": "ほん",
            "reading": "ほん (hon)",
            "english": "book",
            "category": "Noun",
            "notes": "ほんはおもしろい。",
            "romaji": "hon"
        },
        {
            "japanese": "おもしろい",
            "reading": "おもしろい (omoshiroi)",
            "english": "interesting",
            "category": "Adjective",
            "notes": "ほんはおもしろい。",
            "romaji": "omoshiroi"
        },
        {
            "japanese": "くるま",
            "reading": "くるま (kuruma)",
            "english": "car",
            "category": "Noun",
            "notes": "くるまははやい。",
            "romaji": "kuruma"
        },
        {
            "japanese": "はやい",
            "reading": "はやい (hayai)",
            "english": "fast",
            "category": "Adjective",
            "notes": "くるまははやい。",
            "romaji": "hayai"
        },
        {
            "japanese": "せんせい",
            "reading": "せんせい (sensei)",
            "english": "teacher",
            "category": "Noun",
            "notes": "せんせいはやさしい。",
            "romaji": "sensei"
        },
        {
            "japanese": "やさしい",
            "reading": "やさしい (yasashii)",
            "english": "kind",
            "category": "Adjective",
            "notes": "せんせいはやさしい。",
            "romaji": "yasashii"
        },
        {
            "japanese": "にほんご",
            "reading": "にほんご (nihongo)",
            "english": "Japanese",
            "category": "Noun",
            "notes": "にほんごはたのしい。",
            "romaji": "nihongo"
        },
        {
            "japanese": "たのしい",
            "reading": "たのしい (tanoshii)",
            "english": "fun",
            "category": "Adjective",
            "notes": "にほんごはたのしい。",
            "romaji": "tanoshii"
        },
        {
            "japanese": "やま",
            "reading": "やま (yama)",
            "english": "mountain",
            "category": "Noun",
            "notes": "やまはたかい。",
            "romaji": "yama"
        },
        {
            "japanese": "たかい",
            "reading": "たかい (takai)",
            "english": "high, tall",
            "category": "Adjective",
            "notes": "やまはたかい。",
            "romaji": "takai"
        },
        {
            "japanese": "うみ",
            "reading": "うみ (umi)",
            "english": "sea",
            "category": "Noun",
            "notes": "うみはひろい。",
            "romaji": "umi"
        },
        {
            "japanese": "ひろい",
            "reading": "ひろい (hiroi)",
            "english": "wide, spacious",
            "category": "Adjective",
            "notes": "うみはひろい。",
            "romaji": "hiroi"
        },
        {
            "japanese": "はな",
            "reading": "はな (hana)",
            "english": "flower",
            "category": "Noun",
            "notes": "はなはきれい。",
            "romaji": "hana"
        },
        {
            "japanese": "きれい",
            "reading": "きれい (kirei)",
            "english": "pretty, clean",
            "category": "Adjective",
            "notes": "はなはきれい。",
            "romaji": "kirei"
        },
        {
            "japanese": "わたし",
            "reading": "わたし (watashi)",
            "english": "I, me",
            "category": "Noun",
            "notes": "わたしはげんき。",
            "romaji": "watashi"
        },
        {
            "japanese": "げんき",
            "reading": "げんき (genki)",
            "english": "healthy, energetic",
            "category": "Noun",
            "notes": "わたしはげんき。",
            "romaji": "genki"
        },
        {
            "japanese": "あさ",
            "reading": "あさ (asa)",
            "english": "morning",
            "category": "Noun",
            "notes": "あさですね。",
            "romaji": "asa"
        },
        {
            "japanese": "あした",
            "reading": "あした (ashita)",
            "english": "tomorrow",
            "category": "Noun",
            "notes": "あしたあいます。",
            "romaji": "ashita"
        },
        {
            "japanese": "ともだち",
            "reading": "ともだち (tomodachi)",
            "english": "friend",
            "category": "Noun",
            "notes": "ともだちがすき。",
            "romaji": "tomodachi"
        },
        {
            "japanese": "よくできました",
            "reading": "よくできました (yokudekimashita)",
            "english": "well done",
            "category": "Phrase",
            "notes": "よくできました！",
            "romaji": "yokudekimashita"
        }
    ],
    "grammarNotes": [
        {
            "title": "The 5 Universal Stroke Order Rules (筆順)",
            "structure": "",
            "explanation": "Writing kanji in correct stroke order produces neat, balanced proportions and matches Japanese muscle memory:",
            "examples": [
                {
                    "japanese": "1. 上から下へ (Top to bottom)",
                    "reading": "ue kara shita e",
                    "english": "e.g. 三, 言",
                    "romaji": "ue kara shita e"
                },
                {
                    "japanese": "2. 左から右へ (Left to right)",
                    "reading": "hidari kara migi e",
                    "english": "e.g. 川, 州",
                    "romaji": "hidari kara migi e"
                },
                {
                    "japanese": "3. 横が先、縦が後 (Horizontal before vertical)",
                    "reading": "yoko ga saki, tate ga ato",
                    "english": "e.g. 十",
                    "romaji": "yoko ga saki, tate ga ato"
                },
                {
                    "japanese": "4. 外側から内側へ (Outside before inside)",
                    "reading": "sotogawa kara uchigawa e",
                    "english": "e.g. 四, 国, 風",
                    "romaji": "sotogawa kara uchigawa e"
                },
                {
                    "japanese": "5. 左・上パーツが先 (Top/Left components first)",
                    "reading": "hidari/ue paatsu ga saki",
                    "english": "e.g. 話, 校",
                    "romaji": "hidari/ue paatsu ga saki"
                }
            ]
        },
        {
            "title": "Pronunciation Secret: The Japanese 'R' Sound",
            "structure": "",
            "explanation": "Japanese ら・り・る・れ・ろ is neither English R nor English L. It is a light flap (alveolar tap) where the tongue tip taps the bump behind your upper teeth once. Do not round your lips like English R!",
            "examples": [
                {
                    "japanese": "りんご",
                    "reading": "ringo",
                    "english": "Apple (light tongue tap, not 'rringo')",
                    "romaji": "ringo"
                },
                {
                    "japanese": "レストラン",
                    "reading": "resutoran",
                    "english": "Restaurant",
                    "romaji": "resutoran"
                }
            ]
        }
    ],
    "practiceQuiz": [
        {
            "question": "How do you produce the Japanese \"r\" sound (ら, り, る, れ, ろ / ra, ri, ru, re, ro)?",
            "options": [
                "Curl the tongue backward like English R",
                "Press the tongue flat against teeth like English L",
                "Lightly flick the tip of the tongue against the roof of the mouth",
                "Breathe through closed teeth like an H"
            ],
            "correct": "Lightly flick the tip of the tongue against the roof of the mouth",
            "explanation": "Japanese R is an alveolar tap, similar to the \"tt\" in American English \"butter\"."
        },
        {
            "question": "What is the stroke order rule for kanji like 十 (じゅう / jū - ten)?",
            "options": [
                "Vertical first, then horizontal",
                "Horizontal first, then vertical",
                "Top-left diagonal first",
                "Bottom dot first"
            ],
            "correct": "Horizontal first, then vertical",
            "explanation": "Standard kanji stroke order rule: horizontal strokes precede intersecting vertical strokes (横先縦後)."
        },
        {
            "question": "Which loanword means \"Air Conditioner\" in Katakana?",
            "options": [
                "クーラーボックス (kūrābokkusu / cooler box)",
                "エアコン (eakon / air conditioner)",
                "エアヒーター (eahītā / air heater)",
                "コンディショナー (kondishonā / conditioner)"
            ],
            "correct": "エアコン (eakon / air conditioner)",
            "explanation": "エアコン is a wasei-eigo contraction of \"air conditioner\"."
        },
        {
            "question": "What does \"あたま が いいね (atama ga ii ne)\" mean idiomatically?",
            "options": [
                "Your hair looks nice",
                "You are smart / clever",
                "You have a big head",
                "Your hat is pretty"
            ],
            "correct": "You are smart / clever",
            "explanation": "頭がいい (atama ga ii) literally translates to \"head is good\" and idiomatically means bright, clever, or smart."
        }
    ],
    "slides": [
        {
            "slideNumber": 1,
            "title": "Welcome to Nikki JP Class 404",
            "category": "Course Overview",
            "subtitle": "Foundations: Kana, Numbers & Kanji",
            "summary": "Kickstart your Japanese journey by mastering phonetics, stroke order laws, loanwords, and essential counting.",
            "bullets": [
                "Part 1: Hiragana & Furigana fundamentals",
                "Part 2: Pronunciation secrets (the alveolar R tap, nasal NG, bilabial F)",
                "Part 3: The 5 Universal Stroke Order Rules (筆順)",
                "Part 4: 20 foundational reading sentences",
                "Part 5: Katakana loanwords & contraction culture",
                "Part 6: Kanji numbers 1 to 10 & Hundred sound changes"
            ],
            "highlight": "With just 13 core kanji learned in this course, you can count up to 99,999,999 in Japanese!",
            "blocks": [
                [
                    "Nikki JP Class 404"
                ],
                [
                    "Foundations: Kana, Numbers & Kanji"
                ]
            ]
        },
        {
            "slideNumber": 2,
            "title": "Hiragana & Furigana (ひらがな・フリガナ)",
            "category": "Writing Systems",
            "subtitle": "Understanding the Japanese script hierarchy",
            "summary": "Japanese uses three scripts harmoniously. Hiragana forms the grammatical backbone, while Furigana acts as an accessibility guide.",
            "bullets": [
                "ひらがな (Hiragana): 46 cursive native characters used for grammar particles (は, が, を, に, で), verb endings, and native words.",
                "カタカナ (Katakana): Angular counterparts reserved for foreign loanwords, non-Japanese names, and onomatopoeia.",
                "フリガナ (Furigana): Small phonetic kana printed above or beside kanji to indicate its pronunciation."
            ],
            "highlight": "In books, manga, and menus, Furigana ensures you can read any kanji character even before you have memorized it.",
            "blocks": [
                [
                    "ひらがな (hiragana)",
                    "46 native phonetic characters"
                ],
                [
                    "フリガナ (furigana)",
                    "Small kana pronunciation guides placed above kanji"
                ]
            ]
        },
        {
            "slideNumber": 3,
            "title": "発音・Pronunciation (はつおん)",
            "category": "Phonetics",
            "subtitle": "N, M, NG, H sounds, and W",
            "summary": "Pronunciation focus points directly from Nikki's Class 404 Slide 3.",
            "bullets": [
                "N (ん)",
                "M",
                "NG",
                "H sounds",
                "W"
            ],
            "highlight": "Mastering the nasal transitions (N, M, NG) and breath airflow for H and W sounds.",
            "blocks": [
                [
                    "発音・",
                    "Pronunciation",
                    "はつ おん",
                    "N",
                    "M",
                    "NG",
                    "H sounds",
                    "W"
                ]
            ]
        },
        {
            "slideNumber": 4,
            "title": "The Japanese 'R' Secret: The Roof-of-Mouth Flick",
            "category": "Phonetics & Mouth Mechanics",
            "subtitle": "Neither an English 'R' nor an English 'L'",
            "summary": "The single biggest mistake English speakers make is curling the tongue for R or pressing flat for L.",
            "bullets": [
                "Japanese ら・り・る・れ・ろ (ra, ri, ru, re, ro) is an Alveolar Tap / Flap (ɾ).",
                "Mouth Mechanic: Flick the very tip of your tongue once against the alveolar ridge (the hard bump on the roof of your mouth just behind your upper teeth).",
                "Do NOT curl your tongue backward into your throat (English R).",
                "Do NOT hold your tongue flat against your front teeth (English L).",
                "It sounds almost like the quick 'tt' in American English 'butter' or 'water'!"
            ],
            "highlight": "Pro-tip: Say 'ladder-ladder-ladder' quickly. Notice where your tongue taps? That exact tap is the Japanese 'R'!",
            "blocks": [
                [
                    "L? R? Flick top of mouth — Neither R nor L!"
                ],
                [
                    "Alveolar Tap: tongue tip flicks once against the roof behind upper teeth"
                ],
                [
                    "Never curl the tongue (English R); never hold flat (English L)"
                ]
            ]
        },
        {
            "slideNumber": 5,
            "title": "The 5 Universal Stroke Order Rules (筆順)",
            "category": "Writing Mechanics",
            "subtitle": "The timeless geometry of Japanese characters",
            "summary": "Stroke order is not arbitrary etiquette; it ensures natural balance, speed, and muscle memory.",
            "bullets": [
                "Law 1: Top to Bottom (上から下へ / ue kara shita e) — Write upper parts first (e.g. 三, 言)",
                "Law 2: Left to Right (左から右へ / hidari kara migi e) — Flow from left components to right (e.g. 川, 州)",
                "Law 3: Horizontal before Vertical (横が先、縦が後 / yoko ga saki, tate ga ato) — Horizontal lines cross first, then vertical spear cuts down (e.g. 十)",
                "Law 4: Outside before Inside (外側から内側へ / sotogawa kara uchigawa e) — Build the box perimeter, fill the interior, then close the door (e.g. 四, 国, 風)",
                "Law 5: Center before Symmetry (中央が先 / chūō ga saki) — Draw the central spine first, then side wings (e.g. 水, 小)"
            ],
            "highlight": "Mastering Rule 3 (Horizontal before Vertical) makes writing kanji like 十, 土, and 木 effortless and structurally upright.",
            "blocks": [
                [
                    "Stroke order rules (筆順)"
                ],
                [
                    "1. Top → bottom | 2. Left → right | 3. Horizontal before vertical | 4. Outside → inside | 5. Center before symmetry"
                ]
            ]
        },
        {
            "slideNumber": 6,
            "title": "The 20 Foundational Practice Sentences",
            "category": "Reading Practice",
            "subtitle": "Natural adjectives, particles & nouns in action",
            "summary": "Read 20 natural Japanese sentences aloud to anchor sentence rhythm and core vocabulary.",
            "bullets": [
                "Sentences 1–5: ねこ は かわいい (neko wa kawaii / Cats are cute) · ぞう は おおきい (zō wa ookii / Elephants are big) · いぬ は ちいさい (inu wa chiisai / Dogs are small) · あたま が いいね (atama ga ii ne / You're smart!) · りんご は あかい (ringo wa akai / Apples are red)",
                "Sentences 6–10: そら は あおい (sora wa aoi / Sky is blue) · きょう は あつい (kyō wa atsui / Today is hot) · みず は つめたい (mizu wa tsumetai / Water is cold) · ごはん は おいしい (gohan wa oishii / Meal is delicious) · こうちゃ が すきです (kōcha ga suki desu / I like black tea)",
                "Sentences 11–15: うみ は ひろい (umi wa hiroi / Ocean is vast) · やま は たかい (yama wa takai / Mountain is tall) · くるま は はやい (kuruma wa hayai / Car is fast) · あるく のは おそい (aruku no wa osoi / Walking is slow) · この ほん は おもしろい (kono hon wa omoshiroi / This book is interesting)",
                "Sentences 16–20: あの ひと は やさしい (ano hito wa yasashii / That person is kind) · きょう は いい てんき (kyō wa ii tenki / Nice weather today) · かんじ は むずかしい (kanji wa muzukashii / Kanji is difficult) · あした は やすみです (ashita wa yasumi desu / Tomorrow is off) · よく できました (yoku dekimashita / Well done!)"
            ],
            "highlight": "Notice the fundamental particle patterns: [Topic は Adjective] (りんごはあかい) and [Object が すきです] (こうちゃがすきです).",
            "blocks": [
                [
                    "20 Practice Sentences for Fluency"
                ],
                [
                    "Read aloud to lock in noun + particle + adjective structures"
                ]
            ]
        },
        {
            "slideNumber": 7,
            "title": "Katakana: 'Anything Not Japanese'",
            "category": "Writing Systems",
            "subtitle": "The visual cousins of Hiragana & Kanji",
            "summary": "Katakana is your shortcut to instant vocabulary because you already know thousands of English words!",
            "bullets": [
                "Purpose 1: Foreign loanwords (外来語) borrowed from English, German, Portuguese, French, etc.",
                "Purpose 2: Non-Japanese personal names and foreign place names.",
                "Purpose 3: Animal sounds and vivid sound effects (onomatopoeia).",
                "Purpose 4: Visual emphasis (similar to italics in English)."
            ],
            "highlight": "Over 10% of modern spoken Japanese consists of Katakana loanwords. If you can read Katakana, you already know thousands of Japanese terms!",
            "blocks": [
                [
                    "カタカナ (katakana)"
                ],
                [
                    "Used for foreign loanwords, names, onomatopoeia, and stylistic emphasis"
                ]
            ]
        },
        {
            "slideNumber": 8,
            "title": "The 12 Katakana Loanwords (From Nikki's Slide)",
            "category": "Katakana Loanwords",
            "subtitle": "The 12 words taught in Class 404 Slide 8",
            "summary": "The exact 12 Katakana loanwords presented on Nikki's Class 404 Slide 8.",
            "bullets": [
                "Coffee → コーヒー (koohii)",
                "Hotel → ホテル (hoteru)",
                "Bus → バス (basu)",
                "Taxi → タクシー (takushii)",
                "Camera → カメラ (kamera)",
                "Computer → コンピューター (konpyuutaa)",
                "Restaurant → レストラン (resutoran)",
                "Banana → バナナ (banana)",
                "Tomato → トマト (tomato)",
                "Pizza → ピザ (piza)",
                "Cake → ケーキ (keeki)",
                "Milk → ミルク (miruku)"
            ],
            "highlight": "These 12 words appear directly on Nikki's Class 404 slide.",
            "blocks": [
                [
                    "Coffee",
                    "Hotel",
                    "Bus",
                    "Taxi",
                    "Camera",
                    "Computer",
                    "Restaurant",
                    "Banana",
                    "Tomato",
                    "Pizza",
                    "Cake",
                    "Milk"
                ]
            ]
        },
        {
            "slideNumber": 9,
            "title": "Contraction Culture: The 4-Mora Rule",
            "category": "Katakana Loanwords",
            "subtitle": "Why Japanese loves 4-beat portmanteaus",
            "summary": "Long foreign compound words are almost always contracted down to a crisp 4-mora / 2-beat cadence.",
            "bullets": [
                "TeleVision (テレビジョン) → テレビ (terebi) [4 characters / 2 pairs]",
                "Air Conditioner (エアーコンディショナー) → エアコン (eakon) [4 moras]",
                "Convenience Store (コンビニエンスストア) → コンビニ (konbini)",
                "Smartphone (スマートフォーン) → スマホ (sumaho)",
                "Personal Computer (パーソナルコンピューター) → パソコン (pasokon)"
            ],
            "highlight": "Japanese ear finds 4-mora rhythms naturally catchy and balanced. When a foreign word is too long, it gets clipped!",
            "blocks": [
                [
                    "Contraction Culture in Loanwords"
                ],
                [
                    "TeleVision → テレビ (terebi) | Air Conditioner → エアコン (eakon)"
                ]
            ]
        },
        {
            "slideNumber": 10,
            "title": "The Bilabial 'F': HIT vs FIT",
            "category": "Phonetics & Mouth Mechanics",
            "subtitle": "Why Japanese has no lip-biting 'F'",
            "summary": "Japanese ふ (fu) is a bilabial fricative (ɸ)—blown gently between relaxed lips without upper teeth.",
            "bullets": [
                "English 'F': Lower lip tucked against upper teeth (labiodental).",
                "Japanese 'ふ': Form lips as if gently blowing out a birthday candle without biting your lip.",
                "In Japanese, 'HIT' (ヒット) and 'FIT' (フィット) feel distinct:",
                "  • ひ (hi) is articulated toward the hard palate.",
                "  • ふ (fu) is articulated softly at the lips.",
                "Foreign 'F' words use small vowels: ファ (fa), フィ (fi), フェ (fe), フォ (fo)."
            ],
            "highlight": "Never bite your bottom lip when saying ふ (fu) or ファ (fa). Let the air glide smoothly between both lips!",
            "blocks": [
                [
                    "F Sounds: Bilabial Fricative"
                ],
                [
                    "Blow air softly between both lips without touching teeth | HIT vs FIT"
                ]
            ]
        },
        {
            "slideNumber": 11,
            "title": "だくてん (Dakuten 「゛」) & The 'V' Dilemma",
            "category": "Phonetics & Sound Shifts",
            "subtitle": "Voicing transforms and modern sound innovations",
            "summary": "Dakuten marks turn voiceless consonants into voiced ones, and Japanese evolved to capture modern 'V' sounds.",
            "bullets": [
                "Dakuten transforms: K → G (か→が), S → Z (さ→ざ), T → D (た→だ), H → B (は→ば).",
                "Handakuten transforms: H → P (は→ぱ).",
                "The 'V' sound in Japanese: Classical Japanese had no 'V', so loanwords historically converted V to B:",
                "  • VIRUS → ウイルス (uirusu, borrowed via German/Latin) or ヴァイラス",
                "  • VIOLIN → バイオリン (baiorin) or ヴァイオリン (vaiorin)",
                "  • VERSION → バージョン (baajon)"
            ],
            "highlight": "In modern Japanese, you can write 'V' using ヴ (U with dakuten) + small kana: ヴァ (va), ヴィ (vi), ヴ (vu), ヴェ (ve), ヴォ (vo)!",
            "blocks": [
                [
                    "だくてん – Dakuten 「゛」 & Handakuten 「゜」"
                ],
                [
                    "Voiced transformations (K→G, S→Z, T→D, H→B) and the evolution of 'V' (ウイルス, バイオリン, バージョン)"
                ]
            ]
        },
        {
            "slideNumber": 12,
            "title": "Visual Character DNA (Kana vs Kanji Twins)",
            "category": "Writing Systems",
            "subtitle": "Seeing the shared historical roots of kana and kanji",
            "summary": "Hiragana and Katakana are both simplified shorthand derivations of ancient Chinese characters.",
            "bullets": [
                "か (Hiragana) vs カ (Katakana) vs 力 (Kanji: 'chikara' / power)",
                "た (Hiragana) vs タ (Katakana) vs 夕 (Kanji: 'yuu' / evening)",
                "に (Hiragana) vs ニ (Katakana) vs 二 (Kanji: 'ni' / two)",
                "Similar visual architectures: 予 (preview / yo) vs 祭 (festival / matsuri)"
            ],
            "highlight": "Notice how Katakana uses the sharp geometric corners of kanji, while Hiragana flows in rounded cursive brush strokes from the same origins!",
            "blocks": [
                [
                    "Character Similarities & DNA"
                ],
                [
                    "か (Hira) vs カ (Kata) vs 力 (Kanji: power) | た vs タ vs 夕 | に vs ニ vs 二"
                ]
            ]
        },
        {
            "slideNumber": 13,
            "title": "Kanji Numbers 1 to 10 (漢字・数字)",
            "category": "Kanji & Numbers",
            "subtitle": "Counting up to 99,999,999 with 13 kanji",
            "summary": "Master the digits 1 through 10, their context-dependent readings, and scale units (百, 千, 万).",
            "bullets": [
                "一 (1 - ichi), 二 (2 - ni), 三 (3 - san), 四 (4 - yon / shi), 五 (5 - go)",
                "六 (6 - roku), 七 (7 - nana / shichi), 八 (8 - hachi), 九 (9 - kyuu / ku), 十 (10 - juu)",
                "Context Shift 4: 'よん' (standard) vs 'し' (formal/calendar) vs 'よ' (in time: よじ = 4:00)",
                "Context Shift 7: 'なな' (standard) vs 'しち' (in time: しちじ = 7:00)",
                "Context Shift 9: 'きゅう' (standard) vs 'く' (in time: くじ = 9:00, in month: くがつ = Sept)"
            ],
            "highlight": "Avoid saying 'しじ' or 'yonji' for 4:00—it is always よじ (yoji). And 9:00 is always くじ (kuji)!",
            "blocks": [
                [
                    "漢字・数字 (Numbers 1–10)"
                ],
                [
                    "一 二 三 四 五 六 七 八 九 十 | Scalers: 百 (100), 千 (1,000), 万 (10,000)"
                ]
            ]
        },
        {
            "slideNumber": 14,
            "title": "Number Reading Drills & The 3 Hundred Sound Shifts",
            "category": "Kanji & Numbers",
            "subtitle": "Two-digit combinations & irregular readings for 百 (100)",
            "summary": "Combine tens and units cleanly, and master the 3 phonetic sound shifts when counting hundreds.",
            "bullets": [
                "Two-digit drills: 21 (二十一 / nijūichi), 32 (三十二 / sanjūni), 49 (四十九 / yonjūkyū), 57 (五十七 / gojūnana), 66 (六十六 / rokujūroku), 70 (七十 / nanajū), 83 (八十三 / hachijūsan), 94 (九十四 / kyūjūyon)",
                "Hundreds drills: 100 (百・ひゃく / hyaku), 220 (二百二十 / nihyaku nijū), 513 (五百十三 / gohyaku jūsanchi), 978 (九百七十八 / kyūhyaku nanajūhachi)",
                "The 3 Irregular Hundred (百 / hyaku) Sound Shifts:",
                "  1. 300 = 三百 → さん + びゃく (B sound change: san-byaku)",
                "  2. 600 = 六百 → ろっ + ぴゃく (P sound change + gemination: ro-ppyaku)",
                "  3. 800 = 八百 → はっ + ぴゃく (P sound change + gemination: ha-ppyaku)"
            ],
            "highlight": "Notice: 100, 200, 400, 500, 700, 900 use regular 'ひゃく'. Only 300 (びゃく), 600 (ぴゃく), and 800 (ぴゃく) shift!",
            "blocks": [
                [
                    "Number Drills & Hundred Sound Changes (音便)"
                ],
                [
                    "300: さんびゃく | 600: ろっぴゃく | 800: はっぴゃく"
                ]
            ]
        },
        {
            "slideNumber": 15,
            "title": "Day 1 Action Plan: Daily Practice & Phone Drills",
            "category": "Practice & Wrap Up",
            "subtitle": "How to lock in Day 1 learnings for good",
            "summary": "Consolidate today's fundamentals through active recall, phone keyboard practice, and spaced repetition.",
            "bullets": [
                "Step 1: Set your phone keyboard to Japanese 12-key (flick input) or QWERTY romaji input.",
                "Step 2: Practice typing the 20 practice sentences and 14 loanwords.",
                "Step 3: Test yourself on the 3 Hundred sound shifts (300, 600, 800).",
                "Step 4: Complete the Day 1 Practice Quiz to earn +50 XP!"
            ],
            "highlight": "Flick typing in Japanese builds incredible muscle memory for character families (e.g. flicking 'あ' left for 'い', up for 'う', right for 'え', down for 'お')!",
            "blocks": [
                [
                    "Practice on the Phone & Daily Action Plan"
                ],
                [
                    "Install Japanese keyboard | Drill 20 sentences | Complete Day 1 Quiz"
                ]
            ]
        }
    ],
    "readingPassages": [
        {
            "title": "20 Foundational Practice Sentences · Part 1 (Sentences 1–10)",
            "text": "ねこ は かわいい です。\nぞう は おおきい です。\nいぬ は ちいさい です。\nあたま が いい ね。\nりんご は あかい です。\nそら は あおい です。\nきょう は あつい です。\nみず は つめたい です。\nごはん は おいしい です。\nこうちゃ が すき です。",
            "translation": "Cats are cute.\nElephants are big.\nDogs are small.\nYou are clever / smart!\nApples are red.\nThe sky is blue.\nToday is hot.\nWater is cold (to the touch).\nThe meal / rice is delicious.\nI like black tea.",
            "questions": [
                {
                    "q": "りんごは何色ですか？ (Ringo wa nani-iro desu ka? / What color is the apple?)",
                    "a": "あかい（赤）です。(Akai desu. / It is red.)"
                },
                {
                    "q": "みずはどうですか？ (Mizu wa dō desu ka? / How is the water?)",
                    "a": "つめたい（冷たい）です。(Tsumetai desu. / It is cold.)"
                },
                {
                    "q": "何が好きですか？ (Nani ga suki desu ka? / What do you like?)",
                    "a": "こうちゃ（紅茶）が好きです。(Kōcha ga suki desu. / I like black tea.)"
                }
            ],
            "romaji": "1. Neko wa kawaii desu.\n2. Zou wa ookii desu.\n3. Inu wa chiisai desu.\n4. Atama ga ii ne.\n5. Ringo wa akai desu.\n6. Sora wa aoi desu.\n7. Kyou wa atsui desu.\n8. Mizu wa tsumetai desu.\n9. Gohan wa oishii desu.\n10. Koucha ga suki desu."
        },
        {
            "title": "20 Foundational Practice Sentences · Part 2 (Sentences 11–20)",
            "text": "うみ は ひろい です。\nやま は たかい です。\nくるま は はやい です。\nあるく のは おそい です。\nこの ほん は おもしろい です。\nあの ひと は やさしい です。\nきょう は いい てんき です。\nかんじ は むずかしい です。\nあした は やすみ です。\nよく できました！",
            "translation": "The ocean is vast.\nThe mountain is tall.\nThe car is fast.\nWalking is slow.\nThis book is interesting.\nThat person is kind.\nToday has nice weather.\nKanji is difficult.\nTomorrow is a day off.\nWell done! (Great job!)",
            "questions": [
                {
                    "q": "やまはどうですか？ (Yama wa dō desu ka? / How is the mountain?)",
                    "a": "たかい（高い）です。(Takai desu. / It is tall/high.)"
                },
                {
                    "q": "あしたは何ですか？ (Ashita wa nan desu ka? / What is tomorrow?)",
                    "a": "やすみ（休み）です。(Yasumi desu. / It is a holiday/day off.)"
                },
                {
                    "q": "この本はどうですか？ (Kono hon wa dō desu ka? / How is this book?)",
                    "a": "おもしろい（面白い）です。(Omoshiroi desu. / It is interesting.)"
                }
            ],
            "romaji": "11. Umi wa hiroi desu.\n12. Yama wa takai desu.\n13. Kuruma wa hayai desu.\n14. Aruku no wa osoi desu.\n15. Kono hon wa omoshiroi desu.\n16. Ano hito wa yasashii desu.\n17. Kyou wa ii tenki desu.\n18. Kanji wa muzukashii desu.\n19. Ashita wa yasumi desu.\n20. Yoku dekimashita!"
        }
    ],
    "vocabulary": [
        {
            "id": "v1-1",
            "kanji": "コーヒー",
            "furigana": "こーひー",
            "romaji": "koohii",
            "english": "coffee",
            "type": "Katakana",
            "example": "コーヒーを飲みます。"
        },
        {
            "id": "v1-2",
            "kanji": "ホテル",
            "furigana": "ほてる",
            "romaji": "hoteru",
            "english": "hotel",
            "type": "Katakana",
            "example": "東京のホテル。"
        },
        {
            "id": "v1-3",
            "kanji": "バス",
            "furigana": "ばす",
            "romaji": "basu",
            "english": "bus",
            "type": "Katakana",
            "example": "バスに乗ります。"
        },
        {
            "id": "v1-4",
            "kanji": "タクシー",
            "furigana": "たくしー",
            "romaji": "takushii",
            "english": "taxi",
            "type": "Katakana",
            "example": "タクシーを呼びます。"
        },
        {
            "id": "v1-5",
            "kanji": "カメラ",
            "furigana": "かめら",
            "romaji": "kamera",
            "english": "camera",
            "type": "Katakana",
            "example": "新しいカメラ。"
        },
        {
            "id": "v1-6",
            "kanji": "コンピューター",
            "furigana": "こんぴゅーたー",
            "romaji": "konpyuutaa",
            "english": "computer",
            "type": "Katakana",
            "example": "コンピューターを使います。"
        },
        {
            "id": "v1-7",
            "kanji": "レストラン",
            "furigana": "れすとらん",
            "romaji": "resutoran",
            "english": "restaurant",
            "type": "Katakana",
            "example": "おいしいレストラン。"
        },
        {
            "id": "v1-8",
            "kanji": "バナナ",
            "furigana": "ばなな",
            "romaji": "banana",
            "english": "banana",
            "type": "Katakana",
            "example": "黄色いバナナ。"
        },
        {
            "id": "v1-9",
            "kanji": "トマト",
            "furigana": "とまと",
            "romaji": "tomato",
            "english": "tomato",
            "type": "Katakana",
            "example": "赤いトマト。"
        },
        {
            "id": "v1-10",
            "kanji": "ピザ",
            "furigana": "ぴざ",
            "romaji": "piza",
            "english": "pizza",
            "type": "Katakana",
            "example": "ピザを食べます。"
        },
        {
            "id": "v1-11",
            "kanji": "ケーキ",
            "furigana": "けーき",
            "romaji": "keeki",
            "english": "cake",
            "type": "Katakana",
            "example": "甘いケーキ。"
        },
        {
            "id": "v1-12",
            "kanji": "ミルク",
            "furigana": "みるく",
            "romaji": "miruku",
            "english": "milk",
            "type": "Katakana",
            "example": "冷たいミルク。"
        },
        {
            "id": "v1-13",
            "kanji": "テレビ",
            "furigana": "てれび",
            "romaji": "terebi",
            "english": "television",
            "type": "Katakana",
            "example": "テレビを見ます。"
        },
        {
            "id": "v1-14",
            "kanji": "エアコン",
            "furigana": "えあこん",
            "romaji": "eakon",
            "english": "air conditioner",
            "type": "Katakana",
            "example": "エアコンをつけます。"
        },
        {
            "id": "v1-15",
            "kanji": "ウイルス",
            "furigana": "ういるす",
            "romaji": "uirusu",
            "english": "virus",
            "type": "Katakana",
            "example": "コンピューターウイルス。"
        },
        {
            "id": "v1-16",
            "kanji": "バイオリン",
            "furigana": "ばいおりん",
            "romaji": "baiorin",
            "english": "violin",
            "type": "Katakana",
            "example": "バイオリンを弾きます。"
        },
        {
            "id": "v1-17",
            "kanji": "バージョン",
            "furigana": "ばーじょん",
            "romaji": "baajon",
            "english": "version",
            "type": "Katakana",
            "example": "新しいバージョン。"
        },
        {
            "id": "v1-18",
            "kanji": "ねこ",
            "furigana": "ねこ",
            "romaji": "neko",
            "english": "cat",
            "type": "Noun",
            "example": "ねこはかわいい。"
        },
        {
            "id": "v1-19",
            "kanji": "かわいい",
            "furigana": "かわいい",
            "romaji": "kawaii",
            "english": "cute",
            "type": "Adjective",
            "example": "ねこはかわいい。"
        },
        {
            "id": "v1-20",
            "kanji": "ぞう",
            "furigana": "ぞう",
            "romaji": "zou",
            "english": "elephant",
            "type": "Noun",
            "example": "ぞうはおおきい。"
        },
        {
            "id": "v1-21",
            "kanji": "おおきい",
            "furigana": "おおきい",
            "romaji": "ookii",
            "english": "big",
            "type": "Adjective",
            "example": "ぞうはおおきい。"
        },
        {
            "id": "v1-22",
            "kanji": "いぬ",
            "furigana": "いぬ",
            "romaji": "inu",
            "english": "dog",
            "type": "Noun",
            "example": "いぬはちいさい。"
        },
        {
            "id": "v1-23",
            "kanji": "ちいさい",
            "furigana": "ちいさい",
            "romaji": "chiisai",
            "english": "small",
            "type": "Adjective",
            "example": "いぬはちいさい。"
        },
        {
            "id": "v1-24",
            "kanji": "あたま",
            "furigana": "あたま",
            "romaji": "atama",
            "english": "head",
            "type": "Noun",
            "example": "あたまがいいね。"
        },
        {
            "id": "v1-25",
            "kanji": "りんご",
            "furigana": "りんご",
            "romaji": "ringo",
            "english": "apple",
            "type": "Noun",
            "example": "りんごはあかい。"
        },
        {
            "id": "v1-26",
            "kanji": "あかい",
            "furigana": "あかい",
            "romaji": "akai",
            "english": "red",
            "type": "Adjective",
            "example": "りんごはあかい。"
        },
        {
            "id": "v1-27",
            "kanji": "そら",
            "furigana": "そら",
            "romaji": "sora",
            "english": "sky",
            "type": "Noun",
            "example": "そらはあおい。"
        },
        {
            "id": "v1-28",
            "kanji": "あおい",
            "furigana": "あおい",
            "romaji": "aoi",
            "english": "blue",
            "type": "Adjective",
            "example": "そらはあおい。"
        },
        {
            "id": "v1-29",
            "kanji": "きょう",
            "furigana": "きょう",
            "romaji": "kyou",
            "english": "today",
            "type": "Noun",
            "example": "きょうはあつい。"
        },
        {
            "id": "v1-30",
            "kanji": "あつい",
            "furigana": "あつい",
            "romaji": "atsui",
            "english": "hot",
            "type": "Adjective",
            "example": "きょうはあつい。"
        },
        {
            "id": "v1-31",
            "kanji": "みず",
            "furigana": "みず",
            "romaji": "mizu",
            "english": "water",
            "type": "Noun",
            "example": "みずはつめたい。"
        },
        {
            "id": "v1-32",
            "kanji": "つめたい",
            "furigana": "つめたい",
            "romaji": "tsumetai",
            "english": "cold (to touch)",
            "type": "Adjective",
            "example": "みずはつめたい。"
        },
        {
            "id": "v1-33",
            "kanji": "ほん",
            "furigana": "ほん",
            "romaji": "hon",
            "english": "book",
            "type": "Noun",
            "example": "ほんはおもしろい。"
        },
        {
            "id": "v1-34",
            "kanji": "おもしろい",
            "furigana": "おもしろい",
            "romaji": "omoshiroi",
            "english": "interesting",
            "type": "Adjective",
            "example": "ほんはおもしろい。"
        },
        {
            "id": "v1-35",
            "kanji": "くるま",
            "furigana": "くるま",
            "romaji": "kuruma",
            "english": "car",
            "type": "Noun",
            "example": "くるまははやい。"
        },
        {
            "id": "v1-36",
            "kanji": "はやい",
            "furigana": "はやい",
            "romaji": "hayai",
            "english": "fast",
            "type": "Adjective",
            "example": "くるまははやい。"
        },
        {
            "id": "v1-37",
            "kanji": "せんせい",
            "furigana": "せんせい",
            "romaji": "sensei",
            "english": "teacher",
            "type": "Noun",
            "example": "せんせいはやさしい。"
        },
        {
            "id": "v1-38",
            "kanji": "やさしい",
            "furigana": "やさしい",
            "romaji": "yasashii",
            "english": "kind",
            "type": "Adjective",
            "example": "せんせいはやさしい。"
        },
        {
            "id": "v1-39",
            "kanji": "にほんご",
            "furigana": "にほんご",
            "romaji": "nihongo",
            "english": "Japanese",
            "type": "Noun",
            "example": "にほんごはたのしい。"
        },
        {
            "id": "v1-40",
            "kanji": "たのしい",
            "furigana": "たのしい",
            "romaji": "tanoshii",
            "english": "fun",
            "type": "Adjective",
            "example": "にほんごはたのしい。"
        },
        {
            "id": "v1-41",
            "kanji": "やま",
            "furigana": "やま",
            "romaji": "yama",
            "english": "mountain",
            "type": "Noun",
            "example": "やまはたかい。"
        },
        {
            "id": "v1-42",
            "kanji": "たかい",
            "furigana": "たかい",
            "romaji": "takai",
            "english": "high, tall",
            "type": "Adjective",
            "example": "やまはたかい。"
        },
        {
            "id": "v1-43",
            "kanji": "うみ",
            "furigana": "うみ",
            "romaji": "umi",
            "english": "sea",
            "type": "Noun",
            "example": "うみはひろい。"
        },
        {
            "id": "v1-44",
            "kanji": "ひろい",
            "furigana": "ひろい",
            "romaji": "hiroi",
            "english": "wide, spacious",
            "type": "Adjective",
            "example": "うみはひろい。"
        },
        {
            "id": "v1-45",
            "kanji": "はな",
            "furigana": "はな",
            "romaji": "hana",
            "english": "flower",
            "type": "Noun",
            "example": "はなはきれい。"
        },
        {
            "id": "v1-46",
            "kanji": "きれい",
            "furigana": "きれい",
            "romaji": "kirei",
            "english": "pretty, clean",
            "type": "Adjective",
            "example": "はなはきれい。"
        },
        {
            "id": "v1-47",
            "kanji": "わたし",
            "furigana": "わたし",
            "romaji": "watashi",
            "english": "I, me",
            "type": "Noun",
            "example": "わたしはげんき。"
        },
        {
            "id": "v1-48",
            "kanji": "げんき",
            "furigana": "げんき",
            "romaji": "genki",
            "english": "healthy, energetic",
            "type": "Noun",
            "example": "わたしはげんき。"
        },
        {
            "id": "v1-49",
            "kanji": "あさ",
            "furigana": "あさ",
            "romaji": "asa",
            "english": "morning",
            "type": "Noun",
            "example": "あさですね。"
        },
        {
            "id": "v1-50",
            "kanji": "あした",
            "furigana": "あした",
            "romaji": "ashita",
            "english": "tomorrow",
            "type": "Noun",
            "example": "あしたあいます。"
        },
        {
            "id": "v1-51",
            "kanji": "ともだち",
            "furigana": "ともだち",
            "romaji": "tomodachi",
            "english": "friend",
            "type": "Noun",
            "example": "ともだちがすき。"
        },
        {
            "id": "v1-52",
            "kanji": "よくできました",
            "furigana": "よくできました",
            "romaji": "yoku dekimashita",
            "english": "well done",
            "type": "Phrase",
            "example": "よくできました！"
        }
    ],
    "kanji": [
        {
            "kanji": "一",
            "onyomi": "イチ",
            "kunyomi": "ひと(つ)",
            "meaning": "one",
            "strokes": 1,
            "examples": [
                "一つ",
                "一日"
            ]
        },
        {
            "kanji": "二",
            "onyomi": "ニ",
            "kunyomi": "ふた(つ)",
            "meaning": "two",
            "strokes": 2,
            "examples": [
                "二つ",
                "二日"
            ]
        },
        {
            "kanji": "三",
            "onyomi": "サン",
            "kunyomi": "みっ(つ)",
            "meaning": "three",
            "strokes": 3,
            "examples": [
                "三つ",
                "三日"
            ]
        },
        {
            "kanji": "四",
            "onyomi": "シ",
            "kunyomi": "よん・よっ(つ)",
            "meaning": "four",
            "strokes": 5,
            "examples": [
                "四つ",
                "四日"
            ]
        },
        {
            "kanji": "五",
            "onyomi": "ゴ",
            "kunyomi": "いつ(つ)",
            "meaning": "five",
            "strokes": 4,
            "examples": [
                "五つ",
                "五日"
            ]
        },
        {
            "kanji": "六",
            "onyomi": "ロク",
            "kunyomi": "むっ(つ)",
            "meaning": "six",
            "strokes": 4,
            "examples": [
                "六つ",
                "六日"
            ]
        },
        {
            "kanji": "七",
            "onyomi": "シチ",
            "kunyomi": "なな(つ)",
            "meaning": "seven",
            "strokes": 2,
            "examples": [
                "七つ",
                "七日"
            ]
        },
        {
            "kanji": "八",
            "onyomi": "ハチ",
            "kunyomi": "やっ(つ)",
            "meaning": "eight",
            "strokes": 2,
            "examples": [
                "八つ",
                "八日"
            ]
        },
        {
            "kanji": "九",
            "onyomi": "キュウ・ク",
            "kunyomi": "ここの(つ)",
            "meaning": "nine",
            "strokes": 2,
            "examples": [
                "九つ",
                "九日"
            ]
        },
        {
            "kanji": "十",
            "onyomi": "ジュウ",
            "kunyomi": "とお",
            "meaning": "ten",
            "strokes": 2,
            "examples": [
                "十",
                "十日"
            ]
        },
        {
            "kanji": "百",
            "onyomi": "ヒャク",
            "kunyomi": "もも",
            "meaning": "hundred",
            "strokes": 6,
            "examples": [
                "百",
                "三百",
                "六百",
                "八百"
            ]
        },
        {
            "kanji": "力",
            "onyomi": "リョク・リキ",
            "kunyomi": "ちから",
            "meaning": "power, strength",
            "strokes": 2,
            "examples": [
                "力"
            ]
        },
        {
            "kanji": "夕",
            "onyomi": "セキ",
            "kunyomi": "ゆう",
            "meaning": "evening",
            "strokes": 3,
            "examples": [
                "夕方"
            ]
        }
    ]
},
    {
    "id": "day-2",
    "dayNumber": 2,
    "classCode": "Class 414",
    "theme": "Theme: The Dog (犬), Native Breeds, Counters & Big Numbers",
    "japaneseTheme": "動物・助数詞とスライド読解 (Dōbutsu, josūshi to suraido dokkai)",
    "subtitle": "Class 414: Dogs (犬), small animal counters (一匹〜十匹) vs big animals (一頭), kanji evolution, and big numbers up to 10,000",
    "description": "Everything taught in Nikki's Class 414: The kanji 犬 and its look-alikes (人, 大, 犬, 太), small animal counter 匹 vs big animal counter 頭, counting dogs 1 to 10 with natural sound shifts, 10 practice sentences, Dog Day & Cat Day goroawase, and reading multi-digit numbers.",
    "badge": "Class 414 · Native Dogs & Counters",
    "goals": [
        "Learn the kanji 犬 (いぬ / inu - dog) and similar kanji: 人 (ひと / hito), 大 (おおきい / ookii), 犬 (いぬ / inu), 太 (ふとい / futoi)",
        "Know Japan has 6 native dog breeds, Shiba Inu (柴犬 / shiba inu), bark onomatopoeia ワンワン (wan wan), and Dog Fashion",
        "Know National Dog Day (Nov 1st: 11/1 = ワンワンワン / wan-wan-wan) and Cat Day (Feb 22nd: 2/22 = ニャンニャンニャン / nyan-nyan-nyan)",
        "Distinguish animal counters: 匹 (hiki - small animals: 犬 [inu], ねこ [neko], とり [tori]) vs 頭 (tō - large animals: うし [ushi], うま [uma])",
        "Master counting 1 to 10 with 匹 (いっぴき / ippiki, にひき / nihiki, さんびき / sanbiki, etc.) and sound shifts",
        "Read the 10 Class 414 reading sentences with complete Romaji and comprehension",
        "Read multi-digit numbers: 二十八 (nijūhachi - 28), 五十四 (gojūyon - 54), 百十 (hyakujū - 110), 六百 (roppyaku - 600), 七百 (nanahyaku - 700), 二千 (nisen - 2,000), 八千 (hassen - 8,000), 一万 (ichiman - 10,000), 七万七百七十七 (70,777), 九万三千十一 (93,011)"
    ],
    "keyHighlights": [
        "Kanji comparison from slide: 人 (ひと / hito - Person) -> 大 (おおきい / ookii - Big) -> 犬 (いぬ / inu · ケン / ken - Dog) -> 太 (ふとい / futoi - Thick)",
        "Dog counter rules from slide: Small Animal = 一匹 (いっぴき / ippiki), Big Animal = 一頭 (いっとう / ittou). Dogs use 一匹!",
        "Slide 8 animal sorting: うし (ushi) -> 一頭 (ittou), ねこ (neko) -> 一匹 (ippiki), うま (uma) -> 一頭 (ittou), とり (tori) -> 一匹 (ippiki)",
        "National Dog Day is Nov 1st (11/1, 1 is \"ワン (wan)\") and Cat Day is Feb 22nd (2/22, cats say \"ニャ (nya)\")",
        "Numbers from slide: 28 (二十八 / nijūhachi), 54 (五十四 / gojūyon), 700 (七百 / nanahyaku), 110 (百十 / hyakujū), 2,000 (二千 / nisen), 10,000 (一万 / ichiman), 93,011 (九万三千十一 / kyūman sanzen jūichi)"
    ],
    "kanjiList": [
        {
            "kanji": "犬",
            "meaning": "dog",
            "onyomi": "ケン (ken)",
            "kunyomi": "いぬ (inu)",
            "strokes": 4,
            "radical": "犬",
            "radicalClue": "Core element: 犬",
            "examples": [
                {
                    "word": "犬",
                    "reading": "いぬ (inu)",
                    "meaning": "dog",
                    "romaji": "inu"
                },
                {
                    "word": "柴犬",
                    "reading": "しばいぬ (shiba inu)",
                    "meaning": "Shiba Inu dog",
                    "romaji": "shiba inu"
                },
                {
                    "word": "愛犬",
                    "reading": "あいけん (aiken)",
                    "meaning": "pet dog",
                    "romaji": "aiken"
                },
                {
                    "word": "子犬",
                    "reading": "こいぬ (koinu)",
                    "meaning": "puppy",
                    "romaji": "koinu"
                }
            ]
        },
        {
            "kanji": "人",
            "meaning": "person",
            "onyomi": "ジン・ニン (jin / nin)",
            "kunyomi": "ひと (hito)",
            "strokes": 2,
            "radical": "人",
            "radicalClue": "Core element: 人",
            "examples": [
                {
                    "word": "人",
                    "reading": "ひと (hito)",
                    "meaning": "person",
                    "romaji": "hito"
                },
                {
                    "word": "日本人",
                    "reading": "にほんじん (nihonjin)",
                    "meaning": "Japanese person",
                    "romaji": "nihonjin"
                },
                {
                    "word": "あの人",
                    "reading": "あのひと (ano hito)",
                    "meaning": "that person",
                    "romaji": "ano hito"
                }
            ]
        },
        {
            "kanji": "大",
            "meaning": "big, large",
            "onyomi": "ダイ・タイ (dai / tai)",
            "kunyomi": "おお(きい) (oo(kii))",
            "strokes": 3,
            "radical": "大",
            "radicalClue": "Core element: 大",
            "examples": [
                {
                    "word": "大きい",
                    "reading": "おおきい (ookii)",
                    "meaning": "big / large",
                    "romaji": "ookii"
                },
                {
                    "word": "大学",
                    "reading": "だいがく (daigaku)",
                    "meaning": "university",
                    "romaji": "daigaku"
                }
            ]
        },
        {
            "kanji": "太",
            "meaning": "thick, fat",
            "onyomi": "タイ・タ (tai / ta)",
            "kunyomi": "ふと(い) (futo(i))",
            "strokes": 4,
            "radical": "太",
            "radicalClue": "Core element: 太",
            "examples": [
                {
                    "word": "太い",
                    "reading": "ふとい (futoi)",
                    "meaning": "thick / fat",
                    "romaji": "futoi"
                },
                {
                    "word": "太陽",
                    "reading": "たいよう (taiyou)",
                    "meaning": "sun",
                    "romaji": "taiyou"
                }
            ]
        },
        {
            "kanji": "匹",
            "meaning": "small animal counter",
            "onyomi": "ヒツ (hitsu)",
            "kunyomi": "ひき (hiki)",
            "strokes": 4,
            "radical": "匹",
            "radicalClue": "Core element: 匹",
            "examples": [
                {
                    "word": "一匹",
                    "reading": "いっぴき (ippiki)",
                    "meaning": "one small animal",
                    "romaji": "ippiki"
                },
                {
                    "word": "二匹",
                    "reading": "にひき (nihiki)",
                    "meaning": "two small animals",
                    "romaji": "nihiki"
                },
                {
                    "word": "三匹",
                    "reading": "さんびき (sanbiki)",
                    "meaning": "three small animals",
                    "romaji": "sanbiki"
                }
            ]
        },
        {
            "kanji": "頭",
            "meaning": "head, big animal counter",
            "onyomi": "トウ・ズ (tou / zu)",
            "kunyomi": "あたま・かしら (atama / kashira)",
            "strokes": 16,
            "radical": "頭",
            "radicalClue": "Core element: 頭",
            "examples": [
                {
                    "word": "一頭",
                    "reading": "いっとう (ittou)",
                    "meaning": "one large animal",
                    "romaji": "ittou"
                },
                {
                    "word": "頭",
                    "reading": "あたま (atama)",
                    "meaning": "head",
                    "romaji": "atama"
                }
            ]
        }
    ],
    "vocabularyList": [
        {
            "japanese": "犬",
            "reading": "いぬ (inu)",
            "english": "dog",
            "category": "Noun",
            "notes": "この犬はかわいい。",
            "romaji": "inu"
        },
        {
            "japanese": "柴犬",
            "reading": "しばいぬ (shibainu)",
            "english": "Shiba dog",
            "category": "Noun",
            "notes": "柴犬は日本の犬です。",
            "romaji": "shibainu"
        },
        {
            "japanese": "愛犬",
            "reading": "あいけん (aiken)",
            "english": "pet dog",
            "category": "Noun",
            "notes": "わたしの愛犬。",
            "romaji": "aiken"
        },
        {
            "japanese": "子犬",
            "reading": "こいぬ (koinu)",
            "english": "puppy",
            "category": "Noun",
            "notes": "子犬が走る。",
            "romaji": "koinu"
        },
        {
            "japanese": "ワンワン",
            "reading": "わんわん (wanwan)",
            "english": "woof woof (bark)",
            "category": "Onomatopoeia",
            "notes": "犬はワンワンといいます。",
            "romaji": "wanwan"
        },
        {
            "japanese": "犬の日",
            "reading": "いぬのひ (inunohi)",
            "english": "Day of the Dog (11/1)",
            "category": "Culture",
            "notes": "11月1日は犬の日です。",
            "romaji": "inunohi"
        },
        {
            "japanese": "猫の日",
            "reading": "ねこのひ (nekonohi)",
            "english": "Day of the Cat (2/22)",
            "category": "Culture",
            "notes": "2月22日は猫の日です。",
            "romaji": "nekonohi"
        },
        {
            "japanese": "ねこ",
            "reading": "ねこ (neko)",
            "english": "cat",
            "category": "Noun",
            "notes": "わたしはねこがすきです。",
            "romaji": "neko"
        },
        {
            "japanese": "うし",
            "reading": "うし (ushi)",
            "english": "cow",
            "category": "Noun",
            "notes": "うしが一頭います。",
            "romaji": "ushi"
        },
        {
            "japanese": "うま",
            "reading": "うま (uma)",
            "english": "horse",
            "category": "Noun",
            "notes": "うまが一頭います。",
            "romaji": "uma"
        },
        {
            "japanese": "とり",
            "reading": "とり (tori)",
            "english": "bird",
            "category": "Noun",
            "notes": "とりが一匹います。",
            "romaji": "tori"
        },
        {
            "japanese": "一匹",
            "reading": "いっぴき (ippiki)",
            "english": "one (small animal)",
            "category": "Counter",
            "notes": "ねこが一匹います。",
            "romaji": "ippiki"
        },
        {
            "japanese": "二匹",
            "reading": "にひき (nihiki)",
            "english": "two (small animals)",
            "category": "Counter",
            "notes": "犬が二匹います。",
            "romaji": "nihiki"
        },
        {
            "japanese": "三匹",
            "reading": "さんびき (sanbiki)",
            "english": "three (small animals)",
            "category": "Counter",
            "notes": "犬が三匹います。",
            "romaji": "sanbiki"
        },
        {
            "japanese": "四匹",
            "reading": "よんひき (yonhiki)",
            "english": "four (small animals)",
            "category": "Counter",
            "notes": "大きい犬が四匹います。",
            "romaji": "yonhiki"
        },
        {
            "japanese": "一頭",
            "reading": "いっとう (ittou)",
            "english": "one (large animal)",
            "category": "Counter",
            "notes": "うしが一頭います。",
            "romaji": "ittou"
        },
        {
            "japanese": "二十八",
            "reading": "にじゅうはち (nijuuhachi)",
            "english": "28",
            "category": "Number",
            "notes": "二十八人。",
            "romaji": "nijuuhachi"
        },
        {
            "japanese": "五十四",
            "reading": "ごじゅうよん (gojuuyon)",
            "english": "54",
            "category": "Number",
            "notes": "五十四円。",
            "romaji": "gojuuyon"
        },
        {
            "japanese": "七百",
            "reading": "ななひゃく (nanahyaku)",
            "english": "700",
            "category": "Number",
            "notes": "七百匹。",
            "romaji": "nanahyaku"
        },
        {
            "japanese": "百十",
            "reading": "ひゃくじゅう (hyakujuu)",
            "english": "110",
            "category": "Number",
            "notes": "百十円。",
            "romaji": "hyakujuu"
        },
        {
            "japanese": "二千",
            "reading": "にせん (nisen)",
            "english": "2,000",
            "category": "Number",
            "notes": "二千円。",
            "romaji": "nisen"
        },
        {
            "japanese": "一万",
            "reading": "いちまん (ichiman)",
            "english": "10,000",
            "category": "Number",
            "notes": "一万円。",
            "romaji": "ichiman"
        },
        {
            "japanese": "九万三千十一",
            "reading": "きゅうまんさんぜんじゅういち (kyuumansanzenjuuichi)",
            "english": "93,011",
            "category": "Number",
            "notes": "九万三千十一。",
            "romaji": "kyuumansanzenjuuichi"
        },
        {
            "japanese": "七万七百七十七",
            "reading": "ななまんななひゃくななじゅうなな (nanamannanahyakunanajuunana)",
            "english": "70,777",
            "category": "Number",
            "notes": "七万七百七十七。",
            "romaji": "nanamannanahyakunanajuunana"
        },
        {
            "japanese": "六百",
            "reading": "ろっぴゃく (roppyaku)",
            "english": "600",
            "category": "Number",
            "notes": "六百円。",
            "romaji": "roppyaku"
        },
        {
            "japanese": "八千",
            "reading": "はっせん (hassen)",
            "english": "8,000",
            "category": "Number",
            "notes": "八千円。",
            "romaji": "hassen"
        }
    ],
    "grammarNotes": [
        {
            "title": "Counting Rules: Small Animal (一匹) vs Big Animal (一頭)",
            "structure": "Small Animal: 一匹（いっぴき） | Big Animal: 一頭（いっとう）",
            "explanation": "From Slide 6 & 8: Dogs, cats, and birds use 匹 (ひき). Cows and horses use 頭 (とう).",
            "examples": [
                {
                    "japanese": "うし → 一頭",
                    "reading": "ushi -> ittou",
                    "english": "Cow -> 1 big animal",
                    "romaji": "ushi -> ittou"
                },
                {
                    "japanese": "ねこ → 一匹",
                    "reading": "neko -> ippiki",
                    "english": "Cat -> 1 small animal",
                    "romaji": "neko -> ippiki"
                },
                {
                    "japanese": "うま → 一頭",
                    "reading": "uma -> ittou",
                    "english": "Horse -> 1 big animal",
                    "romaji": "uma -> ittou"
                },
                {
                    "japanese": "とり → 一匹",
                    "reading": "tori -> ippiki",
                    "english": "Bird -> 1 small animal",
                    "romaji": "tori -> ippiki"
                }
            ]
        },
        {
            "title": "Different ways to read 「 匹 」: ひき vs ぴき / びき",
            "structure": "ひき (Normal/base) | ぴき/びき (natural shift)",
            "explanation": "From Slide 7: 1匹(いっぴき), 2匹(にひき), 3匹(さんびき), 4匹(よんひき), 5匹(ごひき), 6匹(ろっぴき), 7匹(ななひき), 8匹(はっぴき), 9匹(きゅうひき), 10匹(じゅっぴき).",
            "examples": [
                {
                    "japanese": "犬が二匹います",
                    "reading": "inu ga nihiki imasu",
                    "english": "There are 2 dogs (Slide 9)",
                    "romaji": "inu ga nihiki imasu"
                },
                {
                    "japanese": "ねこが一匹います",
                    "reading": "neko ga ippiki imasu",
                    "english": "There is 1 cat (Slide 9)",
                    "romaji": "neko ga ippiki imasu"
                },
                {
                    "japanese": "大きい犬が四匹います",
                    "reading": "ookii inu ga yonhiki imasu",
                    "english": "There are 4 big dogs (Slide 9)",
                    "romaji": "ookii inu ga yonhiki imasu"
                }
            ]
        }
    ],
    "readingPassages": [
        {
            "title": "Reading time (Slide 9 - All 10 Sentences from Nikki's Slide)",
            "text": "1. この 犬は かわいい\n2. あなたは 犬が すきですか？\n3. わたしは ねこが すきです\n4. 犬が 二匹 います\n5. ねこが 一匹 います\n6. 犬は「ワンワン」といいます\n7. 大きい 犬が います\n8. 大きい 犬が 四匹 います\n9. あの人の ねこは かわいい\n10. あの人の 大きい 犬は こわい",
            "translation": "1. This Dog is Cute\n2. Do you like Dogs？\n3. I like cats\n4. There are 2 dogs\n5. There is 1 cat\n6. Dogs say “Woof woof”\n7. There is a Big Dog\n8. There are 4 Big Dogs\n9. That persons Cat is Cute\n10. That persons Big Dog is Scary",
            "romaji": "1. Kono inu wa kawaii\n2. Anata wa inu ga suki desu ka?\n3. Watashi wa neko ga suki desu\n4. Inu ga nihiki imasu\n5. Neko ga ippiki imasu\n6. Inu wa \"wan wan\" to iimasu\n7. Ookii inu ga imasu\n8. Ookii inu ga yonhiki imasu\n9. Ano hito no neko wa kawaii\n10. Ano hito no ookii inu wa kowai",
            "questions": [
                {
                    "q": "犬は何匹いますか？ (Inu wa nanbiki imasu ka? / How many dogs are there?)",
                    "a": "二匹 (にひき / nihiki) います。"
                },
                {
                    "q": "ねこは何匹いますか？ (Neko wa nanbiki imasu ka? / How many cats are there?)",
                    "a": "一匹 (いっぴき / ippiki) います。"
                },
                {
                    "q": "犬はなんと言いますか？ (Inu wa nan to iimasu ka? / What do dogs say?)",
                    "a": "「ワンワン (wan wan)」と言います。"
                }
            ]
        }
    ],
    "practiceQuiz": [
        {
            "question": "Which counting rule is used for Dogs (犬 / inu)? (From Slide 6)",
            "options": [
                "一匹 (いっぴき / ippiki)",
                "一頭 (いっとう / ittou)",
                "一個 (いっこ / ikko)",
                "一人 (ひとり / hitori)"
            ],
            "correct": "一匹 (いっぴき / ippiki)",
            "explanation": "Slide 6 explicitly asks \"Which one is Dog?\" Answer: 一匹 (いっぴき / ippiki) for small-to-medium animals."
        },
        {
            "question": "From Slide 8, which animals use 一頭 (いっとう / ittou)?",
            "options": [
                "うし (ushi) and うま (uma)",
                "ねこ (neko) and とり (tori)",
                "いぬ (inu) and ねこ (neko)",
                "とり (tori) and うし (ushi)"
            ],
            "correct": "うし (ushi) and うま (uma)",
            "explanation": "Slide 8: うし (cows) and うま (horses) are large animals and use 一頭 (いっとう / ittou), while ねこ and とり use 一匹 (いっぴき / ippiki)."
        },
        {
            "question": "How is 3 dogs read? (From Slide 7)",
            "options": [
                "三匹 (さんびき / sanbiki)",
                "三匹 (さんぴき / sanpiki)",
                "三匹 (さんひき / sanhiki)",
                "三頭 (さんとう / santou)"
            ],
            "correct": "三匹 (さんびき / sanbiki)",
            "explanation": "Slide 7 shows the natural euphonic shift for 3: 三匹 (さんびき / sanbiki) with dakuten."
        },
        {
            "question": "When is 犬の日 (Day of the Dog / Inu no Hi) celebrated according to Slide 3 & 10?",
            "options": [
                "November 1st (11/1)",
                "February 22nd (2/22)",
                "August 1st",
                "December 1st"
            ],
            "correct": "November 1st (11/1)",
            "explanation": "Slide 10: \"The Day of the Dog is November 1st. One is 「ワン (wan)」 in Japanese (11/1: wan-wan-wan)\"."
        },
        {
            "question": "When is 猫の日 (Day of the Cat / Neko no Hi) according to Slide 10?",
            "options": [
                "February 22nd (2/22)",
                "November 1st (11/1)",
                "March 3rd",
                "May 5th"
            ],
            "correct": "February 22nd (2/22)",
            "explanation": "Slide 10: \"Cats say 「ニャ (nya)」 in Japanese (2/22: nya-nya-nya)\"."
        },
        {
            "question": "What number is 二十八 (にじゅうはち / nijūhachi) from Slide 11?",
            "options": [
                "28",
                "18",
                "82",
                "208"
            ],
            "correct": "28",
            "explanation": "二十八 (ni-jū-hachi) is 20 + 8 = 28."
        }
    ],
    "slides": [
        {
            "slideNumber": 1,
            "title": "日本語 Class 414",
            "category": "Title Slide",
            "subtitle": "Update: Levelled Kana, Numbers, Kanji · By: Nikki (ニッキ)",
            "summary": "Nikki JP Class 414 welcome and topic overview.",
            "bullets": [
                "日本語 Class 414",
                "Update: Levelled Kana, Numbers, Kanji",
                "By: Nikki (ニッキ)"
            ],
            "highlight": "Class 414 focuses on Kana, Numbers, and Kanji around the theme of Dogs and Counters.",
            "blocks": [
                [
                    "に    ほん    ご                                                   .日本語 Class 4１⃣4"
                ],
                [
                    "Update: Levelled Kana, Numbers, Kanji"
                ],
                [
                    "By: Nikki",
                    "ニッキ"
                ]
            ]
        },
        {
            "slideNumber": 2,
            "title": "Todays Lecture",
            "category": "Roadmap",
            "subtitle": "Numbers, Hiragana, Katakana",
            "summary": "Core topics of today's lecture.",
            "bullets": [
                "数字 (Numbers / すうじ)",
                "ひらがな (Hiragana)",
                "カタカナ (Katakana)"
            ],
            "highlight": "Connecting numbers and phonetic scripts through the lecture.",
            "blocks": [
                [
                    "Todays Lecture"
                ],
                [
                    "数字",
                    "ひらがな",
                    "カタカナ"
                ],
                [
                    "Numbers",
                    "Hiragana",
                    "Katakana"
                ],
                [
                    "すう じ"
                ]
            ]
        },
        {
            "slideNumber": 3,
            "title": "Todays Theme: 犬・いぬ・dog",
            "category": "Theme",
            "subtitle": "Native dog breeds, onomatopoeia, and pet culture",
            "summary": "Introduction to the Dog theme in Japan.",
            "bullets": [
                "ワンワン (wan wan) · dog barking sound",
                "犬の日 (いぬのひ / Inu no Hi) · Nov 1st (11/1: wan-wan-wan)",
                "柴犬 (しばいぬ / shiba inu) · Shiba dog (Japan's national dog breed)",
                "In Japan, dogs wear shirts, hats, shoes & ride baby strollers!"
            ],
            "highlight": "Japan has 6 native dog breeds, and Shiba Inu (柴犬) is the featured native dog!",
            "blocks": [
                [
                    "Todays Theme 犬・いぬ・dog"
                ],
                [
                    "Japan has 6 Native Dog Breeds",
                    "ワンワン・wan wan",
                    "犬の日・いぬのひ Nov 1st",
                    "Dog Fashion is common"
                ],
                [
                    "しば いぬ柴犬・Shiba dog"
                ]
            ]
        },
        {
            "slideNumber": 4,
            "title": "Kanji for いぬ: 犬",
            "category": "Kanji",
            "subtitle": "Stroke order rules applied to 犬",
            "summary": "Practicing the 4 strokes of 犬 and calligraphy laws.",
            "bullets": [
                "Kanji for いぬ: 犬",
                "Top → bottom",
                "Left → right",
                "Horizontal before vertical",
                "Outside → inside",
                "Top/left components before bottom/right components",
                "Note: Such ワンワン, Much いぬ"
            ],
            "highlight": "Follow universal stroke order: Horizontal before vertical, and the dot comes last!",
            "blocks": [
                [
                    "Kanji for いぬ"
                ],
                [
                    "犬"
                ],
                [
                    "Top → bottom",
                    "Left → right",
                    "Horizontal before vertical",
                    "Outside → inside",
                    "Top/left components before bottom/right components"
                ],
                [
                    "Such ワンワン",
                    "Much いぬ"
                ]
            ]
        },
        {
            "slideNumber": 5,
            "title": "Similar Kanjis: 人 → 大 → 犬 → 太",
            "category": "Kanji Comparison",
            "subtitle": "Kunyomi and Onyomi examples",
            "summary": "Comparing 4 similar characters and learning their readings.",
            "bullets": [
                "人: ひと (hito) · Person",
                "大: おお(きい) (ookii) · Big",
                "犬: いぬ (inu) / ケン (ken) · Dog",
                "太: ふと(い) (futoi) · Thick",
                "Kunyomi / Onyomi for 犬: いぬ (inu) / ケン (ken)",
                "  • ちいさい犬 (chiisai inu) · small dog",
                "  • 愛犬 (あいけん / aiken) · beloved dog"
            ],
            "highlight": "Notice where the dot is: On the shoulder = 犬 (dog). Between the legs = 太 (thick).",
            "blocks": [
                [
                    "Similar Kanjis"
                ],
                [
                    "人 ひと・Person",
                    "大 おお（きい）・Big",
                    "犬 いぬ/ケン・Dog",
                    "太 ふと（い）・Thick"
                ],
                [
                    "Kunyomi / Onyomi: いぬ / ケン"
                ],
                [
                    "Example: ちいさい犬 ・ small dog",
                    "愛犬（あいけん） ・ beloved dog"
                ]
            ]
        },
        {
            "slideNumber": 6,
            "title": "Counting Dogs・犬を数える (Rules)",
            "category": "Counters",
            "subtitle": "Small Animal vs Big Animal rule",
            "summary": "Distinguishing small and large animal counters.",
            "bullets": [
                "Counting rule for Dogs: Which one is Dog?",
                "  • Small Animal: 一匹 (いっぴき / ippiki)",
                "  • Big Animal: 一頭 (いっとう / ittou)",
                "Answer: 一匹 (いっぴき / ippiki)"
            ],
            "highlight": "Dogs are counted with 一匹 (いっぴき), NOT 一頭!",
            "blocks": [
                [
                    "いぬ かぞCounting Dogs・犬を数える"
                ],
                [
                    "Counting Rules:",
                    "Small Animal: 一匹（いっぴき）",
                    "Big Animal: 一頭（いっとう）"
                ],
                [
                    "Which one is Dog? Answer: 一匹"
                ]
            ]
        },
        {
            "slideNumber": 7,
            "title": "Counting Dogs・犬を数える (1 to 10)",
            "category": "Counters",
            "subtitle": "Readings of 匹: ひき vs ぴき / びき",
            "summary": "Mastering the 1 to 10 counting of dogs with 匹.",
            "bullets": [
                "1 Dog: 一匹 (いっぴき / ippiki) [natural shift to ぴき (piki)]",
                "2 Dogs: 二匹 (にひき / nihiki)",
                "3 Dogs: 三匹 (さんびき / sanbiki) [natural shift to びき (biki)]",
                "4 Dogs: 四匹 (よんひき / yonhiki)",
                "5 Dogs: 五匹 (ごひき / gohiki)",
                "6 Dogs: 六匹 (ろっぴき / roppiki) [natural shift to ぴき (piki)]",
                "7 Dogs: 七匹 (ななひき / nanahiki)",
                "8 Dogs: 八匹 (はっぴき / happiki) [natural shift to ぴき (piki)]",
                "9 Dogs: 九匹 (きゅうひき / kyūhiki)",
                "10 Dogs: 十匹 (じゅっぴき / juppiki) [natural shift to ぴき (piki)]",
                "Different ways to read 「 匹 」: ひき (hiki / base), ぴき (piki) / びき (biki) (natural euphonic shifts)"
            ],
            "highlight": "Phonetic shift summary: 1, 6, 8, 10 shift to ぴき (piki). 3 shifts to びき (biki). Others use ひき (hiki).",
            "blocks": [
                [
                    "いぬ かぞCounting Dogs・犬を数える"
                ],
                [
                    "1 Dog: 一匹（いっぴき）",
                    "2 Dog: 二匹（にひき）",
                    "3 Dog: 三匹（さんびき）",
                    "4 Dog: 四匹（よんひき）",
                    "5 Dog: 五匹（ごひき）",
                    "6 Dog: 六匹（ろっぴき）",
                    "7 Dog: 七匹（ななひき）",
                    "8 Dog: 八匹（はっぴき）",
                    "9 Dog: 九匹（きゅうひき）",
                    "10 Dog: 十匹（じゅっぴき）"
                ],
                [
                    "Different ways to read 「 匹 」: ひき (Normal/base), ぴき/びき (natural shift)"
                ]
            ]
        },
        {
            "slideNumber": 8,
            "title": "一匹 or 一頭 (Sorting Animals)",
            "category": "Practice",
            "subtitle": "Classifying the 4 animals from Nikki's slide",
            "summary": "Testing which animal takes 一匹 vs 一頭.",
            "bullets": [
                "うし (ushi / Cow) → 一頭 (いっとう / ittou)",
                "ねこ (neko / Cat) → 一匹 (いっぴき / ippiki)",
                "うま (uma / Horse) → 一頭 (いっとう / ittou)",
                "とり (tori / Bird) → 一匹 (いっぴき / ippiki)"
            ],
            "highlight": "From Nikki's slide: うし and うま use 一頭; ねこ and とり use 一匹.",
            "blocks": [
                [
                    "いっ ぴき 　いっ とう一匹 or 一頭"
                ],
                [
                    "うし → 一頭"
                ],
                [
                    "ねこ → 一匹"
                ],
                [
                    "うま → 一頭"
                ],
                [
                    "とり → 一匹"
                ]
            ]
        },
        {
            "slideNumber": 9,
            "title": "Reading time (10 Sentences)",
            "category": "Reading",
            "subtitle": "All 10 authentic sentences from Nikki's slide",
            "summary": "Practicing reading aloud the 10 sentences with English translations.",
            "bullets": [
                "1. この 犬は かわいい (Kono inu wa kawaii) — This Dog is Cute",
                "2. あなたは 犬が すきですか？ (Anata wa inu ga suki desu ka?) — Do you like Dogs？",
                "3. わたしは ねこが すきです (Watashi wa neko ga suki desu) — I like cats",
                "4. 犬が 二匹 います (Inu ga nihiki imasu) — There are 2 dogs",
                "5. ねこが 一匹 います (Neko ga ippiki imasu) — There is 1 cat",
                "6. 犬は「ワンワン」といいます (Inu wa \"wan wan\" to iimasu) — Dogs say “Woof woof”",
                "7. 大きい 犬が います (Ookii inu ga imasu) — There is a Big Dog",
                "8. 大きい 犬が 四匹 います (Ookii inu ga yonhiki imasu) — There are 4 Big Dogs",
                "9. あの人の ねこは かわいい (Ano hito no neko wa kawaii) — That person's Cat is Cute",
                "10. あの人の 大きい 犬は こわい (Ano hito no ookii inu wa kowai) — That person's Big Dog is Scary"
            ],
            "highlight": "These 10 sentences combine adjectives (かわいい, こわい, 大きい), counters (一匹, 二匹, 四匹), and existence verb います.",
            "blocks": [
                [
                    "Reading time"
                ],
                [
                    "この　犬は　かわいい",
                    "あなたは　犬が　すきですか？",
                    "わたしは　ねこが　すきです",
                    "犬が　二匹　います",
                    "ねこが　一匹　います",
                    "犬は「ワンワン」といいます",
                    "大きい　犬が　います",
                    "大きい　犬が　四匹　います",
                    "あの人の　ねこは　かわいい",
                    "あの人の　大きい　犬は　こわい"
                ],
                [
                    "This Dog is Cute",
                    "Do you like Dogs？",
                    "I like cats",
                    "There are 2 dogs",
                    "There is 1 cat",
                    "Dogs say “Woof woof”",
                    "There is a Big Dog",
                    "There are 4 Big Dogs",
                    "That persons Cat is Cute",
                    "That persons Big Dog is Scary"
                ]
            ]
        },
        {
            "slideNumber": 10,
            "title": "犬の日・いぬのひ",
            "category": "Culture",
            "subtitle": "Day of the Dog & Day of the Cat",
            "summary": "Cultural wordplay for pet celebration dates.",
            "bullets": [
                "The Day of the Dog is November 1st (犬の日 / いぬのひ / Inu no Hi)",
                "“One” is 「ワン (wan)」 in Japanese: 11/1 (ワンワンワン / wan-wan-wan)",
                "When is 猫の日 (ねこのひ / Neko no Hi - Day of the Cat)?",
                "Cats say 「ニャ (nya)」 in Japanese: 2/22 (ニャンニャンニャン / nyan-nyan-nyan) = February 22nd"
            ],
            "highlight": "11/1 sounds like ワン (1) and 2/22 sounds like ニャ (2)!",
            "blocks": [
                [
                    "犬の日・いぬのひ"
                ],
                [
                    "The Day of the Dog is November 1st"
                ],
                [
                    "“One” is 「ワン」in Japanese 1/11"
                ],
                [
                    "When is 猫の日・ねこのひ （Day of the Cat）？"
                ],
                [
                    "Cats say「ニャ」in Japanese 2/2"
                ],
                [
                    "(Not public holiday)"
                ]
            ]
        },
        {
            "slideNumber": 11,
            "title": "Numbers",
            "category": "Numbers",
            "subtitle": "The 10 multi-digit numbers from Nikki's slide",
            "summary": "Reading 2-digit, 3-digit, 4-digit, and 5-digit numbers.",
            "bullets": [
                "二十八 (28 - にじゅうはち / nijūhachi)",
                "五十四 (54 - ごじゅうよん / gojūyon)",
                "七百 (700 - ななひゃく / nanahyaku)",
                "百十 (110 - ひゃくじゅう / hyakujū)",
                "二千 (2,000 - にせん / nisen)",
                "一万 (10,000 - いちまん / ichiman)",
                "九万三千十一 (93,011 - きゅうまんさんぜんじゅういち / kyūman sanzen jūichi)",
                "七万七百七十七 (70,777 - ななまんななひゃくななじゅうなな / nanamanna nahyakunanajūnana)",
                "六百 (600 - ろっぴゃく / roppyaku)",
                "八千 (8,000 - はっせん / hassen)"
            ],
            "highlight": "Spot the irregular sound changes: 600 is ろっぴゃく, 8,000 is はっせん, and 10,000 is 一万 (いちまん).",
            "blocks": [
                [
                    "Numbers"
                ],
                [
                    "二十八",
                    "五十四",
                    "七百",
                    "百十",
                    "二千"
                ],
                [
                    "一万",
                    "九万三千十一",
                    "七万七百七十七",
                    "六百",
                    "八千"
                ]
            ]
        },
        {
            "slideNumber": 12,
            "title": "Download homework stuff",
            "category": "Homework",
            "subtitle": "Course material download reminder",
            "summary": "Download class files and worksheets.",
            "bullets": [
                "Download homework stuff from class portal"
            ],
            "highlight": "Make sure you have your homework materials downloaded.",
            "blocks": [
                [
                    "Download homework stuff"
                ]
            ]
        },
        {
            "slideNumber": 13,
            "title": "宿題・Homework (N5 Lessons)",
            "category": "Homework",
            "subtitle": "Complete following N5 Lessons",
            "summary": "Lesson checklist from Nikki's slide.",
            "bullets": [
                "Complete following N5 Lessons:",
                "  • Lesson 1",
                "  • Lesson 2",
                "  • Lesson 3",
                "  • Lesson 4",
                "  • Lesson 5"
            ],
            "highlight": "Focus on Lessons 1 through 5.",
            "blocks": [
                [
                    "しゅく    だい 宿  題・Homework"
                ],
                [
                    "Complete following N5 Lessons"
                ],
                [
                    "Lesson 1",
                    "Lesson 2",
                    "Lesson 3",
                    "Lesson 4",
                    "Lesson 5"
                ]
            ]
        },
        {
            "slideNumber": 14,
            "title": "宿題・Homework (Personalized Work)",
            "category": "Homework",
            "subtitle": "Customized 25 questions quiz",
            "summary": "Personalized quiz instructions from Nikki's slide.",
            "bullets": [
                "Personalized work",
                "Choose Practice",
                "Quiz scope: Customized",
                "Kana type selection: Choose your own preferences (Hiragana or Katakana, Basic only or include Dakuon, Handakuon, Youon)",
                "25 Questions"
            ],
            "highlight": "25 Questions in personalized practice mode!",
            "blocks": [
                [
                    "しゅく    だい 宿  題・Homework"
                ],
                [
                    "Personalized work"
                ],
                [
                    "Choose Practice",
                    "Quiz scope: Customized",
                    "Kana type selection:",
                    "- Choose your own preferences",
                    "Hiragana or Katakana",
                    "Basic only or include Dakuon, Handakuon, Youon",
                    "25 Questions"
                ]
            ]
        }
    ],
    "vocabulary": [
        {
            "id": "v2-1",
            "kanji": "犬",
            "furigana": "いぬ",
            "romaji": "inu",
            "english": "dog",
            "type": "Noun",
            "example": "この犬はかわいい。"
        },
        {
            "id": "v2-2",
            "kanji": "柴犬",
            "furigana": "しばいぬ",
            "romaji": "shibainu",
            "english": "Shiba dog",
            "type": "Noun",
            "example": "柴犬は日本の犬です。"
        },
        {
            "id": "v2-3",
            "kanji": "愛犬",
            "furigana": "あいけん",
            "romaji": "aiken",
            "english": "pet dog",
            "type": "Noun",
            "example": "わたしの愛犬。"
        },
        {
            "id": "v2-4",
            "kanji": "子犬",
            "furigana": "こいぬ",
            "romaji": "koinu",
            "english": "puppy",
            "type": "Noun",
            "example": "子犬が走る。"
        },
        {
            "id": "v2-5",
            "kanji": "ワンワン",
            "furigana": "わんわん",
            "romaji": "wan wan",
            "english": "woof woof (bark)",
            "type": "Onomatopoeia",
            "example": "犬はワンワンといいます。"
        },
        {
            "id": "v2-6",
            "kanji": "犬の日",
            "furigana": "いぬのひ",
            "romaji": "inu no hi",
            "english": "Day of the Dog (11/1)",
            "type": "Culture",
            "example": "11月1日は犬の日です。"
        },
        {
            "id": "v2-7",
            "kanji": "猫の日",
            "furigana": "ねこのひ",
            "romaji": "neko no hi",
            "english": "Day of the Cat (2/22)",
            "type": "Culture",
            "example": "2月22日は猫の日です。"
        },
        {
            "id": "v2-8",
            "kanji": "ねこ",
            "furigana": "ねこ",
            "romaji": "neko",
            "english": "cat",
            "type": "Noun",
            "example": "わたしはねこがすきです。"
        },
        {
            "id": "v2-9",
            "kanji": "うし",
            "furigana": "うし",
            "romaji": "ushi",
            "english": "cow",
            "type": "Noun",
            "example": "うしが一頭います。"
        },
        {
            "id": "v2-10",
            "kanji": "うま",
            "furigana": "うま",
            "romaji": "uma",
            "english": "horse",
            "type": "Noun",
            "example": "うまが一頭います。"
        },
        {
            "id": "v2-11",
            "kanji": "とり",
            "furigana": "とり",
            "romaji": "tori",
            "english": "bird",
            "type": "Noun",
            "example": "とりが一匹います。"
        },
        {
            "id": "v2-12",
            "kanji": "一匹",
            "furigana": "いっぴき",
            "romaji": "ippiki",
            "english": "one (small animal)",
            "type": "Counter",
            "example": "ねこが一匹います。"
        },
        {
            "id": "v2-13",
            "kanji": "二匹",
            "furigana": "にひき",
            "romaji": "nihiki",
            "english": "two (small animals)",
            "type": "Counter",
            "example": "犬が二匹います。"
        },
        {
            "id": "v2-14",
            "kanji": "三匹",
            "furigana": "さんびき",
            "romaji": "sanbiki",
            "english": "three (small animals)",
            "type": "Counter",
            "example": "犬が三匹います。"
        },
        {
            "id": "v2-15",
            "kanji": "四匹",
            "furigana": "よんひき",
            "romaji": "yonhiki",
            "english": "four (small animals)",
            "type": "Counter",
            "example": "大きい犬が四匹います。"
        },
        {
            "id": "v2-16",
            "kanji": "一頭",
            "furigana": "いっとう",
            "romaji": "ittou",
            "english": "one (large animal)",
            "type": "Counter",
            "example": "うしが一頭います。"
        },
        {
            "id": "v2-17",
            "kanji": "二十八",
            "furigana": "にじゅうはち",
            "romaji": "nijuuhachi",
            "english": "28",
            "type": "Number",
            "example": "二十八人。"
        },
        {
            "id": "v2-18",
            "kanji": "五十四",
            "furigana": "ごじゅうよん",
            "romaji": "gojuuyon",
            "english": "54",
            "type": "Number",
            "example": "五十四円。"
        },
        {
            "id": "v2-19",
            "kanji": "七百",
            "furigana": "ななひゃく",
            "romaji": "nanahyaku",
            "english": "700",
            "type": "Number",
            "example": "七百匹。"
        },
        {
            "id": "v2-20",
            "kanji": "百十",
            "furigana": "ひゃくじゅう",
            "romaji": "hyakujuu",
            "english": "110",
            "type": "Number",
            "example": "百十円。"
        },
        {
            "id": "v2-21",
            "kanji": "二千",
            "furigana": "にせん",
            "romaji": "nisen",
            "english": "2,000",
            "type": "Number",
            "example": "二千円。"
        },
        {
            "id": "v2-22",
            "kanji": "一万",
            "furigana": "いちまん",
            "romaji": "ichiman",
            "english": "10,000",
            "type": "Number",
            "example": "一万円。"
        },
        {
            "id": "v2-23",
            "kanji": "九万三千十一",
            "furigana": "きゅうまんさんぜんじゅういち",
            "romaji": "kyuumansanzenjuuichi",
            "english": "93,011",
            "type": "Number",
            "example": "九万三千十一。"
        },
        {
            "id": "v2-24",
            "kanji": "七万七百七十七",
            "furigana": "ななまんななひゃくななじゅうなな",
            "romaji": "nanamannanahyakunanajuunana",
            "english": "70,777",
            "type": "Number",
            "example": "七万七百七十七。"
        },
        {
            "id": "v2-25",
            "kanji": "六百",
            "furigana": "ろっぴゃく",
            "romaji": "roppyaku",
            "english": "600",
            "type": "Number",
            "example": "六百円。"
        },
        {
            "id": "v2-26",
            "kanji": "八千",
            "furigana": "はっせん",
            "romaji": "hassen",
            "english": "8,000",
            "type": "Number",
            "example": "八千円。"
        }
    ],
    "kanji": [
        {
            "kanji": "犬",
            "onyomi": "ケン",
            "kunyomi": "いぬ",
            "meaning": "dog",
            "strokes": 4,
            "examples": [
                "犬",
                "柴犬",
                "愛犬",
                "子犬"
            ]
        },
        {
            "kanji": "人",
            "onyomi": "ジン・ニン",
            "kunyomi": "ひと",
            "meaning": "person",
            "strokes": 2,
            "examples": [
                "人",
                "日本人",
                "あの人"
            ]
        },
        {
            "kanji": "大",
            "onyomi": "ダイ・タイ",
            "kunyomi": "おお(きい)",
            "meaning": "big, large",
            "strokes": 3,
            "examples": [
                "大きい",
                "大学"
            ]
        },
        {
            "kanji": "太",
            "onyomi": "タイ・タ",
            "kunyomi": "ふと(い)",
            "meaning": "thick, fat",
            "strokes": 4,
            "examples": [
                "太い",
                "太陽"
            ]
        },
        {
            "kanji": "匹",
            "onyomi": "ヒツ",
            "kunyomi": "ひき",
            "meaning": "small animal counter",
            "strokes": 4,
            "examples": [
                "一匹",
                "二匹",
                "三匹"
            ]
        },
        {
            "kanji": "頭",
            "onyomi": "トウ・ズ",
            "kunyomi": "あたま・かしら",
            "meaning": "head, big animal counter",
            "strokes": 16,
            "examples": [
                "一頭",
                "頭"
            ]
        }
    ]
},
    {
    "id": "day-3",
    "dayNumber": 3,
    "classCode": "Class 424",
    "theme": "Theme: The Public Park (公園), Colors, Yuki & Aki Storyline",
    "japaneseTheme": "テーマ：公園・色・ゆきとあきのストーリー (Kōen, iro, Yuki to Aki no sutōrī)",
    "subtitle": "Discover Japanese park etiquette signs, katakanizing names, the full color palette, and meet protagonists Yuki & Aki",
    "description": "Step into a Japanese public park (公園・こうえん), decode signs like '花火禁止' (No fireworks), discover how foreign names undergo Japanification (Aneesh -> あに), master colors (赤・青・白・黒), and explore the story of Yuki and Aki with their dogs FuFu & MoMo.",
    "badge": "Class 424 · Park Storyline & Colors",
    "goals": [
        "Learn the kanji and meaning of 公園 (こうえん, public park) and park signs",
        "Master the foreign name katakanization process (e.g. Aneesh -> あに, Ajay -> えJ)",
        "Learn the Japanese color palette: 赤, 青, 白, 黒, オレンジ, ピンク, グレー",
        "Master small vs large animal counters: カンガルー (一匹), おおかみ (一匹), ポニー (一頭), and 人 (一人・ひとり)",
        "Read '〇' (ぜろ/れい) in multi-digit numbers and years (二○二六)",
        "Meet story protagonists: Yuki (born Feb 2 1999) and Aki (born Nov 1, age 25)",
        "Meet the two dogs: FuFu (青い犬) and MoMo (ピンクの犬)",
        "Learn the 5 cosmic elements: 木, 水, 火, 日, 土",
        "Spot differences in look-alike kanji: 日 (day), 白 (white), 百 (hundred), 月 (moon)"
    ],
    "keyHighlights": [
        "公園 (こうえん) means 'Public Park'. In Japan, local parks are quiet community hubs with rules like 'No fireworks', 'No walking dog', 'Do not throw away litter'.",
        "Foreign names use Katakana, often adopting short nicknames among friends (e.g., Aneesh -> あに, Ajay -> えJ, Jacob -> Jこ, Midhun -> とま, Skaria -> すかり).",
        "Kanji Visual Quadruplets: 日 (sun/day) vs 白 (add top slash = white) vs 百 (add top horizontal bar = hundred) vs 月 (moon/month).",
        "Zero character '〇' is read as ぜろ/れい, frequently used in years (二○二六・2026) and building/room numbers (八〇三・803)."
    ],
    "kanjiList": [
        {
            "kanji": "公",
            "meaning": "public",
            "onyomi": "コウ (kou)",
            "kunyomi": "おおやけ (ooyake)",
            "strokes": 4,
            "radical": "公",
            "radicalClue": "Core element: 公",
            "examples": [
                {
                    "word": "公園",
                    "reading": "こうえん (kouen)",
                    "meaning": "park",
                    "romaji": "kouen"
                },
                {
                    "word": "公衆",
                    "reading": "こうしゅう (koushuu)",
                    "meaning": "public",
                    "romaji": "koushuu"
                }
            ]
        },
        {
            "kanji": "園",
            "meaning": "garden, park",
            "onyomi": "エン (en)",
            "kunyomi": "その (sono)",
            "strokes": 13,
            "radical": "園",
            "radicalClue": "Core element: 園",
            "examples": [
                {
                    "word": "公園",
                    "reading": "こうえん (kouen)",
                    "meaning": "park",
                    "romaji": "kouen"
                },
                {
                    "word": "動物園",
                    "reading": "どうぶつえん (doubutsuen)",
                    "meaning": "zoo",
                    "romaji": "doubutsuen"
                }
            ]
        },
        {
            "kanji": "赤",
            "meaning": "red",
            "onyomi": "セキ・シャク (seki / shaku)",
            "kunyomi": "あか・あか(い) (aka / aka(i))",
            "strokes": 7,
            "radical": "赤",
            "radicalClue": "Core element: 赤",
            "examples": [
                {
                    "word": "赤",
                    "reading": "あか (aka)",
                    "meaning": "red color",
                    "romaji": "aka"
                },
                {
                    "word": "赤い",
                    "reading": "あかい (akai)",
                    "meaning": "red (adj)",
                    "romaji": "akai"
                }
            ]
        },
        {
            "kanji": "黒",
            "meaning": "black",
            "onyomi": "コク (koku)",
            "kunyomi": "くろ・くろ(い) (kuro / kuro(i))",
            "strokes": 11,
            "radical": "黒",
            "radicalClue": "Core element: 黒",
            "examples": [
                {
                    "word": "黒",
                    "reading": "くろ (kuro)",
                    "meaning": "black color",
                    "romaji": "kuro"
                },
                {
                    "word": "黒い",
                    "reading": "くろい (kuroi)",
                    "meaning": "black (adj)",
                    "romaji": "kuroi"
                }
            ]
        },
        {
            "kanji": "青",
            "meaning": "blue",
            "onyomi": "セイ・ショウ (sei / shou)",
            "kunyomi": "あお・あお(い) (ao / ao(i))",
            "strokes": 8,
            "radical": "青",
            "radicalClue": "Core element: 青",
            "examples": [
                {
                    "word": "青",
                    "reading": "あお (ao)",
                    "meaning": "blue color",
                    "romaji": "ao"
                },
                {
                    "word": "青い",
                    "reading": "あおい (aoi)",
                    "meaning": "blue (adj)",
                    "romaji": "aoi"
                }
            ]
        },
        {
            "kanji": "木",
            "meaning": "tree, wood",
            "onyomi": "モク・ボク (moku / boku)",
            "kunyomi": "き (ki)",
            "strokes": 4,
            "radical": "木",
            "radicalClue": "Core element: 木",
            "examples": [
                {
                    "word": "木",
                    "reading": "き (ki)",
                    "meaning": "tree / wood",
                    "romaji": "ki"
                },
                {
                    "word": "木星",
                    "reading": "もくせい (mokusei)",
                    "meaning": "Jupiter",
                    "romaji": "mokusei"
                },
                {
                    "word": "木曜日",
                    "reading": "もくようび (mokuyoubi)",
                    "meaning": "Thursday",
                    "romaji": "mokuyoubi"
                }
            ]
        },
        {
            "kanji": "水",
            "meaning": "water",
            "onyomi": "スイ (sui)",
            "kunyomi": "みず (mizu)",
            "strokes": 4,
            "radical": "水",
            "radicalClue": "Core element: 水",
            "examples": [
                {
                    "word": "水",
                    "reading": "みず (mizu)",
                    "meaning": "water",
                    "romaji": "mizu"
                },
                {
                    "word": "水星",
                    "reading": "すいせい (suisei)",
                    "meaning": "Mercury",
                    "romaji": "suisei"
                },
                {
                    "word": "水曜日",
                    "reading": "すいようび (suiyoubi)",
                    "meaning": "Wednesday",
                    "romaji": "suiyoubi"
                }
            ]
        },
        {
            "kanji": "火",
            "meaning": "fire",
            "onyomi": "カ (ka)",
            "kunyomi": "ひ (hi)",
            "strokes": 4,
            "radical": "火",
            "radicalClue": "Core element: 火",
            "examples": [
                {
                    "word": "火",
                    "reading": "ひ (hi)",
                    "meaning": "fire",
                    "romaji": "hi"
                },
                {
                    "word": "火星",
                    "reading": "かせい (kasei)",
                    "meaning": "Mars",
                    "romaji": "kasei"
                },
                {
                    "word": "火曜日",
                    "reading": "かようび (kayoubi)",
                    "meaning": "Tuesday",
                    "romaji": "kayoubi"
                }
            ]
        },
        {
            "kanji": "金",
            "meaning": "gold, money",
            "onyomi": "キン (kin)",
            "kunyomi": "かね (kane)",
            "strokes": 8,
            "radical": "金",
            "radicalClue": "Core element: 金",
            "examples": [
                {
                    "word": "お金",
                    "reading": "おかね (okane)",
                    "meaning": "money",
                    "romaji": "okane"
                },
                {
                    "word": "金星",
                    "reading": "きんせい (kinsei)",
                    "meaning": "Venus",
                    "romaji": "kinsei"
                },
                {
                    "word": "金曜日",
                    "reading": "きんようび (kinyoubi)",
                    "meaning": "Friday",
                    "romaji": "kinyoubi"
                }
            ]
        },
        {
            "kanji": "土",
            "meaning": "soil, earth",
            "onyomi": "ド・ト (do / to)",
            "kunyomi": "つち (tsuchi)",
            "strokes": 3,
            "radical": "土",
            "radicalClue": "Core element: 土",
            "examples": [
                {
                    "word": "土",
                    "reading": "つち (tsuchi)",
                    "meaning": "soil / earth",
                    "romaji": "tsuchi"
                },
                {
                    "word": "土星",
                    "reading": "どせい (dosei)",
                    "meaning": "Saturn",
                    "romaji": "dosei"
                },
                {
                    "word": "土曜日",
                    "reading": "どようび (doyoubi)",
                    "meaning": "Saturday",
                    "romaji": "doyoubi"
                }
            ]
        }
    ],
    "vocabularyList": [
        {
            "japanese": "公園",
            "reading": "こうえん (kouen)",
            "english": "public park",
            "category": "Noun",
            "notes": "公園へ行きます。",
            "romaji": "kouen"
        },
        {
            "japanese": "赤",
            "reading": "あか (aka)",
            "english": "red",
            "category": "Colour",
            "notes": "赤が好きです。",
            "romaji": "aka"
        },
        {
            "japanese": "黒",
            "reading": "くろ (kuro)",
            "english": "black",
            "category": "Colour",
            "notes": "黒い犬。",
            "romaji": "kuro"
        },
        {
            "japanese": "白",
            "reading": "しろ (shiro)",
            "english": "white",
            "category": "Colour",
            "notes": "白いねこ。",
            "romaji": "shiro"
        },
        {
            "japanese": "青",
            "reading": "あお (ao)",
            "english": "blue",
            "category": "Colour",
            "notes": "青い本。",
            "romaji": "ao"
        },
        {
            "japanese": "オレンジ色",
            "reading": "おれんじいろ (orenjiiro)",
            "english": "orange",
            "category": "Colour",
            "notes": "オレンジ色のみかん。",
            "romaji": "orenjiiro"
        },
        {
            "japanese": "ピンク色",
            "reading": "ぴんくいろ (pinkuiro)",
            "english": "pink",
            "category": "Colour",
            "notes": "ピンク色の花。",
            "romaji": "pinkuiro"
        },
        {
            "japanese": "グレー色",
            "reading": "ぐれーいろ (gureeiro)",
            "english": "grey",
            "category": "Colour",
            "notes": "グレー色の車。",
            "romaji": "gureeiro"
        },
        {
            "japanese": "カンガルー",
            "reading": "かんがるー (kangaruu)",
            "english": "kangaroo",
            "category": "Animal",
            "notes": "カンガルーが一匹います。",
            "romaji": "kangaruu"
        },
        {
            "japanese": "おおかみ",
            "reading": "おおかみ (ookami)",
            "english": "wolf",
            "category": "Animal",
            "notes": "おおかみが一匹います。",
            "romaji": "ookami"
        },
        {
            "japanese": "ポニー",
            "reading": "ぽにー (ponii)",
            "english": "pony",
            "category": "Animal",
            "notes": "ポニーが一頭います。",
            "romaji": "ponii"
        },
        {
            "japanese": "人",
            "reading": "ひとり / ひと (hitori / hito)",
            "english": "person",
            "category": "Counter",
            "notes": "人が一人います。",
            "romaji": "hitori / hito"
        },
        {
            "japanese": "ゆき",
            "reading": "ゆき (yuki)",
            "english": "Yuki (protagonist)",
            "category": "Name",
            "notes": "ゆきは25歳です。",
            "romaji": "yuki"
        },
        {
            "japanese": "あき",
            "reading": "あき (aki)",
            "english": "Aki (friend)",
            "category": "Name",
            "notes": "あきと公園へ行きます。",
            "romaji": "aki"
        },
        {
            "japanese": "ふふ",
            "reading": "ふふ (fufu)",
            "english": "FuFu (blue dog)",
            "category": "Name",
            "notes": "ふふは青い犬です。",
            "romaji": "fufu"
        },
        {
            "japanese": "もも",
            "reading": "もも (momo)",
            "english": "MoMo (pink dog)",
            "category": "Name",
            "notes": "ももはピンクの犬です。",
            "romaji": "momo"
        },
        {
            "japanese": "火星",
            "reading": "かせい (kasei)",
            "english": "Mars",
            "category": "Astronomy",
            "notes": "火星は赤い惑星です。",
            "romaji": "kasei"
        },
        {
            "japanese": "水星",
            "reading": "すいせい (suisei)",
            "english": "Mercury",
            "category": "Astronomy",
            "notes": "水星。",
            "romaji": "suisei"
        },
        {
            "japanese": "木星",
            "reading": "もくせい (mokusei)",
            "english": "Jupiter",
            "category": "Astronomy",
            "notes": "木星は大きいです。",
            "romaji": "mokusei"
        },
        {
            "japanese": "金星",
            "reading": "きんせい (kinsei)",
            "english": "Venus",
            "category": "Astronomy",
            "notes": "金星がきれいです。",
            "romaji": "kinsei"
        },
        {
            "japanese": "土星",
            "reading": "どせい (dosei)",
            "english": "Saturn",
            "category": "Astronomy",
            "notes": "土星の輪。",
            "romaji": "dosei"
        },
        {
            "japanese": "エイチェイ",
            "reading": "えいちぇい (eichiぇi)",
            "english": "Ajay",
            "category": "Classmate",
            "notes": "エイチェイさん（えJ）。",
            "romaji": "eichiぇi"
        },
        {
            "japanese": "アニーシュ",
            "reading": "あにーしゅ (aniishu)",
            "english": "Aneesh",
            "category": "Classmate",
            "notes": "アニーシュさん（あに）。",
            "romaji": "aniishu"
        },
        {
            "japanese": "チェイカッブ",
            "reading": "ちぇいかっぶ (chiぇikabbu)",
            "english": "Jacob",
            "category": "Classmate",
            "notes": "チェイカッブさん（Jこ）。",
            "romaji": "chiぇikabbu"
        },
        {
            "japanese": "ミデゥン トマス",
            "reading": "みでぅん とます (mideぅn tomasu)",
            "english": "Midhun Thomas",
            "category": "Classmate",
            "notes": "ミデゥンさん（とま）。",
            "romaji": "mideぅn tomasu"
        },
        {
            "japanese": "スカリヤ",
            "reading": "すかりや (sukariya)",
            "english": "Skaria",
            "category": "Classmate",
            "notes": "スカリヤさん（すかり）。",
            "romaji": "sukariya"
        },
        {
            "japanese": "ニッキ",
            "reading": "にっき (nikki)",
            "english": "Nikki (Sensei)",
            "category": "Teacher",
            "notes": "ニッキ先生。",
            "romaji": "nikki"
        },
        {
            "japanese": "マドセン",
            "reading": "まどせん (madosen)",
            "english": "Madsen (Surname)",
            "category": "Teacher",
            "notes": "マドセン先生。",
            "romaji": "madosen"
        }
    ],
    "grammarNotes": [
        {
            "title": "Foreign Names Japanification & Friend Nicknames",
            "structure": "[Full English Name] -> [Katakana / Hiragana] -> [2-3 Mora Nickname]",
            "explanation": "From Slide 5 & 6: In Japan, foreign names are written in Katakana. Among friends or co-workers, short nicknames are commonly used: Ajay -> えJ, Aneesh -> あに, Jacob -> Jこ, Midhun -> とま, Skaria -> すかり.",
            "examples": [
                {
                    "japanese": "アニーシュ → あに",
                    "reading": "Aniishu -> Ani",
                    "english": "Aneesh -> Ani",
                    "romaji": "Aniishu -> Ani"
                },
                {
                    "japanese": "エイチェイ → えJ",
                    "reading": "Eichei -> E-J",
                    "english": "Ajay -> AJ",
                    "romaji": "Eichei -> E-J"
                },
                {
                    "japanese": "チェイカッブ → Jこ",
                    "reading": "Cheikabbu -> J-ko",
                    "english": "Jacob -> Jko",
                    "romaji": "Cheikabbu -> J-ko"
                }
            ]
        },
        {
            "title": "Animal Counters: New Animals on Slide 9",
            "structure": "[Animal] + 一匹 (small/medium) | [Animal] + 一頭 (large) | 人 + 一人 (human)",
            "explanation": "From Slide 9: カンガルー (Kangaroo) takes 一匹, おおかみ (Wolf) takes 一匹, ポニー (Pony) takes 一頭, and 人 (Person) takes 一人 (ひとり).",
            "examples": [
                {
                    "japanese": "カンガルー → 一匹",
                    "reading": "kangaruu -> ippiki",
                    "english": "Kangaroo -> 1 small animal",
                    "romaji": "kangaruu -> ippiki"
                },
                {
                    "japanese": "ポニー → 一頭",
                    "reading": "ponii -> ittou",
                    "english": "Pony -> 1 large animal",
                    "romaji": "ponii -> ittou"
                },
                {
                    "japanese": "人 → 一人",
                    "reading": "hito -> hitori",
                    "english": "Person -> 1 person (ひとり)",
                    "romaji": "hito -> hitori"
                }
            ]
        }
    ],
    "readingPassages": [
        {
            "title": "ゆきとあきの公園ストーリー (Class 424 Storyline)",
            "text": "ゆきは1999年2月2日生まれです。ゆきは25歳です。あきはゆきの友だちです。あきは11月1日生まれで、25歳です。ゆきとあきは公園に行きます。ゆきは青い犬「ふふ」がいます。あきはピンクの犬「もも」がいます。犬は「ワンワン」といいます。",
            "translation": "Yuki was born on February 2, 1999 and is 25 years old. Aki is Yuki's friend. Aki was born on November 1st and is 25 years old. Yuki and Aki hang out at the park. Yuki has a blue dog named 'FuFu'. Aki has a pink dog named 'MoMo'. The dogs say 'wan wan'.",
            "romaji": "Yuki wa 1999-nen 2-gatsu 2-nichi umare desu. Yuki wa 25-sai desu. Aki wa Yuki no tomodachi desu. Aki wa 11-gatsu 1-nichi umare de, 25-sai desu. Yuki to Aki wa kouen ni ikimasu. Yuki wa aoi inu \"Fufu\" ga imasu. Aki wa pinku no inu \"Momo\" ga imasu. Inu wa \"wan wan\" to iimasu.",
            "questions": [
                {
                    "q": "ゆきとあきはどこへ行きますか？ (Yuki to Aki wa doko e ikimasu ka? / Where do Yuki and Aki go?)",
                    "a": "公園 (こうえん / kōen) へ行きます。(They go to the park.)"
                },
                {
                    "q": "青い犬の名前は何ですか？ (Aoi inu no namae wa nan desu ka? / What is the blue dog's name?)",
                    "a": "ふふ (FuFu / fufu) です。"
                },
                {
                    "q": "ゆきは何歳ですか？ (Yuki wa nan-sai desu ka? / How old is Yuki?)",
                    "a": "二十五歳 (にじゅうごさい / nijūgosai - 25 years old) です。"
                }
            ]
        }
    ],
    "practiceQuiz": [
        {
            "question": "What does 公園 (こうえん / kōen) mean? (From Slide 4)",
            "options": [
                "Public Park",
                "Train Station",
                "School",
                "Library"
            ],
            "correct": "Public Park",
            "explanation": "公園 (こうえん / kōen) is a public park."
        },
        {
            "question": "Which counter does a ポニー (Pony / ponī) take according to Slide 9?",
            "options": [
                "一頭 (いっとう / ittou)",
                "一匹 (いっぴき / ippiki)",
                "一人 (ひとり / hitori)",
                "一個 (いっこ / ikko)"
            ],
            "correct": "一頭 (いっとう / ittou)",
            "explanation": "Slide 9 shows ポニー (horses/ponies) takes the large animal counter 頭 (とう / tou) -> 一頭 (いっとう / ittou)."
        },
        {
            "question": "How is \"〇\" read when writing numbers or years? (From Slide 10)",
            "options": [
                "ぜろ / れい (zero / rei)",
                "まる / わ (maru / wa)",
                "えん / たま (en / tama)",
                "くう / む (kū / mu)"
            ],
            "correct": "ぜろ / れい (zero / rei)",
            "explanation": "Slide 10 shows 〇 is read as ぜろ (zero) or れい (rei)."
        },
        {
            "question": "Who is the protagonist born on February 2, 1999? (From Slide 11)",
            "options": [
                "ゆき (Yuki / yuki)",
                "あき (Aki / aki)",
                "にっき (Nikki / nikki)",
                "あに (Ani / ani)"
            ],
            "correct": "ゆき (Yuki / yuki)",
            "explanation": "Slide 11: ゆき was born on February 2, 1999 (1999年2月2日)."
        },
        {
            "question": "What color is FuFu (ふふ / fufu), Yuki's dog? (From Slide 14)",
            "options": [
                "青い (あおい / aoi - Blue)",
                "ピンク (pinku - Pink)",
                "赤い (あかい / akai - Red)",
                "白い (しろい / shiroi - White)"
            ],
            "correct": "青い (あおい / aoi - Blue)",
            "explanation": "Slide 14 introduces FuFu: 青い 犬が います (There is a blue dog)."
        }
    ],
    "slides": [
        {
            "slideNumber": 1,
            "title": "日本語 Class 424",
            "category": "Title Slide",
            "subtitle": "Update: Storyline, Answer-sheet · By: Nikki (ニッキ)",
            "summary": "Welcome to Class 424 introducing the storyline and review.",
            "bullets": [
                "日本語 Class 424",
                "Update: Storyline, Answer-sheet",
                "By: Nikki (ニッキ)"
            ],
            "highlight": "Class 424 introduces the Yuki & Aki storyline, park culture, colors, and names.",
            "blocks": [
                [
                    "に    ほん    ご                                                   .日本語 Class 42⃣4"
                ],
                [
                    "Update: Storyline, Answer-sheet"
                ],
                [
                    "By: Nikki",
                    "ニッキ"
                ]
            ]
        },
        {
            "slideNumber": 2,
            "title": "宿題・Homework from Class 414",
            "category": "Review",
            "subtitle": "N5 Lessons review checklist",
            "summary": "Checking homework from previous class.",
            "bullets": [
                "Complete following N5 Lessons: Lesson 1, Lesson 2, Lesson 3, Lesson 4, Lesson 5"
            ],
            "highlight": "Reviewing foundational lessons 1 to 5.",
            "blocks": [
                [
                    "しゅく    だい 宿  題・Homework from Class 41⃣4"
                ],
                [
                    "Complete following N5 Lessons",
                    "Lesson 1",
                    "Lesson 2",
                    "Lesson 3",
                    "Lesson 4",
                    "Lesson 5"
                ]
            ]
        },
        {
            "slideNumber": 3,
            "title": "Todays Lecture",
            "category": "Roadmap",
            "subtitle": "Overview of today's topics",
            "summary": "Topics covered in Class 424.",
            "bullets": [
                "お名前・おなまえ (Your Name - not anime)",
                "色・いろ (Colours)",
                "匹・ひき (Small animal count)",
                "数字 (Numbers)",
                "曜日・ようび (Days of the Week)",
                "ひらがな",
                "カタカナ"
            ],
            "highlight": "Integrating names, colors, counters, numbers, and weekdays into the storyline.",
            "blocks": [
                [
                    "Todays Lecture"
                ],
                [
                    "お名前・おなまえ",
                    "色・いろ",
                    "匹・ひき",
                    "数字",
                    "曜日・ようび",
                    "ひらがな",
                    "カタカナ"
                ],
                [
                    "Your Name (not anime)",
                    "Colours",
                    "Small animal count",
                    "Numbers",
                    "Days of the Week",
                    "Hiragana",
                    "Katakana"
                ]
            ]
        },
        {
            "slideNumber": 4,
            "title": "Todays Theme・Park・公園",
            "category": "Theme",
            "subtitle": "Public Park rules and etiquette",
            "summary": "Exploring the concept of 公園 (こうえん) and park signage in Japan.",
            "bullets": [
                "公園・こうえん means “Public Park”",
                "Japan has many small parks",
                "Parks sometimes have specific rules written signs:",
                "  • “No fireworks”",
                "  • “No walking dog”",
                "  • “Please do not throw away litter”"
            ],
            "highlight": "Parks in Japan are quiet neighbourhood community centers with explicit civic etiquette signs.",
            "blocks": [
                [
                    "Todays Theme・Park・公園"
                ],
                [
                    "公園・こうえん means “Public Park”",
                    "Japan has many small parks",
                    "Parks sometimes have specific rules written sign(“No fireworks”, “No walking dog”, “Please do not throw out away litter”)"
                ],
                [
                    "こう えん公園・Park"
                ]
            ]
        },
        {
            "slideNumber": 5,
            "title": "What is your name? お名前？ (Japanification)",
            "category": "Names & Katakana",
            "subtitle": "How foreign names adapt to Japanese phonetics",
            "summary": "Writing classroom student names in Japanese script.",
            "bullets": [
                "Japan uses Katakana for foreign names",
                "Name may change a bit (Japanification)",
                "Class student examples from slide:",
                "  • Ajay → えいちぇい / エイチェイ",
                "  • Aneesh → あにーしゅ / アニーシュ",
                "  • Jacob → ちぇいかっぶ / チェイカッブ",
                "  • Midhun Thomas → みでぅん とます / ミデゥン トマス",
                "  • Skaria → すかりや / スカリヤ",
                "  • Nikki → にっき",
                "  • Madsen → まどせん (✕ まぜん)"
            ],
            "highlight": "Foreign names conform to Japanese mora beats (e.g. Aneesh -> アニーシュ).",
            "blocks": [
                [
                    "What is your name? お名前？"
                ],
                [
                    "Japan uses Katakana for foreign names",
                    "Name may change a bit（Japanification）",
                    "Let’s try to write your name(in Hiragana)"
                ],
                [
                    "Ajay: えいちぇい / エイチェイ",
                    "Aneesh: あにーしゅ / アニーシュ",
                    "Jacob: ちぇいかっぶ / チェイカッブ",
                    "Midhun Thomas: みでぅん とます / ミデゥン トマス",
                    "Skaria: すかりや / スカリヤ",
                    "Nikki: にっき",
                    "Madsen: まどせん (✕ まぜん)"
                ]
            ]
        },
        {
            "slideNumber": 6,
            "title": "What is your name? お名前？ (Nicknames)",
            "category": "Names & Culture",
            "subtitle": "Using nicknames among friends and co-workers",
            "summary": "Short 2 to 3 mora nicknames in Japanese social life.",
            "bullets": [
                "Japan uses Nicknames among friends or co-workers",
                "Classroom examples from slide:",
                "  • Ajay → えJ",
                "  • Aneesh → あに",
                "  • Jacob → Jこ",
                "  • Midhun → とま",
                "  • Skaria → すかり",
                "(just examples)"
            ],
            "highlight": "Japanese speakers naturally condense names to 2 or 3 beats for friendly warmth!",
            "blocks": [
                [
                    "What is your name? お名前？"
                ],
                [
                    "Japan uses Nicknames among friends or co-workers"
                ],
                [
                    "Ajay → えJ",
                    "Aneesh → あに",
                    "Jacob → Jこ",
                    "Midhun Thomas → とま",
                    "Skaria → すかり",
                    "(just examples)"
                ]
            ]
        },
        {
            "slideNumber": 7,
            "title": "色・いろ・Colours Colors",
            "category": "Colors",
            "subtitle": "The 7 Japanese colors from Nikki's slide",
            "summary": "Core color vocabulary introduced in Class 424.",
            "bullets": [
                "赤・あか (Red)",
                "黒・くろ (Black)",
                "白・しろ (White)",
                "青・あお (Blue)",
                "オレンジ色・おれんじ (Orange)",
                "ピンク色・ぴんく (Pink)",
                "グレー色・ぐれえ (Gray)"
            ],
            "highlight": "Notice native traditional colors (赤, 黒, 白, 青) vs Katakana loanword colors (オレンジ, ピンク, グレー).",
            "blocks": [
                [
                    "色・いろ・Colours Colors"
                ],
                [
                    "赤・あか",
                    "黒・くろ",
                    "白・しろ",
                    "青・あお",
                    "オレンジ色・おれんじ",
                    "ピンク色・ぴんく",
                    "グレー色・ぐれえ"
                ]
            ]
        },
        {
            "slideNumber": 8,
            "title": "一匹 or 一頭 (Review: 4 Animals)",
            "category": "Counters",
            "subtitle": "Quick review of animal counters from Class 414",
            "summary": "Matching the 4 animals to 一匹 vs 一頭.",
            "bullets": [
                "うし (Cow) → 一頭 (いっとう)",
                "ねこ (Cat) → 一匹 (いっぴき)",
                "うま (Horse) → 一頭 (いっとう)",
                "とり (Bird) → 一匹 (いっぴき)"
            ],
            "highlight": "Reinforcing: Large livestock take 一頭, small animals take 一匹.",
            "blocks": [
                [
                    "いっ   ぴき             　いっ  とう一匹 or 一頭"
                ],
                [
                    "うし → 一頭",
                    "ねこ → 一匹",
                    "うま → 一頭",
                    "とり → 一匹"
                ]
            ]
        },
        {
            "slideNumber": 9,
            "title": "一匹 or 一頭 (Part 2: New Animals & People)",
            "category": "Counters",
            "subtitle": "Kangaroos, wolves, ponies, and humans",
            "summary": "Applying counters to new creatures and counting humans.",
            "bullets": [
                "カンガルー (Kangaroo) → 一匹 (いっぴき)",
                "おおかみ (Wolf) → 一匹 (いっぴき)",
                "ポニー (Pony) → 一頭 (いっとう)",
                "人 (Person) → 一人（ひとり）"
            ],
            "highlight": "People do NOT take 匹 or 頭! One person is 一人 (ひとり).",
            "blocks": [
                [
                    "いっ   ぴき             　いっ  とう一匹 or 一頭"
                ],
                [
                    "カンガルー → 一匹",
                    "おおかみ → 一匹",
                    "ポニー → 一頭",
                    "人 → 一人 (ひとり)"
                ]
            ]
        },
        {
            "slideNumber": 10,
            "title": "Numbers & The '〇' Zero Rule",
            "category": "Numbers",
            "subtitle": "Reading 3-digit numbers and the 〇 zero symbol",
            "summary": "Practicing complex numbers and understanding 〇 (zero / rei).",
            "bullets": [
                "3-Digit practice: 496, 763, 278, 344, 167",
                "Tens & Hundreds: 五〇 (50), 一〇 (10), 五〇〇 (500), 一〇〇〇 (1000), 一〇〇〇〇 (10000)",
                "The “〇” symbol:",
                "  • Read as ぜろ / れい",
                "  • Most common in writing Years: 二○二六 (2026)",
                "  • Sometimes used in individual numbering: 八〇三 (8-0-3)"
            ],
            "highlight": "“〇” is the Japanese zero character, seen everywhere on calendars, room numbers, and dates.",
            "blocks": [
                [
                    "Numbers"
                ],
                [
                    "496, 763, 278, 344, 167",
                    "五〇〇, 一〇〇〇, 五〇, 一〇, 一〇〇〇〇"
                ],
                [
                    "“〇” is read as ぜろ/れい",
                    "Most common in writing Years: 二○二六・2026",
                    "Sometimes used in individual numbering: 八〇三・8-0-3"
                ]
            ]
        },
        {
            "slideNumber": 11,
            "title": "Meet Protagonist: ゆき (Yuki)",
            "category": "Storyline",
            "subtitle": "Character profile of Yuki",
            "summary": "First main character profile in the Class 424 storyline.",
            "bullets": [
                "Name: ゆき (Yuki)",
                "Birthday: 2日２月1999年 (Feb 2, 1999)",
                "Age: 25 years old",
                "Plan: Hangout at Park with friend",
                "→ Answer QnA: Q1, Q2"
            ],
            "highlight": "Q1 & Q2 in the Q&A drill ask about Yuki's identity and age!",
            "blocks": [
                [
                    "Meet Protagonist"
                ],
                [
                    "Name: ゆき",
                    "Birthday: 2日２月1999年",
                    "Plan: Hangout at Park with friend"
                ],
                [
                    "Answer QnA: Q1, Q2"
                ]
            ]
        },
        {
            "slideNumber": 12,
            "title": "Friend: あき (Aki)",
            "category": "Storyline",
            "subtitle": "Character profile of Aki",
            "summary": "Second main character profile in the Class 424 storyline.",
            "bullets": [
                "Name: あき (Aki)",
                "Birthday: １日１１月 (Nov 1st)",
                "Age: 25 years old",
                "Plan: Hangout at Park with ゆき",
                "→ Answer QnA: Q3, Q4"
            ],
            "highlight": "Q3 & Q4 ask about Aki's friendship with Yuki and birthday on Dog Day (11/1)!",
            "blocks": [
                [
                    "Friend"
                ],
                [
                    "Name: あき",
                    "Birthday: １日１１月",
                    "Age: 25",
                    "Hangout at Park with ゆき"
                ],
                [
                    "Answer QnA: Q3, Q4"
                ]
            ]
        },
        {
            "slideNumber": 13,
            "title": "Guessing Game: The 5 Cosmic Elements",
            "category": "Kanji Elements",
            "subtitle": "Matching kanji to natural elements",
            "summary": "The 5 elemental kanji used in nature and days of the week.",
            "bullets": [
                "木 (き / モク): Tree / Wood",
                "水 (みず / スイ): Water",
                "火 (ひ / カ): Fire",
                "日 (ひ / ニチ): Sun / Day",
                "土 (つち / ド): Earth / Soil",
                "→ Answer QnA: Q5"
            ],
            "highlight": "These 5 kanji form the names of weekdays (火曜日, 水曜日, 木曜日, 土曜日) and planets!",
            "blocks": [
                [
                    "木, 水, 火, 日, 土"
                ],
                [
                    "Guessing Game: 1, 2, 3, 4, 5 -> ア, イ, ウ, エ, オ"
                ],
                [
                    "Answer QnA: Q5"
                ]
            ]
        },
        {
            "slideNumber": 14,
            "title": "Doggies: ふふ & もも",
            "category": "Storyline",
            "subtitle": "The two colorful pet dogs in the park",
            "summary": "Yuki and Aki's dogs and their colors.",
            "bullets": [
                "🔵 ふふ (FuFu): 青 / 青い (Blue dog)",
                "もも (MoMo): ピンク / ぴんく (Pink dog)",
                "Dog bark: ワンワン (wan wan)",
                "→ Answer QnA: Q6, Q7"
            ],
            "highlight": "FuFu is the blue dog (青い犬) and MoMo is the pink dog (ピンクの犬)!",
            "blocks": [
                [
                    "Doggies"
                ],
                [
                    "🔵ふふ: あお / 青い",
                    "もも: ぴんく / ピンク"
                ],
                [
                    "ワン ワン"
                ],
                [
                    "Answer QnA: Q6, Q7"
                ]
            ]
        },
        {
            "slideNumber": 15,
            "title": "Days of the Week (曜日)",
            "category": "Calendar",
            "subtitle": "How weekdays work in Japanese calendars",
            "summary": "Rules for reading and writing days of the week.",
            "bullets": [
                "Each day is a different element (Sun, Moon, Fire, Water, Wood, Metal, Earth)",
                "Calendar shows only the first kanji, no 「曜日」 (e.g. 日, 月, 火, 水, 木, 金, 土)",
                "When mentioning specific days of the week, first kanji is enough"
            ],
            "highlight": "Japanese calendars write just (月), (火), (水) instead of full 月曜日, saving space!",
            "blocks": [
                [
                    "Days of the Week"
                ],
                [
                    "Each day is a different element",
                    "Calendar shows only the first kanji, no 「曜日」",
                    "When mentioning specific days of the week, first kanji is enough"
                ]
            ]
        },
        {
            "slideNumber": 16,
            "title": "Fun Fact: Planets of the Solar System",
            "category": "Astronomy & Kanji",
            "subtitle": "Planetary names derived from the 5 elements",
            "summary": "Connecting the weekdays to astronomy.",
            "bullets": [
                "First five planets use the same kanji as week days:",
                "  • 火星 (Mars - Fire Star)",
                "  • 水星 (Mercury - Water Star)",
                "  • 木星 (Jupiter - Wood Star)",
                "  • 金星 (Venus - Metal/Gold Star)",
                "  • 土星 (Saturn - Earth Star)",
                "Other outer planets use Deity names (天王星 Uranus, 海王星 Neptune, 冥王星 Pluto)"
            ],
            "highlight": "Learn the days of the week, and you automatically learn the Solar System in Japanese!",
            "blocks": [
                [
                    "Fun fact:Planets of the Solar System"
                ],
                [
                    "First five planets uses same kanji as week days",
                    "Other planets are Deity names"
                ]
            ]
        },
        {
            "slideNumber": 17,
            "title": "Similar Kanjis: 日 vs 白 vs 百 vs 月",
            "category": "Kanji Clones",
            "subtitle": "Distinguishing visually identical character families",
            "summary": "Comparing 4 similar box-like characters.",
            "bullets": [
                "日: ひ / にち (Day / Sun) — Basic box with crossbar",
                "白: しろ(い) (White) — Sun with a top tick",
                "百: ひゃく (100) — White with a top ceiling bar",
                "月: つき / ゲツ, ガツ (Moon / Month)",
                "Kunyomi / Onyomi for 月: つき (Kun) / ゲツ, ガツ (On)",
                "Examples from slide:",
                "  • 月曜日 (げつようび · Monday)",
                "  • 三月 (さんがつ · March)"
            ],
            "highlight": "日 (Sun) + tick = 白 (White) + bar = 百 (100). Do not confuse them with curved legs in 月 (Moon)!",
            "blocks": [
                [
                    "Similar Kanjis"
                ],
                [
                    "日: ひ・にち・Day",
                    "白: しろ（い）・White",
                    "百: ひゃく・100",
                    "月: つき・げつ・がつ・Moon、Month"
                ],
                [
                    "Kunyomi / Onyomi for 月: つき / ゲツ/ガツ"
                ],
                [
                    "Example: 月曜日（げつようび・Monday）, 三月（さんがつ・March）"
                ]
            ]
        },
        {
            "slideNumber": 18,
            "title": "宿題・Homework (N5 Lessons)",
            "category": "Homework",
            "subtitle": "Target lessons for Class 424",
            "summary": "Curriculum milestones from Nikki's slide.",
            "bullets": [
                "Complete following N5 Lessons:",
                "  • Lesson 6",
                "  • Lesson 9",
                "  • Lesson 15"
            ],
            "highlight": "Lesson 6, 9, and 15 focus on colors, weekdays, and dialogue comprehension.",
            "blocks": [
                [
                    "しゅく    だい 宿  題・Homework"
                ],
                [
                    "Complete following N5 Lessons: Lesson 6, Lesson 9, Lesson 15"
                ]
            ]
        },
        {
            "slideNumber": 19,
            "title": "宿題・Homework (App & 25 Questions)",
            "category": "Homework",
            "subtitle": "Daily app drills and questions",
            "summary": "Check-in on app practice.",
            "bullets": [
                "How is the app？",
                "25 Questions ？"
            ],
            "highlight": "Keep up daily practice drills in the app.",
            "blocks": [
                [
                    "しゅく    だい 宿  題・Homework"
                ],
                [
                    "How is the app？",
                    "25 Questions ？"
                ]
            ]
        },
        {
            "slideNumber": 20,
            "title": "Self Evaluation Sheet",
            "category": "Self Evaluation",
            "subtitle": "Rate your understanding",
            "summary": "Reflecting on today's progress.",
            "bullets": [
                "Self Evaluation Sheet 1"
            ],
            "highlight": "Track your personal mastery of Class 424 concepts.",
            "blocks": [
                [
                    "Self Evaluation Sheet"
                ]
            ]
        }
    ],
    "vocabulary": [
        {
            "id": "v3-1",
            "kanji": "公園",
            "furigana": "こうえん",
            "romaji": "kouen",
            "english": "public park",
            "type": "Noun",
            "example": "公園へ行きます。"
        },
        {
            "id": "v3-2",
            "kanji": "赤",
            "furigana": "あか",
            "romaji": "aka",
            "english": "red",
            "type": "Colour",
            "example": "赤が好きです。"
        },
        {
            "id": "v3-3",
            "kanji": "黒",
            "furigana": "くろ",
            "romaji": "kuro",
            "english": "black",
            "type": "Colour",
            "example": "黒い犬。"
        },
        {
            "id": "v3-4",
            "kanji": "白",
            "furigana": "しろ",
            "romaji": "shiro",
            "english": "white",
            "type": "Colour",
            "example": "白いねこ。"
        },
        {
            "id": "v3-5",
            "kanji": "青",
            "furigana": "あお",
            "romaji": "ao",
            "english": "blue",
            "type": "Colour",
            "example": "青い本。"
        },
        {
            "id": "v3-6",
            "kanji": "オレンジ色",
            "furigana": "おれんじいろ",
            "romaji": "orenjiiro",
            "english": "orange",
            "type": "Colour",
            "example": "オレンジ色のみかん。"
        },
        {
            "id": "v3-7",
            "kanji": "ピンク色",
            "furigana": "ぴんくいろ",
            "romaji": "pinkuiro",
            "english": "pink",
            "type": "Colour",
            "example": "ピンク色の花。"
        },
        {
            "id": "v3-8",
            "kanji": "グレー色",
            "furigana": "ぐれーいろ",
            "romaji": "gureeiro",
            "english": "grey",
            "type": "Colour",
            "example": "グレー色の車。"
        },
        {
            "id": "v3-9",
            "kanji": "カンガルー",
            "furigana": "かんがるー",
            "romaji": "kangaruu",
            "english": "kangaroo",
            "type": "Animal",
            "example": "カンガルーが一匹います。"
        },
        {
            "id": "v3-10",
            "kanji": "おおかみ",
            "furigana": "おおかみ",
            "romaji": "ookami",
            "english": "wolf",
            "type": "Animal",
            "example": "おおかみが一匹います。"
        },
        {
            "id": "v3-11",
            "kanji": "ポニー",
            "furigana": "ぽにー",
            "romaji": "ponii",
            "english": "pony",
            "type": "Animal",
            "example": "ポニーが一頭います。"
        },
        {
            "id": "v3-12",
            "kanji": "人",
            "furigana": "ひとり / ひと",
            "romaji": "hitori / hito",
            "english": "person",
            "type": "Counter",
            "example": "人が一人います。"
        },
        {
            "id": "v3-13",
            "kanji": "ゆき",
            "furigana": "ゆき",
            "romaji": "yuki",
            "english": "Yuki (protagonist)",
            "type": "Name",
            "example": "ゆきは25歳です。"
        },
        {
            "id": "v3-14",
            "kanji": "あき",
            "furigana": "あき",
            "romaji": "aki",
            "english": "Aki (friend)",
            "type": "Name",
            "example": "あきと公園へ行きます。"
        },
        {
            "id": "v3-15",
            "kanji": "ふふ",
            "furigana": "ふふ",
            "romaji": "fufu",
            "english": "FuFu (blue dog)",
            "type": "Name",
            "example": "ふふは青い犬です。"
        },
        {
            "id": "v3-16",
            "kanji": "もも",
            "furigana": "もも",
            "romaji": "momo",
            "english": "MoMo (pink dog)",
            "type": "Name",
            "example": "ももはピンクの犬です。"
        },
        {
            "id": "v3-17",
            "kanji": "火星",
            "furigana": "かせい",
            "romaji": "kasei",
            "english": "Mars",
            "type": "Astronomy",
            "example": "火星は赤い惑星です。"
        },
        {
            "id": "v3-18",
            "kanji": "水星",
            "furigana": "すいせい",
            "romaji": "suisei",
            "english": "Mercury",
            "type": "Astronomy",
            "example": "水星。"
        },
        {
            "id": "v3-19",
            "kanji": "木星",
            "furigana": "もくせい",
            "romaji": "mokusei",
            "english": "Jupiter",
            "type": "Astronomy",
            "example": "木星は大きいです。"
        },
        {
            "id": "v3-20",
            "kanji": "金星",
            "furigana": "きんせい",
            "romaji": "kinsei",
            "english": "Venus",
            "type": "Astronomy",
            "example": "金星がきれいです。"
        },
        {
            "id": "v3-21",
            "kanji": "土星",
            "furigana": "どせい",
            "romaji": "dosei",
            "english": "Saturn",
            "type": "Astronomy",
            "example": "土星の輪。"
        },
        {
            "id": "v3-22",
            "kanji": "エイチェイ",
            "furigana": "えいちぇい",
            "romaji": "eichei",
            "english": "Ajay",
            "type": "Classmate",
            "example": "エイチェイさん（えJ）。"
        },
        {
            "id": "v3-23",
            "kanji": "アニーシュ",
            "furigana": "あにーしゅ",
            "romaji": "aniishu",
            "english": "Aneesh",
            "type": "Classmate",
            "example": "アニーシュさん（あに）。"
        },
        {
            "id": "v3-24",
            "kanji": "チェイカッブ",
            "furigana": "ちぇいかっぶ",
            "romaji": "cheikabbu",
            "english": "Jacob",
            "type": "Classmate",
            "example": "チェイカッブさん（Jこ）。"
        },
        {
            "id": "v3-25",
            "kanji": "ミデゥン トマス",
            "furigana": "みでぅん とます",
            "romaji": "midwun tomasu",
            "english": "Midhun Thomas",
            "type": "Classmate",
            "example": "ミデゥンさん（とま）。"
        },
        {
            "id": "v3-26",
            "kanji": "スカリヤ",
            "furigana": "すかりや",
            "romaji": "sukariya",
            "english": "Skaria",
            "type": "Classmate",
            "example": "スカリヤさん（すかり）。"
        },
        {
            "id": "v3-27",
            "kanji": "ニッキ",
            "furigana": "にっき",
            "romaji": "nikki",
            "english": "Nikki (Sensei)",
            "type": "Teacher",
            "example": "ニッキ先生。"
        },
        {
            "id": "v3-28",
            "kanji": "マドセン",
            "furigana": "まどせん",
            "romaji": "madosen",
            "english": "Madsen (Surname)",
            "type": "Teacher",
            "example": "マドセン先生。"
        }
    ],
    "kanji": [
        {
            "kanji": "公",
            "onyomi": "コウ",
            "kunyomi": "おおやけ",
            "meaning": "public",
            "strokes": 4,
            "examples": [
                "公園",
                "公衆"
            ]
        },
        {
            "kanji": "園",
            "onyomi": "エン",
            "kunyomi": "その",
            "meaning": "garden, park",
            "strokes": 13,
            "examples": [
                "公園",
                "動物園"
            ]
        },
        {
            "kanji": "赤",
            "onyomi": "セキ・シャク",
            "kunyomi": "あか・あか(い)",
            "meaning": "red",
            "strokes": 7,
            "examples": [
                "赤",
                "赤い"
            ]
        },
        {
            "kanji": "黒",
            "onyomi": "コク",
            "kunyomi": "くろ・くろ(い)",
            "meaning": "black",
            "strokes": 11,
            "examples": [
                "黒",
                "黒い"
            ]
        },
        {
            "kanji": "青",
            "onyomi": "セイ・ショウ",
            "kunyomi": "あお・あお(い)",
            "meaning": "blue",
            "strokes": 8,
            "examples": [
                "青",
                "青い"
            ]
        },
        {
            "kanji": "木",
            "onyomi": "モク・ボク",
            "kunyomi": "き",
            "meaning": "tree, wood",
            "strokes": 4,
            "examples": [
                "木",
                "木星",
                "木曜日"
            ]
        },
        {
            "kanji": "水",
            "onyomi": "スイ",
            "kunyomi": "みず",
            "meaning": "water",
            "strokes": 4,
            "examples": [
                "水",
                "水星",
                "水曜日"
            ]
        },
        {
            "kanji": "火",
            "onyomi": "カ",
            "kunyomi": "ひ",
            "meaning": "fire",
            "strokes": 4,
            "examples": [
                "火",
                "火星",
                "火曜日"
            ]
        },
        {
            "kanji": "金",
            "onyomi": "キン",
            "kunyomi": "かね",
            "meaning": "gold, money",
            "strokes": 8,
            "examples": [
                "お金",
                "金星",
                "金曜日"
            ]
        },
        {
            "kanji": "土",
            "onyomi": "ド・ト",
            "kunyomi": "つち",
            "meaning": "soil, earth",
            "strokes": 3,
            "examples": [
                "土",
                "土星",
                "土曜日"
            ]
        }
    ]
},
    {
    "id": "day-4",
    "dayNumber": 4,
    "classCode": "Class 434",
    "theme": "Days of the Week & Kanji Building Blocks",
    "japaneseTheme": "曜日・七曜の元素・文脈による読み分け・「生」の漢字 (Yōbi, shichiyō no genso, bunmyaku dokkai, \"sei\" no kanji)",
    "subtitle": "Uncover how the 7 days of the week mirror the solar system planets, context reading changes, and the versatile kanji 生",
    "description": "Master all 7 days of the week, calendar patterns, reading shifts across contexts (日, 月, 火, 水, 木, 金, 土), look-alike kanji sets, Yuki’s 7-day story, compound kanji (火山, 金魚), and the versatile kanji「生」.",
    "badge": "Class 434 · Weekdays & Elements",
    "goals": [
        "Master the 7 Days of the Week: 日曜日〜土曜日 and calendar shorthand (日 月 火 水 木 金 土)",
        "Understand their planetary origins: Sun, Moon, Mars (火), Mercury (水), Jupiter (木), Venus (金), Saturn (土)",
        "Recognize contextual reading changes: 日 = ひ (sun) vs にち (weekday), 月 = つき (moon) vs げつ (Monday) vs がつ (month)",
        "Solve compound kanji puzzles: 火山 (volcano), 水曜日, 三月, 金魚 (goldfish)",
        "Master the kanji 生 across N5 words: 学生 (student), 先生 (teacher), 一年生, 生きる, 誕生日"
    ],
    "keyHighlights": [
        "The Japanese days of the week directly mirror ancient Babylonian and Roman astronomy: Sunday=Sun, Monday=Moon, Tuesday=Mars (Fire Star), Wednesday=Mercury (Water Star), Thursday=Jupiter (Wood Star), Friday=Venus (Gold Star), Saturday=Saturn (Earth Star)!",
        "Calendar Shorthand: Japanese calendars only print the first character (日, 月, 火, 水, 木, 金, 土). Sunday is placed first and printed in red!",
        "Kanji are not single words—they are reusable meaning-blocks. For example, 火 (fire) + 山 (mountain) = 火山 (kazan, volcano); 金 (gold) + 魚 (fish) = 金魚 (kingyo, goldfish)!"
    ],
    "kanjiList": [
        {
            "kanji": "日",
            "meaning": "sun, day",
            "onyomi": "ニチ・ジツ (nichi / jitsu)",
            "kunyomi": "ひ・び・か (hi / bi / ka)",
            "strokes": 4,
            "radical": "日",
            "radicalClue": "Core element: 日",
            "examples": [
                {
                    "word": "日曜日",
                    "reading": "にちようび (nichiyoubi)",
                    "meaning": "Sunday",
                    "romaji": "nichiyoubi"
                },
                {
                    "word": "日本",
                    "reading": "にほん (nihon)",
                    "meaning": "Japan",
                    "romaji": "nihon"
                },
                {
                    "word": "誕生日",
                    "reading": "たんじょうび (tanjoubi)",
                    "meaning": "birthday",
                    "romaji": "tanjoubi"
                }
            ]
        },
        {
            "kanji": "月",
            "meaning": "moon, month",
            "onyomi": "ゲツ・ガツ (getsu / gatsu)",
            "kunyomi": "つき (tsuki)",
            "strokes": 4,
            "radical": "月",
            "radicalClue": "Core element: 月",
            "examples": [
                {
                    "word": "月曜日",
                    "reading": "げつようび (getsuyoubi)",
                    "meaning": "Monday",
                    "romaji": "getsuyoubi"
                },
                {
                    "word": "三月",
                    "reading": "さんがつ (sangatsu)",
                    "meaning": "March",
                    "romaji": "sangatsu"
                },
                {
                    "word": "三か月",
                    "reading": "さんかげつ (sankagetsu)",
                    "meaning": "three months",
                    "romaji": "sankagetsu"
                }
            ]
        },
        {
            "kanji": "火",
            "meaning": "fire",
            "onyomi": "カ (ka)",
            "kunyomi": "ひ (hi)",
            "strokes": 4,
            "radical": "火",
            "radicalClue": "Core element: 火",
            "examples": [
                {
                    "word": "火曜日",
                    "reading": "かようび (kayoubi)",
                    "meaning": "Tuesday",
                    "romaji": "kayoubi"
                },
                {
                    "word": "火山",
                    "reading": "かざん (kazan)",
                    "meaning": "volcano",
                    "romaji": "kazan"
                },
                {
                    "word": "花火",
                    "reading": "はなび (hanabi)",
                    "meaning": "fireworks",
                    "romaji": "hanabi"
                }
            ]
        },
        {
            "kanji": "水",
            "meaning": "water",
            "onyomi": "スイ (sui)",
            "kunyomi": "みず (mizu)",
            "strokes": 4,
            "radical": "水",
            "radicalClue": "Core element: 水",
            "examples": [
                {
                    "word": "水曜日",
                    "reading": "すいようび (suiyoubi)",
                    "meaning": "Wednesday",
                    "romaji": "suiyoubi"
                },
                {
                    "word": "水",
                    "reading": "みず (mizu)",
                    "meaning": "water",
                    "romaji": "mizu"
                }
            ]
        },
        {
            "kanji": "木",
            "meaning": "tree, wood",
            "onyomi": "モク・ボク (moku / boku)",
            "kunyomi": "き・こ (ki / ko)",
            "strokes": 4,
            "radical": "木",
            "radicalClue": "Core element: 木",
            "examples": [
                {
                    "word": "木曜日",
                    "reading": "もくようび (mokuyoubi)",
                    "meaning": "Thursday",
                    "romaji": "mokuyoubi"
                },
                {
                    "word": "木",
                    "reading": "き (ki)",
                    "meaning": "tree / wood",
                    "romaji": "ki"
                }
            ]
        },
        {
            "kanji": "金",
            "meaning": "gold, money",
            "onyomi": "キン・コン (kin / kon)",
            "kunyomi": "かね・かな (kane / kana)",
            "strokes": 8,
            "radical": "金",
            "radicalClue": "Core element: 金",
            "examples": [
                {
                    "word": "金曜日",
                    "reading": "きんようび (kinyoubi)",
                    "meaning": "Friday",
                    "romaji": "kinyoubi"
                },
                {
                    "word": "お金",
                    "reading": "おかね (okane)",
                    "meaning": "money",
                    "romaji": "okane"
                },
                {
                    "word": "金魚",
                    "reading": "きんぎょ (kingyo)",
                    "meaning": "goldfish",
                    "romaji": "kingyo"
                }
            ]
        },
        {
            "kanji": "土",
            "meaning": "soil, earth",
            "onyomi": "ド・ト (do / to)",
            "kunyomi": "つち (tsuchi)",
            "strokes": 3,
            "radical": "土",
            "radicalClue": "Core element: 土",
            "examples": [
                {
                    "word": "土曜日",
                    "reading": "どようび (doyoubi)",
                    "meaning": "Saturday",
                    "romaji": "doyoubi"
                },
                {
                    "word": "土",
                    "reading": "つち (tsuchi)",
                    "meaning": "soil / earth",
                    "romaji": "tsuchi"
                }
            ]
        },
        {
            "kanji": "山",
            "meaning": "mountain",
            "onyomi": "サン (san)",
            "kunyomi": "やま (yama)",
            "strokes": 3,
            "radical": "山",
            "radicalClue": "Core element: 山",
            "examples": [
                {
                    "word": "火山",
                    "reading": "かざん (kazan)",
                    "meaning": "volcano",
                    "romaji": "kazan"
                },
                {
                    "word": "富士山",
                    "reading": "ふじさん (fujisan)",
                    "meaning": "Mt. Fuji",
                    "romaji": "fujisan"
                }
            ]
        },
        {
            "kanji": "魚",
            "meaning": "fish",
            "onyomi": "ギョ (gyo)",
            "kunyomi": "さかな・うお (sakana / uo)",
            "strokes": 11,
            "radical": "魚",
            "radicalClue": "Core element: 魚",
            "examples": [
                {
                    "word": "金魚",
                    "reading": "きんぎょ (kingyo)",
                    "meaning": "goldfish",
                    "romaji": "kingyo"
                }
            ]
        },
        {
            "kanji": "白",
            "meaning": "white",
            "onyomi": "ハク・ビャク (haku / byaku)",
            "kunyomi": "しろ・しろ(い) (shiro / shiro(i))",
            "strokes": 5,
            "radical": "白",
            "radicalClue": "Core element: 白",
            "examples": [
                {
                    "word": "白",
                    "reading": "しろ (shiro)",
                    "meaning": "white color",
                    "romaji": "shiro"
                },
                {
                    "word": "白い",
                    "reading": "しろい (shiroi)",
                    "meaning": "white (adj)",
                    "romaji": "shiroi"
                }
            ]
        },
        {
            "kanji": "百",
            "meaning": "hundred",
            "onyomi": "ヒャク・ビャク (hyaku / byaku)",
            "kunyomi": "もも (momo)",
            "strokes": 6,
            "radical": "百",
            "radicalClue": "Core element: 百",
            "examples": [
                {
                    "word": "百",
                    "reading": "ひゃく (hyaku)",
                    "meaning": "hundred",
                    "romaji": "hyaku"
                },
                {
                    "word": "三百",
                    "reading": "さんびゃく (sanbyaku)",
                    "meaning": "three hundred",
                    "romaji": "sanbyaku"
                }
            ]
        },
        {
            "kanji": "本",
            "meaning": "book, origin",
            "onyomi": "ホン (hon)",
            "kunyomi": "もと (moto)",
            "strokes": 5,
            "radical": "本",
            "radicalClue": "Core element: 本",
            "examples": [
                {
                    "word": "本",
                    "reading": "ほん (hon)",
                    "meaning": "book",
                    "romaji": "hon"
                },
                {
                    "word": "日本",
                    "reading": "にほん (nihon)",
                    "meaning": "Japan",
                    "romaji": "nihon"
                }
            ]
        },
        {
            "kanji": "休",
            "meaning": "rest",
            "onyomi": "キュウ (kyuu)",
            "kunyomi": "やす(む) (yasu(mu))",
            "strokes": 6,
            "radical": "休",
            "radicalClue": "Core element: 休",
            "examples": [
                {
                    "word": "休み",
                    "reading": "やすみ (yasumi)",
                    "meaning": "holiday / rest",
                    "romaji": "yasumi"
                },
                {
                    "word": "休む",
                    "reading": "やすむ (yasumu)",
                    "meaning": "to rest / take day off",
                    "romaji": "yasumu"
                }
            ]
        },
        {
            "kanji": "体",
            "meaning": "body",
            "onyomi": "タイ・テイ (tai / tei)",
            "kunyomi": "からだ (karada)",
            "strokes": 7,
            "radical": "体",
            "radicalClue": "Core element: 体",
            "examples": [
                {
                    "word": "体",
                    "reading": "からだ (karada)",
                    "meaning": "body",
                    "romaji": "karada"
                }
            ]
        },
        {
            "kanji": "士",
            "meaning": "gentleman, samurai",
            "onyomi": "シ (shi)",
            "kunyomi": "さむらい (samurai)",
            "strokes": 3,
            "radical": "士",
            "radicalClue": "Core element: 士",
            "examples": [
                {
                    "word": "士",
                    "reading": "さむらい / し (samurai / shi)",
                    "meaning": "warrior / gentleman",
                    "romaji": "samurai / shi"
                }
            ]
        },
        {
            "kanji": "全",
            "meaning": "all, whole",
            "onyomi": "ゼン (zen)",
            "kunyomi": "まった(く) (matta(ku))",
            "strokes": 6,
            "radical": "全",
            "radicalClue": "Core element: 全",
            "examples": [
                {
                    "word": "全部",
                    "reading": "ぜんぶ (zenbu)",
                    "meaning": "all / everything",
                    "romaji": "zenbu"
                },
                {
                    "word": "完全",
                    "reading": "かんぜん (kanzen)",
                    "meaning": "perfect / complete",
                    "romaji": "kanzen"
                }
            ]
        },
        {
            "kanji": "生",
            "meaning": "life, birth, raw",
            "onyomi": "セイ・ショウ (sei / shou)",
            "kunyomi": "い(きる)・う(まれる)・なま (i(kiru) / u(mareru) / nama)",
            "strokes": 5,
            "radical": "生",
            "radicalClue": "Core element: 生",
            "examples": [
                {
                    "word": "学生",
                    "reading": "がくせい (gakusei)",
                    "meaning": "student",
                    "romaji": "gakusei"
                },
                {
                    "word": "先生",
                    "reading": "せんせい (sensei)",
                    "meaning": "teacher",
                    "romaji": "sensei"
                },
                {
                    "word": "一年生",
                    "reading": "いちねんせい (ichinensei)",
                    "meaning": "first-year student",
                    "romaji": "ichinensei"
                },
                {
                    "word": "生きる",
                    "reading": "いきる (ikiru)",
                    "meaning": "to live",
                    "romaji": "ikiru"
                },
                {
                    "word": "生まれる",
                    "reading": "うまれる (umareru)",
                    "meaning": "to be born",
                    "romaji": "umareru"
                },
                {
                    "word": "誕生日",
                    "reading": "たんじょうび (tanjoubi)",
                    "meaning": "birthday",
                    "romaji": "tanjoubi"
                },
                {
                    "word": "生ビール",
                    "reading": "なまビール (nama biiru)",
                    "meaning": "draft beer",
                    "romaji": "nama biiru"
                },
                {
                    "word": "生活",
                    "reading": "せいかつ (seikatsu)",
                    "meaning": "life / daily living",
                    "romaji": "seikatsu"
                }
            ]
        },
        {
            "kanji": "学",
            "meaning": "study, learning",
            "onyomi": "ガク (gaku)",
            "kunyomi": "まな(ぶ) (mana(bu))",
            "strokes": 8,
            "radical": "学",
            "radicalClue": "Core element: 学",
            "examples": [
                {
                    "word": "学生",
                    "reading": "がくせい (gakusei)",
                    "meaning": "student",
                    "romaji": "gakusei"
                },
                {
                    "word": "大学",
                    "reading": "だいがく (daigaku)",
                    "meaning": "university",
                    "romaji": "daigaku"
                }
            ]
        },
        {
            "kanji": "先",
            "meaning": "before, previous",
            "onyomi": "セン (sen)",
            "kunyomi": "さき (saki)",
            "strokes": 6,
            "radical": "先",
            "radicalClue": "Core element: 先",
            "examples": [
                {
                    "word": "先生",
                    "reading": "せんせい (sensei)",
                    "meaning": "teacher",
                    "romaji": "sensei"
                },
                {
                    "word": "先月",
                    "reading": "せんげつ (sengetsu)",
                    "meaning": "last month",
                    "romaji": "sengetsu"
                }
            ]
        },
        {
            "kanji": "年",
            "meaning": "year",
            "onyomi": "ネン (nen)",
            "kunyomi": "とし (toshi)",
            "strokes": 6,
            "radical": "年",
            "radicalClue": "Core element: 年",
            "examples": [
                {
                    "word": "一年生",
                    "reading": "いちねんせい (ichinensei)",
                    "meaning": "first-year student",
                    "romaji": "ichinensei"
                },
                {
                    "word": "二○二六年",
                    "reading": "にせんにじゅうろくねん (nisen nijuuroku-nen)",
                    "meaning": "year 2026",
                    "romaji": "nisen nijuuroku-nen"
                }
            ]
        },
        {
            "kanji": "誕",
            "meaning": "birth",
            "onyomi": "タン (tan)",
            "kunyomi": "",
            "strokes": 15,
            "radical": "誕",
            "radicalClue": "Core element: 誕",
            "examples": [
                {
                    "word": "誕生日",
                    "reading": "たんじょうび (tanjoubi)",
                    "meaning": "birthday",
                    "romaji": "tanjoubi"
                }
            ]
        },
        {
            "kanji": "活",
            "meaning": "living, activity",
            "onyomi": "カツ (katsu)",
            "kunyomi": "い(きる) (i(kiru))",
            "strokes": 9,
            "radical": "活",
            "radicalClue": "Core element: 活",
            "examples": [
                {
                    "word": "生活",
                    "reading": "せいかつ (seikatsu)",
                    "meaning": "life / daily living",
                    "romaji": "seikatsu"
                }
            ]
        }
    ],
    "vocabularyList": [
        {
            "japanese": "日曜日",
            "reading": "にちようび (nichiyoubi)",
            "english": "Sunday",
            "category": "Day",
            "notes": "日曜日は休みです。",
            "romaji": "nichiyoubi"
        },
        {
            "japanese": "月曜日",
            "reading": "げつようび (getsuyoubi)",
            "english": "Monday",
            "category": "Day",
            "notes": "月曜日、ゆきは公園へ行きます。",
            "romaji": "getsuyoubi"
        },
        {
            "japanese": "火曜日",
            "reading": "かようび (kayoubi)",
            "english": "Tuesday",
            "category": "Day",
            "notes": "火曜日、公園で花火禁止を見ます。",
            "romaji": "kayoubi"
        },
        {
            "japanese": "水曜日",
            "reading": "すいようび (suiyoubi)",
            "english": "Wednesday",
            "category": "Day",
            "notes": "水曜日、あきと水を飲みます。",
            "romaji": "suiyoubi"
        },
        {
            "japanese": "木曜日",
            "reading": "もくようび (mokuyoubi)",
            "english": "Thursday",
            "category": "Day",
            "notes": "木曜日、大きい木の下で休みます。",
            "romaji": "mokuyoubi"
        },
        {
            "japanese": "金曜日",
            "reading": "きんようび (kinyoubi)",
            "english": "Friday",
            "category": "Day",
            "notes": "金曜日、お金でジュースを買います。",
            "romaji": "kinyoubi"
        },
        {
            "japanese": "土曜日",
            "reading": "どようび (doyoubi)",
            "english": "Saturday",
            "category": "Day",
            "notes": "土曜日に買い物をします。",
            "romaji": "doyoubi"
        },
        {
            "japanese": "曜日",
            "reading": "ようび (youbi)",
            "english": "day of the week",
            "category": "Noun",
            "notes": "今日は何曜日ですか？",
            "romaji": "youbi"
        },
        {
            "japanese": "日",
            "reading": "ひ / にち (hi / nichi)",
            "english": "sun, day",
            "category": "Noun",
            "notes": "日が出る。",
            "romaji": "hi / nichi"
        },
        {
            "japanese": "月",
            "reading": "つき / げつ / がつ (tsuki / getsu / gatsu)",
            "english": "moon, month",
            "category": "Noun",
            "notes": "月が大きいです。",
            "romaji": "tsuki / getsu / gatsu"
        },
        {
            "japanese": "火",
            "reading": "ひ / か (hi / ka)",
            "english": "fire",
            "category": "Noun",
            "notes": "火をつけます。",
            "romaji": "hi / ka"
        },
        {
            "japanese": "水",
            "reading": "みず / すい (mizu / sui)",
            "english": "water",
            "category": "Noun",
            "notes": "水を飲みます。",
            "romaji": "mizu / sui"
        },
        {
            "japanese": "木",
            "reading": "き / もく (ki / moku)",
            "english": "tree, wood",
            "category": "Noun",
            "notes": "大きい木の下で休みます。",
            "romaji": "ki / moku"
        },
        {
            "japanese": "お金",
            "reading": "おかね (okane)",
            "english": "money",
            "category": "Noun",
            "notes": "お金でジュースを買います。",
            "romaji": "okane"
        },
        {
            "japanese": "土",
            "reading": "つち / ど (tsuchi / do)",
            "english": "soil, earth",
            "category": "Noun",
            "notes": "黒い土。",
            "romaji": "tsuchi / do"
        },
        {
            "japanese": "日本",
            "reading": "にほん (nihon)",
            "english": "Japan",
            "category": "Noun",
            "notes": "日本が好きです。",
            "romaji": "nihon"
        },
        {
            "japanese": "三月",
            "reading": "さんがつ (sangatsu)",
            "english": "March",
            "category": "Month",
            "notes": "三月のカレンダー。",
            "romaji": "sangatsu"
        },
        {
            "japanese": "三か月",
            "reading": "さんかげつ (sankagetsu)",
            "english": "three months",
            "category": "Counter",
            "notes": "日本に三か月います。",
            "romaji": "sankagetsu"
        },
        {
            "japanese": "白",
            "reading": "しろ (shiro)",
            "english": "white",
            "category": "Noun",
            "notes": "白い犬。",
            "romaji": "shiro"
        },
        {
            "japanese": "百",
            "reading": "ひゃく (hyaku)",
            "english": "hundred",
            "category": "Number",
            "notes": "百円です。",
            "romaji": "hyaku"
        },
        {
            "japanese": "休み",
            "reading": "やすみ (yasumi)",
            "english": "rest, holiday",
            "category": "Noun",
            "notes": "木の下で休みます。",
            "romaji": "yasumi"
        },
        {
            "japanese": "体",
            "reading": "からだ (karada)",
            "english": "body",
            "category": "Noun",
            "notes": "体が強い。",
            "romaji": "karada"
        },
        {
            "japanese": "士",
            "reading": "さむらい (samurai)",
            "english": "samurai, gentleman",
            "category": "Noun",
            "notes": "日本の士。",
            "romaji": "samurai"
        },
        {
            "japanese": "全",
            "reading": "ぜん (zen)",
            "english": "all, whole",
            "category": "Noun",
            "notes": "全部。",
            "romaji": "zen"
        },
        {
            "japanese": "花火禁止",
            "reading": "はなびきんし (hanabikinshi)",
            "english": "fireworks prohibited",
            "category": "Phrase",
            "notes": "公園で花火禁止を見ます。",
            "romaji": "hanabikinshi"
        },
        {
            "japanese": "火山",
            "reading": "かざん (kazan)",
            "english": "volcano",
            "category": "Noun",
            "notes": "富士山は火山です。",
            "romaji": "kazan"
        },
        {
            "japanese": "金魚",
            "reading": "きんぎょ (kingyo)",
            "english": "goldfish",
            "category": "Noun",
            "notes": "水の中に金魚がいます。",
            "romaji": "kingyo"
        },
        {
            "japanese": "生",
            "reading": "せい / しょう / なま (sei / shou / nama)",
            "english": "life, birth, raw",
            "category": "Noun",
            "notes": "生命。",
            "romaji": "sei / shou / nama"
        },
        {
            "japanese": "生きる",
            "reading": "いきる (ikiru)",
            "english": "to live",
            "category": "Verb",
            "notes": "強く生きる。",
            "romaji": "ikiru"
        },
        {
            "japanese": "生まれる",
            "reading": "うまれる (umareru)",
            "english": "to be born",
            "category": "Verb",
            "notes": "東京で生まれました。",
            "romaji": "umareru"
        },
        {
            "japanese": "学生",
            "reading": "がくせい (gakusei)",
            "english": "student",
            "category": "Noun",
            "notes": "わたしは日本語の学生です。",
            "romaji": "gakusei"
        },
        {
            "japanese": "先生",
            "reading": "せんせい (sensei)",
            "english": "teacher",
            "category": "Noun",
            "notes": "ニッキ先生。",
            "romaji": "sensei"
        },
        {
            "japanese": "一年生",
            "reading": "いちねんせい (ichinensei)",
            "english": "first-year student",
            "category": "Noun",
            "notes": "大学の一年生です。",
            "romaji": "ichinensei"
        },
        {
            "japanese": "誕生日",
            "reading": "たんじょうび (tanjoubi)",
            "english": "birthday",
            "category": "Noun",
            "notes": "誕生日は何月何日ですか？",
            "romaji": "tanjoubi"
        },
        {
            "japanese": "生ビール",
            "reading": "なまビール (namabiiru)",
            "english": "draft beer",
            "category": "Noun",
            "notes": "生ビールを一杯ください。",
            "romaji": "namabiiru"
        },
        {
            "japanese": "生活",
            "reading": "せいかつ (seikatsu)",
            "english": "daily life",
            "category": "Noun",
            "notes": "日本での生活。",
            "romaji": "seikatsu"
        }
    ],
    "grammarNotes": [
        {
            "title": "Weekday Suffix: 曜日 (ようび)",
            "structure": "",
            "explanation": "To name a day of the week in Japanese, take the core element kanji (日, 月, 火, 水, 木, 金, 土) and attach 曜日 (ようび).",
            "examples": [
                {
                    "japanese": "日曜日",
                    "reading": "にちようび (nichiyoubi)",
                    "english": "Sunday",
                    "romaji": "nichiyoubi"
                },
                {
                    "japanese": "水曜日",
                    "reading": "すいようび (suiyoubi)",
                    "english": "Wednesday",
                    "romaji": "suiyoubi"
                },
                {
                    "japanese": "金曜日",
                    "reading": "きんようび (kinyoubi)",
                    "english": "Friday",
                    "romaji": "kinyoubi"
                }
            ]
        },
        {
            "title": "Calendar Shorthand in Japan",
            "structure": "",
            "explanation": "Japanese calendars, receipts, and schedules almost universally list the days with their first single kanji only: 日 月 火 水 木 金 土.",
            "examples": [
                {
                    "japanese": "日 = Sunday",
                    "reading": "hi = Sunday",
                    "english": "Sunday shorthand",
                    "romaji": "hi = Sunday"
                },
                {
                    "japanese": "月 = Monday",
                    "reading": "tsuki = Monday",
                    "english": "Monday shorthand",
                    "romaji": "tsuki = Monday"
                },
                {
                    "japanese": "火 = Tuesday",
                    "reading": "hi = Tuesday",
                    "english": "Tuesday shorthand",
                    "romaji": "hi = Tuesday"
                },
                {
                    "japanese": "水 = Wednesday",
                    "reading": "mizu = Wednesday",
                    "english": "Wednesday shorthand",
                    "romaji": "mizu = Wednesday"
                },
                {
                    "japanese": "木 = Thursday",
                    "reading": "ki = Thursday",
                    "english": "Thursday shorthand",
                    "romaji": "ki = Thursday"
                },
                {
                    "japanese": "金 = Friday",
                    "reading": "kane = Friday",
                    "english": "Friday shorthand",
                    "romaji": "kane = Friday"
                },
                {
                    "japanese": "土 = Saturday",
                    "reading": "tsuchi = Saturday",
                    "english": "Saturday shorthand",
                    "romaji": "tsuchi = Saturday"
                }
            ]
        },
        {
            "title": "Modular Kanji Compounding (火 + 山 = 火山)",
            "structure": "",
            "explanation": "Kanji characters act as conceptual Lego bricks. Combining 火 (fire) and 山 (mountain) yields 火山 (volcano, かざん). Combining 金 (gold) and 魚 (fish) creates 金魚 (goldfish, きんぎょ).",
            "examples": [
                {
                    "japanese": "火 + 山 = 火山",
                    "reading": "ka + zan = kazan",
                    "english": "volcano",
                    "romaji": "ka + zan = kazan"
                },
                {
                    "japanese": "金 + 魚 = 金魚",
                    "reading": "kin + gyo = kingyo",
                    "english": "goldfish",
                    "romaji": "kin + gyo = kingyo"
                },
                {
                    "japanese": "三 + 月 = 三月",
                    "reading": "san + gatsu = sangatsu",
                    "english": "March",
                    "romaji": "san + gatsu = sangatsu"
                }
            ]
        },
        {
            "title": "The Chameleon Radical「生」",
            "structure": "",
            "explanation": "「生」expresses vitality, emergence, and learning. Placed after an institution or concept, it indicates a student (学生, 一年生); placed after 先 (before), it denotes a teacher (先生); attached to 日, it forms birthday (誕生日).",
            "examples": [
                {
                    "japanese": "学 + 生 = 学生",
                    "reading": "gaku + sei = gakusei",
                    "english": "student",
                    "romaji": "gaku + sei = gakusei"
                },
                {
                    "japanese": "先 + 生 = 先生",
                    "reading": "sen + sei = sensei",
                    "english": "teacher",
                    "romaji": "sen + sei = sensei"
                },
                {
                    "japanese": "誕 + 生 + 日 = 誕生日",
                    "reading": "tan + jou + bi = tanjoubi",
                    "english": "birthday",
                    "romaji": "tan + jou + bi = tanjoubi"
                },
                {
                    "japanese": "生ビール = draft beer",
                    "reading": "生biiru = draft beer",
                    "english": "",
                    "romaji": "生biiru = draft beer"
                }
            ]
        }
    ],
    "readingPassages": [
        {
            "title": "ゆきの一週間 (Yuki's One Week)",
            "text": "月曜日、ゆきは公園へ行きます。火曜日、公園で「花火禁止」の看板を見ます。水曜日、あきと冷たい水を飲みます。木曜日、大きい木の下で本を読みます。金曜日、お金を使って青い本を買います。土曜日、土の道で犬と散歩します。日曜日、明るい日差しの下で休みます。",
            "translation": "Monday: Yuki goes to the park. Tuesday: she sees the 'No Fireworks' sign in the park. Wednesday: she drinks cold water with Aki. Thursday: she reads a book under a big tree. Friday: she uses money to buy a blue book. Saturday: she walks the dog along the dirt path. Sunday: she rests under the bright sunshine.",
            "romaji": "Getsuyoubi, Yuki wa kouen e ikimasu. Kayoubi, kouen de \"hanabi kinshi\" no kanban o mimasu. Suiyoubi, Aki to tsumetai mizu o nomimasu. Mokuyoubi, ookii ki no shita de hon o yomimasu. Kinyoubi, okane o tsukatte aoi hon o kaimasu. Doyoubi, tsuchi no michi de inu to sanpo shimasu. Nichiyoubi, akarui hizashi no shita de yasumimasu.",
            "questions": [
                {
                    "q": "月曜日に何をしますか？ (Getsuyōbi ni nani o shimasu ka? / What do they do on Monday?)",
                    "a": "学校へ行きます。(Gakkō e ikimasu. / Go to school.)"
                },
                {
                    "q": "水曜日の元素は何ですか？ (Suiyōbi no genso wa nan desu ka? / What element is Wednesday?)",
                    "a": "水 (みず / mizu - Water) です。"
                },
                {
                    "q": "日曜日は何ですか？ (Nichiyōbi wa nan desu ka? / What is Sunday?)",
                    "a": "休み (やすみ / yasumi - Day off) です。"
                }
            ]
        }
    ],
    "practiceQuiz": [
        {
            "question": "Which day of the week is represented by the element \"Water\" (水 / mizu)?",
            "options": [
                "火曜日 (かようび / kayōbi - Tuesday)",
                "水曜日 (すいようび / suiyōbi - Wednesday)",
                "木曜日 (もくようび / mokuyōbi - Thursday)",
                "金曜日 (きんようび / kinyōbi - Friday)"
            ],
            "correct": "水曜日 (すいようび / suiyōbi - Wednesday)",
            "explanation": "水曜日 (すいようび / suiyōbi) corresponds to Water (水) and Wednesday."
        },
        {
            "question": "What does the compound word 火山 (かざん / kazan) mean?",
            "options": [
                "Firework",
                "Volcano",
                "Bonfire",
                "Hot spring"
            ],
            "correct": "Volcano",
            "explanation": "火山 (火 fire + 山 mountain) means volcano."
        },
        {
            "question": "In the word 先生 (せんせい / sensei, teacher), what does 先 (さき / saki) literally mean?",
            "options": [
                "Master",
                "Before / Earlier",
                "Wise",
                "School"
            ],
            "correct": "Before / Earlier",
            "explanation": "先 (sen) means before/ahead, and 生 means born; a teacher is literally \"born before\"."
        },
        {
            "question": "What is the reading of 10th day of the month (十日)?",
            "options": [
                "じゅうにち (jūnichi)",
                "とおか (tōka)",
                "じゅっか (jukka)",
                "と日 (tohi)"
            ],
            "correct": "とおか (tōka)",
            "explanation": "十日 is an irregular reading: とおか (tōka)."
        }
    ],
    "slides": [
        {
            "slideNumber": 1,
            "title": "日本語 Class 434 · Days of the Week & Kanji Remix",
            "blocks": [
                [
                    "に    ほん    ご                                                   .日本語 Class 44⃣4"
                ],
                [
                    "Update: AI ahh slides"
                ],
                [
                    "By: Nikki",
                    "ニッキ"
                ]
            ],
            "jpTitle": "表紙：日本語 Class 434",
            "summary": "Introduction to Class 434 focusing on day kanji, contextual readings, and compound word construction.",
            "bullets": [
                "Class: Nikki JP Class 434",
                "Theme: Days of the week (曜日) and Kanji Building Blocks",
                "Goal: Recognize day-kanji even when they are NOT weekdays"
            ],
            "highlight": "Kanji are not single words—they are modular building blocks that combine into infinite meanings."
        },
        {
            "slideNumber": 2,
            "title": "Today's Lecture Structure",
            "blocks": [
                [
                    "Todays Lecture"
                ],
                [
                    "曜日・ようび"
                ],
                [
                    "Days of the week"
                ],
                [
                    "意味・いみ"
                ],
                [
                    "Core meaning"
                ],
                [
                    "読み方・よみかた"
                ],
                [
                    "Readings change by context"
                ],
                [
                    "言葉づくり・ことば"
                ],
                [
                    "Build new words"
                ],
                [
                    "Goal: recognize day-kanji even when they are NOT weekdays 🧩"
                ]
            ],
            "jpTitle": "本日の講義内容",
            "summary": "Overview of the four main learning tracks for Class 434.",
            "bullets": [
                "曜日 (ようび) · Days of the week",
                "意味 (いみ) · Core elemental meanings (Sun, Moon, Fire, Water, Tree, Gold, Earth)",
                "読み方 (よみかた) · Readings that change depending on context",
                "言葉づくり (ことば) · Building new compound words (e.g., 火山, 金魚)"
            ],
            "highlight": "Mastering the root meanings lets you decode words you've never seen before."
        },
        {
            "slideNumber": 3,
            "title": "Kanji from Last Time (7 Elemental Weekdays)",
            "blocks": [
                [
                    "Kanji from Last time"
                ],
                [
                    "日"
                ],
                [
                    "日曜日"
                ],
                [
                    "月"
                ],
                [
                    "月曜日"
                ],
                [
                    "火"
                ],
                [
                    "火曜日"
                ],
                [
                    "水"
                ],
                [
                    "水曜日"
                ],
                [
                    "木"
                ],
                [
                    "木曜日"
                ],
                [
                    "金"
                ],
                [
                    "金曜日"
                ],
                [
                    "土"
                ],
                [
                    "土曜日"
                ],
                [
                    "日・月・火・水・木・金・土"
                ]
            ],
            "jpTitle": "前回の復習：7つの曜日漢字",
            "summary": "Quick recap of the 7 core week kanji introduced in Class 424.",
            "bullets": [
                "日 (にち) · 日曜日 (Sunday)",
                "月 (げつ) · 月曜日 (Monday)",
                "火 (か) · 火曜日 (Tuesday)",
                "水 (すい) · 水曜日 (Wednesday)",
                "木 (もく) · 木曜日 (Thursday)",
                "金 (きん) · 金曜日 (Friday)",
                "土 (ど) · 土曜日 (Saturday)",
                "Calendar sequence shorthand: 日・月・火・水・木・金・土"
            ],
            "highlight": "Remember the sequence: Sun, Moon, Fire, Water, Wood, Gold, Earth."
        },
        {
            "slideNumber": 4,
            "title": "Quick Review: Weekdays with Pronunciation",
            "blocks": [
                [
                    "Quick Review・曜日・"
                ],
                [
                    "日"
                ],
                [
                    "日曜日",
                    "にちようび",
                    "Sunday"
                ],
                [
                    "月"
                ],
                [
                    "月曜日",
                    "げつようび",
                    "Monday"
                ],
                [
                    "火"
                ],
                [
                    "火曜日",
                    "かようび",
                    "Tuesday"
                ],
                [
                    "水"
                ],
                [
                    "水曜日",
                    "すいようび",
                    "Wednesday"
                ],
                [
                    "木"
                ],
                [
                    "木曜日",
                    "もくようび",
                    "Thursday"
                ],
                [
                    "金"
                ],
                [
                    "金曜日",
                    "きんようび",
                    "Friday"
                ],
                [
                    "土"
                ],
                [
                    "土曜日",
                    "どようび",
                    "Saturday"
                ],
                [
                    "曜日 = day of the week",
                    "「ようび」sticks to the end."
                ],
                [
                    "On calendars, Japanese often uses only:",
                    "日 月 火 水 木 金 土"
                ]
            ],
            "jpTitle": "曜日まとめと発音",
            "summary": "Detailed pronunciation and English meaning for each day of the week.",
            "bullets": [
                "日曜日 (にちようび) · Sunday",
                "月曜日 (げつようび) · Monday",
                "火曜日 (かようび) · Tuesday",
                "水曜日 (すいようび) · Wednesday",
                "木曜日 (もくようび) · Thursday",
                "金曜日 (きんようび) · Friday",
                "土曜日 (どようび) · Saturday",
                "Rule: 曜日 (ようび) means 'day of the week' and always sticks to the end!"
            ],
            "highlight": "On Japanese calendars and schedules, you will often only see the single kanji: 日 月 火 水 木 金 土."
        },
        {
            "slideNumber": 5,
            "title": "Calendar Facts & March 2026 Grid",
            "blocks": [
                [
                    "Calendar・カレンダー"
                ],
                [
                    "日"
                ],
                [
                    "月"
                ],
                [
                    "火"
                ],
                [
                    "水"
                ],
                [
                    "木"
                ],
                [
                    "金"
                ],
                [
                    "土"
                ],
                [
                    "1"
                ],
                [
                    "2"
                ],
                [
                    "3"
                ],
                [
                    "4"
                ],
                [
                    "5"
                ],
                [
                    "6"
                ],
                [
                    "7"
                ],
                [
                    "8"
                ],
                [
                    "9"
                ],
                [
                    "10"
                ],
                [
                    "11"
                ],
                [
                    "12"
                ],
                [
                    "13"
                ],
                [
                    "14"
                ],
                [
                    "15"
                ],
                [
                    "16"
                ],
                [
                    "17"
                ],
                [
                    "18"
                ],
                [
                    "19"
                ],
                [
                    "20",
                    "Spring Equinox"
                ],
                [
                    "21"
                ],
                [
                    "22",
                    "29"
                ],
                [
                    "23",
                    "30"
                ],
                [
                    "24",
                    "31"
                ],
                [
                    "25"
                ],
                [
                    "26"
                ],
                [
                    "27"
                ],
                [
                    "28"
                ],
                [
                    "Facts"
                ],
                [
                    "Sunday is start of the week in Japan",
                    "Sunday is marked as red",
                    "Holidays are red",
                    "March 2026 calendar",
                    "First 10 days have different names",
                    "Days with 4 & 8 have specific way of saying(よっか、ようか)"
                ]
            ],
            "jpTitle": "カレンダーの読み方と日本の習慣",
            "summary": "Key cultural and linguistic rules for Japanese calendars.",
            "bullets": [
                "Sunday is the start of the week in Japan (column 1).",
                "Sundays and national holidays are always printed in red.",
                "The first 10 days of any month have completely unique native names (1日 = ついたち, 2日 = ふつか, etc.).",
                "Days with 4 and 8 have specific readings: 4日 (よっか), 8日 (ようか), 14日 (じゅうよっか), 24日 (にじゅうよっか)."
            ],
            "highlight": "Never say 'よんにち' or 'はちにち'—Japanese has dedicated historical readings for calendar dates."
        },
        {
            "slideNumber": 6,
            "title": "Same Kanji, Different Jobs (Core Meanings)",
            "blocks": [
                [
                    "Same Kanji, Different Jobs"
                ],
                [
                    "日"
                ],
                [
                    "ひ / にち"
                ],
                [
                    "sun, day"
                ],
                [
                    "月"
                ],
                [
                    "つき / げつ / がつ"
                ],
                [
                    "moon, month"
                ],
                [
                    "火"
                ],
                [
                    "ひ / か"
                ],
                [
                    "fire"
                ],
                [
                    "水"
                ],
                [
                    "みず / すい"
                ],
                [
                    "water"
                ],
                [
                    "木"
                ],
                [
                    "き / もく"
                ],
                [
                    "tree, wood"
                ],
                [
                    "金"
                ],
                [
                    "かね / きん"
                ],
                [
                    "money, gold"
                ],
                [
                    "土"
                ],
                [
                    "つち / ど"
                ],
                [
                    "soil, earth"
                ],
                [
                    "Kanji are not “one word.” They are reusable meaning-blocks."
                ]
            ],
            "jpTitle": "同じ漢字、異なる役割",
            "summary": "Every weekday kanji has both an On'yomi (Chinese-derived) and Kun'yomi (native Japanese) meaning.",
            "bullets": [
                "日: ひ (sun) / にち (day)",
                "月: つき (moon) / げつ / がつ (month)",
                "火: ひ (fire) / か (fire element)",
                "水: みず (water) / すい (water element)",
                "木: き (tree, wood) / もく (wood element)",
                "金: かね (money) / きん (gold/metal)",
                "土: つち (soil, earth) / ど (earth element)"
            ],
            "highlight": "Kanji are not single static words; they are modular, reusable meaning-blocks."
        },
        {
            "slideNumber": 7,
            "title": "Reading Changes in Context",
            "blocks": [
                [
                    "Reading Changes・読み方・よみかた"
                ],
                [
                    "日 = ひ"
                ],
                [
                    "日が出る",
                    "ひ が でる",
                    "sun/day sound"
                ],
                [
                    "日 = にち"
                ],
                [
                    "日曜日",
                    "にちようび",
                    "weekday sound"
                ],
                [
                    "月 = つき"
                ],
                [
                    "月がきれい",
                    "つき が きれい",
                    "moon sound"
                ],
                [
                    "月 = がつ"
                ],
                [
                    "三月",
                    "さんがつ",
                    "march"
                ],
                [
                    "金 = かね"
                ],
                [
                    "お金",
                    "おかね",
                    "money sound"
                ],
                [
                    "金 = きん"
                ],
                [
                    "金曜日",
                    "きんようび",
                    "friday"
                ],
                [
                    "日 = に"
                ],
                [
                    "日本",
                    "にほん",
                    "Japan"
                ],
                [
                    "月 = げつ"
                ],
                [
                    "三か月",
                    "さんかげつ",
                    "3 months"
                ]
            ],
            "jpTitle": "文脈による読み方の変化",
            "summary": "Concrete examples demonstrating how pronunciation changes based on surrounding words.",
            "bullets": [
                "日 = ひ: 日が出る (ひがでる · the sun rises)",
                "日 = にち: 日曜日 (にちようび · Sunday)",
                "日 = に: 日本 (にほん · Japan)",
                "月 = つき: 月がきれい (つきがきれい · the moon is beautiful)",
                "月 = がつ: 三月 (さんがつ · March)",
                "月 = げつ: 三か月 (さんかげつ · 3 months)",
                "金 = かね: お金 (おかね · money)",
                "金 = きん: 金曜日 (きんようび · Friday)"
            ],
            "highlight": "Listen to the word as a whole unit to pick the right pronunciation."
        },
        {
            "slideNumber": 8,
            "title": "Similar Kanji Look-Alike Families",
            "blocks": [
                [
                    "Similar Kanji ・漢字・かんじ"
                ],
                [
                    "日  白  百"
                ],
                [
                    "day / white / hundred"
                ],
                [
                    "木  本  休  体"
                ],
                [
                    "tree / book / rest / body"
                ],
                [
                    "土  士"
                ],
                [
                    "soil / samurai"
                ],
                [
                    "金  全"
                ],
                [
                    "gold / all"
                ],
                [
                    "ひ / しろ / ひゃく"
                ],
                [
                    "き / ほん / やす(み) / からだ"
                ],
                [
                    "つち / さむらい"
                ],
                [
                    "きん / ぜん"
                ]
            ],
            "jpTitle": "似ている漢字の見分け方",
            "summary": "Visual comparison between easily confused kanji characters.",
            "bullets": [
                "日 (ひ · day) vs 白 (しろ · white) vs 百 (ひゃく · hundred)",
                "木 (き · tree) vs 本 (ほん · book) vs 休 (やすみ · rest) vs 体 (からだ · body)",
                "土 (つち · soil) vs 士 (さむらい · samurai/gentleman)",
                "金 (きん · gold) vs 全 (ぜん · all/whole)"
            ],
            "highlight": "Notice how 木 (tree) gains a person radical 亻 to become 休 (a person resting against a tree)!"
        },
        {
            "slideNumber": 9,
            "title": "Mini Story: Yuki's One Week (ゆきの一週間)",
            "blocks": [
                [
                    "Mini Story・ゆきの一週間"
                ],
                [
                    "One week, seven kanji clues"
                ],
                [
                    "月"
                ],
                [
                    "月曜日、ゆきは公園へ行きます。"
                ],
                [
                    "Monday: Yuki goes to the park."
                ],
                [
                    "火"
                ],
                [
                    "火曜日、公園で「花火禁止」を見ます。"
                ],
                [
                    "Tuesday: she sees “No fireworks.”"
                ],
                [
                    "水"
                ],
                [
                    "水曜日、あきと水を飲みます。"
                ],
                [
                    "Wednesday: she drinks water with Aki."
                ],
                [
                    "木"
                ],
                [
                    "木曜日、大きい木の下で休みます。"
                ],
                [
                    "Thursday: she rests under a big tree."
                ],
                [
                    "金"
                ],
                [
                    "金曜日、お金でジュースを買います。"
                ],
                [
                    "Friday: she buys juice with money."
                ],
                [
                    "Question"
                ],
                [
                    "Which kanji helped you understand each sentence?"
                ],
                [
                    "Nikki JP Class · Days Kanji Remix · 10"
                ]
            ],
            "jpTitle": "ミニストーリー：ゆきの一週間",
            "summary": "A 5-day story connecting each day's kanji to a natural daily action.",
            "bullets": [
                "月 (Monday): 月曜日、ゆきは公園へ行きます。 (Monday: Yuki goes to the park.)",
                "火 (Tuesday): 火曜日、公園で「花火禁止」を見ます。 (Tuesday: she sees 'No fireworks' sign.)",
                "水 (Wednesday): 水曜日、あきと水を飲みます。 (Wednesday: she drinks water with Aki.)",
                "木 (Thursday): 木曜日、大きい木の下で休みます。 (Thursday: she rests under a big tree.)",
                "金 (Friday): 金曜日、お金でジュースを買います。 (Friday: she buys juice with money.)"
            ],
            "highlight": "Every day sentence incorporates the core elemental kanji (月, 火, 水, 木, 金) into the story context."
        },
        {
            "slideNumber": 10,
            "title": "Kanji Clue Q&A Drill",
            "blocks": [
                [
                    "Answer QnA・質問"
                ],
                [
                    "Use the kanji clue first"
                ],
                [
                    "Q1  火 + 山 = ?"
                ],
                [
                    "a. park  b. volcano  c. tree"
                ],
                [
                    "Q2  水 + 曜日 = ?"
                ],
                [
                    "a. Tuesday  b. Wednesday  c. Saturday"
                ],
                [
                    "Q3  三 + 月 = ?"
                ],
                [
                    "a. March  b. moon  c. Monday"
                ],
                [
                    "Q4  金 + 魚 = ?"
                ],
                [
                    "a. money  b. goldfish  c. Friday"
                ],
                [
                    "Do not translate too fast. First notice the kanji-brick."
                ],
                [
                    "Nikki JP Class · Days Kanji Remix · 11"
                ]
            ],
            "jpTitle": "漢字のヒントで解く問題",
            "summary": "Four multiple-choice questions testing kanji compound logic.",
            "bullets": [
                "Q1: 火 + 山 = ? (a. park, b. volcano, c. tree)",
                "Q2: 水 + 曜日 = ? (a. Tuesday, b. Wednesday, c. Saturday)",
                "Q3: 三 + 月 = ? (a. March, b. moon, c. Monday)",
                "Q4: 金 + 魚 = ? (a. money, b. goldfish, c. Friday)"
            ],
            "highlight": "Do not translate too fast. First notice the kanji-bricks!"
        },
        {
            "slideNumber": 11,
            "title": "Answer Sheet: Compound Clues",
            "blocks": [
                [
                    "Answer Sheet・答え"
                ],
                [
                    "Q1"
                ],
                [
                    "火山 = かざん = volcano"
                ],
                [
                    "Q2"
                ],
                [
                    "水曜日 = すいようび = Wednesday"
                ],
                [
                    "Q3"
                ],
                [
                    "三月 = さんがつ = March"
                ],
                [
                    "Q4"
                ],
                [
                    "金魚 = きんぎょ = goldfish"
                ]
            ],
            "jpTitle": "問題の答え・解説",
            "summary": "Official answers and phonetic readings for the compound kanji drill.",
            "bullets": [
                "Q1 Answer: 火山 = かざん = Volcano (Fire + Mountain)",
                "Q2 Answer: 水曜日 = すいようび = Wednesday (Water + Weekday)",
                "Q3 Answer: 三月 = さんがつ = March (Three + Month)",
                "Q4 Answer: 金魚 = きんぎょ = Goldfish (Gold + Fish)"
            ],
            "highlight": "Compound kanji combine simple concepts to create completely new words!"
        },
        {
            "slideNumber": 12,
            "title": "Guessing Game: 7 Days & Cosmic Elements",
            "blocks": [
                [
                    "Guessing Game・漢字あてゲーム"
                ],
                [
                    "1"
                ],
                [
                    "☀️ Sun / day"
                ],
                [
                    "2"
                ],
                [
                    "🌙 Moon / month"
                ],
                [
                    "3"
                ],
                [
                    "🔥 Fire"
                ],
                [
                    "4"
                ],
                [
                    "💧 Water"
                ],
                [
                    "5"
                ],
                [
                    "🌳 Tree / wood"
                ],
                [
                    "6"
                ],
                [
                    "💰 Gold / money"
                ],
                [
                    "7"
                ],
                [
                    "🪨 Soil / earth"
                ],
                [
                    "水"
                ],
                [
                    "金"
                ],
                [
                    "日"
                ],
                [
                    "土"
                ],
                [
                    "月"
                ],
                [
                    "木"
                ],
                [
                    "火"
                ],
                [
                    "A"
                ],
                [
                    "B"
                ],
                [
                    "C"
                ],
                [
                    "D"
                ],
                [
                    "E"
                ],
                [
                    "F"
                ],
                [
                    "G"
                ]
            ],
            "jpTitle": "漢字あてゲーム：7つの要素",
            "summary": "Matching exercise between natural symbols and kanji characters.",
            "bullets": [
                "1. ☀️ Sun / day → 日",
                "2. 🌙 Moon / month → 月",
                "3. 🔥 Fire → 火",
                "4. 💧 Water → 水",
                "5. 🌳 Tree / wood → 木",
                "6. 💰 Gold / money → 金",
                "7. 🪨 Soil / earth → 土"
            ],
            "highlight": "The Japanese days of the week are identical to the celestial elements."
        },
        {
            "slideNumber": 13,
            "title": "生: One Kanji, Many N5 Meanings",
            "blocks": [
                [
                    "生: One Kanji, Many N5 Meanings"
                ],
                [
                    "生"
                ],
                [
                    "life / student"
                ],
                [
                    "生"
                ],
                [
                    "life / birth"
                ],
                [
                    "生きる"
                ],
                [
                    "to live"
                ],
                [
                    "生まれる"
                ],
                [
                    "to be born"
                ],
                [
                    "せい"
                ],
                [
                    "しょう"
                ],
                [
                    "いきる"
                ],
                [
                    "うまれる"
                ]
            ],
            "jpTitle": "「生」：一つの漢字、多くの意味",
            "summary": "Introduction to the chameleon kanji '生' and its diverse semantic range.",
            "bullets": [
                "Core concept: Life, student, birth, living, raw",
                "生きる (いきる · to live)",
                "生まれる (うまれる · to be born)",
                "Common readings: せい, しょう, いきる, うまれる, なま"
            ],
            "highlight": "「生」is one of the most versatile and frequently tested kanji on the JLPT N5."
        },
        {
            "slideNumber": 14,
            "title": "「生」in Common N5 Vocabulary",
            "blocks": [
                [
                    "生 in Common N5 Words"
                ],
                [
                    "学生"
                ],
                [
                    "がくせい"
                ],
                [
                    "student"
                ],
                [
                    "先生"
                ],
                [
                    "せんせい"
                ],
                [
                    "teacher"
                ],
                [
                    "一年生"
                ],
                [
                    "いちねんせい"
                ],
                [
                    "first-year student"
                ],
                [
                    "生きる"
                ],
                [
                    "いきる"
                ],
                [
                    "to live"
                ],
                [
                    "生まれる"
                ],
                [
                    "うまれる"
                ],
                [
                    "to be born"
                ],
                [
                    "誕生日"
                ],
                [
                    "たんじょうび"
                ],
                [
                    "birthday"
                ],
                [
                    "生ビール"
                ],
                [
                    "なまビール"
                ],
                [
                    "draft beer"
                ],
                [
                    "Read the whole word first—生 changes with its job."
                ]
            ],
            "jpTitle": "日常・N5でよく使う「生」の言葉",
            "summary": "Six essential everyday vocabulary words built with the kanji「生」.",
            "bullets": [
                "学生 (がくせい) · Student",
                "先生 (せんせい) · Teacher",
                "一年生 (いちねんせい) · First-year student",
                "生きる (いきる) · To live",
                "生まれる (うまれる) · To be born",
                "誕生日 (たんじょうび) · Birthday",
                "生ビール (なまビール) · Draft beer (raw/unpasteurized beer)"
            ],
            "highlight": "Read the whole word first—「生」changes its pronunciation based on its grammatical job."
        },
        {
            "slideNumber": 15,
            "title": "Reading Changes of「生」",
            "blocks": [
                [
                    "Reading Changes・生・せい"
                ],
                [
                    "生 = せい"
                ],
                [
                    "学生",
                    "がくせい",
                    "student"
                ],
                [
                    "生 = せい"
                ],
                [
                    "先生",
                    "せんせい",
                    "teacher"
                ],
                [
                    "生 = せい"
                ],
                [
                    "一年生",
                    "いちねんせい",
                    "first-year student"
                ],
                [
                    "生 = い"
                ],
                [
                    "生きる",
                    "いきる",
                    "to live"
                ],
                [
                    "生 = う"
                ],
                [
                    "生まれる",
                    "うまれる",
                    "to be born"
                ],
                [
                    "生 = じょう"
                ],
                [
                    "誕生日",
                    "たんじょうび",
                    "birthday"
                ],
                [
                    "生 = なま"
                ],
                [
                    "生ビール",
                    "なまビール",
                    "draft beer"
                ],
                [
                    "生 = せい"
                ],
                [
                    "生活",
                    "せいかつ",
                    "daily life"
                ]
            ],
            "jpTitle": "「生」の読み方の変化パターン",
            "summary": "Comprehensive reference of every phonetic shift of the kanji「生」.",
            "bullets": [
                "生 = せい: 学生 (がくせい · student), 先生 (せんせい · teacher), 一年生 (いちねんせい), 生活 (せいかつ · daily life)",
                "生 = い: 生きる (いきる · to live)",
                "生 = う: 生まれる (うまれる · to be born)",
                "生 = じょう: 誕生日 (たんじょうび · birthday)",
                "生 = なま: 生ビール (なまビール · draft beer)"
            ],
            "highlight": "When paired with other Sino-Japanese roots, it is usually 'せい'; in native verbs, it is 'い' or 'う'."
        },
        {
            "slideNumber": 16,
            "title": "Quick Practice:「生」Mastery Quiz",
            "blocks": [
                [
                    "Quick Practice・生"
                ],
                [
                    "Q1  学 + 生 = ?"
                ],
                [
                    "a. teacher  b. student  c. birthday"
                ],
                [
                    "Q2  先 + 生 = ?"
                ],
                [
                    "a. teacher  b. life  c. draft beer"
                ],
                [
                    "Q3  生きる = ?"
                ],
                [
                    "a. to be born  b. to live  c. to study"
                ],
                [
                    "Q4  誕生日 = ?"
                ],
                [
                    "a. birthday  b. student  c. daily life"
                ]
            ],
            "jpTitle": "「生」の理解度チェック",
            "summary": "Final check quiz testing vocabulary and meaning associations with「生」.",
            "bullets": [
                "Q1: 学 + 生 = ? → b. student (学生 · がくせい)",
                "Q2: 先 + 生 = ? → a. teacher (先生 · せんせい)",
                "Q3: 生きる = ? → b. to live (いきる)",
                "Q4: 誕生日 = ? → a. birthday (たんじょうび)"
            ],
            "highlight": "You have mastered the foundational building blocks of weekdays and the versatile kanji「生」!"
        }
    ],
    "title": "Days of the Week, Context Readings & The Kanji「生」",
    "jpTitle": "第4回：曜日・意味・読み方の変化・漢字「生」",
    "vocabulary": [
        {
            "id": "v4-1",
            "kanji": "日曜日",
            "furigana": "にちようび",
            "romaji": "nichiyoubi",
            "english": "Sunday",
            "type": "Day",
            "example": "日曜日は休みです。"
        },
        {
            "id": "v4-2",
            "kanji": "月曜日",
            "furigana": "げつようび",
            "romaji": "getsuyoubi",
            "english": "Monday",
            "type": "Day",
            "example": "月曜日、ゆきは公園へ行きます。"
        },
        {
            "id": "v4-3",
            "kanji": "火曜日",
            "furigana": "かようび",
            "romaji": "kayoubi",
            "english": "Tuesday",
            "type": "Day",
            "example": "火曜日、公園で花火禁止を見ます。"
        },
        {
            "id": "v4-4",
            "kanji": "水曜日",
            "furigana": "すいようび",
            "romaji": "suiyoubi",
            "english": "Wednesday",
            "type": "Day",
            "example": "水曜日、あきと水を飲みます。"
        },
        {
            "id": "v4-5",
            "kanji": "木曜日",
            "furigana": "もくようび",
            "romaji": "mokuyoubi",
            "english": "Thursday",
            "type": "Day",
            "example": "木曜日、大きい木の下で休みます。"
        },
        {
            "id": "v4-6",
            "kanji": "金曜日",
            "furigana": "きんようび",
            "romaji": "kinyoubi",
            "english": "Friday",
            "type": "Day",
            "example": "金曜日、お金でジュースを買います。"
        },
        {
            "id": "v4-7",
            "kanji": "土曜日",
            "furigana": "どようび",
            "romaji": "doyoubi",
            "english": "Saturday",
            "type": "Day",
            "example": "土曜日に買い物をします。"
        },
        {
            "id": "v4-8",
            "kanji": "曜日",
            "furigana": "ようび",
            "romaji": "youbi",
            "english": "day of the week",
            "type": "Noun",
            "example": "今日は何曜日ですか？"
        },
        {
            "id": "v4-9",
            "kanji": "日",
            "furigana": "ひ / にち",
            "romaji": "hi / nichi",
            "english": "sun, day",
            "type": "Noun",
            "example": "日が出る。"
        },
        {
            "id": "v4-10",
            "kanji": "月",
            "furigana": "つき / げつ / がつ",
            "romaji": "tsuki / getsu / gatsu",
            "english": "moon, month",
            "type": "Noun",
            "example": "月が大きいです。"
        },
        {
            "id": "v4-11",
            "kanji": "火",
            "furigana": "ひ / か",
            "romaji": "hi / ka",
            "english": "fire",
            "type": "Noun",
            "example": "火をつけます。"
        },
        {
            "id": "v4-12",
            "kanji": "水",
            "furigana": "みず / すい",
            "romaji": "mizu / sui",
            "english": "water",
            "type": "Noun",
            "example": "水を飲みます。"
        },
        {
            "id": "v4-13",
            "kanji": "木",
            "furigana": "き / もく",
            "romaji": "ki / moku",
            "english": "tree, wood",
            "type": "Noun",
            "example": "大きい木の下で休みます。"
        },
        {
            "id": "v4-14",
            "kanji": "お金",
            "furigana": "おかね",
            "romaji": "okane",
            "english": "money",
            "type": "Noun",
            "example": "お金でジュースを買います。"
        },
        {
            "id": "v4-15",
            "kanji": "土",
            "furigana": "つち / ど",
            "romaji": "tsuchi / do",
            "english": "soil, earth",
            "type": "Noun",
            "example": "黒い土。"
        },
        {
            "id": "v4-16",
            "kanji": "日本",
            "furigana": "にほん",
            "romaji": "nihon",
            "english": "Japan",
            "type": "Noun",
            "example": "日本が好きです。"
        },
        {
            "id": "v4-17",
            "kanji": "三月",
            "furigana": "さんがつ",
            "romaji": "sangatsu",
            "english": "March",
            "type": "Month",
            "example": "三月のカレンダー。"
        },
        {
            "id": "v4-18",
            "kanji": "三か月",
            "furigana": "さんかげつ",
            "romaji": "sankagetsu",
            "english": "three months",
            "type": "Counter",
            "example": "日本に三か月います。"
        },
        {
            "id": "v4-19",
            "kanji": "白",
            "furigana": "しろ",
            "romaji": "shiro",
            "english": "white",
            "type": "Noun",
            "example": "白い犬。"
        },
        {
            "id": "v4-20",
            "kanji": "百",
            "furigana": "ひゃく",
            "romaji": "hyaku",
            "english": "hundred",
            "type": "Number",
            "example": "百円です。"
        },
        {
            "id": "v4-21",
            "kanji": "休み",
            "furigana": "やすみ",
            "romaji": "yasumi",
            "english": "rest, holiday",
            "type": "Noun",
            "example": "木の下で休みます。"
        },
        {
            "id": "v4-22",
            "kanji": "体",
            "furigana": "からだ",
            "romaji": "karada",
            "english": "body",
            "type": "Noun",
            "example": "体が強い。"
        },
        {
            "id": "v4-23",
            "kanji": "士",
            "furigana": "さむらい",
            "romaji": "samurai",
            "english": "samurai, gentleman",
            "type": "Noun",
            "example": "日本の士。"
        },
        {
            "id": "v4-24",
            "kanji": "全",
            "furigana": "ぜん",
            "romaji": "zen",
            "english": "all, whole",
            "type": "Noun",
            "example": "全部。"
        },
        {
            "id": "v4-25",
            "kanji": "花火禁止",
            "furigana": "はなびきんし",
            "romaji": "hanabi kinshi",
            "english": "fireworks prohibited",
            "type": "Phrase",
            "example": "公園で花火禁止を見ます。"
        },
        {
            "id": "v4-26",
            "kanji": "火山",
            "furigana": "かざん",
            "romaji": "kazan",
            "english": "volcano",
            "type": "Noun",
            "example": "富士山は火山です。"
        },
        {
            "id": "v4-27",
            "kanji": "金魚",
            "furigana": "きんぎょ",
            "romaji": "kingyo",
            "english": "goldfish",
            "type": "Noun",
            "example": "水の中に金魚がいます。"
        },
        {
            "id": "v4-28",
            "kanji": "生",
            "furigana": "せい / しょう / なま",
            "romaji": "sei / shou / nama",
            "english": "life, birth, raw",
            "type": "Noun",
            "example": "生命。"
        },
        {
            "id": "v4-29",
            "kanji": "生きる",
            "furigana": "いきる",
            "romaji": "ikiru",
            "english": "to live",
            "type": "Verb",
            "example": "強く生きる。"
        },
        {
            "id": "v4-30",
            "kanji": "生まれる",
            "furigana": "うまれる",
            "romaji": "umareru",
            "english": "to be born",
            "type": "Verb",
            "example": "東京で生まれました。"
        },
        {
            "id": "v4-31",
            "kanji": "学生",
            "furigana": "がくせい",
            "romaji": "gakusei",
            "english": "student",
            "type": "Noun",
            "example": "わたしは日本語の学生です。"
        },
        {
            "id": "v4-32",
            "kanji": "先生",
            "furigana": "せんせい",
            "romaji": "sensei",
            "english": "teacher",
            "type": "Noun",
            "example": "ニッキ先生。"
        },
        {
            "id": "v4-33",
            "kanji": "一年生",
            "furigana": "いちねんせい",
            "romaji": "ichinensei",
            "english": "first-year student",
            "type": "Noun",
            "example": "大学の一年生です。"
        },
        {
            "id": "v4-34",
            "kanji": "誕生日",
            "furigana": "たんじょうび",
            "romaji": "tanjoubi",
            "english": "birthday",
            "type": "Noun",
            "example": "誕生日は何月何日ですか？"
        },
        {
            "id": "v4-35",
            "kanji": "生ビール",
            "furigana": "なまビール",
            "romaji": "namabiiru",
            "english": "draft beer",
            "type": "Noun",
            "example": "生ビールを一杯ください。"
        },
        {
            "id": "v4-36",
            "kanji": "生活",
            "furigana": "せいかつ",
            "romaji": "seikatsu",
            "english": "daily life",
            "type": "Noun",
            "example": "日本での生活。"
        }
    ],
    "kanji": [
        {
            "kanji": "日",
            "onyomi": "ニチ・ジツ",
            "kunyomi": "ひ・び・か",
            "meaning": "sun, day",
            "strokes": 4,
            "examples": [
                "日曜日",
                "日本",
                "誕生日"
            ]
        },
        {
            "kanji": "月",
            "onyomi": "ゲツ・ガツ",
            "kunyomi": "つき",
            "meaning": "moon, month",
            "strokes": 4,
            "examples": [
                "月曜日",
                "三月",
                "三か月"
            ]
        },
        {
            "kanji": "火",
            "onyomi": "カ",
            "kunyomi": "ひ",
            "meaning": "fire",
            "strokes": 4,
            "examples": [
                "火曜日",
                "火山",
                "花火"
            ]
        },
        {
            "kanji": "水",
            "onyomi": "スイ",
            "kunyomi": "みず",
            "meaning": "water",
            "strokes": 4,
            "examples": [
                "水曜日",
                "水"
            ]
        },
        {
            "kanji": "木",
            "onyomi": "モク・ボク",
            "kunyomi": "き・こ",
            "meaning": "tree, wood",
            "strokes": 4,
            "examples": [
                "木曜日",
                "木"
            ]
        },
        {
            "kanji": "金",
            "onyomi": "キン・コン",
            "kunyomi": "かね・かな",
            "meaning": "gold, money",
            "strokes": 8,
            "examples": [
                "金曜日",
                "お金",
                "金魚"
            ]
        },
        {
            "kanji": "土",
            "onyomi": "ド・ト",
            "kunyomi": "つち",
            "meaning": "soil, earth",
            "strokes": 3,
            "examples": [
                "土曜日",
                "土"
            ]
        },
        {
            "kanji": "山",
            "onyomi": "サン",
            "kunyomi": "やま",
            "meaning": "mountain",
            "strokes": 3,
            "examples": [
                "火山",
                "富士山"
            ]
        },
        {
            "kanji": "魚",
            "onyomi": "ギョ",
            "kunyomi": "さかな・うお",
            "meaning": "fish",
            "strokes": 11,
            "examples": [
                "金魚"
            ]
        },
        {
            "kanji": "白",
            "onyomi": "ハク・ビャク",
            "kunyomi": "しろ・しろ(い)",
            "meaning": "white",
            "strokes": 5,
            "examples": [
                "白",
                "白い"
            ]
        },
        {
            "kanji": "百",
            "onyomi": "ヒャク・ビャク",
            "kunyomi": "もも",
            "meaning": "hundred",
            "strokes": 6,
            "examples": [
                "百",
                "三百"
            ]
        },
        {
            "kanji": "本",
            "onyomi": "ホン",
            "kunyomi": "もと",
            "meaning": "book, origin",
            "strokes": 5,
            "examples": [
                "本",
                "日本"
            ]
        },
        {
            "kanji": "休",
            "onyomi": "キュウ",
            "kunyomi": "やす(む)",
            "meaning": "rest",
            "strokes": 6,
            "examples": [
                "休み",
                "休む"
            ]
        },
        {
            "kanji": "体",
            "onyomi": "タイ・テイ",
            "kunyomi": "からだ",
            "meaning": "body",
            "strokes": 7,
            "examples": [
                "体"
            ]
        },
        {
            "kanji": "士",
            "onyomi": "シ",
            "kunyomi": "さむらい",
            "meaning": "gentleman, samurai",
            "strokes": 3,
            "examples": [
                "士"
            ]
        },
        {
            "kanji": "全",
            "onyomi": "ゼン",
            "kunyomi": "まった(く)",
            "meaning": "all, whole",
            "strokes": 6,
            "examples": [
                "全部",
                "完全"
            ]
        },
        {
            "kanji": "生",
            "onyomi": "セイ・ショウ",
            "kunyomi": "い(きる)・う(まれる)・なま",
            "meaning": "life, birth, raw",
            "strokes": 5,
            "examples": [
                "学生",
                "先生",
                "一年生",
                "生きる",
                "生まれる",
                "誕生日",
                "生ビール",
                "生活"
            ]
        },
        {
            "kanji": "学",
            "onyomi": "ガク",
            "kunyomi": "まな(ぶ)",
            "meaning": "study, learning",
            "strokes": 8,
            "examples": [
                "学生",
                "大学"
            ]
        },
        {
            "kanji": "先",
            "onyomi": "セン",
            "kunyomi": "さき",
            "meaning": "before, previous",
            "strokes": 6,
            "examples": [
                "先生",
                "先月"
            ]
        },
        {
            "kanji": "年",
            "onyomi": "ネン",
            "kunyomi": "とし",
            "meaning": "year",
            "strokes": 6,
            "examples": [
                "一年生",
                "二○二六年"
            ]
        },
        {
            "kanji": "誕",
            "onyomi": "タン",
            "kunyomi": "",
            "meaning": "birth",
            "strokes": 15,
            "examples": [
                "誕生日"
            ]
        },
        {
            "kanji": "活",
            "onyomi": "カツ",
            "kunyomi": "い(きる)",
            "meaning": "living, activity",
            "strokes": 9,
            "examples": [
                "生活"
            ]
        }
    ]
},
    {
    "id": "day-5",
    "dayNumber": 5,
    "classCode": "Class 444",
    "theme": "Action Verbs, Body Clues, Calendar Dates 1–10 & Telling Time",
    "japaneseTheme": "動作・漢字の身体ヒント・日付（1日〜10日）・時刻と分 (Dōsa, karada hinto, hizuke, jikoku to fun)",
    "subtitle": "Discover hidden body parts in action verbs (耳, 目, 言), master the irregular 1日〜10日 date readings, and tell exact clock times",
    "description": "Master 6 core action verbs (見る, 聞く, 話す, 読む, 書く, 行く/帰る), sensory body clues (目, 耳, 口, 舌), 1st to 10th irregular calendar dates, telling time (時, 分, 半, 午前, 午後), and Yuki’s park day reading.",
    "badge": "Class 444 · Action Verbs & Time",
    "goals": [
        "Spot anatomical clues in action kanji: 耳 (ear) in 聞く, 目 (eye) in 見る, 言 (speech) in 話す & 読む",
        "Master the 6 core action verbs: 見る, 聞く, 話す, 読む, 書く, 行く",
        "Learn irregular calendar date readings for 1日 to 10日 (ついたち〜とおか)",
        "Tell exact clock time: Hours (1時〜12時 with 4時 よじ, 7時 しちじ, 9時 くじ) & Minutes (1分〜10分)",
        "Construct full Japanese sentences: [Person] は [Time] に [Place] で [Object] を [Verb]"
    ],
    "keyHighlights": [
        "Kanji Clue Superpower: You don't need to guess verb meanings from scratch! Look for the body radical: 耳 (ear) = 聞く (listen), 目 (eye) = 見る (see), 言 (words) = 話す (speak) and 読む (read)!",
        "Special Dates 1-10: 1日 ついたち, 2日 ふつか, 3日 みっか, 4日 よっか, 5日 いつか, 6日 むいか, 7日 なのか, 8日 ようか, 9日 ここのか, 10日 とおか. Notice the rhythm!",
        "Irregular Hours: 4 o'clock is よじ (never 'yonji'), 7 o'clock is しちじ (rarely 'nanaji'), and 9 o'clock is くじ (never 'kyuuji')!"
    ],
    "kanjiList": [
        {
            "kanji": "見",
            "meaning": "see, look, watch",
            "onyomi": "ケン (ken)",
            "kunyomi": "み(る)・み(せる) (mi(ru) / mi(seru))",
            "strokes": 7,
            "radical": "見",
            "radicalClue": "Core element: 見",
            "examples": [
                {
                    "word": "見る",
                    "reading": "みる (miru)",
                    "meaning": "to see / watch",
                    "romaji": "miru"
                },
                {
                    "word": "見ます",
                    "reading": "みます (mimasu)",
                    "meaning": "see / watch (polite)",
                    "romaji": "mimasu"
                }
            ]
        },
        {
            "kanji": "聞",
            "meaning": "hear, listen, ask",
            "onyomi": "ブン・モン (bun / mon)",
            "kunyomi": "き(く)・き(こえる) (ki(ku) / ki(koeru))",
            "strokes": 14,
            "radical": "聞",
            "radicalClue": "Core element: 聞",
            "examples": [
                {
                    "word": "聞く",
                    "reading": "きく (kiku)",
                    "meaning": "to hear / listen",
                    "romaji": "kiku"
                },
                {
                    "word": "聞きます",
                    "reading": "ききます (kikimasu)",
                    "meaning": "listen (polite)",
                    "romaji": "kikimasu"
                }
            ]
        },
        {
            "kanji": "話",
            "meaning": "talk, speak, story",
            "onyomi": "ワ (wa)",
            "kunyomi": "はな(す)・はなし (hana(su) / hanashi)",
            "strokes": 13,
            "radical": "話",
            "radicalClue": "Core element: 話",
            "examples": [
                {
                    "word": "話す",
                    "reading": "はなす (hanasu)",
                    "meaning": "to speak / talk",
                    "romaji": "hanasu"
                },
                {
                    "word": "話します",
                    "reading": "はなします (hanashimasu)",
                    "meaning": "speak (polite)",
                    "romaji": "hanashimasu"
                }
            ]
        },
        {
            "kanji": "読",
            "meaning": "read",
            "onyomi": "ドク・トク (doku / toku)",
            "kunyomi": "よ(む) (yo(mu))",
            "strokes": 14,
            "radical": "読",
            "radicalClue": "Core element: 読",
            "examples": [
                {
                    "word": "読む",
                    "reading": "よむ (yomu)",
                    "meaning": "to read",
                    "romaji": "yomu"
                },
                {
                    "word": "読みます",
                    "reading": "よみます (yomimasu)",
                    "meaning": "read (polite)",
                    "romaji": "yomimasu"
                }
            ]
        },
        {
            "kanji": "書",
            "meaning": "write, book",
            "onyomi": "ショ (sho)",
            "kunyomi": "か(く) (ka(ku))",
            "strokes": 10,
            "radical": "書",
            "radicalClue": "Core element: 書",
            "examples": [
                {
                    "word": "書く",
                    "reading": "かく (kaku)",
                    "meaning": "to write",
                    "romaji": "kaku"
                },
                {
                    "word": "書きます",
                    "reading": "かきます (kakimasu)",
                    "meaning": "write (polite)",
                    "romaji": "kakimasu"
                }
            ]
        },
        {
            "kanji": "行",
            "meaning": "go, act",
            "onyomi": "コウ・ギョウ (kou / gyou)",
            "kunyomi": "い(く)・ゆ(く)・おこな(う) (i(ku) / yu(ku) / okona(u))",
            "strokes": 6,
            "radical": "行",
            "radicalClue": "Core element: 行",
            "examples": [
                {
                    "word": "行く",
                    "reading": "いく (iku)",
                    "meaning": "to go",
                    "romaji": "iku"
                },
                {
                    "word": "行きます",
                    "reading": "いきます (ikimasu)",
                    "meaning": "go (polite)",
                    "romaji": "ikimasu"
                }
            ]
        },
        {
            "kanji": "帰",
            "meaning": "return, go home",
            "onyomi": "キ (ki)",
            "kunyomi": "かえ(る) (kae(ru))",
            "strokes": 10,
            "radical": "帰",
            "radicalClue": "Core element: 帰",
            "examples": [
                {
                    "word": "帰る",
                    "reading": "かえる (kaeru)",
                    "meaning": "to return / go home",
                    "romaji": "kaeru"
                },
                {
                    "word": "帰ります",
                    "reading": "かえります (kaerimasu)",
                    "meaning": "return (polite)",
                    "romaji": "kaerimasu"
                }
            ]
        },
        {
            "kanji": "耳",
            "meaning": "ear",
            "onyomi": "ジ (ji)",
            "kunyomi": "みみ (mimi)",
            "strokes": 6,
            "radical": "耳",
            "radicalClue": "Core element: 耳",
            "examples": [
                {
                    "word": "耳",
                    "reading": "みみ (mimi)",
                    "meaning": "ear",
                    "romaji": "mimi"
                }
            ]
        },
        {
            "kanji": "口",
            "meaning": "mouth",
            "onyomi": "コウ・ク (kou / ku)",
            "kunyomi": "くち (kuchi)",
            "strokes": 3,
            "radical": "口",
            "radicalClue": "Core element: 口",
            "examples": [
                {
                    "word": "口",
                    "reading": "くち (kuchi)",
                    "meaning": "mouth",
                    "romaji": "kuchi"
                }
            ]
        },
        {
            "kanji": "目",
            "meaning": "eye",
            "onyomi": "モク・ボク (moku / boku)",
            "kunyomi": "め・ま (me / ma)",
            "strokes": 5,
            "radical": "目",
            "radicalClue": "Core element: 目",
            "examples": [
                {
                    "word": "目",
                    "reading": "め (me)",
                    "meaning": "eye",
                    "romaji": "me"
                }
            ]
        },
        {
            "kanji": "舌",
            "meaning": "tongue",
            "onyomi": "ゼツ (zetsu)",
            "kunyomi": "した (shita)",
            "strokes": 6,
            "radical": "舌",
            "radicalClue": "Core element: 舌",
            "examples": [
                {
                    "word": "舌",
                    "reading": "した (shita)",
                    "meaning": "tongue",
                    "romaji": "shita"
                }
            ]
        },
        {
            "kanji": "時",
            "meaning": "time, hour",
            "onyomi": "ジ (ji)",
            "kunyomi": "とき (toki)",
            "strokes": 10,
            "radical": "時",
            "radicalClue": "Core element: 時",
            "examples": [
                {
                    "word": "時間",
                    "reading": "じかん (jikan)",
                    "meaning": "time / hours",
                    "romaji": "jikan"
                },
                {
                    "word": "何時",
                    "reading": "なんじ (nanji)",
                    "meaning": "what time",
                    "romaji": "nanji"
                },
                {
                    "word": "一時",
                    "reading": "いちじ (ichiji)",
                    "meaning": "1 o clock",
                    "romaji": "ichiji"
                }
            ]
        },
        {
            "kanji": "分",
            "meaning": "minute, part, understand",
            "onyomi": "フン・ブン・プン (fun / bun / pun)",
            "kunyomi": "わ(ける) (wa(keru))",
            "strokes": 4,
            "radical": "分",
            "radicalClue": "Core element: 分",
            "examples": [
                {
                    "word": "分",
                    "reading": "ふん / ぷん (fun / pun)",
                    "meaning": "minute / part",
                    "romaji": "fun / pun"
                },
                {
                    "word": "十分",
                    "reading": "じゅっぷん / じゅうぶん (juppun / juubun)",
                    "meaning": "10 minutes / enough",
                    "romaji": "juppun / juubun"
                },
                {
                    "word": "一分",
                    "reading": "いっぷん (ippun)",
                    "meaning": "one minute",
                    "romaji": "ippun"
                }
            ]
        },
        {
            "kanji": "前",
            "meaning": "before, front",
            "onyomi": "ゼン (zen)",
            "kunyomi": "まえ (mae)",
            "strokes": 9,
            "radical": "前",
            "radicalClue": "Core element: 前",
            "examples": [
                {
                    "word": "午前",
                    "reading": "ごぜん (gozen)",
                    "meaning": "morning / AM",
                    "romaji": "gozen"
                },
                {
                    "word": "名前",
                    "reading": "なまえ (namae)",
                    "meaning": "name",
                    "romaji": "namae"
                }
            ]
        },
        {
            "kanji": "後",
            "meaning": "after, back, behind",
            "onyomi": "ゴ・コウ (go / kou)",
            "kunyomi": "のち・うし(ろ)・あと (nochi / ushi(ro) / ato)",
            "strokes": 9,
            "radical": "後",
            "radicalClue": "Core element: 後",
            "examples": [
                {
                    "word": "午後",
                    "reading": "ごご (gogo)",
                    "meaning": "afternoon / PM",
                    "romaji": "gogo"
                },
                {
                    "word": "あと",
                    "reading": "あと (ato)",
                    "meaning": "after / later",
                    "romaji": "ato"
                }
            ]
        },
        {
            "kanji": "半",
            "meaning": "half",
            "onyomi": "ハン (han)",
            "kunyomi": "なか(ば) (naka(ba))",
            "strokes": 5,
            "radical": "半",
            "radicalClue": "Core element: 半",
            "examples": [
                {
                    "word": "半",
                    "reading": "はん (han)",
                    "meaning": "half",
                    "romaji": "han"
                },
                {
                    "word": "一時半",
                    "reading": "いちじはん (ichijihan)",
                    "meaning": "half past 1",
                    "romaji": "ichijihan"
                }
            ]
        },
        {
            "kanji": "今",
            "meaning": "now",
            "onyomi": "コン・キン (kon / kin)",
            "kunyomi": "いま (ima)",
            "strokes": 4,
            "radical": "今",
            "radicalClue": "Core element: 今",
            "examples": [
                {
                    "word": "今",
                    "reading": "いま (ima)",
                    "meaning": "now",
                    "romaji": "ima"
                },
                {
                    "word": "今日",
                    "reading": "きょう (kyou)",
                    "meaning": "today",
                    "romaji": "kyou"
                }
            ]
        },
        {
            "kanji": "家",
            "meaning": "house, home",
            "onyomi": "カ・ケ (ka / ke)",
            "kunyomi": "いえ・や (ie / ya)",
            "strokes": 10,
            "radical": "家",
            "radicalClue": "Core element: 家",
            "examples": [
                {
                    "word": "家",
                    "reading": "いえ (ie)",
                    "meaning": "house / home",
                    "romaji": "ie"
                }
            ]
        }
    ],
    "vocabularyList": [
        {
            "japanese": "見る",
            "reading": "みる (miru)",
            "english": "to see, watch",
            "category": "Verb",
            "notes": "テレビを見ます。",
            "romaji": "miru"
        },
        {
            "japanese": "聞く",
            "reading": "きく (kiku)",
            "english": "to listen, ask",
            "category": "Verb",
            "notes": "音楽を聞きます。",
            "romaji": "kiku"
        },
        {
            "japanese": "話す",
            "reading": "はなす (hanasu)",
            "english": "to speak, talk",
            "category": "Verb",
            "notes": "あきと話します。",
            "romaji": "hanasu"
        },
        {
            "japanese": "読む",
            "reading": "よむ (yomu)",
            "english": "to read",
            "category": "Verb",
            "notes": "青い本を読みます。",
            "romaji": "yomu"
        },
        {
            "japanese": "書く",
            "reading": "かく (kaku)",
            "english": "to write",
            "category": "Verb",
            "notes": "名前を書きます。",
            "romaji": "kaku"
        },
        {
            "japanese": "行く",
            "reading": "いく (iku)",
            "english": "to go",
            "category": "Verb",
            "notes": "公園へ行きます。",
            "romaji": "iku"
        },
        {
            "japanese": "帰る",
            "reading": "かえる (kaeru)",
            "english": "to return, go home",
            "category": "Verb",
            "notes": "午後五時に家へ帰ります。",
            "romaji": "kaeru"
        },
        {
            "japanese": "言う",
            "reading": "いう (iu)",
            "english": "to say, speak",
            "category": "Verb",
            "notes": "犬はワンワンといいます。",
            "romaji": "iu"
        },
        {
            "japanese": "耳",
            "reading": "みみ (mimi)",
            "english": "ear",
            "category": "Noun",
            "notes": "耳で聞きます。",
            "romaji": "mimi"
        },
        {
            "japanese": "口",
            "reading": "くち / ぐち (kuchi / guchi)",
            "english": "mouth",
            "category": "Noun",
            "notes": "口で話します。",
            "romaji": "kuchi / guchi"
        },
        {
            "japanese": "目",
            "reading": "め (me)",
            "english": "eye",
            "category": "Noun",
            "notes": "目で見る。",
            "romaji": "me"
        },
        {
            "japanese": "舌",
            "reading": "した (shita)",
            "english": "tongue",
            "category": "Noun",
            "notes": "舌を出す。",
            "romaji": "shita"
        },
        {
            "japanese": "一日",
            "reading": "ついたち (tsuitachi)",
            "english": "1st day of month",
            "category": "Date",
            "notes": "九月一日。",
            "romaji": "tsuitachi"
        },
        {
            "japanese": "二日",
            "reading": "ふつか (futsuka)",
            "english": "2nd day of month",
            "category": "Date",
            "notes": "九月二日。",
            "romaji": "futsuka"
        },
        {
            "japanese": "三日",
            "reading": "みっか (mikka)",
            "english": "3rd day of month",
            "category": "Date",
            "notes": "九月三日。",
            "romaji": "mikka"
        },
        {
            "japanese": "四日",
            "reading": "よっか (yokka)",
            "english": "4th day of month",
            "category": "Date",
            "notes": "九月四日。",
            "romaji": "yokka"
        },
        {
            "japanese": "五日",
            "reading": "いつか (itsuka)",
            "english": "5th day of month",
            "category": "Date",
            "notes": "九月五日。",
            "romaji": "itsuka"
        },
        {
            "japanese": "六日",
            "reading": "むいか (muika)",
            "english": "6th day of month",
            "category": "Date",
            "notes": "九月六日。",
            "romaji": "muika"
        },
        {
            "japanese": "七日",
            "reading": "なのか (nanoka)",
            "english": "7th day of month",
            "category": "Date",
            "notes": "九月七日。",
            "romaji": "nanoka"
        },
        {
            "japanese": "八日",
            "reading": "ようか (youka)",
            "english": "8th day of month",
            "category": "Date",
            "notes": "九月八日、火曜日です。",
            "romaji": "youka"
        },
        {
            "japanese": "九日",
            "reading": "ここのか (kokonoka)",
            "english": "9th day of month",
            "category": "Date",
            "notes": "九月九日。",
            "romaji": "kokonoka"
        },
        {
            "japanese": "十日",
            "reading": "とおか (tooka)",
            "english": "10th day of month",
            "category": "Date",
            "notes": "九月十日。",
            "romaji": "tooka"
        },
        {
            "japanese": "時",
            "reading": "じ (ji)",
            "english": "o'clock, hour",
            "category": "Counter",
            "notes": "何時ですか？",
            "romaji": "ji"
        },
        {
            "japanese": "分",
            "reading": "ふん / ぷん (fun / pun)",
            "english": "minute",
            "category": "Counter",
            "notes": "十分。",
            "romaji": "fun / pun"
        },
        {
            "japanese": "午前",
            "reading": "ごぜん (gozen)",
            "english": "AM, morning",
            "category": "Noun",
            "notes": "午前九時。",
            "romaji": "gozen"
        },
        {
            "japanese": "午後",
            "reading": "ごご (gogo)",
            "english": "PM, afternoon",
            "category": "Noun",
            "notes": "午後三時に公園へ行きます。",
            "romaji": "gogo"
        },
        {
            "japanese": "半",
            "reading": "はん (han)",
            "english": "half (past)",
            "category": "Noun",
            "notes": "四時半。",
            "romaji": "han"
        },
        {
            "japanese": "今日",
            "reading": "きょう (kyou)",
            "english": "today",
            "category": "Noun",
            "notes": "今日は何日ですか？",
            "romaji": "kyou"
        },
        {
            "japanese": "先月",
            "reading": "せんげつ (sengetsu)",
            "english": "last month",
            "category": "Noun",
            "notes": "先月日本へ行きました。",
            "romaji": "sengetsu"
        },
        {
            "japanese": "今",
            "reading": "いま (ima)",
            "english": "now",
            "category": "Noun",
            "notes": "いま何時ですか？",
            "romaji": "ima"
        },
        {
            "japanese": "音楽",
            "reading": "おんがく (ongaku)",
            "english": "music",
            "category": "Noun",
            "notes": "音楽を聞きます。",
            "romaji": "ongaku"
        },
        {
            "japanese": "テレビ",
            "reading": "てれび (terebi)",
            "english": "television",
            "category": "Noun",
            "notes": "テレビを見ます。",
            "romaji": "terebi"
        },
        {
            "japanese": "家",
            "reading": "いえ (ie)",
            "english": "house, home",
            "category": "Noun",
            "notes": "家へ帰ります。",
            "romaji": "ie"
        }
    ],
    "grammarNotes": [
        {
            "title": "Object Particle: を (wo / o)",
            "structure": "",
            "explanation": "Marks the direct receiver or object of an action verb. Placed immediately after the noun.",
            "examples": [
                {
                    "japanese": "本を読みます",
                    "reading": "ほんをよみます (hon o yomimasu)",
                    "english": "I read a book",
                    "romaji": "hon o yomimasu"
                },
                {
                    "japanese": "音楽を聞きます",
                    "reading": "おんがくをききます (ongaku o kikimasu)",
                    "english": "I listen to music",
                    "romaji": "ongaku o kikimasu"
                },
                {
                    "japanese": "テレビを見ます",
                    "reading": "てれびをみます (terebi o mimasu)",
                    "english": "I watch television",
                    "romaji": "terebi o mimasu"
                }
            ]
        },
        {
            "title": "Direction Particle: へ (e)",
            "structure": "",
            "explanation": "Written with the hiragana 'へ' but pronounced 'e'. Indicates physical direction toward a goal or destination.",
            "examples": [
                {
                    "japanese": "公園へ行きます",
                    "reading": "こうえんへいきます (kouen e ikimasu)",
                    "english": "I go to the park",
                    "romaji": "kouen e ikimasu"
                },
                {
                    "japanese": "家へ帰ります",
                    "reading": "いえへかえります (ie e kaerimasu)",
                    "english": "I go back home",
                    "romaji": "ie e kaerimasu"
                }
            ]
        },
        {
            "title": "Specific Time Particle: に (ni)",
            "structure": "",
            "explanation": "Marks specific clock times and calendar dates at which an action takes place.",
            "examples": [
                {
                    "japanese": "午後三時に公園へ行きます",
                    "reading": "ごごさんじにこうえんへいきます (gogo sanji ni kouen e ikimasu)",
                    "english": "At 3:00 PM I go to the park",
                    "romaji": "gogo sanji ni kouen e ikimasu"
                },
                {
                    "japanese": "午前八時に学校へ行きます",
                    "reading": "ごぜんはちじにがっこうへいきます (gozen hachiji ni gakkou e ikimasu)",
                    "english": "At 8:00 AM I go to school",
                    "romaji": "gozen hachiji ni gakkou e ikimasu"
                }
            ]
        },
        {
            "title": "With / Together Particle: と (to)",
            "structure": "",
            "explanation": "Connects two people acting together, meaning 'with' or 'and'.",
            "examples": [
                {
                    "japanese": "あきと話します",
                    "reading": "あきとはなします (Aki to hanashimasu)",
                    "english": "I talk with Aki",
                    "romaji": "Aki to hanashimasu"
                },
                {
                    "japanese": "ゆきとあき",
                    "reading": "ゆきとあき (Yuki to Aki)",
                    "english": "Yuki and Aki",
                    "romaji": "Yuki to Aki"
                }
            ]
        }
    ],
    "readingPassages": [
        {
            "title": "ゆきの火曜日 (Yuki's Tuesday Afternoon)",
            "text": "九月八日、火曜日です。ゆきは午後三時に公園へ行きます。青い本を読みます。あきと話します。午後五時に家へ帰ります。",
            "translation": "September 8th, Tuesday. Yuki goes to the park at 3:00 PM. She reads a blue book. She talks with Aki. At 5:00 PM she returns home.",
            "questions": [
                {
                    "q": "何月何日ですか？ (Nan-gatsu nan-nichi desu ka? / What date is it?)",
                    "a": "九月八日（くがつ ようか / kugatsu yōka）です。(Sep 8)"
                },
                {
                    "q": "何曜日ですか？ (Nan-yōbi desu ka? / What day of the week is it?)",
                    "a": "火曜日（かようび / kayōbi）です。(Tuesday)"
                },
                {
                    "q": "何時に公園へ行きますか？ (Nan-ji ni kōen e ikimasu ka? / What time do they go to the park?)",
                    "a": "午後三時（ごご さんじ / gogo sanji）です。(3:00 PM)"
                },
                {
                    "q": "本は何色ですか？ (Hon wa nani-iro desu ka? / What color is the book?)",
                    "a": "青（あお / ao）です。(Blue)"
                },
                {
                    "q": "ゆきは何をしますか？ (Yuki wa nani o shimasu ka? / What does Yuki do?)",
                    "a": "本を読みます。あきと話します。(Hon o yomimasu. Aki to hanashimasu. / Reads a book and talks with Aki.)"
                }
            ],
            "romaji": "Kugatsu youka, kayoubi desu. Yuki wa gogo sanji ni kouen e ikimasu. Aoi hon o yomimasu. Aki to hanashimasu. Gogo goji ni ie e kaerimasu."
        }
    ],
    "practiceQuiz": [
        {
            "question": "Which radical inside the kanji 聞く (きく / kiku - to listen) gives away its meaning?",
            "options": [
                "目 (め / me - eye)",
                "耳 (みみ / mimi - ear)",
                "口 (くち / kuchi - mouth)",
                "手 (て / te - hand)"
            ],
            "correct": "耳 (みみ / mimi - ear)",
            "explanation": "The kanji 聞 has the radical 耳 (ear) placed inside the gate 門."
        },
        {
            "question": "How do you pronounce September 4th (九月四日)?",
            "options": [
                "くがつ よんにち (kugatsu yonnichi)",
                "くがつ よっか (kugatsu yokka)",
                "くがつ しにち (kugatsu shinichi)",
                "きゅうがつ ようか (kyūgatsu yōka)"
            ],
            "correct": "くがつ よっか (kugatsu yokka)",
            "explanation": "September is くがつ (kugatsu) and the 4th is よっか (yokka)."
        },
        {
            "question": "How do you read 4:00 PM in Japanese?",
            "options": [
                "午後 よじ (gogo yoji)",
                "午後 よんじ (gogo yonji)",
                "午後 しじ (gogo shiji)",
                "午前 よじ (gozen yoji)"
            ],
            "correct": "午後 よじ (gogo yoji)",
            "explanation": "4 o'clock is always よじ (yoji), never yonji or shiji. PM is 午後 (gogo)."
        },
        {
            "question": "What is the correct particle for \"at home\" in \"家 ___ 本を読みます (Ie ___ hon o yomimasu)\"?",
            "options": [
                "に (ni)",
                "で (de)",
                "を (o / wo)",
                "の (no)"
            ],
            "correct": "で (de)",
            "explanation": "The particle で (de) indicates the location where an action takes place."
        }
    ],
    "slides": [
        {
            "slideNumber": 1,
            "title": "日本語 Class 444 · Actions, Colours, Dates & Time",
            "blocks": [
                [
                    "日本語 Class 44⃣4"
                ],
                [
                    "Update: Actions・Colours・Dates・Time",
                    "(less AI slides)"
                ],
                [
                    "By: ニッキ"
                ],
                [
                    "動作"
                ],
                [
                    "Actions"
                ],
                [
                    "色"
                ],
                [
                    "Colours"
                ],
                [
                    "日付・時間"
                ],
                [
                    "Dates / Time"
                ],
                [
                    "Goal"
                ],
                [
                    "Recognize useful kanji, speak a little on every topic, and build short Japanese answers."
                ],
                [
                    "Nikki JP Class 444 · Actions / Colours / Dates / Time"
                ],
                [
                    "どう さ"
                ],
                [
                    "いろ"
                ],
                [
                    "ひ づけ     じ かん"
                ]
            ],
            "jpTitle": "表紙：日本語 Class 444",
            "summary": "Core update introducing everyday action verbs, colour reinforcement, calendar dates 1-10, and time.",
            "bullets": [
                "Topic: 動作 (Actions), 色 (Colours), 日付・時間 (Dates / Time)",
                "Instructor: Nikki (ニッキ)",
                "Goal: Recognize useful kanji, speak a little on every topic, and build short Japanese answers."
            ],
            "highlight": "Build sentences with confidence by linking the who, the thing, and the action verb."
        },
        {
            "slideNumber": 2,
            "title": "Today's Lecture Plan",
            "blocks": [
                [
                    "Todays Lecture"
                ],
                [
                    "Nikki JP"
                ],
                [
                    "Today"
                ],
                [
                    "• 動作\t・どうさ\tActions",
                    "• 色\t・いろ　\tColours",
                    "• 日付\t・ひづけ\tCalendar dates",
                    "• 時間\t・じかん\tTime",
                    "• 漢字\t・かんじ\tKanji",
                    "• Speaking　\tMini practice"
                ],
                [
                    "Goal"
                ],
                [
                    "Big text, clear examples, and short speaking tasks."
                ],
                [
                    "Reminder"
                ],
                [
                    "On calendars, Japanese often shows:\n日　月　火　水　木　金　土"
                ],
                [
                    "Nikki JP Class 444"
                ]
            ],
            "jpTitle": "本日の講義マップ",
            "summary": "Overview of today's six interactive segments.",
            "bullets": [
                "動作 (どうさ) · Actions",
                "色 (いろ) · Colours",
                "日付 (ひづけ) · Calendar dates 1-10",
                "時間 (じかん) · Telling time in hours & minutes",
                "漢字 (かんじ) · Action kanji radicals",
                "Speaking · Mini practice & sentence chain"
            ],
            "highlight": "Calendar reminder: Japanese schedules use 日 月 火 水 木 金 土."
        },
        {
            "slideNumber": 3,
            "title": "Sensory Clues: Body Parts Before Actions",
            "blocks": [
                [
                    "Before going to Actions"
                ],
                [
                    "Nikki JP"
                ],
                [
                    "耳・みみ"
                ],
                [
                    "Ear"
                ],
                [
                    "口・ぐち"
                ],
                [
                    "Mouth"
                ],
                [
                    "目・め"
                ],
                [
                    "Eye"
                ],
                [
                    "Nikki JP Class 444"
                ],
                [
                    "舌・した"
                ],
                [
                    "Tongue"
                ]
            ],
            "jpTitle": "動作の前の感覚器漢字",
            "summary": "Four body parts that serve as meaning clues in Japanese action verbs.",
            "bullets": [
                "耳 (みみ) · Ear",
                "口 (くち / ぐち) · Mouth",
                "目 (め) · Eye",
                "舌 (した) · Tongue"
            ],
            "highlight": "When you see 耳, think of hearing; when you see 目, think of seeing; when you see 言/口, think of speaking."
        },
        {
            "slideNumber": 4,
            "title": "Action Verbs & Kanji Hints",
            "blocks": [
                [
                    "Todays Theme・動作・Actions"
                ],
                [
                    "きょう　　　　　　どうさ"
                ],
                [
                    "Nikki JP"
                ],
                [
                    "Main idea"
                ],
                [
                    "Japanese action words often hide useful kanji clues."
                ],
                [
                    "聞く・きく"
                ],
                [
                    "to listen / ask\n\n耳 = ear"
                ],
                [
                    "言う・いう"
                ],
                [
                    "to speak / talk"
                ],
                [
                    "読む・よむ"
                ],
                [
                    "to read\n\nLook for familiar parts first.",
                    "Part of Kanji does not always mean something, sometimes its there for phonetic sounds."
                ],
                [
                    "Nikki JP Class 444"
                ],
                [
                    "話す・はなす"
                ],
                [
                    "words / speech"
                ]
            ],
            "jpTitle": "動作動詞と漢字のヒント",
            "summary": "Connecting sensory organs to action verbs.",
            "bullets": [
                "聞く (きく) · To listen / ask (clue: 耳 ear inside gate 門)",
                "言う (いう) · To speak / say (lines of sound leaving mouth 口)",
                "読む (よむ) · To read (clue: 言 words)",
                "話す (はなす) · To speak / talk (clue: 言 words)"
            ],
            "highlight": "Part of a kanji does not always mean something; sometimes it gives a phonetic sound, but here they are pure meaning clues!"
        },
        {
            "slideNumber": 5,
            "title": "Action Kanji Radical Clues ①",
            "blocks": [
                [
                    "Todays Kanji・今日の漢字 ①"
                ],
                [
                    "Nikki JP"
                ],
                [
                    "聞"
                ],
                [
                    "き(く)"
                ],
                [
                    "listen / ask"
                ],
                [
                    "clue: 耳"
                ],
                [
                    "話"
                ],
                [
                    "はな(す)"
                ],
                [
                    "speak"
                ],
                [
                    "clue: 言"
                ],
                [
                    "読"
                ],
                [
                    "よ(む)"
                ],
                [
                    "read"
                ],
                [
                    "clue: 言"
                ],
                [
                    "Nikki JP Class 444"
                ]
            ],
            "jpTitle": "今日の漢字 ①：聞・話・読",
            "summary": "Detailed look at the verbal communication kanji.",
            "bullets": [
                "聞 (きく · listen/ask) → Radical: 耳 (ear)",
                "話 (はなす · speak) → Radical: 言 (words/speech)",
                "読 (よむ · read) → Radical: 言 (words/speech)"
            ],
            "highlight": "Notice how both 話 (speak) and 読 (read) share the speech radical 言!"
        },
        {
            "slideNumber": 6,
            "title": "Action Kanji Radical Clues ②",
            "blocks": [
                [
                    "Todays Kanji・今日の漢字 ②"
                ],
                [
                    "Nikki JP"
                ],
                [
                    "書"
                ],
                [
                    "か(く)"
                ],
                [
                    "write"
                ],
                [
                    "writing"
                ],
                [
                    "見"
                ],
                [
                    "み(る)"
                ],
                [
                    "see / watch"
                ],
                [
                    "clue: 目"
                ],
                [
                    "行"
                ],
                [
                    "い(く)"
                ],
                [
                    "go"
                ],
                [
                    "movement"
                ],
                [
                    "Nikki JP Class 444"
                ]
            ],
            "jpTitle": "今日の漢字 ②：書・見・行",
            "summary": "Detailed look at physical action and movement kanji.",
            "bullets": [
                "書 (かく · write) → Concept: brush on hand / writing",
                "見 (みる · see/watch) → Radical: 目 (eye on human legs)",
                "行 (いく · go) → Concept: crossroads / movement"
            ],
            "highlight": "見 is an eye 目 standing on legs 儿!"
        },
        {
            "slideNumber": 7,
            "title": "Colours Review & Sentence Frames",
            "blocks": [
                [
                    "色・いろ・Colours"
                ],
                [
                    "Nikki JP"
                ],
                [
                    "赤・あか  ・  red"
                ],
                [
                    "黒・くろ  ・  black"
                ],
                [
                    "白・しろ  ・  white"
                ],
                [
                    "青・あお  ・  blue"
                ],
                [
                    "Use it"
                ],
                [
                    "これは ＿＿＿ です。",
                    "＿＿は ＿＿＿ です。"
                ],
                [
                    "Nikki JP Class 444"
                ],
                [
                    "これは何色ですか？"
                ]
            ],
            "jpTitle": "基本の4色と文型",
            "summary": "The four native Japanese primary colours and practice frames.",
            "bullets": [
                "赤 (あか) · Red",
                "黒 (くろ) · Black",
                "白 (しろ) · White",
                "青 (あお) · Blue",
                "Sentence pattern: これは ＿＿＿ です。 (This is ___.)",
                "Sentence pattern: ＿＿は ＿＿＿ です。 (___ is ___.)",
                "Question: これは何色ですか？ (What colour is this?)"
            ],
            "highlight": "Use 'これは赤です' for objects, or '赤い' when describing nouns directly."
        },
        {
            "slideNumber": 8,
            "title": "Loanword Colours",
            "blocks": [
                [
                    "More Colours・色"
                ],
                [
                    "Nikki JP"
                ],
                [
                    "オレンジ色  ・  orange"
                ],
                [
                    "ピンク色  ・  pink"
                ],
                [
                    "グレー  ・  grey"
                ],
                [
                    "Simple"
                ],
                [
                    "English in Japanese",
                    "Even other colours will be understood"
                ],
                [
                    "Nikki JP Class 444"
                ]
            ],
            "jpTitle": "カタカナの外来語色",
            "summary": "Three loanword colours used with the suffix 色 (いろ).",
            "bullets": [
                "オレンジ色 (おれんじいろ) · Orange",
                "ピンク色 (ぴんくいろ) · Pink",
                "グレー (ぐれー) · Grey",
                "Even other foreign colour names (グリーン, パープル) will be readily understood in Japan!"
            ],
            "highlight": "Katakana colours are loanwords from English and very easy to memorize."
        },
        {
            "slideNumber": 9,
            "title": "Calendar Dates & Japanese Habits",
            "blocks": [
                [
                    "日付・ひづけ・Calendar Dates"
                ],
                [
                    "Nikki JP"
                ],
                [
                    "September 2026"
                ],
                [
                    "Sunday starts the week in Japan."
                ],
                [
                    "日"
                ],
                [
                    "月"
                ],
                [
                    "火"
                ],
                [
                    "水"
                ],
                [
                    "木"
                ],
                [
                    "金"
                ],
                [
                    "土"
                ],
                [
                    "1"
                ],
                [
                    "2"
                ],
                [
                    "3"
                ],
                [
                    "4"
                ],
                [
                    "5"
                ],
                [
                    "6"
                ],
                [
                    "7"
                ],
                [
                    "8"
                ],
                [
                    "9"
                ],
                [
                    "10"
                ],
                [
                    "11"
                ],
                [
                    "12"
                ],
                [
                    "13"
                ],
                [
                    "14"
                ],
                [
                    "15"
                ],
                [
                    "16"
                ],
                [
                    "17"
                ],
                [
                    "18"
                ],
                [
                    "19"
                ],
                [
                    "20"
                ],
                [
                    "21"
                ],
                [
                    "22"
                ],
                [
                    "23"
                ],
                [
                    "24"
                ],
                [
                    "25"
                ],
                [
                    "26"
                ],
                [
                    "27"
                ],
                [
                    "28"
                ],
                [
                    "29"
                ],
                [
                    "30"
                ],
                [
                    "Useful facts"
                ],
                [
                    "• Japanese people use physical calendar many places (hotel, restaurant, hospital)",
                    "• Trash are collected in specific days for different type",
                    "• Many holidays does not use a specific date, but instead a specific day on a week"
                ],
                [
                    "Nikki JP Class 444"
                ]
            ],
            "jpTitle": "カレンダーと日本の習慣",
            "summary": "Cultural context of physical calendars in Japan.",
            "bullets": [
                "Japanese people still frequently use physical wall and desk calendars in hotels, restaurants, and hospitals.",
                "Trash is collected on specific days for different types (burnable, non-burnable, plastics).",
                "Many Japanese public holidays do not fall on a fixed date, but on a specific Monday (Happy Monday System)."
            ],
            "highlight": "Knowing days and dates is essential for daily living in Japan."
        },
        {
            "slideNumber": 10,
            "title": "Time Anchors: 今, 先, 後",
            "blocks": [
                [
                    "Time Kanji"
                ],
                [
                    "Nikki JP"
                ],
                [
                    "いま"
                ],
                [
                    "Now"
                ],
                [
                    "Nikki JP Class 444"
                ],
                [
                    "さき"
                ],
                [
                    "Before"
                ],
                [
                    "あと"
                ],
                [
                    "After"
                ],
                [
                    "今+日→　今日"
                ],
                [
                    "先+月→　先月"
                ]
            ],
            "jpTitle": "時間の基準漢字：今・先・後",
            "summary": "Relative time references built from fundamental kanji.",
            "bullets": [
                "今 (いま) · Now → 今 + 日 = 今日 (きょう · today)",
                "先 (さき) · Before / previous → 先 + 月 = 先月 (せんげつ · last month)",
                "後 (あと) · After / later"
            ],
            "highlight": "今日 is read 'きょう' (special reading) rather than 'こんにち' in casual conversation."
        },
        {
            "slideNumber": 11,
            "title": "Calendar Dates 1st to 5th (Special Readings)",
            "blocks": [
                [
                    "1日〜5日"
                ],
                [
                    "Nikki JP"
                ],
                [
                    "1日"
                ],
                [
                    "ついたち"
                ],
                [
                    "2日"
                ],
                [
                    "ふつか"
                ],
                [
                    "3日"
                ],
                [
                    "みっか"
                ],
                [
                    "4日"
                ],
                [
                    "よっか"
                ],
                [
                    "5日"
                ],
                [
                    "いつか"
                ],
                [
                    "Pattern"
                ],
                [
                    "The first 10 days have special readings.\nOnly way is to memorize them."
                ],
                [
                    "Speaking"
                ],
                [
                    "今日は何日ですか？"
                ],
                [
                    "Nikki JP Class 444"
                ]
            ],
            "jpTitle": "1日〜5日の特別な読み方",
            "summary": "The irregular native Japanese names for the first five days of the month.",
            "bullets": [
                "1日 · ついたち (1st)",
                "2日 · ふつか (2nd)",
                "3日 · みっか (3rd)",
                "4日 · よっか (4th · NOT よんにち)",
                "5日 · いつか (5th)",
                "Pattern: The first 10 days have special historical readings—you must memorize them!"
            ],
            "highlight": "Prompt: 今日は何日ですか？ (What day is today?)"
        },
        {
            "slideNumber": 12,
            "title": "Calendar Dates 6th to 10th",
            "blocks": [
                [
                    "6日〜10日"
                ],
                [
                    "Nikki JP"
                ],
                [
                    "6日"
                ],
                [
                    "むいか"
                ],
                [
                    "7日"
                ],
                [
                    "なのか"
                ],
                [
                    "8日"
                ],
                [
                    "ようか"
                ],
                [
                    "9日"
                ],
                [
                    "ここのか"
                ],
                [
                    "10日"
                ],
                [
                    "とおか"
                ],
                [
                    "Watch out"
                ],
                [
                    "4日 = よっか\n8日 = ようか"
                ],
                [
                    "Pair prompt"
                ],
                [
                    "誕生日は何月何日ですか？"
                ],
                [
                    "Nikki JP Class 444"
                ]
            ],
            "jpTitle": "6日〜10日の特別な読み方",
            "summary": "The irregular native Japanese names for days 6 through 10.",
            "bullets": [
                "6日 · むいか (6th)",
                "7日 · なのか (7th)",
                "8日 · ようか (8th · long 'ou' vowel)",
                "9日 · ここのか (9th)",
                "10日 · とおか (10th)",
                "Watch out: 4日 = よっか (small tsu), 8日 = ようか (long vowel)!"
            ],
            "highlight": "Pair prompt: 誕生日は何月何日ですか？ (When is your birthday?)"
        },
        {
            "slideNumber": 13,
            "title": "Telling Time: Hours (時・じ)",
            "blocks": [
                [
                    "時間・じかん・Hours"
                ],
                [
                    "Nikki JP"
                ],
                [
                    "1時"
                ],
                [
                    "いちじ"
                ],
                [
                    "2時"
                ],
                [
                    "にじ"
                ],
                [
                    "4時"
                ],
                [
                    "よじ"
                ],
                [
                    "7時"
                ],
                [
                    "しちじ"
                ],
                [
                    "9時"
                ],
                [
                    "くじ"
                ],
                [
                    "Example"
                ],
                [
                    "7:00 = しちじ\n9:00 = くじ"
                ],
                [
                    "Question"
                ],
                [
                    "いま なんじですか？"
                ],
                [
                    "Nikki JP Class 444"
                ]
            ],
            "jpTitle": "時間：時（じ）の読み方",
            "summary": "How to count hours in Japanese, highlighting the three irregulars.",
            "bullets": [
                "1時 · いちじ (1:00)",
                "2時 · にじ (2:00)",
                "4時 · よじ (4:00 · NOT よんじ!)",
                "7時 · しちじ (7:00 · NOT ななじ!)",
                "9時 · くじ (9:00 · NOT きゅうじ!)",
                "Key question: いま なんじですか？ (What time is it now?)"
            ],
            "highlight": "Be careful with 4 (よじ), 7 (しちじ), and 9 (くじ)!"
        },
        {
            "slideNumber": 14,
            "title": "Telling Time: Minutes (分・ふん/ぷん)",
            "blocks": [
                [
                    "時間・じかん・Minutes"
                ],
                [
                    "Nikki JP"
                ],
                [
                    "1分"
                ],
                [
                    "いっぷん"
                ],
                [
                    "3分"
                ],
                [
                    "さんぷん"
                ],
                [
                    "4分"
                ],
                [
                    "よんぷん"
                ],
                [
                    "6分"
                ],
                [
                    "ろっぷん"
                ],
                [
                    "8分"
                ],
                [
                    "はっぷん"
                ],
                [
                    "10分"
                ],
                [
                    "じゅっぷん"
                ],
                [
                    "Example"
                ],
                [
                    "7:10 = しちじ じゅっぷん"
                ],
                [
                    "Nikki JP Class 444"
                ]
            ],
            "jpTitle": "時間：分（ふん・ぷん）の読み方",
            "summary": "Minute counters with consonant sound shifts.",
            "bullets": [
                "1分 · いっぷん (1 min)",
                "3分 · さんぷん (3 min)",
                "4分 · よんぷん (4 min)",
                "6分 · ろっぷん (6 min)",
                "8分 · はっぷん (8 min)",
                "10分 · じゅっぷん (10 min)",
                "Example: 7:10 = しちじ じゅっぷん"
            ],
            "highlight": "Minutes change between ふん and ぷん based on phonetic euphony."
        },
        {
            "slideNumber": 15,
            "title": "AM and PM: 午前・午後",
            "blocks": [
                [
                    "午前・午後"
                ],
                [
                    "Nikki JP"
                ],
                [
                    "午前・ごぜん"
                ],
                [
                    "AM\n午前九時 = ごぜん くじ"
                ],
                [
                    "午後・ごご"
                ],
                [
                    "PM\n午後三時半 = ごご さんじはん"
                ],
                [
                    "Speaking"
                ],
                [
                    "Ask and answer:\nいま なんじですか？"
                ],
                [
                    "Nikki JP Class 444"
                ]
            ],
            "jpTitle": "午前（ごぜん）と午後（ごご）",
            "summary": "Specifying morning vs afternoon.",
            "bullets": [
                "午前 (ごぜん) · AM (before noon) → 午前九時 (9:00 AM)",
                "午後 (ごご) · PM (after noon) → 午後三時半 (3:30 PM)",
                "Rule: 半 (はん) means 'half past' (e.g. 3:30 = さんじはん)."
            ],
            "highlight": "In Japanese, 午前 and 午後 are always placed BEFORE the time, unlike in English."
        },
        {
            "slideNumber": 16,
            "title": "Kanji Parts Inside Actions Review",
            "blocks": [
                [
                    "Kanji Parts Inside Actions"
                ],
                [
                    "Nikki JP"
                ],
                [
                    "耳"
                ],
                [
                    "ear"
                ],
                [
                    "聞く"
                ],
                [
                    "listen / ask"
                ],
                [
                    "言"
                ],
                [
                    "words"
                ],
                [
                    "話す"
                ],
                [
                    "speak"
                ],
                [
                    "言"
                ],
                [
                    "words"
                ],
                [
                    "読む"
                ],
                [
                    "read"
                ],
                [
                    "目"
                ],
                [
                    "eye"
                ],
                [
                    "見る"
                ],
                [
                    "see / watch"
                ],
                [
                    "Nikki JP Class 444"
                ]
            ],
            "jpTitle": "動作の中のパーツ再確認",
            "summary": "Visual recap of semantic radicals.",
            "bullets": [
                "耳 (ear) → 聞く (listen / ask)",
                "言 (words) → 話す (speak)",
                "言 (words) → 読む (read)",
                "目 (eye) → 見る (see / watch)"
            ],
            "highlight": "Radicals help you deduce meaning before you even know the pronunciation."
        },
        {
            "slideNumber": 17,
            "title": "Colour Challenge: What Colour is It?",
            "blocks": [
                [
                    "Colour Challenge・色あてゲーム"
                ],
                [
                    "Nikki JP"
                ],
                [
                    "りんご"
                ],
                [
                    "何色ですか？\n答え: 赤"
                ],
                [
                    "そら"
                ],
                [
                    "何色ですか？\n答え: 青"
                ],
                [
                    "くも"
                ],
                [
                    "何色ですか？\n答え: 白"
                ],
                [
                    "かばん"
                ],
                [
                    "何色ですか？\n答え: 黒"
                ],
                [
                    "Round 2"
                ],
                [
                    "Hide the answers and ask another student."
                ],
                [
                    "Nikki JP Class 444"
                ]
            ],
            "jpTitle": "色あてゲーム",
            "summary": "Rapid-fire matching of nouns to their signature colours.",
            "bullets": [
                "りんご (apple) → 赤 (あか · red)",
                "そら (sky) → 青 (あお · blue)",
                "くも (cloud) → 白 (しろ · white)",
                "かばん (bag) → 黒 (くろ · black)"
            ],
            "highlight": "Round 2: Hide the answers and quiz your classmate!"
        },
        {
            "slideNumber": 18,
            "title": "Date Speaking Drill",
            "blocks": [
                [
                    "Date Speaking・何日ですか？"
                ],
                [
                    "Nikki JP"
                ],
                [
                    "9/1"
                ],
                [
                    "九月一日\nくがつ ついたち"
                ],
                [
                    "9/4"
                ],
                [
                    "九月四日\nくがつ よっか"
                ],
                [
                    "9/8"
                ],
                [
                    "九月八日\nくがつ ようか"
                ],
                [
                    "9/10"
                ],
                [
                    "九月十日\nくがつ とおか"
                ],
                [
                    "Pair prompt"
                ],
                [
                    "誕生日は何月何日ですか？\n＿＿月＿＿日です。"
                ],
                [
                    "Nikki JP Class 444"
                ]
            ],
            "jpTitle": "日付のスピーキング練習",
            "summary": "Practicing specific calendar dates aloud.",
            "bullets": [
                "9/1 → 九月一日 (くがつ ついたち)",
                "9/4 → 九月四日 (くがつ よっか)",
                "9/8 → 九月八日 (くがつ ようか)",
                "9/10 → 九月十日 (くがつ とおか)",
                "Sentence: 誕生日は＿＿月＿＿日です。 (My birthday is __/___.)"
            ],
            "highlight": "Notice September is always くがつ, not きゅうがつ!"
        },
        {
            "slideNumber": 19,
            "title": "Time Quiz: Quick-Fire Clocks",
            "blocks": [
                [
                    "Time Quiz・何時ですか？"
                ],
                [
                    "Nikki JP"
                ],
                [
                    "7:10"
                ],
                [
                    "しちじ じゅっぷん"
                ],
                [
                    "4:30"
                ],
                [
                    "よじ はん"
                ],
                [
                    "9:08"
                ],
                [
                    "くじ はっぷん"
                ],
                [
                    "15:00"
                ],
                [
                    "ごご さんじ"
                ],
                [
                    "Challenge"
                ],
                [
                    "何時に起きますか？"
                ],
                [
                    "Nikki JP Class 444"
                ]
            ],
            "jpTitle": "時間クイズ",
            "summary": "Deciphering realistic digital times into natural Japanese speech.",
            "bullets": [
                "7:10 → しちじ じゅっぷん",
                "4:30 → よじ はん",
                "9:08 → くじ はっぷん",
                "15:00 → ごご さんじ",
                "Challenge question: 何時に起きますか？ (What time do you wake up?)"
            ],
            "highlight": "Military time 15:00 is read as '午後三時' in spoken Japanese."
        },
        {
            "slideNumber": 20,
            "title": "6 Core Action Verbs Summary",
            "blocks": [
                [
                    "Action Words・動作"
                ],
                [
                    "Nikki JP"
                ],
                [
                    "見る"
                ],
                [
                    "みる\nsee / watch"
                ],
                [
                    "聞く"
                ],
                [
                    "きく\nlisten / ask"
                ],
                [
                    "話す"
                ],
                [
                    "はなす\nspeak"
                ],
                [
                    "読む"
                ],
                [
                    "よむ\nread"
                ],
                [
                    "書く"
                ],
                [
                    "かく\nwrite"
                ],
                [
                    "行く"
                ],
                [
                    "いく\ngo"
                ],
                [
                    "Nikki JP Class 444"
                ]
            ],
            "jpTitle": "基本の6つの動作動詞",
            "summary": "Master reference table for the 6 foundational N5 action verbs.",
            "bullets": [
                "見る (みる) · To see / watch",
                "聞く (きく) · To listen / ask",
                "話す (はなす) · To speak / talk",
                "読む (よむ) · To read",
                "書く (かく) · To write",
                "行く (いく) · To go"
            ],
            "highlight": "All 6 verbs end in -u in plain form and -masu in polite form (見ます, 聞きます, 話します, 読みます, 書きます, 行きます)."
        },
        {
            "slideNumber": 21,
            "title": "Build a Sentence: Who + What + Action",
            "blocks": [
                [
                    "Build a Sentence・文を作ろう"
                ],
                [
                    "Nikki JP"
                ],
                [
                    "Choose one from each column."
                ],
                [
                    "Who"
                ],
                [
                    "わたしは"
                ],
                [
                    "ゆきは"
                ],
                [
                    "あきは"
                ],
                [
                    "Thing / Place"
                ],
                [
                    "本を"
                ],
                [
                    "音楽を"
                ],
                [
                    "テレビを"
                ],
                [
                    "公園へ"
                ],
                [
                    "Action"
                ],
                [
                    "読みます"
                ],
                [
                    "聞きます"
                ],
                [
                    "見ます"
                ],
                [
                    "行きます"
                ],
                [
                    "Example"
                ],
                [
                    "ゆきは + 音楽を + 聞きます。"
                ],
                [
                    "Nikki JP Class 444"
                ]
            ],
            "jpTitle": "文を作ろう：誰が・何を・どうする",
            "summary": "Grammar slot machine combining subjects, objects, and verbs.",
            "bullets": [
                "Who (は): わたしは, ゆきは, あきは",
                "Thing / Place (を / へ): 本を, 音楽を, テレビを, 公園へ",
                "Action (ます): 読みます, 聞きます, 見ます, 行きます",
                "Example combination: ゆきは + 音楽を + 聞きます。 (Yuki listens to music.)"
            ],
            "highlight": "Japanese sentence structure is Subject (は) + Object (を) / Destination (へ) + Verb!"
        },
        {
            "slideNumber": 22,
            "title": "Speaking Chain: 5 Quick Questions",
            "blocks": [
                [
                    "Speaking Chain・話してみよう"
                ],
                [
                    "Nikki JP"
                ],
                [
                    "① 何色が好きですか？　→　＿＿が好きです。"
                ],
                [
                    "② 今日は何日ですか？　→　＿＿月＿＿日です。"
                ],
                [
                    "③ いま何時ですか？　→　＿＿時＿＿分です。"
                ],
                [
                    "④ 何を見ますか？　→　＿＿を見ます。"
                ],
                [
                    "⑤ 何を聞きますか？　→　＿＿を聞きます。"
                ],
                [
                    "Nikki JP Class 444"
                ]
            ],
            "jpTitle": "話してみよう：5つの質問",
            "summary": "Personal speaking practice with sentence starters.",
            "bullets": [
                "① 何色が好きですか？ → ＿＿が好きです。",
                "② 今日は何日ですか？ → ＿＿月＿＿日です。",
                "③ いま何時ですか？ → ＿＿時＿＿分です。",
                "④ 何を見ますか？ → ＿＿を見ます。",
                "⑤ 何を聞きますか？ → ＿＿を聞きます。"
            ],
            "highlight": "Answer immediately without translating into English first."
        },
        {
            "slideNumber": 23,
            "title": "Mini Reading: Yuki at the Park",
            "blocks": [
                [
                    "Mini Reading・読んでみよう"
                ],
                [
                    "Nikki JP"
                ],
                [
                    "Story"
                ],
                [
                    "九月八日、火曜日です。\nゆきは午後三時に公園へ行きます。\n青い本を読みます。\nあきと話します。\n午後五時に家へ帰ります。"
                ],
                [
                    "Questions"
                ],
                [
                    "1. 何月何日ですか？\n2. 何曜日ですか？\n3. 何時に公園へ行きますか？\n4. 本は何色ですか？\n5. ゆきは何をしますか？"
                ],
                [
                    "Nikki JP Class 444"
                ]
            ],
            "jpTitle": "ミニストーリー：ゆきの公園での一日",
            "summary": "A 5-sentence reading passage putting today's grammar into context.",
            "bullets": [
                "Story: 九月八日、火曜日です。 (It is Tuesday, September 8th.)",
                "ゆきは午後三時に公園へ行きます。 (Yuki goes to the park at 3:00 PM.)",
                "青い本を読みます。 (She reads a blue book.)",
                "あきと話します。 (She talks with Aki.)",
                "午後五時に家へ帰ります。 (She returns home at 5:00 PM.)",
                "Questions: 1. 何月何日？ 2. 何曜日？ 3. 何時に公園へ？ 4. 本は何色？ 5. ゆきは何をする？"
            ],
            "highlight": "Notice how all elements—date, weekday, time, place, colour, and actions—are woven together."
        },
        {
            "slideNumber": 24,
            "title": "Mini Reading: Official Answers",
            "blocks": [
                [
                    "Mini Reading・答え"
                ],
                [
                    "Nikki JP"
                ],
                [
                    "1. 九月八日です。"
                ],
                [
                    "2. 火曜日です。"
                ],
                [
                    "3. 午後三時です。"
                ],
                [
                    "4. 青です。"
                ],
                [
                    "5. 本を読みます。あきと話します。"
                ],
                [
                    "Nikki JP Class 444"
                ]
            ],
            "jpTitle": "ミニストーリーの答え",
            "summary": "Complete answer key for the Yuki park story.",
            "bullets": [
                "1. 九月八日です。 (September 8th)",
                "2. 火曜日です。 (Tuesday)",
                "3. 午後三時です。 (3:00 PM)",
                "4. 青です。 (Blue)",
                "5. 本を読みます。あきと話します。 (Reads a book and talks with Aki)"
            ],
            "highlight": "Every answer can be found directly in the text runs."
        },
        {
            "slideNumber": 25,
            "title": "Quick Review: Today's Achievements",
            "blocks": [
                [
                    "Quick Review・今日できること"
                ],
                [
                    "Nikki JP"
                ],
                [
                    "✓  色を言う"
                ],
                [
                    "✓  1日〜10日の読み方を聞き分ける"
                ],
                [
                    "✓  時・分・午前・午後で時間を言う"
                ],
                [
                    "✓  見る・聞く・話す・読む・書く・行くを使う"
                ],
                [
                    "✓  漢字の中のヒントを見つける"
                ],
                [
                    "Exit question"
                ],
                [
                    "今日、何を読みましたか？　何を話しましたか？"
                ],
                [
                    "Nikki JP Class 444"
                ]
            ],
            "jpTitle": "今日の達成度チェック",
            "summary": "Checklist of skills mastered in Class 444.",
            "bullets": [
                "✓ 色を言う (Say colours)",
                "✓ 1日〜10日の読み方を聞き分ける (Distinguish 1st-10th days)",
                "✓ 時・分・午前・午後で時間を言う (Tell time with hours/minutes/AM/PM)",
                "✓ 見る・聞く・話す・読む・書く・行くを使う (Use 6 action verbs)",
                "✓ 漢字の中のヒントを見つける (Find semantic kanji hints)",
                "Exit question: 今日、何を読みましたか？ 何を話しましたか？"
            ],
            "highlight": "Congratulations! You can now express dates, times, and actions fluently in Japanese."
        }
    ],
    "title": "Actions, Sensory Organs, Calendar Dates 1–10 & Time",
    "jpTitle": "第5回：動作・目・耳・口・舌・1日〜10日・時間・ミニストーリー",
    "vocabulary": [
        {
            "id": "v5-1",
            "kanji": "見る",
            "furigana": "みる",
            "romaji": "miru",
            "english": "to see, watch",
            "type": "Verb",
            "example": "テレビを見ます。"
        },
        {
            "id": "v5-2",
            "kanji": "聞く",
            "furigana": "きく",
            "romaji": "kiku",
            "english": "to listen, ask",
            "type": "Verb",
            "example": "音楽を聞きます。"
        },
        {
            "id": "v5-3",
            "kanji": "話す",
            "furigana": "はなす",
            "romaji": "hanasu",
            "english": "to speak, talk",
            "type": "Verb",
            "example": "あきと話します。"
        },
        {
            "id": "v5-4",
            "kanji": "読む",
            "furigana": "よむ",
            "romaji": "yomu",
            "english": "to read",
            "type": "Verb",
            "example": "青い本を読みます。"
        },
        {
            "id": "v5-5",
            "kanji": "書く",
            "furigana": "かく",
            "romaji": "kaku",
            "english": "to write",
            "type": "Verb",
            "example": "名前を書きます。"
        },
        {
            "id": "v5-6",
            "kanji": "行く",
            "furigana": "いく",
            "romaji": "iku",
            "english": "to go",
            "type": "Verb",
            "example": "公園へ行きます。"
        },
        {
            "id": "v5-7",
            "kanji": "帰る",
            "furigana": "かえる",
            "romaji": "kaeru",
            "english": "to return, go home",
            "type": "Verb",
            "example": "午後五時に家へ帰ります。"
        },
        {
            "id": "v5-8",
            "kanji": "言う",
            "furigana": "いう",
            "romaji": "iu",
            "english": "to say, speak",
            "type": "Verb",
            "example": "犬はワンワンといいます。"
        },
        {
            "id": "v5-9",
            "kanji": "耳",
            "furigana": "みみ",
            "romaji": "mimi",
            "english": "ear",
            "type": "Noun",
            "example": "耳で聞きます。"
        },
        {
            "id": "v5-10",
            "kanji": "口",
            "furigana": "くち / ぐち",
            "romaji": "kuchi / guchi",
            "english": "mouth",
            "type": "Noun",
            "example": "口で話します。"
        },
        {
            "id": "v5-11",
            "kanji": "目",
            "furigana": "め",
            "romaji": "me",
            "english": "eye",
            "type": "Noun",
            "example": "目で見る。"
        },
        {
            "id": "v5-12",
            "kanji": "舌",
            "furigana": "した",
            "romaji": "shita",
            "english": "tongue",
            "type": "Noun",
            "example": "舌を出す。"
        },
        {
            "id": "v5-13",
            "kanji": "一日",
            "furigana": "ついたち",
            "romaji": "tsuitachi",
            "english": "1st day of month",
            "type": "Date",
            "example": "九月一日。"
        },
        {
            "id": "v5-14",
            "kanji": "二日",
            "furigana": "ふつか",
            "romaji": "futsuka",
            "english": "2nd day of month",
            "type": "Date",
            "example": "九月二日。"
        },
        {
            "id": "v5-15",
            "kanji": "三日",
            "furigana": "みっか",
            "romaji": "mikka",
            "english": "3rd day of month",
            "type": "Date",
            "example": "九月三日。"
        },
        {
            "id": "v5-16",
            "kanji": "四日",
            "furigana": "よっか",
            "romaji": "yokka",
            "english": "4th day of month",
            "type": "Date",
            "example": "九月四日。"
        },
        {
            "id": "v5-17",
            "kanji": "五日",
            "furigana": "いつか",
            "romaji": "itsuka",
            "english": "5th day of month",
            "type": "Date",
            "example": "九月五日。"
        },
        {
            "id": "v5-18",
            "kanji": "六日",
            "furigana": "むいか",
            "romaji": "muika",
            "english": "6th day of month",
            "type": "Date",
            "example": "九月六日。"
        },
        {
            "id": "v5-19",
            "kanji": "七日",
            "furigana": "なのか",
            "romaji": "nanoka",
            "english": "7th day of month",
            "type": "Date",
            "example": "九月七日。"
        },
        {
            "id": "v5-20",
            "kanji": "八日",
            "furigana": "ようか",
            "romaji": "youka",
            "english": "8th day of month",
            "type": "Date",
            "example": "九月八日、火曜日です。"
        },
        {
            "id": "v5-21",
            "kanji": "九日",
            "furigana": "ここのか",
            "romaji": "kokonoka",
            "english": "9th day of month",
            "type": "Date",
            "example": "九月九日。"
        },
        {
            "id": "v5-22",
            "kanji": "十日",
            "furigana": "とおか",
            "romaji": "tooka",
            "english": "10th day of month",
            "type": "Date",
            "example": "九月十日。"
        },
        {
            "id": "v5-23",
            "kanji": "時",
            "furigana": "じ",
            "romaji": "ji",
            "english": "o'clock, hour",
            "type": "Counter",
            "example": "何時ですか？"
        },
        {
            "id": "v5-24",
            "kanji": "分",
            "furigana": "ふん / ぷん",
            "romaji": "fun / pun",
            "english": "minute",
            "type": "Counter",
            "example": "十分。"
        },
        {
            "id": "v5-25",
            "kanji": "午前",
            "furigana": "ごぜん",
            "romaji": "gozen",
            "english": "AM, morning",
            "type": "Noun",
            "example": "午前九時。"
        },
        {
            "id": "v5-26",
            "kanji": "午後",
            "furigana": "ごご",
            "romaji": "gogo",
            "english": "PM, afternoon",
            "type": "Noun",
            "example": "午後三時に公園へ行きます。"
        },
        {
            "id": "v5-27",
            "kanji": "半",
            "furigana": "はん",
            "romaji": "han",
            "english": "half (past)",
            "type": "Noun",
            "example": "四時半。"
        },
        {
            "id": "v5-28",
            "kanji": "今日",
            "furigana": "きょう",
            "romaji": "kyou",
            "english": "today",
            "type": "Noun",
            "example": "今日は何日ですか？"
        },
        {
            "id": "v5-29",
            "kanji": "先月",
            "furigana": "せんげつ",
            "romaji": "sengetsu",
            "english": "last month",
            "type": "Noun",
            "example": "先月日本へ行きました。"
        },
        {
            "id": "v5-30",
            "kanji": "今",
            "furigana": "いま",
            "romaji": "ima",
            "english": "now",
            "type": "Noun",
            "example": "いま何時ですか？"
        },
        {
            "id": "v5-31",
            "kanji": "音楽",
            "furigana": "おんがく",
            "romaji": "ongaku",
            "english": "music",
            "type": "Noun",
            "example": "音楽を聞きます。"
        },
        {
            "id": "v5-32",
            "kanji": "テレビ",
            "furigana": "てれび",
            "romaji": "terebi",
            "english": "television",
            "type": "Noun",
            "example": "テレビを見ます。"
        },
        {
            "id": "v5-33",
            "kanji": "家",
            "furigana": "いえ",
            "romaji": "ie",
            "english": "house, home",
            "type": "Noun",
            "example": "家へ帰ります。"
        }
    ],
    "kanji": [
        {
            "kanji": "見",
            "onyomi": "ケン",
            "kunyomi": "み(る)・み(せる)",
            "meaning": "see, look, watch",
            "strokes": 7,
            "examples": [
                "見る",
                "見ます"
            ]
        },
        {
            "kanji": "聞",
            "onyomi": "ブン・モン",
            "kunyomi": "き(く)・き(こえる)",
            "meaning": "hear, listen, ask",
            "strokes": 14,
            "examples": [
                "聞く",
                "聞きます"
            ]
        },
        {
            "kanji": "話",
            "onyomi": "ワ",
            "kunyomi": "はな(す)・はなし",
            "meaning": "talk, speak, story",
            "strokes": 13,
            "examples": [
                "話す",
                "話します"
            ]
        },
        {
            "kanji": "読",
            "onyomi": "ドク・トク",
            "kunyomi": "よ(む)",
            "meaning": "read",
            "strokes": 14,
            "examples": [
                "読む",
                "読みます"
            ]
        },
        {
            "kanji": "書",
            "onyomi": "ショ",
            "kunyomi": "か(く)",
            "meaning": "write, book",
            "strokes": 10,
            "examples": [
                "書く",
                "書きます"
            ]
        },
        {
            "kanji": "行",
            "onyomi": "コウ・ギョウ",
            "kunyomi": "い(く)・ゆ(く)・おこな(う)",
            "meaning": "go, act",
            "strokes": 6,
            "examples": [
                "行く",
                "行きます"
            ]
        },
        {
            "kanji": "帰",
            "onyomi": "キ",
            "kunyomi": "かえ(る)",
            "meaning": "return, go home",
            "strokes": 10,
            "examples": [
                "帰る",
                "帰ります"
            ]
        },
        {
            "kanji": "耳",
            "onyomi": "ジ",
            "kunyomi": "みみ",
            "meaning": "ear",
            "strokes": 6,
            "examples": [
                "耳"
            ]
        },
        {
            "kanji": "口",
            "onyomi": "コウ・ク",
            "kunyomi": "くち",
            "meaning": "mouth",
            "strokes": 3,
            "examples": [
                "口"
            ]
        },
        {
            "kanji": "目",
            "onyomi": "モク・ボク",
            "kunyomi": "め・ま",
            "meaning": "eye",
            "strokes": 5,
            "examples": [
                "目"
            ]
        },
        {
            "kanji": "舌",
            "onyomi": "ゼツ",
            "kunyomi": "した",
            "meaning": "tongue",
            "strokes": 6,
            "examples": [
                "舌"
            ]
        },
        {
            "kanji": "時",
            "onyomi": "ジ",
            "kunyomi": "とき",
            "meaning": "time, hour",
            "strokes": 10,
            "examples": [
                "時間",
                "何時",
                "一時"
            ]
        },
        {
            "kanji": "分",
            "onyomi": "フン・ブン・プン",
            "kunyomi": "わ(ける)",
            "meaning": "minute, part, understand",
            "strokes": 4,
            "examples": [
                "分",
                "十分",
                "一分"
            ]
        },
        {
            "kanji": "前",
            "onyomi": "ゼン",
            "kunyomi": "まえ",
            "meaning": "before, front",
            "strokes": 9,
            "examples": [
                "午前",
                "名前"
            ]
        },
        {
            "kanji": "後",
            "onyomi": "ゴ・コウ",
            "kunyomi": "のち・うし(ろ)・あと",
            "meaning": "after, back, behind",
            "strokes": 9,
            "examples": [
                "午後",
                "あと"
            ]
        },
        {
            "kanji": "半",
            "onyomi": "ハン",
            "kunyomi": "なか(ば)",
            "meaning": "half",
            "strokes": 5,
            "examples": [
                "半",
                "一時半"
            ]
        },
        {
            "kanji": "今",
            "onyomi": "コン・キン",
            "kunyomi": "いま",
            "meaning": "now",
            "strokes": 4,
            "examples": [
                "今",
                "今日"
            ]
        },
        {
            "kanji": "家",
            "onyomi": "カ・ケ",
            "kunyomi": "いえ・や",
            "meaning": "house, home",
            "strokes": 10,
            "examples": [
                "家"
            ]
        }
    ]
},
    {
    "id": "day-6",
    "dayNumber": 6,
    "classCode": "Class 454",
    "theme": "Reading & Speaking Fluency, 10 Questions Speaking Chain & Team Challenge",
    "japaneseTheme": "読む・話す・もう一度！流暢さトレーニング (Yomu, hanasu, mō ichido! Ryūchōsa torēningu)",
    "subtitle": "Put theory into rapid execution with action choice drills, rapid date & time recognition, and dual reading passages",
    "description": "Intensive verbal fluency practice drilling actions in context, colour-noun combinations (赤いりんご, 青いそら), 10 calendar dates and 10 clock times, two parallel mini readings (Yuki vs Aki), a 10-question speaking chain, and the final 10-point team challenge.",
    "badge": "Class 454 · Fluency & Speaking Chain",
    "goals": [
        "Rapidly pick the natural action verb for everyday nouns (本を読みます, 音楽を聞きます, テレビを見ます)",
        "Pronounce Japanese colors and adjectives without hesitation (赤いりんご, 青いそら, 白いくも, 黒いかばん)",
        "Instantly read calendar dates (9/1, 9/4, 9/6, 9/8, 9/10) and odd minutes (1:01, 2:03, 4:04, 7:06)",
        "Read and comprehend two full story passages: Passage A (ゆき) & Passage B (あき)",
        "Answer all 10 questions in the interactive Speaking Chain"
    ],
    "keyHighlights": [
        "Fluency Rule: Try reading the kanji first without checking the furigana hint! Train your eyes to recognize whole characters instantaneously.",
        "Color + Noun Combinations: Colors that end in い modify nouns directly: 赤いりんご (red apple), 青いそら (blue sky), 白いくも (white cloud), 黒いかばん (black bag)!",
        "Dual Passage Timeline: Story A takes place on Friday, Sept 4th at 9 AM with Yuki in the park; Story B takes place on Thursday, Sept 10th at 3-5 PM with Aki listening to music and writing in his white bag!"
    ],
    "kanjiList": [
        {
            "kanji": "花",
            "meaning": "flower",
            "onyomi": "カ (ka)",
            "kunyomi": "はな (hana)",
            "strokes": 7,
            "radical": "花",
            "radicalClue": "Core element: 花",
            "examples": [
                {
                    "word": "花",
                    "reading": "はな (hana)",
                    "meaning": "flower",
                    "romaji": "hana"
                },
                {
                    "word": "花火",
                    "reading": "はなび (hanabi)",
                    "meaning": "fireworks",
                    "romaji": "hanabi"
                }
            ]
        },
        {
            "kanji": "車",
            "meaning": "car, vehicle",
            "onyomi": "シャ (sha)",
            "kunyomi": "くるま (kuruma)",
            "strokes": 7,
            "radical": "車",
            "radicalClue": "Core element: 車",
            "examples": [
                {
                    "word": "車",
                    "reading": "くるま (kuruma)",
                    "meaning": "car",
                    "romaji": "kuruma"
                }
            ]
        },
        {
            "kanji": "名",
            "meaning": "name",
            "onyomi": "メイ・ミョウ (mei / myou)",
            "kunyomi": "な (na)",
            "strokes": 6,
            "radical": "名",
            "radicalClue": "Core element: 名",
            "examples": [
                {
                    "word": "名前",
                    "reading": "なまえ (namae)",
                    "meaning": "name",
                    "romaji": "namae"
                }
            ]
        },
        {
            "kanji": "空",
            "meaning": "sky, empty",
            "onyomi": "クウ (kuu)",
            "kunyomi": "そら・あ(く)・から (sora / a(ku) / kara)",
            "strokes": 8,
            "radical": "空",
            "radicalClue": "Core element: 空",
            "examples": [
                {
                    "word": "空",
                    "reading": "そら (sora)",
                    "meaning": "sky",
                    "romaji": "sora"
                },
                {
                    "word": "青空",
                    "reading": "あおぞら (aozora)",
                    "meaning": "blue sky",
                    "romaji": "aozora"
                }
            ]
        },
        {
            "kanji": "読",
            "meaning": "read",
            "onyomi": "ドク (doku)",
            "kunyomi": "よ(む) (yo(mu))",
            "strokes": 14,
            "radical": "読",
            "radicalClue": "Core element: 読",
            "examples": [
                {
                    "word": "読む",
                    "reading": "よむ (yomu)",
                    "meaning": "to read",
                    "romaji": "yomu"
                }
            ]
        },
        {
            "kanji": "聞",
            "meaning": "hear, listen",
            "onyomi": "ブン (bun)",
            "kunyomi": "き(く) (ki(ku))",
            "strokes": 14,
            "radical": "聞",
            "radicalClue": "Core element: 聞",
            "examples": [
                {
                    "word": "聞く",
                    "reading": "きく (kiku)",
                    "meaning": "to hear / listen",
                    "romaji": "kiku"
                }
            ]
        },
        {
            "kanji": "話",
            "meaning": "speak, talk",
            "onyomi": "ワ (wa)",
            "kunyomi": "はな(す) (hana(su))",
            "strokes": 13,
            "radical": "話",
            "radicalClue": "Core element: 話",
            "examples": [
                {
                    "word": "話す",
                    "reading": "はなす (hanasu)",
                    "meaning": "to speak / talk",
                    "romaji": "hanasu"
                }
            ]
        },
        {
            "kanji": "見",
            "meaning": "see, watch",
            "onyomi": "ケン (ken)",
            "kunyomi": "み(る) (mi(ru))",
            "strokes": 7,
            "radical": "見",
            "radicalClue": "Core element: 見",
            "examples": [
                {
                    "word": "見る",
                    "reading": "みる (miru)",
                    "meaning": "to see / watch",
                    "romaji": "miru"
                }
            ]
        },
        {
            "kanji": "書",
            "meaning": "write",
            "onyomi": "ショ (sho)",
            "kunyomi": "か(く) (ka(ku))",
            "strokes": 10,
            "radical": "書",
            "radicalClue": "Core element: 書",
            "examples": [
                {
                    "word": "書く",
                    "reading": "かく (kaku)",
                    "meaning": "to write",
                    "romaji": "kaku"
                }
            ]
        },
        {
            "kanji": "行",
            "meaning": "go",
            "onyomi": "コウ (kou)",
            "kunyomi": "い(く) (i(ku))",
            "strokes": 6,
            "radical": "行",
            "radicalClue": "Core element: 行",
            "examples": [
                {
                    "word": "行く",
                    "reading": "いく (iku)",
                    "meaning": "to go",
                    "romaji": "iku"
                }
            ]
        }
    ],
    "vocabularyList": [
        {
            "japanese": "赤いりんご",
            "reading": "あかい りんご (akai ringo)",
            "english": "red apple",
            "category": "Phrase",
            "notes": "赤いりんごを食べます。",
            "romaji": "akai ringo"
        },
        {
            "japanese": "青いそら",
            "reading": "あおい そら (aoi sora)",
            "english": "blue sky",
            "category": "Phrase",
            "notes": "青いそらがきれいです。",
            "romaji": "aoi sora"
        },
        {
            "japanese": "白いねこ",
            "reading": "しろい ねこ (shiroi neko)",
            "english": "white cat",
            "category": "Phrase",
            "notes": "白いねこがいます。",
            "romaji": "shiroi neko"
        },
        {
            "japanese": "黒い犬",
            "reading": "くろい いぬ (kuroi inu)",
            "english": "black dog",
            "category": "Phrase",
            "notes": "黒い犬は大きいです。",
            "romaji": "kuroi inu"
        },
        {
            "japanese": "ピンクの花",
            "reading": "ぴんくの はな (pinkuno hana)",
            "english": "pink flower",
            "category": "Phrase",
            "notes": "きれいなピンクの花。",
            "romaji": "pinkuno hana"
        },
        {
            "japanese": "オレンジのみかん",
            "reading": "おれんじの みかん (orenjino mikan)",
            "english": "orange mandarin",
            "category": "Phrase",
            "notes": "甘いオレンジのみかん。",
            "romaji": "orenjino mikan"
        },
        {
            "japanese": "グレーの車",
            "reading": "ぐれーの くるま (gureeno kuruma)",
            "english": "grey car",
            "category": "Phrase",
            "notes": "グレーの車があります。",
            "romaji": "gureeno kuruma"
        },
        {
            "japanese": "青い本",
            "reading": "あおい ほん (aoi hon)",
            "english": "blue book",
            "category": "Phrase",
            "notes": "青い本を読みます。",
            "romaji": "aoi hon"
        },
        {
            "japanese": "九月一日",
            "reading": "くがつ ついたち (kugatsu tsuitachi)",
            "english": "September 1st",
            "category": "Date",
            "notes": "九月一日です。",
            "romaji": "kugatsu tsuitachi"
        },
        {
            "japanese": "九月四日",
            "reading": "くがつ よっか (kugatsu yokka)",
            "english": "September 4th",
            "category": "Date",
            "notes": "九月四日、金曜日です。",
            "romaji": "kugatsu yokka"
        },
        {
            "japanese": "九月六日",
            "reading": "くがつ むいか (kugatsu muika)",
            "english": "September 6th",
            "category": "Date",
            "notes": "九月六日です。",
            "romaji": "kugatsu muika"
        },
        {
            "japanese": "九月八日",
            "reading": "くがつ ようか (kugatsu youka)",
            "english": "September 8th",
            "category": "Date",
            "notes": "九月八日です。",
            "romaji": "kugatsu youka"
        },
        {
            "japanese": "九月十日",
            "reading": "くがつ とおか (kugatsu tooka)",
            "english": "September 10th",
            "category": "Date",
            "notes": "九月十日、木曜日です。",
            "romaji": "kugatsu tooka"
        },
        {
            "japanese": "金曜日",
            "reading": "きんようび (kinyoubi)",
            "english": "Friday",
            "category": "Day",
            "notes": "金曜日です。",
            "romaji": "kinyoubi"
        },
        {
            "japanese": "木曜日",
            "reading": "もくようび (mokuyoubi)",
            "english": "Thursday",
            "category": "Day",
            "notes": "木曜日です。",
            "romaji": "mokuyoubi"
        },
        {
            "japanese": "名前",
            "reading": "なまえ (namae)",
            "english": "name",
            "category": "Noun",
            "notes": "名前を書きます。",
            "romaji": "namae"
        },
        {
            "japanese": "車",
            "reading": "くるま (kuruma)",
            "english": "car",
            "category": "Noun",
            "notes": "グレーの車。",
            "romaji": "kuruma"
        },
        {
            "japanese": "花",
            "reading": "はな (hana)",
            "english": "flower",
            "category": "Noun",
            "notes": "ピンクの花。",
            "romaji": "hana"
        },
        {
            "japanese": "そら",
            "reading": "そら (sora)",
            "english": "sky",
            "category": "Noun",
            "notes": "青いそら。",
            "romaji": "sora"
        },
        {
            "japanese": "りんご",
            "reading": "りんご (ringo)",
            "english": "apple",
            "category": "Noun",
            "notes": "赤いりんご。",
            "romaji": "ringo"
        }
    ],
    "grammarNotes": [
        {
            "title": "Colour Adjectives: い vs の",
            "structure": "",
            "explanation": "Native Japanese colour terms directly modify nouns using their final い (赤い本, 青いそら, 白いねこ, 黒い犬). Loanword colours (ピンク, オレンジ, グレー) are nouns and require the particle の (ピンクの花, オレンジのみかん, グレーの車).",
            "examples": [
                {
                    "japanese": "赤いりんご",
                    "reading": "あかいりんご (akai ringo)",
                    "english": "Red apple",
                    "romaji": "akai ringo"
                },
                {
                    "japanese": "ピンクの花",
                    "reading": "ぴんくのはな (pinku no hana)",
                    "english": "Pink flower",
                    "romaji": "pinku no hana"
                },
                {
                    "japanese": "グレーの車",
                    "reading": "ぐれーのくるま (guree no kuruma)",
                    "english": "Grey car",
                    "romaji": "guree no kuruma"
                }
            ]
        },
        {
            "title": "Subject Particle が with 'だれ' (Who)",
            "structure": "",
            "explanation": "When asking who performs an action with 'だれが', the answer must also use 'が' to identify the actor.",
            "examples": [
                {
                    "japanese": "だれが名前を書きますか？",
                    "reading": "だれがなまえをかきますか？ (dare ga namae o kakimasu ka?)",
                    "english": "Who writes names?",
                    "romaji": "dare ga namae o kakimasu ka?"
                },
                {
                    "japanese": "先生が書きます。",
                    "reading": "せんせいがかきます (sensei ga kakimasu)",
                    "english": "The teacher writes.",
                    "romaji": "sensei ga kakimasu"
                }
            ]
        },
        {
            "title": "Time Marker に in Compound Sentences",
            "structure": "",
            "explanation": "Specific points in time require に. When multiple activities happen in a sequence, each timestamp takes に.",
            "examples": [
                {
                    "japanese": "午後三時にテレビを見ます。",
                    "reading": "ごごさんじにてれびをみます (gogo sanji ni terebi o mimasu)",
                    "english": "At 3:00 PM I watch TV.",
                    "romaji": "gogo sanji ni terebi o mimasu"
                },
                {
                    "japanese": "午後四時に音楽を聞きます。",
                    "reading": "ごごよじにおんがくをききます (gogo yoji ni ongaku o kikimasu)",
                    "english": "At 4:00 PM I listen to music.",
                    "romaji": "gogo yoji ni ongaku o kikimasu"
                }
            ]
        }
    ],
    "readingPassages": [
        {
            "title": "Passage A: ゆきの金曜日 (Yuki's Friday Morning)",
            "text": "九月四日は金曜日です。ゆきは午前九時に公園へ行きます。公園であきと話します。それから、青い本を読みます。午前十時に家へ帰ります。",
            "translation": "September 4th is Friday. Yuki goes to the park at 9:00 AM. In the park, she talks with Aki. After that, she reads a blue book. At 10:00 AM, she returns home.",
            "questions": [
                {
                    "q": "何月何日ですか？ (Nan-gatsu nan-nichi desu ka? / What date is it?)",
                    "a": "九月四日（くがつ よっか / kugatsu yokka）です。(Sep 4)"
                },
                {
                    "q": "何曜日ですか？ (Nan-yōbi desu ka? / What day of the week is it?)",
                    "a": "金曜日（きんようび / kinyōbi）です。(Friday)"
                },
                {
                    "q": "ゆきは何時に公園へ行きますか？ (Yuki wa nan-ji ni kōen e ikimasu ka? / What time does Yuki go to the park?)",
                    "a": "午前九時（ごぜん くじ / gozen kuji）です。(9:00 AM)"
                },
                {
                    "q": "公園でだれと話しますか？ (Kōen de dare to hanashimasu ka? / Who does she talk with in the park?)",
                    "a": "あきと話します。(Aki to hanashimasu. / Talks with Aki.)"
                },
                {
                    "q": "本は何色ですか？ (Hon wa nani-iro desu ka? / What color is the book?)",
                    "a": "青（あおい本 / aoi hon）です。(Blue book)"
                }
            ],
            "romaji": "Kugatsu yokka wa kinyoubi desu. Yuki wa gozen kuji ni kouen e ikimasu. Kouen de Aki to hanashimasu. Sorekara, aoi hon o yomimasu. Gozen juuji ni ie e kaerimasu."
        },
        {
            "title": "Passage B: あきの木曜日 (Aki's Thursday Afternoon)",
            "text": "九月十日は木曜日です。あきは午後三時に家でテレビを見ます。午後四時に音楽を聞きます。白いかばんに名前を書きます。午後五時にゆきと話します。",
            "translation": "September 10th is Thursday. Aki watches TV at home at 3:00 PM. At 4:00 PM he listens to music. He writes his name on a white bag. At 5:00 PM he talks with Yuki.",
            "questions": [
                {
                    "q": "何月何日ですか？ (Nan-gatsu nan-nichi desu ka? / What date is it?)",
                    "a": "九月十日（くがつ とおか / kugatsu tōka）です。(Sep 10)"
                },
                {
                    "q": "何曜日ですか？ (Nan-yōbi desu ka? / What day of the week is it?)",
                    "a": "木曜日（もくようび / mokuyōbi）です。(Thursday)"
                },
                {
                    "q": "あきは午後三時にどこでテレビを見ますか？ (Aki wa gogo sanji ni doko de terebi o mimasu ka? / Where does Aki watch TV at 3:00 PM?)",
                    "a": "家（いえ / ie）で見ます。(At home)"
                },
                {
                    "q": "午後四時に何をしますか？ (Gogo yoji ni nani o shimasu ka? / What does Aki do at 4:00 PM?)",
                    "a": "音楽を聞きます。(Ongaku o kikimasu. / Listens to music)"
                },
                {
                    "q": "かばんは何色ですか？ (Kaban wa nani-iro desu ka? / What color is the bag?)",
                    "a": "白（しろいかばん / shiroi kaban）です。(White bag)"
                }
            ],
            "romaji": "Kugatsu tooka wa mokuyoubi desu. Aki wa gogo sanji ni ie de terebi o mimasu. Gogo yoji ni ongaku o kikimasu. Shiroi kaban ni namae o kakimasu. Gogo goji ni Yuki to hanashimasu."
        }
    ],
    "practiceQuiz": [
        {
            "question": "In Passage A, what time does Yuki return home?",
            "options": [
                "午前九時 (ごぜんくじ / gozen kuji - 9:00 AM)",
                "午前十時 (ごぜんじゅうじ / gozen jūji - 10:00 AM)",
                "午後三時 (ごごさんじ / gogo sanji - 3:00 PM)",
                "午後五時 (ごごごじ / gogo goji - 5:00 PM)"
            ],
            "correct": "午前十時 (ごぜんじゅうじ / gozen jūji - 10:00 AM)",
            "explanation": "Passage A states: 午前十時に家へ帰ります (Returns home at 10:00 AM)."
        },
        {
            "question": "In Passage B, what does Aki do at 4:00 PM (午後四時 / gogo yoji)?",
            "options": [
                "テレビを見ます (terebi o mimasu - watches TV)",
                "音楽を聞きます (ongaku o kikimasu - listens to music)",
                "本を読みます (hon o yomimasu - reads a book)",
                "公園へ行きます (kōen e ikimasu - goes to the park)"
            ],
            "correct": "音楽を聞きます (ongaku o kikimasu - listens to music)",
            "explanation": "Passage B states: 午後四時に音楽を聞きます (Listens to music at 4:00 PM)."
        },
        {
            "question": "Which verb naturally pairs with 音楽 (おんがく / ongaku - music)?",
            "options": [
                "見ます (みます / mimasu - watch)",
                "聞きます (ききます / kikimasu - listen)",
                "書きます (かきます / kakimasu - write)",
                "行きます (いきます / ikimasu - go)"
            ],
            "correct": "聞きます (ききます / kikimasu - listen)",
            "explanation": "音楽を聞きます (ongaku o kikimasu) means to listen to music."
        },
        {
            "question": "How do you read 7:06 in Japanese?",
            "options": [
                "ななじ ろくふん (nanaji rokufun)",
                "しちじ ろっぷん (shichiji roppun)",
                "ななじ ろっぷん (nanaji roppun)",
                "しちじ ろくふん (shichiji rokufun)"
            ],
            "correct": "しちじ ろっぷん (shichiji roppun)",
            "explanation": "7 o'clock is しちじ (shichiji) and 6 minutes uses sokuon: ろっぷん (roppun)."
        }
    ],
    "slides": [
        {
            "slideNumber": 1,
            "title": "日本語 Class 454 · 読む・話す・もう一度",
            "blocks": [
                [
                    "日本語  Class 45⃣4"
                ],
                [
                    "読む・話す・もう一度"
                ],
                [
                    "動作・Actions"
                ],
                [
                    "見る　聞く　話す",
                    "読む　書く　行く"
                ],
                [
                    "色・Colours"
                ],
                [
                    "赤　青　白　黒",
                    "ピンク　オレンジ　グレー"
                ],
                [
                    "日付・時間"
                ],
                [
                    "1日〜10日",
                    "時・分・午前・午後"
                ],
                [
                    "Goal"
                ],
                [
                    "Read familiar Japanese faster and answer with short sentences"
                ],
                [
                    "Nikki JP Class 454  ·  Review / Reading / Speaking"
                ]
            ],
            "jpTitle": "表紙：日本語 Class 454",
            "summary": "Intensive reading and speaking drill reviewing actions, colours, dates, and times.",
            "bullets": [
                "Class: Nikki JP Class 454",
                "Core Focus: Actions (見る, 聞く, 話す, 読む, 書く, 行く), Colours (赤, 青, 白, 黒, ピンク, オレンジ, グレー), Dates & Time",
                "Format: Rapid reading, partner dialogue, and classroom speaking chains."
            ],
            "highlight": "Language fluency comes from speaking in full sentences without hesitation."
        },
        {
            "slideNumber": 2,
            "title": "Today's Lesson Map & Classroom Rules",
            "blocks": [
                [
                    "Today’s Lesson"
                ],
                [
                    "NIKKI JP"
                ],
                [
                    "Nikki JP Class 454  ·  Lesson map"
                ],
                [
                    "Today"
                ],
                [
                    "1  動作を読む",
                    "2  色を言う",
                    "3  日付を読む",
                    "4  時間を言う",
                    "5  Mini Reading",
                    "6  Speaking Chain"
                ],
                [
                    "Class rule"
                ],
                [
                    "One student answers first.",
                    "Another student repeats the full sentence."
                ],
                [
                    "Review rule"
                ],
                [
                    "Try the kanji first.",
                    "Use the reading clue only when needed."
                ]
            ],
            "jpTitle": "本日のレッスンプランとルール",
            "summary": "Six sequential milestones for Class 454.",
            "bullets": [
                "1. 動作を読む (Read actions)",
                "2. 色を言う (Say colours)",
                "3. 日付を読む (Read calendar dates)",
                "4. 時間を言う (State clock times)",
                "5. Mini Reading (Readings A & B)",
                "6. Speaking Chain (10 classroom questions)",
                "Class rule: One student answers first, then partner responds immediately."
            ],
            "highlight": "Speed and pronunciation accuracy are the focus of this session."
        },
        {
            "slideNumber": 3,
            "title": "Warm-up: Read the 4 Actions Aloud",
            "blocks": [
                [
                    "Warm-up・読んでください"
                ],
                [
                    "NIKKI JP"
                ],
                [
                    "Nikki JP Class 454  ·  Actions"
                ],
                [
                    "Read each word aloud, then say the English meaning"
                ],
                [
                    "1"
                ],
                [
                    "見る"
                ],
                [
                    "2"
                ],
                [
                    "聞く"
                ],
                [
                    "3"
                ],
                [
                    "話す"
                ],
                [
                    "4"
                ],
                [
                    "読む"
                ],
                [
                    "5"
                ],
                [
                    "書く"
                ]
            ],
            "jpTitle": "ウォームアップ：動作を読む",
            "summary": "Rapid identification of the 4 core verbs.",
            "bullets": [
                "1. 見る (see / watch)",
                "2. 聞く (listen / ask)",
                "3. 話す (speak)",
                "4. 読む (read)"
            ],
            "highlight": "Pronounce each word clearly before saying the English meaning."
        },
        {
            "slideNumber": 4,
            "title": "Warm-up: Answers & Meanings",
            "blocks": [
                [
                    "Warm-up・答え"
                ],
                [
                    "NIKKI JP"
                ],
                [
                    "Nikki JP Class 454  ·  Actions"
                ],
                [
                    "1"
                ],
                [
                    "見る・みる・see / watch"
                ],
                [
                    "2"
                ],
                [
                    "聞く・きく・listen / ask"
                ],
                [
                    "3"
                ],
                [
                    "話す・はなす・speak"
                ],
                [
                    "4"
                ],
                [
                    "読む・よむ・read"
                ],
                [
                    "5"
                ],
                [
                    "書く・かく・write"
                ]
            ],
            "jpTitle": "ウォームアップの答え",
            "summary": "Official pronunciation and definitions.",
            "bullets": [
                "1. 見る · みる · see / watch",
                "2. 聞く · きく · listen / ask",
                "3. 話す · はなす · speak",
                "4. 読む · よむ · read"
            ],
            "highlight": "Notice the kanji clues: 目 in 見る, 耳 in 聞く, 言 in 話す and 読む."
        },
        {
            "slideNumber": 5,
            "title": "Action Choice: Select the Right Verb",
            "blocks": [
                [
                    "Action Choice・動作をえらぶ"
                ],
                [
                    "NIKKI JP"
                ],
                [
                    "Nikki JP Class 454  ·  Actions"
                ],
                [
                    "Choose the action that makes sense"
                ],
                [
                    "1"
                ],
                [
                    "本を（読みます／聞きます）"
                ],
                [
                    "2"
                ],
                [
                    "音楽を（見ます／聞きます）"
                ],
                [
                    "3"
                ],
                [
                    "テレビを（見ます／行きます）"
                ],
                [
                    "4"
                ],
                [
                    "公園へ（行きます／書きます）"
                ],
                [
                    "5"
                ],
                [
                    "あきと（話します／読みます）"
                ],
                [
                    "6"
                ],
                [
                    "名前を（書きます／見ます）"
                ],
                [
                    "7"
                ],
                [
                    "先生の話を（聞きます／行きます）"
                ],
                [
                    "8"
                ],
                [
                    "カレンダーを（見ます／話します）"
                ],
                [
                    "9"
                ],
                [
                    "青い本を（書きます／読みます）"
                ],
                [
                    "10"
                ],
                [
                    "日本語を（話します／見ます）"
                ]
            ],
            "jpTitle": "動作をえらぶ：文脈判断",
            "summary": "Four sentences testing semantic verb compatibility.",
            "bullets": [
                "1. 本を（読みます／聞きます）",
                "2. 音楽を（見ます／聞きます）",
                "3. テレビを（見ます／行きます）",
                "4. 公園へ（行きます／書きます）"
            ],
            "highlight": "Choose the verb that makes physical sense with the direct object or location."
        },
        {
            "slideNumber": 6,
            "title": "Action Choice: Answer Key",
            "blocks": [
                [
                    "Action Choice・答え"
                ],
                [
                    "NIKKI JP"
                ],
                [
                    "Nikki JP Class 454  ·  Actions"
                ],
                [
                    "1"
                ],
                [
                    "本を読みます"
                ],
                [
                    "2"
                ],
                [
                    "音楽を聞きます"
                ],
                [
                    "3"
                ],
                [
                    "テレビを見ます"
                ],
                [
                    "4"
                ],
                [
                    "公園へ行きます"
                ],
                [
                    "5"
                ],
                [
                    "あきと話します"
                ],
                [
                    "6"
                ],
                [
                    "名前を書きます"
                ],
                [
                    "7"
                ],
                [
                    "先生の話を聞きます"
                ],
                [
                    "8"
                ],
                [
                    "カレンダーを見ます"
                ],
                [
                    "9"
                ],
                [
                    "青い本を読みます"
                ],
                [
                    "10"
                ],
                [
                    "日本語を話します"
                ]
            ],
            "jpTitle": "動作選択の答え",
            "summary": "Correct verb collocations in polite -masu form.",
            "bullets": [
                "1. 本を読みます (I read a book)",
                "2. 音楽を聞きます (I listen to music)",
                "3. テレビを見ます (I watch television)",
                "4. 公園へ行きます (I go to the park)"
            ],
            "highlight": "Verb collocations are fixed pairings: 本 + 読む, 音楽 + 聞く, テレビ + 見る, 公園 + 行く."
        },
        {
            "slideNumber": 7,
            "title": "Action Reading: Full Sentence Aloud",
            "blocks": [
                [
                    "Action Reading・声に出して読む"
                ],
                [
                    "NIKKI JP"
                ],
                [
                    "Nikki JP Class 454  ·  Actions"
                ],
                [
                    "One sentence for each student"
                ],
                [
                    "1"
                ],
                [
                    "ゆきは青い本を読みます。"
                ],
                [
                    "2"
                ],
                [
                    "あきは午後三時に公園へ行きます。"
                ],
                [
                    "3"
                ],
                [
                    "わたしは先生の話を聞きます。"
                ],
                [
                    "4"
                ],
                [
                    "九月八日に名前を書きます。"
                ],
                [
                    "5"
                ],
                [
                    "午後五時にあきと話します。"
                ]
            ],
            "jpTitle": "声に出して読む文",
            "summary": "Four complete sentences distributed around the classroom.",
            "bullets": [
                "1. ゆきは青い本を読みます。 (Yuki reads a blue book.)",
                "2. あきは午後三時に公園へ行きます。 (Aki goes to the park at 3:00 PM.)",
                "3. わたしは音楽を聞きます。 (I listen to music.)",
                "4. 先生は名前を書きます。 (The teacher writes names.)"
            ],
            "highlight": "One sentence per student—focus on clean pacing and particle pronunciation."
        },
        {
            "slideNumber": 8,
            "title": "Action Reading: Comprehension Questions",
            "blocks": [
                [
                    "Action Reading・質問"
                ],
                [
                    "NIKKI JP"
                ],
                [
                    "Nikki JP Class 454  ·  Actions"
                ],
                [
                    "1"
                ],
                [
                    "ゆきは何を読みますか？"
                ],
                [
                    "2"
                ],
                [
                    "あきは何時に公園へ行きますか？"
                ],
                [
                    "3"
                ],
                [
                    "わたしは何を聞きますか？"
                ],
                [
                    "4"
                ],
                [
                    "九月八日に何を書きますか？"
                ],
                [
                    "5"
                ],
                [
                    "午後五時に何をしますか？"
                ]
            ],
            "jpTitle": "文の理解度チェック質問",
            "summary": "Three targeted questions based on the four sentences.",
            "bullets": [
                "1. ゆきは何を読みますか？ (What does Yuki read?)",
                "2. あきは何時に公園へ行きますか？ (What time does Aki go to the park?)",
                "3. だれが名前を書きますか？ (Who writes names?)"
            ],
            "highlight": "Listen for key question words: 何 (what), 何時 (what time), だれ (who)."
        },
        {
            "slideNumber": 9,
            "title": "Action Reading: Comprehension Answers",
            "blocks": [
                [
                    "Action Reading・答え"
                ],
                [
                    "NIKKI JP"
                ],
                [
                    "Nikki JP Class 454  ·  Actions"
                ],
                [
                    "1"
                ],
                [
                    "青い本を読みます。"
                ],
                [
                    "2"
                ],
                [
                    "午後三時に公園へ行きます。"
                ],
                [
                    "3"
                ],
                [
                    "先生の話を聞きます。"
                ],
                [
                    "4"
                ],
                [
                    "名前を書きます。"
                ],
                [
                    "5"
                ],
                [
                    "あきと話します。"
                ]
            ],
            "jpTitle": "理解度チェックの答え",
            "summary": "Correct factual answers from the reading sentences.",
            "bullets": [
                "1. 青い本を読みます。 (She reads a blue book.)",
                "2. 午後三時に公園へ行きます。 (At 3:00 PM.)",
                "3. 先生が書きます。 (The teacher writes.)"
            ],
            "highlight": "Notice how が is used to answer 'だれが' questions."
        },
        {
            "slideNumber": 10,
            "title": "Colour Reading: Modifier Noun Pairs",
            "blocks": [
                [
                    "Colour Reading・色をえらぶ"
                ],
                [
                    "NIKKI JP"
                ],
                [
                    "Nikki JP Class 454  ·  Colours"
                ],
                [
                    "Choose the Japanese phrase that matches the English"
                ],
                [
                    "1"
                ],
                [
                    "red apple",
                    "赤いりんご／青いりんご"
                ],
                [
                    "2"
                ],
                [
                    "blue sky",
                    "白いそら／青いそら"
                ],
                [
                    "3"
                ],
                [
                    "white cloud",
                    "白いくも／黒いくも"
                ],
                [
                    "4"
                ],
                [
                    "black bag",
                    "黒いかばん／赤いかばん"
                ],
                [
                    "5"
                ],
                [
                    "pink book",
                    "ピンクの本／グレーの本"
                ],
                [
                    "6"
                ],
                [
                    "orange juice",
                    "オレンジ色のジュース／青いジュース"
                ],
                [
                    "7"
                ],
                [
                    "grey dog",
                    "グレーの犬／白い犬"
                ],
                [
                    "8"
                ],
                [
                    "white cat",
                    "黒いねこ／白いねこ"
                ],
                [
                    "9"
                ],
                [
                    "black TV",
                    "黒いテレビ／青いテレビ"
                ],
                [
                    "10"
                ],
                [
                    "blue calendar",
                    "白いカレンダー／青いカレンダー"
                ]
            ],
            "jpTitle": "色と名詞の組み合わせ",
            "summary": "Seven everyday nouns modified by color adjectives.",
            "bullets": [
                "1. 赤いりんご (red apple)",
                "2. 青いそら (blue sky)",
                "3. 白いねこ (white cat)",
                "4. 黒い犬 (black dog)",
                "5. ピンクの花 (pink flower)",
                "6. オレンジのみかん (orange mandarin)",
                "7. グレーの車 (grey car)"
            ],
            "highlight": "Native Japanese colours take い (赤い, 青い, 白い, 黒い); loanwords take の (ピンクの, オレンジの, グレーの)!"
        },
        {
            "slideNumber": 11,
            "title": "Colour Reading: Translations",
            "blocks": [
                [
                    "Colour Reading・答え"
                ],
                [
                    "NIKKI JP"
                ],
                [
                    "Nikki JP Class 454  ·  Colours"
                ],
                [
                    "1"
                ],
                [
                    "赤いりんご"
                ],
                [
                    "2"
                ],
                [
                    "青いそら"
                ],
                [
                    "3"
                ],
                [
                    "白いくも"
                ],
                [
                    "4"
                ],
                [
                    "黒いかばん"
                ],
                [
                    "5"
                ],
                [
                    "ピンクの本"
                ],
                [
                    "6"
                ],
                [
                    "オレンジ色のジュース"
                ],
                [
                    "7"
                ],
                [
                    "グレーの犬"
                ],
                [
                    "8"
                ],
                [
                    "白いねこ"
                ],
                [
                    "9"
                ],
                [
                    "黒いテレビ"
                ],
                [
                    "10"
                ],
                [
                    "青いカレンダー"
                ]
            ],
            "jpTitle": "色と名詞の答え",
            "summary": "English translations for all seven colour pairs.",
            "bullets": [
                "1. red apple",
                "2. blue sky",
                "3. white cat",
                "4. black dog",
                "5. pink flower",
                "6. orange mandarin",
                "7. grey car"
            ],
            "highlight": "Keep the difference between い-adjectives and の-particles in mind."
        },
        {
            "slideNumber": 12,
            "title": "Colour Speaking: Partner Exchange",
            "blocks": [
                [
                    "Colour Speaking・何色ですか？"
                ],
                [
                    "NIKKI JP"
                ],
                [
                    "Nikki JP Class 454  ·  Colours"
                ],
                [
                    "Each student asks and answers one question"
                ],
                [
                    "1"
                ],
                [
                    "りんご　　これは何色ですか？"
                ],
                [
                    "2"
                ],
                [
                    "そら　　　これは何色ですか？"
                ],
                [
                    "3"
                ],
                [
                    "くも　　　これは何色ですか？"
                ],
                [
                    "4"
                ],
                [
                    "かばん　　これは何色ですか？"
                ],
                [
                    "5"
                ],
                [
                    "本　　　　これは何色ですか？"
                ],
                [
                    "Answer: これは＿＿です。"
                ]
            ],
            "jpTitle": "色の会話練習",
            "summary": "Interactive conversation drill on favorite colours.",
            "bullets": [
                "Question: 何色が好きですか？ (What colour do you like?)",
                "Answer: ＿＿が好きです。 (I like ___.)",
                "Example: 青が好きです。 / 赤が好きです。"
            ],
            "highlight": "When stating a preferred color as a standalone noun, drop the final い: 赤が好きです (not 赤いが好きです)."
        },
        {
            "slideNumber": 13,
            "title": "Date Challenge: Read 10 Dates Aloud",
            "blocks": [
                [
                    "Date Challenge・何日ですか？"
                ],
                [
                    "NIKKI JP"
                ],
                [
                    "Nikki JP Class 454  ·  Dates"
                ],
                [
                    "Read the ten dates aloud"
                ],
                [
                    "1"
                ],
                [
                    "9 / 1"
                ],
                [
                    "2"
                ],
                [
                    "9 / 2"
                ],
                [
                    "3"
                ],
                [
                    "9 / 3"
                ],
                [
                    "4"
                ],
                [
                    "9 / 4"
                ],
                [
                    "5"
                ],
                [
                    "9 / 5"
                ],
                [
                    "6"
                ],
                [
                    "9 / 6"
                ],
                [
                    "7"
                ],
                [
                    "9 / 7"
                ],
                [
                    "8"
                ],
                [
                    "9 / 8"
                ],
                [
                    "9"
                ],
                [
                    "9 / 9"
                ],
                [
                    "10"
                ],
                [
                    "9 / 10"
                ]
            ],
            "jpTitle": "日付チャレンジ：10日分",
            "summary": "Rapid-fire pronunciation drill for 9/1 through 9/10.",
            "bullets": [
                "1. 9/1",
                "2. 9/2",
                "3. 9/3",
                "4. 9/4",
                "5. 9/5",
                "6. 9/6",
                "7. 9/7",
                "8. 9/8",
                "9. 9/9",
                "10. 9/10"
            ],
            "highlight": "Every student reads one date smoothly without hesitation."
        },
        {
            "slideNumber": 14,
            "title": "Date Challenge: Complete Answer Key",
            "blocks": [
                [
                    "Date Challenge・答え"
                ],
                [
                    "NIKKI JP"
                ],
                [
                    "Nikki JP Class 454  ·  Dates"
                ],
                [
                    "1"
                ],
                [
                    "九月一日",
                    "くがつ ついたち"
                ],
                [
                    "2"
                ],
                [
                    "九月二日",
                    "くがつ ふつか"
                ],
                [
                    "3"
                ],
                [
                    "九月三日",
                    "くがつ みっか"
                ],
                [
                    "4"
                ],
                [
                    "九月四日",
                    "くがつ よっか"
                ],
                [
                    "5"
                ],
                [
                    "九月五日",
                    "くがつ いつか"
                ],
                [
                    "6"
                ],
                [
                    "九月六日",
                    "くがつ むいか"
                ],
                [
                    "7"
                ],
                [
                    "九月七日",
                    "くがつ なのか"
                ],
                [
                    "8"
                ],
                [
                    "九月八日",
                    "くがつ ようか"
                ],
                [
                    "9"
                ],
                [
                    "九月九日",
                    "くがつ ここのか"
                ],
                [
                    "10"
                ],
                [
                    "九月十日",
                    "くがつ とおか"
                ]
            ],
            "jpTitle": "日付チャレンジの答え",
            "summary": "Exact readings for the first ten days of September.",
            "bullets": [
                "1. 九月一日 · くがつ ついたち",
                "2. 九月二日 · くがつ ふつか",
                "3. 九月三日 · くがつ みっか",
                "4. 九月四日 · くがつ よっか",
                "5. 九月五日 · くがつ いつか",
                "6. 九月六日 · くがつ むいか",
                "7. 九月七日 · くがつ なのか",
                "8. 九月八日 · くがつ ようか",
                "9. 九月九日 · くがつ ここのか",
                "10. 九月十日 · くがつ とおか"
            ],
            "highlight": "September is ALWAYS くがつ, never きゅうがつ!"
        },
        {
            "slideNumber": 15,
            "title": "Date Speaking Cards",
            "blocks": [
                [
                    "Date Speaking・カード"
                ],
                [
                    "NIKKI JP"
                ],
                [
                    "Nikki JP Class 454  ·  Dates"
                ],
                [
                    "Partner asks: 何月何日ですか？"
                ],
                [
                    "1"
                ],
                [
                    "Student 1　9 / 1"
                ],
                [
                    "2"
                ],
                [
                    "Student 2　9 / 4"
                ],
                [
                    "3"
                ],
                [
                    "Student 3　9 / 6"
                ],
                [
                    "4"
                ],
                [
                    "Student 4　9 / 8"
                ],
                [
                    "5"
                ],
                [
                    "Student 5　9 / 10"
                ],
                [
                    "Answer: 九月＿＿日です。"
                ]
            ],
            "jpTitle": "日付スピーキングカード",
            "summary": "Roleplay cards for five students.",
            "bullets": [
                "Partner asks: 何月何日ですか？",
                "Student 1 card (9/1) → 九月一日です。",
                "Student 2 card (9/4) → 九月四日です。",
                "Student 3 card (9/6) → 九月六日です。",
                "Student 4 card (9/8) → 九月八日です。",
                "Student 5 card (9/10) → 九月十日です。"
            ],
            "highlight": "Add です to form polite, natural spoken responses."
        },
        {
            "slideNumber": 16,
            "title": "Time Challenge: Read 10 Clocks Aloud",
            "blocks": [
                [
                    "Time Challenge・何時ですか？"
                ],
                [
                    "NIKKI JP"
                ],
                [
                    "Nikki JP Class 454  ·  Time"
                ],
                [
                    "Read the ten times aloud"
                ],
                [
                    "1"
                ],
                [
                    "1 : 01"
                ],
                [
                    "2"
                ],
                [
                    "2 : 03"
                ],
                [
                    "3"
                ],
                [
                    "4 : 04"
                ],
                [
                    "4"
                ],
                [
                    "7 : 06"
                ],
                [
                    "5"
                ],
                [
                    "9 : 08"
                ],
                [
                    "6"
                ],
                [
                    "1 : 10"
                ],
                [
                    "7"
                ],
                [
                    "2 : 30"
                ],
                [
                    "8"
                ],
                [
                    "4 : 10"
                ],
                [
                    "9"
                ],
                [
                    "7 : 30"
                ],
                [
                    "10"
                ],
                [
                    "9 : 10"
                ]
            ],
            "jpTitle": "時間チャレンジ：10問",
            "summary": "Ten clock times testing irregular hours and minutes.",
            "bullets": [
                "1. 1:01",
                "2. 2:03",
                "3. 4:04",
                "4. 7:06",
                "5. 9:08",
                "6. 1:10",
                "7. 2:30",
                "8. 4:10",
                "9. 7:30",
                "10. 9:10"
            ],
            "highlight": "Pay close attention to 4 (よじ), 7 (しちじ), and 9 (くじ)!"
        },
        {
            "slideNumber": 17,
            "title": "Time Challenge: Official Answers",
            "blocks": [
                [
                    "Time Challenge・答え"
                ],
                [
                    "NIKKI JP"
                ],
                [
                    "Nikki JP Class 454  ·  Time"
                ],
                [
                    "1"
                ],
                [
                    "いちじ いっぷん"
                ],
                [
                    "2"
                ],
                [
                    "にじ さんぷん"
                ],
                [
                    "3"
                ],
                [
                    "よじ よんぷん"
                ],
                [
                    "4"
                ],
                [
                    "しちじ ろっぷん"
                ],
                [
                    "5"
                ],
                [
                    "くじ はっぷん"
                ],
                [
                    "6"
                ],
                [
                    "いちじ じゅっぷん"
                ],
                [
                    "7"
                ],
                [
                    "にじ はん"
                ],
                [
                    "8"
                ],
                [
                    "よじ じゅっぷん"
                ],
                [
                    "9"
                ],
                [
                    "しちじ はん"
                ],
                [
                    "10"
                ],
                [
                    "くじ じゅっぷん"
                ]
            ],
            "jpTitle": "時間チャレンジの答え",
            "summary": "Complete readings for all ten time items.",
            "bullets": [
                "1. いちじ いっぷん (1:01)",
                "2. にじ さんぷん (2:03)",
                "3. よじ よんぷん (4:04)",
                "4. しちじ ろっぷん (7:06)",
                "5. くじ はっぷん (9:08)",
                "6. いちじ じゅっぷん (1:10)",
                "7. にじ はん (2:30)",
                "8. よじ じゅっぷん (4:10)",
                "9. しちじ はん (7:30)",
                "10. くじ じゅっぷん (9:10)"
            ],
            "highlight": "Notice 2:30 and 7:30 use はん (half past)."
        },
        {
            "slideNumber": 18,
            "title": "Time Speaking: Schedules & Routine",
            "blocks": [
                [
                    "Time Speaking・質問と答え"
                ],
                [
                    "NIKKI JP"
                ],
                [
                    "Nikki JP Class 454  ·  Time"
                ],
                [
                    "1"
                ],
                [
                    "本を読みます　　午前九時"
                ],
                [
                    "2"
                ],
                [
                    "公園へ行きます　午後三時"
                ],
                [
                    "3"
                ],
                [
                    "テレビを見ます　午後四時半"
                ],
                [
                    "4"
                ],
                [
                    "音楽を聞きます　午後七時十分"
                ],
                [
                    "5"
                ],
                [
                    "話します　　　　午後九時八分"
                ],
                [
                    "Question: 何時に＿＿ますか？"
                ]
            ],
            "jpTitle": "時間と行動のスピーキング",
            "summary": "Matching five activities to specific clock times.",
            "bullets": [
                "1. 本を読みます · 午前九時 (9:00 AM)",
                "2. 公園へ行きます · 午後三時 (3:00 PM)",
                "3. テレビを見ます · 午後四時半 (4:30 PM)",
                "4. 音楽を聞きます · 午後七時十分 (7:10 PM)",
                "5. 話します · 午後九時八分 (9:08 PM)",
                "Question frame: 何時に＿＿ますか？"
            ],
            "highlight": "Combine time + に + action verb: 午前九時に本を読みます。"
        },
        {
            "slideNumber": 19,
            "title": "Mini Reading A: Yuki's Friday (ゆき)",
            "blocks": [
                [
                    "Mini Reading A・ゆき"
                ],
                [
                    "NIKKI JP"
                ],
                [
                    "Nikki JP Class 454  ·  Reading"
                ],
                [
                    "Story"
                ],
                [
                    "九月四日、金曜日です。",
                    "ゆきは午前九時に公園へ行きます。",
                    "あきと話します。",
                    "青い本を読みます。",
                    "午前十時に家へ帰ります。"
                ]
            ],
            "jpTitle": "Mini Reading A：ゆきの金曜日",
            "summary": "A 5-sentence reading story featuring Yuki.",
            "bullets": [
                "九月四日、金曜日です。 (It is Friday, September 4th.)",
                "ゆきは午前九時に公園へ行きます。 (Yuki goes to the park at 9:00 AM.)",
                "あきと話します。 (She talks with Aki.)",
                "青い本を読みます。 (She reads a blue book.)",
                "午前十時に家へ帰ります。 (She goes home at 10:00 AM.)"
            ],
            "highlight": "Focus on dates, weekdays, times, and actions."
        },
        {
            "slideNumber": 20,
            "title": "Mini Reading A: 5 Questions",
            "blocks": [
                [
                    "Mini Reading A・質問"
                ],
                [
                    "NIKKI JP"
                ],
                [
                    "Nikki JP Class 454  ·  Reading"
                ],
                [
                    "1"
                ],
                [
                    "何月何日ですか？"
                ],
                [
                    "2"
                ],
                [
                    "何曜日ですか？"
                ],
                [
                    "3"
                ],
                [
                    "何時に公園へ行きますか？"
                ],
                [
                    "4"
                ],
                [
                    "本は何色ですか？"
                ],
                [
                    "5"
                ],
                [
                    "午前十時に何をしますか？"
                ]
            ],
            "jpTitle": "Mini Reading A：5つの質問",
            "summary": "Five comprehension questions about Yuki's day.",
            "bullets": [
                "1. 何月何日ですか？ (What date is it?)",
                "2. 何曜日ですか？ (What day of the week?)",
                "3. 何時に公園へ行きますか？ (What time to the park?)",
                "4. 本は何色ですか？ (What colour is the book?)",
                "5. 午前十時に何をしますか？ (What at 10:00 AM?)"
            ],
            "highlight": "Answer directly in Japanese."
        },
        {
            "slideNumber": 21,
            "title": "Mini Reading B: Aki's Thursday (あき)",
            "blocks": [
                [
                    "Mini Reading B・あき"
                ],
                [
                    "NIKKI JP"
                ],
                [
                    "Nikki JP Class 454  ·  Reading"
                ],
                [
                    "Story"
                ],
                [
                    "九月十日、木曜日です。",
                    "あきは午後三時にテレビを見ます。",
                    "午後四時に音楽を聞きます。",
                    "名前を書きます。",
                    "午後五時にゆきと話します。"
                ]
            ],
            "jpTitle": "Mini Reading B：あきの木曜日",
            "summary": "A 5-sentence parallel reading story featuring Aki.",
            "bullets": [
                "九月十日、木曜日です。 (It is Thursday, September 10th.)",
                "あきは午後三時にテレビを見ます。 (Aki watches television at 3:00 PM.)",
                "午後四時に音楽を聞きます。 (At 4:00 PM he listens to music.)",
                "名前を書きます。 (He writes names.)",
                "午後五時にゆきと話します。 (At 5:00 PM he talks with Yuki.)"
            ],
            "highlight": "Compare Aki's routine with Yuki's routine."
        },
        {
            "slideNumber": 22,
            "title": "Mini Reading B: 5 Questions",
            "blocks": [
                [
                    "Mini Reading B・質問"
                ],
                [
                    "NIKKI JP"
                ],
                [
                    "Nikki JP Class 454  ·  Reading"
                ],
                [
                    "1"
                ],
                [
                    "何月何日ですか？"
                ],
                [
                    "2"
                ],
                [
                    "何曜日ですか？"
                ],
                [
                    "3"
                ],
                [
                    "午後三時に何を見ますか？"
                ],
                [
                    "4"
                ],
                [
                    "午後四時に何を聞きますか？"
                ],
                [
                    "5"
                ],
                [
                    "午後五時に、ゆきと何をしますか？"
                ]
            ],
            "jpTitle": "Mini Reading B：5つの質問",
            "summary": "Five comprehension questions about Aki's day.",
            "bullets": [
                "1. 何月何日ですか？",
                "2. 何曜日ですか？",
                "3. 午後三時に何を見ますか？",
                "4. 午後四時に何を聞きますか？",
                "5. 午後五時に、ゆきと何をしますか？"
            ],
            "highlight": "Aki stays inside and interacts with media before meeting Yuki."
        },
        {
            "slideNumber": 23,
            "title": "Mini Readings: Answer Key Comparison",
            "blocks": [
                [
                    "Mini Reading・答え"
                ],
                [
                    "NIKKI JP"
                ],
                [
                    "Nikki JP Class 454  ·  Reading"
                ],
                [
                    "Reading A"
                ],
                [
                    "1  九月四日です。",
                    "2  金曜日です。",
                    "3  午前九時です。",
                    "4  青です。",
                    "5  家へ帰ります。"
                ],
                [
                    "Reading B"
                ],
                [
                    "1  九月十日です。",
                    "2  木曜日です。",
                    "3  テレビを見ます。",
                    "4  音楽を聞きます。",
                    "5  ゆきと話します。"
                ]
            ],
            "jpTitle": "両ストーリーの解答対比",
            "summary": "Side-by-side answers for Reading A and Reading B.",
            "bullets": [
                "Reading A: 1. 九月四日です。 2. 金曜日です。 3. 午前九時です。 4. 青です。 5. 家へ帰ります。",
                "Reading B: 1. 九月十日です。 2. 木曜日です。 3. テレビを見ます。 4. 音楽を聞きます。 5. ゆきと話します。"
            ],
            "highlight": "Both passages use the exact same N5 sentence structure."
        },
        {
            "slideNumber": 24,
            "title": "Speaking Chain: 10 Classroom Questions",
            "blocks": [
                [
                    "Speaking Chain・10 questions"
                ],
                [
                    "NIKKI JP"
                ],
                [
                    "Nikki JP Class 454  ·  Speaking"
                ],
                [
                    "Two rounds: every student answers twice"
                ],
                [
                    "1"
                ],
                [
                    "何色が好きですか？"
                ],
                [
                    "2"
                ],
                [
                    "何を見ますか？"
                ],
                [
                    "3"
                ],
                [
                    "何を聞きますか？"
                ],
                [
                    "4"
                ],
                [
                    "何を読みますか？"
                ],
                [
                    "5"
                ],
                [
                    "何を書きますか？"
                ],
                [
                    "6"
                ],
                [
                    "どこへ行きますか？"
                ],
                [
                    "7"
                ],
                [
                    "だれと話しますか？"
                ],
                [
                    "8"
                ],
                [
                    "9/8は何月何日ですか？"
                ],
                [
                    "9"
                ],
                [
                    "7:10は何時ですか？"
                ],
                [
                    "10"
                ],
                [
                    "誕生日は何月何日ですか？"
                ]
            ],
            "jpTitle": "10問スピーキングチェーン",
            "summary": "Ten rapid questions passed around the entire room.",
            "bullets": [
                "1. 何色が好きですか？",
                "2. 何を見ますか？",
                "3. 何を聞きますか？",
                "4. 何を読みますか？",
                "5. 何を書きますか？",
                "6. どこへ行きますか？",
                "7. だれと話しますか？",
                "8. 9/8は何月何日ですか？",
                "9. 7:10は何時ですか？",
                "10. 誕生日は何月何日ですか？"
            ],
            "highlight": "Two rounds: every student answers twice."
        },
        {
            "slideNumber": 25,
            "title": "Final Team Challenge: 10 Rapid Questions",
            "blocks": [
                [
                    "Final Team Challenge・10"
                ],
                [
                    "NIKKI JP"
                ],
                [
                    "Nikki JP Class 454  ·  Mixed review"
                ],
                [
                    "Answer without looking back"
                ],
                [
                    "1"
                ],
                [
                    "聞くの漢字ヒントは？"
                ],
                [
                    "2"
                ],
                [
                    "見るの漢字ヒントは？"
                ],
                [
                    "3"
                ],
                [
                    "話す・読むの漢字ヒントは？"
                ],
                [
                    "4"
                ],
                [
                    "本を＿＿ます。"
                ],
                [
                    "5"
                ],
                [
                    "音楽を＿＿ます。"
                ],
                [
                    "6"
                ],
                [
                    "9/4を日本語で読む"
                ],
                [
                    "7"
                ],
                [
                    "7:10を日本語で読む"
                ],
                [
                    "8"
                ],
                [
                    "blue book を日本語で言う"
                ],
                [
                    "9"
                ],
                [
                    "午後三時は AM / PM？"
                ],
                [
                    "10"
                ],
                [
                    "ゆき／公園へ／行きます"
                ]
            ],
            "jpTitle": "ファイナルチームチャレンジ（10問）",
            "summary": "Closed-book mixed review challenge for the class.",
            "bullets": [
                "1. 聞くの漢字ヒントは？",
                "2. 見るの漢字ヒントは？",
                "3. 話す・読むの漢字ヒントは？",
                "4. 本を＿＿ます。",
                "5. 音楽を＿＿ます。",
                "6. 9/4を日本語で読む",
                "7. 7:10を日本語で読む",
                "8. 'blue book' を日本語で言う",
                "9. 午後三時は AM / PM？",
                "10. ゆき／公園へ／行きます を文にする"
            ],
            "highlight": "Answer without looking back at your notes!"
        },
        {
            "slideNumber": 26,
            "title": "Final Team Challenge: Answers",
            "blocks": [
                [
                    "Final Team Challenge・答え"
                ],
                [
                    "NIKKI JP"
                ],
                [
                    "Nikki JP Class 454  ·  Mixed review"
                ],
                [
                    "1"
                ],
                [
                    "耳"
                ],
                [
                    "2"
                ],
                [
                    "目"
                ],
                [
                    "3"
                ],
                [
                    "言"
                ],
                [
                    "4"
                ],
                [
                    "本を読みます。"
                ],
                [
                    "5"
                ],
                [
                    "音楽を聞きます。"
                ],
                [
                    "6"
                ],
                [
                    "くがつ よっか"
                ],
                [
                    "7"
                ],
                [
                    "しちじ じゅっぷん"
                ],
                [
                    "8"
                ],
                [
                    "青い本"
                ],
                [
                    "9"
                ],
                [
                    "PM"
                ],
                [
                    "10"
                ],
                [
                    "ゆきは公園へ行きます。"
                ]
            ],
            "jpTitle": "ファイナルチームチャレンジの答え",
            "summary": "Official answers for the 10-point team test.",
            "bullets": [
                "1. 耳 (ear)",
                "2. 目 (eye)",
                "3. 言 (words)",
                "4. 本を読みます。",
                "5. 音楽を聞きます。",
                "6. くがつ よっか",
                "7. しちじ じゅっぷん",
                "8. 青い本",
                "9. PM",
                "10. ゆきは公園へ行きます。"
            ],
            "highlight": "Score 10 out of 10 for complete mastery of Class 454!"
        },
        {
            "slideNumber": 27,
            "title": "Exit Ticket: 5 Students Finale",
            "blocks": [
                [
                    "Exit Ticket・5 students"
                ],
                [
                    "NIKKI JP"
                ],
                [
                    "Nikki JP Class 454  ·  Finish"
                ],
                [
                    "One final turn for each student"
                ],
                [
                    "1"
                ],
                [
                    "Student 1　動作の文を一つ言う"
                ],
                [
                    "2"
                ],
                [
                    "Student 2　色の文を一つ言う"
                ],
                [
                    "3"
                ],
                [
                    "Student 3　日付を一つ読む"
                ],
                [
                    "4"
                ],
                [
                    "Student 4　時間を一つ読む"
                ],
                [
                    "5"
                ],
                [
                    "Student 5　クラスメートに質問する"
                ],
                [
                    "できました！"
                ]
            ],
            "jpTitle": "修了チケット（Exit Ticket）",
            "summary": "One final performance task for each student before dismissal.",
            "bullets": [
                "Student 1: 動作の文を一つ言う (Say one action sentence)",
                "Student 2: 色の文を一つ言う (Say one colour sentence)",
                "Student 3: 日付を一つ読む (Read one calendar date)",
                "Student 4: 時間を一つ読む (Read one clock time)",
                "Student 5: クラスメートに質問する (Ask a classmate a question)",
                "できました！ (Well done!)"
            ],
            "highlight": "You have completed Class 454 Fluency Training!"
        }
    ],
    "title": "Fluency Training, Speaking Chain & Double Mini Reading",
    "jpTitle": "第6回：読む・話す・もう一度・Mini Reading A & B・10問スピーキングチェーン",
    "vocabulary": [
        {
            "id": "v6-1",
            "kanji": "赤いりんご",
            "furigana": "あかい りんご",
            "romaji": "akai ringo",
            "english": "red apple",
            "type": "Phrase",
            "example": "赤いりんごを食べます。"
        },
        {
            "id": "v6-2",
            "kanji": "青いそら",
            "furigana": "あおい そら",
            "romaji": "aoi sora",
            "english": "blue sky",
            "type": "Phrase",
            "example": "青いそらがきれいです。"
        },
        {
            "id": "v6-3",
            "kanji": "白いねこ",
            "furigana": "しろい ねこ",
            "romaji": "shiroi neko",
            "english": "white cat",
            "type": "Phrase",
            "example": "白いねこがいます。"
        },
        {
            "id": "v6-4",
            "kanji": "黒い犬",
            "furigana": "くろい いぬ",
            "romaji": "kuroi inu",
            "english": "black dog",
            "type": "Phrase",
            "example": "黒い犬は大きいです。"
        },
        {
            "id": "v6-5",
            "kanji": "ピンクの花",
            "furigana": "ぴんくの はな",
            "romaji": "pinku no hana",
            "english": "pink flower",
            "type": "Phrase",
            "example": "きれいなピンクの花。"
        },
        {
            "id": "v6-6",
            "kanji": "オレンジのみかん",
            "furigana": "おれんじの みかん",
            "romaji": "orenji no mikan",
            "english": "orange mandarin",
            "type": "Phrase",
            "example": "甘いオレンジのみかん。"
        },
        {
            "id": "v6-7",
            "kanji": "グレーの車",
            "furigana": "ぐれーの くるま",
            "romaji": "guree no kuruma",
            "english": "grey car",
            "type": "Phrase",
            "example": "グレーの車があります。"
        },
        {
            "id": "v6-8",
            "kanji": "青い本",
            "furigana": "あおい ほん",
            "romaji": "aoi hon",
            "english": "blue book",
            "type": "Phrase",
            "example": "青い本を読みます。"
        },
        {
            "id": "v6-9",
            "kanji": "九月一日",
            "furigana": "くがつ ついたち",
            "romaji": "kugatsu tsuitachi",
            "english": "September 1st",
            "type": "Date",
            "example": "九月一日です。"
        },
        {
            "id": "v6-10",
            "kanji": "九月四日",
            "furigana": "くがつ よっか",
            "romaji": "kugatsu yokka",
            "english": "September 4th",
            "type": "Date",
            "example": "九月四日、金曜日です。"
        },
        {
            "id": "v6-11",
            "kanji": "九月六日",
            "furigana": "くがつ むいか",
            "romaji": "kugatsu muika",
            "english": "September 6th",
            "type": "Date",
            "example": "九月六日です。"
        },
        {
            "id": "v6-12",
            "kanji": "九月八日",
            "furigana": "くがつ ようか",
            "romaji": "kugatsu youka",
            "english": "September 8th",
            "type": "Date",
            "example": "九月八日です。"
        },
        {
            "id": "v6-13",
            "kanji": "九月十日",
            "furigana": "くがつ とおか",
            "romaji": "kugatsu tooka",
            "english": "September 10th",
            "type": "Date",
            "example": "九月十日、木曜日です。"
        },
        {
            "id": "v6-14",
            "kanji": "金曜日",
            "furigana": "きんようび",
            "romaji": "kinyoubi",
            "english": "Friday",
            "type": "Day",
            "example": "金曜日です。"
        },
        {
            "id": "v6-15",
            "kanji": "木曜日",
            "furigana": "もくようび",
            "romaji": "mokuyoubi",
            "english": "Thursday",
            "type": "Day",
            "example": "木曜日です。"
        },
        {
            "id": "v6-16",
            "kanji": "名前",
            "furigana": "なまえ",
            "romaji": "namae",
            "english": "name",
            "type": "Noun",
            "example": "名前を書きます。"
        },
        {
            "id": "v6-17",
            "kanji": "車",
            "furigana": "くるま",
            "romaji": "kuruma",
            "english": "car",
            "type": "Noun",
            "example": "グレーの車。"
        },
        {
            "id": "v6-18",
            "kanji": "花",
            "furigana": "はな",
            "romaji": "hana",
            "english": "flower",
            "type": "Noun",
            "example": "ピンクの花。"
        },
        {
            "id": "v6-19",
            "kanji": "そら",
            "furigana": "そら",
            "romaji": "sora",
            "english": "sky",
            "type": "Noun",
            "example": "青いそら。"
        },
        {
            "id": "v6-20",
            "kanji": "りんご",
            "furigana": "りんご",
            "romaji": "ringo",
            "english": "apple",
            "type": "Noun",
            "example": "赤いりんご。"
        }
    ],
    "kanji": [
        {
            "kanji": "花",
            "onyomi": "カ",
            "kunyomi": "はな",
            "meaning": "flower",
            "strokes": 7,
            "examples": [
                "花",
                "花火"
            ]
        },
        {
            "kanji": "車",
            "onyomi": "シャ",
            "kunyomi": "くるま",
            "meaning": "car, vehicle",
            "strokes": 7,
            "examples": [
                "車"
            ]
        },
        {
            "kanji": "名",
            "onyomi": "メイ・ミョウ",
            "kunyomi": "な",
            "meaning": "name",
            "strokes": 6,
            "examples": [
                "名前"
            ]
        },
        {
            "kanji": "空",
            "onyomi": "クウ",
            "kunyomi": "そら・あ(く)・から",
            "meaning": "sky, empty",
            "strokes": 8,
            "examples": [
                "空",
                "青空"
            ]
        },
        {
            "kanji": "読",
            "onyomi": "ドク",
            "kunyomi": "よ(む)",
            "meaning": "read",
            "strokes": 14,
            "examples": [
                "読む"
            ]
        },
        {
            "kanji": "聞",
            "onyomi": "ブン",
            "kunyomi": "き(く)",
            "meaning": "hear, listen",
            "strokes": 14,
            "examples": [
                "聞く"
            ]
        },
        {
            "kanji": "話",
            "onyomi": "ワ",
            "kunyomi": "はな(す)",
            "meaning": "speak, talk",
            "strokes": 13,
            "examples": [
                "話す"
            ]
        },
        {
            "kanji": "見",
            "onyomi": "ケン",
            "kunyomi": "み(る)",
            "meaning": "see, watch",
            "strokes": 7,
            "examples": [
                "見る"
            ]
        },
        {
            "kanji": "書",
            "onyomi": "ショ",
            "kunyomi": "か(く)",
            "meaning": "write",
            "strokes": 10,
            "examples": [
                "書く"
            ]
        },
        {
            "kanji": "行",
            "onyomi": "コウ",
            "kunyomi": "い(く)",
            "meaning": "go",
            "strokes": 6,
            "examples": [
                "行く"
            ]
        }
    ]
},
    {
    "id": "day-7",
    "dayNumber": 7,
    "classCode": "Class 464",
    "theme": "School Levels, Describing People, Particle Precision & Morning Reading",
    "japaneseTheme": "テーマ：学校と人・外見の描写・助詞のまとめ (Gakkō to hito, gaiken no byōsha, joshi no matome)",
    "subtitle": "Kanji building blocks for school levels, describing height and hair, character profile matching, and particle mastery",
    "description": "Master Japanese terminology for school levels (小学校, 中学校, 高校, 大学) and student ranks (小学生, 中学生, 高校生, 大学生), describe people by height and hair (背が高い, 髪が長い), apply particles with 100% precision (は, の, に, で, を), analyze 5 student dossiers, and comprehend Yui’s school morning reading.",
    "badge": "Class 464 · School & People",
    "goals": [
        "Learn people kanji: 男 (man), 女 (woman), 子 (child) and combinations (男の人, 女の人, 男の子, 女の子)",
        "Build school words by combining 学, 校, 小, 中, 高, 大 into 小学校, 中学校, 高校, 大学 and student titles",
        "Describe physical traits: Height (背が高い / 背が低い) and Hair (髪が長い / 髪が短い)",
        "Solve the 5 Character Profiles Matching Game (Ken, Mia, Taku, Yui, Rina)",
        "Master Japanese particles in context: は (topic), の (possessive), に (time/target), で (location), を (object)"
    ],
    "keyHighlights": [
        "Kanji Lego Blocks: Look how effortlessly kanji combine: 小 (small) + 学校 = 小学校 (elementary school); 中 (middle) + 学校 = 中学校 (junior high); 高 (high) + 校 = 高校 (high school); 大 (big) + 学 = 大学 (university)!",
        "Adding 生 (student): 小学生 (elementary student), 中学生 (middle school student), 高校生 (high school student), 大学生 (university student)!",
        "Describing People: Use [Trait が Adjective] + [Noun]: 背が高い男の人 (tall man), 髪が長い女の人 (woman with long hair).",
        "Particle Checklist: は (topic marker), の (connection/possessive), に (specific time/destination), で (location of activity), を (direct object)!"
    ],
    "kanjiList": [
        {
            "kanji": "男",
            "meaning": "male, man",
            "onyomi": "ダン・ナン (dan / nan)",
            "kunyomi": "おとこ (otoko)",
            "strokes": 7,
            "radical": "男",
            "radicalClue": "Core element: 男",
            "examples": [
                {
                    "word": "男の人",
                    "reading": "おとこのひと (otoko no hito)",
                    "meaning": "man",
                    "romaji": "otoko no hito"
                },
                {
                    "word": "男の子",
                    "reading": "おとこのこ (otoko no ko)",
                    "meaning": "boy",
                    "romaji": "otoko no ko"
                }
            ]
        },
        {
            "kanji": "女",
            "meaning": "female, woman",
            "onyomi": "ジョ・ニョ (jo / nyo)",
            "kunyomi": "おんな・め (onna / me)",
            "strokes": 3,
            "radical": "女",
            "radicalClue": "Core element: 女",
            "examples": [
                {
                    "word": "女の人",
                    "reading": "おんなのひと (onna no hito)",
                    "meaning": "woman",
                    "romaji": "onna no hito"
                },
                {
                    "word": "女の子",
                    "reading": "おんなのこ (onna no ko)",
                    "meaning": "girl",
                    "romaji": "onna no ko"
                }
            ]
        },
        {
            "kanji": "子",
            "meaning": "child",
            "onyomi": "シ・ス (shi / su)",
            "kunyomi": "こ (ko)",
            "strokes": 3,
            "radical": "子",
            "radicalClue": "Core element: 子",
            "examples": [
                {
                    "word": "子ども",
                    "reading": "こども (kodomo)",
                    "meaning": "child / children",
                    "romaji": "kodomo"
                },
                {
                    "word": "男の子",
                    "reading": "おとこのこ (otoko no ko)",
                    "meaning": "boy",
                    "romaji": "otoko no ko"
                },
                {
                    "word": "女の子",
                    "reading": "おんなのこ (onna no ko)",
                    "meaning": "girl",
                    "romaji": "onna no ko"
                }
            ]
        },
        {
            "kanji": "校",
            "meaning": "school, examine",
            "onyomi": "コウ (kou)",
            "kunyomi": "",
            "strokes": 10,
            "radical": "校",
            "radicalClue": "Core element: 校",
            "examples": [
                {
                    "word": "学校",
                    "reading": "がっこう (gakkou)",
                    "meaning": "school",
                    "romaji": "gakkou"
                },
                {
                    "word": "小学校",
                    "reading": "しょうがっこう (shougakkou)",
                    "meaning": "elementary school",
                    "romaji": "shougakkou"
                },
                {
                    "word": "中学校",
                    "reading": "ちゅうがっこう (chuugakkou)",
                    "meaning": "middle school",
                    "romaji": "chuugakkou"
                },
                {
                    "word": "高校",
                    "reading": "こうこう (koukou)",
                    "meaning": "high school",
                    "romaji": "koukou"
                }
            ]
        },
        {
            "kanji": "高",
            "meaning": "high, expensive, tall",
            "onyomi": "コウ (kou)",
            "kunyomi": "たか(い) (taka(i))",
            "strokes": 10,
            "radical": "高",
            "radicalClue": "Core element: 高",
            "examples": [
                {
                    "word": "高校",
                    "reading": "こうこう (koukou)",
                    "meaning": "high school",
                    "romaji": "koukou"
                },
                {
                    "word": "背が高い",
                    "reading": "せがたかい (se ga takai)",
                    "meaning": "tall (height)",
                    "romaji": "se ga takai"
                },
                {
                    "word": "高い",
                    "reading": "たかい (takai)",
                    "meaning": "tall / expensive",
                    "romaji": "takai"
                }
            ]
        },
        {
            "kanji": "低",
            "meaning": "low, short",
            "onyomi": "テイ (tei)",
            "kunyomi": "ひく(い) (hiku(i))",
            "strokes": 7,
            "radical": "低",
            "radicalClue": "Core element: 低",
            "examples": [
                {
                    "word": "背が低い",
                    "reading": "せがひくい (se ga hikui)",
                    "meaning": "short (height)",
                    "romaji": "se ga hikui"
                },
                {
                    "word": "低い",
                    "reading": "ひくい (hikui)",
                    "meaning": "low / short",
                    "romaji": "hikui"
                }
            ]
        },
        {
            "kanji": "長",
            "meaning": "long, leader",
            "onyomi": "チョウ (chou)",
            "kunyomi": "なが(い) (naga(i))",
            "strokes": 8,
            "radical": "長",
            "radicalClue": "Core element: 長",
            "examples": [
                {
                    "word": "髪が長い",
                    "reading": "かみがながい (kami ga nagai)",
                    "meaning": "has long hair",
                    "romaji": "kami ga nagai"
                },
                {
                    "word": "長い髪",
                    "reading": "ながいかみ (nagai kami)",
                    "meaning": "long hair",
                    "romaji": "nagai kami"
                }
            ]
        },
        {
            "kanji": "短",
            "meaning": "short",
            "onyomi": "タン (tan)",
            "kunyomi": "みじか(い) (mijika(i))",
            "strokes": 12,
            "radical": "短",
            "radicalClue": "Core element: 短",
            "examples": [
                {
                    "word": "髪が短い",
                    "reading": "かみがみじかい (kami ga mijikai)",
                    "meaning": "has short hair",
                    "romaji": "kami ga mijikai"
                },
                {
                    "word": "短い髪",
                    "reading": "みじかいかみ (mijikai kami)",
                    "meaning": "short hair",
                    "romaji": "mijikai kami"
                }
            ]
        },
        {
            "kanji": "小",
            "meaning": "small, little",
            "onyomi": "ショウ (shou)",
            "kunyomi": "ちい(さい)・こ・お (chii(sai) / ko / o)",
            "strokes": 3,
            "radical": "小",
            "radicalClue": "Core element: 小",
            "examples": [
                {
                    "word": "小学校",
                    "reading": "しょうがっこう (shougakkou)",
                    "meaning": "elementary school",
                    "romaji": "shougakkou"
                },
                {
                    "word": "小学生",
                    "reading": "しょうがくせい (shougakusei)",
                    "meaning": "elementary student",
                    "romaji": "shougakusei"
                },
                {
                    "word": "小さい",
                    "reading": "ちいさい (chiisai)",
                    "meaning": "small",
                    "romaji": "chiisai"
                }
            ]
        },
        {
            "kanji": "中",
            "meaning": "middle, inside",
            "onyomi": "チュウ (chuu)",
            "kunyomi": "なか (naka)",
            "strokes": 4,
            "radical": "中",
            "radicalClue": "Core element: 中",
            "examples": [
                {
                    "word": "中学校",
                    "reading": "ちゅうがっこう (chuugakkou)",
                    "meaning": "middle school",
                    "romaji": "chuugakkou"
                },
                {
                    "word": "中学生",
                    "reading": "ちゅうがくせい (chuugakusei)",
                    "meaning": "middle school student",
                    "romaji": "chuugakusei"
                }
            ]
        },
        {
            "kanji": "大",
            "meaning": "big, large",
            "onyomi": "ダイ・タイ (dai / tai)",
            "kunyomi": "おお(きい) (oo(kii))",
            "strokes": 3,
            "radical": "大",
            "radicalClue": "Core element: 大",
            "examples": [
                {
                    "word": "大学",
                    "reading": "だいがく (daigaku)",
                    "meaning": "university",
                    "romaji": "daigaku"
                },
                {
                    "word": "大学生",
                    "reading": "だいがくせい (daigakusei)",
                    "meaning": "university student",
                    "romaji": "daigakusei"
                },
                {
                    "word": "大きい",
                    "reading": "おおきい (ookii)",
                    "meaning": "big / large",
                    "romaji": "ookii"
                }
            ]
        },
        {
            "kanji": "髪",
            "meaning": "hair (on head)",
            "onyomi": "ハツ (hatsu)",
            "kunyomi": "かみ (kami)",
            "strokes": 14,
            "radical": "髪",
            "radicalClue": "Core element: 髪",
            "examples": [
                {
                    "word": "髪",
                    "reading": "かみ (kami)",
                    "meaning": "hair",
                    "romaji": "kami"
                },
                {
                    "word": "髪が長い",
                    "reading": "かみがながい (kami ga nagai)",
                    "meaning": "has long hair",
                    "romaji": "kami ga nagai"
                }
            ]
        },
        {
            "kanji": "背",
            "meaning": "back, stature",
            "onyomi": "ハイ (hai)",
            "kunyomi": "せ・せい・そむ(く) (se / sei / somu(ku))",
            "strokes": 9,
            "radical": "背",
            "radicalClue": "Core element: 背",
            "examples": [
                {
                    "word": "背が高い",
                    "reading": "せがたかい (se ga takai)",
                    "meaning": "tall (height)",
                    "romaji": "se ga takai"
                },
                {
                    "word": "背が低い",
                    "reading": "せがひくい (se ga hikui)",
                    "meaning": "short (height)",
                    "romaji": "se ga hikui"
                }
            ]
        },
        {
            "kanji": "毎",
            "meaning": "every",
            "onyomi": "マイ (mai)",
            "kunyomi": "ごと (goto)",
            "strokes": 6,
            "radical": "毎",
            "radicalClue": "Core element: 毎",
            "examples": [
                {
                    "word": "毎日",
                    "reading": "まいにち (mainichi)",
                    "meaning": "every day",
                    "romaji": "mainichi"
                }
            ]
        }
    ],
    "vocabularyList": [
        {
            "japanese": "男",
            "reading": "おとこ (otoko)",
            "english": "male, man",
            "category": "Noun",
            "notes": "男の人。",
            "romaji": "otoko"
        },
        {
            "japanese": "女",
            "reading": "おんな (onna)",
            "english": "female, woman",
            "category": "Noun",
            "notes": "女の人。",
            "romaji": "onna"
        },
        {
            "japanese": "男の人",
            "reading": "おとこのひと (otokonohito)",
            "english": "man",
            "category": "Noun",
            "notes": "この男の人は背が高いです。",
            "romaji": "otokonohito"
        },
        {
            "japanese": "女の人",
            "reading": "おんなのひと (onnanohito)",
            "english": "woman",
            "category": "Noun",
            "notes": "この女の人は髪が長いです。",
            "romaji": "onnanohito"
        },
        {
            "japanese": "男の子",
            "reading": "おとこのこ (otokonoko)",
            "english": "boy",
            "category": "Noun",
            "notes": "男の子が走ります。",
            "romaji": "otokonoko"
        },
        {
            "japanese": "女の子",
            "reading": "おんなのこ (onnanoko)",
            "english": "girl",
            "category": "Noun",
            "notes": "女の子のかばんは赤いです。",
            "romaji": "onnanoko"
        },
        {
            "japanese": "子ども",
            "reading": "こども (kodomo)",
            "english": "child, children",
            "category": "Noun",
            "notes": "子どもが公園にいます。",
            "romaji": "kodomo"
        },
        {
            "japanese": "学校",
            "reading": "がっこう (gakkou)",
            "english": "school",
            "category": "Noun",
            "notes": "午前八時に学校へ行きます。",
            "romaji": "gakkou"
        },
        {
            "japanese": "小学校",
            "reading": "しょうがっこう (shougakkou)",
            "english": "elementary school",
            "category": "Noun",
            "notes": "小学校に行きます。",
            "romaji": "shougakkou"
        },
        {
            "japanese": "中学校",
            "reading": "ちゅうがっこう (chuugakkou)",
            "english": "junior high school",
            "category": "Noun",
            "notes": "中学校の先生。",
            "romaji": "chuugakkou"
        },
        {
            "japanese": "高校",
            "reading": "こうこう (koukou)",
            "english": "high school",
            "category": "Noun",
            "notes": "高校の学生。",
            "romaji": "koukou"
        },
        {
            "japanese": "大学",
            "reading": "だいがく (daigaku)",
            "english": "university, college",
            "category": "Noun",
            "notes": "大学で勉強します。",
            "romaji": "daigaku"
        },
        {
            "japanese": "小学生",
            "reading": "しょうがくせい (shougakusei)",
            "english": "elementary school student",
            "category": "Noun",
            "notes": "ゆいは小学生です。",
            "romaji": "shougakusei"
        },
        {
            "japanese": "中学生",
            "reading": "ちゅうがくせい (chuugakusei)",
            "english": "middle school student",
            "category": "Noun",
            "notes": "たくは中学生です。",
            "romaji": "chuugakusei"
        },
        {
            "japanese": "高校生",
            "reading": "こうこうせい (koukousei)",
            "english": "high school student",
            "category": "Noun",
            "notes": "りなは高校生です。",
            "romaji": "koukousei"
        },
        {
            "japanese": "大学生",
            "reading": "だいがくせい (daigakusei)",
            "english": "university student",
            "category": "Noun",
            "notes": "けん、みあは大学生です。",
            "romaji": "daigakusei"
        },
        {
            "japanese": "二年生",
            "reading": "にねんせい (ninensei)",
            "english": "2nd year student",
            "category": "Noun",
            "notes": "ゆいは小学二年生です。",
            "romaji": "ninensei"
        },
        {
            "japanese": "背が高い",
            "reading": "せが たかい (sega takai)",
            "english": "tall (stature)",
            "category": "Adjective",
            "notes": "背が高い男の人。",
            "romaji": "sega takai"
        },
        {
            "japanese": "背が低い",
            "reading": "せが ひくい (sega hikui)",
            "english": "short (stature)",
            "category": "Adjective",
            "notes": "背が低い女の人。",
            "romaji": "sega hikui"
        },
        {
            "japanese": "髪が長い",
            "reading": "かみが ながい (kamiga nagai)",
            "english": "has long hair",
            "category": "Adjective",
            "notes": "髪が長い女の人。",
            "romaji": "kamiga nagai"
        },
        {
            "japanese": "髪が短い",
            "reading": "かみが みじかい (kamiga mijikai)",
            "english": "has short hair",
            "category": "Adjective",
            "notes": "髪が短い男の人。",
            "romaji": "kamiga mijikai"
        },
        {
            "japanese": "大きい",
            "reading": "おおきい (ookii)",
            "english": "big, large",
            "category": "Adjective",
            "notes": "大きい学校。",
            "romaji": "ookii"
        },
        {
            "japanese": "小さい",
            "reading": "ちいさい (chiisai)",
            "english": "small, little",
            "category": "Adjective",
            "notes": "小さい学校。",
            "romaji": "chiisai"
        },
        {
            "japanese": "毎日",
            "reading": "まいにち (mainichi)",
            "english": "every day",
            "category": "Noun",
            "notes": "毎日、午前九時に行きます。",
            "romaji": "mainichi"
        },
        {
            "japanese": "かばん",
            "reading": "かばん (kaban)",
            "english": "bag",
            "category": "Noun",
            "notes": "ゆいのかばんは赤いです。",
            "romaji": "kaban"
        }
    ],
    "grammarNotes": [
        {
            "title": "School Compounding System",
            "structure": "",
            "explanation": "Japanese education levels follow a clean tier structure: 小 (small), 中 (middle), 高 (high), and 大 (big). Adding 学校 (or shortened 校/学) names the school, and adding 生 (せい) names the student.",
            "examples": [
                {
                    "japanese": "小 + 学校 = 小学校",
                    "reading": "shou + gakkou = shougakkou",
                    "english": "elementary",
                    "romaji": "shou + gakkou = shougakkou"
                },
                {
                    "japanese": "中 + 学校 = 中学校",
                    "reading": "chuu + gakkou = chuugakkou",
                    "english": "middle school",
                    "romaji": "chuu + gakkou = chuugakkou"
                },
                {
                    "japanese": "高 + 校 = 高校",
                    "reading": "kou + kou = koukou",
                    "english": "high school",
                    "romaji": "kou + kou = koukou"
                },
                {
                    "japanese": "大 + 学 = 大学",
                    "reading": "dai + gaku = daigaku",
                    "english": "university",
                    "romaji": "dai + gaku = daigaku"
                }
            ]
        },
        {
            "title": "Physical Appearance: Feature + が + Adjective",
            "structure": "",
            "explanation": "To describe physical body traits, use the pattern [Body Part] が [Adjective]. When placed before a noun, the whole phrase acts as a modifier.",
            "examples": [
                {
                    "japanese": "背が高い",
                    "reading": "せがたかい (se ga takai)",
                    "english": "tall",
                    "romaji": "se ga takai"
                },
                {
                    "japanese": "背が高い男の人",
                    "reading": "せがたかいおとこのひと (se ga takai otoko no hito)",
                    "english": "the tall man",
                    "romaji": "se ga takai otoko no hito"
                },
                {
                    "japanese": "髪が長い",
                    "reading": "かみがながい (kami ga nagai)",
                    "english": "has long hair",
                    "romaji": "kami ga nagai"
                },
                {
                    "japanese": "髪が長い女の人",
                    "reading": "かみがながいおんなのひと (kami ga nagai onna no hito)",
                    "english": "the woman with long hair",
                    "romaji": "kami ga nagai onna no hito"
                }
            ]
        },
        {
            "title": "Mastery of 5 Core Particles in Action",
            "structure": "",
            "explanation": "は introduces the main topic, の marks possession/association, に indicates specific time or destination, で indicates the active location of an event, and を marks the direct object of the verb.",
            "examples": [
                {
                    "japanese": "みあは大学生です",
                    "reading": "みあはだいがくせいです (Mia wa daigakusei desu)",
                    "english": "は: topic",
                    "romaji": "Mia wa daigakusei desu"
                },
                {
                    "japanese": "ゆいのかばんは赤いです",
                    "reading": "ゆいのかばんはあかいです (Yui no kaban wa akai desu)",
                    "english": "の: possession",
                    "romaji": "Yui no kaban wa akai desu"
                },
                {
                    "japanese": "午前八時に学校へ行きます",
                    "reading": "ごぜんはちじにがっこうへいきます (gozen hachiji ni gakkou e ikimasu)",
                    "english": "に: time, へ: destination",
                    "romaji": "gozen hachiji ni gakkou e ikimasu"
                },
                {
                    "japanese": "学校で日本語を話します",
                    "reading": "がっこうでにほんごをはなします (gakkou de nihongo o hanashimasu)",
                    "english": "で: location",
                    "romaji": "gakkou de nihongo o hanashimasu"
                },
                {
                    "japanese": "本を読みます",
                    "reading": "ほんをよみます (hon o yomimasu)",
                    "english": "を: object",
                    "romaji": "hon o yomimasu"
                }
            ]
        }
    ],
    "readingPassages": [
        {
            "title": "学校の朝 (A School Morning with Yui)",
            "text": "今日は月曜日です。ゆいは小学二年生です。午前八時に学校へ行きます。ゆいのかばんは赤いです。学校で青い本を読みます。先生の名前を書きます。友達と日本語を話します。",
            "translation": "Today is Monday. Yui is in 2nd grade of elementary school. At 8:00 AM, she goes to school. Yui's bag is red. At school, she reads a blue book. She writes the teacher's name. She speaks Japanese with her friends.",
            "questions": [
                {
                    "q": "今日は何曜日ですか？ (Kyō wa nan-yōbi desu ka? / What day of the week is today?)",
                    "a": "月曜日（げつようび / getsuyōbi）です。(Monday)"
                },
                {
                    "q": "ゆいは何年生ですか？ (Yui wa nan-nensei desu ka? / What school grade is Yui?)",
                    "a": "小学二年生（しょうがく にねんせい / shōgaku ninensei）です。(2nd grade elementary)"
                },
                {
                    "q": "何時に学校へ行きますか？ (Nan-ji ni gakkō e ikimasu ka? / What time do they go to school?)",
                    "a": "午前八時（ごぜん はちじ / gozen hachiji）です。(8:00 AM)"
                },
                {
                    "q": "ゆいのかばんは何色ですか？ (Yui no kaban wa nani-iro desu ka? / What color is Yui's bag?)",
                    "a": "赤（あかいかばん / akai kaban）です。(Red bag)"
                },
                {
                    "q": "学校で何を読みますか？ (Gakkō de nani o yomimasu ka? / What do they read at school?)",
                    "a": "青い本を読みます。(Aoi hon o yomimasu. / Reads a blue book)"
                }
            ],
            "romaji": "Kyou wa getsuyoubi desu. Yui wa shougaku ninensei desu. Gozen hachiji ni gakkou e ikimasu. Yui no kaban wa akai desu. Gakkou de aoi hon o yomimasu. Sensei no namae o kakimasu. Tomodachi to nihongo o hanashimasu."
        },
        {
            "title": "会話：学校のインタビュー (School Interview)",
            "text": "質問者：大学生ですか？\n学生：はい、大学生です。\n質問者：何時に学校へ行きますか？\n学生：毎日、午前九時に行きます。\n質問者：学校で何をしますか？\n学生：本を読みます。日本語を話します。",
            "translation": "Interviewer: Are you a university student?\nStudent: Yes, I am a university student.\nInterviewer: What time do you go to school?\nStudent: I go at 9:00 AM every day.\nInterviewer: What do you do at school?\nStudent: I read books. I speak Japanese.",
            "romaji": "Shitsumonsha: Daigakusei desu ka?\nGakusei: Hai, daigakusei desu.\nShitsumonsha: Nanji ni gakkou e ikimasu ka?\nGakusei: Mainichi, gozen kuji ni ikimasu.\nShitsumonsha: Gakkou de nani o shimasu ka?\nGakusei: Hon o yomimasu. Nihongo o hanashimasu."
        }
    ],
    "practiceQuiz": [
        {
            "question": "How do you say \"elementary school student\" in Japanese?",
            "options": [
                "小学生 (しょうがくせい / shōgakusei)",
                "中学生 (ちゅうがくせい / chūgakusei)",
                "高校生 (こうこうせい / kōkōsei)",
                "大学生 (だいがくせい / daigakusei)"
            ],
            "correct": "小学生 (しょうがくせい / shōgakusei)",
            "explanation": "小学生 (しょうがくせい / shōgakusei) is an elementary school student."
        },
        {
            "question": "What is the Japanese expression for \"tall in height\"?",
            "options": [
                "足が長い (あしがながい / ashi ga nagai)",
                "背が高い (せがたかい / se ga takai)",
                "手が大きい (てがおおきい / te ga ookii)",
                "髪が短い (かみがみじかい / kami ga mijikai)"
            ],
            "correct": "背が高い (せがたかい / se ga takai)",
            "explanation": "背が高い (せがたかい / se ga takai) literally means \"back is high\" and is the idiomatic expression for a tall person."
        },
        {
            "question": "Which particle marks the direct object of a verb (e.g. 本 ___ 読みます / hon ___ yomimasu)?",
            "options": [
                "は (wa)",
                "の (no)",
                "を (o / wo)",
                "で (de)"
            ],
            "correct": "を (o / wo)",
            "explanation": "The particle を (pronounced \"o\") marks the direct object of a transitive action verb."
        },
        {
            "question": "What does \"高校\" (こうこう / kōkō) mean?",
            "options": [
                "Elementary school",
                "Middle school",
                "High school",
                "University"
            ],
            "correct": "High school",
            "explanation": "高校 (こうこう / kōkō) is short for 高等学校, meaning high school."
        }
    ],
    "slides": [
        {
            "slideNumber": 1,
            "title": "日本語 Class 464 · 学校と人",
            "blocks": [
                [
                    "日本語 Class 464"
                ],
                [
                    "Nikki JP Class 464   1"
                ],
                [
                    "学校と人"
                ],
                [
                    "がっこう と ひと"
                ],
                [
                    "School and people"
                ],
                [
                    "漢字・Reading・Speaking"
                ],
                [
                    "By: ニッキ"
                ]
            ],
            "jpTitle": "表紙：日本語 Class 464",
            "summary": "Core theme: School, education levels, describing people, and particle mastery.",
            "bullets": [
                "Class: Nikki JP Class 464",
                "Topic: 学校と人 (がっこう と ひと · School and people)",
                "Focus: Combining familiar kanji to build comprehensive school vocabulary."
            ],
            "highlight": "Learn to describe individuals and educational environments accurately in Japanese."
        },
        {
            "slideNumber": 2,
            "title": "Warm-up Review: 3 Core Questions",
            "blocks": [
                [
                    "復習・Warm-up"
                ],
                [
                    "Nikki JP Class 464   2"
                ],
                [
                    "① 今日は何曜日ですか？"
                ],
                [
                    "② 今、何時ですか？"
                ],
                [
                    "③ 何色が好きですか？"
                ],
                [
                    "④ 何を読みますか？"
                ],
                [
                    "⑤ 日本語を話しますか？"
                ]
            ],
            "jpTitle": "復習・ウォームアップ",
            "summary": "Three rapid oral questions reviewing weekdays, time, and colors.",
            "bullets": [
                "① 今日は何曜日ですか？ (What day of the week is today?)",
                "② 今、何時ですか？ (What time is it now?)",
                "③ 何色が好きですか？ (What colour do you like?)"
            ],
            "highlight": "Start class by speaking immediately."
        },
        {
            "slideNumber": 3,
            "title": "Kanji We Can Reuse from Past Classes",
            "blocks": [
                [
                    "前の漢字・Kanji we can reuse"
                ],
                [
                    "Nikki JP Class 464   3"
                ],
                [
                    "人　大　生　先"
                ],
                [
                    "本　日　月　行"
                ],
                [
                    "ひと　　おおきい　　がくせい　　せんせい"
                ],
                [
                    "Same kanji, new school words"
                ]
            ],
            "jpTitle": "前の漢字・再利用できる漢字",
            "summary": "Eight previously taught kanji that will form today's compound building blocks.",
            "bullets": [
                "人 (ひと) · Person",
                "大 (おおきい) · Big",
                "生 (せい) · Student / life",
                "先 (せん) · Before",
                "本 (ほん) · Book",
                "日 (にち) · Day",
                "月 (げつ) · Moon/month",
                "行 (いく) · Go"
            ],
            "highlight": "Building new vocabulary from existing kanji is the fastest way to achieve fluency."
        },
        {
            "slideNumber": 4,
            "title": "Today's Kanji: People (男・女)",
            "blocks": [
                [
                    "今日の漢字・People"
                ],
                [
                    "Nikki JP Class 464   4"
                ],
                [
                    "男"
                ],
                [
                    "おとこ"
                ],
                [
                    "male / man"
                ],
                [
                    "女"
                ],
                [
                    "おんな"
                ],
                [
                    "female / woman"
                ],
                [
                    "子"
                ],
                [
                    "こ"
                ],
                [
                    "child"
                ]
            ],
            "jpTitle": "今日の漢字：男・女",
            "summary": "The foundational kanji for male and female.",
            "bullets": [
                "男 (おとこ) · Male / man (rice field 田 + power 力)",
                "女 (おんな) · Female / woman (graceful seated figure)"
            ],
            "highlight": "男 combines 田 (rice field) and 力 (power/strength)."
        },
        {
            "slideNumber": 5,
            "title": "Adults: 男の人 and 女の人",
            "blocks": [
                [
                    "大人と子ども・Adults and children"
                ],
                [
                    "Nikki JP Class 464   5"
                ],
                [
                    "男の人"
                ],
                [
                    "おとこのひと"
                ],
                [
                    "man"
                ],
                [
                    "女の人"
                ],
                [
                    "おんなのひと"
                ],
                [
                    "woman"
                ]
            ],
            "jpTitle": "大人：男の人・女の人",
            "summary": "Using the modifier の to refer politely to adult men and women.",
            "bullets": [
                "男の人 (おとこのひと) · Man",
                "女の人 (おんなのひと) · Woman",
                "Literally: person of the male/female gender."
            ],
            "highlight": "Never call someone just '男' or '女'—always say '男の人' or '女の人' to be respectful."
        },
        {
            "slideNumber": 6,
            "title": "Children: 男の子 and 女の子",
            "blocks": [
                [
                    "子ども・Children"
                ],
                [
                    "Nikki JP Class 464   6"
                ],
                [
                    "男の子"
                ],
                [
                    "おとこのこ"
                ],
                [
                    "boy"
                ],
                [
                    "女の子"
                ],
                [
                    "おんなのこ"
                ],
                [
                    "girl"
                ],
                [
                    "子ども"
                ],
                [
                    "こども"
                ],
                [
                    "child / children"
                ]
            ],
            "jpTitle": "子ども：男の子・女の子",
            "summary": "Combining male/female with 子 (child) to refer to young boys and girls.",
            "bullets": [
                "男の子 (おとこのこ) · Boy",
                "女の子 (おんなのこ) · Girl",
                "子ども (こども) · Child / children"
            ],
            "highlight": "子 (こ) means child. 男の子 is a male child; 女の子 is a female child."
        },
        {
            "slideNumber": 7,
            "title": "School Building Blocks: 学 and 校",
            "blocks": [
                [
                    "学校・School"
                ],
                [
                    "Nikki JP Class 464   7"
                ],
                [
                    "学"
                ],
                [
                    "がく"
                ],
                [
                    "learning"
                ],
                [
                    "学生・がくせい"
                ],
                [
                    "校"
                ],
                [
                    "こう"
                ],
                [
                    "school"
                ],
                [
                    "学校・がっこう"
                ]
            ],
            "jpTitle": "学校：学と校の組み合わせ",
            "summary": "The root kanji for learning and school institutions.",
            "bullets": [
                "学 (がく) · Learning / study",
                "学生 (がくせい) · Student (learning + life)",
                "校 (こう) · School / institution",
                "学校 (がっこう) · School (study + institution)"
            ],
            "highlight": "Notice the small tsu gemination: 学 (がく) + 校 (こう) becomes がっこう!"
        },
        {
            "slideNumber": 8,
            "title": "Reusing Small, Middle, and Big: 小・中・大",
            "blocks": [
                [
                    "再利用・Small, middle, big"
                ],
                [
                    "Nikki JP Class 464   8"
                ],
                [
                    "小"
                ],
                [
                    "しょう / ちいさい"
                ],
                [
                    "small"
                ],
                [
                    "小学校"
                ],
                [
                    "中"
                ],
                [
                    "ちゅう / なか"
                ],
                [
                    "middle / inside"
                ],
                [
                    "中学校"
                ],
                [
                    "大"
                ],
                [
                    "だい / おおきい"
                ],
                [
                    "big"
                ],
                [
                    "大学"
                ]
            ],
            "jpTitle": "再利用：小・中・大",
            "summary": "Applying size modifiers to educational institutions.",
            "bullets": [
                "小 (しょう / ちいさい) · Small",
                "中 (ちゅう / なか) · Middle / inside",
                "大 (だい / おおきい) · Big / large"
            ],
            "highlight": "These three simple kanji form the Japanese school grading tiers."
        },
        {
            "slideNumber": 9,
            "title": "School Names ①: 小学校 and 中学校",
            "blocks": [
                [
                    "学校の名前 ①"
                ],
                [
                    "Nikki JP Class 464   9"
                ],
                [
                    "小学校"
                ],
                [
                    "しょうがっこう"
                ],
                [
                    "primary / elementary school"
                ],
                [
                    "小 ＋ 学校"
                ],
                [
                    "中学校"
                ],
                [
                    "ちゅうがっこう"
                ],
                [
                    "middle / junior high school"
                ],
                [
                    "中 ＋ 学校"
                ]
            ],
            "jpTitle": "学校の名前 ①：小学校・中学校",
            "summary": "Elementary and middle school terminology.",
            "bullets": [
                "小学校 (しょうがっこう) · Primary / Elementary school (小 + 学校)",
                "中学校 (ちゅうがっこう) · Middle / Junior high school (中 + 学校)"
            ],
            "highlight": "Both words inherit the geminated sound -がっこう."
        },
        {
            "slideNumber": 10,
            "title": "School Names ②: 高校 and 大学",
            "blocks": [
                [
                    "学校の名前 ②"
                ],
                [
                    "Nikki JP Class 464   10"
                ],
                [
                    "高校"
                ],
                [
                    "こうこう"
                ],
                [
                    "high school"
                ],
                [
                    "高 ＋ 校"
                ],
                [
                    "大学"
                ],
                [
                    "だいがく"
                ],
                [
                    "university"
                ],
                [
                    "大 ＋ 学"
                ]
            ],
            "jpTitle": "学校の名前 ②：高校・大学",
            "summary": "High school and university terminology.",
            "bullets": [
                "高校 (こうこう) · High school (abbreviation of 高等学校: 高 high + 校 school)",
                "大学 (だいがく) · University / College (大 big + 学 learning)"
            ],
            "highlight": "Notice 大学 ends in がく, while 高校 ends in こう."
        },
        {
            "slideNumber": 11,
            "title": "Reusing「生」for School Students: 小学生・中学生",
            "blocks": [
                [
                    "生を再利用・School students"
                ],
                [
                    "Nikki JP Class 464   11"
                ],
                [
                    "小学生"
                ],
                [
                    "しょうがくせい"
                ],
                [
                    "primary school student"
                ],
                [
                    "中学生"
                ],
                [
                    "ちゅうがくせい"
                ],
                [
                    "middle school student"
                ]
            ],
            "jpTitle": "「生」を再利用：小学生・中学生",
            "summary": "Forming student titles by appending「生」to the school tier.",
            "bullets": [
                "小学生 (しょうがくせい) · Primary school student (小 + 学生)",
                "中学生 (ちゅうがくせい) · Middle school student (中 + 学生)"
            ],
            "highlight": "Append 生 (せい) to indicate a student of that institution."
        },
        {
            "slideNumber": 12,
            "title": "Reusing「生」for Older Students: 高校生・大学生",
            "blocks": [
                [
                    "生を再利用・Older students"
                ],
                [
                    "Nikki JP Class 464   12"
                ],
                [
                    "高校生"
                ],
                [
                    "こうこうせい"
                ],
                [
                    "high school student"
                ],
                [
                    "大学生"
                ],
                [
                    "だいがくせい"
                ],
                [
                    "university student"
                ]
            ],
            "jpTitle": "「生」を再利用：高校生・大学生",
            "summary": "High school and university student terms.",
            "bullets": [
                "高校生 (こうこうせい) · High school student (高校 + 生)",
                "大学生 (だいがくせい) · University student (大学 + 生)"
            ],
            "highlight": "From age 6 to 22+, every student category is built with「生」!"
        },
        {
            "slideNumber": 13,
            "title": "Teacher and Student: 先生 and 学生",
            "blocks": [
                [
                    "先生と学生・Teacher and student"
                ],
                [
                    "Nikki JP Class 464   13"
                ],
                [
                    "先生"
                ],
                [
                    "せんせい"
                ],
                [
                    "teacher"
                ],
                [
                    "先 ＋ 生"
                ],
                [
                    "学生"
                ],
                [
                    "がくせい"
                ],
                [
                    "student"
                ],
                [
                    "学 ＋ 生"
                ]
            ],
            "jpTitle": "先生と学生",
            "summary": "Contrasting the teacher and the learner.",
            "bullets": [
                "先生 (せんせい) · Teacher (literally: one born before)",
                "学生 (がくせい) · Student (literally: one studying life)"
            ],
            "highlight": "先生 is used both as an occupation and as an honorific title when addressing instructors."
        },
        {
            "slideNumber": 14,
            "title": "School Year: 何年生ですか？",
            "blocks": [
                [
                    "何年生ですか？・School year"
                ],
                [
                    "Nikki JP Class 464   14"
                ],
                [
                    "一年生　いちねんせい"
                ],
                [
                    "二年生　にねんせい"
                ],
                [
                    "三年生　さんねんせい"
                ],
                [
                    "A：何年生ですか？　B：二年生です。"
                ]
            ],
            "jpTitle": "学年：何年生ですか？",
            "summary": "Expressing grade levels 1st, 2nd, and 3rd year.",
            "bullets": [
                "一年生 (いちねんせい) · 1st year student",
                "二年生 (にねんせい) · 2nd year student",
                "三年生 (さんねんせい) · 3rd year student",
                "Dialogue: A: 何年生ですか？ (What grade are you in?) → B: 二年生です。 (I am in 2nd grade.)"
            ],
            "highlight": "Combine number + 年生 (ねんせい) for any school grade."
        },
        {
            "slideNumber": 15,
            "title": "Height: 背が高い and 背が低い",
            "blocks": [
                [
                    "背の高さ・Tall and short"
                ],
                [
                    "Nikki JP Class 464   15"
                ],
                [
                    "背が高い"
                ],
                [
                    "せが たかい"
                ],
                [
                    "tall"
                ],
                [
                    "高い・たかい"
                ],
                [
                    "背が低い"
                ],
                [
                    "せが ひくい"
                ],
                [
                    "short in height"
                ],
                [
                    "低い・ひくい"
                ]
            ],
            "jpTitle": "背の高さ：高い・低い",
            "summary": "How to describe physical stature in Japanese.",
            "bullets": [
                "背が高い (せが たかい) · Tall (literally: back/stature is high)",
                "高い (たかい) · High / tall",
                "背が低い (せが ひくい) · Short in height (literally: back/stature is low)",
                "低い (ひくい) · Low / short"
            ],
            "highlight": "In Japanese, you do not say 'a person is high'; you say 'stature is high' (背が高い)."
        },
        {
            "slideNumber": 16,
            "title": "Size: 大きい and 小さい",
            "blocks": [
                [
                    "大きい・小さい"
                ],
                [
                    "Nikki JP Class 464   16"
                ],
                [
                    "大きい"
                ],
                [
                    "おおきい"
                ],
                [
                    "big / large"
                ],
                [
                    "大きい学校"
                ],
                [
                    "小さい"
                ],
                [
                    "ちいさい"
                ],
                [
                    "small / little"
                ],
                [
                    "小さい学校"
                ]
            ],
            "jpTitle": "大きさ：大きい・小さい",
            "summary": "Modifying facilities and objects by size.",
            "bullets": [
                "大きい (おおきい) · Big / large → 大きい学校 (big school)",
                "小さい (ちいさい) · Small / little → 小さい学校 (small school)"
            ],
            "highlight": "Pre-nominal adjectives directly modify the following noun."
        },
        {
            "slideNumber": 17,
            "title": "Hair: 髪が長い and 髪が短い",
            "blocks": [
                [
                    "髪・Hair"
                ],
                [
                    "Nikki JP Class 464   17"
                ],
                [
                    "髪が長い"
                ],
                [
                    "かみが ながい"
                ],
                [
                    "has long hair"
                ],
                [
                    "長い髪"
                ],
                [
                    "髪が短い"
                ],
                [
                    "かみが みじかい"
                ],
                [
                    "has short hair"
                ],
                [
                    "短い髪"
                ]
            ],
            "jpTitle": "髪：長い・短い",
            "summary": "Describing hair length.",
            "bullets": [
                "髪が長い (かみが ながい) · Has long hair → 長い髪 (long hair)",
                "髪が短い (かみが みじかい) · Has short hair → 短い髪 (short hair)"
            ],
            "highlight": "髪 (かみ) specifically means hair on the head."
        },
        {
            "slideNumber": 18,
            "title": "Describing People: Adjective + Noun Construction",
            "blocks": [
                [
                    "人の説明・Describing a person"
                ],
                [
                    "Nikki JP Class 464   18"
                ],
                [
                    "この男の人は背が高いです。"
                ],
                [
                    "背が高い男の人"
                ],
                [
                    "この女の人は髪が長いです。"
                ],
                [
                    "髪が長い女の人"
                ],
                [
                    "高い ＋ 人　　長い ＋ 髪"
                ]
            ],
            "jpTitle": "人の説明：形容詞＋名詞の形",
            "summary": "Comparing predicative sentences and noun-modifying clauses.",
            "bullets": [
                "Predicative: この男の人は背が高いです。 (This man is tall.)",
                "Noun-modifying: 背が高い男の人 (The tall man)",
                "Predicative: この女の人は髪が長いです。 (This woman has long hair.)",
                "Noun-modifying: 髪が長い女の人 (The woman with long hair)"
            ],
            "highlight": "In Japanese, relative clauses and adjectives precede the noun without needing 'who is' or 'that is'."
        },
        {
            "slideNumber": 19,
            "title": "Which Person?: どの人ですか？",
            "blocks": [
                [
                    "どの人ですか？・Which person?"
                ],
                [
                    "Nikki JP Class 464   19"
                ],
                [
                    "背が高い男の人はどの人ですか？"
                ],
                [
                    "Which person is the tall man?"
                ],
                [
                    "Bの人です。"
                ],
                [
                    "Bの人は背が高いです。"
                ]
            ],
            "jpTitle": "どの人ですか？の質問と回答",
            "summary": "Identifying an individual out of a group.",
            "bullets": [
                "Question: 背が高い男の人はどの人ですか？ (Which person is the tall man?)",
                "Answer: Bの人です。 (It is person B.)",
                "Explanation: Bの人は背が高いです。 (Person B is tall.)"
            ],
            "highlight": "どの人 (dono hito) means 'which person?' among three or more choices."
        },
        {
            "slideNumber": 20,
            "title": "Five Student Profiles: Dossiers A to E",
            "blocks": [
                [
                    "５人のプロフィール・Five profiles"
                ],
                [
                    "Nikki JP Class 464   20"
                ],
                [
                    "A　けん"
                ],
                [
                    "男の人　大学生"
                ],
                [
                    "背が高い。髪が短い。"
                ],
                [
                    "B　みあ"
                ],
                [
                    "女の人　大学生"
                ],
                [
                    "背が低い。髪が長い。"
                ],
                [
                    "C　たく"
                ],
                [
                    "男の子　中学生"
                ],
                [
                    "背が高い。髪が短い。"
                ],
                [
                    "D　ゆい"
                ],
                [
                    "女の子　小学生"
                ],
                [
                    "背が低い。髪が長い。"
                ],
                [
                    "E　りな"
                ],
                [
                    "女の子　高校生"
                ],
                [
                    "背が高い。髪が短い。"
                ]
            ],
            "jpTitle": "5人のプロフィール：A〜E",
            "summary": "Detailed characteristics for five students in the Nikki JP cohort.",
            "bullets": [
                "A けん: 男の人, 大学生, 背が高い, 髪が短い (Ken: tall male university student with short hair)",
                "B みあ: 女の人, 大学生, 背が低い, 髪が長い (Mia: short female university student with long hair)",
                "C たく: 男の子, 中学生, 背が高い, 髪が短い (Taku: tall middle-school boy with short hair)",
                "D ゆい: 女の子, 小学生, 背が低い, 髪が長い (Yui: short elementary-school girl with long hair)",
                "E りな: 女の子, 高校生, 背が高い, 髪が短い (Rina: tall high-school girl with short hair)"
            ],
            "highlight": "Every student profile is a unique combination of age tier, gender, height, and hairstyle."
        },
        {
            "slideNumber": 21,
            "title": "Who Matches?: 5 Deduction Questions",
            "blocks": [
                [
                    "プロフィールから・Who matches?"
                ],
                [
                    "Nikki JP Class 464   21"
                ],
                [
                    "① 背が高い男の人はだれですか？"
                ],
                [
                    "② 髪が長い女の人はだれですか？"
                ],
                [
                    "③ 中学生の男の子はだれですか？"
                ],
                [
                    "④ 小学生の女の子はだれですか？"
                ],
                [
                    "⑤ 髪が短い高校生はだれですか？"
                ]
            ],
            "jpTitle": "プロフィールクイズ：だれですか？",
            "summary": "Five logic questions matching descriptions to profiles A through E.",
            "bullets": [
                "① 背が高い男の人はだれですか？ → けん (Ken)",
                "② 髪が長い女の人はだれですか？ → みあ (Mia)",
                "③ 中学生の男の子はだれですか？ → たく (Taku)",
                "④ 小学生の女の子はだれですか？ → ゆい (Yui)",
                "⑤ 髪が短い高校生はだれですか？ → りな (Rina)"
            ],
            "highlight": "Cross-reference each attribute carefully to identify the matching individual."
        },
        {
            "slideNumber": 22,
            "title": "Picture Questions ①: People and Height",
            "blocks": [
                [
                    "写真で質問 ①・People and height"
                ],
                [
                    "Nikki JP Class 464   22"
                ],
                [
                    "A"
                ],
                [
                    "画像 A"
                ],
                [
                    "B"
                ],
                [
                    "画像 B"
                ],
                [
                    "C"
                ],
                [
                    "画像 C"
                ],
                [
                    "D"
                ],
                [
                    "画像 D"
                ],
                [
                    "E"
                ],
                [
                    "画像 E"
                ],
                [
                    "1  男の人はどの人ですか？"
                ],
                [
                    "2  女の人はどの人ですか？"
                ],
                [
                    "3  男の子はどの人ですか？"
                ],
                [
                    "4  女の子はどの人ですか？"
                ],
                [
                    "5  背が高い男の人はどの人ですか？"
                ]
            ],
            "jpTitle": "写真で質問 ①：人と背の高さ",
            "summary": "Visual identification questions.",
            "bullets": [
                "1. 男の人はどの人ですか？",
                "2. 女の人はどの人ですか？",
                "3. 男の子はどの人ですか？",
                "4. 女の子はどの人ですか？",
                "5. 背が高い男の人はどの人ですか？"
            ],
            "highlight": "Connect spoken descriptions directly to visual traits."
        },
        {
            "slideNumber": 23,
            "title": "Picture Questions ②: Hair and Color",
            "blocks": [
                [
                    "写真で質問 ②・Hair and colour"
                ],
                [
                    "Nikki JP Class 464   23"
                ],
                [
                    "A"
                ],
                [
                    "画像 A"
                ],
                [
                    "B"
                ],
                [
                    "画像 B"
                ],
                [
                    "C"
                ],
                [
                    "画像 C"
                ],
                [
                    "D"
                ],
                [
                    "画像 D"
                ],
                [
                    "E"
                ],
                [
                    "画像 E"
                ],
                [
                    "1  髪が長い人はどの人ですか？"
                ],
                [
                    "2  髪が短い男の子はどの人ですか？"
                ],
                [
                    "3  背が低い女の人はどの人ですか？"
                ],
                [
                    "4  赤いかばんの人はどの人ですか？"
                ],
                [
                    "5  青い本の人はどの人ですか？"
                ]
            ],
            "jpTitle": "写真で質問 ②：髪と持ち物の色",
            "summary": "Visual identification by accessory colours and hair length.",
            "bullets": [
                "1. 髪が長い人はどの人ですか？",
                "2. 髪が短い男の子はどの人ですか？",
                "3. 背が低い女の人はどの人ですか？",
                "4. 赤いかばんの人はどの人ですか？",
                "5. 青い本の人はどの人ですか？"
            ],
            "highlight": "Compound multiple clues: gender + accessory colour + hairstyle."
        },
        {
            "slideNumber": 24,
            "title": "Actions at School",
            "blocks": [
                [
                    "学校で何をしますか？・Actions"
                ],
                [
                    "Nikki JP Class 464   24"
                ],
                [
                    "読む"
                ],
                [
                    "よむ"
                ],
                [
                    "read"
                ],
                [
                    "本を読みます。"
                ],
                [
                    "書く"
                ],
                [
                    "かく"
                ],
                [
                    "write"
                ],
                [
                    "名前を書きます。"
                ],
                [
                    "話す"
                ],
                [
                    "はなす"
                ],
                [
                    "speak"
                ],
                [
                    "日本語を話します。"
                ]
            ],
            "jpTitle": "学校で何をしますか？",
            "summary": "Three primary actions performed by students in Japanese schools.",
            "bullets": [
                "読む (よむ) · Read → 本を読みます。 (I read books.)",
                "書く (かく) · Write → 名前を書きます。 (I write names.)",
                "話す (はなす) · Speak → 日本語を話します。 (I speak Japanese.)"
            ],
            "highlight": "These three actions are universal across all education levels."
        },
        {
            "slideNumber": 25,
            "title": "School Sentences: Particles in Real Context",
            "blocks": [
                [
                    "学校の文・Particles in context"
                ],
                [
                    "Nikki JP Class 464   25"
                ],
                [
                    "は　みあは大学生です。"
                ],
                [
                    "の　ゆいのかばんは赤いです。"
                ],
                [
                    "に　午前八時に学校へ行きます。"
                ],
                [
                    "で　学校で日本語を話します。"
                ],
                [
                    "を　本を読みます。"
                ]
            ],
            "jpTitle": "学校の文：文脈で覚える5つの助詞",
            "summary": "Mastering は, の, に, で, and を through school examples.",
            "bullets": [
                "は (Topic): みあは大学生です。 (Mia is a college student.)",
                "の (Possession): ゆいのかばんは赤いです。 (Yui's bag is red.)",
                "に (Time/Destination): 午前八時に学校へ行きます。 (At 8:00 AM I go to school.)",
                "で (Location of action): 学校で日本語を話します。 (At school I speak Japanese.)",
                "を (Object): 本を読みます。 (I read a book.)"
            ],
            "highlight": "Each particle has a distinct grammatical role: は (topic), の ('s), に (at time), で (location of doing), を (object)."
        },
        {
            "slideNumber": 26,
            "title": "Longer Sentences: Particle Flow",
            "blocks": [
                [
                    "長い文・Longer sentences"
                ],
                [
                    "Nikki JP Class 464   26"
                ],
                [
                    "① 月曜日　午前八時　小学校　行きます"
                ],
                [
                    "② 中学生　学校　青い本　読みます"
                ],
                [
                    "③ 女の子　かばん　赤い"
                ],
                [
                    "④ 先生　学校　名前　書きます"
                ],
                [
                    "⑤ 大学生　午後三時　日本語　話します"
                ]
            ],
            "jpTitle": "長い文の組み立て練習",
            "summary": "Assembling complete complex thoughts from vocabulary tiles.",
            "bullets": [
                "① 月曜日、午前八時に小学校へ行きます。 (On Monday, at 8:00 AM I go to elementary school.)",
                "② 中学生は学校で青い本を読みます。 (Middle school students read blue books at school.)",
                "③ 女の子のかばんは赤いです。 (The girl's bag is red.)",
                "④ 先生は学校で名前を書きます。 (The teacher writes names at school.)",
                "⑤ 大学生は午後三時に日本語を話します。 (University students speak Japanese at 3:00 PM.)"
            ],
            "highlight": "Particles glue the sentence together into natural, rhythmic Japanese."
        },
        {
            "slideNumber": 27,
            "title": "Reading Passage: A School Morning (ゆい)",
            "blocks": [
                [
                    "読んでみよう・A school morning"
                ],
                [
                    "Nikki JP Class 464   27"
                ],
                [
                    "今日は月曜日です。"
                ],
                [
                    "ゆいは小学二年生です。"
                ],
                [
                    "午前八時に学校へ行きます。"
                ],
                [
                    "ゆいのかばんは赤いです。"
                ],
                [
                    "学校で青い本を読みます。"
                ]
            ],
            "jpTitle": "読んでみよう：学校の朝（ゆい）",
            "summary": "A 5-sentence reading story about Yui's Monday morning at school.",
            "bullets": [
                "今日は月曜日です。 (Today is Monday.)",
                "ゆいは小学二年生です。 (Yui is a 2nd grade elementary student.)",
                "午前八時に学校へ行きます。 (At 8:00 AM she goes to school.)",
                "ゆいのかばんは赤いです。 (Yui's bag is red.)",
                "学校で青い本を読みます。 (At school she reads a blue book.)"
            ],
            "highlight": "All 7 classes converge in this comprehensive morning story."
        },
        {
            "slideNumber": 28,
            "title": "Reading Comprehension: 5 Questions",
            "blocks": [
                [
                    "読んだあと・Five questions"
                ],
                [
                    "Nikki JP Class 464   28"
                ],
                [
                    "① 今日は何曜日ですか？"
                ],
                [
                    "② ゆいは何年生ですか？"
                ],
                [
                    "③ 何時に学校へ行きますか？"
                ],
                [
                    "④ かばんは何色ですか？"
                ],
                [
                    "⑤ 学校で何を読みますか？"
                ]
            ],
            "jpTitle": "読んだあとの5つの質問",
            "summary": "Checking factual comprehension of Yui's school day.",
            "bullets": [
                "① 今日は何曜日ですか？ → 月曜日です。",
                "② ゆいは何年生ですか？ → 小学二年生です。",
                "③ 何時に学校へ行きますか？ → 午前八時です。",
                "④ かばんは何色ですか？ → 赤です。",
                "⑤ 学校で何を読みますか？ → 青い本です。"
            ],
            "highlight": "Answer each item accurately based on the passage text."
        },
        {
            "slideNumber": 29,
            "title": "School Interview Dialogue",
            "blocks": [
                [
                    "会話・School interview"
                ],
                [
                    "Nikki JP Class 464   29"
                ],
                [
                    "A：大学生ですか？"
                ],
                [
                    "B：はい、大学生です。"
                ],
                [
                    "A：何時に学校へ行きますか？"
                ],
                [
                    "B：毎日、午前九時に行きます。"
                ],
                [
                    "A：学校で何をしますか？"
                ],
                [
                    "B：本を読みます。日本語を話します。"
                ]
            ],
            "jpTitle": "会話：学校インタビュー",
            "summary": "Realistic natural dialogue between two students.",
            "bullets": [
                "A：大学生ですか？ (Are you a college student?)",
                "B：はい、大学生です。 (Yes, I am a college student.)",
                "A：何時に学校へ行きますか？ (What time do you go to school?)",
                "B：毎日、午前九時に行きます。 (I go every day at 9:00 AM.)",
                "A：学校で何をしますか？ (What do you do at school?)",
                "B：本を読みます。日本語を話します。 (I read books and speak Japanese.)"
            ],
            "highlight": "Notice '毎日' (まいにち · every day) added to describe routine frequency."
        },
        {
            "slideNumber": 30,
            "title": "5-Student Classroom Speaking Exchange",
            "blocks": [
                [
                    "５人で話そう・Your own answers"
                ],
                [
                    "Nikki JP Class 464   30"
                ],
                [
                    "① 学生ですか？　先生ですか？"
                ],
                [
                    "② 何時に学校へ行きますか？"
                ],
                [
                    "③ 学校で何をしますか？"
                ],
                [
                    "④ あなたのかばんは何色ですか？"
                ],
                [
                    "⑤ 何を読むのが好きですか？"
                ]
            ],
            "jpTitle": "5人で話そう：自分の答え",
            "summary": "Personal interview questions for each student.",
            "bullets": [
                "① 学生ですか？ 先生ですか？ (Are you a student or a teacher?)",
                "② 何時に学校へ行きますか？ (What time do you go to school?)",
                "③ 学校で何をしますか？ (What do you do at school?)",
                "④ あなたのかばんは何色ですか？ (What colour is your bag?)",
                "⑤ 何を読むのが好きですか？ (What do you like reading?)"
            ],
            "highlight": "Personalize the Japanese patterns with your own true life circumstances."
        },
        {
            "slideNumber": 31,
            "title": "Kanji Combination Mix: Final Compound Matrix",
            "blocks": [
                [
                    "漢字を組み合わせよう・Kanji mix"
                ],
                [
                    "Nikki JP Class 464   31"
                ],
                [
                    "① 学 ＋ 校　　　② 大 ＋ 学"
                ],
                [
                    "③ 学 ＋ 生　　　④ 先 ＋ 生"
                ],
                [
                    "⑤ 高 ＋ 校"
                ],
                [
                    "もう５つ・Five more"
                ],
                [
                    "小＋学校　中＋学校　大学＋生　男＋の子　女＋の子"
                ]
            ],
            "jpTitle": "漢字を組み合わせよう：総復習",
            "summary": "Comprehensive overview of all compound kanji taught across the course.",
            "bullets": [
                "① 学 ＋ 校 → 学校 (がっこう · school)",
                "② 大 ＋ 学 → 大学 (だいがく · university)",
                "③ 学 ＋ 生 → 学生 (がくせい · student)",
                "④ 先 ＋ 生 → 先生 (せんせい · teacher)",
                "⑤ 高 ＋ 校 → 高校 (こうこう · high school)",
                "Five more: 小学校 (elementary school), 中学校 (middle school), 大学生 (college student), 男の子 (boy), 女の子 (girl)"
            ],
            "highlight": "Look at how much Japanese you can express using just 10 foundational kanji!"
        },
        {
            "slideNumber": 32,
            "title": "Homework & Next Steps",
            "blocks": [
                [
                    "宿題・Homework"
                ],
                [
                    "Nikki JP Class 464   32"
                ],
                [
                    "① 学校や学生のことを一文。"
                ],
                [
                    "② 人の説明を一文。"
                ],
                [
                    "③ 色を使って一文。"
                ],
                [
                    "④ 曜日や時間を使って一文。"
                ],
                [
                    "⑤ 学校ですることを一文。"
                ],
                [
                    "Five sentences. Read them aloud next class."
                ]
            ],
            "jpTitle": "宿題・自主練習",
            "summary": "Final assignment consolidating all seven classes of Nikki's course.",
            "bullets": [
                "① 学校や学生のことを一文。 (One sentence about school or students.)",
                "② 人の説明を一文。 (One sentence describing a person's appearance.)",
                "③ 色を使って一文。 (One sentence using a colour.)",
                "④ 曜日や時間を使って一文。 (One sentence using weekdays and time.)",
                "⑤ 学校ですることを一文。 (One sentence about what you do at school.)",
                "Five sentences in total. Read them aloud in the next class!"
            ],
            "highlight": "Congratulations on completing all 7 days of Nikki's Japanese course!"
        }
    ],
    "title": "School, People, Descriptive Modifiers & Particles Mastery",
    "jpTitle": "第7回：学校と人・男と女・小学校〜大学・背の高さ・髪・助詞・読解",
    "vocabulary": [
        {
            "id": "v7-1",
            "kanji": "男",
            "furigana": "おとこ",
            "romaji": "otoko",
            "english": "male, man",
            "type": "Noun",
            "example": "男の人。"
        },
        {
            "id": "v7-2",
            "kanji": "女",
            "furigana": "おんな",
            "romaji": "onna",
            "english": "female, woman",
            "type": "Noun",
            "example": "女の人。"
        },
        {
            "id": "v7-3",
            "kanji": "男の人",
            "furigana": "おとこのひと",
            "romaji": "otoko no hito",
            "english": "man",
            "type": "Noun",
            "example": "この男の人は背が高いです。"
        },
        {
            "id": "v7-4",
            "kanji": "女の人",
            "furigana": "おんなのひと",
            "romaji": "onna no hito",
            "english": "woman",
            "type": "Noun",
            "example": "この女の人は髪が長いです。"
        },
        {
            "id": "v7-5",
            "kanji": "男の子",
            "furigana": "おとこのこ",
            "romaji": "otoko no ko",
            "english": "boy",
            "type": "Noun",
            "example": "男の子が走ります。"
        },
        {
            "id": "v7-6",
            "kanji": "女の子",
            "furigana": "おんなのこ",
            "romaji": "onna no ko",
            "english": "girl",
            "type": "Noun",
            "example": "女の子のかばんは赤いです。"
        },
        {
            "id": "v7-7",
            "kanji": "子ども",
            "furigana": "こども",
            "romaji": "kodomo",
            "english": "child, children",
            "type": "Noun",
            "example": "子どもが公園にいます。"
        },
        {
            "id": "v7-8",
            "kanji": "学校",
            "furigana": "がっこう",
            "romaji": "gakkou",
            "english": "school",
            "type": "Noun",
            "example": "午前八時に学校へ行きます。"
        },
        {
            "id": "v7-9",
            "kanji": "小学校",
            "furigana": "しょうがっこう",
            "romaji": "shougakkou",
            "english": "elementary school",
            "type": "Noun",
            "example": "小学校に行きます。"
        },
        {
            "id": "v7-10",
            "kanji": "中学校",
            "furigana": "ちゅうがっこう",
            "romaji": "chuugakkou",
            "english": "junior high school",
            "type": "Noun",
            "example": "中学校の先生。"
        },
        {
            "id": "v7-11",
            "kanji": "高校",
            "furigana": "こうこう",
            "romaji": "koukou",
            "english": "high school",
            "type": "Noun",
            "example": "高校の学生。"
        },
        {
            "id": "v7-12",
            "kanji": "大学",
            "furigana": "だいがく",
            "romaji": "daigaku",
            "english": "university, college",
            "type": "Noun",
            "example": "大学で勉強します。"
        },
        {
            "id": "v7-13",
            "kanji": "小学生",
            "furigana": "しょうがくせい",
            "romaji": "shougakusei",
            "english": "elementary school student",
            "type": "Noun",
            "example": "ゆいは小学生です。"
        },
        {
            "id": "v7-14",
            "kanji": "中学生",
            "furigana": "ちゅうがくせい",
            "romaji": "chuugakusei",
            "english": "middle school student",
            "type": "Noun",
            "example": "たくは中学生です。"
        },
        {
            "id": "v7-15",
            "kanji": "高校生",
            "furigana": "こうこうせい",
            "romaji": "koukousei",
            "english": "high school student",
            "type": "Noun",
            "example": "りなは高校生です。"
        },
        {
            "id": "v7-16",
            "kanji": "大学生",
            "furigana": "だいがくせい",
            "romaji": "daigakusei",
            "english": "university student",
            "type": "Noun",
            "example": "けん、みあは大学生です。"
        },
        {
            "id": "v7-17",
            "kanji": "二年生",
            "furigana": "にねんせい",
            "romaji": "ninensei",
            "english": "2nd year student",
            "type": "Noun",
            "example": "ゆいは小学二年生です。"
        },
        {
            "id": "v7-18",
            "kanji": "背が高い",
            "furigana": "せが たかい",
            "romaji": "se ga takai",
            "english": "tall (stature)",
            "type": "Adjective",
            "example": "背が高い男の人。"
        },
        {
            "id": "v7-19",
            "kanji": "背が低い",
            "furigana": "せが ひくい",
            "romaji": "se ga hikui",
            "english": "short (stature)",
            "type": "Adjective",
            "example": "背が低い女の人。"
        },
        {
            "id": "v7-20",
            "kanji": "髪が長い",
            "furigana": "かみが ながい",
            "romaji": "kami ga nagai",
            "english": "has long hair",
            "type": "Adjective",
            "example": "髪が長い女の人。"
        },
        {
            "id": "v7-21",
            "kanji": "髪が短い",
            "furigana": "かみが みじかい",
            "romaji": "kami ga mijikai",
            "english": "has short hair",
            "type": "Adjective",
            "example": "髪が短い男の人。"
        },
        {
            "id": "v7-22",
            "kanji": "大きい",
            "furigana": "おおきい",
            "romaji": "ookii",
            "english": "big, large",
            "type": "Adjective",
            "example": "大きい学校。"
        },
        {
            "id": "v7-23",
            "kanji": "小さい",
            "furigana": "ちいさい",
            "romaji": "chiisai",
            "english": "small, little",
            "type": "Adjective",
            "example": "小さい学校。"
        },
        {
            "id": "v7-24",
            "kanji": "毎日",
            "furigana": "まいにち",
            "romaji": "mainichi",
            "english": "every day",
            "type": "Noun",
            "example": "毎日、午前九時に行きます。"
        },
        {
            "id": "v7-25",
            "kanji": "かばん",
            "furigana": "かばん",
            "romaji": "kaban",
            "english": "bag",
            "type": "Noun",
            "example": "ゆいのかばんは赤いです。"
        }
    ],
    "kanji": [
        {
            "kanji": "男",
            "onyomi": "ダン・ナン",
            "kunyomi": "おとこ",
            "meaning": "male, man",
            "strokes": 7,
            "examples": [
                "男の人",
                "男の子"
            ]
        },
        {
            "kanji": "女",
            "onyomi": "ジョ・ニョ",
            "kunyomi": "おんな・め",
            "meaning": "female, woman",
            "strokes": 3,
            "examples": [
                "女の人",
                "女の子"
            ]
        },
        {
            "kanji": "子",
            "onyomi": "シ・ス",
            "kunyomi": "こ",
            "meaning": "child",
            "strokes": 3,
            "examples": [
                "子ども",
                "男の子",
                "女の子"
            ]
        },
        {
            "kanji": "校",
            "onyomi": "コウ",
            "kunyomi": "",
            "meaning": "school, examine",
            "strokes": 10,
            "examples": [
                "学校",
                "小学校",
                "中学校",
                "高校"
            ]
        },
        {
            "kanji": "高",
            "onyomi": "コウ",
            "kunyomi": "たか(い)",
            "meaning": "high, expensive, tall",
            "strokes": 10,
            "examples": [
                "高校",
                "背が高い",
                "高い"
            ]
        },
        {
            "kanji": "低",
            "onyomi": "テイ",
            "kunyomi": "ひく(い)",
            "meaning": "low, short",
            "strokes": 7,
            "examples": [
                "背が低い",
                "低い"
            ]
        },
        {
            "kanji": "長",
            "onyomi": "チョウ",
            "kunyomi": "なが(い)",
            "meaning": "long, leader",
            "strokes": 8,
            "examples": [
                "髪が長い",
                "長い髪"
            ]
        },
        {
            "kanji": "短",
            "onyomi": "タン",
            "kunyomi": "みじか(い)",
            "meaning": "short",
            "strokes": 12,
            "examples": [
                "髪が短い",
                "短い髪"
            ]
        },
        {
            "kanji": "小",
            "onyomi": "ショウ",
            "kunyomi": "ちい(さい)・こ・お",
            "meaning": "small, little",
            "strokes": 3,
            "examples": [
                "小学校",
                "小学生",
                "小さい"
            ]
        },
        {
            "kanji": "中",
            "onyomi": "チュウ",
            "kunyomi": "なか",
            "meaning": "middle, inside",
            "strokes": 4,
            "examples": [
                "中学校",
                "中学生"
            ]
        },
        {
            "kanji": "大",
            "onyomi": "ダイ・タイ",
            "kunyomi": "おお(きい)",
            "meaning": "big, large",
            "strokes": 3,
            "examples": [
                "大学",
                "大学生",
                "大きい"
            ]
        },
        {
            "kanji": "髪",
            "onyomi": "ハツ",
            "kunyomi": "かみ",
            "meaning": "hair (on head)",
            "strokes": 14,
            "examples": [
                "髪",
                "髪が長い"
            ]
        },
        {
            "kanji": "背",
            "onyomi": "ハイ",
            "kunyomi": "せ・せい・そむ(く)",
            "meaning": "back, stature",
            "strokes": 9,
            "examples": [
                "背が高い",
                "背が低い"
            ]
        },
        {
            "kanji": "毎",
            "onyomi": "マイ",
            "kunyomi": "ごと",
            "meaning": "every",
            "strokes": 6,
            "examples": [
                "毎日"
            ]
        }
    ]
}
  ],
  "homework": [
    {
      "category": "Kanji",
      "description": "Kanji meanings, readings, weekdays, and action verbs.",
      "questions": [
        {
          "id": "kanji-1",
          "num": 1,
          "question": "What does 犬 mean?",
          "options": [
            {
              "label": "A",
              "text": "dog"
            },
            {
              "label": "B",
              "text": "cat"
            },
            {
              "label": "C",
              "text": "bird"
            }
          ],
          "correct": "A",
          "explanation": "犬 = dog",
          "example": "dog"
        },
        {
          "id": "kanji-2",
          "num": 2,
          "question": "How do you read 人?",
          "options": [
            {
              "label": "A",
              "text": "ひと"
            },
            {
              "label": "B",
              "text": "いぬ"
            },
            {
              "label": "C",
              "text": "ほん"
            }
          ],
          "correct": "A",
          "explanation": "人 = ひと (person)",
          "example": "ひと"
        },
        {
          "id": "kanji-3",
          "num": 3,
          "question": "Which kanji means “big”?",
          "options": [
            {
              "label": "A",
              "text": "人"
            },
            {
              "label": "B",
              "text": "大"
            },
            {
              "label": "C",
              "text": "太"
            }
          ],
          "correct": "B",
          "explanation": "大 = big",
          "example": "大"
        },
        {
          "id": "kanji-4",
          "num": 4,
          "question": "Which kanji means “sun / day”?",
          "options": [
            {
              "label": "A",
              "text": "日"
            },
            {
              "label": "B",
              "text": "月"
            },
            {
              "label": "C",
              "text": "火"
            }
          ],
          "correct": "A",
          "explanation": "日 = sun/day",
          "example": "日"
        },
        {
          "id": "kanji-5",
          "num": 5,
          "question": "Which kanji means “water”?",
          "options": [
            {
              "label": "A",
              "text": "木"
            },
            {
              "label": "B",
              "text": "金"
            },
            {
              "label": "C",
              "text": "水"
            }
          ],
          "correct": "C",
          "explanation": "水 = water",
          "example": "水"
        },
        {
          "id": "kanji-6",
          "num": 6,
          "question": "Which word means Monday?",
          "options": [
            {
              "label": "A",
              "text": "火曜日"
            },
            {
              "label": "B",
              "text": "月曜日"
            },
            {
              "label": "C",
              "text": "日曜日"
            }
          ],
          "correct": "B",
          "explanation": "月曜日 = Monday",
          "example": "月曜日"
        },
        {
          "id": "kanji-7",
          "num": 7,
          "question": "How do you read 見る?",
          "options": [
            {
              "label": "A",
              "text": "みる"
            },
            {
              "label": "B",
              "text": "きく"
            },
            {
              "label": "C",
              "text": "かく"
            }
          ],
          "correct": "A",
          "explanation": "見る = to see/watch",
          "example": "みる"
        },
        {
          "id": "kanji-8",
          "num": 8,
          "question": "Which word means “to listen / hear”?",
          "options": [
            {
              "label": "A",
              "text": "話す"
            },
            {
              "label": "B",
              "text": "読む"
            },
            {
              "label": "C",
              "text": "聞く"
            }
          ],
          "correct": "C",
          "explanation": "聞く = to listen/hear",
          "example": "聞く"
        },
        {
          "id": "kanji-9",
          "num": 9,
          "question": "What does 学生 mean?",
          "options": [
            {
              "label": "A",
              "text": "teacher"
            },
            {
              "label": "B",
              "text": "student"
            },
            {
              "label": "C",
              "text": "school"
            }
          ],
          "correct": "B",
          "explanation": "学生 = student",
          "example": "student"
        },
        {
          "id": "kanji-10",
          "num": 10,
          "question": "Which word means “to go”?",
          "options": [
            {
              "label": "A",
              "text": "行く"
            },
            {
              "label": "B",
              "text": "書く"
            },
            {
              "label": "C",
              "text": "話す"
            }
          ],
          "correct": "A",
          "explanation": "行く = to go",
          "example": "行く"
        }
      ],
      "passages": {}
    },
    {
      "category": "Kana & Vocabulary",
      "description": "Katakana loanwords, colors, animals, and everyday words.",
      "questions": [
        {
          "id": "kana-and-vocabulary-1",
          "num": 1,
          "question": "Which is “coffee” in katakana?",
          "options": [
            {
              "label": "A",
              "text": "コーヒー"
            },
            {
              "label": "B",
              "text": "ホテル"
            },
            {
              "label": "C",
              "text": "テレビ"
            }
          ],
          "correct": "A",
          "explanation": "coffee = コーヒー",
          "example": "コーヒー"
        },
        {
          "id": "kana-and-vocabulary-2",
          "num": 2,
          "question": "Which is “television” in katakana?",
          "options": [
            {
              "label": "A",
              "text": "タクシー"
            },
            {
              "label": "B",
              "text": "テレビ"
            },
            {
              "label": "C",
              "text": "コンピューター"
            }
          ],
          "correct": "B",
          "explanation": "television = テレビ",
          "example": "テレビ"
        },
        {
          "id": "kana-and-vocabulary-3",
          "num": 3,
          "question": "Which is “hotel” in katakana?",
          "options": [
            {
              "label": "A",
              "text": "ホテル"
            },
            {
              "label": "B",
              "text": "コーヒー"
            },
            {
              "label": "C",
              "text": "ピンク"
            }
          ],
          "correct": "A",
          "explanation": "hotel = ホテル",
          "example": "ホテル"
        },
        {
          "id": "kana-and-vocabulary-4",
          "num": 4,
          "question": "Which is “taxi” in katakana?",
          "options": [
            {
              "label": "A",
              "text": "テレビ"
            },
            {
              "label": "B",
              "text": "タクシー"
            },
            {
              "label": "C",
              "text": "ホテル"
            }
          ],
          "correct": "B",
          "explanation": "taxi = タクシー",
          "example": "タクシー"
        },
        {
          "id": "kana-and-vocabulary-5",
          "num": 5,
          "question": "Which word means “blue”?",
          "options": [
            {
              "label": "A",
              "text": "赤"
            },
            {
              "label": "B",
              "text": "白"
            },
            {
              "label": "C",
              "text": "青"
            }
          ],
          "correct": "C",
          "explanation": "青 = blue",
          "example": "青"
        },
        {
          "id": "kana-and-vocabulary-6",
          "num": 6,
          "question": "Which word means “black”?",
          "options": [
            {
              "label": "A",
              "text": "黒"
            },
            {
              "label": "B",
              "text": "白"
            },
            {
              "label": "C",
              "text": "赤"
            }
          ],
          "correct": "A",
          "explanation": "黒 = black",
          "example": "黒"
        },
        {
          "id": "kana-and-vocabulary-7",
          "num": 7,
          "question": "Which word means “white”?",
          "options": [
            {
              "label": "A",
              "text": "青"
            },
            {
              "label": "B",
              "text": "白"
            },
            {
              "label": "C",
              "text": "黒"
            }
          ],
          "correct": "B",
          "explanation": "白 = white",
          "example": "白"
        },
        {
          "id": "kana-and-vocabulary-8",
          "num": 8,
          "question": "Which word means “cat”?",
          "options": [
            {
              "label": "A",
              "text": "いぬ"
            },
            {
              "label": "B",
              "text": "ねこ"
            },
            {
              "label": "C",
              "text": "うし"
            }
          ],
          "correct": "B",
          "explanation": "ねこ = cat",
          "example": "ねこ"
        },
        {
          "id": "kana-and-vocabulary-9",
          "num": 9,
          "question": "Which word means “cow”?",
          "options": [
            {
              "label": "A",
              "text": "うし"
            },
            {
              "label": "B",
              "text": "とり"
            },
            {
              "label": "C",
              "text": "ねこ"
            }
          ],
          "correct": "A",
          "explanation": "うし = cow",
          "example": "うし"
        },
        {
          "id": "kana-and-vocabulary-10",
          "num": 10,
          "question": "Which word means “music”?",
          "options": [
            {
              "label": "A",
              "text": "なまえ"
            },
            {
              "label": "B",
              "text": "おんがく"
            },
            {
              "label": "C",
              "text": "かばん"
            }
          ],
          "correct": "B",
          "explanation": "おんがく = music",
          "example": "おんがく"
        }
      ],
      "passages": {}
    },
    {
      "category": "Numbers & Counters",
      "description": "Numbers and counters for small and large animals.",
      "questions": [
        {
          "id": "numbers-and-counters-1",
          "num": 1,
          "question": "What number is 二十八?",
          "options": [
            {
              "label": "A",
              "text": "18"
            },
            {
              "label": "B",
              "text": "28"
            },
            {
              "label": "C",
              "text": "82"
            }
          ],
          "correct": "B",
          "explanation": "二十八 = 28",
          "example": "28"
        },
        {
          "id": "numbers-and-counters-2",
          "num": 2,
          "question": "What number is 五十四?",
          "options": [
            {
              "label": "A",
              "text": "45"
            },
            {
              "label": "B",
              "text": "504"
            },
            {
              "label": "C",
              "text": "54"
            }
          ],
          "correct": "C",
          "explanation": "五十四 = 54",
          "example": "54"
        },
        {
          "id": "numbers-and-counters-3",
          "num": 3,
          "question": "How do you read 六百?",
          "options": [
            {
              "label": "A",
              "text": "ろくひゃく"
            },
            {
              "label": "B",
              "text": "ろっぴゃく"
            },
            {
              "label": "C",
              "text": "ろくびゃく"
            }
          ],
          "correct": "B",
          "explanation": "六百 = ろっぴゃく",
          "example": "ろっぴゃく"
        },
        {
          "id": "numbers-and-counters-4",
          "num": 4,
          "question": "How do you read 八百?",
          "options": [
            {
              "label": "A",
              "text": "はっぴゃく"
            },
            {
              "label": "B",
              "text": "はちひゃく"
            },
            {
              "label": "C",
              "text": "はちびゃく"
            }
          ],
          "correct": "A",
          "explanation": "八百 = はっぴゃく",
          "example": "はっぴゃく"
        },
        {
          "id": "numbers-and-counters-5",
          "num": 5,
          "question": "What number is 二千?",
          "options": [
            {
              "label": "A",
              "text": "200"
            },
            {
              "label": "B",
              "text": "2,000"
            },
            {
              "label": "C",
              "text": "20,000"
            }
          ],
          "correct": "B",
          "explanation": "二千 = 2,000",
          "example": "2,000"
        },
        {
          "id": "numbers-and-counters-6",
          "num": 6,
          "question": "What number is 九万三千十一?",
          "options": [
            {
              "label": "A",
              "text": "9,311"
            },
            {
              "label": "B",
              "text": "93,011"
            },
            {
              "label": "C",
              "text": "930,011"
            }
          ],
          "correct": "B",
          "explanation": "九万三千十一 = 93,011",
          "example": "93,011"
        },
        {
          "id": "numbers-and-counters-7",
          "num": 7,
          "question": "Which sentence means “There is one dog”?",
          "options": [
            {
              "label": "A",
              "text": "犬が一匹います。"
            },
            {
              "label": "B",
              "text": "犬が一頭います。"
            },
            {
              "label": "C",
              "text": "犬が三匹います。"
            }
          ],
          "correct": "A",
          "explanation": "Small animals use 匹",
          "example": "犬が一匹います。"
        },
        {
          "id": "numbers-and-counters-8",
          "num": 8,
          "question": "How do you read 一匹?",
          "options": [
            {
              "label": "A",
              "text": "いちひき"
            },
            {
              "label": "B",
              "text": "いっぴき"
            },
            {
              "label": "C",
              "text": "いちぴき"
            }
          ],
          "correct": "B",
          "explanation": "一匹 = いっぴき",
          "example": "いっぴき"
        },
        {
          "id": "numbers-and-counters-9",
          "num": 9,
          "question": "Which means “three cats”?",
          "options": [
            {
              "label": "A",
              "text": "ねこが三匹います。"
            },
            {
              "label": "B",
              "text": "ねこが三頭います。"
            },
            {
              "label": "C",
              "text": "ねこが三本います。"
            }
          ],
          "correct": "A",
          "explanation": "Cats use 匹",
          "example": "ねこが三匹います。"
        },
        {
          "id": "numbers-and-counters-10",
          "num": 10,
          "question": "Which sentence correctly counts one cow?",
          "options": [
            {
              "label": "A",
              "text": "牛が一匹います。"
            },
            {
              "label": "B",
              "text": "牛が一本います。"
            },
            {
              "label": "C",
              "text": "牛が一頭います。"
            }
          ],
          "correct": "C",
          "explanation": "Large animals use 頭",
          "example": "牛が一頭います。"
        }
      ],
      "passages": {}
    },
    {
      "category": "Dates & Time",
      "description": "Days of the week, special date readings, and clock time.",
      "questions": [
        {
          "id": "dates-and-time-1",
          "num": 1,
          "question": "How do you read 1日 (the first day of the month)?",
          "options": [
            {
              "label": "A",
              "text": "いちにち"
            },
            {
              "label": "B",
              "text": "ついたち"
            },
            {
              "label": "C",
              "text": "いっぴ"
            }
          ],
          "correct": "B",
          "explanation": "1日 = ついたち",
          "example": "ついたち"
        },
        {
          "id": "dates-and-time-2",
          "num": 2,
          "question": "How do you read 4日?",
          "options": [
            {
              "label": "A",
              "text": "よっか"
            },
            {
              "label": "B",
              "text": "よんにち"
            },
            {
              "label": "C",
              "text": "しにち"
            }
          ],
          "correct": "A",
          "explanation": "4日 = よっか",
          "example": "よっか"
        },
        {
          "id": "dates-and-time-3",
          "num": 3,
          "question": "How do you read 8日?",
          "options": [
            {
              "label": "A",
              "text": "はちにち"
            },
            {
              "label": "B",
              "text": "ようか"
            },
            {
              "label": "C",
              "text": "やっか"
            }
          ],
          "correct": "B",
          "explanation": "8日 = ようか",
          "example": "ようか"
        },
        {
          "id": "dates-and-time-4",
          "num": 4,
          "question": "How do you read 10日?",
          "options": [
            {
              "label": "A",
              "text": "じゅうにち"
            },
            {
              "label": "B",
              "text": "とおか"
            },
            {
              "label": "C",
              "text": "じゅっか"
            }
          ],
          "correct": "B",
          "explanation": "10日 = とおか",
          "example": "とおか"
        },
        {
          "id": "dates-and-time-5",
          "num": 5,
          "question": "Which word means Sunday?",
          "options": [
            {
              "label": "A",
              "text": "土曜日"
            },
            {
              "label": "B",
              "text": "月曜日"
            },
            {
              "label": "C",
              "text": "日曜日"
            }
          ],
          "correct": "C",
          "explanation": "日曜日 = Sunday",
          "example": "日曜日"
        },
        {
          "id": "dates-and-time-6",
          "num": 6,
          "question": "How do you read 7時?",
          "options": [
            {
              "label": "A",
              "text": "ななじ"
            },
            {
              "label": "B",
              "text": "しちじ"
            },
            {
              "label": "C",
              "text": "ななとき"
            }
          ],
          "correct": "B",
          "explanation": "7時 = しちじ",
          "example": "しちじ"
        },
        {
          "id": "dates-and-time-7",
          "num": 7,
          "question": "How do you read 9時?",
          "options": [
            {
              "label": "A",
              "text": "きゅうじ"
            },
            {
              "label": "B",
              "text": "くじ"
            },
            {
              "label": "C",
              "text": "ここのじ"
            }
          ],
          "correct": "B",
          "explanation": "9時 = くじ",
          "example": "くじ"
        },
        {
          "id": "dates-and-time-8",
          "num": 8,
          "question": "Which is 4:10?",
          "options": [
            {
              "label": "A",
              "text": "四時十分"
            },
            {
              "label": "B",
              "text": "十時四分"
            },
            {
              "label": "C",
              "text": "四日十時"
            }
          ],
          "correct": "A",
          "explanation": "4:10 = 四時十分",
          "example": "四時十分"
        },
        {
          "id": "dates-and-time-9",
          "num": 9,
          "question": "Which word means a.m.?",
          "options": [
            {
              "label": "A",
              "text": "午後"
            },
            {
              "label": "B",
              "text": "午前"
            },
            {
              "label": "C",
              "text": "時間"
            }
          ],
          "correct": "B",
          "explanation": "午前 = a.m.",
          "example": "午前"
        },
        {
          "id": "dates-and-time-10",
          "num": 10,
          "question": "Which is September 8?",
          "options": [
            {
              "label": "A",
              "text": "八月九日"
            },
            {
              "label": "B",
              "text": "九月八日"
            },
            {
              "label": "C",
              "text": "九日八月"
            }
          ],
          "correct": "B",
          "explanation": "September 8 = 九月八日",
          "example": "九月八日"
        }
      ],
      "passages": {}
    },
    {
      "category": "Particles",
      "description": "Choose the correct particle: の・が・を・に・で.",
      "questions": [
        {
          "id": "particles-1",
          "num": 1,
          "question": "これは ゆき ___ 本です。",
          "options": [
            {
              "label": "A",
              "text": "が"
            },
            {
              "label": "B",
              "text": "の"
            },
            {
              "label": "C",
              "text": "を"
            }
          ],
          "correct": "B",
          "explanation": "ゆきの本 = Yuki's book",
          "example": "の"
        },
        {
          "id": "particles-2",
          "num": 2,
          "question": "あきは 日本語 ___ 先生です。",
          "options": [
            {
              "label": "A",
              "text": "の"
            },
            {
              "label": "B",
              "text": "に"
            },
            {
              "label": "C",
              "text": "で"
            }
          ],
          "correct": "A",
          "explanation": "日本語の先生 = Japanese teacher",
          "example": "の"
        },
        {
          "id": "particles-3",
          "num": 3,
          "question": "わたしは 犬 ___ 好きです。",
          "options": [
            {
              "label": "A",
              "text": "を"
            },
            {
              "label": "B",
              "text": "が"
            },
            {
              "label": "C",
              "text": "に"
            }
          ],
          "correct": "B",
          "explanation": "好き takes が",
          "example": "が"
        },
        {
          "id": "particles-4",
          "num": 4,
          "question": "公園に 犬 ___ います。",
          "options": [
            {
              "label": "A",
              "text": "で"
            },
            {
              "label": "B",
              "text": "を"
            },
            {
              "label": "C",
              "text": "が"
            }
          ],
          "correct": "C",
          "explanation": "The existing subject takes が",
          "example": "が"
        },
        {
          "id": "particles-5",
          "num": 5,
          "question": "本 ___ 読みます。",
          "options": [
            {
              "label": "A",
              "text": "を"
            },
            {
              "label": "B",
              "text": "に"
            },
            {
              "label": "C",
              "text": "の"
            }
          ],
          "correct": "A",
          "explanation": "The object takes を",
          "example": "を"
        },
        {
          "id": "particles-6",
          "num": 6,
          "question": "音楽 ___ 聞きます。",
          "options": [
            {
              "label": "A",
              "text": "で"
            },
            {
              "label": "B",
              "text": "を"
            },
            {
              "label": "C",
              "text": "が"
            }
          ],
          "correct": "B",
          "explanation": "The object takes を",
          "example": "を"
        },
        {
          "id": "particles-7",
          "num": 7,
          "question": "午前九時 ___ 公園へ行きます。",
          "options": [
            {
              "label": "A",
              "text": "に"
            },
            {
              "label": "B",
              "text": "で"
            },
            {
              "label": "C",
              "text": "の"
            }
          ],
          "correct": "A",
          "explanation": "A specific time takes に",
          "example": "に"
        },
        {
          "id": "particles-8",
          "num": 8,
          "question": "九月四日 ___ 学校へ行きます。",
          "options": [
            {
              "label": "A",
              "text": "を"
            },
            {
              "label": "B",
              "text": "が"
            },
            {
              "label": "C",
              "text": "に"
            }
          ],
          "correct": "C",
          "explanation": "A specific date takes に",
          "example": "に"
        },
        {
          "id": "particles-9",
          "num": 9,
          "question": "家 ___ テレビを見ます。",
          "options": [
            {
              "label": "A",
              "text": "に"
            },
            {
              "label": "B",
              "text": "で"
            },
            {
              "label": "C",
              "text": "を"
            }
          ],
          "correct": "B",
          "explanation": "The place of an action takes で",
          "example": "で"
        },
        {
          "id": "particles-10",
          "num": 10,
          "question": "公園 ___ あきと話します。",
          "options": [
            {
              "label": "A",
              "text": "の"
            },
            {
              "label": "B",
              "text": "が"
            },
            {
              "label": "C",
              "text": "で"
            }
          ],
          "correct": "C",
          "explanation": "The place of an action takes で",
          "example": "で"
        }
      ],
      "passages": {}
    },
    {
      "category": "Grammar & Sentences",
      "description": "Choose the most natural and correctly ordered sentence.",
      "questions": [
        {
          "id": "grammar-and-sentences-1",
          "num": 1,
          "question": "I read a book at home.",
          "options": [
            {
              "label": "A",
              "text": "家で本を読みます。"
            },
            {
              "label": "B",
              "text": "家に本が読みます。"
            },
            {
              "label": "C",
              "text": "家を本で読みます。"
            }
          ],
          "correct": "A",
          "explanation": "Place で + object を + verb",
          "example": "家で本を読みます。"
        },
        {
          "id": "grammar-and-sentences-2",
          "num": 2,
          "question": "Yuki watches TV at 3 p.m.",
          "options": [
            {
              "label": "A",
              "text": "ゆきは午後三時でテレビが見ます。"
            },
            {
              "label": "B",
              "text": "ゆきは午後三時にテレビを見ます。"
            },
            {
              "label": "C",
              "text": "ゆきの午後三時をテレビに見ます。"
            }
          ],
          "correct": "B",
          "explanation": "Time に + object を + 見ます",
          "example": "ゆきは午後三時にテレビを見ます。"
        },
        {
          "id": "grammar-and-sentences-3",
          "num": 3,
          "question": "Aki listens to music in the park.",
          "options": [
            {
              "label": "A",
              "text": "あきは公園で音楽を聞きます。"
            },
            {
              "label": "B",
              "text": "あきは公園に音楽が聞きます。"
            },
            {
              "label": "C",
              "text": "あきの公園を音楽で聞きます。"
            }
          ],
          "correct": "A",
          "explanation": "Place で + object を + 聞きます",
          "example": "あきは公園で音楽を聞きます。"
        },
        {
          "id": "grammar-and-sentences-4",
          "num": 4,
          "question": "I write my name in Japanese.",
          "options": [
            {
              "label": "A",
              "text": "日本語に名前が書きます。"
            },
            {
              "label": "B",
              "text": "日本語で名前を書きます。"
            },
            {
              "label": "C",
              "text": "日本語を名前に書きます。"
            }
          ],
          "correct": "B",
          "explanation": "Language/method で + object を",
          "example": "日本語で名前を書きます。"
        },
        {
          "id": "grammar-and-sentences-5",
          "num": 5,
          "question": "There is one cat in the park.",
          "options": [
            {
              "label": "A",
              "text": "公園でねこを一匹います。"
            },
            {
              "label": "B",
              "text": "公園にねこが一匹います。"
            },
            {
              "label": "C",
              "text": "公園のねこで一匹います。"
            }
          ],
          "correct": "B",
          "explanation": "Location に + subject が + います",
          "example": "公園にねこが一匹います。"
        },
        {
          "id": "grammar-and-sentences-6",
          "num": 6,
          "question": "This is Yuki's blue bag.",
          "options": [
            {
              "label": "A",
              "text": "これはゆきが青いかばんです。"
            },
            {
              "label": "B",
              "text": "これはゆきを青いかばんです。"
            },
            {
              "label": "C",
              "text": "これはゆきの青いかばんです。"
            }
          ],
          "correct": "C",
          "explanation": "Owner の + description + noun",
          "example": "これはゆきの青いかばんです。"
        },
        {
          "id": "grammar-and-sentences-7",
          "num": 7,
          "question": "On Sunday, I go to school.",
          "options": [
            {
              "label": "A",
              "text": "日曜日に学校へ行きます。"
            },
            {
              "label": "B",
              "text": "日曜日で学校を行きます。"
            },
            {
              "label": "C",
              "text": "日曜日の学校が行きます。"
            }
          ],
          "correct": "A",
          "explanation": "Day/time に + destination へ",
          "example": "日曜日に学校へ行きます。"
        },
        {
          "id": "grammar-and-sentences-8",
          "num": 8,
          "question": "I talk with Aki at home.",
          "options": [
            {
              "label": "A",
              "text": "家にあきが話します。"
            },
            {
              "label": "B",
              "text": "家であきと話します。"
            },
            {
              "label": "C",
              "text": "家をあきに話します。"
            }
          ],
          "correct": "B",
          "explanation": "Place で + person と + 話します",
          "example": "家であきと話します。"
        },
        {
          "id": "grammar-and-sentences-9",
          "num": 9,
          "question": "I read a white book at 9 a.m.",
          "options": [
            {
              "label": "A",
              "text": "午前九時に白い本を読みます。"
            },
            {
              "label": "B",
              "text": "午前九時で白い本が読みます。"
            },
            {
              "label": "C",
              "text": "午前九時の白い本に読みます。"
            }
          ],
          "correct": "A",
          "explanation": "Time に + object を + 読みます",
          "example": "午前九時に白い本を読みます。"
        },
        {
          "id": "grammar-and-sentences-10",
          "num": 10,
          "question": "There are three dogs.",
          "options": [
            {
              "label": "A",
              "text": "犬を三頭見ます。"
            },
            {
              "label": "B",
              "text": "犬が三匹います。"
            },
            {
              "label": "C",
              "text": "犬で三本います。"
            }
          ],
          "correct": "B",
          "explanation": "Subject が + counter + います",
          "example": "犬が三匹います。"
        }
      ],
      "passages": {}
    },
    {
      "category": "Reading",
      "description": "Read both passages, then answer five questions for each.",
      "questions": [
        {
          "id": "reading-1",
          "num": 1,
          "question": "[A] What is the date?",
          "options": [
            {
              "label": "A",
              "text": "九月四日"
            },
            {
              "label": "B",
              "text": "九月十日"
            },
            {
              "label": "C",
              "text": "四月九日"
            }
          ],
          "correct": "A",
          "explanation": "The passage says 九月四日",
          "example": "九月四日"
        },
        {
          "id": "reading-2",
          "num": 2,
          "question": "[A] What day is it?",
          "options": [
            {
              "label": "A",
              "text": "木曜日"
            },
            {
              "label": "B",
              "text": "金曜日"
            },
            {
              "label": "C",
              "text": "日曜日"
            }
          ],
          "correct": "B",
          "explanation": "The passage says 金曜日",
          "example": "金曜日"
        },
        {
          "id": "reading-3",
          "num": 3,
          "question": "[A] When does Yuki go to the park?",
          "options": [
            {
              "label": "A",
              "text": "午前九時"
            },
            {
              "label": "B",
              "text": "午前十時"
            },
            {
              "label": "C",
              "text": "午後九時"
            }
          ],
          "correct": "A",
          "explanation": "Yuki goes at 午前九時",
          "example": "午前九時"
        },
        {
          "id": "reading-4",
          "num": 4,
          "question": "[A] Who does Yuki talk with?",
          "options": [
            {
              "label": "A",
              "text": "ゆき"
            },
            {
              "label": "B",
              "text": "先生"
            },
            {
              "label": "C",
              "text": "あき"
            }
          ],
          "correct": "C",
          "explanation": "Yuki talks with Aki",
          "example": "あき"
        },
        {
          "id": "reading-5",
          "num": 5,
          "question": "[A] What color is the book?",
          "options": [
            {
              "label": "A",
              "text": "白"
            },
            {
              "label": "B",
              "text": "青"
            },
            {
              "label": "C",
              "text": "黒"
            }
          ],
          "correct": "B",
          "explanation": "The book is blue",
          "example": "青"
        },
        {
          "id": "reading-6",
          "num": 6,
          "question": "[B] What is the date?",
          "options": [
            {
              "label": "A",
              "text": "九月十日"
            },
            {
              "label": "B",
              "text": "十月九日"
            },
            {
              "label": "C",
              "text": "九月四日"
            }
          ],
          "correct": "A",
          "explanation": "The passage says 九月十日",
          "example": "九月十日"
        },
        {
          "id": "reading-7",
          "num": 7,
          "question": "[B] What day is it?",
          "options": [
            {
              "label": "A",
              "text": "金曜日"
            },
            {
              "label": "B",
              "text": "木曜日"
            },
            {
              "label": "C",
              "text": "火曜日"
            }
          ],
          "correct": "B",
          "explanation": "The passage says 木曜日",
          "example": "木曜日"
        },
        {
          "id": "reading-8",
          "num": 8,
          "question": "[B] Where does Aki watch TV?",
          "options": [
            {
              "label": "A",
              "text": "公園"
            },
            {
              "label": "B",
              "text": "学校"
            },
            {
              "label": "C",
              "text": "家"
            }
          ],
          "correct": "C",
          "explanation": "Aki watches TV at home",
          "example": "家"
        },
        {
          "id": "reading-9",
          "num": 9,
          "question": "[B] What does Aki do at 4 p.m.?",
          "options": [
            {
              "label": "A",
              "text": "音楽を聞きます。"
            },
            {
              "label": "B",
              "text": "テレビを見ます。"
            },
            {
              "label": "C",
              "text": "名前を書きます。"
            }
          ],
          "correct": "A",
          "explanation": "At 4 p.m. Aki listens to music",
          "example": "音楽を聞きます。"
        },
        {
          "id": "reading-10",
          "num": 10,
          "question": "[B] Who does Aki talk with at 5 p.m.?",
          "options": [
            {
              "label": "A",
              "text": "先生"
            },
            {
              "label": "B",
              "text": "ゆき"
            },
            {
              "label": "C",
              "text": "あき"
            }
          ],
          "correct": "B",
          "explanation": "Aki talks with Yuki",
          "example": "ゆき"
        }
      ],
      "passages": {
        "Passage A": "九月四日は金曜日です。ゆきは午前九時に公園へ行きます。公園であきと話します。それから、青い本を読みます。午前十時に家へ帰ります。",
        "Passage B": "九月十日は木曜日です。あきは午後三時に家でテレビを見ます。午後四時に音楽を聞きます。白いかばんに名前を書きます。午後五時にゆきと話します。"
      }
    }
  ],
  "homeworkCategories": [
    {
        "category": "Kanji",
        "description": "Kanji meanings, readings, weekdays, and action verbs.",
        "questions": [
            {
                "id": "kanji-1",
                "num": 1,
                "question": "What does 犬 (いぬ / inu) mean?",
                "options": [
                    {
                        "label": "A",
                        "text": "dog"
                    },
                    {
                        "label": "B",
                        "text": "cat"
                    },
                    {
                        "label": "C",
                        "text": "bird"
                    }
                ],
                "correct": "A",
                "explanation": "犬 = dog",
                "example": "dog"
            },
            {
                "id": "kanji-2",
                "num": 2,
                "question": "How do you read 人?",
                "options": [
                    {
                        "label": "A",
                        "text": "ひと (hito)"
                    },
                    {
                        "label": "B",
                        "text": "いぬ (inu)"
                    },
                    {
                        "label": "C",
                        "text": "ほん (hon)"
                    }
                ],
                "correct": "A",
                "explanation": "人 = ひと (person)",
                "example": "ひと"
            },
            {
                "id": "kanji-3",
                "num": 3,
                "question": "Which kanji means “big”?",
                "options": [
                    {
                        "label": "A",
                        "text": "人 (ひと / hito)"
                    },
                    {
                        "label": "B",
                        "text": "大 (おおきい / ookii)"
                    },
                    {
                        "label": "C",
                        "text": "太 (ふとい / futoi)"
                    }
                ],
                "correct": "B",
                "explanation": "大 = big",
                "example": "大"
            },
            {
                "id": "kanji-4",
                "num": 4,
                "question": "Which kanji means “sun / day”?",
                "options": [
                    {
                        "label": "A",
                        "text": "日 (ひ・にち / hi, nichi)"
                    },
                    {
                        "label": "B",
                        "text": "月 (つき・げつ / tsuki, getsu)"
                    },
                    {
                        "label": "C",
                        "text": "火 (ひ・か / hi, ka)"
                    }
                ],
                "correct": "A",
                "explanation": "日 = sun/day",
                "example": "日"
            },
            {
                "id": "kanji-5",
                "num": 5,
                "question": "Which kanji means “water”?",
                "options": [
                    {
                        "label": "A",
                        "text": "木 (き・もく / ki, moku)"
                    },
                    {
                        "label": "B",
                        "text": "金 (かね・きん / kane, kin)"
                    },
                    {
                        "label": "C",
                        "text": "水 (みず・すい / mizu, sui)"
                    }
                ],
                "correct": "C",
                "explanation": "水 = water",
                "example": "水"
            },
            {
                "id": "kanji-6",
                "num": 6,
                "question": "Which word means Monday?",
                "options": [
                    {
                        "label": "A",
                        "text": "火曜日 (かようび / kayōbi)"
                    },
                    {
                        "label": "B",
                        "text": "月曜日 (げつようび / getsuyōbi)"
                    },
                    {
                        "label": "C",
                        "text": "日曜日 (にちようび / nichiyōbi)"
                    }
                ],
                "correct": "B",
                "explanation": "月曜日 = Monday",
                "example": "月曜日"
            },
            {
                "id": "kanji-7",
                "num": 7,
                "question": "How do you read 見る?",
                "options": [
                    {
                        "label": "A",
                        "text": "みる (miru)"
                    },
                    {
                        "label": "B",
                        "text": "きく (kiku)"
                    },
                    {
                        "label": "C",
                        "text": "かく (kaku)"
                    }
                ],
                "correct": "A",
                "explanation": "見る = to see/watch",
                "example": "みる"
            },
            {
                "id": "kanji-8",
                "num": 8,
                "question": "Which word means “to listen / hear”?",
                "options": [
                    {
                        "label": "A",
                        "text": "話す (はなす / hanasu)"
                    },
                    {
                        "label": "B",
                        "text": "読む (よむ / yomu)"
                    },
                    {
                        "label": "C",
                        "text": "聞く (きく / kiku)"
                    }
                ],
                "correct": "C",
                "explanation": "聞く = to listen/hear",
                "example": "聞く"
            },
            {
                "id": "kanji-9",
                "num": 9,
                "question": "What does 学生 (がくせい / gakusei) mean?",
                "options": [
                    {
                        "label": "A",
                        "text": "teacher"
                    },
                    {
                        "label": "B",
                        "text": "student"
                    },
                    {
                        "label": "C",
                        "text": "school"
                    }
                ],
                "correct": "B",
                "explanation": "学生 = student",
                "example": "student"
            },
            {
                "id": "kanji-10",
                "num": 10,
                "question": "Which word means “to go”?",
                "options": [
                    {
                        "label": "A",
                        "text": "行く (いく / iku)"
                    },
                    {
                        "label": "B",
                        "text": "書く (かく / kaku)"
                    },
                    {
                        "label": "C",
                        "text": "話す (はなす / hanasu)"
                    }
                ],
                "correct": "A",
                "explanation": "行く = to go",
                "example": "行く"
            }
        ],
        "passages": {}
    },
    {
        "category": "Kana & Vocabulary",
        "description": "Katakana loanwords, colors, animals, and everyday words.",
        "questions": [
            {
                "id": "kana-and-vocabulary-1",
                "num": 1,
                "question": "Which is “coffee” in katakana?",
                "options": [
                    {
                        "label": "A",
                        "text": "コーヒー (kōhī / coffee)"
                    },
                    {
                        "label": "B",
                        "text": "ホテル (hoteru / hotel)"
                    },
                    {
                        "label": "C",
                        "text": "テレビ (terebi / TV)"
                    }
                ],
                "correct": "A",
                "explanation": "coffee = コーヒー",
                "example": "コーヒー"
            },
            {
                "id": "kana-and-vocabulary-2",
                "num": 2,
                "question": "Which is “television” in katakana?",
                "options": [
                    {
                        "label": "A",
                        "text": "タクシー (takushī / taxi)"
                    },
                    {
                        "label": "B",
                        "text": "テレビ (terebi / TV)"
                    },
                    {
                        "label": "C",
                        "text": "コンピューター (konpyūtā / computer)"
                    }
                ],
                "correct": "B",
                "explanation": "television = テレビ",
                "example": "テレビ"
            },
            {
                "id": "kana-and-vocabulary-3",
                "num": 3,
                "question": "Which is “hotel” in katakana?",
                "options": [
                    {
                        "label": "A",
                        "text": "ホテル (hoteru / hotel)"
                    },
                    {
                        "label": "B",
                        "text": "コーヒー (kōhī / coffee)"
                    },
                    {
                        "label": "C",
                        "text": "ピンク (pinku / pink)"
                    }
                ],
                "correct": "A",
                "explanation": "hotel = ホテル",
                "example": "ホテル"
            },
            {
                "id": "kana-and-vocabulary-4",
                "num": 4,
                "question": "Which is “taxi” in katakana?",
                "options": [
                    {
                        "label": "A",
                        "text": "テレビ (terebi / TV)"
                    },
                    {
                        "label": "B",
                        "text": "タクシー (takushī / taxi)"
                    },
                    {
                        "label": "C",
                        "text": "ホテル (hoteru / hotel)"
                    }
                ],
                "correct": "B",
                "explanation": "taxi = タクシー",
                "example": "タクシー"
            },
            {
                "id": "kana-and-vocabulary-5",
                "num": 5,
                "question": "Which word means “blue”?",
                "options": [
                    {
                        "label": "A",
                        "text": "赤 (あか / aka - red)"
                    },
                    {
                        "label": "B",
                        "text": "白 (しろ / shiro - white)"
                    },
                    {
                        "label": "C",
                        "text": "青 (あお / ao - blue)"
                    }
                ],
                "correct": "C",
                "explanation": "青 = blue",
                "example": "青"
            },
            {
                "id": "kana-and-vocabulary-6",
                "num": 6,
                "question": "Which word means “black”?",
                "options": [
                    {
                        "label": "A",
                        "text": "黒 (くろ / kuro - black)"
                    },
                    {
                        "label": "B",
                        "text": "白 (しろ / shiro - white)"
                    },
                    {
                        "label": "C",
                        "text": "赤 (あか / aka - red)"
                    }
                ],
                "correct": "A",
                "explanation": "黒 = black",
                "example": "黒"
            },
            {
                "id": "kana-and-vocabulary-7",
                "num": 7,
                "question": "Which word means “white”?",
                "options": [
                    {
                        "label": "A",
                        "text": "青 (あお / ao - blue)"
                    },
                    {
                        "label": "B",
                        "text": "白 (しろ / shiro - white)"
                    },
                    {
                        "label": "C",
                        "text": "黒 (くろ / kuro - black)"
                    }
                ],
                "correct": "B",
                "explanation": "白 = white",
                "example": "白"
            },
            {
                "id": "kana-and-vocabulary-8",
                "num": 8,
                "question": "Which word means “cat”?",
                "options": [
                    {
                        "label": "A",
                        "text": "いぬ (inu)"
                    },
                    {
                        "label": "B",
                        "text": "ねこ (neko)"
                    },
                    {
                        "label": "C",
                        "text": "うし (ushi)"
                    }
                ],
                "correct": "B",
                "explanation": "ねこ = cat",
                "example": "ねこ"
            },
            {
                "id": "kana-and-vocabulary-9",
                "num": 9,
                "question": "Which word means “cow”?",
                "options": [
                    {
                        "label": "A",
                        "text": "うし (ushi)"
                    },
                    {
                        "label": "B",
                        "text": "とり (tori)"
                    },
                    {
                        "label": "C",
                        "text": "ねこ (neko)"
                    }
                ],
                "correct": "A",
                "explanation": "うし = cow",
                "example": "うし"
            },
            {
                "id": "kana-and-vocabulary-10",
                "num": 10,
                "question": "Which word means “music”?",
                "options": [
                    {
                        "label": "A",
                        "text": "なまえ (namae / name)"
                    },
                    {
                        "label": "B",
                        "text": "おんがく (ongaku / music)"
                    },
                    {
                        "label": "C",
                        "text": "かばん (kaban / bag)"
                    }
                ],
                "correct": "B",
                "explanation": "おんがく = music",
                "example": "おんがく"
            }
        ],
        "passages": {}
    },
    {
        "category": "Numbers & Counters",
        "description": "Numbers and counters for small and large animals.",
        "questions": [
            {
                "id": "numbers-and-counters-1",
                "num": 1,
                "question": "What number is 二十八 (にじゅうはち / nijūhachi)?",
                "options": [
                    {
                        "label": "A",
                        "text": "18"
                    },
                    {
                        "label": "B",
                        "text": "28"
                    },
                    {
                        "label": "C",
                        "text": "82"
                    }
                ],
                "correct": "B",
                "explanation": "二十八 = 28",
                "example": "28"
            },
            {
                "id": "numbers-and-counters-2",
                "num": 2,
                "question": "What number is 五十四 (ごじゅうよん / gojūyon)?",
                "options": [
                    {
                        "label": "A",
                        "text": "45"
                    },
                    {
                        "label": "B",
                        "text": "504"
                    },
                    {
                        "label": "C",
                        "text": "54"
                    }
                ],
                "correct": "C",
                "explanation": "五十四 = 54",
                "example": "54"
            },
            {
                "id": "numbers-and-counters-3",
                "num": 3,
                "question": "How do you read 六百?",
                "options": [
                    {
                        "label": "A",
                        "text": "ろくひゃく (rokuhyaku)"
                    },
                    {
                        "label": "B",
                        "text": "ろっぴゃく (roppyaku)"
                    },
                    {
                        "label": "C",
                        "text": "ろくびゃく (rokubyaku)"
                    }
                ],
                "correct": "B",
                "explanation": "六百 = ろっぴゃく",
                "example": "ろっぴゃく"
            },
            {
                "id": "numbers-and-counters-4",
                "num": 4,
                "question": "How do you read 八百?",
                "options": [
                    {
                        "label": "A",
                        "text": "はっぴゃく (happyaku)"
                    },
                    {
                        "label": "B",
                        "text": "はちひゃく (hachihyaku)"
                    },
                    {
                        "label": "C",
                        "text": "はちびゃく (hachibyaku)"
                    }
                ],
                "correct": "A",
                "explanation": "八百 = はっぴゃく",
                "example": "はっぴゃく"
            },
            {
                "id": "numbers-and-counters-5",
                "num": 5,
                "question": "What number is 二千 (にせん / nisen)?",
                "options": [
                    {
                        "label": "A",
                        "text": "200"
                    },
                    {
                        "label": "B",
                        "text": "2,000"
                    },
                    {
                        "label": "C",
                        "text": "20,000"
                    }
                ],
                "correct": "B",
                "explanation": "二千 = 2,000",
                "example": "2,000"
            },
            {
                "id": "numbers-and-counters-6",
                "num": 6,
                "question": "What number is 九万三千十一 (きゅうまんさんぜんじゅういち / kyūman sanzen jūichi)?",
                "options": [
                    {
                        "label": "A",
                        "text": "9,311"
                    },
                    {
                        "label": "B",
                        "text": "93,011"
                    },
                    {
                        "label": "C",
                        "text": "930,011"
                    }
                ],
                "correct": "B",
                "explanation": "九万三千十一 = 93,011",
                "example": "93,011"
            },
            {
                "id": "numbers-and-counters-7",
                "num": 7,
                "question": "Which sentence means “There is one dog”?",
                "options": [
                    {
                        "label": "A",
                        "text": "犬が一匹います。(Inu ga ippiki imasu.)"
                    },
                    {
                        "label": "B",
                        "text": "犬が一頭います。(Inu ga ittou imasu.)"
                    },
                    {
                        "label": "C",
                        "text": "犬が三匹います。(Inu ga sanbiki imasu.)"
                    }
                ],
                "correct": "A",
                "explanation": "Small animals use 匹",
                "example": "犬が一匹います。"
            },
            {
                "id": "numbers-and-counters-8",
                "num": 8,
                "question": "How do you read 一匹?",
                "options": [
                    {
                        "label": "A",
                        "text": "いちひき (ichihiki)"
                    },
                    {
                        "label": "B",
                        "text": "いっぴき (ippiki)"
                    },
                    {
                        "label": "C",
                        "text": "いちぴき (ichipiki)"
                    }
                ],
                "correct": "B",
                "explanation": "一匹 = いっぴき",
                "example": "いっぴき"
            },
            {
                "id": "numbers-and-counters-9",
                "num": 9,
                "question": "Which means “three cats”?",
                "options": [
                    {
                        "label": "A",
                        "text": "ねこが三匹います。(Neko ga sanbiki imasu.)"
                    },
                    {
                        "label": "B",
                        "text": "ねこが三頭います。(Neko ga santou imasu.)"
                    },
                    {
                        "label": "C",
                        "text": "ねこが三本います。(Neko ga sanbon imasu.)"
                    }
                ],
                "correct": "A",
                "explanation": "Cats use 匹",
                "example": "ねこが三匹います。"
            },
            {
                "id": "numbers-and-counters-10",
                "num": 10,
                "question": "Which sentence correctly counts one cow?",
                "options": [
                    {
                        "label": "A",
                        "text": "牛が一匹います。(Ushi ga ippiki imasu.)"
                    },
                    {
                        "label": "B",
                        "text": "牛が一本います。(Ushi ga ippon imasu.)"
                    },
                    {
                        "label": "C",
                        "text": "牛が一頭います。(Ushi ga ittou imasu.)"
                    }
                ],
                "correct": "C",
                "explanation": "Large animals use 頭",
                "example": "牛が一頭います。"
            }
        ],
        "passages": {}
    },
    {
        "category": "Dates & Time",
        "description": "Days of the week, special date readings, and clock time.",
        "questions": [
            {
                "id": "dates-and-time-1",
                "num": 1,
                "question": "How do you read 1日 (the first day of the month)?",
                "options": [
                    {
                        "label": "A",
                        "text": "いちにち (ichinichi)"
                    },
                    {
                        "label": "B",
                        "text": "ついたち (tsuitachi)"
                    },
                    {
                        "label": "C",
                        "text": "いっぴ (ippi)"
                    }
                ],
                "correct": "B",
                "explanation": "1日 = ついたち",
                "example": "ついたち"
            },
            {
                "id": "dates-and-time-2",
                "num": 2,
                "question": "How do you read 4日?",
                "options": [
                    {
                        "label": "A",
                        "text": "よっか (yokka)"
                    },
                    {
                        "label": "B",
                        "text": "よんにち (yonnichi)"
                    },
                    {
                        "label": "C",
                        "text": "しにち (shinichi)"
                    }
                ],
                "correct": "A",
                "explanation": "4日 = よっか",
                "example": "よっか"
            },
            {
                "id": "dates-and-time-3",
                "num": 3,
                "question": "How do you read 8日?",
                "options": [
                    {
                        "label": "A",
                        "text": "はちにち (hachinichi)"
                    },
                    {
                        "label": "B",
                        "text": "ようか (yōka)"
                    },
                    {
                        "label": "C",
                        "text": "やっか (yakka)"
                    }
                ],
                "correct": "B",
                "explanation": "8日 = ようか",
                "example": "ようか"
            },
            {
                "id": "dates-and-time-4",
                "num": 4,
                "question": "How do you read 10日?",
                "options": [
                    {
                        "label": "A",
                        "text": "じゅうにち (jūnichi)"
                    },
                    {
                        "label": "B",
                        "text": "とおか (tōka)"
                    },
                    {
                        "label": "C",
                        "text": "じゅっか (jukka)"
                    }
                ],
                "correct": "B",
                "explanation": "10日 = とおか",
                "example": "とおか"
            },
            {
                "id": "dates-and-time-5",
                "num": 5,
                "question": "Which word means Sunday?",
                "options": [
                    {
                        "label": "A",
                        "text": "土曜日 (どようび / doyōbi)"
                    },
                    {
                        "label": "B",
                        "text": "月曜日 (げつようび / getsuyōbi)"
                    },
                    {
                        "label": "C",
                        "text": "日曜日 (にちようび / nichiyōbi)"
                    }
                ],
                "correct": "C",
                "explanation": "日曜日 = Sunday",
                "example": "日曜日"
            },
            {
                "id": "dates-and-time-6",
                "num": 6,
                "question": "How do you read 7時?",
                "options": [
                    {
                        "label": "A",
                        "text": "ななじ (nanaji)"
                    },
                    {
                        "label": "B",
                        "text": "しちじ (shichiji)"
                    },
                    {
                        "label": "C",
                        "text": "ななとき (nanatoki)"
                    }
                ],
                "correct": "B",
                "explanation": "7時 = しちじ",
                "example": "しちじ"
            },
            {
                "id": "dates-and-time-7",
                "num": 7,
                "question": "How do you read 9時?",
                "options": [
                    {
                        "label": "A",
                        "text": "きゅうじ (kyūji)"
                    },
                    {
                        "label": "B",
                        "text": "くじ (kuji)"
                    },
                    {
                        "label": "C",
                        "text": "ここのじ (kokonoji)"
                    }
                ],
                "correct": "B",
                "explanation": "9時 = くじ",
                "example": "くじ"
            },
            {
                "id": "dates-and-time-8",
                "num": 8,
                "question": "Which is 4:10?",
                "options": [
                    {
                        "label": "A",
                        "text": "四時十分 (よじじゅっぷん / yoji juppun)"
                    },
                    {
                        "label": "B",
                        "text": "十時四分 (じゅうじよんぷん / jūji yonpun)"
                    },
                    {
                        "label": "C",
                        "text": "四日十時 (よっかじゅうじ / yokka jūji)"
                    }
                ],
                "correct": "A",
                "explanation": "4:10 = 四時十分",
                "example": "四時十分"
            },
            {
                "id": "dates-and-time-9",
                "num": 9,
                "question": "Which word means a.m.?",
                "options": [
                    {
                        "label": "A",
                        "text": "午後 (ごご / gogo - p.m.)"
                    },
                    {
                        "label": "B",
                        "text": "午前 (ごぜん / gozen - a.m.)"
                    },
                    {
                        "label": "C",
                        "text": "時間 (じかん / jikan - time)"
                    }
                ],
                "correct": "B",
                "explanation": "午前 = a.m.",
                "example": "午前"
            },
            {
                "id": "dates-and-time-10",
                "num": 10,
                "question": "Which is September 8?",
                "options": [
                    {
                        "label": "A",
                        "text": "八月九日 (はちがつくにち / hachigatsu kokonoka)"
                    },
                    {
                        "label": "B",
                        "text": "九月八日 (くがつようか / kugatsu yōka)"
                    },
                    {
                        "label": "C",
                        "text": "九日八月 (kokonoka hachigatsu)"
                    }
                ],
                "correct": "B",
                "explanation": "September 8 = 九月八日",
                "example": "九月八日"
            }
        ],
        "passages": {}
    },
    {
        "category": "Particles",
        "description": "Choose the correct particle: の・が・を・に・で.",
        "questions": [
            {
                "id": "particles-1",
                "num": 1,
                "question": "これは ゆき ___ 本です。(Kore wa Yuki ___ hon desu.)",
                "options": [
                    {
                        "label": "A",
                        "text": "が (ga)"
                    },
                    {
                        "label": "B",
                        "text": "の (no)"
                    },
                    {
                        "label": "C",
                        "text": "を (o / wo)"
                    }
                ],
                "correct": "B",
                "explanation": "ゆきの本 = Yuki's book",
                "example": "の"
            },
            {
                "id": "particles-2",
                "num": 2,
                "question": "あきは 日本語 ___ 先生です。(Aki wa Nihongo ___ sensei desu.)",
                "options": [
                    {
                        "label": "A",
                        "text": "の (no)"
                    },
                    {
                        "label": "B",
                        "text": "に (ni)"
                    },
                    {
                        "label": "C",
                        "text": "で (de)"
                    }
                ],
                "correct": "A",
                "explanation": "日本語の先生 = Japanese teacher",
                "example": "の"
            },
            {
                "id": "particles-3",
                "num": 3,
                "question": "わたしは 犬 ___ 好きです。(Watashi wa inu ___ suki desu.)",
                "options": [
                    {
                        "label": "A",
                        "text": "を (o / wo)"
                    },
                    {
                        "label": "B",
                        "text": "が (ga)"
                    },
                    {
                        "label": "C",
                        "text": "に (ni)"
                    }
                ],
                "correct": "B",
                "explanation": "好き takes が",
                "example": "が"
            },
            {
                "id": "particles-4",
                "num": 4,
                "question": "公園に 犬 ___ います。(Kōen ni inu ___ imasu.)",
                "options": [
                    {
                        "label": "A",
                        "text": "で (de)"
                    },
                    {
                        "label": "B",
                        "text": "を (o / wo)"
                    },
                    {
                        "label": "C",
                        "text": "が (ga)"
                    }
                ],
                "correct": "C",
                "explanation": "The existing subject takes が",
                "example": "が"
            },
            {
                "id": "particles-5",
                "num": 5,
                "question": "本 ___ 読みます。(Hon ___ yomimasu.)",
                "options": [
                    {
                        "label": "A",
                        "text": "を (o / wo)"
                    },
                    {
                        "label": "B",
                        "text": "に (ni)"
                    },
                    {
                        "label": "C",
                        "text": "の (no)"
                    }
                ],
                "correct": "A",
                "explanation": "The object takes を",
                "example": "を"
            },
            {
                "id": "particles-6",
                "num": 6,
                "question": "音楽 ___ 聞きます。(Ongaku ___ kikimasu.)",
                "options": [
                    {
                        "label": "A",
                        "text": "で (de)"
                    },
                    {
                        "label": "B",
                        "text": "を (o / wo)"
                    },
                    {
                        "label": "C",
                        "text": "が (ga)"
                    }
                ],
                "correct": "B",
                "explanation": "The object takes を",
                "example": "を"
            },
            {
                "id": "particles-7",
                "num": 7,
                "question": "午前九時 ___ 公園へ行きます。(Gozen kuji ___ kōen e ikimasu.)",
                "options": [
                    {
                        "label": "A",
                        "text": "に (ni)"
                    },
                    {
                        "label": "B",
                        "text": "で (de)"
                    },
                    {
                        "label": "C",
                        "text": "の (no)"
                    }
                ],
                "correct": "A",
                "explanation": "A specific time takes に",
                "example": "に"
            },
            {
                "id": "particles-8",
                "num": 8,
                "question": "九月四日 ___ 学校へ行きます。(Kugatsu yokka ___ gakkō e ikimasu.)",
                "options": [
                    {
                        "label": "A",
                        "text": "を (o / wo)"
                    },
                    {
                        "label": "B",
                        "text": "が (ga)"
                    },
                    {
                        "label": "C",
                        "text": "に (ni)"
                    }
                ],
                "correct": "C",
                "explanation": "A specific date takes に",
                "example": "に"
            },
            {
                "id": "particles-9",
                "num": 9,
                "question": "家 ___ テレビを見ます。(Ie ___ terebi o mimasu.)",
                "options": [
                    {
                        "label": "A",
                        "text": "に (ni)"
                    },
                    {
                        "label": "B",
                        "text": "で (de)"
                    },
                    {
                        "label": "C",
                        "text": "を (o / wo)"
                    }
                ],
                "correct": "B",
                "explanation": "The place of an action takes で",
                "example": "で"
            },
            {
                "id": "particles-10",
                "num": 10,
                "question": "公園 ___ あきと話します。(Kōen ___ Aki to hanashimasu.)",
                "options": [
                    {
                        "label": "A",
                        "text": "の (no)"
                    },
                    {
                        "label": "B",
                        "text": "が (ga)"
                    },
                    {
                        "label": "C",
                        "text": "で (de)"
                    }
                ],
                "correct": "C",
                "explanation": "The place of an action takes で",
                "example": "で"
            }
        ],
        "passages": {}
    },
    {
        "category": "Grammar & Sentences",
        "description": "Choose the most natural and correctly ordered sentence.",
        "questions": [
            {
                "id": "grammar-and-sentences-1",
                "num": 1,
                "question": "I read a book at home.",
                "options": [
                    {
                        "label": "A",
                        "text": "家で本を読みます。(Ie de hon o yomimasu.)"
                    },
                    {
                        "label": "B",
                        "text": "家に本が読みます。(Ie ni hon ga yomimasu.)"
                    },
                    {
                        "label": "C",
                        "text": "家を本で読みます。(Ie o hon de yomimasu.)"
                    }
                ],
                "correct": "A",
                "explanation": "Place で + object を + verb",
                "example": "家で本を読みます。"
            },
            {
                "id": "grammar-and-sentences-2",
                "num": 2,
                "question": "Yuki watches TV at 3 p.m.",
                "options": [
                    {
                        "label": "A",
                        "text": "ゆきは午後三時でテレビが見ます。(Yuki wa gogo sanji de terebi ga mimasu.)"
                    },
                    {
                        "label": "B",
                        "text": "ゆきは午後三時にテレビを見ます。(Yuki wa gogo sanji ni terebi o mimasu.)"
                    },
                    {
                        "label": "C",
                        "text": "ゆきの午後三時をテレビに見ます。(Yuki no gogo sanji o terebi ni mimasu.)"
                    }
                ],
                "correct": "B",
                "explanation": "Time に + object を + 見ます",
                "example": "ゆきは午後三時にテレビを見ます。"
            },
            {
                "id": "grammar-and-sentences-3",
                "num": 3,
                "question": "Aki listens to music in the park.",
                "options": [
                    {
                        "label": "A",
                        "text": "あきは公園で音楽を聞きます。(Aki wa kōen de ongaku o kikimasu.)"
                    },
                    {
                        "label": "B",
                        "text": "あきは公園に音楽が聞きます。(Aki wa kōen ni ongaku ga kikimasu.)"
                    },
                    {
                        "label": "C",
                        "text": "あきの公園を音楽で聞きます。(Aki no kōen o ongaku de kikimasu.)"
                    }
                ],
                "correct": "A",
                "explanation": "Place で + object を + 聞きます",
                "example": "あきは公園で音楽を聞きます。"
            },
            {
                "id": "grammar-and-sentences-4",
                "num": 4,
                "question": "I write my name in Japanese.",
                "options": [
                    {
                        "label": "A",
                        "text": "日本語に名前が書きます。(Nihongo ni namae ga kakimasu.)"
                    },
                    {
                        "label": "B",
                        "text": "日本語で名前を書きます。(Nihongo de namae o kakimasu.)"
                    },
                    {
                        "label": "C",
                        "text": "日本語を名前に書きます。(Nihongo o namae ni kakimasu.)"
                    }
                ],
                "correct": "B",
                "explanation": "Language/method で + object を",
                "example": "日本語で名前を書きます。"
            },
            {
                "id": "grammar-and-sentences-5",
                "num": 5,
                "question": "There is one cat in the park.",
                "options": [
                    {
                        "label": "A",
                        "text": "公園でねこを一匹います。(Kōen de neko o ippiki imasu.)"
                    },
                    {
                        "label": "B",
                        "text": "公園にねこが一匹います。(Kōen ni neko ga ippiki imasu.)"
                    },
                    {
                        "label": "C",
                        "text": "公園のねこで一匹います。(Kōen no neko de ippiki imasu.)"
                    }
                ],
                "correct": "B",
                "explanation": "Location に + subject が + います",
                "example": "公園にねこが一匹います。"
            },
            {
                "id": "grammar-and-sentences-6",
                "num": 6,
                "question": "This is Yuki's blue bag.",
                "options": [
                    {
                        "label": "A",
                        "text": "これはゆきが青いかばんです。(Kore wa Yuki ga aoi kaban desu.)"
                    },
                    {
                        "label": "B",
                        "text": "これはゆきを青いかばんです。(Kore wa Yuki o aoi kaban desu.)"
                    },
                    {
                        "label": "C",
                        "text": "これはゆきの青いかばんです。(Kore wa Yuki no aoi kaban desu.)"
                    }
                ],
                "correct": "C",
                "explanation": "Owner の + description + noun",
                "example": "これはゆきの青いかばんです。"
            },
            {
                "id": "grammar-and-sentences-7",
                "num": 7,
                "question": "On Sunday, I go to school.",
                "options": [
                    {
                        "label": "A",
                        "text": "日曜日に学校へ行きます。(Nichiyōbi ni gakkō e ikimasu.)"
                    },
                    {
                        "label": "B",
                        "text": "日曜日で学校を行きます。(Nichiyōbi de gakkō o ikimasu.)"
                    },
                    {
                        "label": "C",
                        "text": "日曜日の学校が行きます。(Nichiyōbi no gakkō ga ikimasu.)"
                    }
                ],
                "correct": "A",
                "explanation": "Day/time に + destination へ",
                "example": "日曜日に学校へ行きます。"
            },
            {
                "id": "grammar-and-sentences-8",
                "num": 8,
                "question": "I talk with Aki at home.",
                "options": [
                    {
                        "label": "A",
                        "text": "家にあきが話します。(Ie ni Aki ga hanashimasu.)"
                    },
                    {
                        "label": "B",
                        "text": "家であきと話します。(Ie de Aki to hanashimasu.)"
                    },
                    {
                        "label": "C",
                        "text": "家をあきに話します。(Ie o Aki ni hanashimasu.)"
                    }
                ],
                "correct": "B",
                "explanation": "Place で + person と + 話します",
                "example": "家であきと話します。"
            },
            {
                "id": "grammar-and-sentences-9",
                "num": 9,
                "question": "I read a white book at 9 a.m.",
                "options": [
                    {
                        "label": "A",
                        "text": "午前九時に白い本を読みます。(Gozen kuji ni shiroi hon o yomimasu.)"
                    },
                    {
                        "label": "B",
                        "text": "午前九時で白い本が読みます。(Gozen kuji de shiroi hon ga yomimasu.)"
                    },
                    {
                        "label": "C",
                        "text": "午前九時の白い本に読みます。(Gozen kuji no shiroi hon ni yomimasu.)"
                    }
                ],
                "correct": "A",
                "explanation": "Time に + object を + 読みます",
                "example": "午前九時に白い本を読みます。"
            },
            {
                "id": "grammar-and-sentences-10",
                "num": 10,
                "question": "There are three dogs.",
                "options": [
                    {
                        "label": "A",
                        "text": "犬を三頭見ます。(Inu o santou mimasu.)"
                    },
                    {
                        "label": "B",
                        "text": "犬が三匹います。(Inu ga sanbiki imasu.)"
                    },
                    {
                        "label": "C",
                        "text": "犬で三本います。(Inu de sanbon imasu.)"
                    }
                ],
                "correct": "B",
                "explanation": "Subject が + counter + います",
                "example": "犬が三匹います。"
            }
        ],
        "passages": {}
    },
    {
        "category": "Reading",
        "description": "Read both passages, then answer five questions for each.",
        "questions": [
            {
                "id": "reading-1",
                "num": 1,
                "question": "[A] What is the date?",
                "options": [
                    {
                        "label": "A",
                        "text": "九月四日 (くがつよっか / kugatsu yokka - Sep 4)"
                    },
                    {
                        "label": "B",
                        "text": "九月十日 (くがつとおか / kugatsu tōka - Sep 10)"
                    },
                    {
                        "label": "C",
                        "text": "四月九日 (しがつここのか / shigatsu kokonoka - Apr 9)"
                    }
                ],
                "correct": "A",
                "explanation": "The passage says 九月四日",
                "example": "九月四日"
            },
            {
                "id": "reading-2",
                "num": 2,
                "question": "[A] What day is it?",
                "options": [
                    {
                        "label": "A",
                        "text": "木曜日 (もくようび / mokuyōbi - Thursday)"
                    },
                    {
                        "label": "B",
                        "text": "金曜日 (きんようび / kinyōbi - Friday)"
                    },
                    {
                        "label": "C",
                        "text": "日曜日 (にちようび / nichiyōbi)"
                    }
                ],
                "correct": "B",
                "explanation": "The passage says 金曜日",
                "example": "金曜日"
            },
            {
                "id": "reading-3",
                "num": 3,
                "question": "[A] When does Yuki go to the park?",
                "options": [
                    {
                        "label": "A",
                        "text": "午前九時 (ごぜんくじ / gozen kuji - 9:00 AM)"
                    },
                    {
                        "label": "B",
                        "text": "午前十時 (ごぜんじゅうじ / gozen jūji - 10:00 AM)"
                    },
                    {
                        "label": "C",
                        "text": "午後九時 (ごごくじ / gogo kuji - 9:00 PM)"
                    }
                ],
                "correct": "A",
                "explanation": "Yuki goes at 午前九時",
                "example": "午前九時"
            },
            {
                "id": "reading-4",
                "num": 4,
                "question": "[A] Who does Yuki talk with?",
                "options": [
                    {
                        "label": "A",
                        "text": "ゆき (Yuki)"
                    },
                    {
                        "label": "B",
                        "text": "先生 (せんせい / sensei - teacher)"
                    },
                    {
                        "label": "C",
                        "text": "あき (Aki)"
                    }
                ],
                "correct": "C",
                "explanation": "Yuki talks with Aki",
                "example": "あき"
            },
            {
                "id": "reading-5",
                "num": 5,
                "question": "[A] What color is the book?",
                "options": [
                    {
                        "label": "A",
                        "text": "白 (しろ / shiro - white)"
                    },
                    {
                        "label": "B",
                        "text": "青 (あお / ao - blue)"
                    },
                    {
                        "label": "C",
                        "text": "黒 (くろ / kuro - black)"
                    }
                ],
                "correct": "B",
                "explanation": "The book is blue",
                "example": "青"
            },
            {
                "id": "reading-6",
                "num": 6,
                "question": "[B] What is the date?",
                "options": [
                    {
                        "label": "A",
                        "text": "九月十日 (くがつとおか / kugatsu tōka - Sep 10)"
                    },
                    {
                        "label": "B",
                        "text": "十月九日 (じゅうがつここのか / jūgatsu kokonoka - Oct 9)"
                    },
                    {
                        "label": "C",
                        "text": "九月四日 (くがつよっか / kugatsu yokka - Sep 4)"
                    }
                ],
                "correct": "A",
                "explanation": "The passage says 九月十日",
                "example": "九月十日"
            },
            {
                "id": "reading-7",
                "num": 7,
                "question": "[B] What day is it?",
                "options": [
                    {
                        "label": "A",
                        "text": "金曜日 (きんようび / kinyōbi - Friday)"
                    },
                    {
                        "label": "B",
                        "text": "木曜日 (もくようび / mokuyōbi - Thursday)"
                    },
                    {
                        "label": "C",
                        "text": "火曜日 (かようび / kayōbi)"
                    }
                ],
                "correct": "B",
                "explanation": "The passage says 木曜日",
                "example": "木曜日"
            },
            {
                "id": "reading-8",
                "num": 8,
                "question": "[B] Where does Aki watch TV?",
                "options": [
                    {
                        "label": "A",
                        "text": "公園 (こうえん / kōen - park)"
                    },
                    {
                        "label": "B",
                        "text": "学校 (がっこう / gakkō - school)"
                    },
                    {
                        "label": "C",
                        "text": "家 (いえ / ie - home)"
                    }
                ],
                "correct": "C",
                "explanation": "Aki watches TV at home",
                "example": "家"
            },
            {
                "id": "reading-9",
                "num": 9,
                "question": "[B] What does Aki do at 4 p.m.?",
                "options": [
                    {
                        "label": "A",
                        "text": "音楽を聞きます。(Ongaku o kikimasu. - Listens to music)"
                    },
                    {
                        "label": "B",
                        "text": "テレビを見ます。(Terebi o mimasu. - Watches TV)"
                    },
                    {
                        "label": "C",
                        "text": "名前を書きます。(Namae o kakimasu. - Writes name)"
                    }
                ],
                "correct": "A",
                "explanation": "At 4 p.m. Aki listens to music",
                "example": "音楽を聞きます。"
            },
            {
                "id": "reading-10",
                "num": 10,
                "question": "[B] Who does Aki talk with at 5 p.m.?",
                "options": [
                    {
                        "label": "A",
                        "text": "先生 (せんせい / sensei - teacher)"
                    },
                    {
                        "label": "B",
                        "text": "ゆき (Yuki)"
                    },
                    {
                        "label": "C",
                        "text": "あき (Aki)"
                    }
                ],
                "correct": "B",
                "explanation": "Aki talks with Yuki",
                "example": "ゆき"
            }
        ],
        "passages": {
            "Passage A": "九月四日は金曜日です。ゆきは午前九時に公園へ行きます。公園であきと話します。それから、青い本を読みます。午前十時に家へ帰ります。",
            "Passage B": "九月十日は木曜日です。あきは午後三時に家でテレビを見ます。午後四時に音楽を聞きます。白いかばんに名前を書きます。午後五時にゆきと話します。"
        }
    }
],
  "class424Qna": [
    {
        "id": "qna-424-1",
        "question": "Q1. Who is the Protagonist in the story?",
        "options": [
            "Sato",
            "Aki",
            "Kia",
            "Yuki (ゆき / yuki)",
            "George"
        ],
        "correct": "Yuki (ゆき / yuki)",
        "explanation": "Yuki (ゆき) is the central protagonist born in February 1999."
    },
    {
        "id": "qna-424-2",
        "question": "Q2. How old is the Protagonist Yuki?",
        "options": [
            "二十四 (にじゅうよん / nijūyon - 24)",
            "二十五 (にじゅうご / nijūgo - 25)",
            "二十六 (にじゅうろく / nijūroku - 26)",
            "二十七 (にじゅうなな / nijūnana - 27)",
            "二十八 (にじゅうはち / nijūhachi - 28)"
        ],
        "correct": "二十五 (にじゅうご / nijūgo - 25)",
        "explanation": "Yuki is 25 years old (二十五歳 / nijūgosai)."
    },
    {
        "id": "qna-424-3",
        "question": "Q3. What is the name of Yuki's Friend?",
        "options": [
            "Sato",
            "Oki",
            "Aki (あき / aki)",
            "Kia",
            "George"
        ],
        "correct": "Aki (あき / aki)",
        "explanation": "Aki (あき) is Yuki's friend who hangs out at the park."
    },
    {
        "id": "qna-424-4",
        "question": "Q4. What year was Friend Aki born in?",
        "options": [
            "1999",
            "2000",
            "2001",
            "2002",
            "2003"
        ],
        "correct": "1999",
        "explanation": "Both Yuki and Aki share birth year 1999 (making them 25 in 2024)."
    },
    {
        "id": "qna-424-5",
        "question": "Q5. What are the Names of the two Dogs in the park?",
        "options": [
            "FiFi & MiMi",
            "FuFu & MaMa",
            "FaFa & MoMo",
            "FuFu & MoMo (ふふ & もも / fufu & momo)",
            "Kiki & Toto"
        ],
        "correct": "FuFu & MoMo (ふふ & もも / fufu & momo)",
        "explanation": "The dogs are FuFu (blue) and MoMo (pink)."
    },
    {
        "id": "qna-424-6",
        "question": "Q6. Which statement about the dogs is TRUE?",
        "options": [
            "青い犬はピンク犬より大きいです (Aoi inu wa pinku inu yori ookii desu - Blue dog is bigger)",
            "ピンク犬は青い犬より大きいです (Pinku inu wa aoi inu yori ookii desu - Pink dog is bigger)",
            "青い犬はピンク色です (Aoi inu wa pinku-iro desu - Blue dog is pink)",
            "犬は話します (Inu wa hanashimasu - Dogs talk)"
        ],
        "correct": "青い犬はピンク犬より大きいです (Aoi inu wa pinku inu yori ookii desu - Blue dog is bigger)",
        "explanation": "In Slide 14 of Class 424, the blue dog (ふふ) is depicted larger than pink dog (もも)."
    }
],
  "progressChecklist": [
    {
      "A": "🇯🇵 My Japanese Progress 1",
      "B": "",
      "C": "",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "名前 / Name:",
      "B": "",
      "C": "",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "Mark one box for each skill: 🟢 I can do it!   🟡 Sometimes!   🔴 Not yet",
      "B": "",
      "C": "",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "① Hiragana ひらがな",
      "B": "",
      "C": "",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "Group",
      "B": "Characters",
      "C": "Reading",
      "D": "🟢",
      "E": "🟡",
      "F": "🔴"
    },
    {
      "A": "あ row",
      "B": "あ い う え お",
      "C": "a i u e o",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "か row",
      "B": "か き く け こ",
      "C": "ka ki ku ke ko",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "さ row",
      "B": "さ し す せ そ",
      "C": "sa shi su se so",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "た row",
      "B": "た ち つ て と",
      "C": "ta chi tsu te to",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "な row",
      "B": "な に ぬ ね の",
      "C": "na ni nu ne no",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "は row",
      "B": "は ひ ふ へ ほ",
      "C": "ha hi fu he ho",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "ま row",
      "B": "ま み む め も",
      "C": "ma mi mu me mo",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "や row",
      "B": "や ゆ よ",
      "C": "ya yu yo",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "ら row",
      "B": "ら り る れ ろ",
      "C": "ra ri ru re ro",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "わ row",
      "B": "わ を ん",
      "C": "wa wo n",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "I can read simple hiragana words:",
      "B": "",
      "C": "",
      "D": "🟢",
      "E": "🟡",
      "F": "🔴"
    },
    {
      "A": "いぬ　ねこ　みず\nすし　やま",
      "B": "",
      "C": "",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "② Katakana カタカナ",
      "B": "",
      "C": "",
      "D": ""
    },
    {
      "A": "My progress",
      "B": "",
      "C": "",
      "D": "🟢"
    },
    {
      "A": "Not yet",
      "B": "",
      "C": "",
      "D": ""
    },
    {
      "A": "I want to start",
      "B": "",
      "C": "",
      "D": ""
    },
    {
      "A": "I have started",
      "B": "",
      "C": "",
      "D": ""
    },
    {
      "A": "I can read some katakana",
      "B": "",
      "C": "",
      "D": ""
    },
    {
      "A": "I can read katakana words",
      "B": "コーヒー　パン　バス　テレビ　ホテル",
      "C": "",
      "D": ""
    },
    {
      "A": "③ Kanji かんじ",
      "B": "",
      "C": "",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "Kanji",
      "B": "Reading",
      "C": "Meaning",
      "D": "🟢",
      "E": "🟡",
      "F": "🔴"
    },
    {
      "A": "一",
      "B": "いち",
      "C": "1",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "二",
      "B": "に",
      "C": "2",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "三",
      "B": "さん",
      "C": "3",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "四",
      "B": "よん",
      "C": "4",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "五",
      "B": "ご",
      "C": "5",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "六",
      "B": "ろく",
      "C": "6",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "七",
      "B": "なな",
      "C": "7",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "八",
      "B": "はち",
      "C": "8",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "九",
      "B": "きゅう",
      "C": "9",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "十",
      "B": "じゅう",
      "C": "10",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "百",
      "B": "ひゃく",
      "C": "100",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "千",
      "B": "せん",
      "C": "1,000",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "万",
      "B": "まん",
      "C": "10,000",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "犬",
      "B": "いぬ",
      "C": "dog",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "④ My next goal 🎯",
      "B": "",
      "C": "",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "I want to improve:",
      "B": "",
      "C": "",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "Subject",
      "B": "🟢",
      "C": "",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "Hiragana",
      "B": ""
    },
    {
      "A": "Hiragana Readinh",
      "B": ""
    },
    {
      "A": "Katakana",
      "B": ""
    },
    {
      "A": "Number",
      "B": ""
    },
    {
      "A": "Kanji",
      "B": ""
    },
    {
      "A": "Vocabulary",
      "B": ""
    },
    {
      "A": "Speaking",
      "B": ""
    },
    {
      "A": "⑤ Speed 🚘",
      "B": "",
      "C": "",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "The speed of the class is:",
      "B": "",
      "C": "",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "Subject",
      "B": "🟢"
    },
    {
      "A": "Too fast",
      "B": ""
    },
    {
      "A": "Good Pace",
      "B": ""
    },
    {
      "A": "Too slow",
      "B": ""
    },
    {
      "A": "Weekly progress is:",
      "B": "",
      "C": "",
      "D": "",
      "E": "",
      "F": ""
    },
    {
      "A": "Subject",
      "B": "🟢"
    },
    {
      "A": "Too fast",
      "B": ""
    },
    {
      "A": "Quick",
      "B": ""
    },
    {
      "A": "Good Pace",
      "B": ""
    },
    {
      "A": "Little slow",
      "B": ""
    },
    {
      "A": "Stagnate",
      "B": ""
    }
  ]
};

export const NIKKI_DAYS: NikkiDayLesson[] = NIKKI_MASTER_DATA.days as NikkiDayLesson[];
export const NIKKI_HOMEWORK = NIKKI_MASTER_DATA.homework;
export const NIKKI_HOMEWORK_CATEGORIES: NikkiHomeworkCategory[] = NIKKI_MASTER_DATA.homeworkCategories as NikkiHomeworkCategory[];
export const NIKKI_CLASS_424_QNA: NikkiClass424Question[] = NIKKI_MASTER_DATA.class424Qna as NikkiClass424Question[];
export const NIKKI_PROGRESS = NIKKI_MASTER_DATA.progressChecklist;
