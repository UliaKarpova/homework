import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menu } from "../../components/Menu/Menu";
import { useRequest } from '../../redux/hooks/use-request'
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants/restaurants-slice";
import { getRestaurantById } from "../../redux/entities/restaurants/restaurants/get-restaurant-by-id";
import { getRestaurantMenu } from "../../redux/entities/restaurants/menu/get-restaurant-menu";

export const MenuPage = () => {
  const { restaurantId } = useParams();
  const { name, menu } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const requestStatus = useRequest(getRestaurantById, restaurantId)
  const menuRequestStatus = useRequest(getRestaurantMenu, restaurantId)

  if (requestStatus === 'pending' || menuRequestStatus === 'pending') {
    return 'Loading...'
  }

  if (!name || !menu.length || requestStatus === 'rejected') {
    return null
  }
  return <Menu name={name} menu={menu} />;
};
