import React, { useState, useEffect, useRef } from 'react';
import {
  Mic,
  MicOff,
  Volume2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  BookOpen,
  UserCheck,
  Award,
  Play,
  Copy,
  Check,
  Sliders,
  HelpCircle,
  Flame
} from 'lucide-react';
import confetti from 'canvas-confetti';
import audio from '../utils/audio';
import {
  SPEAKING_PARTICLES_DATA,
  ParticleSpeakingLesson,
  SpeakingSentence,
  DEFAULT_SELF_INTRO_PROFILE,
  SelfIntroProfile,
  generateSelfIntroSentences,
  SelfIntroSentence
} from '../data/speakingParticlesData';

import {
  type SpeakingSession,
  LEGACY_INTRO_KEY,
  LEGACY_PARTICLES_KEY,
  introKeyFor,
  particlesKeyFor,
  introProgressKeyFor,
  getCurrentUserId,
  loadJson,
  saveJson,
  loadSession,
  saveSession,
  readUserScoped,
  findNextUnmastered,
  resolveResumeIndex,
  nextUnmasteredAfter,
  markParticleMastered,
  markIntroMastered
} from '../utils/speakingProgress';

interface SpeakingViewProps {
  theme: 'dark' | 'light';
  showFurigana?: boolean;
  onGainXp?: (amount: number) => void;
}

// Helper to normalize Japanese text for speech recognition comparison
function normalizeJapanese(text: string): string {
  return text
    .replace(/[、。！？\s.,!?]/g, '')
    .replace(/[\u30a1-\u30f6]/g, (match) => {
      // Katakana to Hiragana conversion for robust phonetic matching
      const chr = match.charCodeAt(0) - 0x60;
      return String.fromCharCode(chr);
    })
    .toLowerCase();
}

function calculateSpeechSimilarity(spoken: string, target: string): number {
  const normSpoken = normalizeJapanese(spoken);
  const normTarget = normalizeJapanese(target);

  if (!normSpoken) return 0;
  if (normSpoken === normTarget) return 100;
  if (normTarget.includes(normSpoken) || normSpoken.includes(normTarget)) {
    const ratio = Math.min(normSpoken.length, normTarget.length) / Math.max(normSpoken.length, normTarget.length);
    return Math.round(ratio * 95);
  }

  // Levenshtein distance
  const track = Array(normTarget.length + 1).fill(null).map(() =>
    Array(normSpoken.length + 1).fill(null)
  );
  for (let i = 0; i <= normTarget.length; i += 1) track[i][0] = i;
  for (let j = 0; j <= normSpoken.length; j += 1) track[0][j] = j;
  for (let i = 1; i <= normTarget.length; i += 1) {
    for (let j = 1; j <= normSpoken.length; j += 1) {
      const indicator = normTarget[i - 1] === normSpoken[j - 1] ? 0 : 1;
      track[i][j] = Math.min(
        track[i - 1][j] + 1,
        track[i][j - 1] + 1,
        track[i - 1][j - 1] + indicator
      );
    }
  }
  const distance = track[normTarget.length][normSpoken.length];
  const maxLen = Math.max(normTarget.length, normSpoken.length);
  const sim = Math.max(0, Math.round((1 - distance / maxLen) * 100));
  return sim;
}

