import { Wrench, Code, Brain, Globe } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const tools = [
  "Kommo", "Zapier", "Eduzz", "Lovable", "WordPress", "Hostinger",
  "cPanel", "VS Code", "RD Station", "Clint", "OpenAI", "Make", "Pluga", "ClickUp",
];

const techs = [
  "Java", "JavaScript", "C", "C++", "PHP", "Python",
  "HTML", "CSS", "MySQL", "PhpMyAdmin", "Swift", "Git",
];

const competencies = [
  "Integração de Sistemas", "Desenvolvimento Web", "Automação de Processos",
  "Integração de CRM", "Resolução de Problemas", "Desenvolvimento de Software",
  "Desenvolvimento Backend", "Testes e Depuração", "Geração de Leads", "Análise de Sistemas",
];

const languages = [
  { name: "Espanhol", level: "Fluente" },
  { name: "Inglês", level: "Intermediário" },
];

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium border border-border hover:border-primary/40 transition-colors">
    {children}
  </span>
);

const SkillsSection = () => (
  <section id="habilidades" className="py-20">
    <div className="container max-w-3xl space-y-12">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-6">
          <Wrench className="text-primary" size={24} />
          <h2 className="text-2xl md:text-3xl font-bold">Ferramentas</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {tools.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="flex items-center gap-3 mb-6">
          <Code className="text-primary" size={24} />
          <h2 className="text-2xl md:text-3xl font-bold">Tecnologias</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {techs.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="flex items-center gap-3 mb-6">
          <Brain className="text-primary" size={24} />
          <h2 className="text-2xl md:text-3xl font-bold">Competências</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {competencies.map((c) => <Tag key={c}>{c}</Tag>)}
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="flex items-center gap-3 mb-6">
          <Globe className="text-primary" size={24} />
          <h2 className="text-2xl md:text-3xl font-bold">Idiomas</h2>
        </div>
        <div className="flex flex-wrap gap-3 sm:gap-4">
          {languages.map((l) => (
            <div key={l.name} className="bg-card rounded-xl px-5 sm:px-6 py-3 sm:py-4 border card-glow transition-all duration-300">
              <p className="font-medium text-foreground text-sm sm:text-base">{l.name}</p>
              <p className="text-xs sm:text-sm text-primary">{l.level}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default SkillsSection;
