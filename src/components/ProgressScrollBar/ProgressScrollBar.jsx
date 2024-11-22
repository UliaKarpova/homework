import { useEffect, useState } from "react";
import styles from "./progressScrollBar.module.css";

export const ProgressScrollBar = () => {
  const [width, setWidth] = useState("0");

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
    <div className={styles.progressScrollBar} style={{ width: width }}></div>
  );
};
