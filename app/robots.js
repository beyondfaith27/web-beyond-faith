export default function robots() {
  const isDev = process.env.IS_DEV === 'true';

  return {
    rules: {
      userAgent: '*',
      allow: isDev ? [] : '/',
      disallow: isDev ? '/' : '/private/',
    },
    sitemap: isDev
      ? 'https://web-beyond-faith.vercel.app/sitemap.xml'
      : 'https://beyondfaith.in/sitemap.xml',
  };
}