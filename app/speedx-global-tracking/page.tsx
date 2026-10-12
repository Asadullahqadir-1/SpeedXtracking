import Link from "next/link";
import { buildMetadata, siteConfig } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo/schema";
import { TopicAuthorityLinks } from "@/components/seo/TopicAuthorityLinks";
import { SiteLinkHub } from "@/components/seo/SiteLinkHub";
import { TrustedCitations } from "@/components/seo/TrustedCitations";
import { TrackingForm } from "@/components/tracking/TrackingForm";
import { AdSenseUnit } from "@/components/ads/AdSenseUnit";

export const revalidate = 86400;

const faqs = [
  {
    question: "What is SpeedX global tracking?",
    answer:
      "SpeedX global tracking means following a SpeedX shipment across export, customs, and final-mile delivery using your SPX/SPXCN tracking number."
  },
  {
    question: "How long does international SpeedX delivery take?",
    answer:
      "Cross-border SpeedX delivery often takes about 7–20 days including customs and partner handoffs. Domestic legs after arrival are usually faster."
  },
  {
    question: "Why does SpeedX global tracking pause?",
    answer:
      "Export, customs, and linehaul stages often post scans in batches. A 24–48 hour gap can be normal; escalate if the seller ETA has already passed."
  }
];

export const metadata = buildMetadata({
  title: "SpeedX Global Tracking — International Status",
  description:
    "SpeedX global tracking for international SPX/SPXCN packages. Check cross-border status, customs pauses, and delivery ETAs worldwide.",
  path: "/speedx-global-tracking"
});

export default function SpeedXGlobalTrackingPage() {
  const reviewed = "2026-10-13";

  return (
    <div className="container-page py-10">
      <JsonLd
        data={webPageSchema({
          path: "/speedx-global-tracking",
          title: "SpeedX Global Tracking",
          description: "International SpeedX tracking help for cross-border and marketplace shipments."
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "SpeedX Global Tracking", url: `${siteConfig.url}/speedx-global-tracking` }
        ])}
      />
      <JsonLd
        data={articleSchema({
          title: "SpeedX Global Tracking — International Status",
          description: "Track SpeedX international shipments and understand customs and linehaul pauses.",
          path: "/speedx-global-tracking",
          datePublished: reviewed,
          dateModified: reviewed,
          keywords: ["speedx global tracking", "speedx international tracking", "speedx cross border"],
          articleSection: "SpeedX Tracking",
          wordCount: 1000
        })}
      />
      <JsonLd data={faqSchema(faqs)} />

      <h1 className="text-3xl font-bold text-slate-900">SpeedX Global Tracking</h1>
      <p className="mt-3 max-w-3xl text-slate-700">
        International SpeedX shipments move through export, customs, and local delivery. Use free SpeedX global tracking below, then open the right guide if updates stall.
      </p>

      <section className="mt-6 section-card">
        <TrackingForm />
      </section>

      <AdSenseUnit />

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">International SpeedX stages</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>Origin acceptance and export departure</li>
          <li>Customs clearance (updates may lag)</li>
          <li>Destination hub arrival and sorting</li>
          <li>Out for delivery and final drop-off</li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-brand-700">
          <Link href="/blog/speedx-customs-delay-guide" className="hover:underline">
            Customs delay guide →
          </Link>
          <Link href="/speedx-delivery" className="hover:underline">
            Delivery times hub →
          </Link>
          <Link href="/rastrear-paquete-speedx" className="hover:underline">
            Rastrear paquete SpeedX →
          </Link>
        </div>
      </section>

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">FAQ</h2>
        <div className="mt-4 space-y-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">{faq.question}</h3>
              <p className="mt-2 text-sm text-slate-700">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <TopicAuthorityLinks activeCluster="speedx-tracking" />
      <SiteLinkHub currentPath="/speedx-global-tracking" />
      <TrustedCitations variant="all" />
    </div>
  );
}
