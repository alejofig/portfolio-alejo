// Single source of truth for the profile. Feeds the human pages (/, /en/),
// the agent views (/llms.txt, /index.md, /en/index.md) and the JSON-LD.

export type Lang = 'es' | 'en';

type T = Record<Lang, string>;

export const LANGS: Lang[] = ['es', 'en'];

export const SITE = 'https://www.alejofig.com';

export const homePath: Record<Lang, string> = { es: '/', en: '/en/' };
export const markdownPath: Record<Lang, string> = {
  es: '/index.md',
  en: '/en/index.md',
};

export const person = {
  name: 'Alejandro Figueroa',
  legalName: 'Daniel Alejandro Figueroa Arias',
  handle: 'Alejofig',
  image: '/assets/images/berlin.png',
  locality: 'Bogotá',
  country: 'CO',
  // Where "custom agent" leads go. Swap for a WhatsApp / Cal link when ready.
  contactUrl: 'https://www.linkedin.com/in/alejofig/',
  links: {
    linkedin: 'https://www.linkedin.com/in/alejofig/',
    github: 'https://github.com/alejofig',
    medium: 'https://medium.com/@1alejofig1',
    soundcloud: 'https://soundcloud.com/alejandro-figueroa-74',
  },
  knowsAbout: [
    'AI agents',
    'WhatsApp AI assistants',
    'Conversational commerce',
    'Multi-agent systems',
    'Amazon Bedrock AgentCore',
    'Strands Agents',
    'Model Context Protocol (MCP)',
    'Claude',
    'AWS Serverless',
    'Data integrations',
    'Python',
    'FastAPI',
    'Terraform',
  ],
};

export const copy = {
  es: {
    meta: {
      title: 'Alejandro Figueroa — Agentes de IA para WhatsApp',
      description:
        'Forward Deployed Engineer en Clara y CEO de tuasistente.co y Milmanillas. Construyo asistentes de IA que venden, cobran y agendan por WhatsApp para negocios en Colombia y Latinoamérica.',
    },
    jobTitle: 'Forward Deployed Engineer',
    intro:
      'Ingeniero en Bogotá. Soy Forward Deployed Engineer en Clara y, por fuera, construyo tuasistente.co: asistentes de IA que venden por WhatsApp.',
    sidebar: {
      sections: 'Secciones',
      theme: 'Tema',
      light: 'Modo claro',
      dark: 'Modo oscuro',
    },
    viewAll: 'ver todo',
    example: 'conversación de ejemplo',
    nav: { writing: 'escritos' },
  },
  en: {
    meta: {
      title: 'Alejandro Figueroa — AI agents for WhatsApp',
      description:
        'Forward Deployed Engineer at Clara and CEO of tuasistente.co and Milmanillas. I build AI assistants that sell, collect payments and book appointments on WhatsApp for businesses in Colombia and Latin America.',
    },
    jobTitle: 'Forward Deployed Engineer',
    intro:
      "Engineer in Bogotá. I'm a Forward Deployed Engineer at Clara, and on the side I build tuasistente.co: AI assistants that sell over WhatsApp.",
    sidebar: {
      sections: 'Sections',
      theme: 'Theme',
      light: 'Light mode',
      dark: 'Dark mode',
    },
    viewAll: 'view all',
    example: 'example conversation',
    nav: { writing: 'writing' },
  },
} satisfies Record<Lang, unknown>;

