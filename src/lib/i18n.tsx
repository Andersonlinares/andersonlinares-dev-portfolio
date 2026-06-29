import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "pt" | "en";

type Dict = typeof translations.pt;

export const translations = {
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      education: "Formação",
      skills: "Habilidades",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou",
      role: "Desenvolvedor Full Stack Júnior",
      summary:
        "Integrador de sistemas com experiência em gestão de CRMs, automação de processos, desenvolvimento web e criação de soluções personalizadas.",
      downloadCV: "Baixar CV",
      email: "E-mail",
      cvFile: "/curriculo-anderson-linares.pdf",
    },
    about: {
      title: "Sobre mim",
      p1Before: "Sou Anderson Linares, desenvolvedor de software e web, formado em ",
      degree: "Análise e Desenvolvimento de Sistemas",
      p1After:
        " pela UDF. Tenho experiência em integração de sistemas e criação de aplicativos sem código. Sou familiarizado com ferramentas como Kommo, Zapier, Make e WordPress. Com boa capacidade de adaptação e aprendizado rápido, busco sempre oferecer soluções eficientes e inovadoras para as empresas.",
    },
    experience: {
      title: "Experiência",
      items: [
        {
          role: "Analista de Sistemas",
          company: "EVO Coaching",
          period: "Set 2025 – Mai 2026",
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
      ],
    },
    projects: {
      title: "Projetos",
      visit: "Visitar",
      items: [
        {
          title: "Zenith Therapies",
          description: "Sistema de cadastro e acompanhamento para clínica naturoterapeuta.",
          tags: ["Lovable", "React", "TypeScript", "Sistema Web"],
        },
        {
          title: "Jarrão Flores",
          description: "Landing page para floricultura com foco em conversão e experiência do usuário.",
          tags: ["Landing Page", "Web Design", "Conversão"],
        },
        {
          title: "Maria Gois Psi",
          description: "Página informativa e retenção de clientes para psicóloga.",
          tags: ["Landing Page", "Retenção", "Saúde"],
        },
        {
          title: "Drogaria Ariane",
          description: "Landing page informativa para drogaria.",
          tags: ["Landing Page", "Web Design", "Saúde"],
        },
        {
          title: "Money Finance",
          description: "Sistema web para gestão de finanças pessoais e controle financeiro.",
          tags: ["Lovable", "React", "TypeScript", "Finanças"],
        },
      ],
    },
    education: {
      title: "Formação",
      degree: "Análise e Desenvolvimento de Sistemas",
      degreePeriod: "Jan 2022 – Mar 2024",
      institution: "UDF · Graduação · Brasília, DF",
      degreeDesc:
        "Desenvolvimento de habilidades em lógica de programação, programação, banco de dados e estrutura de sistemas.",
      extraTitle: "Cursos Extracurriculares",
      courses: [
        { name: "Fundação Bradesco", detail: "Gestão de Banco de Dados e CSS" },
        { name: "ESPRO", detail: "Rotinas Administrativas e Comunicação Profissional" },
        { name: "Centro Interescolar de Línguas", detail: "Desenvolvimento do Inglês" },
      ],
    },
    skills: {
      tools: "Ferramentas",
      techs: "Tecnologias",
      competencies: "Competências",
      languages: "Idiomas",
      competencyList: [
        "Integração de Sistemas", "Desenvolvimento Web", "Automação de Processos",
        "Integração de CRM", "Resolução de Problemas", "Desenvolvimento de Software",
        "Desenvolvimento Backend", "Testes e Depuração", "Geração de Leads", "Análise de Sistemas",
      ],
      languageList: [
        { name: "Espanhol", level: "Fluente" },
        { name: "Inglês", level: "Intermediário" },
      ],
    },
    contact: {
      title: "Contato",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      role: "Junior Full Stack Developer",
      summary:
        "Systems integrator with experience in CRM management, process automation, web development, and building custom solutions.",
      downloadCV: "Download CV",
      email: "Email",
      cvFile: "/Anderson_Linares_Resume_EN.pdf",
    },
    about: {
      title: "About Me",
      p1Before: "I'm Anderson Linares, a software and web developer with a degree in ",
      degree: "Systems Analysis and Development",
      p1After:
        " from UDF. I have experience in systems integration and building no-code applications. I'm familiar with tools like Kommo, Zapier, Make, and WordPress. With strong adaptability and quick learning, I always aim to deliver efficient and innovative solutions for businesses.",
    },
    experience: {
      title: "Experience",
      items: [
        {
          role: "Systems Analyst",
          company: "EVO Coaching",
          period: "Sep 2025 – May 2026",
          location: "Brasília, DF",
          description:
            "Management of digital communication and continuous maintenance of company websites. Creation and configuration of payment links, structuring of automated customer service flows, lead capture, and client relationship management. Development and management of automations using ManyChat, ActiveCampaign, and other digital tools to optimize processes and increase operational efficiency.",
          current: true,
        },
        {
          role: "Developer and Systems Analyst",
          company: "BRL Educação Formação Empresarial",
          period: "Aug 2024 – Sep 2025",
          location: "Brasília, DF",
          description:
            "Analysis and integration of systems and tools. CRM configuration, tool integration, development with Lovable, and AI study to optimize flows between marketing, sales, and finance.",
        },
        {
          role: "Communications and Operations Analyst",
          company: "Conectados com Deus – Church",
          period: "Feb 2023 – Dec 2024",
          location: "Brasília, DF",
          description:
            "Responsible for order management, landing page creation, video editing, and live broadcast support to promote free biblical courses in digital and physical environments.",
        },
        {
          role: "Administrative Assistant – Young Apprentice",
          company: "KPMG",
          period: "Sep 2021 – Dec 2021",
          location: "Belo Horizonte, MG",
          description:
            "Worked on cataloging and organizing physical documents, optimizing the archive relocation process and ensuring record integrity in the administrative sector.",
        },
      ],
    },
    projects: {
      title: "Projects",
      visit: "Visit",
      items: [
        {
          title: "Zenith Therapies",
          description: "Registration and follow-up system for a naturopathic clinic.",
          tags: ["Lovable", "React", "TypeScript", "Web System"],
        },
        {
          title: "Jarrão Flores",
          description: "Landing page for a flower shop focused on conversion and user experience.",
          tags: ["Landing Page", "Web Design", "Conversion"],
        },
        {
          title: "Maria Gois Psi",
          description: "Informational and client retention page for a psychologist.",
          tags: ["Landing Page", "Retention", "Health"],
        },
        {
          title: "Drogaria Ariane",
          description: "Informational landing page for a drugstore.",
          tags: ["Landing Page", "Web Design", "Health"],
        },
        {
          title: "Money Finance",
          description: "Web system for personal finance management and financial control.",
          tags: ["Lovable", "React", "TypeScript", "Finance"],
        },
      ],
    },
    education: {
      title: "Education",
      degree: "Systems Analysis and Development",
      degreePeriod: "Jan 2022 – Mar 2024",
      institution: "UDF · Bachelor's · Brasília, DF",
      degreeDesc:
        "Development of skills in programming logic, programming, databases, and systems architecture.",
      extraTitle: "Extracurricular Courses",
      courses: [
        { name: "Fundação Bradesco", detail: "Database Management and CSS" },
        { name: "ESPRO", detail: "Administrative Routines and Professional Communication" },
        { name: "Centro Interescolar de Línguas", detail: "English Development" },
      ],
    },
    skills: {
      tools: "Tools",
      techs: "Technologies",
      competencies: "Competencies",
      languages: "Languages",
      competencyList: [
        "Systems Integration", "Web Development", "Process Automation",
        "CRM Integration", "Problem Solving", "Software Development",
        "Backend Development", "Testing and Debugging", "Lead Generation", "Systems Analysis",
      ],
      languageList: [
        { name: "Spanish", level: "Fluent" },
        { name: "English", level: "Intermediate" },
      ],
    },
    contact: {
      title: "Contact",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
} as const;

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const LanguageContext = createContext<Ctx | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "pt";
    return (localStorage.getItem("lang") as Lang) || "pt";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] as Dict }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
