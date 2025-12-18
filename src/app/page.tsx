"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Truck,
  Zap,
  TrendingUp,
  Shield,
  Network,
  CheckCircle2
} from "lucide-react";
import { Hero3DBackground } from "@/components/hero-3d-background";
import { Network3D } from "@/components/network-3d";
import { TickerTape } from "@/components/ticker-tape";
import { TrustStrip } from "@/components/trust-strip";
import { DualAgentVisual } from "@/components/dual-agent-visual";
import { FrictionCalculator } from "@/components/friction-calculator";
import { DemoForm } from "@/components/demo-form";
import { ProposalIntro, ProposalSection } from "@/components/proposal-section";

type Persona = "broker" | "operator";

const heroContent: Record<Persona, { headline: string; subhead: string }> = {
  broker: {
    headline: "Stop Searching.\nStart Booking.",
    subhead:
      "The Capacity Orchestration Platform that eliminates search friction. Dual-sided AI agents align verified carrier intent with broker demand—turning your team into Super Reps."
  },
  operator: {
    headline: "Your Capacity.\nTheir Demand.\nMatched.",
    subhead:
      "Stop waiting for calls. FleetWorks surfaces loads that fit your lanes, equipment, and rate thresholds—via text or voice. No apps. No spam. Just freight that works."
  }
};

const stats = [
  { value: "30%", label: "Lift in loads per rep" },
  { value: "1-4%", label: "Gross margin expansion" },
  { value: "96%", label: "Carrier reach rate" }
];

const features = [
  {
    icon: Zap,
    title: "Intent-to-Liquidity Engine",
    description:
      "We don't spray the market. We match verified intent to verified capacity—then engage. Signal, not noise."
  },
  {
    icon: Network,
    title: "Live Supply Graph",
    description:
      "Real-time visualization of carrier availability, lane preferences, and rate thresholds across your network."
  },
  {
    icon: Shield,
    title: "Trust Layer Built-In",
    description:
      "Highway + Truckstop verified. Every action auditable. Escalation paths for edge cases. No black boxes."
  }
];

