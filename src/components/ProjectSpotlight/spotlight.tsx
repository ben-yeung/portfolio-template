import React from "react";
import { useTheme } from "next-themes";
import styles from "./spotlight.module.css";
import { useState, useEffect } from "react";

interface ComponentProps {
  title: string;
  description: string;
  thumb: string;
  stack: Array<string>;
  source_url: string;
}

const ProjectSpotlight = (props: ComponentProps) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currTheme = theme === "system" ? systemTheme : theme;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles["spotlight-container"]}>
      <div className={styles["spotlight-img"]}>
        <img src={props.thumb} alt="" />
      </div>
      <div className={styles["spotlight-details"]}>
        <a href={props.source_url} target="_blank">
          <div className={styles["spotlight-title"]}>{props.title}</div>
        </a>
        <div className={styles["spotlight-stack"]}>{props.stack.join(" ")}</div>
        <div className={styles["spotlight-desc"]}>{props.description}</div>
      </div>
    </div>
  );
};

export default ProjectSpotlight;
