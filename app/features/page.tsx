import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { FeatureList } from "@/components/FeatureList";
import { ConsolePreview } from "@/components/diagrams/ConsolePreview";
import { ModuleGrid } from "@/components/sections/ModuleGrid";
import { ctas } from "@/content/site";

export const metadata = {
  title: "Features",
  description:
    "A complete overview of LTCware Security Hub capabilities — recovery, key management, integration, and security validation.",
};

const featureCategories: {
  title: string;
  icon: string;
  items: string[];
}[] = [
  {
    title: "Recovery",
    icon: "key-round",
    items: [
      "Seedless recovery pathway — no phrase for a user to lose",
      "Multi-share recovery across distributed key holders",
      "Threshold policy control per recovery event",
      "Optional failure path for testing edge cases",
    ],
  },
  {
    title: "Key management",
    icon: "split",
    items: [
      "Distributed key shares with configurable holders",
      "Policy-driven orchestration across a recovery event",
      "Rotation-ready share model (planned)",
      "Authorization generated only when the threshold is met",
    ],
  },
  {
    title: "Integration",
    icon: "puzzle",
    items: [
      "Drop-in SDK behind an existing wallet interface",
      "Sandbox environment for evaluation",
      "Sample configurations and reference docs",
      "Behind-the-UI wiring — no interface replacement",
    ],
  },
  {
    title: "Security & validation",
    icon: "shield-check",
    items: [
      "Architecture documentation for review",
      "Published independent-validation roadmap",
      "Audit-ready structure (audits Planned)",
      "Controlled-pilot pathway with measurable results",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Features"
        title="A complete overview of LTCware Security Hub"
        subtitle="Every capability that takes a partner from first evaluation to a measured, controlled pilot — recovery, key management, integration tooling, and a security-validation roadmap you can hold LTCware to."
        primary={{ label: "Launch Demo", href: "/demo" }}
        secondary={{ label: "See products", href: "/products" }}
        bg="gradient"
      />

      {/* Modules at a glance */}
      <Section bg="white">
        <SectionHeading
          eyebrow="Modules"
          title="The platform at a glance"
          subtitle="Six connected modules cover the full path from integration to pilot — click any one to explore it."
        />
        <div className="mt-10">
          <ModuleGrid />
        </div>
      </Section>

      {/* Feature categories */}
      <Section bg="mist">
        <SectionHeading
          eyebrow="Capabilities"
          title="What you get, grouped by discipline"
          subtitle="A concept prototype — capabilities marked Planned are on the roadmap, not yet delivered."
        />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {featureCategories.map((cat) => (
            <div key={cat.title} className="card-surface p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand">
                <Icon name={cat.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy">{cat.title}</h3>
              <div className="mt-4">
                <FeatureList items={cat.items} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Console */}
      <Section bg="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Partner Console"
              title="Everything in one console"
              subtitle="Integration progress, sandbox status, recovery simulations, security posture, and pilot metrics — a single workspace for a partner engineering team, with clearly-labeled illustrative data."
            />
            <div className="mt-8">
              <Button href="/demo" size="lg" withArrow>
                Launch Demo
              </Button>
            </div>
          </div>
          <ConsolePreview />
        </div>
      </Section>

      {/* Pilot CTA */}
      <CTASection
        eyebrow={ctas.pilot.eyebrow}
        heading={ctas.pilot.heading}
        body={ctas.pilot.body}
        primary={ctas.pilot.primary}
        secondary={ctas.pilot.secondary}
        variant="gradient"
      />
    </>
  );
}
