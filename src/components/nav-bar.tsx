import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SITE } from "@/content/site";

const nav = [
  { href: "/brokers", label: "For Brokers" },
  { href: "/carriers", label: "For Carriers" },
  { href: "/network", label: "The Network" },
  { href: "/security", label: "Security" },
  { href: "/intelligence", label: "Intelligence" },
  { href: "/company", label: "Company" }
];

export function NavBar() {
  const logo = SITE.brand.logo;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070f]/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          {logo.kind === "wordmark" ? (
            <div className="flex h-8 items-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={28}
                sizes="140px"
                className={
                  "h-6 w-auto object-contain" +
                  (logo.invertOnDark ? " invert" : "")
                }
                priority
              />
            </div>
          ) : (
            <>
              <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={32}
                  height={32}
                  sizes="32px"
                  className={
                    "h-7 w-7 object-contain" +
                    (logo.invertOnDark ? " invert" : "")
                  }
                  priority
                />
              </div>
              <span className="text-sm font-semibold tracking-wide text-slate-100">
                {SITE.name}
              </span>
            </>
          )}
          <span className="ml-2 hidden rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-300 md:inline">
            Capacity Orchestration
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-sm text-slate-300 hover:text-slate-100"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden md:inline-flex" as-child={undefined as any}>
            <a href={SITE.ctas.secondary.href}>{SITE.ctas.secondary.label}</a>
          </Button>
          <Button as-child={undefined as any}>
            <a href={SITE.ctas.primary.href}>{SITE.ctas.primary.label}</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
