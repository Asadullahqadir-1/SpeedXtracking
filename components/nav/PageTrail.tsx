import { Breadcrumbs } from "@/components/nav/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

export type TrailItem = {
  name: string;
  path: string;
};

function toAbsoluteUrl(path: string) {
  if (path === "/") {
    return siteConfig.url;
  }
  return `${siteConfig.url}${path}`;
}

export function PageTrail({
  items,
  includeSchema = true
}: {
  items: TrailItem[];
  includeSchema?: boolean;
}) {
  const crumbs = items.map((item) => ({
    label: item.name,
    href: item.path
  }));
  const schemaItems = items.map((item) => ({
    name: item.name,
    url: toAbsoluteUrl(item.path)
  }));

  return (
    <>
      {includeSchema ? <JsonLd data={breadcrumbSchema(schemaItems)} /> : null}
      <div className="mb-4">
        <Breadcrumbs items={crumbs} />
      </div>
    </>
  );
}
