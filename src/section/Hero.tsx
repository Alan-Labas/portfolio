import useLanguage from "../data/context/useLanguage.ts";
import { useInView } from "../hooks/useInView.ts";

export default function Hero() {
    const { t } = useLanguage();
    const ref = useInView<HTMLElement>();

    return (
        <section ref={ref} id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
                {t.hero.greeting}
            </h1>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-xl mb-10">
                {t.hero.subtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                    href="#projects"
                    className="px-6 py-3 bg-accent text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                    {t.hero.cta_projects}
                </a>
                <a
                    href="https://github.com/Alan-Labas"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-colors"
                >
                    {t.hero.cta_github}
                </a>
                <a
                    href={t.hero.cv_link}
                    download
                    className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-colors"
                >
                    {t.hero.cta_cv}
                </a>
            </div>
        </section>
    );
}