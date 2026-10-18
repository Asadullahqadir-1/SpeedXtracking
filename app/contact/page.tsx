import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Contact Us",
  description: "Contact the SpeedXTracking editorial team for corrections, feedback, and support-related questions.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold">Contact</h1>

      <section className="mt-4 section-card p-5 sm:p-6">
        <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
          Contact the SpeedXTracking editorial team for correction requests, feedback, and content quality issues.
          For shipment claims, refunds, and delivery investigations, contact your seller or{" "}
          <a
            href="https://support.speedx.io/hc/en-us"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-700 hover:underline"
          >
            official SpeedX support
          </a>{" "}
          directly.
        </p>
      </section>

      <section className="mt-6 section-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">Editorial contact</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
          Use the form path below instead of posting a raw email address on-page (avoids broken Cloudflare email-protection crawl URLs).
        </p>
        <p className="mt-3 text-sm text-slate-700">
          Preferred: open your mail app with a prefilled subject via{" "}
          <a
            className="font-semibold text-brand-700 hover:underline"
            href="mailto:hello%40speedxtracking.org?subject=SpeedXTracking%20editorial%20feedback"
          >
            editorial feedback link
          </a>
          .
        </p>
        <p className="mt-2 text-sm text-slate-700">Typical response window: 1-2 business days.</p>
        <p className="mt-4 text-sm text-brand-700">
          <Link href="/speedx-contact-support" className="font-semibold hover:underline">
            SpeedX package support checklist →
          </Link>
        </p>
      </section>

      <section className="mt-6 section-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">How to report a correction</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-700 sm:text-base">
          <li>Share the exact page URL.</li>
          <li>Quote the sentence that appears inaccurate.</li>
          <li>Provide a source link or screenshot if possible.</li>
          <li>Describe the corrected wording you recommend.</li>
        </ol>
      </section>

      <section className="mt-6 section-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">Important note</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
          SpeedXTracking is an independent informational website and cannot access package-level internal carrier systems.
          For official shipment records, proof-of-delivery, and claim processing, use carrier-owned channels.
        </p>
      </section>
    </div>
  );
}
