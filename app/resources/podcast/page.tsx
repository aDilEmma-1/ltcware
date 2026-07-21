import { ListingLayout } from "@/components/ListingLayout";
import { ListingCard } from "@/components/ListingCard";
import { CTASection } from "@/components/CTASection";
import { ctas } from "@/content/site";
import { podcastEpisodes } from "@/content/resources-content";

export const metadata = {
  title: "Podcast",
  description:
    "Conversations about wallet security, fintech, and digital assets from the LTCware team.",
};

export default function PodcastPage() {
  return (
    <ListingLayout
      eyebrow="Podcast"
      title="The LTCware podcast"
      subtitle="Conversations about wallet security, fintech, and digital assets."
      note="Illustrative episodes."
      footer={<CTASection {...ctas.contact} variant="gradient" />}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {podcastEpisodes.map((ep) => (
          <ListingCard
            key={ep.number}
            icon="mic"
            eyebrow={"Episode " + ep.number}
            title={ep.title}
            description={ep.description}
            meta={[ep.guest, ep.duration]}
          />
        ))}
      </div>
    </ListingLayout>
  );
}
