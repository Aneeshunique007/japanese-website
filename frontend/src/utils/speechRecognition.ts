// Web Speech Recognition & Audio Waveform Analyzer for Japanese Language Drills

export interface SpeechRecognitionResultState {
  transcript: string;
  isFinal: boolean;
  confidence: number;
}

export interface SpeechRecognitionOptions {
  lang?: string;
  continuous?: boolean;
  interimResults?: boolean;
  onResult?: (result: SpeechRecognitionResultState) => void;
  onError?: (error: string) => void;
  onEnd?: () => void;
  onVolumeChange?: (volume: number) => void; // 0 to 1
}

// Convert Katakana to Hiragana for normalization
export function katakanaToHiragana(str: string): string {
  return str.replace(/[\u30a1-\u30f6]/g, (match) => {
    const code = match.charCodeAt(0) - 0x60;
    return String.fromCharCode(code);
  });
}

// Normalize Japanese text for comparison (remove spaces, punctuation, convert katakana to hiragana)
export function normalizeJapaneseText(text: string): string {
  if (!text) return '';
  return katakanaToHiragana(text)
    .replace(/[\s\u3000、。！？!?,.·〜~・\-]/g, '')
    .trim()
    .toLowerCase();
}

// Simple Levenshtein or fuzzy similarity comparison between recognized speech and target
export function compareJapaneseSpeech(spoken: string, target: string, alternateReadings: string[] = []): { isMatch: boolean; similarity: number } {
  const normSpoken = normalizeJapaneseText(spoken);
  const targets = [target, ...alternateReadings].map(normalizeJapaneseText).filter(Boolean);

  if (!normSpoken) return { isMatch: false, similarity: 0 };

  for (const t of targets) {
    if (normSpoken === t) {
      return { isMatch: true, similarity: 1 };
    }
    // Substring match (e.g. if speech engine captured extra particle or slight ending)
    if (normSpoken.includes(t) || t.includes(normSpoken)) {
      const sim = Math.min(normSpoken.length, t.length) / Math.max(normSpoken.length, t.length);
      if (sim >= 0.6) {
        return { isMatch: true, similarity: sim };
      }
    }
  }

  // Calculate Levenshtein-based similarity with best target
  let bestSim = 0;
  for (const t of targets) {
    const sim = calculateStringSimilarity(normSpoken, t);
    if (sim > bestSim) bestSim = sim;
  }

  return {
    isMatch: bestSim >= 0.7,
    similarity: bestSim
  };
}

function calculateStringSimilarity(a: string, b: string): number {
  if (a === b) return 1;
  if (!a || !b) return 0;
  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  const distance = matrix[b.length][a.length];
  const maxLen = Math.max(a.length, b.length);
  return Math.max(0, (maxLen - distance) / maxLen);
}

// Speech Recognition Controller
export class JapaneseSpeechRecognizer {
  private recognition: any = null;
  private isListening: boolean = false;
  private audioCtx: AudioContext | null = null;
  private mediaStream: MediaStream | null = null;
  private analyser: AnalyserNode | null = null;
  private animFrameId: number | null = null;
  private volumeCallback: ((v: number) => void) | null = null;

  constructor() {
    // Check for browser support
    const win = typeof window !== 'undefined' ? (window as any) : {};
    const SpeechRecognitionClass = win.SpeechRecognition || win.webkitSpeechRecognition;
    if (SpeechRecognitionClass) {
      this.recognition = new SpeechRecognitionClass();
      this.recognition.lang = 'ja-JP';
      this.recognition.interimResults = true;
      this.recognition.continuous = false;
      this.recognition.maxAlternatives = 3;
    }
  }

  public isSupported(): boolean {
    return this.recognition !== null;
  }

  public async startListening(options: SpeechRecognitionOptions = {}): Promise<void> {
    if (this.isListening) {
      this.stopListening();
    }

    if (!this.recognition) {
      if (options.onError) {
        options.onError('Speech recognition is not supported in this browser. Please use Chrome or Safari.');
      }
      return;
    }

    this.recognition.lang = options.lang || 'ja-JP';
    this.recognition.interimResults = options.interimResults ?? true;
    this.recognition.continuous = options.continuous ?? false;

    this.recognition.onresult = (event: any) => {
      let finalTranscript = '';
      let interimTranscript = '';
      let confidence = 0.8;

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const res = event.results[i];
        const text = res[0].transcript;
        if (res.isFinal) {
          finalTranscript += text;
          confidence = res[0].confidence || 0.85;
        } else {
          interimTranscript += text;
        }
      }

      const text = finalTranscript || interimTranscript;
      if (options.onResult && text) {
        options.onResult({
          transcript: text,
          isFinal: Boolean(finalTranscript),
          confidence
        });
      }
    };

    this.recognition.onerror = (event: any) => {
      // Don't trigger error on intentional abort or no-speech
      if (event.error !== 'no-speech' && event.error !== 'aborted') {
        if (options.onError) {
          options.onError(event.error);
        }
      }
    };

    this.recognition.onend = () => {
      this.cleanupAudioAnalysis();
      this.isListening = false;
      if (options.onEnd) {
        options.onEnd();
      }
    };

    try {
      this.recognition.start();
      this.isListening = true;

      // Start audio waveform volume tracking if requested
      if (options.onVolumeChange) {
        this.volumeCallback = options.onVolumeChange;
        await this.startAudioAnalysis();
      }
    } catch (e: any) {
      this.isListening = false;
      if (options.onError) {
        options.onError(e?.message || 'Failed to start microphone');
      }
    }
  }

  public stopListening(): void {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch {}
    }
    this.cleanupAudioAnalysis();
    this.isListening = false;
  }

  private async startAudioAnalysis(): Promise<void> {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return;
      this.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtxClass) return;
      this.audioCtx = new AudioCtxClass();
      if (this.audioCtx.state === 'suspended') {
        await this.audioCtx.resume();
      }

      const source = this.audioCtx.createMediaStreamSource(this.mediaStream);
      this.analyser = this.audioCtx.createAnalyser();
      this.analyser.fftSize = 256;
      source.connect(this.analyser);

      const bufferLength = this.analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const checkVolume = () => {
        if (!this.analyser || !this.isListening) return;
        this.analyser.getByteFrequencyData(dataArray);
        let sum = 0;
        for (let i = 0; i < bufferLength; i++) {
          sum += dataArray[i];
        }
        const average = sum / bufferLength;
        const normalized = Math.min(1, average / 128); // 0 to 1
        if (this.volumeCallback) {
          this.volumeCallback(normalized);
        }
        this.animFrameId = requestAnimationFrame(checkVolume);
      };

      this.animFrameId = requestAnimationFrame(checkVolume);
    } catch {
      // Microphone analysis fallback gracefully
    }
  }

  private cleanupAudioAnalysis(): void {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach(t => t.stop());
      this.mediaStream = null;
    }
    if (this.audioCtx && this.audioCtx.state !== 'closed') {
      try {
        this.audioCtx.close();
      } catch {}
      this.audioCtx = null;
    }
    this.analyser = null;
    if (this.volumeCallback) {
      this.volumeCallback(0);
    }
  }
}

export const speechRecognizer = new JapaneseSpeechRecognizer();
