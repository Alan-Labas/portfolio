import useLanguage from "../data/context/useLanguage.ts";

export default function Hero(){
    const {t} = useLanguage()
    return(
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">{t.hero.greeting}</h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-xl mb-8">{t.hero.subtitle}</p>

            <div className="flex items-center gap-4">
                <a
                    href="#projects"
                    className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
                >
                    {t.hero.cta_projects}
                </a>
                <a
                    href="https://github.com/Alan-Labas"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:border-gray-500 transition-colors"
                >
                    {t.hero.cta_github}
                </a>
            </div>
        </section>
    )
}