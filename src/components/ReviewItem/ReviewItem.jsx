import { useContext } from "react";
import classNames from "classnames";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import styles from "./reviewItem.module.css";

export const ReviewItem = ({ name, rating, text }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <blockquote
      className={classNames(styles.block, {
        [styles.orange]: theme === "orange",
        [styles.blueviolet]: theme === "blueviolet",
      })}
    >
      <h4>Рейтинг {rating}</h4>
      <p className={styles.text}>{text}</p>
      <span className={styles.author}>{name}</span>
    </blockquote>
  );
};
