import { studyScheduleStore } from './studyScheduleStore';
import { dataStore } from '../services/dataStore';
import { WordItem } from '../types';

export interface QuestionOption {
  text: string;
  romaji: string;
  meaning?: string;
  baseWord?: string;
  reading?: string;
}

export interface DailySentenceQuestion {
  id: string;
  day: number;
  questionNumber: number;
  sentenceWithBlank: string;
  sentenceRomajiWithBlank: string;
  fullSentence: string;
  furigana?: string;
  romaji?: string;
  english: string;
  targetWord: string;
  targetWordRomaji: string;
  options: string[];
  optionsWithRomaji: QuestionOption[];
  correctIndex: number;
  explanation: string;
  category: 'vocabulary' | 'kanji' | 'particle' | 'grammar';
}

const N5_PARTICLES = [
  { char: 'は', romaji: 'wa', meaning: 'Topic marker (As for X)', hint: 'Marks the main sentence topic' },
  { char: 'を', romaji: 'o', meaning: 'Direct object marker', hint: 'Marks what action is being performed on' },
  { char: 'に', romaji: 'ni', meaning: 'Time / Destination / Target', hint: 'Specifies destination or specific time' },
  { char: 'で', romaji: 'de', meaning: 'Location of action / Means', hint: 'Marks where an event occurs or how it is done' },
  { char: 'へ', romaji: 'e', meaning: 'Direction of movement', hint: 'Points toward a destination' },
  { char: 'と', romaji: 'to', meaning: 'Together with / And', hint: 'Connects nouns together' },
  { char: 'も', romaji: 'mo', meaning: 'Also / Too', hint: 'Indicates inclusion' },
  { char: 'から', romaji: 'kara', meaning: 'From / Starting point', hint: 'Indicates origin or starting time' },
  { char: 'まで', romaji: 'made', meaning: 'Until / Ending point', hint: 'Indicates ending point or boundary' }
];

const KANA_ROMAJI_MAP: Record<string, string> = {
  'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o',
  'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
  'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
  'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
  'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no',
  'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho',
  'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo',
  'や': 'ya', 'ゆ': 'yu', 'よ': 'yo',
  'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro',
  'わ': 'wa', 'を': 'o', 'ん': 'n',
  'が': 'ga', 'ぎ': 'gi', 'ぐ': 'gu', 'げ': 'ge', 'ご': 'go',
  'ざ': 'za', 'じ': 'ji', 'ず': 'zu', 'ぜ': 'ze', 'ぞ': 'zo',
  'だ': 'da', 'ぢ': 'ji', 'づ': 'zu', 'で': 'de', 'ど': 'do',
  'ば': 'ba', 'び': 'bi', 'ぶ': 'bu', 'べ': 'be', 'ぼ': 'bo',
  'ぱ': 'pa', 'ぴ': 'pi', 'ぷ': 'pu', 'ぺ': 'pe', 'ぽ': 'po',
  'きゃ': 'kya', 'きゅ': 'kyu', 'きょ': 'kyo',
  'しゃ': 'sha', 'しゅ': 'shu', 'しょ': 'sho',
  'ちゃ': 'cha', 'ちゅ': 'chu', 'ちょ': 'cho',
  'にゃ': 'nya', 'にゅ': 'nyu', 'にょ': 'nyo',
  'ひゃ': 'hya', 'ひゅ': 'hyu', 'ひょ': 'hyo',
  'みゃ': 'mya', 'みゅ': 'myu', 'みょ': 'myo',
  'りゃ': 'rya', 'りゅ': 'ryu', 'りょ': 'ryo',
  'ぎゃ': 'gya', 'ぎゅ': 'gyu', 'ぎょ': 'gyo',
  'じゃ': 'ja', 'じゅ': 'ju', 'じょ': 'jo',
  'びゃ': 'bya', 'びゅ': 'byu', 'びょ': 'byo',
  'ぴゃ': 'pya', 'ぴゅ': 'pyu', 'ぴょ': 'pyo',
  'ア': 'a', 'イ': 'i', 'ウ': 'u', 'エ': 'e', 'オ': 'o',
  'カ': 'ka', 'キ': 'ki', 'ク': 'ku', 'ケ': 'ke', 'コ': 'ko',
  'サ': 'sa', 'シ': 'shi', 'ス': 'su', 'セ': 'se', 'ソ': 'so',
  'タ': 'ta', 'チ': 'chi', 'ツ': 'tsu', 'テ': 'te', 'ト': 'to',
  'ナ': 'na', 'ニ': 'ni', 'ヌ': 'nu', 'ネ': 'ne', 'ノ': 'no',
  'ハ': 'ha', 'ヒ': 'hi', 'フ': 'fu', 'ヘ': 'he', 'ホ': 'ho',
  'マ': 'ma', 'ミ': 'mi', 'ム': 'mu', 'メ': 'me', 'モ': 'mo',
  'ヤ': 'ya', 'ユ': 'yu', 'ヨ': 'yo',
  'ラ': 'ra', 'リ': 'ri', 'ル': 'ru', 'レ': 're', 'ロ': 'ro',
  'ワ': 'wa', 'ヲ': 'o', 'ン': 'n',
  'ガ': 'ga', 'ギ': 'gi', 'グ': 'gu', 'ゲ': 'ge', 'ゴ': 'go',
  'ザ': 'za', 'ジ': 'ji', 'ズ': 'zu', 'ゼ': 'ze', 'ゾ': 'zo',
  'ダ': 'da', 'ヂ': 'ji', 'ヅ': 'zu', 'デ': 'de', 'ド': 'do',
  'バ': 'ba', 'ビ': 'bi', 'ブ': 'bu', 'ベ': 'be', 'ボ': 'bo',
  'パ': 'pa', 'ピ': 'pi', 'プ': 'pu', 'ペ': 'pe', 'ポ': 'po'
};

