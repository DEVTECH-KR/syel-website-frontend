"use client";

import { cn } from "@/lib/utils";
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";

export interface CounterProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function Counter({
  value,
  label,
  suffix = "",
  prefix = "",
  icon,
  className,
}: CounterProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const count = useCountUp({ end: value, enabled: isInView });

  return (
    <div ref={ref} className={cn("text-center", className)}>
      {icon && (
        <div className="mb-3 inline-flex items-center justify-center text-primary-500">
          {icon}
        </div>
      )}
      <div className="font-heading text-4xl font-bold text-base-800 md:text-5xl">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className="mt-2 text-sm font-medium uppercase tracking-wider text-warm-600">
        {label}
      </p>
    </div>
  );
}
