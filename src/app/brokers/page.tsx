"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FlowChart,
  FlowDollar,
  FlowClock,
  FlowBroker,
  FlowCheck,
  FlowArrow,
  FlowIconContainer,
} from "@/components/ui/flow-icons";

// Note: metadata is in brokers/layout.tsx

const benefits = [
  {
    icon: FlowChart,
    iconColor: "blue" as const,
    value: "30%",
    label: "More loads per rep",
    description: "Stop searching, start booking. Your reps cover more loads with less effort."
  },
  {
    icon: FlowDollar,
    iconColor: "emerald" as const,
    value: "1-4%",
    label: "Margin expansion",
    description: "Better matches mean better rates. Margin goes up when friction goes down."
  },
  {
    icon: FlowClock,
    iconColor: "amber" as const,
    value: "< 2 min",
    label: "Average response time",
    description: "Carriers respond faster when you're reaching them with relevant loads."
  }
];

const useCases = [
  {
    title: "Carrier Sales Teams",
    description: "Turn your carrier sales team from cost center to profit engine. FleetWorks handles the search; your team handles the relationships.",
    outcomes: [
      "30% lift in loads per rep",
      "Reduced time-to-cover",
      "Better carrier relationships"
    ]
  },
  {
    title: "Operations Leaders",
    description: "Real-time visibility into capacity availability. Know what's covered, what's at risk, and where to focus before fires start.",
    outcomes: [
      "Proactive capacity management",
      "Reduced service failures",
      "Data-driven decisions"
    ]
  },
  {
    title: "Finance & Strategy",
    description: "Predictable margin expansion. FleetWorks doesn't just move freight. It moves the needle on your P&L.",
    outcomes: [
      "Measurable ROI",
      "Margin capture",
      "Unit economics improvement"
    ]
  }
];

export default function BrokersPage() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-gray-950 py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-blue-500/15 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400">
              <FlowBroker className="h-4 w-4" color="blue" />
              For Brokers
            </div>
            <h1 className="text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
              From cost center to
              <br />
              <span className="text-blue-400">profit engine.</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300">
              FleetWorks transforms your carrier sales team into Super Reps.
              Same headcount, more loads, better margins.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/#demo"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-medium text-white transition-all hover:bg-emerald-400"
              >
                Book a Demo
                <FlowArrow className="h-5 w-5 transition-transform group-hover:translate-x-1" color="white" />
              </Link>
              <Link
                href="/#friction-tax"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition-all hover:bg-white/10"
              >
                Calculate ROI
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center"
                >
                  <div className="mx-auto">
                    <FlowIconContainer color={benefit.iconColor} size="lg">
                      <Icon className="h-7 w-7" color={benefit.iconColor} animated />
                    </FlowIconContainer>
                  </div>
                  <div className="mt-6 text-4xl font-semibold text-emerald-400">
                    {benefit.value}
                  </div>
                  <div className="mt-2 font-medium text-white">{benefit.label}</div>
                  <p className="mt-3 text-sm text-slate-400">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="border-y border-white/5 bg-gray-950/50 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-semibold text-white">
              Built for Every Stakeholder
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Whether you&apos;re on the floor or in the boardroom, FleetWorks moves
              the metrics that matter.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {useCases.map((uc, idx) => (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-8"
              >
                <h3 className="text-xl font-semibold text-white">{uc.title}</h3>
                <p className="mt-3 text-slate-400">{uc.description}</p>
                <ul className="mt-6 space-y-3">
                  {uc.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-center gap-3">
                      <FlowCheck className="h-5 w-5" color="emerald" />
                      <span className="text-sm text-slate-300">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Outcome */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-semibold text-white">
                The outcome you can sell:
                <br />
                <span className="text-emerald-400">Margin capture + loads per headcount.</span>
              </h2>
              <p className="mt-6 text-lg text-slate-300">
                Not &quot;AI calls.&quot; Not &quot;automation.&quot; The metrics your CFO cares
                about: more loads per rep, better gross margins, and predictable
                capacity coverage.
              </p>
              <p className="mt-4 text-lg text-slate-300">
                FleetWorks doesn&apos;t replace your team. It amplifies them. Same
                headcount, Super Rep output.
              </p>

              <Link
                href="/#demo"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-medium text-white transition-all hover:bg-emerald-400"
              >
                See It In Action
                <FlowArrow className="h-5 w-5" color="white" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-8"
            >
              <FlowChart className="h-12 w-12" color="blue" animated />
              <h3 className="mt-6 text-xl font-semibold text-white">
                What Your Peers Are Seeing
              </h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-slate-400">Loads per rep / day</span>
                  <span className="font-mono text-emerald-400">+2.3 avg</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-slate-400">Time to cover</span>
                  <span className="font-mono text-emerald-400">-47%</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-slate-400">Gross margin</span>
                  <span className="font-mono text-emerald-400">+2.1pts</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Carrier response rate</span>
                  <span className="font-mono text-emerald-400">96%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
