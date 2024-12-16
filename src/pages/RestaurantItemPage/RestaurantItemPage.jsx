import { Outlet, useParams } from "react-router-dom";
import { RestaurantItem } from "../../components/RestaurantItem/RestaurantItem";
import { useGetRestaurantsQuery } from "../../redux/services/api";

export const RestaurantItemPage = () => {
  const { restaurantId } = useParams();

  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find(({ id }) => id === restaurantId)
    })
  })

  return (
    <RestaurantItem name={restaurant.name} restaurantId={restaurantId} >
      <Outlet />
    </RestaurantItem>
  );
};
