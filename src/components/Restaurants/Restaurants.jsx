import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { RestaurantItem } from "../RestaurantItem/RestaurantItem";
import { Button } from "../Button/Button";
import styles from "./restaurants.module.css";
import classNames from "classnames";

export const Restaurants = () => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState(
    restaurants[0].id
  );
  const checkedRestaurant = restaurants.find(
    (restaurant) => restaurant.id === currentRestaurantId
  );
  return (
    <main>
      <ul className={styles.restaurants}>
        {restaurants.map((restaurant) => {
          return (
            <li key={restaurant.id} className={styles.restaurantsTabItem}>
              <Button
                text={restaurant.name}
                onClick={() => setCurrentRestaurantId(restaurant.id)}
                extraClass={classNames(styles.tab, {
                  [styles.current]: currentRestaurantId === restaurant.id,
                })}
              />
            </li>
          );
        })}
      </ul>
      <RestaurantItem
        restaurant={checkedRestaurant}
        key={currentRestaurantId}
      />
    </main>
  );
};
