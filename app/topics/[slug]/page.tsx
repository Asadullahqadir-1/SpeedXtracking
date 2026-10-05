import Link from "next/link";
import { notFound } from "next/navigation";
import { topicClusters, getTopicCluster } from "@/content/topic-clusters";
import { buildMetadata, siteConfig } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo/schema";
import { TrackingForm } from "@/components/tracking/TrackingForm";
import { AdSenseUnit } from "@/components/ads/AdSenseUnit";

export const revalidate = 86400;

export function generateStaticParams() {
  return topicClusters.map((cluster) => ({ slug: cluster.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cluster = getTopicCluster(slug);
  if (!cluster) return {};

  return buildMetadata({
    title: cluster.title,
    description: cluster.metaDescription,
    path: `/topics/${cluster.slug}`
  });
}

export default async function TopicClusterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cluster = getTopicCluster(slug);

  if (!cluster) {
    notFound();
  }

  const reviewed = "2026-10-05";
  const wordCount = cluster.sections.reduce(
    (count, section) =>
      count +
      section.paragraphs.join(" ").split(/\s+/).length +
      (section.bullets?.join(" ").split(/\s+/).length || 0),
    cluster.summary.split(/\s+/).length
  );

  return (
    <div className="container-page py-10">
      <JsonLd
        data={webPageSchema({
          path: `/topics/${cluster.slug}`,
          title: cluster.h1,
          description: cluster.metaDescription
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Topics", url: `${siteConfig.url}/topics` },
          { name: cluster.title, url: `${siteConfig.url}/topics/${cluster.slug}` }
        ])}
      />
      <JsonLd
        data={articleSchema({
          title: cluster.h1,
          description: cluster.metaDescription,
          path: `/topics/${cluster.slug}`,
          datePublished: reviewed,
          dateModified: reviewed,
          keywords: [cluster.primaryKeyword, ...cluster.relatedKeywords],
          articleSection: "SpeedX Topic Cluster",
          wordCount
        })}
      />
      <JsonLd data={faqSchema(cluster.faqs)} />

      <p className="text-sm font-semibold text-brand-700">
        <Link href="/topics" className="hover:underline">
          All topic clusters
        </Link>
      </p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">{cluster.h1}</h1>
      <p className="mt-3 max-w-3xl text-slate-700">{cluster.summary}</p>

      <section className="mt-6 section-card">
        <h2 className="text-lg font-semibold text-slate-900">Track your SpeedX package</h2>
        <p className="mt-2 text-sm text-slate-600">Paste your SPX or SPXCN number to check the latest scan.</p>
        <div className="mt-4">
          <TrackingForm />
        </div>
      </section>

      <AdSenseUnit />

      <div className="mt-8 space-y-6">
        {cluster.sections.map((section) => (
          <section key={section.heading} className="section-card">
            <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="mt-3 text-sm leading-relaxed text-slate-700">
                {paragraph}
              </p>
            ))}
            {section.bullets ? (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold text-slate-900">Cluster resources</h2>
        <p className="mt-2 text-sm text-slate-600">
          Supporting pages in this topical cluster. Use descriptive links to move from the pillar to the exact problem page.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {cluster.clusterLinks.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-lg border border-slate-200 p-4 hover:border-brand-500">
              <h3 className="font-semibold text-slate-900">{link.label}</h3>
              <p className="mt-1 text-sm text-slate-600">{link.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold text-slate-900">Related topic clusters</h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-brand-700">
          {topicClusters
            .filter((item) => item.slug !== cluster.slug)
            .map((item) => (
              <Link key={item.slug} href={`/topics/${item.slug}`} className="hover:underline">
                {item.title}
              </Link>
            ))}
        </div>
      </section>

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold text-slate-900">FAQ</h2>
        <div className="mt-4 space-y-4">
          {cluster.faqs.map((faq) => (
            <article key={faq.question} className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">{faq.question}</h3>
              <p className="mt-2 text-sm text-slate-700">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
