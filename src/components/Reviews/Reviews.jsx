import { ReviewItem } from "../ReviewItem/ReviewItem";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import styles from "./reviews.module.css";
export const Reviews = ({ reviews }) => {
  return (
    <section className={styles.reviews}>
      <h3 className={styles.title}>ОТЗЫВЫ</h3>
      <ul className={styles.reviewsList}>
        {reviews.map((reviewId) => {
          return (
            <li key={reviewId} className={styles.reviewItem}>
              <ReviewItem reviewId={reviewId} />
            </li>
          );
        })}
      </ul>
      <ReviewForm />
    </section>
  );
};
