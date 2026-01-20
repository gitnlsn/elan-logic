import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "landing-page",
    title: "Landing Page",
    description:
      "High-converting landing pages designed to turn visitors into customers. Perfect for product launches, marketing campaigns, and lead generation.",
    features: [
      "Responsive design for all devices",
      "Conversion-optimized layouts",
      "Fast loading speeds",
      "SEO-ready structure",
    ],
    icon: "Layout",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description:
      "Full-featured online stores that make selling easy. From product catalogs to secure payments, we build everything you need to succeed.",
    features: [
      "Product catalog management",
      "Secure payment integration",
      "Inventory tracking",
      "Order management system",
    ],
    icon: "ShoppingCart",
  },
  {
    id: "saas",
    title: "SaaS",
    description:
      "Scalable software-as-a-service applications built for growth. From authentication to billing, we handle the technical complexity.",
    features: [
      "User authentication & authorization",
      "Subscription billing integration",
      "Admin dashboard",
      "API development",
    ],
    icon: "Cloud",
  },
];
