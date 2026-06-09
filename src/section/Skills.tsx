import useLanguage from "../data/context/useLanguage.ts";
import { FaReact, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
import {
    SiSpringboot, SiTypescript, SiJavascript, SiPostgresql, SiMysql, SiMongodb, SiTailwindcss, SiHtml5, SiCss,
    SiVite
} from "react-icons/si";
import { BiLogoJava } from "react-icons/bi";
import type { IconType } from "react-icons";
import { useInView } from "../hooks/useInView.ts";

type Skill = {
    icon: IconType;
    label: string;
    link: string;
};

const frontend: Skill[] = [
    { icon: FaReact,       label: "React",        link: "https://react.dev" },
    { icon: SiVite,        label: "Vite",         link: "https://vite.dev" },
    { icon: SiTypescript,  label: "TypeScript",   link: "https://www.typescriptlang.org" },
    { icon: SiJavascript,  label: "JavaScript",   link: "https://www.javascript.com" },
    { icon: SiTailwindcss, label: "Tailwind CSS", link: "https://tailwindcss.com" },
    { icon: SiHtml5,       label: "HTML5",        link: "" },
    { icon: SiCss,         label: "CSS3",         link: "" },
];

const backend: Skill[] = [
    { icon: BiLogoJava,   label: "Java",        link: "https://www.java.com/en/" },
    { icon: SiSpringboot, label: "Spring Boot", link: "https://spring.io/projects/spring-boot" },
    { icon: FaNodeJs,     label: "Node.js",     link: "https://nodejs.org/en" },
];

const tools: Skill[] = [
    { icon: FaGitAlt, label: "Git",    link: "https://git-scm.com" },
    { icon: FaDocker, label: "Docker", link: "https://www.docker.com" },
];

const database: Skill[] = [
    { icon: SiPostgresql, label: "PostgreSQL", link: "https://www.postgresql.org" },
    { icon: SiMysql,      label: "MySQL",      link: "https://www.mysql.com" },
    { icon: SiMongodb,    label: "MongoDB",    link: "https://www.mongodb.com" },
];

function SkillCard({ icon: Icon, label, link }: Skill) {
    const card = (
        <div className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-accent dark:hover:border-accent hover:shadow-md transition-all duration-200 w-24">
            <Icon className="text-3xl text-gray-600 dark:text-gray-400 group-hover:text-accent transition-colors" />
            <span className="text-xs text-gray-600 dark:text-gray-400 font-medium text-center">{label}</span>
        </div>
    );

    return link ? (
        <a href={link} target="_blank" rel="noreferrer" className="group">
            {card}
        </a>
    ) : (
        <div className="group">{card}</div>
    );
}

function SkillGroup({ title, skills }: { title: string; skills: Skill[] }) {
    return (
        <div className="w-full max-w-2xl">
            <h2 className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">{title}</h2>
            <div className="flex flex-wrap gap-4">
                {skills.map((s) => <SkillCard key={s.label} {...s} />)}
            </div>
        </div>
    );
}

export default function Skills() {
    const { t } = useLanguage();
    const ref = useInView<HTMLElement>();

    return (
        <section ref={ref} id="skills" className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-12">{t.skills.title}</h1>
            <div className="flex flex-col gap-10 w-full max-w-2xl">
                <SkillGroup title={t.skills.frontend} skills={frontend} />
                <SkillGroup title={t.skills.backend}  skills={backend} />
                <SkillGroup title={t.skills.database} skills={database} />
                <SkillGroup title={t.skills.tools}    skills={tools} />
            </div>
        </section>
    );
}