"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
    darkMode: boolean;
    isAnimating: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved) {
            setDarkMode(saved === "dark");
            document.documentElement.classList.toggle("dark", saved === "dark");
        }
    }, []);

    const toggleTheme = () => {
        setIsAnimating(true); // Inicia animación de íconos

        setTimeout(() => {
            // Cambiar el color DESPUÉS de la animación
            setDarkMode(prev => {
                const newTheme = !prev;
                document.documentElement.classList.toggle("dark", newTheme);
                localStorage.setItem("theme", newTheme ? "dark" : "light");
                return newTheme;
            });

            setIsAnimating(false);
        }, 300); // ⬅ el MISMO tiempo que duration-300
    };

    return (
        <ThemeContext.Provider value={{ darkMode, isAnimating, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be inside ThemeProvider");
    return ctx;
}
