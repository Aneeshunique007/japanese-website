import React, { useState, useEffect, useMemo } from 'react';
import { 
  ArrowLeft, 
  ArrowRight,
  Volume2, 
  HelpCircle, 
  FileText, 
  BookOpen, 
  MessageSquare, 
  Check,
  X,
  Sparkles,
  PenTool,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Puzzle,
  Play,
  RotateCcw
} from 'lucide-react';
import { api } from '../services/api';
import { clientCache } from '../services/cacheService';
import audio from '../utils/audio';
import { PracticeQuizModal } from './PracticeQuizModal';
import { Question } from '../types';
import { studyScheduleStore } from '../utils/studyScheduleStore';
import { getLessonGrammar10Questions } from '../utils/lessonGrammarQuizData';
import { learnedStore } from '../utils/learnedStore';

interface LessonDetailViewProps {
  lessonId: string;
  onBack: () => void;
  showFurigana: boolean;
  theme: 'dark' | 'light';
  onCompleteLesson?: (lessonId: string, xpGained: number) => void;
  onSelectLesson?: (lessonId: string) => void;
}

export const LessonDetailView: React.FC<LessonDetailViewProps> = ({ 
  lessonId, 
  onBack, 
  showFurigana,
  theme,
  onCompleteLesson,
  onSelectLesson
}) => {
  const [lessonData, setLessonData] = useState<any>(null);
  const [parentCourse, setParentCourse] = useState<any>(null);
  const [nextLesson, setNextLesson] = useState<{ id: string; title: string } | null>(null);
  const [prevLesson, setPrevLesson] = useState<{ id: string; title: string } | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Interactive letter selection tab
  const [selectedLetterIdx, setSelectedLetterIdx] = useState<number>(0);

  // Blank Filling State
  const [blankFillAnswers, setBlankFillAnswers] = useState<Record<string, string>>({});
  const [blankFillChecked, setBlankFillChecked] = useState<Record<string, boolean>>({});
  const [showHints, setShowHints] = useState<Record<string, boolean>>({});

  // Quiz State — one-at-a-time with immediate re-queue on wrong
  const [quizQuestions, setQuizQuestions] = useState<any[]>([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizSelected, setQuizSelected] = useState<number | null>(null);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizInitialTotal, setQuizInitialTotal] = useState(0);
  const [quizRepeatCount, setQuizRepeatCount] = useState(0);
  const [showQuizHint, setShowQuizHint] = useState(false);
  const [practiceModalOpen, setPracticeModalOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(() => learnedStore.isLessonCompleted(lessonId));

  // Listen for external learned updates
  useEffect(() => {
    const onUpdate = () => setIsCompleted(learnedStore.isLessonCompleted(lessonId));
    window.addEventListener('anilearn_learned_update', onUpdate);
    window.addEventListener('anilearn_user_update', onUpdate);
    return () => {
      window.removeEventListener('anilearn_learned_update', onUpdate);
      window.removeEventListener('anilearn_user_update', onUpdate);
    };
  }, [lessonId]);

  // Reset states when changing lessons
  useEffect(() => {
    setSelectedLetterIdx(0);
    setBlankFillAnswers({});
    setBlankFillChecked({});
    setShowHints({});
    setShowQuizHint(false);
    setQuizQuestions([]);
    setQuizIndex(0);
    setQuizSelected(null);
    setQuizAnswered(false);
    setQuizFinished(false);
    setQuizScore(0);
    setQuizInitialTotal(0);
    setQuizRepeatCount(0);
    setIsCompleted(learnedStore.isLessonCompleted(lessonId));
  }, [lessonId]);

  // Extract interactive questions corresponding to this lesson
  const practiceQuestions: Question[] = useMemo(() => {
    if (lessonData?.questions && lessonData.questions.length > 0) {
      return lessonData.questions.slice(0, 5);
    }
    const units = clientCache.get<any[]>('curriculum_units') || [];
    const match = lessonId.match(/(\d+)/);
    const num = match ? parseInt(match[1], 10) : 1;
    const unit = units.find((u: any) => u.unitNumber === num) || units[0];
    
    const qList: Question[] = [];
    if (unit?.lessons) {
      unit.lessons.forEach((l: any) => {
        if (l.questions) qList.push(...l.questions);
      });
    }
    return qList.slice(0, 5);
  }, [lessonId, lessonData]);

  // Helper to shuffle choices while preserving correct answer
  const prepareQuizQuestions = (rawQuestions: any[]) => {
    return rawQuestions.map(q => {
      const correctOptionText = q.options[q.correctIndex];
      const shuffled = [...q.options].sort(() => Math.random() - 0.5);
      const newCorrectIndex = shuffled.indexOf(correctOptionText);
      return {
        ...q,
        options: shuffled,
        correctIndex: newCorrectIndex >= 0 ? newCorrectIndex : 0,
      };
    });
  };

  // 10 Targeted Grammar Checkpoint Questions for this specific lesson
  const lessonQuizQuestions = useMemo(() => {
    const custom10 = getLessonGrammar10Questions(lessonId);
    if (custom10 && custom10.length === 10) {
      return custom10;
    }
    return lessonData?.quiz || [];
  }, [lessonId, lessonData]);

  // Initialise quiz queue when questions load
  useEffect(() => {
    if (lessonQuizQuestions.length > 0 && quizQuestions.length === 0 && !quizFinished) {
      const prepared = prepareQuizQuestions(lessonQuizQuestions);
      setQuizQuestions(prepared);
      setQuizInitialTotal(prepared.length);
    }
  }, [lessonQuizQuestions]);

  useEffect(() => {
    async function fetchLesson() {
      setLoading(true);
      try {
        const data = await api.getLessonById(lessonId);
        if (data.success) {
          setLessonData(data.lesson);
          setParentCourse(data.course);
          setNextLesson(data.nextLesson || null);
          setPrevLesson(data.prevLesson || null);
        }
      } catch (err) {
        console.error('Failed to load lesson:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchLesson();
  }, [lessonId]);

  if (loading || !lessonData) {
    return (
      <div className="max-w-4xl mx-auto py-16 text-center space-y-3">
        <div className="w-10 h-10 border-3 border-[#FF5E3A] border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-sm font-bold text-[#FF5E3A]">Loading interactive lesson curriculum...</p>
      </div>
    );
  }

  const cardBg = theme === 'dark' ? 'bg-[#17171C] border-slate-800 text-white' : 'bg-white border-slate-200/80 text-[#1A1A1F] shadow-xs';
  const subText = theme === 'dark' ? 'text-slate-400' : 'text-slate-500';

  const handleSelectBlankOption = (exerciseId: string, option: string) => {
    audio.playClick();
    setBlankFillAnswers(prev => ({ ...prev, [exerciseId]: option }));
    setBlankFillChecked(prev => ({ ...prev, [exerciseId]: true }));
  };

  // One-at-a-time quiz handlers
  const quizCurrentQ = quizQuestions[quizIndex];
  const quizIsReview = quizIndex >= quizInitialTotal;

  const handleSelectQuizOption = (optIdx: number) => {
    if (quizAnswered) return;
    audio.playClick();
    setQuizSelected(optIdx);
    setQuizAnswered(true);
    if (optIdx === quizCurrentQ.correctIndex) {
      audio.playCorrect();
      setQuizScore(prev => prev + 1);
    } else {
      audio.playIncorrect();
      setQuizRepeatCount(prev => prev + 1);
      // REPEAT MISTAKEN QUESTION: Append to end of queue until answered correctly
      setQuizQuestions(prev => [...prev, quizCurrentQ]);
    }
  };

  const handleQuizNext = () => {
    audio.playClick();
    setShowQuizHint(false);
    if (quizIndex + 1 < quizQuestions.length) {
      setQuizIndex(prev => prev + 1);
      setQuizSelected(null);
      setQuizAnswered(false);
    } else {
      // All answered correctly — complete!
      audio.playFanfare();
      setQuizFinished(true);
      learnedStore.markLessonCompleted(lessonId);
      setIsCompleted(true);
      if (onCompleteLesson) onCompleteLesson(lessonId, 45);
    }
  };

  const handleToggleComplete = () => {
    audio.playClick();
    const nowDone = learnedStore.toggleLessonCompleted(lessonId);
    setIsCompleted(nowDone);
    if (nowDone) {
      audio.playFanfare();
      if (onCompleteLesson) onCompleteLesson(lessonId, 45);
    }
  };

  const handleRestartQuiz = () => {
    audio.playClick();
    setShowQuizHint(false);
    const prepared = prepareQuizQuestions(lessonQuizQuestions);
    setQuizQuestions(prepared);
    setQuizIndex(0);
    setQuizSelected(null);
    setQuizAnswered(false);
    setQuizFinished(false);
    setQuizScore(0);
    setQuizRepeatCount(0);
  };

  // quizSubmitted shim — used by canProceed check below
  const quizSubmitted = quizFinished;

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      
      {/* Back Button & Breadcrumbs */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            audio.playClick();
            onBack();
          }}
          className={`px-3.5 py-2 rounded-xl border flex items-center gap-2 text-xs font-black transition cursor-pointer ${
            theme === 'dark' ? 'bg-[#17171C] border-slate-800 text-slate-300 hover:text-white' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-xs'
          }`}
        >
          <ArrowLeft className="w-4 h-4 text-[#FF5E3A]" />
          <span>Back to Courses</span>
        </button>

        {parentCourse && (
          <span className="text-xs font-mono font-bold text-[#FF5E3A] px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
            {parentCourse.title}
          </span>
        )}
      </div>

      {/* Lesson Header Title Banner */}
      <div className={`p-4 sm:p-8 rounded-2xl sm:rounded-3xl border ${cardBg} shadow-xs space-y-2`}>
        <div className="flex items-center gap-2">
          <span className="text-xs font-black uppercase tracking-wider text-[#FF5E3A] font-mono">
            Interactive Learning Module • {lessonData.readTimeMinutes} min
          </span>
        </div>
        <h1 className="text-xl sm:text-3xl font-black tracking-tight font-heading">
          {lessonData.title}
        </h1>
        <h2 className="text-sm sm:text-lg font-bold text-slate-400 font-jp">
          {lessonData.japaneseTitle}
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <p className={`text-xs sm:text-sm ${subText} leading-relaxed flex-1`}>
            {lessonData.summary}
          </p>
          <button
            onClick={handleToggleComplete}
            className={`w-full sm:w-auto px-5 py-2.5 rounded-2xl text-xs font-black transition cursor-pointer flex items-center justify-center gap-2 shadow-xs shrink-0 ${
              isCompleted
                ? 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-emerald-500/25 ring-2 ring-emerald-400/40'
                : 'bg-gradient-to-r from-[#FF7B5C] to-[#FF5E3A] text-white hover:from-[#FF5E3A] hover:to-[#E84E29] shadow-orange-500/25 active:scale-95'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isCompleted ? '✓ Lesson Completed' : 'Mark Lesson Complete (+45 XP)'}</span>
          </button>
        </div>
      </div>

      {/* SECTION: BEGINNER MEMORY HACK & MNEMONIC CHEAT-SHEET */}
      {lessonData.memoryTip && (
        <div className={`p-4 sm:p-8 rounded-2xl sm:rounded-3xl border shadow-xs transition ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-amber-950/20 via-orange-950/10 to-[#17171C] border-amber-500/30 text-white' 
            : 'bg-gradient-to-br from-amber-50/70 via-orange-50/40 to-white border-amber-200 text-slate-900 shadow-amber-500/5'
        } space-y-3 sm:space-y-4`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-500 flex items-center justify-center shrink-0">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-500 font-mono block">
                Beginner Memory Hack & Cheat-Sheet
              </span>
              <h2 className="text-lg sm:text-xl font-black font-heading tracking-tight">
                {lessonData.memoryTip.title}
              </h2>
            </div>
          </div>

          <p className={`text-xs sm:text-sm ${subText} leading-relaxed`}>
            {lessonData.memoryTip.explanation}
          </p>

          {lessonData.memoryTip.rhyme && (
            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-300 font-mono font-bold text-xs sm:text-sm flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{lessonData.memoryTip.rhyme}</span>
            </div>
          )}

          {lessonData.memoryTip.bulletPoints && lessonData.memoryTip.bulletPoints.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {lessonData.memoryTip.bulletPoints.map((bp: string, bpIdx: number) => (
                <div 
                  key={bpIdx}
                  className="px-3.5 py-2.5 rounded-xl bg-amber-500/5 border border-amber-500/15 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-start gap-2"
                >
                  <span className="text-amber-500 font-bold shrink-0">•</span>
                  <span>{bp}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* SECTION 1: LETTER-BY-LETTER SYLLABARY & WORD VAULT (あ・い・う・え・お) */}
      {lessonData.letterSections && lessonData.letterSections.length > 0 && (
        <div className="space-y-4 sm:space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <PenTool className="w-5 h-5 text-[#FF5E3A]" />
                <h2 className="text-lg sm:text-xl font-black font-heading">
                  Letter-by-Letter Words & Syllabary Practice
                </h2>
              </div>
              <p className={`text-xs ${subText} mt-0.5`}>
                Study words starting letter-by-letter with audio pronunciation, readings, and stroke counts.
              </p>
            </div>

            {/* Letter Tabs (A, I, U, E, O) */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-x-auto no-scrollbar touch-pan-x whitespace-nowrap">
              {lessonData.letterSections.map((sec: any, idx: number) => (
                <button
                  key={sec.letter}
                  onClick={() => {
                    audio.playClick();
                    setSelectedLetterIdx(idx);
                  }}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-black transition cursor-pointer font-jp shrink-0 ${
                    selectedLetterIdx === idx
                      ? 'bg-[#FF5E3A] text-white shadow-xs'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {sec.letter} ({sec.romaji})
                </button>
              ))}
            </div>
          </div>

          {/* Active Letter Deep Dive Card */}
          {(() => {
            const activeLetter = lessonData.letterSections[selectedLetterIdx] || lessonData.letterSections[0];
            return (
              <div className={`p-4 sm:p-8 rounded-2xl sm:rounded-3xl border ${cardBg} space-y-4 sm:space-y-6 shadow-xs`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-slate-100 dark:border-slate-800 pb-4 sm:pb-5">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-orange-500/10 border-2 border-orange-500/30 flex items-center justify-center text-[#FF5E3A] font-jp font-black text-2xl sm:text-3xl shadow-xs shrink-0">
                      {activeLetter.letter}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-base sm:text-lg font-black font-heading">Letter "{activeLetter.letter}" ({activeLetter.romaji.toUpperCase()})</span>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 font-mono font-bold text-slate-500">
                          {activeLetter.strokeCount} Strokes
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{activeLetter.meaning || 'Hiragana Vowel Group'}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => audio.speak(activeLetter.letter)}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 text-[#FF5E3A] border border-orange-500/20 transition cursor-pointer flex items-center justify-center gap-2 text-xs font-bold"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Pronounce "{activeLetter.letter}"</span>
                  </button>
                </div>

                {/* Words Starting With This Letter */}
                <div>
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-3">
                    Vocabulary Words Starting With "{activeLetter.letter}" ({activeLetter.words.length} Words)
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                    {activeLetter.words.map((w: any, wIdx: number) => (
                      <div 
                        key={wIdx}
                        className={`p-4 rounded-2xl border transition group flex flex-col justify-between ${
                          theme === 'dark' ? 'bg-slate-900/60 border-slate-800 hover:border-[#FF5E3A]/50' : 'bg-orange-50/20 border-slate-200/80 hover:border-[#FF5E3A]/50 hover:bg-white'
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

                        <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                          {w.english}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* SECTION 2: INTERACTIVE BLANK FILLING PRACTICE */}
      {lessonData.blankFillExercises && lessonData.blankFillExercises.length > 0 && (
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#FF5E3A]" />
            <h2 className="text-xl font-black font-heading">
              Interactive Blank Filling Practice
            </h2>
          </div>

          <div className={`p-4 sm:p-8 rounded-2xl sm:rounded-3xl border ${cardBg} space-y-5 sm:space-y-6 shadow-xs`}>
            <p className={`text-xs ${subText}`}>
              Select the correct particle or word to complete each sentence. Test your grammar and particle understanding in real-time.
            </p>

            <div className="space-y-5 sm:space-y-6">
              {lessonData.blankFillExercises.map((bf: any) => {
                const selected = blankFillAnswers[bf.id];
                const isChecked = blankFillChecked[bf.id];
                const isCorrect = selected === bf.correctWord;
                const showHint = showHints[bf.id];

                return (
                  <div 
                    key={bf.id} 
                    className={`p-4 sm:p-6 rounded-2xl border space-y-3.5 sm:space-y-4 transition ${
                      isChecked 
                        ? isCorrect 
                          ? 'bg-emerald-500/5 border-emerald-500/40' 
                          : 'bg-rose-500/5 border-rose-500/40'
                        : theme === 'dark' ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50/70 border-slate-200'
                    }`}
                  >
                    {/* Sentence with Blank Space */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="space-y-1">
                        <div className="text-base sm:text-xl font-black font-jp flex items-center flex-wrap gap-1 sm:gap-1.5">
                          <span>{bf.sentencePrefix}</span>
                          <span className={`px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-xl border-2 font-mono text-sm sm:text-base inline-flex items-center justify-center min-w-[45px] sm:min-w-[50px] ${
                            selected 
                              ? isCorrect 
                                ? 'border-emerald-500 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold' 
                                : 'border-rose-500 bg-rose-500/20 text-rose-500 font-bold'
                              : 'border-dashed border-[#FF5E3A] bg-orange-500/10 text-[#FF5E3A]'
                          }`}>
                            {selected || '___'}
                          </span>
                          <span>{bf.sentenceSuffix}</span>
                        </div>
                        {showFurigana && bf.sentenceRomaji && (() => {
                          const selectedOptIdx = bf.options.indexOf(selected);
                          const selectedRomaji = selectedOptIdx >= 0 && bf.optionsRomaji ? bf.optionsRomaji[selectedOptIdx] : selected;
                          const dynamicRomaji = bf.sentenceRomaji.replace(/\[.*?\]/, selected ? `[ ${selectedRomaji} ]` : '[ ___ ]');
                          return (
                            <div className="text-xs font-mono font-bold text-[#FF5E3A]">
                              {dynamicRomaji}
                            </div>
                          );
                        })()}
                        <div className="text-xs text-slate-500 italic">Meaning: "{bf.english}"</div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-auto">
                        <button
                          onClick={() => {
                            const fullSentence = `${bf.sentencePrefix}${selected || bf.correctWord}${bf.sentenceSuffix}`;
                            audio.speak(fullSentence);
                          }}
                          className="p-2 rounded-xl bg-orange-500/10 text-[#FF5E3A] hover:bg-orange-500/20 transition cursor-pointer"
                          title="Listen to full sentence"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setShowHints(prev => ({ ...prev, [bf.id]: !prev[bf.id] }))}
                          className="p-2 rounded-xl bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 transition cursor-pointer"
                          title="Show Hint"
                        >
                          <Lightbulb className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Hint Banner */}
                    {showHint && (
                      <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs flex items-center gap-2 animate-fade-in">
                        <Lightbulb className="w-4 h-4 shrink-0" />
                        <span><strong>Hint:</strong> {bf.hint}</span>
                      </div>
                    )}

                    {/* Options Pills */}
                    <div className="flex items-center flex-wrap gap-2 pt-1">
                      <span className="text-xs font-bold text-slate-400 mr-1 sm:mr-2">Choose answer:</span>
                      {bf.options.map((opt: string, optIdx: number) => {
                        const isThisSelected = selected === opt;
                        const romaji = bf.optionsRomaji ? bf.optionsRomaji[optIdx] : null;
                        let optStyle = 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-[#FF5E3A]';
                        if (isThisSelected) {
                          optStyle = isCorrect 
                            ? 'bg-emerald-500 border-emerald-500 text-white font-bold' 
                            : 'bg-rose-500 border-rose-500 text-white font-bold';
                        }
                        return (
                          <button
                            key={opt}
                            onClick={() => handleSelectBlankOption(bf.id, opt)}
                            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border text-xs sm:text-sm font-black transition cursor-pointer font-jp inline-flex items-center gap-1.5 ${optStyle}`}
                          >
                            <span>{opt}</span>
                            {showFurigana && romaji && (
                              <span className={`text-[11px] font-mono font-normal opacity-80 ${isThisSelected ? 'text-white' : 'text-[#FF5E3A]'}`}>
                                ({romaji})
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Feedback Status */}
                    {isChecked && (
                      <div className={`text-xs font-bold flex items-center gap-1.5 pt-1 ${
                        isCorrect ? 'text-emerald-500' : 'text-rose-500'
                      }`}>
                        {isCorrect ? (
                          <>
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Correct! Excellent grammar comprehension.</span>
                          </>
                        ) : (
                          <>
                            <AlertCircle className="w-4 h-4" />
                            <span>Incorrect. The correct answer is "{bf.correctWord}".</span>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* SECTION 3: GRAMMAR POINTS & FORMULAS */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-[#FF5E3A]" />
          <h2 className="text-xl font-black font-heading">Grammar Explanations & Structures</h2>
        </div>

        {lessonData.grammarPoints.map((gp: any, idx: number) => (
          <div key={idx} className={`p-4 sm:p-8 rounded-2xl sm:rounded-3xl border ${cardBg} space-y-4 shadow-xs`}>
            <div>
              <span className="text-[10px] font-black uppercase text-[#FF5E3A] px-2.5 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 font-mono">
                Grammar Rule {idx + 1}
              </span>
              <h3 className="text-lg sm:text-xl font-black mt-2 font-heading">{gp.title}</h3>
            </div>

            {/* Structure Formula Badge */}
            <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border font-mono text-xs sm:text-sm font-black break-words ${
              theme === 'dark' ? 'bg-[#101014] border-slate-800 text-amber-300' : 'bg-orange-50/50 border-orange-100 text-orange-950'
            }`}>
              Formula: {gp.structure}
            </div>

            <p className={`text-xs sm:text-sm ${subText} leading-relaxed`}>
              {gp.explanation}
            </p>

            {/* Example Sentences */}
            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-black text-slate-400 uppercase tracking-wider block">Real Example Sentences</span>
              {gp.examples.map((ex: any, exIdx: number) => (
                <div 
                  key={exIdx} 
                  className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border flex items-center justify-between gap-3 sm:gap-4 transition ${
                    theme === 'dark' ? 'bg-slate-900/60 border-slate-800' : 'bg-orange-50/20 border-slate-200/80'
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="text-sm sm:text-lg font-black font-jp break-words">
                      {showFurigana ? ex.furigana : ex.japanese}
                    </div>
                    {showFurigana && ex.romaji && (
                      <div className="text-xs font-bold text-[#FF5E3A] italic mt-0.5 font-mono break-words">{ex.romaji}</div>
                    )}
                    <div className="text-xs font-medium text-slate-700 dark:text-slate-200 mt-1 break-words">{ex.english}</div>
                  </div>

                  <button
                    onClick={() => audio.speak(ex.furigana ? ex.furigana.replace(/\s+/g, '') : ex.japanese)}
                    className="p-2 sm:p-2.5 rounded-xl bg-orange-500/10 text-[#FF5E3A] hover:bg-orange-500/20 transition shrink-0 cursor-pointer"
                    title="Listen to Japanese pronunciation"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* SECTION 4: VOCABULARY TABLE */}
      {lessonData.vocabulary && lessonData.vocabulary.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#FF5E3A]" />
            <h2 className="text-xl font-black font-heading">Core Vocabulary Table</h2>
          </div>

          <div className={`rounded-2xl sm:rounded-3xl border overflow-hidden shadow-xs ${cardBg}`}>
            <div className="overflow-x-auto no-scrollbar touch-pan-x">
              <table className="w-full text-left text-sm min-w-[500px]">
                <thead className={`border-b text-xs font-bold uppercase ${
                  theme === 'dark' ? 'bg-[#17171C] border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-500'
                }`}>
                  <tr>
                    <th className="px-5 py-3.5">Word</th>
                    {showFurigana && <th className="px-5 py-3.5">Furigana</th>}
                    {showFurigana && <th className="px-5 py-3.5">Romaji</th>}
                    <th className="px-5 py-3.5">Meaning</th>
                    <th className="px-5 py-3.5">Type</th>
                    <th className="px-5 py-3.5 text-right">Audio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {lessonData.vocabulary.map((v: any, idx: number) => (
                    <tr key={idx} className="hover:bg-orange-50/30 dark:hover:bg-slate-800/40 transition">
                      <td className="px-5 py-3.5 font-black font-jp text-base text-slate-900 dark:text-white">{v.kanji}</td>
                      {showFurigana && <td className="px-5 py-3.5 font-jp text-slate-600 dark:text-slate-300 font-bold">{v.furigana}</td>}
                      {showFurigana && <td className="px-5 py-3.5 text-[#FF5E3A] font-mono text-xs font-bold">{v.romaji}</td>}
                      <td className="px-5 py-3.5 font-medium">{v.english}</td>
                      <td className="px-5 py-3.5 text-xs text-slate-400">
                        <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-mono font-bold">{v.pos}</span>
                      </td>
                      <td className="px-5 py-3.5 text-right">
                        <button
                          onClick={() => audio.speak(v.furigana ? v.furigana.replace(/\s+/g, '') : (v.reading || v.kanji))}
                          className="p-1.5 rounded-lg bg-orange-500/10 text-[#FF5E3A] hover:bg-orange-500/20 transition cursor-pointer"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 5: SITUATIONAL DIALOGUE */}
      {lessonData.dialogue && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-emerald-500" />
            <h2 className="text-xl font-black font-heading">Real-World Conversational Dialogue</h2>
          </div>

          <div className={`p-4 sm:p-8 rounded-2xl sm:rounded-3xl border ${cardBg} space-y-4 shadow-xs`}>
            <div>
              <h3 className="text-base font-black">{lessonData.dialogue.title}</h3>
              <p className={`text-xs ${subText}`}>{lessonData.dialogue.situation}</p>
            </div>

            <div className="space-y-3 pt-2">
              {lessonData.dialogue.lines.map((line: any, idx: number) => (
                <div key={idx} className="flex items-start gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-orange-50/20 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                  <div className="px-2.5 sm:px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-black text-xs shrink-0 font-mono">
                    {line.speaker}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-black font-jp text-sm sm:text-base break-words">
                      {showFurigana ? line.furigana : line.japanese}
                    </div>
                    {showFurigana && line.romaji && (
                      <div className="text-xs text-[#FF5E3A] italic mt-0.5 font-mono break-words">{line.romaji}</div>
                    )}
                    <div className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-1 break-words">{line.english}</div>
                  </div>
                  <button
                    onClick={() => audio.speak(line.furigana ? line.furigana.replace(/\s+/g, '') : line.japanese)}
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-orange-50 text-slate-600 dark:text-slate-300 transition shrink-0 cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SECTION 6: COMPREHENSION CHECKPOINT QUIZ (10 Targeted Grammar Questions) */}
      {lessonQuizQuestions && lessonQuizQuestions.length > 0 && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-500" />
              <h2 className="text-xl font-black font-heading">Grammar Checkpoint Quiz ({lessonQuizQuestions.length} Questions)</h2>
            </div>
            {!quizFinished && (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/15 text-amber-500 border border-amber-500/30 self-start sm:self-auto">
                {quizScore} / {quizInitialTotal} Mastered
              </span>
            )}
          </div>

          <div className={`p-4 sm:p-8 rounded-2xl sm:rounded-3xl border ${cardBg} space-y-5 sm:space-y-6 shadow-xs`}>
            {quizFinished ? (
              /* Results */
              <div className="text-center space-y-4 sm:space-y-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                  <Sparkles className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-black font-heading">Checkpoint Passed! ✨</h3>
                  <p className="text-xs text-slate-400">
                    {quizRepeatCount === 0
                      ? `Flawless! All ${quizInitialTotal} questions correct on first attempt! +45 XP`
                      : `All ${quizInitialTotal} questions mastered. ${quizRepeatCount} mistake${quizRepeatCount !== 1 ? 's' : ''} corrected during review. +45 XP`}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
                  <button
                    onClick={handleRestartQuiz}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Redo Quiz</span>
                  </button>
                  {nextLesson && onSelectLesson && (
                    <button
                      onClick={() => {
                        audio.playClick();
                        onSelectLesson(nextLesson.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-black bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/25 transition text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Next Lesson: {nextLesson.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ) : quizCurrentQ ? (
              /* Active question */
              <div className="space-y-4 sm:space-y-5">
                {/* Progress */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className={subText}>Question {quizIndex + 1} of {quizQuestions.length}</span>
                      {quizIsReview && (
                        <span className="px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 font-bold text-[10px] flex items-center gap-1">
                          <RotateCcw className="w-3 h-3 animate-spin" />
                          Reviewing
                        </span>
                      )}
                    </div>
                    <span className="font-bold text-emerald-400">✓ {quizScore}/{quizInitialTotal}</span>
                  </div>
                  <div className="w-full h-1.5 sm:h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-orange-400 rounded-full transition-all duration-300"
                      style={{ width: `${quizInitialTotal > 0 ? Math.min(100, (quizScore / quizInitialTotal) * 100) : 0}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h4 className="font-extrabold text-sm sm:text-base leading-snug">{quizCurrentQ.question}</h4>
                  {lessonData?.memoryTip && (
                    <button
                      type="button"
                      onClick={() => setShowQuizHint(prev => !prev)}
                      className="self-start sm:self-center px-2.5 py-1 rounded-lg border border-amber-500/30 text-amber-500 hover:bg-amber-500/10 flex items-center gap-1.5 cursor-pointer transition text-xs font-bold shrink-0"
                    >
                      <Lightbulb className="w-3.5 h-3.5" />
                      <span>{showQuizHint ? 'Hide Hint' : '💡 Easy Hint'}</span>
                    </button>
                  )}
                </div>

                {/* Easy Hint Popup */}
                {showQuizHint && lessonData?.memoryTip && (
                  <div className="p-3 sm:p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-700 dark:text-amber-300 text-xs space-y-1.5 animate-in fade-in duration-200">
                    <div className="font-black flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Lesson Tip: {lessonData.memoryTip.rhyme}</span>
                    </div>
                    <p className="text-[11px] leading-relaxed opacity-95">{lessonData.memoryTip.explanation}</p>
                  </div>
                )}

                {/* Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {quizCurrentQ.options.map((opt: string, optIdx: number) => {
                    const isSelected = quizSelected === optIdx;
                    const isCorrectOpt = optIdx === quizCurrentQ.correctIndex;
                    let btnStyle = 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-[#FF5E3A] hover:bg-orange-50/30';
                    if (quizAnswered) {
                      if (isCorrectOpt) {
                        btnStyle = 'bg-emerald-500/15 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold';
                      } else if (isSelected) {
                        btnStyle = 'bg-rose-500/15 border-rose-500 text-rose-500 font-bold';
                      } else {
                        btnStyle = 'opacity-40 border-slate-200 dark:border-slate-800';
                      }
                    }
                    return (
                      <button
                        key={optIdx}
                        disabled={quizAnswered}
                        onClick={() => handleSelectQuizOption(optIdx)}
                        className={`p-3 sm:p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-between gap-2.5 sm:gap-3 ${btnStyle}`}
                      >
                        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                          <span className={`w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-mono font-black flex items-center justify-center shrink-0 transition-all ${
                            quizAnswered && isCorrectOpt
                              ? 'bg-emerald-500 text-white'
                              : quizAnswered && isSelected
                                ? 'bg-rose-500 text-white'
                                : isSelected
                                  ? 'bg-[#FF5E3A] text-white'
                                  : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                          }`}>
                            {optIdx + 1}
                          </span>
                          <span className="font-semibold text-slate-800 dark:text-slate-200 leading-snug break-words">{opt}</span>
                        </div>
                        {quizAnswered && isCorrectOpt && <Check className="w-4 h-4 text-emerald-500 shrink-0" />}
                        {quizAnswered && isSelected && !isCorrectOpt && <X className="w-4 h-4 text-rose-400 shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation + Next */}
                {quizAnswered && (
                  <div className="space-y-3">
                    {quizCurrentQ.explanation && (
                      <div className={`p-3 sm:p-3.5 rounded-xl text-xs flex items-start gap-2 ${
                        quizSelected === quizCurrentQ.correctIndex
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                          : 'bg-rose-500/10 text-rose-500 border border-rose-500/20'
                      }`}>
                        {quizSelected === quizCurrentQ.correctIndex
                          ? <Check className="w-4 h-4 shrink-0 mt-0.5" />
                          : <X className="w-4 h-4 shrink-0 mt-0.5" />}
                        <span className="break-words">{quizCurrentQ.explanation}</span>
                      </div>
                    )}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                      <div>
                        {quizSelected !== quizCurrentQ.correctIndex && (
                          <span className="text-[11px] font-bold text-amber-500 dark:text-amber-400 block text-center sm:text-left">
                            🔄 Will repeat at end until answered correctly!
                          </span>
                        )}
                      </div>
                      <button
                        onClick={handleQuizNext}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF7B5C] to-[#FF5E3A] hover:from-[#FF5E3A] hover:to-[#E84E29] text-white font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-md shadow-orange-500/25 shrink-0"
                      >
                        <span>{quizIndex + 1 < quizQuestions.length ? 'Next Question' : 'Finish Checkpoint'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>
      )}

      {/* SECTION 7: INTERACTIVE PUZZLE & PRACTICE DRILL */}
      <div className={`p-4 sm:p-8 rounded-2xl sm:rounded-3xl border ${
        theme === 'dark' 
          ? 'bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-rose-500/10 border-orange-500/30' 
          : 'bg-gradient-to-r from-orange-50 via-amber-50 to-rose-50 border-orange-200'
      } space-y-4 shadow-xs`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 font-bold text-xs">
              <Puzzle className="w-3.5 h-3.5" />
              <span>Interactive Quiz Section</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black font-heading">
              Ready for Interactive Puzzles?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Reinforce this lesson with interactive sentence builders, audio listening tests, and pair matching puzzles.
            </p>
          </div>

          <button
            onClick={() => {
              audio.playClick();
              setPracticeModalOpen(true);
            }}
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#FF5E3A] hover:bg-[#e04f2c] text-white font-bold text-sm shadow-md shadow-orange-500/20 active:scale-98 transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Launch Interactive Quiz</span>
          </button>
        </div>
      </div>

      {/* BOTTOM LESSON NAVIGATION ROW */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 pt-6 border-t border-slate-200/60 dark:border-slate-800/80">
        {prevLesson && onSelectLesson ? (
          <button
            onClick={() => {
              audio.playClick();
              onSelectLesson(prevLesson.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`w-full sm:w-auto px-4 py-2.5 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition cursor-pointer ${
              theme === 'dark' ? 'bg-[#17171C] border-slate-800 text-slate-300 hover:text-white' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-xs'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous:</span>
            <span className="line-clamp-1">{prevLesson.title}</span>
          </button>
        ) : (
          <div className="hidden sm:block" />
        )}

        {/* Center: Mark Complete Action */}
        <button
          onClick={handleToggleComplete}
          className={`w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-black transition cursor-pointer flex items-center justify-center gap-2 shadow-md ${
            isCompleted
              ? 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-emerald-500/20'
              : 'bg-[#FF5E3A] text-white hover:bg-[#E84E29] shadow-orange-500/25 active:scale-95'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>{isCompleted ? '✓ Lesson Completed' : 'Mark Lesson as Completed (+45 XP)'}</span>
        </button>

        {nextLesson && onSelectLesson && (() => {
          const isNextUnlocked = studyScheduleStore.isLessonUnlocked(nextLesson.id);
          const hasQuiz = lessonQuizQuestions && lessonQuizQuestions.length > 0;
          const canProceed = isCompleted || !hasQuiz || quizSubmitted; // must complete quiz first or already completed

          if (!canProceed) {
            // Lesson has a quiz but user hasn't submitted yet
            return (
              <div className="w-full sm:w-auto sm:ml-auto px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 text-xs font-bold flex items-center justify-center gap-2 cursor-not-allowed opacity-60">
                <span className="hidden sm:inline">Complete the quiz above to unlock</span>
                <span className="sm:hidden">Finish quiz first</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            );
          }

          if (!isNextUnlocked) {
            // Next lesson is day-locked
            return (
              <div className="w-full sm:w-auto sm:ml-auto flex flex-col items-center sm:items-end gap-1">
                <div className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold flex items-center justify-center gap-2 cursor-not-allowed">
                  <span>🔒 {nextLesson.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
                <span className="text-[11px] text-slate-400">
                  Unlocks Day {studyScheduleStore.getLessonDay(nextLesson.id)}
                </span>
              </div>
            );
          }

          return (
            <button
              onClick={() => {
                audio.playClick();
                onSelectLesson(nextLesson.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#FF5E3A] hover:bg-[#e04f2c] text-white font-bold text-xs shadow-md shadow-orange-500/20 active:scale-98 transition flex items-center justify-center gap-2 cursor-pointer sm:ml-auto"
            >
              <span className="hidden sm:inline">Next:</span>
              <span className="line-clamp-1">{nextLesson.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          );
        })()}
      </div>

      {/* PRACTICE QUIZ MODAL */}
      {practiceModalOpen && (
        <PracticeQuizModal
          isOpen={practiceModalOpen}
          onClose={() => setPracticeModalOpen(false)}
          title={`${lessonData.title} Practice Quiz`}
          subtitle="Sentence builders, audio listening & matching puzzles"
          questions={practiceQuestions}
          theme={theme}
          showFurigana={showFurigana}
          onCompleteQuiz={(xp) => {
            learnedStore.markLessonCompleted(lessonId);
            setIsCompleted(true);
            if (onCompleteLesson) {
              onCompleteLesson(lessonId, xp);
            }
          }}
        />
      )}

    </div>
  );
};

export default LessonDetailView;
