import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/nav/Breadcrumbs";
import { FreshnessNote } from "@/components/seo/FreshnessNote";
import { EditorialTrustBlock } from "@/components/seo/EditorialTrustBlock";
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

  const intentTitle =
    current.slug === "speedx"
      ? "SpeedX Tracking Guide: Status Meanings, Delivery ETA, And Support"
      : `${current.carrierName} Tracking Guide: Status, ETA, And Support`;

  const intentDescription =
    current.slug === "speedx"
      ? "Use this SpeedX tracking guide to check package status meanings, delivery timelines, and official support escalation options."
      : current.metaDescription;

  return buildMetadata({
    title: intentTitle,
    description: intentDescription,
    path: `/carriers/${current.slug}`,
    keywords: [
      current.primaryKeyword,
      `track ${current.carrierName} package`,
      `${current.carrierName} tracking status`,
      `${current.carrierName} delivery time`,
      `${current.carrierName} support`,
      `${current.carrierName} tracking help`,
      `${current.carrierName} delivery guide`
    ]
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
        `/carriers/${current.slug}`,
        `/carriers/${current.slug}/status`,
        `/carriers/${current.slug}/delivery-time`,
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
      <p className="mt-2 max-w-3xl text-slate-700">
        {current.metaDescription} Use this {current.primaryKeyword.toLowerCase()} page to check live events, understand scan timelines,
        and navigate common delivery exceptions quickly.
      </p>
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
        <h2 className="text-xl font-semibold">How to read the whole shipment journey</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-900">Pickup and first scan</h3>
            <p className="mt-2 text-sm text-slate-700">
              The first public event often appears after the seller hands the parcel to the carrier. If only a label exists, the shipment may still be waiting for pickup.
            </p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-900">Transit and facility scans</h3>
            <p className="mt-2 text-sm text-slate-700">
              Movement between hubs is usually normal. Fewer scans do not always mean the package is stalled; they often just reflect quiet linehaul travel.
            </p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-900">Destination handoff</h3>
            <p className="mt-2 text-sm text-slate-700">
              As the parcel reaches the local delivery area, status updates usually become more frequent. This is the point where out-for-delivery or exception scans appear.
            </p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-900">Delivery completion or delay</h3>
            <p className="mt-2 text-sm text-slate-700">
              Delivered scans should be checked against the address on file. If the parcel is missing, use the proof and delivery notes before contacting support.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-6 section-card">
        <h2 className="text-xl font-semibold">Common reasons for delays</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>Weekend or holiday processing slowdowns.</li>
          <li>Customs inspection or documentation review.</li>
          <li>Route-density surges in the local final-mile network.</li>
          <li>Missing apartment, suite, or gate access details.</li>
        </ul>
      </section>

      {current.slug === "speedx" ? (
        <section className="mt-6 section-card">
          <h2 className="text-xl font-semibold">Popular SpeedX Tracking Searches</h2>
          <p className="mt-2 text-sm text-slate-700">
            These pages target high-intent SpeedX tracking queries and help users troubleshoot delayed scans, delivery exceptions,
            and support escalation.
          </p>
          <div className="mt-3 grid gap-2 text-sm text-brand-700 md:grid-cols-2">
            <Link href="/carriers/speedx/status">SpeedX tracking status meanings</Link>
            <Link href="/carriers/speedx/delivery-time">SpeedX delivery time estimate</Link>
            <Link href="/carriers/speedx/contact">SpeedX tracking support contact</Link>
            <Link href="/carriers/speedx/shein">SpeedX Shein tracking help</Link>
            <Link href="/blog/speedx-tracking-not-updating">SpeedX tracking not updating fixes</Link>
            <Link href="/guides/package-not-updating">Tracking not updating checklist</Link>
          </div>
        </section>
      ) : null}

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
            { href: `/track-package`, label: `Track ${current.carrierName} shipment` },
            { href: "/guides/package-not-updating", label: "Tracking not updating guide" },
            { href: "/guides/delivered-not-received", label: "Delivered but not received checklist" }
          ]}
        />
      </div>

      <div className="mt-6">
        <LinkClusters clusters={adaptiveClusters} />
      </div>

      <section className="mt-6 section-card">
        <h2 className="text-xl font-semibold">How to get the best support response</h2>
        <p className="mt-3 text-sm text-slate-700">
          Include your tracking number, order ID, destination ZIP, and the last visible scan when you contact support. A short timeline and a single clear request usually gets a faster answer than a long message.
        </p>
        <p className="mt-3 text-sm text-slate-700">
          If the parcel is a marketplace order, start with the seller because they can confirm fulfillment, open the first case, and coordinate with the carrier if needed.
        </p>
      </section>

      <EditorialTrustBlock
        reviewedDate={getFreshnessDate("carriersHub")}
        notes="Carrier pages are reviewed for status terminology clarity, escalation guidance, and official support path accuracy."
        sources={[
          { label: "SpeedX official website", href: "https://speedx.io/" },
          { label: "SpeedX support center", href: "https://support.speedx.io/hc/en-us" }
        ]}
      />

      <p className="mt-6 text-xs text-slate-500">
        Independent information page. For official shipment records, always verify on the carrier&apos;s official tracking system.
      </p>
      <div className="mt-4 text-sm text-brand-700">
        <Link href="/track-package">Track another package</Link>
      </div>
    </div>
  );
}
