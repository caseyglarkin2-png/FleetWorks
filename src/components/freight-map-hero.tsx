"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Major freight corridor cities with approximate positions (normalized 0-100)
const cities = [
  { id: "la", name: "Los Angeles", x: 8, y: 58, major: true },
  { id: "chi", name: "Chicago", x: 58, y: 32, major: true },
  { id: "dal", name: "Dallas", x: 48, y: 62, major: true },
  { id: "atl", name: "Atlanta", x: 68, y: 55, major: true },
  { id: "nyc", name: "New York", x: 82, y: 28, major: true },
  { id: "sea", name: "Seattle", x: 10, y: 15, major: false },
  { id: "den", name: "Denver", x: 32, y: 42, major: false },
  { id: "phx", name: "Phoenix", x: 18, y: 62, major: false },
  { id: "hou", name: "Houston", x: 48, y: 72, major: false },
  { id: "mia", name: "Miami", x: 78, y: 78, major: false },
  { id: "mem", name: "Memphis", x: 58, y: 52, major: false },
  { id: "kc", name: "Kansas City", x: 48, y: 42, major: false },
  { id: "slc", name: "Salt Lake", x: 22, y: 38, major: false },
  { id: "det", name: "Detroit", x: 66, y: 28, major: false },
];

// Active freight lanes (connections between cities)
const lanes = [
  { from: "la", to: "chi" },
  { from: "la", to: "dal" },
  { from: "la", to: "phx" },
  { from: "chi", to: "nyc" },
  { from: "chi", to: "atl" },
  { from: "chi", to: "det" },
  { from: "dal", to: "atl" },
  { from: "dal", to: "hou" },
  { from: "dal", to: "mem" },
  { from: "atl", to: "mia" },
  { from: "sea", to: "la" },
  { from: "den", to: "kc" },
  { from: "kc", to: "chi" },
  { from: "slc", to: "den" },
  { from: "slc", to: "la" },
  { from: "mem", to: "atl" },
];

interface TruckPosition {
  id: string;
  laneIndex: number;
  progress: number;
  speed: number;
  direction: 1 | -1;
}

interface LoadMatch {
  id: string;
  fromCity: string;
  toCity: string;
  timestamp: number;
}

function getCityById(id: string) {
  return cities.find(c => c.id === id);
}

