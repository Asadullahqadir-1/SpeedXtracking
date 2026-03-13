import Link from "next/link";
import { guides } from "@/content/guides";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { webPageSchema } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "SpeedX Tracking Guides: Delays, Delivery Times, and Status Help",
  description:
    "Read practical SpeedX tracking guides on delayed packages, SPXCN tracking numbers, delivered-not-received issues, and late-night delivery questions.",
  path: "/guides",
  keywords: [
    "SpeedX tracking guides",
    "speed x tracking help",
    "SPXCN tracking meaning",
    "does SpeedX deliver late at night",
    "SpeedX package not updating"
  ]
});

export default function GuidesPage() {
  return (
    <div className="container-page py-10">
      <JsonLd
        data={
          webPageSchema({
            path: "/guides",
            title: "SpeedX Tracking Guides",
            description:
              "Read practical SpeedX tracking guides on delayed packages, SPXCN tracking numbers, delivered-not-received issues, and late-night delivery questions."
          })
        }
      />
      <h1 className="text-3xl font-bold">Shipping Guides</h1>
      <p className="mt-2 text-slate-700">Clear, action-focused help for common tracking and delivery problems.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {guides.map((guide) => (
          <Link key={guide.slug} href={`/guides/${guide.slug}`} className="section-card hover:border-brand-500">
            <h2 className="text-lg font-semibold text-slate-900">{guide.title}</h2>
            <p className="mt-2 text-sm text-slate-700">{guide.intro}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
