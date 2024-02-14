"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

/*
Wrapper for ThemeProvider to use in layout.tsx
*/
const NextThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider>{children}</ThemeProvider>;
};
export default NextThemeProvider;
