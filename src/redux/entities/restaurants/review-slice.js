import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
const entityAdapter = createEntityAdapter()

export const reviewSlice = createSlice({
  name: "review",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectReviewById: (state, id) => state.entities[id],
  }
});

export const { selectReviewById } =
reviewSlice.selectors;