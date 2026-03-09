import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy | SpeedXTracking",
  description: "Understand what data SpeedXTracking stores and how tracking search inputs are handled.",
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-3 text-sm text-slate-700">This site does not require account registration. Tracking numbers submitted are used only to return shipment lookup results and service analytics.</p>
    </div>
  );
}
