import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const siteUrl = "https://comidolar.com.ar";

  const blogPosts = await getCollection("blog");

  const urls = [
    { url: `${siteUrl}/`, changefreq: "hourly", priority: 1.0 },
    { url: `${siteUrl}/whatsapp`, changefreq: "never", priority: 0.5 },
    { url: `${siteUrl}/calculadora`, changefreq: "never", priority: 0.5 },
    { url: `${siteUrl}/blog`, changefreq: "weekly", priority: 0.5 },
    { url: `${siteUrl}/donaciones`, changefreq: "never", priority: 0.5 },

    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}/`,
      changefreq: "never",
      priority: 0.1,
    })),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        ({ url, changefreq, priority }) => `
        <url>
          <loc>${url}</loc>
          <changefreq>${changefreq}</changefreq>
          <priority>${priority}</priority>
        </url>`
      )
      .join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
