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
    question: "What is SpeedX?",
    answer:
      "SpeedX is a last-mile delivery and logistics carrier used by many online retailers, including marketplace sellers shipping Shein and similar e-commerce orders internationally."
  },
  {
    question: "Is SpeedX a shipping company?",
    answer:
      "Yes. SpeedX handles package delivery, tracking scans, and final-mile drop-offs. Shoppers usually receive a SpeedX, SPX, or SPXCN tracking number after the seller ships the order."
  },
  {
    question: "Who delivers SpeedX packages?",
    answer:
      "SpeedX and its local delivery partners deliver the parcels. For marketplace orders, the seller hands the package to SpeedX, then the carrier network completes transit and final delivery."
  },
  {
    question: "How do I track a SpeedX package?",
    answer:
      "Copy the full SpeedX tracking number from your order email or app, then paste it into a free SpeedX tracker to see status, ETA context, and scan history."
  }
];

export const metadata = buildMetadata({
  title: "What Is SpeedX? Shipping Carrier Explained",
  description:
    "What is SpeedX shipping? Learn how the SpeedX delivery carrier works, who delivers packages, and how to track SPX/SPXCN numbers worldwide.",
  path: "/what-is-speedx"
});

export default function WhatIsSpeedXPage() {
  const reviewed = "2026-10-12";

  return (
    <div className="container-page py-10">
      <JsonLd
        data={webPageSchema({
          path: "/what-is-speedx",
          title: "What Is SpeedX?",
          description: "Plain-language explanation of the SpeedX shipping carrier and how package tracking works."
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "What Is SpeedX?", url: `${siteConfig.url}/what-is-speedx` }
        ])}
      />
      <JsonLd
        data={articleSchema({
          title: "What Is SpeedX? Shipping Carrier Explained",
          description:
            "SpeedX is a last-mile delivery carrier used for e-commerce packages. Learn how SpeedX shipping works and how to track your number.",
          path: "/what-is-speedx",
          datePublished: reviewed,
          dateModified: reviewed,
          keywords: ["what is speedx", "what is speedx shipping", "who delivers speedx packages", "speedx delivery"],
          articleSection: "SpeedX Basics",
          wordCount: 900
        })}
      />
      <JsonLd data={faqSchema(faqs)} />

      <h1 className="text-3xl font-bold text-slate-900">What Is SpeedX?</h1>
      <p className="mt-3 max-w-3xl text-slate-700">
        SpeedX is a package delivery carrier focused on last-mile and e-commerce shipping. If your online order shows a SpeedX, SPX, or SPXCN tracking number, SpeedX (or a partner in its network) is moving the parcel toward your address.
      </p>

      <section className="mt-6 section-card">
        <h2 className="text-lg font-semibold">Track a SpeedX package free</h2>
        <div className="mt-4">
          <TrackingForm />
        </div>
      </section>

      <AdSenseUnit />

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">What is SpeedX shipping?</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700">
          SpeedX shipping means a retailer or marketplace seller handed your parcel to the SpeedX delivery network. That network scans the package through hubs, linehaul routes, and a local final-mile driver. Shoppers in the US, Europe, Latin America, and other regions often see SpeedX on cross-border fashion and marketplace orders.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-700">
          SpeedXTracking.org is an independent guide and free tracker for those shipments. We are not affiliated with SpeedX.
        </p>
      </section>

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">Who delivers SpeedX packages?</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700">
          SpeedX and contracted local partners deliver the packages. The seller usually creates the label; SpeedX handles transit and delivery attempts. If tracking says out for delivery, a local driver has the parcel for that day&apos;s route.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Seller / marketplace: order and label creation</li>
          <li>SpeedX network: scans, hubs, and linehaul</li>
          <li>Local driver: final delivery attempt</li>
        </ul>
      </section>

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">SpeedX delivery vs SpeedX tracking</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700">
          <strong>SpeedX delivery</strong> is the physical shipping service. <strong>SpeedX tracking</strong> is the status timeline for that shipment. Use tracking to understand ETAs, out-for-delivery timing, and exceptions before contacting support.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-brand-700">
          <Link href="/speedx-delivery" className="hover:underline">
            SpeedX delivery guide
          </Link>
          <Link href="/track-package" className="hover:underline">
            Free SpeedX tracking number lookup
          </Link>
          <Link href="/topics/out-for-delivery" className="hover:underline">
            Out for delivery meaning
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
      <SiteLinkHub currentPath="/what-is-speedx" />
      <TrustedCitations variant="core" />
    </div>
  );
}
