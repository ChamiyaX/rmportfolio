import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { typingRoles } from "../data/portfolioData";
import TypingText from "./TypingText";

export default function HeroSection() {
  return (
    <section id="home" className="px-4 pb-16 pt-32 sm:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65 }}
          className="space-y-6"
        >
          <p className="inline-block rounded-full bg-brand-500/10 px-3 py-1 text-sm font-semibold text-brand-500">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl font-bold leading-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Chamidu Rathnayake
          </h1>
          <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-300 sm:text-2xl">
            <TypingText words={typingRoles} />
          </h2>
          <p className="max-w-xl text-slate-600 dark:text-slate-400">
            IT Support Specialist with 9+ years of experience in hardware and software troubleshooting,
            user support, and creative digital solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 font-semibold text-white transition hover:bg-brand-600"
            >
              <Mail size={18} />
              Hire Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="mx-auto w-full max-w-sm"
        >
          <div className="glass-panel overflow-hidden rounded-3xl p-3">
            <img
              src="/rmc.jpg"
              alt="Chamidu Rathnayake"
              className="h-[420px] w-full rounded-2xl object-cover"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
