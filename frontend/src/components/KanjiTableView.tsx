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
  Calendar,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { getKanjiDetails, KanjiDetailsData } from '../data/kanjiWords';
import { dataStore } from '../services/dataStore';
import { KanjiDetailModal } from './KanjiDetailModal';
import { KanjiQuizModal } from './KanjiQuizModal';
import { learnedStore } from '../utils/learnedStore';
import { studyScheduleStore, SCHEDULE_EVENT, ScheduleDuration } from '../utils/studyScheduleStore';
import audio from '../utils/audio';
import { getKanjiPronunciation } from '../utils/romaji';
import { api } from '../services/api';
import { clientCache } from '../services/cacheService';

interface KanjiTableViewProps {
  theme: 'dark' | 'light';
  onGainXp?: (xp: number) => void;
}

export const KanjiTableView: React.FC<KanjiTableViewProps> = ({ theme, onGainXp }) => {
  const [kanjiList, setKanjiList] = useState<any[]>([]);
  const [kanjiSearchQuery, setKanjiSearchQuery] = useState('');
  const [selectedKanjiJlpt, setSelectedKanjiJlpt] = useState('N5');
  const [filterLearned, setFilterLearned] = useState<'ALL' | 'LEARNED' | 'UNLEARNED'>('ALL');
  const [scheduleFilter, setScheduleFilter] = useState<'ALL' | 'TODAY' | 'UNLOCKED'>('ALL');
  const [learnedKanji, setLearnedKanji] = useState<Set<string>>(() => new Set(learnedStore.getLearnedKanjiList()));
  const [scheduleTargetDays, setScheduleTargetDays] = useState<ScheduleDuration>(() => studyScheduleStore.getTargetDays());
  const [scheduleCurrentDay, setScheduleCurrentDay] = useState<number>(() => studyScheduleStore.getCurrentDay());
  const [lockedKanjiModalItem, setLockedKanjiModalItem] = useState<{ char: string; meaning: string; day: number } | null>(null);
  const [loadingKanji, setLoadingKanji] = useState(false);

  // Sync with store updates
  useEffect(() => {
    const handleLearnedUpdate = () => {
      setLearnedKanji(new Set(learnedStore.getLearnedKanjiList()));
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

      // JLPT N5 Schedule Filter
      if (selectedKanjiJlpt === 'N5') {
        if (scheduleFilter === 'TODAY') {
          filtered = filtered.filter(k => studyScheduleStore.isKanjiToday(k.char));
        } else if (scheduleFilter === 'UNLOCKED') {
          filtered = filtered.filter(k => studyScheduleStore.isKanjiUnlocked(k.char));
        }
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
  }, [selectedKanjiJlpt, kanjiSearchQuery, isComingSoon, filterLearned, learnedKanji, scheduleFilter, scheduleCurrentDay, scheduleTargetDays]);

  const handleKanjiClick = (kanjiItem: any) => {
    if (kanjiItem.jlpt === 'N5' || selectedKanjiJlpt === 'N5') {
      const isUnlocked = studyScheduleStore.isKanjiUnlocked(kanjiItem.char);
      if (!isUnlocked) {
        audio.playError();
        setLockedKanjiModalItem({
          char: kanjiItem.char,
          meaning: kanjiItem.meaning,
          day: studyScheduleStore.getKanjiDay(kanjiItem.char)
        });
        return;
      }
    }
    audio.playClick();
    const details = getKanjiDetails(kanjiItem.char, kanjiItem.meaning, kanjiItem.jlpt || 'N5');
    setSelectedKanjiDetail(details);
    setKanjiDetailModalOpen(true);
  };

  const handleStartKanjiQuizFromCard = (char: string) => {
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
            Explore official Japanese Kanji with complete stroke orders, readings, radicals, and 2 easy, authentic contextual sentences each with native speech audio.
          </p>
        </div>

        {!isComingSoon && (
          <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
            <button
              onClick={handleStartFullKanjiQuiz}
              disabled={!isDrillUnlocked}
              className={`px-5 py-3 rounded-2xl font-black text-xs transition flex items-center gap-2 shrink-0 ${
                isDrillUnlocked
                  ? 'bg-gradient-to-r from-[#FF7B5C] to-[#FF5E3A] hover:from-[#FF5E3A] hover:to-[#E84E29] text-white shadow-lg shadow-orange-500/25 cursor-pointer transform hover:-translate-y-0.5'
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
                  <Play className="w-4 h-4 fill-white" />
                  <span>Start Kanji Recognition Drill ({drillQuestionCount} Questions)</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                  <span>Learn 10 Kanji to Unlock Drill ({learnedKanjiObjects.length}/10)</span>
                </>
              )}
            </button>
            {!isDrillUnlocked && (
              <span className="text-[11px] font-bold text-amber-500 dark:text-amber-400">
                Mark {10 - learnedKanjiObjects.length} more Kanji as learned to unlock
              </span>
            )}
          </div>
        )}
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
                  Completed Kanji turn emerald green with a checkmark badge. Click any checkmark or card to toggle.
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
      {selectedKanjiJlpt === 'N5' && (
        <div className={`p-4 sm:p-5 rounded-2xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
          theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200/80 shadow-xs'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-sm font-black text-slate-900 dark:text-white font-heading">
                  JLPT N5 Schedule: Day {scheduleCurrentDay} of {scheduleTargetDays}
                </h3>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400">
                  {studyScheduleStore.getDayTargets(scheduleCurrentDay).kanjiCount} Kanji on Day {scheduleCurrentDay}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Kanji are unlocked day-by-day according to your {scheduleTargetDays}-day plan.
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
              <span className="font-mono text-xs font-black text-amber-500 px-1">
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
                    ? 'bg-amber-500 text-white shadow-2xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                All N5 ({dataStore.kanjiN5.length})
              </button>
              <button
                onClick={() => {
                  audio.playClick();
                  setScheduleFilter('TODAY');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1 shrink-0 ${
                  scheduleFilter === 'TODAY'
                    ? 'bg-amber-500 text-white shadow-2xs'
                    : 'text-slate-500 hover:text-amber-500'
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
                    ? 'bg-amber-500 text-white shadow-2xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Unlocked (1–{scheduleCurrentDay})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Kanji Search and JLPT Level Filter Tabs */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full lg:max-w-md">
          <Search className="w-4 h-4 text-[#FF5E3A] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search Kanji by character, meaning, or reading (e.g. 日, sun, 使, 始)..."
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
      </div>

      {/* Selected Level Quick Requirement Info (For Complete Levels) */}
      {!isComingSoon && selectedKanjiJlpt !== 'ALL' && (
        <div className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs ${
          theme === 'dark' ? 'bg-slate-900/50 border-slate-800 text-slate-300' : 'bg-orange-50/50 border-orange-200/60 text-slate-700'
        }`}>
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-lg font-black font-mono bg-[#FF5E3A] text-white text-[11px] flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>JLPT {selectedKanjiJlpt} Complete</span>
            </span>
            <span className="font-bold">
              {selectedKanjiJlpt === 'N5' && `${dataStore.kanjiN5.length} Official Kanji • ${dataStore.kanjiN5.length * 2} Easy Sentences (Beginner Foundation)`}
              {selectedKanjiJlpt === 'N4' && `${dataStore.kanjiN4.length} Official Kanji • ${dataStore.kanjiN4.length * 2} Easy Sentences (Elementary Mastery)`}
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-400">
            Click any Kanji card below to view 2 easy, authentic example sentences with native audio
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
              Our linguists are curating stroke orders, Onyomi/Kunyomi readings, and 10 contextual sentences per character for higher JLPT levels. Study our complete N5 and N4 databases in the meantime!
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
              const isN5 = kanji.jlpt === 'N5' || selectedKanjiJlpt === 'N5';
              const dayNumber = isN5 ? studyScheduleStore.getKanjiDay(kanji.char) : 1;
              const isUnlocked = isN5 ? studyScheduleStore.isKanjiUnlocked(kanji.char) : true;
              const isToday = isN5 ? studyScheduleStore.isKanjiToday(kanji.char) : false;

              return (
                <div
                  key={kanji.id || kanji.char}
                  onClick={() => handleKanjiClick(kanji)}
                  className={`p-3.5 sm:p-5 rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col justify-between group relative overflow-hidden ${
                    !isUnlocked
                      ? 'border-slate-200/60 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-900/30 opacity-70 hover:opacity-100 hover:border-amber-500/60 shadow-2xs'
                      : isLearned
                      ? 'border-emerald-500/90 bg-emerald-50/80 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-100 shadow-sm shadow-emerald-500/20 ring-1 ring-emerald-500/30'
                      : `${cardBg} hover:border-[#FF5E3A] shadow-xs hover:shadow-lg`
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    {!isUnlocked ? (
                      <span className="flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-slate-700" title={`Unlocks on Day ${dayNumber}`}>
                        <Lock className="w-2.5 h-2.5 text-amber-500" />
                        <span>Day {dayNumber}</span>
                      </span>
                    ) : (
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <span className={`text-[9px] sm:text-[10px] font-mono font-bold px-1.5 sm:px-2 py-0.5 rounded ${
                          isLearned ? 'bg-emerald-500 text-white' : 'bg-orange-500/10 text-[#FF5E3A]'
                        }`}>
                          {kanji.jlpt || 'N5'}
                        </span>
                        {isN5 && (
                          <span className={`px-1.5 py-0.5 rounded text-[9px] font-mono font-black ${
                            isToday ? 'bg-amber-500 text-white' : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                          }`}>
                            {isToday ? `Day ${dayNumber}` : `D${dayNumber}`}
                          </span>
                        )}
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
                    )}

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

      {/* 1. Kanji Detail Modal (Teaches 10 sentences for each Kanji) */}
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
        onClose={() => setKanjiQuizModalOpen(false)}
        kanjiList={learnedKanjiObjects}
        theme={theme}
        targetChar={kanjiQuizTargetChar}
        onCompleteQuiz={onGainXp}
      />

      {/* 3. Locked Kanji Schedule Prompt Modal */}
      {lockedKanjiModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className={`w-full max-w-sm p-6 rounded-3xl border shadow-2xl space-y-4 ${cardBg}`}>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto">
              <Lock className="w-6 h-6" />
            </div>
            <div className="text-center space-y-1">
              <span className="text-5xl font-black font-jp block my-2 text-slate-700 dark:text-slate-300">
                {lockedKanjiModalItem.char}
              </span>
              <h3 className="text-base font-black font-heading">
                Kanji Scheduled for Day {lockedKanjiModalItem.day}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                In your {scheduleTargetDays}-day JLPT N5 study plan, 
                「{lockedKanjiModalItem.char}」({lockedKanjiModalItem.meaning}) unlocks on <strong>Day {lockedKanjiModalItem.day}</strong>. 
                You are currently on <strong>Day {scheduleCurrentDay}</strong>.
              </p>
            </div>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  studyScheduleStore.setCurrentDay(lockedKanjiModalItem.day);
                  setLockedKanjiModalItem(null);
                  audio.playSuccess();
                  confetti({ particleCount: 30, spread: 50 });
                }}
                className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs transition cursor-pointer shadow-md shadow-amber-500/20"
              >
                Advance Schedule to Day {lockedKanjiModalItem.day} & Unlock
              </button>
              <button
                onClick={() => setLockedKanjiModalItem(null)}
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
