"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, Target, Zap, Building2 } from "lucide-react";

// Note: metadata is in company/layout.tsx

const values = [
  {
    icon: Target,
    title: "Signal Over Noise",
    description: "We don't believe in louder. We believe in smarter. Every feature we build is designed to create signal, not noise."
  },
  {
    icon: Zap,
    title: "Match First, Engage Second",
    description: "The industry default is to automate outreach. We automate matching. Engagement happens after the match is probable."
  },
  {
    icon: Users,
    title: "Humans In The Loop",
    description: "AI handles the search. Humans handle the relationships. Edge cases escalate to people, not algorithms."
  }
];

const team = [
  {
    name: "Founder",
    role: "CEO",
    bio: "Built and scaled carrier networks at major brokerages. Knows the friction firsthand."
  },
  {
    name: "Co-Founder",
    role: "CTO",
    bio: "Ex-ML lead at a top logistics platform. Built the intent matching engine."
  },
  {
    name: "Team",
    role: "Growing",
    bio: "Engineers, operators, and freight veterans building the future of capacity."
  }
];

export default function CompanyPage() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-gray-950 py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300">
              <Building2 className="h-4 w-4" />
              Company
            </div>
            <h1 className="text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
              Building the
              <br />
              <span className="text-emerald-400">signal layer</span> for freight.
            </h1>
            <p className="mt-6 text-xl text-slate-300">
              FleetWorks was founded on a simple observation: the freight market
              has a search problem, not an automation problem. We&apos;re building the
              infrastructure to solve it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-semibold text-white">Our Mission</h2>
              <p className="mt-6 text-lg text-slate-300">
                Freight brokerage is stuck in a paradox: technology has made it
                easier to reach carriers, but harder to find capacity. Every
                brokerage can now call 10x more carriers. That means every carrier
                gets 10x more calls.
              </p>
              <p className="mt-4 text-lg text-slate-300">
                The result? Noise. Congestion. Wasted time on both sides.
              </p>
              <p className="mt-4 text-lg text-slate-300">
                FleetWorks is building the alternative: a system that matches
                verified intent to verified capacity, so engagement happens after
                the match is probable. Not before.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-8"
            >
              <div className="text-xs uppercase tracking-wider text-slate-500">
                The Thesis
              </div>
              <div className="mt-6 space-y-6 text-lg">
                <p className="text-slate-300">
                  <span className="font-semibold text-white">If</span> the
                  category optimizes for &quot;more outreach,&quot; it creates congestion.
                </p>
                <p className="text-slate-300">
                  <span className="font-semibold text-white">If</span> you
                  optimize for &quot;verified intent,&quot; you create liquidity.
                </p>
                <p className="text-emerald-400">
                  Liquidity expands margin. Margin funds distribution.
                  Distribution wins the decade.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-white/5 bg-gray-950/50 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-semibold text-white">Our Values</h2>
            <p className="mt-4 text-lg text-slate-400">
              The principles that guide how we build.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
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
                    {value.title}
                  </h3>
                  <p className="mt-3 text-slate-400">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-semibold text-white">The Team</h2>
            <p className="mt-4 text-lg text-slate-400">
              Operators and engineers who&apos;ve lived the problem.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center"
              >
                <div className="mx-auto h-20 w-20 rounded-full border border-white/10 bg-white/5" />
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <div className="mt-1 text-sm text-emerald-400">{member.role}</div>
                <p className="mt-4 text-slate-400">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-950/50 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10 p-12 text-center">
            <h2 className="text-3xl font-semibold text-white">
              Want to join the mission?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
              We&apos;re building the signal layer for freight. If that sounds
              interesting, we should talk.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/#demo"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 font-medium text-white transition-all hover:bg-emerald-400"
              >
                Book a Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="mailto:careers@fleetworks.ai"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-medium text-white transition-all hover:bg-white/10"
              >
                View Careers
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
