/**
 * LTCware editable site copy + structured content.
 *
 * This is the single source of truth for wording, product modules, solutions,
 * validation stages, resources, and homepage sections. Non-coders can edit the
 * strings here without touching component code.
 *
 * The working platform name is intentionally isolated so it can be renamed in
 * ONE place.
 */

/* ------------------------------------------------------------------ */
/* Brand + platform identity (edit here)                               */
/* ------------------------------------------------------------------ */
export const PLATFORM_NAME = "LTCware Security Hub";

export const site = {
  brand: "LTCware",
  platformName: PLATFORM_NAME,
  wallet: "Uniwaffle",
  tagline: "Become the security layer behind the world's wallets.",
  positioning: "Wallet recovery infrastructure",
  contactEmail: "partners@ltcware.example",
  contactPhone: "+82 (0)2 000 0000",
  location: "Seoul, South Korea",
  language: "English",
  disclaimerShort:
    "Concept prototype — no real wallet or cryptographic operation.",
  disclaimerLong:
    "Independent LTCware concept prototype. Not affiliated with or endorsed by Nextcloud. Some products, metrics, case studies, and workflows shown are illustrative.",
};

/* ------------------------------------------------------------------ */
/* Announcement strip                                                  */
/* ------------------------------------------------------------------ */
export const announcement = {
  badge: "New",
  text: "LTCware Security Hub — packaging patented recovery as an integration-ready SDK.",
  linkLabel: "Explore the platform",
  href: "/products/security-hub",
};

/* ------------------------------------------------------------------ */
/* Homepage hero                                                       */
/* ------------------------------------------------------------------ */
export const homeHero = {
  eyebrow: "Wallet recovery infrastructure",
  headline: "Become the security layer behind the world's wallets.",
  supporting:
    "LTCware packages patented recovery architecture, seedless access, and multi-share security into an integration-ready layer for wallets, fintech platforms, and exchanges.",
  bullets: [
    "Seedless, resilient recovery",
    "Multi-share key architecture",
    "Cross-chain compatible SDK",
  ],
  primaryCta: { label: "Explore LTCware", href: "/products/security-hub" },
  secondaryCta: { label: "Launch Demo", href: "/demo" },
};

/* ------------------------------------------------------------------ */
/* Trust + technology proof                                            */
/* ------------------------------------------------------------------ */
export const trustProof = {
  heading: "The wallet is the proof. The recovery architecture is the asset.",
  subheading:
    "LTCware's consumer wallet, Uniwaffle, demonstrates the technology in production. The strategic opportunity is to package that architecture for other builders.",
  proofPoints: [
    { icon: "shield-check", label: "Patented recovery architecture" },
    { icon: "key-round", label: "Seedless recovery" },
    { icon: "split", label: "Four-share / multi-share model" },
    { icon: "link-2", label: "Cross-chain compatibility" },
    { icon: "landmark", label: "Government-backed R&D" },
    { icon: "smartphone", label: "App Store & Google Play approved" },
  ],
};

/* ------------------------------------------------------------------ */
/* Platform modules (Security Hub suite)                               */
/* ------------------------------------------------------------------ */
export type Module = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  href: string;
};

export const platformModules: Module[] = [
  {
    id: "recovery-sdk",
    name: "Recovery SDK",
    tagline: "Add resilient recovery to an existing wallet product.",
    description:
      "Drop-in libraries that bring seedless, multi-share recovery to a wallet without replacing its existing interface.",
    icon: "key-round",
    href: "/products/recovery-sdk",
  },
  {
    id: "key-share-orchestration",
    name: "Key Share Orchestration",
    tagline: "Coordinate LTCware's proposed multi-share recovery architecture.",
    description:
      "Policy-driven coordination of distributed key shares, thresholds, and authorization across a recovery event.",
    icon: "split",
    href: "/products/security-hub#orchestration",
  },
  {
    id: "integration-toolkit",
    name: "Integration Toolkit",
    tagline: "Access SDK documentation, sample configurations, and sandbox tools.",
    description:
      "Everything an engineering team needs to evaluate and wire in LTCware: docs, samples, and a sandbox environment.",
    icon: "wrench",
    href: "/products/security-hub#toolkit",
  },
  {
    id: "security-center",
    name: "Security Center",
    tagline: "Review architecture, validation status, and security documentation.",
    description:
      "A single view of the security model, the independent-validation roadmap, and downloadable-looking documentation.",
    icon: "shield-check",
    href: "/security",
  },
  {
    id: "partner-console",
    name: "Partner Console",
    tagline: "Track integration progress, testing, and pilot performance.",
    description:
      "A workspace for partners to follow integration steps, run recovery simulations, and review pilot metrics.",
    icon: "gauge",
    href: "/demo",
  },
  {
    id: "pilot-program",
    name: "Pilot Program",
    tagline: "Validate LTCware through one controlled partner deployment.",
    description:
      "A structured path from sandbox evaluation to a measurable, controlled pilot that can become a case study.",
    icon: "rocket",
    href: "/partners",
  },
];

