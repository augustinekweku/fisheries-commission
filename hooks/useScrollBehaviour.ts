"use client";

import { useState, useEffect } from "react";

export const useScrollBehavior = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const toggleScrolled = () => {
      setIsScrolled(window.scrollY > 100);
    };

    // Initial check
    toggleScrolled();

    // Add scroll listener
    window.addEventListener("scroll", toggleScrolled);

    // Cleanup
    return () => window.removeEventListener("scroll", toggleScrolled);
  }, []);

  return isScrolled;
};
