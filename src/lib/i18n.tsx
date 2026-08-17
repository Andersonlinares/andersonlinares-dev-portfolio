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
      role: "Analista de Sistemas e Automações | CRM, IA, Integrações e Desenvolvimento Web",
      summary:
        "Analista de sistemas e gestor de automações com experiência em integração de sistemas, CRMs, chatbots, IA e desenvolvimento web.",
      downloadCV: "Baixar CV",
      email: "E-mail",
      cvFile: "/curriculo-anderson-linares.pdf",
    },
    about: {
      title: "Sobre mim",
      p1Before: "Sou Anderson Linares, desenvolvedor de software e web, formado em ",
      degree: "Análise e Desenvolvimento de Sistemas",
      p1After:
        " pela UDF. Tenho experiência prática em integração de sistemas, manutenção de sites WordPress, implementação de CRMs, chatbots, automações de marketing/comercial e criação de soluções personalizadas. Atuei em operações digitais, lançamentos, campanhas de comunicação, fluxos com WhatsApp, e-mail marketing e ferramentas como Kommo, Make, n8n, Zapier, ActiveCampaign, ManyChat, RD Station, OpenAI e Claude.",
    },
    experience: {
      title: "Experiência",
      items: [
        {
          role: "Gerente de Automações",
          company: "Evo Coaching e Editora LTDA – Marcio Micheli",
          period: "Set 2025 – Mai 2026",
          location: "Águas Claras, DF",
          description:
            "Gestão da comunicação digital e manutenção de sites, mantendo páginas, conteúdos e sistemas atualizados e alinhados à estratégia do negócio. Criação e manutenção de campanhas de lançamento e meteóricos, com disparos em massa via WhatsApp (ManyChat), e-mails (ActiveCampaign) e automações de relacionamento. Gerenciamento de grupos com Redirect+ e Sendflow e fluxos para bases com mais de 13.000 pessoas. Criação de links de pagamento na Teachable e comunicação direta com a base de contatos.",
          current: true,
        },
        {
          role: "Analista de Sistemas e Automações",
          company: "BRL Educação – Formação Empresarial",
          period: "Ago 2024 – Set 2025",
          location: "Brasília, DF",
          description:
            "Análise e integração de sistemas e ferramentas para conectar processos de marketing, comercial e financeiro. Configuração de CRMs, automações, campos, funis e fluxos de atendimento. Desenvolvimento de soluções personalizadas em Lovable e apoio no uso de IA para otimizar rotinas internas. Integração por webhooks e plataformas como Make, Zapier, Pluga e Kommo.",
        },
        {
          role: "Gestão de IA, Automações e Desenvolvimento Web",
          company: "Projetos independentes / prestação de serviços",
          period: "2024 – Atual",
          location: "Remoto",
          description:
            "Criação e manutenção de páginas WordPress, landing pages e ajustes em e-commerce. Construção de automações com Make e n8n para atendimento, CRM, formulários e acompanhamento de leads. Implantação de chatbots e fluxos integrados com WhatsApp, CRM e ferramentas de marketing digital.",
        },
        {
          role: "Analista de Comunicação e Operações",
          company: "Conectados com Deus – Igreja",
          period: "Fev 2023 – Dez 2024",
          location: "Brasília, DF",
          description:
            "Gestão de pedidos, organização operacional e apoio na divulgação de cursos bíblicos gratuitos. Criação de landing pages, peças digitais e materiais de comunicação. Apoio em transmissões ao vivo, gravações e edição de vídeos e fotos.",
        },
        {
          role: "Auxiliar Administrativo – Jovem Aprendiz",
          company: "KPMG",
          period: "Set 2021 – Dez 2021",
          location: "Belo Horizonte, MG",
          description:
            "Catalogação e organização de documentos físicos durante processo de mudança de acervo administrativo, com apoio a rotinas administrativas e foco na integridade dos registros.",
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
        "Formação com foco em lógica de programação, banco de dados, estrutura de sistemas, desenvolvimento de software e análise de requisitos.",
      extraTitle: "Cursos Extracurriculares",
      courses: [
        { name: "Fundação Bradesco", detail: "Gestão de banco de dados e técnicas modernas de estilização CSS · Ago 2023" },
        { name: "ESPRO", detail: "Rotinas administrativas, comunicação profissional e postura corporativa · Set 2021" },
        { name: "Centro Interescolar de Línguas", detail: "Inglês com foco em comunicação, escrita e compreensão · Jan 2024" },
      ],
    },
    skills: {
      tools: "Ferramentas",
      techs: "Tecnologias",
      competencies: "Competências",
      languages: "Idiomas",
      competencyList: [
        "Integração de Sistemas", "Desenvolvimento Web", "Automação de Processos",
        "Integração de CRM", "Chatbots e IA", "Levantamento de Requisitos",
        "E-mail Marketing", "Campanhas de Lançamento", "Testes e Depuração",
        "Documentação", "Geração de Leads", "Análise de Sistemas",
      ],
      languageList: [
        { name: "Português", level: "Nativo" },
        { name: "Espanhol", level: "Nativo" },
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
      role: "Systems & Automation Analyst | CRM, AI, Integrations and Web Development",
      summary:
        "Systems analyst and automation manager with experience in systems integration, CRMs, chatbots, AI, and web development.",
      downloadCV: "Download CV",
      email: "Email",
      cvFile: "/Anderson_Linares_Resume_EN.pdf",
    },
    about: {
      title: "About Me",
      p1Before: "I'm Anderson Linares, a software and web developer with a degree in ",
      degree: "Systems Analysis and Development",
      p1After:
        " from UDF. I have hands-on experience in systems integration, WordPress site maintenance, CRM implementation, chatbots, marketing/sales automations, and building custom solutions. I've worked on digital operations, launches, communication campaigns, WhatsApp flows, email marketing, and tools like Kommo, Make, n8n, Zapier, ActiveCampaign, ManyChat, RD Station, OpenAI, and Claude.",
    },
    experience: {
      title: "Experience",
      items: [
        {
          role: "Automations Manager",
          company: "Evo Coaching e Editora LTDA – Marcio Micheli",
          period: "Sep 2025 – May 2026",
          location: "Águas Claras, DF",
          description:
            "Management of digital communication and website maintenance, keeping pages, content, and systems updated and aligned with business strategy. Creation and maintenance of launch campaigns, including mass WhatsApp broadcasts (ManyChat), emails (ActiveCampaign), and relationship automations. Group management with Redirect+ and Sendflow and communication flows for bases of over 13,000 people. Payment link creation on Teachable.",
          current: true,
        },
        {
          role: "Systems and Automations Analyst",
          company: "BRL Educação – Formação Empresarial",
          period: "Aug 2024 – Sep 2025",
          location: "Brasília, DF",
          description:
            "Analysis and integration of systems and tools to connect marketing, sales, and finance processes. CRM configuration, automations, fields, funnels, and service flows. Custom solution development with Lovable and AI support to optimize internal routines. Integration via webhooks and platforms such as Make, Zapier, Pluga, and Kommo.",
        },
        {
          role: "AI, Automations and Web Development",
          company: "Independent projects / freelance services",
          period: "2024 – Present",
          location: "Remote",
          description:
            "Creation and maintenance of WordPress pages, landing pages, and e-commerce adjustments. Automations with Make and n8n for customer service, CRM, forms, and lead follow-up. Chatbot deployment and flows integrated with WhatsApp, CRM, and digital marketing tools.",
        },
        {
          role: "Communications and Operations Analyst",
          company: "Conectados com Deus – Church",
          period: "Feb 2023 – Dec 2024",
          location: "Brasília, DF",
          description:
            "Order management, operational organization, and support promoting free biblical courses. Landing page creation, digital assets, and communication materials. Support with live broadcasts, recordings, and video/photo editing.",
        },
        {
          role: "Administrative Assistant – Young Apprentice",
          company: "KPMG",
          period: "Sep 2021 – Dec 2021",
          location: "Belo Horizonte, MG",
          description:
            "Cataloging and organizing physical documents during the administrative archive relocation, supporting administrative routines with focus on record integrity.",
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
        "Focused on programming logic, databases, systems architecture, software development, and requirements analysis.",
      extraTitle: "Extracurricular Courses",
      courses: [
        { name: "Fundação Bradesco", detail: "Database management and modern CSS styling techniques · Aug 2023" },
        { name: "ESPRO", detail: "Administrative routines, professional communication and corporate conduct · Sep 2021" },
        { name: "Centro Interescolar de Línguas", detail: "English focused on communication, writing and comprehension · Jan 2024" },
      ],
    },
    skills: {
      tools: "Tools",
      techs: "Technologies",
      competencies: "Competencies",
      languages: "Languages",
      competencyList: [
        "Systems Integration", "Web Development", "Process Automation",
        "CRM Integration", "Chatbots and AI", "Requirements Gathering",
        "Email Marketing", "Launch Campaigns", "Testing and Debugging",
        "Documentation", "Lead Generation", "Systems Analysis",
      ],
      languageList: [
        { name: "Portuguese", level: "Native" },
        { name: "Spanish", level: "Native" },
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
  const [lang, setLangState] = useState<Lang>("pt");

  const setLang = (l: Lang) => {
    setLangState(l);
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
