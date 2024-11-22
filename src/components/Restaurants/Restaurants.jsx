import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { RestaurantItem } from "../RestaurantItem/RestaurantItem";
import { RestaurantTab } from "../RestaurantTab/RestaurantTab";
import styles from "./restaurants.module.css";

export const Restaurants = () => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState(
    restaurants[0].id
  );
  const checkedRestaurant = restaurants.find(
    (restaurant) => restaurant.id === currentRestaurantId
  );
  return (
    <>
      <ul className={styles.restaurants}>
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
      <RestaurantItem
        restaurant={checkedRestaurant}
        key={currentRestaurantId}
      />
    </>
  );
};