// Sidebar navigation and panel headers, in page order.
export const panels: { id: string; title: T; note: T }[] = [
  {
    id: 'mili',
    title: { es: 'Mili', en: 'Mili' },
    note: {
      es: 'Una venta en milmanillas.com, contada por sus tool calls.',
      en: 'A sale on milmanillas.com, told through its tool calls.',
    },
  },
  {
    id: 'tuasistente',
    title: { es: 'tuasistente.co', en: 'tuasistente.co' },
    note: {
      es: 'La plataforma con la que está hecha Mili.',
      en: 'The platform Mili is built on.',
    },
  },
  {
    id: 'clara',
    title: { es: 'Clara', en: 'Clara' },
    note: {
      es: 'Forward Deployed Engineer desde junio de 2026.',
      en: 'Forward Deployed Engineer since June 2026.',
    },
  },
  {
    id: 'experiencia',
    title: { es: 'Experiencia', en: 'Experience' },
    note: {
      es: 'Siete años entre datos, integraciones y agentes.',
      en: 'Seven years across data, integrations and agents.',
    },
  },
  {
    id: 'charlas',
    title: { es: 'Charlas y premios', en: 'Talks & awards' },
    note: {
      es: 'AWS Community Builder desde 2023.',
      en: 'AWS Community Builder since 2023.',
    },
  },
  {
    id: 'proyectos',
    title: { es: 'Proyectos', en: 'Projects' },
    note: {
      es: 'Cosas que construí para mí.',
      en: 'Things I built for myself.',
    },
  },
  {
    id: 'escritos',
    title: { es: 'Escritos', en: 'Writing' },
    note: {
      es: 'Notas personales, casi todas en inglés.',
      en: 'Personal notes.',
    },
  },
  {
    id: 'contacto',
    title: { es: 'Contacto', en: 'Contact' },
    note: {
      es: 'Si tu negocio vende por WhatsApp.',
      en: 'If your business sells on WhatsApp.',
    },
  },
];

// Ventures he founded, for the JSON-LD graph.
export const organizations: { name: string; url: string; description: T }[] = [
  {
    name: 'tuasistente.co',
    url: 'https://tuasistente.co/',
    description: {
      es: 'Asistentes de IA que venden, cobran, generan guías de envío y agendan por WhatsApp para negocios en Colombia.',
      en: 'AI assistants that sell, collect payments, create shipping labels and book appointments on WhatsApp for businesses in Colombia.',
    },
  },
  {
    name: 'Milmanillas',
    url: 'https://milmanillas.com/',
    description: {
      es: 'Manillas para eventos y control de acceso; las ventas las atiende Mili, una asistente hecha con tuasistente.co.',
      en: 'Event and access-control wristbands; sales are handled by Mili, an assistant built on tuasistente.co.',
    },
  },
];

/* ── 01 Mili ─────────────────────────────────────────── */

