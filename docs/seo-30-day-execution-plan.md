# 30-Day SEO Execution Plan (SpeedXTracking)

## Goal
Increase qualified clicks by improving CTR on existing impressions, expanding long-tail coverage, strengthening internal link flow, and running weekly query/page pruning decisions from Google Search Console exports.

## Weekly Cadence

### Week 1: CTR and Internal Link Lift
- Rewrite titles and descriptions on highest-impression pages.
- Publish internal-link modules on homepage, blog hub, and guides hub.
- Export GSC Performance (queries + pages) baseline for last 28 days.

### Week 2: Deep Content Expansion Batch A
- Publish 4 long-tail pages mapped to recurring query patterns.
- Add each new page to relevant hub sections and related links.
- Request indexing for new URLs in URL Inspection.

### Week 3: Deep Content Expansion Batch B
- Publish 4 more long-tail pages.
- Refresh top 4 existing pages with clearer intros and action blocks.
- Add 5 citation listings and submit 3 outreach emails.

### Week 4: Pruning and Consolidation
- Run GSC export analysis script on page data.
- Prune weak pages with no strategic intent (merge, rewrite, or noindex candidates).
- Keep pages with impressions and improve CTR before pruning.

## Weekly KPI Targets
- CTR on pages in positions 4-12: +0.3 to +1.0 point.
- Net new indexed pages: +8.
- New referring domains: +3 to +6.
- Queries with clicks: +10% month-over-month.

## Export Workflow
1. In GSC Performance, export page report for last 28 days as CSV.
2. Save as `data/gsc-pages.csv`.
3. Run `npm run seo:gsc-analyze`.
4. Paste output into `docs/gsc-weekly-tracker-template.csv`.

## Pruning Rules
- Keep and optimize pages with impressions > 50 even if CTR is low.
- Rewrite pages with impressions > 150 and CTR < 1.2%.
- Merge pages with overlapping intent and weak impressions.
- Consider noindex only when page has no strategic value and no traffic trend.
