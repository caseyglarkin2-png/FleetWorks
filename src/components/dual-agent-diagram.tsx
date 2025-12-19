"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Truck, Zap, CheckCircle2 } from "lucide-react";
import { DUAL_AGENT } from "@/lib/copy";

export function DualAgentDiagram() {
  return (
    <div className="card overflow-hidden p-0">
      <div className="grid lg:grid-cols-3">
        {/* Broker Agent */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-b border-white/5 p-6 lg:border-b-0 lg:border-r"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
              <Building2 className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <div className="font-medium text-white">
                {DUAL_AGENT.brokerAgent.title}
              </div>
              <div className="text-xs text-slate-500">
                {DUAL_AGENT.brokerAgent.subtitle}
              </div>
            </div>
          </div>
          
          <ul className="mt-5 space-y-2.5">
            {DUAL_AGENT.brokerAgent.capabilities.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-slate-400">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500/60" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Center - Intent Match */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center justify-center border-b border-white/5 bg-white/[0.01] p-6 lg:border-b-0"
        >
          {/* Animated connection lines */}
          <div className="relative flex w-full items-center justify-center">
            <motion.div
              className="absolute left-0 top-1/2 h-px w-1/3 -translate-y-1/2 bg-gradient-to-r from-transparent to-emerald-500/50"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute right-0 top-1/2 h-px w-1/3 -translate-y-1/2 bg-gradient-to-l from-transparent to-emerald-500/50"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            
            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 ring-1 ring-emerald-500/20"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Zap className="h-6 w-6 text-emerald-400" />
              </motion.div>
              <div className="mt-3 text-center">
                <div className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                  {DUAL_AGENT.centerLabel}
                </div>
                <div className="mt-0.5 font-mono text-[10px] text-slate-500">
                  Real-time orchestration
                </div>
              </div>
            </div>
          </div>

          {/* Data flow indicators */}
          <div className="mt-6 flex items-center gap-6 text-[10px] text-slate-500">
            <div className="flex items-center gap-1">
              <ArrowRight className="h-3 w-3" />
              <span>Load requirements</span>
            </div>
            <div className="flex items-center gap-1">
              <ArrowRight className="h-3 w-3 rotate-180" />
              <span>Capacity signals</span>
            </div>
          </div>
        </motion.div>

        {/* Carrier Agent */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-6 lg:border-l lg:border-white/5"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
              <Truck className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <div className="font-medium text-white">
                {DUAL_AGENT.carrierAgent.title}
              </div>
              <div className="text-xs text-slate-500">
                {DUAL_AGENT.carrierAgent.subtitle}
              </div>
            </div>
          </div>
          
          <ul className="mt-5 space-y-2.5">
            {DUAL_AGENT.carrierAgent.capabilities.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-slate-400">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-500/60" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Bottom strip */}
      <div className="flex items-center justify-center gap-6 border-t border-white/5 bg-white/[0.01] px-6 py-3">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-subtle" />
          Continuous intent capture
        </div>
        <div className="h-3 w-px bg-white/10" />
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <div className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse-subtle" />
          Sub-second matching
        </div>
      </div>
    </div>
  );
}
