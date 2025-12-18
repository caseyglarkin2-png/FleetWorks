"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Node {
  id: string;
  x: number;
  y: number;
  type: "broker" | "carrier" | "load";
  label?: string;
  active?: boolean;
}

interface Connection {
  id: string;
  from: string;
  to: string;
  active?: boolean;
  progress?: number;
}

interface Match {
  id: string;
  brokerId: string;
  carrierId: string;
  loadId: string;
  status: "searching" | "matching" | "matched";
}

export function LiveMatchingVisual() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [matches, setMatches] = useState<Match[]>([]);
  const [pulseCenter, setPulseCenter] = useState(false);
  const [stats, setStats] = useState({ matched: 0, inProgress: 0, searchTime: 0 });

  // Initialize nodes
  useEffect(() => {
    const brokers: Node[] = [
      { id: "b1", x: 12, y: 20, type: "broker", label: "CHI Logistics" },
      { id: "b2", x: 10, y: 40, type: "broker", label: "DFW Freight" },
      { id: "b3", x: 12, y: 60, type: "broker", label: "ATL Transport" },
      { id: "b4", x: 8, y: 80, type: "broker", label: "PHX Shipping" },
    ];

    const carriers: Node[] = [
      { id: "c1", x: 88, y: 15, type: "carrier", label: "Swift Haul" },
      { id: "c2", x: 90, y: 32, type: "carrier", label: "Prime Move" },
      { id: "c3", x: 88, y: 50, type: "carrier", label: "Fast Lane" },
      { id: "c4", x: 92, y: 68, type: "carrier", label: "Road King" },
      { id: "c5", x: 88, y: 85, type: "carrier", label: "Metro Truck" },
    ];

    setNodes([...brokers, ...carriers]);
  }, []);

  // Simulate live matching
  const runMatchCycle = useCallback(() => {
    // Pick random broker and carrier
    const brokerIdx = Math.floor(Math.random() * 4);
    const carrierIdx = Math.floor(Math.random() * 5);
    const brokerId = `b${brokerIdx + 1}`;
    const carrierId = `c${carrierIdx + 1}`;
    const matchId = `m${Date.now()}`;
    const loadId = `l${Date.now()}`;

    // Create load node traveling from broker to center
    const brokerNode = nodes.find(n => n.id === brokerId);
    if (!brokerNode) return;

    // Add the load node
    const loadNode: Node = {
      id: loadId,
      x: brokerNode.x,
      y: brokerNode.y,
      type: "load",
      active: true
    };

    setNodes(prev => [...prev, loadNode]);
    setStats(prev => ({ ...prev, inProgress: prev.inProgress + 1 }));

    // Phase 1: Load travels to center (searching)
    setMatches(prev => [...prev, { id: matchId, brokerId, carrierId, loadId, status: "searching" }]);
    
    // Activate broker
    setNodes(prev => prev.map(n => n.id === brokerId ? { ...n, active: true } : n));

    // Move load to center
    setTimeout(() => {
      setNodes(prev => prev.map(n => n.id === loadId ? { ...n, x: 50, y: 50 } : n));
      setPulseCenter(true);
      setTimeout(() => setPulseCenter(false), 500);
    }, 200);

    // Phase 2: Matching (center processing)
    setTimeout(() => {
      setMatches(prev => prev.map(m => m.id === matchId ? { ...m, status: "matching" } : m));
      // Activate carrier
      setNodes(prev => prev.map(n => n.id === carrierId ? { ...n, active: true } : n));
    }, 800);

    // Phase 3: Load travels to carrier (matched)
    setTimeout(() => {
      const carrierNode = nodes.find(n => n.id === carrierId);
      if (carrierNode) {
        setNodes(prev => prev.map(n => n.id === loadId ? { ...n, x: carrierNode.x, y: carrierNode.y } : n));
      }
      setMatches(prev => prev.map(m => m.id === matchId ? { ...m, status: "matched" } : m));
      
      // Draw connection line
      setConnections(prev => [...prev, { id: `conn-${matchId}`, from: brokerId, to: carrierId, active: true }]);
    }, 1400);

    // Phase 4: Cleanup
    setTimeout(() => {
      // Remove load node
      setNodes(prev => prev.filter(n => n.id !== loadId));
      // Deactivate nodes
      setNodes(prev => prev.map(n => (n.id === brokerId || n.id === carrierId) ? { ...n, active: false } : n));
      // Remove match
      setMatches(prev => prev.filter(m => m.id !== matchId));
      // Fade connection
      setConnections(prev => prev.filter(c => c.id !== `conn-${matchId}`));
      // Update stats
      setStats(prev => ({ 
        matched: prev.matched + 1, 
        inProgress: Math.max(0, prev.inProgress - 1),
        searchTime: Math.round(1.2 + Math.random() * 0.8)
      }));
    }, 2500);
  }, [nodes]);

  // Run continuous matching simulation
  useEffect(() => {
    if (nodes.length === 0) return;
    
    const interval = setInterval(() => {
      runMatchCycle();
    }, 1800);

    // Run first match quickly
    const timeout = setTimeout(() => runMatchCycle(), 500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [nodes.length, runMatchCycle]);

  const brokers = nodes.filter(n => n.type === "broker");
  const carriers = nodes.filter(n => n.type === "carrier");
  const loads = nodes.filter(n => n.type === "load");

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px"
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]" />

      {/* SVG for connections */}
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="matchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>

        {/* Static guide lines from brokers to center */}
        {brokers.map(broker => (
          <line
            key={`guide-${broker.id}`}
            x1={`${broker.x}%`}
            y1={`${broker.y}%`}
            x2="50%"
            y2="50%"
            stroke="rgba(16, 185, 129, 0.1)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}

        {/* Static guide lines from center to carriers */}
        {carriers.map(carrier => (
          <line
            key={`guide-${carrier.id}`}
            x1="50%"
            y1="50%"
            x2={`${carrier.x}%`}
            y2={`${carrier.y}%`}
            stroke="rgba(59, 130, 246, 0.1)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}

        {/* Active connection lines */}
        <AnimatePresence>
          {connections.map(conn => {
            const fromNode = nodes.find(n => n.id === conn.from);
            const toNode = nodes.find(n => n.id === conn.to);
            if (!fromNode || !toNode) return null;
            
            return (
              <motion.line
                key={conn.id}
                x1={`${fromNode.x}%`}
                y1={`${fromNode.y}%`}
                x2={`${toNode.x}%`}
                y2={`${toNode.y}%`}
                stroke="url(#matchGradient)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            );
          })}
        </AnimatePresence>
      </svg>

      {/* Center hub */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Outer rings */}
        <motion.div
          className="absolute -inset-12 rounded-full border border-emerald-500/20"
          animate={{ scale: pulseCenter ? 1.2 : 1, opacity: pulseCenter ? 0.8 : 0.3 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute -inset-8 rounded-full border border-amber-500/30"
          animate={{ scale: pulseCenter ? 1.15 : 1, opacity: pulseCenter ? 0.9 : 0.4 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute -inset-4 rounded-full bg-gradient-to-br from-amber-500/20 to-emerald-500/20"
          animate={{ scale: pulseCenter ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Core */}
        <motion.div
          className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg shadow-amber-500/30"
          animate={{ scale: pulseCenter ? 1.15 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </motion.div>

        {/* Label */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-xs font-medium text-amber-400">FleetWorks Engine</span>
        </div>
      </div>

      {/* Broker nodes */}
      {brokers.map((broker, idx) => (
        <motion.div
          key={broker.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${broker.x}%`, top: `${broker.y}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.1 }}
        >
          <motion.div
            className={`flex h-10 w-10 items-center justify-center rounded-xl ${
              broker.active 
                ? "bg-emerald-500 shadow-lg shadow-emerald-500/50" 
                : "bg-emerald-500/20 ring-1 ring-emerald-500/40"
            }`}
            animate={{ scale: broker.active ? 1.1 : 1 }}
          >
            <svg className="h-5 w-5 text-emerald-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M9 12h6M12 9v6" />
            </svg>
          </motion.div>
          <div className="absolute left-12 top-1/2 -translate-y-1/2 whitespace-nowrap">
            <span className="text-xs text-slate-400">{broker.label}</span>
          </div>
        </motion.div>
      ))}

      {/* Carrier nodes */}
      {carriers.map((carrier, idx) => (
        <motion.div
          key={carrier.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${carrier.x}%`, top: `${carrier.y}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 + idx * 0.1 }}
        >
          <motion.div
            className={`flex h-10 w-10 items-center justify-center rounded-xl ${
              carrier.active 
                ? "bg-blue-500 shadow-lg shadow-blue-500/50" 
                : "bg-blue-500/20 ring-1 ring-blue-500/40"
            }`}
            animate={{ scale: carrier.active ? 1.1 : 1 }}
          >
            <svg className="h-5 w-5 text-blue-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 18V6a2 2 0 00-2-2H5a2 2 0 00-2 2v11a1 1 0 001 1h2" />
              <path d="M15 18H9" />
              <path d="M19 18h2a1 1 0 001-1v-3.65a1 1 0 00-.22-.624l-3.48-4.35A1 1 0 0017.52 8H14v10" />
              <circle cx="17" cy="18" r="2" />
              <circle cx="7" cy="18" r="2" />
            </svg>
          </motion.div>
          <div className="absolute right-12 top-1/2 -translate-y-1/2 whitespace-nowrap text-right">
            <span className="text-xs text-slate-400">{carrier.label}</span>
          </div>
        </motion.div>
      ))}

      {/* Load particles */}
      <AnimatePresence>
        {loads.map(load => (
          <motion.div
            key={load.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${load.x}%`, top: `${load.y}%` }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, left: `${load.x}%`, top: `${load.y}%` }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="relative">
              <motion.div
                className="h-4 w-4 rounded-full bg-gradient-to-r from-emerald-400 to-blue-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
              <div className="absolute inset-0 animate-ping rounded-full bg-white/30" />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Stats overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-sm bg-emerald-500" />
            <span className="text-xs text-slate-400">Brokers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />
            <span className="text-xs text-slate-400">Engine</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-sm bg-blue-500" />
            <span className="text-xs text-slate-400">Carriers</span>
          </div>
        </div>
        
        <div className="flex gap-4 text-xs">
          <div className="text-slate-500">
            <span className="font-medium text-emerald-400">{stats.matched}</span> matched
          </div>
          <div className="text-slate-500">
            <span className="font-medium text-amber-400">{stats.inProgress}</span> in progress
          </div>
        </div>
      </div>

      {/* Live indicator */}
      <div className="absolute right-4 top-4 flex items-center gap-2">
        <div className="relative h-2 w-2">
          <div className="absolute inset-0 animate-ping rounded-full bg-emerald-500" />
          <div className="absolute inset-0 rounded-full bg-emerald-500" />
        </div>
        <span className="text-xs font-medium text-emerald-400">LIVE</span>
      </div>
    </div>
  );
}
