import { useContext } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectDishById } from "../../redux/slices/dish-slice";
import { DishCounter } from "../DishCounter/DishCounter";
import { AuthContext } from "../AuthContext/AuthContext";
import image from "../../images/delicious-top-view-black-shrimp-pasta-with-soy-sauce.jpg";
import styles from "./dish.module.css";

export const Dish = () => {
  const { dishId } = useParams();
  const { isAuth } = useContext(AuthContext);
  const { name, ingredients, price } = useSelector((state) =>
    selectDishById(state, dishId)
  );
  return (
    <main className={styles.main}>
      <div className={styles.dishItem}>
        <h4 className={styles.dishTitle}>{name}</h4>
        <p>&#9658; {ingredients.join(", ")}</p>
        <p className={styles.price}>
          Price:<b> {price}</b> &#8381;
        </p>
        {isAuth && <DishCounter id={dishId} />}
      </div>
      <img className={styles.img} src={image} alt="Блюдо" />
    </main>
  );
};
