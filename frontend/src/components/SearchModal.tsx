import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, FileText, BookA } from 'lucide-react';
import { searchAll, SearchResultItem } from '../utils/searchEngine';
import audio from '../utils/audio';

interface SearchModalProps {
  onClose: () => void;
  onNavigate: (view: string, extraData?: any) => void;
  theme: 'dark' | 'light';
  initialQuery?: string;
}

export const SearchModal: React.FC<SearchModalProps> = ({ 
  onClose, 
  onNavigate, 
  theme,
  initialQuery = '' 
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [activeFilter, setActiveFilter] = useState<'all' | 'word' | 'kanji' | 'kana' | 'grammar'>('all');
  const [allResults, setAllResults] = useState<SearchResultItem[]>([]);
  const [searching, setSearching] = useState(false);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Async search with debounce
  useEffect(() => {
    if (!query.trim()) {
      setAllResults([]);
      return;
    }
    setSearching(true);
    const timer = setTimeout(async () => {
      const results = await searchAll(query, 60);
      setAllResults(results);
      setSearching(false);
    }, 250);
    return () => clearTimeout(timer);
  }, [query]);

  const filteredResults = activeFilter === 'all'
    ? allResults
    : allResults.filter((r: SearchResultItem) => r.type === activeFilter);

  const cardBg = theme === 'dark' 
    ? 'bg-[#17171C] border-slate-800 text-white shadow-2xl' 
    : 'bg-white border-slate-200 text-slate-900 shadow-2xl';

  const counts = {
    all: allResults.length,
    word: allResults.filter((r: SearchResultItem) => r.type === 'word').length,
    kanji: allResults.filter((r: SearchResultItem) => r.type === 'kanji').length,
    kana: allResults.filter((r: SearchResultItem) => r.type === 'kana').length,
    grammar: allResults.filter((r: SearchResultItem) => r.type === 'grammar').length,
  };

  const handleSelectResult = (res: SearchResultItem) => {
    audio.playClick();
    onNavigate(res.targetTab, res.rawData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-4 pt-6 sm:pt-20 bg-black/75 backdrop-blur-md animate-fade-in">
      <div 
        className={`w-full max-w-2xl rounded-2xl sm:rounded-3xl border overflow-hidden flex flex-col max-h-[85vh] max-h-[85dvh] ${cardBg}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-3 sm:p-5 border-b border-slate-100 dark:border-slate-800/80 flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 items-center justify-center text-[#FF5E3A] shrink-0">
            <Search className="w-5 h-5" />
          </div>
          <Search className="sm:hidden w-4 h-4 text-[#FF5E3A] shrink-0 ml-1" />
          <input
            type="text"
            autoFocus
            placeholder="Search words, Kanji, Kana, Grammar..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full min-w-0 bg-transparent text-base sm:text-lg font-medium focus:outline-none placeholder:text-slate-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1.5 shrink-0 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-2 shrink-0 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-rose-500/20 hover:text-rose-500 text-slate-400 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Pills */}
        {allResults.length > 0 && (
          <div className="px-3 sm:px-5 py-2.5 border-b border-slate-100 dark:border-slate-800/80 flex items-center gap-2 overflow-x-auto no-scrollbar touch-pan-x whitespace-nowrap text-xs font-bold shrink-0">
            {[
              { id: 'all', label: `All (${counts.all})` },
              { id: 'word', label: `Words (${counts.word})` },
              { id: 'kanji', label: `Kanji (${counts.kanji})` },
              { id: 'kana', label: `Kana (${counts.kana})` },
              { id: 'grammar', label: `Grammar (${counts.grammar})` },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  audio.playClick();
                  setActiveFilter(tab.id as any);
                }}
                className={`px-3 py-1.5 sm:py-1 rounded-full whitespace-nowrap shrink-0 transition cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#FF5E3A] text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Results List */}
        <div className="flex-1 overflow-y-auto overscroll-contain p-3 sm:p-5 space-y-2 sm:space-y-2.5">
          {searching && (
            <div className="py-8 text-center text-sm text-slate-400">
              Searching...
            </div>
          )}

          {!searching && query.trim() && filteredResults.length === 0 && (
            <div className="py-8 sm:py-12 text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-[#FF5E3A] flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <p className="font-bold text-sm text-slate-700 dark:text-slate-300 break-words">
                No matching results found for "{query}"
              </p>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Try searching in English ("eat", "school"), Romaji ("taberu"), or Kanji/Kana ("食べる").
              </p>
            </div>
          )}

          {!query.trim() && (
            <div className="py-8 sm:py-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-[#FF5E3A] flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="font-bold text-sm text-slate-700 dark:text-slate-300">
                  Global Japanese Dictionary &amp; Curriculum Search
                </p>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Instantly lookup over 2,500 vocabulary words, 280+ Kanji characters, Kana, and grammar points across JLPT N5 &amp; N4.
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 pt-2 flex-wrap">
                {['食べる', 'cat', 'arigatou', '水', 'あ', 'から'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => {
                      audio.playClick();
                      setQuery(tag);
                    }}
                    className="px-3 py-1.5 sm:py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800/80 hover:border-orange-400 border border-transparent text-slate-600 dark:text-slate-400 transition cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {filteredResults.map((res: SearchResultItem) => (
            <div
              key={res.id}
              onClick={() => handleSelectResult(res)}
              className="p-3 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 hover:bg-orange-50/50 dark:hover:bg-orange-950/20 border border-slate-100 dark:border-slate-800/80 hover:border-orange-400/50 flex items-center justify-between cursor-pointer transition group"
            >
              <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#FF5E3A] shrink-0 font-bold">
                  {res.type === 'word' && <BookA className="w-5 h-5" />}
                  {res.type === 'kanji' && <span className="font-jp text-lg">{res.japanese}</span>}
                  {res.type === 'kana' && <span className="font-jp text-lg">{res.japanese}</span>}
                  {res.type === 'grammar' && <FileText className="w-5 h-5" />}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm sm:text-base font-jp text-slate-900 dark:text-white group-hover:text-[#FF5E3A] transition-colors truncate">
                      {res.title}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-500/10 text-[#FF5E3A] border border-orange-500/20 whitespace-nowrap shrink-0">
                      {res.badge}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
                    {res.meaning}
                    {res.romaji && <span className="font-mono text-slate-400 ml-1.5">• {res.romaji}</span>}
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#FF5E3A] group-hover:translate-x-0.5 transition shrink-0 ml-2" />
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="px-4 sm:px-5 py-2.5 sm:py-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-center sm:justify-between gap-2 bg-slate-50/50 dark:bg-slate-900/30 shrink-0">
          <span className="text-center sm:text-left"><span className="sm:hidden">Tap</span><span className="hidden sm:inline">Click</span> any item to navigate directly to its table or lesson</span>
          <span className="hidden sm:inline font-mono shrink-0">ESC to close</span>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
