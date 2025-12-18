import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security & Trust",
  description: "Trust is the currency. Highway & Truckstop verified identity, auditable actions, and escalation paths built into every match.",
  openGraph: {
    title: "FleetWorks Security | Trust Built Into Every Layer",
    description: "Verified identity, auditable actions, and escalation paths. No black boxes. Trust is the currency.",
  },
};

export default function SecurityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
