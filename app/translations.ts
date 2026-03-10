export type Lang = "es" | "en";

export interface Translations {
  nav: { inicio: string; "sobre-mi": string; stack: string; proyectos: string; contacto: string };
  hero: { badge: string; subtitle1: string; subtitle2: string; subtitleDot: string; desc: string; ctaProjects: string; ctaContact: string };
  about: {
    comment: string; heading: string; quickInfoTitle: string;
    infoItems: { icon: string; label: string; value: string }[];
    downloadCV: string; storyTitle: string; story: string[];
    educationComment: string; educationTitle: string;
    education: { degree: string; school: string; period: string; desc: string }[];
  };
  stack: { comment: string; heading: string; techGroups: { category: string; techs: string[] }[]; learningComment: string; learningTitle: string; learning: string[] };
  projects: {
    comment: string; heading: string; subtitle: string;
    status: { completed: string; inProgress: string };
    codeLabel: string; demoLabel: string;
    items: { title: string; description: string; tags: string[]; category: string }[];
  };
  contact: { comment: string; heading: string; subtitle: string; emailCopied: string; copyAriaLabel: string; cards: { label: string; desc: string }[] };
  footer: string;
  lightboxClose: string;
}

export const t: Record<Lang, Translations> = {
  es: {
    nav: { inicio: "Inicio", "sobre-mi": "Sobre mí", stack: "Stack", proyectos: "Proyectos", contacto: "Contacto" },
    hero: {
      badge: "Disponible para trabajar",
      subtitle1: "Ingeniero Civil en",
      subtitle2: "Informática",
      subtitleDot: "· Fullstack Dev",
      desc: "Diseño y desarrollo aplicaciones web completas. Me enfoco en construir soluciones robustas, eficientes y escalables aplicando principios sólidos de ingeniería. Disfruto crear aplicaciones utilizando tecnologías modernas y me mantengo en constante aprendizaje para seguir integrando nuevas herramientas.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contáctame",
    },
    about: {
      comment: "// sobre mí",
      heading: "Conóceme un poco más",
      quickInfoTitle: "Info rápida",
      infoItems: [
        { icon: "📍", label: "Ubicación", value: "Temuco, Chile" },
        { icon: "🎓", label: "Universidad", value: "Universidad Católica de Temuco" },
        { icon: "💼", label: "Estado", value: "Open to work" },
        { icon: "🌐", label: "Idiomas", value: "Español (Nativo), Inglés (C1)" },
        { icon: "📧", label: "Email", value: "Joaquin.aguilar.ampuero@gmail.com" },
      ],
      downloadCV: "Descargar CV",
      storyTitle: "Mi historia",
      story: [
        "Soy Ingeniero Civil en Informática con una gran pasión por el desarrollo web y la arquitectura backend. Me dedico a construir aplicaciones robustas y escalables, asegurándome de que la base tecnológica sea sólida desde el primer momento.",
        "Me desenvuelvo muy bien construyendo la arquitectura interna de la aplicación y trabajando con tecnologías como Python y Node. Me gusta el código ordenado, las arquitecturas limpias y tengo gran facilidad para adoptar nuevas tecnologías a medida que la industria avanza.",
        "Fuera del entorno de desarrollo, practico escalada y calistenia. Estas actividades me ayudan a mantener el equilibrio y me exigen una disciplina y constancia que aplico de forma natural al momento de programar.",
      ],
      educationComment: "// educación",
      educationTitle: "Formación académica",
      education: [
        { degree: "Ingeniería Civil en Informática", school: "Universidad Católica de Temuco", period: "2021 - 2025", desc: "Formación sólida en ciencias de la computación, algoritmos, bases de datos y arquitectura de sistemas." },
      ],
    },
    stack: {
      comment: "// tecnologías",
      heading: "Mi stack tecnológico",
      techGroups: [
        { category: "Frontend", techs: ["Next.js", "Angular v21 Zoneless", "React / React Native", "TypeScript", "Tailwind CSS"] },
        { category: "Backend", techs: ["Python", "Node.js", "FastAPI", "Flask", "Hono"] },
        { category: "Base de datos", techs: ["PostgreSQL", "SQLite", "Drizzle ORM", "pgvector"] },
        { category: "DevOps & Tools", techs: ["Docker / Docker Compose", "Git", "pnpm", "EAS Build", "Ollama"] },
      ],
      learningComment: "// siempre aprendiendo",
      learningTitle: "En el radar ahora mismo",
      learning: ["Angular", "Ionic", "VPS / Self-hosting", "Machine Learning", "Data Science", "WebSockets"],
    },
    projects: {
      comment: "// proyectos",
      heading: "Proyectos destacados",
      subtitle: "Una selección de proyectos personales, académicos y profesionales que muestran mi capacidad técnica en distintos stacks y dominios.",
      status: { completed: "Completado", inProgress: "En progreso" },
      codeLabel: "Código",
      demoLabel: "Demo",
      items: [
        { title: "Plataforma Bioinformática de Análisis Estructural", description: "Sistema automatizado para la extracción, curación y filtrado de proteínas para el descubrimiento de analgésicos. Diseñado con Clean Architecture para aislar la lógica de dominio matemático de la infraestructura, expuesto mediante una API REST.", tags: ["Python", "Flask", "SQLite"], category: "Backend" },
        { title: "DocuMind: Sistema RAG Local", description: "Plataforma web para consultar documentos PDF mediante lenguaje natural, procesando todo localmente para garantizar la privacidad. Integra un LLM local (Ollama) con base de datos vectorial (pgvector) y SSE para respuestas en tiempo real sin alucinaciones.", tags: ["Next.js", "FastAPI", "PostgreSQL", "pgvector", "Ollama"], category: "Fullstack" },
        { title: "MicroMeasure", description: "Aplicación móvil para investigadores que permite calibrar y medir estructuras celulares en fotografías microscópicas directamente desde el teléfono. Desacopla la matriz de transformación visual y la capa de dibujo vectorial para coordenadas exactas bajo zoom intensivo.", tags: ["React Native", "Expo", "EAS Build"], category: "Mobile" },
        { title: "Task Manager", description: "Herramienta de productividad con soporte para proyectos, rutinas diarias y reordenamiento de tareas mediante drag & drop. Angular 21 en modo Zoneless para control de estado reactivo estricto, conectado a una API de alto rendimiento con Hono y Drizzle ORM.", tags: ["Angular 21", "Hono", "Node.js", "Drizzle ORM"], category: "Fullstack" },
      ],
    },
    contact: {
      comment: "// contacto",
      heading: "Hablemos",
      subtitle: "¿Tienes un proyecto en mente o buscas sumar un desarrollador a tu equipo? Escríbeme.",
      emailCopied: "✓ Correo copiado al portapapeles",
      copyAriaLabel: "Copiar correo al portapapeles",
      cards: [
        { label: "Email", desc: "Contacto Directo." },
        { label: "LinkedIn", desc: "Mi historial laboral, formación y conexiones profesionales." },
        { label: "GitHub", desc: "Explora el código fuente de mis proyectos y arquitecturas." },
        { label: "Disponible ahora", desc: "Abierto a posiciones full-time como desarrollador Backend, Full-Stack o enfocado en Python." },
      ],
    },
    footer: "Desarrollado con Next.js y Tailwind CSS",
    lightboxClose: "Cerrar (Esc)",
  },
  en: {
    nav: { inicio: "Home", "sobre-mi": "About", stack: "Stack", proyectos: "Projects", contacto: "Contact" },
    hero: {
      badge: "Available for work",
      subtitle1: "Computer Science",
      subtitle2: "Engineer",
      subtitleDot: "· Fullstack Dev",
      desc: "I design and build complete web applications. I focus on creating robust, efficient, and scalable solutions by applying solid engineering principles. I enjoy developing apps with modern technologies and continuously learn to integrate new tools.",
      ctaProjects: "View projects",
      ctaContact: "Contact me",
    },
    about: {
      comment: "// about me",
      heading: "Get to know me",
      quickInfoTitle: "Quick info",
      infoItems: [
        { icon: "📍", label: "Location", value: "Temuco, Chile" },
        { icon: "🎓", label: "University", value: "Universidad Católica de Temuco" },
        { icon: "💼", label: "Status", value: "Open to work" },
        { icon: "🌐", label: "Languages", value: "Spanish (Native), English (C1)" },
        { icon: "📧", label: "Email", value: "Joaquin.aguilar.ampuero@gmail.com" },
      ],
      downloadCV: "Download CV",
      storyTitle: "My story",
      story: [
        "I'm a Computer Science Engineer with a strong passion for web development and backend architecture. I focus on building robust and scalable applications, making sure the technological foundation is solid from day one.",
        "I excel at designing application internals and working with technologies like Python and Node.js. I value clean code, clean architectures, and have a natural ability to adopt new technologies as the industry evolves.",
        "Outside of development, I practice rock climbing and calisthenics. These activities help me maintain balance and demand the discipline and consistency I naturally apply when writing code.",
      ],
      educationComment: "// education",
      educationTitle: "Academic background",
      education: [
        { degree: "Computer Science Engineering", school: "Universidad Católica de Temuco", period: "2021 - 2025", desc: "Solid background in computer science, algorithms, databases, and systems architecture." },
      ],
    },
    stack: {
      comment: "// technologies",
      heading: "My tech stack",
      techGroups: [
        { category: "Frontend", techs: ["Next.js", "Angular v21 Zoneless", "React / React Native", "TypeScript", "Tailwind CSS"] },
        { category: "Backend", techs: ["Python", "Node.js", "FastAPI", "Flask", "Hono"] },
        { category: "Database", techs: ["PostgreSQL", "SQLite", "Drizzle ORM", "pgvector"] },
        { category: "DevOps & Tools", techs: ["Docker / Docker Compose", "Git", "pnpm", "EAS Build", "Ollama"] },
      ],
      learningComment: "// always learning",
      learningTitle: "On my radar right now",
      learning: ["Angular", "Ionic", "VPS / Self-hosting", "Machine Learning", "Data Science", "WebSockets"],
    },
    projects: {
      comment: "// projects",
      heading: "Featured projects",
      subtitle: "A selection of personal, academic, and professional projects showcasing my technical skills across different stacks and domains.",
      status: { completed: "Completed", inProgress: "In progress" },
      codeLabel: "Code",
      demoLabel: "Demo",
      items: [
        { title: "Bioinformatic Structural Analysis Platform", description: "Automated system for the extraction, curation, and filtering of proteins for analgesic drug discovery. Designed with Clean Architecture to isolate the mathematical domain logic from infrastructure, exposed through a REST API.", tags: ["Python", "Flask", "SQLite"], category: "Backend" },
        { title: "DocuMind: Local RAG System", description: "Web platform for querying PDF documents through natural language, processing everything locally to ensure privacy. Integrates a local LLM (Ollama) with a vector database (pgvector) and SSE for real-time hallucination-free responses.", tags: ["Next.js", "FastAPI", "PostgreSQL", "pgvector", "Ollama"], category: "Fullstack" },
        { title: "MicroMeasure", description: "Mobile app for researchers to calibrate and measure cellular structures in microscopic photos directly from their phone. Decouples the visual transformation matrix and vector drawing layer for precise coordinates under intensive zoom.", tags: ["React Native", "Expo", "EAS Build"], category: "Mobile" },
        { title: "Task Manager", description: "Productivity tool with support for projects, daily routines, and task reordering via drag & drop. Angular 21 in Zoneless mode for strict reactive state control, connected to a high-performance API with Hono and Drizzle ORM.", tags: ["Angular 21", "Hono", "Node.js", "Drizzle ORM"], category: "Fullstack" },
      ],
    },
    contact: {
      comment: "// contact",
      heading: "Let's talk",
      subtitle: "Have a project in mind or looking to add a developer to your team? Reach out.",
      emailCopied: "✓ Email copied to clipboard",
      copyAriaLabel: "Copy email to clipboard",
      cards: [
        { label: "Email", desc: "Direct contact." },
        { label: "LinkedIn", desc: "My work history, education, and professional connections." },
        { label: "GitHub", desc: "Explore the source code of my projects and architectures." },
        { label: "Available now", desc: "Open to full-time positions as a Backend, Full-Stack, or Python-focused developer." },
      ],
    },
    footer: "Built with Next.js and Tailwind CSS",
    lightboxClose: "Close (Esc)",
  },
};
