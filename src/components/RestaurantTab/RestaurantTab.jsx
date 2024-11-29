import styles from "./restaurantTab.module.css";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurants-slice";

export const RestaurantTab = ({ isCurrentTab, restourantId, onClick }) => {
  const { title } = useSelector((store) =>
    selectRestaurantById(store, restourantId)
  );
  return (
    <button
      onClick={onClick}
      className={classNames(styles.tab, {
        [styles.current]: isCurrentTab,
      })}
    >
      {title}
    </button>
  );
};
