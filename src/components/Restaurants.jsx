import { useState } from "react";
import { restaurants } from "../constants/mock";
import { RestaurantItem } from "./RestaurantItem";
import { RestaurantTab } from "./RestaurantTab";
export const Restaurants = () => {
    const [currentRestaurantId, setCurrentRestaurantId] = useState(restaurants[0].id)
    const checkedRestaurant = restaurants.find(restaurant => restaurant.id === currentRestaurantId)
    return (
        <>
            <ul>
                {restaurants.map((restaurant) => {
                    return (
                        <RestaurantTab
                            title={restaurant.name}
                            isCurrentTab={currentRestaurantId === restaurant.id}
                            onClick={() => setCurrentRestaurantId(restaurant.id)}
                            key={restaurant.id} />
                    )
                })}
            </ul>
            <RestaurantItem restaurant={checkedRestaurant} key={currentRestaurantId} />
        </>

    )
} 