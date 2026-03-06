const techGroups = [
  {
    category: "Frontend",
    techs: ["Next.js", "Angular", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    techs: ["Python", "FastAPI", "HonoJS", "Node.js", "REST / GraphQL"],
  },
  {
    category: "Base de datos",
    techs: ["PostgreSQL", "MongoDB", "Prisma", "SQLAlchemy", "Redis"],
  },
  {
    category: "DevOps & Tools",
    techs: ["Docker", "Git", "CI/CD", "Vercel", "Linux"],
  },
];

const learning = ["Rust", "tRPC", "Kubernetes", "Drizzle ORM", "LangChain", "WebSockets"];

const projects = [
  {
    title: "API REST con FastAPI",
    description: "Backend completo con autenticación JWT, base de datos PostgreSQL, migraciones con Alembic y documentación automática Swagger. Incluye sistema de roles y permisos.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "JWT"],
    category: "Backend",
    gradient: "from-violet-500/10 to-purple-500/10",
    border: "hover:border-violet-500/40",
    status: "Completado",
    github: "#",
    demo: null as string | null,
  },
  {
    title: "Dashboard Analytics con Next.js",
    description: "Aplicación fullstack con Next.js 15, Server Components, autenticación OAuth2 con GitHub, Prisma ORM, y visualización de datos en tiempo real con gráficos interactivos.",
    tags: ["Next.js", "TypeScript", "Prisma", "OAuth2", "Tailwind"],
    category: "Fullstack",
    gradient: "from-purple-500/10 to-fuchsia-500/10",
    border: "hover:border-purple-500/40",
    status: "Completado",
    github: "#",
    demo: "#" as string | null,
  },
  {
    title: "App Gestión con Angular + HonoJS",
    description: "SPA en Angular 17 standalone components con lazy loading, conectada a una API con HonoJS en Cloudflare Workers. CRUD completo y autenticación.",
    tags: ["Angular", "HonoJS", "Cloudflare", "TypeScript", "RxJS"],
    category: "Fullstack",
    gradient: "from-fuchsia-500/10 to-pink-500/10",
    border: "hover:border-fuchsia-500/40",
    status: "Completado",
    github: "#",
    demo: null as string | null,
  },
  {
    title: "E-commerce con Next.js",
    description: "Tienda online completa con carrito de compras, pasarela de pagos integrada, panel de administración y gestión de inventario en tiempo real.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Prisma", "Zustand"],
    category: "Fullstack",
    gradient: "from-violet-500/10 to-blue-500/10",
    border: "hover:border-violet-500/40",
    status: "En progreso",
    github: "#",
    demo: null as string | null,
  },
  {
    title: "Microservicio de Notificaciones",
    description: "Servicio independiente para envío de emails, SMS y notificaciones push. FastAPI, Celery para tareas asíncronas y Redis como broker.",
    tags: ["Python", "FastAPI", "Celery", "Redis", "Docker"],
    category: "Backend",
    gradient: "from-purple-500/10 to-violet-500/10",
    border: "hover:border-purple-500/40",
    status: "Completado",
    github: "#",
    demo: null as string | null,
  },
  {
    title: "Portfolio Personal",
    description: "Portfolio fullstack construido con Next.js 15 App Router, Tailwind CSS v4 y TypeScript. Diseño personalizado en dark mode con paleta violeta.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    category: "Frontend",
    gradient: "from-zinc-700/10 to-zinc-600/10",
    border: "hover:border-zinc-500/40",
    status: "Completado",
    github: "#",
    demo: "/" as string | null,
  },
];

const values = [
  { title: "Código limpio", desc: "Escribo código legible, mantenible y bien documentado.", emoji: "✨" },
  { title: "Aprendizaje continuo", desc: "La tecnología avanza rápido; siempre estoy aprendiendo algo nuevo.", emoji: "📚" },
  { title: "Orientado a resultados", desc: "Me enfoco en entregar valor real, no solo en hacer que funcione.", emoji: "🎯" },
  { title: "Trabajo en equipo", desc: "Comunicativo, colaborativo y abierto al feedback constructivo.", emoji: "🤝" },
];

