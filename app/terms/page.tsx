import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Terms and Conditions | SpeedXTracking",
  description: "Terms for using SpeedXTracking package tracking pages and shipping information guides.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold">Terms and Conditions</h1>
      <p className="mt-3 text-sm text-slate-700">SpeedXTracking is an informational service. Users should verify critical shipment details directly with official carrier systems.</p>
    </div>
  );
}
