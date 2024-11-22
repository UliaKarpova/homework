import styles from "./restaurantTab.module.css";
import classNames from "classnames";

export const RestaurantTab = ({ isCurrentTab, title, onClick }) => {
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
