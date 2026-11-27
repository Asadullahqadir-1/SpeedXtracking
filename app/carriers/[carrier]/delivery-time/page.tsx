import { notFound } from "next/navigation";
import { PageTrail } from "@/components/nav/PageTrail";
import Link from "next/link";
import { TopicAuthorityLinks } from "@/components/seo/TopicAuthorityLinks";
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
    title:
      current.slug === "speedx"
        ? "SpeedX After Handoff: Next-Day Transit Window"
        : `${current.carrierName} Delivery Time Guide`,
    description:
      current.slug === "speedx"
        ? "After SpeedX receives a parcel, first attempts often target the next business day (6am–10pm local). For regional 2–7 day ETAs, use the delivery-time-by-region guide."
        : `Typical ${current.carrierName} delivery times by route type, plus why customs, weather, and handoffs can delay arrival.`,
    path: `/carriers/${carrier}/delivery-time`,
    robots: current.slug === "speedx" ? undefined : { index: false, follow: true }
  });
}

export default async function CarrierDeliveryTimePage({ params }: { params: Promise<{ carrier: string }> }) {
  const { carrier } = await params;
  const current = getCarrierBySlug(carrier);

  if (!current) {
    notFound();
  }

  return (
    <div className="container-page py-10">
      
      <PageTrail
        items={[
          { name: "Home", path: "/" },
          { name: "SpeedX Hub", path: "/carriers" },
          { name: `${current.carrierName}`, path: `/carriers/${current.slug}` },
          { name: "Delivery time", path: `/carriers/${current.slug}/delivery-time` }
        ]}
      />
<h1 className="text-3xl font-bold">
        {current.slug === "speedx"
          ? "SpeedX Transit After Handoff (Next Business Day)"
          : `${current.carrierName} Delivery Time Estimates`}
      </h1>
      <p className="mt-2 text-slate-700">
        {current.slug === "speedx"
          ? "This page covers what happens after SpeedX receives the parcel—often a next-business-day first attempt window—not the full domestic vs international ETA ranges."
          : "Realistic delivery windows vary by route distance, customs, and final-mile handoff. Use the estimates below as a general guide, then allow extra time for customs, weather, and carrier processing."}
      </p>
      {current.slug === "speedx" ? (
        <p className="mt-3 rounded-lg border border-brand-100 bg-brand-50 p-3 text-sm text-slate-800">
          Looking for “how long does SpeedX take” by region (about 2–7 days domestic / 7–20 cross-border)? Use the{" "}
          <Link href="/blog/speedx-delivery-time-by-region" className="font-semibold text-brand-700 hover:underline">
            SpeedX delivery time by region
          </Link>{" "}
          guide so this page does not compete with that intent.
        </p>
      ) : (
        <p className="mt-3 text-sm text-slate-700">
          If a package is still within the estimated window, wait before contacting support. If it passes the window without progress, gather the latest scan screenshot and shipment details first.
        </p>
      )}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <article className="section-card">
          <h2 className="text-xl font-semibold">
            {current.slug === "speedx" ? "After SpeedX receives the parcel" : "Domestic Delivery"}
          </h2>
          <p className="mt-2 text-slate-700">
            {current.slug === "speedx"
              ? "SpeedX’s parcel services agreement describes arranging delivery with a first attempt between 6am and 10pm local time on the next business day after SpeedX receives the package. That is a service window, not a guarantee for every address."
              : `Typical window: ${current.domesticEta}`}
          </p>
        </article>
        <article className="section-card">
          <h2 className="text-xl font-semibold">
            {current.slug === "speedx" ? "Out for delivery same day" : "International Delivery"}
          </h2>
          <p className="mt-2 text-slate-700">
            {current.slug === "speedx"
              ? "Once tracking shows Out for Delivery, the local route usually attempts the same day. Route overflow can roll the stop to the next day—see the out-for-delivery guides for that checklist."
              : `Typical window: ${current.internationalEta}`}
          </p>
        </article>
      </div>

      <section className="mt-6 section-card">
        <h2 className="text-xl font-semibold">
          {current.slug === "speedx" ? "Why this is not the regional ETA page" : "Why delivery times vary"}
        </h2>
        <p className="mt-3 text-sm text-slate-700">
          {current.slug === "speedx"
            ? "Shoppers searching “SpeedX delivery time” usually want domestic vs international day ranges. Those live on the regional guide. This URL stays focused on post-handoff / next-business-day language so the two pages do not cannibalize each other."
            : "Transit speed depends on whether the shipment is domestic or cross-border, the number of handoff points, and how quickly the local depot processes incoming packages."}
        </p>
      </section>

      <section className="mt-6 section-card">
        <h2 className="text-xl font-semibold">What you can check before escalating</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>Confirm the tracking number belongs to the carrier shown in the order details.</li>
          <li>Check whether the shipment is still inside the expected delivery window.</li>
          <li>Look for customs or exception notes before assuming the parcel is lost.</li>
          <li>Save screenshots so support can review the exact timeline you saw.</li>
        </ul>
      </section>

      {current.slug === "speedx" ? (
        <div className="mt-8 space-y-4">
          <div className="grid gap-2 text-sm font-semibold text-brand-700 sm:grid-cols-2">
            <Link href="/speedx-delivery" className="hover:underline">
              SpeedX delivery times hub →
            </Link>
            <Link href="/does-speedx-deliver-on-sunday" className="hover:underline">
              Does SpeedX deliver on Sunday? →
            </Link>
            <Link href="/topics/delivery-hours" className="hover:underline">
              How late does SpeedX deliver? cluster →
            </Link>
            <Link href="/blog/speedx-delivery-time-by-region" className="hover:underline">
              Delivery times by region →
            </Link>
          </div>
          <TopicAuthorityLinks activeCluster="delivery-hours" />
        </div>
      ) : null}
    </div>
  );
}
