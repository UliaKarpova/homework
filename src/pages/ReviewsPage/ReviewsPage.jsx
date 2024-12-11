import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Reviews } from "../../components/Reviews/Reviews";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants/restaurants-slice";
import { getRestaurantReviews } from "../../redux/entities/restaurants/review/get-restaurant-reviews";
import { getUsers } from "../../redux/entities/restaurants/user/get-users";
import { useRequest } from '../../redux/hooks/use-request'

export const ReviewsPage = () => {
  const { restaurantId } = useParams();
  const { reviews } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const reviewsRequestStatus = useRequest(getRestaurantReviews, restaurantId);
  const userRequestStatus = useRequest(getUsers);

  if (reviewsRequestStatus === 'pending' || userRequestStatus === 'pending') {
    return 'Loading...'
  }

  if (reviews.lenght === 0 ||
    reviewsRequestStatus === 'rejected' ||
    userRequestStatus === 'rejected') {
    return null;
  }
  return <Reviews reviews={reviews} />;
};
