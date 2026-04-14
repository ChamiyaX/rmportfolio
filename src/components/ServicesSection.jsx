import { motion } from "framer-motion";
import { services } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-slate-100/60 px-4 py-20 dark:bg-slate-900/40 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Services" subtitle="What I Offer" />
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map(({ title, description, icon: Icon }, idx) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-panel rounded-2xl p-6"
            >
              <Icon className="mb-4 text-brand-500" size={28} />
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
