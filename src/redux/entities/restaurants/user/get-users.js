import { createAsyncThunk } from "@reduxjs/toolkit"
import { selectUsers } from "./user-slice";

export const getUsers = createAsyncThunk('restaurants/getUsers', 
    async(_, { rejectWithValue}) => {
    const response = await fetch(`http://localhost:3001/api/users`);
    const result = await response.json()
    if (!result.length) {
        rejectWithValue('restaurants/getUsers no data')
        return
    }
    return result
}, {
    condition: (_, { getState }) => {
    return selectUsers(getState()).length === 0
    }
});