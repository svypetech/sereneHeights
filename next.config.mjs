/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/page-sitemap.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/",
        permanent: false,
      },
      {
        source: "/invest",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
