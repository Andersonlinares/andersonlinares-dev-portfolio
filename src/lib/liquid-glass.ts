import { useEffect, type RefObject } from "react";

/*
 * Liquid Glass leve, sem dependências.
 * Mapa de deslocamento gerado em canvas a partir do perfil de uma borda "squircle"
 * convexa + refração de Snell, aplicado via feDisplacementMap em
 * backdrop-filter: url(#id). Só o Chromium aceita filtro SVG no backdrop-filter;
 * nos outros navegadores o elemento fica com o vidro fosco do CSS (.liquid).
 * Técnica de archisvaze/liquid-glass e iyinchao/liquid-glass-studio.
 */

const NS = "http://www.w3.org/2000/svg";

export const liquidSupported = (() => {
  if (typeof window === "undefined") return false;
  const ua = navigator.userAgent;
  const chromium = "chrome" in window && !/Firefox|FxiOS/.test(ua) && !/^((?!chrome|android).)*safari/i.test(ua);
  return chromium && CSS.supports("backdrop-filter", "blur(1px)");
})();

let defs: SVGDefsElement | null = null;
function getDefs() {
  if (defs) return defs;
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("width", "0");
  svg.setAttribute("height", "0");
  svg.setAttribute("aria-hidden", "true");
  svg.style.position = "absolute";
  defs = document.createElementNS(NS, "defs") as SVGDefsElement;
  svg.appendChild(defs);
  document.body.appendChild(svg);
  return defs;
}

/** quanto o raio desvia em cada ponto do bisel (0 = borda externa, 1 = fim do bisel), normalizado */
function profile(ior: number, samples = 96) {
  const out = new Float32Array(samples);
  const h = (x: number) => Math.pow(1 - Math.pow(1 - Math.min(Math.max(x, 0), 1), 4), 0.25);
  let max = 0;
  for (let i = 0; i < samples; i++) {
    const t = i / (samples - 1);
    const e = 1e-3;
    const slope = (h(t + e) - h(t - e)) / (2 * e);
    const theta = Math.atan(slope);
    const thetaR = Math.asin(Math.sin(theta) / ior);
    const d = Math.tan(theta - thetaR) * (0.35 + h(t));
    out[i] = d;
    if (d > max) max = d;
  }
  for (let i = 0; i < samples; i++) out[i] /= max || 1;
  return out;
}

function buildMap(w: number, h: number, radius: number, bezel: number, prof: Float32Array) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d")!;
  const img = ctx.createImageData(w, h);
  const data = img.data;
  const hw = w / 2;
  const hh = h / 2;
  const r = Math.min(radius, hw, hh);
  const n = prof.length - 1;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const px = x + 0.5 - hw;
      const py = y + 0.5 - hh;
      const qx = Math.abs(px) - (hw - r);
      const qy = Math.abs(py) - (hh - r);
      const sd = Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) + Math.min(Math.max(qx, qy), 0) - r;
      const dist = -sd;
      let dx = 0;
      let dy = 0;
      if (dist > 0 && dist < bezel) {
        let nx: number;
        let ny: number;
        if (qx > 0 && qy > 0) {
          const l = Math.hypot(qx, qy) || 1;
          nx = qx / l;
          ny = qy / l;
        } else if (qx > qy) {
          nx = 1;
          ny = 0;
        } else {
          nx = 0;
          ny = 1;
        }
        nx *= Math.sign(px) || 1;
        ny *= Math.sign(py) || 1;
        const m = prof[Math.round((dist / bezel) * n)];
        dx = -nx * m;
        dy = -ny * m;
      }
      const i = (y * w + x) * 4;
      data[i] = 128 + dx * 127;
      data[i + 1] = 128 + dy * 127;
      data[i + 2] = 128;
      data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return c.toDataURL();
}

export interface LiquidOptions {
  /** largura do bisel em px */
  bezel?: number;
  /** desvio máximo em px */
  strength?: number;
  ior?: number;
  blur?: number;
  saturate?: number;
  radius?: number;
}

let uid = 0;

export function useLiquidGlass(ref: RefObject<HTMLElement>, opts: LiquidOptions = {}) {
  const { bezel = 18, strength = 30, ior = 1.5, blur = 0.5, saturate = 1.6, radius } = opts;

  useEffect(() => {
    const el = ref.current;
    if (!el || !liquidSupported) return;
    const id = `lg-${++uid}`;
    const prof = profile(ior);
    const filter = document.createElementNS(NS, "filter");
    filter.setAttribute("id", id);
    filter.setAttribute("color-interpolation-filters", "sRGB");
    filter.setAttribute("x", "0");
    filter.setAttribute("y", "0");
    filter.setAttribute("width", "100%");
    filter.setAttribute("height", "100%");
    filter.innerHTML =
      `<feGaussianBlur in="SourceGraphic" stdDeviation="${blur}" result="b"/>` +
      `<feImage result="map" preserveAspectRatio="none"/>` +
      `<feDisplacementMap in="b" in2="map" scale="${strength * 2}" xChannelSelector="R" yChannelSelector="G" result="d"/>` +
      `<feColorMatrix in="d" type="saturate" values="${saturate}"/>`;
    getDefs().appendChild(filter);
    const feImage = filter.querySelector("feImage")!;

    let lastKey = "";
    const rebuild = () => {
      const w = Math.round(el.offsetWidth);
      const h = Math.round(el.offsetHeight);
      if (!w || !h) return;
      const r = radius ?? (parseFloat(getComputedStyle(el).borderTopLeftRadius) || 20);
      const key = `${w}x${h}:${r}`;
      if (key === lastKey) return;
      lastKey = key;
      const b = Math.max(2, Math.min(bezel, w / 2 - 1, h / 2 - 1));
      feImage.setAttribute("href", buildMap(w, h, r, b, prof));
      feImage.setAttribute("width", String(w));
      feImage.setAttribute("height", String(h));
      el.style.backdropFilter = `url(#${id})`;
      (el.style as CSSStyleDeclaration & { webkitBackdropFilter: string }).webkitBackdropFilter = `url(#${id})`;
      el.classList.add("lg-on");
    };

    const idle: (cb: () => void) => void =
      (window as Window & { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback ?? ((cb) => window.setTimeout(cb, 60));
    let t = 0;
    const ro = new ResizeObserver(() => {
      window.clearTimeout(t);
      t = window.setTimeout(() => idle(rebuild), 120);
    });
    ro.observe(el);
    idle(rebuild);

    return () => {
      ro.disconnect();
      window.clearTimeout(t);
      filter.remove();
      el.style.backdropFilter = "";
      el.classList.remove("lg-on");
    };
  }, [ref, bezel, strength, ior, blur, saturate, radius]);
}
