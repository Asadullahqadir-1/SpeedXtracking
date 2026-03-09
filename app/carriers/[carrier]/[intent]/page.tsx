import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/nav/Breadcrumbs";
import { FreshnessNote } from "@/components/seo/FreshnessNote";
import { LinkClusters } from "@/components/seo/LinkClusters";
import { TrackingForm } from "@/components/tracking/TrackingForm";
import { carriers } from "@/lib/seo/carriers";
import { getCarrierBySlug } from "@/lib/seo/data";
import { getFreshnessDate } from "@/lib/seo/freshness";
import { buildAdaptiveClusters, getCarrierIntentClusters, getGlobalTroubleshootingCluster } from "@/lib/seo/internal-links";
import { getLongTailIntent, longTailIntentSlugs } from "@/lib/seo/longtail";
import { buildMetadata } from "@/lib/seo/metadata";

export const revalidate = 86400;

export async function generateStaticParams() {
  const params: Array<{ carrier: string; intent: string }> = [];

  for (const carrier of carriers) {
    for (const intent of longTailIntentSlugs) {
      params.push({
        carrier: carrier.slug,
        intent
      });
    }
  }

  return params;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ carrier: string; intent: string }>;
}) {
  const { carrier, intent } = await params;
  const currentCarrier = getCarrierBySlug(carrier);
  const currentIntent = getLongTailIntent(intent);

  if (!currentCarrier || !currentIntent) {
    return {};
  }

  const title = `${currentCarrier.carrierName} ${currentIntent.titleSuffix}: Track ${currentCarrier.carrierName} Shipment Updates`;
  const description = `${currentCarrier.carrierName} ${currentIntent.keywordSuffix} help page. ${currentIntent.descriptionSuffix}`;

  return buildMetadata({
    title,
    description,
    path: `/carriers/${carrier}/${intent}`,
    keywords: [
      `${currentCarrier.carrierName} ${currentIntent.keywordSuffix}`,
      `${currentCarrier.carrierName} tracking`,
      `track ${currentCarrier.carrierName} package`,
      `${currentCarrier.carrierName} status update`,
      `${currentCarrier.carrierName} delivery support`
    ]
  });
}

export default async function CarrierIntentPage({
  params
}: {
  params: Promise<{ carrier: string; intent: string }>;
}) {
  const { carrier, intent } = await params;
  const currentCarrier = getCarrierBySlug(carrier);
  const currentIntent = getLongTailIntent(intent);

  if (!currentCarrier || !currentIntent) {
    notFound();
  }

  const adaptiveClusters = buildAdaptiveClusters(
    [...getCarrierIntentClusters(currentCarrier.slug, currentCarrier.carrierName), getGlobalTroubleshootingCluster()],
    {
      pageKey: `carrier-intent:${currentCarrier.slug}:${currentIntent.slug}`,
      primaryHrefs: [
        `/carriers/${currentCarrier.slug}/${currentIntent.slug}`,
        `/carriers/${currentCarrier.slug}/status`,
        `/carriers/${currentCarrier.slug}/contact`,
        "/guides/delivered-not-received"
      ],
      maxLinksPerCluster: 4
    }
  );

  return (
    <div className="container-page py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Carriers", href: "/carriers" },
          { label: currentCarrier.carrierName, href: `/carriers/${currentCarrier.slug}` },
          { label: currentIntent.titleSuffix, href: `/carriers/${currentCarrier.slug}/${currentIntent.slug}` }
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold text-slate-900">
        {currentCarrier.carrierName} {currentIntent.titleSuffix}
      </h1>
      <p className="mt-2 max-w-3xl text-slate-700">
        This {currentCarrier.carrierName} {currentIntent.keywordSuffix} page provides actionable tracking steps, status explanations,
        and support guidance for users searching {currentCarrier.primaryKeyword.toLowerCase()} terms.
      </p>
      <FreshnessNote date={getFreshnessDate("carriersHub")} />

      <section className="mt-6 section-card">
        <h2 className="text-xl font-semibold">Track {currentCarrier.carrierName} Package</h2>
        <div className="mt-4">
          <TrackingForm defaultCarrier={currentCarrier.slug} compact />
        </div>
      </section>

      <section className="mt-6 section-card">
        <h2 className="text-xl font-semibold">{currentIntent.h2}</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>Confirm your tracking number format and carrier slug before search.</li>
          <li>Review scan timestamps in sequence to understand real movement.</li>
          <li>Use delivery estimate windows as guidance, not guaranteed times.</li>
          <li>Escalate to seller and carrier support when updates stall beyond 48 hours.</li>
        </ul>
      </section>

      <section className="mt-6 section-card">
        <h2 className="text-xl font-semibold">Related pages</h2>
        <div className="mt-3 grid gap-2 text-sm text-brand-700 md:grid-cols-2">
          <Link href={`/carriers/${currentCarrier.slug}`}>{currentCarrier.carrierName} tracking overview</Link>
          <Link href={`/carriers/${currentCarrier.slug}/package-tracking`}>{currentCarrier.carrierName} package tracking page</Link>
          <Link href={`/carriers/${currentCarrier.slug}/status`}>{currentCarrier.carrierName} status meanings</Link>
          <Link href={`/carriers/${currentCarrier.slug}/tracking-status`}>{currentCarrier.carrierName} tracking status page</Link>
          <Link href={`/carriers/${currentCarrier.slug}/delivery-time`}>{currentCarrier.carrierName} delivery timeline</Link>
          <Link href={`/carriers/${currentCarrier.slug}/delivery-time-estimate`}>{currentCarrier.carrierName} delivery estimate</Link>
          <Link href={`/carriers/${currentCarrier.slug}/contact`}>{currentCarrier.carrierName} support options</Link>
        </div>
      </section>

      <div className="mt-6">
        <LinkClusters clusters={adaptiveClusters} />
      </div>
    </div>
  );
}
