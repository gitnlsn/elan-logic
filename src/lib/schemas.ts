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

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function getServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    serviceType: "Web Development",
    description: "Professional web development services including Landing Pages, E-commerce Solutions, and SaaS Development.",
    offers: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landing Page Development",
          description: "High-converting landing pages designed to turn visitors into customers.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-commerce Development",
          description: "Custom online stores built for growth and seamless shopping experiences.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SaaS Development",
          description: "Scalable software-as-a-service applications built with modern technologies.",
        },
      },
    ],
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    image: `${siteConfig.url}/og/default.svg`,
    priceRange: "$$",
    email: "hello@elanlogic.com",
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
