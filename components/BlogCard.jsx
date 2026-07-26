import Image from "next/image";
import Link from "next/link";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogCard({ blog, priority = false }) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden bg-background border border-foreground/10 hover:border-colored-background/40 hover:shadow-lg transition-all duration-300"
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={blog.image.src}
          alt={blog.image.alt}
          fill
          priority={priority}
          sizes="(max-width: 800px) 100vw, (max-width: 1300px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col gap-y-3 p-6">
        <span className="text-xs font-inter font-semibold uppercase tracking-wider text-colored-background">
          {blog.category}
        </span>
        <h3 className="font-dm text-xl leading-snug text-left group-hover:text-colored-background transition-colors">
          {blog.title}
        </h3>
        <p className="text-sm text-foreground/60 line-clamp-2">
          {blog.metaDescription}
        </p>
        <div className="flex items-center gap-x-2 text-xs text-foreground/40 pt-2 mt-auto">
          <span>{formatDate(blog.date)}</span>
          <span>&middot;</span>
          <span>{blog.readTime}</span>
        </div>
      </div>
    </Link>
  );
}

export { formatDate };
