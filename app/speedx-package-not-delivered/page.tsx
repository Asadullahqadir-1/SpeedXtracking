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
    question: "SpeedX package not delivered — what should I do?",
    answer:
      "Confirm the latest scan, check porch/lockers/reception, wait until the end of the local delivery day if status is out for delivery, then contact the seller with screenshots if nothing arrives."
  },
  {
    question: "Tracking says delivered but package not delivered?",
    answer:
      "Search alternate drop points and neighbors first, then open a seller case with proof-of-delivery details and timeline screenshots."
  },
  {
    question: "Out for delivery but package not delivered same day?",
    answer:
      "Busy routes can finish late or roll to the next day. Recheck the next morning before escalating unless an exception scan appears."
  },
  {
    question: "How long should I wait if SpeedX is not delivered?",
    answer:
      "After out for delivery, allow the full local day plus the next morning. After a missed seller ETA with no scans for 48+ hours, escalate with evidence."
  },
  {
    question: "Who do I contact — SpeedX or the seller?",
    answer:
      "For marketplace orders (Shein, Temu, etc.), contact the seller/marketplace first. Use official SpeedX support when the seller directs you or for carrier-level exceptions."
  }
];

const reviewed = "2026-11-10";

export const metadata = buildMetadata({
  title: "SpeedX Package Not Delivered — What To Do",
  description:
    "SpeedX package not delivered? Checklist for out for delivery delays, delivered-but-missing parcels, and when to contact the seller vs support.",
  path: "/speedx-package-not-delivered"
});

export default function SpeedXPackageNotDeliveredPage() {
  return (
    <div className="container-page py-10">
      <JsonLd
        data={webPageSchema({
          path: "/speedx-package-not-delivered",
          title: "SpeedX Package Not Delivered",
          description: "Action plan when a SpeedX package is not delivered as expected."
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Package Not Delivered", url: `${siteConfig.url}/speedx-package-not-delivered` }
        ])}
      />
      <JsonLd
        data={articleSchema({
          title: "SpeedX Package Not Delivered — What To Do",
          description: "Step-by-step recovery when SpeedX tracking and delivery do not match.",
          path: "/speedx-package-not-delivered",
          datePublished: reviewed,
          dateModified: reviewed,
          keywords: [
            "speedx package not delivered",
            "speedx out for delivery but not delivered",
            "speedx delivered but not received",
            "speedx tracking not updating"
          ],
          articleSection: "SpeedX Troubleshooting",
          wordCount: 1000
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={speakableSchema({
          path: "/speedx-package-not-delivered",
          cssSelectors: [".answer-lead", "h1"]
        })}
      />

      <h1 className="text-3xl font-bold text-slate-900">SpeedX Package Not Delivered</h1>
      <p className="answer-lead mt-3 max-w-3xl text-lg font-medium text-slate-900">
        If your SpeedX package is not delivered, check the latest scan first—out for delivery can run late, and “delivered” scans sometimes mean a nearby drop point. Then escalate with screenshots.
      </p>

      <section className="mt-6 section-card">
        <TrackingForm />
      </section>

      <AdSenseUnit />

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">Fast checklist</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          <li>Paste the full SPX/SPXCN number and read the latest event.</li>
          <li>If out for delivery, wait until end of day + next morning.</li>
          <li>Search porch, side door, locker, reception, and neighbors.</li>
          <li>Screenshot the timeline and contact the seller with order ID.</li>
          <li>Ask for locate / reattempt / claim options if ETA already passed.</li>
        </ol>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-brand-700">
          <Link href="/speedx-out-for-delivery" className="hover:underline">
            Out for delivery meaning
          </Link>
          <Link href="/blog/speedx-out-for-delivery-but-not-delivered" className="hover:underline">
            Out for delivery but not delivered
          </Link>
          <Link href="/guides/delivered-not-received" className="hover:underline">
            Delivered but not received
          </Link>
          <Link href="/speedx-contact-support" className="hover:underline">
            SpeedX customer service
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

      <TopicAuthorityLinks activeCluster="out-for-delivery" />
      <SiteLinkHub currentPath="/speedx-package-not-delivered" />
      <TrustedCitations variant="all" />
    </div>
  );
}
