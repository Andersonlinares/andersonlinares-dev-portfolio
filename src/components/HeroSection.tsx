import { useEffect, useRef, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { contactInfo, useLang } from "@/lib/i18n";
import { liquidSupported, useLiquidGlass } from "@/lib/liquid-glass";

/* Terminal que digita sozinho */
function Terminal() {
  const { t, lang } = useLang();
  const script = t.hero.terminal;
  const [lines, setLines] = useState<{ kind: "cmd" | "out"; text: string }[]>([]);
  const [typing, setTyping] = useState("");

  useEffect(() => {
    let cancelled = false;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wait = (ms: number) => new Promise((r) => setTimeout(r, reduce ? 0 : ms));
    setLines([]);
    setTyping("");
    (async () => {
      await wait(700);
      for (const step of script) {
        for (let i = 1; i <= step.cmd.length; i++) {
          if (cancelled) return;
          setTyping(step.cmd.slice(0, i));
          await wait(55 + Math.random() * 45);
        }
        await wait(250);
        if (cancelled) return;
        setTyping("");
        setLines((l) => [...l, { kind: "cmd", text: step.cmd }]);
        for (const o of step.out) {
          await wait(140);
          if (cancelled) return;
          setLines((l) => [...l, { kind: "out", text: o }]);
        }
        await wait(650);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [script, lang]);

  return (
    <div className="glass overflow-hidden rounded-3xl font-mono text-[12.5px] leading-relaxed sm:text-[13px]">
      <div className="flex items-center gap-1.5 border-b px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[11px] text-muted-foreground">anderson@linares: ~</span>
      </div>
      <div className="min-h-[236px] space-y-0.5 p-4 sm:p-5" aria-live="off">
        {lines.map((l, i) =>
          l.kind === "cmd" ? (
            <div key={i} className={i ? "pt-2" : ""}>
              <span className="text-primary">❯</span> <span className="text-foreground">{l.text}</span>
            </div>
          ) : (
            <div key={i} className={l.text.startsWith("●") ? "text-emerald-400" : "text-muted-foreground"}>
              {l.text}
            </div>
          ),
        )}
        <div className={lines.length ? "pt-2" : ""}>
          <span className="text-primary">❯</span> <span className="caret text-foreground">{typing}</span>
        </div>
      </div>
    </div>
  );
}

/* Lente de vidro líquido arrastável sobre o nome */
function Lens({ hint }: { hint: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [touched, setTouched] = useState(false);
  useLiquidGlass(ref, { bezel: 30, strength: 46, radius: 9999, blur: 0.2, saturate: 1.3 });

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current!;
    const parent = el.offsetParent as HTMLElement;
    const pr = parent.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    const offX = e.clientX - r.left;
    const offY = e.clientY - r.top;
    el.setPointerCapture(e.pointerId);
    setTouched(true);
    const move = (ev: PointerEvent) => {
      const x = Math.min(Math.max(ev.clientX - pr.left - offX, -20), pr.width - r.width + 20);
      const y = Math.min(Math.max(ev.clientY - pr.top - offY, -20), pr.height - r.height + 20);
      setPos({ x, y });
    };
    const up = () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", up);
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
  };

  if (!liquidSupported) return null;
  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      className={`liquid lens absolute z-10 h-24 w-24 cursor-grab touch-none select-none rounded-full active:cursor-grabbing sm:h-32 sm:w-32 ${
        pos ? "" : "left-[46%] top-[-4%] sm:left-[58%] sm:top-[-6%]"
      }`}
      style={pos ? { left: pos.x, top: pos.y } : { animation: "float-y 5s ease-in-out infinite" }}
      role="img"
      aria-label={hint}
    >
      {!touched && (
        <span className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] text-muted-foreground">
          ↔ {hint}
        </span>
      )}
    </div>
  );
}

/* Número que conta ao aparecer */
function CountUp({ value, plain }: { value: number; plain?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const { lang } = useLang();
  const [n, setN] = useState(plain ? value : 0);
  useEffect(() => {
    if (plain) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1400;
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / dur);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value, plain]);
  return <span ref={ref}>{plain ? value : n.toLocaleString(lang === "pt" ? "pt-BR" : "en-US")}</span>;
}

const HeroSection = () => {
  const { t } = useLang();
  return (
    <section id="top" className="relative px-4 pb-16 pt-28 sm:pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <div
            className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground animate-fade-up"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" style={{ animation: "pulse-dot 2s infinite" }} />
            {t.hero.status}
          </div>

          <p className="mt-7 font-mono text-sm text-primary animate-fade-up" style={{ animationDelay: "0.12s" }}>
            {t.hero.greeting}
          </p>
          <div className="relative">
            <h1
              className="mt-2 text-[clamp(2.75rem,9vw,5.6rem)] font-extrabold leading-[0.95] tracking-[-0.04em] animate-fade-up"
              style={{ animationDelay: "0.18s" }}
            >
              Anderson
              <br />
              <span className="text-gradient">Linares</span>
            </h1>
            <Lens hint={t.hero.lensHint} />
          </div>

          <h2 className="mt-6 text-lg font-semibold sm:text-xl animate-fade-up" style={{ animationDelay: "0.26s" }}>
            {t.hero.role}
          </h2>
          <div className="mt-3 flex flex-wrap gap-1.5 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {t.hero.roleTags.map((tag) => (
              <span key={tag} className="chip font-mono">
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base animate-fade-up" style={{ animationDelay: "0.36s" }}>
            {t.hero.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-2.5 animate-fade-up" style={{ animationDelay: "0.42s" }}>
            <a
              href="#projetos"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.7)] transition-transform hover:-translate-y-0.5"
            >
              {t.hero.ctaProjects}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex h-12 items-center gap-2 rounded-full px-5 text-sm font-semibold transition-colors hover:bg-white/[0.08]"
            >
              <MessageCircle size={16} /> {t.hero.ctaContact}
            </a>
            <a
              href={t.hero.cvFile}
              download
              className="inline-flex h-12 items-center gap-2 rounded-full px-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Download size={16} /> {t.hero.downloadCV}
            </a>
          </div>

          <div className="mt-6 flex items-center gap-1 animate-fade-up" style={{ animationDelay: "0.48s" }}>
            {[
              { icon: Linkedin, href: contactInfo.linkedin, label: "LinkedIn" },
              { icon: Github, href: contactInfo.github, label: "GitHub" },
              { icon: Mail, href: `mailto:${contactInfo.email}`, label: "E-mail" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-white/[0.06] hover:text-foreground"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Terminal />
        </div>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-4">
        {t.stats.map((s) => (
          <div key={s.label} className="glass rounded-3xl px-5 py-5">
            <div className="text-3xl font-bold tracking-tight tabular sm:text-4xl">
              <CountUp value={s.value} plain={s.plain} />
              <span className="text-primary">{s.suffix}</span>
            </div>
            <div className="mt-1 text-xs text-muted-foreground sm:text-[13px]">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
