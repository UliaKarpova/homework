import { useEffect, useState } from "react";
export const ProgressScrollBar = () => {
  const [width, setWidth] = useState("0");
  const onScroll = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;
    setWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const styles = {
    height: "25px",
    backgroundColor: "orange",
    margin: 0,
    padding: 0,
    position: "sticky",
    top: "15px",
    width,
  };
  return <div style={styles}></div>;
};
