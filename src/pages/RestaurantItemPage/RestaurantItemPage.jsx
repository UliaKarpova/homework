import { useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { RestaurantItem } from "../../components/RestaurantItem/RestaurantItem";
import { getRestaurantById } from "../../redux/entities/restaurants/get-restaurant-by-id";
import { useRequest } from '../../redux/hooks/use-request'

export const RestaurantItemPage = () => {
  const { restaurantId } = useParams();
  const { name } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const requestStatus = useRequest(getRestaurantById)

  if (requestStatus === 'pending') {
    return 'Loading...'
  }

  if (!name || requestStatus === 'rejected') {
    return null
  }

  return (
    <RestaurantItem name={name} restaurantId={restaurantId} >
      <Outlet />
    </RestaurantItem>
  );
};
