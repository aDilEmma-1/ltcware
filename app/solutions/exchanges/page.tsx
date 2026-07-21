import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge, DisclaimerNote } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { FeatureList } from "@/components/FeatureList";
import { SuccessStoryCard } from "@/components/SuccessStoryCard";
import { RecoveryFlow } from "@/components/diagrams/RecoveryFlow";
import { getStory } from "@/content/success-stories";
import { ctas } from "@/content/site";

export const metadata = {
  title: "Exchanges",
  description:
    "How an exchange can evaluate LTCware's recovery architecture, integration boundaries, and validation requirements before any pilot.",
};

const approach = [
  {
    icon: "layers",
    title: "Understand the architecture first",
    body: "Start with a walkthrough of the multi-share recovery model, its components, and how a recovery event is authorized — no integration required.",
  },
  {
    icon: "shield-alert",
    title: "Map the trust boundaries",
    body: "Review where key shares live, which parties hold them, and how authorization thresholds are enforced against your existing controls.",
  },
  {
    icon: "list-checks",
    title: "Confirm validation requirements",
    body: "Agree on the independent-validation and audit prerequisites your security team would expect before scoping any controlled pilot.",
  },
];

const evaluationItems = [
  "Documented multi-share recovery architecture with clearly defined components.",
  "Defined trust boundaries showing where shares live and who can authorize.",
  "A published independent-validation roadmap your team can hold LTCware to.",
  "Integration boundaries designed to fit an exchange's existing controls.",
  "A threat-model review that can be assessed independently of any code.",
  "A go / no-go decision framework for a possible future controlled pilot.",
];

export default function ExchangesSolutionPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions · Exchanges"
        title="Evaluate recovery infrastructure on your terms"
        subtitle="Before any integration, review LTCware's recovery architecture, trust boundaries, and validation requirements — an exploratory, security-first path built for exchange teams."
        primary={{ label: "Talk to us", href: "/contact" }}
        secondary={{ label: "View security model", href: "/security" }}
        bg="gradient"
        visual={<RecoveryFlow />}
      />

      {/* Challenge / approach */}
      <Section bg="white">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Badge tone="amber">Future opportunity</Badge>
            <SectionHeading
              className="mt-4"
              eyebrow="The challenge"
              title="Architecture and boundaries come before any pilot"
              subtitle="An exchange exploring resilient recovery needs to understand the model, its trust boundaries, and the independent-validation requirements before committing engineering time — not the other way around."
            />
            <p className="mt-5 text-sm leading-relaxed text-ink/70">
              LTCware makes no claim of completed audits or exchange deployments.
              The starting point is a documented architecture your security team
              can assess on its own terms, with integration deferred until the
              prerequisites are met.
            </p>
            <div className="mt-6">
              <DisclaimerNote>
                Exploratory concept — no integration or funds are involved at this
                stage.
              </DisclaimerNote>
            </div>
          </div>

          <div className="grid gap-5">
            <SectionHeading
              eyebrow="The approach"
              title="A staged, security-first evaluation"
            />
            <div className="grid gap-4">
              {approach.map((step) => (
                <div key={step.title} className="card-surface flex gap-4 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand">
                    <Icon name={step.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-navy">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* What you get to evaluate */}
      <Section bg="mist">
        <SectionHeading
          eyebrow="What you evaluate"
          title="Everything needed to assess — before any commitment"
          subtitle="An exchange gets a documented, reviewable package it can put in front of its own security and risk teams, independent of any integration work."
        />
        <div className="mt-10 card-surface p-8">
          <FeatureList items={evaluationItems} columns={2} />
        </div>
        <p className="mt-5 text-sm italic text-ink/50">
          Illustrative evaluation scope — subject to validation and refinement
          per engagement.
        </p>
      </Section>

      {/* Related case study */}
      <Section bg="white">
        <SectionHeading
          align="center"
          eyebrow="Related case study"
          title="How an exchange evaluation could unfold"
          subtitle="A conceptual walkthrough of an architecture and validation review — exploratory, with no integration yet."
        />
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-md">
            <SuccessStoryCard story={getStory("exchange-security-evaluation")!} />
          </div>
        </div>
      </Section>

      <CTASection {...ctas.contact} variant="gradient" />
    </>
  );
}
