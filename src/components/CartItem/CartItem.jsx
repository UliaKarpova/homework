import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/restaurants/dish-slice";
import { getDish } from "../../redux/entities/restaurants/get-dish";
import { DishCounter } from "../DishCounter/DishCounter";
import { useRequest } from '../../redux/hooks/use-request'

import styles from "./cartItem.module.css";

export const CartItem = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  const requestStatus = useRequest(getDish);

  if (requestStatus === 'pending') {
    return 'Loading...'
  }

  if (!dish.name || requestStatus === 'rejected') {
    return null;
  }

  return (
    <div className={styles.dish}>
      {dish.name}
      <DishCounter id={id} />
    </div>
  );
};
