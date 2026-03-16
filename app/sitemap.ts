import type { MetadataRoute } from "next";
import { carriers } from "@/lib/seo/carriers";
import { guides } from "@/content/guides";
import { blogPosts } from "@/content/blogs";
import { longTailIntentSlugs } from "@/lib/seo/longtail";
import { getFreshnessDate } from "@/lib/seo/freshness";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://speedxtracking.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/track-package", "/carriers", "/guides", "/blog", "/faq"];

  const policyPages = [
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
  const siteReviewedAt = new Date(getFreshnessDate("homepage"));
  const guidesReviewedAt = new Date(getFreshnessDate("guidesHub"));
  const carriersReviewedAt = new Date(getFreshnessDate("carriersHub"));

  const blogLastModifiedMap = new Map(blogPosts.map((post) => [`/blog/${post.slug}`, new Date(post.updatedDate)]));

  const guideLastModifiedMap = new Map(guides.map((guide) => [`/guides/${guide.slug}`, guidesReviewedAt]));

  function getPriority(path: string) {
    if (path === "") return 1;
    if (path === "/track-package") return 0.95;
    if (path === "/carriers" || path === "/guides" || path === "/blog") return 0.9;
    if (path.startsWith("/carriers/")) return 0.85;
    if (path.startsWith("/guides/") || path.startsWith("/blog/")) return 0.8;
    if (policyPages.includes(path)) return 0.4;
    return 0.7;
  }

  function getChangeFrequency(path: string): "daily" | "weekly" | "monthly" {
    if (path === "" || path === "/track-package") return "daily";
    if (path.startsWith("/carriers/") || path.startsWith("/guides/") || path.startsWith("/blog/")) return "weekly";
    if (policyPages.includes(path)) return "monthly";
    return "weekly";
  }

  function getLastModified(path: string) {
    if (path === "" || path === "/track-package") return siteReviewedAt;
    if (path === "/guides") return guidesReviewedAt;
    if (path === "/carriers") return carriersReviewedAt;
    if (path === "/blog") {
      const latestBlogDate = [...blogPosts]
        .map((post) => new Date(post.updatedDate).getTime())
        .sort((a, b) => b - a)[0];
      return latestBlogDate ? new Date(latestBlogDate) : siteReviewedAt;
    }
    if (blogLastModifiedMap.has(path)) return blogLastModifiedMap.get(path) as Date;
    if (guideLastModifiedMap.has(path)) return guideLastModifiedMap.get(path) as Date;
    if (path.startsWith("/carriers/")) return carriersReviewedAt;
    if (policyPages.includes(path)) return siteReviewedAt;
    return siteReviewedAt;
  }

  return [...staticPages, ...policyPages, ...carrierPages, ...guidePages, ...blogPages].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: getLastModified(path),
    changeFrequency: getChangeFrequency(path),
    priority: getPriority(path)
  }));
}
