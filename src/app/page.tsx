"use client";

import styles from "./page.module.css";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar/navbar";
import Typewriter from "typewriter-effect";
import useMousePosition from "@/utils/useMousePosition";

import { SiReact, SiMongodb, SiNodedotjs, SiJavascript, SiTypescript, SiSelenium, SiGraphql, SiNextdotjs } from "react-icons/si";
import ProjectSpotlight from "@/components/ProjectSpotlight/spotlight";
import ContactForm from "@/components/ContactForm/form";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  const mousePosition = useMousePosition();

  var start = 1000;
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className={`${styles["main"]} ${currTheme == "dark" ? styles.dark : styles.light}`}>
      <div className={styles["overlay"]}></div>
      <motion.div className={styles["blob"]} style={{ left: mousePosition.x, top: mousePosition.y }}></motion.div>
      <NavBar />

      <div className={`${styles["section"]} ${styles["hero"]}`}>
        <div className={styles["hero-intro"]}>
          <motion.div className={styles["hero-first"]}>Hey, I'm</motion.div>
          <motion.div className={styles["hero-last"]}>Benjamin Yeung</motion.div>

          <motion.div className={styles["typewriter"]}>
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
          </motion.div>
          <motion.div className={styles["hero-disclaimer"]}>all information and assets are for template purposes</motion.div>
        </div>
      </div>
      <div id="about" className={styles["section"]}>
        <h1>About Me</h1>
        <div className={styles["about-container"]}>
          <div className={styles["about-img"]}>
            <img src="/assets/hero.png" alt="" />
          </div>
          <div className={styles["about-info-container"]}>
            <div className={styles["about-info"]}>
              <p>
                I am a <span className={styles["highlight-text"]}>[Your Profession/Field]</span> with a strong passion for{" "}
                <span className={styles["highlight-text"]}>[Your Field]</span>. I graduated from
                <span className={styles["highlight-text"]}>[Your School]</span> and have accrued over <span className={styles["highlight-text"]}>[Your YOE]</span> years of
                experience in the industry.
              </p>
              <p>
                My approach to tackling projects is <span className={styles["highlight-text"]}>[Your Mamba Mentality / Philosophy]</span>, always striving to deliver impactful and
                innovative solutions.
              </p>
              <p>
                Outside of my professional life, I have a passion for <span className={styles["highlight-text"]}>[Your Interests]</span>, which fuels my creativity and keeps me
                inspired.
              </p>
              <p style={{ textDecoration: "underline" }}>My Stack</p>
            </div>
            <div className={styles["about-stack-container"]}>
              <SiTypescript />
              <SiJavascript />
              <SiReact />
              <SiNextdotjs />
              <SiMongodb />
              <SiNodedotjs />
              <SiGraphql />
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className={styles["section"]}>
        <h1>My Projects</h1>
        <div className={styles["projects-container"]}>
          <div className={styles["spotlight-container"]}>
            <ProjectSpotlight
              title="EventPlanner: Dynamic Event Management"
              description="Full-stack application for organizing and managing events. Features include event creation, attendee management, scheduling, and notifications."
              thumb="/assets/planner.png"
              stack={["React", "Next.js", "GraphQL", "MongoDB"]}
              source_url="https://github.com"
            />
            <ProjectSpotlight
              title="FitTrack: Personal Fitness Tracking App"
              description="Mobile-responsive fitness tracking application to monitor workouts, set goals, track progress, and analyze performance."
              thumb="/assets/fitness.png"
              stack={["React", "Next.js", "GraphQL", "MongoDB"]}
              source_url="https://github.com"
            />
            <ProjectSpotlight
              title="TravelMingle: Social Travel Planning App"
              description="Web application for travelers to connect, plan trips, share itineraries, and collaborate on travel plans with fellow enthusiasts."
              thumb="/assets/travel.png"
              stack={["React", "Next.js", "GraphQL", "MongoDB"]}
              source_url="https://github.com"
            />
            <ProjectSpotlight
              title="CodeHub: Coding Challenges Forum"
              description="Platform for developers to solve coding challenges, share solutions, discuss best practices, and collaborate on projects."
              thumb="/assets/code.png"
              stack={["React", "Next.js", "GraphQL", "MongoDB"]}
              source_url="https://github.com"
            />
            <ProjectSpotlight
              title="ArtGallery: Art Exhibition Explorer"
              description="Full-stack web application showcasing artwork from various artists. Features include artist profiles, artwork listings, and virtual exhibitions."
              thumb="/assets/art.png"
              stack={["React", "Next.js", "GraphQL", "MongoDB"]}
              source_url="https://github.com"
            />
            <ProjectSpotlight
              title="EcoShop: Sustainable E-commerce Platform"
              description="E-commerce website promoting sustainable and eco-friendly products. Features include product listings, user reviews, and eco-rating system."
              thumb="/assets/plant.png"
              stack={["React", "Next.js", "GraphQL", "MongoDB"]}
              source_url="https://github.com"
            />
          </div>
        </div>
      </div>
      <div id="contact" className={styles["section"]}>
        <h1>Contact Me</h1>
        <div className={styles["contact-container"]}>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
