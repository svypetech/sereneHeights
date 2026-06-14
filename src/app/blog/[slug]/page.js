import { getAllSlugs, getBlogBySlug } from "@/lib/getBlogs";
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

// ========================================
// RICH TEXT RENDERER
// Supports:
// - Plain text
// - Internal links
function RichText({ content }) {
  if (typeof content === "string") {
    return content;
  }

  return content.map((item, i) => {
    if (item.type === "link") {
      return (
        <Link
          key={i}
          href={item.href}
          className="underline text-[#37584F] font-medium hover:text-[#165443]"
        >
          {item.text}
        </Link>
      );
    }

    if (item.type === "bold") {
      return (
        <strong key={i} className="font-semibold">
          {item.text}
        </strong>
      );
    }

    return <span key={i}>{item.value}</span>;
  });
}

// ========================================
// BLOG CONTENT RENDERER
// Handles all supported content types
function PostSection({ section, index }) {
  // ========================================
  // HEADING (H2)
  if (section.type === "heading") {
    return (
      <h2 className="text-2xl md:text-3xl font-semibold text-[#37584F] gravesendSans">
        {section.content}
      </h2>
    );
  }

  // ========================================
  // SUBHEADING (H3)
  if (section.type === "subheading") {
  return (
    <h3 className="text-xl md:text-2xl font-semibold text-[#37584F] gravesendSans">
      {section.content}
    </h3>
  );
}

  // ========================================
  // HIGHLIGHT / KEY TAKEAWAY
  if (section.type === "highlight") {
    return (
      <div className="border-l-4 border-[#37584F] pl-6">
        <p className="italic text-md text-[#37584F] font-medium">
          {section.content}
        </p>
      </div>
    );
  }

  // ========================================
  // NOTE / DISCLAIMER
  if (section.type === "note") {
    return (
      <div className="rounded-lg bg-[#fff9ee] p-5">
        <p className="italic text-base text-[#977119]">
          {section.content}
        </p>
      </div>
    );
  }

  // ========================================
  // BULLETED LIST
  if (section.type === "list") {
    return (
      <ul className="list-disc pl-6 space-y-2">
        {section.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }

  // ========================================
  // TABLE
  if (section.type === "table") {
    return (
      <div className="overflow-x-auto rounded-2xl border border-[#E4E7EC]">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[#37584F] text-white">
              {section.headers.map((header, i) => (
                <th key={i} className="px-4 py-3 font-medium">
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {section.rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-t border-[#E4E7EC]"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-4 py-3 align-top"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // ========================================
  // CALL TO ACTION (CTA)
  if (section.type === "cta") {
    return (
      <div className="rounded-2xl bg-[#37584F] p-8 text-center text-white">
        <h3 className="text-2xl font-semibold gravesendSans">
          {section.title}
        </h3>

        <p className="mt-4">
          <RichText content={section.text} />
        </p>

     <Link
        href={section.href}
        className="inline-block  mt-6 rounded-lg bg-white px-5 py-3 text-base font-semibold text-[#37584F] border border-white transition-all duration-300 hover:bg-transparent hover:text-white hover:border-white"
     >
        {section.buttonText}
    </Link>
      </div>
    );
  }

  // ========================================
  // FAQ SECTION
  if (section.type === "faq") {
    return (
      <div className="space-y-5">
        {section.items.map((faq, i) => (
          <div
            key={i}
            className="rounded-2xl bg-[#F3F2ED] p-6"
          >
            <h3 className="font-semibold text-[#37584F] text-lg">
              <RichText content={faq.question} />
            </h3>

            <p className="mt-3">
              <RichText content={faq.answer} />
            </p>
          </div>
        ))}
      </div>
    );
  }


  // ========================================
  // STANDARD PARAGRAPH
  // Supports:
  // - Plain text
  // - Inline links
  if (section.type === "paragraph") {
    const isAlternate = index % 2 !== 0;

    return (
      <div
        className={
          isAlternate
            ? "bg-[#F3F2ED] rounded-2xl p-6 md:p-10 shadow-sm"
            : undefined
        }
      >
        <p>
          <RichText content={section.content} />
        </p>
      </div>
    );
  }

  return null;
}



export async function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

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
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 text-[#222222]">
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
        <h1 className="sm:text-5xl text-4xl font-bold text-[#37584F] gravesendSans mt-4">
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
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
      </div>

      <div className="mt-12 w-full space-y-8 inter text-lg leading-relaxed">
        <p className="text-xl text-[#475467] font-medium border-l-4 border-[#37584F] pl-6">
          {post.excerpt}
        </p>

        {post.sections.map((section, index) => (
          <PostSection key={index} section={section} index={index} />
        ))}
      </div>

      <div className="mt-16 w-full bg-[#F3F2ED] rounded-2xl p-8 md:p-10 text-center">
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
