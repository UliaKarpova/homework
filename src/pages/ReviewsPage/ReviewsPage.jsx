import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/slices/restaurants-slice";
import { Reviews } from "../../components/Reviews/Reviews";

export const ReviewsPage = () => {
  const { restaurantId } = useParams();
  const { name, reviews } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  return <Reviews name={name} reviews={reviews} />;
};
