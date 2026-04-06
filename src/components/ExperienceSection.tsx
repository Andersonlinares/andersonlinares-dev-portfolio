import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Desenvolvedor e Analista de Sistemas",
    company: "BRL Educação Formação Empresarial",
    period: "Ago 2024",
    location: "Brasília, DF",
    description:
      "Análise e integração de sistemas e ferramentas. Configuração de CRMs, integração de ferramentas, desenvolvimento em Lovable e estudo de IA para otimização de fluxos entre marketing, comercial e financeiro.",
  },
  {
    role: "Analista de Comunicação e Operações",
    company: "Conectados com Deus – Igreja",
    period: "Fev 2023 – Dez 2024",
    location: "Brasília, DF",
    description:
      "Responsável pela gestão de pedidos, criação de landing pages, edição de vídeos e apoio em transmissões ao vivo para divulgação de cursos bíblicos gratuitos em ambiente digital e físico.",
  },
  {
    role: "Auxiliar Administrativo – Jovem Aprendiz",
    company: "KPMG",
    period: "Set 2021 – Dez 2021",
    location: "Belo Horizonte, MG",
    description:
      "Atuei na catalogação e organização de documentos físicos, otimizando o processo de mudança de acervo e garantindo a integridade dos registros no setor administrativo.",
  },
];

const ExperienceSection = () => (
  <section id="experiencia" className="py-20">
    <div className="container max-w-3xl">
      <div className="flex items-center gap-3 mb-8">
        <Briefcase className="text-primary" size={24} />
        <h2 className="text-2xl md:text-3xl font-bold">Experiência</h2>
      </div>
      <div className="relative pl-6 border-l-2 border-border space-y-10">
        {experiences.map((exp, i) => (
          <div key={i} className="relative">
            <div className="absolute -left-[calc(0.5rem+1.5rem+1px)] top-1 w-3 h-3 rounded-full bg-primary" />
            <div className="bg-card rounded-xl p-6 border card-glow transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h3 className="font-semibold text-foreground">{exp.role}</h3>
                <span className="text-xs font-mono text-primary">{exp.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {exp.company} · {exp.location}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
