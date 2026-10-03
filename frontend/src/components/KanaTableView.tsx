import React, { useState, useEffect, useMemo } from 'react';
import { 
  Play, 
  Volume2,
  Check,
  Lock,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Sliders,
  X,
  ArrowLeft
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { getKanaDetails, KanaDetailsData } from '../data/kanaWords';
import { dataStore } from '../services/dataStore';
import { KanaDetailModal } from './KanaDetailModal';
import { KanaQuizModal } from './KanaQuizModal';
import { CustomizePlanModal } from './CustomizePlanModal';
import { learnedStore } from '../utils/learnedStore';
import { studyScheduleStore, SCHEDULE_EVENT, ScheduleDuration } from '../utils/studyScheduleStore';
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
  const [scheduleFilter, setScheduleFilter] = useState<'ALL' | 'TODAY' | 'UNLOCKED'>('ALL');
  const [learnedKana, setLearnedKana] = useState<Set<string>>(() => new Set(learnedStore.getLearnedKanaList()));
  const [scheduleTargetDays, setScheduleTargetDays] = useState<ScheduleDuration>(() => studyScheduleStore.getTargetDays());
  const [scheduleCurrentDay, setScheduleCurrentDay] = useState<number>(() => studyScheduleStore.getCurrentDay());
  const [isCustomActive, setIsCustomActive] = useState<boolean>(() => studyScheduleStore.isCustomEnabled());
  const [customPace, setCustomPace] = useState(() => studyScheduleStore.getCustomPace());
  const [showCustomizeModal, setShowCustomizeModal] = useState<boolean>(false);
  const [, setScheduleTick] = useState(0);
  const [lockedKanaModalItem, setLockedKanaModalItem] = useState<{ char: string; day: number; romaji: string } | null>(null);
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
    const handleScheduleUpdate = () => {
      setScheduleTargetDays(studyScheduleStore.getTargetDays());
      setScheduleCurrentDay(studyScheduleStore.getCurrentDay());
      setIsCustomActive(studyScheduleStore.isCustomEnabled());
      setCustomPace(studyScheduleStore.getCustomPace());
      setScheduleTick(t => t + 1);
    };

    window.addEventListener('anilearn_learned_update', handleLearnedUpdate);
    window.addEventListener(SCHEDULE_EVENT, handleScheduleUpdate);
    return () => {
      window.removeEventListener('anilearn_learned_update', handleLearnedUpdate);
      window.removeEventListener(SCHEDULE_EVENT, handleScheduleUpdate);
    };
  }, []);

  // Modal States
  const [selectedKanaDetail, setSelectedKanaDetail] = useState<KanaDetailsData | null>(null);
  const [kanaDetailModalOpen, setKanaDetailModalOpen] = useState(false);
  const [kanaQuizModalOpen, setKanaQuizModalOpen] = useState(false);
  const [kanaQuizTargetChar, setKanaQuizTargetChar] = useState<string | undefined>(undefined);

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
    const isUnlocked = studyScheduleStore.isKanaUnlocked(char);
    if (!isUnlocked) {
      audio.playError();
      setLockedKanaModalItem({
        char,
        romaji,
        day: studyScheduleStore.getKanaDay(char)
      });
      return;
    }
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

  // Only Kana that have been marked as learned/completed by the user
  const allKanaItems = [
    ...dataStore.hiraganaData.basic,
    ...dataStore.hiraganaData.dakuten,
    ...dataStore.hiraganaData.yoon,
    ...dataStore.katakanaData.basic,
    ...dataStore.katakanaData.dakuten,
    ...dataStore.katakanaData.yoon
  ];
  const learnedKanaObjects = useMemo(
    () => allKanaItems.filter(k => learnedKana.has(k.char)),
    [learnedKana]
  );

  const hiraganaLearnedCount = useMemo(() => {
    return [...hiraganaData.basic, ...hiraganaData.dakuten].filter(k => learnedKana.has(k.char)).length;
  }, [learnedKana, hiraganaData]);

  const katakanaLearnedCount = useMemo(() => {
    return [...katakanaData.basic, ...katakanaData.dakuten].filter(k => learnedKana.has(k.char)).length;
  }, [learnedKana, katakanaData]);

  const scriptLearnedCount = activeScript === 'katakana' ? katakanaLearnedCount : (activeScript === 'hiragana' ? hiraganaLearnedCount : learnedKanaObjects.length);
  const scriptTotalCount = (activeScript === 'katakana' || activeScript === 'hiragana') ? 82 : 164;
  const scriptName = activeScript === 'katakana' ? 'Katakana' : (activeScript === 'hiragana' ? 'Hiragana' : 'Kana');
  const isDrillUnlocked = scriptLearnedCount >= 10;

  // Drill question count: 10 questions if < 100 learned, 30 questions if >= 100 learned
  const drillQuestionCount = scriptLearnedCount >= 100
    ? Math.min(30, scriptLearnedCount)
    : Math.min(10, Math.max(5, scriptLearnedCount));

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
              {/* 🌸 Hiragana Side (Always Left) */}
              <div className={`rounded-2xl p-2.5 xs:p-3 sm:p-4 md:p-5 border relative overflow-hidden flex flex-col justify-between space-y-2.5 sm:space-y-4 ${
                theme === 'dark' 
                  ? 'bg-[#121217] border-orange-500/20' 
                  : 'bg-orange-50/70 border-orange-200/80 shadow-xs'
              }`}>
                <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1">
                  <span className="px-1.5 xs:px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg text-[9px] xs:text-[10px] sm:text-xs font-black uppercase tracking-wider bg-orange-500/15 text-[#FF5E3A] border border-orange-500/30 flex items-center gap-1 w-fit">
                    <span>🌸</span>
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

              {/* ⚡ Katakana Side (Always Right) */}
              <div className={`rounded-2xl p-2.5 xs:p-3 sm:p-4 md:p-5 border relative overflow-hidden flex flex-col justify-between space-y-2.5 sm:space-y-4 ${
                theme === 'dark' 
                  ? 'bg-[#121217] border-purple-500/20' 
                  : 'bg-purple-50/70 border-purple-200/80 shadow-xs'
              }`}>
                <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1">
                  <span className="px-1.5 xs:px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg text-[9px] xs:text-[10px] sm:text-xs font-black uppercase tracking-wider bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30 flex items-center gap-1 w-fit">
                    <span>⚡</span>
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
                <span className="text-xs font-black uppercase tracking-widest text-[#FF5E3A] font-mono">🔤 Romaji Syllabary</span>
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

        <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0 w-full sm:w-auto">
          <button
            onClick={() => {
              if (!isDrillUnlocked) {
                audio.playError();
                return;
              }
              audio.playClick();
              setKanaQuizTargetChar(undefined);
              setKanaQuizModalOpen(true);
            }}
            disabled={!isDrillUnlocked}
            className={`w-full sm:w-auto justify-center px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl font-black text-xs transition flex items-center gap-2 shrink-0 ${
              isDrillUnlocked
                ? 'bg-gradient-to-r from-[#FF7B5C] to-[#FF5E3A] hover:from-[#FF5E3A] hover:to-[#E84E29] text-white shadow-lg shadow-orange-500/25 cursor-pointer transform hover:-translate-y-0.5'
                : 'bg-slate-100 dark:bg-slate-800/80 text-slate-400 dark:text-slate-500 cursor-not-allowed border border-slate-200 dark:border-slate-800'
            }`}
            title={
              isDrillUnlocked
                ? `Start drill on ${drillQuestionCount} questions from your ${scriptLearnedCount} learned ${scriptName}`
                : `Learn at least 10 ${scriptName} to unlock drill (${scriptLearnedCount}/10 completed)`
            }
          >
            {isDrillUnlocked ? (
              <>
                <Play className="w-4 h-4 fill-white" />
                <span>Start {scriptName} Drill ({drillQuestionCount} Questions)</span>
              </>
            ) : (
              <>
                <Lock className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                <span>Learn 10 {scriptName} to Unlock Drill ({scriptLearnedCount}/10)</span>
              </>
            )}
          </button>
          {!isDrillUnlocked && (
            <span className="text-[11px] font-bold text-amber-500 dark:text-amber-400 self-center sm:self-auto">
              Mark {10 - scriptLearnedCount} more {scriptName} as learned to unlock drill
            </span>
          )}
        </div>
      </div>

      {/* JLPT N5 Study Schedule Banner & Day Controls */}
      {(() => {
        const scriptPace = activeScript === 'katakana'
          ? (customPace.katakanaPerDay || customPace.kanaPerDay || 10)
          : (activeScript === 'hiragana'
              ? (customPace.hiraganaPerDay || customPace.kanaPerDay || 10)
              : (customPace.kanaPerDay || 10));
        const scriptDaysNeeded = activeScript === 'katakana'
          ? studyScheduleStore.getKatakanaDaysNeeded(scriptPace)
          : (activeScript === 'hiragana'
              ? studyScheduleStore.getHiraganaDaysNeeded(scriptPace)
              : studyScheduleStore.getKanaDaysNeeded(scriptPace));
        const effectiveTargetDays = isCustomActive ? scriptDaysNeeded : (scheduleTargetDays === 'ALL' ? 60 : scheduleTargetDays);
        const currentDayTargets = studyScheduleStore.getDayTargets(scheduleCurrentDay);
        const todayTargetKana = activeScript === 'katakana' 
          ? currentDayTargets.katakana 
          : (activeScript === 'hiragana' ? currentDayTargets.hiragana : currentDayTargets.kana);
        const todayTargetCount = activeScript === 'katakana'
          ? currentDayTargets.katakanaCount
          : (activeScript === 'hiragana' ? currentDayTargets.hiraganaCount : currentDayTargets.kanaCount);
        const todayLearnedKanaCount = todayTargetKana.filter(k => learnedKana.has(k.char)).length;

        return (
          <div className={`p-4 sm:p-5 rounded-2xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
            theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200/80 shadow-xs'
          }`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-[#FF5E3A] flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-sm font-black text-slate-900 dark:text-white font-heading">
                      {isCustomActive ? `Custom ${scriptName} Pace` : `JLPT N5 ${scriptName} Schedule`}: Day {scheduleCurrentDay} of {effectiveTargetDays}
                    </h3>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-orange-500/15 text-[#FF5E3A]">
                      {isCustomActive
                        ? `${scriptPace} ${scriptName} / day · ${scriptDaysNeeded} days total`
                        : `${todayTargetCount} ${scriptName} on Day ${scheduleCurrentDay}`}
                    </span>
                    {todayTargetKana.length > 0 && (
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        todayLearnedKanaCount >= todayTargetKana.length
                          ? 'bg-emerald-500/15 text-emerald-500'
                          : 'bg-amber-500/15 text-amber-500'
                      }`}>
                        Today: {todayLearnedKanaCount}/{todayTargetKana.length} Learned
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {isCustomActive
                      ? `Learning ${scriptPace} ${scriptName} daily. Day 1–${scheduleCurrentDay} unlocked. Kanji is also studied alongside from Day 1.`
                      : `Day-by-day ${scriptName} unlocked. Advance days or adjust your daily pace anytime.`}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap self-stretch sm:self-auto justify-between sm:justify-end overflow-x-auto no-scrollbar touch-pan-x">
                {/* Customize Pace Button */}
                <button
                  type="button"
                  onClick={() => {
                    audio.playClick();
                    setShowCustomizeModal(true);
                  }}
                  className="px-3 py-1.5 rounded-xl border border-orange-500/30 bg-orange-500/10 hover:bg-orange-500/20 text-[#FF5E3A] text-xs font-bold font-mono transition cursor-pointer flex items-center gap-1.5 shadow-2xs"
                  title="Customize daily Kana pace and target days"
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Customize Pace</span>
                </button>

                {/* Day Stepper */}
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-xl bg-slate-100 dark:bg-slate-800">
                  <button
                    onClick={() => {
                      audio.playClick();
                      studyScheduleStore.prevDay();
                    }}
                    disabled={scheduleCurrentDay <= 1}
                    className="p-1 rounded-lg hover:bg-white dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                    title="Previous Day"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="font-mono text-xs font-black text-[#FF5E3A] px-1">
                    Day {scheduleCurrentDay}
                  </span>
                  <button
                    onClick={() => {
                      audio.playClick();
                      studyScheduleStore.nextDay();
                    }}
                    disabled={scheduleCurrentDay >= (typeof effectiveTargetDays === 'number' ? effectiveTargetDays : 60)}
                    className="p-1 rounded-lg hover:bg-white dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                    title="Next Day"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Schedule Filter Pills */}
                <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800">
                  <button
                    onClick={() => {
                      audio.playClick();
                      setScheduleFilter('ALL');
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      scheduleFilter === 'ALL'
                        ? 'bg-[#FF5E3A] text-white shadow-2xs'
                        : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    All ({scriptTotalCount})
                  </button>
                  <button
                    onClick={() => {
                      audio.playClick();
                      setScheduleFilter('TODAY');
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1 ${
                      scheduleFilter === 'TODAY'
                        ? 'bg-[#FF5E3A] text-white shadow-2xs'
                        : 'text-slate-500 hover:text-[#FF5E3A]'
                    }`}
                  >
                    <span>Today (Day {scheduleCurrentDay})</span>
                  </button>
                  <button
                    onClick={() => {
                      audio.playClick();
                      setScheduleFilter('UNLOCKED');
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      scheduleFilter === 'UNLOCKED'
                        ? 'bg-[#FF5E3A] text-white shadow-2xs'
                        : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    Unlocked (1–{scheduleCurrentDay})
                  </button>
                </div>
              </div>
            </div>
        );
      })()}

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
              <span>🌸</span>
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
              <span>⚡</span>
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
              <span>🌸⚡</span>
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
              <span>{forcedScript === 'katakana' ? '⚡ Katakana Page' : '🌸 Hiragana Page'}</span>
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
                <span>{forcedScript === 'hiragana' ? '⚡ Go to Katakana' : '🌸 Go to Hiragana'}</span>
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
              <span>🔤</span>
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
      </div>

      {/* Vowel Column Headers (for 5-column Gojūon: Basic & Dakuten) */}
      {activeGroup !== 'yoon' ? (
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
              const hasVisibleRealItem = slots.some(slot => {
                if (!slot.item) return false;
                const char = slot.item.char;
                const isToday = studyScheduleStore.isKanaToday(char);
                const isUnlocked = studyScheduleStore.isKanaUnlocked(char);
                if (scheduleFilter === 'TODAY' && !isToday) return false;
                if (scheduleFilter === 'UNLOCKED' && !isUnlocked) return false;
                return true;
              });

              const hasAnyRealItem = slots.some(s => s.item !== null);
              if (hasAnyRealItem && !hasVisibleRealItem) return null;

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

                      const dayNumber = studyScheduleStore.getKanaDay(item.char);
                      const isUnlocked = studyScheduleStore.isKanaUnlocked(item.char);
                      const isToday = studyScheduleStore.isKanaToday(item.char);

                      if (scheduleFilter === 'TODAY' && !isToday) return null;
                      if (scheduleFilter === 'UNLOCKED' && !isUnlocked) return null;

                      return (
                        <div
                          key={slot.key}
                          onClick={() => handleKanaClick(item.char, item.romaji)}
                          className={`p-1.5 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col items-center justify-between text-center group relative overflow-hidden min-h-[85px] sm:min-h-[115px] md:min-h-[135px] ${
                            !isUnlocked
                              ? 'border-slate-200/60 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-900/30 opacity-70 hover:opacity-100 hover:border-amber-500/60 shadow-2xs'
                              : isLearned
                              ? 'border-emerald-500/90 bg-emerald-50/80 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-100 shadow-sm shadow-emerald-500/20 ring-1 ring-emerald-500/30'
                              : `${cardBg} hover:border-[#FF5E3A] shadow-xs hover:shadow-lg`
                          }`}
                        >
                          {/* Top Bar: Quick Mark / Day Badge + Stroke Count + Speaker */}
                          <div className="w-full flex items-center justify-between absolute top-1 sm:top-2 px-1 sm:px-2.5 z-10">
                            {!isUnlocked ? (
                              <span className="flex items-center gap-0.5 px-1 sm:px-1.5 py-0.2 sm:py-0.5 rounded text-[8px] sm:text-[9px] font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-slate-700" title={`Unlocks on Day ${dayNumber}`}>
                                <Lock className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-amber-500" />
                                <span>D{dayNumber}</span>
                              </span>
                            ) : (
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
                                        🌸{isHiraLearned ? '✓' : '+'}
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
                                        ⚡{isKataLearned ? '✓' : ''}
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
                                <span className={`px-1 sm:px-1.5 py-0.2 sm:py-0.5 rounded text-[8px] sm:text-[9px] font-mono font-black ${
                                  isToday 
                                    ? 'bg-[#FF5E3A] text-white' 
                                    : 'bg-orange-500/10 text-[#FF5E3A]'
                                }`}>
                                  D{dayNumber}
                                </span>
                              </div>
                            )}

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
                                <span className="text-[7px] sm:text-[9px] font-mono font-bold text-slate-400">🌸 Hira</span>
                              </div>
                              <div className="h-5 sm:h-7 w-px bg-slate-200 dark:bg-slate-700" />
                              <div className="flex flex-col items-center">
                                <span className={`text-lg sm:text-2xl md:text-3xl font-black font-jp group-hover:scale-105 transition-all ${
                                  isKataLearned ? 'text-emerald-600 dark:text-emerald-400' : 'text-pink-500 dark:text-pink-400 group-hover:text-[#FF5E3A]'
                                }`}>
                                  {kataItem?.char || '—'}
                                </span>
                                <span className="text-[7px] sm:text-[9px] font-mono font-bold text-slate-400">⚡ Kata</span>
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
                              <span className="text-[8px] sm:text-[9px] font-black px-1 rounded bg-emerald-500 text-white leading-tight shrink-0">
                                ✓
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

              const dayNumber = studyScheduleStore.getKanaDay(item.char);
              const isUnlocked = studyScheduleStore.isKanaUnlocked(item.char);
              const isToday = studyScheduleStore.isKanaToday(item.char);

              if (scheduleFilter === 'TODAY' && !isToday) return null;
              if (scheduleFilter === 'UNLOCKED' && !isUnlocked) return null;

              return (
                <div
                  key={idx}
                  onClick={() => handleKanaClick(item.char, item.romaji)}
                  className={`p-2 sm:p-4 rounded-xl sm:rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col items-center justify-between text-center group relative overflow-hidden min-h-[85px] sm:min-h-[115px] md:min-h-[135px] ${
                    !isUnlocked
                      ? 'border-slate-200/60 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-900/30 opacity-70 hover:opacity-100 hover:border-amber-500/60 shadow-2xs'
                      : isLearned
                      ? 'border-emerald-500/90 bg-emerald-50/80 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-100 shadow-sm shadow-emerald-500/20 ring-1 ring-emerald-500/30'
                      : `${cardBg} hover:border-[#FF5E3A] shadow-xs hover:shadow-lg`
                  }`}
                >
                  <div className="w-full flex items-center justify-between absolute top-1 sm:top-2 px-1.5 sm:px-2.5 z-10">
                    {!isUnlocked ? (
                      <span className="flex items-center gap-0.5 px-1 sm:px-1.5 py-0.2 sm:py-0.5 rounded text-[8px] sm:text-[9px] font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-slate-700" title={`Unlocks on Day ${dayNumber}`}>
                        <Lock className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-amber-500" />
                        <span>D{dayNumber}</span>
                      </span>
                    ) : (
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
                        <span className={`px-1 sm:px-1.5 py-0.2 sm:py-0.5 rounded text-[8px] sm:text-[9px] font-mono font-black ${
                          isToday 
                            ? 'bg-[#FF5E3A] text-white' 
                            : 'bg-orange-500/10 text-[#FF5E3A]'
                        }`}>
                          D{dayNumber}
                        </span>
                      </div>
                    )}

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
                      <span className="text-[8px] sm:text-[9px] font-black px-1 rounded bg-emerald-500 text-white leading-tight">
                        ✓
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
        theme={theme}
        onCompleteQuiz={(xp) => {
          if (onGainXp) onGainXp(xp);
        }}
      />

      {/* 3. Locked Kana Schedule Prompt Modal */}
      {lockedKanaModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className={`w-full max-w-sm p-6 rounded-3xl border shadow-2xl space-y-4 ${cardBg}`}>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto">
              <Lock className="w-6 h-6" />
            </div>
            <div className="text-center space-y-1">
              <span className="text-4xl font-black font-jp block my-2 text-slate-700 dark:text-slate-300">
                {lockedKanaModalItem.char}
              </span>
              <h3 className="text-base font-black font-heading">
                Kana Scheduled for Day {lockedKanaModalItem.day}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                In your {scheduleTargetDays}-day JLPT N5 study plan, 
                「{lockedKanaModalItem.char}」({lockedKanaModalItem.romaji}) unlocks on <strong>Day {lockedKanaModalItem.day}</strong>. 
                You are currently on <strong>Day {scheduleCurrentDay}</strong>.
              </p>
            </div>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  studyScheduleStore.setCurrentDay(lockedKanaModalItem.day);
                  setLockedKanaModalItem(null);
                  audio.playSuccess();
                  confetti({ particleCount: 30, spread: 50 });
                }}
                className="w-full py-2.5 rounded-xl bg-[#FF5E3A] hover:bg-[#E84E29] text-white font-bold text-xs transition cursor-pointer shadow-md shadow-orange-500/20"
              >
                Advance Schedule to Day {lockedKanaModalItem.day} & Unlock
              </button>
              <button
                onClick={() => setLockedKanaModalItem(null)}
                className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white font-semibold text-xs transition cursor-pointer"
              >
                Keep Current Day {scheduleCurrentDay}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Customize Plan Modal */}
      <CustomizePlanModal
        isOpen={showCustomizeModal}
        onClose={() => setShowCustomizeModal(false)}
        theme={theme}
      />

      {/* 5. Romaji Comparison Modal Popup */}
      {renderRomajiPopupModal()}

    </div>
  );
};

export default KanaTableView;
