import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants";
import { getRestaurantById } from "./get-restaurant-by-id";

const entityAdapter = createEntityAdapter()

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectRestaurantsIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) => builder
    .addCase(getRestaurants.fulfilled,  (state, { payload }) => {
      entityAdapter.setMany(state, payload)
    })
    .addCase(getRestaurantById.fulfilled,  (state, { payload }) => {
        entityAdapter.addOne(state, payload)
    })
});

export const { selectRestaurantsIds, selectRestaurantById } =
  restaurantSlice.selectors;
