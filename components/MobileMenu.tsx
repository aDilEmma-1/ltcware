"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, ChevronDown, Globe, ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Icon } from "@/components/ui/Icon";
import { primaryNav, headerActions } from "@/content/navigation";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // Only one accordion category open at a time.
  const [openId, setOpenId] = useState<string | null>(null);

  // Lock body scroll + close on Escape while the overlay is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex flex-col bg-gradient-to-b from-navy to-brand-700 text-white lg:hidden">
      {/* Bar */}
      <div className="flex items-center justify-between px-5 py-4">
        <Logo variant="light" />
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Scrollable nav */}
      <nav className="flex-1 overflow-y-auto px-5 pb-8">
        <ul className="divide-y divide-white/10">
          {primaryNav.map((menu) => {
            if (menu.type === "link") {
              return (
                <li key={menu.id}>
                  <Link
                    href={menu.href}
                    onClick={onClose}
                    className="flex items-center justify-between py-5 text-2xl font-semibold"
                  >
                    {menu.label}
                    <ArrowRight className="h-6 w-6 text-white/50" />
                  </Link>
                </li>
              );
            }

            const isOpen = openId === menu.id;
            const links = menu.columns?.flatMap((c) => c.links) ?? [];
            return (
              <li key={menu.id}>
                <button
                  onClick={() => setOpenId(isOpen ? null : menu.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between py-5 text-2xl font-semibold"
                >
                  {menu.label}
                  <ChevronDown
                    className={`h-7 w-7 text-white/60 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="animate-fade-in pb-4">
                    <ul className="space-y-1">
                      {links.map((l) => (
                        <li key={l.href + l.label}>
                          <Link
                            href={l.href}
                            onClick={onClose}
                            className="flex items-start gap-3 rounded-xl px-3 py-3 hover:bg-white/10"
                          >
                            {l.icon && (
                              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-brand-2">
                                <Icon name={l.icon} className="h-4.5 w-4.5" />
                              </span>
                            )}
                            <span>
                              <span className="block text-base font-medium text-white">
                                {l.label}
                              </span>
                              {l.description && (
                                <span className="block text-sm text-white/60">
                                  {l.description}
                                </span>
                              )}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="mt-8 space-y-3">
          <Link
            href={headerActions.demo.href}
            onClick={onClose}
            className="flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-lg font-semibold text-brand"
          >
            {headerActions.demo.label}
          </Link>
          <Link
            href={headerActions.contact.href}
            onClick={onClose}
            className="flex w-full items-center justify-center rounded-full border border-white/40 px-6 py-4 text-lg font-semibold text-white hover:bg-white/10"
          >
            {headerActions.contact.label}
          </Link>
          <div className="flex items-center justify-center gap-2 pt-2 text-sm text-white/60">
            <Globe className="h-4 w-4" />
            {headerActions.language}
          </div>
        </div>
      </nav>
    </div>
  );
}