export default function HomePage() {
  const [persona, setPersona] = useState<Persona>("broker");

  return (
    <main className="relative">
      {/* Proposal Intro */}
      <section className="relative overflow-hidden py-24">
        <Hero3DBackground variant="hero" />
        <div className="relative">
          <ProposalIntro />
        </div>
      </section>

      {/* Hero Section */}
      <ProposalSection
        id="hero"
        number="01"
        title=""
        className="relative min-h-[80vh] overflow-hidden py-16"
      >

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 lg:px-8 lg:pt-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Persona Toggle */}
              <div className="mb-8 inline-flex rounded-full border border-white/10 bg-white/5 p-1">
                <button
                  onClick={() => setPersona("broker")}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    persona === "broker"
                      ? "bg-white/10 text-white"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Building2 className="h-4 w-4" />
                  For Brokers
                </button>
                <button
                  onClick={() => setPersona("operator")}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    persona === "operator"
                      ? "bg-white/10 text-white"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Truck className="h-4 w-4" />
                  For Operators
                </button>
              </div>

              {/* Headline */}
              <motion.h1
                key={persona}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
                style={{ whiteSpace: "pre-line" }}
              >
                {heroContent[persona].headline}
              </motion.h1>

              <motion.p
                key={`${persona}-sub`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-6 max-w-xl text-lg text-slate-300"
              >
                {heroContent[persona].subhead}
              </motion.p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#demo"
                  className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-medium text-white transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25"
                >
                  Book a Demo
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#friction-tax"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition-all hover:bg-white/10"
                >
                  Calculate Your Savings
                </Link>
              </div>

              {/* Trust Strip */}
              <div className="mt-10">
                <TrustStrip />
              </div>
            </motion.div>

            {/* Right - Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <Network3D variant="supply-chain" height="h-[450px]" />
            </motion.div>
          </div>

          {/* Ticker */}
          <TickerTape />
        </div>
      </ProposalSection>

      {/* Stats Section */}
      <ProposalSection
        id="stats"
        number="02"
        title=""
        className="border-y border-white/5 bg-gray-950/50 py-16"
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-semibold text-emerald-400 md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </ProposalSection>

      {/* Features Section */}
      <ProposalSection
        id="features"
        number="03"
        title="Signal, Not Noise"
        description="While others automate outreach, we automate matching. The result: fewer calls, better outcomes, expanded margins."
        className="py-24"
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-emerald-500/20 hover:bg-emerald-500/5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 transition-colors group-hover:border-emerald-500/30">
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
      </ProposalSection>

      {/* Dual Agent Section */}
      <ProposalSection
        id="dual-agent"
        number="04"
        title="Two Agents, One Match"
        description="Our dual-agent architecture captures intent from both sides of the market, then orchestrates the match in real-time."
        className="py-24"
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300">
              <Zap className="h-4 w-4 text-emerald-400" />
              How It Works
            </div>
          </div>

          <div className="mt-8">
            <DualAgentVisual />
          </div>
        </div>
      </ProposalSection>

      {/* Friction Calculator Section */}
      <ProposalSection
        id="calculator"
        number="05"
        title=""
        className="bg-gray-950/50 py-24"
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <FrictionCalculator />
        </div>
      </ProposalSection>

      {/* Why FleetWorks Section */}
      <ProposalSection
        id="thesis"
        number="06"
        title=""
        className="py-24"
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-400">
                <TrendingUp className="h-4 w-4" />
                The Thesis
              </div>
              <h2 className="mt-6 text-3xl font-semibold text-white md:text-4xl">
                The category is optimizing for noise.
                <br />
                <span className="text-emerald-400">We optimize for signal.</span>
              </h2>
              <p className="mt-6 text-lg text-slate-300">
                The agentic freight gold rush is real. Everyone is building
                cheaper ways to call more carriers. That strategy increases
                congestion—it doesn&apos;t solve capacity.
              </p>
              <p className="mt-4 text-lg text-slate-300">
                FleetWorks wins by generating signal: verified intent, matched on
                demand, with auditable actions. The result is liquidity—not
                louder phones.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "More outreach buys congestion",
                  "Verified intent creates liquidity",
                  "Liquidity expands margin. Margin funds distribution."
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
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
                The Jungle
              </div>
              <h3 className="mt-2 text-xl font-semibold text-white">
                Everyone is sending beasts. The only question: do you survive?
              </h3>
              <p className="mt-4 text-slate-400">
                Plenty of players are building AI that calls more carriers. That
                creates noise. FleetWorks wins by generating signal—verified
                intent, matched on demand, with auditable actions.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/intelligence"
                  className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300"
                >
                  Read: The Friction Tax
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/network"
                  className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300"
                >
                  See: The Supply Graph
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </ProposalSection>

      {/* CTA Cards */}
      <ProposalSection
        id="audiences"
        number="07"
        title="Built for Both Sides"
        description="FleetWorks serves brokers and carriers alike—creating a true two-sided marketplace."
        className="py-24"
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Building2,
                title: "For Brokers",
                description: "From cost center to profit engine. Sell outcome: margin capture + loads per headcount.",
                href: "/brokers",
                color: "blue"
              },
              {
                icon: Truck,
                title: "For Carriers",
                description: "The dispatcher that works for you. Loads that fit your lanes—via text or voice.",
                href: "/carriers",
                color: "amber"
              },
              {
                icon: Shield,
                title: "Security",
                description: "Trust is the currency. Verified identity, auditable actions, escalation paths.",
                href: "/security",
                color: "purple"
              }
            ].map((card, idx) => {
              const Icon = card.icon;
              const borderColor =
                card.color === "blue"
                  ? "hover:border-blue-500/30"
                  : card.color === "amber"
                  ? "hover:border-amber-500/30"
                  : "hover:border-purple-500/30";
              const iconBg =
                card.color === "blue"
                  ? "bg-blue-500/10 border-blue-500/20"
                  : card.color === "amber"
                  ? "bg-amber-500/10 border-amber-500/20"
                  : "bg-purple-500/10 border-purple-500/20";
              const iconColor =
                card.color === "blue"
                  ? "text-blue-400"
                  : card.color === "amber"
                  ? "text-amber-400"
                  : "text-purple-400";

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Link
                    href={card.href}
                    className={`group block rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-all ${borderColor}`}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl border ${iconBg}`}
                    >
                      <Icon className={`h-6 w-6 ${iconColor}`} />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-white">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-slate-400">{card.description}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-400 group-hover:text-emerald-300">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </ProposalSection>

      {/* Demo Form */}
      <ProposalSection
        id="contact"
        number="08"
        title=""
        className="bg-gray-950/50 py-24"
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <DemoForm />
        </div>
      </ProposalSection>
    </main>
  );
}
