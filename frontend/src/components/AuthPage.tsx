import React, { useState } from 'react';
import { 
  Mail, 
  Lock, 
  User as UserIcon, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  BookOpen,
  Trophy,
  ArrowLeft
} from 'lucide-react';
import { api, UserProfile } from '../services/api';
import audio from '../utils/audio';

interface AuthPageProps {
  initialMode?: 'login' | 'signup';
  onAuthSuccess: (user: UserProfile) => void;
  onBackToLanding: () => void;
  theme: 'dark' | 'light';
}

const AVATAR_OPTIONS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
];

export const AuthPage: React.FC<AuthPageProps> = ({
  initialMode = 'signup',
  onAuthSuccess,
  onBackToLanding,
  theme
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);

  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [targetLevel, setTargetLevel] = useState('N5');
  const [selectedAvatar, setSelectedAvatar] = useState(AVATAR_OPTIONS[0]);

  // Loading & Error feedback
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const isDark = theme === 'dark';
  const cardBg = isDark ? 'bg-[#17171C] border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-[#1A1A1F] shadow-xl';
  const inputBg = isDark ? 'bg-[#0E0E12] border-slate-800 text-white placeholder:text-slate-600 focus:border-[#FF5E3A]' : 'bg-[#FAF7F5] border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-[#FF5E3A]';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      if (mode === 'signup') {
        if (!name.trim() || !email.trim() || !password.trim()) {
          setErrorMsg('Please fill in all required fields.');
          setLoading(false);
          return;
        }

        const res = await api.register({
          name: name.trim(),
          email: email.trim(),
          password: password.trim(),
          targetLevel,
          avatar: selectedAvatar
        });

        if (res.success && res.user) {
          audio.playSuccess();
          onAuthSuccess(res.user);
        } else {
          setErrorMsg(res.error || 'Failed to create account.');
        }
      } else {
        // Log in
        if (!email.trim() || !password.trim()) {
          setErrorMsg('Please enter your email and password.');
          setLoading(false);
          return;
        }

        const res = await api.login({
          email: email.trim(),
          password: password.trim()
        });

        if (res.success && res.user) {
          audio.playSuccess();
          onAuthSuccess(res.user);
        } else {
          setErrorMsg(res.error || 'Invalid email or password.');
        }
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Error saving user profile.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col justify-between font-sans transition-colors overflow-x-hidden ${
      isDark ? 'bg-[#0E0E12] text-white' : 'bg-[#FAF7F5] text-[#1A1A1F]'
    }`}>
      
      {/* Top Header */}
      <header className="max-w-7xl w-full mx-auto px-3.5 sm:px-6 lg:px-8 py-3.5 sm:py-6 flex items-center justify-between">
        <button
          onClick={() => {
            audio.playClick();
            onBackToLanding();
          }}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-[#FF5E3A] transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden xs:inline">Back to Home</span>
          <span className="xs:hidden">Back</span>
        </button>

        {/* AniLearn Brand */}
        <div 
          onClick={() => {
            audio.playClick();
            onBackToLanding();
          }}
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#FF5E3A] flex items-center justify-center text-white shadow-md shadow-orange-500/20">
            <span className="font-black text-xs sm:text-sm font-jp">あ</span>
          </div>
          <span className="text-base sm:text-lg font-black tracking-tight font-heading">
            AniLearn
          </span>
        </div>

        <div className="w-10 sm:w-20"></div>
      </header>

      {/* Main Authentication Grid */}
      <main className="max-w-5xl w-full mx-auto px-3.5 sm:px-6 lg:px-8 py-4 sm:py-8 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10 my-auto">
        
        {/* Left Side: Value proposition (Desktop / Tablet) */}
        <div className="flex-1 max-w-md space-y-4 sm:space-y-6 text-left hidden md:block">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-500/10 text-[#FF5E3A] border border-orange-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Individual Japanese Progress Tracking</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black font-heading tracking-tight leading-tight">
            {mode === 'signup' 
              ? 'Create your account to unlock your Japanese journey.' 
              : 'Welcome back to your Japanese learning path.'}
          </h1>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Every student gets their own personalized profile with individual XP accumulation, JLPT streak counter, and mock exam grades.
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-orange-500/10 text-[#FF5E3A] flex items-center justify-center shrink-0">
                <Trophy className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <strong className="block text-slate-800 dark:text-slate-100">Live Diamond League Leaderboard</strong>
                <span className="text-slate-400">Compete with real learners and level up your XP</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-orange-500/10 text-[#FF5E3A] flex items-center justify-center shrink-0">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <strong className="block text-slate-800 dark:text-slate-100">JLPT N5 to N1 Curriculums</strong>
                <span className="text-slate-400">Structured lessons, audio dialogues, and Kanji</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Auth Card */}
        <div className={`w-full max-w-md rounded-2xl sm:rounded-3xl border p-4 sm:p-7 ${cardBg}`}>
          
          {/* Tab Switcher (Log In / Sign Up) */}
          <div className="flex p-1 rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-[#0E0E12] mb-4 sm:mb-6 border border-slate-200/60 dark:border-slate-800">
            <button
              type="button"
              onClick={() => {
                audio.playClick();
                setMode('signup');
                setErrorMsg(null);
              }}
              className={`flex-1 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs font-black transition cursor-pointer ${
                mode === 'signup' 
                  ? 'bg-[#FF5E3A] text-white shadow-sm' 
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span className="hidden xs:inline">Sign Up (New Student)</span>
              <span className="xs:hidden">Sign Up</span>
            </button>
            <button
              type="button"
              onClick={() => {
                audio.playClick();
                setMode('login');
                setErrorMsg(null);
              }}
              className={`flex-1 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs font-black transition cursor-pointer ${
                mode === 'login' 
                  ? 'bg-[#FF5E3A] text-white shadow-sm' 
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Log In
            </button>
          </div>

          {/* Form Header */}
          <div className="mb-4 sm:mb-5">
            <h2 className="text-lg sm:text-xl font-extrabold font-heading">
              {mode === 'signup' ? 'Create Student Account' : 'Log In to Your Account'}
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              {mode === 'signup' 
                ? 'Sign up to begin earning your individual study XP.' 
                : 'Enter your credentials to resume your courses.'}
            </p>
          </div>

          {/* Error Message */}
          {errorMsg && (
            <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-semibold flex items-center gap-2 animate-shake">
              <span>⚠️</span>
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            
            {mode === 'signup' && (
              <>
                {/* Full Name */}
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Your Name / Nickname
                  </label>
                  <div className="relative">
                    <UserIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Kenji Tanaka"
                      className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl sm:rounded-2xl text-xs font-medium border outline-hidden transition ${inputBg}`}
                    />
                  </div>
                </div>

                {/* Target JLPT Level */}
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Target JLPT Level Goal
                  </label>
                  <div className="grid grid-cols-5 gap-1.5">
                    {['N5', 'N4', 'N3', 'N2', 'N1'].map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => {
                          audio.playClick();
                          setTargetLevel(lvl);
                        }}
                        className={`py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs font-extrabold transition border cursor-pointer ${
                          targetLevel === lvl
                            ? 'bg-[#FF5E3A] border-[#FF5E3A] text-white shadow-xs'
                            : isDark ? 'bg-[#0E0E12] border-slate-800 text-slate-400 hover:text-white' : 'bg-[#FAF7F5] border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Choose Avatar */}
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Select Profile Avatar
                  </label>
                  <div className="flex items-center justify-between gap-1.5 sm:gap-2">
                    {AVATAR_OPTIONS.map((avatarUrl, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          audio.playClick();
                          setSelectedAvatar(avatarUrl);
                        }}
                        className={`relative rounded-full p-0.5 transition cursor-pointer shrink-0 ${
                          selectedAvatar === avatarUrl ? 'ring-2 sm:ring-3 ring-[#FF5E3A] scale-105' : 'opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={avatarUrl} alt="avatar" className="w-7 h-7 sm:w-9 sm:h-9 rounded-full object-cover" />
                        {selectedAvatar === avatarUrl && (
                          <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FF5E3A] absolute -bottom-0.5 -right-0.5 fill-white dark:fill-[#17171C]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Email */}
            <div>
              <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@example.com"
                  className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl sm:rounded-2xl text-xs font-medium border outline-hidden transition ${inputBg}`}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl sm:rounded-2xl text-xs font-medium border outline-hidden transition ${inputBg}`}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-[#FF5E3A] hover:bg-[#E84E29] text-white font-extrabold text-xs sm:text-sm shadow-md shadow-orange-500/25 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 active:scale-98"
            >
              {loading ? (
                <span>Saving Profile...</span>
              ) : mode === 'signup' ? (
                <>
                  <span>Create Account & Start</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </>
              ) : (
                <>
                  <span>Log In to AniLearn</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </>
              )}
            </button>
          </form>

          {/* Footer Security Notice */}
          <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-100 dark:border-slate-800 text-center text-[10px] sm:text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span>Encrypted local session • 100% private</span>
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="max-w-7xl w-full mx-auto px-4 py-4 sm:py-6 text-center text-[11px] sm:text-xs text-slate-400">
        AniLearn Japanese (アニラーン) • Personalized JLPT Curriculum & Study Tracking
      </footer>

    </div>
  );
};
