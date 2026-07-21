import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Badge, DisclaimerNote } from "@/components/ui/Badge";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { FeatureList } from "@/components/FeatureList";
import { SuccessStoryCard } from "@/components/SuccessStoryCard";
import { ArchitectureLayers } from "@/components/diagrams/ArchitectureLayers";
import { ctas } from "@/content/site";
import { getStory } from "@/content/success-stories";

export const metadata = {
  title: "Crypto-Native Fintechs",
  description:
    "Add resilient, seedless wallet recovery behind the customer interface your crypto-native fintech already ships.",
};

const CHALLENGES = [
  "Embedded-wallet products absorb a rising volume of account-recovery support tickets.",
  "Exposing seed phrases to end users conflicts with a polished consumer experience.",
  "Recovery logic is scattered across internal systems, creating single points of failure.",
  "Multi-asset products need a recovery path that works across chains, not just one.",
];

const APPROACH = [
  "Recovery runs as a layer behind your existing customer interface — no seed phrases surfaced.",
  "Distributed key shares replace reliance on any single internal system or operator.",
  "Recovery policy is modeled on your current risk and compliance framework.",
  "One cross-chain integration covers the multiple assets your product already supports.",
];

const BENEFITS = [
  "Reduced recovery-ticket support load (illustrative model, subject to validation).",
  "Recovery that runs behind the app, keeping the customer experience unchanged.",
  "Recovery policy mapped onto your existing risk and authorization controls.",
  "Cross-chain compatibility that fits a multi-asset embedded wallet.",
  "A distributed multi-share model that removes internal single points of failure.",
  "A clearly-scoped sandbox evaluation before any production commitment.",
];

export default function FintechsSolutionPage() {
  const story = getStory("crypto-native-fintech-integration")!;

  return (
    <>
      {/* 1. Hero */}
      <PageHero
        eyebrow="Solutions · Fintechs"
        title="Resilient recovery inside your financial product"
        subtitle="Crypto-native fintechs ship embedded wallets to millions of users — and inherit the support cost when those users lose access. LTCware adds seedless, multi-share recovery behind your existing customer interface, so resilience becomes an integration, not a rebuild."
        primary={{ label: "Become a pilot partner", href: "/partners" }}
        secondary={{ label: "Launch Demo", href: "/demo" }}
        bg="gradient"
        visual={<ArchitectureLayers />}
      />

      {/* 2. Challenge / approach */}
      <Section bg="white">
        <SectionHeading
          eyebrow="The recovery gap"
          title="The wallet is embedded. The recovery burden lands on support."
          subtitle="An embedded wallet is a great acquisition surface — until account-recovery tickets start scaling faster than the team. LTCware is designed to move that burden into a resilient, policy-driven layer."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="card-surface p-7">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
              <Icon name="shield-alert" className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-navy">The challenge</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">
              Recovery is the hardest part of owning an embedded wallet — and the
              part most likely to erode trust and margin.
            </p>
            <div className="mt-5">
              <FeatureList items={CHALLENGES} />
            </div>
          </div>
          <div className="card-surface p-7">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
              <Icon name="layers" className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-navy">
              The LTCware approach
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">
              Package recovery as a layer that sits behind your app and maps onto
              controls you already run.
            </p>
            <div className="mt-5">
              <FeatureList items={APPROACH} />
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Benefits */}
      <Section bg="mist">
        <SectionHeading
          eyebrow="What fintechs get"
          title="Lower support load, unchanged customer experience"
          subtitle="Resilient recovery that operates behind the interface your customers already know — modeled on your risk framework and spanning the assets you support."
        />
        <div className="mt-10 card-surface p-7">
          <FeatureList items={BENEFITS} columns={2} />
          <div className="mt-6 border-t border-navy/8 pt-5">
            <DisclaimerNote>
              Support-cost figures are illustrative and subject to validation in a
              controlled pilot.
            </DisclaimerNote>
          </div>
        </div>
      </Section>

      {/* 4. Related case study */}
      <Section bg="white">
        <SectionHeading
          align="center"
          eyebrow="Related case study"
          title="See the pattern in a fintech context"
          subtitle="A conceptual walkthrough of how the recovery layer could operate behind an embedded-wallet product."
        />
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-md">
            <SuccessStoryCard story={story} />
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <Badge tone="teal">Illustrative use case</Badge>
        </div>
      </Section>

      {/* 5. Pilot CTA */}
      <CTASection {...ctas.pilot} variant="gradient" />
    </>
  );
}
