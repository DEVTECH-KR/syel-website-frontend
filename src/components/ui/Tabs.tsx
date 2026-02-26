"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

export function Tabs({ tabs, activeTab, onTabChange, className }: TabsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeRef.current && scrollRef.current) {
      const container = scrollRef.current;
      const button = activeRef.current;
      const scrollLeft =
        button.offsetLeft -
        container.clientWidth / 2 +
        button.clientWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [activeTab]);

  return (
    <div
      ref={scrollRef}
      className={cn(
        "flex gap-1 overflow-x-auto scrollbar-none -mx-1 px-1",
        className
      )}
    >
      {tabs.map((tab) => {
        const isActive = tab === activeTab;

        return (
          <button
            key={tab}
            ref={isActive ? activeRef : undefined}
            type="button"
            onClick={() => onTabChange(tab)}
            className={cn(
              "relative shrink-0 px-5 py-2.5 text-sm font-medium transition-colors cursor-pointer",
              "rounded-lg whitespace-nowrap",
              isActive ? "text-teal-600" : "text-warm-500 hover:text-warm-700"
            )}
          >
            {tab}
            {isActive && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-teal-500"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
