import { SupplyGraphMap } from "@/components/supply-graph-map";
import { Card } from "@/components/ui/card";

export default function NetworkPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-xs uppercase tracking-[0.25em] text-slate-400">The Network</div>
      <h1 className="mt-3 text-4xl font-semibold">Illuminating the "dark market."</h1>
      <p className="mt-3 max-w-3xl text-slate-300">
        When capacity is unlisted, you're searching blind. FleetWorks treats intent like inventory: living, queryable, and verified.
      </p>

      <section className="mt-8">
        <SupplyGraphMap />
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <div className="text-sm font-semibold text-slate-100">Noise generators vs signal generators</div>
          <p className="mt-2 text-sm text-slate-300">
            If everyone can call 10× more carriers, the market gets louder, not more liquid. The edge is knowing who wants what—before you ask.
          </p>
        </Card>
        <Card className="p-6">
          <div className="text-sm font-semibold text-slate-100">Why this matters</div>
          <p className="mt-2 text-sm text-slate-300">
            Liquidity is a search problem. When you reduce search, you reduce volatility and reclaim margin.
          </p>
        </Card>
      </section>
    </main>
  );
}
