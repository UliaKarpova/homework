import { createAsyncThunk } from "@reduxjs/toolkit"
import { selectRestaurantMenuById } from './restaurants-slice'

export const getRestaurantMenu = createAsyncThunk('restaurants/getRestaurantMenu', 
    async(id, { rejectWithValue}) => {
    const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${id}`);
    const result = await response.json()

    if (!result.length) {
        rejectWithValue('restaurants/getRestaurantMenu no data')
        return
    }
    return result
}, {
    condition: (id, { getState }) => {
        console.log(selectRestaurantMenuById(getState(), id))
    return !!selectRestaurantMenuById(getState(), id)
}
});