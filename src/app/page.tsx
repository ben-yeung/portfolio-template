"use client";

import styles from "./page.module.css";
import NavBar from "@/components/NavBar/navbar";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Typewriter from "typewriter-effect";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  var start = 1000;
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    console.log(currTheme);
  }, [currTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <main className={`${styles.main} ${currTheme == "dark" ? styles.dark : styles.light}`}>
      <NavBar />
      <div className={styles.hero}>
        <div className={styles.heroIntro}>
          <h2>Hello! 👋</h2>
          <h1>I'm First Last</h1>
          <div className={styles.typewriter}>
            developing
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(start)
                  .typeString("new experiences.")
                  .pauseFor(1000)
                  .deleteAll()
                  .pauseFor(500)
                  .typeString("for the future.")
                  .pauseFor(1000)
                  .deleteAll()
                  .pauseFor(500)
                  .typeString("beautiful UI/UXs.")
                  .pauseFor(1000)
                  .deleteAll()
                  .pauseFor(500)
                  .typeString("responsive apps.")
                  .pauseFor(1000)
                  .deleteAll()
                  .pauseFor(500)
                  .typeString("thoughtful products.")
                  .pauseFor(1000)
                  .deleteAll()
                  .pauseFor(500)
                  .callFunction(() => {
                    start = 1000;
                  })
                  .start();
              }}
              options={{
                delay: 70,
                // autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className={styles.heroImg}>
          <img src="/assets/hero.png" style={{ width: "100%" }} alt="" />
        </div>
      </div>
    </main>
  );
}
