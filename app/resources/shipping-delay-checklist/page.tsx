import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, siteConfig } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo/schema";

export const revalidate = 86400;

export const metadata = buildMetadata({
  title: "Shipping Delay Checklist: Diagnose Tracking Problems Step By Step",
  description:
    "Use this free shipping delay checklist to identify scan gaps, missing deliveries, customs holds, and the right support escalation path.",
  path: "/resources/shipping-delay-checklist",
  keywords: [
    "shipping delay checklist",
    "package tracking troubleshooting",
    "delivery delay help",
    "tracking not updating checklist"
  ],
  image: "/images/official/speedx-coverage-map.webp"
});

const checklist = [
  {
    title: "1. Capture the current evidence",
    text: "Save the full tracking timeline, latest event time, scan location, promised delivery date, order ID, and destination ZIP before contacting support."
  },
  {
    title: "2. Identify the route stage",
    text: "Decide whether the parcel is waiting for pickup, moving between hubs, in customs, at a destination facility, out for delivery, or marked delivered."
  },
  {
    title: "3. Compare the gap with the expected window",
    text: "A 24 to 48 hour gap can be normal during linehaul or customs movement. A missed ETA, repeated exception, or five-day silence needs a more active follow-up."
  },
  {
    title: "4. Contact the party that can act",
    text: "Ask the seller to correct order or address data. Ask the carrier to investigate scans, facility handoffs, delivery attempts, or proof of delivery."
  },
  {
    title: "5. Request one concrete next step",
    text: "Ask for a trace, address verification, proof of delivery, next-scan estimate, or case number instead of only requesting a general status update."
  }
];

const faqs = [
  {
    question: "How long should I wait when tracking stops updating?",
    answer: "A 24 to 48 hour gap may be normal during linehaul or customs movement. Escalate sooner when the delivery promise has passed, the package is marked delivered but missing, or an exception requires action."
  },
  {
    question: "Should I contact the seller or the carrier first?",
    answer: "Contact the seller first for order, address, refund, or replacement issues. Contact the carrier when the question concerns a scan, facility, delivery attempt, or proof of delivery."
  },
  {
    question: "What information helps support investigate a delay?",
    answer: "Provide the tracking number, order ID, destination ZIP, latest scan time and location, delivery promise, screenshots, and the specific outcome you want."
  }
];

export default function ShippingDelayChecklistPage() {
  return (
    <div className="container-page py-8 sm:py-10">
      <JsonLd
        data={webPageSchema({
          path: "/resources/shipping-delay-checklist",
          title: "Shipping Delay Checklist",
          description: "A practical checklist for diagnosing package tracking delays and choosing the correct support escalation path."
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Resources", url: `${siteConfig.url}/resources/shipping-delay-checklist` },
          { name: "Shipping Delay Checklist", url: `${siteConfig.url}/resources/shipping-delay-checklist` }
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <article className="mx-auto max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Free shipping resource</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Shipping Delay Checklist</h1>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
          Use this checklist to turn an unclear tracking delay into a documented problem with a clear next action. It is designed for shoppers, sellers, and support teams handling delayed or missing parcels.
        </p>

        <figure className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
          <Image
            src="/images/official/speedx-coverage-map.webp"
            alt="Shipping route and delivery coverage reference for diagnosing a package delay"
            width={1200}
            height={630}
            className="h-auto max-h-96 w-full object-cover"
            sizes="(max-width: 768px) 100vw, 900px"
          />
          <figcaption className="px-4 py-3 text-xs text-slate-600">
            A route-stage view helps separate normal scan gaps from shipment exceptions.
          </figcaption>
        </figure>

        <section className="mt-8 section-card p-5 sm:p-6">
          <h2 className="text-2xl font-semibold text-slate-900">The five-step diagnosis</h2>
          <div className="mt-5 space-y-5">
            {checklist.map((step) => (
              <div key={step.title}>
                <h3 className="font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-1 text-sm leading-7 text-slate-700 sm:text-base">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 section-card bg-slate-50 p-5 sm:p-6">
          <h2 className="text-xl font-semibold text-slate-900">Use the evidence bundle</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            Support teams can investigate faster when the request includes the complete timeline, not only the latest status label. Keep the original screenshots and record the date of every follow-up.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>Full tracking number and order ID</li>
            <li>Latest scan timestamp and location</li>
            <li>Promised delivery window and destination ZIP</li>
            <li>Screenshot of the current status and any exception message</li>
            <li>One specific requested outcome</li>
          </ul>
        </section>

        <section className="mt-8 section-card p-5 sm:p-6">
          <h2 className="text-xl font-semibold text-slate-900">Continue with a focused guide</h2>
          <div className="mt-4 grid gap-3 text-sm text-brand-700 sm:grid-cols-2">
            <Link href="/guides/package-not-updating" className="hover:underline">Tracking not updating guide</Link>
            <Link href="/guides/delivered-not-received" className="hover:underline">Delivered but not received checklist</Link>
            <Link href="/carriers/speedx/status" className="hover:underline">SpeedX status meanings</Link>
            <Link href="/track-package" className="hover:underline">Track a package now</Link>
          </div>
        </section>

        <section className="mt-8 section-card p-5 sm:p-6">
          <h2 className="text-xl font-semibold text-slate-900">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-medium text-slate-900">{faq.question}</h3>
                <p className="mt-1 text-sm leading-7 text-slate-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
