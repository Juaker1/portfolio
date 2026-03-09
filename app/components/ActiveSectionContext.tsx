"use client";
import { createContext, useContext, useState, useRef } from "react";

type ActiveSectionContextType = {
  activeSection: string;
  setActiveSection: (id: string) => void;
  navigateTo: (id: string) => void;
  registerNavigate: (fn: (id: string) => void) => void;
};

const ActiveSectionContext = createContext<ActiveSectionContextType>({
  activeSection: "inicio",
  setActiveSection: () => {},
  navigateTo: () => {},
  registerNavigate: () => {},
});

export function ActiveSectionProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState("inicio");
  const navigateFn = useRef<((id: string) => void) | null>(null);

  function registerNavigate(fn: (id: string) => void) {
    navigateFn.current = fn;
  }

  function navigateTo(id: string) {
    navigateFn.current?.(id);
  }

  return (
    <ActiveSectionContext.Provider
      value={{ activeSection, setActiveSection, navigateTo, registerNavigate }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  return useContext(ActiveSectionContext);
}
