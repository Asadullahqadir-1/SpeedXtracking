import { globalFaqs } from "@/content/faqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "SpeedX Tracking FAQ | Status Meanings, Delivery Times, and Support",
  description:
    "Answers to common SpeedX tracking questions including status meanings, delivery delays, SPXCN numbers, and missing package steps.",
  path: "/faq",
  keywords: [
    "SpeedX tracking FAQ",
    "speed x tracking questions",
    "SPXCN meaning",
    "does SpeedX deliver late at night",
    "SpeedX tracking status meanings"
  ]
});

export default function FaqPage() {
  return (
    <div className="container-page py-10">
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
