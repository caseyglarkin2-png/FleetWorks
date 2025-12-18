"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  RotateCcw,
  TrendingUp,
  Target,
  Handshake,
  Clock,
  ArrowRight,
  CheckCircle2,
  Zap
} from "lucide-react";

interface Load {
  id: number;
  origin: string;
  destination: string;
  rate: number;
  margin: number;
  winWin: boolean;
  booked: boolean;
  timestamp: number;
}

interface SimState {
  week: number;
  totalLoads: number;
  winWinLoads: number;
  avgMargin: number;
  avgTimeToBook: number;
  reputationScore: number;
  carrierPoolSize: number;
  repeatCarriers: number;
  weeklyLoads: Load[];
  efficiency: number;
}

const INITIAL_STATE: SimState = {
  week: 0,
  totalLoads: 0,
  winWinLoads: 0,
  avgMargin: 12,
  avgTimeToBook: 45,
  reputationScore: 50,
  carrierPoolSize: 100,
  repeatCarriers: 5,
  weeklyLoads: [],
  efficiency: 1.0
};

const ORIGINS = ["Chicago", "Dallas", "Atlanta", "LA", "Denver", "Phoenix", "Seattle", "Miami"];
const DESTINATIONS = ["NYC", "Houston", "Memphis", "Charlotte", "Nashville", "Portland", "Boston", "DC"];

function generateLoad(week: number, efficiency: number): Load {
  const winWinProbability = Math.min(0.3 + efficiency * 0.05, 0.85);
  const winWin = Math.random() < winWinProbability;
  
  // Win-win deals have better margins but fair rates
  const baseMargin = winWin ? 14 + Math.random() * 6 : 8 + Math.random() * 8;
  const margin = Math.round(baseMargin * 10) / 10;
  
  return {
    id: Date.now() + Math.random(),
    origin: ORIGINS[Math.floor(Math.random() * ORIGINS.length)],
    destination: DESTINATIONS[Math.floor(Math.random() * DESTINATIONS.length)],
    rate: Math.round(1500 + Math.random() * 2000),
    margin,
    winWin,
    booked: true,
    timestamp: Date.now()
  };
}

