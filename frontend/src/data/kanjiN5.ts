// Official JLPT N5 Kanji Database (Complete 103 Official Kanji Characters with 2 Unique Contextual Sentences Each)
import { KanjiSentence } from '../types';

export interface KanjiDetailItem {
  id: string;
  char: string;
  meaning: string;
  onyomi: string[];
  kunyomi: string[];
  strokes: number;
  jlpt: 'N5';
  radical: string;
  mnemonic: string;
  sentences: KanjiSentence[];
}

// Master Raw Definition for all 103 JLPT N5 Kanji
const N5_RAW_DEFINITIONS: Array<{
  char: string;
  meaning: string;
  onyomi: string[];
  kunyomi: string[];
  strokes: number;
  radical: string;
  mnemonic: string;
  primaryWord: string;
  primaryReading: string;
}> = [
  // Numbers & Counters (1-14)
  { char: '一', meaning: 'One', onyomi: ['ICHI', 'ITSU'], kunyomi: ['hito-tsu', 'hito-'], strokes: 1, radical: '一 (one)', mnemonic: 'A single horizontal line representing the number one.', primaryWord: '一つ', primaryReading: 'ひとつ' },
  { char: '二', meaning: 'Two', onyomi: ['NI'], kunyomi: ['futa-tsu', 'futa-'], strokes: 2, radical: '二 (two)', mnemonic: 'Two horizontal lines representing the number two.', primaryWord: '二つ', primaryReading: 'ふたつ' },
  { char: '三', meaning: 'Three', onyomi: ['SAN'], kunyomi: ['mit-tsu', 'mi-'], strokes: 3, radical: '一 (one)', mnemonic: 'Three parallel horizontal lines representing three.', primaryWord: '三つ', primaryReading: 'みっつ' },
  { char: '四', meaning: 'Four', onyomi: ['SHI'], kunyomi: ['yon', 'yot-tsu', 'yo-'], strokes: 5, radical: '囗 (box)', mnemonic: 'A window with curtains drawn inside representing four.', primaryWord: '四つ', primaryReading: 'よっつ' },
  { char: '五', meaning: 'Five', onyomi: ['GO'], kunyomi: ['itsu-tsu', 'itsu-'], strokes: 4, radical: '二 (two)', mnemonic: 'Five fingers on an open hand.', primaryWord: '五つ', primaryReading: 'いつつ' },
  { char: '六', meaning: 'Six', onyomi: ['ROKU'], kunyomi: ['mut-tsu', 'mu-'], strokes: 4, radical: '八 (eight)', mnemonic: 'A small roof on two stilts holding six.', primaryWord: '六つ', primaryReading: 'むっつ' },
  { char: '七', meaning: 'Seven', onyomi: ['SHICHI'], kunyomi: ['nana-tsu', 'nana-'], strokes: 2, radical: '一 (one)', mnemonic: 'A horizontal stroke cut through for number 7.', primaryWord: '七つ', primaryReading: 'ななつ' },
  { char: '八', meaning: 'Eight', onyomi: ['HACHI'], kunyomi: ['yat-tsu', 'ya-'], strokes: 2, radical: '八 (eight)', mnemonic: 'Two strokes spreading outward representing prosperity.', primaryWord: '八つ', primaryReading: 'やっつ' },
  { char: '九', meaning: 'Nine', onyomi: ['KYUU', 'KU'], kunyomi: ['kokono-tsu', 'kokono-'], strokes: 2, radical: '乙 (second)', mnemonic: 'An arm bending with a hooked hand signifying nine.', primaryWord: '九つ', primaryReading: 'ここのつ' },
  { char: '十', meaning: 'Ten', onyomi: ['JUU', 'JITSU'], kunyomi: ['too', 'to-'], strokes: 2, radical: '十 (ten)', mnemonic: 'A cross representing ten fingers crossed.', primaryWord: '十', primaryReading: 'とお' },
  { char: '百', meaning: 'Hundred', onyomi: ['HYAKU'], kunyomi: ['momo'], strokes: 6, radical: '白 (white)', mnemonic: 'One line over white symbolizing 100.', primaryWord: '百円', primaryReading: 'ひゃくえん' },
  { char: '千', meaning: 'Thousand', onyomi: ['SEN'], kunyomi: ['chi'], strokes: 3, radical: '十 (ten)', mnemonic: 'Ten with an extra stroke representing 1,000.', primaryWord: '千円', primaryReading: 'せんえん' },
  { char: '万', meaning: 'Ten thousand', onyomi: ['MAN', 'BAN'], kunyomi: ['yorozu'], strokes: 3, radical: '一 (one)', mnemonic: 'Wide open arms holding ten thousand.', primaryWord: '一万', primaryReading: 'いちまん' },
  { char: '円', meaning: 'Yen, Circle', onyomi: ['EN'], kunyomi: ['maru-i'], strokes: 4, radical: '冂 (box)', mnemonic: 'A circular enclosure representing round coins.', primaryWord: '日本円', primaryReading: 'にほんえん' },

  // Time, Calendar & Elements (15-33)
  { char: '日', meaning: 'Sun, Day, Japan', onyomi: ['NICHI', 'JITSU'], kunyomi: ['hi', '-bi', '-ka'], strokes: 4, radical: '日 (sun)', mnemonic: 'The sun with a sunspot in the middle.', primaryWord: '日本', primaryReading: 'にほん' },
  { char: '月', meaning: 'Moon, Month', onyomi: ['GETSU', 'GATSU'], kunyomi: ['tsuki'], strokes: 4, radical: '月 (moon)', mnemonic: 'A crescent moon with night clouds.', primaryWord: '月曜日', primaryReading: 'げつようび' },
  { char: '火', meaning: 'Fire, Tuesday', onyomi: ['KA'], kunyomi: ['hi'], strokes: 4, radical: '火 (fire)', mnemonic: 'Sparks and flames bursting upward.', primaryWord: '火曜日', primaryReading: 'かようび' },
  { char: '水', meaning: 'Water, Wednesday', onyomi: ['SUI'], kunyomi: ['mizu'], strokes: 4, radical: '水 (water)', mnemonic: 'Water flowing down a stream.', primaryWord: '水曜日', primaryReading: 'すいようび' },
  { char: '木', meaning: 'Tree, Wood, Thursday', onyomi: ['MOKU', 'BOKU'], kunyomi: ['ki'], strokes: 4, radical: '木 (tree)', mnemonic: 'A tree with trunk and spreading branches.', primaryWord: '木曜日', primaryReading: 'もくようび' },
  { char: '金', meaning: 'Gold, Money, Friday', onyomi: ['KIN', 'KON'], kunyomi: ['kane'], strokes: 8, radical: '金 (gold)', mnemonic: 'Gold nuggets buried under earth.', primaryWord: 'お金', primaryReading: 'おかね' },
  { char: '土', meaning: 'Earth, Soil, Saturday', onyomi: ['DO', 'TO'], kunyomi: ['tsuchi'], strokes: 3, radical: '土 (earth)', mnemonic: 'A plant sprouting from the fertile ground.', primaryWord: '土曜日', primaryReading: 'どようび' },
  { char: '年', meaning: 'Year', onyomi: ['NEN'], kunyomi: ['toshi'], strokes: 6, radical: '干 (dry)', mnemonic: 'Harvest crops cycle representing one year.', primaryWord: '今年', primaryReading: 'ことし' },
  { char: '時', meaning: 'Time, Hour', onyomi: ['JI'], kunyomi: ['toki'], strokes: 10, radical: '日 (sun)', mnemonic: 'Sun and temple indicating the time.', primaryWord: '時間', primaryReading: 'じかん' },
  { char: '間', meaning: 'Interval, Space', onyomi: ['KAN', 'KEN'], kunyomi: ['aida', 'ma'], strokes: 12, radical: '門 (gate)', mnemonic: 'Sunlight shining through the gate.', primaryWord: '間', primaryReading: 'あいだ' },
  { char: '分', meaning: 'Minute, Part, Understand', onyomi: ['BUN', 'FUN'], kunyomi: ['wa-karu', 'wa-keru'], strokes: 4, radical: '刀 (sword)', mnemonic: 'A sword dividing things into parts.', primaryWord: '分かる', primaryReading: 'わかる' },
  { char: '半', meaning: 'Half', onyomi: ['HAN'], kunyomi: ['naka-ba'], strokes: 5, radical: '十 (ten)', mnemonic: 'Dividing an object into two equal halves.', primaryWord: '半分', primaryReading: 'はんぶん' },
  { char: '毎', meaning: 'Every', onyomi: ['MAI'], kunyomi: ['tsune'], strokes: 6, radical: '母 (mother)', mnemonic: 'A person born every day.', primaryWord: '毎日', primaryReading: 'まいにち' },
  { char: '今', meaning: 'Now, Present', onyomi: ['KON', 'KIN'], kunyomi: ['ima'], strokes: 4, radical: '人 (person)', mnemonic: 'A clock cover marking the present moment.', primaryWord: '今日', primaryReading: 'きょう' },
  { char: '先', meaning: 'Previous, Ahead', onyomi: ['SEN'], kunyomi: ['saki'], strokes: 6, radical: '儿 (legs)', mnemonic: 'Feet walking ahead in front.', primaryWord: '先生', primaryReading: 'せんせい' },
  { char: '前', meaning: 'Before, Front', onyomi: ['ZEN'], kunyomi: ['mae'], strokes: 9, radical: '刀 (sword)', mnemonic: 'Stepping forward to the front.', primaryWord: '前', primaryReading: 'まえ' },
  { char: '後', meaning: 'After, Behind, Later', onyomi: ['GOU', 'KOU'], kunyomi: ['nochi', 'ushi-ro', 'ato'], strokes: 9, radical: '彳 (step)', mnemonic: 'Walking slowly following behind.', primaryWord: '後ろ', primaryReading: 'うしろ' },
  { char: '午', meaning: 'Noon', onyomi: ['GO'], kunyomi: ['uma'], strokes: 4, radical: '十 (ten)', mnemonic: 'The sun crossing the midpoint.', primaryWord: '午前', primaryReading: 'ごぜん' },
  { char: '何', meaning: 'What', onyomi: ['KA'], kunyomi: ['nani', 'nan'], strokes: 7, radical: '人 (person)', mnemonic: 'A person carrying a burden asking what it is.', primaryWord: '何', primaryReading: 'なに' },

  // Directions & Orientations (34-43)
  { char: '上', meaning: 'Up, Above', onyomi: ['JOU', 'SHOU'], kunyomi: ['ue', 'a-garu'], strokes: 3, radical: '一 (one)', mnemonic: 'A vertical stroke pointing upward.', primaryWord: '上', primaryReading: 'うえ' },
  { char: '下', meaning: 'Down, Below', onyomi: ['KA', 'GE'], kunyomi: ['shita', 'sa-garu'], strokes: 3, radical: '一 (one)', mnemonic: 'A vertical stroke pointing downward.', primaryWord: '下', primaryReading: 'した' },
  { char: '中', meaning: 'Inside, Middle', onyomi: ['CHUU'], kunyomi: ['naka'], strokes: 4, radical: '丨 (line)', mnemonic: 'A line piercing right through the middle.', primaryWord: '中', primaryReading: 'なか' },
  { char: '外', meaning: 'Outside, Foreign', onyomi: ['GAI', 'GE'], kunyomi: ['soto', 'hoka'], strokes: 5, radical: '夕 (evening)', mnemonic: 'Evening divination done outside.', primaryWord: '外国', primaryReading: 'がいこく' },
  { char: '右', meaning: 'Right', onyomi: ['U', 'YUU'], kunyomi: ['migi'], strokes: 5, radical: '口 (mouth)', mnemonic: 'The hand that brings food to the mouth.', primaryWord: '右', primaryReading: 'みぎ' },
  { char: '左', meaning: 'Left', onyomi: ['SA'], kunyomi: ['hidari'], strokes: 5, radical: '工 (work)', mnemonic: 'The hand holding a ruler for work.', primaryWord: '左', primaryReading: 'ひだり' },
  { char: '北', meaning: 'North', onyomi: ['HOKU'], kunyomi: ['kita'], strokes: 5, radical: '匕 (spoon)', mnemonic: 'Two people standing back to back facing cold north.', primaryWord: '北', primaryReading: 'きた' },
  { char: '南', meaning: 'South', onyomi: ['NAN'], kunyomi: ['minami'], strokes: 9, radical: '十 (ten)', mnemonic: 'A warm vegetation shelter facing south.', primaryWord: '南', primaryReading: 'みなみ' },
  { char: '東', meaning: 'East', onyomi: ['TOU'], kunyomi: ['higashi'], strokes: 8, radical: '木 (tree)', mnemonic: 'The sun rising behind the trees in the east.', primaryWord: '東京', primaryReading: 'とうきょう' },
  { char: '西', meaning: 'West', onyomi: ['SEI', 'SAI'], kunyomi: ['nishi'], strokes: 6, radical: '西 (west)', mnemonic: 'A bird resting on its nest as sun sets in west.', primaryWord: '西', primaryReading: 'にし' },

  // Nature, Elements & Geography (44-56)
  { char: '山', meaning: 'Mountain', onyomi: ['SAN'], kunyomi: ['yama'], strokes: 3, radical: '山 (mountain)', mnemonic: 'Three mountain peaks rising.', primaryWord: '富士山', primaryReading: 'ふじさん' },
  { char: '川', meaning: 'River, Stream', onyomi: ['SEN'], kunyomi: ['kawa'], strokes: 3, radical: '川 (river)', mnemonic: 'Three streams of river water flowing.', primaryWord: '川', primaryReading: 'かわ' },
  { char: '田', meaning: 'Rice field', onyomi: ['DEN'], kunyomi: ['ta'], strokes: 5, radical: '田 (field)', mnemonic: 'A rice paddy divided into four sections.', primaryWord: '水田', primaryReading: 'すいでん' },
  { char: '天', meaning: 'Heaven, Sky', onyomi: ['TEN'], kunyomi: ['ame', 'ama'], strokes: 4, radical: '大 (big)', mnemonic: 'A person with the wide open sky above.', primaryWord: '天気', primaryReading: 'てんき' },
  { char: '気', meaning: 'Spirit, Energy, Mood', onyomi: ['KI', 'KE'], kunyomi: ['iki'], strokes: 6, radical: '气 (steam)', mnemonic: 'Steam and energy floating in the air.', primaryWord: '元気', primaryReading: 'げんき' },
  { char: '雨', meaning: 'Rain', onyomi: ['U'], kunyomi: ['ame'], strokes: 8, radical: '雨 (rain)', mnemonic: 'Raindrops falling from clouds under sky.', primaryWord: '雨', primaryReading: 'あめ' },
  { char: '空', meaning: 'Sky, Empty', onyomi: ['KUU'], kunyomi: ['sora', 'a-ku'], strokes: 8, radical: '穴 (hole)', mnemonic: 'An open roof showing the clear sky.', primaryWord: '青空', primaryReading: 'あおぞら' },
  { char: '花', meaning: 'Flower, Blossom', onyomi: ['KA'], kunyomi: ['hana'], strokes: 7, radical: '艸 (grass)', mnemonic: 'Grass changing and blooming into flowers.', primaryWord: '花火', primaryReading: 'はなび' },
  { char: '魚', meaning: 'Fish', onyomi: ['GYO'], kunyomi: ['sakana', 'uo'], strokes: 11, radical: '魚 (fish)', mnemonic: 'Head, body, scales and tail of a swimming fish.', primaryWord: '魚', primaryReading: 'さかな' },
  { char: '白', meaning: 'White', onyomi: ['HAKU'], kunyomi: ['shiro', 'shiro-i'], strokes: 5, radical: '白 (white)', mnemonic: 'A white ray of sunlight.', primaryWord: '白い', primaryReading: 'しろい' },
  { char: '赤', meaning: 'Red', onyomi: ['SEKI'], kunyomi: ['aka', 'aka-i'], strokes: 7, radical: '赤 (red)', mnemonic: 'Flames rising creating glowing red embers.', primaryWord: '赤い', primaryReading: 'あかい' },
  { char: '青', meaning: 'Blue, Green', onyomi: ['SEI', 'SHOU'], kunyomi: ['ao', 'ao-i'], strokes: 8, radical: '青 (blue)', mnemonic: 'Clear pure blue water and sky.', primaryWord: '青い', primaryReading: 'あおい' },
  { char: '黒', meaning: 'Black', onyomi: ['KOKU'], kunyomi: ['kuro', 'kuro-i'], strokes: 11, radical: '黒 (black)', mnemonic: 'Soot collected in a chimney from fire.', primaryWord: '黒い', primaryReading: 'くろい' },

  // People, Relations & Sizes (57-72)
  { char: '人', meaning: 'Person, Human', onyomi: ['JIN', 'NIN'], kunyomi: ['hito'], strokes: 2, radical: '人 (person)', mnemonic: 'Two strokes supporting each other like humans.', primaryWord: '日本人', primaryReading: 'にほんじん' },
  { char: '男', meaning: 'Man, Male', onyomi: ['DAN', 'NAN'], kunyomi: ['otoko'], strokes: 7, radical: '田 (field)', mnemonic: 'Power (力) working in the rice field (田).', primaryWord: '男の人', primaryReading: 'おとこのひと' },
  { char: '女', meaning: 'Woman, Female', onyomi: ['JO', 'NYO'], kunyomi: ['onna', 'me'], strokes: 3, radical: '女 (woman)', mnemonic: 'A woman with hands crossed politely.', primaryWord: '女の人', primaryReading: 'おんなのひと' },
  { char: '子', meaning: 'Child', onyomi: ['SHI', 'SU'], kunyomi: ['ko'], strokes: 3, radical: '子 (child)', mnemonic: 'A child with open arms.', primaryWord: '子供', primaryReading: 'こども' },
  { char: '母', meaning: 'Mother', onyomi: ['BO'], kunyomi: ['haha', 'kaa'], strokes: 5, radical: '毋 (mother)', mnemonic: 'A mother nursing her child.', primaryWord: 'お母さん', primaryReading: 'おかあさん' },
  { char: '父', meaning: 'Father', onyomi: ['FU'], kunyomi: ['chichi', 'tou'], strokes: 4, radical: '父 (father)', mnemonic: 'A father holding an axe or staff.', primaryWord: 'お父さん', primaryReading: 'おとうさん' },
  { char: '友', meaning: 'Friend', onyomi: ['YUU'], kunyomi: ['tomo'], strokes: 4, radical: '又 (again)', mnemonic: 'Two hands joining in friendship.', primaryWord: '友達', primaryReading: 'ともだち' },
  { char: '大', meaning: 'Big, Large', onyomi: ['DAI', 'TAI'], kunyomi: ['oo-kii'], strokes: 3, radical: '大 (big)', mnemonic: 'A person standing spreading arms and legs wide.', primaryWord: '大きい', primaryReading: 'おおきい' },
  { char: '小', meaning: 'Small, Little', onyomi: ['SHOU'], kunyomi: ['chii-sai', 'ko-'], strokes: 3, radical: '小 (small)', mnemonic: 'Three small drops falling.', primaryWord: '小さい', primaryReading: 'ちいさい' },
  { char: '多', meaning: 'Many, Much', onyomi: ['TA'], kunyomi: ['oo-i'], strokes: 6, radical: '夕 (evening)', mnemonic: 'Two moons stacked symbolizing plenty.', primaryWord: '多い', primaryReading: 'おおい' },
  { char: '少', meaning: 'Few, Little', onyomi: ['SHOU'], kunyomi: ['suku-nai', 'suko-shi'], strokes: 4, radical: '小 (small)', mnemonic: 'Small with a slash making it even fewer.', primaryWord: '少し', primaryReading: 'すこし' },
  { char: '長', meaning: 'Long, Leader', onyomi: ['CHOU'], kunyomi: ['naga-i'], strokes: 8, radical: '長 (long)', mnemonic: 'Long flowing hair of an elder.', primaryWord: '長い', primaryReading: 'ながい' },
  { char: '高', meaning: 'Tall, High, Expensive', onyomi: ['KOU'], kunyomi: ['taka-i'], strokes: 10, radical: '高 (tall)', mnemonic: 'A tall multi-storied tower pavilion.', primaryWord: '高い', primaryReading: 'たかい' },
  { char: '安', meaning: 'Cheap, Peaceful, Safe', onyomi: ['AN'], kunyomi: ['yasu-i'], strokes: 6, radical: '宀 (roof)', mnemonic: 'A woman safely resting under a peaceful roof.', primaryWord: '安い', primaryReading: 'やすい' },
  { char: '新', meaning: 'New, Fresh', onyomi: ['SHIN'], kunyomi: ['atara-shii'], strokes: 13, radical: '斤 (axe)', mnemonic: 'Cutting fresh wood with an axe.', primaryWord: '新しい', primaryReading: 'あたらしい' },
  { char: '古', meaning: 'Old', onyomi: ['KO'], kunyomi: ['furu-i'], strokes: 5, radical: '口 (mouth)', mnemonic: 'Stories passed down through ten mouths.', primaryWord: '古い', primaryReading: 'ふるい' },

  // School, Study, Writing & Speech (73-82)
  { char: '学', meaning: 'Study, Learn, Science', onyomi: ['GAKU'], kunyomi: ['mana-bu'], strokes: 8, radical: '子 (child)', mnemonic: 'A child studying in the classroom.', primaryWord: '学校', primaryReading: 'がっこう' },
  { char: '校', meaning: 'School', onyomi: ['KOU'], kunyomi: [], strokes: 10, radical: '木 (tree)', mnemonic: 'Wooden building where children gather to learn.', primaryWord: '高校', primaryReading: 'こうこう' },
  { char: '生', meaning: 'Life, Birth, Raw', onyomi: ['SEI', 'SHOU'], kunyomi: ['i-kiru', 'u-mareru', 'nama'], strokes: 5, radical: '生 (life)', mnemonic: 'A shoot growing fresh from the ground.', primaryWord: '学生', primaryReading: 'がくせい' },
  { char: '本', meaning: 'Book, Origin, Real', onyomi: ['HON'], kunyomi: ['moto'], strokes: 5, radical: '木 (tree)', mnemonic: 'The roots of a tree indicating origin and books.', primaryWord: '本屋', primaryReading: 'ほんや' },
  { char: '語', meaning: 'Language, Word', onyomi: ['GO'], kunyomi: ['kata-ru'], strokes: 14, radical: '言 (word)', mnemonic: 'Words spoken by five mouths.', primaryWord: '日本語', primaryReading: 'にほんご' },
  { char: '名', meaning: 'Name, Famous', onyomi: ['MEI', 'MYOU'], kunyomi: ['na'], strokes: 6, radical: '口 (mouth)', mnemonic: 'Saying your name when meeting at evening.', primaryWord: '名前', primaryReading: 'なまえ' },
  { char: '話', meaning: 'Talk, Speech, Story', onyomi: ['WA'], kunyomi: ['hana-su', 'hanashi'], strokes: 13, radical: '言 (word)', mnemonic: 'Words flowing from the tongue.', primaryWord: '電話', primaryReading: 'でんわ' },
  { char: '読', meaning: 'Read', onyomi: ['DOKU'], kunyomi: ['yo-mu'], strokes: 14, radical: '言 (word)', mnemonic: 'Selling words into the mind through reading.', primaryWord: '読む', primaryReading: 'よむ' },
  { char: '書', meaning: 'Write, Book', onyomi: ['SHO'], kunyomi: ['ka-ku'], strokes: 10, radical: '曰 (say)', mnemonic: 'A brush writing words on paper.', primaryWord: '書く', primaryReading: 'かく' },
  { char: '聞', meaning: 'Hear, Listen, Ask', onyomi: ['BUN', 'MON'], kunyomi: ['ki-ku'], strokes: 14, radical: '耳 (ear)', mnemonic: 'An ear at the gate listening closely.', primaryWord: '聞く', primaryReading: 'きく' },

  // Actions, Travel & Daily Life (83-103)
  { char: '行', meaning: 'Go, Act, Conduct', onyomi: ['KOU', 'GYOU'], kunyomi: ['i-ku', 'o-konau'], strokes: 6, radical: '行 (go)', mnemonic: 'Crossroads where people travel and go.', primaryWord: '行く', primaryReading: 'いく' },
  { char: '来', meaning: 'Come, Next', onyomi: ['RAI'], kunyomi: ['ku-ru', 'ki-masu'], strokes: 7, radical: '木 (tree)', mnemonic: 'Wheat arriving in harvest season.', primaryWord: '来年', primaryReading: 'らいねん' },
  { char: '帰', meaning: 'Return, Go home', onyomi: ['KI'], kunyomi: ['kae-ru'], strokes: 10, radical: '巾 (towel)', mnemonic: 'Returning home with a cloth pack.', primaryWord: '帰る', primaryReading: 'かえる' },
  { char: '見', meaning: 'See, Look, View', onyomi: ['KEN'], kunyomi: ['mi-ru', 'mi-seru'], strokes: 7, radical: '見 (see)', mnemonic: 'An eye standing on legs looking around.', primaryWord: '見る', primaryReading: 'みる' },
  { char: '食', meaning: 'Eat, Food, Meal', onyomi: ['SHOKU'], kunyomi: ['ta-beru'], strokes: 9, radical: '食 (food)', mnemonic: 'A bowl of food under a cover.', primaryWord: '食べる', primaryReading: 'たべる' },
  { char: '飲', meaning: 'Drink', onyomi: ['IN'], kunyomi: ['no-mu'], strokes: 12, radical: '食 (food)', mnemonic: 'Opening mouth wide to drink food and water.', primaryWord: '飲む', primaryReading: 'のむ' },
  { char: '買', meaning: 'Buy', onyomi: ['BAI'], kunyomi: ['ka-u'], strokes: 12, radical: '貝 (shell)', mnemonic: 'Exchanging shells as money to buy items.', primaryWord: '買い物', primaryReading: 'かいもの' },
  { char: '休', meaning: 'Rest, Day off', onyomi: ['KYUU'], kunyomi: ['yasu-mu'], strokes: 6, radical: '人 (person)', mnemonic: 'A person resting leaning on a tree.', primaryWord: '休み', primaryReading: 'やすみ' },
  { char: '入', meaning: 'Enter, Insert', onyomi: ['NYUU'], kunyomi: ['hai-ru', 'i-reru'], strokes: 2, radical: '入 (enter)', mnemonic: 'Entering into a doorway tent.', primaryWord: '入口', primaryReading: 'いりぐち' },
  { char: '出', meaning: 'Exit, Put out', onyomi: ['SHUTSU'], kunyomi: ['de-ru', 'da-su'], strokes: 5, radical: '凵 (container)', mnemonic: 'Sprouts emerging out one above another.', primaryWord: '出口', primaryReading: 'でぐち' },
  { char: '立', meaning: 'Stand, Establish', onyomi: ['RITSU'], kunyomi: ['ta-tsu'], strokes: 5, radical: '立 (stand)', mnemonic: 'A person standing firmly on the earth.', primaryWord: '立つ', primaryReading: 'たつ' },
  { char: '待', meaning: 'Wait', onyomi: ['TAI'], kunyomi: ['ma-tsu'], strokes: 9, radical: '彳 (step)', mnemonic: 'Waiting at the temple for friends.', primaryWord: '待つ', primaryReading: 'まつ' },
  { char: '言', meaning: 'Say, Word', onyomi: ['GEN', 'GON'], kunyomi: ['i-u', 'koto'], strokes: 7, radical: '言 (word)', mnemonic: 'Words spoken from the mouth.', primaryWord: '言う', primaryReading: 'いう' },
  { char: '思', meaning: 'Think, Feel', onyomi: ['SHI'], kunyomi: ['omo-u'], strokes: 9, radical: '心 (heart)', mnemonic: 'Brain and heart thinking together.', primaryWord: '思う', primaryReading: 'おもう' },
  { char: '知', meaning: 'Know, Wisdom', onyomi: ['CHI'], kunyomi: ['shi-ru'], strokes: 8, radical: '矢 (arrow)', mnemonic: 'Words swift as arrows showing knowledge.', primaryWord: '知る', primaryReading: 'しる' },
  { char: '持', meaning: 'Hold, Have', onyomi: ['JI'], kunyomi: ['mo-tsu'], strokes: 9, radical: '手 (hand)', mnemonic: 'A hand holding items at the temple.', primaryWord: '持つ', primaryReading: 'もつ' },
  { char: '会', meaning: 'Meet, Association', onyomi: ['KAI'], kunyomi: ['a-u'], strokes: 6, radical: '人 (person)', mnemonic: 'People meeting under one roof.', primaryWord: '会う', primaryReading: 'あう' },
  { char: '社', meaning: 'Company, Shrine', onyomi: ['SHA'], kunyomi: ['yashiro'], strokes: 7, radical: '示 (altar)', mnemonic: 'An altar for community gathering.', primaryWord: '会社', primaryReading: 'かいしゃ' },
  { char: '店', meaning: 'Shop, Store', onyomi: ['TEN'], kunyomi: ['mise'], strokes: 8, radical: '广 (cliff)', mnemonic: 'A store with goods under a roof.', primaryWord: '店員', primaryReading: 'てんいん' },
  { char: '駅', meaning: 'Station', onyomi: ['EKI'], kunyomi: [], strokes: 14, radical: '馬 (horse)', mnemonic: 'Horses stationed at the post town stop.', primaryWord: '駅前', primaryReading: 'えきまえ' },
  { char: '車', meaning: 'Car, Vehicle, Wheel', onyomi: ['SHA'], kunyomi: ['kuruma'], strokes: 7, radical: '車 (cart)', mnemonic: 'Overhead view of a wheeled carriage.', primaryWord: '電車', primaryReading: 'でんしゃ' },
  { char: '電', meaning: 'Electricity', onyomi: ['DEN'], kunyomi: [], strokes: 13, radical: '雨 (rain)', mnemonic: 'Lightning flashing from rain clouds.', primaryWord: '電気', primaryReading: 'でんき' },
  { char: '道', meaning: 'Road, Path, Way', onyomi: ['DOU'], kunyomi: ['michi'], strokes: 12, radical: '辵 (walk)', mnemonic: 'Walking on the established pathway.', primaryWord: '歩道', primaryReading: 'ほどう' },
  { char: '手', meaning: 'Hand', onyomi: ['SHU'], kunyomi: ['te'], strokes: 4, radical: '手 (hand)', mnemonic: 'Five fingers of an open hand.', primaryWord: '手紙', primaryReading: 'てがみ' },
  { char: '足', meaning: 'Foot, Leg, Enough', onyomi: ['SOKU'], kunyomi: ['ashi', 'ta-riru'], strokes: 7, radical: '足 (foot)', mnemonic: 'Knee and foot stepping forward.', primaryWord: '足', primaryReading: 'あし' },
  { char: '目', meaning: 'Eye', onyomi: ['MOKU'], kunyomi: ['me'], strokes: 5, radical: '目 (eye)', mnemonic: 'Pupil and iris inside eye outlines.', primaryWord: '目', primaryReading: 'め' },
  { char: '耳', meaning: 'Ear', onyomi: ['JI'], kunyomi: ['mimi'], strokes: 6, radical: '耳 (ear)', mnemonic: 'An ear listening attentively.', primaryWord: '耳', primaryReading: 'みみ' },
  { char: '口', meaning: 'Mouth, Opening', onyomi: ['KOU', 'KU'], kunyomi: ['kuchi'], strokes: 3, radical: '口 (mouth)', mnemonic: 'An open mouth.', primaryWord: '口', primaryReading: 'くち' }
];

