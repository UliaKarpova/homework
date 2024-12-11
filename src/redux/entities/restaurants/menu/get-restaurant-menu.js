import { createAsyncThunk } from "@reduxjs/toolkit"
import { selectRestaurantById } from '../restaurants/restaurants-slice'

export const getRestaurantMenu = createAsyncThunk('restaurants/getRestaurantMenu', 
    async(restautantId, { rejectWithValue}) => {
    const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restautantId}`);
    const result = await response.json()

    if (!result.length) {
        rejectWithValue('restaurants/getRestaurantMenu no data')
        return
    }
    return result
    }, {
        condition: (restautantId, { getState }) => {
        return !!selectRestaurantById(getState(), restautantId).menu.length
        }
    }
);