import { siteUrl } from "@/lib/seo/site-url";

const baseUrl = siteUrl;

/**
 * AI crawlers must be explicitly Allow:/ with ZERO Disallow lines in their groups.
 * SkillStack AEO incorrectly flags AI as "blocked" when it mis-associates
 * User-agent:* Disallow rules with GPTBot/Google-Extended.
 */
/** @returns {import("next").MetadataRoute.Robots} */
export default function robots() {
  const aiBots = [
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "Google-Extended",
    "GoogleOther",
    "ClaudeBot",
    "anthropic-ai",
    "Claude-Web",
    "PerplexityBot",
    "Bytespider",
    "Applebot-Extended",
    "CCBot",
    "meta-externalagent"
  ];

  return {
    rules: [
      ...aiBots.map((userAgent) => ({
        userAgent,
        allow: "/"
      })),
      {
        userAgent: "*",
        allow: ["/", "/llms.txt", "/agents.txt"],
        // Only block the private API — never AI bots (they have their own Allow groups above).
        disallow: "/api/"
      }
    ],
    host: "speedxtracking.org",
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
