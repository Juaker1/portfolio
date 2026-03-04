const skillGroups = [
  {
    category: "Frontend",
    color: "violet",
    icon: "🖥️",
    skills: [
      { name: "Next.js", level: 90, note: "App Router, Server Components, RSC" },
      { name: "Angular", level: 85, note: "Standalone, RxJS, Signals" },
      { name: "React", level: 88, note: "Hooks, Context, Zustand" },
      { name: "TypeScript", level: 88, note: "Tipos estrictos, generics, utilidades" },
      { name: "Tailwind CSS", level: 90, note: "v3 & v4, diseño responsive" },
      { name: "HTML & CSS", level: 92, note: "Semántico, accesibilidad, animaciones" },
    ],
  },
  {
    category: "Backend",
    color: "purple",
    icon: "⚙️",
    skills: [
      { name: "Python", level: 85, note: "Tipado, async, testing" },
      { name: "FastAPI", level: 85, note: "REST, JWT, Pydantic, async" },
      { name: "HonoJS", level: 78, note: "Edge runtime, Cloudflare Workers" },
      { name: "Node.js", level: 80, note: "Express, APIs, middleware" },
      { name: "REST APIs", level: 88, note: "Diseño, versionado, documentación" },
      { name: "GraphQL", level: 65, note: "Queries, mutations, resolvers" },
    ],
  },
  {
    category: "Base de datos",
    color: "fuchsia",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", level: 82, note: "Consultas avanzadas, índices, relaciones" },
      { name: "MongoDB", level: 75, note: "Documentos, agregaciones" },
      { name: "Prisma ORM", level: 82, note: "Migraciones, schema, relations" },
      { name: "SQLAlchemy", level: 78, note: "ORM + Core, asyncpg" },
      { name: "Redis", level: 68, note: "Cache, pub/sub, sessions" },
    ],
  },
  {
    category: "DevOps & Cloud",
    color: "pink",
    icon: "☁️",
    skills: [
      { name: "Docker", level: 78, note: "Compose, multi-stage builds" },
      { name: "Git & GitHub", level: 90, note: "Git flow, PR, Actions" },
      { name: "Vercel", level: 85, note: "Deploy, edge functions, CI/CD" },
      { name: "Cloudflare", level: 72, note: "Workers, Pages, D1" },
      { name: "Linux", level: 75, note: "CLI, scripts bash, SSH" },
      { name: "CI/CD", level: 70, note: "GitHub Actions, pipelines" },
    ],
  },
];

const barColors: Record<string, string> = {
  violet: "bg-violet-500",
  purple: "bg-purple-500",
  fuchsia: "bg-fuchsia-500",
  pink: "bg-pink-500",
};

const badgeColors: Record<string, string> = {
  violet: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  purple: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  fuchsia: "text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20",
  pink: "text-pink-400 bg-pink-500/10 border-pink-500/20",
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <section className="border-b border-zinc-800 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <span className="text-violet-400 font-mono text-sm">// skills</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mt-2 mb-4">
            Stack & habilidades
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            Tecnologías con las que trabajo día a día. Los porcentajes reflejan
            mi nivel de comodidad y profundidad, no un valor objetivo.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{group.icon}</span>
              <h2 className="text-xl font-bold text-white">{group.category}</h2>
              <div className="flex-1 h-px bg-zinc-800" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-xl p-4 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold text-sm">
                        {skill.name}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full border font-mono ${badgeColors[group.color]}`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden mb-2">
                    <div
                      className={`h-full ${barColors[group.color]} rounded-full`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <p className="text-zinc-600 text-xs font-mono">{skill.note}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="border-t border-zinc-800 bg-zinc-900/20">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <span className="text-violet-400 font-mono text-sm">
            // siempre aprendiendo
          </span>
          <h2 className="text-2xl font-bold text-white mt-2 mb-6">
            En el radar ahora mismo
          </h2>
          <div className="flex flex-wrap gap-3">
            {["Rust", "tRPC", "Bun", "Kubernetes", "Drizzle ORM", "LangChain", "WebSockets", "Web3"].map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-2 px-4 py-2 border border-dashed border-zinc-700 text-zinc-500 hover:text-zinc-300 hover:border-zinc-500 rounded-full text-sm font-mono transition-colors cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 inline-block" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
