"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Users,
  Network,
  Shield,
  Brain,
  Building2,
  ArrowRight,
  Truck,
  Calculator,
  Menu,
  X
} from "lucide-react";
import { Logo } from "@/components/ui/logo";

const platformItems = [
  {
    label: "For Brokers",
    href: "/brokers",
    icon: Building2,
    description: "Turn carrier sales into a profit engine"
  },
  {
    label: "For Carriers",
    href: "/carriers",
    icon: Truck,
    description: "Loads that fit your lanes—no spam"
  },
  {
    label: "The Network",
    href: "/network",
    icon: Network,
    description: "Live Supply Graph visualization"
  },
  {
    label: "Friction Tax Calculator",
    href: "/#friction-tax",
    icon: Calculator,
    description: "Calculate your hidden costs"
  }
];

const resourceItems = [
  {
    label: "Security",
    href: "/security",
    icon: Shield,
    description: "Trust layer & auditable actions"
  },
  {
    label: "Intelligence",
    href: "/intelligence",
    icon: Brain,
    description: "AI/ML that creates signal, not noise"
  },
  {
    label: "Company",
    href: "/company",
    icon: Users,
    description: "Our story and team"
  }
];

function NavDropdown({
  label,
  items,
  isOpen,
  onToggle
}: {
  label: string;
  items: typeof platformItems;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1.5 px-3 py-2 text-sm text-slate-300 transition-colors hover:text-white"
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-0 top-full z-50 mt-2 w-72 origin-top-left"
          >
            <div className="rounded-2xl border border-white/10 bg-gray-900/95 p-2 shadow-2xl backdrop-blur-xl">
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onToggle}
                    className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 transition-colors group-hover:border-emerald-500/30 group-hover:bg-emerald-500/15">
                      <Icon className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">
                        {item.label}
                      </div>
                      <div className="mt-0.5 text-xs text-slate-400">
                        {item.description}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function NavBar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-gray-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Logo variant="full" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          <NavDropdown
            label="Platform"
            items={platformItems}
            isOpen={openDropdown === "platform"}
            onToggle={() =>
              setOpenDropdown(openDropdown === "platform" ? null : "platform")
            }
          />
          <NavDropdown
            label="Resources"
            items={resourceItems}
            isOpen={openDropdown === "resources"}
            onToggle={() =>
              setOpenDropdown(openDropdown === "resources" ? null : "resources")
            }
          />
          <Link
            href="/company"
            className="px-3 py-2 text-sm text-slate-300 transition-colors hover:text-white"
          >
            Company
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/#friction-tax"
            className="hidden text-sm text-slate-300 transition-colors hover:text-white md:block"
          >
            Calculate Savings
          </Link>
          <Link
            href="/#demo"
            className="group relative inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25"
          >
            Book a Demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/5 lg:hidden"
          >
            <div className="mx-auto max-w-7xl space-y-1 px-4 py-4">
              <div className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-500">
                Platform
              </div>
              {platformItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-white/5"
                  >
                    <Icon className="h-5 w-5 text-emerald-400" />
                    <span className="text-sm text-slate-200">{item.label}</span>
                  </Link>
                );
              })}

              <div className="mb-3 mt-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                Resources
              </div>
              {resourceItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-white/5"
                  >
                    <Icon className="h-5 w-5 text-emerald-400" />
                    <span className="text-sm text-slate-200">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
