import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantById, selectRestaurantMenuById } from "../../redux/entities/restaurants/restaurants-slice";
import { Menu } from "../../components/Menu/Menu";
import { getRestaurantMenu } from "../../redux/entities/restaurants/get-restaurant-menu";
import { useRequest } from '../../redux/hooks/use-request'
import { getRestaurantById } from "../../redux/entities/restaurants/get-restaurant-by-id";

export const MenuPage = () => {
  const { restaurantId } = useParams();
  const { name } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const menu = useSelector((state) =>
    selectRestaurantMenuById(state, restaurantId)
  );
  const requestStatus = useRequest(getRestaurantById)
  const menuRequestStatus = useRequest(getRestaurantMenu)

  if (requestStatus === 'pending' || menuRequestStatus === 'pending') {
    return 'Loading...'
  }

  if (!name || !menu.length || requestStatus === 'rejected' || menuRequestStatus === 'rejected') {
    return null
  }
  return <Menu name={name} menu={menu} />;
};
