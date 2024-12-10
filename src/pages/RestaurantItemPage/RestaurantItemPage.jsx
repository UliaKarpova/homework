import { useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { selectRestaurantById } from "../../redux/slices/restaurants-slice";
import { RestaurantItem } from "../../components/RestaurantItem/RestaurantItem";

export const RestaurantItemPage = () => {
  const { restaurantId } = useParams();
  const { name } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  return (
    <RestaurantItem name={name} restaurantId={restaurantId} >
      <Outlet />
    </RestaurantItem>
  );
};
