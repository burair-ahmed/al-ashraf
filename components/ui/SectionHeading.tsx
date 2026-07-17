import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean; // kept for compat — on dark theme both are light
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={cn("max-w-3xl", isCenter && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="text-eyebrow text-gold mb-4">{eyebrow}</p>
      )}
      <h2
        className={cn(
          "font-display font-bold text-display-lg gold-underline text-warm-50",
          isCenter && "gold-underline-center"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-body-lg text-warm-400">
          {description}
        </p>
      )}
    </div>
  );
}
