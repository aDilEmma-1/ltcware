"use client";

import { useEffect, useState } from "react";
import {
  Play,
  RotateCcw,
  Check,
  Loader2,
  AlertTriangle,
  CircleCheck,
} from "lucide-react";
import { recoverySteps } from "@/content/site";

type Run = "idle" | "running" | "success" | "failed";

// In failure mode the simulation halts when it reaches this step index.
const FAIL_AT = 3; // "Required threshold reached"

export function RecoverySimulator() {
  const [run, setRun] = useState<Run>("idle");
  const [reached, setReached] = useState(0);
  const [failMode, setFailMode] = useState(false);

  useEffect(() => {
    if (run !== "running") return;
    const timer = setTimeout(() => {
      if (failMode && reached === FAIL_AT) {
        setRun("failed");
        return;
      }
      const next = reached + 1;
      if (next >= recoverySteps.length) {
        setReached(next);
        setRun("success");
      } else {
        setReached(next);
      }
    }, 850);
    return () => clearTimeout(timer);
  }, [run, reached, failMode]);

  const start = () => {
    setReached(0);
    setRun("running");
  };
  const reset = () => {
    setReached(0);
    setRun("idle");
  };

  const pct =
    run === "success"
      ? 100
      : Math.round((reached / recoverySteps.length) * 100);

  return (
    <div className="card-surface p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-navy">Recovery Simulator</h3>
          <p className="text-sm text-ink/55">
            Illustrative prototype data — no real cryptographic operation.
          </p>
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs font-bold ${
            run === "success"
              ? "bg-teal/15 text-teal"
              : run === "failed"
                ? "bg-red-50 text-red-600"
                : run === "running"
                  ? "bg-brand-50 text-brand"
                  : "bg-navy/5 text-navy/60"
          }`}
        >
          {run === "idle"
            ? "Ready"
            : run === "running"
              ? "Running…"
              : run === "success"
                ? "Completed"
                : "Halted"}
        </span>
      </div>

      {/* Progress bar */}
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-navy/8">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            run === "failed"
              ? "bg-red-400"
              : "bg-gradient-to-r from-brand to-teal"
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Steps */}
      <ol className="mt-6 space-y-2">
        {recoverySteps.map((step, i) => {
          const done = i < reached;
          const active = i === reached && run === "running";
          const failedHere = run === "failed" && i === reached;
          return (
            <li
              key={step}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3 transition-colors ${
                failedHere
                  ? "border-red-200 bg-red-50"
                  : done
                    ? "border-teal/20 bg-teal/5"
                    : active
                      ? "border-brand/30 bg-brand-50"
                      : "border-navy/8 bg-white"
              }`}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full">
                {failedHere ? (
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                ) : done ? (
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal text-white">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                ) : active ? (
                  <Loader2 className="h-5 w-5 animate-spin text-brand" />
                ) : (
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy/8 text-xs font-bold text-navy/50">
                    {i + 1}
                  </span>
                )}
              </span>
              <span
                className={`text-sm font-medium ${
                  failedHere
                    ? "text-red-700"
                    : done || active
                      ? "text-navy"
                      : "text-ink/50"
                }`}
              >
                {step}
              </span>
            </li>
          );
        })}
      </ol>

      {/* Result banner */}
      {run === "success" && (
        <div className="mt-5 flex items-center gap-3 rounded-xl bg-teal/10 px-4 py-3 text-sm font-medium text-teal">
          <CircleCheck className="h-5 w-5" />
          Recovery completed — threshold met and authorization generated (simulated).
        </div>
      )}
      {run === "failed" && (
        <div className="mt-5 flex items-center gap-3 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          <AlertTriangle className="h-5 w-5" />
          Recovery halted — required share threshold was not reached (simulated failure).
        </div>
      )}

      {/* Controls */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        {run === "idle" || run === "running" ? (
          <button
            onClick={start}
            disabled={run === "running"}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:opacity-60"
          >
            <Play className="h-4 w-4" />
            {run === "running" ? "Simulating…" : "Start Recovery Simulation"}
          </button>
        ) : (
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy/90"
          >
            <RotateCcw className="h-4 w-4" />
            Run again
          </button>
        )}

        <button
          type="button"
          role="switch"
          aria-checked={failMode}
          onClick={() => run !== "running" && setFailMode((v) => !v)}
          disabled={run === "running"}
          className="inline-flex items-center gap-2 text-sm text-ink/70 disabled:opacity-50"
        >
          <span
            className={`relative h-6 w-11 rounded-full transition-colors ${
              failMode ? "bg-red-400" : "bg-navy/15"
            }`}
          >
            <span
              className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                failMode ? "translate-x-5" : ""
              }`}
            />
          </span>
          Simulate failure
        </button>
      </div>
    </div>
  );
}
