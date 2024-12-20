import { useContext } from "react";
import classNames from "classnames";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { UserContainer } from "../User/UserContainer";
import styles from "./reviewItem.module.css";

export const ReviewItem = ({ userId, rating, text }) => {
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
      <UserContainer id={userId} />
    </blockquote>
  );
};
