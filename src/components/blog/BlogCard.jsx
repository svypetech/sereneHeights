import Image from "next/image";
import Link from "next/link";

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article
        className="h-full flex flex-col overflow-hidden rounded-2xl bg-white
        shadow-[0_0_4px_0_#00000040] transition-all duration-300
        group-hover:scale-[1.02] group-hover:shadow-[0px_4px_15px_rgba(55,88,79,0.8)]"
      >
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <span className="absolute top-4 left-4 rounded-lg bg-[#37584F] px-3 py-1 text-xs font-medium uppercase tracking-wide text-white inter">
            {post.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <time
            dateTime={post.date}
            className="text-sm text-[#475467] inter"
          >
            {formatDate(post.date)}
          </time>
          <h2 className="mt-2 text-xl font-semibold text-[#37584F] gravesendSans line-clamp-2 group-hover:text-[#165443] transition-colors">
            {post.title}
          </h2>
          <p className="mt-3 flex-1 text-[#222222] inter text-sm leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#37584F] inter group-hover:gap-2 transition-all">
            Read more
            <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </article>
    </Link>
  );
}

export default BlogCard;
