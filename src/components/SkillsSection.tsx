import { useState } from "react";
import { GraduationCap, Languages } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useLang } from "@/lib/i18n";

const SkillsSection = () => {
  const { t } = useLang();
  const s = t.skills;
  const [group, setGroup] = useState(0);
  const current = s.groups[group] ?? s.groups[0];

  return (
    <section id="stack" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="kicker">{s.kicker}</p>
          <h2 className="section-title">{s.title}</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="glass mt-10 grid overflow-hidden rounded-[28px] md:grid-cols-[240px_1fr]">
            {/* categorias */}
            <div className="flex gap-1 overflow-x-auto border-b p-2 md:flex-col md:overflow-visible md:border-b-0 md:border-r md:p-3" role="tablist">
              {s.groups.map((g, i) => (
                <button
                  key={g.name}
                  role="tab"
                  aria-selected={group === i}
                  onClick={() => setGroup(i)}
                  className={`flex shrink-0 items-center justify-between gap-3 whitespace-nowrap rounded-2xl px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                    group === i ? "bg-white/[0.08] text-foreground" : "text-muted-foreground hover:bg-white/[0.03] hover:text-foreground"
                  }`}
                >
                  {g.name}
                  <span className={`hidden font-mono text-[11px] md:inline ${group === i ? "text-primary" : "text-muted-foreground/60"}`}>
                    {String(g.items.length).padStart(2, "0")}
                  </span>
                </button>
              ))}
            </div>
            {/* itens */}
            <div className="min-h-[220px] p-5 sm:p-7">
              <div key={group} className="flex flex-wrap gap-2">
                {current.items.map((item, i) => (
                  <span
                    key={item}
                    className="animate-fade-up rounded-xl border bg-white/[0.03] px-3.5 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
                    style={{ animationDelay: `${i * 0.03}s` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <ScrollReveal delay={0.1}>
            <div className="glass h-full rounded-[28px] p-5 sm:p-7">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <GraduationCap size={18} className="text-primary" /> {s.educationTitle}
              </div>
              <p className="mt-4 text-lg font-semibold">{s.degree}</p>
              <p className="mt-0.5 font-mono text-xs text-muted-foreground">{s.degreeInfo}</p>
              <ul className="mt-5 space-y-2.5 border-t pt-5">
                {s.courses.map((c) => (
                  <li key={c.name} className="text-sm">
                    <span className="font-medium">{c.name}</span>
                    <span className="text-muted-foreground"> · {c.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <div className="glass h-full rounded-[28px] p-5 sm:p-7">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Languages size={18} className="text-primary" /> {s.languagesTitle}
              </div>
              <ul className="mt-5 space-y-5">
                {s.languages.map((l) => (
                  <li key={l.name}>
                    <div className="flex items-baseline justify-between text-sm">
                      <span className="font-medium">{l.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{l.level}</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${l.pct}%`, background: "linear-gradient(90deg, hsl(189 94% 58%), hsl(258 90% 72%))" }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
