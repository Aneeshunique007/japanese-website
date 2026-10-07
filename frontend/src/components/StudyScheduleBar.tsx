import React, { useState, useEffect, useRef } from 'react';
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  BookOpen,
  Languages,
  BookMarked,
  BookA,
  CheckCircle2,
  Unlock,
  Sliders,
  AlertTriangle,
  RotateCcw,
  Flame,
  Puzzle,
  Lock,
  X
} from 'lucide-react';
import { studyScheduleStore, ScheduleDuration, SCHEDULE_EVENT, getOrderedHiragana, getOrderedKatakana } from '../utils/studyScheduleStore';
import { learnedStore } from '../utils/learnedStore';
import { DailySentenceQuizModal } from './DailySentenceQuizModal';
import { DailyMasteryDrillModal } from './DailyMasteryDrillModal';
import { DayCelebrationModal } from './DayCelebrationModal';
import { FullStudyPlanModal } from './FullStudyPlanModal';
import { CustomizePlanModal } from './CustomizePlanModal';
import { Unit } from '../types';
import { api } from '../services/api';
import { clientCache } from '../services/cacheService';
import audio from '../utils/audio';

interface StudyScheduleBarProps {
  theme: 'dark' | 'light';
  variant?: 'compact' | 'full';
  onNavigateTab?: (tab: string, extraId?: string) => void;
  onGainXp?: (xp: number) => void;
}

