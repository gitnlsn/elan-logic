import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { BlogCard } from "@/components/blog/blog-card";
import { getAllPosts, getFeaturedPosts } from "@/lib/blog";
import { getBlogSchema } from "@/lib/schemas";
import { siteConfig } from "@/lib/constants";

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("blogTitle"),
    description: t("blogDescription"),
    openGraph: {
      type: "website",
      url: `${siteConfig.url}/blog`,
      title: `${t("blogTitle")} | Elan Logic`,
      description: t("blogDescription"),
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("blogTitle")} | Elan Logic`,
      description: t("blogDescription"),
    },
    alternates: {
      canonical: locale === "en" ? "/blog" : `/${locale}/blog`,
      languages: {
        en: "/blog",
        "pt-BR": "/pt-BR/blog",
      },
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "blog" });
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const regularPosts = allPosts.filter((post) => !post.featured);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBlogSchema()),
        }}
      />

      <section className="py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {t("heroTitle")}{" "}
              <span className="text-primary">{t("heroTitleHighlight")}</span>{" "}
              {t("heroTitleEnd")}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              {t("heroDescription")}
            </p>
          </div>
        </Container>
      </section>

      {featuredPosts.length > 0 && (
        <section className="border-y bg-muted/30 py-16">
          <Container>
            <h2 className="mb-8 text-2xl font-bold">{t("featuredArticles")}</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} featured locale={locale} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-16">
        <Container>
          <h2 className="mb-8 text-2xl font-bold">{t("allArticles")}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <BlogCard key={post.slug} post={post} locale={locale} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
