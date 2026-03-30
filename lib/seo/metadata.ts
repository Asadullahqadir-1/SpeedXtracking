import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://speedxtracking.org";

export const siteConfig = {
  name: "Speed X Tracking",
  description:
    "Track SpeedX shipments instantly with live status updates, delivery estimates, and troubleshooting help for SpeedX orders.",
  url: siteUrl
};

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  robots
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  robots?: Metadata["robots"];
}): Metadata {
  const canonical = new URL(path, siteUrl).toString();
  const metaTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;

  const defaultRobots: Metadata["robots"] = {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  };

  return {
    title: metaTitle,
    description,
    category: "Shipping and Logistics",
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
    robots: robots ?? defaultRobots,
    keywords
  };
}
