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
    question: "What is a SpeedX tracking number?",
    answer:
      "A SpeedX tracking number is the unique ID for your parcel—often starting with SPX or SPXCN. Use the full code from your seller email or marketplace order page."
  },
  {
    question: "Where do I find my SpeedX tracking number?",
    answer:
      "Check the shipping confirmation email, Shein/Temu/Amazon order details, or the seller’s shipment notification. Copy the carrier tracking field, not the store order ID."
  },
  {
    question: "Why is my SpeedX tracking number not working?",
    answer:
      "Numbers can take 24–48 hours to activate after label creation. Confirm there are no missing characters or spaces, then recheck. If the ETA has passed with no scans, contact the seller."
  },
  {
    question: "Can I track SpeedX with only an order number?",
    answer:
      "Usually no. You need the SpeedX / SPX / SPXCN tracking number. Ask the seller for the carrier ID if you only see an order ID."
  }
];

export const metadata = buildMetadata({
  title: "SpeedX Tracking Number — Find & Track Free",
  description:
    "Find your SpeedX tracking number, understand SPX/SPXCN formats, and track packages free worldwide—including Shein SpeedX shipments.",
  path: "/speedx-tracking-number"
});

export default function SpeedXTrackingNumberPage() {
  const reviewed = "2026-10-13";

  return (
    <div className="container-page py-10">
      <JsonLd
        data={webPageSchema({
          path: "/speedx-tracking-number",
          title: "SpeedX Tracking Number",
          description: "How to find and use a SpeedX tracking number for free package status checks."
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "SpeedX Tracking Number", url: `${siteConfig.url}/speedx-tracking-number` }
        ])}
      />
      <JsonLd
        data={articleSchema({
          title: "SpeedX Tracking Number — Find & Track Free",
          description: "Guide to finding, validating, and tracking SpeedX SPX/SPXCN numbers.",
          path: "/speedx-tracking-number",
          datePublished: reviewed,
          dateModified: reviewed,
          keywords: ["speedx tracking number", "speed x tracking number", "spxcn tracking number"],
          articleSection: "SpeedX Tracking",
          wordCount: 1100
        })}
      />
      <JsonLd data={faqSchema(faqs)} />

      <h1 className="text-3xl font-bold text-slate-900">SpeedX Tracking Number</h1>
      <p className="mt-3 max-w-3xl text-slate-700">
        Your SpeedX tracking number is the key to package status. Paste the full SPX or SPXCN code below for a free international lookup—then use the guides if scans stall.
      </p>

      <section className="mt-6 section-card">
        <h2 className="text-lg font-semibold">Track with your SpeedX tracking number</h2>
        <div className="mt-4">
          <TrackingForm />
        </div>
      </section>

      <AdSenseUnit />

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">Where to find a SpeedX tracking number</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          <li>Open the shipping confirmation email from the seller or marketplace.</li>
          <li>In order details, copy the <strong>carrier tracking</strong> field (not the store order ID).</li>
          <li>Look for prefixes such as SPX, SPXCN, or other SpeedX formats without spaces.</li>
          <li>Paste the full number into the free tracker above for live status when carrier data is available.</li>
        </ol>
      </section>

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">SPX vs SPXCN tracking numbers</h2>
        <p className="mt-3 text-sm text-slate-700">
          SPXCN codes are common on cross-border and marketplace orders. Updates may post in batches during export and customs. A quiet 24–48 hours can be normal before destination scans appear.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-brand-700">
          <Link href="/guides/spxcn-tracking-number-meaning" className="hover:underline">
            SPXCN meaning guide →
          </Link>
          <Link href="/blog/speedx-tracking-number-not-found" className="hover:underline">
            Tracking number not found →
          </Link>
          <Link href="/how-to-track-speedx" className="hover:underline">
            How to track SpeedX →
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
      <SiteLinkHub currentPath="/speedx-tracking-number" />
      <TrustedCitations variant="core" />
    </div>
  );
}
