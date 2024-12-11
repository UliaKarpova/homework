import { useContext } from "react";
import { ReviewItemContainer } from "../ReviewItem/ReviewItemContainer";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { AuthContext } from "../AuthContext/AuthContext";
import styles from "./reviews.module.css";

export const Reviews = ({ reviews }) => {
  const { isAuth } = useContext(AuthContext);
  return (
    <section className={styles.reviews}>
      <ul className={styles.reviewsList}>
        {reviews.map((reviewId) => {
          return (
            <li key={reviewId} className={styles.reviewItem}>
              <ReviewItemContainer reviewId={reviewId} />
            </li>
          );
        })}
      </ul>
      {isAuth && <ReviewForm />}
    </section>
  );
};
