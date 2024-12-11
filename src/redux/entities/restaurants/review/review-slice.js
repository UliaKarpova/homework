import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getRestaurantReviews } from "./get-restaurant-reviews";

const entityAdapter = createEntityAdapter()

export const reviewSlice = createSlice({
  name: "review",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectReviewById: (state, id) => state.entities[id],
    selectReviewsByRestaurantId: (state, restaurantId) => {
      const ids = Object.keys(state.entities);
      let result = [];
      ids.forEach(id => {
        if (state.entities[id].restaurantId === restaurantId) {
          result.push(state.entities[id])
        }
      })
      return result
    },
  },
  extraReducers: (builder) => builder
  .addCase(getRestaurantReviews.fulfilled,  (state, { payload }) => {
    entityAdapter.addMany(state, payload)
  })
});

export const { selectReviewById, selectReviewsByRestaurantId } =
reviewSlice.selectors;