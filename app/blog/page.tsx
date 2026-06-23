import Link from "next/link";
import { blogPosts } from "@/content/blogs";
import { siteConfig } from "@/lib/seo/metadata";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, collectionPageSchema, itemListSchema } from "@/lib/seo/schema";

export const revalidate = 86400;

export const metadata = buildMetadata({
  title: "SpeedX Tracking Blog: Real Fixes For Delays, Status Errors, And Delivery Issues",
  description:
    "Read step-by-step SpeedX tracking guides that solve delayed scans, status errors, customs holds, and delivered-but-missing issues.",
  path: "/blog",
  keywords: [
    "SpeedX tracking blog",
    "SpeedX tracking tips",
    "SpeedX package tracking help",
    "SpeedX delivery updates",
    "SpeedX tracking status guide",
    "SpeedX delivery time",
    "SpeedX tracking not updating"
  ]
});

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.updatedDate).getTime() - new Date(a.updatedDate).getTime());

  return (
    <div className="container-page py-6 sm:py-8 lg:py-10">
      <JsonLd
        data={
          collectionPageSchema({
            path: "/blog",
            title: "SpeedX Tracking Blog",
            description:
              "Read practical SpeedX tracking guides for delivery time questions, status meanings, delayed package fixes, and Shein shipment help."
          })
        }
      />
      <JsonLd
        data={
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Blog", url: `${siteConfig.url}/blog` }
          ])
        }
      />
      <JsonLd
        data={
          itemListSchema(
            sortedPosts.map((post) => ({
              name: post.title,
              url: `${siteConfig.url}/blog/${post.slug}`,
              description: post.description
            }))
          )
        }
      />
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">SpeedX Tracking Blog</h1>
      <p className="mt-2 max-w-3xl text-sm text-slate-700 sm:text-base">
        In-depth SpeedX tracking articles and practical checklists to solve delivery problems faster, decode status updates, and improve package tracking accuracy.
      </p>
      <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-700">
        <Link href="/carriers/speedx" className="font-semibold text-brand-700 hover:underline">
          SpeedX tracking hub
        </Link>
        <Link href="/carriers/speedx/status" className="font-semibold text-brand-700 hover:underline">
          SpeedX tracking status
        </Link>
        <Link href="/carriers/speedx/delivery-time" className="font-semibold text-brand-700 hover:underline">
          SpeedX delivery estimate
        </Link>
      </div>

      <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <h2 className="text-base font-semibold text-slate-900">Popular Search Intent Topics</h2>
        <div className="mt-3 grid gap-2 text-sm text-brand-700 sm:grid-cols-2">
          <Link href="/blog/speedx-tracking-not-updating" className="hover:underline">SpeedX tracking not updating</Link>
          <Link href="/blog/tracking-status-meanings-explained" className="hover:underline">SpeedX tracking status meanings</Link>
          <Link href="/blog/speedx-delivery-time-by-region" className="hover:underline">SpeedX delivery time by region</Link>
          <Link href="/blog/delivered-but-not-received-speedx" className="hover:underline">Delivered but not received</Link>
        </div>
      </section>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sortedPosts.map((post) => (
          <article key={post.slug} className="section-card p-5 transition-all hover:border-brand-500">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-700">{post.category}</span>
              <span className="text-slate-500">{post.readTime}</span>
            </div>
            <h2 className="mt-3 text-lg font-semibold text-slate-900">{post.title}</h2>
            <p className="mt-2 text-sm text-slate-700">{post.description}</p>
            <p className="mt-3 text-xs text-slate-500">Updated: {post.updatedDate}</p>

            <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-sm font-semibold text-brand-700 hover:underline">
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
