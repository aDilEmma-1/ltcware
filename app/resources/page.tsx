import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { SuccessStoryCard } from "@/components/SuccessStoryCard";
import { ResourceGrid } from "@/components/sections/ResourceGrid";
import { featuredStories, CONCEPT_DISCLAIMER } from "@/content/success-stories";
import { ctas } from "@/content/site";

export const metadata = {
  title: "Resources",
  description:
    "Guides, case studies, events, and research on packaging wallet recovery as an integration-ready security layer.",
};

export default function ResourcesPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        eyebrow="Resources"
        title="Go deeper on wallet-recovery security"
        subtitle="Guides, case studies, events, and research on packaging patented recovery as an integration-ready layer — for the wallets, fintechs, and exchanges that already have the users."
        bg="gradient"
      />

      {/* 2. Browse all resources */}
      <Section bg="mist">
        <SectionHeading eyebrow="Browse" title="All resources" />
        <div className="mt-10">
          <ResourceGrid />
        </div>
      </Section>

      {/* 3. Featured success stories */}
      <Section bg="white">
        <SectionHeading
          eyebrow="Success stories"
          title="From technical proof to market proof"
          subtitle="One controlled pilot can create the evidence required to approach larger wallets, exchanges, fintechs, and institutions."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredStories.map((story) => (
            <SuccessStoryCard key={story.slug} story={story} />
          ))}
        </div>
        <p className="mt-6 text-center text-sm italic text-ink/50">
          {CONCEPT_DISCLAIMER}
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/resources/success-stories" variant="secondary">
            View all case studies
          </Button>
        </div>
      </Section>

      {/* 4. Contact CTA */}
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
