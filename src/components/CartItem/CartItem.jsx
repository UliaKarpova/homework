import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/slices/dish-slice";
import { DishCounter } from "../DishCounter/DishCounter";
import styles from "./cartItem.module.css";

export const CartItem = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish.name) {
    return null;
  }

  return (
    <div className={styles.dish}>
      {dish.name}
      <DishCounter id={id} />
    </div>
  );
};
