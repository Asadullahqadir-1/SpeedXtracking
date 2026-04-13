import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo/site-url";

const baseUrl = siteUrl;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"]
      }
    ],
    host: baseUrl,
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
