import React, { useState, useEffect } from 'react';
import { Search, Volume2, X, Sparkles } from 'lucide-react';
import { api } from '../services/api';
import audio from '../utils/audio';

interface KanjiExplorerViewProps {
  theme: 'dark' | 'light';
}

export const KanjiExplorerView: React.FC<KanjiExplorerViewProps> = ({ theme }) => {
  const [kanjiList, setKanjiList] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJlpt, setSelectedJlpt] = useState('N5');
  const [selectedKanji, setSelectedKanji] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadKanji() {
      setLoading(true);
      try {
        const data = await api.getKanji(selectedJlpt, searchQuery);
        if (data.success) {
          setKanjiList(data.kanji);
        }
      } catch (err) {
        console.error('Failed to load kanji:', err);
      } finally {
        setLoading(false);
      }
    }
    loadKanji();
  }, [selectedJlpt, searchQuery]);

  const cardBg = theme === 'dark' ? 'bg-[#17171C] border-slate-800 text-white' : 'bg-white border-slate-200/80 text-[#1A1A1F] shadow-xs';
  const subText = theme === 'dark' ? 'text-slate-400' : 'text-slate-500';

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl font-black font-jp text-[#FF5E3A]">漢字辞典</span>
          <h1 className="text-2xl font-extrabold tracking-tight font-heading">Kanji Explorer & Dictionary</h1>
        </div>
        <p className={`text-sm ${subText}`}>
          Search core JLPT Kanji characters with radicals, stroke counts, Onyomi/Kunyomi, and compound vocabulary.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full sm:max-w-md">
          <Search className="w-4 h-4 text-orange-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by Kanji, English meaning, or reading (e.g. 日, sun, nichi)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-10 pr-4 py-2.5 rounded-2xl border text-sm focus:outline-none focus:border-[#FF5E3A] transition ${
              theme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-orange-200 text-slate-900 focus:ring-2 focus:ring-orange-500/20'
            }`}
          />
        </div>

        {/* JLPT Level Pills */}
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

      {/* Kanji Grid Cards */}
      {selectedJlpt === 'COMING_SOON' ? (
        <div className={`py-16 px-6 rounded-3xl border text-center ${cardBg} max-w-xl mx-auto shadow-sm space-y-4 animate-fade-in`}>
          <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-[#FF5E3A] flex items-center justify-center mx-auto shadow-inner">
            <Sparkles className="w-7 h-7 animate-pulse" />
          </div>
          <h3 className="text-xl font-black font-heading">JLPT N3, N2 & N1 Kanji Coming Soon</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Our academic team is currently preparing the authentic character database, stroke animations, and example sentences for N3, N2, and N1. Please explore our complete N5 and N4 databases!
          </p>
          <div className="pt-2 flex items-center justify-center gap-2">
            <button
              onClick={() => {
                audio.playClick();
                setSelectedJlpt('N5');
              }}
              className="px-4 py-2 rounded-xl bg-[#FF5E3A] text-white text-xs font-bold transition hover:bg-[#E84E29] cursor-pointer"
            >
              Explore JLPT N5 Kanji
            </button>
            <button
              onClick={() => {
                audio.playClick();
                setSelectedJlpt('N4');
              }}
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold transition hover:bg-orange-500/20 cursor-pointer"
            >
              Explore JLPT N4 Kanji
            </button>
          </div>
        </div>
      ) : loading ? (
        <div className="py-16 text-center text-[#FF5E3A] text-sm">Searching Kanji database...</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {kanjiList.map((kanji) => (
            <div
              key={kanji.id}
              onClick={() => {
                audio.playClick();
                setSelectedKanji(kanji);
              }}
              className={`p-3.5 sm:p-5 rounded-2xl border ${cardBg} hover:border-[#FF5E3A]/60 cursor-pointer transition-all duration-150 transform hover:-translate-y-1 flex flex-col items-center justify-between text-center shadow-xs hover:shadow-md group`}
            >
              <span className="text-[10px] sm:text-xs font-bold text-[#FF5E3A] font-mono mb-1">{kanji.jlpt}</span>
              <span className="text-4xl sm:text-5xl font-black font-jp my-1.5 sm:my-2 group-hover:scale-110 group-hover:text-[#FF5E3A] transition-transform">
                {kanji.char}
              </span>
              <div className="w-full">
                <h4 className="font-bold text-xs sm:text-sm leading-tight truncate">{kanji.meaning}</h4>
                <div className="text-[10px] sm:text-[11px] text-orange-500 font-jp truncate mt-1">
                  {kanji.onyomi.join(', ')}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {kanjiList.length === 0 && !loading && (
        <div className="py-16 text-center text-slate-400 text-sm">
          No Kanji found matching "{searchQuery}". Try a different reading or keyword.
        </div>
      )}

      {/* Kanji Detailed Modal */}
      {selectedKanji && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className={`border rounded-3xl p-4 sm:p-6 max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl relative ${cardBg}`}>
            <button
              onClick={() => setSelectedKanji(null)}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-2 rounded-xl hover:bg-orange-100 dark:hover:bg-slate-800 text-slate-400 hover:text-[#FF5E3A] transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-4 sm:gap-5 mb-5 sm:mb-6 pr-8">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-orange-500/20 to-amber-500/20 border-2 border-orange-500/40 flex items-center justify-center shrink-0">
                <span className="text-4xl sm:text-6xl font-black text-[#FF5E3A] font-jp">{selectedKanji.char}</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="px-2 py-0.5 rounded bg-orange-500/15 text-[#FF5E3A] text-xs font-mono font-black border border-orange-500/30">
                    {selectedKanji.jlpt}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">{selectedKanji.strokes} Strokes</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black font-heading leading-tight">{selectedKanji.meaning}</h2>
                <span className="text-xs text-orange-500 font-semibold block mt-0.5">Radical: {selectedKanji.radical}</span>
              </div>
            </div>

            {/* Readings */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-5 sm:mb-6">
              <div className="p-3 sm:p-3.5 rounded-2xl bg-orange-50/40 dark:bg-slate-900/60 border border-orange-100 dark:border-slate-800">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">On'yomi (Chinese)</span>
                <span className="text-xs sm:text-sm font-bold text-[#FF5E3A] font-jp">{selectedKanji.onyomi.join(', ')}</span>
              </div>
              <div className="p-3 sm:p-3.5 rounded-2xl bg-orange-50/40 dark:bg-slate-900/60 border border-orange-100 dark:border-slate-800">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Kun'yomi (Japanese)</span>
                <span className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 font-jp">{selectedKanji.kunyomi.join(', ')}</span>
              </div>
            </div>

            {/* Compound Vocabulary Examples */}
            <div>
              <span className="text-xs font-bold text-orange-500 uppercase tracking-wider block mb-2">Compound Vocabulary</span>
              <div className="space-y-2">
                {selectedKanji.examples.map((ex: any, idx: number) => (
                  <div key={idx} className="p-3 rounded-xl bg-orange-50/30 dark:bg-slate-900/40 border border-orange-100 dark:border-slate-800 flex items-center justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <span className="font-bold font-jp text-sm sm:text-base mr-2">{ex.word}</span>
                      <span className="text-xs text-orange-500 font-jp mr-2">{ex.reading}</span>
                      <span className="text-xs text-slate-600 dark:text-slate-300">({ex.meaning})</span>
                    </div>
                    <button
                      onClick={() => audio.speak(ex.reading ? ex.reading.replace(/\s+/g, '') : ex.word)}
                      className="p-1.5 rounded-lg bg-orange-50 dark:bg-slate-800 text-orange-600 hover:bg-orange-100 cursor-pointer shrink-0"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KanjiExplorerView;
