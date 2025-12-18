import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ShieldCheck, Radar, Zap, Swords, Ghost, BadgeCheck } from "lucide-react";

type Competitor = {
  name: string;
  whyTheyMatter: string;
  theirPlay: string;
  theTrap: string;
  fwCounter: string;
  icon: any;
  tag: string;
};

const COMPETITORS: Competitor[] = [
  {
    name: "CloneOps",
    tag: "Operator-scale machine",
    icon: Swords,
    whyTheyMatter:
      "Legendary operator DNA + real distribution muscle. This is the 'grown-up in the room' entry.",
    theirPlay:
      "Scale execution and throughput by industrializing back-office + talent leverage.",
    theTrap:
      "If the solution is 'do more outreach,' the market gets louder. More calls ≠ more liquidity.",
    fwCounter:
      "FleetWorks isn't a volume cannon. It's an intent-to-liquidity engine: match first, then engage."
  },
  {
    name: "Augie",
    tag: "Next-gen agent bet",
    icon: Zap,
    whyTheyMatter:
      "Elite builders and capital. This camp is serious about automation as the new interface.",
    theirPlay:
      "Agentic workflow replacement—automate the rep's day end-to-end.",
    theTrap:
      "Agents without a trust/intent layer can become faster ways to create bad decisions (and noisy ones).",
    fwCounter:
      "FleetWorks anchors the agent in verified intent + auditability—humans stay in control on edge cases."
  },
  {
    name: "HappyRobot",
    tag: "AI voice frontier",
    icon: Ghost,
    whyTheyMatter:
      "Big-name investors and strong narrative gravity. Voice automation is a magnet in this category.",
    theirPlay:
      "Automate calls at scale to accelerate carrier sourcing and follow-ups.",
    theTrap:
      "If everyone can call 1,000 carriers, nobody gets clean signal. Congestion becomes the product.",
    fwCounter:
      "FleetWorks wins by reducing the need to call: it queries the network only when the match is probable."
  }
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
      {children}
    </span>
  );
}

export function CageMatch() {
  return (
    <section className="mt-10">
      <Card className="p-6 md:p-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
              The Cage Match
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-slate-100 md:text-3xl">
              A man in the jungle. Beasts inbound. Will you survive?
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-slate-300">
              This category is the most competitive corner of freight tech right now. The default move is to
              automate outreach and spray the market. That creates noise. The winning move is to manufacture
              <span className="text-slate-100 font-semibold"> signal</span>: verified intent → probable match → auditable action.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <Pill>
                <Radar className="mr-2 h-4 w-4 text-emerald-200" />
                Signal &gt; Noise
              </Pill>
              <Pill>
                <ShieldCheck className="mr-2 h-4 w-4 text-emerald-200" />
                Trust layer or bust
              </Pill>
              <Pill>
                <BadgeCheck className="mr-2 h-4 w-4 text-emerald-200" />
                Match-first economics
              </Pill>
            </div>
          </div>

          <div className="mt-4 md:mt-0">
            <Link
              href="/network"
              className="inline-block rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200 hover:bg-emerald-400/15"
            >
              See the Supply Graph →
            </Link>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.02] p-6">
          <div className="text-sm font-semibold text-slate-100">Rules of the Jungle</div>
          <ul className="mt-2 space-y-2 text-sm text-slate-300">
            <li>• “More outreach” buys congestion.</li>
            <li>• “Verified intent” creates liquidity.</li>
            <li>• “Auditable actions” keeps trust intact at scale.</li>
          </ul>
          <a
            href="/#friction-tax"
            className="mt-4 inline-block text-sm text-emerald-200 hover:text-emerald-100"
          >
            Run the Friction Tax →
          </a>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {COMPETITORS.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.name}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-2">
                      <Icon className="h-4 w-4 text-emerald-200" />
                    </div>
                    <div>
                      <div className="text-base font-semibold text-slate-100">
                        {c.name}
                      </div>
                      <div className="text-xs text-slate-400">{c.tag}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-3 text-sm">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Why they matter
                    </div>
                    <div className="mt-1 text-slate-300">{c.whyTheyMatter}</div>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Their play
                    </div>
                    <div className="mt-1 text-slate-300">{c.theirPlay}</div>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      The trap
                    </div>
                    <div className="mt-1 text-slate-300">{c.theTrap}</div>
                  </div>

                  <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      FleetWorks counter
                    </div>
                    <div className="mt-1 font-semibold text-emerald-200">
                      {c.fwCounter}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.02] p-6">
          <div className="text-sm font-semibold text-slate-100">
            The thesis (aka: how you win)
          </div>
          <ul className="mt-2 space-y-2 text-sm text-slate-300">
            <li>• If the category optimizes for "more outreach," it creates congestion.</li>
            <li>• If you optimize for "verified intent," you create liquidity.</li>
            <li>• Liquidity expands margin. Margin funds distribution. Distribution wins the decade. (Very boring. Very true.)</li>
          </ul>
        </div>
      </Card>
    </section>
  );
}
