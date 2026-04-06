import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://speedxtracking.org";

export const siteConfig = {
  name: "Speed X Tracking",
  description:
    "Track SpeedX shipments instantly with live status updates, delivery estimates, and troubleshooting help for SpeedX orders.",
  url: siteUrl,
  defaultOgImage: "/images/official/speedx-coverage-map.webp"
};

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  robots,
  image
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  robots?: Metadata["robots"];
  image?: string;
}): Metadata {
  const canonical = new URL(path, siteUrl).toString();
  const metaTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;
  const socialImage = new URL(image || siteConfig.defaultOgImage, siteUrl).toString();

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
      locale: "en_US",
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: "Speed X Tracking - live package tracking and delivery updates"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description,
      images: [socialImage]
    },
    robots: robots ?? defaultRobots,
    keywords
  };
}
