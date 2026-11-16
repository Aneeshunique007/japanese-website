import React, { useState, useEffect, useMemo } from 'react';
import { 
  Play, 
  Volume2, 
  Search, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  BookOpen, 
  Check, 
  Lock,
  Layers,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  GraduationCap,
  Hash,
  Compass,
  Users,
  Palette,
  Activity,
  Trees,
  Lightbulb,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { getKanjiDetails, KanjiDetailsData } from '../data/kanjiWords';
import { dataStore } from '../services/dataStore';
import { KanjiDetailModal } from './KanjiDetailModal';
import { KanjiQuizModal } from './KanjiQuizModal';
import { learnedStore } from '../utils/learnedStore';
import audio from '../utils/audio';
import { getKanjiPronunciation } from '../utils/romaji';
import { api } from '../services/api';
import { clientCache } from '../services/cacheService';

interface KanjiTableViewProps {
  theme: 'dark' | 'light';
  onGainXp?: (xp: number) => void;
}

export interface KanjiThemeDeck {
  id: string;
  name: string;
  japanese: string;
  desc: string;
  icon: any;
  chars: string[];
}

export const KANJI_THEMES: KanjiThemeDeck[] = [
  {
    id: 'numbers',
    name: 'Numbers & Counting',
    japanese: '数字',
    desc: 'From 1 to 10,000 — the simplest, most intuitive Kanji strokes to master first.',
    icon: Hash,
    chars: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '百', '千', '万']
  },
  {
    id: 'nature',
    name: 'Nature & Calendar Days',
    japanese: '自然・曜日',
    desc: 'Days of the week (Sun, Moon, Fire, Water, Tree, Gold, Earth) plus weather, mountains and rivers.',
    icon: Trees,
    chars: ['日', '月', '火', '水', '木', '金', '土', '山', '川', '天', '気', '雨']
  },
  {
    id: 'people',
    name: 'People, Body & Family',
    japanese: '人と体',
    desc: 'Key characters for person, man, woman, child, father, mother, eyes, mouth and hands.',
    icon: Users,
    chars: ['人', '男', '女', '子', '父', '母', '友', '目', '口', '手', '耳', '足']
  },
  {
    id: 'directions',
    name: 'Directions & Positions',
    japanese: '位置と方向',
    desc: 'Up, down, middle, left, right, front, back, north, south, east, and west.',
    icon: Compass,
    chars: ['上', '下', '中', '左', '右', '前', '後', '北', '南', '東', '西']
  },
  {
    id: 'sizes',
    name: 'Sizes, Colors & Adjectives',
    japanese: '大きさと色',
    desc: 'Big, small, long, high/expensive, many, few, white, red, and blue.',
    icon: Palette,
    chars: ['大', '小', '長', '高', '多', '少', '白', '赤', '青']
  },
  {
    id: 'time-life',
    name: 'Time, School & Everyday',
    japanese: '時間と生活',
    desc: 'Year, hour, minute, now, school, teacher, student, book, car, name, and what.',
    icon: Clock,
    chars: ['年', '時', '分', '午', '今', '学', '校', '先', '生', '本', '車', '名', '何']
  },
  {
    id: 'verbs',
    name: 'Core Action Verbs',
    japanese: '基本の動詞',
    desc: 'Everyday verbs: go, come, return, eat, drink, see, hear, read, write, speak, buy, and rest.',
    icon: Activity,
    chars: ['行', '来', '帰', '食', '飲', '見', '聞', '読', '書', '話', '買', '休']
  }
];

