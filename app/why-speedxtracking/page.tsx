import Link from "next/link";
import { buildMetadata, siteConfig } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo/schema";
import { SiteLinkHub } from "@/components/seo/SiteLinkHub";
import { TrustedCitations } from "@/components/seo/TrustedCitations";
import { TrackingForm } from "@/components/tracking/TrackingForm";
import { getStrategyPriorities } from "@/lib/seo/competitors";

export const revalidate = 86400;

const faqs = [
  {
    question: "Is SpeedXTracking the official SpeedX website?",
    answer:
      "No. SpeedXTracking is an independent free tracker and help site. For official carrier records, always verify on speedx.io and the seller’s order page."
  },
  {
    question: "How is this different from 17TRACK or AfterShip?",
    answer:
      "Multi-carrier tools are built for every courier. We focus on SpeedX tracking numbers, Shein handoffs, SPXCN formats, delivery hours, and step-by-step delay guides."
  },
  {
    question: "Why not use a thin SpeedX tracking clone site?",
    answer:
      "Many lookalike domains only wrap a lookup box. We publish interlinked guides for Sunday delivery, out for delivery problems, customs pauses, and customer service steps so you know what to do next."
  }
];

export const metadata = buildMetadata({
  title: "Why SpeedXTracking — Free SpeedX Tracker + Guides",
  description:
    "Why use SpeedXTracking instead of generic parcel aggregators or thin SpeedX clone sites: free SPX/SPXCN lookup, deep guides, and official citations.",
  path: "/why-speedxtracking"
});

export default function WhySpeedXTrackingPage() {
  const priorities = getStrategyPriorities();

  return (
    <div className="container-page py-10">
      <JsonLd
        data={webPageSchema({
          path: "/why-speedxtracking",
          title: "Why SpeedXTracking",
          description: "How SpeedXTracking differs from multi-carrier aggregators and thin SpeedX clone sites."
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Why SpeedXTracking", url: `${siteConfig.url}/why-speedxtracking` }
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <h1 className="text-3xl font-bold text-slate-900">Why SpeedXTracking?</h1>
      <p className="mt-3 max-w-3xl text-slate-700">
        Organic competitors for SpeedX searches include the official carrier, large multi-carrier aggregators, and many thin lookalike tracking domains. We built this site to win the jobs those thin clones skip: clear answers, international help, and a free SpeedX tracking number lookup.
      </p>

      <div className="mt-6">
        <TrackingForm />
      </div>

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold text-slate-900">How we position against competitors</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <article className="rounded-lg border border-slate-200 p-4">
            <h3 className="font-semibold text-slate-900">Official SpeedX</h3>
            <p className="mt-2 text-sm text-slate-700">
              We cite <a href="https://speedx.io/" target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:underline">speedx.io</a> as the source of truth. Shoppers still need independent explainers for status meaning, Sunday routes, and Shein delays.
            </p>
          </article>
          <article className="rounded-lg border border-slate-200 p-4">
            <h3 className="font-semibold text-slate-900">Big aggregators</h3>
            <p className="mt-2 text-sm text-slate-700">
              Tools like 17TRACK, ParcelsApp, and AfterShip cover every carrier. We stay SpeedX-deep: SPXCN, out for delivery, delivery hours, and marketplace escalation.
            </p>
          </article>
          <article className="rounded-lg border border-slate-200 p-4">
            <h3 className="font-semibold text-slate-900">Thin SpeedX clones</h3>
            <p className="mt-2 text-sm text-slate-700">
              Lookalike domains often stop at a tracker box. We publish topic clusters, FAQs, and Spanish tracking help so pages can rank for real questions—not just the brand name.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-8 section-card">
        <h2 className="text-xl font-semibold text-slate-900">What you get here</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>Free SpeedX / SPX / SPXCN tracking number lookup</li>
          <li>Guides for delivery times, Sunday service, and out-for-delivery problems</li>
          <li>Shein + SpeedX handoff help</li>
          <li>Spanish page for rastrear paquete SpeedX</li>
          <li>Citations only to official and consumer-protection sources—not spam backlink farms</li>
        </ul>
        <div className="mt-4 grid gap-2 text-sm font-semibold text-brand-700 sm:grid-cols-2">
          <Link href="/track-package" className="hover:underline">
            Open free tracker →
          </Link>
          <Link href="/speedx-delivery" className="hover:underline">
            SpeedX delivery times →
          </Link>
          <Link href="/blog/shein-speedx-tracking-guide" className="hover:underline">
            Shein SpeedX guide →
          </Link>
          <Link href="/does-speedx-deliver-on-sunday" className="hover:underline">
            Sunday delivery →
          </Link>
        </div>
      </section>

      <section className="mt-8 section-card bg-slate-50">
        <h2 className="text-xl font-semibold text-slate-900">Editorial priorities from competitor research</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          {priorities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
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

      <SiteLinkHub currentPath="/why-speedxtracking" />
      <TrustedCitations variant="all" />
    </div>
  );
}
