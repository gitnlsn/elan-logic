import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ServicesPreview } from "@/components/sections/services-preview";
import { Portfolio } from "@/components/sections/portfolio";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Elan Logic | Web Development Agency",
  description:
    "Web development agency specializing in high-converting landing pages, e-commerce stores, and SaaS applications. We build websites that turn visitors into customers.",
  openGraph: {
    type: "website",
    url: "https://elanlogic.com",
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Portfolio />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
