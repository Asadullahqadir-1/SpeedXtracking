# SpeedXTracking SEO Site

SEO-first package tracking website built with Next.js.

## Run locally

```bash
npm install
npm run dev
```

## Environment

Copy `.env.example` to `.env.local` and set API keys if using a real tracking provider.

Tracking API backend variables:

- `TRACKING_PROVIDER=mock` for demo mode
- `TRACKING_PROVIDER=17track` to use 17TRACK adapter
- `TRACKING_PROVIDER=aftership` to use AfterShip adapter
- any other non-mock value uses generic provider mode
- `TRACKING_API_BASE_URL` provider endpoint URL
- `TRACKING_API_KEY` bearer token for provider auth
- `TRACKING_API_TIMEOUT_MS` request timeout for provider calls (default `6000`)

Provider-specific optional keys:

- `TRACKING_17TRACK_API_KEY`, `TRACKING_17TRACK_API_BASE_URL`
- `TRACKING_AFTERSHIP_API_KEY`, `TRACKING_AFTERSHIP_API_BASE_URL`

For Google Search Console verification, set:

- `GOOGLE_SITE_VERIFICATION` to your Search Console token

For analytics, set one or both:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` for GA4
- `NEXT_PUBLIC_GTM_ID` for Google Tag Manager

## Scripts

- `npm run dev` - start dev server
- `npm run build` - production build
- `npm run start` - run built app
- `npm run lint` - lint checks
- `npm run typecheck` - TypeScript checks
- `npm run seo:generate-longtail` - generate Batch 2/3 long-tail SEO CSV pages

## Production checklist

- Set `NEXT_PUBLIC_SITE_URL` to your live domain
- Add `GOOGLE_SITE_VERIFICATION` token
- Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` and/or `NEXT_PUBLIC_GTM_ID`
- Set tracking backend vars (`TRACKING_PROVIDER`, `TRACKING_API_BASE_URL`, `TRACKING_API_KEY`)
- Run `npm run typecheck` and `npm run build`
- Deploy and submit `/sitemap.xml` in Google Search Console
