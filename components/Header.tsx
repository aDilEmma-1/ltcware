"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Globe, Menu } from "lucide-react";
import { Logo } from "@/components/Logo";
import { DesktopMegaMenu } from "@/components/DesktopMegaMenu";
import { MobileMenu } from "@/components/MobileMenu";
import { Button } from "@/components/ui/Button";
import { primaryNav, headerActions } from "@/content/navigation";

export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const active = primaryNav.find((m) => m.id === openMenu);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow ${
          scrolled ? "shadow-[0_2px_12px_-6px_rgba(8,35,62,0.25)]" : ""
        } border-b border-navy/[0.06]`}
      >
        <div className="container-lg flex h-16 items-center justify-between md:h-18">
          <Logo />

          {/* Desktop nav */}
          <nav
            className="relative hidden lg:block"
            onMouseLeave={() => setOpenMenu(null)}
          >
            <ul className="flex items-center gap-1">
              {primaryNav.map((menu) =>
                menu.type === "link" ? (
                  <li key={menu.id}>
                    <Link
                      href={menu.href}
                      className="rounded-full px-3 py-2 text-sm font-semibold text-navy/80 transition-colors hover:bg-brand-50 hover:text-brand"
                    >
                      {menu.label}
                    </Link>
                  </li>
                ) : (
                  <li key={menu.id} onMouseEnter={() => setOpenMenu(menu.id)}>
                    <button
                      onClick={() =>
                        setOpenMenu(openMenu === menu.id ? null : menu.id)
                      }
                      aria-expanded={openMenu === menu.id}
                      className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
                        openMenu === menu.id
                          ? "bg-brand-50 text-brand"
                          : "text-navy/80 hover:bg-brand-50 hover:text-brand"
                      }`}
                    >
                      {menu.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openMenu === menu.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </li>
                )
              )}
            </ul>

            {/* Dropdown panel (descendant of nav so hover-bridge works) */}
            {active && active.type === "mega" && (
              <div className="absolute left-1/2 top-full z-50 -translate-x-1/2">
                <div className="pt-3">
                  <div className="animate-fade-in overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_24px_60px_-24px_rgba(8,35,62,0.35)]">
                    <DesktopMegaMenu
                      menu={active}
                      onSelect={() => setOpenMenu(null)}
                    />
                  </div>
                </div>
              </div>
            )}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href={headerActions.contact.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-navy/80 hover:text-brand"
            >
              {headerActions.contact.label}
            </Link>
            <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-navy/70 hover:text-brand">
              <Globe className="h-4 w-4" />
              {headerActions.language}
            </button>
            <Button href={headerActions.demo.href} size="md">
              {headerActions.demo.label}
            </Button>
          </div>

          {/* Mobile trigger */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center rounded-full text-navy hover:bg-brand-50 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
