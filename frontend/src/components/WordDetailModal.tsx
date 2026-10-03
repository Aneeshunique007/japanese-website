import React, { useState, useEffect } from 'react';
import { X, Volume2, Play, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { WordItem } from '../types';
import { learnedStore } from '../utils/learnedStore';
import audio from '../utils/audio';

interface WordDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  wordData: WordItem | null;
  onStartQuiz?: (word: string) => void;
  onGainXp?: (xp: number) => void;
  theme: 'dark' | 'light';
}

export const WordDetailModal: React.FC<WordDetailModalProps> = ({
  isOpen,
  onClose,
  wordData,
  onStartQuiz,
  onGainXp,
  theme
}) => {
  const [isLearned, setIsLearned] = useState(false);

  useEffect(() => {
    if (wordData) {
      setIsLearned(learnedStore.isWordLearned(wordData.id || wordData.word));
    }
  }, [wordData, isOpen]);

  const handleToggleLearned = () => {
    if (!wordData) return;
    const key = wordData.id || wordData.word;
    const nowLearned = learnedStore.toggleWordLearned(key);
    setIsLearned(nowLearned);
    if (nowLearned) {
      audio.playSuccess();
      try {
        confetti({
          particleCount: 45,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore if canvas not supported
      }
      if (onGainXp) onGainXp(10);
    } else {
      audio.playClick();
    }
  };

  if (!isOpen || !wordData) return null;

  const cardBg = theme === 'dark' ? 'bg-[#17171C] text-white border-slate-800' : 'bg-white text-[#1A1A1F] border-slate-200';
  const sentences = wordData.sentences || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div 
        className={`w-full max-w-3xl rounded-3xl border ${cardBg} shadow-2xl overflow-hidden flex flex-col max-h-[92vh]`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="px-2.5 sm:px-3 py-1 rounded-full text-xs font-mono font-black bg-orange-500/10 text-[#FF5E3A] border border-orange-500/20">
              JLPT {wordData.jlpt} Vocabulary
            </span>
            <span className="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-amber-500/10 text-amber-500">
              {wordData.posLabel}
            </span>
          </div>

          <button
            onClick={() => {
              audio.playClick();
              onClose();
            }}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-rose-500/20 hover:text-rose-500 text-slate-500 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-4 sm:p-8 space-y-5 sm:space-y-6 overflow-y-auto flex-1">
          
          {/* Hero Word Banner */}
          <div className={`p-4 sm:p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 ${
            theme === 'dark' ? 'bg-slate-900/60 border-slate-800' : 'bg-orange-50/40 border-orange-100'
          }`}>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
              {/* Word Display */}
              <div className="px-5 sm:px-6 py-3 sm:py-4 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#FF7B5C] to-[#FF5E3A] flex flex-col items-center justify-center text-white shadow-lg shadow-orange-500/30 min-w-[120px] sm:min-w-[130px] shrink-0">
                {wordData.reading && wordData.reading !== wordData.word ? (
                  <>
                    <span className="text-xs text-white/80 font-jp font-bold mb-1 tracking-wider">{wordData.word}</span>
                    <span className="text-3xl sm:text-4xl font-jp font-black">{wordData.reading}</span>
                  </>
                ) : (
                  <span className="text-3xl sm:text-4xl font-jp font-black">{wordData.word}</span>
                )}
                <span className="text-[11px] font-mono text-white/90 mt-1">{wordData.romaji}</span>
              </div>

              <div className="space-y-1 text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-black font-heading text-slate-900 dark:text-white">
                  {wordData.meaning}
                </h2>
                <div className="text-xs font-mono font-bold text-[#FF5E3A]">
                  Reading: {wordData.reading} ({wordData.romaji})
                </div>

                {wordData.kanjiBreakdown && wordData.kanjiBreakdown.length > 0 && (
                  <div className="flex items-center gap-1.5 sm:gap-2 pt-1.5 flex-wrap justify-center sm:justify-start">
                    <span className="text-[11px] text-slate-400 font-bold">Kanji in word:</span>
                    {wordData.kanjiBreakdown.map((k, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-orange-500/10 text-[#FF5E3A] text-xs font-jp font-bold">
                        {k.char || k.kanji} ({k.meaning})
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Audio & Quick Quiz Actions */}
            <div className="flex sm:flex-col items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={() => audio.speak(wordData.reading ? wordData.reading.replace(/\s+/g, '') : wordData.word)}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-[#FF5E3A] text-white hover:bg-[#E84E29] transition cursor-pointer flex items-center justify-center gap-2 text-xs font-bold shadow-md shadow-orange-500/20"
              >
                <Volume2 className="w-4 h-4" />
                <span>Listen Audio</span>
              </button>

              {onStartQuiz && (
                <button
                  onClick={() => onStartQuiz(wordData.word)}
                  className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-orange-200 dark:border-slate-700 hover:border-[#FF5E3A] transition cursor-pointer flex items-center justify-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-[#FF5E3A]"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Practice Word</span>
                </button>
              )}
            </div>
          </div>

          {/* Completion Status & Mark as Learned Bar */}
          <div className={`p-4 sm:p-5 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 transition ${
            isLearned
              ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-700 dark:text-emerald-300 shadow-xs'
              : theme === 'dark' ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200/80'
          }`}>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                isLearned 
                  ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30' 
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-400'
              }`}>
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                  {isLearned ? 'Word Mastered!' : 'Did you complete this Vocabulary Word?'}
                  {isLearned && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500 text-white font-bold">
                      Learned
                    </span>
                  )}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {isLearned 
                    ? 'This card is highlighted in green across your vocabulary gallery.' 
                    : 'Mark as completed to turn this card green and earn +10 XP.'}
                </p>
              </div>
            </div>

            <button
              onClick={handleToggleLearned}
              className={`w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-black transition flex items-center justify-center gap-2 cursor-pointer ${
                isLearned
                  ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/40'
                  : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-md shadow-emerald-500/30 active:scale-95'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isLearned ? 'Marked as Learned ✓' : 'Mark as Learned (+10 XP)'}</span>
            </button>
          </div>

          {/* Section: 2 Easy Contextual Sentences */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
              <h3 className="text-sm font-black font-heading flex items-center gap-2 text-slate-900 dark:text-white">
                <MessageSquareQuote className="w-4 h-4 text-[#FF5E3A] shrink-0" />
                <span>2 Easy Contextual Sentences (例文)</span>
              </h3>
              <span className="text-[11px] font-mono text-slate-400">Natural Everyday Japanese</span>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:gap-3.5">
              {sentences.map((stn, idx) => (
                <div
                  key={stn.id || idx}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                    theme === 'dark' 
                      ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700' 
                      : 'bg-white border-slate-200/90 hover:border-orange-200 shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div className="space-y-1.5 sm:space-y-2 flex-1 min-w-0">
                      {/* Sentence Number */}
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-orange-500/10 text-[#FF5E3A]">
                        Sentence #{idx + 1}
                      </span>

                      {/* Furigana Reading */}
                      <div className="text-xs text-slate-400 font-jp leading-relaxed">
                        {stn.furigana}
                      </div>

                      {/* Japanese Sentence */}
                      <div className="text-base sm:text-lg font-bold font-jp text-slate-900 dark:text-white leading-relaxed">
                        {stn.sentence}
                      </div>

                      {/* Romaji */}
                      <div className="text-xs font-mono text-orange-500 dark:text-orange-400">
                        {stn.romaji}
                      </div>

                      {/* English Meaning */}
                      <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 pt-1 font-medium border-t border-slate-100 dark:border-slate-800/80">
                        {stn.english}
                      </div>
                    </div>

                    {/* Speech audio button for each sentence */}
                    <button
                      onClick={() => audio.speak(stn.furigana ? stn.furigana.replace(/\s+/g, '') : stn.sentence)}
                      className="p-2.5 sm:p-3 rounded-2xl bg-orange-500/10 hover:bg-[#FF5E3A] text-[#FF5E3A] hover:text-white transition cursor-pointer shrink-0 mt-1 sm:mt-2"
                      title="Listen to sentence pronunciation"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-5 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            onClick={() => {
              audio.playClick();
              onClose();
            }}
            className="px-6 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs hover:bg-slate-300 dark:hover:bg-slate-700 transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
