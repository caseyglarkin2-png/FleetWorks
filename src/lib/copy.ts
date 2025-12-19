/**
 * FleetWorks Copy & Configuration Constants
 * 
 * All marketing copy, metrics, and feature flags in one place.
 * Edit here to update content across the entire site.
 */

// ============================================================================
// FEATURE FLAGS
// ============================================================================
export const FEATURE_FLAGS = {
  showProofMetrics: true,      // Show the proof bar stats
  showFrictionCalculator: true, // Show the friction calculator
  showEfficiencyFlywheel: true, // Show the efficiency simulation
} as const;

// ============================================================================
// PROOF METRICS
// These are only displayed if showProofMetrics is true
// ============================================================================
export const PROOF_METRICS = [
  { 
    value: "30%", 
    label: "Lift in loads per rep",
    sublabel: "Average across pilot customers"
  },
  { 
    value: "1–4%", 
    label: "Gross margin expansion",
    sublabel: "Measured at 90-day mark"
  },
  { 
    value: "96%", 
    label: "Carrier reach rate",
    sublabel: "vs. 12% industry average"
  },
] as const;

// ============================================================================
// HERO CONTENT
// ============================================================================
export const HERO = {
  badge: "Capacity Orchestration Platform",
  headline: "Stop Searching.\nStart Booking.",
  subheadline: "The only capacity orchestration platform that eliminates freight search friction. Dual-sided AI agents align verified carrier intent with broker demand—turning your team into Super Reps.",
  primaryCTA: "Book a Demo",
  secondaryCTA: "Calculate Savings",
} as const;

// ============================================================================
// POSITIONING
// ============================================================================
export const POSITIONING = {
  tagline: "Signal, Not Noise",
  description: "While others automate outreach, we automate matching. The result: fewer calls, better outcomes, expanded margins.",
  pullQuote: "More outreach buys congestion. Verified intent creates liquidity. Liquidity expands margin.",
  attribution: "— The FleetWorks Thesis",
} as const;

// ============================================================================
// FEATURES
// ============================================================================
export const FEATURES = [
  {
    id: "engine",
    title: "Intent-to-Liquidity Engine",
    description: "We don't spray the market. We match verified intent to verified capacity, then engage. Signal, not noise.",
  },
  {
    id: "network",
    title: "Live Supply Graph",
    description: "Real-time visualization of carrier availability, lane preferences, and rate thresholds across your network.",
  },
  {
    id: "trust",
    title: "Trust Layer Built-In",
    description: "Highway + Truckstop verified. Every action auditable. Escalation paths for edge cases. No black boxes.",
  },
] as const;

// ============================================================================
// DUAL AGENT ARCHITECTURE
// ============================================================================
export const DUAL_AGENT = {
  title: "Two-Sided Orchestration",
  description: "Our dual-agent architecture captures intent from both sides of the market, then orchestrates the match in real-time.",
  brokerAgent: {
    title: "Broker Agent",
    subtitle: "Demand Side",
    capabilities: ["Load requirements", "Rate preferences", "Service constraints"],
  },
  carrierAgent: {
    title: "Carrier Agent", 
    subtitle: "Supply Side",
    capabilities: ["Lane preferences", "Equipment type", "Rate thresholds"],
  },
  centerLabel: "Intent Match",
} as const;

// ============================================================================
// EFFICIENCY FLYWHEEL
// ============================================================================
export const FLYWHEEL = {
  title: "The Efficiency Flywheel",
  description: "Win-win optimization creates compounding returns. Fair deals build carrier loyalty, which expands your network, which increases match quality.",
  methodologyNote: "Simulation based on pilot data from 3 broker partners. Results may vary based on lane mix and carrier network size.",
} as const;

// ============================================================================
// TRUST LAYER
// ============================================================================
export const TRUST = {
  title: "Trust Layer Built-In",
  description: "Security and verification aren't afterthoughts. They're infrastructure.",
  points: [
    "Highway + Truckstop verified carriers",
    "Every action logged and auditable", 
    "Escalation paths for edge cases",
    "No black boxes—full transparency",
  ],
} as const;

// ============================================================================
// FINAL CTA
// ============================================================================
export const FINAL_CTA = {
  headline: "Orchestrate capacity.\nReduce friction.\nExpand margin.",
  description: "See how FleetWorks can transform your carrier sales operation.",
  buttonText: "Book a Demo",
  formPlaceholder: "you@company.com",
} as const;

// ============================================================================
// NAVIGATION
// ============================================================================
export const NAV = {
  platform: [
    { label: "For Brokers", href: "/brokers", description: "Turn carrier sales into a profit engine" },
    { label: "For Carriers", href: "/carriers", description: "Loads that fit your lanes. No spam." },
    { label: "The Network", href: "/network", description: "Live Supply Graph visualization" },
  ],
  resources: [
    { label: "Intelligence", href: "/intelligence", description: "AI/ML that creates signal, not noise" },
    { label: "Security", href: "/security", description: "Trust layer & auditable actions" },
    { label: "Company", href: "/company", description: "Our story and thesis" },
  ],
} as const;

// ============================================================================
// FOOTER
// ============================================================================
export const FOOTER = {
  tagline: "The Capacity Orchestration Platform",
  description: "Stop searching. Start booking.",
  email: "hello@fleetworks.ai",
  copyright: `© ${new Date().getFullYear()} FleetWorks. All rights reserved.`,
} as const;

// ============================================================================
// CARRIER PROMISE (for /carriers page)
// ============================================================================
export const CARRIER_PROMISE = {
  headline: "Loads That Fit.\nNo Spam. No Apps.",
  subheadline: "FleetWorks surfaces freight that matches your lanes, equipment, and rate thresholds. Via text or voice. You stay in control.",
} as const;

// ============================================================================
// BROKER PROMISE (for /brokers page)
// ============================================================================
export const BROKER_PROMISE = {
  headline: "From Cost Center\nto Profit Engine",
  subheadline: "Your carrier sales team becomes Super Reps. More loads per head, better margins, less burnout.",
} as const;
