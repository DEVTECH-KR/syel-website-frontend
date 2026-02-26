import { cn } from "@/lib/utils";

const variants = {
  default: "bg-teal-100 text-teal-700",
  primary: "bg-primary-100 text-primary-700",
  gold: "bg-gold-100 text-gold-700",
  outline: "bg-transparent border border-warm-300 text-warm-700",
} as const;

export interface BadgeProps {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
