import { Icon } from "@/components/ui/Icon";

const layers = [
  { icon: "wallet", label: "Partner application", note: "Existing wallet interface — unchanged", tone: "navy" },
  { icon: "puzzle", label: "Recovery SDK", note: "Drop-in libraries + sandbox", tone: "brand" },
  { icon: "split", label: "Key Share Orchestration", note: "Policy, thresholds, authorization", tone: "brand" },
  { icon: "network", label: "Distributed key shares", note: "Four-share / multi-share model", tone: "teal" },
  { icon: "list-checks", label: "Audit & monitoring", note: "Recovery event logging (proposed)", tone: "navy" },
];

const TONE: Record<string, string> = {
  navy: "bg-navy/5 text-navy ring-navy/10",
  brand: "bg-brand-50 text-brand ring-brand/15",
  teal: "bg-teal/10 text-teal ring-teal/20",
};

export function ArchitectureLayers() {
  return (
    <div className="card-surface bg-white p-5 md:p-6">
      <span className="text-xs font-semibold uppercase tracking-wider text-ink/40">
        Architecture overview (conceptual)
      </span>
      <div className="mt-4 space-y-2">
        {layers.map((l, i) => (
          <div key={l.label}>
            <div className="flex items-center gap-4 rounded-2xl border border-navy/8 bg-white p-4 shadow-sm">
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ${TONE[l.tone]}`}
              >
                <Icon name={l.icon} className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-bold text-navy">{l.label}</p>
                <p className="text-xs text-ink/55">{l.note}</p>
              </div>
            </div>
            {i < layers.length - 1 && (
              <div className="flex justify-center py-0.5">
                <span className="h-3 w-px bg-brand/25" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
