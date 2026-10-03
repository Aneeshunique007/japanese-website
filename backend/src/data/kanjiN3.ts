// Official JLPT N3 Kanji Database (Coming Soon)
import { KanjiSentence } from '../types.js';

export interface KanjiDetailItemN3 {
  id: string;
  char: string;
  meaning: string;
  onyomi: string[];
  kunyomi: string[];
  strokes: number;
  jlpt: 'N3';
  radical: string;
  mnemonic: string;
  sentences: KanjiSentence[];
}

// Contents commented out - JLPT N3 Coming Soon
/*
const N3_RAW_DEFINITIONS: Array<{
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
  { char: '受', meaning: 'Receive, Accept, Undergo', onyomi: ['JU'], kunyomi: ['u-keru', 'u-karu'], strokes: 8, radical: '又 (again)', mnemonic: 'Hands receiving an object with care.', primaryWord: '受ける', primaryReading: 'うける' },
  { char: '予', meaning: 'In Advance, Previous', onyomi: ['YO'], kunyomi: ['arakaji-me'], strokes: 4, radical: '亅 (hook)', mnemonic: 'Preparing in advance before things happen.', primaryWord: '予定', primaryReading: 'よてい' },
  { char: '宿', meaning: 'Lodge, Inn, Dwell', onyomi: ['SHUKU'], kunyomi: ['yado'], strokes: 11, radical: '宀 (roof)', mnemonic: 'A guest sleeping safely under the inn roof.', primaryWord: '宿題', primaryReading: 'しゅくだい' },
  { char: '定', meaning: 'Fix, Decide, Establish', onyomi: ['TEI', 'JOU'], kunyomi: ['sada-meru'], strokes: 8, radical: '宀 (roof)', mnemonic: 'A foot firmly settled under a roof.', primaryWord: '決定', primaryReading: 'けってい' },
  { char: '経', meaning: 'Pass Through, Manage, Economy', onyomi: ['KEI', 'KYOU'], kunyomi: ['he-ru'], strokes: 11, radical: '糸 (silk)', mnemonic: 'Warp threads passing along a weaving loom.', primaryWord: '経済', primaryReading: 'けいざい' },
  { char: '済', meaning: 'Finish, Settle, Relieve', onyomi: ['SAI', 'SEI'], kunyomi: ['su-mu', 'su-masu'], strokes: 11, radical: '水 (water)', mnemonic: 'Crossing water to reach a settled resolution.', primaryWord: '済む', primaryReading: 'すむ' },
  { char: '連', meaning: 'Connect, Take Along', onyomi: ['REN'], kunyomi: ['tsura-naru', 'tsu-reru'], strokes: 10, radical: '辵 (walk)', mnemonic: 'Vehicles linked together moving in convoy.', primaryWord: '連絡', primaryReading: 'れんらく' },
  { char: '絡', meaning: 'Entangle, Coil, Connect', onyomi: ['RAKU'], kunyomi: ['kara-mu'], strokes: 12, radical: '糸 (silk)', mnemonic: 'Silk threads coiling and binding together.', primaryWord: '連絡', primaryReading: 'れんらく' },
  { char: '政', meaning: 'Politics, Government', onyomi: ['SEI', 'SHOU'], kunyomi: ['matsurigoto'], strokes: 9, radical: '攴 (strike)', mnemonic: 'Administering righteous rules and laws.', primaryWord: '政治', primaryReading: 'せいじ' },
  { char: '治', meaning: 'Govern, Cure, Heal', onyomi: ['JI', 'CHI'], kunyomi: ['osa-meru', 'nao-ru'], strokes: 8, radical: '水 (water)', mnemonic: 'Managing water systems to govern smoothly.', primaryWord: '治療', primaryReading: 'ちりょう' },
  { char: '変', meaning: 'Change, Strange', onyomi: ['HEN'], kunyomi: ['ka-waru', 'ka-eru'], strokes: 9, radical: '夂 (walk slowly)', mnemonic: 'Words and actions transforming over time.', primaryWord: '変化', primaryReading: 'へんか' },
  { char: '化', meaning: 'Transform, -ization', onyomi: ['KA', 'KE'], kunyomi: ['ba-keru'], strokes: 4, radical: '匕 (spoon)', mnemonic: 'One person turning into another form.', primaryWord: '化学', primaryReading: 'かがく' },
  { char: '相', meaning: 'Mutual, Aspect, Minister', onyomi: ['SOU', 'SHOU'], kunyomi: ['ai-'], strokes: 9, radical: '目 (eye)', mnemonic: 'An eye inspecting a tree mutually.', primaryWord: '相談', primaryReading: 'そうだん' },
  { char: '談', meaning: 'Discuss, Talk', onyomi: ['DAN'], kunyomi: [], strokes: 15, radical: '言 (word)', mnemonic: 'Warm burning flame words in deep discussion.', primaryWord: '対談', primaryReading: 'たいだん' },
  { char: '調', meaning: 'Tune, Investigate, Tone', onyomi: ['CHOU'], kunyomi: ['shira-beru', 'totono-u'], strokes: 15, radical: '言 (word)', mnemonic: 'Harmonizing words and examining details.', primaryWord: '調べる', primaryReading: 'しらべる' },
  { char: '査', meaning: 'Investigate, Inspect', onyomi: ['SA'], kunyomi: [], strokes: 9, radical: '木 (tree)', mnemonic: 'Examining wood with a sharp critical eye.', primaryWord: '調査', primaryReading: 'ちょうさ' },
  { char: '難', meaning: 'Difficult, Hardship', onyomi: ['NAN'], kunyomi: ['muzuka-shii'], strokes: 18, radical: '隹 (bird)', mnemonic: 'A bird caught in hardships.', primaryWord: '難しい', primaryReading: 'むずかしい' },
  { char: '易', meaning: 'Easy, Simple, Divination', onyomi: ['EKI', 'I'], kunyomi: ['yasa-shii'], strokes: 8, radical: '日 (sun)', mnemonic: 'Sun and chameleon easily changing.', primaryWord: '容易', primaryReading: 'ようい' },
  { char: '存', meaning: 'Exist, Be Aware', onyomi: ['ZON', 'SON'], kunyomi: [], strokes: 6, radical: '子 (child)', mnemonic: 'A child existing protected by parents.', primaryWord: '存在', primaryReading: 'そんざい' },
  { char: '在', meaning: 'Exist, Be Located', onyomi: ['ZAI'], kunyomi: ['a-ru'], strokes: 6, radical: '土 (earth)', mnemonic: 'Firmly rooted on the ground.', primaryWord: '現在', primaryReading: 'げんざい' }
];
*/

export const KANJI_N3_LIST: KanjiDetailItemN3[] = [];

export function getKanjiN3(char: string): KanjiDetailItemN3 | undefined {
  return KANJI_N3_LIST.find(k => k.char === char);
}
