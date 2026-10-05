import type { NextConfig } from "next";
import path from "path";

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload"
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff"
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN"
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin"
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()"
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      "object-src 'none'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data: https://fonts.gstatic.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://www.17track.net https://*.17track.net",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://www.googletagmanager.com https://www.google-analytics.com https://www.17track.net https://*.17track.net https://ep2.adtrafficquality.google",
      "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://pagead2.googlesyndication.com https://www.17track.net https://*.17track.net https://api.17track.net https://ep1.adtrafficquality.google https://googleads.g.doubleclick.net",
      "frame-src 'self' https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://www.google.com https://www.17track.net https://*.17track.net",
      "upgrade-insecure-requests"
    ].join("; ")
  }
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  turbopack: {
    root: path.join(__dirname)
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256]
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders
      }
    ];
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