export const mili = {
  url: 'https://milmanillas.com/',
  chat: {
    es: [
      {
        from: 'user',
        text: 'Hola! Necesito 500 manillas para un evento el sábado en Chía',
      },
      {
        from: 'agent',
        text: 'Hola, soy Mili 👋 Las de papel Tyvek, 500 unidades, quedan en $65.000. A Chía te las enviamos el mismo día. ¿Te mando el link de pago?',
      },
      { from: 'user', text: 'Sí porfa' },
      {
        from: 'agent',
        text: 'Listo. Puedes pagar con tarjeta, PSE, Nequi o Daviplata. Apenas se confirme te mando la guía.',
      },
    ],
    en: [
      {
        from: 'user',
        text: 'Hi! I need 500 wristbands for an event on Saturday in Chía',
      },
      {
        from: 'agent',
        text: "Hi, I'm Mili 👋 Tyvek paper ones, 500 units, come to COP 65,000. We ship same-day to Chía. Want the payment link?",
      },
      { from: 'user', text: 'Yes please' },
      {
        from: 'agent',
        text: "Done. You can pay by card, PSE, Nequi or Daviplata. I'll send the tracking number once it clears.",
      },
    ],
  },
  tools: {
    es: {
      header: '4 tool calls, 4 mensajes',
      more: 'milmanillas.com ↗',
      steps: [
        {
          icon: 'think',
          label: 'Pensando',
          chip: '500 manillas, sábado, Chía',
          mono: false,
          detailMono: false,
          detail: [
            { text: 'Tramo de 500 unidades: $65.000 sin envío.' },
            { text: 'Chía tiene entrega el mismo día.' },
          ],
        },
        {
          icon: 'read',
          label: 'Consultar catálogo',
          chip: 'manillas_tyvek',
          mono: true,
          detailMono: true,
          detail: [
            { text: 'lisas de colores · adhesivo de seguridad' },
            { text: 'pedido mínimo: 100 u' },
          ],
        },
        {
          icon: 'run',
          label: 'Crear link de pago',
          chip: 'tarjeta · PSE · Nequi · Daviplata',
          mono: false,
          detailMono: true,
          detail: [
            { text: 'link enviado por WhatsApp' },
            { text: '✓ pago confirmado', tone: 'add' },
          ],
        },
        {
          icon: 'write',
          label: 'Generar guía',
          chip: 'envío mismo día · Chía',
          mono: false,
          detailMono: true,
          detail: [
            { text: '✓ guía creada', tone: 'add' },
            { text: 'número enviado al cliente' },
          ],
        },
      ],
      diffs: [
        { file: 'ventas', add: 1, del: 0 },
        { file: 'inventario', add: 0, del: 500 },
      ],
      diffLines: {
        ventas: [
          { text: 'sábado · 500 tyvek · $65.000 · pagado', tone: 'add' },
        ],
        inventario: [
          { text: 'manillas_tyvek', tone: 'ctx' },
          { text: 'stock − 500', tone: 'del' },
        ],
      },
    },
    en: {
      header: '4 tool calls, 4 messages',
      more: 'milmanillas.com ↗',
      steps: [
        {
          icon: 'think',
          label: 'Thinking',
          chip: '500 wristbands, Saturday, Chía',
          mono: false,
          detailMono: false,
          detail: [
            { text: '500-unit tier: COP 65,000 before shipping.' },
            { text: 'Chía gets same-day delivery.' },
          ],
        },
        {
          icon: 'read',
          label: 'Read catalog',
          chip: 'tyvek_wristbands',
          mono: true,
          detailMono: true,
          detail: [
            { text: 'solid colors · security adhesive' },
            { text: 'minimum order: 100 u' },
          ],
        },
        {
          icon: 'run',
          label: 'Create payment link',
          chip: 'card · PSE · Nequi · Daviplata',
          mono: false,
          detailMono: true,
          detail: [
            { text: 'link sent on WhatsApp' },
            { text: '✓ payment confirmed', tone: 'add' },
          ],
        },
        {
          icon: 'write',
          label: 'Create shipping label',
          chip: 'same-day · Chía',
          mono: false,
          detailMono: true,
          detail: [
            { text: '✓ label created', tone: 'add' },
            { text: 'tracking number sent' },
          ],
        },
      ],
      diffs: [
        { file: 'sales', add: 1, del: 0 },
        { file: 'inventory', add: 0, del: 500 },
      ],
      diffLines: {
        sales: [
          { text: 'Saturday · 500 tyvek · COP 65,000 · paid', tone: 'add' },
        ],
        inventory: [
          { text: 'tyvek_wristbands', tone: 'ctx' },
          { text: 'stock − 500', tone: 'del' },
        ],
      },
    },
  },
} as const;

/* ── 02 tuasistente.co ───────────────────────────────── */

export const tuasistente = {
  url: 'https://tuasistente.co/',
  question: { es: '¿Qué es tuasistente.co?', en: 'What is tuasistente.co?' },
  // [n] marks an inline citation to sources[n].
  answer: {
    es: 'Es una plataforma para que un negocio en Colombia tenga su propio asistente de IA en WhatsApp. [0] Responde, cotiza con tus precios, cobra con link de pago o Nequi, genera guías de envío y agenda en Google Calendar, también de noche y en festivos. Crear la cuenta no cuesta: se recarga saldo desde $20.000 y se descuenta según el uso. Milmanillas vende así. [1]',
    en: "It's a platform that gives a business in Colombia its own AI assistant on WhatsApp. [0] It answers, quotes with your prices, collects payments through a link or Nequi, creates shipping labels and books on Google Calendar, nights and holidays included. Sign-up is free: you top up credit from COP 20,000 and pay for what you use. Milmanillas sells this way. [1]",
  },
  sources: [
    {
      name: 'tuasistente.co',
      domain: 'tuasistente.co',
      href: 'https://tuasistente.co/',
      letter: 't',
      color: '#2f6fec',
    },
    {
      name: 'Milmanillas',
      domain: 'milmanillas.com',
      href: 'https://milmanillas.com/',
      letter: 'M',
      color: '#e56d24',
    },
    {
      name: 'llms.txt',
      domain: 'alejofig.com',
      href: '/llms.txt',
      letter: 'a',
      color: '#1f7a5f',
    },
  ],
  labels: {
    es: { sources: '3 fuentes', followUps: 'Siguiente' },
    en: { sources: '3 sources', followUps: 'Next' },
  },
  followUps: {
    es: [
      {
        text: 'Crear mi asistente en tuasistente.co',
        href: 'https://tuasistente.co/',
      },
      { text: 'Necesito un agente a la medida', href: '#contacto' },
    ],
    en: [
      {
        text: 'Create my assistant on tuasistente.co',
        href: 'https://tuasistente.co/',
      },
      { text: 'I need a custom agent', href: '#contacto' },
    ],
  },
};

