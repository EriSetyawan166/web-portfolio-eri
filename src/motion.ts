// Page-wide motion: fitted display type, marquees, bar reveals, scroll-linked effects.
// Returns a cleanup function so it can run inside a React effect.

const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => [...r.querySelectorAll<T>(s)];

// Duration-based spring (bounce 0..1) expressed as a CSS linear() easing
function spring(duration: number, bounce: number) {
  const zeta = 1 - bounce, T = duration;
  const w0 = (zeta >= 1 ? 9.23 : 6.9 / zeta) / T; // settles to ~0.1% by T
  const wd = w0 * Math.sqrt(Math.max(0, 1 - zeta * zeta));
  const pts: number[] = [];
  for (let k = 0; k <= 60; k++) {
    const t = (T * k) / 60, e = Math.exp(-zeta * w0 * t);
    const x = zeta >= 1 ? 1 - (1 + w0 * t) * e : 1 - e * (Math.cos(wd * t) + ((zeta * w0) / wd) * Math.sin(wd * t));
    pts.push(+x.toFixed(4));
  }
  return `linear(${pts.join(',')})`;
}

type Rect = { l: number; t: number; w: number; h: number };

function lineRects(el: HTMLElement): Rect[] {
  const box = el.getBoundingClientRect();
  const rows: Record<number, { l: number; r: number; t: number; b: number }> = {};
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    if (!n.textContent?.trim() || n.parentElement?.closest('.rv-bars')) continue;
    const rg = document.createRange();
    rg.selectNodeContents(n);
    for (const r of rg.getClientRects()) {
      if (r.width < 0.5) continue;
      const k = Math.round(r.top - box.top), row = rows[k];
      rows[k] = row
        ? { l: Math.min(row.l, r.left), r: Math.max(row.r, r.right), t: Math.min(row.t, r.top), b: Math.max(row.b, r.bottom) }
        : { l: r.left, r: r.right, t: r.top, b: r.bottom };
    }
  }
  return Object.values(rows)
    .sort((a, b) => a.t - b.t)
    .map((r) => ({ l: r.l - box.left, t: r.t - box.top - 2, w: r.r - r.l, h: r.b - r.t + 4 }));
}

function setBars(el: HTMLElement, rects: Rect[] | 'full', color: string, dur: string) {
  let wrap = $('.rv-bars', el);
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.className = 'rv-bars';
    wrap.setAttribute('aria-hidden', 'true');
    el.appendChild(wrap);
  }
  wrap.innerHTML =
    rects === 'full'
      ? '<div style="left:0;top:0;width:100%;height:calc(100% + 1px)"><i style="--i:0"></i></div>'
      : rects.map((r, i) => `<div style="left:${r.l}px;top:${r.t}px;width:${r.w}px;height:${r.h}px"><i style="--i:${i}"></i></div>`).join('');
  el.style.setProperty('--bar', color);
  el.style.setProperty('--dur', dur);
}

