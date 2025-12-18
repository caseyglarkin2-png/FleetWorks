export const SITE = {
  name: "FleetWorks",
  tagline: "Stop Searching. Start Booking.",
  subhead:
    "The Capacity Orchestration Platform that eliminates search friction. Dual-sided AI agents align verified carrier intent with broker demand—turning your team into Super Reps.",
  ctas: {
    primary: { label: "Book a Demo", href: "#demo" },
    secondary: { label: "Calculate Your Friction Tax", href: "#friction-tax" }
  },
  proof: [
    { label: "Lift in loads per rep", value: "30%" },
    { label: "Gross margin expansion", value: "1–4%" },
    { label: "Phone tree success rate", value: "96%" }
  ],
  trust: ["Highway Verified", "Truckstop Verified", "Auditability by Design"],
  video: {
    // drop your Drive "preview" or YouTube embed here
    href: "https://drive.google.com/file/d/13exRKoYXUfZjvbAep2coX0UrkkqBmWWf/view",
    label: "Watch: Founder interview (proof, not vibes)"
  }
};

export type Assumptions = {
  avgLoadRevenue: number;      // $ per load
  volumeLiftPct: number;       // +% loads per rep
  marginExpansionPts: number;  // +percentage points
  workDays: number;            // annual working days
};

export const DEFAULT_ASSUMPTIONS: Assumptions = {
  avgLoadRevenue: 2000,
  volumeLiftPct: 30,
  marginExpansionPts: 2,
  workDays: 260
};
