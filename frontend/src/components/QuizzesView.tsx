import React, { useState, useEffect, useMemo } from 'react';
import { 
  Puzzle, 
  Play, 
  Search, 
  Zap,
  CheckCircle2,
  Check
} from 'lucide-react';
import { Unit, Lesson, Question } from '../types';
import { PracticeQuizModal } from './PracticeQuizModal';
import audio from '../utils/audio';
import { api } from '../services/api';
import { clientCache } from '../services/cacheService';

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

  // Calculate statistics across all units
  const stats = useMemo(() => {
    let totalQuestions = 0;
    let totalLessons = 0;

    units.forEach(u => {
      totalLessons += u.lessons.length;
      u.lessons.forEach(l => {
        totalQuestions += (l.questions && l.questions.length > 0) ? l.questions.length : 5;
      });
    });

    return {
      totalUnits: units.length,
      totalLessons,
      unlockedLessons: totalLessons,
      totalQuestions,
      completedCount: completedDrillIds.length
    };
  }, [units, completedDrillIds]);

  // Filtered Units and Lessons
  const filteredUnits = useMemo(() => {
    return units.filter(unit => {
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
      if (selectedCategory === 'basics') return unit.unitNumber <= 3;
      if (selectedCategory === 'daily') return unit.unitNumber > 3 && unit.unitNumber <= 8;
      if (selectedCategory === 'advanced-n5') return unit.unitNumber > 8;
      return true;
    });
  }, [units, searchQuery, selectedCategory]);

  // Start a specific lesson quiz
  const handleStartLessonQuiz = (unit: Unit, lesson: Lesson) => {
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
    const poolLessons = units.flatMap(u => u.lessons);

    const allQuestions: Question[] = [];
    poolLessons.forEach((l: any) => {
      if (l.questions) {
        allQuestions.push(...l.questions);
      }
    });

    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 5);
    setActiveQuizModal({
      title: 'Quick Practice Drill',
      subtitle: '5 Fast JLPT N5 Puzzles & Exercises',
      questions: shuffled,
      unitNumber: 1,
      drillId: 'quick-practice-drill'
    });
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
              Test your recall with interactive sentence builders, audio listening comprehension, pair matching, and rapid multiple-choice drills. All units are 100% unlocked on demand.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
            <button
              onClick={handleStartDailyDrill}
              className="w-full sm:w-auto px-5 sm:px-6 py-3.5 rounded-2xl bg-[#FF5E3A] hover:bg-[#e04f2c] text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/25 active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 fill-white" />
              <span>Quick Practice Drill (5 Qs)</span>
            </button>
          </div>
        </div>

        {/* Curriculum & Drill Progress Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-slate-200/60 dark:border-slate-800/80">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Units</div>
            <div className="text-xl sm:text-2xl font-black text-orange-500 mt-0.5">
              {stats.totalUnits} <span className="text-xs font-medium text-slate-400">Units</span>
            </div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Available Drills</div>
            <div className="text-xl sm:text-2xl font-black text-amber-500 mt-0.5">
              {stats.totalLessons} <span className="text-xs font-medium text-slate-400">Drills</span>
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
            const completedInUnit = unit.lessons.filter(l => completedDrillIds.includes(l.id)).length;
            const isUnitFullyDone = unit.lessons.length > 0 && completedInUnit === unit.lessons.length;

            return (
              <div 
                key={unit.id}
                id={`unit-card-${unit.unitNumber}`}
                className={`rounded-3xl border overflow-hidden transition-all ${
                  theme === 'dark' 
                    ? 'bg-[#16161D] border-slate-800/80' 
                    : 'bg-white border-slate-200/80 shadow-xs'
                }`}
              >
                {/* UNIT HEADER */}
                <div className={`p-4 sm:p-6 border-b flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                  theme === 'dark' 
                    ? 'border-slate-800/80 bg-slate-900/40' 
                    : 'border-slate-100 bg-slate-50/50'
                }`}>
                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                    <div 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-black text-base sm:text-lg shadow-md shrink-0 text-white"
                      style={{ backgroundColor: unit.color }}
                    >
                      {unit.unitNumber}
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
                    {isUnitFullyDone ? (
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Unit Completed</span>
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                        {completedInUnit} / {unit.lessons.length} Drills Completed
                      </span>
                    )}
                  </div>
                </div>

                {/* UNIT LESSON DRILLS LIST */}
                <div className="divide-y divide-slate-100 dark:divide-slate-800/60">
                  {unit.lessons.map((lesson) => {
                    const questionCount = (lesson.questions && lesson.questions.length > 0) ? lesson.questions.length : 6;
                    const isDrillCompleted = completedDrillIds.includes(lesson.id);

                    return (
                      <div 
                        key={lesson.id}
                        className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors hover:bg-orange-500/5 group"
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                            isDrillCompleted
                              ? 'bg-emerald-500/15 text-emerald-500'
                              : theme === 'dark' 
                              ? 'bg-slate-800 group-hover:bg-orange-500/20 text-slate-300 group-hover:text-orange-400' 
                              : 'bg-slate-100 group-hover:bg-orange-100 text-slate-600 group-hover:text-orange-600'
                          }`}>
                            {isDrillCompleted ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                            ) : (
                              <Puzzle className="w-5 h-5" />
                            )}
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <h3 className="text-sm font-bold truncate group-hover:text-orange-500 transition-colors">
                                {lesson.title}
                              </h3>
                              {isDrillCompleted && (
                                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                                  <Check className="w-3 h-3 text-emerald-500" />
                                  <span>Done</span>
                                </span>
                              )}
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
                        {isDrillCompleted ? (
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
              const { drillId } = activeQuizModal;
              if (drillId) {
                setCompletedDrillIds(prev => {
                  const next = Array.from(new Set([...prev, drillId]));
                  try {
                    localStorage.setItem('anilearn_completed_quiz_drills', JSON.stringify(next));
                  } catch {}
                  return next;
                });
              }

              window.dispatchEvent(new Event('anilearn_learned_update'));
            }
          }}
        />
      )}
    </div>
  );
};

export default QuizzesView;
