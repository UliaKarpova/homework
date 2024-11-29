import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../constants/normalized-mock";

const initialState = {
  entities: normalizedRestaurants.reduce((acc, restaurant) => {
    console.log(restaurant.id)
    console.log(acc)
    acc[restaurant.id] = restaurant;
    return acc;
  }, {}),
  ids: normalizedRestaurants.map(({ id }) => id),
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  selectors: {
    selectRestaurantsIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
  },
});

export const { selectRestaurantsIds, selectRestaurantById } =
  restaurantSlice.selectors;
