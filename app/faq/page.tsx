import { globalFaqs } from "@/content/faqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo/schema";
import { buildMetadata, siteConfig } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "SpeedX Tracking FAQ — Status, ETA & SPXCN",
  description:
    "Answers for SpeedX delivery time, status meanings, SPXCN numbers, customs delays, and missing packages.",
  path: "/faq"
});

export default function FaqPage() {
  return (
    <div className="container-page py-10">
      <JsonLd
        data={
          webPageSchema({
            path: "/faq",
            title: "SpeedX Tracking FAQ",
            description:
              "Answers to common SpeedX tracking questions about delivery times, status meanings, SPXCN formats, and missing package workflows."
          })
        }
      />
      <JsonLd
        data={
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "FAQ", url: `${siteConfig.url}/faq` }
          ])
        }
      />
      <JsonLd data={faqSchema(globalFaqs)} />
      <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
      <div className="mt-6 space-y-5">
        {globalFaqs.map((faq) => (
          <article key={faq.question} className="section-card">
            <h2 className="text-lg font-semibold">{faq.question}</h2>
            <p className="mt-2 text-sm text-slate-700">{faq.answer}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
