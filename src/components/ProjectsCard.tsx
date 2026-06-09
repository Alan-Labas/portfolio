import type {Project} from "../type/Project.ts";
import useLanguage from "../data/context/useLanguage.ts";

type Props = {
    project: Project
}

export default function ProjectsCard({ project }: Props){
    const {t} = useLanguage()
    return(
        <div className="flex flex-col bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-sm text-gray-500 mb-4 flex-1">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                    <span key={t} className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded-md">
                        {t}
                    </span>
                ))}
            </div>

            <div className="flex items-center gap-4 text-sm font-medium">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                    {t.projects.github}
                </a>
                {project.live && (
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-700 hover:text-gray-900 transition-colors"
                    >
                        {t.projects.live}
                    </a>
                )}
            </div>
        </div>
    )
}