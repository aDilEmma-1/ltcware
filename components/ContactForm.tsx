"use client";

import { useState } from "react";
import { CircleCheck } from "lucide-react";

const field =
  "w-full rounded-xl border border-navy/12 bg-white px-4 py-2.5 text-sm text-navy shadow-sm outline-none placeholder:text-ink/40 focus:border-brand focus:ring-2 focus:ring-brand/20";
const labelCls = "block text-sm font-semibold text-navy";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="card-surface flex flex-col items-center p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal/15 text-teal">
          <CircleCheck className="h-8 w-8" />
        </span>
        <h3 className="mt-5 text-xl font-bold text-navy">Thank you.</h3>
        <p className="mt-2 max-w-sm text-ink/65">
          This prototype form does not transmit information. In a live version, a
          member of the LTCware team would follow up about a sandbox evaluation
          or controlled pilot.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full border border-navy/15 px-5 py-2.5 text-sm font-semibold text-navy hover:border-brand hover:text-brand"
        >
          Reset form
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="card-surface space-y-5 p-6 md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Name
          </label>
          <input id="name" name="name" required className={`mt-1.5 ${field}`} />
        </div>
        <div>
          <label htmlFor="company" className={labelCls}>
            Company
          </label>
          <input id="company" name="company" required className={`mt-1.5 ${field}`} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelCls}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={`mt-1.5 ${field}`}
          />
        </div>
        <div>
          <label htmlFor="companyType" className={labelCls}>
            Company type
          </label>
          <select id="companyType" name="companyType" className={`mt-1.5 ${field}`}>
            <option>Wallet provider</option>
            <option>Crypto-native fintech</option>
            <option>Exchange</option>
            <option>Financial institution</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="environment" className={labelCls}>
          Current wallet environment
        </label>
        <input
          id="environment"
          name="environment"
          placeholder="e.g. self-custody mobile wallet, embedded wallet, multi-chain…"
          className={`mt-1.5 ${field}`}
        />
      </div>

      <div>
        <label htmlFor="challenge" className={labelCls}>
          Recovery challenge
        </label>
        <textarea
          id="challenge"
          name="challenge"
          rows={3}
          placeholder="What recovery problem are you trying to solve?"
          className={`mt-1.5 ${field}`}
        />
      </div>

      <div>
        <label htmlFor="timeline" className={labelCls}>
          Desired pilot timeline
        </label>
        <select id="timeline" name="timeline" className={`mt-1.5 ${field}`}>
          <option>This quarter</option>
          <option>Next 3–6 months</option>
          <option>Later / just exploring</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`mt-1.5 ${field}`}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-brand px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-700"
      >
        Submit pilot interest
      </button>
      <p className="text-center text-xs text-ink/50">
        This prototype form does not transmit information.
      </p>
    </form>
  );
}
