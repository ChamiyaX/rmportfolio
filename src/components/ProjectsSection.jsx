import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { projects } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const filters = ["All", "Web", "App", "Design"];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="bg-slate-100/60 px-4 py-20 dark:bg-slate-900/40 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Featured Projects" subtitle="Portfolio Work" />

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "bg-brand-500 text-white"
                  : "bg-slate-200 text-slate-700 hover:bg-brand-500 hover:text-white dark:bg-slate-800 dark:text-slate-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35 }}
                className="group glass-panel overflow-hidden rounded-2xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 p-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{project.description}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