/* ------------------------------------------------------------------ */
/* Products (full products menu / overview page)                       */
/* ------------------------------------------------------------------ */
export const products = [
  {
    id: "security-hub",
    name: PLATFORM_NAME,
    tagline:
      "One platform for wallet recovery, integration, validation, and partner deployment.",
    icon: "layout-grid",
    href: "/products/security-hub",
  },
  ...platformModules.map((m) => ({
    id: m.id,
    name: m.name,
    tagline: m.tagline,
    icon: m.icon,
    href: m.href,
  })),
];

/* ------------------------------------------------------------------ */
/* Solutions                                                           */
/* ------------------------------------------------------------------ */
export type Solution = {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  href: string;
};

/** Audience-based solutions (map to dedicated pages where they exist). */
export const solutionAudiences: Solution[] = [
  {
    id: "wallet-providers",
    name: "Wallet Providers",
    tagline: "Add recovery without replacing the wallet's existing interface.",
    icon: "wallet",
    href: "/solutions/wallet-providers",
  },
  {
    id: "fintechs",
    name: "Crypto-Native Fintechs",
    tagline: "Introduce resilient wallet recovery inside an existing financial product.",
    icon: "circle-dollar-sign",
    href: "/solutions/fintechs",
  },
  {
    id: "exchanges",
    name: "Exchanges",
    tagline: "Evaluate recovery infrastructure for supported wallet environments.",
    icon: "arrow-left-right",
    href: "/solutions/exchanges",
  },
  {
    id: "institutions",
    name: "Financial Institutions",
    tagline: "Explore future institutional applications following independent validation.",
    icon: "building-2",
    href: "/solutions",
  },
];

/** Outcome-based solutions. */
export const solutionOutcomes: Solution[] = [
  {
    id: "improve-recovery",
    name: "Improve Account Recovery",
    tagline: "Add a more resilient recovery pathway.",
    icon: "refresh-cw",
    href: "/solutions",
  },
  {
    id: "reduce-spof",
    name: "Reduce Single Points of Failure",
    tagline: "Use a distributed multi-share recovery model.",
    icon: "split",
    href: "/solutions",
  },
  {
    id: "controlled-pilot",
    name: "Launch a Controlled Pilot",
    tagline: "Test one clearly defined use case before broader deployment.",
    icon: "rocket",
    href: "/partners",
  },
];

