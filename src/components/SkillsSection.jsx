import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

export default function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="My Skills" subtitle="Core Capabilities" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ name, level, icon: Icon }, idx) => (
            <motion.article
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="glass-panel rounded-2xl p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon className="text-brand-500" />
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">{name}</h3>
                </div>
                <span className="text-sm font-semibold text-brand-500">{level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-300 dark:bg-slate-700">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="h-full rounded-full bg-brand-500"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
