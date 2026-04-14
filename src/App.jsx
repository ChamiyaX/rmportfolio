import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";
import useTheme from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      {/* Sticky Navigation */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-4 py-6 text-center text-sm text-slate-600 dark:border-slate-800 dark:text-slate-400">
        © {new Date().getFullYear()} Chamidu Rathnayake. All rights reserved.
      </footer>

      {/* Scroll to top button */}
      <ScrollToTopButton />
    </div>
  );
}
