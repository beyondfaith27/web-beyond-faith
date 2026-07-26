import BlogCard from "@/components/BlogCard";
import { getAllBlogs } from "@/lib/blogs";

export const metadata = {
  title: "Blog",
  description:
    "Perspectives on therapy, relationships, ADHD, and mental health in India from the BeyondFaith clinical team.",
  keywords: [
    "mental health blog India", "therapy articles", "ADHD in adults", "AI and mental health",
    "relationship counseling articles", "men's mental health India",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | BeyondFaith Mental Health Counseling",
    description:
      "Perspectives on therapy, relationships, ADHD, and mental health in India from the BeyondFaith clinical team.",
    url: "/blog",
  },
  twitter: {
    title: "Blog | BeyondFaith Mental Health Counseling",
    description:
      "Perspectives on therapy, relationships, ADHD, and mental health in India from the BeyondFaith clinical team.",
  },
};

const Blog = () => {
  const blogs = getAllBlogs();

  return (
    <>
      <section className="bg-muted pt-32 pb-16 !min-h-0">
        <div className="max-w-240 mx-auto text-center">
          <h1 className="text-4xl tablet:text-6xl">The BeyondFaith Journal</h1>
          <p className="text-sm text-foreground/60 mt-4 max-w-140 mx-auto">
            Grounded perspectives on therapy, relationships, and mental health
            — written for the particular pressures of modern Indian life.
          </p>
        </div>
      </section>

      <section className="!min-h-0 py-16">
        <div className="max-w-320 mx-auto grid grid-cols-1 phone:grid-cols-2 laptop:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <BlogCard key={blog.slug} blog={blog} priority={idx < 3} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
