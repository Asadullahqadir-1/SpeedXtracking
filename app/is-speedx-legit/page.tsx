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
import { SiteLinkHub } from "@/components/seo/SiteLinkHub";
import { TrustedCitations } from "@/components/seo/TrustedCitations";
import { TrackingForm } from "@/components/tracking/TrackingForm";
import { AdSenseUnit } from "@/components/ads/AdSenseUnit";

export const revalidate = 86400;

const faqs = [
  {
    question: "Is SpeedX legit?",
    answer:
      "Yes. SpeedX is a real last-mile delivery carrier used by e-commerce retailers and marketplaces. You can verify shipments with an official SPX/SPXCN tracking number and official support channels."
  },
  {
    question: "Is SpeedXTracking.org the official SpeedX site?",
    answer:
      "No. SpeedXTracking.org is an independent free tracker and help guide. Official SpeedX resources live on speedx.io and support.speedx.io."
  },
  {
    question: "How do I know my SpeedX tracking number is real?",
    answer:
      "Valid SpeedX numbers usually start with SPX or SPXCN and come from your seller’s shipping email or marketplace order page—not from random social messages."
  },
  {
    question: "Are SpeedX reviews trustworthy?",
    answer:
      "Reviews vary by route and seller. Use tracking scans plus seller communication—not only star ratings—when judging a delayed package."
  },
  {
    question: "What if SpeedX never updates?",
    answer:
      "Label-created and customs stages can pause 24–48 hours. If the seller ETA has passed with no movement, contact the seller with screenshots first."
  }
];

const reviewed = "2026-11-10";

export const metadata = buildMetadata({
  title: "Is SpeedX Legit? Carrier Explained Clearly",
  description:
    "Is SpeedX legit? Yes—it's a real last-mile carrier. See how to verify SPX tracking, avoid scams, and use official support (we’re an independent guide).",
  path: "/is-speedx-legit"
});

export default function IsSpeedXLegitPage() {
  return (
    <div className="container-page py-10">
      <JsonLd
        data={webPageSchema({
          path: "/is-speedx-legit",
          title: "Is SpeedX Legit?",
          description: "Clear answer on whether SpeedX is a legitimate shipping carrier."
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Is SpeedX Legit?", url: `${siteConfig.url}/is-speedx-legit` }
        ])}
      />
      <JsonLd
        data={articleSchema({
          title: "Is SpeedX Legit? Carrier Explained Clearly",
          description: "SpeedX legitimacy, how to verify tracking numbers, and how SpeedXTracking.org differs from official SpeedX.",
          path: "/is-speedx-legit",
          datePublished: reviewed,
          dateModified: reviewed,
          keywords: ["is speedx legit", "speedx reviews", "speedx tracking reviews", "what is speedx"],
          articleSection: "SpeedX Trust",
          wordCount: 900
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={speakableSchema({
          path: "/is-speedx-legit",
          cssSelectors: [".answer-lead", "h1"]
        })}
      />

      <h1 className="text-3xl font-bold text-slate-900">Is SpeedX Legit?</h1>
      <p className="answer-lead mt-3 max-w-3xl text-lg font-medium text-slate-900">
        Yes—SpeedX is a legitimate last-mile delivery carrier used by online retailers. Verify with a real SPX/SPXCN tracking number from your seller, not random unsolicited links.
      </p>

      <section className="mt-6 section-card">
        <TrackingForm />
      </section>

      <AdSenseUnit />

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">How to verify a SpeedX shipment</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>Tracking number starts with SPX or SPXCN and matches the seller email.</li>
          <li>Scans progress through facility → transit → out for delivery → delivered.</li>
          <li>Official help is on support.speedx.io—not random phone numbers from social posts.</li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-brand-700">
          <Link href="/what-is-speedx" className="hover:underline">
            What is SpeedX?
          </Link>
          <Link href="/speedx-contact-support" className="hover:underline">
            SpeedX customer service
          </Link>
          <Link href="/speedx-tracking-number" className="hover:underline">
            SpeedX tracking number guide
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

      <SiteLinkHub currentPath="/is-speedx-legit" />
      <TrustedCitations variant="all" />
    </div>
  );
}
