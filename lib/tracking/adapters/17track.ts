import { TrackingResponse } from "@/lib/seo/types";
import { TrackingError } from "@/lib/tracking/errors";
import { AdapterRequestContext, TrackingAdapter, TrackingRequestInput } from "@/lib/tracking/adapters/types";

type EventShape = {
  tm?: string;
  a?: string;
  z?: string;
  c?: string;
  status?: string;
  location?: string;
  description?: string;
};

function toTimeline(events: EventShape[] | undefined) {
  return (events ?? []).map((event) => ({
    timestamp: event.tm ?? new Date().toISOString(),
    location: event.a ?? event.location ?? "Unknown location",
    status: event.z ?? event.status ?? "Update",
    details: event.c ?? event.description ?? "No additional details"
  }));
}

function normalize17TrackPayload(payload: unknown, input: TrackingRequestInput): TrackingResponse {
  const root = payload as {
    data?: Array<{
      number?: string;
      track_info?: {
        latest_status?: { status?: string };
        tracking?: EventShape[];
      };
    }>;
  };

  const item = root.data?.[0];
  const timeline = toTimeline(item?.track_info?.tracking);

  if (!item) {
    throw new TrackingError("tracking_not_found", "Tracking number not found in 17TRACK response.", 404);
  }

  return {
    carrier: input.carrier,
    trackingNumber: item.number ?? input.trackingNumber,
    currentStatus: item.track_info?.latest_status?.status ?? timeline[0]?.status ?? "In Transit",
    eta: "Estimated delivery unavailable",
    timeline,
    confidence: "medium"
  };
}

function get17TrackConfig() {
  const apiKey = process.env.TRACKING_17TRACK_API_KEY || process.env.TRACKING_API_KEY;
  const baseUrl = process.env.TRACKING_17TRACK_API_BASE_URL || process.env.TRACKING_API_BASE_URL || "https://api.17track.net/track/v2/GetTrackInfo";

  if (!apiKey) {
    throw new TrackingError("provider_auth_error", "17TRACK API key is missing.", 503);
  }

  return {
    apiKey,
    baseUrl
  };
}

async function request17Track(input: TrackingRequestInput, ctx: AdapterRequestContext) {
  const config = get17TrackConfig();
  const response = await ctx.fetchWithRetry(
    config.baseUrl,
    {
      method: "POST",
      headers: {
        "17token": config.apiKey,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        data: [
          {
            number: input.trackingNumber,
            carrier: input.carrier
          }
        ]
      })
    },
    2
  );

  if (response.status === 401 || response.status === 403) {
    throw new TrackingError("provider_auth_error", "17TRACK authentication failed.", 502);
  }

  if (response.status === 404) {
    throw new TrackingError("tracking_not_found", "Tracking number not found.", 404);
  }

  if (!response.ok) {
    throw new TrackingError("provider_unavailable", "17TRACK returned an error.", 502);
  }

  return response.json();
}

export const adapter17Track: TrackingAdapter = {
  name: "17track",
  async fetchTracking(input, ctx) {
    const payload = await request17Track(input, ctx);
    return normalize17TrackPayload(payload, input);
  }
};
