#!/usr/bin/env node
/**
 * Audit prerendered HTML in .next/server/app for indexable SEO hygiene:
 * exactly one H1, unique titles / H1s / descriptions, no ellipses in titles, title <= 60.
 *
 * Usage: node scripts/audit-built-seo.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.join(__dirname, "..");
const appDir = path.join(root, ".next", "server", "app");

if (!fs.existsSync(appDir)) {
  console.error("Missing .next/server/app. Run npm run build first.");
  process.exit(1);
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, files);
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      files.push(full);
    }
  }
  return files;
}

function decode(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, num) => String.fromCharCode(Number(num)));
}

function stripTags(html) {
  return decode(html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function routeFromFile(file) {
  const rel = path.relative(appDir, file).replace(/\\/g, "/");
  if (rel === "index.html") return "/";
  return `/${rel.replace(/\/index\.html$/, "").replace(/\.html$/, "")}`;
}

const skipRoutes = new Set(["/_not-found", "/404", "/_error"]);
const files = walk(appDir);
const rows = [];

for (const file of files) {
  const route = routeFromFile(file);
  if (skipRoutes.has(route) || route.startsWith("/_")) continue;
  const html = fs.readFileSync(file, "utf8");

  const robots = (html.match(/<meta[^>]+name=["']robots["'][^>]*>/i) || [""])[0].toLowerCase();
  const noindex = robots.includes("noindex") || /<meta[^>]+name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html);
  if (noindex) continue;

  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? stripTags(titleMatch[1]) : "";
  const descMatch = html.match(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i)
    || html.match(/<meta[^>]+content=["']([^"']*)["'][^>]*name=["']description["'][^>]*>/i);
  const description = descMatch ? decode(descMatch[1]).trim() : "";
  const h1Matches = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  const h1s = h1Matches.map((m) => stripTags(m[1])).filter(Boolean);

  rows.push({ route, title, description, h1Count: h1s.length, h1s, file });
}

rows.sort((a, b) => a.route.localeCompare(b.route));

const issues = [];
const titles = new Map();
const h1texts = new Map();
const descs = new Map();

function addIssue(route, message) {
  issues.push(`${route}: ${message}`);
}

for (const row of rows) {
  if (!row.title) addIssue(row.route, "missing title");
  if (/…|\.\.\./.test(row.title)) addIssue(row.route, `title contains ellipsis: "${row.title}"`);
  if (row.title.length > 60) addIssue(row.route, `title is ${row.title.length} chars (>60): "${row.title}"`);
  if (!row.description) addIssue(row.route, "missing meta description");
  if (row.description && (row.description.length < 140 || row.description.length > 160)) {
    addIssue(row.route, `meta description is ${row.description.length} chars (target 140-160): "${row.description}"`);
  }
  if (row.h1Count !== 1) addIssue(row.route, `H1 count is ${row.h1Count} (expected 1): ${JSON.stringify(row.h1s)}`);
  if (row.h1s[0]) {
    const list = h1texts.get(row.h1s[0]) || [];
    list.push(row.route);
    h1texts.set(row.h1s[0], list);
  }
  if (row.title) {
    const list = titles.get(row.title) || [];
    list.push(row.route);
    titles.set(row.title, list);
  }
  if (row.description) {
    const list = descs.get(row.description) || [];
    list.push(row.route);
    descs.set(row.description, list);
  }
}

for (const [title, routes] of titles) {
  if (routes.length > 1) addIssue(routes.join(" & "), `duplicate title "${title}"`);
}
for (const [h1, routes] of h1texts) {
  if (routes.length > 1) addIssue(routes.join(" & "), `duplicate H1 "${h1}"`);
}
for (const [desc, routes] of descs) {
  if (routes.length > 1) addIssue(routes.join(" & "), `duplicate meta description`);
}

const reportDir = path.join(root, "_seo_diag");
try {
  fs.mkdirSync(reportDir, { recursive: true });
  const lines = [
    "route\ttitle_len\ttitle\tdesc_len\tdescription\th1_count\th1",
    ...rows.map((row) =>
      [row.route, String(row.title.length), row.title, String(row.description.length), row.description, String(row.h1Count), row.h1s.join(" | ")].join("\t")
    )
  ];
  fs.writeFileSync(path.join(reportDir, "built-seo-audit.tsv"), lines.join("\n"), "utf8");
} catch (err) {
  // Report folder is optional and should stay uncommitted.
}

console.log(`Audited ${rows.length} indexable HTML pages from ${appDir}`);
if (issues.length) {
  console.error(`FAILED with ${issues.length} issue(s):`);
  for (const issue of issues) console.error(" - " + issue);
  process.exit(1);
}

console.log("PASS: one unique H1 per page, unique titles and descriptions, no ellipses, titles <= 60 characters.");
