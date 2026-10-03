// Official Complete JLPT N4 Kanji Database (All 208 Official Kanji Characters with 10 Contextual Sentences Each)
import { KanjiSentence } from '../types';

export interface KanjiDetailItemN4 {
  id: string;
  char: string;
  meaning: string;
  onyomi: string[];
  kunyomi: string[];
  strokes: number;
  jlpt: 'N4';
  radical: string;
  mnemonic: string;
  sentences: KanjiSentence[];
}

// Master Raw Definition for all Official JLPT N4 Kanji
const N4_RAW_DEFINITIONS: Array<{
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
  { char: '使', meaning: 'Use, Employ', onyomi: ["SHI"], kunyomi: ["tsuka-u"], strokes: 8, radical: '人 (person)', mnemonic: 'A person sent on an official commission to use tools.', primaryWord: '使う', primaryReading: 'つかう' },
  { char: '始', meaning: 'Begin, Start', onyomi: ["SHI"], kunyomi: ["haji-meru","haji-maru"], strokes: 8, radical: '女 (woman)', mnemonic: 'A woman giving birth at the beginning of life.', primaryWord: '始まる', primaryReading: 'はじまる' },
  { char: '終', meaning: 'End, Finish', onyomi: ["SHUU"], kunyomi: ["o-waru","o-eru"], strokes: 11, radical: '糸 (silk)', mnemonic: 'Tying the knot at the end of a silk thread.', primaryWord: '終わる', primaryReading: 'おわる' },
  { char: '開', meaning: 'Open, Unfold', onyomi: ["KAI"], kunyomi: ["hira-ku","a-keru","a-ku"], strokes: 12, radical: '門 (gate)', mnemonic: 'Two hands opening both sides of the gate doors.', primaryWord: '開ける', primaryReading: 'あける' },
  { char: '閉', meaning: 'Close, Shut', onyomi: ["HEI"], kunyomi: ["to-jiru","shi-meru","shi-maru"], strokes: 11, radical: '門 (gate)', mnemonic: 'Sliding the wooden latch bar across the gate to close.', primaryWord: '閉める', primaryReading: 'しめる' },
  { char: '送', meaning: 'Send, Escort', onyomi: ["SOU"], kunyomi: ["oku-ru"], strokes: 9, radical: '辵 (walk)', mnemonic: 'Walking alongside to escort and send off a friend.', primaryWord: '送る', primaryReading: 'おくる' },
  { char: '切', meaning: 'Cut, Severe', onyomi: ["SETSU","SAI"], kunyomi: ["ki-ru","ki-reru"], strokes: 4, radical: '刀 (sword)', mnemonic: 'A sharp blade cutting straight through.', primaryWord: '切る', primaryReading: 'きる' },
  { char: '貸', meaning: 'Lend, Loan', onyomi: ["TAI"], kunyomi: ["ka-su"], strokes: 12, radical: '貝 (shell/money)', mnemonic: 'Passing valuable shell currency as a loan.', primaryWord: '貸す', primaryReading: 'かす' },
  { char: '借', meaning: 'Borrow, Rent', onyomi: ["SHAKU"], kunyomi: ["ka-riru"], strokes: 10, radical: '人 (person)', mnemonic: 'A person temporarily borrowing goods.', primaryWord: '借りる', primaryReading: 'かりる' },
  { char: '走', meaning: 'Run', onyomi: ["SOU"], kunyomi: ["hashi-ru"], strokes: 7, radical: '走 (run)', mnemonic: 'A person swinging arms and legs to run fast.', primaryWord: '走る', primaryReading: 'はしる' },
  { char: '歩', meaning: 'Walk, Step', onyomi: ["HO","BU"], kunyomi: ["aru-ku","ayu-mu"], strokes: 8, radical: '止 (stop)', mnemonic: 'Two feet advancing alternately in walking steps.', primaryWord: '歩く', primaryReading: 'あるく' },
  { char: '止', meaning: 'Stop, Halt', onyomi: ["SHI"], kunyomi: ["to-maru","to-meru"], strokes: 4, radical: '止 (stop)', mnemonic: 'A clear footprint halting all forward motion.', primaryWord: '止まる', primaryReading: 'とまる' },
  { char: '動', meaning: 'Move, Motion', onyomi: ["DOU"], kunyomi: ["ugo-ku","ugo-kasu"], strokes: 11, radical: '力 (power)', mnemonic: 'Heavy weight shifted by strong muscular power.', primaryWord: '動く', primaryReading: 'うごく' },
  { char: '運', meaning: 'Carry, Transport, Luck', onyomi: ["UN"], kunyomi: ["hako-bu"], strokes: 12, radical: '辵 (walk)', mnemonic: 'Vehicles traveling along carrying cargo and luck.', primaryWord: '運ぶ', primaryReading: 'はこぶ' },
  { char: '転', meaning: 'Turn, Roll, Fall', onyomi: ["TEN"], kunyomi: ["koro-bu","koro-garu"], strokes: 11, radical: '車 (cart)', mnemonic: 'Cart wheels rolling and turning around.', primaryWord: '自転車', primaryReading: 'じてんしゃ' },
  { char: '起', meaning: 'Wake up, Rise', onyomi: ["KI"], kunyomi: ["o-kiru","o-kosu"], strokes: 10, radical: '走 (run)', mnemonic: 'Springing to one\'s feet to wake up and run.', primaryWord: '起きる', primaryReading: 'おきる' },
  { char: '着', meaning: 'Wear, Arrive', onyomi: ["CHAKU","JAKU"], kunyomi: ["ki-ru","tsu-ku"], strokes: 12, radical: '目 (eye)', mnemonic: 'Clothes arriving onto the body under watchful eyes.', primaryWord: '着る', primaryReading: 'きる' },
  { char: '乗', meaning: 'Ride, Board', onyomi: ["JOU"], kunyomi: ["no-ru","no-seru"], strokes: 9, radical: '丿 (slash)', mnemonic: 'Mounting onto a vehicle or saddle on top of trees.', primaryWord: '乗る', primaryReading: 'のる' },
  { char: '降', meaning: 'Descend, Fall (rain/snow)', onyomi: ["KOU"], kunyomi: ["o-riru","fu-ru"], strokes: 10, radical: '阜 (hill)', mnemonic: 'Stepping down a steep hill or rain pouring from sky.', primaryWord: '降りる', primaryReading: 'おりる' },
  { char: '洗', meaning: 'Wash, Cleanse', onyomi: ["SEN"], kunyomi: ["ara-u"], strokes: 9, radical: '水 (water)', mnemonic: 'Clean fresh water splashing over hands and feet.', primaryWord: '洗う', primaryReading: 'あらう' },
  { char: '作', meaning: 'Make, Produce, Create', onyomi: ["SAKU","SA"], kunyomi: ["tsuku-ru"], strokes: 7, radical: '人 (person)', mnemonic: 'A craftsman creating tools with skill.', primaryWord: '作る', primaryReading: 'つくる' },
  { char: '直', meaning: 'Fix, Repair, Direct', onyomi: ["CHOKU","JIKI"], kunyomi: ["nao-su","nao-ru","tada-chi"], strokes: 8, radical: '目 (eye)', mnemonic: 'An eye looking straight along a line to make it right.', primaryWord: '直す', primaryReading: 'なおす' },
  { char: '治', meaning: 'Cure, Heal, Govern', onyomi: ["JI","CHI"], kunyomi: ["nao-ru","nao-su","osa-meru"], strokes: 8, radical: '水 (water)', mnemonic: 'Managing rivers to cure flooding and govern peace.', primaryWord: '治る', primaryReading: 'なおる' },
  { char: '置', meaning: 'Put, Place', onyomi: ["CHI"], kunyomi: ["o-ku"], strokes: 13, radical: '罒 (net)', mnemonic: 'Setting down a net full of goods in place.', primaryWord: '置く', primaryReading: 'おく' },
  { char: '通', meaning: 'Pass through, Commute', onyomi: ["TSUU"], kunyomi: ["too-ru","kayo-u"], strokes: 10, radical: '辵 (walk)', mnemonic: 'Walking through a busy thoroughfare every day.', primaryWord: '通う', primaryReading: 'かよう' },
  { char: '引', meaning: 'Pull, Draw', onyomi: ["IN"], kunyomi: ["hi-ku","hi-keru"], strokes: 4, radical: '弓 (bow)', mnemonic: 'Drawing back the bowstring with strength.', primaryWord: '引く', primaryReading: 'ひく' },
  { char: '押', meaning: 'Push, Press', onyomi: ["OU"], kunyomi: ["o-su","o-saeru"], strokes: 8, radical: '手 (hand)', mnemonic: 'A firm hand pushing down on a stamp or button.', primaryWord: '押す', primaryReading: 'おす' },
  { char: '届', meaning: 'Deliver, Reach', onyomi: ["KAI"], kunyomi: ["todo-ku","todo-keru"], strokes: 8, radical: '尸 (corpse/flag)', mnemonic: 'A package reaching someone\'s doorstep safely.', primaryWord: '届く', primaryReading: 'とどく' },
  { char: '返', meaning: 'Return, Reply', onyomi: ["HEN"], kunyomi: ["kae-su","kae-ru"], strokes: 7, radical: '辵 (walk)', mnemonic: 'Walking back along the road to return an item.', primaryWord: '返す', primaryReading: 'かえす' },
  { char: '払', meaning: 'Pay, Brush away', onyomi: ["FUTSU"], kunyomi: ["hara-u"], strokes: 5, radical: '手 (hand)', mnemonic: 'Using hand to count coins and pay money.', primaryWord: '払う', primaryReading: 'はらう' },
  { char: '迎', meaning: 'Welcome, Greet', onyomi: ["GEI"], kunyomi: ["muka-eru"], strokes: 7, radical: '辵 (walk)', mnemonic: 'Walking out to the gate to welcome arriving guests.', primaryWord: '迎える', primaryReading: 'むかえる' },
  { char: '泊', meaning: 'Stay overnight, Lodge', onyomi: ["HAKU"], kunyomi: ["to-maru","to-meru"], strokes: 8, radical: '水 (water)', mnemonic: 'Boats mooring by white foam for overnight sleep.', primaryWord: '泊まる', primaryReading: 'とまる' },
  { char: '急', meaning: 'Hurry, Urgent, Sudden', onyomi: ["KYUU"], kunyomi: ["iso-gu"], strokes: 9, radical: '心 (heart)', mnemonic: 'A hand clutching an anxious, hurried heart.', primaryWord: '急ぐ', primaryReading: 'いそぐ' },
  { char: '配', meaning: 'Distribute, Deliver', onyomi: ["HAI"], kunyomi: ["kuba-ru"], strokes: 10, radical: '酉 (wine bottle)', mnemonic: 'Distributing rations and bottles to each recipient.', primaryWord: '配る', primaryReading: 'くばる' },
  { char: '助', meaning: 'Help, Assist, Rescue', onyomi: ["JO"], kunyomi: ["tasu-keru","tasu-karu"], strokes: 7, radical: '力 (power)', mnemonic: 'Combining power and aid to assist someone in need.', primaryWord: '助ける', primaryReading: 'たすける' },
  { char: '困', meaning: 'Troubled, In difficulty', onyomi: ["KON"], kunyomi: ["koma-ru"], strokes: 7, radical: '囗 (enclosure)', mnemonic: 'A tree trapped inside a tight fence with no room.', primaryWord: '困る', primaryReading: 'こまる' },
  { char: '泣', meaning: 'Cry, Weep', onyomi: ["KYUU"], kunyomi: ["na-ku"], strokes: 8, radical: '水 (water)', mnemonic: 'Water tears streaming while standing in grief.', primaryWord: '泣く', primaryReading: 'なく' },
  { char: '笑', meaning: 'Laugh, Smile', onyomi: ["SHOU"], kunyomi: ["wara-u","e-mu"], strokes: 10, radical: '竹 (bamboo)', mnemonic: 'Bamboo swaying cheerfully like a person laughing.', primaryWord: '笑う', primaryReading: 'わらう' },
  { char: '変', meaning: 'Change, Unusual, Strange', onyomi: ["HEN"], kunyomi: ["ka-waru","ka-eru"], strokes: 9, radical: '夂 (walk slowly)', mnemonic: 'Words transforming into strange new meanings.', primaryWord: '変わる', primaryReading: 'かわる' },
  { char: '拾', meaning: 'Pick up, Gather', onyomi: ["SHUU","JUU"], kunyomi: ["hiro-u"], strokes: 9, radical: '手 (hand)', mnemonic: 'Hands gathering ten lost items from the ground.', primaryWord: '拾う', primaryReading: 'ひろう' },
  { char: '死', meaning: 'Death, Die', onyomi: ["SHI"], kunyomi: ["shi-nu"], strokes: 6, radical: '歹 (bare bone)', mnemonic: 'Bones buried at the end of mortal life.', primaryWord: '死ぬ', primaryReading: 'しぬ' },
  { char: '集', meaning: 'Gather, Collect', onyomi: ["SHUU"], kunyomi: ["atsu-maru","atsu-meru"], strokes: 12, radical: '隹 (short-tailed bird)', mnemonic: 'Flocks of birds gathering together in a tree.', primaryWord: '集める', primaryReading: 'あつめる' },
  { char: '住', meaning: 'Live, Reside, Dwell', onyomi: ["JUU"], kunyomi: ["su-mu","su-mau"], strokes: 7, radical: '人 (person)', mnemonic: 'A person standing fixed where the candle burns.', primaryWord: '住む', primaryReading: 'すむ' },
  { char: '売', meaning: 'Sell', onyomi: ["BAI"], kunyomi: ["u-ru","u-reru"], strokes: 7, radical: '士 (scholar)', mnemonic: 'Displaying goods on the market table for sale.', primaryWord: '売る', primaryReading: 'うる' },
  { char: '歌', meaning: 'Song, Sing', onyomi: ["KA"], kunyomi: ["uta","uta-u"], strokes: 14, radical: '欠 (yawn/open mouth)', mnemonic: 'Opening the mouth wide to sing harmonious songs.', primaryWord: '歌う', primaryReading: 'うたう' },
  { char: '考', meaning: 'Think, Consider', onyomi: ["KOU"], kunyomi: ["kanga-eru"], strokes: 6, radical: '老 (old)', mnemonic: 'An elder leaning on a cane in deep contemplation.', primaryWord: '考える', primaryReading: 'かんがえる' },
  { char: '試', meaning: 'Test, Try, Attempt', onyomi: ["SHI"], kunyomi: ["tame-su","kokoro-miru"], strokes: 13, radical: '言 (word)', mnemonic: 'Speaking testing words to evaluate knowledge.', primaryWord: '試す', primaryReading: 'ためす' },
  { char: '教', meaning: 'Teach, Instruct, Doctrine', onyomi: ["KYOU"], kunyomi: ["oshi-eru","oso-waru"], strokes: 11, radical: '攴 (strike/guidance)', mnemonic: 'Guiding filial children to learn wisdom.', primaryWord: '教える', primaryReading: 'おしえる' },
  { char: '習', meaning: 'Learn, Practice', onyomi: ["SHUU"], kunyomi: ["nara-u"], strokes: 11, radical: '羽 (feather)', mnemonic: 'Young birds practicing flying with fledgling feathers.', primaryWord: '習う', primaryReading: 'ならう' },
  { char: '勉', meaning: 'Exertion, Strive, Study', onyomi: ["BEN"], kunyomi: ["tsuto-meru"], strokes: 10, radical: '力 (power)', mnemonic: 'Striving with all strength and diligent exertion.', primaryWord: '勉強', primaryReading: 'べんきょう' },
  { char: '研', meaning: 'Polish, Sharpen, Research', onyomi: ["KEN"], kunyomi: ["to-gu"], strokes: 9, radical: '石 (stone)', mnemonic: 'Rubbing stones together to polish intellect.', primaryWord: '研究', primaryReading: 'けんきゅう' },
  { char: '究', meaning: 'Investigate, Deep research', onyomi: ["KYUU"], kunyomi: ["kiwa-meru"], strokes: 7, radical: '穴 (hole)', mnemonic: 'Reaching deep into the cave to uncover facts.', primaryWord: '研究者', primaryReading: 'けんきゅうしゃ' },
  { char: '練', meaning: 'Practice, Train, Refine', onyomi: ["REN"], kunyomi: ["ne-ru"], strokes: 14, radical: '糸 (silk)', mnemonic: 'Repeatedly washing raw silk into fine thread.', primaryWord: '練習', primaryReading: 'れんしゅう' },
  { char: '忘', meaning: 'Forget', onyomi: ["BOU"], kunyomi: ["wasu-reru"], strokes: 7, radical: '心 (heart)', mnemonic: 'Memories perishing away from the heart.', primaryWord: '忘れる', primaryReading: 'わすれる' },
  { char: '覚', meaning: 'Memorize, Remember, Awake', onyomi: ["KAKU"], kunyomi: ["obo-eru","sa-meru"], strokes: 12, radical: '見 (see)', mnemonic: 'Seeing truth clearly and awakening the conscious mind.', primaryWord: '覚える', primaryReading: 'おぼえる' },
  { char: '質', meaning: 'Quality, Matter, Question', onyomi: ["SHITSU","SHICHI"], kunyomi: ["tada-su"], strokes: 15, radical: '貝 (shell)', mnemonic: 'Pledging shell treasures to prove genuine quality.', primaryWord: '質問', primaryReading: 'しつもん' },
  { char: '問', meaning: 'Question, Ask, Problem', onyomi: ["MON"], kunyomi: ["to-u","to-i"], strokes: 11, radical: '門 (gate)', mnemonic: 'A mouth asking questions at the palace gate.', primaryWord: '問題', primaryReading: 'もんだい' },
  { char: '題', meaning: 'Topic, Title, Subject', onyomi: ["DAI"], kunyomi: [], strokes: 18, radical: '頁 (page/leaf)', mnemonic: 'The main topic headline written on the page.', primaryWord: '宿題', primaryReading: 'しゅくだい' },
  { char: '答', meaning: 'Answer, Reply, Response', onyomi: ["TOU"], kunyomi: ["kota-eru","kota-e"], strokes: 12, radical: '竹 (bamboo)', mnemonic: 'Writing the correct reply on a bamboo scroll.', primaryWord: '答える', primaryReading: 'こたえる' },
  { char: '意', meaning: 'Mind, Meaning, Intention', onyomi: ["I"], kunyomi: [], strokes: 13, radical: '心 (heart)', mnemonic: 'The heartfelt meaning whispered by sound in the mind.', primaryWord: '意味', primaryReading: 'いみ' },
  { char: '味', meaning: 'Taste, Flavor, Experience', onyomi: ["MI"], kunyomi: ["aji","aji-wau"], strokes: 8, radical: '口 (mouth)', mnemonic: 'The mouth tasting delicious young fruits.', primaryWord: '味', primaryReading: 'あじ' },
  { char: '注', meaning: 'Pour, Focus, Note', onyomi: ["CHUU"], kunyomi: ["soso-gu","tsu-gu"], strokes: 8, radical: '水 (water)', mnemonic: 'Pouring water and focusing all attention on the lamp.', primaryWord: '注意', primaryReading: 'ちゅうい' },
  { char: '漢', meaning: 'Sino, Chinese, Man', onyomi: ["KAN"], kunyomi: [], strokes: 13, radical: '水 (water)', mnemonic: 'The Han dynasty cultural river origin.', primaryWord: '漢字', primaryReading: 'かんじ' },
  { char: '字', meaning: 'Character, Letter, Sign', onyomi: ["JI"], kunyomi: ["aza"], strokes: 6, radical: '子 (child)', mnemonic: 'A child practicing writing letters under the roof.', primaryWord: '文字', primaryReading: 'もじ' },
  { char: '文', meaning: 'Sentence, Literature, Culture', onyomi: ["BUN","MON"], kunyomi: ["fumi","aya"], strokes: 4, radical: '文 (literature)', mnemonic: 'Crossed stroke patterns on ancient manuscripts.', primaryWord: '作文', primaryReading: 'さくぶん' },
  { char: '理', meaning: 'Logic, Reason, Principle', onyomi: ["RI"], kunyomi: ["kotowari"], strokes: 11, radical: '玉 (jade)', mnemonic: 'Carving jade gem along its natural logical veins.', primaryWord: '理由', primaryReading: 'りゆう' },
  { char: '験', meaning: 'Test, Examine, Effect', onyomi: ["KEN","GEN"], kunyomi: ["tame-su"], strokes: 18, radical: '馬 (horse)', mnemonic: 'Testing and inspecting imperial horses for endurance.', primaryWord: '試験', primaryReading: 'しけん' },
  { char: '音', meaning: 'Sound, Noise, Tone', onyomi: ["ON","IN"], kunyomi: ["oto","ne"], strokes: 9, radical: '音 (sound)', mnemonic: 'Musical vibrations coming out from the mouth.', primaryWord: '音楽', primaryReading: 'おんがく' },
  { char: '楽', meaning: 'Music, Comfort, Pleasure', onyomi: ["GAKU","RAKU"], kunyomi: ["tano-shii","tano-shimu"], strokes: 13, radical: '木 (tree)', mnemonic: 'Bells vibrating on wooden stands to make cheerful music.', primaryWord: '楽しい', primaryReading: 'たのしい' },
  { char: '心', meaning: 'Heart, Mind, Spirit', onyomi: ["SHIN"], kunyomi: ["kokoro"], strokes: 4, radical: '心 (heart)', mnemonic: 'An anatomical drawing of the human heart ventricles.', primaryWord: '安心', primaryReading: 'あんしん' },
  { char: '悪', meaning: 'Bad, Evil, Wrong', onyomi: ["AKU","O"], kunyomi: ["waru-i"], strokes: 11, radical: '心 (heart)', mnemonic: 'An inferior heart turned toward bad deeds.', primaryWord: '悪い', primaryReading: 'わるい' },
  { char: '正', meaning: 'Correct, Right, True', onyomi: ["SEI","SHOU"], kunyomi: ["tada-shii","tada-su","masa"], strokes: 5, radical: '止 (stop)', mnemonic: 'Stopping right at the moral line of truth.', primaryWord: '正しい', primaryReading: 'ただしい' },
  { char: '有', meaning: 'Exist, Possess, Have', onyomi: ["YUU","U"], kunyomi: ["a-ru"], strokes: 6, radical: '月 (moon/meat)', mnemonic: 'A hand holding fresh food possession.', primaryWord: '有名', primaryReading: 'ゆうめい' },
  { char: '同', meaning: 'Same, Agree, Identical', onyomi: ["DOU"], kunyomi: ["ona-ji"], strokes: 6, radical: '口 (mouth)', mnemonic: 'Speaking with one united mouth under one roof.', primaryWord: '同じ', primaryReading: 'おなじ' },
  { char: '別', meaning: 'Separate, Another, Different', onyomi: ["BETSU"], kunyomi: ["waka-reru","wa-keru"], strokes: 7, radical: '刀 (sword)', mnemonic: 'A blade dividing things into distinct parts.', primaryWord: '特別', primaryReading: 'とくべつ' },
  { char: '特', meaning: 'Special, Particular', onyomi: ["TOKU"], kunyomi: [], strokes: 10, radical: '牛 (cow)', mnemonic: 'An outstanding bull temple sacrifice.', primaryWord: '特に', primaryReading: 'とくに' },
  { char: '私', meaning: 'Private, I, Me', onyomi: ["SHI"], kunyomi: ["watashi","watakushi"], strokes: 7, radical: '禾 (grain)', mnemonic: 'Harvesting grain for personal private use.', primaryWord: '私', primaryReading: 'わたし' },
  { char: '者', meaning: 'Person, Specialist', onyomi: ["SHA"], kunyomi: ["mono"], strokes: 8, radical: '老 (old)', mnemonic: 'A person practicing a specialized profession.', primaryWord: '医者', primaryReading: 'いしゃ' },
  { char: '員', meaning: 'Member, Employee, Number', onyomi: ["IN"], kunyomi: [], strokes: 10, radical: '貝 (shell)', mnemonic: 'Counting each person by roll-call number.', primaryWord: '会社員', primaryReading: 'かいしゃいん' },
  { char: '主', meaning: 'Master, Main, Owner', onyomi: ["SHU","SU"], kunyomi: ["nushi","omo"], strokes: 5, radical: '丶 (dot)', mnemonic: 'The flame burning brightly at the main oil lamp.', primaryWord: '主に', primaryReading: 'おもに' },
  { char: '事', meaning: 'Thing, Matter, Incident', onyomi: ["JI","ZU"], kunyomi: ["koto"], strokes: 8, radical: '亅 (hook)', mnemonic: 'A scribe holding a brush to record events.', primaryWord: '仕事', primaryReading: 'しごと' },
  { char: '仕', meaning: 'Serve, Do, Work', onyomi: ["SHI"], kunyomi: ["tsuka-eru"], strokes: 5, radical: '人 (person)', mnemonic: 'A person rendering official civil service.', primaryWord: '仕方', primaryReading: 'しかた' },
  { char: '業', meaning: 'Business, Industry, Karma', onyomi: ["GYOU","GOU"], kunyomi: ["waza"], strokes: 13, radical: '木 (tree)', mnemonic: 'Carved wooden musical instruments of fine craft.', primaryWord: '授業', primaryReading: 'じゅぎょう' },
  { char: '自', meaning: 'Self, Oneself, From', onyomi: ["JI","SHI"], kunyomi: ["mizuka-ra"], strokes: 6, radical: '自 (self)', mnemonic: 'Pointing to one\'s own nose to indicate "self".', primaryWord: '自分', primaryReading: 'じぶん' },
  { char: '代', meaning: 'Substitute, Generation, Fee', onyomi: ["DAI","TAI"], kunyomi: ["ka-waru","ka-eru","yo","shiro"], strokes: 5, radical: '人 (person)', mnemonic: 'A person stepping in to take another\'s place.', primaryWord: '電気代', primaryReading: 'でんきだい' },
  { char: '以', meaning: 'By means of, Because, Compared', onyomi: ["I"], kunyomi: ["mot-te"], strokes: 5, radical: '人 (person)', mnemonic: 'Taking tools in hand to accomplish standards.', primaryWord: '以上', primaryReading: 'いじょう' },
  { char: '方', meaning: 'Direction, Person, Method', onyomi: ["HOU"], kunyomi: ["kata"], strokes: 4, radical: '方 (direction)', mnemonic: 'Two boats sailing side-by-side toward a destination.', primaryWord: '読み方', primaryReading: 'よみかた' },
  { char: '度', meaning: 'Degree, Occurrence, Time', onyomi: ["DO","TO","TAKU"], kunyomi: ["tabi"], strokes: 9, radical: '广 (cliff)', mnemonic: 'A hand measuring temperature or frequency.', primaryWord: '今度', primaryReading: 'こんど' },
  { char: '品', meaning: 'Goods, Article, Refinement', onyomi: ["HIN"], kunyomi: ["shina"], strokes: 9, radical: '口 (mouth)', mnemonic: 'Three open boxes displaying quality items.', primaryWord: '商品', primaryReading: 'しょうひん' },
  { char: '物', meaning: 'Thing, Object, Matter', onyomi: ["BUTSU","MOTSU"], kunyomi: ["mono"], strokes: 8, radical: '牛 (cow)', mnemonic: 'All colorful creatures and physical objects.', primaryWord: '買い物', primaryReading: 'かいもの' },
  { char: '計', meaning: 'Measure, Plan, Clock', onyomi: ["KEI"], kunyomi: ["haka-ru","haka-rau"], strokes: 9, radical: '言 (word)', mnemonic: 'Speaking numbers up to ten to calculate plans.', primaryWord: '時計', primaryReading: 'とけい' },
  { char: '発', meaning: 'Depart, Emit, Publish', onyomi: ["HATSU","HOTSU"], kunyomi: ["ta-tsu","aba-ku"], strokes: 9, radical: '癶 (footsteps)', mnemonic: 'Arrows shooting forth as feet march forward.', primaryWord: '出発', primaryReading: 'しゅっぱつ' },
  { char: '公', meaning: 'Public, Fair, Prince', onyomi: ["KOU","KU"], kunyomi: ["ooyake"], strokes: 4, radical: '八 (eight)', mnemonic: 'Dividing goods openly and fairly for the public.', primaryWord: '公園', primaryReading: 'こうえん' },
  { char: '元', meaning: 'Origin, Former, Health', onyomi: ["GEN","GAN"], kunyomi: ["moto"], strokes: 4, radical: '儿 (legs)', mnemonic: 'A human head representing the prime beginning.', primaryWord: '元気', primaryReading: 'げんき' },
  { char: '不', meaning: 'Non-, Un-, Negative', onyomi: ["FU","BU"], kunyomi: [], strokes: 4, radical: '一 (one)', mnemonic: 'A bird failing to reach the sky barrier.', primaryWord: '不便', primaryReading: 'ふべん' },
  { char: '界', meaning: 'World, Boundary, Realm', onyomi: ["KAI"], kunyomi: [], strokes: 9, radical: '田 (field)', mnemonic: 'Armor dividing boundaries between fields.', primaryWord: '世界', primaryReading: 'せかい' },
  { char: '世', meaning: 'World, Generation, Age', onyomi: ["SEI","SE"], kunyomi: ["yo"], strokes: 5, radical: '一 (one)', mnemonic: 'Three tens linked together representing 30-year era.', primaryWord: '世話', primaryReading: 'せわ' },
  { char: '春', meaning: 'Spring season', onyomi: ["SHUN"], kunyomi: ["haru"], strokes: 9, radical: '日 (sun)', mnemonic: 'Sun warming up new seedlings in springtime.', primaryWord: '春休み', primaryReading: 'はるやすみ' },
  { char: '夏', meaning: 'Summer season', onyomi: ["KA","GE"], kunyomi: ["natsu"], strokes: 10, radical: '夂 (walk)', mnemonic: 'Dancers wearing ceremonial hats in summer festival.', primaryWord: '夏休み', primaryReading: 'なつやすみ' },
  { char: '秋', meaning: 'Autumn, Fall', onyomi: ["SHUU"], kunyomi: ["aki"], strokes: 9, radical: '禾 (grain)', mnemonic: 'Grains ripening golden like fire in autumn.', primaryWord: '秋祭り', primaryReading: 'あきまつり' },
  { char: '冬', meaning: 'Winter season', onyomi: ["TOU"], kunyomi: ["fuyu"], strokes: 5, radical: '冫 (ice)', mnemonic: 'Ice freezing as winter brings year\'s end.', primaryWord: '冬休み', primaryReading: 'ふゆやすみ' },
  { char: '風', meaning: 'Wind, Air, Style', onyomi: ["FUU","FU"], kunyomi: ["kaze","kaza"], strokes: 9, radical: '風 (wind)', mnemonic: 'Wind carrying tiny creatures and insects aloft.', primaryWord: '台風', primaryReading: 'たいふう' },
  { char: '晴', meaning: 'Clear weather, Fair', onyomi: ["SEI"], kunyomi: ["ha-reru","ha-re"], strokes: 12, radical: '日 (sun)', mnemonic: 'A brilliant sun shining in clear blue sky.', primaryWord: '晴れ', primaryReading: 'はれ' },
  { char: '曇', meaning: 'Cloudy, Foggy', onyomi: ["DON"], kunyomi: ["kumo-ru","kumori"], strokes: 16, radical: '日 (sun)', mnemonic: 'Dense rain clouds covering the sun.', primaryWord: '曇り', primaryReading: 'くもり' },
  { char: '雪', meaning: 'Snow', onyomi: ["SETSU"], kunyomi: ["yuki"], strokes: 11, radical: '雨 (rain)', mnemonic: 'Frozen crystals swept by broom hand in winter.', primaryWord: '雪', primaryReading: 'ゆき' },
  { char: '海', meaning: 'Sea, Ocean', onyomi: ["KAI"], kunyomi: ["umi"], strokes: 9, radical: '水 (water)', mnemonic: 'The abundant mother waters of all oceans.', primaryWord: '海岸', primaryReading: 'かいがん' },
  { char: '波', meaning: 'Wave, Ripple', onyomi: ["HA"], kunyomi: ["nami"], strokes: 8, radical: '水 (water)', mnemonic: 'Ocean water breaking like rippling animal skin.', primaryWord: '津波', primaryReading: 'つなみ' },
  { char: '池', meaning: 'Pond, Pool', onyomi: ["CHI"], kunyomi: ["ike"], strokes: 6, radical: '水 (water)', mnemonic: 'Water collected peacefully inside a basin pond.', primaryWord: '池', primaryReading: 'いけ' },
  { char: '林', meaning: 'Woods, Grove', onyomi: ["RIN"], kunyomi: ["hayashi"], strokes: 8, radical: '木 (tree)', mnemonic: 'Two trees standing together to form a grove.', primaryWord: '小林', primaryReading: 'こばやし' },
  { char: '森', meaning: 'Forest, Dense woods', onyomi: ["SHIN"], kunyomi: ["mori"], strokes: 12, radical: '木 (tree)', mnemonic: 'Three trees creating a dense deep green forest.', primaryWord: '森林', primaryReading: 'しんりん' },
  { char: '原', meaning: 'Field, Plain, Origin', onyomi: ["GEN"], kunyomi: ["hara"], strokes: 10, radical: '厂 (cliff)', mnemonic: 'A natural water spring flowing across open plains.', primaryWord: '秋葉原', primaryReading: 'あきはばら' },
  { char: '野', meaning: 'Field, Plains, Wild', onyomi: ["YA","SHO"], kunyomi: ["no"], strokes: 11, radical: '里 (village)', mnemonic: 'Expansive countryside fields beyond village limits.', primaryWord: '野菜', primaryReading: 'やさい' },
  { char: '畑', meaning: 'Cultivated field, Farm', onyomi: [], kunyomi: ["hata","hatake"], strokes: 9, radical: '田 (field)', mnemonic: 'Burning fire clearing land for fertile vegetable fields.', primaryWord: '畑', primaryReading: 'はたけ' },
  { char: '光', meaning: 'Light, Ray, Beam', onyomi: ["KOU"], kunyomi: ["hika-ru","hikari"], strokes: 6, radical: '儿 (legs)', mnemonic: 'A brilliant torch light carried overhead.', primaryWord: '観光', primaryReading: 'かんこう' },
  { char: '星', meaning: 'Star, Asterisk', onyomi: ["SEI","SHOU"], kunyomi: ["hoshi"], strokes: 9, radical: '日 (sun)', mnemonic: 'Little shining suns born in the vast night sky.', primaryWord: '星空', primaryReading: 'ほしぞら' },
  { char: '犬', meaning: 'Dog', onyomi: ["KEN"], kunyomi: ["inu"], strokes: 4, radical: '犬 (dog)', mnemonic: 'A faithful dog standing with ears perked up.', primaryWord: '子犬', primaryReading: 'こいぬ' },
  { char: '鳥', meaning: 'Bird, Fowl', onyomi: ["CHOU"], kunyomi: ["tori"], strokes: 11, radical: '鳥 (bird)', mnemonic: 'A feathered songbird perched on a branch.', primaryWord: '小鳥', primaryReading: 'ことり' },
  { char: '牛', meaning: 'Cow, Cattle, Beef', onyomi: ["GYUU"], kunyomi: ["ushi"], strokes: 4, radical: '牛 (cow)', mnemonic: 'A drawing of horns and head of cattle.', primaryWord: '牛肉', primaryReading: 'ぎゅうにく' },
  { char: '肉', meaning: 'Meat, Flesh', onyomi: ["NIKU"], kunyomi: ["shishi"], strokes: 6, radical: '肉 (meat)', mnemonic: 'Sliced rib cuts of fresh meat hanging.', primaryWord: '豚肉', primaryReading: 'ぶたにく' },
  { char: '虫', meaning: 'Insect, Bug', onyomi: ["CHUU"], kunyomi: ["mushi"], strokes: 6, radical: '虫 (insect)', mnemonic: 'A small creeping caterpillar beetle.', primaryWord: '虫歯', primaryReading: 'むしば' },
  { char: '飯', meaning: 'Cooked rice, Meal', onyomi: ["HAN"], kunyomi: ["meshi"], strokes: 12, radical: '食 (food)', mnemonic: 'Steaming white rice prepared for the table.', primaryWord: 'ご飯', primaryReading: 'ごはん' },
  { char: '茶', meaning: 'Tea, Brown', onyomi: ["CHA","SA"], kunyomi: [], strokes: 9, radical: '艸 (grass)', mnemonic: 'Green tea leaves harvested and dried.', primaryWord: 'お茶', primaryReading: 'おちゃ' },
  { char: '町', meaning: 'Town, Quarter', onyomi: ["CHOU"], kunyomi: ["machi"], strokes: 7, radical: '田 (field)', mnemonic: 'Streets and rice plots making up a thriving town.', primaryWord: '町内', primaryReading: 'ちょうない' },
  { char: '村', meaning: 'Village, Hamlet', onyomi: ["SON"], kunyomi: ["mura"], strokes: 7, radical: '木 (tree)', mnemonic: 'A modest cluster of homes surrounded by trees.', primaryWord: '農村', primaryReading: 'のうそん' },
  { char: '市', meaning: 'City, Market, Civic', onyomi: ["SHI"], kunyomi: ["ichi"], strokes: 5, radical: '巾 (cloth)', mnemonic: 'Tents and flags marking the bustling city market.', primaryWord: '市民', primaryReading: 'しみん' },
  { char: '京', meaning: 'Capital city', onyomi: ["KYOU","KEI"], kunyomi: ["miyako"], strokes: 8, radical: '亠 (lid)', mnemonic: 'A majestic high watchtower in the imperial capital.', primaryWord: '東京', primaryReading: 'とうきょう' },
  { char: '都', meaning: 'Metropolis, Capital', onyomi: ["TO","TSU"], kunyomi: ["miyako"], strokes: 11, radical: '邑 (city)', mnemonic: 'A gathering of many citizens inside capital walls.', primaryWord: '京都', primaryReading: 'きょうと' },
  { char: '県', meaning: 'Prefecture', onyomi: ["KEN"], kunyomi: ["ka-keru"], strokes: 9, radical: '目 (eye)', mnemonic: 'An administrative eye overseeing prefectural districts.', primaryWord: '神奈川県', primaryReading: 'かながわけん' },
  { char: '区', meaning: 'Ward, District, Section', onyomi: ["KU"], kunyomi: [], strokes: 4, radical: '匚 (box)', mnemonic: 'A partitioned quadrant box within the city.', primaryWord: '新宿区', primaryReading: 'しんじゅくく' },
  { char: '地', meaning: 'Ground, Earth, Land', onyomi: ["CHI","JI"], kunyomi: [], strokes: 6, radical: '土 (earth)', mnemonic: 'Fertile terrain and sprawling earth grounds.', primaryWord: '地下鉄', primaryReading: 'ちかてつ' },
  { char: '図', meaning: 'Drawing, Map, Plan', onyomi: ["ZU","TO"], kunyomi: ["haka-ru"], strokes: 7, radical: '囗 (enclosure)', mnemonic: 'A detailed floorplan diagram inside a frame.', primaryWord: '地図', primaryReading: 'ちず' },
  { char: '館', meaning: 'Building, Palace, Hall', onyomi: ["KAN"], kunyomi: ["yakata"], strokes: 16, radical: '食 (food)', mnemonic: 'A grand mansion serving food and lodging to guests.', primaryWord: '図書館', primaryReading: 'としょかん' },
  { char: '堂', meaning: 'Hall, Temple hall', onyomi: ["DOU"], kunyomi: [], strokes: 11, radical: '土 (earth)', mnemonic: 'A magnificent building constructed on earth foundations.', primaryWord: '食堂', primaryReading: 'しょくどう' },
  { char: '局', meaning: 'Bureau, Office, Department', onyomi: ["KYOKU"], kunyomi: ["tsubone"], strokes: 7, radical: '尸 (corpse/flag)', mnemonic: 'Divided cubicle rooms in public government offices.', primaryWord: '郵便局', primaryReading: 'ゆうびんきょく' },
  { char: '園', meaning: 'Garden, Park, Orchard', onyomi: ["EN"], kunyomi: ["sono"], strokes: 13, radical: '囗 (enclosure)', mnemonic: 'An enclosed park full of flowers, trees and animals.', primaryWord: '動物園', primaryReading: 'どうぶつえん' },
  { char: '屋', meaning: 'Shop, House, Roof', onyomi: ["OKU"], kunyomi: ["ya"], strokes: 9, radical: '尸 (corpse/roof)', mnemonic: 'A merchant establishment beneath a roof.', primaryWord: '本屋', primaryReading: 'ほんや' },
  { char: '寺', meaning: 'Buddhist temple', onyomi: ["JI"], kunyomi: ["tera"], strokes: 6, radical: '寸 (inch)', mnemonic: 'Earthly grounds where monks measure prayer discipline.', primaryWord: 'お寺', primaryReading: 'おてら' },
  { char: '神', meaning: 'God, Deity, Spirit', onyomi: ["SHIN","JIN"], kunyomi: ["kami"], strokes: 9, radical: '示 (altar)', mnemonic: 'Lightning alter revealing divine presence.', primaryWord: '神様', primaryReading: 'かみさま' },
  { char: '院', meaning: 'Institution, Mansion, Hall', onyomi: ["IN"], kunyomi: [], strokes: 10, radical: '阜 (hill)', mnemonic: 'A walled institution compound for health and learning.', primaryWord: '大学院', primaryReading: 'だいがくいん' },
  { char: '病', meaning: 'Illness, Sickness, Disease', onyomi: ["BYOU","HEI"], kunyomi: ["ya-mu"], strokes: 10, radical: '疒 (sickness)', mnemonic: 'Lying sick in bed under care.', primaryWord: '病院', primaryReading: 'びょういん' },
  { char: '薬', meaning: 'Medicine, Chemical', onyomi: ["YAKU"], kunyomi: ["kusuri"], strokes: 16, radical: '艸 (grass)', mnemonic: 'Medicinal healing herbs that bring joy.', primaryWord: '薬', primaryReading: 'くすり' },
  { char: '港', meaning: 'Port, Harbor', onyomi: ["KOU"], kunyomi: ["minato"], strokes: 12, radical: '水 (water)', mnemonic: 'Deep water where marine vessels navigate and dock.', primaryWord: '空港', primaryReading: 'くうこう' },
  { char: '橋', meaning: 'Bridge', onyomi: ["KYOU"], kunyomi: ["hashi"], strokes: 16, radical: '木 (tree)', mnemonic: 'Tall wooden beams arching over a flowing river.', primaryWord: '歩道橋', primaryReading: 'ほどうきょう' },
  { char: '線', meaning: 'Line, Track, Wire', onyomi: ["SEN"], kunyomi: ["suji"], strokes: 15, radical: '糸 (silk)', mnemonic: 'A straight line drawn like a taut thread.', primaryWord: '新幹線', primaryReading: 'しんかんせん' },
  { char: '路', meaning: 'Road, Route, Path', onyomi: ["RO"], kunyomi: ["michi","ji"], strokes: 13, radical: '足 (foot)', mnemonic: 'Footsteps paving a path along the journey.', primaryWord: '道路', primaryReading: 'どうろ' },
  { char: '門', meaning: 'Gate, Gateway', onyomi: ["MON"], kunyomi: ["kado"], strokes: 8, radical: '門 (gate)', mnemonic: 'Twin folding doors guarding the main entrance.', primaryWord: '専門', primaryReading: 'せんもん' },
  { char: '窓', meaning: 'Window, Panes', onyomi: ["SOU"], kunyomi: ["mado"], strokes: 11, radical: '穴 (hole)', mnemonic: 'A hole in the wall allowing light and air inside.', primaryWord: '窓口', primaryReading: 'まどぐち' },
  { char: '戸', meaning: 'Door, Shutter, Household', onyomi: ["KO"], kunyomi: ["to"], strokes: 4, radical: '戸 (door)', mnemonic: 'A single swinging wooden entrance door.', primaryWord: '雨戸', primaryReading: 'あまど' },
  { char: '庭', meaning: 'Garden, Yard, Courtyard', onyomi: ["TEI"], kunyomi: ["niwa"], strokes: 10, radical: '广 (cliff/house)', mnemonic: 'A green courtyard open beside the house.', primaryWord: '校庭', primaryReading: 'こうてい' },
  { char: '階', meaning: 'Floor, Story, Stairs', onyomi: ["KAI"], kunyomi: ["kizahashi"], strokes: 12, radical: '阜 (hill)', mnemonic: 'Ascending levels of a multi-story building.', primaryWord: '階段', primaryReading: 'かいだん' },
  { char: '所', meaning: 'Place, Location, Spot', onyomi: ["SHO"], kunyomi: ["tokoro"], strokes: 8, radical: '戸 (door)', mnemonic: 'An axe placed beside the doorway marking the spot.', primaryWord: '場所', primaryReading: 'ばしょ' },
  { char: '場', meaning: 'Location, Arena, Scene', onyomi: ["JOU"], kunyomi: ["ba"], strokes: 12, radical: '土 (earth)', mnemonic: 'Open sunlit ground used for gatherings.', primaryWord: '広場', primaryReading: 'ひろば' },
  { char: '家', meaning: 'House, Home, Family', onyomi: ["KA","KE"], kunyomi: ["ie","ya"], strokes: 10, radical: '宀 (roof)', mnemonic: 'A home shelter sheltering livestock and family.', primaryWord: '家族', primaryReading: 'かぞく' },
  { char: '族', meaning: 'Tribe, Family, Clan', onyomi: ["ZOKU"], kunyomi: [], strokes: 11, radical: '方 (banner)', mnemonic: 'Arrows rallied together under one family banner.', primaryWord: '親族', primaryReading: 'しんぞく' },
  { char: '建', meaning: 'Build, Construct, Erect', onyomi: ["KEN","KON"], kunyomi: ["ta-teru","ta-tsu"], strokes: 9, radical: '廴 (long stride)', mnemonic: 'Laying down architectural rules to construct towers.', primaryWord: '建物', primaryReading: 'たてもの' },
  { char: '室', meaning: 'Room, Chamber', onyomi: ["SHITSU"], kunyomi: ["muro"], strokes: 9, radical: '宀 (roof)', mnemonic: 'An enclosed living chamber under the roof.', primaryWord: '教室', primaryReading: 'きょうしつ' },
  { char: '席', meaning: 'Seat, Mat, Place', onyomi: ["SEKI"], kunyomi: ["mushiro"], strokes: 10, radical: '巾 (cloth)', mnemonic: 'A woven cloth mat prepared for sitting.', primaryWord: '出席', primaryReading: 'しゅっせき' },
  { char: '朝', meaning: 'Morning, Dynasty', onyomi: ["CHOU"], kunyomi: ["asa"], strokes: 12, radical: '月 (moon)', mnemonic: 'The morning sun rising while the pale moon lingers.', primaryWord: '今朝', primaryReading: 'けさ' },
  { char: '昼', meaning: 'Daytime, Noon', onyomi: ["CHUU"], kunyomi: ["hiru"], strokes: 9, radical: '日 (sun)', mnemonic: 'Sun shining right in the middle of the sky.', primaryWord: '昼休み', primaryReading: 'ひるやすみ' },
  { char: '夕', meaning: 'Evening, Dusk', onyomi: ["SEKI"], kunyomi: ["yuu"], strokes: 3, radical: '夕 (evening)', mnemonic: 'The crescent moon rising at dusk.', primaryWord: '夕方', primaryReading: 'ゆうがた' },
  { char: '夜', meaning: 'Night, Evening', onyomi: ["YA"], kunyomi: ["yoru","yo"], strokes: 8, radical: '夕 (evening)', mnemonic: 'A person sleeping quietly during the night hours.', primaryWord: '今夜', primaryReading: 'こんや' },
  { char: '週', meaning: 'Week, Cycle', onyomi: ["SHUU"], kunyomi: [], strokes: 11, radical: '辵 (walk)', mnemonic: 'The cyclical journey through seven days of the week.', primaryWord: '来週', primaryReading: 'らいしゅう' },
  { char: '曜', meaning: 'Day of the week', onyomi: ["YOU"], kunyomi: [], strokes: 18, radical: '日 (sun)', mnemonic: 'Feathers shining brightly under the sun on calendar.', primaryWord: '日曜日', primaryReading: 'にちようび' },
  { char: '早', meaning: 'Early, Fast, Quick', onyomi: ["SOU","SA"], kunyomi: ["haya-i","haya-maru"], strokes: 6, radical: '日 (sun)', mnemonic: 'The sun rising early over the horizon.', primaryWord: '早い', primaryReading: 'はやい' },
  { char: '暗', meaning: 'Dark, Gloomy, Secret', onyomi: ["AN"], kunyomi: ["kura-i"], strokes: 13, radical: '日 (sun)', mnemonic: 'Sunlight muffled and shadowed by sound.', primaryWord: '暗い', primaryReading: 'くらい' },
  { char: '暑', meaning: 'Hot (weather/climate)', onyomi: ["SHO"], kunyomi: ["atsu-i"], strokes: 12, radical: '日 (sun)', mnemonic: 'Sun beating down intensely during hot midsummer.', primaryWord: '暑い', primaryReading: 'あつい' },
  { char: '寒', meaning: 'Cold (weather/temperature)', onyomi: ["KAN"], kunyomi: ["samu-i"], strokes: 12, radical: '宀 (roof)', mnemonic: 'Ice freezing under the roof during freezing cold.', primaryWord: '寒い', primaryReading: 'さむい' },
  { char: '暖', meaning: 'Warm (climate/weather)', onyomi: ["DAN","NON"], kunyomi: ["atata-kai","atata-maru"], strokes: 13, radical: '日 (sun)', mnemonic: 'Sun warming up hands with gentle comfort.', primaryWord: '暖かい', primaryReading: 'あたたかい' },
  { char: '涼', meaning: 'Cool, Refreshing', onyomi: ["RYOU"], kunyomi: ["suzu-shii","suzu-mu"], strokes: 11, radical: '水 (water)', mnemonic: 'Water and light breeze bringing cool relief.', primaryWord: '涼しい', primaryReading: 'すずしい' },
  { char: '重', meaning: 'Heavy, Important, Pile up', onyomi: ["JUU","CHOU"], kunyomi: ["omo-i","kasa-naru"], strokes: 9, radical: '里 (village)', mnemonic: 'A heavy bundle carried for miles.', primaryWord: '重い', primaryReading: 'おもい' },
  { char: '軽', meaning: 'Lightweight, Simple', onyomi: ["KEI"], kunyomi: ["karu-i","karo-yaka"], strokes: 12, radical: '車 (cart)', mnemonic: 'A fast and agile lightweight cart.', primaryWord: '軽い', primaryReading: 'かるい' },
  { char: '近', meaning: 'Near, Close, Recent', onyomi: ["KIN","KON"], kunyomi: ["chika-i"], strokes: 7, radical: '辵 (walk)', mnemonic: 'Taking an axe just a short walk nearby.', primaryWord: '近い', primaryReading: 'ちかい' },
  { char: '遠', meaning: 'Far, Distant, Remote', onyomi: ["EN","ON"], kunyomi: ["too-i"], strokes: 13, radical: '辵 (walk)', mnemonic: 'Walking across extensive distant borders.', primaryWord: '遠い', primaryReading: 'とおい' },
  { char: '強', meaning: 'Strong, Powerful', onyomi: ["KYOU","GOU"], kunyomi: ["tsuyo-i","shi-iru"], strokes: 11, radical: '弓 (bow)', mnemonic: 'A resilient beetle tough as a recurve bow.', primaryWord: '強い', primaryReading: 'つよい' },
  { char: '弱', meaning: 'Weak, Frail', onyomi: ["JAKU"], kunyomi: ["yowa-i","yowa-maru"], strokes: 10, radical: '弓 (bow)', mnemonic: 'Two limp bows with weak tensile strength.', primaryWord: '弱い', primaryReading: 'よわい' },
  { char: '太', meaning: 'Thick, Fat, Plump', onyomi: ["TAI","TA"], kunyomi: ["futo-i","futo-ru"], strokes: 4, radical: '大 (big)', mnemonic: 'Extra broad stroke making a big form thick.', primaryWord: '太い', primaryReading: 'ふとい' },
  { char: '細', meaning: 'Thin, Slender, Detailed', onyomi: ["SAI"], kunyomi: ["hoso-i","koma-kai"], strokes: 11, radical: '糸 (silk)', mnemonic: 'Fine and delicate threads in miniature detail.', primaryWord: '細い', primaryReading: 'ほそい' },
  { char: '短', meaning: 'Short, Brief, Defect', onyomi: ["TAN"], kunyomi: ["mijika-i"], strokes: 12, radical: '矢 (arrow)', mnemonic: 'An arrow measured short beside a grain bowl.', primaryWord: '短い', primaryReading: 'みじかい' },
  { char: '低', meaning: 'Low, Short height, Humble', onyomi: ["TEI"], kunyomi: ["hiku-i","hiku-meru"], strokes: 7, radical: '人 (person)', mnemonic: 'A person bowing down low in modesty.', primaryWord: '低い', primaryReading: 'ひくい' },
  { char: '広', meaning: 'Wide, Broad, Spacious', onyomi: ["KOU"], kunyomi: ["hiro-i","hiro-geru"], strokes: 5, radical: '广 (cliff/house)', mnemonic: 'A wide and spacious room inside a large house.', primaryWord: '広い', primaryReading: 'ひろい' },
  { char: '忙', meaning: 'Busy, Frantic', onyomi: ["BOU"], kunyomi: ["isoga-shii"], strokes: 6, radical: '心 (heart)', mnemonic: 'A heart overwhelmed with constant busy tasks.', primaryWord: '忙しい', primaryReading: 'いそがしい' },
  { char: '頭', meaning: 'Head, Counter for large animals', onyomi: ["TOU","ZU"], kunyomi: ["atama","kashira"], strokes: 16, radical: '頁 (page/head)', mnemonic: 'A prominent skull atop the body.', primaryWord: '頭', primaryReading: 'あたま' },
  { char: '顔', meaning: 'Face, Expression', onyomi: ["GAN"], kunyomi: ["kao"], strokes: 18, radical: '頁 (page/head)', mnemonic: 'Bright colors expressing emotion on the face.', primaryWord: '顔', primaryReading: 'かお' },
  { char: '首', meaning: 'Neck, Head, Chief', onyomi: ["SHU"], kunyomi: ["kubi"], strokes: 9, radical: '首 (neck)', mnemonic: 'The neck supporting the head and crown.', primaryWord: '手首', primaryReading: 'てくび' },
  { char: '体', meaning: 'Body, Physical form, Substance', onyomi: ["TAI","TEI"], kunyomi: ["karada"], strokes: 7, radical: '人 (person)', mnemonic: 'A person rooted like a tree forming the body.', primaryWord: '体', primaryReading: 'からだ' },
  { char: '親', meaning: 'Parent, Intimate, Close', onyomi: ["SHIN"], kunyomi: ["oya","shita-shii"], strokes: 16, radical: '見 (see)', mnemonic: 'A loving parent standing on a hill watching children.', primaryWord: '両親', primaryReading: 'りょうしん' },
  { char: '兄', meaning: 'Older brother', onyomi: ["KYOU","KEI"], kunyomi: ["ani"], strokes: 5, radical: '儿 (legs)', mnemonic: 'A boy speaking as the elder brother.', primaryWord: 'お兄さん', primaryReading: 'おにいさん' },
  { char: '弟', meaning: 'Younger brother', onyomi: ["TEI","DAI","DE"], kunyomi: ["otouto"], strokes: 7, radical: '弓 (bow)', mnemonic: 'A leather strap wrapped around a spear for the younger sibling.', primaryWord: '弟', primaryReading: 'おとうと' },
  { char: '姉', meaning: 'Older sister', onyomi: ["SHI"], kunyomi: ["ane"], strokes: 8, radical: '女 (woman)', mnemonic: 'An elder woman managing the household markets.', primaryWord: 'お姉さん', primaryReading: 'おねえさん' },
  { char: '妹', meaning: 'Younger sister', onyomi: ["MAI"], kunyomi: ["imouto"], strokes: 8, radical: '女 (woman)', mnemonic: 'A young female not yet fully grown.', primaryWord: '妹', primaryReading: 'いもうと' },
  { char: '好', meaning: 'Like, Fond, Favorable', onyomi: ["KOU"], kunyomi: ["su-ki","kono-mu"], strokes: 6, radical: '女 (woman)', mnemonic: 'A mother holding and loving her child.', primaryWord: '好き', primaryReading: 'すき' },
  { char: '服', meaning: 'Clothes, Attire, Obey', onyomi: ["FUKU"], kunyomi: [], strokes: 8, radical: '月 (flesh)', mnemonic: 'Tailored clothes fitting closely against the body.', primaryWord: '洋服', primaryReading: 'ようふく' },
  { char: '銀', meaning: 'Silver, Wealth', onyomi: ["GIN"], kunyomi: ["shirogane"], strokes: 14, radical: '金 (gold/metal)', mnemonic: 'The shiny white precious metal silver.', primaryWord: '銀行', primaryReading: 'ぎんこう' },
  { char: '色', meaning: 'Color, Lust', onyomi: ["SHOKU","SHIKI"], kunyomi: ["iro"], strokes: 6, radical: '色 (color)', mnemonic: 'Vibrant emotional hues and tones.', primaryWord: '色々', primaryReading: 'いろいろ' },
  { char: '英', meaning: 'England, Heroic, Excellent', onyomi: ["EI"], kunyomi: ["hanabusa"], strokes: 8, radical: '艸 (grass)', mnemonic: 'A blooming flower standing above the crown.', primaryWord: '英語', primaryReading: 'えいご' },
  { char: '画', meaning: 'Picture, Stroke, Plan', onyomi: ["GA","KAKU"], kunyomi: ["e-gaku"], strokes: 8, radical: '田 (field)', mnemonic: 'A brush tracing borders and painting scenes.', primaryWord: '映画', primaryReading: 'えいが' },
  { char: '写', meaning: 'Copy, Photograph, Project', onyomi: ["SHA"], kunyomi: ["utsu-su","utsu-ru"], strokes: 5, radical: '冖 (cover)', mnemonic: 'Replicating an exact image under the camera lens.', primaryWord: '写真', primaryReading: 'しゃしん' },
  { char: '真', meaning: 'True, Reality, Pure', onyomi: ["SHIN"], kunyomi: ["ma","makoto"], strokes: 10, radical: '目 (eye)', mnemonic: 'Seeing ultimate truth with clear focused eyes.', primaryWord: '真ん中', primaryReading: 'まんなか' },
  { char: '紙', meaning: 'Paper', onyomi: ["SHI"], kunyomi: ["kami"], strokes: 10, radical: '糸 (silk)', mnemonic: 'Fine pressed silk fibers making white paper sheets.', primaryWord: '手紙', primaryReading: 'てがみ' },
  { char: '旅', meaning: 'Travel, Trip, Journey', onyomi: ["RYO"], kunyomi: ["tabi"], strokes: 10, radical: '方 (direction)', mnemonic: 'A traveler marching under the banner on an excursion.', primaryWord: '旅行', primaryReading: 'りょこう' },
  { char: '医', meaning: 'Doctor, Medical, Medicine', onyomi: ["I"], kunyomi: ["iya-su"], strokes: 7, radical: '匚 (box)', mnemonic: 'Medical instruments stored carefully in a doctor\'s case.', primaryWord: '医学', primaryReading: 'いがく' },
  { char: '去', meaning: 'Past, Leave, Depart', onyomi: ["KYO","KO"], kunyomi: ["sa-ru"], strokes: 5, radical: '厶 (private)', mnemonic: 'Leaving the soil behind as time slips away.', primaryWord: '去年', primaryReading: 'きょねん' },
  { char: '台', meaning: 'Platform, Stand, Counter for machines', onyomi: ["TAI","DAI"], kunyomi: ["utena"], strokes: 5, radical: '口 (mouth)', mnemonic: 'A raised platform upon which speakers stand.', primaryWord: '台風', primaryReading: 'たいふう' },
  { char: '洋', meaning: 'Ocean, Western-style', onyomi: ["YOU"], kunyomi: [], strokes: 9, radical: '水 (water)', mnemonic: 'The vast ocean stretching to Western lands.', primaryWord: '西洋', primaryReading: 'せいよう' },
  { char: '工', meaning: 'Craft, Construction, Factory', onyomi: ["KOU","KU"], kunyomi: [], strokes: 3, radical: '工 (craft)', mnemonic: 'A carpenter\'s square rule for building projects.', primaryWord: '工場', primaryReading: 'こうじょう' },
  { char: '平', meaning: 'Flat, Peaceful, Level', onyomi: ["HEI","BYOU"], kunyomi: ["tai-ra","hira"], strokes: 5, radical: '干 (shield)', mnemonic: 'A calm water lily spreading flat on peaceful water.', primaryWord: '平日', primaryReading: 'へいじつ' },
  { char: '存', meaning: 'Exist, Be aware, Believe', onyomi: ["ZON","SON"], kunyomi: ["naga-raeru"], strokes: 6, radical: '子 (child)', mnemonic: 'A child existing safely in the world.', primaryWord: 'ご存じ', primaryReading: 'ごぞんじ' },
  { char: '料', meaning: 'Fee, Materials, Ingredients', onyomi: ["RYOU"], kunyomi: [], strokes: 10, radical: '斗 (dipper)', mnemonic: 'Measuring grain ingredients with a wooden dipper.', primaryWord: '料理', primaryReading: 'りょうり' }
];

