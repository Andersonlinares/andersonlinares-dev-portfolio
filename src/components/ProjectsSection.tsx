import { FolderOpen, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Zenith Therapies",
    description:
      "Sistema de cadastro e acompanhamento para clínica naturoterapeuta.",
    tags: ["Lovable", "React", "TypeScript", "Sistema Web"],
    link: "https://zeniththerapiessystem.lovable.app",
  },
  {
    title: "Jarrão Flores",
    description:
      "Landing page para floricultura com foco em conversão e experiência do usuário.",
    tags: ["Landing Page", "Web Design", "Conversão"],
    link: "https://jarraoflores.com.br/",
  },
  {
    title: "Maria Gois Psi",
    description:
      "Página informativa e retenção de clientes para psicóloga.",
    tags: ["Landing Page", "Retenção", "Saúde"],
    link: "https://mariagoispsi.com.br/",
  },
  {
    title: "Drogaria Ariane",
    description:
      "Landing page informativa para drogaria.",
    tags: ["Landing Page", "Web Design", "Saúde"],
    link: "https://drogariaariane.com.br/",
  },
  {
    title: "Money Finance",
    description:
      "Sistema web para gestão de finanças pessoais e controle financeiro.",
    tags: ["Lovable", "React", "TypeScript", "Finanças"],
    link: "https://money-finance.lovable.app",
  },
];

const ProjectsSection = () => (
  <section id="projetos" className="py-20">
    <div className="container max-w-3xl">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-8">
          <FolderOpen className="text-primary" size={24} />
          <h2 className="text-2xl md:text-3xl font-bold">Projetos</h2>
        </div>
      </ScrollReveal>
      <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
        {projects.map((p, i) => (
          <ScrollReveal key={p.title} delay={0.1 * (i + 1)}>
            <div className="bg-card rounded-xl p-4 sm:p-6 border card-glow hover:border-primary/40 transition-all duration-300 h-full flex flex-col">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2 text-sm sm:text-base">
                {p.title}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                    aria-label={`Visitar ${p.title}`}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
