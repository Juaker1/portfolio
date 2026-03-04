import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <section className="border-b border-zinc-800 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <span className="text-violet-400 font-mono text-sm">// sobre mi</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mt-2 mb-4">
            Conóceme un poco más
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            Soy un desarrollador apasionado por crear soluciones digitales de
            calidad, con foco en la experiencia de usuario y arquitecturas
            escalables.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-shrink-0 w-full lg:w-80 flex flex-col gap-6">
            {/* Photo placeholder */}
            <div className="w-full aspect-square rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden flex flex-col items-center justify-center gap-3 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent" />
              <svg
                className="w-20 h-20 text-zinc-700"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
              <span className="text-zinc-600 text-xs font-mono z-10">
                foto-perfil.jpg
              </span>
            </div>

            {/* Quick info */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-3">
              <h3 className="text-xs font-mono font-semibold text-violet-400 uppercase tracking-wider mb-4">
                Info rápida
              </h3>
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
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center px-4 py-2.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-lg text-zinc-400 hover:text-white transition-all text-sm font-medium"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center px-4 py-2.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-lg text-zinc-400 hover:text-white transition-all text-sm font-medium"
              >
                LinkedIn
              </a>
            </div>

            <a
              href="#"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-lg transition-all text-sm"
            >
              Descargar CV &darr;
            </a>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-6">Mi historia</h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Soy Ingeniero Civil en Informática, titulado de [Universidad X],
                con una profunda pasión por la tecnología y el desarrollo de
                software. Desde temprana edad me interesé por entender cómo
                funcionan los sistemas digitales, lo que me llevó naturalmente a
                elegir esta carrera.
              </p>
              <p>
                Durante mi formación académica adquirí una base sólida en
                ciencias de la computación: algoritmos, estructuras de datos,
                bases de datos, redes y sistemas operativos. Esto me da una
                ventaja para entender los sistemas a fondo, no sólo a nivel de
                código sino también de infraestructura.
              </p>
              <p>
                En el ámbito del desarrollo web, me especialicé en{" "}
                <span className="text-white font-medium">fullstack</span>:
                trabajo con{" "}
                <span className="text-violet-400">Next.js y Angular</span> en el
                frontend, y con{" "}
                <span className="text-violet-400">FastAPI, HonoJS y Node.js</span>{" "}
                en el backend.
              </p>
              <p>
                Fuera del código, disfruto [pasatiempos/intereses personales],
                lo que me ayuda a mantener un equilibrio entre la vida
                profesional y personal.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Código limpio", desc: "Escribo código legible, mantenible y bien documentado.", emoji: "✨" },
                { title: "Aprendizaje continuo", desc: "La tecnología avanza rápido; siempre estoy aprendiendo algo nuevo.", emoji: "📚" },
                { title: "Orientado a resultados", desc: "Me enfoco en entregar valor real, no solo en hacer que funcione.", emoji: "🎯" },
                { title: "Trabajo en equipo", desc: "Comunicativo, colaborativo y abierto al feedback constructivo.", emoji: "🤝" },
              ].map(({ title, desc, emoji }) => (
                <div
                  key={title}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-colors"
                >
                  <span className="text-2xl mb-2 block">{emoji}</span>
                  <h4 className="text-white font-semibold text-sm mb-1">{title}</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 bg-zinc-900/20">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <span className="text-violet-400 font-mono text-sm">// educación</span>
          <h2 className="text-2xl font-bold text-white mt-2 mb-8">
            Formación académica
          </h2>
          <div className="space-y-4">
            {[
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
            ].map((item) => (
              <div
                key={item.degree}
                className="flex flex-col sm:flex-row gap-4 p-5 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors"
              >
                <div className="flex-shrink-0 w-2 bg-violet-500 rounded-full hidden sm:block" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-white font-bold">{item.degree}</h3>
                    <span className="text-violet-400 text-xs font-mono bg-violet-500/10 border border-violet-500/20 px-2 py-1 rounded">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-zinc-500 text-sm mb-2">{item.school}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              ¿Quieres ver lo que puedo construir?
            </h3>
            <p className="text-zinc-500 text-sm">
              Echa un vistazo a mis proyectos o ponte en contacto.
            </p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <Link
              href="/projects"
              className="px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-lg text-sm transition-all"
            >
              Ver proyectos
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 border border-zinc-700 hover:border-zinc-500 text-zinc-300 font-semibold rounded-lg text-sm transition-all"
            >
              Contacto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