const wordDict = new Map<string, string>();
function buildWordDict() {
  const WORDS_N5_LIST = dataStore.wordsN5;
  const KANJI_N5_LIST = dataStore.kanjiN5;
  WORDS_N5_LIST.forEach((w: any) => {
    if (w.word && w.romaji) wordDict.set(w.word, w.romaji);
    if (w.reading && w.romaji) wordDict.set(w.reading, w.romaji);
  });
  KANJI_N5_LIST.forEach((k: any) => {
    if (k.kunyomi && k.kunyomi[0]) {
      wordDict.set(k.char, kanaToRomaji(k.kunyomi[0].replace(/[.-]/g, '')));
    } else if (k.onyomi && k.onyomi[0]) {
      wordDict.set(k.char, kanaToRomaji(k.onyomi[0]));
    }
  });
}
// Build once store is ready; rebuild on demand if empty
function getWordDict(): Map<string, string> {
  if (wordDict.size === 0) buildWordDict();
  return wordDict;
}

function kanaToRomaji(text: string): string {
  let res = '';
  let i = 0;
  while (i < text.length) {
    if (text[i] === 'っ' || text[i] === 'ッ') {
      const next = KANA_ROMAJI_MAP[text[i+1]] || '';
      if (next) res += next[0];
      i++;
      continue;
    }
    const two = text.slice(i, i + 2);
    if (KANA_ROMAJI_MAP[two]) {
      res += KANA_ROMAJI_MAP[two];
      i += 2;
    } else if (KANA_ROMAJI_MAP[text[i]]) {
      res += KANA_ROMAJI_MAP[text[i]];
      i++;
    } else {
      res += text[i];
      i++;
    }
  }
  return res;
}

export function resolveRomaji(token: string, category?: string): string {
  const wDict = getWordDict();
  const WORDS_N5_LIST = dataStore.wordsN5;
  if (category === 'particle') {
    const p = N5_PARTICLES.find(pt => pt.char === token);
    if (p) return p.romaji;
  }
  if (token === '来ます') return 'kimasu';
  if (token === '来ました') return 'kimashita';
  if (token === '来て') return 'kite';
  if (token === '来ない') return 'konai';

  if (wDict.has(token)) return wDict.get(token)!;
  if (/^[ぁ-んァ-ヶ]+$/.test(token)) return kanaToRomaji(token);

  // Inflected verb/adjective: match against dictionary words
  for (const w of WORDS_N5_LIST) {
    if (w.word === token) return w.romaji;
    if (w.reading === token) return w.romaji;

    const kanjiStem = w.word.replace(/[ぁ-ん]$/, '');
    if (kanjiStem && token.startsWith(kanjiStem)) {
      const suffix = token.slice(kanjiStem.length);
      const isFullKanji = kanjiStem.length === w.word.length;
      const readingStem = isFullKanji ? w.reading : w.reading.slice(0, -1);
      return kanaToRomaji(readingStem) + kanaToRomaji(suffix);
    }
  }

  return kanaToRomaji(token);
}

