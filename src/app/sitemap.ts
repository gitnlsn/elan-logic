import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
import { blogPosts } from "@/data/blog-posts";
import { locales, defaultLocale } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPaths = ["", "/services", "/about", "/blog", "/contact"];

  const staticRoutes: MetadataRoute.Sitemap = staticPaths.flatMap((path) => {
    return locales.map((locale) => {
      const localePath = locale === defaultLocale ? path : `/${locale}${path}`;
      const url = `${baseUrl}${localePath || "/"}`;

      const alternates: Record<string, string> = {};
      locales.forEach((l) => {
        const altPath = l === defaultLocale ? path : `/${l}${path}`;
        alternates[l] = `${baseUrl}${altPath || "/"}`;
      });

      return {
        url,
        lastModified: new Date(),
        changeFrequency: path === "/blog" ? "weekly" : "monthly",
        priority: path === "" ? 1.0 : path === "/services" ? 0.9 : 0.8,
        alternates: {
          languages: alternates,
        },
      } as MetadataRoute.Sitemap[number];
    });
  });

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.flatMap((post) => {
    return locales.map((locale) => {
      const localePath =
        locale === defaultLocale
          ? `/blog/${post.slug}`
          : `/${locale}/blog/${post.slug}`;
      const url = `${baseUrl}${localePath}`;

      const alternates: Record<string, string> = {};
      locales.forEach((l) => {
        const altPath =
          l === defaultLocale
            ? `/blog/${post.slug}`
            : `/${l}/blog/${post.slug}`;
        alternates[l] = `${baseUrl}${altPath}`;
      });

      return {
        url,
        lastModified: new Date(post.updatedAt || post.publishedAt),
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: {
          languages: alternates,
        },
      } as MetadataRoute.Sitemap[number];
    });
  });

  return [...staticRoutes, ...blogRoutes];
}
