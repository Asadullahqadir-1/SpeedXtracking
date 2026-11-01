import { siteUrl } from "@/lib/seo/site-url";

const baseUrl = siteUrl;

/**
 * Explicit AI-bot Allow rules first so auditors (SkillStack AEO) and crawlers
 * see GPTBot / Google-Extended / ClaudeBot as permitted — never Disallow them.
 * Also block Cloudflare email-protection junk paths from wasting crawl budget.
 */
/** @returns {import("next").MetadataRoute.Robots} */
export default function robots() {
  const aiAllow = {
    allow: "/"
  };

  return {
    rules: [
      { userAgent: "GPTBot", ...aiAllow },
      { userAgent: "ChatGPT-User", ...aiAllow },
      { userAgent: "OAI-SearchBot", ...aiAllow },
      { userAgent: "Google-Extended", ...aiAllow },
      { userAgent: "GoogleOther", ...aiAllow },
      { userAgent: "ClaudeBot", ...aiAllow },
      { userAgent: "anthropic-ai", ...aiAllow },
      { userAgent: "Claude-Web", ...aiAllow },
      { userAgent: "PerplexityBot", ...aiAllow },
      { userAgent: "Bytespider", ...aiAllow },
      { userAgent: "Applebot-Extended", ...aiAllow },
      { userAgent: "CCBot", ...aiAllow },
      { userAgent: "meta-externalagent", ...aiAllow },
      {
        userAgent: "*",
        allow: ["/", "/llms.txt", "/agents.txt"],
        disallow: ["/api/", "/cdn-cgi/"]
      }
    ],
    host: "speedxtracking.org",
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
