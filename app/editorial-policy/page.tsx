import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Editorial Policy | SpeedXTracking",
  description: "Read how SpeedXTracking creates, reviews, and updates tracking guides and carrier pages for accuracy.",
  path: "/editorial-policy"
});

export default function EditorialPolicyPage() {
  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold">Editorial Policy</h1>

      <section className="mt-4 section-card p-5 sm:p-6">
        <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
          This policy explains how SpeedXTracking creates, reviews, and updates content. Our goal is to publish accurate, practical guidance that helps users solve tracking and delivery problems with less friction.
        </p>
      </section>

      <section className="mt-6 section-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">Editorial standards</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700 sm:text-base">
          <li>Content must be task-oriented and address a specific shipment problem or status question.</li>
          <li>Operational claims must be supported by official carrier resources or clearly labeled as typical behavior.</li>
          <li>Pages should include escalation criteria so users know when to wait and when to act.</li>
          <li>Language should stay neutral, factual, and free from exaggerated promises.</li>
        </ul>
      </section>

      <section className="mt-6 section-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">Source and verification process</h2>
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700 sm:text-base">
          <p>
            Writers and editors cross-check carrier terminology, support channels, and policy references against official SpeedX resources and publicly available documentation.
          </p>
          <p>
            When real-world behavior can vary by route, season, or destination, we frame advice as expected ranges and include clear escalation thresholds.
          </p>
        </div>
      </section>

      <section className="mt-6 section-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">Updates and freshness</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700 sm:text-base">
          <li>Core pages are reviewed on a recurring schedule and updated when support flows or status terminology changes.</li>
          <li>Time-sensitive sections are revised when readers report broken links, outdated contacts, or incorrect instructions.</li>
          <li>Material changes should be reflected in page-level update dates where applicable.</li>
        </ul>
      </section>

      <section className="mt-6 section-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">Corrections policy</h2>
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700 sm:text-base">
          <p>
            We accept correction requests through our contact page. Please include the affected URL, the exact line that appears inaccurate, and supporting evidence if available.
          </p>
          <p>
            Confirmed factual errors are prioritized for correction. If an issue cannot be fully verified, we will clarify wording to prevent misleading interpretation.
          </p>
        </div>
      </section>
    </div>
  );
}
