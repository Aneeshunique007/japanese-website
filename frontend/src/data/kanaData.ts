export interface KanaChar {
  char: string;
  romaji: string;
  example?: string;
  strokeCount?: number;
  script?: 'Hiragana' | 'Katakana';
  category?: 'basic' | 'dakuten' | 'yoon';
}

export interface KanaGroup {
  basic: KanaChar[];
  dakuten: KanaChar[];
  yoon: KanaChar[];
}

export const HIRAGANA_DATA: KanaGroup = {
  basic: [
    // Vowels
    { char: 'あ', romaji: 'a', example: 'あさ (asa - morning)', strokeCount: 3 },
    { char: 'い', romaji: 'i', example: 'いぬ (inu - dog)', strokeCount: 2 },
    { char: 'う', romaji: 'u', example: 'うみ (umi - sea)', strokeCount: 2 },
    { char: 'え', romaji: 'e', example: 'えき (eki - station)', strokeCount: 2 },
    { char: 'お', romaji: 'o', example: 'お茶 (ocha - tea)', strokeCount: 3 },

    // K-row
    { char: 'か', romaji: 'ka', example: 'かさ (kasa - umbrella)', strokeCount: 3 },
    { char: 'き', romaji: 'ki', example: 'き (ki - tree)', strokeCount: 4 },
    { char: 'く', romaji: 'ku', example: 'くるま (kuruma - car)', strokeCount: 1 },
    { char: 'け', romaji: 'ke', example: 'けむり (kemuri - smoke)', strokeCount: 3 },
    { char: 'こ', romaji: 'ko', example: 'こども (kodomo - child)', strokeCount: 2 },

    // S-row
    { char: 'さ', romaji: 'sa', example: 'さくら (sakura - cherry blossom)', strokeCount: 3 },
    { char: 'し', romaji: 'shi', example: 'しろ (shiro - white/castle)', strokeCount: 1 },
    { char: 'す', romaji: 'su', example: 'すし (sushi)', strokeCount: 2 },
    { char: 'せ', romaji: 'se', example: 'せんせい (sensei - teacher)', strokeCount: 3 },
    { char: 'そ', romaji: 'so', example: 'そら (sora - sky)', strokeCount: 1 },

    // T-row
    { char: 'た', romaji: 'ta', example: 'たべる (taberu - to eat)', strokeCount: 4 },
    { char: 'ち', romaji: 'chi', example: 'ちず (chizu - map)', strokeCount: 2 },
    { char: 'つ', romaji: 'tsu', example: 'つき (tsuki - moon)', strokeCount: 1 },
    { char: 'て', romaji: 'te', example: 'て (te - hand)', strokeCount: 1 },
    { char: 'と', romaji: 'to', example: 'ともだち (tomodachi - friend)', strokeCount: 2 },

    // N-row
    { char: 'な', romaji: 'na', example: 'なつ (natsu - summer)', strokeCount: 4 },
    { char: 'に', romaji: 'ni', example: 'にほん (nihon - Japan)', strokeCount: 3 },
    { char: 'ぬ', romaji: 'nu', example: 'ぬいぐるみ (nuigurumi - plushie)', strokeCount: 2 },
    { char: 'ね', romaji: 'ne', example: 'ねこ (neko - cat)', strokeCount: 2 },
    { char: 'の', romaji: 'no', example: 'のみもの (nomimono - drink)', strokeCount: 1 },

    // H-row
    { char: 'は', romaji: 'ha', example: 'はな (hana - flower/nose)', strokeCount: 3 },
    { char: 'ひ', romaji: 'hi', example: 'ひと (hito - person)', strokeCount: 1 },
    { char: 'ふ', romaji: 'fu', example: 'ふじさん (fujisan - Mt. Fuji)', strokeCount: 4 },
    { char: 'へ', romaji: 'he', example: 'へや (heya - room)', strokeCount: 1 },
    { char: 'ほ', romaji: 'ho', example: 'ほし (hoshi - star)', strokeCount: 4 },

    // M-row
    { char: 'ま', romaji: 'ma', example: 'まち (machi - town)', strokeCount: 3 },
    { char: 'み', romaji: 'mi', example: 'みず (mizu - water)', strokeCount: 2 },
    { char: 'む', romaji: 'mu', example: 'むし (mushi - insect)', strokeCount: 3 },
    { char: 'め', romaji: 'me', example: 'め (me - eye)', strokeCount: 2 },
    { char: 'も', romaji: 'mo', example: 'もり (mori - forest)', strokeCount: 3 },

    // Y-row
    { char: 'や', romaji: 'ya', example: 'やま (yama - mountain)', strokeCount: 3 },
    { char: 'ゆ', romaji: 'yu', example: 'ゆき (yuki - snow)', strokeCount: 2 },
    { char: 'よ', romaji: 'yo', example: 'よる (yoru - night)', strokeCount: 2 },

    // R-row
    { char: 'ら', romaji: 'ra', example: 'らいおん (raion - lion)', strokeCount: 2 },
    { char: 'り', romaji: 'ri', example: 'りんご (ringo - apple)', strokeCount: 2 },
    { char: 'る', romaji: 'ru', example: 'るす (rusu - away from home)', strokeCount: 1 },
    { char: 'れ', romaji: 're', example: 'れもん (remon - lemon)', strokeCount: 2 },
    { char: 'ろ', romaji: 'ro', example: 'ろうそく (rousoku - candle)', strokeCount: 1 },

    // W-row & N
    { char: 'わ', romaji: 'wa', example: 'わたし (watashi - I / me)', strokeCount: 2 },
    { char: 'を', romaji: 'wo', example: '本を読む (hon o yomu)', strokeCount: 3 },
    { char: 'ん', romaji: 'n', example: 'ほん (hon - book)', strokeCount: 1 },
  ],
  dakuten: [
    { char: 'が', romaji: 'ga', example: 'がっこう (gakkou - school)' },
    { char: 'ぎ', romaji: 'gi', example: 'ぎんこう (ginkou - bank)' },
    { char: 'ぐ', romaji: 'gu', example: 'ぐんま (gunma)' },
    { char: 'げ', romaji: 'ge', example: 'げんき (genki - healthy/lively)' },
    { char: 'ご', romaji: 'go', example: 'ごはん (gohan - rice/meal)' },
    { char: 'ざ', romaji: 'za', example: 'ざっし (zasshi - magazine)' },
    { char: 'じ', romaji: 'ji', example: 'じかん (jikan - time)' },
    { char: 'ず', romaji: 'zu', example: 'ずっと (zutto - always)' },
    { char: 'ぜ', romaji: 'ze', example: 'ぜんぶ (zenbu - all)' },
    { char: 'ぞ', romaji: 'zo', example: 'ぞう (zou - elephant)' },
    { char: 'だ', romaji: 'da', example: 'だいがく (daigaku - university)' },
    { char: 'ぢ', romaji: 'dji (ji)', example: 'はなぢ (hanaji - nosebleed)' },
    { char: 'づ', romaji: 'dzu (zu)', example: 'つづく (tsuzuku - to continue)' },
    { char: 'で', romaji: 'de', example: 'でんしゃ (densha - train)' },
    { char: 'ど', romaji: 'do', example: 'どこ (doko - where)' },
    { char: 'ば', romaji: 'ba', example: 'ばしょ (basho - place)' },
    { char: 'び', romaji: 'bi', example: 'びょういん (byouin - hospital)' },
    { char: 'ぶ', romaji: 'bu', example: 'ぶた (buta - pig)' },
    { char: 'べ', romaji: 'be', example: 'べんきょう (benkyou - study)' },
    { char: 'ぼ', romaji: 'bo', example: 'ぼうし (boushi - hat)' },
    { char: 'ぱ', romaji: 'pa', example: 'ぱん (pan - bread)' },
    { char: 'ぴ', romaji: 'pi', example: 'ぴかぴか (pikapika - shiny)' },
    { char: 'ぷ', romaji: 'pu', example: 'ぷりん (purin - pudding)' },
    { char: 'ぺ', romaji: 'pe', example: 'ぺん (pen)' },
    { char: 'ぽ', romaji: 'po', example: 'ぽけっと (poketto - pocket)' },
  ],
  yoon: [
    { char: 'きゃ', romaji: 'kya', example: 'きゃく (kyaku - guest)' },
    { char: 'きゅ', romaji: 'kyu', example: 'きゅう (kyuu - nine)' },
    { char: 'きょ', romaji: 'kyo', example: 'きょう (kyou - today)' },
    { char: 'しゃ', romaji: 'sha', example: 'しゃしん (shashin - photo)' },
    { char: 'しゅ', romaji: 'shu', example: 'しゅくだい (shukudai - homework)' },
    { char: 'しょ', romaji: 'sho', example: 'しょうゆ (shouyu - soy sauce)' },
    { char: 'ちゃ', romaji: 'cha', example: 'おちゃ (ocha - green tea)' },
    { char: 'ちゅ', romaji: 'chu', example: 'ちゅうごく (chuugoku - China)' },
    { char: 'ちょ', romaji: 'cho', example: 'ちょっと (chotto - a little)' },
    { char: 'にゃ', romaji: 'nya', example: 'にゃんこ (nyanko - kitty)' },
    { char: 'ひゃ', romaji: 'hya', example: 'ひゃく (hyaku - hundred)' },
    { char: 'みゃ', romaji: 'mya', example: 'みゃく (myaku - pulse)' },
    { char: 'りょ', romaji: 'ryo', example: 'りょこう (ryokou - travel)' },
  ],
};

