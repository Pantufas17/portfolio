const CONFIG = {
  count: { desktop: 36, tablet: 23, mobile: 14 },
  breakpoints: { mobile: 720, tablet: 1024 },
  direction: { x: -0.82, y: -0.18 },
  drift: { amplitude: 18, frequency: 0.32 },
  fadeDistance: 110,
  depth: {
    small: { size: [14, 18], opacity: [0.3, 0.6], blur: [0, 0.15], speed: [15, 25] },
    medium: { size: [28, 48], opacity: [0.16, 0.34], blur: [0, 0.4], speed: [8, 16] },
    large: { size: [60, 120], opacity: [0.06, 0.12], blur: [0.8, 1.8], speed: [5, 10] },
  },
  mobileScale: { small: 0.78, medium: 0.65, large: 0.48 },
  pointer: { radius: 170, force: 52, easing: 5 },
  performance: { slowFrameMs: 30, slowFramesBeforeReduce: 12, reductionFactor: 0.8, minimumCount: 12 },
} as const;

type Depth = keyof typeof CONFIG.depth;

type WordInstance = {
  element: HTMLSpanElement;
  depth: Depth;
  x: number;
  y: number;
  width: number;
  height: number;
  vx: number;
  vy: number;
  rotation: number;
  phase: number;
  pushX: number;
  pushY: number;
  baseOpacity: number;
};

let words: readonly string[] = [];
let instances: WordInstance[] = [];
let container: HTMLElement | null = null;
let bounds = { width: 0, height: 0 };
let frame = 0;
let lastFrameAt = 0;
let elapsed = 0;
let slowFrameCount = 0;
let performanceCap = Number.POSITIVE_INFINITY;
let isVisible = true;
let pointer = { x: -10000, y: -10000 };
let pointerEnabled = window.matchMedia('(pointer: fine)').matches
  && !window.matchMedia('(max-width: 720px)').matches;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const random = (min: number, max: number): number => min + Math.random() * (max - min);
const clamp = (value: number, min: number, max: number): number => Math.min(max, Math.max(min, value));
const rangeValue = (range: readonly [number, number]): number => random(range[0], range[1]);

function getTargetCount(): number {
  const width = window.innerWidth;
  if (width <= CONFIG.breakpoints.mobile) return CONFIG.count.mobile;
  if (width <= CONFIG.breakpoints.tablet) return CONFIG.count.tablet;
  return CONFIG.count.desktop;
}

function getDepth(index: number, count: number): Depth {
  const ratio = index / count;
  if (ratio < 0.34) return 'small';
  if (ratio < 0.7) return 'medium';
  return 'large';
}

function pickWord(index: number): string {
  if (!words.length) return '';
  return words[index % words.length];
}

function getSpreadPositions(count: number): Array<{ x: number; y: number }> {
  const aspect = bounds.width / Math.max(1, bounds.height);
  const columns = Math.ceil(Math.sqrt(count * aspect) * 2);
  const rows = Math.ceil(count / columns * 3);
  const centerX = bounds.width * 0.5;
  const centerY = bounds.height * 0.54;
  const radiusX = bounds.width * 0.38;
  const radiusY = bounds.height * 0.44;
  const candidates: Array<{ x: number; y: number }> = [];

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const x = (column + 0.5) * bounds.width / columns;
      const y = (row + 0.5) * bounds.height / rows;
      const dx = (x - centerX) / Math.max(1, radiusX);
      const dy = (y - centerY) / Math.max(1, radiusY);
      if (dx * dx + dy * dy >= 1) {
        candidates.push({
          x: x + random(-0.2, 0.2) * bounds.width / columns,
          y: y + random(-0.2, 0.2) * bounds.height / rows,
        });
      }
    }
  }

  const step = candidates.length / count;
  const selected = Array.from({ length: count }, (_, index) =>
    candidates[Math.min(candidates.length - 1, Math.floor((index + random(0.35, 0.65)) * step))]);
  for (let index = selected.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [selected[index], selected[swapIndex]] = [selected[swapIndex], selected[index]];
  }
  return selected;
}

function measure(instance: WordInstance): void {
  const rect = instance.element.getBoundingClientRect();
  instance.width = rect.width;
  instance.height = rect.height;
}

