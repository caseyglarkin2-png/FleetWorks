"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { DEFAULT_ASSUMPTIONS, type Assumptions } from "@/content/site";
import { Settings2 } from "lucide-react";

function fmtMoney(n: number) {
  return n.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export function FrictionCalculator() {
  const [reps, setReps] = useState(10);
  const [loadsPerRep, setLoadsPerRep] = useState(15);
  const [marginPct, setMarginPct] = useState(15);

  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [assumptions, setAssumptions] = useState<Assumptions>(DEFAULT_ASSUMPTIONS);

  const math = useMemo(() => {
    const currentRevenue = reps * loadsPerRep * assumptions.avgLoadRevenue;
    const currentGrossProfit = currentRevenue * (marginPct / 100);

    const newLoadsPerRep = loadsPerRep * (1 + assumptions.volumeLiftPct / 100);
    const newMargin = marginPct + assumptions.marginExpansionPts;

    const newRevenue = reps * newLoadsPerRep * assumptions.avgLoadRevenue;
    const newGrossProfit = newRevenue * (newMargin / 100);

    const annualOpportunity = (newGrossProfit - currentGrossProfit) * assumptions.workDays;

    return {
      currentRevenue,
      currentGrossProfit,
      newLoadsPerRep,
      newMargin,
      annualOpportunity
    };
  }, [reps, loadsPerRep, marginPct, assumptions]);

  return (
    <section id="friction-tax" className="scroll-mt-24">
      <Card className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(0,220,130,0.10),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(245,158,11,0.08),transparent_45%)]" />
        <div className="relative">
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  The Hook
                </div>
                <div className="text-2xl font-semibold text-slate-100">
                  Calculate Your "Friction Tax"
                </div>
                <p className="mt-1 max-w-2xl text-sm text-slate-300">
                  If reps spend most of the day searching, the market is taxing your margin in plain sight.
                  Flip the model: search → match → close.
                </p>
              </div>

              <Button
                variant="ghost"
                onClick={() => setAdvancedOpen((v) => !v)}
                className="shrink-0"
              >
                <Settings2 className="mr-2 h-4 w-4" />
                Assumptions
              </Button>
            </div>
          </CardHeader>

          <CardContent>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-slate-300">Number of reps</label>
                  <Slider
                    value={[reps]}
                    onValueChange={(v) => setReps(v[0] ?? reps)}
                    min={1}
                    max={120}
                    step={1}
                    className="mt-3"
                  />
                  <div className="mt-2 font-mono text-lg text-slate-100">{reps}</div>
                </div>

                <div>
                  <label className="block text-sm text-slate-300">Avg loads / rep / day</label>
                  <Slider
                    value={[loadsPerRep]}
                    onValueChange={(v) => setLoadsPerRep(v[0] ?? loadsPerRep)}
                    min={3}
                    max={60}
                    step={1}
                    className="mt-3"
                  />
                  <div className="mt-2 font-mono text-lg text-slate-100">{loadsPerRep}</div>
                </div>

                <div>
                  <label className="block text-sm text-slate-300">Current gross margin %</label>
                  <Slider
                    value={[marginPct]}
                    onValueChange={(v) => setMarginPct(v[0] ?? marginPct)}
                    min={5}
                    max={30}
                    step={0.5}
                    className="mt-3"
                  />
                  <div className="mt-2 font-mono text-lg text-slate-100">{marginPct}%</div>
                </div>

                {advancedOpen && (
                  <div className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.02] p-5">
                    <div className="text-sm font-semibold text-slate-100">
                      Configurable assumptions (so we can tune as we learn)
                    </div>

                    <div>
                      <label className="block text-sm text-slate-300">Avg revenue per load</label>
                      <Slider
                        value={[assumptions.avgLoadRevenue]}
                        onValueChange={(v) =>
                          setAssumptions((s) => ({ ...s, avgLoadRevenue: v[0] ?? s.avgLoadRevenue }))
                        }
                        min={800}
                        max={6000}
                        step={50}
                        className="mt-3"
                      />
                      <div className="mt-2 font-mono text-sm text-slate-200">
                        {fmtMoney(assumptions.avgLoadRevenue)}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-slate-300">Volume lift %</label>
                      <Slider
                        value={[assumptions.volumeLiftPct]}
                        onValueChange={(v) =>
                          setAssumptions((s) => ({ ...s, volumeLiftPct: v[0] ?? s.volumeLiftPct }))
                        }
                        min={5}
                        max={80}
                        step={1}
                        className="mt-3"
                      />
                      <div className="mt-2 font-mono text-sm text-slate-200">
                        +{assumptions.volumeLiftPct}%
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-slate-300">Margin expansion (points)</label>
                      <Slider
                        value={[assumptions.marginExpansionPts]}
                        onValueChange={(v) =>
                          setAssumptions((s) => ({ ...s, marginExpansionPts: v[0] ?? s.marginExpansionPts }))
                        }
                        min={0}
                        max={6}
                        step={0.25}
                        className="mt-3"
                      />
                      <div className="mt-2 font-mono text-sm text-slate-200">
                        +{assumptions.marginExpansionPts} pts
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-slate-300">Working days / year</label>
                      <Slider
                        value={[assumptions.workDays]}
                        onValueChange={(v) =>
                          setAssumptions((s) => ({ ...s, workDays: v[0] ?? s.workDays }))
                        }
                        min={200}
                        max={300}
                        step={1}
                        className="mt-3"
                      />
                      <div className="mt-2 font-mono text-sm text-slate-200">
                        {assumptions.workDays}
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      onClick={() => setAssumptions(DEFAULT_ASSUMPTIONS)}
                      className="w-full"
                    >
                      Reset defaults
                    </Button>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl border border-emerald-400/15 bg-emerald-400/5 p-6">
                  <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    Annual opportunity cost
                  </div>
                  <div className="mt-2 text-4xl font-semibold text-emerald-200">
                    {fmtMoney(Math.max(0, math.annualOpportunity))}
                  </div>
                  <div className="mt-2 text-sm text-slate-300">
                    Based on:
                    <span className="ml-2 font-semibold text-slate-100">
                      +{assumptions.volumeLiftPct}% loads/rep
                    </span>
                    <span className="mx-2 text-slate-500">+</span>
                    <span className="font-semibold text-slate-100">
                      +{assumptions.marginExpansionPts} pts margin
                    </span>
                  </div>
                  <div className="mt-4 text-xs text-slate-500">
                    * Use this as an "outcome frame." Then we calibrate with your actual lane mix, floor rates, and constraints.
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                  <div className="text-sm font-semibold text-slate-100">What changes operationally</div>
                  <ul className="mt-2 space-y-2 text-sm text-slate-300">
                    <li>• The AI handles routine sourcing + standard negotiations.</li>
                    <li>• Humans handle exceptions, relationships, and messy edge cases.</li>
                    <li>• You stop paying for "search." You pay for "close."</li>
                  </ul>
                </div>

                <a
                  href="#demo"
                  className="block rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-sm text-slate-200 hover:bg-white/[0.04]"
                >
                  <div className="font-semibold">Ready to pressure-test this?</div>
                  <div className="mt-1 text-slate-400">Book a demo → we'll build your ROI audit in 30 minutes.</div>
                </a>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </section>
  );
}
