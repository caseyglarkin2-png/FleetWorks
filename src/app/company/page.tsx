import { Card } from "@/components/ui/card";
import { SITE } from "@/content/site";

export default function CompanyPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-xs uppercase tracking-[0.25em] text-slate-400">Company</div>
      <h1 className="mt-3 text-4xl font-semibold">Built to fix the market.</h1>
      <p className="mt-3 max-w-3xl text-slate-300">
        FleetWorks isn't "another AI dialer." It's the orchestration layer that turns intent into liquidity.
      </p>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <div className="text-lg font-semibold text-slate-100">The mission</div>
          <p className="mt-2 text-sm text-slate-300">
            Reduce search friction so brokers can sell, carriers can run profitable lanes, and the spot market clears faster.
          </p>
        </Card>

        <Card className="p-6">
          <div className="text-lg font-semibold text-slate-100">Proof</div>
          <p className="mt-2 text-sm text-slate-300">
            Prefer receipts over buzzwords? Use the founder interview as the canonical evidence trail.
          </p>
          <a className="mt-4 inline-block text-sm text-emerald-200 hover:text-emerald-100" href={SITE.video.href} target="_blank" rel="noreferrer">
            Open interview →
          </a>
        </Card>
      </section>
    </main>
  );
}
