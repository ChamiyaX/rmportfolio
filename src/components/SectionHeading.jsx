import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">{subtitle}</p>
      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">{title}</h2>
    </motion.div>
  );
}
