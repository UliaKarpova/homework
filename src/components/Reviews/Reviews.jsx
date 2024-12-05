import { useContext } from "react";
import { ReviewItemContainer } from "../ReviewItem/ReviewItemContainer";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { AuthContext } from "../AuthContext/AuthContext";
import styles from "./reviews.module.css";

export const Reviews = ({ name, reviews }) => {
  const { isAuth } = useContext(AuthContext);
  return (
    <section className={styles.reviews}>
      <SectionTitle title={`Отзывы ${name}`} />
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
