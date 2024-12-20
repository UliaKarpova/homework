import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
    tagTypes: ['Reviews'],
    endpoints: (builder) => ({
        getRestaurants: builder.query({
            query: () => '/restaurants',
        }), 
        getUsers: builder.query({
            query: () => '/users',
        }),
        getRewiewsByRestaurantId: builder.query({
            query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
            providesTags: (restaurantId) => [{type: 'Reviews', restaurantId}]

        }),
        getMenuByRestaurantId: builder.query({
            query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`

        }),
        getDishById: builder.query({
            query: (dishId) => `/dish/${dishId}`

        }),
        addReview: builder.mutation({
            query: ({restaurantId, review}) => ({
                url: `/review/${restaurantId}`,
                method: "POST",
                body: review
            }),
            invalidatesTags: ({restaurantId}) => [{type: 'Reviews', restaurantId}]
        })
    })
})

export const { 
    useGetRestaurantsQuery, 
    useGetUsersQuery, 
    useGetRewiewsByRestaurantIdQuery, 
    useGetMenuByRestaurantIdQuery, 
    useGetDishByIdQuery,
    useAddReviewMutation
} = apiSlice;