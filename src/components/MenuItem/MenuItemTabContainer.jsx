import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectDishById } from "../../redux/entities/restaurants/dish-slice";
import { getDish } from "../../redux/entities/restaurants/get-dish";
import { useRequest } from '../../redux/hooks/use-request'
import { Tab } from "../Tab/Tab";

export const MenuItemTabContainer = ({ dishId }) => {
  const res = useSelector((state) => selectDishById(state, dishId));
  console.log(res)
  const requestStatus = useRequest(getDish);

  if (requestStatus === 'pending') {
    return 'Loading...'
  }

  if (!res || requestStatus === 'rejected') {
    return null;
  }

  return (
    <Link to={`/dish/${dishId}`}>
      <Tab text={res.name} />
    </Link>
  );
};