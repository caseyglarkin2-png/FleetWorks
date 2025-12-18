import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ShieldCheck, BadgeCheck, CheckCircle2 } from "lucide-react";
import { SITE } from "@/content/site";

const icons = [ShieldCheck, BadgeCheck, CheckCircle2];

export function TrustStrip() {
  return (
    <Card className="p-5">
      <div className="grid gap-4 md:grid-cols-2 md:items-center">
        <div className="flex flex-wrap items-center gap-3">
          {SITE.partners.map((p) => (
            <div
              key={p.name}
              className="flex h-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-3"
              title={p.name}
            >
              <Image
                src={p.logoSrc}
                alt={p.name}
                width={120}
                height={28}
                className="h-5 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
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
      </div>
    </Card>
  );
}