// Unique sentences for every single N5 kanji
const N5_SENTENCES: Record<string, [KanjiSentence, KanjiSentence]> = {
  '一': [
    { id: 's-n5-一-1', sentence: 'りんごを一つ買いました。', furigana: 'りんご を ひとつ かいました。', romaji: 'Ringo o hitotsu kaimashita.', english: 'I bought one apple.', targetWord: '一つ', targetWordEnglish: 'One (item)' },
    { id: 's-n5-一-2', sentence: '一人で静かに本を読みます。', furigana: 'ひとり で しずか に ほん を よみます。', romaji: 'Hitori de shizuka ni hon o yomimasu.', english: 'I read a book quietly alone.', targetWord: '一人', targetWordEnglish: 'Alone / One person' }
  ],
  '二': [
    { id: 's-n5-二-1', sentence: 'ペンが二本机の上にあります。', furigana: 'ペン が にほん つくえ の うえ に あります。', romaji: 'Pen ga nihon tsukue no ue ni arimasu.', english: 'There are two pens on the desk.', targetWord: '二本', targetWordEnglish: 'Two (pens)' },
    { id: 's-n5-二-2', sentence: '二人で仲良く映画を見ました。', furigana: 'ふたり で なかよく えいが を みました。', romaji: 'Futari de nakayoku eiga o mimashita.', english: 'We two watched a movie happily together.', targetWord: '二人', targetWordEnglish: 'Two people' }
  ],
  '三': [
    { id: 's-n5-三-1', sentence: '午後三時に友達と駅で会います。', furigana: 'ごご さんじ に ともだち と えき で あいます。', romaji: 'Gogo sanji ni tomodachi to eki de aimasu.', english: 'I meet my friend at the station at 3:00 PM.', targetWord: '三時', targetWordEnglish: '3 o\'clock' },
    { id: 's-n5-三-2', sentence: '箱の中にみかんが三つあります。', furigana: 'はこ の なか に みかん が みっつ あります。', romaji: 'Hako no naka ni mikan ga mittsu arimasu.', english: 'There are three mandarins in the box.', targetWord: '三つ', targetWordEnglish: 'Three (items)' }
  ],
  '四': [
    { id: 's-n5-四-1', sentence: '私の家族は四人です。', furigana: 'わたし の かぞく は よにん です。', romaji: 'Watashi no kazoku wa yonin desu.', english: 'My family has four members.', targetWord: '四人', targetWordEnglish: 'Four people' },
    { id: 's-n5-四-2', sentence: '四月に新しい学校へ入学します。', furigana: 'しがつ に あたらしい がっこう え にゅうがく します。', romaji: 'Shigatsu ni atarashii gakkou e nyuugaku shimasu.', english: 'I enter a new school in April.', targetWord: '四月', targetWordEnglish: 'April' }
  ],
  '五': [
    { id: 's-n5-五-1', sentence: 'ここで五分間待ってください。', furigana: 'ここ で ごふんかん まってください。', romaji: 'Koko de gofunkan matte kudasai.', english: 'Please wait here for five minutes.', targetWord: '五分', targetWordEnglish: 'Five minutes' },
    { id: 's-n5-五-2', sentence: '切手を五枚貼って手紙を出しました。', furigana: 'きって を ごまい はって てがみ を だしました。', romaji: 'Kitte o gomai hatte tegami o dashimashita.', english: 'I attached five stamps and sent the letter.', targetWord: '五枚', targetWordEnglish: 'Five sheets' }
  ],
  '六': [
    { id: 's-n5-六-1', sentence: '毎朝六時に起きて散歩します。', furigana: 'まいあさ ろくじ に おきて さんぽ します。', romaji: 'Maiasa rokuji ni okite sanpo shimasu.', english: 'I wake up at 6:00 every morning and take a walk.', targetWord: '六時', targetWordEnglish: '6 o\'clock' },
    { id: 's-n5-六-2', sentence: '六つのコップをテーブルに並べました。', furigana: 'むっつ の コップ を テーブル に ならべました。', romaji: 'Muttsu no koppu o teeburu ni narabemashita.', english: 'I arranged six glasses on the table.', targetWord: '六つ', targetWordEnglish: 'Six items' }
  ],
  '七': [
    { id: 's-n5-七-1', sentence: '朝七時に家族と朝ごはんを食べます。', furigana: 'あさ しちじ に かぞく と あさごはん を たべます。', romaji: 'Asa shichiji ni kazoku to asagohan o tabemasu.', english: 'I eat breakfast with family at 7:00 AM.', targetWord: '七時', targetWordEnglish: '7 o\'clock' },
    { id: 's-n5-七-2', sentence: '七月になると海開きがあります。', furigana: 'しちがつ に なる と うみびらき が あります。', romaji: 'Shichigatsu ni naru to umibiraki ga arimasu.', english: 'The beaches open for swimming in July.', targetWord: '七月', targetWordEnglish: 'July' }
  ],
  '八': [
    { id: 's-n5-八-1', sentence: '近くの八百屋で新鮮なトマトを買いました。', furigana: 'ちかく の やおや で しんせん な トマト を かいました。', romaji: 'Chikaku no yaoya de shinsen na tomato o kaimashita.', english: 'I bought fresh tomatoes at the nearby greengrocer.', targetWord: '八百屋', targetWordEnglish: 'Greengrocer' },
    { id: 's-n5-八-2', sentence: '八月は夏祭りで町が賑やかです。', furigana: 'はちがつ は なつまつり で まち が にぎやか です。', romaji: 'Hachigatsu wa natsumatsuri de machi ga nigiyaka desu.', english: 'The town is lively with summer festivals in August.', targetWord: '八月', targetWordEnglish: 'August' }
  ],
  '九': [
    { id: 's-n5-九-1', sentence: '夜九時にテレビのニュースを見ます。', furigana: 'よる くじ に テレビ の ニュース を みます。', romaji: 'Yoru kuji ni terebi no nyuusu o mimasu.', english: 'I watch the TV news at 9:00 PM.', targetWord: '九時', targetWordEnglish: '9 o\'clock' },
    { id: 's-n5-九-2', sentence: '九月に入ると少し涼しくなります。', furigana: 'くがつ に はいる と すこし すずしく なります。', romaji: 'Kugatsu ni hairu to sukoshi suzushiku narimasu.', english: 'When entering September, it becomes a bit cool.', targetWord: '九月', targetWordEnglish: 'September' }
  ],
  '十': [
    { id: 's-n5-十-1', sentence: '鉛筆が十本筆箱に入っています。', furigana: 'えんぴつ が じゅっぽん ふでばこ に はいっています。', romaji: 'Enpitsu ga juppon fudebako ni haitte imasu.', english: 'Ten pencils are inside the pencil case.', targetWord: '十本', targetWordEnglish: 'Ten pencils' },
    { id: 's-n5-十-2', sentence: '十月は秋の涼しい風が吹きます。', furigana: 'じゅうがつ は あき の すずしい かぜ が ふきます。', romaji: 'Juugatsu wa aki no suzushii kaze ga fukimasu.', english: 'Cool autumn winds blow in October.', targetWord: '十月', targetWordEnglish: 'October' }
  ],
  '百': [
    { id: 's-n5-百-1', sentence: 'このノートは百円ショップで買いました。', furigana: 'この ノート は ひゃくえん ショップ で かいました。', romaji: 'Kono nooto wa hyakuen shoppu de kaimashita.', english: 'I bought this notebook at the 100-yen shop.', targetWord: '百円', targetWordEnglish: '100 yen' },
    { id: 's-n5-百-2', sentence: '百パーセントオレンジジュースを飲みます。', furigana: 'ひゃく パーセント オレンジ ジュース を のみます。', romaji: 'Hyaku paasento orenji juusu o nomimasu.', english: 'I drink 100% orange juice.', targetWord: '百', targetWordEnglish: 'Hundred' }
  ],
  '千': [
    { id: 's-n5-千-1', sentence: '電車の切符は千円です。', furigana: 'でんしゃ の きっぷ は せんえん です。', romaji: 'Densha no kippu wa sen en desu.', english: 'The train ticket is 1,000 yen.', targetWord: '千円', targetWordEnglish: '1,000 yen' },
    { id: 's-n5-千-2', sentence: '千羽鶴を折って病院に贈りました。', furigana: 'せんばづる を おって びょういん に おくりました。', romaji: 'Senbazuru o otte byouin ni okurimashita.', english: 'I folded a thousand paper cranes and sent them to the hospital.', targetWord: '千', targetWordEnglish: 'Thousand' }
  ],
  '万': [
    { id: 's-n5-万-1', sentence: '車を買うために一万円を貯めました。', furigana: 'くるま を かう ため に いちまんえん を ためました。', romaji: 'Kuruma o kau tame ni ichiman en o tame mashita.', english: 'I saved 10,000 yen to buy a car.', targetWord: '一万円', targetWordEnglish: '10,000 yen' },
    { id: 's-n5-万-2', sentence: 'そのコンサートには一万人以上来ました。', furigana: 'その コンサート に は いちまんにん いじょう きました。', romaji: 'Sono konsaato ni wa ichiman nin ijou kimashita.', english: 'More than 10,000 people came to that concert.', targetWord: '一万人', targetWordEnglish: '10,000 people' }
  ],
  '円': [
    { id: 's-n5-円-1', sentence: 'コーヒーは三百円です。', furigana: 'コーヒー は さんびゃくえん です。', romaji: 'Koohii wa sanbyaku en desu.', english: 'Coffee is 300 yen.', targetWord: '円', targetWordEnglish: 'Yen' },
    { id: 's-n5-円-2', sentence: '財布に千円しか入っていません。', furigana: 'さいふ に せんえん しか はいって いません。', romaji: 'Saifu ni sen en shika haitte imasen.', english: 'I only have 1,000 yen in my wallet.', targetWord: '千円', targetWordEnglish: '1,000 yen' }
  ],
  '日': [
    { id: 's-n5-日-1', sentence: '今日はとても気持ちのいい天気です。', furigana: 'きょう は とても きもち の いい てんき です。', romaji: 'Kyou wa totemo kimochi no ii tenki desu.', english: 'Today is very pleasant weather.', targetWord: '今日', targetWordEnglish: 'Today' },
    { id: 's-n5-日-2', sentence: '日曜日にお気に入りのカフェへ行きます。', furigana: 'にちようび に おきにいり の カフェ え いきます。', romaji: 'Nichiyoubi ni okiniiri no kafe e ikimasu.', english: 'I go to my favorite cafe on Sunday.', targetWord: '日曜日', targetWordEnglish: 'Sunday' }
  ],
  '月': [
    { id: 's-n5-月-1', sentence: '今夜は夜空にきれいな満月が出ています。', furigana: 'こんや は よぞら に きれい な まんげつ が でています。', romaji: 'Kon\'ya wa yozora ni kirei na mangetsu ga dete imasu.', english: 'A beautiful full moon is out in the night sky tonight.', targetWord: '満月', targetWordEnglish: 'Full moon' },
    { id: 's-n5-月-2', sentence: '月曜日は朝のミーティングがあります。', furigana: 'げつようび は あさ の ミーティング が あります。', romaji: 'Getsuyoubi wa asa no miitingu ga arimasu.', english: 'There is a morning meeting on Monday.', targetWord: '月曜日', targetWordEnglish: 'Monday' }
  ],
  '火': [
    { id: 's-n5-火-1', sentence: 'キャンプ場で火を起こして温まりました。', furigana: 'キャンプじょう で ひ を おこして あたたまりました。', romaji: 'Kyanpujou de hi o okoshite atatamarimashita.', english: 'We lit a fire at the campsite and warmed up.', targetWord: '火', targetWordEnglish: 'Fire' },
    { id: 's-n5-火-2', sentence: '火曜日に英語の会話レッスンを受けます。', furigana: 'かようび に えいご の かいわ レッスン を うけます。', romaji: 'Kayoubi ni Eigo no kaiwa ressun o ukemasu.', english: 'I take an English conversation lesson on Tuesday.', targetWord: '火曜日', targetWordEnglish: 'Tuesday' }
  ],
  '水': [
    { id: 's-n5-水-1', sentence: '冷たい水をコップ一杯飲みました。', furigana: 'つめたい みず を コップ いっぱい のみました。', romaji: 'Tsumetai mizu o koppu ippai nomimashita.', english: 'I drank a glass of cold water.', targetWord: '水', targetWordEnglish: 'Water' },
    { id: 's-n5-水-2', sentence: '水曜日は映画館の割引チケットがあります。', furigana: 'すいようび は えいがかん の わりびき チケット が あります。', romaji: 'Suiyoubi wa eigakan no waribiki chiketto ga arimasu.', english: 'There are discount tickets at the movie theater on Wednesday.', targetWord: '水曜日', targetWordEnglish: 'Wednesday' }
  ],
  '木': [
    { id: 's-n5-木-1', sentence: '大きな木の下で涼しい風を感じました。', furigana: 'おおきな き の した で すずしい かぜ を かんじました。', romaji: 'Ookina ki no shita de suzushii kaze o kanjimashita.', english: 'I felt a cool breeze under the big tree.', targetWord: '木', targetWordEnglish: 'Tree' },
    { id: 's-n5-木-2', sentence: '木曜日に図書館で新しい小説を借ります。', furigana: 'もくようび に としょかん で あたらしい しょうせつ を かります。', romaji: 'Mokuyoubi ni toshokan de atarashii shousetsu o karimasu.', english: 'I borrow a new novel at the library on Thursday.', targetWord: '木曜日', targetWordEnglish: 'Thursday' }
  ],
  '金': [
    { id: 's-n5-金-1', sentence: '金曜日の夜は友達とレストランで晩ご飯を食べます。', furigana: 'きんようび の よる は ともだち と レストラン で ばんごはん を たべます。', romaji: 'Kin\'youbi no yoru wa tomodachi to resutoran de bangohan o tabemasu.', english: 'I eat dinner with friends at a restaurant on Friday night.', targetWord: '金曜日', targetWordEnglish: 'Friday' },
    { id: 's-n5-金-2', sentence: '旅行のためにお金を大切に貯めています。', furigana: 'りょこう の ため に おかね を たいせつ に ためて います。', romaji: 'Ryokou no tame ni okane o taisetsu ni tamete imasu.', english: 'I am carefully saving money for travel.', targetWord: 'お金', targetWordEnglish: 'Money' }
  ],
  '土': [
    { id: 's-n5-土-1', sentence: '土曜日に部屋をきれいに大掃除しました。', furigana: 'どようび に へや を きれい に おおそうじ しました。', romaji: 'Doyoubi ni heya o kirei ni oosouji shimashita.', english: 'I did a big clean-up of my room on Saturday.', targetWord: '土曜日', targetWordEnglish: 'Saturday' },
    { id: 's-n5-土-2', sentence: '庭の黒い土にトマトの苗を植えました。', furigana: 'にわ の くろい つち に トマト の なえ を うえました。', romaji: 'Niwa no kuroi tsuchi ni tomato no nae o uemashita.', english: 'I planted tomato seedlings in the garden soil.', targetWord: '土', targetWordEnglish: 'Soil / Earth' }
  ],
  '年': [
    { id: 's-n5-年-1', sentence: '今年の夏は去年より暑いです。', furigana: 'ことし の なつ は きょねん より あつい です。', romaji: 'Kotoshi no natsu wa kyonen yori atsui desu.', english: 'This year\'s summer is hotter than last year.', targetWord: '今年', targetWordEnglish: 'This year' },
    { id: 's-n5-年-2', sentence: '来年、日本へ旅行する予定です。', furigana: 'らいねん、にほん へ りょこう する よてい です。', romaji: 'Rainen, Nihon e ryokou suru yotei desu.', english: 'I am planning to travel to Japan next year.', targetWord: '来年', targetWordEnglish: 'Next year' }
  ],
  '時': [
    { id: 's-n5-時-1', sentence: '今何時ですか？', furigana: 'いま なんじ ですか？', romaji: 'Ima nanji desu ka?', english: 'What time is it now?', targetWord: '何時', targetWordEnglish: 'What time' },
    { id: 's-n5-時-2', sentence: '授業は三時間続きます。', furigana: 'じゅぎょう は さんじかん つづきます。', romaji: 'Jugyou wa sanjikan tsuzukimasu.', english: 'The class lasts three hours.', targetWord: '時間', targetWordEnglish: 'Hours' }
  ],
  '間': [
    { id: 's-n5-間-1', sentence: '授業と授業の間に少し休みます。', furigana: 'じゅぎょう と じゅぎょう の あいだ に すこし やすみます。', romaji: 'Jugyou to jugyou no aida ni sukoshi yasumimasu.', english: 'I take a short break between classes.', targetWord: '間', targetWordEnglish: 'Between / Interval' },
    { id: 's-n5-間-2', sentence: '一週間で日本語をたくさん練習しました。', furigana: 'いっしゅうかん で にほんご を たくさん れんしゅう しました。', romaji: 'Isshuukan de nihongo o takusan renshuu shimashita.', english: 'I practiced Japanese a lot in one week.', targetWord: '一週間', targetWordEnglish: 'One week' }
  ],
  '分': [
    { id: 's-n5-分-1', sentence: '駅まで歩いて十分かかります。', furigana: 'えき まで あるいて じゅっぷん かかります。', romaji: 'Eki made aruite juppun kakarimasu.', english: 'It takes ten minutes to walk to the station.', targetWord: '十分', targetWordEnglish: 'Ten minutes' },
    { id: 's-n5-分-2', sentence: '彼女の言っていることが分かりません。', furigana: 'かのじょ の いっている こと が わかりません。', romaji: 'Kanojo no itte iru koto ga wakarimasen.', english: 'I don\'t understand what she is saying.', targetWord: '分かりません', targetWordEnglish: 'Do not understand' }
  ],
  '半': [
    { id: 's-n5-半-1', sentence: '三時半に友達と会う約束があります。', furigana: 'さんじはん に ともだち と あう やくそく が あります。', romaji: 'Sanji han ni tomodachi to au yakusoku ga arimasu.', english: 'I have an appointment to meet a friend at 3:30.', targetWord: '三時半', targetWordEnglish: '3:30' },
    { id: 's-n5-半-2', sentence: 'パンを半分に切って食べました。', furigana: 'パン を はんぶん に きって たべました。', romaji: 'Pan o hanbun ni kitte tabemashita.', english: 'I cut the bread in half and ate it.', targetWord: '半分', targetWordEnglish: 'Half' }
  ],
  '毎': [
    { id: 's-n5-毎-1', sentence: '毎日三十分ジョギングをしています。', furigana: 'まいにち さんじゅっぷん ジョギング を しています。', romaji: 'Mainichi sanjuppun jogingu o shite imasu.', english: 'I jog for 30 minutes every day.', targetWord: '毎日', targetWordEnglish: 'Every day' },
    { id: 's-n5-毎-2', sentence: '毎朝シャワーを浴びてから朝食を食べます。', furigana: 'まいあさ シャワー を あびてから ちょうしょく を たべます。', romaji: 'Maiasa shawaa o abite kara choushoku o tabemasu.', english: 'Every morning I take a shower then eat breakfast.', targetWord: '毎朝', targetWordEnglish: 'Every morning' }
  ],
  '今': [
    { id: 's-n5-今-1', sentence: '今から勉強を始めます。', furigana: 'いま から べんきょう を はじめます。', romaji: 'Ima kara benkyou o hajimemasu.', english: 'I will start studying from now.', targetWord: '今', targetWordEnglish: 'Now' },
    { id: 's-n5-今-2', sentence: '今週末は家でゆっくり休みます。', furigana: 'こんしゅうまつ は いえ で ゆっくり やすみます。', romaji: 'Konshuumatsu wa ie de yukkuri yasumimasu.', english: 'This weekend I will relax at home.', targetWord: '今週末', targetWordEnglish: 'This weekend' }
  ],
  '先': [
    { id: 's-n5-先-1', sentence: '田中先生は日本語がとても上手です。', furigana: 'たなか せんせい は にほんご が とても じょうず です。', romaji: 'Tanaka sensei wa nihongo ga totemo jouzu desu.', english: 'Teacher Tanaka is very good at Japanese.', targetWord: '先生', targetWordEnglish: 'Teacher' },
    { id: 's-n5-先-2', sentence: '先週末は家族と海へ行きました。', furigana: 'せんしゅうまつ は かぞく と うみ へ いきました。', romaji: 'Senshuumatsu wa kazoku to umi e ikimashita.', english: 'Last weekend I went to the beach with my family.', targetWord: '先週末', targetWordEnglish: 'Last weekend' }
  ],
  '前': [
    { id: 's-n5-前-1', sentence: '食事の前に手を洗いましょう。', furigana: 'しょくじ の まえ に て を あらいましょう。', romaji: 'Shokuji no mae ni te o araimashou.', english: 'Let\'s wash our hands before eating.', targetWord: '前', targetWordEnglish: 'Before / Front' },
    { id: 's-n5-前-2', sentence: '駅の前にコンビニがあります。', furigana: 'えき の まえ に コンビニ が あります。', romaji: 'Eki no mae ni konbini ga arimasu.', english: 'There is a convenience store in front of the station.', targetWord: '駅の前', targetWordEnglish: 'In front of the station' }
  ],
  '後': [
    { id: 's-n5-後-1', sentence: '授業の後で図書館へ行きます。', furigana: 'じゅぎょう の あと で としょかん へ いきます。', romaji: 'Jugyou no ato de toshokan e ikimasu.', english: 'I go to the library after class.', targetWord: '後', targetWordEnglish: 'After' },
    { id: 's-n5-後-2', sentence: '後ろに誰かいますか？', furigana: 'うしろ に だれか いますか？', romaji: 'Ushiro ni dareka imasu ka?', english: 'Is someone behind me?', targetWord: '後ろ', targetWordEnglish: 'Behind' }
  ],
  '午': [
    { id: 's-n5-午-1', sentence: '午前中に宿題を全部終わらせました。', furigana: 'ごぜんちゅう に しゅくだい を ぜんぶ おわらせました。', romaji: 'Gozenchuu ni shukudai o zenbu owarasemashita.', english: 'I finished all my homework in the morning.', targetWord: '午前中', targetWordEnglish: 'In the morning (AM)' },
    { id: 's-n5-午-2', sentence: '午後はゆっくりお茶を飲みながら読書します。', furigana: 'ごご は ゆっくり おちゃ を のみながら どくしょ します。', romaji: 'Gogo wa yukkuri ocha o nominagara dokusho shimasu.', english: 'In the afternoon I read while leisurely drinking tea.', targetWord: '午後', targetWordEnglish: 'Afternoon (PM)' }
  ],
  '何': [
    { id: 's-n5-何-1', sentence: '今日のランチは何ですか？', furigana: 'きょう の ランチ は なん ですか？', romaji: 'Kyou no ranchi wa nan desu ka?', english: 'What is today\'s lunch?', targetWord: '何', targetWordEnglish: 'What' },
    { id: 's-n5-何-2', sentence: '何時に起きますか？', furigana: 'なんじ に おきますか？', romaji: 'Nanji ni okimasu ka?', english: 'What time do you wake up?', targetWord: '何時', targetWordEnglish: 'What time' }
  ],
  '上': [
    { id: 's-n5-上-1', sentence: '本は机の上にあります。', furigana: 'ほん は つくえ の うえ に あります。', romaji: 'Hon wa tsukue no ue ni arimasu.', english: 'The book is on top of the desk.', targetWord: '上', targetWordEnglish: 'Above / On top' },
    { id: 's-n5-上-2', sentence: 'エレベーターで上の階に行きます。', furigana: 'エレベーター で うえ の かい に いきます。', romaji: 'Erebeetaa de ue no kai ni ikimasu.', english: 'I go to the upper floor by elevator.', targetWord: '上の階', targetWordEnglish: 'Upper floor' }
  ],
  '下': [
    { id: 's-n5-下-1', sentence: '猫がベッドの下に隠れています。', furigana: 'ねこ が ベッド の した に かくれています。', romaji: 'Neko ga beddo no shita ni kakurete imasu.', english: 'The cat is hiding under the bed.', targetWord: '下', targetWordEnglish: 'Under / Below' },
    { id: 's-n5-下-2', sentence: '坂を下って駅まで行きました。', furigana: 'さか を くだって えき まで いきました。', romaji: 'Saka o kudatte eki made ikimashita.', english: 'I went down the slope to the station.', targetWord: '下', targetWordEnglish: 'Down' }
  ],
  '中': [
    { id: 's-n5-中-1', sentence: 'バッグの中に財布があります。', furigana: 'バッグ の なか に さいふ が あります。', romaji: 'Baggu no naka ni saifu ga arimasu.', english: 'There is a wallet inside the bag.', targetWord: '中', targetWordEnglish: 'Inside' },
    { id: 's-n5-中-2', sentence: '日本語の授業は今勉強中です。', furigana: 'にほんご の じゅぎょう は いま べんきょうちゅう です。', romaji: 'Nihongo no jugyou wa ima benkyouchuu desu.', english: 'I am currently studying Japanese class.', targetWord: '勉強中', targetWordEnglish: 'Currently studying' }
  ],
  '外': [
    { id: 's-n5-外-1', sentence: '今日は天気がいいので外で昼ごはんを食べます。', furigana: 'きょう は てんき が いいので そと で ひるごはん を たべます。', romaji: 'Kyou wa tenki ga ii node soto de hirugohan o tabemasu.', english: 'Since today is nice weather, I eat lunch outside.', targetWord: '外', targetWordEnglish: 'Outside' },
    { id: 's-n5-外-2', sentence: '私は外国の文化に興味があります。', furigana: 'わたし は がいこく の ぶんか に きょうみ が あります。', romaji: 'Watashi wa gaikoku no bunka ni kyoumi ga arimasu.', english: 'I am interested in foreign cultures.', targetWord: '外国', targetWordEnglish: 'Foreign country' }
  ],
  '右': [
    { id: 's-n5-右-1', sentence: '右に曲がると郵便局があります。', furigana: 'みぎ に まがる と ゆうびんきょく が あります。', romaji: 'Migi ni magaru to yuubinkyoku ga arimasu.', english: 'Turn right and there is a post office.', targetWord: '右', targetWordEnglish: 'Right' },
    { id: 's-n5-右-2', sentence: '私は右手でペンを持ちます。', furigana: 'わたし は みぎて で ペン を もちます。', romaji: 'Watashi wa migite de pen o mochimasu.', english: 'I hold a pen with my right hand.', targetWord: '右手', targetWordEnglish: 'Right hand' }
  ],
  '左': [
    { id: 's-n5-左-1', sentence: '信号を左に曲がると公園があります。', furigana: 'しんごう を ひだり に まがる と こうえん が あります。', romaji: 'Shingou o hidari ni magaru to kouen ga arimasu.', english: 'Turn left at the traffic light and there is a park.', targetWord: '左', targetWordEnglish: 'Left' },
    { id: 's-n5-左-2', sentence: '彼は左利きなのでペンを左手で持ちます。', furigana: 'かれ は ひだりきき な ので ペン を ひだりて で もちます。', romaji: 'Kare wa hidarikiki nanode pen o hidarite de mochimasu.', english: 'Because he is left-handed, he holds a pen with his left hand.', targetWord: '左手', targetWordEnglish: 'Left hand' }
  ],
  '北': [
    { id: 's-n5-北-1', sentence: '北海道は冬にとても雪が多いです。', furigana: 'ほっかいどう は ふゆ に とても ゆき が おおい です。', romaji: 'Hokkaidou wa fuyu ni totemo yuki ga ooi desu.', english: 'Hokkaido has a lot of snow in winter.', targetWord: '北', targetWordEnglish: 'North' },
    { id: 's-n5-北-2', sentence: '北の方角は太陽が出ない方向です。', furigana: 'きた の ほうがく は たいよう が でない ほうこう です。', romaji: 'Kita no hougaku wa taiyou ga denai houkou desu.', english: 'North is the direction where the sun does not come out.', targetWord: '北', targetWordEnglish: 'North' }
  ],
  '南': [
    { id: 's-n5-南-1', sentence: '南の海はとてもきれいな青い色をしています。', furigana: 'みなみ の うみ は とても きれい な あおい いろ を しています。', romaji: 'Minami no umi wa totemo kirei na aoi iro o shite imasu.', english: 'The southern sea has a very beautiful blue color.', targetWord: '南', targetWordEnglish: 'South' },
    { id: 's-n5-南-2', sentence: '冬は南の温かい地方に旅行したいです。', furigana: 'ふゆ は みなみ の あたたかい ちほう に りょこう したい です。', romaji: 'Fuyu wa minami no atatakai chihou ni ryokou shitai desu.', english: 'In winter I want to travel to the warm southern regions.', targetWord: '南', targetWordEnglish: 'South' }
  ],
  '東': [
    { id: 's-n5-東-1', sentence: '東京は日本で一番大きな都市です。', furigana: 'とうきょう は にほん で いちばん おおきな とし です。', romaji: 'Toukyou wa Nihon de ichiban ookina toshi desu.', english: 'Tokyo is the largest city in Japan.', targetWord: '東京', targetWordEnglish: 'Tokyo' },
    { id: 's-n5-東-2', sentence: '太陽は東から昇ります。', furigana: 'たいよう は ひがし から のぼります。', romaji: 'Taiyou wa higashi kara nobori masu.', english: 'The sun rises from the east.', targetWord: '東', targetWordEnglish: 'East' }
  ],
  '西': [
    { id: 's-n5-西-1', sentence: '太陽は西に沈みます。', furigana: 'たいよう は にし に しずみます。', romaji: 'Taiyou wa nishi ni shizumimasu.', english: 'The sun sets in the west.', targetWord: '西', targetWordEnglish: 'West' },
    { id: 's-n5-西-2', sentence: '西口改札を出て左側にバス停があります。', furigana: 'にしぐち かいさつ を でて ひだりがわ に バスてい が あります。', romaji: 'Nishiguchi kaisatsu o dete hidarigawa ni basutei ga arimasu.', english: 'Exit the west gate and the bus stop is on the left side.', targetWord: '西口', targetWordEnglish: 'West exit' }
  ],
  '山': [
    { id: 's-n5-山-1', sentence: '富士山は日本で一番高い山です。', furigana: 'ふじさん は にほん で いちばん たかい やま です。', romaji: 'Fujisan wa Nihon de ichiban takai yama desu.', english: 'Mount Fuji is the tallest mountain in Japan.', targetWord: '富士山', targetWordEnglish: 'Mount Fuji' },
    { id: 's-n5-山-2', sentence: '週末に友達と山登りをしました。', furigana: 'しゅうまつ に ともだち と やまのぼり を しました。', romaji: 'Shuumatsu ni tomodachi to yamanobori o shimashita.', english: 'I went mountain climbing with friends on the weekend.', targetWord: '山登り', targetWordEnglish: 'Mountain climbing' }
  ],
  '川': [
    { id: 's-n5-川-1', sentence: '川のそばで子供たちが魚を釣っています。', furigana: 'かわ の そば で こどもたち が さかな を つっています。', romaji: 'Kawa no soba de kodomotachi ga sakana o tsutteimasu.', english: 'Children are fishing beside the river.', targetWord: '川', targetWordEnglish: 'River' },
    { id: 's-n5-川-2', sentence: '春になると川のそばで桜が咲きます。', furigana: 'はる に なる と かわ の そば で さくら が さきます。', romaji: 'Haru ni naru to kawa no soba de sakura ga sakimasu.', english: 'When spring comes, cherry blossoms bloom beside the river.', targetWord: '川', targetWordEnglish: 'River' }
  ],
  '田': [
    { id: 's-n5-田-1', sentence: '田んぼで農家の方々がお米を作っています。', furigana: 'たんぼ で のうか の かたがた が おこめ を つくっています。', romaji: 'Tanbo de nouka no katagata ga okome o tsukutte imasu.', english: 'Farmers are growing rice in the rice paddies.', targetWord: '田んぼ', targetWordEnglish: 'Rice paddy' },
    { id: 's-n5-田-2', sentence: '田中さんは日本でとても多い苗字です。', furigana: 'たなか さん は にほん で とても おおい みょうじ です。', romaji: 'Tanaka san wa Nihon de totemo ooi myouji desu.', english: 'Tanaka is a very common surname in Japan.', targetWord: '田中', targetWordEnglish: 'Tanaka (surname)' }
  ],
  '天': [
    { id: 's-n5-天-1', sentence: '今日は天気がよくてとても気持ちいいです。', furigana: 'きょう は てんき が よくて とても きもちいい です。', romaji: 'Kyou wa tenki ga yokute totemo kimochi ii desu.', english: 'The weather today is nice and it feels very good.', targetWord: '天気', targetWordEnglish: 'Weather' },
    { id: 's-n5-天-2', sentence: '天ぷらは揚げたてが一番おいしいです。', furigana: 'てんぷら は あげたて が いちばん おいしい です。', romaji: 'Tenpura wa agetate ga ichiban oishii desu.', english: 'Tempura is most delicious when freshly fried.', targetWord: '天ぷら', targetWordEnglish: 'Tempura' }
  ],
  '気': [
    { id: 's-n5-気-1', sentence: '山田さんはいつも元気に挨拶してくれます。', furigana: 'やまだ さん は いつも げんき に あいさつ して くれます。', romaji: 'Yamada san wa itsumo genki ni aisatsu shite kuremasu.', english: 'Mr. Yamada always greets me energetically.', targetWord: '元気', targetWordEnglish: 'Energetic / Healthy' },
    { id: 's-n5-気-2', sentence: '病気の時は暖かくして休んでください。', furigana: 'びょうき の とき は あたたかくして やすんでください。', romaji: 'Byouki no toki wa atatakaku shite yasunde kudasai.', english: 'When sick, please keep warm and rest.', targetWord: '病気', targetWordEnglish: 'Illness / Sickness' }
  ],
  '雨': [
    { id: 's-n5-雨-1', sentence: '雨が降っているので傘を持って行きました。', furigana: 'あめ が ふって いる ので かさ を もって いきました。', romaji: 'Ame ga futte iru node kasa o motte ikimashita.', english: 'Because it was raining, I took an umbrella.', targetWord: '雨', targetWordEnglish: 'Rain' },
    { id: 's-n5-雨-2', sentence: '梅雨の季節は毎日じめじめしています。', furigana: 'つゆ の きせつ は まいにち じめじめ しています。', romaji: 'Tsuyu no kisetsu wa mainichi jimejime shite imasu.', english: 'The rainy season is humid every day.', targetWord: '梅雨', targetWordEnglish: 'Rainy season' }
  ],
  '空': [
    { id: 's-n5-空-1', sentence: '今日は雲一つない青空が広がっています。', furigana: 'きょう は くも ひとつ ない あおぞら が ひろがっています。', romaji: 'Kyou wa kumo hitotsu nai aozora ga hirogatte imasu.', english: 'Today a clear blue sky without a single cloud spreads out.', targetWord: '青空', targetWordEnglish: 'Blue sky' },
    { id: 's-n5-空-2', sentence: '飛行機が空を飛んでいます。', furigana: 'ひこうき が そら を とんでいます。', romaji: 'Hikouki ga sora o tonde imasu.', english: 'An airplane is flying in the sky.', targetWord: '空', targetWordEnglish: 'Sky' }
  ],
  '花': [
    { id: 's-n5-花-1', sentence: '春になると公園にきれいな花が咲きます。', furigana: 'はる に なる と こうえん に きれい な はな が さきます。', romaji: 'Haru ni naru to kouen ni kirei na hana ga sakimasu.', english: 'When spring comes, beautiful flowers bloom in the park.', targetWord: '花', targetWordEnglish: 'Flower' },
    { id: 's-n5-花-2', sentence: '夏の夜空に花火が打ち上がりました。', furigana: 'なつ の よぞら に はなび が うちあがりました。', romaji: 'Natsu no yozora ni hanabi ga uchiagari mashita.', english: 'Fireworks went up into the summer night sky.', targetWord: '花火', targetWordEnglish: 'Fireworks' }
  ],
  '魚': [
    { id: 's-n5-魚-1', sentence: 'スーパーで新鮮な魚を買いました。', furigana: 'スーパー で しんせん な さかな を かいました。', romaji: 'Suupaa de shinsen na sakana o kaimashita.', english: 'I bought fresh fish at the supermarket.', targetWord: '魚', targetWordEnglish: 'Fish' },
    { id: 's-n5-魚-2', sentence: '日本人は魚料理をよく食べます。', furigana: 'にほんじん は さかな りょうり を よく たべます。', romaji: 'Nihonjin wa sakana ryouri o yoku tabemasu.', english: 'Japanese people often eat fish dishes.', targetWord: '魚', targetWordEnglish: 'Fish' }
  ],
  '白': [
    { id: 's-n5-白-1', sentence: '白い雪が静かに積もっています。', furigana: 'しろい ゆき が しずか に つもっています。', romaji: 'Shiroi yuki ga shizuka ni tsumotte imasu.', english: 'White snow is quietly piling up.', targetWord: '白い', targetWordEnglish: 'White' },
    { id: 's-n5-白-2', sentence: '白ご飯に梅干しをのせて食べます。', furigana: 'しろ ごはん に うめぼし を のせて たべます。', romaji: 'Shiro gohan ni umeboshi o nosete tabemasu.', english: 'I eat white rice with umeboshi on top.', targetWord: '白ご飯', targetWordEnglish: 'White rice' }
  ],
  '赤': [
    { id: 's-n5-赤-1', sentence: '赤信号では必ず止まってください。', furigana: 'あかしんごう で は かならず とまってください。', romaji: 'Aka shingou dewa kanarazu tomatte kudasai.', english: 'Always stop at red traffic lights.', targetWord: '赤信号', targetWordEnglish: 'Red traffic light' },
    { id: 's-n5-赤-2', sentence: '秋になると木の葉が赤くなります。', furigana: 'あき に なる と きのは が あかく なります。', romaji: 'Aki ni naru to ki no ha ga akaku narimasu.', english: 'When autumn comes, tree leaves turn red.', targetWord: '赤く', targetWordEnglish: 'Turns red' }
  ],
  '青': [
    { id: 's-n5-青-1', sentence: '夏の青い海で泳ぎたいです。', furigana: 'なつ の あおい うみ で およぎたい です。', romaji: 'Natsu no aoi umi de oyogitai desu.', english: 'I want to swim in the blue sea in summer.', targetWord: '青い', targetWordEnglish: 'Blue' },
    { id: 's-n5-青-2', sentence: '信号が青になってから渡りました。', furigana: 'しんごう が あお に なってから わたりました。', romaji: 'Shingou ga ao ni natte kara watarimashita.', english: 'I crossed after the traffic light turned green.', targetWord: '青', targetWordEnglish: 'Green (traffic light)' }
  ],
  '黒': [
    { id: 's-n5-黒-1', sentence: '彼女は黒い猫を二匹飼っています。', furigana: 'かのじょ は くろい ねこ を にひき かっています。', romaji: 'Kanojo wa kuroi neko o nihiki katte imasu.', english: 'She has two black cats.', targetWord: '黒い', targetWordEnglish: 'Black' },
    { id: 's-n5-黒-2', sentence: '黒板に先生が漢字を書きました。', furigana: 'こくばん に せんせい が かんじ を かきました。', romaji: 'Kokuban ni sensei ga kanji o kakimashita.', english: 'The teacher wrote kanji on the blackboard.', targetWord: '黒板', targetWordEnglish: 'Blackboard' }
  ],
  '人': [
    { id: 's-n5-人-1', sentence: '電車の中に人がたくさんいました。', furigana: 'でんしゃ の なか に ひと が たくさん いました。', romaji: 'Densha no naka ni hito ga takusan imashita.', english: 'There were many people inside the train.', targetWord: '人', targetWordEnglish: 'Person / People' },
    { id: 's-n5-人-2', sentence: 'この料理は日本人が大好きです。', furigana: 'この りょうり は にほんじん が だいすき です。', romaji: 'Kono ryouri wa nihonjin ga daisuki desu.', english: 'Japanese people love this dish.', targetWord: '日本人', targetWordEnglish: 'Japanese person' }
  ],
  '男': [
    { id: 's-n5-男-1', sentence: '男の人がバスで席を譲ってくれました。', furigana: 'おとこ の ひと が バス で せき を ゆずって くれました。', romaji: 'Otoko no hito ga basu de seki o yuzutte kuremashita.', english: 'A man gave me his seat on the bus.', targetWord: '男の人', targetWordEnglish: 'Man' },
    { id: 's-n5-男-2', sentence: '男の子たちが公園でサッカーをしています。', furigana: 'おとこ の こたち が こうえん で サッカー を しています。', romaji: 'Otoko no kotachi ga kouen de sakkaa o shite imasu.', english: 'Boys are playing soccer in the park.', targetWord: '男の子', targetWordEnglish: 'Boy' }
  ],
  '女': [
    { id: 's-n5-女-1', sentence: '女の人が素敵なドレスを着ています。', furigana: 'おんな の ひと が すてき な ドレス を きています。', romaji: 'Onna no hito ga suteki na doresu o kite imasu.', english: 'A woman is wearing a beautiful dress.', targetWord: '女の人', targetWordEnglish: 'Woman' },
    { id: 's-n5-女-2', sentence: '女の子はピンク色のランドセルを背負っています。', furigana: 'おんな の こ は ピンクいろ の ランドセル を せおっています。', romaji: 'Onna no ko wa pinku iro no randoseru o seotte imasu.', english: 'The girl is carrying a pink school bag on her back.', targetWord: '女の子', targetWordEnglish: 'Girl' }
  ],
  '子': [
    { id: 's-n5-子-1', sentence: '子供たちが元気に校庭で遊んでいます。', furigana: 'こどもたち が げんき に こうてい で あそんでいます。', romaji: 'Kodomotachi ga genki ni koutei de asonde imasu.', english: 'Children are playing energetically in the schoolyard.', targetWord: '子供', targetWordEnglish: 'Children' },
    { id: 's-n5-子-2', sentence: '子猫が毛糸のボールで遊んでいます。', furigana: 'こねこ が けいと の ボール で あそんでいます。', romaji: 'Koneko ga keito no booru de asonde imasu.', english: 'The kitten is playing with a ball of yarn.', targetWord: '子猫', targetWordEnglish: 'Kitten' }
  ],
  '母': [
    { id: 's-n5-母-1', sentence: 'お母さんが台所で夕食を作っています。', furigana: 'おかあさん が だいどころ で ゆうしょく を つくっています。', romaji: 'Okaasan ga daidokoro de yuushoku o tsukutte imasu.', english: 'Mother is making dinner in the kitchen.', targetWord: 'お母さん', targetWordEnglish: 'Mother' },
    { id: 's-n5-母-2', sentence: '母の日にカーネーションを買ってプレゼントしました。', furigana: 'ははのひ に カーネーション を かって プレゼント しました。', romaji: 'Haha no hi ni kaaneeshon o katte purezento shimashita.', english: 'On Mother\'s Day I bought carnations and gave them as a gift.', targetWord: '母の日', targetWordEnglish: 'Mother\'s Day' }
  ],
  '父': [
    { id: 's-n5-父-1', sentence: 'お父さんは毎朝新聞を読みます。', furigana: 'おとうさん は まいあさ しんぶん を よみます。', romaji: 'Otousan wa maiasa shinbun o yomimasu.', english: 'Father reads the newspaper every morning.', targetWord: 'お父さん', targetWordEnglish: 'Father' },
    { id: 's-n5-父-2', sentence: '父の日に財布をプレゼントしました。', furigana: 'ちちのひ に さいふ を プレゼント しました。', romaji: 'Chichi no hi ni saifu o purezento shimashita.', english: 'I gave a wallet as a gift on Father\'s Day.', targetWord: '父の日', targetWordEnglish: 'Father\'s Day' }
  ],
  '友': [
    { id: 's-n5-友-1', sentence: '友達と一緒に新しいカフェへ行きました。', furigana: 'ともだち と いっしょ に あたらしい カフェ へ いきました。', romaji: 'Tomodachi to issho ni atarashii kafe e ikimashita.', english: 'I went to a new cafe together with my friend.', targetWord: '友達', targetWordEnglish: 'Friend' },
    { id: 's-n5-友-2', sentence: '親友と久しぶりに会って嬉しかったです。', furigana: 'しんゆう と ひさしぶり に あって うれしかった です。', romaji: 'Shinyuu to hisashiburi ni atte ureshikatta desu.', english: 'I was happy to meet my close friend after a long time.', targetWord: '親友', targetWordEnglish: 'Close friend' }
  ],
  '大': [
    { id: 's-n5-大-1', sentence: '図書館には大きな本棚がたくさんあります。', furigana: 'としょかん に は おおきな ほんだな が たくさん あります。', romaji: 'Toshokan ni wa ookina hondana ga takusan arimasu.', english: 'The library has many large bookshelves.', targetWord: '大きな', targetWordEnglish: 'Large' },
    { id: 's-n5-大-2', sentence: '大学で日本語と英語を勉強しています。', furigana: 'だいがく で にほんご と えいご を べんきょう しています。', romaji: 'Daigaku de nihongo to eigo o benkyou shite imasu.', english: 'I am studying Japanese and English at university.', targetWord: '大学', targetWordEnglish: 'University' }
  ],
  '小': [
    { id: 's-n5-小-1', sentence: '小さい子犬が道を歩いています。', furigana: 'ちいさい こいぬ が みち を あるいています。', romaji: 'Chiisai koinu ga michi o aruite imasu.', english: 'A small puppy is walking on the road.', targetWord: '小さい', targetWordEnglish: 'Small' },
    { id: 's-n5-小-2', sentence: '小学校のころ、毎日外で遊んでいました。', furigana: 'しょうがっこう の ころ、まいにち そと で あそんでいました。', romaji: 'Shougakkou no koro, mainichi soto de asonde imashita.', english: 'When I was in elementary school, I played outside every day.', targetWord: '小学校', targetWordEnglish: 'Elementary school' }
  ],
  '多': [
    { id: 's-n5-多-1', sentence: 'この街は観光客が多いです。', furigana: 'この まち は かんこうきゃく が おおい です。', romaji: 'Kono machi wa kankoukyaku ga ooi desu.', english: 'This town has many tourists.', targetWord: '多い', targetWordEnglish: 'Many' },
    { id: 's-n5-多-2', sentence: '多くの人がこのイベントに参加しました。', furigana: 'おおく の ひと が この イベント に さんか しました。', romaji: 'Ooku no hito ga kono ibento ni sanka shimashita.', english: 'Many people participated in this event.', targetWord: '多く', targetWordEnglish: 'Many (of)' }
  ],
  '少': [
    { id: 's-n5-少-1', sentence: '少しだけ砂糖を入れてください。', furigana: 'すこしだけ さとう を いれてください。', romaji: 'Sukoshi dake satou o irete kudasai.', english: 'Please put in just a little sugar.', targetWord: '少し', targetWordEnglish: 'A little' },
    { id: 's-n5-少-2', sentence: '今日は参加者が少なくて寂しかったです。', furigana: 'きょう は さんかしゃ が すくなくて さびしかった です。', romaji: 'Kyou wa sankasha ga sukunakute sabishikatta desu.', english: 'Today there were few participants and I felt lonely.', targetWord: '少ない', targetWordEnglish: 'Few / Little' }
  ],
  '長': [
    { id: 's-n5-長-1', sentence: '長い映画でしたが、最後まで楽しめました。', furigana: 'ながい えいが でしたが、さいご まで たのしめました。', romaji: 'Nagai eiga deshita ga, saigo made tanoshimemashita.', english: 'It was a long movie, but I enjoyed it until the end.', targetWord: '長い', targetWordEnglish: 'Long' },
    { id: 's-n5-長-2', sentence: '社長は毎日とても忙しいそうです。', furigana: 'しゃちょう は まいにち とても いそがしい そうです。', romaji: 'Shachou wa mainichi totemo isogashii sou desu.', english: 'The company president seems to be very busy every day.', targetWord: '社長', targetWordEnglish: 'Company president' }
  ],
  '高': [
    { id: 's-n5-高-1', sentence: 'あのレストランは少し値段が高いです。', furigana: 'あの レストラン は すこし ねだん が たかい です。', romaji: 'Ano resutoran wa sukoshi nedan ga takai desu.', english: 'That restaurant is a bit expensive.', targetWord: '高い', targetWordEnglish: 'Expensive / Tall' },
    { id: 's-n5-高-2', sentence: '高校生のとき部活でテニスをしていました。', furigana: 'こうこうせい の とき ぶかつ で テニス を していました。', romaji: 'Koukousei no toki bukatsu de tenisu o shite imashita.', english: 'When I was a high school student, I played tennis in a club.', targetWord: '高校生', targetWordEnglish: 'High school student' }
  ],
  '安': [
    { id: 's-n5-安-1', sentence: '駅前のスーパーは値段が安くて便利です。', furigana: 'えきまえ の スーパー は ねだん が やすくて べんり です。', romaji: 'Ekimae no suupaa wa nedan ga yasukute benri desu.', english: 'The supermarket in front of the station is cheap and convenient.', targetWord: '安い', targetWordEnglish: 'Cheap / Inexpensive' },
    { id: 's-n5-安-2', sentence: '旅行から帰って家族と会えて安心しました。', furigana: 'りょこう から かえって かぞく と あえて あんしん しました。', romaji: 'Ryokou kara kaette kazoku to aete anshin shimashita.', english: 'I felt relieved to come home from travel and see my family.', targetWord: '安心', targetWordEnglish: 'Relief / Peace of mind' }
  ],
  '新': [
    { id: 's-n5-新-1', sentence: '新しいスマートフォンを買いました。', furigana: 'あたらしい スマートフォン を かいました。', romaji: 'Atarashii sumaatofon o kaimashita.', english: 'I bought a new smartphone.', targetWord: '新しい', targetWordEnglish: 'New' },
    { id: 's-n5-新-2', sentence: '新幹線で東京から大阪まで行きました。', furigana: 'しんかんせん で とうきょう から おおさか まで いきました。', romaji: 'Shinkansen de Toukyou kara Oosaka made ikimashita.', english: 'I went from Tokyo to Osaka by bullet train.', targetWord: '新幹線', targetWordEnglish: 'Bullet train' }
  ],
  '古': [
    { id: 's-n5-古-1', sentence: 'この古いお寺は五百年の歴史があります。', furigana: 'この ふるい おてら は ごひゃくねん の れきし が あります。', romaji: 'Kono furui otera wa gohyakunen no rekishi ga arimasu.', english: 'This old temple has 500 years of history.', targetWord: '古い', targetWordEnglish: 'Old' },
    { id: 's-n5-古-2', sentence: '古本屋で面白い本を見つけました。', furigana: 'ふるほんや で おもしろい ほん を みつけました。', romaji: 'Furuhon\'ya de omoshiroi hon o mitsukemashita.', english: 'I found an interesting book at the used bookstore.', targetWord: '古本屋', targetWordEnglish: 'Used bookstore' }
  ],
  '学': [
    { id: 's-n5-学-1', sentence: '学校で毎日日本語を勉強しています。', furigana: 'がっこう で まいにち にほんご を べんきょう しています。', romaji: 'Gakkou de mainichi nihongo o benkyou shite imasu.', english: 'I study Japanese every day at school.', targetWord: '学校', targetWordEnglish: 'School' },
    { id: 's-n5-学-2', sentence: '来年、大学で経済学を学ぶ予定です。', furigana: 'らいねん、だいがく で けいざいがく を まなぶ よてい です。', romaji: 'Rainen, daigaku de keizaigaku o manabu yotei desu.', english: 'Next year, I plan to study economics at university.', targetWord: '学ぶ', targetWordEnglish: 'To study / learn' }
  ],
  '校': [
    { id: 's-n5-校-1', sentence: '高校のときに一番の思い出は文化祭です。', furigana: 'こうこう の とき に いちばん の おもいで は ぶんかさい です。', romaji: 'Koukou no toki ni ichiban no omoide wa bunkasai desu.', english: 'My best memory from high school is the culture festival.', targetWord: '高校', targetWordEnglish: 'High school' },
    { id: 's-n5-校-2', sentence: '小学校の運動会で徒競走に出ました。', furigana: 'しょうがっこう の うんどうかい で ときょうそう に でました。', romaji: 'Shougakkou no undoukai de tokyounsou ni demashita.', english: 'I participated in a foot race at elementary school sports day.', targetWord: '小学校', targetWordEnglish: 'Elementary school' }
  ],
  '生': [
    { id: 's-n5-生-1', sentence: '大学生は毎日授業に出席しています。', furigana: 'だいがくせい は まいにち じゅぎょう に しゅっせき しています。', romaji: 'Daigakusei wa mainichi jugyou ni shusseki shite imasu.', english: 'University students attend classes every day.', targetWord: '大学生', targetWordEnglish: 'University student' },
    { id: 's-n5-生-2', sentence: '生まれてはじめて海外に行きました。', furigana: 'うまれて はじめて かいがい に いきました。', romaji: 'Umarete hajimete kaigai ni ikimashita.', english: 'For the first time since I was born, I went abroad.', targetWord: '生まれて', targetWordEnglish: 'Since birth' }
  ],
  '本': [
    { id: 's-n5-本-1', sentence: '図書館で面白い本を借りました。', furigana: 'としょかん で おもしろい ほん を かりました。', romaji: 'Toshokan de omoshiroi hon o karimashita.', english: 'I borrowed an interesting book from the library.', targetWord: '本', targetWordEnglish: 'Book' },
    { id: 's-n5-本-2', sentence: '本屋さんで新しい参考書を買いました。', furigana: 'ほんや さん で あたらしい さんこうしょ を かいました。', romaji: 'Hon\'yasan de atarashii sankousho o kaimashita.', english: 'I bought a new reference book at the bookstore.', targetWord: '本屋', targetWordEnglish: 'Bookstore' }
  ],
  '語': [
    { id: 's-n5-語-1', sentence: '日本語の勉強が最近楽しくなってきました。', furigana: 'にほんご の べんきょう が さいきん たのしく なってきました。', romaji: 'Nihongo no benkyou ga saikin tanoshiku natte kimashita.', english: 'Studying Japanese has been getting fun recently.', targetWord: '日本語', targetWordEnglish: 'Japanese language' },
    { id: 's-n5-語-2', sentence: '英語で話しかけられて少し困りました。', furigana: 'えいご で はなしかけられて すこし こまりました。', romaji: 'Eigo de hanashikakerarete sukoshi komarimashita.', english: 'I was a bit troubled when someone spoke to me in English.', targetWord: '英語', targetWordEnglish: 'English language' }
  ],
  '名': [
    { id: 's-n5-名-1', sentence: '初めて会う人に名前を聞きました。', furigana: 'はじめて あう ひと に なまえ を ききました。', romaji: 'Hajimete au hito ni namae o kikimashita.', english: 'I asked for the name of the person I was meeting for the first time.', targetWord: '名前', targetWordEnglish: 'Name' },
    { id: 's-n5-名-2', sentence: 'この映画は世界的に有名です。', furigana: 'この えいが は せかいてき に ゆうめい です。', romaji: 'Kono eiga wa sekaiteki ni yuumei desu.', english: 'This movie is world-famous.', targetWord: '有名', targetWordEnglish: 'Famous' }
  ],
  '話': [
    { id: 's-n5-話-1', sentence: '電話でお母さんと長い話をしました。', furigana: 'でんわ で おかあさん と ながい はなし を しました。', romaji: 'Denwa de okaasan to nagai hanashi o shimashita.', english: 'I had a long talk with my mother on the phone.', targetWord: '電話', targetWordEnglish: 'Telephone / Phone call' },
    { id: 's-n5-話-2', sentence: '先生はいつも面白い話をしてくれます。', furigana: 'せんせい は いつも おもしろい はなし を して くれます。', romaji: 'Sensei wa itsumo omoshiroi hanashi o shite kuremasu.', english: 'The teacher always tells interesting stories.', targetWord: '話', targetWordEnglish: 'Story / Talk' }
  ],
  '読': [
    { id: 's-n5-読-1', sentence: '寝る前に少し本を読む習慣があります。', furigana: 'ねる まえ に すこし ほん を よむ しゅうかん が あります。', romaji: 'Neru mae ni sukoshi hon o yomu shuukan ga arimasu.', english: 'I have a habit of reading a book a little before sleeping.', targetWord: '読む', targetWordEnglish: 'To read' },
    { id: 's-n5-読-2', sentence: '読書が好きで毎月十冊ぐらい読みます。', furigana: 'どくしょ が すきで まいつき じゅっさつ ぐらい よみます。', romaji: 'Dokusho ga suki de maitsuki jussatsu gurai yomimasu.', english: 'I like reading and read about ten books a month.', targetWord: '読書', targetWordEnglish: 'Reading' }
  ],
  '書': [
    { id: 's-n5-書-1', sentence: 'レポートをパソコンで書きました。', furigana: 'レポート を パソコン で かきました。', romaji: 'Repooto o pasokon de kakimashita.', english: 'I wrote the report on my computer.', targetWord: '書きました', targetWordEnglish: 'Wrote' },
    { id: 's-n5-書-2', sentence: '住所と名前を申込書に書いてください。', furigana: 'じゅうしょ と なまえ を もうしこみしょ に かいてください。', romaji: 'Juusho to namae o moushikomisho ni kaite kudasai.', english: 'Please write your address and name on the application form.', targetWord: '書いて', targetWordEnglish: 'Write (te-form)' }
  ],
  '聞': [
    { id: 's-n5-聞-1', sentence: '毎朝ラジオでニュースを聞きます。', furigana: 'まいあさ ラジオ で ニュース を ききます。', romaji: 'Maiasa rajio de nyuusu o kikimasu.', english: 'I listen to the news on the radio every morning.', targetWord: '聞きます', targetWordEnglish: 'Listen' },
    { id: 's-n5-聞-2', sentence: '道に迷って近くの人に道を聞きました。', furigana: 'みち に まよって ちかく の ひと に みち を ききました。', romaji: 'Michi ni mayotte chikaku no hito ni michi o kikimashita.', english: 'I got lost and asked a nearby person for directions.', targetWord: '聞きました', targetWordEnglish: 'Asked' }
  ],
  '行': [
    { id: 's-n5-行-1', sentence: '来週、家族と京都へ行く予定です。', furigana: 'らいしゅう、かぞく と きょうと へ いく よてい です。', romaji: 'Raishuu, kazoku to Kyouto e iku yotei desu.', english: 'Next week I plan to go to Kyoto with my family.', targetWord: '行く', targetWordEnglish: 'To go' },
    { id: 's-n5-行-2', sentence: 'スーパーへ買い物に行ってきます。', furigana: 'スーパー へ かいもの に いってきます。', romaji: 'Suupaa e kaimono ni itte kimasu.', english: 'I\'m going to the supermarket to do some shopping.', targetWord: '行ってきます', targetWordEnglish: 'I\'ll go and come back' }
  ],
  '来': [
    { id: 's-n5-来-1', sentence: '来年は日本語能力試験を受けたいです。', furigana: 'らいねん は にほんごのうりょくしけん を うけたい です。', romaji: 'Rainen wa Nihongo Nouryoku Shiken o uketai desu.', english: 'Next year I want to take the Japanese Language Proficiency Test.', targetWord: '来年', targetWordEnglish: 'Next year' },
    { id: 's-n5-来-2', sentence: 'パーティーに友達が十人来ました。', furigana: 'パーティー に ともだち が じゅうにん きました。', romaji: 'Paatii ni tomodachi ga juunin kimashita.', english: 'Ten friends came to the party.', targetWord: '来ました', targetWordEnglish: 'Came' }
  ],
  '帰': [
    { id: 's-n5-帰-1', sentence: '学校が終わったらすぐに家へ帰ります。', furigana: 'がっこう が おわったら すぐ に いえ へ かえります。', romaji: 'Gakkou ga owattara sugu ni ie e kaerimasu.', english: 'When school ends, I will go home right away.', targetWord: '帰ります', targetWordEnglish: 'Return home' },
    { id: 's-n5-帰-2', sentence: '旅行から帰ると、いつも家が恋しくなります。', furigana: 'りょこう から かえる と、いつも いえ が こいしく なります。', romaji: 'Ryokou kara kaeru to, itsumo ie ga koishiku narimasu.', english: 'When I return from travel, I always miss home.', targetWord: '帰る', targetWordEnglish: 'To return' }
  ],
  '見': [
    { id: 's-n5-見-1', sentence: '昨日、映画館で新しい映画を見ました。', furigana: 'きのう、えいがかん で あたらしい えいが を みました。', romaji: 'Kinou, eigakan de atarashii eiga o mimashita.', english: 'Yesterday I watched a new movie at the cinema.', targetWord: '見ました', targetWordEnglish: 'Watched / Saw' },
    { id: 's-n5-見-2', sentence: 'ここから富士山がよく見えます。', furigana: 'ここ から ふじさん が よく みえます。', romaji: 'Koko kara Fujisan ga yoku miemasu.', english: 'Mount Fuji can be seen well from here.', targetWord: '見えます', targetWordEnglish: 'Can be seen' }
  ],
  '食': [
    { id: 's-n5-食-1', sentence: '食堂でカレーライスを食べました。', furigana: 'しょくどう で カレーライス を たべました。', romaji: 'Shokudou de kareeraisu o tabemashita.', english: 'I ate curry rice at the cafeteria.', targetWord: '食堂', targetWordEnglish: 'Cafeteria / Dining hall' },
    { id: 's-n5-食-2', sentence: '食べ物の中で寿司が一番好きです。', furigana: 'たべもの の なか で すし が いちばん すき です。', romaji: 'Tabemono no naka de sushi ga ichiban suki desu.', english: 'Among foods, I like sushi the most.', targetWord: '食べ物', targetWordEnglish: 'Food' }
  ],
  '飲': [
    { id: 's-n5-飲-1', sentence: '運動の後は水をたくさん飲みます。', furigana: 'うんどう の あと は みず を たくさん のみます。', romaji: 'Undou no ato wa mizu o takusan nomimasu.', english: 'After exercise I drink a lot of water.', targetWord: '飲みます', targetWordEnglish: 'Drink' },
    { id: 's-n5-飲-2', sentence: '飲み物は何にしますか？ジュースにします。', furigana: 'のみもの は なに に しますか？ ジュース に します。', romaji: 'Nomimono wa nani ni shimasu ka? Juusu ni shimasu.', english: 'What will you have to drink? I\'ll have juice.', targetWord: '飲み物', targetWordEnglish: 'Beverage / Drink' }
  ],
  '買': [
    { id: 's-n5-買-1', sentence: 'スーパーで今週の買い物をしました。', furigana: 'スーパー で こんしゅう の かいもの を しました。', romaji: 'Suupaa de konshuu no kaimono o shimashita.', english: 'I did this week\'s shopping at the supermarket.', targetWord: '買い物', targetWordEnglish: 'Shopping' },
    { id: 's-n5-買-2', sentence: '誕生日プレゼントに可愛いバッグを買いました。', furigana: 'たんじょうびプレゼント に かわいい バッグ を かいました。', romaji: 'Tanjoubi purezento ni kawaii baggu o kaimashita.', english: 'I bought a cute bag as a birthday present.', targetWord: '買いました', targetWordEnglish: 'Bought' }
  ],
  '休': [
    { id: 's-n5-休-1', sentence: '今日は体調が悪いので学校を休みます。', furigana: 'きょう は たいちょう が わるい ので がっこう を やすみます。', romaji: 'Kyou wa taichou ga warui node gakkou o yasumimasu.', english: 'Today I don\'t feel well so I will be absent from school.', targetWord: '休みます', targetWordEnglish: 'Take a rest / Absent' },
    { id: 's-n5-休-2', sentence: '夏休みに沖縄へ旅行しました。', furigana: 'なつやすみ に おきなわ へ りょこう しました。', romaji: 'Natsuyasumi ni Okinawa e ryokou shimashita.', english: 'I traveled to Okinawa during summer vacation.', targetWord: '夏休み', targetWordEnglish: 'Summer vacation' }
  ],
  '入': [
    { id: 's-n5-入-1', sentence: '入口は建物の正面にあります。', furigana: 'いりぐち は たてもの の しょうめん に あります。', romaji: 'Iriguchi wa tatemono no shoumen ni arimasu.', english: 'The entrance is at the front of the building.', targetWord: '入口', targetWordEnglish: 'Entrance' },
    { id: 's-n5-入-2', sentence: '教室に入るときは「失礼します」と言います。', furigana: 'きょうしつ に はいる とき は 「しつれいします」 と いいます。', romaji: 'Kyoushitsu ni hairu toki wa "shitsurei shimasu" to iimasu.', english: 'When entering the classroom, I say "excuse me".', targetWord: '入る', targetWordEnglish: 'To enter' }
  ],
  '出': [
    { id: 's-n5-出-1', sentence: '駅の出口はどこですか？', furigana: 'えき の でぐち は どこ ですか？', romaji: 'Eki no deguchi wa doko desu ka?', english: 'Where is the station exit?', targetWord: '出口', targetWordEnglish: 'Exit' },
    { id: 's-n5-出-2', sentence: '朝早く家を出て電車に乗りました。', furigana: 'あさ はやく いえ を でて でんしゃ に のりました。', romaji: 'Asa hayaku ie o dete densha ni norimashita.', english: 'I left home early in the morning and took the train.', targetWord: '出て', targetWordEnglish: 'Left (a place)' }
  ],
  '立': [
    { id: 's-n5-立-1', sentence: '電車の中では静かに立っていました。', furigana: 'でんしゃ の なか で は しずか に たっていました。', romaji: 'Densha no naka dewa shizuka ni tatte imashita.', english: 'I was standing quietly inside the train.', targetWord: '立っていました', targetWordEnglish: 'Was standing' },
    { id: 's-n5-立-2', sentence: '役立つ日本語表現をたくさん勉強しました。', furigana: 'やくだつ にほんご ひょうげん を たくさん べんきょう しました。', romaji: 'Yakudatsu nihongo hyougen o takusan benkyou shimashita.', english: 'I studied many useful Japanese expressions.', targetWord: '役立つ', targetWordEnglish: 'Useful' }
  ],
  '待': [
    { id: 's-n5-待-1', sentence: 'バス停で友達を十五分待ちました。', furigana: 'バスてい で ともだち を じゅうごふん まちました。', romaji: 'Basutei de tomodachi o juugo fun machimashita.', english: 'I waited for my friend at the bus stop for 15 minutes.', targetWord: '待ちました', targetWordEnglish: 'Waited' },
    { id: 's-n5-待-2', sentence: '楽しい夏休みを楽しみに待っています。', furigana: 'たのしい なつやすみ を たのしみ に まっています。', romaji: 'Tanoshii natsuyasumi o tanoshimi ni matte imasu.', english: 'I am looking forward to the fun summer vacation.', targetWord: '待っています', targetWordEnglish: 'Waiting / Looking forward to' }
  ],
  '言': [
    { id: 's-n5-言-1', sentence: '先生に「ありがとうございます」と言いました。', furigana: 'せんせい に 「ありがとうございます」 と いいました。', romaji: 'Sensei ni "arigatou gozaimasu" to iimashita.', english: 'I said "thank you very much" to the teacher.', targetWord: '言いました', targetWordEnglish: 'Said' },
    { id: 's-n5-言-2', sentence: '言葉の意味が分からないときは辞書を引きます。', furigana: 'ことば の いみ が わからない とき は じしょ を ひきます。', romaji: 'Kotoba no imi ga wakaranai toki wa jisho o hikimasu.', english: 'When I don\'t understand the meaning of a word, I use the dictionary.', targetWord: '言葉', targetWordEnglish: 'Words / Language' }
  ],
  '思': [
    { id: 's-n5-思-1', sentence: '日本語は難しいと思いますが、楽しいです。', furigana: 'にほんご は むずかしい と おもいます が、たのしい です。', romaji: 'Nihongo wa muzukashii to omoimasu ga, tanoshii desu.', english: 'I think Japanese is difficult, but it is fun.', targetWord: '思います', targetWordEnglish: 'I think / I feel' },
    { id: 's-n5-思-2', sentence: '旅行中に故郷のことを思い出しました。', furigana: 'りょこうちゅう に こきょう の こと を おもいだしました。', romaji: 'Ryokouchuu ni kokyou no koto o omoidashimashita.', english: 'While traveling I recalled memories of my hometown.', targetWord: '思い出しました', targetWordEnglish: 'Recalled / Remembered' }
  ],
  '知': [
    { id: 's-n5-知-1', sentence: 'この近くに良いレストランを知っていますか？', furigana: 'この ちかく に よい レストラン を しって いますか？', romaji: 'Kono chikaku ni yoi resutoran o shitte imasu ka?', english: 'Do you know of a good restaurant near here?', targetWord: '知っていますか', targetWordEnglish: 'Do you know' },
    { id: 's-n5-知-2', sentence: '知らない言葉は辞書で調べます。', furigana: 'しらない ことば は じしょ で しらべます。', romaji: 'Shiranai kotoba wa jisho de shirabemasu.', english: 'I look up words I don\'t know in the dictionary.', targetWord: '知らない', targetWordEnglish: 'Don\'t know' }
  ],
  '持': [
    { id: 's-n5-持-1', sentence: '財布を忘れて来たので、お金を持っていません。', furigana: 'さいふ を わすれて きた ので、おかね を もっていません。', romaji: 'Saifu o wasurete kita node, okane o motte imasen.', english: 'I forgot my wallet, so I don\'t have any money.', targetWord: '持っていません', targetWordEnglish: 'Don\'t have / Not carrying' },
    { id: 's-n5-持-2', sentence: '荷物を一緒に持ってくれてありがとう。', furigana: 'にもつ を いっしょ に もってくれて ありがとう。', romaji: 'Nimotsu o issho ni motte kurete arigatou.', english: 'Thank you for carrying the luggage together with me.', targetWord: '持って', targetWordEnglish: 'Carrying / Holding' }
  ],
  '会': [
    { id: 's-n5-会-1', sentence: '昨日、偶然駅で旧友に会いました。', furigana: 'きのう、ぐうぜん えき で きゅうゆう に あいました。', romaji: 'Kinou, guuzen eki de kyuuyuu ni aimashita.', english: 'Yesterday, I unexpectedly met an old friend at the station.', targetWord: '会いました', targetWordEnglish: 'Met' },
    { id: 's-n5-会-2', sentence: '月曜日の朝に大事な会議があります。', furigana: 'げつようび の あさ に だいじ な かいぎ が あります。', romaji: 'Getsuyoubi no asa ni daiji na kaigi ga arimasu.', english: 'There is an important meeting on Monday morning.', targetWord: '会議', targetWordEnglish: 'Meeting' }
  ],
  '社': [
    { id: 's-n5-社-1', sentence: '毎朝九時に会社に到着します。', furigana: 'まいあさ くじ に かいしゃ に とうちゃく します。', romaji: 'Maiasa kuji ni kaisha ni touchaku shimasu.', english: 'I arrive at the company at 9:00 every morning.', targetWord: '会社', targetWordEnglish: 'Company' },
    { id: 's-n5-社-2', sentence: '神社に行って新年のお参りをしました。', furigana: 'じんじゃ に いって しんねん の おまいり を しました。', romaji: 'Jinja ni itte shinnen no omairi o shimashita.', english: 'I went to the shrine to pray for the New Year.', targetWord: '神社', targetWordEnglish: 'Shrine' }
  ],
  '店': [
    { id: 's-n5-店-1', sentence: 'コンビニの店員さんはいつも親切です。', furigana: 'コンビニ の てんいん さん は いつも しんせつ です。', romaji: 'Konbini no ten\'in san wa itsumo shinsetsu desu.', english: 'The convenience store staff are always kind.', targetWord: '店員', targetWordEnglish: 'Store staff' },
    { id: 's-n5-店-2', sentence: 'あの本屋さんはどんな本も置いています。', furigana: 'あの ほんや さん は どんな ほん も おいています。', romaji: 'Ano hon\'yasan wa donna hon mo oite imasu.', english: 'That bookstore carries all kinds of books.', targetWord: '本屋', targetWordEnglish: 'Bookstore' }
  ],
  '駅': [
    { id: 's-n5-駅-1', sentence: '駅の近くに新しいカフェができました。', furigana: 'えき の ちかく に あたらしい カフェ が できました。', romaji: 'Eki no chikaku ni atarashii kafe ga dekimashita.', english: 'A new cafe opened near the station.', targetWord: '駅', targetWordEnglish: 'Station' },
    { id: 's-n5-駅-2', sentence: '終電に乗り遅れないように急いで駅に向かいました。', furigana: 'しゅうでん に のりおくれないように いそいで えき に むかいました。', romaji: 'Shuuden ni noriokurenai you ni isoide eki ni mukaimashita.', english: 'I hurried to the station so I wouldn\'t miss the last train.', targetWord: '駅に', targetWordEnglish: 'To the station' }
  ],
  '車': [
    { id: 's-n5-車-1', sentence: '電車は車より環境に優しい乗り物です。', furigana: 'でんしゃ は くるま より かんきょう に やさしい のりもの です。', romaji: 'Densha wa kuruma yori kankyou ni yasashii norimono desu.', english: 'Trains are a more eco-friendly vehicle than cars.', targetWord: '電車', targetWordEnglish: 'Train' },
    { id: 's-n5-車-2', sentence: '駐車場に車を停めてから買い物をしました。', furigana: 'ちゅうしゃじょう に くるま を とめてから かいもの を しました。', romaji: 'Chuushajou ni kuruma o tomete kara kaimono o shimashita.', english: 'I parked the car in the parking lot then did shopping.', targetWord: '車', targetWordEnglish: 'Car' }
  ],
  '電': [
    { id: 's-n5-電-1', sentence: 'スマホの電池が切れそうなので充電します。', furigana: 'スマホ の でんち が きれそう な ので じゅうでん します。', romaji: 'Sumaho no denchi ga kiresou nanode juuden shimasu.', english: 'My smartphone battery is about to die so I will charge it.', targetWord: '電池', targetWordEnglish: 'Battery' },
    { id: 's-n5-電-2', sentence: '電気を消してから部屋を出てください。', furigana: 'でんき を けしてから へや を でてください。', romaji: 'Denki o keshite kara heya o dete kudasai.', english: 'Please turn off the lights before leaving the room.', targetWord: '電気', targetWordEnglish: 'Electricity / Lights' }
  ],
  '道': [
    { id: 's-n5-道-1', sentence: '公園の中に歩道があってとても気持ちいいです。', furigana: 'こうえん の なか に ほどう が あってとても きもちいい です。', romaji: 'Kouen no naka ni hodou ga atte totemo kimochi ii desu.', english: 'There is a walkway in the park and it feels very nice.', targetWord: '歩道', targetWordEnglish: 'Walkway / Footpath' },
    { id: 's-n5-道-2', sentence: '道に迷ったので地図を見ました。', furigana: 'みち に まよった ので ちず を みました。', romaji: 'Michi ni mayotta node chizu o mimashita.', english: 'I got lost so I looked at a map.', targetWord: '道', targetWordEnglish: 'Road / Way' }
  ],
  '手': [
    { id: 's-n5-手-1', sentence: '友達に手紙を書いて送りました。', furigana: 'ともだち に てがみ を かいて おくりました。', romaji: 'Tomodachi ni tegami o kaite okurimashita.', english: 'I wrote a letter and sent it to a friend.', targetWord: '手紙', targetWordEnglish: 'Letter' },
    { id: 's-n5-手-2', sentence: '食事の前に必ず手を洗います。', furigana: 'しょくじ の まえ に かならず て を あらいます。', romaji: 'Shokuji no mae ni kanarazu te o araimasu.', english: 'I always wash my hands before meals.', targetWord: '手', targetWordEnglish: 'Hand' }
  ],
  '足': [
    { id: 's-n5-足-1', sentence: '新しい靴を買ったので足が痛くなりました。', furigana: 'あたらしい くつ を かった ので あし が いたく なりました。', romaji: 'Atarashii kutsu o katta node ashi ga itaku narimashita.', english: 'I bought new shoes and my feet became sore.', targetWord: '足', targetWordEnglish: 'Foot / Leg' },
    { id: 's-n5-足-2', sentence: '電車に乗り足りないお金は電子マネーで払います。', furigana: 'でんしゃ に のり たりない おかね は でんしマネー で はらいます。', romaji: 'Densha ni nori tarinai okane wa denshi manee de haraimasu.', english: 'I pay the remaining train fare with electronic money.', targetWord: '足りない', targetWordEnglish: 'Not enough / Insufficient' }
  ],
  '目': [
    { id: 's-n5-目-1', sentence: '目が痛いのでコンタクトを外しました。', furigana: 'め が いたいので コンタクト を はずしました。', romaji: 'Me ga itai node kontakuto o hazushimashita.', english: 'My eyes hurt so I took out my contacts.', targetWord: '目', targetWordEnglish: 'Eye' },
    { id: 's-n5-目-2', sentence: '目標を達成するために毎日練習します。', furigana: 'もくひょう を たっせい する ために まいにち れんしゅう します。', romaji: 'Mokuhyou o tassei suru tame ni mainichi renshuu shimasu.', english: 'I practice every day in order to achieve my goals.', targetWord: '目標', targetWordEnglish: 'Goal / Target' }
  ],
  '耳': [
    { id: 's-n5-耳-1', sentence: '耳が聞こえにくいので大きな声で話してください。', furigana: 'みみ が きこえにくい ので おおきな こえ で はなしてください。', romaji: 'Mimi ga kikoenikui node ookina koe de hanashite kudasai.', english: 'My hearing is not good so please speak loudly.', targetWord: '耳', targetWordEnglish: 'Ear' },
    { id: 's-n5-耳-2', sentence: '音楽を耳で楽しむのが好きです。', furigana: 'おんがく を みみ で たのしむ のが すき です。', romaji: 'Ongaku o mimi de tanoshimu noga suki desu.', english: 'I like enjoying music with my ears.', targetWord: '耳で', targetWordEnglish: 'With my ears' }
  ],
  '口': [
    { id: 's-n5-口-1', sentence: '口を大きく開けて歯医者さんに診てもらいました。', furigana: 'くち を おおきく あけて はいしゃ さん に みてもらいました。', romaji: 'Kuchi o ookiku akete haisha san ni mite moraimashita.', english: 'I opened my mouth wide and had the dentist examine me.', targetWord: '口', targetWordEnglish: 'Mouth' },
    { id: 's-n5-口-2', sentence: '入り口に大きな看板がありました。', furigana: 'いりぐち に おおきな かんばん が ありました。', romaji: 'Iriguchi ni ookina kanban ga arimashita.', english: 'There was a large sign at the entrance.', targetWord: '入り口', targetWordEnglish: 'Entrance' }
  ],
};

