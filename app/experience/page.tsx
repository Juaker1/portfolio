const experiences = [
  {
    type: "work",
    role: "Desarrollador Fullstack Jr.",
    company: "Empresa / Startup XYZ",
    period: "Ene 2024 - presente",
    location: "Santiago, Chile (Híbrido)",
    description:
      "Desarrollo de features fullstack en una plataforma SaaS B2B. Next.js en el frontend, FastAPI en el backend y PostgreSQL como base de datos principal.",
    highlights: [
      "Migración de pages router a App Router en Next.js 14",
      "Diseño e implementación de API REST con FastAPI y autenticación JWT",
      "Optimización de consultas SQL que redujo tiempos de respuesta en 40%",
      "Implementación de CI/CD con GitHub Actions y despliegue en Vercel",
    ],
    tags: ["Next.js", "FastAPI", "PostgreSQL", "TypeScript", "Docker"],
    current: true,
  },
  {
    type: "work",
    role: "Desarrollador Web Freelance",
    company: "Clientes independientes",
    period: "2022 - presente",
    location: "Remoto",
    description:
      "Desarrollo de proyectos web para distintos clientes: landing pages, e-commerce y aplicaciones web a medida. Gestión completa del proyecto desde el diseño hasta el despliegue.",
    highlights: [
      "Desarrollo de 5+ sitios web con Next.js y Tailwind CSS",
      "Integración de pagos con Stripe en tienda online",
      "Configuración de dominio, hosting y SSL para todos los proyectos",
    ],
    tags: ["Next.js", "Tailwind CSS", "Stripe", "Vercel"],
    current: false,
  },
  {
    type: "internship",
    role: "Práctica Profesional - Desarrollador Backend",
    company: "Empresa ABC",
    period: "Jul 2023 - Dic 2023",
    location: "Santiago, Chile",
    description:
      "Práctica de 6 meses desarrollando microservicios internos con Python y FastAPI. Participación activa en ceremonias ágiles del equipo de engineering.",
    highlights: [
      "Desarrollo de microservicio de notificaciones con Celery y Redis",
      "Documentación técnica de APIs con Swagger/OpenAPI",
      "Escritura de tests unitarios con pytest (cobertura > 80%)",
      "Participación en planning, daily y retrospectivas del equipo",
    ],
    tags: ["Python", "FastAPI", "Celery", "Redis", "pytest"],
    current: false,
  },
  {
    type: "academic",
    role: "Proyecto de Título",
    company: "Universidad X",
    period: "2023 - 2024",
    location: "Universidad X",
    description:
      "Desarrollo de [nombre del proyecto] como proyecto de titulación. Sistema fullstack para [descripción breve de la solución].",
    highlights: [
      "Arquitectura de microservicios con Docker Compose",
      "Frontend SPA en Angular con diseño mobile-first",
      "API REST con FastAPI, autenticación y autorización por roles",
      "Despliegue en servidor propio con Nginx y HTTPS",
    ],
    tags: ["Angular", "FastAPI", "Docker", "PostgreSQL", "Nginx"],
    current: false,
  },
];

const typeConfig = {
  work: { label: "Trabajo", dot: "bg-violet-500" },
  internship: { label: "Práctica", dot: "bg-purple-500" },
  academic: { label: "Académico", dot: "bg-fuchsia-500" },
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <section className="border-b border-zinc-800 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <span className="text-violet-400 font-mono text-sm">// experiencia</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mt-2 mb-4">
            Mi trayectoria
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            Experiencia laboral, prácticas profesionales y proyectos académicos
            relevantes que han moldeado mi perfil como desarrollador.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-12">
          {Object.entries(typeConfig).map(([, cfg]) => (
            <span key={cfg.label} className="flex items-center gap-2 text-sm text-zinc-400">
              <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
              {cfg.label}
            </span>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-800" />
          <div className="space-y-10">
            {experiences.map((exp, index) => {
              const cfg = typeConfig[exp.type as keyof typeof typeConfig];
              return (
                <div key={index} className="relative pl-12">
                  <div
                    className={`absolute left-0 top-1.5 w-8 h-8 rounded-full border-2 border-zinc-900 flex items-center justify-center ${cfg.dot}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-white/30" />
                  </div>

                  <div className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-xl p-6 transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                          {exp.current && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-400 border border-violet-500/30 font-mono animate-pulse">
                              Actual
                            </span>
                          )}
                          <span className="text-xs px-2 py-0.5 rounded-full border font-mono text-violet-400 bg-violet-500/10 border-violet-500/20">
                            {cfg.label}
                          </span>
                        </div>
                        <p className="text-zinc-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-violet-400 text-sm font-mono">{exp.period}</p>
                        <p className="text-zinc-600 text-xs">{exp.location}</p>
                      </div>
                    </div>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-1.5 mb-4">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                          <span className="text-violet-500 mt-0.5 flex-shrink-0">&#9656;</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-800">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs font-mono text-zinc-400 bg-zinc-800 border border-zinc-700 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 bg-zinc-900/20">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              ¿Quieres el detalle completo?
            </h3>
            <p className="text-zinc-500 text-sm">
              Descarga mi CV actualizado con toda mi experiencia y formación.
            </p>
          </div>
          <a
            href="#"
            className="flex-shrink-0 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-lg text-sm transition-all hover:scale-105"
          >
            Descargar CV (PDF) &darr;
          </a>
        </div>
      </section>
    </div>
  );
}
