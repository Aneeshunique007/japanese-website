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
import { KanjiDetailsData } from '../types';
import { KanjiDetailModal } from './KanjiDetailModal';
import audio from '../utils/audio';
import { getKanjiPronunciation } from '../utils/romaji';
import { getKanjiDetails } from '../data/kanjiWords';
import { dataStore } from '../services/dataStore';

interface KanjiQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  kanjiList?: Array<{ char: string; meaning: string; jlpt?: string }>;
  targetChar?: string;
  theme: 'dark' | 'light';
  onCompleteQuiz?: (xpEarned: number) => void;
}

interface KanjiQuestionItem {
  char: string;
  meaning: string;
  jlpt: string;
  onyomi?: string[];
  kunyomi?: string[];
  options: string[];
}

export const KanjiQuizModal: React.FC<KanjiQuizModalProps> = ({
  isOpen,
  onClose,
  kanjiList = [],
  targetChar,
  theme,
  onCompleteQuiz
}) => {
  const [questions, setQuestions] = useState<KanjiQuestionItem[]>([]);
  const [initialTotal, setInitialTotal] = useState<number>(10);
  const [masteredCount, setMasteredCount] = useState<number>(0);
  const [repeatCount, setRepeatCount] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  // Entry Details Modal
  const [detailModalOpen, setDetailModalOpen] = useState<boolean>(false);
  const [activeKanjiDetail, setActiveKanjiDetail] = useState<KanjiDetailsData | null>(null);

  // Fallback Kanji List if none passed
  const defaultKanji = [
    { char: '日', meaning: 'Sun / Day', jlpt: 'N5' },
    { char: '本', meaning: 'Book / Origin', jlpt: 'N5' },
    { char: '学', meaning: 'Study / Learn', jlpt: 'N5' },
    { char: '生', meaning: 'Life / Birth', jlpt: 'N5' },
    { char: '食', meaning: 'Eat / Food', jlpt: 'N5' },
    { char: '車', meaning: 'Car / Vehicle', jlpt: 'N5' },
    { char: '水', meaning: 'Water', jlpt: 'N5' },
    { char: '火', meaning: 'Fire', jlpt: 'N5' },
    { char: '木', meaning: 'Tree / Wood', jlpt: 'N5' },
    { char: '金', meaning: 'Gold / Money', jlpt: 'N5' },
    { char: '土', meaning: 'Soil / Earth', jlpt: 'N5' },
    { char: '人', meaning: 'Person / Human', jlpt: 'N5' },
    { char: '大', meaning: 'Big / Large', jlpt: 'N5' },
    { char: '小', meaning: 'Small / Little', jlpt: 'N5' },
    { char: '年', meaning: 'Year', jlpt: 'N5' },
    { char: '時', meaning: 'Time / Hour', jlpt: 'N5' },
    { char: '山', meaning: 'Mountain', jlpt: 'N5' },
    { char: '川', meaning: 'River', jlpt: 'N5' },
    { char: '語', meaning: 'Language / Word', jlpt: 'N5' },
    { char: '飲', meaning: 'Drink', jlpt: 'N5' }
  ];

  // Track modal open state to prevent spurious regeneration while quiz is open
  const prevIsOpenRef = React.useRef(false);

  const generateQuestions = () => {
    const source = kanjiList && kanjiList.length > 0 ? kanjiList : defaultKanji;
    const allMeanings = dataStore.allKanji.map((k: any) => k.meaning);

    let pool = [...source];
    if (targetChar) {
      const match = pool.find(k => k.char === targetChar);
      if (match) {
        pool = [match, ...pool.filter(k => k.char !== targetChar)];
      }
    } else {
      pool.sort(() => Math.random() - 0.5);
    }

    let questionCount = 10;
    if (targetChar) {
      questionCount = Math.min(5, pool.length);
    } else if (source.length >= 100) {
      questionCount = Math.min(30, pool.length);
    } else {
      questionCount = Math.min(10, pool.length);
    }

    const generated: KanjiQuestionItem[] = pool.slice(0, questionCount).map(item => {
      const wrong = allMeanings
        .filter((m: string) => m !== item.meaning)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
      
      const options = [item.meaning, ...wrong].sort(() => Math.random() - 0.5);
      return {
        char: item.char,
        meaning: item.meaning,
        jlpt: item.jlpt || 'N5',
        onyomi: (item as any).onyomi,
        kunyomi: (item as any).kunyomi,
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

    // Only generate on fresh open or when targetChar changes, never while drill is active/finished
    if (!justOpened && questions.length > 0) return;

    generateQuestions();
  }, [isOpen, targetChar]);

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

    const isCorrect = opt === currentQ.meaning;
    if (isCorrect) {
      audio.playCorrect();
      setMasteredCount(prev => Math.min(totalQuestions, prev + 1));
    } else {
      audio.playIncorrect();
      setRepeatCount(prev => prev + 1);
      // REPEAT MISTAKEN KANJI QUESTION: Append to end of questions queue
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
    const details = getKanjiDetails(currentQ.char, currentQ.meaning, (currentQ.jlpt as any) || 'N5');
    setActiveKanjiDetail(details);
    setDetailModalOpen(true);
  };

  const isCurrentCorrect = selectedOption && currentQ && selectedOption === currentQ.meaning;
  const cardBg = theme === 'dark' ? 'bg-[#17171C] text-white border-slate-800' : 'bg-white text-slate-900 border-slate-200 shadow-2xl';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className={`w-full max-w-md ${cardBg} rounded-3xl border shadow-2xl overflow-hidden flex flex-col min-h-[480px] sm:min-h-[560px] max-h-[92vh] select-none transition-colors`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-3.5 sm:p-5 border-b border-slate-100 dark:border-slate-800/80 space-y-2.5 sm:space-y-3">
          <div className="flex items-center justify-between gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold bg-orange-500/10 text-[#FF5E3A] border border-orange-500/20">
                JLPT {currentQ ? currentQ.jlpt : 'N5'} • Drill
              </span>
              {!targetChar && kanjiList && kanjiList.length > 0 && !isReviewItem && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  {kanjiList.length} Pool
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

        {/* Content Area */}
        {!quizFinished && currentQ ? (
          <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between space-y-4 sm:space-y-6 overflow-y-auto">
            
            {/* Giant Central Kanji Character Display */}
            <div className="text-center space-y-1 pt-1 sm:pt-2">
              <div 
                onClick={() => audio.speak(getKanjiPronunciation(currentQ))}
                className="text-7xl sm:text-8xl md:text-9xl font-black font-jp tracking-tighter text-slate-900 dark:text-white hover:text-[#FF5E3A] dark:hover:text-[#FF5E3A] transition cursor-pointer active:scale-95 leading-none py-1"
                title="Tap to pronounce"
              >
                {currentQ.char}
              </div>

              <div className="text-[11px] sm:text-xs font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase">
                JLPT {currentQ.jlpt} Kanji
              </div>

              {!isAnswered && (
                <div className="pt-1 sm:pt-2">
                  <button
                    onClick={() => {
                      audio.speak(getKanjiPronunciation(currentQ));
                      setSelectedOption(currentQ.meaning);
                      setIsAnswered(true);
                    }}
                    className="px-3.5 py-1 sm:py-1.5 rounded-full text-xs font-bold bg-orange-500/10 hover:bg-orange-500/20 text-[#FF5E3A] border border-orange-500/30 transition cursor-pointer inline-flex items-center gap-1.5 shadow-xs"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>I don't know</span>
                  </button>
                </div>
              )}
            </div>

            {/* 2x2 Choice Grid with Numbered Badges 1-4 */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-1 sm:pt-2">
              {currentQ.options.map((opt, i) => {
                const isSelected = selectedOption === opt;
                const isThisTheCorrectAnswer = opt === currentQ.meaning;
                
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
                    className={`h-20 sm:h-28 px-2 sm:px-3 rounded-xl sm:rounded-2xl border text-xs sm:text-base font-black transition-all duration-150 cursor-pointer flex flex-col items-center justify-center text-center leading-tight relative ${btnStyle} ${
                      !isAnswered ? 'active:scale-95' : ''
                    }`}
                  >
                    <span className={`w-4 h-4 sm:w-5 sm:h-5 rounded-md text-[9px] sm:text-[10px] font-mono font-black flex items-center justify-center absolute top-2 left-2 sm:top-2.5 sm:left-2.5 ${
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
              
              <button
                onClick={handleOpenDetails}
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl hover:bg-orange-500/10 text-[#FF5E3A] font-bold text-xs transition cursor-pointer"
              >
                <div className="w-7 h-7 rounded-lg bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-[#FF5E3A]">
                  <FileText className="w-4 h-4" />
                </div>
                <span>Entry details</span>
              </button>

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
          /* Results */
          <div className="p-8 text-center space-y-6 my-auto">
            <div className="w-20 h-20 rounded-2xl bg-orange-500/10 text-[#FF5E3A] flex items-center justify-center mx-auto shadow-inner">
              <Sparkles className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-black font-heading text-slate-900 dark:text-white">Kanji Drill Complete!</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {repeatCount === 0 
                  ? `Flawless! All ${totalQuestions} Kanji characters mastered on first attempt!` 
                  : `All ${totalQuestions} Kanji mastered! (${repeatCount} mistakes corrected during review)`}
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

      {/* Entry Details Modal */}
      <KanjiDetailModal
        isOpen={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        kanjiData={activeKanjiDetail}
        theme={theme}
      />
    </div>
  );
};

export default KanjiQuizModal;
