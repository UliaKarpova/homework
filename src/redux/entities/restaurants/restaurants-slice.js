import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants";
import { getRestaurantById } from "./get-restaurant-by-id";
import { getRestaurantMenu } from "./get-restaurant-menu";
import { getRestaurantReviews } from "./get-restaurant-reviews";

const entityAdapter = createEntityAdapter()

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectRestaurantsIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
    selectRestaurantMenuById: (state, id) => state.entities[id].menu,
    selectRestaurantReviewsById: (state, id) => state.entities[id].reviews,


  },
  extraReducers: (builder) => builder
    .addCase(getRestaurants.fulfilled,  (state, { payload }) => {
      console.log(payload)
      entityAdapter.setMany(state, payload)
    })
    .addCase(getRestaurantById.fulfilled,  (state, { payload }) => {
      console.log(`getRestaurantById >>>`, payload)
      entityAdapter.setOne(state, payload)
    })
    .addCase(getRestaurantMenu.fulfilled,  (state, { payload }) => {
      console.log(`getRestaurantMenu >>>`, payload)
      entityAdapter.updateOne(state, payload)
    })
    .addCase(getRestaurantReviews.fulfilled,  (state, { payload }) => {
      console.log(`getRestaurantReviews >>>`, payload)
      // entityAdapter.updateOne(state, payload)
    })

});

export const { selectRestaurantsIds, selectRestaurantById, selectRestaurantMenuById } =
  restaurantSlice.selectors;
