import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/restaurants/dish/dish-slice";
import { getDish } from "../../redux/entities/restaurants/dish/get-dish";
import { DishCounter } from "../DishCounter/DishCounter";
import { useRequest } from '../../redux/hooks/use-request'
import styles from "./cartItem.module.css";

export const CartItem = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));
  const requestStatus = useRequest(getDish, dishId);
  if (requestStatus === 'pending') {
    return 'Loading...'
  }
  if (!dish || !dish?.name || requestStatus === 'rejected') {
    return null;
  }
  return (
    <div className={styles.dish}>
      {dish.name}
      <DishCounter id={dishId} />
    </div>
  );
};
