const projects = [
  {
    title: "API REST con FastAPI",
    description:
      "Backend completo con autenticación JWT, base de datos PostgreSQL, migraciones con Alembic y documentación automática Swagger. Incluye sistema de roles y permisos.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "JWT"],
    category: "Backend",
    gradient: "from-violet-500/10 to-purple-500/10",
    border: "hover:border-violet-500/40",
    status: "Completado",
    github: "#",
    demo: "#",
  },
  {
    title: "Dashboard Analytics con Next.js",
    description:
      "Aplicación fullstack con Next.js 15, Server Components, autenticación OAuth2 con GitHub, Prisma ORM, y visualización de datos en tiempo real con gráficos interactivos.",
    tags: ["Next.js", "TypeScript", "Prisma", "OAuth2", "Tailwind"],
    category: "Fullstack",
    gradient: "from-purple-500/10 to-fuchsia-500/10",
    border: "hover:border-purple-500/40",
    status: "Completado",
    github: "#",
    demo: "#",
  },
  {
    title: "App Gestión con Angular + HonoJS",
    description:
      "SPA en Angular 17 standalone components con lazy loading, conectada a una API con HonoJS en Cloudflare Workers. CRUD completo y autenticación.",
    tags: ["Angular", "HonoJS", "Cloudflare", "TypeScript", "RxJS"],
    category: "Fullstack",
    gradient: "from-fuchsia-500/10 to-pink-500/10",
    border: "hover:border-fuchsia-500/40",
    status: "Completado",
    github: "#",
    demo: null,
  },
  {
    title: "E-commerce con Next.js",
    description:
      "Tienda online completa con carrito de compras, pasarela de pagos integrada, panel de administración y gestión de inventario en tiempo real.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Prisma", "Zustand"],
    category: "Fullstack",
    gradient: "from-violet-500/10 to-blue-500/10",
    border: "hover:border-violet-500/40",
    status: "En progreso",
    github: "#",
    demo: null,
  },
  {
    title: "Microservicio de Notificaciones",
    description:
      "Servicio independiente para envío de emails, SMS y notificaciones push. FastAPI, Celery para tareas asíncronas y Redis como broker.",
    tags: ["Python", "FastAPI", "Celery", "Redis", "Docker"],
    category: "Backend",
    gradient: "from-purple-500/10 to-violet-500/10",
    border: "hover:border-purple-500/40",
    status: "Completado",
    github: "#",
    demo: null,
  },
  {
    title: "Portfolio Personal",
    description:
      "Portfolio fullstack construido con Next.js 15 App Router, Tailwind CSS v4 y TypeScript. Diseño personalizado en dark mode con paleta violeta.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    category: "Frontend",
    gradient: "from-zinc-700/10 to-zinc-600/10",
    border: "hover:border-zinc-500/40",
    status: "Completado",
    github: "#",
    demo: "/",
  },
];

const categories = ["Todos", "Fullstack", "Backend", "Frontend"];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <section className="border-b border-zinc-800 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <span className="text-violet-400 font-mono text-sm">// proyectos</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mt-2 mb-4">
            Mis proyectos
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            Una selección de proyectos personales, académicos y profesionales
            que muestran mi capacidad técnica en distintos stacks y dominios.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <div className="border-b border-zinc-800 bg-zinc-950 sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-1 py-3 overflow-x-auto">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                  i === 0
                    ? "bg-violet-600 text-white"
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group relative border border-zinc-800 ${project.border} rounded-xl overflow-hidden bg-gradient-to-br ${project.gradient} hover:-translate-y-0.5 transition-all flex flex-col`}
            >
              <div className="h-44 bg-zinc-900/80 border-b border-zinc-800 flex flex-col items-center justify-center gap-2 relative">
                <svg
                  className="w-10 h-10 text-zinc-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-zinc-700 font-mono text-xs">
                  [ screenshot ]
                </span>
                <span
                  className={`absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full font-mono ${
                    project.status === "Completado"
                      ? "bg-violet-500/20 text-violet-400 border border-violet-500/30"
                      : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs font-mono text-zinc-600 mb-1">
                  {project.category}
                </span>
                <h3 className="text-white font-bold mb-2 group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-mono text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-3 border-t border-zinc-800">
                  <a
                    href={project.github}
                    className="flex items-center gap-1.5 text-zinc-500 hover:text-white text-xs font-medium transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    Código
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center gap-1.5 text-zinc-500 hover:text-violet-400 text-xs font-medium transition-colors"
                    >
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
      </section>
    </div>
  );
}
