import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { ModuleGrid } from "@/components/sections/ModuleGrid";
import { RecoveryFlow } from "@/components/diagrams/RecoveryFlow";
import { PLATFORM_NAME, products, ctas } from "@/content/site";

export const metadata = {
  title: "Products",
  description:
    "One connected platform and six modules that take a partner from first evaluation to a measured, controlled wallet-recovery pilot.",
};

const platformProduct = products[0];

export default function ProductsPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        eyebrow="Products"
        title="Everything you need to ship resilient recovery"
        subtitle="The LTCware Security Hub packages patented wallet-recovery architecture into one integration-ready platform — with connected modules for evaluation, integration, validation, and a controlled pilot."
        primary={{ label: "Launch Demo", href: "/demo" }}
        secondary={{ label: "Talk to us", href: "/contact" }}
        bg="gradient"
      />

      {/* 2. Platform highlight */}
      <Section bg="white">
        <div className="card-surface relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-white p-8 md:p-12">
          <div className="bg-dotgrid pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[auto_1fr]">
            <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-brand text-white shadow-[var(--shadow-card)]">
              <Icon name="layout-grid" className="h-10 w-10" />
            </span>
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-brand">
                Platform
              </span>
              <h2 className="h-display mt-2 text-3xl text-navy md:text-4xl">
                {PLATFORM_NAME}
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/70">
                {platformProduct.tagline} One workspace that unifies the SDK,
                key-share orchestration, security documentation, and the Partner
                Console — so an engineering team can go from sandbox evaluation
                to a measurable pilot in a single, connected environment.
              </p>
              <div className="mt-7">
                <Button href="/products/security-hub" withArrow>
                  Explore the platform
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Product modules */}
      <Section bg="mist">
        <SectionHeading
          eyebrow="Product modules"
          title="Six connected modules"
          subtitle="Each module is a clickable step on the path from first evaluation to a controlled, measurable deployment."
        />
        <div className="mt-10">
          <ModuleGrid />
        </div>
      </Section>

      {/* 4. How recovery integrates behind the wallet */}
      <Section bg="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Behind the interface"
              title="Recovery integrates behind the wallet your users already know"
              subtitle="LTCware sits underneath the existing wallet experience. When a recovery event begins, the security layer coordinates distributed key shares and authorization — without replacing the interface your customers trust."
            />
            <ul className="mt-6 space-y-3">
              {[
                "Drop-in libraries, not a rebuild of the wallet UI",
                "Policy-driven, multi-share key architecture",
                "Cross-chain compatible and integration-ready",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="text-base font-medium text-navy/85">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/products/recovery-sdk" variant="ghost" withArrow>
                See the Recovery SDK
              </Button>
            </div>
          </div>
          <RecoveryFlow />
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
