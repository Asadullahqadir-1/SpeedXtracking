import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "About SpeedXTracking | Independent Package Tracking Resource",
  description:
    "Learn how SpeedXTracking helps users understand shipment statuses, delivery estimates, and package tracking across major carriers.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold">About SpeedXTracking</h1>

      <section className="mt-4 section-card p-5 sm:p-6">
        <p className="text-slate-700">
          SpeedXTracking is an independent shipment intelligence resource focused on one problem: helping people understand SpeedX package updates and resolve delivery issues faster.
          We are not a carrier, broker, or marketplace. We publish practical tracking explainers, support workflows, and status interpretation guides designed for real customer questions.
        </p>
      </section>

      <section className="mt-6 section-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">What we publish</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700 sm:text-base">
          <li>Carrier-specific tracking guides that explain how to interpret common status events.</li>
          <li>Troubleshooting playbooks for delayed scans, delivery exceptions, and missing-delivery cases.</li>
          <li>Contact and escalation checklists that help users provide complete evidence to sellers and carriers.</li>
          <li>Policy and methodology pages describing how content is sourced, reviewed, and corrected.</li>
        </ul>
      </section>

      <section className="mt-6 section-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">How we stay useful</h2>
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700 sm:text-base">
          <p>
            Our team reviews official carrier resources, support documentation, and user-reported issue patterns to keep troubleshooting steps practical and current.
            We prioritize actionable guidance over generic definitions.
          </p>
          <p>
            We do not sell shipping labels or claims services, and we do not represent any carrier. The site exists to help users make better decisions with clearer tracking context.
          </p>
        </div>
      </section>

      <section className="mt-6 section-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">Transparency and accountability</h2>
        <div className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700 sm:text-base">
          <p>
            If you spot incorrect information, use our contact channel and include the affected URL, the incorrect statement, and a source link if available.
            We typically review correction requests within 2 business days.
          </p>
          <p>
            For full standards, see our Editorial Policy and Methodology pages.
          </p>
        </div>
      </section>
    </div>
  );
}
