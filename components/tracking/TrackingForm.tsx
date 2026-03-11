"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

type TrackingFormProps = {
  defaultCarrier?: string;
  compact?: boolean;
};

export function TrackingForm({ defaultCarrier = "speedx", compact = false }: TrackingFormProps) {
  const router = useRouter();
  const [trackingNumber, setTrackingNumber] = useState("");
  const carrier = defaultCarrier;

  return (
    <form
      className={`grid gap-3 ${compact ? "md:grid-cols-[1fr,auto]" : "md:grid-cols-[1fr,auto]"}`}
      onSubmit={(event) => {
        event.preventDefault();
        if (!trackingNumber.trim()) {
          return;
        }

        trackEvent("track_submit", {
          carrier,
          tracking_length: trackingNumber.trim().length
        });

        router.push(
          `/track-package?trackingNumber=${encodeURIComponent(trackingNumber.trim())}&carrier=${encodeURIComponent(carrier)}`
        );
      }}
    >
      <input
        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none ring-brand-500 focus:ring-2"
        placeholder="Enter tracking number"
        value={trackingNumber}
        onChange={(event) => setTrackingNumber(event.target.value)}
        aria-label="Tracking number"
      />
      <button
        type="submit"
        className="rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700"
      >
        Track
      </button>
    </form>
  );
}
