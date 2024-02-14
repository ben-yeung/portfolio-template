import React from "react";
import styles from "./navbar.module.css";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import ModeSwitch from "../ModeSwitch/modeswitch";

const NavBar = () => {
  const { systemTheme, theme } = useTheme();
  const currTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`${styles.mainContainer} ${currTheme == "dark" ? styles.dark : styles.light}`}>
      <div className={styles.logoContainer}>
        <img src="/assets/logo.png" className={`${styles.logo} ${currTheme == "light" ? styles.lightlogo : ""}`} alt="" />
      </div>

      <div className={styles.btnContainer}>
        <a href="/">
          <button className={`${styles.navBtn} customBtn`}>Home</button>
        </a>
        <a href="/">
          <button className={`${styles.navBtn} customBtn`}>About</button>
        </a>
        <a href="/">
          <button className={`${styles.navBtn} customBtn`}>Skills</button>
        </a>
        <a href="/">
          <button className={`${styles.navBtn} customBtn`}>Projects</button>
        </a>
        <a href="/">
          <button className={`${styles.navBtn} customBtn`}>Contact</button>
        </a>
      </div>
      <ModeSwitch />
    </div>
  );
};

export default NavBar;
