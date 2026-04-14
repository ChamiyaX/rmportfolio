import {
  AppWindow,
  Brush,
  Cpu,
  Image as ImageIcon,
  Laptop,
  Monitor,
  Palette,
  PlayCircle,
  Settings,
  Terminal,
  Wrench
} from "lucide-react";

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" }
];

export const typingRoles = ["Tech Enthusiast", "Problem Solver", "Creative Builder"];

export const skills = [
  { name: "Graphic Design", level: 90, icon: Palette },
  { name: "Video Editing", level: 85, icon: PlayCircle },
  { name: "Photo Editing", level: 88, icon: ImageIcon },
  { name: "App Development", level: 78, icon: AppWindow },
  { name: "Linux", level: 82, icon: Terminal },
  { name: "MS Office", level: 92, icon: Monitor },
  { name: "Computer Repair", level: 95, icon: Wrench }
];

export const projects = [
  {
    title: "IT Helpdesk Dashboard",
    description: "A responsive support dashboard for ticket tracking and issue prioritization.",
    category: "Web",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Device Service Tracker",
    description: "Cross-platform app to manage hardware repair lifecycle and customer updates.",
    category: "App",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Creative Brand Kit",
    description: "Visual identity design package with social graphics and marketing templates.",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1452802447250-470a88ac82bc?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Inventory Monitor",
    description: "Web tool for tracking stock, service parts, and procurement records.",
    category: "Web",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Field Support Companion",
    description: "Mobile-first app for technicians to report diagnostics and repair outcomes.",
    category: "App",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Campaign Artwork Pack",
    description: "Design assets crafted for product launches, event promos, and ads.",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
  }
];

export const services = [
  {
    title: "IT Support",
    description: "Reliable troubleshooting for desktops, laptops, software, and network basics.",
    icon: Cpu
  },
  {
    title: "Web/App Development",
    description: "Build responsive web and app solutions tailored for business workflows.",
    icon: Laptop
  },
  {
    title: "Graphic Design",
    description: "Create impactful visuals for branding, social media, and digital campaigns.",
    icon: Brush
  },
  {
    title: "Hardware Repair",
    description: "Hands-on diagnostics and repair for smooth and stable device performance.",
    icon: Settings
  }
];
