"use client";

import { motion } from "framer-motion";
import { FileText, Layers, Palette, Code2, Rocket } from "lucide-react";

const sections = [
  { id: "hero", label: "Hero", icon: Rocket },
  { id: "platform", label: "Platform", icon: Layers },
  { id: "calculator", label: "Calculator", icon: FileText },
  { id: "design", label: "Design System", icon: Palette },
  { id: "tech", label: "Tech Stack", icon: Code2 },
];

interface ProposalNavProps {
  activeSection?: string;
}

export function ProposalNav({ activeSection = "hero" }: ProposalNavProps) {
  return (
    <nav className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex items-center gap-1 rounded-full border border-white/10 bg-gray-900/90 p-1.5 backdrop-blur-xl"
      >
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all ${
                isActive
                  ? "bg-white/10 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden sm:inline">{section.label}</span>
            </a>
          );
        })}
      </motion.div>
    </nav>
  );
}
