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

/** @returns {import("next").MetadataRoute.Robots} */
export default function robots() {
  return {
    rules: [
      ...aiBots.map((userAgent) => ({
        userAgent,
        allow: "/"
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
