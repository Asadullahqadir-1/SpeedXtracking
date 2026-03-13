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
    title: `${current.carrierName} Tracking Status Meanings | ${current.carrierName} Status Guide`,
    description: `Understand ${current.carrierName} tracking statuses, including in transit, out for delivery, delivered, and exception messages.`,
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
      <p className="mt-2 text-slate-700">Understand what each shipment update means and what action to take next.</p>
      <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-slate-700">
        <li>Label Created: shipment details submitted, parcel may not be picked up yet.</li>
        <li>In Transit: moving between processing and destination facilities.</li>
        <li>Arrival at Destination Hub: package is near local delivery area.</li>
        <li>Out for Delivery: final delivery attempt is scheduled.</li>
        <li>Delivered: package marked as completed delivery.</li>
        <li>Exception: issue related to address, weather, customs, or operations.</li>
      </ul>
    </div>
  );
}
