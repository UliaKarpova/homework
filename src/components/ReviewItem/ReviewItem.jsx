import styles from "./reviewItem.module.css";
export const ReviewItem = ({ reviewItem }) => {
  return (
    <blockquote className={styles.block}>
      <h4>Рейтинг {reviewItem.rating}</h4>
      <p className={styles.text}>{reviewItem.text}</p>
      <span className={styles.author}>{reviewItem.user}</span>
    </blockquote>
  );
};