function styleInstance(instance: WordInstance, index: number): void {
  const { element, depth } = instance;
  const settings = CONFIG.depth[depth];
  const mobile = window.innerWidth <= CONFIG.breakpoints.mobile;
  const tablet = window.innerWidth > CONFIG.breakpoints.mobile && window.innerWidth <= CONFIG.breakpoints.tablet;
  const scale = mobile ? CONFIG.mobileScale[depth] : tablet ? 0.82 : 1;
  const size = rangeValue(settings.size) * scale;
  const opacity = rangeValue(settings.opacity);
  instance.baseOpacity = opacity;

  element.textContent = pickWord(index);
  element.classList.toggle('hero-float-word--serif', Math.random() < 0.32);
  element.classList.toggle('hero-float-word--sans', !element.classList.contains('hero-float-word--serif'));
  element.style.fontSize = depth === 'large' && !mobile
    ? tablet
      ? `clamp(40px, ${random(4.5, 6.5)}vw, 80px)`
      : `clamp(60px, ${random(5, 8)}vw, 120px)`
    : `${size}px`;
  element.style.opacity = String(opacity);
  element.style.filter = `blur(${rangeValue(settings.blur)}px)`;
  element.style.color = Math.random() < 0.24 ? '#82b5ff' : Math.random() < 0.18 ? '#f1f4fa' : '#c9d9f2';
  element.style.fontWeight = depth === 'small' ? '500' : '400';
  element.style.letterSpacing = element.classList.contains('hero-float-word--serif') ? '-0.045em' : '0.12em';
  element.style.textTransform = element.classList.contains('hero-float-word--sans') ? 'uppercase' : 'none';
}

