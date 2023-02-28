import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { createSelector } from "@reduxjs/toolkit"
export const apiSlice = createApi({
  reducerPath: "api", // optional
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  // tagTypes: ["Post", "User"],
  endpoints: (builder) => ({
    getProductsByCategory: builder.query({
      query: (category) => `${category}`,
    }),
    getProductById: builder.query({
      query: ({ category, id }) => `${category}/${id}`,
    }),
  }),
})

export const { useGetProductsByCategoryQuery, useGetProductByIdQuery } =
  apiSlice

//getSelectors creates these selectors and we rename them with aliases using destructuring
// export const {
//   selectAll: selectAllPosts,
//   selectById: selectPostById,
//   selectIds: selectPostIds,
//   // Pass in a selector that returns the posts slice of state
// } = postsAdapter.getSelectors((state) => selectPostsData(state) ?? initialState)
