import Link from "next/link";
import { carriers } from "@/lib/seo/carriers";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Carrier Tracking Directory | Track by Courier Name",
  description:
    "Browse courier tracking pages for SpeedX, DHL, FedEx, UPS, USPS, and more. Get status explanations, delivery time estimates, and support help.",
  path: "/carriers",
  keywords: [
    "carrier tracking directory",
    "SpeedX tracking",
    "track package by carrier",
    "shipping tracking status",
    "delivery time estimate"
  ]
});

export default function CarriersPage() {
  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold">Carrier Tracking Pages</h1>
      <p className="mt-2 text-slate-700">Choose your courier to track shipments and understand delivery status updates.</p>

      <section className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-lg font-semibold text-slate-900">Featured: SpeedX Tracking Resources</h2>
        <div className="mt-3 grid gap-2 text-sm text-brand-700 sm:grid-cols-2">
          <Link href="/carriers/speedx">SpeedX tracking overview</Link>
          <Link href="/carriers/speedx/package-tracking">SpeedX package tracking</Link>
          <Link href="/carriers/speedx/tracking-status">SpeedX tracking status</Link>
          <Link href="/carriers/speedx/delivery-time-estimate">SpeedX delivery estimate</Link>
        </div>
      </section>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {carriers.map((carrier) => (
          <Link
            key={carrier.slug}
            href={`/carriers/${carrier.slug}`}
            className="rounded-lg border border-slate-200 p-5 hover:border-brand-500"
          >
            <h2 className="font-semibold text-slate-900">{carrier.carrierName} Tracking</h2>
            <p className="mt-1 text-sm text-slate-600">{carrier.primaryKeyword}</p>
            <p className="mt-1 text-xs text-slate-500">
              ETA: {carrier.domesticEta} domestic • {carrier.internationalEta} international
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