/* ------------------------------------------------------------------ */
/* Why the SDK approach matters                                        */
/* ------------------------------------------------------------------ */
export const whySdk = {
  heading: "Why the SDK approach matters",
  subheading:
    "Direct consumer wallet growth is expensive and crowded. The recovery architecture is the durable asset — so LTCware packages it for the builders who already have the users.",
  points: [
    {
      icon: "layers",
      title: "Distribution through partners",
      body: "Reach millions of end users through wallets and platforms that already exist, instead of acquiring them one at a time.",
    },
    {
      icon: "shield-check",
      title: "Security as a product",
      body: "Recovery architecture becomes a licensable, integration-ready layer — the asset LTCware is uniquely positioned to own.",
    },
    {
      icon: "line-chart",
      title: "Measurable proof",
      body: "One controlled pilot produces evidence: integration effort, recovery success, and time-to-deploy that larger partners can trust.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Security validation pathway                                         */
/* ------------------------------------------------------------------ */
export const validationStages = [
  { n: 1, title: "Internal architecture review", status: "Planned" },
  { n: 2, title: "Manual code review", status: "Planned" },
  { n: 3, title: "Cryptographic assessment", status: "Planned" },
  { n: 4, title: "Penetration testing", status: "Planned" },
  { n: 5, title: "Findings remediation", status: "Planned" },
  { n: 6, title: "Controlled pilot", status: "Proposed" },
  { n: 7, title: "Ongoing monitoring", status: "Proposed" },
];

export const auditProviders = [
  "Trail of Bits",
  "Kudelski Security",
  "CertiK",
  "Halborn",
  "NCC Group",
  "Zellic",
];

/* ------------------------------------------------------------------ */
/* Recommended path (used on homepage + partners page)                 */
/* ------------------------------------------------------------------ */
export const recommendedPath = [
  { n: 1, title: "Package the technology as an SDK" },
  { n: 2, title: "Complete independent security validation" },
  { n: 3, title: "Secure one controlled pilot partner" },
  { n: 4, title: "Measure the pilot" },
  { n: 5, title: "Create a case study" },
  { n: 6, title: "Use the case study to approach larger partners" },
];

/* ------------------------------------------------------------------ */
/* Resources                                                           */
/* ------------------------------------------------------------------ */
export type Resource = {
  id: string;
  name: string;
  description: string;
  icon: string;
  href: string;
  featured?: boolean;
};

export const resources: Resource[] = [
  {
    id: "blog",
    name: "Blog",
    description: "LTCware company news and wallet-security insights.",
    icon: "newspaper",
    href: "/resources/blog",
  },
  {
    id: "events",
    name: "Events",
    description: "Upcoming demonstrations, conferences, and partner events.",
    icon: "calendar",
    href: "/resources/events",
  },
  {
    id: "webinars",
    name: "Webinars",
    description: "Live and recorded sessions about wallet recovery and SDK integration.",
    icon: "video",
    href: "/resources/webinars",
  },
  {
    id: "success-stories",
    name: "Success Stories",
    description: "Pilot results, partner outcomes, and LTCware case studies.",
    icon: "trophy",
    href: "/resources/success-stories",
    featured: true,
  },
  {
    id: "whitepapers",
    name: "Whitepapers",
    description: "Technical research, architecture guides, and strategic reports.",
    icon: "file-text",
    href: "/resources/whitepapers",
  },
  {
    id: "podcast",
    name: "Podcast",
    description: "Conversations about wallet security, fintech, and digital assets.",
    icon: "mic",
    href: "/resources/podcast",
  },
  {
    id: "features",
    name: "Features",
    description: "A complete overview of LTCware Security Hub capabilities.",
    icon: "sparkles",
    href: "/features",
  },
  {
    id: "security",
    name: "Security & Compliance",
    description: "Security architecture, validation plans, and deployment considerations.",
    icon: "shield-check",
    href: "/security",
  },
];

/* ------------------------------------------------------------------ */
/* Reusable CTA blocks                                                 */
/* ------------------------------------------------------------------ */
export const ctas = {
  pilot: {
    eyebrow: "Partner pilot program",
    heading: "Run one controlled pilot. Create the proof.",
    body: "A single, clearly-scoped deployment can produce the evidence needed to approach larger wallets, exchanges, fintechs, and institutions.",
    primary: { label: "Become a pilot partner", href: "/partners" },
    secondary: { label: "Contact the team", href: "/contact" },
  },
  contact: {
    eyebrow: "Get in touch",
    heading: "Explore a recovery integration with LTCware.",
    body: "Tell us about your wallet environment and recovery challenge. We'll follow up about a sandbox evaluation or a controlled pilot.",
    primary: { label: "Contact LTCware", href: "/contact" },
    secondary: { label: "Launch Demo", href: "/demo" },
  },
  demo: {
    eyebrow: "Interactive preview",
    heading: "See the Partner Console in action.",
    body: "Walk through a simulated recovery event — from policy check to authorization — with clearly-labeled illustrative data.",
    primary: { label: "Launch Demo", href: "/demo" },
    secondary: { label: "View security model", href: "/security" },
  },
};

/* ------------------------------------------------------------------ */
/* Global content labels used across illustrative content              */
/* ------------------------------------------------------------------ */
export const labels = {
  illustrative: "Illustrative",
  concept: "Concept",
  planned: "Planned",
  proposed: "Proposed",
  simulated: "Simulated",
  futureOpportunity: "Future opportunity",
  subjectToValidation: "Subject to validation",
};

/* ------------------------------------------------------------------ */
/* Partner Console demo data (shared by /demo + homepage preview)      */
/* ------------------------------------------------------------------ */
export const consoleNav = [
  { id: "overview", label: "Overview", icon: "layout-grid" },
  { id: "integration", label: "Integration", icon: "puzzle" },
  { id: "simulator", label: "Recovery Simulator", icon: "refresh-cw" },
  { id: "security", label: "Security", icon: "shield-check" },
  { id: "metrics", label: "Pilot Metrics", icon: "line-chart" },
  { id: "docs", label: "Documentation", icon: "book-open" },
];

export const consoleOverview = [
  { label: "Integration progress", value: "68%", icon: "puzzle", tone: "brand" },
  { label: "Sandbox", value: "Active", icon: "boxes", tone: "teal" },
  { label: "Recovery tests", value: "24", icon: "refresh-cw", tone: "navy" },
  { label: "Successful simulations", value: "23", icon: "check-circle", tone: "teal" },
  { label: "Open issues", value: "2", icon: "shield-alert", tone: "amber" },
  { label: "Audit status", value: "Planned", icon: "list-checks", tone: "navy" },
];

/** Ordered steps a recovery simulation walks through. */
export const recoverySteps = [
  "Request received",
  "Policy check started",
  "Key shares contacted",
  "Required threshold reached",
  "Authorization generated",
  "Recovery completed",
];
