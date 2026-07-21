import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight, Dot } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge, statusTone, DisclaimerNote } from "@/components/ui/Badge";
import { MetricCard } from "@/components/MetricCard";
import { FeatureList } from "@/components/FeatureList";
import { CTASection } from "@/components/CTASection";
import {
  successStories,
  getStory,
  CONCEPT_DISCLAIMER,
} from "@/content/success-stories";

export function generateStaticParams() {
  return successStories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  return {
    title: story ? `${story.title} — Case Study` : "Case Study",
    description: story?.summary,
  };
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-ink/75">
          <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
          {i}
        </li>
      ))}
    </ul>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-brand-700 to-brand text-white">
        <div className="bg-dotgrid absolute inset-0 opacity-20" />
        <div className="container-lg relative py-14 md:py-20">
          <Link
            href="/resources/success-stories"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> All case studies
          </Link>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
              {story.partnerType}
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-navy">
              {story.stage}
            </span>
            <span className="rounded-full bg-teal/20 px-3 py-1 text-xs font-bold text-teal">
              {story.status}
            </span>
          </div>
          <h1 className="h-display mt-5 max-w-3xl text-3xl md:text-5xl">
            {story.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">{story.summary}</p>
          <div className="mt-6">
            <p className="inline-flex items-center gap-2 rounded-lg border border-dashed border-white/30 bg-white/5 px-3 py-1.5 text-xs text-white/70">
              <Dot className="h-4 w-4 text-teal" />
              {CONCEPT_DISCLAIMER}
            </p>
          </div>
        </div>
      </section>

      {/* Challenge / Why / Scope */}
      <Section bg="white">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-bold text-navy">The challenge</h2>
              <p className="mt-3 leading-relaxed text-ink/75">{story.challenge}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy">Why LTCware</h2>
              <div className="mt-4">
                <FeatureList items={story.whyLtcware} />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy">Pilot scope</h2>
              <div className="mt-4">
                <FeatureList items={story.pilotScope} />
              </div>
            </div>
          </div>

          {/* Aside */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="card-surface p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink/50">
                At a glance
              </h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-ink/55">Partner type</dt>
                  <dd className="font-semibold text-navy">{story.partnerType}</dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-ink/55">Pilot stage</dt>
                  <dd className="font-semibold text-navy">{story.stage}</dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-ink/55">Status</dt>
                  <dd>
                    <Badge tone={statusTone(story.status)}>{story.status}</Badge>
                  </dd>
                </div>
              </dl>
              <div className="mt-5 border-t border-navy/8 pt-4">
                <DisclaimerNote>Illustrative — not a completed engagement.</DisclaimerNote>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* Timeline */}
      <Section bg="mist">
        <SectionHeading eyebrow="Implementation" title="A clearly-scoped timeline" />
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {story.timeline.map((t, i) => (
            <li key={t.label} className="card-surface p-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                {i + 1}
              </span>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand">
                {t.phase}
              </p>
              <p className="mt-1 font-bold text-navy">{t.label}</p>
              <p className="mt-1 text-sm text-ink/60">{t.detail}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Metrics */}
      <Section bg="white">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <SectionHeading eyebrow="Illustrative metrics" title="What a pilot could measure" />
          <Badge tone="teal">Illustrative — simulated data</Badge>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {story.metrics.map((m) => (
            <MetricCard
              key={m.label}
              label={m.label}
              value={m.value}
              note={m.note}
              tone="brand"
            />
          ))}
        </div>
      </Section>

      {/* Findings / Outcomes / Next steps */}
      <Section bg="mist">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="card-surface p-6">
            <h3 className="text-lg font-bold text-navy">Findings</h3>
            <div className="mt-4">
              <List items={story.findings} />
            </div>
          </div>
          <div className="card-surface p-6">
            <h3 className="text-lg font-bold text-navy">Outcomes</h3>
            <div className="mt-4">
              <List items={story.outcomes} />
            </div>
          </div>
          <div className="card-surface p-6">
            <h3 className="text-lg font-bold text-navy">Next steps</h3>
            <div className="mt-4">
              <List items={story.nextSteps} />
            </div>
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="Partner pilot program"
        heading="Discuss a pilot with LTCware"
        body="Bring your wallet environment and recovery challenge. We'll scope a sandbox evaluation or a controlled pilot with clear, measurable success criteria."
        primary={{ label: "Become a pilot partner", href: "/partners" }}
        secondary={{ label: "Contact the team", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
