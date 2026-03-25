# CTR Rescue Intent Map (Top Landing Pages)

This map prevents keyword cannibalization by assigning one dominant SERP intent per high-impact page.

| URL | Primary Intent | Primary Keyword Target | Secondary Keywords | Snippet Angle | Avoid Targeting (Owned By) |
| --- | --- | --- | --- | --- | --- |
| / | Broad homepage + trust | SpeedX tracking | speed x tracking, SpeedX tracking number | Live status + ETA + troubleshooting in one place | Deep support/contact queries (owned by /carriers/speedx/contact) |
| /track-package | Transactional lookup | track SpeedX package | track SpeedX tracking number, SpeedX live tracking | Instant lookup action | Broad educational explainers (owned by /carriers/speedx and /guides) |
| /carriers/speedx | Core carrier overview | SpeedX tracking guide | SpeedX status, SpeedX delivery time, SpeedX support | One-page hub for status + ETA + support | Pure status definition intent (owned by /carriers/speedx/status) |
| /carriers/speedx/status | Informational status interpretation | SpeedX status meanings | SpeedX in transit meaning, SpeedX exception | Explain each status + next action | Delivery-time intent (owned by /carriers/speedx/delivery-time) |
| /carriers/speedx/delivery-time | ETA comparison intent | SpeedX delivery time | SpeedX delivery estimate, domestic vs international | Realistic ETA ranges + delay causes | Support contact intent (owned by /carriers/speedx/contact) |
| /carriers/speedx/contact | Support escalation intent | SpeedX contact support | SpeedX contact number, SpeedX customer service | Official references + escalation workflow | Shein-specific queries (owned by /carriers/speedx/shein) |
| /carriers/speedx/shein | Marketplace-specific intent | SpeedX Shein tracking | Shein SpeedX delivery time, Shein order stuck | Shein handoff stages + delay fixes | General tracking tool intent (owned by /track-package) |
| /guides | Checklist library intent | SpeedX tracking guides | SpeedX troubleshooting guide | Actionable problem-solving index | News/opinion/blog style (owned by /blog) |
| /blog | Editorial content intent | SpeedX blog | SpeedX delivery guide, SpeedX troubleshooting article | Fresh insights + explainers | FAQ quick-answer intent (owned by /faq) |
| /faq | Quick question-answer intent | SpeedX FAQ | SPXCN meaning, delivered but not received | Fast answers in scan-friendly format | Long-form how-to content (owned by /guides and /blog) |

## Title/Meta Guardrails

- Use one primary query phrase in each title.
- Put action/value words in descriptions: track, fix, understand, check, compare.
- Keep page types distinct:
  - Tool page: lookup verbs (track, check now)
  - Guide page: fix/checklist verbs (resolve, steps)
  - FAQ page: answer verbs (what, why, how)
  - Hub page: compare/navigate verbs (browse, explore)

## Weekly CTR Review Loop

1. In Google Search Console, sort by impressions and find pages with CTR below 1.5%.
2. Check if those pages share query overlap with another URL from the site.
3. If overlap exists, narrow one page title to a clearer sub-intent.
4. Recheck 7-day vs previous 7-day after updates.
