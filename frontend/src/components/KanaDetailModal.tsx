import React from 'react';
import { X, Volume2, BookOpen, Play, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { KanaDetailsData } from '../data/kanaWords';
import { learnedStore } from '../utils/learnedStore';
import audio from '../utils/audio';

interface KanaDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  kanaData: KanaDetailsData | null;
  onStartQuiz?: (kanaChar: string) => void;
  onGainXp?: (xp: number) => void;
  theme: 'dark' | 'light';
}

export const KanaDetailModal: React.FC<KanaDetailModalProps> = ({
  isOpen,
  onClose,
  kanaData,
  onStartQuiz,
  onGainXp,
  theme
}) => {
  if (!isOpen || !kanaData) return null;

  const isLearned = learnedStore.isKanaLearned(kanaData.char);

  const handleToggleLearned = () => {
    const nextState = learnedStore.toggleKanaLearned(kanaData.char);
    if (nextState) {
      audio.playFanfare();
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
      if (onGainXp) onGainXp(10);
    } else {
      audio.playClick();
    }
  };

  const cardBg = theme === 'dark' ? 'bg-[#17171C] text-white border-slate-800' : 'bg-white text-[#1A1A1F] border-slate-200';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div 
        className={`w-full max-w-2xl rounded-3xl border ${cardBg} shadow-2xl overflow-hidden flex flex-col max-h-[90vh]`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="px-2.5 sm:px-3 py-1 rounded-full text-xs font-mono font-black bg-orange-500/10 text-[#FF5E3A] border border-orange-500/20">
              {kanaData.script} Detail
            </span>
            <span className="text-[11px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider hidden xs:inline-block">
              Character Encyclopedia
            </span>
          </div>

          <button
            onClick={() => {
              audio.playClick();
              onClose();
            }}
            className="p-1.5 sm:p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-rose-500/20 hover:text-rose-500 text-slate-500 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
          
          {/* Hero Kana Character Banner */}
          <div className={`p-4 sm:p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 ${
            theme === 'dark' ? 'bg-slate-900/60 border-slate-800' : 'bg-orange-50/40 border-orange-100'
          }`}>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
              {/* Giant Kana Character Display */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-[#FF7B5C] to-[#FF5E3A] flex items-center justify-center text-white font-jp font-black text-4xl sm:text-5xl shadow-lg shadow-orange-500/30 shrink-0">
                {kanaData.char}
              </div>

              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <h2 className="text-xl sm:text-2xl font-black font-mono text-slate-900 dark:text-white">
                    {kanaData.romaji.toUpperCase()}
                  </h2>
                  <span className="text-xs px-2.5 py-0.5 rounded-md bg-slate-200 dark:bg-slate-800 font-mono font-bold text-slate-600 dark:text-slate-300">
                    {kanaData.strokeCount} Strokes
                  </span>
                </div>
                <p className="text-xs font-bold text-[#FF5E3A]">
                  Pronounced like "{kanaData.romaji}"
                </p>
                <p className="text-xs text-slate-400 max-w-sm">
                  {kanaData.mnemonic}
                </p>
              </div>
            </div>

            {/* Audio & Quick Quiz Actions */}
            <div className="flex sm:flex-col items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={() => audio.speak(kanaData.char)}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-[#FF5E3A] text-white hover:bg-[#E84E29] transition cursor-pointer flex items-center justify-center gap-2 text-xs font-bold shadow-md shadow-orange-500/20"
              >
                <Volume2 className="w-4 h-4" />
                <span>Listen Audio</span>
              </button>

              {onStartQuiz && (
                <button
                  onClick={() => {
                    audio.playClick();
                    onStartQuiz(kanaData.char);
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
                  {isLearned ? 'Character Mastered!' : 'Did you complete this Kana?'}
                  {isLearned && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500 text-white font-bold">
                      Learned
                    </span>
                  )}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {isLearned 
                    ? 'This card is highlighted in green on your syllabary grid.' 
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

          {/* SECTION: ALL WORDS RELATED TO THIS KANA */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5E3A] shrink-0" />
                <h3 className="text-base sm:text-lg font-black font-heading">
                  Words Related to "{kanaData.char}" ({kanaData.words.length} Vocabulary Words)
                </h3>
              </div>
              <span className="text-xs text-slate-400 font-mono font-bold">
                Tap speaker to hear
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {kanaData.words.map((w, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border transition group flex flex-col justify-between ${
                    theme === 'dark' ? 'bg-slate-900/40 border-slate-800 hover:border-[#FF5E3A]/40' : 'bg-slate-50/70 border-slate-200/80 hover:border-[#FF5E3A]/40 hover:bg-white'
                  }`}
                >
                  <div>
                    {w.furigana && w.furigana !== w.word ? (
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold font-jp text-slate-400 dark:text-slate-500 mb-0.5 tracking-wide">
                            {w.word}
                          </span>
                          <button
                            onClick={() => audio.speak(w.furigana ? w.furigana.replace(/\s+/g, '') : w.word)}
                            className="p-1.5 rounded-lg bg-orange-500/10 text-[#FF5E3A] hover:bg-orange-500/20 transition cursor-pointer"
                            title={`Listen to ${w.furigana}`}
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-lg font-black font-jp text-slate-900 dark:text-white group-hover:text-[#FF5E3A] transition">
                          {w.furigana}
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-lg font-black font-jp text-slate-900 dark:text-white group-hover:text-[#FF5E3A] transition">
                          {w.word}
                        </span>
                        <button
                          onClick={() => audio.speak(w.furigana ? w.furigana.replace(/\s+/g, '') : w.word)}
                          className="p-1.5 rounded-lg bg-orange-500/10 text-[#FF5E3A] hover:bg-orange-500/20 transition cursor-pointer"
                          title={`Listen to ${w.word}`}
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}

                    <div className="text-[11px] font-mono font-bold text-[#FF5E3A] mt-0.5">
                      {w.romaji}
                    </div>
                  </div>

                  <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    {w.english}
                  </div>

                  {w.exampleSentence && (
                    <div className="mt-2 pt-2 border-t border-dashed border-slate-200 dark:border-slate-800 text-[11px] space-y-0.5">
                      <div className="font-jp text-slate-600 dark:text-slate-400 flex items-center justify-between">
                        <span>{w.exampleSentence}</span>
                        <button
                          onClick={() => audio.speak(w.exampleSentence || '')}
                          className="text-slate-400 hover:text-[#FF5E3A] transition"
                        >
                          <Volume2 className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="text-slate-400 italic">{w.exampleEnglish}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Similar Characters to Avoid Confusing */}
          {kanaData.similarChars && kanaData.similarChars.length > 0 && (
            <div className={`p-4 rounded-2xl border ${theme === 'dark' ? 'bg-slate-900/30 border-slate-800' : 'bg-slate-50 border-slate-200'} flex items-center justify-between`}>
              <div className="text-xs font-bold text-slate-400">
                ⚠️ Similar Looking Kana (Don't confuse):
              </div>
              <div className="flex items-center gap-2">
                {kanaData.similarChars.map((sim, i) => (
                  <button
                    key={i}
                    onClick={() => audio.speak(sim)}
                    className="w-8 h-8 rounded-xl bg-orange-500/10 text-[#FF5E3A] font-jp font-black text-sm flex items-center justify-center hover:bg-orange-500/20 transition cursor-pointer"
                  >
                    {sim}
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default KanaDetailModal;
