"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Circle, ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { MetricCard } from "@/components/MetricCard";
import { RecoverySimulator } from "@/components/demo/RecoverySimulator";
import { consoleNav, consoleOverview } from "@/content/site";

const integrationSteps = [
  { label: "SDK installed in sandbox", done: true },
  { label: "Key shares provisioned", done: true },
  { label: "Recovery policy configured", done: true },
  { label: "Sandbox environment connected", done: true },
  { label: "Recovery flows wired behind UI", done: false, note: "In progress" },
  { label: "Pilot success criteria signed off", done: false, note: "Planned" },
];

const pilotMetrics = [
  { label: "Recovery tests", value: "24", icon: "refresh-cw", tone: "navy" },
  { label: "Successful simulations", value: "23", icon: "check-circle", tone: "teal" },
  { label: "Success rate", value: "96%", icon: "line-chart", tone: "brand" },
  { label: "Median recovery time", value: "38s", icon: "gauge", tone: "navy" },
];

const docs = [
  { title: "Integration guide", icon: "book-open", meta: "PDF · 24 pages" },
  { title: "API reference", icon: "file-text", meta: "Web" },
  { title: "Threshold policy cookbook", icon: "split", meta: "PDF · 12 pages" },
  { title: "Sandbox setup", icon: "boxes", meta: "Web" },
];

const securityRows = [
  { label: "Independent validation", value: "Planned (7 stages)" },
  { label: "Cryptographic assessment", value: "Planned" },
  { label: "Penetration testing", value: "Planned" },
  { label: "Audit status", value: "Not engaged" },
];

function Banner() {
  return (
    <div className="mb-6 flex items-center gap-2 rounded-xl border border-dashed border-teal/40 bg-teal/5 px-4 py-2.5 text-sm text-teal">
      <span className="h-2 w-2 rounded-full bg-teal" />
      Illustrative prototype data — no real wallet, account, or cryptographic
      operation.
    </div>
  );
}

export function DemoShell() {
  const [active, setActive] = useState("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-[230px_1fr]">
      {/* Sidebar */}
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-2xl border border-navy/10 bg-navy p-3">
          <p className="px-2 pb-2 pt-1 text-xs font-semibold uppercase tracking-wider text-white/40">
            Partner Console
          </p>
          <nav className="flex gap-1 overflow-x-auto lg:flex-col">
            {consoleNav.map((n) => (
              <button
                key={n.id}
                onClick={() => setActive(n.id)}
                className={`flex shrink-0 items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                  active === n.id
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon name={n.icon} className="h-4.5 w-4.5" />
                {n.label}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Content */}
      <div className="min-w-0">
        <Banner />

        {active === "overview" && (
          <div>
            <h2 className="text-xl font-bold text-navy">Overview</h2>
            <p className="mt-1 text-sm text-ink/60">
              A snapshot of an in-progress sandbox integration.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {consoleOverview.map((c) => (
                <MetricCard
                  key={c.label}
                  label={c.label}
                  value={c.value}
                  icon={c.icon}
                  tone={c.tone}
                />
              ))}
            </div>
          </div>
        )}

        {active === "integration" && (
          <div>
            <h2 className="text-xl font-bold text-navy">Integration</h2>
            <p className="mt-1 text-sm text-ink/60">
              Integration progress: <span className="font-semibold text-brand">68%</span>
            </p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-navy/8">
              <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-brand to-teal" />
            </div>
            <ul className="mt-6 space-y-2">
              {integrationSteps.map((s) => (
                <li
                  key={s.label}
                  className="flex items-center gap-3 rounded-xl border border-navy/8 bg-white px-4 py-3"
                >
                  {s.done ? (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal text-white">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                  ) : (
                    <Circle className="h-6 w-6 text-navy/25" />
                  )}
                  <span className={`text-sm ${s.done ? "text-navy" : "text-ink/60"}`}>
                    {s.label}
                  </span>
                  {s.note && (
                    <span className="ml-auto rounded-full bg-brand-50 px-2 py-0.5 text-xs font-semibold text-brand">
                      {s.note}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {active === "simulator" && <RecoverySimulator />}

        {active === "security" && (
          <div>
            <h2 className="text-xl font-bold text-navy">Security</h2>
            <p className="mt-1 text-sm text-ink/60">
              Validation is planned — no completed audits are claimed.
            </p>
            <div className="mt-5 divide-y divide-navy/8 rounded-2xl border border-navy/10 bg-white">
              {securityRows.map((r) => (
                <div
                  key={r.label}
                  className="flex items-center justify-between px-5 py-4 text-sm"
                >
                  <span className="text-ink/70">{r.label}</span>
                  <span className="font-semibold text-navy">{r.value}</span>
                </div>
              ))}
            </div>
            <Link
              href="/security"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-700"
            >
              View the full security model
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        {active === "metrics" && (
          <div>
            <h2 className="text-xl font-bold text-navy">Pilot Metrics</h2>
            <p className="mt-1 text-sm text-ink/60">
              Illustrative, simulated results from sandbox recovery runs.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {pilotMetrics.map((m) => (
                <MetricCard
                  key={m.label}
                  label={m.label}
                  value={m.value}
                  icon={m.icon}
                  tone={m.tone}
                  note="Illustrative"
                />
              ))}
            </div>
          </div>
        )}

        {active === "docs" && (
          <div>
            <h2 className="text-xl font-bold text-navy">Documentation</h2>
            <p className="mt-1 text-sm text-ink/60">
              Sample references — illustrative, non-downloadable placeholders.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {docs.map((d) => (
                <div
                  key={d.title}
                  className="flex items-center gap-4 rounded-2xl border border-navy/8 bg-white p-5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand">
                    <Icon name={d.icon} className="h-5.5 w-5.5" />
                  </span>
                  <div>
                    <p className="font-semibold text-navy">{d.title}</p>
                    <p className="text-xs text-ink/50">{d.meta}</p>
                  </div>
                  <span className="ml-auto rounded-full bg-navy/5 px-2 py-0.5 text-xs font-semibold text-navy/50">
                    Illustrative
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
