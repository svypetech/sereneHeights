import BlogCard from "@/components/blog/BlogCard";
import { getAllBlogs } from "@/lib/getBlogs";

export const metadata = {
  title: "Blog | Serene Heights Nathia Gali",
  description:
    "News, insights, and updates from Serene Heights Hotel & Resorts in Nathia Gali — luxury resort living, investment, and construction progress.",
};

export default function BlogPage() {
 const sortedPosts = [...getAllBlogs()].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 text-[#222222]">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-[#37584F] inter">
          Serene Heights Nathia Gali
        </p>
        <h1 className="sm:text-5xl text-4xl font-bold text-[#37584F] gravesendSans mt-4">
          Blog
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-[#475467] inter text-lg">
          Stories, updates, and insights from our resort development in the
          heart of Nathia Gali.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
