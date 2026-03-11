import { TrackingResponse } from "@/lib/seo/types";
import { TrackingError } from "@/lib/tracking/errors";
import { trackingAdapters } from "@/lib/tracking/adapters";

function buildMockTimeline(carrier: string) {
  return [
    {
      timestamp: "2026-03-08 09:12",
      location: "Origin Facility",
      status: "Shipment Picked Up",
      details: `${carrier} received your package from the shipper.`
    },
    {
      timestamp: "2026-03-09 14:40",
      location: "Transit Hub",
      status: "In Transit",
      details: "Package is moving between logistics centers."
    },
    {
      timestamp: "2026-03-10 07:55",
      location: "Destination Facility",
      status: "Out for Delivery",
      details: "Shipment is with a local driver for final delivery."
    }
  ];
}

type ProviderPayload = {
  carrier?: string;
  trackingNumber?: string;
  tracking_number?: string;
  currentStatus?: string;
  current_status?: string;
  eta?: string;
  timeline?: Array<{
    timestamp?: string;
    time?: string;
    location?: string;
    status?: string;
    details?: string;
    description?: string;
  }>;
  events?: Array<{
    timestamp?: string;
    time?: string;
    location?: string;
    status?: string;
    details?: string;
    description?: string;
  }>;
  confidence?: "high" | "medium" | "low";
};

async function fetchWithRetry(url: string, init: RequestInit, attempts = 2): Promise<Response> {
  let lastError: unknown;

  for (let attempt = 0; attempt <= attempts; attempt += 1) {
    try {
      const timeoutMs = Number(process.env.TRACKING_API_TIMEOUT_MS || 6000);
      const timeout = Number.isFinite(timeoutMs) && timeoutMs > 0 ? timeoutMs : 6000;
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(url, {
        ...init,
        signal: controller.signal,
        cache: "no-store"
      });

      clearTimeout(timer);

      if (response.status >= 500 && attempt < attempts) {
        await new Promise((resolve) => setTimeout(resolve, 200 * (attempt + 1)));
        continue;
      }

      return response;
    } catch (error) {
      lastError = error;

      if (attempt < attempts) {
        await new Promise((resolve) => setTimeout(resolve, 200 * (attempt + 1)));
        continue;
      }
    }
  }

  if (lastError instanceof Error && lastError.name === "AbortError") {
    throw new TrackingError("provider_timeout", "Tracking provider request timed out.", 504);
  }

  throw new TrackingError("provider_unavailable", "Tracking provider is unavailable.", 502);
}

function normalizeProviderPayload(
  payload: ProviderPayload,
  trackingNumber: string,
  carrier: string
): TrackingResponse {
  const timelineSource = payload.timeline ?? payload.events ?? [];

  const timeline = timelineSource.map((event) => ({
    timestamp: event.timestamp ?? event.time ?? new Date().toISOString(),
    location: event.location ?? "Unknown location",
    status: event.status ?? "Update",
    details: event.details ?? event.description ?? "No additional details"
  }));

  return {
    carrier: payload.carrier ?? carrier,
    trackingNumber: payload.trackingNumber ?? payload.tracking_number ?? trackingNumber,
    currentStatus: payload.currentStatus ?? payload.current_status ?? timeline[0]?.status ?? "In Transit",
    eta: payload.eta ?? "Estimated delivery unavailable",
    timeline,
    confidence: payload.confidence ?? "medium"
  };
}

async function fetchFromProvider({
  trackingNumber,
  carrier
}: {
  trackingNumber: string;
  carrier: string;
}): Promise<TrackingResponse> {
  const provider = (process.env.TRACKING_PROVIDER || "auto").toLowerCase();
  const adapter = trackingAdapters[provider];

  if (!adapter) {
    throw new TrackingError("provider_unavailable", `Unsupported tracking provider: ${provider}.`, 503);
  }

  const timeoutMs = Number(process.env.TRACKING_API_TIMEOUT_MS || 6000);

  return adapter.fetchTracking(
    {
      trackingNumber,
      carrier
    },
    {
      timeoutMs: Number.isFinite(timeoutMs) && timeoutMs > 0 ? timeoutMs : 6000,
      fetchWithRetry
    }
  );
}

async function fetchFromGenericProvider({
  trackingNumber,
  carrier
}: {
  trackingNumber: string;
  carrier: string;
}): Promise<TrackingResponse> {
  const baseUrl = process.env.TRACKING_API_BASE_URL;
  const apiKey = process.env.TRACKING_API_KEY;

  if (!baseUrl || !apiKey) {
    throw new TrackingError("provider_unavailable", "Tracking provider credentials are missing.", 503);
  }

  const endpoint = `${baseUrl}?trackingNumber=${encodeURIComponent(trackingNumber)}&carrier=${encodeURIComponent(carrier)}`;

  const response = await fetchWithRetry(endpoint, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Accept: "application/json"
    }
  });

  if (response.status === 401 || response.status === 403) {
    throw new TrackingError("provider_auth_error", "Tracking provider authentication failed.", 502);
  }

  if (response.status === 404) {
    throw new TrackingError("tracking_not_found", "Tracking number not found.", 404);
  }

  if (!response.ok) {
    throw new TrackingError("provider_unavailable", "Tracking provider returned an error.", 502);
  }

  const payload = (await response.json()) as ProviderPayload;
  return normalizeProviderPayload(payload, trackingNumber, carrier);
}

export async function getTrackingData({
  trackingNumber,
  carrier
}: {
  trackingNumber: string;
  carrier: string;
}): Promise<TrackingResponse> {
  const requestedProvider = (process.env.TRACKING_PROVIDER || "auto").toLowerCase();
  const hasAfterShip = Boolean(process.env.TRACKING_AFTERSHIP_API_KEY || process.env.TRACKING_API_KEY);
  const has17Track = Boolean(process.env.TRACKING_17TRACK_API_KEY || process.env.TRACKING_API_KEY);
  const hasGeneric = Boolean(process.env.TRACKING_API_BASE_URL && process.env.TRACKING_API_KEY);

  const provider =
    requestedProvider === "auto"
      ? hasAfterShip
        ? "aftership"
        : has17Track
          ? "17track"
          : hasGeneric
            ? "generic"
            : "unconfigured"
      : requestedProvider;

  if (provider === "17track" || provider === "aftership") {
    return fetchFromProvider({ trackingNumber, carrier });
  }

  if (provider === "mock") {
    return {
      carrier,
      trackingNumber,
      currentStatus: "Out for Delivery",
      eta: "Today by 8:00 PM",
      timeline: buildMockTimeline(carrier),
      confidence: "medium"
    };
  }

  if (provider === "generic") {
    return fetchFromGenericProvider({ trackingNumber, carrier });
  }

  throw new TrackingError(
    "provider_unavailable",
    "Tracking service is not configured. Add provider API keys to enable live tracking.",
    503
  );
}
