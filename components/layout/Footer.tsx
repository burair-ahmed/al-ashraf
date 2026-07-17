"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Globe, Share2, MessageCircle, AtSign } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { divisions } from "@/data/divisions";

const quickLinks = [
  { label: "About Us",      href: "/about" },
  { label: "Projects",      href: "/projects" },
  { label: "Careers",       href: "/careers" },
  { label: "News & Updates",href: "/news" },
  { label: "Contact Us",    href: "/contact" },
];

const socialLinks = [
  { label: "LinkedIn",   href: "#", icon: Globe },
  { label: "Facebook",   href: "#", icon: Share2 },
  { label: "Instagram",  href: "#", icon: MessageCircle },
  { label: "Twitter / X",href: "#", icon: AtSign },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-2 border-t border-white/5" role="contentinfo">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">

          {/* Company info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group" aria-label="Al Ashraf Group — Home">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold font-display font-black text-charcoal-800 text-lg group-hover:bg-gold-light transition-colors duration-200">
                AG
              </div>
              <div className="leading-tight">
                <p className="font-display font-bold text-warm-50 text-sm">Al Ashraf Group</p>
                <p className="text-warm-600 text-[10px] uppercase tracking-widest">of Companies</p>
              </div>
            </Link>
            <p className="text-warm-500 text-sm leading-relaxed mb-6">
              Founded in 2017, AGOC is a diversified conglomerate headquartered in Karachi, delivering excellence across construction, dairy, e-commerce, and consumer services.
            </p>

            <div className="space-y-3 text-sm text-warm-500">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <span>Plot # B-02, Main University Rd, Block 10 Gulshan-e-Iqbal, Karachi, Pakistan</span>
              </div>
              <a href="tel:+922134944448" className="flex items-center gap-2.5 hover:text-gold transition-colors duration-200">
                <Phone className="h-4 w-4 text-gold shrink-0" />
                <span>+92 21 34944448 / +92 21 34941122</span>
              </a>
              <a href="mailto:info@alashrafgroup.com" className="flex items-center gap-2.5 hover:text-gold transition-colors duration-200">
                <Mail className="h-4 w-4 text-gold shrink-0" />
                <span>info@alashrafgroup.com</span>
              </a>
            </div>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="text-eyebrow text-warm-500 mb-5">Our Businesses</h3>
            <ul className="space-y-3">
              {divisions.map((d) => (
                <li key={d.slug}>
                  <Link href={`/businesses/${d.slug}`} className="text-sm text-warm-500 hover:text-gold transition-colors duration-200">
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-eyebrow text-warm-500 mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-warm-500 hover:text-gold transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Newsletter */}
          <div>
            <h3 className="text-eyebrow text-warm-500 mb-5">Stay Connected</h3>
            <p className="text-sm text-warm-500 mb-4">
              Follow our latest projects, news, and group updates.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-4 border border-white/8 text-warm-400 hover:bg-gold hover:text-charcoal-800 hover:border-gold transition-all duration-200"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <h4 className="text-sm font-semibold text-warm-300 mb-3">Newsletter</h4>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-full bg-surface-4 border border-white/10 px-4 py-2 text-sm text-warm-200 placeholder-warm-600 focus:outline-none focus:border-gold transition-colors duration-200"
                aria-label="Newsletter email"
              />
              <button
                type="submit"
                className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-charcoal-800 hover:bg-gold-light transition-colors duration-200"
              >
                →
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warm-600">
            © {year} Al Ashraf Group of Companies. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-warm-600">
            <Link href="/privacy" className="hover:text-warm-400 transition-colors duration-200">Privacy Policy</Link>
            <span aria-hidden>·</span>
            <Link href="/terms" className="hover:text-warm-400 transition-colors duration-200">Terms of Use</Link>
            <span aria-hidden>·</span>
            <span>Karachi, Pakistan</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
