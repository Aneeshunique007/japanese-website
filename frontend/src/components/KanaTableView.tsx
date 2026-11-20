import React, { useState, useEffect, useMemo } from 'react';
import { 
  Play, 
  Volume2,
  Check,
  X,
  ArrowLeft,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  ArrowRight,
  Languages,
  Zap,
  Layers,
  BookOpen,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { getKanaDetails, KanaDetailsData } from '../data/kanaWords';
import { dataStore } from '../services/dataStore';
import { KanaDetailModal } from './KanaDetailModal';
import { KanaQuizModal } from './KanaQuizModal';
import { learnedStore } from '../utils/learnedStore';
import audio from '../utils/audio';

interface KanaTableViewProps {
  theme: 'dark' | 'light';
  initialScript?: 'hiragana' | 'katakana' | 'both';
  forcedScript?: 'hiragana' | 'katakana';
  onGainXp?: (xp: number) => void;
  onNavigateTab?: (tab: string, extraId?: string) => void;
}

export interface GojuonRowDef {
  id: string;
  name: string;
  isDakuten?: boolean;
  isHandakuten?: boolean;
  parentRow?: string;
  romaji: (string | null)[];
}

export const PROGRESSIVE_ROWS: GojuonRowDef[] = [
  { id: 'row-a', name: 'A-row (Vowels)', romaji: ['a', 'i', 'u', 'e', 'o'] },
  { id: 'row-ka', name: 'Ka-row', romaji: ['ka', 'ki', 'ku', 'ke', 'ko'] },
  { id: 'row-ga', name: 'Ga-row (Dakuten ゛)', isDakuten: true, parentRow: 'Ka', romaji: ['ga', 'gi', 'gu', 'ge', 'go'] },
  { id: 'row-sa', name: 'Sa-row', romaji: ['sa', 'shi', 'su', 'se', 'so'] },
  { id: 'row-za', name: 'Za-row (Dakuten ゛)', isDakuten: true, parentRow: 'Sa', romaji: ['za', 'ji', 'zu', 'ze', 'zo'] },
  { id: 'row-ta', name: 'Ta-row', romaji: ['ta', 'chi', 'tsu', 'te', 'to'] },
  { id: 'row-da', name: 'Da-row (Dakuten ゛)', isDakuten: true, parentRow: 'Ta', romaji: ['da', 'dji (ji)', 'dzu (zu)', 'de', 'do'] },
  { id: 'row-na', name: 'Na-row', romaji: ['na', 'ni', 'nu', 'ne', 'no'] },
  { id: 'row-ha', name: 'Ha-row', romaji: ['ha', 'hi', 'fu', 'he', 'ho'] },
  { id: 'row-ba', name: 'Ba-row (Dakuten ゛)', isDakuten: true, parentRow: 'Ha', romaji: ['ba', 'bi', 'bu', 'be', 'bo'] },
  { id: 'row-pa', name: 'Pa-row (Handakuten ゜)', isHandakuten: true, parentRow: 'Ha', romaji: ['pa', 'pi', 'pu', 'pe', 'po'] },
  { id: 'row-ma', name: 'Ma-row', romaji: ['ma', 'mi', 'mu', 'me', 'mo'] },
  { id: 'row-ya', name: 'Ya-row', romaji: ['ya', null, 'yu', null, 'yo'] },
  { id: 'row-ra', name: 'Ra-row', romaji: ['ra', 'ri', 'ru', 're', 'ro'] },
  { id: 'row-wa', name: 'Wa-row & N', romaji: ['wa', null, null, null, 'wo'] },
  { id: 'row-n', name: 'N', romaji: ['n', null, null, null, null] },
];

export const BASIC_ONLY_ROWS: GojuonRowDef[] = PROGRESSIVE_ROWS.filter(r => !r.isDakuten && !r.isHandakuten);
export const DAKUTEN_ONLY_ROWS: GojuonRowDef[] = PROGRESSIVE_ROWS.filter(r => r.isDakuten || r.isHandakuten);

export const KanaTableView: React.FC<KanaTableViewProps> = ({ 
  theme, 
  initialScript = 'hiragana', 
  forcedScript,
  onGainXp,
  onNavigateTab
}) => {
  const [activeScript, setActiveScript] = useState<'hiragana' | 'katakana' | 'both'>(forcedScript || initialScript);
  const [activeGroup, setActiveGroup] = useState<'progressive' | 'basic' | 'dakuten' | 'yoon'>('progressive');
  const [viewMode, setViewMode] = useState<'row' | 'table'>('row');
  const [selectedRowIndex, setSelectedRowIndex] = useState<number>(0);
  const [learnedKana, setLearnedKana] = useState<Set<string>>(() => new Set(learnedStore.getLearnedKanaList()));
  const [selectedRomajiPopup, setSelectedRomajiPopup] = useState<string | null>(null);
  const [showRomajiPage, setShowRomajiPage] = useState<boolean>(false);

  // All romaji sounds with their hiragana + katakana equivalents, grouped by row
  const ROMAJI_ROWS: { label: string; type: 'basic' | 'dakuten'; chars: { romaji: string; hira: string; kata: string }[] }[] = [
    { label: 'Vowels', type: 'basic', chars: [
      { romaji: 'a',   hira: 'あ', kata: 'ア' },
      { romaji: 'i',   hira: 'い', kata: 'イ' },
      { romaji: 'u',   hira: 'う', kata: 'ウ' },
      { romaji: 'e',   hira: 'え', kata: 'エ' },
      { romaji: 'o',   hira: 'お', kata: 'オ' },
    ]},
    { label: 'Ka-row', type: 'basic', chars: [
      { romaji: 'ka',  hira: 'か', kata: 'カ' },
      { romaji: 'ki',  hira: 'き', kata: 'キ' },
      { romaji: 'ku',  hira: 'く', kata: 'ク' },
      { romaji: 'ke',  hira: 'け', kata: 'ケ' },
      { romaji: 'ko',  hira: 'こ', kata: 'コ' },
    ]},
    { label: 'Sa-row', type: 'basic', chars: [
      { romaji: 'sa',  hira: 'さ', kata: 'サ' },
      { romaji: 'shi', hira: 'し', kata: 'シ' },
      { romaji: 'su',  hira: 'す', kata: 'ス' },
      { romaji: 'se',  hira: 'せ', kata: 'セ' },
      { romaji: 'so',  hira: 'そ', kata: 'ソ' },
    ]},
    { label: 'Ta-row', type: 'basic', chars: [
      { romaji: 'ta',  hira: 'た', kata: 'タ' },
      { romaji: 'chi', hira: 'ち', kata: 'チ' },
      { romaji: 'tsu', hira: 'つ', kata: 'ツ' },
      { romaji: 'te',  hira: 'て', kata: 'テ' },
      { romaji: 'to',  hira: 'と', kata: 'ト' },
    ]},
    { label: 'Na-row', type: 'basic', chars: [
      { romaji: 'na',  hira: 'な', kata: 'ナ' },
      { romaji: 'ni',  hira: 'に', kata: 'ニ' },
      { romaji: 'nu',  hira: 'ぬ', kata: 'ヌ' },
      { romaji: 'ne',  hira: 'ね', kata: 'ネ' },
      { romaji: 'no',  hira: 'の', kata: 'ノ' },
    ]},
    { label: 'Ha-row', type: 'basic', chars: [
      { romaji: 'ha',  hira: 'は', kata: 'ハ' },
      { romaji: 'hi',  hira: 'ひ', kata: 'ヒ' },
      { romaji: 'fu',  hira: 'ふ', kata: 'フ' },
      { romaji: 'he',  hira: 'へ', kata: 'ヘ' },
      { romaji: 'ho',  hira: 'ほ', kata: 'ホ' },
    ]},
    { label: 'Ma-row', type: 'basic', chars: [
      { romaji: 'ma',  hira: 'ま', kata: 'マ' },
      { romaji: 'mi',  hira: 'み', kata: 'ミ' },
      { romaji: 'mu',  hira: 'む', kata: 'ム' },
      { romaji: 'me',  hira: 'め', kata: 'メ' },
      { romaji: 'mo',  hira: 'も', kata: 'モ' },
    ]},
    { label: 'Ya-row', type: 'basic', chars: [
      { romaji: 'ya',  hira: 'や', kata: 'ヤ' },
      { romaji: 'yu',  hira: 'ゆ', kata: 'ユ' },
      { romaji: 'yo',  hira: 'よ', kata: 'ヨ' },
    ]},
    { label: 'Ra-row', type: 'basic', chars: [
      { romaji: 'ra',  hira: 'ら', kata: 'ラ' },
      { romaji: 'ri',  hira: 'り', kata: 'リ' },
      { romaji: 'ru',  hira: 'る', kata: 'ル' },
      { romaji: 're',  hira: 'れ', kata: 'レ' },
      { romaji: 'ro',  hira: 'ろ', kata: 'ロ' },
    ]},
    { label: 'Wa / N', type: 'basic', chars: [
      { romaji: 'wa',  hira: 'わ', kata: 'ワ' },
      { romaji: 'wo',  hira: 'を', kata: 'ヲ' },
      { romaji: 'n',   hira: 'ん', kata: 'ン' },
    ]},
    { label: 'Ga-row ゛', type: 'dakuten', chars: [
      { romaji: 'ga',  hira: 'が', kata: 'ガ' },
      { romaji: 'gi',  hira: 'ぎ', kata: 'ギ' },
      { romaji: 'gu',  hira: 'ぐ', kata: 'グ' },
      { romaji: 'ge',  hira: 'げ', kata: 'ゲ' },
      { romaji: 'go',  hira: 'ご', kata: 'ゴ' },
    ]},
    { label: 'Za-row ゛', type: 'dakuten', chars: [
      { romaji: 'za',  hira: 'ざ', kata: 'ザ' },
      { romaji: 'ji',  hira: 'じ', kata: 'ジ' },
      { romaji: 'zu',  hira: 'ず', kata: 'ズ' },
      { romaji: 'ze',  hira: 'ぜ', kata: 'ゼ' },
      { romaji: 'zo',  hira: 'ぞ', kata: 'ゾ' },
    ]},
    { label: 'Da-row ゛', type: 'dakuten', chars: [
      { romaji: 'da',  hira: 'だ', kata: 'ダ' },
      { romaji: 'de',  hira: 'で', kata: 'デ' },
      { romaji: 'do',  hira: 'ど', kata: 'ド' },
    ]},
    { label: 'Ba-row ゛', type: 'dakuten', chars: [
      { romaji: 'ba',  hira: 'ば', kata: 'バ' },
      { romaji: 'bi',  hira: 'び', kata: 'ビ' },
      { romaji: 'bu',  hira: 'ぶ', kata: 'ブ' },
      { romaji: 'be',  hira: 'べ', kata: 'ベ' },
      { romaji: 'bo',  hira: 'ぼ', kata: 'ボ' },
    ]},
    { label: 'Pa-row ゜', type: 'dakuten', chars: [
      { romaji: 'pa',  hira: 'ぱ', kata: 'パ' },
      { romaji: 'pi',  hira: 'ぴ', kata: 'ピ' },
      { romaji: 'pu',  hira: 'ぷ', kata: 'プ' },
      { romaji: 'pe',  hira: 'ぺ', kata: 'ペ' },
      { romaji: 'po',  hira: 'ぽ', kata: 'ポ' },
    ]},
  ];
  // Flat lookup used by comparison panel
  const ROMAJI_QUICK_PICKS = ROMAJI_ROWS.flatMap(r => r.chars);

  useEffect(() => {
    if (forcedScript) {
      setActiveScript(forcedScript);
    } else if (initialScript) {
      setActiveScript(initialScript);
    }
  }, [forcedScript, initialScript]);

  // Sync with store updates
  useEffect(() => {
    const handleLearnedUpdate = () => {
      setLearnedKana(new Set(learnedStore.getLearnedKanaList()));
    };

    window.addEventListener('anilearn_learned_update', handleLearnedUpdate);
    return () => {
      window.removeEventListener('anilearn_learned_update', handleLearnedUpdate);
    };
  }, []);

  // Modal States
  const [selectedKanaDetail, setSelectedKanaDetail] = useState<KanaDetailsData | null>(null);
  const [kanaDetailModalOpen, setKanaDetailModalOpen] = useState(false);
  const [kanaQuizModalOpen, setKanaQuizModalOpen] = useState(false);
  const [kanaQuizTargetChar, setKanaQuizTargetChar] = useState<string | undefined>(undefined);
  const [drillPoolSize, setDrillPoolSize] = useState<10 | 30 | 'all'>(10);

  const hiraganaData = dataStore.hiraganaData;
  const katakanaData = dataStore.katakanaData;

  const hiraganaMap = useMemo(() => {
    const map = new Map<string, typeof hiraganaData.basic[0]>();
    [...hiraganaData.basic, ...hiraganaData.dakuten].forEach((item) => {
      map.set(item.romaji.toLowerCase(), item);
      if (item.romaji.includes('(')) {
        map.set(item.romaji.split('(')[0].trim().toLowerCase(), item);
      }
    });
    return map;
  }, [hiraganaData]);

  const katakanaMap = useMemo(() => {
    const map = new Map<string, typeof katakanaData.basic[0]>();
    [...katakanaData.basic, ...katakanaData.dakuten].forEach((item) => {
      map.set(item.romaji.toLowerCase(), item);
      if (item.romaji.includes('(')) {
        map.set(item.romaji.split('(')[0].trim().toLowerCase(), item);
      }
    });
    return map;
  }, [katakanaData]);

  const activeRows = useMemo(() => {
    if (activeGroup === 'progressive') return PROGRESSIVE_ROWS;
    if (activeGroup === 'basic') return BASIC_ONLY_ROWS;
    if (activeGroup === 'dakuten') return DAKUTEN_ONLY_ROWS;
    return [];
  }, [activeGroup]);

  const gridSlotsByRow = useMemo(() => {
    if (activeGroup === 'yoon') return [];

    return activeRows.map((rowDef) => {
      const slots = rowDef.romaji.map((romaji, cIdx) => {
        if (!romaji) {
          return { item: null, hiraItem: null, kataItem: null, romaji: '', key: `empty-${rowDef.id}-${cIdx}` };
        }
        const hira = hiraganaMap.get(romaji.toLowerCase());
        const kata = katakanaMap.get(romaji.toLowerCase());
        const item = activeScript === 'katakana' ? (kata || hira) : (hira || kata);
        return {
          item: item || null,
          hiraItem: hira || null,
          kataItem: kata || null,
          romaji,
          key: `${rowDef.id}-${romaji}-${cIdx}`
        };
      });

      return {
        rowDef,
        slots
      };
    });
  }, [activeGroup, activeRows, activeScript, hiraganaMap, katakanaMap]);

  const handleQuickToggleLearned = (e: React.MouseEvent, char: string) => {
    e.stopPropagation();
    const nextState = learnedStore.toggleKanaLearned(char);
    if (nextState) {
      audio.playFanfare();
      confetti({ particleCount: 35, spread: 55, origin: { y: 0.7 } });
      onGainXp?.(10);
    } else {
      audio.playClick();
    }
  };

  const cardBg = theme === 'dark' ? 'bg-[#17171C] border-slate-800 text-white' : 'bg-white border-slate-200/80 text-[#1A1A1F] shadow-xs';
  const subText = theme === 'dark' ? 'text-slate-400' : 'text-slate-500';

  const handleKanaClick = (char: string, romaji: string, scriptOverride?: 'Hiragana' | 'Katakana') => {
    audio.playClick();
    const script = scriptOverride || (activeScript === 'katakana' ? 'Katakana' : 'Hiragana');
    const details = getKanaDetails(char, romaji, script);
    setSelectedKanaDetail(details);
    setKanaDetailModalOpen(true);
  };

  const handleStartKanaQuizFromCard = (char: string) => {
    setKanaQuizTargetChar(char);
    setKanaDetailModalOpen(false);
    setKanaQuizModalOpen(true);
  };

  // Only Kana that have been marked as learned/completed by the user, strictly isolated by active script
  const hiraganaAllItems = useMemo(() => [
    ...dataStore.hiraganaData.basic,
    ...dataStore.hiraganaData.dakuten,
    ...dataStore.hiraganaData.yoon
  ], [dataStore]);

  const katakanaAllItems = useMemo(() => [
    ...dataStore.katakanaData.basic,
    ...dataStore.katakanaData.dakuten,
    ...dataStore.katakanaData.yoon
  ], [dataStore]);

  const learnedKanaObjects = useMemo(() => {
    if (activeScript === 'hiragana') {
      return hiraganaAllItems.filter(k => learnedKana.has(k.char));
    }
    if (activeScript === 'katakana') {
      return katakanaAllItems.filter(k => learnedKana.has(k.char));
    }
    return [...hiraganaAllItems, ...katakanaAllItems].filter(k => learnedKana.has(k.char));
  }, [activeScript, hiraganaAllItems, katakanaAllItems, learnedKana]);

  const hiraganaLearnedCount = useMemo(() => {
    return hiraganaAllItems.filter(k => learnedKana.has(k.char)).length;
  }, [learnedKana, hiraganaAllItems]);

  const katakanaLearnedCount = useMemo(() => {
    return katakanaAllItems.filter(k => learnedKana.has(k.char)).length;
  }, [learnedKana, katakanaAllItems]);

  const scriptLearnedCount = activeScript === 'katakana' ? katakanaLearnedCount : (activeScript === 'hiragana' ? hiraganaLearnedCount : learnedKanaObjects.length);
  const scriptTotalCount = (activeScript === 'katakana' || activeScript === 'hiragana') ? 82 : 164;
  const scriptName = activeScript === 'katakana' ? 'Katakana' : (activeScript === 'hiragana' ? 'Hiragana' : 'Kana');

  // Selected question count for the drill:
  const activePoolTotal = scriptLearnedCount >= 10 ? scriptLearnedCount : scriptTotalCount;
  const drillQuestionCount = drillPoolSize === 'all'
    ? activePoolTotal
    : (drillPoolSize === 30 ? Math.min(30, activePoolTotal) : Math.min(10, activePoolTotal));

  // Romaji Comparison Popup Modal (Opens when clicking any Romaji letter)
  const renderRomajiPopupModal = () => {
    if (!selectedRomajiPopup) return null;
    const activePick = ROMAJI_QUICK_PICKS.find(p => p.romaji === selectedRomajiPopup) || ROMAJI_QUICK_PICKS[0];
    const hiraDetails = getKanaDetails(activePick.hira, activePick.romaji, 'Hiragana');
    const kataDetails = getKanaDetails(activePick.kata, activePick.romaji, 'Katakana');
    const hiraExamples = hiraDetails.words.slice(0, 2);
    const kataExamples = kataDetails.words.slice(0, 2);
    const cardBg = theme === 'dark' ? 'bg-[#15151C] text-white border-slate-800' : 'bg-white text-slate-900 border-slate-200';

    return (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-sm animate-fade-in"
        onClick={() => setSelectedRomajiPopup(null)}
      >
        <div 
          className={`w-full max-w-4xl rounded-3xl border ${cardBg} shadow-2xl overflow-hidden flex flex-col max-h-[90vh]`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between p-3 sm:p-5 border-b border-slate-100 dark:border-slate-800 shrink-0 gap-2">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-xl bg-[#FF5E3A] text-white font-mono font-black text-xs sm:text-sm tracking-wider shadow-sm shadow-orange-500/30 shrink-0">
                /{activePick.romaji}/
              </span>
              <div className="min-w-0">
                <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white flex items-center gap-1.5 truncate">
                  <span>Sound:</span>
                  <span className="font-mono text-[#FF5E3A]">"{activePick.romaji}"</span>
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 truncate hidden xs:block">
                  Comparing Hiragana &amp; Katakana side-by-side
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                onClick={() => audio.speak(activePick.hira)}
                className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-[#FF5E3A] text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-200 transition flex items-center gap-1 cursor-pointer shadow-2xs"
                title={`Listen to sound "${activePick.romaji}"`}
              >
                <Volume2 className="w-3.5 h-3.5 text-[#FF5E3A]" />
                <span className="hidden xs:inline">Hear Sound</span>
              </button>
              <button
                onClick={() => setSelectedRomajiPopup(null)}
                className="p-1 sm:p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                title="Close popup"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body: Always Two Columns Side-by-Side (grid-cols-2 on Mobile & Desktop) */}
          <div className="overflow-y-auto p-2.5 sm:p-5 md:p-6 space-y-4 sm:space-y-6">
            <div className="grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4 md:gap-5">
              {/* Hiragana Side (Always Left) */}
              <div className={`rounded-2xl p-2.5 xs:p-3 sm:p-4 md:p-5 border relative overflow-hidden flex flex-col justify-between space-y-2.5 sm:space-y-4 ${
                theme === 'dark' 
                  ? 'bg-[#121217] border-orange-500/20' 
                  : 'bg-orange-50/70 border-orange-200/80 shadow-xs'
              }`}>
                <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1">
                  <span className="px-1.5 xs:px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg text-[9px] xs:text-[10px] sm:text-xs font-black uppercase tracking-wider bg-orange-500/15 text-[#FF5E3A] border border-orange-500/30 flex items-center gap-1.5 w-fit">
                    <Languages className="w-3 h-3" />
                    <span className="hidden xs:inline">HIRAGANA</span>
                    <span className="xs:hidden">HIRA</span>
                  </span>
                  <span className="text-[9px] xs:text-[10px] sm:text-xs font-bold text-slate-400 font-mono">
                    {hiraDetails.strokeCount} strokes
                  </span>
                </div>

                {/* Huge Char & Audio */}
                <div className="flex flex-col items-center justify-center py-1 sm:py-3 text-center">
                  <span 
                    className="font-jp font-black text-slate-900 dark:text-white leading-none hover:scale-105 transition-transform cursor-pointer select-none"
                    style={{ fontSize: 'clamp(2.8rem, 10vw, 5.5rem)' }}
                    onClick={() => audio.speak(activePick.hira)}
                    title="Click to speak"
                  >
                    {activePick.hira}
                  </span>
                  <div className="flex items-center gap-1 sm:gap-1.5 mt-1 sm:mt-2">
                    <span className="text-xs sm:text-base font-black text-[#FF5E3A] font-mono">/{activePick.romaji}/</span>
                    <button 
                      onClick={() => audio.speak(activePick.hira)}
                      className="p-1 rounded-full text-slate-400 hover:text-[#FF5E3A] hover:bg-orange-500/10 transition cursor-pointer"
                      title="Pronounce Hiragana"
                    >
                      <Volume2 className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>

                {/* Example Words */}
                <div className="space-y-1.5 sm:space-y-2 pt-2 sm:pt-3 border-t border-orange-200/60 dark:border-slate-800">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[#FF5E3A] block">
                    EXAMPLE WORDS
                  </span>
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    {hiraExamples.map((w, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => audio.speak(w.furigana)}
                        className={`p-2 sm:p-2.5 rounded-xl border transition cursor-pointer group hover:border-[#FF5E3A] ${
                          theme === 'dark' ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-orange-100 shadow-2xs'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span className="font-jp font-bold text-xs sm:text-sm text-slate-900 dark:text-white group-hover:text-[#FF5E3A] transition truncate">
                            {w.furigana}
                          </span>
                          <Volume2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 group-hover:text-[#FF5E3A] transition shrink-0" />
                        </div>
                        <div className="text-[9px] sm:text-[11px] font-mono text-slate-400 font-semibold truncate">{w.romaji}</div>
                        <div className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-300 font-medium mt-0.5 truncate">{w.english}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Katakana Side (Always Right) */}
              <div className={`rounded-2xl p-2.5 xs:p-3 sm:p-4 md:p-5 border relative overflow-hidden flex flex-col justify-between space-y-2.5 sm:space-y-4 ${
                theme === 'dark' 
                  ? 'bg-[#121217] border-purple-500/20' 
                  : 'bg-purple-50/70 border-purple-200/80 shadow-xs'
              }`}>
                <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1">
                  <span className="px-1.5 xs:px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg text-[9px] xs:text-[10px] sm:text-xs font-black uppercase tracking-wider bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30 flex items-center gap-1.5 w-fit">
                    <Zap className="w-3 h-3" />
                    <span className="hidden xs:inline">KATAKANA</span>
                    <span className="xs:hidden">KATA</span>
                  </span>
                  <span className="text-[9px] xs:text-[10px] sm:text-xs font-bold text-slate-400 font-mono">
                    {kataDetails.strokeCount} strokes
                  </span>
                </div>

                {/* Huge Char & Audio */}
                <div className="flex flex-col items-center justify-center py-1 sm:py-3 text-center">
                  <span 
                    className="font-jp font-black text-slate-900 dark:text-white leading-none hover:scale-105 transition-transform cursor-pointer select-none"
                    style={{ fontSize: 'clamp(2.8rem, 10vw, 5.5rem)' }}
                    onClick={() => audio.speak(activePick.kata)}
                    title="Click to speak"
                  >
                    {activePick.kata}
                  </span>
                  <div className="flex items-center gap-1 sm:gap-1.5 mt-1 sm:mt-2">
                    <span className="text-xs sm:text-base font-black text-purple-600 dark:text-purple-400 font-mono">/{activePick.romaji}/</span>
                    <button 
                      onClick={() => audio.speak(activePick.kata)}
                      className="p-1 rounded-full text-slate-400 hover:text-purple-500 hover:bg-purple-500/10 transition cursor-pointer"
                      title="Pronounce Katakana"
                    >
                      <Volume2 className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>

                {/* Example Words */}
                <div className="space-y-1.5 sm:space-y-2 pt-2 sm:pt-3 border-t border-purple-200/60 dark:border-slate-800">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-purple-600 dark:text-purple-400 block">
                    EXAMPLE WORDS
                  </span>
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    {kataExamples.map((w, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => audio.speak(w.furigana)}
                        className={`p-2 sm:p-2.5 rounded-xl border transition cursor-pointer group hover:border-purple-500 ${
                          theme === 'dark' ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-purple-100 shadow-2xs'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span className="font-jp font-bold text-xs sm:text-sm text-slate-900 dark:text-white group-hover:text-purple-500 transition truncate">
                            {w.furigana}
                          </span>
                          <Volume2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 group-hover:text-purple-500 transition shrink-0" />
                        </div>
                        <div className="text-[9px] sm:text-[11px] font-mono text-slate-400 font-semibold truncate">{w.romaji}</div>
                        <div className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-300 font-medium mt-0.5 truncate">{w.english}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick switcher to next/prev sound inside popup */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => {
                  audio.playClick();
                  const currentIndex = ROMAJI_QUICK_PICKS.findIndex(p => p.romaji === activePick.romaji);
                  const prevIndex = (currentIndex - 1 + ROMAJI_QUICK_PICKS.length) % ROMAJI_QUICK_PICKS.length;
                  setSelectedRomajiPopup(ROMAJI_QUICK_PICKS[prevIndex].romaji);
                }}
                className="px-2.5 sm:px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-[#FF5E3A] text-[11px] sm:text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-[#FF5E3A] transition cursor-pointer"
              >
                ← Prev Sound
              </button>
              <button
                type="button"
                onClick={() => {
                  audio.playClick();
                  const currentIndex = ROMAJI_QUICK_PICKS.findIndex(p => p.romaji === activePick.romaji);
                  const nextIndex = (currentIndex + 1) % ROMAJI_QUICK_PICKS.length;
                  setSelectedRomajiPopup(ROMAJI_QUICK_PICKS[nextIndex].romaji);
                }}
                className="px-2.5 sm:px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-[#FF5E3A] text-[11px] sm:text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-[#FF5E3A] transition cursor-pointer"
              >
                Next Sound →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Dedicated Romaji Page Mode (opens when user clicks button near "Go to Katakana")
  if (showRomajiPage) {
    return (
      <div className="space-y-6 animate-fade-in">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-200/80 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                audio.playClick();
                setShowRomajiPage(false);
              }}
              className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-[#FF5E3A] text-xs font-bold transition flex items-center gap-2 text-slate-700 dark:text-slate-200 hover:text-[#FF5E3A] cursor-pointer shadow-2xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to {forcedScript === 'katakana' ? 'Katakana' : 'Hiragana'} Table</span>
            </button>
            <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-widest text-[#FF5E3A] font-mono flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Romaji Syllabary</span>
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-500/10 text-[#FF5E3A] border border-orange-500/20">
                  Click any letter to open popup
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black font-heading text-slate-900 dark:text-white">
                All Romaji Letters (a, i, u, e, o...)
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                audio.playClick();
                setShowRomajiPage(false);
              }}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition cursor-pointer"
              title="Close Romaji Page"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Romaji Letters Grid */}
        <div className={`rounded-3xl border p-5 sm:p-7 space-y-6 ${
          theme === 'dark' ? 'bg-[#15151C] border-slate-800' : 'bg-white border-slate-200/80 shadow-sm'
        }`}>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white">
                Romaji Sound Directory
              </span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-orange-500/10 text-[#FF5E3A] font-mono">
                {ROMAJI_QUICK_PICKS.length} Sounds
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Click any Romaji letter below to open its Hiragana &amp; Katakana comparison popup with stroke counts and examples.
            </p>
          </div>

          {/* Grouped by row */}
          <div className="space-y-4">
            {ROMAJI_ROWS.map((row) => (
              <div key={row.label} className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className={`text-[11px] font-black uppercase tracking-wider font-mono ${
                    row.type === 'dakuten' ? 'text-amber-500' : 'text-[#FF5E3A]'
                  }`}>
                    {row.label}
                  </span>
                  <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800/80" />
                </div>
                <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-2.5 sm:gap-3">
                  {row.chars.map(({ romaji, hira, kata }) => (
                    <button
                      key={romaji}
                      type="button"
                      onClick={() => {
                        audio.playClick();
                        setSelectedRomajiPopup(romaji);
                      }}
                      className={`group relative flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer text-center hover:scale-[1.03] active:scale-[0.98] shadow-2xs hover:shadow-md ${
                        row.type === 'dakuten'
                          ? theme === 'dark'
                            ? 'bg-amber-950/20 border-amber-900/40 text-amber-300 hover:border-amber-500 hover:bg-amber-950/40'
                            : 'bg-amber-50/70 border-amber-200/80 text-amber-800 hover:border-amber-400'
                          : theme === 'dark'
                            ? 'bg-slate-900/60 border-slate-800 text-slate-200 hover:border-[#FF5E3A] hover:text-[#FF5E3A]'
                            : 'bg-slate-50/80 border-slate-200/80 text-slate-700 hover:border-[#FF5E3A] hover:text-[#FF5E3A]'
                      }`}
                    >
                      <span className="text-lg sm:text-xl font-black font-mono leading-none tracking-tight group-hover:text-[#FF5E3A] transition">
                        {romaji}
                      </span>
                      <div className="flex items-center gap-2 mt-2 text-xs font-jp text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition">
                        <span className="font-bold text-slate-600 dark:text-slate-300">{hira}</span>
                        <span className="opacity-30">/</span>
                        <span className="font-bold text-slate-600 dark:text-slate-300">{kata}</span>
                      </div>
                      <span className="mt-2 text-[9px] font-bold uppercase tracking-wider text-slate-400/80 group-hover:text-[#FF5E3A] transition">
                        Click to view popup ↗
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* POPUP MODAL (Opens when clicking any romaji letter) */}
        {renderRomajiPopupModal()}
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header & Drill Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl font-black font-jp text-[#FF5E3A]">
              {activeScript === 'katakana' ? 'カタカナ五十音図' : (activeScript === 'hiragana' ? 'ひらがな五十音図' : '五十音図')}
            </span>
            <h1 className="text-2xl font-black tracking-tight font-heading">
              {activeScript === 'katakana'
                ? 'Katakana Syllabary (カタカナ)'
                : (activeScript === 'hiragana'
                    ? 'Hiragana Syllabary (ひらがな)'
                    : 'Kana Syllabary & Word Vault')}
            </h1>
          </div>
          <p className={`text-sm ${subText}`}>
            {activeScript === 'katakana'
              ? 'Master all 46 basic Katakana and 25 Dakuten rows placed directly below their base sounds, stroke counts, and loanword vocab.'
              : (activeScript === 'hiragana'
                  ? 'Master all 46 basic Hiragana and 25 Dakuten rows placed directly below their base sounds, stroke counts, and native Japanese vocab.'
                  : 'Click any Kana character to explore 20 related vocabulary words, native pronunciation, stroke counts, or test yourself in 2x2 drill mode.')}
          </p>
        </div>

        <div className="flex flex-col items-start sm:items-end gap-2 shrink-0 w-full sm:w-auto">
          {/* Question Pool Size Selector */}
          <div className="flex items-center gap-1 p-1 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-xs font-bold w-full sm:w-auto justify-center">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider px-2 font-mono hidden xs:inline">
              Pool:
            </span>
            <button
              type="button"
              onClick={() => {
                audio.playClick();
                setDrillPoolSize(10);
              }}
              className={`px-3 py-1.5 rounded-xl transition cursor-pointer text-xs flex items-center gap-1 ${
                drillPoolSize === 10
                  ? 'bg-white dark:bg-slate-700 text-[#FF5E3A] shadow-xs font-black'
                  : 'text-slate-600 dark:text-slate-400 hover:text-[#FF5E3A]'
              }`}
            >
              <span>10 Qs</span>
            </button>
            <button
              type="button"
              onClick={() => {
                audio.playClick();
                setDrillPoolSize(30);
              }}
              className={`px-3 py-1.5 rounded-xl transition cursor-pointer text-xs flex items-center gap-1 ${
                drillPoolSize === 30
                  ? 'bg-white dark:bg-slate-700 text-[#FF5E3A] shadow-xs font-black'
                  : 'text-slate-600 dark:text-slate-400 hover:text-[#FF5E3A]'
              }`}
            >
              <span>30 Qs</span>
            </button>
            <button
              type="button"
              onClick={() => {
                audio.playClick();
                setDrillPoolSize('all');
              }}
              className={`px-3 py-1.5 rounded-xl transition cursor-pointer text-xs flex items-center gap-1 ${
                drillPoolSize === 'all'
                  ? 'bg-white dark:bg-slate-700 text-[#FF5E3A] shadow-xs font-black'
                  : 'text-slate-600 dark:text-slate-400 hover:text-[#FF5E3A]'
              }`}
            >
              <span>All ({activePoolTotal})</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              audio.playClick();
              setKanaQuizTargetChar(undefined);
              setKanaQuizModalOpen(true);
            }}
            className="w-full sm:w-auto justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl font-black text-xs transition flex items-center gap-2 shrink-0 bg-gradient-to-r from-[#FF7B5C] to-[#FF5E3A] hover:from-[#FF5E3A] hover:to-[#E84E29] text-white shadow-lg shadow-orange-500/25 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            title={`Start drill on ${drillPoolSize === 'all' ? `All ${activePoolTotal}` : `${drillQuestionCount}`} questions (${scriptName})`}
          >
            <Play className="w-4 h-4 fill-white" />
            <span>
              Start {scriptName} Drill ({drillPoolSize === 'all' ? `All ${activePoolTotal}` : `${drillQuestionCount}`} Questions)
            </span>
          </button>
        </div>
      </div>

      {/* Quick Actions & Mastered Status Bar */}
      <div className={`p-4 sm:p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
        theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200/80 shadow-xs'
      }`}>
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
            learnedKana.size >= 164 ? 'bg-emerald-500/15 text-emerald-500' : 'bg-orange-500/10 text-[#FF5E3A]'
          }`}>
            {learnedKana.size >= 164 ? <Check className="w-5 h-5 stroke-[3]" /> : <Volume2 className="w-5 h-5" />}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-sm font-black text-slate-900 dark:text-white font-heading">
                {learnedKana.size >= 164
                  ? `All 164 Kana Mastered (${scriptName} Complete)`
                  : `${scriptName} Practice (${scriptLearnedCount}/${scriptTotalCount} Learned)`}
              </h3>
              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                learnedKana.size >= 164
                  ? 'bg-emerald-500/15 text-emerald-500'
                  : 'bg-orange-500/15 text-[#FF5E3A]'
              }`}>
                {learnedKana.size >= 164
                  ? '100% Mastered · Core N5 Ready'
                  : `${Math.round((scriptLearnedCount / scriptTotalCount) * 100)}% Complete`}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Click any character to practice stroke orders, sound audio, and see native vocabulary words.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end">
          {learnedKana.size >= 164 ? (
            <button
              type="button"
              onClick={() => {
                audio.playClick();
                learnedStore.resetAllKanaLearned();
              }}
              className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 text-slate-400 hover:text-amber-500 text-xs font-bold font-mono transition cursor-pointer flex items-center gap-1.5 shadow-2xs"
              title="Reset Kana progress to practice from scratch"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Kana</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                audio.playSuccess();
                learnedStore.markAllKanaLearned();
                confetti({
                  particleCount: 60,
                  spread: 70,
                  origin: { y: 0.7 }
                });
              }}
              className="px-3 py-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold font-mono transition cursor-pointer flex items-center gap-1.5 shadow-2xs"
              title="Mark all 164 Hiragana & Katakana as learned"
            >
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>I Know All Kana</span>
            </button>
          )}
        </div>
      </div>

      {/* Script & Category Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* If not forcedScript, show the original script toggle. If forcedScript, show quick cross-page switch */}
        {!forcedScript ? (
          <div className={`p-1.5 rounded-2xl border flex items-center gap-1 overflow-x-auto no-scrollbar touch-pan-x w-full sm:w-auto ${
            theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-orange-50/80 border-orange-200/80'
          }`}>
            <button
              onClick={() => {
                audio.playClick();
                setActiveScript('hiragana');
              }}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer flex items-center gap-1.5 shrink-0 ${
                activeScript === 'hiragana'
                  ? 'bg-[#FF5E3A] text-white shadow-sm shadow-orange-500/30'
                  : 'text-slate-500 hover:text-[#FF5E3A]'
              }`}
            >
              <Languages className="w-3.5 h-3.5" />
              <span>Hiragana (ひらがな)</span>
            </button>
            <button
              onClick={() => {
                audio.playClick();
                setActiveScript('katakana');
              }}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer flex items-center gap-1.5 shrink-0 ${
                activeScript === 'katakana'
                  ? 'bg-[#FF5E3A] text-white shadow-sm shadow-orange-500/30'
                  : 'text-slate-500 hover:text-[#FF5E3A]'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Katakana (カタカナ)</span>
            </button>
            <button
              onClick={() => {
                audio.playClick();
                setActiveScript('both');
              }}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer flex items-center gap-1.5 shrink-0 ${
                activeScript === 'both'
                  ? 'bg-gradient-to-r from-[#FF5E3A] to-pink-500 text-white shadow-sm shadow-orange-500/30'
                  : 'text-slate-500 hover:text-[#FF5E3A]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Both (Parallel)</span>
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`text-xs font-bold px-3 py-1.5 rounded-xl border flex items-center gap-1.5 ${
              forcedScript === 'katakana'
                ? 'bg-pink-500/10 border-pink-500/30 text-pink-500'
                : 'bg-orange-500/10 border-orange-500/30 text-[#FF5E3A]'
            }`}>
              {forcedScript === 'katakana' ? <Zap className="w-3.5 h-3.5" /> : <Languages className="w-3.5 h-3.5" />}
              <span>{forcedScript === 'katakana' ? 'Katakana Page' : 'Hiragana Page'}</span>
            </span>
            {onNavigateTab && (
              <button
                type="button"
                onClick={() => {
                  audio.playClick();
                  onNavigateTab(forcedScript === 'hiragana' ? 'katakana' : 'hiragana');
                }}
                className="px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-[#FF5E3A] text-xs font-bold transition flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-[#FF5E3A] cursor-pointer shadow-2xs"
                title={`Switch to ${forcedScript === 'hiragana' ? 'Katakana' : 'Hiragana'} page`}
              >
                <span>{forcedScript === 'hiragana' ? 'Go to Katakana' : 'Go to Hiragana'}</span>
                <span>→</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                audio.playClick();
                setShowRomajiPage(true);
              }}
              className="px-3.5 py-1.5 rounded-xl border border-orange-400/40 dark:border-orange-500/30 bg-orange-500/10 hover:bg-orange-500/20 text-[#FF5E3A] text-xs font-black transition flex items-center gap-1.5 cursor-pointer shadow-2xs hover:scale-[1.02] active:scale-[0.98]"
              title="Open full Romaji page to view all sounds and compare Hiragana & Katakana"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>All Romaji Sounds (a, i, u, e, o...)</span>
            </button>
          </div>
        )}

        {/* Group Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar touch-pan-x w-full sm:w-auto pb-1">
          {[
            { id: 'progressive' as const, label: 'All In-Line (Dakuten Below)' },
            { id: 'basic' as const, label: 'Basic Only (46)' },
            { id: 'dakuten' as const, label: 'Dakuten Only (25)' },
            { id: 'yoon' as const, label: 'Yōon Combos (36)' }
          ].map((grp) => (
            <button
              key={grp.id}
              onClick={() => {
                audio.playClick();
                setActiveGroup(grp.id);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition border cursor-pointer shrink-0 ${
                activeGroup === grp.id
                  ? 'bg-orange-500/15 border-[#FF5E3A] text-[#FF5E3A] shadow-xs'
                  : 'border-transparent text-slate-500 hover:text-[#FF5E3A]'
              }`}
            >
              {grp.label}
            </button>
          ))}
        </div>

        {/* View Mode Toggle: Row-by-Row vs Full Table */}
        <div className={`p-1 rounded-2xl border flex items-center gap-1 ${
          theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-orange-50/80 border-orange-200/80'
        }`}>
          <button
            type="button"
            onClick={() => {
              audio.playClick();
              setViewMode('row');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'row'
                ? 'bg-[#FF5E3A] text-white shadow-xs'
                : 'text-slate-500 hover:text-[#FF5E3A]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Row-by-Row</span>
            <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-white/20 text-white font-bold hidden sm:inline">Beginner</span>
          </button>
          <button
            type="button"
            onClick={() => {
              audio.playClick();
              setViewMode('table');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'table'
                ? 'bg-[#FF5E3A] text-white shadow-xs'
                : 'text-slate-500 hover:text-[#FF5E3A]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Full Table</span>
          </button>
        </div>
      </div>

      {viewMode === 'row' ? (
        /* ========================================================================= */
        /* BEGINNER STEP-BY-STEP ROW LEARNING STUDIO                                 */
        /* ========================================================================= */
        (() => {
          const rowsList = activeGroup === 'basic' ? BASIC_ONLY_ROWS : (activeGroup === 'dakuten' ? DAKUTEN_ONLY_ROWS : PROGRESSIVE_ROWS);
          const safeRowIndex = Math.min(selectedRowIndex, Math.max(0, rowsList.length - 1));
          const curRow = rowsList[safeRowIndex] || rowsList[0];

          // Compute slots for current row
          const slots = curRow.romaji.map((romaji) => {
            if (!romaji) return null;
            const hira = hiraganaMap.get(romaji.toLowerCase());
            const kata = katakanaMap.get(romaji.toLowerCase());
            const item = activeScript === 'katakana' ? (kata || hira) : (hira || kata);
            if (!item) return null;
            const details = getKanaDetails(item.char, romaji, (item.script as 'Hiragana' | 'Katakana') || (activeScript === 'katakana' ? 'Katakana' : 'Hiragana'));
            const isLearned = learnedKana.has(item.char);
            return {
              item,
              hira,
              kata,
              romaji,
              details,
              isLearned
            };
          }).filter((s): s is NonNullable<typeof s> => s !== null);

          const learnedCountInRow = slots.filter(s => s.isLearned).length;
          const isRowFullyLearned = slots.length > 0 && learnedCountInRow === slots.length;

          return (
            <div className="space-y-5 animate-fade-in">
              {/* 1. Horizontal Row Selector Carousel */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Select a 5-Character Row to Study ({safeRowIndex + 1}/{rowsList.length})
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      disabled={safeRowIndex === 0}
                      onClick={() => {
                        audio.playClick();
                        setSelectedRowIndex(prev => Math.max(0, prev - 1));
                      }}
                      className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#FF5E3A] text-slate-600 dark:text-slate-300 transition cursor-pointer"
                      title="Previous Row"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      disabled={safeRowIndex === rowsList.length - 1}
                      onClick={() => {
                        audio.playClick();
                        setSelectedRowIndex(prev => Math.min(rowsList.length - 1, prev + 1));
                      }}
                      className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#FF5E3A] text-slate-600 dark:text-slate-300 transition cursor-pointer"
                      title="Next Row"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar touch-pan-x py-1">
                  {rowsList.map((rDef, idx) => {
                    const isSelected = idx === safeRowIndex;
                    // Count learned in this rowDef
                    const rChars = rDef.romaji
                      .filter(Boolean)
                      .map(r => {
                        const h = hiraganaMap.get(r!.toLowerCase());
                        const k = katakanaMap.get(r!.toLowerCase());
                        return activeScript === 'katakana' ? k?.char : h?.char;
                      })
                      .filter(Boolean) as string[];
                    const rLearned = rChars.filter(c => learnedKana.has(c)).length;
                    const isDone = rChars.length > 0 && rLearned === rChars.length;

                    return (
                      <button
                        key={rDef.id}
                        type="button"
                        onClick={() => {
                          audio.playClick();
                          setSelectedRowIndex(idx);
                        }}
                        className={`px-3 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-2 border ${
                          isSelected
                            ? 'bg-[#FF5E3A] border-[#FF5E3A] text-white shadow-md shadow-orange-500/25 ring-2 ring-orange-400/40'
                            : isDone
                            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:border-emerald-500'
                            : theme === 'dark'
                            ? 'bg-[#17171C] border-slate-800 text-slate-300 hover:border-slate-700'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 shadow-2xs'
                        }`}
                      >
                        <span>{rDef.name}</span>
                        {isDone ? (
                          <span className={`w-4 h-4 rounded-full flex items-center justify-center ${
                            isSelected ? 'bg-white text-[#FF5E3A]' : 'bg-emerald-500 text-white'
                          }`}>
                            <Check className="w-2.5 h-2.5" />
                          </span>
                        ) : (
                          <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                            isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                          }`}>
                            {rLearned}/{rChars.length}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Row Summary Header Card */}
              <div className={`p-4 sm:p-5 rounded-2xl sm:rounded-3xl border ${cardBg} flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs`}>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-[#FF5E3A]/15 text-[#FF5E3A] border border-orange-500/25 font-mono">
                      Row {safeRowIndex + 1}
                    </span>
                    <h2 className="text-base sm:text-lg font-black font-heading text-slate-900 dark:text-white">
                      {curRow.name}
                    </h2>
                    {isRowFullyLearned && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-500" />
                        <span>Row Mastered</span>
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Listen to each pronunciation, use the memory hint, and check the box when you can recognize the character.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      const rowChars = slots.map(s => s.item.char);
                      if (rowChars.length > 0) {
                        setKanaQuizTargetChar(rowChars[0]);
                        setKanaQuizModalOpen(true);
                      }
                    }}
                    className="px-3.5 py-2 rounded-xl border border-orange-500/30 bg-orange-500/10 hover:bg-orange-500/20 text-[#FF5E3A] text-xs font-black transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Practice Row Quiz</span>
                  </button>
                </div>
              </div>

              {/* 3. The 5 Big Character Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
                {slots.map((slot) => {
                  const char = slot.item.char;
                  const romaji = slot.romaji;
                  const mnemonic = slot.details.mnemonic;
                  const word = slot.details.words[0];

                  return (
                    <div
                      key={char}
                      onClick={() => handleKanaClick(char, romaji)}
                      className={`p-4 sm:p-5 rounded-2xl sm:rounded-3xl border transition-all cursor-pointer relative group flex flex-col justify-between hover:shadow-lg hover:-translate-y-0.5 ${
                        slot.isLearned
                          ? 'border-emerald-500/40 bg-emerald-500/5 shadow-xs'
                          : cardBg
                      }`}
                    >
                      {/* Top Bar: Romaji tag + Audio speakers */}
                      <div className="flex items-center justify-between gap-1">
                        <span className="px-2 py-0.5 rounded-lg bg-orange-500/10 border border-orange-500/20 font-mono font-black text-xs text-[#FF5E3A]">
                          /{romaji}/
                        </span>

                        <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                          <button
                            type="button"
                            onClick={() => {
                              audio.speak(char, 0.9);
                            }}
                            className="p-1.5 rounded-lg hover:bg-orange-500/15 text-slate-400 hover:text-[#FF5E3A] transition cursor-pointer"
                            title={`Listen to "${char}" (Normal Speed)`}
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              audio.speak(char, 0.65);
                            }}
                            className="px-1.5 py-0.5 rounded-lg text-[10px] font-mono font-bold hover:bg-orange-500/15 text-slate-400 hover:text-[#FF5E3A] transition cursor-pointer border border-slate-200 dark:border-slate-800"
                            title={`Listen to "${char}" (Slow 0.7x Speed)`}
                          >
                            0.7x
                          </button>
                        </div>
                      </div>

                      {/* Giant Character Center */}
                      <div className="py-4 text-center">
                        <div className="text-5xl sm:text-6xl font-black font-jp tracking-tight text-slate-900 dark:text-white group-hover:text-[#FF5E3A] transition-colors">
                          {char}
                        </div>
                        {activeScript === 'both' && slot.kata && (
                          <div className="text-sm font-jp font-bold text-slate-400 mt-1">
                            Katakana: <span className="text-[#FF5E3A] font-black">{slot.kata.char}</span>
                          </div>
                        )}
                      </div>

                      {/* Memory Mnemonic Box */}
                      <div className="p-2.5 rounded-xl bg-amber-500/10 dark:bg-amber-500/5 border border-amber-500/20 text-left space-y-1 mb-3">
                        <div className="flex items-center gap-1 text-[10px] font-black uppercase text-amber-600 dark:text-amber-400">
                          <Lightbulb className="w-3 h-3 text-amber-500 shrink-0" />
                          <span>Memory Hint</span>
                        </div>
                        <p className="text-[11px] text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                          {mnemonic}
                        </p>
                      </div>

                      {/* Example Word */}
                      {word && (
                        <div 
                          onClick={(e) => {
                            e.stopPropagation();
                            audio.speak(word.furigana, 0.9);
                          }}
                          className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800/80 text-left flex items-center justify-between gap-1 mb-3 hover:border-orange-400/60 transition group/word"
                          title="Click to hear example word"
                        >
                          <div className="min-w-0">
                            <div className="text-xs font-black font-jp text-slate-900 dark:text-white group-hover/word:text-[#FF5E3A] transition truncate">
                              {word.word} <span className="text-[10px] font-normal text-slate-400">({word.furigana})</span>
                            </div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                              {word.english}
                            </div>
                          </div>
                          <Volume2 className="w-3.5 h-3.5 text-slate-400 group-hover/word:text-[#FF5E3A] shrink-0" />
                        </div>
                      )}

                      {/* Bottom Toggle Learned Button */}
                      <div onClick={(e) => e.stopPropagation()}>
                        <button
                          type="button"
                          onClick={(e) => handleQuickToggleLearned(e, char)}
                          className={`w-full py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs ${
                            slot.isLearned
                              ? 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-emerald-500/20'
                              : 'border border-slate-200 dark:border-slate-800 hover:border-[#FF5E3A] hover:bg-orange-500/10 text-slate-600 dark:text-slate-300 hover:text-[#FF5E3A]'
                          }`}
                        >
                          <Check className={`w-3.5 h-3.5 stroke-[3] ${slot.isLearned ? 'text-white' : 'text-slate-400'}`} />
                          <span>{slot.isLearned ? 'Learned' : 'Mark Learned (+10 XP)'}</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* 4. Row Mastery Celebration & Next Row Banner */}
              {isRowFullyLearned && safeRowIndex < rowsList.length - 1 && (
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-orange-500/15 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fade-in shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-sm shrink-0">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                        Row Complete! Mastered all characters in {curRow.name}.
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Ready to level up your reading skills? Move on to {rowsList[safeRowIndex + 1].name}!
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      audio.playSuccess();
                      setSelectedRowIndex(prev => prev + 1);
                      window.scrollTo({ top: 180, behavior: 'smooth' });
                    }}
                    className="px-4 py-2.5 rounded-xl bg-[#FF5E3A] hover:bg-[#e04f2c] text-white font-extrabold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-orange-500/20 active:scale-98 shrink-0"
                  >
                    <span>Next: {rowsList[safeRowIndex + 1].name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          );
        })()
      ) : (
        activeGroup !== 'yoon' ? (
        /* Vowel Column Headers (for 5-column Gojūon: Basic & Dakuten) */
        <div className="space-y-6">
          <div className="grid grid-cols-5 gap-1.5 sm:gap-2.5 md:gap-3.5 sticky top-2 z-20 backdrop-blur-md bg-white/80 dark:bg-[#0E0E12]/80 py-1.5 sm:py-2 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 px-1 shadow-2xs">
            {[
              { vowel: 'A', hira: 'あ', kata: 'ア' },
              { vowel: 'I', hira: 'い', kata: 'イ' },
              { vowel: 'U', hira: 'う', kata: 'ウ' },
              { vowel: 'E', hira: 'え', kata: 'エ' },
              { vowel: 'O', hira: 'お', kata: 'オ' },
            ].map((col) => (
              <div
                key={col.vowel}
                className={`py-1.5 sm:py-2 px-0.5 sm:px-1 rounded-xl text-center border flex flex-col items-center justify-center transition ${
                  theme === 'dark'
                    ? 'bg-[#17171C] border-slate-800 text-white'
                    : 'bg-white border-slate-200/80 text-[#1A1A1F] shadow-2xs'
                }`}
              >
                <span className="text-xs sm:text-sm font-mono font-black text-[#FF5E3A]">
                  {col.vowel}
                </span>
                <span className="text-[8px] sm:text-[10px] font-jp text-slate-400 font-bold whitespace-nowrap">
                  {activeScript === 'both'
                    ? `${col.hira} / ${col.kata}`
                    : activeScript === 'hiragana'
                    ? col.hira
                    : col.kata}
                </span>
              </div>
            ))}
          </div>

          {/* 5-Column Grid Cards Grouped By Row */}
          <div className="space-y-6">
            {gridSlotsByRow.map(({ rowDef, slots }) => {
              const hasAnyRealItem = slots.some(s => s.item !== null);
              if (!hasAnyRealItem) return null;

              return (
                <div key={rowDef.id} className="space-y-2">
                  {/* Row Header Badge with Dakuten derivation note */}
                  <div className="flex items-center justify-between px-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-lg border flex items-center gap-1.5 ${
                        rowDef.isDakuten
                          ? 'bg-amber-500/10 text-amber-500 border-amber-500/25'
                          : rowDef.isHandakuten
                          ? 'bg-purple-500/10 text-purple-400 border-purple-500/25'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                      }`}>
                        <span>{rowDef.isDakuten ? '゛' : rowDef.isHandakuten ? '゜' : '•'}</span>
                        <span>{rowDef.name}</span>
                      </span>

                      {rowDef.isDakuten && (
                        <span className="text-[10px] text-amber-500/90 font-mono font-semibold">
                          ↳ Dakuten (゛) directly below {rowDef.parentRow}-row
                        </span>
                      )}
                      {rowDef.isHandakuten && (
                        <span className="text-[10px] text-purple-400/90 font-mono font-semibold">
                          ↳ Handakuten (゜) directly below {rowDef.parentRow}-row
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 5-Column Grid Cards */}
                  <div className="grid grid-cols-5 gap-1.5 sm:gap-2.5 md:gap-3.5">
                    {slots.map((slot) => {
                      if (!slot.item) {
                        return (
                          <div
                            key={slot.key}
                            className={`rounded-xl sm:rounded-2xl border border-dashed flex items-center justify-center p-1 sm:p-3 md:p-4 min-h-[85px] sm:min-h-[115px] md:min-h-[135px] transition ${
                              theme === 'dark'
                                ? 'border-slate-800/40 bg-slate-900/10'
                                : 'border-slate-200/60 bg-orange-50/20'
                            }`}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400/40 dark:bg-slate-600/40" />
                          </div>
                        );
                      }

                      const item = slot.item;
                      const hiraItem = slot.hiraItem;
                      const kataItem = slot.kataItem;

                      const isHiraLearned = hiraItem ? learnedKana.has(hiraItem.char) : false;
                      const isKataLearned = kataItem ? learnedKana.has(kataItem.char) : false;
                      const isBothLearned = isHiraLearned && isKataLearned;
                      const isSingleLearned = activeScript === 'katakana' ? isKataLearned : isHiraLearned;
                      const isLearned = activeScript === 'both' ? isBothLearned : isSingleLearned;

                      return (
                        <div
                          key={slot.key}
                          onClick={() => handleKanaClick(item.char, item.romaji)}
                          className={`p-1.5 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col items-center justify-between text-center group relative overflow-hidden min-h-[85px] sm:min-h-[115px] md:min-h-[135px] ${
                            isLearned
                              ? 'border-emerald-500/90 bg-emerald-50/80 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-100 shadow-sm shadow-emerald-500/20 ring-1 ring-emerald-500/30'
                              : `${cardBg} hover:border-[#FF5E3A] shadow-xs hover:shadow-lg`
                          }`}
                        >
                          {/* Top Bar: Quick Mark / Stroke Count + Speaker */}
                          <div className="w-full flex items-center justify-between absolute top-1 sm:top-2 px-1 sm:px-2.5 z-10">
                            <div className="flex items-center gap-0.5 sm:gap-1">
                              {activeScript === 'both' ? (
                                <div className="flex items-center gap-0.5">
                                  {hiraItem && (
                                    <button
                                      onClick={(e) => handleQuickToggleLearned(e, hiraItem.char)}
                                      className={`px-1 py-0.2 rounded text-[7px] sm:text-[8px] font-mono font-bold transition cursor-pointer ${
                                        isHiraLearned
                                          ? 'bg-emerald-500 text-white shadow-2xs'
                                          : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-emerald-500'
                                      }`}
                                      title={`Hiragana ${hiraItem.char}: ${isHiraLearned ? 'Learned' : 'Click to mark learned'}`}
                                    >
                                      <span className="flex items-center gap-0.5">H {isHiraLearned && <Check className="w-2 h-2 inline" />}</span>
                                    </button>
                                  )}
                                  {kataItem && (
                                    <button
                                      onClick={(e) => handleQuickToggleLearned(e, kataItem.char)}
                                      className={`px-1 py-0.2 rounded text-[7px] sm:text-[8px] font-mono font-bold transition cursor-pointer ${
                                        isKataLearned
                                          ? 'bg-pink-500 text-white shadow-2xs'
                                          : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-pink-500'
                                      }`}
                                      title={`Katakana ${kataItem.char}: ${isKataLearned ? 'Learned' : 'Click to mark learned'}`}
                                    >
                                      <span className="flex items-center gap-0.5">K {isKataLearned && <Check className="w-2 h-2 inline" />}</span>
                                    </button>
                                  )}
                                </div>
                              ) : (
                                <button
                                  onClick={(e) => handleQuickToggleLearned(e, item.char)}
                                  className={`p-0.5 sm:p-1 rounded-md transition cursor-pointer ${
                                    isLearned
                                      ? 'bg-emerald-500 text-white shadow-xs'
                                      : 'opacity-0 group-hover:opacity-100 bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/50'
                                  }`}
                                  title={isLearned ? 'Marked as Learned (Click to unmark)' : 'Click to mark as learned (+10 XP)'}
                                >
                                  <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                                </button>
                              )}
                              {isLearned && (
                                <span className="px-1 sm:px-1.5 py-0.2 sm:py-0.5 rounded text-[8px] sm:text-[9px] font-mono font-black bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center">
                                  <Check className="w-2.5 h-2.5" />
                                </span>
                              )}
                            </div>

                            <div className="flex items-center gap-1">
                              {activeScript !== 'both' && item.strokeCount ? (
                                <span className={`hidden sm:inline-block text-[8px] sm:text-[9px] font-bold font-mono ${isLearned ? 'text-emerald-700 dark:text-emerald-300' : 'text-slate-400'}`}>
                                  {item.strokeCount}s
                                </span>
                              ) : null}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  audio.speak(item.char);
                                }}
                                className={`p-0.5 sm:p-1 rounded-md transition cursor-pointer opacity-0 group-hover:opacity-100 ${
                                  isLearned
                                    ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/30'
                                    : 'bg-orange-500/10 text-[#FF5E3A] hover:bg-orange-500/20'
                                }`}
                                title="Pronounce"
                              >
                                <Volume2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                              </button>
                            </div>
                          </div>

                          {/* Center Character Area */}
                          {activeScript === 'both' ? (
                            <div className="flex items-center justify-center gap-1 sm:gap-3.5 my-0.5 sm:my-2 w-full">
                              <div className="flex flex-col items-center">
                                <span className={`text-lg sm:text-2xl md:text-3xl font-black font-jp group-hover:scale-105 transition-all ${
                                  isHiraLearned ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-800 dark:text-white group-hover:text-[#FF5E3A]'
                                }`}>
                                  {hiraItem?.char || '—'}
                                </span>
                                <span className="text-[7px] sm:text-[9px] font-mono font-bold text-slate-400">Hira</span>
                              </div>
                              <div className="h-5 sm:h-7 w-px bg-slate-200 dark:bg-slate-700" />
                              <div className="flex flex-col items-center">
                                <span className={`text-lg sm:text-2xl md:text-3xl font-black font-jp group-hover:scale-105 transition-all ${
                                  isKataLearned ? 'text-emerald-600 dark:text-emerald-400' : 'text-pink-500 dark:text-pink-400 group-hover:text-[#FF5E3A]'
                                }`}>
                                  {kataItem?.char || '—'}
                                </span>
                                <span className="text-[7px] sm:text-[9px] font-mono font-bold text-slate-400">Kata</span>
                              </div>
                            </div>
                          ) : (
                            <span className={`text-2xl sm:text-4xl md:text-5xl font-black font-jp my-0.5 sm:my-2 group-hover:scale-110 transition-all duration-200 ${
                              isLearned 
                                ? 'text-emerald-600 dark:text-emerald-400' 
                                : 'group-hover:text-[#FF5E3A]'
                            }`}>
                              {item.char}
                            </span>
                          )}

                          {/* Romaji & Status */}
                          <div className="flex items-center gap-0.5 sm:gap-1 max-w-full">
                            <span className={`text-[9px] sm:text-[11px] md:text-xs font-mono font-black uppercase tracking-wider truncate max-w-full px-0.5 ${
                              isLearned ? 'text-emerald-700 dark:text-emerald-300' : 'text-[#FF5E3A]'
                            }`}>
                              {item.romaji}
                            </span>
                            {isLearned && (
                              <span className="p-0.5 rounded bg-emerald-500 text-white leading-tight shrink-0 flex items-center">
                                <Check className="w-2.5 h-2.5" />
                              </span>
                            )}
                          </div>

                          {item.example && (
                            <span className={`text-[9px] sm:text-[10px] truncate w-full mt-0.5 font-jp transition hidden sm:block ${
                              isLearned 
                                ? 'text-emerald-700/80 dark:text-emerald-300/80' 
                                : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300'
                            }`}>
                              {item.example.split(' ')[0]}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Yoon 3-Column / Responsive Grid */
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2 sm:gap-3.5 max-w-2xl mx-auto">
            {['-YA (-a)', '-YU (-u)', '-YO (-o)'].map((label) => (
              <div
                key={label}
                className={`py-1.5 sm:py-2 px-1 rounded-xl text-center border flex items-center justify-center transition ${
                  theme === 'dark'
                    ? 'bg-[#17171C] border-slate-800 text-white'
                    : 'bg-white border-slate-200/80 text-[#1A1A1F] shadow-2xs'
                }`}
              >
                <span className="text-xs sm:text-sm font-mono font-black text-[#FF5E3A] tracking-wider">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3.5 max-w-2xl mx-auto">
            {(hiraganaData.yoon || []).map((hItem, idx) => {
              const kItem = (katakanaData.yoon || [])[idx];
              const item = activeScript === 'katakana' ? (kItem || hItem) : hItem;
              const isHiraLearned = learnedKana.has(hItem.char);
              const isKataLearned = kItem ? learnedKana.has(kItem.char) : false;
              const isLearned = activeScript === 'both' ? (isHiraLearned && isKataLearned) : (activeScript === 'katakana' ? isKataLearned : isHiraLearned);

              return (
                <div
                  key={idx}
                  onClick={() => handleKanaClick(item.char, item.romaji)}
                  className={`p-2 sm:p-4 rounded-xl sm:rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col items-center justify-between text-center group relative overflow-hidden min-h-[85px] sm:min-h-[115px] md:min-h-[135px] ${
                    isLearned
                      ? 'border-emerald-500/90 bg-emerald-50/80 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-100 shadow-sm shadow-emerald-500/20 ring-1 ring-emerald-500/30'
                      : `${cardBg} hover:border-[#FF5E3A] shadow-xs hover:shadow-lg`
                  }`}
                >
                  <div className="w-full flex items-center justify-between absolute top-1 sm:top-2 px-1.5 sm:px-2.5 z-10">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={(e) => handleQuickToggleLearned(e, item.char)}
                        className={`p-0.5 sm:p-1 rounded-md transition cursor-pointer ${
                          isLearned
                            ? 'bg-emerald-500 text-white shadow-xs'
                            : 'opacity-0 group-hover:opacity-100 bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/50'
                        }`}
                        title={isLearned ? 'Marked as Learned (Click to unmark)' : 'Click to mark as learned (+10 XP)'}
                      >
                        <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                      </button>
                      {isLearned && (
                        <span className="px-1 sm:px-1.5 py-0.2 sm:py-0.5 rounded text-[8px] sm:text-[9px] font-mono font-black bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          audio.speak(item.char);
                        }}
                        className={`p-0.5 sm:p-1 rounded-md transition cursor-pointer opacity-0 group-hover:opacity-100 ${
                          isLearned
                            ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/30'
                            : 'bg-orange-500/10 text-[#FF5E3A] hover:bg-orange-500/20'
                        }`}
                        title="Pronounce"
                      >
                        <Volume2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      </button>
                    </div>
                  </div>

                  {activeScript === 'both' ? (
                    <div className="flex items-center justify-center gap-1.5 sm:gap-2 my-0.5 sm:my-2">
                      <span className="text-lg sm:text-2xl font-black font-jp text-slate-800 dark:text-white">
                        {hItem.char}
                      </span>
                      <span className="text-slate-400 text-xs">/</span>
                      <span className="text-lg sm:text-2xl font-black font-jp text-pink-500">
                        {kItem ? kItem.char : ''}
                      </span>
                    </div>
                  ) : (
                    <span className={`text-2xl sm:text-3xl md:text-4xl font-black font-jp my-0.5 sm:my-2 group-hover:scale-110 transition-all duration-200 ${
                      isLearned ? 'text-emerald-600 dark:text-emerald-400' : 'group-hover:text-[#FF5E3A]'
                    }`}>
                      {item.char}
                    </span>
                  )}

                  <div className="flex items-center gap-1">
                    <span className={`text-[9px] sm:text-[11px] md:text-xs font-mono font-black uppercase tracking-wider ${
                      isLearned ? 'text-emerald-700 dark:text-emerald-300' : 'text-[#FF5E3A]'
                    }`}>
                      {item.romaji}
                    </span>
                    {isLearned && (
                      <span className="p-0.5 rounded bg-emerald-500 text-white leading-tight flex items-center">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                    )}
                  </div>

                  {item.example && (
                    <span className={`text-[9px] sm:text-[10px] truncate w-full mt-0.5 font-jp transition hidden sm:block ${
                      isLearned 
                        ? 'text-emerald-700/80 dark:text-emerald-300/80' 
                        : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300'
                    }`}>
                      {item.example.split(' ')[0]}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        )
      )}

      {/* 1. Kana Detail Modal */}
      <KanaDetailModal
        isOpen={kanaDetailModalOpen}
        onClose={() => setKanaDetailModalOpen(false)}
        kanaData={selectedKanaDetail}
        onStartQuiz={handleStartKanaQuizFromCard}
        onGainXp={onGainXp}
        theme={theme}
      />

      {/* 2. Kana 2x2 Drill Quiz Modal */}
      <KanaQuizModal
        isOpen={kanaQuizModalOpen}
        onClose={() => setKanaQuizModalOpen(false)}
        kanaList={learnedKanaObjects}
        initialScript={activeScript === 'both' ? 'hiragana' : activeScript}
        targetChar={kanaQuizTargetChar}
        questionPoolSize={drillPoolSize}
        theme={theme}
        onCompleteQuiz={(xp) => {
          if (onGainXp) onGainXp(xp);
        }}
      />

      {/* 3. Romaji Comparison Modal Popup */}
      {renderRomajiPopupModal()}

    </div>
  );
};

export default KanaTableView;
