import { useContext } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../components/AuthContext/AuthContext";
import { Dish } from '../../components/Dish/Dish'
import { DishCounter } from "../../components/DishCounter/DishCounter";
import { selectDishById } from "../../redux/entities/restaurants/dish/dish-slice";
import { getDish } from "../../redux/entities/restaurants/dish/get-dish";
import { useRequest } from '../../redux/hooks/use-request'

export const DishPage = () => {
  const { dishId } = useParams();
  const { isAuth } = useContext(AuthContext);

  const dish = useSelector((state) =>
    selectDishById(state, dishId)
  );

  const requestStatus = useRequest(getDish, dishId)

  if (requestStatus === 'pending') {
    return 'Loading...'
  }

  if (!dish || !dish?.name || requestStatus === 'rejected') {
    return null
  }
  return (
    <Dish name={dish.name} ingredients={dish.ingredients} price={dish.price}>
      {isAuth && <DishCounter id={dishId} />}
    </Dish>
  );
};
