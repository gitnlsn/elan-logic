"use client";

import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import type { BlogPost } from "@/types";
import { formatDate, getReadingTime } from "@/lib/blog";

interface BlogHeaderProps {
  post: BlogPost;
  locale?: string;
}

export function BlogHeader({ post, locale = "en" }: BlogHeaderProps) {
  const t = useTranslations("blog");

  const readingTime = getReadingTime(post.slug, locale);
  const formattedDate = formatDate(post.publishedAt, locale);

  return (
    <section className="border-b bg-muted/30 py-12 md:py-16">
      <Container>
        <Link
          href="/blog"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("backToBlog")}
        </Link>

        <div className="mb-4 flex items-center gap-3">
          <Badge variant="secondary">{post.categoryLabel}</Badge>
        </div>

        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {post.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {readingTime}
          </span>
          <span>
            {t("by")} {post.author}
          </span>
        </div>
      </Container>
    </section>
  );
}
