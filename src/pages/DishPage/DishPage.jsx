import { useContext } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectDishById } from "../../redux/slices/dish-slice";
import { AuthContext } from "../../components/AuthContext/AuthContext";
import { Dish } from '../../components/Dish/Dish'
import { DishCounter } from "../../components/DishCounter/DishCounter";

export const DishPage = () => {
  const { dishId } = useParams();
  const { isAuth } = useContext(AuthContext);
  const { name, ingredients, price } = useSelector((state) =>
    selectDishById(state, dishId)
  );
  return (
    <Dish name={name} ingredients={ingredients} price={price}>
      {isAuth && <DishCounter id={dishId} />}
    </Dish>
  );
};
