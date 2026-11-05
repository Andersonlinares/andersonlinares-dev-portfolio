import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "pt" | "en";

/* Conteúdo baseado nos currículos (PT e EN) de 2026. */

export type ProjectKind = "web" | "system" | "automation";

export const projectMeta: { link?: string; kind: ProjectKind }[] = [
  { kind: "automation" },
  { kind: "automation" },
  { kind: "automation" },
  { link: "https://zeniththerapiessystem.lovable.app", kind: "system" },
  { link: "https://aurumcore.lovable.app/", kind: "system" },
  { link: "https://comece-pelo-mundo.vercel.app", kind: "web" },
  { link: "https://jarraoflores.com.br/", kind: "web" },
  { link: "https://mariagoispsi.com.br/", kind: "web" },
  { link: "https://drogariaariane.com.br/", kind: "web" },
];

export const contactInfo = {
  email: "andersonlinares.dev@gmail.com",
  phone: "+55 (61) 98129-6170",
  whatsapp: "https://wa.me/5561981296170",
  linkedin: "https://www.linkedin.com/in/andersonlinares/",
  github: "https://github.com/Andersonlinares",
};

const pt = {
  nav: {
    about: "Sobre",
    flow: "Como trabalho",
    experience: "Experiência",
    projects: "Projetos",
    skills: "Stack",
    contact: "Contato",
  },
  hero: {
    status: "Disponível para novos projetos",
    greeting: "Olá, eu sou",
    role: "Analista de Sistemas e Automações",
    roleTags: ["CRM", "IA", "Integrações", "Desenvolvimento Web"],
    summary:
      "Conecto CRM, WhatsApp, sites e IA para que marketing, comercial e atendimento funcionem sem tarefa manual.",
    ctaProjects: "Ver projetos",
    ctaContact: "Falar comigo",
    downloadCV: "Baixar CV",
    cvFile: "/curriculo-anderson-linares.pdf",
    lensHint: "arraste a lente",
    terminal: [
      { cmd: "whoami", out: ["Anderson Linares · Brasília, DF", "Análise e Desenvolvimento de Sistemas · UDF"] },
      { cmd: "stack --top", out: ["Kommo · n8n · Make · Zapier", "OpenAI · Claude · WordPress · Lovable"] },
      { cmd: "status", out: ["● automações rodando", "● leads entrando no CRM"] },
    ],
  },
  stats: [
    { value: 13000, suffix: "+", label: "contatos em fluxos de comunicação" },
    { value: 20, suffix: "+", label: "ferramentas integradas" },
    { value: 2024, prefix: "", suffix: "", label: "início na automação", plain: true },
    { value: 3, suffix: "", label: "idiomas · PT · ES · EN" },
  ],
  about: {
    kicker: "Sobre",
    title: "Sistemas que conversam entre si.",
    body:
      "Sou formado em Análise e Desenvolvimento de Sistemas pela UDF. Trabalho com integração de sistemas, manutenção de sites WordPress, implementação de CRMs, chatbots, automações de marketing e comercial e soluções sob medida. Já atuei em operações digitais, lançamentos, campanhas de comunicação, fluxos de WhatsApp e e-mail marketing.",
    highlights: [
      { title: "Integração", text: "Webhooks e APIs ligando site, CRM, financeiro e atendimento." },
      { title: "Automação", text: "Fluxos em n8n, Make e Zapier que tiram trabalho repetitivo do time." },
      { title: "IA aplicada", text: "Chatbots e agentes para atender, qualificar e acompanhar leads." },
    ],
  },
  flow: {
    kicker: "Como trabalho",
    title: "Um lead, do formulário ao WhatsApp.",
    text: "Simule o caminho de um contato por um fluxo que eu monto com frequência.",
    run: "Simular lead",
    running: "Processando…",
    nodes: ["Formulário", "Webhook", "n8n", "IA", "CRM", "WhatsApp"],
    logs: [
      "novo envio recebido de {name}",
      "payload validado · origem e UTM capturadas",
      "workflow iniciado · telefone normalizado",
      "lead qualificado · interesse alto",
      "contato criado no funil · responsável definido",
      "mensagem de boas-vindas enviada",
    ],
    done: "fluxo concluído em {ms} ms",
    names: ["Mariana", "Rafael", "Juliana", "Carlos", "Beatriz", "Lucas"],
  },
  experience: {
    kicker: "Trajetória",
    title: "Experiência",
    current: "Atual",
    items: [
      {
        role: "IA, Automações e Desenvolvimento Web",
        company: "Projetos independentes / prestação de serviços",
        period: "2024 – Atual",
        location: "Remoto",
        current: true,
        bullets: [
          "Criação e manutenção de páginas WordPress, landing pages e ajustes em e-commerce para clientes.",
          "Automações com Make e n8n para atendimento, CRM, formulários, captação e acompanhamento de leads.",
          "Implantação de chatbots e fluxos integrados com WhatsApp, CRM e ferramentas de marketing digital.",
          "Soluções simples e funcionais para reduzir tarefas manuais e centralizar informações.",
        ],
      },
      {
        role: "Gerente de Automações",
        company: "Evo Coaching e Editora LTDA – Marcio Micheli",
        period: "Set 2025 – Mai 2026",
        location: "Águas Claras, DF",
        bullets: [
          "Gestão da comunicação digital e manutenção de sites, mantendo páginas, conteúdos e sistemas alinhados à estratégia do negócio.",
          "Campanhas de lançamento e meteóricos com disparos em massa no WhatsApp (ManyChat), e-mails (ActiveCampaign) e automações de relacionamento.",
          "Gestão de grupos com Redirect+ e Sendflow e fluxos de comunicação para eventos e bases com mais de 13.000 pessoas.",
          "Links de pagamento na Teachable e comunicação com a base: contagem regressiva, cartas de instrução e protocolos de ausentes.",
        ],
      },
      {
        role: "Analista de Sistemas e Automações",
        company: "BRL Educação – Formação Empresarial",
        period: "Ago 2024 – Set 2025",
        location: "Brasília, DF",
        bullets: [
          "Análise e integração de sistemas e ferramentas para conectar marketing, comercial e financeiro.",
          "Configuração de CRMs, automações, campos, funis e fluxos de atendimento.",
          "Soluções personalizadas em Lovable e apoio no uso de IA para otimizar rotinas internas.",
          "Integrações por webhooks e plataformas como Make, Zapier, Pluga e Kommo.",
        ],
      },
      {
        role: "Analista de Comunicação e Operações",
        company: "Conectados com Deus – Igreja",
        period: "Fev 2023 – Dez 2024",
        location: "Brasília, DF",
        bullets: [
          "Gestão de pedidos, organização operacional e divulgação de cursos bíblicos gratuitos no digital e no presencial.",
          "Landing pages, peças digitais e materiais de comunicação para campanhas e projetos internos.",
          "Apoio em transmissões ao vivo, gravações, edição de vídeos e fotos e operação de conteúdo.",
        ],
      },
      {
        role: "Auxiliar Administrativo – Jovem Aprendiz",
        company: "KPMG",
        period: "Set 2021 – Dez 2021",
        location: "Belo Horizonte, MG",
        bullets: [
          "Catalogação e organização de documentos durante a mudança do acervo administrativo.",
          "Apoio a rotinas administrativas com foco em pontualidade, ética e integridade dos registros.",
        ],
      },
    ],
  },
  projects: {
    kicker: "Trabalhos",
    title: "Projetos",
    visit: "Abrir",
    filters: { all: "Todos", automation: "Automação", system: "Sistemas", web: "Sites" },
    items: [
      {
        title: "CRM integrado a sites e sistemas",
        description: "Funis, campos, robôs, formulários e webhooks ligando captação, atendimento e acompanhamento de leads.",
        tags: ["Kommo", "Webhooks", "WordPress"],
      },
      {
        title: "Automação do processo comercial",
        description: "Fluxos em Make, n8n, Zapier e Pluga que padronizam etapas e deixam cada informação rastreável.",
        tags: ["n8n", "Make", "Zapier", "Pluga"],
      },
      {
        title: "Chatbots e atendimento com IA",
        description: "Atendimento, qualificação e nutrição de leads no WhatsApp com CRM, ferramentas de marketing e IA.",
        tags: ["WhatsApp", "OpenAI", "Claude", "ManyChat"],
      },
      {
        title: "Zenith Therapies",
        description: "Sistema de cadastro e acompanhamento de pacientes para clínica de naturoterapia.",
        tags: ["Lovable", "React", "TypeScript"],
      },
      {
        title: "Aurum Core",
        description: "Sistema web de gestão de finanças pessoais e controle financeiro.",
        tags: ["Lovable", "React", "TypeScript"],
      },
      {
        title: "Comece pelo Mundo",
        description: "Site de turismo com globo 3D interativo.",
        tags: ["Three.js", "3D", "Web"],
      },
      {
        title: "Jarrão Flores",
        description: "Landing page para floricultura com foco em conversão.",
        tags: ["Landing Page", "Conversão"],
      },
      {
        title: "Maria Gois Psi",
        description: "Página informativa e de retenção de clientes para psicóloga.",
        tags: ["Landing Page", "Saúde"],
      },
      {
        title: "Drogaria Ariane",
        description: "Landing page informativa para drogaria.",
        tags: ["Landing Page", "Saúde"],
      },
    ],
  },
  skills: {
    kicker: "Ferramentas",
    title: "Stack",
    groups: [
      { name: "CRM e automação", items: ["Kommo", "RD Station", "Clint", "ActiveCampaign", "ManyChat", "Make", "n8n", "Zapier", "Pluga", "ClickUp"] },
      { name: "IA e chatbots", items: ["OpenAI", "Claude", "Claude Code", "Chatbots", "Qualificação de leads", "Agentes de atendimento"] },
      { name: "Web e CMS", items: ["WordPress", "WooCommerce", "Elementor", "Lovable", "Hostinger", "cPanel", "Landing pages"] },
      { name: "Marketing digital", items: ["Lançamentos", "Disparos WhatsApp", "E-mail marketing", "Teachable", "Redirect+", "Sendflow", "Gestão de bases"] },
      { name: "Desenvolvimento", items: ["JavaScript", "TypeScript", "React", "Python", "PHP", "Java", "Swift", "C/C++", "HTML", "CSS", "Git"] },
      { name: "Dados e qualidade", items: ["MySQL", "phpMyAdmin", "SQL", "Modelagem de dados", "Requisitos", "Testes", "Depuração", "Documentação"] },
    ],
    languagesTitle: "Idiomas",
    languages: [
      { name: "Português", level: "Nativo", pct: 100 },
      { name: "Espanhol", level: "Nativo", pct: 100 },
      { name: "Inglês", level: "Intermediário", pct: 60 },
    ],
    educationTitle: "Formação",
    degree: "Análise e Desenvolvimento de Sistemas",
    degreeInfo: "UDF · Concluído · Jan 2022 – Mar 2024",
    courses: [
      { name: "Fundação Bradesco", detail: "Banco de dados e CSS moderno · 2023" },
      { name: "Centro Interescolar de Línguas", detail: "Inglês · 2024" },
      { name: "ESPRO", detail: "Rotinas administrativas e comunicação · 2021" },
    ],
  },
  contact: {
    kicker: "Contato",
    title: "Vamos automatizar algo juntos?",
    text: "Me conte o processo que hoje toma tempo do seu time. Respondo rápido pelo WhatsApp ou e-mail.",
    whatsapp: "Chamar no WhatsApp",
    copy: "Copiar e-mail",
    copied: "E-mail copiado",
  },
  footer: { rights: "Feito com React, liquid glass e café." },
};

