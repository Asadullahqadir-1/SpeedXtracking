import { buildMetadata } from "@/lib/seo/metadata";
import { AdSenseUnit } from "@/components/ads/AdSenseUnit";
import { LinkClusters } from "@/components/seo/LinkClusters";
import { TrackingForm } from "@/components/tracking/TrackingForm";
import { TrackingLookup } from "@/components/tracking/TrackingLookup";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, webPageSchema } from "@/lib/seo/schema";
import { buildAdaptiveClusters, getGlobalTroubleshootingCluster } from "@/lib/seo/internal-links";
import Link from "next/link";

const trackFaqs = [
  {
    question: "How do I use SpeedX tracking?",
    answer:
      "Paste your SpeedX, SPX, or SPXCN tracking number into the free tracker above. You will see the latest status, scan history, and delivery progress when carrier data is available."
  },
  {
    question: "What does SpeedX out for delivery mean?",
    answer:
      "Out for delivery means your package is on a local route for final delivery, usually the same day. Traffic, route order, or access issues can push the drop to later in the day or the next attempt."
  },
  {
    question: "SpeedX says out for delivery but not delivered. What should I do?",
    answer:
      "Wait until the end of the local delivery day, check porch, locker, and neighbors, then recheck tracking the next morning. If still unchanged, contact the seller with screenshots before escalating to carrier support."
  },
  {
    question: "How late does SpeedX deliver?",
    answer:
      "SpeedX can deliver into the evening on some routes. There is no single stop time for every address—use your out-for-delivery scan and seller ETA as the best guide."
  },
  {
    question: "What is SPXCN tracking?",
    answer:
      "SPXCN is a common SpeedX-linked cross-border tracking format. Updates may appear in batches during export, customs, and final-mile handoff."
  },
  {
    question: "Why is my SpeedX tracking not updating?",
    answer:
      "Scan gaps of 24 to 48 hours are common during linehaul and customs. Recheck after that window, confirm the number is complete, then contact the seller if the ETA has passed."
  }
];

export const metadata = buildMetadata({
  title: "SpeedX Tracking — Free Package Tracker",
  description:
    "Free SpeedX tracking lookup for SPX and SPXCN numbers. Check out for delivery status, ETA, and what to do if your package is delayed.",
  path: "/track-package"
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
      <JsonLd data={faqSchema(trackFaqs)} />
      <JsonLd
        data={
          webPageSchema({
            path: "/track-package",
            title: "SpeedX Tracking — Free Package Tracker",
            description:
              "Free SpeedX tracking number lookup for shipment status, out for delivery updates, SPXCN numbers, and delivery ETA help."
          })
        }
      />
      <h1 className="text-3xl font-bold text-slate-900">SpeedX Tracking — Free Package Tracker</h1>
      <p className="mt-2 text-slate-700">
        Enter your SpeedX tracking number to check current status, scan timeline, and estimated delivery. Works with SPX, SPXCN, and Speed X live tracking numbers from Shein and other stores.
      </p>
      <p className="mt-4 text-sm text-slate-700">
        If nothing appears yet, confirm the full tracking code and wait 24 to 48 hours after the label is created for the first carrier scan.
      </p>

      <section className="mt-6 section-card">
        <TrackingForm defaultCarrier={carrier} initialTrackingNumber={trackingNumber} />
        {trackingNumber ? <TrackingLookup trackingNumber={trackingNumber} carrier={carrier} /> : null}
      </section>

      <AdSenseUnit />

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">If Your Package Is Delayed</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          <li>Verify that your tracking number is a full SpeedX / SPX / SPXCN code.</li>
          <li>Wait 24 to 48 hours if the shipment recently entered transit or was just labeled.</li>
          <li>Check for customs, weather, or address exceptions.</li>
          <li>Contact seller first for marketplace purchases.</li>
          <li>Escalate to SpeedX support with tracking number and delivery ZIP.</li>
        </ol>
      </section>

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">SpeedX out for delivery — what it means</h2>
        <p className="mt-3 text-sm text-slate-700">
          When SpeedX tracking shows <strong>out for delivery</strong>, the parcel is on a local driver route. Most packages arrive the same day, but route overflow can leave an out for delivery status overnight. If SpeedX is out for delivery but not delivered by the next morning, save screenshots and contact the seller.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-brand-700">
          <Link href="/blog/speedx-out-for-delivery-but-not-delivered" className="hover:underline">
            Out for delivery but not delivered
          </Link>
          <Link href="/carriers/speedx/status" className="hover:underline">
            All SpeedX status meanings
          </Link>
          <Link href="/guides/speedx-delivery-hours" className="hover:underline">
            How late does SpeedX deliver?
          </Link>
        </div>
      </section>

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">SPXCN and Speed X tracking formats</h2>
        <p className="mt-3 text-sm text-slate-700">
          SPXCN numbers are common on cross-border SpeedX shipments. Paste the full code without spaces. Batch updates during customs are normal; a quiet 24–48 hour window does not always mean the package is lost.
        </p>
        <Link href="/guides/spxcn-tracking-number-meaning" className="mt-3 inline-block text-sm font-semibold text-brand-700 hover:underline">
          SPXCN tracking number meaning →
        </Link>
      </section>

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">Frequently asked questions</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {trackFaqs.map((faq) => (
            <article key={faq.question} className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">{faq.question}</h3>
              <p className="mt-2 text-sm text-slate-700">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-8">
        <LinkClusters clusters={adaptiveClusters} />
      </div>
    </div>
  );
}
