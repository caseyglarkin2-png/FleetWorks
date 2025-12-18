"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { Card } from "@/components/ui/card";

type Node = { x: number; y: number; r: number; a: number };

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function SupplyGraphMap() {
  const nodes = useMemo(() => {
    const rand = mulberry32(42);
    const list: Node[] = [];
    for (let i = 0; i < 52; i++) {
      list.push({
        x: rand() * 100,
        y: rand() * 100,
        r: 1.2 + rand() * 2.6,
        a: 0.25 + rand() * 0.6
      });
    }
    return list;
  }, []);

  const edges = useMemo(() => {
    // Connect each node to a few nearest neighbors (cheap approximation)
    const pairs: Array<[number, number]> = [];
    for (let i = 0; i < nodes.length; i++) {
      const candidates = nodes
        .map((n, j) => {
          const dx = n.x - nodes[i].x;
          const dy = n.y - nodes[i].y;
          return { j, d: dx * dx + dy * dy };
        })
        .filter((x) => x.j !== i)
        .sort((a, b) => a.d - b.d)
        .slice(0, 2);
      for (const c of candidates) pairs.push([i, c.j]);
    }
    return pairs;
  }, [nodes]);

  return (
    <Card className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,220,130,0.10),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(245,158,11,0.08),transparent_40%),radial-gradient(circle_at_30%_80%,rgba(56,189,248,0.06),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,7,15,0.5),rgba(5,7,15,0.95))]" />
      </div>

      <div className="relative p-6">
        <div className="mb-2 text-xs uppercase tracking-[0.25em] text-slate-400">
          The Supply Graph
        </div>
        <div className="text-xl font-semibold text-slate-100">
          Signal in the noise. Liquidity on demand.
        </div>
        <div className="mt-1 max-w-2xl text-sm text-slate-300">
          A living network of verified carrier intent—queried only when the match is probable.
        </div>

        <div className="mt-6 aspect-[16/9] w-full rounded-3xl border border-white/10 bg-black/20 p-3">
          <svg viewBox="0 0 100 100" className="h-full w-full">
            {edges.map(([a, b], idx) => (
              <line
                key={idx}
                x1={nodes[a].x}
                y1={nodes[a].y}
                x2={nodes[b].x}
                y2={nodes[b].y}
                stroke="rgba(0,220,130,0.14)"
                strokeWidth="0.35"
              />
            ))}

            {nodes.map((n, idx) => (
              <motion.circle
                key={idx}
                cx={n.x}
                cy={n.y}
                r={n.r}
                fill={`rgba(0,220,130,${n.a})`}
                animate={{ opacity: [n.a * 0.6, n.a, n.a * 0.6] }}
                transition={{ duration: 2.8 + (idx % 7) * 0.25, repeat: Infinity }}
              />
            ))}

            {/* A few "match" streaks */}
            {[0, 8, 18, 31].map((i, k) => (
              <motion.line
                key={k}
                x1={nodes[i].x}
                y1={nodes[i].y}
                x2={nodes[(i + 9) % nodes.length].x}
                y2={nodes[(i + 9) % nodes.length].y}
                stroke="rgba(245,158,11,0.55)"
                strokeWidth="0.7"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: k * 0.8 }}
              />
            ))}
          </svg>
        </div>
      </div>
    </Card>
  );
}
