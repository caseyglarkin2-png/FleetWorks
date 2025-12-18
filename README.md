# FleetWorks Website – Vercel Deploy Guide

## Overview
Complete Next.js 14 site for **FleetWorks**: the **Capacity Orchestration Platform** that eliminates search friction. This is production-ready code with dark-mode, high-status design + the full "jungle narrative" (Signal > Noise, Cage Match competitive framing, Friction Tax ROI calculator).

---

## Quick Start (Local)

```bash
cd fleetworks-site
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Vercel Deployment (Recommended)

### Option 1: GitHub → Vercel (Best for teams)

1. **Push to GitHub:**
   ```bash
   cd fleetworks-site
   git init
   git add .
   git commit -m "FleetWorks site v1 with Cage Match"
   git branch -M main
   git remote add origin https://github.com/YOUR_USER/fleetworks-site.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click **"New Project"**
   - Import your GitHub repo
   - Framework: **Next.js** (auto-detected)
   - Click **"Deploy"**

3. **Add Custom Domain:**
   - Vercel Project → **Settings** → **Domains**
   - Add your domain (e.g., `fleetworks.ai`)
   - Vercel will show DNS records to set:
     - **A record** for apex (`@`) → `76.76.21.21`
     - **CNAME** for `www` → `cname.vercel-dns.com`
   - Wait for "Valid Configuration" checkmark

4. **Update metadataBase:**
   - Edit [`src/app/layout.tsx`](src/app/layout.tsx)
   - Change:
     ```ts
     metadataBase: new URL("https://fleetworks.ai")
     ```

### Option 2: Vercel CLI (Fastest for solo devs)

```bash
pnpm add -g vercel
vercel login
cd fleetworks-site
vercel
# Follow prompts → choose defaults
vercel --prod
```

---

## Architecture & Sitemap

### Pages
- **`/`** – Home (full narrative: hero, proof, Supply Graph, Cage Match, calculator, demo CTA)
- **`/brokers`** – For Brokers (Super Rep workflow + calculator)
- **`/carriers`** – For Carriers (no spam, lane-fit intent)
- **`/network`** – The Supply Graph (signal vs noise)
- **`/security`** – Trust layer, auditability, human takeover
- **`/intelligence`** – Thought leadership hub (3 posts)
- **`/company`** – Mission + proof link

### Key Components
- **Cage Match** ([`src/components/cage-match.tsx`](src/components/cage-match.tsx))  
  Competitive framing: CloneOps, Augie, HappyRobot (high-status, no mudslinging)
- **Friction Calculator** ([`src/components/friction-calculator.tsx`](src/components/friction-calculator.tsx))  
  Configurable ROI: sliders for reps, loads/day, margin, assumptions (avg rev, volume lift, margin expansion, workdays)
- **Supply Graph** ([`src/components/supply-graph-map.tsx`](src/components/supply-graph-map.tsx))  
  Animated network visualization (bioluminescent nodes + amber "match" streaks)
- **Dual Agent Visual** ([`src/components/dual-agent-visual.tsx`](src/components/dual-agent-visual.tsx))  
  Carrier Agent ↔ Match ↔ Broker Agent

---

## Positioning Pillars

1. **The Enemy:** Search Friction (The Friction Tax)
2. **The Thesis:** Signal > Noise
3. **The Solution:** Capacity Orchestration (verified intent → match → auditable action)
4. **The Outcome:** Super Reps (humans handle exceptions, agents handle search)

---

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS** (dark mode, frosted glass cards)
- **Framer Motion** (subtle animations)
- **Radix UI** (slider primitives)
- **Lucide React** (icons)

No backend. No database. Just speed + conversion.

---

## Post-Deploy Checklist

- [ ] Confirm CTAs work (`#demo`, `#friction-tax`, mailto links)
- [ ] Test mobile layout (hero, calculator, Cage Match cards)
- [ ] Update `metadataBase` in [`src/app/layout.tsx`](src/app/layout.tsx)
- [ ] Add analytics (Vercel Analytics or GA4)
- [ ] Replace demo box with HubSpot form embed (optional)
- [ ] Swap placeholder metrics for real/approved numbers
- [ ] Embed founder interview (YouTube/Vimeo for reliability)

---

## DNS Records (Example: `fleetworks.ai`)

| Type  | Name | Value                    | TTL  |
|-------|------|--------------------------|------|
| A     | @    | 76.76.21.21              | 3600 |
| CNAME | www  | cname.vercel-dns.com     | 3600 |

(Vercel will show exact records after you add your domain.)

---

## Shipping Workflow

- Every `git push` to `main` → production deploy
- Every PR → preview URL (free staging environment)
- Zero config builds (Vercel auto-detects Next.js)

---

## v1 → v2 Roadmap

- [ ] Real "Demo" form (HubSpot embed + routing)
- [ ] "Competition Map" page (deeper jungle narrative)
- [ ] Embedded founder interview (YouTube/Vimeo)
- [ ] Customer logos + verified testimonials (high-status only)
- [ ] ICP-specific pages (3PL, enterprise brokerage, mid-market)
- [ ] Interactive "Supply Graph" filter modes (lanes, regions, constraints)

---

## Guardrails

- **Do NOT** claim numbers you can't defend
- **Do NOT** dunk on competitors directly (outframe, don't mudslinger)
- The product is **"Capacity Orchestration,"** not "AI calling"
- **Match-first economics** is the wedge. **Trust layer** is the moat.

---

## Support

For deployment issues or questions:
- Vercel docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)

---

**Built by Dude What's The Build LLC. Hot cognitions included at no extra cost.**
