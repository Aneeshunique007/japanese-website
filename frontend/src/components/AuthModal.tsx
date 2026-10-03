import React, { useState } from 'react';
import { X, User as UserIcon, Mail, Lock, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { api, UserProfile } from '../services/api';
import audio from '../utils/audio';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthSuccess: (user: UserProfile) => void;
  initialMode?: 'login' | 'register';
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

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onAuthSuccess,
  initialMode = 'register',
  theme
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  
  // Register Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [targetLevel, setTargetLevel] = useState('N5');
  const [selectedAvatar, setSelectedAvatar] = useState(AVATAR_OPTIONS[0]);

  // Status & Error
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      if (mode === 'register') {
        if (!name.trim() || !email.trim() || !password.trim()) {
          setErrorMsg('Please fill in all required fields');
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
          onClose();
        } else {
          setErrorMsg(res.error || 'Failed to create account');
        }
      } else {
        // Log in
        if (!email.trim() || !password.trim()) {
          setErrorMsg('Please enter your email and password');
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
          onClose();
        } else {
          setErrorMsg(res.error || 'Invalid credentials');
        }
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Error processing request');
    } finally {
      setLoading(false);
    }
  };

  const isDark = theme === 'dark';
  const modalBg = isDark ? 'bg-[#17171C] border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-[#1A1A1F]';
  const inputBg = isDark ? 'bg-[#0E0E12] border-slate-800 text-white placeholder:text-slate-600 focus:border-[#FF5E3A]' : 'bg-[#FAF7F5] border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-[#FF5E3A]';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      
      <div className={`w-full max-w-md rounded-2xl sm:rounded-3xl border shadow-2xl p-4 sm:p-7 relative ${modalBg} transition-all max-h-[92vh] overflow-y-auto`}>
        
        {/* Close Button */}
        <button
          onClick={() => {
            audio.playClick();
            onClose();
          }}
          className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Header */}
        <div className="text-center mb-4 sm:mb-5">
          <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FF5E3A] text-white shadow-lg shadow-orange-500/20 mb-2 font-jp font-black text-lg sm:text-xl">
            あ
          </div>
          <h2 className="text-xl sm:text-2xl font-black font-heading tracking-tight">
            {mode === 'register' ? 'Join AniLearn' : 'Welcome Back'}
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
            {mode === 'register' 
              ? 'Create your account to start tracking your individual Japanese XP & JLPT mastery.' 
              : 'Log in to continue your personalized Japanese study track.'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex p-1 rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-[#0E0E12] mb-4 sm:mb-5 border border-slate-200/50 dark:border-slate-800">
          <button
            type="button"
            onClick={() => {
              audio.playClick();
              setMode('register');
              setErrorMsg(null);
            }}
            className={`flex-1 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs font-bold transition cursor-pointer ${
              mode === 'register' 
                ? 'bg-[#FF5E3A] text-white shadow-sm' 
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Create Account
          </button>
          <button
            type="button"
            onClick={() => {
              audio.playClick();
              setMode('login');
              setErrorMsg(null);
            }}
            className={`flex-1 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs font-bold transition cursor-pointer ${
              mode === 'login' 
                ? 'bg-[#FF5E3A] text-white shadow-sm' 
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Log In
          </button>
        </div>

        {/* Error Alert */}
        {errorMsg && (
          <div className="mb-3.5 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-semibold flex items-center gap-2 animate-shake">
            <span>⚠️</span>
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          
          {mode === 'register' && (
            <>
              {/* Full Name */}
              <div>
                <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Full Name / Nickname
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
                <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Target JLPT Level
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

              {/* Choose Profile Avatar */}
              <div>
                <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Choose Avatar
                </label>
                <div className="flex items-center justify-between gap-1 sm:gap-2">
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
                      <img src={avatarUrl} alt="avatar" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover" />
                      {selectedAvatar === avatarUrl && (
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FF5E3A] absolute -bottom-0.5 -right-0.5 fill-white dark:fill-[#17171C]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Email Address */}
          <div>
            <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl sm:rounded-2xl text-xs font-medium border outline-hidden transition ${inputBg}`}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
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
            ) : mode === 'register' ? (
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

        {/* Footer info */}
        <div className="mt-4 sm:mt-5 text-center text-[10px] sm:text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
          <span>Local secure study session • 100% private</span>
        </div>

      </div>

    </div>
  );
};
