import React, { useEffect } from 'react';
import { 
  X, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  Flame, 
  ArrowRight,
  BookOpen,
  BookA,
  BookMarked
} from 'lucide-react';
import confetti from 'canvas-confetti';
import audio from '../utils/audio';

interface DayCelebrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  day: number;
  theme: 'dark' | 'light';
  onAdvanceDay?: () => void;
  onGainXp?: (xp: number) => void;
  stats?: {
    kanaCount?: number;
    kanjiCount?: number;
    wordsCount?: number;
    lessonTitle?: string;
    drillScore?: number;
    drillTotal?: number;
  };
}

export const DayCelebrationModal: React.FC<DayCelebrationModalProps> = ({
  isOpen,
  onClose,
  day,
  theme,
  onAdvanceDay,
  onGainXp,
  stats = {
    kanaCount: 9,
    kanjiCount: 3,
    wordsCount: 14,
    lessonTitle: 'JLPT N5 Lesson 1-1',
    drillScore: 50,
    drillTotal: 50
  }
}) => {
  useEffect(() => {
    if (!isOpen) return;

    // Play triumphant sound
    audio.playFanfare();

    // Multi-angle fireworks celebration
    // 1. Center explosion
    confetti({
      particleCount: 90,
      spread: 100,
      origin: { y: 0.55 },
      colors: ['#FF5E3A', '#10B981', '#F59E0B', '#6366F1', '#EC4899']
    });

    // 2. Left side cannon
    const timer1 = setTimeout(() => {
      confetti({
        particleCount: 65,
        angle: 60,
        spread: 70,
        origin: { x: 0.05, y: 0.65 },
        colors: ['#FFD700', '#FF5E3A', '#00FF7F', '#00E5FF']
      });
    }, 250);

    // 3. Right side cannon
    const timer2 = setTimeout(() => {
      confetti({
        particleCount: 65,
        angle: 120,
        spread: 70,
        origin: { x: 0.95, y: 0.65 },
        colors: ['#FFD700', '#FF5E3A', '#00FF7F', '#FF1493']
      });
    }, 450);

    // 4. Golden stars shower
    const timer3 = setTimeout(() => {
      confetti({
        particleCount: 45,
        spread: 120,
        origin: { y: 0.35 },
        shapes: ['star'],
        colors: ['#FFE135', '#FFD700', '#FFA500']
      });
    }, 700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const isDark = theme === 'dark';
  const modalBg = isDark 
    ? 'bg-[#121217] border-slate-800 text-white' 
    : 'bg-white border-slate-200 text-[#1A1A1F] shadow-2xl';

  const handleAdvance = () => {
    audio.playSuccess();
    onGainXp?.(100);
    onAdvanceDay?.();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className={`relative w-full max-w-xl rounded-3xl border shadow-2xl overflow-hidden flex flex-col max-h-[92vh] ${modalBg} border-emerald-500/30`}
        onClick={e => e.stopPropagation()}
      >
        {/* Animated Glow Top Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-orange-500 via-amber-400 to-emerald-500 animate-pulse" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-5 sm:p-8 overflow-y-auto overscroll-contain space-y-5 sm:space-y-6 text-center">
          
          {/* Trophy Header */}
          <div className="space-y-3 pt-2">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-amber-400 to-emerald-400 blur-lg opacity-60 animate-pulse" />
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-tr from-amber-400 to-emerald-500 text-white flex items-center justify-center shadow-xl shadow-emerald-500/25">
                <Award className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <span className="absolute -top-1.5 -right-1.5 text-2xl animate-bounce">
                🎉
              </span>
            </div>

            <div className="space-y-1">
              <div className="text-[10px] sm:text-xs font-mono font-black tracking-wider sm:tracking-widest text-[#FF5E3A] uppercase">
                Day {day} Milestone Achieved
              </div>
              <h2 className="text-xl sm:text-3xl font-black font-heading tracking-tight">
                🌸 Day {day} Mastered! 🌸
              </h2>
              <div className="font-jp text-sm sm:text-base font-bold text-emerald-500 dark:text-emerald-400">
                第一日目 完了！ おめでとうございます！
              </div>
              <p className="text-xs text-slate-400 max-w-md mx-auto pt-1 leading-relaxed">
                Outstanding commitment! You fulfilled all 5 curriculum criteria for Day 1. Your Japanese foundation is officially alive and thriving!
              </p>
            </div>
          </div>

          {/* XP & Rewards Highlight */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-emerald-500/15 border border-amber-500/30 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center font-black shadow-md shadow-orange-500/20 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono font-black text-amber-500">Day 1 Celebration Bonus</div>
                <div className="text-base font-black font-heading text-slate-800 dark:text-white">+100 Extra XP</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/20 text-amber-500 font-mono font-black text-xs shrink-0">
              <Flame className="w-4 h-4 fill-amber-500" />
              <span>Day 1 Streak!</span>
            </div>
          </div>

          {/* Completed Criteria Checklist (5 Items) */}
          <div className="space-y-2 text-left">
            <div className="text-[11px] font-mono font-black uppercase tracking-wider text-slate-400 flex items-center justify-between">
              <span>All 5 Criteria Completed</span>
              <span className="text-emerald-500 font-bold">100% DONE</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              
              {/* Kana */}
              <div className={`p-3 rounded-xl border flex items-center gap-2.5 ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <div className="min-w-0">
                  <div className="text-xs font-bold truncate flex items-center gap-1">
                    <span>9 Kana Characters</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">あ〜け All Mastered</div>
                </div>
              </div>

              {/* Kanji */}
              <div className={`p-3 rounded-xl border flex items-center gap-2.5 ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <div className="min-w-0">
                  <div className="text-xs font-bold truncate flex items-center gap-1">
                    <BookMarked className="w-3 h-3 text-amber-500" />
                    <span>3 N5 Kanji</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono font-jp">一 • 二 • 三 Learned</div>
                </div>
              </div>

              {/* Words */}
              <div className={`p-3 rounded-xl border flex items-center gap-2.5 ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <div className="min-w-0">
                  <div className="text-xs font-bold truncate flex items-center gap-1">
                    <BookA className="w-3 h-3 text-emerald-500" />
                    <span>14 Vocabulary Words</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">All Cards Finished</div>
                </div>
              </div>

              {/* Curriculum Lesson */}
              <div className={`p-3 rounded-xl border flex items-center gap-2.5 ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <div className="min-w-0">
                  <div className="text-xs font-bold truncate flex items-center gap-1">
                    <BookOpen className="w-3 h-3 text-indigo-500" />
                    <span>{stats.lessonTitle || 'JLPT N5 Lesson 1-1'}</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">Grammar & Pronunciation</div>
                </div>
              </div>

            </div>

            {/* Sentence Drill 5th Card */}
            <div className={`p-3 rounded-xl border flex items-center justify-between gap-2 ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <div className="flex items-center gap-2.5 min-w-0">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <div className="min-w-0">
                  <div className="text-xs font-bold flex items-start sm:items-center gap-1">
                    <Sparkles className="w-3 h-3 text-purple-400 shrink-0 mt-0.5 sm:mt-0" />
                    <span className="break-words">Sentence Cloze Drill ({stats.drillTotal || 50} Questions)</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">50 Cloze Questions Drilled</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-500 font-mono font-bold text-[10px] whitespace-nowrap shrink-0">
                ✓ Completed
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 pt-2">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold transition cursor-pointer"
            >
              Stay on Day 1 & Review
            </button>
            <button
              onClick={handleAdvance}
              className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-xs font-extrabold flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-500/30 cursor-pointer animate-scale-up"
            >
              <span>Advance to Day 2 (+100 XP)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DayCelebrationModal;
