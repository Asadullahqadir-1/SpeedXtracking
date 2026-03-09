import { notFound } from "next/navigation";
import { carriers } from "@/lib/seo/carriers";
import { getCarrierBySlug } from "@/lib/seo/data";
import { buildMetadata } from "@/lib/seo/metadata";

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
