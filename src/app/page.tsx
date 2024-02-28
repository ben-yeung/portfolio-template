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
      <div className={`${styles["section"]} ${styles["hero"]}`}>
        <div className={styles["hero-intro"]}>
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
        <div className={styles["hero-img-container"]}>
          <img className={styles["hero-img"]} src="/assets/hero.png" alt="" />
          <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" className={`${styles["hero-blob"]} ${currTheme == "dark" ? styles["dark-blob"] : styles["light-blob"]}`}>
            <path
              d="M31,-40.6C42.4,-34.5,55.2,-28.3,63.3,-17.3C71.3,-6.3,74.6,9.5,68.8,20.8C63,32.2,48.2,39,35.2,49C22.2,58.9,11.1,72,-4,77.5C-19.2,83.1,-38.4,81.2,-43.2,68.6C-48,56,-38.4,32.7,-37.4,16.7C-36.3,0.7,-43.9,-8,-47,-20.5C-50.2,-33,-49,-49.4,-40.4,-56.4C-31.8,-63.3,-15.9,-60.9,-3,-56.8C9.8,-52.6,19.7,-46.6,31,-40.6Z"
              transform="translate(80 75)"
            />
          </svg>
        </div>
        {/* <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={`${styles["hero-blob-alt"]} ${currTheme == "dark" ? styles["dark-blob-secondary"] : styles["light-blob-secondary"]}`}>
          <path
            d="M42.6,-38.2C56.9,-38.7,71.5,-26.9,77.2,-11.2C82.8,4.5,79.5,24.3,67.5,33.4C55.6,42.5,35,41,19.2,42C3.5,43.1,-7.4,46.7,-15.1,43.1C-22.7,39.6,-27.1,28.9,-38.3,18C-49.4,7.1,-67.3,-3.9,-70.4,-16.9C-73.4,-29.8,-61.6,-44.6,-47.5,-44.2C-33.3,-43.8,-16.6,-28,-1.3,-26.5C14.1,-25,28.2,-37.7,42.6,-38.2Z"
            transform="translate(70 100)"
          />
        </svg> */}
      </div>
      <div className={styles["section"]}></div>
    </main>
  );
}
