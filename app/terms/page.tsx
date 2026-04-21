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

      <section className="mt-4 section-card p-5 sm:p-6">
        <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
          By using SpeedXTracking, you agree to these terms. This site provides informational tracking guidance only and does not replace official carrier records.
        </p>
      </section>

      <section className="mt-6 section-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">Service scope</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700 sm:text-base">
          <li>We provide tracking explanations, troubleshooting guidance, and reference information.</li>
          <li>We do not provide shipping services, claim payouts, or guaranteed delivery outcomes.</li>
          <li>Official shipment status and claim decisions are controlled by carriers and sellers.</li>
        </ul>
      </section>

      <section className="mt-6 section-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">Acceptable use</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700 sm:text-base">
          <li>Do not use the site for unlawful activity, abuse, scraping attacks, or service disruption.</li>
          <li>Do not attempt to bypass security, rate limits, or technical safeguards.</li>
          <li>Use content responsibly and verify critical shipment decisions with official channels.</li>
        </ul>
      </section>

      <section className="mt-6 section-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">Content and accuracy</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
          We aim to keep content accurate and current, but route-level operations and support policies can change. You should confirm important shipment details directly with carrier or seller systems.
        </p>
      </section>

      <section className="mt-6 section-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">Limitation of liability</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
          SpeedXTracking is provided on an &quot;as is&quot; basis for general information. We are not liable for delivery losses, claim outcomes, or business decisions made solely from site content.
        </p>
      </section>

      <section className="mt-6 section-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
          For terms-related questions, contact <a href="mailto:hello@speedxtracking.org" className="font-semibold text-brand-700 hover:underline">hello@speedxtracking.org</a>.
        </p>
      </section>
    </div>
  );
}
