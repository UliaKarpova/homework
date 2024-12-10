import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { useRequest } from '../../redux/hooks/use-request'
import { getRestaurantById } from "../../redux/entities/restaurants/get-restaurant-by-id";
import { Tab } from "../Tab/Tab";

export const RestaurantTabContainer = ({ restaurantId }) => {
  const { name } = useSelector((store) =>
    selectRestaurantById(store, restaurantId)
  );

  const requestStatus = useRequest(getRestaurantById)

  if (requestStatus === 'pending') {
    return 'Loading...'
  }

  if (!name || requestStatus === 'rejected') {
    return null
  }

  return (
    <NavLink to={`/restaurants/${restaurantId}/menu`}>
      <Tab text={name} />
    </NavLink>
  );
};
