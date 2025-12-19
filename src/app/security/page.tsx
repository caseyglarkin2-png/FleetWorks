"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FlowTrust,
  FlowCheck,
  FlowArrow,
  FlowIconContainer,
} from "@/components/ui/flow-icons";

// Custom security-specific icons
function FlowEye({ className = "h-6 w-6", color = "purple" }: { className?: string; color?: string }) {
  const gradients: Record<string, { from: string; to: string }> = {
    purple: { from: "#a78bfa", to: "#7c3aed" },
    emerald: { from: "#34d399", to: "#059669" },
  };
  const grad = gradients[color] || gradients.purple;
  const id = `floweye-${Math.random().toString(36).slice(2)}`;
  
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={grad.from} />
          <stop offset="100%" stopColor={grad.to} />
        </linearGradient>
      </defs>
      <ellipse cx="16" cy="16" rx="13" ry="8" stroke={`url(#${id})`} strokeWidth="2" fill="none" />
      <circle cx="16" cy="16" r="5" stroke={`url(#${id})`} strokeWidth="2" fill="none" />
      <circle cx="16" cy="16" r="2" fill={`url(#${id})`} />
    </svg>
  );
}

function FlowUserCheck({ className = "h-6 w-6", color = "purple" }: { className?: string; color?: string }) {
  const gradients: Record<string, { from: string; to: string }> = {
    purple: { from: "#a78bfa", to: "#7c3aed" },
    emerald: { from: "#34d399", to: "#059669" },
  };
  const grad = gradients[color] || gradients.purple;
  const id = `flowuserchk-${Math.random().toString(36).slice(2)}`;
  
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={grad.from} />
          <stop offset="100%" stopColor={grad.to} />
        </linearGradient>
      </defs>
      <circle cx="12" cy="10" r="4" stroke={`url(#${id})`} strokeWidth="2" fill="none" />
      <path d="M4 26C4 22 7.6 18 12 18C14.5 18 16.8 19 18.5 20.5" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M20 22L23 25L28 18" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function FlowAudit({ className = "h-6 w-6", color = "purple" }: { className?: string; color?: string }) {
  const gradients: Record<string, { from: string; to: string }> = {
    purple: { from: "#a78bfa", to: "#7c3aed" },
    emerald: { from: "#34d399", to: "#059669" },
  };
  const grad = gradients[color] || gradients.purple;
  const id = `flowaudit-${Math.random().toString(36).slice(2)}`;
  
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={grad.from} />
          <stop offset="100%" stopColor={grad.to} />
        </linearGradient>
      </defs>
      <rect x="6" y="4" width="20" height="24" rx="2" stroke={`url(#${id})`} strokeWidth="2" fill="none" />
      <path d="M10 10H18" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" />
      <path d="M10 16H22" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" />
      <path d="M10 22H20" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" />
      <circle cx="22" cy="10" r="1.5" fill={`url(#${id})`} />
    </svg>
  );
}

function FlowAlert({ className = "h-6 w-6", color = "purple" }: { className?: string; color?: string }) {
  const gradients: Record<string, { from: string; to: string }> = {
    purple: { from: "#a78bfa", to: "#7c3aed" },
    amber: { from: "#fbbf24", to: "#f59e0b" },
  };
  const grad = gradients[color] || gradients.purple;
  const id = `flowalert-${Math.random().toString(36).slice(2)}`;
  
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={grad.from} />
          <stop offset="100%" stopColor={grad.to} />
        </linearGradient>
      </defs>
      <path d="M16 4L28 26H4L16 4Z" stroke={`url(#${id})`} strokeWidth="2" strokeLinejoin="round" fill="none" />
      <line x1="16" y1="12" x2="16" y2="18" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="22" r="1.5" fill={`url(#${id})`} />
    </svg>
  );
}

function FlowBadge({ className = "h-6 w-6", color = "emerald" }: { className?: string; color?: string }) {
  const gradients: Record<string, { from: string; to: string }> = {
    emerald: { from: "#34d399", to: "#059669" },
    purple: { from: "#a78bfa", to: "#7c3aed" },
  };
  const grad = gradients[color] || gradients.emerald;
  const id = `flowbadge-${Math.random().toString(36).slice(2)}`;
  
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={grad.from} />
          <stop offset="100%" stopColor={grad.to} />
        </linearGradient>
      </defs>
      <path d="M16 4L19 10L26 11L21 16L22 23L16 20L10 23L11 16L6 11L13 10L16 4Z" stroke={`url(#${id})`} strokeWidth="2" strokeLinejoin="round" fill="none" />
      <path d="M12 16L15 19L20 13" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FlowLock({ className = "h-6 w-6", color = "purple" }: { className?: string; color?: string }) {
  const gradients: Record<string, { from: string; to: string }> = {
    purple: { from: "#a78bfa", to: "#7c3aed" },
    emerald: { from: "#34d399", to: "#059669" },
  };
  const grad = gradients[color] || gradients.purple;
  const id = `flowlock-${Math.random().toString(36).slice(2)}`;
  
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={grad.from} />
          <stop offset="100%" stopColor={grad.to} />
        </linearGradient>
      </defs>
      <rect x="6" y="14" width="20" height="14" rx="2" stroke={`url(#${id})`} strokeWidth="2" fill="none" />
      <path d="M10 14V10C10 6.7 12.7 4 16 4C19.3 4 22 6.7 22 10V14" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="16" cy="21" r="2" fill={`url(#${id})`} />
    </svg>
  );
}

