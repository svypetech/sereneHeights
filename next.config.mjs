/** @type {import('next').NextConfig} */

/**
 * Path mount under sereneheightsgroup.com.
 * Leave empty for the current root-domain deploy.
 * Set NEXT_PUBLIC_BASE_PATH=/nathiagali when cutting over to the group domain.
 */
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");

const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://maps.googleapis.com https://challenges.cloudflare.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://maps.googleapis.com https://api.iconify.design https://api.simplesvg.com https://api.unisvg.com",
  "frame-src https://www.youtube.com https://www.youtube-nocookie.com https://challenges.cloudflare.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const nextConfig = {
  output: "standalone",
  ...(basePath ? { basePath } : {}),
  async redirects() {
    return [
      {
        source: "/page-sitemap.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/invest",
        destination: "/",
        permanent: false,
      },
      // Marketing aliases (Next prefixes basePath automatically when set)
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/paymentplan",
        destination: "/payment-plan",
        permanent: true,
      },
      {
        source: "/blogs",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blogs/:path*",
        destination: "/blog/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          // Report-only first: watch the browser console, then switch to enforcing.
          { key: "Content-Security-Policy-Report-Only", value: CONTENT_SECURITY_POLICY },
        ],
      },
    ];
  },
};

export default nextConfig;
