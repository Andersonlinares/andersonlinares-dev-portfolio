import { Bot, Plug, Workflow } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useLang } from "@/lib/i18n";

const icons = [Plug, Workflow, Bot];

const AboutSection = () => {
  const { t } = useLang();
  return (
    <section id="sobre" className="px-4 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <ScrollReveal>
          <p className="kicker">{t.about.kicker}</p>
          <h2 className="section-title">{t.about.title}</h2>
          <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground sm:text-base">{t.about.body}</p>
        </ScrollReveal>
        <div className="grid gap-3">
          {t.about.highlights.map((h, i) => {
            const Icon = icons[i];
            return (
              <ScrollReveal key={h.title} delay={0.08 * i}>
                <div className="glass spot flex items-start gap-4 rounded-3xl p-5 sm:p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{h.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
