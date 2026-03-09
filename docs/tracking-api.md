# Tracking API (Tool Backend)

## Endpoint

- `GET /api/track?trackingNumber={id}&carrier={carrier}`
- `POST /api/track`
- `GET /api/track/health`

POST body:

```json
{
  "trackingNumber": "SPX2GE056720247932",
  "carrier": "speedx"
}
```

## Response shape

```json
{
  "carrier": "speedx",
  "trackingNumber": "SPX2GE056720247932",
  "currentStatus": "Out for Delivery",
  "eta": "Today by 8:00 PM",
  "timeline": [
    {
      "timestamp": "2026-03-10 07:55",
      "location": "Destination Facility",
      "status": "Out for Delivery",
      "details": "Shipment is with a local driver for final delivery."
    }
  ],
  "confidence": "medium"
}
```

## Error model

Errors return JSON:

```json
{
  "error": "Tracking number format is invalid.",
  "code": "invalid_input"
}
```

Possible `code` values:

- `invalid_input`
- `rate_limited`
- `provider_unavailable`
- `provider_timeout`
- `provider_auth_error`
- `tracking_not_found`
- `unexpected_error`

## Rate limiting

- In-memory limiter: `30` requests per minute per client IP key.
- Response headers:
  - `X-RateLimit-Remaining`
  - `X-RateLimit-Reset`

## Provider behavior

- `TRACKING_PROVIDER=mock`: deterministic demo timeline.
- `TRACKING_PROVIDER=17track`: uses 17TRACK adapter.
- `TRACKING_PROVIDER=aftership`: uses AfterShip adapter.
- Any other non-mock value: uses generic provider mode (`TRACKING_API_BASE_URL` + `TRACKING_API_KEY`).
- Retries on transient provider failures; maps external response into internal normalized schema.

## Provider env options

- Generic mode:
  - `TRACKING_API_BASE_URL`
  - `TRACKING_API_KEY`
- 17TRACK mode:
  - `TRACKING_17TRACK_API_KEY` (or fallback `TRACKING_API_KEY`)
  - `TRACKING_17TRACK_API_BASE_URL` (optional override)
- AfterShip mode:
  - `TRACKING_AFTERSHIP_API_KEY` (or fallback `TRACKING_API_KEY`)
  - `TRACKING_AFTERSHIP_API_BASE_URL` (optional override)

## Health check endpoint

`GET /api/track/health` returns config and provider readiness details.

Example response:

```json
{
  "status": "ok",
  "provider": "mock",
  "mode": "mock",
  "checks": {
    "genericConfigured": false,
    "track17Configured": false,
    "afterShipConfigured": false
  },
  "messages": ["Using mock tracking provider."],
  "timestamp": "2026-03-10T00:00:00.000Z"
}
```

## Production notes

- Replace in-memory limiter with Redis-based limiter for multi-instance deployments.
- Add provider-specific adapter for your selected service (17TRACK/AfterShip/etc) if payload shape differs.
- Keep API keys server-only and rotate periodically.
