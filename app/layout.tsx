import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Suspense } from "react";
import Script from "next/script";
import "@/app/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { GlobalJsonLd } from "@/components/seo/GlobalJsonLd";
import { siteConfig } from "@/lib/seo/metadata";

const ADSENSE_CLIENT_RAW = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "pub-7201356041713473";
const ADSENSE_CLIENT = ADSENSE_CLIENT_RAW.startsWith("ca-")
  ? ADSENSE_CLIENT_RAW
  : `ca-${ADSENSE_CLIENT_RAW}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "SpeedX Tracking — Check SPX Status & Delivery Updates",
    template: "%s | SpeedXTracking"
  },
  description: siteConfig.description,
  applicationName: "SpeedXTracking",
  authors: [{ name: "SpeedXTracking Editorial Team", url: siteConfig.url }],
  creator: "SpeedXTracking",
  publisher: "SpeedXTracking",
  category: "Shipping and Logistics",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }]
  },
  openGraph: {
    title: "SpeedX Tracking — Check SPX Status & Delivery Updates",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: "SpeedXTracking — free SpeedX package tracker"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "SpeedX Tracking — Check SPX Status & Delivery Updates",
    description: siteConfig.description,
    images: [siteConfig.defaultOgImage]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION
  },
  alternates: {
    canonical: siteConfig.url
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.17track.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        {/* Google AdSense Auto ads — required in <head> after site approval */}
        <Script
          id="adsense-init"
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <GlobalJsonLd />
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
