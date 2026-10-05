import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo/site-url";

const baseUrl = siteUrl;
const aiBots = [
  "GPTBot",
  "ChatGPT-User",
  "Google-Extended",
  "GoogleOther",
  "ClaudeBot",
  "anthropic-ai",
  "Claude-Web",
  "PerplexityBot",
  "Bytespider",
  "Applebot-Extended"
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...aiBots.map((userAgent) => ({
        userAgent,
        allow: "/" as const
      })),
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"]
      }
    ],
    host: "speedxtracking.org",
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
