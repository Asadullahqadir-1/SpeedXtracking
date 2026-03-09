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
    title: `${current.carrierName} Delivery Time | Domestic and International ETA`,
    description: `Check estimated ${current.carrierName} delivery times for domestic and international shipments and learn what causes delays.`,
    path: `/carriers/${carrier}/delivery-time`
  });
}

export default async function CarrierDeliveryTimePage({ params }: { params: Promise<{ carrier: string }> }) {
  const { carrier } = await params;
  const current = getCarrierBySlug(carrier);

  if (!current) {
    notFound();
  }

  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold">{current.carrierName} Delivery Time Estimates</h1>
      <p className="mt-2 text-slate-700">Realistic delivery windows vary by route distance, customs, and final-mile handoff.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <article className="section-card">
          <h2 className="text-xl font-semibold">Domestic Delivery</h2>
          <p className="mt-2 text-slate-700">Typical window: {current.domesticEta}</p>
        </article>
        <article className="section-card">
          <h2 className="text-xl font-semibold">International Delivery</h2>
          <p className="mt-2 text-slate-700">Typical window: {current.internationalEta}</p>
        </article>
      </div>
    </div>
  );
}