// Export full compiled list of all 103 JLPT N5 Kanji
export const KANJI_N5_LIST: KanjiDetailItem[] = N5_RAW_DEFINITIONS.map((def, idx) => ({
  id: `k-n5-${idx + 1}`,
  char: def.char,
  meaning: def.meaning,
  onyomi: def.onyomi,
  kunyomi: def.kunyomi,
  strokes: def.strokes,
  jlpt: 'N5',
  radical: def.radical,
  mnemonic: def.mnemonic,
  sentences: N5_SENTENCES[def.char] ?? [
    {
      id: `s-n5-${def.char}-1`,
      sentence: `${def.primaryWord}を使った例文です。`,
      furigana: `${def.primaryReading} を つかった れいぶん です。`,
      romaji: `"${def.primaryWord}" wa yoku tsukawareru kotoba desu.`,
      english: `"${def.primaryWord}" (${def.meaning}) is a commonly used word.`,
      targetWord: def.primaryWord,
      targetWordEnglish: def.meaning
    },
    {
      id: `s-n5-${def.char}-2`,
      sentence: `日本語で${def.primaryWord}の意味を覚えましょう。`,
      furigana: `にほんご で ${def.primaryReading} の いみ を おぼえましょう。`,
      romaji: `Nihongo de "${def.primaryWord}" no imi o obe mashou.`,
      english: `Let's remember the meaning of "${def.primaryWord}" in Japanese.`,
      targetWord: def.primaryWord,
      targetWordEnglish: def.primaryReading
    }
  ]
}));

export function getKanjiN5(char: string): KanjiDetailItem | undefined {
  return KANJI_N5_LIST.find(k => k.char === char);
}
