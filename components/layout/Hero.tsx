import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { cn } from "@/lib/utils";

interface HeroProps {
  // Home variant
  variant?: "home" | "inner";
  headline?: string;
  subheadline?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  // Inner page variant
  eyebrow?: string;
  breadcrumbs?: { label: string; href?: string }[];
  // Image
  image: string;
  imageAlt?: string;
  // Optional: add a tint overlay color for division pages
  tintColor?: "charcoal" | "gold" | "teal";
}

export function Hero({
  variant = "home",
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  eyebrow,
  breadcrumbs,
  image,
  imageAlt = "Al Ashraf Group",
  tintColor = "charcoal",
}: HeroProps) {
  if (variant === "inner") {
    return (
      <section className="relative overflow-hidden bg-surface-1" aria-label="Page header">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            className={cn(
              "absolute inset-0",
              tintColor === "gold"
                ? "bg-charcoal-900/70"
                : tintColor === "teal"
                ? "bg-teal-dark/80"
                : "bg-charcoal-900/75"
            )}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 pt-36">
          {breadcrumbs && (
            <div className="mb-6">
              <Breadcrumbs items={breadcrumbs} light />
            </div>
          )}
          {eyebrow && (
            <p className="text-eyebrow text-gold mb-4">{eyebrow}</p>
          )}
          <h1 className="font-display font-bold text-display-xl text-warm-50 max-w-3xl">
            {headline}
          </h1>
          {subheadline && (
            <p className="mt-4 text-body-lg text-warm-300 max-w-2xl">{subheadline}</p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-surface-1"
      aria-label="Hero section"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover scale-105"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="overlay-hero absolute inset-0" />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-1/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-eyebrow text-gold mb-6 animate-fade-in">{eyebrow}</p>
          )}

          <h1 className="font-display font-black text-display-2xl text-warm-50 leading-[1.0] tracking-tight mb-6">
            {headline}
          </h1>

          {subheadline && (
            <p className="text-body-lg text-warm-300 max-w-xl mb-10">
              {subheadline}
            </p>
          )}

          <div className="flex flex-wrap gap-4">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-base font-semibold text-charcoal-800 hover:bg-gold-light shadow-gold hover:shadow-gold transition-all duration-300 active:scale-95 font-display"
              >
                {primaryCta.label}
                <ArrowRight className="h-5 w-5" />
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-full border-2 border-warm-200/40 px-7 py-3.5 text-base font-semibold text-warm-100 hover:border-gold hover:text-gold transition-all duration-300 active:scale-95 font-display"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>

        {/* Bottom scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-warm-500">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-warm-500 to-transparent" />
        </div>
      </div>
    </section>
  );
}
