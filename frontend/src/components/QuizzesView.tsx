import React, { useState, useEffect, useMemo } from 'react';
import { 
  Puzzle, 
  Play, 
  Search, 
  Zap,
  Lock,
  CheckCircle2,
  Check,
  Sparkles,
  ArrowDown
} from 'lucide-react';
import { Unit, Lesson, Question } from '../types';
import { PracticeQuizModal } from './PracticeQuizModal';
import audio from '../utils/audio';
import { api } from '../services/api';
import { clientCache } from '../services/cacheService';
import { studyScheduleStore, SCHEDULE_EVENT, ScheduleDuration } from '../utils/studyScheduleStore';
import { learnedStore } from '../utils/learnedStore';

interface QuizzesViewProps {
  theme: 'dark' | 'light';
  showFurigana: boolean;
  onXpEarned?: (xp: number) => void;
}

export const QuizzesView: React.FC<QuizzesViewProps> = ({
  theme,
  showFurigana,
  onXpEarned
}) => {
  const [units, setUnits] = useState<Unit[]>(() => clientCache.get<Unit[]>('curriculum_units') || []);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [targetDays, setTargetDays] = useState<ScheduleDuration>(() => studyScheduleStore.getTargetDays());
  const [currentDay, setCurrentDay] = useState<number>(() => studyScheduleStore.getCurrentDay());
  const isAllUnlocked = targetDays === 'ALL';

  const [completedDrillIds, setCompletedDrillIds] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem('anilearn_completed_quiz_drills');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [activeQuizModal, setActiveQuizModal] = useState<{
    title: string;
    subtitle?: string;
    questions: Question[];
    unitNumber: number;
    drillId?: string;
  } | null>(null);

  // Sync with schedule updates (custom plan, advance day, all-access toggle)
  useEffect(() => {
    const handleScheduleUpdate = () => {
      setTargetDays(studyScheduleStore.getTargetDays());
      setCurrentDay(studyScheduleStore.getCurrentDay());
    };
    window.addEventListener(SCHEDULE_EVENT, handleScheduleUpdate);
    return () => window.removeEventListener(SCHEDULE_EVENT, handleScheduleUpdate);
  }, []);

  // Sync with learned updates
  useEffect(() => {
    const handleLearnedUpdate = () => {
      try {
        const raw = localStorage.getItem('anilearn_completed_quiz_drills');
        if (raw) setCompletedDrillIds(JSON.parse(raw));
      } catch {}
    };
    window.addEventListener('anilearn_learned_update', handleLearnedUpdate);
    return () => window.removeEventListener('anilearn_learned_update', handleLearnedUpdate);
  }, []);

  // Fetch curriculum
  useEffect(() => {
    const cached = clientCache.get<Unit[]>('curriculum_units');
    const hasValidDrillQuestions = cached && cached.length > 0 && cached[0].lessons?.every(l => (l.questions?.length || 0) > 0);
    if (hasValidDrillQuestions) {
      setUnits(cached);
    }
    api.getCurriculum().then(res => {
      if (res.success && res.units) {
        clientCache.set('curriculum_units', res.units, 120);
        setUnits(res.units);
      }
    }).catch(err => console.error('Failed to load curriculum:', err));
  }, []);

  // Auto-scroll to today's target unit when available
  useEffect(() => {
    if (units.length > 0) {
      const timer = setTimeout(() => {
        const todayUnit = units.find(u => u.lessons.some(l => studyScheduleStore.isDrillToday(l.id, units)));
        const targetUnitNum = todayUnit ? todayUnit.unitNumber : currentDay;
        const el = document.getElementById(`unit-card-${targetUnitNum}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [units, currentDay]);

  // Calculate statistics across all units
  const stats = useMemo(() => {
    let totalQuestions = 0;
    let totalLessons = 0;
    let unlockedLessons = 0;

    units.forEach(u => {
      totalLessons += u.lessons.length;
      u.lessons.forEach(l => {
        const isLessonUnlocked = isAllUnlocked || studyScheduleStore.isDrillUnlocked(l.id, units);
        if (isLessonUnlocked) {
          unlockedLessons += 1;
        }
        totalQuestions += (l.questions && l.questions.length > 0) ? l.questions.length : 5;
      });
    });

    const completedCount = completedDrillIds.length;

    return {
      totalUnits: units.length,
      totalLessons,
      unlockedLessons,
      totalQuestions,
      completedCount
    };
  }, [units, currentDay, isAllUnlocked, completedDrillIds]);

  // Filtered Units and Lessons
  const filteredUnits = useMemo(() => {
    return units.filter(unit => {
      const hasAnyUnlocked = isAllUnlocked || unit.lessons.some(l => studyScheduleStore.isDrillUnlocked(l.id, units));
      const hasTodayDrills = isAllUnlocked || unit.lessons.some(l => studyScheduleStore.isDrillToday(l.id, units));

      const matchesSearch = 
        unit.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        unit.japaneseTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        unit.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        unit.lessons.some(l => 
          l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          l.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
        );

      if (!matchesSearch) return false;

      if (selectedCategory === 'all') return true;
      if (selectedCategory === 'today') return hasTodayDrills;
      if (selectedCategory === 'unlocked') return hasAnyUnlocked;
      if (selectedCategory === 'basics') return unit.unitNumber <= 3;
      if (selectedCategory === 'daily') return unit.unitNumber > 3 && unit.unitNumber <= 8;
      if (selectedCategory === 'advanced-n5') return unit.unitNumber > 8;
      return true;
    });
  }, [units, searchQuery, selectedCategory, isAllUnlocked, currentDay]);

  // Start a specific lesson quiz
  const handleStartLessonQuiz = (unit: Unit, lesson: Lesson) => {
    const isUnlocked = isAllUnlocked || studyScheduleStore.isDrillUnlocked(lesson.id, units);
    if (!isUnlocked) {
      audio.playIncorrect();
      return;
    }
    // Questions or fallback synthesis
    let questions = lesson.questions || [];
    if (questions.length === 0) {
      const otherQuestions = unit.lessons
        .filter(l => l.id !== lesson.id && l.questions && l.questions.length > 0)
        .flatMap(l => l.questions || []);
      questions = otherQuestions.slice(0, 5);
    }
    if (questions.length === 0) return;

    audio.playClick();
    setActiveQuizModal({
      title: `${unit.title}: ${lesson.title}`,
      subtitle: `${unit.japaneseTitle} · ${lesson.subtitle}`,
      questions: questions,
      unitNumber: unit.unitNumber,
      drillId: lesson.id
    });
  };

  // Launch a randomized quick daily drill
  const handleStartDailyDrill = () => {
    audio.playClick();
    // Prioritize questions from unlocked drills
    const eligibleLessons: Lesson[] = [];
    units.forEach(u => {
      u.lessons.forEach(l => {
        if (isAllUnlocked || studyScheduleStore.isDrillUnlocked(l.id, units)) {
          eligibleLessons.push(l);
        }
      });
    });
    const poolLessons = eligibleLessons.length > 0 ? eligibleLessons : units.flatMap(u => u.lessons);

    const allQuestions: Question[] = [];
    poolLessons.forEach((l: any) => {
      if (l.questions) {
        allQuestions.push(...l.questions);
      }
    });

    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 5);
    setActiveQuizModal({
      title: '⚡ Daily Quick Drill',
      subtitle: `5 Fast JLPT N5 Puzzles & Exercises (Day ${currentDay})`,
      questions: shuffled,
      unitNumber: currentDay,
      drillId: `daily-quick-drill-${currentDay}`
    });
  };

  const scrollToTodayUnit = () => {
    audio.playClick();
    const todayUnit = units.find(u => u.lessons.some(l => studyScheduleStore.isDrillToday(l.id, units)));
    const targetUnitNum = todayUnit ? todayUnit.unitNumber : currentDay;
    const el = document.getElementById(`unit-card-${targetUnitNum}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      setSelectedCategory('all');
      setTimeout(() => {
        const target = document.getElementById(`unit-card-${targetUnitNum}`);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300 pb-12">
      {/* 1. HERO HEADER BANNER */}
      <div className={`relative overflow-hidden rounded-3xl p-5 sm:p-7 md:p-8 border shadow-xs transition-colors ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-[#1C1B29] via-[#161622] to-[#12111A] border-slate-800' 
          : 'bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-rose-500/10 border-orange-200/60'
      }`}>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 font-bold text-xs uppercase tracking-wider">
              <Puzzle className="w-3.5 h-3.5" />
              <span>Interactive Practice Hub</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading tracking-tight">
              Quizzes & Puzzles
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">
              Test your recall with interactive sentence builders, audio listening comprehension, pair matching, and rapid multiple-choice drills. Units unlock progressively as you study each day.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
            <button
              onClick={scrollToTodayUnit}
              className="w-full sm:w-auto px-4 sm:px-5 py-3 rounded-2xl bg-orange-500/15 hover:bg-orange-500/25 border border-orange-500/30 text-orange-500 font-bold text-xs active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <ArrowDown className="w-4 h-4" />
              <span>Jump to Day {currentDay} Target</span>
            </button>
            <button
              onClick={handleStartDailyDrill}
              className="w-full sm:w-auto px-5 sm:px-6 py-3.5 rounded-2xl bg-[#FF5E3A] hover:bg-[#e04f2c] text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/25 active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 fill-white" />
              <span>Quick Daily Drill (5 Qs)</span>
            </button>
          </div>
        </div>

        {/* Schedule & Progress Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-slate-200/60 dark:border-slate-800/80">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Current Study Day</div>
            <div className="text-xl sm:text-2xl font-black text-orange-500 mt-0.5">
              Day {currentDay} <span className="text-xs font-medium text-slate-400">{isAllUnlocked ? '(All Access)' : `/ ${targetDays}`}</span>
            </div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Unlocked Drills</div>
            <div className="text-xl sm:text-2xl font-black text-amber-500 mt-0.5">
              {stats.unlockedLessons} <span className="text-xs font-medium text-slate-400">/ {stats.totalLessons}</span>
            </div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Completed Drills</div>
            <div className="text-xl sm:text-2xl font-black text-emerald-500 mt-0.5">
              {stats.completedCount} <span className="text-xs font-medium text-slate-400">Done</span>
            </div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Exercises</div>
            <div className="text-xl sm:text-2xl font-black text-cyan-500 mt-0.5">{stats.totalQuestions}+</div>
          </div>
        </div>
      </div>

      {/* 2. CONTROLS: SEARCH & CATEGORY CHIPS */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar touch-pan-x whitespace-nowrap pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
          {[
            { id: 'all', label: 'All Units' },
            { id: 'today', label: `⭐ Today's Target (Day ${currentDay})` },
            { id: 'unlocked', label: `🔓 Unlocked (${stats.unlockedLessons} Drills)` },
            { id: 'basics', label: 'Basics & Greetings' },
            { id: 'daily', label: 'Daily Life & Grammar' },
            { id: 'advanced-n5', label: 'N5 Mastery' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                audio.playClick();
                setSelectedCategory(cat.id);
              }}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition-all ${
                selectedCategory === cat.id
                  ? 'bg-orange-500 text-white shadow-xs shadow-orange-500/20'
                  : theme === 'dark'
                  ? 'bg-slate-800/60 hover:bg-slate-800 text-slate-300'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-auto md:min-w-[260px] shrink-0">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search quizzes, topics, particles..."
            className={`w-full pl-10 pr-4 py-2 rounded-xl text-xs font-medium border transition-colors outline-hidden ${
              theme === 'dark'
                ? 'bg-slate-900 border-slate-800 focus:border-orange-500 text-slate-200'
                : 'bg-white border-slate-200 focus:border-orange-500 text-slate-800'
            }`}
          />
        </div>
      </div>

      {/* 3. UNITS LIST */}
      <div className="space-y-6">
        {filteredUnits.length === 0 ? (
          <div className="text-center py-16 text-slate-400">
            <Puzzle className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <div className="text-lg font-bold">No quizzes found</div>
            <p className="text-xs text-slate-500 mt-1">Try another search keyword or select "All Units".</p>
          </div>
        ) : (
          filteredUnits.map((unit) => {
            const unitUnlockedCount = unit.lessons.filter(l => isAllUnlocked || studyScheduleStore.isDrillUnlocked(l.id, units)).length;
            const isUnitAnyUnlocked = isAllUnlocked || unitUnlockedCount > 0;
            const hasTodayDrills = isAllUnlocked || unit.lessons.some(l => studyScheduleStore.isDrillToday(l.id, units));
            const completedInUnit = unit.lessons.filter(l => completedDrillIds.includes(l.id)).length;
            const isUnitFullyDone = unit.lessons.length > 0 && completedInUnit === unit.lessons.length;
            const unitFirstDrillDay = unit.lessons.length > 0 ? studyScheduleStore.getDrillDay(unit.lessons[0].id, units) : unit.unitNumber;

            return (
              <div 
                key={unit.id}
                id={`unit-card-${unit.unitNumber}`}
                className={`rounded-3xl border overflow-hidden transition-all ${
                  hasTodayDrills 
                    ? theme === 'dark'
                      ? 'bg-[#16161D] border-orange-500/80 ring-2 ring-orange-500/30 shadow-lg shadow-orange-500/10'
                      : 'bg-white border-orange-500/80 ring-2 ring-orange-500/30 shadow-md'
                    : !isUnitAnyUnlocked
                    ? theme === 'dark'
                      ? 'bg-[#14141a]/60 border-slate-800/50 opacity-75'
                      : 'bg-slate-50/70 border-slate-200/60 opacity-80'
                    : theme === 'dark' 
                    ? 'bg-[#16161D] border-slate-800/80' 
                    : 'bg-white border-slate-200/80 shadow-xs'
                }`}
              >
                {/* UNIT HEADER */}
                <div className={`p-4 sm:p-6 border-b flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                  hasTodayDrills
                    ? theme === 'dark'
                      ? 'border-orange-500/30 bg-orange-500/10'
                      : 'border-orange-200 bg-orange-50/70'
                    : !isUnitAnyUnlocked
                    ? theme === 'dark'
                      ? 'border-slate-800/40 bg-slate-900/20'
                      : 'border-slate-200/50 bg-slate-100/50'
                    : theme === 'dark' 
                    ? 'border-slate-800/80 bg-slate-900/40' 
                    : 'border-slate-100 bg-slate-50/50'
                }`}>
                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                    <div 
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-black text-base sm:text-lg shadow-md shrink-0 ${
                        !isUnitAnyUnlocked ? 'bg-slate-700 text-slate-400' : 'text-white'
                      }`}
                      style={isUnitAnyUnlocked ? { backgroundColor: unit.color } : {}}
                    >
                      {isUnitAnyUnlocked ? unit.unitNumber : <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300" />}
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <h2 className="text-base sm:text-lg font-black font-heading tracking-tight">
                          Unit {unit.unitNumber}: {unit.title}
                        </h2>
                        <span className="text-xs font-jp text-orange-500 font-bold">
                          {unit.japaneseTitle}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate max-w-xl">
                        {unit.description}
                      </p>
                    </div>
                  </div>

                  {/* Status Badges */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold shrink-0">
                    {hasTodayDrills && (
                      <span className="px-2.5 py-1 rounded-lg bg-orange-500/20 text-orange-500 border border-orange-500/30 flex items-center gap-1.5 font-bold">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Today's Target (Day {currentDay})</span>
                      </span>
                    )}

                    {!isUnitAnyUnlocked ? (
                      <span className="px-2.5 py-1 rounded-lg bg-slate-200/80 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5" />
                        <span>Unlocks on Day {unitFirstDrillDay}</span>
                      </span>
                    ) : isUnitFullyDone ? (
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Unit Completed</span>
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                        {completedInUnit} / {unit.lessons.length} Drills Completed
                        {!isAllUnlocked && unitUnlockedCount < unit.lessons.length && (
                          <span className="text-orange-500 dark:text-orange-400 ml-1">
                            ({unitUnlockedCount} Unlocked)
                          </span>
                        )}
                      </span>
                    )}
                  </div>
                </div>

                {/* UNIT LESSON DRILLS LIST */}
                <div className="divide-y divide-slate-100 dark:divide-slate-800/60">
                  {unit.lessons.map((lesson) => {
                    const questionCount = (lesson.questions && lesson.questions.length > 0) ? lesson.questions.length : 6;
                    const isDrillCompleted = completedDrillIds.includes(lesson.id);
                    const drillDay = studyScheduleStore.getDrillDay(lesson.id, units);
                    const isDrillUnlocked = isAllUnlocked || studyScheduleStore.isDrillUnlocked(lesson.id, units);
                    const isDrillToday = isAllUnlocked || studyScheduleStore.isDrillToday(lesson.id, units);

                    return (
                      <div 
                        key={lesson.id}
                        className={`p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors ${
                          !isDrillUnlocked 
                            ? 'opacity-60 bg-slate-50/30 dark:bg-slate-900/10' 
                            : 'hover:bg-orange-500/5 group'
                        }`}
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                            !isDrillUnlocked
                              ? 'bg-slate-200/50 dark:bg-slate-800/50 text-slate-400'
                              : isDrillCompleted
                              ? 'bg-emerald-500/15 text-emerald-500'
                              : isDrillToday
                              ? 'bg-orange-500/15 text-orange-500'
                              : theme === 'dark' 
                              ? 'bg-slate-800 group-hover:bg-orange-500/20 text-slate-300 group-hover:text-orange-400' 
                              : 'bg-slate-100 group-hover:bg-orange-100 text-slate-600 group-hover:text-orange-600'
                          }`}>
                            {!isDrillUnlocked ? (
                              <Lock className="w-4 h-4" />
                            ) : isDrillCompleted ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                            ) : (
                              <Puzzle className="w-5 h-5" />
                            )}
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <h3 className={`text-sm font-bold truncate ${
                                !isDrillUnlocked 
                                  ? 'text-slate-400' 
                                  : 'group-hover:text-orange-500 transition-colors'
                              }`}>
                                {lesson.title}
                              </h3>
                              {isDrillCompleted ? (
                                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                                  ✓ Done
                                </span>
                              ) : isDrillToday ? (
                                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-500/20 text-orange-500 border border-orange-500/30 flex items-center gap-1">
                                  <Sparkles className="w-3 h-3" />
                                  Today's Target
                                </span>
                              ) : !isDrillUnlocked ? (
                                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200/80 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                  <Lock className="w-2.5 h-2.5" />
                                  Day {drillDay}
                                </span>
                              ) : null}
                            </div>
                            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mt-0.5">
                              <span>{lesson.subtitle}</span>
                              <span>•</span>
                              <span className="font-semibold text-amber-500">+{lesson.xpReward} XP</span>
                              <span>•</span>
                              <span>{questionCount} questions</span>
                            </div>
                          </div>
                        </div>

                        {/* Action button */}
                        {!isDrillUnlocked ? (
                          <button
                            disabled
                            className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 opacity-60 cursor-not-allowed bg-slate-200 dark:bg-slate-800 text-slate-400 self-stretch sm:self-center"
                          >
                            <Lock className="w-3.5 h-3.5" />
                            <span>Locked (Day {drillDay})</span>
                          </button>
                        ) : isDrillCompleted ? (
                          <button
                            onClick={() => handleStartLessonQuiz(unit, lesson)}
                            className={`w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all self-stretch sm:self-center ${
                              theme === 'dark'
                                ? 'bg-emerald-500/15 hover:bg-emerald-500 text-emerald-400 hover:text-white border border-emerald-500/30'
                                : 'bg-emerald-50 hover:bg-emerald-500 text-emerald-700 hover:text-white border border-emerald-300'
                            }`}
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>Practice Again</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => handleStartLessonQuiz(unit, lesson)}
                            className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all self-stretch sm:self-center bg-[#FF5E3A] hover:bg-[#e04f2c] text-white shadow-md shadow-orange-500/20 active:scale-98"
                          >
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>Start Practice</span>
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* 4. MODAL POPUP FOR QUIZ */}
      {activeQuizModal && (
        <PracticeQuizModal
          isOpen={true}
          onClose={() => setActiveQuizModal(null)}
          title={activeQuizModal.title}
          subtitle={activeQuizModal.subtitle}
          questions={activeQuizModal.questions}
          theme={theme}
          showFurigana={showFurigana}
          onCompleteQuiz={(xp) => {
            if (onXpEarned) {
              onXpEarned(xp);
            }

            if (activeQuizModal) {
              const { drillId, questions } = activeQuizModal;
              if (drillId) {
                setCompletedDrillIds(prev => {
                  const next = Array.from(new Set([...prev, drillId]));
                  try {
                    localStorage.setItem('anilearn_completed_quiz_drills', JSON.stringify(next));
                  } catch {}
                  return next;
                });
              }

              // Save to learned store so daily schedule bar flips Card 5 to ✓ Done
              learnedStore.saveDailyQuizResult(currentDay, questions.length, questions.length);
              window.dispatchEvent(new Event('anilearn_learned_update'));
              window.dispatchEvent(new Event(SCHEDULE_EVENT));
            }
          }}
        />
      )}
    </div>
  );
};

export default QuizzesView;
