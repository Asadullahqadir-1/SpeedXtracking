import Link from "next/link";
import { notFound } from "next/navigation";
import { getClusterQaArticle, getClusterQaArticles, clusterQaArticles } from "@/content/cluster-qa";
import { getTopicCluster } from "@/content/topic-clusters";
import { buildMetadata, siteConfig } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo/schema";
import { TopicAuthorityLinks } from "@/components/seo/TopicAuthorityLinks";
import { TrackingForm } from "@/components/tracking/TrackingForm";

export const revalidate = 86400;

export function generateStaticParams() {
  return clusterQaArticles.map((article) => ({
    slug: article.clusterSlug,
    qaSlug: article.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string; qaSlug: string }>;
}) {
  const { slug, qaSlug } = await params;
  const article = getClusterQaArticle(slug, qaSlug);
  if (!article) return {};

  return buildMetadata({
    title: article.title,
    description: article.metaDescription,
    path: `/topics/${article.clusterSlug}/${article.slug}`
  });
}

export default async function ClusterQaPage({
  params
}: {
  params: Promise<{ slug: string; qaSlug: string }>;
}) {
  const { slug, qaSlug } = await params;
  const article = getClusterQaArticle(slug, qaSlug);
  const cluster = getTopicCluster(slug);

  if (!article || !cluster) {
    notFound();
  }

  const siblings = getClusterQaArticles(slug).filter((item) => item.slug !== article.slug);
  const reviewed = "2026-10-05";
  const wordCount =
    article.summary.split(/\s+/).length +
    article.sections.reduce(
      (count, section) =>
        count +
        section.paragraphs.join(" ").split(/\s+/).length +
        (section.bullets?.join(" ").split(/\s+/).length || 0),
      0
    );

  return (
    <div className="container-page py-10">
      <JsonLd
        data={webPageSchema({
          path: `/topics/${article.clusterSlug}/${article.slug}`,
          title: article.h1,
          description: article.metaDescription
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Topics", url: `${siteConfig.url}/topics` },
          { name: cluster.title, url: `${siteConfig.url}/topics/${cluster.slug}` },
          {
            name: article.title,
            url: `${siteConfig.url}/topics/${article.clusterSlug}/${article.slug}`
          }
        ])}
      />
      <JsonLd
        data={articleSchema({
          title: article.h1,
          description: article.metaDescription,
          path: `/topics/${article.clusterSlug}/${article.slug}`,
          datePublished: reviewed,
          dateModified: reviewed,
          keywords: [article.question, cluster.primaryKeyword, ...cluster.relatedKeywords],
          articleSection: `${cluster.title} Q&A`,
          wordCount
        })}
      />
      <JsonLd
        data={faqSchema([
          { question: article.question, answer: article.answer },
          ...cluster.faqs.slice(0, 2)
        ])}
      />

      <p className="text-sm text-brand-700">
        <Link href={`/topics/${cluster.slug}`} className="font-semibold hover:underline">
          ← {cluster.title}
        </Link>
      </p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">{article.h1}</h1>
      <p className="mt-3 max-w-3xl text-slate-700">{article.summary}</p>

      <section className="mt-6 rounded-xl border border-brand-100 bg-brand-50/40 p-5">
        <h2 className="text-lg font-semibold text-slate-900">{article.question}</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">{article.answer}</p>
      </section>

      <section className="mt-6 section-card">
        <TrackingForm />
      </section>

      <div className="mt-8 space-y-6">
        {article.sections.map((section) => (
          <section key={section.heading} className="section-card">
            <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mt-3 text-sm leading-relaxed text-slate-700">
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
        <h2 className="text-xl font-semibold text-slate-900">Descriptive cluster links</h2>
        <ul className="mt-3 space-y-2 text-sm text-brand-700">
          {article.relatedAnchors.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="font-semibold hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {siblings.length > 0 ? (
        <section className="mt-8 section-card">
          <h2 className="text-xl font-semibold text-slate-900">More Q&A in this cluster</h2>
          <ul className="mt-3 space-y-2 text-sm text-brand-700">
            {siblings.map((item) => (
              <li key={item.slug}>
                <Link href={`/topics/${item.clusterSlug}/${item.slug}`} className="hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <TopicAuthorityLinks activeCluster={article.clusterSlug} />
    </div>
  );
}
