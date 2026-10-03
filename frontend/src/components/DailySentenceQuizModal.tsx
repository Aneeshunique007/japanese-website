import React, { useState, useEffect, useCallback } from 'react';
import { 
  X, 
  Sparkles, 
  Volume2, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Flame, 
  ArrowRight,
  BookOpen,
  Award,
  Unlock
} from 'lucide-react';
import { 
  DailySentenceQuestion, 
  QuestionOption,
  generateDailySentenceQuestions, 
  lookupOptionDetails,
  resolveRomaji
} from '../utils/dailySentenceQuizGenerator';
import { studyScheduleStore } from '../utils/studyScheduleStore';
import { learnedStore } from '../utils/learnedStore';
import audio from '../utils/audio';
import confetti from 'canvas-confetti';
import { api } from '../services/api';
import { clientCache } from '../services/cacheService';

interface DailySentenceQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  day: number;
  theme: 'dark' | 'light';
  onGainXp?: (xp: number) => void;
}

const getDailyDrillCount = () => studyScheduleStore.getSentencesPerDay();
type DrillLength = 'all' | 100 | 50 | 25 | 10;

// Helper to safely extract full options with meanings and romaji from any question
const getQuestionOptions = (q?: DailySentenceQuestion): QuestionOption[] => {
  if (!q) return [];
  const rawList: { text: string; romaji?: string; meaning?: string; baseWord?: string; reading?: string }[] =
    (q.optionsWithRomaji && q.optionsWithRomaji.length > 0)
      ? q.optionsWithRomaji
      : (q.options || []).map(text => ({ text, romaji: resolveRomaji(text, q.category) }));

  return rawList.map(opt => {
    const details = lookupOptionDetails(opt.text, q.category);
    return {
      text: opt.text,
      romaji: opt.romaji || resolveRomaji(opt.text, q.category),
      meaning: (opt.meaning && opt.meaning !== 'Contextual option') ? opt.meaning : details.meaning,
      baseWord: opt.baseWord || details.baseWord,
      reading: opt.reading || details.reading
    };
  });
};

