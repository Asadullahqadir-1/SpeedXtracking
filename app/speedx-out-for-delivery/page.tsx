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
    question: "What does SpeedX out for delivery mean?",
    answer:
      "It means your package left the local SpeedX facility and is on a driver route for final-mile delivery—usually intended the same local day."
  },
  {
    question: "How long does SpeedX out for delivery take?",
    answer:
      "Most out-for-delivery parcels arrive during that local delivery day. Route order, traffic, and unfinished stops can push arrival into the evening or next day."
  },
  {
    question: "SpeedX out for delivery but not delivered — what should I do?",
    answer:
      "Wait until end of day, check porch/lockers/reception, then recheck tracking next morning. If still unchanged after the seller ETA, contact the seller with screenshots."
  },
  {
    question: "Why is SpeedX out for delivery all day with no drop?",
    answer:
      "Dense routes often finish late. An all-day out-for-delivery status can still end in an evening stop or a next-day retry if the route overflows."
  },
  {
    question: "Does out for delivery for 2 days mean my package is lost?",
    answer:
      "Not always. Overflow routes and access issues can create a second out-for-delivery day. Escalate if two full local days pass with no attempt or exception scan."
  },
  {
    question: "Can I change the SpeedX delivery address while out for delivery?",
    answer:
      "Usually not mid-route. Use official SpeedX support or your seller chat for delivery notes (gate codes, safe place) as soon as out for delivery appears."
  }
];

const reviewed = "2026-11-01";

export const metadata = buildMetadata({
  title: "SpeedX Out for Delivery — Meaning & Timing",
  description:
    "SpeedX out for delivery meaning, same-day odds, and what to do if out for delivery but not delivered. Free SPX/SPXCN tracking below.",
  path: "/speedx-out-for-delivery"
});

export default function SpeedXOutForDeliveryPage() {
  return (
    <div className="container-page py-10">
      <JsonLd
        data={webPageSchema({
          path: "/speedx-out-for-delivery",
          title: "SpeedX Out for Delivery",
          description: "Clear meaning of SpeedX out for delivery and what to do next."
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Out for Delivery", url: `${siteConfig.url}/speedx-out-for-delivery` }
        ])}
      />
      <JsonLd
        data={articleSchema({
          title: "SpeedX Out for Delivery — Meaning & Timing",
          description:
            "What SpeedX out for delivery means, how long it takes, and fixes when the package does not arrive the same day.",
          path: "/speedx-out-for-delivery",
          datePublished: reviewed,
          dateModified: reviewed,
          keywords: [
            "speedx out for delivery",
            "speedx out for delivery but not delivered",
            "speedx out for delivery all day",
            "speedx out for delivery for 2 days",
            "out for delivery meaning speedx"
          ],
          articleSection: "SpeedX Tracking Status",
          wordCount: 1200
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={speakableSchema({
          path: "/speedx-out-for-delivery",
          cssSelectors: [".answer-lead", "h1"]
        })}
      />

      <h1 className="text-3xl font-bold text-slate-900">SpeedX Out for Delivery</h1>
      <p className="answer-lead mt-3 max-w-3xl text-lg font-medium text-slate-900">
        SpeedX out for delivery means your parcel left the local hub and is on a driver route—usually for same-day delivery, though evening stops and next-day retries happen on busy routes.
      </p>
      <p className="mt-2 max-w-3xl text-slate-700">
        Paste your SPX or SPXCN number below to confirm the latest scan, then use the checklists if the status stays out for delivery without a drop.
      </p>

      <section className="mt-6 section-card">
        <TrackingForm />
      </section>

      <AdSenseUnit />

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">What SpeedX out for delivery means</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>Package cleared the local SpeedX (or partner) facility.</li>
          <li>A driver has it on today&apos;s final-mile route.</li>
          <li>Stop order depends on density, traffic, and building access—not your clock preference.</li>
          <li>Most parcels arrive the same local day; overflow can roll to tomorrow.</li>
        </ul>
      </section>

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">Out for delivery but not delivered</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700">
          If tracking still says out for delivery after evening hours, check alternate drop points first, then wait for a morning update before escalating. Keep screenshots of the timeline for seller support.
        </p>
        <p className="mt-3 text-sm">
          <Link
            href="/blog/speedx-out-for-delivery-but-not-delivered"
            className="font-semibold text-brand-700 hover:underline"
          >
            Full recovery checklist →
          </Link>
        </p>
      </section>

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">Related status help</h2>
        <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold text-brand-700">
          <Link href="/topics/out-for-delivery" className="hover:underline">
            Out for delivery topic hub
          </Link>
          <Link href="/blog/speedx-arrived-at-facility-meaning" className="hover:underline">
            Destination facility meaning
          </Link>
          <Link href="/speedx-delivery" className="hover:underline">
            SpeedX delivery times
          </Link>
          <Link href="/does-speedx-deliver-on-sunday" className="hover:underline">
            Sunday delivery
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
      <SiteLinkHub currentPath="/speedx-out-for-delivery" />
      <TrustedCitations variant="all" />
    </div>
  );
}
