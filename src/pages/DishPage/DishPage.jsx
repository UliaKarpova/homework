import { useContext } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectDishById } from "../../redux/entities/restaurants/dish-slice";
import { AuthContext } from "../../components/AuthContext/AuthContext";
import { Dish } from '../../components/Dish/Dish'
import { DishCounter } from "../../components/DishCounter/DishCounter";
import { getDish } from "../../redux/entities/restaurants/get-dish";
import { useRequest } from '../../redux/hooks/use-request'

export const DishPage = () => {
  const { dishId } = useParams();
  const { isAuth } = useContext(AuthContext);
  const { name, ingredients, price } = useSelector((state) =>
    selectDishById(state, dishId)
  );
  const requestStatus = useRequest(getDish)

  if (requestStatus === 'pending') {
    return 'Loading...'
  }

  if (!name || requestStatus === 'rejected') {
    return null
  }
  return (
    <Dish name={name} ingredients={ingredients} price={price}>
      {isAuth && <DishCounter id={dishId} />}
    </Dish>
  );
};