export const DailySentenceQuizModal: React.FC<DailySentenceQuizModalProps> = ({
  isOpen,
  onClose,
  day,
  theme,
  onGainXp
}) => {
  const isAllAccess = studyScheduleStore.isAllUnlocked();
  const [drillLength, setDrillLength] = useState<DrillLength>(isAllAccess ? 'all' : 50);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [questions, setQuestions] = useState<DailySentenceQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [bestStreak, setBestStreak] = useState<number>(0);
  const [incorrectList, setIncorrectList] = useState<{ question: DailySentenceQuestion; chosen: string }[]>([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [showRomaji, setShowRomaji] = useState<boolean>(true);
  // Mastery mode: track which question IDs have been answered correctly at least once
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());
  const [totalOriginal, setTotalOriginal] = useState<number>(0);
  // Repeat-until-correct tracking
  const [repeatCount, setRepeatCount] = useState<number>(0);
  const showExplanation = true;

  const PROGRESS_KEY = isAllAccess ? 'anilearn_drill_progress_all' : `anilearn_drill_progress_day${day}`;

  // Save progress to localStorage after each answer and notify listeners
  const saveProgress = useCallback((
    idx: number, 
    sc: number, 
    st: number, 
    bst: number, 
    qs: DailySentenceQuestion[], 
    incorrects: { question: DailySentenceQuestion; chosen: string }[],
    attended?: number
  ) => {
    try {
      const attendedCount = typeof attended === 'number' ? attended : (idx + 1);
      // Strip optionsWithRomaji when saving to keep JSON lightweight and safe in localStorage
      const lightweightQs = qs.map(q => ({
        id: q.id,
        day: q.day,
        questionNumber: q.questionNumber,
        sentenceWithBlank: q.sentenceWithBlank,
        sentenceRomajiWithBlank: q.sentenceRomajiWithBlank,
        fullSentence: q.fullSentence,
        furigana: q.furigana,
        romaji: q.romaji,
        english: q.english,
        targetWord: q.targetWord,
        targetWordRomaji: q.targetWordRomaji,
        options: q.options,
        correctIndex: q.correctIndex,
        explanation: q.explanation,
        category: q.category
      }));

      localStorage.setItem(PROGRESS_KEY, JSON.stringify({
        currentIndex: idx,
        attendedCount: attendedCount,
        total: qs.length,
        score: sc,
        streak: st,
        bestStreak: bst,
        incorrectList: incorrects,
        questions: lightweightQs,
        savedAt: Date.now()
      }));
      window.dispatchEvent(new CustomEvent('anilearn_learned_update', { 
        detail: { 
          key: isAllAccess ? 'daily_quiz_progress_all' : 'daily_quiz_progress', 
          day, 
          attended: attendedCount 
        } 
      }));
    } catch (e) {
      console.warn('Could not save drill progress to localStorage:', e);
    }
  }, [PROGRESS_KEY, day, isAllAccess]);

  const clearProgress = useCallback(() => {
    try { 
      localStorage.removeItem(PROGRESS_KEY); 
      window.dispatchEvent(new CustomEvent('anilearn_learned_update', { 
        detail: { 
          key: isAllAccess ? 'daily_quiz_progress_all' : 'daily_quiz_progress', 
          day, 
          attended: 0 
        } 
      }));
    } catch {}
  }, [PROGRESS_KEY, day, isAllAccess]);

  // Initialize questions — restore saved progress if available
  const initQuestions = useCallback((forceNew = false, customLength?: DrillLength) => {
    const targetLength = customLength ?? drillLength;
    if (!forceNew) {
      try {
        const saved = localStorage.getItem(PROGRESS_KEY);
        if (saved) {
          const p = JSON.parse(saved);
          if (p.questions?.length && Date.now() - p.savedAt < 86400000) {
            const rehydrated = p.questions.map((q: DailySentenceQuestion) => ({
              ...q,
              optionsWithRomaji: getQuestionOptions(q)
            }));
            setQuestions(rehydrated);
            setCurrentIndex(p.currentIndex);
            setScore(p.score);
            setStreak(p.streak);
            setBestStreak(p.bestStreak);
            setIncorrectList(p.incorrectList || []);
            setSelectedOption(null);
            setIsAnswered(false);
            setIsCorrect(false);
            setIsFinished(false);
            setTotalOriginal(p.total || rehydrated.length);
            return;
          }
        }
      } catch {}
    }
    // Fresh start
    const countToGenerate = isAllAccess 
      ? (targetLength === 'all' ? 3000 : targetLength)
      : (typeof targetLength === 'number' ? targetLength : getDailyDrillCount());

    const sentenceDay = isAllAccess ? undefined : studyScheduleStore.getSentenceDayForCurriculumDay(day);
    const cacheKey = `sentences_day_${sentenceDay ?? day}_${countToGenerate}_${isAllAccess}`;
    const cached = clientCache.get<DailySentenceQuestion[]>(cacheKey);

    const randomizeSentenceQuestion = (q: DailySentenceQuestion): DailySentenceQuestion => {
      const correctText = q.options[q.correctIndex];
      const paired = q.options.map((opt, idx) => ({
        opt,
        detail: q.optionsWithRomaji?.[idx] || lookupOptionDetails(opt, q.category)
      }));
      const shuffledPairs = [...paired].sort(() => Math.random() - 0.5);
      const newOptions = shuffledPairs.map(p => p.opt);
      const newDetails = shuffledPairs.map(p => p.detail);
      const newCorrectIndex = newOptions.indexOf(correctText);

      return {
        ...q,
        options: newOptions,
        optionsWithRomaji: newDetails,
        correctIndex: newCorrectIndex >= 0 ? newCorrectIndex : 0
      };
    };

    const applyQuestions = (list: DailySentenceQuestion[]) => {
      const randomized = [...list]
        .map(randomizeSentenceQuestion)
        .sort(() => Math.random() - 0.5);
      setQuestions(randomized);
      setTotalOriginal(randomized.length);
    };

    if (cached && cached.length > 0) {
      applyQuestions(cached);
    } else {
      // Async fetch from Backend MongoDB API
      api.getDailySentences(sentenceDay, countToGenerate)
        .then((res) => {
          if (res.success && res.questions && res.questions.length > 0) {
            const mapped: DailySentenceQuestion[] = res.questions.map((q: any) => ({
              id: q.questionId || q.id,
              day: q.day,
              questionNumber: q.questionNumber,
              sentenceWithBlank: q.sentenceWithBlank,
              sentenceRomajiWithBlank: q.sentenceRomajiWithBlank,
              fullSentence: q.fullSentence,
              furigana: q.furigana,
              romaji: q.romaji,
              english: q.english,
              targetWord: q.targetWord,
              targetWordRomaji: q.targetWordRomaji,
              options: q.options,
              optionsWithRomaji: q.optionsWithRomaji?.length 
                ? q.optionsWithRomaji 
                : q.options.map((opt: string) => lookupOptionDetails(opt, q.category)),
              correctIndex: q.correctIndex,
              explanation: q.explanation,
              category: q.category || 'vocabulary'
            }));
            clientCache.set(cacheKey, mapped, 120);
            applyQuestions(mapped);
          } else {
            const qs = generateDailySentenceQuestions(sentenceDay ?? day, countToGenerate);
            applyQuestions(qs);
          }
        })
        .catch(() => {
          const qs = generateDailySentenceQuestions(sentenceDay ?? day, countToGenerate);
          applyQuestions(qs);
        });
    }

    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setIncorrectList([]);
    setIsFinished(false);
    setMasteredIds(new Set());
    setRepeatCount(0);
    clearProgress();
  }, [day, PROGRESS_KEY, clearProgress, isAllAccess, drillLength]);

  useEffect(() => {
    if (isOpen) {
      setHasStarted(false);
      setIsFinished(false);
      if (isAllAccess) {
        setDrillLength('all');
      }
    }
  }, [isOpen, day, PROGRESS_KEY, isAllAccess]);

  const hasSavedProgress = (() => {
    try {
      const saved = localStorage.getItem(PROGRESS_KEY);
      if (!saved) return null;
      const p = JSON.parse(saved);
      const attended = typeof p.attendedCount === 'number' ? p.attendedCount : (p.currentIndex > 0 ? p.currentIndex : 0);
      if (p.questions?.length && attended > 0 && Date.now() - p.savedAt < 86400000) {
        return { 
          currentIndex: p.currentIndex, 
          attendedCount: attended,
          total: p.questions.length, 
          score: p.score 
        };
      }
    } catch {}
    return null;
  })();

  const handleStartDrill = (resume = false, customLength?: DrillLength) => {
    audio.playClick();
    if (customLength) {
      setDrillLength(customLength);
    }
    initQuestions(!resume, customLength);
    setHasStarted(true);
  };

  const handlePauseAndExit = () => {
    audio.playClick();
    if (hasStarted && !isFinished) {
      const attended = currentIndex + (isAnswered ? 1 : 0);
      saveProgress(currentIndex, score, streak, bestStreak, questions, incorrectList, attended);
    }
    onClose();
  };

  const currentQ = questions[currentIndex];
  const activeOptions = getQuestionOptions(currentQ);

  const handleSelectOption = (option: string) => {
    if (isAnswered || !currentQ) return;

    setSelectedOption(option);
    setIsAnswered(true);

    const correct = option === currentQ.targetWord;
    setIsCorrect(correct);

    let newScore = score;
    let newStreak = streak;
    let newBestStreak = bestStreak;
    let newIncorrects = incorrectList;
    let newMasteredIds = masteredIds;

    if (correct) {
      audio.playSuccess();
      newScore = score + 1;
      newStreak = streak + 1;
      newBestStreak = Math.max(bestStreak, newStreak);
      newMasteredIds = new Set([...masteredIds, currentQ.id]);
      setScore(newScore);
      setStreak(newStreak);
      setBestStreak(newBestStreak);
      setMasteredIds(newMasteredIds);
    } else {
      audio.playError();
      newStreak = 0;
      newIncorrects = [...incorrectList, { question: currentQ, chosen: option }];
      setStreak(0);
      setIncorrectList(newIncorrects);
      // REPEAT MISTAKEN SENTENCE QUESTION: Append to end of queue until answered correctly
      setRepeatCount(prev => prev + 1);
      setQuestions(prev => [...prev, currentQ]);
    }

    const currentAttended = currentIndex + 1;
    saveProgress(currentIndex, newScore, newStreak, newBestStreak, questions, newIncorrects, currentAttended);
  };

  const handleNextQuestion = () => {
    audio.playClick();
    if (currentIndex + 1 < questions.length) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setSelectedOption(null);
      setIsAnswered(false);
      setIsCorrect(false);
      saveProgress(nextIdx, score, streak, bestStreak, questions, incorrectList, nextIdx);
    } else {
      // Queue exhausted — all questions have been answered correctly (re-queued until correct)
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setIsFinished(true);
    audio.playFanfare();
    // Big celebration since they mastered all questions!
    confetti({ particleCount: 120, spread: 100, origin: { y: 0.5 } });
    setTimeout(() => confetti({ particleCount: 80, spread: 70, origin: { x: 0.1, y: 0.6 } }), 300);
    setTimeout(() => confetti({ particleCount: 80, spread: 70, origin: { x: 0.9, y: 0.6 } }), 500);

    const finalMastered = masteredIds.size;
    const xpReward = isAllAccess && (totalOriginal || questions.length) > 100 ? 150 : 50;
    onGainXp?.(xpReward);

    // Persist final result and clear in-progress save
    learnedStore.saveSentenceDrillResult(day, finalMastered, totalOriginal || (isAllAccess ? questions.length : getDailyDrillCount()));
    clearProgress();
  };




  // Audio playback is user-initiated only via the speaker button

  // Keyboard controls: 1-4 for options, Space/Enter for Next
  useEffect(() => {
    if (!isOpen || !hasStarted || isFinished || !currentQ) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['1', '2', '3', '4'].includes(e.key) && !isAnswered) {
        const idx = parseInt(e.key, 10) - 1;
        if (currentQ.options[idx]) {
          handleSelectOption(currentQ.options[idx]);
        }
      } else if ((e.key === 'Enter' || e.key === ' ') && isAnswered) {
        e.preventDefault();
        handleNextQuestion();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, hasStarted, isFinished, isAnswered, currentQ, handleNextQuestion]);

  if (!isOpen) return null;

  const isDark = theme === 'dark';
  const modalBg = isDark ? 'bg-[#121216] border-slate-800 text-white' : 'bg-white border-slate-200 text-[#1A1A1F]';
  // Progress: within current round
  const progressPercent = questions.length > 0 ? Math.round(((currentIndex + (isAnswered ? 1 : 0)) / questions.length) * 100) : 0;
  // Mastery progress: how many unique original questions answered correctly
  const masteryCount = masteredIds.size;
  const masteryTotal = totalOriginal || (isAllAccess ? questions.length : getDailyDrillCount());
  const masteryPercent = masteryTotal > 0 ? Math.round((masteryCount / masteryTotal) * 100) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div 
        className={`relative w-full max-w-2xl rounded-3xl border shadow-2xl overflow-hidden flex flex-col max-h-[92vh] ${modalBg}`}
        onClick={e => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-start sm:items-center justify-between gap-2 px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-200/80 dark:border-slate-800/80">
          <div className="flex items-center gap-2.5 min-w-0">
            {isAllAccess ? (
              <span className="px-2.5 py-1 rounded-xl bg-emerald-500/15 text-emerald-500 flex items-center gap-1 font-bold font-mono text-xs border border-emerald-500/25">
                <Unlock className="w-3.5 h-3.5" /> All
              </span>
            ) : (
              <span className="w-8 h-8 shrink-0 rounded-xl bg-orange-500/10 text-[#FF5E3A] flex items-center justify-center font-bold font-mono text-sm">
                D{day}
              </span>
            )}
            <div className="min-w-0">
              <h3 className="font-extrabold text-sm sm:text-base flex flex-wrap items-center gap-1.5 font-heading">
                <span>
                  {isAllAccess 
                    ? (drillLength === 'all' ? 'All Access Sentence Drill (All Questions)' : `All Access Sentence Drill (${drillLength} Qs)`)
                    : 'Daily Sentence Drill'}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full font-mono font-bold bg-[#FF5E3A]/10 text-[#FF5E3A]">
                  JLPT N5
                </span>
              </h3>
              <p className="hidden sm:block text-[11px] text-slate-400">
                {isAllAccess
                  ? (drillLength === 'all'
                      ? 'Contextual fill-in-the-blank questions from all 805 words, 110 Kanji & particles'
                      : `${drillLength} contextual fill-in-the-blank questions from full library`)
                  : `Contextual fill-in-the-blank cloze questions for Day ${day}`}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-1.5 sm:gap-2 shrink-0">
            {hasStarted && !isFinished && (
              <>
                <button
                  onClick={() => setShowRomaji(v => !v)}
                  className={`px-2.5 py-1 rounded-xl text-xs font-mono font-bold transition border cursor-pointer ${
                    showRomaji 
                      ? 'bg-[#FF5E3A]/10 border-[#FF5E3A]/30 text-[#FF5E3A]' 
                      : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400'
                  }`}
                  title="Toggle Romaji reading"
                >
                  <span className="hidden sm:inline">Romaji: </span>{showRomaji ? (<><span className="sm:hidden">Aa </span>ON</>) : (<><span className="sm:hidden">Aa </span>OFF</>)}
                </button>
                <button
                  onClick={handlePauseAndExit}
                  className="px-2.5 py-1 rounded-xl text-xs font-mono font-bold transition border border-slate-200 dark:border-slate-700 hover:border-amber-500 bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-amber-500 cursor-pointer"
                  title="Pause drill and keep attended questions saved"
                >
                  <span className="hidden sm:inline">Save & Exit</span><span className="sm:hidden">Save</span>
                </button>
              </>
            )}
            {streak >= 3 && hasStarted && !isFinished && (
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-500/15 text-amber-500 font-mono font-bold text-xs animate-bounce">
                <Flame className="w-3.5 h-3.5 fill-amber-500" />
                <span>{streak} Streak!</span>
              </div>
            )}
            <button
              onClick={handlePauseAndExit}
              className="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition cursor-pointer"
              title="Close and save"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto overscroll-contain flex-1">
          {!hasStarted ? (
            /* --- Screen 1: Start / Resume --- */
            <div className="space-y-5 sm:space-y-6 text-center py-2 sm:py-6">
              <div className="w-16 h-16 mx-auto rounded-3xl bg-gradient-to-tr from-orange-500 to-amber-400 text-white flex items-center justify-center shadow-lg shadow-orange-500/30">
                <BookOpen className="w-8 h-8" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h4 className="text-lg sm:text-xl font-black font-heading">
                  {isAllAccess ? 'JLPT N5 All Access Sentence Drill' : `Day ${day} Sentence Drill`}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {isAllAccess
                    ? (drillLength === 'all'
                        ? 'All contextual fill-in-the-blank sentences drawn across all 3,000 questions in the complete curriculum! Master every sentence!'
                        : `${drillLength} contextual fill-in-the-blank sentences drawn from the entire 3,000 questions library.`)
                    : `${drillLength} contextual fill-in-the-blank sentences using today's vocabulary, Kanji, and particles. Close anytime — your progress updates automatically.`}
                </p>

                {/* Length selector */}
                {!hasSavedProgress && (
                  <div className="pt-2">
                    <div className="text-[11px] font-bold text-slate-400 mb-2 uppercase tracking-wider">
                      Select Question Count:
                    </div>
                    {isAllAccess ? (
                      <div className="flex items-center justify-center gap-2 flex-wrap">
                        <button
                          type="button"
                          onClick={() => { setDrillLength('all'); initQuestions(true, 'all'); }}
                          className={`px-3 py-1.5 rounded-xl font-bold font-mono text-xs transition cursor-pointer ${
                            drillLength === 'all'
                              ? 'bg-[#FF5E3A] text-white shadow-md shadow-orange-500/25 ring-2 ring-orange-500/40'
                              : isDark ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          All Questions (3,000)
                        </button>
                        <button
                          type="button"
                          onClick={() => { setDrillLength(100); initQuestions(true, 100); }}
                          className={`px-3 py-1.5 rounded-xl font-bold font-mono text-xs transition cursor-pointer ${
                            drillLength === 100
                              ? 'bg-[#FF5E3A] text-white shadow-md shadow-orange-500/25 ring-2 ring-orange-500/40'
                              : isDark ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          100 Qs
                        </button>
                        <button
                          type="button"
                          onClick={() => { setDrillLength(50); initQuestions(true, 50); }}
                          className={`px-3 py-1.5 rounded-xl font-bold font-mono text-xs transition cursor-pointer ${
                            drillLength === 50
                              ? 'bg-[#FF5E3A] text-white shadow-md shadow-orange-500/25 ring-2 ring-orange-500/40'
                              : isDark ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          50 Qs
                        </button>
                        <button
                          type="button"
                          onClick={() => { setDrillLength(25); initQuestions(true, 25); }}
                          className={`px-3 py-1.5 rounded-xl font-bold font-mono text-xs transition cursor-pointer ${
                            drillLength === 25
                              ? 'bg-[#FF5E3A] text-white shadow-md shadow-orange-500/25 ring-2 ring-orange-500/40'
                              : isDark ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          25 Qs
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2 flex-wrap">
                        <button
                          type="button"
                          onClick={() => { setDrillLength(10); initQuestions(true, 10); }}
                          className={`px-3 py-1.5 rounded-xl font-bold font-mono text-xs transition cursor-pointer ${
                            drillLength === 10
                              ? 'bg-[#FF5E3A] text-white shadow-md shadow-orange-500/25 ring-2 ring-orange-500/40'
                              : isDark ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          10 Qs (Quick)
                        </button>
                        <button
                          type="button"
                          onClick={() => { setDrillLength(25); initQuestions(true, 25); }}
                          className={`px-3 py-1.5 rounded-xl font-bold font-mono text-xs transition cursor-pointer ${
                            drillLength === 25
                              ? 'bg-[#FF5E3A] text-white shadow-md shadow-orange-500/25 ring-2 ring-orange-500/40'
                              : isDark ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          25 Qs (Standard)
                        </button>
                        <button
                          type="button"
                          onClick={() => { setDrillLength(50); initQuestions(true, 50); }}
                          className={`px-3 py-1.5 rounded-xl font-bold font-mono text-xs transition cursor-pointer ${
                            drillLength === 50
                              ? 'bg-[#FF5E3A] text-white shadow-md shadow-orange-500/25 ring-2 ring-orange-500/40'
                              : isDark ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          50 Qs (Full Day)
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Stats row */}
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2">
                  <span className="px-3 py-1.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[#FF5E3A] text-xs font-black font-mono">
                    {isAllAccess 
                      ? (drillLength === 'all' ? 'All (3,000 Pool)' : `${drillLength} Questions`)
                      : `${drillLength} Questions`}
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-black font-mono">
                    {drillLength === 10 ? '+20 XP' : drillLength === 25 ? '+35 XP' : drillLength === 'all' ? '+150 XP' : '+50 XP'}
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs font-black font-mono">
                    {drillLength === 10 ? '~3 min' : drillLength === 25 ? '~8 min' : drillLength === 100 ? '~35 min' : drillLength === 'all' ? 'Full Library' : '~15 min'}
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-col items-center gap-3">
                {hasSavedProgress ? (
                  <>
                    <div className={`w-full max-w-sm p-3.5 rounded-2xl border flex items-center gap-3 ${isDark ? 'bg-amber-500/10 border-amber-500/30' : 'bg-amber-50 border-amber-200'}`}>
                      <span className="text-2xl">⏸️</span>
                      <div className="text-left flex-1">
                        <div className="text-xs font-black text-amber-600 dark:text-amber-400">Drill In-Progress</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          {hasSavedProgress.attendedCount} of {hasSavedProgress.total} attended · Score: {hasSavedProgress.score}
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-500 font-mono font-bold text-xs">
                        {Math.round((hasSavedProgress.attendedCount / hasSavedProgress.total) * 100)}%
                      </span>
                    </div>
                    <div className="w-full max-w-sm flex items-center gap-3 flex-wrap justify-center">
                      <button
                        onClick={() => handleStartDrill(true)}
                        className="w-full sm:w-auto justify-center px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-sm transition shadow-lg shadow-amber-500/30 flex items-center gap-2 cursor-pointer"
                      >
                        <ArrowRight className="w-4 h-4" />
                        <span>Continue from Q{hasSavedProgress.currentIndex + 1}</span>
                      </button>
                    </div>
                    <button
                      onClick={() => { clearProgress(); handleStartDrill(false); }}
                      className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 underline cursor-pointer transition"
                    >
                      Start fresh instead
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => handleStartDrill()}
                    className="w-full sm:w-auto justify-center px-5 sm:px-8 py-3.5 rounded-2xl bg-[#FF5E3A] hover:bg-[#E84E29] text-white font-extrabold text-xs sm:text-sm transition shadow-lg shadow-orange-500/30 flex items-center gap-2 mx-auto cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>
                      {isAllAccess
                        ? (drillLength === 'all' ? 'Start All Questions Drill (3,000)' : `Start ${drillLength} Questions Drill`)
                        : `Start ${drillLength} Questions Drill`}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ) : isFinished ? (
            /* --- Screen 3: Results Summary --- */
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 mx-auto rounded-3xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <Award className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h4 className="text-xl sm:text-2xl font-black font-heading">All {masteryTotal} Questions Mastered! 🎉</h4>
                <p className="text-xs text-slate-400">
                  {repeatCount === 0
                    ? 'Flawless! All questions answered correctly on the first try!'
                    : `All mastered! You corrected ${repeatCount} mistake${repeatCount !== 1 ? 's' : ''} during review.`}
                </p>
              </div>

              {/* Score Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-lg mx-auto">
                <div className={`p-3.5 rounded-2xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase">Mastered</div>
                  <div className="text-lg font-black text-emerald-500 font-mono mt-0.5">
                    {masteryCount} / {masteryTotal}
                  </div>
                </div>
                <div className={`p-3.5 rounded-2xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase">Accuracy</div>
                  <div className="text-lg font-black text-[#FF5E3A] font-mono mt-0.5">
                    {Math.round((score / Math.max(1, score + repeatCount)) * 100)}%
                  </div>
                </div>
                <div className={`p-3.5 rounded-2xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase">Best Streak</div>
                  <div className="text-lg font-black text-orange-400 font-mono mt-0.5">
                    {bestStreak} 🔥
                  </div>
                </div>
                <div className={`p-3.5 rounded-2xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase">XP Earned</div>
                  <div className="text-lg font-black text-amber-500 font-mono mt-0.5">
                    +50 XP
                  </div>
                </div>
              </div>


              {/* Review Incorrect List if any */}
              {incorrectList.length > 0 && (
                <div className="text-left max-w-lg mx-auto space-y-2 pt-2">
                  <span className="text-xs font-bold text-rose-500 font-mono">
                    Questions for Review ({incorrectList.length}):
                  </span>
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {incorrectList.map((item, idx) => {
                      const chosenDetails = lookupOptionDetails(item.chosen, item.question.category);
                      const correctDetails = lookupOptionDetails(item.question.targetWord, item.question.category);
                      return (
                        <div 
                          key={idx}
                          className={`p-3 rounded-xl border text-xs space-y-1.5 ${
                            isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                          }`}
                        >
                          <div className={`font-jp font-bold break-words ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{item.question.fullSentence}</div>
                          <div className="text-[11px] text-slate-400">{item.question.english}</div>
                          <div className="text-[11px] font-mono flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4 pt-0.5">
                            <span className="text-rose-400">
                              Your answer: <strong>{item.chosen}</strong> ({chosenDetails.meaning})
                            </span>
                            <span className="text-emerald-400 font-bold">
                              Correct: <strong>{item.question.targetWord}</strong> ({correctDetails.meaning})
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 pt-4">
                <button
                  onClick={() => initQuestions(true)}
                  className="justify-center px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retry Drill</span>
                </button>
                <button
                  onClick={onClose}
                  className="justify-center px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 transition shadow-md shadow-emerald-500/20 cursor-pointer"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Finish & Back to Dashboard</span>
                </button>
              </div>
            </div>
          ) : currentQ ? (
            /* --- Screen 2: Active Question Runner --- */
            <div className="space-y-5">
              {/* Question Progress */}
              <div className="space-y-1.5">
                {/* Review indicator when replaying a mistaken question */}
                {currentIndex >= totalOriginal && (
                  <div className="flex items-center justify-center gap-2 text-[11px] font-mono mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 font-bold flex items-center gap-1 text-center">
                      <RotateCcw className="w-3 h-3 animate-spin" />
                      Reviewing Mistake • {questions.length - currentIndex} left to correct
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between gap-2 text-[11px] sm:text-xs font-mono text-slate-400">
                  <span>Question {currentIndex + 1} of {questions.length}</span>
                  <span className="font-bold text-emerald-400">✓ {masteryCount}/{masteryTotal} Mastered</span>
                </div>

                {/* Current round progress bar */}
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                {/* Mastery bar */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500"
                      style={{ width: `${masteryPercent}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold shrink-0">{masteryPercent}% mastered</span>
                </div>
              </div>

              {/* Japanese Sentence Card */}
              <div className={`px-4 pt-12 pb-5 sm:p-6 rounded-2xl sm:rounded-3xl border text-center space-y-3 relative ${
                isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-orange-50/30 border-orange-100'
              }`}>
                {/* Audio Button */}
                <button
                  onClick={() => {
                    if (isAnswered) {
                      audio.speak(currentQ.furigana ? currentQ.furigana.replace(/\s+/g, '') : currentQ.fullSentence);
                    } else {
                      // Before answering, read without the blank so the answer is never spoiled
                      const clozePrompt = currentQ.sentenceWithBlank.replace(/\[\s*_____\s*\]/g, '……');
                      audio.speak(clozePrompt);
                    }
                  }}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2.5 sm:p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-orange-500/20 text-slate-400 hover:text-[#FF5E3A] transition cursor-pointer"
                  title={isAnswered ? "Listen to full sentence" : "Listen to sentence prompt (without answer)"}
                >
                  <Volume2 className="w-4 h-4" />
                </button>

                <div className="inline-block px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider bg-orange-500/10 text-[#FF5E3A]">
                  {currentQ.category}
                </div>

                {/* Sentence with glowing blank */}
                <div className="text-lg sm:text-2xl font-bold font-jp tracking-wide py-1 sm:py-2 leading-relaxed break-words">
                  {currentQ.sentenceWithBlank.split('[ _____ ]').map((part, idx, arr) => (
                    <React.Fragment key={idx}>
                      <span>{part}</span>
                      {idx < arr.length - 1 && (
                        <span className={`inline-block px-3 py-0.5 mx-1 rounded-lg border font-mono text-base font-black transition-all ${
                          isAnswered
                            ? isCorrect
                              ? 'bg-emerald-500 text-white border-emerald-600 animate-scale-up'
                              : 'bg-rose-500 text-white border-rose-600 animate-shake'
                            : 'bg-orange-500/20 text-[#FF5E3A] border-orange-500/40 animate-pulse'
                        }`}>
                          {isAnswered ? currentQ.targetWord : '_____'}
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Sentence Romaji with glowing blank */}
                {showRomaji && (currentQ.sentenceRomajiWithBlank || currentQ.romaji) && (
                  <div className="text-xs sm:text-sm font-mono text-[#FF5E3A] font-semibold tracking-wide break-words">
                    {currentQ.sentenceRomajiWithBlank || currentQ.romaji}
                  </div>
                )}

                {/* English Meaning Hint */}
                <p className="text-xs sm:text-sm text-slate-400 italic">
                  "{currentQ.english}"
                </p>
              </div>

              {/* Multiple Choice Options (4 Choices) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                {activeOptions.map((opt, idx) => {
                  const isSelected = selectedOption === opt.text;
                  const isThisCorrect = opt.text === currentQ.targetWord;

                  let btnStyle = isDark 
                    ? 'bg-slate-900/60 border-slate-800 hover:border-orange-500/50 hover:bg-slate-850 text-slate-200' 
                    : 'bg-white border-slate-200 hover:border-orange-500/50 hover:bg-orange-50/30 text-slate-800 shadow-xs';

                  if (isAnswered) {
                    if (isThisCorrect) {
                      btnStyle = 'bg-emerald-500 border-emerald-600 text-white font-black shadow-md shadow-emerald-500/20';
                    } else if (isSelected && !isThisCorrect) {
                      btnStyle = 'bg-rose-500 border-rose-600 text-white font-bold';
                    } else {
                      btnStyle = 'opacity-40 border-slate-200 dark:border-slate-800 text-slate-400';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(opt.text)}
                      disabled={isAnswered}
                      className={`p-3 sm:p-4 rounded-2xl border-2 transition-all flex items-center justify-between gap-2 cursor-pointer ${btnStyle}`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className={`w-6 h-6 rounded-lg text-xs font-mono font-bold flex items-center justify-center shrink-0 ${
                          isAnswered && isThisCorrect 
                            ? 'bg-white/20 text-white' 
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                        }`}>
                          {idx + 1}
                        </span>
                        <div className="text-left min-w-0">
                          <div className="font-bold font-jp text-base break-words">{opt.text}</div>
                          {showRomaji && opt.romaji && (
                            <div className="text-[11px] font-mono opacity-75 font-normal tracking-tight">
                              {opt.romaji}
                            </div>
                          )}
                          {isAnswered && opt.meaning && (
                            <div className={`text-xs mt-1 font-medium leading-snug flex items-center gap-1.5 flex-wrap ${
                              isThisCorrect 
                                ? 'text-white font-bold' 
                                : isSelected 
                                ? 'text-white font-bold' 
                                : isDark 
                                ? 'text-slate-300' 
                                : 'text-slate-700'
                            }`}>
                              <span>{opt.meaning}</span>
                              {opt.baseWord && opt.baseWord !== opt.text && (
                                <span className="opacity-80 text-[10px] font-mono">
                                  · Base: {opt.baseWord}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      {isAnswered && isThisCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                      )}
                      {isAnswered && isSelected && !isThisCorrect && (
                        <XCircle className="w-5 h-5 text-white shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Immediate Feedback & Explanation Panel */}
              {isAnswered && showExplanation && (
                <div className={`p-4 rounded-2xl border text-xs space-y-3 animate-fade-in ${
                  isCorrect 
                    ? 'bg-emerald-500/10 border-emerald-500/30' 
                    : 'bg-rose-500/10 border-rose-500/30'
                }`}>
                  <div className={`font-bold flex items-center gap-1.5 text-sm ${
                    isCorrect ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'
                  }`}>
                    {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                    <span className="break-words">{isCorrect ? 'Correct!' : `Incorrect — Correct answer is 「${currentQ.targetWord}」`}</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                    {currentQ.explanation}
                  </p>

                  {/* Optional contextual note for medicine sentences */}
                  {(currentQ.fullSentence?.includes('薬') || currentQ.targetWord === '飲んでください') && (
                    <div className="mt-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs space-y-1">
                      <div className="font-bold text-[11px] uppercase tracking-wider text-amber-600 dark:text-amber-400">
                        💡 Context Note: Why 「飲んでください」 is used
                      </div>
                      <p className="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed">
                        In Japanese, taking medicine (<strong>薬 / くすり</strong>) always uses <strong>飲む (nomu = to drink/swallow)</strong>.
                        So 「飲んでください」 means <em>"Please take your medicine"</em>.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Next Question Row */}
              {isAnswered && (
                <div className="sticky bottom-0 pt-2 flex items-center justify-end gap-3">
                  <button
                    onClick={handleNextQuestion}
                    className="w-full sm:w-auto justify-center px-6 py-3 rounded-2xl bg-[#FF5E3A] hover:bg-[#E84E29] text-white font-black text-sm flex items-center gap-2 transition shadow-lg shadow-orange-500/30 cursor-pointer animate-scale-up"
                  >
                    <span>
                      {currentIndex + 1 < questions.length
                        ? 'Next Question'
                        : questions.some(q => !masteredIds.has(q.id) && q.id !== currentQ?.id)
                        ? 'Next Round \u2192'
                        : 'View Results'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                    <span className="hidden sm:inline text-[10px] opacity-70 font-mono">(Enter)</span>
                  </button>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
