import { createAsyncThunk } from "@reduxjs/toolkit"

export const getRestaurantReviews = createAsyncThunk('restaurants/getRestaurantReviews', 
    async(id, { rejectWithValue}) => {
    const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${id}`);
    const result = await response.json()
    if (!result.length) {
        rejectWithValue('restaurants/getRestaurantReviews no data')
        return
    }
    return result
}
);