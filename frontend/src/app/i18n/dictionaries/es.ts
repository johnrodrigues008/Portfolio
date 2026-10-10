import type { Dictionary } from "./en";

export const es: Dictionary = {
  nav: {
    brand: "John Rodrigues",
    home: "Inicio",
    about: "Sobre mí",
    work: "Trabajo",
    education: "Formación",
    experience: "Experiencia",
    contact: "Contacto",
    menuLabel: "Menú de navegación",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  translate: {
    select: "Seleccionar idioma",
    selected: "Idioma seleccionado: {language}. Cambiar idioma",
    available: "Idiomas disponibles",
  },
  hero: {
    greeting: "¡Hola! Soy John",
    imageAlt: "John Rodrigues, Desarrollador Full-Stack",
    downloadCv: "Download CV",
    viewExperience: "Ver experiencia",
    bio: [
      { text: "Soy " },
      { text: "Desarrollador Full Stack", highlight: true },
      {
        text: ". Durante los últimos cinco años, he trabajado de forma continua con tecnologías como ",
      },
      { text: "React", highlight: true },
      { text: ", " },
      { text: "Node.js", highlight: true },
      { text: " y " },
      { text: "PostgreSQL", highlight: true },
      {
        text: ", entre otras. Al mismo tiempo, profundizo mi expertise en Tecnología de la Información con estudios en ",
      },
      { text: "Arquitectura de Software, Ciencia de Datos y Ciberseguridad", highlight: true },
      { text: "." },
    ],
  },
  skills: {
    yearsOf: "5 años de",
    xp: "XP",
    caption: "con el ecosistema fullstack más popular",
  },
  footer: {
    home: "INICIO",
    socialLabel: "Social Medias",
    copyright: "John Rodrigues © 2026",
  },
  about: {
    title: "Sobre mí",
    introTitle: "Introducción",
    introLead:
      "Soy John. Desarrollador full-stack, solucionador de problemas y constructor de productos digitales.",
    intro1:
      "Soy desarrollador full stack con experiencia en desarrollo de sistemas y web, trabajando en todo el ciclo de vida del software: requisitos, prototipado, desarrollo, pruebas, despliegue y mantenimiento.",
    intro2:
      "Domino PHP, JavaScript (Node.js, TypeScript), Python, HTML, CSS (SCSS/SASS), y frameworks como AngularJS, Angular (v16–v19), ReactJS y Next.js.",
    intro3:
      "Perfil analítico y proactivo, enfocado en resolver problemas, aprendizaje continuo y crecimiento en arquitectura de software y liderazgo técnico.",
    intro4:
      "Lo que me motiva es resolver problemas reales con ingeniería clara, diseño cuidadoso e iteración continua.",
    quoteTitle: "Cita favorita",
    quote:
      '"No hay nada tan inútil como hacer con eficiencia aquello que no debería hacerse en absoluto."',
    quoteNote:
      "Esta cita refleja mi enfoque al construir software con propósito y significado.",
    experience: "Experiencia",
    experienceEntries: [
      {
        role: "Desarrollador Full Stack",
        company: "G4F",
        location: "Brasília, DF",
        period: "2024 – Actual · 1 año 10 meses",
        highlights: [
          "Desarrollo y mantenimiento de aplicaciones web para el Ministerio de Relaciones Exteriores.",
          "Mantenimiento y refactorización con PHP (Zend, Doctrine), Node.js (NestJS), SQL Server y PostgreSQL.",
          "Modernización de interfaces con AngularJS y ReactJS; Docker, Git, Bitbucket, Jira y ELK Stack.",
        ],
      },
      {
        role: "Desarrollador Full Stack",
        company: "Decisão Sistemas",
        location: "Goiânia, GO",
        period: "2023 – 2024 · 1 año",
        highlights: [
          "Desarrollo de software desde la concepción hasta la entrega, con foco en calidad y rendimiento.",
          "Servicios backend e interfaces frontend con AngularJS y Node.js.",
          "Diseño y prototipado de interfaces con Figma.",
        ],
      },
      {
        role: "Analista SEO/CRO",
        company: "Media.Monks",
        location: "Sorocaba, SP",
        period: "2022 – 2023 · 1 año 6 meses",
        highlights: [
          "Desarrollo frontend e integración de APIs para aplicaciones web.",
          "Mantenimiento de e-commerce en VTEX Legacy, VTEX IO, TrayCorp, WordPress, Deco CX y Salesforce.",
          "Estrategias de SEO y CRO; metodologías ágiles con Scrum y Kanban.",
        ],
      },
      {
        role: "Analista de Datos y Automatización",
        company: "Ministerio de Transportes",
        location: "Brasília, DF",
        period: "2021 – 2022 · 1 año",
        highlights: [
          "Gestión de bases PostgreSQL y MySQL; soluciones de Data Lake.",
          "Automatizaciones con Python, Power Automate y Power Apps.",
          "Dashboards con Power BI; desarrollo web con HTML, CSS, JavaScript y CMS Plone.",
        ],
      },
    ],
    skills: "Habilidades",
    skillsGroups: [
      { category: "Backend", items: "Node.js (NestJS), PHP (Zend, Doctrine), Python" },
      { category: "Frontend", items: "JavaScript, TypeScript, React.js, Next.js, AngularJS, Angular, HTML5, CSS3, SCSS, Tailwind" },
      { category: "Bases de Datos", items: "PostgreSQL, MySQL, SQL Server, MongoDB" },
      { category: "DevOps y Herramientas", items: "Docker, Git, Bitbucket, Jira, ELK Stack, Scrum, Kanban" },
      { category: "Accesibilidad y SEO", items: "WCAG 2.1, HTML semántico, Core Web Vitals, optimización SEO" },
    ],
    kudos: "Agradecimientos",
    kudosText:
      "Mi trayectoria ha sido moldeada por mentores y equipos excepcionales que ayudaron a refinar mis habilidades y mi pensamiento como ingeniero y diseñador.",
    thankYou: "Gracias.",
  },
  work: {
    title: "Trabajo",
    intro:
      "Una selección de proyectos desarrollados con atención al detalle y foco en problemas reales de producto.",
    scrollDown: "Ir hacia abajo",
    preview: "Preview",
    github: "GitHub",
    projects: {
      gupeAdmin: {
        title: "Gupe Admin",
        description:
          "Sistema administrativo enfocado en gestión, rendimiento y escalabilidad.",
      },
      devReceitas: {
        title: "Dev Receitas",
        description:
          "Chatbot con IA para generar recetas culinarias personalizadas.",
      },
      cardapioOnline: {
        title: "Menú Online",
        description:
          "Plataforma de menú digital con gestión de productos y categorías.",
      },
      portfolio: {
        title: "Portafolio Personal",
        description:
          "Portafolio moderno desarrollado con Next.js, Tailwind y enfoque en UX.",
      },
    },
  },
  education: {
    title: "Formación",
    intro:
      "Formación académica y certificaciones que sustentan mi desarrollo continuo en ingeniería de software.",
    degreesTitle: "Títulos",
    certificationsTitle: "Certificaciones",
    languagesTitle: "Idiomas",
    degrees: [
      {
        institution: "PUC Campinas",
        program: "Posgrado — Arquitectura de Software, Ciencia de Datos y Ciberseguridad",
        period: "En curso · Previsto Dic 2026",
      },
      {
        institution: "Universidad Estácio de Sá",
        program: "Licenciatura — Ciencias de la Computación",
        period: "Previsto Jun 2026",
      },
      {
        institution: "Anhanguera Educacional",
        program: "Posgrado — Ingeniería de Software",
        period: "Completado en 2023",
      },
      {
        institution: "Universidad Estácio de Sá",
        program: "Licenciatura — Procesos Gerenciales",
        period: "Completado en 2022",
      },
    ],
    certifications: [
      { name: "Todos en la Web: mejores prácticas de accesibilidad digital", provider: "nic.br", year: "2025" },
      { name: "Desarrollo de Aplicaciones Web Accesibles", provider: "Alura", year: "2023" },
      { name: "Desarrollador Full Stack", provider: "Gama Academy (360h)", year: "2021" },
      { name: "Desarrollador Frontend/Backend", provider: "SENAI (360h)", year: "2021" },
    ],
    languages: ["Portugués — Nativo", "Inglés — Avanzado", "Español — Intermedio"],
  },
  contact: {
    title: "Contacto",
    hello: "Hola.",
    intro:
      "¿Necesitas un producto bien estructurado que puedas poseer y mantener? Ponte en contacto.",
    email: "johnrodrigues008@gmail.com",
    phone: "+55 61 99180-3216",
    location: "Brasília, Brasil",
    internet: "En internet:",
  },
  resume: {
    pt: "/docs/Curriculum  John Rodrigues.pdf",
    en: "/docs/Curriculum  John Rodrigues.pdf",
  },
};
