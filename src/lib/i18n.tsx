import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "pt" | "en";

/* Conteúdo baseado nos currículos (PT e EN) de 2026 e nos sistemas publicados no GitHub. */

export type ProjectKind = "system" | "web" | "integration";

export const projectMeta: { link?: string; repo?: string; kind: ProjectKind }[] = [
  { repo: "https://github.com/Andersonlinares/solar-gestor", kind: "system" },
  { link: "https://casorioae.lovable.app", kind: "system" },
  { link: "https://zeniththerapiessystem.lovable.app", kind: "system" },
  { link: "https://aurumcore.lovable.app/", kind: "system" },
  { kind: "integration" },
  { link: "https://comece-pelo-mundo.vercel.app", kind: "web" },
  { link: "https://jarraoflores.com.br/", kind: "web" },
  { link: "https://mariagoispsi.com.br/", kind: "web" },
  { link: "https://drogariaariane.com.br/", kind: "web" },
];

export const contactInfo = {
  email: "andersonlinares.dev@gmail.com",
  phone: "+55 (61) 98129-6170",
  linkedin: "https://www.linkedin.com/in/andersonlinares/",
  github: "https://github.com/Andersonlinares",
};

/** link do WhatsApp com mensagem pronta, para saber que o contato veio do site */
export const whatsappLink = (message: string) => `https://wa.me/5561981296170?text=${encodeURIComponent(message)}`;

/** requisições simuladas na seção de arquitetura (iguais nos dois idiomas, só os textos mudam) */
const requests = [
  { method: "POST", path: "/api/orders", status: "201 Created", table: "orders" },
  { method: "GET", path: "/api/quotes?status=open", status: "200 OK", table: "quotes" },
  { method: "PATCH", path: "/api/guests/:id", status: "200 OK", table: "guests" },
];

