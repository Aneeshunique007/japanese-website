import React, { useState, useRef, useEffect } from 'react';
import { 
  LayoutGrid, 
  BookOpen, 
  GraduationCap, 
  Settings, 
  Search, 
  Sun, 
  Moon, 
  X, 
  Menu, 
  LogOut, 
  UserPlus, 
  Languages, 
  BookMarked, 
  BookA, 
  Puzzle,
  Home,
  ChevronDown,
  Sparkles,
  Zap
} from 'lucide-react';
import audio from '../utils/audio';
import { UserProfile } from '../services/api';
import { searchAll } from '../utils/searchEngine';
import { DailyMasteryDrillModal } from './DailyMasteryDrillModal';
import { studyScheduleStore } from '../utils/studyScheduleStore';

interface DashboardLayoutProps {
  activeTab: string;
  onSelectTab: (tab: string, extraId?: string) => void;
  onBackToHome: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenSearch: (initialQuery?: string) => void;
  showFurigana: boolean;
  onToggleFurigana: () => void;
  currentUser?: UserProfile | null;
  leaderboardList?: any[];
  onLogout?: () => void;
  onSwitchAccount?: () => void;
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  activeTab,
  onSelectTab,
  onBackToHome,
  theme,
  onToggleTheme,
  onOpenSearch,
  showFurigana,
  onToggleFurigana,
  currentUser,
  onLogout,
  onSwitchAccount,
  children
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [showDrillModal, setShowDrillModal] = useState(false);

