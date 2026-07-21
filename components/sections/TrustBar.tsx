import { Icon } from "@/components/ui/Icon";
import { trustProof } from "@/content/site";

export function TrustBar() {
  return (
    <div>
      <p className="text-center text-sm font-semibold uppercase tracking-wider text-ink/40">
        {trustProof.subheading}
      </p>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {trustProof.proofPoints.map((p) => (
          <div
            key={p.label}
            className="flex flex-col items-center gap-2 rounded-2xl border border-navy/8 bg-white px-3 py-5 text-center"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand">
              <Icon name={p.icon} className="h-5 w-5" />
            </span>
            <span className="text-xs font-semibold leading-snug text-navy/80">
              {p.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
