import { FolderOpen, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Automação de Atendimento – EVO Coaching",
    description:
      "Fluxos automatizados de captação e relacionamento com clientes usando ManyChat e ActiveCampaign, integrando chatbots com CRM e e-mail marketing.",
    tags: ["ManyChat", "ActiveCampaign", "Automação"],
  },
  {
    title: "Integração de CRM e Sistemas – BRL Educação",
    description:
      "Configuração e integração de CRMs com ferramentas de marketing e financeiro, otimizando fluxos entre equipes usando Kommo, Make e Zapier.",
    tags: ["Kommo", "Make", "Zapier", "CRM"],
  },
  {
    title: "Landing Pages e Comunicação Digital",
    description:
      "Criação de landing pages para divulgação de cursos e eventos, com foco em conversão e experiência do usuário, utilizando WordPress e Hostinger.",
    tags: ["WordPress", "Hostinger", "Landing Pages"],
  },
  {
    title: "Desenvolvimento Web com Lovable",
    description:
      "Desenvolvimento de aplicações web modernas utilizando a plataforma Lovable, com foco em interfaces responsivas e integração com APIs.",
    tags: ["Lovable", "React", "TypeScript"],
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
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p, i) => (
          <ScrollReveal key={p.title} delay={0.1 * (i + 1)}>
            <div className="bg-card rounded-xl p-6 border card-glow hover:border-primary/40 transition-all duration-300 h-full flex flex-col">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
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
