import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeftRight, BrainCircuit, MessageSquareText, ShieldCheck } from "lucide-react";

export function DualAgentVisual() {
  return (
    <Card>
      <CardHeader>
        <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
          The Orchestration Engine
        </div>
        <div className="text-xl font-semibold text-slate-100">
          Dual-sided agents. One verified match.
        </div>
        <div className="mt-1 text-sm text-slate-300">
          We don't lower the cost of "dialing." We replace the dark search phase with intent-based matching.
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-5">
            <div className="flex items-center gap-2 text-slate-100">
              <MessageSquareText className="h-4 w-4 text-emerald-200" />
              <span className="font-semibold">Carrier Agent</span>
            </div>
            <div className="mt-2 text-sm text-slate-300">
              Maintains real-time carrier intent via SMS/Voice/Email. Learns lanes, constraints, timing.
            </div>
          </div>

          <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-5">
            <div className="flex items-center gap-2 text-slate-100">
              <ArrowLeftRight className="h-4 w-4 text-emerald-200" />
              <span className="font-semibold">Match</span>
            </div>
            <div className="mt-2 text-sm text-slate-300">
              Instant liquidity: probable fit before outreach. Human approves edge cases.
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="h-4 w-4 text-emerald-200" /> Verified + auditable actions
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-5">
            <div className="flex items-center gap-2 text-slate-100">
              <BrainCircuit className="h-4 w-4 text-emerald-200" />
              <span className="font-semibold">Broker Agent</span>
            </div>
            <div className="mt-2 text-sm text-slate-300">
              Ingests your loads, negotiates standard freight, updates workflow. Escalates exceptions.
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
