"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-primary-500 text-white hover:bg-primary-600 shadow-sm hover:shadow-md",
  secondary: "bg-gold-400 text-white hover:bg-gold-500 shadow-sm hover:shadow-md",
  outline:
    "border-2 border-primary-500 text-primary-600 hover:bg-primary-50 hover:border-primary-600",
  ghost: "text-primary-600 hover:bg-primary-50",
  white: "bg-white text-base-800 hover:bg-warm-100 shadow-lg",
  "outline-light":
    "border-2 border-white/50 text-white hover:bg-white/10 hover:border-white/70",
} as const;

const sizes = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-2.5 text-base gap-2",
  lg: "px-8 py-3.5 text-lg gap-2.5",
} as const;

export interface ButtonProps {
  variant?: keyof typeof variants;
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  href?: string;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  "aria-label"?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      icon,
      href,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      "inline-flex items-center justify-center font-medium rounded-lg",
      "transition-colors duration-200 cursor-pointer",
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500",
      "disabled:opacity-50 disabled:pointer-events-none",
      variants[variant],
      sizes[size],
      className
    );

    const motionProps = {
      whileHover: disabled ? undefined : { scale: 1.03 },
      whileTap: disabled ? undefined : { scale: 0.97 },
      transition: { type: "spring" as const, stiffness: 400, damping: 20 },
    };

    if (href) {
      return (
        <motion.div {...motionProps} className="inline-flex">
          <Link href={href} className={classes}>
            {icon && <span className="shrink-0">{icon}</span>}
            {children}
          </Link>
        </motion.div>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={classes}
        disabled={disabled}
        {...motionProps}
        type={props.type}
        onClick={props.onClick}
        aria-label={props["aria-label"]}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
