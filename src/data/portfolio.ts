import type { PortfolioProject } from "@/types";

export const portfolio: PortfolioProject[] = [
  {
    id: "quartier-flow",
    title: "Quartier Flow",
    description:
      "A modern e-commerce platform for boutique retail, featuring a seamless shopping experience and elegant product presentation.",
    url: "https://www.quartierflow.store/",
    image: "/images/portfolio/quartier-flow.svg",
    tags: ["E-commerce", "Next.js", "Stripe"],
  },
  {
    id: "lalu-decor",
    title: "Lalu Decor",
    description:
      "An interior design showcase website with stunning visuals and an intuitive gallery experience for home decor inspiration.",
    url: "https://laludecor.vercel.app/",
    image: "/images/portfolio/lalu-decor.svg",
    tags: ["Portfolio", "React", "Tailwind CSS"],
  },
  {
    id: "savoir-link",
    title: "Savoir Link",
    description:
      "A professional networking and knowledge-sharing platform connecting experts with those seeking specialized guidance.",
    url: "https://www.savoirlink.com/",
    image: "/images/portfolio/savoir-link.svg",
    tags: ["SaaS", "Next.js", "Authentication"],
  },
];
