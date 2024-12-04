import { NavLink } from "react-router-dom";
import { Tab } from "../Tab/Tab";
import styles from "./restaurantItem.module.css";

export const RestaurantTabContainer = ({ restaurantId }) => {
  return (
    <>
      <NavLink to={`/restaurants/${restaurantId}/menu`} className={styles.link}>
        <Tab text={"МЕНЮ"} />
      </NavLink>
      <NavLink
        to={`/restaurants/${restaurantId}/reviews`}
        className={styles.link}
      >
        <Tab text={"ОТЗЫВЫ"} />
      </NavLink>
    </>
  );
};
