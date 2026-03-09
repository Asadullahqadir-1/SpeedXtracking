import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Editorial Policy | SpeedXTracking",
  description: "Read how SpeedXTracking creates, reviews, and updates tracking guides and carrier pages for accuracy.",
  path: "/editorial-policy"
});

export default function EditorialPolicyPage() {
  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold">Editorial Policy</h1>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
        <li>Content is written for clarity and user intent.</li>
        <li>Carrier facts are reviewed against official resources.</li>
        <li>Pages are updated regularly for status and support changes.</li>
        <li>Corrections are prioritized when users report inaccuracies.</li>
      </ul>
    </div>
  );
}
