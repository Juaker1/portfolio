import Link from "next/link";

const featuredProjects = [
  {
    title: "API REST con FastAPI",
    description:
      "Backend completo con autenticación JWT, base de datos PostgreSQL, migraciones con Alembic y documentación automática Swagger.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    gradient: "from-violet-500/10 to-purple-500/10",
    border: "hover:border-violet-500/50",
  },
  {
    title: "Dashboard con Next.js",
    description:
      "Aplicación fullstack con Next.js 15, Server Components, autenticación OAuth2, Prisma ORM y visualización de datos en tiempo real.",
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
    gradient: "from-purple-500/10 to-fuchsia-500/10",
    border: "hover:border-purple-500/50",
  },
  {
    title: "App Angular + HonoJS",
    description:
      "SPA en Angular 17 standalone conectada a una API ultraligera con HonoJS desplegada en Cloudflare Workers.",
    tags: ["Angular", "HonoJS", "Cloudflare", "TypeScript"],
    gradient: "from-fuchsia-500/10 to-pink-500/10",
    border: "hover:border-fuchsia-500/50",
  },
];

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

const floatingBadges = [
  { label: "Next.js", top: "8%", left: "-10%", delay: "0s" },
  { label: "Python", top: "15%", right: "-8%", delay: "0.5s" },
  { label: "FastAPI", bottom: "18%", left: "-12%", delay: "1s" },
  { label: "Angular", bottom: "10%", right: "-6%", delay: "1.5s" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
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
              Tu Nombre
            </h1>

            <h2 className="text-xl lg:text-3xl font-semibold text-zinc-400 mb-6">
              Ingeniero Civil en{" "}
              <span className="text-violet-400">Informática</span>
              <span className="text-zinc-600"> &middot; Fullstack Dev</span>
            </h2>

            <p className="text-zinc-400 text-base lg:text-lg leading-relaxed max-w-xl mb-10">
              Diseño y construyo aplicaciones web modernas de punta a punta.
              Trabajo con{" "}
              <span className="text-white font-medium">Next.js</span>,{" "}
              <span className="text-white font-medium">Angular</span>,{" "}
              <span className="text-white font-medium">FastAPI</span> y{" "}
              <span className="text-white font-medium">HonoJS</span> para crear
              productos digitales rápidos, escalables y bien diseñados.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/projects"
                className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-lg transition-all hover:scale-105 text-sm shadow-lg shadow-violet-900/40"
              >
                Ver proyectos &rarr;
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-zinc-700 hover:border-violet-500 text-zinc-300 hover:text-white font-semibold rounded-lg transition-all hover:scale-105 text-sm"
              >
                Contáctame
              </Link>
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
            {/* Floating tech badges */}
            {floatingBadges.map((badge) => (
              <div
                key={badge.label}
                className="absolute z-20 px-2.5 py-1 text-xs font-mono font-bold text-violet-300 bg-zinc-900/90 border border-violet-500/30 rounded-full backdrop-blur-sm shadow-lg shadow-violet-900/20 hidden lg:block"
                style={{
                  top: badge.top,
                  left: (badge as { left?: string }).left,
                  right: (badge as { right?: string }).right,
                  bottom: badge.bottom,
                  animationDelay: badge.delay,
                }}
              >
                {badge.label}
              </div>
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

      {/* ─── STATS ────────────────────────────────────────── */}
      <section className="border-y border-zinc-800 bg-zinc-900/40">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { value: "+10", label: "Proyectos completados" },
            { value: "+8", label: "Tecnologías dominadas" },
            { value: "2+", label: "Años de experiencia" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="text-4xl lg:text-5xl font-extrabold text-violet-400">
                {stat.value}
              </span>
              <span className="text-zinc-500 text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ABOUT SNIPPET ────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-shrink-0 w-full max-w-xs lg:max-w-sm">
            <div className="aspect-square rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden flex flex-col items-center justify-center gap-3 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent" />
              <svg
                className="w-16 h-16 text-zinc-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-zinc-600 font-mono text-xs z-10">
                [ workspace / foto ]
              </span>
            </div>
          </div>

          <div className="flex-1">
            <span className="text-violet-400 font-mono text-sm">
              // sobre mi
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2 mb-6 leading-tight">
              Construyendo el futuro,
              <br />
              <span className="text-zinc-400">
                una línea de código a la vez
              </span>
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Soy Ingeniero Civil en Informática con sólida formación en
              desarrollo fullstack. Me apasiona crear productos digitales de
              calidad que combinen una excelente experiencia de usuario con
              arquitecturas backend robustas y escalables.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Trabajo tanto en el ecosistema JavaScript/TypeScript (Next.js,
              Angular, HonoJS) como en Python (FastAPI, SQLAlchemy). Siempre
              enfocado en código limpio, buenas prácticas y entrega de valor
              real.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "Universidad X",
                "Chile",
                "Open to work",
                "Ingles B2",
              ].map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1.5 text-sm text-zinc-300 bg-zinc-900 border border-zinc-700 rounded-full"
                >
                  {chip}
                </span>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-semibold group transition-colors"
            >
              Conoce más sobre mí
              <span className="group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ───────────────────────────────────── */}
      <section className="bg-zinc-900/30 border-y border-zinc-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-violet-400 font-mono text-sm">
              // tecnologías
            </span>
            <h2 className="text-3xl font-bold text-white mt-2">
              Mi stack tecnológico
            </h2>
            <p className="text-zinc-500 text-sm mt-2">
              Herramientas con las que trabajo día a día
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {techGroups.map((group) => (
              <div
                key={group.category}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors"
              >
                <h3 className="text-xs font-semibold text-violet-400 font-mono uppercase tracking-wider mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono text-zinc-300 bg-zinc-800 border border-zinc-700 rounded-md hover:border-violet-500/50 hover:text-violet-400 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/skills"
              className="text-sm text-zinc-500 hover:text-violet-400 transition-colors"
            >
              Ver todas mis skills &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-violet-400 font-mono text-sm">
              // proyectos
            </span>
            <h2 className="text-3xl font-bold text-white mt-1">
              Proyectos destacados
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden sm:block text-sm text-zinc-500 hover:text-violet-400 transition-colors"
          >
            Ver todos &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className={`group relative border border-zinc-800 ${project.border} rounded-xl overflow-hidden bg-gradient-to-br ${project.gradient} hover:-translate-y-0.5 transition-all cursor-pointer`}
            >
              <div className="h-44 bg-zinc-900/80 border-b border-zinc-800 flex flex-col items-center justify-center gap-2">
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
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold mb-2 group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-mono text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="border-t border-zinc-800 bg-zinc-900/20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
        </div>
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <span className="text-violet-400 font-mono text-sm">
            // trabajemos juntos
          </span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-4 leading-tight">
            Tienes un proyecto en mente?
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Estoy disponible para proyectos freelance, colaboraciones y nuevas
            oportunidades.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-lg text-base transition-all hover:scale-105 shadow-lg shadow-violet-900/40"
          >
            Enviarme un mensaje
          </Link>
        </div>
      </section>
    </div>
  );
}
