import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectDishById } from "../../redux/entities/restaurants/dish/dish-slice";
import { getDish } from "../../redux/entities/restaurants/dish/get-dish";
import { useRequest } from '../../redux/hooks/use-request'
import { Tab } from "../Tab/Tab";

export const MenuItemTabContainer = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));
  const requestStatus = useRequest(getDish, dishId);

  if (requestStatus === 'pending') {
    return 'Loading...'
  }

  if (!dish || requestStatus === 'rejected') {
    return null;
  }
  return (
    <Link to={`/dish/${dishId}`}>
      <Tab text={dish.name} />
    </Link>
  );
};