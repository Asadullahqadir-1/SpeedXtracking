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
      },
      {
        source: "/carriers/usps",
        destination: "/carriers",
        permanent: true
      },
      {
        source: "/blog/does-speedx-deliver-late-at-night",
        destination: "/guides/speedx-delivery-hours",
        permanent: true
      },
      {
        source: "/blog/does-speedx-deliver-late-at-night-guide",
        destination: "/guides/speedx-delivery-hours",
        permanent: true
      },
      {
        source: "/blog/spxcn-tracking-number-meaning",
        destination: "/blog/spxcn-tracking-number-format-explained",
        permanent: true
      },
      {
        source: "/guides/does-speedx-deliver-late-at-night",
        destination: "/guides/speedx-delivery-hours",
        permanent: true
      },
      {
        source: "/speedx-label-created-no-update",
        destination: "/blog/speedx-label-created-no-movement",
        permanent: true
      },
      {
        source: "/speedx-missed-delivery-attempt",
        destination: "/blog/speedx-attempted-delivery-what-next",
        permanent: true
      },
      {
        source: "/speedx-invalid-tracking-number",
        destination: "/blog/speedx-tracking-number-not-found",
        permanent: true
      },
      {
        source: "/speedx-package-returned-to-sender",
        destination: "/blog/speedx-returned-to-sender",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
