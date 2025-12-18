"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Zap,
  Target,
  BarChart3,
  Cpu,
  Sparkles,
  TrendingUp
} from "lucide-react";

const capabilities = [
  {
    icon: Target,
    title: "Intent Prediction",
    description: "ML models that predict carrier availability before they even post. Based on historical patterns, lane preferences, and timing signals."
  },
  {
    icon: BarChart3,
    title: "Rate Intelligence",
    description: "Real-time rate predictions that factor in seasonality, fuel costs, lane density, and market conditions."
  },
  {
    icon: Cpu,
    title: "Match Optimization",
    description: "Multi-factor optimization that balances rate, reliability, and relationship history to find the best match. Not just the cheapest."
  },
  {
    icon: Sparkles,
    title: "Natural Language Interface",
    description: "Carriers interact via text or voice. No apps, no portals. Just natural conversation that captures intent accurately."
  }
];

const differentiators = [
  {
    theirs: "Automate outreach",
    ours: "Automate matching",
    outcome: "Fewer calls, better outcomes"
  },
  {
    theirs: "Call more carriers",
    ours: "Call the right carriers",
    outcome: "Signal, not noise"
  },
  {
    theirs: "Speed up search",
    ours: "Eliminate search",
    outcome: "Intent meets capacity"
  }
];

export default function IntelligencePage() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-gray-950 py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/3 top-0 h-[500px] w-[600px] rounded-full bg-blue-500/10 blur-[100px]" />
          <div className="absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400">
              <Brain className="h-4 w-4" />
              Intelligence
            </div>
            <h1 className="text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
              AI that creates
              <br />
              <span className="text-blue-400">signal, not noise.</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300">
              Most freight AI just calls more carriers faster. That creates
              congestion. FleetWorks intelligence creates liquidity by matching
              verified intent to verified capacity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Friction Tax */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-400">
                <TrendingUp className="h-4 w-4" />
                The Friction Tax
              </div>
              <h2 className="mt-6 text-3xl font-semibold text-white">
                Search friction is eating your margin.
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Every hour your reps spend searching is margin lost. Every call to
                a carrier who isn&apos;t interested is wasted capacity. The freight
                market&apos;s default mode (searching, calling, negotiating) is a
                hidden tax on your business.
              </p>
              <p className="mt-4 text-lg text-slate-300">
                We call it the <span className="font-semibold text-white">Friction Tax</span>.
                And most brokerages are paying it every single day without realizing it.
              </p>

              <Link
                href="/#friction-tax"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-medium text-white transition-all hover:bg-emerald-400"
              >
                Calculate Your Friction Tax
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {differentiators.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                >
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-slate-500">
                        Others
                      </div>
                      <div className="mt-2 text-sm text-slate-400">
                        {item.theirs}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-emerald-400">
                        FleetWorks
                      </div>
                      <div className="mt-2 text-sm font-medium text-white">
                        {item.ours}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-slate-500">
                        Outcome
                      </div>
                      <div className="mt-2 text-sm text-emerald-400">
                        {item.outcome}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="border-y border-white/5 bg-gray-950/50 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-semibold text-white">
              Intelligence Capabilities
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Purpose-built ML models trained on freight market dynamics.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.02] p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
                    <Icon className="h-7 w-7 text-blue-400" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {cap.title}
                  </h3>
                  <p className="mt-3 text-slate-400">{cap.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-500/10 p-12 text-center">
            <Zap className="mx-auto h-12 w-12 text-emerald-400" />
            <h2 className="mt-6 text-3xl font-semibold text-white">
              Ready to stop paying the Friction Tax?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
              See how FleetWorks intelligence transforms your carrier sales team
              into Super Reps.
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
