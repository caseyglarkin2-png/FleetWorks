"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { NAV } from "@/lib/copy";

function NavDropdown({
  label,
  items,
  isOpen,
  onToggle,
  onClose,
}: {
  label: string;
  items: readonly { label: string; href: string; description: string }[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 px-3 py-2 text-sm text-slate-300 transition-colors hover:text-white"
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={onClose}
              aria-hidden="true"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 top-full z-50 mt-1 w-64"
            >
              <div className="rounded-lg border border-white/10 bg-gray-900/95 p-2 shadow-xl backdrop-blur-xl">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="group flex flex-col gap-0.5 rounded-md px-3 py-2.5 transition-colors hover:bg-white/5"
                  >
                    <span className="text-sm font-medium text-white">
                      {item.label}
                    </span>
                    <span className="text-xs text-slate-500 group-hover:text-slate-400">
                      {item.description}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export function NavBar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeDropdowns = () => {
    setOpenDropdown(null);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-gray-950/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Logo variant="mark" className="h-8 w-8" />
          <span className="text-lg font-medium text-white">FleetWorks</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          <NavDropdown
            label="Platform"
            items={NAV.platform}
            isOpen={openDropdown === "platform"}
            onToggle={() => toggleDropdown("platform")}
            onClose={closeDropdowns}
          />
          <NavDropdown
            label="Resources"
            items={NAV.resources}
            isOpen={openDropdown === "resources"}
            onToggle={() => toggleDropdown("resources")}
            onClose={closeDropdowns}
          />
          <Link
            href="/company"
            className="px-3 py-2 text-sm text-slate-300 transition-colors hover:text-white"
          >
            Company
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/#calculator"
            className="text-sm text-slate-400 transition-colors hover:text-white"
          >
            Calculate Savings
          </Link>
          <Link
            href="/#demo"
            className="btn-primary"
          >
            Book a Demo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/5 hover:text-white md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/5 bg-gray-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              <div className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-500">
                Platform
              </div>
              {NAV.platform.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mb-3 mt-6 text-xs font-medium uppercase tracking-wider text-slate-500">
                Resources
              </div>
              {NAV.resources.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-6 flex flex-col gap-3 border-t border-white/5 pt-6">
                <Link
                  href="/#calculator"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-secondary justify-center"
                >
                  Calculate Savings
                </Link>
                <Link
                  href="/#demo"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary justify-center"
                >
                  Book a Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
