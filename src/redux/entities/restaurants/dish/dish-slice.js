import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getDish } from "./get-dish";
import { getRestaurantMenu } from "../menu/get-restaurant-menu"

const entityAdapter = createEntityAdapter()

export const dishSlice = createSlice({
  name: "dish",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectDishById: (state, dishId) => state.entities[dishId],
    selectDishesByRestaurantId: (state, restaurantId) => {
      const restaurantDishes =  []
      state.ids.forEach(id => {
        if (state.entities[id].restaurantId === restaurantId) {
          restaurantDishes.push(id)
        }
      })
      return restaurantDishes
    }
  },
  extraReducers: (builder) => builder
    .addCase(getDish.fulfilled,  (state, { payload }) => {
      entityAdapter.addOne(state, payload)
    })
    .addCase(getRestaurantMenu.fulfilled,  (state, { payload }) => {
      entityAdapter.addMany(state, payload)
    })
});

export const { selectDishById, selectDishesByRestaurantId } =
dishSlice.selectors;
