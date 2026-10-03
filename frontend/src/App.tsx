import { useState, useEffect } from 'react';
import { AniLearnHome } from './components/AniLearnHome';
import { DashboardLayout } from './components/DashboardLayout';
import { DashboardOverview } from './components/DashboardOverview';
import { CoursesView } from './components/CoursesView';
import { LessonDetailView } from './components/LessonDetailView';
import { KanjiExplorerView } from './components/KanjiExplorerView';
import { GrammarLibraryView } from './components/GrammarLibraryView';

import { ExamView } from './components/ExamView';
import { KanaTableView } from './components/KanaTableView';
import { KanjiTableView } from './components/KanjiTableView';
import { WordsTableView } from './components/WordsTableView';
import { QuizzesView } from './components/QuizzesView';
import { SearchModal } from './components/SearchModal';
import { AuthModal } from './components/AuthModal';
import { AuthPage } from './components/AuthPage';
import { NikkiLearningsView } from './components/NikkiLearningsView';
import { api, UserProfile, checkServerHealth } from './services/api';
import audio from './utils/audio';
import { Mail, ShieldCheck, LogOut, UserPlus } from 'lucide-react';
import { recordStudySession } from './utils/activityTracker';
import { learnedStore } from './utils/learnedStore';
import { studyScheduleStore } from './utils/studyScheduleStore';

