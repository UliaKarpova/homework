import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/slices/restaurants-slice";
import { Menu } from "../../components/Menu/Menu";

export const MenuPage = () => {
  const { restaurantId } = useParams();
  const { name, menu } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  return <Menu name={name} menu={menu} />;
};
