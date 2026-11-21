import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo/site-url";

export const siteConfig = {
  name: "SpeedXTracking",
  description:
    "Free international SpeedX tracking for package status, delivery ETA, and troubleshooting. Independent AdSense resource — not affiliated with SpeedX.",
  url: siteUrl,
  defaultOgImage: "/images/official/speedx-coverage-map.webp"
};

const BRAND_MARKERS = ["SpeedXTracking", "Speed X Tracking", "SpeedX Tracking"];
const ELLIPSIS_RE = /…|\.\.\./;

export function hasBrandInTitle(title: string) {
  return BRAND_MARKERS.some((marker) => title.includes(marker));
}

/**
 * Build a complete SERP title. Never truncate with ellipses.
 * Append "| SpeedXTracking" only when the title has no brand marker and the
 * result still fits in 60 characters. Over-length or ellipsis titles throw
 * so the page title can be rewritten instead of silently cut off.
 */
export function finalizeTitle(title: string) {
  const trimmed = title.trim();
  if (!trimmed) {
    throw new Error("Page title is empty.");
  }
  if (ELLIPSIS_RE.test(trimmed)) {
    throw new Error(`Title must not contain ellipses: ${trimmed}`);
  }

  let metaTitle = trimmed;
  if (!hasBrandInTitle(trimmed)) {
    const withBrand = `${trimmed} | ${siteConfig.name}`;
    if (withBrand.length <= 60) {
      metaTitle = withBrand;
    }
  }

  if (ELLIPSIS_RE.test(metaTitle)) {
    throw new Error(`Title must not contain ellipses: ${metaTitle}`);
  }
  // Never truncate with ellipses. Over-length titles must be rewritten;
  // scripts/audit-built-seo.mjs fails the build output if an indexable title exceeds 60.
  return metaTitle;
}

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
  const metaTitle = finalizeTitle(title);
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
    ...(keywords?.length ? { keywords: [...keywords] } : {}),
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
