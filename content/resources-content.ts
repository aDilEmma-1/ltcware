/**
 * Mock listing data for the resource pages (blog, events, webinars,
 * whitepapers, podcast). All illustrative — no real articles or recordings.
 */

export const blogPosts = [
  {
    title: "The wallet is the proof, the recovery architecture is the asset",
    excerpt:
      "Why LTCware is shifting from consumer wallet growth to packaging recovery as a B2B SDK.",
    category: "Strategy",
    date: "July 8, 2026",
    readTime: "6 min read",
  },
  {
    title: "Seedless recovery, explained without the jargon",
    excerpt:
      "A plain-language walkthrough of how multi-share recovery removes the seed phrase as a single point of failure.",
    category: "Engineering",
    date: "June 24, 2026",
    readTime: "8 min read",
  },
  {
    title: "Designing a recovery pilot you can actually measure",
    excerpt:
      "Success criteria, scope, and metrics for a controlled wallet-recovery pilot.",
    category: "Pilots",
    date: "June 10, 2026",
    readTime: "5 min read",
  },
  {
    title: "What independent validation should look like",
    excerpt:
      "The stages a recovery architecture should pass through before it earns institutional trust.",
    category: "Security",
    date: "May 29, 2026",
    readTime: "7 min read",
  },
  {
    title: "Cross-chain recovery: one layer, many assets",
    excerpt:
      "How a single recovery layer can sit behind wallets that support multiple chains.",
    category: "Engineering",
    date: "May 14, 2026",
    readTime: "6 min read",
  },
  {
    title: "From Uniwaffle to Security Hub",
    excerpt:
      "What a working consumer wallet taught us about packaging the technology for partners.",
    category: "Company",
    date: "April 30, 2026",
    readTime: "4 min read",
  },
];

export const events = [
  {
    title: "LTCware Security Hub — live integration walkthrough",
    type: "Webcast",
    date: "August 12, 2026",
    location: "Online",
    status: "Upcoming",
  },
  {
    title: "Wallet Recovery Roundtable",
    type: "Partner event",
    date: "September 3, 2026",
    location: "Seoul, KR",
    status: "Upcoming",
  },
  {
    title: "Fintech Security Summit — booth & demo",
    type: "Conference",
    date: "September 22, 2026",
    location: "Singapore",
    status: "Upcoming",
  },
  {
    title: "Seedless Recovery Deep Dive",
    type: "Workshop",
    date: "October 15, 2026",
    location: "Online",
    status: "Upcoming",
  },
  {
    title: "Pilot Partner Office Hours",
    type: "Community",
    date: "Monthly",
    location: "Online",
    status: "Recurring",
  },
];

export const webinars = [
  {
    title: "Adding recovery without changing your wallet UI",
    description: "A 30-minute walkthrough of a behind-the-interface integration.",
    duration: "30 min",
    status: "On demand",
  },
  {
    title: "Multi-share thresholds and policy design",
    description: "How to model share policy against an existing risk framework.",
    duration: "45 min",
    status: "On demand",
  },
  {
    title: "Running a controlled recovery pilot",
    description: "Scoping, success criteria, and measurement for a first pilot.",
    duration: "40 min",
    status: "Upcoming",
  },
  {
    title: "Cross-chain recovery patterns",
    description: "Supporting multiple assets behind a single recovery layer.",
    duration: "35 min",
    status: "On demand",
  },
  {
    title: "Preparing for independent security validation",
    description: "What to expect across the seven validation stages.",
    duration: "50 min",
    status: "Upcoming",
  },
];

export const whitepapers = [
  {
    title: "Multi-share wallet recovery: architecture overview",
    description: "A technical overview of the proposed four-share recovery model.",
    topic: "Architecture",
    pages: "18 pages",
  },
  {
    title: "Seedless recovery threat model",
    description: "Trust boundaries, assumptions, and failure modes of the recovery layer.",
    topic: "Security",
    pages: "22 pages",
  },
  {
    title: "From consumer wallet to B2B SDK: a strategic report",
    description: "The case for packaging recovery architecture as an integration-ready layer.",
    topic: "Strategy",
    pages: "14 pages",
  },
  {
    title: "Designing measurable recovery pilots",
    description: "A framework for scoping and evaluating a controlled pilot.",
    topic: "Pilots",
    pages: "12 pages",
  },
  {
    title: "Independent validation roadmap",
    description: "The proposed sequence from internal review to ongoing monitoring.",
    topic: "Security",
    pages: "10 pages",
  },
];

export const podcastEpisodes = [
  {
    number: 12,
    title: "Why recovery is the real product",
    description: "A conversation about wallet security, distribution, and B2B strategy.",
    guest: "LTCware engineering",
    duration: "41 min",
  },
  {
    number: 11,
    title: "The seed phrase problem",
    description: "How permanent loss shapes user trust in self-custody wallets.",
    guest: "Wallet UX researcher",
    duration: "38 min",
  },
  {
    number: 10,
    title: "Pilots that turn into partnerships",
    description: "Turning a controlled pilot into a repeatable case study.",
    guest: "Partnerships lead",
    duration: "45 min",
  },
  {
    number: 9,
    title: "Security you can hold a vendor to",
    description: "What an honest independent-validation roadmap looks like.",
    guest: "Security advisor",
    duration: "52 min",
  },
  {
    number: 8,
    title: "Cross-chain, one recovery layer",
    description: "The engineering behind supporting many assets at once.",
    guest: "LTCware engineering",
    duration: "36 min",
  },
];
