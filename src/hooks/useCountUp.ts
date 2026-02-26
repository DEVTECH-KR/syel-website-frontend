"use client";

import { useState, useEffect, useCallback } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  start?: number;
  enabled?: boolean;
}

export function useCountUp({
  end,
  duration = 2000,
  start = 0,
  enabled = true,
}: UseCountUpOptions) {
  const [count, setCount] = useState(start);

  const animate = useCallback(() => {
    const startTime = performance.now();
    const diff = end - start;

    function step(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(start + diff * eased));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, [end, duration, start]);

  useEffect(() => {
    if (enabled) {
      animate();
    }
  }, [enabled, animate]);

  return count;
}
