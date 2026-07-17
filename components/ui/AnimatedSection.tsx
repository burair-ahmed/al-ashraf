"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  amount?: number;
}

function getInitial(direction: AnimatedSectionProps["direction"]) {
  const base = { opacity: 0 };
  if (direction === "up") return { ...base, y: 40, x: 0 };
  if (direction === "down") return { ...base, y: -40, x: 0 };
  if (direction === "left") return { ...base, x: 40, y: 0 };
  if (direction === "right") return { ...base, x: -40, y: 0 };
  return base;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  amount = 0.15,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      initial={getInitial(direction)}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0 }
          : getInitial(direction)
      }
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};
