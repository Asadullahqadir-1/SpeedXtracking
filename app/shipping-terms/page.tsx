import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageTrail } from "@/components/nav/PageTrail";
import { SiteLinkHub } from "@/components/seo/SiteLinkHub";

export const metadata = buildMetadata({
  title: "Shipping Terms Glossary for SpeedX Packages",
  description:
    "Plain-language shipping terms like linehaul, final mile, delivery window, and proof of delivery. For official SpeedX scan names, use the status meanings page.",
  path: "/shipping-terms"
});

const terms = [
  ["Linehaul", "Long-distance movement between logistics hubs, often with fewer public scans."],
  ["Final Mile", "The local delivery stage from a destination facility to the recipient address."],
  ["Delivery Window", "An estimated period for arrival that can change with route load, weather, customs, and local operations."],
  ["Out-for-Delivery Scan", "A scan showing the parcel is assigned to a local route; it does not guarantee a specific delivery hour."],
  ["Proof of Delivery", "Confirmation evidence such as a signature or photo after a completed delivery attempt."],
  ["Customs Clearance", "The border compliance process for international shipments, which can pause public tracking updates."],
  ["Delivery Exception", "A temporary address, access, weather, customs, or operations problem that needs review."],
  ["Label Created", "A general term meaning shipment details were submitted before a pickup scan. SpeedX often shows this as Shipping Label Created."],
  ["In Transit", "A general term used by many trackers when a package is moving between facilities. Official SpeedX wording may be more specific."],
  ["At Facility", "A general term meaning the parcel reached a processing location and may be waiting for sorting or the next handoff."]
];

export default function ShippingTermsPage() {
  return (
    <div className="container-page py-10">
      <PageTrail items={[{ name: "Home", path: "/" }, { name: "Shipping Terms", path: "/shipping-terms" }]} />
      <h1 className="text-3xl font-bold">Shipping and Logistics Terms Glossary</h1>
      <p className="mt-2 text-slate-700">
        This glossary explains common logistics words you will see on invoices, marketplace pages, and third-party trackers. It is not the official SpeedX status list.
      </p>
      <p className="mt-3 text-slate-700">
        For the official SpeedX scan names and what to do next, use the{" "}
        <Link href="/carriers/speedx/status" className="font-semibold text-brand-700 hover:underline">
          SpeedX tracking status meanings
        </Link>{" "}
        page. To look up a photo after delivery, see{" "}
        <Link href="/blog/speedx-proof-of-delivery-photo" className="font-semibold text-brand-700 hover:underline">
          how to see a SpeedX proof-of-delivery photo
        </Link>
        .
      </p>
      <div className="mt-6 space-y-3">
        {terms.map(([term, definition]) => (
          <article key={term} className="section-card">
            <h2 className="text-lg font-semibold">{term}</h2>
            <p className="mt-1 text-sm text-slate-700">{definition}</p>
          </article>
        ))}
      </div>
      <SiteLinkHub currentPath="/shipping-terms" />
    </div>
  );
}
