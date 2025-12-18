"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Radio, Layers, Zap, Globe, Activity, Database } from "lucide-react";
import { LiveMatchingVisual } from "@/components/live-matching-visual";

const features = [
  {
    icon: Radio,
    title: "Real-Time Intent",
    description: "Carrier capacity isn't static inventory. It's living intent. We capture it, verify it, and make it queryable."
  },
  {
    icon: Layers,
    title: "Multi-Dimensional Matching",
    description: "Lane preferences, equipment types, rate thresholds, timing windows. All indexed and searchable in milliseconds."
  },
  {
    icon: Database,
    title: "Trust Signals",
    description: "Highway & Truckstop verification, performance history, payment terms. Built into every match decision."
  }
];

const stats = [
  { value: "50K+", label: "Active carriers" },
  { value: "<2s", label: "Match latency" },
  { value: "96%", label: "Reach rate" }
];

export default function NetworkPage() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-gray-950 py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400">
              <Activity className="h-4 w-4" />
              The Network
            </div>
            <h1 className="text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
              Illuminating the
              <br />
              <span className="text-emerald-400">&quot;dark market.&quot;</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300">
              When capacity is unlisted, you&apos;re searching blind. FleetWorks treats
              intent like inventory: living, queryable, and verified.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Supply Graph Visualization */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-semibold text-white">
                The Live Supply Graph
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                A real-time visualization of carrier availability, broker demand,
                and active loads moving through the network. Every node represents
                verified intent.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center"
                  >
                    <div className="text-2xl font-semibold text-emerald-400">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <Link
                  href="/#demo"
                  className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-medium text-white transition-all hover:bg-emerald-400"
                >
                  See It Live
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[500px]"
            >
              <LiveMatchingVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-white/5 bg-gray-950/50 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-semibold text-white">
              From Dark Market to Lit Market
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              The traditional freight market operates in darkness. We bring light.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.02] p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10">
                    <Icon className="h-7 w-7 text-emerald-400" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-slate-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10 p-12 text-center">
            <Globe className="mx-auto h-12 w-12 text-emerald-400" />
            <h2 className="mt-6 text-3xl font-semibold text-white">
              Ready to see your network?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
              Book a demo and we&apos;ll show you exactly how the Supply Graph maps
              to your lanes and carrier base.
            </p>
            <Link
              href="/#demo"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 font-medium text-white transition-all hover:bg-emerald-400"
            >
              Book a Demo
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
