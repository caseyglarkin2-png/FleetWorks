"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Lock,
  Eye,
  FileCheck,
  UserCheck,
  AlertTriangle,
  CheckCircle2,
  BadgeCheck
} from "lucide-react";

const trustPrinciples = [
  {
    icon: Eye,
    title: "Transparent by Default",
    description: "Every action taken by our agents is logged, timestamped, and attributable. No black boxes."
  },
  {
    icon: UserCheck,
    title: "Verified Identity",
    description: "Integration with Highway and Truckstop ensures every carrier in our network is who they say they are."
  },
  {
    icon: FileCheck,
    title: "Auditable Actions",
    description: "Full audit trail for every match, every communication, every decision. Compliance-ready from day one."
  },
  {
    icon: AlertTriangle,
    title: "Human Escalation",
    description: "Edge cases route to humans. Agents don't make decisions outside their confidence bounds."
  }
];

const certifications = [
  { name: "Highway Verified", icon: BadgeCheck },
  { name: "Truckstop Verified", icon: BadgeCheck },
  { name: "SOC 2 Type II", icon: Shield },
  { name: "GDPR Compliant", icon: Lock }
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
              <Shield className="h-4 w-4" />
              Security & Trust
            </div>
            <h1 className="text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
              Trust is the
              <br />
              <span className="text-purple-400">currency.</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300">
              In freight, a broken promise costs real money. FleetWorks builds
              trust into every layer—verified identity, auditable actions, and
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
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10">
                    <Icon className="h-7 w-7 text-purple-400" />
                  </div>
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
                  <Icon className="h-8 w-8 text-emerald-400" />
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
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/#demo"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-medium text-white transition-all hover:bg-emerald-400"
              >
                See Our Trust Layer
                <ArrowRight className="h-5 w-5" />
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
