import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getUsers } from "./get-users";

const entityAdapter = createEntityAdapter()

export const userSlice = createSlice({
  name: "user",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectUserById: (state, id) => state.entities[id],
    selectUsers: (state) => state.ids
   },
  extraReducers: (builder) => builder
  .addCase(getUsers.fulfilled,  (state, { payload }) => {
    entityAdapter.addMany(state, payload)
  })
});

export const { selectUserById, selectUsers } =
userSlice.selectors;
