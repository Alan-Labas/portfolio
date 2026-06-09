import useLanguage from "../data/context/useLanguage.ts";
import { FaGithub, FaLinkedin,FaInstagram } from "react-icons/fa"

export default function Contacts() {
    const {t} = useLanguage()
    return(
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">{t.contact.title}</h1>
            <a href="https://github.com/Alan-Labas" target="_blank" rel="noreferrer" className="ml-2"><FaGithub className="text-4xl text-gray-500 hover:text-gray-700 transition-colors mb-4" /></a>
            <a href="https://www.linkedin.com/in/alan-vunic-65323b201/" target="_blank" rel="noreferrer" className="ml-2"><FaLinkedin className="text-4xl text-gray-500 hover:text-gray-700 transition-colors mb-4" /></a>
            <a href="https://www.instagram.com/alanlabas/"><FaInstagram className="text-4xl text-gray-500 hover:text-gray-700 transition-colors mb-4" /></a>
        </section>
    )
}