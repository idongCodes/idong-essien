"use client";

import { useEffect, useRef } from "react";
import { incrementViews } from "../actions";

export default function ViewTracker({ slug }: { slug: string }) {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (!hasTracked.current) {
      hasTracked.current = true;
      // Fire and forget server action to track view
      incrementViews(slug);
    }
  }, [slug]);

  return null; // This component doesn't render anything visually
}
