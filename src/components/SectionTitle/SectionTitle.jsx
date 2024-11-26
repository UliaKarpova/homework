import { useContext } from "react";
import styles from "./sectionTitle.module.css";
import classNames from "classnames";
import { ThemeContext } from "../ThemeContext/ThemeContext";

export const SectionTitle = ({ title }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <h3
      className={classNames(styles.title, {
        [styles.orange]: theme === "orange",
        [styles.blueviolet]: theme === "blueviolet",
      })}
    >
      {title.toUpperCase()}
    </h3>
  );
};
