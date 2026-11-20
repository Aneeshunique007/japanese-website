// Master N5 to N3 Japanese Self-Study Dataset (30 Structured Units + 620 Kanshudo Kanji)
// Extracted from authentic N5-to-N3-Self-Study-Casual curriculum

export interface MasterLessonGrammar {
  pattern: string;
  rule: string;
  exampleJp: string;
  exampleFurigana?: string;
  exampleRomaji?: string;
  exampleEn: string;
}

export interface MasterLessonQuestion {
  prompt: string;
  options: string[];
  rawOptions: string;
  answer: string;
  explanation: string;
}

export interface MasterLessonReading {
  text: string;
  gloss: string;
  questions: string[];
  answers: string[];
  translation: string;
  kanaHelp?: string;
}

export interface MasterLessonListening {
  day: number;
  primaryVideoId: string;
  backupVideoId: string;
  backupTitle: string;
  task: string;
}

export interface MasterLessonItem {
  day: number;
  id: string;
  title: string;
  level: string;
  grammar: MasterLessonGrammar[];
  questions: MasterLessonQuestion[];
  reading: MasterLessonReading;
  listening: MasterLessonListening;
  kanjiRange: string;
}

export interface MasterKanjiItemStandard {
  id: number;
  level: 'N5' | 'N4' | 'N3';
  kanji: string;
  word: string;
  reading: string;
  meaning: string;
}

export interface MasterWorkbookFile {
  title: string;
  filename: string;
  path: string;
  description: string;
}

export const MASTER_WORKBOOKS: MasterWorkbookFile[] = [
  {
    "title": "01. Roadmap & Daily Listening",
    "filename": "01_Roadmap_and_Daily_Listening.pdf",
    "path": "/workbooks/01_Roadmap_and_Daily_Listening.pdf",
    "description": "Master study roadmap, daily listening schedule, and active comprehension prompts."
  },
  {
    "title": "02. Daily Learning & Reading Workbook",
    "filename": "02_Daily_Learning_and_Reading_Workbook.pdf",
    "path": "/workbooks/02_Daily_Learning_and_Reading_Workbook.pdf",
    "description": "Printed workbook for daily grammar drills, vocabulary recall, and reading comprehension."
  },
  {
    "title": "03. Complete 620 Kanji Workbook",
    "filename": "03_Complete_620_Kanji_Workbook.pdf",
    "path": "/workbooks/03_Complete_620_Kanji_Workbook.pdf",
    "description": "Comprehensive workbook containing all 620 Kanshudo-standard Kanji across N5, N4, and N3."
  },
  {
    "title": "04. Answers & Self-Study Guide",
    "filename": "04_Answers_and_Self_Study_Guide.pdf",
    "path": "/workbooks/04_Answers_and_Self_Study_Guide.pdf",
    "description": "Complete answer keys, model answers, and practical self-evaluation guidance."
  }
];

