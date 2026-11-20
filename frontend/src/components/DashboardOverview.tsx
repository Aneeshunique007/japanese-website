import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Clock, 
  BookOpen, 
  Layers,
  Sparkles,
  Mic,
  Compass,
  CheckCircle2,
  User,
  Award,
  Trophy,
  Flame,
  Target
} from 'lucide-react';
import audio from '../utils/audio';
import { api, UserProfile } from '../services/api';
import { learnedStore } from '../utils/learnedStore';
import { 
  calculateRealLeagueRank 
} from '../utils/activityTracker';

interface DashboardOverviewProps {
  onNavigate: (tab: string, extraId?: string) => void;
  theme: 'dark' | 'light';
  currentUser?: UserProfile | null;
  onGainXp?: (xp: number) => void;
  leaderboardList?: any[];
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({ 
  onNavigate, 
  theme, 
  currentUser, 
  leaderboardList = [] 
}) => {
  const [courses, setCourses] = useState<any[]>([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  const cardBg = theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200/80 shadow-xs';
  const subText = theme === 'dark' ? 'text-slate-400' : 'text-slate-500';

  useEffect(() => {
    async function loadData() {
      try {
        const res = await api.getCourses();
        if (res.success && res.courses) {
          setCourses(res.courses);
        }
      } catch (err) {
        console.error('Failed to load courses:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const [, setLessonUpdateTick] = useState(0);

  useEffect(() => {
    const onUpdate = () => setLessonUpdateTick(t => t + 1);
    window.addEventListener('anilearn_learned_update', onUpdate);
    window.addEventListener('anilearn_user_update', onUpdate);
    return () => {
      window.removeEventListener('anilearn_learned_update', onUpdate);
      window.removeEventListener('anilearn_user_update', onUpdate);
    };
  }, []);

  // Individual Student Progress from currently logged-in user + local learnedStore
  const userLessons = currentUser?.completedLessons || [];
  const localLessons = learnedStore.getCompletedLessonsList();
  const completedLessonIds: string[] = Array.from(new Set([...userLessons, ...localLessons]));

  const availableCourses = courses.filter(c => ['N5', 'N4', 'N3'].includes(c.level));

  const continueLearning = availableCourses.slice(0, 2).map((course, idx) => {
    const total = course.lessonsCount || 12;
    const completedCount = completedLessonIds.filter((id: string) => id.includes(course.id.replace('course-', ''))).length;
    const progressPercent = Math.min(100, Math.round((completedCount / total) * 100));
    const estimatedHours = course.estimatedHours || 8;
    const remainingHours = Math.max(0.5, Math.round((1 - (progressPercent / 100)) * estimatedHours * 10) / 10);

    return {
      id: course.id === 'course-n5' ? 'lesson-n5-1-1' : 'lesson-n4-1-1',
      courseId: course.id,
      title: course.title,
      category: `JLPT ${course.level} • ${course.badge || 'FOUNDATIONS'}`,
      iconText: idx === 0 ? '文' : '話',
      iconColor: idx === 0 ? 'bg-orange-500/10 text-[#FF5E3A]' : 'bg-amber-500/10 text-amber-500',
      progress: progressPercent,
      completedLessons: completedCount,
      totalLessons: total,
      timeLeft: `${remainingHours} hours left`
    };
  });

  const filteredCourses = availableCourses.filter(c => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'COMING_SOON') return false;
    return c.level.toLowerCase() === activeFilter.toLowerCase().replace('jlpt ', '');
  });

  const userXp = currentUser?.xp || 0;
  const userStreak = currentUser?.streak || 1;
  const userName = currentUser?.name || 'Student';
  const userTitle = currentUser?.title || `JLPT ${currentUser?.targetLevel || 'N5'} Learner`;
  const rawAvatar = currentUser?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80';
  const isImageAvatar = Boolean(rawAvatar && (rawAvatar.startsWith('http://') || rawAvatar.startsWith('https://') || rawAvatar.startsWith('/')));

  const completedTotal = completedLessonIds.length;
  const monthlyGoalCount = Math.max(1, currentUser?.goalsInMonth || (completedTotal > 0 ? completedTotal : 1));
  const leagueRank = calculateRealLeagueRank(userXp, leaderboardList, currentUser?.id);

  const learnedKanaCount = learnedStore.getLearnedKanaList().length;
  const learnedWordsCount = learnedStore.getLearnedWordsList().length;

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in overflow-x-hidden">
      
      {/* SECTION 0: LEARNER PROFILE */}
      <div className={`p-4 sm:p-6 rounded-2xl sm:rounded-3xl border ${cardBg}`}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
          {/* User Identity & Avatar */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5 sm:gap-4 text-center sm:text-left">
            <div className="relative shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ring-4 ring-[#FF5E3A] shadow-md overflow-hidden flex items-center justify-center bg-orange-500/10 text-xl font-bold text-[#FF5E3A]">
                {isImageAvatar ? (
                  <img 
                    className="w-full h-full object-cover" 
                    src={rawAvatar} 
                    alt={userName} 
                  />
                ) : (
                  <span>{userName ? userName.charAt(0).toUpperCase() : <User className="w-8 h-8 text-[#FF5E3A]" />}</span>
                )}
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-[#17171C]"></span>
            </div>

            <div className="space-y-1 min-w-0">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h3 className="font-extrabold text-base sm:text-lg font-heading truncate">{userName}</h3>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-orange-500/10 text-[#FF5E3A] border border-orange-500/20 shrink-0">
                  JLPT {currentUser?.targetLevel || 'N5'}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium truncate">{userTitle}</p>
              <div className="inline-flex items-center gap-2 pt-0.5 text-xs font-bold font-mono">
                <span className="flex items-center gap-1 text-amber-500">
                  <Award className="w-3.5 h-3.5" />
                  <span>{userXp} Pts</span>
                </span>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <span className="flex items-center gap-1 text-indigo-500">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>#{leagueRank} Rank</span>
                </span>
              </div>
            </div>
          </div>

          {/* 3 Stats Mini-Row */}
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center">
            <div className={`py-2 px-3 sm:px-4 rounded-xl border text-center min-w-[76px] ${theme === 'dark' ? 'bg-[#121217] border-slate-800' : 'bg-slate-50 border-slate-200/60'}`}>
              <div className="text-sm font-black text-[#FF5E3A] flex items-center justify-center gap-1">
                <Flame className="w-3.5 h-3.5 text-[#FF5E3A]" />
                <span>{userStreak}</span>
              </div>
              <div className="text-[10px] text-slate-400 font-semibold">Streak</div>
            </div>
            <div className={`py-2 px-3 sm:px-4 rounded-xl border text-center min-w-[76px] ${theme === 'dark' ? 'bg-[#121217] border-slate-800' : 'bg-slate-50 border-slate-200/60'}`}>
              <div className="text-sm font-black text-amber-500 flex items-center justify-center gap-1">
                <Target className="w-3.5 h-3.5 text-amber-500" />
                <span>{String(monthlyGoalCount).padStart(2, '0')}</span>
              </div>
              <div className="text-[10px] text-slate-400 font-semibold">Goals</div>
            </div>
            <div className={`py-2 px-3 sm:px-4 rounded-xl border text-center min-w-[76px] ${theme === 'dark' ? 'bg-[#121217] border-slate-800' : 'bg-slate-50 border-slate-200/60'}`}>
              <div className="text-sm font-black text-indigo-500 flex items-center justify-center gap-1">
                <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                <span>{completedTotal}</span>
              </div>
              <div className="text-[10px] text-slate-400 font-semibold">Lessons</div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: BEGINNER PATHWAY - WHERE TO START */}
      <div className={`p-5 sm:p-7 rounded-2xl sm:rounded-3xl border ${cardBg} space-y-4`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#FF5E3A]/10 text-[#FF5E3A] border border-orange-500/20 flex items-center gap-1">
                <Compass className="w-3 h-3 text-[#FF5E3A]" />
                <span>Beginner Pathway</span>
              </span>
              <h2 className="text-lg sm:text-xl font-extrabold font-heading tracking-tight">
                Where Should I Start?
              </h2>
            </div>
            <p className={`text-xs ${subText} mt-1`}>
              New to Japanese? Follow this simple sequence to start reading, understanding, and speaking with zero confusion.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 pt-1">
          {/* STEP 1: HIRAGANA */}
          <div 
            onClick={() => {
              audio.playClick();
              onNavigate('hiragana');
            }}
            className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer relative group overflow-hidden ${
              learnedKanaCount >= 46
                ? 'bg-emerald-500/5 border-emerald-500/30 hover:border-emerald-500/60'
                : 'bg-orange-500/5 hover:bg-orange-500/10 border-orange-500/40 shadow-xs ring-1 ring-orange-500/20'
            }`}
          >
            <div className="flex items-start justify-between">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#FF5E3A] text-white flex items-center justify-center font-black text-xs shadow-xs">
                01
              </span>
              {learnedKanaCount >= 46 ? (
                <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Mastered ({learnedKanaCount})</span>
                </span>
              ) : (
                <span className="text-[10px] font-bold text-[#FF5E3A] bg-orange-500/15 border border-orange-500/30 px-2 py-0.5 rounded-full animate-pulse">
                  Start Here
                </span>
              )}
            </div>
            <h3 className="font-extrabold text-sm sm:text-base mt-3 group-hover:text-[#FF5E3A] transition-colors flex items-center gap-1.5">
              <span>1. The Alphabet (Kana)</span>
            </h3>
            <p className={`text-xs ${subText} mt-1 line-clamp-2`}>
              Master the 46 foundation characters (あ い う え お). Once you know Kana, you can pronounce any Japanese word.
            </p>
            <div className="mt-3.5 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-[#FF5E3A]">
              <span>{learnedKanaCount} / 46 Basic Kana</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* STEP 2: ESSENTIAL VOCABULARY */}
          <div 
            onClick={() => {
              audio.playClick();
              onNavigate('words');
            }}
            className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer relative group overflow-hidden ${
              learnedWordsCount >= 20
                ? 'bg-emerald-500/5 border-emerald-500/30 hover:border-emerald-500/60'
                : 'hover:border-indigo-400 border-slate-200/80 dark:border-slate-800'
            }`}
          >
            <div className="flex items-start justify-between">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-indigo-500 text-white flex items-center justify-center font-black text-xs shadow-xs">
                02
              </span>
              {learnedWordsCount >= 20 ? (
                <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{learnedWordsCount} Words</span>
                </span>
              ) : (
                <span className="text-[10px] font-bold text-indigo-500 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full">
                  Step 2
                </span>
              )}
            </div>
            <h3 className="font-extrabold text-sm sm:text-base mt-3 group-hover:text-indigo-500 transition-colors flex items-center gap-1.5">
              <span>2. Everyday Words</span>
            </h3>
            <p className={`text-xs ${subText} mt-1 line-clamp-2`}>
              Learn polite greetings (Konnichiwa, Arigatou), food, numbers, and survival vocabulary for daily life.
            </p>
            <div className="mt-3.5 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-indigo-500">
              <span>{learnedWordsCount} Words Learned</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* STEP 3: FIRST LESSON & SPEAKING */}
          <div 
            onClick={() => {
              audio.playClick();
              onNavigate('lessons');
            }}
            className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer relative group overflow-hidden ${
              completedTotal >= 1
                ? 'bg-emerald-500/5 border-emerald-500/30 hover:border-emerald-500/60'
                : 'hover:border-amber-400 border-slate-200/80 dark:border-slate-800'
            }`}
          >
            <div className="flex items-start justify-between">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black text-xs shadow-xs">
                03
              </span>
              {completedTotal >= 1 ? (
                <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{completedTotal} Completed</span>
                </span>
              ) : (
                <span className="text-[10px] font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
                  Step 3
                </span>
              )}
            </div>
            <h3 className="font-extrabold text-sm sm:text-base mt-3 group-hover:text-amber-500 transition-colors flex items-center gap-1.5">
              <span>3. First Sentences & Dialogue</span>
            </h3>
            <p className={`text-xs ${subText} mt-1 line-clamp-2`}>
              Put words together! Introduce yourself, understand "wa" vs "desu", and practice anime dialogue with audio.
            </p>
            <div className="mt-3.5 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-amber-500">
              <span>Lesson 1-1 Ready</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
      


      {/* NIKKI'S JAPANESE CLASSROOM SPOTLIGHT */}
      <div 
        onClick={() => {
          audio.playClick();
          onNavigate('nikki');
        }}
        className={`p-4 sm:p-6 rounded-2xl sm:rounded-3xl border transition cursor-pointer group relative overflow-hidden ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-orange-950/30 via-[#17171C] to-[#121217] border-orange-500/30 hover:border-orange-500/60'
            : 'bg-gradient-to-r from-orange-50/80 via-white to-amber-50/50 border-orange-200 hover:border-orange-300 shadow-sm'
        }`}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#FF5E3A] text-white">
                Special Track
              </span>
              <span className="text-xs font-bold font-jp text-[#FF5E3A]">
                ニッキの日記 · Classes 404–464
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-black font-heading text-slate-900 dark:text-white group-hover:text-[#FF5E3A] transition">
              Nikki's Japanese Classroom · 7-Day Curriculum
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl">
              Pronunciation secrets, native dialogues, Yuki & Aki story series, and the complete 70-question review exam.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 pt-1 sm:pt-0">
            <span className="text-xs font-bold text-[#FF5E3A] group-hover:translate-x-1 transition-transform flex items-center gap-1">
              <span>Explore Nikki Learnings</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>

      {/* JAPANESE SPEAKING PRACTICE SPOTLIGHT */}
      <div 
        onClick={() => {
          audio.playClick();
          onNavigate('speaking');
        }}
        className={`p-4 sm:p-6 rounded-2xl sm:rounded-3xl border transition cursor-pointer group relative overflow-hidden ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-emerald-950/30 via-[#17171C] to-[#121217] border-emerald-500/30 hover:border-emerald-500/60'
            : 'bg-gradient-to-r from-emerald-50/80 via-white to-teal-50/50 border-emerald-200 hover:border-emerald-300 shadow-sm'
        }`}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500 text-white flex items-center gap-1">
                <Mic className="w-3 h-3 animate-pulse" />
                <span>AI Voice Lab</span>
              </span>
              <span className="text-xs font-bold font-jp text-emerald-500">
                発音練習 · Speaking Practice
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-black font-heading text-slate-900 dark:text-white group-hover:text-emerald-500 transition">
              Particle Speaking Mastery & Self-Intro Builder
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl">
              Speak 50 sentences per particle (Easy to Hard), get instant voice recognition feedback, and practice your personalized self-introduction (Adami Innovations & Aneesh).
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 pt-1 sm:pt-0">
            <span className="text-xs font-bold text-emerald-500 group-hover:translate-x-1 transition-transform flex items-center gap-1">
              <span>Start Speaking</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>

      {/* SECTION 2: CONTINUE LEARNING */}
      <div>
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h2 className="text-lg sm:text-xl font-extrabold font-heading">Continue Learning</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
          {continueLearning.map((item) => (
            <div
              key={item.id}
              className={`p-4 sm:p-5 rounded-2xl border ${cardBg} transition hover:border-[#FF5E3A]/40 shadow-xs flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-start gap-3 sm:gap-3.5 mb-3">
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl ${item.iconColor} flex items-center justify-center font-bold text-base sm:text-lg font-jp shrink-0 shadow-xs`}>
                    {item.iconText}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-extrabold text-sm sm:text-base leading-tight mb-0.5 truncate">{item.title}</h3>
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 font-mono uppercase tracking-wide truncate block">{item.category}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden mb-2">
                  <div 
                    className="bg-[#FF5E3A] h-full rounded-full transition-all duration-500"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 font-semibold mb-3 sm:mb-4">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.completedLessons}/{item.totalLessons} Lessons</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.timeLeft}</span>
                  </div>
                </div>
              </div>

              {/* Resume Course Action */}
              <button
                onClick={() => {
                  audio.playClick();
                  onNavigate('lessons', item.id);
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5E3A] hover:opacity-80 transition cursor-pointer self-start"
              >
                <span>Resume Lesson</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: CURRICULUM COURSES */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mb-3 sm:mb-4">
          <h2 className="text-lg sm:text-xl font-extrabold font-heading">Curriculum Courses & Tracks</h2>
          
          {/* Quick Filter Pills (Responsive on mobile!) */}
          <div className="flex items-center gap-1.5 text-xs font-semibold overflow-x-auto no-scrollbar py-1">
            {[
              { id: 'All', label: 'All' },
              { id: 'JLPT N5', label: 'JLPT N5' },
              { id: 'JLPT N4', label: 'JLPT N4' },
              { id: 'COMING_SOON', label: 'Coming Soon' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => {
                  audio.playClick();
                  setActiveFilter(f.id);
                }}
                className={`px-3 py-1 rounded-lg transition cursor-pointer shrink-0 ${
                  activeFilter === f.id 
                    ? 'bg-[#1A1A1F] text-white dark:bg-white dark:text-[#1A1A1F] font-bold shadow-xs' 
                    : 'text-slate-500 hover:text-[#FF5E3A] border border-slate-200/50 dark:border-slate-800'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Course Grid */}
        {loading ? (
          <div className="py-12 text-center text-xs text-[#FF5E3A]">Loading courses...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                onClick={() => {
                  audio.playClick();
                  onNavigate('courses', course.id);
                }}
                className={`rounded-2xl sm:rounded-3xl border ${cardBg} p-4 sm:p-6 hover:border-[#FF5E3A]/40 transition cursor-pointer flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                    <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-extrabold font-mono border bg-orange-500/10 text-[#FF5E3A] border-orange-500/20">
                      JLPT {course.level}
                    </span>
                    <span className="text-xs font-bold text-slate-400 font-jp">
                      {course.japaneseTitle}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-sm sm:text-base leading-snug group-hover:text-[#FF5E3A] transition font-heading mb-1.5">
                    {course.title}
                  </h3>

                  <p className={`text-xs ${subText} line-clamp-2 leading-relaxed mb-3 sm:mb-4`}>
                    {course.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-400">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="flex items-center gap-1 font-semibold text-[11px] sm:text-xs">
                      <Layers className="w-3.5 h-3.5 text-[#FF5E3A]" />
                      {course.modulesCount || 4} Modules
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-[11px] sm:text-xs">
                      <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                      {course.lessonsCount || 12} Lessons
                    </span>
                  </div>

                  <div className="font-bold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform text-[#FF5E3A]">
                    <span>Start</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}

            {/* Single Coming Soon Card for N2 & N1 */}
            {(activeFilter === 'All' || activeFilter === 'COMING_SOON') && (
              <div
                onClick={() => {
                  audio.playClick();
                  onNavigate('courses', 'course-n2');
                }}
                className={`rounded-2xl sm:rounded-3xl border ${cardBg} p-4 sm:p-6 border-dashed hover:border-[#FF5E3A]/50 transition cursor-pointer flex flex-col justify-between group bg-gradient-to-br from-orange-500/[0.02] to-transparent`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                    <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-extrabold font-mono border bg-amber-500/10 text-amber-500 dark:text-amber-400 border-amber-500/30">
                      Coming Soon
                    </span>
                    <span className="text-xs font-bold text-slate-400 font-jp">
                      上級・最上級
                    </span>
                  </div>

                  <h3 className="font-extrabold text-sm sm:text-base leading-snug group-hover:text-[#FF5E3A] transition font-heading mb-1.5 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#FF5E3A]" />
                    <span>JLPT N2 & N1 Tracks</span>
                  </h3>

                  <p className={`text-xs ${subText} line-clamp-2 leading-relaxed mb-3 sm:mb-4`}>
                    Advanced and Mastery pre-fluency curriculum tracks with business Japanese, nuance grammar, and mock exams are in development.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 text-amber-500 font-semibold text-[11px] sm:text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    <span>In Development</span>
                  </div>

                  <div className="font-bold text-xs flex items-center gap-1 text-[#FF5E3A] group-hover:translate-x-1 transition-transform">
                    <span>View Track</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

    </div>
  );
};

export default DashboardOverview;
