"use client";

import { useState, useEffect, useCallback } from "react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  category: string;
  gradient: string;
  border: string;
  status: string;
  github: string;
  demo: string | null;
  images: string[];
};

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-zinc-400 hover:text-white text-sm font-mono flex items-center gap-1 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          Cerrar (Esc)
        </button>
        <img
          src={src}
          alt={alt}
          className="w-full h-auto max-h-[85vh] object-contain rounded-xl border border-zinc-700 shadow-2xl"
        />
      </div>
    </div>
  );
}

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const openLightbox = useCallback((src: string, alt: string) => setLightbox({ src, alt }), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`group relative border border-zinc-800 ${project.border} rounded-xl overflow-hidden bg-gradient-to-br ${project.gradient} hover:-translate-y-0.5 transition-all flex flex-col`}
          >
            <div className="h-40 border-b border-zinc-800 relative overflow-hidden">
              {project.images.length === 1 ? (
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover cursor-zoom-in hover:scale-105 transition-transform duration-300"
                  onClick={() => openLightbox(project.images[0], project.title)}
                />
              ) : (
                <div className="flex h-full">
                  {project.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${project.title} ${i + 1}`}
                      className="w-1/2 h-full object-cover object-center border-r border-zinc-800 last:border-r-0 cursor-zoom-in hover:scale-105 transition-transform duration-300"
                      onClick={() => openLightbox(img, `${project.title} ${i + 1}`)}
                    />
                  ))}
                </div>
              )}
              <span
                className={`absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full font-mono pointer-events-none ${
                  project.status === "Completado"
                    ? "bg-violet-500/20 text-violet-400 border border-violet-500/30"
                    : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                }`}
              >
                {project.status}
              </span>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <span className="text-xs font-mono text-zinc-600 mb-1">{project.category}</span>
              <h3 className="text-white font-bold mb-2 group-hover:text-violet-400 transition-colors">{project.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-xs font-mono text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 pt-3 border-t border-zinc-800">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
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
                    target="_blank"
                    rel="noopener noreferrer"
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

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={closeLightbox} />
      )}
    </>
  );
}
