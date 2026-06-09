import { useState } from "react";
import useLanguage  from "../data/context/useLanguage";

const links = ["About", "Projects", "Skills", "Contact", "Resume"]

export default function Navbar(){
    const [active, setActive] = useState(false);
    const { toggleLang } = useLanguage()

    return(
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

                <a href="#" className="font-bold text-lg text-gray-900">Alan Labaš</a>

                <ul className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <li key={link}>
                            <a
                                href={`#${link.toLowerCase()}`}
                                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-3">
                    <button
                        onClick={toggleLang}
                        className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    >
                        EN / SL
                    </button>
                    <button
                        onClick={() => setActive(!active)}
                        className="md:hidden text-xl text-gray-700"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {active && (
                <ul className="md:hidden border-t border-gray-200 bg-white px-6 py-4 flex flex-col gap-4">
                    {links.map((link) => (
                        <li key={link}>
                            <a
                                href={`#${link.toLowerCase()}`}
                                onClick={() => setActive(false)}
                                className="block font-medium text-gray-700 hover:text-gray-900"
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}