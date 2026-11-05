import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useLang } from "@/lib/i18n";

const ExperienceSection = () => {
  const { t } = useLang();
  const [open, setOpen] = useState<number>(0);
  const items = t.experience.items;

  return (
    <section id="experiencia" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <p className="kicker">{t.experience.kicker}</p>
          <h2 className="section-title">{t.experience.title}</h2>
        </ScrollReveal>

        <ol className="relative mt-10 space-y-3 sm:ml-3 sm:border-l sm:pl-8">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.company + item.period} className="relative">
                <span
                  className={`absolute -left-[39px] top-7 hidden h-3 w-3 rounded-full border-2 sm:block ${
                    "current" in item && item.current ? "border-primary bg-primary shadow-[0_0_14px_hsl(var(--primary))]" : "border-white/25 bg-background"
                  }`}
                  aria-hidden
                />
                <ScrollReveal delay={0.05 * i}>
                  <div className={`glass spot rounded-3xl transition-colors ${isOpen ? "bg-white/[0.04]" : ""}`}>
                    <button
                      className="flex w-full items-start gap-4 p-5 text-left sm:p-6"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-base font-semibold sm:text-lg">{item.role}</h3>
                          {"current" in item && item.current && (
                            <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-emerald-400">
                              {t.experience.current}
                            </span>
                          )}
                        </div>
                        <p className="mt-0.5 text-sm text-primary">{item.company}</p>
                        <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] text-muted-foreground sm:text-xs">
                          <span>{item.period}</span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin size={11} /> {item.location}
                          </span>
                        </p>
                      </div>
                      <ChevronDown
                        size={18}
                        className={`mt-1 shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <div className="overflow-hidden">
                        <ul className="space-y-2 px-5 pb-6 sm:px-6">
                          {item.bullets.map((b) => (
                            <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default ExperienceSection;
