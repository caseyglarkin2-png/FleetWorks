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
// PROOF METRICS - Hard numbers only
// ============================================================================
export const PROOF_METRICS = [
  { 
    value: "12K+", 
    label: "Verified Carriers",
    sublabel: "Active in network"
  },
  { 
    value: "47ms", 
    label: "Match Speed",
    sublabel: "Intent to capacity"
  },
  { 
    value: "96%", 
    label: "Carrier Reach",
    sublabel: "vs. 12% cold outbound"
  },
] as const;

// ============================================================================
// HARD PROOF - Concrete claims
// ============================================================================
export const HARD_PROOF = {
  title: "What Changes",
  claims: [
    {
      stat: "30%",
      claim: "More loads per rep",
      context: "Because reps stop dialing and start closing."
    },
    {
      stat: "1–4%",
      claim: "Margin expansion",
      context: "Verified intent eliminates rate guessing games."
    },
    {
      stat: "8x",
      claim: "Faster coverage",
      context: "Match in seconds, not hours of phone tag."
    },
  ],
} as const;

// ============================================================================
// HERO CONTENT
// ============================================================================
export const HERO = {
  badge: "Capacity Orchestration",
  headline: "Find the right truck.\nEvery time.",
  subheadline: "AI that matches verified carrier intent to your loads in real-time.",
  primaryCTA: "Book a Demo",
  secondaryCTA: "View Live Network",
} as const;

// ============================================================================
// POSITIONING
// ============================================================================
export const POSITIONING = {
  tagline: "The Thesis",
  description: "Other platforms automate outreach. We automate matching. The difference: fewer calls, better outcomes.",
  pullQuote: "Verified intent creates liquidity. Liquidity expands margin.",
  attribution: "— FleetWorks",
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
  headline: "See it work.",
  description: "15-minute demo. Your lanes. Real carriers.",
  buttonText: "Book a Demo",
  formPlaceholder: "work@company.com",
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
