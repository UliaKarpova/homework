import { useState } from "react";
import { RestaurantItem } from "../RestaurantItem/RestaurantItem";
import { RestaurantTab } from "../RestaurantTab/RestaurantTab";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/slices/restaurants-slice";

import styles from "./restaurants.module.css";
import classNames from "classnames";

export const Restaurants = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  const [currentRestaurantId, setCurrentRestaurantId] = useState(
    restaurantsIds[0]
  );

  return (
    <main>
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
    </main>
  );
};
