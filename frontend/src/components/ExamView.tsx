import React, { useState, useEffect } from 'react';
import { Award, CheckCircle2, AlertCircle, RotateCcw, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { api } from '../services/api';
import { clientCache } from '../services/cacheService';
import audio from '../utils/audio';

interface ExamViewProps {
  theme: 'dark' | 'light';
  onGainXp?: (xp: number) => void;
}

export const ExamView: React.FC<ExamViewProps> = ({ theme, onGainXp }) => {
  const [allQuestions, setAllQuestions] = useState<any[]>([]);
  const [questions, setQuestions] = useState<any[]>([]);
  const [selectedLevel, setSelectedLevel] = useState('N5');
  const [loading, setLoading] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const [initialTotal, setInitialTotal] = useState(0);
  const [repeatCount, setRepeatCount] = useState(0);
  const [score, setScore] = useState(0);

  const loadExam = async (level: string) => {
    setLoading(true);
    setIsFinished(false);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setRepeatCount(0);
    setScore(0);

    const cacheKey = `exam_${level}`;
    const cached = clientCache.get<any[]>(cacheKey);
    if (cached && cached.length > 0) {
      const shuffled = [...cached].sort(() => Math.random() - 0.5);
      setAllQuestions(shuffled);
      setQuestions(shuffled);
      setInitialTotal(shuffled.length);
      setLoading(false);
      return;
    }

    try {
      const data = await api.getExam(level);
      if (data.success && data.questions && data.questions.length > 0) {
        clientCache.set(cacheKey, data.questions, 60);
        const shuffled = [...data.questions].sort(() => Math.random() - 0.5);
        setAllQuestions(shuffled);
        setQuestions(shuffled);
        setInitialTotal(shuffled.length);
      } else {
        setAllQuestions([]);
        setQuestions([]);
        setInitialTotal(0);
      }
    } catch (err) {
      console.error('API exam fetch failed:', err);
      setAllQuestions([]);
      setQuestions([]);
      setInitialTotal(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadExam(selectedLevel);
  }, [selectedLevel]);

  const currentQ = questions[currentIndex];
  const isReviewItem = currentIndex >= initialTotal;

  const handleSelect = (optIdx: number) => {
    if (isAnswered) return;
    audio.playClick();
    setSelectedOption(optIdx);
    setIsAnswered(true);

    const correct = optIdx === currentQ.correctIndex;
    if (correct) {
      audio.playCorrect();
      setScore(prev => prev + 1);
    } else {
      audio.playIncorrect();
      setRepeatCount(prev => prev + 1);
      // REPEAT MISTAKEN EXAM QUESTION: Append to end of queue until answered correctly
      setQuestions(prev => [...prev, currentQ]);
    }
  };

  const handleNext = () => {
    audio.playClick();
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      audio.playFanfare();
      confetti({ particleCount: 120, spread: 100, origin: { y: 0.5 } });
      setIsFinished(true);
      if (onGainXp) onGainXp(50);
    }
  };

  const handleReset = () => {
    audio.playClick();
    loadExam(selectedLevel);
  };

  const cardBg = theme === 'dark'
    ? 'bg-[#17171C] border-slate-800 text-white'
    : 'bg-white border-slate-200/80 text-[#1A1A1F] shadow-xs';
  const subText = theme === 'dark' ? 'text-slate-400' : 'text-slate-500';
  const accuracy = Math.round((score / Math.max(1, score + repeatCount)) * 100);

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-start sm:items-center gap-2 mb-1">
            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF5E3A] shrink-0 mt-0.5 sm:mt-0" />
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight font-heading">JLPT Official Format Mock Exam</h1>
          </div>
          <p className={`text-xs sm:text-sm ${subText}`}>
            One question at a time. Mistakes repeat until corrected.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:flex sm:items-center gap-1.5 shrink-0">
          {['N5', 'N4'].map((lvl) => (
            <button
              key={lvl}
              onClick={() => { audio.playClick(); setSelectedLevel(lvl); }}
              className={`px-4 py-2.5 sm:py-2 rounded-xl text-xs font-bold whitespace-nowrap transition border cursor-pointer ${
                selectedLevel === lvl
                  ? 'bg-[#FF5E3A] text-white border-[#FF5E3A] font-extrabold shadow-sm shadow-orange-500/30'
                  : theme === 'dark' ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-white border-orange-100 text-slate-600 hover:text-[#FF5E3A]'
              }`}
            >
              JLPT {lvl} Test
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="py-16 text-center text-[#FF5E3A] text-sm">Loading JLPT Exam questions...</div>
      ) : allQuestions.length === 0 ? (
        <div className="py-16 text-center text-slate-400 text-sm">No questions available for {selectedLevel}.</div>
      ) : isFinished ? (
        <div className={`p-5 sm:p-8 rounded-2xl sm:rounded-3xl border ${cardBg} text-center space-y-5 sm:space-y-6 shadow-xl`}>
          <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-[#FF5E3A] flex items-center justify-center mx-auto">
            <Sparkles className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-black font-heading">Exam Complete! 🎉</h2>
            <p className={`text-xs ${subText}`}>
              {repeatCount === 0
                ? `Flawless! All ${initialTotal} questions answered correctly on first attempt.`
                : `All ${initialTotal} questions mastered. You corrected ${repeatCount} mistake${repeatCount !== 1 ? 's' : ''} during review.`}
            </p>
          </div>
          <div className={`p-3 sm:p-4 rounded-2xl border grid grid-cols-3 gap-2 sm:gap-4 ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div>
              <div className="text-[10px] font-mono font-bold text-slate-400 uppercase">Accuracy</div>
              <div className="text-base sm:text-xl font-black font-mono text-[#FF5E3A]">{accuracy}%</div>
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold text-slate-400 uppercase">Mastered</div>
              <div className="text-base sm:text-xl font-black font-mono text-emerald-500 break-all">{initialTotal}/{initialTotal}</div>
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold text-slate-400 uppercase">XP Earned</div>
              <div className="text-base sm:text-xl font-black font-mono text-amber-500">+50 XP</div>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="w-full sm:w-auto justify-center px-5 py-3 sm:py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer flex items-center gap-1.5 mx-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retake Exam</span>
          </button>
        </div>
      ) : currentQ ? (
        <div className={`p-4 sm:p-8 rounded-2xl sm:rounded-3xl border ${cardBg} space-y-5 sm:space-y-6 shadow-xl`}>
          {/* Progress */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-[11px] sm:text-xs font-mono">
              <div className="flex flex-wrap items-center gap-2">
                <span className={subText}><span className="sm:hidden">Q{currentIndex + 1} / {questions.length}</span><span className="hidden sm:inline">Question {currentIndex + 1} of {questions.length}</span></span>
                {isReviewItem && (
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 font-bold text-[10px] flex items-center gap-1">
                    <RotateCcw className="w-3 h-3 animate-spin" />
                    Reviewing Mistake
                  </span>
                )}
              </div>
              <span className="font-bold text-emerald-400">✓ {score}/{initialTotal} Mastered</span>
            </div>
            <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full transition-all duration-300"
                style={{ width: `${initialTotal > 0 ? Math.min(100, (score / initialTotal) * 100) : 0}%` }}
              />
            </div>
          </div>

          {/* Question Meta */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-orange-500/15 text-[#FF5E3A] border border-orange-500/30">
              {currentQ.section}
            </span>
            <span className="text-xs font-bold text-orange-500 font-mono">JLPT {currentQ.level}</span>
          </div>

          <h2 className="text-lg sm:text-xl font-bold font-jp leading-relaxed break-words">{currentQ.question}</h2>

          {/* Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            {currentQ.options.map((opt: string, optIdx: number) => {
              const isSelected = selectedOption === optIdx;
              const isCorrectOpt = optIdx === currentQ.correctIndex;
              let style = 'border-slate-200 dark:border-slate-800 hover:border-[#FF5E3A] bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200';
              if (isAnswered) {
                if (isCorrectOpt) style = 'border-emerald-500 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold';
                else if (isSelected) style = 'border-rose-500 bg-rose-500/15 text-rose-600 dark:text-rose-400';
                else style = 'opacity-40 border-slate-200 dark:border-slate-800';
              }
              return (
                <button
                  key={optIdx}
                  disabled={isAnswered}
                  onClick={() => handleSelect(optIdx)}
                  className={`p-3.5 sm:p-4 rounded-2xl border text-left text-sm font-semibold transition-all flex items-center justify-between gap-3 cursor-pointer ${style}`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className={`w-6 h-6 rounded-lg text-xs font-mono font-black flex items-center justify-center shrink-0 transition-all ${
                      isAnswered && isCorrectOpt
                        ? 'bg-emerald-500 text-white'
                        : isAnswered && isSelected
                          ? 'bg-rose-500 text-white'
                          : isSelected
                            ? 'bg-[#FF5E3A] text-white'
                            : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}>
                      {optIdx + 1}
                    </span>
                    <span className="leading-snug break-words min-w-0">{opt}</span>
                  </div>
                  {isAnswered && isCorrectOpt && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />}
                  {isAnswered && isSelected && !isCorrectOpt && <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Explanation + Next */}
          {isAnswered && (
            <div className="space-y-3 pt-1">
              {currentQ.explanation && (
                <div className={`p-3.5 rounded-xl text-xs flex items-start gap-2 ${
                  selectedOption === currentQ.correctIndex
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                    : 'bg-rose-500/10 text-rose-500 border border-rose-500/20'
                }`}>
                  {selectedOption === currentQ.correctIndex
                    ? <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    : <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />}
                  <span>{currentQ.explanation}</span>
                </div>
              )}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div>
                  {selectedOption !== currentQ.correctIndex && (
                    <span className="block text-[11px] font-bold text-amber-500 dark:text-amber-400 text-center sm:text-left">
                      🔄 This question will repeat at the end until answered correctly!
                    </span>
                  )}
                </div>
                <button
                  onClick={handleNext}
                  className="w-full sm:w-auto justify-center shrink-0 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#FF7B5C] to-[#FF5E3A] hover:from-[#FF5E3A] hover:to-[#E84E29] text-white font-bold text-xs flex items-center gap-2 transition cursor-pointer shadow-md shadow-orange-500/25"
                >
                  <span>{currentIndex + 1 < questions.length ? 'Next Question' : 'Finish Exam'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default ExamView;
