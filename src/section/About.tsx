import useLanguage from "../data/context/useLanguage.ts";
import { useInView } from "../hooks/useInView.ts";

export default function About() {
    const { t } = useLanguage();
    const ref = useInView<HTMLElement>();

    return (
        <section ref={ref} id="about" className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
            <div className="w-full max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-8">{t.about.title}</h1>
                <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-10">{t.about.bio}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                        <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">{t.about.location_label}</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{t.about.location}</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                        <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">{t.about.education_label}</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{t.about.education}</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                        <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">{t.about.status_label}</p>
                        <p className="text-sm font-medium text-accent">{t.about.status}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}