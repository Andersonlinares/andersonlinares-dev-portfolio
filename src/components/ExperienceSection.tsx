import { Briefcase } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useLang } from "@/lib/i18n";

const ExperienceSection = () => {
  const { t } = useLang();
  const experiences = t.experience.items;
  return (
    <section id="experiencia" className="py-20">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-primary" size={24} />
            <h2 className="text-2xl md:text-3xl font-bold">{t.experience.title}</h2>
          </div>
        </ScrollReveal>
        <div className="relative pl-4 sm:pl-6 border-l-2 border-border space-y-8 sm:space-y-10">
          {experiences.map((exp, i) => {
            const current = "current" in exp && exp.current;
            return (
              <ScrollReveal key={i} delay={0.1 * (i + 1)}>
                <div className="relative">
                  <div className={`absolute -left-[calc(0.5rem+1rem+1px)] sm:-left-[calc(0.5rem+1.5rem+1px)] top-1 w-3 h-3 rounded-full ${current ? "bg-primary animate-pulse" : "bg-primary"}`} />
                  <div className="bg-card rounded-xl p-4 sm:p-6 border card-glow transition-all duration-300">
                    <div className="flex flex-col gap-1 mb-1">
                      <h3 className="font-semibold text-foreground text-sm sm:text-base">{exp.role}</h3>
                      <span className={`text-xs font-mono shrink-0 w-fit ${current ? "px-2 py-0.5 rounded-full bg-primary/15 text-primary" : "text-primary"}`}>
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                      {exp.company} · {exp.location}
                    </p>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{exp.description}</p>
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

export default ExperienceSection;
