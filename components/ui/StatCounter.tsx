"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  className?: string;
  light?: boolean;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 2000,
  className,
  light = false,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!isInView || hasStarted.current) return;
    hasStarted.current = true;

    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <div
      ref={ref}
      className={cn("flex flex-col items-center text-center", className)}
    >
      <div
        className={cn(
          "font-display font-bold text-display-lg tabular-nums",
          "text-warm-50"
        )}
      >
        <span className="text-gold">{prefix}</span>
        {count.toLocaleString()}
        <span className="text-gold">{suffix}</span>
      </div>
      <p
        className={cn(
          "mt-2 text-sm font-medium uppercase tracking-widest",
          light ? "text-warm-400" : "text-warm-500"
        )}
      >
        {label}
      </p>
    </div>
  );
}
