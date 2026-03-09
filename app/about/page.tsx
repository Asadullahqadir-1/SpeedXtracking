import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "About SpeedXTracking | Independent Package Tracking Resource",
  description:
    "Learn how SpeedXTracking helps users understand shipment statuses, delivery estimates, and package tracking across major carriers.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold">About SpeedXTracking</h1>
      <p className="mt-3 text-slate-700">
        SpeedXTracking is an independent package tracking information platform focused on clear delivery updates, status explanations, and troubleshooting guides.
      </p>
    </div>
  );
}
