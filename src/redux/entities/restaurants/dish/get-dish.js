import { createAsyncThunk } from "@reduxjs/toolkit"
import { selectDishById } from './dish-slice'

export const getDish = createAsyncThunk('restaurants/getDish', 
    async(dishId, { rejectWithValue}) => {
    const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);
    const result = await response.json()

    if (!result) {
        rejectWithValue('restaurants/getDish no data')
        return
    }
    return result
}, {
    condition: (dishId, { getState }) => {
    return !selectDishById(getState(), dishId)
}
}
);