import { Card } from "@/components/ui/card";

export default function SecurityPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-xs uppercase tracking-[0.25em] text-slate-400">Security</div>
      <h1 className="mt-3 text-4xl font-semibold">Verified trust. Auditable actions.</h1>
      <p className="mt-3 max-w-3xl text-slate-300">
        The market's trust layer is under attack. FleetWorks is built to reduce fraud, not amplify it.
      </p>

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          ["Verification layer", "Integrations with industry trust systems + identity checks."],
          ["Auditability", "Every agent action should be traceable and reviewable."],
          ["Human takeover", "Escalation paths for edge cases—no autopilot on high-risk moves."]
        ].map(([h, b]) => (
          <Card key={h} className="p-6">
            <div className="text-lg font-semibold text-slate-100">{h}</div>
            <div className="mt-2 text-sm text-slate-300">{b}</div>
          </Card>
        ))}
      </section>
    </main>
  );
}
