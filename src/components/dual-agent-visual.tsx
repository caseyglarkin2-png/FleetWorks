"use client";

import { motion } from "framer-motion";
import { Building2, Truck, Zap, ArrowLeftRight, CheckCircle2 } from "lucide-react";

export function DualAgentVisual() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
      <div className="mb-8 text-center">
        <h3 className="text-xl font-semibold text-white md:text-2xl">
          Dual-Agent Architecture
        </h3>
        <p className="mt-2 text-sm text-slate-400">
          Two AI agents working in concert to eliminate search friction
        </p>
      </div>

      <div className="relative flex flex-col items-center justify-center gap-8 md:flex-row md:gap-4">
        {/* Broker Agent */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-xs"
        >
          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10">
                <Building2 className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <div className="font-semibold text-white">Broker Agent</div>
                <div className="text-xs text-blue-400">Demand Side</div>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-400" />
                Load requirements
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-400" />
                Rate preferences
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-400" />
                Service constraints
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Connection */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 shadow-lg shadow-emerald-500/20">
              <Zap className="h-8 w-8 text-emerald-400" />
            </div>
            <div className="text-center">
              <div className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                Intent Match
              </div>
              <div className="text-[10px] text-slate-500">Real-time</div>
            </div>
          </div>
          
          {/* Animated arrows */}
          <motion.div
            className="absolute left-1/2 top-8 -translate-x-1/2 text-emerald-400/50"
            animate={{ x: [-30, 30] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          >
            <ArrowLeftRight className="h-5 w-5" />
          </motion.div>
        </motion.div>

        {/* Carrier Agent */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative w-full max-w-xs"
        >
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10">
                <Truck className="h-6 w-6 text-amber-400" />
              </div>
              <div>
                <div className="font-semibold text-white">Carrier Agent</div>
                <div className="text-xs text-amber-400">Supply Side</div>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-400" />
                Lane preferences
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-400" />
                Capacity windows
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-400" />
                Rate thresholds
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Bottom explanation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center"
      >
        <p className="text-sm text-slate-300">
          <span className="font-medium text-white">Result:</span>{" "}
          Verified intent meets verified capacity.{" "}
          <span className="text-emerald-400">Match first, then engage</span>—not
          the other way around.
        </p>
      </motion.div>
    </div>
  );
}
