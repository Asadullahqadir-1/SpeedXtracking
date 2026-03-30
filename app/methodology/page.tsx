import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Methodology | Tracking Data and Content Framework",
  description:
    "See how SpeedXTracking organizes carrier pages, status definitions, and delivery estimates to help users resolve tracking issues quickly.",
  path: "/methodology"
});

export default function MethodologyPage() {
  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold">Methodology</h1>

      <section className="mt-4 section-card p-5 sm:p-6">
        <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
          Our methodology is designed to make tracking guidance practical, not theoretical. We structure content around the exact points where users get stuck: stalled scans, unclear statuses, and escalation timing.
        </p>
      </section>

      <section className="mt-6 section-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">Content framework</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-700 sm:text-base">
          <li>Define user intent and problem scenario for each page.</li>
          <li>Map the shipment stage where confusion typically happens.</li>
          <li>Provide a step-by-step diagnosis and action flow.</li>
          <li>Add escalation rules, evidence checklist, and follow-up guidance.</li>
        </ol>
      </section>

      <section className="mt-6 section-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">Data and source inputs</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700 sm:text-base">
          <li>Official carrier pages and support documentation.</li>
          <li>Publicly available status terminology and route-stage definitions.</li>
          <li>Common user issue patterns from support and marketplace workflows.</li>
          <li>Internal quality reviews for clarity, duplication, and actionability.</li>
        </ul>
      </section>

      <section className="mt-6 section-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">Quality controls</h2>
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700 sm:text-base">
          <p>
            We check pages for specificity, originality, and user value before publishing updates. Content that is overly repetitive or not actionable is revised or consolidated.
          </p>
          <p>
            We also monitor internal links so users can move from symptom pages to deeper troubleshooting resources without dead ends.
          </p>
        </div>
      </section>

      <section className="mt-6 section-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">Review cadence</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
          Core pages are reviewed on a recurring cadence and after major operational or support changes. Corrections are applied as quickly as possible when credible evidence is provided.
        </p>
      </section>
    </div>
  );
}