/* ── 03 Clara ────────────────────────────────────────── */

export const clara = {
  active: { es: 'Trabajando', en: 'Working' },
  done: {
    es: 'Jun 2026 — hoy · remoto desde Bogotá',
    en: 'Jun 2026 — now · remote from Bogotá',
  },
  rows: {
    es: [
      {
        primary: 'Agentes de IA para flujos de negocio',
        secondary: 'ganador del AI Hackathon interno',
      },
      { primary: 'Webhooks y nuevas integraciones' },
      {
        primary: 'Plataforma de datos',
        secondary: 'ERP ↔ APIs y reportes de Clara',
      },
      { primary: 'Requerimientos de clientes → software en producción' },
    ],
    en: [
      {
        primary: 'AI agents for business workflows',
        secondary: 'won the internal AI Hackathon',
      },
      { primary: 'Webhooks and new integrations' },
      { primary: 'Data platform', secondary: "ERP ↔ Clara's APIs and reports" },
      { primary: 'Customer requirements → production software' },
    ],
  },
};

/* ── 04 Experience ───────────────────────────────────── */

export type Job = {
  key: string;
  role: string;
  org: string;
  period: T;
  current?: boolean;
  details: Record<Lang, { label: string; meta: string }[]>;
};

export const jobs: Job[] = [
  {
    key: 'clara',
    role: 'Forward Deployed Engineer',
    org: 'Clara',
    period: { es: 'jun 2026 –', en: 'Jun 2026 –' },
    current: true,
    details: {
      es: [
        {
          label: 'Agentes, integraciones y plataforma de datos',
          meta: 'remoto',
        },
      ],
      en: [{ label: 'Agents, integrations and data platform', meta: 'remote' }],
    },
  },
  {
    key: 'tuasistente',
    role: 'CEO & Founder',
    org: 'tuasistente.co',
    period: { es: 'may 2026 –', en: 'May 2026 –' },
    current: true,
    details: {
      es: [
        {
          label: 'Flujos multi-agente: ventas, soporte, pagos',
          meta: 'WhatsApp',
        },
        { label: 'Integraciones con Sheets, pagos y envíos', meta: 'Kapso' },
      ],
      en: [
        {
          label: 'Multi-agent flows: sales, support, payments',
          meta: 'WhatsApp',
        },
        { label: 'Sheets, payments and shipping integrations', meta: 'Kapso' },
      ],
    },
  },
  {
    key: 'milmanillas',
    role: 'CEO & Founder',
    org: 'Milmanillas',
    period: { es: '2026 –', en: '2026 –' },
    current: true,
    details: {
      es: [
        {
          label: 'Manillas para eventos y control de acceso',
          meta: 'toda Colombia',
        },
        { label: 'Ventas atendidas por Mili', meta: 'tuasistente.co' },
      ],
      en: [
        {
          label: 'Event and access-control wristbands',
          meta: 'all of Colombia',
        },
        { label: 'Sales handled by Mili', meta: 'tuasistente.co' },
      ],
    },
  },
  {
    key: 'simetrik-staff',
    role: 'Staff Software Engineer',
    org: 'Simetrik',
    period: { es: 'nov 2025 – may 2026', en: 'Nov 2025 – May 2026' },
    details: {
      es: [
        {
          label: 'Plataforma self-service de integraciones',
          meta: 'AWS Serverless',
        },
        { label: 'SDK y CLI para clientes enterprise', meta: '100+' },
        {
          label: 'Mapeo de integraciones asistido por IA',
          meta: 'diseño técnico',
        },
      ],
      en: [
        { label: 'Self-service integration platform', meta: 'AWS Serverless' },
        { label: 'SDK and CLI for enterprise customers', meta: '100+' },
        { label: 'AI-assisted integration mapping', meta: 'tech lead' },
      ],
    },
  },
  {
    key: 'simetrik-em',
    role: 'Integrations Engineering Manager',
    org: 'Simetrik',
    period: { es: 'abr 2024 – oct 2025', en: 'Apr 2024 – Oct 2025' },
    details: {
      es: [
        { label: 'Equipo de integraciones', meta: '4 → 20 ingenieros' },
        { label: 'Pipeline event-driven', meta: '1B+ transacciones/día' },
      ],
      en: [
        { label: 'Integrations team', meta: '4 → 20 engineers' },
        { label: 'Event-driven pipeline', meta: '1B+ transactions/day' },
      ],
    },
  },
  {
    key: 'simetrik-data',
    role: 'Data Architect',
    org: 'Simetrik',
    period: { es: 'abr 2022 – abr 2024', en: 'Apr 2022 – Apr 2024' },
    details: {
      es: [
        { label: 'ETL desde APIs, SFTP y correos', meta: 'producto de datos' },
      ],
      en: [{ label: 'ETL from APIs, SFTP and email', meta: 'data product' }],
    },
  },
  {
    key: 'dlocal',
    role: 'Ssr. Data Engineer',
    org: 'dLocal',
    period: { es: 'jul 2021 – abr 2022', en: 'Jul 2021 – Apr 2022' },
    details: {
      es: [
        { label: 'Data lake en S3 con Glue y Kinesis', meta: 'Spark' },
        { label: 'CDC sobre RDS', meta: 'DMS · EMR' },
      ],
      en: [
        { label: 'S3 data lake with Glue and Kinesis', meta: 'Spark' },
        { label: 'CDC on RDS', meta: 'DMS · EMR' },
      ],
    },
  },
  {
    key: 'gap',
    role: 'Advanced Data Engineer',
    org: 'Growth Acceleration Partners',
    period: { es: 'feb – jul 2021', en: 'Feb – Jul 2021' },
    details: {
      es: [
        { label: 'Pipelines serverless para Saatva', meta: 'Glue · Athena' },
      ],
      en: [{ label: 'Serverless pipelines for Saatva', meta: 'Glue · Athena' }],
    },
  },
];

