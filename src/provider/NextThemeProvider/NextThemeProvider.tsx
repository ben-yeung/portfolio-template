"use client";
import { ThemeProvider } from "next-themes";

/*
Wrapper for ThemeProvider to use in layout.tsx
*/
const NextThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
export default NextThemeProvider;
