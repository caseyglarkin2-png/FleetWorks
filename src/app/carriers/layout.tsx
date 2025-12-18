import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Carriers",
  description: "Stop waiting for calls. FleetWorks surfaces loads that fit your lanes, equipment, and rate thresholds. Via text or voice. No apps. No spam.",
  openGraph: {
    title: "FleetWorks for Carriers | Loads That Actually Fit",
    description: "Loads that fit your lanes. Via text or voice. No apps. No spam. Just freight that works.",
  },
};

export default function CarriersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
