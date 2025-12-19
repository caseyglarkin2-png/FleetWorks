"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FlowCapacity,
  FlowMessage,
  FlowBlock,
  FlowRoute,
  FlowClock,
  FlowCheck,
  FlowArrow,
  FlowIconContainer,
} from "@/components/ui/flow-icons";

// Note: metadata is in carriers/layout.tsx

const benefits = [
  {
    icon: FlowMessage,
    iconColor: "amber" as const,
    title: "Text or Voice. That's It.",
    description: "No apps to download. No portals to log into. Just tell us your lanes, your rates, and your availability. Via text or call."
  },
  {
    icon: FlowBlock,
    iconColor: "slate" as const,
    title: "No Spam. Ever.",
    description: "We only reach out when there's a load that actually fits your preferences. Your phone isn't a telemarketing target."
  },
  {
    icon: FlowRoute,
    iconColor: "emerald" as const,
    title: "Loads That Fit Your Lanes",
    description: "Tell us where you like to run and what rates work. We match you with freight that fits. Not freight that doesn't."
  },
  {
    icon: FlowClock,
    iconColor: "blue" as const,
    title: "Real-Time Updates",
    description: "When your availability changes, tell us. When a load moves, we'll tell you. Simple, two-way communication."
  }
];

const howItWorks = [
  {
    step: "01",
    title: "Tell Us Your Preferences",
    description: "Text us your preferred lanes, equipment type, and rate thresholds. Takes 2 minutes."
  },
  {
    step: "02",
    title: "Get Matched",
    description: "When a load fits your criteria, we reach out. No more endless scrolling through load boards."
  },
  {
    step: "03",
    title: "Confirm & Go",
    description: "If the load works, confirm it. If not, no pressure. We'll find the next one."
  }
];

export default function CarriersPage() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-gray-950 py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-amber-500/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-400">
              <FlowCapacity className="h-4 w-4" color="amber" />
              For Carriers
            </div>
            <h1 className="text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
              Your capacity.
              <br />
              Their demand.
              <br />
              <span className="text-amber-400">Matched.</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300">
              Stop waiting for calls. Stop scrolling load boards. FleetWorks
              surfaces loads that fit your lanes. Via text or voice. No apps. No
              spam. Just freight that works.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/#demo"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-medium text-white transition-all hover:bg-emerald-400"
              >
                Get Started
                <FlowArrow className="h-5 w-5 transition-transform group-hover:translate-x-1" color="white" />
              </Link>
              <Link
                href="/network"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition-all hover:bg-white/10"
              >
                <FlowCapacity className="h-5 w-5" color="amber" />
                Explore the Network
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-semibold text-white">
              The Dispatcher That Works For You
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              FleetWorks acts like a dispatcher that knows your preferences and
              only calls when there&apos;s a load worth hauling.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.02] p-8"
                >
                  <FlowIconContainer color={benefit.iconColor} size="lg">
                    <Icon className="h-7 w-7" color={benefit.iconColor} />
                  </FlowIconContainer>
                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-slate-400">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-y border-white/5 bg-gray-950/50 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-semibold text-white">How It Works</h2>
            <p className="mt-4 text-lg text-slate-400">
              Getting started takes 2 minutes. No downloads, no sign-ups, no
              hassle.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {howItWorks.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10 font-mono text-2xl font-semibold text-amber-400">
                  {step.step}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-slate-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Carriers Love Us */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-semibold text-white">
                Why Carriers Choose FleetWorks
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                We built FleetWorks because we know the market is broken. Carriers
                get spammed with loads that don&apos;t fit. Brokers waste time calling
                carriers who aren&apos;t available. Everyone loses.
              </p>
              <p className="mt-4 text-lg text-slate-300">
                FleetWorks fixes this by matching verified intent. We only connect
                you with loads that actually fit your operation. And we never spam.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Respect your time. No spam calls",
                  "Loads that fit your lanes and rates",
                  "Simple text/voice interface",
                  "Quick payment from verified brokers"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <FlowCheck className="h-5 w-5" color="emerald" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-8"
            >
              <div className="text-xs uppercase tracking-wider text-slate-500">
                Sample Interaction
              </div>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl rounded-bl-none border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-slate-500">FleetWorks</div>
                  <div className="mt-1 text-slate-300">
                    Hey! Got a CHI→LAX dry van, 45k lbs, pays $3,200. Pickup
                    tomorrow 8AM. Fits your lane. Interested?
                  </div>
                </div>
                <div className="rounded-2xl rounded-br-none border border-amber-500/20 bg-amber-500/10 p-4 text-right">
                  <div className="text-xs text-amber-400">You</div>
                  <div className="mt-1 text-slate-300">Yeah I can do that</div>
                </div>
                <div className="rounded-2xl rounded-bl-none border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-slate-500">FleetWorks</div>
                  <div className="mt-1 text-slate-300">
                    Done. Rate con coming to your email. Safe travels 🚛
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-950/50 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-amber-500/10 via-transparent to-emerald-500/10 p-12 text-center">
            <FlowCapacity className="mx-auto h-12 w-12" color="amber" animated />
            <h2 className="mt-6 text-3xl font-semibold text-white">
              Ready to get loads that actually fit?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
              Text us your preferences and start getting matched with freight
              that works for your operation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/#demo"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 font-medium text-white transition-all hover:bg-emerald-400"
              >
                Get Started
                <FlowArrow className="h-5 w-5" color="white" />
              </Link>
              <Link
                href="/#friction-tax"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-medium text-white transition-all hover:bg-white/10"
              >
                <FlowMessage className="h-5 w-5" color="blue" />
                See the Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
