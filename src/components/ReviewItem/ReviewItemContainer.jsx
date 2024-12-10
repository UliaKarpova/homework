import { useSelector } from "react-redux";
import { getRestaurantReviews } from "../../redux/entities/restaurants/get-restaurant-reviews";
import { getUsers } from "../../redux/entities/restaurants/get-users";
import { selectReviewById } from "../../redux/entities/restaurants/review-slice";
import { selectUserById } from "../../redux/entities/restaurants/user-slice";
import { ReviewItem } from "./ReviewItem";
import { useRequest } from '../../redux/hooks/use-request'

export const ReviewItemContainer = ({ reviewId }) => {
  const { rating, text, userId } = useSelector((state) =>
    selectReviewById(state, reviewId)
  );
  const { name } = useSelector((state) => selectUserById(state, userId));

  const reviewsRequestStatus = useRequest(getRestaurantReviews);

  const userRequestStatus = useRequest(getUsers);

  if (reviewsRequestStatus === 'pending' || userRequestStatus === 'pending') {
    return 'Loading...'
  }

  if (!name ||
    userRequestStatus === 'rejected' ||
    !rating ||
    reviewsRequestStatus === 'rejected') {
    return null;
  }


  return <ReviewItem name={name} rating={rating} text={text} />;
};
