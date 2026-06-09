import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from "./data/context/LanguageProvider.tsx";
import { ThemeProvider } from "./data/context/ThemeProvider.tsx";

createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
        <LanguageProvider>
            <App />
        </LanguageProvider>
    </ThemeProvider>
);