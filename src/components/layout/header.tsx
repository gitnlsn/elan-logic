"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { NavLink } from "./nav-link";
import { MobileMenu } from "./mobile-menu";
import { siteConfig, getWhatsAppUrl } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary">
            {siteConfig.name}
          </Link>

          <nav className="hidden items-center space-x-8 md:flex">
            {siteConfig.nav.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button asChild className="hidden sm:inline-flex">
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                Get in Touch
              </a>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
