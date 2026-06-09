import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {LanguageProvider} from "./data/context/LanguageProvider.tsx";

createRoot(document.getElementById('root')!).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,
)
