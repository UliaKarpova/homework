import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { Reviews } from "../../components/Reviews/Reviews";
import { useRequest } from '../../redux/hooks/use-request'

export const ReviewsPage = () => {
  const { restaurantId } = useParams();
  const { name, reviews } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const reviewsRequestStatus = useRequest(getRestaurantReviews);


  if (reviewsRequestStatus === 'pending') {
    return 'Loading...'
  }

  if (reviews.lenght === 0 ||
    reviewsRequestStatus === 'rejected') {
    return null;
  }
  return <Reviews name={name} reviews={reviews} />;
};
