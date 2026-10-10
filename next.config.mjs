/** @type {import('next').NextConfig} */

/**
 * Path mount under sereneheightsgroup.com.
 * Leave empty for the current root-domain deploy.
 * Set NEXT_PUBLIC_BASE_PATH=/nathiagali when cutting over to the group domain.
 */
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");

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
  async rewrites() {
    // Raw <img src="/assets/..."> and CSS url('/assets/...') do not get
    // basePath automatically. Map them onto the mounted public folder.
    if (!basePath) return [];
    return [
      {
        source: "/assets/:path*",
        destination: `${basePath}/assets/:path*`,
        basePath: false,
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
        ],
      },
    ];
  },
};

export default nextConfig;