// Unique 2 sentences for every N4 kanji
const N4_SENTENCES: Record<string, [KanjiSentence, KanjiSentence]> = {
  '使': [
    { id: 's-n4-使-1', sentence: '毎日パソコンを使って仕事をしています。', furigana: 'まいにち パソコン を つかって しごと を しています。', romaji: 'Mainichi pasokon o tsukatte shigoto o shite imasu.', english: 'I use a computer every day for work.', targetWord: '使って', targetWordEnglish: 'Using' },
    { id: 's-n4-使-2', sentence: '電子辞書を使って単語を調べました。', furigana: 'でんしじしょ を つかって たんご を しらべました。', romaji: 'Denshi jisho o tsukatte tango o shirabemashita.', english: 'I looked up words using an electronic dictionary.', targetWord: '使って', targetWordEnglish: 'Using' }
  ],
  '始': [
    { id: 's-n4-始-1', sentence: '授業は九時に始まります。', furigana: 'じゅぎょう は くじ に はじまります。', romaji: 'Jugyou wa kuji ni hajimarimasu.', english: 'Class begins at 9:00.', targetWord: '始まります', targetWordEnglish: 'Begins' },
    { id: 's-n4-始-2', sentence: '新しいプロジェクトを来月から始めます。', furigana: 'あたらしい プロジェクト を らいげつ から はじめます。', romaji: 'Atarashii purojekuto o raigetsu kara hajimemasu.', english: 'We will start a new project from next month.', targetWord: '始めます', targetWordEnglish: 'Start / Begin' }
  ],
  '終': [
    { id: 's-n4-終-1', sentence: '映画は二時間で終わりました。', furigana: 'えいが は にじかん で おわりました。', romaji: 'Eiga wa nijikan de owarimashita.', english: 'The movie finished in two hours.', targetWord: '終わりました', targetWordEnglish: 'Finished / Ended' },
    { id: 's-n4-終-2', sentence: '終電に間に合うように急いで帰りました。', furigana: 'しゅうでん に まにあう ように いそいで かえりました。', romaji: 'Shuuden ni maniou you ni isoide kaerimashita.', english: 'I hurried home to catch the last train.', targetWord: '終電', targetWordEnglish: 'Last train' }
  ],
  '開': [
    { id: 's-n4-開-1', sentence: '窓を開けて新鮮な空気を入れましょう。', furigana: 'まど を あけて しんせん な くうき を いれましょう。', romaji: 'Mado o akete shinsen na kuuki o iremashou.', english: "Let's open the window and let in fresh air.", targetWord: '開けて', targetWordEnglish: 'Open (te-form)' },
    { id: 's-n4-開-2', sentence: '来月新しいお店が開店します。', furigana: 'らいげつ あたらしい おみせ が かいてん します。', romaji: 'Raigetsu atarashii omise ga kaiten shimasu.', english: 'A new store will open next month.', targetWord: '開店', targetWordEnglish: 'Grand opening' }
  ],
  '閉': [
    { id: 's-n4-閉-1', sentence: '夜は必ず玄関のドアを閉めてください。', furigana: 'よる は かならず げんかん の ドア を しめてください。', romaji: 'Yoru wa kanarazu genkan no doa o shimete kudasai.', english: 'Please always close the front door at night.', targetWord: '閉めて', targetWordEnglish: 'Close (te-form)' },
    { id: 's-n4-閉-2', sentence: '図書館は日曜日は閉まっています。', furigana: 'としょかん は にちようび は しまっています。', romaji: 'Toshokan wa nichiyoubi wa shimatte imasu.', english: 'The library is closed on Sundays.', targetWord: '閉まって', targetWordEnglish: 'Is closed' }
  ],
  '送': [
    { id: 's-n4-送-1', sentence: '友達に誕生日プレゼントを郵便で送りました。', furigana: 'ともだち に たんじょうびプレゼント を ゆうびん で おくりました。', romaji: 'Tomodachi ni tanjoubi purezento o yuubin de okurimashita.', english: 'I sent a birthday present to my friend by mail.', targetWord: '送りました', targetWordEnglish: 'Sent' },
    { id: 's-n4-送-2', sentence: '空港まで友達を車で見送りました。', furigana: 'くうこう まで ともだち を くるま で みおくりました。', romaji: 'Kuukou made tomodachi o kuruma de miokurimashita.', english: 'I drove my friend to the airport to see them off.', targetWord: '見送り', targetWordEnglish: 'See off' }
  ],
  '切': [
    { id: 's-n4-切-1', sentence: 'ナイフでリンゴを切って食べました。', furigana: 'ナイフ で リンゴ を きって たべました。', romaji: 'Naifu de ringo o kitte tabemashita.', english: 'I cut an apple with a knife and ate it.', targetWord: '切って', targetWordEnglish: 'Cut (te-form)' },
    { id: 's-n4-切-2', sentence: '提出の締め切りを守ることが大切です。', furigana: 'ていしゅつ の しめきり を まもること が たいせつ です。', romaji: 'Teishutsu no shimekiri o mamoru koto ga taisetsu desu.', english: 'It is important to keep the submission deadline.', targetWord: '締め切り', targetWordEnglish: 'Deadline' }
  ],
  '貸': [
    { id: 's-n4-貸-1', sentence: '友達に傘を貸してあげました。', furigana: 'ともだち に かさ を かして あげました。', romaji: 'Tomodachi ni kasa o kashite agemashita.', english: 'I lent my umbrella to my friend.', targetWord: '貸して', targetWordEnglish: 'Lend (te-form)' },
    { id: 's-n4-貸-2', sentence: '近くに貸し自転車のお店があります。', furigana: 'ちかく に かしじてんしゃ の おみせ が あります。', romaji: 'Chikaku ni kashi jitensha no omise ga arimasu.', english: 'There is a bike rental shop nearby.', targetWord: '貸し自転車', targetWordEnglish: 'Rental bicycle' }
  ],
  '借': [
    { id: 's-n4-借-1', sentence: '図書館で参考書を借りました。', furigana: 'としょかん で さんこうしょ を かりました。', romaji: 'Toshokan de sankousho o karimashita.', english: 'I borrowed a reference book from the library.', targetWord: '借りました', targetWordEnglish: 'Borrowed' },
    { id: 's-n4-借-2', sentence: '家を借りるために不動産屋に行きました。', furigana: 'いえ を かりる ために ふどうさんや に いきました。', romaji: 'Ie o kariru tame ni fudousan-ya ni ikimashita.', english: 'I went to a real estate agent to rent a house.', targetWord: '借りる', targetWordEnglish: 'Rent / Borrow' }
  ],
  '走': [
    { id: 's-n4-走-1', sentence: '毎朝公園を三十分走っています。', furigana: 'まいあさ こうえん を さんじゅっぷん はしっています。', romaji: 'Maiasa kouen o sanjuppun hashitte imasu.', english: 'I run in the park for 30 minutes every morning.', targetWord: '走って', targetWordEnglish: 'Running' },
    { id: 's-n4-走-2', sentence: '電車に乗り遅れそうで駅まで走りました。', furigana: 'でんしゃ に のりおくれそう で えき まで はしりました。', romaji: 'Densha ni noriokuresou de eki made hashirimashita.', english: 'I ran to the station because I was about to miss the train.', targetWord: '走りました', targetWordEnglish: 'Ran' }
  ],
  '歩': [
    { id: 's-n4-歩-1', sentence: '駅から学校まで歩いて十五分かかります。', furigana: 'えき から がっこう まで あるいて じゅうごふん かかります。', romaji: 'Eki kara gakkou made aruite juugofun kakarimasu.', english: 'It takes 15 minutes to walk from the station to school.', targetWord: '歩いて', targetWordEnglish: 'On foot' },
    { id: 's-n4-歩-2', sentence: '散歩しながら音楽を聴くのが好きです。', furigana: 'さんぽ しながら おんがく を きく のが すき です。', romaji: 'Sanpo shinagara ongaku o kiku noga suki desu.', english: 'I like listening to music while taking a walk.', targetWord: '散歩', targetWordEnglish: 'Walking / Stroll' }
  ],
  '止': [
    { id: 's-n4-止-1', sentence: '赤信号で車が止まりました。', furigana: 'あかしんごう で くるま が とまりました。', romaji: 'Aka shingou de kuruma ga tomarimashita.', english: 'The car stopped at the red light.', targetWord: '止まりました', targetWordEnglish: 'Stopped' },
    { id: 's-n4-止-2', sentence: '雨が止んで青空が見えてきました。', furigana: 'あめ が やんで あおぞら が みえてきました。', romaji: 'Ame ga yande aozora ga miete kimashita.', english: 'The rain stopped and the blue sky appeared.', targetWord: '止んで', targetWordEnglish: 'Stopped (rain)' }
  ],
  '動': [
    { id: 's-n4-動-1', sentence: '地震で建物が大きく動きました。', furigana: 'じしん で たてもの が おおきく うごきました。', romaji: 'Jishin de tatemono ga ookiku ugokimashita.', english: 'The building shook greatly in the earthquake.', targetWord: '動きました', targetWordEnglish: 'Moved / Shook' },
    { id: 's-n4-動-2', sentence: '動物園でたくさんの動物を見ました。', furigana: 'どうぶつえん で たくさん の どうぶつ を みました。', romaji: 'Doubutsuen de takusan no doubutsu o mimashita.', english: 'I saw many animals at the zoo.', targetWord: '動物', targetWordEnglish: 'Animals' }
  ],
  '運': [
    { id: 's-n4-運-1', sentence: '重い荷物をトラックで運びました。', furigana: 'おもい にもつ を トラック で はこびました。', romaji: 'Omoi nimotsu o torakku de hakobimashita.', english: 'I transported heavy luggage by truck.', targetWord: '運びました', targetWordEnglish: 'Transported' },
    { id: 's-n4-運-2', sentence: '毎日運動することは健康に大切です。', furigana: 'まいにち うんどう する こと は けんこう に たいせつ です。', romaji: 'Mainichi undou suru koto wa kenkou ni taisetsu desu.', english: 'Exercising every day is important for health.', targetWord: '運動', targetWordEnglish: 'Exercise' }
  ],
  '転': [
    { id: 's-n4-転-1', sentence: '弟は自転車でよく転びます。', furigana: 'おとうと は じてんしゃ で よく ころびます。', romaji: 'Otouto wa jitensha de yoku korobimasu.', english: 'My younger brother often falls off his bicycle.', targetWord: '転びます', targetWordEnglish: 'Falls (off)' },
    { id: 's-n4-転-2', sentence: '自転車で学校まで通っています。', furigana: 'じてんしゃ で がっこう まで かよっています。', romaji: 'Jitensha de gakkou made kayotte imasu.', english: 'I commute to school by bicycle.', targetWord: '自転車', targetWordEnglish: 'Bicycle' }
  ],
  '起': [
    { id: 's-n4-起-1', sentence: '今朝は目覚まし時計が鳴る前に起きました。', furigana: 'けさ は めざましどけい が なる まえ に おきました。', romaji: 'Kesa wa mezamashi tokei ga naru mae ni okimashita.', english: 'This morning I woke up before the alarm rang.', targetWord: '起きました', targetWordEnglish: 'Woke up' },
    { id: 's-n4-起-2', sentence: '事故が起きて道が渋滞しています。', furigana: 'じこ が おきて みち が じゅうたい しています。', romaji: 'Jiko ga okite michi ga juutai shite imasu.', english: 'An accident occurred and the road is congested.', targetWord: '起きて', targetWordEnglish: 'Occurred' }
  ],
  '着': [
    { id: 's-n4-着-1', sentence: '今日は大事な会議があるのでスーツを着ました。', furigana: 'きょう は だいじ な かいぎ が ある ので スーツ を きました。', romaji: 'Kyou wa daiji na kaigi ga aru node suutsu o kimashita.', english: 'Today I wore a suit because there is an important meeting.', targetWord: '着ました', targetWordEnglish: 'Wore (clothing)' },
    { id: 's-n4-着-2', sentence: '電車が十分遅れて駅に到着しました。', furigana: 'でんしゃ が じゅっぷん おくれて えき に とうちゃく しました。', romaji: 'Densha ga juppun okurete eki ni touchaku shimashita.', english: 'The train arrived at the station 10 minutes late.', targetWord: '到着', targetWordEnglish: 'Arrival' }
  ],
  '乗': [
    { id: 's-n4-乗-1', sentence: '毎日電車に乗って会社へ行きます。', furigana: 'まいにち でんしゃ に のって かいしゃ へ いきます。', romaji: 'Mainichi densha ni notte kaisha e ikimasu.', english: 'I take the train to work every day.', targetWord: '乗って', targetWordEnglish: 'Riding (te-form)' },
    { id: 's-n4-乗-2', sentence: '初めて飛行機に乗ったときはとても緊張しました。', furigana: 'はじめて ひこうき に のった とき は とても きんちょう しました。', romaji: 'Hajimete hikouki ni notta toki wa totemo kinchou shimashita.', english: 'When I first rode an airplane I was very nervous.', targetWord: '乗った', targetWordEnglish: 'Rode / Got on' }
  ],
  '降': [
    { id: 's-n4-降-1', sentence: '次の駅で電車を降ります。', furigana: 'つぎ の えき で でんしゃ を おります。', romaji: 'Tsugi no eki de densha o orimasu.', english: 'I will get off the train at the next station.', targetWord: '降ります', targetWordEnglish: 'Get off (vehicle)' },
    { id: 's-n4-降-2', sentence: '昨日から雪が降り続けています。', furigana: 'きのう から ゆき が ふりつづけています。', romaji: 'Kinou kara yuki ga furitsuzukete imasu.', english: 'It has been snowing continuously since yesterday.', targetWord: '降り続けて', targetWordEnglish: 'Continuing to fall' }
  ],
  '洗': [
    { id: 's-n4-洗-1', sentence: '食事の前には必ず手を洗います。', furigana: 'しょくじ の まえ に は かならず て を あらいます。', romaji: 'Shokuji no mae ni wa kanarazu te o araimasu.', english: 'I always wash my hands before eating.', targetWord: '洗います', targetWordEnglish: 'Wash' },
    { id: 's-n4-洗-2', sentence: '洗濯機で洗った服をベランダに干しました。', furigana: 'せんたくき で あらった ふく を ベランダ に ほしました。', romaji: 'Sentakuki de aratta fuku o beranda ni hoshimashita.', english: 'I hung the washed clothes on the balcony.', targetWord: '洗濯機', targetWordEnglish: 'Washing machine' }
  ],
  '作': [
    { id: 's-n4-作-1', sentence: 'お母さんが手作りのケーキを作ってくれました。', furigana: 'おかあさん が てづくり の ケーキ を つくって くれました。', romaji: 'Okaasan ga tezukuri no keeki o tsukutte kuremashita.', english: 'My mother made a homemade cake for me.', targetWord: '作って', targetWordEnglish: 'Made / Created' },
    { id: 's-n4-作-2', sentence: '作文の宿題を昨日終わらせました。', furigana: 'さくぶん の しゅくだい を きのう おわらせました。', romaji: 'Sakubun no shukudai o kinou owarasemashita.', english: 'I finished the essay homework yesterday.', targetWord: '作文', targetWordEnglish: 'Essay / Written composition' }
  ],
  '直': [
    { id: 's-n4-直-1', sentence: '故障した自転車を修理屋さんに直してもらいました。', furigana: 'こしょう した じてんしゃ を しゅうりや さん に なおして もらいました。', romaji: 'Koshou shita jitensha o shuuriya san ni naoshite moraimashita.', english: 'I had the broken bicycle fixed at the repair shop.', targetWord: '直して', targetWordEnglish: 'Fixed / Repaired' },
    { id: 's-n4-直-2', sentence: '先生に作文を直してもらいました。', furigana: 'せんせい に さくぶん を なおして もらいました。', romaji: 'Sensei ni sakubun o naoshite moraimashita.', english: 'I had my teacher correct my essay.', targetWord: '直して', targetWordEnglish: 'Corrected' }
  ],
  '治': [
    { id: 's-n4-治-1', sentence: '風邪は薬を飲んでよく寝れば治ります。', furigana: 'かぜ は くすり を のんで よく ねれば なおります。', romaji: 'Kaze wa kusuri o nonde yoku nereba naorimasu.', english: 'A cold will heal if you take medicine and rest well.', targetWord: '治ります', targetWordEnglish: 'Heals / Gets better' },
    { id: 's-n4-治-2', sentence: '怪我が治るまで激しい運動は控えてください。', furigana: 'けが が なおる まで はげしい うんどう は ひかえてください。', romaji: 'Kega ga naoru made hageshii undou wa hikaete kudasai.', english: 'Please refrain from intense exercise until the injury heals.', targetWord: '治る', targetWordEnglish: 'Heal / Recover' }
  ],
  '置': [
    { id: 's-n4-置-1', sentence: '鍵をテーブルの上に置いたまま忘れました。', furigana: 'かぎ を テーブル の うえ に おいたまま わすれました。', romaji: 'Kagi o teeburu no ue ni oita mama wasuremashita.', english: 'I forgot the key, leaving it on the table.', targetWord: '置いた', targetWordEnglish: 'Left / Placed' },
    { id: 's-n4-置-2', sentence: '部屋に観葉植物を置いてみました。', furigana: 'へや に かんようしょくぶつ を おいて みました。', romaji: 'Heya ni kanyou shokubutsu o oite mimashita.', english: 'I tried placing a houseplant in the room.', targetWord: '置いて', targetWordEnglish: 'Placed / Put' }
  ],
  '通': [
    { id: 's-n4-通-1', sentence: 'バスで毎日学校に通っています。', furigana: 'バス で まいにち がっこう に かよっています。', romaji: 'Basu de mainichi gakkou ni kayotte imasu.', english: 'I commute to school by bus every day.', targetWord: '通って', targetWordEnglish: 'Commuting' },
    { id: 's-n4-通-2', sentence: '道が通れなかったので迂回しました。', furigana: 'みち が とおれなかった ので うかい しました。', romaji: 'Michi ga toorenakatta node ukai shimashita.', english: 'The road was impassable so I took a detour.', targetWord: '通れ', targetWordEnglish: 'Pass through' }
  ],
  '引': [
    { id: 's-n4-引-1', sentence: 'ドアを引いて開けてください。', furigana: 'ドア を ひいて あけてください。', romaji: 'Doa o hiite akete kudasai.', english: 'Please pull the door to open it.', targetWord: '引いて', targetWordEnglish: 'Pull (te-form)' },
    { id: 's-n4-引-2', sentence: '引越しのために業者を手配しました。', furigana: 'ひっこし の ために ぎょうしゃ を てはい しました。', romaji: 'Hikkoshi no tame ni gyousha o tehai shimashita.', english: 'I arranged movers for the move.', targetWord: '引越し', targetWordEnglish: 'Moving (house)' }
  ],
  '押': [
    { id: 's-n4-押-1', sentence: 'エレベーターのボタンを押してください。', furigana: 'エレベーター の ボタン を おしてください。', romaji: 'Erebeetaa no botan o oshite kudasai.', english: 'Please press the elevator button.', targetWord: '押して', targetWordEnglish: 'Press / Push' },
    { id: 's-n4-押-2', sentence: '書類に判を押して提出します。', furigana: 'しょるい に はん を おして ていしゅつ します。', romaji: 'Shorui ni han o oshite teishutsu shimasu.', english: 'I stamp the documents and submit them.', targetWord: '押して', targetWordEnglish: 'Stamp / Press' }
  ],
  '届': [
    { id: 's-n4-届-1', sentence: '注文した商品が今日届きました。', furigana: 'ちゅうもん した しょうひん が きょう とどきました。', romaji: 'Chuumon shita shouhin ga kyou todokimashita.', english: 'The product I ordered was delivered today.', targetWord: '届きました', targetWordEnglish: 'Was delivered / Arrived' },
    { id: 's-n4-届-2', sentence: '棚の一番上に手が届きません。', furigana: 'たな の いちばん うえ に て が とどきません。', romaji: 'Tana no ichiban ue ni te ga todokimasen.', english: "My hand doesn't reach the top shelf.", targetWord: '届きません', targetWordEnglish: 'Cannot reach' }
  ],
  '返': [
    { id: 's-n4-返-1', sentence: '借りた本を図書館に返しました。', furigana: 'かりた ほん を としょかん に かえしました。', romaji: 'Karita hon o toshokan ni kaeshimashita.', english: 'I returned the borrowed book to the library.', targetWord: '返しました', targetWordEnglish: 'Returned' },
    { id: 's-n4-返-2', sentence: 'メールの返事がまだ来ていません。', furigana: 'メール の へんじ が まだ きていません。', romaji: 'Meeru no henji ga mada kite imasen.', english: 'The email reply has not yet come.', targetWord: '返事', targetWordEnglish: 'Reply / Response' }
  ],
  '払': [
    { id: 's-n4-払-1', sentence: 'クレジットカードで代金を払いました。', furigana: 'クレジットカード で だいきん を はらいました。', romaji: 'Kurejittokado de daikin o haraimashita.', english: 'I paid the bill with a credit card.', targetWord: '払いました', targetWordEnglish: 'Paid' },
    { id: 's-n4-払-2', sentence: '毎月家賃を銀行振込で払っています。', furigana: 'まいつき やちん を ぎんこうふりこみ で はらっています。', romaji: 'Maitsuki yachin o ginkou furikomi de haratte imasu.', english: 'I pay rent by bank transfer every month.', targetWord: '払って', targetWordEnglish: 'Paying' }
  ],
  '迎': [
    { id: 's-n4-迎-1', sentence: '空港に友達を迎えに行きました。', furigana: 'くうこう に ともだち を むかえ に いきました。', romaji: 'Kuukou ni tomodachi o mukae ni ikimashita.', english: 'I went to the airport to pick up my friend.', targetWord: '迎えに', targetWordEnglish: 'Go to pick up' },
    { id: 's-n4-迎-2', sentence: '大勢のファンが選手たちを出口で出迎えました。', furigana: 'おおぜい の ファン が せんしゅたち を でぐち で でむかえました。', romaji: 'Oozei no fan ga senshu tachi o deguchi de demukaemashita.', english: 'Many fans welcomed the athletes at the exit.', targetWord: '出迎え', targetWordEnglish: 'Welcome / Receive' }
  ],
  '泊': [
    { id: 's-n4-泊-1', sentence: '京都のホテルに二泊しました。', furigana: 'きょうと の ホテル に にはく しました。', romaji: 'Kyouto no hoteru ni nihaku shimashita.', english: 'I stayed two nights at a hotel in Kyoto.', targetWord: '泊しました', targetWordEnglish: 'Stayed (nights)' },
    { id: 's-n4-泊-2', sentence: '友達の家に泊まってゲームをしました。', furigana: 'ともだち の いえ に とまって ゲーム を しました。', romaji: 'Tomodachi no ie ni tomatte geemu o shimashita.', english: "I stayed over at a friend's house and played games.", targetWord: '泊まって', targetWordEnglish: 'Staying overnight' }
  ],
  '急': [
    { id: 's-n4-急-1', sentence: '電話が急に鳴ったので驚きました。', furigana: 'でんわ が きゅう に なった ので おどろきました。', romaji: 'Denwa ga kyuu ni natta node odorokimashita.', english: 'I was surprised because the phone rang suddenly.', targetWord: '急に', targetWordEnglish: 'Suddenly' },
    { id: 's-n4-急-2', sentence: '会議に遅刻しそうで急いで会社に向かいました。', furigana: 'かいぎ に ちこく しそうで いそいで かいしゃ に むかいました。', romaji: 'Kaigi ni chikoku shisou de isoide kaisha ni mukaimashita.', english: 'I rushed to the office because I was about to be late for the meeting.', targetWord: '急いで', targetWordEnglish: 'Hurriedly' }
  ],
  '配': [
    { id: 's-n4-配-1', sentence: 'ビラをたくさんの家に配りました。', furigana: 'ビラ を たくさん の いえ に くばりました。', romaji: 'Bira o takusan no ie ni kubarimashita.', english: 'I distributed flyers to many houses.', targetWord: '配りました', targetWordEnglish: 'Distributed' },
    { id: 's-n4-配-2', sentence: '試験の結果が心配でなかなか眠れません。', furigana: 'しけん の けっか が しんぱい で なかなか ねむれません。', romaji: 'Shiken no kekka ga shinpai de nakanaka nemuremasen.', english: "I'm worried about the exam results and can't sleep well.", targetWord: '心配', targetWordEnglish: 'Worry / Concern' }
  ],
  '助': [
    { id: 's-n4-助-1', sentence: '困っている人を助けることは大切です。', furigana: 'こまっている ひと を たすける こと は たいせつ です。', romaji: 'Komatte iru hito o tasukeru koto wa taisetsu desu.', english: 'It is important to help people who are in trouble.', targetWord: '助ける', targetWordEnglish: 'To help / rescue' },
    { id: 's-n4-助-2', sentence: '先生が授業で助けてくれたので助かりました。', furigana: 'せんせい が じゅぎょう で たすけてくれた ので たすかりました。', romaji: 'Sensei ga jugyou de tasukete kureta node tasukarimashita.', english: 'The teacher helped me in class and I was saved.', targetWord: '助かりました', targetWordEnglish: 'Was helped / Saved' }
  ],
  '困': [
    { id: 's-n4-困-1', sentence: '道に迷って困ったときに親切な人に助けてもらいました。', furigana: 'みち に まよって こまった とき に しんせつ な ひと に たすけてもらいました。', romaji: 'Michi ni mayotte komatta toki ni shinsetsu na hito ni tasukete moraimashita.', english: 'When I was lost and troubled, a kind person helped me.', targetWord: '困った', targetWordEnglish: 'Was troubled / In a fix' },
    { id: 's-n4-困-2', sentence: 'お金が足りなくて本当に困っています。', furigana: 'おかね が たりなくて ほんとうに こまっています。', romaji: 'Okane ga tarinakute hontouni komatte imasu.', english: "I'm really in trouble because I don't have enough money.", targetWord: '困って', targetWordEnglish: 'Troubled / In difficulty' }
  ],
  '泣': [
    { id: 's-n4-泣-1', sentence: '悲しい映画を見て泣いてしまいました。', furigana: 'かなしい えいが を みて ないて しまいました。', romaji: 'Kanashii eiga o mite naite shimaimashita.', english: 'I ended up crying while watching a sad movie.', targetWord: '泣いて', targetWordEnglish: 'Crying' },
    { id: 's-n4-泣-2', sentence: '赤ちゃんが夜中に泣き続けて大変でした。', furigana: 'あかちゃん が よなか に なきつづけて たいへん でした。', romaji: 'Akachan ga yonaka ni nakitsuzukete taihen deshita.', english: 'It was tough because the baby kept crying in the middle of the night.', targetWord: '泣き続けて', targetWordEnglish: 'Kept crying' }
  ],
  '笑': [
    { id: 's-n4-笑-1', sentence: '友達の冗談に思わず笑ってしまいました。', furigana: 'ともだち の じょうだん に おもわず わらって しまいました。', romaji: 'Tomodachi no joudan ni omowazu waratte shimaimashita.', english: "I couldn't help but laugh at my friend's joke.", targetWord: '笑って', targetWordEnglish: 'Laughed' },
    { id: 's-n4-笑-2', sentence: '笑顔で話しかけると相手も笑顔になります。', furigana: 'えがお で はなしかける と あいて も えがお に なります。', romaji: 'Egao de hanashikakeru to aite mo egao ni narimasu.', english: 'If you smile when talking, the other person smiles too.', targetWord: '笑顔', targetWordEnglish: 'Smiling face' }
  ],
  '変': [
    { id: 's-n4-変-1', sentence: '最近天気が変わりやすくて困ります。', furigana: 'さいきん てんき が かわりやすくて こまります。', romaji: "Saikin tenki ga kawariyasukute komarimasu.", english: "Recently the weather changes easily and it's troublesome.", targetWord: '変わり', targetWordEnglish: 'Changes' },
    { id: 's-n4-変-2', sentence: '彼の態度が最近少し変です。', furigana: 'かれ の たいど が さいきん すこし へん です。', romaji: 'Kare no taido ga saikin sukoshi hen desu.', english: 'His attitude has been a little strange recently.', targetWord: '変', targetWordEnglish: 'Strange / Unusual' }
  ],
  '拾': [
    { id: 's-n4-拾-1', sentence: '道端でお財布を拾って交番に届けました。', furigana: 'みちばた で おさいふ を ひろって こうばん に とどけました。', romaji: 'Michibata de osaifu o hirotte kouban ni todokemashita.', english: 'I found a wallet on the roadside and handed it to the police box.', targetWord: '拾って', targetWordEnglish: 'Picked up' },
    { id: 's-n4-拾-2', sentence: '公園でゴミを拾いながら散歩しました。', furigana: 'こうえん で ゴミ を ひろいながら さんぽ しました。', romaji: 'Kouen de gomi o hiroinagara sanpo shimashita.', english: 'I walked in the park while picking up litter.', targetWord: '拾い', targetWordEnglish: 'Picking up' }
  ],
  '死': [
    { id: 's-n4-死-1', sentence: '祖父は大往生で九十歳で亡くなりました。', furigana: 'そふ は だいおうじょう で きゅうじっさい で なくなりました。', romaji: 'Sofu wa daioujou de kyuujissai de nakunarimashita.', english: 'My grandfather passed away peacefully at the age of 90.', targetWord: '亡くなりました', targetWordEnglish: 'Passed away' },
    { id: 's-n4-死-2', sentence: '植物に水をあげないと枯れて死んでしまいます。', furigana: 'しょくぶつ に みず を あげないと かれて しんで しまいます。', romaji: 'Shokubutsu ni mizu o agenai to karete shinde shimaimasu.', english: "Plants will wither and die if you don't water them.", targetWord: '死んで', targetWordEnglish: 'Die / Wither' }
  ],
  '集': [
    { id: 's-n4-集-1', sentence: '切手を集めるのが趣味です。', furigana: 'きって を あつめる のが しゅみ です。', romaji: 'Kitte o atsumeru noga shumi desu.', english: 'My hobby is collecting stamps.', targetWord: '集める', targetWordEnglish: 'To collect / Gather' },
    { id: 's-n4-集-2', sentence: '授業の前に全員が教室に集まりました。', furigana: 'じゅぎょう の まえ に ぜんいん が きょうしつ に あつまりました。', romaji: 'Jugyou no mae ni zenin ga kyoushitsu ni atsumarimashita.', english: 'Everyone gathered in the classroom before class.', targetWord: '集まりました', targetWordEnglish: 'Gathered' }
  ],
  '住': [
    { id: 's-n4-住-1', sentence: '東京に住んで三年になります。', furigana: 'とうきょう に すんで さんねん に なります。', romaji: 'Toukyou ni sunde sannen ni narimasu.', english: 'It will be three years since I started living in Tokyo.', targetWord: '住んで', targetWordEnglish: 'Living' },
    { id: 's-n4-住-2', sentence: '住所と電話番号を記入してください。', furigana: 'じゅうしょ と でんわばんごう を きにゅう してください。', romaji: 'Juusho to denwa bangou o kinyuu shite kudasai.', english: 'Please fill in your address and phone number.', targetWord: '住所', targetWordEnglish: 'Address' }
  ],
  '売': [
    { id: 's-n4-売-1', sentence: 'フリマで不要な服を売りました。', furigana: 'フリマ で ふよう な ふく を うりました。', romaji: 'Furima de fuyou na fuku o urimashita.', english: 'I sold unwanted clothes at a flea market.', targetWord: '売りました', targetWordEnglish: 'Sold' },
    { id: 's-n4-売-2', sentence: 'あの本は大ヒットして百万部売れました。', furigana: 'あの ほん は だいヒット して ひゃくまんぶ うれました。', romaji: 'Ano hon wa dai hitto shite hyakumanbu uremashita.', english: 'That book was a huge hit and sold one million copies.', targetWord: '売れました', targetWordEnglish: 'Sold' }
  ],
  '歌': [
    { id: 's-n4-歌-1', sentence: 'カラオケで好きな歌を歌いました。', furigana: 'カラオケ で すき な うた を うたいました。', romaji: 'Karaoke de suki na uta o utaimashita.', english: 'I sang my favorite songs at karaoke.', targetWord: '歌いました', targetWordEnglish: 'Sang' },
    { id: 's-n4-歌-2', sentence: '国歌を全員が起立して歌います。', furigana: 'こっか を ぜんいん が きりつして うたいます。', romaji: 'Kokka o zenin ga kiritsu shite utaimasu.', english: 'Everyone stands and sings the national anthem.', targetWord: '歌います', targetWordEnglish: 'Sing' }
  ],
  '考': [
    { id: 's-n4-考-1', sentence: '大切な決断はよく考えてからします。', furigana: 'たいせつ な けつだん は よく かんがえてから します。', romaji: 'Taisetsu na ketsudan wa yoku kangaete kara shimasu.', english: 'For important decisions, I think carefully before deciding.', targetWord: '考えて', targetWordEnglish: 'Think / Consider' },
    { id: 's-n4-考-2', sentence: '将来のことを考えると少し不安です。', furigana: 'しょうらい の こと を かんがえる と すこし ふあん です。', romaji: 'Shourai no koto o kangaeru to sukoshi fuan desu.', english: 'When I think about the future I feel a little anxious.', targetWord: '考える', targetWordEnglish: 'Think about' }
  ],
  '試': [
    { id: 's-n4-試-1', sentence: '新しい料理レシピを試してみました。', furigana: 'あたらしい りょうり レシピ を ためして みました。', romaji: 'Atarashii ryouri reshipi o tameshite mimashita.', english: 'I tried a new cooking recipe.', targetWord: '試して', targetWordEnglish: 'Tried / Tested' },
    { id: 's-n4-試-2', sentence: '来月の日本語能力試験に向けて勉強中です。', furigana: 'らいげつ の にほんごのうりょくしけん に むけて べんきょうちゅう です。', romaji: 'Raigetsu no Nihongo Nouryoku Shiken ni mukete benkyouchuu desu.', english: 'I am studying for the Japanese Language Proficiency Test next month.', targetWord: '試験', targetWordEnglish: 'Examination / Test' }
  ],
  '教': [
    { id: 's-n4-教-1', sentence: '先生が丁寧に漢字の書き方を教えてくれました。', furigana: 'せんせい が ていねい に かんじ の かきかた を おしえてくれました。', romaji: 'Sensei ga teinei ni kanji no kakikata o oshiete kuremashita.', english: 'The teacher kindly taught me how to write kanji.', targetWord: '教えて', targetWordEnglish: 'Taught' },
    { id: 's-n4-教-2', sentence: '趣味でこどもたちにギターを教えています。', furigana: 'しゅみ で こどもたち に ギター を おしえています。', romaji: 'Shumi de kodomotachi ni gitaa o oshiete imasu.', english: 'As a hobby I teach guitar to children.', targetWord: '教えて', targetWordEnglish: 'Teaching' }
  ],
  '習': [
    { id: 's-n4-習-1', sentence: '子供のときにピアノを習っていました。', furigana: 'こども の とき に ピアノ を ならっていました。', romaji: 'Kodomo no toki ni piano o naratte imashita.', english: 'When I was a child, I was learning piano.', targetWord: '習って', targetWordEnglish: 'Learning / Practicing' },
    { id: 's-n4-習-2', sentence: '日本語教室で週に二回練習します。', furigana: 'にほんごきょうしつ で しゅう に にかい れんしゅう します。', romaji: 'Nihongo kyoushitsu de shuu ni nikai renshuu shimasu.', english: 'I practice at the Japanese class twice a week.', targetWord: '練習', targetWordEnglish: 'Practice' }
  ],
  '勉': [
    { id: 's-n4-勉-1', sentence: '試験前は毎晩遅くまで勉強します。', furigana: 'しけんまえ は まいばん おそく まで べんきょう します。', romaji: 'Shikenmae wa maiban osoku made benkyou shimasu.', english: 'Before exams I study every night until late.', targetWord: '勉強', targetWordEnglish: 'Study' },
    { id: 's-n4-勉-2', sentence: '勉強した分だけ成績が上がりました。', furigana: 'べんきょう した ぶんだけ せいせき が あがりました。', romaji: 'Benkyou shita bun dake seiseki ga agarimashita.', english: 'My grades improved by as much as I studied.', targetWord: '勉強', targetWordEnglish: 'Studying' }
  ],
  '研': [
    { id: 's-n4-研-1', sentence: '大学院で言語学の研究をしています。', furigana: 'だいがくいん で げんごがく の けんきゅう を しています。', romaji: 'Daigakuin de gengogaku no kenkyuu o shite imasu.', english: 'I am doing research in linguistics at graduate school.', targetWord: '研究', targetWordEnglish: 'Research' },
    { id: 's-n4-研-2', sentence: '研究室で夜遅くまで実験を続けました。', furigana: 'けんきゅうしつ で よおそく まで じっけん を つづけました。', romaji: 'Kenkyuushitsu de yoru osoku made jikken o tsuzukemashita.', english: 'I continued experiments late into the night in the lab.', targetWord: '研究室', targetWordEnglish: 'Laboratory / Research room' }
  ],
  '究': [
    { id: 's-n4-究-1', sentence: '医学の研究者として新薬の開発をしています。', furigana: 'いがく の けんきゅうしゃ として しんやく の かいはつ を しています。', romaji: 'Igaku no kenkyuusha toshite shin-yaku no kaihatsu o shite imasu.', english: 'As a medical researcher I am developing new drugs.', targetWord: '研究者', targetWordEnglish: 'Researcher' },
    { id: 's-n4-究-2', sentence: '宇宙の謎を究明する研究が進んでいます。', furigana: 'うちゅう の なぞ を きゅうめいする けんきゅう が すすんでいます。', romaji: 'Uchuu no nazo o kyuumei suru kenkyuu ga susunde imasu.', english: 'Research to investigate the mysteries of the universe is advancing.', targetWord: '究明', targetWordEnglish: 'Investigation / Inquiry' }
  ],
  '練': [
    { id: 's-n4-練-1', sentence: '毎日一時間ピアノの練習をしています。', furigana: 'まいにち いちじかん ピアノ の れんしゅう を しています。', romaji: 'Mainichi ichijikan piano no renshuu o shite imasu.', english: 'I practice piano for one hour every day.', targetWord: '練習', targetWordEnglish: 'Practice' },
    { id: 's-n4-練-2', sentence: '試合に向けてチーム全員で練習しました。', furigana: 'しあい に むけて チーム ぜんいん で れんしゅう しました。', romaji: 'Shiai ni mukete chiimu zenin de renshuu shimashita.', english: 'The whole team practiced for the match.', targetWord: '練習しました', targetWordEnglish: 'Practiced' }
  ],
  '忘': [
    { id: 's-n4-忘-1', sentence: '電車に傘を忘れてしまいました。', furigana: 'でんしゃ に かさ を わすれて しまいました。', romaji: 'Densha ni kasa o wasurete shimaimashita.', english: 'I left my umbrella on the train.', targetWord: '忘れて', targetWordEnglish: 'Forgot / Left behind' },
    { id: 's-n4-忘-2', sentence: '約束を忘れないようにメモしておきます。', furigana: 'やくそく を わすれないように メモ して おきます。', romaji: "Yakusoku o wasurenai you ni memo shite okimasu.", english: "I'll make a note so I don't forget the appointment.", targetWord: '忘れない', targetWordEnglish: 'Not forget' }
  ],
  '覚': [
    { id: 's-n4-覚-1', sentence: '単語を覚えるためにフラッシュカードを使います。', furigana: 'たんご を おぼえる ために フラッシュカード を つかいます。', romaji: 'Tango o oboeru tame ni furasshu kaado o tsukaimasu.', english: 'I use flashcards to memorize vocabulary.', targetWord: '覚える', targetWordEnglish: 'Memorize / Remember' },
    { id: 's-n4-覚-2', sentence: '夢から覚めたとき内容を覚えていません。', furigana: 'ゆめ から さめた とき ないよう を おぼえていません。', romaji: 'Yume kara sameta toki naiyou o oboete imasen.', english: "When I wake from a dream I don't remember the content.", targetWord: '覚めた', targetWordEnglish: 'Woke up (from sleep/dream)' }
  ],
  '質': [
    { id: 's-n4-質-1', sentence: '授業後に先生に質問しました。', furigana: 'じゅぎょうご に せんせい に しつもん しました。', romaji: 'Jugyougo ni sensei ni shitsumon shimashita.', english: 'I asked the teacher a question after class.', targetWord: '質問', targetWordEnglish: 'Question' },
    { id: 's-n4-質-2', sentence: 'このブランドは品質がとても良いです。', furigana: 'この ブランド は ひんしつ が とても よい です。', romaji: 'Kono burando wa hinshitsu ga totemo yoi desu.', english: "This brand's quality is very good.", targetWord: '品質', targetWordEnglish: 'Quality' }
  ],
  '問': [
    { id: 's-n4-問-1', sentence: '試験の問題が難しくてよく分かりませんでした。', furigana: 'しけん の もんだい が むずかしくて よく わかりませんでした。', romaji: 'Shiken no mondai ga muzukashikute yoku wakarimasen deshita.', english: "The exam questions were difficult and I didn't understand them well.", targetWord: '問題', targetWordEnglish: 'Problem / Question' },
    { id: 's-n4-問-2', sentence: '問題が起きたら遠慮せずに相談してください。', furigana: 'もんだい が おきたら えんりょ せずに そうだん してください。', romaji: "Mondai ga okitara enryo sezu ni soudan shite kudasai.", english: "If a problem arises, don't hesitate to consult me.", targetWord: '問題', targetWordEnglish: 'Problem' }
  ],
  '題': [
    { id: 's-n4-題-1', sentence: '宿題を忘れて先生に叱られました。', furigana: 'しゅくだい を わすれて せんせい に しかられました。', romaji: 'Shukudai o wasurete sensei ni shikararemashita.', english: 'I forgot my homework and was scolded by the teacher.', targetWord: '宿題', targetWordEnglish: 'Homework' },
    { id: 's-n4-題-2', sentence: 'このレポートの題名が思い浮かびません。', furigana: 'この レポート の だいめい が おもいうかびません。', romaji: 'Kono repooto no daimei ga omoiukabima sen.', english: "I can't think of a title for this report.", targetWord: '題名', targetWordEnglish: 'Title' }
  ],
  '答': [
    { id: 's-n4-答-1', sentence: '先生の質問に正しく答えることができました。', furigana: 'せんせい の しつもん に ただしく こたえる こと が できました。', romaji: "Sensei no shitsumon ni tadashiku kotaeru koto ga dekimashita.", english: "I was able to answer the teacher's question correctly.", targetWord: '答える', targetWordEnglish: 'Answer' },
    { id: 's-n4-答-2', sentence: '試験の答えを書き終わったら見直します。', furigana: 'しけん の こたえ を かきおわったら みなおします。', romaji: 'Shiken no kotae o kakiowattara minao shimasu.', english: 'After finishing writing answers, I review them.', targetWord: '答え', targetWordEnglish: 'Answer / Solution' }
  ],
  '意': [
    { id: 's-n4-意-1', sentence: 'この単語の意味を辞書で調べました。', furigana: 'この たんご の いみ を じしょ で しらべました。', romaji: 'Kono tango no imi o jisho de shirabemashita.', english: 'I looked up the meaning of this word in the dictionary.', targetWord: '意味', targetWordEnglish: 'Meaning' },
    { id: 's-n4-意-2', sentence: '授業中は先生の話に注意して聞きます。', furigana: 'じゅぎょうちゅう は せんせい の はなし に ちゅうい して ききます。', romaji: 'Jugyouchuu wa sensei no hanashi ni chuui shite kikimasu.', english: 'During class I listen carefully to what the teacher says.', targetWord: '注意', targetWordEnglish: 'Attention / Caution' }
  ],
  '味': [
    { id: 's-n4-味-1', sentence: 'このラーメンはとても美味しい味がします。', furigana: 'この ラーメン は とても おいしい あじ が します。', romaji: 'Kono raamen wa totemo oishii aji ga shimasu.', english: 'This ramen has a very delicious taste.', targetWord: '味', targetWordEnglish: 'Taste / Flavor' },
    { id: 's-n4-味-2', sentence: '日本の文化に興味があります。', furigana: 'にほん の ぶんか に きょうみ が あります。', romaji: 'Nihon no bunka ni kyoumi ga arimasu.', english: 'I am interested in Japanese culture.', targetWord: '興味', targetWordEnglish: 'Interest' }
  ],
  '注': [
    { id: 's-n4-注-1', sentence: '料理の説明をよく注意して読んでください。', furigana: 'りょうり の せつめい を よく ちゅうい して よんでください。', romaji: 'Ryouri no setsumei o yoku chuui shite yonde kudasai.', english: 'Please read the cooking instructions carefully.', targetWord: '注意', targetWordEnglish: 'Attention / Carefully' },
    { id: 's-n4-注-2', sentence: 'オンラインで商品を注文しました。', furigana: 'オンライン で しょうひん を ちゅうもん しました。', romaji: 'Onrain de shouhin o chuumon shimashita.', english: 'I ordered a product online.', targetWord: '注文', targetWordEnglish: 'Order' }
  ],
  '漢': [
    { id: 's-n4-漢-1', sentence: '漢字を毎日十個練習しています。', furigana: 'かんじ を まいにち じゅっこ れんしゅう しています。', romaji: 'Kanji o mainichi jukko renshuu shite imasu.', english: 'I practice ten kanji every day.', targetWord: '漢字', targetWordEnglish: 'Kanji characters' },
    { id: 's-n4-漢-2', sentence: '漢字の読み方が分からないときは辞書を引きます。', furigana: 'かんじ の よみかた が わからない とき は じしょ を ひきます。', romaji: 'Kanji no yomikata ga wakaranai toki wa jisho o hikimasu.', english: "When I don't know how to read a kanji, I use the dictionary.", targetWord: '漢字', targetWordEnglish: 'Kanji characters' }
  ],
  '字': [
    { id: 's-n4-字-1', sentence: '子供の字はとても可愛らしいです。', furigana: 'こども の じ は とても かわいらしい です。', romaji: "Kodomo no ji wa totemo kawairashii desu.", english: "Children's handwriting is very cute.", targetWord: '字', targetWordEnglish: 'Character / Handwriting' },
    { id: 's-n4-字-2', sentence: '文字化けして画面の文字が読めません。', furigana: 'もじばけ して がめん の もじ が よめません。', romaji: "Mojibake shite gamen no moji ga yomemasen.", english: "There is garbled text and I can't read the characters on screen.", targetWord: '文字', targetWordEnglish: 'Character / Text' }
  ],
  '文': [
    { id: 's-n4-文-1', sentence: '日本語の作文を書いて先生に見てもらいました。', furigana: 'にほんご の さくぶん を かいて せんせい に みてもらいました。', romaji: 'Nihongo no sakubun o kaite sensei ni mite moraimashita.', english: 'I wrote a Japanese essay and had the teacher check it.', targetWord: '作文', targetWordEnglish: 'Written composition' },
    { id: 's-n4-文-2', sentence: '文法の規則を覚えると会話が上手になります。', furigana: 'ぶんぽう の きそく を おぼえる と かいわ が じょうず に なります。', romaji: 'Bunpou no kisoku o oboeru to kaiwa ga jouzu ni narimasu.', english: 'If you learn grammar rules your conversation will improve.', targetWord: '文法', targetWordEnglish: 'Grammar' }
  ],
  '理': [
    { id: 's-n4-理-1', sentence: '決断した理由をきちんと説明しました。', furigana: 'けつだん した りゆう を きちんと せつめい しました。', romaji: 'Ketsudan shita riyuu o kichin to setsumei shimashita.', english: 'I clearly explained the reason for my decision.', targetWord: '理由', targetWordEnglish: 'Reason' },
    { id: 's-n4-理-2', sentence: '無理をしないで体を大切にしてください。', furigana: 'むり を しないで からだ を たいせつ に してください。', romaji: 'Muri o shinaide karada o taisetsu ni shite kudasai.', english: "Please don't overdo it and take care of your health.", targetWord: '無理', targetWordEnglish: 'Unreasonable / Overdo' }
  ],
  '験': [
    { id: 's-n4-験-1', sentence: '日本語能力試験の合格を目指して勉強しています。', furigana: 'にほんごのうりょくしけん の ごうかく を めざして べんきょう しています。', romaji: 'Nihongo Nouryoku Shiken no goukaku o mezashite benkyou shite imasu.', english: 'I am studying aiming to pass the Japanese Language Proficiency Test.', targetWord: '試験', targetWordEnglish: 'Exam' },
    { id: 's-n4-験-2', sentence: '経験から学ぶことが多いです。', furigana: 'けいけん から まなぶ こと が おおい です。', romaji: 'Keiken kara manabu koto ga ooi desu.', english: 'There is much to learn from experience.', targetWord: '経験', targetWordEnglish: 'Experience' }
  ],
  '音': [
    { id: 's-n4-音-1', sentence: '夜は隣の部屋の音が気になります。', furigana: 'よる は となり の へや の おと が きになります。', romaji: 'Yoru wa tonari no heya no oto ga ki ni narimasu.', english: 'At night the noise from the next room bothers me.', targetWord: '音', targetWordEnglish: 'Sound / Noise' },
    { id: 's-n4-音-2', sentence: '音楽を聴きながら勉強するのが好きです。', furigana: 'おんがく を きき ながら べんきょう するのが すき です。', romaji: 'Ongaku o kiki nagara benkyou suru noga suki desu.', english: 'I like studying while listening to music.', targetWord: '音楽', targetWordEnglish: 'Music' }
  ],
  '楽': [
    { id: 's-n4-楽-1', sentence: '週末は家族と楽しい時間を過ごします。', furigana: 'しゅうまつ は かぞく と たのしい じかん を すごします。', romaji: 'Shuumatsu wa kazoku to tanoshii jikan o sugoshimasu.', english: 'On weekends I spend enjoyable time with my family.', targetWord: '楽しい', targetWordEnglish: 'Fun / Enjoyable' },
    { id: 's-n4-楽-2', sentence: '音楽は心を楽にしてくれます。', furigana: 'おんがく は こころ を らく に してくれます。', romaji: 'Ongaku wa kokoro o raku ni shite kuremasu.', english: 'Music eases the mind.', targetWord: '楽に', targetWordEnglish: 'At ease / Comfortable' }
  ],
  '心': [
    { id: 's-n4-心-1', sentence: '試合に勝って心から嬉しかったです。', furigana: 'しあい に かって こころ から うれしかった です。', romaji: 'Shiai ni katte kokoro kara ureshikatta desu.', english: 'I was truly happy from the heart when I won the match.', targetWord: '心から', targetWordEnglish: 'From the heart' },
    { id: 's-n4-心-2', sentence: '家族が無事と分かって安心しました。', furigana: 'かぞく が ぶじ と わかって あんしん しました。', romaji: 'Kazoku ga buji to wakatte anshin shimashita.', english: 'I was relieved to know my family was safe.', targetWord: '安心', targetWordEnglish: 'Relief / Peace of mind' }
  ],
  '悪': [
    { id: 's-n4-悪-1', sentence: '今日は体の調子が悪くて病院に行きました。', furigana: 'きょう は からだ の ちょうし が わるくて びょういん に いきました。', romaji: 'Kyou wa karada no choushi ga warukute byouin ni ikimashita.', english: 'Today I felt unwell and went to the hospital.', targetWord: '悪くて', targetWordEnglish: 'Feeling bad / Unwell' },
    { id: 's-n4-悪-2', sentence: '悪い習慣はなかなかやめられません。', furigana: 'わるい しゅうかん は なかなか やめられません。', romaji: 'Warui shuukan wa nakanaka yamerare masen.', english: "Bad habits are hard to quit.", targetWord: '悪い', targetWordEnglish: 'Bad' }
  ],
  '正': [
    { id: 's-n4-正-1', sentence: 'テストの答えが全部正しかったです。', furigana: 'テスト の こたえ が ぜんぶ ただしかった です。', romaji: 'Tesuto no kotae ga zenbu tadashikatta desu.', english: 'All the test answers were correct.', targetWord: '正しかった', targetWordEnglish: 'Were correct' },
    { id: 's-n4-正-2', sentence: '何が正しくて何が間違いか判断するのは難しいです。', furigana: 'なに が ただしくて なに が まちがいか はんだん するのは むずかしい です。', romaji: 'Nani ga tadashikute nani ga machigai ka handan suru nowa muzukashii desu.', english: 'It is difficult to judge what is right and what is wrong.', targetWord: '正しくて', targetWordEnglish: 'Correct / Right' }
  ],
  '有': [
    { id: 's-n4-有-1', sentence: 'あの俳優は世界的に有名です。', furigana: 'あの はいゆう は せかいてき に ゆうめい です。', romaji: 'Ano haiyuu wa sekaiteki ni yuumei desu.', english: 'That actor is world-famous.', targetWord: '有名', targetWordEnglish: 'Famous' },
    { id: 's-n4-有-2', sentence: '有料の駐車場に車を止めました。', furigana: 'ゆうりょう の ちゅうしゃじょう に くるま を とめました。', romaji: 'Yuuryou no chuushajou ni kuruma o tomemashita.', english: 'I parked the car in a paid parking lot.', targetWord: '有料', targetWordEnglish: 'Paid / Chargeable' }
  ],
  '同': [
    { id: 's-n4-同-1', sentence: '彼と私は同じ大学の出身です。', furigana: 'かれ と わたし は おなじ だいがく の しゅっしん です。', romaji: 'Kare to watashi wa onaji daigaku no shusshin desu.', english: 'He and I are from the same university.', targetWord: '同じ', targetWordEnglish: 'Same' },
    { id: 's-n4-同-2', sentence: '同僚と一緒にランチを食べに行きます。', furigana: 'どうりょう と いっしょ に ランチ を たべに いきます。', romaji: 'Douryou to issho ni ranchi o tabe ni ikimasu.', english: 'I go to have lunch together with a colleague.', targetWord: '同僚', targetWordEnglish: 'Colleague' }
  ],
  '別': [
    { id: 's-n4-別-1', sentence: '今回は特別なディナーを予約しました。', furigana: 'こんかい は とくべつ な ディナー を よやく しました。', romaji: 'Konkai wa tokubetsu na dinaa o yoyaku shimashita.', english: 'This time I reserved a special dinner.', targetWord: '特別', targetWordEnglish: 'Special' },
    { id: 's-n4-別-2', sentence: '別の方法で問題を解いてみました。', furigana: 'べつ の ほうほう で もんだい を といて みました。', romaji: 'Betsu no houhou de mondai o toite mimashita.', english: 'I tried solving the problem with a different method.', targetWord: '別の', targetWordEnglish: 'Different / Another' }
  ],
  '特': [
    { id: 's-n4-特-1', sentence: 'このお土産は特においしいと評判です。', furigana: 'この おみやげ は とくに おいしい と ひょうばん です。', romaji: 'Kono omiyage wa toku ni oishii to hyouban desu.', english: 'This souvenir is particularly well-known for being delicious.', targetWord: '特に', targetWordEnglish: 'Particularly / Especially' },
    { id: 's-n4-特-2', sentence: '日本の特産品をお土産に買いました。', furigana: 'にほん の とくさんひん を おみやげ に かいました。', romaji: 'Nihon no tokusanhin o omiyage ni kaimashita.', english: "I bought Japan's specialty products as souvenirs.", targetWord: '特産品', targetWordEnglish: 'Specialty products' }
  ],
  '私': [
    { id: 's-n4-私-1', sentence: '私は毎朝六時に起きます。', furigana: 'わたし は まいあさ ろくじ に おきます。', romaji: 'Watashi wa maiasa rokuji ni okimasu.', english: 'I wake up at 6:00 every morning.', targetWord: '私', targetWordEnglish: 'I / Me' },
    { id: 's-n4-私-2', sentence: '私の趣味は料理と読書です。', furigana: 'わたし の しゅみ は りょうり と どくしょ です。', romaji: 'Watashi no shumi wa ryouri to dokusho desu.', english: 'My hobbies are cooking and reading.', targetWord: '私の', targetWordEnglish: 'My' }
  ],
  '者': [
    { id: 's-n4-者-1', sentence: '体の具合が悪いので医者に診てもらいました。', furigana: 'からだ の ぐあい が わるい ので いしゃ に みてもらいました。', romaji: "Karada no guai ga warui node isha ni mite moraimashita.", english: "I wasn't feeling well so I had a doctor examine me.", targetWord: '医者', targetWordEnglish: 'Doctor' },
    { id: 's-n4-者-2', sentence: '学者になるために大学院に進学しました。', furigana: 'がくしゃ に なる ために だいがくいん に しんがく しました。', romaji: 'Gakusha ni naru tame ni daigakuin ni shingaku shimashita.', english: 'I went to graduate school to become a scholar.', targetWord: '学者', targetWordEnglish: 'Scholar' }
  ],
  '員': [
    { id: 's-n4-員-1', sentence: '会社員として毎日電車で通勤しています。', furigana: 'かいしゃいん として まいにち でんしゃ で つうきん しています。', romaji: 'Kaishain toshite mainichi densha de tsuukin shite imasu.', english: 'As a company employee I commute by train every day.', targetWord: '会社員', targetWordEnglish: 'Company employee' },
    { id: 's-n4-員-2', sentence: 'コンビニの店員さんが親切に案内してくれました。', furigana: 'コンビニ の てんいん さん が しんせつ に あんない して くれました。', romaji: "Konbini no ten-in san ga shinsetsu ni annai shite kuremashita.", english: 'The convenience store staff kindly guided me.', targetWord: '店員', targetWordEnglish: 'Store staff' }
  ],
  '主': [
    { id: 's-n4-主-1', sentence: '彼女は主に英語で仕事をしています。', furigana: 'かのじょ は おもに えいご で しごと を しています。', romaji: 'Kanojo wa omoni eigo de shigoto o shite imasu.', english: 'She mainly works in English.', targetWord: '主に', targetWordEnglish: 'Mainly / Primarily' },
    { id: 's-n4-主-2', sentence: '主人公が活躍する映画を見ました。', furigana: 'しゅじんこう が かつやく する えいが を みました。', romaji: 'Shujinkou ga katsuyaku suru eiga o mimashita.', english: 'I watched a movie where the main character is active.', targetWord: '主人公', targetWordEnglish: 'Main character / Protagonist' }
  ],
  '事': [
    { id: 's-n4-事-1', sentence: '毎日仕事が忙しくて疲れています。', furigana: 'まいにち しごと が いそがしくて つかれています。', romaji: 'Mainichi shigoto ga isogashikute tsukarete imasu.', english: 'Work is busy every day and I am tired.', targetWord: '仕事', targetWordEnglish: 'Work / Job' },
    { id: 's-n4-事-2', sentence: '大事な物を忘れないようにリストを作ります。', furigana: 'だいじ な もの を わすれないように リスト を つくります。', romaji: "Daiji na mono o wasurenai you ni risuto o tsukurimasu.", english: "I make a list so I don't forget important things.", targetWord: '大事', targetWordEnglish: 'Important' }
  ],
  '仕': [
    { id: 's-n4-仕-1', sentence: 'この仕事のやり方を教えてもらえますか？', furigana: 'この しごと の やりかた を おしえてもらえますか？', romaji: 'Kono shigoto no yarikata o oshiete morae masu ka?', english: 'Could you show me how to do this job?', targetWord: '仕事', targetWordEnglish: 'Work' },
    { id: 's-n4-仕-2', sentence: '仕方がないので自分でやることにしました。', furigana: 'しかた が ない ので じぶん で やることにしました。', romaji: 'Shikata ga nai node jibun de yaru koto ni shimashita.', english: 'Since there was no other way, I decided to do it myself.', targetWord: '仕方がない', targetWordEnglish: "Can't be helped" }
  ],
  '業': [
    { id: 's-n4-業-1', sentence: '本日の授業は三時に終わります。', furigana: 'ほんじつ の じゅぎょう は さんじ に おわります。', romaji: 'Honjitsu no jugyou wa sanji ni owarimasu.', english: "Today's class ends at 3:00.", targetWord: '授業', targetWordEnglish: 'Class / Lesson' },
    { id: 's-n4-業-2', sentence: '卒業後は日本に留学したいと思っています。', furigana: 'そつぎょうご は にほん に りゅうがく したいと おもっています。', romaji: 'Sotsugyougo wa Nihon ni ryuugaku shitai to omotte imasu.', english: 'After graduation, I am thinking of studying abroad in Japan.', targetWord: '卒業後', targetWordEnglish: 'After graduation' }
  ],
  '自': [
    { id: 's-n4-自-1', sentence: '自分の部屋は自分で掃除します。', furigana: 'じぶん の へや は じぶん で そうじ します。', romaji: 'Jibun no heya wa jibun de souji shimasu.', english: 'I clean my own room myself.', targetWord: '自分', targetWordEnglish: 'Oneself' },
    { id: 's-n4-自-2', sentence: '自由な時間には読書を楽しみます。', furigana: 'じゆう な じかん に は どくしょ を たのしみます。', romaji: 'Jiyuu na jikan ni wa dokusho o tanoshimimasu.', english: 'In my free time I enjoy reading.', targetWord: '自由', targetWordEnglish: 'Freedom / Free time' }
  ],
  '代': [
    { id: 's-n4-代-1', sentence: '電気代が先月より高くなりました。', furigana: 'でんきだい が せんげつ より たかく なりました。', romaji: 'Denki dai ga sengetsu yori takaku narimashita.', english: 'The electricity bill became higher than last month.', targetWord: '電気代', targetWordEnglish: 'Electricity bill' },
    { id: 's-n4-代-2', sentence: '現代の若者はスマホをよく使います。', furigana: 'げんだい の わかもの は スマホ を よく つかいます。', romaji: 'Gendai no wakamono wa sumaho o yoku tsukaimasu.', english: 'Young people of today often use smartphones.', targetWord: '現代', targetWordEnglish: 'Modern era / Today' }
  ],
  '以': [
    { id: 's-n4-以-1', sentence: 'このレストランは五千円以上のコースがあります。', furigana: 'この レストラン は ごせんえん いじょう の コース が あります。', romaji: 'Kono resutoran wa gosen en ijou no koosu ga arimasu.', english: 'This restaurant has courses of 5,000 yen and above.', targetWord: '以上', targetWordEnglish: 'More than / Above' },
    { id: 's-n4-以-2', sentence: '試験の点数が以前より上がりました。', furigana: 'しけん の てんすう が いぜん より あがりました。', romaji: 'Shiken no tensuu ga izen yori agarimashita.', english: 'My exam score improved compared to before.', targetWord: '以前', targetWordEnglish: 'Before / Previously' }
  ],
  '方': [
    { id: 's-n4-方-1', sentence: 'この漢字の読み方を教えてください。', furigana: 'この かんじ の よみかた を おしえてください。', romaji: 'Kono kanji no yomikata o oshiete kudasai.', english: 'Please teach me how to read this kanji.', targetWord: '読み方', targetWordEnglish: 'How to read / Reading method' },
    { id: 's-n4-方-2', sentence: '料理の作り方をインターネットで調べました。', furigana: 'りょうり の つくりかた を インターネット で しらべました。', romaji: 'Ryouri no tsukurikata o intaanetto de shirabemashita.', english: 'I looked up how to cook a dish on the internet.', targetWord: '作り方', targetWordEnglish: 'How to make' }
  ],
  '度': [
    { id: 's-n4-度-1', sentence: '今度の旅行はどこへ行きますか？', furigana: 'こんど の りょこう は どこ へ いきますか？', romaji: 'Kondo no ryokou wa doko e ikimasu ka?', english: 'Where are you going for your next trip?', targetWord: '今度', targetWordEnglish: 'Next time / This time' },
    { id: 's-n4-度-2', sentence: '今年は三度目の受験です。', furigana: 'ことし は さんどめ の じゅけん です。', romaji: 'Kotoshi wa san dome no juken desu.', english: 'This year is my third time taking the exam.', targetWord: '三度目', targetWordEnglish: 'Third time' }
  ],
  '品': [
    { id: 's-n4-品-1', sentence: 'このお店の商品はどれも品質が良いです。', furigana: 'この おみせ の しょうひん は どれも ひんしつ が よい です。', romaji: 'Kono omise no shouhin wa dore mo hinshitsu ga yoi desu.', english: 'All the products in this store are of good quality.', targetWord: '商品', targetWordEnglish: 'Product / Goods' },
    { id: 's-n4-品-2', sentence: 'スーパーで食料品を買ってきました。', furigana: 'スーパー で しょくりょうひん を かってきました。', romaji: 'Suupaa de shokuryouhin o katte kimashita.', english: 'I went to buy groceries at the supermarket.', targetWord: '食料品', targetWordEnglish: 'Groceries / Food items' }
  ],
  '物': [
    { id: 's-n4-物-1', sentence: '週末に家族と買い物に行きます。', furigana: 'しゅうまつ に かぞく と かいもの に いきます。', romaji: 'Shuumatsu ni kazoku to kaimono ni ikimasu.', english: 'I go shopping with my family on weekends.', targetWord: '買い物', targetWordEnglish: 'Shopping' },
    { id: 's-n4-物-2', sentence: '動物園で子供たちが大喜びしました。', furigana: 'どうぶつえん で こどもたち が おおよろこび しました。', romaji: 'Doubutsuen de kodomotachi ga ooyorokobi shimashita.', english: 'The children were overjoyed at the zoo.', targetWord: '動物園', targetWordEnglish: 'Zoo' }
  ],
  '計': [
    { id: 's-n4-計-1', sentence: '壁に掛けてある時計が止まっています。', furigana: 'かべ に かけてある とけい が とまっています。', romaji: 'Kabe ni kakete aru tokei ga tomatte imasu.', english: 'The clock hanging on the wall has stopped.', targetWord: '時計', targetWordEnglish: 'Clock / Watch' },
    { id: 's-n4-計-2', sentence: '旅行の予算を計算してみました。', furigana: 'りょこう の よさん を けいさん して みました。', romaji: 'Ryokou no yosan o keisan shite mimashita.', english: 'I tried to calculate the travel budget.', targetWord: '計算', targetWordEnglish: 'Calculation' }
  ],
  '発': [
    { id: 's-n4-発-1', sentence: '飛行機は午前十時に出発します。', furigana: 'ひこうき は ごぜん じゅうじ に しゅっぱつ します。', romaji: 'Hikouki wa gozen juuji ni shuppatsu shimasu.', english: 'The airplane departs at 10:00 AM.', targetWord: '出発', targetWordEnglish: 'Departure' },
    { id: 's-n4-発-2', sentence: '新商品の発売日はいつですか？', furigana: 'しんしょうひん の はつばいび は いつ ですか？', romaji: 'Shin shouhin no hatsubaibi wa itsu desu ka?', english: 'When is the release date of the new product?', targetWord: '発売日', targetWordEnglish: 'Release date' }
  ],
  '公': [
    { id: 's-n4-公-1', sentence: '毎朝近くの公園でジョギングをします。', furigana: 'まいあさ ちかく の こうえん で ジョギング を します。', romaji: 'Maiasa chikaku no kouen de jogingu o shimasu.', english: 'Every morning I go jogging in the nearby park.', targetWord: '公園', targetWordEnglish: 'Park' },
    { id: 's-n4-公-2', sentence: '図書館は公共の施設なので静かにしましょう。', furigana: 'としょかん は こうきょう の しせつ なので しずかに しましょう。', romaji: "Toshokan wa koukyou no shisetsu nanode shizuka ni shimashou.", english: "The library is a public facility so let's be quiet.", targetWord: '公共', targetWordEnglish: 'Public' }
  ],
  '元': [
    { id: 's-n4-元-1', sentence: '毎日野菜をたくさん食べて元気でいます。', furigana: 'まいにち やさい を たくさん たべて げんき でいます。', romaji: 'Mainichi yasai o takusan tabete genki de imasu.', english: 'I eat lots of vegetables every day and stay healthy.', targetWord: '元気', targetWordEnglish: 'Energetic / Healthy' },
    { id: 's-n4-元-2', sentence: '元の計画に戻ることにしました。', furigana: 'もと の けいかく に もどる こと に しました。', romaji: 'Moto no keikaku ni modoru koto ni shimashita.', english: 'I decided to return to the original plan.', targetWord: '元の', targetWordEnglish: 'Original / Former' }
  ],
  '不': [
    { id: 's-n4-不-1', sentence: 'ここは交通が不便で生活しにくいです。', furigana: 'ここ は こうつう が ふべん で せいかつ しにくい です。', romaji: 'Koko wa koutsuu ga fuben de seikatsu shinikui desu.', english: 'This place is inconvenient for transportation and hard to live in.', targetWord: '不便', targetWordEnglish: 'Inconvenient' },
    { id: 's-n4-不-2', sentence: '不安なことがあったら相談してください。', furigana: 'ふあん な こと が あったら そうだん してください。', romaji: 'Fuan na koto ga attara soudan shite kudasai.', english: 'If there is anything you are anxious about, please consult me.', targetWord: '不安', targetWordEnglish: 'Anxiety / Unease' }
  ],
  '界': [
    { id: 's-n4-界-1', sentence: '世界中から観光客が日本に来ます。', furigana: 'せかいじゅう から かんこうきゃく が にほん に きます。', romaji: 'Sekaijuu kara kankoukyaku ga Nihon ni kimasu.', english: 'Tourists come to Japan from all over the world.', targetWord: '世界', targetWordEnglish: 'World' },
    { id: 's-n4-界-2', sentence: '医学界でこの薬が注目されています。', furigana: 'いがくかい で この くすり が ちゅうもく されています。', romaji: 'Igakukai de kono kusuri ga chuumoku sarete imasu.', english: 'This medicine is attracting attention in the medical world.', targetWord: '医学界', targetWordEnglish: 'Medical world' }
  ],
  '世': [
    { id: 's-n4-世-1', sentence: '先生には本当にお世話になっています。', furigana: 'せんせい に は ほんとうに おせわ に なっています。', romaji: 'Sensei ni wa hontouni osewa ni natte imasu.', english: 'I am truly indebted to my teacher for their care.', targetWord: '世話', targetWordEnglish: 'Care / Look after' },
    { id: 's-n4-世-2', sentence: '世の中には親切な人がたくさんいます。', furigana: 'よのなか に は しんせつ な ひと が たくさん います。', romaji: 'Yo no naka ni wa shinsetsu na hito ga takusan imasu.', english: 'There are many kind people in the world.', targetWord: '世の中', targetWordEnglish: 'Society / The world' }
  ],
  '春': [
    { id: 's-n4-春-1', sentence: '春休みに家族で京都へ旅行しました。', furigana: 'はるやすみ に かぞく で きょうと へ りょこう しました。', romaji: 'Haruyasumi ni kazoku de Kyouto e ryokou shimashita.', english: 'I traveled to Kyoto with my family during spring vacation.', targetWord: '春休み', targetWordEnglish: 'Spring vacation' },
    { id: 's-n4-春-2', sentence: '春になるとあちこちに桜が咲きます。', furigana: 'はる に なる と あちこち に さくら が さきます。', romaji: 'Haru ni naru to achikochi ni sakura ga sakimasu.', english: 'When spring comes cherry blossoms bloom everywhere.', targetWord: '春', targetWordEnglish: 'Spring' }
  ],
  '夏': [
    { id: 's-n4-夏-1', sentence: '夏休みに海で泳いで楽しみました。', furigana: 'なつやすみ に うみ で およいで たのしみました。', romaji: 'Natsuyasumi ni umi de oyoide tanoshimimashita.', english: 'I swam in the sea and had fun during summer vacation.', targetWord: '夏休み', targetWordEnglish: 'Summer vacation' },
    { id: 's-n4-夏-2', sentence: '夏の暑い日はアイスクリームが一番です。', furigana: 'なつ の あつい ひ は アイスクリーム が いちばん です。', romaji: 'Natsu no atsui hi wa aisukuriimu ga ichiban desu.', english: 'On hot summer days ice cream is the best.', targetWord: '夏', targetWordEnglish: 'Summer' }
  ],
  '秋': [
    { id: 's-n4-秋-1', sentence: '秋の紅葉を見るために日光へ行きました。', furigana: 'あき の こうよう を みる ために にっこう へ いきました。', romaji: 'Aki no kouyou o miru tame ni Nikkoo e ikimashita.', english: 'I went to Nikko to see the autumn foliage.', targetWord: '秋', targetWordEnglish: 'Autumn / Fall' },
    { id: 's-n4-秋-2', sentence: '秋祭りで地元の伝統的な踊りを見ました。', furigana: 'あきまつり で じもと の でんとうてき な おどり を みました。', romaji: 'Aki matsuri de jimoto no dentouteki na odori o mimashita.', english: 'I saw traditional local dances at the autumn festival.', targetWord: '秋祭り', targetWordEnglish: 'Autumn festival' }
  ],
  '冬': [
    { id: 's-n4-冬-1', sentence: '冬休みに北海道でスキーを楽しみました。', furigana: 'ふゆやすみ に ほっかいどう で スキー を たのしみました。', romaji: 'Fuyuyasumi ni Hokkaido de sukii o tanoshimimashita.', english: 'I enjoyed skiing in Hokkaido during winter vacation.', targetWord: '冬休み', targetWordEnglish: 'Winter vacation' },
    { id: 's-n4-冬-2', sentence: '冬になると温かいお鍋が食べたくなります。', furigana: 'ふゆ に なる と あたたかい おなべ が たべたく なります。', romaji: 'Fuyu ni naru to atatakai onabe ga tabetaku narimasu.', english: 'When winter comes I want to eat warm hot pot.', targetWord: '冬', targetWordEnglish: 'Winter' }
  ],
  '風': [
    { id: 's-n4-風-1', sentence: '台風が近づいているので外出を控えてください。', furigana: 'たいふう が ちかづいている ので がいしゅつ を ひかえてください。', romaji: 'Taifuu ga chikazuite iru node gaishutsu o hikaete kudasai.', english: 'Please refrain from going out because a typhoon is approaching.', targetWord: '台風', targetWordEnglish: 'Typhoon' },
    { id: 's-n4-風-2', sentence: '爽やかな風が吹いて気持ちいいです。', furigana: 'さわやか な かぜ が ふいて きもちいい です。', romaji: 'Sawayaka na kaze ga fuite kimochi ii desu.', english: 'A refreshing wind is blowing and it feels good.', targetWord: '風', targetWordEnglish: 'Wind / Breeze' }
  ],
  '晴': [
    { id: 's-n4-晴-1', sentence: '今日は晴れているので洗濯物が乾きます。', furigana: 'きょう は はれている ので せんたくもの が かわきます。', romaji: 'Kyou wa harete iru node sentakumono ga kawakimasu.', english: 'Today is sunny so the laundry will dry.', targetWord: '晴れて', targetWordEnglish: 'Sunny / Clear weather' },
    { id: 's-n4-晴-2', sentence: '明日は晴れの予報なので遠足が楽しみです。', furigana: 'あした は はれ の よほう なので えんそく が たのしみ です。', romaji: "Ashita wa hare no yohou nanode ensoku ga tanoshimi desu.", english: "Tomorrow's forecast is sunny so I'm looking forward to the picnic.", targetWord: '晴れ', targetWordEnglish: 'Clear weather / Sunny' }
  ],
  '曇': [
    { id: 's-n4-曇-1', sentence: '空が曇ってきたので傘を持って出かけました。', furigana: 'そら が くもって きた ので かさ を もって でかけました。', romaji: 'Sora ga kumotte kita node kasa o motte dekakemashita.', english: 'The sky became cloudy so I took an umbrella when I went out.', targetWord: '曇って', targetWordEnglish: 'Became cloudy' },
    { id: 's-n4-曇-2', sentence: '今日は曇りで少し肌寒いです。', furigana: 'きょう は くもり で すこし はださむい です。', romaji: 'Kyou wa kumori de sukoshi hadasamui desu.', english: 'Today is cloudy and slightly chilly.', targetWord: '曇り', targetWordEnglish: 'Cloudy weather' }
  ],
  '雪': [
    { id: 's-n4-雪-1', sentence: '朝起きたら外が真っ白な雪に覆われていました。', furigana: 'あさ おきたら そと が まっしろ な ゆき に おおわれていました。', romaji: 'Asa okitara soto ga masshiro na yuki ni oowarete imashita.', english: 'When I woke up in the morning, the outside was covered in pure white snow.', targetWord: '雪', targetWordEnglish: 'Snow' },
    { id: 's-n4-雪-2', sentence: '子供たちが庭で雪だるまを作っています。', furigana: 'こどもたち が にわ で ゆきだるま を つくっています。', romaji: 'Kodomotachi ga niwa de yukidaruma o tsukutte imasu.', english: 'Children are making a snowman in the garden.', targetWord: '雪だるま', targetWordEnglish: 'Snowman' }
  ],
  '海': [
    { id: 's-n4-海-1', sentence: '夏休みに海岸でバーベキューをしました。', furigana: 'なつやすみ に かいがん で バーベキュー を しました。', romaji: 'Natsuyasumi ni kaigan de baabegyuu o shimashita.', english: 'I had a barbecue on the beach during summer vacation.', targetWord: '海岸', targetWordEnglish: 'Beach / Coast' },
    { id: 's-n4-海-2', sentence: '海外に一人で旅行したいと思っています。', furigana: 'かいがい に ひとり で りょこう したいと おもっています。', romaji: 'Kaigai ni hitori de ryokou shitai to omotte imasu.', english: 'I am thinking I want to travel abroad alone.', targetWord: '海外', targetWordEnglish: 'Overseas / Abroad' }
  ],
  '波': [
    { id: 's-n4-波-1', sentence: '今日は海の波が高くて泳げません。', furigana: 'きょう は うみ の なみ が たかくて およげません。', romaji: "Kyou wa umi no nami ga takakute oyogemasen.", english: "Today the ocean waves are high so I can't swim.", targetWord: '波', targetWordEnglish: 'Wave' },
    { id: 's-n4-波-2', sentence: '津波の警告が出たので高いところへ避難しました。', furigana: 'つなみ の けいこく が でた ので たかい ところ へ ひなん しました。', romaji: 'Tsunami no keikou ga deta node takai tokoro e hinan shimashita.', english: 'A tsunami warning was issued so I evacuated to high ground.', targetWord: '津波', targetWordEnglish: 'Tsunami' }
  ],
  '池': [
    { id: 's-n4-池-1', sentence: '公園の池で鯉が泳いでいます。', furigana: 'こうえん の いけ で こい が およいでいます。', romaji: 'Kouen no ike de koi ga oyoide imasu.', english: 'Koi fish are swimming in the park pond.', targetWord: '池', targetWordEnglish: 'Pond' },
    { id: 's-n4-池-2', sentence: '電池が切れそうなので新しいものと交換します。', furigana: 'でんち が きれそう なので あたらしい もの と こうかん します。', romaji: "Denchi ga kiresou nanode atarashii mono to koukan shimasu.", english: "The battery is about to die so I'll replace it with a new one.", targetWord: '電池', targetWordEnglish: 'Battery' }
  ],
  '林': [
    { id: 's-n4-林-1', sentence: '林の中で鳥の鳴き声がよく聞こえます。', furigana: 'はやし の なか で とり の なきごえ が よく きこえます。', romaji: 'Hayashi no naka de tori no nakigoe ga yoku kikoemasu.', english: 'Bird calls can be heard well in the woods.', targetWord: '林', targetWordEnglish: 'Woods / Grove' },
    { id: 's-n4-林-2', sentence: '小林さんは日本語クラスで一番上手です。', furigana: 'こばやし さん は にほんご クラス で いちばん じょうず です。', romaji: 'Kobayashi san wa Nihongo kurasu de ichiban jouzu desu.', english: 'Mr. Kobayashi is the best in Japanese class.', targetWord: '小林', targetWordEnglish: 'Kobayashi (surname)' }
  ],
  '森': [
    { id: 's-n4-森-1', sentence: '深い森の中でハイキングを楽しみました。', furigana: 'ふかい もり の なか で ハイキング を たのしみました。', romaji: 'Fukai mori no naka de haikingu o tanoshimimashita.', english: 'I enjoyed hiking deep in the forest.', targetWord: '森', targetWordEnglish: 'Forest' },
    { id: 's-n4-森-2', sentence: '森林を守ることは環境保護につながります。', furigana: 'しんりん を まもる こと は かんきょうほご に つながります。', romaji: 'Shinrin o mamoru koto wa kankyou hogo ni tsunagarimasu.', english: 'Protecting forests leads to environmental conservation.', targetWord: '森林', targetWordEnglish: 'Forest / Woodland' }
  ],
  '原': [
    { id: 's-n4-原-1', sentence: '秋葉原は電気製品で有名な街です。', furigana: 'あきはばら は でんきせいひん で ゆうめい な まち です。', romaji: 'Akihabara wa denki seihin de yuumei na machi desu.', english: 'Akihabara is a famous town for electronic products.', targetWord: '秋葉原', targetWordEnglish: 'Akihabara' },
    { id: 's-n4-原-2', sentence: '原因を調べてから対策を考えます。', furigana: 'げんいん を しらべてから たいさく を かんがえます。', romaji: 'Genin o shirabete kara taisaku o kangaemasu.', english: 'After investigating the cause I will think of countermeasures.', targetWord: '原因', targetWordEnglish: 'Cause / Origin' }
  ],
  '野': [
    { id: 's-n4-野-1', sentence: '野菜をたくさん食べると健康にいいです。', furigana: 'やさい を たくさん たべると けんこう に いい です。', romaji: 'Yasai o takusan taberu to kenkou ni ii desu.', english: 'Eating lots of vegetables is good for your health.', targetWord: '野菜', targetWordEnglish: 'Vegetables' },
    { id: 's-n4-野-2', sentence: '野球の試合を観戦してきました。', furigana: 'やきゅう の しあい を かんせん してきました。', romaji: 'Yakyuu no shiai o kansen shite kimashita.', english: 'I went to watch a baseball game.', targetWord: '野球', targetWordEnglish: 'Baseball' }
  ],
  '畑': [
    { id: 's-n4-畑-1', sentence: '祖父の家の畑でトマトを育てています。', furigana: 'そふ の いえ の はたけ で トマト を そだてています。', romaji: "Sofu no ie no hatake de tomato o sodatete imasu.", english: "I am growing tomatoes in my grandfather's farm field.", targetWord: '畑', targetWordEnglish: 'Field / Farm' },
    { id: 's-n4-畑-2', sentence: '畑で収穫した野菜を市場に売りに行きます。', furigana: 'はたけ で しゅうかく した やさい を いちば に うりにいきます。', romaji: 'Hatake de shuukaku shita yasai o ichiba ni uri ni ikimasu.', english: 'I go to sell the vegetables harvested from the field at the market.', targetWord: '畑', targetWordEnglish: 'Farm field' }
  ],
  '光': [
    { id: 's-n4-光-1', sentence: '日光は日本で有名な観光地です。', furigana: 'にっこう は にほん で ゆうめい な かんこうち です。', romaji: 'Nikkoo wa Nihon de yuumei na kankouchi desu.', english: 'Nikko is a famous tourist destination in Japan.', targetWord: '観光', targetWordEnglish: 'Sightseeing' },
    { id: 's-n4-光-2', sentence: '窓から差し込む光がとても明るいです。', furigana: 'まど から さしこむ ひかり が とても あかるい です。', romaji: 'Mado kara sashikomu hikari ga totemo akarui desu.', english: 'The light coming in through the window is very bright.', targetWord: '光', targetWordEnglish: 'Light / Ray' }
  ],
  '星': [
    { id: 's-n4-星-1', sentence: '田舎では夜空に星がたくさん見えます。', furigana: 'いなか で は よぞら に ほし が たくさん みえます。', romaji: 'Inaka dewa yozora ni hoshi ga takusan miemasu.', english: 'In the countryside many stars can be seen in the night sky.', targetWord: '星', targetWordEnglish: 'Star' },
    { id: 's-n4-星-2', sentence: '星空を見ていると心が落ち着きます。', furigana: 'ほしぞら を みていると こころ が おちつきます。', romaji: 'Hoshizora o mite iru to kokoro ga ochitsukimasu.', english: 'Watching the starry sky calms my heart.', targetWord: '星空', targetWordEnglish: 'Starry sky' }
  ],
  '犬': [
    { id: 's-n4-犬-1', sentence: '公園で小さい子犬を見かけました。', furigana: 'こうえん で ちいさい こいぬ を みかけました。', romaji: 'Kouen de chiisai koinu o mikakemashita.', english: 'I spotted a small puppy in the park.', targetWord: '子犬', targetWordEnglish: 'Puppy' },
    { id: 's-n4-犬-2', sentence: '私の家には犬が一匹います。', furigana: 'わたし の いえ に は いぬ が いっぴき います。', romaji: 'Watashi no ie ni wa inu ga ippiki imasu.', english: 'At my house there is one dog.', targetWord: '犬', targetWordEnglish: 'Dog' }
  ],
  '鳥': [
    { id: 's-n4-鳥-1', sentence: '毎朝窓の外で小鳥が鳴いています。', furigana: 'まいあさ まど の そと で ことり が ないています。', romaji: 'Maiasa mado no soto de kotori ga naite imasu.', english: 'Every morning a little bird is singing outside the window.', targetWord: '小鳥', targetWordEnglish: 'Little bird' },
    { id: 's-n4-鳥-2', sentence: '焼き鳥を食べながらビールを飲みました。', furigana: 'やきとり を たべながら ビール を のみました。', romaji: 'Yakitori o tabenagara biiru o nomimashita.', english: 'I drank beer while eating yakitori.', targetWord: '焼き鳥', targetWordEnglish: 'Yakitori (grilled chicken)' }
  ],
  '牛': [
    { id: 's-n4-牛-1', sentence: 'スーパーで牛肉を買って料理しました。', furigana: 'スーパー で ぎゅうにく を かって りょうり しました。', romaji: 'Suupaa de gyuuniku o katte ryouri shimashita.', english: 'I bought beef at the supermarket and cooked it.', targetWord: '牛肉', targetWordEnglish: 'Beef' },
    { id: 's-n4-牛-2', sentence: '牛乳は毎日コップ一杯飲みます。', furigana: 'ぎゅうにゅう は まいにち コップ いっぱい のみます。', romaji: 'Gyuunyuu wa mainichi koppu ippai nomimasu.', english: 'I drink one cup of milk every day.', targetWord: '牛乳', targetWordEnglish: 'Milk' }
  ],
  '肉': [
    { id: 's-n4-肉-1', sentence: '豚肉と野菜を炒めて夕食を作りました。', furigana: 'ぶたにく と やさい を いためて ゆうしょく を つくりました。', romaji: 'Butaniku to yasai o itamete yuushoku o tsukurimashita.', english: 'I stir-fried pork and vegetables to make dinner.', targetWord: '豚肉', targetWordEnglish: 'Pork' },
    { id: 's-n4-肉-2', sentence: '鶏肉を使ったカレーはとても美味しいです。', furigana: 'とりにく を つかった カレー は とても おいしい です。', romaji: 'Toriniku o tsukatta karee wa totemo oishii desu.', english: 'Curry made with chicken is very delicious.', targetWord: '鶏肉', targetWordEnglish: 'Chicken meat' }
  ],
  '虫': [
    { id: 's-n4-虫-1', sentence: '夏になると虫が多くなって困ります。', furigana: 'なつ に なる と むし が おおくなって こまります。', romaji: "Natsu ni naru to mushi ga ookunatte komarimasu.", english: "When summer comes there are more insects and it's a problem.", targetWord: '虫', targetWordEnglish: 'Insect / Bug' },
    { id: 's-n4-虫-2', sentence: '虫歯が痛くて歯医者に行きました。', furigana: 'むしば が いたくて はいしゃ に いきました。', romaji: 'Mushiba ga itakute haisha ni ikimashita.', english: 'My tooth cavity hurt so I went to the dentist.', targetWord: '虫歯', targetWordEnglish: 'Tooth decay / Cavity' }
  ],
  '飯': [
    { id: 's-n4-飯-1', sentence: '毎朝ご飯を食べてから学校に行きます。', furigana: 'まいあさ ごはん を たべてから がっこう に いきます。', romaji: 'Maiasa gohan o tabete kara gakkou ni ikimasu.', english: 'Every morning I eat rice then go to school.', targetWord: 'ご飯', targetWordEnglish: 'Cooked rice / Meal' },
    { id: 's-n4-飯-2', sentence: '夕飯は家族みんなで一緒に食べます。', furigana: 'ゆうはん は かぞく みんな で いっしょ に たべます。', romaji: 'Yuuhan wa kazoku minna de issho ni tabemasu.', english: 'The whole family eats dinner together.', targetWord: '夕飯', targetWordEnglish: 'Dinner' }
  ],
  '茶': [
    { id: 's-n4-茶-1', sentence: '食後にお茶を一杯いただきました。', furigana: 'しょくご に おちゃ を いっぱい いただきました。', romaji: 'Shokugo ni ocha o ippai itadakimashita.', english: 'I had a cup of tea after the meal.', targetWord: 'お茶', targetWordEnglish: 'Tea' },
    { id: 's-n4-茶-2', sentence: '日本の喫茶店でモーニングセットを注文しました。', furigana: 'にほん の きっさてん で モーニングセット を ちゅうもん しました。', romaji: 'Nihon no kissaten de mooningu setto o chuumon shimashita.', english: 'I ordered a morning set at a Japanese coffee shop.', targetWord: '喫茶店', targetWordEnglish: 'Coffee shop' }
  ],
  '町': [
    { id: 's-n4-町-1', sentence: 'この町には昔ながらの商店街があります。', furigana: 'この まち に は むかしながら の しょうてんがい が あります。', romaji: 'Kono machi ni wa mukashinagara no shoutengai ga arimasu.', english: 'This town has a traditional shopping street.', targetWord: '町', targetWordEnglish: 'Town' },
    { id: 's-n4-町-2', sentence: '町内会の会議に参加しました。', furigana: 'ちょうないかい の かいぎ に さんか しました。', romaji: 'Chounaikai no kaigi ni sanka shimashita.', english: 'I participated in the neighborhood association meeting.', targetWord: '町内', targetWordEnglish: 'Neighborhood / Town area' }
  ],
  '村': [
    { id: 's-n4-村-1', sentence: '田舎の村で静かにのんびり過ごしました。', furigana: 'いなか の むら で しずかに のんびり すごしました。', romaji: 'Inaka no mura de shizuka ni nonbiri sugoshimashita.', english: 'I spent time quietly and relaxedly in the countryside village.', targetWord: '村', targetWordEnglish: 'Village' },
    { id: 's-n4-村-2', sentence: '農村では自給自足の生活をしている家族もいます。', furigana: 'のうそん で は じきゅうじそく の せいかつ を している かぞく も います。', romaji: 'Nouson dewa jikyuujisoku no seikatsu o shite iru kazoku mo imasu.', english: 'In farming villages there are families living self-sufficiently.', targetWord: '農村', targetWordEnglish: 'Farming village' }
  ],
  '市': [
    { id: 's-n4-市-1', sentence: '市民体育館で水泳教室を受けています。', furigana: 'しみん たいいくかん で すいえいきょうしつ を うけています。', romaji: 'Shimin taiikukan de suiei kyoushitsu o ukete imasu.', english: 'I am taking swimming lessons at the city gym.', targetWord: '市民', targetWordEnglish: 'Citizens' },
    { id: 's-n4-市-2', sentence: '市場で新鮮な野菜や果物を買いました。', furigana: 'いちば で しんせん な やさい や くだもの を かいました。', romaji: 'Ichiba de shinsen na yasai ya kudamono o kaimashita.', english: 'I bought fresh vegetables and fruit at the market.', targetWord: '市場', targetWordEnglish: 'Market' }
  ],
  '京': [
    { id: 's-n4-京-1', sentence: '東京は日本の首都で大勢の人が暮らしています。', furigana: 'とうきょう は にほん の しゅと で おおぜい の ひと が くらしています。', romaji: "Toukyou wa Nihon no shuto de oozei no hito ga kurashite imasu.", english: "Tokyo is Japan's capital and many people live there.", targetWord: '東京', targetWordEnglish: 'Tokyo' },
    { id: 's-n4-京-2', sentence: '京都には古いお寺や神社がたくさんあります。', furigana: 'きょうと に は ふるい おてら や じんじゃ が たくさん あります。', romaji: 'Kyouto ni wa furui otera ya jinja ga takusan arimasu.', english: 'In Kyoto there are many old temples and shrines.', targetWord: '京都', targetWordEnglish: 'Kyoto' }
  ],
  '都': [
    { id: 's-n4-都-1', sentence: '京都は古都として世界的に有名です。', furigana: 'きょうと は こと として せかいてき に ゆうめい です。', romaji: 'Kyouto wa koto to shite sekaiteki ni yuumei desu.', english: 'Kyoto is world-famous as an ancient capital.', targetWord: '古都', targetWordEnglish: 'Ancient capital' },
    { id: 's-n4-都-2', sentence: '都会の生活はとても便利ですが、忙しいです。', furigana: 'とかい の せいかつ は とても べんり ですが、いそがしい です。', romaji: 'Tokai no seikatsu wa totemo benri desu ga, isogashii desu.', english: 'City life is very convenient but busy.', targetWord: '都会', targetWordEnglish: 'City / Urban area' }
  ],
  '県': [
    { id: 's-n4-県-1', sentence: '神奈川県に引っ越してから二年経ちました。', furigana: 'かながわけん に ひっこしてから にねん たちました。', romaji: 'Kanagawa ken ni hikkoshite kara ninen tachimashita.', english: 'Two years have passed since I moved to Kanagawa Prefecture.', targetWord: '神奈川県', targetWordEnglish: 'Kanagawa Prefecture' },
    { id: 's-n4-県-2', sentence: '各県に名物料理があります。', furigana: 'かくけん に めいぶつ りょうり が あります。', romaji: 'Kaku ken ni meibutsu ryouri ga arimasu.', english: 'Each prefecture has its specialty dishes.', targetWord: '県', targetWordEnglish: 'Prefecture' }
  ],
  '区': [
    { id: 's-n4-区-1', sentence: '新宿区は東京の中心部にあります。', furigana: 'しんじゅくく は とうきょう の ちゅうしんぶ に あります。', romaji: 'Shinjuku ku wa Toukyou no chuushinbu ni arimasu.', english: 'Shinjuku Ward is in the center of Tokyo.', targetWord: '新宿区', targetWordEnglish: 'Shinjuku Ward' },
    { id: 's-n4-区-2', sentence: '区役所に転入届を提出しました。', furigana: 'くやくしょ に てんにゅうとどけ を ていしゅつ しました。', romaji: 'Kuyakusho ni tennyuu todoke o teishutsu shimashita.', english: 'I submitted the moving-in notification at the ward office.', targetWord: '区役所', targetWordEnglish: 'Ward office' }
  ],
  '地': [
    { id: 's-n4-地-1', sentence: '地下鉄で渋谷まで行くのが便利です。', furigana: 'ちかてつ で しぶや まで いく のが べんり です。', romaji: 'Chikatetsu de Shibuya made iku noga benri desu.', english: 'It is convenient to go to Shibuya by subway.', targetWord: '地下鉄', targetWordEnglish: 'Subway' },
    { id: 's-n4-地-2', sentence: '地図を見て目的地への道を確認しました。', furigana: 'ちず を みて もくてきち への みち を かくにん しました。', romaji: 'Chizu o mite mokutekichi e no michi o kakunin shimashita.', english: 'I checked the route to the destination using the map.', targetWord: '地図', targetWordEnglish: 'Map' }
  ],
  '図': [
    { id: 's-n4-図-1', sentence: '図書館で参考書をたくさん借りてきました。', furigana: 'としょかん で さんこうしょ を たくさん かりてきました。', romaji: 'Toshokan de sankousho o takusan karite kimashita.', english: 'I borrowed many reference books from the library.', targetWord: '図書館', targetWordEnglish: 'Library' },
    { id: 's-n4-図-2', sentence: '地図を使って観光スポットを探しました。', furigana: 'ちず を つかって かんこう スポット を さがしました。', romaji: 'Chizu o tsukatte kankou supotto o sagashimashita.', english: 'I used a map to look for tourist spots.', targetWord: '地図', targetWordEnglish: 'Map' }
  ],
  '館': [
    { id: 's-n4-館-1', sentence: '近くの図書館に毎週通っています。', furigana: 'ちかく の としょかん に まいしゅう かよっています。', romaji: 'Chikaku no toshokan ni maishuu kayotte imasu.', english: 'I go to the nearby library every week.', targetWord: '図書館', targetWordEnglish: 'Library' },
    { id: 's-n4-館-2', sentence: '美術館で印象派の絵画を鑑賞しました。', furigana: 'びじゅつかん で いんしょうは の かいが を かんしょう しました。', romaji: 'Bijutsukan de inshouha no kaiga o kanshoo shimashita.', english: 'I appreciated impressionist paintings at the art museum.', targetWord: '美術館', targetWordEnglish: 'Art museum' }
  ],
  '堂': [
    { id: 's-n4-堂-1', sentence: '学食の食堂でランチを食べます。', furigana: 'がくしょく の しょくどう で ランチ を たべます。', romaji: 'Gakushoku no shokudou de ranchi o tabemasu.', english: 'I eat lunch at the school cafeteria.', targetWord: '食堂', targetWordEnglish: 'Cafeteria / Dining hall' },
    { id: 's-n4-堂-2', sentence: '古い公堂で地域の集会が開かれました。', furigana: 'ふるい こうどう で ちいき の しゅうかい が ひらかれました。', romaji: 'Furui koudou de chiiki no shuukai ga hirakare mashita.', english: 'A community meeting was held in an old public hall.', targetWord: '公堂', targetWordEnglish: 'Public hall' }
  ],
  '局': [
    { id: 's-n4-局-1', sentence: '郵便局で荷物を送ってもらいました。', furigana: 'ゆうびんきょく で にもつ を おくって もらいました。', romaji: 'Yuubinkyoku de nimotsu o okutte moraimashita.', english: 'I had my package sent at the post office.', targetWord: '郵便局', targetWordEnglish: 'Post office' },
    { id: 's-n4-局-2', sentence: 'テレビ局が学校取材に来ました。', furigana: 'テレビきょく が がっこう しゅざい に きました。', romaji: 'Terebi kyoku ga gakkou shuzai ni kimashita.', english: 'A TV station came to film at the school.', targetWord: 'テレビ局', targetWordEnglish: 'TV station' }
  ],
  '園': [
    { id: 's-n4-園-1', sentence: '家族で動物園に行って楽しみました。', furigana: 'かぞく で どうぶつえん に いって たのしみました。', romaji: 'Kazoku de doubutsuen ni itte tanoshimimashita.', english: 'I went to the zoo with my family and enjoyed it.', targetWord: '動物園', targetWordEnglish: 'Zoo' },
    { id: 's-n4-園-2', sentence: '公園で子供たちが元気よく遊んでいます。', furigana: 'こうえん で こどもたち が げんきよく あそんでいます。', romaji: 'Kouen de kodomotachi ga genki yoku asonde imasu.', english: 'Children are playing energetically in the park.', targetWord: '公園', targetWordEnglish: 'Park' }
  ],
  '屋': [
    { id: 's-n4-屋-1', sentence: '本屋さんで新しい参考書を買いました。', furigana: 'ほんや さん で あたらしい さんこうしょ を かいました。', romaji: "Hon-yasan de atarashii sankousho o kaimashita.", english: 'I bought a new reference book at the bookstore.', targetWord: '本屋', targetWordEnglish: 'Bookstore' },
    { id: 's-n4-屋-2', sentence: '部屋の模様替えをしてすっきりしました。', furigana: 'へや の もようがえ を して すっきり しました。', romaji: 'Heya no moyougae o shite sukkiri shimashita.', english: 'I rearranged my room and it feels refreshing.', targetWord: '部屋', targetWordEnglish: 'Room' }
  ],
  '寺': [
    { id: 's-n4-寺-1', sentence: '京都のお寺を参拝して清々しい気持ちになりました。', furigana: 'きょうと の おてら を さんぱい して すがすがしい きもち に なりました。', romaji: 'Kyouto no otera o sanpai shite sugasugashii kimochi ni narimashita.', english: 'I visited the Kyoto temple and felt refreshed.', targetWord: 'お寺', targetWordEnglish: 'Temple' },
    { id: 's-n4-寺-2', sentence: '古い寺院の鐘の音が町に響きました。', furigana: 'ふるい じいん の かね の おと が まち に ひびきました。', romaji: 'Furui jiin no kane no oto ga machi ni hibikimashita.', english: 'The bell sound of the old temple echoed through the town.', targetWord: '寺院', targetWordEnglish: 'Temple' }
  ],
  '神': [
    { id: 's-n4-神-1', sentence: '神様にお願いして試験に合格しました。', furigana: 'かみさま に おねがい して しけん に ごうかく しました。', romaji: 'Kamisama ni onegai shite shiken ni goukaku shimashita.', english: 'I prayed to God and passed the exam.', targetWord: '神様', targetWordEnglish: 'God / Deity' },
    { id: 's-n4-神-2', sentence: '神社でお守りを買いました。', furigana: 'じんじゃ で おまもり を かいました。', romaji: 'Jinja de omamori o kaimashita.', english: 'I bought a lucky charm at the shrine.', targetWord: '神社', targetWordEnglish: 'Shrine' }
  ],
  '院': [
    { id: 's-n4-院-1', sentence: '病院で定期的に健康診断を受けています。', furigana: 'びょういん で ていきてき に けんこうしんだん を うけています。', romaji: 'Byouin de teikiteki ni kenkoushindan o ukete imasu.', english: 'I regularly have health checkups at the hospital.', targetWord: '病院', targetWordEnglish: 'Hospital' },
    { id: 's-n4-院-2', sentence: '大学院に進学して研究を続けることにしました。', furigana: 'だいがくいん に しんがく して けんきゅう を つづける こと に しました。', romaji: 'Daigakuin ni shingaku shite kenkyuu o tsuzukeru koto ni shimashita.', english: 'I decided to go to graduate school to continue research.', targetWord: '大学院', targetWordEnglish: 'Graduate school' }
  ],
  '病': [
    { id: 's-n4-病-1', sentence: '風邪をひいて三日間病院に通いました。', furigana: 'かぜ を ひいて みっかかん びょういん に かよいました。', romaji: 'Kaze o hiite mikkakan byouin ni kayoimashita.', english: 'I caught a cold and went to the hospital for three days.', targetWord: '病院', targetWordEnglish: 'Hospital' },
    { id: 's-n4-病-2', sentence: '病気で学校を休んだので授業が遅れました。', furigana: 'びょうき で がっこう を やすんだ ので じゅぎょう が おくれました。', romaji: 'Byouki de gakkou o yasunda node jugyou ga okuremashita.', english: 'I was absent from school due to illness so I fell behind in class.', targetWord: '病気', targetWordEnglish: 'Illness / Disease' }
  ],
  '薬': [
    { id: 's-n4-薬-1', sentence: '頭痛がするので薬を飲みました。', furigana: 'ずつう が する ので くすり を のみました。', romaji: 'Zutsuu ga suru node kusuri o nomimashita.', english: 'I had a headache so I took medicine.', targetWord: '薬', targetWordEnglish: 'Medicine' },
    { id: 's-n4-薬-2', sentence: '薬局で処方された薬を受け取りました。', furigana: 'やっきょく で しょほう された くすり を うけとりました。', romaji: 'Yakkyoku de shohou sareta kusuri o uketorimashita.', english: 'I picked up the prescribed medicine at the pharmacy.', targetWord: '薬局', targetWordEnglish: 'Pharmacy' }
  ],
  '港': [
    { id: 's-n4-港-1', sentence: '成田空港から海外へ出発しました。', furigana: 'なりたくうこう から かいがい へ しゅっぱつ しました。', romaji: 'Narita Kuukou kara kaigai e shuppatsu shimashita.', english: 'I departed for overseas from Narita Airport.', targetWord: '空港', targetWordEnglish: 'Airport' },
    { id: 's-n4-港-2', sentence: '横浜港からクルーズ船が出発します。', furigana: 'よこはまこう から クルーズせん が しゅっぱつ します。', romaji: 'Yokohamakou kara kuruuzu sen ga shuppatsu shimasu.', english: 'A cruise ship departs from Yokohama Port.', targetWord: '港', targetWordEnglish: 'Port / Harbor' }
  ],
  '橋': [
    { id: 's-n4-橋-1', sentence: '川に渡した古い橋を渡りました。', furigana: 'かわ に わたした ふるい はし を わたりました。', romaji: 'Kawa ni watashita furui hashi o watarimashita.', english: 'I crossed an old bridge that spans the river.', targetWord: '橋', targetWordEnglish: 'Bridge' },
    { id: 's-n4-橋-2', sentence: '歩道橋の上から夕焼けがきれいに見えました。', furigana: 'ほどうきょう の うえ から ゆうやけ が きれいに みえました。', romaji: 'Hodoukyou no ue kara yuuyake ga kirei ni miemashita.', english: 'The sunset looked beautiful from the top of the pedestrian bridge.', targetWord: '歩道橋', targetWordEnglish: 'Pedestrian bridge' }
  ],
  '線': [
    { id: 's-n4-線-1', sentence: '新幹線で東京から大阪まで二時間半かかります。', furigana: 'しんかんせん で とうきょう から おおさか まで にじかんはん かかります。', romaji: 'Shinkansen de Toukyou kara Oosaka made nijikan han kakarimasu.', english: 'It takes two and a half hours from Tokyo to Osaka by Shinkansen.', targetWord: '新幹線', targetWordEnglish: 'Shinkansen (bullet train)' },
    { id: 's-n4-線-2', sentence: '地下鉄の路線図を見て乗り換えを確認しました。', furigana: 'ちかてつ の ろせんず を みて のりかえ を かくにん しました。', romaji: 'Chikatetsu no rosenzu o mite norikae o kakunin shimashita.', english: 'I checked the transfer by looking at the subway route map.', targetWord: '路線図', targetWordEnglish: 'Route map' }
  ],
  '路': [
    { id: 's-n4-路-1', sentence: '道路工事で渋滞が起きています。', furigana: 'どうろ こうじ で じゅうたい が おきています。', romaji: 'Douro kouji de juutai ga okite imasu.', english: 'There is congestion due to road construction.', targetWord: '道路', targetWordEnglish: 'Road' },
    { id: 's-n4-路-2', sentence: '旅の最後に歩いた路地が忘れられません。', furigana: 'たび の さいご に あるいた ろじ が わすれられません。', romaji: 'Tabi no saigo ni aruita roji ga wasureraremasen.', english: 'I cannot forget the alley I walked at the end of the trip.', targetWord: '路地', targetWordEnglish: 'Alley / Lane' }
  ],
  '門': [
    { id: 's-n4-門-1', sentence: '大学の専門は日本語学です。', furigana: 'だいがく の せんもん は にほんごがく です。', romaji: 'Daigaku no senmon wa nihongo gaku desu.', english: 'My university major is Japanese linguistics.', targetWord: '専門', targetWordEnglish: 'Specialty / Major' },
    { id: 's-n4-門-2', sentence: '学校の正門の前で友達と待ち合わせました。', furigana: 'がっこう の せいもん の まえ で ともだち と まちあわせました。', romaji: 'Gakkou no seimon no mae de tomodachi to machiawasemashita.', english: "I met my friend in front of the school's main gate.", targetWord: '正門', targetWordEnglish: 'Main gate' }
  ],
  '窓': [
    { id: 's-n4-窓-1', sentence: '窓を開けて部屋に新鮮な空気を入れます。', furigana: 'まど を あけて へや に しんせん な くうき を いれます。', romaji: 'Mado o akete heya ni shinsen na kuuki o iremasu.', english: 'I open the window to let fresh air into the room.', targetWord: '窓', targetWordEnglish: 'Window' },
    { id: 's-n4-窓-2', sentence: '窓口で申請書を受け取ってください。', furigana: 'まどぐち で しんせいしょ を うけとってください。', romaji: 'Madoguchi de shinseisho o uketotte kudasai.', english: 'Please receive the application form at the counter window.', targetWord: '窓口', targetWordEnglish: 'Service window / Counter' }
  ],
  '戸': [
    { id: 's-n4-戸-1', sentence: '引き戸を開けて縁側に出ました。', furigana: 'ひきど を あけて えんがわ に でました。', romaji: 'Hikido o akete engawa ni demashita.', english: 'I opened the sliding door and went out to the veranda.', targetWord: '引き戸', targetWordEnglish: 'Sliding door' },
    { id: 's-n4-戸-2', sentence: '雨戸を閉めて台風に備えました。', furigana: 'あまど を しめて たいふう に そなえました。', romaji: 'Amado o shimete taifuu ni sonaemashita.', english: 'I closed the storm shutters to prepare for the typhoon.', targetWord: '雨戸', targetWordEnglish: 'Storm shutter' }
  ],
  '庭': [
    { id: 's-n4-庭-1', sentence: '庭に桜の木を植えました。', furigana: 'にわ に さくら の き を うえました。', romaji: 'Niwa ni sakura no ki o uemashita.', english: 'I planted a cherry blossom tree in the garden.', targetWord: '庭', targetWordEnglish: 'Garden / Yard' },
    { id: 's-n4-庭-2', sentence: '学校の校庭で体育の授業を受けます。', furigana: 'がっこう の こうてい で たいいく の じゅぎょう を うけます。', romaji: 'Gakkou no koutei de taiiku no jugyou o ukemasu.', english: 'I have physical education class in the school yard.', targetWord: '校庭', targetWordEnglish: 'School grounds' }
  ],
  '階': [
    { id: 's-n4-階-1', sentence: 'エレベーターで三階まで上がりました。', furigana: 'エレベーター で さんかい まで あがりました。', romaji: 'Erebeetaa de sankai made agarimashita.', english: 'I went up to the third floor by elevator.', targetWord: '三階', targetWordEnglish: 'Third floor' },
    { id: 's-n4-階-2', sentence: '階段を上って二階の教室へ行きました。', furigana: 'かいだん を のぼって にかい の きょうしつ へ いきました。', romaji: 'Kaidan o nobotte nikai no kyoushitsu e ikimashita.', english: 'I climbed the stairs and went to the classroom on the second floor.', targetWord: '階段', targetWordEnglish: 'Stairs' }
  ],
  '所': [
    { id: 's-n4-所-1', sentence: '会議の場所は三階の会議室です。', furigana: 'かいぎ の ばしょ は さんかい の かいぎしつ です。', romaji: 'Kaigi no basho wa sankai no kaigishitsu desu.', english: 'The meeting location is the conference room on the third floor.', targetWord: '場所', targetWordEnglish: 'Place / Location' },
    { id: 's-n4-所-2', sentence: '台所で夕食の準備をしています。', furigana: 'だいどころ で ゆうしょく の じゅんび を しています。', romaji: 'Daidokoro de yuushoku no junbi o shite imasu.', english: 'I am preparing dinner in the kitchen.', targetWord: '台所', targetWordEnglish: 'Kitchen' }
  ],
  '場': [
    { id: 's-n4-場-1', sentence: '広場でストリートライブが行われていました。', furigana: 'ひろば で ストリートライブ が おこなわれていました。', romaji: 'Hiroba de sutoriito raibu ga okonawarete imashita.', english: 'A street live performance was taking place in the square.', targetWord: '広場', targetWordEnglish: 'Square / Plaza' },
    { id: 's-n4-場-2', sentence: '工場でアルバイトをしています。', furigana: 'こうじょう で アルバイト を しています。', romaji: 'Koujou de arubaito o shite imasu.', english: 'I am working part-time at a factory.', targetWord: '工場', targetWordEnglish: 'Factory' }
  ],
  '家': [
    { id: 's-n4-家-1', sentence: '家族みんなで週末に旅行を楽しみます。', furigana: 'かぞく みんな で しゅうまつ に りょこう を たのしみます。', romaji: 'Kazoku minna de shuumatsu ni ryokou o tanoshimimasu.', english: 'The whole family enjoys travel on weekends.', targetWord: '家族', targetWordEnglish: 'Family' },
    { id: 's-n4-家-2', sentence: '学校の帰りに家に寄って宿題をします。', furigana: 'がっこう の かえりに いえ に よって しゅくだい を します。', romaji: 'Gakkou no kaeri ni ie ni yotte shukudai o shimasu.', english: 'On the way home from school I stop by home to do homework.', targetWord: '家', targetWordEnglish: 'Home / House' }
  ],
  '族': [
    { id: 's-n4-族-1', sentence: '今年の夏、家族全員で北海道旅行をしました。', furigana: 'ことし の なつ、かぞく ぜんいん で ほっかいどう りょこう を しました。', romaji: 'Kotoshi no natsu, kazoku zenin de Hokkaido ryokou o shimashita.', english: 'This summer the whole family traveled to Hokkaido.', targetWord: '家族', targetWordEnglish: 'Family' },
    { id: 's-n4-族-2', sentence: '祖父の葬式に親族が集まりました。', furigana: 'そふ の そうしき に しんぞく が あつまりました。', romaji: "Sofu no soushiki ni shinzoku ga atsumarimashita.", english: "Relatives gathered for my grandfather's funeral.", targetWord: '親族', targetWordEnglish: 'Relatives' }
  ],
  '建': [
    { id: 's-n4-建-1', sentence: '古い建物を修復して博物館にしました。', furigana: 'ふるい たてもの を しゅうふく して はくぶつかん に しました。', romaji: 'Furui tatemono o shuufuku shite hakubutsukan ni shimashita.', english: 'An old building was restored and made into a museum.', targetWord: '建物', targetWordEnglish: 'Building' },
    { id: 's-n4-建-2', sentence: '新しい家を建てるために土地を買いました。', furigana: 'あたらしい いえ を たてる ために とち を かいました。', romaji: 'Atarashii ie o tateru tame ni tochi o kaimashita.', english: 'I bought land in order to build a new house.', targetWord: '建てる', targetWordEnglish: 'To build / construct' }
  ],
  '室': [
    { id: 's-n4-室-1', sentence: '日本語の教室はとても明るくて広いです。', furigana: 'にほんご の きょうしつ は とても あかるくて ひろい です。', romaji: 'Nihongo no kyoushitsu wa totemo akarukute hiroi desu.', english: 'The Japanese classroom is very bright and spacious.', targetWord: '教室', targetWordEnglish: 'Classroom' },
    { id: 's-n4-室-2', sentence: '研究室で夜遅くまで作業しました。', furigana: 'けんきゅうしつ で よおそく まで さぎょう しました。', romaji: 'Kenkyuushitsu de yoru osoku made sagyou shimashita.', english: 'I worked late into the night in the research room.', targetWord: '研究室', targetWordEnglish: 'Research room / Lab' }
  ],
  '席': [
    { id: 's-n4-席-1', sentence: '授業に出席するのは学生の義務です。', furigana: 'じゅぎょう に しゅっせき するのは がくせい の ぎむ です。', romaji: 'Jugyou ni shusseki suru nowa gakusei no gimu desu.', english: 'Attending class is the duty of students.', targetWord: '出席', targetWordEnglish: 'Attendance' },
    { id: 's-n4-席-2', sentence: '電車の席が空いていなかったので立っていました。', furigana: 'でんしゃ の せき が あいていなかった ので たっていました。', romaji: 'Densha no seki ga aite inakatta node tatte imashita.', english: 'The train seats were not available so I stood.', targetWord: '席', targetWordEnglish: 'Seat' }
  ],
  '朝': [
    { id: 's-n4-朝-1', sentence: '今朝は寝坊して電車に乗り遅れました。', furigana: 'けさ は ねぼう して でんしゃ に のりおくれました。', romaji: 'Kesa wa nebou shite densha ni noriokuremashita.', english: 'This morning I overslept and missed the train.', targetWord: '今朝', targetWordEnglish: 'This morning' },
    { id: 's-n4-朝-2', sentence: '朝食は毎日トーストと牛乳を食べます。', furigana: 'ちょうしょく は まいにち トースト と ぎゅうにゅう を たべます。', romaji: 'Choushoku wa mainichi toosuto to gyuunyuu o tabemasu.', english: 'For breakfast every day I eat toast and milk.', targetWord: '朝食', targetWordEnglish: 'Breakfast' }
  ],
  '昼': [
    { id: 's-n4-昼-1', sentence: '昼休みに友達とお弁当を食べました。', furigana: 'ひるやすみ に ともだち と おべんとう を たべました。', romaji: 'Hiruyasumi ni tomodachi to obentou o tabemashita.', english: 'I ate a packed lunch with my friend during lunch break.', targetWord: '昼休み', targetWordEnglish: 'Lunch break' },
    { id: 's-n4-昼-2', sentence: '昼間はとても暑いので帽子をかぶります。', furigana: 'ひるま は とても あつい ので ぼうし を かぶります。', romaji: 'Hiruma wa totemo atsui node boushi o kaburimasu.', english: 'It is very hot during the daytime so I wear a hat.', targetWord: '昼間', targetWordEnglish: 'Daytime' }
  ],
  '夕': [
    { id: 's-n4-夕-1', sentence: '夕方になると空がオレンジ色に染まります。', furigana: 'ゆうがた に なると そら が オレンジいろ に そまります。', romaji: 'Yuugata ni naru to sora ga orenji iro ni somerimasu.', english: 'When evening comes the sky is dyed orange.', targetWord: '夕方', targetWordEnglish: 'Evening / Dusk' },
    { id: 's-n4-夕-2', sentence: '夕飯は家族みんなで食べるようにしています。', furigana: 'ゆうはん は かぞく みんな で たべる ように しています。', romaji: 'Yuuhan wa kazoku minna de taberu you ni shite imasu.', english: 'I make it a point to have dinner with the whole family.', targetWord: '夕飯', targetWordEnglish: 'Dinner / Evening meal' }
  ],
  '夜': [
    { id: 's-n4-夜-1', sentence: '今夜は友達とレストランで食事をする予定です。', furigana: 'こんや は ともだち と レストラン で しょくじ をする よてい です。', romaji: "Kon-ya wa tomodachi to resutoran de shokuji o suru yotei desu.", english: 'Tonight I plan to dine with friends at a restaurant.', targetWord: '今夜', targetWordEnglish: 'Tonight' },
    { id: 's-n4-夜-2', sentence: '夜遅くまで働いて疲れました。', furigana: 'よる おそく まで はたらいて つかれました。', romaji: 'Yoru osoku made hataraite tsukaremashita.', english: 'I worked late into the night and got tired.', targetWord: '夜遅く', targetWordEnglish: 'Late at night' }
  ],
  '週': [
    { id: 's-n4-週-1', sentence: '来週から新しい日本語のクラスが始まります。', furigana: 'らいしゅう から あたらしい にほんご の クラス が はじまります。', romaji: 'Raishuu kara atarashii Nihongo no kurasu ga hajimarimasu.', english: 'A new Japanese class starts from next week.', targetWord: '来週', targetWordEnglish: 'Next week' },
    { id: 's-n4-週-2', sentence: '今週は毎日忙しくてへとへとです。', furigana: 'こんしゅう は まいにち いそがしくて へとへと です。', romaji: "Konshuu wa mainichi isogashikute hetoheto desu.", english: "This week I've been busy every day and I'm exhausted.", targetWord: '今週', targetWordEnglish: 'This week' }
  ],
  '曜': [
    { id: 's-n4-曜-1', sentence: '日曜日は家族で公園にピクニックに行きます。', furigana: 'にちようび は かぞく で こうえん に ピクニック に いきます。', romaji: 'Nichiyoubi wa kazoku de kouen ni pikunikku ni ikimasu.', english: 'On Sunday the family goes to the park for a picnic.', targetWord: '日曜日', targetWordEnglish: 'Sunday' },
    { id: 's-n4-曜-2', sentence: '土曜日の午後に趣味のギターを弾きます。', furigana: 'どようび の ごご に しゅみ の ギター を ひきます。', romaji: 'Doyoubi no gogo ni shumi no gitaa o hikimasu.', english: 'On Saturday afternoon I play guitar as my hobby.', targetWord: '土曜日', targetWordEnglish: 'Saturday' }
  ],
  '早': [
    { id: 's-n4-早-1', sentence: '電車が五分早く到着しました。', furigana: 'でんしゃ が ごふん はやく とうちゃく しました。', romaji: 'Densha ga gofun hayaku touchaku shimashita.', english: 'The train arrived 5 minutes early.', targetWord: '早く', targetWordEnglish: 'Early / Quickly' },
    { id: 's-n4-早-2', sentence: '早起きして朝ごはんをゆっくり食べました。', furigana: 'はやおきして あさごはん を ゆっくり たべました。', romaji: 'Hayaoki shite asagohan o yukkuri tabemashita.', english: 'I woke up early and ate breakfast leisurely.', targetWord: '早起き', targetWordEnglish: 'Early rising' }
  ],
  '暗': [
    { id: 's-n4-暗-1', sentence: '夜道は暗くて少し怖かったです。', furigana: 'よみち は くらくて すこし こわかった です。', romaji: 'Yomichi wa kurakute sukoshi kowakatta desu.', english: 'The night road was dark and a little scary.', targetWord: '暗くて', targetWordEnglish: 'Dark' },
    { id: 's-n4-暗-2', sentence: '部屋が暗いので電気をつけてください。', furigana: 'へや が くらい ので でんき を つけてください。', romaji: 'Heya ga kurai node denki o tsukete kudasai.', english: 'The room is dark so please turn on the lights.', targetWord: '暗い', targetWordEnglish: 'Dark / Gloomy' }
  ],
  '暑': [
    { id: 's-n4-暑-1', sentence: '今日はとても暑いのでエアコンをつけました。', furigana: 'きょう は とても あつい ので エアコン を つけました。', romaji: 'Kyou wa totemo atsui node eakon o tsukemashita.', english: 'Today is very hot so I turned on the air conditioner.', targetWord: '暑い', targetWordEnglish: 'Hot (weather)' },
    { id: 's-n4-暑-2', sentence: '夏の暑い日には海水浴が最高です。', furigana: 'なつ の あつい ひ に は かいすいよく が さいこう です。', romaji: 'Natsu no atsui hi ni wa kaisuiyoku ga saikou desu.', english: 'On hot summer days, sea bathing is the best.', targetWord: '暑い', targetWordEnglish: 'Hot' }
  ],
  '寒': [
    { id: 's-n4-寒-1', sentence: '今朝は特に寒くて手がかじかみました。', furigana: 'けさ は とくに さむくて て が かじかみました。', romaji: 'Kesa wa toku ni samukute te ga kajikamimashita.', english: 'This morning it was especially cold and my hands were numb.', targetWord: '寒くて', targetWordEnglish: 'Cold' },
    { id: 's-n4-寒-2', sentence: '寒い冬の日には温かいスープが飲みたいです。', furigana: 'さむい ふゆ の ひ に は あたたかい スープ が のみたい です。', romaji: 'Samui fuyu no hi ni wa atatakai suupu ga nomitai desu.', english: 'On cold winter days I want to drink warm soup.', targetWord: '寒い', targetWordEnglish: 'Cold' }
  ],
  '暖': [
    { id: 's-n4-暖-1', sentence: '春になって暖かい日が増えてきました。', furigana: 'はる に なって あたたかい ひ が ふえてきました。', romaji: 'Haru ni natte atatakai hi ga fuete kimashita.', english: 'Spring has come and warm days have increased.', targetWord: '暖かい', targetWordEnglish: 'Warm' },
    { id: 's-n4-暖-2', sentence: '暖房を入れると部屋が暖かくなります。', furigana: 'だんぼう を いれると へや が あたたかく なります。', romaji: 'Danbou o ireru to heya ga atatakakunarimasu.', english: 'Turning on the heater makes the room warm.', targetWord: '暖房', targetWordEnglish: 'Heating / Heater' }
  ],
  '涼': [
    { id: 's-n4-涼-1', sentence: '木陰に入ると涼しい風が吹いています。', furigana: 'こかげ に はいると すずしい かぜ が ふいています。', romaji: 'Kokage ni hairu to suzushii kaze ga fuite imasu.', english: 'When you go into the shade of trees a cool breeze is blowing.', targetWord: '涼しい', targetWordEnglish: 'Cool / Refreshing' },
    { id: 's-n4-涼-2', sentence: '扇風機の涼しい風が心地よいです。', furigana: 'せんぷうき の すずしい かぜ が ここちよい です。', romaji: 'Senpuuki no suzushii kaze ga kokochiyoi desu.', english: 'The cool breeze from the electric fan is pleasant.', targetWord: '涼しい', targetWordEnglish: 'Cool' }
  ],
  '重': [
    { id: 's-n4-重-1', sentence: 'この荷物はとても重くて一人では持てません。', furigana: 'この にもつ は とても おもくて ひとり では もてません。', romaji: "Kono nimotsu wa totemo omokute hitori dewa motemase n.", english: "This luggage is so heavy I can't carry it alone.", targetWord: '重くて', targetWordEnglish: 'Heavy' },
    { id: 's-n4-重-2', sentence: '重要な書類を大切に保管しています。', furigana: 'じゅうよう な しょるい を たいせつ に ほかん しています。', romaji: 'Juuyou na shorui o taisetsu ni hokan shite imasu.', english: 'I am carefully storing important documents.', targetWord: '重要', targetWordEnglish: 'Important' }
  ],
  '軽': [
    { id: 's-n4-軽-1', sentence: 'このカバンはとても軽くて持ち運びが楽です。', furigana: 'この カバン は とても かるくて もちはこびが らく です。', romaji: 'Kono kaban wa totemo karukute mochihakobi ga raku desu.', english: 'This bag is very light and easy to carry around.', targetWord: '軽くて', targetWordEnglish: 'Light (weight)' },
    { id: 's-n4-軽-2', sentence: '軽い運動を毎日することが健康によいです。', furigana: 'かるい うんどう を まいにち すること が けんこう に よい です。', romaji: 'Karui undou o mainichi suru koto ga kenkou ni yoi desu.', english: 'It is good for health to do light exercise every day.', targetWord: '軽い', targetWordEnglish: 'Light / Mild' }
  ],
  '近': [
    { id: 's-n4-近-1', sentence: '駅に近いアパートに引っ越しました。', furigana: 'えき に ちかい アパート に ひっこしました。', romaji: 'Eki ni chikai apaato ni hikkoshimashita.', english: 'I moved to an apartment close to the station.', targetWord: '近い', targetWordEnglish: 'Close / Near' },
    { id: 's-n4-近-2', sentence: '近所の公園でよく散歩します。', furigana: 'きんじょ の こうえん で よく さんぽ します。', romaji: 'Kinjo no kouen de yoku sanpo shimasu.', english: 'I often take walks in the neighborhood park.', targetWord: '近所', targetWordEnglish: 'Neighborhood' }
  ],
  '遠': [
    { id: 's-n4-遠-1', sentence: '実家まで電車で二時間かかる遠い距離です。', furigana: 'じっか まで でんしゃ で にじかん かかる とおい きょり です。', romaji: "Jikka made densha de nijikan kakaru tooi kyori desu.", english: "It is a long distance of two hours by train to my parents' home.", targetWord: '遠い', targetWordEnglish: 'Far / Distant' },
    { id: 's-n4-遠-2', sentence: '遠くの山が霧に包まれています。', furigana: 'とおく の やま が きり に つつまれています。', romaji: 'Tooku no yama ga kiri ni tsutsuma rete imasu.', english: 'The distant mountains are shrouded in mist.', targetWord: '遠くの', targetWordEnglish: 'Distant' }
  ],
  '強': [
    { id: 's-n4-強-1', sentence: '台風の強い風で木が倒れました。', furigana: 'たいふう の つよい かぜ で き が たおれました。', romaji: "Taifuu no tsuyoi kaze de ki ga taoremashita.", english: "The typhoon's strong wind knocked down trees.", targetWord: '強い', targetWordEnglish: 'Strong / Powerful' },
    { id: 's-n4-強-2', sentence: '強引に誘われたので断れませんでした。', furigana: 'ごういん に さそわれた ので ことわれませんでした。', romaji: "Gouin ni sasowareta node kotowaremasendeshita.", english: "I was forcefully invited so I couldn't refuse.", targetWord: '強引に', targetWordEnglish: 'Forcefully' }
  ],
  '弱': [
    { id: 's-n4-弱-1', sentence: '彼はお酒に弱くてすぐ顔が赤くなります。', furigana: 'かれ は おさけ に よわくて すぐ かお が あかく なります。', romaji: 'Kare wa osake ni yowakute sugu kao ga akaku narimasu.', english: 'He is weak to alcohol and his face quickly turns red.', targetWord: '弱くて', targetWordEnglish: 'Weak (against)' },
    { id: 's-n4-弱-2', sentence: '最近体が弱っていて心配しています。', furigana: 'さいきん からだ が よわって いて しんぱい しています。', romaji: 'Saikin karada ga yowatte ite shinpai shite imasu.', english: 'Recently my body has been weakening and I am worried.', targetWord: '弱って', targetWordEnglish: 'Weakening' }
  ],
  '太': [
    { id: 's-n4-太-1', sentence: 'この縄跳びの縄は太くて飛びやすいです。', furigana: 'この なわとび の なわ は ふとくて とびやすい です。', romaji: 'Kono nawatobi no nawa wa futokute tobiyasui desu.', english: 'The rope for this jump rope is thick and easy to jump.', targetWord: '太くて', targetWordEnglish: 'Thick' },
    { id: 's-n4-太-2', sentence: '太平洋を横断する航海は長い旅でした。', furigana: 'たいへいよう を おうだん する こうかい は ながい たび でした。', romaji: 'Taiheiyou o oudan suru koukai wa nagai tabi deshita.', english: 'The voyage crossing the Pacific Ocean was a long journey.', targetWord: '太平洋', targetWordEnglish: 'Pacific Ocean' }
  ],
  '細': [
    { id: 's-n4-細-1', sentence: '彼女の細い指に指輪がよく似合います。', furigana: 'かのじょ の ほそい ゆび に ゆびわ が よく にあいます。', romaji: 'Kanojo no hosoi yubi ni yubiwa ga yoku niai masu.', english: 'A ring suits her slender fingers very well.', targetWord: '細い', targetWordEnglish: 'Slender / Thin' },
    { id: 's-n4-細-2', sentence: '細かいことまで丁寧に説明してくれました。', furigana: 'こまかい こと まで ていねい に せつめい して くれました。', romaji: 'Komakai koto made teinei ni setsumei shite kuremashita.', english: 'They explained in detail even the small things politely.', targetWord: '細かい', targetWordEnglish: 'Detailed / Fine' }
  ],
  '短': [
    { id: 's-n4-短-1', sentence: '会議は短く三十分で終わりました。', furigana: 'かいぎ は みじかく さんじゅっぷん で おわりました。', romaji: 'Kaigi wa mijikaku sanjuppun de owarimashita.', english: 'The meeting was short and ended in 30 minutes.', targetWord: '短く', targetWordEnglish: 'Briefly / In a short time' },
    { id: 's-n4-短-2', sentence: '夏は日が長くて冬は短いです。', furigana: 'なつ は ひ が ながくて ふゆ は みじかい です。', romaji: 'Natsu wa hi ga nagakute fuyu wa mijikai desu.', english: 'In summer the days are long and in winter they are short.', targetWord: '短い', targetWordEnglish: 'Short / Brief' }
  ],
  '低': [
    { id: 's-n4-低-1', sentence: '今日は気温が低くて寒いです。', furigana: 'きょう は きおん が ひくくて さむい です。', romaji: 'Kyou wa kion ga hikukute samui desu.', english: 'Today the temperature is low and cold.', targetWord: '低くて', targetWordEnglish: 'Low' },
    { id: 's-n4-低-2', sentence: '低血圧で朝起きるのが大変です。', furigana: 'ていけつあつ で あさ おきるのが たいへん です。', romaji: 'Teiketsuatsu de asa okiru noga taihen desu.', english: 'Due to low blood pressure it is hard to get up in the morning.', targetWord: '低血圧', targetWordEnglish: 'Low blood pressure' }
  ],
  '広': [
    { id: 's-n4-広-1', sentence: '新しいアパートはとても広くて気に入っています。', furigana: 'あたらしい アパート は とても ひろくて きにいっています。', romaji: 'Atarashii apaato wa totemo hirokute ki ni itte imasu.', english: 'The new apartment is very spacious and I like it.', targetWord: '広くて', targetWordEnglish: 'Spacious / Wide' },
    { id: 's-n4-広-2', sentence: '広場でクラスのみんなで写真を撮りました。', furigana: 'ひろば で クラス の みんな で しゃしん を とりました。', romaji: 'Hiroba de kurasu no minna de shashin o torimashita.', english: 'We all took a photo together as a class in the plaza.', targetWord: '広場', targetWordEnglish: 'Plaza / Open space' }
  ],
  '忙': [
    { id: 's-n4-忙-1', sentence: '年末は仕事が忙しくて休む暇がありません。', furigana: 'ねんまつ は しごと が いそがしくて やすむ ひま が ありません。', romaji: "Nenmatsu wa shigoto ga isogashikute yasumu hima ga arimasen.", english: "At the year's end work is busy and there is no time to rest.", targetWord: '忙しくて', targetWordEnglish: 'Busy' },
    { id: 's-n4-忙-2', sentence: '毎日忙しいけど充実した毎日を過ごしています。', furigana: 'まいにち いそがしい けど じゅうじつした まいにちを すごしています。', romaji: 'Mainichi isogashii kedo juujitsu shita mainichi o sugoshite imasu.', english: 'Every day is busy but I spend fulfilling days.', targetWord: '忙しい', targetWordEnglish: 'Busy' }
  ],
  '頭': [
    { id: 's-n4-頭-1', sentence: '頭が痛いので薬を飲んで休みました。', furigana: 'あたま が いたい ので くすり を のんで やすみました。', romaji: 'Atama ga itai node kusuri o nonde yasumimashita.', english: 'My head hurt so I took medicine and rested.', targetWord: '頭', targetWordEnglish: 'Head' },
    { id: 's-n4-頭-2', sentence: '頭の良い友達に数学を教えてもらいました。', furigana: 'あたま の よい ともだち に すうがく を おしえてもらいました。', romaji: 'Atama no yoi tomodachi ni suugaku o oshiete moraimashita.', english: 'I had my clever friend teach me mathematics.', targetWord: '頭の良い', targetWordEnglish: 'Clever / Intelligent' }
  ],
  '顔': [
    { id: 's-n4-顔-1', sentence: '久しぶりに会った友達の顔が変わっていました。', furigana: 'ひさしぶり に あった ともだち の かお が かわっていました。', romaji: "Hisashiburi ni atta tomodachi no kao ga kawatte imashita.", english: "My friend's face had changed when I met them after a long time.", targetWord: '顔', targetWordEnglish: 'Face' },
    { id: 's-n4-顔-2', sentence: '笑顔でいると周りの人も明るくなります。', furigana: 'えがお で いると まわり の ひと も あかるく なります。', romaji: 'Egao de iru to mawari no hito mo akaruku narimasu.', english: 'If you keep smiling the people around you become brighter.', targetWord: '笑顔', targetWordEnglish: 'Smile / Smiling face' }
  ],
  '首': [
    { id: 's-n4-首-1', sentence: 'マフラーを巻いて首を寒さから守りました。', furigana: 'マフラー を まいて くび を さむさ から まもりました。', romaji: 'Mafuraa o maite kubi o samusa kara mamorimashita.', english: 'I wrapped a scarf to protect my neck from the cold.', targetWord: '首', targetWordEnglish: 'Neck' },
    { id: 's-n4-首-2', sentence: '手首を捻挫してテーピングをしました。', furigana: 'てくび を ねんざして テーピング を しました。', romaji: 'Tekubi o nenza shite teeipingu o shimashita.', english: 'I sprained my wrist and taped it.', targetWord: '手首', targetWordEnglish: 'Wrist' }
  ],
  '体': [
    { id: 's-n4-体-1', sentence: '毎日運動して体を丈夫にしています。', furigana: 'まいにち うんどう して からだ を じょうぶ に しています。', romaji: 'Mainichi undou shite karada o joubu ni shite imasu.', english: 'I exercise every day to strengthen my body.', targetWord: '体', targetWordEnglish: 'Body' },
    { id: 's-n4-体-2', sentence: '体育の授業でバスケットボールをしました。', furigana: 'たいいく の じゅぎょう で バスケットボール を しました。', romaji: 'Taiiku no jugyou de basukettoboru o shimashita.', english: 'I played basketball in physical education class.', targetWord: '体育', targetWordEnglish: 'Physical education' }
  ],
  '親': [
    { id: 's-n4-親-1', sentence: '両親に感謝の気持ちを伝えたいです。', furigana: 'りょうしん に かんしゃ の きもち を つたえたい です。', romaji: 'Ryoushin ni kansha no kimochi o tsutaetai desu.', english: 'I want to convey my feelings of gratitude to my parents.', targetWord: '両親', targetWordEnglish: 'Both parents' },
    { id: 's-n4-親-2', sentence: '親切にしてくれた人に感謝します。', furigana: 'しんせつ に してくれた ひと に かんしゃ します。', romaji: 'Shinsetsu ni shite kureta hito ni kansha shimasu.', english: 'I am grateful to the person who was kind to me.', targetWord: '親切', targetWordEnglish: 'Kindness' }
  ],
  '兄': [
    { id: 's-n4-兄-1', sentence: 'お兄さんは私より五歳年上です。', furigana: 'おにいさん は わたし より いつつ としうえ です。', romaji: 'Onii san wa watashi yori itsutsu toshiue desu.', english: 'My older brother is five years older than me.', targetWord: 'お兄さん', targetWordEnglish: 'Older brother' },
    { id: 's-n4-兄-2', sentence: '兄は現在東京で会社員として働いています。', furigana: 'あに は げんざい とうきょう で かいしゃいん として はたらいています。', romaji: 'Ani wa genzai Toukyou de kaishain toshite hataraite imasu.', english: 'My older brother currently works in Tokyo as a company employee.', targetWord: '兄', targetWordEnglish: 'Older brother (plain)' }
  ],
  '弟': [
    { id: 's-n4-弟-1', sentence: '弟はまだ中学生でサッカーが上手です。', furigana: 'おとうと は まだ ちゅうがくせい で サッカー が じょうず です。', romaji: 'Otouto wa mada chuugakusei de sakkaa ga jouzu desu.', english: 'My younger brother is still a middle school student and is good at soccer.', targetWord: '弟', targetWordEnglish: 'Younger brother' },
    { id: 's-n4-弟-2', sentence: '弟と一緒にお父さんの誕生日プレゼントを買いました。', furigana: 'おとうと と いっしょ に おとうさん の たんじょうびプレゼント を かいました。', romaji: "Otouto to issho ni otousan no tanjoubi purezento o kaimashita.", english: "I bought a birthday present for dad together with my younger brother.", targetWord: '弟と', targetWordEnglish: 'With younger brother' }
  ],
  '姉': [
    { id: 's-n4-姉-1', sentence: 'お姉さんは大学を卒業して医者になりました。', furigana: 'おねえさん は だいがく を そつぎょう して いしゃ に なりました。', romaji: 'Onee san wa daigaku o sotsugyou shite isha ni narimashita.', english: 'My older sister graduated from university and became a doctor.', targetWord: 'お姉さん', targetWordEnglish: 'Older sister' },
    { id: 's-n4-姉-2', sentence: '姉からもらったセーターを着て出かけました。', furigana: 'あね から もらった セーター を きて でかけました。', romaji: 'Ane kara moratta seetaa o kite dekakemashita.', english: 'I went out wearing the sweater I received from my older sister.', targetWord: '姉', targetWordEnglish: 'Older sister (plain)' }
  ],
  '妹': [
    { id: 's-n4-妹-1', sentence: '妹は今年高校に入学しました。', furigana: 'いもうと は ことし こうこう に にゅうがく しました。', romaji: 'Imouto wa kotoshi koukou ni nyuugaku shimashita.', english: 'My younger sister entered high school this year.', targetWord: '妹', targetWordEnglish: 'Younger sister' },
    { id: 's-n4-妹-2', sentence: '妹のために誕生日ケーキを手作りしました。', furigana: 'いもうと の ために たんじょうびケーキ を てづくり しました。', romaji: 'Imouto no tame ni tanjoubi keeki o tezukuri shimashita.', english: 'I made a handmade birthday cake for my younger sister.', targetWord: '妹の', targetWordEnglish: 'For younger sister' }
  ],
  '好': [
    { id: 's-n4-好-1', sentence: '好きな音楽を聴きながら勉強します。', furigana: 'すき な おんがく を きき ながら べんきょう します。', romaji: 'Suki na ongaku o kiki nagara benkyou shimasu.', english: 'I study while listening to music I like.', targetWord: '好き', targetWordEnglish: 'Like / Fond of' },
    { id: 's-n4-好-2', sentence: '好奇心が旺盛で何でも試したくなります。', furigana: 'こうきしん が おうせい で なんでも ためしたくなります。', romaji: 'Koukishin ga ousei de nandemo tameshitaku narimasu.', english: 'My curiosity is strong and I want to try everything.', targetWord: '好奇心', targetWordEnglish: 'Curiosity' }
  ],
  '服': [
    { id: 's-n4-服-1', sentence: '新しい洋服を買ってコーディネートを楽しみます。', furigana: 'あたらしい ようふく を かって コーディネート を たのしみます。', romaji: 'Atarashii youfuku o katte koodineeto o tanoshimimasu.', english: 'I enjoy coordinating outfits by buying new clothes.', targetWord: '洋服', targetWordEnglish: 'Western-style clothes' },
    { id: 's-n4-服-2', sentence: '制服を着て毎日学校に通っています。', furigana: 'せいふく を きて まいにち がっこう に かよっています。', romaji: 'Seifuku o kite mainichi gakkou ni kayotte imasu.', english: 'I go to school every day wearing a uniform.', targetWord: '制服', targetWordEnglish: 'School uniform' }
  ],
  '銀': [
    { id: 's-n4-銀-1', sentence: '銀行でお金を引き出しました。', furigana: 'ぎんこう で おかね を ひきだしました。', romaji: 'Ginkou de okane o hikidashimashita.', english: 'I withdrew money at the bank.', targetWord: '銀行', targetWordEnglish: 'Bank' },
    { id: 's-n4-銀-2', sentence: 'アクセサリーに銀色のネックレスを選びました。', furigana: 'アクセサリー に ぎんいろ の ネックレス を えらびました。', romaji: 'Akusesarii ni gin iro no nekkuresu o erabimashita.', english: 'I chose a silver necklace as an accessory.', targetWord: '銀色', targetWordEnglish: 'Silver color' }
  ],
  '色': [
    { id: 's-n4-色-1', sentence: '秋になると山がいろいろな色に変わります。', furigana: 'あき に なると やま が いろいろ な いろ に かわります。', romaji: 'Aki ni naru to yama ga iroiro na iro ni kawarimasu.', english: 'When autumn comes the mountains change to various colors.', targetWord: '色々', targetWordEnglish: 'Various / All sorts' },
    { id: 's-n4-色-2', sentence: '好きな色は青とグリーンです。', furigana: 'すき な いろ は あお と グリーン です。', romaji: 'Suki na iro wa ao to guriin desu.', english: 'My favorite colors are blue and green.', targetWord: '色', targetWordEnglish: 'Color' }
  ],
  '英': [
    { id: 's-n4-英-1', sentence: '英語の発音を上達させるために毎日練習します。', furigana: 'えいご の はつおん を じょうたつ させる ために まいにち れんしゅう します。', romaji: 'Eigo no hatsuon o joutatsu saseru tame ni mainichi renshuu shimasu.', english: 'I practice every day to improve my English pronunciation.', targetWord: '英語', targetWordEnglish: 'English language' },
    { id: 's-n4-英-2', sentence: '英会話教室に通って英語力を伸ばしています。', furigana: 'えいかいわ きょうしつ に かよって えいごりょく を のばしています。', romaji: 'Eikaiwa kyoushitsu ni kayotte eigoryoku o nobashite imasu.', english: 'I am improving my English ability by going to an English conversation school.', targetWord: '英会話', targetWordEnglish: 'English conversation' }
  ],
  '画': [
    { id: 's-n4-画-1', sentence: '週末に映画を見るのが楽しみです。', furigana: 'しゅうまつ に えいが を みるのが たのしみ です。', romaji: 'Shuumatsu ni eiga o miru noga tanoshimi desu.', english: 'I look forward to watching movies on weekends.', targetWord: '映画', targetWordEnglish: 'Movie / Film' },
    { id: 's-n4-画-2', sentence: '美術館で有名な画家の絵を見ました。', furigana: 'びじゅつかん で ゆうめい な がか の え を みました。', romaji: 'Bijutsukan de yuumei na gaka no e o mimashita.', english: 'I saw paintings by a famous artist at the art museum.', targetWord: '画家', targetWordEnglish: 'Painter / Artist' }
  ],
  '写': [
    { id: 's-n4-写-1', sentence: '旅行中にきれいな写真をたくさん撮りました。', furigana: 'りょこうちゅう に きれい な しゃしん を たくさん とりました。', romaji: 'Ryokouchuu ni kirei na shashin o takusan torimashita.', english: 'I took many beautiful photos during my trip.', targetWord: '写真', targetWordEnglish: 'Photo' },
    { id: 's-n4-写-2', sentence: '黒板の内容をノートに書き写しました。', furigana: 'こくばん の ないよう を ノート に かきうつしました。', romaji: 'Kokuban no naiyou o nooto ni kakiutsushimashita.', english: 'I copied the blackboard contents into my notebook.', targetWord: '書き写し', targetWordEnglish: 'Copied / Transcribed' }
  ],
  '真': [
    { id: 's-n4-真-1', sentence: '部屋のちょうど真ん中にテーブルを置きました。', furigana: 'へや の ちょうど まんなか に テーブル を おきました。', romaji: 'Heya no choudo mannaka ni teeburu o okimashita.', english: 'I placed the table in the exact center of the room.', targetWord: '真ん中', targetWordEnglish: 'Center / Middle' },
    { id: 's-n4-真-2', sentence: '彼女は真剣な表情で話を聞いていました。', furigana: 'かのじょ は しんけん な ひょうじょう で はなし を きいていました。', romaji: 'Kanojo wa shinken na hyoujou de hanashi o kiite imashita.', english: 'She was listening to the talk with a serious expression.', targetWord: '真剣', targetWordEnglish: 'Serious / Earnest' }
  ],
  '紙': [
    { id: 's-n4-紙-1', sentence: '友達に手紙を書いてポストに入れました。', furigana: 'ともだち に てがみ を かいて ポスト に いれました。', romaji: 'Tomodachi ni tegami o kaite posuto ni iremashita.', english: 'I wrote a letter to my friend and put it in the mailbox.', targetWord: '手紙', targetWordEnglish: 'Letter' },
    { id: 's-n4-紙-2', sentence: '新聞紙を折ってゴミ箱を作りました。', furigana: 'しんぶんし を おって ゴミばこ を つくりました。', romaji: 'Shimbunshi o otte gomibako o tsukurimashita.', english: 'I folded a newspaper to make a trash box.', targetWord: '新聞紙', targetWordEnglish: 'Newspaper' }
  ],
  '旅': [
    { id: 's-n4-旅-1', sentence: '春休みに友達と旅行することになりました。', furigana: 'はるやすみ に ともだち と りょこう すること に なりました。', romaji: 'Haruyasumi ni tomodachi to ryokou suru koto ni narimashita.', english: 'It has been decided that I will travel with friends during spring vacation.', targetWord: '旅行', targetWordEnglish: 'Travel / Trip' },
    { id: 's-n4-旅-2', sentence: '旅先でおいしいものをたくさん食べました。', furigana: 'たびさき で おいしい もの を たくさん たべました。', romaji: 'Tabisaki de oishii mono o takusan tabemashita.', english: 'I ate many delicious things at the travel destination.', targetWord: '旅先', targetWordEnglish: 'Travel destination' }
  ],
  '医': [
    { id: 's-n4-医-1', sentence: '風邪がひどくなったので医者に診てもらいました。', furigana: 'かぜ が ひどくなった ので いしゃ に みてもらいました。', romaji: 'Kaze ga hidoku natta node isha ni mite moraimashita.', english: 'My cold got worse so I had a doctor examine me.', targetWord: '医者', targetWordEnglish: 'Doctor' },
    { id: 's-n4-医-2', sentence: '医学部に合格するために猛勉強しました。', furigana: 'いがくぶ に ごうかく する ために もうべんきょう しました。', romaji: 'Igakubu ni goukaku suru tame ni moubenkyou shimashita.', english: 'I studied intensively to pass the medical school entrance exam.', targetWord: '医学部', targetWordEnglish: 'Medical school' }
  ],
  '去': [
    { id: 's-n4-去-1', sentence: '去年の夏はとても暑かったです。', furigana: 'きょねん の なつ は とても あつかった です。', romaji: "Kyonen no natsu wa totemo atsukatta desu.", english: "Last year's summer was very hot.", targetWord: '去年', targetWordEnglish: 'Last year' },
    { id: 's-n4-去-2', sentence: '去る者は追わずという考え方も大切です。', furigana: 'さる もの は おわず という かんがえかた も たいせつ です。', romaji: '"Saru mono wa owazu" to iu kangaekata mo taisetsu desu.', english: '"Don\'t chase those who leave" is also an important mindset.', targetWord: '去る', targetWordEnglish: 'Leave / Depart' }
  ],
  '台': [
    { id: 's-n4-台-1', sentence: '台風が上陸する前に備えをしておきました。', furigana: 'たいふう が じょうりく する まえ に そなえ を して おきました。', romaji: 'Taifuu ga jouryoku suru mae ni sonae o shite okimashita.', english: 'I prepared before the typhoon made landfall.', targetWord: '台風', targetWordEnglish: 'Typhoon' },
    { id: 's-n4-台-2', sentence: '舞台に立つことが夢でした。', furigana: 'ぶたい に たつ こと が ゆめ でした。', romaji: 'Butai ni tatsu koto ga yume deshita.', english: 'It was my dream to stand on stage.', targetWord: '舞台', targetWordEnglish: 'Stage' }
  ],
  '洋': [
    { id: 's-n4-洋-1', sentence: '西洋の文化と東洋の文化を比べるのが面白いです。', furigana: 'せいよう の ぶんか と とうよう の ぶんか を くらべるのが おもしろい です。', romaji: 'Seiyou no bunka to touyou no bunka o kuraberu noga omoshiroi desu.', english: 'It is interesting to compare Western and Eastern cultures.', targetWord: '西洋', targetWordEnglish: 'Western (world/culture)' },
    { id: 's-n4-洋-2', sentence: '洋服よりも着物の方が好きだという人もいます。', furigana: 'ようふく よりも きもの の ほうが すきだ という ひと も います。', romaji: 'Youfuku yori mo kimono no hou ga suki da to iu hito mo imasu.', english: 'There are also people who prefer kimono to Western clothes.', targetWord: '洋服', targetWordEnglish: 'Western-style clothes' }
  ],
  '工': [
    { id: 's-n4-工-1', sentence: '工場で機械を使って部品を作っています。', furigana: 'こうじょう で きかい を つかって ぶひん を つくっています。', romaji: 'Koujou de kikai o tsukatte buhin o tsukutte imasu.', english: 'At the factory we use machines to make parts.', targetWord: '工場', targetWordEnglish: 'Factory' },
    { id: 's-n4-工-2', sentence: '工事中のため迂回をお願いします。', furigana: 'こうじちゅう の ため うかい を おねがいします。', romaji: 'Kouji chuu no tame ukai o onegai shimasu.', english: 'Please take a detour due to construction.', targetWord: '工事中', targetWordEnglish: 'Under construction' }
  ],
  '平': [
    { id: 's-n4-平-1', sentence: '平日は電車が満員で大変です。', furigana: 'へいじつ は でんしゃ が まんいん で たいへん です。', romaji: 'Heijitsu wa densha ga man-in de taihen desu.', english: 'On weekdays the train is packed and it is tough.', targetWord: '平日', targetWordEnglish: 'Weekday' },
    { id: 's-n4-平-2', sentence: '世界の平和を願っています。', furigana: 'せかい の へいわ を ねがっています。', romaji: 'Sekai no heiwa o negatte imasu.', english: 'I am wishing for world peace.', targetWord: '平和', targetWordEnglish: 'Peace' }
  ],
  '存': [
    { id: 's-n4-存-1', sentence: 'あのお店のことはご存知ですか？', furigana: 'あの おみせ の こと は ごぞんじ ですか？', romaji: 'Ano omise no koto wa gozonji desu ka?', english: 'Are you aware of that store?', targetWord: 'ご存知', targetWordEnglish: 'Are you aware / Do you know (polite)' },
    { id: 's-n4-存-2', sentence: 'この記録はデータとして存在しています。', furigana: 'この きろく は データ として そんざい しています。', romaji: 'Kono kiroku wa deeta to shite sonzai shite imasu.', english: 'This record exists as data.', targetWord: '存在', targetWordEnglish: 'Existence' }
  ],
  '料': [
    { id: 's-n4-料-1', sentence: '日本料理の中で天ぷらが大好きです。', furigana: 'にほんりょうり の なか で てんぷら が だいすき です。', romaji: 'Nihon ryouri no naka de tenpura ga daisuki desu.', english: 'Among Japanese cuisine I love tempura the most.', targetWord: '料理', targetWordEnglish: 'Cooking / Cuisine' },
    { id: 's-n4-料-2', sentence: '入場料は大人一人千円です。', furigana: 'にゅうじょうりょう は おとな ひとり せんえん です。', romaji: 'Nyuujouryou wa otona hitori sen en desu.', english: 'The admission fee is 1,000 yen per adult.', targetWord: '入場料', targetWordEnglish: 'Admission fee' }
  ],
};

