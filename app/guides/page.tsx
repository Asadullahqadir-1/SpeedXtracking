import Link from "next/link";
import { guides } from "@/content/guides";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Shipping Guides | Tracking Help, Delays, and Delivery Status",
  description:
    "Read practical shipping guides on tracking updates, delayed packages, delivered-not-received issues, and last-mile delivery.",
  path: "/guides"
});

export default function GuidesPage() {
  return (
    <div className="container-page py-10">
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
