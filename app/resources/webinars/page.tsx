import { ListingLayout } from "@/components/ListingLayout";
import { ListingCard } from "@/components/ListingCard";
import { CTASection } from "@/components/CTASection";
import { webinars } from "@/content/resources-content";
import { ctas } from "@/content/site";

export const metadata = {
  title: "Webinars",
  description:
    "Live and recorded sessions about wallet recovery and SDK integration.",
};

export default function WebinarsPage() {
  return (
    <ListingLayout
      eyebrow="Webinars"
      title="Webinars"
      subtitle="Live and recorded sessions about wallet recovery and SDK integration."
      note="Illustrative sessions."
      footer={<CTASection {...ctas.demo} variant="gradient" />}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {webinars.map((w) => (
          <ListingCard
            key={w.title}
            icon="video"
            badge={w.status}
            badgeTone={w.status === "On demand" ? "teal" : "brand"}
            title={w.title}
            description={w.description}
            meta={[w.duration]}
          />
        ))}
      </div>
    </ListingLayout>
  );
}
