/**
 * LTCware navigation model.
 *
 * Drives the desktop mega-menus, the full-screen mobile accordion, the header
 * action buttons, and the footer. Edit link labels / hrefs here.
 */
import {
  platformModules,
  solutionAudiences,
  solutionOutcomes,
  resources,
  PLATFORM_NAME,
} from "./site";

export type NavLink = {
  label: string;
  href: string;
  description?: string;
  icon?: string;
};

export type NavColumn = {
  heading?: string;
  links: NavLink[];
};

export type NavFeature = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
};

export type NavMenu = {
  id: string;
  label: string;
  href: string;
  /** "mega" renders a dropdown panel; "link" is a plain header link. */
  type: "mega" | "link";
  columns?: NavColumn[];
  feature?: NavFeature;
  /** "resources" gets the wide single-panel treatment. */
  variant?: "default" | "resources";
};

/* ------------------------------------------------------------------ */
/* Primary navigation                                                  */
/* ------------------------------------------------------------------ */
export const primaryNav: NavMenu[] = [
  {
    id: "products",
    label: "Products",
    href: "/products",
    type: "mega",
    feature: {
      eyebrow: "Platform",
      title: PLATFORM_NAME,
      description:
        "One connected platform for recovery integration, security validation, partner deployment, and measurable pilot results.",
      href: "/products/security-hub",
      cta: "Explore the platform",
    },
    columns: [
      {
        heading: "Products",
        links: platformModules.slice(0, 3).map((m) => ({
          label: m.name,
          href: m.href,
          description: m.tagline,
          icon: m.icon,
        })),
      },
      {
        heading: " ",
        links: platformModules.slice(3).map((m) => ({
          label: m.name,
          href: m.href,
          description: m.tagline,
          icon: m.icon,
        })),
      },
    ],
  },
  {
    id: "solutions",
    label: "Solutions",
    href: "/solutions",
    type: "mega",
    feature: {
      eyebrow: "Solutions",
      title: "Recovery for every wallet environment",
      description:
        "From self-custody wallets to fintechs and exchanges — add resilient recovery behind the interface your users already know.",
      href: "/solutions",
      cta: "See all solutions",
    },
    columns: [
      {
        heading: "By audience",
        links: solutionAudiences.map((s) => ({
          label: s.name,
          href: s.href,
          description: s.tagline,
          icon: s.icon,
        })),
      },
      {
        heading: "By outcome",
        links: solutionOutcomes.map((s) => ({
          label: s.name,
          href: s.href,
          description: s.tagline,
          icon: s.icon,
        })),
      },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    href: "/resources",
    type: "mega",
    variant: "resources",
    columns: [
      {
        links: resources.map((r) => ({
          label: r.name,
          href: r.href,
          description: r.description,
          icon: r.icon,
        })),
      },
    ],
  },
  {
    id: "partners",
    label: "Partners",
    href: "/partners",
    type: "link",
  },
  {
    id: "about",
    label: "About",
    href: "/about",
    type: "link",
  },
];

/* ------------------------------------------------------------------ */
/* Header action buttons                                               */
/* ------------------------------------------------------------------ */
export const headerActions = {
  demo: { label: "Launch Demo", href: "/demo" },
  contact: { label: "Contact", href: "/contact" },
  language: "English",
};

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */
export const footerColumns: NavColumn[] = [
  {
    heading: "Products",
    links: [
      { label: "Security Hub", href: "/products/security-hub" },
      { label: "Recovery SDK", href: "/products/recovery-sdk" },
      { label: "Partner Console", href: "/demo" },
      { label: "Pilot Program", href: "/partners" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Wallet Providers", href: "/solutions/wallet-providers" },
      { label: "Fintechs", href: "/solutions/fintechs" },
      { label: "Exchanges", href: "/solutions/exchanges" },
      { label: "Financial Institutions", href: "/solutions" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Events", href: "/resources/events" },
      { label: "Webinars", href: "/resources/webinars" },
      { label: "Success Stories", href: "/resources/success-stories" },
      { label: "Whitepapers", href: "/resources/whitepapers" },
      { label: "Podcast", href: "/resources/podcast" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Partners", href: "/partners" },
      { label: "Security", href: "/security" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
