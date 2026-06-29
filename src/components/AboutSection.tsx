import { User } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useLang } from "@/lib/i18n";

const AboutSection = () => {
  const { t } = useLang();
  return (
    <section id="sobre" className="py-20">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-8">
            <User className="text-primary" size={24} />
            <h2 className="text-2xl md:text-3xl font-bold">{t.about.title}</h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="bg-card rounded-xl p-4 sm:p-6 md:p-8 border card-glow transition-all duration-300">
            <p className="text-muted-foreground leading-relaxed">
              {t.about.p1Before}
              <span className="text-foreground font-medium">{t.about.degree}</span>
              {t.about.p1After}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
