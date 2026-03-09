# Production Launch Checklist

## Pre-deploy

- Set `.env` values:
  - `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`
  - `TRACKING_PROVIDER` and tracking API credentials if using live provider
  - `GOOGLE_SITE_VERIFICATION` token
- Confirm legal pages are complete and brand-safe.
- Review carrier support URLs and update if changed.

## Validation

- Run:
  - `npm run typecheck`
  - `npm run lint`
  - `npm run build`
- Validate core pages render:
  - `/`
  - `/track-package`
  - `/carriers/speedx`
  - `/guides/package-not-updating`
- Test tracking endpoint:
  - `/api/track?trackingNumber=SPXTEST123&carrier=speedx`
- Test provider health endpoint:
  - `/api/track/health`

## SEO checks

- Confirm canonical tags resolve to production domain.
- Confirm `/robots.txt` and `/sitemap.xml` are accessible.
- Validate FAQ and breadcrumb schema on homepage and carrier pages.
- Ensure no-index is not set on public routes.

## Post-deploy

- Add property in Google Search Console.
- Submit sitemap: `https://yourdomain.com/sitemap.xml`.
- Request indexing for:
  - homepage
  - `/track-package`
  - `/carriers/speedx`
- Monitor indexing and coverage weekly for first month.
