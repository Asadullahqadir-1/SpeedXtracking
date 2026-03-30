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

      <section className="mt-4 section-card p-5 sm:p-6">
        <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
          SpeedXTracking is an independent informational website. We are not affiliated with, endorsed by, or operated by SpeedX or any marketplace.
        </p>
      </section>

      <section className="mt-6 section-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">Information scope</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700 sm:text-base">
          <li>We provide educational tracking guidance and troubleshooting workflows.</li>
          <li>We do not provide shipping, claim, refund, or customer-account services.</li>
          <li>We cannot access carrier internal systems or override delivery operations.</li>
        </ul>
      </section>

      <section className="mt-6 section-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">Official records and claims</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
          For official shipment records, proof-of-delivery, address corrections, and claim handling, use carrier-owned or seller-owned support channels.
          Carrier timelines and policies may change without notice.
        </p>
      </section>

      <section className="mt-6 section-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">No warranty</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
          While we aim for accuracy and frequent updates, all content is provided for general informational purposes and may not reflect every route-level or case-specific condition.
        </p>
      </section>
    </div>
  );
}
