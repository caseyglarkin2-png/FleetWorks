import { Card } from "@/components/ui/card";

export default function CarriersPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-xs uppercase tracking-[0.25em] text-slate-400">For Carriers</div>
      <h1 className="mt-3 text-4xl font-semibold">The dispatcher that works for you.</h1>
      <p className="mt-3 max-w-3xl text-slate-300">
        No apps to download. No portals to babysit. Just high-quality loads delivered by text or voice based on where you actually want to go.
      </p>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        {[
          ["We know your lanes", "Tell us once. We remember. We proactively find freight that fits your schedule."],
          ["No spam", "We don't blast you. We reach out when the match is real."],
          ["Fast booking", "Negotiate and confirm quickly via text or a short call—no hold music torture."],
          ["Privacy + trust", "Preference-based matching with a verification layer designed to reduce fraud and noise."]
        ].map(([h, b]) => (
          <Card key={h} className="p-6">
            <div className="text-lg font-semibold text-slate-100">{h}</div>
            <div className="mt-2 text-sm text-slate-300">{b}</div>
          </Card>
        ))}
      </section>

      <section className="mt-10 text-sm text-slate-400">
        <a href="/#demo" className="text-emerald-200 hover:text-emerald-100">
          Join the network →
        </a>
      </section>
    </main>
  );
}
