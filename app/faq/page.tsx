import { globalFaqs } from "@/content/faqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo/schema";
import { buildMetadata, siteConfig } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "SpeedX Tracking FAQ: Delivery Time, Status Meanings, SPXCN, And Customs Help",
  description:
    "Get clear answers to common SpeedX tracking questions about delivery time, status meanings, SPXCN tracking numbers, customs delays, and missing deliveries.",
  path: "/faq",
  keywords: [
    "SpeedX tracking FAQ",
    "SpeedX package tracking",
    "SpeedX delivery time",
    "SpeedX status meanings",
    "SPXCN tracking",
    "SpeedX customs delay",
    "SpeedX out for delivery",
    "SpeedX Shein tracking"
  ]
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
