import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/nav/Breadcrumbs";
import { FreshnessNote } from "@/components/seo/FreshnessNote";
import { LinkClusters } from "@/components/seo/LinkClusters";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { TrackingForm } from "@/components/tracking/TrackingForm";
import { carriers } from "@/lib/seo/carriers";
import { getCarrierBySlug } from "@/lib/seo/data";
import { getFreshnessDate } from "@/lib/seo/freshness";
import { buildAdaptiveClusters, getCarrierIntentClusters, getGlobalTroubleshootingCluster } from "@/lib/seo/internal-links";
import { buildMetadata, siteConfig } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/JsonLd";

export const revalidate = 86400;

export async function generateStaticParams() {
  return carriers.map((carrier) => ({ carrier: carrier.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ carrier: string }> }) {
  const { carrier } = await params;
  const current = getCarrierBySlug(carrier);

  if (!current) {
    return {};
  }

  return buildMetadata({
    title: current.seoTitle,
    description: current.metaDescription,
    path: `/carriers/${current.slug}`
  });
}

export default async function CarrierPage({ params }: { params: Promise<{ carrier: string }> }) {
  const { carrier } = await params;
  const current = getCarrierBySlug(carrier);

  if (!current) {
    notFound();
  }

  const carrierFaqs = [
    {
      question: `How do I track my ${current.carrierName} shipment?`,
      answer: `Enter your tracking number on this page and review the timeline and delivery status checkpoints.`
    },
    {
      question: `${current.carrierName} tracking not updating. What should I do?`,
      answer: "Wait 12 to 24 hours for scan delays, then contact seller and carrier support with tracking details."
    },
    {
      question: `How long does ${current.carrierName} delivery take?`,
      answer: `Typical delivery windows are ${current.domesticEta} for domestic routes and ${current.internationalEta} for international routes.`
    }
  ];

  const adaptiveClusters = buildAdaptiveClusters(
    [...getCarrierIntentClusters(current.slug, current.carrierName), getGlobalTroubleshootingCluster()],
    {
      pageKey: `carrier:${current.slug}`,
      primaryHrefs: [
        `/carriers/${current.slug}/package-tracking`,
        `/carriers/${current.slug}/tracking-status`,
        `/carriers/${current.slug}/delivery-time-estimate`,
        "/guides/package-not-updating"
      ],
      maxLinksPerCluster: 5
    }
  );

  return (
    <div className="container-page py-10">
      <JsonLd
        data={
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Carriers", url: `${siteConfig.url}/carriers` },
            { name: `${current.carrierName} Tracking`, url: `${siteConfig.url}/carriers/${current.slug}` }
          ])
        }
      />
      <JsonLd data={faqSchema(carrierFaqs)} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Carriers", href: "/carriers" },
          { label: current.carrierName, href: `/carriers/${current.slug}` }
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold text-slate-900">{current.h1}</h1>
      <p className="mt-2 max-w-3xl text-slate-700">{current.metaDescription}</p>
      <FreshnessNote date={getFreshnessDate("carriersHub")} />

      <section className="mt-6 section-card">
        <h2 className="text-xl font-semibold">Track {current.carrierName} Package</h2>
        <p className="mt-2 text-sm text-slate-600">Use your tracking number to view latest scans and expected delivery updates.</p>
        <div className="mt-4">
          <TrackingForm defaultCarrier={current.slug} compact />
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="section-card">
          <h2 className="text-xl font-semibold">Delivery Time Estimates</h2>
          <p className="mt-2 text-sm text-slate-700">Domestic: {current.domesticEta}</p>
          <p className="mt-1 text-sm text-slate-700">International: {current.internationalEta}</p>
          <p className="mt-2 text-sm text-slate-600">
            Delivery timelines can vary due to transit handoffs, customs checks, weather, and peak-season volume.
          </p>
        </div>

        <div className="section-card">
          <h2 className="text-xl font-semibold">Tracking Statuses Explained</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
            <li>Label Created: Shipment information submitted.</li>
            <li>In Transit: Package moving through sorting network.</li>
            <li>Out for Delivery: Package with local driver.</li>
            <li>Delivered: Delivery scan completed.</li>
            <li>Exception: Delay from address, customs, or operations.</li>
          </ul>
        </div>
      </section>

      <section className="mt-6 section-card">
        <h2 className="text-xl font-semibold">Common Marketplace Routes</h2>
        <p className="mt-2 text-sm text-slate-700">{current.marketplaces.join(", ")} orders often involve multi-carrier handoffs before final delivery.</p>
      </section>

      <section className="mt-6 section-card">
        <h2 className="text-xl font-semibold">Support and Contact</h2>
        <p className="mt-2 text-sm text-slate-700">Use official support channels and include tracking number, destination ZIP, and order ID.</p>
        {current.supportUrl ? (
          <p className="mt-1 text-sm text-brand-700">
            <a href={current.supportUrl} target="_blank" rel="noreferrer">
              Visit {current.carrierName} support
            </a>
          </p>
        ) : null}
        {current.supportEmail ? <p className="mt-1 text-sm text-slate-700">Email: {current.supportEmail}</p> : null}
      </section>

      <section className="mt-6 section-card">
        <h2 className="text-xl font-semibold">FAQs</h2>
        <div className="mt-3 space-y-4">
          {carrierFaqs.map((faq) => (
            <article key={faq.question}>
              <h3 className="font-medium text-slate-900">{faq.question}</h3>
              <p className="text-sm text-slate-700">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-6">
        <RelatedLinks
          title="Explore more"
          links={[
            { href: `/carriers/${current.slug}/status`, label: `${current.carrierName} tracking status meanings` },
            { href: `/carriers/${current.slug}/delivery-time`, label: `${current.carrierName} delivery time guide` },
            { href: `/carriers/${current.slug}/contact`, label: `${current.carrierName} support options` },
            { href: `/carriers/${current.slug}/shein`, label: `${current.carrierName} Shein tracking help` },
            { href: `/carriers/${current.slug}/package-tracking`, label: `${current.carrierName} package tracking` },
            { href: `/carriers/${current.slug}/track-shipment`, label: `Track ${current.carrierName} shipment` },
            { href: "/guides/package-not-updating", label: "Tracking not updating guide" },
            { href: "/guides/delivered-not-received", label: "Delivered but not received checklist" }
          ]}
        />
      </div>

      <div className="mt-6">
        <LinkClusters clusters={adaptiveClusters} />
      </div>

      <p className="mt-6 text-xs text-slate-500">
        Independent information page. For official shipment records, always verify on the carrier&apos;s official tracking system.
      </p>
      <div className="mt-4 text-sm text-brand-700">
        <Link href="/track-package">Track another package</Link>
      </div>
    </div>
  );
}