export const KATAKANA_DATA: KanaGroup = {
  basic: [
    // Vowels
    { char: 'ア', romaji: 'a', example: 'アイス (aisu - ice cream)', strokeCount: 2 },
    { char: 'イ', romaji: 'i', example: 'イギリス (igirisu - UK)', strokeCount: 2 },
    { char: 'ウ', romaji: 'u', example: 'ウェブ (webu - web)', strokeCount: 3 },
    { char: 'エ', romaji: 'e', example: 'エレベーター (erebeetaa)', strokeCount: 3 },
    { char: 'オ', romaji: 'o', example: 'オレンジ (orenji - orange)', strokeCount: 3 },

    // K-row
    { char: 'カ', romaji: 'ka', example: 'カメラ (kamera - camera)', strokeCount: 2 },
    { char: 'キ', romaji: 'ki', example: 'キッチン (kicchin - kitchen)', strokeCount: 3 },
    { char: 'ク', romaji: 'ku', example: 'クラス (kurasu - class)', strokeCount: 2 },
    { char: 'ケ', romaji: 'ke', example: 'ケーキ (keeki - cake)', strokeCount: 3 },
    { char: 'コ', romaji: 'ko', example: 'コーヒー (koohii - coffee)', strokeCount: 2 },

    // S-row
    { char: 'サ', romaji: 'sa', example: 'サラダ (sarada - salad)', strokeCount: 3 },
    { char: 'シ', romaji: 'shi', example: 'シャツ (shatsu - shirt)', strokeCount: 3 },
    { char: 'ス', romaji: 'su', example: 'スポーツ (supootsu - sports)', strokeCount: 2 },
    { char: 'セ', romaji: 'se', example: 'セーター (seetaa - sweater)', strokeCount: 2 },
    { char: 'ソ', romaji: 'so', example: 'ソファ (sofa - couch)', strokeCount: 2 },

    // T-row
    { char: 'タ', romaji: 'ta', example: 'タクシー (takushii - taxi)', strokeCount: 3 },
    { char: 'チ', romaji: 'chi', example: 'チーズ (chiizu - cheese)', strokeCount: 3 },
    { char: 'ツ', romaji: 'tsu', example: 'ツアー (tsuaa - tour)', strokeCount: 3 },
    { char: 'テ', romaji: 'te', example: 'テレビ (terebi - TV)', strokeCount: 3 },
    { char: 'ト', romaji: 'to', example: 'トマト (tomato - tomato)', strokeCount: 2 },

    // N-row
    { char: 'ナ', romaji: 'na', example: 'ナイフ (naifu - knife)', strokeCount: 2 },
    { char: 'ニ', romaji: 'ni', example: 'ニュース (nyuusu - news)', strokeCount: 2 },
    { char: 'ヌ', romaji: 'nu', example: 'ヌードル (nuudoru - noodle)', strokeCount: 2 },
    { char: 'ネ', romaji: 'ne', example: 'ネクタイ (nekutai - necktie)', strokeCount: 4 },
    { char: 'ノ', romaji: 'no', example: 'ノート (nooto - notebook)', strokeCount: 1 },

    // H-row
    { char: 'ハ', romaji: 'ha', example: 'ハンバーガー (hanbaagaa)', strokeCount: 2 },
    { char: 'ヒ', romaji: 'hi', example: 'ヒーター (hiitaa - heater)', strokeCount: 2 },
    { char: 'フ', romaji: 'fu', example: 'フォーク (fooku - fork)', strokeCount: 1 },
    { char: 'ヘ', romaji: 'he', example: 'ヘルメット (herumetto)', strokeCount: 1 },
    { char: 'ホ', romaji: 'ho', example: 'ホテル (hoteru - hotel)', strokeCount: 4 },

    // M-row
    { char: 'マ', romaji: 'ma', example: 'マスク (masuku - mask)', strokeCount: 2 },
    { char: 'ミ', romaji: 'mi', example: 'ミルク (miruku - milk)', strokeCount: 3 },
    { char: 'ム', romaji: 'mu', example: 'ムービー (muubii - movie)', strokeCount: 2 },
    { char: 'メ', romaji: 'me', example: 'メニュー (menyuu - menu)', strokeCount: 2 },
    { char: 'モ', romaji: 'mo', example: 'モデル (moderu - model)', strokeCount: 3 },

    // Y-row
    { char: 'ヤ', romaji: 'ya', example: 'ヤシ (yashi - palm tree)', strokeCount: 2 },
    { char: 'ユ', romaji: 'yu', example: 'ユニフォーム (yunifoomu)', strokeCount: 2 },
    { char: 'ヨ', romaji: 'yo', example: 'ヨーグルト (yooguruto)', strokeCount: 3 },

    // R-row
    { char: 'ラ', romaji: 'ra', example: 'ラジオ (rajio - radio)', strokeCount: 2 },
    { char: 'リ', romaji: 'ri', example: 'リモコン (rimokon - remote)', strokeCount: 2 },
    { char: 'ル', romaji: 'ru', example: 'ルール (ruuru - rule)', strokeCount: 2 },
    { char: 'レ', romaji: 're', example: 'レストラン (resutoran)', strokeCount: 1 },
    { char: 'ロ', romaji: 'ro', example: 'ロボット (robotto - robot)', strokeCount: 3 },

    // W-row & N
    { char: 'ワ', romaji: 'wa', example: 'ワイン (wain - wine)', strokeCount: 2 },
    { char: 'ヲ', romaji: 'wo', example: 'ヲ', strokeCount: 3 },
    { char: 'ン', romaji: 'n', example: 'パン (pan - bread)', strokeCount: 2 },
  ],
  dakuten: [
    { char: 'ガ', romaji: 'ga', example: 'ガム (gamu - gum)' },
    { char: 'ギ', romaji: 'gi', example: 'ギター (gitaa - guitar)' },
    { char: 'グ', romaji: 'gu', example: 'グラス (gurasu - glass)' },
    { char: 'ゲ', romaji: 'ge', example: 'ゲーム (geemu - game)' },
    { char: 'ゴ', romaji: 'go', example: 'ゴルフ (gorufu - golf)' },
    { char: 'ザ', romaji: 'za', example: 'デザイン (dezain - design)' },
    { char: 'ジ', romaji: 'ji', example: 'ジュース (juusu - juice)' },
    { char: 'ズ', romaji: 'zu', example: 'ズボン (zubon - pants)' },
    { char: 'ゼ', romaji: 'ze', example: 'ゼロ (zero)' },
    { char: 'ゾ', romaji: 'zo', example: 'ゾーン (zoon - zone)' },
    { char: 'ダ', romaji: 'da', example: 'ダンス (dansu - dance)' },
    { char: 'ヂ', romaji: 'dji (ji)', example: 'ラジオヂャケット' },
    { char: 'ヅ', romaji: 'dzu (zu)', example: 'ヅ' },
    { char: 'デ', romaji: 'de', example: 'デザート (dezaato - dessert)' },
    { char: 'ド', romaji: 'do', example: 'ドア (doa - door)' },
    { char: 'バ', romaji: 'ba', example: 'バス (basu - bus)' },
    { char: 'ビ', romaji: 'bi', example: 'ビル (biru - building)' },
    { char: 'ブ', romaji: 'bu', example: 'ブーツ (buutsu - boots)' },
    { char: 'ベ', romaji: 'be', example: 'ベッド (beddo - bed)' },
    { char: 'ボ', romaji: 'bo', example: 'ボタン (botan - button)' },
    { char: 'パ', romaji: 'pa', example: 'パーティー (paatii - party)' },
    { char: 'ピ', romaji: 'pi', example: 'ピアノ (piano)' },
    { char: 'プ', romaji: 'pu', example: 'プール (puuru - pool)' },
    { char: 'ペ', romaji: 'pe', example: 'ペンギン (pengin - penguin)' },
    { char: 'ポ', romaji: 'po', example: 'ポスト (posuto - mailbox)' },
  ],
  yoon: [
    { char: 'キャ', romaji: 'kya', example: 'キャンプ (kyanpu - camp)' },
    { char: 'キュ', romaji: 'kyu', example: 'キューブ (kyuubu - cube)' },
    { char: 'キョ', romaji: 'kyo', example: 'キロ (kiro)' },
    { char: 'シャ', romaji: 'sha', example: 'シャワー (shawaa - shower)' },
    { char: 'シュ', romaji: 'shu', example: 'シュークリーム (creampuff)' },
    { char: 'ショ', romaji: 'sho', example: 'ショップ (shoppu - shop)' },
    { char: 'チャ', romaji: 'cha', example: 'チャット (chatto - chat)' },
    { char: 'チュ', romaji: 'chu', example: 'チューリップ (tulip)' },
    { char: 'チョ', romaji: 'cho', example: 'チョコレート (chocolate)' },
  ]
};
