"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-display font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-gold text-charcoal-800 hover:bg-gold-light shadow-gold-sm hover:shadow-gold active:scale-95",
        secondary:
          "bg-charcoal-800 text-warm-50 hover:bg-charcoal-700 border border-charcoal-600 active:scale-95",
        outline:
          "border-2 border-gold text-gold hover:bg-gold hover:text-charcoal-800 active:scale-95",
        ghost:
          "text-warm-50 hover:bg-charcoal-700 border border-transparent active:scale-95",
        "outline-light":
          "border-2 border-warm-200 text-warm-100 hover:border-gold hover:text-gold active:scale-95",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 active:scale-95",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-full",
        md: "h-11 px-6 text-sm rounded-full",
        lg: "h-13 px-8 text-base rounded-full",
        xl: "h-15 px-10 text-lg rounded-full",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
