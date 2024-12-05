import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/slices/restaurants-slice";
import { RestaurantTabContainer } from "../RestaurantTab/RestaurantTabContainer";
import styles from "./restaurants.module.css";

export const Restaurants = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  return (
    <ul className={styles.restaurants}>
      {restaurantsIds.map((restaurantId) => {
        return (
          <li key={restaurantId} className={styles.restaurantsTabItem}>
            <RestaurantTabContainer
              key={restaurantId}
              restaurantId={restaurantId}
            />
          </li>
        );
      })}
    </ul>
  );
};
