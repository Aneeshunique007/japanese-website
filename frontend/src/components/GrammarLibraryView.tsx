import React, { useState, useEffect } from 'react';
import { Search, Volume2, FileText, Sparkles } from 'lucide-react';
import { api } from '../services/api';
import { clientCache } from '../services/cacheService';
import audio from '../utils/audio';

interface GrammarLibraryViewProps {
  theme: 'dark' | 'light';
  showFurigana: boolean;
}

export const GrammarLibraryView: React.FC<GrammarLibraryViewProps> = ({ theme, showFurigana }) => {
  const [grammarList, setGrammarList] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJlpt, setSelectedJlpt] = useState('N5');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGrammar() {
      const cacheKey = `grammar_${selectedJlpt}_${searchQuery.trim()}`;
      const cached = clientCache.get<any[]>(cacheKey);
      if (cached && cached.length > 0) {
        setGrammarList(cached);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const data = await api.getGrammar(selectedJlpt, searchQuery);
        if (data && data.success && Array.isArray(data.grammar)) {
          clientCache.set(cacheKey, data.grammar, 60);
          setGrammarList(data.grammar);
        } else {
          setGrammarList([]);
        }
      } catch (err) {
        console.error('Failed to load grammar:', err);
        setGrammarList([]);
      } finally {
        setLoading(false);
      }
    }
    loadGrammar();
  }, [selectedJlpt, searchQuery]);

  const cardBg = theme === 'dark' ? 'bg-[#17171C] border-slate-800 text-white' : 'bg-white border-slate-200/80 text-[#1A1A1F] shadow-xs';
  const subText = theme === 'dark' ? 'text-slate-400' : 'text-slate-500';

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <FileText className="w-6 h-6 text-[#FF5E3A]" />
          <h1 className="text-2xl font-extrabold tracking-tight font-heading">Japanese Grammar Reference Library</h1>
        </div>
        <p className={`text-sm ${subText}`}>
          Comprehensive catalog of Japanese grammatical patterns, structural formulas, and example sentences by JLPT level.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:max-w-md">
          <Search className="w-4 h-4 text-orange-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search grammar pattern or meaning (e.g. kudasai, must, can)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-10 pr-4 py-2.5 rounded-2xl border text-sm focus:outline-none focus:border-[#FF5E3A] transition ${
              theme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-orange-200 text-slate-900 focus:ring-2 focus:ring-orange-500/20'
            }`}
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 no-scrollbar touch-pan-x whitespace-nowrap">
          {[
            { id: 'N5', label: 'JLPT N5' },
            { id: 'N4', label: 'JLPT N4' },
            { id: 'COMING_SOON', label: 'Coming Soon' }
          ].map((lvl) => (
            <button
              key={lvl.id}
              onClick={() => {
                audio.playClick();
                setSelectedJlpt(lvl.id);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition border cursor-pointer shrink-0 ${
                selectedJlpt === lvl.id
                  ? 'bg-[#FF5E3A] border-[#FF5E3A] text-white shadow-sm shadow-orange-500/30'
                  : theme === 'dark'
                  ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  : 'bg-white border-orange-100 text-slate-600 hover:text-[#FF5E3A]'
              }`}
            >
              {lvl.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grammar Cards List */}
      {selectedJlpt === 'COMING_SOON' ? (
        <div className={`py-16 px-6 rounded-3xl border text-center ${cardBg} max-w-xl mx-auto shadow-sm space-y-4 animate-fade-in`}>
          <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-[#FF5E3A] flex items-center justify-center mx-auto shadow-inner">
            <Sparkles className="w-7 h-7 animate-pulse" />
          </div>
          <h3 className="text-xl font-black font-heading">JLPT N3, N2 & N1 Grammar Coming Soon</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Our academic team is currently curating authentic grammatical rules, formulas, and native audio for N3, N2, and N1. Please explore our complete N5 and N4 grammar libraries!
          </p>
          <div className="pt-2 flex items-center justify-center gap-2">
            <button
              onClick={() => {
                audio.playClick();
                setSelectedJlpt('N5');
              }}
              className="px-4 py-2 rounded-xl bg-[#FF5E3A] text-white text-xs font-bold transition hover:bg-[#E84E29] cursor-pointer"
            >
              Study JLPT N5 Grammar
            </button>
            <button
              onClick={() => {
                audio.playClick();
                setSelectedJlpt('N4');
              }}
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold transition hover:bg-orange-500/20 cursor-pointer"
            >
              Study JLPT N4 Grammar
            </button>
          </div>
        </div>
      ) : loading ? (
        <div className="py-16 text-center text-[#FF5E3A] text-sm">Searching grammar library...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {grammarList.map((g) => (
            <div
              key={g.id}
              className={`p-4 sm:p-6 rounded-2xl sm:rounded-3xl border ${cardBg} space-y-3.5 sm:space-y-4 shadow-xs hover:border-[#FF5E3A]/50 transition`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-orange-500/15 text-[#FF5E3A] border border-orange-500/30 shrink-0">
                    {g.jlpt}
                  </span>
                  <span className="text-sm sm:text-base font-extrabold font-heading">{g.title}</span>
                </div>
                <span className="text-xs font-bold font-jp text-orange-500 shrink-0">{g.japaneseTitle}</span>
              </div>

              {/* Formula Badge */}
              <div className={`p-2.5 sm:p-3 rounded-xl border font-mono text-xs font-bold break-words ${
                theme === 'dark' ? 'bg-[#18181F] border-slate-800 text-orange-300' : 'bg-orange-50/60 border-orange-100 text-orange-950'
              }`}>
                Formula: {g.structure}
              </div>

              <p className={`text-xs sm:text-sm ${subText} leading-relaxed`}>
                {g.explanation}
              </p>

              {/* Example Sentences */}
              <div className="space-y-2 pt-2 border-t border-orange-100 dark:border-slate-800">
                <span className="text-[11px] font-bold text-orange-500 uppercase tracking-wider block">Example Sentences</span>
                {g.examples.map((ex: any, exIdx: number) => (
                  <div key={exIdx} className="p-3 rounded-xl bg-orange-50/30 dark:bg-slate-900/50 border border-orange-100 dark:border-slate-800 flex items-center justify-between gap-2.5">
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm font-bold font-jp break-words">
                        {showFurigana ? ex.furigana : ex.japanese}
                      </div>
                      <div className="text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 mt-0.5 break-words">{ex.english}</div>
                    </div>
                    <button
                      onClick={() => audio.speak(ex.furigana ? ex.furigana.replace(/\s+/g, '') : ex.japanese)}
                      className="p-2 rounded-xl bg-orange-500/15 text-[#FF5E3A] hover:bg-orange-500/25 shrink-0 cursor-pointer"
                      title="Pronounce example sentence"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {grammarList.length === 0 && !loading && (
        <div className="py-16 text-center text-slate-400 text-sm">
          No grammar rules found matching "{searchQuery}".
        </div>
      )}
    </div>
  );
};

export default GrammarLibraryView;
