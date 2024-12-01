import { DishCounter } from "../DishCounter/DishCounter";
import { AuthContext } from "../AuthContext/AuthContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/slices/dish-slice";
import styles from "./menuItem.module.css";

export const MenuItem = ({ dishId }) => {
  const { isAuth } = useContext(AuthContext);
  const { name, ingredients, price } = useSelector((state) => selectDishById(state, dishId))
  return (
    <div className={styles.dishItem}>
      <h4 className={styles.dishTitle}>{name}</h4>
      <p>
        &#9658; {ingredients.join(", ")}
      </p>
      <p className={styles.price}>
        Price:<b> {price}</b> &#8381;
      </p>
      {isAuth && <DishCounter />}
    </div>
  );
};
