"use client";

import { motion } from "framer-motion";
import { TrendingUp, Truck, Package, Clock, DollarSign } from "lucide-react";

const items = [
  { icon: TrendingUp, text: "30% lift in loads per rep" },
  { icon: DollarSign, text: "1-4% margin expansion" },
  { icon: Truck, text: "96% carrier reach rate" },
  { icon: Package, text: "Real-time intent matching" },
  { icon: Clock, text: "< 2 min avg response time" }
];

export function TickerTape() {
  return (
    <div className="relative mt-8 overflow-hidden rounded-full border border-white/5 bg-white/[0.02] py-3">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear"
        }}
      >
        {[...items, ...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex shrink-0 items-center gap-2 text-sm text-slate-400"
            >
              <Icon className="h-4 w-4 text-emerald-400" />
              <span>{item.text}</span>
            </div>
          );
        })}
      </motion.div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-950 to-transparent" />
    </div>
  );
}
