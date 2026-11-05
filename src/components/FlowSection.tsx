import { useEffect, useRef, useState } from "react";
import { Cpu, Database, Monitor, Send, Server, ShieldCheck, Webhook } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useLang } from "@/lib/i18n";

const icons = [Monitor, Server, ShieldCheck, Cpu, Database, Webhook];

const methodColor: Record<string, string> = {
  GET: "text-emerald-400",
  POST: "text-sky-400",
  PATCH: "text-amber-300",
};

type Log = { time: string; text: string; done?: boolean };

/** Simulação de uma requisição atravessando as camadas de um sistema */
const FlowSection = () => {
  const { t, lang } = useLang();
  const f = t.flow;
  const [step, setStep] = useState(-1);
  const [running, setRunning] = useState(false);
  const [logs, setLogs] = useState<Log[]>([]);
  const [req, setReq] = useState(f.requests[0]);
  const runId = useRef(0);
  const reqIndex = useRef(0);
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

  const fill = (s: string, r: (typeof f.requests)[number], ms = 0) =>
    s.replace("{method}", r.method).replace("{path}", r.path).replace("{table}", r.table).replace("{status}", r.status).replace("{ms}", String(ms));

  const run = async () => {
    if (running) return;
    const id = ++runId.current;
    const r = f.requests[reqIndex.current++ % f.requests.length];
    setReq(r);
    setRunning(true);
    setLogs([]);
    let total = 0;
    for (let i = 0; i < f.nodes.length; i++) {
      if (runId.current !== id) return;
      setStep(i);
      total += 4 + Math.round(Math.random() * (i === 4 ? 38 : 14));
      await new Promise((res) => setTimeout(res, 480));
      if (runId.current !== id) return;
      setLogs((l) => [...l, { time: `+${String(total).padStart(3, "0")}ms`, text: `[${f.nodes[i]}] ${fill(f.logs[i], r)}` }]);
    }
    if (runId.current !== id) return;
    setStep(f.nodes.length);
    setLogs((l) => [...l, { time: "←", text: fill(f.done, r, total), done: true }]);
    setRunning(false);
  };

  return (
    <section id="arquitetura" className="px-4 py-20 sm:py-28">
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
              <Send size={16} /> {running ? f.running : f.run}
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="glass mt-10 rounded-[28px] p-4 sm:p-6">
            {/* requisição atual */}
            <div className="mb-5 flex items-center gap-3 overflow-hidden rounded-2xl border bg-black/30 px-4 py-3 font-mono text-[12.5px] sm:text-[13px]">
              <span className={`font-semibold ${methodColor[req.method] ?? "text-primary"}`}>{req.method}</span>
              <span className="truncate text-foreground/90">{req.path}</span>
              <span className={`ml-auto shrink-0 text-xs ${step >= f.nodes.length ? "text-emerald-400" : "text-muted-foreground"}`}>
                {step >= f.nodes.length ? req.status : running ? "…" : "—"}
              </span>
            </div>

            {/* camadas */}
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
                  <span className="text-primary">$</span> {f.idle}
                </span>
              ) : (
                logs.map((l, i) => (
                  <div key={i} className={`flex gap-3 animate-fade-in ${l.done ? "text-emerald-400" : ""}`}>
                    <span className="w-14 shrink-0 text-muted-foreground/70">{l.time}</span>
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
