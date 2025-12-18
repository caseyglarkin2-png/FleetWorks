import Link from "next/link";
import { Layers, Twitter, Linkedin, Github } from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "For Brokers", href: "/brokers" },
    { label: "For Carriers", href: "/carriers" },
    { label: "The Network", href: "/network" },
    { label: "Calculator", href: "/#friction-tax" }
  ],
  Resources: [
    { label: "Security", href: "/security" },
    { label: "Intelligence", href: "/intelligence" },
    { label: "Company", href: "/company" }
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" }
  ]
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10">
                <Layers className="h-5 w-5 text-emerald-400" />
              </div>
              <span className="text-xl font-semibold text-white">FleetWorks</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-slate-400">
              The Capacity Orchestration Platform. Stop searching. Start booking.
              Dual-sided AI agents that turn your team into Super Reps.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <div className="text-sm font-medium text-white">{title}</div>
              <ul className="mt-4 space-y-3">
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
          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} FleetWorks. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-slate-500 transition-colors hover:text-slate-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-slate-500 transition-colors hover:text-slate-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
