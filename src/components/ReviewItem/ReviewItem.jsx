import classNames from "classnames";
import styles from "./reviewItem.module.css";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { useContext } from "react";

export const ReviewItem = ({ reviewItem }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <blockquote
      className={classNames(styles.block, {
        [styles.orange]: theme === "orange",
        [styles.blueviolet]: theme === "blueviolet",
      })}
    >
      <h4>Рейтинг {reviewItem.rating}</h4>
      <p className={styles.text}>{reviewItem.text}</p>
      <span className={styles.author}>{reviewItem.user}</span>
    </blockquote>
  );
};
