import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import useLanguage from "../data/context/useLanguage";
import useTheme from "../data/context/useTheme";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { t, toggleLang } = useLanguage();
    const { dark, toggleTheme } = useTheme();

    const sectionLinks = [
        { label: t.nav.about,    href: "#about" },
        { label: t.nav.projects, href: "#projects" },
        { label: t.nav.skills,   href: "#skills" },
        { label: t.nav.contact,  href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50 transition-colors">
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

                <a href="#" className="font-bold text-lg text-gray-900 dark:text-gray-100 hover:text-accent transition-colors">
                    Alan Labaš
                </a>

                <ul className="hidden md:flex items-center gap-8">
                    {sectionLinks.map(({ label, href }) => (
                        <li key={href}>
                            <a href={href} className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
                                {label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="/cv.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-medium px-4 py-1.5 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-colors"
                        >
                            {t.nav.resume}
                        </a>
                    </li>
                </ul>

                <div className="flex items-center gap-4">
                    <button onClick={toggleTheme} className="text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors" aria-label="Toggle theme">
                        {dark ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
                    </button>
                    <button onClick={toggleLang} className="text-sm text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
                        EN / SL
                    </button>
                    <button onClick={() => setOpen(!open)} className="md:hidden text-xl text-gray-700 dark:text-gray-300">
                        ☰
                    </button>
                </div>
            </div>

            {open && (
                <ul className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-6 py-4 flex flex-col gap-4">
                    {sectionLinks.map(({ label, href }) => (
                        <li key={href}>
                            <a href={href} onClick={() => setOpen(false)} className="block font-medium text-gray-700 dark:text-gray-300 hover:text-accent transition-colors">
                                {label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="/cv.pdf" target="_blank" rel="noreferrer" className="block font-medium text-gray-700 dark:text-gray-300 hover:text-accent transition-colors">
                            {t.nav.resume}
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
}