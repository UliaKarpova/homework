import { useSelector } from "react-redux";
import { RestaurantTabContainer } from "../RestaurantTab/RestaurantTabContainer";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants/restaurants-slice";
import { getRestaurants } from '../../redux/entities/restaurants/restaurants/get-restaurants'
import { useRequest } from "../../redux/hooks/use-request";
import styles from "./restaurants.module.css";

export const Restaurants = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  const requestStatus = useRequest(getRestaurants)
  if (requestStatus === 'pending') {
    return 'Loading...'
  }
  if (!restaurantsIds.length || requestStatus === 'rejected') {
    return null
  }
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
