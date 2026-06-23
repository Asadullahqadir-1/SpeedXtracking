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
    title: `${current.carrierName} Shein Tracking: Order Status, ETA, And Delay Fixes`,
    description: `Track Shein orders shipped with ${current.carrierName}, understand cross-border scans, and fix common delay or missing-delivery issues.`,
    path: `/carriers/${carrier}/shein`
  });
}

export default async function CarrierSheinPage({ params }: { params: Promise<{ carrier: string }> }) {
  const { carrier } = await params;
  const current = getCarrierBySlug(carrier);

  if (!current) {
    notFound();
  }

  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold">{current.carrierName} Shein Tracking</h1>
      <p className="mt-2 text-slate-700">
        If your marketplace order is handed to {current.carrierName}, use your tracking number to monitor global transit and local final-mile delivery.
      </p>
      <section className="mt-6 section-card">
        <h2 className="text-xl font-semibold">How marketplace tracking works</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>Seller creates shipping label and tracking begins.</li>
          <li>Cross-border movement may have slower scan intervals.</li>
          <li>Customs processing can delay visible updates temporarily.</li>
          <li>Final-mile handoff updates appear near destination city.</li>
        </ul>
      </section>

      <section className="mt-6 section-card">
        <h2 className="text-xl font-semibold">What to watch for on Shein shipments</h2>
        <p className="mt-3 text-sm text-slate-700">
          The first few updates often come from the seller side before the carrier takes over. If the shipment looks quiet during export or customs, that can still be a normal part of the handoff.
        </p>
        <p className="mt-3 text-sm text-slate-700">
          A longer pause matters most when the ETA has already passed or the latest scan shows an exception. At that point, ask the seller to verify the carrier handoff and request a trace if needed.
        </p>
      </section>
    </div>
  );
}
