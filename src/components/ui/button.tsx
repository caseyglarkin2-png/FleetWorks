import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-emerald-400/40 disabled:opacity-50 disabled:pointer-events-none";
  const styles =
    variant === "primary"
      ? "bg-emerald-400/15 text-emerald-200 border border-emerald-400/25 hover:bg-emerald-400/20"
      : "bg-transparent text-slate-200 border border-white/10 hover:bg-white/5";
  return <button className={cn(base, styles, className)} {...props} />;
}
