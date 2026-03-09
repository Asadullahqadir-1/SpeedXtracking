import Link from "next/link";
import { FreshnessNote } from "@/components/seo/FreshnessNote";
import { TrackingForm } from "@/components/tracking/TrackingForm";
import { carriers, topCarrierSlugs } from "@/lib/seo/carriers";
import { getFreshnessDate } from "@/lib/seo/freshness";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, websiteSchema } from "@/lib/seo/schema";
import { globalFaqs } from "@/content/faqs";

export const revalidate = 86400;

export const metadata = buildMetadata({
  title: "Track Packages Worldwide | Real-Time Parcel Tracking & Delivery Updates",
  description:
    "Track packages from major couriers in one place. Get shipment status, delivery estimates, status explanations, and tracking help guides.",
  path: "/"
});

const popularCarriers = carriers.filter((carrier) => topCarrierSlugs.includes(carrier.slug));

export default function HomePage() {
  return (
    <div className="container-page py-10">
      <JsonLd data={websiteSchema()} />
      <JsonLd data={faqSchema(globalFaqs)} />

      <section className="rounded-2xl bg-brand-50 p-8">
        <h1 className="text-3xl font-bold text-slate-900">Track Any Package in Seconds</h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          Use one search to check your shipment status, delivery timeline, and next expected update for SpeedX and other major carriers.
        </p>
        <FreshnessNote date={getFreshnessDate("homepage")} />
        <div className="mt-6">
          <TrackingForm />
        </div>
      </section>

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">Popular Carriers</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {popularCarriers.map((carrier) => (
            <Link key={carrier.slug} href={`/carriers/${carrier.slug}`} className="rounded-lg border border-slate-200 p-4 hover:border-brand-500">
              <h3 className="font-semibold text-slate-900">{carrier.carrierName} Tracking</h3>
              <p className="mt-1 text-sm text-slate-600">{carrier.domesticEta} domestic • {carrier.internationalEta} international</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="section-card">
          <h2 className="text-xl font-semibold">Recent Tracking Results</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="rounded-lg border border-slate-200 p-3">SPX2GE0567••••• — Out for Delivery — New York, NY</li>
            <li className="rounded-lg border border-slate-200 p-3">1Z84W42••••••• — In Transit — Columbus, OH</li>
            <li className="rounded-lg border border-slate-200 p-3">9400 11••••••• — Delivered — Phoenix, AZ</li>
          </ul>
        </div>

        <div className="section-card">
          <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
          <div className="mt-4 space-y-4">
            {globalFaqs.slice(0, 4).map((faq) => (
              <article key={faq.question}>
                <h3 className="font-medium text-slate-900">{faq.question}</h3>
                <p className="mt-1 text-sm text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
          <Link href="/faq" className="mt-4 inline-block text-sm font-semibold text-brand-700 hover:underline">
            View all FAQs
          </Link>
        </div>
      </section>
    </div>
  );
}
