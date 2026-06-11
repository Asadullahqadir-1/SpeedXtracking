import { buildMetadata } from "@/lib/seo/metadata";
import { LinkClusters } from "@/components/seo/LinkClusters";
import { TrackingForm } from "@/components/tracking/TrackingForm";
import { TrackingLookup } from "@/components/tracking/TrackingLookup";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, webPageSchema } from "@/lib/seo/schema";
import { globalFaqs } from "@/content/faqs";
import { buildAdaptiveClusters, getGlobalTroubleshootingCluster } from "@/lib/seo/internal-links";

export const metadata = buildMetadata({
  title: "Track SpeedX Package Now: Live Tracking Number Lookup And Delivery ETA",
  description:
    "Enter your SpeedX tracking number to check live package status, latest scan location, and estimated delivery date in seconds.",
  path: "/track-package",
  keywords: [
    "track SpeedX tracking number",
    "speed x tracking",
    "SpeedX package tracking",
    "SpeedX delivery status",
    "SpeedX ETA"
  ]
});

export default async function TrackPackagePage({
  searchParams
}: {
  searchParams: Promise<{ trackingNumber?: string; carrier?: string }>;
}) {
  const { trackingNumber = "", carrier = "speedx" } = await searchParams;
  const adaptiveClusters = buildAdaptiveClusters([getGlobalTroubleshootingCluster()], {
    pageKey: "track-package",
    primaryHrefs: ["/guides/package-not-updating", "/guides/how-to-track-packages"],
    maxLinksPerCluster: 4
  });

  return (
    <div className="container-page py-10">
      <JsonLd data={faqSchema(globalFaqs)} />
      <JsonLd
        data={
          webPageSchema({
            path: "/track-package",
            title: "Track SpeedX Tracking Number",
            description:
              "Enter your SpeedX tracking number to check live shipment status, latest location scan, delivery estimate, and delay troubleshooting steps."
          })
        }
      />
      <h1 className="text-3xl font-bold text-slate-900">Track Your SpeedX Package</h1>
      <p className="mt-2 text-slate-700">
        Check current SpeedX shipment status, scan timeline, and estimated delivery window. Use the lookup to confirm whether your package is still in a normal transit phase or if it has entered an exception that requires action.
      </p>
      <p className="mt-4 text-sm text-slate-700">
        If your tracking number does not return a result, verify the carrier assignment and wait up to 24 hours after shipment creation for the first carrier scan to appear.
      </p>

      <section className="mt-6 section-card">
        <TrackingForm defaultCarrier={carrier} initialTrackingNumber={trackingNumber} />
        {trackingNumber ? <TrackingLookup trackingNumber={trackingNumber} carrier={carrier} /> : null}
      </section>

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">If Your Package Is Delayed</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          <li>Verify that your tracking number is an official SpeedX format.</li>
          <li>Wait 12 to 24 hours if shipment recently entered transit.</li>
          <li>Check for customs, weather, or address exceptions.</li>
          <li>Contact seller first for marketplace purchases.</li>
          <li>Escalate to SpeedX support with tracking number and delivery ZIP.</li>
        </ol>
      </section>

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">How to use this page</h2>
        <p className="mt-3 text-sm text-slate-700">
          Enter your full SpeedX tracking number and review the latest event carefully. Focus on the shipment stage rather than the label alone; that helps you know when a delay is still normal and when to escalate.
        </p>
        <p className="mt-3 text-sm text-slate-700">
          Keep screenshots of the latest status and delivery promise before contacting the seller or carrier. That makes support requests faster and easier to resolve.
        </p>
      </section>

      <div className="mt-8">
        <LinkClusters clusters={adaptiveClusters} />
      </div>
    </div>
  );
}
