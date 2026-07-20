"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { divisions } from "@/data/divisions";

const mainNav = [
  { label: "Home",        href: "/" },
  { label: "About Us",    href: "/about" },
  { label: "Team",        href: "/#team" },
  { label: "Companies",   href: "/companies" },
  { label: "Careers",     href: "/careers" },
  { label: "Contact Us",  href: "/contact" },
];

export function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname    = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setDropdownOpen(false);
  }

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-surface-1/90 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.05)] border-b border-white/5"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-18 items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center group" aria-label="Al Ashraf Group - Home">
              <img
                src="/al-ashraf-logo.png"
                alt="Al Ashraf Group of Companies Logo"
                style={{ height: "52px", width: "auto" }}
                className="object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-2" role="navigation" aria-label="Main navigation">
              {mainNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                      ? "text-gold bg-gold/5 border border-gold/10"
                      : "text-warm-400 hover:text-warm-50 hover:bg-white/5 border border-transparent"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-charcoal-800 hover:bg-gold-light transition-all duration-200 shadow-gold-sm hover:shadow-gold"
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full bg-surface-4 border border-white/8 text-warm-200 hover:border-gold/40 hover:text-gold transition-all duration-200"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-surface-2 border-l border-white/5 overflow-y-auto"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <span className="font-display font-bold text-warm-50">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="h-9 w-9 flex items-center justify-center rounded-full bg-surface-4 border border-white/8 text-warm-300 hover:text-gold transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-4 space-y-1">
                {mainNav.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-150",
                        pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                          ? "bg-gold/10 text-gold border border-gold/20"
                          : "text-warm-300 hover:bg-surface-4 hover:text-warm-50"
                      )}
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>

              <div className="p-6 border-t border-white/5">
                <Link
                  href="/contact"
                  className="block w-full rounded-full bg-gold py-3 text-center text-sm font-semibold text-charcoal-800 hover:bg-gold-light transition-colors duration-200 font-display"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
