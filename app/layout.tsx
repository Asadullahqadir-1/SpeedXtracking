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
    default: "SpeedX Tracking | Track Packages from 150+ Carriers",
    template: "%s"
  },
  description: siteConfig.description,
  openGraph: {
    title: "SpeedX Tracking | Track Packages from 150+ Carriers",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SpeedX Tracking | Track Packages from 150+ Carriers",
    description: siteConfig.description
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
