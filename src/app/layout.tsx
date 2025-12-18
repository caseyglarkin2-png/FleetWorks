import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { ProposalHeader } from "@/components/proposal-header";
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
  title: "FleetWorks | DWTB?! Web Proposal",
  description:
    "Web proposal for FleetWorks - The Capacity Orchestration Platform. Stop searching. Start booking.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${space.variable} ${jetbrains.variable} text-slate-100`}>
        <div className="relative min-h-screen noise">
          <ProposalHeader />
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
