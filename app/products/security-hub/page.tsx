import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge, DisclaimerNote } from "@/components/ui/Badge";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { FeatureList } from "@/components/FeatureList";
import { ModuleGrid } from "@/components/sections/ModuleGrid";
import { RecoveryFlow } from "@/components/diagrams/RecoveryFlow";
import { ArchitectureLayers } from "@/components/diagrams/ArchitectureLayers";
import { ConsolePreview } from "@/components/diagrams/ConsolePreview";
import { PLATFORM_NAME, ctas } from "@/content/site";

export const metadata = {
  title: "LTCware Security Hub",
  description:
    "One connected platform for recovery integration, security validation, and measurable partner pilots.",
};

const orchestrationPoints = [
  "Policy-driven coordination of distributed key shares across a recovery event.",
  "Configurable thresholds so recovery only proceeds once required shares agree.",
  "Authorization steps that produce a clear, auditable record of each decision.",
  "Failure paths that halt cleanly when policy or threshold conditions are not met.",
];

const toolkitCapabilities = [
  "Integration documentation and quick-start guides (Illustrative)",
  "Sample configurations for common wallet environments",
  "A sandbox to run recovery simulations end to end",
  "Reference request and response payloads",
  "Environment and threshold configuration templates",
  "Checklists to prepare for a controlled pilot",
];

export default function SecurityHubPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        eyebrow="Platform"
        title={PLATFORM_NAME}
        subtitle="One connected platform for recovery integration, security validation, partner deployment, and measurable pilot results."
        primary={{ label: "Launch Demo", href: "/demo" }}
        secondary={{ label: "Contact", href: "/contact" }}
        bg="navy"
        visual={<ConsolePreview />}
      />

      {/* 2. Modules */}
      <Section bg="white">
        <SectionHeading
          eyebrow="Modules"
          title="One platform, six modules"
          subtitle="Each module is a clickable step in the same journey — from first evaluation to a measured, controlled pilot."
        />
        <div className="mt-10">
          <ModuleGrid />
        </div>
      </Section>

      {/* 3. Key Share Orchestration */}
      <Section bg="mist" id="orchestration">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4">
              <Badge tone="brand">Proposed</Badge>
            </div>
            <SectionHeading
              eyebrow="Module"
              title="Key Share Orchestration"
              subtitle="Recovery is only as strong as the policy behind it. Orchestration coordinates LTCware's proposed multi-share architecture — deciding which shares participate, what threshold must be reached, and how authorization is granted for a single recovery event."
            />
            <div className="mt-8">
              <FeatureList items={orchestrationPoints} />
            </div>
            <div className="mt-8">
              <Button href="/products/recovery-sdk" variant="ghost" withArrow>
                Explore the Recovery SDK
              </Button>
            </div>
          </div>
          <div className="lg:pl-4">
            <RecoveryFlow />
          </div>
        </div>
      </Section>

      {/* 4. Integration Toolkit */}
      <Section bg="white" id="toolkit">
        <SectionHeading
          eyebrow="Module"
          title="Integration Toolkit"
          subtitle="Everything an engineering team needs to evaluate and wire in LTCware before committing to a pilot: documentation, sample configurations, and a sandbox where recovery flows can be exercised safely."
        />
        <div className="mt-10 max-w-3xl">
          <FeatureList items={toolkitCapabilities} columns={2} />
        </div>
        <div className="mt-8">
          <DisclaimerNote>
            Toolkit contents are illustrative for this concept prototype and
            perform no real cryptographic operation.
          </DisclaimerNote>
        </div>
      </Section>

      {/* 5. How it fits your stack */}
      <Section bg="mist">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="lg:pr-4">
            <ArchitectureLayers />
          </div>
          <div>
            <SectionHeading
              eyebrow="Architecture"
              title="How it fits your stack"
              subtitle="LTCware sits behind the wallet interface your users already trust. The SDK and orchestration layer slot between your application and the distributed key shares, so recovery becomes an added capability — not a replacement for your product."
            />
            <div className="mt-8">
              <FeatureList
                items={[
                  "Keeps your existing wallet interface unchanged.",
                  "Adds resilient, seedless recovery as a distinct layer.",
                  "Isolates key-share coordination behind a policy boundary.",
                  "Logs recovery events for audit and monitoring (proposed).",
                ]}
              />
            </div>
            <div className="mt-8">
              <Button href="/security" variant="ghost" withArrow>
                View the security model
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. CTA */}
      <CTASection
        eyebrow={ctas.demo.eyebrow}
        heading={ctas.demo.heading}
        body={ctas.demo.body}
        primary={ctas.demo.primary}
        secondary={ctas.demo.secondary}
        variant="gradient"
      />
    </>
  );
}
