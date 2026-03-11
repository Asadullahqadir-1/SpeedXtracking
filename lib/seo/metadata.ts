import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const siteConfig = {
  name: "SpeedXTracking",
  description:
    "Track any package instantly with SpeedX Tracking. Get real-time updates for DHL, FedEx, UPS, USPS and 150+ global carriers in one fast tracking tool.",
  url: siteUrl
};

export function buildMetadata({
  title,
  description,
  path,
  keywords
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const canonical = new URL(path, siteUrl).toString();
  const metaTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;

  return {
    title: metaTitle,
    description,
    alternates: {
      canonical
    },
    openGraph: {
      title: metaTitle,
      description,
      type: "website",
      url: canonical,
      siteName: siteConfig.name,
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description
    },
    robots: {
      index: true,
      follow: true
    },
    keywords
  };
}
