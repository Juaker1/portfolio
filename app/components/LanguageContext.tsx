"use client";
import { createContext, useContext, useState } from "react";

export type Lang = "es" | "en";
type LangContextType = { lang: Lang; toggleLang: () => void };

const LangContext = createContext<LangContextType>({ lang: "es", toggleLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  const toggleLang = () => setLang((l) => (l === "es" ? "en" : "es"));
  return <LangContext.Provider value={{ lang, toggleLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
