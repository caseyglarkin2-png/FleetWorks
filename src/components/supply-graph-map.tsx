"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

type Node = {
  id: string;
  x: number;
  y: number;
  type: "broker" | "carrier" | "load";
  label: string;
};

type Edge = {
  from: string;
  to: string;
  active?: boolean;
};

const nodes: Node[] = [
  { id: "b1", x: 100, y: 120, type: "broker", label: "Broker A" },
  { id: "b2", x: 100, y: 280, type: "broker", label: "Broker B" },
  { id: "b3", x: 100, y: 440, type: "broker", label: "Broker C" },
  { id: "l1", x: 350, y: 80, type: "load", label: "CHI→LAX" },
  { id: "l2", x: 350, y: 200, type: "load", label: "DAL→ATL" },
  { id: "l3", x: 350, y: 320, type: "load", label: "SEA→DEN" },
  { id: "l4", x: 350, y: 440, type: "load", label: "MIA→NYC" },
  { id: "c1", x: 600, y: 100, type: "carrier", label: "Fleet 1" },
  { id: "c2", x: 600, y: 240, type: "carrier", label: "Fleet 2" },
  { id: "c3", x: 600, y: 380, type: "carrier", label: "Fleet 3" },
  { id: "c4", x: 600, y: 480, type: "carrier", label: "O/O" }
];

const edges: Edge[] = [
  { from: "b1", to: "l1", active: true },
  { from: "b1", to: "l2" },
  { from: "b2", to: "l2", active: true },
  { from: "b2", to: "l3" },
  { from: "b3", to: "l3" },
  { from: "b3", to: "l4", active: true },
  { from: "l1", to: "c1", active: true },
  { from: "l1", to: "c2" },
  { from: "l2", to: "c2", active: true },
  { from: "l3", to: "c2" },
  { from: "l3", to: "c3", active: true },
  { from: "l4", to: "c3" },
  { from: "l4", to: "c4", active: true }
];

function getNodeColor(type: Node["type"]) {
  switch (type) {
    case "broker":
      return { fill: "rgba(59, 130, 246, 0.2)", stroke: "rgba(59, 130, 246, 0.5)" };
    case "carrier":
      return { fill: "rgba(245, 158, 11, 0.2)", stroke: "rgba(245, 158, 11, 0.5)" };
    case "load":
      return { fill: "rgba(16, 185, 129, 0.2)", stroke: "rgba(16, 185, 129, 0.5)" };
  }
}

export function SupplyGraphMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let animationId: number;

    const draw = () => {
      ctx.clearRect(0, 0, 700, 560);

      // Draw edges
      edges.forEach((edge) => {
        const fromNode = nodes.find((n) => n.id === edge.from);
        const toNode = nodes.find((n) => n.id === edge.to);
        if (!fromNode || !toNode) return;

        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);

        if (edge.active) {
          ctx.strokeStyle = "rgba(16, 185, 129, 0.6)";
          ctx.lineWidth = 2;

          // Animated pulse on active edges
          const pulse = Math.sin(frame * 0.05) * 0.3 + 0.7;
          ctx.globalAlpha = pulse;
        } else {
          ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
          ctx.lineWidth = 1;
          ctx.globalAlpha = 1;
        }

        ctx.stroke();
        ctx.globalAlpha = 1;
      });

      // Draw nodes
      nodes.forEach((node) => {
        const colors = getNodeColor(node.type);

        // Glow for nodes
        ctx.shadowColor = colors.stroke;
        ctx.shadowBlur = 15;

        ctx.beginPath();
        ctx.arc(node.x, node.y, 24, 0, Math.PI * 2);
        ctx.fillStyle = colors.fill;
        ctx.fill();
        ctx.strokeStyle = colors.stroke;
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.shadowBlur = 0;

        // Label
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.font = "11px system-ui";
        ctx.textAlign = "center";
        ctx.fillText(node.label, node.x, node.y + 40);
      });

      frame++;
      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-white/10 bg-gray-900/50">
      <canvas
        ref={canvasRef}
        width={700}
        height={560}
        className="h-full w-full"
      />

      {/* Legend */}
      <div className="absolute bottom-4 left-4 flex gap-4 rounded-lg border border-white/10 bg-gray-900/80 px-4 py-2 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-blue-500/50" />
          <span className="text-xs text-slate-400">Brokers</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-emerald-500/50" />
          <span className="text-xs text-slate-400">Loads</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-amber-500/50" />
          <span className="text-xs text-slate-400">Carriers</span>
        </div>
      </div>

      {/* Title overlay */}
      <div className="absolute left-4 top-4">
        <div className="text-xs uppercase tracking-wider text-slate-500">
          Live Network
        </div>
        <div className="text-sm font-medium text-white">Supply Graph</div>
      </div>
    </div>
  );
}