export function initMotion() {
  const cleanups: (() => void)[] = [];
  const on = <K extends keyof WindowEventMap>(type: K, fn: (e: WindowEventMap[K]) => void, opts?: AddEventListenerOptions) => {
    window.addEventListener(type, fn, opts);
    cleanups.push(() => window.removeEventListener(type, fn));
  };
  const observe = (io: IntersectionObserver, els: Element[]) => { els.forEach((e) => io.observe(e)); cleanups.push(() => io.disconnect()); };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const css = getComputedStyle(document.documentElement);
  const bg = css.getPropertyValue('--bg').trim(), ink = css.getPropertyValue('--ink').trim();

  const root = document.documentElement.style;
  root.setProperty('--spring-02-04', spring(0.4, 0.2));
  root.setProperty('--spring-02-06', spring(0.6, 0.2));
  root.setProperty('--spring-02-10', spring(1, 0.2));
  root.setProperty('--spring-0-13', spring(1.3, 0));
  root.setProperty('--spring-0-15', spring(1.5, 0));

  // Display type fitted to its container
  function fit() {
    const t = $('[data-fit]');
    if (t) {
      const spans = $$('.ln > span', t);
      spans.forEach((s) => (s.style.fontSize = '100px'));
      const size = (100 * t.clientWidth) / Math.max(...spans.map((s) => s.scrollWidth));
      spans.forEach((s) => (s.style.fontSize = size + 'px'));
    }
    const f = $('[data-fit-footer]');
    if (f?.parentElement) {
      const p = f.parentElement, fw = p.clientWidth - parseFloat(getComputedStyle(p).paddingLeft) * 2;
      f.style.fontSize = '100px';
      f.style.fontSize = Math.min((100 * fw) / f.scrollWidth, innerHeight * 0.32) + 'px';
    }
  }

  // Marquees at 40 px/s
  const marquees = $$('.marquee, .clients .track');
  const setMarquees = () => marquees.forEach((m) => (m.style.animationDuration = m.scrollWidth / 2 / 40 + 's'));

  // Heading bar reveal: one bar per line, .6s, .09s stagger, at 30% visible, once
  const heads = $$('[data-reveal]');
  const headColor = (el: HTMLElement) => (el.closest('.dark, .pcard, .ticker') ? bg : ink);
  const layoutHeads = () => heads.forEach((h) => setBars(h, lineRects(h), headColor(h), '.6s'));

  function relayout() { fit(); setMarquees(); if (!reduce) layoutHeads(); }
  relayout();
  document.fonts?.ready.then(relayout);
  let raf = 0;
  on('resize', () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(relayout); });

  if (!reduce) {
    heads.forEach((h) => h.classList.add('rv'));
    const once = (cls: string, opts: IntersectionObserverInit) =>
      new IntersectionObserver((es, io) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add(cls); io.unobserve(e.target); } }), opts);
    observe(once('in', { threshold: 0.3 }), heads);

    // Image reveal: one band, .7s, when the image passes 70% of the viewport
    const imgs = $$('.card .img, .about .card .media');
    imgs.forEach((im) => { im.classList.add('rv'); setBars(im, 'full', bg, '.7s'); });
    observe(once('in', { rootMargin: '0px 0px -30% 0px' }), imgs);

    // Services: label bar settles from scale 2 / y -7; right column rises 533px
    const bar = $('.svc-left .bar'), right = $('.svc-right'), svc = $('#services');
    if (bar && right && svc) {
      bar.style.transform = 'translateY(-7px) scale(2)';
      right.style.transform = 'translateY(533px)';
      const o1 = new IntersectionObserver((es) => { if (es[0].isIntersecting) { bar.style.transition = 'transform 1.3s var(--spring-0-13) .3s'; bar.style.transform = 'none'; o1.disconnect(); } }, { threshold: 0.5 });
      const o2 = new IntersectionObserver((es) => { if (es[0].isIntersecting) { right.style.transition = 'transform 1.5s var(--spring-0-15)'; right.style.transform = 'none'; o2.disconnect(); } }, { threshold: 0 });
      o1.observe(bar); o2.observe(svc);
      cleanups.push(() => { o1.disconnect(); o2.disconnect(); bar.style.cssText = ''; right.style.cssText = ''; });
    }
  }

  // Count-up badge
  const c = $('[data-count]');
  if (c) {
    const target = +(c.dataset.count ?? 0);
    let v = reduce ? target : 0;
    c.textContent = v + '+';
    const tick = setInterval(() => { v = Math.min(target, v + 1); c.textContent = v + '+'; if (v >= target) clearInterval(tick); }, 120);
    cleanups.push(() => clearInterval(tick));
  }

  // Barcode in the about side panel follows scroll through a spring (k 500, c 60, m 1)
  const deco = $('.about .barcode'), about = $('.about');
  let x = 180, vel = 0, last = performance.now(), frame = 0;
  const prog = (el: Element) => { const r = el.getBoundingClientRect(); return Math.min(1, Math.max(0, (innerHeight - r.top) / innerHeight)); };
  function loop(now: number) {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    if (deco && about && !reduce) {
      const target = 180 * (1 - prog(about));
      vel += (-500 * (x - target) - 60 * vel) * dt;
      x += vel * dt;
      deco.style.transform = `translateX(${x.toFixed(2)}px)`;
    }
    frame = requestAnimationFrame(loop);
  }
  frame = requestAnimationFrame(loop);
  cleanups.push(() => cancelAnimationFrame(frame));

  return () => cleanups.forEach((fn) => fn());
}
