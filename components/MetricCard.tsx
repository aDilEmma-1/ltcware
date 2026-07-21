import { Icon } from "@/components/ui/Icon";

const TONE: Record<string, string> = {
  brand: "text-brand",
  teal: "text-teal",
  navy: "text-navy",
  amber: "text-amber-600",
};

/** Metric / stat tile used in the demo console and case studies. */
export function MetricCard({
  label,
  value,
  note,
  icon,
  tone = "navy",
}: {
  label: string;
  value: string;
  note?: string;
  icon?: string;
  tone?: string;
}) {
  return (
    <div className="rounded-2xl border border-navy/8 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-ink/55">{label}</span>
        {icon && (
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-mist text-brand">
            <Icon name={icon} className="h-4 w-4" />
          </span>
        )}
      </div>
      <p className={`mt-2 text-2xl font-bold ${TONE[tone] ?? TONE.navy}`}>
        {value}
      </p>
      {note && <p className="mt-1 text-[11px] text-ink/45">{note}</p>}
    </div>
  );
}
