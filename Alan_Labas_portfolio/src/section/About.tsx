import useLanguage from "../data/context/useLanguage.ts";

export default function About() {
    const {t} = useLanguage()

    return(
        <section id="about" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">{t.about.title}</h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-xl mb-8">{t.about.description}</p>
        </section>
    )
}