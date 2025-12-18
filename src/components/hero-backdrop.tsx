export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(0,220,130,0.16),transparent_42%),radial-gradient(circle_at_78%_22%,rgba(56,189,248,0.12),transparent_46%),radial-gradient(circle_at_55%_85%,rgba(245,158,11,0.09),transparent_50%)]" />
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:54px_54px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,7,15,0.25),rgba(5,7,15,0.95))]" />
    </div>
  );
}
