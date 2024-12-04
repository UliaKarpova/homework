import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { selectRestaurantById } from "../../redux/slices/restaurants-slice";
import { ReviewItem } from "../ReviewItem/ReviewItem";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { AuthContext } from "../AuthContext/AuthContext";
import styles from "./reviews.module.css";

export const Reviews = () => {
  const { restaurantId } = useParams();
  const { name, reviews } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const { isAuth } = useContext(AuthContext);
  return (
    <section className={styles.reviews}>
      <SectionTitle title={`Отзывы ${name}`} />
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
