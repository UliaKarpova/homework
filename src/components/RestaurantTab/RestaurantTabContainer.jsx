import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/slices/restaurants-slice";
import { Tab } from "../Tab/Tab";

export const RestaurantTabContainer = ({ restaurantId }) => {
  const { name } = useSelector((store) =>
    selectRestaurantById(store, restaurantId)
  );

  return (
    <NavLink to={`/restaurants/${restaurantId}`}>
      <Tab text={name} />
    </NavLink>
  );
};
