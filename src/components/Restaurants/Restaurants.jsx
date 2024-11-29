import { useState } from "react";
import { RestaurantItem } from "../RestaurantItem/RestaurantItem";
import { RestaurantTab } from "../RestaurantTab/RestaurantTab";
import styles from "./restaurants.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/restaurants-slice";

export const Restaurants = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  const [currentRestaurantId, setCurrentRestaurantId] = useState(
    restaurantsIds[0]
  );

  return (
    <>
      <ul className={styles.restaurants}>
        {restaurantsIds.map((restaurantId) => {
          return (
            <li key={restaurantId} className={styles.restaurantsTabItem}>
              <RestaurantTab
                restaurantId={restaurantId}
                isCurrentTab={currentRestaurantId === restaurantId}
                onClick={() => setCurrentRestaurantId(restaurantId)}
              />
            </li>
          );
        })}
      </ul>
      <RestaurantItem
        restaurantId={currentRestaurantId}
        key={currentRestaurantId}
      />
    </>
  );
};
