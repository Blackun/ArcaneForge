
                                                       

export class SoundSystem {
          ctx                      = null;
          enabled          = true;
          masterGain                  = null;
          bgmGain                  = null;
          bgmPlaying          = false;
          bgmTheme           = 'workshop';
          bgmTimer                = null;
          bgmStep         = 0;
          voiceEnabled          = true;
          speechQueueTimers           = [];
          cachedVoices                         = [];

  constructor() {
    // AudioContext will be lazily initialized on first user interaction
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.refreshVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        this.refreshVoices();
      };
    }
  }

          refreshVoices()       {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const list = window.speechSynthesis.getVoices();
    if (list && list.length > 0) {
      this.cachedVoices = list;
    }
  }

          ensureContext()                      {
    if (!this.enabled) return null;

    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window                                                          ).webkitAudioContext;
      if (!AudioCtx) return null;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.38;
      this.masterGain.connect(this.ctx.destination);

      this.bgmGain = this.ctx.createGain();
      this.bgmGain.gain.value = 0.24;
      this.bgmGain.connect(this.masterGain);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {
        // Ignore resume errors before user gesture
      });
    }

    return this.ctx;
  }

         setEnabled(enabled         )       {
    this.enabled = enabled;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(enabled ? 0.38 : 0, this.ctx.currentTime, 0.02);
    }
    if (!enabled) {
      this.stopNarration();
    }
  }

         isEnabled()          {
    return this.enabled;
  }

          playTone(
    freq        ,
    type                ,
    startTime        ,
    duration        ,
    peakGain         = 0.35,
    endFreq         
  )       {
    const ctx = this.ensureContext();
    if (!ctx || !this.masterGain) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(Math.max(20, freq), startTime);
    if (endFreq !== undefined) {
      osc.frequency.exponentialRampToValueAtTime(Math.max(20, endFreq), startTime + duration);
    }

    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.linearRampToValueAtTime(peakGain, startTime + Math.min(0.015, duration * 0.25));
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.02);
  }

          playNoiseBurst(
    startTime        ,
    duration        ,
    filterFreq        ,
    peakGain         = 0.25,
    q         = 3
  )       {
    const ctx = this.ensureContext();
    if (!ctx || !this.masterGain) return;

    const bufferSize = Math.max(1, Math.floor(ctx.sampleRate * duration));
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(filterFreq, startTime);
    filter.Q.setValueAtTime(q, startTime);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(peakGain, startTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(startTime);
    noise.stop(startTime + duration + 0.01);
  }

  /**
   * 대장간 생성기는 묵직한 금속 모루 타격음,
   * 연금술은 청량한 물방울/기포음,
   * 비전은 신비로운 크리스탈 차임음,
   * 상자는 나무/보석 열리는 소리
   */
         playSpawn(category              )       {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    if (category === 'generator_forge' || category === 'weapon') {
      // Heavy metallic anvil strike + bright overtone ping + spark noise
      this.playTone(135, 'triangle', now, 0.14, 0.55, 58);
      this.playTone(880, 'square', now, 0.09, 0.22, 620);
      this.playTone(1760, 'sine', now + 0.005, 0.18, 0.25, 1320);
      this.playNoiseBurst(now, 0.06, 2600, 0.3, 4);
    } else if (category === 'generator_alchemy' || category === 'potion') {
      // Refreshing potion bubble / water droplet bloop
      this.playTone(320, 'sine', now, 0.09, 0.4, 780);
      this.playTone(540, 'sine', now + 0.055, 0.11, 0.32, 1180);
      this.playTone(820, 'triangle', now + 0.1, 0.08, 0.18, 1420);
    } else if (category === 'generator_arcane' || category === 'arcane' || category === 'hybrid') {
      // Mystical crystal chime
      const notes = [1046.5, 1318.5, 1567.98, 2093.0];
      notes.forEach((f, idx) => {
        this.playTone(f, 'sine', now + idx * 0.028, 0.24, 0.22, f * 1.01);
        this.playTone(f * 1.5, 'triangle', now + idx * 0.028, 0.15, 0.08);
      });
    } else if (category === 'chest') {
      // Wooden creak + gem sparkle
      this.playTone(190, 'sawtooth', now, 0.08, 0.25, 260);
      this.playNoiseBurst(now, 0.05, 900, 0.2, 2);
      this.playTone(987.77, 'sine', now + 0.05, 0.16, 0.28);
      this.playTone(1318.5, 'sine', now + 0.09, 0.22, 0.3);
    } else {
      // Default light pop
      this.playTone(440, 'sine', now, 0.08, 0.3, 660);
    }
  }

  /**
   * 아이템 레벨과 연속 머지 콤보에 따라 피치(음계)가 경쾌하게 상승하는 마법 합성음
   */
         playMerge(level        , comboCount         = 1)       {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Major pentatonic / Lydian intervals in semitones
    const scaleSemitones = [0, 2, 4, 7, 9, 11, 12, 14, 16, 19, 21, 24];
    const stepIndex = Math.min(
      scaleSemitones.length - 1,
      Math.max(0, (level - 1) + Math.min(5, Math.max(0, comboCount - 1)))
    );
    const semitoneOffset = scaleSemitones[stepIndex];
    const baseFreq = 330 * Math.pow(2, semitoneOffset / 12);

    // Pop impact + ascending harmonic triad + shimmer
    this.playTone(baseFreq * 0.5, 'triangle', now, 0.12, 0.35, baseFreq);
    this.playTone(baseFreq, 'sine', now + 0.015, 0.22, 0.4, baseFreq * 1.02);
    this.playTone(baseFreq * 1.25, 'triangle', now + 0.055, 0.24, 0.32);
    this.playTone(baseFreq * 1.5, 'sine', now + 0.095, 0.30, 0.36);

    if (comboCount >= 2) {
      // Extra high octave sparkle for combos
      this.playTone(baseFreq * 2, 'sine', now + 0.13, 0.32, 0.28, baseFreq * 2.05);
    }
  }

  /**
   * 이종 교차 합성 성공 시 보라색 비전 마법진이 발동하는 듯한 웅장하고 신비로운 다중 화음 아르페지오
   */
         playCrossCraft()       {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Deep arcane bass swell
    this.playTone(110, 'sawtooth', now, 0.65, 0.28, 220);
    this.playTone(220, 'triangle', now + 0.04, 0.6, 0.32, 440);

    // Mystical Lydian dominant / arcane arpeggio (A - C# - E - G# - B - D# - E - A)
    const arpeggio = [440, 554.37, 659.25, 830.61, 987.77, 1244.51, 1318.51, 1760];
    arpeggio.forEach((freq, i) => {
      const start = now + i * 0.055;
      this.playTone(freq, 'sine', start, 0.42, 0.26, freq * 1.015);
      this.playTone(freq * 0.5, 'triangle', start, 0.35, 0.16);
    });

    // Shimmering release burst
    this.playNoiseBurst(now + 0.15, 0.35, 3200, 0.18, 2.5);
  }

  /**
   * 크리티컬 머지(+2레벨 점프) 또는 행운 드랍 시 짜릿한 금빛 팡파르 사운드
   */
         playCritical()       {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Bright golden brass/bell fanfare: C6 -> E6 -> G6 -> C7 with rich harmonics
    const notes = [
      { freq: 587.33, delay: 0.0, dur: 0.12 },
      { freq: 783.99, delay: 0.06, dur: 0.12 },
      { freq: 987.77, delay: 0.12, dur: 0.14 },
      { freq: 1174.66, delay: 0.18, dur: 0.45 },
      { freq: 1567.98, delay: 0.24, dur: 0.50 },
    ];

    notes.forEach((n) => {
      this.playTone(n.freq, 'triangle', now + n.delay, n.dur, 0.36);
      this.playTone(n.freq * 2, 'sine', now + n.delay + 0.01, n.dur * 0.85, 0.2);
    });

    this.playNoiseBurst(now + 0.18, 0.22, 4200, 0.22, 3);
  }

  /**
   * 골드 동전 짤랑거리는 소리, 마나 에너지 충전 화음, 상자 획득음
   */
         playCollect(type                             )       {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    if (type === 'gold') {
      // Crisp metallic coin clink (B5 -> E6 + high ring)
      this.playTone(987.77, 'sine', now, 0.11, 0.34);
      this.playTone(1318.51, 'sine', now + 0.065, 0.28, 0.38);
      this.playTone(2637.02, 'triangle', now + 0.065, 0.2, 0.16);
    } else if (type === 'energy') {
      // Rising mana surge chord
      this.playTone(349.23, 'sine', now, 0.25, 0.3, 698.46);
      this.playTone(523.25, 'triangle', now + 0.05, 0.28, 0.28, 1046.5);
      this.playTone(880, 'sine', now + 0.1, 0.32, 0.26, 1396.91);
    } else {
      // Chest collect / open chime
      this.playTone(523.25, 'triangle', now, 0.14, 0.32);
      this.playTone(659.25, 'triangle', now + 0.07, 0.16, 0.32);
      this.playTone(783.99, 'sine', now + 0.14, 0.28, 0.36);
    }
  }

  /**
   * 퀘스트 납품 성공 팡파르
   */
         playQuestComplete()       {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Uplifting quest completion melody (G4 - B4 - D5 - G5 + harmony)
    const seq = [
      { f: 392.0, t: 0.0, d: 0.12 },
      { f: 493.88, t: 0.09, d: 0.12 },
      { f: 587.33, t: 0.18, d: 0.14 },
      { f: 783.99, t: 0.28, d: 0.48 },
    ];
    seq.forEach((s) => {
      this.playTone(s.f, 'triangle', now + s.t, s.d, 0.35);
      this.playTone(s.f * 1.5, 'sine', now + s.t + 0.01, s.d * 0.9, 0.18);
    });
  }

  /**
   * 마법 공방 건물 복구 완료 시 장엄한 오케스트라풍 신스 브라스 화음
   */
         playZoneRestore()       {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Majestic orchestral synth brass progression: C major -> G major -> A minor -> F#m/D -> C major grand finale
    const chords = [
      { freqs: [261.63, 329.63, 392.0, 523.25], start: 0.0, dur: 0.26 },
      { freqs: [293.66, 369.99, 440.0, 587.33], start: 0.22, dur: 0.26 },
      { freqs: [329.63, 415.3, 493.88, 659.25], start: 0.44, dur: 0.28 },
      { freqs: [261.63, 392.0, 523.25, 659.25, 783.99, 1046.5], start: 0.68, dur: 0.85 },
    ];

    chords.forEach((chord) => {
      chord.freqs.forEach((f, idx) => {
        this.playTone(f, idx % 2 === 0 ? 'sawtooth' : 'triangle', now + chord.start, chord.dur, 0.16, f * 1.004);
        this.playTone(f, 'sine', now + chord.start, chord.dur * 1.1, 0.18);
      });
    });

    // Celebratory firework pop noise
    this.playNoiseBurst(now + 0.68, 0.4, 2400, 0.22, 1.8);
  }

  /**
   * 에너지 부족 또는 빈 칸 없음 알림음
   */
         playError()       {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Low descending buzz
    this.playTone(210, 'sawtooth', now, 0.11, 0.28, 165);
    this.playTone(160, 'sawtooth', now + 0.09, 0.16, 0.3, 115);
  }

  /**
   * 양피지 책장이 넘어가며 신비로운 하프/차임 화음이 퍼지는 스토리 컷신 시작 효과음
   */
         playStoryOpen()       {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Soft parchment page turn rustle (filtered noise sweep)
    this.playNoiseBurst(now, 0.14, 1400, 0.18, 2.2);
    this.playNoiseBurst(now + 0.04, 0.18, 2200, 0.14, 1.8);

    // Mystical harp / chime glissando (F#4 -> A4 -> C#5 -> E5 -> F#5 -> A5 -> C#6)
    const harpNotes = [369.99, 440.0, 554.37, 659.25, 739.99, 880.0, 1108.73];
    harpNotes.forEach((freq, idx) => {
      const start = now + 0.05 + idx * 0.055;
      this.playTone(freq, 'sine', start, 0.55, 0.2, freq * 1.003);
      this.playTone(freq * 2, 'triangle', start + 0.01, 0.35, 0.08);
    });
  }

  /**
   * 대사 넘김/타이핑 효과음
   * - lia / alchemist: 맑고 높은 크리스탈 벨 톤
   * - torg / blacksmith: 묵직하고 따뜻한 중저음 금속 공명 톤
   * - narrator: 잔잔한 고대 마법 차임 톤
   */
         playDialogueBlip(
    role                                                          
  )       {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Slight pitch variation for natural dialogue cadence
    const jitter = 0.96 + Math.random() * 0.08;

    if (role === 'lia' || role === 'alchemist') {
      const base = 880 * jitter;
      this.playTone(base, 'sine', now, 0.09, 0.22, base * 1.12);
      this.playTone(base * 1.5, 'triangle', now + 0.015, 0.08, 0.12);
    } else if (role === 'torg' || role === 'blacksmith') {
      const base = 220 * jitter;
      this.playTone(base, 'triangle', now, 0.11, 0.28, base * 0.92);
      this.playTone(base * 2, 'sine', now + 0.01, 0.09, 0.14, base * 1.85);
    } else {
      const base = 523.25 * jitter;
      this.playTone(base, 'sine', now, 0.12, 0.18, base * 1.04);
      this.playTone(base * 1.25, 'sine', now + 0.02, 0.11, 0.1);
    }
  }

  /**
   * 스토리 선택지를 골랐을 때 경쾌하게 울리는 마법 공명 효과음
   */
         playChoiceSelect()       {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Crisp magical confirmation resonance (D5 -> F#5 -> A5 -> D6)
    const chord = [
      { f: 587.33, delay: 0.0, dur: 0.18 },
      { f: 739.99, delay: 0.045, dur: 0.22 },
      { f: 880.0, delay: 0.09, dur: 0.28 },
      { f: 1174.66, delay: 0.135, dur: 0.42 },
    ];

    chord.forEach((n) => {
      this.playTone(n.f, 'sine', now + n.delay, n.dur, 0.26, n.f * 1.01);
      this.playTone(n.f * 1.5, 'triangle', now + n.delay + 0.01, n.dur * 0.75, 0.11);
    });

    this.playNoiseBurst(now + 0.08, 0.16, 3400, 0.12, 3);
  }

  // ============================================================================
  // 1. 프로시저럴 판타지 배경음악(BGM) 시퀀서
  // ============================================================================

          playBgmTone(
    freq        ,
    type                ,
    startTime        ,
    duration        ,
    peakGain         = 0.16
  )       {
    const ctx = this.ensureContext();
    if (!ctx || !this.bgmGain) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(Math.max(20, freq), startTime);

    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.linearRampToValueAtTime(peakGain, startTime + Math.min(0.06, duration * 0.25));
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(gain);
    gain.connect(this.bgmGain);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.03);
  }

          scheduleBgmStep()       {
    if (!this.bgmPlaying || !this.enabled) return;
    const ctx = this.ensureContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const step = this.bgmStep++;

    if (this.bgmTheme === 'workshop') {
      // 평화롭고 신비로운 공방 루프 (D Dorian / Lydian harp arpeggio + warm pad)
      const bassRoots = [146.83, 174.61, 196.0, 164.81]; // D3, F3, G3, E3
      const arpeggios = [
        [293.66, 349.23, 440.0, 523.25, 587.33, 523.25, 440.0, 349.23],
        [349.23, 440.0, 523.25, 659.25, 698.46, 659.25, 523.25, 440.0],
        [392.0, 493.88, 587.33, 659.25, 783.99, 659.25, 587.33, 493.88],
        [329.63, 392.0, 493.88, 587.33, 659.25, 587.33, 493.88, 392.0],
      ];

      const bar = Math.floor(step / 8) % bassRoots.length;
      const beat = step % 8;

      if (beat === 0 || beat === 4) {
        const bass = bassRoots[bar];
        this.playBgmTone(bass, 'triangle', now, 1.5, 0.14);
        this.playBgmTone(bass * 1.5, 'sine', now + 0.02, 1.3, 0.09);
      }

      const note = arpeggios[bar][beat];
      this.playBgmTone(note, 'sine', now, 0.62, 0.14);
      this.playBgmTone(note * 2, 'triangle', now + 0.015, 0.38, 0.045);
    } else if (this.bgmTheme === 'story') {
      // 감성적인 오르골/하프 서사 루프 (F#m -> D -> A -> E)
      const bassRoots = [185.0, 146.83, 220.0, 164.81]; // F#3, D3, A3, E3
      const melodies = [
        [739.99, 659.25, 554.37, 659.25, 880.0, 739.99, 659.25, 554.37],
        [587.33, 659.25, 739.99, 880.0, 739.99, 659.25, 587.33, 440.0],
        [554.37, 659.25, 880.0, 987.77, 880.0, 739.99, 659.25, 554.37],
        [659.25, 739.99, 830.61, 987.77, 830.61, 739.99, 659.25, 493.88],
      ];

      const bar = Math.floor(step / 8) % bassRoots.length;
      const beat = step % 8;

      if (beat === 0) {
        const bass = bassRoots[bar];
        this.playBgmTone(bass, 'sine', now, 2.8, 0.16);
        this.playBgmTone(bass * 1.5, 'triangle', now + 0.04, 2.4, 0.08);
      }

      const mel = melodies[bar][beat];
      this.playBgmTone(mel, 'sine', now, 0.78, 0.15);
      this.playBgmTone(mel * 2, 'sine', now + 0.02, 0.45, 0.05);
    } else {
      // 박진감 넘치는 마수 토벌 루프 ('battle' - A minor driving rhythm)
      const bassLine = [110.0, 110.0, 130.81, 146.83, 110.0, 110.0, 164.81, 146.83];
      const leadLine = [440.0, 523.25, 659.25, 587.33, 659.25, 783.99, 659.25, 523.25];
      const idx = step % 8;

      const bass = bassLine[idx];
      this.playBgmTone(bass, 'sawtooth', now, 0.24, 0.12);
      this.playBgmTone(bass * 2, 'triangle', now, 0.22, 0.1);

      const lead = leadLine[(step + Math.floor(step / 8)) % leadLine.length];
      this.playBgmTone(lead, 'triangle', now + 0.01, 0.26, 0.14);
      if (idx % 2 === 0) {
        this.playBgmTone(lead * 1.5, 'sine', now + 0.02, 0.2, 0.07);
      }
    }
  }

          getBgmIntervalMs()         {
    if (this.bgmTheme === 'battle') return 260;
    if (this.bgmTheme === 'story') return 460;
    return 400;
  }

         startBgm(theme           )       {
    if (theme) {
      this.bgmTheme = theme;
    }
    this.bgmPlaying = true;
    this.ensureContext();

    if (this.bgmTimer !== null) {
      window.clearInterval(this.bgmTimer);
      this.bgmTimer = null;
    }

    this.scheduleBgmStep();
    this.bgmTimer = window.setInterval(() => {
      this.scheduleBgmStep();
    }, this.getBgmIntervalMs());
  }

         stopBgm()       {
    this.bgmPlaying = false;
    if (this.bgmTimer !== null) {
      window.clearInterval(this.bgmTimer);
      this.bgmTimer = null;
    }
  }

         toggleBgm()          {
    if (this.bgmPlaying) {
      this.stopBgm();
    } else {
      this.startBgm(this.bgmTheme);
    }
    return this.bgmPlaying;
  }

         isBgmPlaying()          {
    return this.bgmPlaying;
  }

         setBgmTheme(theme          )       {
    const changed = this.bgmTheme !== theme;
    this.bgmTheme = theme;
    if (changed) {
      this.bgmStep = 0;
      if (this.bgmPlaying) {
        this.startBgm(theme);
      }
    }
  }

  // ============================================================================
  // 2. 한국어 음성 나레이션 & 캐릭터 보이스 더빙 (자연스러운 Neural/Yuna 음성 선택 엔진)
  // ============================================================================

  /**
   * macOS/브라우저 기본 목록 앞쪽에 알파벳순으로 정렬되어 있는
   * 구형 포먼트 기계음(Eddy, Flo, Grandma, Grandpa, Reed, Rocko, Sandy, Shelley 등)을 완전히 배제하고,
   * 신경망(Neural / Natural / Online / Google 한국의) 및 고품질 성우 음성(Yuna, Sora, Siri 등)만 선별합니다.
   */
          selectBestKoreanVoice(role                             )                              {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
    const allVoices =
      this.cachedVoices.length > 0 ? this.cachedVoices : window.speechSynthesis.getVoices();

    const koVoices = allVoices.filter((v) => {
      const lang = v.lang.toLowerCase();
      return lang.includes('ko') || lang.includes('kr') || v.name.includes('한국');
    });

    if (koVoices.length === 0) return null;

    // 1990년대 구형 Eloquence 기계음 블랙리스트 (알파벳순이라 koVoices[0]이 Eddy가 되는 문제 방지!)
    const roboticBlacklist = [
      'eddy',
      'flo',
      'grandma',
      'grandpa',
      'reed',
      'rocko',
      'sandy',
      'shelley',
      'albert',
      'bad news',
      'bahh',
      'bells',
      'boing',
      'bubbles',
      'cellos',
      'good news',
      'jester',
      'junior',
      'kathy',
      'organ',
      'ralph',
      'superstar',
      'trinoids',
      'whisper',
      'wobble',
      'zarvox',
    ];

    const naturalVoices = koVoices.filter((v) => {
      const lower = v.name.toLowerCase();
      return !roboticBlacklist.some((bad) => lower.includes(bad));
    });

    const pool = naturalVoices.length > 0 ? naturalVoices : koVoices;

    // 1순위: Microsoft Edge / 클라우드 Neural 성우 (역할별 성별/톤 매칭)
    if (role === 'torg') {
      const maleNeural = pool.find((v) => {
        const n = v.name.toLowerCase();
        return n.includes('injoon') || n.includes('bongjin') || n.includes('gookmin') || n.includes('minsu');
      });
      if (maleNeural) return maleNeural;
    } else if (role === 'lia') {
      const femaleNeural = pool.find((v) => {
        const n = v.name.toLowerCase();
        return n.includes('sunhi') || n.includes('jiyeon') || n.includes('yuna') || n.includes('유나');
      });
      if (femaleNeural && (femaleNeural.name.toLowerCase().includes('natural') || femaleNeural.name.toLowerCase().includes('online'))) {
        return femaleNeural;
      }
    }

    // 2순위: Natural / Neural / Online 클라우드 신경망 음성
    const cloudNeural = pool.find((v) => {
      const n = v.name.toLowerCase();
      return n.includes('natural') || n.includes('neural') || n.includes('online') || n.includes('premium') || n.includes('enhanced');
    });
    if (cloudNeural) return cloudNeural;

    // 3순위: Chrome 내장 Google 한국의 (클라우드 신경망 TTS)
    const googleKo = pool.find((v) => {
      const n = v.name.toLowerCase();
      return n.includes('google') || !v.localService;
    });
    if (googleKo) return googleKo;

    // 4순위: Apple macOS 고품질 한국어 성우 (Yuna / 유나 / Sora / Siri)
    const appleYuna = pool.find((v) => {
      const n = v.name.toLowerCase();
      return n.includes('yuna') || n.includes('유나') || n.includes('sora') || n.includes('소라') || n.includes('siri');
    });
    if (appleYuna) return appleYuna;

    return pool[0];
  }

  /**
   * 특수 기호·괄호·말줄임표를 자연스러운 호흡 단위로 정제하고 문장별로 분리합니다.
   */
          prepareNaturalSentences(rawText        )           {
    const normalized = rawText
      .replace(/["“”'‘’「」『』〈〉《》【】〔〕]/g, '')
      .replace(/\([^)]*\)/g, '') // 괄호 안 부연 설명은 음성에서 생략하여 더 자연스럽게 읽음
      .replace(/…+/g, ', ')
      .replace(/\.{2,}/g, ', ')
      .replace(/—|–/g, ', ')
      .replace(/!+/g, '!')
      .replace(/\?+/g, '?')
      .replace(/\s+/g, ' ')
      .trim();

    if (!normalized) return [];

    // 문장 부호(., !, ?) 뒤 공백을 기준으로 자연스럽게 호흡 분리
    const chunks = normalized
      .split(/(?<=[.!?])\s+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    return chunks.length > 0 ? chunks : [normalized];
  }

         getActiveVoiceName()         {
    const v = this.selectBestKoreanVoice('lia');
    return v ? v.name : '기본 한국어 성우';
  }

         speakNarration(
    text        ,
    rawRole                                                          
  )       {
    if (!this.voiceEnabled || !this.enabled) return;
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    const role                              =
      rawRole === 'alchemist' ? 'lia' : rawRole === 'blacksmith' ? 'torg' : rawRole;

    this.stopNarration();

    const speakNow = () => {
      try {
        const sentences = this.prepareNaturalSentences(text);
        if (sentences.length === 0) return;

        const bestVoice = this.selectBestKoreanVoice(role);
        const isGoogleOrCloud = bestVoice
          ? bestVoice.name.toLowerCase().includes('google') ||
            bestVoice.name.toLowerCase().includes('natural') ||
            !bestVoice.localService
          : false;

        sentences.forEach((sentence, idx) => {
          const utterance = new SpeechSynthesisUtterance(sentence);
          utterance.lang = 'ko-KR';
          if (bestVoice) {
            utterance.voice = bestVoice;
          }

          // 중요: 피치(pitch)를 과도하게 비틀면(예: 0.72, 1.25) 브라우저가 기계적인 보코더 변조를 걸어버립니다.
          // 자연스러운 육성 억양을 유지하도록 0.94 ~ 1.05 범위의 미세한 톤 차이만 부여합니다.
          if (role === 'lia') {
            utterance.pitch = isGoogleOrCloud ? 1.03 : 1.05;
            utterance.rate = 1.02;
            utterance.volume = 1.0;
          } else if (role === 'torg') {
            utterance.pitch = isGoogleOrCloud ? 0.95 : 0.93;
            utterance.rate = 0.95;
            utterance.volume = 1.0;
          } else {
            // 내레이터: 가장 자연스러운 원음 피치(1.0)와 차분한 호흡 속도
            utterance.pitch = 1.0;
            utterance.rate = 0.97;
            utterance.volume = 0.98;
          }

          // 첫 문장 시작 후 이어지는 문장들이 자연스럽게 큐에 들어가도록 발화
          if (idx === 0) {
            window.speechSynthesis.speak(utterance);
          } else {
            const timer = window.setTimeout(() => {
              if (this.voiceEnabled && this.enabled) {
                window.speechSynthesis.speak(utterance);
              }
            }, idx * 40);
            this.speechQueueTimers.push(timer);
          }
        });
      } catch {
        // Ignore browser TTS errors
      }
    };

    // 브라우저 첫 로드 직후 성우 목록(Google 한국의 등)이 아직 비동기 로딩 중이면 잠깐 대기 후 발화
    const currentVoices = window.speechSynthesis.getVoices();
    if (currentVoices.length === 0) {
      let fired = false;
      const onReady = () => {
        if (fired) return;
        fired = true;
        this.refreshVoices();
        speakNow();
      };
      window.speechSynthesis.addEventListener('voiceschanged', onReady, { once: true });
      const fallbackTimer = window.setTimeout(onReady, 220);
      this.speechQueueTimers.push(fallbackTimer);
    } else {
      this.cachedVoices = currentVoices;
      speakNow();
    }
  }

         stopNarration()       {
    for (const t of this.speechQueueTimers) {
      window.clearTimeout(t);
    }
    this.speechQueueTimers = [];
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {
        // Ignore errors
      }
    }
  }

         toggleVoice()          {
    this.voiceEnabled = !this.voiceEnabled;
    if (!this.voiceEnabled) {
      this.stopNarration();
    }
    return this.voiceEnabled;
  }

         isVoiceEnabled()          {
    return this.voiceEnabled;
  }

  // ============================================================================
  // 3. 몬스터 전투 효과음 (참격 / 포션 폭발 / 마법 뇌격 / 토벌 완료 팡파레)
  // ============================================================================

  /**
   * 몬스터 타격 효과음:
   * - weapon: 날카로운 검 참격음 + 금속 타격 공명
   * - potion: 연금술 플라스크 파열음 + 화염/산성 폭발음
   * - arcane / hybrid: 강렬한 마법 뇌격음 + 마나 충격파
   */
         playMonsterHit(category        , isCritical         )       {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    if (category === 'weapon' || category === 'generator_forge') {
      // Sword slash whoosh + metallic blade impact
      this.playNoiseBurst(now, 0.09, 3200, 0.35, 2.2);
      this.playTone(180, 'sawtooth', now, 0.14, 0.48, 55);
      this.playTone(920, 'triangle', now + 0.01, 0.16, 0.32, 1480);
      this.playTone(1840, 'sine', now + 0.02, 0.22, 0.24, 1120);
    } else if (category === 'potion' || category === 'generator_alchemy') {
      // Glass shatter + alchemical blast + bubbling sizzle
      this.playTone(145, 'sine', now, 0.26, 0.5, 42);
      this.playNoiseBurst(now, 0.22, 1100, 0.38, 1.4);
      this.playTone(680, 'triangle', now + 0.03, 0.12, 0.26, 1240);
      this.playTone(960, 'sine', now + 0.08, 0.14, 0.22, 1560);
    } else {
      // Arcane / hybrid thunderbolt discharge
      this.playNoiseBurst(now, 0.18, 2800, 0.34, 1.8);
      this.playTone(660, 'sawtooth', now, 0.16, 0.34, 140);
      this.playTone(1320, 'triangle', now + 0.02, 0.22, 0.3, 440);
      this.playTone(880, 'sine', now + 0.05, 0.28, 0.28, 1760);
    }

    if (isCritical) {
      // Extra golden critical burst overlay
      this.playTone(1174.66, 'triangle', now + 0.04, 0.24, 0.34, 1567.98);
      this.playTone(1567.98, 'sine', now + 0.08, 0.32, 0.32, 2093.0);
      this.playNoiseBurst(now + 0.04, 0.16, 4400, 0.24, 2.6);
    }
  }

  /**
   * 몬스터 토벌 완료 시 웅장한 승리 팡파레
   */
         playMonsterDefeat()       {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Monster dissolve rumble
    this.playTone(130, 'sawtooth', now, 0.32, 0.35, 45);
    this.playNoiseBurst(now, 0.25, 800, 0.28, 1.5);

    // Heroic victory fanfare (A4 -> C#5 -> E5 -> A5 -> C#6 -> A5/E6 grand chord)
    const fanfare = [
      { f: 440.0, t: 0.08, d: 0.12 },
      { f: 554.37, t: 0.18, d: 0.12 },
      { f: 659.25, t: 0.28, d: 0.14 },
      { f: 880.0, t: 0.40, d: 0.55 },
      { f: 1108.73, t: 0.46, d: 0.52 },
      { f: 1318.51, t: 0.52, d: 0.60 },
    ];

    fanfare.forEach((n) => {
      this.playTone(n.f, 'triangle', now + n.t, n.d, 0.32, n.f * 1.005);
      this.playTone(n.f * 0.5, 'sawtooth', now + n.t, n.d * 0.9, 0.14);
      this.playTone(n.f * 2, 'sine', now + n.t + 0.01, n.d * 0.8, 0.14);
    });
  }
}

export const soundSystem = new SoundSystem();
