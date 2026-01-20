import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { BlogCard } from "@/components/blog/blog-card";
import { getAllPosts, getFeaturedPosts } from "@/lib/blog";
import { getBlogSchema } from "@/lib/schemas";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on landing pages, e-commerce, and SaaS development. Learn how to build better web products with guides from the Elan Logic team.",
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/blog`,
    title: "Blog | Elan Logic",
    description:
      "Insights on landing pages, e-commerce, and SaaS development. Learn how to build better web products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Elan Logic",
    description:
      "Insights on landing pages, e-commerce, and SaaS development.",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
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
              Insights for{" "}
              <span className="text-primary">Building Better</span> Web Products
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Practical guides on landing pages, e-commerce, and SaaS
              development. Learn what it takes to build web products that
              convert.
            </p>
          </div>
        </Container>
      </section>

      {featuredPosts.length > 0 && (
        <section className="border-y bg-muted/30 py-16">
          <Container>
            <h2 className="mb-8 text-2xl font-bold">Featured Articles</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} featured />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-16">
        <Container>
          <h2 className="mb-8 text-2xl font-bold">All Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
