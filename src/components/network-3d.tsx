"use client";

import dynamic from "next/dynamic";
import { Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";

const SceneWrapper = dynamic(
  () => import("./three/scene-wrapper").then((mod) => mod.SceneWrapper),
  { ssr: false }
);

const NetworkGraph = dynamic(
  () => import("./three/network-graph").then((mod) => mod.NetworkGraph),
  { ssr: false }
);

const SupplyChainVisualization = dynamic(
  () => import("./three/supply-chain-viz").then((mod) => mod.SupplyChainVisualization),
  { ssr: false }
);

interface Network3DProps {
  variant?: "graph" | "supply-chain";
  className?: string;
  height?: string;
}

export function Network3D({ variant = "graph", className = "", height = "h-[500px]" }: Network3DProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gray-950/50 ${height} ${className}`}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5" />
      
      {/* 3D Scene - only render after mount */}
      {mounted && (
        <Suspense fallback={
          <div className="flex h-full items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
          </div>
        }>
          <SceneWrapper
            camera={{ position: [0, 0, 6], fov: 50 }}
            style={{ background: "transparent" }}
          >
            {variant === "graph" ? (
              <NetworkGraph nodeCount={25} animated />
            ) : (
              <SupplyChainVisualization />
            )}
          </SceneWrapper>
        </Suspense>
      )}
      
      {/* Corner accents */}
      <div className="pointer-events-none absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-emerald-500/30" />
      <div className="pointer-events-none absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-emerald-500/30" />
      <div className="pointer-events-none absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-emerald-500/30" />
      <div className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-emerald-500/30" />
      
      {/* Legend */}
      <div className="absolute bottom-6 left-6 flex gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-slate-400">Brokers</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-amber-500" />
          <span className="text-slate-400">Hub</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-blue-500" />
          <span className="text-slate-400">Carriers</span>
        </div>
      </div>
    </motion.div>
  );
}
