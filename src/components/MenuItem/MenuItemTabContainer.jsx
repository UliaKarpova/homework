import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectDishById } from "../../redux/slices/dish-slice";
import { Tab } from "../Tab/Tab";

export const MenuItemTabContainer = ({ dishId }) => {
  const { name } = useSelector((state) => selectDishById(state, dishId));
  return (
    <Link to={`/dish/${dishId}`}>
      <Tab text={name} />
    </Link>
  );
};
