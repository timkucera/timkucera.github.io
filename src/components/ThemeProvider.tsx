"use client";

import { useEffect } from "react";
import { ThemeConfig } from "@/lib/types";

interface ThemeProviderProps {
  config: ThemeConfig;
  children: React.ReactNode;
}

export function ThemeProvider({ config, children }: ThemeProviderProps) {
  useEffect(() => {
    const root = document.documentElement;

    if (config.defaultMode === "dark") {
      root.classList.add("dark");
    } else if (config.defaultMode === "light") {
      root.classList.remove("dark");
    }
    // "system" is handled by the inline script in layout to avoid flash
  }, [config.defaultMode]);

  return <>{children}</>;
}
