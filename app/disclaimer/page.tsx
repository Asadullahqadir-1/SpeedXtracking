import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Disclaimer | SpeedXTracking",
  description:
    "SpeedXTracking is an independent SpeedX tracking information platform and is not affiliated with SpeedX.",
  path: "/disclaimer"
});

export default function DisclaimerPage() {
  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold">Disclaimer</h1>
      <p className="mt-3 text-sm text-slate-700">SpeedXTracking is not affiliated with, endorsed by, or owned by SpeedX.</p>
      <p className="mt-2 text-sm text-slate-700">For official shipment records and claim handling, use carrier-owned websites and support channels.</p>
    </div>
  );
}
