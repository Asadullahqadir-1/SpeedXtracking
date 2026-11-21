import Link from "next/link";
import { buildMetadata, siteConfig } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema, speakableSchema, webPageSchema } from "@/lib/seo/schema";
import { TopicAuthorityLinks } from "@/components/seo/TopicAuthorityLinks";
import { PageTrail } from "@/components/nav/PageTrail";
import { SiteLinkHub } from "@/components/seo/SiteLinkHub";
import { TrustedCitations } from "@/components/seo/TrustedCitations";
import { TrackingForm } from "@/components/tracking/TrackingForm";
import { AdSenseUnit } from "@/components/ads/AdSenseUnit";

export const revalidate = 86400;

const faqs = [
  {
    question: "Does SpeedX deliver on Sunday?",
    answer:
      "According to SpeedX support, Sunday delivery is offered from 8am to 8pm local time in select service areas. If your area is not included, or scans stay quiet, recheck Monday morning before escalating."
  },
  {
    question: "Does SpeedX deliver on Sundays?",
    answer:
      "Yes in select areas only. SpeedX support describes a Sunday window of 8am-8pm local time where Sunday service is available. If tracking shows out for delivery on Sunday, stay available that day; otherwise recheck Monday."
  },
  {
    question: "Does SpeedX deliver on weekends?",
    answer:
      "Yes. SpeedX support says Saturday delivery runs 8am-8pm local time in all locations, and Sunday delivery runs 8am-8pm in select areas. Weekend scans can still post later than weekday events."
  },
  {
    question: "What should I do if there is no Sunday update?",
    answer:
      "Quiet Sunday scans are common when your area has no Sunday service, or when events post on Monday. Recheck Monday morning before contacting support, unless the seller ETA already passed or tracking shows an exception."
  }
];

export const metadata = buildMetadata({
  title: "Does SpeedX Deliver on Sunday? Weekend Hours Explained",
  description:
    "SpeedX support says Saturday delivery is 8am-8pm in all locations; Sunday is 8am-8pm in select areas. Quiet weekend scans? Recheck Monday before escalating.",
  path: "/does-speedx-deliver-on-sunday"
});

export default function SundayDeliveryPage() {
  const reviewed = "2026-11-01";

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
      <JsonLd
        data={speakableSchema({
          path: "/does-speedx-deliver-on-sunday",
          cssSelectors: [".answer-lead", "h1"]
        })}
      />

      <PageTrail
        items={[
          { name: "Home", path: "/" },
          { name: "SpeedX Delivery", path: "/speedx-delivery" },
          { name: "Sunday Delivery", path: "/does-speedx-deliver-on-sunday" }
        ]}
        includeSchema={false}
      />
      <h1 className="text-3xl font-bold text-slate-900">Does SpeedX Deliver on Sunday? Weekend Hours Explained</h1>
      <p className="answer-lead mt-3 max-w-3xl text-lg font-medium text-slate-900">
        According to SpeedX support, Saturday delivery runs 8am-8pm local time in all locations, and Sunday delivery runs 8am-8pm local time in select areas. If weekend scans stay quiet, recheck Monday morning before escalating.
      </p>
      <p className="mt-2 max-w-3xl text-slate-700">
        Sunday service is not available everywhere. Use your tracking status—not a fixed calendar rule—to decide when to wait or escalate. This page is an independent guide and is not the SpeedX carrier. Confirm current service in your area on the official tracker or with SpeedX support if you need a definitive local answer.
      </p>

      <section className="mt-6 section-card">
        <TrackingForm />
      </section>

      <AdSenseUnit />

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">Sunday vs Saturday SpeedX delivery</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>
            <strong>Saturday:</strong> SpeedX support states Saturday delivery is available from 8am to 8pm local time in all locations.
          </li>
          <li>
            <strong>Sunday:</strong> SpeedX support states Sunday delivery is available from 8am to 8pm local time in select service areas only.
          </li>
          <li>
            <strong>Tracking lag:</strong> weekend scans may still post later than weekday events, even when a delivery attempt happened.
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
          <Link href="/guides/speedx-delivery-hours" className="hover:underline">
            How late does SpeedX deliver?
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
