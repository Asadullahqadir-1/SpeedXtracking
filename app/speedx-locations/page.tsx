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
    question: "Does SpeedX have public drop-off locations?",
    answer:
      "SpeedX is primarily a last-mile delivery network for retailer shipments. Most shoppers receive packages at home and cannot pick up from a public SpeedX counter like a post office."
  },
  {
    question: "Where is my SpeedX delivery location?",
    answer:
      "Your delivery location is the address on the shipping label. Tracking shows facility hubs near that address before out for delivery—not a customer-facing storefront map."
  },
  {
    question: "Can I change my SpeedX delivery location?",
    answer:
      "Address changes mid-transit are limited. Contact the seller or official SpeedX support as soon as possible with your tracking number and corrected address details."
  },
  {
    question: "What does arrival at a SpeedX facility mean?",
    answer:
      "It means the parcel reached a local or regional hub that serves your area. Out for delivery usually follows within one to a few business days."
  },
  {
    question: "Are SpeedX locations the same worldwide?",
    answer:
      "No. Hub coverage varies by country and metro density. Use tracking scans for your specific parcel rather than a single global map."
  }
];

const reviewed = "2026-11-10";

export const metadata = buildMetadata({
  title: "SpeedX Locations — Hubs, Delivery & Drop-Off",
  description:
    "SpeedX locations explained: delivery address vs facility hubs, drop-off limits, and what “arrived at facility” means for your SPX tracking.",
  path: "/speedx-locations"
});

export default function SpeedXLocationsPage() {
  return (
    <div className="container-page py-10">
      <JsonLd
        data={webPageSchema({
          path: "/speedx-locations",
          title: "SpeedX Locations",
          description: "How SpeedX hubs and delivery locations work for tracked packages."
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "SpeedX Locations", url: `${siteConfig.url}/speedx-locations` }
        ])}
      />
      <JsonLd
        data={articleSchema({
          title: "SpeedX Locations — Hubs, Delivery & Drop-Off",
          description: "Understand SpeedX facility locations, delivery addresses, and drop-off options.",
          path: "/speedx-locations",
          datePublished: reviewed,
          dateModified: reviewed,
          keywords: [
            "speedx locations",
            "speedx delivery location",
            "speedx drop off locations",
            "speedx locations near me",
            "speedx facility"
          ],
          articleSection: "SpeedX Logistics",
          wordCount: 950
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={speakableSchema({
          path: "/speedx-locations",
          cssSelectors: [".answer-lead", "h1"]
        })}
      />

      <h1 className="text-3xl font-bold text-slate-900">SpeedX Locations</h1>
      <p className="answer-lead mt-3 max-w-3xl text-lg font-medium text-slate-900">
        SpeedX “locations” in tracking usually mean sorting hubs and your delivery address—not retail drop-off shops. Track your SPX number to see which facility last scanned your parcel.
      </p>

      <section className="mt-6 section-card">
        <TrackingForm />
      </section>

      <AdSenseUnit />

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">Facility vs delivery location</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>
            <strong>Facility / hub:</strong> where SpeedX sorts and stages parcels (shown in scan history).
          </li>
          <li>
            <strong>Delivery location:</strong> the destination address on the label.
          </li>
          <li>
            <strong>Drop-off:</strong> generally not offered as public customer pickup for marketplace parcels.
          </li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-brand-700">
          <Link href="/blog/speedx-arrived-at-facility-meaning" className="hover:underline">
            Destination facility meaning
          </Link>
          <Link href="/speedx-out-for-delivery" className="hover:underline">
            Out for delivery meaning
          </Link>
          <Link href="/speedx-shipping" className="hover:underline">
            SpeedX shipping guide
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
      <SiteLinkHub currentPath="/speedx-locations" />
      <TrustedCitations variant="all" />
    </div>
  );
}
