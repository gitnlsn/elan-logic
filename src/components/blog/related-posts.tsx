"use client";

import { useTranslations } from "next-intl";
import { BlogCard } from "./blog-card";
import type { BlogPost } from "@/types";

interface RelatedPostsProps {
  posts: BlogPost[];
  locale?: string;
}

export function RelatedPosts({ posts, locale = "en" }: RelatedPostsProps) {
  const t = useTranslations("blog");

  if (posts.length === 0) return null;

  return (
    <section className="mt-16 border-t pt-12">
      <h2 className="mb-6 text-2xl font-bold">{t("relatedArticles")}</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} locale={locale} />
        ))}
      </div>
    </section>
  );
}
