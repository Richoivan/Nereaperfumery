"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/constants/navigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((href: string) => {
    setMenuOpen(false);
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  return (
    <header
      id="nav"
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled && "glass"
      )}
    >
      <div className="container-x flex items-center justify-between py-5">
        {/* Logo */}
        <button
          onClick={() => scrollTo("#top")}
          className="h-display text-2xl tracking-wider text-cream cursor-pointer"
          aria-label="Nerèa home"
        >
          Ner<span className="italic text-gold">è</span>a
        </button>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-8 lg:gap-12 text-[11px] uppercase tracking-widest2 text-ivory/75"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="nav-link cursor-pointer bg-transparent border-none p-0"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] items-center justify-center w-10 h-10"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span
            className={cn(
              "block w-5 h-px bg-cream transition-all duration-300",
              menuOpen && "rotate-45 translate-y-[6px]"
            )}
          />
          <span
            className={cn(
              "block w-5 h-px bg-cream transition-all duration-300",
              menuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block w-5 h-px bg-cream transition-all duration-300",
              menuOpen && "-rotate-45 -translate-y-[6px]"
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass" role="navigation" aria-label="Mobile navigation">
          <div className="container-x py-6 flex flex-col gap-4 text-[12px] uppercase tracking-widest2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="nav-link text-left cursor-pointer bg-transparent border-none p-0"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
