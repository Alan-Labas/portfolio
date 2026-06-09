import { createContext } from "react";
import type { en } from "../translations/en";

type ContextType = { t: typeof en; toggleLang: () => void }
export const LanguageContext = createContext<ContextType | null>(null)