import Link from "next/link";
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

  const isSpeedX = current.slug === "speedx";

  return buildMetadata({
    title: isSpeedX
      ? "SpeedX Customer Service & Contact Support"
      : `${current.carrierName} Contact Support`,
    description: isSpeedX
      ? "SpeedX customer service guide: what to send support, when to contact the seller first, and official SpeedX support links for delayed or missing packages."
      : `Find official ${current.carrierName} support channels and the details to share for faster issue resolution.`,
    path: `/carriers/${carrier}/contact`,
    robots: isSpeedX ? undefined : { index: false, follow: true }
  });
}

export default async function CarrierContactPage({ params }: { params: Promise<{ carrier: string }> }) {
  const { carrier } = await params;
  const current = getCarrierBySlug(carrier);

  if (!current) {
    notFound();
  }

  const isSpeedX = current.slug === "speedx";

  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold">
        {isSpeedX ? "SpeedX Customer Service & Contact Support" : `${current.carrierName} Customer Support`}
      </h1>
      <p className="mt-2 text-slate-700">
        {isSpeedX
          ? "Use this SpeedX customer service checklist before you escalate. Most marketplace SpeedX issues resolve faster when you contact the seller first with complete tracking evidence."
          : `Use official ${current.carrierName} support channels for order-specific tracking problems.`}
      </p>

      <section className="mt-6 section-card">
        <h2 className="text-xl font-semibold">Recommended Support Workflow</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          <li>Collect your tracking number and order ID.</li>
          <li>Confirm destination address, ZIP/postal code, and contact phone number.</li>
          <li>Contact the seller first for marketplace orders (Shein, Temu, and similar stores).</li>
          <li>Escalate with carrier support if the seller cannot resolve the issue.</li>
        </ol>
        {current.supportUrl ? (
          <p className="mt-4 text-sm text-brand-700">
            <a href={current.supportUrl} target="_blank" rel="noreferrer">
              Official {current.carrierName} support page
            </a>
          </p>
        ) : null}
        {isSpeedX ? (
          <p className="mt-2 text-sm text-brand-700">
            <a href="https://speedx.io/" target="_blank" rel="noreferrer">
              Official SpeedX website
            </a>
          </p>
        ) : null}
        {current.supportUrl ? (
          <p className="mt-2 text-sm text-slate-600">
            Prefer the official support page above—avoids broken email-protection crawl URLs in audits.
          </p>
        ) : null}
      </section>

      {isSpeedX ? (
        <>
          <section className="mt-6 section-card">
            <h2 className="text-xl font-semibold">What to include in a SpeedX support request</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>Full SpeedX / SPX / SPXCN tracking number (no spaces or truncated IDs)</li>
              <li>Order number from the marketplace and purchase date</li>
              <li>Latest scan screenshot and the date the timeline last moved</li>
              <li>Delivery address and any access notes (apartment, gate code)</li>
              <li>Clear ask: locate package, reattempt delivery, or open a claim</li>
            </ul>
          </section>

          <section className="mt-6 section-card">
            <h2 className="text-xl font-semibold">When to wait vs escalate</h2>
            <p className="mt-3 text-sm text-slate-700">
              Batch scan posting and customs handoffs can pause updates for 24–48 hours. Escalate sooner if the seller ETA already passed, the status shows an exception, or the package was marked delivered but never arrived.
            </p>
            <div className="mt-4 grid gap-2 text-sm font-semibold text-brand-700 sm:grid-cols-2">
              <Link href="/track-package" className="hover:underline">
                Free SpeedX tracking number lookup
              </Link>
              <Link href="/blog/delivered-but-not-received-speedx" className="hover:underline">
                Delivered but not received guide
              </Link>
              <Link href="/resources/shipping-delay-checklist" className="hover:underline">
                Shipping delay checklist
              </Link>
              <Link href="/carriers/speedx/shein" className="hover:underline">
                SpeedX Shein tracking help
              </Link>
            </div>
          </section>
        </>
      ) : null}
    </div>
  );
}
