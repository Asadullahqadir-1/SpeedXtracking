const fs = require("fs");
const path = require("path");

const inputPath = process.argv[2] || path.join(process.cwd(), "data", "gsc-pages.csv");

function toNumber(value) {
  const clean = String(value || "")
    .replace(/,/g, "")
    .replace(/%/g, "")
    .trim();
  if (!clean) return 0;
  const parsed = Number(clean);
  return Number.isFinite(parsed) ? parsed : 0;
}

function parseCsv(content) {
  const lines = content.split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return [];
  const headers = lines[0].split(",").map((h) => h.trim().toLowerCase());

  return lines.slice(1).map((line) => {
    const cols = line.split(",");
    const row = {};
    headers.forEach((h, i) => {
      row[h] = (cols[i] || "").trim();
    });
    return {
      page: row.page || row.pages || row.url || "",
      clicks: toNumber(row.clicks),
      impressions: toNumber(row.impressions),
      ctr: toNumber(row.ctr),
      position: toNumber(row.position)
    };
  });
}

function classify(row) {
  if (!row.page) return { action: "skip", reason: "missing_page" };

  if (row.impressions >= 150 && row.position >= 4 && row.position <= 12 && row.ctr < 1.2) {
    return { action: "rewrite-title-description", reason: "high_impressions_low_ctr" };
  }

  if (row.impressions >= 80 && row.clicks <= 1 && row.position > 12 && row.position <= 30) {
    return { action: "expand-content-and-links", reason: "impressions_without_clicks" };
  }

  if (row.impressions < 20 && row.clicks === 0) {
    return { action: "prune-merge-or-noindex-review", reason: "low_value_candidate" };
  }

  return { action: "keep-and-monitor", reason: "stable" };
}

function main() {
  if (!fs.existsSync(inputPath)) {
    console.error(`Input CSV not found: ${inputPath}`);
    console.error("Export a GSC Pages report CSV first, then rerun.");
    process.exit(1);
  }

  const csv = fs.readFileSync(inputPath, "utf8");
  const rows = parseCsv(csv);

  if (rows.length === 0) {
    console.log("No rows parsed from CSV.");
    return;
  }

  const decisions = rows
    .map((row) => ({ ...row, ...classify(row) }))
    .sort((a, b) => b.impressions - a.impressions);

  console.log("page,clicks,impressions,ctr,position,action,reason");
  for (const row of decisions) {
    console.log(
      `${row.page},${row.clicks},${row.impressions},${row.ctr},${row.position},${row.action},${row.reason}`
    );
  }
}

main();
