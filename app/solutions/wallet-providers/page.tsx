import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { DisclaimerNote } from "@/components/ui/Badge";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { FeatureList } from "@/components/FeatureList";
import { SuccessStoryCard } from "@/components/SuccessStoryCard";
import { RecoveryFlow } from "@/components/diagrams/RecoveryFlow";
import { ctas } from "@/content/site";
import { getStory } from "@/content/success-stories";

export const metadata = {
  title: "Wallet Providers",
  description:
    "Add seedless multi-share recovery behind your existing wallet interface — reduce permanent lockouts without replacing your product.",
};

export default function WalletProvidersPage() {
  const story = getStory("self-custody-wallet-recovery-pilot")!;

  const benefits = [
    "Keep your existing wallet interface — recovery is added behind the UI your users already know.",
    "Reduce permanent lockouts by replacing single seed-phrase dependence with distributed key shares.",
    "Seedless onboarding lowers the friction that drives drop-off during account setup.",
    "Cross-chain compatible SDK designed to sit alongside your current wallet stack.",
    "Policy-driven recovery authorization with a proposed multi-share threshold model.",
    "A controlled-pilot path that produces measurable integration and recovery evidence.",
  ];

  return (
    <>
      {/* 1. Hero */}
      <PageHero
        eyebrow="Solutions · Wallet Providers"
        title="Add recovery without replacing your wallet"
        subtitle="Reduce permanent lockouts for your users while keeping the interface they already trust. LTCware layers seedless, multi-share recovery behind your existing wallet."
        primary={{ label: "Become a pilot partner", href: "/partners" }}
        secondary={{ label: "Launch Demo", href: "/demo" }}
        bg="gradient"
        visual={<RecoveryFlow />}
      />

      {/* 2. Challenge / Approach */}
      <Section bg="white">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="card-surface p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
              <Icon name="shield-alert" className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-xl font-bold text-navy">The challenge</h2>
            <p className="mt-3 text-base leading-relaxed text-ink/70">
              Self-custody puts the seed phrase at the center of everything. When
              a user misplaces, mistypes, or never safely records that phrase,
              access is gone for good. There is no reset link and no support desk
              that can help — a single point of failure that turns an ordinary
              mistake into a permanent lockout, lost funds, and churn.
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink/70">
              Rebuilding recovery in-house means owning novel cryptography,
              distributed key handling, and a security surface most wallet teams
              never signed up to maintain.
            </p>
          </div>
          <div className="card-surface p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
              <Icon name="key-round" className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-xl font-bold text-navy">The approach</h2>
            <p className="mt-3 text-base leading-relaxed text-ink/70">
              LTCware adds seedless, multi-share recovery behind your existing
              interface. Instead of one fragile seed phrase, access is protected
              by distributed key shares and a policy-driven authorization
              threshold — so no single lost credential locks a user out.
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink/70">
              Your wallet keeps its own look, flows, and brand. The recovery
              architecture drops in as an integration-ready layer, leaving the
              experience your users already know fully intact.
            </p>
          </div>
        </div>
      </Section>

      {/* 3. Benefits */}
      <Section bg="mist">
        <SectionHeading
          eyebrow="Benefits"
          title="Why wallet providers evaluate LTCware"
          subtitle="A recovery layer built to strengthen an existing wallet product — not to compete with it."
        />
        <div className="mt-10">
          <FeatureList columns={2} items={benefits} />
        </div>
        <div className="mt-8">
          <DisclaimerNote>
            LTCware is a concept prototype. Capabilities above describe the
            proposed architecture and are subject to independent validation.
          </DisclaimerNote>
        </div>
      </Section>

      {/* 4. Related case study */}
      <Section bg="white">
        <SectionHeading
          eyebrow="Related case study"
          title="Self-custody wallet recovery pilot"
          subtitle="A conceptual walkthrough of how a self-custody wallet could layer LTCware recovery behind its existing interface."
        />
        <div className="mt-8 max-w-md">
          <SuccessStoryCard story={story} />
        </div>
      </Section>

      {/* 5. Pilot CTA */}
      <CTASection {...ctas.pilot} variant="gradient" />
    </>
  );
}
