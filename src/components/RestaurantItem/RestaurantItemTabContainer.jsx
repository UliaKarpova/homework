import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import styles from "./restaurantItem.module.css";

export const RestaurantItemTabContainer = ({ restaurantId }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.linkContainer}>
      <NavLink
        to={`/restaurants/${restaurantId}/menu`}
        className={({ isActive }) =>
          classNames(styles.link, {
            [styles.orange]: theme === "orange",
            [styles.blueviolet]: theme === "blueviolet",
            [styles.active]: isActive,
          })
        }
      >
        МЕНЮ
      </NavLink>
      <NavLink
        to={`/restaurants/${restaurantId}/reviews`}
        className={({ isActive }) =>
          classNames(styles.link, {
            [styles.orange]: theme === "orange",
            [styles.blueviolet]: theme === "blueviolet",
            [styles.active]: isActive,
          })
        }
      >
        ОТЗЫВЫ
      </NavLink>
    </div>
  );
};
