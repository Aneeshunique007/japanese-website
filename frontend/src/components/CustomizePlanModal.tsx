import React, { useState, useEffect } from 'react';
import {
  X,
  Sliders,
  Sparkles,
  RotateCcw,
  Check,
  BookOpen,
  BookMarked,
  BookA,
  Clock,
  Target,
  Puzzle
} from 'lucide-react';
import {
  studyScheduleStore
} from '../utils/studyScheduleStore';
import { learnedStore } from '../utils/learnedStore';
import audio from '../utils/audio';

interface CustomizePlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: 'dark' | 'light';
  onToast?: (msg: string) => void;
}

const TOTAL_HIRAGANA = 82;
const TOTAL_KATAKANA = 82;
const TOTAL_KANJI = 110;
const TOTAL_WORDS = 805;
const TOTAL_LESSONS = 16;
const TOTAL_QUIZ_DRILLS = 100;
const TOTAL_SENTENCES = 3000;

export const CustomizePlanModal: React.FC<CustomizePlanModalProps> = ({
  isOpen,
  onClose,
  theme,
  onToast
}) => {
  const isDark = theme === 'dark';

  // Daily pace state - Separate Hiragana & Katakana
  const [hiraganaPerDay, setHiraganaPerDay] = useState<number>(10);
  const [katakanaPerDay, setKatakanaPerDay] = useState<number>(10);
  const [kanjiPerDay, setKanjiPerDay] = useState<number>(2);
  const [wordsPerDay, setWordsPerDay] = useState<number>(14);
  const [lessonIntervalDays, setLessonIntervalDays] = useState<number>(3);
  const [quizzesPerDay, setQuizzesPerDay] = useState<number>(2);
  const [sentencesPerDay, setSentencesPerDay] = useState<number>(50);

  // Sync state when modal opens
  useEffect(() => {
    if (!isOpen) return;
    const pace = studyScheduleStore.getCustomPace();
    setHiraganaPerDay(pace.hiraganaPerDay || pace.kanaPerDay || 10);
    setKatakanaPerDay(pace.katakanaPerDay || pace.kanaPerDay || 10);
    setKanjiPerDay(pace.kanjiPerDay || 2);
    setWordsPerDay(pace.wordsPerDay || 14);
    setLessonIntervalDays(pace.lessonIntervalDays || 3);
    setQuizzesPerDay(pace.quizzesPerDay || 2);
    setSentencesPerDay(pace.sentencesPerDay || 50);
  }, [isOpen]);

  if (!isOpen) return null;

  // Option A (Sequential 2-Phase Curriculum):
  // Phase 1: Focused Kana Boot Camp (Days 1 to kanaCompletionDay)
  // Phase 2: Core JLPT N5 Curriculum (Kanji, Words, Lessons, Sentences, Quizzes) begins on Day (kanaOffset + 1)
  const isKanaMastered = Boolean(studyScheduleStore.getCustomPace().skipKana || learnedStore.isAllKanaCompleted());
  const hiraganaCompletionDay = Math.ceil(TOTAL_HIRAGANA / Math.max(1, hiraganaPerDay));
  const katakanaCompletionDay = Math.ceil(TOTAL_KATAKANA / Math.max(1, katakanaPerDay));
  const kanaCompletionDay = Math.max(hiraganaCompletionDay, katakanaCompletionDay);
  const kanaOffset = isKanaMastered ? 0 : kanaCompletionDay;

  const kanjiCompletionDay = Math.ceil(TOTAL_KANJI / Math.max(1, kanjiPerDay));
  const wordsCompletionDay = kanaOffset + Math.ceil(TOTAL_WORDS / Math.max(1, wordsPerDay));
  const lessonCompletionDay = kanaOffset + (TOTAL_LESSONS - 1) * Math.max(1, lessonIntervalDays) + 1;
  const quizzesCompletionDay = kanaOffset + Math.ceil(TOTAL_QUIZ_DRILLS / Math.max(1, quizzesPerDay));
  const sentencesCompletionDay = kanaOffset + Math.ceil(TOTAL_SENTENCES / Math.max(1, sentencesPerDay));
  const totalDaysNeeded = Math.max(
    kanaCompletionDay,
    kanjiCompletionDay,
    wordsCompletionDay,
    lessonCompletionDay,
    quizzesCompletionDay,
    sentencesCompletionDay
  );

  const pacingCategory =
    totalDaysNeeded === sentencesCompletionDay ? `Sentences (${sentencesCompletionDay}d @ ${sentencesPerDay}/day)` :
      totalDaysNeeded === wordsCompletionDay ? `Words (${wordsCompletionDay}d @ ${wordsPerDay}/day)` :
        totalDaysNeeded === quizzesCompletionDay ? `Quizzes (${quizzesCompletionDay}d @ ${quizzesPerDay}/day)` :
          totalDaysNeeded === kanjiCompletionDay ? `Kanji (${kanjiCompletionDay}d @ ${kanjiPerDay}/day)` :
            totalDaysNeeded === lessonCompletionDay ? `Lessons (${lessonCompletionDay}d)` :
              `Kana (${kanaCompletionDay}d)`;

  // Daily time estimate
  const estDailyMinutes = Math.max(10, Math.round(
    wordsPerDay * 1.2 +
    kanjiPerDay * 2.5 +
    hiraganaPerDay * 0.4 +
    katakanaPerDay * 0.4 +
    quizzesPerDay * 4 +
    sentencesPerDay * 0.4
  ));

  const handleReset = () => {
    audio.playClick();
    studyScheduleStore.resetCustomPace();
    setHiraganaPerDay(10);
    setKatakanaPerDay(10);
    setKanjiPerDay(2);
    setWordsPerDay(14);
    setLessonIntervalDays(3);
    setQuizzesPerDay(2);
    setSentencesPerDay(50);
    onToast?.('Reset to standard pace');
    onClose();
  };

  const handleSave = () => {
    audio.playSuccess();
    studyScheduleStore.setCustomPace({
      enabled: true,
      hiraganaPerDay: Math.max(5, Math.min(30, Math.round(hiraganaPerDay / 5) * 5)),
      katakanaPerDay: Math.max(5, Math.min(30, Math.round(katakanaPerDay / 5) * 5)),
      kanaPerDay: Math.max(hiraganaPerDay, katakanaPerDay),
      kanjiPerDay: Math.max(1, Math.min(10, kanjiPerDay)),
      wordsPerDay: Math.max(5, Math.min(50, wordsPerDay)),
      lessonIntervalDays: Math.max(1, Math.min(7, lessonIntervalDays)),
      quizzesPerDay: Math.max(1, Math.min(10, quizzesPerDay)),
      sentencesPerDay: Math.max(5, Math.min(100, sentencesPerDay)),
      skipKana: isKanaMastered
    });
    studyScheduleStore.resetToDay1();
    onToast?.(`Custom daily pace saved! Day 1 starts today (~${totalDaysNeeded} days total).`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`w-full max-w-2xl max-h-[92vh] flex flex-col rounded-3xl shadow-2xl overflow-hidden border transition-all ${isDark
            ? 'bg-[#17171C] border-slate-800 text-slate-100'
            : 'bg-white border-slate-200/80 text-slate-900'
          }`}
      >
        {/* Header */}
        <div className="flex items-start sm:items-center justify-between gap-2 px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="hidden sm:flex w-10 h-10 shrink-0 rounded-2xl bg-gradient-to-br from-[#FF7B5C] to-[#FF5E3A] text-white items-center justify-center shadow-md shadow-orange-500/20">
              <Sliders className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <h3 className="text-base sm:text-lg font-black font-heading">
                  Customize Daily Learning Pace
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-orange-500/10 text-[#FF5E3A] border border-orange-500/20">
                  Daily Quotas
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
                Choose how many Kana, Kanji, Words, Lessons, Quizzes & Sentences per day.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              audio.playClick();
              onClose();
            }}
            className="p-2 shrink-0 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6 space-y-5 sm:space-y-6 scrollbar-thin">

          {/* Daily Pace Sliders Ordered: Kana -> Kanji -> Words -> Lesson -> Quiz -> Sentence */}
          <div className="space-y-4">

            {/* 1. HIRAGANA PER DAY & TARGET COMPLETION DAYS */}
            <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/30 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-start sm:items-center gap-2 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-orange-500/15 text-[#FF5E3A] flex items-center justify-center font-bold shrink-0">
                    <span className="font-jp text-base font-black">あ</span>
                  </div>
                  <div className="min-w-0">
                    <span className="text-sm font-black">🌸 Hiragana to Learn per Day</span>
                    <span className="block sm:inline text-[11px] sm:text-xs text-slate-400 sm:ml-2">Total: {TOTAL_HIRAGANA} Hiragana (5 characters per row)</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap sm:justify-end pl-10 sm:pl-0 shrink-0">
                  <span className="text-base font-mono font-black text-[#FF5E3A]">
                    {hiraganaPerDay}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Hiragana / day ({Math.round(hiraganaPerDay / 5)} {Math.round(hiraganaPerDay / 5) === 1 ? 'row' : 'rows'})
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-orange-500/15 text-[#FF5E3A] font-bold">
                    {hiraganaCompletionDay} Days to Finish
                  </span>
                </div>
              </div>

              <input
                type="range"
                min={5}
                max={30}
                step={5}
                value={hiraganaPerDay}
                onChange={e => {
                  setHiraganaPerDay(parseInt(e.target.value, 10));
                }}
                className="w-full accent-[#FF5E3A] cursor-pointer"
              />

              {/* Quick Row-Aligned Presets for Hiragana */}
              <div className="flex items-center justify-between gap-1.5 flex-wrap pt-0.5">
                <span className="text-[10px] font-bold text-slate-400">Options (1 Line/Row = 5 Sounds):</span>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {[
                    { count: 5, label: '5 / day (1 Line · 17d)' },
                    { count: 10, label: '10 / day (2 Lines · 9d)' },
                    { count: 15, label: '15 / day (3 Lines · 6d)' },
                    { count: 20, label: '20 / day (4 Lines · 5d)' },
                    { count: 25, label: '25 / day (5 Lines · 4d)' },
                    { count: 30, label: '30 / day (6 Lines · 3d)' },
                  ].map(preset => {
                    const isSelected = hiraganaPerDay === preset.count;
                    return (
                      <button
                        key={preset.count}
                        type="button"
                        onClick={() => {
                          audio.playClick();
                          setHiraganaPerDay(preset.count);
                        }}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition cursor-pointer border ${
                          isSelected
                            ? 'bg-[#FF5E3A] text-white border-[#FF5E3A] shadow-xs'
                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 hover:text-[#FF5E3A]'
                        }`}
                      >
                        {preset.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 2. KATAKANA PER DAY & TARGET COMPLETION DAYS */}
            <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/30 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-start sm:items-center gap-2 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-pink-500/15 text-pink-500 flex items-center justify-center font-bold shrink-0">
                    <span className="font-jp text-base font-black">ア</span>
                  </div>
                  <div className="min-w-0">
                    <span className="text-sm font-black">⚡ Katakana to Learn per Day</span>
                    <span className="block sm:inline text-[11px] sm:text-xs text-slate-400 sm:ml-2">Total: {TOTAL_KATAKANA} Katakana (5 characters per row)</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap sm:justify-end pl-10 sm:pl-0 shrink-0">
                  <span className="text-base font-mono font-black text-pink-500">
                    {katakanaPerDay}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Katakana / day ({Math.round(katakanaPerDay / 5)} {Math.round(katakanaPerDay / 5) === 1 ? 'row' : 'rows'})
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-pink-500/15 text-pink-500 font-bold">
                    {katakanaCompletionDay} Days to Finish
                  </span>
                </div>
              </div>

              <input
                type="range"
                min={5}
                max={30}
                step={5}
                value={katakanaPerDay}
                onChange={e => {
                  setKatakanaPerDay(parseInt(e.target.value, 10));
                }}
                className="w-full accent-pink-500 cursor-pointer"
              />

              {/* Quick Row-Aligned Presets for Katakana */}
              <div className="flex items-center justify-between gap-1.5 flex-wrap pt-0.5">
                <span className="text-[10px] font-bold text-slate-400">Options (1 Line/Row = 5 Sounds):</span>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {[
                    { count: 5, label: '5 / day (1 Line · 17d)' },
                    { count: 10, label: '10 / day (2 Lines · 9d)' },
                    { count: 15, label: '15 / day (3 Lines · 6d)' },
                    { count: 20, label: '20 / day (4 Lines · 5d)' },
                    { count: 25, label: '25 / day (5 Lines · 4d)' },
                    { count: 30, label: '30 / day (6 Lines · 3d)' },
                  ].map(preset => {
                    const isSelected = katakanaPerDay === preset.count;
                    return (
                      <button
                        key={preset.count}
                        type="button"
                        onClick={() => {
                          audio.playClick();
                          setKatakanaPerDay(preset.count);
                        }}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition cursor-pointer border ${
                          isSelected
                            ? 'bg-pink-500 text-white border-pink-500 shadow-xs'
                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 hover:text-pink-500'
                        }`}
                      >
                        {preset.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Foundational Priority Callout */}
            <div className="p-3.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-xs text-slate-600 dark:text-slate-300 leading-relaxed space-y-2">
              <div>
                🎯 <strong className="text-slate-900 dark:text-white">2-Phase Sequential Curriculum:</strong> 
                <div className="mt-1 space-y-0.5">
                  <div>• <strong>Phase 1 (Days 1–{kanaCompletionDay}):</strong> Kana Boot Camp ({hiraganaPerDay} Hiragana &amp; {katakanaPerDay} Katakana/d) + <strong>Kanji starts from Day 1</strong> ({kanjiPerDay}/d)!</div>
                  <div>• <strong>Phase 2 (Days {kanaCompletionDay + 1}–{totalDaysNeeded}):</strong> 60-Day Core JLPT N5 Drills — Vocabulary, Lessons, Quizzes, and all 3,000 Sentence Drills!</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 pt-2 sm:pt-1 border-t border-orange-500/20">
                <span className="text-[11px] text-slate-400">Already know Hiragana & Katakana?</span>
                <button
                  type="button"
                  onClick={() => {
                    audio.playSuccess();
                    learnedStore.markAllKanaLearned();
                    studyScheduleStore.setCustomPace({ skipKana: true });
                    onToast?.('All 164 Kana marked learned! Full curriculum starts on Day 1 🎉');
                    onClose();
                  }}
                  className="px-2.5 py-2 sm:py-1 rounded-lg bg-[#FF5E3A] hover:bg-[#E84E29] text-white text-[11px] font-bold font-mono transition cursor-pointer shadow-xs"
                >
                  ✓ Skip & Unlock Full Curriculum (Starts Day 1)
                </button>
              </div>
            </div>

            {/* 2. KANJI PER DAY SLIDER */}
            <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/30 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-start sm:items-center gap-2 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/15 text-amber-500 flex items-center justify-center font-bold shrink-0">
                    <BookMarked className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-sm font-black">Kanji to Learn per Day</span>
                    <span className="block sm:inline text-[11px] sm:text-xs text-slate-400 sm:ml-2">Total: {TOTAL_KANJI} JLPT N5 Kanji</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap pl-10 sm:pl-0 shrink-0">
                  <span className="text-base font-mono font-black text-amber-500">
                    {kanjiPerDay}
                  </span>
                  <span className="text-xs font-mono text-slate-400">Kanji / day</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-500 font-bold">
                    Done in {kanjiCompletionDay} days
                  </span>
                </div>
              </div>

              <input
                type="range"
                min={1}
                max={10}
                step={1}
                value={kanjiPerDay}
                onChange={e => {
                  setKanjiPerDay(parseInt(e.target.value, 10));
                }}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="grid grid-cols-2 sm:flex sm:justify-between gap-x-2 gap-y-1 text-[10px] sm:text-[11px] text-slate-400 font-mono [&>span:last-child]:text-right">
                <span>1 / day (110 days)</span>
                <span className="text-amber-500 font-bold col-span-2 order-last sm:order-none text-center">All 110 Kanji covered by Day {kanjiCompletionDay}</span>
                <span>10 / day (11 days)</span>
              </div>
            </div>

            {/* 3. WORDS PER DAY SLIDER */}
            <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/30 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-start sm:items-center gap-2 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center font-bold shrink-0">
                    <BookA className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-sm font-black">Words to Learn per Day</span>
                    <span className="block sm:inline text-[11px] sm:text-xs text-slate-400 sm:ml-2">Total: {TOTAL_WORDS} N5 Vocabulary</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap pl-10 sm:pl-0 shrink-0">
                  <span className="text-base font-mono font-black text-emerald-500">
                    {wordsPerDay}
                  </span>
                  <span className="text-xs font-mono text-slate-400">Words / day</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500 font-bold">
                    Done in {wordsCompletionDay} days
                  </span>
                </div>
              </div>

              <input
                type="range"
                min={5}
                max={50}
                step={1}
                value={wordsPerDay}
                onChange={e => {
                  setWordsPerDay(parseInt(e.target.value, 10));
                }}
                className="w-full accent-emerald-500 cursor-pointer"
              />
              <div className="grid grid-cols-2 sm:flex sm:justify-between gap-x-2 gap-y-1 text-[10px] sm:text-[11px] text-slate-400 font-mono [&>span:last-child]:text-right">
                <span>5 / day (161 days)</span>
                <span className="text-emerald-500 font-bold col-span-2 order-last sm:order-none text-center">All 805 Words covered by Day {wordsCompletionDay}</span>
                <span>50 / day (17 days)</span>
              </div>
            </div>

            {/* 4. LESSON INTERVAL SLIDER */}
            <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/30 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-start sm:items-center gap-2 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-indigo-500/15 text-indigo-500 flex items-center justify-center font-bold shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-sm font-black">Lesson Cadence</span>
                    <span className="block sm:inline text-[11px] sm:text-xs text-slate-400 sm:ml-2">Total: {TOTAL_LESSONS} Curriculum Lessons</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap pl-10 sm:pl-0 shrink-0">
                  <span className="text-base font-mono font-black text-indigo-500">
                    1 Lesson
                  </span>
                  <span className="text-xs font-mono text-slate-400">every {lessonIntervalDays} {lessonIntervalDays === 1 ? 'day' : 'days'}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-500 font-bold">
                    Done by Day {lessonCompletionDay}
                  </span>
                </div>
              </div>

              <input
                type="range"
                min={1}
                max={7}
                step={1}
                value={lessonIntervalDays}
                onChange={e => {
                  setLessonIntervalDays(parseInt(e.target.value, 10));
                }}
                className="w-full accent-indigo-500 cursor-pointer"
              />
              <div className="grid grid-cols-2 sm:flex sm:justify-between gap-x-2 gap-y-1 text-[10px] sm:text-[11px] text-slate-400 font-mono [&>span:last-child]:text-right">
                <span>Every 1 day (16 days)</span>
                <span className="text-indigo-500 font-bold col-span-2 order-last sm:order-none text-center">All 16 Lessons completed by Day {lessonCompletionDay}</span>
                <span>Every 7 days (106 days)</span>
              </div>
            </div>

            {/* 5. QUIZ DRILLS PER DAY SLIDER (USER REQUESTED) */}
            <div className="p-4 rounded-2xl border border-amber-500/30 bg-amber-500/5 dark:bg-amber-950/20 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-start sm:items-center gap-2 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-500 flex items-center justify-center font-bold shrink-0">
                    <Puzzle className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-sm font-black">Unit Practice Drills to Complete per Day</span>
                    <span className="block sm:inline text-[11px] sm:text-xs text-slate-400 sm:ml-2">Total: {TOTAL_QUIZ_DRILLS} Curriculum Practice Drills</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap pl-10 sm:pl-0 shrink-0">
                  <span className="text-base font-mono font-black text-amber-500">
                    {quizzesPerDay}
                  </span>
                  <span className="text-xs font-mono text-slate-400">Drills / day</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-500 border border-amber-500/30 font-bold">
                    Done in {quizzesCompletionDay} days
                  </span>
                </div>
              </div>

              <input
                type="range"
                min={1}
                max={10}
                step={1}
                value={quizzesPerDay}
                onChange={e => {
                  setQuizzesPerDay(parseInt(e.target.value, 10));
                }}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="grid grid-cols-2 sm:flex sm:justify-between gap-x-2 gap-y-1 text-[10px] sm:text-[11px] text-slate-400 font-mono [&>span:last-child]:text-right">
                <span>1 / day (100 days)</span>
                <span className="text-amber-500 font-bold col-span-2 order-last sm:order-none text-center">All 100 Drills covered by Day {quizzesCompletionDay}</span>
                <span>10 / day (10 days)</span>
              </div>

              {/* Quick quiz presets */}
              <div className="flex items-center gap-1.5 pt-1 flex-wrap">
                <span className="text-[10px] text-slate-400 font-mono uppercase font-bold mr-1">Quick Select:</span>
                {[1, 2, 3, 4, 6, 8, 10].map(cnt => (
                  <button
                    key={cnt}
                    onClick={() => {
                      audio.playClick();
                      setQuizzesPerDay(cnt);
                    }}
                    className={`px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-bold transition cursor-pointer ${quizzesPerDay === cnt
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'bg-white/80 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-amber-500/20'
                      }`}
                  >
                    {cnt} Drills
                  </button>
                ))}
              </div>
            </div>

            {/* 6. SENTENCES PER DAY SLIDER */}
            <div className="p-4 rounded-2xl border border-purple-500/30 bg-purple-500/5 dark:bg-purple-950/20 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-start sm:items-center gap-2 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-500 flex items-center justify-center font-bold shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-sm font-black">Sentences to Practice per Day</span>
                    <span className="block sm:inline text-[11px] sm:text-xs text-slate-400 sm:ml-2">Total: {TOTAL_SENTENCES} JLPT N5 Sentences</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap pl-10 sm:pl-0 shrink-0">
                  <span className="text-base font-mono font-black text-purple-500">
                    {sentencesPerDay}
                  </span>
                  <span className="text-xs font-mono text-slate-400">Sentences / day</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-500 border border-purple-500/30 font-bold">
                    Done in {sentencesCompletionDay} days
                  </span>
                </div>
              </div>

              <input
                type="range"
                min={5}
                max={100}
                step={5}
                value={sentencesPerDay}
                onChange={e => {
                  setSentencesPerDay(parseInt(e.target.value, 10));
                }}
                className="w-full accent-purple-500 cursor-pointer"
              />
              <div className="grid grid-cols-2 sm:flex sm:justify-between gap-x-2 gap-y-1 text-[10px] sm:text-[11px] text-slate-400 font-mono [&>span:last-child]:text-right">
                <span>5 / day (600 days)</span>
                <span className="text-purple-500 font-bold col-span-2 order-last sm:order-none text-center">All 3,000 Sentences covered by Day {sentencesCompletionDay}</span>
                <span>100 / day (30 days)</span>
              </div>

              {/* Quick sentence presets */}
              <div className="flex items-center gap-1.5 pt-1 flex-wrap">
                <span className="text-[10px] text-slate-400 font-mono uppercase font-bold mr-1">Quick Select:</span>
                {[10, 20, 30, 50, 75, 100].map(cnt => (
                  <button
                    key={cnt}
                    onClick={() => {
                      audio.playClick();
                      setSentencesPerDay(cnt);
                    }}
                    className={`px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-bold transition cursor-pointer ${sentencesPerDay === cnt
                        ? 'bg-purple-600 text-white shadow-xs'
                        : 'bg-white/80 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-purple-500/20'
                      }`}
                  >
                    {cnt} Qs
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Curriculum Mastery Timeline Forecast Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-orange-500/[0.04] via-amber-500/[0.04] to-transparent border border-orange-500/20 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-start sm:items-center gap-2 text-[#FF5E3A] font-bold text-[11px] sm:text-xs uppercase tracking-wider font-mono">
                <Target className="w-4 h-4 shrink-0" />
                <span>Curriculum Completion Timeline at this Pace</span>
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#FF5E3A] text-white shadow-xs whitespace-nowrap">
                {totalDaysNeeded} Days Total
              </span>
            </div>

            {/* Timeline Milestones ordered: Kana -> Kanji -> Words -> Lessons -> Quizzes -> Sentences */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              <div className="p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/50 dark:border-slate-800/50">
                <div className="text-[10px] font-mono font-bold text-slate-400">🔤 Kana Done</div>
                <div className="text-base font-black text-[#FF5E3A]">Day {kanaCompletionDay}</div>
                <div className="text-[10px] text-slate-400">{isKanaMastered ? 'Mastered' : 'Phase 1 Boot Camp'}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/50 dark:border-slate-800/50">
                <div className="text-[10px] font-mono font-bold text-slate-400">🈸 Kanji Done</div>
                <div className="text-base font-black text-amber-500">Day {kanjiCompletionDay}</div>
                <div className="text-[10px] text-slate-400">All 110 (Day 1 start)</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/50 dark:border-slate-800/50">
                <div className="text-[10px] font-mono font-bold text-slate-400">📖 Words Done</div>
                <div className="text-base font-black text-emerald-500">Day {wordsCompletionDay}</div>
                <div className="text-[10px] text-slate-400">All 805 Words</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/50 dark:border-slate-800/50">
                <div className="text-[10px] font-mono font-bold text-slate-400">🎓 Lessons Done</div>
                <div className="text-base font-black text-indigo-500">Day {lessonCompletionDay}</div>
                <div className="text-[10px] text-slate-400">16 sessions</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/50 dark:border-slate-800/50">
                <div className="text-[10px] font-mono font-bold text-slate-400">🧩 Unit Drills Done</div>
                <div className="text-base font-black text-amber-500">Day {quizzesCompletionDay}</div>
                <div className="text-[10px] text-slate-400">All 100 Drills</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/50 dark:border-slate-800/50">
                <div className="text-[10px] font-mono font-bold text-slate-400">💬 Sentences Done</div>
                <div className="text-base font-black text-[#FF5E3A]">Day {sentencesCompletionDay}</div>
                <div className="text-[10px] text-slate-400">All 3,000 ({sentencesPerDay}/d)</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 text-xs text-slate-500 dark:text-slate-400 pt-2 sm:pt-1 border-t border-slate-200/80 dark:border-slate-800">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#FF5E3A]" />
                <span>Daily study effort: <strong className="text-slate-700 dark:text-slate-200 font-mono font-bold">~{estDailyMinutes} min / day</strong></span>
              </span>
              <span className="font-mono text-[11px] text-[#FF5E3A] font-bold">
                Overall timeline paced by: {pacingCategory}
              </span>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-2 px-4 sm:px-6 py-3 sm:py-4 border-t border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 shrink-0">
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer flex items-center justify-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Standard</span>
          </button>

          <div className="grid grid-cols-[auto_1fr] sm:flex sm:items-center gap-2">
            <button
              onClick={() => {
                audio.playClick();
                onClose();
              }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2.5 rounded-xl text-xs font-black bg-[#FF5E3A] hover:bg-[#E84E29] text-white shadow-lg shadow-orange-500/20 active:scale-95 transition flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Apply Daily Pace</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CustomizePlanModal;
