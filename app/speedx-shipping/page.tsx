import Link from "next/link";
import { buildMetadata, siteConfig } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  speakableSchema,
  webPageSchema
} from "@/lib/seo/schema";
import { TopicAuthorityLinks } from "@/components/seo/TopicAuthorityLinks";
import { SiteLinkHub } from "@/components/seo/SiteLinkHub";
import { TrustedCitations } from "@/components/seo/TrustedCitations";
import { TrackingForm } from "@/components/tracking/TrackingForm";
import { AdSenseUnit } from "@/components/ads/AdSenseUnit";

export const revalidate = 86400;

const faqs = [
  {
    question: "What is SpeedX shipping?",
    answer:
      "SpeedX shipping is last-mile delivery for e-commerce parcels. Retailers and marketplaces hand packages to SpeedX (often with SPX/SPXCN tracking numbers) for hub sorting and final delivery."
  },
  {
    question: "How long does SpeedX shipping take?",
    answer:
      "Domestic SpeedX shipping often takes about 2–7 business days after handoff. Cross-border SpeedX shipping commonly takes about 7–20 days including customs."
  },
  {
    question: "How do I track SpeedX shipping?",
    answer:
      "Paste your SpeedX tracking number into a free tracker to see live status, facility scans, out for delivery, and delivered events."
  },
  {
    question: "Is SpeedX shipping the same as SpeedX delivery?",
    answer:
      "Yes in everyday search language. “Shipping” usually means the service; “delivery” often means the timing/hours outcome. Both point to the same carrier network."
  },
  {
    question: "Does SpeedX ship Shein orders?",
    answer:
      "Many Shein orders use SpeedX for part of the journey. Use the SpeedX/SPX tracking number from the order once the parcel is handed to the carrier."
  },
  {
    question: "What if SpeedX shipping is delayed?",
    answer:
      "Wait 24–48 hours during linehaul or customs, then compare scans to the seller ETA. Escalate to the seller with screenshots if the ETA has passed."
  }
];

const reviewed = "2026-11-10";

export const metadata = buildMetadata({
  title: "SpeedX Shipping — Times, Tracking & Help",
  description:
    "SpeedX shipping explained: how long it takes, how to track SPX/SPXCN packages free, Shein handoffs, and what to do when shipping stalls.",
  path: "/speedx-shipping"
});

export default function SpeedXShippingPage() {
  return (
    <div className="container-page py-10">
      <JsonLd
        data={webPageSchema({
          path: "/speedx-shipping",
          title: "SpeedX Shipping",
          description: "SpeedX shipping times, tracking, and troubleshooting for e-commerce parcels."
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "SpeedX Shipping", url: `${siteConfig.url}/speedx-shipping` }
        ])}
      />
      <JsonLd
        data={articleSchema({
          title: "SpeedX Shipping — Times, Tracking & Help",
          description: "Complete guide to SpeedX shipping for shoppers tracking SPX and SPXCN packages.",
          path: "/speedx-shipping",
          datePublished: reviewed,
          dateModified: reviewed,
          keywords: [
            "speedx shipping",
            "speedx delivery",
            "speedx tracking",
            "how long does speedx shipping take",
            "shein speedx shipping"
          ],
          articleSection: "SpeedX Shipping",
          wordCount: 1100
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={speakableSchema({
          path: "/speedx-shipping",
          cssSelectors: [".answer-lead", "h1"]
        })}
      />

      <h1 className="text-3xl font-bold text-slate-900">SpeedX Shipping</h1>
      <p className="answer-lead mt-3 max-w-3xl text-lg font-medium text-slate-900">
        SpeedX shipping moves online orders through hubs to your door—typically about 2–7 business days domestic and 7–20 days for cross-border parcels with SPX/SPXCN tracking.
      </p>
      <p className="mt-2 max-w-3xl text-slate-700">
        Use free tracking below, then open the matching guide for delivery hours, Sunday service, or out-for-delivery delays.
      </p>

      <section className="mt-6 section-card">
        <TrackingForm />
      </section>

      <AdSenseUnit />

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">How SpeedX shipping works</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          <li>Seller creates a SpeedX label (SPX / SPXCN).</li>
          <li>Parcel enters hub sorting and linehaul.</li>
          <li>Cross-border shipments clear customs (scans may pause).</li>
          <li>Local facility → out for delivery → delivered.</li>
        </ol>
      </section>

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">SpeedX shipping vs delivery times</h2>
        <p className="mt-3 text-sm text-slate-700">
          Shipping is the service network. Delivery times are the ETA windows shoppers feel. For detailed hours and regional ETAs, use the delivery hub.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-brand-700">
          <Link href="/speedx-delivery" className="hover:underline">
            SpeedX delivery times
          </Link>
          <Link href="/does-speedx-deliver-on-sunday" className="hover:underline">
            Weekend / Sunday shipping
          </Link>
          <Link href="/carriers/speedx/shein" className="hover:underline">
            Shein SpeedX shipping
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

      <TopicAuthorityLinks activeCluster="delivery-hours" />
      <SiteLinkHub currentPath="/speedx-shipping" />
      <TrustedCitations variant="all" />
    </div>
  );
}
