"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-950 pt-24">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert prose-slate max-w-none">
            <p className="text-slate-300 text-lg mb-6">
              Last updated: December 2025
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
              <p className="text-slate-400 mb-4">
                When you request a demo or contact us, we collect information you provide directly, including:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2">
                <li>Name and email address</li>
                <li>Company name and role</li>
                <li>Information about your freight operations</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
              <p className="text-slate-400 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2">
                <li>Respond to your demo requests and inquiries</li>
                <li>Provide and improve our services</li>
                <li>Send relevant updates about FleetWorks (with your consent)</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
              <p className="text-slate-400">
                We implement industry-standard security measures to protect your data. 
                Our platform is built with security-first architecture, and we never sell 
                your personal information to third parties.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-slate-400">
                Questions about this policy? Contact us at{" "}
                <a href="mailto:privacy@fleetworks.ai" className="text-emerald-400 hover:text-emerald-300">
                  privacy@fleetworks.ai
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
