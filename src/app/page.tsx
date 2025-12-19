"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Truck,
  Shield,
  CheckCircle2,
} from "lucide-react";
import {
  HERO,
  POSITIONING,
  PROOF_METRICS,
  FEATURE_FLAGS,
  TRUST,
  FINAL_CTA,
  HARD_PROOF,
} from "@/lib/copy";
import { FreightMapHero } from "@/components/freight-map-hero";
import { DemoForm } from "@/components/demo-form";
import { EfficiencyFlywheel } from "@/components/efficiency-flywheel";

// Simple fade - restrained animation
const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// ============================================================================
// TIER 1: HERO - The Promise
// ============================================================================
function HeroSection() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <FreightMapHero />
      
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-28 lg:px-8 lg:pt-36">
        <div className="max-w-2xl">
          {/* Minimal badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-xs font-medium uppercase tracking-wider text-emerald-400">
              {HERO.badge}
            </span>
          </motion.div>

          {/* Headline - one promise */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ whiteSpace: "pre-line" }}
          >
            {HERO.headline}
          </motion.h1>

          {/* Subheadline - one outcome */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-lg text-slate-400"
          >
            {HERO.subheadline}
          </motion.p>

          {/* CTAs - one primary, one secondary that leads to map */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex items-center gap-4"
          >
            <Link href="#demo" className="btn-primary">
              {HERO.primaryCTA}
            </Link>
            <Link href="#network" className="text-sm text-slate-400 hover:text-white transition-colors">
              {HERO.secondaryCTA}
              <ArrowRight className="ml-1 inline h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// KPI STRIP - Hard numbers, no fluff
// ============================================================================
function KPIStrip() {
  if (!FEATURE_FLAGS.showProofMetrics) return null;

  return (
    <section className="border-y border-white/5 bg-gray-950/50 py-8">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex items-center justify-center gap-12 md:gap-20">
          {PROOF_METRICS.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="font-mono text-2xl font-medium text-white">
                {metric.value}
              </div>
              <div className="mt-0.5 text-xs text-slate-500">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// TIER 2: THE ARTIFACT - The Proof (Network Map / Simulator)
// ============================================================================
function NetworkSection() {
  return (
    <section id="network" className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-medium text-white">
            The Efficiency Flywheel
          </h2>
          <p className="mt-2 max-w-xl text-slate-400">
            Fair deals build loyalty. Loyalty expands your network. A larger network means better matches.
          </p>
        </motion.div>

        {/* The centerpiece */}
        <EfficiencyFlywheel />
      </div>
    </section>
  );
}

// ============================================================================
// HARD PROOF SECTION - Concrete claims
// ============================================================================
function HardProofSection() {
  return (
    <section className="border-y border-white/5 bg-gray-950/30 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-medium text-white">{HARD_PROOF.title}</h2>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {HARD_PROOF.claims.map((item, idx) => (
            <motion.div
              key={item.claim}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border-l border-emerald-500/30 pl-6"
            >
              <div className="font-mono text-3xl font-medium text-emerald-400">
                {item.stat}
              </div>
              <div className="mt-2 font-medium text-white">{item.claim}</div>
              <div className="mt-1 text-sm text-slate-500">{item.context}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// TIER 3: SUPPORTING - How + Trust
// ============================================================================
function HowItWorks() {
  const steps = [
    {
      icon: Building2,
      title: "Brokers post loads",
      desc: "Requirements, rates, constraints captured automatically."
    },
    {
      icon: Truck,
      title: "Carriers share intent",
      desc: "Lane preferences and availability via text, voice, or app."
    },
    {
      icon: CheckCircle2,
      title: "AI matches in real-time",
      desc: "Verified fit, not spray-and-pray."
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className="mb-10"
        >
          <h2 className="text-2xl font-medium text-white">How It Works</h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <Icon className="h-4 w-4 text-slate-400" />
                </div>
                <div>
                  <div className="font-medium text-white">{step.title}</div>
                  <div className="mt-1 text-sm text-slate-500">{step.desc}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="border-y border-white/5 bg-gray-950/30 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
          >
            <h2 className="text-2xl font-medium text-white">{TRUST.title}</h2>
            <p className="mt-2 text-slate-400">{TRUST.description}</p>
            <ul className="mt-6 space-y-3">
              {TRUST.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-slate-400">
                  <Shield className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500/60" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            transition={{ delay: 0.1 }}
            className="rounded-lg border border-white/5 bg-white/[0.02] p-6"
          >
            <div className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Verification Partners
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {["Highway", "Truckstop", "RMIS", "Carrier411"].map((partner) => (
                <div
                  key={partner}
                  className="rounded bg-white/5 px-3 py-1.5 text-sm text-slate-300"
                >
                  {partner}
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Real-time carrier verification
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// AUDIENCE LINKS - Simple navigation
// ============================================================================
function AudienceLinks() {
  const audiences = [
    { title: "For Brokers", href: "/brokers", desc: "From cost center to profit engine." },
    { title: "For Carriers", href: "/carriers", desc: "Loads that fit your lanes. No spam." },
    { title: "Security", href: "/security", desc: "Trust layer & auditable actions." },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {audiences.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.01] p-5 transition-colors hover:bg-white/[0.03]"
            >
              <div>
                <div className="font-medium text-white">{item.title}</div>
                <div className="mt-0.5 text-sm text-slate-500">{item.desc}</div>
              </div>
              <ArrowRight className="h-4 w-4 text-slate-600 transition-colors group-hover:text-emerald-400" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// CTA SECTION - Simple, direct
// ============================================================================
function CTASection() {
  return (
    <section id="demo" className="border-t border-white/5 bg-gray-950/50 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
          >
            <h2 className="text-3xl font-medium text-white">
              {FINAL_CTA.headline}
            </h2>
            <p className="mt-3 text-slate-400">
              {FINAL_CTA.description}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            transition={{ delay: 0.1 }}
          >
            <DemoForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// MAIN PAGE - 3-Tier Structure
// ============================================================================
export default function HomePage() {
  return (
    <main>
      {/* Tier 1: The Promise */}
      <HeroSection />
      <KPIStrip />
      
      {/* Tier 2: The Proof (Interactive Artifact) */}
      <NetworkSection />
      <HardProofSection />
      
      {/* Tier 3: Supporting */}
      <HowItWorks />
      <TrustSection />
      <AudienceLinks />
      <CTASection />
    </main>
  );
}
