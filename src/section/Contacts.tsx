import useLanguage from "../data/context/useLanguage.ts";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useInView } from "../hooks/useInView.ts";

export default function Contacts() {
    const { t } = useLanguage();
    const ref = useInView<HTMLElement>();

    return (
        <section ref={ref} id="contact" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-8">{t.contact.title}</h1>
            <div className="flex flex-row gap-6">
                <a href="https://github.com/Alan-Labas" target="_blank" rel="noreferrer">
                    <FaGithub className="text-4xl text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/alan-labaš-65323b201" target="_blank" rel="noreferrer">
                    <FaLinkedin className="text-4xl text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors" />
                </a>
                <a href="https://www.instagram.com/alanlabas/" target="_blank" rel="noreferrer">
                    <FaInstagram className="text-4xl text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors" />
                </a>
            </div>
        </section>
    );
}