/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.SITE_URL || "https://www.sereneheightsnathiagali.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  output: "standalone",
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/*", "/thank-you"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: ["/api/", "/thank-you"],
      },
    ],
  },
  transform: async (config, path) => {
    const priorityByPath = {
      "/": 1,
      "/about": 0.9,
      "/amenities": 0.8,
      "/payment-plan": 0.8,
      "/floor-plans": 0.8,
      "/floor-plans/floors": 0.7,
      "/progress": 0.7,
      "/co-ownership": 0.8,
      "/contact-us": 0.8,
      "/blog": 0.8,
      "/privacy-policy": 0.5,
    };

    if (path.startsWith("/blog/")) {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.7,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }

    return {
      loc: path,
      changefreq: path === "/" ? "daily" : "weekly",
      priority: priorityByPath[path] ?? config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
