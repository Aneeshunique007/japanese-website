import React, { useState, useEffect } from 'react';
import { 
  X, 
  ArrowRight, 
  FileText, 
  Check, 
  HelpCircle,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { getKanaDetails, KanaDetailsData } from '../data/kanaWords';
import { dataStore } from '../services/dataStore';
import { KanaDetailModal } from './KanaDetailModal';
import audio from '../utils/audio';

interface KanaQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  kanaList?: Array<{ char: string; romaji: string; script?: string; example?: string }>;
  initialScript?: 'hiragana' | 'katakana';
  targetChar?: string;
  theme: 'dark' | 'light';
  onCompleteQuiz?: (xpEarned: number) => void;
}

interface QuestionItem {
  char: string;
  romaji: string;
  script: 'Hiragana' | 'Katakana';
  options: string[];
}

export const KanaQuizModal: React.FC<KanaQuizModalProps> = ({
  isOpen,
  onClose,
  kanaList = [],
  initialScript = 'hiragana',
  targetChar,
  theme,
  onCompleteQuiz
}) => {
  const [script] = useState<'hiragana' | 'katakana'>(initialScript);
  const [questions, setQuestions] = useState<QuestionItem[]>([]);
  const [initialTotal, setInitialTotal] = useState<number>(10);
  const [masteredCount, setMasteredCount] = useState<number>(0);
  const [repeatCount, setRepeatCount] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  
  // Entry Details Drawer/Modal
  const [detailModalOpen, setDetailModalOpen] = useState<boolean>(false);
  const [activeKanaDetail, setActiveKanaDetail] = useState<KanaDetailsData | null>(null);

  // Track modal open state to prevent spurious regeneration while quiz is open
  const prevIsOpenRef = React.useRef(false);

  const generateQuestions = () => {
    const hira = dataStore.hiraganaData;
    const kata = dataStore.katakanaData;
    const allBasic = [
      ...(hira.basic || []),
      ...(hira.dakuten || []),
      ...(hira.yoon || []),
      ...(kata.basic || []),
      ...(kata.dakuten || []),
      ...(kata.yoon || [])
    ];

    // All available romaji readings for rich distractors
    const allRomajis = Array.from(new Set(allBasic.map(k => k.romaji)));

    // Pool from learned kana if provided
    const source = (kanaList && kanaList.length > 0) ? kanaList : allBasic;

    // Shuffle characters
    let pool = [...source];
    if (targetChar) {
      const match = pool.find(k => k.char === targetChar);
      if (match) {
        pool = [match, ...pool.filter(k => k.char !== targetChar)];
      }
    } else {
      pool.sort(() => Math.random() - 0.5);
    }

    // Question count: 10 if < 100 learned, 30 if >= 100 learned
    let questionCount = 10;
    if (targetChar) {
      questionCount = Math.min(5, pool.length);
    } else if (pool.length >= 100) {
      questionCount = Math.min(30, pool.length);
    } else {
      questionCount = Math.min(10, pool.length);
    }

    const generated: QuestionItem[] = pool.slice(0, questionCount).map(item => {
      // Pick 3 random wrong options
      const wrong = allRomajis
        .filter(r => r.toLowerCase() !== item.romaji.toLowerCase())
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
      
      const options = [item.romaji, ...wrong].sort(() => Math.random() - 0.5);
      return {
        char: item.char,
        romaji: item.romaji,
        script: (item.script as any) || (script === 'hiragana' ? 'Hiragana' : 'Katakana'),
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

    if (!isOpen) return;

    // Only generate on fresh open or when targetChar/script changes, never while drill is active/finished
    if (!justOpened && questions.length > 0) return;

    generateQuestions();
  }, [isOpen, script, targetChar]);

  // Audio is played only when user clicks the speaker button

  if (!isOpen) return null;

  const currentQ = questions[currentIndex];
  const totalQuestions = initialTotal || questions.length || 10;
  const progressPercent = totalQuestions > 0 ? Math.min(100, (masteredCount / totalQuestions) * 100) : 0;
  const isReviewItem = currentIndex >= initialTotal;

  const handleSelectOption = (opt: string) => {
    if (isAnswered) return;

    setSelectedOption(opt);
    setIsAnswered(true);

    const isCorrect = opt.toLowerCase() === currentQ.romaji.toLowerCase();
    if (isCorrect) {
      audio.playCorrect();
      setMasteredCount(prev => Math.min(totalQuestions, prev + 1));
    } else {
      audio.playIncorrect();
      setRepeatCount(prev => prev + 1);
      // REPEAT MISTAKEN KANA QUESTION: Append to end of questions queue
      setQuestions(prev => [...prev, currentQ]);
    }
  };

  const handleNextQuestion = () => {
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

  const handleOpenDetails = () => {
    if (!currentQ) return;
    audio.playClick();
    const details = getKanaDetails(currentQ.char, currentQ.romaji, currentQ.script);
    setActiveKanaDetail(details);
    setDetailModalOpen(true);
  };

  const isCurrentCorrect = selectedOption && currentQ && selectedOption.toLowerCase() === currentQ.romaji.toLowerCase();
  const cardBg = theme === 'dark' ? 'bg-[#17171C] text-white border-slate-800' : 'bg-white text-slate-900 border-slate-200 shadow-2xl';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className={`w-full max-w-md ${cardBg} rounded-3xl border shadow-2xl overflow-hidden flex flex-col min-h-[480px] sm:min-h-[560px] max-h-[92vh] select-none transition-colors`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800/80 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-500/10 text-[#FF5E3A] border border-orange-500/20">
                {currentQ ? currentQ.script : 'Kana'} Drill
              </span>
              {!targetChar && kanaList && kanaList.length > 0 && !isReviewItem && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  {kanaList.length} Learned Pool
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {isReviewItem ? (
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-500 border border-amber-500/30 flex items-center gap-1 font-mono">
                  <RotateCcw className="w-3 h-3 animate-spin" />
                  Reviewing Mistake
                </span>
              ) : (
                <span className="text-xs font-mono font-bold text-slate-400">
                  Question {currentIndex + 1} of {totalQuestions}
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
          <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 to-[#FF5E3A] transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Content Area */}
        {!quizFinished && currentQ ? (
          <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between space-y-4 sm:space-y-6 overflow-y-auto">
            
            {/* Giant Central Kana Character Display */}
            <div className="text-center space-y-1.5 pt-1 sm:pt-2">
              <div 
                onClick={() => audio.speak(currentQ.char)}
                className="text-7xl sm:text-8xl md:text-9xl font-black font-jp tracking-tighter text-slate-900 dark:text-white hover:text-[#FF5E3A] dark:hover:text-[#FF5E3A] transition cursor-pointer active:scale-95"
                title="Tap to pronounce"
              >
                {currentQ.char}
              </div>

              <div className="text-xs font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase">
                {currentQ.script}
              </div>

              {/* "I don't know" Clue Button */}
              {!isAnswered && (
                <div className="pt-2">
                  <button
                    onClick={() => {
                      audio.speak(currentQ.char);
                      setSelectedOption(currentQ.romaji);
                      setIsAnswered(true);
                    }}
                    className="px-4 py-1.5 rounded-full text-xs font-bold bg-orange-500/10 hover:bg-orange-500/20 text-[#FF5E3A] border border-orange-500/30 transition cursor-pointer inline-flex items-center gap-1.5 shadow-xs"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>I don't know</span>
                  </button>
                </div>
              )}
            </div>

            {/* 2x2 Choice Grid with Numbered Badges 1-4 */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {currentQ.options.map((opt, i) => {
                const isSelected = selectedOption === opt;
                const isThisTheCorrectAnswer = opt.toLowerCase() === currentQ.romaji.toLowerCase();
                
                let btnStyle = theme === 'dark'
                  ? 'bg-slate-900/80 hover:bg-slate-800 text-slate-200 border-slate-800 hover:border-orange-500/50'
                  : 'bg-slate-50 hover:bg-orange-50/50 text-slate-800 border-slate-200 hover:border-orange-400 shadow-sm';

                if (isAnswered) {
                  if (isThisTheCorrectAnswer) {
                    btnStyle = 'bg-emerald-500 text-white border-emerald-500 font-black shadow-lg shadow-emerald-500/25';
                  } else if (isSelected) {
                    btnStyle = 'bg-rose-500 text-white border-rose-500 font-black shadow-lg shadow-rose-500/25';
                  } else {
                    btnStyle = theme === 'dark'
                      ? 'bg-slate-900/40 text-slate-600 border-slate-900/50 opacity-40'
                      : 'bg-slate-100 text-slate-400 border-slate-200 opacity-40';
                  }
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(opt)}
                    className={`h-24 sm:h-28 rounded-2xl border text-2xl sm:text-3xl font-black font-mono transition-all duration-150 cursor-pointer flex flex-col items-center justify-center relative ${btnStyle} ${
                      !isAnswered ? 'active:scale-95' : ''
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-md text-[10px] font-mono font-black flex items-center justify-center absolute top-2.5 left-2.5 ${
                      isAnswered && (isThisTheCorrectAnswer || isSelected)
                        ? 'bg-white/20 text-white'
                        : theme === 'dark' ? 'bg-slate-800 text-slate-400' : 'bg-slate-200/80 text-slate-600'
                    }`}>
                      {i + 1}
                    </span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Action Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800/80">
              
              {/* [📄 Entry details] Button */}
              <button
                onClick={handleOpenDetails}
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl hover:bg-orange-500/10 text-[#FF5E3A] font-bold text-xs transition cursor-pointer"
              >
                <div className="w-7 h-7 rounded-lg bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-[#FF5E3A]">
                  <FileText className="w-4 h-4" />
                </div>
                <span>Entry details</span>
              </button>

              {/* Middle Status Indicator */}
              {isAnswered && (
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md ${
                    isCurrentCorrect 
                      ? 'bg-emerald-500 text-white shadow-emerald-500/25' 
                      : 'bg-rose-500 text-white shadow-rose-500/25'
                  }`}>
                    {isCurrentCorrect ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                  </div>
                  {!isCurrentCorrect && (
                    <span className="text-[11px] font-bold text-amber-500 dark:text-amber-400 hidden sm:inline">
                      🔄 Repeats at end until corrected!
                    </span>
                  )}
                </div>
              )}

              {/* [ -> Next question ] Button */}
              <button
                onClick={handleNextQuestion}
                disabled={!isAnswered}
                className={`px-5 py-2.5 rounded-full font-bold text-xs transition flex items-center gap-2 cursor-pointer shadow-md ${
                  isAnswered
                    ? 'bg-gradient-to-r from-[#FF7B5C] to-[#FF5E3A] hover:from-[#FF5E3A] hover:to-[#E84E29] text-white shadow-orange-500/25'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed opacity-50'
                }`}
              >
                <span>{currentIndex + 1 < questions.length ? 'Next question' : 'Finish Drill'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        ) : (
          /* Quiz Results Screen */
          <div className="p-8 text-center space-y-6 my-auto">
            <div className="w-20 h-20 rounded-2xl bg-orange-500/10 text-[#FF5E3A] flex items-center justify-center mx-auto shadow-inner">
              <Sparkles className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-black font-heading text-slate-900 dark:text-white">Kana Drill Complete!</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {repeatCount === 0 
                  ? `Flawless! All ${totalQuestions} kana characters mastered on first attempt!` 
                  : `All ${totalQuestions} kana mastered! (${repeatCount} mistakes corrected during review)`}
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

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  audio.playClick();
                  generateQuestions();
                }}
                className="flex-1 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs transition cursor-pointer flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Practice Again</span>
              </button>

              <button
                onClick={() => {
                  audio.playClick();
                  onClose();
                }}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#FF7B5C] to-[#FF5E3A] hover:from-[#FF5E3A] hover:to-[#E84E29] text-white font-bold text-xs transition cursor-pointer shadow-md shadow-orange-500/25"
              >
                Return to Table
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Entry Details Modal when user clicks [📄 Entry details] */}
      <KanaDetailModal
        isOpen={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        kanaData={activeKanaDetail}
        theme={theme}
      />
    </div>
  );
};

export default KanaQuizModal;