export function FreightMapHero() {
  const [trucks, setTrucks] = useState<TruckPosition[]>([]);
  const [matches, setMatches] = useState<LoadMatch[]>([]);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  // Initialize trucks on lanes
  useEffect(() => {
    const initialTrucks: TruckPosition[] = lanes.slice(0, 10).map((_, i) => ({
      id: `truck-${i}`,
      laneIndex: i,
      progress: Math.random(),
      speed: 0.02 + Math.random() * 0.03,
      direction: Math.random() > 0.5 ? 1 : -1
    }));
    setTrucks(initialTrucks);
  }, []);

  // Animate trucks
  useEffect(() => {
    const animate = (time: number) => {
      if (time - lastTimeRef.current > 50) {
        lastTimeRef.current = time;
        setTrucks(prev => prev.map(truck => {
          let newProgress = truck.progress + truck.speed * truck.direction;
          let newDirection = truck.direction;
          
          if (newProgress >= 1) {
            newProgress = 1;
            newDirection = -1;
          } else if (newProgress <= 0) {
            newProgress = 0;
            newDirection = 1;
          }
          
          return { ...truck, progress: newProgress, direction: newDirection };
        }));
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Generate periodic "match" events
  useEffect(() => {
    const interval = setInterval(() => {
      const randomLane = lanes[Math.floor(Math.random() * lanes.length)];
      const newMatch: LoadMatch = {
        id: `match-${Date.now()}`,
        fromCity: randomLane.from,
        toCity: randomLane.to,
        timestamp: Date.now()
      };
      
      setMatches(prev => [...prev.slice(-4), newMatch]);
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  // Remove old matches
  useEffect(() => {
    const cleanup = setInterval(() => {
      const now = Date.now();
      setMatches(prev => prev.filter(m => now - m.timestamp < 3000));
    }, 1000);
    return () => clearInterval(cleanup);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Dark base */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-[#0a0f1a] to-gray-950" />
      
      {/* Subtle US map outline hint */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.03]"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M5,25 Q15,15 25,18 L45,15 Q55,12 65,15 L85,20 Q92,25 90,35 L88,45 Q85,55 80,60 L75,75 Q70,82 60,80 L45,78 Q35,75 25,72 L15,65 Q8,55 5,45 Z"
          fill="none"
          stroke="white"
          strokeWidth="0.3"
        />
      </svg>
      
      {/* SVG Map Layer */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradient for lanes */}
          <linearGradient id="laneGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
          </linearGradient>
          
          {/* Glow filter for matches */}
          <filter id="matchGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          {/* Truck icon */}
          <symbol id="truckIcon" viewBox="0 0 24 24">
            <rect x="1" y="8" width="15" height="10" rx="1" fill="currentColor" opacity="0.9" />
            <rect x="16" y="11" width="6" height="7" rx="1" fill="currentColor" opacity="0.9" />
            <circle cx="6" cy="18" r="2" fill="#0a0f1a" />
            <circle cx="19" cy="18" r="2" fill="#0a0f1a" />
          </symbol>
        </defs>
        
        {/* Lane lines */}
        {lanes.map((lane, i) => {
          const from = getCityById(lane.from);
          const to = getCityById(lane.to);
          if (!from || !to) return null;
          
          return (
            <line
              key={`lane-${i}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="url(#laneGradient)"
              strokeWidth="0.15"
              strokeDasharray="0.5 0.5"
              opacity="0.5"
            />
          );
        })}
        
        {/* City nodes */}
        {cities.map(city => (
          <g key={city.id}>
            {/* Outer glow for major cities */}
            {city.major && (
              <circle
                cx={city.x}
                cy={city.y}
                r="2"
                fill="#10b981"
                opacity="0.1"
              />
            )}
            {/* City dot */}
            <circle
              cx={city.x}
              cy={city.y}
              r={city.major ? "0.8" : "0.4"}
              fill={city.major ? "#10b981" : "#64748b"}
              opacity={city.major ? "0.8" : "0.4"}
            />
            {/* City label for major cities */}
            {city.major && (
              <text
                x={city.x}
                y={city.y - 2}
                fontSize="1.8"
                fill="white"
                opacity="0.4"
                textAnchor="middle"
                fontFamily="system-ui"
              >
                {city.name}
              </text>
            )}
          </g>
        ))}
        
        {/* Moving trucks */}
        {trucks.map(truck => {
          const lane = lanes[truck.laneIndex];
          if (!lane) return null;
          const from = getCityById(lane.from);
          const to = getCityById(lane.to);
          if (!from || !to) return null;
          
          const x = from.x + (to.x - from.x) * truck.progress;
          const y = from.y + (to.y - from.y) * truck.progress;
          const angle = Math.atan2(to.y - from.y, to.x - from.x) * (180 / Math.PI);
          const flip = truck.direction === -1 ? 180 : 0;
          
          return (
            <g key={truck.id} transform={`translate(${x}, ${y}) rotate(${angle + flip})`}>
              <use
                href="#truckIcon"
                x="-1"
                y="-0.8"
                width="2"
                height="1.6"
                fill="#10b981"
                opacity="0.7"
              />
            </g>
          );
        })}
      </svg>
      
      {/* Match pulse animations (DOM layer for better animation) */}
      <AnimatePresence>
        {matches.map(match => {
          const from = getCityById(match.fromCity);
          const to = getCityById(match.toCity);
          if (!from || !to) return null;
          
          return (
            <motion.div
              key={match.id}
              className="pointer-events-none absolute"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Pulse at origin */}
              <motion.div
                className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400"
                style={{ left: `${from.x}%`, top: `${from.y}%` }}
                initial={{ scale: 0.5, opacity: 0.8 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              
              {/* Connection flash */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid slice"
              >
                <motion.line
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="#10b981"
                  strokeWidth="0.3"
                  initial={{ pathLength: 0, opacity: 1 }}
                  animate={{ pathLength: 1, opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </svg>
              
              {/* Match indicator */}
              <motion.div
                className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-emerald-500/20 px-2 py-0.5 text-[8px] font-medium text-emerald-400 backdrop-blur-sm"
                style={{ 
                  left: `${(from.x + to.x) / 2}%`, 
                  top: `${(from.y + to.y) / 2}%` 
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                MATCHED
              </motion.div>
            </motion.div>
          );
        })}
      </AnimatePresence>
      
      {/* Stats overlay */}
      <div className="absolute bottom-8 left-8 hidden space-y-1 lg:block">
        <motion.div 
          className="flex items-center gap-2 text-xs text-slate-500"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Live Capacity</span>
        </motion.div>
        <motion.div 
          className="flex items-center gap-2 text-xs text-slate-500"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          <span>Active Lanes</span>
        </motion.div>
      </div>
      
      {/* Gradient overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 via-transparent to-gray-950/80" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-950 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gray-950 to-transparent" />
    </div>
  );
}
