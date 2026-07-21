import { Icon } from "@/components/ui/Icon";

/**
 * Original mock of the Partner Console interface — a fake browser window with a
 * sidebar and metric tiles. Purely presentational; no real data.
 */
const nav = [
  { icon: "layout-grid", label: "Overview", active: true },
  { icon: "puzzle", label: "Integration" },
  { icon: "refresh-cw", label: "Recovery Simulator" },
  { icon: "shield-check", label: "Security" },
  { icon: "line-chart", label: "Pilot Metrics" },
];

const tiles = [
  { label: "Integration", value: "68%", tone: "brand" },
  { label: "Sandbox", value: "Active", tone: "teal" },
  { label: "Recovery tests", value: "24", tone: "navy" },
  { label: "Successful", value: "23", tone: "teal" },
];

const TONE: Record<string, string> = {
  brand: "text-brand",
  teal: "text-teal",
  navy: "text-navy",
};

export function ConsolePreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[var(--shadow-card)]">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-navy/8 bg-mist px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-navy/15" />
        <span className="h-3 w-3 rounded-full bg-navy/15" />
        <span className="h-3 w-3 rounded-full bg-navy/15" />
        <span className="ml-3 rounded-md bg-white px-3 py-1 text-[11px] text-ink/50 ring-1 ring-navy/10">
          console.ltcware.example
        </span>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden w-40 shrink-0 border-r border-navy/8 bg-navy p-3 sm:block">
          {nav.map((n) => (
            <div
              key={n.label}
              className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-medium ${
                n.active ? "bg-white/10 text-white" : "text-white/55"
              }`}
            >
              <Icon name={n.icon} className="h-4 w-4" />
              {n.label}
            </div>
          ))}
        </div>

        {/* Body */}
        <div className="flex-1 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-navy">Overview</p>
            <span className="rounded-full bg-teal/10 px-2 py-0.5 text-[10px] font-semibold text-teal">
              Illustrative data
            </span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {tiles.map((t) => (
              <div
                key={t.label}
                className="rounded-xl border border-navy/8 bg-white p-3"
              >
                <p className="text-[11px] text-ink/50">{t.label}</p>
                <p className={`mt-0.5 text-lg font-bold ${TONE[t.tone]}`}>
                  {t.value}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-xl border border-navy/8 bg-mist p-3">
            <div className="flex items-center justify-between text-[11px] text-ink/55">
              <span>Recovery simulation</span>
              <span className="font-semibold text-teal">Threshold reached</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-navy/8">
              <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-brand to-teal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
