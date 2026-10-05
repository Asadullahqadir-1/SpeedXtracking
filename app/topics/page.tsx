import Link from "next/link";
import { topicClusters } from "@/content/topic-clusters";
import { buildMetadata, siteConfig } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, collectionPageSchema, itemListSchema, webPageSchema } from "@/lib/seo/schema";

export const revalidate = 86400;

export const metadata = buildMetadata({
  title: "SpeedX Topic Clusters — Tracking Authority Hubs",
  description:
    "Three SpeedX content clusters: out for delivery, delivery hours, and SpeedX tracking / SPXCN. Interlinked guides for stronger topical authority.",
  path: "/topics"
});

export default function TopicsIndexPage() {
  return (
    <div className="container-page py-10">
      <JsonLd
        data={collectionPageSchema({
          path: "/topics",
          title: "SpeedX Topic Clusters",
          description: "Pillar hubs for SpeedX out for delivery, delivery hours, and tracking / SPXCN."
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Topics", url: `${siteConfig.url}/topics` }
        ])}
      />
      <JsonLd
        data={webPageSchema({
          path: "/topics",
          title: "SpeedX Topic Clusters",
          description: "Pillar content hubs that group SpeedX tracking questions into interlinked clusters."
        })}
      />
      <JsonLd
        data={itemListSchema(
          topicClusters.map((cluster) => ({
            name: cluster.h1,
            url: `${siteConfig.url}/topics/${cluster.slug}`,
            description: cluster.summary
          }))
        )}
      />

      <h1 className="text-3xl font-bold text-slate-900">SpeedX Topic Clusters</h1>
      <p className="mt-3 max-w-3xl text-slate-700">
        These three pillar hubs organize SpeedXTracking around the searches people actually use: out for delivery problems, delivery hours, and SpeedX / SPXCN tracking. Each hub links to supporting guides and blog posts so Google can see topical depth, not isolated pages.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {topicClusters.map((cluster) => (
          <Link
            key={cluster.slug}
            href={`/topics/${cluster.slug}`}
            className="section-card transition hover:border-brand-500 hover:shadow-md"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">{cluster.primaryKeyword}</p>
            <h2 className="mt-2 text-lg font-semibold text-slate-900">{cluster.title}</h2>
            <p className="mt-2 text-sm text-slate-700">{cluster.summary}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-brand-700">Open cluster →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
