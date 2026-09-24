"use client";

import Script from "next/script";
import { useCallback, useEffect, useId, useState } from "react";

declare global {
  interface Window {
    YQV5?: {
      trackSingle: (options: {
        YQ_ContainerId: string;
        YQ_Height?: number;
        YQ_Fc?: string;
        YQ_Lang?: string;
        YQ_Num: string;
      }) => void;
    };
  }
}

type FreeTrackWidgetProps = {
  trackingNumber: string;
  /** 17TRACK carrier code; "0" = auto detect */
  carrierCode?: string;
  height?: number;
};

export function FreeTrackWidget({
  trackingNumber,
  carrierCode = "0",
  height = 560
}: FreeTrackWidgetProps) {
  const reactId = useId().replace(/:/g, "");
  const containerId = `yq-track-${reactId}`;
  const [scriptReady, setScriptReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const runTrack = useCallback(() => {
    const num = trackingNumber.trim();
    if (!num || !window.YQV5?.trackSingle) {
      return;
    }

    try {
      setError(null);
      window.YQV5.trackSingle({
        YQ_ContainerId: containerId,
        YQ_Height: height,
        YQ_Fc: carrierCode,
        YQ_Lang: "en",
        YQ_Num: num
      });
    } catch {
      setError("Unable to load the free tracking widget. Please refresh and try again.");
    }
  }, [carrierCode, containerId, height, trackingNumber]);

  useEffect(() => {
    if (scriptReady) {
      runTrack();
    }
  }, [scriptReady, runTrack]);

  if (!trackingNumber.trim()) {
    return null;
  }

  return (
    <section className="mt-6 section-card">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold text-slate-900">Live package tracking</h2>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          Free tracker
        </span>
      </div>
      <p className="mb-4 text-sm text-slate-600">
        Tracking number: <span className="font-medium text-slate-900">{trackingNumber.trim()}</span>
      </p>
      {error ? <p className="mb-3 text-sm text-red-600">{error}</p> : null}
      <div id={containerId} className="min-h-[200px] w-full overflow-hidden rounded-lg border border-slate-100 bg-white" />
      <Script
        src="https://www.17track.net/externalcall.js"
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
        onError={() => setError("Tracking script failed to load. Check your connection and retry.")}
      />
      <p className="mt-3 text-xs text-slate-500">
        Powered by a free global tracking widget. Results depend on carrier scan data and may take a moment to appear.
      </p>
    </section>
  );
}
