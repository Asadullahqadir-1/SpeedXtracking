import { buildMetadata } from "@/lib/seo/metadata";
import { LinkClusters } from "@/components/seo/LinkClusters";
import { TrackingForm } from "@/components/tracking/TrackingForm";
import { TrackingLookup } from "@/components/tracking/TrackingLookup";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/schema";
import { globalFaqs } from "@/content/faqs";
import { buildAdaptiveClusters, getGlobalTroubleshootingCluster } from "@/lib/seo/internal-links";

export const metadata = buildMetadata({
  title: "Track Package Now | Live Shipment Status, ETA & Tracking History",
  description:
    "Enter your tracking number to check package location, status timeline, delivery estimate, and troubleshooting tips for delayed shipments.",
  path: "/track-package"
});

export default async function TrackPackagePage({
  searchParams
}: {
  searchParams: Promise<{ trackingNumber?: string; carrier?: string }>;
}) {
  const { trackingNumber = "", carrier = "auto" } = await searchParams;
  const adaptiveClusters = buildAdaptiveClusters([getGlobalTroubleshootingCluster()], {
    pageKey: "track-package",
    primaryHrefs: ["/guides/package-not-updating", "/guides/how-to-track-packages"],
    maxLinksPerCluster: 4
  });

  return (
    <div className="container-page py-10">
      <JsonLd data={faqSchema(globalFaqs)} />
      <h1 className="text-3xl font-bold text-slate-900">Track Your Package</h1>
      <p className="mt-2 text-slate-700">Check current shipment status, scan timeline, and estimated delivery window.</p>

      <section className="mt-6 section-card">
        <TrackingForm defaultCarrier={carrier} />
        {trackingNumber ? <TrackingLookup trackingNumber={trackingNumber} carrier={carrier} /> : null}
      </section>

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">If Your Package Is Delayed</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          <li>Verify tracking number format and carrier selection.</li>
          <li>Wait 12 to 24 hours if shipment recently entered transit.</li>
          <li>Check for customs, weather, or address exceptions.</li>
          <li>Contact seller first for marketplace purchases.</li>
          <li>Escalate to carrier support with tracking number and delivery ZIP.</li>
        </ol>
      </section>

      <div className="mt-8">
        <LinkClusters clusters={adaptiveClusters} />
      </div>
    </div>
  );
}
