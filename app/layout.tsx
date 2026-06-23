import type { Metadata } from "next";
import { Suspense } from "react";
import Script from "next/script";
import "@/app/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { siteConfig } from "@/lib/seo/metadata";

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "pub-5798356780873571";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Speed X Tracking | Track Your Orders And Shipments Quickly",
    template: "%s | Speed X Tracking"
  },
  description: siteConfig.description,
  applicationName: "Speed X Tracking",
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
    type: "website",
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Speed X Tracking homepage preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Speed X Tracking | Track Your Orders And Shipments Quickly",
    description: siteConfig.description,
    images: [siteConfig.defaultOgImage]
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
        {ADSENSE_CLIENT ? (
          <Script
            id="adsense-js"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
            strategy="beforeInteractive"
            crossOrigin="anonymous"
          />
        ) : null}
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
