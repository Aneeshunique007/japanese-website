import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Clock, 
  ChevronRight, 
  Award, 
  Layers, 
  Sparkles,
  Lock
} from 'lucide-react';
import { api } from '../services/api';
import { studyScheduleStore, SCHEDULE_EVENT } from '../utils/studyScheduleStore';
import audio from '../utils/audio';

interface CoursesViewProps {
  initialCourseId?: string;
  onSelectLesson: (lessonId: string) => void;
  theme: 'dark' | 'light';
}

export const CoursesView: React.FC<CoursesViewProps> = ({ 
  initialCourseId = 'course-n5', 
  onSelectLesson, 
  theme 
}) => {
  const [courses, setCourses] = useState<any[]>([]);
  const [selectedCourseId, setSelectedCourseId] = useState(initialCourseId);
  const [currentCourse, setCurrentCourse] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [scheduleTargetDays, setScheduleTargetDays] = useState(() => studyScheduleStore.getTargetDays());
  const [scheduleCurrentDay, setScheduleCurrentDay] = useState(() => studyScheduleStore.getCurrentDay());

  useEffect(() => {
    const handleScheduleUpdate = () => {
      setScheduleTargetDays(studyScheduleStore.getTargetDays());
      setScheduleCurrentDay(studyScheduleStore.getCurrentDay());
    };
    window.addEventListener(SCHEDULE_EVENT, handleScheduleUpdate);
    return () => window.removeEventListener(SCHEDULE_EVENT, handleScheduleUpdate);
  }, []);

  useEffect(() => {
    async function loadCourseList() {
      try {
        const data = await api.getCourses();
        if (data.success) {
          setCourses(data.courses);
        }
      } catch (err) {
        console.error('Failed to load courses list:', err);
      }
    }
    loadCourseList();
  }, []);

  useEffect(() => {
    async function loadDetailedCourse() {
      setLoading(true);
      try {
        const data = await api.getCourseById(selectedCourseId);
        if (data.success) {
          setCurrentCourse(data.course);
        }
      } catch (err) {
        console.error('Failed to load course detail:', err);
      } finally {
        setLoading(false);
      }
    }
    loadDetailedCourse();
  }, [selectedCourseId]);

  const cardBg = theme === 'dark' ? 'bg-[#17171C] border-slate-800 text-white' : 'bg-white border-slate-200/80 text-[#1A1A1F] shadow-xs';
  const subText = theme === 'dark' ? 'text-slate-400' : 'text-slate-500';

  const isComingSoon = ['course-n3', 'course-n2', 'course-n1', 'coming-soon'].includes(selectedCourseId) || ['N3', 'N2', 'N1'].includes(currentCourse?.level);

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header & Level Track Selector */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <BookOpen className="w-6 h-6 text-[#FF5E3A]" />
            <h1 className="text-2xl font-black tracking-tight font-heading">JLPT Certification Tracks (N5 — N1)</h1>
          </div>
          <p className={`text-sm ${subText}`}>
            Explore what is studied in each JLPT level, official exam structures, Kanji & vocabulary requirements, and passing criteria.
          </p>
        </div>

        {/* Level Track Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 no-scrollbar touch-pan-x whitespace-nowrap">
          {courses.filter(c => ['N5', 'N4'].includes(c.level)).map((c) => (
            <button
              key={c.id}
              onClick={() => {
                audio.playClick();
                setSelectedCourseId(c.id);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-black transition border cursor-pointer flex items-center gap-2 shrink-0 ${
                selectedCourseId === c.id
                  ? 'bg-[#FF5E3A] border-[#FF5E3A] text-white shadow-md shadow-orange-500/30'
                  : theme === 'dark' 
                    ? 'bg-[#17171C] border-slate-800 text-slate-400 hover:text-white' 
                    : 'bg-white border-slate-200 text-slate-600 hover:text-[#FF5E3A]'
              }`}
            >
              <span>{c.level} Track</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded opacity-80">
                {c.badge}
              </span>
            </button>
          ))}

          <button
            onClick={() => {
              audio.playClick();
              setSelectedCourseId('course-n3');
            }}
            className={`px-4 py-2.5 rounded-xl text-xs font-black transition border cursor-pointer flex items-center gap-2 shrink-0 ${
              isComingSoon
                ? 'bg-[#FF5E3A] border-[#FF5E3A] text-white shadow-md shadow-orange-500/30'
                : theme === 'dark' 
                  ? 'bg-[#17171C] border-slate-800 text-slate-400 hover:text-white' 
                  : 'bg-white border-slate-200 text-slate-600 hover:text-[#FF5E3A]'
            }`}
          >
            <span>Coming Soon</span>
          </button>
        </div>
      </div>

      {/* Selected Course Overview Hero Card */}
      {!isComingSoon && currentCourse && (
        <div className={`p-5 sm:p-8 rounded-2xl sm:rounded-3xl border ${cardBg} shadow-xs space-y-5 sm:space-y-6 relative overflow-hidden`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-black bg-orange-500/15 text-[#FF5E3A] border border-orange-500/30">
                JLPT {currentCourse.level} • {currentCourse.badge} Level
              </span>
              <span className="text-sm font-jp font-bold text-slate-400">
                {currentCourse.japaneseTitle}
              </span>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 text-xs font-bold text-slate-400 flex-wrap">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#FF5E3A]" />
                <span>{currentCourse.estimatedHours} Hours Required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#FF5E3A]" />
                <span>{currentCourse.lessonsCount} Master Lessons</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-3xl font-black font-heading tracking-tight mb-2">
              {currentCourse.title}
            </h2>
            <p className={`text-xs sm:text-sm ${subText} leading-relaxed max-w-4xl`}>
              {currentCourse.description}
            </p>
          </div>

          {/* 4 Core JLPT Requirement Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-1 sm:pt-2">
            <div className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border ${theme === 'dark' ? 'bg-slate-900/60 border-slate-800' : 'bg-orange-50/40 border-orange-100'} space-y-1`}>
              <div className="text-[10px] sm:text-xs font-bold uppercase text-slate-400 font-mono flex items-center gap-1">
                <span>🈁 Kanji Count</span>
              </div>
              <div className="text-lg sm:text-xl font-black font-heading text-[#FF5E3A]">
                {currentCourse.kanjiCount ? `${currentCourse.kanjiCount} Kanji` : '100+ Kanji'}
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-400">Must read & write in context</div>
            </div>

            <div className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border ${theme === 'dark' ? 'bg-slate-900/60 border-slate-800' : 'bg-orange-50/40 border-orange-100'} space-y-1`}>
              <div className="text-[10px] sm:text-xs font-bold uppercase text-slate-400 font-mono flex items-center gap-1">
                <span>📖 Vocabulary</span>
              </div>
              <div className="text-lg sm:text-xl font-black font-heading text-[#FF5E3A]">
                {currentCourse.vocabCount ? `${currentCourse.vocabCount} Words` : '800+ Words'}
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-400">Core everyday vocabulary</div>
            </div>

            <div className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border ${theme === 'dark' ? 'bg-slate-900/60 border-slate-800' : 'bg-orange-50/40 border-orange-100'} space-y-1`}>
              <div className="text-[10px] sm:text-xs font-bold uppercase text-slate-400 font-mono flex items-center gap-1">
                <span>📐 Grammar Points</span>
              </div>
              <div className="text-lg sm:text-xl font-black font-heading text-[#FF5E3A]">
                {currentCourse.grammarCount ? `${currentCourse.grammarCount} Patterns` : '65 Patterns'}
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-400">Sentence structures & particles</div>
            </div>

            <div className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border ${theme === 'dark' ? 'bg-slate-900/60 border-slate-800' : 'bg-orange-50/40 border-orange-100'} space-y-1`}>
              <div className="text-[10px] sm:text-xs font-bold uppercase text-slate-400 font-mono flex items-center gap-1">
                <span>🎯 Passing Score</span>
              </div>
              <div className="text-sm sm:text-base font-black font-heading text-emerald-500">
                {currentCourse.passingScore ? currentCourse.passingScore.split('•')[0] : '80 / 180 (44%)'}
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 truncate">
                {currentCourse.passingScore && currentCourse.passingScore.includes('•') 
                  ? currentCourse.passingScore.split('•')[1] 
                  : 'Sectional minimums required'}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Official JLPT Exam Sections Breakdown */}
      {!isComingSoon && currentCourse && currentCourse.examSections && currentCourse.examSections.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#FF5E3A]" />
            <h2 className="text-xl font-black font-heading">
              Official JLPT {currentCourse.level} Exam Breakdown & Time Limits
            </h2>
          </div>

          <div className={`p-6 rounded-3xl border ${cardBg} shadow-xs space-y-4`}>
            <p className={`text-xs ${subText}`}>
              The JLPT {currentCourse.level} examination consists of {currentCourse.examSections.length} testing sections. To pass, you must meet both the overall passing score and the minimum benchmark for each section.
            </p>

            <div className="overflow-x-auto no-scrollbar touch-pan-x">
              <table className="w-full text-left text-sm min-w-[560px]">
                <thead className={`border-b text-xs font-bold uppercase ${
                  theme === 'dark' ? 'bg-[#101014] border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-500'
                }`}>
                  <tr>
                    <th className="px-5 py-3.5">Test Section</th>
                    <th className="px-5 py-3.5">Japanese Title</th>
                    <th className="px-5 py-3.5">Duration</th>
                    <th className="px-5 py-3.5">Max Score</th>
                    <th className="px-5 py-3.5">Format & Focus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {currentCourse.examSections.map((sec: any, idx: number) => (
                    <tr key={idx} className="hover:bg-orange-50/20 dark:hover:bg-slate-800/40 transition">
                      <td className="px-5 py-4 font-extrabold text-slate-900 dark:text-white">
                        {sec.sectionName}
                      </td>
                      <td className="px-5 py-4 font-jp text-sm text-[#FF5E3A] font-bold">
                        {sec.sectionNameJp}
                      </td>
                      <td className="px-5 py-4 font-mono font-bold text-xs">
                        <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          ⏱️ {sec.durationMinutes} min
                        </span>
                      </td>
                      <td className="px-5 py-4 font-mono font-bold text-xs text-emerald-600 dark:text-emerald-400">
                        {sec.maxScore} / 180 pts
                      </td>
                      <td className="px-5 py-4 text-xs text-slate-500 dark:text-slate-400 max-w-xs">
                        {sec.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Modules & Lessons Curriculum */}
      {isComingSoon ? (
        <div className={`py-16 px-6 rounded-3xl border text-center ${cardBg} max-w-2xl mx-auto shadow-sm space-y-5 animate-fade-in`}>
          <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-[#FF5E3A] flex items-center justify-center mx-auto shadow-inner">
            <Clock className="w-8 h-8 animate-pulse" />
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-[#FF5E3A] text-xs font-black font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>JLPT Tracks Under Development</span>
            </div>
            <h2 className="text-2xl font-black tracking-tight font-heading">
              JLPT N3, N2 & N1 Tracks Coming Soon
            </h2>
            <p className={`text-xs sm:text-sm max-w-md mx-auto leading-relaxed ${subText}`}>
              Our academic team is currently curating the authentic lesson modules, grammar explanations, and interactive voice drills for higher JLPT tracks. Please study our complete JLPT N5 and N4 tracks in the meantime!
            </p>
          </div>

          <div className="pt-2 flex items-center justify-center gap-3 flex-wrap">
            <button
              onClick={() => {
                audio.playClick();
                setSelectedCourseId('course-n5');
              }}
              className="px-5 py-2.5 rounded-xl bg-[#FF5E3A] text-white hover:bg-[#E84E29] text-xs font-black transition flex items-center gap-2 cursor-pointer shadow-md shadow-orange-500/20"
            >
              <BookOpen className="w-4 h-4 text-white" />
              <span>Study JLPT N5 Track</span>
            </button>
            <button
              onClick={() => {
                audio.playClick();
                setSelectedCourseId('course-n4');
              }}
              className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-orange-500/20 text-xs font-black transition flex items-center gap-2 text-slate-700 dark:text-slate-200 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#FF5E3A]" />
              <span>Study JLPT N4 Track</span>
            </button>
          </div>
        </div>
      ) : loading ? (
        <div className="py-16 text-center text-slate-400 text-sm">Loading course curriculum...</div>
      ) : currentCourse ? (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FF5E3A]" />
              <h2 className="text-xl font-black font-heading">
                Curriculum Modules for JLPT {currentCourse.level}
              </h2>
            </div>
            {currentCourse.level === 'N5' && (
              <div className={`px-3.5 py-1.5 rounded-xl border flex items-center gap-2 text-xs font-medium ${
                theme === 'dark' ? 'bg-slate-900/60 border-slate-800 text-slate-300' : 'bg-orange-50/60 border-orange-200/60 text-slate-700'
              }`}>
                <span className="px-2 py-0.5 rounded font-mono font-black bg-[#FF5E3A] text-white text-[11px] shrink-0">
                  Day {scheduleCurrentDay} / {scheduleTargetDays === 'ALL' ? '60 (All Access)' : scheduleTargetDays}
                </span>
                <span className="text-slate-500 dark:text-slate-400">
                  {scheduleTargetDays === 'ALL' ? 'All lessons unlocked' : `Lessons unlock across your ${scheduleTargetDays}-day schedule`}
                </span>
              </div>
            )}
          </div>

          {currentCourse.modules.map((mod: any) => (
            <div key={mod.id} className="space-y-4">
              <div className="border-b border-slate-200/80 dark:border-slate-800/80 pb-2">
                <span className="text-xs font-black text-[#FF5E3A] uppercase font-mono">Module {mod.moduleNumber}</span>
                <h3 className="text-lg font-black font-heading">{mod.title}</h3>
                <p className={`text-xs ${subText}`}>{mod.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
                {mod.lessons.map((lesson: any) => {
                  const isN5 = currentCourse.level === 'N5';
                  const lessonDay = isN5 ? studyScheduleStore.getLessonDay(lesson.id) : 1;
                  const isUnlocked = isN5 ? studyScheduleStore.isLessonUnlocked(lesson.id) : true;
                  const isToday = isN5 ? studyScheduleStore.isLessonToday(lesson.id) : false;

                  return (
                    <div
                      key={lesson.id}
                      onClick={() => {
                        if (!isUnlocked) {
                          audio.playClick();
                          // Show a brief locked toast
                          const el = document.getElementById(`lesson-lock-toast-${lesson.id}`);
                          if (el) { el.classList.remove('opacity-0'); setTimeout(() => el.classList.add('opacity-0'), 2000); }
                          return;
                        }
                        audio.playClick();
                        onSelectLesson(lesson.id);
                      }}
                      className={`p-4 sm:p-6 rounded-2xl border relative ${
                        !isUnlocked
                          ? 'border-slate-200/60 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-900/30 opacity-60 hover:opacity-80 hover:border-amber-500/40 cursor-not-allowed'
                          : `${cardBg} hover:border-[#FF5E3A] cursor-pointer hover:shadow-lg`
                      } transition flex items-center justify-between group shadow-xs`}
                    >
                      {/* Lock toast */}
                      {!isUnlocked && (
                        <div
                          id={`lesson-lock-toast-${lesson.id}`}
                          className="opacity-0 transition-opacity duration-300 absolute top-2 right-2 px-3 py-1.5 rounded-xl bg-amber-500 text-white text-[11px] font-black shadow-lg pointer-events-none z-10"
                        >
                          🔒 Unlocks Day {lessonDay}
                        </div>
                      )}

                      <div className="space-y-1.5 flex-1 pr-3">
                        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                          {isN5 && (
                            <span className={`text-[10px] font-mono font-black px-2 py-0.5 rounded flex items-center gap-1 ${
                              !isUnlocked 
                                ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                                : isToday
                                ? 'bg-[#FF5E3A] text-white'
                                : 'bg-orange-500/10 text-[#FF5E3A]'
                            }`}>
                              {!isUnlocked && <Lock className="w-2.5 h-2.5" />}
                              <span>{isToday ? `Day ${lessonDay} • Today's Lesson` : isUnlocked ? `Day ${lessonDay}` : `Unlocks Day ${lessonDay}`}</span>
                            </span>
                          )}
                          <span className="text-[10px] uppercase font-mono font-black text-slate-400">
                            ⏱️ {lesson.readTimeMinutes} min study
                          </span>
                          {lesson.letterSections && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-500/10 text-[#FF5E3A]">
                              Vowels & Syllabary
                            </span>
                          )}
                          {lesson.blankFillExercises && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-500">
                              Blank Filling
                            </span>
                          )}
                        </div>
                      <h4 className="font-extrabold text-sm sm:text-base group-hover:text-[#FF5E3A] transition-colors">
                        {lesson.title}
                      </h4>
                      <span className="text-xs font-jp text-slate-400 block">{lesson.japaneseTitle}</span>
                      <p className={`text-xs ${subText} line-clamp-2 mt-1`}>
                        {lesson.summary}
                      </p>
                    </div>

                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl flex items-center justify-center transition shrink-0 shadow-xs ${
                      !isUnlocked
                        ? 'bg-slate-200/60 dark:bg-slate-800 text-slate-400'
                        : 'bg-orange-50 dark:bg-slate-800 text-[#FF5E3A] group-hover:bg-[#FF5E3A] group-hover:text-white'
                    }`}>
                      {!isUnlocked
                        ? <Lock className="w-4 h-4" />
                        : <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />}
                    </div>
                  </div>
                );
              })}
            </div>
            </div>
          ))}
        </div>
      ) : null}

    </div>
  );
};

export default CoursesView;
