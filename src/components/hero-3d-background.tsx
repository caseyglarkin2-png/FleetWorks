"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import R3F components to avoid SSR issues
const SceneWrapper = dynamic(
  () => import("./three/scene-wrapper").then((mod) => mod.SceneWrapper),
  { ssr: false }
);

const ParticleField = dynamic(
  () => import("./three/particle-field").then((mod) => mod.ParticleField),
  { ssr: false }
);

const FloatingElements = dynamic(
  () => import("./three/floating-shapes").then((mod) => mod.FloatingElements),
  { ssr: false }
);

interface Hero3DBackgroundProps {
  variant?: "hero" | "network" | "minimal";
  className?: string;
}

export function Hero3DBackground({ variant = "hero", className = "" }: Hero3DBackgroundProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Fallback gradient for loading/SSR */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      
      {/* Gradient orbs fallback */}
      <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-emerald-500/20 blur-[100px]" />
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-500/15 blur-[120px]" />
      <div className="absolute -bottom-20 left-1/3 h-72 w-72 rounded-full bg-amber-500/10 blur-[100px]" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />
      
      {/* 3D Scene */}
      <Suspense fallback={null}>
        <SceneWrapper
          camera={{ position: [0, 0, 6], fov: 60 }}
          style={{ background: "transparent" }}
        >
          <ParticleField 
            count={variant === "hero" ? 400 : 200} 
            color="#10b981" 
            size={0.012}
            speed={0.15}
          />
          <FloatingElements variant={variant} />
          <fog attach="fog" args={["#030712", 5, 15]} />
        </SceneWrapper>
      </Suspense>
      
      {/* Radial fade at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gray-950 to-transparent" />
    </div>
  );
}
