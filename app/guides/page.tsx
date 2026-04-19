import Link from "next/link";
import { guides } from "@/content/guides";
import { getCategoryLabel, getIndexableProgrammaticPages } from "@/content/programmatic-pages";
import { buildMetadata, siteConfig } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, collectionPageSchema, itemListSchema } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "SpeedX Tracking Guides: Fix Delays, Missing Packages, And Status Issues Fast",
  description:
    "Use actionable SpeedX troubleshooting guides to fix delayed tracking updates, delivered-not-received cases, SPXCN confusion, and ETA questions.",
  path: "/guides",
  keywords: [
    "SpeedX tracking guides",
    "speed x tracking help",
    "SPXCN tracking meaning",
    "does SpeedX deliver late at night",
    "SpeedX package not updating"
  ]
});

export default function GuidesPage() {
  const speedxIssuePages = getIndexableProgrammaticPages();

  return (
    <div className="container-page py-10">
      <JsonLd
        data={
          collectionPageSchema({
            path: "/guides",
            title: "SpeedX Tracking Guides",
            description:
              "Read practical SpeedX tracking guides on delayed packages, SPXCN tracking numbers, delivered-not-received issues, and late-night delivery questions."
          })
        }
      />
      <JsonLd
        data={
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Guides", url: `${siteConfig.url}/guides` }
          ])
        }
      />
      <JsonLd
        data={
          itemListSchema(
            guides.map((guide) => ({
              name: guide.title,
              url: `${siteConfig.url}/guides/${guide.slug}`,
              description: guide.intro
            }))
          )
        }
      />
      <h1 className="text-3xl font-bold">Shipping Guides</h1>
      <p className="mt-2 text-slate-700">Clear, action-focused help for common tracking and delivery problems.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {guides.map((guide) => (
          <Link key={guide.slug} href={`/guides/${guide.slug}`} className="section-card hover:border-brand-500">
            <h2 className="text-lg font-semibold text-slate-900">{guide.title}</h2>
            <p className="mt-2 text-sm text-slate-700">{guide.intro}</p>
          </Link>
        ))}
      </div>

      <section className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-lg font-semibold text-slate-900">High-Intent Tracking Paths</h2>
        <p className="mt-2 text-sm text-slate-700">Jump directly to the pages users search for most often when a shipment seems stuck or uncertain.</p>
        <div className="mt-4 grid gap-2 text-sm text-brand-700 sm:grid-cols-2">
          <Link href="/track-package" className="hover:underline">Track package now</Link>
          <Link href="/carriers/speedx/status" className="hover:underline">SpeedX status meanings</Link>
          <Link href="/carriers/speedx/delivery-time" className="hover:underline">SpeedX delivery ETA guide</Link>
          <Link href="/blog/speedx-tracking-not-updating" className="hover:underline">Tracking not updating fixes</Link>
        </div>
      </section>

      <section id="speedx-issue-library" className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">SpeedX Issue Library</h2>
        <p className="mt-2 text-slate-700">
          Crawlable index of practical troubleshooting pages for delays, support contact paths, and Shein shipment issues.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {speedxIssuePages.map((page) => (
            <Link key={page.slug} href={`/${page.slug}`} className="section-card hover:border-brand-500">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">{getCategoryLabel(page)}</p>
              <h3 className="mt-2 text-base font-semibold text-slate-900">{page.h1}</h3>
              <p className="mt-2 text-sm text-slate-700">{page.metaDescription}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
