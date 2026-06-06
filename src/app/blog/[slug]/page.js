import { getAllBlogSlugs, getBlogPost } from "@/utils/constants/blogPosts";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function PostSection({ section, index }) {
  if (section.type === "heading") {
    return (
      <h2 className="text-2xl md:text-3xl font-semibold text-[#37584F] gravesendSans">
        {section.content}
      </h2>
    );
  }

  if (section.type === "list") {
    return (
      <ul className="list-disc pl-6 space-y-2">
        {section.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }

  const isAlternate = index % 2 === 0;

  return (
    <div
      className={
        isAlternate
          ? "bg-[#F3F2ED] rounded-2xl p-6 md:p-10 shadow-sm"
          : undefined
      }
    >
      <p>{section.content}</p>
    </div>
  );
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Post Not Found | Serene Heights Nathia Gali" };
  }

  return {
    title: `${post.title} | Serene Heights Nathia Gali`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="px-6 md:px-16 lg:px-36 py-20 text-[#222222]">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-medium text-[#37584F] inter hover:gap-3 transition-all"
      >
        <span aria-hidden="true">&larr;</span>
        Back to Blog
      </Link>

      <div className="mt-8 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-[#37584F] inter">
          {post.category}
        </p>
        <h1 className="sm:text-5xl text-4xl font-bold text-[#37584F] gravesendSans mt-4 max-w-4xl mx-auto">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[#475467] inter text-sm">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{post.author}</span>
        </div>
      </div>

      <div className="mt-10 relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-[0_0_4px_0_#00000040]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </div>

      <div className="mt-12 max-w-3xl mx-auto space-y-8 inter text-lg leading-relaxed">
        <p className="text-xl text-[#475467] font-medium border-l-4 border-[#37584F] pl-6">
          {post.excerpt}
        </p>

        {post.sections.map((section, index) => (
          <PostSection key={index} section={section} index={index} />
        ))}
      </div>

      <div className="mt-16 max-w-3xl mx-auto bg-[#F3F2ED] rounded-2xl p-8 md:p-10 text-center">
        <h2 className="text-2xl font-semibold text-[#37584F] gravesendSans">
          Interested in Serene Heights?
        </h2>
        <p className="mt-3 text-[#475467] inter">
          Get in touch with our team to learn more about Smart Property Units,
          payment plans, and site visits.
        </p>
        <Link
          href="/contact-us"
          className="mt-6 inline-block rounded-lg bg-[#37584F] px-8 py-3 text-white inter font-medium hover:border hover:border-[#37584F] hover:bg-white hover:text-[#37584F] transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