const pt = {
  nav: {
    about: "Sobre",
    flow: "Arquitetura",
    experience: "Experiência",
    projects: "Projetos",
    skills: "Stack",
    contact: "Contato",
  },
  hero: {
    status: "Disponível para novos projetos",
    greeting: "Olá, eu sou",
    role: "Desenvolvedor de Sistemas",
    roleTags: ["Front-end", "Back-end", "APIs", "Banco de dados"],
    summary:
      "Desenvolvo sistemas web de ponta a ponta: interface em React e TypeScript, regras de negócio no back-end, banco PostgreSQL e integrações por API.",
    ctaProjects: "Ver projetos",
    ctaContact: "Falar comigo",
    downloadCV: "Baixar CV",
    cvFile: "/curriculo-anderson-linares.pdf",
    lensHint: "arraste a lente",
    terminal: [
      { cmd: "whoami", out: ["Anderson Linares · Brasília, DF", "Análise e Desenvolvimento de Sistemas · UDF"] },
      { cmd: "stack --frontend", out: ["React · TypeScript · Tailwind · Vite"] },
      { cmd: "stack --backend", out: ["APIs REST · Webhooks · Supabase", "PostgreSQL · SQL · PHP · Python"] },
      { cmd: "git push origin main", out: ["● build ok · deploy no ar"] },
    ],
  },
  stats: [
    { value: 9, suffix: "", label: "projetos no portfólio" },
    { value: 11, suffix: "+", label: "linguagens e tecnologias" },
    { value: 2022, suffix: "", label: "início em sistemas (UDF)", plain: true },
    { value: 3, suffix: "", label: "idiomas · PT · ES · EN" },
  ],
  about: {
    kicker: "Sobre",
    title: "Do banco de dados à interface.",
    body:
      "Sou formado em Análise e Desenvolvimento de Sistemas pela UDF. Construo sistemas web completos — modelo os dados, escrevo as regras no back-end, crio as telas e conecto tudo a outras plataformas por API. Também tenho experiência com CRMs, integrações e IA aplicada, o que me ajuda a entregar sistemas que já nascem conversando com o resto da operação.",
    highlights: [
      { title: "Front-end", text: "Interfaces em React e TypeScript, responsivas, rápidas e fáceis de usar." },
      { title: "Back-end", text: "APIs, funções no servidor, autenticação e regras de acesso por usuário." },
      { title: "Dados e integrações", text: "PostgreSQL, SQL, webhooks e APIs ligando o sistema a CRM, WhatsApp e IA." },
    ],
  },
  flow: {
    kicker: "Arquitetura",
    title: "O que acontece por trás de um clique.",
    text: "Envie uma requisição e acompanhe o caminho dela pelas camadas de um sistema que eu construo.",
    run: "Enviar requisição",
    running: "Processando…",
    nodes: ["Interface", "API", "Auth", "Regras", "PostgreSQL", "Webhook"],
    requests,
    logs: [
      "{method} {path} enviado pela interface React",
      "rota encontrada · payload validado",
      "token JWT verificado · política de acesso (RLS) aplicada",
      "regra de negócio executada · totais recalculados",
      "consulta em {table} · transação confirmada",
      "evento enviado para integrações (CRM / WhatsApp)",
    ],
    done: "{status} em {ms} ms",
    idle: "aguardando requisição…",
  },
  experience: {
    kicker: "Trajetória",
    title: "Experiência",
    current: "Atual",
    items: [
      {
        role: "Analista de CRM / Gestor de Automações",
        company: "Efeito Digital",
        period: "Mai 2026 – Atual",
        location: "Brasília, DF · Híbrido",
        current: true,
        bullets: [
          "Desenvolvimento de sistemas e ferramentas internas com apoio de IA (vibe coding e Claude Code), da análise à implementação.",
          "Integrações e automações no n8n, incluindo fluxos avançados com MCP, Claude e outras ferramentas de IA.",
          "Implementação e estruturação de CRMs, processos comerciais, jornadas e fluxos de atendimento.",
          "Gestão de IA e de automações: levantamento da necessidade, construção, documentação, manutenção e otimização.",
          "Resolução de problemas técnicos em WordPress, integrações e sistemas, e participação na arquitetura de novos projetos.",
        ],
      },
      {
        role: "Desenvolvimento de Sistemas, Web e IA",
        company: "Projetos independentes / prestação de serviços",
        period: "2024 – Atual",
        location: "Remoto",
        bullets: [
          "Desenvolvimento de sistemas web com React, TypeScript e Supabase (PostgreSQL, autenticação e regras de acesso).",
          "Criação e manutenção de páginas WordPress, landing pages e ajustes em e-commerce para clientes.",
          "Integrações por API e webhooks e automações com n8n e Make para atendimento, CRM e formulários.",
          "Chatbots e fluxos integrados com WhatsApp, CRM e IA.",
        ],
      },
      {
        role: "Gerente de Automações",
        company: "Evo Coaching e Editora LTDA – Marcio Micheli",
        period: "Set 2025 – Mai 2026",
        location: "Águas Claras, DF",
        bullets: [
          "Manutenção de sites e sistemas, mantendo páginas e conteúdos funcionais e alinhados à estratégia do negócio.",
          "Fluxos de comunicação por WhatsApp e e-mail (ManyChat e ActiveCampaign) para lançamentos e eventos.",
          "Links de pagamento na Teachable e gestão da base de contatos.",
        ],
      },
      {
        role: "Desenvolvedor e Analista de Sistemas",
        company: "BRL Educação – Formação Empresarial",
        period: "Ago 2024 – Set 2025",
        location: "Brasília, DF",
        bullets: [
          "Desenvolvimento de soluções personalizadas em Lovable (React) e uso de IA para otimizar rotinas internas.",
          "Análise e integração de sistemas para conectar marketing, comercial e financeiro.",
          "Integrações por webhooks e plataformas como Make, Zapier, Pluga e Kommo.",
          "Configuração de CRMs, campos, funis e fluxos de atendimento.",
        ],
      },
      {
        role: "Analista de Comunicação e Operações",
        company: "Conectados com Deus – Igreja",
        period: "Fev 2023 – Dez 2024",
        location: "Brasília, DF",
        bullets: [
          "Criação de landing pages, peças digitais e materiais de comunicação.",
          "Gestão de pedidos e organização operacional na divulgação de cursos gratuitos.",
          "Apoio em transmissões ao vivo, gravações e edição de vídeos e fotos.",
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
    code: "Código",
    filters: { all: "Todos", system: "Sistemas", web: "Sites", integration: "Integrações" },
    items: [
      {
        title: "Solar Gestor",
        description: "ERP para empresa de persianas e cortinas: clientes, orçamentos, pedidos, custos, fórmulas de preço, manutenções, auditoria e relatórios.",
        tags: ["React", "TypeScript", "PostgreSQL", "PL/pgSQL"],
      },
      {
        title: "Casório",
        description: "Sistema de organização de casamento com confirmação de presença pública, lista de presentes, orçamento e leitura de PDF por IA.",
        tags: ["TanStack Start", "Supabase", "RLS", "IA"],
      },
      {
        title: "Zenith Therapies",
        description: "Sistema de cadastro e acompanhamento de pacientes para clínica de naturoterapia, com áreas de profissional e paciente.",
        tags: ["React", "TypeScript", "Supabase"],
      },
      {
        title: "Aurum Core",
        description: "Sistema web de gestão de finanças pessoais e controle financeiro.",
        tags: ["React", "TypeScript", "Lovable"],
      },
      {
        title: "APIs e integrações",
        description: "Webhooks, funções serverless e workflows ligando sites, CRMs, WhatsApp e modelos de IA.",
        tags: ["REST", "Webhooks", "Vercel", "n8n"],
      },
      {
        title: "Comece pelo Mundo",
        description: "Site de turismo com globo 3D interativo.",
        tags: ["Three.js", "WebGL", "JavaScript"],
      },
      {
        title: "Jarrão Flores",
        description: "Landing page para floricultura com foco em conversão.",
        tags: ["Front-end", "Landing Page"],
      },
      {
        title: "Maria Gois Psi",
        description: "Página informativa e de retenção de clientes para psicóloga.",
        tags: ["Front-end", "Landing Page"],
      },
      {
        title: "Drogaria Ariane",
        description: "Landing page informativa para drogaria.",
        tags: ["Front-end", "Landing Page"],
      },
    ],
  },
  skills: {
    kicker: "Ferramentas",
    title: "Stack",
    groups: [
      { name: "Front-end", items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Vite", "TanStack", "Three.js", "Responsividade"] },
      { name: "Back-end", items: ["APIs REST", "Webhooks", "Funções serverless", "Supabase", "Autenticação", "Regras de acesso (RLS)", "PHP", "Python"] },
      { name: "Banco de dados", items: ["PostgreSQL", "MySQL", "SQL", "PL/pgSQL", "Modelagem de dados", "phpMyAdmin"] },
      { name: "Ferramentas", items: ["Git", "GitHub", "VS Code", "Vercel", "Lovable", "Claude Code", "Hostinger", "cPanel", "WordPress"] },
      { name: "Integrações e IA", items: ["OpenAI", "Claude", "n8n", "Make", "Zapier", "Kommo API", "WhatsApp"] },
      { name: "Engenharia", items: ["Levantamento de requisitos", "Análise de sistemas", "Testes", "Depuração", "Documentação", "Java", "Swift", "C/C++"] },
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
    title: "Vamos construir o seu sistema?",
    text: "Tem um sistema, painel ou integração para tirar do papel? Me conte a ideia. Respondo rápido pelo WhatsApp ou e-mail.",
    whatsapp: "Chamar no WhatsApp",
    whatsappMessage: "Olá, Anderson! Vim pelo seu site (portfólio) e gostaria de conversar sobre um projeto.",
    copy: "Copiar e-mail",
    copied: "E-mail copiado",
  },
  footer: { rights: "Feito com React, TypeScript e liquid glass." },
};

type Dict = typeof pt;

const en: Dict = {
  nav: {
    about: "About",
    flow: "Architecture",
    experience: "Experience",
    projects: "Projects",
    skills: "Stack",
    contact: "Contact",
  },
  hero: {
    status: "Open to new projects",
    greeting: "Hi, I'm",
    role: "Systems Developer",
    roleTags: ["Front-end", "Back-end", "APIs", "Databases"],
    summary:
      "I build web systems end to end: React and TypeScript interfaces, back-end business logic, PostgreSQL databases and API integrations.",
    ctaProjects: "See projects",
    ctaContact: "Get in touch",
    downloadCV: "Download CV",
    cvFile: "/Anderson_Linares_Resume_EN.pdf",
    lensHint: "drag the lens",
    terminal: [
      { cmd: "whoami", out: ["Anderson Linares · Brasília, Brazil", "Systems Analysis and Development · UDF"] },
      { cmd: "stack --frontend", out: ["React · TypeScript · Tailwind · Vite"] },
      { cmd: "stack --backend", out: ["REST APIs · Webhooks · Supabase", "PostgreSQL · SQL · PHP · Python"] },
      { cmd: "git push origin main", out: ["● build ok · deployed"] },
    ],
  },
  stats: [
    { value: 9, suffix: "", label: "projects in the portfolio" },
    { value: 11, suffix: "+", label: "languages and technologies" },
    { value: 2022, suffix: "", label: "started in systems (UDF)", plain: true },
    { value: 3, suffix: "", label: "languages · PT · ES · EN" },
  ],
  about: {
    kicker: "About",
    title: "From the database to the interface.",
    body:
      "I hold a degree in Systems Analysis and Development from UDF. I build complete web systems — I model the data, write the back-end rules, design the screens and connect everything to other platforms through APIs. I also have experience with CRMs, integrations and applied AI, which helps me ship systems that already talk to the rest of the operation.",
    highlights: [
      { title: "Front-end", text: "React and TypeScript interfaces that are responsive, fast and easy to use." },
      { title: "Back-end", text: "APIs, server functions, authentication and per-user access rules." },
      { title: "Data & integrations", text: "PostgreSQL, SQL, webhooks and APIs connecting the system to CRM, WhatsApp and AI." },
    ],
  },
  flow: {
    kicker: "Architecture",
    title: "What happens behind a click.",
    text: "Send a request and follow its path through the layers of a system I build.",
    run: "Send request",
    running: "Processing…",
    nodes: ["Interface", "API", "Auth", "Rules", "PostgreSQL", "Webhook"],
    requests,
    logs: [
      "{method} {path} sent from the React interface",
      "route matched · payload validated",
      "JWT verified · row-level security applied",
      "business rule executed · totals recalculated",
      "query on {table} · transaction committed",
      "event sent to integrations (CRM / WhatsApp)",
    ],
    done: "{status} in {ms} ms",
    idle: "waiting for a request…",
  },
  experience: {
    kicker: "Career",
    title: "Experience",
    current: "Current",
    items: [
      {
        role: "CRM Analyst / Automation Manager",
        company: "Efeito Digital",
        period: "May 2026 – Present",
        location: "Brasília, DF · Hybrid",
        current: true,
        bullets: [
          "Build systems and internal tools with AI support (vibe coding and Claude Code), from analysis to implementation.",
          "Integrations and automations in n8n, including advanced workflows with MCP, Claude and other AI tools.",
          "Implement and structure CRMs, sales processes, customer journeys and service workflows.",
          "Manage AI and automation: requirements, build, documentation, maintenance and optimization.",
          "Solve technical issues across WordPress, integrations and systems, and help shape the architecture of new projects.",
        ],
      },
      {
        role: "Systems, Web and AI Development",
        company: "Independent projects / freelance services",
        period: "2024 – Present",
        location: "Remote",
        bullets: [
          "Built web systems with React, TypeScript and Supabase (PostgreSQL, authentication and access rules).",
          "Created and maintained WordPress pages, landing pages and e-commerce adjustments for clients.",
          "API and webhook integrations and n8n/Make automations for customer service, CRM and forms.",
          "Chatbots and workflows integrated with WhatsApp, CRM and AI.",
        ],
      },
      {
        role: "Automation Manager",
        company: "Evo Coaching e Editora LTDA – Marcio Micheli",
        period: "Sep 2025 – May 2026",
        location: "Águas Claras, DF",
        bullets: [
          "Maintained websites and systems, keeping pages and content functional and aligned with business strategy.",
          "WhatsApp and email communication workflows (ManyChat and ActiveCampaign) for launches and events.",
          "Payment links in Teachable and contact base management.",
        ],
      },
      {
        role: "Systems Developer and Analyst",
        company: "BRL Educação – Formação Empresarial",
        period: "Aug 2024 – Sep 2025",
        location: "Brasília, DF",
        bullets: [
          "Built custom solutions in Lovable (React) and used AI to optimize internal routines.",
          "Analyzed and integrated systems to connect marketing, sales and finance.",
          "Integrated tools through webhooks and platforms such as Make, Zapier, Pluga and Kommo.",
          "Configured CRMs, fields, pipelines and service workflows.",
        ],
      },
      {
        role: "Communication and Operations Analyst",
        company: "Conectados com Deus – Church",
        period: "Feb 2023 – Dec 2024",
        location: "Brasília, DF",
        bullets: [
          "Created landing pages, digital assets and communication materials.",
          "Managed orders and operations for the promotion of free courses.",
          "Supported live broadcasts, recordings and video/photo editing.",
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
    code: "Code",
    filters: { all: "All", system: "Systems", web: "Websites", integration: "Integrations" },
    items: [
      {
        title: "Solar Gestor",
        description: "ERP for a blinds and curtains company: customers, quotes, orders, costs, pricing formulas, maintenance, audit log and reports.",
        tags: ["React", "TypeScript", "PostgreSQL", "PL/pgSQL"],
      },
      {
        title: "Casório",
        description: "Wedding planning system with public RSVP, gift registry, budget tracking and AI-powered PDF quote reading.",
        tags: ["TanStack Start", "Supabase", "RLS", "AI"],
      },
      {
        title: "Zenith Therapies",
        description: "Patient registration and follow-up system for a naturopathy clinic, with practitioner and patient areas.",
        tags: ["React", "TypeScript", "Supabase"],
      },
      {
        title: "Aurum Core",
        description: "Web system for personal finance management.",
        tags: ["React", "TypeScript", "Lovable"],
      },
      {
        title: "APIs and integrations",
        description: "Webhooks, serverless functions and workflows connecting websites, CRMs, WhatsApp and AI models.",
        tags: ["REST", "Webhooks", "Vercel", "n8n"],
      },
      {
        title: "Comece pelo Mundo",
        description: "Travel website with an interactive 3D globe.",
        tags: ["Three.js", "WebGL", "JavaScript"],
      },
      {
        title: "Jarrão Flores",
        description: "Conversion-focused landing page for a flower shop.",
        tags: ["Front-end", "Landing Page"],
      },
      {
        title: "Maria Gois Psi",
        description: "Informational and client-retention page for a psychologist.",
        tags: ["Front-end", "Landing Page"],
      },
      {
        title: "Drogaria Ariane",
        description: "Informational landing page for a drugstore.",
        tags: ["Front-end", "Landing Page"],
      },
    ],
  },
  skills: {
    kicker: "Tools",
    title: "Stack",
    groups: [
      { name: "Front-end", items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Vite", "TanStack", "Three.js", "Responsive design"] },
      { name: "Back-end", items: ["REST APIs", "Webhooks", "Serverless functions", "Supabase", "Authentication", "Row-level security", "PHP", "Python"] },
      { name: "Databases", items: ["PostgreSQL", "MySQL", "SQL", "PL/pgSQL", "Data modeling", "phpMyAdmin"] },
      { name: "Tooling", items: ["Git", "GitHub", "VS Code", "Vercel", "Lovable", "Claude Code", "Hostinger", "cPanel", "WordPress"] },
      { name: "Integrations & AI", items: ["OpenAI", "Claude", "n8n", "Make", "Zapier", "Kommo API", "WhatsApp"] },
      { name: "Engineering", items: ["Requirements gathering", "Systems analysis", "Testing", "Debugging", "Documentation", "Java", "Swift", "C/C++"] },
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
    title: "Shall we build your system?",
    text: "Have a system, dashboard or integration you want to get off the ground? Tell me the idea. I reply fast on WhatsApp or email.",
    whatsapp: "Message on WhatsApp",
    whatsappMessage: "Hi Anderson! I found you through your website (portfolio) and would like to talk about a project.",
    copy: "Copy email",
    copied: "Email copied",
  },
  footer: { rights: "Built with React, TypeScript and liquid glass." },
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
