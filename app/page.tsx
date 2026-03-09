import Link from "next/link";
import { FreshnessNote } from "@/components/seo/FreshnessNote";
import { TrackingForm } from "@/components/tracking/TrackingForm";
import { carriers } from "@/lib/seo/carriers";
import { getFreshnessDate } from "@/lib/seo/freshness";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, websiteSchema } from "@/lib/seo/schema";
import { globalFaqs } from "@/content/faqs";

export const revalidate = 86400;

export const metadata = buildMetadata({
  title: "SpeedX Tracking | Track Packages from 150+ Global Carriers Instantly",
  description:
    "Track SpeedX, DHL, FedEx, UPS, USPS, and 150+ carriers in one search. Get real-time status updates, delivery estimates, Shein order tracking, and expert troubleshooting guides.",
  path: "/"
});

export default function HomePage() {
  return (
    <div className="container-page py-10">
      <JsonLd data={websiteSchema()} />
      <JsonLd data={faqSchema(globalFaqs)} />

      {/* Hero Section with Universal Tracking */}
      <section className="rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 p-8 lg:p-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-slate-900 lg:text-5xl">
            Track Any Package in Seconds
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Enter your tracking number to get real-time delivery updates from SpeedX, DHL, FedEx, UPS, USPS, and 150+ global carriers - all in one search.
          </p>
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-600">
            <span className="flex items-center gap-1.5">
              <svg className="h-5 w-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              Real-time updates
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-5 w-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              150+ carriers
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-5 w-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              No signup required
            </span>
          </div>
          <FreshnessNote date={getFreshnessDate("homepage")} />
          <div className="mt-6">
            <TrackingForm />
          </div>
        </div>
      </section>

      {/* SpeedX-Focused Section */}
      <section className="mt-8 section-card bg-slate-50">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">SpeedX Tracking: Track SpeedX Packages Instantly</h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              SpeedX is a leading last-mile delivery carrier specializing in e-commerce shipments from Shein, Temu, and other online retailers. Our SpeedX tracking tool provides real-time status updates for all SpeedX tracking numbers (SPX, SPXSG, SPXCN formats). Get instant delivery estimates, current package location, and detailed scan history. Whether your SpeedX package is in transit, out for delivery, or stuck at a facility, you'll see exactly where it is and when it will arrive.
            </p>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Track SpeedX Shein orders with confidence: most domestic deliveries arrive within 3-5 business days, while international SpeedX shipments take 7-15 days depending on customs clearance. If your SpeedX tracking isn't updating, check our troubleshooting guides below for common solutions including weekend delays, customs holds, and address issues.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/carriers/speedx" className="btn-primary">
            SpeedX Tracking Hub
          </Link>
          <Link href="/carriers/speedx/package-tracking" className="btn-secondary">
            Track SpeedX Package
          </Link>
          <Link href="/carriers/speedx/tracking-status" className="btn-secondary">
            Check SpeedX Status
          </Link>
          <Link href="/carriers/speedx/delivery-time-estimate" className="btn-secondary">
            SpeedX Delivery Times
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 text-center">
          <div className="text-3xl font-bold text-blue-900">150+</div>
          <div className="mt-1 text-sm font-medium text-blue-700">Global Carriers</div>
        </div>
        <div className="rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-6 text-center">
          <div className="text-3xl font-bold text-green-900">10M+</div>
          <div className="mt-1 text-sm font-medium text-green-700">Packages Tracked</div>
        </div>
        <div className="rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-6 text-center">
          <div className="text-3xl font-bold text-purple-900">24/7</div>
          <div className="mt-1 text-sm font-medium text-purple-700">Real-Time Updates</div>
        </div>
        <div className="rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 p-6 text-center">
          <div className="text-3xl font-bold text-orange-900">95%+</div>
          <div className="mt-1 text-sm font-medium text-orange-700">Accuracy Rate</div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mt-8 section-card">
        <h2 className="text-2xl font-bold text-slate-900">How Package Tracking Works</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-lg font-bold text-brand-700">1</div>
            <div>
              <h3 className="font-semibold text-slate-900">Enter Tracking Number</h3>
              <p className="mt-1 text-sm text-slate-600">
                Paste your tracking number from order confirmation email or carrier notification. Works with all major formats.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-lg font-bold text-brand-700">2</div>
            <div>
              <h3 className="font-semibold text-slate-900">Get Real-Time Status</h3>
              <p className="mt-1 text-sm text-slate-600">
                See current location, delivery estimate, scan history, and next expected update within seconds.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-lg font-bold text-brand-700">3</div>
            <div>
              <h3 className="font-semibold text-slate-900">Troubleshoot Issues</h3>
              <p className="mt-1 text-sm text-slate-600">
                Access expert guides for delayed packages, missing deliveries, customs holds, and status meanings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Carriers - Show all 11 */}
      <section className="mt-8 section-card">
        <h2 className="text-2xl font-bold text-slate-900">Track All Major Carriers</h2>
        <p className="mt-2 text-slate-600">Support for 150+ global shipping companies including:</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {carriers.map((carrier) => (
            <Link 
              key={carrier.slug} 
              href={`/carriers/${carrier.slug}`} 
              className="group rounded-xl border-2 border-slate-200 p-4 transition-all hover:border-brand-500 hover:shadow-md"
            >
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">
                {carrier.carrierName}
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                {carrier.domesticEta} domestic • {carrier.internationalEta} international
              </p>
              <span className="mt-2 inline-block text-xs font-medium text-brand-600">
                Track {carrier.carrierName} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mt-8 section-card bg-gradient-to-br from-slate-50 to-slate-100">
        <h2 className="text-2xl font-bold text-slate-900">Why Track With Us?</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-start gap-3">
            <div className="mt-1 rounded-lg bg-brand-100 p-2">
              <svg className="h-6 w-6 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Lightning Fast Results</h3>
              <p className="mt-1 text-sm text-slate-600">Get tracking updates in under 2 seconds from 150+ carriers worldwide without signup delays.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 rounded-lg bg-brand-100 p-2">
              <svg className="h-6 w-6 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Privacy Protected</h3>
              <p className="mt-1 text-sm text-slate-600">No account required. Your tracking searches are temporary and never stored permanently.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 rounded-lg bg-brand-100 p-2">
              <svg className="h-6 w-6 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Expert Troubleshooting</h3>
              <p className="mt-1 text-sm text-slate-600">Access detailed guides for delivery delays, missing packages, customs issues, and carrier contacts.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 rounded-lg bg-brand-100 p-2">
              <svg className="h-6 w-6 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Global Coverage</h3>
              <p className="mt-1 text-sm text-slate-600">Track international shipments across borders with real-time customs and handoff updates.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 rounded-lg bg-brand-100 p-2">
              <svg className="h-6 w-6 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Always Up to Date</h3>
              <p className="mt-1 text-sm text-slate-600">Our tracking database refreshes daily with the latest carrier API updates and delivery routes.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 rounded-lg bg-brand-100 p-2">
              <svg className="h-6 w-6 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Mobile Optimized</h3>
              <p className="mt-1 text-sm text-slate-600">Track packages on any device - desktop, tablet, or smartphone with full mobile responsiveness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting Quick Links */}
      <section className="mt-8 section-card">
        <h2 className="text-2xl font-bold text-slate-900">Common Tracking Problems?</h2>
        <p className="mt-2 text-slate-600">Quick solutions for the most frequent delivery issues:</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/guides/tracking-not-updating" className="group rounded-lg border-2 border-slate-200 p-4 transition-all hover:border-brand-500 hover:bg-brand-50">
            <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">📦 Tracking Not Updating</h3>
            <p className="mt-1 text-sm text-slate-600">Why tracking stalls and when to take action</p>
          </Link>
          <Link href="/guides/package-delayed" className="group rounded-lg border-2 border-slate-200 p-4 transition-all hover:border-brand-500 hover:bg-brand-50">
            <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">⏰ Package Delayed</h3>
            <p className="mt-1 text-sm text-slate-600">Steps to resolve unexpected shipping delays</p>
          </Link>
          <Link href="/guides/delivered-not-received" className="group rounded-lg border-2 border-slate-200 p-4 transition-all hover:border-brand-500 hover:bg-brand-50">
            <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">❌ Delivered But Missing</h3>
            <p className="mt-1 text-sm text-slate-600">What to do if package shows delivered but isn't there</p>
          </Link>
          <Link href="/guides/tracking-status-meanings" className="group rounded-lg border-2 border-slate-200 p-4 transition-all hover:border-brand-500 hover:bg-brand-50">
            <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">📋 Status Meanings</h3>
            <p className="mt-1 text-sm text-slate-600">Decode in transit, out for delivery, and more</p>
          </Link>
          <Link href="/carriers/speedx/shein-tracking" className="group rounded-lg border-2 border-slate-200 p-4 transition-all hover:border-brand-500 hover:bg-brand-50">
            <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">🛍️ Shein Orders via SpeedX</h3>
            <p className="mt-1 text-sm text-slate-600">Track Shein packages shipped with SpeedX</p>
          </Link>
          <Link href="/carriers/speedx/contact-number" className="group rounded-lg border-2 border slate-200 p-4 transition-all hover:border-brand-500 hover:bg-brand-50">
            <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">📞 Contact SpeedX Support</h3>
            <p className="mt-1 text-sm text-slate-600">Phone number, hours, and escalation steps</p>
          </Link>
        </div>
      </section>

      {/* Expanded FAQs - show 8 */}
      <section className="mt-8 section-card">
        <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {globalFaqs.slice(0, 8).map((faq) => (
            <article key={faq.question} className="rounded-lg border border-slate-200 p-5 hover:border-brand-300 hover:bg-brand-50/30">
              <h3 className="font-semibold text-slate-900">{faq.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/faq" className="btn-primary">
            View All {globalFaqs.length} FAQs
          </Link>
        </div>
      </section>

      {/* Recent Activity Widget */}
      <section className="mt-8 section-card bg-slate-50">
        <h2 className="text-xl font-semibold text-slate-900">Recent Tracking Activity</h2>
        <p className="mt-1 text-sm text-slate-600">Live tracking searches from the last hour (tracking numbers anonymized)</p>
        <ul className="mt-4 space-y-2 text-sm">
          <li className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-3">
            <span className="font-mono text-slate-700">SPX2GE0567•••••</span>
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">Out for Delivery</span>
            <span className="text-slate-500">New York, NY</span>
          </li>
          <li className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-3">
            <span className="font-mono text-slate-700">1Z84W42•••••••</span>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">In Transit</span>
            <span className="text-slate-500">Columbus, OH</span>
          </li>
          <li className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-3">
            <span className="font-mono text-slate-700">9400 11•••••••</span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">Delivered</span>
            <span className="text-slate-500">Phoenix, AZ</span>
          </li>
          <li className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-3">
            <span className="font-mono text-slate-700">SPXSG123•••••</span>
            <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">At Facility</span>
            <span className="text-slate-500">Los Angeles, CA</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
