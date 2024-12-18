"use client"
import { RestaurantTabContainer } from "../RestaurantTab/RestaurantTabContainer";
import { useGetRestaurantsQuery } from "../../redux/services/api";
import styles from "./restaurants.module.css";

export default function Restaurants() {
  const { data, isError, isLoading } = useGetRestaurantsQuery();
  if (isLoading) {
    return 'Loading...'
  }
  if (isError || data.length === 0) {
    return null
  }
  return (
    <ul className={styles.restaurants}>
      {data.map(({ name, id }) => {
        return (
          <li key={id} className={styles.restaurantsTabItem}>
            <RestaurantTabContainer
              key={id}
              name={name}
              id={id}
            />
          </li>
        );
      })}
    </ul>
  );
};
