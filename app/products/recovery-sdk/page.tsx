import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureList } from "@/components/FeatureList";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/CTASection";
import { RecoveryFlow } from "@/components/diagrams/RecoveryFlow";
import { ArchitectureLayers } from "@/components/diagrams/ArchitectureLayers";
import { ctas } from "@/content/site";

export const metadata: Metadata = {
  title: "Recovery SDK",
  description:
    "Add seedless, multi-share wallet recovery behind your existing interface — a concept SDK from LTCware.",
};

const capabilities = [
  "Seedless recovery — restore access without a fragile 12-word seed phrase to lose or leak.",
  "Multi-share key architecture — split trust across a proposed four-share / threshold model.",
  "Cross-chain compatible — designed to work across the wallet environments you already support.",
  "Behind-the-UI integration — recovery logic drops in beneath your existing interface, unchanged.",
  "Sandbox environment — evaluate with simulated shares and clearly-labeled illustrative data.",
  "Policy control — define thresholds, authorization rules, and recovery conditions per deployment.",
];

/** Illustrative, non-runnable pseudocode shown in the hero visual. */
const CodeMock = () => (
  <div className="card-surface overflow-hidden bg-navy p-0 shadow-[var(--shadow-card)]">
    <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
      <span className="h-3 w-3 rounded-full bg-white/25" />
      <span className="h-3 w-3 rounded-full bg-white/25" />
      <span className="h-3 w-3 rounded-full bg-white/25" />
      <span className="ml-3 font-mono text-xs text-white/50">recovery.config.ts</span>
    </div>
    <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-relaxed text-white/80">
      <code>{`import { RecoveryClient } from "@ltcware/recovery";

const recovery = new RecoveryClient({
  shares: 4,          // distributed key shares
  threshold: 3,       // required to authorize
  chains: ["evm", "btc", "solana"],
  sandbox: true,      // simulated — no real keys
});

recovery.onRecover(async (event) => {
  await verifyPolicy(event.request);
  return event.authorize();
});`}</code>
    </pre>
    <p className="border-t border-white/10 px-5 py-3 font-mono text-[11px] text-white/40">
      Illustrative pseudocode — not runnable.
    </p>
  </div>
);

export default function RecoverySdkPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        eyebrow="Recovery SDK"
        title="Add resilient recovery to an existing wallet"
        subtitle="Seedless, multi-share recovery that lives behind your existing interface — so your users keep the wallet they know while gaining a more resilient way back in."
        primary={{ label: "Launch Demo", href: "/demo" }}
        secondary={{ label: "See the platform", href: "/products/security-hub" }}
        bg="gradient"
        visual={<CodeMock />}
      />

      {/* 2. Capabilities */}
      <Section bg="white">
        <SectionHeading
          eyebrow="Capabilities"
          title="What the SDK gives you"
          subtitle="Everything an engineering team needs to evaluate seedless recovery — designed as drop-in libraries, not a rewrite of your wallet."
        />
        <div className="mt-10">
          <FeatureList columns={2} items={capabilities} />
        </div>
      </Section>

      {/* 3. Recovery flow */}
      <Section bg="mist">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="How it works"
              title="The recovery flow"
              subtitle="A recovery event moves from the wallet your users already trust, through the LTCware security layer, to distributed key shares — and only authorizes once the threshold is met."
            />
            <div className="mt-6">
              <Button href="/security" variant="ghost" withArrow>
                View the security model
              </Button>
            </div>
          </div>
          <RecoveryFlow />
        </div>
      </Section>

      {/* 4. Where the SDK sits */}
      <Section bg="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ArchitectureLayers />
          <div>
            <SectionHeading
              eyebrow="Architecture"
              title="Where the SDK sits"
              subtitle="The Recovery SDK slots in beneath your existing wallet interface. Your application stays unchanged on top; orchestration, distributed shares, and proposed audit logging sit underneath."
            />
            <p className="mt-5 text-base leading-relaxed text-ink/70">
              This is a conceptual layering, not a finished system. The independent-validation
              roadmap and monitoring layer are Planned and Proposed — held to the security model
              LTCware publishes rather than to claims of completed audits.
            </p>
            <div className="mt-6">
              <Button href="/products/security-hub" variant="ghost" withArrow>
                Explore the full platform
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Pilot CTA */}
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
