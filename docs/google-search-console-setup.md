# Google Search Console Setup

## 1) Verify site ownership

This app supports meta-tag verification via environment variable.

- Open Search Console and add your domain property.
- Choose **HTML tag** verification.
- Copy the token value.
- Set in environment:

```bash
GOOGLE_SITE_VERIFICATION=your_token_here
```

- Redeploy site.
- Click **Verify** in Search Console.

## 2) Submit sitemap

After deployment, submit:

- `https://yourdomain.com/sitemap.xml`

## 3) Priority URL submission

Request indexing for:

- `/`
- `/track-package`
- `/carriers/speedx`
- `/carriers/dhl`
- `/guides/how-to-track-packages`
- `/faq`

## 4) Monitor performance

Track these metrics weekly:

- Impressions
- Average position
- CTR
- Indexed pages
- Crawl anomalies

## 5) Analytics event validation

After setting GA4 or GTM IDs, validate these events in DebugView or tag assistant:

- `track_submit`
- `track_success`
- `page_view`

## 6) Query clusters to monitor

- speedx tracking
- speedx tracking status
- speedx package tracking
- track speedx shipment
- speedx delivery time
- speedx contact number
