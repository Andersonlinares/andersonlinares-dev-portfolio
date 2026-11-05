import { useEffect, useRef, useState } from "react";
import { Bot, Database, FileText, MessageCircle, Play, Webhook, Workflow } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useLang } from "@/lib/i18n";

const icons = [FileText, Webhook, Workflow, Bot, Database, MessageCircle];

type Log = { time: string; text: string; done?: boolean };

/** Simulação de um lead passando por um fluxo de automação */
const FlowSection = () => {
  const { t, lang } = useLang();
  const f = t.flow;
  const [step, setStep] = useState(-1); // nó ativo
  const [running, setRunning] = useState(false);
  const [logs, setLogs] = useState<Log[]>([]);
  const runId = useRef(0);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    runId.current++;
    setRunning(false);
    setStep(-1);
    setLogs([]);
  }, [lang]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [logs]);

  const run = async () => {
    if (running) return;
    const id = ++runId.current;
    setRunning(true);
    setLogs([]);
    const name = f.names[Math.floor(Math.random() * f.names.length)];
    let total = 0;
    for (let i = 0; i < f.nodes.length; i++) {
      if (runId.current !== id) return;
      setStep(i);
      const ms = 60 + Math.round(Math.random() * 260);
      total += ms;
      await new Promise((r) => setTimeout(r, 520));
      if (runId.current !== id) return;
      const stamp = `+${String(total).padStart(4, "0")}ms`;
      setLogs((l) => [...l, { time: stamp, text: `[${f.nodes[i]}] ${f.logs[i].replace("{name}", name)}` }]);
    }
    if (runId.current !== id) return;
    setStep(f.nodes.length);
    setLogs((l) => [...l, { time: "✓", text: f.done.replace("{ms}", String(total)), done: true }]);
    setRunning(false);
  };

  return (
    <section id="fluxo" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="kicker">{f.kicker}</p>
              <h2 className="section-title">{f.title}</h2>
              <p className="mt-4 text-muted-foreground">{f.text}</p>
            </div>
            <button
              onClick={run}
              disabled={running}
              className="inline-flex h-12 shrink-0 items-center gap-2 self-start rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.7)] transition-transform hover:-translate-y-0.5 disabled:opacity-70 md:self-auto"
            >
              <Play size={16} fill="currentColor" /> {running ? f.running : f.run}
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="glass mt-10 rounded-[28px] p-4 sm:p-6">
            {/* nós */}
            <ol className="grid grid-cols-3 gap-3 sm:grid-cols-6 sm:gap-0">
              {f.nodes.map((n, i) => {
                const Icon = icons[i];
                const isActive = step === i;
                const isDone = step > i;
                return (
                  <li key={n} className="relative flex flex-col items-center gap-2.5 py-2">
                    {i < f.nodes.length - 1 && (
                      <span className="absolute left-[calc(50%+30px)] right-[calc(-50%+30px)] top-[34px] hidden h-px overflow-hidden bg-white/10 sm:block" aria-hidden>
                        <span
                          className="absolute inset-y-0 left-0 bg-primary transition-[width] duration-500 ease-out"
                          style={{ width: step > i ? "100%" : "0%", boxShadow: "0 0 10px hsl(var(--primary))" }}
                        />
                      </span>
                    )}
                    <div
                      className={`relative flex h-[52px] w-[52px] items-center justify-center rounded-2xl border transition-all duration-300 ${
                        isActive
                          ? "scale-110 border-primary bg-primary/15 text-primary shadow-[0_0_30px_-4px_hsl(var(--primary)/0.7)]"
                          : isDone
                            ? "border-primary/40 bg-primary/10 text-primary"
                            : "bg-white/[0.03] text-muted-foreground"
                      }`}
                    >
                      <Icon size={20} />
                      {isActive && <span className="absolute inset-0 animate-ping rounded-2xl border border-primary/50" />}
                    </div>
                    <span className={`font-mono text-[11px] sm:text-xs ${isActive || isDone ? "text-foreground" : "text-muted-foreground"}`}>{n}</span>
                  </li>
                );
              })}
            </ol>

            {/* log */}
            <div
              ref={logRef}
              className="mt-5 h-44 overflow-y-auto rounded-2xl border bg-black/30 p-4 font-mono text-[12px] leading-relaxed sm:text-[12.5px]"
              aria-live="polite"
            >
              {logs.length === 0 ? (
                <span className="text-muted-foreground">
                  <span className="text-primary">$</span> {lang === "pt" ? "aguardando novo lead…" : "waiting for a new lead…"}
                </span>
              ) : (
                logs.map((l, i) => (
                  <div key={i} className={`flex gap-3 animate-fade-in ${l.done ? "text-emerald-400" : ""}`}>
                    <span className="w-16 shrink-0 text-muted-foreground/70">{l.time}</span>
                    <span className={l.done ? "" : "text-foreground/90"}>{l.text}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FlowSection;
