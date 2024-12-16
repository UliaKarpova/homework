import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/restaurants/review/review-slice";
import { ReviewItem } from "./ReviewItem";

export const ReviewItemContainer = ({ reviewId }) => {
  const review = useSelector((state) =>
    selectReviewById(state, reviewId)
  );

  if (!review) {
    return null
  }

  return <ReviewItem userId={review.userId} rating={review.rating} text={review.text} />;
};
