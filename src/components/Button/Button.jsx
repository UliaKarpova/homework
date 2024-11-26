import classNames from "classnames";
import styles from "./button.module.css";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { useContext } from "react";

export const Button = ({ text, extraClass, onClick }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      onClick={onClick}
      className={classNames(styles.button, {
        [extraClass]: true,
        [styles.orange]: theme === "orange",
        [styles.blueviolet]: theme === "blueviolet",
      })}
    >
      {text}
    </button>
  );
};
