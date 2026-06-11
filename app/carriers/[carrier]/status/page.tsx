import { notFound } from "next/navigation";
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
    title: `${current.carrierName} Status Meanings: In Transit, Out For Delivery, Exception`,
    description: `Learn what each ${current.carrierName} tracking status means and what action to take for delayed, exception, or delivered scans.`,
    path: `/carriers/${carrier}/status`,
    keywords: [
      `${current.carrierName} tracking status`,
      `${current.carrierName} in transit meaning`,
      `${current.carrierName} out for delivery`,
      `${current.carrierName} tracking number status`
    ]
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
      <h1 className="text-3xl font-bold">{current.carrierName} Tracking Status Meanings</h1>
      <p className="mt-2 text-slate-700">
        Understand what each shipment update means and what action to take next. This page helps you read current tracking events more accurately and avoid premature escalation.
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
    </div>
  );
}
