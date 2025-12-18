import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intelligence",
  description: "ML-powered matching that predicts carrier availability, optimizes rates, and eliminates the friction tax eating your margins.",
  openGraph: {
    title: "FleetWorks Intelligence | AI-Powered Freight Matching",
    description: "Predictive intent modeling, smart match scoring, and real-time optimization. The intelligence layer that makes freight move.",
  },
};

export default function IntelligenceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
