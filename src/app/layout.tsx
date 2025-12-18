import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space"
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains"
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
      <body className={`${inter.variable} ${space.variable} ${jetbrains.variable} text-slate-100`}>
        <div className="relative min-h-screen noise">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