export const education: { title: T; org: string; period: string }[] = [
  {
    title: {
      es: 'Maestría en Ingeniería de Software',
      en: "Master's in Software Engineering",
    },
    org: 'Universidad de los Andes',
    period: '2022 – 2024',
  },
  {
    title: { es: 'Ingeniería Mecatrónica', en: 'Mechatronics Engineering' },
    org: 'Universidad Piloto de Colombia',
    period: '2013 – 2018',
  },
];

/* ── 05 Talks & awards ───────────────────────────────── */

export const awards: { date: string; title: T; org: string }[] = [
  {
    date: '2026',
    title: { es: 'Ganador AI Hackathon', en: 'AI Hackathon winner' },
    org: 'Clara',
  },
  {
    date: '2025',
    title: { es: 'Ganador AI Hackathon', en: 'AI Hackathon winner' },
    org: 'Simetrik',
  },
  {
    date: '2023 –',
    title: {
      es: 'AWS Community Builder · Data → AI Engineering',
      en: 'AWS Community Builder · Data → AI Engineering',
    },
    org: 'AWS',
  },
  {
    date: '2025',
    title: {
      es: 'AWS Certified Solutions Architect – Associate',
      en: 'AWS Certified Solutions Architect – Associate',
    },
    org: 'AWS',
  },
  {
    date: '2025',
    title: { es: 'Claude Code in Action', en: 'Claude Code in Action' },
    org: 'Anthropic',
  },
];

