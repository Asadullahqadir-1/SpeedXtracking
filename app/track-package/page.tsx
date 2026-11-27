import { buildMetadata } from "@/lib/seo/metadata";
import { AdSenseUnit } from "@/components/ads/AdSenseUnit";
import { LinkClusters } from "@/components/seo/LinkClusters";
import { TrackingForm } from "@/components/tracking/TrackingForm";
import { TrackingLookup } from "@/components/tracking/TrackingLookup";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, webPageSchema, breadcrumbSchema, trackingAppSchema } from "@/lib/seo/schema";
import { buildAdaptiveClusters, getGlobalTroubleshootingCluster } from "@/lib/seo/internal-links";
import { siteConfig } from "@/lib/seo/metadata";
import { SiteLinkHub } from "@/components/seo/SiteLinkHub";
import { PageTrail } from "@/components/nav/PageTrail";
import { TrustedCitations } from "@/components/seo/TrustedCitations";
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
  },
  {
    question: "What should I do if this SpeedX lookup is slow or fails?",
    answer:
      "Confirm the full tracking number, wait a moment, then try the official SpeedX tracker at tracking.speedx.io. A newly created label may not be recognized for 24-48 hours. This site is independent and is not the SpeedX carrier."
  }
];

export const metadata = buildMetadata({
  title: "Free SpeedX Tracker — Paste SPX/SPXCN Now",
  description:
    "Paste your SpeedX SPX or SPXCN number for live status and scan history. Free independent lookup—if it fails, also try tracking.speedx.io.",
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
      <JsonLd data={trackingAppSchema()} />
      <JsonLd
        data={
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Track Package", url: `${siteConfig.url}/track-package` }
          ])
        }
      />
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
      <PageTrail
        items={[
          { name: "Home", path: "/" },
          { name: "Track Package", path: "/track-package" }
        ]}
        includeSchema={false}
      />
      <h1 className="text-3xl font-bold text-slate-900">SpeedX Tracking Number — Track Package Free</h1>
      <p className="mt-2 text-slate-700">
        International SpeedX package tracking for SPX and SPXCN numbers. Check delivery status, scan timeline, and ETA for Shein and other store orders worldwide.
      </p>
      <p className="mt-4 text-sm text-slate-700">
        If nothing appears yet, confirm the full tracking code and wait 24 to 48 hours after the label is created for the first carrier scan. If this lookup is slow or fails, use the{" "}
        <a href="https://tracking.speedx.io/" className="font-semibold text-brand-700 hover:underline" target="_blank" rel="noopener noreferrer">
          official SpeedX tracker at tracking.speedx.io
        </a>
        . This site is an independent guide, not the SpeedX carrier.
      </p>

      <section className="mt-6 section-card">
        <TrackingForm defaultCarrier={carrier} initialTrackingNumber={trackingNumber} />
        {trackingNumber ? <TrackingLookup trackingNumber={trackingNumber} carrier={carrier} /> : null}
      </section>

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">What to do next</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          <li>Paste the full SpeedX, SPX, or SPXCN number in the form above—no spaces, and not the marketplace order ID.</li>
          <li>
            If the lookup stays slow or returns no result, open the{" "}
            <a href="https://tracking.speedx.io/" className="font-semibold text-brand-700 hover:underline" target="_blank" rel="noopener noreferrer">
              official SpeedX tracker
            </a>{" "}
            and paste the same number there. The official tracker may also show a proof-of-delivery photo after delivery.
          </li>
          <li>
            If the number is invalid or not found, follow the{" "}
            <Link href="/blog/speedx-tracking-number-not-found" className="font-semibold text-brand-700 hover:underline">
              tracking number not working checklist
            </Link>
            .
          </li>
          <li>
            Once a status appears, read the{" "}
            <Link href="/carriers/speedx/status" className="font-semibold text-brand-700 hover:underline">
              SpeedX status meanings
            </Link>{" "}
            and the matching next-step guide.
          </li>
          <li>Wait 24 to 48 hours after a new label or a long-haul scan gap before opening a support ticket, unless tracking already shows an exception.</li>
        </ol>
      </section>

      <AdSenseUnit />

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">SpeedX topic clusters</h2>
        <p className="mt-3 text-sm text-slate-700">
          Jump into the pillar hubs built around your highest-impression searches.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-brand-700">
          <Link href="/topics/out-for-delivery" className="hover:underline">
            Out for delivery hub
          </Link>
          <Link href="/topics/delivery-hours" className="hover:underline">
            How late does SpeedX deliver?
          </Link>
          <Link href="/topics/speedx-tracking" className="hover:underline">
            SpeedX tracking & SPXCN
          </Link>
        </div>
      </section>

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
          <Link href="/speedx-out-for-delivery" className="hover:underline">
            SpeedX out for delivery meaning
          </Link>
          <Link href="/speedx-package-not-delivered" className="hover:underline">
            SpeedX package not delivered
          </Link>
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
        <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold text-brand-700">
          <Link href="/guides/spxcn-tracking-number-meaning" className="hover:underline">
            SPXCN tracking number meaning
          </Link>
          <Link href="/is-speedx-legit" className="hover:underline">
            Is SpeedX legit?
          </Link>
          <Link href="/speedx-shipping" className="hover:underline">
            SpeedX shipping guide
          </Link>
        </div>
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

      <SiteLinkHub currentPath="/track-package" title="Related SpeedXTracking pages" />
      <TrustedCitations variant="all" />
    </div>
  );
}