export const MASTER_KANJI_620: MasterKanjiItemStandard[] = [
  {
    "level": "N5",
    "kanji": "人",
    "word": "人",
    "reading": "ひと",
    "meaning": "person",
    "id": 1
  },
  {
    "level": "N5",
    "kanji": "一",
    "word": "一つ",
    "reading": "ひとつ",
    "meaning": "one item",
    "id": 2
  },
  {
    "level": "N5",
    "kanji": "日",
    "word": "日本",
    "reading": "にほん",
    "meaning": "Japan",
    "id": 3
  },
  {
    "level": "N5",
    "kanji": "大",
    "word": "大きい",
    "reading": "おおきい",
    "meaning": "big",
    "id": 4
  },
  {
    "level": "N5",
    "kanji": "年",
    "word": "今年",
    "reading": "ことし",
    "meaning": "this year",
    "id": 5
  },
  {
    "level": "N5",
    "kanji": "出",
    "word": "出る",
    "reading": "でる",
    "meaning": "go out",
    "id": 6
  },
  {
    "level": "N5",
    "kanji": "本",
    "word": "本",
    "reading": "ほん",
    "meaning": "book",
    "id": 7
  },
  {
    "level": "N5",
    "kanji": "中",
    "word": "中",
    "reading": "なか",
    "meaning": "inside",
    "id": 8
  },
  {
    "level": "N5",
    "kanji": "子",
    "word": "子ども",
    "reading": "こども",
    "meaning": "child",
    "id": 9
  },
  {
    "level": "N5",
    "kanji": "見",
    "word": "見る",
    "reading": "みる",
    "meaning": "see",
    "id": 10
  },
  {
    "level": "N5",
    "kanji": "国",
    "word": "国",
    "reading": "くに",
    "meaning": "country",
    "id": 11
  },
  {
    "level": "N5",
    "kanji": "上",
    "word": "上",
    "reading": "うえ",
    "meaning": "above",
    "id": 12
  },
  {
    "level": "N5",
    "kanji": "分",
    "word": "五分",
    "reading": "ごふん",
    "meaning": "five minutes",
    "id": 13
  },
  {
    "level": "N5",
    "kanji": "生",
    "word": "学生",
    "reading": "がくせい",
    "meaning": "student",
    "id": 14
  },
  {
    "level": "N5",
    "kanji": "行",
    "word": "行く",
    "reading": "いく",
    "meaning": "go",
    "id": 15
  },
  {
    "level": "N5",
    "kanji": "二",
    "word": "二つ",
    "reading": "ふたつ",
    "meaning": "two items",
    "id": 16
  },
  {
    "level": "N5",
    "kanji": "間",
    "word": "時間",
    "reading": "じかん",
    "meaning": "time",
    "id": 17
  },
  {
    "level": "N5",
    "kanji": "時",
    "word": "四時",
    "reading": "よじ",
    "meaning": "four o'clock",
    "id": 18
  },
  {
    "level": "N5",
    "kanji": "気",
    "word": "元気",
    "reading": "げんき",
    "meaning": "healthy and energetic",
    "id": 19
  },
  {
    "level": "N5",
    "kanji": "十",
    "word": "十",
    "reading": "じゅう",
    "meaning": "ten",
    "id": 20
  },
  {
    "level": "N5",
    "kanji": "女",
    "word": "女の人",
    "reading": "おんなのひと",
    "meaning": "woman",
    "id": 21
  },
  {
    "level": "N5",
    "kanji": "三",
    "word": "三つ",
    "reading": "みっつ",
    "meaning": "three items",
    "id": 22
  },
  {
    "level": "N5",
    "kanji": "前",
    "word": "前",
    "reading": "まえ",
    "meaning": "before or in front",
    "id": 23
  },
  {
    "level": "N5",
    "kanji": "入",
    "word": "入る",
    "reading": "はいる",
    "meaning": "enter",
    "id": 24
  },
  {
    "level": "N5",
    "kanji": "小",
    "word": "小さい",
    "reading": "ちいさい",
    "meaning": "small",
    "id": 25
  },
  {
    "level": "N5",
    "kanji": "後",
    "word": "後で",
    "reading": "あとで",
    "meaning": "later",
    "id": 26
  },
  {
    "level": "N5",
    "kanji": "長",
    "word": "長い",
    "reading": "ながい",
    "meaning": "long",
    "id": 27
  },
  {
    "level": "N5",
    "kanji": "下",
    "word": "下",
    "reading": "した",
    "meaning": "below",
    "id": 28
  },
  {
    "level": "N5",
    "kanji": "学",
    "word": "学校",
    "reading": "がっこう",
    "meaning": "school",
    "id": 29
  },
  {
    "level": "N5",
    "kanji": "月",
    "word": "月曜日",
    "reading": "げつようび",
    "meaning": "Monday",
    "id": 30
  },
  {
    "level": "N5",
    "kanji": "何",
    "word": "何",
    "reading": "なに",
    "meaning": "what",
    "id": 31
  },
  {
    "level": "N5",
    "kanji": "来",
    "word": "来る",
    "reading": "くる",
    "meaning": "come",
    "id": 32
  },
  {
    "level": "N5",
    "kanji": "話",
    "word": "話す",
    "reading": "はなす",
    "meaning": "speak",
    "id": 33
  },
  {
    "level": "N5",
    "kanji": "山",
    "word": "山",
    "reading": "やま",
    "meaning": "mountain",
    "id": 34
  },
  {
    "level": "N5",
    "kanji": "高",
    "word": "高い",
    "reading": "たかい",
    "meaning": "high or expensive",
    "id": 35
  },
  {
    "level": "N5",
    "kanji": "今",
    "word": "今",
    "reading": "いま",
    "meaning": "now",
    "id": 36
  },
  {
    "level": "N5",
    "kanji": "書",
    "word": "書く",
    "reading": "かく",
    "meaning": "write",
    "id": 37
  },
  {
    "level": "N5",
    "kanji": "五",
    "word": "五つ",
    "reading": "いつつ",
    "meaning": "five items",
    "id": 38
  },
  {
    "level": "N5",
    "kanji": "名",
    "word": "名前",
    "reading": "なまえ",
    "meaning": "name",
    "id": 39
  },
  {
    "level": "N5",
    "kanji": "金",
    "word": "お金",
    "reading": "おかね",
    "meaning": "money",
    "id": 40
  },
  {
    "level": "N5",
    "kanji": "男",
    "word": "男の人",
    "reading": "おとこのひと",
    "meaning": "man",
    "id": 41
  },
  {
    "level": "N5",
    "kanji": "外",
    "word": "外",
    "reading": "そと",
    "meaning": "outside",
    "id": 42
  },
  {
    "level": "N5",
    "kanji": "四",
    "word": "四つ",
    "reading": "よっつ",
    "meaning": "four items",
    "id": 43
  },
  {
    "level": "N5",
    "kanji": "先",
    "word": "先生",
    "reading": "せんせい",
    "meaning": "teacher",
    "id": 44
  },
  {
    "level": "N5",
    "kanji": "川",
    "word": "川",
    "reading": "かわ",
    "meaning": "river",
    "id": 45
  },
  {
    "level": "N5",
    "kanji": "東",
    "word": "東",
    "reading": "ひがし",
    "meaning": "east",
    "id": 46
  },
  {
    "level": "N5",
    "kanji": "聞",
    "word": "聞く",
    "reading": "きく",
    "meaning": "hear or ask",
    "id": 47
  },
  {
    "level": "N5",
    "kanji": "語",
    "word": "日本語",
    "reading": "にほんご",
    "meaning": "Japanese language",
    "id": 48
  },
  {
    "level": "N5",
    "kanji": "九",
    "word": "九つ",
    "reading": "ここのつ",
    "meaning": "nine items",
    "id": 49
  },
  {
    "level": "N5",
    "kanji": "食",
    "word": "食べる",
    "reading": "たべる",
    "meaning": "eat",
    "id": 50
  },
  {
    "level": "N5",
    "kanji": "八",
    "word": "八つ",
    "reading": "やっつ",
    "meaning": "eight items",
    "id": 51
  },
  {
    "level": "N5",
    "kanji": "水",
    "word": "水",
    "reading": "みず",
    "meaning": "water",
    "id": 52
  },
  {
    "level": "N5",
    "kanji": "天",
    "word": "天気",
    "reading": "てんき",
    "meaning": "weather",
    "id": 53
  },
  {
    "level": "N5",
    "kanji": "木",
    "word": "木",
    "reading": "き",
    "meaning": "tree",
    "id": 54
  },
  {
    "level": "N5",
    "kanji": "六",
    "word": "六つ",
    "reading": "むっつ",
    "meaning": "six items",
    "id": 55
  },
  {
    "level": "N5",
    "kanji": "万",
    "word": "一万",
    "reading": "いちまん",
    "meaning": "ten thousand",
    "id": 56
  },
  {
    "level": "N5",
    "kanji": "白",
    "word": "白い",
    "reading": "しろい",
    "meaning": "white",
    "id": 57
  },
  {
    "level": "N5",
    "kanji": "七",
    "word": "七つ",
    "reading": "ななつ",
    "meaning": "seven items",
    "id": 58
  },
  {
    "level": "N5",
    "kanji": "円",
    "word": "百円",
    "reading": "ひゃくえん",
    "meaning": "one hundred yen",
    "id": 59
  },
  {
    "level": "N5",
    "kanji": "電",
    "word": "電車",
    "reading": "でんしゃ",
    "meaning": "train",
    "id": 60
  },
  {
    "level": "N5",
    "kanji": "父",
    "word": "父",
    "reading": "ちち",
    "meaning": "my father",
    "id": 61
  },
  {
    "level": "N5",
    "kanji": "北",
    "word": "北",
    "reading": "きた",
    "meaning": "north",
    "id": 62
  },
  {
    "level": "N5",
    "kanji": "車",
    "word": "車",
    "reading": "くるま",
    "meaning": "car",
    "id": 63
  },
  {
    "level": "N5",
    "kanji": "母",
    "word": "母",
    "reading": "はは",
    "meaning": "my mother",
    "id": 64
  },
  {
    "level": "N5",
    "kanji": "半",
    "word": "半分",
    "reading": "はんぶん",
    "meaning": "half",
    "id": 65
  },
  {
    "level": "N5",
    "kanji": "百",
    "word": "百",
    "reading": "ひゃく",
    "meaning": "one hundred",
    "id": 66
  },
  {
    "level": "N5",
    "kanji": "土",
    "word": "土曜日",
    "reading": "どようび",
    "meaning": "Saturday",
    "id": 67
  },
  {
    "level": "N5",
    "kanji": "西",
    "word": "西",
    "reading": "にし",
    "meaning": "west",
    "id": 68
  },
  {
    "level": "N5",
    "kanji": "読",
    "word": "読む",
    "reading": "よむ",
    "meaning": "read",
    "id": 69
  },
  {
    "level": "N5",
    "kanji": "千",
    "word": "千",
    "reading": "せん",
    "meaning": "one thousand",
    "id": 70
  },
  {
    "level": "N5",
    "kanji": "校",
    "word": "高校",
    "reading": "こうこう",
    "meaning": "high school",
    "id": 71
  },
  {
    "level": "N5",
    "kanji": "右",
    "word": "右",
    "reading": "みぎ",
    "meaning": "right",
    "id": 72
  },
  {
    "level": "N5",
    "kanji": "南",
    "word": "南",
    "reading": "みなみ",
    "meaning": "south",
    "id": 73
  },
  {
    "level": "N5",
    "kanji": "左",
    "word": "左",
    "reading": "ひだり",
    "meaning": "left",
    "id": 74
  },
  {
    "level": "N5",
    "kanji": "友",
    "word": "友達",
    "reading": "ともだち",
    "meaning": "friend",
    "id": 75
  },
  {
    "level": "N5",
    "kanji": "火",
    "word": "火",
    "reading": "ひ",
    "meaning": "fire",
    "id": 76
  },
  {
    "level": "N5",
    "kanji": "毎",
    "word": "毎日",
    "reading": "まいにち",
    "meaning": "every day",
    "id": 77
  },
  {
    "level": "N5",
    "kanji": "雨",
    "word": "雨",
    "reading": "あめ",
    "meaning": "rain",
    "id": 78
  },
  {
    "level": "N5",
    "kanji": "休",
    "word": "休む",
    "reading": "やすむ",
    "meaning": "rest or be absent",
    "id": 79
  },
  {
    "level": "N5",
    "kanji": "午",
    "word": "午後",
    "reading": "ごご",
    "meaning": "afternoon",
    "id": 80
  },
  {
    "level": "N4",
    "kanji": "言",
    "word": "言う",
    "reading": "いう",
    "meaning": "say",
    "id": 81
  },
  {
    "level": "N4",
    "kanji": "手",
    "word": "手",
    "reading": "て",
    "meaning": "hand",
    "id": 82
  },
  {
    "level": "N4",
    "kanji": "自",
    "word": "自分",
    "reading": "じぶん",
    "meaning": "oneself",
    "id": 83
  },
  {
    "level": "N4",
    "kanji": "者",
    "word": "医者",
    "reading": "いしゃ",
    "meaning": "doctor",
    "id": 84
  },
  {
    "level": "N4",
    "kanji": "事",
    "word": "仕事",
    "reading": "しごと",
    "meaning": "work",
    "id": 85
  },
  {
    "level": "N4",
    "kanji": "思",
    "word": "思う",
    "reading": "おもう",
    "meaning": "think",
    "id": 86
  },
  {
    "level": "N4",
    "kanji": "会",
    "word": "会社",
    "reading": "かいしゃ",
    "meaning": "company",
    "id": 87
  },
  {
    "level": "N4",
    "kanji": "家",
    "word": "家",
    "reading": "いえ",
    "meaning": "house",
    "id": 88
  },
  {
    "level": "N4",
    "kanji": "的",
    "word": "目的",
    "reading": "もくてき",
    "meaning": "purpose",
    "id": 89
  },
  {
    "level": "N4",
    "kanji": "方",
    "word": "使い方",
    "reading": "つかいかた",
    "meaning": "how to use",
    "id": 90
  },
  {
    "level": "N4",
    "kanji": "地",
    "word": "地図",
    "reading": "ちず",
    "meaning": "map",
    "id": 91
  },
  {
    "level": "N4",
    "kanji": "目",
    "word": "目",
    "reading": "め",
    "meaning": "eye",
    "id": 92
  },
  {
    "level": "N4",
    "kanji": "場",
    "word": "場所",
    "reading": "ばしょ",
    "meaning": "place",
    "id": 93
  },
  {
    "level": "N4",
    "kanji": "代",
    "word": "時代",
    "reading": "じだい",
    "meaning": "era",
    "id": 94
  },
  {
    "level": "N4",
    "kanji": "私",
    "word": "私",
    "reading": "わたし",
    "meaning": "I",
    "id": 95
  },
  {
    "level": "N4",
    "kanji": "立",
    "word": "立つ",
    "reading": "たつ",
    "meaning": "stand",
    "id": 96
  },
  {
    "level": "N4",
    "kanji": "物",
    "word": "買い物",
    "reading": "かいもの",
    "meaning": "shopping",
    "id": 97
  },
  {
    "level": "N4",
    "kanji": "田",
    "word": "田んぼ",
    "reading": "たんぼ",
    "meaning": "rice field",
    "id": 98
  },
  {
    "level": "N4",
    "kanji": "体",
    "word": "体",
    "reading": "からだ",
    "meaning": "body",
    "id": 99
  },
  {
    "level": "N4",
    "kanji": "動",
    "word": "動く",
    "reading": "うごく",
    "meaning": "move",
    "id": 100
  },
  {
    "level": "N4",
    "kanji": "社",
    "word": "社会",
    "reading": "しゃかい",
    "meaning": "society",
    "id": 101
  },
  {
    "level": "N4",
    "kanji": "知",
    "word": "知る",
    "reading": "しる",
    "meaning": "get to know",
    "id": 102
  },
  {
    "level": "N4",
    "kanji": "理",
    "word": "理由",
    "reading": "りゆう",
    "meaning": "reason",
    "id": 103
  },
  {
    "level": "N4",
    "kanji": "同",
    "word": "同じ",
    "reading": "おなじ",
    "meaning": "same",
    "id": 104
  },
  {
    "level": "N4",
    "kanji": "心",
    "word": "心",
    "reading": "こころ",
    "meaning": "heart or mind",
    "id": 105
  },
  {
    "level": "N4",
    "kanji": "発",
    "word": "出発",
    "reading": "しゅっぱつ",
    "meaning": "departure",
    "id": 106
  },
  {
    "level": "N4",
    "kanji": "作",
    "word": "作る",
    "reading": "つくる",
    "meaning": "make",
    "id": 107
  },
  {
    "level": "N4",
    "kanji": "新",
    "word": "新しい",
    "reading": "あたらしい",
    "meaning": "new",
    "id": 108
  },
  {
    "level": "N4",
    "kanji": "世",
    "word": "世界",
    "reading": "せかい",
    "meaning": "world",
    "id": 109
  },
  {
    "level": "N4",
    "kanji": "度",
    "word": "今度",
    "reading": "こんど",
    "meaning": "this time or next time",
    "id": 110
  },
  {
    "level": "N4",
    "kanji": "明",
    "word": "明るい",
    "reading": "あかるい",
    "meaning": "bright",
    "id": 111
  },
  {
    "level": "N4",
    "kanji": "力",
    "word": "力",
    "reading": "ちから",
    "meaning": "strength",
    "id": 112
  },
  {
    "level": "N4",
    "kanji": "意",
    "word": "意味",
    "reading": "いみ",
    "meaning": "meaning",
    "id": 113
  },
  {
    "level": "N4",
    "kanji": "用",
    "word": "用事",
    "reading": "ようじ",
    "meaning": "errand or business",
    "id": 114
  },
  {
    "level": "N4",
    "kanji": "主",
    "word": "主人",
    "reading": "しゅじん",
    "meaning": "husband or master",
    "id": 115
  },
  {
    "level": "N4",
    "kanji": "通",
    "word": "通る",
    "reading": "とおる",
    "meaning": "pass through",
    "id": 116
  },
  {
    "level": "N4",
    "kanji": "文",
    "word": "作文",
    "reading": "さくぶん",
    "meaning": "composition",
    "id": 117
  },
  {
    "level": "N4",
    "kanji": "屋",
    "word": "部屋",
    "reading": "へや",
    "meaning": "room",
    "id": 118
  },
  {
    "level": "N4",
    "kanji": "業",
    "word": "授業",
    "reading": "じゅぎょう",
    "meaning": "class lesson",
    "id": 119
  },
  {
    "level": "N4",
    "kanji": "持",
    "word": "持つ",
    "reading": "もつ",
    "meaning": "hold or carry",
    "id": 120
  },
  {
    "level": "N4",
    "kanji": "道",
    "word": "道",
    "reading": "みち",
    "meaning": "road",
    "id": 121
  },
  {
    "level": "N4",
    "kanji": "身",
    "word": "身長",
    "reading": "しんちょう",
    "meaning": "height of a person",
    "id": 122
  },
  {
    "level": "N4",
    "kanji": "不",
    "word": "不便",
    "reading": "ふべん",
    "meaning": "inconvenient",
    "id": 123
  },
  {
    "level": "N4",
    "kanji": "口",
    "word": "口",
    "reading": "くち",
    "meaning": "mouth",
    "id": 124
  },
  {
    "level": "N4",
    "kanji": "多",
    "word": "多い",
    "reading": "おおい",
    "meaning": "many",
    "id": 125
  },
  {
    "level": "N4",
    "kanji": "野",
    "word": "野菜",
    "reading": "やさい",
    "meaning": "vegetables",
    "id": 126
  },
  {
    "level": "N4",
    "kanji": "考",
    "word": "考える",
    "reading": "かんがえる",
    "meaning": "consider",
    "id": 127
  },
  {
    "level": "N4",
    "kanji": "開",
    "word": "開ける",
    "reading": "あける",
    "meaning": "open something",
    "id": 128
  },
  {
    "level": "N4",
    "kanji": "教",
    "word": "教える",
    "reading": "おしえる",
    "meaning": "teach",
    "id": 129
  },
  {
    "level": "N4",
    "kanji": "近",
    "word": "近い",
    "reading": "ちかい",
    "meaning": "near",
    "id": 130
  },
  {
    "level": "N4",
    "kanji": "以",
    "word": "以上",
    "reading": "いじょう",
    "meaning": "at least or more than the stated amount",
    "id": 131
  },
  {
    "level": "N4",
    "kanji": "問",
    "word": "質問",
    "reading": "しつもん",
    "meaning": "question",
    "id": 132
  },
  {
    "level": "N4",
    "kanji": "正",
    "word": "正しい",
    "reading": "ただしい",
    "meaning": "correct",
    "id": 133
  },
  {
    "level": "N4",
    "kanji": "真",
    "word": "写真",
    "reading": "しゃしん",
    "meaning": "photograph",
    "id": 134
  },
  {
    "level": "N4",
    "kanji": "味",
    "word": "味",
    "reading": "あじ",
    "meaning": "taste",
    "id": 135
  },
  {
    "level": "N4",
    "kanji": "界",
    "word": "業界",
    "reading": "ぎょうかい",
    "meaning": "industry sector",
    "id": 136
  },
  {
    "level": "N4",
    "kanji": "無",
    "word": "無理",
    "reading": "むり",
    "meaning": "unreasonable or impossible",
    "id": 137
  },
  {
    "level": "N4",
    "kanji": "少",
    "word": "少ない",
    "reading": "すくない",
    "meaning": "few",
    "id": 138
  },
  {
    "level": "N4",
    "kanji": "海",
    "word": "海",
    "reading": "うみ",
    "meaning": "sea",
    "id": 139
  },
  {
    "level": "N4",
    "kanji": "切",
    "word": "切る",
    "reading": "きる",
    "meaning": "cut",
    "id": 140
  },
  {
    "level": "N4",
    "kanji": "重",
    "word": "重い",
    "reading": "おもい",
    "meaning": "heavy",
    "id": 141
  },
  {
    "level": "N4",
    "kanji": "集",
    "word": "集まる",
    "reading": "あつまる",
    "meaning": "gather",
    "id": 142
  },
  {
    "level": "N4",
    "kanji": "員",
    "word": "店員",
    "reading": "てんいん",
    "meaning": "shop assistant",
    "id": 143
  },
  {
    "level": "N4",
    "kanji": "公",
    "word": "公園",
    "reading": "こうえん",
    "meaning": "park",
    "id": 144
  },
  {
    "level": "N4",
    "kanji": "画",
    "word": "映画",
    "reading": "えいが",
    "meaning": "film",
    "id": 145
  },
  {
    "level": "N4",
    "kanji": "死",
    "word": "死ぬ",
    "reading": "しぬ",
    "meaning": "die",
    "id": 146
  },
  {
    "level": "N4",
    "kanji": "安",
    "word": "安い",
    "reading": "やすい",
    "meaning": "inexpensive",
    "id": 147
  },
  {
    "level": "N4",
    "kanji": "親",
    "word": "親",
    "reading": "おや",
    "meaning": "parent",
    "id": 148
  },
  {
    "level": "N4",
    "kanji": "強",
    "word": "強い",
    "reading": "つよい",
    "meaning": "strong",
    "id": 149
  },
  {
    "level": "N4",
    "kanji": "使",
    "word": "使う",
    "reading": "つかう",
    "meaning": "use",
    "id": 150
  },
  {
    "level": "N4",
    "kanji": "朝",
    "word": "朝",
    "reading": "あさ",
    "meaning": "morning",
    "id": 151
  },
  {
    "level": "N4",
    "kanji": "題",
    "word": "宿題",
    "reading": "しゅくだい",
    "meaning": "homework",
    "id": 152
  },
  {
    "level": "N4",
    "kanji": "仕",
    "word": "仕方",
    "reading": "しかた",
    "meaning": "way or method",
    "id": 153
  },
  {
    "level": "N4",
    "kanji": "京",
    "word": "東京",
    "reading": "とうきょう",
    "meaning": "Tokyo",
    "id": 154
  },
  {
    "level": "N4",
    "kanji": "足",
    "word": "足",
    "reading": "あし",
    "meaning": "foot or leg",
    "id": 155
  },
  {
    "level": "N4",
    "kanji": "品",
    "word": "品物",
    "reading": "しなもの",
    "meaning": "goods",
    "id": 156
  },
  {
    "level": "N4",
    "kanji": "着",
    "word": "着る",
    "reading": "きる",
    "meaning": "wear on the upper body",
    "id": 157
  },
  {
    "level": "N4",
    "kanji": "別",
    "word": "別々",
    "reading": "べつべつ",
    "meaning": "separate",
    "id": 158
  },
  {
    "level": "N4",
    "kanji": "音",
    "word": "音",
    "reading": "おと",
    "meaning": "sound",
    "id": 159
  },
  {
    "level": "N4",
    "kanji": "元",
    "word": "元日",
    "reading": "がんじつ",
    "meaning": "New Year's Day",
    "id": 160
  },
  {
    "level": "N4",
    "kanji": "特",
    "word": "特別",
    "reading": "とくべつ",
    "meaning": "special",
    "id": 161
  },
  {
    "level": "N4",
    "kanji": "風",
    "word": "風",
    "reading": "かぜ",
    "meaning": "wind",
    "id": 162
  },
  {
    "level": "N4",
    "kanji": "夜",
    "word": "夜",
    "reading": "よる",
    "meaning": "night",
    "id": 163
  },
  {
    "level": "N4",
    "kanji": "空",
    "word": "空",
    "reading": "そら",
    "meaning": "sky",
    "id": 164
  },
  {
    "level": "N4",
    "kanji": "有",
    "word": "有名",
    "reading": "ゆうめい",
    "meaning": "famous",
    "id": 165
  },
  {
    "level": "N4",
    "kanji": "起",
    "word": "起きる",
    "reading": "おきる",
    "meaning": "get up",
    "id": 166
  },
  {
    "level": "N4",
    "kanji": "運",
    "word": "運転",
    "reading": "うんてん",
    "meaning": "driving",
    "id": 167
  },
  {
    "level": "N4",
    "kanji": "料",
    "word": "料理",
    "reading": "りょうり",
    "meaning": "cooking or cuisine",
    "id": 168
  },
  {
    "level": "N4",
    "kanji": "楽",
    "word": "楽しい",
    "reading": "たのしい",
    "meaning": "enjoyable",
    "id": 169
  },
  {
    "level": "N4",
    "kanji": "色",
    "word": "色",
    "reading": "いろ",
    "meaning": "colour",
    "id": 170
  },
  {
    "level": "N4",
    "kanji": "帰",
    "word": "帰る",
    "reading": "かえる",
    "meaning": "return home",
    "id": 171
  },
  {
    "level": "N4",
    "kanji": "歩",
    "word": "歩く",
    "reading": "あるく",
    "meaning": "walk",
    "id": 172
  },
  {
    "level": "N4",
    "kanji": "悪",
    "word": "悪い",
    "reading": "わるい",
    "meaning": "bad",
    "id": 173
  },
  {
    "level": "N4",
    "kanji": "広",
    "word": "広い",
    "reading": "ひろい",
    "meaning": "spacious",
    "id": 174
  },
  {
    "level": "N4",
    "kanji": "店",
    "word": "店",
    "reading": "みせ",
    "meaning": "shop",
    "id": 175
  },
  {
    "level": "N4",
    "kanji": "町",
    "word": "町",
    "reading": "まち",
    "meaning": "town",
    "id": 176
  },
  {
    "level": "N4",
    "kanji": "住",
    "word": "住む",
    "reading": "すむ",
    "meaning": "live or reside",
    "id": 177
  },
  {
    "level": "N4",
    "kanji": "売",
    "word": "売る",
    "reading": "うる",
    "meaning": "sell",
    "id": 178
  },
  {
    "level": "N4",
    "kanji": "待",
    "word": "待つ",
    "reading": "まつ",
    "meaning": "wait",
    "id": 179
  },
  {
    "level": "N4",
    "kanji": "古",
    "word": "古い",
    "reading": "ふるい",
    "meaning": "old",
    "id": 180
  },
  {
    "level": "N4",
    "kanji": "始",
    "word": "始まる",
    "reading": "はじまる",
    "meaning": "begin",
    "id": 181
  },
  {
    "level": "N4",
    "kanji": "終",
    "word": "終わる",
    "reading": "おわる",
    "meaning": "finish",
    "id": 182
  },
  {
    "level": "N4",
    "kanji": "計",
    "word": "時計",
    "reading": "とけい",
    "meaning": "clock or watch",
    "id": 183
  },
  {
    "level": "N4",
    "kanji": "院",
    "word": "病院",
    "reading": "びょういん",
    "meaning": "hospital",
    "id": 184
  },
  {
    "level": "N4",
    "kanji": "送",
    "word": "送る",
    "reading": "おくる",
    "meaning": "send",
    "id": 185
  },
  {
    "level": "N4",
    "kanji": "族",
    "word": "家族",
    "reading": "かぞく",
    "meaning": "family",
    "id": 186
  },
  {
    "level": "N4",
    "kanji": "映",
    "word": "映る",
    "reading": "うつる",
    "meaning": "appear on a screen or be reflected",
    "id": 187
  },
  {
    "level": "N4",
    "kanji": "買",
    "word": "買う",
    "reading": "かう",
    "meaning": "buy",
    "id": 188
  },
  {
    "level": "N4",
    "kanji": "病",
    "word": "病気",
    "reading": "びょうき",
    "meaning": "illness",
    "id": 189
  },
  {
    "level": "N4",
    "kanji": "早",
    "word": "早い",
    "reading": "はやい",
    "meaning": "early",
    "id": 190
  },
  {
    "level": "N4",
    "kanji": "質",
    "word": "品質",
    "reading": "ひんしつ",
    "meaning": "quality",
    "id": 191
  },
  {
    "level": "N4",
    "kanji": "台",
    "word": "台所",
    "reading": "だいどころ",
    "meaning": "kitchen",
    "id": 192
  },
  {
    "level": "N4",
    "kanji": "室",
    "word": "教室",
    "reading": "きょうしつ",
    "meaning": "classroom",
    "id": 193
  },
  {
    "level": "N4",
    "kanji": "可",
    "word": "可能",
    "reading": "かのう",
    "meaning": "possible",
    "id": 194
  },
  {
    "level": "N4",
    "kanji": "建",
    "word": "建てる",
    "reading": "たてる",
    "meaning": "build",
    "id": 195
  },
  {
    "level": "N4",
    "kanji": "転",
    "word": "自転車",
    "reading": "じてんしゃ",
    "meaning": "bicycle",
    "id": 196
  },
  {
    "level": "N4",
    "kanji": "医",
    "word": "医学",
    "reading": "いがく",
    "meaning": "medical science",
    "id": 197
  },
  {
    "level": "N4",
    "kanji": "止",
    "word": "止まる",
    "reading": "とまる",
    "meaning": "stop",
    "id": 198
  },
  {
    "level": "N4",
    "kanji": "字",
    "word": "漢字",
    "reading": "かんじ",
    "meaning": "kanji character",
    "id": 199
  },
  {
    "level": "N4",
    "kanji": "工",
    "word": "工場",
    "reading": "こうじょう",
    "meaning": "factory",
    "id": 200
  },
  {
    "level": "N4",
    "kanji": "急",
    "word": "急ぐ",
    "reading": "いそぐ",
    "meaning": "hurry",
    "id": 201
  },
  {
    "level": "N4",
    "kanji": "図",
    "word": "図書館",
    "reading": "としょかん",
    "meaning": "library",
    "id": 202
  },
  {
    "level": "N4",
    "kanji": "黒",
    "word": "黒い",
    "reading": "くろい",
    "meaning": "black",
    "id": 203
  },
  {
    "level": "N4",
    "kanji": "花",
    "word": "花",
    "reading": "はな",
    "meaning": "flower",
    "id": 204
  },
  {
    "level": "N4",
    "kanji": "英",
    "word": "英語",
    "reading": "えいご",
    "meaning": "English language",
    "id": 205
  },
  {
    "level": "N4",
    "kanji": "走",
    "word": "走る",
    "reading": "はしる",
    "meaning": "run",
    "id": 206
  },
  {
    "level": "N4",
    "kanji": "青",
    "word": "青い",
    "reading": "あおい",
    "meaning": "blue",
    "id": 207
  },
  {
    "level": "N4",
    "kanji": "答",
    "word": "答える",
    "reading": "こたえる",
    "meaning": "answer",
    "id": 208
  },
  {
    "level": "N4",
    "kanji": "紙",
    "word": "紙",
    "reading": "かみ",
    "meaning": "paper",
    "id": 209
  },
  {
    "level": "N4",
    "kanji": "歌",
    "word": "歌う",
    "reading": "うたう",
    "meaning": "sing",
    "id": 210
  },
  {
    "level": "N4",
    "kanji": "注",
    "word": "注意",
    "reading": "ちゅうい",
    "meaning": "attention or caution",
    "id": 211
  },
  {
    "level": "N4",
    "kanji": "赤",
    "word": "赤い",
    "reading": "あかい",
    "meaning": "red",
    "id": 212
  },
  {
    "level": "N4",
    "kanji": "春",
    "word": "春",
    "reading": "はる",
    "meaning": "spring",
    "id": 213
  },
  {
    "level": "N4",
    "kanji": "館",
    "word": "旅館",
    "reading": "りょかん",
    "meaning": "Japanese inn",
    "id": 214
  },
  {
    "level": "N4",
    "kanji": "旅",
    "word": "旅行",
    "reading": "りょこう",
    "meaning": "travel",
    "id": 215
  },
  {
    "level": "N4",
    "kanji": "験",
    "word": "経験",
    "reading": "けいけん",
    "meaning": "experience",
    "id": 216
  },
  {
    "level": "N4",
    "kanji": "写",
    "word": "写す",
    "reading": "うつす",
    "meaning": "copy or photograph",
    "id": 217
  },
  {
    "level": "N4",
    "kanji": "去",
    "word": "去年",
    "reading": "きょねん",
    "meaning": "last year",
    "id": 218
  },
  {
    "level": "N4",
    "kanji": "研",
    "word": "研究",
    "reading": "けんきゅう",
    "meaning": "research",
    "id": 219
  },
  {
    "level": "N4",
    "kanji": "飲",
    "word": "飲む",
    "reading": "のむ",
    "meaning": "drink",
    "id": 220
  },
  {
    "level": "N4",
    "kanji": "肉",
    "word": "肉",
    "reading": "にく",
    "meaning": "meat",
    "id": 221
  },
  {
    "level": "N4",
    "kanji": "服",
    "word": "服",
    "reading": "ふく",
    "meaning": "clothes",
    "id": 222
  },
  {
    "level": "N4",
    "kanji": "銀",
    "word": "銀行",
    "reading": "ぎんこう",
    "meaning": "bank",
    "id": 223
  },
  {
    "level": "N4",
    "kanji": "茶",
    "word": "お茶",
    "reading": "おちゃ",
    "meaning": "tea",
    "id": 224
  },
  {
    "level": "N4",
    "kanji": "究",
    "word": "究める",
    "reading": "きわめる",
    "meaning": "study thoroughly",
    "id": 225
  },
  {
    "level": "N4",
    "kanji": "洋",
    "word": "洋服",
    "reading": "ようふく",
    "meaning": "Western style clothes",
    "id": 226
  },
  {
    "level": "N4",
    "kanji": "兄",
    "word": "兄",
    "reading": "あに",
    "meaning": "my older brother",
    "id": 227
  },
  {
    "level": "N4",
    "kanji": "秋",
    "word": "秋",
    "reading": "あき",
    "meaning": "autumn",
    "id": 228
  },
  {
    "level": "N4",
    "kanji": "堂",
    "word": "食堂",
    "reading": "しょくどう",
    "meaning": "dining hall",
    "id": 229
  },
  {
    "level": "N4",
    "kanji": "週",
    "word": "来週",
    "reading": "らいしゅう",
    "meaning": "next week",
    "id": 230
  },
  {
    "level": "N4",
    "kanji": "習",
    "word": "習う",
    "reading": "ならう",
    "meaning": "learn from someone",
    "id": 231
  },
  {
    "level": "N4",
    "kanji": "試",
    "word": "試験",
    "reading": "しけん",
    "meaning": "examination",
    "id": 232
  },
  {
    "level": "N4",
    "kanji": "夏",
    "word": "夏",
    "reading": "なつ",
    "meaning": "summer",
    "id": 233
  },
  {
    "level": "N4",
    "kanji": "弟",
    "word": "弟",
    "reading": "おとうと",
    "meaning": "my younger brother",
    "id": 234
  },
  {
    "level": "N4",
    "kanji": "鳥",
    "word": "鳥",
    "reading": "とり",
    "meaning": "bird",
    "id": 235
  },
  {
    "level": "N4",
    "kanji": "犬",
    "word": "犬",
    "reading": "いぬ",
    "meaning": "dog",
    "id": 236
  },
  {
    "level": "N4",
    "kanji": "夕",
    "word": "夕方",
    "reading": "ゆうがた",
    "meaning": "early evening",
    "id": 237
  },
  {
    "level": "N4",
    "kanji": "魚",
    "word": "魚",
    "reading": "さかな",
    "meaning": "fish",
    "id": 238
  },
  {
    "level": "N4",
    "kanji": "借",
    "word": "借りる",
    "reading": "かりる",
    "meaning": "borrow",
    "id": 239
  },
  {
    "level": "N4",
    "kanji": "飯",
    "word": "ご飯",
    "reading": "ごはん",
    "meaning": "rice or meal",
    "id": 240
  },
  {
    "level": "N4",
    "kanji": "駅",
    "word": "駅",
    "reading": "えき",
    "meaning": "station",
    "id": 241
  },
  {
    "level": "N4",
    "kanji": "昼",
    "word": "昼",
    "reading": "ひる",
    "meaning": "daytime or noon",
    "id": 242
  },
  {
    "level": "N4",
    "kanji": "冬",
    "word": "冬",
    "reading": "ふゆ",
    "meaning": "winter",
    "id": 243
  },
  {
    "level": "N4",
    "kanji": "姉",
    "word": "姉",
    "reading": "あね",
    "meaning": "my older sister",
    "id": 244
  },
  {
    "level": "N4",
    "kanji": "曜",
    "word": "日曜日",
    "reading": "にちようび",
    "meaning": "Sunday",
    "id": 245
  },
  {
    "level": "N4",
    "kanji": "漢",
    "word": "漢字",
    "reading": "かんじ",
    "meaning": "kanji character",
    "id": 246
  },
  {
    "level": "N4",
    "kanji": "牛",
    "word": "牛乳",
    "reading": "ぎゅうにゅう",
    "meaning": "milk",
    "id": 247
  },
  {
    "level": "N4",
    "kanji": "妹",
    "word": "妹",
    "reading": "いもうと",
    "meaning": "my younger sister",
    "id": 248
  },
  {
    "level": "N4",
    "kanji": "貸",
    "word": "貸す",
    "reading": "かす",
    "meaning": "lend",
    "id": 249
  },
  {
    "level": "N4",
    "kanji": "勉",
    "word": "勉強",
    "reading": "べんきょう",
    "meaning": "study",
    "id": 250
  },
  {
    "level": "N3",
    "kanji": "合",
    "word": "合う",
    "reading": "あう",
    "meaning": "fit or match",
    "id": 251
  },
  {
    "level": "N3",
    "kanji": "部",
    "word": "部分",
    "reading": "ぶぶん",
    "meaning": "part or section",
    "id": 252
  },
  {
    "level": "N3",
    "kanji": "彼",
    "word": "彼",
    "reading": "かれ",
    "meaning": "he or boyfriend",
    "id": 253
  },
  {
    "level": "N3",
    "kanji": "内",
    "word": "内容",
    "reading": "ないよう",
    "meaning": "content",
    "id": 254
  },
  {
    "level": "N3",
    "kanji": "実",
    "word": "実は",
    "reading": "じつは",
    "meaning": "actually",
    "id": 255
  },
  {
    "level": "N3",
    "kanji": "当",
    "word": "本当",
    "reading": "ほんとう",
    "meaning": "truth or really",
    "id": 256
  },
  {
    "level": "N3",
    "kanji": "戦",
    "word": "戦争",
    "reading": "せんそう",
    "meaning": "war",
    "id": 257
  },
  {
    "level": "N3",
    "kanji": "性",
    "word": "性格",
    "reading": "せいかく",
    "meaning": "personality",
    "id": 258
  },
  {
    "level": "N3",
    "kanji": "対",
    "word": "反対",
    "reading": "はんたい",
    "meaning": "opposition or opposite",
    "id": 259
  },
  {
    "level": "N3",
    "kanji": "関",
    "word": "関係",
    "reading": "かんけい",
    "meaning": "relationship",
    "id": 260
  },
  {
    "level": "N3",
    "kanji": "感",
    "word": "感じる",
    "reading": "かんじる",
    "meaning": "feel",
    "id": 261
  },
  {
    "level": "N3",
    "kanji": "定",
    "word": "予定",
    "reading": "よてい",
    "meaning": "plan or schedule",
    "id": 262
  },
  {
    "level": "N3",
    "kanji": "政",
    "word": "政治",
    "reading": "せいじ",
    "meaning": "politics",
    "id": 263
  },
  {
    "level": "N3",
    "kanji": "取",
    "word": "取る",
    "reading": "とる",
    "meaning": "take",
    "id": 264
  },
  {
    "level": "N3",
    "kanji": "所",
    "word": "近所",
    "reading": "きんじょ",
    "meaning": "neighbourhood",
    "id": 265
  },
  {
    "level": "N3",
    "kanji": "現",
    "word": "現在",
    "reading": "げんざい",
    "meaning": "present time",
    "id": 266
  },
  {
    "level": "N3",
    "kanji": "最",
    "word": "最近",
    "reading": "さいきん",
    "meaning": "recently",
    "id": 267
  },
  {
    "level": "N3",
    "kanji": "化",
    "word": "文化",
    "reading": "ぶんか",
    "meaning": "culture",
    "id": 268
  },
  {
    "level": "N3",
    "kanji": "民",
    "word": "市民",
    "reading": "しみん",
    "meaning": "citizen",
    "id": 269
  },
  {
    "level": "N3",
    "kanji": "相",
    "word": "相談",
    "reading": "そうだん",
    "meaning": "consultation",
    "id": 270
  },
  {
    "level": "N3",
    "kanji": "法",
    "word": "方法",
    "reading": "ほうほう",
    "meaning": "method",
    "id": 271
  },
  {
    "level": "N3",
    "kanji": "全",
    "word": "全部",
    "reading": "ぜんぶ",
    "meaning": "all",
    "id": 272
  },
  {
    "level": "N3",
    "kanji": "情",
    "word": "情報",
    "reading": "じょうほう",
    "meaning": "information",
    "id": 273
  },
  {
    "level": "N3",
    "kanji": "向",
    "word": "向かう",
    "reading": "むかう",
    "meaning": "head toward",
    "id": 274
  },
  {
    "level": "N3",
    "kanji": "平",
    "word": "平日",
    "reading": "へいじつ",
    "meaning": "weekday",
    "id": 275
  },
  {
    "level": "N3",
    "kanji": "成",
    "word": "成功",
    "reading": "せいこう",
    "meaning": "success",
    "id": 276
  },
  {
    "level": "N3",
    "kanji": "経",
    "word": "経済",
    "reading": "けいざい",
    "meaning": "economy",
    "id": 277
  },
  {
    "level": "N3",
    "kanji": "信",
    "word": "信じる",
    "reading": "しんじる",
    "meaning": "believe",
    "id": 278
  },
  {
    "level": "N3",
    "kanji": "面",
    "word": "画面",
    "reading": "がめん",
    "meaning": "screen",
    "id": 279
  },
  {
    "level": "N3",
    "kanji": "連",
    "word": "連絡",
    "reading": "れんらく",
    "meaning": "contact",
    "id": 280
  },
  {
    "level": "N3",
    "kanji": "原",
    "word": "原因",
    "reading": "げんいん",
    "meaning": "cause",
    "id": 281
  },
  {
    "level": "N3",
    "kanji": "顔",
    "word": "顔",
    "reading": "かお",
    "meaning": "face",
    "id": 282
  },
  {
    "level": "N3",
    "kanji": "機",
    "word": "機会",
    "reading": "きかい",
    "meaning": "opportunity",
    "id": 283
  },
  {
    "level": "N3",
    "kanji": "次",
    "word": "次",
    "reading": "つぎ",
    "meaning": "next",
    "id": 284
  },
  {
    "level": "N3",
    "kanji": "数",
    "word": "数字",
    "reading": "すうじ",
    "meaning": "numeral",
    "id": 285
  },
  {
    "level": "N3",
    "kanji": "美",
    "word": "美しい",
    "reading": "うつくしい",
    "meaning": "beautiful",
    "id": 286
  },
  {
    "level": "N3",
    "kanji": "回",
    "word": "今回",
    "reading": "こんかい",
    "meaning": "this time",
    "id": 287
  },
  {
    "level": "N3",
    "kanji": "表",
    "word": "発表",
    "reading": "はっぴょう",
    "meaning": "presentation or announcement",
    "id": 288
  },
  {
    "level": "N3",
    "kanji": "声",
    "word": "声",
    "reading": "こえ",
    "meaning": "voice",
    "id": 289
  },
  {
    "level": "N3",
    "kanji": "報",
    "word": "報告",
    "reading": "ほうこく",
    "meaning": "report",
    "id": 290
  },
  {
    "level": "N3",
    "kanji": "要",
    "word": "必要",
    "reading": "ひつよう",
    "meaning": "necessary",
    "id": 291
  },
  {
    "level": "N3",
    "kanji": "変",
    "word": "変更",
    "reading": "へんこう",
    "meaning": "change or alteration",
    "id": 292
  },
  {
    "level": "N3",
    "kanji": "神",
    "word": "神社",
    "reading": "じんじゃ",
    "meaning": "Shinto shrine",
    "id": 293
  },
  {
    "level": "N3",
    "kanji": "記",
    "word": "日記",
    "reading": "にっき",
    "meaning": "diary",
    "id": 294
  },
  {
    "level": "N3",
    "kanji": "和",
    "word": "平和",
    "reading": "へいわ",
    "meaning": "peace",
    "id": 295
  },
  {
    "level": "N3",
    "kanji": "引",
    "word": "引く",
    "reading": "ひく",
    "meaning": "pull",
    "id": 296
  },
  {
    "level": "N3",
    "kanji": "治",
    "word": "治る",
    "reading": "なおる",
    "meaning": "recover or heal",
    "id": 297
  },
  {
    "level": "N3",
    "kanji": "決",
    "word": "決める",
    "reading": "きめる",
    "meaning": "decide",
    "id": 298
  },
  {
    "level": "N3",
    "kanji": "太",
    "word": "太い",
    "reading": "ふとい",
    "meaning": "thick",
    "id": 299
  },
  {
    "level": "N3",
    "kanji": "込",
    "word": "申し込む",
    "reading": "もうしこむ",
    "meaning": "apply or register",
    "id": 300
  },
  {
    "level": "N3",
    "kanji": "受",
    "word": "受ける",
    "reading": "うける",
    "meaning": "receive or take an exam",
    "id": 301
  },
  {
    "level": "N3",
    "kanji": "解",
    "word": "解く",
    "reading": "とく",
    "meaning": "solve",
    "id": 302
  },
  {
    "level": "N3",
    "kanji": "市",
    "word": "市場",
    "reading": "いちば",
    "meaning": "marketplace",
    "id": 303
  },
  {
    "level": "N3",
    "kanji": "期",
    "word": "期間",
    "reading": "きかん",
    "meaning": "period of time",
    "id": 304
  },
  {
    "level": "N3",
    "kanji": "様",
    "word": "様子",
    "reading": "ようす",
    "meaning": "state or appearance",
    "id": 305
  },
  {
    "level": "N3",
    "kanji": "活",
    "word": "生活",
    "reading": "せいかつ",
    "meaning": "daily life",
    "id": 306
  },
  {
    "level": "N3",
    "kanji": "頭",
    "word": "頭",
    "reading": "あたま",
    "meaning": "head",
    "id": 307
  },
  {
    "level": "N3",
    "kanji": "組",
    "word": "番組",
    "reading": "ばんぐみ",
    "meaning": "broadcast programme",
    "id": 308
  },
  {
    "level": "N3",
    "kanji": "指",
    "word": "指",
    "reading": "ゆび",
    "meaning": "finger",
    "id": 309
  },
  {
    "level": "N3",
    "kanji": "説",
    "word": "説明",
    "reading": "せつめい",
    "meaning": "explanation",
    "id": 310
  },
  {
    "level": "N3",
    "kanji": "能",
    "word": "能力",
    "reading": "のうりょく",
    "meaning": "ability",
    "id": 311
  },
  {
    "level": "N3",
    "kanji": "葉",
    "word": "言葉",
    "reading": "ことば",
    "meaning": "word or language",
    "id": 312
  },
  {
    "level": "N3",
    "kanji": "流",
    "word": "流れる",
    "reading": "ながれる",
    "meaning": "flow",
    "id": 313
  },
  {
    "level": "N3",
    "kanji": "然",
    "word": "自然",
    "reading": "しぜん",
    "meaning": "nature or natural",
    "id": 314
  },
  {
    "level": "N3",
    "kanji": "初",
    "word": "初めて",
    "reading": "はじめて",
    "meaning": "for the first time",
    "id": 315
  },
  {
    "level": "N3",
    "kanji": "在",
    "word": "存在",
    "reading": "そんざい",
    "meaning": "existence",
    "id": 316
  },
  {
    "level": "N3",
    "kanji": "調",
    "word": "調べる",
    "reading": "しらべる",
    "meaning": "investigate or look up",
    "id": 317
  },
  {
    "level": "N3",
    "kanji": "笑",
    "word": "笑う",
    "reading": "わらう",
    "meaning": "laugh or smile",
    "id": 318
  },
  {
    "level": "N3",
    "kanji": "議",
    "word": "会議",
    "reading": "かいぎ",
    "meaning": "meeting",
    "id": 319
  },
  {
    "level": "N3",
    "kanji": "直",
    "word": "直す",
    "reading": "なおす",
    "meaning": "correct or repair",
    "id": 320
  },
  {
    "level": "N3",
    "kanji": "夫",
    "word": "夫",
    "reading": "おっと",
    "meaning": "my husband",
    "id": 321
  },
  {
    "level": "N3",
    "kanji": "選",
    "word": "選ぶ",
    "reading": "えらぶ",
    "meaning": "choose",
    "id": 322
  },
  {
    "level": "N3",
    "kanji": "権",
    "word": "権利",
    "reading": "けんり",
    "meaning": "right or entitlement",
    "id": 323
  },
  {
    "level": "N3",
    "kanji": "利",
    "word": "便利",
    "reading": "べんり",
    "meaning": "convenient",
    "id": 324
  },
  {
    "level": "N3",
    "kanji": "制",
    "word": "制度",
    "reading": "せいど",
    "meaning": "system or institution",
    "id": 325
  },
  {
    "level": "N3",
    "kanji": "続",
    "word": "続ける",
    "reading": "つづける",
    "meaning": "continue something",
    "id": 326
  },
  {
    "level": "N3",
    "kanji": "石",
    "word": "石",
    "reading": "いし",
    "meaning": "stone",
    "id": 327
  },
  {
    "level": "N3",
    "kanji": "進",
    "word": "進む",
    "reading": "すすむ",
    "meaning": "advance",
    "id": 328
  },
  {
    "level": "N3",
    "kanji": "伝",
    "word": "伝える",
    "reading": "つたえる",
    "meaning": "convey",
    "id": 329
  },
  {
    "level": "N3",
    "kanji": "加",
    "word": "参加",
    "reading": "さんか",
    "meaning": "participation",
    "id": 330
  },
  {
    "level": "N3",
    "kanji": "助",
    "word": "助ける",
    "reading": "たすける",
    "meaning": "help",
    "id": 331
  },
  {
    "level": "N3",
    "kanji": "点",
    "word": "点数",
    "reading": "てんすう",
    "meaning": "score",
    "id": 332
  },
  {
    "level": "N3",
    "kanji": "産",
    "word": "生産",
    "reading": "せいさん",
    "meaning": "production",
    "id": 333
  },
  {
    "level": "N3",
    "kanji": "務",
    "word": "事務",
    "reading": "じむ",
    "meaning": "office work",
    "id": 334
  },
  {
    "level": "N3",
    "kanji": "件",
    "word": "条件",
    "reading": "じょうけん",
    "meaning": "condition",
    "id": 335
  },
  {
    "level": "N3",
    "kanji": "命",
    "word": "命",
    "reading": "いのち",
    "meaning": "life",
    "id": 336
  },
  {
    "level": "N3",
    "kanji": "番",
    "word": "順番",
    "reading": "じゅんばん",
    "meaning": "order or turn",
    "id": 337
  },
  {
    "level": "N3",
    "kanji": "落",
    "word": "落ちる",
    "reading": "おちる",
    "meaning": "fall",
    "id": 338
  },
  {
    "level": "N3",
    "kanji": "付",
    "word": "付ける",
    "reading": "つける",
    "meaning": "attach",
    "id": 339
  },
  {
    "level": "N3",
    "kanji": "得",
    "word": "得意",
    "reading": "とくい",
    "meaning": "good at",
    "id": 340
  },
  {
    "level": "N3",
    "kanji": "好",
    "word": "好み",
    "reading": "このみ",
    "meaning": "preference",
    "id": 341
  },
  {
    "level": "N3",
    "kanji": "違",
    "word": "違う",
    "reading": "ちがう",
    "meaning": "differ or be wrong",
    "id": 342
  },
  {
    "level": "N3",
    "kanji": "殺",
    "word": "殺す",
    "reading": "ころす",
    "meaning": "kill",
    "id": 343
  },
  {
    "level": "N3",
    "kanji": "置",
    "word": "置く",
    "reading": "おく",
    "meaning": "put or place",
    "id": 344
  },
  {
    "level": "N3",
    "kanji": "返",
    "word": "返す",
    "reading": "かえす",
    "meaning": "return something",
    "id": 345
  },
  {
    "level": "N3",
    "kanji": "論",
    "word": "議論",
    "reading": "ぎろん",
    "meaning": "discussion or debate",
    "id": 346
  },
  {
    "level": "N3",
    "kanji": "際",
    "word": "実際",
    "reading": "じっさい",
    "meaning": "actually or in practice",
    "id": 347
  },
  {
    "level": "N3",
    "kanji": "歳",
    "word": "二十歳",
    "reading": "はたち",
    "meaning": "twenty years old",
    "id": 348
  },
  {
    "level": "N3",
    "kanji": "反",
    "word": "反省",
    "reading": "はんせい",
    "meaning": "reflection on one's conduct",
    "id": 349
  },
  {
    "level": "N3",
    "kanji": "形",
    "word": "形",
    "reading": "かたち",
    "meaning": "shape",
    "id": 350
  },
  {
    "level": "N3",
    "kanji": "光",
    "word": "光",
    "reading": "ひかり",
    "meaning": "light",
    "id": 351
  },
  {
    "level": "N3",
    "kanji": "首",
    "word": "首",
    "reading": "くび",
    "meaning": "neck",
    "id": 352
  },
  {
    "level": "N3",
    "kanji": "勝",
    "word": "勝つ",
    "reading": "かつ",
    "meaning": "win",
    "id": 353
  },
  {
    "level": "N3",
    "kanji": "必",
    "word": "必ず",
    "reading": "かならず",
    "meaning": "without fail",
    "id": 354
  },
  {
    "level": "N3",
    "kanji": "係",
    "word": "係",
    "reading": "かかり",
    "meaning": "person in charge",
    "id": 355
  },
  {
    "level": "N3",
    "kanji": "由",
    "word": "自由",
    "reading": "じゆう",
    "meaning": "freedom",
    "id": 356
  },
  {
    "level": "N3",
    "kanji": "愛",
    "word": "愛情",
    "reading": "あいじょう",
    "meaning": "affection",
    "id": 357
  },
  {
    "level": "N3",
    "kanji": "都",
    "word": "都会",
    "reading": "とかい",
    "meaning": "city or urban area",
    "id": 358
  },
  {
    "level": "N3",
    "kanji": "放",
    "word": "放送",
    "reading": "ほうそう",
    "meaning": "broadcast",
    "id": 359
  },
  {
    "level": "N3",
    "kanji": "確",
    "word": "確かめる",
    "reading": "たしかめる",
    "meaning": "make sure",
    "id": 360
  },
  {
    "level": "N3",
    "kanji": "過",
    "word": "過ぎる",
    "reading": "すぎる",
    "meaning": "pass or exceed",
    "id": 361
  },
  {
    "level": "N3",
    "kanji": "約",
    "word": "約束",
    "reading": "やくそく",
    "meaning": "promise or appointment",
    "id": 362
  },
  {
    "level": "N3",
    "kanji": "馬",
    "word": "馬",
    "reading": "うま",
    "meaning": "horse",
    "id": 363
  },
  {
    "level": "N3",
    "kanji": "状",
    "word": "状況",
    "reading": "じょうきょう",
    "meaning": "situation",
    "id": 364
  },
  {
    "level": "N3",
    "kanji": "想",
    "word": "感想",
    "reading": "かんそう",
    "meaning": "impressions",
    "id": 365
  },
  {
    "level": "N3",
    "kanji": "官",
    "word": "警官",
    "reading": "けいかん",
    "meaning": "police officer",
    "id": 366
  },
  {
    "level": "N3",
    "kanji": "交",
    "word": "交通",
    "reading": "こうつう",
    "meaning": "traffic or transport",
    "id": 367
  },
  {
    "level": "N3",
    "kanji": "米",
    "word": "米",
    "reading": "こめ",
    "meaning": "uncooked rice",
    "id": 368
  },
  {
    "level": "N3",
    "kanji": "配",
    "word": "心配",
    "reading": "しんぱい",
    "meaning": "worry",
    "id": 369
  },
  {
    "level": "N3",
    "kanji": "若",
    "word": "若い",
    "reading": "わかい",
    "meaning": "young",
    "id": 370
  },
  {
    "level": "N3",
    "kanji": "資",
    "word": "資料",
    "reading": "しりょう",
    "meaning": "materials or documents",
    "id": 371
  },
  {
    "level": "N3",
    "kanji": "常",
    "word": "日常",
    "reading": "にちじょう",
    "meaning": "everyday life",
    "id": 372
  },
  {
    "level": "N3",
    "kanji": "果",
    "word": "結果",
    "reading": "けっか",
    "meaning": "result",
    "id": 373
  },
  {
    "level": "N3",
    "kanji": "呼",
    "word": "呼ぶ",
    "reading": "よぶ",
    "meaning": "call",
    "id": 374
  },
  {
    "level": "N3",
    "kanji": "共",
    "word": "共通",
    "reading": "きょうつう",
    "meaning": "shared or common",
    "id": 375
  },
  {
    "level": "N3",
    "kanji": "残",
    "word": "残る",
    "reading": "のこる",
    "meaning": "remain",
    "id": 376
  },
  {
    "level": "N3",
    "kanji": "判",
    "word": "判断",
    "reading": "はんだん",
    "meaning": "judgment",
    "id": 377
  },
  {
    "level": "N3",
    "kanji": "役",
    "word": "役に立つ",
    "reading": "やくにたつ",
    "meaning": "be useful",
    "id": 378
  },
  {
    "level": "N3",
    "kanji": "他",
    "word": "他",
    "reading": "ほか",
    "meaning": "other",
    "id": 379
  },
  {
    "level": "N3",
    "kanji": "術",
    "word": "手術",
    "reading": "しゅじゅつ",
    "meaning": "surgery",
    "id": 380
  },
  {
    "level": "N3",
    "kanji": "支",
    "word": "支える",
    "reading": "ささえる",
    "meaning": "support",
    "id": 381
  },
  {
    "level": "N3",
    "kanji": "両",
    "word": "両方",
    "reading": "りょうほう",
    "meaning": "both",
    "id": 382
  },
  {
    "level": "N3",
    "kanji": "乗",
    "word": "乗る",
    "reading": "のる",
    "meaning": "board or ride",
    "id": 383
  },
  {
    "level": "N3",
    "kanji": "済",
    "word": "済む",
    "reading": "すむ",
    "meaning": "be finished",
    "id": 384
  },
  {
    "level": "N3",
    "kanji": "供",
    "word": "子供",
    "reading": "こども",
    "meaning": "child",
    "id": 385
  },
  {
    "level": "N3",
    "kanji": "格",
    "word": "合格",
    "reading": "ごうかく",
    "meaning": "passing an exam",
    "id": 386
  },
  {
    "level": "N3",
    "kanji": "打",
    "word": "打つ",
    "reading": "うつ",
    "meaning": "hit or type",
    "id": 387
  },
  {
    "level": "N3",
    "kanji": "御",
    "word": "御礼",
    "reading": "おれい",
    "meaning": "thanks or gratitude",
    "id": 388
  },
  {
    "level": "N3",
    "kanji": "断",
    "word": "断る",
    "reading": "ことわる",
    "meaning": "refuse",
    "id": 389
  },
  {
    "level": "N3",
    "kanji": "式",
    "word": "式",
    "reading": "しき",
    "meaning": "ceremony or formula",
    "id": 390
  },
  {
    "level": "N3",
    "kanji": "師",
    "word": "教師",
    "reading": "きょうし",
    "meaning": "teacher",
    "id": 391
  },
  {
    "level": "N3",
    "kanji": "告",
    "word": "広告",
    "reading": "こうこく",
    "meaning": "advertisement",
    "id": 392
  },
  {
    "level": "N3",
    "kanji": "深",
    "word": "深い",
    "reading": "ふかい",
    "meaning": "deep",
    "id": 393
  },
  {
    "level": "N3",
    "kanji": "存",
    "word": "保存",
    "reading": "ほぞん",
    "meaning": "preservation or saving data",
    "id": 394
  },
  {
    "level": "N3",
    "kanji": "争",
    "word": "争う",
    "reading": "あらそう",
    "meaning": "compete or dispute",
    "id": 395
  },
  {
    "level": "N3",
    "kanji": "覚",
    "word": "覚える",
    "reading": "おぼえる",
    "meaning": "memorise",
    "id": 396
  },
  {
    "level": "N3",
    "kanji": "側",
    "word": "側",
    "reading": "がわ",
    "meaning": "side",
    "id": 397
  },
  {
    "level": "N3",
    "kanji": "飛",
    "word": "飛ぶ",
    "reading": "とぶ",
    "meaning": "fly",
    "id": 398
  },
  {
    "level": "N3",
    "kanji": "参",
    "word": "参る",
    "reading": "まいる",
    "meaning": "go or come humbly",
    "id": 399
  },
  {
    "level": "N3",
    "kanji": "突",
    "word": "突然",
    "reading": "とつぜん",
    "meaning": "suddenly",
    "id": 400
  },
  {
    "level": "N3",
    "kanji": "容",
    "word": "容器",
    "reading": "ようき",
    "meaning": "container",
    "id": 401
  },
  {
    "level": "N3",
    "kanji": "育",
    "word": "育てる",
    "reading": "そだてる",
    "meaning": "raise or grow something",
    "id": 402
  },
  {
    "level": "N3",
    "kanji": "構",
    "word": "構う",
    "reading": "かまう",
    "meaning": "mind or care about",
    "id": 403
  },
  {
    "level": "N3",
    "kanji": "認",
    "word": "認める",
    "reading": "みとめる",
    "meaning": "recognise or admit",
    "id": 404
  },
  {
    "level": "N3",
    "kanji": "位",
    "word": "位置",
    "reading": "いち",
    "meaning": "position",
    "id": 405
  },
  {
    "level": "N3",
    "kanji": "達",
    "word": "達する",
    "reading": "たっする",
    "meaning": "reach",
    "id": 406
  },
  {
    "level": "N3",
    "kanji": "守",
    "word": "守る",
    "reading": "まもる",
    "meaning": "protect or obey",
    "id": 407
  },
  {
    "level": "N3",
    "kanji": "満",
    "word": "満足",
    "reading": "まんぞく",
    "meaning": "satisfaction",
    "id": 408
  },
  {
    "level": "N3",
    "kanji": "消",
    "word": "消す",
    "reading": "けす",
    "meaning": "erase or switch off",
    "id": 409
  },
  {
    "level": "N3",
    "kanji": "任",
    "word": "任せる",
    "reading": "まかせる",
    "meaning": "entrust",
    "id": 410
  },
  {
    "level": "N3",
    "kanji": "居",
    "word": "居る",
    "reading": "いる",
    "meaning": "be present for living things",
    "id": 411
  },
  {
    "level": "N3",
    "kanji": "予",
    "word": "予約",
    "reading": "よやく",
    "meaning": "reservation",
    "id": 412
  },
  {
    "level": "N3",
    "kanji": "路",
    "word": "道路",
    "reading": "どうろ",
    "meaning": "road",
    "id": 413
  },
  {
    "level": "N3",
    "kanji": "座",
    "word": "座る",
    "reading": "すわる",
    "meaning": "sit",
    "id": 414
  },
  {
    "level": "N3",
    "kanji": "客",
    "word": "お客さん",
    "reading": "おきゃくさん",
    "meaning": "customer or guest",
    "id": 415
  },
  {
    "level": "N3",
    "kanji": "船",
    "word": "船",
    "reading": "ふね",
    "meaning": "ship or boat",
    "id": 416
  },
  {
    "level": "N3",
    "kanji": "追",
    "word": "追う",
    "reading": "おう",
    "meaning": "chase",
    "id": 417
  },
  {
    "level": "N3",
    "kanji": "背",
    "word": "背中",
    "reading": "せなか",
    "meaning": "back of the body",
    "id": 418
  },
  {
    "level": "N3",
    "kanji": "観",
    "word": "観光",
    "reading": "かんこう",
    "meaning": "sightseeing",
    "id": 419
  },
  {
    "level": "N3",
    "kanji": "誰",
    "word": "誰",
    "reading": "だれ",
    "meaning": "who",
    "id": 420
  },
  {
    "level": "N3",
    "kanji": "息",
    "word": "息",
    "reading": "いき",
    "meaning": "breath",
    "id": 421
  },
  {
    "level": "N3",
    "kanji": "失",
    "word": "失敗",
    "reading": "しっぱい",
    "meaning": "failure or mistake",
    "id": 422
  },
  {
    "level": "N3",
    "kanji": "老",
    "word": "老人",
    "reading": "ろうじん",
    "meaning": "elderly person",
    "id": 423
  },
  {
    "level": "N3",
    "kanji": "良",
    "word": "良い",
    "reading": "よい",
    "meaning": "good",
    "id": 424
  },
  {
    "level": "N3",
    "kanji": "示",
    "word": "示す",
    "reading": "しめす",
    "meaning": "show or indicate",
    "id": 425
  },
  {
    "level": "N3",
    "kanji": "号",
    "word": "番号",
    "reading": "ばんごう",
    "meaning": "number",
    "id": 426
  },
  {
    "level": "N3",
    "kanji": "職",
    "word": "職場",
    "reading": "しょくば",
    "meaning": "workplace",
    "id": 427
  },
  {
    "level": "N3",
    "kanji": "王",
    "word": "王様",
    "reading": "おうさま",
    "meaning": "king",
    "id": 428
  },
  {
    "level": "N3",
    "kanji": "識",
    "word": "知識",
    "reading": "ちしき",
    "meaning": "knowledge",
    "id": 429
  },
  {
    "level": "N3",
    "kanji": "警",
    "word": "警察",
    "reading": "けいさつ",
    "meaning": "police",
    "id": 430
  },
  {
    "level": "N3",
    "kanji": "優",
    "word": "優しい",
    "reading": "やさしい",
    "meaning": "kind or gentle",
    "id": 431
  },
  {
    "level": "N3",
    "kanji": "投",
    "word": "投げる",
    "reading": "なげる",
    "meaning": "throw",
    "id": 432
  },
  {
    "level": "N3",
    "kanji": "局",
    "word": "郵便局",
    "reading": "ゆうびんきょく",
    "meaning": "post office",
    "id": 433
  },
  {
    "level": "N3",
    "kanji": "難",
    "word": "難しい",
    "reading": "むずかしい",
    "meaning": "difficult",
    "id": 434
  },
  {
    "level": "N3",
    "kanji": "種",
    "word": "種類",
    "reading": "しゅるい",
    "meaning": "type or variety",
    "id": 435
  },
  {
    "level": "N3",
    "kanji": "念",
    "word": "残念",
    "reading": "ざんねん",
    "meaning": "disappointing or unfortunate",
    "id": 436
  },
  {
    "level": "N3",
    "kanji": "寄",
    "word": "寄る",
    "reading": "よる",
    "meaning": "stop by",
    "id": 437
  },
  {
    "level": "N3",
    "kanji": "商",
    "word": "商品",
    "reading": "しょうひん",
    "meaning": "product",
    "id": 438
  },
  {
    "level": "N3",
    "kanji": "害",
    "word": "被害",
    "reading": "ひがい",
    "meaning": "damage suffered",
    "id": 439
  },
  {
    "level": "N3",
    "kanji": "頼",
    "word": "頼む",
    "reading": "たのむ",
    "meaning": "request",
    "id": 440
  },
  {
    "level": "N3",
    "kanji": "横",
    "word": "横",
    "reading": "よこ",
    "meaning": "side or horizontal",
    "id": 441
  },
  {
    "level": "N3",
    "kanji": "増",
    "word": "増える",
    "reading": "ふえる",
    "meaning": "increase",
    "id": 442
  },
  {
    "level": "N3",
    "kanji": "差",
    "word": "差",
    "reading": "さ",
    "meaning": "difference",
    "id": 443
  },
  {
    "level": "N3",
    "kanji": "苦",
    "word": "苦手",
    "reading": "にがて",
    "meaning": "not good at",
    "id": 444
  },
  {
    "level": "N3",
    "kanji": "収",
    "word": "収入",
    "reading": "しゅうにゅう",
    "meaning": "income",
    "id": 445
  },
  {
    "level": "N3",
    "kanji": "段",
    "word": "階段",
    "reading": "かいだん",
    "meaning": "stairs",
    "id": 446
  },
  {
    "level": "N3",
    "kanji": "俺",
    "word": "俺",
    "reading": "おれ",
    "meaning": "I in rough familiar speech",
    "id": 447
  },
  {
    "level": "N3",
    "kanji": "渡",
    "word": "渡る",
    "reading": "わたる",
    "meaning": "cross",
    "id": 448
  },
  {
    "level": "N3",
    "kanji": "与",
    "word": "与える",
    "reading": "あたえる",
    "meaning": "give or provide",
    "id": 449
  },
  {
    "level": "N3",
    "kanji": "演",
    "word": "演奏",
    "reading": "えんそう",
    "meaning": "musical performance",
    "id": 450
  },
  {
    "level": "N3",
    "kanji": "備",
    "word": "準備",
    "reading": "じゅんび",
    "meaning": "preparation",
    "id": 451
  },
  {
    "level": "N3",
    "kanji": "申",
    "word": "申す",
    "reading": "もうす",
    "meaning": "say humbly",
    "id": 452
  },
  {
    "level": "N3",
    "kanji": "例",
    "word": "例えば",
    "reading": "たとえば",
    "meaning": "for example",
    "id": 453
  },
  {
    "level": "N3",
    "kanji": "働",
    "word": "働く",
    "reading": "はたらく",
    "meaning": "work",
    "id": 454
  },
  {
    "level": "N3",
    "kanji": "景",
    "word": "景色",
    "reading": "けしき",
    "meaning": "scenery",
    "id": 455
  },
  {
    "level": "N3",
    "kanji": "抜",
    "word": "抜く",
    "reading": "ぬく",
    "meaning": "pull out",
    "id": 456
  },
  {
    "level": "N3",
    "kanji": "遠",
    "word": "遠い",
    "reading": "とおい",
    "meaning": "far",
    "id": 457
  },
  {
    "level": "N3",
    "kanji": "絶",
    "word": "絶対",
    "reading": "ぜったい",
    "meaning": "absolutely",
    "id": 458
  },
  {
    "level": "N3",
    "kanji": "負",
    "word": "負ける",
    "reading": "まける",
    "meaning": "lose",
    "id": 459
  },
  {
    "level": "N3",
    "kanji": "福",
    "word": "幸福",
    "reading": "こうふく",
    "meaning": "happiness",
    "id": 460
  },
  {
    "level": "N3",
    "kanji": "球",
    "word": "地球",
    "reading": "ちきゅう",
    "meaning": "Earth",
    "id": 461
  },
  {
    "level": "N3",
    "kanji": "酒",
    "word": "お酒",
    "reading": "おさけ",
    "meaning": "alcohol",
    "id": 462
  },
  {
    "level": "N3",
    "kanji": "君",
    "word": "君",
    "reading": "きみ",
    "meaning": "you in familiar speech",
    "id": 463
  },
  {
    "level": "N3",
    "kanji": "察",
    "word": "観察",
    "reading": "かんさつ",
    "meaning": "observation",
    "id": 464
  },
  {
    "level": "N3",
    "kanji": "望",
    "word": "希望",
    "reading": "きぼう",
    "meaning": "hope or wish",
    "id": 465
  },
  {
    "level": "N3",
    "kanji": "婚",
    "word": "結婚",
    "reading": "けっこん",
    "meaning": "marriage",
    "id": 466
  },
  {
    "level": "N3",
    "kanji": "単",
    "word": "簡単",
    "reading": "かんたん",
    "meaning": "simple",
    "id": 467
  },
  {
    "level": "N3",
    "kanji": "押",
    "word": "押す",
    "reading": "おす",
    "meaning": "push",
    "id": 468
  },
  {
    "level": "N3",
    "kanji": "割",
    "word": "割合",
    "reading": "わりあい",
    "meaning": "ratio or proportion",
    "id": 469
  },
  {
    "level": "N3",
    "kanji": "限",
    "word": "限る",
    "reading": "かぎる",
    "meaning": "limit",
    "id": 470
  },
  {
    "level": "N3",
    "kanji": "戻",
    "word": "戻る",
    "reading": "もどる",
    "meaning": "return",
    "id": 471
  },
  {
    "level": "N3",
    "kanji": "科",
    "word": "科学",
    "reading": "かがく",
    "meaning": "science",
    "id": 472
  },
  {
    "level": "N3",
    "kanji": "求",
    "word": "求める",
    "reading": "もとめる",
    "meaning": "seek or request",
    "id": 473
  },
  {
    "level": "N3",
    "kanji": "談",
    "word": "面談",
    "reading": "めんだん",
    "meaning": "interview or consultation",
    "id": 474
  },
  {
    "level": "N3",
    "kanji": "降",
    "word": "降りる",
    "reading": "おりる",
    "meaning": "get off or descend",
    "id": 475
  },
  {
    "level": "N3",
    "kanji": "妻",
    "word": "妻",
    "reading": "つま",
    "meaning": "my wife",
    "id": 476
  },
  {
    "level": "N3",
    "kanji": "岡",
    "word": "静岡",
    "reading": "しずおか",
    "meaning": "Shizuoka",
    "id": 477
  },
  {
    "level": "N3",
    "kanji": "熱",
    "word": "熱",
    "reading": "ねつ",
    "meaning": "fever or heat",
    "id": 478
  },
  {
    "level": "N3",
    "kanji": "浮",
    "word": "浮く",
    "reading": "うく",
    "meaning": "float",
    "id": 479
  },
  {
    "level": "N3",
    "kanji": "等",
    "word": "等しい",
    "reading": "ひとしい",
    "meaning": "equal",
    "id": 480
  },
  {
    "level": "N3",
    "kanji": "末",
    "word": "週末",
    "reading": "しゅうまつ",
    "meaning": "weekend",
    "id": 481
  },
  {
    "level": "N3",
    "kanji": "幸",
    "word": "幸せ",
    "reading": "しあわせ",
    "meaning": "happiness",
    "id": 482
  },
  {
    "level": "N3",
    "kanji": "草",
    "word": "草",
    "reading": "くさ",
    "meaning": "grass",
    "id": 483
  },
  {
    "level": "N3",
    "kanji": "越",
    "word": "引っ越す",
    "reading": "ひっこす",
    "meaning": "move house",
    "id": 484
  },
  {
    "level": "N3",
    "kanji": "登",
    "word": "登る",
    "reading": "のぼる",
    "meaning": "climb",
    "id": 485
  },
  {
    "level": "N3",
    "kanji": "類",
    "word": "書類",
    "reading": "しょるい",
    "meaning": "documents",
    "id": 486
  },
  {
    "level": "N3",
    "kanji": "未",
    "word": "未来",
    "reading": "みらい",
    "meaning": "future",
    "id": 487
  },
  {
    "level": "N3",
    "kanji": "規",
    "word": "規則",
    "reading": "きそく",
    "meaning": "rule",
    "id": 488
  },
  {
    "level": "N3",
    "kanji": "精",
    "word": "精神",
    "reading": "せいしん",
    "meaning": "mind or spirit",
    "id": 489
  },
  {
    "level": "N3",
    "kanji": "抱",
    "word": "抱く",
    "reading": "だく",
    "meaning": "hold in one's arms",
    "id": 490
  },
  {
    "level": "N3",
    "kanji": "労",
    "word": "苦労",
    "reading": "くろう",
    "meaning": "hardship",
    "id": 491
  },
  {
    "level": "N3",
    "kanji": "処",
    "word": "処理",
    "reading": "しょり",
    "meaning": "processing or handling",
    "id": 492
  },
  {
    "level": "N3",
    "kanji": "退",
    "word": "退院",
    "reading": "たいいん",
    "meaning": "leaving hospital",
    "id": 493
  },
  {
    "level": "N3",
    "kanji": "費",
    "word": "費用",
    "reading": "ひよう",
    "meaning": "cost",
    "id": 494
  },
  {
    "level": "N3",
    "kanji": "非",
    "word": "非常に",
    "reading": "ひじょうに",
    "meaning": "extremely",
    "id": 495
  },
  {
    "level": "N3",
    "kanji": "喜",
    "word": "喜ぶ",
    "reading": "よろこぶ",
    "meaning": "be pleased",
    "id": 496
  },
  {
    "level": "N3",
    "kanji": "娘",
    "word": "娘",
    "reading": "むすめ",
    "meaning": "daughter",
    "id": 497
  },
  {
    "level": "N3",
    "kanji": "逃",
    "word": "逃げる",
    "reading": "にげる",
    "meaning": "escape",
    "id": 498
  },
  {
    "level": "N3",
    "kanji": "探",
    "word": "探す",
    "reading": "さがす",
    "meaning": "search for",
    "id": 499
  },
  {
    "level": "N3",
    "kanji": "犯",
    "word": "犯人",
    "reading": "はんにん",
    "meaning": "offender",
    "id": 500
  },
  {
    "level": "N3",
    "kanji": "薬",
    "word": "薬",
    "reading": "くすり",
    "meaning": "medicine",
    "id": 501
  },
  {
    "level": "N3",
    "kanji": "園",
    "word": "動物園",
    "reading": "どうぶつえん",
    "meaning": "zoo",
    "id": 502
  },
  {
    "level": "N3",
    "kanji": "疑",
    "word": "疑う",
    "reading": "うたがう",
    "meaning": "doubt or suspect",
    "id": 503
  },
  {
    "level": "N3",
    "kanji": "緒",
    "word": "一緒",
    "reading": "いっしょ",
    "meaning": "together",
    "id": 504
  },
  {
    "level": "N3",
    "kanji": "静",
    "word": "静か",
    "reading": "しずか",
    "meaning": "quiet",
    "id": 505
  },
  {
    "level": "N3",
    "kanji": "具",
    "word": "道具",
    "reading": "どうぐ",
    "meaning": "tool",
    "id": 506
  },
  {
    "level": "N3",
    "kanji": "席",
    "word": "席",
    "reading": "せき",
    "meaning": "seat",
    "id": 507
  },
  {
    "level": "N3",
    "kanji": "速",
    "word": "速い",
    "reading": "はやい",
    "meaning": "fast",
    "id": 508
  },
  {
    "level": "N3",
    "kanji": "舞",
    "word": "見舞い",
    "reading": "みまい",
    "meaning": "visit to a sick person",
    "id": 509
  },
  {
    "level": "N3",
    "kanji": "宿",
    "word": "宿泊",
    "reading": "しゅくはく",
    "meaning": "overnight stay",
    "id": 510
  },
  {
    "level": "N3",
    "kanji": "程",
    "word": "程度",
    "reading": "ていど",
    "meaning": "degree or extent",
    "id": 511
  },
  {
    "level": "N3",
    "kanji": "倒",
    "word": "倒れる",
    "reading": "たおれる",
    "meaning": "fall over or collapse",
    "id": 512
  },
  {
    "level": "N3",
    "kanji": "寝",
    "word": "寝る",
    "reading": "ねる",
    "meaning": "sleep",
    "id": 513
  },
  {
    "level": "N3",
    "kanji": "宅",
    "word": "自宅",
    "reading": "じたく",
    "meaning": "one's home",
    "id": 514
  },
  {
    "level": "N3",
    "kanji": "絵",
    "word": "絵",
    "reading": "え",
    "meaning": "picture or painting",
    "id": 515
  },
  {
    "level": "N3",
    "kanji": "破",
    "word": "破る",
    "reading": "やぶる",
    "meaning": "tear or break a rule",
    "id": 516
  },
  {
    "level": "N3",
    "kanji": "庭",
    "word": "庭",
    "reading": "にわ",
    "meaning": "garden",
    "id": 517
  },
  {
    "level": "N3",
    "kanji": "婦",
    "word": "夫婦",
    "reading": "ふうふ",
    "meaning": "married couple",
    "id": 518
  },
  {
    "level": "N3",
    "kanji": "余",
    "word": "余る",
    "reading": "あまる",
    "meaning": "be left over",
    "id": 519
  },
  {
    "level": "N3",
    "kanji": "訪",
    "word": "訪ねる",
    "reading": "たずねる",
    "meaning": "visit",
    "id": 520
  },
  {
    "level": "N3",
    "kanji": "冷",
    "word": "冷たい",
    "reading": "つめたい",
    "meaning": "cold to the touch",
    "id": 521
  },
  {
    "level": "N3",
    "kanji": "暮",
    "word": "暮らす",
    "reading": "くらす",
    "meaning": "live or make a living",
    "id": 522
  },
  {
    "level": "N3",
    "kanji": "腹",
    "word": "お腹",
    "reading": "おなか",
    "meaning": "stomach",
    "id": 523
  },
  {
    "level": "N3",
    "kanji": "危",
    "word": "危ない",
    "reading": "あぶない",
    "meaning": "dangerous",
    "id": 524
  },
  {
    "level": "N3",
    "kanji": "許",
    "word": "許す",
    "reading": "ゆるす",
    "meaning": "permit or forgive",
    "id": 525
  },
  {
    "level": "N3",
    "kanji": "似",
    "word": "似る",
    "reading": "にる",
    "meaning": "resemble",
    "id": 526
  },
  {
    "level": "N3",
    "kanji": "険",
    "word": "危険",
    "reading": "きけん",
    "meaning": "danger",
    "id": 527
  },
  {
    "level": "N3",
    "kanji": "財",
    "word": "財布",
    "reading": "さいふ",
    "meaning": "wallet",
    "id": 528
  },
  {
    "level": "N3",
    "kanji": "遊",
    "word": "遊ぶ",
    "reading": "あそぶ",
    "meaning": "play",
    "id": 529
  },
  {
    "level": "N3",
    "kanji": "雑",
    "word": "複雑",
    "reading": "ふくざつ",
    "meaning": "complicated",
    "id": 530
  },
  {
    "level": "N3",
    "kanji": "恐",
    "word": "恐ろしい",
    "reading": "おそろしい",
    "meaning": "frightening",
    "id": 531
  },
  {
    "level": "N3",
    "kanji": "値",
    "word": "値段",
    "reading": "ねだん",
    "meaning": "price",
    "id": 532
  },
  {
    "level": "N3",
    "kanji": "暗",
    "word": "暗い",
    "reading": "くらい",
    "meaning": "dark",
    "id": 533
  },
  {
    "level": "N3",
    "kanji": "積",
    "word": "積もる",
    "reading": "つもる",
    "meaning": "accumulate",
    "id": 534
  },
  {
    "level": "N3",
    "kanji": "夢",
    "word": "夢",
    "reading": "ゆめ",
    "meaning": "dream",
    "id": 535
  },
  {
    "level": "N3",
    "kanji": "痛",
    "word": "痛い",
    "reading": "いたい",
    "meaning": "painful",
    "id": 536
  },
  {
    "level": "N3",
    "kanji": "富",
    "word": "豊富",
    "reading": "ほうふ",
    "meaning": "abundant",
    "id": 537
  },
  {
    "level": "N3",
    "kanji": "刻",
    "word": "遅刻",
    "reading": "ちこく",
    "meaning": "lateness",
    "id": 538
  },
  {
    "level": "N3",
    "kanji": "鳴",
    "word": "鳴る",
    "reading": "なる",
    "meaning": "ring or sound",
    "id": 539
  },
  {
    "level": "N3",
    "kanji": "欲",
    "word": "欲しい",
    "reading": "ほしい",
    "meaning": "wanted",
    "id": 540
  },
  {
    "level": "N3",
    "kanji": "途",
    "word": "途中",
    "reading": "とちゅう",
    "meaning": "on the way",
    "id": 541
  },
  {
    "level": "N3",
    "kanji": "曲",
    "word": "曲がる",
    "reading": "まがる",
    "meaning": "turn or bend",
    "id": 542
  },
  {
    "level": "N3",
    "kanji": "耳",
    "word": "耳",
    "reading": "みみ",
    "meaning": "ear",
    "id": 543
  },
  {
    "level": "N3",
    "kanji": "完",
    "word": "完成",
    "reading": "かんせい",
    "meaning": "completion",
    "id": 544
  },
  {
    "level": "N3",
    "kanji": "願",
    "word": "願う",
    "reading": "ねがう",
    "meaning": "wish or request",
    "id": 545
  },
  {
    "level": "N3",
    "kanji": "罪",
    "word": "犯罪",
    "reading": "はんざい",
    "meaning": "crime",
    "id": 546
  },
  {
    "level": "N3",
    "kanji": "陽",
    "word": "太陽",
    "reading": "たいよう",
    "meaning": "sun",
    "id": 547
  },
  {
    "level": "N3",
    "kanji": "亡",
    "word": "亡くなる",
    "reading": "なくなる",
    "meaning": "pass away",
    "id": 548
  },
  {
    "level": "N3",
    "kanji": "散",
    "word": "散歩",
    "reading": "さんぽ",
    "meaning": "walk or stroll",
    "id": 549
  },
  {
    "level": "N3",
    "kanji": "掛",
    "word": "掛ける",
    "reading": "かける",
    "meaning": "hang or put on",
    "id": 550
  },
  {
    "level": "N3",
    "kanji": "昨",
    "word": "昨日",
    "reading": "きのう",
    "meaning": "yesterday",
    "id": 551
  },
  {
    "level": "N3",
    "kanji": "怒",
    "word": "怒る",
    "reading": "おこる",
    "meaning": "get angry",
    "id": 552
  },
  {
    "level": "N3",
    "kanji": "留",
    "word": "留学",
    "reading": "りゅうがく",
    "meaning": "study abroad",
    "id": 553
  },
  {
    "level": "N3",
    "kanji": "礼",
    "word": "失礼",
    "reading": "しつれい",
    "meaning": "rudeness or excuse me",
    "id": 554
  },
  {
    "level": "N3",
    "kanji": "列",
    "word": "列",
    "reading": "れつ",
    "meaning": "queue or row",
    "id": 555
  },
  {
    "level": "N3",
    "kanji": "雪",
    "word": "雪",
    "reading": "ゆき",
    "meaning": "snow",
    "id": 556
  },
  {
    "level": "N3",
    "kanji": "払",
    "word": "払う",
    "reading": "はらう",
    "meaning": "pay",
    "id": 557
  },
  {
    "level": "N3",
    "kanji": "給",
    "word": "給料",
    "reading": "きゅうりょう",
    "meaning": "salary",
    "id": 558
  },
  {
    "level": "N3",
    "kanji": "敗",
    "word": "敗れる",
    "reading": "やぶれる",
    "meaning": "be defeated",
    "id": 559
  },
  {
    "level": "N3",
    "kanji": "捕",
    "word": "捕まえる",
    "reading": "つかまえる",
    "meaning": "catch",
    "id": 560
  },
  {
    "level": "N3",
    "kanji": "忘",
    "word": "忘れる",
    "reading": "わすれる",
    "meaning": "forget",
    "id": 561
  },
  {
    "level": "N3",
    "kanji": "晴",
    "word": "晴れる",
    "reading": "はれる",
    "meaning": "clear up in weather",
    "id": 562
  },
  {
    "level": "N3",
    "kanji": "因",
    "word": "要因",
    "reading": "よういん",
    "meaning": "factor or cause",
    "id": 563
  },
  {
    "level": "N3",
    "kanji": "折",
    "word": "折る",
    "reading": "おる",
    "meaning": "fold or break",
    "id": 564
  },
  {
    "level": "N3",
    "kanji": "迎",
    "word": "迎える",
    "reading": "むかえる",
    "meaning": "welcome or go to meet",
    "id": 565
  },
  {
    "level": "N3",
    "kanji": "悲",
    "word": "悲しい",
    "reading": "かなしい",
    "meaning": "sad",
    "id": 566
  },
  {
    "level": "N3",
    "kanji": "港",
    "word": "空港",
    "reading": "くうこう",
    "meaning": "airport",
    "id": 567
  },
  {
    "level": "N3",
    "kanji": "責",
    "word": "責任",
    "reading": "せきにん",
    "meaning": "responsibility",
    "id": 568
  },
  {
    "level": "N3",
    "kanji": "除",
    "word": "除く",
    "reading": "のぞく",
    "meaning": "exclude",
    "id": 569
  },
  {
    "level": "N3",
    "kanji": "困",
    "word": "困る",
    "reading": "こまる",
    "meaning": "be in difficulty",
    "id": 570
  },
  {
    "level": "N3",
    "kanji": "閉",
    "word": "閉める",
    "reading": "しめる",
    "meaning": "close something",
    "id": 571
  },
  {
    "level": "N3",
    "kanji": "吸",
    "word": "吸う",
    "reading": "すう",
    "meaning": "breathe in or smoke",
    "id": 572
  },
  {
    "level": "N3",
    "kanji": "髪",
    "word": "髪",
    "reading": "かみ",
    "meaning": "hair on the head",
    "id": 573
  },
  {
    "level": "N3",
    "kanji": "束",
    "word": "束",
    "reading": "たば",
    "meaning": "bundle",
    "id": 574
  },
  {
    "level": "N3",
    "kanji": "眠",
    "word": "眠い",
    "reading": "ねむい",
    "meaning": "sleepy",
    "id": 575
  },
  {
    "level": "N3",
    "kanji": "易",
    "word": "容易",
    "reading": "ようい",
    "meaning": "easy or simple",
    "id": 576
  },
  {
    "level": "N3",
    "kanji": "窓",
    "word": "窓",
    "reading": "まど",
    "meaning": "window",
    "id": 577
  },
  {
    "level": "N3",
    "kanji": "祖",
    "word": "祖母",
    "reading": "そぼ",
    "meaning": "my grandmother",
    "id": 578
  },
  {
    "level": "N3",
    "kanji": "勤",
    "word": "通勤",
    "reading": "つうきん",
    "meaning": "commuting to work",
    "id": 579
  },
  {
    "level": "N3",
    "kanji": "昔",
    "word": "昔",
    "reading": "むかし",
    "meaning": "long ago",
    "id": 580
  },
  {
    "level": "N3",
    "kanji": "便",
    "word": "便利",
    "reading": "べんり",
    "meaning": "convenient",
    "id": 581
  },
  {
    "level": "N3",
    "kanji": "適",
    "word": "適当",
    "reading": "てきとう",
    "meaning": "suitable or careless depending on context",
    "id": 582
  },
  {
    "level": "N3",
    "kanji": "吹",
    "word": "吹く",
    "reading": "ふく",
    "meaning": "blow",
    "id": 583
  },
  {
    "level": "N3",
    "kanji": "候",
    "word": "天候",
    "reading": "てんこう",
    "meaning": "weather conditions",
    "id": 584
  },
  {
    "level": "N3",
    "kanji": "怖",
    "word": "怖い",
    "reading": "こわい",
    "meaning": "scary",
    "id": 585
  },
  {
    "level": "N3",
    "kanji": "辞",
    "word": "辞書",
    "reading": "じしょ",
    "meaning": "dictionary",
    "id": 586
  },
  {
    "level": "N3",
    "kanji": "否",
    "word": "否定",
    "reading": "ひてい",
    "meaning": "denial or negation",
    "id": 587
  },
  {
    "level": "N3",
    "kanji": "遅",
    "word": "遅い",
    "reading": "おそい",
    "meaning": "late or slow",
    "id": 588
  },
  {
    "level": "N3",
    "kanji": "煙",
    "word": "煙",
    "reading": "けむり",
    "meaning": "smoke",
    "id": 589
  },
  {
    "level": "N3",
    "kanji": "徒",
    "word": "生徒",
    "reading": "せいと",
    "meaning": "pupil",
    "id": 590
  },
  {
    "level": "N3",
    "kanji": "欠",
    "word": "欠席",
    "reading": "けっせき",
    "meaning": "absence",
    "id": 591
  },
  {
    "level": "N3",
    "kanji": "迷",
    "word": "迷う",
    "reading": "まよう",
    "meaning": "be lost or hesitate",
    "id": 592
  },
  {
    "level": "N3",
    "kanji": "洗",
    "word": "洗う",
    "reading": "あらう",
    "meaning": "wash",
    "id": 593
  },
  {
    "level": "N3",
    "kanji": "互",
    "word": "お互い",
    "reading": "おたがい",
    "meaning": "each other",
    "id": 594
  },
  {
    "level": "N3",
    "kanji": "才",
    "word": "才能",
    "reading": "さいのう",
    "meaning": "talent",
    "id": 595
  },
  {
    "level": "N3",
    "kanji": "更",
    "word": "変更",
    "reading": "へんこう",
    "meaning": "change or alteration",
    "id": 596
  },
  {
    "level": "N3",
    "kanji": "歯",
    "word": "歯",
    "reading": "は",
    "meaning": "tooth",
    "id": 597
  },
  {
    "level": "N3",
    "kanji": "盗",
    "word": "盗む",
    "reading": "ぬすむ",
    "meaning": "steal",
    "id": 598
  },
  {
    "level": "N3",
    "kanji": "慣",
    "word": "慣れる",
    "reading": "なれる",
    "meaning": "get used to",
    "id": 599
  },
  {
    "level": "N3",
    "kanji": "晩",
    "word": "今晩",
    "reading": "こんばん",
    "meaning": "this evening",
    "id": 600
  },
  {
    "level": "N3",
    "kanji": "箱",
    "word": "箱",
    "reading": "はこ",
    "meaning": "box",
    "id": 601
  },
  {
    "level": "N3",
    "kanji": "到",
    "word": "到着",
    "reading": "とうちゃく",
    "meaning": "arrival",
    "id": 602
  },
  {
    "level": "N3",
    "kanji": "頂",
    "word": "頂く",
    "reading": "いただく",
    "meaning": "receive or eat humbly",
    "id": 603
  },
  {
    "level": "N3",
    "kanji": "杯",
    "word": "一杯",
    "reading": "いっぱい",
    "meaning": "one cup or full",
    "id": 604
  },
  {
    "level": "N3",
    "kanji": "皆",
    "word": "皆さん",
    "reading": "みなさん",
    "meaning": "everyone",
    "id": 605
  },
  {
    "level": "N3",
    "kanji": "招",
    "word": "招待",
    "reading": "しょうたい",
    "meaning": "invitation",
    "id": 606
  },
  {
    "level": "N3",
    "kanji": "寒",
    "word": "寒い",
    "reading": "さむい",
    "meaning": "cold weather",
    "id": 607
  },
  {
    "level": "N3",
    "kanji": "恥",
    "word": "恥ずかしい",
    "reading": "はずかしい",
    "meaning": "embarrassed",
    "id": 608
  },
  {
    "level": "N3",
    "kanji": "疲",
    "word": "疲れる",
    "reading": "つかれる",
    "meaning": "get tired",
    "id": 609
  },
  {
    "level": "N3",
    "kanji": "貧",
    "word": "貧しい",
    "reading": "まずしい",
    "meaning": "poor",
    "id": 610
  },
  {
    "level": "N3",
    "kanji": "猫",
    "word": "猫",
    "reading": "ねこ",
    "meaning": "cat",
    "id": 611
  },
  {
    "level": "N3",
    "kanji": "誤",
    "word": "誤る",
    "reading": "あやまる",
    "meaning": "make a mistake",
    "id": 612
  },
  {
    "level": "N3",
    "kanji": "努",
    "word": "努力",
    "reading": "どりょく",
    "meaning": "effort",
    "id": 613
  },
  {
    "level": "N3",
    "kanji": "幾",
    "word": "幾つ",
    "reading": "いくつ",
    "meaning": "how many or how old",
    "id": 614
  },
  {
    "level": "N3",
    "kanji": "賛",
    "word": "賛成",
    "reading": "さんせい",
    "meaning": "agreement",
    "id": 615
  },
  {
    "level": "N3",
    "kanji": "偶",
    "word": "偶然",
    "reading": "ぐうぜん",
    "meaning": "coincidence",
    "id": 616
  },
  {
    "level": "N3",
    "kanji": "忙",
    "word": "忙しい",
    "reading": "いそがしい",
    "meaning": "busy",
    "id": 617
  },
  {
    "level": "N3",
    "kanji": "泳",
    "word": "泳ぐ",
    "reading": "およぐ",
    "meaning": "swim",
    "id": 618
  },
  {
    "level": "N3",
    "kanji": "靴",
    "word": "靴",
    "reading": "くつ",
    "meaning": "shoes",
    "id": 619
  },
  {
    "level": "N3",
    "kanji": "偉",
    "word": "偉い",
    "reading": "えらい",
    "meaning": "admirable or important",
    "id": 620
  }
];

