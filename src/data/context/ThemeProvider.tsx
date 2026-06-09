import { useState, useEffect } from "react";
import type React from "react";
import { ThemeContext } from "./ThemeContext.tsx";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
    }, [dark]);

    return (
        <ThemeContext.Provider value={{ dark, toggleTheme: () => setDark(d => !d) }}>
            {children}
        </ThemeContext.Provider>
    );
}