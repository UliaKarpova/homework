import { useState } from "react";
import { restaurants } from "../constants/mock";
import { RestaurantItem } from "./RestaurantItem";
import { RestaurantTab } from "./RestaurantTab";

export const Restaurants = () => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState(
    restaurants[0].id
  );
  const checkedRestaurant = restaurants.find(
    (restaurant) => restaurant.id === currentRestaurantId
  );
  return (
    <>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "stretch",
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <li key={restaurant.id}>
              <RestaurantTab
                title={restaurant.name}
                isCurrentTab={currentRestaurantId === restaurant.id}
                onClick={() => setCurrentRestaurantId(restaurant.id)}
              />
            </li>
          );
        })}
      </ul>
      <RestaurantItem restaurant={checkedRestaurant} />
      <RestaurantItem restaurant={checkedRestaurant} />
      <RestaurantItem restaurant={checkedRestaurant} />
      <RestaurantItem restaurant={checkedRestaurant} />
    </>
  );
}; 