import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/restaurants/review/review-slice";
import { selectUserById } from "../../redux/entities/restaurants/user/user-slice";
import { ReviewItem } from "./ReviewItem";

export const ReviewItemContainer = ({ reviewId }) => {
  const review = useSelector((state) =>
    selectReviewById(state, reviewId)
  );

  if (!review) {
    return null
  }

  const user = useSelector((state) => selectUserById(state, review.userId));

  if (!user) {
    return null;
  }

  return <ReviewItem name={user.name} rating={review.rating} text={review.text} />;
};
