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
  const [mousePosition, setCoords] = useState({
    x: 0,
    y: 0
  })

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

  function handleMouseMove(event:any) {
    const {x, y} = event;
    setCoords({x: x - 15, y: y - 15});
  }


  return (
    <main className={`${styles.main} ${currTheme == "dark" ? styles.dark : styles.light}`} onMouseMove={handleMouseMove}>
      <NavBar />
      <div id="overlay"></div>
      <div id="blob" style={{ top:`${mousePosition.x}px`, left: `${mousePosition.y}px`}}></div>
      <div className={`${styles["section"]} ${styles["hero"]}`}>
        <div className={styles["hero-intro"]}>
          <div className={styles["hero-first"]}>Hey, I'm</div>
          <div className={styles["hero-last"]}>Benjamin Yeung</div>
          <div className={styles["typewriter"]}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(start)
                  .typeString("a developer.")
                  .pauseFor(1000)
                  .deleteAll()
                  .pauseFor(500)
                  .typeString("a UI/UX designer.")
                  .pauseFor(1000)
                  .deleteAll()
                  .pauseFor(500)
                  .typeString("a foodie.")
                  .pauseFor(1000)
                  .deleteAll()
                  .pauseFor(500)
                  .typeString("a matcha fan.")
                  .pauseFor(1000)
                  .deleteAll()
                  .pauseFor(500)
                  .typeString("a lofi enjoyer.")
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
        {/* <div className={styles["hero-img-container"]}>
          <img className={styles["hero-img"]} src="/assets/hero.png" alt="" />
        </div> */}
        {/* <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={`${styles["hero-blob-alt"]} ${currTheme == "dark" ? styles["dark-blob-secondary"] : styles["light-blob-secondary"]}`}>
          <path
            d="M42.6,-38.2C56.9,-38.7,71.5,-26.9,77.2,-11.2C82.8,4.5,79.5,24.3,67.5,33.4C55.6,42.5,35,41,19.2,42C3.5,43.1,-7.4,46.7,-15.1,43.1C-22.7,39.6,-27.1,28.9,-38.3,18C-49.4,7.1,-67.3,-3.9,-70.4,-16.9C-73.4,-29.8,-61.6,-44.6,-47.5,-44.2C-33.3,-43.8,-16.6,-28,-1.3,-26.5C14.1,-25,28.2,-37.7,42.6,-38.2Z"
            transform="translate(70 100)"
          />
        </svg> */}
      </div>
      {/* <div className={styles["section"]}></div> */}
    </main>
  );
}
