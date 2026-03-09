import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const siteConfig = {
  name: "SpeedXTracking",
  description:
    "Track packages from major carriers with real-time status updates, delivery time estimates, and shipping help guides.",
  url: siteUrl
};

export function buildMetadata({
  title,
  description,
  path
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      siteName: siteConfig.name
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
