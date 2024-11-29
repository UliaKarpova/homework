import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/slices/restaurants-slice";
import styles from "./restaurantTab.module.css";

export const RestaurantTab = ({ isCurrentTab, restaurantId, onClick }) => {
  const { name } = useSelector((store) =>
    selectRestaurantById(store, restaurantId)
  );
  return (
    <button
      onClick={onClick}
      className={classNames(styles.tab, {
        [styles.current]: isCurrentTab,
      })}
    >
      {name}
    </button>
  );
};
