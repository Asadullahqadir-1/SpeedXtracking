# SpeedXTracking — SEO Blog Writing Guidelines

Adapted from the JR Chauffeurs *Writing Guidelines.pdf* (meta · titles · keywords · full on-page optimisation). Use for every new or rewritten `/blog` article.

## 1. Core SEO checklist (always apply)

| # | Guideline | Done looks like |
|---|-----------|-----------------|
| 1 | Meta description | Unique **140–160** characters; primary keyword + clear benefit; matches intent; no duplicates |
| 2 | Titles | H1 = article title; SERP title: `{Title} \| SpeedXTracking Blog`; keyword near the front; not stuffed |
| 3 | Primary & secondary keywords | 1–2 primary + 3–5 secondary in `content/blog-seo.ts` and used naturally in H2s/body/FAQs |
| 4 | Fully optimised | Slug, canonical `/blog/{slug}`, H2 structure, **descriptive** internal links, 3–4 FAQs + FAQ schema, soft CTA to track, category/date/read time |

## 2. Titles

- Write for the search query first (e.g. “SpeedX Tracking Not Updating? 9 Real Fixes”).
- Keep SpeedX / SPXCN / Shein / status intent specific where relevant.
- Prefer clarity over cleverness; match SERP intent.
- Avoid ALL CAPS, excess punctuation, and keyword stuffing.

## 3. Meta description

- One unique description per URL.
- Include the primary keyword once, early or mid-sentence.
- State the benefit (fix / decode / escalate / track) and brand where natural.
- Write as a complete sentence that could appear under the blue link in Google.

## 4. Keyword roles

| Type | Role | Usage |
|------|------|--------|
| Primary | Main ranking target (1–2) | Title/H1, meta, first ~100 words, ≥1 H2, keywords array |
| Secondary | Related intent | H2s, body, FAQs — depth without cannibalising primary |
| Supporting | Long-tail | Natural mentions + descriptive internal link anchors |

Placement: hyphenated slug; canonical `/blog/{slug}`; do not force exact-match spam.

## 5. Fully optimised on-page structure

- Open with search intent in the first 1–2 paragraphs; introduce SpeedXTracking naturally as the free tracker/help guide.
- Use clear H2s that look like real questions or topic labels users scan for.
- Aim for substantial guides (~7–9 min read) with steps, checklists, or comparisons.
- Add **2–4+** internal links with descriptive anchors (never “read more” / “click here”).
- End with a soft CTA to `/track-package` — no hard spam.
- Stay brand-safe: independent resource, not affiliated with SpeedX; cite official support paths only.

### FAQ optimisation

- Answer the exact question in the first sentence.
- Reuse secondary keywords where natural.
- Keep answers factual for featured-snippet style queries.
- Wire FAQs through `content/blog-seo.ts` so detail pages emit FAQPage JSON-LD.

## 6. Production steps

1. Topic + keyword map (primary/secondary + intent).
2. Draft meta (title + 140–160 description) with the outline.
3. Outline H2s that fully cover the query.
4. Write/expand body in `content/blogs.ts`; keywords/FAQs/links in `content/blog-seo.ts`.
5. Wire-up check: listing + detail + sitemap share the same `blogPosts` source.
6. Quality gate before ship (below).

## 7. Quality gate before ship

| Check | Pass criteria |
|-------|----------------|
| Intent match | Title/H1/meta answer the same user question |
| Keyword coverage | Primary in title, meta, intro, H2; secondaries in body/FAQs |
| Uniqueness | No duplicate meta/title vs existing SpeedX blogs |
| Internal links | ≥2–4 relevant descriptive site links |
| Commercial/trust fit | Mentions real SpeedX help paths without overclaiming; independent disclaimer |
| Technical | Valid BlogPost fields; FAQs present; FAQ + Article schema on detail page |

## Source of truth

- Posts: `content/blogs.ts`
- Keywords / FAQs / related links: `content/blog-seo.ts`
- Detail renderer: `app/blog/[slug]/page.tsx`
