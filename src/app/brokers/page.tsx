import { Card } from "@/components/ui/card";
import { FrictionCalculator } from "@/components/friction-calculator";
import Link from "next/link";

export default function BrokersPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-xs uppercase tracking-[0.25em] text-slate-400">For Brokers</div>
      <h1 className="mt-3 text-4xl font-semibold">From cost center to profit engine.</h1>
      <p className="mt-3 max-w-3xl text-slate-300">
        Most tools sell OpEx reduction. FleetWorks sells revenue expansion: capture the margin you lose
        to speed-to-market inefficiency by eliminating search friction.
      </p>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <div className="text-sm font-semibold text-slate-100">The Super Rep workflow</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>• Routine: AI negotiates standard freight, collects paperwork, updates timestamps.</li>
            <li>• Exception: flags messy edge cases to your human rep.</li>
            <li>• Result: one rep manages 5× volume without becoming a burnout statistic.</li>
          </ul>
        </Card>
        <Card className="p-6">
          <div className="text-sm font-semibold text-slate-100">Plug-and-play liquidity</div>
          <p className="mt-3 text-sm text-slate-300">
            The agent lives where reps work. Integrate to your stack, then orchestrate capacity instead of "dialing for dollars."
          </p>
          <div className="mt-4 text-sm text-slate-400">
            Want the "why" behind the math?{" "}
            <Link className="text-emerald-200 hover:text-emerald-100" href="/intelligence">
              Read the Intelligence hub →
            </Link>
          </div>
        </Card>
      </section>

      <section className="mt-10">
        <FrictionCalculator />
      </section>

      <section className="mt-10 text-sm text-slate-400">
        <a href="/#demo" className="text-emerald-200 hover:text-emerald-100">
          Book a demo →
        </a>
      </section>
    </main>
  );
}
