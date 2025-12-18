import Link from "next/link";
import { Logo } from "@/components/ui/logo";

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
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" }
  ]
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Logo variant="full" />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-slate-400">
              The Capacity Orchestration Platform. Stop searching. Start booking.
              Dual-sided AI agents that turn your team into Super Reps.
            </p>
            <div className="mt-6">
              <a
                href="mailto:hello@fleetworks.ai"
                className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                hello@fleetworks.ai
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
              href="/privacy"
              className="text-sm text-slate-500 transition-colors hover:text-slate-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-slate-500 transition-colors hover:text-slate-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
        
        {/* Proposal Credit */}
        <div className="mt-8 flex flex-col items-center justify-center gap-2 border-t border-white/5 pt-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-xs font-medium uppercase tracking-widest text-emerald-400">
              DWTB?! Proposal
            </span>
          </div>
          <p className="mt-2 text-sm text-slate-500">
            Web concept & design proposal for FleetWorks
          </p>
          <p className="text-xs text-slate-600">
            This is a proposal document, not a production website.
          </p>
        </div>
      </div>
    </footer>
  );
}
