import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/slices/review-slice";
import { selectUserById } from "../../redux/slices/user-slice";
import styles from "./reviewItem.module.css";

export const ReviewItem = ({ reviewId }) => {
  const { rating, text, userId } = useSelector((state) => selectReviewById(state, reviewId))
  const { name } = useSelector((state) => selectUserById(state, userId))
  return (
    <blockquote className={styles.block}>
      <h4>Рейтинг {rating}</h4>
      <p className={styles.text}>{text}</p>
      <span className={styles.author}>{name}</span>
    </blockquote>
  );
};
