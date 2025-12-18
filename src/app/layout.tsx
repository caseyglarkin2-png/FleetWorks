import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "FleetWorks | The Capacity Orchestration Platform for Freight Brokers",
  description:
    "Stop searching. Start booking. Dual-sided AI agents align verified carrier intent with broker demand—turning teams into Super Reps.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-slate-100">
        <div className="relative min-h-screen noise">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
