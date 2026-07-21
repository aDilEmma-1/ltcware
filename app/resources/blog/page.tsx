import { ListingLayout } from "@/components/ListingLayout";
import { ListingCard } from "@/components/ListingCard";
import { CTASection } from "@/components/CTASection";
import { blogPosts } from "@/content/resources-content";
import { ctas } from "@/content/site";

export const metadata = {
  title: "Blog",
  description: "Company news and wallet-security insights from LTCware.",
};

export default function BlogPage() {
  return (
    <ListingLayout
      eyebrow="Blog"
      title="LTCware blog"
      subtitle="Company news and wallet-security insights."
      note="Illustrative articles for this concept prototype."
      footer={<CTASection {...ctas.contact} variant="gradient" />}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <ListingCard
            key={post.title}
            eyebrow={post.category}
            title={post.title}
            description={post.excerpt}
            meta={[post.date, post.readTime]}
          />
        ))}
      </div>
    </ListingLayout>
  );
}
