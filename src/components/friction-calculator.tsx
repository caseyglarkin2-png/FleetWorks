"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import * as Slider from "@radix-ui/react-slider";
import { Calculator, TrendingUp, DollarSign, Users, ArrowRight } from "lucide-react";

const DEFAULT = {
  reps: 10,
  loadsPerRepPerDay: 5,
  avgRevenuePerLoad: 2000,
  currentMargin: 15,
  volumeLiftPct: 30,
  marginExpansionPts: 2,
  workDays: 260
};

export function FrictionCalculator() {
  const [reps, setReps] = useState(DEFAULT.reps);
  const [loadsPerDay, setLoadsPerDay] = useState(DEFAULT.loadsPerRepPerDay);
  const [avgRevenue, setAvgRevenue] = useState(DEFAULT.avgRevenuePerLoad);
  const [currentMargin, setCurrentMargin] = useState(DEFAULT.currentMargin);

  const calculations = useMemo(() => {
    const currentLoadsPerYear = reps * loadsPerDay * DEFAULT.workDays;
    const currentGrossRevenue = currentLoadsPerYear * avgRevenue;
    const currentGrossProfit = currentGrossRevenue * (currentMargin / 100);

    // With FleetWorks
    const newLoadsPerYear = currentLoadsPerYear * (1 + DEFAULT.volumeLiftPct / 100);
    const newMargin = currentMargin + DEFAULT.marginExpansionPts;
    const newGrossRevenue = newLoadsPerYear * avgRevenue;
    const newGrossProfit = newGrossRevenue * (newMargin / 100);

    const additionalProfit = newGrossProfit - currentGrossProfit;
    const additionalLoads = newLoadsPerYear - currentLoadsPerYear;

    return {
      currentLoadsPerYear,
      currentGrossProfit,
      newLoadsPerYear,
      newGrossProfit,
      additionalProfit,
      additionalLoads,
      newMargin
    };
  }, [reps, loadsPerDay, avgRevenue, currentMargin]);

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0
    }).format(n);

  const formatNumber = (n: number) =>
    new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n);

  return (
    <section id="friction-tax" className="scroll-mt-24">
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10">
                <Calculator className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white md:text-3xl">
                  The Friction Tax Calculator
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  See what search friction costs your brokerage
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 px-4 py-2">
            <div className="text-xs text-amber-400">Based on</div>
            <div className="text-sm font-medium text-amber-200">
              {DEFAULT.volumeLiftPct}% volume lift + {DEFAULT.marginExpansionPts}pt margin expansion
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          {/* Sliders */}
          <div className="space-y-8">
            <SliderInput
              label="Carrier Sales Reps"
              value={reps}
              min={1}
              max={100}
              step={1}
              onChange={setReps}
              icon={Users}
              suffix=" reps"
            />
            <SliderInput
              label="Loads per Rep per Day"
              value={loadsPerDay}
              min={1}
              max={20}
              step={1}
              onChange={setLoadsPerDay}
              icon={TrendingUp}
              suffix=" loads"
            />
            <SliderInput
              label="Avg Revenue per Load"
              value={avgRevenue}
              min={500}
              max={5000}
              step={100}
              onChange={setAvgRevenue}
              icon={DollarSign}
              prefix="$"
            />
            <SliderInput
              label="Current Gross Margin"
              value={currentMargin}
              min={5}
              max={30}
              step={1}
              onChange={setCurrentMargin}
              icon={TrendingUp}
              suffix="%"
            />
          </div>

          {/* Results */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="text-xs uppercase tracking-wider text-slate-500">
                Your Current State
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <div className="text-sm text-slate-400">Annual Loads</div>
                  <div className="text-2xl font-semibold text-white">
                    {formatNumber(calculations.currentLoadsPerYear)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-slate-400">Gross Profit</div>
                  <div className="text-2xl font-semibold text-white">
                    {formatCurrency(calculations.currentGrossProfit)}
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              key={calculations.additionalProfit}
            >
              <div className="text-xs uppercase tracking-wider text-emerald-400">
                With FleetWorks
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <div className="text-sm text-emerald-300/70">Annual Loads</div>
                  <div className="text-2xl font-semibold text-white">
                    {formatNumber(calculations.newLoadsPerYear)}
                  </div>
                  <div className="mt-1 text-sm text-emerald-400">
                    +{formatNumber(calculations.additionalLoads)} loads
                  </div>
                </div>
                <div>
                  <div className="text-sm text-emerald-300/70">Gross Profit</div>
                  <div className="text-2xl font-semibold text-white">
                    {formatCurrency(calculations.newGrossProfit)}
                  </div>
                  <div className="mt-1 text-sm text-emerald-400">
                    at {calculations.newMargin}% margin
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-emerald-500/20 pt-6">
                <div className="text-sm text-emerald-300/70">
                  Additional Annual Profit
                </div>
                <div className="text-4xl font-bold text-emerald-400">
                  {formatCurrency(calculations.additionalProfit)}
                </div>
              </div>
            </motion.div>

            <a
              href="#demo"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-4 font-medium text-white transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              Get Your Custom Analysis
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SliderInput({
  label,
  value,
  min,
  max,
  step,
  onChange,
  icon: Icon,
  prefix = "",
  suffix = ""
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  icon: typeof Users;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-slate-500" />
          <span className="text-sm text-slate-300">{label}</span>
        </div>
        <span className="font-mono text-lg font-medium text-white">
          {prefix}
          {value.toLocaleString()}
          {suffix}
        </span>
      </div>
      <Slider.Root
        className="relative flex h-5 w-full cursor-pointer touch-none select-none items-center"
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={([v]) => onChange(v)}
      >
        <Slider.Track className="relative h-2 grow overflow-hidden rounded-full bg-white/10">
          <Slider.Range className="absolute h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400" />
        </Slider.Track>
        <Slider.Thumb className="block h-5 w-5 rounded-full border-2 border-emerald-400 bg-gray-900 shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" />
      </Slider.Root>
    </div>
  );
}
