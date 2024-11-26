import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import styles from "./progressScrollBar.module.css";
import classNames from "classnames";

export const ProgressScrollBar = () => {
  const [width, setWidth] = useState("0");
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    const onScroll = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = `${(scrollPx / winHeightPx) * 100}%`;
      setWidth(scrolled);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={classNames(styles.progressScrollBar, {
        [styles.orange]: theme === "orange",
        [styles.blueviolet]: theme === "blueviolet",
      })}
      style={{ width: width }}
    ></div>
  );
};
