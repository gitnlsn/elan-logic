import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    number: 1,
    title: "Discovery",
    description:
      "We start by understanding your business, goals, and target audience to create a strategic foundation for your project.",
    icon: "Search",
  },
  {
    id: "design",
    number: 2,
    title: "Design",
    description:
      "Our designers create stunning, user-focused interfaces that align with your brand and optimize for conversions.",
    icon: "Palette",
  },
  {
    id: "development",
    number: 3,
    title: "Development",
    description:
      "We build your website using modern technologies, ensuring fast performance, security, and scalability.",
    icon: "Code",
  },
  {
    id: "launch",
    number: 4,
    title: "Launch",
    description:
      "After thorough testing, we deploy your site and provide ongoing support to ensure continued success.",
    icon: "Rocket",
  },
];
