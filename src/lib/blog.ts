import type { ComponentType } from "react";
import type { BlogPost, BlogCategory } from "@/types";
import { blogPosts } from "@/data/blog-posts";
import { blogContent, wordCounts } from "@/content/blog";

export function getAllPosts(): BlogPost[] {
  return blogPosts.map((post) => {
    const readTime = getReadingTime(post.slug);
    return {
      ...post,
      readingTime: readTime,
    };
  });
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return undefined;

  const readTime = getReadingTime(slug);
  return {
    ...post,
    readingTime: readTime,
  };
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return getAllPosts().filter((post) => post.category === category);
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter((post) => post.featured);
}

export function getRelatedPosts(
  currentSlug: string,
  category: BlogCategory,
  limit: number = 2
): BlogPost[] {
  return getAllPosts()
    .filter((post) => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
}

export function getPostContent(slug: string): ComponentType | undefined {
  return blogContent[slug];
}

export function getReadingTime(slug: string, locale?: string): string {
  const words = wordCounts[slug] || 1000;
  const minutes = Math.ceil(words / 200);
  if (locale === "pt-BR") {
    return `${minutes} min de leitura`;
  }
  return `${minutes} min read`;
}

export function formatDate(dateString: string, locale: string = "en"): string {
  const date = new Date(dateString);
  const localeCode = locale === "pt-BR" ? "pt-BR" : "en-US";
  return date.toLocaleDateString(localeCode, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
