import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from "./data/context/LanguageProvider.tsx";
import { ThemeProvider } from "./data/context/ThemeProvider.tsx";
import {Analytics} from "@vercel/analytics/react";

createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
        <LanguageProvider>
            <App />
            <Analytics />
        </LanguageProvider>
    </ThemeProvider>
);