import { ListingLayout } from "@/components/ListingLayout";
import { ListingCard } from "@/components/ListingCard";
import { CTASection } from "@/components/CTASection";
import { whitepapers } from "@/content/resources-content";
import { ctas } from "@/content/site";

export const metadata = {
  title: "Whitepapers",
  description:
    "Technical research, architecture guides, and strategic reports on wallet recovery.",
};

export default function WhitepapersPage() {
  return (
    <ListingLayout
      eyebrow="Whitepapers"
      title="Whitepapers & research"
      subtitle="Technical research, architecture guides, and strategic reports."
      note="Illustrative documents — not downloadable in this prototype."
      footer={<CTASection {...ctas.contact} variant="gradient" />}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {whitepapers.map((wp) => (
          <ListingCard
            key={wp.title}
            icon="file-text"
            badge={wp.topic}
            badgeTone="navy"
            title={wp.title}
            description={wp.description}
            meta={[wp.pages, "PDF (illustrative)"]}
          />
        ))}
      </div>
    </ListingLayout>
  );
}
