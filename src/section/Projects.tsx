import { projects } from "../data/projects.ts";
import ProjectsCard from "../components/ProjectsCard.tsx";
import useLanguage from "../data/context/useLanguage.ts";
import { useInView } from "../hooks/useInView.ts";

export default function Projects() {
    const { t } = useLanguage();
    const ref = useInView<HTMLElement>();

    return (
        <section ref={ref} id="projects" className="py-24 px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">{t.projects.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map(p => (
                        <ProjectsCard key={p.id} project={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}