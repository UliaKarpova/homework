import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/slices/restaurants-slice";
import { Menu } from "./Menu";

export const MenuContainer = () => {
  const { restaurantId } = useParams();
  const { name, menu } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  return <Menu name={name} menu={menu} />;
};
