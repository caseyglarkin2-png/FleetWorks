import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Network",
  description: "Illuminating the dark market. Real-time visualization of carrier availability, broker demand, and verified intent across the freight network.",
  openGraph: {
    title: "FleetWorks Network | The Live Supply Graph",
    description: "When capacity is unlisted, you're searching blind. FleetWorks treats intent like inventory: living, queryable, and verified.",
  },
};

export default function NetworkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
