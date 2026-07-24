# Internal Linking Strategy - Speed X Tracking

## Overview
This document outlines the internal linking strategy to improve SEO authority flow and reduce thin content perception.

## Link Cluster Structure

### Hub Pages (Pillar Content)
Hub pages serve as topical authorities and should have the most internal links pointing to and from them:

1. **Homepage** (`/`)
   - Main entry point
   - Links to: Top guides, featured issues, carrier hubs, blog

2. **Track Package Hub** (`/track-package`)
   - Primary tracking action page
   - Links to: All carrier pages, common issues, supported carriers

3. **Guides Hub** (`/guides`)
   - Comprehensive tracking education
   - Links to: All individual guides, related issues, blog posts

4. **Carriers Hub** (`/carriers`)
   - Overview of all supported carriers
   - Links to: Individual carrier pages (DHL, UPS, FedEx, DPD, GLS, Hermes, SpeedX)

5. **Blog Hub** (`/blog`)
   - Articles and long-form content
   - Links to: Individual posts, related guides, related issues

## Content Tiers

### Tier 1: High-Value Programmatic Issue Pages
These pages address specific shipping problems and should have the most internal links:

- `/speedx-tracking-not-updating`
- `/speedx-delivered-but-not-received`
- `/speedx-package-stuck-in-transit`
- `/speedx-out-for-delivery-but-not-delivered`
- `/speedx-delivery-exception`
- `/speedx-label-created-no-update`
- `/speedx-missed-delivery-attempt`
- `/speedx-weekend-delivery`
- `/speedx-customs-clearance-delay`
- `/speedx-no-movement-for-5-days`
- `/speedx-lost-package-claim`
- `/speedx-invalid-tracking-number`
- `/speedx-updating-in-batches`
- `/speedx-package-returned-to-sender`
- `/speedx-at-facility-too-long`

**Linking strategy for Tier 1 pages:**
- Link to related issues (same category, similar problem)
- Link to relevant guides
- Link to carrier-specific pages when relevant
- Link from homepage in "Common Issues" section
- Link from guides when contextually relevant

### Tier 2: Contact & Support Pages
Support escalation pages with moderate linking:

- `/speedx-contact-number`
- `/speedx-customer-service`
- `/speedx-support-email`

**Linking strategy for Tier 2 pages:**
- Link from all issue pages (escalation flow)
- Link from guides when resolution needs support
- Link from homepage in "Support" section

### Tier 3: Carrier Pages
Individual carrier hubs (newly created):

- `/carriers/speedx`
- `/carriers/dhl`
- `/carriers/ups`
- `/carriers/fedex`
- `/carriers/dpd`
- `/carriers/gls`
- `/carriers/hermes`

**Linking strategy for Tier 3 pages:**
- Link from carriers hub
- Link from homepage
- Link from guides when carrier-specific
- Cross-link to similar carrier pages

### Tier 4: Thin Content (Noindexed)
These pages remain noindexed to reduce thin content signal:

- `/carriers/[carrier]/[intent]/` pages (e.g., `/carriers/speedx/delivery-time`)
- Examples: `/carriers/dhl/delivery-time`, `/carriers/ups/status`

**Note:** These pages serve user experience (direct answers) but don't need SEO authority.

## Linking Rules

### Internal Link Components

#### 1. LinkClusters Component (`components/seo/LinkClusters.tsx`)
**Render on:** All Tier 1 & Tier 2 pages

**Sections to include:**
- Related Issues (2-4 links)
- Related Guides (2-3 links)
- Other Carriers (3-5 links)

**Example for `/speedx-tracking-not-updating`:**
```
Related Issues:
- SpeedX No Movement For 5 Days
- SpeedX Label Created No Update

Related Guides:
- Understanding Package Tracking
- When To Escalate

Other Carriers:
- Track DHL Packages
- Track UPS Packages
- Track FedEx Packages
```

#### 2. Breadcrumb Navigation
**Render on:** All pages

**Format:**
- Home → Category → Page Title

**Examples:**
- Home → Issues → SpeedX Tracking Not Updating
- Home → Carriers → DHL
- Home → Guides → Delivery Time Tracking

#### 3. Contextual Inline Links
**Location:** In page content (body text)

