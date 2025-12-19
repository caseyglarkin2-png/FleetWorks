import type { Metadata, Viewport } from "next";
import "./globals.css";
import { NavBar } from "@/components/nav-bar-new";
import { Footer } from "@/components/footer-new";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains"
});

const siteUrl = "https://fleet-works-66py.vercel.app";

export const viewport: Viewport = {
  themeColor: "#10b981",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FleetWorks | The Capacity Orchestration Platform",
    template: "%s | FleetWorks"
  },
  description:
    "Stop searching. Start booking. FleetWorks eliminates freight search friction with dual-sided AI agents that align verified carrier intent with broker demand. Turn your team into Super Reps.",
  keywords: [
    "freight brokerage",
    "capacity orchestration",
    "carrier matching",
    "logistics AI",
    "freight technology",
    "load matching",
    "supply chain",
    "FleetWorks"
  ],
  authors: [{ name: "DWTB?!" }],
  creator: "DWTB?!",
  publisher: "FleetWorks",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.svg", type: "image/svg+xml" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "FleetWorks",
    title: "FleetWorks | The Capacity Orchestration Platform",
    description:
      "Stop searching. Start booking. Dual-sided AI agents align verified carrier intent with broker demand, turning your team into Super Reps.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FleetWorks - The Capacity Orchestration Platform"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "FleetWorks | The Capacity Orchestration Platform",
    description:
      "Stop searching. Start booking. Dual-sided AI agents eliminate freight search friction.",
    images: ["/og-image.svg"],
    creator: "@fleetworks"
  },
  alternates: {
    canonical: siteUrl
  },
  category: "technology"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans text-slate-100`}>
        <div className="relative min-h-screen noise grid-bg">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
