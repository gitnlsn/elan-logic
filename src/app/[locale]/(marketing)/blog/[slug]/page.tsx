import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { BlogHeader } from "@/components/blog/blog-header";
import { BlogCta } from "@/components/blog/blog-cta";
import { RelatedPosts } from "@/components/blog/related-posts";
import {
  getPostBySlug,
  getPostContent,
  getRelatedPosts,
  getAllSlugs,
} from "@/lib/blog";
import { getBlogPostSchema, getBreadcrumbSchema } from "@/lib/schemas";
import { siteConfig } from "@/lib/constants";
import { routing } from "@/i18n/routing";

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  const slugs = getAllSlugs();
  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const blogPath = locale === "en" ? `/blog/${post.slug}` : `/${locale}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: "article",
      url: `${siteConfig.url}${blogPath}`,
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author],
      locale: locale === "pt-BR" ? "pt_BR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: blogPath,
      languages: {
        en: `/blog/${post.slug}`,
        "pt-BR": `/pt-BR/blog/${post.slug}`,
      },
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const Content = getPostContent(slug);
  const relatedPosts = getRelatedPosts(slug, post.category, 2);

  if (!Content) {
    notFound();
  }

  const blogPath = locale === "en" ? "" : `/${locale}`;
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}${blogPath}/blog` },
    { name: post.title, url: `${siteConfig.url}${blogPath}/blog/${post.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBlogPostSchema(post)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)),
        }}
      />

      <BlogHeader post={post} locale={locale} />

      <section className="py-12 md:py-16">
        <Container>
          <article className="prose prose-neutral mx-auto max-w-3xl dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground prose-h2:text-3xl prose-h3:text-2xl prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
            <Content />
          </article>

          <div className="mx-auto max-w-3xl">
            <BlogCta category={post.category} locale={locale} />
            <RelatedPosts posts={relatedPosts} locale={locale} />
          </div>
        </Container>
      </section>
    </>
  );
}
