import Link from "next/link";
import { FreshnessNote } from "@/components/seo/FreshnessNote";
import { TrackingForm } from "@/components/tracking/TrackingForm";
import { getFreshnessDate } from "@/lib/seo/freshness";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, websiteSchema } from "@/lib/seo/schema";
import { globalFaqs } from "@/content/faqs";
import { blogPosts } from "@/content/blogs";

export const revalidate = 86400;

export const metadata = buildMetadata({
  title: "Speed X Tracking | Track Your Orders And Shipments Quickly",
  description:
    "Track SpeedX shipments instantly with live status updates, delivery estimates, and troubleshooting help for SpeedX orders.",
  path: "/",
  keywords: [
    "SpeedX tracking",
    "track SpeedX package",
    "SpeedX tracking number",
    "SpeedX tracking status",
    "SpeedX Shein tracking",
    "package tracking"
  ]
});

export default function HomePage() {
  return (
    <div className="container-page py-6 sm:py-8 lg:py-10">
      <JsonLd data={websiteSchema()} />
      <JsonLd data={faqSchema(globalFaqs)} />

      {/* Hero Section */}
      <section className="rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 p-5 sm:p-8 lg:p-12">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Track SpeedX Packages in Seconds
          </h1>
          <p className="mt-3 text-base text-slate-700 sm:mt-4 sm:text-lg">
            Enter your SpeedX tracking number to get real-time delivery updates, status scans, and estimated delivery information in one place.
          </p>
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-600">
            <span className="flex items-center gap-1.5">
              <svg className="h-5 w-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              Real-time updates
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-5 w-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              SpeedX-focused support
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
      <section className="mt-8 section-card bg-slate-50 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">SpeedX Tracking: Track SpeedX Packages Instantly</h2>
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
          <Link href="/carriers/speedx/status" className="btn-secondary">
            Check SpeedX Status
          </Link>
          <Link href="/carriers/speedx/delivery-time" className="btn-secondary">
            SpeedX Delivery Times
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 text-center">
          <div className="text-3xl font-bold text-blue-900">1</div>
          <div className="mt-1 text-sm font-medium text-blue-700">Dedicated Carrier Focus</div>
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
      <section className="mt-8 section-card p-5 sm:p-6">
        <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">How Package Tracking Works</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-lg font-bold text-brand-700">1</div>
            <div>
              <h3 className="font-semibold text-slate-900">Enter Tracking Number</h3>
              <p className="mt-1 text-sm text-slate-600">
                Paste your SpeedX tracking number from your order confirmation email or delivery notification.
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

      <section className="mt-8 section-card p-5 sm:p-6">
        <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Popular SpeedX Resources</h2>
        <p className="mt-2 text-slate-600">Go directly to the most useful SpeedX tracking and support pages.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Link href="/carriers/speedx" className="group rounded-xl border-2 border-slate-200 p-4 transition-all hover:border-brand-500 hover:shadow-md">
            <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">SpeedX Overview</h3>
            <p className="mt-1 text-xs text-slate-600">Tracking basics, support links, and ETA guidance</p>
            <span className="mt-2 inline-block text-xs font-medium text-brand-600">Open hub →</span>
          </Link>
          <Link href="/carriers/speedx/status" className="group rounded-xl border-2 border-slate-200 p-4 transition-all hover:border-brand-500 hover:shadow-md">
            <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">Status Meanings</h3>
            <p className="mt-1 text-xs text-slate-600">Understand in transit, exception, and delivered scans</p>
            <span className="mt-2 inline-block text-xs font-medium text-brand-600">Check statuses →</span>
          </Link>
          <Link href="/carriers/speedx/delivery-time" className="group rounded-xl border-2 border-slate-200 p-4 transition-all hover:border-brand-500 hover:shadow-md">
            <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">Delivery Times</h3>
            <p className="mt-1 text-xs text-slate-600">Review domestic and international SpeedX timelines</p>
            <span className="mt-2 inline-block text-xs font-medium text-brand-600">View ETA guide →</span>
          </Link>
          <Link href="/carriers/speedx/contact" className="group rounded-xl border-2 border-slate-200 p-4 transition-all hover:border-brand-500 hover:shadow-md">
            <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">Support Contact</h3>
            <p className="mt-1 text-xs text-slate-600">Find the right SpeedX support channel for delays and claims</p>
            <span className="mt-2 inline-block text-xs font-medium text-brand-600">Get help →</span>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mt-8 section-card bg-gradient-to-br from-slate-50 to-slate-100 p-5 sm:p-6">
        <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Why Track With Us?</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-start gap-3">
            <div className="mt-1 rounded-lg bg-brand-100 p-2">
              <svg className="h-6 w-6 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Lightning Fast Results</h3>
              <p className="mt-1 text-sm text-slate-600">Get SpeedX tracking updates quickly without login friction or carrier-directory clutter.</p>
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
              <p className="mt-1 text-sm text-slate-600">Track domestic and international SpeedX shipments with clearer status context and delivery guidance.</p>
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
      <section className="mt-8 section-card p-5 sm:p-6">
        <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Common Tracking Problems?</h2>
        <p className="mt-2 text-slate-600">Quick solutions for the most frequent delivery issues:</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/guides/package-not-updating" className="group rounded-lg border-2 border-slate-200 p-4 transition-all hover:border-brand-500 hover:bg-brand-50">
            <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">📦 Tracking Not Updating</h3>
            <p className="mt-1 text-sm text-slate-600">Why tracking stalls and when to take action</p>
          </Link>
          <Link href="/shipping-terms" className="group rounded-lg border-2 border-slate-200 p-4 transition-all hover:border-brand-500 hover:bg-brand-50">
            <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">⏰ Package Delayed</h3>
            <p className="mt-1 text-sm text-slate-600">Steps to resolve unexpected shipping delays</p>
          </Link>
          <Link href="/guides/delivered-not-received" className="group rounded-lg border-2 border-slate-200 p-4 transition-all hover:border-brand-500 hover:bg-brand-50">
            <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">❌ Delivered But Missing</h3>
            <p className="mt-1 text-sm text-slate-600">What to do if package shows delivered but isn't there</p>
          </Link>
          <Link href="/guides/how-to-track-packages" className="group rounded-lg border-2 border-slate-200 p-4 transition-all hover:border-brand-500 hover:bg-brand-50">
            <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">📋 Status Meanings</h3>
            <p className="mt-1 text-sm text-slate-600">Decode in transit, out for delivery, and more</p>
          </Link>
          <Link href="/carriers/speedx/shein" className="group rounded-lg border-2 border-slate-200 p-4 transition-all hover:border-brand-500 hover:bg-brand-50">
            <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">🛍️ Shein Orders via SpeedX</h3>
            <p className="mt-1 text-sm text-slate-600">Track Shein packages shipped with SpeedX</p>
          </Link>
          <Link href="/carriers/speedx/contact" className="group rounded-lg border-2 border-slate-200 p-4 transition-all hover:border-brand-500 hover:bg-brand-50">
            <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">📞 Contact SpeedX Support</h3>
            <p className="mt-1 text-sm text-slate-600">Phone number, hours, and escalation steps</p>
          </Link>
        </div>
      </section>

      <section className="mt-8 section-card p-5 sm:p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Latest Blog Articles</h2>
            <p className="mt-1 text-sm text-slate-600 sm:text-base">Fresh shipping insights and SEO-rich troubleshooting content.</p>
          </div>
          <Link href="/blog" className="text-sm font-semibold text-brand-700 hover:underline">
            View all blog posts
          </Link>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <article key={post.slug} className="rounded-xl border border-slate-200 p-4 hover:border-brand-500">
              <p className="text-xs font-semibold text-brand-700">{post.category}</p>
              <h3 className="mt-2 text-base font-semibold text-slate-900">{post.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{post.description}</p>
              <Link href={`/blog/${post.slug}`} className="mt-3 inline-block text-sm font-semibold text-brand-700 hover:underline">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Expanded FAQs - show 8 */}
      <section className="mt-8 section-card p-5 sm:p-6">
        <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Frequently Asked Questions</h2>
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
      <section className="mt-8 section-card bg-slate-50 p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">Recent Tracking Activity</h2>
        <p className="mt-1 text-sm text-slate-600">Live tracking searches from the last hour (tracking numbers anonymized)</p>
        <ul className="mt-4 space-y-2 text-sm">
          <li className="flex flex-col items-start gap-2 rounded-lg border border-slate-200 bg-white p-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-slate-700">SPX2GE0567•••••</span>
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">Out for Delivery</span>
            <span className="text-slate-500">New York, NY</span>
          </li>
          <li className="flex flex-col items-start gap-2 rounded-lg border border-slate-200 bg-white p-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-slate-700">1Z84W42•••••••</span>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">In Transit</span>
            <span className="text-slate-500">Columbus, OH</span>
          </li>
          <li className="flex flex-col items-start gap-2 rounded-lg border border-slate-200 bg-white p-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-slate-700">9400 11•••••••</span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">Delivered</span>
            <span className="text-slate-500">Phoenix, AZ</span>
          </li>
          <li className="flex flex-col items-start gap-2 rounded-lg border border-slate-200 bg-white p-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-slate-700">SPXSG123•••••</span>
            <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">At Facility</span>
            <span className="text-slate-500">Los Angeles, CA</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
