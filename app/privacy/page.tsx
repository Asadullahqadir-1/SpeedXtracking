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

      <section className="mt-4 section-card p-5 sm:p-6">
        <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
          SpeedXTracking is an informational website and does not require account registration. This policy explains what information we process, how we use it, and what choices users have.
        </p>
      </section>

      <section className="mt-6 section-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">Information we process</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700 sm:text-base">
          <li>Tracking numbers entered for shipment lookups.</li>
          <li>Basic technical logs such as IP address, browser type, and request timestamps.</li>
          <li>Usage analytics events for page performance and feature quality measurement.</li>
        </ul>
      </section>

      <section className="mt-6 section-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">How information is used</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700 sm:text-base">
          <li>To provide requested tracking lookup results.</li>
          <li>To secure and operate the service, including abuse prevention and reliability checks.</li>
          <li>To improve content quality, navigation, and troubleshooting guidance.</li>
          <li>To measure site usage patterns and detect broken flows.</li>
        </ul>
      </section>

      <section className="mt-6 section-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">Cookies, advertising, and third parties</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
          We use cookies and similar technologies for analytics, security, and advertising operations. Third-party services, including Google AdSense, may place and read cookies, web beacons, or similar technologies on your browser in accordance with their own privacy policies.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
          We may display ads from Google AdSense and other advertising partners. These providers may use non-personally identifiable information about your visits to deliver, target, and measure ads.
        </p>
      </section>

      <section className="mt-6 section-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">Ads.txt and authorized sellers</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
          Our public ads.txt file authorizes Google AdSense to sell inventory on this domain. This file helps prevent unauthorized sellers from claiming our ad space.
        </p>
      </section>

      <section className="mt-6 section-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">Data retention</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
          Tracking requests and technical logs are retained only as long as needed for operational, security, and analytics purposes, then deleted or aggregated where practical.
        </p>
      </section>

      <section className="mt-6 section-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">Third-party links and services</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
          Our pages may link to carrier and marketplace websites. Their privacy practices are independent and governed by their own terms and policies.
        </p>
      </section>

      <section className="mt-6 section-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
          For privacy-related questions, contact us at <a href="mailto:hello@speedxtracking.org" className="font-semibold text-brand-700 hover:underline">hello@speedxtracking.org</a>.
        </p>
      </section>
    </div>
  );
}