export function BrokerEfficiencySim() {
  const [isRunning, setIsRunning] = useState(false);
  const [state, setState] = useState<SimState>(INITIAL_STATE);
  const [speed, setSpeed] = useState(1);

  const simulateWeek = useCallback(() => {
    setState((prev) => {
      const newWeek = prev.week + 1;
      
      // Efficiency grows based on win-win ratio (compounding returns)
      const winWinRatio = prev.totalLoads > 0 ? prev.winWinLoads / prev.totalLoads : 0;
      const efficiencyGrowth = 1 + (winWinRatio * 0.08); // Up to 8% growth per week
      const newEfficiency = Math.min(prev.efficiency * efficiencyGrowth, 3.5);
      
      // Generate loads for this week - more loads as efficiency increases
      const baseLoadsPerWeek = 8;
      const loadsThisWeek = Math.round(baseLoadsPerWeek * (1 + (newEfficiency - 1) * 0.4));
      
      const newLoads: Load[] = [];
      let weekWinWins = 0;
      let weekMarginSum = 0;
      
      for (let i = 0; i < loadsThisWeek; i++) {
        const load = generateLoad(newWeek, newEfficiency);
        newLoads.push(load);
        if (load.winWin) weekWinWins++;
        weekMarginSum += load.margin;
      }
      
      const newTotalLoads = prev.totalLoads + loadsThisWeek;
      const newWinWinLoads = prev.winWinLoads + weekWinWins;
      
      // Calculate running averages
      const allTimeWinWinRatio = newWinWinLoads / newTotalLoads;
      const newAvgMargin = (prev.avgMargin * prev.totalLoads + weekMarginSum) / newTotalLoads;
      
      // Time to book decreases with reputation (relationships matter)
      const newTimeToBook = Math.max(8, 45 - (newEfficiency - 1) * 12);
      
      // Reputation grows with win-win deals
      const reputationGrowth = (weekWinWins / loadsThisWeek) * 3;
      const newReputation = Math.min(prev.reputationScore + reputationGrowth, 100);
      
      // Carrier pool grows with reputation
      const poolGrowth = Math.round((newReputation - prev.reputationScore) * 2);
      const newCarrierPool = Math.min(prev.carrierPoolSize + poolGrowth, 500);
      
      // Repeat carriers increase (loyalty from fair deals)
      const repeatGrowth = weekWinWins > loadsThisWeek * 0.5 ? Math.round(weekWinWins * 0.3) : 0;
      const newRepeatCarriers = prev.repeatCarriers + repeatGrowth;
      
      return {
        week: newWeek,
        totalLoads: newTotalLoads,
        winWinLoads: newWinWinLoads,
        avgMargin: Math.round(newAvgMargin * 10) / 10,
        avgTimeToBook: Math.round(newTimeToBook),
        reputationScore: Math.round(newReputation * 10) / 10,
        carrierPoolSize: newCarrierPool,
        repeatCarriers: newRepeatCarriers,
        weeklyLoads: newLoads,
        efficiency: Math.round(newEfficiency * 100) / 100
      };
    });
  }, []);

  useEffect(() => {
    if (!isRunning) return;
    
    const interval = setInterval(() => {
      simulateWeek();
    }, 1500 / speed);
    
    return () => clearInterval(interval);
  }, [isRunning, speed, simulateWeek]);

  const reset = () => {
    setIsRunning(false);
    setState(INITIAL_STATE);
  };

  const winWinRatio = state.totalLoads > 0 
    ? Math.round((state.winWinLoads / state.totalLoads) * 100) 
    : 0;

  return (
    <section id="efficiency-sim" className="scroll-mt-24">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-950/90 p-8 md:p-12 backdrop-blur-sm">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 ring-1 ring-emerald-500/30">
                <TrendingUp className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white md:text-3xl">
                  The Efficiency Flywheel
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Watch how win-win deals compound broker efficiency over time
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              <span className="text-xs text-slate-400">Speed</span>
              <select 
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="bg-transparent text-sm text-white focus:outline-none cursor-pointer"
              >
                <option value={0.5} className="bg-slate-900">0.5x</option>
                <option value={1} className="bg-slate-900">1x</option>
                <option value={2} className="bg-slate-900">2x</option>
                <option value={3} className="bg-slate-900">3x</option>
              </select>
            </div>
            
            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                isRunning
                  ? "bg-amber-500/20 text-amber-300 ring-1 ring-amber-500/30 hover:bg-amber-500/30"
                  : "bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/30 hover:bg-emerald-500/30"
              }`}
            >
              {isRunning ? (
                <>
                  <Pause className="h-4 w-4" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="h-4 w-4" />
                  {state.week === 0 ? "Start" : "Resume"}
                </>
              )}
            </button>
            
            <button
              onClick={reset}
              className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-sm text-slate-300 ring-1 ring-white/10 transition-all hover:bg-white/10"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </button>
          </div>
        </div>

        {/* Week Counter */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="text-center">
            <div className="text-6xl font-bold tabular-nums text-white">
              {state.week}
            </div>
            <div className="text-sm text-slate-500">Weeks</div>
          </div>
          <ArrowRight className="h-6 w-6 text-slate-600" />
          <div className="text-center">
            <div className="text-6xl font-bold tabular-nums text-emerald-400">
              {state.efficiency.toFixed(2)}x
            </div>
            <div className="text-sm text-slate-500">Efficiency Multiplier</div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Metrics Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Performance Metrics
            </h3>
            
            <MetricCard
              icon={Target}
              label="Win-Win Rate"
              value={`${winWinRatio}%`}
              subtext={`${state.winWinLoads} of ${state.totalLoads} loads`}
              color="emerald"
              progress={winWinRatio}
            />
            
            <MetricCard
              icon={TrendingUp}
              label="Avg Margin"
              value={`${state.avgMargin}%`}
              subtext={state.avgMargin > 15 ? "Above market" : "Growing"}
              color="blue"
              progress={(state.avgMargin / 20) * 100}
            />
            
            <MetricCard
              icon={Clock}
              label="Time to Book"
              value={`${state.avgTimeToBook}m`}
              subtext={state.avgTimeToBook < 20 ? "Lightning fast" : "Improving"}
              color="amber"
              progress={((45 - state.avgTimeToBook) / 37) * 100}
            />
          </div>

          {/* Network Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Network Effects
            </h3>
            
            <MetricCard
              icon={Handshake}
              label="Reputation"
              value={`${state.reputationScore}`}
              subtext={state.reputationScore > 80 ? "Trusted partner" : "Building trust"}
              color="purple"
              progress={state.reputationScore}
            />
            
            <MetricCard
              icon={Zap}
              label="Carrier Pool"
              value={`${state.carrierPoolSize}`}
              subtext="Active carriers"
              color="cyan"
              progress={(state.carrierPoolSize / 500) * 100}
            />
            
            <MetricCard
              icon={CheckCircle2}
              label="Repeat Carriers"
              value={`${state.repeatCarriers}`}
              subtext="Loyal relationships"
              color="rose"
              progress={(state.repeatCarriers / 100) * 100}
            />
          </div>

          {/* Live Feed Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Recent Bookings
            </h3>
            
            <div className="h-[280px] overflow-hidden rounded-xl border border-white/10 bg-black/20">
              <AnimatePresence mode="popLayout">
                {state.weeklyLoads.slice(-5).reverse().map((load) => (
                  <motion.div
                    key={load.id}
                    initial={{ opacity: 0, x: 20, height: 0 }}
                    animate={{ opacity: 1, x: 0, height: "auto" }}
                    exit={{ opacity: 0, x: -20, height: 0 }}
                    className="border-b border-white/5 p-3"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-white">
                            {load.origin} → {load.destination}
                          </span>
                          {load.winWin && (
                            <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                              WIN-WIN
                            </span>
                          )}
                        </div>
                        <div className="mt-1 text-xs text-slate-500">
                          ${load.rate.toLocaleString()} • {load.margin}% margin
                        </div>
                      </div>
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {state.weeklyLoads.length === 0 && (
                <div className="flex h-full items-center justify-center text-sm text-slate-600">
                  Press Start to begin simulation
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Insight Banner */}
        <motion.div
          className="mt-8 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex items-start gap-3">
            <Zap className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
            <div>
              <div className="font-medium text-emerald-300">The FleetWorks Thesis</div>
              <p className="mt-1 text-sm text-slate-400">
                {state.week === 0 && "Start the simulation to see how win-win optimization creates a compounding efficiency flywheel."}
                {state.week > 0 && state.week < 5 && "Early weeks: Building reputation through fair deals. Carrier trust is forming."}
                {state.week >= 5 && state.week < 15 && `Week ${state.week}: Your win-win rate of ${winWinRatio}% is attracting more carriers. Network effects are kicking in.`}
                {state.week >= 15 && state.week < 30 && `Week ${state.week}: Efficiency at ${state.efficiency.toFixed(2)}x. Repeat carriers now handle ${Math.round((state.repeatCarriers / state.carrierPoolSize) * 100)}% of your loads with zero friction.`}
                {state.week >= 30 && `Week ${state.week}: Flywheel at full speed. Your ${state.repeatCarriers} loyal carriers + ${winWinRatio}% win-win rate = sustainable competitive advantage.`}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value,
  subtext,
  color,
  progress
}: {
  icon: typeof Target;
  label: string;
  value: string;
  subtext: string;
  color: "emerald" | "blue" | "amber" | "purple" | "cyan" | "rose";
  progress: number;
}) {
  const colors = {
    emerald: { bg: "bg-emerald-500/20", text: "text-emerald-400", bar: "bg-emerald-500" },
    blue: { bg: "bg-blue-500/20", text: "text-blue-400", bar: "bg-blue-500" },
    amber: { bg: "bg-amber-500/20", text: "text-amber-400", bar: "bg-amber-500" },
    purple: { bg: "bg-purple-500/20", text: "text-purple-400", bar: "bg-purple-500" },
    cyan: { bg: "bg-cyan-500/20", text: "text-cyan-400", bar: "bg-cyan-500" },
    rose: { bg: "bg-rose-500/20", text: "text-rose-400", bar: "bg-rose-500" }
  };

  const c = colors[color];

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <div className="flex items-center gap-3">
        <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${c.bg}`}>
          <Icon className={`h-4 w-4 ${c.text}`} />
        </div>
        <div className="flex-1">
          <div className="text-xs text-slate-500">{label}</div>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-semibold text-white">{value}</span>
            <span className="text-xs text-slate-500">{subtext}</span>
          </div>
        </div>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className={`h-full ${c.bar}`}
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
