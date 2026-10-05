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
      },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" }
    ],
    host: baseUrl.replace(/^https?:\/\//, ""),
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
