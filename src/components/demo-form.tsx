"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

export function DemoForm() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="demo" className="scroll-mt-24">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10 p-8 md:p-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5">
              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-sm text-emerald-400">Limited beta slots</span>
            </div>

            <h2 className="mt-6 text-3xl font-semibold text-white md:text-4xl">
              Ready to eliminate search friction?
            </h2>

            <p className="mt-4 text-lg text-slate-300">
              Book a 30-minute demo. We&apos;ll map your workflow, your lane mix, and
              your trust constraints. Then we&apos;ll show you exactly how FleetWorks fits.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Custom ROI analysis for your brokerage",
                "Live demo of the dual-agent system",
                "Integration requirements walkthrough",
                "No commitment required"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Form */}
          <div className="rounded-2xl border border-white/10 bg-gray-900/50 p-6 backdrop-blur-sm md:p-8">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-12 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                    <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    Request Received
                  </h3>
                  <p className="mt-2 text-slate-400">
                    We&apos;ll reach out within 24 hours to schedule your demo.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-300"
                    >
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-2 block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-slate-300"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="mt-2 block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      placeholder="Acme Logistics"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-4 font-medium text-white transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 disabled:opacity-50"
                  >
                    {loading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <>
                        Book My Demo
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    By submitting, you agree to our{" "}
                    <a href="/privacy" className="text-slate-400 hover:text-white">
                      Privacy Policy
                    </a>
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
