import { SITE } from "@/content/site";
import { TrustStrip } from "@/components/trust-strip";
import { SupplyGraphMap } from "@/components/supply-graph-map";
import { DualAgentVisual } from "@/components/dual-agent-visual";
import { FrictionCalculator } from "@/components/friction-calculator";
import { CageMatch } from "@/components/cage-match";
import { HeroBackdrop } from "@/components/hero-backdrop";
import { TickerTape } from "@/components/ticker-tape";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function ProofStrip() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {SITE.proof.map((p) => (
        <Card key={p.label} className="p-5">
          <div className="text-2xl font-semibold text-emerald-200">{p.value}</div>
          <div className="mt-1 text-sm text-slate-300">{p.label}</div>
        </Card>
      ))}
    </div>
  );
}

function StoryArc() {
  return (
    <Card className="p-6">
      <div className="text-xs uppercase tracking-[0.25em] text-slate-400">The Jungle</div>
      <div className="mt-2 text-xl font-semibold text-slate-100">
        Everyone's sending beasts. The only question: do you survive?
      </div>
      <p className="mt-2 text-sm text-slate-300">
        The agentic freight gold rush is real. Plenty of players are building cheaper ways to call more carriers.
        That strategy increases congestion. FleetWorks wins by generating signal: verified intent, matched on demand,
        with auditable actions. (Hollywood kills the beast. Freight kills your margin if you keep searching.)
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link href="/intelligence" className="text-sm text-emerald-200 hover:text-emerald-100">
          Read: The Friction Tax →
        </Link>
        <span className="text-slate-600">•</span>
        <Link href="/network" className="text-sm text-emerald-200 hover:text-emerald-100">
          See: The Supply Graph →
        </Link>
      </div>
    </Card>
  );
}

function DemoBand() {
  return (
    <section id="demo" className="scroll-mt-24">
      <Card className="p-6 md:p-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-slate-400">Book a Demo</div>
            <div className="mt-2 text-2xl font-semibold text-slate-100">
              Turn your carrier sales team into Super Reps.
            </div>
            <p className="mt-2 text-sm text-slate-300">
              We'll map your workflow, your lane mix, and your trust constraints—then calibrate the calculator to your reality.
            </p>
            <div className="mt-4 text-sm text-slate-400">
              Prefer receipts?{" "}
              <a className="text-emerald-200 hover:text-emerald-100" href={SITE.video.href} target="_blank" rel="noreferrer">
                {SITE.video.label} →
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-sm font-semibold text-slate-100">Drop-in CTA (wire to HubSpot later)</div>
            <p className="mt-2 text-sm text-slate-300">
              For now this is a placeholder "conversion box." Replace with your HubSpot form embed or a server action.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a href="mailto:demo@fleetworks.ai?subject=FleetWorks%20Demo%20Request" className="w-full">
                <Button className="w-full">Email demo request</Button>
              </a>
              <a href={SITE.video.href} target="_blank" rel="noreferrer" className="w-full">
                <Button variant="ghost" className="w-full">Open founder interview</Button>
              </a>
            </div>
            <div className="mt-3 text-xs text-slate-500">
              * If you want a real form: add HubSpot embed script + portal/form IDs.
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <section className="relative grid gap-10 md:grid-cols-2 md:items-center">
        <HeroBackdrop />
        <div className="relative">
          <div className="text-xs uppercase tracking-[0.35em] text-slate-400">
            Capacity Orchestration Platform
          </div>
          <div className="relative mt-3">
            <div className="pointer-events-none absolute -inset-x-6 -inset-y-4 rounded-[40px] bg-[radial-gradient(circle_at_40%_50%,rgba(0,220,130,0.18),transparent_60%)] blur-2xl animate-pulse" />
            <h1 className="relative text-5xl font-semibold tracking-tight text-slate-100 md:text-6xl">
              {SITE.tagline}
            </h1>
          </div>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
            {SITE.subhead}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={SITE.ctas.primary.href}>
              <Button>{SITE.ctas.primary.label}</Button>
            </a>
            <a href={SITE.ctas.secondary.href}>
              <Button variant="ghost">{SITE.ctas.secondary.label}</Button>
            </a>
          </div>

          <TickerTape />

          <div className="mt-6">
            <TrustStrip />
          </div>
        </div>

        <div className="relative">
          <SupplyGraphMap />
        </div>
      </section>

      <div aria-hidden className="mt-10 h-px w-full bg-[linear-gradient(to_right,transparent,rgba(0,220,130,0.25),rgba(255,255,255,0.10),transparent)]" />

      <section className="mt-10">
        <ProofStrip />
      </section>

      <div aria-hidden className="mt-10 h-px w-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.10),rgba(245,158,11,0.18),transparent)]" />

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <StoryArc />
        <DualAgentVisual />
      </section>

      <CageMatch />

      <section className="mt-10">
        <FrictionCalculator />
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <Card className="p-6">
          <div className="text-xs uppercase tracking-[0.25em] text-slate-400">For Brokers</div>
          <div className="mt-2 text-lg font-semibold">From cost center to profit engine.</div>
          <p className="mt-2 text-sm text-slate-300">
            Sell outcome: margin capture + loads per headcount. Not "AI calls."
          </p>
          <Link className="mt-4 inline-block text-sm text-emerald-200 hover:text-emerald-100" href="/brokers">
            Go to brokers →
          </Link>
        </Card>

        <Card className="p-6">
          <div className="text-xs uppercase tracking-[0.25em] text-slate-400">For Carriers</div>
          <div className="mt-2 text-lg font-semibold">The dispatcher that works for you.</div>
          <p className="mt-2 text-sm text-slate-300">
            No apps. No spam. Just loads that fit your lanes—via text or voice.
          </p>
          <Link className="mt-4 inline-block text-sm text-emerald-200 hover:text-emerald-100" href="/carriers">
            Go to carriers →
          </Link>
        </Card>

        <Card className="p-6">
          <div className="text-xs uppercase tracking-[0.25em] text-slate-400">Security</div>
          <div className="mt-2 text-lg font-semibold">Trust is the currency.</div>
          <p className="mt-2 text-sm text-slate-300">
            Verified identity, auditable actions, escalation paths. No black boxes.
          </p>
          <Link className="mt-4 inline-block text-sm text-emerald-200 hover:text-emerald-100" href="/security">
            Read security →
          </Link>
        </Card>
      </section>

      <section className="mt-10">
        <DemoBand />
      </section>
    </main>
  );
}
