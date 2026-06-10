import fs from "fs";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "src/data/blogs");

// Get all blogs
export function getAllBlogs() {
  const files = fs.readdirSync(BLOG_DIR);

  return files.map((file) => {
    const content = fs.readFileSync(
      path.join(BLOG_DIR, file),
      "utf-8"
    );
    return JSON.parse(content);
  });
}

// Get single blog
export function getBlogBySlug(slug) {
  const files = fs.readdirSync(BLOG_DIR);

  for (const file of files) {
    const content = JSON.parse(
      fs.readFileSync(path.join(BLOG_DIR, file), "utf-8")
    );

    if (content.slug === slug) {
      return content;
    }
  }

  return null;
}

// Slugs for static generation
export function getAllSlugs() {
  return getAllBlogs().map((b) => ({ slug: b.slug }));
}