type Dict = typeof pt;

const en: Dict = {
  nav: {
    about: "About",
    flow: "How I work",
    experience: "Experience",
    projects: "Projects",
    skills: "Stack",
    contact: "Contact",
  },
  hero: {
    status: "Open to new projects",
    greeting: "Hi, I'm",
    role: "Systems & Automation Analyst",
    roleTags: ["CRM", "AI", "Integrations", "Web Development"],
    summary:
      "I connect CRM, WhatsApp, websites and AI so marketing, sales and support run without manual work.",
    ctaProjects: "See projects",
    ctaContact: "Get in touch",
    downloadCV: "Download CV",
    cvFile: "/Anderson_Linares_Resume_EN.pdf",
    lensHint: "drag the lens",
    terminal: [
      { cmd: "whoami", out: ["Anderson Linares · Brasília, Brazil", "Systems Analysis and Development · UDF"] },
      { cmd: "stack --top", out: ["Kommo · n8n · Make · Zapier", "OpenAI · Claude · WordPress · Lovable"] },
      { cmd: "status", out: ["● automations running", "● leads flowing into the CRM"] },
    ],
  },
  stats: [
    { value: 13000, suffix: "+", label: "contacts in communication flows" },
    { value: 20, suffix: "+", label: "tools integrated" },
    { value: 2024, prefix: "", suffix: "", label: "started in automation", plain: true },
    { value: 3, suffix: "", label: "languages · PT · ES · EN" },
  ],
  about: {
    kicker: "About",
    title: "Systems that talk to each other.",
    body:
      "I hold a degree in Systems Analysis and Development from UDF. I work with systems integration, WordPress website maintenance, CRM implementation, chatbots, marketing and sales automation, and custom solutions. I've worked on digital operations, launches, communication campaigns, WhatsApp workflows and email marketing.",
    highlights: [
      { title: "Integration", text: "Webhooks and APIs linking website, CRM, finance and support." },
      { title: "Automation", text: "n8n, Make and Zapier workflows that take repetitive work off the team." },
      { title: "Applied AI", text: "Chatbots and agents that answer, qualify and follow up on leads." },
    ],
  },
  flow: {
    kicker: "How I work",
    title: "One lead, from form to WhatsApp.",
    text: "Simulate a contact moving through a workflow I build often.",
    run: "Simulate lead",
    running: "Processing…",
    nodes: ["Form", "Webhook", "n8n", "AI", "CRM", "WhatsApp"],
    logs: [
      "new submission from {name}",
      "payload validated · source and UTM captured",
      "workflow started · phone normalized",
      "lead qualified · high intent",
      "contact created in pipeline · owner assigned",
      "welcome message sent",
    ],
    done: "workflow finished in {ms} ms",
    names: ["Mariana", "Rafael", "Juliana", "Carlos", "Beatriz", "Lucas"],
  },
  experience: {
    kicker: "Career",
    title: "Experience",
    current: "Current",
    items: [
      {
        role: "AI, Automation and Web Development",
        company: "Independent projects / freelance services",
        period: "2024 – Present",
        location: "Remote",
        current: true,
        bullets: [
          "Created and maintained WordPress pages, landing pages and e-commerce adjustments for clients.",
          "Built automations with Make and n8n for customer service, CRM, forms, lead capture and follow-up.",
          "Implemented chatbots and workflows integrated with WhatsApp, CRM and digital marketing tools.",
          "Created simple, functional solutions to reduce manual tasks and centralize information.",
        ],
      },
      {
        role: "Automation Manager",
        company: "Evo Coaching e Editora LTDA – Marcio Micheli",
        period: "Sep 2025 – May 2026",
        location: "Águas Claras, DF",
        bullets: [
          "Managed digital communication and website maintenance, keeping pages, content and systems aligned with business strategy.",
          "Launch and flash-sale campaigns with bulk WhatsApp outreach (ManyChat), email (ActiveCampaign) and relationship automation.",
          "Managed groups with Redirect+ and Sendflow and communication workflows for events and databases of 13,000+ contacts.",
          "Payment links in Teachable and direct communication with the base: countdowns, instruction letters and no-show protocols.",
        ],
      },
      {
        role: "Systems and Automation Analyst",
        company: "BRL Educação – Formação Empresarial",
        period: "Aug 2024 – Sep 2025",
        location: "Brasília, DF",
        bullets: [
          "Analyzed and integrated systems and tools to connect marketing, sales and finance processes.",
          "Configured CRMs, automations, fields, pipelines and service workflows.",
          "Built custom solutions in Lovable and supported the use of AI to optimize internal routines.",
          "Integrated tools through webhooks and platforms such as Make, Zapier, Pluga and Kommo.",
        ],
      },
      {
        role: "Communication and Operations Analyst",
        company: "Conectados com Deus – Church",
        period: "Feb 2023 – Dec 2024",
        location: "Brasília, DF",
        bullets: [
          "Managed orders, operations and promotion of free Bible courses online and in person.",
          "Created landing pages, digital assets and communication materials for campaigns and internal projects.",
          "Supported live broadcasts, recordings, video/photo editing and content operations.",
        ],
      },
      {
        role: "Administrative Assistant – Young Apprentice",
        company: "KPMG",
        period: "Sep 2021 – Dec 2021",
        location: "Belo Horizonte, MG",
        bullets: [
          "Cataloged and organized physical documents during an administrative archive relocation.",
          "Supported administrative routines with focus on punctuality, professional ethics and record integrity.",
        ],
      },
    ],
  },
  projects: {
    kicker: "Work",
    title: "Projects",
    visit: "Open",
    filters: { all: "All", automation: "Automation", system: "Systems", web: "Websites" },
    items: [
      {
        title: "CRM integrated with websites and systems",
        description: "Pipelines, fields, bots, forms and webhooks connecting lead capture, support and follow-up.",
        tags: ["Kommo", "Webhooks", "WordPress"],
      },
      {
        title: "Sales process automation",
        description: "Make, n8n, Zapier and Pluga workflows that standardize steps and keep every record traceable.",
        tags: ["n8n", "Make", "Zapier", "Pluga"],
      },
      {
        title: "Chatbots and AI-powered support",
        description: "Lead support, qualification and nurturing on WhatsApp with CRM, marketing tools and AI.",
        tags: ["WhatsApp", "OpenAI", "Claude", "ManyChat"],
      },
      {
        title: "Zenith Therapies",
        description: "Patient registration and follow-up system for a naturopathy clinic.",
        tags: ["Lovable", "React", "TypeScript"],
      },
      {
        title: "Aurum Core",
        description: "Web system for personal finance management.",
        tags: ["Lovable", "React", "TypeScript"],
      },
      {
        title: "Comece pelo Mundo",
        description: "Travel website with an interactive 3D globe.",
        tags: ["Three.js", "3D", "Web"],
      },
      {
        title: "Jarrão Flores",
        description: "Conversion-focused landing page for a flower shop.",
        tags: ["Landing Page", "Conversion"],
      },
      {
        title: "Maria Gois Psi",
        description: "Informational and client-retention page for a psychologist.",
        tags: ["Landing Page", "Health"],
      },
      {
        title: "Drogaria Ariane",
        description: "Informational landing page for a drugstore.",
        tags: ["Landing Page", "Health"],
      },
    ],
  },
  skills: {
    kicker: "Tools",
    title: "Stack",
    groups: [
      { name: "CRM & automation", items: ["Kommo", "RD Station", "Clint", "ActiveCampaign", "ManyChat", "Make", "n8n", "Zapier", "Pluga", "ClickUp"] },
      { name: "AI & chatbots", items: ["OpenAI", "Claude", "Claude Code", "Chatbots", "Lead qualification", "Support agents"] },
      { name: "Web & CMS", items: ["WordPress", "WooCommerce", "Elementor", "Lovable", "Hostinger", "cPanel", "Landing pages"] },
      { name: "Digital marketing", items: ["Launches", "WhatsApp outreach", "Email marketing", "Teachable", "Redirect+", "Sendflow", "Database management"] },
      { name: "Development", items: ["JavaScript", "TypeScript", "React", "Python", "PHP", "Java", "Swift", "C/C++", "HTML", "CSS", "Git"] },
      { name: "Data & quality", items: ["MySQL", "phpMyAdmin", "SQL", "Data modeling", "Requirements", "Testing", "Debugging", "Documentation"] },
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "Portuguese", level: "Native", pct: 100 },
      { name: "Spanish", level: "Native", pct: 100 },
      { name: "English", level: "Intermediate", pct: 60 },
    ],
    educationTitle: "Education",
    degree: "Systems Analysis and Development",
    degreeInfo: "UDF · Completed · Jan 2022 – Mar 2024",
    courses: [
      { name: "Fundação Bradesco", detail: "Databases and modern CSS · 2023" },
      { name: "Centro Interescolar de Línguas", detail: "English · 2024" },
      { name: "ESPRO", detail: "Administrative routines and communication · 2021" },
    ],
  },
  contact: {
    kicker: "Contact",
    title: "Shall we automate something together?",
    text: "Tell me about the process that eats up your team's time. I reply fast on WhatsApp or email.",
    whatsapp: "Message on WhatsApp",
    copy: "Copy email",
    copied: "Email copied",
  },
  footer: { rights: "Built with React, liquid glass and coffee." },
};

export const translations: Record<Lang, Dict> = { pt, en };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const LanguageContext = createContext<Ctx | null>(null);

const initialLang = (): Lang => {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "pt" || saved === "en") return saved;
  } catch {
    /* sem armazenamento */
  }
  return typeof navigator !== "undefined" && !navigator.language.toLowerCase().startsWith("pt") ? "en" : "pt";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {
      /* ignora */
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  return <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>{children}</LanguageContext.Provider>;
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
