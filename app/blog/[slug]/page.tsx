import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/content/blogs";
import { FreshnessNote } from "@/components/seo/FreshnessNote";
import { JsonLd } from "@/components/seo/JsonLd";
import { EditorialTrustBlock } from "@/components/seo/EditorialTrustBlock";
import { buildMetadata, siteConfig } from "@/lib/seo/metadata";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schema";

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
    redirect("/guides/speedx-delivery-hours");
  }

  return buildMetadata({
    title: `${post.title} | SpeedX Guide`,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: [
      "SpeedX tracking",
      "speed x tracking",
      "track SpeedX package",
      "speedx package tracking",
      "speedx tracking number",
      "SpeedX tracking status",
      `${post.title} SpeedX tracking`,
      "SpeedX delivery update"
    ]
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  if (slug === "does-speedx-deliver-late-at-night-guide") {
    redirect("/guides/speedx-delivery-hours");
  }

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug && item.slug !== "does-speedx-deliver-late-at-night-guide")
    .filter((item) => item.category === post.category)
    .slice(0, 3);

  const fallbackRelatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug && item.slug !== "does-speedx-deliver-late-at-night-guide")
    .slice(0, 3);
  const relatedToShow = relatedPosts.length > 0 ? relatedPosts : fallbackRelatedPosts;
  const estimatedWordCount = post.sections.reduce((count, section) => {
    const paragraphWords = section.paragraphs.reduce((sum, paragraph) => sum + paragraph.trim().split(/\s+/).length, 0);
    const bulletWords = (section.bullets ?? []).reduce((sum, bullet) => sum + bullet.trim().split(/\s+/).length, 0);
    return count + paragraphWords + bulletWords;
  }, 0);

  const articleFaqs: Record<string, Array<{ question: string; answer: string }>> = {
    "speedx-delivery-time-by-region": [
      {
        question: "What are typical SpeedX delivery times?",
        answer:
          "Domestic SpeedX shipments commonly take several business days after carrier handoff, while cross-border shipments can take longer because customs and partner handoffs add processing stages."
      },
      {
        question: "Are SpeedX delivery times guaranteed?",
        answer:
          "No. Delivery times are estimates affected by route, customs, weather, destination density, and peak volume. Use the latest scan and seller estimate together."
      }
    ],
    "speedx-out-for-delivery-but-not-delivered": [
      {
        question: "How long does SpeedX take to deliver when out for delivery?",
        answer:
          "Out for delivery usually means the parcel is intended for delivery that day, but route overflow, traffic, weather, access issues, or an unfinished route can move the attempt to the next day."
      },
      {
        question: "What should I do if SpeedX is out for delivery but not delivered?",
        answer:
          "Check the delivery area and access instructions, wait through the local delivery window, then recheck the next morning. Contact the seller with the tracking number and screenshot if no new event appears."
      }
    ],
    "shein-speedx-tracking-guide": [
      {
        question: "How do I use SpeedX tracking for a Shein order?",
        answer:
          "Copy the carrier tracking number from Shein shipment details or the shipping email, then compare seller, customs, destination handoff, and final-mile events in sequence."
      },
      {
        question: "Who should I contact when a Shein SpeedX shipment is delayed?",
        answer:
          "Start with Shein for order, address, or refund issues. Use SpeedX support for carrier scan or delivery-event questions after the seller confirms the shipment details."
      }
    ]
  };

  const postFaqs = articleFaqs[post.slug] ?? [];

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
          keywords: [
            "SpeedX tracking",
            "SpeedX tracking update",
            "speed x tracking",
            "track SpeedX package",
            "speedx package tracking",
            "SpeedX delivery status",
            "SpeedX tracking number"
          ]
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
          <span className="text-slate-500">{post.readTime}</span>
          <span className="text-slate-500">Published: {post.publishedDate}</span>
        </div>

        <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">{post.title}</h1>
        <p className="mt-3 text-base text-slate-700 sm:text-lg">{post.description}</p>
        <FreshnessNote date={post.updatedDate} />

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

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/carriers/speedx" className="btn-secondary">
            SpeedX Tracking Hub
          </Link>
          <Link href="/carriers/speedx/status" className="btn-secondary">
            SpeedX Tracking Status
          </Link>
          {(post.category === "Delivery Times" || post.slug === "speedx-out-for-delivery-but-not-delivered") ? (
            <Link href="/guides/speedx-delivery-hours" className="btn-secondary">
              SpeedX Delivery Hours Guide
            </Link>
          ) : null}
          <Link href="/blog" className="btn-secondary">
            Back to Blog
          </Link>
          <Link href="/track-package" className="btn-primary">
            Track a Package
          </Link>
        </div>

        {postFaqs.length > 0 ? <section className="mt-8 section-card p-5 sm:p-6">
          <h2 className="text-xl font-semibold text-slate-900">SpeedX Tracking FAQs</h2>
          <div className="mt-4 space-y-4">
            {postFaqs.map((faq) => (
              <article key={faq.question}>
                <h3 className="font-medium text-slate-900">{faq.question}</h3>
                <p className="mt-1 text-sm text-slate-700">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section> : null}

        <section className="mt-8 section-card p-5 sm:p-6">
          <h2 className="text-xl font-semibold text-slate-900">Related SpeedX Articles</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {relatedToShow.map((entry) => (
              <Link key={entry.slug} href={`/blog/${entry.slug}`} className="rounded-lg border border-slate-200 p-3 text-sm text-brand-700 hover:border-brand-500 hover:underline">
                {entry.title}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 section-card p-5 sm:p-6">
          <h2 className="text-xl font-semibold text-slate-900">Next steps</h2>
          <p className="mt-3 text-sm text-slate-700">
            Use the practical checks above to determine when a SpeedX issue is normal versus when it is time to contact support. Keeping a clear timeline and the latest scan screenshots will help speed up the resolution.
          </p>
        </section>

        <EditorialTrustBlock
          reviewedDate={post.updatedDate}
          notes="This article is reviewed against official carrier resources and updated when support flows or status definitions change."
          sources={[
            { label: "SpeedX official website", href: "https://speedx.io/" },
            { label: "SpeedX support center", href: "https://support.speedx.io/hc/en-us" }
          ]}
        />
      </article>
    </div>
  );
}
