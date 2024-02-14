"use client";

import { ThemeProvider } from "next-themes";
import styles from "./page.module.css";
import NavBar from "@/components/NavBar/navbar";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    console.log(currTheme);
  }, [currTheme]);

  return (
    <main className={`${styles.main} ${currTheme == "dark" ? styles.dark : styles.light}`}>
      {mounted ? (
        <>
          <NavBar />
          <div className={styles.hero}>Hello World</div>
        </>
      ) : null}
    </main>
  );
}
