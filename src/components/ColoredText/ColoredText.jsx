import { ThemeContext } from "../ThemeContext/ThemeContext";
import classNames from "classnames";
import styles from "./coloredText.module.css";
import { useContext } from "react";

export default function ColoredText({ text, extraClass }) {
  const { theme } = useContext(ThemeContext);
  return (
    <p
      className={classNames(
        styles.coloredText,
        {
          [styles.orange]: theme === "orange",
          [styles.blueviolet]: theme === "blueviolet",
        },
        extraClass
      )}
    >
      {text}
    </p>
  );
};
