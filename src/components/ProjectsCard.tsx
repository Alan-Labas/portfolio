import type { Project } from "../type/Project.ts";
import useLanguage from "../data/context/useLanguage.ts";

type Props = { project: Project };

export default function ProjectsCard({ project }: Props) {
    const { t } = useLanguage();
    return (
        <div className="flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:-translate-y-2 hover:shadow-lg hover:border-accent dark:hover:border-accent transition-all duration-300 cursor-default">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{project.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-1">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(tech => (
                    <span key={tech} className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md">
                        {tech}
                    </span>
                ))}
            </div>

            <div className="flex items-center gap-4 text-sm font-medium">
                <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-accent transition-colors">
                    {t.projects.github}
                </a>
                {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-accent transition-colors">
                        {t.projects.live}
                    </a>
                )}
            </div>
        </div>
    );
}