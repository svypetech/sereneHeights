import fs from "fs";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "src/data/blogs");

function todayInPakistan() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Karachi",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function isPublished(post, asOf = todayInPakistan()) {
  return Boolean(post?.date) && post.date <= asOf;
}

function readAllBlogFiles() {
  return fs.readdirSync(BLOG_DIR).map((file) =>
    JSON.parse(fs.readFileSync(path.join(BLOG_DIR, file), "utf-8"))
  );
}

// Get all published blogs (hides scheduled posts until their date)
export function getAllBlogs({ includeScheduled = false } = {}) {
  const blogs = readAllBlogFiles();
  if (includeScheduled) return blogs;
  return blogs.filter((post) => isPublished(post));
}

// Get single published blog
export function getBlogBySlug(slug, { includeScheduled = false } = {}) {
  const post = readAllBlogFiles().find((content) => content.slug === slug);
  if (!post) return null;
  if (!includeScheduled && !isPublished(post)) return null;
  return post;
}

// Slugs for static generation (include scheduled so pages are ready on publish day)
export function getAllSlugs() {
  return getAllBlogs({ includeScheduled: true }).map((b) => ({ slug: b.slug }));
}
