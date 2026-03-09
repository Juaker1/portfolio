"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useActiveSection } from "./ActiveSectionContext";
import { SECTION_IDS } from "./CardDeck";

const SECTION_LABELS: Record<string, string> = {
  "inicio":    "Inicio",
  "sobre-mi":  "Sobre mí",
  "stack":     "Stack",
  "proyectos": "Proyectos",
  "contacto":  "Contacto",
};

export default function SideNav() {
  const { activeSection, navigateTo } = useActiveSection();
  const [navHovered, setNavHovered] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <>
      {/* ── Logo flotante top-left ── */}
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); navigateTo("inicio"); }}
        className="fixed top-6 left-8 z-50 text-white font-bold text-lg tracking-tight font-mono select-none"
      >
        <span className="text-violet-400">{"<"}</span>
        JA
        <span className="text-violet-400">{" />"}</span>
      </a>

      {/* ── Social icons top-right ── */}
      <div className="fixed top-6 right-8 z-50 flex items-center gap-4">
        <a href="https://github.com/Juaker1" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-zinc-500 hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
        </a>
        <a href="https://linkedin.com/in/joaquin-aguilar-ampuero" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-zinc-500 hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
        </a>
        <a href="mailto:joaquin.aguilar.ampuero@gmail.com" aria-label="Email" className="text-zinc-500 hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        </a>
      </div>

      {/* ── Left sidebar nav ── */}
      <nav
        className="fixed left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-start gap-5 py-4 px-2 -mx-2"
        onMouseEnter={() => setNavHovered(true)}
        onMouseLeave={() => { setNavHovered(false); setHoveredId(null); }}
      >
        {SECTION_IDS.map((id, i) => {
          const isActive = activeSection === id;
          const isItemHovered = hoveredId === id;
          // Fisheye: hovered item scales up, neighbours slightly less, rest normal
          const scale = isItemHovered ? 1.25 : navHovered && hoveredId ? 0.92 : 1;

          return (
            <motion.button
              key={id}
              onClick={() => navigateTo(id)}
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
              animate={{ scale }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className="flex items-center gap-3 origin-left cursor-pointer"
              aria-label={SECTION_LABELS[id]}
            >
              {/* Dot / active line */}
              <div className="relative flex items-center justify-center w-5">
                <motion.div
                  animate={
                    isActive
                      ? { width: 20, height: 2, borderRadius: 2, backgroundColor: "#a78bfa" }
                      : navHovered
                      ? { width: 8, height: 8, borderRadius: 9999, backgroundColor: isItemHovered ? "#a78bfa" : "#71717a" }
                      : { width: 6, height: 6, borderRadius: 9999, backgroundColor: "#3f3f46" }
                  }
                  transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
                />
              </div>

              {/* Label — always in DOM, opacity controls visibility */}
              <motion.span
                animate={{
                  opacity: isActive ? 1 : navHovered ? (isItemHovered ? 0.9 : 0.4) : 0,
                }}
                transition={{
                  duration: 0.28,
                  delay: !isActive
                    ? navHovered
                      ? i * 0.05          // enter: top → bottom
                      : (SECTION_IDS.length - 1 - i) * 0.045  // exit: bottom → top
                    : 0,
                  ease: "easeInOut",
                }}
                style={{ pointerEvents: "none" }}
                className={`text-xs font-mono tracking-widest uppercase whitespace-nowrap select-none ${
                  isActive ? "text-violet-300" : "text-zinc-500"
                }`}
              >
                {SECTION_LABELS[id]}
              </motion.span>
            </motion.button>
          );
        })}
      </nav>
    </>
  );
}
