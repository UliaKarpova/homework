import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";
export const RestaurantItem = ({ restaurant }) => {
  return (
    <>
      <Menu menu={restaurant.menu} />
      {!!restaurant.reviews.length && <Reviews reviews={restaurant.reviews} />}
    </>
  );
};
