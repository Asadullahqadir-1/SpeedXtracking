import type { Metadata } from "next";
import { Suspense } from "react";
import "@/app/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { siteConfig } from "@/lib/seo/metadata";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Speed X Tracking | Track Your Orders And Shipments Quickly",
    template: "%s | Speed X Tracking"
  },
  description: siteConfig.description,
  applicationName: "Speed X Tracking",
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }]
  },
  openGraph: {
    title: "Speed X Tracking | Track Your Orders And Shipments Quickly",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Speed X Tracking | Track Your Orders And Shipments Quickly",
    description: siteConfig.description
  },
  robots: {
    index: true,
    follow: true
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5798356780873571" crossOrigin="anonymous"></script>
      </head>
      <body>
        <Suspense fallback={null}>
          <AnalyticsProvider />
        </Suspense>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
