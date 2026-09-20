const fs = require("fs");
const path = require("path");

const root = process.cwd();
const sitemap = fs.readFileSync(path.join(root, "app", "sitemap.ts"), "utf8");
const programmatic = fs.readFileSync(path.join(root, "content", "programmatic-pages.ts"), "utf8");
const robots = fs.readFileSync(path.join(root, "app", "robots.ts"), "utf8");

const failures = [];
const redirectSection = programmatic.match(/const redirectedProgrammaticSlugMap[\s\S]*?\n\]\);/);
const redirectSlugs = redirectSection
  ? [...redirectSection[0].matchAll(/\["([^"]+)"\s*,/g)].map((match) => match[1])
  : [];

for (const slug of redirectSlugs) {
  const literalPathPattern = new RegExp(`["']/${slug}["']`);
  if (literalPathPattern.test(sitemap)) {
    failures.push(`Redirect source appears literally in sitemap.ts: /${slug}`);
  }
}

const imageSources = [...programmatic.matchAll(/imageSrc:\s*"([^"]+)"/g)].map((match) => match[1]);
for (const source of new Set(imageSources)) {
  const assetPath = path.join(root, "public", source.replace(/^\//, ""));
  if (!fs.existsSync(assetPath)) {
    failures.push(`Programmatic image asset does not exist: ${source}`);
  }
}

if (!sitemap.includes("getIndexableProgrammaticPages")) {
  failures.push("Sitemap is not built from the indexable programmatic page set.");
}

if (!robots.includes('disallow: ["/api/"]')) {
  failures.push("robots.ts must continue to disallow the tracking API.");
}

if (failures.length > 0) {
  console.error("SEO integrity validation failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`SEO integrity validation passed (${redirectSlugs.length} redirect sources, ${new Set(imageSources).size} image assets checked).`);
