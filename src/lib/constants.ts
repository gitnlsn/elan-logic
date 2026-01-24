export const siteConfig = {
  name: "Elan Logic",
  description:
    "Web development agency specializing in high-converting websites, e-commerce, and SaaS solutions.",
  url: "https://elanlogic.com",
  whatsapp: {
    number: "5511975153417",
    message: "Hi! I'm interested in learning more about your web development services.",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  social: {
    twitter: "https://twitter.com/elanlogic",
    linkedin: "https://linkedin.com/company/elanlogic",
    github: "https://github.com/elanlogic",
  },
};

export function getWhatsAppUrl(customMessage?: string) {
  const message = customMessage || siteConfig.whatsapp.message;
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
