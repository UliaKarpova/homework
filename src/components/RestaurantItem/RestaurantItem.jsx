import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/slices/restaurants-slice";
export const RestaurantItem = ({ restaurantId }) => {
  const { menu, reviews } = useSelector((store) =>
    selectRestaurantById(store, restaurantId)
  );
  return (
    <>
      <Menu menu={menu} />
      {!!reviews.length && <Reviews reviews={reviews} />}
    </>
  );
};
