import { notFound } from "next/navigation";
import Link from "next/link";
import { carriers } from "@/lib/seo/carriers";
import { getCarrierBySlug } from "@/lib/seo/data";
import { buildMetadata, siteConfig } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo/schema";

export async function generateStaticParams() {
  return carriers.map((carrier) => ({ carrier: carrier.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ carrier: string }> }) {
  const { carrier } = await params;
  const current = getCarrierBySlug(carrier);

  if (!current) return {};

  return buildMetadata({
    title:
      current.slug === "speedx"
        ? "SpeedX Out for Delivery Meaning & Status Guide"
        : `${current.carrierName} Status Meanings Explained`,
    description:
      current.slug === "speedx"
        ? "What SpeedX out for delivery means, exception codes, in transit pauses, and what to do if your package is not delivered."
        : `Learn what each ${current.carrierName} tracking status means and what to do for delayed, exception, or delivered scans.`,
    path: `/carriers/${carrier}/status`
  });
}

export default async function CarrierStatusPage({ params }: { params: Promise<{ carrier: string }> }) {
  const { carrier } = await params;
  const current = getCarrierBySlug(carrier);

  if (!current) {
    notFound();
  }

  return (
    <div className="container-page py-10">
      <JsonLd
        data={
          webPageSchema({
            path: `/carriers/${current.slug}/status`,
            title: `${current.carrierName} Tracking Status Meanings`,
            description: `Understand ${current.carrierName} tracking statuses, including in transit, out for delivery, delivered, and exception messages.`
          })
        }
      />
      <JsonLd
        data={
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Carriers", url: `${siteConfig.url}/carriers` },
            { name: current.carrierName, url: `${siteConfig.url}/carriers/${current.slug}` },
            { name: "Status", url: `${siteConfig.url}/carriers/${current.slug}/status` }
          ])
        }
      />
      <JsonLd
        data={
          faqSchema([
            {
              question: `What does ${current.carrierName} in transit mean?`,
              answer: "It means the package is moving through carrier facilities and has not yet reached the final delivery driver."
            },
            {
              question: `What should I do if ${current.carrierName} status stops updating?`,
              answer: "Wait 24-48 hours for delayed scan posts, then contact the seller and carrier support if no new events appear."
            }
          ])
        }
      />
      <h1 className="text-3xl font-bold">
        {current.slug === "speedx" ? "SpeedX Out for Delivery & Tracking Status Meanings" : `${current.carrierName} Tracking Status Meanings`}
      </h1>
      <p className="mt-2 text-slate-700">
        {current.slug === "speedx"
          ? "Understand SpeedX out for delivery, in transit, exception, and delivered statuses—and what to do when a package is out for delivery but not delivered."
          : "Understand what each shipment update means and what action to take next. This page helps you read current tracking events more accurately and avoid premature escalation."}
      </p>
      <p className="mt-4 text-sm text-slate-700">
        If you see a pause between scans, compare the current event to the expected route stage and wait the normal processing window before opening a support request.
      </p>
      <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-slate-700">
        <li>Label Created: shipment details submitted, parcel may not be picked up yet.</li>
        <li>In Transit: moving between processing and destination facilities.</li>
        <li>Arrival at Destination Hub: package is near local delivery area.</li>
        <li>Out for Delivery: final delivery attempt is scheduled.</li>
        <li>Delivered: package marked as completed delivery.</li>
        <li>Exception: issue related to address, weather, customs, or operations.</li>
      </ul>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">What to do if status stalls</h2>
        <p className="mt-3 text-sm text-slate-700">
          If the status stops updating for more than 48 hours on a domestic route or 72 hours on an international route, document the latest scan, confirm the delivery address, and contact support with a concise timeline.
        </p>
      </section>

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">When each scan usually appears</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-900">Label Created</h3>
            <p className="mt-2 text-sm text-slate-700">
              The shipping label exists, but the parcel may still be waiting on pickup or first scan.
            </p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-900">In Transit</h3>
            <p className="mt-2 text-sm text-slate-700">
              The package is moving through the network. Short scan gaps are normal while it travels between hubs.
            </p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-900">Out For Delivery</h3>
            <p className="mt-2 text-sm text-slate-700">
              The parcel is on a local route and should arrive the same day unless traffic, route density, or access issues delay it.
            </p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-900">Exception</h3>
            <p className="mt-2 text-sm text-slate-700">
              Something needs review, such as a bad address, customs hold, failed attempt, or operational delay. This is the best time to contact support.
            </p>
          </article>
        </div>
      </section>

      {current.slug === "speedx" ? (
        <section className="mt-8 section-card">
          <h2 className="text-xl font-semibold">SpeedX out for delivery but not delivered</h2>
          <p className="mt-3 text-sm text-slate-700">
            If SpeedX tracking says out for delivery but the package does not arrive, wait until the end of the local delivery day, check alternate drop points, then recheck the next morning. Route overflow and access issues commonly push an attempt to the next day.
          </p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold text-brand-700">
            <Link href="/blog/speedx-out-for-delivery-but-not-delivered" className="hover:underline">
              Full out-for-delivery checklist
            </Link>
            <Link href="/guides/speedx-delivery-hours" className="hover:underline">
              How late does SpeedX deliver?
            </Link>
            <Link href="/track-package" className="hover:underline">
              Track SpeedX package free
            </Link>
          </div>
        </section>
      ) : null}

      {current.slug === "speedx" ? (
        <section className="mt-8 section-card">
          <h2 className="text-xl font-semibold">SpeedX delivery hours and out-for-delivery timing</h2>
          <p className="mt-3 text-sm text-slate-700">
            An out-for-delivery scan usually means the package is intended for delivery that day, but the exact delivery time and latest stop vary by route load, traffic, weather, and local operations.
          </p>
          <Link href="/guides/speedx-delivery-hours" className="mt-3 inline-block text-sm font-semibold text-brand-700 hover:underline">
            Read the SpeedX delivery hours guide
          </Link>
        </section>
      ) : null}
    </div>
  );
}
