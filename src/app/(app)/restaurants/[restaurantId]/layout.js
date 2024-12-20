"use client"
import { useParams } from "next/navigation";
import { RestaurantItem } from "../../../../components/RestaurantItem/RestaurantItem";
import { useGetRestaurantsQuery } from "../../../../redux/services/api";

export default function RestaurantItemPage({children}) {
  const { restaurantId } = useParams();

  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find(({ id }) => id === restaurantId)
    })
  })

  if (!restaurant?.name) {
      return null
  }

  return (
    <RestaurantItem name={restaurant.name} restaurantId={restaurantId} >
        {children}
    </RestaurantItem>
  );
};
