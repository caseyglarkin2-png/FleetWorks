import { Card } from "@/components/ui/card";
import { ShieldCheck, BadgeCheck, CheckCircle2 } from "lucide-react";
import { SITE } from "@/content/site";

const icons = [ShieldCheck, BadgeCheck, CheckCircle2];

export function TrustStrip() {
  return (
    <Card className="p-5">
      <div className="grid gap-3 md:grid-cols-3">
        {SITE.trust.map((t, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <div key={t} className="flex items-center gap-3">
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-2">
                <Icon className="h-4 w-4 text-emerald-200" />
              </div>
              <div className="text-sm text-slate-200">{t}</div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
