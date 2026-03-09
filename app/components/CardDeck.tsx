"use client";
import { useEffect, useRef } from "react";
import { useActiveSection } from "./ActiveSectionContext";

export const SECTION_IDS = ["inicio", "sobre-mi", "stack", "proyectos", "contacto"];

export default function CardDeck({ sections }: { sections: React.ReactNode[] }) {
  const { setActiveSection, registerNavigate } = useActiveSection();
  const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Programmatic navigation: scroll section into view smoothly
  useEffect(() => {
    registerNavigate((id: string) => {
      const idx = SECTION_IDS.indexOf(id);
      if (idx !== -1)
        wrapperRefs.current[idx]?.scrollIntoView({ behavior: "smooth" });
    });
  }, [registerNavigate]);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = wrapperRefs.current.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActiveSection(SECTION_IDS[idx]);
          }
        });
      },
      { threshold: 0.4 }
    );
    wrapperRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, [setActiveSection]);

  return (
    <div>
      {sections.map((section, i) => (
        <div
          key={SECTION_IDS[i]}
          ref={(el) => { wrapperRefs.current[i] = el; }}
        >
          {section}
        </div>
      ))}
    </div>
  );
}

