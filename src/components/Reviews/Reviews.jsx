import { ReviewItem } from "../ReviewItem/ReviewItem";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { AuthContext } from "../AuthContext/AuthContext";
import { useContext } from "react";
import styles from "./reviews.module.css";
export const Reviews = ({ reviews }) => {
  const { isAuth } = useContext(AuthContext);
  return (
    <section className={styles.reviews}>
      <SectionTitle title={"Отзывы"} />
      <ul className={styles.reviewsList}>
        {reviews.map((reviewId) => {
          return (
            <li key={reviewId} className={styles.reviewItem}>
              <ReviewItem reviewId={reviewId} />
            </li>
          );
        })}
      </ul>
      {isAuth && <ReviewForm />}
    </section>
  );
};
