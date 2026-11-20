import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Download, 
  ExternalLink, 
  Play, 
  CheckCircle2, 
  HelpCircle, 
  Volume2, 
  ChevronRight, 
  ChevronLeft,
  Sparkles,
  Layers,
  Video,
  Check,
  X,
  Eye,
  EyeOff
} from 'lucide-react';
import { 
  MASTER_LESSONS_30, 
  MASTER_WORKBOOKS, 
  MasterLessonItem
} from '../data/n5ToN3MasterData';
import audio from '../utils/audio';
import confetti from 'canvas-confetti';

interface SelfStudyMasterTrackViewProps {
  theme: 'dark' | 'light';
  showFurigana?: boolean;
  onGainXp?: (xp: number) => void;
}

export const SelfStudyMasterTrackView: React.FC<SelfStudyMasterTrackViewProps> = ({
  theme,
  showFurigana = true,
  onGainXp
}) => {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'N5' | 'N4' | 'N3'>('ALL');
  const [localFurigana, setLocalFurigana] = useState<boolean>(showFurigana);
  const isFuriganaActive = localFurigana;

  React.useEffect(() => {
    setLocalFurigana(showFurigana);
  }, [showFurigana]);
  const [showKanaHelp, setShowKanaHelp] = useState<boolean>(false);
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});
  const [showTranslation, setShowTranslation] = useState<boolean>(false);
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState<Record<number, string>>({});
  const [quizChecked, setQuizChecked] = useState<Record<number, boolean>>({});

  const cardBg = theme === 'dark' ? 'bg-[#17171C] border-slate-800 text-white' : 'bg-white border-slate-200 text-[#1A1A1F] shadow-xs';
  const subText = theme === 'dark' ? 'text-slate-400' : 'text-slate-500';

  const currentLesson: MasterLessonItem = useMemo(() => {
    return MASTER_LESSONS_30.find(l => l.day === selectedDay) || MASTER_LESSONS_30[0];
  }, [selectedDay]);

  const filteredDays = useMemo(() => {
    if (activeFilter === 'ALL') return MASTER_LESSONS_30;
    return MASTER_LESSONS_30.filter(l => l.level.includes(activeFilter));
  }, [activeFilter]);

  const handleSelectQuizAnswer = (qIdx: number, opt: string) => {
    audio.playClick();
    setSelectedQuizAnswers(prev => ({ ...prev, [qIdx]: opt }));
  };

  const handleCheckQuiz = (qIdx: number, correctAnswer: string) => {
    setQuizChecked(prev => ({ ...prev, [qIdx]: true }));
    const chosen = selectedQuizAnswers[qIdx];
    if (chosen && chosen.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
      audio.playSuccess();
      confetti({ particleCount: 30, spread: 60, origin: { y: 0.7 } });
      if (onGainXp) onGainXp(15);
    } else {
      audio.playError();
    }
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      
      {/* Hero Banner with Official Workbooks */}
      <div className={`p-6 sm:p-8 rounded-3xl border ${cardBg} relative overflow-hidden bg-gradient-to-br ${
        theme === 'dark' 
          ? 'from-orange-500/10 via-[#17171C] to-slate-900/50' 
          : 'from-orange-500/5 via-white to-orange-50/30'
      }`}>
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5E3A]/15 text-[#FF5E3A] text-xs font-bold font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master 30-Day Intensive Self-Study (N5 to N3)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-heading tracking-tight">
            Authentic Japanese Self-Study Curriculum
          </h2>
          <p className={`text-xs sm:text-sm ${subText} leading-relaxed`}>
            30 comprehensive units complete with grammar rules, real-world reading passages, 
            interactive comprehension drills, 30 listening video lessons, and 4 companion printable reference workbooks.
          </p>
        </div>

        {/* 4 Downloadable Companion Workbooks */}
        <div className="mt-6 pt-6 border-t border-slate-200/60 dark:border-slate-800">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#FF5E3A] mb-3 flex items-center gap-1.5">
            <Download className="w-3.5 h-3.5" />
            <span>Official Printable Workbooks (PDF)</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {MASTER_WORKBOOKS.map((wb, idx) => (
              <a
                key={idx}
                href={wb.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3.5 rounded-2xl border transition group flex flex-col justify-between hover:border-[#FF5E3A]/60 ${
                  theme === 'dark' ? 'bg-[#1E1E24] border-slate-800 hover:bg-[#25252D]' : 'bg-slate-50 border-slate-200 hover:bg-orange-50/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-md bg-[#FF5E3A]/10 text-[#FF5E3A]">
                      PDF {idx + 1}
                    </span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#FF5E3A] transition" />
                  </div>
                  <h4 className="text-xs font-bold leading-snug group-hover:text-[#FF5E3A] transition line-clamp-1">
                    {wb.title}
                  </h4>
                  <p className="text-[10px] text-slate-400 line-clamp-2 mt-1">
                    {wb.description}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-200/40 dark:border-slate-800/60 flex items-center justify-between text-[10px] font-semibold text-[#FF5E3A]">
                  <span>Open Workbook</span>
                  <Download className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Study Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: 30-Day Unit Selector */}
        <div className="lg:col-span-4 space-y-3">
          
          {/* Level Filter Tabs */}
          <div className={`p-1.5 rounded-2xl border flex items-center justify-between gap-1 text-xs font-bold ${
            theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
          }`}>
            {(['ALL', 'N5', 'N4', 'N3'] as const).map(lvl => (
              <button
                key={lvl}
                onClick={() => {
                  audio.playClick();
                  setActiveFilter(lvl);
                }}
                className={`flex-1 py-1.5 rounded-xl transition cursor-pointer text-center ${
                  activeFilter === lvl
                    ? 'bg-[#FF5E3A] text-white shadow-xs'
                    : 'text-slate-500 hover:text-[#FF5E3A]'
                }`}
              >
                {lvl === 'ALL' ? 'All 30' : lvl}
              </button>
            ))}
          </div>

          {/* Unit List Scrollable */}
          <div className="space-y-2 max-h-[680px] overflow-y-auto pr-1">
            {filteredDays.map(lesson => {
              const isSelected = selectedDay === lesson.day;
              return (
                <button
                  key={lesson.day}
                  onClick={() => {
                    audio.playClick();
                    setSelectedDay(lesson.day);
                    setShowKanaHelp(false);
                    setShowTranslation(false);
                    setRevealedAnswers({});
                    setSelectedQuizAnswers({});
                    setQuizChecked({});
                  }}
                  className={`w-full p-3.5 rounded-2xl border text-left transition cursor-pointer flex items-center justify-between gap-3 group ${
                    isSelected
                      ? 'bg-orange-500/10 border-[#FF5E3A] text-[#FF5E3A]'
                      : theme === 'dark'
                      ? 'bg-[#17171C] border-slate-800/80 hover:border-slate-700 text-slate-200'
                      : 'bg-white border-slate-200/80 hover:border-slate-300 text-slate-800 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black font-mono text-xs shrink-0 ${
                      isSelected
                        ? 'bg-[#FF5E3A] text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:text-[#FF5E3A]'
                    }`}>
                      {lesson.day}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold font-mono px-1.5 py-0.2 rounded bg-slate-200/60 dark:bg-slate-800 text-slate-500">
                          {lesson.level}
                        </span>
                        {lesson.kanjiRange && (
                          <span className="text-[10px] text-slate-400 font-mono">
                            Kanji {lesson.kanjiRange}
                          </span>
                        )}
                      </div>
                      <p className={`text-xs font-bold truncate mt-0.5 ${isSelected ? 'text-[#FF5E3A]' : ''}`}>
                        {lesson.title}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected ? 'text-[#FF5E3A] translate-x-1' : 'text-slate-400 group-hover:translate-x-0.5'
                  }`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Selected Unit Interactive Classroom */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Unit Header */}
          <div className={`p-6 rounded-3xl border ${cardBg}`}>
            <div className="flex items-center justify-between gap-4 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black font-mono px-2.5 py-1 rounded-lg bg-[#FF5E3A] text-white">
                  DAY {currentLesson.day}
                </span>
                <span className="text-xs font-bold font-mono px-2 py-1 rounded-lg bg-orange-500/10 text-[#FF5E3A]">
                  JLPT {currentLesson.level}
                </span>
                {currentLesson.kanjiRange && (
                  <span className="text-xs font-mono text-slate-400">
                    Kanshudo Kanji: {currentLesson.kanjiRange}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => {
                    if (selectedDay > 1) {
                      audio.playClick();
                      setSelectedDay(selectedDay - 1);
                    }
                  }}
                  disabled={selectedDay <= 1}
                  className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:text-[#FF5E3A] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  title="Previous Day"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    if (selectedDay < 30) {
                      audio.playClick();
                      setSelectedDay(selectedDay + 1);
                    }
                  }}
                  disabled={selectedDay >= 30}
                  className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:text-[#FF5E3A] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  title="Next Day"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-black font-heading mt-2">
              {currentLesson.title}
            </h2>
          </div>

          {/* Section 1: Grammar Patterns */}
          <div className={`p-6 rounded-3xl border ${cardBg} space-y-4`}>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-base font-extrabold flex items-center gap-2 font-heading">
                <Layers className="w-4 h-4 text-[#FF5E3A]" />
                <span>Grammar Patterns & Structures</span>
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLocalFurigana(!isFuriganaActive)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                    isFuriganaActive
                      ? 'bg-[#FF5E3A] text-white shadow-xs'
                      : 'border border-slate-300 dark:border-slate-700 text-slate-500 hover:text-[#FF5E3A]'
                  }`}
                  title="Toggle Furigana and Romaji assistance"
                >
                  <span>振仮名 / Romaji {isFuriganaActive ? 'ON' : 'OFF'}</span>
                </button>
                <span className="text-xs text-slate-400 font-mono">
                  {currentLesson.grammar.length} patterns
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {currentLesson.grammar.map((g, gIdx) => (
                <div 
                  key={gIdx}
                  className={`p-4 rounded-2xl border transition ${
                    theme === 'dark' ? 'bg-[#1E1E24] border-slate-800/80' : 'bg-slate-50/80 border-slate-200/80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-extrabold font-mono text-[#FF5E3A] px-2 py-0.5 rounded bg-orange-500/10">
                      {g.pattern}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed mb-3">
                    {g.rule}
                  </p>
                  <div className={`p-3 rounded-xl border flex items-start justify-between gap-3 ${
                    theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
                  }`}>
                    <div className="space-y-1">
                      <p className="text-sm font-bold font-jp text-slate-900 dark:text-slate-100">
                        {g.exampleJp}
                      </p>
                      {/* Furigana Reading Hint */}
                      {isFuriganaActive && g.exampleFurigana && (
                        <p className="text-xs font-semibold font-jp text-[#FF5E3A] animate-fade-in">
                          {g.exampleFurigana}
                        </p>
                      )}
                      {/* Romaji Assistance */}
                      {g.exampleRomaji && (
                        <p className="text-[11px] font-mono text-slate-400 dark:text-slate-400 italic">
                          {g.exampleRomaji}
                        </p>
                      )}
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {g.exampleEn}
                      </p>
                    </div>
                    <button
                      onClick={() => audio.speak(g.exampleJp)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-[#FF5E3A] hover:bg-orange-500/10 transition cursor-pointer shrink-0"
                      title="Listen audio"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Authentic Japanese Reading Passage */}
          <div className={`p-6 rounded-3xl border ${cardBg} space-y-4`}>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-base font-extrabold flex items-center gap-2 font-heading">
                <BookOpen className="w-4 h-4 text-[#FF5E3A]" />
                <span>Reading Passage & Comprehension</span>
              </h3>
              
              <div className="flex items-center gap-2">
                {currentLesson.reading.kanaHelp && (
                  <button
                    onClick={() => setShowKanaHelp(!showKanaHelp)}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                      showKanaHelp 
                        ? 'bg-[#FF5E3A] text-white shadow-xs' 
                        : 'border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-[#FF5E3A]'
                    }`}
                  >
                    {showKanaHelp ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                    <span>{showKanaHelp ? 'Show Kanji' : 'Kana Reading Aid'}</span>
                  </button>
                )}

                <button
                  onClick={() => audio.speak(currentLesson.reading.text, 0.9)}
                  className="px-3 py-1 rounded-full text-xs font-bold border border-slate-300 dark:border-slate-700 hover:text-[#FF5E3A] hover:border-orange-500/50 transition flex items-center gap-1.5 cursor-pointer"
                >
                  <Volume2 className="w-3 h-3 text-[#FF5E3A]" />
                  <span>Listen Full Passage</span>
                </button>
              </div>
            </div>

            {/* Passage Text Box */}
            <div className={`p-5 rounded-2xl border leading-relaxed ${
              theme === 'dark' ? 'bg-[#1E1E24] border-slate-800' : 'bg-orange-50/30 border-orange-200/60'
            }`}>
              <p className="text-base sm:text-lg font-jp leading-loose tracking-wide text-slate-900 dark:text-slate-100">
                {showKanaHelp && currentLesson.reading.kanaHelp
                  ? currentLesson.reading.kanaHelp
                  : currentLesson.reading.text}
              </p>
            </div>

            {/* Vocabulary Gloss */}
            {currentLesson.reading.gloss && (
              <div className="p-3.5 rounded-xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50/50 dark:bg-[#121216] text-xs">
                <span className="font-bold text-[#FF5E3A] mr-2">Key Vocabulary:</span>
                <span className="text-slate-500 dark:text-slate-400 font-jp">
                  {currentLesson.reading.gloss}
                </span>
              </div>
            )}

            {/* Comprehension Questions */}
            {currentLesson.reading.questions.length > 0 && (
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Comprehension Questions (Check Your Understanding)
                </h4>
                {currentLesson.reading.questions.map((q, qIdx) => {
                  const key = `rq-${currentLesson.day}-${qIdx}`;
                  const isRevealed = revealedAnswers[key];
                  return (
                    <div 
                      key={qIdx}
                      className={`p-3.5 rounded-2xl border transition ${
                        theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-xs sm:text-sm font-bold font-jp">
                          {qIdx + 1}. {q}
                        </p>
                        <button
                          onClick={() => {
                            audio.playClick();
                            setRevealedAnswers(prev => ({ ...prev, [key]: !prev[key] }));
                          }}
                          className="px-2.5 py-1 rounded-lg text-[10px] font-bold font-mono transition shrink-0 cursor-pointer border border-slate-300 dark:border-slate-700 hover:border-[#FF5E3A] text-slate-500 hover:text-[#FF5E3A]"
                        >
                          {isRevealed ? 'Hide Answer' : 'Show Answer'}
                        </button>
                      </div>

                      {isRevealed && (
                        <div className="mt-2.5 pt-2.5 border-t border-slate-200 dark:border-slate-800 text-xs text-[#FF5E3A] font-bold font-jp animate-fade-in flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{currentLesson.reading.answers[qIdx] || 'Model answer available in printable guide.'}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Translation Drawer */}
            <div className="pt-2">
              <button
                onClick={() => setShowTranslation(!showTranslation)}
                className="text-xs font-bold text-slate-500 hover:text-[#FF5E3A] transition flex items-center gap-1 cursor-pointer"
              >
                <span>{showTranslation ? 'Hide English Translation' : 'View English Translation'}</span>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${showTranslation ? 'rotate-90' : ''}`} />
              </button>
              {showTranslation && (
                <div className={`mt-3 p-4 rounded-2xl border text-xs leading-relaxed text-slate-400 animate-fade-in ${
                  theme === 'dark' ? 'bg-[#121217] border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  {currentLesson.reading.translation}
                </div>
              )}
            </div>
          </div>

          {/* Section 3: Immersion Listening Video */}
          {currentLesson.listening.primaryVideoId && (
            <div className={`p-6 rounded-3xl border ${cardBg} space-y-3`}>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-extrabold flex items-center gap-2 font-heading">
                  <Video className="w-4 h-4 text-[#FF5E3A]" />
                  <span>Day {currentLesson.day} Immersion Listening Session</span>
                </h3>
                <span className="text-xs font-bold font-mono text-emerald-500">Active Task</span>
              </div>

              <p className="text-xs text-slate-400">
                {currentLesson.listening.task}
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={`https://www.youtube.com/watch?v=${currentLesson.listening.primaryVideoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#FF5E3A] text-white text-xs font-bold shadow-md shadow-orange-500/20 hover:scale-105 transition flex items-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Play Primary Immersion Video</span>
                </a>

                {currentLesson.listening.backupVideoId && (
                  <a
                    href={`https://www.youtube.com/watch?v=${currentLesson.listening.backupVideoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold hover:text-[#FF5E3A] transition flex items-center gap-2"
                  >
                    <span>Backup ({currentLesson.listening.backupTitle})</span>
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Section 4: Interactive Practice Exercises */}
          {currentLesson.questions.length > 0 && (
            <div className={`p-6 rounded-3xl border ${cardBg} space-y-4`}>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-extrabold flex items-center gap-2 font-heading">
                  <HelpCircle className="w-4 h-4 text-[#FF5E3A]" />
                  <span>Practice Drills & Sentence Builders</span>
                </h3>
                <span className="text-xs text-slate-400 font-mono">
                  {currentLesson.questions.length} drills
                </span>
              </div>

              <div className="space-y-4">
                {currentLesson.questions.map((q, qIdx) => {
                  const isChecked = quizChecked[qIdx];
                  const chosen = selectedQuizAnswers[qIdx];
                  const isCorrect = chosen && chosen.trim().toLowerCase() === q.answer.trim().toLowerCase();

                  return (
                    <div 
                      key={qIdx}
                      className={`p-4 rounded-2xl border transition ${
                        theme === 'dark' ? 'bg-[#1E1E24] border-slate-800' : 'bg-slate-50/80 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-500">
                          Question {qIdx + 1}
                        </span>
                        {isChecked && (
                          <span className={`text-xs font-bold flex items-center gap-1 ${isCorrect ? 'text-emerald-500' : 'text-rose-500'}`}>
                            {isCorrect ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                            <span>{isCorrect ? 'Correct (+15 XP)' : 'Review Key'}</span>
                          </span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm font-bold font-jp mb-3">
                        {q.prompt}
                      </p>

                      {/* Options */}
                      {q.options.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                          {q.options.map((opt, oIdx) => {
                            const isSelected = chosen === opt;
                            return (
                              <button
                                key={oIdx}
                                onClick={() => handleSelectQuizAnswer(qIdx, opt)}
                                className={`p-2.5 rounded-xl text-xs font-bold text-left transition cursor-pointer flex items-center justify-between border ${
                                  isSelected
                                    ? 'bg-[#FF5E3A] text-white border-[#FF5E3A]'
                                    : theme === 'dark'
                                    ? 'bg-[#17171C] border-slate-800 hover:border-slate-700'
                                    : 'bg-white border-slate-200 hover:border-slate-300'
                                }`}
                              >
                                <span>{opt}</span>
                                {isSelected && <Check className="w-3.5 h-3.5" />}
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="mb-3">
                          <input
                            type="text"
                            placeholder="Type target Japanese answer..."
                            value={chosen || ''}
                            onChange={(e) => handleSelectQuizAnswer(qIdx, e.target.value)}
                            className={`w-full p-2.5 rounded-xl border text-xs font-jp transition focus:outline-none focus:ring-2 focus:ring-orange-500/30 ${
                              theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200'
                            }`}
                          />
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-2">
                        <button
                          onClick={() => handleCheckQuiz(qIdx, q.answer)}
                          disabled={!chosen}
                          className="px-4 py-1.5 rounded-xl bg-[#FF5E3A] text-white text-xs font-bold shadow-xs hover:scale-105 disabled:opacity-40 disabled:scale-100 transition cursor-pointer"
                        >
                          Check Answer
                        </button>
                        <span className="text-[10px] text-slate-400">
                          {q.explanation}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
