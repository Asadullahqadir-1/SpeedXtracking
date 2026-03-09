import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Methodology | Tracking Data and Content Framework",
  description:
    "See how SpeedXTracking organizes carrier pages, status definitions, and delivery estimates to help users resolve tracking issues quickly.",
  path: "/methodology"
});

export default function MethodologyPage() {
  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold">Methodology</h1>
      <p className="mt-3 text-slate-700">Our page framework combines tracking intent keywords, user problem workflows, and structured FAQs for better usability and search visibility.</p>
    </div>
  );
}
