"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Lang = "en" | "es";

interface LanguageContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>("en");

    useEffect(() => {
        const saved = localStorage.getItem("lang") as Lang | null;
        if (saved) setLang(saved);
    }, []);

    const updateLang = (newLang: Lang) => {
        setLang(newLang);
        localStorage.setItem("lang", newLang);
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang: updateLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
    return ctx;
}
