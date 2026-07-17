import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: "dark" | "gold";
  className?: string;
}

export function CTASection({
  eyebrow,
  heading,
  description,
  primaryCta,
  secondaryCta,
  variant = "dark",
  className,
}: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={cn(
        "relative overflow-hidden py-24",
        isDark ? "bg-surface-3 border-t border-b border-white/5" : "bg-gold-700",
        className
      )}
      aria-label="Call to action"
    >
      {/* Decorative glows */}
      <div
        className={cn(
          "absolute -top-40 -right-40 h-96 w-96 rounded-full blur-3xl pointer-events-none",
          isDark ? "bg-gold/8" : "bg-charcoal-800/20"
        )}
        aria-hidden="true"
      />
      <div
        className={cn(
          "absolute -bottom-40 -left-40 h-96 w-96 rounded-full blur-3xl pointer-events-none",
          isDark ? "bg-teal/6" : "bg-charcoal-800/20"
        )}
        aria-hidden="true"
      />

      <Container>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          {eyebrow && (
            <p className={cn("text-eyebrow mb-4", isDark ? "text-gold" : "text-warm-200")}>
              {eyebrow}
            </p>
          )}
          <h2 className={cn("font-display font-bold text-display-lg mb-6", isDark ? "text-warm-50" : "text-charcoal-800")}>
            {heading}
          </h2>
          {description && (
            <p className={cn("text-body-lg mb-10", isDark ? "text-warm-400" : "text-charcoal-600")}>
              {description}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={primaryCta.href}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold font-display transition-all duration-300 active:scale-95",
                isDark
                  ? "bg-gold text-charcoal-800 hover:bg-gold-light shadow-gold hover:shadow-gold"
                  : "bg-charcoal-800 text-warm-50 hover:bg-charcoal-700"
              )}
            >
              {primaryCta.label}
              <ArrowRight className="h-5 w-5" />
            </Link>

            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border-2 px-8 py-3.5 text-base font-semibold font-display transition-all duration-300 active:scale-95",
                  isDark
                    ? "border-white/15 text-warm-300 hover:border-gold hover:text-gold"
                    : "border-charcoal-600 text-charcoal-700 hover:border-charcoal-800 hover:text-charcoal-800"
                )}
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
