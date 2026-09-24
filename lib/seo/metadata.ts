import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo/site-url";

export const siteConfig = {
  name: "SpeedXTracking",
    description:
    "Free SpeedX tracking for package status, delivery ETA, and troubleshooting help. Independent site — not affiliated with SpeedX.",
  url: siteUrl,
  defaultOgImage: "/images/official/speedx-coverage-map.webp"
};

const BRAND_MARKERS = ["SpeedXTracking", "Speed X Tracking", "SpeedX Tracking"];

function hasBrandInTitle(title: string) {
  return BRAND_MARKERS.some((marker) => title.includes(marker));
}

/** Keep SERP titles under ~60 chars so the brand still fits. */
function truncateTitle(title: string, max = 55) {
  if (title.length <= max) return title;
  const cut = title.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 35 ? cut.slice(0, lastSpace) : cut).trim()}…`;
}

export function buildMetadata({
  title,
  description,
  path,
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
  const baseTitle = hasBrandInTitle(title) ? title : `${truncateTitle(title)} | ${siteConfig.name}`;
  const metaTitle = baseTitle.length > 60 ? truncateTitle(baseTitle, 60) : baseTitle;
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
    // absolute prevents root layout template from doubling the brand
    title: { absolute: metaTitle },
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
          alt: "SpeedXTracking - SpeedX package tracking and delivery help"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description,
      images: [socialImage]
    },
    robots: robots ?? defaultRobots
  };
}
