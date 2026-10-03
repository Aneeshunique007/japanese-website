import React, { useState, useEffect } from 'react';
import { 
  X, 
  ArrowRight, 
  Check, 
  RotateCcw,
  Sparkles,
  Volume2
} from 'lucide-react';
import { WordItem } from '../types';
import audio from '../utils/audio';

interface WordQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  wordsList?: WordItem[];
  targetWord?: string;
  theme: 'dark' | 'light';
  onCompleteQuiz?: (xpEarned: number) => void;
}

interface WordQuestionItem {
  word: string;
  reading: string;
  romaji: string;
  meaning: string;
  jlpt: string;
  options: string[];
}

export const WordQuizModal: React.FC<WordQuizModalProps> = ({
  isOpen,
  onClose,
  wordsList = [],
  targetWord,
  theme,
  onCompleteQuiz
}) => {
  const [questions, setQuestions] = useState<WordQuestionItem[]>([]);
  const [initialTotal, setInitialTotal] = useState<number>(10);
  const [masteredCount, setMasteredCount] = useState<number>(0);
  const [repeatCount, setRepeatCount] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  // Track modal open state to prevent spurious regeneration while quiz is open
  const prevIsOpenRef = React.useRef(false);

  const generateQuestions = () => {
    if (wordsList.length === 0) return;

    // Distractor meanings from vocabulary list
    const allMeanings = wordsList.map(w => w.meaning);
    let pool = [...wordsList];

    if (targetWord) {
      const match = pool.find(w => w.word === targetWord);
      if (match) {
        pool = [match, ...pool.filter(w => w.word !== targetWord)];
      }
    } else {
      pool.sort(() => Math.random() - 0.5);
    }

    // Question count: 10 if < 100 learned, 30 if >= 100 learned
    let questionCount = 10;
    if (targetWord) {
      questionCount = Math.min(5, pool.length);
    } else if (pool.length >= 100) {
      questionCount = Math.min(30, pool.length);
    } else {
      questionCount = Math.min(10, pool.length);
    }

    const generated: WordQuestionItem[] = pool.slice(0, questionCount).map(item => {
      const wrong = allMeanings
        .filter(m => m !== item.meaning)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      const options = [item.meaning, ...wrong].sort(() => Math.random() - 0.5);
      return {
        word: item.word,
        reading: item.reading,
        romaji: item.romaji,
        meaning: item.meaning,
        jlpt: item.jlpt,
        options
      };
    });

    setQuestions(generated);
    setInitialTotal(generated.length);
    setMasteredCount(0);
    setRepeatCount(0);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setQuizFinished(false);
  };

  useEffect(() => {
    const justOpened = isOpen && !prevIsOpenRef.current;
    prevIsOpenRef.current = isOpen;

    if (!isOpen || wordsList.length === 0) return;

    // Only generate on fresh open or when targetWord changes, never while drill is active/finished
    if (!justOpened && questions.length > 0) return;

    generateQuestions();
  }, [isOpen, targetWord]);

  // Audio is played only when user clicks the speaker button

  if (!isOpen || questions.length === 0) return null;

  const currentQ = questions[currentIndex];
  const totalQuestions = initialTotal || questions.length || 10;
  const progressPercent = totalQuestions > 0 ? Math.min(100, (masteredCount / totalQuestions) * 100) : 0;
  const isReviewItem = currentIndex >= initialTotal;
  const cardBg = theme === 'dark' ? 'bg-[#17171C] text-white border-slate-800' : 'bg-white text-[#1A1A1F] border-slate-200';

  const handleSelectOption = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    if (option === currentQ.meaning) {
      audio.playCorrect();
      setMasteredCount(prev => Math.min(totalQuestions, prev + 1));
    } else {
      audio.playIncorrect();
      setRepeatCount(prev => prev + 1);
      // REPEAT MISTAKEN VOCAB QUESTION: Append to end of questions queue
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
      setQuizFinished(true);
      if (onCompleteQuiz) {
        const maxXp = totalQuestions >= 30 ? 150 : 60;
        onCompleteQuiz(maxXp);
      }
    }
  };

  const handleRestart = () => {
    audio.playClick();
    generateQuestions();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className={`w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-3xl border ${cardBg} shadow-2xl flex flex-col select-none`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-3.5 sm:p-5 border-b border-slate-100 dark:border-slate-800/80 space-y-2.5 sm:space-y-3">
          <div className="flex items-center justify-between gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <span className="text-[11px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-mono font-bold bg-orange-500/10 text-[#FF5E3A] border border-orange-500/20">
                JLPT {currentQ ? currentQ.jlpt : 'N5'} • Word Drill
              </span>
              {!targetWord && wordsList && wordsList.length > 0 && !isReviewItem && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  {wordsList.length} Pool
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              {isReviewItem ? (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-500 border border-amber-500/30 flex items-center gap-1 font-mono">
                  <RotateCcw className="w-3 h-3 animate-spin" />
                  Review
                </span>
              ) : (
                <span className="text-xs font-mono font-bold text-slate-400">
                  {currentIndex + 1}/{totalQuestions}
                </span>
              )}

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
          <div className="w-full h-1.5 sm:h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 to-[#FF5E3A] transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Quiz Content or Results */}
        {!quizFinished ? (
          <div className="p-4 sm:p-8 space-y-4 sm:space-y-6">
            
            {/* Word Display Hero */}
            <div className="py-4 sm:py-6 px-3 sm:px-4 rounded-3xl bg-orange-500/5 border border-orange-500/15 flex flex-col items-center justify-center text-center relative group">
              {currentQ.reading && currentQ.reading !== currentQ.word ? (
                <>
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-orange-400">
                      JLPT {currentQ.jlpt}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs sm:text-sm font-bold font-jp text-slate-700 dark:text-slate-300">
                      {currentQ.word}
                    </span>
                  </div>
                  <span className="text-4xl sm:text-5xl font-black font-jp text-slate-900 dark:text-white my-1 sm:my-2">
                    {currentQ.reading}
                  </span>
                </>
              ) : (
                <>
                  <span className="text-xs font-mono font-bold text-orange-400 mb-1">
                    JLPT {currentQ.jlpt}
                  </span>
                  <span className="text-4xl sm:text-5xl font-black font-jp text-slate-900 dark:text-white my-1 sm:my-2">
                    {currentQ.word}
                  </span>
                </>
              )}
              <span className="text-xs font-mono text-slate-400">
                {currentQ.romaji}
              </span>

              <button
                onClick={() => audio.speak(currentQ.reading ? currentQ.reading.replace(/\s+/g, '') : currentQ.word)}
                className="mt-2.5 sm:mt-3 p-2 sm:p-2.5 rounded-full bg-orange-500/10 hover:bg-[#FF5E3A] text-[#FF5E3A] hover:text-white transition cursor-pointer shadow-xs"
                title="Play pronunciation"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            <p className="text-center text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
              Select the correct English meaning:
            </p>

            {/* Multiple Choice Options with Numbered Badges 1-4 */}
            <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedOption === opt;
                const isCorrect = opt === currentQ.meaning;
                
                let btnStyle = 'border-slate-200 dark:border-slate-800 hover:border-orange-400 bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200';
                
                if (isAnswered) {
                  if (isCorrect) {
                    btnStyle = 'border-emerald-500 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold';
                  } else if (isSelected) {
                    btnStyle = 'border-rose-500 bg-rose-500/15 text-rose-600 dark:text-rose-400 font-bold';
                  } else {
                    btnStyle = 'opacity-40 border-slate-200 dark:border-slate-800';
                  }
                } else if (isSelected) {
                  btnStyle = 'border-[#FF5E3A] bg-orange-500/10 text-[#FF5E3A] font-bold shadow-xs';
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(opt)}
                    className={`w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left text-xs sm:text-sm font-semibold transition flex items-center justify-between cursor-pointer ${btnStyle}`}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <span className={`w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-mono font-black flex items-center justify-center shrink-0 ${
                        isSelected 
                          ? 'bg-[#FF5E3A] text-white' 
                          : theme === 'dark' ? 'bg-slate-800 text-slate-400' : 'bg-slate-200 text-slate-600'
                      }`}>
                        {idx + 1}
                      </span>
                      <span>{opt}</span>
                    </div>
                    {isAnswered && isCorrect && (
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            {isAnswered && (
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div>
                  {selectedOption !== currentQ?.meaning && (
                    <span className="text-[11px] font-bold text-amber-500 dark:text-amber-400 block text-center sm:text-left">
                      🔄 This word will repeat at the end until answered correctly!
                    </span>
                  )}
                </div>
                <button
                  onClick={handleNext}
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-[#FF7B5C] to-[#FF5E3A] hover:from-[#FF5E3A] hover:to-[#E84E29] text-white font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-md shadow-orange-500/25 shrink-0"
                >
                  <span>{currentIndex + 1 < questions.length ? 'Next Word' : 'Finish Drill'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Results screen */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-[#FF5E3A] flex items-center justify-center mx-auto shadow-inner">
              <Sparkles className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl font-black font-heading text-slate-900 dark:text-white">
                Drill Completed!
              </h2>
              <p className="text-xs text-slate-400">
                {repeatCount === 0 
                  ? `Flawless! All ${totalQuestions} vocabulary words mastered on first attempt!` 
                  : `All ${totalQuestions} words mastered! (${repeatCount} mistakes corrected during review)`}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-around">
              <div>
                <div className="text-xs text-slate-400">Mastery</div>
                <div className="text-xl font-mono font-black text-emerald-500">
                  100%
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-400">XP Earned</div>
                <div className="text-xl font-mono font-black text-[#FF5E3A]">
                  +{totalQuestions >= 30 ? 150 : 60} XP
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={handleRestart}
                className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Practice Again</span>
              </button>

              <button
                onClick={() => {
                  audio.playClick();
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-[#FF5E3A] hover:bg-[#E84E29] text-white text-xs font-bold transition cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
