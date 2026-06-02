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
        destination: "/blog/does-speedx-deliver-late-at-night-guide",
        permanent: true
      },
      {
        source: "/blog/spxcn-tracking-number-meaning",
        destination: "/blog/spxcn-tracking-number-format-explained",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