export const StudyScheduleBar: React.FC<StudyScheduleBarProps> = ({
  theme,
  variant = 'compact',
  onNavigateTab,
  onGainXp
}) => {
  const [targetDays, setTargetDays] = useState<ScheduleDuration>(() => studyScheduleStore.getTargetDays());
  const [currentDay, setCurrentDay] = useState<number>(() => studyScheduleStore.getCurrentDay());
  const [showDayPicker, setShowDayPicker] = useState(false);
  const [showDailyQuizModal, setShowDailyQuizModal] = useState(false);
  const [showDailyMasteryModal, setShowDailyMasteryModal] = useState(false);
  const [showCelebrationModal, setShowCelebrationModal] = useState(false);
  const [showFullPlanModal, setShowFullPlanModal] = useState(false);
  const [showCustomizeModal, setShowCustomizeModal] = useState(false);
  const [curriculumUnits, setCurriculumUnits] = useState<Unit[]>(() => clientCache.get<Unit[]>('curriculum_units') || []);
  const [isCustomActive, setIsCustomActive] = useState<boolean>(() => studyScheduleStore.isCustomEnabled());
  const [pendingDuration, setPendingDuration] = useState<ScheduleDuration | null>(null);
  const [lockedWarning, setLockedWarning] = useState<string | null>(null);
  const [masteryLockedItems, setMasteryLockedItems] = useState<string[] | null>(null);
  const [, setLearnedTick] = useState(0);
  const cardsScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cached = clientCache.get<Unit[]>('curriculum_units');
    if (cached && cached.length > 0) {
      setCurriculumUnits(cached);
      return;
    }
    api.getCurriculum().then(res => {
      if (res.success && res.units) {
        clientCache.set('curriculum_units', res.units, 120);
        setCurriculumUnits(res.units);
      }
    }).catch(err => console.error('Failed to load curriculum:', err));
  }, []);

  useEffect(() => {
    const handleUpdate = () => {
      setTargetDays(studyScheduleStore.getTargetDays());
      setCurrentDay(studyScheduleStore.getCurrentDay());
      setIsCustomActive(studyScheduleStore.isCustomEnabled());
    };
    const handleLearnedUpdate = () => {
      setLearnedTick(t => t + 1);
    };
    // Also re-check lesson completion when user data is saved to localStorage
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'anilearn_auth_user') {
        setLearnedTick(t => t + 1);
      }
    };
    (window as any).resetDay1Learned = () => {
      const t = studyScheduleStore.getDayTargets(1);
      learnedStore.resetWordsForDay(t.words || []);
      learnedStore.resetSentenceDrill(1);
      learnedStore.resetDailyMastery(1);
      console.log('✅ Successfully reset Day 1 Words, Sentence Drill, and Mastery Test!');
    };
    window.addEventListener(SCHEDULE_EVENT, handleUpdate);
    window.addEventListener('anilearn_learned_update', handleLearnedUpdate);
    window.addEventListener('storage', handleStorageChange);
    // Also listen for a custom event dispatched by the same tab
    window.addEventListener('anilearn_user_update', handleLearnedUpdate);
    return () => {
      window.removeEventListener(SCHEDULE_EVENT, handleUpdate);
      window.removeEventListener('anilearn_learned_update', handleLearnedUpdate);
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('anilearn_user_update', handleLearnedUpdate);
    };
  }, []);

  const targets = studyScheduleStore.getDayTargets(currentDay);
  const cumulative = studyScheduleStore.getCumulativeStats(currentDay);

  // Check that dataStore has loaded and valid targets exist for today
  const hasLoadedTargets = targets.totalKana > 0 && targets.totalWords > 0 && (targets.kana.length > 0 || targets.kanji.length > 0 || targets.words.length > 0 || Boolean(targets.lessonId));

  const unlockedKanjiList = studyScheduleStore.getUnlockedKanji(currentDay);
  const learnedUnlockedKanjiCount = unlockedKanjiList.filter((k: any) => learnedStore.isKanjiLearned(k.char)).length;
  const allUnlockedKanjiDone = unlockedKanjiList.length > 0 && learnedUnlockedKanjiCount >= unlockedKanjiList.length;

  const isWordItemLearned = (w: any) => learnedStore.isWordLearned(w.id || w.word) || (w._id && learnedStore.isWordLearned(w._id)) || (w.word && learnedStore.isWordLearned(w.word));
  const unlockedWordsList = studyScheduleStore.getUnlockedWords(currentDay);
  const learnedUnlockedWordsCount = unlockedWordsList.filter(isWordItemLearned).length;
  const allUnlockedWordsDone = unlockedWordsList.length > 0 && learnedUnlockedWordsCount >= unlockedWordsList.length;

  // Live completion counters for today's specific allotment
  const completedHiraganaCount = (targets.hiragana || []).filter(k => learnedStore.isKanaLearned(k.char)).length;
  const isHiraganaDone = hasLoadedTargets && ((targets.hiragana || []).length > 0 ? completedHiraganaCount >= targets.hiragana.length : true);

  const completedKatakanaCount = (targets.katakana || []).filter(k => learnedStore.isKanaLearned(k.char)).length;
  const isKatakanaDone = hasLoadedTargets && ((targets.katakana || []).length > 0 ? completedKatakanaCount >= targets.katakana.length : true);

  const isKanaDone = isHiraganaDone && isKatakanaDone;
  const totalLearnedHiragana = getOrderedHiragana().filter(k => learnedStore.isKanaLearned(k.char)).length;
  const totalLearnedKatakana = getOrderedKatakana().filter(k => learnedStore.isKanaLearned(k.char)).length;

  const completedKanjiCount = targets.kanji.filter(k => learnedStore.isKanjiLearned(k.char)).length;
  const isKanjiDone = hasLoadedTargets && (targets.kanji.length > 0 ? completedKanjiCount >= targets.kanji.length : allUnlockedKanjiDone);

  const completedWordsCount = targets.words.filter(isWordItemLearned).length;
  const isWordsDone = hasLoadedTargets && (targets.words.length > 0 ? completedWordsCount >= targets.words.length : allUnlockedWordsDone);

  const unlockedLessonIds = studyScheduleStore.getUnlockedLessonIds(currentDay);
  const nextLessonInfo = studyScheduleStore.getNextLesson(currentDay);
  const isTodayLessonDone = targets.lessonId ? learnedStore.isLessonCompleted(targets.lessonId) : false;
  const allUnlockedLessonsDone = unlockedLessonIds.length > 0
    ? unlockedLessonIds.every(id => learnedStore.isLessonCompleted(id))
    : true;
  const unfinishedUnlockedLesson = unlockedLessonIds.find(id => !learnedStore.isLessonCompleted(id));
  const isLessonDone = targets.lessonId ? isTodayLessonDone : allUnlockedLessonsDone;

  const drillProgress = learnedStore.getDailyQuizProgress(currentDay);
  const sentenceAttended = drillProgress.attended;
  const sentenceTotal = drillProgress.total || targets.sentencesCount || 50;

  // Unit from QuizzesView corresponding to current day
  const todayUnit = curriculumUnits.find(u => u.unitNumber === currentDay) || curriculumUnits[(currentDay - 1) % Math.max(1, curriculumUnits.length)];
  const todayQuestionsCount = todayUnit ? todayUnit.lessons.reduce((sum, l) => sum + (l.questions?.length || 0), 0) : 0;
  const todayXpCount = todayUnit ? todayUnit.lessons.reduce((sum, l) => sum + (l.xpReward || 0), 0) : 0;

  // Real Unit Practice Drills Progress from QuizzesView (matching the 1/4 Drills Completed in Quizzes page)
  const completedDrillIds: string[] = (() => {
    try {
      const raw = localStorage.getItem('anilearn_completed_quiz_drills');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  })();
  const todayUnitLessons = todayUnit?.lessons || [];
  const completedTodayDrillsCount = todayUnitLessons.filter(l => completedDrillIds.includes(l.id)).length;
  const targetDrillsCount = studyScheduleStore.getQuizzesPerDay(); // e.g. 2 drills/day
  const requiredDrillsCount = Math.min(targetDrillsCount, Math.max(1, todayUnitLessons.length));
  const isDailyQuizDone = todayUnitLessons.length > 0 ? completedTodayDrillsCount >= requiredDrillsCount : false;
  const unitQuizFraction = requiredDrillsCount > 0 ? Math.min(1, completedTodayDrillsCount / requiredDrillsCount) : 0;
  const drillAttended = completedTodayDrillsCount;
  const drillTotal = requiredDrillsCount;

  const isSentenceDone = learnedStore.isSentenceDrillCompleted(currentDay);
  const sentenceFraction = isSentenceDone ? 1 : (sentenceTotal > 0 ? Math.min(1, sentenceAttended / sentenceTotal) : 0);

  const isQuizOfTheDayDone = learnedStore.isQuizOfTheDayCompleted(currentDay);

  const isAllKanaCompleted = learnedStore.isAllKanaCompleted() || studyScheduleStore.isKanaMastered();
  const learnedKanaCount = isAllKanaCompleted ? 164 : learnedStore.getLearnedKanaList().length;

  const hiraganaFraction = targets.hiragana.length > 0 ? Math.min(1, completedHiraganaCount / targets.hiragana.length) : 1;
  const katakanaFraction = targets.katakana.length > 0 ? Math.min(1, completedKatakanaCount / targets.katakana.length) : 1;
  const kanjiFraction = targets.kanji.length > 0 ? Math.min(1, completedKanjiCount / targets.kanji.length) : 1;
  const lessonFraction = targets.lessonId ? (isLessonDone ? 1 : 0) : 1;
  const wordsFraction = targets.words.length > 0 ? Math.min(1, completedWordsCount / targets.words.length) : 1;
  const quizFraction = isQuizOfTheDayDone ? 1 : 0;

  const totalTasks = !isAllKanaCompleted
    ? [
        targets.hiragana.length > 0 ? 1 : 0,
        targets.katakana.length > 0 ? 1 : 0,
        targets.kanji.length > 0 ? 1 : 0,
      ].reduce((a, b) => a + b, 0)
    : [
        targets.hiragana.length > 0 ? 1 : 0,
        targets.katakana.length > 0 ? 1 : 0,
        targets.kanji.length > 0 ? 1 : 0,
        targets.lessonId ? 1 : 0,
        targets.words.length > 0 ? 1 : 0,
        1, // Unit Practice drill
        1, // Sentence drill
        1, // Daily Mastery Test
      ].reduce((a, b) => a + b, 0);

  const doneTasks = !isAllKanaCompleted
    ? [
        isHiraganaDone && targets.hiragana.length > 0 ? 1 : 0,
        isKatakanaDone && targets.katakana.length > 0 ? 1 : 0,
        isKanjiDone && targets.kanji.length > 0 ? 1 : 0,
      ].reduce((a, b) => a + b, 0)
    : [
        isHiraganaDone && targets.hiragana.length > 0 ? 1 : 0,
        isKatakanaDone && targets.katakana.length > 0 ? 1 : 0,
        isKanjiDone && targets.kanji.length > 0 ? 1 : 0,
        isLessonDone && targets.lessonId ? 1 : 0,
        isWordsDone && targets.words.length > 0 ? 1 : 0,
        isDailyQuizDone ? 1 : 0,
        isSentenceDone ? 1 : 0,
        isQuizOfTheDayDone ? 1 : 0,
      ].reduce((a, b) => a + b, 0);

  const weightedSum = !isAllKanaCompleted
    ? [
        targets.hiragana.length > 0 ? hiraganaFraction : 0,
        targets.katakana.length > 0 ? katakanaFraction : 0,
        targets.kanji.length > 0 ? kanjiFraction : 0,
      ].reduce((a, b) => a + b, 0)
    : [
        targets.hiragana.length > 0 ? hiraganaFraction : 0,
        targets.katakana.length > 0 ? katakanaFraction : 0,
        targets.kanji.length > 0 ? kanjiFraction : 0,
        targets.lessonId ? lessonFraction : 0,
        targets.words.length > 0 ? wordsFraction : 0,
        unitQuizFraction,
        sentenceFraction,
        quizFraction,
      ].reduce((a, b) => a + b, 0);

  const dayPct = totalTasks > 0 ? Math.min(100, Math.round((weightedSum / totalTasks) * 100)) : 0;
  
  // Strictest possible verification: all active targets MUST be loaded & completed
  const isAllStudyTargetsDone = !isAllKanaCompleted
    ? (
        hasLoadedTargets &&
        (targets.hiragana.length > 0 ? isHiraganaDone : true) &&
        (targets.katakana.length > 0 ? isKatakanaDone : true) &&
        (targets.kanji.length > 0 ? isKanjiDone : true)
      )
    : (
        hasLoadedTargets &&
        (targets.hiragana.length > 0 ? isHiraganaDone : true) &&
        (targets.katakana.length > 0 ? isKatakanaDone : true) &&
        (targets.kanji.length > 0 ? isKanjiDone : true) &&
        (targets.lessonId ? isLessonDone : true) &&
        (targets.words.length > 0 ? isWordsDone : true) &&
        isDailyQuizDone &&
        isSentenceDone
      );

  const isAllTodayDone = !isAllKanaCompleted ? isAllStudyTargetsDone : (isAllStudyTargetsDone && isQuizOfTheDayDone);

  const getIncompleteTasks = (): string[] => {
    const missing: string[] = [];
    if (targets.hiragana.length > 0 && !isHiraganaDone) {
      missing.push(`Hiragana (${completedHiraganaCount}/${targets.hiragana.length} learned)`);
    }
    if (targets.katakana.length > 0 && !isKatakanaDone) {
      missing.push(`Katakana (${completedKatakanaCount}/${targets.katakana.length} learned)`);
    }
    if (targets.kanji.length > 0 && !isKanjiDone) {
      missing.push(`Kanji (${completedKanjiCount}/${targets.kanji.length} learned)`);
    }
    if (targets.lessonId && !isLessonDone) {
      missing.push(`Lesson: ${targets.lessonId.replace('lesson-n5-', 'Lesson ')}`);
    }
    if (targets.words.length > 0 && !isWordsDone) {
      missing.push(`Words (${completedWordsCount}/${targets.words.length} learned)`);
    }
    if (!isDailyQuizDone) {
      missing.push('Unit Practice Drill');
    }
    if (!isSentenceDone) {
      missing.push('Sentence Practice Drill');
    }
    return missing;
  };

  const handleOpenDailyMastery = () => {
    if (!isAllStudyTargetsDone) {
      audio.playClick();
      const missing = getIncompleteTasks();
      setMasteryLockedItems(missing.length > 0 ? missing : ['Please complete all today\'s study targets first.']);
      return;
    }
    audio.playFanfare();
    setShowDailyMasteryModal(true);
  };

  // Auto-celebration effect for Day 1 when all criteria are met
  useEffect(() => {
    if (currentDay === 1 && isAllTodayDone && dayPct === 100) {
      const celebrated = localStorage.getItem('anilearn_day1_celebrated');
      if (!celebrated) {
        localStorage.setItem('anilearn_day1_celebrated', 'true');
        setShowCelebrationModal(true);
      }
    }
  }, [currentDay, isAllTodayDone, dayPct]);

  const isDark = theme === 'dark';
  const cardBg = isDark ? 'bg-[#17171C] border-slate-800 text-white' : 'bg-white border-slate-200/90 text-[#1A1A1F] shadow-xs';

  // 3-state traffic-light system: full done -> green, in progress -> yellow, nothing done -> red
  const getCardStatus = (isDone: boolean, progressCount: number): 'done' | 'progress' | 'todo' => {
    if (isDone) return 'done';
    if (progressCount > 0) return 'progress';
    return 'todo';
  };

  const hiraganaStatus: 'done' | 'progress' | 'todo' = targets.hiragana.length > 0
    ? getCardStatus(isHiraganaDone, completedHiraganaCount)
    : 'done';

  const katakanaStatus: 'done' | 'progress' | 'todo' = targets.katakana.length > 0
    ? getCardStatus(isKatakanaDone, completedKatakanaCount)
    : 'done';

  const kanjiStatus: 'done' | 'progress' | 'todo' = targets.kanji.length > 0
    ? getCardStatus(isKanjiDone, completedKanjiCount)
    : (allUnlockedKanjiDone ? 'done' : learnedUnlockedKanjiCount > 0 ? 'progress' : 'todo');

  const lessonStatus: 'done' | 'progress' | 'todo' = targets.lessonId
    ? (isTodayLessonDone ? 'done' : 'todo')
    : (allUnlockedLessonsDone ? 'done' : 'progress');

  const wordsStatus: 'done' | 'progress' | 'todo' = targets.words.length > 0
    ? getCardStatus(isWordsDone, completedWordsCount)
    : (allUnlockedWordsDone ? 'done' : learnedUnlockedWordsCount > 0 ? 'progress' : 'todo');
  const unitQuizStatus: 'done' | 'progress' | 'todo' = isDailyQuizDone ? 'done' : completedTodayDrillsCount > 0 ? 'progress' : 'todo';
  const sentenceStatus: 'done' | 'progress' | 'todo' = isSentenceDone ? 'done' : sentenceAttended > 0 ? 'progress' : 'todo';
  const quizStatus: 'done' | 'progress' | 'todo' = isQuizOfTheDayDone ? 'done' : isAllStudyTargetsDone ? 'progress' : 'todo';

  const getStatusClasses = (status: 'done' | 'progress' | 'todo') => {
    if (status === 'done') {
      return {
        card: isDark
          ? 'bg-emerald-950/20 border-emerald-800/60 hover:border-emerald-500'
          : 'bg-emerald-50/50 border-emerald-200 hover:border-emerald-500',
        text: 'text-emerald-500',
        badge: 'bg-emerald-500/15 text-emerald-500',
      };
    }
    if (status === 'progress') {
      return {
        card: isDark
          ? 'bg-amber-950/20 border-amber-800/60 hover:border-amber-500'
          : 'bg-amber-50/50 border-amber-200 hover:border-amber-500',
        text: 'text-amber-500',
        badge: 'bg-amber-500/15 text-amber-500',
      };
    }
    // 'todo' (nothing done) -> Red
    return {
      card: isDark
        ? 'bg-rose-950/20 border-rose-800/60 hover:border-rose-500'
        : 'bg-rose-50/50 border-rose-200 hover:border-rose-500',
      text: 'text-rose-500',
      badge: 'bg-rose-500/15 text-rose-500',
    };
  };

  const hiraganaStyle = getStatusClasses(hiraganaStatus);
  const katakanaStyle = getStatusClasses(katakanaStatus);
  const kanjiStyle = getStatusClasses(kanjiStatus);
  const lessonStyle = getStatusClasses(lessonStatus);
  const wordsStyle = getStatusClasses(wordsStatus);
  const unitQuizStyle = getStatusClasses(unitQuizStatus);
  const sentenceStyle = getStatusClasses(sentenceStatus);
  const quizStyle = getStatusClasses(quizStatus);

  const handleSelectDays = (days: ScheduleDuration) => {
    audio.playClick();
    if (isCustomActive) {
      setPendingDuration(days);
      return;
    }
    studyScheduleStore.setTargetDays(days);
  };

  const confirmSwitchDuration = () => {
    if (pendingDuration !== null) {
      audio.playClick();
      studyScheduleStore.resetCustomPace();
      studyScheduleStore.setTargetDays(pendingDuration);
      setPendingDuration(null);
    }
  };

  const cancelSwitchDuration = () => {
    audio.playClick();
    setPendingDuration(null);
  };

  const handlePrevDay = () => {
    if (currentDay > 1) {
      audio.playClick();
      studyScheduleStore.prevDay();
    }
  };

  const handleNextDay = () => {
    // Only allow advancing if current day is 100% completed including Daily Mastery Test (or if All Access is selected)
    if (targetDays !== 'ALL' && !isAllTodayDone) {
      audio.playClick?.();
      setLockedWarning(`Complete all Day ${currentDay} tasks and pass the Daily Mastery Test to unlock Day ${currentDay + 1}!`);
      setTimeout(() => setLockedWarning(null), 4000);
      return;
    }
    setLockedWarning(null);
    const maxDays = targetDays === 'ALL' ? 60 : targetDays;
    if (currentDay < maxDays) {
      audio.playClick();
      studyScheduleStore.nextDay(true);
    }
  };

  const handleJumpDay = (d: number) => {
    if (targetDays !== 'ALL' && d > currentDay && !isAllTodayDone) {
      audio.playClick?.();
      setLockedWarning(`Complete Day ${currentDay} tasks and pass the Daily Mastery Test to unlock future days!`);
      setTimeout(() => setLockedWarning(null), 4000);
      setShowDayPicker(false);
      return;
    }
    setLockedWarning(null);
    audio.playClick();
    studyScheduleStore.setCurrentDay(d, d <= currentDay);
    setShowDayPicker(false);
  };

  if (variant === 'compact') {
    const maxDays = targetDays === 'ALL' ? 60 : targetDays;

    return (
      <>
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-2xl border ${cardBg} text-xs select-none overflow-x-auto no-scrollbar touch-pan-x whitespace-nowrap shrink-0`}>
          {/* Plan Days Switcher */}
          <div className="flex items-center gap-1 border-r border-slate-200 dark:border-slate-800 pr-2 shrink-0">
            <span className="font-extrabold text-[11px] text-[#FF5E3A] font-mono hidden sm:inline">JLPT N5:</span>
            {([60, 90, 120, 'ALL'] as ScheduleDuration[]).map(d => (
              <button
                key={d}
                onClick={() => handleSelectDays(d)}
                className={`px-2 py-0.5 rounded-lg text-[11px] font-mono font-black transition cursor-pointer ${targetDays === d
                    ? d === 'ALL' ? 'bg-emerald-500 text-white shadow-xs' : 'bg-[#FF5E3A] text-white shadow-xs'
                    : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                  }`}
                title={d === 'ALL' ? 'All Access (Unlock everything with no day restrictions)' : `Switch to ${d}-day study schedule`}
              >
                {d === 'ALL' ? 'All' : `${d}d`}
              </button>
            ))}
          </div>

          {/* Day Stepper or All Access Status */}
          {targetDays === 'ALL' ? (
            <div className="flex items-center gap-2 pl-2 text-xs font-semibold text-emerald-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold">All Access Mode</span>
              <span className="text-slate-400 font-mono hidden md:inline">• 164 Kana · 110 Kanji · 805 Words Unlocked</span>
            </div>
          ) : (
            <>
              {/* Day Stepper */}
              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrevDay}
                  disabled={currentDay <= 1}
                  className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed text-slate-400 cursor-pointer"
                  title="Previous Day"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>

                <div className="relative">
                  <button
                    onClick={() => setShowDayPicker(prev => !prev)}
                    className="px-2 py-0.5 rounded-lg bg-orange-500/10 text-[#FF5E3A] font-black font-mono text-[11px] hover:bg-orange-500/20 transition cursor-pointer flex items-center gap-1"
                    title="Click to jump to another day"
                  >
                    <Calendar className="w-3 h-3" />
                    <span>Day {currentDay}/{targetDays}</span>
                  </button>

                  {/* Quick Day Selector Dropdown */}
                  {showDayPicker && (
                    <div className={`absolute left-0 top-8 z-50 p-3 rounded-2xl border shadow-xl w-60 max-h-56 overflow-y-auto grid grid-cols-5 gap-1.5 ${isDark ? 'bg-[#1C1C22] border-slate-700' : 'bg-white border-slate-200'
                      }`}>
                      {Array.from({ length: maxDays }, (_, i) => i + 1).map(d => (
                        <button
                          key={d}
                          onClick={() => handleJumpDay(d)}
                          className={`p-1.5 rounded-lg text-xs font-mono font-bold transition cursor-pointer ${d === currentDay
                              ? 'bg-[#FF5E3A] text-white'
                              : d < currentDay
                                ? 'bg-emerald-500/15 text-emerald-500 hover:bg-emerald-500/25'
                                : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                            }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={handleNextDay}
                  disabled={currentDay >= maxDays}
                  className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed text-slate-400 cursor-pointer"
                  title="Next Day"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Compact Daily Target Chips */}
              <div className="hidden xl:flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-800 font-semibold text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="text-[#FF5E3A] font-bold">{targets.hiraganaCount}</span> Hiragana
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span className="text-pink-500 font-bold">{targets.katakanaCount}</span> Katakana
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span className="text-amber-500 font-bold">{targets.kanjiCount}</span> Kanji
                </span>
                {!isAllKanaCompleted ? (
                  <>
                    <span>•</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/15 text-amber-500">
                      Stage 1: {learnedKanaCount}/164 Kana
                    </span>
                  </>
                ) : (
                  <>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <span className="text-emerald-500 font-bold">{targets.wordsCount}</span> Words
                    </span>
                    {targets.lessonId && (
                      <>
                        <span>•</span>
                        <span className="text-indigo-400 font-bold">1 Lesson</span>
                      </>
                    )}
                  </>
                )}
              </div>
            </>
          )}

          {/* View Full Plan Button */}
          <button
            onClick={() => {
              audio.playClick();
              setShowFullPlanModal(true);
            }}
            className="px-2.5 py-0.5 rounded-lg bg-orange-500/10 hover:bg-orange-500/20 text-[#FF5E3A] border border-orange-500/20 font-black font-mono text-[11px] transition cursor-pointer flex items-center gap-1 shadow-2xs shrink-0"
            title="Open complete day-by-day curriculum roadmap"
          >
            <Calendar className="w-3 h-3" />
            <span>Full Plan</span>
          </button>
        </div>

        <FullStudyPlanModal
          isOpen={showFullPlanModal}
          onClose={() => setShowFullPlanModal(false)}
          theme={theme}
          onNavigateTab={onNavigateTab}
        />
      </>
    );
  }

  // Variant === 'full' (Hero/Overview Widget)
  if (targetDays === 'ALL') {
    const totalLearnedKana = totalLearnedHiragana + totalLearnedKatakana;
    const totalLearnedKanji = learnedStore.getLearnedKanjiList().length;
    const totalLearnedWords = learnedStore.getLearnedWordsList().length;
    const totalAllLearned = totalLearnedKana + totalLearnedKanji + totalLearnedWords;
    const totalAllItems = 164 + 110 + 805; // 1,079 total N5 curriculum items
    const allMasteryPct = Math.min(100, Math.round((totalAllLearned / totalAllItems) * 100));

    return (
      <div className={`p-4 sm:p-7 rounded-2xl sm:rounded-3xl border ${cardBg} shadow-sm space-y-5 sm:space-y-6 relative`}>
        {/* Top Banner: Title + Duration Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 rounded-xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center font-bold">
                <Unlock className="w-4 h-4" />
              </div>
              <h3 className="text-lg sm:text-xl font-black font-heading">
                JLPT N5 All Access Library
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-emerald-500/15 text-emerald-500 border border-emerald-500/25 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                All Unlocked (Free Mode)
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Zero day locks active. Study all 82 Hiragana, 82 Katakana, 110 Kanji, 805 Words, and Lessons freely at your own pace.
            </p>
          </div>

          {/* Schedule Selector: 60 / 90 / 120 Days + All Access + Full Plan */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 self-stretch sm:self-auto overflow-x-auto no-scrollbar touch-pan-x whitespace-nowrap shrink-0">
            {([60, 90, 120] as ScheduleDuration[]).map(d => (
              <button
                key={d}
                onClick={() => handleSelectDays(d)}
                className="px-3 py-1.5 rounded-xl text-xs font-mono font-black transition cursor-pointer text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 shrink-0"
              >
                <span>{d} Days</span>
              </button>
            ))}
            <button
              onClick={() => handleSelectDays('ALL')}
              className="px-3 py-1.5 rounded-xl text-xs font-mono font-black transition cursor-pointer flex items-center gap-1.5 bg-emerald-500 text-white shadow-sm shadow-emerald-500/30 shrink-0"
              title="All curriculum unlocked without day locks"
            >
              <span>All Access</span>
            </button>
          </div>
        </div>

        {/* Overall Curriculum Mastery Bar */}
        <div className="space-y-2 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-bold text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-slate-900 dark:text-white font-heading text-sm">Overall N5 Mastery</span>
              <span className="text-slate-400 font-mono text-[11px] font-normal">({totalAllLearned} of {totalAllItems} items marked learned)</span>
            </span>
            <div className="flex items-center gap-2.5 font-mono text-[11px] flex-wrap">
              <span className="text-[#FF5E3A] font-bold">🌸 {totalLearnedHiragana}/82 Hiragana</span>
              <span>•</span>
              <span className="text-pink-500 font-bold">⚡ {totalLearnedKatakana}/82 Katakana</span>
              <span>•</span>
              <span className="text-amber-500 font-bold">🈸 {totalLearnedKanji}/110 Kanji</span>
              <span>•</span>
              <span className="text-emerald-500 font-bold">📖 {totalLearnedWords}/805 Words</span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-500 font-black text-xs ml-1">
                {allMasteryPct}%
              </span>
            </div>
          </div>
          <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-[#FF5E3A] rounded-full transition-all duration-500 shadow-sm"
              style={{ width: `${allMasteryPct}%` }}
            />
          </div>
        </div>

        {/* Unrestricted Vault Cards in Exact Progression Sequence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-3.5">
          {/* Card 1: All Hiragana */}
          <div
            onClick={() => onNavigateTab?.('hiragana')}
            className={`p-4 rounded-2xl border transition cursor-pointer flex flex-col justify-between group hover:shadow-md ${isDark ? 'bg-slate-900/60 border-slate-800 hover:border-emerald-500' : 'bg-orange-50/30 border-slate-200 hover:border-emerald-500'
              }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-black flex items-center gap-1.5 uppercase text-emerald-500">
                  <Languages className="w-3.5 h-3.5" />
                  <span>Hiragana Vault</span>
                </span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-500">
                  {totalLearnedHiragana}/82
                </span>
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                Hiragana (ひらがな)
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                46 Basic + 25 Dakuten &amp; combos.
              </p>
            </div>
            <div className="pt-3 text-[11px] font-bold text-emerald-500 group-hover:translate-x-0.5 transition-transform flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 mt-2">
              <span>Study Hiragana</span>
              <span>→</span>
            </div>
          </div>

          {/* Card 2: All Katakana */}
          <div
            onClick={() => onNavigateTab?.('katakana')}
            className={`p-4 rounded-2xl border transition cursor-pointer flex flex-col justify-between group hover:shadow-md ${isDark ? 'bg-slate-900/60 border-slate-800 hover:border-pink-500' : 'bg-orange-50/30 border-slate-200 hover:border-pink-500'
              }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-black flex items-center gap-1.5 uppercase text-pink-500">
                  <Languages className="w-3.5 h-3.5" />
                  <span>Katakana Vault</span>
                </span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-pink-500/15 text-pink-500">
                  {totalLearnedKatakana}/82
                </span>
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                Katakana (カタカナ)
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                Foreign loanwords &amp; onomatopoeia.
              </p>
            </div>
            <div className="pt-3 text-[11px] font-bold text-pink-500 group-hover:translate-x-0.5 transition-transform flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 mt-2">
              <span>Study Katakana</span>
              <span>→</span>
            </div>
          </div>

          {/* Card 3: All Kanji */}
          <div
            onClick={() => onNavigateTab?.('kanji')}
            className={`p-4 rounded-2xl border transition cursor-pointer flex flex-col justify-between group hover:shadow-md ${isDark ? 'bg-slate-900/60 border-slate-800 hover:border-amber-500' : 'bg-orange-50/30 border-slate-200 hover:border-amber-500'
              }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-black flex items-center gap-1.5 uppercase text-amber-500">
                  <BookMarked className="w-3.5 h-3.5" />
                  <span>Kanji Vault</span>
                </span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-amber-500/15 text-amber-500">
                  {totalLearnedKanji}/110
                </span>
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                Kanji (漢字)
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                JLPT N5 essential Kanji &amp; readings.
              </p>
            </div>
            <div className="pt-3 text-[11px] font-bold text-amber-500 group-hover:translate-x-0.5 transition-transform flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 mt-2">
              <span>Study Kanji</span>
              <span>→</span>
            </div>
          </div>

          {/* If Kana is NOT yet completed: Show Stage 1 Foundation Gate Card */}
          {!isAllKanaCompleted ? (
            <div
              className={`p-4 rounded-2xl border transition flex flex-col justify-between group hover:shadow-md ${
                isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-orange-50/40 border-orange-200/60 shadow-xs'
              }`}
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-black flex items-center gap-1.5 uppercase text-amber-500">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Stage 1 Foundation Gate</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-amber-500/15 text-amber-500">
                    {learnedKanaCount}/164 Kana
                  </span>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  Lessons, Words &amp; Drills
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">
                  Course Lessons, Vocabulary Words, Sentence Drills, and Practice Drills unlock after all 164 Kana are mastered.
                </p>
                <div className="space-y-1 pt-1">
                  <div className="flex justify-between text-[10px] font-mono font-bold text-slate-400">
                    <span>Kana Progress</span>
                    <span className="text-[#FF5E3A]">{Math.round((learnedKanaCount / 164) * 100)}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-400 to-[#FF5E3A] rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(100, Math.round((learnedKanaCount / 164) * 100))}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 mt-2 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => onNavigateTab?.(totalLearnedHiragana < 82 ? 'hiragana' : 'katakana')}
                  className="px-2.5 py-1 rounded-lg bg-[#FF5E3A] text-white text-[11px] font-bold font-mono transition cursor-pointer"
                >
                  Learn Kana →
                </button>
                <button
                  type="button"
                  onClick={() => {
                    audio.playSuccess();
                    learnedStore.markAllKanaLearned();
                    studyScheduleStore.setSkipKana(true);
                  }}
                  className="text-[10px] font-bold text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition cursor-pointer underline decoration-dotted"
                >
                  Skip (Know Kana)
                </button>
              </div>
            </div>
          ) : (
            <>
          {/* Card 3: All Lessons */}
          <div
            onClick={() => onNavigateTab?.('courses', 'course-n5')}
            className={`p-4 rounded-2xl border transition cursor-pointer flex flex-col justify-between group hover:shadow-md ${isDark ? 'bg-slate-900/60 border-slate-800 hover:border-sky-500' : 'bg-orange-50/30 border-slate-200 hover:border-sky-500'
              }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-black flex items-center gap-1.5 uppercase text-sky-400">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Course Lessons</span>
                </span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-sky-500/15 text-sky-400">
                  25 Units
                </span>
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                Lesson
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                Grammar notes, dialogues & quizzes.
              </p>
            </div>
            <div className="pt-3 text-[11px] font-bold text-sky-400 group-hover:translate-x-0.5 transition-transform flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 mt-2">
              <span>Open Lesson</span>
              <span>→</span>
            </div>
          </div>

          {/* Card 4: All Words */}
          <div
            onClick={() => onNavigateTab?.('words')}
            className={`p-4 rounded-2xl border transition cursor-pointer flex flex-col justify-between group hover:shadow-md ${isDark ? 'bg-slate-900/60 border-slate-800 hover:border-indigo-500' : 'bg-orange-50/30 border-slate-200 hover:border-indigo-500'
              }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-black flex items-center gap-1.5 uppercase text-indigo-400">
                  <BookA className="w-3.5 h-3.5" />
                  <span>Words</span>
                </span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-indigo-500/15 text-indigo-400">
                  {totalLearnedWords}/805
                </span>
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                Vocabulary
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                N5 vocabulary with romaji & audio.
              </p>
            </div>
            <div className="pt-3 text-[11px] font-bold text-indigo-400 group-hover:translate-x-0.5 transition-transform flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 mt-2">
              <span>Study Words</span>
              <span>→</span>
            </div>
          </div>

          {/* Card 5: All-Sentence Practice Drill */}
          <div
            onClick={() => {
              audio.playClick();
              setShowDailyQuizModal(true);
            }}
            className={`p-4 rounded-2xl border transition cursor-pointer flex flex-col justify-between group hover:shadow-md ${isDark ? 'bg-slate-900/60 border-slate-800 hover:border-[#FF5E3A]' : 'bg-orange-50/30 border-slate-200 hover:border-[#FF5E3A]'
              }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-black flex items-center gap-1.5 uppercase text-[#FF5E3A]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Sentence</span>
                </span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-[#FF5E3A]/15 text-[#FF5E3A]">
                  3,000 Pool
                </span>
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                Sentence Drill
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                Contextual sentences & particles.
              </p>
            </div>
            <div className="pt-3 text-[11px] font-bold text-[#FF5E3A] group-hover:translate-x-0.5 transition-transform flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 mt-2">
              <span>Sentence Drill</span>
              <span>→</span>
            </div>
          </div>

          {/* Card 6: All-Unit Practice Drills */}
          <div
            onClick={() => {
              audio.playClick();
              onNavigateTab?.('quizzes');
            }}
            className={`p-4 rounded-2xl border transition cursor-pointer flex flex-col justify-between group hover:shadow-md ${isDark ? 'bg-slate-900/60 border-slate-800 hover:border-amber-500' : 'bg-orange-50/30 border-slate-200 hover:border-amber-500'
              }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-black flex items-center gap-1.5 uppercase text-amber-500">
                  <Puzzle className="w-3.5 h-3.5" />
                  <span>Practice Drills</span>
                </span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-amber-500/15 text-amber-500">
                  100 Drills
                </span>
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                Unit Practice
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                Curriculum interactive drills & puzzles.
              </p>
            </div>
            <div className="pt-3 text-[11px] font-bold text-amber-500 group-hover:translate-x-0.5 transition-transform flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 mt-2">
              <span>Explore Drills</span>
              <span>→</span>
            </div>
          </div>

          {/* Card 7: Daily Mastery Test (at the End) */}
          <div
            onClick={handleOpenDailyMastery}
            className={`p-4 rounded-2xl border transition cursor-pointer flex flex-col justify-between group hover:shadow-md ${
              isAllStudyTargetsDone
                ? isDark ? 'bg-slate-900/60 border-slate-800 hover:border-emerald-400' : 'bg-orange-50/30 border-slate-200 hover:border-emerald-500'
                : 'opacity-70 hover:opacity-100 bg-slate-100/40 dark:bg-slate-900/30 border-slate-200 dark:border-slate-800'
            }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className={`text-[11px] font-mono font-black flex items-center gap-1.5 uppercase ${isAllStudyTargetsDone ? 'text-emerald-400' : 'text-slate-400'}`}>
                  {isAllStudyTargetsDone ? <Flame className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5 text-amber-500" />}
                  <span>Daily Mastery Test</span>
                </span>
                <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold ${
                  isAllStudyTargetsDone ? 'bg-emerald-500/15 text-emerald-400' : 'bg-amber-500/15 text-amber-500'
                }`}>
                  {isAllStudyTargetsDone ? 'Ready' : 'Locked'}
                </span>
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                Day {currentDay} Mastery Test
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                {isAllStudyTargetsDone 
                  ? "Comprehensive test covering all today's items."
                  : 'Complete tasks 1–6 to unlock today\'s mastery exam.'}
              </p>
            </div>
            <div className={`pt-3 text-[11px] font-bold group-hover:translate-x-0.5 transition-transform flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 mt-2 ${
              isAllStudyTargetsDone ? 'text-emerald-400' : 'text-slate-400'
            }`}>
              <span>{isAllStudyTargetsDone ? 'Start Test' : '🔒 Locked (Finish Tasks)'}</span>
              <span>→</span>
            </div>
          </div>
          </>
          )}
        </div>

        {/* Modals */}
        <DailySentenceQuizModal
          isOpen={showDailyQuizModal}
          onClose={() => setShowDailyQuizModal(false)}
          day={1}
          theme={theme}
          onGainXp={onGainXp}
        />
        <DailyMasteryDrillModal
          isOpen={showDailyMasteryModal}
          onClose={() => setShowDailyMasteryModal(false)}
          day={1}
          theme={theme}
          onGainXp={onGainXp}
        />
        <FullStudyPlanModal
          isOpen={showFullPlanModal}
          onClose={() => setShowFullPlanModal(false)}
          theme={theme}
          onNavigateTab={onNavigateTab}
        />

        {/* Footer info */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Unlock className="w-3.5 h-3.5 text-emerald-500" />
            <span className="font-semibold text-slate-700 dark:text-slate-300">All Access Mode Active</span>
            <span>— Unrestricted library access. Select 60, 90, or 120 Days above anytime to return to a daily pace.</span>
          </div>
        </div>
      </div>
    );
  }

  // Variant === 'full' (Hero/Overview Widget) - Dynamic Custom or Standard Duration
  const totalDaysCount = typeof targetDays === 'number' ? targetDays : (targetDays === 'ALL' ? 60 : 60);
  const progressPercent = totalDaysCount > 0 ? Math.round((currentDay / totalDaysCount) * 100) : 0;

  return (
    <div className={`p-4 sm:p-7 rounded-2xl sm:rounded-3xl border ${cardBg} shadow-sm space-y-5 sm:space-y-6 relative`}>
      {/* Top Banner: Title + Duration Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <div className="w-7 h-7 rounded-xl bg-orange-500/15 text-[#FF5E3A] flex items-center justify-center font-bold">
              <Calendar className="w-4 h-4" />
            </div>
            <h3 className="text-lg sm:text-xl font-black font-heading">
              JLPT N5 Daily Study Plan
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-orange-500/15 text-[#FF5E3A] border border-orange-500/25">
              Day {currentDay} of {totalDaysCount}
            </span>
            {isCustomActive && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-orange-500/10 text-[#FF5E3A] border border-orange-500/20 flex items-center gap-1">
                <Sliders className="w-2.5 h-2.5" />
                Custom Pace ({totalDaysCount} Days)
              </span>
            )}
          </div>
          <p className="text-xs text-slate-400">
            Curriculum materials unlock day-by-day in your Kana, Kanji, Words tables, and course lessons.
          </p>
        </div>

        {/* Schedule Selector: Matching Website Pill Theme */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-white dark:bg-[#17171C] border border-slate-200/80 dark:border-slate-800 shadow-xs self-stretch sm:self-auto overflow-x-auto no-scrollbar touch-pan-x whitespace-nowrap shrink-0">
          {([60, 90, 120] as ScheduleDuration[]).map(d => (
            <button
              key={d}
              onClick={() => handleSelectDays(d)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition cursor-pointer flex items-center gap-1.5 shrink-0 ${!isCustomActive && targetDays === d
                  ? 'bg-[#1A1A1F] text-white dark:bg-white dark:text-[#1A1A1F] shadow-xs'
                  : 'text-slate-500 hover:text-[#FF5E3A]'
                }`}
            >
              <span>{d} Days</span>
            </button>
          ))}
          <button
            onClick={() => handleSelectDays('ALL')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition cursor-pointer flex items-center gap-1.5 shrink-0 ${studyScheduleStore.isAllUnlocked()
                ? 'bg-emerald-500 text-white shadow-xs'
                : 'text-slate-500 hover:text-emerald-500'
              }`}
            title="Unlock all curriculum without day locks"
          >
            <span>All Access</span>
          </button>
          <button
            onClick={() => {
              audio.playClick();
              setShowCustomizeModal(true);
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition cursor-pointer flex items-center gap-1.5 shrink-0 ${isCustomActive
                ? 'bg-[#FF5E3A] text-white shadow-xs shadow-orange-500/20'
                : 'text-slate-500 hover:text-[#FF5E3A]'
              }`}
            title="Customize personal targets: Kana, Kanji, Words, Sessions & Sentences"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>{isCustomActive ? `Custom (${totalDaysCount}d)` : 'Customize'}</span>
            {isCustomActive && (
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            )}
          </button>
        </div>
      </div>

      {/* Progress Bars + Day Stepper */}
      <div className="space-y-3">
        {/* Row: Day stepper + Complete button */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-slate-400">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handlePrevDay}
              disabled={currentDay <= 1}
              className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-[#FF5E3A] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-sm text-[#FF5E3A] font-black">
              Day {currentDay}
            </span>
            <div className="relative flex items-center">
              <button
                onClick={handleNextDay}
                disabled={currentDay >= totalDaysCount}
                title={
                  !isAllTodayDone && dayPct < 100
                    ? `Complete Day ${currentDay} tasks to unlock Day ${currentDay + 1}`
                    : `Day ${currentDay} Complete! Click to advance to Day ${currentDay + 1}`
                }
                className={`p-1.5 rounded-xl border transition cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed ${isAllTodayDone || dayPct === 100
                    ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 shadow-xs'
                    : 'border-slate-200 dark:border-slate-800 text-slate-400 hover:border-amber-500 hover:text-amber-500'
                  }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Warning popup when clicking arrow without completing */}
              {lockedWarning && (
                <div className="absolute left-0 top-10 z-50 whitespace-nowrap px-3 py-1.5 rounded-xl bg-amber-500 text-white font-bold text-xs shadow-xl animate-in fade-in zoom-in-95 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                  <span>{lockedWarning}</span>
                </div>
              )}
            </div>

            {/* Status indicator: Completed vs In-Progress */}
            {isAllTodayDone || dayPct === 100 ? (
              <span className="ml-1 px-2.5 py-1 rounded-xl text-[11px] font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Day {currentDay} Done · Click → for Day {currentDay + 1}</span>
              </span>
            ) : (
              <span className="ml-1 text-[11px] font-semibold text-slate-400 hidden sm:inline">
                Complete Day {currentDay} to unlock Day {currentDay + 1}
              </span>
            )}

            {/* Quick Reset to Day 1 (visible if currentDay > 1) */}
            {currentDay > 1 && (
              <button
                onClick={() => {
                  audio.playClick();
                  studyScheduleStore.resetToDay1();
                }}
                title="Restart your study plan from Day 1 today"
                className="px-2 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-[#FF5E3A] hover:border-orange-500/30 hover:bg-orange-500/5 transition cursor-pointer flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset to Day 1</span>
              </button>
            )}
          </div>
        </div>

        {/* Bar 1: Today's Day Completion */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full inline-block ${dayPct === 100 ? 'bg-emerald-500 animate-pulse' : 'bg-[#FF5E3A]'}`} />
              Day {currentDay} Completion
            </span>
            <span className={`font-mono font-bold ${dayPct === 100 ? 'text-emerald-500' : 'text-[#FF5E3A]'}`}>
              {dayPct === 100 ? (
                `✓ ${totalTasks}/${totalTasks} tasks · 100%`
              ) : (
                `${doneTasks}/${totalTasks} tasks ${drillAttended > 0 && !isDailyQuizDone ? `(${drillAttended}/${drillTotal} drill)` : ''} · ${dayPct}%`
              )}
            </span>
          </div>
          <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${dayPct === 100
                  ? 'bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 shadow-sm shadow-emerald-500/50'
                  : 'bg-gradient-to-r from-orange-400 to-[#FF5E3A]'
                }`}
              style={{ width: `${dayPct}%` }}
            />
          </div>
        </div>

        {/* Bar 2: Overall Schedule Progress */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              Overall Schedule
            </span>
            <span className="font-mono font-bold text-emerald-500">Day {currentDay} of {totalDaysCount} · {progressPercent}%</span>
          </div>
          <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>


      {/* Interactive Daily Mastery Drill Ready Notification Banner (Only after all Kana are completed) */}
      {isAllKanaCompleted && isAllStudyTargetsDone && !isQuizOfTheDayDone && (
        <div className="mb-3.5 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-emerald-500/15 via-sky-500/15 to-indigo-500/15 border-2 border-emerald-500/40 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md animate-pulse">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black text-lg shadow-sm flex-shrink-0">
              ⚡
            </div>
            <div>
              <h4 className="font-extrabold text-emerald-400 text-sm flex items-center gap-1.5">
                <span>All Day {currentDay} Targets Completed!</span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">Daily Mastery Test Ready</span>
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Test 100% of today's Kana, Kanji, Lesson, Words & Sentences with the Daily Mastery Test.
              </p>
            </div>
          </div>
          <button
            onClick={handleOpenDailyMastery}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all flex items-center justify-center gap-1.5 flex-shrink-0 border-b-2 border-emerald-700 cursor-pointer"
          >
            <span>Start Daily Mastery Test</span>
            <span>→</span>
          </button>
        </div>
      )}

      {/* Stage 1 Daily Completion Banner (When today's Kana & Kanji are finished) */}
      {!isAllKanaCompleted && isKanaDone && isKanjiDone && (
        <div className="mb-3.5 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-orange-500/15 via-amber-500/15 to-emerald-500/15 border-2 border-orange-500/40 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="w-10 h-10 rounded-xl bg-[#FF5E3A] text-white flex items-center justify-center font-black text-lg shadow-sm flex-shrink-0">
              🎌
            </div>
            <div>
              <h4 className="font-extrabold text-[#FF5E3A] text-sm flex items-center gap-1.5">
                <span>Day {currentDay} Kana &amp; Kanji Targets Completed!</span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-orange-500/20 text-[#FF5E3A] font-bold">
                  {learnedKanaCount}/164 Kana
                </span>
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Great job! Once all 164 Kana are mastered, your full JLPT N5 curriculum (Lessons, Words, Sentence Drills) will unlock here.
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigateTab?.(totalLearnedHiragana < 82 ? 'hiragana' : 'katakana')}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF7B5C] to-[#FF5E3A] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all flex items-center justify-center gap-1.5 flex-shrink-0 cursor-pointer"
          >
            <span>Learn More Kana ({learnedKanaCount}/164)</span>
            <span>→</span>
          </button>
        </div>
      )}

      {/* Cards Header with Scroll Navigators */}
      <div className="flex items-center justify-between pt-1 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-black uppercase font-heading tracking-wider text-slate-400">
            {!isAllKanaCompleted ? 'Stage 1 Priority: Kana & Kanji' : "Today's 7 Study & Quiz Targets"}
          </span>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
            !isAllKanaCompleted
              ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
              : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
          }`}>
            {!isAllKanaCompleted
              ? `${learnedKanaCount}/164 Kana Mastered · Kanji Unlocked from Day 1`
              : 'Kana Mastered ✓ Full Curriculum Unlocked'}
          </span>
        </div>
        {isAllKanaCompleted && (
          <div className="flex items-center gap-1.5 text-xs">
            <button
              onClick={() => cardsScrollRef.current?.scrollBy({ left: -260, behavior: 'smooth' })}
              className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-[#FF5E3A] text-slate-400 hover:text-[#FF5E3A] transition cursor-pointer"
              title="Scroll targets left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => cardsScrollRef.current?.scrollBy({ left: 260, behavior: 'smooth' })}
              className="px-2.5 py-1.5 rounded-xl border border-orange-500/30 bg-orange-500/10 hover:bg-orange-500/20 text-[#FF5E3A] font-bold text-[11px] transition cursor-pointer flex items-center gap-1 shadow-xs"
              title="Scroll to view Quizzes &amp; Drills"
            >
              <span>Quizzes &amp; Tests</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Today's Unlocked Study Targets (7 Cards) in Exact Sequence: Kana -> Kanji -> Lesson -> Words -> Unit Practice -> Sentence Drill -> Quiz of the Day */}
      <div ref={cardsScrollRef} className="flex gap-3.5 overflow-x-auto pb-3 pt-1 scrollbar-thin snap-x scroll-smooth -mx-1 px-1">

        {/* 1. Hiragana */}
        <div
          onClick={() => onNavigateTab?.('hiragana')}
          className={`w-[240px] sm:w-[250px] shrink-0 snap-start p-3.5 sm:p-4 rounded-2xl border transition cursor-pointer flex flex-col justify-between group overflow-hidden ${hiraganaStyle.card}`}
        >
          <div className="space-y-2.5 min-w-0">
            <div className="flex items-center justify-between gap-1.5 min-w-0">
              <span className={`text-xs font-bold tracking-tight flex items-center gap-1.5 min-w-0 whitespace-nowrap ${hiraganaStyle.text}`}>
                <Languages className="w-3.5 h-3.5 shrink-0" />
                <span>Hiragana (ひらがな)</span>
              </span>
              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  title="Reset today's Hiragana"
                  onClick={(e) => {
                    e.stopPropagation();
                    audio.playClick();
                    learnedStore.resetKanaForDay(targets.hiragana);
                  }}
                  className="p-1 rounded-md text-slate-400 hover:text-amber-500 hover:bg-amber-500/10 transition cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono font-bold shrink-0 whitespace-nowrap ${hiraganaStyle.badge}`}>
                  {targets.hiragana.length > 0
                    ? (hiraganaStatus === 'done'
                        ? '✓ Done'
                        : hiraganaStatus === 'progress'
                          ? `${completedHiraganaCount}/${targets.hiraganaCount}`
                          : `0/${targets.hiraganaCount}`)
                    : '✓ Up to Date'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 flex-wrap min-h-[36px]">
              {targets.hiragana.length > 0 ? (
                targets.hiragana.slice(0, 8).map(k => {
                  const learned = learnedStore.isKanaLearned(k.char);
                  return (
                    <span
                      key={k.char}
                      className={`w-7 h-7 rounded-lg border flex items-center justify-center font-jp font-black text-sm transition-all ${learned
                          ? 'bg-emerald-500 text-white border-emerald-600 shadow-xs'
                          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400'
                        }`}
                      title={k.romaji}
                    >
                      {k.char}
                    </span>
                  );
                })
              ) : (
                <span className="text-xs text-slate-400 italic">Hiragana review &amp; practice</span>
              )}
              {targets.hiragana.length > 8 && (
                <span className="text-[10px] font-mono font-bold text-slate-400">+{targets.hiragana.length - 8} more</span>
              )}
            </div>
          </div>

          <div className={`pt-2 text-[11px] font-bold group-hover:translate-x-0.5 transition-transform flex items-center justify-between min-w-0 ${hiraganaStyle.text}`}>
            <span>
              {hiraganaStatus === 'done'
                ? '✓ Completed'
                : targets.hiragana.length > 0
                ? 'Study Hiragana'
                : 'Review Hiragana'}
            </span>
            <span className="shrink-0 ml-1">→</span>
          </div>
        </div>

        {/* 2. Katakana */}
        <div
          onClick={() => onNavigateTab?.('katakana')}
          className={`w-[240px] sm:w-[250px] shrink-0 snap-start p-3.5 sm:p-4 rounded-2xl border transition cursor-pointer flex flex-col justify-between group overflow-hidden ${katakanaStyle.card}`}
        >
          <div className="space-y-2.5 min-w-0">
            <div className="flex items-center justify-between gap-1.5 min-w-0">
              <span className={`text-xs font-bold tracking-tight flex items-center gap-1.5 min-w-0 whitespace-nowrap ${katakanaStyle.text}`}>
                <Languages className="w-3.5 h-3.5 shrink-0 text-pink-500" />
                <span>Katakana (カタカナ)</span>
              </span>
              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  title="Reset today's Katakana"
                  onClick={(e) => {
                    e.stopPropagation();
                    audio.playClick();
                    learnedStore.resetKanaForDay(targets.katakana);
                  }}
                  className="p-1 rounded-md text-slate-400 hover:text-amber-500 hover:bg-amber-500/10 transition cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono font-bold shrink-0 whitespace-nowrap ${katakanaStyle.badge}`}>
                  {targets.katakana.length > 0
                    ? (katakanaStatus === 'done'
                        ? '✓ Done'
                        : katakanaStatus === 'progress'
                          ? `${completedKatakanaCount}/${targets.katakanaCount}`
                          : `0/${targets.katakanaCount}`)
                    : '✓ Up to Date'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 flex-wrap min-h-[36px]">
              {targets.katakana.length > 0 ? (
                targets.katakana.slice(0, 8).map(k => {
                  const learned = learnedStore.isKanaLearned(k.char);
                  return (
                    <span
                      key={k.char}
                      className={`w-7 h-7 rounded-lg border flex items-center justify-center font-jp font-black text-sm transition-all ${learned
                          ? 'bg-emerald-500 text-white border-emerald-600 shadow-xs'
                          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400'
                        }`}
                      title={k.romaji}
                    >
                      {k.char}
                    </span>
                  );
                })
              ) : (
                <span className="text-xs text-slate-400 italic">Katakana review &amp; practice</span>
              )}
              {targets.katakana.length > 8 && (
                <span className="text-[10px] font-mono font-bold text-slate-400">+{targets.katakana.length - 8} more</span>
              )}
            </div>
          </div>

          <div className={`pt-2 text-[11px] font-bold group-hover:translate-x-0.5 transition-transform flex items-center justify-between min-w-0 ${katakanaStyle.text}`}>
            <span>
              {katakanaStatus === 'done'
                ? '✓ Completed'
                : targets.katakana.length > 0
                ? 'Study Katakana'
                : 'Review Katakana'}
            </span>
            <span className="shrink-0 ml-1">→</span>
          </div>
        </div>

        {/* 3. Kanji */}
        <div
          onClick={() => onNavigateTab?.('kanji')}
          className={`w-[240px] sm:w-[250px] shrink-0 snap-start p-3.5 sm:p-4 rounded-2xl border transition cursor-pointer flex flex-col justify-between group overflow-hidden ${kanjiStyle.card}`}
        >
          <div className="space-y-2.5 min-w-0">
            <div className="flex items-center justify-between gap-1.5 min-w-0">
              <span className={`text-xs font-bold tracking-tight flex items-center gap-1.5 min-w-0 whitespace-nowrap ${kanjiStyle.text}`}>
                <BookMarked className="w-3.5 h-3.5 shrink-0" />
                <span>Kanji</span>
              </span>
              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  title="Reset today's Kanji"
                  onClick={(e) => {
                    e.stopPropagation();
                    audio.playClick();
                    learnedStore.resetKanjiForDay(targets.kanji.length > 0 ? targets.kanji : unlockedKanjiList);
                  }}
                  className="p-1 rounded-md text-slate-400 hover:text-amber-500 hover:bg-amber-500/10 transition cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono font-bold shrink-0 whitespace-nowrap ${kanjiStyle.badge}`}>
                  {targets.kanji.length > 0
                    ? (kanjiStatus === 'done'
                        ? '✓ Done'
                        : kanjiStatus === 'progress'
                          ? `${completedKanjiCount}/${targets.kanjiCount}`
                          : `0/${targets.kanjiCount}`)
                    : (allUnlockedKanjiDone
                        ? '✓ Up to Date'
                        : `${learnedUnlockedKanjiCount}/${unlockedKanjiList.length}`)}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 flex-wrap min-h-[36px]">
              {targets.kanji.length > 0 ? (
                targets.kanji.slice(0, 6).map(k => {
                  const learned = learnedStore.isKanjiLearned(k.char);
                  return (
                    <span
                      key={k.char}
                      className={`w-7 h-7 rounded-lg border flex items-center justify-center font-jp font-black text-sm transition-all ${learned
                          ? 'bg-emerald-500 text-white border-emerald-600 shadow-xs'
                          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400'
                        }`}
                      title={k.meaning}
                    >
                      {k.char}
                    </span>
                  );
                })
              ) : (
                <span className="text-xs text-slate-400 italic">Kanji review & practice</span>
              )}
              {targets.kanji.length > 6 && (
                <span className="text-[10px] font-mono font-bold text-slate-400">+{targets.kanji.length - 6} more</span>
              )}
            </div>
          </div>

          <div className={`pt-2 text-[11px] font-bold group-hover:translate-x-0.5 transition-transform flex items-center justify-between min-w-0 ${kanjiStyle.text}`}>
            <span>
              {kanjiStatus === 'done'
                ? '✓ Completed'
                : targets.kanji.length > 0
                ? 'Study Kanji'
                : 'Review Kanji'}
            </span>
            <span className="shrink-0 ml-1">→</span>
          </div>
        </div>

        {/* If Kana is NOT yet completed: Show Stage 1 Foundation Gate Card */}
        {!isAllKanaCompleted ? (
          <div
            className={`w-[280px] sm:w-[350px] shrink-0 snap-start p-3.5 sm:p-4 rounded-2xl border transition flex flex-col justify-between group overflow-hidden ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-orange-50/40 border-orange-200/60 shadow-xs'
            }`}
          >
            <div className="space-y-2.5 min-w-0">
              <div className="flex items-center justify-between gap-1.5 min-w-0">
                <span className="text-xs font-bold tracking-tight flex items-center gap-1.5 text-amber-500 uppercase font-mono">
                  <Lock className="w-3.5 h-3.5 shrink-0" />
                  <span>Stage 1 Foundation Gate</span>
                </span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-amber-500/15 text-amber-500 shrink-0">
                  {learnedKanaCount}/164 Kana
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  Lessons, Words &amp; Drills
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Course Lessons, Vocabulary Words, Sentence Drills, and Practice Drills unlock after all 164 Kana are mastered. Kanji is active from Day 1!
                </p>
              </div>

              <div className="space-y-1 pt-1">
                <div className="flex justify-between text-[10px] font-mono font-bold text-slate-400">
                  <span>Kana Mastery Progress</span>
                  <span className="text-[#FF5E3A]">{Math.round((learnedKanaCount / 164) * 100)}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-400 to-[#FF5E3A] rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, Math.round((learnedKanaCount / 164) * 100))}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 mt-2 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => onNavigateTab?.(totalLearnedHiragana < 82 ? 'hiragana' : 'katakana')}
                className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#FF7B5C] to-[#FF5E3A] text-white text-xs font-bold font-mono transition cursor-pointer flex items-center gap-1 shadow-xs hover:shadow-md"
              >
                <span>Learn Kana</span>
                <span>→</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  audio.playSuccess();
                  learnedStore.markAllKanaLearned();
                  studyScheduleStore.setSkipKana(true);
                }}
                className="text-[11px] font-bold text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition cursor-pointer underline decoration-dotted"
                title="Mark all 164 Kana as learned if you already know them"
              >
                Skip (Already Know Kana)
              </button>
            </div>
          </div>
        ) : (
          <>
        {/* 3. Lesson */}
        <div
          onClick={() => {
            if (targets.lessonId) {
              onNavigateTab?.('lessons', targets.lessonId);
            } else if (unfinishedUnlockedLesson) {
              onNavigateTab?.('lessons', unfinishedUnlockedLesson);
            } else {
              const latestUnlocked = unlockedLessonIds[unlockedLessonIds.length - 1];
              if (latestUnlocked) {
                onNavigateTab?.('lessons', latestUnlocked);
              } else {
                onNavigateTab?.('courses', 'course-n5');
              }
            }
          }}
          className={`w-[240px] sm:w-[250px] shrink-0 snap-start p-3.5 sm:p-4 rounded-2xl border transition cursor-pointer flex flex-col justify-between group overflow-hidden ${lessonStyle.card}`}
        >
          <div className="space-y-2.5 min-w-0">
            <div className="flex items-center justify-between gap-1.5 min-w-0">
              <span className={`text-xs font-bold tracking-tight flex items-center gap-1.5 min-w-0 whitespace-nowrap ${lessonStyle.text}`}>
                <BookOpen className="w-3.5 h-3.5 shrink-0" />
                <span>Lesson</span>
              </span>
              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  title="Reset today's Lesson"
                  onClick={(e) => {
                    e.stopPropagation();
                    audio.playClick();
                    learnedStore.resetLessonForDay(targets.lessonId || unfinishedUnlockedLesson || 'lesson-n5-1');
                  }}
                  className="p-1 rounded-md text-slate-400 hover:text-amber-500 hover:bg-amber-500/10 transition cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono font-bold shrink-0 whitespace-nowrap ${lessonStyle.badge}`}>
                  {targets.lessonId
                    ? (isTodayLessonDone ? '✓ Done' : 'To Do')
                    : (allUnlockedLessonsDone ? '✓ Up to Date' : 'Catch Up')}
                </span>
              </div>
            </div>

            <div className="text-xs font-bold truncate">
              {targets.lessonId ? (
                <span>JLPT N5 Lesson {targets.lessonId.replace('lesson-n5-', '')}</span>
              ) : allUnlockedLessonsDone ? (
                <span>All Lessons Up to Date</span>
              ) : (
                <span className="text-amber-400 font-semibold">
                  Pending: {unfinishedUnlockedLesson ? unfinishedUnlockedLesson.replace('lesson-n5-', 'Lesson ') : 'Previous Lesson'}
                </span>
              )}
            </div>
            <div className="text-[11px] text-slate-400 truncate">
              {targets.lessonId
                ? 'Grammar notes, dialogue & particles'
                : nextLessonInfo
                ? `Next lesson unlocks on Day ${nextLessonInfo.day}`
                : 'All JLPT N5 lessons completed!'}
            </div>
          </div>

          <div className={`pt-2 text-[11px] font-bold group-hover:translate-x-0.5 transition-transform flex items-center justify-between min-w-0 ${lessonStyle.text}`}>
            <span>
              {targets.lessonId
                ? (isTodayLessonDone ? '✓ Completed' : 'Open Lesson')
                : (allUnlockedLessonsDone ? '✓ Review Lessons' : 'Finish Lesson')}
            </span>
            <span className="shrink-0 ml-1">→</span>
          </div>
        </div>

        {/* 4. Words */}
        <div
          onClick={() => onNavigateTab?.('words')}
          className={`w-[240px] sm:w-[250px] shrink-0 snap-start p-3.5 sm:p-4 rounded-2xl border transition cursor-pointer flex flex-col justify-between group overflow-hidden ${wordsStyle.card}`}
        >
          <div className="space-y-2.5 min-w-0">
            <div className="flex items-center justify-between gap-1.5 min-w-0">
              <span className={`text-xs font-bold tracking-tight flex items-center gap-1.5 min-w-0 whitespace-nowrap ${wordsStyle.text}`}>
                <BookA className="w-3.5 h-3.5 shrink-0" />
                <span>Words</span>
              </span>
              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  title="Reset today's Words"
                  onClick={(e) => {
                    e.stopPropagation();
                    audio.playClick();
                    learnedStore.resetWordsForDay(targets.words.length > 0 ? targets.words : unlockedWordsList);
                  }}
                  className="p-1 rounded-md text-slate-400 hover:text-amber-500 hover:bg-amber-500/10 transition cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono font-bold shrink-0 whitespace-nowrap ${wordsStyle.badge}`}>
                  {targets.words.length > 0
                    ? (wordsStatus === 'done'
                        ? '✓ Done'
                        : wordsStatus === 'progress'
                          ? `${completedWordsCount}/${targets.wordsCount}`
                          : `0/${targets.wordsCount}`)
                    : (allUnlockedWordsDone
                        ? '✓ Up to Date'
                        : `${learnedUnlockedWordsCount}/${unlockedWordsList.length}`)}
                </span>
              </div>
            </div>

            <div className="text-xs text-slate-400 truncate font-jp font-semibold">
              {targets.words.length > 0 ? (
                targets.words.slice(0, 3).map(w => w.word).join(' • ') + (targets.words.length > 3 ? ` +${targets.words.length - 3} more` : '')
              ) : (
                <span>Vocabulary review day</span>
              )}
            </div>
            <div className="text-[11px] text-slate-400 truncate">
              Daily JLPT N5 vocabulary definitions
            </div>
          </div>

          <div className={`pt-2 text-[11px] font-bold group-hover:translate-x-0.5 transition-transform flex items-center justify-between min-w-0 ${wordsStyle.text}`}>
            <span>
              {wordsStatus === 'done'
                ? '✓ Completed'
                : targets.words.length > 0
                ? 'Study Words'
                : 'Review Words'}
            </span>
            <span className="shrink-0 ml-1">→</span>
          </div>
        </div>

        {/* 5. Unit Practice (from Quizzes & Puzzles page) */}
        <div
          onClick={() => {
            audio.playClick();
            onNavigateTab?.('quizzes');
          }}
          className={`w-[240px] sm:w-[250px] shrink-0 snap-start p-3.5 sm:p-4 rounded-2xl border transition cursor-pointer flex flex-col justify-between group overflow-hidden ${unitQuizStyle.card}`}
        >
          <div className="space-y-2.5 min-w-0">
            <div className="flex items-center justify-between gap-1.5 min-w-0">
              <span className={`text-xs font-bold tracking-tight flex items-center gap-1.5 min-w-0 whitespace-nowrap ${unitQuizStyle.text}`}>
                <Puzzle className="w-3.5 h-3.5 shrink-0" />
                <span>Unit Practice</span>
              </span>
              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  title="Reset today's Unit Drills"
                  onClick={(e) => {
                    e.stopPropagation();
                    audio.playClick();
                    learnedStore.resetUnitDrills(todayUnit ? todayUnit.lessons.map(l => l.id) : []);
                  }}
                  className="p-1 rounded-md text-slate-400 hover:text-amber-500 hover:bg-amber-500/10 transition cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono font-bold shrink-0 whitespace-nowrap ${unitQuizStyle.badge}`}>
                  {isDailyQuizDone
                    ? '✓ Done'
                    : completedTodayDrillsCount > 0
                    ? `${completedTodayDrillsCount}/${requiredDrillsCount} Drills`
                    : `${requiredDrillsCount} Drills / day`}
                </span>
              </div>
            </div>

            <div className="text-xs font-bold truncate">
              {todayUnit ? (
                <span>Unit {todayUnit.unitNumber}: {todayUnit.title}</span>
              ) : (
                <span>Unit {currentDay} Practice Drills</span>
              )}
            </div>
            <div className="text-[11px] text-slate-400 truncate">
              {completedTodayDrillsCount > 0
                ? `${completedTodayDrillsCount} of ${requiredDrillsCount} target drills completed`
                : todayUnit
                ? `Target: ${requiredDrillsCount} Practice Drills · ${todayQuestionsCount} Questions (+${todayXpCount} XP)`
                : `Daily Target: ${requiredDrillsCount} Drills / day`}
            </div>
          </div>

          <div className={`pt-2 text-[11px] font-bold group-hover:translate-x-0.5 transition-transform flex items-center justify-between min-w-0 ${unitQuizStyle.text}`}>
            <span>
              {isDailyQuizDone 
                ? '✓ Completed' 
                : completedTodayDrillsCount > 0 
                ? `Continue Drills (${completedTodayDrillsCount}/${requiredDrillsCount})` 
                : 'Start Unit Drills'}
            </span>
            <span className="shrink-0 ml-1">→</span>
          </div>
        </div>

        {/* 6. Sentence Drill */}
        <div
          onClick={() => {
            audio.playClick();
            setShowDailyQuizModal(true);
          }}
          className={`w-[240px] sm:w-[250px] shrink-0 snap-start p-3.5 sm:p-4 rounded-2xl border transition cursor-pointer flex flex-col justify-between group overflow-hidden ${sentenceStyle.card}`}
        >
          <div className="space-y-2.5 min-w-0">
            <div className="flex items-center justify-between gap-1.5 min-w-0">
              <span className={`text-xs font-bold tracking-tight flex items-center gap-1.5 min-w-0 whitespace-nowrap ${sentenceStyle.text}`}>
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>Sentence Drill</span>
              </span>
              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  title="Reset today's Sentence Drill"
                  onClick={(e) => {
                    e.stopPropagation();
                    audio.playClick();
                    learnedStore.resetSentenceDrill(currentDay);
                  }}
                  className="p-1 rounded-md text-slate-400 hover:text-amber-500 hover:bg-amber-500/10 transition cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono font-bold shrink-0 whitespace-nowrap ${sentenceStyle.badge}`}>
                  {sentenceStatus === 'done'
                    ? '✓ Done'
                    : sentenceAttended > 0
                    ? `${sentenceAttended}/${sentenceTotal}`
                    : `${targets.sentencesCount || 50} Tasks`}
                </span>
              </div>
            </div>

            <div className="text-xs font-bold truncate">
              <span>Sentence Practice Drill</span>
            </div>
            <div className="text-[11px] text-slate-400 truncate">
              Contextual sentences & particles in use
            </div>
          </div>

          <div className={`pt-2 text-[11px] font-bold group-hover:translate-x-0.5 transition-transform flex items-center justify-between min-w-0 ${sentenceStyle.text}`}>
            <span>
              {sentenceStatus === 'done'
                ? '✓ Completed'
                : sentenceAttended > 0
                ? `Continue Drill (${sentenceAttended}/${sentenceTotal})`
                : 'Sentence Drill'}
            </span>
            <span className="shrink-0 ml-1">→</span>
          </div>
        </div>

        {/* 7. Daily Mastery Test (at the End - Locked until Tasks 1-6 are Done) */}
        <div
          onClick={handleOpenDailyMastery}
          className={`w-[240px] sm:w-[250px] shrink-0 snap-start p-3.5 sm:p-4 rounded-2xl border transition cursor-pointer flex flex-col justify-between group overflow-hidden ${
            isAllStudyTargetsDone && !isQuizOfTheDayDone
              ? 'ring-2 ring-emerald-500 bg-emerald-950/20 border-emerald-500/60 shadow-lg'
              : !isAllStudyTargetsDone
              ? 'opacity-70 hover:opacity-100 bg-slate-100/40 dark:bg-slate-900/30 border-slate-200 dark:border-slate-800'
              : quizStyle.card
          }`}
        >
          <div className="space-y-2.5 min-w-0">
            <div className="flex items-center justify-between gap-1.5 min-w-0">
              <span className={`text-xs font-bold tracking-tight flex items-center gap-1.5 min-w-0 whitespace-nowrap ${
                isAllStudyTargetsDone ? quizStyle.text : 'text-slate-400'
              }`}>
                {isAllStudyTargetsDone ? <Flame className="w-3.5 h-3.5 shrink-0" /> : <Lock className="w-3.5 h-3.5 shrink-0 text-amber-500" />}
                <span>Daily Mastery Test</span>
              </span>
              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  title="Reset today's Daily Mastery Test"
                  onClick={(e) => {
                    e.stopPropagation();
                    audio.playClick();
                    learnedStore.resetDailyMastery(currentDay);
                  }}
                  className="p-1 rounded-md text-slate-400 hover:text-amber-500 hover:bg-amber-500/10 transition cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono font-bold shrink-0 whitespace-nowrap ${
                  quizStatus === 'done'
                    ? 'bg-emerald-500/15 text-emerald-500'
                    : isAllStudyTargetsDone
                    ? 'bg-emerald-500 text-white animate-pulse'
                    : 'bg-amber-500/15 text-amber-500 border border-amber-500/30'
                }`}>
                  {quizStatus === 'done'
                    ? '✓ Mastered'
                    : isAllStudyTargetsDone
                      ? '⚡ Ready!'
                      : '🔒 Locked'}
                </span>
              </div>
            </div>

            <div className="text-xs font-bold truncate">
              {quizStatus === 'done' ? (
                <span className="text-emerald-500 font-jp">Day {currentDay} 100% Mastered!</span>
              ) : isAllStudyTargetsDone ? (
                <span className="text-emerald-400 font-bold">Mastery Test Ready</span>
              ) : (
                <span className="text-slate-600 dark:text-slate-300 font-bold flex items-center gap-1">
                  <span>Day {currentDay} Mastery Test</span>
                </span>
              )}
            </div>
            <div className="text-[11px] text-slate-400 truncate">
              {quizStatus === 'done'
                ? 'All learned items completed'
                : isAllStudyTargetsDone
                ? 'Ready to test 100% of today\'s items'
                : `${getIncompleteTasks().length} required tasks remaining`}
            </div>
          </div>

          <div className={`pt-2 text-[11px] font-bold group-hover:translate-x-0.5 transition-transform flex items-center justify-between min-w-0 ${
            isAllStudyTargetsDone ? quizStyle.text : 'text-slate-400'
          }`}>
            <span>
              {quizStatus === 'done' 
                ? '✓ Retake Test' 
                : isAllStudyTargetsDone 
                ? 'Start Mastery Test' 
                : '🔒 Locked (Finish Tasks)'}
            </span>
            <span className="shrink-0 ml-1">→</span>
          </div>
        </div>
          </>
        )}

      </div>

      {/* Locked Mastery Test Modal */}
      {masteryLockedItems && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className={`w-full max-w-md p-6 rounded-3xl border shadow-2xl space-y-4 ${cardBg}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-amber-500">
                <div className="p-2 rounded-xl bg-amber-500/15">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black font-heading">Daily Mastery Test Locked</h3>
              </div>
              <button
                onClick={() => setMasteryLockedItems(null)}
                className="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              The Daily Mastery Test is your end-of-day cumulative exam. You must complete today's required study targets first before unlocking it:
            </p>

            <div className="space-y-2 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20">
              <div className="text-[11px] font-bold uppercase font-mono text-amber-600 dark:text-amber-400">
                Tasks Remaining Today:
              </div>
              <ul className="space-y-1.5 text-xs">
                {masteryLockedItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setMasteryLockedItems(null)}
                className="px-5 py-2.5 rounded-xl bg-[#FF5E3A] hover:bg-[#e04f2c] text-white font-bold text-xs shadow-md shadow-orange-500/20 transition cursor-pointer"
              >
                Got It, Continue Studying
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Daily Mastery Interactive Practice Drill */}
      <DailyMasteryDrillModal
        isOpen={showDailyMasteryModal}
        onClose={() => setShowDailyMasteryModal(false)}
        day={currentDay}
        theme={theme}
        onGainXp={onGainXp}
        onCompleteDay={() => {
          setShowDailyMasteryModal(false);
          setShowCelebrationModal(true);
        }}
      />

      {/* Daily Sentence Quiz Modal */}
      <DailySentenceQuizModal
        isOpen={showDailyQuizModal}
        onClose={() => setShowDailyQuizModal(false)}
        day={currentDay}
        theme={theme}
        onGainXp={onGainXp}
      />

      {/* Day 1 Milestone Celebration Modal */}
      <DayCelebrationModal
        isOpen={showCelebrationModal}
        onClose={() => setShowCelebrationModal(false)}
        day={currentDay}
        theme={theme}
        onAdvanceDay={() => {
          const maxDays = targetDays;
          if (currentDay < maxDays) {
            studyScheduleStore.nextDay();
          }
        }}
        onGainXp={onGainXp}
        stats={{
          kanaCount: targets.kana.length,
          kanjiCount: targets.kanji.length,
          wordsCount: targets.words.length,
          lessonTitle: targets.lessonId
            ? `JLPT N5 Lesson ${targets.lessonId.replace('lesson-n5-', '')}`
            : unlockedLessonIds.length > 0
            ? `JLPT N5 Lesson ${unlockedLessonIds[unlockedLessonIds.length - 1].replace('lesson-n5-', '')}`
            : 'JLPT N5 Lesson 1-1',
          drillScore: completedTodayDrillsCount,
          drillTotal: requiredDrillsCount
        }}
      />

      {/* Customize Plan Modal */}
      <CustomizePlanModal
        isOpen={showCustomizeModal}
        onClose={() => setShowCustomizeModal(false)}
        theme={theme}
      />

      {/* Confirmation Modal when switching away from Custom Pace */}
      {pendingDuration !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className={`w-full max-w-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border ${isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'} space-y-4 sm:space-y-5 animate-in zoom-in-95 duration-150`}>
            <div className="flex items-start gap-3 sm:gap-3.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-amber-500/15 text-amber-500 flex items-center justify-center shrink-0 mt-0.5">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="space-y-1 min-w-0">
                <h4 className="text-base font-black font-heading">
                  Cancel Custom Daily Pace?
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Switching to <strong className="text-slate-700 dark:text-slate-200 font-mono font-bold">{pendingDuration === 'ALL' ? 'All Access Mode' : `${pendingDuration} Days Standard Schedule`}</strong> will cancel your customized daily quotas for Kana, Kanji, Words, Lessons, and Sentences.
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-700 dark:text-amber-400 flex items-start sm:items-center gap-2">
              <span className="font-bold shrink-0">⚠️ Notice:</span>
              <span>Your personal daily pace will be reset to standard curriculum pacing.</span>
            </div>

            <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2 sm:gap-2.5 pt-1">
              <button
                onClick={cancelSwitchDuration}
                className="w-full sm:w-auto px-4 py-2.5 sm:py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer text-center"
              >
                Keep Custom Pace
              </button>
              <button
                onClick={confirmSwitchDuration}
                className="w-full sm:w-auto px-4 py-2.5 sm:py-2 rounded-xl text-xs font-black text-white bg-amber-500 hover:bg-amber-600 shadow-md shadow-amber-500/20 transition cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Yes, Switch to {pendingDuration === 'ALL' ? 'All Access' : `${pendingDuration}d`}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cumulative Milestone Stats Footnote */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs text-slate-400">
        <div className="flex items-center gap-2.5 sm:gap-3.5 flex-wrap">
          <span className="font-semibold text-slate-500 dark:text-slate-400">Unlocked up to Day {currentDay}:</span>
          <span className="font-mono font-bold text-[#FF5E3A]">{cumulative.unlockedKanaCount}/{cumulative.totalKana} Kana</span>
          <span className="font-mono font-bold text-amber-500">{cumulative.unlockedKanjiCount}/{cumulative.totalKanji} Kanji</span>
          <span className="font-mono font-bold text-emerald-500">{cumulative.unlockedWordsCount}/{cumulative.totalWords} Words</span>
          <span className="font-mono font-bold text-sky-500">{cumulative.unlockedLessonsCount}/{cumulative.totalSessions} Lessons</span>
          <span className="font-mono font-bold text-indigo-500">{cumulative.unlockedDrillsCount || Math.min(100, currentDay * targetDrillsCount)}/100 Drills</span>
          <span className="font-mono font-bold text-purple-500">{targets.sentencesCount} Sentences Daily</span>
          <span className="font-mono font-bold text-rose-500">1 Daily Mastery Quiz</span>
        </div>

        <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-400">
          <Sparkles className="w-3.5 h-3.5 text-[#FF5E3A]" />
          <span>All tables and practice quizzes automatically unlock according to your active study day.</span>
        </div>
      </div>

    </div>
  );
};

export default StudyScheduleBar;
