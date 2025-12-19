"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Square, RotateCcw, TrendingUp, Users, Clock, Handshake } from "lucide-react";

interface SimState {
  week: number;
  efficiency: number;
  loadsBooked: number;
  avgMargin: number;
  repeatCarriers: number;
  timeToBook: number;
}

const INITIAL_STATE: SimState = {
  week: 0,
  efficiency: 1.0,
  loadsBooked: 0,
  avgMargin: 12,
  repeatCarriers: 5,
  timeToBook: 45,
};

export function EfficiencyFlywheel() {
  const [isRunning, setIsRunning] = useState(false);
  const [state, setState] = useState<SimState>(INITIAL_STATE);

  const simulateWeek = useCallback(() => {
    setState((prev) => {
      const newWeek = prev.week + 1;
      
      // Efficiency grows with compounding effect (win-win deals)
      const efficiencyGrowth = 1.04 + Math.random() * 0.03;
      const newEfficiency = Math.min(prev.efficiency * efficiencyGrowth, 3.5);
      
      // More loads as efficiency increases
      const loadsThisWeek = Math.round(8 * (1 + (newEfficiency - 1) * 0.4));
      const newLoads = prev.loadsBooked + loadsThisWeek;
      
      // Margin improves with repeat carriers
      const marginImprovement = (newEfficiency - 1) * 2;
      const newMargin = Math.min(12 + marginImprovement, 20);
      
      // Repeat carriers grow
      const newRepeatCarriers = Math.round(5 + (newEfficiency - 1) * 15);
      
      // Time to book decreases
      const newTimeToBook = Math.max(8, 45 - (newEfficiency - 1) * 12);
      
      return {
        week: newWeek,
        efficiency: newEfficiency,
        loadsBooked: newLoads,
        avgMargin: newMargin,
        repeatCarriers: newRepeatCarriers,
        timeToBook: newTimeToBook,
      };
    });
  }, []);

  useEffect(() => {
    if (!isRunning) return;
    
    const interval = setInterval(simulateWeek, 1200);
    return () => clearInterval(interval);
  }, [isRunning, simulateWeek]);

  // Auto-stop at week 52
  useEffect(() => {
    if (state.week >= 52) {
      setIsRunning(false);
    }
  }, [state.week]);

  const reset = () => {
    setIsRunning(false);
    setState(INITIAL_STATE);
  };

  const toggle = () => {
    if (state.week >= 52) {
      reset();
    } else {
      setIsRunning(!isRunning);
    }
  };

  // Calculate progress percentage
  const progressPercent = Math.min((state.efficiency - 1) / 2.5 * 100, 100);

  return (
    <div className="card p-0 overflow-hidden">
      {/* Header with controls */}
      <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-slate-500">WEEK</span>
            <span className="font-mono text-2xl font-medium text-white">
              {state.week.toString().padStart(2, "0")}
            </span>
            <span className="font-mono text-xs text-slate-500">/ 52</span>
          </div>
        </div>

        {/* Controls - Premium segmented style */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="flex h-9 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            {isRunning ? (
              <>
                <Square className="h-3.5 w-3.5" />
                Pause
              </>
            ) : state.week >= 52 ? (
              <>
                <RotateCcw className="h-3.5 w-3.5" />
                Reset
              </>
            ) : (
              <>
                <Play className="h-3.5 w-3.5" />
                {state.week === 0 ? "Start" : "Resume"}
              </>
            )}
          </button>
          {state.week > 0 && state.week < 52 && (
            <button
              onClick={reset}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
              aria-label="Reset simulation"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Main visualization */}
      <div className="grid lg:grid-cols-3">
        {/* Efficiency meter */}
        <div className="border-b border-white/5 p-6 lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Efficiency Multiplier
            </span>
            <TrendingUp className="h-4 w-4 text-slate-500" />
          </div>
          
          <div className="mt-4">
            <div className="font-mono text-4xl font-medium text-emerald-400">
              {state.efficiency.toFixed(2)}x
            </div>
            <div className="mt-1 text-xs text-slate-500">
              {state.week === 0 
                ? "Baseline" 
                : `+${((state.efficiency - 1) * 100).toFixed(0)}% from start`}
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="mt-1 flex justify-between text-[10px] text-slate-500">
              <span>1.0x</span>
              <span>3.5x</span>
            </div>
          </div>
        </div>

        {/* Metrics grid */}
        <div className="col-span-2 grid grid-cols-2 lg:grid-cols-4">
          <MetricCard
            label="Loads Booked"
            value={state.loadsBooked}
            suffix=""
            icon={<TrendingUp className="h-4 w-4" />}
          />
          <MetricCard
            label="Avg. Margin"
            value={state.avgMargin.toFixed(1)}
            suffix="%"
            icon={<TrendingUp className="h-4 w-4" />}
          />
          <MetricCard
            label="Repeat Carriers"
            value={state.repeatCarriers}
            suffix=""
            icon={<Users className="h-4 w-4" />}
          />
          <MetricCard
            label="Time to Book"
            value={Math.round(state.timeToBook)}
            suffix="min"
            icon={<Clock className="h-4 w-4" />}
          />
        </div>
      </div>

      {/* Insight strip */}
      <div className="border-t border-white/5 bg-white/[0.01] px-6 py-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={getInsightKey(state)}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="flex items-center gap-2 text-xs text-slate-400"
          >
            <Handshake className="h-3.5 w-3.5 text-emerald-500/60" />
            {getInsight(state)}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  suffix,
  icon,
}: {
  label: string;
  value: number | string;
  suffix: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="border-b border-l border-white/5 p-4 first:border-l-0 lg:border-b-0">
      <div className="flex items-center justify-between text-slate-500">
        <span className="text-[10px] font-medium uppercase tracking-wider">
          {label}
        </span>
        {icon}
      </div>
      <div className="mt-2 font-mono text-xl font-medium text-white">
        {value}
        <span className="text-sm text-slate-500">{suffix}</span>
      </div>
    </div>
  );
}

function getInsightKey(state: SimState): string {
  if (state.week === 0) return "start";
  if (state.week < 10) return "early";
  if (state.week < 25) return "mid";
  if (state.week < 40) return "late";
  return "final";
}

function getInsight(state: SimState): string {
  if (state.week === 0) {
    return "Start the simulation to see how win-win optimization creates compounding returns.";
  }
  if (state.week < 10) {
    return "Early weeks: Building carrier relationships through fair, consistent deals.";
  }
  if (state.week < 25) {
    return `Flywheel engaging: ${state.repeatCarriers} carriers now prefer your loads. Margin expanding.`;
  }
  if (state.week < 40) {
    return `Strong momentum: ${Math.round((state.repeatCarriers / 30) * 100)}% of loads covered by repeat carriers with minimal friction.`;
  }
  if (state.week < 52) {
    return `Efficiency at ${state.efficiency.toFixed(2)}x baseline. Time to book down ${Math.round((45 - state.timeToBook) / 45 * 100)}%.`;
  }
  return `Full year complete. ${state.efficiency.toFixed(2)}x efficiency. This is the power of signal over noise.`;
}
