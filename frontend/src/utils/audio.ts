// Web Audio Synthesizer & Speech Synthesis Utilities in TypeScript

class AudioManager {
  private audioCtx: AudioContext | null = null;
  private isMuted: boolean = false;
  private synth: SpeechSynthesis | null = typeof window !== 'undefined' ? window.speechSynthesis : null;
  private japaneseVoice: SpeechSynthesisVoice | null = null;

  constructor() {
    this.initVoices();
  }

  private getAudioContext(): AudioContext | null {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        this.audioCtx = new AudioCtxClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  private initVoices(): void {
    if (!this.synth) return;
    const loadVoices = () => {
      const voices = this.synth?.getVoices() || [];
      if (voices.length === 0) return;

      const jaVoices = voices.filter(
        (v) => v.lang === 'ja-JP' || v.lang.startsWith('ja') || v.name.toLowerCase().includes('japanese') || v.lang.includes('ja')
      );

      // 1. Google Japanese Voice (Chrome's native female voice - 100% audible in macOS Chrome sandbox)
      const googleVoice = jaVoices.find((v) => v.name.includes('Google') || v.name.includes('日本語'));

      // 2. Safari / Edge female voices
      const femaleKeywords = ['kyoko', 'nanami', 'ayumi', 'haruka', 'sayaka', 'mei', 'yuki', 'aoi', 'shiori', 'female'];
      const femaleVoice = jaVoices.find((v) => femaleKeywords.some((kw) => v.name.toLowerCase().includes(kw)));

      // 3. Fallback to standard ja-JP voice
      const defaultJa = voices.find((v) => v.lang === 'ja-JP') || jaVoices[0] || null;

      this.japaneseVoice = googleVoice || femaleVoice || defaultJa;
    };

    loadVoices();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = loadVoices;
    }
  }

  public setMuted(muted: boolean): void {
    this.isMuted = muted;
  }

  // Japanese Speech Synthesis (TTS) - Clean, direct, synchronous execution
  public speak(text: string, rate: number = 0.9, pitch: number = 1.0): void {
    if (this.isMuted || !this.synth || !text) return;

    try {
      if (this.synth.paused) {
        this.synth.resume();
      }
      this.synth.cancel(); // Stop any pending speech
      if (this.synth.paused) {
        this.synth.resume();
      }

      // Strip parenthetical romaji / English translations like "(yuugata)" or "（koohii）"
      // so speech synthesis only speaks the Japanese reading ONCE without repeating the romaji
      let cleanText = text
        .replace(/[\(（][^()（）]*[a-zA-Z][^()（）]*[\)）]/g, '')
        .trim();

      if (!cleanText) {
        cleanText = text;
      }

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'ja-JP';
      utterance.rate = rate;
      utterance.pitch = pitch;
      utterance.volume = 1.0;

      if (!this.japaneseVoice) {
        this.initVoices();
      }
      if (this.japaneseVoice) {
        utterance.voice = this.japaneseVoice;
      }

      // Retain reference on window to prevent Chrome GC bug from terminating audio mid-playback
      (window as unknown as { _curTTS?: SpeechSynthesisUtterance })._curTTS = utterance;
      utterance.onend = () => {
        (window as unknown as { _curTTS?: SpeechSynthesisUtterance })._curTTS = undefined;
      };
      utterance.onerror = () => {
        (window as unknown as { _curTTS?: SpeechSynthesisUtterance })._curTTS = undefined;
      };

      this.synth.speak(utterance);
    } catch (e) {
      console.warn('Speech synthesis failed:', e);
    }
  }

  // Web Audio Chimes
  public playTone(
    freq: number,
    type: OscillatorType = 'sine',
    duration: number = 0.2,
    gainValue: number = 0.15,
    startTimeOffset: number = 0
  ): void {
    if (this.isMuted) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      const start = ctx.currentTime + startTimeOffset;
      osc.type = type;
      osc.frequency.setValueAtTime(freq, start);

      gain.gain.setValueAtTime(gainValue, start);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(start);
      osc.stop(start + duration);
    } catch (e) {
      // Audio context might be restricted before user interaction
    }
  }

  // Correct answer happy chime
  public playSuccess(): void {
    if (this.isMuted) return;
    this.playTone(523.25, 'triangle', 0.15, 0.2, 0.0); // C5
    this.playTone(659.25, 'triangle', 0.15, 0.2, 0.1); // E5
    this.playTone(783.99, 'triangle', 0.25, 0.25, 0.2); // G5
    this.playTone(1046.5, 'triangle', 0.35, 0.3, 0.3); // C6
  }

  // Mistake buzz / boop
  public playError(): void {
    if (this.isMuted) return;
    this.playTone(330, 'sawtooth', 0.18, 0.15, 0.0);
    this.playTone(261.63, 'sawtooth', 0.3, 0.18, 0.15);
  }

  // Alias for compatibility
  public playWrong(): void {
    this.playError();
  }

  public playCorrect(): void {
    this.playSuccess();
  }

  public playIncorrect(): void {
    this.playError();
  }

  // Tap button click
  public playClick(): void {
    if (this.isMuted) return;
    this.playTone(800, 'sine', 0.05, 0.08, 0.0);
  }

  // Level Up / Unit completed fanfare
  public playFanfare(): void {
    if (this.isMuted) return;
    const notes = [523.25, 659.25, 783.99, 1046.5, 783.99, 1046.5, 1318.51];
    notes.forEach((freq, index) => {
      this.playTone(freq, 'triangle', 0.25, 0.2, index * 0.12);
    });
  }

  // Streak flame ignite
  public playStreak(): void {
    if (this.isMuted) return;
    this.playTone(440, 'sine', 0.1, 0.15, 0.0);
    this.playTone(880, 'sine', 0.2, 0.2, 0.08);
  }
}

export const audio = new AudioManager();
export default audio;
