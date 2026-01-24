"use client";

import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/types";
import { formatDate, getReadingTime } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  locale?: string;
}

export function BlogCard({ post, featured = false, locale = "en" }: BlogCardProps) {
  const t = useTranslations("blog");

  const readingTime = getReadingTime(post.slug, locale);
  const formattedDate = formatDate(post.publishedAt, locale);

  return (
    <article
      className={`group relative flex flex-col rounded-xl border bg-card p-6 transition-shadow hover:shadow-md ${
        featured ? "md:col-span-2 md:flex-row md:gap-8" : ""
      }`}
    >
      <div className="flex flex-1 flex-col">
        <div className="mb-3 flex items-center gap-3">
          <Badge variant="secondary">{post.categoryLabel}</Badge>
          {featured && (
            <Badge variant="outline" className="text-xs">
              {t("featured")}
            </Badge>
          )}
        </div>

        <Link href={`/blog/${post.slug}`} className="group/link">
          <h3
            className={`font-semibold leading-tight text-foreground group-hover/link:text-primary ${
              featured ? "text-xl md:text-2xl" : "text-lg"
            }`}
          >
            {post.title}
          </h3>
        </Link>

        <p
          className={`mt-2 text-muted-foreground ${
            featured ? "line-clamp-3" : "line-clamp-2"
          }`}
        >
          {post.description}
        </p>

        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {readingTime}
          </span>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          {t("readMore")}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
