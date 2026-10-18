import Link from "next/link";
import { buildMetadata, siteConfig } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema, howToSchema, webPageSchema } from "@/lib/seo/schema";
import { TopicAuthorityLinks } from "@/components/seo/TopicAuthorityLinks";
import { SiteLinkHub } from "@/components/seo/SiteLinkHub";
import { TrustedCitations } from "@/components/seo/TrustedCitations";
import { TrackingForm } from "@/components/tracking/TrackingForm";
import { AdSenseUnit } from "@/components/ads/AdSenseUnit";

export const revalidate = 86400;

const faqs = [
  {
    question: "How to track a SpeedX package step by step?",
    answer:
      "Copy the full SpeedX tracking number from your order email, paste it into a free SpeedX tracker, review the latest status, then wait 24–48 hours before escalating quiet scans during transit or customs."
  },
  {
    question: "How to track SpeedX Shein orders?",
    answer:
      "Open Shein order details, copy the SpeedX carrier tracking number, and track it here. For stuck Shein + SpeedX shipments, use our Shein guide after you check the latest scan."
  }
];

export const metadata = buildMetadata({
  title: "How to Track SpeedX Package — Free Steps",
  description:
    "How to track a SpeedX package in minutes: find your tracking number, check SPX/SPXCN status free, and know when to contact support.",
  path: "/how-to-track-speedx"
});

export default function HowToTrackSpeedXPage() {
  const reviewed = "2026-10-13";

  return (
    <div className="container-page py-10">
      <JsonLd
        data={webPageSchema({
          path: "/how-to-track-speedx",
          title: "How to Track SpeedX",
          description: "Step-by-step SpeedX package tracking for international shoppers."
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "How to Track SpeedX", url: `${siteConfig.url}/how-to-track-speedx` }
        ])}
      />
      <JsonLd
        data={articleSchema({
          title: "How to Track SpeedX Package — Free Steps",
          description: "Step-by-step instructions to track SpeedX packages with SPX/SPXCN numbers.",
          path: "/how-to-track-speedx",
          datePublished: reviewed,
          dateModified: reviewed,
          keywords: ["how to track speedx", "how to track speedx package", "track speedx shipment"],
          articleSection: "SpeedX Tracking",
          wordCount: 950
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={howToSchema({
          name: "How to track a SpeedX package",
          description: "Step-by-step SpeedX tracking using your SPX or SPXCN number.",
          path: "/how-to-track-speedx",
          steps: [
            {
              name: "Find your tracking number",
              text: "Open the shipping email or marketplace order page and copy the SpeedX / SPX / SPXCN carrier tracking number."
            },
            {
              name: "Paste into the free tracker",
              text: "Paste the full number with no spaces into the SpeedXTracking free tracker and submit."
            },
            {
              name: "Read the latest status",
              text: "Check label created, in transit, destination facility, out for delivery, or delivered events."
            },
            {
              name: "Escalate only when needed",
              text: "If tracking is quiet for 48+ hours after the seller ETA, contact the seller with screenshots before carrier support."
            }
          ]
        })}
      />

      <h1 className="text-3xl font-bold text-slate-900">How to Track a SpeedX Package</h1>
      <p className="mt-3 max-w-3xl text-slate-700">
        Follow these steps to track SpeedX shipments free—whether the order is domestic, cross-border, or from Shein.
      </p>

      <section className="mt-6 section-card">
        <h2 className="text-lg font-semibold">Step 1 — Paste your number</h2>
        <div className="mt-4">
          <TrackingForm />
        </div>
      </section>

      <AdSenseUnit />

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">Full how-to checklist</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          <li>Find the SpeedX tracking number in your shipping email or marketplace order page.</li>
          <li>Copy the full SPX / SPXCN code with no spaces or truncated characters.</li>
          <li>Paste it into the free tracker and open the latest status.</li>
          <li>If status is out for delivery, allow the local delivery day before escalating.</li>
          <li>If tracking is quiet for 48+ hours after the ETA, contact the seller with screenshots.</li>
        </ol>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-brand-700">
          <Link href="/speedx-tracking-number" className="hover:underline">
            Tracking number help →
          </Link>
          <Link href="/blog/how-speedx-tracking-works" className="hover:underline">
            How SpeedX tracking works →
          </Link>
          <Link href="/speedx-contact-support" className="hover:underline">
            Contact support steps →
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
      <SiteLinkHub currentPath="/how-to-track-speedx" />
      <TrustedCitations variant="core" />
    </div>
  );
}