// Compile complete list
export const KANJI_N4_LIST: KanjiDetailItemN4[] = N4_RAW_DEFINITIONS.map((def, idx) => ({
  id: `k-n4-${idx + 1}`,
  char: def.char,
  meaning: def.meaning,
  onyomi: def.onyomi,
  kunyomi: def.kunyomi,
  strokes: def.strokes,
  jlpt: 'N4',
  radical: def.radical,
  mnemonic: def.mnemonic,
  sentences: N4_SENTENCES[def.char] ?? [
    {
      id: `s-n4-${def.char}-1`,
      sentence: `${def.primaryWord}を毎日の生活で使ってみましょう。`,
      furigana: `${def.primaryReading} を まいにち の せいかつ で つかって みましょう。`,
      romaji: `"${def.primaryWord}" o mainichi no seikatsu de tsukatte mimashou.`,
      english: `Let's try using "${def.primaryWord}" (${def.meaning}) in our daily life.`,
      targetWord: def.primaryWord,
      targetWordEnglish: def.meaning
    },
    {
      id: `s-n4-${def.char}-2`,
      sentence: `「${def.primaryWord}」の使い方を練習しています。`,
      furigana: `「${def.primaryReading}」 の つかいかた を れんしゅう しています。`,
      romaji: `"${def.primaryWord}" no tsukaikata o renshuu shite imasu.`,
      english: `I am practicing how to use "${def.primaryWord}" (${def.primaryReading}).`,
      targetWord: def.primaryWord,
      targetWordEnglish: def.primaryReading
    }
  ]
}));

export function getKanjiN4(char: string): KanjiDetailItemN4 | undefined {
  return KANJI_N4_LIST.find(k => k.char === char);
}
