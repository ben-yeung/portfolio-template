import React from "react";
import { useTheme } from "next-themes";
import styles from "./stackicon.module.css";
import { useState, useEffect } from "react";

interface ComponentProps {
  name: string;
  iconURL: string;
}

const StackIcon = (props: ComponentProps) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currTheme = theme === "system" ? systemTheme : theme;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles["icon-container"]}>
      <img src={props.iconURL} alt="" />
    </div>
  );
};

export default StackIcon;
