import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  turbopack: {
    root: path.join(__dirname)
  },
  async redirects() {
    return [
      {
        source: "/carriers/:carrier/package-tracking",
        destination: "/carriers/:carrier",
        permanent: true
      },
      {
        source: "/carriers/:carrier/track-shipment",
        destination: "/carriers/:carrier",
        permanent: true
      },
      {
        source: "/carriers/:carrier/tracking-status",
        destination: "/carriers/:carrier/status",
        permanent: true
      },
      {
        source: "/carriers/:carrier/delivery-time-estimate",
        destination: "/carriers/:carrier/delivery-time",
        permanent: true
      },
      {
        source: "/carriers/:carrier/contact-number",
        destination: "/carriers/:carrier/contact",
        permanent: true
      },
      {
        source: "/speedx-tracking-not-updating",
        destination: "/blog/speedx-tracking-not-updating",
        permanent: true
      },
      {
        source: "/speedx-delivered-but-not-received",
        destination: "/guides/delivered-not-received",
        permanent: true
      },
      {
        source: "/speedx-contact-number",
        destination: "/carriers/speedx/contact",
        permanent: true
      },
      {
        source: "/speedx-shein-tracking",
        destination: "/carriers/speedx/shein",
        permanent: true
      },
      {
        source: "/track-speedx-new-york",
        destination: "/carriers/speedx",
        permanent: true
      },
      {
        source: "/track-speedx-spxcn-format",
        destination: "/guides/spxcn-tracking-number-meaning",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
