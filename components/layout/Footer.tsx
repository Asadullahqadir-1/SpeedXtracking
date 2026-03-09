import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
        <div>
          <h2 className="text-sm font-semibold text-slate-900">SpeedXTracking</h2>
          <p className="mt-2 text-sm text-slate-600">
            Independent package tracking help platform with carrier pages, status guides, and delivery support resources.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-slate-900">Top Pages</h2>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            <li><Link href="/">Homepage</Link></li>
            <li><Link href="/track-package">Track Package</Link></li>
            <li><Link href="/carriers/speedx">SpeedX Tracking</Link></li>
            <li><Link href="/guides">Shipping Guides</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-slate-900">Legal</h2>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
            <li><Link href="/disclaimer">Disclaimer</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
