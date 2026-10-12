import Link from "next/link";
import { buildMetadata, siteConfig } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo/schema";
import { TopicAuthorityLinks } from "@/components/seo/TopicAuthorityLinks";
import { TrackingForm } from "@/components/tracking/TrackingForm";
import { AdSenseUnit } from "@/components/ads/AdSenseUnit";

export const revalidate = 86400;

const faqs = [
  {
    question: "How long does SpeedX delivery take?",
    answer:
      "Domestic SpeedX delivery often takes about 2-7 business days after handoff. International SpeedX delivery commonly takes about 7-20 days including customs and partner transfers."
  },
  {
    question: "Does SpeedX deliver on Sunday?",
    answer:
      "Sunday delivery can happen on some routes, but it is less consistent than weekday or Saturday service. Recheck tracking Monday if Sunday stays quiet."
  },
  {
    question: "What are SpeedX delivery hours?",
    answer:
      "Hours vary by city and route. Evening delivery is common on busy routes, and there is no single national stop time."
  },
  {
    question: "How do I track SpeedX delivery?",
    answer:
      "Enter your SpeedX tracking number in the free tracker to see current status, out for delivery updates, and ETA context."
  }
];

export const metadata = buildMetadata({
  title: "SpeedX Delivery — Times, Hours & Tracking",
  description:
    "SpeedX delivery times, hours, Sunday service, and free tracking for SPX/SPXCN packages. International SpeedX shipping help for Shein and marketplace orders.",
  path: "/speedx-delivery"
});

export default function SpeedXDeliveryPage() {
  const reviewed = "2026-10-12";

  return (
    <div className="container-page py-10">
      <JsonLd
        data={webPageSchema({
          path: "/speedx-delivery",
          title: "SpeedX Delivery",
          description: "SpeedX delivery times, hours, weekend service, and tracking guidance for international shoppers."
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "SpeedX Delivery", url: `${siteConfig.url}/speedx-delivery` }
        ])}
      />
      <JsonLd
        data={articleSchema({
          title: "SpeedX Delivery — Times, Hours & Tracking",
          description:
            "Complete SpeedX delivery guide covering ETAs, delivery hours, Sunday service, and package tracking.",
          path: "/speedx-delivery",
          datePublished: reviewed,
          dateModified: reviewed,
          keywords: [
            "speedx delivery",
            "speedx delivery times",
            "speedx delivery hours",
            "does speedx deliver on sunday",
            "how long does speedx take to deliver"
          ],
          articleSection: "SpeedX Delivery",
          wordCount: 1100
        })}
      />
      <JsonLd data={faqSchema(faqs)} />

      <h1 className="text-3xl font-bold text-slate-900">SpeedX Delivery: Times, Hours, and Tracking</h1>
      <p className="mt-3 max-w-3xl text-slate-700">
        SpeedX delivery moves e-commerce parcels through hubs and local drivers worldwide. This guide covers typical SpeedX delivery times, delivery hours, Sunday/weekend service, and how to track your package with a SpeedX tracking number.
      </p>

      <section className="mt-6 section-card">
        <h2 className="text-lg font-semibold">Track SpeedX delivery free</h2>
        <div className="mt-4">
          <TrackingForm />
        </div>
      </section>

      <AdSenseUnit />

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">SpeedX delivery times</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700">
          SpeedX delivery times depend on origin, destination, customs, and final-mile capacity. Use these as planning windows, not guarantees:
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <article className="rounded-lg border border-slate-200 p-4">
            <h3 className="font-semibold text-slate-900">Domestic delivery</h3>
            <p className="mt-2 text-sm text-slate-700">Often about 2-7 business days after carrier handoff.</p>
          </article>
          <article className="rounded-lg border border-slate-200 p-4">
            <h3 className="font-semibold text-slate-900">International delivery</h3>
            <p className="mt-2 text-sm text-slate-700">Often about 7-20 days including export, customs, and local transfer.</p>
          </article>
        </div>
        <p className="mt-4 text-sm">
          <Link href="/carriers/speedx/delivery-time" className="font-semibold text-brand-700 hover:underline">
            Full SpeedX delivery time estimates →
          </Link>
        </p>
      </section>

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">SpeedX delivery hours</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700">
          SpeedX delivery hours vary by route. Evening drops are common in busy cities. There is no single global cutoff for what time SpeedX stops delivering — check your out-for-delivery scan and seller ETA.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-brand-700">
          <Link href="/topics/delivery-hours" className="hover:underline">
            How late does SpeedX deliver?
          </Link>
          <Link href="/guides/speedx-delivery-hours" className="hover:underline">
            Delivery hours checklist
          </Link>
          <Link href="/topics/delivery-hours/evening-delivery" className="hover:underline">
            Does SpeedX deliver in the evening?
          </Link>
        </div>
      </section>

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">Does SpeedX deliver on Sunday?</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700">
          Sunday delivery is possible on some SpeedX routes, especially in high-volume metro areas, but it is less consistent than weekday service. Saturday delivery is more common. If tracking is quiet on Sunday, recheck Monday before escalating.
        </p>
        <p className="mt-3 text-sm">
          <Link href="/does-speedx-deliver-on-sunday" className="font-semibold text-brand-700 hover:underline">
            Full Sunday & weekend delivery answer →
          </Link>
        </p>
      </section>

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">SpeedX delivery tracking</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700">
          Paste your SpeedX tracking number to follow label created, in transit, facility, out for delivery, and delivered events. Cross-border SPXCN numbers may update in batches during customs.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-brand-700">
          <Link href="/track-package" className="hover:underline">
            SpeedX tracking number lookup
          </Link>
          <Link href="/topics/out-for-delivery" className="hover:underline">
            Out for delivery help
          </Link>
          <Link href="/carriers/speedx/shein" className="hover:underline">
            Shein SpeedX tracking
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
    </div>
  );
}