export const KanjiTableView: React.FC<KanjiTableViewProps> = ({ theme, onGainXp }) => {
  // View mode: Curated Beginner Decks (default) vs Full Dictionary Table
  const [viewMode, setViewMode] = useState<'decks' | 'all'>('decks');
  const [activeDeckIndex, setActiveDeckIndex] = useState(0);

  const [kanjiList, setKanjiList] = useState<any[]>([]);
  const [kanjiSearchQuery, setKanjiSearchQuery] = useState('');
  const [selectedKanjiJlpt, setSelectedKanjiJlpt] = useState('N5');
  const [filterLearned, setFilterLearned] = useState<'ALL' | 'LEARNED' | 'UNLEARNED'>('ALL');
  const [learnedKanji, setLearnedKanji] = useState<Set<string>>(() => new Set(learnedStore.getLearnedKanjiList()));
  const [loadingKanji, setLoadingKanji] = useState(false);

  // Sync with store updates
  useEffect(() => {
    const handleLearnedUpdate = () => {
      setLearnedKanji(new Set(learnedStore.getLearnedKanjiList()));
    };

    window.addEventListener('anilearn_learned_update', handleLearnedUpdate);
    return () => {
      window.removeEventListener('anilearn_learned_update', handleLearnedUpdate);
    };
  }, []);

  const handleQuickToggleLearned = (e: React.MouseEvent, char: string) => {
    e.stopPropagation();
    const nextState = learnedStore.toggleKanjiLearned(char);
    if (nextState) {
      audio.playFanfare();
      confetti({ particleCount: 35, spread: 55, origin: { y: 0.7 } });
      onGainXp?.(10);
    } else {
      audio.playClick();
    }
  };

  // Modal States
  const [selectedKanjiDetail, setSelectedKanjiDetail] = useState<KanjiDetailsData | null>(null);
  const [kanjiDetailModalOpen, setKanjiDetailModalOpen] = useState(false);
  const [kanjiQuizModalOpen, setKanjiQuizModalOpen] = useState(false);
  const [kanjiQuizTargetChar, setKanjiQuizTargetChar] = useState<string | undefined>(undefined);
  const [customQuizList, setCustomQuizList] = useState<Array<{ char: string; meaning: string; jlpt?: string }> | undefined>(undefined);

  const cardBg = theme === 'dark' ? 'bg-[#17171C] border-slate-800 text-white' : 'bg-white border-slate-200/80 text-[#1A1A1F] shadow-xs';
  const subText = theme === 'dark' ? 'text-slate-400' : 'text-slate-500';

  const isComingSoon = selectedKanjiJlpt === 'COMING_SOON' || ['N3', 'N2', 'N1'].includes(selectedKanjiJlpt);

  // Load Kanji from Database
  useEffect(() => {
    if (isComingSoon) {
      setKanjiList([]);
      return;
    }

    setLoadingKanji(true);

    const cacheKey = `kanji_${selectedKanjiJlpt}_${kanjiSearchQuery.trim()}`;
    const cached = clientCache.get<any[]>(cacheKey);

    const applyClientFilters = (rawList: any[]) => {
      let filtered = [...rawList];

      // Learned filter
      if (filterLearned === 'LEARNED') {
        filtered = filtered.filter(k => learnedKanji.has(k.char));
      } else if (filterLearned === 'UNLEARNED') {
        filtered = filtered.filter(k => !learnedKanji.has(k.char));
      }

      setKanjiList(filtered);
      setLoadingKanji(false);
    };

    if (cached && cached.length > 0) {
      applyClientFilters(cached);
    } else {
      // Async fetch from Backend MongoDB API
      api.getKanji(selectedKanjiJlpt, kanjiSearchQuery.trim() || undefined)
        .then((res) => {
          if (res.success && res.kanji && res.kanji.length > 0) {
            clientCache.set(cacheKey, res.kanji, 60);
            applyClientFilters(res.kanji);
          } else {
            // Fallback to dataStore if backend unavailable
            let localList: any[] = selectedKanjiJlpt === 'N5'
              ? dataStore.kanjiN5
              : (selectedKanjiJlpt === 'N4' ? dataStore.kanjiN4 : dataStore.allKanji);
            if (kanjiSearchQuery.trim()) {
              const query = kanjiSearchQuery.trim().toLowerCase();
              localList = localList.filter((k: any) =>
                k.char.includes(query) ||
                k.meaning.toLowerCase().includes(query) ||
                (k.onyomi || []).some((o: string) => o.toLowerCase().includes(query)) ||
                (k.kunyomi || []).some((u: string) => u.toLowerCase().includes(query))
              );
            }
            applyClientFilters(localList);
          }
        })
        .catch(() => {
          let localList: any[] = selectedKanjiJlpt === 'N5'
            ? dataStore.kanjiN5
            : (selectedKanjiJlpt === 'N4' ? dataStore.kanjiN4 : dataStore.allKanji);
          if (kanjiSearchQuery.trim()) {
            const query = kanjiSearchQuery.trim().toLowerCase();
            localList = localList.filter((k: any) =>
              k.char.includes(query) ||
              k.meaning.toLowerCase().includes(query) ||
              (k.onyomi || []).some((o: string) => o.toLowerCase().includes(query)) ||
              (k.kunyomi || []).some((u: string) => u.toLowerCase().includes(query))
            );
          }
          applyClientFilters(localList);
        });
    }
  }, [selectedKanjiJlpt, kanjiSearchQuery, isComingSoon, filterLearned, learnedKanji]);

  const handleKanjiClick = (kanjiItem: any) => {
    audio.playClick();
    const details = getKanjiDetails(kanjiItem.char, kanjiItem.meaning, kanjiItem.jlpt || 'N5');
    setSelectedKanjiDetail(details);
    setKanjiDetailModalOpen(true);
  };

  const handleStartKanjiQuizFromCard = (char: string) => {
    setCustomQuizList(undefined);
    setKanjiQuizTargetChar(char);
    setKanjiDetailModalOpen(false);
    setKanjiQuizModalOpen(true);
  };

  // Only Kanji that have been marked as learned/completed by the user
  const learnedKanjiObjects = useMemo(
    () => dataStore.allKanji.filter((k: any) => learnedKanji.has(k.char)),
    [learnedKanji]
  );
  const isDrillUnlocked = learnedKanjiObjects.length >= 10;
  
  // Drill question count: 10 questions if < 100 learned, 30 questions if >= 100 learned
  const drillQuestionCount = learnedKanjiObjects.length >= 100
    ? Math.min(30, learnedKanjiObjects.length)
    : Math.min(10, learnedKanjiObjects.length);

  const handleStartFullKanjiQuiz = () => {
    if (!isDrillUnlocked) {
      audio.playError();
      return;
    }
    audio.playClick();
    setCustomQuizList(undefined);
    setKanjiQuizTargetChar(undefined);
    setKanjiQuizModalOpen(true);
  };

  // Active Deck data calculation
  const currentDeck = KANJI_THEMES[activeDeckIndex] || KANJI_THEMES[0];
  const activeDeckKanjiItems = useMemo(() => {
    return currentDeck.chars.map((char) => {
      const match = dataStore.allKanji.find((k: any) => k.char === char);
      const details = getKanjiDetails(char);
      return {
        char,
        meaning: match?.meaning || details.meaning || 'Meaning',
        jlpt: match?.jlpt || 'N5',
        strokes: match?.strokeCount || details.strokes || 1,
        onyomi: match?.onyomi || details.onyomi || [],
        kunyomi: match?.kunyomi || details.kunyomi || [],
        mnemonic: details.mnemonic || '',
        sentence: details.sentences?.[0]
      };
    });
  }, [currentDeck]);

  const activeDeckLearnedCount = activeDeckKanjiItems.filter(k => learnedKanji.has(k.char)).length;
  const isDeckCompleted = activeDeckLearnedCount === activeDeckKanjiItems.length && activeDeckKanjiItems.length > 0;

  const handleStartDeckQuiz = () => {
    audio.playClick();
    setCustomQuizList(activeDeckKanjiItems.map(k => ({ char: k.char, meaning: k.meaning, jlpt: k.jlpt })));
    setKanjiQuizTargetChar(undefined);
    setKanjiQuizModalOpen(true);
  };

  return (
    <div className="space-y-8 animate-fade-in pb-16">
      
      {/* Header & Drill Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl font-black font-jp text-[#FF5E3A]">漢字表</span>
            <h1 className="text-2xl font-black tracking-tight font-heading">
              Kanji Table & 2 Easy Sentences
            </h1>
          </div>
          <p className={`text-sm ${subText}`}>
            Master essential Japanese Kanji step-by-step with stroke orders, memory mnemonics, and 2 easy authentic sentences each.
          </p>
        </div>

        {/* Top View Mode Switcher: Thematic Decks (Beginner) vs Full Table */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-800 shrink-0">
          <button
            onClick={() => {
              audio.playClick();
              setViewMode('decks');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-black transition flex items-center gap-2 cursor-pointer ${
              viewMode === 'decks'
                ? 'bg-[#FF5E3A] text-white shadow-md shadow-orange-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Curated Decks (Beginner)</span>
          </button>
          <button
            onClick={() => {
              audio.playClick();
              setViewMode('all');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-black transition flex items-center gap-2 cursor-pointer ${
              viewMode === 'all'
                ? 'bg-[#FF5E3A] text-white shadow-md shadow-orange-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Full Dictionary Grid</span>
          </button>
        </div>
      </div>

      {/* Kanji Mastery Progress Card */}
      {(() => {
        const currentLevelKanji = selectedKanjiJlpt === 'N4' ? dataStore.kanjiN4 : dataStore.kanjiN5;
        const currentLearnedCount = currentLevelKanji.filter((k: any) => learnedKanji.has(k.char)).length;
        const currentTotalCount = currentLevelKanji.length;
        const currentPercent = Math.round((currentLearnedCount / (currentTotalCount || 1)) * 100);

        return (
          <div className={`p-4 sm:p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
            theme === 'dark' ? 'bg-slate-900/60 border-slate-800' : 'bg-emerald-50/40 border-emerald-200/60 shadow-xs'
          }`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/20 shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-sm font-black text-slate-900 dark:text-white">
                    JLPT {selectedKanjiJlpt} Kanji Mastery
                  </h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500 text-white font-mono font-bold shadow-xs">
                    {currentLearnedCount} / {currentTotalCount} Learned ({currentPercent}%)
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Click the checkmark on any card to mark it as mastered (+10 XP) and celebrate!
                </p>
              </div>
            </div>

            {/* Overall Recognition Drill trigger */}
            <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end">
              <button
                onClick={handleStartFullKanjiQuiz}
                disabled={!isDrillUnlocked}
                className={`w-full sm:w-auto px-4 py-2.5 rounded-xl font-black text-xs transition flex items-center justify-center gap-2 shrink-0 ${
                  isDrillUnlocked
                    ? 'bg-gradient-to-r from-[#FF7B5C] to-[#FF5E3A] hover:from-[#FF5E3A] hover:to-[#E84E29] text-white shadow-md shadow-orange-500/25 cursor-pointer'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-400 dark:text-slate-500 cursor-not-allowed border border-slate-200 dark:border-slate-800'
                }`}
                title={
                  isDrillUnlocked
                    ? `Start drill on ${drillQuestionCount} questions from your ${learnedKanjiObjects.length} learned Kanji`
                    : `Learn at least 10 Kanji to unlock drill (${learnedKanjiObjects.length}/10 completed)`
                }
              >
                {isDrillUnlocked ? (
                  <>
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Kanji Recognition Drill ({drillQuestionCount} Qs)</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    <span>Learn 10 Kanji for Drill ({learnedKanjiObjects.length}/10)</span>
                  </>
                )}
              </button>
            </div>
          </div>
        );
      })()}

      {/* ======================================================== */}
      {/* MODE 1: CURATED THEMATIC DECKS (BEGINNER-FRIENDLY STUDIO) */}
      {/* ======================================================== */}
      {viewMode === 'decks' && (
        <div className="space-y-6 animate-fade-in">
          
          {/* Deck Horizontal Picker */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[11px]">
                Choose a Thematic Deck (Recommended in order):
              </span>
              <span className="font-mono text-[11px] text-[#FF5E3A] font-bold">
                Deck {activeDeckIndex + 1} of {KANJI_THEMES.length}
              </span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar touch-pan-x">
              {KANJI_THEMES.map((themeDeck, idx) => {
                const isSelected = activeDeckIndex === idx;
                const deckLearned = themeDeck.chars.filter(c => learnedKanji.has(c)).length;
                const deckTotal = themeDeck.chars.length;
                const deckDone = deckLearned === deckTotal;
                const DeckIcon = themeDeck.icon;

                return (
                  <button
                    key={themeDeck.id}
                    onClick={() => {
                      audio.playClick();
                      setActiveDeckIndex(idx);
                    }}
                    className={`px-3.5 py-2.5 rounded-2xl border text-xs font-black transition cursor-pointer flex items-center gap-2 shrink-0 ${
                      isSelected
                        ? 'bg-[#FF5E3A] border-[#FF5E3A] text-white shadow-md shadow-orange-500/20'
                        : theme === 'dark'
                        ? 'bg-[#17171C] border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 shadow-2xs'
                    }`}
                  >
                    <DeckIcon className="w-4 h-4 shrink-0" />
                    <span>{themeDeck.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold flex items-center gap-0.5 ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : deckDone
                        ? 'bg-emerald-500/15 text-emerald-500'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                    }`}>
                      <span>{deckLearned}/{deckTotal}</span>
                      {deckDone && <Check className="w-3 h-3 text-emerald-500" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Deck Spotlight Banner */}
          <div className={`p-5 sm:p-6 rounded-3xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-5 ${
            isDeckCompleted
              ? 'bg-emerald-500/10 border-emerald-500/30'
              : theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200/90 shadow-sm'
          }`}>
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-[#FF5E3A] shrink-0">
                {(() => {
                  const CurrentDeckIcon = currentDeck.icon;
                  return <CurrentDeckIcon className="w-7 h-7 text-[#FF5E3A]" />;
                })()}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-black font-jp text-[#FF5E3A] bg-orange-500/10 px-2 py-0.5 rounded-md">
                    {currentDeck.japanese}
                  </span>
                  <h2 className="text-xl font-black tracking-tight font-heading">
                    {currentDeck.name}
                  </h2>
                </div>
                <p className={`text-xs sm:text-sm max-w-xl ${subText}`}>
                  {currentDeck.desc}
                </p>

                {/* Progress bar inside spotlight */}
                <div className="pt-2 flex items-center gap-3">
                  <div className="w-40 sm:w-56 h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 transition-all duration-300"
                      style={{ width: `${Math.round((activeDeckLearnedCount / (activeDeckKanjiItems.length || 1)) * 100)}%` }}
                    />
                  </div>
                  <span className="text-xs font-mono font-black text-emerald-600 dark:text-emerald-400">
                    {activeDeckLearnedCount} / {activeDeckKanjiItems.length} Mastered ({Math.round((activeDeckLearnedCount / (activeDeckKanjiItems.length || 1)) * 100)}%)
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions for this Deck */}
            <div className="flex items-center gap-2.5 w-full md:w-auto justify-end flex-wrap">
              <button
                onClick={handleStartDeckQuiz}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#FF7B5C] to-[#FF5E3A] hover:from-[#FF5E3A] hover:to-[#E84E29] text-white text-xs font-black transition flex items-center gap-2 shadow-md shadow-orange-500/20 cursor-pointer"
                title="Practice questions only from this deck"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Quiz this Deck ({activeDeckKanjiItems.length} Qs)</span>
              </button>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => {
                    audio.playClick();
                    setActiveDeckIndex(Math.max(0, activeDeckIndex - 1));
                  }}
                  disabled={activeDeckIndex === 0}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  title="Previous Deck"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    audio.playClick();
                    setActiveDeckIndex(Math.min(KANJI_THEMES.length - 1, activeDeckIndex + 1));
                  }}
                  disabled={activeDeckIndex === KANJI_THEMES.length - 1}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  title="Next Deck"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Cards Grid for Active Deck */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {activeDeckKanjiItems.map((item) => {
              const isLearned = learnedKanji.has(item.char);

              return (
                <div
                  key={item.char}
                  onClick={() => handleKanjiClick(item)}
                  className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col justify-between group relative overflow-hidden ${
                    isLearned
                      ? 'border-emerald-500/90 bg-emerald-50/80 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-100 shadow-sm shadow-emerald-500/20 ring-1 ring-emerald-500/30'
                      : `${cardBg} hover:border-[#FF5E3A] shadow-xs hover:shadow-lg transform hover:-translate-y-0.5`
                  }`}
                >
                  {/* Top Bar: JLPT, Strokes, Audio, Checkmark */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                        isLearned ? 'bg-emerald-500 text-white' : 'bg-orange-500/10 text-[#FF5E3A]'
                      }`}>
                        {item.jlpt}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {item.strokes} strokes
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {/* Audio Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          audio.speak(getKanjiPronunciation(item), 0.9);
                        }}
                        className={`p-1.5 rounded-lg transition cursor-pointer ${
                          isLearned
                            ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/30'
                            : 'bg-slate-100 dark:bg-slate-800 hover:bg-orange-500/20 text-[#FF5E3A]'
                        }`}
                        title="Pronounce standard reading"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>

                      {/* Slow Audio Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          audio.speak(getKanjiPronunciation(item), 0.65);
                        }}
                        className={`px-1.5 py-1 rounded-lg text-[10px] font-mono font-bold transition cursor-pointer ${
                          isLearned
                            ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/30'
                            : 'bg-slate-100 dark:bg-slate-800 hover:bg-orange-500/20 text-slate-500'
                        }`}
                        title="Pronounce slowly (0.7x)"
                      >
                        0.7x
                      </button>

                      {/* Mastered Checkmark */}
                      <button
                        onClick={(e) => handleQuickToggleLearned(e, item.char)}
                        className={`p-1.5 rounded-lg transition cursor-pointer ${
                          isLearned
                            ? 'bg-emerald-500 text-white shadow-xs'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/50'
                        }`}
                        title={isLearned ? 'Learned! Click to unmark' : 'Mark as Learned (+10 XP)'}
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </button>
                    </div>
                  </div>

                  {/* Character & English Meaning */}
                  <div className="text-center my-2">
                    <span className={`text-5xl font-black font-jp group-hover:scale-105 transition-all block ${
                      isLearned 
                        ? 'text-emerald-600 dark:text-emerald-400' 
                        : theme === 'dark' ? 'text-white' : 'text-slate-900 group-hover:text-[#FF5E3A]'
                    }`}>
                      {item.char}
                    </span>
                    <span className={`text-sm font-extrabold mt-1 block truncate ${
                      isLearned 
                        ? 'text-emerald-700 dark:text-emerald-300' 
                        : theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
                    }`}>
                      {item.meaning}
                    </span>
                  </div>

                  {/* Readings breakdown */}
                  <div className={`text-[11px] border-t py-2 space-y-1 font-jp ${
                    isLearned
                      ? 'border-emerald-500/20 text-emerald-800 dark:text-emerald-200'
                      : theme === 'dark' ? 'border-slate-800 text-slate-300' : 'border-slate-100 text-slate-600'
                  }`}>
                    {item.kunyomi && item.kunyomi.length > 0 && (
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-[10px] font-mono text-slate-400">訓 (Kun):</span>
                        <span className="font-bold">{item.kunyomi.slice(0, 2).join(', ')}</span>
                      </div>
                    )}
                    {item.onyomi && item.onyomi.length > 0 && (
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-[10px] font-mono text-slate-400">音 (On):</span>
                        <span className="font-bold">{item.onyomi.slice(0, 2).join(', ')}</span>
                      </div>
                    )}
                  </div>

                  {/* Memory Mnemonic Cue Box */}
                  {item.mnemonic && (
                    <div className={`mt-2 p-2.5 rounded-xl text-[11px] leading-relaxed border ${
                      isLearned
                        ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-900 dark:text-emerald-200'
                        : 'bg-amber-500/10 border-amber-500/20 text-amber-900 dark:text-amber-200'
                    }`}>
                      <div className="font-bold flex items-center gap-1.5 mb-0.5 text-[10px] uppercase tracking-wider text-amber-600 dark:text-amber-400">
                        <Lightbulb className="w-3 h-3 text-amber-500" />
                        <span>Memory Hint</span>
                      </div>
                      <p className="line-clamp-2">{item.mnemonic}</p>
                    </div>
                  )}

                  {/* Sentence Peek Preview */}
                  {item.sentence && (
                    <div className={`mt-2 pt-2 border-t border-dashed text-[11px] truncate font-jp ${
                      isLearned 
                        ? 'border-emerald-500/20 text-emerald-700/80 dark:text-emerald-300/80'
                        : 'border-slate-200 dark:border-slate-800 text-slate-400'
                    }`}>
                      <span className="font-medium">{item.sentence.sentence}</span>
                    </div>
                  )}

                  {/* Bottom Footer hint */}
                  <div className="mt-3 pt-2 text-center text-[10px] font-bold text-[#FF5E3A] flex items-center justify-center gap-1 opacity-80 group-hover:opacity-100 transition">
                    <span>Click for Stroke Order & 2 Sentences</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Deck Completion Celebration Banner */}
          {isDeckCompleted && (
            <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-emerald-500/15 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 dark:text-white text-base">
                    You mastered all {activeDeckKanjiItems.length} Kanji in {currentDeck.name}!
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Excellent progress! Challenge yourself with the deck quiz or move on to the next theme.
                  </p>
                </div>
              </div>

              {activeDeckIndex < KANJI_THEMES.length - 1 && (
                <button
                  onClick={() => {
                    audio.playSuccess();
                    setActiveDeckIndex(activeDeckIndex + 1);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-black transition flex items-center gap-2 shadow-md shadow-emerald-500/20 shrink-0 cursor-pointer"
                >
                  <span>Next Deck: {KANJI_THEMES[activeDeckIndex + 1].name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* MODE 2: COMPLETE DICTIONARY TABLE (ALL KANJI & LEVELS)   */}
      {/* ======================================================== */}
      {viewMode === 'all' && (
        <div className="space-y-6 animate-fade-in">
          {/* Kanji Search and JLPT Level Filter Tabs */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full lg:max-w-md">
              <Search className="w-4 h-4 text-[#FF5E3A] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search Kanji by character, meaning, or reading (e.g. 日, sun, 使)..."
                value={kanjiSearchQuery}
                onChange={(e) => setKanjiSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2.5 rounded-2xl border text-xs sm:text-sm focus:outline-none focus:border-[#FF5E3A] transition ${
                  theme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
                }`}
              />
            </div>

            {/* Level Switcher */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-1 no-scrollbar touch-pan-x whitespace-nowrap">
              {[
                { id: 'N5', label: 'JLPT N5', badge: `${dataStore.kanjiN5.length} Kanji`, completed: true },
                { id: 'N4', label: 'JLPT N4', badge: `${dataStore.kanjiN4.length} Kanji`, completed: true },
                { id: 'COMING_SOON', label: 'Coming Soon', completed: false }
              ].map((lvl) => {
                const isSelected = selectedKanjiJlpt === lvl.id;
                return (
                  <button
                    key={lvl.id}
                    onClick={() => {
                      audio.playClick();
                      setSelectedKanjiJlpt(lvl.id);
                    }}
                    className={`px-3 py-2 rounded-xl text-xs font-black transition border cursor-pointer flex items-center gap-1.5 shrink-0 ${
                      isSelected
                        ? 'bg-[#FF5E3A] border-[#FF5E3A] text-white shadow-md shadow-orange-500/20'
                        : theme === 'dark'
                        ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                        : 'bg-white border-slate-200 text-slate-600 hover:text-[#FF5E3A]'
                    }`}
                  >
                    <span>{lvl.label}</span>
                    {lvl.badge && (
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                      }`}>
                        {lvl.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Filter Pills: All / Learned / Unlearned */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 self-stretch sm:self-auto justify-start sm:justify-center overflow-x-auto no-scrollbar touch-pan-x whitespace-nowrap">
              <button
                onClick={() => setFilterLearned('ALL')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer shrink-0 ${
                  filterLearned === 'ALL'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterLearned('LEARNED')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 shrink-0 ${
                  filterLearned === 'LEARNED'
                    ? 'bg-emerald-500 text-white shadow-2xs'
                    : 'text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10'
                }`}
              >
                <Check className="w-3 h-3 stroke-[3]" />
                <span>Learned</span>
              </button>
              <button
                onClick={() => setFilterLearned('UNLEARNED')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer shrink-0 ${
                  filterLearned === 'UNLEARNED'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Unlearned
              </button>
            </div>
          </div>

          {/* Selected Level Quick Requirement Info */}
          {!isComingSoon && (
            <div className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs ${
              theme === 'dark' ? 'bg-slate-900/50 border-slate-800 text-slate-300' : 'bg-orange-50/50 border-orange-200/60 text-slate-700'
            }`}>
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-lg font-black font-mono bg-[#FF5E3A] text-white text-[11px] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>JLPT {selectedKanjiJlpt} Complete</span>
                </span>
                <span className="font-bold">
                  {selectedKanjiJlpt === 'N5' && `${dataStore.kanjiN5.length} Official Kanji • ${dataStore.kanjiN5.length * 2} Easy Sentences`}
                  {selectedKanjiJlpt === 'N4' && `${dataStore.kanjiN4.length} Official Kanji • ${dataStore.kanjiN4.length * 2} Easy Sentences`}
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                Click any Kanji card below to view stroke order and 2 contextual sentences
              </span>
            </div>
          )}

          {/* Main Kanji Content Grid / Coming Soon */}
          {isComingSoon ? (
            <div className={`py-16 px-6 rounded-3xl border text-center space-y-4 ${cardBg}`}>
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-[#FF5E3A] flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-500 mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>In Development</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight font-heading">
                  {selectedKanjiJlpt} Kanji Library Coming Soon
                </h2>
                <p className={`text-xs sm:text-sm max-w-md mx-auto leading-relaxed ${subText}`}>
                  Our linguists are curating stroke orders, Onyomi/Kunyomi readings, and contextual sentences for higher JLPT levels. Study our complete N5 and N4 databases in the meantime!
                </p>
              </div>

              <div className="pt-2 flex items-center justify-center gap-3 flex-wrap">
                <button
                  onClick={() => {
                    audio.playClick();
                    setSelectedKanjiJlpt('N5');
                  }}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-orange-500/20 text-xs font-black transition flex items-center gap-2 text-slate-700 dark:text-slate-200 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-[#FF5E3A]" />
                  <span>Study JLPT N5 ({dataStore.kanjiN5.length} Kanji)</span>
                </button>
                <button
                  onClick={() => {
                    audio.playClick();
                    setSelectedKanjiJlpt('N4');
                  }}
                  className="px-4 py-2.5 rounded-xl bg-[#FF5E3A] hover:bg-[#E84E29] text-white text-xs font-black transition flex items-center gap-2 shadow-md shadow-orange-500/20 cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Study JLPT N4 ({dataStore.kanjiN4.length} Kanji)</span>
                </button>
              </div>
            </div>
          ) : (
            /* Kanji Grid Cards for ALL, N5, and N4 */
            loadingKanji ? (
              <div className="py-16 text-center text-[#FF5E3A] text-sm font-bold">
                Loading Kanji database...
              </div>
            ) : kanjiList.length === 0 ? (
              <div className="py-16 text-center text-slate-400 text-sm">
                No Kanji found matching your search.
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
                {kanjiList.map((kanji) => {
                  const isLearned = learnedKanji.has(kanji.char);

                  return (
                    <div
                      key={kanji.id || kanji.char}
                      onClick={() => handleKanjiClick(kanji)}
                      className={`p-3.5 sm:p-5 rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col justify-between group relative overflow-hidden ${
                        isLearned
                          ? 'border-emerald-500/90 bg-emerald-50/80 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-100 shadow-sm shadow-emerald-500/20 ring-1 ring-emerald-500/30'
                          : `${cardBg} hover:border-[#FF5E3A] shadow-xs hover:shadow-lg`
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1 sm:gap-1.5">
                          <span className={`text-[9px] sm:text-[10px] font-mono font-bold px-1.5 sm:px-2 py-0.5 rounded ${
                            isLearned ? 'bg-emerald-500 text-white' : 'bg-orange-500/10 text-[#FF5E3A]'
                          }`}>
                            {kanji.jlpt || 'N5'}
                          </span>
                          <button
                            onClick={(e) => handleQuickToggleLearned(e, kanji.char)}
                            className={`p-1 rounded transition cursor-pointer ${
                              isLearned
                                ? 'bg-emerald-500 text-white shadow-xs'
                                : 'opacity-100 sm:opacity-0 sm:group-hover:opacity-100 bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/50'
                            }`}
                            title={isLearned ? 'Marked as Learned (Click to unmark)' : 'Click to mark as learned (+10 XP)'}
                          >
                            <Check className="w-3 h-3 stroke-[3]" />
                          </button>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            audio.speak(getKanjiPronunciation(kanji));
                          }}
                          className={`p-1 rounded-md transition cursor-pointer opacity-100 sm:opacity-0 sm:group-hover:opacity-100 ${
                            isLearned
                              ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/30'
                              : 'bg-slate-100 dark:bg-slate-800 hover:bg-orange-500/20 text-[#FF5E3A]'
                          }`}
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-center my-1.5 sm:my-2">
                        <span className={`text-4xl sm:text-5xl font-black font-jp group-hover:scale-110 transition-all block ${
                          isLearned 
                            ? 'text-emerald-600 dark:text-emerald-400' 
                            : theme === 'dark' ? 'text-white' : 'text-slate-900 group-hover:text-[#FF5E3A]'
                        }`}>
                          {kanji.char}
                        </span>
                        <span className={`text-[11px] sm:text-xs font-black mt-1 block truncate ${
                          isLearned 
                            ? 'text-emerald-700 dark:text-emerald-300' 
                            : theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
                        }`}>
                          {kanji.meaning}
                        </span>
                      </div>

                      <div className={`text-[11px] border-t pt-2 font-mono flex items-center justify-between ${
                        isLearned
                          ? 'border-emerald-500/30 text-emerald-700/80 dark:text-emerald-300/80'
                          : theme === 'dark' ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'
                      }`}>
                        <span className="truncate font-semibold">
                          {kanji.onyomi && kanji.onyomi.length > 0 ? kanji.onyomi[0] : ''}
                        </span>
                        <span className="text-[10px] opacity-75">
                          {kanji.strokes ? `${kanji.strokes} strokes` : ''}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )
          )}
        </div>
      )}

      {/* 1. Kanji Detail Modal (Teaches 2 sentences & stroke order for each Kanji) */}
      <KanjiDetailModal
        isOpen={kanjiDetailModalOpen}
        onClose={() => setKanjiDetailModalOpen(false)}
        kanjiData={selectedKanjiDetail}
        theme={theme}
        onStartQuiz={handleStartKanjiQuizFromCard}
        onGainXp={onGainXp}
      />

      {/* 2. Kanji Quiz Drill Modal */}
      <KanjiQuizModal
        isOpen={kanjiQuizModalOpen}
        onClose={() => {
          setKanjiQuizModalOpen(false);
          setCustomQuizList(undefined);
        }}
        kanjiList={customQuizList || learnedKanjiObjects}
        theme={theme}
        targetChar={kanjiQuizTargetChar}
        onCompleteQuiz={onGainXp}
      />

    </div>
  );
};
