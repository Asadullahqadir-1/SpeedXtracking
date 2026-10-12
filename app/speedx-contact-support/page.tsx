import Link from "next/link";
import { buildMetadata, siteConfig } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo/schema";
import { SiteLinkHub } from "@/components/seo/SiteLinkHub";
import { TrustedCitations } from "@/components/seo/TrustedCitations";
import { TrackingForm } from "@/components/tracking/TrackingForm";
import { AdSenseUnit } from "@/components/ads/AdSenseUnit";

export const revalidate = 86400;

const faqs = [
  {
    question: "How can I contact SpeedX support?",
    answer:
      "Use the official SpeedX support center and tracking portal tools. For marketplace orders, contact the seller first with your tracking number and screenshots, then escalate if needed."
  },
  {
    question: "Does SpeedX have a public phone number?",
    answer:
      "SpeedX generally directs recipients to online support rather than a public call center. Check the official support center for the latest contact options."
  },
  {
    question: "What should I send SpeedX customer service?",
    answer:
      "Include the full tracking number, order ID, delivery address, latest scan screenshot, and a clear request (locate package, reattempt, or claim)."
  }
];

export const metadata = buildMetadata({
  title: "SpeedX Contact Support — Customer Service Help",
  description:
    "How to contact SpeedX support and customer service: what to send, when to ask the seller first, and official SpeedX help links.",
  path: "/speedx-contact-support"
});

export default function SpeedXContactSupportPage() {
  const reviewed = "2026-10-13";

  return (
    <div className="container-page py-10">
      <JsonLd
        data={webPageSchema({
          path: "/speedx-contact-support",
          title: "SpeedX Contact Support",
          description: "Practical SpeedX customer service and support contact guidance for delayed packages."
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "SpeedX Contact Support", url: `${siteConfig.url}/speedx-contact-support` }
        ])}
      />
      <JsonLd
        data={articleSchema({
          title: "SpeedX Contact Support — Customer Service Help",
          description: "How to reach SpeedX support with the right evidence and escalation order.",
          path: "/speedx-contact-support",
          datePublished: reviewed,
          dateModified: reviewed,
          keywords: ["speedx contact support", "speedx customer service", "speedx live chat", "speedx phone number"],
          articleSection: "SpeedX Support",
          wordCount: 1050
        })}
      />
      <JsonLd data={faqSchema(faqs)} />

      <h1 className="text-3xl font-bold text-slate-900">SpeedX Contact Support</h1>
      <p className="mt-3 max-w-3xl text-slate-700">
        Need SpeedX customer service? Check tracking first, gather evidence, then contact the seller or official SpeedX support with a clear request.
      </p>

      <section className="mt-6 section-card">
        <h2 className="text-lg font-semibold">Check tracking before you contact support</h2>
        <div className="mt-4">
          <TrackingForm />
        </div>
      </section>

      <AdSenseUnit />

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">Best order of contact</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          <li>Recheck SpeedX tracking and save the latest screenshot.</li>
          <li>Contact the marketplace seller first for Shein/Temu-style orders.</li>
          <li>Escalate through official SpeedX support channels with tracking + order ID.</li>
          <li>Ask for a case/reference number and a next-update time.</li>
        </ol>
        <div className="mt-4 grid gap-2 text-sm font-semibold text-brand-700 sm:grid-cols-2">
          <Link href="/carriers/speedx/contact" className="hover:underline">
            SpeedX customer service hub →
          </Link>
          <a
            href="https://support.speedx.io/hc/en-us"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Official SpeedX support center →
          </a>
          <Link href="/blog/delivered-but-not-received-speedx" className="hover:underline">
            Delivered but not received →
          </Link>
          <Link href="/resources/shipping-delay-checklist" className="hover:underline">
            Shipping delay checklist →
          </Link>
        </div>
      </section>

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold">FAQ</h2>
        <div className="mt-4 space-y-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">{faq.question}</h3>
              <p className="mt-2 text-sm text-slate-700">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteLinkHub currentPath="/speedx-contact-support" />
      <TrustedCitations variant="core" />
    </div>
  );
}
