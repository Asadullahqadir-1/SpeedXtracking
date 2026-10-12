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
    question: "How do I do SpeedX package tracking?",
    answer:
      "Enter your SpeedX tracking number in the free tracker. You will see status, scan history, and delivery progress when the carrier has published events."
  },
  {
    question: "Does SpeedX package tracking work for Shein?",
    answer:
      "Yes. Many Shein orders hand off to SpeedX for part of the journey. Use the SpeedX / SPX / SPXCN number from the order, not only the Shein order ID."
  },
  {
    question: "What if SpeedX package tracking is not updating?",
    answer:
      "Allow 24–48 hours during linehaul or customs. If the seller ETA has passed or an exception appears, save screenshots and contact the seller first."
  }
];

export const metadata = buildMetadata({
  title: "SpeedX Package Tracking — Free Status Lookup",
  description:
    "Free SpeedX package tracking for SPX/SPXCN numbers. Check international delivery status, Shein shipments, and out for delivery updates.",
  path: "/speedx-package-tracking"
});

export default function SpeedXPackageTrackingPage() {
  const reviewed = "2026-10-13";

  return (
    <div className="container-page py-10">
      <JsonLd
        data={webPageSchema({
          path: "/speedx-package-tracking",
          title: "SpeedX Package Tracking",
          description: "Free SpeedX package tracking with status and ETA context for international shoppers."
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "SpeedX Package Tracking", url: `${siteConfig.url}/speedx-package-tracking` }
        ])}
      />
      <JsonLd
        data={articleSchema({
          title: "SpeedX Package Tracking — Free Status Lookup",
          description: "Track SpeedX packages free with SPX/SPXCN numbers and troubleshooting help.",
          path: "/speedx-package-tracking",
          datePublished: reviewed,
          dateModified: reviewed,
          keywords: ["speedx package tracking", "speed x tracking package", "speedx track package"],
          articleSection: "SpeedX Tracking",
          wordCount: 1000
        })}
      />
      <JsonLd data={faqSchema(faqs)} />

      <h1 className="text-3xl font-bold text-slate-900">SpeedX Package Tracking</h1>
      <p className="mt-3 max-w-3xl text-slate-700">
        Free SpeedX package tracking for domestic and international shipments. Paste your tracking number to see the latest status—then open the right guide if your parcel stalls.
      </p>

      <section className="mt-6 section-card">
        <TrackingForm />
      </section>

      <AdSenseUnit />

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">What SpeedX package tracking shows</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>Current status (label created, in transit, at facility, out for delivery, delivered)</li>
          <li>Scan timeline when the carrier publishes events</li>
          <li>ETA context from seller estimates and route stage</li>
          <li>Next-step help for delays, exceptions, and missing parcels</li>
        </ul>
      </section>

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">Common SpeedX package tracking problems</h2>
        <div className="mt-4 grid gap-3 text-sm font-semibold text-brand-700 sm:grid-cols-2">
          <Link href="/blog/speedx-out-for-delivery-but-not-delivered" className="hover:underline">
            Out for delivery but not delivered →
          </Link>
          <Link href="/blog/speedx-tracking-not-updating" className="hover:underline">
            Tracking not updating →
          </Link>
          <Link href="/carriers/speedx/shein" className="hover:underline">
            Shein SpeedX tracking →
          </Link>
          <Link href="/speedx-delivery" className="hover:underline">
            SpeedX delivery times →
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
      <SiteLinkHub currentPath="/speedx-package-tracking" />
      <TrustedCitations variant="all" />
    </div>
  );
}
