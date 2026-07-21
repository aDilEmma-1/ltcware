import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { ProductCard } from "@/components/ProductCard";
import { solutionAudiences, solutionOutcomes, ctas } from "@/content/site";

export const metadata = {
  title: "Solutions",
  description:
    "How LTCware adds resilient, seedless wallet recovery behind the interfaces your customers already use.",
};

const howItWorks = [
  {
    n: 1,
    title: "Evaluate in the sandbox",
    body: "Explore the SDK, sample configurations, and a simulated recovery flow in a self-contained environment — no production keys, no real cryptographic operation.",
  },
  {
    n: 2,
    title: "Run a controlled pilot",
    body: "Wire LTCware into one clearly-scoped use case behind your existing interface, with a defined success metric and rollback path agreed up front.",
  },
  {
    n: 3,
    title: "Measure and expand",
    body: "Capture integration effort, recovery success, and time-to-deploy. A measured pilot becomes the evidence you take to broader rollout — subject to validation.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        eyebrow="Solutions"
        title="Built for the teams that already have the users"
        subtitle="Add resilient, seedless recovery behind an existing interface — without asking your customers to learn anything new or replace the wallet they already trust."
        primary={{ label: "Explore products", href: "/products" }}
        secondary={{ label: "Become a pilot partner", href: "/partners" }}
        bg="gradient"
      />

      {/* 2. By audience */}
      <Section bg="white">
        <SectionHeading
          eyebrow="By audience"
          title="Who LTCware is for"
          subtitle="From self-custody wallets to crypto-native fintechs and exchanges, LTCware slots in as the recovery layer behind products that already exist."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutionAudiences.map((s) => (
            <ProductCard
              key={s.id}
              name={s.name}
              tagline={s.tagline}
              icon={s.icon}
              href={s.href}
              cta="See more"
            />
          ))}
        </div>
      </Section>

      {/* 3. By outcome */}
      <Section bg="mist">
        <SectionHeading
          eyebrow="By outcome"
          title="What you can achieve"
          subtitle="Every engagement starts from a concrete goal. These are the outcomes a controlled LTCware pilot is designed to demonstrate."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutionOutcomes.map((s) => (
            <ProductCard
              key={s.id}
              name={s.name}
              tagline={s.tagline}
              icon={s.icon}
              href={s.href}
              cta="See more"
            />
          ))}
        </div>
      </Section>

      {/* 4. How it works */}
      <Section bg="white">
        <SectionHeading
          eyebrow="How it works"
          title="From sandbox to measured pilot"
          subtitle="A deliberately small, honest path — evaluate before you commit, pilot one use case, and let the numbers decide what comes next."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {howItWorks.map((step) => (
            <div key={step.n} className="card-surface flex flex-col p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-lg font-bold text-white">
                {step.n}
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy">{step.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">
                {step.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm italic text-ink/50">
          Concept prototype. Every stage is illustrative and subject to independent validation.
        </p>
      </Section>

      {/* 5. CTA */}
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
