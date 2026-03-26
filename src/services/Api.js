import {
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react";

export const AppAPI = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: ({
          limit = 20,
          skip = 0,
          category
        }) =>
        `/products${category ? `/category/${category}` : ""}?limit=${limit}&skip=${skip}`,
    }),
    fetchProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),
    fetchCategories: builder.query({
      query: () => `/products/category-list`,
    }),
  }),
});

export const {useFetchProductsQuery, useFetchProductByIdQuery, useFetchCategoriesQuery,} = AppAPI;