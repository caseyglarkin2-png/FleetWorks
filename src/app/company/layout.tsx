import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company",
  description: "Signal over noise. FleetWorks is building the capacity orchestration layer for freight, creating liquidity instead of congestion.",
  openGraph: {
    title: "About FleetWorks | Signal Over Noise",
    description: "We don't believe in louder. We believe in smarter. Building the capacity orchestration layer for freight.",
  },
};

export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
