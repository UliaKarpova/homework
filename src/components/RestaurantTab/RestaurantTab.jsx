import classNames from "classnames";
import { Button } from "../Button/Button";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/slices/restaurants-slice";
import styles from "./restaurantTab.module.css";

export const RestaurantTab = ({ isCurrentTab, restaurantId, onClick }) => {
  const { name } = useSelector((store) =>
    selectRestaurantById(store, restaurantId)
  );
  return (
    <Button
      text={name}
      onClick={onClick}
      extraClass={classNames(styles.tab, {
        [styles.current]: isCurrentTab,
      })}
    />
  );
};
