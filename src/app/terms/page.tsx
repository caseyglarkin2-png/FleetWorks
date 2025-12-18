"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsPage() {
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
          
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert prose-slate max-w-none">
            <p className="text-slate-300 text-lg mb-6">
              Last updated: December 2025
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Agreement to Terms</h2>
              <p className="text-slate-400">
                By accessing or using FleetWorks, you agree to be bound by these Terms of Service. 
                If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Use of Services</h2>
              <p className="text-slate-400 mb-4">
                FleetWorks provides a capacity orchestration platform for freight brokers and carriers. 
                You agree to use our services only for lawful purposes and in accordance with these terms.
              </p>
              <p className="text-slate-400">
                You are responsible for maintaining the confidentiality of your account credentials 
                and for all activities that occur under your account.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Intellectual Property</h2>
              <p className="text-slate-400">
                The FleetWorks platform, including all content, features, and functionality, 
                is owned by FleetWorks and protected by intellectual property laws. 
                You may not reproduce, distribute, or create derivative works without our express permission.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
              <p className="text-slate-400">
                FleetWorks shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use of or inability to use our services.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Changes to Terms</h2>
              <p className="text-slate-400">
                We reserve the right to modify these terms at any time. We will notify users of 
                significant changes via email or through our platform.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-slate-400">
                Questions about these terms? Contact us at{" "}
                <a href="mailto:legal@fleetworks.ai" className="text-emerald-400 hover:text-emerald-300">
                  legal@fleetworks.ai
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
