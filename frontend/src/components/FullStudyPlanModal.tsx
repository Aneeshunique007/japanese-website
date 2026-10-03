import React, { useState, useMemo } from 'react';
import { 
  X, 
  Calendar, 
  Search, 
  CheckCircle2, 
  Unlock, 
  Sparkles, 
  BookOpen, 
  Languages, 
  BookMarked, 
  BookA, 
  ArrowRight,
  Table as TableIcon,
  LayoutGrid,
  Check
} from 'lucide-react';
import { studyScheduleStore, ScheduleDuration, SCHEDULE_EVENT } from '../utils/studyScheduleStore';
import { learnedStore } from '../utils/learnedStore';
import audio from '../utils/audio';

interface FullStudyPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: 'dark' | 'light';
  onNavigateTab?: (tab: string, extraId?: string) => void;
  onSelectKanji?: (kanjiChar: string) => void;
}

export const FullStudyPlanModal: React.FC<FullStudyPlanModalProps> = ({
  isOpen,
  onClose,
  theme,
  onNavigateTab,
  onSelectKanji
}) => {
  const [targetDays, setTargetDays] = useState<ScheduleDuration>(() => studyScheduleStore.getTargetDays());
  const [currentDay, setCurrentDay] = useState<number>(() => studyScheduleStore.getCurrentDay());
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'TODAY' | 'COMPLETED' | 'KANJI' | 'LESSONS'>('ALL');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  // Sync with store
  React.useEffect(() => {
    const handleUpdate = () => {
      setTargetDays(studyScheduleStore.getTargetDays());
      setCurrentDay(studyScheduleStore.getCurrentDay());
    };
    window.addEventListener(SCHEDULE_EVENT, handleUpdate);
    return () => window.removeEventListener(SCHEDULE_EVENT, handleUpdate);
  }, []);

  const totalDaysCount = targetDays === 'ALL' ? 60 : targetDays;

  // Generate full day-by-day plan data
  const fullPlanDays = useMemo(() => {
    const list = [];
    for (let d = 1; d <= totalDaysCount; d++) {
      const targets = studyScheduleStore.getDayTargets(d);
      
      const completedKana = targets.kana.filter(k => learnedStore.isKanaLearned(k.char)).length;
      const completedKanji = targets.kanji.filter(k => learnedStore.isKanjiLearned(k.char)).length;
      const completedWords = targets.words.filter(w => learnedStore.isWordLearned(w.id || w.word) || ((w as any)._id && learnedStore.isWordLearned((w as any)._id)) || (w.word && learnedStore.isWordLearned(w.word))).length;
      const isLessonComplete = targets.lessonId ? learnedStore.isLessonCompleted(targets.lessonId) : true;
      
      const isDayComplete = 
        (targets.kana.length === 0 || completedKana >= targets.kana.length) &&
        (targets.kanji.length === 0 || completedKanji >= targets.kanji.length) &&
        (targets.words.length === 0 || completedWords >= targets.words.length) &&
        isLessonComplete;

      list.push({
        day: d,
        targets,
        isComplete: isDayComplete,
        isToday: d === currentDay,
        isUnlocked: studyScheduleStore.isAllUnlocked() || d <= currentDay,
        completedKana,
        completedKanji,
        completedWords
      });
    }
    return list;
  }, [targetDays, currentDay, totalDaysCount]);

  // Filtered days based on user search and filter tabs
  const filteredDays = useMemo(() => {
    return fullPlanDays.filter(item => {
      // Filter tab
      if (activeFilter === 'TODAY' && !item.isToday) return false;
      if (activeFilter === 'COMPLETED' && !item.isComplete) return false;
      if (activeFilter === 'KANJI' && item.targets.kanji.length === 0) return false;
      if (activeFilter === 'LESSONS' && !item.targets.lessonId) return false;

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesDay = `day ${item.day}`.includes(q) || `${item.day}` === q;
        const matchesKana = item.targets.kana.some(k => k.char.includes(q) || k.romaji.toLowerCase().includes(q));
        const matchesKanji = item.targets.kanji.some((k: any) => k.char.includes(q) || k.meaning.toLowerCase().includes(q) || (k.onyomi || []).some((o: string) => o.toLowerCase().includes(q)));
        const matchesWords = item.targets.words.some(w => w.word.includes(q) || w.meaning.toLowerCase().includes(q) || w.romaji?.toLowerCase().includes(q));
        const matchesLesson = item.targets.lessonId ? item.targets.lessonId.toLowerCase().includes(q) : false;

        return matchesDay || matchesKana || matchesKanji || matchesWords || matchesLesson;
      }
      return true;
    });
  }, [fullPlanDays, activeFilter, searchQuery]);

  if (!isOpen) return null;

  const isDark = theme === 'dark';
  const modalBg = isDark ? 'bg-[#121217] text-white border-slate-800' : 'bg-white text-slate-900 border-slate-200';
  const cardBg = isDark ? 'bg-[#1A1A22] border-slate-800/80 text-white' : 'bg-slate-50/70 border-slate-200/80 text-slate-800';

  const handleSelectPlanDuration = (dur: ScheduleDuration) => {
    audio.playClick();
    studyScheduleStore.setTargetDays(dur);
  };

  const handleSetCurrentDay = (d: number) => {
    audio.playClick();
    studyScheduleStore.setCurrentDay(d);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/75 backdrop-blur-md animate-fade-in">
      <div className={`relative w-full max-w-6xl max-h-[92vh] flex flex-col rounded-3xl border shadow-2xl overflow-hidden ${modalBg}`}>
        
        {/* Header Section */}
        <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800/80 shrink-0 space-y-3 sm:space-y-4">
          <div className="flex items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-br from-[#FF7B5C] to-[#FF5E3A] flex items-center justify-center text-white shadow-md shadow-orange-500/20 shrink-0">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h2 className="text-base sm:text-2xl font-black font-heading tracking-tight flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span>JLPT N5 Study Curriculum</span>
                  {targetDays === 'ALL' && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 whitespace-nowrap">
                      All Access Unlocked
                    </span>
                  )}
                </h2>
                <p className="text-xs text-slate-400">
                  Comprehensive syllabus mapping every single Kana, Kanji, Word, and Grammar Lesson across your schedule.
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                audio.playClick();
                onClose();
              }}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-rose-500/20 hover:text-rose-500 text-slate-400 transition cursor-pointer shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Schedule Duration Switcher Pills */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 pt-1">
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-x-auto no-scrollbar touch-pan-x whitespace-nowrap shrink-0">
              <span className="text-[11px] font-bold font-mono px-2 text-slate-400 shrink-0">Plan Duration:</span>
              {([60, 90, 120] as ScheduleDuration[]).map((d) => (
                <button
                  key={d}
                  onClick={() => handleSelectPlanDuration(d)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-black transition cursor-pointer shrink-0 ${
                    targetDays === d
                      ? 'bg-[#FF5E3A] text-white shadow-md shadow-orange-500/20'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800'
                  }`}
                >
                  {d} Days
                </button>
              ))}
              <button
                onClick={() => handleSelectPlanDuration('ALL')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-black transition cursor-pointer flex items-center gap-1.5 shrink-0 ${
                  targetDays === 'ALL'
                    ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                    : 'text-slate-500 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/40'
                }`}
                title="Unlock all days simultaneously (Self-Paced / No Restrictions)"
              >
                <Unlock className="w-3 h-3" />
                <span>All Access (No Lock)</span>
              </button>
            </div>

            {/* View Mode & Search */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-56">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search day, kanji, word..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#FF5E3A]"
                />
              </div>

              <div className="flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shrink-0">
                <button
                  onClick={() => setViewMode('cards')}
                  className={`p-1.5 rounded-lg transition cursor-pointer ${
                    viewMode === 'cards' ? 'bg-[#FF5E3A] text-white shadow-xs' : 'text-slate-400 hover:text-slate-600'
                  }`}
                  title="Card View"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`p-1.5 rounded-lg transition cursor-pointer ${
                    viewMode === 'table' ? 'bg-[#FF5E3A] text-white shadow-xs' : 'text-slate-400 hover:text-slate-600'
                  }`}
                  title="Table View"
                >
                  <TableIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar touch-pan-x whitespace-nowrap pt-0.5 text-xs font-bold -mx-4 px-4 sm:mx-0 sm:px-0">
            {(['ALL', 'TODAY', 'COMPLETED', 'KANJI', 'LESSONS'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-3 py-1 rounded-xl transition cursor-pointer shrink-0 ${
                  activeFilter === tab
                    ? 'bg-slate-200/80 dark:bg-slate-800 text-[#FF5E3A] font-black'
                    : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                }`}
              >
                {tab === 'ALL' && `All Days (${totalDaysCount})`}
                {tab === 'TODAY' && `Today (Day ${currentDay})`}
                {tab === 'COMPLETED' && `Completed (${fullPlanDays.filter(d => d.isComplete).length})`}
                {tab === 'KANJI' && 'Days with Kanji'}
                {tab === 'LESSONS' && 'Days with Lessons'}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          {filteredDays.length === 0 ? (
            <div className="py-16 text-center text-slate-400 text-sm">
              No schedule days match your search query.
            </div>
          ) : viewMode === 'table' ? (
            /* DENSE ROADMAP TABLE VIEW */
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-x-auto no-scrollbar touch-pan-x shadow-xs">
              <table className="w-full min-w-[560px] text-left text-xs">
                <thead className="bg-slate-100/80 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-400 font-mono uppercase tracking-wider">
                  <tr>
                    <th className="p-3">Day</th>
                    <th className="p-3">Kana</th>
                    <th className="p-3">Kanji</th>
                    <th className="p-3">Words</th>
                    <th className="p-3">Lesson / Topic</th>
                    <th className="p-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                  {filteredDays.map(item => (
                    <tr 
                      key={item.day}
                      className={`transition ${
                        item.isToday 
                          ? 'bg-amber-500/10 dark:bg-amber-500/15' 
                          : 'hover:bg-slate-50 dark:hover:bg-slate-900/40'
                      }`}
                    >
                      <td className="p-3 font-mono font-bold whitespace-nowrap">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg ${
                          item.isToday 
                            ? 'bg-amber-500 text-white shadow-xs' 
                            : item.isComplete 
                            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' 
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}>
                          {item.isComplete ? <Check className="w-3 h-3 stroke-[3]" /> : <Calendar className="w-3 h-3" />}
                          <span>Day {item.day}</span>
                        </span>
                      </td>

                      {/* Kana column */}
                      <td className="p-3 max-w-xs">
                        {item.targets.kana.length > 0 ? (
                          <div className="flex flex-wrap gap-1">
                            {item.targets.kana.slice(0, 6).map(k => (
                              <button
                                key={k.char}
                                onClick={() => audio.speak(k.char)}
                                className="px-1.5 py-0.5 rounded bg-orange-500/10 text-[#FF5E3A] font-jp font-bold text-[11px] hover:bg-orange-500/20"
                                title={`Pronounce ${k.char} (${k.romaji})`}
                              >
                                {k.char}
                              </button>
                            ))}
                            {item.targets.kana.length > 6 && (
                              <span className="text-[10px] text-slate-400 self-center">+{item.targets.kana.length - 6} more</span>
                            )}
                          </div>
                        ) : (
                          <span className="text-slate-400 text-[11px]">—</span>
                        )}
                      </td>

                      {/* Kanji column */}
                      <td className="p-3 max-w-xs">
                        {item.targets.kanji.length > 0 ? (
                          <div className="flex flex-wrap gap-1">
                            {item.targets.kanji.map(k => (
                              <button
                                key={k.char}
                                onClick={() => {
                                  onSelectKanji?.(k.char);
                                }}
                                className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-jp font-black text-xs hover:bg-amber-500/20 cursor-pointer"
                                title={`${k.char} (${k.meaning})`}
                              >
                                {k.char}
                              </button>
                            ))}
                          </div>
                        ) : (
                          <span className="text-slate-400 text-[11px]">—</span>
                        )}
                      </td>

                      {/* Words column */}
                      <td className="p-3 whitespace-nowrap">
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                          {item.targets.words.length} words
                        </span>
                        <span className="text-[11px] text-slate-400 block truncate max-w-xs">
                          {item.targets.words.slice(0, 3).map(w => w.word).join(', ')}
                          {item.targets.words.length > 3 ? '...' : ''}
                        </span>
                      </td>

                      {/* Lesson column */}
                      <td className="p-3 whitespace-nowrap">
                        {item.targets.lessonId ? (
                          <span className="font-bold text-indigo-500 dark:text-indigo-400 flex items-center gap-1">
                            <BookOpen className="w-3 h-3" />
                            <span>Lesson {item.targets.lessonId.replace('lesson-n5-', '')}</span>
                          </span>
                        ) : (
                          <span className="text-slate-400 text-[11px]">—</span>
                        )}
                      </td>

                      {/* Action button */}
                      <td className="p-3 text-right whitespace-nowrap">
                        <button
                          onClick={() => handleSetCurrentDay(item.day)}
                          className={`px-3 py-1 rounded-xl text-xs font-bold transition cursor-pointer ${
                            item.isToday 
                              ? 'bg-amber-500 text-white' 
                              : 'bg-slate-100 dark:bg-slate-800 hover:bg-[#FF5E3A] hover:text-white text-slate-600 dark:text-slate-300'
                          }`}
                        >
                          {item.isToday ? 'Active Day' : 'Jump to Day'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            /* RICH CARD GRID VIEW */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {filteredDays.map(item => {
                const isExpanded = expandedDay === item.day;

                return (
                  <div
                    key={item.day}
                    className={`p-4 sm:p-5 rounded-2xl border transition flex flex-col justify-between space-y-3 ${
                      item.isToday 
                        ? 'border-amber-500 bg-amber-50/50 dark:bg-amber-950/20 shadow-md shadow-amber-500/10 ring-1 ring-amber-500/30' 
                        : item.isComplete 
                        ? 'border-emerald-500/60 bg-emerald-50/30 dark:bg-emerald-950/10' 
                        : cardBg
                    }`}
                  >
                    {/* Card Top: Day & Status */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-1 rounded-xl font-mono font-black text-xs ${
                          item.isToday 
                            ? 'bg-amber-500 text-white' 
                            : item.isComplete 
                            ? 'bg-emerald-500 text-white' 
                            : 'bg-orange-500/10 text-[#FF5E3A]'
                        }`}>
                          Day {item.day}
                        </span>

                        {item.isToday && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> Today's Focus
                          </span>
                        )}

                        {item.isComplete && !item.isToday && (
                          <span className="text-[10px] font-bold text-emerald-500 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Completed
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => handleSetCurrentDay(item.day)}
                        className={`text-xs font-bold font-mono px-2.5 py-1 rounded-lg transition cursor-pointer ${
                          item.isToday
                            ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300'
                            : 'bg-slate-100 dark:bg-slate-800 hover:bg-[#FF5E3A] hover:text-white text-slate-500'
                        }`}
                        title="Set this day as your current study day"
                      >
                        {item.isToday ? 'Today' : 'Jump Here'}
                      </button>
                    </div>

                    {/* Card Body: Curriculum Breakdown */}
                    <div className="space-y-2.5 text-xs">
                      
                      {/* Kanji for this day */}
                      {item.targets.kanji.length > 0 && (
                        <div>
                          <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                            <BookMarked className="w-3 h-3 text-amber-500" />
                            <span>Kanji ({item.targets.kanji.length})</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {item.targets.kanji.map(k => (
                              <button
                                key={k.char}
                                onClick={() => {
                                  onSelectKanji?.(k.char);
                                }}
                                className="px-2.5 py-1 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/20 font-jp font-black text-sm transition cursor-pointer flex items-center gap-1"
                                title={`${k.char} (${k.meaning}) — Click to hear`}
                              >
                                <span>{k.char}</span>
                                <span className="text-[10px] font-mono font-normal opacity-80">{k.meaning}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Kana for this day */}
                      {item.targets.kana.length > 0 && (
                        <div>
                          <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                            <Languages className="w-3 h-3 text-[#FF5E3A]" />
                            <span>Kana ({item.targets.kana.length})</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.targets.kana.slice(0, isExpanded ? undefined : 8).map(k => (
                              <button
                                key={k.char}
                                onClick={() => audio.speak(k.char)}
                                className="px-2 py-0.5 rounded-md bg-orange-500/10 hover:bg-orange-500/20 text-[#FF5E3A] font-jp font-bold text-xs transition cursor-pointer"
                                title={`${k.char} (${k.romaji})`}
                              >
                                {k.char}
                              </button>
                            ))}
                            {!isExpanded && item.targets.kana.length > 8 && (
                              <button
                                onClick={() => setExpandedDay(item.day)}
                                className="text-[10px] font-bold text-slate-400 hover:text-slate-600 px-1 self-center cursor-pointer"
                              >
                                +{item.targets.kana.length - 8} more
                              </button>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Words & Lesson Row */}
                      <div className="flex items-center justify-between pt-1 border-t border-slate-100 dark:border-slate-800/80 text-[11px]">
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <BookA className="w-3.5 h-3.5" />
                          <span>{item.targets.words.length} Vocabulary Words</span>
                        </span>

                        {item.targets.lessonId && (
                          <button
                            onClick={() => {
                              onNavigateTab?.('lessons', item.targets.lessonId);
                              onClose();
                            }}
                            className="font-bold text-indigo-500 hover:text-indigo-600 flex items-center gap-0.5 cursor-pointer"
                          >
                            <span>Lesson {item.targets.lessonId.replace('lesson-n5-', '')}</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer: Quick Summary Bar */}
        <div className="p-3.5 sm:p-5 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs shrink-0">
          <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 text-slate-400 font-semibold text-[11px] sm:text-xs">
            <span>Showing <strong className="text-slate-800 dark:text-white font-mono">{filteredDays.length}</strong> of {totalDaysCount} Days</span>
            <span>•</span>
            <span className="text-emerald-500 font-bold">{fullPlanDays.filter(d => d.isComplete).length} Days Finished</span>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => handleSelectPlanDuration('ALL')}
              className={`w-full sm:w-auto px-4 py-2.5 sm:py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1.5 ${
                targetDays === 'ALL'
                  ? 'bg-emerald-500 text-white shadow-xs'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-500 hover:text-white'
              }`}
            >
              <Unlock className="w-3.5 h-3.5" />
              <span>{targetDays === 'ALL' ? 'All Content Unlocked' : 'Unlock All Content (No Lock)'}</span>
            </button>

            <button
              onClick={() => {
                audio.playClick();
                onClose();
              }}
              className="w-full sm:w-auto px-5 py-2.5 sm:py-2 rounded-xl bg-[#FF5E3A] text-white hover:bg-[#E84E29] font-black transition cursor-pointer shadow-md shadow-orange-500/20 text-center"
            >
              Close Plan
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FullStudyPlanModal;
