import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { Badge, statusTone } from "@/components/ui/Badge";
import { CTASection } from "@/components/CTASection";
import { SuccessStoryFilters } from "@/components/SuccessStoryFilters";
import { FeatureList } from "@/components/FeatureList";
import { featuredStories, CONCEPT_DISCLAIMER } from "@/content/success-stories";
import { ctas } from "@/content/site";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Conceptual LTCware case studies — pilot results, partner outcomes, and illustrative wallet-recovery deployments.",
};

export default function SuccessStoriesPage() {
  const featured = featuredStories[0];

  return (
    <>
      <PageHero
        eyebrow="Success stories"
        title="From technical proof to market proof"
        subtitle="A conceptual case-study library showing how one controlled pilot can create the evidence needed to approach larger wallets, fintechs, exchanges, and institutions."
        bg="gradient"
      />

      {/* Featured case study */}
      <Section bg="white" spacing="sm">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">
          Featured case study
        </span>
        <Link
          href={`/resources/success-stories/${featured.slug}`}
          className="group mt-4 grid overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-[var(--shadow-card)] lg:grid-cols-2"
        >
          <div className="relative flex flex-col justify-between bg-gradient-to-br from-navy via-brand-700 to-brand p-8 text-white">
            <div className="bg-dotgrid absolute inset-0 opacity-25" />
            <div className="relative">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
                  {featured.partnerType}
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-navy">
                  {featured.stage}
                </span>
              </div>
              <h2 className="mt-6 text-2xl font-bold leading-tight md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-white/80">{featured.summary}</p>
            </div>
            <p className="relative mt-8 text-[11px] italic text-white/60">
              {CONCEPT_DISCLAIMER}
            </p>
          </div>
          <div className="p-8">
            <Badge tone={statusTone(featured.status)}>{featured.status}</Badge>
            <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-ink/50">
              Why LTCware
            </h3>
            <div className="mt-3">
              <FeatureList items={featured.whyLtcware} />
            </div>
            <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-brand">
              Read the full case study
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </Section>

      {/* Filterable grid */}
      <Section bg="mist">
        <SuccessStoryFilters />
      </Section>

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
