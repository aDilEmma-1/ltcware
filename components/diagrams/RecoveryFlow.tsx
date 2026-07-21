import { ChevronRight, ChevronDown } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { DisclaimerNote } from "@/components/ui/Badge";
import { site } from "@/content/site";

const stages = [
  {
    icon: "wallet",
    label: "Partner Wallet",
    detail: "The wallet your users already trust",
    tone: "navy",
  },
  {
    icon: "shield-check",
    label: "LTCware Security Layer",
    detail: "Seedless, policy-driven recovery",
    tone: "brand",
  },
  {
    icon: "split",
    label: "Distributed Key Shares",
    detail: "Multi-share threshold coordination",
    tone: "brand",
  },
  {
    icon: "check-circle",
    label: "Recovery Authorization",
    detail: "Threshold met — access restored",
    tone: "teal",
  },
] as const;

const TONE: Record<string, string> = {
  navy: "bg-navy/5 text-navy ring-navy/10",
  brand: "bg-brand-50 text-brand ring-brand/15",
  teal: "bg-teal/10 text-teal ring-teal/20",
};

export function RecoveryFlow() {
  return (
    <div className="card-surface bg-white p-5 md:p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-ink/40">
          Recovery flow
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-teal">
          <span className="h-2 w-2 animate-pulse rounded-full bg-teal" />
          Simulated
        </span>
      </div>

      <div className="flex flex-col gap-2 md:flex-row md:items-stretch">
        {stages.map((s, i) => (
          <div key={s.label} className="flex flex-col gap-2 md:flex-1 md:flex-row md:items-center">
            <div className="flex-1 rounded-2xl border border-navy/8 bg-white p-4 text-center shadow-sm">
              <span
                className={`mx-auto flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${TONE[s.tone]}`}
              >
                <Icon name={s.icon} className="h-5.5 w-5.5" />
              </span>
              <p className="mt-3 text-sm font-bold leading-tight text-navy">
                {s.label}
              </p>
              <p className="mt-1 text-[11px] leading-snug text-ink/55">
                {s.detail}
              </p>
              {s.icon === "split" && (
                <div className="mt-2 flex justify-center gap-1">
                  {[0, 1, 2, 3].map((k) => (
                    <span
                      key={k}
                      className={`h-1.5 w-1.5 rounded-full ${
                        k < 3 ? "bg-brand" : "bg-brand/30"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
            {i < stages.length - 1 && (
              <div className="flex shrink-0 items-center justify-center text-brand/50">
                <ChevronDown className="h-5 w-5 md:hidden" />
                <ChevronRight className="hidden h-5 w-5 md:block" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-5">
        <DisclaimerNote>{site.disclaimerShort}</DisclaimerNote>
      </div>
    </div>
  );
}
