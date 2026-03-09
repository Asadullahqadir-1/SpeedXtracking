import type { MetadataRoute } from "next";
import { carriers } from "@/lib/seo/carriers";
import { guides } from "@/content/guides";
import { blogPosts } from "@/content/blogs";
import { longTailIntentSlugs } from "@/lib/seo/longtail";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/track-package",
    "/carriers",
    "/guides",
    "/blog",
    "/faq",
    "/shipping-terms",
    "/about",
    "/contact",
    "/editorial-policy",
    "/methodology",
    "/privacy",
    "/terms",
    "/disclaimer"
  ];

  const carrierPages = carriers.flatMap((carrier) => [
    `/carriers/${carrier.slug}`,
    `/carriers/${carrier.slug}/status`,
    `/carriers/${carrier.slug}/delivery-time`,
    `/carriers/${carrier.slug}/contact`,
    `/carriers/${carrier.slug}/shein`,
    ...longTailIntentSlugs.map((intent) => `/carriers/${carrier.slug}/${intent}`)
  ]);

  const guidePages = guides.map((guide) => `/guides/${guide.slug}`);
  const blogPages = blogPosts.map((post) => `/blog/${post.slug}`);

  return [...staticPages, ...carrierPages, ...guidePages, ...blogPages].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7
  }));
}