function applyTransform(
  instance: WordInstance,
  edgeOpacity = 1,
  driftX = 0,
  driftY = 0,
): void {
  const x = instance.x + instance.pushX + driftX;
  const y = instance.y + instance.pushY + driftY;
  instance.element.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${instance.rotation.toFixed(2)}deg)`;
  instance.element.style.opacity = String(instance.baseOpacity * edgeOpacity);
}

function createInstances(): void {
  if (!container) return;
  const count = Math.min(getTargetCount(), performanceCap);
  const fragment = document.createDocumentFragment();
  const nextInstances: WordInstance[] = [];

  for (let index = 0; index < count; index += 1) {
    const depth = getDepth(index, count);
    const element = document.createElement('span');
    element.className = 'hero-float-word';
    const settings = CONFIG.depth[depth];
    const speed = rangeValue(settings.speed);
    const instance: WordInstance = {
      element,
      depth,
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      vx: CONFIG.direction.x * speed * random(0.82, 1.18),
      vy: CONFIG.direction.y * speed * random(0.55, 1.5),
      rotation: random(-8, 8),
      phase: random(0, Math.PI * 2),
      pushX: 0,
      pushY: 0,
      baseOpacity: 0,
    };
    styleInstance(instance, index);
    nextInstances.push(instance);
    fragment.append(element);
  }

  container.replaceChildren(fragment);
  instances = nextInstances;
  const positions = getSpreadPositions(count);
  instances.forEach((instance, index) => {
    measure(instance);
    const position = positions[index];
    instance.x = clamp(position.x - instance.width / 2, 0, Math.max(0, bounds.width - instance.width));
    instance.y = clamp(position.y - instance.height / 2, 0, Math.max(0, bounds.height - instance.height));
    applyTransform(instance);
  });
}

function updateWords(): void {
  instances.forEach((instance, index) => {
    instance.element.textContent = pickWord(index);
    measure(instance);
    instance.x = clamp(instance.x, 0, Math.max(0, bounds.width - instance.width));
    instance.y = clamp(instance.y, 0, Math.max(0, bounds.height - instance.height));
    applyTransform(instance);
  });
}

function resize(): void {
  if (!container) return;
  const rect = container.getBoundingClientRect();
  const previous = bounds;
  bounds = { width: rect.width, height: rect.height };
  pointerEnabled = window.matchMedia('(pointer: fine)').matches
    && window.innerWidth > CONFIG.breakpoints.mobile;

  const targetCount = Math.min(getTargetCount(), performanceCap);
  if (instances.length !== targetCount) {
    createInstances();
    return;
  }

  const scaleX = previous.width > 0 ? bounds.width / previous.width : 1;
  const scaleY = previous.height > 0 ? bounds.height / previous.height : 1;
  instances.forEach((instance) => {
    instance.x = clamp(instance.x * scaleX, 0, Math.max(0, bounds.width - instance.width));
    instance.y = clamp(instance.y * scaleY, 0, Math.max(0, bounds.height - instance.height));
    applyTransform(instance);
  });
}

function updateInstance(instance: WordInstance, delta: number): void {
  const seconds = delta / 1000;
  instance.x += instance.vx * seconds;
  instance.y += instance.vy * seconds;

  if (instance.x + instance.width < 0) instance.x = bounds.width;
  else if (instance.x > bounds.width) instance.x = -instance.width;
  if (instance.y + instance.height < 0) instance.y = bounds.height;
  else if (instance.y > bounds.height) instance.y = -instance.height;

  const driftX = Math.cos(elapsed * CONFIG.drift.frequency * 0.72 + instance.phase) * CONFIG.drift.amplitude * 0.22;
  const driftY = Math.sin(elapsed * CONFIG.drift.frequency + instance.phase) * CONFIG.drift.amplitude;
  const visualX = instance.x + driftX;
  const visualY = instance.y + driftY;
  let targetX = 0;
  let targetY = 0;
  if (pointerEnabled) {
    const centerX = visualX + instance.width / 2;
    const centerY = visualY + instance.height / 2;
    const dx = centerX - pointer.x;
    const dy = centerY - pointer.y;
    const distance = Math.hypot(dx, dy);
    if (distance > 0 && distance < CONFIG.pointer.radius) {
      const strength = (1 - distance / CONFIG.pointer.radius) * CONFIG.pointer.force;
      targetX = (dx / distance) * strength;
      targetY = (dy / distance) * strength;
    }
  }
  const easing = 1 - Math.exp(-CONFIG.pointer.easing * seconds);
  instance.pushX += (targetX - instance.pushX) * easing;
  instance.pushY += (targetY - instance.pushY) * easing;

  const fade = CONFIG.fadeDistance;
  const edgeOpacity = Math.min(
    clamp(visualX / fade, 0, 1),
    clamp((bounds.width - visualX - instance.width) / fade, 0, 1),
    clamp(visualY / fade, 0, 1),
    clamp((bounds.height - visualY - instance.height) / fade, 0, 1),
  );
  applyTransform(instance, edgeOpacity, driftX, driftY);
}

function tick(timestamp: number): void {
  frame = 0;
  if (document.hidden || !isVisible || reducedMotion.matches) return;

  const delta = lastFrameAt ? Math.min(timestamp - lastFrameAt, 64) : 16.67;
  lastFrameAt = timestamp;
  elapsed += delta / 1000;
  if (delta > CONFIG.performance.slowFrameMs) slowFrameCount += 1;
  else slowFrameCount = Math.max(0, slowFrameCount - 1);

  if (slowFrameCount >= CONFIG.performance.slowFramesBeforeReduce
    && instances.length > CONFIG.performance.minimumCount) {
    performanceCap = Math.max(CONFIG.performance.minimumCount, Math.floor(instances.length * CONFIG.performance.reductionFactor));
    slowFrameCount = 0;
    createInstances();
  }

  instances.forEach((instance) => updateInstance(instance, delta));
  frame = window.requestAnimationFrame(tick);
}

function start(): void {
  if (frame || document.hidden || !isVisible || reducedMotion.matches) return;
  lastFrameAt = 0;
  frame = window.requestAnimationFrame(tick);
}

function stop(): void {
  if (!frame) return;
  window.cancelAnimationFrame(frame);
  frame = 0;
  lastFrameAt = 0;
}

export function setFloatingWords(nextWords: readonly string[]): void {
  words = nextWords;
  if (!container) {
    container = document.getElementById('hero-word-cloud');
    if (!container) return;
    const rect = container.getBoundingClientRect();
    bounds = { width: rect.width, height: rect.height };
    createInstances();

    const hero = document.getElementById('hero');
    if (hero && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) start();
        else stop();
      });
      observer.observe(hero);
    }
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop();
      else start();
    });
    window.addEventListener('resize', resize, { passive: true });
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    hero?.addEventListener('pointermove', (event) => {
      if (!pointerEnabled || event.pointerType !== 'mouse') return;
      const rect = container?.getBoundingClientRect();
      if (!rect) return;
      pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top };
    });
    hero?.addEventListener('pointerleave', () => {
      pointer = { x: -10000, y: -10000 };
    });
    reducedMotion.addEventListener('change', () => {
      if (reducedMotion.matches) {
        stop();
        instances.forEach((instance) => applyTransform(instance));
      } else {
        start();
      }
    });
    start();
    return;
  }
  updateWords();
}
