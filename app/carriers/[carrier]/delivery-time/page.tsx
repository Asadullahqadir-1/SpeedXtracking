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
    title: `${current.carrierName} Delivery Time Guide: Domestic Vs International ETA`,
    description: `Check typical ${current.carrierName} delivery times by route type and see why customs, weather, and handoffs can delay arrival.`,
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
      <p className="mt-2 text-slate-700">
        Realistic delivery windows vary by route distance, customs, and final-mile handoff. Use the estimates below as a general guide, then allow extra time for customs, weather, and carrier processing.
      </p>
      <p className="mt-3 text-sm text-slate-700">
        If a package is still within the estimated window, wait before contacting support. If it passes the window without progress, gather the latest scan screenshot and shipment details first.
      </p>
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

      <section className="mt-6 section-card">
        <h2 className="text-xl font-semibold">Why delivery times vary</h2>
        <p className="mt-3 text-sm text-slate-700">
          Transit speed depends on whether the shipment is domestic or cross-border, the number of handoff points, and how quickly the local depot processes incoming packages.
        </p>
      </section>

      <section className="mt-6 section-card">
        <h2 className="text-xl font-semibold">What you can check before escalating</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>Confirm the tracking number belongs to the carrier shown in the order details.</li>
          <li>Check whether the shipment is still inside the expected delivery window.</li>
          <li>Look for customs or exception notes before assuming the parcel is lost.</li>
          <li>Save screenshots so support can review the exact timeline you saw.</li>
        </ul>
      </section>
    </div>
  );
}
