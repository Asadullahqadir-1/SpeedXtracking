import { notFound } from "next/navigation";
import { FreshnessNote } from "@/components/seo/FreshnessNote";
import { LinkClusters } from "@/components/seo/LinkClusters";
import { guides } from "@/content/guides";
import { getFreshnessDate } from "@/lib/seo/freshness";
import { buildAdaptiveClusters, getGlobalTroubleshootingCluster } from "@/lib/seo/internal-links";
import { buildMetadata } from "@/lib/seo/metadata";

export const revalidate = 86400;

export async function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);

  if (!guide) return {};

  return buildMetadata({
    title: `${guide.title} | Package Tracking Guide`,
    description: guide.intro,
    path: `/guides/${guide.slug}`
  });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);

  if (!guide) {
    notFound();
  }

  const adaptiveClusters = buildAdaptiveClusters([getGlobalTroubleshootingCluster()], {
    pageKey: `guide:${guide.slug}`,
    primaryHrefs: ["/guides/package-not-updating", "/guides/delivered-not-received"],
    maxLinksPerCluster: 4
  });

  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold">{guide.title}</h1>
      <p className="mt-2 max-w-3xl text-slate-700">{guide.intro}</p>
      <FreshnessNote date={getFreshnessDate("guidesHub")} />
      <section className="mt-6 section-card">
        <h2 className="text-xl font-semibold">What to do</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          {guide.sections.map((section) => (
            <li key={section}>{section}</li>
          ))}
        </ol>
      </section>

      <div className="mt-6">
        <LinkClusters clusters={adaptiveClusters} />
      </div>
    </div>
  );
}
