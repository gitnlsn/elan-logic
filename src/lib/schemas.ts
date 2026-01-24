import { siteConfig } from "./constants";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/og/default.svg`,
    sameAs: [
      siteConfig.social.twitter,
      siteConfig.social.linkedin,
      siteConfig.social.github,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: `https://wa.me/${siteConfig.whatsapp.number}`,
      availableLanguage: ["English", "Portuguese"],
    },
  };
}

export function getWebSiteSchema(locale: string = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: locale === "pt-BR" ? "pt-BR" : "en-US",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function getServiceSchema(locale: string = "en") {
  const isPortuguese = locale === "pt-BR";

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    serviceType: "Web Development",
    description: isPortuguese
      ? "Serviços profissionais de desenvolvimento web incluindo Landing Pages, Soluções de E-commerce e Desenvolvimento SaaS."
      : "Professional web development services including Landing Pages, E-commerce Solutions, and SaaS Development.",
    inLanguage: isPortuguese ? "pt-BR" : "en-US",
    offers: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: isPortuguese
            ? "Desenvolvimento de Landing Page"
            : "Landing Page Development",
          description: isPortuguese
            ? "Landing pages de alta conversão projetadas para transformar visitantes em clientes."
            : "High-converting landing pages designed to turn visitors into customers.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: isPortuguese
            ? "Desenvolvimento de E-commerce"
            : "E-commerce Development",
          description: isPortuguese
            ? "Lojas online personalizadas construídas para crescimento e experiências de compra fluidas."
            : "Custom online stores built for growth and seamless shopping experiences.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: isPortuguese ? "Desenvolvimento SaaS" : "SaaS Development",
          description: isPortuguese
            ? "Aplicações software-as-a-service escaláveis construídas com tecnologias modernas."
            : "Scalable software-as-a-service applications built with modern technologies.",
        },
      },
    ],
  };
}

export function getLocalBusinessSchema(locale: string = "en") {
  const isPortuguese = locale === "pt-BR";

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    description: isPortuguese
      ? "Agência de desenvolvimento web especializada em sites de alta conversão, e-commerce e soluções SaaS."
      : siteConfig.description,
    image: `${siteConfig.url}/og/default.svg`,
    priceRange: "$$",
    email: "nelsonkenzotamashiro@gmail.com",
    inLanguage: isPortuguese ? "pt-BR" : "en-US",
    sameAs: [
      siteConfig.social.twitter,
      siteConfig.social.linkedin,
      siteConfig.social.github,
    ],
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
  };
}

export function getBlogSchema(locale: string = "en") {
  const isPortuguese = locale === "pt-BR";

  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${siteConfig.name} Blog`,
    url: `${siteConfig.url}/blog`,
    description: isPortuguese
      ? "Insights sobre landing pages, e-commerce e desenvolvimento SaaS da equipe da Elan Logic."
      : "Insights on landing pages, e-commerce, and SaaS development from the team at Elan Logic.",
    inLanguage: isPortuguese ? "pt-BR" : "en-US",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function getBlogPostSchema(
  post: {
    title: string;
    description: string;
    slug: string;
    publishedAt: string;
    updatedAt?: string;
    author: string;
  },
  locale: string = "en"
) {
  const isPortuguese = locale === "pt-BR";
  const blogPath = isPortuguese
    ? `/pt-BR/blog/${post.slug}`
    : `/blog/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `${siteConfig.url}${blogPath}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    inLanguage: isPortuguese ? "pt-BR" : "en-US",
    author: {
      "@type": "Organization",
      name: post.author,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/og/default.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${blogPath}`,
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
