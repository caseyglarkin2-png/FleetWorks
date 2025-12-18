"use client";

import { motion } from "framer-motion";

const items = [
  "INTENT: VERIFIED",
  "MATCH: PROBABLE",
  "ACTION: AUDITABLE",
  "NOISE: REJECTED",
  "LIQUIDITY: ON DEMAND",
  "SUPER REPS: ONLINE"
];

export function TickerTape() {
  const loop = [...items, ...items, ...items];
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      <motion.div
        className="flex whitespace-nowrap py-2"
        animate={{ x: ["0%", "-33%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((t, i) => (
          <span key={i} className="mx-4 text-[11px] tracking-[0.35em] text-slate-300/90">
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
