import { siteConfig } from "@/lib/constants";
import { blogPosts } from "@/data/blog-posts";
import { locales, defaultLocale } from "@/i18n/config";

function generateSitemapXml(): string {
  const baseUrl = siteConfig.url;
  const staticPaths = ["", "/services", "/about", "/blog", "/contact"];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  // Static routes
  for (const path of staticPaths) {
    for (const locale of locales) {
      const localePath = locale === defaultLocale ? path : `/${locale}${path}`;
      const url = `${baseUrl}${localePath || "/"}`;
      const changefreq = path === "/blog" ? "weekly" : "monthly";
      const priority = path === "" ? "1.0" : path === "/services" ? "0.9" : "0.8";

      xml += "  <url>\n";
      xml += `    <loc>${url}</loc>\n`;

      // Add hreflang alternates
      for (const l of locales) {
        const altPath = l === defaultLocale ? path : `/${l}${path}`;
        xml += `    <xhtml:link rel="alternate" hreflang="${l}" href="${baseUrl}${altPath || "/"}"/>\n`;
      }

      xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
      xml += `    <changefreq>${changefreq}</changefreq>\n`;
      xml += `    <priority>${priority}</priority>\n`;
      xml += "  </url>\n";
    }
  }

  // Blog routes
  for (const post of blogPosts) {
    for (const locale of locales) {
      const localePath = locale === defaultLocale
        ? `/blog/${post.slug}`
        : `/${locale}/blog/${post.slug}`;
      const url = `${baseUrl}${localePath}`;
      const lastmod = new Date(post.updatedAt || post.publishedAt).toISOString();

      xml += "  <url>\n";
      xml += `    <loc>${url}</loc>\n`;

      // Add hreflang alternates
      for (const l of locales) {
        const altPath = l === defaultLocale
          ? `/blog/${post.slug}`
          : `/${l}/blog/${post.slug}`;
        xml += `    <xhtml:link rel="alternate" hreflang="${l}" href="${baseUrl}${altPath}"/>\n`;
      }

      xml += `    <lastmod>${lastmod}</lastmod>\n`;
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.6</priority>\n`;
      xml += "  </url>\n";
    }
  }

  xml += "</urlset>";
  return xml;
}

export async function GET() {
  const xml = generateSitemapXml();

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