export const MASTER_LESSONS_30: MasterLessonItem[] = [
  {
    "day": 1,
    "id": "master-unit-1",
    "title": "People and simple sentences",
    "level": "N5",
    "grammar": [
      {
        "pattern": "A は B です",
        "rule": "Mark the topic with は, pronounced wa; use です for a polite noun predicate.",
        "exampleJp": "私は会社員です。",
        "exampleEn": "I am a company employee.",
        "exampleFurigana": "わたし は かいしゃいん です。",
        "exampleRomaji": "Watashi wa kaishain desu."
      },
      {
        "pattern": "ですか and question words",
        "rule": "Add か for a polite question. Keep the normal word order.",
        "exampleJp": "お名前は何ですか。",
        "exampleEn": "What is your name?",
        "exampleFurigana": "おなまえ は なん です か。",
        "exampleRomaji": "Onamae wa nan desu ka."
      },
      {
        "pattern": "の and も",
        "rule": "の links nouns; も means also and replaces は or を in many basic sentences.",
        "exampleJp": "私も日本語の学生です。",
        "exampleEn": "I am also a student of Japanese.",
        "exampleFurigana": "わたし も にほんご の がくせい です。",
        "exampleRomaji": "Watashi mo nihongo no gakusei desu."
      },
      {
        "pattern": "じゃありません",
        "rule": "Negate a noun predicate; ではありません is more formal.",
        "exampleJp": "田中さんは先生じゃありません。",
        "exampleEn": "Tanaka is not a teacher.",
        "exampleFurigana": "たなかさん は せんせい じゃ ありません。",
        "exampleRomaji": "Tanaka-san wa sensei ja arimasen."
      }
    ],
    "questions": [
      {
        "prompt": "私は学生（　）。",
        "options": [
          "です",
          "ます",
          "する"
        ],
        "rawOptions": "です／ます／する",
        "answer": "です",
        "explanation": "A noun predicate takes です."
      },
      {
        "prompt": "Translate: I am also an engineer.",
        "options": [],
        "rawOptions": "",
        "answer": "私もエンジニアです。",
        "explanation": "も marks also; other natural answers are acceptable."
      },
      {
        "prompt": "Order: 学生 / 私 / です / は",
        "options": [],
        "rawOptions": "",
        "answer": "私は学生です。",
        "explanation": "Topic then predicate."
      }
    ],
    "reading": {
      "text": "私はアリです。会社員です。日本語の学生でもあります。先生は山田さんです。山田さんは日本人です。クラスの友達はリーさんです。リーさんは会社員じゃありません。大学生です。",
      "gloss": "会社員（かいしゃいん） company employee; 大学生（だいがくせい） university student; 日本人（にほんじん） Japanese person",
      "questions": [
        "アリさんは会社員ですか。",
        "先生は誰ですか。",
        "リーさんは大学生ですか。"
      ],
      "answers": [
        "はい、会社員です。",
        "山田さんです。",
        "はい、大学生です。"
      ],
      "translation": "I am Ari, a company employee and also a student of Japanese. My teacher is Yamada, who is Japanese. My classmate is Lee. Lee is not a company employee but a university student.",
      "kanaHelp": "わたしは アリです。かいしゃいんです。にほんごの がくせいでも あります。せんせいは やまださんです。やまださんは にほんじんです。クラスの ともだちは リーさんです。リーさんは かいしゃいんじゃ ありません。だいがくせいです。"
    },
    "listening": {
      "day": 1,
      "primaryVideoId": "npfjRWhd5_o",
      "backupVideoId": "_fXQ8TquRWo",
      "backupTitle": "Body Parts",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "001-016"
  },
  {
    "day": 2,
    "id": "master-unit-2",
    "title": "Things places and existence",
    "level": "N5",
    "grammar": [
      {
        "pattern": "これ それ あれ",
        "rule": "Use these as pronouns; この・その・あの must come before a noun.",
        "exampleJp": "これは私の本です。",
        "exampleEn": "This is my book.",
        "exampleFurigana": "これ は わたし の ほん です。",
        "exampleRomaji": "Kore wa watashi no hon desu."
      },
      {
        "pattern": "ここ そこ あそこ",
        "rule": "Indicate here, there, and over there; どこ asks where.",
        "exampleJp": "受付はどこですか。",
        "exampleEn": "Where is reception?",
        "exampleFurigana": "うけつけ は どこ です か。",
        "exampleRomaji": "Uketsuke wa doko desu ka."
      },
      {
        "pattern": "に あります and います",
        "rule": "Use ある for inanimate existence and いる for living things; に marks the location.",
        "exampleJp": "机の上に本があります。",
        "exampleEn": "There is a book on the desk.",
        "exampleFurigana": "つくえ の うえ に ほん が あります。",
        "exampleRomaji": "Tsukue no ue ni hon ga arimasu."
      },
      {
        "pattern": "と and や",
        "rule": "と gives a complete noun list; や gives examples, often with など.",
        "exampleJp": "部屋に机や椅子があります。",
        "exampleEn": "There are things such as a desk and chairs in the room.",
        "exampleFurigana": "へや に つくえ や いす が あります。",
        "exampleRomaji": "Heya ni tsukue ya isu ga arimasu."
      }
    ],
    "questions": [
      {
        "prompt": "猫が部屋に（　）。",
        "options": [
          "います",
          "あります",
          "です"
        ],
        "rawOptions": "います／あります／です",
        "answer": "います",
        "explanation": "A cat is animate."
      },
      {
        "prompt": "Choose: （この／これ）本は私のです。",
        "options": [],
        "rawOptions": "",
        "answer": "この",
        "explanation": "この modifies a following noun."
      },
      {
        "prompt": "Order: 上に / 本が / 机の / あります",
        "options": [],
        "rawOptions": "",
        "answer": "机の上に本があります。",
        "explanation": "Location に, then existing thing が."
      }
    ],
    "reading": {
      "text": "ここは私の部屋です。机は窓の近くにあります。机の上に本が二冊あります。椅子の下に猫がいます。かばんはドアの右にあります。時計はありません。",
      "gloss": "部屋（へや） room; 窓（まど） window; 二冊（にさつ） two books; 右（みぎ） right",
      "questions": [
        "本はどこにありますか。",
        "猫はどこにいますか。",
        "時計がありますか。"
      ],
      "answers": [
        "机の上にあります。",
        "椅子の下にいます。",
        "いいえ、ありません。"
      ],
      "translation": "This is my room. The desk is near the window. There are two books on it and a cat under the chair. The bag is to the right of the door. There is no clock.",
      "kanaHelp": "ここは わたしの へやです。つくえは まどの ちかくに あります。つくえの うえに ほんが にさつ あります。いすの したに ねこが います。かばんは ドアの みぎに あります。とけいは ありません。"
    },
    "listening": {
      "day": 2,
      "primaryVideoId": "_fXQ8TquRWo",
      "backupVideoId": "VSs5P1WJYP4",
      "backupTitle": "Stationery",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "017-032"
  },
  {
    "day": 3,
    "id": "master-unit-3",
    "title": "Daily actions and time",
    "level": "N5",
    "grammar": [
      {
        "pattern": "ます ません ました ませんでした",
        "rule": "These are polite nonpast positive, nonpast negative, past positive, and past negative forms.",
        "exampleJp": "昨日は働きませんでした。",
        "exampleEn": "I did not work yesterday.",
        "exampleFurigana": "きのう は はたらきません でした。",
        "exampleRomaji": "Kinou wa hatarakimasen deshita."
      },
      {
        "pattern": "を and で",
        "rule": "を marks the direct object; で marks the place where an action happens.",
        "exampleJp": "図書館で本を読みます。",
        "exampleEn": "I read a book at the library.",
        "exampleFurigana": "としょかん で ほん を よみます。",
        "exampleRomaji": "Toshokan de hon o yomimasu."
      },
      {
        "pattern": "time に and から まで",
        "rule": "に marks specific times; many relative expressions such as 今日 do not take it.",
        "exampleJp": "九時から五時まで働きます。",
        "exampleEn": "I work from nine to five.",
        "exampleFurigana": "くじ から ごじ まで はたらきます。",
        "exampleRomaji": "Kuji kara goji made hatarakimasu."
      },
      {
        "pattern": "frequency",
        "rule": "Combine time expressions with actions; 毎日 means every day and 時々 means sometimes.",
        "exampleJp": "毎朝、六時に起きます。",
        "exampleEn": "I get up at six every morning.",
        "exampleFurigana": "まいあさ、ろくじ に おきます。",
        "exampleRomaji": "Maiasa, rokuji ni okimasu."
      }
    ],
    "questions": [
      {
        "prompt": "食堂（　）ご飯を食べます。",
        "options": [
          "で",
          "に",
          "を"
        ],
        "rawOptions": "で／に／を",
        "answer": "で",
        "explanation": "で locates the eating action."
      },
      {
        "prompt": "Make polite past negative: 飲みます。",
        "options": [],
        "rawOptions": "",
        "answer": "飲みませんでした。",
        "explanation": "Change ます to ませんでした."
      },
      {
        "prompt": "Order: 起きます / 七時に / 毎朝",
        "options": [],
        "rawOptions": "",
        "answer": "毎朝、七時に起きます。",
        "explanation": "Frequency and time precede the predicate."
      }
    ],
    "reading": {
      "text": "私は毎朝六時半に起きます。七時に朝ご飯を食べます。会社で九時から五時まで働きます。昼ご飯は会社の食堂で食べます。昨日は日曜日でした。仕事をしませんでした。",
      "gloss": "六時半（ろくじはん） 6:30; 食堂（しょくどう） dining hall; 昨日（きのう） yesterday",
      "questions": [
        "何時に起きますか。",
        "どこで昼ご飯を食べますか。",
        "昨日、仕事をしましたか。"
      ],
      "answers": [
        "六時半に起きます。",
        "会社の食堂で食べます。",
        "いいえ、しませんでした。"
      ],
      "translation": "I get up at 6:30 and eat breakfast at seven. I work at the company from nine to five and eat lunch in its dining hall. Yesterday was Sunday, so I did not work.",
      "kanaHelp": "わたしは まいあさ ろくじはんに おきます。しちじに あさごはんを たべます。かいしゃで くじから ごじまで はたらきます。ひるごはんは かいしゃの しょくどうで たべます。きのうは にちようびでした。しごとを しませんでした。"
    },
    "listening": {
      "day": 3,
      "primaryVideoId": "VSs5P1WJYP4",
      "backupVideoId": "UKSKP8GZ5tM",
      "backupTitle": "Where Is the Apple",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "033-048"
  },
  {
    "day": 4,
    "id": "master-unit-4",
    "title": "Adjectives preferences and comparison",
    "level": "N5",
    "grammar": [
      {
        "pattern": "い adjectives",
        "rule": "Change final い to くない for negative and かった for past. いい becomes よくない／よかった.",
        "exampleJp": "この店は安くて、おいしいです。",
        "exampleEn": "This restaurant is inexpensive and tasty.",
        "exampleFurigana": "この みせ は やすくて、おいしい です。",
        "exampleRomaji": "Kono mise wa yasukute, oishii desu."
      },
      {
        "pattern": "な adjectives",
        "rule": "Use な before a noun; use じゃない to negate the predicate.",
        "exampleJp": "静かな部屋が好きです。",
        "exampleEn": "I like quiet rooms.",
        "exampleFurigana": "しずかな へや が すき です。",
        "exampleRomaji": "Shizukana heya ga suki desu."
      },
      {
        "pattern": "が 好き and が 上手",
        "rule": "が marks what is liked or a skill domain in these patterns.",
        "exampleJp": "妹は料理が上手です。",
        "exampleEn": "My younger sister is good at cooking.",
        "exampleFurigana": "いもうと は りょうり が じょうず です。",
        "exampleRomaji": "Imouto wa ryouri ga jouzu desu."
      },
      {
        "pattern": "より ほうが and いちばん",
        "rule": "より marks the comparison baseline; ほうが highlights the compared option.",
        "exampleJp": "バスより電車のほうが速いです。",
        "exampleEn": "The train is faster than the bus.",
        "exampleFurigana": "バス より でんしゃ の ほう が はやい です。",
        "exampleRomaji": "Basu yori densha no hou ga hayai desu."
      }
    ],
    "questions": [
      {
        "prompt": "昨日は（　）です。",
        "options": [
          "寒かった",
          "寒いでした",
          "寒くでした"
        ],
        "rawOptions": "寒かった／寒いでした／寒くでした",
        "answer": "寒かった",
        "explanation": "い-adjective past is stem plus かった."
      },
      {
        "prompt": "Make a noun phrase: 静か + 町。",
        "options": [],
        "rawOptions": "",
        "answer": "静かな町",
        "explanation": "な joins this adjective to a noun."
      },
      {
        "prompt": "Order: ほうが / 電車の / 速いです / バスより",
        "options": [],
        "rawOptions": "",
        "answer": "バスより電車のほうが速いです。",
        "explanation": "より gives the baseline."
      }
    ],
    "reading": {
      "text": "駅の近くに二つの店があります。青い店は安いですが、少しうるさいです。白い店は静かで、料理もおいしいです。でも、青い店より高いです。私は今日は静かな所で食べたいです。白い店に行きます。",
      "gloss": "うるさい noisy; 所（ところ） place; 少し（すこし） a little",
      "questions": [
        "安い店はどちらですか。",
        "白い店は青い店より安いですか。",
        "筆者はどの店に行きますか。"
      ],
      "answers": [
        "青い店です。",
        "いいえ、高いです。",
        "白い店に行きます。"
      ],
      "translation": "There are two restaurants near the station. The blue one is cheap but a little noisy. The white one is quiet and serves good food, but costs more. Today I want somewhere quiet, so I will go to the white one.",
      "kanaHelp": "えきの ちかくに ふたつの みせが あります。あおい みせは やすいですが、すこし うるさいです。しろい みせは しずかで、りょうりも おいしいです。でも、あおい みせより たかいです。わたしは きょうは しずかな ところで たべたいです。しろい みせに いきます。"
    },
    "listening": {
      "day": 4,
      "primaryVideoId": "UKSKP8GZ5tM",
      "backupVideoId": "L8q4_kG1X5A",
      "backupTitle": "Our Living Room",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "049-064"
  },
  {
    "day": 5,
    "id": "master-unit-5",
    "title": "Movement shopping and invitations",
    "level": "N5",
    "grammar": [
      {
        "pattern": "に and へ for destination",
        "rule": "に and へ can mark a destination; へ is pronounced e. と marks a companion.",
        "exampleJp": "友達と京都へ行きます。",
        "exampleEn": "I will go to Kyoto with a friend.",
        "exampleFurigana": "ともだち と きょうと へ いきます。",
        "exampleRomaji": "Tomodachi to Kyouto e ikimasu."
      },
      {
        "pattern": "transport で and purpose に",
        "rule": "で marks transport; a verb stem plus に行く gives the purpose of going.",
        "exampleJp": "電車で本を買いに行きます。",
        "exampleEn": "I will go by train to buy books.",
        "exampleFurigana": "でんしゃ で ほん を かい に いきます。",
        "exampleRomaji": "Densha de hon o kai ni ikimasu."
      },
      {
        "pattern": "ませんか and ましょう",
        "rule": "Use ませんか to invite and ましょう to suggest doing together.",
        "exampleJp": "一緒に昼ご飯を食べませんか。",
        "exampleEn": "Would you like to have lunch together?",
        "exampleFurigana": "いっしょ に ひるごはん を たべません か。",
        "exampleRomaji": "Issho ni hirugohan o tabemasen ka."
      },
      {
        "pattern": "たい and 欲しい",
        "rule": "Verb stem plus たい expresses wanting to do; noun が欲しい expresses wanting a thing.",
        "exampleJp": "新しい靴が欲しいです。",
        "exampleEn": "I want new shoes.",
        "exampleFurigana": "あたらしい くつ が ほしい です。",
        "exampleRomaji": "Atarashii kutsu ga hoshii desu."
      }
    ],
    "questions": [
      {
        "prompt": "バス（　）駅へ行きます。",
        "options": [
          "で",
          "を",
          "が"
        ],
        "rawOptions": "で／を／が",
        "answer": "で",
        "explanation": "Transport uses で."
      },
      {
        "prompt": "Complete: 映画を（見る → stem）に行きます。",
        "options": [],
        "rawOptions": "",
        "answer": "見に行きます。",
        "explanation": "見 is the ます stem of 見る."
      },
      {
        "prompt": "Translate an invitation: Would you like to drink tea together?",
        "options": [],
        "rawOptions": "",
        "answer": "一緒にお茶を飲みませんか。",
        "explanation": "ませんか politely invites."
      }
    ],
    "reading": {
      "text": "土曜日に友達と駅前の店へ行きます。私は新しい靴を買いたいです。友達はかばんが欲しいと言っています。店までバスで行きます。買い物の後で、一緒にお茶を飲みます。",
      "gloss": "駅前（えきまえ） in front of the station; 靴（くつ） shoes; 後で（あとで） afterwards",
      "questions": [
        "筆者は何を買いたいですか。",
        "友達は何が欲しいですか。",
        "店まで何で行きますか。"
      ],
      "answers": [
        "新しい靴です。",
        "かばんです。",
        "バスで行きます。"
      ],
      "translation": "On Saturday I am going to a shop in front of the station with a friend. I want new shoes, and my friend says they want a bag. We will go by bus and have tea after shopping.",
      "kanaHelp": "どようびに ともだちと えきまえの みせへ いきます。わたしは あたらしい くつを かいたいです。ともだちは かばんが ほしいと いっています。みせまで バスで いきます。かいものの あとで、いっしょに おちゃを のみます。"
    },
    "listening": {
      "day": 5,
      "primaryVideoId": "L8q4_kG1X5A",
      "backupVideoId": "ygTqkvDFMI4",
      "backupTitle": "Snowman",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "065-080"
  },
  {
    "day": 6,
    "id": "master-unit-6",
    "title": "The te form and requests",
    "level": "N5",
    "grammar": [
      {
        "pattern": "て form and sequence",
        "rule": "Join actions with て; the final predicate establishes tense.",
        "exampleJp": "家に帰って、ご飯を食べました。",
        "exampleEn": "I went home and ate.",
        "exampleFurigana": "いえ に かえって、ごはん を たべました。",
        "exampleRomaji": "Ie ni kaette, gohan o tabemashita."
      },
      {
        "pattern": "てください and ないでください",
        "rule": "Request an action or ask someone not to do it.",
        "exampleJp": "ここに名前を書いてください。",
        "exampleEn": "Please write your name here.",
        "exampleFurigana": "ここ に なまえ を かいて ください。",
        "exampleRomaji": "Koko ni namae o kaite kudasai."
      },
      {
        "pattern": "てもいい and てはいけない",
        "rule": "Give or ask permission; express prohibition.",
        "exampleJp": "ここで写真を撮ってもいいですか。",
        "exampleEn": "May I take photos here?",
        "exampleFurigana": "ここ で しゃしん を とっても いい です か。",
        "exampleRomaji": "Koko de shashin o tottemo ii desu ka."
      },
      {
        "pattern": "ている",
        "rule": "Express an ongoing action or a resulting state, depending on the verb.",
        "exampleJp": "今、資料を読んでいます。",
        "exampleEn": "I am reading the materials now.",
        "exampleFurigana": "いま、しりょう を よんでいます。",
        "exampleRomaji": "Ima, shiryou o yonde imasu."
      }
    ],
    "questions": [
      {
        "prompt": "Please do not enter: 入る →",
        "options": [],
        "rawOptions": "",
        "answer": "入らないでください。",
        "explanation": "Use negative plain form plus でください."
      },
      {
        "prompt": "Make the て form: 書く、飲む、行く。",
        "options": [],
        "rawOptions": "",
        "answer": "書いて、飲んで、行って",
        "explanation": "行く has exceptional 行って."
      },
      {
        "prompt": "Order: も / 撮って / いいですか / 写真を",
        "options": [],
        "rawOptions": "",
        "answer": "写真を撮ってもいいですか。",
        "explanation": "てもいい asks permission."
      }
    ],
    "reading": {
      "text": "図書館からのお知らせです。中では静かにしてください。本は三冊まで借りてもいいです。食べ物を食べてはいけません。飲み物はふたのある物だけにしてください。電話で話す人は外へ出てください。",
      "gloss": "お知らせ notice; 三冊（さんさつ） three books; ふた lid; 外（そと） outside",
      "questions": [
        "本は何冊まで借りられますか。",
        "中で食べてもいいですか。",
        "電話で話す人はどうしますか。"
      ],
      "answers": [
        "三冊までです。",
        "いいえ、いけません。",
        "外へ出ます。"
      ],
      "translation": "Library notice: Please be quiet inside. You may borrow up to three books. Do not eat. Only drinks in containers with lids are allowed. People talking on the phone should go outside.",
      "kanaHelp": "としょかんからの おしらせです。なかでは しずかに してください。ほんは さんさつまで かりても いいです。たべものを たべては いけません。のみものは ふたの ある ものだけに してください。でんわで はなす ひとは そとへ でてください。"
    },
    "listening": {
      "day": 6,
      "primaryVideoId": "ygTqkvDFMI4",
      "backupVideoId": "DgdX1UO1ruw",
      "backupTitle": "Where to Do",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "081-101"
  },
  {
    "day": 7,
    "id": "master-unit-7",
    "title": "Plain forms reasons and descriptions",
    "level": "N5 to N4",
    "grammar": [
      {
        "pattern": "plain forms and noun modification",
        "rule": "Put a plain-form clause before the noun it describes; do not add の after a verb.",
        "exampleJp": "昨日買った本を読みます。",
        "exampleEn": "I will read the book I bought yesterday.",
        "exampleFurigana": "きのう かった ほん を よみます。",
        "exampleRomaji": "Kinou katta hon o yomimasu."
      },
      {
        "pattern": "から and ので",
        "rule": "Give a reason. Before ので, noun/な-adjective nonpast affirmative normally uses な.",
        "exampleJp": "雨なので、家にいます。",
        "exampleEn": "Because it is raining, I am staying home.",
        "exampleFurigana": "あめ なので、いえ に います。",
        "exampleRomaji": "Ame nanode, ie ni imasu."
      },
      {
        "pattern": "と思う and と言う",
        "rule": "と quotes a thought or statement. Plain forms commonly precede it.",
        "exampleJp": "明日は晴れると思います。",
        "exampleEn": "I think it will be clear tomorrow.",
        "exampleFurigana": "あした は はれる と おもいます。",
        "exampleRomaji": "Ashita wa hareru to omoimasu."
      },
      {
        "pattern": "が and けど for contrast",
        "rule": "Join clauses with but; けど is more conversational.",
        "exampleJp": "この本は長いですが、面白いです。",
        "exampleEn": "This book is long but interesting.",
        "exampleFurigana": "この ほん は ながい です が、おもしろい です。",
        "exampleRomaji": "Kono hon wa nagai desu ga, omoshiroi desu."
      }
    ],
    "questions": [
      {
        "prompt": "Choose: 昨日（買った／買いましたの）本。",
        "options": [],
        "rawOptions": "",
        "answer": "買った",
        "explanation": "A plain clause modifies 本."
      },
      {
        "prompt": "Complete: 静か（　）、ここで勉強します。",
        "options": [
          "なので",
          "ので",
          "だので"
        ],
        "rawOptions": "なので／ので／だので",
        "answer": "なので",
        "explanation": "静か is a な-adjective."
      },
      {
        "prompt": "Translate: I think this book is interesting.",
        "options": [],
        "rawOptions": "",
        "answer": "この本は面白いと思います。",
        "explanation": "Quote the plain predicate before と."
      }
    ],
    "reading": {
      "text": "明日は友達と山に行く予定でした。でも、天気予報は雨だと言っています。山の道は雨の日に危ないので、行きません。その代わりに、先週できた美術館へ行きます。私はそこは面白いと思います。",
      "gloss": "天気予報（てんきよほう） weather forecast; 危ない（あぶない） dangerous; 美術館（びじゅつかん） art museum",
      "questions": [
        "明日はなぜ山に行きませんか。",
        "どんな美術館に行きますか。",
        "筆者は美術館をどう思っていますか。"
      ],
      "answers": [
        "雨で道が危ないからです。",
        "先週できた美術館です。",
        "面白いと思っています。"
      ],
      "translation": "We planned to go to the mountain tomorrow, but the forecast says rain. The mountain paths are dangerous in rain, so we will not go. Instead we will visit the art museum that opened last week. I think it will be interesting.",
      "kanaHelp": "あしたは ともだちと やまに いく よていでした。でも、てんきよほうは あめだと いっています。やまの みちは あめの ひに あぶないので、いきません。その かわりに、せんしゅう できた びじゅつかんへ いきます。わたしは そこは おもしろいと おもいます。"
    },
    "listening": {
      "day": 7,
      "primaryVideoId": "DgdX1UO1ruw",
      "backupVideoId": "npfjRWhd5_o",
      "backupTitle": "Face Parts",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "102-122"
  },
  {
    "day": 8,
    "id": "master-unit-8",
    "title": "Experience sequences and obligations",
    "level": "N4 foundation",
    "grammar": [
      {
        "pattern": "たことがある",
        "rule": "Express having had an experience; not just a single past event with a date.",
        "exampleJp": "北海道へ行ったことがあります。",
        "exampleEn": "I have been to Hokkaido.",
        "exampleFurigana": "ほっかいどう へ いった こと が あります。",
        "exampleRomaji": "Hokkaidou e itta koto ga arimasu."
      },
      {
        "pattern": "たり たりする",
        "rule": "List representative activities; the last する carries tense.",
        "exampleJp": "休みは読んだり、泳いだりします。",
        "exampleEn": "On days off I do things such as read and swim.",
        "exampleFurigana": "やすみ は よんだり、およいだり します。",
        "exampleRomaji": "Yasumi wa yondari, oyoidari shimasu."
      },
      {
        "pattern": "前に and 後で",
        "rule": "Dictionary verb plus 前に; past verb plus 後で.",
        "exampleJp": "寝る前に、歯を磨きます。",
        "exampleEn": "I brush my teeth before sleeping.",
        "exampleFurigana": "ねる まえ に、は を みがきます。",
        "exampleRomaji": "Neru mae ni, ha o migakimasu."
      },
      {
        "pattern": "なければならない and なくてもいい",
        "rule": "Express obligation and lack of necessity; なくてもいい is not prohibition.",
        "exampleJp": "明日は来なくてもいいです。",
        "exampleEn": "You do not have to come tomorrow.",
        "exampleFurigana": "あした は こなくても いい です。",
        "exampleRomaji": "Ashita wa konakutemo ii desu."
      }
    ],
    "questions": [
      {
        "prompt": "Choose: 寝る（前に／後で）、歯を磨きます。",
        "options": [],
        "rawOptions": "",
        "answer": "前に",
        "explanation": "The dictionary form fits 前に."
      },
      {
        "prompt": "Make: 読む → have read before.",
        "options": [],
        "rawOptions": "",
        "answer": "読んだことがあります。",
        "explanation": "Use past plain plus ことがある."
      },
      {
        "prompt": "Explain: 来なくてもいいです。",
        "options": [],
        "rawOptions": "",
        "answer": "You do not have to come.",
        "explanation": "It does not mean you must not come."
      }
    ],
    "reading": {
      "text": "来週、会社の研修があります。参加する人は金曜日までに申し込まなければなりません。研修の前に資料を読んでください。昼ご飯は会社が用意するので、持ってこなくてもいいです。研修の後で、質問したり、意見を話したりする時間があります。",
      "gloss": "研修（けんしゅう） training; 申し込む（もうしこむ） apply; 用意（ようい） preparation; 意見（いけん） opinion",
      "questions": [
        "いつまでに申し込みますか。",
        "昼ご飯を持ってくる必要がありますか。",
        "研修の後で何ができますか。"
      ],
      "answers": [
        "金曜日までに申し込みます。",
        "いいえ、ありません。",
        "質問したり、意見を話したりできます。"
      ],
      "translation": "There is company training next week. Participants must apply by Friday and read the materials beforehand. Lunch will be provided, so there is no need to bring it. Afterwards there will be time for questions and opinions.",
      "kanaHelp": "らいしゅう、かいしゃの けんしゅうが あります。さんかする ひとは きんようびまでに もうしこまなければ なりません。けんしゅうの まえに しりょうを よんでください。ひるごはんは かいしゃが よういするので、もってこなくても いいです。けんしゅうの あとで、しつもんしたり、いけんを はなしたりする じかんが あります。"
    },
    "listening": {
      "day": 8,
      "primaryVideoId": "Ije9dGCv91Y",
      "backupVideoId": "K32EfuTvPoM",
      "backupTitle": "Learn Japanese Naturally Super Easy Immersion Listening",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "123-143"
  },
  {
    "day": 9,
    "id": "master-unit-9",
    "title": "Ability and intention",
    "level": "N4",
    "grammar": [
      {
        "pattern": "potential verbs",
        "rule": "Godan final u changes to e plus る; ichidan adds られる. する becomes できる; 来る becomes 来られる.",
        "exampleJp": "日本語のメールが読めます。",
        "exampleEn": "I can read Japanese emails.",
        "exampleFurigana": "にほんご の メール が よめます。",
        "exampleRomaji": "Nihongo no meeru ga yomemasu."
      },
      {
        "pattern": "ことができる",
        "rule": "Dictionary verb plus ことができる also expresses ability or possibility.",
        "exampleJp": "ここで予約することができます。",
        "exampleEn": "You can reserve here.",
        "exampleFurigana": "ここ で よやく する こと が できます。",
        "exampleRomaji": "Koko de yoyaku suru koto ga dekimasu."
      },
      {
        "pattern": "つもり and 予定",
        "rule": "Dictionary/negative verb plus つもり expresses intention; 予定 indicates a plan/schedule.",
        "exampleJp": "来年、留学するつもりです。",
        "exampleEn": "I intend to study abroad next year.",
        "exampleFurigana": "らいねん、りゅうがく する つもり です。",
        "exampleRomaji": "Rainen, ryuugaku suru tsumori desu."
      },
      {
        "pattern": "volitional and ようと思う",
        "rule": "Use volitional plus と思う for intention. Godan u becomes o plus う; ichidan adds よう.",
        "exampleJp": "今夜は早く寝ようと思います。",
        "exampleEn": "I am thinking of going to bed early tonight.",
        "exampleFurigana": "こんや は はやく ねよう と おもいます。",
        "exampleRomaji": "Konya wa hayaku neyou to omoimasu."
      }
    ],
    "questions": [
      {
        "prompt": "Potential of 話す is",
        "options": [
          "話せる",
          "話される",
          "話する"
        ],
        "rawOptions": "話せる／話される／話する",
        "answer": "話せる",
        "explanation": "Godan す becomes せる."
      },
      {
        "prompt": "Make volitional: 行く、食べる、する。",
        "options": [],
        "rawOptions": "",
        "answer": "行こう、食べよう、しよう",
        "explanation": "Follow each verb class."
      },
      {
        "prompt": "Translate: I intend to study every day.",
        "options": [],
        "rawOptions": "",
        "answer": "毎日勉強するつもりです。",
        "explanation": "Dictionary form precedes つもり."
      }
    ],
    "reading": {
      "text": "来月、外国のお客様が来ます。私は簡単な英語なら話せますが、長い説明はできません。そこで、毎日十五分、英語を練習するつもりです。必要な資料は今週中に作る予定です。分からない所は同僚に聞こうと思います。",
      "gloss": "お客様（おきゃくさま） guest or customer; 同僚（どうりょう） colleague; 今週中（こんしゅうちゅう） within this week",
      "questions": [
        "筆者はどんな英語が話せますか。",
        "毎日どのくらい練習しますか。",
        "分からない所はどうするつもりですか。"
      ],
      "answers": [
        "簡単な英語です。",
        "十五分です。",
        "同僚に聞くつもりです。"
      ],
      "translation": "Foreign customers will visit next month. I can speak simple English but cannot give long explanations. I intend to practise for fifteen minutes daily and prepare the materials this week. I plan to ask colleagues about anything I do not understand.",
      "kanaHelp": ""
    },
    "listening": {
      "day": 9,
      "primaryVideoId": "K32EfuTvPoM",
      "backupVideoId": "Jh2C7JlWGKU",
      "backupTitle": "My Morning Routine",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "144-165"
  },
  {
    "day": 10,
    "id": "master-unit-10",
    "title": "Giving receiving and helpful actions",
    "level": "N4",
    "grammar": [
      {
        "pattern": "あげる くれる もらう",
        "rule": "Track giver and recipient. くれる describes giving toward the speaker's side.",
        "exampleJp": "友達が私に本をくれました。",
        "exampleEn": "A friend gave me a book.",
        "exampleFurigana": "ともだち が わたし に ほん を くれました。",
        "exampleRomaji": "Tomodachi ga watashi ni hon o kuremashita."
      },
      {
        "pattern": "てあげる てくれる てもらう",
        "rule": "Express doing or receiving a helpful action; viewpoint matters.",
        "exampleJp": "先生に説明してもらいました。",
        "exampleEn": "I had the teacher explain it to me.",
        "exampleFurigana": "せんせい に せつめい して もらいました。",
        "exampleRomaji": "Sensei ni setsumei shite moraimashita."
      },
      {
        "pattern": "てもらえますか",
        "rule": "Potential もらえる makes a polite request for someone to do something.",
        "exampleJp": "もう一度言ってもらえますか。",
        "exampleEn": "Could you say it again?",
        "exampleFurigana": "もう いちど いって もらえます か。",
        "exampleRomaji": "Mou ichido itte moraemasu ka."
      },
      {
        "pattern": "ながら",
        "rule": "Verb stem plus ながら describes simultaneous actions, normally with the same subject.",
        "exampleJp": "音楽を聞きながら料理します。",
        "exampleEn": "I cook while listening to music.",
        "exampleFurigana": "おんがく を きき ながら りょうり します。",
        "exampleRomaji": "Ongaku o kiki nagara ryouri shimasu."
      }
    ],
    "questions": [
      {
        "prompt": "Choose: 友達が私を手伝って（　）。",
        "options": [
          "くれた",
          "もらった",
          "あげた"
        ],
        "rawOptions": "くれた／もらった／あげた",
        "answer": "くれた",
        "explanation": "The friend helps the speaker."
      },
      {
        "prompt": "Who explains: 先生に説明してもらいました。",
        "options": [],
        "rawOptions": "",
        "answer": "The teacher.",
        "explanation": "The recipient is the omitted speaker."
      },
      {
        "prompt": "Order: 聞き / ながら / 音楽を / 歩きます",
        "options": [],
        "rawOptions": "",
        "answer": "音楽を聞きながら歩きます。",
        "explanation": "The first action uses the stem plus ながら."
      }
    ],
    "reading": {
      "text": "昨日、新しい同僚が入りました。私は同僚に会社の中を案内してあげました。その後、パソコンの使い方を先輩に説明してもらいました。先輩は画面を見せながら、ゆっくり話してくれました。新しい同僚は安心したようでした。",
      "gloss": "同僚（どうりょう） colleague; 案内（あんない） showing around; 先輩（せんぱい） senior colleague; 安心（あんしん） relief",
      "questions": [
        "誰が会社を案内しましたか。",
        "誰がパソコンの使い方を説明しましたか。",
        "先輩は何を見せながら話しましたか。"
      ],
      "answers": [
        "筆者です。",
        "先輩です。",
        "画面です。"
      ],
      "translation": "A new colleague joined yesterday. I showed them around. Afterwards we received an explanation of computer use from a senior colleague, who spoke slowly while showing the screen. The newcomer seemed reassured.",
      "kanaHelp": ""
    },
    "listening": {
      "day": 10,
      "primaryVideoId": "Jh2C7JlWGKU",
      "backupVideoId": "6JhEKiYGJiY",
      "backupTitle": "Talking Daily Routines with Sayuri Saying",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "166-186"
  },
  {
    "day": 11,
    "id": "master-unit-11",
    "title": "Conditions and deadlines",
    "level": "N4",
    "grammar": [
      {
        "pattern": "と for regular consequences",
        "rule": "Plain nonpast plus と often gives an automatic or regular consequence; requests and intentions are restricted in this use.",
        "exampleJp": "このボタンを押すと、ドアが開きます。",
        "exampleEn": "Pressing this button opens the door.",
        "exampleFurigana": "この ボタン を おす と、ドア が あきます。",
        "exampleRomaji": "Kono botan o osu to, doa ga akimasu."
      },
      {
        "pattern": "ば and たら",
        "rule": "ば gives a condition; たら is flexible for if/when and completed conditions.",
        "exampleJp": "駅に着いたら、電話してください。",
        "exampleEn": "Call when you arrive at the station.",
        "exampleFurigana": "えき に ついたら、でんわ して ください。",
        "exampleRomaji": "Eki ni tsuitara, denwa shite kudasai."
      },
      {
        "pattern": "なら",
        "rule": "Respond to an assumed topic or condition, often with advice.",
        "exampleJp": "京都へ行くなら、この店がおすすめです。",
        "exampleEn": "If you are going to Kyoto, I recommend this shop.",
        "exampleFurigana": "きょうと へ いく なら、この みせ が おすすめ です。",
        "exampleRomaji": "Kyouto e iku nara, kono mise ga osusume desu."
      },
      {
        "pattern": "まで and までに",
        "rule": "まで marks duration up to a point; までに marks a deadline for completion.",
        "exampleJp": "金曜日までに出してください。",
        "exampleEn": "Please submit it by Friday.",
        "exampleFurigana": "きんようび まで に だして ください。",
        "exampleRomaji": "Kinyoubi made ni dashite kudasai."
      }
    ],
    "questions": [
      {
        "prompt": "Choose a deadline: 五時（まで／までに）送ります。",
        "options": [],
        "rawOptions": "",
        "answer": "までに",
        "explanation": "Sending must be completed by five."
      },
      {
        "prompt": "Make a condition with ば: 安い。",
        "options": [],
        "rawOptions": "",
        "answer": "安ければ",
        "explanation": "い changes to ければ."
      },
      {
        "prompt": "Order: 着いたら / してください / 電話 / 駅に",
        "options": [],
        "rawOptions": "",
        "answer": "駅に着いたら、電話してください。",
        "explanation": "たら supports this request."
      }
    ],
    "reading": {
      "text": "市民講座は来週の火曜日に始まります。参加したい人は、今週の木曜日までに申し込んでください。申し込みが二十人以上になったら、大きい教室を使います。場所が変わる場合は、月曜日までにメールで知らせます。",
      "gloss": "市民講座（しみんこうざ） public course; 以上（いじょう） at least; 知らせる（しらせる） notify",
      "questions": [
        "いつまでに申し込みますか。",
        "どんな場合に大きい教室を使いますか。",
        "場所の変更は何で知らせますか。"
      ],
      "answers": [
        "今週の木曜日までに申し込みます。",
        "申し込みが二十人以上になった場合です。",
        "メールで知らせます。"
      ],
      "translation": "The public course starts next Tuesday. Apply by this Thursday. If applications reach twenty or more, a larger classroom will be used. Any venue change will be announced by email by Monday.",
      "kanaHelp": ""
    },
    "listening": {
      "day": 11,
      "primaryVideoId": "6JhEKiYGJiY",
      "backupVideoId": "lXcXkOa5LAU",
      "backupTitle": "Easy Japanese Conversation Podcast with OkkeiJapanese",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "187-207"
  },
  {
    "day": 12,
    "id": "master-unit-12",
    "title": "States preparation and accidents",
    "level": "N4",
    "grammar": [
      {
        "pattern": "transitive and intransitive",
        "rule": "Learn verb pairs with their particles: someone opens something versus something opens.",
        "exampleJp": "窓を開けます。窓が開きます。",
        "exampleEn": "I open the window. The window opens.",
        "exampleFurigana": "まど を あけます。まど が あきます。",
        "exampleRomaji": "Mado o akemasu. Mado ga akimasu."
      },
      {
        "pattern": "てある",
        "rule": "Transitive verb plus てある often describes the resulting state of an intentional preparation.",
        "exampleJp": "机に資料が置いてあります。",
        "exampleEn": "The materials have been placed on the desk.",
        "exampleFurigana": "つくえ に しりょう が おいて あります。",
        "exampleRomaji": "Tsukue ni shiryou ga oite arimasu."
      },
      {
        "pattern": "ておく",
        "rule": "Do something in preparation; colloquial contractions include とく.",
        "exampleJp": "先に予約しておきます。",
        "exampleEn": "I will reserve in advance.",
        "exampleFurigana": "さき に よやく して おきます。",
        "exampleRomaji": "Saki ni yoyaku shite okimasu."
      },
      {
        "pattern": "てしまう",
        "rule": "Marks completion or, in context, regret; conversational ちゃう／じゃう are common.",
        "exampleJp": "財布を忘れてしまいました。",
        "exampleEn": "I unfortunately forgot my wallet.",
        "exampleFurigana": "さいふ を わすれて しまいました。",
        "exampleRomaji": "Saifu o wasurete shimaimashita."
      }
    ],
    "questions": [
      {
        "prompt": "Choose: ドアが（開けて／開いて）います。",
        "options": [],
        "rawOptions": "",
        "answer": "開いて",
        "explanation": "The door is in an open state; use intransitive 開く."
      },
      {
        "prompt": "Make preparation: 読む + ておく。",
        "options": [],
        "rawOptions": "",
        "answer": "読んでおく",
        "explanation": "Use the て form."
      },
      {
        "prompt": "What can てしまう suggest in 財布をなくしてしまった?",
        "options": [],
        "rawOptions": "",
        "answer": "Regret about losing the wallet.",
        "explanation": "It can also mark completion in other contexts."
      }
    ],
    "reading": {
      "text": "会議の準備はほとんど終わりました。資料は机の上に置いてあります。窓は開いていますが、会議が始まる前に閉めておきます。飲み物を買うのを忘れてしまったので、今からコンビニへ行きます。",
      "gloss": "ほとんど almost; 資料（しりょう） materials; 閉める（しめる） close something",
      "questions": [
        "資料はどこにありますか。",
        "窓はいつ閉めますか。",
        "筆者はなぜコンビニへ行きますか。"
      ],
      "answers": [
        "机の上にあります。",
        "会議が始まる前です。",
        "飲み物を買うのを忘れたからです。"
      ],
      "translation": "Meeting preparations are almost finished. The materials are on the desk. The windows are open, but I will close them before the meeting. I forgot to buy drinks, so I am going to the convenience store now.",
      "kanaHelp": ""
    },
    "listening": {
      "day": 12,
      "primaryVideoId": "lXcXkOa5LAU",
      "backupVideoId": "Ije9dGCv91Y",
      "backupTitle": "Talking about Family",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "208-228"
  },
  {
    "day": 13,
    "id": "master-unit-13",
    "title": "Passive causative and point of view",
    "level": "N4 to N3",
    "grammar": [
      {
        "pattern": "passive",
        "rule": "Godan u becomes a plus れる; ichidan adds られる. する→される; 来る→来られる.",
        "exampleJp": "私は先生に褒められました。",
        "exampleEn": "I was praised by the teacher.",
        "exampleFurigana": "わたし は せんせい に ほめられました。",
        "exampleRomaji": "Watashi wa sensei ni homeraremashita."
      },
      {
        "pattern": "causative",
        "rule": "Godan u becomes a plus せる; ichidan adds させる. It can mean make or let.",
        "exampleJp": "母は子どもに野菜を食べさせました。",
        "exampleEn": "The mother made or let the child eat vegetables.",
        "exampleFurigana": "はは は こども に やさい を たべさせました。",
        "exampleRomaji": "Haha wa kodomo ni yasai o tabesasemashita."
      },
      {
        "pattern": "causative passive",
        "rule": "Express being made to do something. Learn full and common contracted godan forms.",
        "exampleJp": "私は一時間待たされました。",
        "exampleEn": "I was made to wait for an hour.",
        "exampleFurigana": "わたし は いちじかん またされました。",
        "exampleRomaji": "Watashi wa ichijikan matasaremashita."
      },
      {
        "pattern": "potential versus passive られる",
        "rule": "The form overlaps for ichidan verbs; use agent, particles, and context to distinguish.",
        "exampleJp": "この本は子どもにも読めます。",
        "exampleEn": "Even children can read this book.",
        "exampleFurigana": "この ほん は こども に も よめます。",
        "exampleRomaji": "Kono hon wa kodomo ni mo yomemasu."
      }
    ],
    "questions": [
      {
        "prompt": "Who acts: 私は先生に呼ばれました。",
        "options": [],
        "rawOptions": "",
        "answer": "The teacher calls the speaker.",
        "explanation": "先生に identifies the agent."
      },
      {
        "prompt": "Make causative: 食べる。",
        "options": [],
        "rawOptions": "",
        "answer": "食べさせる",
        "explanation": "Ichidan stem plus させる."
      },
      {
        "prompt": "Translate: I was made to wait.",
        "options": [],
        "rawOptions": "",
        "answer": "待たされました。",
        "explanation": "A common contracted causative-passive form of 待つ."
      }
    ],
    "reading": {
      "text": "新人の私は、先輩に会議の記録を頼まれました。最初は難しいと思いましたが、先輩は私に短い説明だけを書かせました。分からない所は後で一緒に確認しました。最後に、読みやすいと褒められて、自信が少しつきました。",
      "gloss": "新人（しんじん） newcomer; 記録（きろく） record; 頼む（たのむ） request; 自信（じしん） confidence",
      "questions": [
        "誰が記録を頼みましたか。",
        "筆者は何を書きましたか。",
        "最後に筆者はどう感じましたか。"
      ],
      "answers": [
        "先輩です。",
        "短い説明だけを書きました。",
        "少し自信がつきました。"
      ],
      "translation": "As a newcomer I was asked by a senior colleague to record the meeting. It seemed hard, but they had me write only short explanations. We checked difficult parts together afterwards. Being praised for readability gave me a little confidence.",
      "kanaHelp": ""
    },
    "listening": {
      "day": 13,
      "primaryVideoId": "iQSP-aZt1jU",
      "backupVideoId": "4oFvoEE37zQ",
      "backupTitle": "Cheap Eat Out in Japan",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "229-250"
  },
  {
    "day": 14,
    "id": "master-unit-14",
    "title": "Polite interaction and embedded questions",
    "level": "N4 to N3",
    "grammar": [
      {
        "pattern": "respectful verbs",
        "rule": "Use respectful language for the other person's actions: いらっしゃる, おっしゃる, 召し上がる.",
        "exampleJp": "先生は何とおっしゃいましたか。",
        "exampleEn": "What did the teacher say?",
        "exampleFurigana": "せんせい は なん と おっしゃいました か。",
        "exampleRomaji": "Sensei wa nan to osshaimashita ka."
      },
      {
        "pattern": "humble verbs",
        "rule": "Use humble language for your own side's actions toward others: 伺う, 申す, 拝見する.",
        "exampleJp": "明日、先生の研究室に伺います。",
        "exampleEn": "I will visit the teacher's office tomorrow.",
        "exampleFurigana": "あした、せんせい の けんきゅうしつ に うかがいます。",
        "exampleRomaji": "Ashita, sensei no kenkyuushitsu ni ukagaimasu."
      },
      {
        "pattern": "かどうか and question clause か",
        "rule": "Embed yes/no questions with かどうか; question-word clauses take か.",
        "exampleJp": "何時に始まるか知っていますか。",
        "exampleEn": "Do you know what time it starts?",
        "exampleFurigana": "なんじ に はじまる か しっています か。",
        "exampleRomaji": "Nanji ni hajimaru ka shitte imasu ka."
      },
      {
        "pattern": "んです and いただけませんか",
        "rule": "んです adds explanatory context; ていただけませんか makes a courteous request.",
        "exampleJp": "もう一度説明していただけませんか。",
        "exampleEn": "Could you explain once more?",
        "exampleFurigana": "もう いちど せつめい して いただけません か。",
        "exampleRomaji": "Mou ichido setsumei shite itadakemasen ka."
      }
    ],
    "questions": [
      {
        "prompt": "Respectful of 言う is",
        "options": [
          "おっしゃる",
          "申す",
          "拝見する"
        ],
        "rawOptions": "おっしゃる／申す／拝見する",
        "answer": "おっしゃる",
        "explanation": "申す is humble; 拝見する is humble looking."
      },
      {
        "prompt": "Complete: 参加できる（　）、まだ分かりません。",
        "options": [
          "かどうか",
          "か何",
          "どう"
        ],
        "rawOptions": "かどうか／か何／どう",
        "answer": "かどうか",
        "explanation": "Embed whether participation is possible."
      },
      {
        "prompt": "Translate: I do not know where the room is.",
        "options": [],
        "rawOptions": "",
        "answer": "部屋がどこにあるか分かりません。",
        "explanation": "Embedded question keeps か."
      }
    ],
    "reading": {
      "text": "お客様から電話がありました。明日の説明会に参加できるかどうか、まだ分からないそうです。私は、今日の五時までに連絡していただけませんかとお願いしました。お客様は、確認してから、もう一度電話するとおっしゃいました。",
      "gloss": "説明会（せつめいかい） information session; 確認（かくにん） checking; お願い（おねがい） request",
      "questions": [
        "お客様は何がまだ分かりませんか。",
        "筆者はいつまでの連絡を頼みましたか。",
        "お客様は次に何をしますか。"
      ],
      "answers": [
        "明日の説明会に参加できるかどうかです。",
        "今日の五時までです。",
        "確認してから、もう一度電話します。"
      ],
      "translation": "A customer called and apparently does not yet know whether they can attend tomorrow's information session. I asked them to contact us by five today. They said they would check and call again.",
      "kanaHelp": ""
    },
    "listening": {
      "day": 14,
      "primaryVideoId": "4oFvoEE37zQ",
      "backupVideoId": "AS9WwdQfHXQ",
      "backupTitle": "Episode 203 Saving Money",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "251-276"
  },
  {
    "day": 15,
    "id": "master-unit-15",
    "title": "Time windows and stages",
    "level": "N3 bridge",
    "grammar": [
      {
        "pattern": "うちに",
        "rule": "While a favourable condition holds, or a change happens during an ongoing state. Attachment varies by word class.",
        "exampleJp": "温かいうちに食べてください。",
        "exampleEn": "Please eat while it is warm.",
        "exampleFurigana": "あたたかい うち に たべて ください。",
        "exampleRomaji": "Atatakai uchi ni tabete kudasai."
      },
      {
        "pattern": "間 and 間に",
        "rule": "間 commonly describes something throughout a period; 間に places an event within it.",
        "exampleJp": "留守の間に荷物が届きました。",
        "exampleEn": "A package arrived while I was out.",
        "exampleFurigana": "るす の あいだ に にもつ が とどきました。",
        "exampleRomaji": "Rusu no aida ni nimotsu ga todokimashita."
      },
      {
        "pattern": "ところだ",
        "rule": "Dictionary form: about to; ている: in progress; た: just completed.",
        "exampleJp": "今、家を出るところです。",
        "exampleEn": "I am just about to leave home.",
        "exampleFurigana": "いま、いえ を でる ところ です。",
        "exampleRomaji": "Ima, ie o deru tokoro desu."
      },
      {
        "pattern": "たばかり",
        "rule": "Describes something as recent from the speaker's viewpoint; it need not mean seconds ago.",
        "exampleJp": "先月、引っ越したばかりです。",
        "exampleEn": "I only moved last month.",
        "exampleFurigana": "せんげつ、ひっこした ばかり です。",
        "exampleRomaji": "Sengetsu, hikkoshita bakari desu."
      }
    ],
    "questions": [
      {
        "prompt": "Choose: 温かい（うちに／たびに）食べてください。",
        "options": [],
        "rawOptions": "",
        "answer": "うちに",
        "explanation": "Eat before the condition changes."
      },
      {
        "prompt": "What stage: 今から出るところです。",
        "options": [],
        "rawOptions": "",
        "answer": "About to leave.",
        "explanation": "Dictionary form plus ところ."
      },
      {
        "prompt": "Order: 荷物が / 間に / 留守の / 届いた",
        "options": [],
        "rawOptions": "",
        "answer": "留守の間に荷物が届いた。",
        "explanation": "The arrival occurs within the absence."
      }
    ],
    "reading": {
      "text": "新しい町に引っ越したばかりなので、まだ店の場所がよく分かりません。今日は昼休みの間に、駅前のパン屋に行きました。店員さんは、焼いたばかりのパンがあると言いました。会社に戻ってから食べようと思いましたが、温かいうちに食べたくなり、公園で食べました。",
      "gloss": "引っ越す（ひっこす） move house; 焼く（やく） bake; 戻る（もどる） return",
      "questions": [
        "筆者はなぜ店の場所が分かりませんか。",
        "いつパン屋に行きましたか。",
        "なぜ公園で食べましたか。"
      ],
      "answers": [
        "引っ越したばかりだからです。",
        "昼休みの間に行きました。",
        "温かいうちに食べたかったからです。"
      ],
      "translation": "I have only recently moved, so I do not know the shops well. During lunch I visited the bakery near the station. The assistant said there was freshly baked bread. I planned to eat back at work, but wanted it while warm, so ate in the park.",
      "kanaHelp": ""
    },
    "listening": {
      "day": 15,
      "primaryVideoId": "AS9WwdQfHXQ",
      "backupVideoId": "BsnfxAUlkIQ",
      "backupTitle": "Episode 229 How Do You Use Your Money",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "277-302"
  },
  {
    "day": 16,
    "id": "master-unit-16",
    "title": "Decisions habits and change",
    "level": "N3 bridge",
    "grammar": [
      {
        "pattern": "ことにする and ことになる",
        "rule": "Distinguish a personal decision from a decision/arrangement or outcome of circumstances.",
        "exampleJp": "毎朝歩くことにしました。",
        "exampleEn": "I decided to walk every morning.",
        "exampleFurigana": "まいあさ あるく こと に しました。",
        "exampleRomaji": "Maiasa aruku koto ni shimashita."
      },
      {
        "pattern": "ようにする",
        "rule": "Make an effort or establish a practice, often with している for an ongoing habit.",
        "exampleJp": "毎日復習するようにしています。",
        "exampleEn": "I make a point of reviewing daily.",
        "exampleFurigana": "まいにち ふくしゅう する ように しています。",
        "exampleRomaji": "Mainichi fukushuu suru you ni shite imasu."
      },
      {
        "pattern": "ようになる",
        "rule": "Describe a change in behaviour or ability. Potential forms are common before it.",
        "exampleJp": "日本語のニュースが少し分かるようになりました。",
        "exampleEn": "I have become able to understand some Japanese news.",
        "exampleFurigana": "にほんご の ニュース が すこし わかる ように なりました。",
        "exampleRomaji": "Nihongo no nyuusu ga sukoshi wakaru you ni narimashita."
      },
      {
        "pattern": "ようとする",
        "rule": "Volitional plus とする expresses an attempt or being about to act.",
        "exampleJp": "出かけようとした時、電話が鳴りました。",
        "exampleEn": "The phone rang when I was about to go out.",
        "exampleFurigana": "でかけよう と した とき、でんわ が なりました。",
        "exampleRomaji": "Dekakeyou to shita toki, denwa ga narimashita."
      }
    ],
    "questions": [
      {
        "prompt": "Personal decision: 毎日歩く（ことにした／ことになった）。",
        "options": [],
        "rawOptions": "",
        "answer": "ことにした",
        "explanation": "The prompt specifies the learner's own decision."
      },
      {
        "prompt": "Translate: I have become able to read kanji.",
        "options": [],
        "rawOptions": "",
        "answer": "漢字が読めるようになりました。",
        "explanation": "Potential plus ようになる."
      },
      {
        "prompt": "Order: した時 / 電話が / 出かけようと / 鳴った",
        "options": [],
        "rawOptions": "",
        "answer": "出かけようとした時、電話が鳴った。",
        "explanation": "ようとする marks being about to act."
      }
    ],
    "reading": {
      "text": "来月から、会社の朝の会議を日本語で行うことになりました。私は聞く練習を増やすことにしました。通勤中も短い会話を聞くようにしています。最初は数字しか分かりませんでしたが、今は予定や理由も少し分かるようになりました。ただ、一度で全部理解できるわけではありません。",
      "gloss": "通勤中（つうきんちゅう） while commuting; 増やす（ふやす） increase; 理解（りかい） understanding",
      "questions": [
        "会社では何が変わりますか。",
        "筆者はいつ会話を聞きますか。",
        "今、全部一度で理解できますか。"
      ],
      "answers": [
        "朝の会議を日本語で行うことになります。",
        "通勤中にも聞きます。",
        "いいえ、全部理解できるわけではありません。"
      ],
      "translation": "From next month the morning meeting will be in Japanese. I decided to listen more and make a habit of listening to short conversations while commuting. Initially I understood only numbers; now I understand some plans and reasons too. I still cannot understand everything in one attempt.",
      "kanaHelp": ""
    },
    "listening": {
      "day": 16,
      "primaryVideoId": "BsnfxAUlkIQ",
      "backupVideoId": "87ndwTQ3tKU",
      "backupTitle": "Episode 64 Work and Life",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "303-329"
  },
  {
    "day": 17,
    "id": "master-unit-17",
    "title": "Evidence appearance and reports",
    "level": "N3 bridge",
    "grammar": [
      {
        "pattern": "そうだ for appearance",
        "rule": "Verb stem plus そう; adjective stems also combine with it. いい becomes よさそう; negative ない becomes なさそう.",
        "exampleJp": "雨が降りそうです。",
        "exampleEn": "It looks as if it will rain.",
        "exampleFurigana": "あめ が ふりそう です。",
        "exampleRomaji": "Ame ga furisou desu."
      },
      {
        "pattern": "そうだ for hearsay",
        "rule": "A plain clause plus そう reports information; noun/な-adjective affirmative uses だそう.",
        "exampleJp": "予報によると、明日は雨だそうです。",
        "exampleEn": "The forecast says it will rain tomorrow.",
        "exampleFurigana": "よほう による と、あした は あめ だ そう です。",
        "exampleRomaji": "Yohou ni yoru to, ashita wa ame da sou desu."
      },
      {
        "pattern": "ようだ and みたいだ",
        "rule": "Express a judgment based on evidence or resemblance; みたい is more conversational.",
        "exampleJp": "隣の部屋には誰もいないようです。",
        "exampleEn": "It seems nobody is in the next room.",
        "exampleFurigana": "となり の へや に は だれ も いない よう です。",
        "exampleRomaji": "Tonari no heya ni wa dare mo inai you desu."
      },
      {
        "pattern": "らしい",
        "rule": "Can mark information-based inference or a typical quality; interpret the context.",
        "exampleJp": "田中さんは来週休むらしいです。",
        "exampleEn": "Apparently Tanaka will be off next week.",
        "exampleFurigana": "たなかさん は らいしゅう やすむ らしい です。",
        "exampleRomaji": "Tanaka-san wa raishuu yasumu rashii desu."
      }
    ],
    "questions": [
      {
        "prompt": "Hearsay: 天気予報によると、雨が（降るそう／降りそう）です。",
        "options": [],
        "rawOptions": "",
        "answer": "降るそう",
        "explanation": "Plain verb form marks a report."
      },
      {
        "prompt": "Appearance of おいしい is",
        "options": [
          "おいしそう",
          "おいしいそう",
          "おいしくそう"
        ],
        "rawOptions": "おいしそう／おいしいそう／おいしくそう",
        "answer": "おいしそう",
        "explanation": "Remove final い in this appearance pattern."
      },
      {
        "prompt": "Translate: It seems nobody is here.",
        "options": [],
        "rawOptions": "",
        "answer": "ここには誰もいないようです。",
        "explanation": "ない plus ようだ makes an evidence-based judgment."
      }
    ],
    "reading": {
      "text": "朝、空が暗くなってきたので、雨が降りそうだと思いました。でも、天気予報によると、夕方までは降らないそうです。同僚は駅の近くではもう雨が降っているらしいと言いました。場所によって天気が違うようなので、私は傘を持って出かけました。",
      "gloss": "暗い（くらい） dark; 傘（かさ） umbrella; 場所によって depending on location",
      "questions": [
        "筆者は最初、何を見て判断しましたか。",
        "予報ではいつまで雨が降りませんか。",
        "筆者は何を持って出かけましたか。"
      ],
      "answers": [
        "暗くなってきた空です。",
        "夕方までです。",
        "傘を持って出かけました。"
      ],
      "translation": "The sky darkened, so I thought rain looked likely. The forecast said it would not rain until evening, but a colleague said it was apparently already raining near the station. Since conditions seemed to vary by place, I took an umbrella.",
      "kanaHelp": ""
    },
    "listening": {
      "day": 17,
      "primaryVideoId": "87ndwTQ3tKU",
      "backupVideoId": "NZegwBJMedI",
      "backupTitle": "Episode 62 English Teaching Job in Japan",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "330-355"
  },
  {
    "day": 18,
    "id": "master-unit-18",
    "title": "Expectations explanations and limits",
    "level": "N3 bridge",
    "grammar": [
      {
        "pattern": "はずだ and はずがない",
        "rule": "Express a grounded expectation or strong impossibility based on reasoning.",
        "exampleJp": "もう発送したので、明日届くはずです。",
        "exampleEn": "It has shipped, so it should arrive tomorrow.",
        "exampleFurigana": "もう はっそう した ので、あした とどく はず です。",
        "exampleRomaji": "Mou hassou shita node, ashita todoku hazu desu."
      },
      {
        "pattern": "わけだ",
        "rule": "Express a conclusion or an explanation that follows from information.",
        "exampleJp": "毎日練習しているんですね。上手なわけです。",
        "exampleEn": "You practise daily; that explains your skill.",
        "exampleFurigana": "まいにち れんしゅう している ん です ね。じょうず な わけ です。",
        "exampleRomaji": "Mainichi renshuu shite iru n desu ne. Jouzu na wake desu."
      },
      {
        "pattern": "わけではない",
        "rule": "Deny a generalisation or full implication: not necessarily, not entirely.",
        "exampleJp": "高い物がいつも良いわけではありません。",
        "exampleEn": "Expensive things are not always good.",
        "exampleFurigana": "たかい もの が いつも いい わけ で は ありません。",
        "exampleRomaji": "Takai mono ga itsumo ii wake de wa arimasen."
      },
      {
        "pattern": "かもしれない and に違いない",
        "rule": "Possibility versus strong conviction; do not treat them as equal certainty.",
        "exampleJp": "彼は道に迷ったのかもしれません。",
        "exampleEn": "He may have lost his way.",
        "exampleFurigana": "かれ は みち に まよった の かも しれません。",
        "exampleRomaji": "Kare wa michi ni mayotta no kamo shiremasen."
      }
    ],
    "questions": [
      {
        "prompt": "A grounded expectation: 予約したので、席がある（はず／たび）です。",
        "options": [],
        "rawOptions": "",
        "answer": "はず",
        "explanation": "There is a stated basis for the expectation."
      },
      {
        "prompt": "Explain: 日本語が全く分からないわけではない。",
        "options": [],
        "rawOptions": "",
        "answer": "It is not that I understand no Japanese at all.",
        "explanation": "わけではない rejects the complete negative implication."
      },
      {
        "prompt": "Order: 物が / 良いわけではない / 高い / いつも",
        "options": [],
        "rawOptions": "",
        "answer": "高い物がいつも良いわけではない。",
        "explanation": "The final negation limits the generalisation."
      }
    ],
    "reading": {
      "text": "無料の学習会は役に立たないと思う人もいるかもしれません。しかし、料金が安いからといって、内容まで悪いわけではありません。私が参加した会では、先生が一人ずつ質問に答えてくれました。大切なのは値段より、自分の疑問を解決できるかどうかだと思います。",
      "gloss": "料金（りょうきん） fee; 内容（ないよう） content; 疑問（ぎもん） question or doubt; 解決（かいけつ） solution",
      "questions": [
        "筆者は無料の学習会を必ず悪いと思っていますか。",
        "参加した会で先生は何をしましたか。",
        "筆者は何が大切だと言っていますか。"
      ],
      "answers": [
        "いいえ、そうではありません。",
        "一人ずつ質問に答えました。",
        "自分の疑問を解決できるかどうかです。"
      ],
      "translation": "Some may assume free study meetings are unhelpful. Yet a low price does not mean poor content. At the meeting I attended, the teacher answered each person's questions. I think what matters more than price is whether it resolves your questions.",
      "kanaHelp": ""
    },
    "listening": {
      "day": 18,
      "primaryVideoId": "NZegwBJMedI",
      "backupVideoId": "6MhAX2dHpEs",
      "backupTitle": "Episode 217 The Reason Why I Have Been Traveling",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "356-382"
  },
  {
    "day": 19,
    "id": "master-unit-19",
    "title": "Purpose causes and unintended results",
    "level": "N3 bridge",
    "grammar": [
      {
        "pattern": "ために and ように",
        "rule": "For purpose, ために commonly combines with deliberate action; ように often aims at a state, ability, or avoiding a result.",
        "exampleJp": "忘れないようにメモします。",
        "exampleEn": "I take notes so I will not forget.",
        "exampleFurigana": "わすれない ように メモ します。",
        "exampleRomaji": "Wasurenai you ni memo shimasu."
      },
      {
        "pattern": "おかげで and せいで",
        "rule": "Attribute a favourable result or blame a cause for an unfavourable result; ironic uses also exist.",
        "exampleJp": "友達のおかげで間に合いました。",
        "exampleEn": "Thanks to my friend, I made it in time.",
        "exampleFurigana": "ともだち の おかげ で まにあいました。",
        "exampleRomaji": "Tomodachi no okage de maniaimashita."
      },
      {
        "pattern": "のに and ても",
        "rule": "のに often expresses an unexpected outcome despite a fact; ても allows even if/even though.",
        "exampleJp": "勉強したのに、答えられませんでした。",
        "exampleEn": "Although I studied, I could not answer.",
        "exampleFurigana": "べんきょう した のに、こたえられません でした。",
        "exampleRomaji": "Benkyou shita noni, kotaeraremasen deshita."
      },
      {
        "pattern": "によって causal use",
        "rule": "によって can mark a cause, means, agent, or variation. Identify the relationship in context.",
        "exampleJp": "大雨によって電車が止まりました。",
        "exampleEn": "The trains stopped because of heavy rain.",
        "exampleFurigana": "おおあめ によって でんしゃ が とまりました。",
        "exampleRomaji": "Ooame ni yotte densha ga tomarimashita."
      }
    ],
    "questions": [
      {
        "prompt": "Choose: 聞こえる（ように／ために）、大きな声で話してください。",
        "options": [],
        "rawOptions": "",
        "answer": "ように",
        "explanation": "The desired outcome is audibility."
      },
      {
        "prompt": "Positive attribution: 先生の（おかげ／せい）で分かりました。",
        "options": [],
        "rawOptions": "",
        "answer": "おかげ",
        "explanation": "The stated result is favourable."
      },
      {
        "prompt": "Translate: I studied, but could not answer, unexpectedly.",
        "options": [],
        "rawOptions": "",
        "answer": "勉強したのに、答えられませんでした。",
        "explanation": "のに expresses the unexpected contrast."
      }
    ],
    "reading": {
      "text": "昨日は大雨のせいで、いつもの電車が止まりました。遅れないように早く出たのに、駅で二十分待つことになりました。すると、同僚が別のバスを教えてくれました。そのおかげで、会議には何とか間に合いました。次からは、出発前に交通情報を調べようと思います。",
      "gloss": "交通情報（こうつうじょうほう） traffic information; 何とか（なんとか） somehow; 別（べつ） different",
      "questions": [
        "なぜ電車が止まりましたか。",
        "同僚は何を教えましたか。",
        "次から筆者は何をするつもりですか。"
      ],
      "answers": [
        "大雨のせいです。",
        "別のバスを教えました。",
        "出発前に交通情報を調べるつもりです。"
      ],
      "translation": "Heavy rain stopped my usual train. Although I left early to avoid being late, I had to wait twenty minutes. A colleague told me about another bus, and thanks to that I reached the meeting in time. Next time I will check transport information first.",
      "kanaHelp": ""
    },
    "listening": {
      "day": 19,
      "primaryVideoId": "6MhAX2dHpEs",
      "backupVideoId": "wKBjlyM0JbA",
      "backupTitle": "Road Trip to Mount Fuji",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "383-408"
  },
  {
    "day": 20,
    "id": "master-unit-20",
    "title": "Degree comparisons and restrictions",
    "level": "N3 bridge",
    "grammar": [
      {
        "pattern": "ほど and くらい",
        "rule": "Express degree; くらい also approximates amounts. Context determines the nuance.",
        "exampleJp": "歩けないほど疲れました。",
        "exampleEn": "I was so tired I could not walk.",
        "exampleFurigana": "あるけない ほど つかれました。",
        "exampleRomaji": "Arukenai hodo tsukaremashita."
      },
      {
        "pattern": "ば ほど",
        "rule": "Express a correlated increase: the more X, the more Y.",
        "exampleJp": "読めば読むほど面白くなります。",
        "exampleEn": "The more I read, the more interesting it becomes.",
        "exampleFurigana": "よめば よむ ほど おもしろく なります。",
        "exampleRomaji": "Yomeba yomu hodo omoshiroku narimasu."
      },
      {
        "pattern": "しか ない and だけ",
        "rule": "しか requires a negative predicate and can stress insufficiency; だけ limits scope without that requirement.",
        "exampleJp": "あと十分しかありません。",
        "exampleEn": "Only ten minutes remain.",
        "exampleFurigana": "あと じゅっぷん しか ありません。",
        "exampleRomaji": "Ato juppun shika arimasu."
      },
      {
        "pattern": "ばかり and ばかりでなく",
        "rule": "ばかり can indicate exclusive/repeated activity; ばかりでなく means not only.",
        "exampleJp": "彼は英語ばかりでなく、中国語も話せます。",
        "exampleEn": "He speaks Chinese as well as English.",
        "exampleFurigana": "かれ は えいご ばかり で なく、ちゅうごくご も はなせます。",
        "exampleRomaji": "Kare wa eigo bakari de naku, chuugokugo mo hanasemasu."
      }
    ],
    "questions": [
      {
        "prompt": "Choose: あと五分しか（あります／ありません）。",
        "options": [],
        "rawOptions": "",
        "answer": "ありません",
        "explanation": "しか pairs with a negative predicate."
      },
      {
        "prompt": "Complete: 練習すれば練習する（　）、上手になります。",
        "options": [
          "ほど",
          "たび",
          "だけに"
        ],
        "rawOptions": "ほど／たび／だけに",
        "answer": "ほど",
        "explanation": "The paired construction is ～ば～ほど."
      },
      {
        "prompt": "Explain: 漢字ばかり勉強している。",
        "options": [],
        "rawOptions": "",
        "answer": "Spending one's study time only or overwhelmingly on kanji.",
        "explanation": "ばかり can suggest an unbalanced repeated focus."
      }
    ],
    "reading": {
      "text": "以前は、試験に合格するために漢字ばかり覚えていました。しかし、漢字を知っているだけでは、会話の内容までは分かりませんでした。今は毎日、短い会話を聞いています。聞けば聞くほど、同じ言葉でも場面によって意味が変わることに気づきます。",
      "gloss": "以前（いぜん） previously; 場面（ばめん） situation; 気づく（きづく） notice",
      "questions": [
        "以前、筆者は何に集中していましたか。",
        "漢字を知るだけで会話が分かりましたか。",
        "聞く練習で何に気づきますか。"
      ],
      "answers": [
        "漢字を覚えることです。",
        "いいえ、分かりませんでした。",
        "場面によって言葉の意味が変わることです。"
      ],
      "translation": "I used to memorise almost nothing but kanji for the exam. Knowing characters alone did not let me understand conversations. Now I listen to short dialogues daily. The more I listen, the more I notice how a word's meaning changes with the situation.",
      "kanaHelp": ""
    },
    "listening": {
      "day": 20,
      "primaryVideoId": "wKBjlyM0JbA",
      "backupVideoId": "iQSP-aZt1jU",
      "backupTitle": "Daily Routine in Chile",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "409-435"
  },
  {
    "day": 21,
    "id": "master-unit-21",
    "title": "Topics perspectives and relationships",
    "level": "N3 bridge",
    "grammar": [
      {
        "pattern": "について and に関して",
        "rule": "Mark the topic: about or concerning. Learn noun-modifying forms such as についての.",
        "exampleJp": "試験について質問があります。",
        "exampleEn": "I have a question about the exam.",
        "exampleFurigana": "しけん について しつもん が あります。",
        "exampleRomaji": "Shiken ni tsuite shitsumon ga arimasu."
      },
      {
        "pattern": "に対して",
        "rule": "Can mark a target or a contrast. Do not replace every use with について.",
        "exampleJp": "お客様に対して丁寧に話します。",
        "exampleEn": "I speak politely to customers.",
        "exampleFurigana": "おきゃくさま に たいして ていねい に はなします。",
        "exampleRomaji": "Okyakusama ni taishite teinei ni hanashimasu."
      },
      {
        "pattern": "にとって and として",
        "rule": "にとって gives a viewpoint; として gives a role or status.",
        "exampleJp": "教師として働いています。",
        "exampleEn": "I work as a teacher.",
        "exampleFurigana": "きょうし として はたらいて います。",
        "exampleRomaji": "Kyoushi to shite hataraite imasu."
      },
      {
        "pattern": "によって and に比べて",
        "rule": "によって can mark variation by a factor; に比べて establishes a comparison baseline.",
        "exampleJp": "人によって意見が違います。",
        "exampleEn": "Opinions differ from person to person.",
        "exampleFurigana": "ひと によって いけん が ちがいます。",
        "exampleRomaji": "Hito ni yotte iken ga chigaimasu."
      }
    ],
    "questions": [
      {
        "prompt": "Choose viewpoint: 私（にとって／について）、家族は大切です。",
        "options": [],
        "rawOptions": "",
        "answer": "にとって",
        "explanation": "The sentence evaluates from the speaker's perspective."
      },
      {
        "prompt": "Translate: I work as an engineer.",
        "options": [],
        "rawOptions": "",
        "answer": "エンジニアとして働いています。",
        "explanation": "として marks the role."
      },
      {
        "prompt": "Order: 違います / 人によって / 考え方が",
        "options": [],
        "rawOptions": "",
        "answer": "人によって考え方が違います。",
        "explanation": "によって marks the factor of variation."
      }
    ],
    "reading": {
      "text": "会社で、在宅勤務について意見を集めました。通勤時間が長い人にとって、在宅勤務は便利です。一方、新しく入った社員は、質問しにくいと感じることもあります。全員に同じ方法が合うわけではないので、チームによって働き方を選べる制度を考えることになりました。",
      "gloss": "在宅勤務（ざいたくきんむ） working from home; 制度（せいど） system; 社員（しゃいん） employee",
      "questions": [
        "通勤時間が長い人には何が便利ですか。",
        "新しい社員は何に困ることがありますか。",
        "会社はどんな制度を考えますか。"
      ],
      "answers": [
        "在宅勤務です。",
        "質問しにくいことです。",
        "チームによって働き方を選べる制度です。"
      ],
      "translation": "The company collected views about working from home. It is convenient for long commuters, while new employees sometimes find it hard to ask questions. Since one method does not suit everyone, we will consider a system that lets teams choose how they work.",
      "kanaHelp": ""
    },
    "listening": {
      "day": 21,
      "primaryVideoId": "6K3Yby5-iq0",
      "backupVideoId": "V8TXcQ0lHqQ",
      "backupTitle": "Thirty Minute Easy Japanese Conversation with am japanese",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "436-461"
  },
  {
    "day": 22,
    "id": "master-unit-22",
    "title": "Repeated events sequence and opportunity",
    "level": "N3 bridge",
    "grammar": [
      {
        "pattern": "たびに",
        "rule": "Dictionary verb or noun の plus たびに means every time.",
        "exampleJp": "この写真を見るたびに旅行を思い出します。",
        "exampleEn": "Every time I see this photo, I remember the trip.",
        "exampleFurigana": "この しゃしん を みる たび に りょこう を おもいだします。",
        "exampleRomaji": "Kono shashin o miru tabi ni ryokou o omoidashimasu."
      },
      {
        "pattern": "ついでに",
        "rule": "Use an existing trip/action as an opportunity to do another thing; dictionary/past verb or noun の can precede it.",
        "exampleJp": "買い物のついでに郵便局に寄ります。",
        "exampleEn": "I will stop at the post office while out shopping.",
        "exampleFurigana": "かいもの の ついで に ゆうびんきょく に よります。",
        "exampleRomaji": "Kaimono no tsuide ni yuubinkyoku ni yorimasu."
      },
      {
        "pattern": "てからでないと",
        "rule": "Unless something is done first; the following clause commonly describes inability or a restriction.",
        "exampleJp": "確認してからでないと、送れません。",
        "exampleEn": "I cannot send it until I have checked it.",
        "exampleFurigana": "かくにん して から でないと、おくれません。",
        "exampleRomaji": "Kakunin shite kara denai to, okuremasen."
      },
      {
        "pattern": "とおりに and まま",
        "rule": "とおり follows an example/instruction; まま preserves a state.",
        "exampleJp": "説明書のとおりに組み立ててください。",
        "exampleEn": "Please assemble it according to the instructions.",
        "exampleFurigana": "せつめいしょ の とおり に くみたてて ください。",
        "exampleRomaji": "Setsumeisho no toori ni kumitatete kudasai."
      }
    ],
    "questions": [
      {
        "prompt": "Choose: この歌を聞く（たびに／ついでに）、故郷を思い出す。",
        "options": [],
        "rawOptions": "",
        "answer": "たびに",
        "explanation": "The memory happens every time."
      },
      {
        "prompt": "Explain: 電気をつけたまま寝た。",
        "options": [],
        "rawOptions": "",
        "answer": "Went to sleep with the light still on.",
        "explanation": "まま preserves the lit state."
      },
      {
        "prompt": "Order: 送れない / してからでないと / 確認",
        "options": [],
        "rawOptions": "",
        "answer": "確認してからでないと、送れない。",
        "explanation": "Checking must happen first."
      }
    ],
    "reading": {
      "text": "新しい機械を使うたびに、同じ所で止まってしまいました。説明書のとおりに操作しているつもりでしたが、電源を入れる前に押すボタンを忘れていました。詳しい人に確認してからでないと、一人では使えそうにありません。明日、別の相談をするついでに、その操作も教えてもらうことにしました。",
      "gloss": "機械（きかい） machine; 操作（そうさ） operation; 電源（でんげん） power supply",
      "questions": [
        "機械はどのくらい止まりましたか。",
        "何を忘れていましたか。",
        "明日は何を教えてもらいますか。"
      ],
      "answers": [
        "使うたびに同じ所で止まりました。",
        "電源を入れる前に押すボタンを忘れていました。",
        "機械の操作です。"
      ],
      "translation": "The machine stopped at the same point every time I used it. I thought I was following the instructions, but forgot a button that must be pressed before switching on the power. I probably cannot use it alone until I check with someone knowledgeable. Tomorrow, while asking about another issue, I will get them to explain this operation too.",
      "kanaHelp": ""
    },
    "listening": {
      "day": 22,
      "primaryVideoId": "V8TXcQ0lHqQ",
      "backupVideoId": "L43GiFQMQrU",
      "backupTitle": "Japanese Conversation Practice How to Be Happy",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "462-487"
  },
  {
    "day": 23,
    "id": "master-unit-23",
    "title": "Duties advice and social constraints",
    "level": "N3 bridge",
    "grammar": [
      {
        "pattern": "べきだ and べきではない",
        "rule": "Give normative advice or state a duty. Use dictionary form; するべき and すべき are both possible.",
        "exampleJp": "約束は守るべきです。",
        "exampleEn": "You should keep promises.",
        "exampleFurigana": "やくそく は まもる べき です。",
        "exampleRomaji": "Yakusoku wa mamoru beki desu."
      },
      {
        "pattern": "わけにはいかない",
        "rule": "Cannot do something because of duty or social circumstances rather than physical inability.",
        "exampleJp": "明日は試験なので、今夜は遊ぶわけにはいきません。",
        "exampleEn": "I cannot go out for fun tonight because my exam is tomorrow.",
        "exampleFurigana": "あした は しけん なので、こんや は あそぶ わけ に は いきません。",
        "exampleRomaji": "Ashita wa shiken nanode, konya wa asobu wake ni wa ikimasen."
      },
      {
        "pattern": "ないわけにはいかない",
        "rule": "Cannot avoid doing something; the double negative creates obligation.",
        "exampleJp": "お世話になったので、お礼を言わないわけにはいきません。",
        "exampleEn": "I have to thank them because they helped me.",
        "exampleFurigana": "おせわ に なった ので、おれい を いわない わけ に は いきません。",
        "exampleRomaji": "Osewa ni natta node, orei o iwanai wake ni wa ikimasen."
      },
      {
        "pattern": "ことはない and しかない",
        "rule": "Dictionary verb plus ことはない often means no need to; dictionary verb plus しかない means no choice but to.",
        "exampleJp": "一人で心配することはありません。",
        "exampleEn": "There is no need to worry alone.",
        "exampleFurigana": "ひとり で しんぱい する こと は ありません。",
        "exampleRomaji": "Hitori de shinpai suru koto wa arimasen."
      }
    ],
    "questions": [
      {
        "prompt": "Choose duty: 約束は守る（べき／たび）です。",
        "options": [],
        "rawOptions": "",
        "answer": "べき",
        "explanation": "べき states a normative expectation."
      },
      {
        "prompt": "Explain: 行かないわけにはいかない。",
        "options": [],
        "rawOptions": "",
        "answer": "I cannot avoid going; I have to go.",
        "explanation": "Follow both negatives."
      },
      {
        "prompt": "Translate: There is no choice but to wait.",
        "options": [],
        "rawOptions": "",
        "answer": "待つしかありません。",
        "explanation": "Dictionary verb plus しかない."
      }
    ],
    "reading": {
      "text": "同僚から、明日の発表を代わってほしいと頼まれました。私は忙しいですが、以前何度も助けてもらったので、断るわけにはいかないと思いました。ただ、内容を知らないまま発表すべきではありません。そこで、今夜三十分だけ説明してもらうことにしました。無理に一人で準備することはないと思ったからです。",
      "gloss": "発表（はっぴょう） presentation; 代わる（かわる） substitute; 断る（ことわる） refuse",
      "questions": [
        "筆者はなぜ断りにくいと思いましたか。",
        "どんな状態で発表すべきではないと考えましたか。",
        "今夜はどうしますか。"
      ],
      "answers": [
        "以前何度も助けてもらったからです。",
        "内容を知らないままです。",
        "三十分だけ説明してもらいます。"
      ],
      "translation": "A colleague asked me to give tomorrow's presentation instead. I am busy, but felt I could not refuse after their repeated help. Still, I should not present without knowing the content. I decided to get a thirty-minute explanation tonight rather than force myself to prepare alone.",
      "kanaHelp": ""
    },
    "listening": {
      "day": 23,
      "primaryVideoId": "L43GiFQMQrU",
      "backupVideoId": "6K3Yby5-iq0",
      "backupTitle": "Japanese Listening Practice Easy Japanese Immersion Vlog",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "488-514"
  },
  {
    "day": 24,
    "id": "master-unit-24",
    "title": "Contrast alternatives and balanced judgments",
    "level": "N3 bridge",
    "grammar": [
      {
        "pattern": "一方で",
        "rule": "Present another side of a situation or a contrast; noun/な-adjective forms need appropriate attachment.",
        "exampleJp": "この仕事は忙しい一方で、学ぶことも多いです。",
        "exampleEn": "The work is busy, but offers much to learn.",
        "exampleFurigana": "この しごと は いそがしい いっぽう で、まなぶ こと も おおい です。",
        "exampleRomaji": "Kono shigoto wa isogashii ippou de, manabu koto mo ooi desu."
      },
      {
        "pattern": "かわりに",
        "rule": "Express substitution or compensation. Noun plus のかわりに is common.",
        "exampleJp": "車のかわりに電車で行きます。",
        "exampleEn": "I will go by train instead of by car.",
        "exampleFurigana": "くるま の かわりに でんしゃ で いきます。",
        "exampleRomaji": "Kuruma no kawari ni densha de ikimasu."
      },
      {
        "pattern": "と言っても",
        "rule": "Qualify what has just been said: although I say X, the reality is limited in some way.",
        "exampleJp": "旅行と言っても、日帰りです。",
        "exampleEn": "I say a trip, but it is only a day trip.",
        "exampleFurigana": "りょこう と いっても、ひがえり です。",
        "exampleRomaji": "Ryokou to ittemo, higaeri desu."
      },
      {
        "pattern": "からといって",
        "rule": "Reject an inference from a reason; often followed by a negative evaluation or わけではない.",
        "exampleJp": "安いからといって、必要のない物まで買ってはいけません。",
        "exampleEn": "Do not buy unnecessary things just because they are cheap.",
        "exampleFurigana": "やすい から と いって、ひつよう の ない もの まで かって は いけません。",
        "exampleRomaji": "Yasui kara to itte, hitsuyou no nai mono made katte wa ikemasen."
      }
    ],
    "questions": [
      {
        "prompt": "Choose: 安いからといって、全部良い（わけではない／ところだ）。",
        "options": [],
        "rawOptions": "",
        "answer": "わけではない",
        "explanation": "The sentence rejects a broad inference."
      },
      {
        "prompt": "Explain: 旅行と言っても、日帰りです。",
        "options": [],
        "rawOptions": "",
        "answer": "It is a trip, but only a day trip.",
        "explanation": "と言っても narrows the earlier description."
      },
      {
        "prompt": "Order: 電車で / 車の / 行く / かわりに",
        "options": [],
        "rawOptions": "",
        "answer": "車のかわりに電車で行く。",
        "explanation": "Noun のかわりに marks substitution."
      }
    ],
    "reading": {
      "text": "新しい学習アプリは、短い時間でも練習できる一方で、答えを覚えただけで分かった気になることがあります。毎日使っているからといって、必ず実力が上がるわけではありません。私は問題数を増やすかわりに、間違えた理由を説明する時間を作るようにしました。",
      "gloss": "実力（じつりょく） actual ability; 問題数（もんだいすう） number of questions; 気になる here: come to feel",
      "questions": [
        "アプリの便利な点は何ですか。",
        "筆者はどんな危険を挙げていますか。",
        "問題数を増やすかわりに何をしますか。"
      ],
      "answers": [
        "短い時間でも練習できることです。",
        "答えを覚えただけで分かった気になることです。",
        "間違えた理由を説明する時間を作ります。"
      ],
      "translation": "The new app permits practice in short periods, but memorising answers can create a false feeling of understanding. Daily use does not guarantee improvement. Instead of adding more questions, I now make time to explain my mistakes.",
      "kanaHelp": ""
    },
    "listening": {
      "day": 24,
      "primaryVideoId": "LYjx2icWA-0",
      "backupVideoId": "n0nUDIJfRBA",
      "backupTitle": "N3 Japanese Listening August 2021",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "515-540"
  },
  {
    "day": 25,
    "id": "master-unit-25",
    "title": "Developing actions and word endings",
    "level": "N3 bridge",
    "grammar": [
      {
        "pattern": "始める 出す 続ける 終わる",
        "rule": "Attach these to verb stems: begin, suddenly start, continue, finish. 出す often suggests sudden onset.",
        "exampleJp": "急に雨が降り出しました。",
        "exampleEn": "It suddenly started raining.",
        "exampleFurigana": "きゅう に あめ が ふりだしました。",
        "exampleRomaji": "Kyuu ni ame ga furidashimashita."
      },
      {
        "pattern": "かける and 切る",
        "rule": "Stem plus かける can indicate an unfinished action; 切る can indicate doing fully.",
        "exampleJp": "読みかけの本が机にあります。",
        "exampleEn": "There is a partly read book on the desk.",
        "exampleFurigana": "よみかけ の ほん が つくえ に あります。",
        "exampleRomaji": "Yomikake no hon ga tsukue ni arimasu."
      },
      {
        "pattern": "やすい and にくい",
        "rule": "Attach to a verb stem to express ease or difficulty of doing.",
        "exampleJp": "この説明は分かりやすいです。",
        "exampleEn": "This explanation is easy to understand.",
        "exampleFurigana": "この せつめい は わかりやすい です。",
        "exampleRomaji": "Kono setsumei wa wakariyasui desu."
      },
      {
        "pattern": "ずに and ないで",
        "rule": "Express doing without doing another action. する has exceptional せずに.",
        "exampleJp": "朝ご飯を食べずに出かけました。",
        "exampleEn": "I went out without eating breakfast.",
        "exampleFurigana": "あさごはん を たべず に でかけました。",
        "exampleRomaji": "Asagohan o tabezu ni dekakemashita."
      }
    ],
    "questions": [
      {
        "prompt": "Choose: 急に赤ちゃんが泣き（出した／終わった）。",
        "options": [],
        "rawOptions": "",
        "answer": "出した",
        "explanation": "The sentence describes sudden onset."
      },
      {
        "prompt": "Make: 読む + easy to.",
        "options": [],
        "rawOptions": "",
        "answer": "読みやすい",
        "explanation": "Use the ます stem 読み."
      },
      {
        "prompt": "Translate: I went without studying.",
        "options": [],
        "rawOptions": "",
        "answer": "勉強せずに行きました。",
        "explanation": "する becomes せずに; 勉強しないで行きました is also natural."
      }
    ],
    "reading": {
      "text": "読みかけの本が増えてきたので、今週は新しい本を買わずに、一冊を最後まで読むことにしました。最初は難しくて読みにくいと感じましたが、毎日少しずつ読み続けると、登場人物の関係が分かってきました。読み終わるころには、続きも読みたいと思うようになりました。",
      "gloss": "登場人物（とうじょうじんぶつ） characters in a story; 続き（つづき） continuation; 最後（さいご） end",
      "questions": [
        "筆者は今週、何を買わないことにしましたか。",
        "読み続けると何が分かりましたか。",
        "最後にどんな気持ちになりましたか。"
      ],
      "answers": [
        "新しい本です。",
        "登場人物の関係です。",
        "続きも読みたいと思いました。"
      ],
      "translation": "With more unfinished books accumulating, I decided to buy none this week and finish one. It initially felt hard to read, but daily reading made the characters' relationships clearer. By the end I wanted to read the continuation too.",
      "kanaHelp": ""
    },
    "listening": {
      "day": 25,
      "primaryVideoId": "n0nUDIJfRBA",
      "backupVideoId": "cfRCoG_PAww",
      "backupTitle": "N3 Japanese Listening October 2021",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "541-567"
  },
  {
    "day": 26,
    "id": "master-unit-26",
    "title": "Names definitions attitudes and feelings",
    "level": "N3 bridge",
    "grammar": [
      {
        "pattern": "という and ということ",
        "rule": "Name or define things; ということ can package a statement or its implication.",
        "exampleJp": "これは予定を管理するという目的で作りました。",
        "exampleEn": "I made this for the purpose of managing schedules.",
        "exampleFurigana": "これ は よてい を かんり する という もくてき で つくりました。",
        "exampleRomaji": "Kore wa yotei o kanri suru to iu mokuteki de tsukurimashita."
      },
      {
        "pattern": "ように言う",
        "rule": "Report an instruction. Use dictionary/negative form plus ように言う.",
        "exampleJp": "先生は毎日復習するように言いました。",
        "exampleEn": "The teacher told us to review daily.",
        "exampleFurigana": "せんせい は まいにち ふくしゅう する ように いいました。",
        "exampleRomaji": "Sensei wa mainichi fukushuu suru you ni iimashita."
      },
      {
        "pattern": "がる and たがる",
        "rule": "Describe outward signs of others' feelings or desires; stems precede these forms.",
        "exampleJp": "子どもが新しい本を読みたがっています。",
        "exampleEn": "The child shows a desire to read a new book.",
        "exampleFurigana": "こども が あたらしい ほん を よみたがっています。",
        "exampleRomaji": "Kodomo ga atarashii hon o yomitagatte imasu."
      },
      {
        "pattern": "ふりをする and らしい typicality",
        "rule": "ふりをする means pretend; らしい can describe qualities typical of a noun.",
        "exampleJp": "分かったふりをしないでください。",
        "exampleEn": "Please do not pretend to understand.",
        "exampleFurigana": "わかった ふり を しないで ください。",
        "exampleRomaji": "Wakatta furi o shinaide kudasai."
      }
    ],
    "questions": [
      {
        "prompt": "Reported instruction: 毎日読む（ように／そうに）言われた。",
        "options": [],
        "rawOptions": "",
        "answer": "ように",
        "explanation": "ように言う reports directions."
      },
      {
        "prompt": "Make desire observed in a child: 読む →",
        "options": [],
        "rawOptions": "",
        "answer": "読みたがっている",
        "explanation": "Use the stem plus たがる."
      },
      {
        "prompt": "Explain: 知らないふりをした。",
        "options": [],
        "rawOptions": "",
        "answer": "Pretended not to know.",
        "explanation": "ふり marks pretence."
      }
    ],
    "reading": {
      "text": "先生に、分からない時は分かったふりをしないように言われました。私は質問すると授業を止めてしまうと思っていました。しかし、同じ所で困っている人もいるそうです。質問するということは、自分だけでなく、他の人の理解も助ける場合があるのだと気づきました。",
      "gloss": "理解（りかい） understanding; 授業（じゅぎょう） lesson; 場合（ばあい） case or situation",
      "questions": [
        "先生は何をしないように言いましたか。",
        "筆者は以前、質問についてどう考えていましたか。",
        "今は質問にどんな意味があると考えていますか。"
      ],
      "answers": [
        "分かったふりをしないように言いました。",
        "授業を止めてしまうと思っていました。",
        "他の人の理解も助ける場合があると考えています。"
      ],
      "translation": "The teacher told us not to pretend to understand. I had thought questions would interrupt class. But apparently others struggle with the same points. I realised asking a question can help other people's understanding as well as my own.",
      "kanaHelp": ""
    },
    "listening": {
      "day": 26,
      "primaryVideoId": "cfRCoG_PAww",
      "backupVideoId": "PEx9SMGZrh0",
      "backupTitle": "N3 Japanese Listening November 2021",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "568-593"
  },
  {
    "day": 27,
    "id": "master-unit-27",
    "title": "Changing over time and connecting a text",
    "level": "N3 bridge",
    "grammar": [
      {
        "pattern": "てくる and ていく",
        "rule": "Track movement or change toward now/the speaker and onward from a reference point.",
        "exampleJp": "少しずつ寒くなってきました。",
        "exampleEn": "It has gradually been getting colder.",
        "exampleFurigana": "すこし ずつ さむく なって きました。",
        "exampleRomaji": "Sukoshi zutsu samuku natte kimashita."
      },
      {
        "pattern": "ばかりだ",
        "rule": "Dictionary verb plus ばかりだ can express a trend continuing in one direction, often unfavourably.",
        "exampleJp": "仕事が増えるばかりです。",
        "exampleEn": "The work keeps increasing.",
        "exampleFurigana": "しごと が ふえる ばかり です。",
        "exampleRomaji": "Shigoto ga fueru bakari desu."
      },
      {
        "pattern": "しかも つまり そのため",
        "rule": "Distinguish addition, restatement/conclusion, and consequence when linking sentences.",
        "exampleJp": "駅に近く、しかも家賃が安いです。",
        "exampleEn": "It is near the station, and the rent is cheap too.",
        "exampleFurigana": "えき に ちかく、しかも やちん が やすい です。",
        "exampleRomaji": "Eki ni chikaku, shikamo yachin ga yasui desu."
      },
      {
        "pattern": "ただし and それでも",
        "rule": "ただし adds a qualification; それでも indicates persistence despite what came before.",
        "exampleJp": "参加は無料です。ただし、予約が必要です。",
        "exampleEn": "Participation is free; however, a reservation is required.",
        "exampleFurigana": "さんか は むりょう です。ただし、よやく が ひつよう です。",
        "exampleRomaji": "Sanka wa muryou desu. Tadashi, yoyaku ga hitsuyou desu."
      }
    ],
    "questions": [
      {
        "prompt": "Restatement connector: （つまり／しかも）、予約が必要ということです。",
        "options": [],
        "rawOptions": "",
        "answer": "つまり",
        "explanation": "It introduces a reformulation."
      },
      {
        "prompt": "Explain: 値段が上がるばかりだ。",
        "options": [],
        "rawOptions": "",
        "answer": "Prices just keep rising.",
        "explanation": "Dictionary form plus ばかりだ marks the continuing trend."
      },
      {
        "prompt": "Order: 必要です / ただし / 予約が / 参加は無料です",
        "options": [],
        "rawOptions": "",
        "answer": "参加は無料です。ただし、予約が必要です。",
        "explanation": "ただし introduces the condition."
      }
    ],
    "reading": {
      "text": "町の図書館では、電子書籍を借りる人が増えてきました。家から利用でき、しかも返却のために出かける必要がないからです。ただし、全ての本が電子版で読めるわけではありません。それでも、忙しくて図書館に行けない人にとっては、読書を続ける助けになっています。",
      "gloss": "電子書籍（でんししょせき） electronic books; 返却（へんきゃく） return; 電子版（でんしばん） digital edition",
      "questions": [
        "電子書籍が便利な理由を二つ挙げてください。",
        "全ての本が電子版で読めますか。",
        "特にどんな人の助けになりますか。"
      ],
      "answers": [
        "家から利用でき、返却のために出かけなくてもよいことです。",
        "いいえ、全てではありません。",
        "忙しくて図書館に行けない人です。"
      ],
      "translation": "More people have started borrowing ebooks from the town library. They can use them from home without going out to return them. Not every book has a digital edition, but the service helps busy people continue reading.",
      "kanaHelp": ""
    },
    "listening": {
      "day": 27,
      "primaryVideoId": "PEx9SMGZrh0",
      "backupVideoId": "LYjx2icWA-0",
      "backupTitle": "N3 Japanese Listening Practice July 2021",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "594-620"
  },
  {
    "day": 28,
    "id": "master-unit-28",
    "title": "Checkpoint one practical notices",
    "level": "Mixed review",
    "grammar": [
      {
        "pattern": "conditional review",
        "rule": "Compare automatic と, contextual なら, ば conditions, and flexible たら. Select by the whole sentence.",
        "exampleJp": "予約ができたら、連絡してください。",
        "exampleEn": "Please contact me when you have made the reservation.",
        "exampleFurigana": "よやく が できたら、れんらく して ください。",
        "exampleRomaji": "Yoyaku ga dekitara, renraku shite kudasai."
      },
      {
        "pattern": "deadline review",
        "rule": "Check whether an action continues until a point or must be finished by it.",
        "exampleJp": "受付は五時までです。五時までに来てください。",
        "exampleEn": "Reception is open until five. Please arrive by five.",
        "exampleFurigana": "うけつけ は ごじ まで です。ごじ まで に きて ください。",
        "exampleRomaji": "Uketsuke wa goji made desu. Goji made ni kite kudasai."
      },
      {
        "pattern": "reference review",
        "rule": "Resolve それ, この, and omitted subjects from nearby context before selecting an answer.",
        "exampleJp": "予約が必要です。それを忘れないでください。",
        "exampleEn": "A reservation is necessary. Please do not forget that.",
        "exampleFurigana": "よやく が ひつよう です。それ を わすれないで ください。",
        "exampleRomaji": "Yoyaku ga hitsuyou desu. Sore o wasurenaide kudasai."
      },
      {
        "pattern": "exception review",
        "rule": "Look for ただし, 除く, and 場合; these can change eligibility or required action.",
        "exampleJp": "日曜日を除き、毎日開いています。",
        "exampleEn": "It is open daily except Sundays.",
        "exampleFurigana": "にちようび を のぞき、まいにち あいています。",
        "exampleRomaji": "Nichiyoubi o nozoki, mainichi aite imasu."
      }
    ],
    "questions": [
      {
        "prompt": "Submit by Friday: 金曜日（まで／までに）提出してください。",
        "options": [],
        "rawOptions": "",
        "answer": "までに",
        "explanation": "Completion deadline."
      },
      {
        "prompt": "Explain: 日曜日を除く。",
        "options": [],
        "rawOptions": "",
        "answer": "Excluding Sundays.",
        "explanation": "除く removes Sundays from the stated range."
      },
      {
        "prompt": "Order: ください / 予約が / 連絡して / できたら",
        "options": [],
        "rawOptions": "",
        "answer": "予約ができたら、連絡してください。",
        "explanation": "The reservation precedes contact."
      }
    ],
    "reading": {
      "text": "市民センターからのお知らせ。日本語講座は毎週水曜日の午後七時からです。初めて参加する方は、前日の午後五時までに電話で予約してください。二回目からは予約不要です。ただし、今月最後の水曜日は会場が使えないため、お休みします。教材は受付で無料で配ります。筆記用具は各自で持ってきてください。",
      "gloss": "不要（ふよう） unnecessary; 教材（きょうざい） learning materials; 筆記用具（ひっきようぐ） writing implements; 各自（かくじ） each person",
      "questions": [
        "初めて参加する人は、いつまでに何をしますか。",
        "今月最後の水曜日は授業がありますか。",
        "参加者が自分で用意する物は何ですか。"
      ],
      "answers": [
        "前日の午後五時までに電話で予約します。",
        "いいえ、ありません。",
        "筆記用具です。"
      ],
      "translation": "The Japanese course meets Wednesdays at seven in the evening. First-time participants must reserve by phone by five the day before. No reservation is needed from the second visit. There is no class on the last Wednesday this month because the venue is unavailable. Free materials are distributed at reception. Bring your own writing implements.",
      "kanaHelp": ""
    },
    "listening": {
      "day": 28,
      "primaryVideoId": "WvkiMNw8Hx8",
      "backupVideoId": "LYjx2icWA-0",
      "backupTitle": "N3 Japanese Listening Practice July 2021",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "Review weak items"
  },
  {
    "day": 29,
    "id": "master-unit-29",
    "title": "Checkpoint two reasons and final decisions",
    "level": "Mixed review",
    "grammar": [
      {
        "pattern": "reason review",
        "rule": "Distinguish the immediate reason for an action from background information.",
        "exampleJp": "雨なので、会場を変えます。",
        "exampleEn": "We will change the venue because of rain.",
        "exampleFurigana": "あめ なので、かいじょう を かえます。",
        "exampleRomaji": "Ame nanode, kaijou o kaemasu."
      },
      {
        "pattern": "viewpoint review",
        "rule": "Identify the giver, receiver, agent, and affected person before interpreting a verb ending.",
        "exampleJp": "先輩に手伝ってもらいました。",
        "exampleEn": "I received help from a senior colleague.",
        "exampleFurigana": "せんぱい に てつだって もらいました。",
        "exampleRomaji": "Senpai ni tetsudatte moraimashita."
      },
      {
        "pattern": "final decision review",
        "rule": "A plan can be revised after でも, やっぱり, or それより. Follow the final instruction.",
        "exampleJp": "最初はバスの予定でしたが、電車にします。",
        "exampleEn": "Initially I planned to take the bus, but I will take the train.",
        "exampleFurigana": "さいしょ は バス の よてい でした が、でんしゃ に します。",
        "exampleRomaji": "Saisho wa basu no yotei deshita ga, densha ni shimasu."
      },
      {
        "pattern": "scope of negation",
        "rule": "Read the full predicate: ないわけではない and わけにはいかない have different implications.",
        "exampleJp": "嫌いなわけではありません。",
        "exampleEn": "It is not that I dislike it.",
        "exampleFurigana": "きらい な わけ で は ありません。",
        "exampleRomaji": "Kirai na wake de wa arimasen."
      }
    ],
    "questions": [
      {
        "prompt": "Who helps: 同僚に説明してもらった。",
        "options": [],
        "rawOptions": "",
        "answer": "The colleague explains to the speaker.",
        "explanation": "に marks the provider of the helpful action."
      },
      {
        "prompt": "Explain: 行けないわけではない。",
        "options": [],
        "rawOptions": "",
        "answer": "It is not that I cannot go; going is possible in principle.",
        "explanation": "The outer negative rejects the impossibility."
      },
      {
        "prompt": "Order: にします / やっぱり / 電車 / 明日は",
        "options": [],
        "rawOptions": "",
        "answer": "明日はやっぱり電車にします。",
        "explanation": "にする marks the chosen option."
      }
    ],
    "reading": {
      "text": "田中さんへ。明日の訪問は、最初は午後二時の予定でしたが、お客様から三時に変えてほしいと連絡がありました。私は二時半まで別の会議があるので、先に駅へ行って待っていてください。資料は私が持っていきます。駅からはタクシーを使うつもりでしたが、歩いて十分だそうなので、天気がよければ歩きましょう。",
      "gloss": "訪問（ほうもん） visit; 二時半（にじはん） 2:30; 先に（さきに） ahead or first",
      "questions": [
        "訪問は最終的に何時になりましたか。",
        "田中さんは先にどこで待ちますか。",
        "天気がよければ駅からどう行きますか。"
      ],
      "answers": [
        "午後三時です。",
        "駅で待ちます。",
        "歩いて行きます。"
      ],
      "translation": "Tanaka, the customer has requested that tomorrow's visit move from two to three. I have another meeting until 2:30, so please go to the station first and wait. I will bring the materials. We had planned a taxi, but apparently it is a ten-minute walk, so let us walk if the weather is good.",
      "kanaHelp": ""
    },
    "listening": {
      "day": 29,
      "primaryVideoId": "gnOOLxtSPLs",
      "backupVideoId": "n0nUDIJfRBA",
      "backupTitle": "N3 Japanese Listening August 2021",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "Review weak items"
  },
  {
    "day": 30,
    "id": "master-unit-30",
    "title": "Checkpoint three opinions and next steps",
    "level": "Mixed review",
    "grammar": [
      {
        "pattern": "main point review",
        "rule": "Separate an author's claim from the example used to support it.",
        "exampleJp": "量だけでなく、復習の仕方も大切です。",
        "exampleEn": "Not only quantity but also the way you review matters.",
        "exampleFurigana": "りょう だけ で なく、ふくしゅう の しかた も たいせつ です。",
        "exampleRomaji": "Ryou dake de naku, fukushuu no shikata mo taisetsu desu."
      },
      {
        "pattern": "contrast review",
        "rule": "After しかし or 一方で, check whether the writer limits an earlier claim.",
        "exampleJp": "便利ですが、全ての人に合うわけではありません。",
        "exampleEn": "It is convenient, but does not suit everyone.",
        "exampleFurigana": "べんり です が、すべて の ひと に あう わけ で は ありません。",
        "exampleRomaji": "Benri desu ga, subete no hito ni au wake de wa arimasen."
      },
      {
        "pattern": "inference review",
        "rule": "Choose what is supported by the text, not what sounds generally sensible.",
        "exampleJp": "本文から分かることを選んでください。",
        "exampleEn": "Choose what can be understood from the passage.",
        "exampleFurigana": "ほんぶん から わかる こと を えらんで ください。",
        "exampleRomaji": "Honbun kara wakaru koto o erande kudasai."
      },
      {
        "pattern": "study transfer",
        "rule": "Explain one grammar contrast, read an unseen passage, and listen without text before checking.",
        "exampleJp": "間違えた理由を説明できるようになりました。",
        "exampleEn": "I have become able to explain why I made a mistake.",
        "exampleFurigana": "まちがえた りゆう を せつめい できる ように なりました。",
        "exampleRomaji": "Machigaeta riyuu o setsumei dekiru you ni narimashita."
      }
    ],
    "questions": [
      {
        "prompt": "Choose limitation: 全員に合う（わけではない／に違いない）。",
        "options": [],
        "rawOptions": "",
        "answer": "わけではない",
        "explanation": "Rejects the universal claim."
      },
      {
        "prompt": "Explain: 量ばかりでなく、質も大切だ。",
        "options": [],
        "rawOptions": "",
        "answer": "Quality matters as well as quantity.",
        "explanation": "ばかりでなく adds a second relevant aspect."
      },
      {
        "prompt": "Order: 説明できる / なった / ように / 理由を",
        "options": [],
        "rawOptions": "",
        "answer": "理由を説明できるようになった。",
        "explanation": "Potential plus ようになる expresses gained ability."
      }
    ],
    "reading": {
      "text": "短期間で勉強する時、多くの項目に触れることは役に立ちます。しかし、一度見たことと、実際に使えることは同じではありません。例えば、答えを覚えている問題に正解しても、新しい文章で同じ表現が分かるとは限りません。進歩を確かめるには、初めて読む文章や初めて聞く会話で、何が分かるようになったかを見る必要があります。速く進むことだけを目標にせず、必要なら戻って復習することも大切です。",
      "gloss": "項目（こうもく） item; 触れる（ふれる） encounter; 進歩（しんぽ） progress; 目標（もくひょう） goal",
      "questions": [
        "一度見たことは、何と同じではありませんか。",
        "進歩を何で確かめるべきですか。",
        "筆者が最も伝えたいことは何ですか。"
      ],
      "answers": [
        "実際に使えることです。",
        "初めて読む文章や初めて聞く会話です。",
        "速さだけを目標にせず、新しい文脈で理解を確かめ、必要なら復習することです。"
      ],
      "translation": "Encountering many items can help in a short study period. But seeing something once is not the same as being able to use it. Correctly answering a memorised question does not prove understanding in a new passage. Check progress with unseen reading and listening, and review when needed instead of making speed the only goal.",
      "kanaHelp": ""
    },
    "listening": {
      "day": 30,
      "primaryVideoId": "Ky39V29HUrk",
      "backupVideoId": "cfRCoG_PAww",
      "backupTitle": "N3 Japanese Listening October 2021",
      "task": "Listen to a short segment. Write the topic, two details with timestamps, and one phrase. Check by replaying; mark uncertain details for review."
    },
    "kanjiRange": "Review weak items"
  }
];
