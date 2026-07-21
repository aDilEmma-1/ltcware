import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { DisclaimerNote } from "@/components/ui/Badge";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { TrustBar } from "@/components/sections/TrustBar";
import { site, recommendedPath, ctas } from "@/content/site";

export const metadata = {
  title: "About",
  description:
    "A concept South Korean wallet-security startup packaging patented recovery as a B2B SDK.",
};

const values = [
  {
    icon: "shield-check",
    title: "Focus on the hard problem",
    body: "Resilient, seedless wallet recovery is the one problem LTCware is built around. The consumer wallet exists to prove the architecture works, not to chase mass-market growth.",
  },
  {
    icon: "list-checks",
    title: "Honest about validation",
    body: "No completed audits are claimed. Independent security validation is published as a roadmap partners can hold LTCware to — clearly labeled Planned and Proposed.",
  },
  {
    icon: "users",
    title: "Partner-first",
    body: "The distribution strategy is to sit behind builders who already have users. LTCware succeeds when a partner ships resilient recovery, not when it acquires end users directly.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="LTCware becomes the security layer behind wallets"
        subtitle="LTCware is a concept South Korean wallet-security startup packaging its patented wallet-recovery architecture as an integration-ready B2B SDK for wallets, fintechs, and exchanges."
        primary={{ label: "Explore the platform", href: "/products/security-hub" }}
        secondary={{ label: "Contact", href: "/contact" }}
        bg="gradient"
      />

      {/* Story */}
      <Section bg="white">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Story" title="The wallet is the proof" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/70">
              <p>
                {site.wallet} is LTCware&rsquo;s working consumer wallet — a live
                demonstration that seedless, multi-share recovery holds up in a
                real product, not just a whitepaper. It is the proof point that
                the underlying architecture is buildable and usable.
              </p>
              <p>
                The strategic shift is away from expensive, crowded consumer
                growth and toward packaging that same recovery architecture as a
                B2B SDK. The durable asset is not another wallet — it is the
                recovery layer that other builders can license and integrate.
              </p>
            </div>
          </div>
          <div className="card-surface bg-dotgrid relative overflow-hidden p-8 md:p-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand">
              <Icon name="sparkles" className="h-6 w-6" />
            </span>
            <p className="h-display mt-6 text-2xl leading-snug text-navy md:text-3xl">
              &ldquo;The wallet is the proof. The recovery architecture is the
              asset.&rdquo;
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-ink/40">
              {site.brand} — {site.location}
            </p>
          </div>
        </div>
      </Section>

      {/* Strengths */}
      <Section bg="mist">
        <SectionHeading
          align="center"
          eyebrow="Strengths"
          title="What makes the technology defensible"
          subtitle="Six proof points behind the recovery architecture — from patented, seedless design to government-backed R&D and app-store approval."
        />
        <div className="mt-10">
          <TrustBar />
        </div>
      </Section>

      {/* Approach */}
      <Section bg="white">
        <SectionHeading
          eyebrow="Approach"
          title="A small, technically focused team"
          subtitle="LTCware is a small, focused engineering team that would rather solve one deep security problem well than spread across a broad product surface."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="card-surface flex flex-col p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
                <Icon name={v.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                {v.body}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <DisclaimerNote>{site.disclaimerLong}</DisclaimerNote>
        </div>
      </Section>

      {/* Where we're headed */}
      <Section bg="mist">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Approach"
              title="Where we're headed"
              subtitle="The proposed path from a working wallet to a validated SDK and a case study that opens the door to larger partners."
            />
            <div className="mt-6">
              <Button href="/partners" variant="ghost" withArrow>
                See the pilot program
              </Button>
            </div>
          </div>
          <ol className="card-surface space-y-1 bg-white p-6 md:p-8">
            {recommendedPath.map((step) => (
              <li
                key={step.n}
                className="flex items-center gap-4 rounded-xl px-2 py-2.5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  {step.n}
                </span>
                <span className="text-sm font-semibold text-navy/85">
                  {step.title}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <CTASection {...ctas.contact} variant="gradient" />
    </>
  );
}
