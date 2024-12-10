import { createAsyncThunk } from "@reduxjs/toolkit"
import { selectDishById } from './dish-slice'

export const getDish = createAsyncThunk('restaurants/getDish', 
    async(id, { rejectWithValue}) => {
    const response = await fetch(`http://localhost:3001/api/dish/90902233-0095-49ea-9939-1e67ed89ffb9`);
    const result = await response.json()

    if (!result.length) {
        rejectWithValue('restaurants/getDish no data')
        return
    }
    return result
}, {
    condition: (id, { getState }) => {
        console.log(id)
    return !!selectDishById(getState(), id)
}
});