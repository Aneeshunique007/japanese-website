import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Check, 
  Play, 
  Award, 
  Flame, 
  ChevronRight, 
  Sun, 
  Moon, 
  Tv,
  LogIn,
  UserPlus
} from 'lucide-react';
import { UserProfile } from '../services/api';
import audio from '../utils/audio';

interface AniLearnHomeProps {
  onEnterApp: (view?: string) => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  currentUser?: UserProfile | null;
  onOpenAuth: (mode?: 'login' | 'register') => void;
}

export const AniLearnHome: React.FC<AniLearnHomeProps> = ({ 
  onEnterApp, 
  theme,
  onToggleTheme,
  currentUser,
  onOpenAuth
}) => {
  const isImageAvatar = (avatar?: string) => {
    return Boolean(avatar && (avatar.startsWith('http://') || avatar.startsWith('https://') || avatar.startsWith('/')));
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors overflow-x-hidden ${
      theme === 'dark' ? 'bg-[#0E0E12] text-white' : 'bg-[#FAF7F5] text-[#1A1A1F]'
    }`}>
      
      {/* Top Navigation Bar */}
      <header className="w-full max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-3.5 sm:py-5 flex items-center justify-between z-20">
        
        {/* Brand Logo */}
        <div 
          onClick={() => {
            audio.playClick();
          }}
          className="flex items-center gap-2 sm:gap-2.5 cursor-pointer select-none shrink-0"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#FF5E3A] flex items-center justify-center text-white shadow-md shadow-orange-500/20">
            <span className="font-black text-sm sm:text-base font-jp tracking-tighter">あ</span>
          </div>
          <span className="text-lg sm:text-xl font-extrabold tracking-tight font-heading">
            AniLearn <span className="text-[#FF5E3A] text-[10px] sm:text-xs font-semibold uppercase ml-0.5 tracking-wider hidden xs:inline">日本語</span>
          </span>
        </div>

        {/* Center Navigation Pill Bar (Tablet & Desktop) */}
        <nav className={`hidden md:flex items-center p-1.5 rounded-full border text-xs font-semibold shadow-xs ${
          theme === 'dark' ? 'bg-[#17171C]/90 border-slate-800 text-slate-300' : 'bg-white/90 border-slate-200/80 text-slate-600'
        }`}>
          <button 
            onClick={() => {
              audio.playClick();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-4 py-1.5 rounded-full bg-[#1A1A1F] text-white dark:bg-white dark:text-[#1A1A1F] font-bold shadow-xs cursor-pointer"
          >
            Home
          </button>
          <button 
            onClick={() => { audio.playClick(); onEnterApp('courses'); }}
            className="px-4 py-1.5 rounded-full hover:text-[#FF5E3A] transition cursor-pointer"
          >
            Courses
          </button>
          <button 
            onClick={() => { audio.playClick(); onEnterApp('lessons'); }}
            className="px-4 py-1.5 rounded-full hover:text-[#FF5E3A] transition cursor-pointer"
          >
            Lessons
          </button>
          <button 
            onClick={() => { audio.playClick(); onEnterApp('quizzes'); }}
            className="px-4 py-1.5 rounded-full hover:text-[#FF5E3A] transition cursor-pointer"
          >
            Quizzes
          </button>
          <button 
            onClick={() => { audio.playClick(); onEnterApp('nikki'); }}
            className="px-4 py-1.5 rounded-full hover:text-[#FF5E3A] transition cursor-pointer flex items-center gap-1.5"
          >
            <span>Nikki</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E3A] animate-pulse"></span>
          </button>
        </nav>

        {/* Right Action: Theme Switcher & Auth / Dashboard CTA */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button
            onClick={() => {
              audio.playClick();
              onToggleTheme();
            }}
            className={`p-1.5 sm:p-2 rounded-full border transition cursor-pointer ${
              theme === 'dark' ? 'bg-[#17171C] border-slate-800 text-amber-300' : 'bg-white border-slate-200 text-slate-700'
            }`}
            title="Toggle Dark / Light Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {currentUser ? (
            <button
              onClick={() => {
                audio.playSuccess();
                onEnterApp('overview');
              }}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold btn-orange cursor-pointer flex items-center gap-1.5 sm:gap-2 shadow-xs max-w-[170px] sm:max-w-none"
            >
              <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-white/20 text-xs overflow-hidden">
                {isImageAvatar(currentUser.avatar) ? (
                  <img src={currentUser.avatar} alt="avatar" className="w-full h-full object-cover" />
                ) : (
                  <span>{currentUser.avatar || '⛩️'}</span>
                )}
              </div>
              <span className="truncate">{currentUser.name}</span>
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 hidden xs:inline" />
            </button>
          ) : (
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={() => {
                  audio.playClick();
                  onOpenAuth('login');
                }}
                className={`px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full text-xs font-bold border transition cursor-pointer flex items-center gap-1 sm:gap-1.5 ${
                  theme === 'dark' ? 'border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800' : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Log In</span>
              </button>

              <button
                onClick={() => {
                  audio.playClick();
                  onOpenAuth('register');
                }}
                className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full text-xs font-bold btn-orange cursor-pointer flex items-center gap-1 sm:gap-1.5 shadow-sm"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Create Account</span>
                <span className="sm:hidden">Join</span>
              </button>
            </div>
          )}
        </div>

      </header>

      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-12 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
        
        {/* Soft Warm Radial Glow in Background */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] lg:w-[800px] h-[250px] sm:h-[350px] bg-gradient-to-tr from-[#FF5E3A]/20 via-[#FFA07A]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow"></div>

        {/* Big Bold Headline with [ helper ] Box Frame */}
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.12] sm:leading-[1.08] font-heading">
            Your personalized<br />
            learning{' '}
            <span className="relative inline-block px-2 sm:px-3 py-0.5 mx-1 border-2 border-[#1A1A1F] dark:border-white rounded-md">
              <span className="text-[#FF5E3A]">helper</span>
              {/* Corner Accent Markers */}
              <span className="absolute -top-1 -left-1 sm:-top-1.5 sm:-left-1.5 w-2 sm:w-3 h-2 sm:h-3 bg-[#FF5E3A] rotate-45"></span>
              <span className="absolute -bottom-1 -right-1 sm:-bottom-1.5 sm:-right-1.5 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#1A1A1F] dark:bg-white"></span>
            </span>
          </h1>

          {/* Value Checklist */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-6 pt-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#FF5E3A] stroke-[3] shrink-0" />
              <span>Connect with <strong>top native Sensei</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#FF5E3A] stroke-[3] shrink-0" />
              <span>Sharpen your <strong>Japanese skills</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#FF5E3A] stroke-[3] shrink-0" />
              <span>Achieve your <strong>JLPT goal</strong></span>
            </div>
          </div>

          {/* Action Button Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 pt-4 sm:pt-5 max-w-sm sm:max-w-none mx-auto w-full">
            {currentUser ? (
              <button
                onClick={() => {
                  audio.playSuccess();
                  onEnterApp('overview');
                }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-bold btn-orange cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-orange-500/20 active:scale-98 transition"
              >
                <span>Continue Learning</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    audio.playClick();
                    onOpenAuth('register');
                  }}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-bold btn-orange cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-orange-500/20 active:scale-98 transition"
                >
                  <span>Start Learning Free</span>
                  <Sparkles className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    audio.playClick();
                    onOpenAuth('login');
                  }}
                  className={`w-full sm:w-auto px-6 py-3.5 rounded-full text-sm font-bold border transition cursor-pointer flex items-center justify-center gap-2 active:scale-98 ${
                    theme === 'dark' 
                      ? 'bg-[#17171C] border-slate-800 text-slate-200 hover:bg-slate-800' 
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-xs'
                  }`}
                >
                  <LogIn className="w-4 h-4" />
                  <span>Log In to Account</span>
                </button>
              </>
            )}
          </div>

          {/* Platform Capability Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 pt-2 sm:pt-3">
            <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-orange-500/10 text-[#FF5E3A] border border-orange-500/20">
              JLPT N5–N1 Paths
            </span>
            <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              Spaced Repetition SRS
            </span>
            <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              Native Voice Audio
            </span>
          </div>

        </div>

        {/* 3D Dashboard Mockup Preview */}
        <div 
          onClick={() => {
            audio.playSuccess();
            onEnterApp('overview');
          }}
          className="w-full max-w-5xl mt-8 sm:mt-12 cursor-pointer group transition-transform duration-300 hover:scale-[1.01]"
        >
          {/* Mockup Frame */}
          <div className={`rounded-2xl sm:rounded-3xl border p-2 sm:p-4 shadow-xl sm:shadow-2xl transition ${
            theme === 'dark' ? 'bg-[#17171C] border-slate-800 shadow-orange-950/20' : 'bg-white border-slate-200 shadow-slate-300/60'
          }`}>
            {/* Window Top Controls */}
            <div className="flex items-center justify-between px-2 sm:px-3 py-2 border-b border-slate-200/60 dark:border-slate-800/80 mb-2.5 sm:mb-3 gap-2">
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-400"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400"></div>
              </div>
              <div className="hidden xs:block px-2.5 sm:px-4 py-0.5 sm:py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] sm:text-[11px] font-mono text-slate-500 truncate max-w-[140px] sm:max-w-none">
                app.anilearn.jp/dashboard
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-[#FF5E3A] flex items-center gap-1 shrink-0 ml-auto">
                <span className="hidden sm:inline">Click to Open Interactive Dashboard</span>
                <span className="sm:hidden">Launch App</span>
                <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              </div>
            </div>

            {/* Dashboard Mini Preview Layout */}
            <div className={`rounded-xl sm:rounded-2xl p-3 sm:p-6 border grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 text-left ${
              theme === 'dark' ? 'bg-[#0E0E12] border-slate-800' : 'bg-[#FAF7F5] border-slate-100'
            }`}>
              
              {/* Left Column Preview: Continue Learning */}
              <div className="md:col-span-8 space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-xs sm:text-base font-heading">Continue Learning</h3>
                  <span className="text-[11px] sm:text-xs text-[#FF5E3A] font-bold">2 in progress</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border ${theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200'} shadow-xs`}>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-orange-500/10 text-[#FF5E3A] flex items-center justify-center font-bold text-xs font-jp mb-1.5 sm:mb-2">
                      語
                    </div>
                    <h4 className="font-bold text-xs sm:text-sm">JLPT N5 Core Grammar</h4>
                    <span className="text-[9px] sm:text-[10px] text-slate-400 font-mono">JLPT N5 FOUNDATIONS</span>
                    {/* Orange Progress Bar */}
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-[#FF5E3A] h-full rounded-full w-3/5"></div>
                    </div>
                    <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-slate-400 mt-2 font-semibold">
                      <span>18/40 Lessons</span>
                      <span>2 hours left</span>
                    </div>
                  </div>

                  <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border ${theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200'} shadow-xs`}>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-xs font-jp mb-1.5 sm:mb-2">
                      話
                    </div>
                    <h4 className="font-bold text-xs sm:text-sm">JLPT N5 Speaking & Phrases</h4>
                    <span className="text-[9px] sm:text-[10px] text-slate-400 font-mono">SPEAKING & PHRASES</span>
                    {/* Orange Progress Bar */}
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-[#FF5E3A] h-full rounded-full w-4/5"></div>
                    </div>
                    <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-slate-400 mt-2 font-semibold">
                      <span>24/40 Lessons</span>
                      <span>1.5 hours left</span>
                    </div>
                  </div>
                </div>

                {/* Recommended Preview */}
                <div className="pt-1 sm:pt-2">
                  <h4 className="font-extrabold text-xs sm:text-sm mb-2 font-heading">Recommended For You</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    <div className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border ${theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200'} flex items-center gap-2.5 sm:gap-3`}>
                      <div className="w-12 h-10 sm:w-16 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-tr from-[#FF5E3A] to-orange-400 text-white flex items-center justify-center shrink-0">
                        <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                      </div>
                      <div className="min-w-0">
                        <h5 className="font-bold text-xs leading-tight truncate">JLPT N5 Masterclass</h5>
                        <div className="text-[9px] sm:text-[10px] text-slate-400 mt-0.5 truncate">Kenji Takahashi Sensei • ★ 4.9</div>
                      </div>
                    </div>

                    <div className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border ${theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200'} flex items-center gap-2.5 sm:gap-3`}>
                      <div className="w-12 h-10 sm:w-16 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 text-white flex items-center justify-center shrink-0">
                        <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                      </div>
                      <div className="min-w-0">
                        <h5 className="font-bold text-xs leading-tight truncate">JLPT N5 to N3 Kanji Mastery</h5>
                        <div className="text-[9px] sm:text-[10px] text-slate-400 mt-0.5 truncate">Yuki Tanaka Sensei • ★ 4.8</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column Preview: Student Stats & 7-Day Streak Widget */}
              <div className="md:col-span-4 space-y-2.5 sm:space-y-3 pt-3 md:pt-0 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800 md:pl-4">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <img className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-[#FF5E3A] shrink-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Avatar" />
                  <div className="min-w-0">
                    <h4 className="font-extrabold text-xs truncate">Ren Tanaka</h4>
                    <span className="text-[10px] text-slate-400 truncate block">JLPT N3 Scholar • 🥇 876 XP</span>
                  </div>
                </div>

                {/* 3 Stat Badges */}
                <div className="grid grid-cols-3 gap-1.5 text-center">
                  <div className={`p-1.5 sm:p-2 rounded-xl border ${theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200'}`}>
                    <div className="text-xs font-black text-[#FF5E3A]">🔥 54</div>
                    <div className="text-[8px] text-slate-400 uppercase">Streak</div>
                  </div>
                  <div className={`p-1.5 sm:p-2 rounded-xl border ${theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200'}`}>
                    <div className="text-xs font-black text-amber-500">🎯 06</div>
                    <div className="text-[8px] text-slate-400 uppercase">Goals</div>
                  </div>
                  <div className={`p-1.5 sm:p-2 rounded-xl border ${theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200'}`}>
                    <div className="text-xs font-black text-emerald-500">🏆 02</div>
                    <div className="text-[8px] text-slate-400 uppercase">Rank</div>
                  </div>
                </div>

                {/* Weekly Streak Days Pill Strip */}
                <div className={`p-2 sm:p-2.5 rounded-xl border ${theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200'}`}>
                  <div className="text-[9px] font-bold text-slate-400 uppercase mb-1">Weekly Streak</div>
                  <div className="flex justify-between gap-1">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                      <span key={i} className={`w-4 h-4 sm:w-5 sm:h-5 rounded-md flex items-center justify-center text-[8px] sm:text-[9px] font-bold ${
                        i < 3 ? 'bg-[#FF5E3A] text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                      }`}>
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* 3 Core Feature Callouts */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-16 text-left">
          
          <div className={`p-5 sm:p-6 rounded-2xl sm:rounded-3xl border transition ${
            theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-orange-500/10 text-[#FF5E3A] flex items-center justify-center mb-3 sm:mb-4">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-sm sm:text-base mb-1 font-heading">Gamified Learning</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Gamify your Japanese learning journey with daily streaks, points, achievements, and weekly leaderboards.
            </p>
          </div>

          <div className={`p-5 sm:p-6 rounded-2xl sm:rounded-3xl border transition ${
            theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-3 sm:mb-4">
              <Tv className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-sm sm:text-base mb-1 font-heading">JLPT Structured Paths</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Structured courses tailored to your goals: from JLPT N5–N1 exam prep to authentic conversational Japanese.
            </p>
          </div>

          <div className={`p-5 sm:p-6 rounded-2xl sm:rounded-3xl border transition ${
            theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-3 sm:mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-sm sm:text-base mb-1 font-heading">Native Audio & Practice</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Master authentic pronunciation with native Sensei recordings, interactive Kanji dictionary, and official format mock tests.
            </p>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className={`border-t py-6 sm:py-8 px-4 text-center text-xs mt-auto ${
        theme === 'dark' ? 'bg-[#0E0E12] border-slate-800 text-slate-500' : 'bg-white border-slate-200 text-slate-400'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-[#FF5E3A]">AniLearn (アニラーン)</span>
            <span>• Japanese Language Learning Platform</span>
          </div>
          <div>
            <span>© 2026 AniLearn Inc. All rights reserved.</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default AniLearnHome;