const education = [
  {
    degree: "Ingeniería Civil en Informática",
    school: "Universidad X",
    period: "2019 - 2024",
    desc: "Carrera de cinco años con énfasis en desarrollo de software, inteligencia artificial, bases de datos y sistemas distribuidos.",
  },
  {
    degree: "Cursos y certificaciones relevantes",
    school: "Plataformas online (Coursera, Platzi, Udemy...)",
    period: "2021 - presente",
    desc: "Next.js Avanzado, FastAPI Professional, Angular Architecture, Docker & Kubernetes, etc.",
  },
];

const orbitalDots = [
  { size: "w-2 h-2", color: "bg-violet-400", top: "5%", left: "15%" },
  { size: "w-1.5 h-1.5", color: "bg-fuchsia-400", top: "20%", right: "8%" },
  { size: "w-1 h-1", color: "bg-purple-400", bottom: "25%", left: "5%" },
  { size: "w-2 h-2", color: "bg-violet-300", bottom: "12%", right: "12%" },
  { size: "w-1.5 h-1.5", color: "bg-fuchsia-300", top: "50%", left: "-2%" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section id="inicio" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* Background: gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top-right large orb */}
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-violet-600/20 blur-[120px]" />
          {/* Bottom-left orb */}
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-700/15 blur-[100px]" />
          {/* Center subtle glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-violet-500/8 blur-3xl" />
          {/* Radial dots pattern */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #8b5cf6 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
          {/* Diagonal lines overlay */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #8b5cf6 0px, #8b5cf6 1px, transparent 0px, transparent 50%)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          {/* --- Text --- */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block text-violet-400 font-mono text-sm tracking-widest mb-5 border border-violet-500/30 bg-violet-500/5 px-3 py-1 rounded-full">
              Disponible para trabajar
            </span>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-none mb-4">
              Joaquín Aguilar
            </h1>

            <h2 className="text-xl lg:text-3xl font-semibold text-zinc-400 mb-6">
              Ingeniero Civil en{" "}
              <span className="text-violet-400">Informática</span>
              <span className="text-zinc-600"> &middot; Fullstack Dev</span>
            </h2>

            <p className="text-zinc-400 text-base lg:text-lg leading-relaxed max-w-xl mb-10">
              Diseño y desarrollo aplicaciones web completas. Me enfoco en
              construir soluciones robustas, eficientes y escalables aplicando
              principios sólidos de ingeniería. Disfruto crear aplicaciones
              utilizando tecnologías modernas y me mantengo en constante
              aprendizaje para seguir integrando nuevas herramientas.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#proyectos"
                className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-lg transition-all hover:scale-105 text-sm shadow-lg shadow-violet-900/40"
              >
                Ver proyectos &rarr;
              </a>
              <a
                href="#contacto"
                className="px-6 py-3 border border-zinc-700 hover:border-violet-500 text-zinc-300 hover:text-white font-semibold rounded-lg transition-all hover:scale-105 text-sm"
              >
                Contáctame
              </a>
              <a
                href="#"
                className="px-6 py-3 border border-zinc-800 hover:border-zinc-600 text-zinc-500 hover:text-zinc-300 font-semibold rounded-lg transition-all text-sm"
              >
                Descargar CV &darr;
              </a>
            </div>
          </div>

          {/* --- Avatar --- */}
          <div className="flex-shrink-0 relative">
            {/* Orbital glow dots */}
            {orbitalDots.map((dot, i) => (
              <div
                key={i}
                className={`absolute z-20 rounded-full ${dot.size} ${dot.color} opacity-70 blur-[1px] hidden lg:block`}
                style={{
                  top: dot.top,
                  left: (dot as { left?: string }).left,
                  right: (dot as { right?: string }).right,
                  bottom: dot.bottom,
                }}
              />
            ))}

            {/* Outer spinning ring */}
            <div className="absolute -inset-4 rounded-full border border-dashed border-violet-500/20 animate-spin [animation-duration:20s]" />

            {/* Glow rings */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-violet-600/30 to-fuchsia-600/20 blur-xl" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-600/20 blur-md" />

            {/* Avatar circle */}
            <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-violet-500/40 shadow-2xl shadow-violet-900/50">
              {/* Gradient background inside */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-violet-950/40 to-zinc-900" />
              {/* SVG hex pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill='%238b5cf6' fill-opacity='1'%3E%3Cpolygon fill-rule='evenodd' points='13.99 9.25 0 16.54 0 30.43 13.99 37.86 28 30.43 28 16.54'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: "28px 48px",
                }}
              />
              {/* Person icon */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 z-10">
                <svg
                  className="w-20 h-20 text-violet-400/50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
                <span className="text-zinc-500 text-xs font-mono">
                  tu-foto.jpg
                </span>
              </div>
            </div>

            {/* Status dot */}
            <div className="absolute bottom-3 right-3 z-30 flex items-center gap-1.5 px-2.5 py-1 bg-zinc-900/90 border border-zinc-700 rounded-full backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-zinc-400 text-xs font-mono">open</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-700 animate-bounce">
          <span className="text-xs font-mono">scroll</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* ─── SOBRE MÍ ─────────────────────────────────────── */}
      <section id="sobre-mi" className="border-t border-zinc-800/50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-violet-400 font-mono text-sm">// sobre mí</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">Conóceme un poco más</h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Sidebar */}
            <div className="flex-shrink-0 w-full lg:w-72 flex flex-col gap-5">
              <div className="w-full aspect-square rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden flex flex-col items-center justify-center gap-3 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent" />
                <svg className="w-20 h-20 text-zinc-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
                <span className="text-zinc-600 text-xs font-mono z-10">foto-perfil.jpg</span>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-3">
                <h3 className="text-xs font-mono font-semibold text-violet-400 uppercase tracking-wider mb-3">Info rápida</h3>
                {[
                  { icon: "📍", label: "Ubicación", value: "Chile" },
                  { icon: "🎓", label: "Universidad", value: "Universidad X" },
                  { icon: "💼", label: "Estado", value: "Open to work" },
                  { icon: "🌐", label: "Idiomas", value: "Español (nativo), Inglés (B2)" },
                  { icon: "📧", label: "Email", value: "correo@ejemplo.com" },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="text-base mt-0.5">{icon}</span>
                    <div>
                      <p className="text-zinc-600 text-xs">{label}</p>
                      <p className="text-zinc-300 text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center px-4 py-2.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-lg text-zinc-400 hover:text-white transition-all text-sm font-medium">
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center px-4 py-2.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-lg text-zinc-400 hover:text-white transition-all text-sm font-medium">
                  LinkedIn
                </a>
              </div>
              <a href="#" className="flex items-center justify-center gap-2 px-4 py-3 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-lg transition-all text-sm">
                Descargar CV &darr;
              </a>
            </div>
            {/* Main */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-5">Mi historia</h3>
              <div className="space-y-4 text-zinc-400 leading-relaxed mb-10">
                <p>Soy Ingeniero Civil en Informática, titulado de [Universidad X], con una profunda pasión por la tecnología y el desarrollo de software. Desde temprana edad me interesé por entender cómo funcionan los sistemas digitales, lo que me llevó naturalmente a elegir esta carrera.</p>
                <p>Durante mi formación académica adquirí una base sólida en ciencias de la computación: algoritmos, estructuras de datos, bases de datos, redes y sistemas operativos. Esto me da una ventaja para entender los sistemas a fondo, no sólo a nivel de código sino también de infraestructura.</p>
                <p>En el ámbito del desarrollo web, me especialicé en{" "}<span className="text-white font-medium">fullstack</span>: trabajo con{" "}<span className="text-violet-400">Next.js y Angular</span> en el frontend, y con{" "}<span className="text-violet-400">FastAPI, HonoJS y Node.js</span> en el backend.</p>
                <p>Fuera del código, disfruto [pasatiempos/intereses personales], lo que me ayuda a mantener un equilibrio entre la vida profesional y personal.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {values.map(({ title, desc, emoji }) => (
                  <div key={title} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-colors">
                    <span className="text-2xl mb-2 block">{emoji}</span>
                    <h4 className="text-white font-semibold text-sm mb-1">{title}</h4>
                    <p className="text-zinc-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
              <div>
                <span className="text-violet-400 font-mono text-sm">// educación</span>
                <h4 className="text-lg font-bold text-white mt-1 mb-5">Formación académica</h4>
                <div className="space-y-4">
                  {education.map((item) => (
                    <div key={item.degree} className="flex flex-col sm:flex-row gap-4 p-5 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors">
                      <div className="flex-shrink-0 w-2 bg-violet-500 rounded-full hidden sm:block" />
                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <h5 className="text-white font-bold">{item.degree}</h5>
                          <span className="text-violet-400 text-xs font-mono bg-violet-500/10 border border-violet-500/20 px-2 py-1 rounded">{item.period}</span>
                        </div>
                        <p className="text-zinc-500 text-sm mb-2">{item.school}</p>
                        <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STACK TECNOLÓGICO ────────────────────────────── */}
      <section id="stack" className="border-t border-zinc-800/50 bg-zinc-900/30 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center">
            <span className="text-violet-400 font-mono text-sm">// tecnologías</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">Mi stack tecnológico</h2>
            <p className="text-zinc-500 text-sm mt-2">Herramientas con las que trabajo día a día</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {techGroups.map((group) => (
              <div key={group.category} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors">
                <h3 className="text-xs font-semibold text-violet-400 font-mono uppercase tracking-wider mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.techs.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 text-xs font-mono text-zinc-300 bg-zinc-800 border border-zinc-700 rounded-md hover:border-violet-500/50 hover:text-violet-400 transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-zinc-800 pt-10">
            <span className="text-violet-400 font-mono text-sm">// siempre aprendiendo</span>
            <h3 className="text-lg font-bold text-white mt-1 mb-5">En el radar ahora mismo</h3>
            <div className="flex flex-wrap gap-3">
              {learning.map((tech) => (
                <span key={tech} className="inline-flex items-center gap-2 px-4 py-2 border border-dashed border-zinc-700 text-zinc-500 hover:text-zinc-300 hover:border-zinc-500 rounded-full text-sm font-mono transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 inline-block" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROYECTOS ────────────────────────────────────── */}
      <section id="proyectos" className="border-t border-zinc-800/50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-violet-400 font-mono text-sm">// proyectos</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">Proyectos destacados</h2>
            <p className="text-zinc-500 text-sm mt-2 max-w-xl">Una selección de proyectos personales, académicos y profesionales que muestran mi capacidad técnica en distintos stacks y dominios.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.title} className={`group relative border border-zinc-800 ${project.border} rounded-xl overflow-hidden bg-gradient-to-br ${project.gradient} hover:-translate-y-0.5 transition-all flex flex-col`}>
                <div className="h-40 bg-zinc-900/80 border-b border-zinc-800 flex flex-col items-center justify-center gap-2 relative">
                  <svg className="w-10 h-10 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-zinc-700 font-mono text-xs">[ screenshot ]</span>
                  <span className={`absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full font-mono ${
                    project.status === "Completado"
                      ? "bg-violet-500/20 text-violet-400 border border-violet-500/30"
                      : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-xs font-mono text-zinc-600 mb-1">{project.category}</span>
                  <h3 className="text-white font-bold mb-2 group-hover:text-violet-400 transition-colors">{project.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs font-mono text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded">{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-3 border-t border-zinc-800">
                    <a href={project.github} className="flex items-center gap-1.5 text-zinc-500 hover:text-white text-xs font-medium transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      Código
                    </a>
                    {project.demo && (
                      <a href={project.demo} className="flex items-center gap-1.5 text-zinc-500 hover:text-violet-400 text-xs font-medium transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACTO ─────────────────────────────────────── */}
      <section id="contacto" className="border-t border-zinc-800/50 bg-zinc-900/20 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-violet-400 font-mono text-sm">// contacto</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">Hablemos</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mt-2 leading-relaxed">Estoy disponible para proyectos freelance, posiciones fulltime y colaboraciones. No dudes en escribirme.</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Channels */}
            <div className="flex-shrink-0 w-full lg:w-80 space-y-4">
              <h3 className="text-white font-bold text-lg mb-5">Canales de contacto</h3>
              {[
                {
                  label: "Email", value: "correo@ejemplo.com", href: "mailto:correo@ejemplo.com",
                  desc: "La forma más directa. Respondo en menos de 24h.",
                  bgIcon: "bg-violet-500/10", textIcon: "text-violet-400",
                  border: "border-violet-500/20 hover:border-violet-500/50",
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                },
                {
                  label: "LinkedIn", value: "linkedin.com/in/tuperfil", href: "https://linkedin.com",
                  desc: "Conéctate conmigo para networking profesional.",
                  bgIcon: "bg-purple-500/10", textIcon: "text-purple-400",
                  border: "border-purple-500/20 hover:border-purple-500/50",
                  icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
                },
                {
                  label: "GitHub", value: "github.com/tuusuario", href: "https://github.com",
                  desc: "Mira mi código, forks y contribuciones open source.",
                  bgIcon: "bg-zinc-700/30", textIcon: "text-zinc-300",
                  border: "border-zinc-700 hover:border-zinc-500",
                  icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>,
                },
              ].map((opt) => (
                <a key={opt.label} href={opt.href}
                  target={opt.href.startsWith("http") ? "_blank" : undefined}
                  rel={opt.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-start gap-4 p-4 bg-zinc-900 border ${opt.border} rounded-xl transition-all group`}>
                  <div className={`p-2.5 rounded-lg ${opt.bgIcon} ${opt.textIcon} flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}>{opt.icon}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm">{opt.label}</p>
                    <p className={`text-xs font-mono truncate ${opt.textIcon} mb-1`}>{opt.value}</p>
                    <p className="text-zinc-600 text-xs">{opt.desc}</p>
                  </div>
                </a>
              ))}
              <div className="mt-2 p-4 bg-zinc-900 border border-zinc-800 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                  <span className="text-white text-sm font-semibold">Disponible ahora</span>
                </div>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Buscando{" "}<span className="text-zinc-300">proyectos freelance</span> y{" "}<span className="text-zinc-300">oportunidades fulltime</span>{" "}en desarrollo fullstack.
                </p>
              </div>
            </div>
            {/* Form */}
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg mb-5">Envíame un mensaje</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-zinc-400 text-sm font-medium">Nombre <span className="text-violet-500">*</span></label>
                    <input id="name" type="text" placeholder="Tu nombre" className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus:border-violet-500 rounded-lg text-white text-sm placeholder-zinc-600 outline-none transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-zinc-400 text-sm font-medium">Email <span className="text-violet-500">*</span></label>
                    <input id="email" type="email" placeholder="tu@email.com" className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus:border-violet-500 rounded-lg text-white text-sm placeholder-zinc-600 outline-none transition-colors" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-zinc-400 text-sm font-medium">Asunto <span className="text-violet-500">*</span></label>
                  <input id="subject" type="text" placeholder="¿En qué puedo ayudarte?" className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus:border-violet-500 rounded-lg text-white text-sm placeholder-zinc-600 outline-none transition-colors" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="type" className="text-zinc-400 text-sm font-medium">Tipo de consulta</label>
                  <select id="type" className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus:border-violet-500 rounded-lg text-zinc-300 text-sm outline-none transition-colors">
                    <option value="">Selecciona una opción</option>
                    <option value="freelance">Proyecto freelance</option>
                    <option value="fulltime">Oportunidad laboral</option>
                    <option value="collaboration">Colaboración</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-zinc-400 text-sm font-medium">Mensaje <span className="text-violet-500">*</span></label>
                  <textarea id="message" rows={6} placeholder="Cuéntame sobre tu proyecto, idea u oportunidad..." className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus:border-violet-500 rounded-lg text-white text-sm placeholder-zinc-600 outline-none transition-colors resize-none" />
                </div>
                <p className="text-zinc-600 text-xs">* Este formulario es visual por ahora. Implementa{" "}<span className="text-zinc-400 font-mono">Resend / Formspree</span>{" "}para hacerlo funcional.</p>
                <button type="submit" className="w-full sm:w-auto px-8 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-lg transition-all hover:scale-105 text-sm shadow-lg shadow-violet-900/40">
                  Enviar mensaje &rarr;
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
