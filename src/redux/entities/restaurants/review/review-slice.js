import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getRestaurantReviews } from "./get-restaurant-reviews";

const entityAdapter = createEntityAdapter()

export const reviewSlice = createSlice({
  name: "review",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectReviewById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) => builder
  .addCase(getRestaurantReviews.fulfilled,  (state, { payload }) => {
    entityAdapter.addMany(state, payload)
  })
});

export const { selectReviewById } =
reviewSlice.selectors;