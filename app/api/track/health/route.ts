import { NextResponse } from "next/server";
import { trackingAdapters } from "@/lib/tracking/adapters";

type HealthStatus = "ok" | "warning";

export async function GET() {
  const provider = (process.env.TRACKING_PROVIDER || "auto").toLowerCase();

  const isMock = provider === "mock";
  const isAuto = provider === "auto";
  const isKnownAdapter = Boolean(trackingAdapters[provider]);
  const isGeneric = !isMock && !isAuto && !isKnownAdapter;

  const genericConfigured = Boolean(process.env.TRACKING_API_BASE_URL && process.env.TRACKING_API_KEY);
  const afterShipConfigured = Boolean(process.env.TRACKING_AFTERSHIP_API_KEY || process.env.TRACKING_API_KEY);
  const track17Configured = Boolean(process.env.TRACKING_17TRACK_API_KEY || process.env.TRACKING_API_KEY);

  const messages: string[] = [];
  let status: HealthStatus = "ok";

  if (isMock) {
    messages.push("Using mock tracking provider.");
  }

  if (provider === "auto") {
    if (afterShipConfigured) {
      messages.push("Auto mode will use AfterShip.");
    } else if (track17Configured) {
      messages.push("Auto mode will use 17TRACK.");
    } else if (genericConfigured) {
      messages.push("Auto mode will use generic provider.");
    } else {
      status = "warning";
      messages.push("Auto mode has no provider credentials configured.");
    }
  }

  if (provider === "17track" && !track17Configured) {
    status = "warning";
    messages.push("17TRACK provider selected but API key is missing.");
  }

  if (provider === "aftership" && !afterShipConfigured) {
    status = "warning";
    messages.push("AfterShip provider selected but API key is missing.");
  }

  if (isGeneric && !genericConfigured) {
    status = "warning";
    messages.push("Generic provider mode selected but TRACKING_API_BASE_URL or TRACKING_API_KEY is missing.");
  }

  if (status === "ok") {
    messages.push("Tracking API configuration looks valid.");
  }

  return NextResponse.json(
    {
      status,
      provider,
      mode: isMock ? "mock" : isAuto ? "auto" : isKnownAdapter ? "adapter" : "generic",
      checks: {
        genericConfigured,
        track17Configured,
        afterShipConfigured
      },
      messages,
      timestamp: new Date().toISOString()
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store"
      }
    }
  );
}