export const SpeakingView: React.FC<SpeakingViewProps> = ({
  theme,
  onGainXp
}) => {
  const [userId] = useState<string>(() => getCurrentUserId());
  const [initialSession] = useState<Partial<SpeakingSession>>(() => loadSession());
  const [activeMode, setActiveMode] = useState<'particles' | 'self-intro'>(
    initialSession.activeMode === 'self-intro' ? 'self-intro' : 'particles'
  );

  // Particle practice state
  const [completedSentences, setCompletedSentences] = useState<Record<string, number[]>>(() => {
    try {
      const saved = readUserScoped(particlesKeyFor(getCurrentUserId()), LEGACY_PARTICLES_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [selectedParticleId, setSelectedParticleId] = useState<string>(() => {
    const id = initialSession.selectedParticleId;
    return id && SPEAKING_PARTICLES_DATA.some((p) => p.id === id) ? id : 'wa';
  });
  // Resume on the saved sentence, or the first one not yet mastered
  const [sentenceIndex, setSentenceIndex] = useState<number>(() => {
    const pid = initialSession.selectedParticleId && SPEAKING_PARTICLES_DATA.some((p) => p.id === initialSession.selectedParticleId)
      ? initialSession.selectedParticleId
      : 'wa';
    const particle = SPEAKING_PARTICLES_DATA.find((p) => p.id === pid) || SPEAKING_PARTICLES_DATA[0];
    const done = loadJson<Record<string, number[]>>(particlesKeyFor(getCurrentUserId()), {})[particle.id] || [];
    return resolveResumeIndex(particle.sentences, initialSession.sentenceIndex, (s) => done.includes(s.id));
  });
  // Self-intro sentences spoken correctly (keyed by Japanese text so edited answers reset naturally)
  const [completedIntro, setCompletedIntro] = useState<string[]>(() =>
    loadJson<string[]>(introProgressKeyFor(getCurrentUserId()), [])
  );

  // Speech Recognition state
  const [isListening, setIsListening] = useState<boolean>(false);
  const [spokenTranscript, setSpokenTranscript] = useState<string>('');
  const [speechScore, setSpeechScore] = useState<number | null>(null);
  const [isSuccessFeedback, setIsSuccessFeedback] = useState<boolean>(false);
  const [speechRate, setSpeechRate] = useState<number>(0.9);
  const [speechSupported, setSpeechSupported] = useState<boolean>(true);

  // Self Intro state
  const [selfIntroProfile, setSelfIntroProfile] = useState<SelfIntroProfile>(() => {
    try {
      const saved = readUserScoped(introKeyFor(getCurrentUserId()), LEGACY_INTRO_KEY);
      return saved ? { ...DEFAULT_SELF_INTRO_PROFILE, ...JSON.parse(saved) } : DEFAULT_SELF_INTRO_PROFILE;
    } catch {
      return DEFAULT_SELF_INTRO_PROFILE;
    }
  });
  // Open the questionnaire automatically only if this user has never saved answers
  const [isEditingProfile, setIsEditingProfile] = useState<boolean>(() => {
    try {
      return !localStorage.getItem(introKeyFor(getCurrentUserId()));
    } catch {
      return false;
    }
  });
  const [selfIntroIndex, setSelfIntroIndex] = useState<number>(() => {
    const sentences = generateSelfIntroSentences(
      { ...DEFAULT_SELF_INTRO_PROFILE, ...loadJson<Partial<SelfIntroProfile>>(introKeyFor(getCurrentUserId()), {}) }
    );
    const done = loadJson<string[]>(introProgressKeyFor(getCurrentUserId()), []);
    return resolveResumeIndex(sentences, initialSession.selfIntroIndex, (s) => done.includes(s.japanese));
  });
  const [copiedIntro, setCopiedIntro] = useState<boolean>(false);

  const recognitionRef = useRef<any>(null);

  // Live refs so delayed callbacks (auto-advance after success) see the latest progress
  const completedSentencesRef = useRef(completedSentences);
  completedSentencesRef.current = completedSentences;
  const completedIntroRef = useRef(completedIntro);
  completedIntroRef.current = completedIntro;

  // Active particle and sentence
  const currentParticle: ParticleSpeakingLesson =
    SPEAKING_PARTICLES_DATA.find((p) => p.id === selectedParticleId) || SPEAKING_PARTICLES_DATA[0];
  const currentSentence: SpeakingSentence =
    currentParticle.sentences[sentenceIndex] || currentParticle.sentences[0];

  // Self intro sentences
  const introSentences: SelfIntroSentence[] = generateSelfIntroSentences(selfIntroProfile);
  const currentIntroSentence: SelfIntroSentence = introSentences[selfIntroIndex] || introSentences[0];

  // Persist where the user is so they resume here after logging back in
  useEffect(() => {
    saveSession(userId, { activeMode, selectedParticleId, sentenceIndex, selfIntroIndex });
  }, [userId, activeMode, selectedParticleId, sentenceIndex, selfIntroIndex]);

  // Track whether the user manually stopped the mic on the current sentence
  const userStoppedRef = useRef<boolean>(false);

  // Initialize Speech Recognition once
  useEffect(() => {
    const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRec) {
      setSpeechSupported(false);
      return;
    }
    try {
      const recognizer = new SpeechRec();
      recognizer.continuous = false;
      recognizer.interimResults = true;
      recognizer.lang = 'ja-JP';

      recognizer.onstart = () => {
        setIsListening(true);
        setSpokenTranscript('');
        setSpeechScore(null);
        setIsSuccessFeedback(false);
      };

      recognizer.onresult = (event: any) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        setSpokenTranscript(transcript);
        if (event.results[0].isFinal) {
          evaluateSpokenSpeech(transcript);
        }
      };

      recognizer.onerror = (e: any) => {
        console.warn('Speech recognition error:', e.error);
        setIsListening(false);
      };

      recognizer.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognizer;
    } catch (e) {
      console.warn('Could not initialize Speech Recognition:', e);
      setSpeechSupported(false);
    }
    return () => {
      try { recognitionRef.current?.abort(); } catch {}
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-start mic whenever the sentence changes (unless user stopped it manually)
  useEffect(() => {
    if (!speechSupported || !recognitionRef.current || (activeMode === 'self-intro' && isEditingProfile)) return;
    userStoppedRef.current = false;
    // Small delay to let the browser finish any in-progress recognition session
    const t = setTimeout(() => {
      if (userStoppedRef.current) return;
      try {
        recognitionRef.current.start();
      } catch {
        try { recognitionRef.current.stop(); } catch {}
        setTimeout(() => {
          if (!userStoppedRef.current) {
            try { recognitionRef.current.start(); } catch {}
          }
        }, 300);
      }
    }, 400);
    return () => {
      clearTimeout(t);
      try { recognitionRef.current?.abort(); } catch {}
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeMode, selectedParticleId, sentenceIndex, selfIntroIndex, isEditingProfile]);

  // Evaluate speech against the current target sentence
  const evaluateSpokenSpeech = (transcript: string) => {
    const target = activeMode === 'particles' ? currentSentence.japanese : currentIntroSentence.japanese;
    const score = calculateSpeechSimilarity(transcript, target);
    setSpeechScore(score);

    if (score >= 65) {
      // Good speech recognition match!
      audio.playSuccess();
      setIsSuccessFeedback(true);
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });

      if (onGainXp) {
        onGainXp(20);
      }

      if (activeMode === 'particles') {
        saveParticleProgress(currentParticle.id, currentSentence.id);
      } else {
        saveIntroProgress(currentIntroSentence.japanese);
      }
      // Stay on this sentence — the learner moves on by pressing Next
    }
  };

  const saveParticleProgress = (particleId: string, sId: number) => {
    const prev = completedSentencesRef.current;
    const next = markParticleMastered(prev, particleId, sId);
    if (next === prev) return;
    completedSentencesRef.current = next;
    saveJson(particlesKeyFor(userId), next);
    setCompletedSentences(next);
  };

  const saveIntroProgress = (japanese: string) => {
    const prev = completedIntroRef.current;
    const next = markIntroMastered(prev, japanese);
    if (next === prev) return;
    completedIntroRef.current = next;
    saveJson(introProgressKeyFor(userId), next);
    setCompletedIntro(next);
  };

  const advanceToNextUnmastered = () => {
    audio.playClick();
    // Stop any in-progress recognition; the auto-start effect fires fresh on the new sentence
    userStoppedRef.current = false;
    try { recognitionRef.current?.abort(); } catch {}
    setSpokenTranscript('');
    setSpeechScore(null);
    setIsSuccessFeedback(false);

    if (activeMode === 'particles') {
      const done = completedSentencesRef.current[currentParticle.id] || [];
      const next = nextUnmasteredAfter(currentParticle.sentences, sentenceIndex, (s) => done.includes(s.id));
      if (next === -1) {
        confetti({ particleCount: 120, spread: 100 });
      } else {
        setSentenceIndex(next);
      }
    } else {
      const done = completedIntroRef.current;
      const next = nextUnmasteredAfter(introSentences, selfIntroIndex, (s) => done.includes(s.japanese));
      if (next === -1) {
        confetti({ particleCount: 120, spread: 100 });
      } else {
        setSelfIntroIndex(next);
      }
    }
  };

  const handleStartSpeaking = () => {
    if (!speechSupported || !recognitionRef.current) {
      alert('Speech Recognition is not supported on this browser. You can still use the audio listen button and manual progression.');
      return;
    }
    audio.playClick();
    userStoppedRef.current = false;
    setSpeechScore(null);
    setIsSuccessFeedback(false);
    setSpokenTranscript('');
    try {
      recognitionRef.current.start();
    } catch {
      try {
        recognitionRef.current.stop();
        setTimeout(() => recognitionRef.current.start(), 200);
      } catch {}
    }
  };

  const handleStopSpeaking = () => {
    // Mark as user-stopped so the auto-start won't restart it on this sentence
    userStoppedRef.current = true;
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
  };

  const handlePlaySentence = (text: string) => {
    audio.playClick();
    audio.speak(text, speechRate, 1.0);
  };

  const handleNextSentence = () => {
    audio.playClick();
    setSpokenTranscript('');
    setSpeechScore(null);
    setIsSuccessFeedback(false);

    if (activeMode === 'particles') {
      if (sentenceIndex < currentParticle.sentences.length - 1) {
        setSentenceIndex((prev) => prev + 1);
      } else {
        confetti({ particleCount: 80, spread: 80 });
      }
    } else {
      if (selfIntroIndex < introSentences.length - 1) {
        setSelfIntroIndex((prev) => prev + 1);
      } else {
        confetti({ particleCount: 80, spread: 80 });
      }
    }
  };

  const handlePrevSentence = () => {
    audio.playClick();
    setSpokenTranscript('');
    setSpeechScore(null);
    setIsSuccessFeedback(false);

    if (activeMode === 'particles') {
      if (sentenceIndex > 0) setSentenceIndex((prev) => prev - 1);
    } else {
      if (selfIntroIndex > 0) setSelfIntroIndex((prev) => prev - 1);
    }
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    audio.playSuccess();
    localStorage.setItem(introKeyFor(userId), JSON.stringify(selfIntroProfile));
    setIsEditingProfile(false);
    confetti({ particleCount: 35, spread: 50 });
  };

  const handleCopyFullIntro = () => {
    audio.playClick();
    const fullText = introSentences.map((s) => s.japanese).join('\n');
    navigator.clipboard.writeText(fullText);
    setCopiedIntro(true);
    setTimeout(() => setCopiedIntro(false), 2000);
  };

  const completedCount = (completedSentences[currentParticle.id] || []).length;

  return (
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-6 py-4 space-y-6 sm:space-y-8 animate-fade-in">
      {/* Top Header & Mode Switcher */}
      <div className={`p-4 sm:p-6 rounded-3xl border shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 ${
        theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200/80'
      }`}>
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-xs flex items-center gap-1.5">
              <Mic className="w-3.5 h-3.5 animate-pulse" />
              <span>AI Speaking Laboratory</span>
            </span>
            <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
              Speech-to-Text Recognition · ja-JP
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <span>🗣️ Japanese Speaking Practice</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Speak authentic Japanese sentences aloud. Master particles from easy to hard, and build your custom self-introduction.
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 self-stretch md:self-auto shrink-0">
          <button
            type="button"
            onClick={() => {
              audio.playClick();
              setActiveMode('particles');
              setSpokenTranscript('');
              setSpeechScore(null);
            }}
            className={`flex-1 md:flex-none px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer flex items-center justify-center gap-2 ${
              activeMode === 'particles'
                ? 'bg-[#FF5E3A] text-white shadow-md shadow-orange-500/25'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>50 Particles Sentences</span>
          </button>
          <button
            type="button"
            onClick={() => {
              audio.playClick();
              setActiveMode('self-intro');
              setSpokenTranscript('');
              setSpeechScore(null);
            }}
            className={`flex-1 md:flex-none px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer flex items-center justify-center gap-2 ${
              activeMode === 'self-intro'
                ? 'bg-[#FF5E3A] text-white shadow-md shadow-orange-500/25'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>My Self-Intro (自己紹介)</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MODE 1: PARTICLES SPEAKING MASTERY (50 SENTENCES PER PARTICLE) */}
      {/* ========================================================================= */}
      {activeMode === 'particles' && (
        <div className="space-y-6">
          {/* Particle Selector Pills */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 px-1">
              <span>Select Particle (助詞) to Practice:</span>
              <span className="font-mono text-emerald-500">
                {completedCount} / {currentParticle.sentences.length} Sentences Mastered
              </span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar touch-pan-x">
              {SPEAKING_PARTICLES_DATA.map((p) => {
                const isSelected = p.id === selectedParticleId;
                const pCompleted = (completedSentences[p.id] || []).length;
                return (
                  <button
                    key={p.id}
                    onClick={() => {
                      audio.playClick();
                      setSelectedParticleId(p.id);
                      {
                        const done = completedSentences[p.id] || [];
                        const first = findNextUnmastered(p.sentences, 0, (s) => done.includes(s.id));
                        setSentenceIndex(first === -1 ? 0 : first);
                      }
                      setSpokenTranscript('');
                      setSpeechScore(null);
                    }}
                    className={`px-4 py-2.5 rounded-2xl border transition cursor-pointer flex items-center gap-2.5 shrink-0 ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#FF5E3A] to-[#FF7B5C] text-white border-transparent shadow-md shadow-orange-500/25'
                        : theme === 'dark'
                        ? 'bg-[#17171C] border-slate-800 text-slate-300 hover:border-slate-700'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-base font-black font-jp">{p.particle}</span>
                    <span className="text-xs font-bold font-mono">({p.romaji})</span>
                    {pCompleted > 0 && (
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-emerald-500/15 text-emerald-500'
                      }`}>
                        {pCompleted}/{p.sentences.length}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Particle Explanation & Grammar Usage Card */}
          <div className={`p-4 sm:p-5 rounded-3xl border space-y-3 ${
            theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-orange-50/50 border-orange-200/70'
          }`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${currentParticle.color} text-white flex items-center justify-center font-black text-2xl font-jp shadow-md shadow-orange-500/20`}>
                  {currentParticle.particle}
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <span>{currentParticle.particle} ({currentParticle.romaji})</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono">
                      {currentParticle.name}
                    </span>
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                    {currentParticle.summary}
                  </p>
                </div>
              </div>

              {/* Grammar Formula Pill */}
              <div className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono font-black text-[#FF5E3A] shadow-2xs">
                {currentParticle.grammarRule}
              </div>
            </div>

            {/* Nuance & Key Rules */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
                <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Nuance & Usage Rule:</span>
                </span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {currentParticle.nuanceExplanation}
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80 space-y-1">
                <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 mb-1">
                  <HelpCircle className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Pro Speaking Tips:</span>
                </span>
                <ul className="space-y-1 text-slate-600 dark:text-slate-400">
                  {currentParticle.keyUsagePoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#FF5E3A] font-bold">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* THE SPEAKING EXERCISE CARD */}
          {/* ========================================================================= */}
          <div className={`p-6 sm:p-8 rounded-3xl border relative overflow-hidden transition-all shadow-lg ${
            theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200'
          }`}>
            {/* Top progress indicator & difficulty badge */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Sentence {sentenceIndex + 1} of {currentParticle.sentences.length}
                </span>

                {/* Difficulty Badge (Easy -> Medium -> Hard) */}
                <span className={`text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full font-mono flex items-center gap-1 ${
                  currentSentence.level === 'easy'
                    ? 'bg-emerald-500/15 text-emerald-500 border border-emerald-500/30'
                    : currentSentence.level === 'medium'
                    ? 'bg-amber-500/15 text-amber-500 border border-amber-500/30'
                    : 'bg-rose-500/15 text-rose-500 border border-rose-500/30'
                }`}>
                  <Flame className="w-3 h-3" />
                  <span>{currentSentence.level}</span>
                </span>
              </div>

              {/* Speech Speed Controller */}
              <div className="flex items-center gap-1.5 text-xs font-mono">
                <span className="text-slate-400 text-[11px] hidden sm:inline">Speed:</span>
                <button
                  onClick={() => setSpeechRate(speechRate === 0.9 ? 0.7 : 0.9)}
                  className="px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-800 text-[11px] font-bold hover:text-[#FF5E3A] cursor-pointer"
                  title="Toggle normal or slower pronunciation speed"
                >
                  {speechRate === 0.9 ? '1.0x Normal' : '0.7x Slow 🐢'}
                </button>
              </div>
            </div>

            {/* Sentence Display Area */}
            <div className="space-y-4 text-center my-6">
              {/* Japanese Sentence */}
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white font-jp tracking-wide leading-relaxed">
                {currentSentence.japanese}
              </div>

              {/* Romaji */}
              <div className="text-base sm:text-lg font-bold text-[#FF5E3A] font-mono tracking-tight">
                {currentSentence.romaji}
              </div>

              {/* English Translation */}
              <div className="text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
                "{currentSentence.english}"
              </div>

              {currentSentence.tip && (
                <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                  💡 Tip: {currentSentence.tip}
                </p>
              )}
            </div>

            {/* Interactive Microphone & Action Controls */}
            <div className="flex flex-col items-center justify-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
              {/* Spoken Feedback Display */}
              {spokenTranscript && (
                <div className={`w-full max-w-lg p-3.5 rounded-2xl border text-center transition-all ${
                  isSuccessFeedback
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
                    : 'bg-slate-100 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200'
                }`}>
                  <div className="text-xs font-bold text-slate-400 mb-1">Detected Speech:</div>
                  <div className="text-base font-black font-jp">{spokenTranscript}</div>
                  {speechScore !== null && (
                    <div className="text-xs font-mono font-bold mt-1.5 flex items-center justify-center gap-2">
                      <span>Match Accuracy: {speechScore}%</span>
                      {speechScore >= 65 ? (
                        <span className="text-emerald-500">✅ Great Pronunciation!</span>
                      ) : (
                        <span className="text-amber-500">🔄 Try speaking a bit more clearly</span>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Button Action Bar */}
              <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
                {/* 1. Listen Button */}
                <button
                  type="button"
                  onClick={() => handlePlaySentence(currentSentence.japanese)}
                  className="px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-[#FF5E3A] text-slate-700 dark:text-slate-200 text-xs font-bold transition cursor-pointer flex items-center gap-2 hover:bg-orange-500/10 shadow-xs"
                >
                  <Volume2 className="w-4 h-4 text-[#FF5E3A]" />
                  <span>Listen Audio</span>
                </button>

                {/* 2. Main Mic Speak Button */}
                <button
                  type="button"
                  onClick={isListening ? handleStopSpeaking : handleStartSpeaking}
                  className={`px-6 sm:px-8 py-3.5 rounded-2xl font-black text-sm transition-all duration-200 flex items-center gap-3 cursor-pointer shadow-lg ${
                    isListening
                      ? 'bg-red-500 text-white animate-pulse shadow-red-500/30 scale-105'
                      : 'bg-gradient-to-r from-[#FF5E3A] to-[#FF7B5C] hover:from-[#FF7B5C] hover:to-[#FF5E3A] text-white shadow-orange-500/25 hover:scale-102'
                  }`}
                >
                  {isListening ? (
                    <>
                      <MicOff className="w-5 h-5 animate-bounce" />
                      <span>Listening... (Tap to Stop)</span>
                    </>
                  ) : (
                    <>
                      <Mic className="w-5 h-5" />
                      <span>Press to Speak</span>
                    </>
                  )}
                </button>

                {/* 3. Manual Pass / Next Sentence */}
                <button
                  type="button"
                  onClick={advanceToNextUnmastered}
                  className="px-4 py-3 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs font-bold font-mono transition cursor-pointer border border-emerald-500/30 flex items-center gap-2"
                >
                  <span>Pass & Next</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Stepper Navigation */}
              <div className="flex items-center justify-between w-full pt-4 text-xs font-bold text-slate-400">
                <button
                  onClick={handlePrevSentence}
                  disabled={sentenceIndex === 0}
                  className="px-3 py-1.5 rounded-xl hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <div className="flex items-center gap-1">
                  {currentParticle.sentences.slice(0, 15).map((s, idx) => {
                    const isPassed = (completedSentences[currentParticle.id] || []).includes(s.id);
                    const isCurrent = idx === sentenceIndex;
                    return (
                      <button
                        key={s.id}
                        onClick={() => {
                          setSentenceIndex(idx);
                          setSpokenTranscript('');
                          setSpeechScore(null);
                        }}
                        className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                          isCurrent
                            ? 'bg-[#FF5E3A] scale-125'
                            : isPassed
                            ? 'bg-emerald-500'
                            : 'bg-slate-200 dark:bg-slate-700'
                        }`}
                        title={`Sentence ${idx + 1}`}
                      />
                    );
                  })}
                  {currentParticle.sentences.length > 15 && (
                    <span className="text-[10px] text-slate-400 font-mono ml-1">
                      ...+{currentParticle.sentences.length - 15}
                    </span>
                  )}
                </div>

                <button
                  onClick={handleNextSentence}
                  disabled={sentenceIndex >= currentParticle.sentences.length - 1}
                  className="px-3 py-1.5 rounded-xl hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1"
                >
                  <span>Next Sentence</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODE 2: SELF-INTRODUCTION (自己紹介 JIKOSHOUKAI) */}
      {/* ========================================================================= */}
      {activeMode === 'self-intro' && (
        <div className="space-y-6">
          {/* Header & Questionnaire Edit Toggle */}
          <div className={`p-5 rounded-3xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
            theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-indigo-500/15 text-indigo-500 border border-indigo-500/30">
                  Business & Interview Ready
                </span>
                <span className="text-xs font-mono text-slate-500">
                  7-Step Personalized Self-Introduction
                </span>
              </div>
              <h2 className="text-lg font-black text-slate-900 dark:text-white mt-1">
                私の自己紹介 (My Japanese Self-Introduction)
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Customized for Aneesh at Adami Innovations. Edit your questionnaire details anytime to regenerate sentences.
              </p>
            </div>

            <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end">
              <button
                type="button"
                onClick={() => setIsEditingProfile(!isEditingProfile)}
                className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-[#FF5E3A] text-xs font-bold text-slate-700 dark:text-slate-300 transition cursor-pointer flex items-center gap-1.5 shadow-2xs"
              >
                <Sliders className="w-3.5 h-3.5 text-[#FF5E3A]" />
                <span>{isEditingProfile ? 'Close Questionnaire' : 'Edit My Answers'}</span>
              </button>

              <button
                type="button"
                onClick={handleCopyFullIntro}
                className="px-3.5 py-2 rounded-xl bg-orange-500/15 text-[#FF5E3A] text-xs font-bold font-mono transition cursor-pointer flex items-center gap-1.5"
                title="Copy entire speech script"
              >
                {copiedIntro ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedIntro ? 'Copied!' : 'Copy Script'}</span>
              </button>
            </div>
          </div>

          {/* Interactive Questionnaire Form */}
          {isEditingProfile && (
            <form onSubmit={handleSaveProfile} className={`p-6 rounded-3xl border space-y-4 animate-fade-in ${
              theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FF5E3A]" />
                <span>Self-Introduction Questionnaire (自己紹介アンケート)</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Answer these questions to automatically tailor your authentic polite Japanese self-introduction sentences:
              </p>

              {/* ── SECTION: Basic Identity ── */}
              <p className="text-[11px] font-black uppercase tracking-widest text-[#FF5E3A] pt-1">① Basic Identity (基本情報)</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold">
                <div>
                  <label className="text-slate-700 dark:text-slate-300 block mb-1">Your Name (名前) <span className="text-red-500">*</span></label>
                  <input type="text" value={selfIntroProfile.name}
                    onChange={(e) => setSelfIntroProfile({ ...selfIntroProfile, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    placeholder="Aneesh" required />
                </div>
                <div>
                  <label className="text-slate-700 dark:text-slate-300 block mb-1">Name in Katakana (カタカナ) <span className="text-red-500">*</span></label>
                  <input type="text" value={selfIntroProfile.nameKatakana}
                    onChange={(e) => setSelfIntroProfile({ ...selfIntroProfile, nameKatakana: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    placeholder="アニーシュ" required />
                </div>
                <div>
                  <label className="text-slate-700 dark:text-slate-300 block mb-1">Age (年齢)</label>
                  <input type="text" value={selfIntroProfile.age}
                    onChange={(e) => setSelfIntroProfile({ ...selfIntroProfile, age: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    placeholder="27" />
                </div>
                <div>
                  <label className="text-slate-700 dark:text-slate-300 block mb-1">Gender (性別)</label>
                  <select value={selfIntroProfile.gender}
                    onChange={(e) => setSelfIntroProfile({ ...selfIntroProfile, gender: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                    <option value="male">Male (男性)</option>
                    <option value="female">Female (女性)</option>
                    <option value="prefer not to say">Prefer not to say</option>
                  </select>
                </div>
              </div>

              {/* ── SECTION: Origin ── */}
              <p className="text-[11px] font-black uppercase tracking-widest text-[#FF5E3A] pt-3">② Origin & Hometown (出身地)</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold">
                <div>
                  <label className="text-slate-700 dark:text-slate-300 block mb-1">Country (国) <span className="text-red-500">*</span></label>
                  <input type="text" value={selfIntroProfile.country}
                    onChange={(e) => setSelfIntroProfile({ ...selfIntroProfile, country: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    placeholder="India" required />
                </div>
                <div>
                  <label className="text-slate-700 dark:text-slate-300 block mb-1">Country in Japanese (国名・日本語)</label>
                  <input type="text" value={selfIntroProfile.countryJapanese}
                    onChange={(e) => setSelfIntroProfile({ ...selfIntroProfile, countryJapanese: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    placeholder="インド" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-slate-700 dark:text-slate-300 block mb-1">Hometown / City (出身地・市)</label>
                  <input type="text" value={selfIntroProfile.hometown}
                    onChange={(e) => setSelfIntroProfile({ ...selfIntroProfile, hometown: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    placeholder="Coimbatore, Tamil Nadu" />
                </div>
              </div>

              {/* ── SECTION: Education ── */}
              <p className="text-[11px] font-black uppercase tracking-widest text-[#FF5E3A] pt-3">③ Education (学歴)</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold">
                <div>
                  <label className="text-slate-700 dark:text-slate-300 block mb-1">College / University (大学) <span className="text-red-500">*</span></label>
                  <input type="text" value={selfIntroProfile.college}
                    onChange={(e) => setSelfIntroProfile({ ...selfIntroProfile, college: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    placeholder="RVS College of Engineering" required />
                </div>
                <div>
                  <label className="text-slate-700 dark:text-slate-300 block mb-1">Major / Field of Study (専攻)</label>
                  <input type="text" value={selfIntroProfile.major}
                    onChange={(e) => setSelfIntroProfile({ ...selfIntroProfile, major: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    placeholder="Computer Science Engineering" />
                </div>
                <div>
                  <label className="text-slate-700 dark:text-slate-300 block mb-1">Graduation Year (卒業年度)</label>
                  <input type="text" value={selfIntroProfile.graduationYear}
                    onChange={(e) => setSelfIntroProfile({ ...selfIntroProfile, graduationYear: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    placeholder="2020" />
                </div>
              </div>

              {/* ── SECTION: Work ── */}
              <p className="text-[11px] font-black uppercase tracking-widest text-[#FF5E3A] pt-3">④ Work (仕事)</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold">
                <div>
                  <label className="text-slate-700 dark:text-slate-300 block mb-1">Company Name (会社名) <span className="text-red-500">*</span></label>
                  <input type="text" value={selfIntroProfile.company}
                    onChange={(e) => setSelfIntroProfile({ ...selfIntroProfile, company: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    placeholder="Adami Innovations" required />
                </div>
                <div>
                  <label className="text-slate-700 dark:text-slate-300 block mb-1">Company in Katakana (カタカナ)</label>
                  <input type="text" value={selfIntroProfile.companyKatakana}
                    onChange={(e) => setSelfIntroProfile({ ...selfIntroProfile, companyKatakana: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    placeholder="アダミ・イノベーションズ" />
                </div>
                <div>
                  <label className="text-slate-700 dark:text-slate-300 block mb-1">Company Type (会社の性質)</label>
                  <input type="text" value={selfIntroProfile.companyType}
                    onChange={(e) => setSelfIntroProfile({ ...selfIntroProfile, companyType: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    placeholder="Japanese-based technology company" />
                </div>
                <div>
                  <label className="text-slate-700 dark:text-slate-300 block mb-1">Job Title / Role (職種・役職)</label>
                  <input type="text" value={selfIntroProfile.jobTitle}
                    onChange={(e) => setSelfIntroProfile({ ...selfIntroProfile, jobTitle: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    placeholder="Software Engineer" />
                </div>
                <div>
                  <label className="text-slate-700 dark:text-slate-300 block mb-1">Years at Company (勤務年数)</label>
                  <input type="text" value={selfIntroProfile.workYears}
                    onChange={(e) => setSelfIntroProfile({ ...selfIntroProfile, workYears: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    placeholder="3" />
                </div>
              </div>

              {/* ── SECTION: Family ── */}
              <p className="text-[11px] font-black uppercase tracking-widest text-[#FF5E3A] pt-3">⑤ Family (家族)</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold">
                <div>
                  <label className="text-slate-700 dark:text-slate-300 block mb-1">Total Family Members (家族の人数)</label>
                  <input type="text" value={selfIntroProfile.familyCount}
                    onChange={(e) => setSelfIntroProfile({ ...selfIntroProfile, familyCount: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    placeholder="4" />
                </div>
                <div>
                  <label className="text-slate-700 dark:text-slate-300 block mb-1">Are You Married? (結婚していますか)</label>
                  <select value={selfIntroProfile.isMarried}
                    onChange={(e) => setSelfIntroProfile({ ...selfIntroProfile, isMarried: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                    <option value="yes">Yes, I am married (はい、結婚しています)</option>
                    <option value="no">No, not yet (いいえ、まだです)</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-700 dark:text-slate-300 block mb-1">Children? (子供はいますか)</label>
                  <select value={selfIntroProfile.hasChildren}
                    onChange={(e) => setSelfIntroProfile({ ...selfIntroProfile, hasChildren: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                    <option value="no">No children (子供はいません)</option>
                    <option value="1">1 child (子供が1人います)</option>
                    <option value="2">2 children (子供が2人います)</option>
                    <option value="3">3+ children</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-slate-700 dark:text-slate-300 block mb-1">List Family Members (家族構成)</label>
                  <input type="text" value={selfIntroProfile.familyMembers}
                    onChange={(e) => setSelfIntroProfile({ ...selfIntroProfile, familyMembers: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    placeholder="Mom, Me, Wife, Brother" />
                  <p className="text-[10px] text-slate-400 mt-1">e.g. Mom, Me, Wife, Brother (we'll auto-translate to Japanese humble forms)</p>
                </div>
              </div>

              {/* ── SECTION: Personality & Lifestyle ── */}
              <p className="text-[11px] font-black uppercase tracking-widest text-[#FF5E3A] pt-3">⑥ Personality & Lifestyle (性格・生活)</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold">
                <div>
                  <label className="text-slate-700 dark:text-slate-300 block mb-1">Your Personality (性格)</label>
                  <input type="text" value={selfIntroProfile.personality}
                    onChange={(e) => setSelfIntroProfile({ ...selfIntroProfile, personality: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    placeholder="calm and hardworking" />
                </div>
                <div>
                  <label className="text-slate-700 dark:text-slate-300 block mb-1">Hobbies (趣味)</label>
                  <input type="text" value={selfIntroProfile.hobbies}
                    onChange={(e) => setSelfIntroProfile({ ...selfIntroProfile, hobbies: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    placeholder="technology, learning Japanese, watching anime" />
                </div>
                <div>
                  <label className="text-slate-700 dark:text-slate-300 block mb-1">Favorite Foods (好きな食べ物)</label>
                  <input type="text" value={selfIntroProfile.favoriteFoods}
                    onChange={(e) => setSelfIntroProfile({ ...selfIntroProfile, favoriteFoods: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    placeholder="sushi, ramen, biryani" />
                </div>
                <div>
                  <label className="text-slate-700 dark:text-slate-300 block mb-1">What You Like About Japan (日本の好きなところ)</label>
                  <input type="text" value={selfIntroProfile.favoriteThingsAboutJapan}
                    onChange={(e) => setSelfIntroProfile({ ...selfIntroProfile, favoriteThingsAboutJapan: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    placeholder="culture, technology, and food" />
                </div>
              </div>

              {/* ── SECTION: Japanese Study ── */}
              <p className="text-[11px] font-black uppercase tracking-widest text-[#FF5E3A] pt-3">⑦ Japanese Study (日本語学習)</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold">
                <div>
                  <label className="text-slate-700 dark:text-slate-300 block mb-1">Current JLPT Level (日本語能力試験)</label>
                  <select value={selfIntroProfile.jlptLevel}
                    onChange={(e) => setSelfIntroProfile({ ...selfIntroProfile, jlptLevel: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                    <option value="N5">N5 (Beginner)</option>
                    <option value="N4">N4 (Elementary)</option>
                    <option value="N3">N3 (Intermediate)</option>
                    <option value="N2">N2 (Upper-Intermediate)</option>
                    <option value="N1">N1 (Advanced)</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-700 dark:text-slate-300 block mb-1">How Long Studying Japanese (学習期間)</label>
                  <input type="text" value={selfIntroProfile.studyDuration}
                    onChange={(e) => setSelfIntroProfile({ ...selfIntroProfile, studyDuration: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    placeholder="6 months" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-slate-700 dark:text-slate-300 block mb-1">Why You Study Japanese (勉強の理由)</label>
                  <input type="text" value={selfIntroProfile.studyReason}
                    onChange={(e) => setSelfIntroProfile({ ...selfIntroProfile, studyReason: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                    placeholder="work at a Japanese company and communicate with Japanese colleagues" />
                </div>
              </div>

              {/* ── SECTION: Future Goal ── */}
              <p className="text-[11px] font-black uppercase tracking-widest text-[#FF5E3A] pt-3">⑧ Future Goal (将来の目標)</p>
              <div className="text-xs font-bold">
                <label className="text-slate-700 dark:text-slate-300 block mb-1">What is your future goal? (将来の夢・目標)</label>
                <input type="text" value={selfIntroProfile.futureGoal}
                  onChange={(e) => setSelfIntroProfile({ ...selfIntroProfile, futureGoal: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                  placeholder="become fluent in Japanese and work in Japan someday" />
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800">
                <p className="text-[10px] text-slate-400"><span className="text-red-500">*</span> Required fields. All other fields generate bonus sentences.</p>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF5E3A] to-[#FF7B5C] hover:from-[#FF7B5C] hover:to-[#FF5E3A] text-white text-xs font-black shadow-md shadow-orange-500/20 cursor-pointer transition flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Save & Generate All Sentences 🚀
                </button>
              </div>
            </form>
          )}

          {/* Step-by-Step Sentence Practice Card */}
          <div className={`p-6 sm:p-8 rounded-3xl border relative overflow-hidden transition-all shadow-lg ${
            theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-xl bg-orange-500/15 text-[#FF5E3A] border border-orange-500/30">
                Step {selfIntroIndex + 1} of {introSentences.length}: {currentIntroSentence.topic}
              </span>

              {/* Particle Highlight badge */}
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                {currentIntroSentence.particleHighlight}
              </span>
            </div>

            {/* Main Sentence Display */}
            <div className="space-y-4 text-center my-6">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white font-jp tracking-wide leading-relaxed">
                {currentIntroSentence.japanese}
              </div>

              <div className="text-base sm:text-lg font-bold text-[#FF5E3A] font-mono tracking-tight">
                {currentIntroSentence.romaji}
              </div>

              <div className="text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
                "{currentIntroSentence.english}"
              </div>

              {/* Explanation of Sentence Construction */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-xs text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed text-left">
                <span className="font-bold text-slate-900 dark:text-white block mb-0.5">💡 Why this sentence works:</span>
                {currentIntroSentence.explanation}
              </div>
            </div>

            {/* Speaking Controls */}
            <div className="flex flex-col items-center justify-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
              {spokenTranscript && (
                <div className={`w-full max-w-lg p-3.5 rounded-2xl border text-center transition-all ${
                  isSuccessFeedback
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
                    : 'bg-slate-100 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200'
                }`}>
                  <div className="text-xs font-bold text-slate-400 mb-1">Detected Speech:</div>
                  <div className="text-base font-black font-jp">{spokenTranscript}</div>
                  {speechScore !== null && (
                    <div className="text-xs font-mono font-bold mt-1.5 flex items-center justify-center gap-2">
                      <span>Match Accuracy: {speechScore}%</span>
                      {speechScore >= 65 ? (
                        <span className="text-emerald-500">✅ Fluent & Clear!</span>
                      ) : (
                        <span className="text-amber-500">🔄 Try again for a clearer score</span>
                      )}
                    </div>
                  )}
                </div>
              )}

              <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
                <button
                  type="button"
                  onClick={() => handlePlaySentence(currentIntroSentence.japanese)}
                  className="px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-[#FF5E3A] text-slate-700 dark:text-slate-200 text-xs font-bold transition cursor-pointer flex items-center gap-2 hover:bg-orange-500/10 shadow-xs"
                >
                  <Volume2 className="w-4 h-4 text-[#FF5E3A]" />
                  <span>Listen Pronunciation</span>
                </button>

                <button
                  type="button"
                  onClick={isListening ? handleStopSpeaking : handleStartSpeaking}
                  className={`px-6 sm:px-8 py-3.5 rounded-2xl font-black text-sm transition-all duration-200 flex items-center gap-3 cursor-pointer shadow-lg ${
                    isListening
                      ? 'bg-red-500 text-white animate-pulse shadow-red-500/30 scale-105'
                      : 'bg-gradient-to-r from-[#FF5E3A] to-[#FF7B5C] hover:from-[#FF7B5C] hover:to-[#FF5E3A] text-white shadow-orange-500/25 hover:scale-102'
                  }`}
                >
                  {isListening ? (
                    <>
                      <MicOff className="w-5 h-5 animate-bounce" />
                      <span>Listening... (Tap to Stop)</span>
                    </>
                  ) : (
                    <>
                      <Mic className="w-5 h-5" />
                      <span>Speak This Sentence</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={advanceToNextUnmastered}
                  className="px-4 py-3 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs font-bold font-mono transition cursor-pointer border border-emerald-500/30 flex items-center gap-2"
                >
                  <span>Next Sentence</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Step Navigation Dots */}
              <div className="flex items-center justify-between w-full pt-4 text-xs font-bold text-slate-400">
                <button
                  onClick={handlePrevSentence}
                  disabled={selfIntroIndex === 0}
                  className="px-3 py-1.5 rounded-xl hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <div className="flex items-center gap-2">
                  {introSentences.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setSelfIntroIndex(idx);
                        setSpokenTranscript('');
                        setSpeechScore(null);
                      }}
                      className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                        idx === selfIntroIndex
                          ? 'bg-[#FF5E3A] text-white shadow-xs'
                          : completedIntro.includes(s.japanese)
                          ? 'bg-emerald-100 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {completedIntro.includes(s.japanese) ? '✓ ' : ''}Step {idx + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleNextSentence}
                  disabled={selfIntroIndex >= introSentences.length - 1}
                  className="px-3 py-1.5 rounded-xl hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1"
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Full Speech Summary Script */}
          <div className={`p-6 rounded-3xl border space-y-4 ${
            theme === 'dark' ? 'bg-[#17171C] border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-[#FF5E3A]" />
                <span>Full Continuous Self-Introduction (自己紹介 全文)</span>
              </h3>
              <button
                onClick={() => {
                  audio.playClick();
                  const fullText = introSentences.map((s) => s.japanese).join(' ');
                  handlePlaySentence(fullText);
                }}
                className="px-3 py-1.5 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 text-[#FF5E3A] text-xs font-bold transition cursor-pointer flex items-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-[#FF5E3A]" />
                <span>Play Full Speech</span>
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 space-y-3 font-jp text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-200">
              {introSentences.map((s, idx) => (
                <div key={s.id} className="flex items-start gap-2.5">
                  <span className="font-mono text-xs text-[#FF5E3A] font-bold shrink-0 mt-1">
                    {idx + 1}.
                  </span>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">{s.japanese}</div>
                    <div className="text-xs text-[#FF5E3A] font-mono">{s.romaji}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{s.english}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default SpeakingView;
