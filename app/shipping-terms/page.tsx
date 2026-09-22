import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "SpeedX Tracking Glossary | Shipping and Delivery Definitions",
  description:
    "Use this SpeedX tracking glossary to understand in transit, out for delivery, exception, customs clearance, and proof-of-delivery terms.",
  path: "/shipping-terms",
  keywords: ["SpeedX tracking glossary", "SpeedX status meanings", "shipping terms glossary", "out for delivery meaning"]
});

const terms = [
  ["Label Created", "Shipment details submitted to carrier before pickup scan."],
  ["In Transit", "Package moving through logistics network."],
  ["Out for Delivery", "Package assigned to local courier for final attempt."],
  ["Exception", "Delivery or transit issue requiring follow-up."],
  ["Proof of Delivery", "Confirmation evidence such as signature or photo."],
  ["Customs Clearance", "Border compliance process for international shipments."],
  ["At Facility", "The parcel has reached a processing location and may be waiting for sorting or the next handoff."],
  ["Delivery Window", "An estimated period for arrival that can change with route load, weather, customs, and local operations."],
  ["Out-for-Delivery Scan", "The parcel is assigned to a local route; it does not guarantee a specific delivery hour."],
  ["Delivery Exception", "A temporary address, access, weather, customs, or operations problem needs review."],
  ["Linehaul", "Long-distance movement between logistics hubs, often with fewer public scans."],
  ["Final Mile", "The local delivery stage from destination processing to the recipient address."]
];

export default function ShippingTermsPage() {
  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold">SpeedX Tracking Glossary</h1>
      <p className="mt-2 text-slate-700">
        Clear definitions for common SpeedX tracking statuses and delivery terms.
      </p>
      <div className="mt-6 space-y-3">
        {terms.map(([term, definition]) => (
          <article key={term} className="section-card">
            <h2 className="text-lg font-semibold">{term}</h2>
            <p className="mt-1 text-sm text-slate-700">{definition}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
