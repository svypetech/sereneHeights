import { getAllBlogs } from "@/lib/getBlogs";
import { SITE_URL } from "@/utils/site";

const STATIC_ROUTES = [
  { path: "/", priority: 1, changeFrequency: "daily" },
  { path: "/about", priority: 0.9, changeFrequency: "weekly" },
  { path: "/amenities", priority: 0.8, changeFrequency: "weekly" },
  { path: "/payment-plan", priority: 0.8, changeFrequency: "weekly" },
  { path: "/floor-plans", priority: 0.8, changeFrequency: "weekly" },
  { path: "/floor-plans/floors", priority: 0.7, changeFrequency: "weekly" },
  { path: "/progress", priority: 0.7, changeFrequency: "weekly" },
  { path: "/co-ownership", priority: 0.8, changeFrequency: "weekly" },
  { path: "/contact-us", priority: 0.8, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/privacy-policy", priority: 0.5, changeFrequency: "weekly" },
];

function toSitemapEntry({ path, priority, changeFrequency, lastModified }) {
  return {
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: lastModified ? new Date(lastModified) : new Date(),
    changeFrequency,
    priority,
  };
}

export default function sitemap() {
  const staticEntries = STATIC_ROUTES.map((route) => toSitemapEntry(route));

  const blogEntries = getAllBlogs().map((post) =>
    toSitemapEntry({
      path: `/blog/${post.slug}`,
      priority: 0.7,
      changeFrequency: "monthly",
      lastModified: post.date,
    })
  );

  return [...staticEntries, ...blogEntries];
}