export const talks: { year: string; title: string; topic: T; link?: string }[] =
  [
    {
      year: '2026',
      title: 'AWS Summit Bogotá',
      topic: {
        es: 'QA autónomo con AgentCore, Strands y Browser Tool',
        en: 'Autonomous QA with AgentCore, Strands and Browser Tool',
      },
    },
    {
      year: '2025',
      title: 'AWS Summit Bogotá',
      topic: {
        es: 'APIs listas para IA e integración de servicios AWS',
        en: 'AI-ready APIs and AWS service integration',
      },
    },
    {
      year: '2025',
      title: 'AWS Student Community Day · Medellín',
      topic: { es: 'MCP en AWS', en: 'MCP on AWS' },
    },
    {
      year: '2025',
      title: 'AWS User Group · Medellín',
      topic: {
        es: 'Gastos diarios: serverless con Amazon Bedrock',
        en: 'Daily expenses: serverless with Amazon Bedrock',
      },
      link: 'https://www.youtube.com/watch?v=xUc_AFIrV7k',
    },
    {
      year: '2024',
      title: 'AWS Summit Bogotá',
      topic: {
        es: 'Arquitecturas serverless y orquestación',
        en: 'Serverless architectures and orchestration',
      },
    },
    {
      year: '2023',
      title: 'Women Who Code · Medellín',
      topic: { es: 'Speaker', en: 'Speaker' },
    },
  ];

/* ── 06 Projects ─────────────────────────────────────── */

export const projects: {
  name: string;
  link?: string;
  tags: string;
  description: T;
}[] = [
  {
    name: 'VisApp',
    tags: 'AgentCore · S3 · Kapso',
    description: {
      es: 'Agente que entra a un portal de citas, revisa fechas disponibles y avisa por WhatsApp o Telegram cuando aparece una más cercana.',
      en: 'An agent that logs into an appointment portal, checks open dates and pings WhatsApp or Telegram when an earlier one shows up.',
    },
  },
  {
    name: 'FitAgent',
    link: 'https://github.com/alejofig',
    tags: 'Flutter · Bedrock · Garmin',
    description: {
      es: 'Coach de entrenamiento que ajusta el plan con los datos de Garmin.',
      en: 'A training coach that adjusts the plan using Garmin data.',
    },
  },
  {
    name: 'Finance Tracker',
    link: 'https://fig.alejofig.com',
    tags: 'SES · Lambda · DynamoDB',
    description: {
      es: 'Lee los correos del banco con un LLM y registra cada gasto.',
      en: 'Reads bank emails with an LLM and logs every expense.',
    },
  },
  {
    name: 'LOL Wrapped',
    link: 'https://lolwrapped.com',
    tags: 'Python · AWS',
    description: {
      es: 'Tu año en League of Legends, en estadísticas.',
      en: 'Your League of Legends year, in stats.',
    },
  },
  {
    name: 'Berghain Analysis',
    link: 'https://berghain.alejofig.com',
    tags: 'Scraping · LLM · Charts',
    description: {
      es: 'Datos del club de Berlín: scraping, extracción con IA y gráficas.',
      en: "Data on Berlin's club: scraping, AI extraction and charts.",
    },
  },
];

/* ── 08 Contact ──────────────────────────────────────── */

export const contact = {
  es: {
    question: '¿Qué necesita tu negocio?',
    options: [
      {
        label: 'Un asistente listo para usar',
        hint: 'Créalo tú mismo en tuasistente.co',
        href: 'https://tuasistente.co/',
      },
      {
        label: 'Un agente a la medida',
        hint: 'Conectado a tus sistemas · escríbeme por LinkedIn',
        href: person.contactUrl,
      },
      {
        label: 'Solo conversar',
        hint: 'Sobre agentes, AWS o integraciones',
        href: person.contactUrl,
      },
    ],
    labels: {
      send: 'Enviar',
      sent: 'Abriendo en otra pestaña',
      reset: 'Volver',
      step: '1 de 1',
    },
    forAgents: '¿Eres un agente? Lee mi perfil en texto plano:',
  },
  en: {
    question: 'What does your business need?',
    options: [
      {
        label: 'A ready-made assistant',
        hint: 'Set it up yourself on tuasistente.co',
        href: 'https://tuasistente.co/',
      },
      {
        label: 'A custom agent',
        hint: 'Wired into your systems · message me on LinkedIn',
        href: person.contactUrl,
      },
      {
        label: 'Just a conversation',
        hint: 'About agents, AWS or integrations',
        href: person.contactUrl,
      },
    ],
    labels: {
      send: 'Send',
      sent: 'Opening in a new tab',
      reset: 'Back',
      step: '1 of 1',
    },
    forAgents: 'Are you an agent? Read my profile in plain text:',
  },
};
