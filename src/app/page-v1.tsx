"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Truck,
  Shield,
  CheckCircle2,
  Zap,
  Activity,
  Info,
} from "lucide-react";
import {
  HERO,
  POSITIONING,
  FEATURES,
  PROOF_METRICS,
  FEATURE_FLAGS,
  DUAL_AGENT,
  FLYWHEEL,
  TRUST,
  FINAL_CTA,
} from "@/lib/copy";
import { FreightMapHero } from "@/components/freight-map-hero";
import { DemoForm } from "@/components/demo-form";
import { EfficiencyFlywheel } from "@/components/efficiency-flywheel";
import { DualAgentDiagram } from "@/components/dual-agent-diagram";

// Fade up animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// ============================================================================
// HERO SECTION
// ============================================================================
function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background */}
      <FreightMapHero />
      
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-32 lg:px-8 lg:pt-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              <Activity className="h-3 w-3" />
              {HERO.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ whiteSpace: "pre-line" }}
          >
            {HERO.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300"
          >
            {HERO.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link href="#demo" className="btn-primary">
              {HERO.primaryCTA}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#calculator" className="btn-secondary">
              {HERO.secondaryCTA}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// PROOF BAR
// ============================================================================
function ProofBar() {
  if (!FEATURE_FLAGS.showProofMetrics) return null;

  return (
    <section className="border-y border-white/5 bg-gray-950/50 py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {PROOF_METRICS.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="font-mono text-4xl font-medium tracking-tight text-emerald-400">
                {metric.value}
              </div>
              <div className="mt-1 text-sm font-medium text-white">
                {metric.label}
              </div>
              <div className="mt-0.5 text-xs text-slate-500">
                {metric.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SIGNAL NOT NOISE SECTION
// ============================================================================
function SignalSection() {
  const featureIcons = {
    engine: Zap,
    network: Activity,
    trust: Shield,
  };

  return (
    <section id="thesis" className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <h2 className="text-3xl font-medium tracking-tight text-white">
            {POSITIONING.tagline}
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            {POSITIONING.description}
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {FEATURES.map((feature, idx) => {
            const Icon = featureIcons[feature.id as keyof typeof featureIcons];
            return (
              <motion.div
                key={feature.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card card-hover"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                  <Icon className="h-5 w-5 text-emerald-400" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Pull quote */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <blockquote className="relative rounded-xl border border-white/5 bg-white/[0.01] px-8 py-6">
            <p className="text-lg font-medium italic text-slate-300">
              &ldquo;{POSITIONING.pullQuote}&rdquo;
            </p>
            <footer className="mt-3 text-sm text-slate-500">
              {POSITIONING.attribution}
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// DUAL AGENT SECTION
// ============================================================================
function DualAgentSection() {
  return (
    <section id="architecture" className="border-y border-white/5 bg-gray-950/30 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400">
            <Zap className="h-3 w-3 text-emerald-400" />
            How It Works
          </span>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-white">
            {DUAL_AGENT.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            {DUAL_AGENT.description}
          </p>
        </motion.div>

        <DualAgentDiagram />
      </div>
    </section>
  );
}

// ============================================================================
// EFFICIENCY FLYWHEEL SECTION
// ============================================================================
function FlywheelSection() {
  if (!FEATURE_FLAGS.showEfficiencyFlywheel) return null;

  return (
    <section id="flywheel" className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-3xl font-medium tracking-tight text-white">
                {FLYWHEEL.title}
              </h2>
              <p className="mt-3 max-w-xl text-slate-400">
                {FLYWHEEL.description}
              </p>
            </div>
            {/* Methodology tooltip */}
            <div className="group relative hidden lg:block">
              <button className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400 transition-colors hover:bg-white/10">
                <Info className="h-3.5 w-3.5" />
                Methodology
              </button>
              <div className="pointer-events-none absolute right-0 top-full z-10 mt-2 w-64 rounded-lg border border-white/10 bg-gray-900 p-3 opacity-0 shadow-xl transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
                <p className="text-xs text-slate-400">
                  {FLYWHEEL.methodologyNote}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <EfficiencyFlywheel />
      </div>
    </section>
  );
}

// ============================================================================
// TRUST SECTION
// ============================================================================
function TrustSection() {
  return (
    <section id="trust" className="border-y border-white/5 bg-gray-950/30 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
              <Shield className="h-5 w-5 text-emerald-400" />
            </div>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-white">
              {TRUST.title}
            </h2>
            <p className="mt-3 text-slate-400">
              {TRUST.description}
            </p>
            <ul className="mt-6 space-y-3">
              {TRUST.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span className="text-sm text-slate-300">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="card"
          >
            <div className="mb-4 text-xs font-medium uppercase tracking-wider text-slate-500">
              Verification Partners
            </div>
            <div className="flex flex-wrap gap-4">
              {["Highway", "Truckstop", "RMIS", "Carrier411"].map((partner) => (
                <div
                  key={partner}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                >
                  {partner}
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-white/5 pt-6">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-subtle" />
                All carrier verifications run in real-time
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// AUDIENCE CARDS
// ============================================================================
function AudienceSection() {
  const audiences = [
    {
      icon: Building2,
      title: "For Brokers",
      description: "From cost center to profit engine. Sell outcome: margin capture + loads per headcount.",
      href: "/brokers",
    },
    {
      icon: Truck,
      title: "For Carriers",
      description: "The dispatcher that works for you. Loads that fit your lanes, via text or voice.",
      href: "/carriers",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Trust is the currency. Verified identity, auditable actions, escalation paths.",
      href: "/security",
    },
  ];

  return (
    <section id="audiences" className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-medium tracking-tight text-white">
            Built for Both Sides
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            FleetWorks serves brokers and carriers alike, creating a true two-sided marketplace.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {audiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="group block h-full card card-hover"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-emerald-500/10">
                    <Icon className="h-5 w-5 text-slate-400 transition-colors group-hover:text-emerald-400" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm text-emerald-400 opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// CTA SECTION
// ============================================================================
function CTASection() {
  return (
    <section id="demo" className="border-t border-white/5 bg-gray-950/50 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2
              className="text-3xl font-medium leading-tight tracking-tight text-white lg:text-4xl"
              style={{ whiteSpace: "pre-line" }}
            >
              {FINAL_CTA.headline}
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              {FINAL_CTA.description}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <DemoForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProofBar />
      <SignalSection />
      <DualAgentSection />
      <FlywheelSection />
      <TrustSection />
      <AudienceSection />
      <CTASection />
    </main>
  );
}
