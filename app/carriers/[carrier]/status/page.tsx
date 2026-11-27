import { notFound } from "next/navigation";
import Link from "next/link";
import { carriers } from "@/lib/seo/carriers";
import { getCarrierBySlug } from "@/lib/seo/data";
import { buildMetadata } from "@/lib/seo/metadata";
import { TopicAuthorityLinks } from "@/components/seo/TopicAuthorityLinks";
import { SiteLinkHub } from "@/components/seo/SiteLinkHub";
import { PageTrail } from "@/components/nav/PageTrail";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, webPageSchema } from "@/lib/seo/schema";

const OFFICIAL_TRACKER = "https://tracking.speedx.io/";

const speedxFaqs = [
  {
    question: "What does Shipping Label Created mean on SpeedX?",
    answer:
      "Shipping Label Created means the label exists, but SpeedX may not have received or first-scanned the parcel yet. Wait 24-48 hours for a pickup scan before treating it as lost. See the label-created guide for the full checklist."
  },
  {
    question: "What does Arrival at Destination Facility mean?",
    answer:
      "Arrival at Destination Facility means the parcel reached a local SpeedX facility that serves the delivery area. Out for Delivery often follows after local sorting, but the wait can be one or more business days."
  },
  {
    question: "What should I do after an Attempted Delivery scan?",
    answer:
      "Check any notice, locker, or neighbor drop, confirm your address and access notes, then watch for a reattempt or pickup instruction on the official tracker. The attempted-delivery guide covers the usual next steps."
  },
  {
    question: "Where should I look up official SpeedX statuses?",
    answer:
      "Paste your number on this site's free tracker and on the official SpeedX tracker at tracking.speedx.io. Official scan names and any proof-of-delivery photo are most reliably shown on the official tracker."
  }
];

const genericFaqs = (name: string) => [
  {
    question: `What does ${name} in transit mean?`,
    answer: "It means the package is moving through carrier facilities and has not yet reached the final delivery driver."
  },
  {
    question: `What should I do if ${name} status stops updating?`,
    answer: "Wait 24-48 hours for delayed scan posts, then contact the seller and carrier support if no new events appear."
  }
];

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
        ? "SpeedX Tracking Status Meanings Explained"
        : `${current.carrierName} Status Meanings Explained`,
    description:
      current.slug === "speedx"
        ? "What official SpeedX statuses mean: Shipping Label Created, Arrival at Destination Facility, Out for Delivery, and Attempted Delivery, plus next-step guides."
        : `Learn what each ${current.carrierName} tracking status means and what to do for delayed, exception, or delivered scans.`,
    path: `/carriers/${carrier}/status`,
    robots: current.slug === "speedx" ? undefined : { index: false, follow: true }
  });
}

const officialStatuses = [
  {
    name: "Shipping Label Created",
    body: "The shipping label has been created, but the parcel may not have been picked up or first-scanned yet. Quiet time after this event is common.",
    href: "/blog/speedx-label-created-no-movement",
    label: "Shipping Label Created with no movement"
  },
  {
    name: "Arrival at Destination Facility",
    body: "The parcel reached a local facility that serves the delivery area. Local sorting usually happens before an Out for Delivery scan.",
    href: "/blog/speedx-arrived-at-facility-meaning",
    label: "Arrival at Destination Facility explained"
  },
  {
    name: "Out for Delivery",
    body: "The parcel is on a local route for an attempt, usually the same day. Route overflow or access issues can push the stop later or to the next day.",
    href: "/blog/speedx-out-for-delivery-but-not-delivered",
    label: "Out for Delivery but not delivered"
  },
  {
    name: "Attempted Delivery",
    body: "A delivery attempt was made but the parcel was not left. Check notices, access instructions, and the official tracker for a reattempt or pickup option.",
    href: "/blog/speedx-attempted-delivery-what-next",
    label: "What to do after Attempted Delivery"
  },
  {
    name: "Delivered",
    body: "SpeedX has recorded the delivery as complete. If you cannot find the parcel, use the delivered-but-not-received checklist and look for a proof-of-delivery photo on the official tracker.",
    href: "/guides/delivered-not-received",
    label: "Delivered but not received checklist"
  },
  {
    name: "Exception or delayed delivery",
    body: "An exception means something needs review, such as an address issue, weather, customs, or an operational hold. Use the exception-codes guide to interpret common messages.",
    href: "/blog/speedx-delivery-exception-codes",
    label: "SpeedX delivery exception codes"
  },
  {
    name: "Departed a facility",
    body: "A departed-facility event means the parcel left a hub and is moving to the next stop. Public scans can pause during linehaul even when the parcel is moving.",
    href: "/blog/speedx-departed-facility-no-update",
    label: "Departed facility with no new update"
  },
  {
    name: "Returned to sender",
    body: "The parcel is going back to the shipper. Confirm with the seller before reordering, and keep screenshots of the return events.",
    href: "/blog/speedx-returned-to-sender",
    label: "SpeedX returned to sender guide"
  }
];

