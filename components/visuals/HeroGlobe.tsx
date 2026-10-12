"use client";

import dynamic from "next/dynamic";

const TrackingGlobe = dynamic(() => import("@/components/visuals/TrackingGlobe"), {
  ssr: false,
  loading: () => <div className="hero-globe-fallback" aria-hidden="true" />
});

export function HeroGlobe() {
  return <TrackingGlobe className="hero-globe-layer" />;
}
