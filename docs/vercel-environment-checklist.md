# Vercel Environment Checklist

Set these variables in Vercel Project Settings for Production and Preview as needed.

## Required

- `NEXT_PUBLIC_SITE_URL` = your public domain (for canonical URLs and sitemap)

## Recommended

- `GOOGLE_SITE_VERIFICATION` = Search Console HTML tag token
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` = GA4 Measurement ID
- `NEXT_PUBLIC_GTM_ID` = GTM container ID

## Tracking provider

- `TRACKING_PROVIDER` = `mock` for testing or your provider name
- `TRACKING_API_BASE_URL` = provider endpoint URL
- `TRACKING_API_KEY` = provider API key

## Validation after deploy

- Open homepage and confirm page source includes Google verification meta tag when configured.
- Trigger tracking form submit and verify `track_submit` event.
- Load tracking results and verify `track_success` event.
- Confirm `/robots.txt` and `/sitemap.xml` are publicly accessible.