  // Top Search Bar State
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [liveResults, setLiveResults] = useState<import('../utils/searchEngine').SearchResultItem[]>([]);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const userDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!searchQuery.trim()) { setLiveResults([]); return; }
    const timer = setTimeout(async () => {
      const results = await searchAll(searchQuery, 6);
      setLiveResults(results);
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(e.target as Node)) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const userXp = currentUser?.xp || 0;
  const userName = currentUser?.name || 'Student';
  const userTitle = currentUser?.title || `JLPT ${currentUser?.targetLevel || 'N5'} Learner`;
  const rawAvatar = currentUser?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80';
  const isImageAvatar = Boolean(rawAvatar && (rawAvatar.startsWith('http://') || rawAvatar.startsWith('https://') || rawAvatar.startsWith('/')));

  const navItems: { id: string; label: string; icon: any; badge?: number | string }[] = [
    { id: 'overview', label: 'Overview', icon: LayoutGrid },
    { id: 'nikki', label: 'Nikki', icon: Sparkles },
    { id: 'courses', label: 'Courses', icon: GraduationCap },
    { id: 'lessons', label: 'Lessons', icon: BookOpen },
    { id: 'quizzes', label: 'Quizzes', icon: Puzzle },
    { id: 'hiragana', label: 'Hiragana', icon: Languages },
    { id: 'katakana', label: 'Katakana', icon: Zap },
    { id: 'kanji', label: 'Kanji', icon: BookMarked },
    { id: 'words', label: 'Words', icon: BookA },
  ];

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors relative overflow-x-hidden selection:bg-[#FF5E3A] selection:text-white ${
      theme === 'dark' ? 'bg-[#0E0E12] text-slate-100' : 'bg-[#FAF7F5] text-[#1A1A1F]'
    }`}>
      
      {/* Soft Warm Radial Glow in Background matching Homepage */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[320px] sm:w-[600px] lg:w-[900px] h-[250px] sm:h-[350px] bg-gradient-to-tr from-[#FF5E3A]/15 via-[#FFA07A]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow"></div>

      {/* TOP STICKY NAVBAR */}
      <header className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors ${
        theme === 'dark' ? 'bg-[#0E0E12]/90 border-slate-800' : 'bg-[#FAF7F5]/90 border-slate-200/80 shadow-xs'
      }`}>
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Left: Brand Logo */}
          <div 
            onClick={() => {
              audio.playClick();
              onBackToHome();
            }}
            className="flex items-center gap-2 sm:gap-2.5 cursor-pointer select-none group shrink-0"
            title="Go to Homepage"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#FF5E3A] flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <span className="font-black text-sm sm:text-base font-jp tracking-tighter">あ</span>
            </div>
            <span className="text-lg sm:text-xl font-extrabold tracking-tight font-heading group-hover:text-[#FF5E3A] transition-colors">
              AniLearn <span className="text-[#FF5E3A] text-[10px] sm:text-xs font-semibold uppercase ml-0.5 tracking-wider hidden xs:inline">日本語</span>
            </span>
          </div>

          {/* Center: Navigation Pill Bar matching Homepage (Desktop XL) */}
          <nav className={`hidden xl:flex items-center p-1.5 rounded-full border text-xs font-semibold shadow-xs ${
            theme === 'dark' ? 'bg-[#17171C]/90 border-slate-800 text-slate-300' : 'bg-white/90 border-slate-200/80 text-slate-600'
          }`}>
            <button 
              onClick={() => {
                audio.playClick();
                onBackToHome();
              }}
              className="px-3.5 py-1.5 rounded-full hover:text-[#FF5E3A] transition cursor-pointer flex items-center gap-1.5"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    audio.playClick();
                    onSelectTab(item.id);
                  }}
                  className={`px-3.5 py-1.5 rounded-full transition cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#1A1A1F] text-white dark:bg-white dark:text-[#1A1A1F] font-bold shadow-xs'
                      : 'hover:text-[#FF5E3A]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="min-w-[16px] px-1.5 h-4 rounded-full bg-[#FF5E3A] text-white text-[9px] font-bold flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls: Search, Furigana, Theme, User Avatar */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            
            {/* Interactive Search Bar (Desktop) */}
            <div ref={searchContainerRef} className="relative hidden md:block w-40 lg:w-56">
              <div 
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs transition ${
                  theme === 'dark' 
                    ? 'bg-[#17171C] border-slate-800 text-slate-200 focus-within:border-orange-500/60 focus-within:ring-2 focus-within:ring-orange-500/20' 
                    : 'bg-white border-slate-200 text-slate-800 focus-within:border-orange-500/60 focus-within:ring-2 focus-within:ring-orange-500/20 shadow-xs'
                }`}
              >
                <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Search dictionary..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchOpen(true);
                  }}
                  onFocus={() => setIsSearchOpen(true)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      onOpenSearch(searchQuery);
                      setIsSearchOpen(false);
                    } else if (e.key === 'Escape') {
                      setIsSearchOpen(false);
                    }
                  }}
                  className="w-full bg-transparent text-xs font-medium focus:outline-none placeholder:text-slate-400"
                />
                {searchQuery ? (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setIsSearchOpen(false);
                    }}
                    className="p-0.5 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                  </button>
                ) : (
                  <kbd 
                    onClick={() => onOpenSearch()}
                    className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-mono text-slate-500 cursor-pointer hover:bg-orange-500/20 hover:text-[#FF5E3A] transition"
                    title="Open Full Search (Cmd+K)"
                  >
                    ⌘K
                  </kbd>
                )}
              </div>

              {/* Instant Dropdown Quick Results */}
              {isSearchOpen && searchQuery.trim() && (
                <div 
                  className={`absolute left-0 right-0 top-full mt-2 rounded-2xl border shadow-2xl overflow-hidden z-50 p-2 space-y-1 backdrop-blur-md animate-fade-in ${
                    theme === 'dark' 
                      ? 'bg-[#17171C]/95 border-slate-800 text-white shadow-black/80' 
                      : 'bg-white/95 border-slate-200 text-slate-900 shadow-xl'
                  }`}
                >
                  {liveResults.length === 0 ? (
                    <div className="p-3 text-center text-xs text-slate-400">
                      No matches found for "{searchQuery}".
                    </div>
                  ) : (
                    <>
                      <div className="px-2 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                        <span>Quick Matches</span>
                        <span className="font-mono font-normal">{liveResults.length} results</span>
                      </div>
                      {liveResults.map((res) => (
                        <div
                          key={res.id}
                          onClick={() => {
                            audio.playClick();
                            onSelectTab(res.targetTab);
                            setIsSearchOpen(false);
                            setSearchQuery('');
                          }}
                          className="px-2.5 py-1.5 rounded-xl hover:bg-orange-500/10 hover:text-[#FF5E3A] flex items-center justify-between cursor-pointer transition text-xs group"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="font-bold font-jp truncate text-slate-900 dark:text-slate-100 group-hover:text-[#FF5E3A]">
                              {res.title}
                            </span>
                            <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-orange-500/10 text-[#FF5E3A] shrink-0 border border-orange-500/20">
                              {res.badge}
                            </span>
                          </div>
                          <span className="text-[11px] text-slate-400 truncate max-w-[100px] text-right ml-2">
                            {res.meaning}
                          </span>
                        </div>
                      ))}
                      <button
                        onClick={() => {
                          audio.playClick();
                          onOpenSearch(searchQuery);
                          setIsSearchOpen(false);
                        }}
                        className="w-full mt-1 pt-1.5 border-t border-slate-100 dark:border-slate-800/80 text-center text-[11px] font-bold text-[#FF5E3A] hover:underline cursor-pointer py-1 block"
                      >
                        View all results in full search →
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Search Button */}
            <button
              onClick={() => {
                audio.playClick();
                onOpenSearch();
              }}
              className="md:hidden p-1.5 sm:p-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-[#FF5E3A] transition cursor-pointer"
              title="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Furigana Toggle Pill Button */}
            <button
              onClick={() => {
                audio.playClick();
                onToggleFurigana();
              }}
              className={`hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold transition border cursor-pointer ${
                showFurigana
                  ? 'bg-orange-500/15 border-[#FF5E3A] text-[#FF5E3A]'
                  : 'border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-[#FF5E3A]'
              }`}
              title="Toggle Furigana reading hints"
            >
              <span>振仮名 {showFurigana ? 'ON' : 'OFF'}</span>
            </button>

            {/* Theme Switcher Button */}
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

            {/* User Profile Avatar with Dropdown */}
            <div ref={userDropdownRef} className="relative">
              <div 
                onClick={() => {
                  audio.playClick();
                  setUserDropdownOpen(prev => !prev);
                }}
                className="flex items-center gap-1 cursor-pointer select-none p-0.5 sm:p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                title="Account Menu"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden ring-2 ring-[#FF5E3A] flex items-center justify-center bg-orange-500/10 text-sm shrink-0">
                  {isImageAvatar ? (
                    <img className="w-full h-full object-cover" src={rawAvatar} alt={userName} />
                  ) : (
                    <span>{rawAvatar || '⛩️'}</span>
                  )}
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
              </div>

              {/* User Dropdown Menu */}
              {userDropdownOpen && (
                <div className={`absolute right-0 top-11 w-52 sm:w-56 rounded-2xl border shadow-xl p-3 z-50 animate-fade-in ${
                  theme === 'dark' ? 'bg-[#17171C] border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-[#1A1A1F]'
                }`}>
                  <div className="pb-3 border-b border-slate-100 dark:border-slate-800 px-2">
                    <div className="font-extrabold text-sm truncate">{userName}</div>
                    <div className="text-[11px] text-slate-400 truncate">{currentUser?.email || 'Student Account'}</div>
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-orange-500/10 text-[#FF5E3A]">
                        JLPT {currentUser?.targetLevel || 'N5'} Track
                      </span>
                      <span className="text-[10px] font-mono text-amber-500 font-bold">
                        {userXp} XP
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 space-y-1">
                    <button
                      onClick={() => {
                        audio.playClick();
                        setUserDropdownOpen(false);
                        onSelectTab('settings');
                      }}
                      className="w-full flex items-center gap-2 px-2.5 py-2 rounded-xl text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                    >
                      <Settings className="w-4 h-4 text-slate-400" />
                      <span>Account Settings</span>
                    </button>

                    <button
                      onClick={() => {
                        audio.playClick();
                        setUserDropdownOpen(false);
                        onBackToHome();
                      }}
                      className="w-full flex items-center gap-2 px-2.5 py-2 rounded-xl text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                    >
                      <Home className="w-4 h-4 text-slate-400" />
                      <span>AniLearn Home</span>
                    </button>

                    {onSwitchAccount && (
                      <button
                        onClick={() => {
                          audio.playClick();
                          setUserDropdownOpen(false);
                          onSwitchAccount();
                        }}
                        className="w-full flex items-center gap-2 px-2.5 py-2 rounded-xl text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer text-indigo-500"
                      >
                        <UserPlus className="w-4 h-4" />
                        <span>Switch Account</span>
                      </button>
                    )}

                    {onLogout && (
                      <button
                        onClick={() => {
                          audio.playClick();
                          setUserDropdownOpen(false);
                          onLogout();
                        }}
                        className="w-full flex items-center gap-2 px-2.5 py-2 rounded-xl text-xs font-semibold hover:bg-rose-500/10 text-rose-500 transition cursor-pointer"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Log Out</span>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Hamburger Drawer Trigger */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="p-1.5 sm:p-2 rounded-xl border border-slate-200 dark:border-slate-800 xl:hidden text-slate-600 dark:text-slate-300 hover:text-[#FF5E3A] cursor-pointer"
              title="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>

          </div>

        </div>

        {/* Secondary Horizontal Scrollable Pill Bar on Tablet & Mobile */}
        <div className="xl:hidden w-full border-t border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-[#121217]/50 backdrop-blur-xs px-2.5 sm:px-4 py-1.5 sm:py-2 overflow-x-auto no-scrollbar flex items-center gap-1.5 touch-pan-x">
          <button 
            onClick={() => {
              audio.playClick();
              onBackToHome();
            }}
            className="px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold text-slate-500 hover:text-[#FF5E3A] shrink-0 transition flex items-center gap-1 cursor-pointer"
          >
            <Home className="w-3 h-3" />
            <span>Home</span>
          </button>
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  audio.playClick();
                  onSelectTab(item.id);
                }}
                className={`px-2.5 sm:px-3 py-1 rounded-full text-xs transition shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#1A1A1F] text-white dark:bg-white dark:text-[#1A1A1F] font-bold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-[#FF5E3A]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)} 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs xl:hidden"
        />
      )}

      {/* Mobile Menu Drawer (Slide over from right) */}
      <div className={`fixed top-0 right-0 z-50 h-screen w-72 max-w-[85vw] border-l p-5 sm:p-6 flex flex-col justify-between transition-transform duration-300 xl:hidden overflow-y-auto ${
        theme === 'dark' ? 'bg-[#17171C] border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
      } ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div>
          <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#FF5E3A] flex items-center justify-center text-white">
                <span className="font-black text-sm font-jp">あ</span>
              </div>
              <span className="text-lg font-black font-heading">AniLearn</span>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links in Mobile Menu */}
          <div className="py-4 space-y-1">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
              Navigation
            </div>
            <button
              onClick={() => {
                audio.playClick();
                setMobileMenuOpen(false);
                onBackToHome();
              }}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer"
            >
              <Home className="w-4 h-4 text-slate-400" />
              <span>AniLearn Home</span>
            </button>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    audio.playClick();
                    onSelectTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
                    isActive
                      ? 'bg-[#FF5E3A]/15 text-[#FF5E3A] font-extrabold'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#FF5E3A]' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="min-w-[18px] px-1.5 h-4.5 rounded-full bg-[#FF5E3A] text-white text-[9px] font-bold flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Furigana Toggle */}
          <div className="pt-2 px-3">
            <button
              onClick={() => {
                audio.playClick();
                onToggleFurigana();
              }}
              className={`w-full py-2 px-3 rounded-xl text-xs font-bold transition border cursor-pointer flex items-center justify-between ${
                showFurigana
                  ? 'bg-orange-500/15 border-[#FF5E3A] text-[#FF5E3A]'
                  : 'border-slate-200 dark:border-slate-800 text-slate-500'
              }`}
            >
              <span>Furigana Readings</span>
              <span>{showFurigana ? 'ON' : 'OFF'}</span>
            </button>
          </div>
        </div>

        {/* Bottom User Area */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
          <div className="flex items-center gap-2.5 px-3 py-2">
            <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-[#FF5E3A] flex items-center justify-center bg-orange-500/10 text-sm shrink-0">
              {isImageAvatar ? (
                <img className="w-full h-full object-cover" src={rawAvatar} alt={userName} />
              ) : (
                <span>{rawAvatar || '⛩️'}</span>
              )}
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold truncate">{userName}</div>
              <div className="text-[10px] text-slate-400 truncate">{userTitle}</div>
            </div>
          </div>
          {onLogout && (
            <button
              onClick={() => {
                audio.playClick();
                setMobileMenuOpen(false);
                onLogout();
              }}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-rose-500 hover:bg-rose-500/10 transition cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>Log Out</span>
            </button>
          )}
        </div>
      </div>

      {/* FULL-WIDTH MAIN CONTENT */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 transition-all">
        {children}
      </main>

      {/* Global Practice Drill Modal */}
      {showDrillModal && (
        <DailyMasteryDrillModal
          isOpen={showDrillModal}
          day={studyScheduleStore.getCurrentDay()}
          theme={theme}
          onClose={() => setShowDrillModal(false)}
          onGainXp={_xp => { /* xp handled by parent if needed */ }}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
