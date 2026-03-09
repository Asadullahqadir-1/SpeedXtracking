"use client";

import { useEffect, useMemo, useState } from "react";
import { TrackingResponse } from "@/lib/seo/types";
import { trackEvent } from "@/lib/analytics";

type TrackingLookupProps = {
  trackingNumber: string;
  carrier: string;
};

export function TrackingLookup({ trackingNumber, carrier }: TrackingLookupProps) {
  const [data, setData] = useState<TrackingResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `/api/track?trackingNumber=${encodeURIComponent(trackingNumber)}&carrier=${encodeURIComponent(carrier)}`,
          { cache: "no-store" }
        );

        if (!response.ok) {
          throw new Error("Unable to fetch tracking details.");
        }

        setData((await response.json()) as TrackingResponse);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unexpected error");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [trackingNumber, carrier]);

  useEffect(() => {
    if (!data) {
      return;
    }

    trackEvent("track_success", {
      carrier: data.carrier,
      status: data.currentStatus,
      confidence: data.confidence
    });
  }, [data]);

  const statusClass = useMemo(() => {
    if (!data) {
      return "bg-slate-100 text-slate-700";
    }

    if (data.currentStatus.toLowerCase().includes("delivered")) {
      return "bg-emerald-100 text-emerald-700";
    }

    if (data.currentStatus.toLowerCase().includes("out for delivery")) {
      return "bg-blue-100 text-blue-700";
    }

    return "bg-amber-100 text-amber-700";
  }, [data]);

  if (loading) {
    return <p className="mt-4 text-sm text-slate-600">Loading tracking results...</p>;
  }

  if (error) {
    return <p className="mt-4 text-sm text-red-600">{error}</p>;
  }

  if (!data) {
    return null;
  }

  return (
    <section className="mt-6 space-y-4">
      <div className="section-card">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-semibold">Latest Tracking Update</h2>
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClass}`}>{data.currentStatus}</span>
        </div>
        <p className="mt-2 text-sm text-slate-600">Tracking Number: {data.trackingNumber}</p>
        <p className="mt-1 text-sm text-slate-600">Carrier: {data.carrier}</p>
        <p className="mt-1 text-sm text-slate-700">Estimated Delivery: {data.eta}</p>
      </div>

      <div className="section-card">
        <h3 className="text-lg font-semibold">Tracking Timeline</h3>
        <ul className="mt-4 space-y-3">
          {data.timeline.map((event) => (
            <li key={`${event.timestamp}-${event.status}`} className="rounded-lg border border-slate-100 p-3">
              <p className="text-xs text-slate-500">{event.timestamp} • {event.location}</p>
              <p className="mt-1 font-medium text-slate-900">{event.status}</p>
              <p className="text-sm text-slate-700">{event.details}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
