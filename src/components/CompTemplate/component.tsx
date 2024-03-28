import React from "react";
import { useTheme } from "next-themes";
import styles from "./c.module.css";
import { useState, useEffect } from "react";

interface ComponentProps {
  name: string;
}

const ComponentName = (props: ComponentProps) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currTheme = theme === "system" ? systemTheme : theme;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <div className={styles["c-container"]}></div>;
};

export default ComponentName;
