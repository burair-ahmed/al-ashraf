"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Milk, ShoppingCart, Users } from "lucide-react";
import { type Division } from "@/data/divisions";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Milk,
  ShoppingCart,
  Users,
};

interface DivisionCardProps {
  division: Division;
  className?: string;
}

export function DivisionCard({ division, className }: DivisionCardProps) {
  const Icon = iconMap[division.icon] ?? Building2;
  const isGold = division.accentColor === "gold";

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-surface-4 border border-white/5 hover:border-gold/20 shadow-card hover:shadow-card-hover transition-colors duration-300",
        className
      )}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={division.cardImage}
          alt={division.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="overlay-card absolute inset-0" />

        {/* Icon badge */}
        <div
          className={cn(
            "absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl",
            isGold ? "bg-gold/20 backdrop-blur-sm" : "bg-teal/20 backdrop-blur-sm"
          )}
        >
          <Icon
            className={cn("h-5 w-5", isGold ? "text-gold" : "text-teal-light")}
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-bold text-xl text-warm-50 mb-2">
          {division.name}
        </h3>
        <p className="text-warm-400 text-sm leading-relaxed line-clamp-3 mb-4">
          {division.description}
        </p>

        {/* Services preview */}
        <div className="flex flex-wrap gap-2 mb-5">
          {division.services.slice(0, 3).map((service) => (
            <span
              key={service}
              className="text-xs px-2 py-1 rounded-full bg-surface-5 border border-white/8 text-warm-400"
            >
              {service}
            </span>
          ))}
          {division.services.length > 3 && (
            <span className="text-xs px-2 py-1 rounded-full bg-surface-5 border border-white/8 text-warm-500">
              +{division.services.length - 3} more
            </span>
          )}
        </div>

        {/* CTA */}
        <Link
          href={`/businesses/${division.slug}`}
          className={cn(
            "inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200",
            isGold
              ? "text-gold hover:text-gold-light"
              : "text-teal-light hover:text-teal-300"
          )}
          aria-label={`Learn more about ${division.name}`}
        >
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
