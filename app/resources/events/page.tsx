import { ListingLayout } from "@/components/ListingLayout";
import { ListingCard } from "@/components/ListingCard";
import { CTASection } from "@/components/CTASection";
import { events } from "@/content/resources-content";
import { ctas } from "@/content/site";

export const metadata = {
  title: "Events",
  description: "Upcoming LTCware demonstrations, conferences, and partner events.",
};

export default function EventsPage() {
  return (
    <ListingLayout
      eyebrow="Events"
      title="Events & demonstrations"
      subtitle="Upcoming demonstrations, conferences, and partner events."
      note="Illustrative event schedule."
      footer={<CTASection {...ctas.pilot} variant="gradient" />}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <ListingCard
            key={event.title}
            icon="calendar"
            badge={event.status}
            badgeTone={event.status === "Upcoming" ? "brand" : "neutral"}
            title={event.title}
            description={event.type}
            meta={[event.date, event.location]}
          />
        ))}
      </div>
    </ListingLayout>
  );
}
