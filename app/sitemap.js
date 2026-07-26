import { getAllBlogs } from "@/lib/blogs";

export default function sitemap() {
  const baseUrl = process.env.IS_DEV === 'true'
    ? 'https://web-beyond-faith.vercel.app'
    : 'https://beyondfaith.in';

  const blogs = getAllBlogs();

  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  const latestBlogDate = blogs.reduce(
    (latest, blog) => (new Date(blog.date) > latest ? new Date(blog.date) : latest),
    new Date(0)
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-01-28'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2026-01-27'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: latestBlogDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogRoutes,
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date('2026-01-26'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date('2026-01-26'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date('2026-01-26'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}