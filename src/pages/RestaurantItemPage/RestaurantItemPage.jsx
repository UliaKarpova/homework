import { useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { RestaurantItem } from "../../components/RestaurantItem/RestaurantItem";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants/restaurants-slice";
import { getRestaurantById } from "../../redux/entities/restaurants/restaurants/get-restaurant-by-id";
import { useRequest } from '../../redux/hooks/use-request'

export const RestaurantItemPage = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  const requestStatus = useRequest(getRestaurantById, restaurantId)

  if (requestStatus === 'pending') {
    return 'Loading...'
  }

  if (!restaurant || !restaurant?.name || requestStatus === 'rejected') {
    return null
  }

  return (
    <RestaurantItem name={restaurant.name} restaurantId={restaurantId} >
      <Outlet />
    </RestaurantItem>
  );
};
