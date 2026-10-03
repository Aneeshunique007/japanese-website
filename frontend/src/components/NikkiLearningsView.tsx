import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  BookOpen, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Circle, 
  Volume2, 
  Award, 
  Search, 
  HelpCircle, 
  GraduationCap, 
  FileText, 
  Check, 
  X, 
  RotateCcw, 
  Info, 
  Flame
} from 'lucide-react';
import { 
  NIKKI_DAYS, 
  NIKKI_HOMEWORK_CATEGORIES, 
  NIKKI_CLASS_424_QNA, 
  NikkiDayLesson, 
  NikkiKanjiItem,
  NikkiVocabularyItem
} from '../data/nikkiData';
import audio from '../utils/audio';
import { getKanjiPronunciation } from '../utils/romaji';

interface NikkiLearningsViewProps {
  theme: 'dark' | 'light';
  showFurigana: boolean;
  onGainXp: (xp: number, lessonId?: string, studyMinutes?: number) => void;
  onNavigateHome?: () => void;
}

export const NikkiLearningsView: React.FC<NikkiLearningsViewProps> = ({
  theme,
  showFurigana: _showFurigana,
  onGainXp
}) => {
  // Navigation State
  const [selectedTab, setSelectedTab] = useState<string>('day-1'); // 'day-1'...'day-7' | 'homework' | 'qna-424'
  const [activeDaySubTab, setActiveDaySubTab] = useState<'overview' | 'kanji' | 'vocabulary' | 'grammar' | 'reading' | 'quiz'>('overview');

  // Reading passage translation toggle & Romaji toggle (Romaji visible by default)
  const [showTranslations, setShowTranslations] = useState<Record<string, boolean>>({});
  const [hiddenRomajiPassages, setHiddenRomajiPassages] = useState<Record<string, boolean>>({});
  
  // Day checklist state (persisted in localStorage)
  const [completedGoals, setCompletedGoals] = useState<Record<string, boolean>>(() => {
    try {
      const stored = localStorage.getItem('nikki_completed_goals');
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  // Homework answers state: { [questionId]: 'A' | 'B' | 'C' }
  const [homeworkAnswers, setHomeworkAnswers] = useState<Record<string, string>>(() => {
    try {
      const stored = localStorage.getItem('nikki_homework_answers');
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });
  const [activeHwCategory, setActiveHwCategory] = useState<string>('Kanji');

  // Day Quiz answers state: { [dayId]: { [qIdx]: selectedOption } }
  const [quizAnswers, setQuizAnswers] = useState<Record<string, Record<number, string>>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<Record<string, boolean>>({});

  // Class 424 QnA answers state
  const [qna424Answers, setQna424Answers] = useState<Record<string, string>>({});
  const [qna424Submitted, setQna424Submitted] = useState<boolean>(false);

  // Global Search across all days
  const [searchQuery, setSearchQuery] = useState('');

  // Selected Day Lesson
  const currentDay: NikkiDayLesson | undefined = useMemo(() => {
    return NIKKI_DAYS.find(d => d.id === selectedTab);
  }, [selectedTab]);

  // Audio Speech Synthesis for Japanese Text
  const speakJapanese = (text: string) => {
    audio.speak(text);
  };



  const toggleGoal = (goalKey: string) => {
    audio.playClick();
    setCompletedGoals(prev => {
      const updated = { ...prev, [goalKey]: !prev[goalKey] };
      localStorage.setItem('nikki_completed_goals', JSON.stringify(updated));
      return updated;
    });
    if (!completedGoals[goalKey]) {
      onGainXp(10, undefined, 2);
    }
  };

  const handleSelectHomeworkOption = (questionId: string, optionLabel: string, isCorrect: boolean) => {
    if (isCorrect) {
      audio.playSuccess();
      onGainXp(5, undefined, 1);
    } else {
      audio.playWrong();
    }
    setHomeworkAnswers(prev => {
      const updated = { ...prev, [questionId]: optionLabel };
      localStorage.setItem('nikki_homework_answers', JSON.stringify(updated));
      return updated;
    });
  };

  const handleSelectQuizOption = (dayId: string, qIdx: number, option: string) => {
    audio.playClick();
    setQuizAnswers(prev => ({
      ...prev,
      [dayId]: {
        ...(prev[dayId] || {}),
        [qIdx]: option
      }
    }));
  };

  const submitDayQuiz = (day: NikkiDayLesson) => {
    const answers = quizAnswers[day.id] || {};
    let correctCount = 0;
    day.practiceQuiz.forEach((q, idx) => {
      if (answers[idx] === q.correct) correctCount++;
    });

    if (correctCount === day.practiceQuiz.length) {
      audio.playFanfare();
      onGainXp(50, day.id, 10);
    } else if (correctCount > 0) {
      audio.playSuccess();
      onGainXp(correctCount * 10, day.id, 5);
    } else {
      audio.playWrong();
    }
    setQuizSubmitted(prev => ({ ...prev, [day.id]: true }));
  };

  // Calculate overall homework statistics
  const totalHomeworkQuestions = useMemo(() => {
    return NIKKI_HOMEWORK_CATEGORIES.reduce((acc, cat) => acc + cat.questions.length, 0);
  }, []);

  const homeworkCorrectCount = useMemo(() => {
    let count = 0;
    NIKKI_HOMEWORK_CATEGORIES.forEach(cat => {
      cat.questions.forEach(q => {
        if (homeworkAnswers[q.id] === q.correct) count++;
      });
    });
    return count;
  }, [homeworkAnswers]);

  // Global search filtering
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const query = searchQuery.toLowerCase().trim();
    const results: { day: NikkiDayLesson; kanji: NikkiKanjiItem[]; vocab: NikkiVocabularyItem[] }[] = [];

    NIKKI_DAYS.forEach(day => {
      const matchingKanji = day.kanjiList.filter(k => 
        k.kanji.toLowerCase().includes(query) || 
        k.meaning.toLowerCase().includes(query) ||
        (k.onyomi && k.onyomi.toLowerCase().includes(query)) ||
        (k.kunyomi && k.kunyomi.toLowerCase().includes(query))
      );
      const matchingVocab = day.vocabularyList.filter(v => 
        v.japanese.toLowerCase().includes(query) || 
        v.reading.toLowerCase().includes(query) ||
        v.english.toLowerCase().includes(query)
      );

      if (matchingKanji.length || matchingVocab.length) {
        results.push({ day, kanji: matchingKanji, vocab: matchingVocab });
      }
    });

    return results;
  }, [searchQuery]);

  return (
    <div className="space-y-8 animate-fade-in pb-16 max-w-7xl mx-auto">
      
      {/* HERO BANNER */}
      <div className={`p-4 sm:p-6 lg:p-8 rounded-3xl border relative overflow-hidden transition ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-[#1E1815] via-[#17171C] to-[#121217] border-orange-500/20' 
          : 'bg-gradient-to-br from-orange-50 via-white to-amber-50/40 border-orange-200/80 shadow-sm'
      }`}>
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5E3A]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#FF5E3A] text-white shadow-xs flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Nikki's Japanese Classroom</span>
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold font-jp bg-orange-500/10 text-[#FF5E3A] border border-orange-500/20">
                ニッキの日記 · Classes 404–464
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black font-heading tracking-tight leading-tight">
              Master Japanese with <span className="text-[#FF5E3A]">Nikki</span>, Day by Day
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Curated lessons from Class 404 through Class 464. Explore pronunciation mechanics, native dog breeds & counters, the public park storyline with Yuki & Aki, elemental weekdays, action kanji clues, fluency drills, and a comprehensive 70-question review exam!
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 w-full md:w-auto shrink-0">
            <div className={`p-2.5 sm:p-3.5 rounded-2xl border text-center ${
              theme === 'dark' ? 'bg-[#121217]/80 border-slate-800' : 'bg-white/80 border-slate-200 shadow-xs'
            }`}>
              <div className="text-lg sm:text-xl font-black text-[#FF5E3A]">7 Days</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium">Classes 404–464</div>
            </div>

            <div className={`p-2.5 sm:p-3.5 rounded-2xl border text-center ${
              theme === 'dark' ? 'bg-[#121217]/80 border-slate-800' : 'bg-white/80 border-slate-200 shadow-xs'
            }`}>
              <div className="text-lg sm:text-xl font-black text-amber-500">70 Qs</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium">Complete Review</div>
            </div>

            <div className={`p-2.5 sm:p-3.5 rounded-2xl border text-center col-span-2 sm:col-span-1 ${
              theme === 'dark' ? 'bg-[#121217]/80 border-slate-800' : 'bg-white/80 border-slate-200 shadow-xs'
            }`}>
              <div className="text-lg sm:text-xl font-black text-emerald-500">
                {homeworkCorrectCount}/{totalHomeworkQuestions}
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium">Homework Score</div>
            </div>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="mt-6 pt-5 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between gap-4">
          <div className="relative w-full max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text"
              placeholder="Search words, kanji, or topics across all 7 days..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-9 pr-8 py-2 rounded-xl text-xs border transition ${
                theme === 'dark' 
                  ? 'bg-[#121217] border-slate-800 text-white placeholder:text-slate-500 focus:border-[#FF5E3A]' 
                  : 'bg-white border-slate-200 text-slate-800 placeholder:text-slate-400 focus:border-[#FF5E3A] shadow-xs'
              }`}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
            <Flame className="w-3.5 h-3.5 text-[#FF5E3A]" />
            <span>Interactive Slides, Native Pronunciation & Instant Quizzes</span>
          </div>
        </div>
      </div>

      {/* SEARCH RESULTS VIEW (When query active) */}
      {searchResults !== null && (
        <div className={`p-6 rounded-3xl border space-y-4 ${
          theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200 shadow-xs'
        }`}>
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-sm flex items-center gap-2">
              <Search className="w-4 h-4 text-[#FF5E3A]" />
              <span>Search Results for "{searchQuery}"</span>
            </h3>
            <button 
              onClick={() => setSearchQuery('')}
              className="text-xs text-[#FF5E3A] hover:underline font-bold"
            >
              Clear search
            </button>
          </div>

          {searchResults.length === 0 ? (
            <p className="text-xs text-slate-400 py-4 text-center">No matching kanji or words found for "{searchQuery}".</p>
          ) : (
            <div className="space-y-4 pt-2">
              {searchResults.map(({ day, kanji, vocab }) => (
                <div key={day.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-[#FF5E3A] flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5" />
                      Day {day.dayNumber}: {day.classCode} · {day.theme}
                    </span>
                    <button
                      onClick={() => {
                        setSelectedTab(day.id);
                        setSearchQuery('');
                      }}
                      className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#FF5E3A] text-white hover:bg-orange-600 transition cursor-pointer"
                    >
                      Jump to Day {day.dayNumber}
                    </button>
                  </div>

                  {kanji.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {kanji.map(k => (
                        <span key={k.kanji} className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
                          <span className="font-jp text-base text-[#FF5E3A]">{k.kanji}</span>
                          <span>{k.meaning}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  {vocab.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {vocab.map(v => (
                        <span key={v.japanese} className="px-2.5 py-1 rounded-lg text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
                          <span className="font-jp font-bold">{v.japanese}</span>
                          <span className="text-slate-400">({v.reading})</span>
                          <span>{v.english}</span>
                        </span>
                      ))}
                    </div>
                  )}


                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TOP DAY-BY-DAY PILL NAVIGATOR */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-bold px-1 text-slate-400">
          <span className="uppercase tracking-wider">Select Learning Module</span>
          <span>Classes 404–464 & Homework</span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-1 touch-pan-x">
          {NIKKI_DAYS.map(day => {
            const isActive = selectedTab === day.id;
            return (
              <button
                key={day.id}
                onClick={() => {
                  audio.playClick();
                  setSelectedTab(day.id);
                  setActiveDaySubTab('overview');
                }}
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl text-xs font-bold transition shrink-0 cursor-pointer flex items-center gap-2 border ${
                  isActive
                    ? 'bg-[#FF5E3A] text-white border-[#FF5E3A] shadow-md shadow-orange-500/20 scale-[1.02]'
                    : theme === 'dark' 
                      ? 'bg-[#17171C] text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white' 
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:text-black shadow-xs'
                }`}
              >
                <div className={`w-5 h-5 rounded-lg flex items-center justify-center text-[10px] font-black ${
                  isActive ? 'bg-white/20 text-white' : 'bg-orange-500/10 text-[#FF5E3A]'
                }`}>
                  {day.dayNumber}
                </div>
                <span>Day {day.dayNumber}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                  isActive ? 'bg-black/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                }`}>
                  {day.classCode}
                </span>
              </button>
            );
          })}

          {/* Master 70-Question Homework Button */}
          <button
            onClick={() => {
              audio.playClick();
              setSelectedTab('homework');
            }}
            className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl text-xs font-bold transition shrink-0 cursor-pointer flex items-center gap-2 border ${
              selectedTab === 'homework'
                ? 'bg-amber-500 text-white border-amber-500 shadow-md shadow-amber-500/20 scale-[1.02]'
                : theme === 'dark'
                  ? 'bg-[#17171C] text-amber-400 border-amber-500/20 hover:border-amber-500/40'
                  : 'bg-amber-50/60 text-amber-800 border-amber-200 hover:border-amber-300 shadow-xs'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Master Homework (70 Qs)</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 font-black">
              Review
            </span>
          </button>

          {/* Class 424 QnA Drill Button */}
          <button
            onClick={() => {
              audio.playClick();
              setSelectedTab('qna-424');
            }}
            className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl text-xs font-bold transition shrink-0 cursor-pointer flex items-center gap-2 border ${
              selectedTab === 'qna-424'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-500/20 scale-[1.02]'
                : theme === 'dark'
                  ? 'bg-[#17171C] text-emerald-400 border-emerald-500/20 hover:border-emerald-500/40'
                  : 'bg-emerald-50/60 text-emerald-800 border-emerald-200 hover:border-emerald-300 shadow-xs'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Class 424 Q&A Drill</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. MASTER HOMEWORK REVIEW TAB (70 Questions across 7 categories)           */}
      {/* ========================================================================= */}
      {selectedTab === 'homework' && (
        <div className="space-y-6">
          {/* Homework Summary Card */}
          <div className={`p-4 sm:p-6 sm:p-8 rounded-3xl border ${
            theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200 shadow-xs'
          } space-y-4`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                  Comprehensive Review Exam · Classes 404–444
                </span>
                <h2 className="text-xl sm:text-2xl font-black font-heading mt-2">
                  Complete 70-Question Japanese Homework
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Covers Kanji, Kana & Vocabulary, Numbers & Counters, Dates & Time, Particles, Grammar, and Reading Comprehension with official answer key.
                </p>
              </div>

              <div className="w-full sm:w-auto justify-around sm:justify-start flex items-center gap-3 bg-amber-500/10 p-3 rounded-2xl border border-amber-500/20 shrink-0">
                <div className="text-center px-2">
                  <div className="text-2xl font-black text-amber-500">
                    {Math.round((homeworkCorrectCount / totalHomeworkQuestions) * 100)}%
                  </div>
                  <div className="text-[10px] text-slate-400 font-semibold">Mastery</div>
                </div>
                <div className="h-8 w-px bg-amber-500/20"></div>
                <div className="text-center px-2">
                  <div className="text-lg font-black text-[#FF5E3A]">
                    {homeworkCorrectCount} / {totalHomeworkQuestions}
                  </div>
                  <div className="text-[10px] text-slate-400 font-semibold">Correct</div>
                </div>
              </div>
            </div>

            {/* Category Sub-tabs */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-4 border-t border-slate-100 dark:border-slate-800 touch-pan-x">
              {NIKKI_HOMEWORK_CATEGORIES.map(cat => {
                const isActive = activeHwCategory === cat.category;
                const catCorrect = cat.questions.filter(q => homeworkAnswers[q.id] === q.correct).length;
                return (
                  <button
                    key={cat.category}
                    onClick={() => {
                      audio.playClick();
                      setActiveHwCategory(cat.category);
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition shrink-0 cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? 'bg-[#1A1A1F] text-white dark:bg-white dark:text-[#1A1A1F] shadow-xs'
                        : 'text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800'
                    }`}
                  >
                    <span>{cat.category}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                      catCorrect === cat.questions.length && cat.questions.length > 0
                        ? 'bg-emerald-500 text-white'
                        : 'bg-black/10 dark:bg-white/10'
                    }`}>
                      {catCorrect}/{cat.questions.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Homework Category Questions */}
          {(() => {
            const currentCat = NIKKI_HOMEWORK_CATEGORIES.find(c => c.category === activeHwCategory);
            if (!currentCat) return null;

            return (
              <div className="space-y-4">
                {/* Reading passages if this is reading category */}
                {currentCat.passages && Object.keys(currentCat.passages).length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(currentCat.passages).map(([title, text]) => (
                      <div key={title} className={`p-5 rounded-2xl border ${
                        theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200'
                      } space-y-2`}>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-[#FF5E3A]">{title}</span>
                          <button
                            onClick={() => speakJapanese(text)}
                            className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-[#FF5E3A]"
                            title="Listen to Japanese passage"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-sm font-jp font-medium leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Questions List */}
                <div className="space-y-3">
                  {currentCat.questions.map((q) => {
                    const selected = homeworkAnswers[q.id];
                    const isAnswered = Boolean(selected);
                    const isCorrect = selected === q.correct;

                    return (
                      <div 
                        key={q.id}
                        className={`p-3.5 sm:p-5 rounded-2xl border transition ${
                          theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200'
                        } ${isAnswered ? (isCorrect ? 'border-emerald-500/40' : 'border-rose-500/40') : ''}`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-1">
                            <span className="text-[11px] font-bold text-slate-400">Question {q.num}</span>
                            <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                              {q.question}
                            </h4>
                          </div>

                          {isAnswered && (
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-black shrink-0 ${
                              isCorrect 
                                ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' 
                                : 'bg-rose-500/10 text-rose-500 border border-rose-500/20'
                            }`}>
                              {isCorrect ? '✓ Correct (+5 XP)' : '✕ Review'}
                            </span>
                          )}
                        </div>

                        {/* Options A, B, C */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-3.5">
                          {q.options.map(opt => {
                            const isThisSelected = selected === opt.label;
                            const isThisCorrect = opt.label === q.correct;

                            let btnStyle = theme === 'dark' 
                              ? 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300' 
                              : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700';

                            if (isAnswered) {
                              if (isThisCorrect) {
                                btnStyle = 'bg-emerald-500/15 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold';
                              } else if (isThisSelected) {
                                btnStyle = 'bg-rose-500/15 border-rose-500 text-rose-600 dark:text-rose-400';
                              }
                            }

                            return (
                              <button
                                key={opt.label}
                                onClick={() => handleSelectHomeworkOption(q.id, opt.label, opt.label === q.correct)}
                                className={`p-3 rounded-xl border text-left text-xs transition cursor-pointer flex items-center justify-between ${btnStyle}`}
                              >
                                <div className="flex items-center gap-2">
                                  <span className="w-5 h-5 rounded-md bg-black/10 dark:bg-white/10 font-bold flex items-center justify-center text-[10px]">
                                    {opt.label}
                                  </span>
                                  <span className="font-jp">{opt.text}</span>
                                </div>
                                {isAnswered && isThisCorrect && (
                                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {/* Teaching Explanation reveal */}
                        {isAnswered && (
                          <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs">
                            <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                              <Info className="w-3.5 h-3.5 text-[#FF5E3A]" />
                              <span>Focus: {q.explanation}</span>
                            </span>
                            {q.example && (
                              <span className="text-[11px] font-mono text-[#FF5E3A] font-bold">
                                {q.example}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. CLASS 424 QNA DRILL TAB                                               */}
      {/* ========================================================================= */}
      {selectedTab === 'qna-424' && (
        <div className={`p-4 sm:p-6 sm:p-8 rounded-3xl border space-y-6 ${
          theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200 shadow-xs'
        }`}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                Class 424 Interactive Q&A
              </span>
              <h2 className="text-xl sm:text-2xl font-black font-heading mt-2">
                The Public Park Storyline Drill
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Test your knowledge of the characters (Yuki, Aki), their dogs (FuFu, MoMo), birth years, and park events.
              </p>
            </div>
            
            <button
              onClick={() => {
                audio.playClick();
                setQna424Answers({});
                setQna424Submitted(false);
              }}
              className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold hover:text-[#FF5E3A] flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Drill</span>
            </button>
          </div>

          <div className="space-y-4 pt-2">
            {NIKKI_CLASS_424_QNA.map((item) => {
              const selected = qna424Answers[item.id];
              const isCorrect = selected === item.correct;

              return (
                <div key={item.id} className="p-3.5 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-extrabold text-sm">{item.question}</h4>
                    {qna424Submitted && (
                      <span className={`text-xs font-bold ${isCorrect ? 'text-emerald-500' : 'text-rose-500'}`}>
                        {isCorrect ? '✓ Correct' : '✕ Try Again'}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {item.options.map(opt => {
                      const isOptionSelected = selected === opt;
                      return (
                        <button
                          key={opt}
                          onClick={() => {
                            audio.playClick();
                            setQna424Answers(prev => ({ ...prev, [item.id]: opt }));
                          }}
                          className={`p-3 rounded-xl border text-left text-xs font-medium transition cursor-pointer ${
                            isOptionSelected
                              ? 'bg-[#FF5E3A] text-white border-[#FF5E3A] font-bold shadow-xs'
                              : theme === 'dark'
                                ? 'bg-slate-800 border-slate-700 hover:border-slate-600 text-slate-200'
                                : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {qna424Submitted && (
                    <p className="text-xs text-slate-400 pt-1 border-t border-slate-200 dark:border-slate-800">
                      💡 {item.explanation}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {!qna424Submitted ? (
            <button
              onClick={() => {
                let correctCount = 0;
                NIKKI_CLASS_424_QNA.forEach(q => {
                  if (qna424Answers[q.id] === q.correct) correctCount++;
                });
                if (correctCount === NIKKI_CLASS_424_QNA.length) {
                  audio.playFanfare();
                  onGainXp(60, 'class-424-qna', 10);
                } else {
                  audio.playSuccess();
                  onGainXp(correctCount * 10, 'class-424-qna', 5);
                }
                setQna424Submitted(true);
              }}
              className="w-full py-3 rounded-2xl bg-[#FF5E3A] text-white font-extrabold text-sm hover:bg-orange-600 transition cursor-pointer shadow-md shadow-orange-500/20"
            >
              Submit Q&A Answers
            </button>
          ) : (
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center font-bold text-sm text-emerald-500">
              Drill complete! Review any explanations above.
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. DAY LESSON DETAIL VIEW (Day 1 through Day 7)                           */}
      {/* ========================================================================= */}
      {currentDay && (
        <div className="space-y-6">
          
          {/* Day Header Card */}
          <div className={`p-4 sm:p-6 sm:p-8 rounded-3xl border ${
            theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200 shadow-xs'
          } space-y-4`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FF5E3A]/10 text-[#FF5E3A] border border-[#FF5E3A]/20">
                    Day {currentDay.dayNumber} · {currentDay.classCode}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {currentDay.badge}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-heading tracking-tight">
                  {currentDay.theme}
                </h2>
                <div className="text-sm font-jp font-bold text-[#FF5E3A]">
                  {currentDay.japaneseTheme}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed">
                  {currentDay.description}
                </p>
              </div>

              {/* Day Quick Navigation (Prev/Next) */}
              <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                <button
                  disabled={currentDay.dayNumber <= 1}
                  onClick={() => {
                    audio.playClick();
                    setSelectedTab(`day-${currentDay.dayNumber - 1}`);
                  }}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-[#FF5E3A] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  title="Previous Day"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-bold text-slate-400">
                  {currentDay.dayNumber} of 7
                </span>
                <button
                  disabled={currentDay.dayNumber >= 7}
                  onClick={() => {
                    audio.playClick();
                    setSelectedTab(`day-${currentDay.dayNumber + 1}`);
                  }}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-[#FF5E3A] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  title="Next Day"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Sub-tab navigation within the day */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-4 border-t border-slate-100 dark:border-slate-800 touch-pan-x">
              {[
                { id: 'overview', label: 'Overview & Goals', icon: CheckCircle2 },
                { id: 'kanji', label: `Kanji (${currentDay.kanjiList.length})`, icon: GraduationCap },
                { id: 'vocabulary', label: `Vocabulary (${currentDay.vocabularyList.length})`, icon: BookOpen },
                { id: 'grammar', label: 'Grammar & Insights', icon: Info },
                { id: 'reading', label: 'Reading & Dialogues', icon: FileText },
                { id: 'quiz', label: 'Practice Quiz', icon: HelpCircle },
              ].map(sub => {
                const Icon = sub.icon;
                const isActive = activeDaySubTab === sub.id;
                return (
                  <button
                    key={sub.id}
                    onClick={() => {
                      audio.playClick();
                      setActiveDaySubTab(sub.id as any);
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition shrink-0 cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#1A1A1F] text-white dark:bg-white dark:text-[#1A1A1F] shadow-xs'
                        : 'text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{sub.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SUBTAB CONTENT: 1. OVERVIEW & GOALS */}
          {activeDaySubTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Learning Goals Checklist */}
              <div className={`lg:col-span-2 p-4 sm:p-6 rounded-3xl border space-y-4 ${
                theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200 shadow-xs'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <h3 className="font-extrabold text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Day {currentDay.dayNumber} Learning Goals Checklist</span>
                  </h3>
                  <span className="text-[11px] font-bold text-slate-400">
                    Click to mark mastered (+10 XP)
                  </span>
                </div>

                <div className="space-y-2.5 pt-1">
                  {currentDay.goals.map((goal, idx) => {
                    const goalKey = `${currentDay.id}-goal-${idx}`;
                    const isDone = Boolean(completedGoals[goalKey]);

                    return (
                      <div
                        key={idx}
                        onClick={() => toggleGoal(goalKey)}
                        className={`p-3.5 rounded-2xl border transition cursor-pointer flex items-start gap-3 select-none ${
                          isDone 
                            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300' 
                            : theme === 'dark' ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="pt-0.5">
                          {isDone ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          ) : (
                            <Circle className="w-4 h-4 text-slate-400" />
                          )}
                        </div>
                        <span className={`text-xs font-semibold leading-relaxed ${isDone ? 'line-through opacity-80' : ''}`}>
                          {goal}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Key Highlights & Pro-tips */}
              <div className={`p-4 sm:p-6 rounded-3xl border space-y-4 ${
                theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200 shadow-xs'
              }`}>
                <h3 className="font-extrabold text-sm flex items-center gap-2 text-[#FF5E3A]">
                  <Sparkles className="w-4 h-4" />
                  <span>Nikki's Teaching Highlights</span>
                </h3>

                <div className="space-y-3">
                  {currentDay.keyHighlights.map((hl, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-orange-500/5 border border-orange-500/20 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      💡 {hl}
                    </div>
                  ))}
                </div>


              </div>
            </div>
          )}


          {/* SUBTAB CONTENT: 3. KANJI MASTERY CARDS */}
          {activeDaySubTab === 'kanji' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-bold text-slate-400 px-1">
                <span>{currentDay.kanjiList.length} Kanji Characters in {currentDay.classCode}</span>
                <span>Click speaker for audio pronunciation</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentDay.kanjiList.map((k) => (
                  <div key={k.kanji} className={`p-4 sm:p-6 rounded-3xl border space-y-4 transition hover:border-[#FF5E3A]/40 ${
                    theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200 shadow-xs'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-baseline gap-3">
                        <span className="text-4xl sm:text-5xl font-black font-jp text-[#FF5E3A]">
                          {k.kanji}
                        </span>
                        <div>
                          <h4 className="text-base font-extrabold">{k.meaning}</h4>
                          <span className="text-[11px] font-mono text-slate-400">{k.strokes} strokes</span>
                        </div>
                      </div>

                      <button
                        onClick={() => speakJapanese(getKanjiPronunciation(k.kanji))}
                        className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-[#FF5E3A] cursor-pointer"
                        title="Pronounce Kanji"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Readings */}
                    <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 dark:bg-slate-900/60 p-3 rounded-2xl border border-slate-200 dark:border-slate-800">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">On'yomi</span>
                        <span className="font-jp font-bold text-[#FF5E3A]">{k.onyomi || '—'}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">Kun'yomi</span>
                        <span className="font-jp font-bold text-slate-700 dark:text-slate-200">{k.kunyomi || '—'}</span>
                      </div>
                    </div>

                    {/* Radical Clue */}
                    {k.radicalClue && (
                      <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed bg-orange-500/5 border border-orange-500/10 p-2.5 rounded-xl">
                        💡 <strong className="text-slate-700 dark:text-slate-200">Memory Hint:</strong> {k.radicalClue}
                      </div>
                    )}

                    {/* Compound Examples */}
                    {k.examples && k.examples.length > 0 && (
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[10px] uppercase font-bold text-slate-400">Key Compounds</span>
                        {k.examples.map((ex, eIdx) => (
                          <div key={eIdx} className="flex items-center justify-between text-xs py-1.5 border-b border-slate-100 dark:border-slate-800 last:border-0 gap-2">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-jp font-bold text-slate-800 dark:text-slate-100">{ex.word}</span>
                              <span className="text-orange-600 dark:text-orange-400 font-mono text-[11px] bg-orange-500/10 px-1.5 py-0.5 rounded font-semibold border border-orange-500/20">
                                {ex.reading}
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5 shrink-0">
                              <span className="text-slate-600 dark:text-slate-300 text-right text-[11px]">{ex.meaning}</span>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const clean = ex.reading ? ex.reading.replace(/[\(（].*?[\)）]/g, '').trim() : ex.word;
                                  speakJapanese(clean);
                                }}
                                className="p-1 rounded text-slate-400 hover:text-[#FF5E3A] hover:bg-orange-50 dark:hover:bg-slate-800 transition cursor-pointer"
                                title={`Listen to ${ex.word}`}
                              >
                                <Volume2 className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SUBTAB CONTENT: 4. VOCABULARY LIST */}
          {activeDaySubTab === 'vocabulary' && (
            <div className={`p-4 sm:p-6 sm:p-8 rounded-3xl border space-y-4 ${
              theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-base flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#FF5E3A]" />
                    <span>Vocabulary & Collocations ({currentDay.vocabularyList.length} Items)</span>
                  </h3>
                  <p className="text-xs text-slate-400">Click any word to hear authentic Japanese speech synthesis.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                {currentDay.vocabularyList.map((v, idx) => (
                  <div
                    key={idx}
                    onClick={() => speakJapanese(v.reading ? v.reading.split('(')[0].replace(/\s+/g, '') : v.japanese)}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 hover:border-[#FF5E3A]/40 transition cursor-pointer group"
                  >
                    {(() => {
                      const readingClean = v.reading ? (v.reading.includes('(') ? v.reading.split('(')[0].trim() : v.reading) : '';
                      const hasKanji = readingClean && readingClean !== v.japanese;
                      return (
                        <div>
                          {hasKanji ? (
                            <div>
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold font-jp text-slate-400 dark:text-slate-500 mb-0.5 tracking-wide">
                                  {v.japanese}
                                </span>
                                <Volume2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#FF5E3A] transition" />
                              </div>
                              <div className="font-jp font-extrabold text-base text-slate-900 dark:text-white group-hover:text-[#FF5E3A] transition">
                                {readingClean}
                              </div>
                            </div>
                          ) : (
                            <div className="flex items-center justify-between">
                              <span className="font-jp font-extrabold text-base text-slate-900 dark:text-white group-hover:text-[#FF5E3A] transition">
                                {v.japanese}
                              </span>
                              <Volume2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#FF5E3A] transition" />
                            </div>
                          )}

                          {v.romaji && (
                            <div className="pt-1">
                              <span className="text-[11px] font-mono font-bold bg-[#FF5E3A]/10 text-[#FF5E3A] px-2 py-0.5 rounded-md border border-[#FF5E3A]/20">
                                {v.romaji}
                              </span>
                            </div>
                          )}
                        </div>
                      );
                    })()}

                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {v.english}
                    </div>

                    {v.notes && (
                      <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-200/50 dark:border-slate-800">
                        {v.notes}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SUBTAB CONTENT: 5. GRAMMAR & INSIGHTS */}
          {activeDaySubTab === 'grammar' && (
            <div className="space-y-4">
              {(currentDay.grammarNotes || currentDay.grammarPoints || []).map((note, idx) => (
                <div key={idx} className={`p-4 sm:p-6 sm:p-8 rounded-3xl border space-y-4 ${
                  theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200 shadow-xs'
                }`}>
                  <h3 className="text-lg font-black font-heading text-slate-900 dark:text-white flex items-center gap-2">
                    <Info className="w-4 h-4 text-[#FF5E3A]" />
                    <span>{note.title}</span>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {note.explanation}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {note.examples.map((ex, eIdx) => (
                      <div key={eIdx} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2">
                            <span className="font-jp font-bold text-sm text-slate-900 dark:text-white">{ex.japanese}</span>
                            <button
                              onClick={() => {
                                const isKanaReading = ex.reading && /[\u3040-\u30ff]/.test(ex.reading);
                                const textToSpeak = isKanaReading 
                                  ? ex.reading.replace(/[\(（].*?[\)）]/g, '').trim() 
                                  : ex.japanese.replace(/[\(（].*?[\)）]/g, '').replace(/^\d+[\.、]\s*/, '').trim();
                                speakJapanese(textToSpeak);
                              }}
                              className="p-1 rounded-lg text-slate-400 hover:text-[#FF5E3A] hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                              title="Listen"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          {ex.reading && (
                            <span className="text-xs font-mono font-semibold text-[#FF5E3A] bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20 inline-block">
                              {ex.reading}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-slate-600 dark:text-slate-300 font-medium sm:text-right">
                          {ex.english}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* SUBTAB CONTENT: 6. READING & DIALOGUES */}
          {activeDaySubTab === 'reading' && (
            <div className="space-y-4">
              {currentDay.readingPassages && currentDay.readingPassages.length > 0 ? (
                currentDay.readingPassages.map((rp, idx) => {
                  const key = `${currentDay.id}-${idx}`;
                  const showTrans = Boolean(showTranslations[key]);
                  const showRom = !hiddenRomajiPassages[key]; // Romaji is shown by default!

                  return (
                    <div key={idx} className={`p-4 sm:p-6 sm:p-8 rounded-3xl border space-y-5 ${
                      theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200 shadow-xs'
                    }`}>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                        <h3 className="font-extrabold text-base flex items-center gap-2">
                          <FileText className="w-4 h-4 text-[#FF5E3A]" />
                          <span>{rp.title}</span>
                        </h3>

                        <div className="flex items-center gap-2 flex-wrap">
                          <button
                            onClick={() => speakJapanese(rp.text)}
                            className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold hover:text-[#FF5E3A] transition cursor-pointer flex items-center gap-1.5"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                            <span>Listen</span>
                          </button>

                          {rp.romaji && (
                            <button
                              onClick={() => {
                                setHiddenRomajiPassages(prev => ({
                                  ...prev,
                                  [key]: !prev[key]
                                }));
                              }}
                              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
                                showRom 
                                  ? 'bg-orange-500/15 border-orange-500/30 text-[#FF5E3A]' 
                                  : 'border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-white'
                              }`}
                            >
                              {showRom ? 'Hide Romaji' : 'Show Romaji'}
                            </button>
                          )}

                          <button
                            onClick={() => {
                              setShowTranslations(prev => ({
                                ...prev,
                                [key]: !prev[key]
                              }));
                            }}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                              showTrans 
                                ? 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200' 
                                : 'bg-[#FF5E3A] text-white hover:bg-orange-600'
                            }`}
                          >
                            {showTrans ? 'Hide Translation' : 'Show Translation'}
                          </button>
                        </div>
                      </div>

                      <div className="p-4 sm:p-6 rounded-2xl bg-orange-500/5 border border-orange-500/10 space-y-4">
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-2">
                            Japanese Text:
                          </span>
                          <p className="text-base sm:text-lg font-jp font-medium leading-loose text-slate-800 dark:text-slate-100 whitespace-pre-line">
                            {rp.text}
                          </p>
                        </div>

                        {/* Highlighted Romaji Pronunciation */}
                        {rp.romaji && showRom && (
                          <div className="pt-3 border-t border-orange-500/20 bg-orange-500/10 p-4 rounded-xl border border-orange-500/30">
                            <span className="text-[10px] uppercase font-bold tracking-wider text-[#FF5E3A] block mb-1">
                              🔤 Romaji Pronunciation Guide:
                            </span>
                            <p className="text-xs sm:text-sm font-mono text-orange-600 dark:text-orange-300 font-semibold leading-relaxed whitespace-pre-line">
                              {rp.romaji}
                            </p>
                          </div>
                        )}

                        {/* English Translation */}
                        {showTrans && (
                          <div className="pt-3 border-t border-orange-500/20 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic whitespace-pre-line">
                            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1 not-italic">
                              📖 English Translation:
                            </span>
                            {rp.translation}
                          </div>
                        )}
                      </div>

                      {/* Reading Comprehension Q&A */}
                      {rp.questions && rp.questions.length > 0 && (
                        <div className="space-y-3 pt-2">
                          <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400">
                            Comprehension Check
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {rp.questions.map((q, qIdx) => (
                              <div key={qIdx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                                <div className="text-xs font-bold text-slate-800 dark:text-slate-100">{q.q || q.question}</div>
                                <div className="text-xs font-semibold text-[#FF5E3A]">{q.a || q.correct || q.explanation}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-12 text-slate-400 text-xs">
                  No separate reading passages for this day. Check the Slides tab for sentence drills.
                </div>
              )}
            </div>
          )}

          {/* SUBTAB CONTENT: 7. PRACTICE QUIZ */}
          {activeDaySubTab === 'quiz' && (
            <div className={`p-4 sm:p-6 sm:p-8 rounded-3xl border space-y-6 ${
              theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="font-extrabold text-base flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#FF5E3A]" />
                    <span>Day {currentDay.dayNumber} Mastery Practice Quiz</span>
                  </h3>
                  <p className="text-xs text-slate-400">Answer 4 questions to earn bonus XP and test your retention.</p>
                </div>

                {quizSubmitted[currentDay.id] && (
                  <button
                    onClick={() => {
                      audio.playClick();
                      setQuizAnswers(prev => ({ ...prev, [currentDay.id]: {} }));
                      setQuizSubmitted(prev => ({ ...prev, [currentDay.id]: false }));
                    }}
                    className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold hover:text-[#FF5E3A] flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retry Quiz</span>
                  </button>
                )}
              </div>

              <div className="space-y-4">
                {currentDay.practiceQuiz.map((q, qIdx) => {
                  const selectedOpt = quizAnswers[currentDay.id]?.[qIdx];
                  const isSubmitted = quizSubmitted[currentDay.id];
                  const isCorrect = selectedOpt === q.correct;

                  return (
                    <div key={qIdx} className="p-3.5 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-xs text-[#FF5E3A]">Q{qIdx + 1}</span>
                        {isSubmitted && (
                          <span className={`text-xs font-bold ${isCorrect ? 'text-emerald-500' : 'text-rose-500'}`}>
                            {isCorrect ? '✓ Correct' : '✕ Review'}
                          </span>
                        )}
                      </div>

                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {q.question}
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {q.options.map(opt => {
                          const isThisSelected = selectedOpt === opt;
                          let btnStyle = theme === 'dark' 
                            ? 'bg-slate-800 border-slate-700 text-slate-200' 
                            : 'bg-white border-slate-200 text-slate-800';

                          if (isSubmitted) {
                            if (opt === q.correct) {
                              btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold';
                            } else if (isThisSelected) {
                              btnStyle = 'bg-rose-500/20 border-rose-500 text-rose-600 dark:text-rose-400';
                            }
                          } else if (isThisSelected) {
                            btnStyle = 'bg-[#FF5E3A] text-white border-[#FF5E3A] font-bold shadow-xs';
                          }

                          return (
                            <button
                              key={opt}
                              disabled={isSubmitted}
                              onClick={() => handleSelectQuizOption(currentDay.id, qIdx, opt)}
                              className={`p-3 rounded-xl border text-left text-xs transition cursor-pointer ${btnStyle}`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>

                      {isSubmitted && (
                        <p className="text-xs text-slate-400 pt-1 border-t border-slate-200 dark:border-slate-800">
                          💡 {q.explanation}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              {!quizSubmitted[currentDay.id] ? (
                <button
                  onClick={() => submitDayQuiz(currentDay)}
                  className="w-full py-3 rounded-2xl bg-[#FF5E3A] text-white font-extrabold text-sm hover:bg-orange-600 transition cursor-pointer shadow-md shadow-orange-500/20"
                >
                  Submit Day {currentDay.dayNumber} Quiz (+50 XP)
                </button>
              ) : (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center font-bold text-sm text-emerald-500">
                  Quiz Submitted! Keep up the momentum in Day {Math.min(7, currentDay.dayNumber + 1)}.
                </div>
              )}
            </div>
          )}

        </div>
      )}

    </div>
  );
};
