"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectsGrid from "./components/ProjectsGrid";
import CardDeck from "./components/CardDeck";

// ─────────────────────────────────────────────
// ScrollReveal — ties opacity + translation to scroll position.
// The element reveals as it enters the viewport and hides again when it exits.
// ─────────────────────────────────────────────
function ScrollReveal({
  children,
  direction = "up",
  distance = 48,
  className,
}: {
  children: React.ReactNode;
  direction?: "left" | "right" | "up";
  distance?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "start 55%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const translateX = useTransform(
    scrollYProgress,
    [0, 0.5],
    [direction === "left" ? -distance : distance, 0]
  );
  const translateY = useTransform(scrollYProgress, [0, 0.5], [distance, 0]);

  const motionStyle =
    direction === "left" || direction === "right"
      ? { opacity, x: translateX }
      : { opacity, y: translateY };

  return (
    <motion.div ref={ref} style={motionStyle} className={className}>
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const techGroups = [
  {
    category: "Frontend",
    techs: ["Next.js", "Angular v21 Zoneless", "React / React Native", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    techs: ["Python", "Node.js", "FastAPI", "Flask", "Hono"],
  },
  {
    category: "Base de datos",
    techs: ["PostgreSQL", "SQLite", "Drizzle ORM", "pgvector"],
  },
  {
    category: "DevOps & Tools",
    techs: ["Docker / Docker Compose", "Git", "pnpm", "EAS Build", "Ollama"],
  },
];

const learning = ["Angular", "Ionic", "VPS / Self-hosting", "Machine Learning", "Data Science", "WebSockets"];

const projects = [
  {
    title: "Plataforma Bioinformática de Análisis Estructural",
    description: "Sistema automatizado para la extracción, curación y filtrado de proteínas para el descubrimiento de analgésicos. Diseñado con Clean Architecture para aislar la lógica de dominio matemático de la infraestructura, expuesto mediante una API REST.",
    tags: ["Python", "Flask", "SQLite"],
    category: "Backend",
    gradient: "from-violet-500/10 to-purple-500/10",
    border: "hover:border-violet-500/40",
    status: "Completado",
    github: "https://github.com/Juaker1/Proyecto-toxinas",
    demo: null as string | null,
    images: ["/images/projects/bioinformatica.png"],
  },
  {
    title: "DocuMind: Sistema RAG Local",
    description: "Plataforma web para consultar documentos PDF mediante lenguaje natural, procesando todo localmente para garantizar la privacidad. Integra un LLM local (Ollama) con base de datos vectorial (pgvector) y SSE para respuestas en tiempo real sin alucinaciones.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "pgvector", "Ollama"],
    category: "Fullstack",
    gradient: "from-purple-500/10 to-fuchsia-500/10",
    border: "hover:border-purple-500/40",
    status: "Completado",
    github: "https://github.com/Juaker1/DocuMind",
    demo: null as string | null,
    images: ["/images/projects/documind.png"],
  },
  {
    title: "MicroMeasure",
    description: "Aplicación móvil para investigadores que permite calibrar y medir estructuras celulares en fotografías microscópicas directamente desde el teléfono. Desacopla la matriz de transformación visual y la capa de dibujo vectorial para coordenadas exactas bajo zoom intensivo.",
    tags: ["React Native", "Expo", "EAS Build"],
    category: "Mobile",
    gradient: "from-fuchsia-500/10 to-pink-500/10",
    border: "hover:border-fuchsia-500/40",
    status: "Completado",
    github: "https://github.com/Juaker1/Medicion-Imagenes",
    demo: null as string | null,
    images: ["/images/projects/micromeasure1.jpg", "/images/projects/micromeasure2.jpg"],
  },
  {
    title: "Task Manager",
    description: "Herramienta de productividad con soporte para proyectos, rutinas diarias y reordenamiento de tareas mediante drag & drop. Angular 21 en modo Zoneless para control de estado reactivo estricto, conectado a una API de alto rendimiento con Hono y Drizzle ORM.",
    tags: ["Angular 21", "Hono", "Node.js", "Drizzle ORM"],
    category: "Fullstack",
    gradient: "from-violet-500/10 to-blue-500/10",
    border: "hover:border-violet-500/40",
    status: "Completado",
    github: "https://github.com/Juaker1/task-manager",
    demo: null as string | null,
    images: ["/images/projects/taskmanager.png"],
  },
];

const education = [
  {
    degree: "Ingeniería Civil en Informática",
    school: "Universidad Católica de Temuco",
    period: "2021 - 2025",
    desc: "Formación sólida en ciencias de la computación, algoritmos, bases de datos y arquitectura de sistemas.",
  },
];

const orbitalDots = [
  { size: "w-2 h-2", color: "bg-violet-400", top: "5%", left: "15%" },
  { size: "w-1.5 h-1.5", color: "bg-fuchsia-400", top: "20%", right: "8%" },
  { size: "w-1 h-1", color: "bg-purple-400", bottom: "25%", left: "5%" },
  { size: "w-2 h-2", color: "bg-violet-300", bottom: "12%", right: "12%" },
  { size: "w-1.5 h-1.5", color: "bg-fuchsia-300", top: "50%", left: "-2%" },
];

// ─────────────────────────────────────────────
// ContactCard — regular link card or copyable email card
// ─────────────────────────────────────────────

type ContactOpt = {
  label: string;
  value: string;
  href: string;
  desc: string;
  bgIcon: string;
  textIcon: string;
  border: string;
  icon: React.ReactNode;
  dir: "left" | "right";
  copyable?: boolean;
};

function ContactCard({ opt }: { opt: ContactOpt }) {
  const [toast, setToast] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(opt.value).then(() => {
      setToast(true);
      setTimeout(() => setToast(false), 2000);
    });
  }, [opt.value]);

  const cardClass = `h-full flex flex-row items-center gap-5 p-5 bg-zinc-900 border ${opt.border} rounded-xl transition-all group`;

  const inner = (
    <>
      <div className={`p-3 rounded-lg ${opt.bgIcon} ${opt.textIcon} shrink-0 group-hover:scale-110 transition-transform`}>
        {opt.icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white font-semibold text-sm mb-0.5">{opt.label}</p>
        <p className={`text-xs font-mono break-all ${opt.textIcon} mb-1`}>{opt.value}</p>
        <p className="text-zinc-600 text-xs leading-relaxed">{opt.desc}</p>
      </div>
      {opt.copyable && (
        <button
          onClick={(e) => { e.preventDefault(); handleCopy(); }}
          aria-label="Copiar correo al portapapeles"
          className="shrink-0 p-2 rounded-lg text-zinc-500 hover:text-violet-400 hover:bg-violet-500/10 transition-all"
        >
          {toast ? (
            <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      )}
    </>
  );

  return (
    <ScrollReveal direction={opt.dir} className="h-full relative">
      {opt.copyable ? (
        <a href={opt.href} className={cardClass}>{inner}</a>
      ) : (
        <a
          href={opt.href}
          target={opt.href.startsWith("http") ? "_blank" : undefined}
          rel={opt.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={cardClass}
        >
          {inner}
        </a>
      )}
      {/* Toast */}
      <div
        className={`absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-zinc-800 border border-violet-500/30 text-violet-400 text-xs font-mono rounded-full whitespace-nowrap pointer-events-none transition-all duration-300 ${toast ? "opacity-100 -translate-y-0" : "opacity-0 translate-y-2"
          }`}
      >
        ✓ Correo copiado al portapapeles
      </div>
    </ScrollReveal>
  );
}

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

export default function Home() {
  return (
    <CardDeck sections={[

      <section id="inicio" key="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-violet-600/20 blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-700/15 blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-violet-500/8 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: "radial-gradient(circle, #8b5cf6 1px, transparent 1px)", backgroundSize: "36px 36px" }}
          />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: "repeating-linear-gradient(45deg, #8b5cf6 0px, #8b5cf6 1px, transparent 0px, transparent 50%)", backgroundSize: "24px 24px" }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

          {/* Text — from left */}
          <ScrollReveal direction="left" className="flex-1 text-center lg:text-left">
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
              <a href="#proyectos" className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-lg transition-all hover:scale-105 text-sm shadow-lg shadow-violet-900/40">
                Ver proyectos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a href="#contacto" className="px-6 py-3 border border-zinc-700 hover:border-violet-500 text-zinc-300 hover:text-white font-semibold rounded-lg transition-all hover:scale-105 text-sm">
                Contáctame
              </a>
            </div>
          </ScrollReveal>

          {/* Avatar — from right */}
          <ScrollReveal direction="right" className="flex-shrink-0 relative">
            {orbitalDots.map((dot, i) => (
              <div
                key={i}
                className={`absolute z-20 rounded-full ${dot.size} ${dot.color} opacity-70 blur-[1px] hidden lg:block`}
                style={{ top: dot.top, left: (dot as { left?: string }).left, right: (dot as { right?: string }).right, bottom: dot.bottom }}
              />
            ))}
            <div className="absolute -inset-4 rounded-full border border-dashed border-violet-500/20 animate-spin [animation-duration:20s]" />
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-violet-600/30 to-fuchsia-600/20 blur-xl" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-600/20 blur-md" />
            <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-violet-500/40 shadow-2xl shadow-violet-900/50">
              <img src="/images/perfil3.jpg" alt="Joaquín Aguilar" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-3 right-3 z-30 flex items-center gap-1.5 px-2.5 py-1 bg-zinc-900/90 border border-zinc-700 rounded-full backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-zinc-400 text-xs font-mono">open</span>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-700 animate-bounce">
          <span className="text-xs font-mono">scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>,

      <section id="sobre-mi" key="sobre-mi" className="border-t border-zinc-800/50 py-24">
        <div className="max-w-6xl mx-auto px-6">

          <ScrollReveal direction="up">
            <span className="text-violet-400 font-mono text-sm">// sobre mí</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2 mb-12">Conóceme un poco más</h2>
          </ScrollReveal>

          <div className="flex flex-col lg:flex-row gap-12 items-start">

            {/* Info card */}
            <ScrollReveal direction="left" className="flex-shrink-0 w-full lg:w-64">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-3">
                <h3 className="text-xs font-mono font-semibold text-violet-400 uppercase tracking-wider mb-3">Info rápida</h3>
                {[
                  { icon: "📍", label: "Ubicación", value: "Temuco, Chile" },
                  { icon: "🎓", label: "Universidad", value: "Universidad Católica de Temuco" },
                  { icon: "💼", label: "Estado", value: "Open to work" },
                  { icon: "🌐", label: "Idiomas", value: "Español (Nativo), Inglés (C1)" },
                  { icon: "📧", label: "Email", value: "Joaquin.aguilar.ampuero@gmail.com" },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="text-base mt-0.5">{icon}</span>
                    <div>
                      <p className="text-zinc-600 text-xs">{label}</p>
                      <p className="text-zinc-300 text-sm break-all">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 mt-3">
                <a href="https://github.com/Juaker1" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center px-4 py-2.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-lg text-zinc-400 hover:text-white transition-all text-sm font-medium">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/joaquin-aguilar-ampuero" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center px-4 py-2.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-lg text-zinc-400 hover:text-white transition-all text-sm font-medium">
                  LinkedIn
                </a>
              </div>
              <a href="/cv-joaquin-aguilar.pdf" download="CV_Joaquin_Aguilar.pdf" className="mt-3 flex items-center justify-center gap-2 px-4 py-3 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-lg transition-all text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Descargar CV
              </a>
            </ScrollReveal>

            {/* Main text — from right */}
            <ScrollReveal direction="right" className="flex-1">
              <h3 className="text-xl font-bold text-white mb-5">Mi historia</h3>
              <div className="space-y-4 text-zinc-400 leading-relaxed mb-10">
                <p>Soy Ingeniero Civil en Informática con una gran pasión por el desarrollo web y la arquitectura backend. Me dedico a construir aplicaciones robustas y escalables, asegurándome de que la base tecnológica sea sólida desde el primer momento.</p>
                <p>Me desenvuelvo muy bien construyendo la arquitectura interna de la aplicación y trabajando con tecnologías como Python y Node. Me gusta el código ordenado, las arquitecturas limpias y tengo gran facilidad para adoptar nuevas tecnologías a medida que la industria avanza.</p>
                <p>Fuera del entorno de desarrollo, practico escalada y calistenia. Estas actividades me ayudan a mantener el equilibrio y me exigen una disciplina y constancia que aplico de forma natural al momento de programar.</p>
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
            </ScrollReveal>

          </div>
        </div>
      </section>,

      <section id="stack" key="stack" className="border-t border-zinc-800/50 bg-zinc-900/30 py-24">
        <div className="max-w-6xl mx-auto px-6">

          <ScrollReveal direction="up" className="mb-12 text-center">
            <span className="text-violet-400 font-mono text-sm">// tecnologías</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">Mi stack tecnológico</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {techGroups.map((group, i) => (
              <ScrollReveal key={group.category} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors h-full">
                  <h3 className="text-xs font-semibold text-violet-400 font-mono uppercase tracking-wider mb-4">{group.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.techs.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 text-xs font-mono text-zinc-300 bg-zinc-800 border border-zinc-700 rounded-md hover:border-violet-500/50 hover:text-violet-400 transition-colors cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" className="border-t border-zinc-800 pt-10">
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
          </ScrollReveal>

        </div>
      </section>,

      <section id="proyectos" key="proyectos" className="border-t border-zinc-800/50 py-24">
        <div className="max-w-6xl mx-auto px-6">

          <ScrollReveal direction="left" className="mb-12">
            <span className="text-violet-400 font-mono text-sm">// proyectos</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">Proyectos destacados</h2>
            <p className="text-zinc-500 text-sm mt-2 max-w-xl">Una selección de proyectos personales, académicos y profesionales que muestran mi capacidad técnica en distintos stacks y dominios.</p>
          </ScrollReveal>

          <ScrollReveal direction="up">
            <ProjectsGrid projects={projects} />
          </ScrollReveal>

        </div>
      </section>,

      <section id="contacto" key="contacto" className="border-t border-zinc-800/50 bg-zinc-900/20 py-24">
        <div className="max-w-6xl mx-auto px-6">

          <ScrollReveal direction="up" className="mb-12">
            <span className="text-violet-400 font-mono text-sm">// contacto</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">Hablemos</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mt-2 leading-relaxed">¿Tienes un proyecto en mente o buscas sumar un desarrollador a tu equipo? Escríbeme.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                label: "Email",
                value: "joaquin.aguilar.ampuero@gmail.com",
                href: "mailto:joaquin.aguilar.ampuero@gmail.com",
                desc: "Contacto Directo.",
                bgIcon: "bg-violet-500/10", textIcon: "text-violet-400",
                border: "border-violet-500/20 hover:border-violet-500/50",
                icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                dir: "left" as const,
                copyable: true,
              },
              {
                label: "LinkedIn",
                value: "linkedin.com/in/joaquin-aguilar-ampuero",
                href: "https://linkedin.com/in/joaquin-aguilar-ampuero",
                desc: "Mi historial laboral, formación y conexiones profesionales.",
                bgIcon: "bg-purple-500/10", textIcon: "text-purple-400",
                border: "border-purple-500/20 hover:border-purple-500/50",
                icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
                dir: "right" as const,
              },
              {
                label: "GitHub",
                value: "github.com/Juaker1",
                href: "https://github.com/Juaker1",
                desc: "Explora el código fuente de mis proyectos y arquitecturas.",
                bgIcon: "bg-zinc-700/30", textIcon: "text-zinc-300",
                border: "border-zinc-700 hover:border-zinc-500",
                icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>,
                dir: "left" as const,
              },
              {
                label: "Disponible ahora",
                value: "Open to work",
                href: "mailto:joaquin.aguilar.ampuero@gmail.com",
                desc: "Abierto a posiciones full-time como desarrollador Backend, Full-Stack o enfocado en Python.",
                bgIcon: "bg-violet-500/10", textIcon: "text-violet-400",
                border: "border-violet-500/20 hover:border-violet-500/50",
                icon: <span className="w-5 h-5 flex items-center justify-center"><span className="w-2.5 h-2.5 rounded-full bg-violet-500 animate-pulse" /></span>,
                dir: "right" as const,
              },
            ].map((opt) => (
              <ContactCard key={opt.label} opt={opt as ContactOpt} />
            ))}
          </div>

          {/* Footer strip */}
          <ScrollReveal direction="up" className="mt-16 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-mono text-sm font-bold text-zinc-500">
              <span className="text-violet-400">{"<"}</span>JA<span className="text-violet-400">{" />"}</span>
              <span className="text-zinc-600 font-normal ml-2">Joaquín Aguilar</span>
            </span>
            <span className="text-zinc-700 text-xs font-mono text-center">
              © {new Date().getFullYear()} · Desarrollado con Next.js y Tailwind CSS
            </span>
          </ScrollReveal>

        </div>
      </section>,

    ]} />
  );
}
