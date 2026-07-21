import { ProductCard } from "@/components/ProductCard";
import { platformModules, type Module } from "@/content/site";

export function ModuleGrid({
  modules = platformModules,
}: {
  modules?: Module[];
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {modules.map((m) => (
        <ProductCard
          key={m.id}
          name={m.name}
          tagline={m.description}
          icon={m.icon}
          href={m.href}
        />
      ))}
    </div>
  );
}
