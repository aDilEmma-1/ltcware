import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { CTASection } from "@/components/CTASection";
import { SuccessStoryCard } from "@/components/SuccessStoryCard";
import { RecoveryFlow } from "@/components/diagrams/RecoveryFlow";
import { ConsolePreview } from "@/components/diagrams/ConsolePreview";
import { TrustBar } from "@/components/sections/TrustBar";
import { ModuleGrid } from "@/components/sections/ModuleGrid";
import { ValidationPathway } from "@/components/sections/ValidationPathway";
import { ResourceGrid } from "@/components/sections/ResourceGrid";
import { featuredStories, CONCEPT_DISCLAIMER } from "@/content/success-stories";
import {
  homeHero,
  trustProof,
  platformModules,
  solutionAudiences,
  whySdk,
  ctas,
  recoverySteps,
  PLATFORM_NAME,
} from "@/content/site";

export default function HomePage() {
  return (
    <>
      {/* 3. Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
        <div className="bg-dotgrid pointer-events-none absolute inset-0 opacity-40" />
        <div className="container-lg relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">
              {homeHero.eyebrow}
            </span>
            <h1 className="h-display mt-4 text-4xl text-navy sm:text-5xl lg:text-[3.4rem]">
              {homeHero.headline}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/70">
              {homeHero.supporting}
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {homeHero.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm font-medium text-navy">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal/15 text-teal">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={homeHero.primaryCta.href} size="lg" withArrow>
                {homeHero.primaryCta.label}
              </Button>
              <Button href={homeHero.secondaryCta.href} size="lg" variant="secondary">
                {homeHero.secondaryCta.label}
              </Button>
            </div>
          </div>
          <div className="lg:pl-4">
            <RecoveryFlow />
          </div>
        </div>
      </section>

      {/* 4. Trust and technology proof */}
      <Section bg="white" spacing="default">
        <SectionHeading
          align="center"
          eyebrow="Trusted foundations"
          title={trustProof.heading}
        />
        <div className="mt-10">
          <TrustBar />
        </div>
      </Section>

      {/* 5. Platform overview */}
      <Section bg="mist">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="One platform"
              title={PLATFORM_NAME}
              subtitle="One connected platform for recovery integration, security validation, partner deployment, and measurable pilot results."
            />
            <div className="mt-6 grid grid-cols-2 gap-2">
              {platformModules.map((m) => (
                <Link
                  key={m.id}
                  href={m.href}
                  className="group flex items-center gap-2 rounded-xl border border-navy/8 bg-white px-3 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-brand hover:text-brand"
                >
                  <Icon name={m.icon} className="h-4.5 w-4.5 text-brand" />
                  {m.name}
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Button href="/products/security-hub" variant="ghost" withArrow>
                Explore the platform
              </Button>
            </div>
          </div>
          <ConsolePreview />
        </div>
      </Section>

      {/* 6. Product modules */}
      <Section bg="white">
        <SectionHeading
          eyebrow="Product modules"
          title="Everything you need to integrate resilient recovery"
          subtitle="Clickable modules that take a partner from first evaluation to a measured, controlled pilot."
        />
        <div className="mt-10">
          <ModuleGrid />
        </div>
      </Section>

      {/* 7. Solutions and customer types */}
      <Section bg="mist">
        <SectionHeading
          eyebrow="Solutions"
          title="Built for the teams that already have the users"
          subtitle="Add resilient recovery behind the interface your customers already know — from self-custody wallets to fintechs and exchanges."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutionAudiences.map((s) => (
            <Link
              key={s.id}
              href={s.href}
              className="card-surface group flex flex-col p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-base font-bold text-navy">{s.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">
                {s.tagline}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                See more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* 8. Why the SDK approach matters */}
      <Section bg="navy">
        <SectionHeading
          tone="light"
          eyebrow="Strategy"
          title={whySdk.heading}
          subtitle={whySdk.subheading}
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {whySdk.points.map((p) => (
            <div key={p.title}>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-brand-2">
                <Icon name={p.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{p.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
          <p className="text-lg font-semibold text-white">
            &ldquo;The wallet is the proof. The recovery architecture is the asset.&rdquo;
          </p>
        </div>
      </Section>

      {/* 9. Security-validation pathway */}
      <Section bg="white">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Independent validation"
              title="A clear path to earned trust"
              subtitle="LTCware makes no claims of completed audits. Instead, it publishes the roadmap security teams can hold it to — from internal review to a controlled pilot and ongoing monitoring."
            />
            <div className="mt-6">
              <Button href="/security" variant="ghost" withArrow>
                View the security model
              </Button>
            </div>
          </div>
          <ValidationPathway />
        </div>
      </Section>

      {/* 10. Success stories */}
      <Section bg="mist">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Success stories"
            title="From Technical Proof to Market Proof"
            subtitle="One controlled pilot can create the evidence required to approach larger wallets, exchanges, fintechs, and institutions."
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

      {/* 11. Interactive demo preview */}
      <Section bg="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Interactive preview"
              title="Watch a recovery event, step by step"
              subtitle="The simulated Partner Console walks through a full recovery — from request to authorization — with clearly-labeled illustrative data and an optional failure path."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/demo" size="lg" withArrow>
                Launch Demo
              </Button>
              <Button href="/products/security-hub" size="lg" variant="secondary">
                See the platform
              </Button>
            </div>
          </div>
          <div className="card-surface bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-bold text-navy">Recovery simulation</span>
              <span className="rounded-full bg-teal/10 px-2.5 py-0.5 text-xs font-semibold text-teal">
                Simulated
              </span>
            </div>
            <ol className="space-y-2.5">
              {recoverySteps.map((step, i) => (
                <li key={step} className="flex items-center gap-3">
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      i < 4
                        ? "bg-brand text-white"
                        : "bg-brand-50 text-brand ring-1 ring-brand/20"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-navy/85">{step}</span>
                  {i < 4 && (
                    <Check className="ml-auto h-4 w-4 text-teal" strokeWidth={3} />
                  )}
                </li>
              ))}
            </ol>
            <p className="mt-4 border-t border-navy/8 pt-3 text-xs text-ink/50">
              This demonstration performs no real cryptographic operation.
            </p>
          </div>
        </div>
      </Section>

      {/* 12. Partner pilot CTA */}
      <CTASection
        eyebrow={ctas.pilot.eyebrow}
        heading={ctas.pilot.heading}
        body={ctas.pilot.body}
        primary={ctas.pilot.primary}
        secondary={ctas.pilot.secondary}
        variant="gradient"
      />

      {/* 13. Resources */}
      <Section bg="mist">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Resources"
            title="Go deeper on wallet-recovery security"
            subtitle="Guides, case studies, events, and research on packaging recovery as an integration-ready layer."
          />
          <Button href="/resources" variant="secondary">
            Browse resources
          </Button>
        </div>
        <div className="mt-10">
          <ResourceGrid />
        </div>
      </Section>

      {/* 14. Contact CTA */}
      <CTASection
        eyebrow={ctas.contact.eyebrow}
        heading={ctas.contact.heading}
        body={ctas.contact.body}
        primary={ctas.contact.primary}
        secondary={ctas.contact.secondary}
        variant="brand"
      />
    </>
  );
}
