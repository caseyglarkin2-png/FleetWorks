import { Card } from "@/components/ui/card";
import Link from "next/link";

const posts = [
  {
    title: "The Friction Tax: Why brokers still cover loads like it's 1980",
    desc: "Search costs haven't disappeared—tools just made the shouting cheaper.",
    href: "/#friction-tax"
  },
  {
    title: "Signal vs Noise: The agentic spam cannon problem",
    desc: "If everybody can call 1,000 carriers, nobody can get a clean answer.",
    href: "/network"
  },
  {
    title: "The Super Rep Manifesto",
    desc: "Humans handle exceptions. Agents handle search. Margins breathe again.",
    href: "/brokers"
  }
];

export default function IntelligencePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-xs uppercase tracking-[0.25em] text-slate-400">Intelligence</div>
      <h1 className="mt-3 text-4xl font-semibold">Economics, not hype.</h1>
      <p className="mt-3 max-w-3xl text-slate-300">
        Thought leadership that frames the category: search friction → liquidity → margin.
      </p>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        {posts.map((p) => (
          <Card key={p.title} className="p-6">
            <div className="text-lg font-semibold text-slate-100">{p.title}</div>
            <div className="mt-2 text-sm text-slate-300">{p.desc}</div>
            <Link className="mt-4 inline-block text-sm text-emerald-200 hover:text-emerald-100" href={p.href}>
              Read →
            </Link>
          </Card>
        ))}
      </section>
    </main>
  );
}
