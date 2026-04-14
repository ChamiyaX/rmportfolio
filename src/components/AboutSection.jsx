import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const strengths = [
  "User-focused technical troubleshooting",
  "Cross-functional communication",
  "Creative design execution",
  "Reliable system maintenance"
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-slate-100/60 px-4 py-20 dark:bg-slate-900/40 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About Me" subtitle="Professional Profile" />
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="glass-panel rounded-2xl p-6"
          >
            <p className="leading-7 text-slate-700 dark:text-slate-300">
              I am Chamidu Rathnayake, an IT Support Specialist with more than four years of hands-on
              experience in technical support, hardware and software troubleshooting, and
              productivity-focused IT operations. I combine strong problem-solving with design and
              development skills to deliver practical, user-friendly digital outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel rounded-2xl p-6"
          >
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">Strengths</h3>
            <ul className="space-y-3">
              {strengths.map((item) => (
                <li key={item} className="rounded-xl bg-slate-200/60 px-4 py-3 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
