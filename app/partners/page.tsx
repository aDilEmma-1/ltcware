import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { FeatureList } from "@/components/FeatureList";
import { SuccessStoryCard } from "@/components/SuccessStoryCard";
import { featuredStories, CONCEPT_DISCLAIMER } from "@/content/success-stories";
import { recommendedPath, ctas } from "@/content/site";

export const metadata = {
  title: "Partners & Pilot Program",
  description:
    "Run one controlled pilot with LTCware and create the evidence needed to approach larger wallets, exchanges, fintechs, and institutions.",
};

const pilotStages = [
  {
    name: "Sandbox Evaluation",
    icon: "boxes",
    description:
      "Wire the SDK into a sandbox environment, run recovery simulations, and confirm the integration fits your existing wallet interface.",
    badge: "Concept",
    badgeTone: "neutral" as const,
  },
  {
    name: "Controlled Pilot",
    icon: "rocket",
    description:
      "Deploy one clearly-scoped use case with a defined success metric, measuring integration effort, recovery success, and time-to-deploy.",
    badge: "Proposed",
    badgeTone: "brand" as const,
  },
  {
    name: "Production Deployment",
    icon: "gauge",
    description:
      "Move from a measured pilot toward broader rollout — following independent security validation and a documented case study.",
    badge: "Subject to validation",
    badgeTone: "amber" as const,
  },
];

const partnerTraits = [
  "An existing wallet, fintech, or exchange with real users",
  "A recovery or account-access pain point worth solving",
  "An engineering team available to evaluate an SDK",
  "One use case that can be clearly scoped and measured",
  "Willingness to run a controlled, sandbox-first pilot",
  "Interest in becoming a documented reference case",
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Run one controlled pilot. Create the proof."
        subtitle="A single, clearly-scoped deployment can produce the evidence needed to approach larger wallets, exchanges, fintechs, and institutions."
        primary={{ label: "Contact the team", href: "/contact" }}
        secondary={{ label: "Launch Demo", href: "/demo" }}
        bg="gradient"
      />

      {/* The recommended path */}
      <Section bg="white">
        <SectionHeading
          eyebrow="The path"
          title="From technical proof to market proof"
          subtitle="A repeatable sequence: package the technology, validate it, prove it with one partner, then use that proof to reach the next."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recommendedPath.map((step) => (
            <div key={step.n} className="card-surface p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-lg font-bold text-white">
                {step.n}
              </span>
              <h3 className="mt-4 text-base font-bold leading-snug text-navy">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </Section>

      {/* Pilot stages */}
      <Section bg="mist">
        <SectionHeading
          eyebrow="Pilot stages"
          title="How a pilot is scoped"
          subtitle="Every engagement moves in the same order — sandbox first, then a measured pilot, then a path to production."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pilotStages.map((stage) => (
            <div key={stage.name} className="card-surface flex flex-col p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
                <Icon name={stage.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy">{stage.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">
                {stage.description}
              </p>
              <div className="mt-4">
                <Badge tone={stage.badgeTone}>{stage.badge}</Badge>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Who should pilot */}
      <Section bg="white">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Who should pilot"
              title="The right first partner"
              subtitle="The strongest pilots start with a team that already has users and a concrete recovery problem. One focused deployment beats a broad, unscoped rollout."
            />
            <div className="mt-6">
              <Button href="/solutions" variant="ghost" withArrow>
                Explore solutions by audience
              </Button>
            </div>
          </div>
          <div className="card-surface p-6">
            <FeatureList items={partnerTraits} columns={2} />
          </div>
        </div>
      </Section>

      {/* Featured case studies */}
      <Section bg="mist">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Case studies"
            title="What a completed pilot can look like"
            subtitle="Conceptual case studies showing how one controlled deployment becomes evidence for the next partner conversation."
          />
          <Button href="/resources/success-stories" variant="secondary">
            View all case studies
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredStories.map((story) => (
            <SuccessStoryCard key={story.slug} story={story} />
          ))}
        </div>
        <p className="mt-6 text-center text-sm italic text-ink/50">
          {CONCEPT_DISCLAIMER}
        </p>
      </Section>

      <CTASection
        eyebrow={ctas.contact.eyebrow}
        heading={ctas.contact.heading}
        body={ctas.contact.body}
        primary={ctas.contact.primary}
        secondary={ctas.contact.secondary}
        variant="gradient"
      />
    </>
  );
}
