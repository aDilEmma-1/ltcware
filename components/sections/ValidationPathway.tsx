import { Badge } from "@/components/ui/Badge";
import { validationStages } from "@/content/site";

/** Vertical roadmap of the independent-validation stages. */
export function ValidationPathway() {
  return (
    <ol className="relative space-y-4 border-l-2 border-brand/15 pl-6">
      {validationStages.map((s) => (
        <li key={s.n} className="relative">
          <span className="absolute -left-[35px] flex h-7 w-7 items-center justify-center rounded-full bg-brand text-xs font-bold text-white ring-4 ring-white">
            {s.n}
          </span>
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-navy/8 bg-white px-4 py-3">
            <span className="text-sm font-semibold text-navy">{s.title}</span>
            <Badge tone={s.status === "Proposed" ? "amber" : "neutral"}>
              {s.status}
            </Badge>
          </div>
        </li>
      ))}
    </ol>
  );
}
