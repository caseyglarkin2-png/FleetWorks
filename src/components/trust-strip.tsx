import { Shield, BadgeCheck, Lock } from "lucide-react";

const badges = [
  { icon: Shield, label: "Highway Verified" },
  { icon: BadgeCheck, label: "Truckstop Verified" },
  { icon: Lock, label: "SOC 2 Compliant" }
];

export function TrustStrip() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {badges.map((badge) => {
        const Icon = badge.icon;
        return (
          <div
            key={badge.label}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2"
          >
            <Icon className="h-4 w-4 text-emerald-400" />
            <span className="text-sm text-slate-300">{badge.label}</span>
          </div>
        );
      })}
    </div>
  );
}
