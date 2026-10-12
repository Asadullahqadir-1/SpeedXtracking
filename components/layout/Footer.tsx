import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Top Section */}
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-5">
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
              SpeedX tracking help, delivery updates, and support guidance for e-commerce shipments. Independent resource — not affiliated with SpeedX.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-slate-300 hover:text-white transition">Homepage</Link></li>
              <li><Link href="/track-package" className="text-slate-300 hover:text-white transition">Track Package</Link></li>
              <li><Link href="/blog/speedx-delivery-time-by-region" className="text-slate-300 hover:text-white transition">Delivery Times Guide</Link></li>
              <li><Link href="/blog/shein-speedx-tracking-guide" className="text-slate-300 hover:text-white transition">Shein Tracking Guide</Link></li>
              <li><Link href="/topics" className="text-slate-300 hover:text-white transition">Topic Clusters</Link></li>
              <li><Link href="/carriers/speedx" className="text-slate-300 hover:text-white transition">SpeedX Hub</Link></li>
              <li><Link href="/guides" className="text-slate-300 hover:text-white transition">Guides</Link></li>
              <li><Link href="/faq" className="text-slate-300 hover:text-white transition">FAQ</Link></li>
              <li><Link href="/about" className="text-slate-300 hover:text-white transition">About</Link></li>
            </ul>
          </div>

          {/* SpeedX Resources */}
          <div>
            <h3 className="mb-4 font-semibold text-white">SpeedX Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/carriers/speedx" className="text-slate-300 hover:text-white transition">SpeedX</Link></li>
              <li><Link href="/speedx-delivery" className="text-slate-300 hover:text-white transition">SpeedX Delivery</Link></li>
              <li><Link href="/what-is-speedx" className="text-slate-300 hover:text-white transition">What is SpeedX?</Link></li>
              <li><Link href="/does-speedx-deliver-on-sunday" className="text-slate-300 hover:text-white transition">Sunday Delivery</Link></li>
              <li><Link href="/rastrear-paquete-speedx" className="text-slate-300 hover:text-white transition">Rastrear SpeedX</Link></li>
              <li><Link href="/topics/out-for-delivery" className="text-slate-300 hover:text-white transition">Out for Delivery</Link></li>
              <li><Link href="/topics/delivery-hours" className="text-slate-300 hover:text-white transition">Delivery Hours</Link></li>
              <li><Link href="/topics/speedx-tracking" className="text-slate-300 hover:text-white transition">Tracking & SPXCN</Link></li>
              <li><Link href="/carriers/speedx/status" className="text-slate-300 hover:text-white transition">Status Meanings</Link></li>
              <li><Link href="/carriers/speedx/contact" className="text-slate-300 hover:text-white transition">Contact Support</Link></li>
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
              <li><Link href="/methodology" className="text-slate-300 hover:text-white transition">Methodology</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Trusted References</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://speedx.io/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition">
                  SpeedX Official Website
                </a>
              </li>
              <li>
                <a
                  href="https://support.speedx.io/hc/en-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition"
                >
                  SpeedX Official Support Center
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/speedx-delivery/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition"
                >
                  SpeedX LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://consumer.ftc.gov/articles/online-shopping"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition"
                >
                  FTC Online Shopping Tips
                </a>
              </li>
              <li>
                <a
                  href="https://www.cbp.gov/trade/basic-import-export"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition"
                >
                  CBP Import &amp; Export Basics
                </a>
              </li>
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
            Independent SpeedX tracking resource | Not affiliated with SpeedX
          </p>
        </div>
      </div>
    </footer>
  );
}
