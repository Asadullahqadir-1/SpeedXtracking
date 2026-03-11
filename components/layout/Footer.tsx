import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Top Section */}
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/images/speed-x-tracking.webp" 
                alt="Speed X Tracking Logo" 
                width={40} 
                height={40}
                className="h-10 w-10"
              />
              <h2 className="text-xl font-bold">SpeedXTracking</h2>
            </div>
            <p className="text-sm text-slate-300">
              Real-time package tracking for 150+ carriers worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-slate-300 hover:text-white transition">Homepage</Link></li>
              <li><Link href="/track-package" className="text-slate-300 hover:text-white transition">Track Package</Link></li>
              <li><Link href="/carriers" className="text-slate-300 hover:text-white transition">All Carriers</Link></li>
              <li><Link href="/guides" className="text-slate-300 hover:text-white transition">Guides</Link></li>
            </ul>
          </div>

          {/* Popular Carriers */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Track Carriers</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/carriers/speedx" className="text-slate-300 hover:text-white transition">SpeedX</Link></li>
              <li><Link href="/carriers/dhl" className="text-slate-300 hover:text-white transition">DHL</Link></li>
              <li><Link href="/carriers/fedex" className="text-slate-300 hover:text-white transition">FedEx</Link></li>
              <li><Link href="/carriers/ups" className="text-slate-300 hover:text-white transition">UPS</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-slate-300 hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-slate-300 hover:text-white transition">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="text-slate-300 hover:text-white transition">Disclaimer</Link></li>
              <li><Link href="/editorial-policy" className="text-slate-300 hover:text-white transition">Editorial Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-700"></div>

      {/* Bottom Section */}
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-slate-400">
            © {currentYear} SpeedXTracking. All rights reserved.
          </p>
          <p className="text-sm text-slate-400">
            Independent tracking platform | Not affiliated with carriers
          </p>
        </div>
      </div>
    </footer>
  );
}
