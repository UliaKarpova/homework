import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getDish } from "./get-dish";

const entityAdapter = createEntityAdapter()

export const dishSlice = createSlice({
  name: "dish",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectDishById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) => builder
    .addCase(getDish.fulfilled,  (state, { payload }) => {
      console.log(payload)
      entityAdapter.setOne(state, payload)
    })
});

export const { selectDishById } =
dishSlice.selectors;
