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
    title: `${current.carrierName} Shein Tracking | Track Marketplace Shipments`,
    description: `Track Shein orders shipped with ${current.carrierName} and learn how cross-border status updates and final-mile handoffs work.`,
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
    </div>
  );
}
