import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

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
