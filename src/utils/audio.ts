/**
 * Web Audio API Synthesizer & Web Speech API Narration
 * Completely self-contained: works offline with zero external audio assets!
 */

class SoundManager {
  private ctx: AudioContext | null = null;
  private bgmGain: GainNode | null = null;
  private sfxGain: GainNode | null = null;
  private isBgmPlaying = false;
  private bgmTimer: number | null = null;
  private isMuted = false;
  private sfxMuted = false;
  private currentStep = 0;

  // Cheerful pentatonic melody for Grade 2 children
  // C4, D4, E4, G4, A4, C5 (in Hz)
  private melody = [
    261.63, 329.63, 392.00, 523.25,
    392.00, 329.63, 440.00, 523.25,
    329.63, 392.00, 261.63, 293.66,
    329.63, 392.00, 440.00, 392.00
  ];

  private bassNotes = [
    130.81, 130.81, 164.81, 164.81,
    174.61, 174.61, 196.00, 196.00
  ];

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();

      this.bgmGain = this.ctx.createGain();
      this.bgmGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      this.bgmGain.connect(this.ctx.destination);

      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      this.sfxGain.connect(this.ctx.destination);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleBgm(): boolean {
    this.initCtx();
    if (this.isBgmPlaying) {
      this.stopBgm();
      return false;
    } else {
      this.startBgm();
      return true;
    }
  }

  public getBgmState(): boolean {
    return this.isBgmPlaying;
  }

  public startBgm() {
    this.initCtx();
    if (this.isBgmPlaying) return;
    this.isBgmPlaying = true;
    this.currentStep = 0;
    this.scheduleNextNote();
  }

  public stopBgm() {
    this.isBgmPlaying = false;
    if (this.bgmTimer !== null) {
      window.clearTimeout(this.bgmTimer);
      this.bgmTimer = null;
    }
  }

  private scheduleNextNote() {
    if (!this.isBgmPlaying || !this.ctx || !this.bgmGain) return;

    const now = this.ctx.currentTime;
    const noteFreq = this.melody[this.currentStep % this.melody.length];
    const bassFreq = this.bassNotes[Math.floor(this.currentStep / 2) % this.bassNotes.length];

    // Play melody note (bright marimba tone)
    const osc = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(noteFreq, now);

    noteGain.gain.setValueAtTime(0.001, now);
    noteGain.gain.exponentialRampToValueAtTime(0.08, now + 0.02);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);

    osc.connect(noteGain);
    noteGain.connect(this.bgmGain);

    osc.start(now);
    osc.stop(now + 0.3);

    // Play soft bass note every 2 beats
    if (this.currentStep % 2 === 0) {
      const bassOsc = this.ctx.createOscillator();
      const bassGain = this.ctx.createGain();
      bassOsc.type = 'sine';
      bassOsc.frequency.setValueAtTime(bassFreq, now);

      bassGain.gain.setValueAtTime(0.001, now);
      bassGain.gain.exponentialRampToValueAtTime(0.04, now + 0.04);
      bassGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);

      bassOsc.connect(bassGain);
      bassGain.connect(this.bgmGain);

      bassOsc.start(now);
      bassOsc.stop(now + 0.55);
    }

    this.currentStep++;
    // Tempo: ~180ms per 16th note step = cheerful upbeat tempo
    this.bgmTimer = window.setTimeout(() => {
      this.scheduleNextNote();
    }, 240);
  }

  // SFX: Soft Click
  public playClick() {
    if (this.sfxMuted) return;
    this.initCtx();
    if (!this.ctx || !this.sfxGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(250, now + 0.06);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.07);
  }

  // SFX: Correct answer chime (pleasant rising chord)
  public playCorrect() {
    if (this.sfxMuted) return;
    this.initCtx();
    if (!this.ctx || !this.sfxGain) return;

    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6

    notes.forEach((freq, idx) => {
      if (!this.ctx || !this.sfxGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const startTime = now + idx * 0.07;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.exponentialRampToValueAtTime(0.2, startTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(startTime);
      osc.stop(startTime + 0.4);
    });
  }

  // SFX: Wrong answer gentle alert (not punishing, kid friendly)
  public playWrong() {
    if (this.sfxMuted) return;
    this.initCtx();
    if (!this.ctx || !this.sfxGain) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(160, now + 0.25);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.26);
  }

  // SFX: Celebrate / Victory fanfare
  public playFanfare() {
    if (this.sfxMuted) return;
    this.initCtx();
    if (!this.ctx || !this.sfxGain) return;

    const now = this.ctx.currentTime;
    const notes = [392.00, 523.25, 659.25, 783.99, 1046.50];

    notes.forEach((freq, i) => {
      if (!this.ctx || !this.sfxGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const t = now + i * 0.1;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.001, t);
      gain.gain.exponentialRampToValueAtTime(0.25, t + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(t);
      osc.stop(t + 0.45);
    });
  }

  // SFX: Shape Side / Vertex count pop
  public playCount(stepNumber: number) {
    if (this.sfxMuted) return;
    this.initCtx();
    if (!this.ctx || !this.sfxGain) return;

    const baseFreq = 440;
    const freq = baseFreq * Math.pow(1.12, stepNumber);
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.16);
  }

  // Web Speech API: Narration in Indonesian
  public speak(text: string, onEnd?: () => void) {
    if (!('speechSynthesis' in window)) {
      this.playCorrect();
      if (onEnd) onEnd();
      return;
    }

    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'id-ID';
      utterance.rate = 0.95; // slightly slower for Grade 2 SD kids
      utterance.pitch = 1.15; // slightly friendly higher pitch

      const voices = window.speechSynthesis.getVoices();
      const indonesianVoice = voices.find(v => v.lang.includes('id') || v.lang.includes('ID'));
      if (indonesianVoice) {
        utterance.voice = indonesianVoice;
      }

      utterance.onend = () => {
        if (onEnd) onEnd();
      };
      utterance.onerror = () => {
        if (onEnd) onEnd();
      };

      window.speechSynthesis.speak(utterance);
    } catch {
      if (onEnd) onEnd();
    }
  }

  public stopSpeech() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  public isSpeechActive(): boolean {
    if ('speechSynthesis' in window) {
      return window.speechSynthesis.speaking;
    }
    return false;
  }
}

export const sound = new SoundManager();
