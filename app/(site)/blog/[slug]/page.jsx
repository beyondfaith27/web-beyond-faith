import ContactFormSheet from "@/components/ContactFormSheet";
import BlogCard, { formatDate } from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getAllBlogs, getBlogBySlug, getOtherBlogs } from "@/lib/blogs";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllBlogs().map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return {};

  return {
    title: blog.title,
    description: blog.metaDescription,
    keywords: [blog.category],
    alternates: {
      canonical: `/blog/${blog.slug}`,
    },
    openGraph: {
      title: `${blog.title} | BeyondFaith`,
      description: blog.metaDescription,
      url: `/blog/${blog.slug}`,
      images: [{ url: blog.image.src }],
      type: "article",
      publishedTime: blog.date,
    },
    twitter: {
      title: `${blog.title} | BeyondFaith`,
      description: blog.metaDescription,
      images: [blog.image.src],
    },
  };
}

function BlogList({ items }) {
  return (
    <ul className="flex flex-col gap-y-5 my-2">
      {items.map((item) => (
        <li
          key={item.lead}
          className="border-l-2 border-colored-background/40 pl-5"
        >
          <span className="font-semibold text-foreground">{item.lead}</span>{" "}
          <span className="text-foreground/70">{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

function BlogSection({ section }) {
  return (
    <div className="flex flex-col gap-y-5">
      <h2 className="!text-left !text-2xl tablet:!text-3xl">{section.heading}</h2>
      {section.body.map((block, idx) =>
        block.type === "list" ? (
          <BlogList key={idx} items={block.items} />
        ) : (
          <p key={idx} className="text-foreground/70 leading-relaxed text-base tablet:text-lg">
            {block.text}
          </p>
        )
      )}
    </div>
  );
}

const BlogPost = async ({ params }) => {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return notFound();

  const otherBlogs = getOtherBlogs(blog.slug, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.metaDescription,
    image: blog.image.src,
    datePublished: blog.date,
    author: { "@type": "Organization", name: "BeyondFaith" },
    publisher: { "@type": "Organization", name: "BeyondFaith" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="bg-muted pt-32 pb-12 !min-h-0">
        <div className="max-w-220 mx-auto flex flex-col items-start gap-y-6">
          <Link
            href="/blog"
            className="flex items-center gap-x-2 text-sm text-foreground/50 hover:text-colored-background transition-colors"
          >
            <ArrowLeft size={14} /> All articles
          </Link>

          <span className="text-xs font-inter font-semibold uppercase tracking-wider text-colored-background">
            {blog.category}
          </span>

          <h1 className="!text-left !text-4xl tablet:!text-5xl laptop:!text-6xl leading-[1.1]">
            {blog.title}
          </h1>

          <div className="flex items-center gap-x-3 text-sm text-foreground/50">
            <span className="font-medium text-foreground/70">{blog.author.name}</span>
            <span aria-hidden>&middot;</span>
            <span>{formatDate(blog.date)}</span>
            <span aria-hidden>&middot;</span>
            <span>{blog.readTime}</span>
          </div>
        </div>
      </section>

      <section className="!min-h-0 -mt-6 tablet:-mt-10">
        <div className="max-w-220 mx-auto">
          <div className="relative w-full aspect-[16/9] tablet:aspect-[21/9] rounded-2xl overflow-hidden bg-muted">
            <Image
              src={blog.image.src}
              alt={blog.image.alt}
              fill
              priority
              sizes="(max-width: 1300px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="!min-h-0 py-14 tablet:py-20">
        <div className="max-w-180 mx-auto flex flex-col gap-y-10">
          <div className="flex flex-col gap-y-5">
            {blog.intro.map((p, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? "text-lg tablet:text-xl text-foreground/80 leading-relaxed font-medium"
                    : "text-foreground/70 leading-relaxed text-base tablet:text-lg"
                }
              >
                {p}
              </p>
            ))}
          </div>

          {blog.sections.map((section) => (
            <BlogSection key={section.heading} section={section} />
          ))}

          {blog.faqs && (
            <div className="flex flex-col gap-y-2 pt-4">
              <h2 className="!text-left !text-2xl tablet:!text-3xl mb-2">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {blog.faqs.map((faq) => (
                  <AccordionItem key={faq.q} value={faq.q}>
                    <AccordionTrigger className="text-base tablet:text-lg">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/70 text-base">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}

          <div className="flex flex-col items-center text-center gap-y-4 bg-colored-background text-accent rounded-2xl px-8 py-12 mt-6">
            <h3 className="!text-accent !text-2xl tablet:!text-3xl">
              Ready to talk to someone?
            </h3>
            <p className="text-accent/70 max-w-100">
              Our therapists are here to help — with respect, pragmatism, and
              without judgment.
            </p>
            <ContactFormSheet>
              <Button variant="accent" size="lg" className="mt-2">
                Talk to Us
              </Button>
            </ContactFormSheet>
          </div>
        </div>
      </section>

      {otherBlogs.length > 0 && (
        <section className="!min-h-0 pb-24">
          <div className="max-w-320 mx-auto flex flex-col gap-y-8">
            <h2 className="!text-left !text-2xl tablet:!text-3xl">More from the journal</h2>
            <div className="grid grid-cols-1 phone:grid-cols-2 laptop:grid-cols-3 gap-8">
              {otherBlogs.map((b) => (
                <BlogCard key={b.slug} blog={b} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BlogPost;
