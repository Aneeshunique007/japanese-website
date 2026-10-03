import React, { useState, useEffect, useMemo } from 'react';
import { 
  Play, 
  Volume2, 
  Search, 
  Sparkles, 
  Clock, 
  CheckCircle2,
  Check,
  Lock,
  Calendar,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { WordItem } from '../types';
import { WordDetailModal } from './WordDetailModal';
import { WordQuizModal } from './WordQuizModal';
import { dataStore } from '../services/dataStore';

const N5_WORDS_COUNT = 805;
const N4_WORDS_COUNT = 683;
import { learnedStore } from '../utils/learnedStore';
import { studyScheduleStore, SCHEDULE_EVENT, ScheduleDuration } from '../utils/studyScheduleStore';
import confetti from 'canvas-confetti';
import audio from '../utils/audio';
import { api } from '../services/api';
import { clientCache } from '../services/cacheService';

interface WordsTableViewProps {
  theme: 'dark' | 'light';
  showFurigana?: boolean;
  onGainXp?: (xp: number) => void;
}

export const WordsTableView: React.FC<WordsTableViewProps> = ({ 
  theme, 
  showFurigana: _showFurigana = true,
  onGainXp 
}) => {
  const [wordsList, setWordsList] = useState<WordItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJlpt, setSelectedJlpt] = useState('N5');
  const [selectedPos, setSelectedPos] = useState('ALL');
  const [filterLearned, setFilterLearned] = useState<'ALL' | 'LEARNED' | 'UNLEARNED'>('ALL');
  const [scheduleFilter, setScheduleFilter] = useState<'ALL' | 'TODAY' | 'UNLOCKED'>('ALL');
  const [learnedWords, setLearnedWords] = useState<Set<string>>(() => new Set(learnedStore.getLearnedWordsList()));
  const [scheduleTargetDays, setScheduleTargetDays] = useState<ScheduleDuration>(() => studyScheduleStore.getTargetDays());
  const [scheduleCurrentDay, setScheduleCurrentDay] = useState<number>(() => studyScheduleStore.getCurrentDay());
  const [lockedWordModalItem, setLockedWordModalItem] = useState<{ word: string; reading: string; meaning: string; day: number } | null>(null);
  const [loading, setLoading] = useState(false);

  // Modal States
  const [selectedWordDetail, setSelectedWordDetail] = useState<WordItem | null>(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [quizModalOpen, setQuizModalOpen] = useState(false);
  const [quizTargetWord, setQuizTargetWord] = useState<string | undefined>(undefined);

  const cardBg = theme === 'dark' ? 'bg-[#17171C] border-slate-800 text-white' : 'bg-white border-slate-200/80 text-[#1A1A1F] shadow-xs';
  const subText = theme === 'dark' ? 'text-slate-400' : 'text-slate-500';

  const isComingSoon = selectedJlpt === 'COMING_SOON' || ['N3', 'N2', 'N1'].includes(selectedJlpt);

  // Listen for storage updates across components
  useEffect(() => {
    const handleLearnedUpdate = () => {
      setLearnedWords(new Set(learnedStore.getLearnedWordsList()));
    };
    const handleScheduleUpdate = () => {
      setScheduleTargetDays(studyScheduleStore.getTargetDays());
      setScheduleCurrentDay(studyScheduleStore.getCurrentDay());
    };

    window.addEventListener('anilearn_learned_update', handleLearnedUpdate);
    window.addEventListener(SCHEDULE_EVENT, handleScheduleUpdate);
    return () => {
      window.removeEventListener('anilearn_learned_update', handleLearnedUpdate);
      window.removeEventListener(SCHEDULE_EVENT, handleScheduleUpdate);
    };
  }, []);

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

      // JLPT N5 Schedule Filter
      if (selectedJlpt === 'N5') {
        if (scheduleFilter === 'TODAY') {
          filtered = filtered.filter(w => studyScheduleStore.isWordToday(w.id || w.word));
        } else if (scheduleFilter === 'UNLOCKED') {
          filtered = filtered.filter(w => studyScheduleStore.isWordUnlocked(w.id || w.word));
        }
      }

      setWordsList(filtered);
      setLoading(false);
    };

    if (cached && cached.length > 0) {
      applyClientFilters(cached);
    } else {
      // Async fetch from Backend API
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
            applyClientFilters([]);
          }
        })
        .catch(() => {
          applyClientFilters([]);
        });
    }
  }, [selectedJlpt, selectedPos, searchQuery, isComingSoon, filterLearned, learnedWords, scheduleFilter, scheduleCurrentDay, scheduleTargetDays]);

  const handleWordClick = (wordItem: WordItem) => {
    if (wordItem.jlpt === 'N5' || selectedJlpt === 'N5') {
      const isUnlocked = studyScheduleStore.isWordUnlocked(wordItem.id || wordItem.word);
      if (!isUnlocked) {
        audio.playError();
        setLockedWordModalItem({
          word: wordItem.word,
          reading: wordItem.reading,
          meaning: wordItem.meaning,
          day: studyScheduleStore.getWordDay(wordItem.id || wordItem.word)
        });
        return;
      }
    }
    audio.playClick();
    setSelectedWordDetail(wordItem);
    setDetailModalOpen(true);
  };

  const handleQuickToggleLearned = (e: React.MouseEvent, idOrWord: string) => {
    e.stopPropagation();
    const nowLearned = learnedStore.toggleWordLearned(idOrWord);
    if (nowLearned) {
      audio.playSuccess();
      if (onGainXp) onGainXp(10);
    } else {
      audio.playClick();
    }
  };

  const handleStartQuizFromCard = (word: string) => {
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
    setQuizTargetWord(undefined);
    setQuizModalOpen(true);
  };

  return (
    <div className="space-y-8 animate-fade-in pb-16">
      
      {/* Header & Drill Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl font-black font-jp text-[#FF5E3A]">語彙表</span>
            <h1 className="text-2xl font-black tracking-tight font-heading">
              Words Table (JLPT Vocabulary)
            </h1>
          </div>
          <p className={`text-sm ${subText}`}>
            Master essential JLPT Japanese vocabulary with readings, meanings, parts of speech, and 2 easy contextual sentences per word with native audio.
          </p>
        </div>

        {!isComingSoon && (
          <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0 w-full sm:w-auto">
            <button
              onClick={handleStartFullQuiz}
              disabled={!isDrillUnlocked}
              className={`w-full sm:w-auto px-5 py-3 rounded-2xl font-black text-xs transition flex items-center justify-center gap-2 shrink-0 ${
                isDrillUnlocked
                  ? 'bg-gradient-to-r from-[#FF7B5C] to-[#FF5E3A] hover:from-[#FF5E3A] hover:to-[#E84E29] text-white shadow-lg shadow-orange-500/25 cursor-pointer transform hover:-translate-y-0.5'
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
                  <Play className="w-4 h-4 fill-white" />
                  <span>Start Vocabulary Drill ({drillQuestionCount} Questions)</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                  <span>Learn 10 Words to Unlock Drill ({learnedWordsObjects.length}/10)</span>
                </>
              )}
            </button>
            {!isDrillUnlocked && (
              <span className="text-[11px] font-bold text-amber-500 dark:text-amber-400">
                Mark {10 - learnedWordsObjects.length} more Words as learned to unlock
              </span>
            )}
          </div>
        )}
      </div>

      {/* Vocabulary Mastery Progress Card */}
      {(() => {
        const currentTotalCount = selectedJlpt === 'N4' ? N4_WORDS_COUNT : N5_WORDS_COUNT;
        const currentLearnedCount = wordsList.filter(w => learnedWords.has(w.id || w.word)).length;
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
                  Completed words turn emerald green with a checkmark badge. Click any checkmark or card to toggle.
                </p>
              </div>
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
                All ({currentTotalCount})
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
                <span>Learned ({currentLearnedCount})</span>
              </button>
              <button
                onClick={() => setFilterLearned('UNLEARNED')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer shrink-0 ${
                  filterLearned === 'UNLEARNED'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Unlearned ({currentTotalCount - currentLearnedCount})
              </button>
            </div>
          </div>
        );
      })()}

      {/* JLPT N5 Study Schedule Banner & Day Controls */}
      {selectedJlpt === 'N5' && (
        <div className={`p-4 sm:p-5 rounded-2xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
          theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200/80 shadow-xs'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-sm font-black text-slate-900 dark:text-white font-heading">
                  JLPT N5 Schedule: Day {scheduleCurrentDay} of {scheduleTargetDays}
                </h3>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  {studyScheduleStore.getDayTargets(scheduleCurrentDay).wordsCount} Words on Day {scheduleCurrentDay}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Words are unlocked day-by-day according to your {scheduleTargetDays}-day plan.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap self-stretch sm:self-auto justify-between sm:justify-end overflow-x-auto no-scrollbar touch-pan-x">
            {/* Day Stepper */}
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 shrink-0">
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
              <span className="font-mono text-xs font-black text-emerald-500 px-1">
                Day {scheduleCurrentDay}
              </span>
              <button
                onClick={() => {
                  audio.playClick();
                  studyScheduleStore.nextDay();
                }}
                disabled={scheduleCurrentDay >= (scheduleTargetDays === 'ALL' ? 60 : scheduleTargetDays)}
                className="p-1 rounded-lg hover:bg-white dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                title="Next Day"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Schedule Filter Pills */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 overflow-x-auto no-scrollbar touch-pan-x whitespace-nowrap shrink-0">
              <button
                onClick={() => {
                  audio.playClick();
                  setScheduleFilter('ALL');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer shrink-0 ${
                  scheduleFilter === 'ALL'
                    ? 'bg-emerald-500 text-white shadow-2xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                All N5 ({N5_WORDS_COUNT})
              </button>
              <button
                onClick={() => {
                  audio.playClick();
                  setScheduleFilter('TODAY');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1 shrink-0 ${
                  scheduleFilter === 'TODAY'
                    ? 'bg-emerald-500 text-white shadow-2xs'
                    : 'text-slate-500 hover:text-emerald-500'
                }`}
              >
                <span>Today (Day {scheduleCurrentDay})</span>
              </button>
              <button
                onClick={() => {
                  audio.playClick();
                  setScheduleFilter('UNLOCKED');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer shrink-0 ${
                  scheduleFilter === 'UNLOCKED'
                    ? 'bg-emerald-500 text-white shadow-2xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Unlocked (1–{scheduleCurrentDay})
              </button>
            </div>
          </div>
        </div>
      )}

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
      {!isComingSoon && selectedJlpt !== 'ALL' && (
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
            <div className="py-16 text-center text-[#FF5E3A] text-sm">
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
                const isN5 = item.jlpt === 'N5' || selectedJlpt === 'N5';
                const dayNumber = isN5 ? studyScheduleStore.getWordDay(item.id || item.word) : 1;
                const isUnlocked = isN5 ? studyScheduleStore.isWordUnlocked(item.id || item.word) : true;
                const isToday = isN5 ? studyScheduleStore.isWordToday(item.id || item.word) : false;

                return (
                  <div
                    key={item.id}
                    onClick={() => handleWordClick(item)}
                    className={`p-3.5 sm:p-5 rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col justify-between group relative overflow-hidden ${
                      !isUnlocked
                        ? 'border-slate-200/60 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-900/30 opacity-70 hover:opacity-100 hover:border-amber-500/60 shadow-2xs'
                        : isLearned
                        ? 'border-emerald-500/90 bg-emerald-50/80 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-100 shadow-sm shadow-emerald-500/20 ring-1 ring-emerald-500/30'
                        : `${cardBg} hover:border-[#FF5E3A]/60 shadow-xs hover:shadow-md transform hover:-translate-y-1`
                    }`}
                  >
                    {/* Top Row: JLPT / Day Badge, Quick Check Toggle & Part of Speech Badge */}
                    <div className="flex items-center justify-between w-full mb-2">
                      {!isUnlocked ? (
                        <span className="flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-slate-700" title={`Unlocks on Day ${dayNumber}`}>
                          <Lock className="w-2.5 h-2.5 text-amber-500" />
                          <span>Day {dayNumber}</span>
                        </span>
                      ) : (
                        <div className="flex items-center gap-1.5">
                          <span className={`text-[10px] font-mono font-black px-2 py-0.5 rounded ${
                            isLearned ? 'bg-emerald-500 text-white' : 'bg-orange-500/10 text-[#FF5E3A]'
                          }`}>
                            {item.jlpt}
                          </span>
                          {isN5 && (
                            <span className={`px-1.5 py-0.5 rounded text-[9px] font-mono font-black ${
                              isToday ? 'bg-emerald-500 text-white' : 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                            }`}>
                              {isToday ? `Day ${dayNumber}` : `D${dayNumber}`}
                            </span>
                          )}
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
                      )}
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
        onClose={() => setQuizModalOpen(false)}
        wordsList={learnedWordsObjects}
        targetWord={quizTargetWord}
        theme={theme}
        onCompleteQuiz={(xp) => {
          if (onGainXp) onGainXp(xp);
        }}
      />

      {/* Locked Word Schedule Prompt Modal */}
      {lockedWordModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className={`w-full max-w-sm p-6 rounded-3xl border shadow-2xl space-y-4 ${cardBg}`}>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
              <Lock className="w-6 h-6" />
            </div>
            <div className="text-center space-y-1">
              <span className="text-3xl font-black font-jp block my-2 text-slate-700 dark:text-slate-300">
                {lockedWordModalItem.word}
              </span>
              <span className="text-xs font-jp text-slate-400 block">
                {lockedWordModalItem.reading}
              </span>
              <h3 className="text-base font-black font-heading pt-1">
                Word Scheduled for Day {lockedWordModalItem.day}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                In your {scheduleTargetDays}-day JLPT N5 study plan, 
                「{lockedWordModalItem.word}」({lockedWordModalItem.meaning}) unlocks on <strong>Day {lockedWordModalItem.day}</strong>. 
                You are currently on <strong>Day {scheduleCurrentDay}</strong>.
              </p>
            </div>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  studyScheduleStore.setCurrentDay(lockedWordModalItem.day);
                  setLockedWordModalItem(null);
                  audio.playSuccess();
                  confetti({ particleCount: 30, spread: 50 });
                }}
                className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition cursor-pointer shadow-md shadow-emerald-500/20"
              >
                Advance Schedule to Day {lockedWordModalItem.day} & Unlock
              </button>
              <button
                onClick={() => setLockedWordModalItem(null)}
                className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white font-semibold text-xs transition cursor-pointer"
              >
                Keep Current Day {scheduleCurrentDay}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
