"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { FOOTER, NAV } from "@/lib/copy";

const footerLinks = {
  Platform: NAV.platform.map(item => ({ label: item.label, href: item.href })),
  Resources: NAV.resources.map(item => ({ label: item.label, href: item.href })),
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <Logo variant="mark" className="h-7 w-7" />
              <span className="text-lg font-medium text-white">FleetWorks</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-slate-400">
              {FOOTER.tagline}. {FOOTER.description}
            </p>
            <a
              href={`mailto:${FOOTER.email}`}
              className="mt-4 inline-block text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              {FOOTER.email}
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <div className="text-xs font-medium uppercase tracking-wider text-slate-500">
                {title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <div className="text-xs text-slate-500">
            {FOOTER.copyright}
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy
            </Link>
            <span className="text-slate-700">·</span>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
