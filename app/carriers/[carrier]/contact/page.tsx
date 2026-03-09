import { notFound } from "next/navigation";
import { carriers } from "@/lib/seo/carriers";
import { getCarrierBySlug } from "@/lib/seo/data";
import { buildMetadata } from "@/lib/seo/metadata";

export async function generateStaticParams() {
  return carriers.map((carrier) => ({ carrier: carrier.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ carrier: string }> }) {
  const { carrier } = await params;
  const current = getCarrierBySlug(carrier);

  if (!current) return {};

  return buildMetadata({
    title: `${current.carrierName} Contact Support | Tracking Help and Escalation`,
    description: `Find official ${current.carrierName} support channels and what details to share for faster tracking issue resolution.`,
    path: `/carriers/${carrier}/contact`
  });
}

export default async function CarrierContactPage({ params }: { params: Promise<{ carrier: string }> }) {
  const { carrier } = await params;
  const current = getCarrierBySlug(carrier);

  if (!current) {
    notFound();
  }

  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold">{current.carrierName} Customer Support</h1>
      <p className="mt-2 text-slate-700">Use official support channels for order-specific tracking problems.</p>
      <section className="mt-6 section-card">
        <h2 className="text-xl font-semibold">Recommended Support Workflow</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          <li>Collect your tracking number and order ID.</li>
          <li>Confirm destination ZIP and contact phone number.</li>
          <li>Contact seller first for marketplace orders.</li>
          <li>Escalate with carrier support if issue remains unresolved.</li>
        </ol>
        {current.supportUrl ? (
          <p className="mt-4 text-sm text-brand-700">
            <a href={current.supportUrl} target="_blank" rel="noreferrer">
              Official {current.carrierName} support page
            </a>
          </p>
        ) : null}
        {current.supportEmail ? <p className="mt-2 text-sm text-slate-700">Support email: {current.supportEmail}</p> : null}
      </section>
    </div>
  );
}
