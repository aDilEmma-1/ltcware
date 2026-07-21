"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { SuccessStoryCard } from "@/components/SuccessStoryCard";
import {
  successStories,
  partnerTypes,
  pilotStages,
  type SuccessStory,
} from "@/content/success-stories";

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
        active
          ? "bg-brand text-white"
          : "bg-white text-navy/70 ring-1 ring-navy/10 hover:ring-brand/40"
      }`}
    >
      {children}
    </button>
  );
}

export function SuccessStoryFilters({
  stories = successStories,
}: {
  stories?: SuccessStory[];
}) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<string>("All");
  const [stage, setStage] = useState<string>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return stories.filter((s) => {
      const matchType = type === "All" || s.partnerType === type;
      const matchStage = stage === "All" || s.stage === stage;
      const matchQuery =
        !q ||
        s.title.toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q);
      return matchType && matchStage && matchQuery;
    });
  }, [stories, query, type, stage]);

  return (
    <div>
      {/* Search */}
      <div className="relative max-w-md">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/40" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search case studies…"
          className="w-full rounded-full border border-navy/12 bg-white py-3 pl-12 pr-4 text-sm text-navy shadow-sm outline-none placeholder:text-ink/40 focus:border-brand focus:ring-2 focus:ring-brand/20"
        />
      </div>

      {/* Filters */}
      <div className="mt-6 space-y-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink/45">
            Partner type
          </p>
          <div className="flex flex-wrap gap-2">
            <Pill active={type === "All"} onClick={() => setType("All")}>
              All
            </Pill>
            {partnerTypes.map((t) => (
              <Pill key={t} active={type === t} onClick={() => setType(t)}>
                {t}
              </Pill>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink/45">
            Pilot stage
          </p>
          <div className="flex flex-wrap gap-2">
            <Pill active={stage === "All"} onClick={() => setStage("All")}>
              All
            </Pill>
            {pilotStages.map((s) => (
              <Pill key={s} active={stage === s} onClick={() => setStage(s)}>
                {s}
              </Pill>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <p className="mt-8 text-sm text-ink/50">
        Showing {filtered.length} of {stories.length} conceptual case studies
      </p>
      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <SuccessStoryCard key={s.slug} story={s} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-2xl border border-dashed border-navy/15 bg-white p-12 text-center text-ink/50">
          No case studies match those filters yet.
        </div>
      )}
    </div>
  );
}
