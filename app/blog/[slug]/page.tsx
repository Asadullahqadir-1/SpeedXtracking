import { notFound, permanentRedirect } from "next/navigation";
import Link from "next/link";
import { blogAuthor, blogPosts } from "@/content/blogs";
import { getBlogSeo } from "@/content/blog-seo";
import { AdSenseUnit } from "@/components/ads/AdSenseUnit";
import { FreshnessNote } from "@/components/seo/FreshnessNote";
import { JsonLd } from "@/components/seo/JsonLd";
import { TopicAuthorityLinks } from "@/components/seo/TopicAuthorityLinks";
import { EditorialTrustBlock } from "@/components/seo/EditorialTrustBlock";
import { SiteLinkHub } from "@/components/seo/SiteLinkHub";
import { buildMetadata, siteConfig } from "@/lib/seo/metadata";
import { getTrustedCitationSources } from "@/lib/seo/trusted-citations";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schema";

function resolveBlogCluster(slug: string): "out-for-delivery" | "delivery-hours" | "speedx-tracking" | undefined {
  if (slug.includes("out-for-delivery") || slug.includes("exception") || slug.includes("attempted-delivery")) {
    return "out-for-delivery";
  }
  if (slug.includes("delivery-time") || slug.includes("late-at-night") || slug.includes("hours")) {
    return "delivery-hours";
  }
  if (slug.includes("spxcn") || slug.includes("tracking") || slug.includes("shein") || slug.includes("label")) {
    return "speedx-tracking";
  }
  return "speedx-tracking";
}

export const revalidate = 86400;

export async function generateStaticParams() {
  return blogPosts
    .filter((post) => post.slug !== "does-speedx-deliver-late-at-night-guide")
    .map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) return {};

  if (slug === "does-speedx-deliver-late-at-night-guide") {
    permanentRedirect("/guides/speedx-delivery-hours");
  }

  const seo = getBlogSeo(post.slug);
  const keywords = post.keywords?.length ? post.keywords : seo.keywords;

  // Writing Guidelines: {Article Title} | SpeedXTracking Blog
  return buildMetadata({
    title: `${post.title} | SpeedXTracking Blog`,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords,
    robots:
      slug === "track-speedx-packages-in-pakistan"
        ? { index: false, follow: true }
        : undefined
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  if (slug === "does-speedx-deliver-late-at-night-guide") {
    permanentRedirect("/guides/speedx-delivery-hours");
  }

  const seo = getBlogSeo(post.slug);
  const keywords = post.keywords?.length ? post.keywords : seo.keywords;
  const postFaqs = seo.faqs;

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug && item.slug !== "does-speedx-deliver-late-at-night-guide")
    .filter((item) => item.category === post.category)
    .slice(0, 3);

  const fallbackRelatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug && item.slug !== "does-speedx-deliver-late-at-night-guide")
    .slice(0, 3);
  const relatedToShow = relatedPosts.length > 0 ? relatedPosts : fallbackRelatedPosts;
  const activeCluster = resolveBlogCluster(post.slug);
  const estimatedWordCount = post.sections.reduce((count, section) => {
    const paragraphWords = section.paragraphs.reduce((sum, paragraph) => sum + paragraph.trim().split(/\s+/).length, 0);
    const bulletWords = (section.bullets ?? []).reduce((sum, bullet) => sum + bullet.trim().split(/\s+/).length, 0);
    return count + paragraphWords + bulletWords;
  }, 0);

  return (
    <div className="container-page py-6 sm:py-8 lg:py-10">
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.description,
          path: `/blog/${post.slug}`,
          datePublished: post.publishedDate,
          dateModified: post.updatedDate,
          articleSection: post.category,
          wordCount: estimatedWordCount,
          keywords
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Blog", url: `${siteConfig.url}/blog` },
          { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` }
        ])}
      />
      {postFaqs.length > 0 ? <JsonLd data={faqSchema(postFaqs)} /> : null}
      <article className="mx-auto max-w-4xl">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-700">{post.category}</span>
          <span className="text-slate-500">{post.author ?? blogAuthor}</span>
          <span className="text-slate-500">{post.readTime}</span>
          <span className="text-slate-500">Published: {post.publishedDate}</span>
        </div>

        <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">{post.title}</h1>
        <p className="mt-3 text-base text-slate-700 sm:text-lg">{post.description}</p>
        <FreshnessNote date={post.updatedDate} />
        <AdSenseUnit className="mt-6" />

        <div className="mt-6 space-y-8">
          {post.sections.map((section) => (
            <section key={section.heading} className="section-card p-5 sm:p-6">
              <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
              <div className="mt-3 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {section.bullets && section.bullets.length > 0 ? (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700 sm:text-base">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <section className="mt-8 section-card p-5 sm:p-6">
          <h2 className="text-xl font-semibold text-slate-900">Helpful SpeedXTracking pages</h2>
          <p className="mt-2 text-sm text-slate-700">
            Descriptive internal links to related SpeedX tracking and delivery guides on this site.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-brand-700">
            {seo.relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:underline">
                {link.label}
              </Link>
            ))}
            {activeCluster ? (
              <Link href={`/topics/${activeCluster}`} className="hover:underline">
                {activeCluster === "out-for-delivery"
                  ? "SpeedX out for delivery topic hub"
                  : activeCluster === "delivery-hours"
                    ? "SpeedX delivery hours topic hub"
                    : "SpeedX tracking topic hub"}
              </Link>
            ) : null}
          </div>
          <p className="mt-4 text-sm text-slate-700">
            Ready to check a live scan? Use the{" "}
            <Link href="/track-package" className="font-semibold text-brand-700 hover:underline">
              free SpeedX tracking lookup
            </Link>
            .
          </p>
        </section>

        {postFaqs.length > 0 ? (
          <section className="mt-8 section-card p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-slate-900">SpeedX Tracking FAQs</h2>
            <div className="mt-4 space-y-4">
              {postFaqs.map((faq) => (
                <article key={faq.question}>
                  <h3 className="font-medium text-slate-900">{faq.question}</h3>
                  <p className="mt-1 text-sm text-slate-700">{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-8 section-card p-5 sm:p-6">
          <h2 className="text-xl font-semibold text-slate-900">Related SpeedX articles</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {relatedToShow.map((entry) => (
              <Link
                key={entry.slug}
                href={`/blog/${entry.slug}`}
                className="rounded-lg border border-slate-200 p-3 text-sm font-semibold text-brand-700 hover:border-brand-500 hover:underline"
              >
                {entry.title}
              </Link>
            ))}
          </div>
        </section>

        <TopicAuthorityLinks activeCluster={activeCluster} title="Descriptive SpeedX cluster links" />
        <SiteLinkHub currentPath={`/blog/${post.slug}`} />

        <EditorialTrustBlock
          reviewedDate={post.updatedDate}
          notes="This article follows SpeedXTracking blog SEO writing guidelines (meta, keywords, FAQs, descriptive internal links) and is reviewed against official carrier resources. Spam backlink farms are never used as citations."
          sources={getTrustedCitationSources()}
        />
      </article>
    </div>
  );
}
