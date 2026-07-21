import { ResourceMenuItem } from "@/components/ResourceMenuItem";
import { resources, type Resource } from "@/content/site";

export function ResourceGrid({ items = resources }: { items?: Resource[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((r) => (
        <ResourceMenuItem
          key={r.id}
          name={r.name}
          description={r.description}
          icon={r.icon}
          href={r.href}
          featured={r.featured}
        />
      ))}
    </div>
  );
}
