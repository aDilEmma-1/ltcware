import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge, statusTone } from "@/components/ui/Badge";
import { CONCEPT_DISCLAIMER, type SuccessStory } from "@/content/success-stories";

const ACCENT: Record<SuccessStory["accent"], string> = {
  brand: "from-brand to-brand-700",
  teal: "from-teal to-brand",
  navy: "from-navy to-brand-700",
};

export function SuccessStoryCard({ story }: { story: SuccessStory }) {
  return (
    <Link
      href={`/resources/success-stories/${story.slug}`}
      className="card-surface group flex flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
    >
      {/* Mock visual header (original CSS gradient — no photography). */}
      <div
        className={`relative h-36 bg-gradient-to-br ${ACCENT[story.accent]} p-5`}
      >
        <div className="bg-dotgrid absolute inset-0 opacity-30" />
        <div className="relative flex items-start justify-between">
          <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
            {story.partnerType}
          </span>
          <span className="rounded-full bg-white px-2.5 py-1 text-xs font-bold text-navy">
            {story.stage}
          </span>
        </div>
        <div className="absolute bottom-4 left-5 right-5">
          <span className="text-xs font-semibold uppercase tracking-wide text-white/70">
            Conceptual case study
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <Badge tone={statusTone(story.status)}>{story.status}</Badge>
        <h3 className="mt-3 text-lg font-bold leading-snug text-navy">
          {story.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">
          {story.summary}
        </p>
        <p className="mt-4 border-t border-navy/8 pt-3 text-[11px] italic leading-snug text-ink/45">
          {CONCEPT_DISCLAIMER}
        </p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
          Read case study
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
