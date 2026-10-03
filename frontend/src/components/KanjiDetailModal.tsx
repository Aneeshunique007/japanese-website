import React from 'react';
import { X, Volume2, Play, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { KanjiDetailsData } from '../types';
import { learnedStore } from '../utils/learnedStore';
import audio from '../utils/audio';
import { getKanjiPronunciation } from '../utils/romaji';

interface KanjiDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  kanjiData: KanjiDetailsData | null;
  onStartQuiz?: (kanjiChar: string) => void;
  onGainXp?: (xp: number) => void;
  theme: 'dark' | 'light';
}

export const KanjiDetailModal: React.FC<KanjiDetailModalProps> = ({
  isOpen,
  onClose,
  kanjiData,
  onStartQuiz,
  onGainXp,
  theme
}) => {
  if (!isOpen || !kanjiData) return null;

  const isLearned = learnedStore.isKanjiLearned(kanjiData.char);

  const handleToggleLearned = () => {
    const nextState = learnedStore.toggleKanjiLearned(kanjiData.char);
    if (nextState) {
      audio.playFanfare();
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
      if (onGainXp) onGainXp(10);
    } else {
      audio.playClick();
    }
  };

  const cardBg = theme === 'dark' ? 'bg-[#17171C] text-white border-slate-800' : 'bg-white text-[#1A1A1F] border-slate-200';
  const sentences = kanjiData.sentences || [];

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
              JLPT {kanjiData.jlpt} Kanji Detail
            </span>
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider hidden sm:inline">
              2 Easy Contextual Sentences
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
          
          {/* Hero Kanji Banner */}
          <div className={`p-4 sm:p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 ${
            theme === 'dark' ? 'bg-slate-900/60 border-slate-800' : 'bg-orange-50/40 border-orange-100'
          }`}>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
              {/* Giant Kanji Character */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#FF7B5C] to-[#FF5E3A] flex items-center justify-center text-white font-jp font-black text-4xl sm:text-5xl shadow-lg shadow-orange-500/30 shrink-0">
                {kanjiData.char}
              </div>

              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <h2 className="text-xl sm:text-2xl font-black font-heading text-slate-900 dark:text-white">
                    {kanjiData.meaning}
                  </h2>
                  <span className="text-xs px-2.5 py-0.5 rounded-md bg-slate-200 dark:bg-slate-800 font-mono font-bold text-slate-600 dark:text-slate-300">
                    {kanjiData.strokes} Strokes
                  </span>
                </div>
                
                <div className="text-xs font-mono font-bold text-[#FF5E3A] flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start pt-0.5">
                  {kanjiData.onyomi.length > 0 && (
                    <span>音 (On): {kanjiData.onyomi.join(', ')}</span>
                  )}
                  {kanjiData.kunyomi.length > 0 && (
                    <span>訓 (Kun): {kanjiData.kunyomi.join(', ')}</span>
                  )}
                </div>

                <p className="text-xs text-slate-400 max-w-md pt-0.5">
                  {kanjiData.mnemonic}
                </p>
              </div>
            </div>

            {/* Audio & Quick Quiz Actions */}
            <div className="flex sm:flex-col items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={() => audio.speak(getKanjiPronunciation(kanjiData))}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-[#FF5E3A] text-white hover:bg-[#E84E29] transition cursor-pointer flex items-center justify-center gap-2 text-xs font-bold shadow-md shadow-orange-500/20"
              >
                <Volume2 className="w-4 h-4" />
                <span>Pronounce</span>
              </button>

              {onStartQuiz && (
                <button
                  onClick={() => {
                    audio.playClick();
                    onStartQuiz(kanjiData.char);
                  }}
                  className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-[#FF5E3A] transition cursor-pointer flex items-center justify-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200"
                >
                  <Play className="w-3.5 h-3.5 text-[#FF5E3A]" />
                  <span>Drill Quiz</span>
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
                  {isLearned ? 'Kanji Mastered!' : 'Did you complete this Kanji?'}
                  {isLearned && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500 text-white font-bold">
                      Learned
                    </span>
                  )}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {isLearned 
                    ? 'This card is highlighted in green across your Kanji gallery.' 
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

          {/* SECTION: 2 SENTENCES FOR THIS KANJI */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
              <div className="flex items-center gap-2">
                <MessageSquareQuote className="w-5 h-5 text-[#FF5E3A] shrink-0" />
                <h3 className="text-base sm:text-lg font-black font-heading leading-tight">
                  2 Easy Example Sentences with 「{kanjiData.char}」
                </h3>
              </div>
              <span className="text-[11px] sm:text-xs text-slate-400 font-mono font-bold">
                Tap speaker on any sentence
              </span>
            </div>

            <div className="space-y-3">
              {sentences.map((s, idx) => (
                <div
                  key={idx}
                  className={`p-4 sm:p-5 rounded-2xl border transition group ${
                    theme === 'dark' 
                      ? 'bg-slate-900/40 border-slate-800 hover:border-[#FF5E3A]/40' 
                      : 'bg-slate-50/70 border-slate-200/80 hover:border-[#FF5E3A]/40 hover:bg-white shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      {/* Number Pill */}
                      <span className="w-7 h-7 rounded-xl bg-orange-500/10 text-[#FF5E3A] border border-orange-500/20 flex items-center justify-center font-mono font-black text-xs shrink-0">
                        {String(idx + 1).padStart(2, '0')}
                      </span>

                      {/* Target Word Tag if available */}
                      {s.targetWord && (
                        <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-bold bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-jp">
                          {s.targetWord} {s.targetWordEnglish && `(${s.targetWordEnglish})`}
                        </span>
                      )}
                    </div>

                    {/* Audio Speaker */}
                    <button
                      onClick={() => audio.speak(s.furigana ? s.furigana.replace(/\s+/g, '') : s.sentence)}
                      className="p-2 rounded-xl bg-orange-500/10 text-[#FF5E3A] hover:bg-orange-500/20 hover:scale-105 active:scale-95 transition cursor-pointer shrink-0"
                      title="Listen to this Japanese sentence"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Japanese Sentence */}
                  <div className="mt-2.5">
                    <div className="text-base sm:text-lg font-black font-jp tracking-wide text-slate-900 dark:text-white leading-relaxed">
                      {s.sentence}
                    </div>

                    {/* Furigana Reading */}
                    <div className="text-xs font-jp text-slate-500 dark:text-slate-400 mt-1">
                      {s.furigana}
                    </div>

                    {/* Romaji Guide */}
                    <div className="text-[11px] font-mono font-bold text-[#FF5E3A]/90 mt-0.5">
                      {s.romaji}
                    </div>
                  </div>

                  {/* English Translation */}
                  <div className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mt-2.5 pt-2.5 border-t border-slate-100 dark:border-slate-800/80">
                    {s.english}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default KanjiDetailModal;
