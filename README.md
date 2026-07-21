# LTCware — concept website

A simple, fully clickable **concept prototype** for **LTCware**, a (fictional/illustrative)
South Korean wallet-security startup packaging its patented wallet-recovery
architecture as a **B2B SDK**.

> **The wallet is the proof. The recovery architecture is the asset.**

The site recreates the *structure and browsing experience* of a modern
enterprise-platform website (clean, bright, rounded cards, mega-menu navigation,
full-screen mobile menu, large multi-column footer) with **entirely original
LTCware branding, wording, icons, and diagrams**.

> ⚠️ This is a strategic prototype. It is **not affiliated with or endorsed by
> Nextcloud**. Products, metrics, case studies, audits, and workflows shown are
> **illustrative** and clearly labeled as such. Nothing here performs a real
> wallet or cryptographic operation.

---

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4** (design tokens in `app/globals.css`)
- **lucide-react** icons
- Local mock data + local component state only — **no** database, auth, wallet,
  blockchain, payments, or external APIs.

---

## Run locally

From this `ltcware/` directory:

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

Requires Node 18.18+ (developed on Node 24).

---

## Editing content

All copy lives in plain TypeScript files under `content/` — no component code
required to change wording:

| File | What it controls |
| --- | --- |
| `content/site.ts` | Brand strings, hero, platform modules, solutions, validation stages, resources, CTA copy, demo/console data. |
| `content/navigation.ts` | Desktop mega-menus, mobile accordion, header actions, footer columns. |
| `content/success-stories.ts` | The conceptual case-study library (listing + detail pages). |
| `content/resources-content.ts` | Mock blog / events / webinars / whitepapers / podcast items. |

**Renaming the platform:** the working platform name is isolated in **one place**
— edit `PLATFORM_NAME` at the top of `content/site.ts`.

---

## Routes

| Route | Page |
| --- | --- |
| `/` | Homepage |
| `/products` | Products overview |
| `/products/security-hub` | LTCware Security Hub platform overview |
| `/products/recovery-sdk` | Recovery SDK |
| `/solutions` | Solutions overview |
| `/solutions/wallet-providers` | Wallet-provider solution |
| `/solutions/fintechs` | Crypto-fintech solution |
| `/solutions/exchanges` | Exchange solution |
| `/resources` | Resources overview |
| `/resources/blog` | Blog listing |
| `/resources/events` | Events listing |
| `/resources/webinars` | Webinars listing |
| `/resources/success-stories` | Success-stories listing (search + filters) |
| `/resources/success-stories/[slug]` | Individual case-study page |
| `/resources/whitepapers` | Whitepapers listing |
| `/resources/podcast` | Podcast listing |
| `/features` | Feature overview |
| `/security` | Security & validation |
| `/partners` | Partner & pilot program |
| `/about` | About LTCware |
| `/demo` | Simulated Partner Console (interactive) |
| `/contact` | Contact & pilot-interest form |

---

## Deploy to Vercel

This project lives in the `ltcware/` **subdirectory** of a larger repository, so
point Vercel at that subdirectory:

1. Push the repository to GitHub/GitLab/Bitbucket.
2. In Vercel, **Add New → Project** and import the repo.
3. Set **Root Directory** to `ltcware`.
4. Framework preset: **Next.js** (auto-detected). Build command `next build` and
   output are auto-configured. No environment variables are required.
5. Click **Deploy**. Vercel gives you one public URL to share.

CLI alternative (run from inside `ltcware/`):

```bash
npm i -g vercel
vercel        # follow prompts; accept Next.js defaults
vercel --prod # promote to a production URL
```

---

## Project structure

```
ltcware/
├─ app/                     # routes (App Router)
│  ├─ layout.tsx            # announcement bar + sticky header + footer
│  ├─ page.tsx              # homepage (15-section flow)
│  ├─ products/ solutions/ resources/ …
│  ├─ demo/                 # simulated Partner Console
│  └─ contact/              # pilot-interest form
├─ components/              # Header, MegaMenu, MobileMenu, Footer, cards, diagrams, demo
│  ├─ ui/                   # Section, Button, Badge, Icon, Container, SectionHeading
│  ├─ sections/             # ModuleGrid, ValidationPathway, TrustBar, ResourceGrid
│  └─ diagrams/             # original SVG/CSS diagrams (RecoveryFlow, Architecture, Console)
└─ content/                 # editable copy + mock data
```

---

## Known limitations

- **Prototype only.** No backend, database, auth, wallet, blockchain, or real
  cryptography. The Recovery Simulator and Partner Console are visual mocks.
- The contact form does **not** transmit data; it shows a local confirmation.
- Case studies, metrics, events, audits, and partners are **illustrative** and
  labeled as concept / planned / proposed / future opportunity.
- Blog/whitepaper/webinar/podcast items are display-only (no detail pages or
  downloads).
