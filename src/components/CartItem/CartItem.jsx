import { DishCounter } from "../DishCounter/DishCounter";
import { useGetDishByIdQuery } from "../../redux/services/api";
import styles from "./cartItem.module.css";

export const CartItem = ({ dishId }) => {

  const { data: dish, isLoading, isError } = useGetDishByIdQuery(dishId)

  if (isLoading) {
    return 'Loading...'
  }
  if (!dish || !dish?.name || isError) {
    return null;
  }
  return (
    <div className={styles.dish}>
      {dish.name}
      <DishCounter id={dishId} />
    </div>
  );
};
