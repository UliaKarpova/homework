import { useContext } from "react";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { AuthContext } from "../AuthContext/AuthContext";
import { ReviewItem } from "../ReviewItem/ReviewItem";
import styles from "./reviews.module.css";

export const Reviews = ({ reviews, onAddReview }) => {
  const { isAuth } = useContext(AuthContext);
  return (
    <section className={styles.reviews}>
      <ul className={styles.reviewsList}>
        {reviews.map(({ userId, rating, text, id }) => {
          return (
            <li key={id} className={styles.reviewItem}>
              <ReviewItem userId={userId} rating={rating} text={text} />
            </li>
          );
        })}
      </ul>
      {isAuth && <ReviewForm onSubmit={onAddReview} />}
    </section>
  );
};
