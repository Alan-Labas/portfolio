import useLanguage from "../data/context/useLanguage.ts";

export default function Skills() {
    const {t} = useLanguage()
    return(
        <section id="skills" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">{t.skills.title}</h1>
        </section>
    )
}