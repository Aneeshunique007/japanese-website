import React, { useState, useEffect } from 'react';
import { 
  X, 
  Volume2, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  RotateCcw, 
  Sparkles, 
  Trophy
} from 'lucide-react';
import { Question } from '../types';
import audio from '../utils/audio';

interface PracticeQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  questions: Question[];
  theme: 'dark' | 'light';
  showFurigana?: boolean;
  onCompleteQuiz?: (xpEarned: number) => void;
}

export const PracticeQuizModal: React.FC<PracticeQuizModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  questions,
  theme,
  showFurigana = true,
  onCompleteQuiz
}) => {
  const [activeQuestions, setActiveQuestions] = useState<Question[]>(() => [...questions]);
  const [initialCount, setInitialCount] = useState<number>(questions.length);
  const [masteredCount, setMasteredCount] = useState<number>(0);
  const [, setRepeatCount] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [earnedXp, setEarnedXp] = useState(0);

  // Sentence builder state
  const [selectedTokens, setSelectedTokens] = useState<string[]>([]);
  const [availableTokens, setAvailableTokens] = useState<string[]>([]);

  // Matching pairs state
  const [matchingPairs, setMatchingPairs] = useState<{ ja: string[]; en: string[] }>({ ja: [], en: [] });
  const [selectedJa, setSelectedJa] = useState<string | null>(null);
  const [selectedEn, setSelectedEn] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({});
  const [pairError, setPairError] = useState<boolean>(false);

  const currentQ = activeQuestions[currentIndex] || questions[0];
  const isReviewItem = currentIndex >= initialCount;

  // Initialize or reset current question
  useEffect(() => {
    if (!isOpen || !activeQuestions.length) return;

    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setSelectedJa(null);
    setSelectedEn(null);
    setMatchedPairs({});
    setPairError(false);

    if (currentQ?.type === 'sentence-builder') {
      const tokens = currentQ.tokens ? [...currentQ.tokens] : [...(currentQ.targetSentence || [])];
      setAvailableTokens(tokens.sort(() => Math.random() - 0.5));
      setSelectedTokens([]);
    } else if (currentQ?.type === 'matching-pairs' && currentQ.pairs) {
      const jaList = currentQ.pairs.map(p => p.ja).sort(() => Math.random() - 0.5);
      const enList = currentQ.pairs.map(p => p.en).sort(() => Math.random() - 0.5);
      setMatchingPairs({ ja: jaList, en: enList });
    }
  }, [currentIndex, isOpen, activeQuestions, quizFinished]);

  // Reset entire quiz when modal is opened
  useEffect(() => {
    if (isOpen) {
      const shuffled = [...questions].sort(() => Math.random() - 0.5);
      setActiveQuestions(shuffled);
      setInitialCount(shuffled.length);
      setMasteredCount(0);
      setRepeatCount(0);
      setCurrentIndex(0);
      setCorrectCount(0);
      setQuizFinished(false);
      setEarnedXp(0);
    }
  }, [isOpen, questions]);

  if (!isOpen || !questions || questions.length === 0) return null;

  // Handle Token Click in Sentence Builder
  const handleSelectToken = (token: string, index: number) => {
    if (isAnswered) return;
    audio.playClick();
    setSelectedTokens(prev => [...prev, token]);
    setAvailableTokens(prev => prev.filter((_, i) => i !== index));
  };

  const handleDeselectToken = (token: string, index: number) => {
    if (isAnswered) return;
    audio.playClick();
    setSelectedTokens(prev => prev.filter((_, i) => i !== index));
    setAvailableTokens(prev => [...prev, token]);
  };

  // Handle Matching Pairs clicks
  const handleJaClick = (ja: string) => {
    if (isAnswered || matchedPairs[ja]) return;
    audio.playClick();
    setSelectedJa(ja);

    if (selectedEn) {
      checkPair(ja, selectedEn);
    }
  };

  const handleEnClick = (en: string) => {
    if (isAnswered || Object.values(matchedPairs).includes(en)) return;
    audio.playClick();
    setSelectedEn(en);

    if (selectedJa) {
      checkPair(selectedJa, en);
    }
  };

  const checkPair = (ja: string, en: string) => {
    const isPairValid = currentQ.pairs?.some(p => p.ja === ja && p.en === en);
    if (isPairValid) {
      audio.playTone(660, 'triangle', 0.1, 0.15);
      const updated = { ...matchedPairs, [ja]: en };
      setMatchedPairs(updated);
      setSelectedJa(null);
      setSelectedEn(null);

      // Check if all pairs matched
      if (currentQ.pairs && Object.keys(updated).length === currentQ.pairs.length) {
        setIsAnswered(true);
        setIsCorrect(true);
        setCorrectCount(prev => prev + 1);
        setEarnedXp(prev => prev + 15);
        audio.playSuccess();
      }
    } else {
      audio.playIncorrect();
      setPairError(true);
      setTimeout(() => {
        setSelectedJa(null);
        setSelectedEn(null);
        setPairError(false);
      }, 500);
    }
  };

  // Multiple Choice / Audio Listening / Reverse Choice: 1-click immediate evaluation
  const handleSelectOption = (optIdx: number) => {
    if (isAnswered) return;
    audio.playClick();
    setSelectedOption(optIdx);

    const correct = optIdx === currentQ.correctIndex;
    setIsAnswered(true);
    setIsCorrect(correct);

    if (correct) {
      audio.playSuccess();
      setCorrectCount(prev => prev + 1);
      setMasteredCount(prev => Math.min(initialCount, prev + 1));
      setEarnedXp(prev => prev + 15);
    } else {
      audio.playIncorrect();
      setRepeatCount(prev => prev + 1);
      // REPEAT MISTAKEN QUESTION: Push it to the end so user masters it
      setActiveQuestions(prev => [...prev, currentQ]);
    }
  };

  // Check Answer (for Sentence Builder)
  const handleCheckAnswer = () => {
    if (isAnswered) return;

    let correct = false;

    if (currentQ.type === 'sentence-builder') {
      const targetStr = (currentQ.targetSentence || []).join('').replace(/[\s。、！？.,!?]/g, '').toLowerCase();
      const userStr = selectedTokens.join('').replace(/[\s。、！？.,!?]/g, '').toLowerCase();
      correct = userStr === targetStr;
    } else if (currentQ.type === 'multiple-choice' || currentQ.type === 'audio-listening' || currentQ.type === 'reverse-choice') {
      if (selectedOption === null) return;
      correct = selectedOption === currentQ.correctIndex;
    }

    setIsAnswered(true);
    setIsCorrect(correct);

    if (correct) {
      audio.playSuccess();
      setCorrectCount(prev => prev + 1);
      setMasteredCount(prev => Math.min(initialCount, prev + 1));
      setEarnedXp(prev => prev + 15);
    } else {
      audio.playIncorrect();
      setRepeatCount(prev => prev + 1);
      // REPEAT MISTAKEN QUESTION: Push it to the end so user masters it
      setActiveQuestions(prev => [...prev, currentQ]);
    }
  };

  // Next Question
  const handleNext = () => {
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setQuizFinished(true);
      audio.playFanfare();
      if (onCompleteQuiz) {
        onCompleteQuiz(earnedXp + (correctCount > 0 ? 10 : 0));
      }
    }
  };

  const progressPercent = initialCount > 0 
    ? Math.min(100, Math.round((masteredCount / initialCount) * 100)) 
    : 100;

  const isDark = theme === 'dark';
  const cardBg = isDark ? 'bg-[#17171C] border-slate-800 text-white' : 'bg-white border-slate-200 text-[#1A1A1F]';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className={`w-full max-w-2xl min-h-[480px] sm:min-h-[580px] max-h-[92vh] rounded-3xl shadow-2xl flex flex-col justify-between overflow-hidden border transition-all ${cardBg}`}
      >
        {/* TOP STATUS BAR */}
        <div className="px-4 sm:px-6 pt-4 sm:pt-5 pb-3 border-b border-slate-100 dark:border-slate-800/80 space-y-2.5 sm:space-y-3">
          <div className="flex items-center justify-between gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold bg-orange-500/10 text-[#FF5E3A] border border-orange-500/20 truncate max-w-[150px] sm:max-w-xs">
                {title}
              </span>
              {subtitle && (
                <span className="text-[11px] text-slate-400 hidden sm:inline truncate max-w-[150px]">
                  {subtitle}
                </span>
              )}
              <span className="flex items-center gap-1 px-2 sm:px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-500 font-bold text-[10px] sm:text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>+{earnedXp} XP</span>
              </span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              {isReviewItem ? (
                <span className="text-[10px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-500 border border-amber-500/30 flex items-center gap-1 font-mono">
                  <RotateCcw className="w-3 h-3 animate-spin" />
                  Review
                </span>
              ) : (
                <span className="text-xs font-mono font-bold text-slate-400">
                  {currentIndex + 1}/{initialCount}
                </span>
              )}

              <button
                onClick={() => {
                  audio.playClick();
                  onClose();
                }}
                className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-400 hover:text-rose-500 hover:bg-rose-500/15 transition cursor-pointer ml-1"
                title="Exit Quiz"
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

        {/* MAIN BODY */}
        <div className="flex-1 p-5 sm:p-7 overflow-y-auto flex flex-col justify-between space-y-6">
          {!quizFinished ? (
            <div className="space-y-6 flex-1 flex flex-col justify-between">
              {/* Question Header Prompt */}
              <div>
                <div className="flex items-center justify-between text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">
                  <span>PRACTICE DRILL</span>
                  <span className="capitalize">{currentQ.type.replace(/-/g, ' ')}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black font-heading leading-snug">
                  {currentQ.prompt}
                </h3>
              </div>

              {/* UNIFIED QUESTION PROMPT CARD */}
              {(currentQ.kanji || currentQ.audioText || currentQ.type === 'audio-listening') && (
                <div className={`p-6 rounded-2xl border flex flex-col items-center justify-center text-center gap-2 relative transition ${
                  isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-orange-50/30 border-orange-100'
                }`}>
                  {showFurigana && currentQ.furigana && currentQ.furigana !== currentQ.kanji && (
                    <span className="text-xs font-jp text-slate-400 font-bold block">
                      {currentQ.furigana}
                    </span>
                  )}

                  {currentQ.kanji && (
                    <span className="text-4xl sm:text-5xl font-black font-jp tracking-wide block text-slate-900 dark:text-white">
                      {currentQ.kanji}
                    </span>
                  )}

                  {showFurigana && currentQ.romaji && (
                    <span className="text-xs font-mono font-bold text-[#FF5E3A] block">
                      {currentQ.romaji}
                    </span>
                  )}

                  {currentQ.audioText && (
                    <button
                      onClick={() => {
                        const textToSpeak = (currentQ.furigana ? currentQ.furigana.replace(/\s+/g, '') : (currentQ.audioText ? currentQ.audioText.replace(/\s+/g, '') : currentQ.kanji || ''));
                        audio.speak(textToSpeak);
                      }}
                      className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 text-[#FF5E3A] font-bold text-xs transition cursor-pointer"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>Listen Audio</span>
                    </button>
                  )}
                </div>
              )}

              {/* 1. MULTIPLE CHOICE / AUDIO LISTENING / REVERSE CHOICE (Numbered 1, 2, 3, 4) */}
              {(currentQ.type === 'multiple-choice' || currentQ.type === 'audio-listening' || currentQ.type === 'reverse-choice') && currentQ.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-auto py-1">
                  {currentQ.options.map((option, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrectAnswer = isAnswered && idx === currentQ.correctIndex;
                    const isWrongAnswer = isAnswered && isSelected && !isCorrect;

                    let btnStyle = isDark 
                      ? 'bg-slate-900/60 border-slate-800 text-slate-200 hover:border-[#FF5E3A]' 
                      : 'bg-white border-slate-200 text-slate-800 hover:border-[#FF5E3A] shadow-xs';

                    if (isAnswered) {
                      if (isCorrectAnswer) {
                        btnStyle = 'border-emerald-500 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold';
                      } else if (isWrongAnswer) {
                        btnStyle = 'border-rose-500 bg-rose-500/15 text-rose-500 font-bold';
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
                        onClick={() => handleSelectOption(idx)}
                        className={`p-4 rounded-2xl border text-left flex items-center justify-between transition cursor-pointer text-sm font-bold ${btnStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-6 h-6 rounded-lg text-xs font-mono font-black flex items-center justify-center shrink-0 ${
                            isSelected 
                              ? 'bg-[#FF5E3A] text-white' 
                              : isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                          }`}>
                            {idx + 1}
                          </span>
                          <span className="font-jp">{option}</span>
                        </div>
                        {isAnswered && isCorrectAnswer && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />}
                        {isAnswered && isWrongAnswer && <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* 2. SENTENCE BUILDER */}
              {currentQ.type === 'sentence-builder' && (
                <div className="space-y-4 my-auto">
                  {/* Drop Area / Selected Tokens */}
                  <div className="min-h-[72px] p-3 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/40 flex flex-wrap gap-2 items-center">
                    {selectedTokens.length === 0 ? (
                      <span className="text-slate-400 text-xs italic pl-2">
                        Tap words below in the correct order…
                      </span>
                    ) : (
                      selectedTokens.map((token, i) => (
                        <button
                          key={i}
                          onClick={() => handleDeselectToken(token, i)}
                          disabled={isAnswered}
                          className="px-3.5 py-2 rounded-xl bg-[#FF5E3A] text-white font-bold font-jp text-sm shadow-xs hover:bg-[#E84E29] transition cursor-pointer"
                        >
                          {token}
                        </button>
                      ))
                    )}
                  </div>

                  {/* Word Bank / Available Tokens */}
                  <div className="flex flex-wrap justify-center gap-2.5 pt-2">
                    {availableTokens.map((token, i) => (
                      <button
                        key={i}
                        onClick={() => handleSelectToken(token, i)}
                        disabled={isAnswered}
                        className={`px-4 py-2.5 rounded-xl border font-jp font-bold text-sm transition cursor-pointer ${
                          isDark 
                            ? 'bg-slate-900/80 hover:bg-slate-800 text-slate-200 border-slate-800 hover:border-[#FF5E3A]' 
                            : 'bg-white hover:bg-orange-50/50 text-slate-800 border-slate-200 hover:border-[#FF5E3A] shadow-xs'
                        }`}
                      >
                        {token}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. MATCHING PAIRS */}
              {currentQ.type === 'matching-pairs' && (
                <div className="grid grid-cols-2 gap-3 my-auto">
                  {/* Left: Japanese */}
                  <div className="space-y-2">
                    {matchingPairs.ja.map((ja, idx) => {
                      const isMatched = !!matchedPairs[ja];
                      const isSelected = selectedJa === ja;
                      
                      return (
                        <button
                          key={idx}
                          onClick={() => handleJaClick(ja)}
                          disabled={isMatched}
                          className={`w-full p-3.5 rounded-xl border text-center font-jp font-bold text-sm transition cursor-pointer ${
                            isMatched
                              ? 'bg-emerald-500/15 border-emerald-500 text-emerald-500 opacity-60'
                              : isSelected
                              ? 'bg-orange-500/15 border-[#FF5E3A] text-[#FF5E3A] ring-2 ring-orange-500/30'
                              : isDark
                              ? 'bg-slate-900/70 hover:bg-slate-800 border-slate-800'
                              : 'bg-white hover:bg-slate-50 border-slate-200 shadow-xs'
                          } ${pairError && isSelected ? 'border-rose-500 text-rose-500' : ''}`}
                        >
                          {ja}
                        </button>
                      );
                    })}
                  </div>

                  {/* Right: English */}
                  <div className="space-y-2">
                    {matchingPairs.en.map((en, idx) => {
                      const isMatched = Object.values(matchedPairs).includes(en);
                      const isSelected = selectedEn === en;

                      return (
                        <button
                          key={idx}
                          onClick={() => handleEnClick(en)}
                          disabled={isMatched}
                          className={`w-full p-3.5 rounded-xl border text-center font-bold text-sm transition cursor-pointer ${
                            isMatched
                              ? 'bg-emerald-500/15 border-emerald-500 text-emerald-500 opacity-60'
                              : isSelected
                              ? 'bg-orange-500/15 border-[#FF5E3A] text-[#FF5E3A] ring-2 ring-orange-500/30'
                              : isDark
                              ? 'bg-slate-900/70 hover:bg-slate-800 border-slate-800'
                              : 'bg-white hover:bg-slate-50 border-slate-200 shadow-xs'
                          } ${pairError && isSelected ? 'border-rose-500 text-rose-500' : ''}`}
                        >
                          {en}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* COMPLETION SCREEN */
            <div className="text-center py-8 space-y-6 max-w-md mx-auto my-auto animate-fade-in">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <Trophy className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-black font-heading tracking-tight">Practice Complete! 🎉</h3>
                <p className="text-xs text-slate-400">
                  Great job mastering all questions in this practice drill.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className={`p-4 rounded-2xl border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase">Correct</div>
                  <div className="text-2xl font-black font-mono text-emerald-500 mt-0.5">{correctCount}/{initialCount}</div>
                </div>
                <div className={`p-4 rounded-2xl border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase">Total XP</div>
                  <div className="text-2xl font-black font-mono text-[#FF5E3A] mt-0.5">+{earnedXp} XP</div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black text-sm shadow-lg shadow-emerald-500/25 transition cursor-pointer"
              >
                Back to Lessons
              </button>
            </div>
          )}
        </div>

        {/* BOTTOM FEEDBACK DRAWER / ACTION BAR */}
        {!quizFinished && (
          <div className={`p-4 sm:p-5 border-t transition-all ${
            isAnswered 
              ? isCorrect 
                ? 'bg-emerald-500/10 border-emerald-500/30' 
                : 'bg-rose-500/10 border-rose-500/30' 
              : 'border-slate-100 dark:border-slate-800/80'
          }`}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Feedback text */}
              {isAnswered ? (
                isCorrect ? (
                  <div className="flex items-center gap-2.5 text-emerald-500">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <div>
                      <h4 className="text-sm font-black">Correct! Excellent work.</h4>
                      <p className="text-[11px] text-slate-400">+15 XP earned</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-2.5 text-rose-500">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-black">Not quite right.</h4>
                      <span className="text-[10px] font-bold text-amber-500 block mt-0.5">
                        🔄 This question will repeat at the end until answered correctly!
                      </span>
                    </div>
                  </div>
                )
              ) : (
                <div className="text-xs text-slate-400">
                  {currentQ.type === 'sentence-builder' 
                    ? 'Arrange the word tiles and press Check' 
                    : currentQ.type === 'matching-pairs'
                    ? 'Tap matching Japanese and English pairs'
                    : 'Select the correct answer'}
                </div>
              )}

              {/* Action Button: Check Answer (sentence builder) or Continue */}
              {!isAnswered ? (
                currentQ.type === 'sentence-builder' ? (
                  <button
                    onClick={handleCheckAnswer}
                    disabled={selectedTokens.length === 0}
                    className={`w-full sm:w-auto px-7 py-3 rounded-2xl font-black text-xs transition cursor-pointer flex items-center justify-center gap-2 shadow-md ${
                      selectedTokens.length === 0
                        ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed opacity-50'
                        : 'bg-gradient-to-r from-[#FF7B5C] to-[#FF5E3A] hover:from-[#FF5E3A] hover:to-[#E84E29] text-white shadow-orange-500/25 active:scale-95'
                    }`}
                  >
                    <span>Check Answer</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : null
              ) : (
                <button
                  onClick={handleNext}
                  className={`w-full sm:w-auto px-7 py-3 rounded-2xl font-black text-xs text-white transition cursor-pointer flex items-center justify-center gap-2 shadow-md ${
                    isCorrect
                      ? 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/20'
                      : 'bg-rose-500 hover:bg-rose-600 shadow-rose-500/20'
                  }`}
                >
                  <span>{currentIndex < activeQuestions.length - 1 ? 'Next Question' : 'Complete Drill'}</span>
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

export default PracticeQuizModal;