export default async function CarrierStatusPage({ params }: { params: Promise<{ carrier: string }> }) {
  const { carrier } = await params;
  const current = getCarrierBySlug(carrier);

  if (!current) {
    notFound();
  }

  const faqs = current.slug === "speedx" ? speedxFaqs : genericFaqs(current.carrierName);

  return (
    <div className="container-page py-10">
      <JsonLd
        data={
          webPageSchema({
            path: `/carriers/${current.slug}/status`,
            title: current.slug === "speedx" ? "SpeedX Tracking Status Meanings" : `${current.carrierName} Tracking Status Meanings`,
            description:
              current.slug === "speedx"
                ? "Official SpeedX status names explained, with links to detailed next-step guides."
                : `Understand ${current.carrierName} tracking statuses, including in transit, out for delivery, delivered, and exception messages.`
          })
        }
      />
      <JsonLd data={faqSchema(faqs)} />
      <PageTrail
        items={[
          { name: "Home", path: "/" },
          { name: "Carriers", path: "/carriers" },
          { name: current.carrierName, path: `/carriers/${current.slug}` },
          { name: "Status", path: `/carriers/${current.slug}/status` }
        ]}
      />
      <h1 className="text-3xl font-bold">
        {current.slug === "speedx" ? "SpeedX Tracking Status Meanings" : `${current.carrierName} Tracking Status Meanings`}
      </h1>
      {current.slug === "speedx" ? (
        <>
          <p className="mt-2 text-slate-700">
            This is the canonical SpeedX status guide on this site. It uses official SpeedX status names where SpeedX tracking and support materials use them, then links each one to a longer next-step article. This site is an independent guide, not the SpeedX carrier.
          </p>
          <p className="mt-3 text-sm text-slate-700">
            Confirm live wording on the{" "}
            <a href={OFFICIAL_TRACKER} className="font-semibold text-brand-700 hover:underline" target="_blank" rel="noopener noreferrer">
              official SpeedX tracker
            </a>{" "}
            or with SpeedX support if a scan uses different language. For general logistics words such as linehaul or final mile, use the{" "}
            <Link href="/shipping-terms" className="font-semibold text-brand-700 hover:underline">
              shipping terms glossary
            </Link>
            .
          </p>

          <section className="mt-8 section-card">
            <h2 className="text-xl font-semibold">Official SpeedX status names</h2>
            <p className="mt-3 text-sm text-slate-700">
              SpeedX tracking and support pages use names such as Shipping Label Created, Arrival at Destination Facility, Out for Delivery, and Attempted Delivery. The entries below explain the usual meaning and point to the in-depth post for that status.
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {officialStatuses.map((status) => (
                <article key={status.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-semibold text-slate-900">{status.name}</h3>
                  <p className="mt-2 text-sm text-slate-700">{status.body}</p>
                  <p className="mt-3 text-sm font-semibold text-brand-700">
                    <Link href={status.href} className="hover:underline">
                      {status.label}
                    </Link>
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-8 section-card">
            <h2 className="text-xl font-semibold">Related statuses and next steps</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>
                Customs delays:{" "}
                <Link href="/blog/speedx-customs-delay-guide" className="font-semibold text-brand-700 hover:underline">
                  SpeedX customs delay guide
                </Link>
              </li>
              <li>
                Tracking number not found or not working:{" "}
                <Link href="/blog/speedx-tracking-number-not-found" className="font-semibold text-brand-700 hover:underline">
                  SpeedX tracking number not working
                </Link>
              </li>
              <li>
                Proof-of-delivery photo after a Delivered scan:{" "}
                <Link href="/blog/speedx-proof-of-delivery-photo" className="font-semibold text-brand-700 hover:underline">
                  how to see a SpeedX proof-of-delivery photo
                </Link>
              </li>
              <li>
                Out for Delivery meaning hub:{" "}
                <Link href="/speedx-out-for-delivery" className="font-semibold text-brand-700 hover:underline">
                  SpeedX out for delivery
                </Link>
              </li>
              <li>
                Delay in transit:{" "}
                <Link href="/guides/speedx-delay-in-transit-meaning" className="font-semibold text-brand-700 hover:underline">
                  SpeedX delay in transit meaning
                </Link>
              </li>
              <li>
                Issue reported:{" "}
                <Link href="/guides/speedx-issue-reported-meaning" className="font-semibold text-brand-700 hover:underline">
                  SpeedX issue reported meaning
                </Link>
              </li>
              <li>
                Last mile enroute:{" "}
                <Link href="/guides/speedx-last-mile-enroute-meaning" className="font-semibold text-brand-700 hover:underline">
                  SpeedX last mile enroute meaning
                </Link>
              </li>
              <li>
                Hubs and facilities:{" "}
                <Link href="/guides/speedx-hubs-and-facilities" className="font-semibold text-brand-700 hover:underline">
                  SpeedX hubs and facilities explained
                </Link>
              </li>
            </ul>
          </section>

          <section className="mt-8 section-card">
            <h2 className="text-xl font-semibold">FAQ</h2>
            <div className="mt-4 space-y-4">
              {speedxFaqs.map((faq) => (
                <article key={faq.question}>
                  <h3 className="font-semibold text-slate-900">{faq.question}</h3>
                  <p className="mt-1 text-sm text-slate-700">{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>
        </>
      ) : (
        <>
          <p className="mt-2 text-slate-700">
            Understand what each shipment update means and what action to take next. This page helps you read current tracking events more accurately and avoid premature escalation.
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>Label Created: shipment details submitted, parcel may not be picked up yet.</li>
            <li>In Transit: moving between processing and destination facilities.</li>
            <li>Out for Delivery: final delivery attempt is scheduled.</li>
            <li>Delivered: package marked as completed delivery.</li>
            <li>Exception: issue related to address, weather, customs, or operations.</li>
          </ul>
        </>
      )}

      {current.slug === "speedx" ? (
        <TopicAuthorityLinks activeCluster="out-for-delivery" title="Out for delivery cluster links" />
      ) : null}
      <SiteLinkHub currentPath={`/carriers/${current.slug}/status`} />
    </div>
  );
}
