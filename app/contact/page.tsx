export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <section className="border-b border-zinc-800 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <span className="text-violet-400 font-mono text-sm">// contacto</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mt-2 mb-4">
            Hablemos
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            Estoy disponible para proyectos freelance, posiciones fulltime y
            colaboraciones. No dudes en escribirme.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: channels */}
          <div className="flex-shrink-0 w-full lg:w-80 space-y-4">
            <h2 className="text-white font-bold text-lg mb-5">
              Canales de contacto
            </h2>

            {[
              {
                label: "Email",
                value: "correo@ejemplo.com",
                href: "mailto:correo@ejemplo.com",
                desc: "La forma más directa. Respondo en menos de 24h.",
                bgIcon: "bg-violet-500/10",
                textIcon: "text-violet-400",
                border: "border-violet-500/20 hover:border-violet-500/50",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                value: "linkedin.com/in/tuperfil",
                href: "https://linkedin.com",
                desc: "Conectate conmigo para networking profesional.",
                bgIcon: "bg-purple-500/10",
                textIcon: "text-purple-400",
                border: "border-purple-500/20 hover:border-purple-500/50",
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
              {
                label: "GitHub",
                value: "github.com/tuusuario",
                href: "https://github.com",
                desc: "Mira mi código, forks y contribuciones open source.",
                bgIcon: "bg-zinc-700/30",
                textIcon: "text-zinc-300",
                border: "border-zinc-700 hover:border-zinc-500",
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                ),
              },
            ].map((opt) => (
              <a
                key={opt.label}
                href={opt.href}
                target={opt.href.startsWith("http") ? "_blank" : undefined}
                rel={opt.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`flex items-start gap-4 p-4 bg-zinc-900 border ${opt.border} rounded-xl transition-all group`}
              >
                <div className={`p-2.5 rounded-lg ${opt.bgIcon} ${opt.textIcon} flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}>
                  {opt.icon}
                </div>
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
                Buscando{" "}
                <span className="text-zinc-300">proyectos freelance</span> y{" "}
                <span className="text-zinc-300">oportunidades fulltime</span>{" "}
                en desarrollo fullstack.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="flex-1">
            <h2 className="text-white font-bold text-lg mb-5">
              Enviame un mensaje
            </h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-zinc-400 text-sm font-medium">
                    Nombre <span className="text-violet-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus:border-violet-500 rounded-lg text-white text-sm placeholder-zinc-600 outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-zinc-400 text-sm font-medium">
                    Email <span className="text-violet-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus:border-violet-500 rounded-lg text-white text-sm placeholder-zinc-600 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-zinc-400 text-sm font-medium">
                  Asunto <span className="text-violet-500">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="En que puedo ayudarte?"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus:border-violet-500 rounded-lg text-white text-sm placeholder-zinc-600 outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="type" className="text-zinc-400 text-sm font-medium">
                  Tipo de consulta
                </label>
                <select
                  id="type"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus:border-violet-500 rounded-lg text-zinc-300 text-sm outline-none transition-colors"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="freelance">Proyecto freelance</option>
                  <option value="fulltime">Oportunidad laboral</option>
                  <option value="collaboration">Colaboración</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-zinc-400 text-sm font-medium">
                  Mensaje <span className="text-violet-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Cuéntame sobre tu proyecto, idea u oportunidad..."
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus:border-violet-500 rounded-lg text-white text-sm placeholder-zinc-600 outline-none transition-colors resize-none"
                />
              </div>

              <p className="text-zinc-600 text-xs">
                * Este formulario es visual por ahora. Implementa{" "}
                <span className="text-zinc-400 font-mono">Resend / Formspree</span>{" "}
                para hacerlo funcional.
              </p>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-lg transition-all hover:scale-105 text-sm shadow-lg shadow-violet-900/40"
              >
                Enviar mensaje &rarr;
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
