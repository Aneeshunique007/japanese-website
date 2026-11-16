import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { 
  Play, 
  Volume2, 
  Search, 
  Sparkles, 
  Clock, 
  CheckCircle2,
  Check,
  Lock,
  Layers,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  Eye,
  GraduationCap,
  ArrowRight,
  MessageSquare,
  Coffee,
  Home,
  Compass,
  Palette,
  Activity,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { WordItem } from '../types';
import { WordDetailModal } from './WordDetailModal';
import { WordQuizModal } from './WordQuizModal';
import { dataStore } from '../services/dataStore';
import { learnedStore } from '../utils/learnedStore';
import audio from '../utils/audio';
import { api } from '../services/api';
import { clientCache } from '../services/cacheService';

const N5_WORDS_COUNT = 805;
const N4_WORDS_COUNT = 683;

interface WordsTableViewProps {
  theme: 'dark' | 'light';
  showFurigana?: boolean;
  onGainXp?: (xp: number) => void;
}

export interface WordThemeDeck {
  id: string;
  name: string;
  japanese: string;
  desc: string;
  icon: any;
  filterWords: string[];
}

export const VOCAB_THEMES: WordThemeDeck[] = [
  {
    id: 'greetings',
    name: 'Greetings & Politeness',
    japanese: '挨拶・基本表現',
    desc: 'Essential phrases: hello, thank you, excuse me, goodbye, please, and polite acknowledgments.',
    icon: MessageSquare,
    filterWords: ['おはよう', 'こんにちは', 'こんばんは', 'さようなら', 'ありがとう', 'すみません', 'はい', 'いいえ', 'どうも', 'おねがいします', 'どうぞ', 'はじめまして', 'ごちそうさま', 'いただきます', 'ごめんなさい', 'じゃあ']
  },
  {
    id: 'food',
    name: 'Food, Café & Dining',
    japanese: '食べ物・飲食店',
    desc: 'Meals, drinks, ordering at restaurants, and describing delicious dishes.',
    icon: Coffee,
    filterWords: ['食べる', '飲む', 'ごはん', 'お茶', '水', 'パン', '魚', '肉', '野菜', '果物', 'おいしい', '朝ごはん', '昼ごはん', '晩ごはん', 'レストラン', '料理', 'お酒', 'コーヒー', '卵', '甘い', '辛い']
  },
  {
    id: 'home',
    name: 'Home, Family & Routines',
    japanese: '家・家族・日常',
    desc: 'Rooms, daily morning and bedtime routines, parents, friends, and everyday household items.',
    icon: Home,
    filterWords: ['家', '部屋', '起きる', '寝る', '父', '母', '友達', '人', '男', '女', '子供', 'ドア', '窓', 'ベッド', '電話', '毎日', '朝', '夜', '顔', '手', '休む']
  },
  {
    id: 'time',
    name: 'Time, Days & Calendar',
    japanese: '時間・日付・曜日',
    desc: 'Telling time, calendar days, yesterday, today, tomorrow, and days of the week.',
    icon: Clock,
    filterWords: ['今日', '明日', '昨日', '今', '時間', '分', '時', '年', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日', '日曜日', '何時', '今週', '来週', '先週', '午前', '午後']
  },
  {
    id: 'travel',
    name: 'Travel, Places & Directions',
    japanese: '旅行・場所・方向',
    desc: 'Navigating train stations, directions (left, right, near, far), hotels, and city exploration.',
    icon: Compass,
    filterWords: ['駅', '電車', 'バス', '車', '空港', 'ホテル', '右', '左', 'ここ', 'そこ', 'どこ', '近い', '遠い', '町', '店', '道', '旅行', '切符', '前', '後ろ', '北', '南', '東', '西']
  },
  {
    id: 'school',
    name: 'School, Work & Study',
    japanese: '勉強・学校・仕事',
    desc: 'Classrooms, books, teachers, students, pencils, desks, homework, and work terms.',
    icon: GraduationCap,
    filterWords: ['本', '学校', '先生', '学生', '勉強', '仕事', '教室', '机', 'ペン', '辞書', '質問', '宿題', 'テスト', '会社', '書く', '読む', '話す', '教える', '習う']
  },
  {
    id: 'adjectives',
    name: 'Sizes, Colors & Adjectives',
    japanese: '様子・色・形容詞',
    desc: 'Big, small, expensive, cheap, fast, slow, warm, cold, new, old, and vivid colors.',
    icon: Palette,
    filterWords: ['大きい', '小さい', '高い', '安い', '新しい', '古い', 'いい', '悪い', '面白い', '白い', '赤い', '青い', '黒い', '長い', '短い', '多い', '少ない', '早い', '遅い', '暑い', '寒い', '温かい', '楽しい']
  },
  {
    id: 'verbs',
    name: 'Core Action Verbs',
    japanese: '基本の動詞',
    desc: 'The most frequent Japanese action verbs: go, come, buy, see, hear, meet, wait, and make.',
    icon: Activity,
    filterWords: ['行く', '来る', '帰る', '見る', '聞く', '買う', '会う', '待つ', '作る', '使う', '話す', '歩く', '走る', '言う', '知る', '持つ', '入る', '出る']
  }
];

export const WordsTableView: React.FC<WordsTableViewProps> = ({ 
  theme, 
  showFurigana: _showFurigana = true,
  onGainXp 
}) => {
  // View mode: Flashcard Studio (Beginner) vs Full Table Grid
  const [viewMode, setViewMode] = useState<'flashcards' | 'table'>('flashcards');
  const [activeDeckIndex, setActiveDeckIndex] = useState(0);

  // Flashcard states
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [shuffledIndices, setShuffledIndices] = useState<number[]>([]);

  const [wordsList, setWordsList] = useState<WordItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJlpt, setSelectedJlpt] = useState('N5');
  const [selectedPos, setSelectedPos] = useState('ALL');
  const [filterLearned, setFilterLearned] = useState<'ALL' | 'LEARNED' | 'UNLEARNED'>('ALL');
  const [learnedWords, setLearnedWords] = useState<Set<string>>(() => new Set(learnedStore.getLearnedWordsList()));
  const [loading, setLoading] = useState(false);

  // Modal States
  const [selectedWordDetail, setSelectedWordDetail] = useState<WordItem | null>(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [quizModalOpen, setQuizModalOpen] = useState(false);
  const [quizTargetWord, setQuizTargetWord] = useState<string | undefined>(undefined);
  const [customQuizWords, setCustomQuizWords] = useState<WordItem[] | undefined>(undefined);

  const cardBg = theme === 'dark' ? 'bg-[#17171C] border-slate-800 text-white' : 'bg-white border-slate-200/80 text-[#1A1A1F] shadow-xs';
  const subText = theme === 'dark' ? 'text-slate-400' : 'text-slate-500';

  const isComingSoon = selectedJlpt === 'COMING_SOON' || ['N3', 'N2', 'N1'].includes(selectedJlpt);

  // Listen for storage updates across components
  useEffect(() => {
    const handleLearnedUpdate = () => {
      setLearnedWords(new Set(learnedStore.getLearnedWordsList()));
    };

    window.addEventListener('anilearn_learned_update', handleLearnedUpdate);
    return () => {
      window.removeEventListener('anilearn_learned_update', handleLearnedUpdate);
    };
  }, []);

  // Safe fallback resolver for words
  const getFallbackWords = useCallback(() => {
    let local = selectedJlpt === 'N5' 
      ? dataStore.wordsN5 
      : (selectedJlpt === 'N4' ? dataStore.wordsN4 : dataStore.allWords);
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      local = local.filter((w: WordItem) =>
        w.word.includes(q) ||
        w.reading.includes(q) ||
        w.romaji.toLowerCase().includes(q) ||
        w.meaning.toLowerCase().includes(q)
      );
    }
    if (selectedPos !== 'ALL') {
      local = local.filter((w: WordItem) => w.pos === selectedPos);
    }
    return local;
  }, [selectedJlpt, searchQuery, selectedPos]);

  useEffect(() => {
    if (isComingSoon) {
      setWordsList([]);
      return;
    }

    setLoading(true);

    const cacheKey = `words_${selectedJlpt}_${selectedPos}_${searchQuery.trim()}`;
    const cached = clientCache.get<WordItem[]>(cacheKey);

    const applyClientFilters = (rawList: WordItem[]) => {
      let filtered = [...rawList];

      // Learned filter
      if (filterLearned === 'LEARNED') {
        filtered = filtered.filter(w => learnedWords.has(w.id || w.word));
      } else if (filterLearned === 'UNLEARNED') {
        filtered = filtered.filter(w => !learnedWords.has(w.id || w.word));
      }

      setWordsList(filtered);
      setLoading(false);
    };

    if (cached && cached.length > 0) {
      applyClientFilters(cached);
    } else {
      // Async fetch from Backend API with robust local fallback
      api.getWords({
        jlpt: selectedJlpt,
        search: searchQuery.trim() || undefined,
        pos: selectedPos !== 'ALL' ? selectedPos : undefined
      })
        .then((res) => {
          if (res.success && res.words && res.words.length > 0) {
            clientCache.set(cacheKey, res.words, 60);
            applyClientFilters(res.words);
          } else {
            applyClientFilters(getFallbackWords());
          }
        })
        .catch(() => {
          applyClientFilters(getFallbackWords());
        });
    }
  }, [selectedJlpt, selectedPos, searchQuery, isComingSoon, filterLearned, learnedWords, getFallbackWords]);

  const handleWordClick = (wordItem: WordItem) => {
    audio.playClick();
    setSelectedWordDetail(wordItem);
    setDetailModalOpen(true);
  };

  const handleQuickToggleLearned = (e: React.MouseEvent, idOrWord: string) => {
    e.stopPropagation();
    const nowLearned = learnedStore.toggleWordLearned(idOrWord);
    if (nowLearned) {
      audio.playFanfare();
      confetti({ particleCount: 35, spread: 55, origin: { y: 0.7 } });
      onGainXp?.(10);
    } else {
      audio.playClick();
    }
  };

  const handleStartQuizFromCard = (word: string) => {
    setCustomQuizWords(undefined);
    setQuizTargetWord(word);
    setDetailModalOpen(false);
    setQuizModalOpen(true);
  };

  // Only words that have been marked as learned/completed by the user
  const learnedWordsObjects = useMemo(
    () => dataStore.allWords.filter((w: any) => learnedWords.has(w.id || w.word)),
    [learnedWords]
  );
  const isDrillUnlocked = learnedWordsObjects.length >= 10;
  
  // Drill question count: 10 questions if < 100 learned, 30 questions if >= 100 learned
  const drillQuestionCount = learnedWordsObjects.length >= 100
    ? Math.min(30, learnedWordsObjects.length)
    : Math.min(10, learnedWordsObjects.length);

  const handleStartFullQuiz = () => {
    if (!isDrillUnlocked) {
      audio.playError();
      return;
    }
    audio.playClick();
    setCustomQuizWords(undefined);
    setQuizTargetWord(undefined);
    setQuizModalOpen(true);
  };

  // -------------------------------------------------------------
  // FLASHCARD STUDIO THEMES & LOGIC
  // -------------------------------------------------------------
  const currentTheme = VOCAB_THEMES[activeDeckIndex] || VOCAB_THEMES[0];

  const activeThemeWords = useMemo(() => {
    const all = dataStore.wordsN5;
    const result: WordItem[] = [];
    const addedIds = new Set<string>();

    for (const target of currentTheme.filterWords) {
      const match = all.find(w => 
        !addedIds.has(w.id || w.word) && (
          w.word === target ||
          w.reading === target ||
          w.word.includes(target) ||
          w.reading.includes(target)
        )
      );
      if (match) {
        result.push(match);
        addedIds.add(match.id || match.word);
      }
    }

    // If deck has fewer than 10 words, add related words
    if (result.length < 10) {
      for (const w of all) {
        if (!addedIds.has(w.id || w.word) && result.length < 15) {
          result.push(w);
          addedIds.add(w.id || w.word);
        }
      }
    }

    return result;
  }, [currentTheme]);

  // Reset card state when deck changes
  useEffect(() => {
    setCardIndex(0);
    setIsFlipped(false);
    setShuffledIndices(activeThemeWords.map((_, i) => i));
  }, [activeDeckIndex, activeThemeWords]);

  const currentCardIndex = shuffledIndices[cardIndex] ?? cardIndex;
  const currentCard = activeThemeWords[currentCardIndex] || activeThemeWords[0];
  const isCurrentCardLearned = currentCard ? learnedWords.has(currentCard.id || currentCard.word) : false;

  const handleNextCard = useCallback(() => {
    audio.playClick();
    setIsFlipped(false);
    if (cardIndex < activeThemeWords.length - 1) {
      setCardIndex(prev => prev + 1);
    }
  }, [cardIndex, activeThemeWords.length]);

  const handlePrevCard = useCallback(() => {
    audio.playClick();
    setIsFlipped(false);
    if (cardIndex > 0) {
      setCardIndex(prev => prev - 1);
    }
  }, [cardIndex]);

  const handleShuffle = () => {
    audio.playClick();
    const arr = [...activeThemeWords.map((_, i) => i)];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setShuffledIndices(arr);
    setCardIndex(0);
    setIsFlipped(false);
  };

  const handleStartThemeQuiz = () => {
    audio.playClick();
    setCustomQuizWords(activeThemeWords);
    setQuizTargetWord(undefined);
    setQuizModalOpen(true);
  };

  const activeThemeLearnedCount = activeThemeWords.filter(w => learnedWords.has(w.id || w.word)).length;
  const isThemeCompleted = activeThemeLearnedCount === activeThemeWords.length && activeThemeWords.length > 0;

  return (
    <div className="space-y-8 animate-fade-in pb-16">
      
      {/* Header & View Mode Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl font-black font-jp text-[#FF5E3A]">語彙表</span>
            <h1 className="text-2xl font-black tracking-tight font-heading">
              Words Table & Flashcards
            </h1>
          </div>
          <p className={`text-sm ${subText}`}>
            Master essential JLPT Japanese vocabulary with readings, audio pronunciation, flashcards, and 2 easy sentences each.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-800 shrink-0">
          <button
            onClick={() => {
              audio.playClick();
              setViewMode('flashcards');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-black transition flex items-center gap-2 cursor-pointer ${
              viewMode === 'flashcards'
                ? 'bg-[#FF5E3A] text-white shadow-md shadow-orange-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Flashcard Studio (Beginner)</span>
          </button>
          <button
            onClick={() => {
              audio.playClick();
              setViewMode('table');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-black transition flex items-center gap-2 cursor-pointer ${
              viewMode === 'table'
                ? 'bg-[#FF5E3A] text-white shadow-md shadow-orange-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Full Words Table</span>
          </button>
        </div>
      </div>

      {/* Vocabulary Mastery Progress Card */}
      {(() => {
        const currentTotalCount = selectedJlpt === 'N4' ? N4_WORDS_COUNT : N5_WORDS_COUNT;
        const currentLearnedCount = (selectedJlpt === 'N4' ? dataStore.wordsN4 : dataStore.wordsN5)
          .filter(w => learnedWords.has(w.id || w.word)).length;
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
                    JLPT {selectedJlpt} Vocabulary Mastery
                  </h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500 text-white font-mono font-bold shadow-xs">
                    {currentLearnedCount} / {currentTotalCount} Learned ({currentPercent}%)
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Click the checkmark on any card to mark it as learned (+10 XP) and save your progress!
                </p>
              </div>
            </div>

            {/* Drill Button */}
            <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end">
              <button
                onClick={handleStartFullQuiz}
                disabled={!isDrillUnlocked}
                className={`w-full sm:w-auto px-4 py-2.5 rounded-xl font-black text-xs transition flex items-center justify-center gap-2 shrink-0 ${
                  isDrillUnlocked
                    ? 'bg-gradient-to-r from-[#FF7B5C] to-[#FF5E3A] hover:from-[#FF5E3A] hover:to-[#E84E29] text-white shadow-md shadow-orange-500/25 cursor-pointer'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-400 dark:text-slate-500 cursor-not-allowed border border-slate-200 dark:border-slate-800'
                }`}
                title={
                  isDrillUnlocked
                    ? `Start drill on ${drillQuestionCount} questions from your ${learnedWordsObjects.length} learned Words`
                    : `Learn at least 10 Words to unlock drill (${learnedWordsObjects.length}/10 completed)`
                }
              >
                {isDrillUnlocked ? (
                  <>
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Vocabulary Recognition Drill ({drillQuestionCount} Qs)</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    <span>Learn 10 Words for Drill ({learnedWordsObjects.length}/10)</span>
                  </>
                )}
              </button>
            </div>
          </div>
        );
      })()}

      {/* ======================================================== */}
      {/* MODE 1: FLASHCARD STUDIO (BEGINNER-FRIENDLY INTERACTIVE)  */}
      {/* ======================================================== */}
      {viewMode === 'flashcards' && (
        <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">

          {/* Theme Deck Selector Pills */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[11px]">
                Select a Vocabulary Topic:
              </span>
              <span className="font-mono text-[11px] text-[#FF5E3A] font-bold">
                Deck {activeDeckIndex + 1} of {VOCAB_THEMES.length}
              </span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar touch-pan-x">
              {VOCAB_THEMES.map((themeDeck, idx) => {
                const isSelected = activeDeckIndex === idx;
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
                  </button>
                );
              })}
            </div>
          </div>

          {/* Deck Spotlight Header */}
          <div className={`p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
            isThemeCompleted
              ? 'bg-emerald-500/10 border-emerald-500/30'
              : theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200/90 shadow-2xs'
          }`}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                {(() => {
                  const CurrentIcon = currentTheme.icon;
                  return <CurrentIcon className="w-6 h-6 text-[#FF5E3A]" />;
                })()}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black font-jp text-[#FF5E3A] bg-orange-500/10 px-2 py-0.5 rounded-md">
                    {currentTheme.japanese}
                  </span>
                  <h2 className="text-lg font-black tracking-tight font-heading">
                    {currentTheme.name}
                  </h2>
                </div>
                <p className={`text-xs ${subText} mt-0.5 max-w-lg`}>
                  {currentTheme.desc}
                </p>
                <div className="flex items-center gap-2 mt-1.5 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  <span>{activeThemeLearnedCount} of {activeThemeWords.length} Words Mastered</span>
                  <span>({Math.round((activeThemeLearnedCount / (activeThemeWords.length || 1)) * 100)}%)</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2 shrink-0 self-stretch sm:self-auto justify-end">
              <button
                onClick={handleShuffle}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition cursor-pointer"
                title="Shuffle Cards Order"
              >
                <Shuffle className="w-4 h-4" />
              </button>
              <button
                onClick={handleStartThemeQuiz}
                className="px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF7B5C] to-[#FF5E3A] hover:from-[#FF5E3A] hover:to-[#E84E29] text-white text-xs font-black transition flex items-center gap-1.5 shadow-md shadow-orange-500/20 cursor-pointer"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Quiz Deck ({activeThemeWords.length} Qs)</span>
              </button>
            </div>
          </div>

          {/* Flashcard Box */}
          {currentCard && (
            <div className="space-y-4">
              
              {/* Card Meta Indicator */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
                <span>Card {cardIndex + 1} of {activeThemeWords.length}</span>
                <span className={`px-2 py-0.5 rounded-md font-bold text-[10px] flex items-center gap-1 ${
                  isCurrentCardLearned 
                    ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                }`}>
                  {isCurrentCardLearned && <Check className="w-3 h-3 text-emerald-500" />}
                  <span>{isCurrentCardLearned ? 'Mastered' : 'Learning'}</span>
                </span>
              </div>

              {/* Progress bar across current deck */}
              <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#FF7B5C] to-[#FF5E3A] transition-all duration-300"
                  style={{ width: `${Math.round(((cardIndex + 1) / (activeThemeWords.length || 1)) * 100)}%` }}
                />
              </div>

              {/* The Interactive Tactile Card */}
              <div 
                onClick={() => {
                  audio.playClick();
                  setIsFlipped(!isFlipped);
                }}
                className={`p-6 sm:p-10 rounded-3xl border-2 transition-all duration-300 cursor-pointer relative overflow-hidden select-none min-h-[300px] flex flex-col justify-between ${
                  isCurrentCardLearned
                    ? 'border-emerald-500/80 bg-emerald-50/40 dark:bg-emerald-950/20 shadow-lg shadow-emerald-500/10'
                    : isFlipped
                    ? `${cardBg} border-[#FF5E3A] shadow-xl`
                    : `${cardBg} hover:border-[#FF5E3A]/70 shadow-md`
                }`}
              >
                {/* Card Top: JLPT tag, Part of Speech, Audio */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-black px-2 py-0.5 rounded bg-orange-500/10 text-[#FF5E3A]">
                      {currentCard.jlpt || 'N5'}
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                      {currentCard.posLabel}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                    {/* Normal Audio */}
                    <button
                      onClick={() => audio.speak(currentCard.reading ? currentCard.reading.replace(/\s+/g, '') : currentCard.word, 0.9)}
                      className="p-2 rounded-xl bg-orange-500/10 hover:bg-[#FF5E3A] text-[#FF5E3A] hover:text-white transition cursor-pointer"
                      title="Pronounce Natural (1.0x)"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    {/* Slow Audio */}
                    <button
                      onClick={() => audio.speak(currentCard.reading ? currentCard.reading.replace(/\s+/g, '') : currentCard.word, 0.65)}
                      className="px-2 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-orange-500/20 text-slate-600 dark:text-slate-300 text-xs font-mono font-bold transition cursor-pointer"
                      title="Pronounce Slow (0.7x)"
                    >
                      0.7x
                    </button>
                  </div>
                </div>

                {/* Card Center: Big Japanese Characters */}
                <div className="my-6 text-center space-y-2">
                  {currentCard.reading && currentCard.reading !== currentCard.word && (
                    <div className="text-sm font-bold font-jp text-slate-400">
                      {currentCard.reading}
                    </div>
                  )}
                  <div className={`text-4xl sm:text-6xl font-black font-jp transition-colors ${
                    isCurrentCardLearned 
                      ? 'text-emerald-700 dark:text-emerald-300' 
                      : 'text-slate-900 dark:text-white'
                  }`}>
                    {currentCard.word}
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-[#FF5E3A] font-bold">
                    {currentCard.romaji}
                  </div>
                </div>

                {/* Card Bottom / Revealed Meaning */}
                {!isFlipped ? (
                  <div className="text-center pt-4 border-t border-dashed border-slate-200 dark:border-slate-800">
                    <button
                      className="inline-flex items-center gap-2 text-xs font-black text-[#FF5E3A] hover:underline"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Tap to reveal English meaning & sentence</span>
                    </button>
                  </div>
                ) : (
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3 animate-fade-in">
                    <div className="text-center">
                      <span className="text-xl sm:text-2xl font-black text-[#FF5E3A] block">
                        {currentCard.meaning}
                      </span>
                    </div>

                    {/* Example Sentence Preview */}
                    {currentCard.sentences && currentCard.sentences[0] && (
                      <div className="p-3 rounded-2xl bg-orange-500/5 dark:bg-slate-800/50 border border-orange-500/10 text-xs space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold">
                            Contextual Example:
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              audio.speak(currentCard.sentences[0].sentence, 0.85);
                            }}
                            className="p-1 rounded-md hover:bg-orange-500/10 text-[#FF5E3A] transition cursor-pointer"
                            title="Listen to sentence"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="font-jp text-sm font-bold text-slate-800 dark:text-slate-200">
                          {currentCard.sentences[0].sentence}
                        </p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          {currentCard.sentences[0].english}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Navigation & Action Buttons */}
              <div className="flex items-center justify-between gap-3 pt-2">
                <button
                  onClick={handlePrevCard}
                  disabled={cardIndex === 0}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-black transition flex items-center gap-1.5 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Prev Card</span>
                </button>

                <div className="flex items-center gap-2">
                  {/* Mark as Learned Toggle */}
                  <button
                    onClick={(e) => handleQuickToggleLearned(e, currentCard.id || currentCard.word)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-black transition flex items-center gap-2 cursor-pointer ${
                      isCurrentCardLearned
                        ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                        : 'bg-slate-100 dark:bg-slate-800 hover:bg-emerald-500/10 text-slate-700 dark:text-slate-200 hover:text-emerald-500 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>{isCurrentCardLearned ? 'Mastered!' : 'Mark Learned (+10 XP)'}</span>
                  </button>
                </div>

                <button
                  onClick={handleNextCard}
                  disabled={cardIndex === activeThemeWords.length - 1}
                  className="px-4 py-2.5 rounded-xl bg-[#FF5E3A] hover:bg-[#E84E29] text-white text-xs font-black transition flex items-center gap-1.5 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer shadow-md shadow-orange-500/20"
                >
                  <span className="hidden sm:inline">Next Card</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Deck Completion Banner */}
              {isThemeCompleted && (
                <div className="mt-4 p-5 rounded-2xl bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-emerald-500/15 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900 dark:text-white text-sm">
                        You mastered all {activeThemeWords.length} words in {currentTheme.name}!
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Test your memory with the deck quiz or explore the next theme pack.
                      </p>
                    </div>
                  </div>

                  {activeDeckIndex < VOCAB_THEMES.length - 1 && (
                    <button
                      onClick={() => {
                        audio.playSuccess();
                        setActiveDeckIndex(activeDeckIndex + 1);
                      }}
                      className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-black transition flex items-center gap-1.5 shadow-md shadow-emerald-500/20 shrink-0 cursor-pointer"
                    >
                      <span>Next Deck: {VOCAB_THEMES[activeDeckIndex + 1].name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              )}

            </div>
          )}

        </div>
      )}

      {/* ======================================================== */}
      {/* MODE 2: COMPLETE VOCABULARY TABLE (DICTIONARY GRID)     */}
      {/* ======================================================== */}
      {viewMode === 'table' && (
        <div className="space-y-6 animate-fade-in">
          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full lg:max-w-md">
              <Search className="w-4 h-4 text-[#FF5E3A] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search words by Japanese, meaning, or reading (e.g. 食べる, eat, taberu)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2.5 rounded-2xl border text-xs sm:text-sm focus:outline-none focus:border-[#FF5E3A] transition ${
                  theme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
                }`}
              />
            </div>

            {/* Level Switcher */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-1 no-scrollbar touch-pan-x whitespace-nowrap">
              {[
                { id: 'N5', label: 'JLPT N5', badge: `${N5_WORDS_COUNT} Words`, completed: true },
                { id: 'N4', label: 'JLPT N4', badge: `${N4_WORDS_COUNT} Words`, completed: true },
                { id: 'COMING_SOON', label: 'Coming Soon', completed: false }
              ].map((lvl) => {
                const isSelected = selectedJlpt === lvl.id;
                return (
                  <button
                    key={lvl.id}
                    onClick={() => {
                      audio.playClick();
                      setSelectedJlpt(lvl.id);
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
                      <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md ${
                        isSelected 
                          ? 'bg-white/20 text-white' 
                          : lvl.completed
                          ? 'bg-orange-500/10 text-[#FF5E3A]'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
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

          {/* Category / Part of Speech Pills */}
          {!isComingSoon && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-bold no-scrollbar touch-pan-x whitespace-nowrap">
              <span className="text-slate-400 font-mono text-[11px] mr-1 shrink-0">Filter by Type:</span>
              {[
                { id: 'ALL', label: 'All Types' },
                { id: 'verb', label: 'Verbs (動詞)' },
                { id: 'noun', label: 'Nouns (名詞)' },
                { id: 'adjective', label: 'Adjectives (形容詞)' },
                { id: 'adverb', label: 'Adverbs (副詞)' },
                { id: 'expression', label: 'Expressions (表現)' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    audio.playClick();
                    setSelectedPos(cat.id);
                  }}
                  className={`px-3 py-1.5 rounded-lg border transition cursor-pointer shrink-0 ${
                    selectedPos === cat.id
                      ? 'bg-orange-500/15 border-orange-500/40 text-[#FF5E3A]'
                      : theme === 'dark'
                      ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}

          {/* Selected Level Info Banner */}
          {!isComingSoon && (
            <div className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs ${
              theme === 'dark' ? 'bg-slate-900/50 border-slate-800 text-slate-300' : 'bg-orange-50/50 border-orange-200/60 text-slate-700'
            }`}>
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-lg font-black font-mono bg-[#FF5E3A] text-white text-[11px] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>JLPT {selectedJlpt} Words Ready</span>
                </span>
                <span className="font-bold">
                  {selectedJlpt === 'N5' && `${N5_WORDS_COUNT} Core Vocabulary • 2 Easy Contextual Sentences Each`}
                  {selectedJlpt === 'N4' && `${N4_WORDS_COUNT} Core Vocabulary • 2 Easy Contextual Sentences Each`}
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                Click any word card to view details, kanji breakdown, and full example sentences
              </span>
            </div>
          )}

          {/* Coming Soon View for N3, N2, N1 */}
          {isComingSoon ? (
            <div className={`py-16 px-6 rounded-3xl border text-center ${cardBg} max-w-2xl mx-auto shadow-sm space-y-5 animate-fade-in`}>
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-[#FF5E3A] flex items-center justify-center mx-auto shadow-inner">
                <Clock className="w-8 h-8 animate-pulse" />
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-[#FF5E3A] text-xs font-black font-mono">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>JLPT Vocabulary Under Development</span>
                </div>
                <h2 className="text-2xl font-black tracking-tight font-heading">
                  JLPT Words Coming Soon
                </h2>
                <p className={`text-xs sm:text-sm max-w-md mx-auto leading-relaxed ${subText}`}>
                  Our team is curating high-frequency vocabulary, audio pronunciations, and contextual example sentences for higher JLPT levels. Explore our complete N5 and N4 words database in the meantime!
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setSelectedJlpt('N5')}
                  className="px-6 py-2.5 rounded-xl bg-[#FF5E3A] hover:bg-[#E84E29] text-white text-xs font-bold transition cursor-pointer shadow-md shadow-orange-500/20"
                >
                  Explore JLPT N5 & N4 Words
                </button>
              </div>
            </div>
          ) : (
            /* Words Grid Cards */
            <div>
              {loading ? (
                <div className="py-16 text-center text-[#FF5E3A] text-sm font-bold">
                  Loading Japanese vocabulary database...
                </div>
              ) : wordsList.length === 0 ? (
                <div className="py-16 text-center text-slate-400 text-sm">
                  No words found matching "{searchQuery}". Try searching with romaji, English, or kana.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {wordsList.map((item) => {
                    const previewSentence = item.sentences?.[0];
                    const isLearned = learnedWords.has(item.id || item.word);

                    return (
                      <div
                        key={item.id}
                        onClick={() => handleWordClick(item)}
                        className={`p-3.5 sm:p-5 rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col justify-between group relative overflow-hidden ${
                          isLearned
                            ? 'border-emerald-500/90 bg-emerald-50/80 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-100 shadow-sm shadow-emerald-500/20 ring-1 ring-emerald-500/30'
                            : `${cardBg} hover:border-[#FF5E3A]/60 shadow-xs hover:shadow-md transform hover:-translate-y-1`
                        }`}
                      >
                        {/* Top Row: JLPT Badge, Quick Check Toggle & Part of Speech Badge */}
                        <div className="flex items-center justify-between w-full mb-2">
                          <div className="flex items-center gap-1.5">
                            <span className={`text-[10px] font-mono font-black px-2 py-0.5 rounded ${
                              isLearned ? 'bg-emerald-500 text-white' : 'bg-orange-500/10 text-[#FF5E3A]'
                            }`}>
                              {item.jlpt}
                            </span>
                            <button
                              onClick={(e) => handleQuickToggleLearned(e, item.id || item.word)}
                              className={`p-1 rounded transition cursor-pointer ${
                                isLearned
                                  ? 'bg-emerald-500 text-white shadow-xs'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-emerald-500 hover:bg-emerald-500/10'
                              }`}
                              title={isLearned ? 'Mastered! Click to unmark' : 'Mark as Learned (+10 XP)'}
                            >
                              <Check className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                            isLearned ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300' : 'bg-amber-500/10 text-amber-500'
                          }`}>
                            {item.posLabel}
                          </span>
                        </div>

                        {/* Word Character with Kanji on top & Hiragana big in centre */}
                        <div className="my-2 text-center min-h-[76px] flex flex-col justify-center">
                          {item.reading && item.reading !== item.word ? (
                            <>
                              <div className={`text-xs font-bold font-jp mb-0.5 tracking-wider ${
                                isLearned ? 'text-emerald-600/80 dark:text-emerald-400/80' : 'text-slate-400 dark:text-slate-500'
                              }`}>
                                {item.word}
                              </div>
                              <div className={`text-2xl sm:text-3xl font-black font-jp transition-colors ${
                                isLearned ? 'text-emerald-700 dark:text-emerald-300' : 'group-hover:text-[#FF5E3A]'
                              }`}>
                                {item.reading}
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="text-xs mb-0.5 opacity-0 select-none">-</div>
                              <div className={`text-2xl sm:text-3xl font-black font-jp transition-colors ${
                                isLearned ? 'text-emerald-700 dark:text-emerald-300' : 'group-hover:text-[#FF5E3A]'
                              }`}>
                                {item.word}
                              </div>
                            </>
                          )}
                          <div className={`text-[11px] font-mono mt-1 ${
                            isLearned ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-orange-500'
                          }`}>
                            {item.romaji}
                          </div>
                        </div>

                        {/* Meaning */}
                        <div className={`text-center pt-1 border-t ${
                          isLearned ? 'border-emerald-500/20' : 'border-slate-100 dark:border-slate-800'
                        }`}>
                          <h4 className={`font-extrabold text-xs sm:text-sm truncate ${
                            isLearned ? 'text-emerald-950 dark:text-emerald-100' : 'text-slate-800 dark:text-slate-100'
                          }`}>
                            {item.meaning}
                          </h4>
                        </div>

                        {/* Quick Example Preview */}
                        {previewSentence && (
                          <div className={`mt-3 pt-2 text-[11px] border-t border-dashed truncate ${
                            isLearned 
                              ? 'text-emerald-700/80 dark:text-emerald-300/80 border-emerald-500/20' 
                              : 'text-slate-400 dark:text-slate-500 border-slate-100 dark:border-slate-800'
                          }`}>
                            <span className="font-jp">{previewSentence.sentence}</span>
                          </div>
                        )}

                        {/* Audio Quick Trigger */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            audio.speak(item.reading ? item.reading.replace(/\s+/g, '') : item.word);
                          }}
                          className={`absolute bottom-3 right-3 p-1.5 rounded-lg opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition cursor-pointer ${
                            isLearned 
                              ? 'bg-emerald-500 text-white shadow-xs' 
                              : 'bg-orange-500/10 hover:bg-[#FF5E3A] text-[#FF5E3A] hover:text-white'
                          }`}
                          title="Pronounce"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Detailed Word Modal */}
      <WordDetailModal
        isOpen={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        wordData={selectedWordDetail}
        onStartQuiz={handleStartQuizFromCard}
        onGainXp={onGainXp}
        theme={theme}
      />

      {/* Vocabulary Quiz Drill Modal */}
      <WordQuizModal
        isOpen={quizModalOpen}
        onClose={() => {
          setQuizModalOpen(false);
          setCustomQuizWords(undefined);
        }}
        wordsList={customQuizWords || learnedWordsObjects}
        targetWord={quizTargetWord}
        theme={theme}
        onCompleteQuiz={(xp) => {
          if (onGainXp) onGainXp(xp);
        }}
      />

    </div>
  );
};
