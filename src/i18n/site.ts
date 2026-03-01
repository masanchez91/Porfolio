export const SUPPORTED_LOCALES = ["es", "en"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "es";

export function isLocale(value: string | undefined): value is Locale {
  return !!value && SUPPORTED_LOCALES.includes(value as Locale);
}

export function normalizeLocale(value: string | undefined): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export function localePath(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized}`;
}

export function swapLocaleInPath(pathname: string, target: Locale): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length > 0 && isLocale(parts[0])) {
    parts[0] = target;
    return `/${parts.join("/")}`;
  }
  return `/${target}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

export function localeMeta(locale: Locale) {
  if (locale === "en") {
    return { htmlLang: "en-US", ogLocale: "en_US", dateLocale: "en-US" as const };
  }
  return { htmlLang: "es-MX", ogLocale: "es_MX", dateLocale: "es-MX" as const };
}

type SiteCopy = {
  meta: {
    homeTitle: string;
    homeDescription: string;
    blogTitle: string;
    blogDescription: string;
  };
  nav: {
    home: string;
    projects: string;
    experience: string;
    about: string;
    ecosystem: string;
    contact: string;
    blog: string;
    language: string;
  };
  home: {
    projectsTitle: string;
    experienceTitle: string;
    aboutTitle: string;
    ecosystemTitle: string;
  };
  hero: {
    badge: string;
    micro: string;
    title: string;
    subtitle: string;
    description: string;
    chips: string[];
    moonflow: string;
    rablo: string;
    primaryCta: string;
    secondaryCta: string;
    quote: string;
  };
  projects: {
    title: string;
    description: string;
    roleLabel: string;
    problemLabel: string;
    solutionLabel: string;
    impactLabel: string;
    cta: string;
    items: Array<{
      title: string;
      subtitle: string;
      role: string;
      problem: string;
      solution: string;
      impact: string;
      status: string;
      link: string;
    }>;
  };
  experience: {
    more: string;
    items: Array<{
      date: string;
      title: string;
      company: string;
      description: string;
      link?: string;
    }>;
  };
  about: {
    imageAlt: string;
    p1: string;
    p2: string;
    p3: string;
    differentiatorTitle: string;
    points: Array<{ title: string; description: string }>;
    roleLine: string;
  };
  services: {
    items: Array<{ title: string; description: string; features: string[] }>;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
  };
  contact: {
    title: string;
    intro: string;
    name: string;
    email: string;
    subject: string;
    reason: string;
    reasonOptions: { value: string; label: string }[];
    message: string;
    submit: string;
    directContact: string;
    responseTime: string;
    next: string;
    process: Array<{ title: string; description: string }>;
    nextUrl: string;
  };
  footer: {
    description: string;
    navTitle: string;
    contactTitle: string;
    emailLabel: string;
    followWork: string;
    connect: string;
    bottomLine: string;
    status: string;
    blogNav: string;
  };
  floatingCta: {
    label: string;
  };
  blog: {
    breadcrumbHome: string;
    breadcrumbBlog: string;
    heroTitle: string;
    heroDescription: string;
    featured: string;
    recent: string;
    readArticle: string;
    newsletterTitle: string;
    newsletterDescription: string;
    newsletterButton: string;
    by: string;
    minRead: string;
    shareTitle: string;
    copy: string;
    copied: string;
    feedbackTitle: string;
    feedbackDescription: string;
    feedbackButton: string;
    linkedinButton: string;
    backBlog: string;
  };
  thanks: {
    title: string;
    description: string;
    heading: string;
    body: string;
    stepsTitle: string;
    steps: Array<{ title: string; description: string }>;
    urgent: string;
    backHome: string;
    readBlog: string;
  };
};

export const SITE_COPY: Record<Locale, SiteCopy> = {
  es: {
    meta: {
      homeTitle: "Mauro Sánchez | Tech Lead, Full Stack Engineer & Indie Creator",
      homeDescription:
        "Portfolio de Mauro Sánchez (The Holy Code). Proyectos reales, experiencia como Tech Lead y desarrollo de productos digitales con impacto.",
      blogTitle: "Blog | Mauro Sánchez · Product Builder",
      blogDescription:
        "Bitácora de producto de Mauro Sánchez: estrategia, arquitectura y ejecución detrás de proyectos reales.",
    },
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      experience: "Experiencia",
      about: "Sobre mí",
      ecosystem: "Ecosistema",
      contact: "Contacto",
      blog: "Blog",
      language: "Idioma",
    },
    home: {
      projectsTitle: "Proyectos destacados",
      experienceTitle: "Experiencia laboral",
      aboutTitle: "Sobre Mauro y The Holy Code",
      ecosystemTitle: "Ecosistema de producto",
    },
    hero: {
      badge: "Construyendo productos propios",
      micro: "The Holy Code · Tech Lead · Indie Creator",
      title: "Soy Mauro — Tech Lead, Full Stack Engineer & Indie Creator.",
      subtitle: "Construyo productos digitales minimalistas, escalables y orientados a negocio.",
      description:
        "Con 10+ años de experiencia, combino estrategia de producto, arquitectura y ejecución para convertir ideas en software real. He liderado equipos, lanzado productos propios y creado plataformas que generan impacto medible.",
      chips: ["10+ años de experiencia", "10+ proyectos entregados"],
      moonflow: "Kobro adquirida por Moonflow",
      rablo: "Actualmente en CompuSoluciones (Rablo)",
      primaryCta: "Ver proyectos",
      secondaryCta: "Conectemos",
      quote: '"Construyo productos digitales con visión, arquitectura y ejecución real."',
    },
    projects: {
      title: "Proyectos con contexto, ejecución y resultados",
      description:
        "Cada caso presenta el problema, la solución construida y el impacto de negocio. Este enfoque refleja mi forma de trabajar como Tech Lead y creador de producto.",
      roleLabel: "Rol",
      problemLabel: "Problema",
      solutionLabel: "Solución",
      impactLabel: "Impacto",
      cta: "Ver proyecto",
      items: [
        {
          title: "Qantus",
          subtitle: "Plataforma de precisión para cotizaciones",
          role: "Definición estratégica, diseño de arquitectura y ejecución técnica Full Stack.",
          problem: "Equipos comerciales con cálculos tardados y alto margen de error.",
          solution: "Motor de cotización con variables configurables y escenarios comparativos.",
          impact: "Margen de error promedio de ±0.3%, 120+ sucursales conectadas.",
          status: "Activo",
          link: "https://www.qantus.io/",
        },
        {
          title: "Wavi",
          subtitle: "Asistente inteligente en WhatsApp para PyMEs",
          role: "Definición estratégica, diseño de arquitectura y ejecución técnica Full Stack.",
          problem: "Alto volumen de preguntas repetitivas y ventas perdidas fuera de horario.",
          solution: "Automatización de atención 24/7 con respuestas y flujo comercial asistido.",
          impact: "Hasta 60% de consultas automatizadas y mejoras en conversión.",
          status: "Activo",
          link: "https://wavi.holy-code.com/",
        },
        {
          title: "Malu",
          subtitle: "Software de administración de condominios en LATAM",
          role: "Definición estratégica, diseño de arquitectura y ejecución técnica Full Stack.",
          problem: "Procesos manuales, morosidad y conflictos operativos en condominios.",
          solution: "Plataforma centralizada para cobranza, accesos, reservas y comunicación.",
          impact: "Ahorro operativo de hasta 80% en tareas administrativas.",
          status: "Activo",
          link: "https://malu.holy-code.com/",
        },
        {
          title: "MealMate+",
          subtitle: "Compañero digital de estilo de vida personalizado",
          role: "Definición estratégica, diseño de arquitectura y ejecución técnica Full Stack.",
          problem: "Planificación fragmentada entre nutrición, actividad y hábitos.",
          solution: "Experiencia todo-en-uno con seguimiento y recomendaciones inteligentes.",
          impact: "500+ usuarios activos y roadmap de mejoras continuo.",
          status: "Activo",
          link: "https://mealmeatplus.holy-code.com/",
        },
        {
          title: "Rablo",
          subtitle: "Digitalización de procesos críticos con IA",
          role: "Desarrollo de producto en CompuSoluciones",
          problem: "Falta de trazabilidad y lentitud en autorizaciones internas.",
          solution: "Centralización de procesos y automatización de decisiones operativas.",
          impact: "Mejor trazabilidad, cumplimiento y velocidad operativa para empresas.",
          status: "Actual",
          link: "https://www.rablo.io/",
        },
        {
          title: "Run Territory",
          subtitle: "Nueva app en construcción",
          role: "Definición estratégica, diseño de arquitectura y ejecución técnica Full Stack.",
          problem: "Próximamente",
          solution: "Próximamente",
          impact: "Lanzamiento próximo",
          status: "Coming soon",
          link: "/#contacto",
        },
      ],
    },
    experience: {
      more: "Saber más",
      items: [
        {
          date: "Nov 2025 - Actualidad",
          title: "Desarrollador Senior",
          company: "CompuSoluciones y Asociados",
          description:
            "Desarrollo de soluciones digitales de impacto para operaciones empresariales. Actualmente participo en el desarrollo de Rablo, una plataforma para digitalizar procesos y flujos de autorización críticos con IA.",
          link: "https://www.rablo.io/",
        },
        {
          date: "Ene 2023 - Nov 2025",
          title: "Tech Lead",
          company: "Kobro",
          description:
            "Lideré el desarrollo técnico de producto, arquitectura y entregas continuas para escalar la plataforma. Durante esta etapa, Kobro fue adquirida por Moonflow, validando el valor técnico y de negocio construido.",
          link: "https://www.kobro.io",
        },
        {
          date: "Oct 2018 - Dic 2023",
          title: "Full Stack Developer",
          company: "CompuSoluciones y Asociados",
          description:
            "Ejecución end-to-end de aplicaciones web y componentes backend. Colaboré en la evolución de plataformas internas y productos digitales orientados a eficiencia operativa.",
          link: "https://www.compusoluciones.com/",
        },
      ],
    },
    about: {
      imageAlt: "Mauro Sánchez - Fundador de The Holy Code",
      p1: "The Holy Code es mi marca personal como constructor de productos: un espacio donde combino visión de negocio, diseño y código para lanzar experiencias digitales elegantes.",
      p2: "Soy Mauro Sánchez, Tech Lead y Full Stack Engineer con 10+ años de experiencia. Trabajo en la intersección entre arquitectura, producto y ejecución: desde MVPs hasta plataformas que operan en producción con usuarios reales.",
      p3: "Mi trayectoria incluye liderazgo técnico en Kobro (empresa posteriormente adquirida por Moonflow), y hoy desarrollo soluciones en Rablo dentro de CompuSoluciones y Asociados.",
      differentiatorTitle: "Lo que me diferencia",
      points: [
        { title: "Visión de producto", description: "No solo código: decisiones para crear valor real." },
        { title: "Liderazgo técnico", description: "Arquitectura, estándares y foco en entrega continua." },
        { title: "Mentalidad indie", description: "Rapidez de ejecución sin sacrificar calidad." },
        { title: "Impacto medible", description: "Productos que mejoran procesos y resultados." },
      ],
      roleLine: "Tech Lead · Full Stack Engineer · Indie Creator",
    },
    services: {
      items: [
        {
          title: "SaaS y plataformas B2B",
          description:
            "Productos orientados a resolver operaciones reales de negocio con automatización, trazabilidad y experiencia de usuario sólida.",
          features: ["Automatización de flujos", "Integraciones con APIs", "Dashboards operativos", "Arquitectura escalable"],
        },
        {
          title: "Productos de IA aplicada",
          description:
            "Uso de IA para mejorar procesos, reducir fricción operativa y acelerar decisiones dentro de productos digitales.",
          features: ["Asistentes inteligentes", "Generación de flujos", "Clasificación y sugerencias", "Automatización contextual"],
        },
        {
          title: "Experiencias de producto",
          description:
            "Construcción de interfaces limpias y enfocadas en conversión, adopción y claridad para usuarios finales.",
          features: ["Diseño minimalista", "Flujos centrados en valor", "Responsive first", "Performance web"],
        },
        {
          title: "Laboratorio Indie",
          description:
            "Exploro y lanzo ideas propias de forma iterativa: validar rápido, aprender del mercado y evolucionar el producto.",
          features: ["MVPs internos", "Iteración continua", "Roadmap en público", "Enfoque creator-first"],
        },
      ],
      ctaTitle: "Este espacio no vende servicios",
      ctaDescription:
        "The Holy Code es mi vitrina para compartir productos, aprendizajes y evolución técnica. Si quieres conectar para alianzas, comunidad o feedback de producto, bienvenido.",
      ctaButton: "Conectemos",
    },
    contact: {
      title: "Conectemos",
      intro:
        "Este portafolio es para compartir mi trabajo, productos y evolución. Si quieres colaborar, dar feedback o crear una alianza, escríbeme.",
      name: "Nombre",
      email: "Email",
      subject: "Asunto",
      reason: "Motivo de contacto",
      reasonOptions: [
        { value: "", label: "Seleccionar..." },
        { value: "feedback", label: "Feedback de producto" },
        { value: "alianza", label: "Alianza o colaboración" },
        { value: "comunidad", label: "Comunidad / contenido" },
        { value: "inversion", label: "Inversión / partnership" },
        { value: "otro", label: "Otro" },
      ],
      message: "Mensaje",
      submit: "Enviar mensaje",
      directContact: "Contacto directo",
      responseTime: "Tiempo de respuesta",
      next: "¿Qué pasa después?",
      process: [
        { title: "Leo tu mensaje", description: "Reviso contexto y objetivos" },
        { title: "Te respondo con claridad", description: "Siguiente paso recomendado" },
        { title: "Conexión activa", description: "Colaboración, feedback o alianza" },
      ],
      nextUrl: "https://holy-code.com/es/gracias",
    },
    footer: {
      description:
        "Transformando ideas en productos digitales que impactan. Cada línea de código cuenta una historia de innovación.",
      navTitle: "Navegación",
      contactTitle: "Contacto",
      emailLabel: "Email",
      followWork: "¿Quieres seguir mi trabajo?",
      connect: "Conectemos",
      bottomLine: "Transformando ideas en productos digitales",
      status: "Construyendo productos propios",
      blogNav: "Artículos del blog",
    },
    floatingCta: {
      label: "Conectemos",
    },
    blog: {
      breadcrumbHome: "Inicio",
      breadcrumbBlog: "Blog",
      heroTitle: "Blog de producto y ejecución",
      heroDescription:
        "Comparto el trabajo que hago construyendo productos digitales: decisiones estratégicas, arquitectura, marketing y aprendizajes reales.",
      featured: "Artículo destacado",
      recent: "Más publicaciones",
      readArticle: "Leer artículo",
      newsletterTitle: "¿Quieres seguir mi proceso de construcción?",
      newsletterDescription:
        "Si quieres que publique más casos, métricas o decisiones técnicas, escríbeme y lo convierto en el próximo artículo.",
      newsletterButton: "Enviar sugerencia",
      by: "Por",
      minRead: "min de lectura",
      shareTitle: "Comparte este artículo",
      copy: "Copiar",
      copied: "¡Copiado!",
      feedbackTitle: "¿Te aportó este artículo?",
      feedbackDescription:
        "Este blog documenta cómo construyo productos reales. Si quieres que profundice en un proyecto o decisión técnica, escríbeme.",
      feedbackButton: "Enviar feedback",
      linkedinButton: "Conectar en LinkedIn",
      backBlog: "Volver al blog",
    },
    thanks: {
      title: "¡Gracias por tu mensaje! | The Holy Code",
      description: "Tu mensaje ha sido enviado exitosamente. Te responderé pronto.",
      heading: "¡Mensaje enviado!",
      body:
        "Gracias por contactarme. Tu mensaje ha llegado correctamente y lo revisaré personalmente. Te responderé en las próximas 24-48 horas.",
      stepsTitle: "¿Qué sigue ahora?",
      steps: [
        { title: "Revisión de tu mensaje", description: "Analizaré tu contexto y necesidades específicas" },
        { title: "Respuesta personalizada", description: "Te enviaré una respuesta detallada por email" },
        { title: "Siguiente paso", description: "Definimos la mejor forma de conectar" },
      ],
      urgent: "¿Tu mensaje es urgente? Escríbeme a mauro@holy-code.com para respuesta el mismo día.",
      backHome: "Volver al inicio",
      readBlog: "Leer blog",
    },
  },
  en: {
    meta: {
      homeTitle: "Mauro Sánchez | Tech Lead, Full Stack Engineer & Indie Creator",
      homeDescription:
        "Portfolio of Mauro Sánchez (The Holy Code). Real products, Tech Lead experience, and full-stack execution with business impact.",
      blogTitle: "Blog | Mauro Sánchez · Product Builder",
      blogDescription:
        "Product journal by Mauro Sánchez: strategy, architecture, and execution behind real products.",
    },
    nav: {
      home: "Home",
      projects: "Projects",
      experience: "Experience",
      about: "About",
      ecosystem: "Ecosystem",
      contact: "Contact",
      blog: "Blog",
      language: "Language",
    },
    home: {
      projectsTitle: "Featured projects",
      experienceTitle: "Professional experience",
      aboutTitle: "About Mauro and The Holy Code",
      ecosystemTitle: "Product ecosystem",
    },
    hero: {
      badge: "Building my own products",
      micro: "The Holy Code · Tech Lead · Indie Creator",
      title: "I'm Mauro — Tech Lead, Full Stack Engineer & Indie Creator.",
      subtitle: "I build minimalist, scalable digital products focused on business outcomes.",
      description:
        "With 10+ years of experience, I combine product strategy, architecture, and execution to turn ideas into real software. I have led teams, launched products, and built platforms with measurable impact.",
      chips: ["10+ years of experience", "10+ products delivered"],
      moonflow: "Kobro acquired by Moonflow",
      rablo: "Currently at CompuSoluciones (Rablo)",
      primaryCta: "View projects",
      secondaryCta: "Let's connect",
      quote: '"I build digital products with vision, architecture, and real execution."',
    },
    projects: {
      title: "Projects with context, execution, and outcomes",
      description:
        "Each case explains the problem, the product solution, and business impact. This reflects how I operate as a Tech Lead and product builder.",
      roleLabel: "Role",
      problemLabel: "Problem",
      solutionLabel: "Solution",
      impactLabel: "Impact",
      cta: "View project",
      items: [
        {
          title: "Qantus",
          subtitle: "Precision quoting platform",
          role: "Strategic definition, architecture design, and full-stack technical execution.",
          problem: "Sales teams struggled with slow calculations and high error rates.",
          solution: "A configurable quoting engine with comparative scenarios.",
          impact: "Average error margin of ±0.3%, 120+ branches connected.",
          status: "Live",
          link: "https://www.qantus.io/",
        },
        {
          title: "Wavi",
          subtitle: "Smart WhatsApp assistant for SMBs",
          role: "Strategic definition, architecture design, and full-stack technical execution.",
          problem: "High repetitive query volume and missed after-hours sales.",
          solution: "24/7 customer support automation with guided sales flows.",
          impact: "Up to 60% automated conversations and better conversion.",
          status: "Live",
          link: "https://wavi.holy-code.com/",
        },
        {
          title: "Malu",
          subtitle: "Condo management software for LATAM",
          role: "Strategic definition, architecture design, and full-stack technical execution.",
          problem: "Manual operations, arrears, and operational conflicts in condominiums.",
          solution: "A centralized platform for payments, access, booking, and communication.",
          impact: "Up to 80% operational time savings in admin tasks.",
          status: "Live",
          link: "https://malu.holy-code.com/",
        },
        {
          title: "MealMate+",
          subtitle: "Personalized lifestyle companion",
          role: "Strategic definition, architecture design, and full-stack technical execution.",
          problem: "Fragmented planning across nutrition, activity, and habits.",
          solution: "An all-in-one experience with tracking and smart recommendations.",
          impact: "500+ active users and a continuous product roadmap.",
          status: "Live",
          link: "https://mealmeatplus.holy-code.com/",
        },
        {
          title: "Rablo",
          subtitle: "AI-powered critical process digitization",
          role: "Product development at CompuSoluciones",
          problem: "Low traceability and slow internal approvals.",
          solution: "Centralized processes and automated operational decisions.",
          impact: "Higher traceability, compliance, and operational speed.",
          status: "Current",
          link: "https://www.rablo.io/",
        },
        {
          title: "Run Territory",
          subtitle: "New app in progress",
          role: "Strategic definition, architecture design, and full-stack technical execution.",
          problem: "Coming soon",
          solution: "Coming soon",
          impact: "Upcoming launch",
          status: "Coming soon",
          link: "/#contacto",
        },
      ],
    },
    experience: {
      more: "Learn more",
      items: [
        {
          date: "Nov 2025 - Present",
          title: "Senior Developer",
          company: "CompuSoluciones y Asociados",
          description:
            "I build high-impact digital solutions for enterprise operations. I currently contribute to Rablo, a platform that digitizes critical processes and approval workflows using AI.",
          link: "https://www.rablo.io/",
        },
        {
          date: "Jan 2023 - Nov 2025",
          title: "Tech Lead",
          company: "Kobro",
          description:
            "I led product engineering, architecture, and continuous delivery to scale the platform. During this stage, Kobro was acquired by Moonflow, validating its technical and business value.",
          link: "https://www.kobro.io",
        },
        {
          date: "Oct 2018 - Dec 2023",
          title: "Full Stack Developer",
          company: "CompuSoluciones y Asociados",
          description:
            "End-to-end delivery of web applications and backend components. I collaborated in evolving internal platforms and digital products focused on operational efficiency.",
          link: "https://www.compusoluciones.com/",
        },
      ],
    },
    about: {
      imageAlt: "Mauro Sánchez - Founder of The Holy Code",
      p1: "The Holy Code is my personal brand as a product builder: a space where I combine business vision, design, and code to launch elegant digital experiences.",
      p2: "I'm Mauro Sánchez, a Tech Lead and Full Stack Engineer with 10+ years of experience. I work at the intersection of architecture, product, and execution: from MVPs to production-ready platforms with real users.",
      p3: "My track record includes technical leadership at Kobro (later acquired by Moonflow), and today I build solutions in Rablo at CompuSoluciones y Asociados.",
      differentiatorTitle: "What sets me apart",
      points: [
        { title: "Product vision", description: "Not just code: decisions that create real value." },
        { title: "Technical leadership", description: "Architecture, standards, and continuous delivery focus." },
        { title: "Indie mindset", description: "Fast execution without sacrificing quality." },
        { title: "Measurable impact", description: "Products that improve processes and outcomes." },
      ],
      roleLine: "Tech Lead · Full Stack Engineer · Indie Creator",
    },
    services: {
      items: [
        {
          title: "B2B SaaS and platforms",
          description:
            "Products focused on solving real business operations with automation, traceability, and a strong UX.",
          features: ["Workflow automation", "API integrations", "Operational dashboards", "Scalable architecture"],
        },
        {
          title: "Applied AI products",
          description:
            "Using AI to improve processes, reduce operational friction, and accelerate decision-making in digital products.",
          features: ["Smart assistants", "Flow generation", "Classification and suggestions", "Context-aware automation"],
        },
        {
          title: "Product experiences",
          description:
            "Building clean interfaces focused on conversion, adoption, and clarity for end users.",
          features: ["Minimal design", "Value-centered flows", "Responsive-first", "Web performance"],
        },
        {
          title: "Indie lab",
          description:
            "I explore and launch my own ideas iteratively: validate fast, learn from the market, and evolve the product.",
          features: ["Internal MVPs", "Continuous iteration", "Public roadmap", "Creator-first approach"],
        },
      ],
      ctaTitle: "This space is not selling services",
      ctaDescription:
        "The Holy Code is my showcase to share products, learnings, and technical evolution. If you want to connect for partnerships, community, or product feedback, welcome.",
      ctaButton: "Let's connect",
    },
    contact: {
      title: "Let's connect",
      intro:
        "This portfolio is where I share my work, products, and evolution. If you want to collaborate, give feedback, or build a partnership, send me a message.",
      name: "Name",
      email: "Email",
      subject: "Subject",
      reason: "Reason for contact",
      reasonOptions: [
        { value: "", label: "Select..." },
        { value: "feedback", label: "Product feedback" },
        { value: "alianza", label: "Partnership or collaboration" },
        { value: "comunidad", label: "Community / content" },
        { value: "inversion", label: "Investment / partnership" },
        { value: "otro", label: "Other" },
      ],
      message: "Message",
      submit: "Send message",
      directContact: "Direct contact",
      responseTime: "Response time",
      next: "What happens next?",
      process: [
        { title: "I review your message", description: "I analyze context and goals" },
        { title: "I reply clearly", description: "I share the best next step" },
        { title: "Active connection", description: "Collaboration, feedback, or partnership" },
      ],
      nextUrl: "https://holy-code.com/en/gracias",
    },
    footer: {
      description:
        "Turning ideas into impactful digital products. Every line of code tells a story of innovation.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      emailLabel: "Email",
      followWork: "Want to follow my work?",
      connect: "Let's connect",
      bottomLine: "Turning ideas into digital products",
      status: "Building my own products",
      blogNav: "Blog articles",
    },
    floatingCta: {
      label: "Connect",
    },
    blog: {
      breadcrumbHome: "Home",
      breadcrumbBlog: "Blog",
      heroTitle: "Product and execution journal",
      heroDescription:
        "I share how I build digital products: strategy decisions, architecture, marketing, and real execution lessons.",
      featured: "Featured article",
      recent: "More posts",
      readArticle: "Read article",
      newsletterTitle: "Want to follow my building process?",
      newsletterDescription:
        "If you want more deep dives, metrics, or technical decisions, send me a note and I will turn it into the next article.",
      newsletterButton: "Send suggestion",
      by: "By",
      minRead: "min read",
      shareTitle: "Share this article",
      copy: "Copy",
      copied: "Copied!",
      feedbackTitle: "Did this article help you?",
      feedbackDescription:
        "This blog documents how I build real products. If you want me to go deeper on a project or technical decision, reach out.",
      feedbackButton: "Send feedback",
      linkedinButton: "Connect on LinkedIn",
      backBlog: "Back to blog",
    },
    thanks: {
      title: "Thanks for your message! | The Holy Code",
      description: "Your message was sent successfully. I will reply soon.",
      heading: "Message sent!",
      body: "Thanks for reaching out. Your message was received and I will review it personally. You can expect a response within 24-48 hours.",
      stepsTitle: "What happens next?",
      steps: [
        { title: "Message review", description: "I will analyze your context and specific needs" },
        { title: "Personalized reply", description: "I will send a detailed response by email" },
        { title: "Next step", description: "We define the best way to move forward" },
      ],
      urgent: "Is your message urgent? Email me at mauro@holy-code.com for same-day response.",
      backHome: "Back to home",
      readBlog: "Read blog",
    },
  },
};

export function getSiteCopy(locale: Locale) {
  return SITE_COPY[locale] ?? SITE_COPY[DEFAULT_LOCALE];
}
