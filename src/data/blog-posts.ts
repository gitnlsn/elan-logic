import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "how-much-does-a-landing-page-cost",
    title: "How Much Does a Landing Page Cost in 2026?",
    description:
      "A comprehensive breakdown of landing page costs from DIY templates to custom agency builds. Learn what to expect at every budget level.",
    publishedAt: "2026-01-15",
    category: "landing-pages",
    categoryLabel: "Landing Pages",
    author: "Elan Logic",
    featured: true,
  },
  {
    slug: "how-long-does-it-take-to-build-a-landing-page",
    title: "How Long Does It Take to Build a Landing Page?",
    description:
      "Realistic timelines for landing page development. From quick template setups to fully custom builds, understand what affects your project timeline.",
    publishedAt: "2026-01-14",
    category: "landing-pages",
    categoryLabel: "Landing Pages",
    author: "Elan Logic",
  },
  {
    slug: "how-much-does-an-ecommerce-website-cost",
    title: "How Much Does an E-commerce Website Cost?",
    description:
      "Compare costs across Shopify, WooCommerce, and custom e-commerce solutions. Find the right platform for your budget and business needs.",
    publishedAt: "2026-01-12",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    author: "Elan Logic",
    featured: true,
  },
  {
    slug: "shopify-vs-custom-ecommerce",
    title: "Shopify vs Custom E-commerce: Which Should You Choose?",
    description:
      "An honest comparison of Shopify and custom e-commerce solutions. Learn the pros, cons, and ideal use cases for each approach.",
    publishedAt: "2026-01-10",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    author: "Elan Logic",
  },
  {
    slug: "what-features-should-your-saas-mvp-have",
    title: "What Features Should Your SaaS MVP Have?",
    description:
      "Use the MoSCoW method to prioritize your SaaS features. Real examples and frameworks to help you launch faster with the right feature set.",
    publishedAt: "2026-01-08",
    category: "saas",
    categoryLabel: "SaaS",
    author: "Elan Logic",
    featured: true,
  },
  {
    slug: "how-to-choose-saas-development-partner",
    title: "How to Choose the Right SaaS Development Partner",
    description:
      "A guide for non-technical founders on evaluating development agencies. Red flags to avoid and green flags to look for when hiring.",
    publishedAt: "2026-01-06",
    category: "saas",
    categoryLabel: "SaaS",
    author: "Elan Logic",
  },
];

export const blogCategories = [
  { id: "landing-pages", label: "Landing Pages" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "saas", label: "SaaS" },
] as const;
