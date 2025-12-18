import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Brokers",
  description: "Turn your carrier sales team into Super Reps. 30% lift in loads per rep, 1-4% margin expansion, and 96% carrier reach rate with FleetWorks.",
  openGraph: {
    title: "FleetWorks for Brokers | Turn Reps Into Super Reps",
    description: "30% lift in loads per rep. 1-4% margin expansion. Stop searching, start booking.",
  },
};

export default function BrokersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
