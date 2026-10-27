export type FloatingTextStyle =
  | 'normal'
  | 'critical'
  | 'cross'
  | 'gold'
  | 'energy'
  | 'discovery';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  life: number;
  maxLife: number;
  gravity: number;
  drag: number;
  shape: 'circle' | 'star' | 'diamond' | 'spark' | 'rune' | 'ember' | 'slash';
  rotation: number;
  vRot: number;
  trail?: { x: number; y: number }[];
}

interface ShockwaveRing {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  color: string;
  lineWidth: number;
  life: number;
  maxLife: number;
}

interface FloatingTextItem {
  x: number;
  y: number;
  vx: number;
  vy: number;
  text: string;
  style: FloatingTextStyle;
  life: number;
  maxLife: number;
  scale: number;
}

export class ParticleSystem {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private rings: ShockwaveRing[] = [];
  private floatingTexts: FloatingTextItem[] = [];
  private rafId: number | null = null;
  private lastTime: number = performance.now();
  private dpr: number = 1;
  private shakeTimer: number | null = null;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const context = canvas.getContext('2d');
    if (!context) {
      throw new Error('Failed to initialize 2D context for ParticleSystem');
    }
    this.ctx = context;

    this.resize();
    window.addEventListener('resize', () => this.resize());

    this.lastTime = performance.now();
    this.loop(this.lastTime);
  }

  public resize(): void {
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.canvas.width = Math.floor(width * this.dpr);
    this.canvas.height = Math.floor(height * this.dpr);
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
  }

  /**
   * 아이템 스폰 시 가벼운 빛 입자 효과
   */
  public burstSpawn(x: number, y: number, color: string = '#f59e0b'): void {
    const count = 12;
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
      const speed = 45 + Math.random() * 85;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 20,
        size: 3 + Math.random() * 3.5,
        color: i % 3 === 0 ? '#ffffff' : color,
        alpha: 1,
        life: 0,
        maxLife: 0.35 + Math.random() * 0.2,
        gravity: 90,
        drag: 0.94,
        shape: i % 2 === 0 ? 'star' : 'circle',
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 6,
      });
    }

    this.rings.push({
      x,
      y,
      radius: 6,
      maxRadius: 34,
      color,
      lineWidth: 2.5,
      life: 0,
      maxLife: 0.28,
    });
  }

  /**
   * 머지 시 방사형 마법 입자 + 별 모양 스파클 + 충격파 링(Shockwave ring) 연출
   * (크리티컬일 경우 황금빛 입자 2배 및 화면 흔들림 연동)
   */
  public burstMerge(x: number, y: number, color: string = '#38bdf8', isCritical: boolean = false): void {
    const baseCount = isCritical ? 44 : 24;
    const palette = isCritical
      ? ['#fde047', '#f59e0b', '#ffffff', color, '#fbbf24']
      : [color, '#ffffff', '#fde047', color];

    for (let i = 0; i < baseCount; i++) {
      const angle = (Math.PI * 2 * i) / baseCount + (Math.random() - 0.5) * 0.35;
      const speed = (isCritical ? 90 : 65) + Math.random() * (isCritical ? 190 : 130);
      const chosenColor = palette[i % palette.length];
      const shapes: Particle['shape'][] = ['star', 'diamond', 'circle', 'spark'];

      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (isCritical ? 35 : 15),
        size: (isCritical ? 5 : 4) + Math.random() * (isCritical ? 5.5 : 4),
        color: chosenColor,
        alpha: 1,
        life: 0,
        maxLife: 0.48 + Math.random() * 0.32,
        gravity: 140,
        drag: 0.93,
        shape: shapes[i % shapes.length],
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 9,
        trail: i % 2 === 0 ? [{ x, y }] : undefined,
      });
    }

    // Primary shockwave ring
    this.rings.push({
      x,
      y,
      radius: 8,
      maxRadius: isCritical ? 82 : 54,
      color: isCritical ? '#fde047' : color,
      lineWidth: isCritical ? 4.5 : 3,
      life: 0,
      maxLife: isCritical ? 0.46 : 0.35,
    });

    if (isCritical) {
      // Secondary golden outer shockwave + screen shake
      this.rings.push({
        x,
        y,
        radius: 4,
        maxRadius: 110,
        color: '#f59e0b',
        lineWidth: 3,
        life: 0,
        maxLife: 0.55,
      });
      this.triggerScreenShake(7);
    }
  }

  /**
   * 보라색/자홍색/황금색 나선형 마법진 입자 폭발 및 확장 링 연출
   */
  public burstCrossCraft(x: number, y: number): void {
    const palette = ['#c084fc', '#e879f9', '#f472b6', '#fde047', '#38bdf8', '#ffffff'];
    const count = 52;

    for (let i = 0; i < count; i++) {
      const spiralAngle = (Math.PI * 2 * i) / 13 + i * 0.12;
      const speed = 75 + (i / count) * 185 + Math.random() * 40;
      const color = palette[i % palette.length];

      this.particles.push({
        x: x + Math.cos(spiralAngle) * 8,
        y: y + Math.sin(spiralAngle) * 8,
        vx: Math.cos(spiralAngle) * speed - Math.sin(spiralAngle) * 45,
        vy: Math.sin(spiralAngle) * speed + Math.cos(spiralAngle) * 45,
        size: 4.5 + Math.random() * 5,
        color,
        alpha: 1,
        life: 0,
        maxLife: 0.65 + Math.random() * 0.35,
        gravity: 40,
        drag: 0.94,
        shape: i % 2 === 0 ? 'star' : 'diamond',
        rotation: spiralAngle,
        vRot: (Math.random() - 0.5) * 10,
        trail: [{ x, y }],
      });
    }

    // Twin arcane expanding rings
    this.rings.push({
      x,
      y,
      radius: 10,
      maxRadius: 96,
      color: '#c084fc',
      lineWidth: 4.5,
      life: 0,
      maxLife: 0.52,
    });
    this.rings.push({
      x,
      y,
      radius: 5,
      maxRadius: 130,
      color: '#fde047',
      lineWidth: 3,
      life: 0,
      maxLife: 0.65,
    });

    this.triggerScreenShake(8);
  }

  /**
   * 공방 복구 시 화려한 축포 파티클
   */
  public burstRestore(x: number, y: number): void {
    const palette = ['#fde047', '#f59e0b', '#34d399', '#38bdf8', '#c084fc', '#fb7185', '#ffffff'];
    const count = 68;

    for (let i = 0; i < count; i++) {
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.5;
      const speed = 95 + Math.random() * 240;
      const color = palette[i % palette.length];

      this.particles.push({
        x: x + (Math.random() - 0.5) * 36,
        y: y + (Math.random() - 0.5) * 16,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 50,
        size: 5 + Math.random() * 5.5,
        color,
        alpha: 1,
        life: 0,
        maxLife: 0.8 + Math.random() * 0.55,
        gravity: 210,
        drag: 0.95,
        shape: i % 3 === 0 ? 'star' : i % 3 === 1 ? 'diamond' : 'spark',
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 11,
        trail: i % 2 === 0 ? [{ x, y }] : undefined,
      });
    }

    this.rings.push({
      x,
      y,
      radius: 12,
      maxRadius: 145,
      color: '#fde047',
      lineWidth: 5,
      life: 0,
      maxLife: 0.65,
    });

    this.triggerScreenShake(9);
  }

  /**
   * 스토리 컷신/선택지 보상 연출용:
   * 황금빛 별모양(star)과 보랏빛 룬 파편(rune), 상승하는 마법 불씨(ember)가 아름답게 퍼져 나가는 파티클 효과
   */
  public burstStoryMagic(x: number, y: number): void {
    const starColors = ['#fde047', '#fbbf24', '#fef08a', '#ffffff'];
    const runeColors = ['#c084fc', '#a855f7', '#e879f9', '#d8b4fe'];
    const emberColors = ['#f59e0b', '#fb923c', '#fde047', '#f472b6'];

    // 1. Golden Star burst & Violet Rune shards radiating outward
    const burstCount = 36;
    for (let i = 0; i < burstCount; i++) {
      const isStar = i % 2 === 0;
      const angle = (Math.PI * 2 * i) / burstCount + (Math.random() - 0.5) * 0.3;
      const speed = 60 + Math.random() * 145;
      const color = isStar
        ? starColors[i % starColors.length]
        : runeColors[i % runeColors.length];

      this.particles.push({
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 14,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 25,
        size: isStar ? 5 + Math.random() * 4.5 : 5.5 + Math.random() * 4,
        color,
        alpha: 1,
        life: 0,
        maxLife: 0.75 + Math.random() * 0.45,
        gravity: isStar ? 55 : 30,
        drag: 0.94,
        shape: isStar ? 'star' : 'rune',
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 7,
        trail: isStar ? [{ x, y }] : undefined,
      });
    }

    // 2. Rising Magical Embers floating upward gracefully
    const emberCount = 24;
    for (let i = 0; i < emberCount; i++) {
      const spreadX = (Math.random() - 0.5) * 160;
      const spreadY = (Math.random() - 0.5) * 40;
      const color = emberColors[i % emberColors.length];

      this.particles.push({
        x: x + spreadX,
        y: y + spreadY,
        vx: (Math.random() - 0.5) * 45,
        vy: -(55 + Math.random() * 95),
        size: 3.5 + Math.random() * 3.5,
        color,
        alpha: 1,
        life: 0,
        maxLife: 0.9 + Math.random() * 0.55,
        gravity: -40, // Buoyant upward drift
        drag: 0.97,
        shape: 'ember',
        rotation: -Math.PI / 2 + (Math.random() - 0.5) * 0.5,
        vRot: (Math.random() - 0.5) * 3,
        trail: [{ x: x + spreadX, y: y + spreadY }],
      });
    }

    // Dual mystical shockwave rings (Gold + Arcane Violet)
    this.rings.push({
      x,
      y,
      radius: 10,
      maxRadius: 115,
      color: '#fde047',
      lineWidth: 3.5,
      life: 0,
      maxLife: 0.55,
    });
    this.rings.push({
      x,
      y,
      radius: 6,
      maxRadius: 150,
      color: '#c084fc',
      lineWidth: 2.5,
      life: 0,
      maxLife: 0.72,
    });
  }

  /**
   * 무기/마법/포션으로 몬스터를 타격했을 때 검기 슬래시/화염/마법 입자와 충격파가 터지는 전투 이펙트
   */
  public burstCombatHit(x: number, y: number, category: string, isCritical: boolean): void {
    const isWeapon = category === 'weapon' || category === 'generator_forge';
    const isPotion = category === 'potion' || category === 'generator_alchemy';

    const palette = isWeapon
      ? ['#f97316', '#fbbf24', '#ef4444', '#ffffff', '#fde047']
      : isPotion
      ? ['#34d399', '#10b981', '#a7f3d0', '#fde047', '#38bdf8']
      : ['#c084fc', '#e879f9', '#38bdf8', '#fde047', '#ffffff'];

    const primaryColor = isCritical ? '#fde047' : palette[0];
    const count = isCritical ? 48 : 30;

    // If weapon or critical, spawn dramatic crescent sword slash arcs
    if (isWeapon || isCritical) {
      const slashCount = isCritical ? 3 : 2;
      for (let s = 0; s < slashCount; s++) {
        const slashAngle = -Math.PI / 4 + (s - 0.5) * 1.1 + (Math.random() - 0.5) * 0.3;
        this.particles.push({
          x: x + (Math.random() - 0.5) * 12,
          y: y + (Math.random() - 0.5) * 12,
          vx: Math.cos(slashAngle) * 35,
          vy: Math.sin(slashAngle) * 35,
          size: (isCritical ? 22 : 16) + s * 3,
          color: s === 0 && isCritical ? '#fde047' : '#ffffff',
          alpha: 1,
          life: 0,
          maxLife: 0.28 + s * 0.05,
          gravity: 0,
          drag: 0.9,
          shape: 'slash',
          rotation: slashAngle,
          vRot: (s % 2 === 0 ? 1 : -1) * 2.5,
        });
      }
    }

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
      const speed = (isCritical ? 95 : 70) + Math.random() * (isCritical ? 210 : 150);
      const color = palette[i % palette.length];

      let shape: Particle['shape'] = 'spark';
      if (isWeapon) {
        shape = i % 3 === 0 ? 'spark' : i % 3 === 1 ? 'ember' : 'star';
      } else if (isPotion) {
        shape = i % 3 === 0 ? 'ember' : i % 3 === 1 ? 'circle' : 'diamond';
      } else {
        shape = i % 3 === 0 ? 'rune' : i % 3 === 1 ? 'star' : 'diamond';
      }

      this.particles.push({
        x: x + (Math.random() - 0.5) * 16,
        y: y + (Math.random() - 0.5) * 16,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (isPotion ? 40 : 20),
        size: (isCritical ? 5.5 : 4.2) + Math.random() * 4.5,
        color,
        alpha: 1,
        life: 0,
        maxLife: 0.45 + Math.random() * 0.35,
        gravity: isPotion ? -30 : 130,
        drag: 0.93,
        shape,
        rotation: angle,
        vRot: (Math.random() - 0.5) * 10,
        trail: i % 2 === 0 ? [{ x, y }] : undefined,
      });
    }

    // Combat impact shockwave rings
    this.rings.push({
      x,
      y,
      radius: 8,
      maxRadius: isCritical ? 105 : 72,
      color: primaryColor,
      lineWidth: isCritical ? 5 : 3.5,
      life: 0,
      maxLife: isCritical ? 0.45 : 0.34,
    });

    if (isCritical) {
      this.rings.push({
        x,
        y,
        radius: 4,
        maxRadius: 135,
        color: '#ef4444',
        lineWidth: 3,
        life: 0,
        maxLife: 0.55,
      });
    }

    this.triggerScreenShake(isCritical ? 10 : 6);
  }

  /**
   * 위로 떠오르며 페이드아웃되는 세련된 플로팅 텍스트 렌더링
   */
  public spawnFloatingText(
    x: number,
    y: number,
    text: string,
    style: FloatingTextStyle = 'normal'
  ): void {
    // Slight horizontal jitter so stacked texts remain readable
    const jitterX = (Math.random() - 0.5) * 18;
    const isBig = style === 'critical' || style === 'cross' || style === 'discovery';

    this.floatingTexts.push({
      x: x + jitterX,
      y: y - 10,
      vx: (Math.random() - 0.5) * 14,
      vy: isBig ? -72 : -56,
      text,
      style,
      life: 0,
      maxLife: isBig ? 1.25 : 0.95,
      scale: isBig ? 1.25 : 1.0,
    });
  }

  /**
   * `.game-shell` 또는 `document.body`에 짧은 타격감 흔들림 효과 부여
   */
  public triggerScreenShake(intensity: number = 6): void {
    const target = (document.querySelector('.game-shell') as HTMLElement) || document.body;
    if (!target) return;

    if (this.shakeTimer !== null) {
      window.clearTimeout(this.shakeTimer);
    }

    const start = performance.now();
    const duration = 240;

    const stepShake = (now: number) => {
      const elapsed = now - start;
      if (elapsed >= duration) {
        target.style.transform = '';
        return;
      }
      const progress = 1 - elapsed / duration;
      const offset = intensity * progress;
      const dx = (Math.random() * 2 - 1) * offset;
      const dy = (Math.random() * 2 - 1) * offset;
      target.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0)`;
      requestAnimationFrame(stepShake);
    };

    requestAnimationFrame(stepShake);
    this.shakeTimer = window.setTimeout(() => {
      target.style.transform = '';
      this.shakeTimer = null;
    }, duration + 20);
  }

  private loop = (now: number): void => {
    const dt = Math.min(0.05, Math.max(0.001, (now - this.lastTime) / 1000));
    this.lastTime = now;

    this.updateAndRender(dt);
    this.rafId = requestAnimationFrame(this.loop);
  };

  private updateAndRender(dt: number): void {
    const ctx = this.ctx;
    const width = window.innerWidth;
    const height = window.innerHeight;

    ctx.clearRect(0, 0, width, height);

    // 1. Update & Draw Shockwave Rings
    for (let i = this.rings.length - 1; i >= 0; i--) {
      const r = this.rings[i];
      r.life += dt;
      if (r.life >= r.maxLife) {
        this.rings.splice(i, 1);
        continue;
      }

      const t = r.life / r.maxLife;
      const easeOut = 1 - Math.pow(1 - t, 3);
      const currentRadius = r.radius + (r.maxRadius - r.radius) * easeOut;
      const alpha = Math.max(0, 1 - t);

      ctx.save();
      ctx.beginPath();
      ctx.arc(r.x, r.y, currentRadius, 0, Math.PI * 2);
      ctx.strokeStyle = r.color;
      ctx.globalAlpha = alpha * 0.85;
      ctx.lineWidth = Math.max(0.5, r.lineWidth * (1 - t * 0.7));
      ctx.shadowColor = r.color;
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.restore();
    }

    // 2. Update & Draw Particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life += dt;
      if (p.life >= p.maxLife) {
        this.particles.splice(i, 1);
        continue;
      }

      const t = p.life / p.maxLife;
      p.vx *= Math.pow(p.drag, dt * 60);
      p.vy *= Math.pow(p.drag, dt * 60);
      p.vy += p.gravity * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.rotation += p.vRot * dt;
      p.alpha = Math.max(0, 1 - Math.pow(t, 1.5));

      if (p.trail) {
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 5) {
          p.trail.shift();
        }
      }

      ctx.save();
      ctx.globalAlpha = p.alpha;

      // Draw subtle starlight trail if present
      if (p.trail && p.trail.length > 1) {
        ctx.beginPath();
        ctx.moveTo(p.trail[0].x, p.trail[0].y);
        for (let k = 1; k < p.trail.length; k++) {
          ctx.lineTo(p.trail[k].x, p.trail[k].y);
        }
        ctx.strokeStyle = p.color;
        ctx.lineWidth = Math.max(1, p.size * 0.45 * (1 - t));
        ctx.globalAlpha = p.alpha * 0.45;
        ctx.stroke();
        ctx.globalAlpha = p.alpha;
      }

      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 8;

      const sz = Math.max(0.5, p.size * (1 - t * 0.4));

      if (p.shape === 'star') {
        this.drawStar(ctx, 0, 0, 4, sz * 1.25, sz * 0.45);
      } else if (p.shape === 'slash') {
        // Crescent sword slash arc
        ctx.beginPath();
        ctx.arc(0, 0, sz * 1.4, -Math.PI * 0.42, Math.PI * 0.42, false);
        ctx.quadraticCurveTo(sz * 0.55, 0, Math.cos(-Math.PI * 0.42) * sz * 1.4, Math.sin(-Math.PI * 0.42) * sz * 1.4);
        ctx.closePath();
        ctx.fill();
      } else if (p.shape === 'rune') {
        // Mystical arcane rune shard (hollow crystal polygon + inner glyph line)
        ctx.beginPath();
        ctx.moveTo(0, -sz * 1.35);
        ctx.lineTo(sz * 0.95, -sz * 0.35);
        ctx.lineTo(sz * 0.65, sz * 1.15);
        ctx.lineTo(-sz * 0.65, sz * 1.15);
        ctx.lineTo(-sz * 0.95, -sz * 0.35);
        ctx.closePath();
        ctx.strokeStyle = p.color;
        ctx.lineWidth = Math.max(1.2, sz * 0.28);
        ctx.stroke();
        ctx.globalAlpha = p.alpha * 0.45;
        ctx.fill();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.moveTo(0, -sz * 0.75);
        ctx.lineTo(0, sz * 0.65);
        ctx.stroke();
      } else if (p.shape === 'ember') {
        // Rising glowing ember droplet
        ctx.beginPath();
        ctx.moveTo(sz * 1.3, 0);
        ctx.quadraticCurveTo(0, sz * 0.7, -sz * 1.1, 0);
        ctx.quadraticCurveTo(0, -sz * 0.7, sz * 1.3, 0);
        ctx.closePath();
        ctx.fill();
      } else if (p.shape === 'diamond') {
        ctx.beginPath();
        ctx.moveTo(0, -sz * 1.2);
        ctx.lineTo(sz * 0.85, 0);
        ctx.lineTo(0, sz * 1.2);
        ctx.lineTo(-sz * 0.85, 0);
        ctx.closePath();
        ctx.fill();
      } else if (p.shape === 'spark') {
        ctx.beginPath();
        ctx.ellipse(0, 0, sz * 1.5, sz * 0.38, 0, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, sz * 0.75, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }

    // 3. Update & Draw Floating Texts
    for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
      const ft = this.floatingTexts[i];
      ft.life += dt;
      if (ft.life >= ft.maxLife) {
        this.floatingTexts.splice(i, 1);
        continue;
      }

      const t = ft.life / ft.maxLife;
      ft.x += ft.vx * dt;
      ft.y += ft.vy * dt;
      ft.vy *= Math.pow(0.92, dt * 60);

      // Elastic pop-in scale in the first 18% of lifetime
      let popScale = ft.scale;
      if (t < 0.18) {
        const p = t / 0.18;
        popScale = ft.scale * (0.6 + 0.55 * Math.sin(p * Math.PI * 0.85));
      }

      const alpha = t < 0.7 ? 1 : Math.max(0, 1 - (t - 0.7) / 0.3);

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(ft.x, ft.y);
      ctx.scale(popScale, popScale);

      const { fill, stroke, glow, fontSize } = this.getStyleColors(ft.style);
      ctx.font = `900 ${fontSize}px 'Pretendard', 'Segoe UI', system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      ctx.shadowColor = glow;
      ctx.shadowBlur = 12;
      ctx.lineWidth = 4;
      ctx.strokeStyle = stroke;
      ctx.strokeText(ft.text, 0, 0);

      ctx.fillStyle = fill;
      ctx.fillText(ft.text, 0, 0);

      ctx.restore();
    }
  }

  private drawStar(
    ctx: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    spikes: number,
    outerRadius: number,
    innerRadius: number
  ): void {
    let rot = (Math.PI / 2) * 3;
    const step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      ctx.lineTo(cx + Math.cos(rot) * outerRadius, cy + Math.sin(rot) * outerRadius);
      rot += step;
      ctx.lineTo(cx + Math.cos(rot) * innerRadius, cy + Math.sin(rot) * innerRadius);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fill();
  }

  private getStyleColors(style: FloatingTextStyle): {
    fill: string;
    stroke: string;
    glow: string;
    fontSize: number;
  } {
    switch (style) {
      case 'critical':
        return {
          fill: '#fde047',
          stroke: '#78350f',
          glow: '#f59e0b',
          fontSize: 20,
        };
      case 'cross':
        return {
          fill: '#f0abfc',
          stroke: '#4a044e',
          glow: '#c084fc',
          fontSize: 20,
        };
      case 'gold':
        return {
          fill: '#fbbf24',
          stroke: '#451a03',
          glow: '#f59e0b',
          fontSize: 17,
        };
      case 'energy':
        return {
          fill: '#38bdf8',
          stroke: '#082f49',
          glow: '#0ea5e9',
          fontSize: 17,
        };
      case 'discovery':
        return {
          fill: '#6ee7b7',
          stroke: '#064e3b',
          glow: '#10b981',
          fontSize: 19,
        };
      default:
        return {
          fill: '#f8fafc',
          stroke: '#0f172a',
          glow: '#64748b',
          fontSize: 16,
        };
    }
  }
}
