import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/content/blogs";
import { FreshnessNote } from "@/components/seo/FreshnessNote";
import { JsonLd } from "@/components/seo/JsonLd";
import { getFreshnessDate } from "@/lib/seo/freshness";
import { buildMetadata } from "@/lib/seo/metadata";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schema";

export const revalidate = 86400;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) return {};

  return buildMetadata({
    title: `${post.title} | SpeedXTracking Blog`,
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

  const postFaqs = [
    {
      question: "How do I check SpeedX tracking updates faster?",
      answer:
        "Use your full tracking number on the SpeedX tracking page and recheck every 12 to 24 hours. Updates usually appear when a package reaches a new hub or final-mile scan point."
    },
    {
      question: "Why does SpeedX tracking sometimes stop updating?",
      answer:
        "Short pauses are common during linehaul transit, weekends, and customs processing. If there is no update for 5+ days, contact the seller and then SpeedX support with your tracking number."
    },
    {
      question: "Can I track SpeedX Shein orders with the same number?",
      answer:
        "Yes. Most Shein shipments handled by SpeedX can be tracked using the same carrier tracking number shown in your order shipment details."
    }
  ];

  return (
    <div className="container-page py-6 sm:py-8 lg:py-10">
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.description,
          path: `/blog/${post.slug}`,
          datePublished: post.publishedDate,
          dateModified: post.updatedDate,
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
          { name: "Home", url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/` },
          { name: "Blog", url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/blog` },
          { name: post.title, url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/blog/${post.slug}` }
        ])}
      />
      <JsonLd data={faqSchema(postFaqs)} />
      <article className="mx-auto max-w-4xl">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-700">{post.category}</span>
          <span className="text-slate-500">{post.readTime}</span>
          <span className="text-slate-500">Published: {post.publishedDate}</span>
        </div>

        <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">{post.title}</h1>
        <p className="mt-3 text-base text-slate-700 sm:text-lg">{post.description}</p>
        <FreshnessNote date={getFreshnessDate("guidesHub")} />

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
          <Link href="/carriers/speedx/tracking-status" className="btn-secondary">
            SpeedX Tracking Status
          </Link>
          <Link href="/blog" className="btn-secondary">
            Back to Blog
          </Link>
          <Link href="/track-package" className="btn-primary">
            Track a Package
          </Link>
        </div>

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
      </article>
    </div>
  );
}
