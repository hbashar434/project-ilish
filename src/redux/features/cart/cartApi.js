import baseApi from "../api/baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/api/products",
    }),
    getProductsById: builder.query({
      query: (id) => `/api/products${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductsByIdQuery } = cartApi;
