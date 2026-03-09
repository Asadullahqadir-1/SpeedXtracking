import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Shipping Terms Glossary | Tracking and Delivery Definitions",
  description:
    "Understand shipping and tracking terms like in transit, out for delivery, exception, customs clearance, and proof of delivery.",
  path: "/shipping-terms"
});

const terms = [
  ["Label Created", "Shipment details submitted to carrier before pickup scan."],
  ["In Transit", "Package moving through logistics network."],
  ["Out for Delivery", "Package assigned to local courier for final attempt."],
  ["Exception", "Delivery or transit issue requiring follow-up."],
  ["Proof of Delivery", "Confirmation evidence such as signature or photo."],
  ["Customs Clearance", "Border compliance process for international shipments."]
];

export default function ShippingTermsPage() {
  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold">Shipping Terms Glossary</h1>
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
