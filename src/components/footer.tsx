export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-400">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-slate-200">Dude What's The Build LLC</span>{" "}
            production. Hot cognitions included at no extra cost.
          </div>
          <div className="text-xs text-slate-500">
            * Metrics shown are averages; results vary by operation and lane mix.
          </div>
        </div>
      </div>
    </footer>
  );
}
