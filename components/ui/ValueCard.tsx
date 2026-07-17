import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: "gold" | "teal";
  className?: string;
}

export function ValueCard({
  icon: Icon,
  title,
  description,
  accent = "gold",
  className,
}: ValueCardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col gap-4 rounded-2xl border border-white/5 bg-surface-4 p-6",
        "shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-gold/20 transition-all duration-300",
        className
      )}
    >
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300",
          accent === "gold"
            ? "bg-gold/10 text-gold group-hover:bg-gold group-hover:text-charcoal-800"
            : "bg-teal/10 text-teal-light group-hover:bg-teal group-hover:text-white"
        )}
      >
        <Icon className="h-6 w-6" />
      </div>

      <div>
        <h3 className="font-display font-bold text-lg text-warm-50 mb-2">{title}</h3>
        <p className="text-sm text-warm-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
