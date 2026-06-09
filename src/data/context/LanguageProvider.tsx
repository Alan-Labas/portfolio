import {useState} from 'react';
import type React from 'react';
import {en} from "../translations/en.ts";
import {sl} from "../translations/sl.ts";
import {LanguageContext} from "./LanguageContext.tsx";

type Lang = "en" | "sl"
const translations = {en, sl}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Lang>("en")
    const t = translations[lang]
    const toggleLang = () => setLang(lang === "en" ? "sl" : "en")

    return(
        <LanguageContext.Provider value={{t, toggleLang}}>
            {children}
        </LanguageContext.Provider>
    )
}