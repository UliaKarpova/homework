import { Menu } from "./Menu"
import { Reviews } from "./Reviews"
export const RestaurantItem = ({ restaurant }) => {
    return (
        <>
            <Menu menu={restaurant.menu} />
            {!!restaurant.reviews.length && <Reviews reviews={restaurant.reviews} />}
        </>
    )
}