export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,220,130,0.14),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.10),transparent_45%),radial-gradient(circle_at_50%_90%,rgba(245,158,11,0.08),transparent_45%)]" />
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,7,15,0.3),rgba(5,7,15,0.95))]" />
    </div>
  );
}