// Note: metadata is in security/layout.tsx

const trustPrinciples = [
  {
    icon: FlowEye,
    iconColor: "purple" as const,
    title: "Transparent by Default",
    description: "Every action taken by our agents is logged, timestamped, and attributable. No black boxes."
  },
  {
    icon: FlowUserCheck,
    iconColor: "purple" as const,
    title: "Verified Identity",
    description: "Integration with Highway and Truckstop ensures every carrier in our network is who they say they are."
  },
  {
    icon: FlowAudit,
    iconColor: "purple" as const,
    title: "Auditable Actions",
    description: "Full audit trail for every match, every communication, every decision. Compliance-ready from day one."
  },
  {
    icon: FlowAlert,
    iconColor: "amber" as const,
    title: "Human Escalation",
    description: "Edge cases route to humans. Agents don't make decisions outside their confidence bounds."
  }
];

const certifications = [
  { name: "Highway Verified", icon: FlowBadge, color: "emerald" as const },
  { name: "Truckstop Verified", icon: FlowBadge, color: "emerald" as const },
  { name: "SOC 2 Type II", icon: FlowTrust, color: "purple" as const },
  { name: "GDPR Compliant", icon: FlowLock, color: "purple" as const }
];

export default function SecurityPage() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-gray-950 py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[100px]" />
          <div className="absolute right-1/4 top-20 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-400">
              <FlowTrust className="h-4 w-4" color="purple" />
              Security & Trust
            </div>
            <h1 className="text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
              Trust is the
              <br />
              <span className="text-purple-400">currency.</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300">
              In freight, a broken promise costs real money. FleetWorks builds
              trust into every layer: verified identity, auditable actions, and
              human escalation paths.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Principles */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-semibold text-white">
              Signal, Not Noise
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              AI without accountability creates faster ways to make bad decisions.
              We anchor every action in trust.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {trustPrinciples.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.02] p-8"
                >
                  <FlowIconContainer color={principle.iconColor === "amber" ? "amber" : "purple"} size="lg">
                    <Icon className="h-7 w-7" color={principle.iconColor} />
                  </FlowIconContainer>
                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-slate-400">{principle.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="border-y border-white/5 bg-gray-950/50 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-semibold text-white">
              Compliance & Certifications
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Enterprise-grade security, verified at every level.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {certifications.map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center"
                >
                  <Icon className="h-8 w-8" color={cert.color} />
                  <span className="mt-3 text-sm font-medium text-white">
                    {cert.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Trust Layer */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-semibold text-white">
                The Trust Layer
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                FleetWorks isn&apos;t just faster automation. It&apos;s automation you can
                trust. Every match flows through our trust layer before it reaches
                your team.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Carrier identity verified via Highway + Truckstop",
                  "Insurance and authority validated in real-time",
                  "Performance history indexed and scored",
                  "Payment terms and track record transparent"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <FlowCheck className="mt-0.5 h-5 w-5 shrink-0" color="emerald" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/#demo"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-medium text-white transition-all hover:bg-emerald-400"
              >
                See Our Trust Layer
                <FlowArrow className="h-5 w-5" color="white" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-8"
            >
              <div className="text-xs uppercase tracking-wider text-slate-500">
                Trust Architecture
              </div>
              <div className="mt-6 space-y-4">
                {[
                  { step: "01", label: "Intent Capture", desc: "Verified carrier submits availability" },
                  { step: "02", label: "Identity Check", desc: "Highway/Truckstop verification" },
                  { step: "03", label: "Authority Validation", desc: "Real-time MC/DOT validation" },
                  { step: "04", label: "Trust Score", desc: "Performance history indexed" },
                  { step: "05", label: "Match Ready", desc: "Carrier enters Supply Graph" }
                ].map((item, idx) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-purple-500/20 bg-purple-500/10 text-sm font-mono font-medium text-purple-400">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-medium text-white">{item.label}</div>
                      <div className="text-sm text-slate-400">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