export function App() {
  // Current Authenticated User (Saved in MongoDB & cached in localStorage)
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => {
    try {
      const stored = localStorage.getItem('anilearn_auth_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  // Auth Modal & Page Navigation State
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'register'>('register');

  // Server Online Status (Always online in frontend-only / Vercel mode)
  const [serverOnline, setServerOnline] = useState<boolean | null>(true);

  useEffect(() => {
    let cancelled = false;
    async function runHealthCheck() {
      const ok = await checkServerHealth();
      if (!cancelled) setServerOnline(ok);
    }
    runHealthCheck();
    // Recheck every 10 seconds
    const interval = setInterval(runHealthCheck, 10000);
    return () => { cancelled = true; clearInterval(interval); };
  }, []);

  const [currentMode, setCurrentMode] = useState<'landing' | 'login' | 'signup' | 'app'>(() => {
    const stored = localStorage.getItem('anilearn_auth_user');
    return stored ? 'app' : 'landing';
  });

  const [activeTab, setActiveTab] = useState<string>('overview');
  const [selectedLessonId, setSelectedLessonId] = useState<string>('lesson-n5-1-1');
  const [selectedCourseId, setSelectedCourseId] = useState<string>('course-n5');

  // Dynamic Leaderboard list from MongoDB
  const [leaderboardList, setLeaderboardList] = useState<any[]>([]);
  const [loadingLeaderboard, setLoadingLeaderboard] = useState(false);

  // Sync user with latest database data on mount if logged in
  useEffect(() => {
    if (currentUser?.id) {
      api.getUser(currentUser.id)
        .then(res => {
          if (res.success && res.user) {
            setCurrentUser(res.user);
            localStorage.setItem('anilearn_auth_user', JSON.stringify(res.user));
          }
        })
        .catch(err => console.warn('Could not sync user with DB:', err));
    }
  }, [currentUser?.id]);

  // Load Dynamic MongoDB Leaderboard
  useEffect(() => {
    async function loadLeaderboard() {
      setLoadingLeaderboard(true);
      try {
        const res = await api.getLeaderboard(currentUser?.id);
        if (res.success && res.leaderboard) {
          setLeaderboardList(res.leaderboard);
        }
      } catch (e) {
        console.error('Failed to load leaderboard:', e);
      } finally {
        setLoadingLeaderboard(false);
      }
    }
    loadLeaderboard();
  }, [currentUser?.id, currentUser?.xp]);

  // Preferences
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('anilearn_theme') as 'dark' | 'light') || 'light';
  });

  const [showFurigana, setShowFurigana] = useState<boolean>(() => {
    return localStorage.getItem('anilearn_furigana') !== 'false';
  });

  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchInitialQuery, setSearchInitialQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('anilearn_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Global search shortcut (Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle Authentication Success
  const handleAuthSuccess = (user: UserProfile) => {
    setCurrentUser(user);
    localStorage.setItem('anilearn_auth_user', JSON.stringify(user));
    setCurrentMode('app');
    setActiveTab('overview');
    studyScheduleStore.syncFromMongoDB();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle Log Out
  const handleLogout = () => {
    audio.playClick();
    setCurrentUser(null);
    localStorage.removeItem('anilearn_auth_user');
    studyScheduleStore.syncFromMongoDB();
    setCurrentMode('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle Switch Account
  const handleSwitchAccount = () => {
    audio.playClick();
    setAuthModalMode('login');
    setAuthModalOpen(true);
  };

  // Individual XP & Progress Updater
  const handleGainXp = async (amount: number, lessonId?: string, studyMinutes: number = 15) => {
    // Always mark completed in local learnedStore
    if (lessonId) {
      learnedStore.markLessonCompleted(lessonId);
    }

    if (!currentUser) {
      // If not logged in, prompt user to register/login to save their XP
      setAuthModalMode('register');
      setAuthModalOpen(true);
      return;
    }

    try {
      const res = await api.updateProgress({
        userId: currentUser.id,
        xpGained: amount,
        lessonId,
        studyMinutesGained: studyMinutes
      });

      if (res.success && res.user) {
        setCurrentUser(res.user);
        localStorage.setItem('anilearn_auth_user', JSON.stringify(res.user));
        window.dispatchEvent(new CustomEvent('anilearn_user_update'));
        recordStudySession(currentUser.id, studyMinutes);
      }
    } catch (err) {
      console.error('Failed to update student progress in MongoDB:', err);
      // Fallback local update
      setCurrentUser(prev => {
        if (!prev) return null;
        const newMinutes = prev.studyTimeMinutes + studyMinutes;
        const updated = {
          ...prev,
          xp: prev.xp + amount,
          completedLessons: lessonId && !prev.completedLessons.includes(lessonId) 
            ? [...prev.completedLessons, lessonId] 
            : prev.completedLessons,
          studyTimeMinutes: newMinutes
        };
        localStorage.setItem('anilearn_auth_user', JSON.stringify(updated));
        window.dispatchEvent(new CustomEvent('anilearn_user_update'));
        recordStudySession(currentUser.id, studyMinutes);
        return updated;
      });
    }
  };

  // Profile Update Handler (Settings)
  const handleUpdateProfile = async (targetLevel: string, name: string) => {
    if (!currentUser) return;
    try {
      const res = await api.updateProfile({
        userId: currentUser.id,
        name,
        targetLevel,
        title: `JLPT ${targetLevel} Explorer`
      });
      if (res.success && res.user) {
        audio.playSuccess();
        setCurrentUser(res.user);
        localStorage.setItem('anilearn_auth_user', JSON.stringify(res.user));
      }
    } catch (err) {
      console.error('Failed to update profile:', err);
    }
  };

  const handleEnterApp = (destinationTab: string = 'overview') => {
    if (!currentUser) {
      setAuthModalMode('login');
      setAuthModalOpen(true);
      return;
    }
    setCurrentMode('app');
    setActiveTab(destinationTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTab = (tab: string, extraId?: string) => {
    if (tab === 'courses' && extraId) {
      setSelectedCourseId(extraId);
    }
    if (tab === 'kana') {
      if (extraId === 'katakana') {
        setActiveTab('katakana');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      } else {
        setActiveTab('hiragana');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
    }
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectLesson = (lessonId: string) => {
    setSelectedLessonId(lessonId);
    setActiveTab('lessons');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  // --- Server Health Gate ---
  if (serverOnline === null) {
    // Still checking...
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center gap-6 font-sans ${theme === 'dark' ? 'bg-[#0E0E12] text-white' : 'bg-[#FAF7F5] text-[#1A1A1F]'}`}>
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF7B5C] to-[#FF5E3A] flex items-center justify-center shadow-xl shadow-orange-500/30 animate-pulse">
          <span className="text-3xl">🌸</span>
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-xl font-black">Connecting to AniLearn…</h2>
          <p className="text-sm text-slate-400">Checking server connection, please wait.</p>
        </div>
        <div className="flex gap-1.5">
          {[0,1,2].map(i => (
            <div key={i} className="w-2 h-2 rounded-full bg-[#FF5E3A] animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
        </div>
      </div>
    );
  }

  if (serverOnline === false) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center gap-6 p-8 font-sans ${theme === 'dark' ? 'bg-[#0E0E12] text-white' : 'bg-[#FAF7F5] text-[#1A1A1F]'}`}>
        <div className="w-20 h-20 rounded-3xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-4xl shadow-xl">
          🔌
        </div>
        <div className="text-center space-y-2 max-w-sm">
          <h2 className="text-2xl font-black text-rose-500">Server Offline</h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            The AniLearn backend server is not running. Please start it with:
          </p>
          <code className="block mt-3 px-4 py-3 rounded-xl bg-slate-900 text-emerald-400 text-xs font-mono text-left border border-slate-800 shadow-inner">
            cd backend &amp;&amp; npm run dev
          </code>
        </div>
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={async () => { setServerOnline(null); const ok = await checkServerHealth(); setServerOnline(ok); }}
            className="px-6 py-2.5 rounded-xl bg-[#FF5E3A] hover:bg-[#E84E29] text-white text-sm font-black transition cursor-pointer shadow-lg shadow-orange-500/30 active:scale-95"
          >
            🔄 Retry Connection
          </button>
          <p className="text-[11px] text-slate-500">Auto-retrying every 10 seconds…</p>
        </div>
      </div>
    );
  }

  return (

    <div className={`min-h-screen font-sans selection:bg-[#FF5E3A] selection:text-white transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#0E0E12] text-slate-100 dark' : 'bg-[#FAF7F5] text-[#1A1A1F]'
    }`}>
      
      {/* 1. DEDICATED FULL-SCREEN LOGIN / SIGN UP PAGE */}
      {(currentMode === 'login' || currentMode === 'signup') && (
        <AuthPage
          initialMode={currentMode === 'login' ? 'login' : 'signup'}
          onAuthSuccess={handleAuthSuccess}
          onBackToLanding={() => setCurrentMode('landing')}
          theme={theme}
        />
      )}

      {/* 2. PUBLIC LANDING PAGE */}
      {currentMode === 'landing' && (
        <AniLearnHome 
          onEnterApp={handleEnterApp}
          theme={theme}
          onToggleTheme={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
          currentUser={currentUser}
          onOpenAuth={(mode = 'register') => {
            setCurrentMode(mode === 'login' ? 'login' : 'signup');
          }}
        />
      )}

      {/* 3. LOGGED-IN APPLICATION DASHBOARD (Access restricted to authenticated users) */}
      {currentMode === 'app' && currentUser && (
        <DashboardLayout
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
          onBackToHome={() => setCurrentMode('landing')}
          theme={theme}
          onToggleTheme={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
          onOpenSearch={(query?: string) => {
            setSearchInitialQuery(query || '');
            setSearchModalOpen(true);
          }}
          showFurigana={showFurigana}
          onToggleFurigana={() => {
            setShowFurigana(prev => {
              const next = !prev;
              localStorage.setItem('anilearn_furigana', String(next));
              return next;
            });
          }}
          currentUser={currentUser}
          leaderboardList={leaderboardList}
          onLogout={handleLogout}
          onSwitchAccount={handleSwitchAccount}
        >
          {/* Main Content Area */}
          {activeTab === 'overview' && (
            <DashboardOverview
              onNavigate={handleSelectTab}
              theme={theme}
              currentUser={currentUser}
              onGainXp={(xp) => handleGainXp(xp, undefined, 20)}
              leaderboardList={leaderboardList}
            />
          )}

          {activeTab === 'nikki' && (
            <div className="space-y-8 animate-fade-in">
              <NikkiLearningsView
                theme={theme}
                showFurigana={showFurigana}
                onGainXp={(xp, lessonId, minutes) => handleGainXp(xp, lessonId, minutes || 15)}
                onNavigateHome={() => setCurrentMode('landing')}
              />
            </div>
          )}

          {activeTab === 'hiragana' && (
            <div className="space-y-8 animate-fade-in">
              <KanaTableView 
                theme={theme} 
                forcedScript="hiragana"
                onGainXp={(xp) => handleGainXp(xp, undefined, 15)}
                onNavigateTab={handleSelectTab}
              />
            </div>
          )}

          {activeTab === 'katakana' && (
            <div className="space-y-8 animate-fade-in">
              <KanaTableView 
                theme={theme} 
                forcedScript="katakana"
                onGainXp={(xp) => handleGainXp(xp, undefined, 15)}
                onNavigateTab={handleSelectTab}
              />
            </div>
          )}

          {activeTab === 'kana' && (
            <div className="space-y-8 animate-fade-in">
              <KanaTableView 
                theme={theme} 
                forcedScript="hiragana"
                onGainXp={(xp) => handleGainXp(xp, undefined, 15)}
                onNavigateTab={handleSelectTab}
              />
            </div>
          )}

          {activeTab === 'kanji' && (
            <div className="space-y-8 animate-fade-in">
              <KanjiTableView 
                theme={theme} 
                onGainXp={(xp) => handleGainXp(xp, undefined, 20)}
              />
            </div>
          )}

          {activeTab === 'words' && (
            <div className="space-y-8 animate-fade-in">
              <WordsTableView 
                theme={theme}
                showFurigana={showFurigana}
                onGainXp={(xp) => handleGainXp(xp, undefined, 20)}
              />
            </div>
          )}

          {activeTab === 'lessons' && (
            <LessonDetailView
              lessonId={selectedLessonId}
              onBack={() => setActiveTab('courses')}
              showFurigana={showFurigana}
              theme={theme}
              onCompleteLesson={(id, xp) => handleGainXp(xp, id, 20)}
              onSelectLesson={(id) => setSelectedLessonId(id)}
            />
          )}

          {activeTab === 'quizzes' && (
            <QuizzesView
              theme={theme}
              showFurigana={showFurigana}
              onXpEarned={(xp) => handleGainXp(xp, undefined, 15)}
            />
          )}

          {activeTab === 'courses' && (
            <CoursesView
              initialCourseId={selectedCourseId}
              onSelectLesson={handleSelectLesson}
              theme={theme}
            />
          )}

          {activeTab === 'skill-graph' && (
            <div className="space-y-10">
              <KanjiExplorerView theme={theme} />
              <GrammarLibraryView theme={theme} showFurigana={showFurigana} />
            </div>
          )}

          {activeTab === 'leaderboard' && (
            <div className="space-y-6 sm:space-y-8 animate-fade-in">
              <div className={`p-4 sm:p-8 rounded-2xl sm:rounded-3xl border ${theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200'} space-y-4`}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black font-heading">Global Japanese Learner League</h2>
                    <p className="text-xs text-slate-400">Live rankings directly from registered students in MongoDB.</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500/10 text-[#FF5E3A] border border-orange-500/20 shrink-0">
                    Diamond League
                  </span>
                </div>

                {/* Leaderboard Table */}
                {loadingLeaderboard ? (
                  <div className="py-8 text-center text-xs text-[#FF5E3A]">Loading learner rankings from database...</div>
                ) : leaderboardList.length === 0 ? (
                  <div className="py-8 text-center text-xs text-slate-400">No students registered yet. Complete a lesson to take #1 on the leaderboard!</div>
                ) : (
                  <div className="space-y-2.5 pt-2">
                    {leaderboardList.map((player) => (
                      <div 
                        key={player.id || player.rank} 
                        className={`p-4 rounded-2xl border flex items-center justify-between transition ${
                          player.isCurrent 
                            ? 'bg-[#FF5E3A]/10 border-[#FF5E3A] font-bold shadow-xs' 
                            : theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                          <span className="w-6 sm:w-8 text-center text-xs sm:text-sm font-black shrink-0">{player.badge}</span>
                          <img src={player.avatar} alt={player.name} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-[#FF5E3A]/30 shrink-0" />
                          <div className="min-w-0">
                            <div className="font-extrabold text-sm flex items-center gap-1.5 truncate">
                              <span className="truncate">{player.name}</span>
                              {player.isCurrent && (
                                <span className="text-[10px] px-2 py-0.5 rounded bg-[#FF5E3A] text-white font-bold shrink-0">You</span>
                              )}
                            </div>
                            <div className="text-[11px] text-slate-400 font-mono">🔥 {player.streak} Days Streak</div>
                          </div>
                        </div>
                        <div className="font-mono font-black text-xs sm:text-sm text-[#FF5E3A] shrink-0 ml-2">
                          {player.xp} XP
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {(activeTab === 'certificates' || activeTab === 'exam') && (
            <ExamView 
              theme={theme} 
              onGainXp={(pts) => handleGainXp(pts, undefined, 30)}
            />
          )}


          {activeTab === 'settings' && (
            <div className="space-y-6 sm:space-y-8 animate-fade-in">
              
              {/* Profile Card & Account Details */}
              {currentUser && (
                <div className={`p-4 sm:p-8 rounded-2xl sm:rounded-3xl border ${theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200'} space-y-5 sm:space-y-6`}>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black font-heading mb-1">Student Account Profile</h2>
                      <p className="text-xs text-slate-400">Connected to local MongoDB database.</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center gap-1 shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Active Session</span>
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <img src={currentUser.avatar} alt={currentUser.name} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover ring-4 ring-[#FF5E3A] shadow-md shrink-0" />
                    <div className="space-y-1 flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-black font-heading">{currentUser.name}</h3>
                      <p className="text-xs text-slate-400 flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{currentUser.email}</span>
                      </p>
                      <div className="flex flex-wrap items-center gap-2 pt-2">
                        <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-orange-500/10 text-[#FF5E3A]">
                          🥇 {currentUser.xp} XP Points
                        </span>
                        <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                          🔥 {currentUser.streak} Day Streak
                        </span>
                        <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-indigo-500/10 text-indigo-500">
                          📚 {currentUser.completedLessons.length} Completed
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Change Target JLPT Level */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Change Target JLPT Track
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {['N5', 'N4', 'N3', 'N2', 'N1'].map((lvl) => (
                        <button
                          key={lvl}
                          onClick={() => handleUpdateProfile(lvl, currentUser.name)}
                          className={`py-2.5 rounded-xl text-xs font-black transition border cursor-pointer ${
                            currentUser.targetLevel === lvl
                              ? 'bg-[#FF5E3A] border-[#FF5E3A] text-white shadow-xs'
                              : theme === 'dark' ? 'bg-[#0E0E12] border-slate-800 text-slate-400 hover:text-white' : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          JLPT {lvl}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Actions: Switch Account / Log Out */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
                    <button
                      onClick={handleSwitchAccount}
                      className="w-full sm:w-auto justify-center px-4 py-2.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer flex items-center gap-2 text-indigo-500"
                    >
                      <UserPlus className="w-4 h-4" />
                      <span>Switch / Log In Another Account</span>
                    </button>

                    <button
                      onClick={handleLogout}
                      className="w-full sm:w-auto justify-center px-4 py-2.5 rounded-xl text-xs font-bold bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 border border-rose-500/20 transition cursor-pointer flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Log Out</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Preferences Settings */}
              <div className={`p-4 sm:p-8 rounded-2xl sm:rounded-3xl border ${theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200'} space-y-5 sm:space-y-6`}>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black font-heading mb-1">Learning Preferences</h2>
                  <p className="text-xs text-slate-400">Configure furigana display and review kana syllabaries.</p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <div>
                      <h4 className="font-bold text-sm">Show Japanese Furigana (Ruby Text)</h4>
                      <p className="text-xs text-slate-400">Display phonetic reading annotations above Kanji characters</p>
                    </div>
                    <button
                      onClick={() => {
                        setShowFurigana(prev => {
                          const next = !prev;
                          localStorage.setItem('anilearn_furigana', String(next));
                          return next;
                        });
                      }}
                      className={`w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer text-center ${
                        showFurigana ? 'bg-[#FF5E3A] text-white shadow-xs' : 'bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                      }`}
                    >
                      {showFurigana ? 'Enabled' : 'Disabled'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DashboardLayout>
      )}

      {/* Global Dictionary Search Modal */}
      {searchModalOpen && (
        <SearchModal
          onClose={() => {
            setSearchModalOpen(false);
            setSearchInitialQuery('');
          }}
          onNavigate={(view) => handleSelectTab(view)}
          theme={theme}
          initialQuery={searchInitialQuery}
        />
      )}

      {/* Auth Modal (Sign Up & Log In) */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onAuthSuccess={handleAuthSuccess}
        initialMode={authModalMode}
        theme={theme}
      />

    </div>
  );
}

export default App;
