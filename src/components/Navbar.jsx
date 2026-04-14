import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "../data/portfolioData";

export default function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-800/20 bg-slate-950/70 backdrop-blur-md dark:border-slate-100/10 dark:bg-slate-950/70">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#home"
          className="group mr-6 inline-flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
        >
          <img
            src="/CR LOGO.png"
            alt="NeoBitz logo"
            className="h-8 w-auto object-contain sm:h-10"
            loading="eager"
          />
          <span className="hidden text-lg font-extrabold tracking-wide text-slate-900 transition-colors duration-300 dark:text-slate-100 sm:block">
            NeoBitz
          </span>
        </a>

        <ul className="hidden flex-1 items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-sm font-medium text-slate-700 transition-colors duration-300 hover:text-brand-500 dark:text-slate-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="rounded-full border border-slate-300 p-2 text-slate-700 transition-all duration-300 hover:border-brand-500 hover:text-brand-500 dark:border-slate-700 dark:text-slate-200"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="rounded-full border border-slate-300 p-2 text-slate-700 transition-all duration-300 md:hidden dark:border-slate-700 dark:text-slate-200"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-300 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-900 md:hidden">
          <ul className="space-y-3">
            {navLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-slate-700 dark:text-slate-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
