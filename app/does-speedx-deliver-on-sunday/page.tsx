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
    question: "Does SpeedX deliver on Sunday?",
    answer:
      "Sometimes. Sunday SpeedX delivery can happen on busy metro routes, but it is less consistent than weekday or Saturday service."
  },
  {
    question: "Does SpeedX deliver on Sundays?",
    answer:
      "Sunday deliveries are route-dependent. If your package shows out for delivery on Sunday, it may still arrive that day; otherwise recheck Monday."
  },
  {
    question: "Does SpeedX deliver on weekends?",
    answer:
      "Weekend delivery is possible. Saturday is more common than Sunday in many regions, and tracking scans may post later over the weekend."
  },
  {
    question: "What should I do if there is no Sunday update?",
    answer:
      "Wait for Monday morning scans before escalating, unless your seller ETA already passed and the package shows an exception."
  }
];

export const metadata = buildMetadata({
  title: "Does SpeedX Deliver on Sunday? Weekend Guide",
  description:
    "Does SpeedX deliver on Sunday or weekends? See Saturday vs Sunday patterns, tracking lag, and what to do if scans pause.",
  path: "/does-speedx-deliver-on-sunday"
});

export default function SundayDeliveryPage() {
  const reviewed = "2026-10-12";

  return (
    <div className="container-page py-10">
      <JsonLd
        data={webPageSchema({
          path: "/does-speedx-deliver-on-sunday",
          title: "Does SpeedX Deliver on Sunday?",
          description: "Clear answer on SpeedX Sunday and weekend delivery with tracking tips."
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "SpeedX Delivery", url: `${siteConfig.url}/speedx-delivery` },
          { name: "Sunday Delivery", url: `${siteConfig.url}/does-speedx-deliver-on-sunday` }
        ])}
      />
      <JsonLd
        data={articleSchema({
          title: "Does SpeedX Deliver on Sunday?",
          description: "Weekend and Sunday SpeedX delivery explained for international shoppers.",
          path: "/does-speedx-deliver-on-sunday",
          datePublished: reviewed,
          dateModified: reviewed,
          keywords: [
            "does speedx deliver on sunday",
            "does speedx deliver on sundays",
            "does speedx deliver on weekends",
            "speedx weekend delivery"
          ],
          articleSection: "SpeedX Delivery Hours",
          wordCount: 750
        })}
      />
      <JsonLd data={faqSchema(faqs)} />

      <h1 className="text-3xl font-bold text-slate-900">Does SpeedX Deliver on Sunday?</h1>
      <p className="mt-3 max-w-3xl text-slate-700">
        Short answer: sometimes. SpeedX can deliver on Sunday on selected high-volume routes, but Sunday service is less consistent than weekday or Saturday delivery. Use your tracking status—not a fixed calendar rule—to decide when to wait or escalate.
      </p>

      <section className="mt-6 section-card">
        <TrackingForm />
      </section>

      <AdSenseUnit />

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">Sunday vs Saturday SpeedX delivery</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>
            <strong>Saturday:</strong> more common for weekend delivery in many metros.
          </li>
          <li>
            <strong>Sunday:</strong> possible, but route staffing and volume decide availability.
          </li>
          <li>
            <strong>Tracking lag:</strong> weekend scans may post later than weekday events.
          </li>
        </ul>
      </section>

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">If SpeedX is out for delivery on Sunday</h2>
        <p className="mt-3 text-sm text-slate-700">
          An out-for-delivery scan still usually means a same-day attempt. Stay available for evening delivery, check drop points, and recheck Monday morning if nothing arrives.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-brand-700">
          <Link href="/topics/out-for-delivery" className="hover:underline">
            Out for delivery meaning
          </Link>
          <Link href="/speedx-delivery" className="hover:underline">
            SpeedX delivery times hub
          </Link>
          <Link href="/topics/delivery-hours/weekend-delivery-hours" className="hover:underline">
            Weekend delivery hours Q&A
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
      <SiteLinkHub currentPath="/does-speedx-deliver-on-sunday" />
      <TrustedCitations variant="core" />
    </div>
  );
}
