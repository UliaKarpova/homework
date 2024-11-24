import { ReviewItem } from "../ReviewItem/ReviewItem";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import styles from "./reviews.module.css";
export const Reviews = ({ reviews }) => {
  return (
    <section className={styles.reviews}>
      <h3 className={styles.title}>ОТЗЫВЫ</h3>
      <ul className={styles.reviewsList}>
        {reviews.map((reviewItem, index) => {
          return (
            <li key={index} className={styles.reviewItem}>
              <ReviewItem reviewItem={reviewItem} />
            </li>
          );
        })}
      </ul>
      <ReviewForm />
    </section>
  );
};
