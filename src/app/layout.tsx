import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading"
});

export const metadata: Metadata = {
  title: "FleetWorks | The Capacity Orchestration Platform for Freight Brokers",
  description:
    "Stop searching. Start booking. Dual-sided AI agents align verified carrier intent with broker demand—turning teams into Super Reps.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable} text-slate-100`}>
        <div className="relative min-h-screen noise">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
