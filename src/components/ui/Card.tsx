"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { cardHover } from "@/lib/animations";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({ children, className, hoverable = true }: CardProps) {
  if (!hoverable) {
    return (
      <div
        className={cn(
          "rounded-2xl bg-white shadow-card overflow-hidden",
          className
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardHover}
      className={cn(
        "rounded-2xl bg-white overflow-hidden cursor-pointer",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
