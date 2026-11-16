import React, { useState, useEffect, useMemo } from 'react';
import { 
  BookOpen, 
  Clock, 
  ChevronRight, 
  Award, 
  Layers, 
  Sparkles,
  CheckCircle2,
  Play,
  Check,
  BookMarked,
  BookA,
  Target
} from 'lucide-react';
import { api } from '../services/api';
import audio from '../utils/audio';
import { learnedStore } from '../utils/learnedStore';

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
  const [completedLessonSet, setCompletedLessonSet] = useState<Set<string>>(new Set());

  // Sync with learned updates
  useEffect(() => {
    const updateCompletedLessons = () => {
      if (!currentCourse?.modules) return;
      const allLessons: any[] = currentCourse.modules.flatMap((m: any) => m.lessons || []);
      const completed = new Set<string>();
      allLessons.forEach((l: any) => {
        if (learnedStore.isLessonCompleted(l.id)) {
          completed.add(l.id);
        }
      });
      setCompletedLessonSet(completed);
    };

    updateCompletedLessons();
    window.addEventListener('anilearn_learned_update', updateCompletedLessons);
    window.addEventListener('anilearn_user_update', updateCompletedLessons);
    return () => {
      window.removeEventListener('anilearn_learned_update', updateCompletedLessons);
      window.removeEventListener('anilearn_user_update', updateCompletedLessons);
    };
  }, [currentCourse]);

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

  // Calculate course completion progress
  const allCourseLessons = useMemo(() => {
    if (!currentCourse?.modules) return [];
    return currentCourse.modules.flatMap((m: any) => m.lessons || []);
  }, [currentCourse]);

  const courseCompletedCount = allCourseLessons.filter((l: any) => completedLessonSet.has(l.id)).length;
  const courseCompletionPercent = Math.round((courseCompletedCount / (allCourseLessons.length || 1)) * 100);

  // Find next uncompleted lesson to guide beginner
  const nextLessonToStudy = useMemo(() => {
    return allCourseLessons.find((l: any) => !completedLessonSet.has(l.id)) || allCourseLessons[0];
  }, [allCourseLessons, completedLessonSet]);

  return (
    <div className="space-y-8 animate-fade-in pb-16">
      
      {/* Header & Level Track Selector */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <BookOpen className="w-6 h-6 text-[#FF5E3A]" />
            <h1 className="text-2xl font-black tracking-tight font-heading">JLPT Course Progression Tracks</h1>
          </div>
          <p className={`text-sm ${subText}`}>
            Structured curriculums designed to take you from zero Japanese to official fluency certification.
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
            <span>Coming Soon (N3-N1)</span>
          </button>
        </div>
      </div>

      {/* Beginner Explanation Banner */}
      <div className={`p-4 rounded-2xl border flex items-start gap-3 text-xs leading-relaxed ${
        theme === 'dark' ? 'bg-orange-950/15 border-orange-500/20 text-orange-200' : 'bg-orange-50/70 border-orange-200/60 text-slate-700'
      }`}>
        <div className="w-8 h-8 rounded-xl bg-orange-500/10 text-[#FF5E3A] flex items-center justify-center shrink-0">
          <Sparkles className="w-4 h-4" />
        </div>
        <div>
          <span className="font-bold text-slate-900 dark:text-white mr-1.5">Beginner Guide: What is JLPT?</span>
          <span>
            The <strong>Japanese-Language Proficiency Test (JLPT)</strong> is the official worldwide benchmark for Japanese learners. <strong>Level N5</strong> is the recommended starting foundation, focusing on basic sentence grammar, everyday vocabulary, and essential reading.
          </span>
        </div>
      </div>

      {/* Selected Course Overview Hero Card */}
      {!isComingSoon && currentCourse && (
        <div className={`p-5 sm:p-8 rounded-3xl border ${cardBg} shadow-xs space-y-6 relative overflow-hidden`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-black bg-orange-500/15 text-[#FF5E3A] border border-orange-500/30">
                JLPT {currentCourse.level} • {currentCourse.badge} Track
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

          <div className="space-y-2">
            <h2 className="text-xl sm:text-3xl font-black font-heading tracking-tight">
              {currentCourse.title}
            </h2>
            <p className={`text-xs sm:text-sm ${subText} leading-relaxed max-w-4xl`}>
              {currentCourse.description}
            </p>
          </div>

          {/* Progress & Next Lesson Action Bar */}
          <div className={`p-4 sm:p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
            theme === 'dark' ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200/80'
          }`}>
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center justify-between text-xs font-mono font-bold pr-4">
                <span className="text-slate-600 dark:text-slate-300">
                  Track Mastery: {courseCompletedCount} of {allCourseLessons.length} Lessons Completed
                </span>
                <span className="text-emerald-500">{courseCompletionPercent}%</span>
              </div>
              <div className="w-full max-w-md h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 transition-all duration-300"
                  style={{ width: `${courseCompletionPercent}%` }}
                />
              </div>
            </div>

            {nextLessonToStudy && (
              <button
                onClick={() => {
                  audio.playClick();
                  onSelectLesson(nextLessonToStudy.id);
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF7B5C] to-[#FF5E3A] hover:from-[#FF5E3A] hover:to-[#E84E29] text-white text-xs font-black transition flex items-center gap-2 shadow-md shadow-orange-500/20 shrink-0 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Continue: {nextLessonToStudy.title}</span>
              </button>
            )}
          </div>

          {/* 4 Core JLPT Requirement Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-1">
            <div className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border ${theme === 'dark' ? 'bg-slate-900/60 border-slate-800' : 'bg-orange-50/40 border-orange-100'} space-y-1`}>
              <div className="text-[10px] sm:text-xs font-bold uppercase text-slate-400 font-mono flex items-center gap-1.5">
                <BookMarked className="w-3.5 h-3.5 text-slate-400" />
                <span>Kanji Count</span>
              </div>
              <div className="text-lg sm:text-xl font-black font-heading text-[#FF5E3A]">
                {currentCourse.kanjiCount ? `${currentCourse.kanjiCount} Kanji` : '100+ Kanji'}
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-400">Must read & write in context</div>
            </div>

            <div className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border ${theme === 'dark' ? 'bg-slate-900/60 border-slate-800' : 'bg-orange-50/40 border-orange-100'} space-y-1`}>
              <div className="text-[10px] sm:text-xs font-bold uppercase text-slate-400 font-mono flex items-center gap-1.5">
                <BookA className="w-3.5 h-3.5 text-slate-400" />
                <span>Vocabulary</span>
              </div>
              <div className="text-lg sm:text-xl font-black font-heading text-[#FF5E3A]">
                {currentCourse.vocabCount ? `${currentCourse.vocabCount} Words` : '800+ Words'}
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-400">Core everyday vocabulary</div>
            </div>

            <div className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border ${theme === 'dark' ? 'bg-slate-900/60 border-slate-800' : 'bg-orange-50/40 border-orange-100'} space-y-1`}>
              <div className="text-[10px] sm:text-xs font-bold uppercase text-slate-400 font-mono flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-slate-400" />
                <span>Grammar Points</span>
              </div>
              <div className="text-lg sm:text-xl font-black font-heading text-[#FF5E3A]">
                {currentCourse.grammarCount ? `${currentCourse.grammarCount} Patterns` : '65 Patterns'}
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-400">Sentence structures & particles</div>
            </div>

            <div className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border ${theme === 'dark' ? 'bg-slate-900/60 border-slate-800' : 'bg-orange-50/40 border-orange-100'} space-y-1`}>
              <div className="text-[10px] sm:text-xs font-bold uppercase text-slate-400 font-mono flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-slate-400" />
                <span>Passing Score</span>
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
                  100% Unlocked
                </span>
                <span className="text-slate-500 dark:text-slate-400">
                  All lessons available on demand
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
                  const isCompleted = completedLessonSet.has(lesson.id);

                  return (
                    <div
                      key={lesson.id}
                      onClick={() => {
                        audio.playClick();
                        onSelectLesson(lesson.id);
                      }}
                      className={`p-4 sm:p-6 rounded-2xl border cursor-pointer hover:shadow-lg transition flex items-center justify-between group shadow-xs ${
                        isCompleted
                          ? 'border-emerald-500/80 bg-emerald-50/40 dark:bg-emerald-950/20 text-slate-900 dark:text-white'
                          : `${cardBg} hover:border-[#FF5E3A]`
                      }`}
                    >

                      <div className="space-y-1.5 flex-1 pr-3">
                        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                          <span className="text-[10px] uppercase font-mono font-black text-slate-400">
                            ⏱️ {lesson.readTimeMinutes} min study
                          </span>
                          {isCompleted ? (
                            <span className="text-[10px] font-black px-2 py-0.5 rounded bg-emerald-500 text-white flex items-center gap-1">
                              <Check className="w-3 h-3 stroke-[3]" />
                              <span>Completed</span>
                            </span>
                          ) : (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-500/10 text-[#FF5E3A]">
                              Ready to Learn
                            </span>
                          )}
                          {lesson.letterSections && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-500/10 text-[#FF5E3A]">
                              Syllabary
                            </span>
                          )}
                          {lesson.blankFillExercises && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-500">
                              Exercises
                            </span>
                          )}
                        </div>
                      <h4 className={`font-extrabold text-sm sm:text-base transition-colors ${
                        isCompleted ? 'text-emerald-950 dark:text-emerald-100' : 'group-hover:text-[#FF5E3A]'
                      }`}>
                        {lesson.title}
                      </h4>
                      <span className="text-xs font-jp text-slate-400 block">{lesson.japaneseTitle}</span>
                      <p className={`text-xs ${subText} line-clamp-2 mt-1`}>
                        {lesson.summary}
                      </p>
                    </div>

                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl flex items-center justify-center transition shrink-0 shadow-xs ${
                      isCompleted
                        ? 'bg-emerald-500 text-white'
                        : 'bg-orange-50 dark:bg-slate-800 text-[#FF5E3A] group-hover:bg-[#FF5E3A] group-hover:text-white'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                      )}
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