function createSeededRandom(seed: number) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return function() {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function findTargetToken(sentence: string, word: WordItem): string | null {
  if (sentence.includes(word.word)) return word.word;
  if (sentence.includes(word.reading)) return word.reading;

  const kanjiStem = word.word.replace(/[ぁ-ん]+$/, '');
  const readingStem = word.reading.replace(/[ぁ-ん]+$/, '');
  const stem = kanjiStem.length > 0 ? kanjiStem : readingStem;

  if (stem.length > 0 && sentence.includes(stem)) {
    const regex = new RegExp(`(${stem}[ぁ-ん]{1,6})`);
    const match = sentence.match(regex);
    if (match) return match[1];
  }
  return null;
}

const wordsByPos: Record<string, WordItem[]> = {};
function getWordsByPos(): Record<string, WordItem[]> {
  if (Object.keys(wordsByPos).length === 0) {
    dataStore.wordsN5.forEach((w: any) => {
      const pos = w.pos || 'noun';
      if (!wordsByPos[pos]) wordsByPos[pos] = [];
      wordsByPos[pos].push(w);
    });
  }
  return wordsByPos;
}

const ICHIDAN_VERBS = new Set([
  '食べる', '見る', '起きる', '寝る', '開ける', '閉める', '教える', '覚える', '疲れる', 
  '降りる', '見せる', '出かける', '忘れる', '答える', '始める', '借りる', '晴れる', '入れる'
]);

const GODAN_I_STEM: Record<string, string> = {
  'う': 'い', 'く': 'き', 'ぐ': 'ぎ', 'す': 'し', 'つ': 'ち', 'ぬ': 'に', 'ぶ': 'び', 'む': 'み', 'る': 'り'
};

const GODAN_TE_STEM: Record<string, string> = {
  'う': 'って', 'つ': 'って', 'る': 'って',
  'く': 'いて', 'ぐ': 'いで',
  'す': 'して',
  'ぬ': 'んで', 'ぶ': 'んで', 'む': 'んで'
};

function conjugateJapaneseVerb(word: string, form: 'masu' | 'mashita' | 'te'): string {
  if (word === '来る' || word === 'くる') {
    return form === 'masu' ? '来ます' : form === 'mashita' ? '来ました' : '来て';
  }
  if (word === 'する') {
    return form === 'masu' ? 'します' : form === 'mashita' ? 'しました' : 'して';
  }

  const isIchidan = ICHIDAN_VERBS.has(word) || (
    word.endsWith('る') && 
    /[いきえけしちひにみりぎじびげぜで]る$/.test(word) && 
    !['帰る', '走る', '知る', '切る', '入る', '要る'].includes(word)
  );

  if (isIchidan) {
    const stem = word.slice(0, -1);
    if (form === 'masu') return stem + 'ます';
    if (form === 'mashita') return stem + 'ました';
    return stem + 'て';
  }

  const lastChar = word.slice(-1);
  const base = word.slice(0, -1);
  const iKana = GODAN_I_STEM[lastChar] || lastChar;

  if (form === 'masu') return base + iKana + 'ます';
  if (form === 'mashita') return base + iKana + 'ました';
  if (word === '行く') return '行って';
  return base + (GODAN_TE_STEM[lastChar] || 'て');
}

function formatPastMeaning(meaning: string): string {
  if (!meaning) return '';
  if (/^to\s+/i.test(meaning)) {
    const verb = meaning.replace(/^to\s+/i, '').trim();
    const irregulars: Record<string, string> = {
      'eat': 'Ate',
      'drink': 'Drank',
      'go': 'Went',
      'come': 'Came',
      'see': 'Saw',
      'watch': 'Watched',
      'look': 'Looked',
      'buy': 'Bought',
      'write': 'Wrote',
      'read': 'Read',
      'listen': 'Listened',
      'hear': 'Heard',
      'speak': 'Spoke',
      'talk': 'Talked',
      'ask': 'Asked / requested',
      'request': 'Requested',
      'return': 'Returned / went home',
      'return, to go home': 'Returned / went home',
      'return, go home': 'Returned / went home',
      'get tired': 'Got tired',
      'sleep': 'Slept',
      'wake up': 'Woke up',
      'wake': 'Woke',
      'do': 'Did',
      'make': 'Made',
      'meet': 'Met',
      'wait': 'Waited',
      'swim': 'Swam',
      'stand': 'Stood',
      'sit': 'Sat',
      'enter': 'Entered',
      'exit': 'Exited',
      'teach': 'Taught',
      'learn': 'Learned',
      'open': 'Opened',
      'close': 'Closed',
      'begin': 'Began',
      'start': 'Started',
      'finish': 'Finished',
      'end': 'Ended',
      'sell': 'Sold',
      'turn on': 'Turned on',
      'switch on': 'Switched on',
      'turn off': 'Turned off',
      'bloom': 'Bloomed',
      'laugh': 'Laughed',
      'smile': 'Smiled',
      'buy, purchase': 'Bought',
      'send': 'Sent',
      'give': 'Gave',
      'take': 'Took',
      'ride': 'Rode',
      'use': 'Used',
      'wash': 'Washed',
      'sing': 'Sang',
      'play': 'Played',
      'wear': 'Wore',
      'put on': 'Put on',
      'take off': 'Took off',
      'live': 'Lived',
      'stay': 'Stayed',
      'work': 'Worked',
      'think': 'Thought',
      'know': 'Knew',
      'understand': 'Understood'
    };
    const lower = verb.toLowerCase();
    if (irregulars[lower]) return irregulars[lower];
    for (const [k, v] of Object.entries(irregulars)) {
      if (lower.startsWith(k)) return v;
    }
    if (verb.endsWith('e')) return verb + 'd';
    if (/[^aeiou][aeiou][^aeiou]$/i.test(verb) && !verb.endsWith('w') && !verb.endsWith('x') && !verb.endsWith('y')) {
      return verb + verb.slice(-1) + 'ed';
    }
    return verb + 'ed';
  }
  return `Was / did ${meaning}`;
}

export function lookupOptionDetails(token: string, _category?: string): { meaning: string; baseWord?: string; reading?: string } {
  const WORDS_N5_LIST = dataStore.wordsN5;
  const WORDS_N4_LIST = dataStore.wordsN4;
  const KANJI_N5_LIST = dataStore.kanjiN5;
  // 1. Particle Check
  const particle = N5_PARTICLES.find(p => p.char === token);
  if (particle) {
    return {
      meaning: `${particle.meaning} (${particle.hint})`,
      baseWord: particle.char,
      reading: particle.romaji
    };
  }

  // 2. Exact match in N5 words
  const exactWordN5 = WORDS_N5_LIST.find(w => w.word === token || w.reading === token);
  if (exactWordN5) {
    return {
      meaning: exactWordN5.meaning,
      baseWord: exactWordN5.word,
      reading: exactWordN5.reading
    };
  }

  // 3. Exact match in N4 words
  const exactWordN4 = WORDS_N4_LIST.find(w => w.word === token || w.reading === token);
  if (exactWordN4) {
    return {
      meaning: exactWordN4.meaning,
      baseWord: exactWordN4.word,
      reading: exactWordN4.reading
    };
  }

  // 4. Exact match in Kanji
  const kanji = KANJI_N5_LIST.find(k => k.char === token);
  if (kanji) {
    return {
      meaning: kanji.meaning,
      baseWord: kanji.char,
      reading: kanji.kunyomi?.[0] || kanji.onyomi?.[0]
    };
  }

  // 5. Request form (-てください / -でください)
  if (token.endsWith('てください') || token.endsWith('でください')) {
    if (token === '飲んでください') {
      return {
        meaning: 'Please take (medicine) / Please drink',
        baseWord: '飲む',
        reading: 'のむ'
      };
    }
    if (token === '来てください') return { meaning: 'Please come', baseWord: '来る', reading: 'くる' };
    if (token === 'してください') return { meaning: 'Please do', baseWord: 'する', reading: 'する' };
    if (token === '行ってください') return { meaning: 'Please go', baseWord: '行く', reading: 'いく' };

    const isDe = token.endsWith('でください');
    const teStem = token.slice(0, isDe ? -5 : -5);

    // Godan -んでください -> -む / -ぶ / -ぬ (飲む -> 飲んでください)
    if (isDe && teStem.endsWith('ん')) {
      const baseStem = teStem.slice(0, -1);
      for (const ending of ['む', 'ぶ', 'ぬ']) {
        const candidate = baseStem + ending;
        const found = WORDS_N5_LIST.find(w => w.word === candidate || w.reading === candidate)
                   || WORDS_N4_LIST.find(w => w.word === candidate || w.reading === candidate);
        if (found) {
          const action = found.meaning.replace(/^to\s+/i, '');
          return {
            meaning: `Please ${action}`,
            baseWord: found.word,
            reading: found.reading
          };
        }
      }
    }

    // Ichidan -てください -> -る (寝てください -> 寝る, 食べてください -> 食べる)
    const ichidanCandidate = teStem + 'る';
    const foundIchidan = WORDS_N5_LIST.find(w => w.word === ichidanCandidate || w.reading === ichidanCandidate)
                      || WORDS_N4_LIST.find(w => w.word === ichidanCandidate || w.reading === ichidanCandidate);
    if (foundIchidan) {
      const action = foundIchidan.meaning.replace(/^to\s+/i, '');
      return {
        meaning: `Please ${action}`,
        baseWord: foundIchidan.word,
        reading: foundIchidan.reading
      };
    }

    // Godan -いてください -> -く (書いてください -> 書く)
    if (teStem.endsWith('い')) {
      const godanCandidate = teStem.slice(0, -1) + 'く';
      const foundGodan = WORDS_N5_LIST.find(w => w.word === godanCandidate || w.reading === godanCandidate)
                      || WORDS_N4_LIST.find(w => w.word === godanCandidate || w.reading === godanCandidate);
      if (foundGodan) {
        const action = foundGodan.meaning.replace(/^to\s+/i, '');
        return {
          meaning: `Please ${action}`,
          baseWord: foundGodan.word,
          reading: foundGodan.reading
        };
      }
    }

    // Godan -ってください -> -つ, -う, -る (待ってください -> 待つ)
    if (teStem.endsWith('っ')) {
      const godanStem = teStem.slice(0, -1);
      for (const ending of ['つ', 'う', 'る']) {
        const candidate = godanStem + ending;
        const found = WORDS_N5_LIST.find(w => w.word === candidate || w.reading === candidate)
                   || WORDS_N4_LIST.find(w => w.word === candidate || w.reading === candidate);
        if (found) {
          const action = found.meaning.replace(/^to\s+/i, '');
          return {
            meaning: `Please ${action}`,
            baseWord: found.word,
            reading: found.reading
          };
        }
      }
    }
  }

  // 6. Inflected Verbs (Past Polite: ました)
  if (token.endsWith('ました')) {
    const stem = token.slice(0, -3);
    if (token === '来ました') return { meaning: 'Came', baseWord: '来る', reading: 'くる' };
    if (token === 'しました') return { meaning: 'Did', baseWord: 'する', reading: 'する' };

    const ichidanCandidate = stem + 'る';
    const ichidanWord = WORDS_N5_LIST.find(w => w.word === ichidanCandidate || w.reading === ichidanCandidate)
                     || WORDS_N4_LIST.find(w => w.word === ichidanCandidate || w.reading === ichidanCandidate);
    if (ichidanWord) {
      return {
        meaning: formatPastMeaning(ichidanWord.meaning),
        baseWord: ichidanWord.word,
        reading: ichidanWord.reading
      };
    }

    const godanMapping: [string, string][] = [
      ['り', 'る'], ['み', 'む'], ['き', 'く'], ['ぎ', 'ぐ'],
      ['し', 'す'], ['ち', 'つ'], ['い', 'う'], ['び', 'ぶ'], ['に', 'ぬ']
    ];

    for (const [iEnd, uEnd] of godanMapping) {
      if (stem.endsWith(iEnd)) {
        const candidate = stem.slice(0, -1) + uEnd;
        const godanWord = WORDS_N5_LIST.find(w => w.word === candidate || w.reading === candidate)
                       || WORDS_N4_LIST.find(w => w.word === candidate || w.reading === candidate);
        if (godanWord) {
          return {
            meaning: formatPastMeaning(godanWord.meaning),
            baseWord: godanWord.word,
            reading: godanWord.reading
          };
        }
      }
    }
  }

  // 7. Inflected Verbs (Present Polite: ます)
  if (token.endsWith('ます')) {
    const stem = token.slice(0, -2);
    if (token === '来ます') return { meaning: 'Comes / will come', baseWord: '来る', reading: 'くる' };
    if (token === 'します') return { meaning: 'Does / will do', baseWord: 'する', reading: 'する' };

    const ichidanWord = WORDS_N5_LIST.find(w => w.word === stem + 'る' || w.reading === stem + 'る')
                     || WORDS_N4_LIST.find(w => w.word === stem + 'る' || w.reading === stem + 'る');
    if (ichidanWord) {
      return {
        meaning: ichidanWord.meaning,
        baseWord: ichidanWord.word,
        reading: ichidanWord.reading
      };
    }

    const godanMapping: [string, string][] = [
      ['り', 'る'], ['み', 'む'], ['き', 'く'], ['ぎ', 'ぐ'],
      ['し', 'す'], ['ち', 'つ'], ['い', 'う'], ['び', 'ぶ'], ['に', 'ぬ']
    ];
    for (const [iEnd, uEnd] of godanMapping) {
      if (stem.endsWith(iEnd)) {
        const candidate = stem.slice(0, -1) + uEnd;
        const godanWord = WORDS_N5_LIST.find(w => w.word === candidate || w.reading === candidate)
                       || WORDS_N4_LIST.find(w => w.word === candidate || w.reading === candidate);
        if (godanWord) {
          return {
            meaning: godanWord.meaning,
            baseWord: godanWord.word,
            reading: godanWord.reading
          };
        }
      }
    }
  }

  // 8. Te-form (て / で)
  if (token.endsWith('て') || token.endsWith('で')) {
    if (token === '来て') return { meaning: 'Coming / please come', baseWord: '来る', reading: 'くる' };
    if (token === 'して') return { meaning: 'Doing / please do', baseWord: 'する', reading: 'する' };
    if (token === '行って') return { meaning: 'Going / please go', baseWord: '行く', reading: 'いく' };

    if (token.endsWith('て')) {
      const stem = token.slice(0, -1);
      const ichidanWord = WORDS_N5_LIST.find(w => w.word === stem + 'る' || w.reading === stem + 'る')
                       || WORDS_N4_LIST.find(w => w.word === stem + 'る' || w.reading === stem + 'る');
      if (ichidanWord) {
        return {
          meaning: `${ichidanWord.meaning} (Te-form)`,
          baseWord: ichidanWord.word,
          reading: ichidanWord.reading
        };
      }
    }
  }

  // 9. Negative (ない)
  if (token.endsWith('ない')) {
    const stem = token.slice(0, -2);
    const ichidanWord = WORDS_N5_LIST.find(w => w.word === stem + 'る' || w.reading === stem + 'る')
                     || WORDS_N4_LIST.find(w => w.word === stem + 'る' || w.reading === stem + 'る');
    if (ichidanWord) {
      return {
        meaning: `Does not ${ichidanWord.meaning.replace(/^to\s+/i, '')}`,
        baseWord: ichidanWord.word,
        reading: ichidanWord.reading
      };
    }
  }

  // Fallback: prefix or partial in N5 then N4
  for (const w of [...WORDS_N5_LIST, ...WORDS_N4_LIST]) {
    const kanjiStem = w.word.replace(/[ぁ-ん]+$/, '');
    if (kanjiStem && token.startsWith(kanjiStem)) {
      return {
        meaning: w.meaning,
        baseWord: w.word,
        reading: w.reading
      };
    }
  }

  return { meaning: 'Contextual option' };
}

export function generateDailySentenceQuestions(
  day: number,
  count: number = 50,
  randomSeed?: number
): DailySentenceQuestion[] {
  const WORDS_N5_LIST = dataStore.wordsN5;
  const KANJI_N5_LIST = dataStore.kanjiN5;
  const wordsByPos = getWordsByPos();
  const seed = randomSeed ?? (day * 7919 + 1337);
  const rand = createSeededRandom(seed);

  const isAllAccess = studyScheduleStore.isAllUnlocked();

  const targets = studyScheduleStore.getDayTargets(day);
  const todayWords = isAllAccess ? [...WORDS_N5_LIST].sort(() => rand() - 0.5) : targets.words;
  const todayKanji = isAllAccess ? [...KANJI_N5_LIST].sort(() => rand() - 0.5) : targets.kanji;

  const cumulativeWords = isAllAccess
    ? WORDS_N5_LIST
    : WORDS_N5_LIST.filter(w => studyScheduleStore.getWordDay(w.id || w.word) <= day);

  const questions: DailySentenceQuestion[] = [];
  let qIndex = 1;

  const getDistractors = (targetToken: string, targetWord: WordItem, pool: WordItem[], countNeeded: number = 3): string[] => {
    const pos = targetWord.pos || 'noun';
    const samePosPool = (wordsByPos[pos] || pool).filter(w => w.word !== targetWord.word);
    const shuffled = [...samePosPool].sort(() => rand() - 0.5);
    const chosen: string[] = [];

    const isMasu = targetToken.endsWith('ます');
    const isMashita = targetToken.endsWith('ました');
    const isTe = targetToken.endsWith('て') || targetToken.endsWith('で');

    for (const item of shuffled) {
      let candidate = item.word;
      if (item.pos === 'verb') {
        if (isMasu) candidate = conjugateJapaneseVerb(item.word, 'masu');
        else if (isMashita) candidate = conjugateJapaneseVerb(item.word, 'mashita');
        else if (isTe) candidate = conjugateJapaneseVerb(item.word, 'te');
      }

      if (!chosen.includes(candidate) && candidate !== targetToken && candidate.length > 0) {
        chosen.push(candidate);
      }
      if (chosen.length >= countNeeded) break;
    }

    if (chosen.length < countNeeded) {
      for (const item of pool) {
        if (!chosen.includes(item.word) && item.word !== targetToken) {
          chosen.push(item.word);
        }
        if (chosen.length >= countNeeded) break;
      }
    }
    return chosen;
  };

  // Helper to build options with romaji and meanings
  const formatOptions = (opts: string[], category?: string): QuestionOption[] => {
    return opts.map(opt => {
      const details = lookupOptionDetails(opt, category);
      return {
        text: opt,
        romaji: resolveRomaji(opt, category),
        meaning: details.meaning,
        baseWord: details.baseWord,
        reading: details.reading
      };
    });
  };

  // Helper to create romaji with blank
  const createRomajiWithBlank = (fullRomaji: string | undefined, targetRomaji: string): string => {
    if (!fullRomaji) return '';
    const cleanTarget = targetRomaji.trim();
    if (!cleanTarget) return fullRomaji;

    const regex = new RegExp(`\\b${cleanTarget}\\b`, 'i');
    if (regex.test(fullRomaji)) {
      return fullRomaji.replace(regex, '[ _____ ]');
    }

    const words = fullRomaji.split(/\s+/);
    let replaced = false;
    const result = words.map(w => {
      if (replaced) return w;
      const stripped = w.replace(/[,.?!]/g, '').toLowerCase();
      if (stripped === cleanTarget.toLowerCase() || stripped.startsWith(cleanTarget.toLowerCase())) {
        replaced = true;
        return w.replace(new RegExp(cleanTarget, 'i'), '[ _____ ]');
      }
      return w;
    });

    return result.join(' ');
  };

  // 1. Questions from Today's Vocabulary
  for (const wordItem of todayWords) {
    if (questions.length >= count) break;
    if (!wordItem.sentences || wordItem.sentences.length === 0) continue;

    for (const sent of wordItem.sentences) {
      if (questions.length >= count) break;
      if (!sent.sentence || !sent.english) continue;

      const targetToken = findTargetToken(sent.sentence, wordItem);
      if (!targetToken) continue;

      if (questions.some(q => q.fullSentence === sent.sentence && q.targetWord === targetToken)) continue;

      const sentenceWithBlank = sent.sentence.replace(targetToken, ' [ _____ ] ');
      const distractors = getDistractors(targetToken, wordItem, cumulativeWords);
      const allOptions = [targetToken, ...distractors.slice(0, 3)].sort(() => rand() - 0.5);
      const correctIndex = allOptions.indexOf(targetToken);
      const targetWordRomaji = resolveRomaji(targetToken, 'vocabulary');
      const optionsWithRomaji = formatOptions(allOptions, 'vocabulary');
      const sentenceRomajiWithBlank = createRomajiWithBlank(sent.romaji, targetWordRomaji);

      questions.push({
        id: `dsq-${day}-${qIndex}`,
        day,
        questionNumber: qIndex,
        sentenceWithBlank,
        sentenceRomajiWithBlank,
        fullSentence: sent.sentence,
        furigana: sent.furigana,
        romaji: sent.romaji,
        english: sent.english || '',
        targetWord: targetToken,
        targetWordRomaji,
        options: allOptions,
        optionsWithRomaji,
        correctIndex,
        explanation: `「${targetToken}」(${targetWordRomaji}) fits this sentence. Base:「${wordItem.word}」(${wordItem.reading} - "${wordItem.meaning}"). Translation: "${sent.english}".`,
        category: 'vocabulary'
      });
      qIndex++;
    }
  }

  // 2. Questions from Today's Kanji
  for (const kanjiItem of todayKanji) {
    if (questions.length >= count) break;
    if (!kanjiItem.sentences || kanjiItem.sentences.length === 0) continue;

    for (const sent of kanjiItem.sentences) {
      if (questions.length >= count) break;
      const targetChar = kanjiItem.char;
      if (sent.sentence.includes(targetChar)) {
        const targetToken = sent.targetWord || targetChar;
        if (questions.some(q => q.fullSentence === sent.sentence && q.targetWord === targetToken)) continue;

        const sentenceWithBlank = sent.sentence.replace(targetToken, ' [ _____ ] ');
        const otherKanji = KANJI_N5_LIST.filter(k => k.char !== targetChar).map(k => k.char);
        const dists = otherKanji.sort(() => rand() - 0.5).slice(0, 3);
        const allOptions = [targetToken, ...dists].sort(() => rand() - 0.5);
        const correctIndex = allOptions.indexOf(targetToken);
        const targetWordRomaji = resolveRomaji(targetToken, 'kanji');
        const optionsWithRomaji = formatOptions(allOptions, 'kanji');
        const sentenceRomajiWithBlank = createRomajiWithBlank(sent.romaji, targetWordRomaji);

        questions.push({
          id: `dsq-${day}-${qIndex}`,
          day,
          questionNumber: qIndex,
          sentenceWithBlank,
          sentenceRomajiWithBlank,
          fullSentence: sent.sentence,
          furigana: sent.furigana,
          romaji: sent.romaji,
          english: sent.english || '',
          targetWord: targetToken,
          targetWordRomaji,
          options: allOptions,
          optionsWithRomaji,
          correctIndex,
          explanation: `The Kanji「${targetChar}」(${targetWordRomaji} - ${kanjiItem.meaning}) is used in: "${sent.english}".`,
          category: 'kanji'
        });
        qIndex++;
      }
    }
  }

  // 3. Particle Cloze Questions using today's sentences
  const sentencePool = [
    ...todayWords.flatMap((w: any) => (w.sentences || []).map((s: any) => ({ sent: s, word: w }))),
    ...cumulativeWords.flatMap((w: any) => (w.sentences || []).map((s: any) => ({ sent: s, word: w })))
  ];

  for (const item of sentencePool) {
    if (questions.length >= count) break;
    const sent = item.sent;
    for (const p of N5_PARTICLES) {
      const pRegex = new RegExp(`(?<=[ぁ-んァ-ヶ一-龯])${p.char}(?=[ぁ-んァ-ヶ一-龯\\s、。])`);
      if (pRegex.test(sent.sentence) && questions.length < count) {
        const sentenceWithBlank = sent.sentence.replace(pRegex, ' [ _____ ] ');
        if (sentenceWithBlank !== sent.sentence) {
          if (questions.some(q => q.sentenceWithBlank === sentenceWithBlank)) continue;

          const distParticles = N5_PARTICLES.filter(pt => pt.char !== p.char).map(pt => pt.char).sort(() => rand() - 0.5).slice(0, 3);
          const allOptions = [p.char, ...distParticles].sort(() => rand() - 0.5);
          const correctIndex = allOptions.indexOf(p.char);
          const targetWordRomaji = p.romaji;
          const optionsWithRomaji = formatOptions(allOptions, 'particle');
          const sentenceRomajiWithBlank = createRomajiWithBlank(sent.romaji, targetWordRomaji);

          questions.push({
            id: `dsq-${day}-${qIndex}`,
            day,
            questionNumber: qIndex,
            sentenceWithBlank,
            sentenceRomajiWithBlank,
            fullSentence: sent.sentence,
            furigana: sent.furigana,
            romaji: sent.romaji,
            english: sent.english || '',
            targetWord: p.char,
            targetWordRomaji,
            options: allOptions,
            optionsWithRomaji,
            correctIndex,
            explanation: `Particle「${p.char}」(${p.romaji}): ${p.hint} (${p.meaning}).`,
            category: 'particle'
          });
          qIndex++;
          break;
        }
      }
    }
  }

  // 4. Cumulative Review to reach requested count (up to 50)
  const fullReviewPool = cumulativeWords.length >= 25 ? cumulativeWords : WORDS_N5_LIST;
  let attempts = 0;
  while (questions.length < count && attempts < 500) {
    attempts++;
    const pickWord = fullReviewPool[Math.floor(rand() * fullReviewPool.length)];
    if (!pickWord || !pickWord.sentences || pickWord.sentences.length === 0) continue;

    const sent = pickWord.sentences[Math.floor(rand() * pickWord.sentences.length)];
    if (!sent || !sent.sentence || !sent.english) continue;

    const targetToken = findTargetToken(sent.sentence, pickWord);
    if (!targetToken) continue;

    if (questions.some(q => q.fullSentence === sent.sentence && q.targetWord === targetToken)) continue;

    const sentenceWithBlank = sent.sentence.replace(targetToken, ' [ _____ ] ');
    const distractors = getDistractors(targetToken, pickWord, fullReviewPool);
    const allOptions = [targetToken, ...distractors.slice(0, 3)].sort(() => rand() - 0.5);
    const correctIndex = allOptions.indexOf(targetToken);
    const targetWordRomaji = resolveRomaji(targetToken, 'grammar');
    const optionsWithRomaji = formatOptions(allOptions, 'grammar');
    const sentenceRomajiWithBlank = createRomajiWithBlank(sent.romaji, targetWordRomaji);

    questions.push({
      id: `dsq-${day}-${qIndex}`,
      day,
      questionNumber: qIndex,
      sentenceWithBlank,
      sentenceRomajiWithBlank,
      fullSentence: sent.sentence,
      furigana: sent.furigana,
      romaji: sent.romaji,
      english: sent.english || '',
      targetWord: targetToken,
      targetWordRomaji,
      options: allOptions,
      optionsWithRomaji,
      correctIndex,
      explanation: `Review:「${targetToken}」(${targetWordRomaji}) means "${pickWord.meaning}" (${pickWord.reading}). Sentence context: "${sent.english}".`,
      category: 'grammar'
    });
    qIndex++;
  }

  return questions.slice(0, count);
}