**Rules:**
- Use primary keyword as anchor text when possible
- Link to most relevant 1-2 pages per 300 words
- Avoid excessive linking (< 5 inline links per page)
- Link to guides when explaining concepts
- Link to carrier pages when relevant

#### 4. Navigation Links
**Location:** Header, Footer, Sidebar

**Header Navigation:**
- Track Package (→ /track-package)
- Carriers (→ /carriers)
- Guides (→ /guides)
- Blog (→ /blog)
- FAQ (→ /faq)

**Footer Navigation:**
- Quick Links section
- Support section
- Popular Issues section
- Popular Carriers section

### Link Text Strategy

#### Anchor Text Types

1. **Branded (10-15% of links)**
   - "SpeedX Tracking"
   - "DHL Express"
   - "UPS Tracking"

2. **Primary Keyword (30-40% of links)**
   - "SpeedX tracking not updating"
   - "Track DHL packages"
   - "Delivery exception meaning"

3. **Secondary Keyword (20-30% of links)**
   - "Package tracking updates"
   - "Customs clearance delay"
   - "Missed delivery attempt"

4. **Descriptive (15-25% of links)**
   - "Related issues"
   - "Learn more"
   - "See our guide"

5. **Navigational (5-10% of links)**
   - "Go to guides"
   - "Back to carriers"

## Page-by-Page Linking Map

### `/speedx-tracking-not-updating`
- **Outbound links to:**
  - `/speedx-no-movement-for-5-days` (escalation)
  - `/speedx-label-created-no-update` (related issue)
  - `/speedx-contact-number` (support)
  - `/guides/package-tracking-101` (education)
  - `/carriers/speedx` (carrier info)

- **Inbound links from:**
  - Homepage (common issues)
  - `/guides/package-tracking-101`
  - `/speedx-no-movement-for-5-days`
  - `/carriers/speedx`

### `/carriers/dhl`
- **Outbound links to:**
  - `/carriers` (parent hub)
  - `/carriers/ups` (alternative carrier)
  - `/carriers/fedex` (alternative carrier)
  - `/guides/track-multiple-carriers` (education)
  - `/dhl-delivery-exception` (DHL-specific issue)

- **Inbound links from:**
  - `/carriers` (hub)
  - Homepage (popular carriers)
  - Relevant issue pages
  - Blog posts about DHL

### `/guides/[slug]`
- **Outbound links to:**
  - Related guides
  - Relevant issue pages
  - Relevant carrier pages
  - `/track-package` (CTA)

- **Inbound links from:**
  - Homepage
  - `/guides` (hub)
  - Related issue pages
  - Related guides

## Implementation Checklist

- [ ] Update all Tier 1 issue pages with LinkClusters component
- [ ] Add related links metadata to each issue page
- [ ] Update guide pages with contextual internal links
- [ ] Create carrier hub pages (DHL, UPS, FedEx, DPD, GLS, Hermes)
- [ ] Add carrier pages to navigation
- [ ] Update metadata.ts to support related page references
- [ ] Implement breadcrumb schema on all pages
- [ ] Add footer "Popular Issues" section (3-5 top pages)
- [ ] Add footer "Popular Carriers" section
- [ ] Review and remove any competing internal links to thin content pages
- [ ] Test link structure for crawlability (site crawl tool)

## Monitoring & Iteration

### Metrics to Track
1. **Internal link coverage** - % of pages with 3+ inbound links
2. **Authority flow** - Which pages accumulate the most link juice
3. **Click-through rate** - Which internal links users actually click
4. **Page ranking** - Track SERP position for target keywords

### Review Cadence
- **Monthly:** Analyze link distribution, identify orphaned pages
- **Quarterly:** Audit new content for proper linking
- **Semi-annually:** Review entire link cluster strategy for optimization

## SEO Impact Expected

- ✅ Reduced "thin content" signal (concentrated authority on high-value pages)
- ✅ Improved crawlability (clear path from hub to spoke pages)
- ✅ Better keyword relevance (contextual linking helps entity understanding)
- ✅ Increased CTR to support pages (strategic placement of help articles)
- ✅ Reduced bounce rate (users find related content easily)

---

**Last Updated:** 2026-07-24
**Owner:** SEO Team
**Status:** Active
