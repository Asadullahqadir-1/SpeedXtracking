import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Contact Us | SpeedXTracking Support",
  description: "Contact the SpeedXTracking editorial team for corrections, feedback, and support-related questions.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-3 text-slate-700">
        For corrections or feedback, email <a className="text-brand-700" href="mailto:support@speedxtracking.local">support@speedxtracking.local</a>.
      </p>
    </div>
  );
}
