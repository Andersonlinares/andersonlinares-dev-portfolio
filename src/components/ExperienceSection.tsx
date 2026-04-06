import { Briefcase } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    role: "Analista de Sistemas",
    company: "EVO Coaching",
    period: "Atual",
    location: "Brasília, DF",
    description:
      "Gestão da comunicação digital e manutenção contínua dos sites da empresa. Criação e configuração de links de pagamento, estruturação de fluxos automatizados de atendimento, captação e relacionamento com clientes. Desenvolvimento e gerenciamento de automações utilizando ManyChat, ActiveCampaign e outras ferramentas digitais, visando otimizar processos e aumentar a eficiência operacional.",
    current: true,
  },
  {
    role: "Desenvolvedor e Analista de Sistemas",
    company: "BRL Educação Formação Empresarial",
    period: "Ago 2024 – Set 2025",
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
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="text-primary" size={24} />
          <h2 className="text-2xl md:text-3xl font-bold">Experiência</h2>
        </div>
      </ScrollReveal>
      <div className="relative pl-4 sm:pl-6 border-l-2 border-border space-y-8 sm:space-y-10">
        {experiences.map((exp, i) => (
          <ScrollReveal key={i} delay={0.1 * (i + 1)}>
            <div className="relative">
              <div className={`absolute -left-[calc(0.5rem+1rem+1px)] sm:-left-[calc(0.5rem+1.5rem+1px)] top-1 w-3 h-3 rounded-full ${exp.current ? "bg-primary animate-pulse" : "bg-primary"}`} />
              <div className="bg-card rounded-xl p-4 sm:p-6 border card-glow transition-all duration-300">
                <div className="flex flex-col gap-1 mb-1">
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">{exp.role}</h3>
                  <span className={`text-xs font-mono shrink-0 w-fit ${exp.current ? "px-2 py-0.5 rounded-full bg-primary/15 text-primary" : "text-primary"}`}>
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
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
