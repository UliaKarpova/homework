import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/slices/review-slice";
import { selectUserById } from "../../redux/slices/user-slice";
import { ReviewItem } from "./ReviewItem";

export const ReviewItemContainer = ({ reviewId }) => {
  const { rating, text, userId } = useSelector((state) =>
    selectReviewById(state, reviewId)
  );
  const { name } = useSelector((state) => selectUserById(state, userId));

  return <ReviewItem name={name} rating={rating} text={text} />;
};
