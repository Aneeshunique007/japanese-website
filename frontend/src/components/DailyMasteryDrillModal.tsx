import React, { useState, useEffect, useCallback } from 'react';
import { 
  X, 
  Volume2, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Trophy,
  Loader2,
  ArrowRight,
  RotateCcw
} from 'lucide-react';
import { 
  DailyMasteryQuestion, 
  generateDailyMasteryQuestions,
  getLearningStatus,
  LearningStatus
} from '../utils/dailyMasteryQuizGenerator';
import { dataStore } from '../services/dataStore';
import audio from '../utils/audio';
import confetti from 'canvas-confetti';
import { learnedStore } from '../utils/learnedStore';
import { resolveRomaji } from '../utils/dailySentenceQuizGenerator';

interface DailyMasteryDrillModalProps {
  isOpen: boolean;
  onClose: () => void;
  day: number;
  theme?: 'dark' | 'light';
  onGainXp?: (xp: number) => void;
  onCompleteDay?: () => void;
}

export const DailyMasteryDrillModal: React.FC<DailyMasteryDrillModalProps> = ({
  isOpen,
  onClose,
  day,
  theme = 'dark',
  onGainXp,
  onCompleteDay
}) => {
  const [questions, setQuestions] = useState<DailyMasteryQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [learningStatus, setLearningStatus] = useState<LearningStatus | null>(null);
  
  // Interaction states
  const [selectedOptionIdx, setSelectedOptionIdx] = useState<number | null>(null);

  // Evaluation & bottom drawer state
  const [evalStatus, setEvalStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [comboStreak, setComboStreak] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const PROGRESS_KEY = `anilearn_daily_mastery_progress_v4_day_${day}`;

  const saveProgress = useCallback((
    idx: number,
    currentScore: number,
    streak: number,
    qs: DailyMasteryQuestion[]
  ) => {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify({
        currentIndex: idx,
        score: currentScore,
        comboStreak: streak,
        questions: qs,
        savedAt: Date.now()
      }));
    } catch (e) {
      console.warn('Could not save mastery progress:', e);
    }
  }, [PROGRESS_KEY]);

  const clearProgress = useCallback(() => {
    try {
      localStorage.removeItem(PROGRESS_KEY);
    } catch {}
  }, [PROGRESS_KEY]);

  // Load questions for the specific day on open — restore saved progress if available
  useEffect(() => {
    if (!isOpen) return;

    setIsLoading(true);
    setIsCompleted(false);
    setEvalStatus('idle');

    dataStore.ready().then(async () => {
      const status = getLearningStatus(day);
      setLearningStatus(status);

      // 1. Try to restore in-progress test
      try {
        const saved = localStorage.getItem(PROGRESS_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (
            parsed?.questions?.length > 0 &&
            Date.now() - (parsed.savedAt || 0) < 86400000 &&
            parsed.currentIndex < parsed.questions.length &&
            !parsed.questions.some((q: any) => q.type === 'tap-what-you-hear' || q.type === 'translate-sentence' || !q.options)
          ) {
            setQuestions(parsed.questions);
            setCurrentIndex(parsed.currentIndex);
            setScore(parsed.score || 0);
            setComboStreak(parsed.comboStreak || 0);
            setIsLoading(false);
            setupQuestionState(parsed.questions[parsed.currentIndex]);
            return;
          }
        }
      } catch (e) {
        console.warn('Error reading saved mastery progress:', e);
      }

      // 2. Fresh generation if no saved progress or if old format was saved
      const generated = await generateDailyMasteryQuestions(day);
      setQuestions(generated);
      setCurrentIndex(0);
      setScore(0);
      setComboStreak(0);
      setIsLoading(false);
      if (generated.length > 0) {
        setupQuestionState(generated[0]);
      }
    });
  }, [isOpen, day, PROGRESS_KEY]);

  const setupQuestionState = (_q?: DailyMasteryQuestion) => {
    setEvalStatus('idle');
    setSelectedOptionIdx(null);
  };

  const currentQ = questions[currentIndex];

  // TTS playback handler
  const playCurrentAudio = (slow: boolean = false) => {
    if (!currentQ?.audioText) return;
    const jpText = currentQ.japaneseText || '';
    const hasBlank = /\[\s*_{2,}\s*\]|_{3,}/.test(jpText);
    if (hasBlank && evalStatus === 'idle') {
      const cloze = jpText.replace(/\[\s*_{2,}\s*\]|_{3,}/g, '……');
      audio.speak(cloze, slow ? 0.6 : 0.9);
      return;
    }
    const textToSpeak = currentQ.furigana ? currentQ.furigana.replace(/\s+/g, '') : currentQ.audioText;
    audio.speak(textToSpeak, slow ? 0.6 : 0.9);
  };

  // Multiple Choice selection: 1-click immediate evaluation
  const handleSelectOption = (idx: number) => {
    if (evalStatus !== 'idle' || !currentQ) return;
    audio.playClick();
    setSelectedOptionIdx(idx);

    const isCorrect = idx === currentQ.correctOptionIndex;
    if (isCorrect) {
      audio.playCorrect();
      setEvalStatus('correct');
      const newScore = score + 1;
      const newStreak = comboStreak + 1;
      setScore(newScore);
      setComboStreak(newStreak);
      if (onGainXp) onGainXp(10);
      saveProgress(currentIndex, newScore, newStreak, questions);
    } else {
      audio.playWrong();
      setEvalStatus('wrong');
      setComboStreak(0);
      // REPEAT MISTAKEN QUESTION UNTIL CORRECTED:
      const updatedQuestions = [...questions, currentQ];
      setQuestions(updatedQuestions);
      saveProgress(currentIndex, score, 0, updatedQuestions);
    }
  };

  // Continue to next question
  const handleContinue = () => {
    audio.playClick();
    const nextIdx = currentIndex + 1;
    if (nextIdx < questions.length) {
      setCurrentIndex(nextIdx);
      saveProgress(nextIdx, score, comboStreak, questions);
      setupQuestionState(questions[nextIdx]);
    } else {
      // Finish Drill!
      setIsCompleted(true);
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
      learnedStore.saveQuizOfTheDayResult(day, Math.max(score, questions.length), questions.length);
      learnedStore.saveDailyQuizResult(day, Math.max(score, questions.length), questions.length);
      clearProgress();
      if (onGainXp) onGainXp(50);
      if (onCompleteDay) onCompleteDay();
    }
  };

  if (!isOpen) return null;

  const progressPct = questions.length > 0 ? ((currentIndex + 1) / questions.length) * 100 : 0;
  const isDark = theme === 'dark';
  const cardBg = isDark ? 'bg-[#17171C] border-slate-800 text-white' : 'bg-white border-slate-200 text-[#1A1A1F]';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-4 overflow-y-auto animate-fade-in">
      <div 
        className={`w-full max-w-2xl min-h-[480px] sm:min-h-[600px] max-h-[92vh] rounded-3xl flex flex-col justify-between overflow-hidden shadow-2xl transition-all border ${cardBg}`}
      >
        {/* TOP STATUS BAR */}
        <div className="px-4 sm:px-6 pt-4 sm:pt-5 pb-3 border-b border-slate-100 dark:border-slate-800/80 space-y-3 shrink-0">
          <div className="flex items-center justify-between gap-2 sm:gap-3">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 min-w-0">
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-500/10 text-[#FF5E3A] border border-orange-500/20 whitespace-nowrap">
                Day {day}<span className="hidden sm:inline"> • Mastery Drill</span>
              </span>
              {comboStreak > 1 && (
                <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-500 border border-amber-500/30 text-xs font-bold font-mono animate-bounce">
                  ⚡ COMBO x{comboStreak}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {currentIndex > 0 && !isCompleted && (
                <button
                  onClick={async () => {
                    if (window.confirm("Restart this Mastery Drill from Question 1?")) {
                      clearProgress();
                      const fresh = await generateDailyMasteryQuestions(day);
                      setQuestions(fresh);
                      setCurrentIndex(0);
                      setScore(0);
                      setComboStreak(0);
                      setupQuestionState(fresh[0]);
                    }
                  }}
                  className="text-xs font-bold text-slate-400 hover:text-amber-500 flex items-center gap-1 transition cursor-pointer px-2 py-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                  title="Restart Test from Question 1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Restart</span>
                </button>
              )}

              <span className="text-xs font-mono font-bold text-slate-400 whitespace-nowrap">
                {questions.length > 0 ? (<><span className="hidden sm:inline">Question </span>{currentIndex + 1}<span className="sm:hidden">/</span><span className="hidden sm:inline"> of </span>{questions.length}</>) : ''}
              </span>

              <button 
                onClick={() => {
                  audio.playClick();
                  onClose();
                }}
                className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-400 hover:text-rose-500 hover:bg-rose-500/15 transition cursor-pointer ml-1"
                title="Exit Drill"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Smooth Coral/Amber Gradient Progress Bar */}
          <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 to-[#FF5E3A] transition-all duration-300 rounded-full"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        {/* LOADING STATE */}
        {isLoading && (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 py-12">
            <Loader2 className="w-10 h-10 text-[#FF5E3A] animate-spin" />
            <p className="text-slate-400 text-sm font-semibold">Preparing Day {day} Questions…</p>
          </div>
        )}

        {/* EMPTY STATE — nothing studied yet for this day */}
        {!isLoading && !isCompleted && questions.length === 0 && (
          <div className="flex-1 flex flex-col items-center justify-center gap-5 py-10 px-6 text-center">
            <div className="w-16 h-16 rounded-3xl bg-orange-500/10 text-[#FF5E3A] flex items-center justify-center text-3xl shadow-inner">
              📖
            </div>
            <div>
              <h3 className="text-xl font-black mb-2 font-heading">Study First!</h3>
              {learningStatus && learningStatus.missingCategories.length > 0 ? (
                <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                  You haven't marked any <span className="text-amber-500 font-bold">{learningStatus.missingCategories.join(', ')}</span> as learned yet for Day {day}.<br /><br />
                  Explore the Kana, Kanji, or Words tables, mark characters as learned, then return to test your full mastery!
                </p>
              ) : (
                <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                  No practice content found for Day {day}. Make sure Day {day} is unlocked and you've reviewed today's material first.
                </p>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-[#FF5E3A] hover:bg-[#E84E29] text-white font-bold text-xs shadow-md shadow-orange-500/20 transition cursor-pointer"
            >
              Go to Study Tables
            </button>
          </div>
        )}

        {/* MAIN BODY AREA */}
        {!isLoading && !isCompleted && questions.length > 0 && currentQ && (
          <div className="flex-1 p-4 sm:p-7 flex flex-col justify-between space-y-5 sm:space-y-6 overflow-y-auto overscroll-contain">
            {/* Question Title & Prompt */}
            <div>
              <div className="flex items-center justify-between gap-2 text-[10px] sm:text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">
                <span>{currentQ.category.toUpperCase()} DRILL</span>
                <span className="capitalize text-right">{currentQ.type.replace(/-/g, ' ')}</span>
              </div>
              <h2 className="text-base sm:text-xl font-black font-heading tracking-tight leading-snug break-words">
                {currentQ.prompt}
              </h2>
            </div>

            {/* SLEEK QUESTION PROMPT CARD (Replaces Mascot with Clean Japanese Card) */}
            <div className={`px-4 pt-12 pb-4 sm:p-6 rounded-2xl border text-center relative overflow-hidden transition ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-orange-50/30 border-orange-100'
            }`}>
              {/* Native Speaker Audio Button */}
              {currentQ.audioText && (
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <button
                    onClick={() => playCurrentAudio(false)}
                    className="p-2.5 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 text-[#FF5E3A] transition cursor-pointer shadow-xs"
                    title="Listen to Japanese pronunciation"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Japanese Text / Sentence / Glyph Display */}
              {currentQ.japaneseText && /\[\s*_{2,}\s*\]|_{3,}/.test(currentQ.japaneseText) ? (
                <div className="space-y-3 py-2">
                  {/* Only show furigana after answered so it doesn't spoil the blank answer word! */}
                  {evalStatus !== 'idle' && currentQ.furigana && (
                    <p className="text-xs font-jp text-slate-400 font-medium">
                      {currentQ.furigana}
                    </p>
                  )}
                  <p className="text-lg sm:text-2xl font-black font-jp flex items-center justify-center flex-wrap gap-2 leading-relaxed break-words">
                    {currentQ.japaneseText.split(/\[\s*_{2,}\s*\]|_{3,}/).map((part, pIdx, arr) => (
                      <React.Fragment key={pIdx}>
                        <span>{part}</span>
                        {pIdx < arr.length - 1 && (
                          <span className={`px-4 py-1 rounded-xl border-2 font-mono text-base inline-flex items-center justify-center min-w-[65px] transition-all duration-200 ${
                            selectedOptionIdx !== null 
                              ? evalStatus === 'correct'
                                ? 'border-emerald-500 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold' 
                                : 'border-rose-500 bg-rose-500/15 text-rose-600 dark:text-rose-400 font-bold'
                              : 'border-dashed border-[#FF5E3A] bg-orange-500/10 text-[#FF5E3A] font-bold'
                          }`}>
                            {selectedOptionIdx !== null ? currentQ.options?.[selectedOptionIdx] : '_____'}
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                  {currentQ.romaji && (
                    <p className="text-xs text-[#FF5E3A] font-mono font-bold tracking-wide break-words">
                      {selectedOptionIdx !== null
                        ? currentQ.romaji.replace(/\[\s*_{2,}\s*\]|_{3,}/g, currentQ.options?.[selectedOptionIdx] || '')
                        : currentQ.romaji.replace(/\[\s*_{2,}\s*\]|_{3,}/g, '_____')}
                    </p>
                  )}
                  {currentQ.english && (
                    <p className="text-xs sm:text-sm text-slate-500 italic">
                      Meaning: "{currentQ.english}"
                    </p>
                  )}
                </div>
              ) : currentQ.category === 'sentence' ? (
                <div className="space-y-2 py-2">
                  {currentQ.furigana && (
                    <p className="text-xs font-jp text-slate-400 font-medium">
                      {currentQ.furigana}
                    </p>
                  )}
                  <p className="text-lg sm:text-2xl font-black font-jp text-slate-900 dark:text-white leading-relaxed break-words">
                    {currentQ.japaneseText}
                  </p>
                  {currentQ.romaji && (
                    <p className="text-xs text-[#FF5E3A] font-mono font-bold">
                      {currentQ.romaji}
                    </p>
                  )}
                </div>
              ) : (
                /* Character / Word Flash Card Display */
                <div className="space-y-2 py-2">
                  {currentQ.furigana && currentQ.furigana !== currentQ.japaneseText && (
                    <span className="text-xs font-jp text-slate-400 font-bold block">
                      {currentQ.furigana}
                    </span>
                  )}
                  <span className="text-4xl sm:text-6xl font-black font-jp tracking-tight block text-slate-900 dark:text-white break-words">
                    {currentQ.japaneseText}
                  </span>
                  {currentQ.romaji && (
                    <span className="text-xs font-mono font-bold text-[#FF5E3A] block">
                      {currentQ.romaji}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* MULTIPLE CHOICE OPTIONS: 2x2 Numbered Grid (1, 2, 3, 4) */}
            {currentQ.options && currentQ.options.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 my-auto py-1">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = selectedOptionIdx === idx;
                  const isEvaluated = evalStatus !== 'idle';
                  const isCorrectAnswer = isEvaluated && idx === currentQ.correctOptionIndex;
                  const isWrongAnswer = isEvaluated && isSelected && evalStatus === 'wrong';

                  const detail = currentQ.optionsWithDetails?.[idx];
                  const subtext = detail?.subtext || (
                    (/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(opt)) ? resolveRomaji(opt, currentQ.category) : undefined
                  );

                  let btnStyle = isDark
                    ? 'bg-slate-900/60 border-slate-800 text-slate-200 hover:border-[#FF5E3A]'
                    : 'bg-white border-slate-200 text-slate-800 hover:border-[#FF5E3A] shadow-xs';

                  if (isEvaluated) {
                    if (isCorrectAnswer) {
                      btnStyle = 'bg-emerald-500/15 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold';
                    } else if (isWrongAnswer) {
                      btnStyle = 'bg-rose-500/15 border-rose-500 text-rose-500 font-bold';
                    } else {
                      btnStyle = 'opacity-40 border-slate-200 dark:border-slate-800';
                    }
                  } else if (isSelected) {
                    btnStyle = 'border-[#FF5E3A] bg-orange-500/10 text-[#FF5E3A] font-bold shadow-xs';
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isEvaluated}
                      onClick={() => handleSelectOption(idx)}
                      className={`p-3 sm:p-4 rounded-2xl border text-left text-sm font-bold transition flex items-center justify-between gap-2 cursor-pointer ${btnStyle}`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className={`w-6 h-6 rounded-lg text-xs font-mono font-black flex items-center justify-center shrink-0 ${
                          isSelected 
                            ? 'bg-[#FF5E3A] text-white' 
                            : isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {idx + 1}
                        </span>
                        <div className="text-left min-w-0">
                          <div className="font-bold font-jp text-base leading-snug break-words">{opt}</div>
                          {subtext && (
                            <div className="text-[11px] font-mono text-slate-400 dark:text-slate-400 font-medium tracking-wide">
                              {subtext}
                            </div>
                          )}
                        </div>
                      </div>
                      {isEvaluated && isCorrectAnswer && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />}
                      {isEvaluated && isWrongAnswer && <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* COMPLETION CELEBRATION SCREEN */}
        {isCompleted && (
          <div className="flex-1 p-5 sm:p-8 flex flex-col items-center justify-center text-center space-y-5 sm:space-y-6 overflow-y-auto">
            <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Trophy className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-black font-heading tracking-tight">
                Day {day} 100% Mastered! 🎉
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                You practiced all Kana, Kanji, Vocabulary, and Sentences for today with flying colors.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-sm">
              <div className={`p-3 sm:p-4 rounded-2xl border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <p className="text-[10px] font-mono font-bold text-slate-400 uppercase">Score</p>
                <p className="text-base sm:text-xl font-black font-mono text-emerald-500">{score}/{questions.length}</p>
              </div>
              <div className={`p-3 sm:p-4 rounded-2xl border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <p className="text-[10px] font-mono font-bold text-slate-400 uppercase">XP Gained</p>
                <p className="text-base sm:text-xl font-black font-mono text-[#FF5E3A]">+50 XP</p>
              </div>
              <div className={`p-3 sm:p-4 rounded-2xl border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <p className="text-[10px] font-mono font-bold text-slate-400 uppercase">Accuracy</p>
                <p className="text-base sm:text-xl font-black font-mono text-amber-500">
                  {questions.length > 0 ? Math.round((score / questions.length) * 100) : 100}%
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full max-w-sm py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black text-sm shadow-lg shadow-emerald-500/25 transition cursor-pointer"
            >
              Continue to Study Track
            </button>
          </div>
        )}

        {/* BOTTOM FEEDBACK DRAWER / ACTION BAR */}
        {!isCompleted && !isLoading && questions.length > 0 && currentQ && (
          <div className={`p-4 sm:p-5 border-t transition-all shrink-0 ${
            evalStatus === 'correct' 
              ? 'bg-emerald-500/10 border-emerald-500/30' 
              : evalStatus === 'wrong' 
              ? 'bg-rose-500/10 border-rose-500/30' 
              : 'border-slate-100 dark:border-slate-800/80'
          }`}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
              {/* Feedback Text */}
              {evalStatus === 'correct' ? (
                <div className="flex items-center gap-2.5 text-emerald-500">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-black">Correct! Excellent recall.</h4>
                    <p className="text-[11px] text-slate-400">+10 XP earned</p>
                  </div>
                </div>
              ) : evalStatus === 'wrong' ? (
                <div className="flex items-start gap-2.5 text-rose-500">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-black">Not quite right.</h4>
                    {currentQ.explanation && (
                      <p className="text-xs text-rose-400/90">{currentQ.explanation}</p>
                    )}
                    <span className="text-[10px] font-bold text-amber-500 block mt-0.5">
                      🔄 This question will repeat at the end until answered correctly!
                    </span>
                  </div>
                </div>
              ) : (
                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Day {day} Full Syllabus Mastery</span>
                </div>
              )}

              {/* Action Button: Guide text while answering or Continue button once evaluated */}
              {evalStatus === 'idle' ? (
                <div className="text-xs text-slate-400 font-medium hidden sm:flex items-center gap-1.5">
                  <span>Click an option to answer</span>
                </div>
              ) : (
                <button
                  onClick={handleContinue}
                  className={`w-full sm:w-auto px-7 py-3 rounded-2xl font-black text-xs text-white transition cursor-pointer flex items-center justify-center gap-2 shadow-md ${
                    evalStatus === 'correct'
                      ? 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/20'
                      : 'bg-rose-500 hover:bg-rose-600 shadow-rose-500/20'
                  }`}
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyMasteryDrillModal;
