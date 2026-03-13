import { notFound } from "next/navigation";
import { FreshnessNote } from "@/components/seo/FreshnessNote";
import { LinkClusters } from "@/components/seo/LinkClusters";
import { JsonLd } from "@/components/seo/JsonLd";
import { guides } from "@/content/guides";
import { getFreshnessDate } from "@/lib/seo/freshness";
import { buildAdaptiveClusters, getGlobalTroubleshootingCluster } from "@/lib/seo/internal-links";
import { buildMetadata, siteConfig } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo/schema";

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
    path: `/guides/${guide.slug}`,
    keywords: [
      guide.title,
      "SpeedX tracking guide",
      "speed x tracking help",
      "package tracking troubleshooting"
    ]
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
      <JsonLd
        data={
          webPageSchema({
            path: `/guides/${guide.slug}`,
            title: guide.title,
            description: guide.intro
          })
        }
      />
      <JsonLd
        data={
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Guides", url: `${siteConfig.url}/guides` },
            { name: guide.title, url: `${siteConfig.url}/guides/${guide.slug}` }
          ])
        }
      />
      <JsonLd
        data={
          faqSchema([
            {
              question: `How do I use this ${guide.title.toLowerCase()} guide?`,
              answer: "Follow each step in order and recheck tracking after each action window before escalating to support."
            },
            {
              question: "When should I contact support?",
              answer:
                "Contact support if tracking has no meaningful movement for 5+ days or if your package is marked delivered but missing."
            }
          ])
        }
      />
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
