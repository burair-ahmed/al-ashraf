"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Milk, ShoppingCart, Users, Truck, ArrowRight } from "lucide-react";
import { type Company } from "@/data/companies";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Milk,
  ShoppingCart,
  Users,
  Truck,
};

interface CompanyCardProps {
  company: Company;
  className?: string;
}

export function CompanyCard({ company, className }: CompanyCardProps) {
  const Icon = iconMap[company.iconName] ?? Building2;
  const isGold = company.accentColor === "gold";

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={{ willChange: "transform" }}
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-surface-4 border border-white/5",
        "shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col h-full",
        isGold ? "hover:border-gold/20" : "hover:border-teal/20",
        className
      )}
    >
      {/* Background Image Header */}
      <div className="relative h-48 w-full shrink-0 overflow-hidden">
        <Image
          src={company.bgImage}
          alt={company.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Gradient bridge — lives OUTSIDE the image div so it straddles the seam.
          Spans 80px above h-48 (12rem) and 2px below it, eliminating any hard line. */}
      <div
        className="absolute inset-x-0 z-10 pointer-events-none bg-gradient-to-b from-transparent to-surface-4"
        style={{ top: "calc(12rem - 80px)", height: "82px" }}
      />

      {/* Floating Logo / Icon Badge */}
      <div className="absolute left-6 z-20" style={{ top: "calc(12rem - 32px)" }}>
        <div className={cn(
          "h-16 w-16 rounded-2xl bg-surface-3 border flex items-center justify-center p-3 shadow-xl transition-all duration-300",
          isGold
            ? "border-gold/30 group-hover:border-gold/60 group-hover:shadow-gold-sm"
            : "border-teal/30 group-hover:border-teal/60"
        )}>
          {company.logoUrl ? (
            <img
              src={company.logoUrl}
              alt={`${company.name} Logo`}
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <Icon
              className={cn(
                "h-7 w-7",
                isGold ? "text-gold" : "text-teal-light"
              )}
            />
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 pt-12 flex flex-col flex-grow">
        <h3 className="font-display font-bold text-xl text-warm-50 tracking-tight group-hover:text-gold transition-colors duration-200 mb-1">
          {company.name}
        </h3>
        <p
          className={cn(
            "text-[11px] font-semibold tracking-wider uppercase mb-4",
            isGold ? "text-gold/80" : "text-teal-light/80"
          )}
        >
          {company.tagline}
        </p>
        
        <p className="text-warm-400 text-sm leading-relaxed mb-6 flex-grow">
          {company.description}
        </p>

        <div className="border-t border-white/5 pt-4 mt-auto">
          <Link
            href={`/businesses/${company.divisionSlug}`}
            className={cn(
              "inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide transition-colors duration-200",
              isGold ? "text-gold hover:text-gold-light" : "text-teal-light hover:text-teal"
            )}
          >
            Explore Division
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
